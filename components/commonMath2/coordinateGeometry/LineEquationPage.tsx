"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Point = {
    x: number;
    y: number;
};

type GraphStatus =
    | "parallel"
    | "x-axis"
    | "y-axis"
    | "first-quadrant"
    | "other";

type LineSegment = {
    start: Point;
    end: Point;
};

const EPSILON = 0.000001;

const GRAPH_WIDTH = 720;
const GRAPH_HEIGHT = 640;

const GRAPH_PADDING = {
    top: 34,
    right: 34,
    bottom: 44,
    left: 52,
};

const X_MIN = -3;
const X_MAX = 3;
const Y_MIN = -2;
const Y_MAX = 4;

const M_MIN = -1.4;
const M_MAX = 2.6;
const M_STEP = 0.01;

/**
 * 두 수가 거의 같은지 확인합니다.
 */
function isNearlyEqual(a: number, b: number): boolean {
    return Math.abs(a - b) < EPSILON;
}

/**
 * 표시할 숫자를 정리합니다.
 *
 * - 정수에 가까우면 정수로 표시
 * - 그 외에는 소수 둘째 자리까지 표시
 * - -0은 0으로 표시
 */
function formatNumber(value: number): string {
    if (!Number.isFinite(value)) {
        return "";
    }

    if (isNearlyEqual(value, 0)) {
        return "0";
    }

    if (isNearlyEqual(value, Math.round(value))) {
        return String(Math.round(value));
    }

    return value
        .toFixed(2)
        .replace(/\.?0+$/, "");
}

/**
 * 현재 m값을 보기 좋은 문자열로 바꿉니다.
 */
function formatMValue(m: number): string {
    if (isNearlyEqual(m, -1 / 3)) {
        return "-1/3";
    }

    if (isNearlyEqual(m, 0)) {
        return "0";
    }

    if (isNearlyEqual(m, 1)) {
        return "1";
    }

    if (isNearlyEqual(m, -1)) {
        return "-1";
    }

    return formatNumber(m);
}

/**
 * 두 직선
 *
 * x+y-2=0
 * y=m(x+1)+1
 *
 * 의 교점을 구합니다.
 *
 * m=-1이면 두 직선의 기울기가 모두 -1이므로 평행합니다.
 */
function getIntersection(m: number): Point | null {
    if (isNearlyEqual(m, -1)) {
        return null;
    }

    return {
        x: (1 - m) / (m + 1),
        y: (3 * m + 1) / (m + 1),
    };
}

/**
 * 교점의 위치에 따른 현재 상태를 판정합니다.
 */
function getGraphStatus(
    m: number,
    intersection: Point | null,
): GraphStatus {
    if (intersection === null || isNearlyEqual(m, -1)) {
        return "parallel";
    }

    if (
        isNearlyEqual(intersection.y, 0) &&
        intersection.x > 0
    ) {
        return "x-axis";
    }

    if (
        isNearlyEqual(intersection.x, 0) &&
        intersection.y > 0
    ) {
        return "y-axis";
    }

    if (intersection.x > 0 && intersection.y > 0) {
        return "first-quadrant";
    }

    return "other";
}

/**
 * 현재 상태에 표시할 문구를 정합니다.
 */
function getStatusText(status: GraphStatus): string {
    switch (status) {
        case "parallel":
            return "두 직선이 평행하여 교점이 없습니다.";

        case "x-axis":
            return "교점이 x축 위에 있습니다.";

        case "y-axis":
            return "교점이 y축 위에 있습니다.";

        case "first-quadrant":
            return "교점이 제1사분면에 있습니다.";

        case "other":
            return "교점이 제1사분면에 있지 않습니다.";
    }
}

/**
 * SVG 영역 안에서 직선이 보이는 두 끝점을 구합니다.
 *
 * y=mx+b 형태의 직선을
 * 좌표평면 경계와 만나는 점들로 잘라서 반환합니다.
 */
function getVisibleLineSegment(
    slope: number,
    yIntercept: number,
): LineSegment | null {
    const candidates: Point[] = [];

    const yAtXMin = slope * X_MIN + yIntercept;
    const yAtXMax = slope * X_MAX + yIntercept;

    if (yAtXMin >= Y_MIN && yAtXMin <= Y_MAX) {
        candidates.push({
            x: X_MIN,
            y: yAtXMin,
        });
    }

    if (yAtXMax >= Y_MIN && yAtXMax <= Y_MAX) {
        candidates.push({
            x: X_MAX,
            y: yAtXMax,
        });
    }

    if (!isNearlyEqual(slope, 0)) {
        const xAtYMin = (Y_MIN - yIntercept) / slope;
        const xAtYMax = (Y_MAX - yIntercept) / slope;

        if (xAtYMin >= X_MIN && xAtYMin <= X_MAX) {
            candidates.push({
                x: xAtYMin,
                y: Y_MIN,
            });
        }

        if (xAtYMax >= X_MIN && xAtYMax <= X_MAX) {
            candidates.push({
                x: xAtYMax,
                y: Y_MAX,
            });
        }
    }

    const uniqueCandidates = candidates.filter(
        (point, index, array) =>
            array.findIndex(
                (other) =>
                    isNearlyEqual(point.x, other.x) &&
                    isNearlyEqual(point.y, other.y),
            ) === index,
    );

    if (uniqueCandidates.length < 2) {
        return null;
    }

    return {
        start: uniqueCandidates[0],
        end: uniqueCandidates[1],
    };
}

function RotatingLineIntersectionDemo() {
    const [m, setM] = useState<number>(0);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const animationFrameRef = useRef<number | null>(null);
    const animationStartRef = useRef<number | null>(null);

    const plotWidth =
        GRAPH_WIDTH -
        GRAPH_PADDING.left -
        GRAPH_PADDING.right;

    const plotHeight =
        GRAPH_HEIGHT -
        GRAPH_PADDING.top -
        GRAPH_PADDING.bottom;

    /**
     * 수학 좌표의 x값을 SVG x좌표로 바꿉니다.
     */
    const toSvgX = useCallback(
        (x: number): number => {
            return (
                GRAPH_PADDING.left +
                ((x - X_MIN) / (X_MAX - X_MIN)) * plotWidth
            );
        },
        [plotWidth],
    );

    /**
     * 수학 좌표의 y값을 SVG y좌표로 바꿉니다.
     *
     * SVG는 아래쪽이 양의 방향이므로 위아래를 뒤집습니다.
     */
    const toSvgY = useCallback(
        (y: number): number => {
            return (
                GRAPH_PADDING.top +
                ((Y_MAX - y) / (Y_MAX - Y_MIN)) * plotHeight
            );
        },
        [plotHeight],
    );

    const intersection = useMemo(
        () => getIntersection(m),
        [m],
    );

    const status = useMemo(
        () => getGraphStatus(m, intersection),
        [m, intersection],
    );

    const statusText = useMemo(
        () => getStatusText(status),
        [status],
    );

    /**
     * 고정 직선
     *
     * x+y-2=0
     * y=-x+2
     */
    const fixedLineSegment = useMemo(
        () => getVisibleLineSegment(-1, 2),
        [],
    );

    /**
     * 움직이는 직선
     *
     * y=m(x+1)+1
     * y=mx+(m+1)
     */
    const movingLineSegment = useMemo(
        () => getVisibleLineSegment(m, m + 1),
        [m],
    );

    const xAxisY = toSvgY(0);
    const yAxisX = toSvgX(0);

    const fixedPoint: Point = {
        x: -1,
        y: 1,
    };

    const firstQuadrantBoundaryStart: Point = {
        x: 0,
        y: 2,
    };

    const firstQuadrantBoundaryEnd: Point = {
        x: 2,
        y: 0,
    };

    /**
     * 슬라이더나 버튼으로 m값을 변경합니다.
     */
    const changeM = useCallback((nextM: number) => {
        const clampedM = Math.min(
            M_MAX,
            Math.max(M_MIN, nextM),
        );

        setM(clampedM);
    }, []);

    /**
     * 자동 회전을 정지합니다.
     */
    const stopAnimation = useCallback(() => {
        setIsAnimating(false);
        animationStartRef.current = null;

        if (animationFrameRef.current !== null) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }
    }, []);

    /**
     * 자동 회전을 시작하거나 정지합니다.
     *
     * 실제 애니메이션 반복 코드는 2부의 useEffect에서 완성합니다.
     */
    const toggleAnimation = useCallback(() => {
        setIsAnimating((previous) => !previous);
    }, []);

    useEffect(() => {
        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    /**
     * 좌표평면의 격자선과 숫자를 만듭니다.
     */
    const renderGrid = () => {
        const verticalLines = [];

        for (let x = Math.ceil(X_MIN); x <= Math.floor(X_MAX); x += 1) {
            verticalLines.push(
                <g key={`vertical-${x}`}>
                    <line
                        x1={toSvgX(x)}
                        y1={toSvgY(Y_MIN)}
                        x2={toSvgX(x)}
                        y2={toSvgY(Y_MAX)}
                        className={
                            x === 0
                                ? "stroke-gray-500"
                                : "stroke-gray-200"
                        }
                        strokeWidth={x === 0 ? 1.8 : 1}
                    />

                    {x !== 0 && (
                        <text
                            x={toSvgX(x)}
                            y={xAxisY + 22}
                            textAnchor="middle"
                            className="fill-gray-500 text-[13px]"
                        >
                            {x}
                        </text>
                    )}
                </g>,
            );
        }

        const horizontalLines = [];

        for (let y = Math.ceil(Y_MIN); y <= Math.floor(Y_MAX); y += 1) {
            horizontalLines.push(
                <g key={`horizontal-${y}`}>
                    <line
                        x1={toSvgX(X_MIN)}
                        y1={toSvgY(y)}
                        x2={toSvgX(X_MAX)}
                        y2={toSvgY(y)}
                        className={
                            y === 0
                                ? "stroke-gray-500"
                                : "stroke-gray-200"
                        }
                        strokeWidth={y === 0 ? 1.8 : 1}
                    />

                    {y !== 0 && (
                        <text
                            x={yAxisX - 12}
                            y={toSvgY(y) + 5}
                            textAnchor="end"
                            className="fill-gray-500 text-[13px]"
                        >
                            {y}
                        </text>
                    )}
                </g>,
            );
        }

        return (
            <>
                {verticalLines}
                {horizontalLines}

                <text
                    x={toSvgX(X_MAX) - 4}
                    y={xAxisY - 10}
                    textAnchor="end"
                    className="fill-gray-700 font-serif text-[40px] italic"
                >
                    x
                </text>

                <text
                    x={yAxisX + 12}
                    y={toSvgY(Y_MAX) + 18}
                    className="fill-gray-700 font-serif text-[40px] italic"
                >
                    y
                </text>

                <text
                    x={yAxisX - 10}
                    y={xAxisY + 42}
                    textAnchor="end"
                    className="fill-gray-500 text-[30px]"
                >
                    O
                </text>
            </>
        );
    };

    /**
     * 오른쪽의 좌표평면 그래프를 그립니다.
     */
    const renderGraph = () => {
        return (
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-3 sm:p-4">
                <svg
                    viewBox={`0 0 ${GRAPH_WIDTH} ${GRAPH_HEIGHT}`}
                    role="img"
                    aria-label="고정 직선과 고정점을 중심으로 회전하는 직선의 교점 그래프"
                    className="block h-auto w-full"
                >
                    <rect
                        x={0}
                        y={0}
                        width={GRAPH_WIDTH}
                        height={GRAPH_HEIGHT}
                        fill="white"
                    />

                    {renderGrid()}

                    {/* 제1사분면에 포함되는 고정 직선의 구간 */}
                    <line
                        x1={toSvgX(firstQuadrantBoundaryStart.x)}
                        y1={toSvgY(firstQuadrantBoundaryStart.y)}
                        x2={toSvgX(firstQuadrantBoundaryEnd.x)}
                        y2={toSvgY(firstQuadrantBoundaryEnd.y)}
                        className="stroke-emerald-400"
                        strokeWidth={10}
                        strokeLinecap="round"
                        opacity={0.35}
                    />

                    {/* 고정 직선 x+y-2=0 */}
                    {fixedLineSegment && (
                        <line
                            x1={toSvgX(fixedLineSegment.start.x)}
                            y1={toSvgY(fixedLineSegment.start.y)}
                            x2={toSvgX(fixedLineSegment.end.x)}
                            y2={toSvgY(fixedLineSegment.end.y)}
                            className="stroke-blue-600"
                            strokeWidth={3.5}
                            strokeLinecap="round"
                        />
                    )}

                    {/* 움직이는 직선 y=m(x+1)+1 */}
                    {movingLineSegment && (
                        <line
                            x1={toSvgX(movingLineSegment.start.x)}
                            y1={toSvgY(movingLineSegment.start.y)}
                            x2={toSvgX(movingLineSegment.end.x)}
                            y2={toSvgY(movingLineSegment.end.y)}
                            className="stroke-rose-500"
                            strokeWidth={3.5}
                            strokeLinecap="round"
                        />
                    )}

                    {/* 경계점 (0,2) */}
                    <circle
                        cx={toSvgX(0)}
                        cy={toSvgY(2)}
                        r={5}
                        className="fill-emerald-500 stroke-white"
                        strokeWidth={2}
                    />

                    <text
                        x={toSvgX(0) + 10}
                        y={toSvgY(2) - 10}
                        className="fill-emerald-700 text-[30px] font-semibold"
                    >
                        (0, 2)
                    </text>

                    {/* 경계점 (2,0) */}
                    <circle
                        cx={toSvgX(2)}
                        cy={toSvgY(0)}
                        r={5}
                        className="fill-emerald-500 stroke-white"
                        strokeWidth={2}
                    />

                    <text
                        x={toSvgX(2) + 8}
                        y={toSvgY(0) - 10}
                        className="fill-emerald-700 text-[30px] font-semibold"
                    >
                        (2, 0)
                    </text>

                    {/* 움직이는 직선의 고정점 */}
                    <circle
                        cx={toSvgX(fixedPoint.x)}
                        cy={toSvgY(fixedPoint.y)}
                        r={7}
                        className="fill-rose-500 stroke-white"
                        strokeWidth={2.5}
                    />

                    <text
                        x={toSvgX(fixedPoint.x) - 10}
                        y={toSvgY(fixedPoint.y) - 14}
                        textAnchor="end"
                        className="fill-rose-600 text-[30px] font-bold"
                    >
                        F(-1, 1)
                    </text>

                    {/* 두 직선의 교점 */}
                    {intersection && (
                        <>
                            <circle
                                cx={toSvgX(intersection.x)}
                                cy={toSvgY(intersection.y)}
                                r={7}
                                className={
                                    status === "first-quadrant"
                                        ? "fill-emerald-500 stroke-white"
                                        : status === "x-axis" ||
                                            status === "y-axis"
                                            ? "fill-amber-500 stroke-white"
                                            : "fill-violet-500 stroke-white"
                                }
                                strokeWidth={2.5}
                            />

                            <text
                                x={toSvgX(intersection.x) + 11}
                                y={toSvgY(intersection.y) - 12}
                                className="fill-gray-800 text-[30px] font-bold"
                            >
                                {`P(${formatNumber(intersection.x)}, ${formatNumber(
                                    intersection.y,
                                )})`}
                            </text>
                        </>
                    )}

                    {/* 직선 이름 */}
                    <text
                        x={toSvgX(1.6)}
                        y={toSvgY(-0.9)}
                        className="fill-blue-700 text-[30px] font-semibold"
                    >
                        x+y-2=0
                    </text>

                    <text
                        x={toSvgX(-2.75)}
                        y={toSvgY(m * (-2.75 + 1) + 1) - 10}
                        className="fill-rose-600 text-[30px] font-semibold"
                    >
                        y=m(x+1)+1
                    </text>

                    {/* 평행 상태 안내 */}
                    {status === "parallel" && (
                        <g>
                            <rect
                                x={GRAPH_WIDTH / 2 - 116}
                                y={22}
                                width={232}
                                height={38}
                                rx={10}
                                className="fill-amber-50 stroke-amber-300"
                            />

                            <text
                                x={GRAPH_WIDTH / 2}
                                y={47}
                                textAnchor="middle"
                                className="fill-amber-700 text-[14px] font-bold"
                            >
                                m=-1 : 두 직선이 평행
                            </text>
                        </g>
                    )}
                </svg>
            </div>
        );
    };

    // 2부에서 자동 회전 useEffect와 실제 JSX return을 이어서 작성합니다.
    /**
 * 자동 회전 애니메이션
 *
 * m=-2에서 m=2까지 이동한 뒤 다시 돌아옵니다.
 * 한 번 왕복하는 데 약 8초가 걸립니다.
 */
    useEffect(() => {
        if (!isAnimating) {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }

            animationStartRef.current = null;
            return;
        }

        const animationDuration = 8000;

        const animate = (timestamp: number) => {
            if (animationStartRef.current === null) {
                animationStartRef.current = timestamp;
            }

            const elapsed =
                timestamp - animationStartRef.current;

            const progress =
                (elapsed % animationDuration) /
                animationDuration;

            /*
             * 0 → 1 구간에서
             *
             * progress 0     : m=-2
             * progress 0.5   : m=2
             * progress 1     : m=-2
             *
             * 가 되도록 왕복시킵니다.
             */
            const pingPongProgress =
                progress <= 0.5
                    ? progress * 2
                    : (1 - progress) * 2;

            const animatedM =
                M_MIN +
                (M_MAX - M_MIN) * pingPongProgress;

            setM(animatedM);

            animationFrameRef.current =
                requestAnimationFrame(animate);
        };

        animationFrameRef.current =
            requestAnimationFrame(animate);

        return () => {
            if (animationFrameRef.current !== null) {
                cancelAnimationFrame(
                    animationFrameRef.current,
                );

                animationFrameRef.current = null;
            }
        };
    }, [isAnimating]);

    /**
     * 경계값 버튼을 누르면 자동 회전을 멈추고
     * 해당 m값으로 이동합니다.
     */
    const selectM = useCallback(
        (nextM: number) => {
            stopAnimation();
            changeM(nextM);
        },
        [changeM, stopAnimation],
    );

    /**
     * 슬라이더를 직접 움직이면 자동 회전을 멈춥니다.
     */
    const handleSliderChange = useCallback(
        (
            event: React.ChangeEvent<HTMLInputElement>,
        ) => {
            stopAnimation();
            changeM(Number(event.target.value));
        },
        [changeM, stopAnimation],
    );

    /**
     * 현재 상태에 따른 카드 스타일입니다.
     */
    const getStatusCardClassName = (): string => {
        switch (status) {
            case "first-quadrant":
                return [
                    "border-emerald-500/30",
                    "bg-emerald-500/10",
                    "text-emerald-300",
                ].join(" ");

            case "x-axis":
            case "y-axis":
                return [
                    "border-amber-500/30",
                    "bg-amber-500/10",
                    "text-amber-300",
                ].join(" ");

            case "parallel":
                return [
                    "border-orange-500/30",
                    "bg-orange-500/10",
                    "text-orange-300",
                ].join(" ");

            case "other":
                return [
                    "border-violet-500/30",
                    "bg-violet-500/10",
                    "text-violet-300",
                ].join(" ");
        }
    };

    return (
        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

            <h4 className="text-xl font-bold text-white">
                직선 움직여 보기
            </h4>

            <p className="mt-2 text-gray-400">
                기울기 <InlineMath math="m" />을 움직이며 교점의 위치를 확인해 봅시다.
            </p>

            <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                {/* 조작 영역 */}
                <div className="space-y-5">

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="space-y-4 text-gray-300">
                            <BlockMath math="x+y-2=0" />
                            <BlockMath math="y=m(x+1)+1" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="flex items-center justify-between">
                            <span className="font-bold text-white">
                                기울기
                            </span>

                            <span className="rounded-lg bg-rose-500/10 px-3 py-2 font-bold text-rose-300">
                                <InlineMath math="m=" /> {formatMValue(m)}
                            </span>
                        </div>

                        <input
                            type="range"
                            min={-1.4}
                            max={2.6}
                            step={0.01}
                            value={m}
                            onChange={(event) =>
                                setM(Number(event.target.value))
                            }
                            className="mt-6 w-full accent-rose-500"
                        />

                        <div className="mt-5 grid grid-cols-3 gap-2">
                            <button
                                type="button"
                                onClick={() => setM(-1 / 3)}
                                className="rounded-lg border border-white/10 bg-white/5 py-3 text-gray-300 hover:bg-white/10"
                            >
                                <InlineMath math="m=-\frac13" />
                            </button>

                            <button
                                type="button"
                                onClick={() => setM(0)}
                                className="rounded-lg border border-white/10 bg-white/5 py-3 text-gray-300 hover:bg-white/10"
                            >
                                <InlineMath math="m=0" />
                            </button>

                            <button
                                type="button"
                                onClick={() => setM(1)}
                                className="rounded-lg border border-white/10 bg-white/5 py-3 text-gray-300 hover:bg-white/10"
                            >
                                <InlineMath math="m=1" />
                            </button>
                        </div>

                    </div>



                </div>

                {/* 그래프 */}
                {renderGraph()}

            </div>

            <div className="mt-5 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                <button
                    type="button"
                    onClick={toggleAnimation}
                    className={[
                        "w-full rounded-lg border px-4 py-3",
                        "font-semibold transition-colors",
                        isAnimating
                            ? "border-rose-400 bg-rose-400/20 text-rose-200 hover:bg-rose-400/30"
                            : "border-blue-400/40 bg-blue-400/10 text-blue-200 hover:bg-blue-400/20",
                    ].join(" ")}
                >
                    {isAnimating ? "■ 회전 멈추기" : "▶ 회전 보기"}
                </button>

                <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4 text-center">

                    {intersection ? (
                        <>
                            <p className="font-bold text-white">
                                교점{" "}
                                <InlineMath
                                    math={`P(${formatNumber(intersection.x)},${formatNumber(intersection.y)})`}
                                />
                            </p>

                            <p className="mt-2 text-emerald-300">
                                {statusText}
                            </p>
                        </>
                    ) : (
                        <p className="font-bold text-orange-300">
                            두 직선이 평행합니다.
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
};
export default function LineEquationPage() {
    return (
        <>
            {/* 1.9 직선의 방정식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.9 직선의 방정식
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면 위의 직선은 일차함수 또는 직선의 방정식으로 나타낼 수 있습니다.
                    <br />
                    일차함수는 세로선을 나타낼 수 없지만, 직선의 방정식은 좌표평면 위의
                    모든 직선을 나타낼 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 일차함수와 직선의 방정식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 일차함수와 직선의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일차함수는 일반적으로 다음과 같이 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=mx+n
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            일차함수에서는 하나의{" "}
                            <InlineMath math="x" />
                            값에 하나의{" "}
                            <InlineMath math="y" />
                            값이 대응해야 하므로 세로선을 나타낼 수 없습니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    일차함수
                                </p>

                                <BlockMath
                                    math={String.raw`
                            y=mx+n
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    세로선을 제외한 직선을 나타낼 수 있습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    직선의 방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
                            ax+by+c=0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    좌표평면 위의 모든 직선을 나타낼 수 있습니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                두 표현의 차이
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="y=mx+n" />은{" "}
                                <InlineMath math="y" />를{" "}
                                <InlineMath math="x" />에 대한 식으로 나타낸 형태입니다.{" "}
                                따라서 <InlineMath math="x=p" />와 같은 세로선은
                                일차함수로 나타낼 수 없습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                반면 <InlineMath math="ax+by+c=0" />에서는{" "}
                                <InlineMath math="b=0" />인 경우도 허용되므로
                                세로선까지 나타낼 수 있습니다.
                            </p>

                        </div>

                    </div>

                    {/* 기울기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 직선의 기울기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선의 기울기는{" "}
                            <InlineMath math="x" />가 오른쪽으로{" "}
                            <InlineMath math="1" />만큼 움직일 때{" "}
                            <InlineMath math="y" />가 변하는 양입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                기울기의 뜻
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{기울기}
                        =
                        \frac{\text{\(y\)의 변화량}}
                        {\text{\(x\)의 변화량}}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                특히 <InlineMath math="x" />가 오른쪽으로{" "}
                                <InlineMath math="1" />만큼 움직일 때에는{" "}
                                <InlineMath math="y" />의 변화량이 그대로 기울기가 됩니다.
                            </p>

                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    일차함수의 기울기
                                </p>

                                <BlockMath
                                    math={String.raw`
                            y=mx+n
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \boxed{\text{기울기}=m}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    일반형의 기울기
                                </p>

                                <BlockMath
                                    math={String.raw`
                            ax+by+c=0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            y=-\frac{a}{b}x-\frac{c}{b}
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \boxed{\text{기울기}=-\frac{a}{b}}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    단, <InlineMath math="b\neq0" />인 경우입니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                기울기의 부호
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    • 기울기가 양수이면 오른쪽으로 갈수록 직선이 올라갑니다.
                                </p>

                                <p>
                                    • 기울기가 음수이면 오른쪽으로 갈수록 직선이 내려갑니다.
                                </p>

                                <p>
                                    • 기울기가 <InlineMath math="0" />이면 가로선입니다.
                                </p>

                                <p>
                                    • 세로선은 <InlineMath math="x" />의 변화량이{" "}
                                    <InlineMath math="0" />이므로 기울기가 없습니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 기울기와 각 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 기울기와 직선이 이루는 각
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선이 <InlineMath math="x" />축의 양의 방향과 이루는 각을{" "}
                            <InlineMath math="\theta" />라 하면 직선의 기울기는{" "}
                            <InlineMath math="\tan\theta" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{m=\tan\theta}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            각 <InlineMath math="\theta" />는
                            <InlineMath math="x" />축의 양의 방향에서 반시계 방향으로 잽니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-black/20">

                            <table className="w-full min-w-[620px] text-center">

                                <thead className="border-b border-white/10 bg-white/5">

                                    <tr>

                                        <th className="px-4 py-4 font-bold text-white">
                                            이루는 각
                                        </th>

                                        <th className="px-4 py-4 font-bold text-white">
                                            탄젠트값
                                        </th>

                                        <th className="px-4 py-4 font-bold text-white">
                                            기울기
                                        </th>

                                    </tr>

                                </thead>

                                <tbody className="divide-y divide-white/10 text-gray-300">

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="30^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan30^\circ=\dfrac1{\sqrt3}" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\dfrac1{\sqrt3}" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="45^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan45^\circ=1" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="1" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="60^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan60^\circ=\sqrt3" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\sqrt3" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="120^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan120^\circ=-\sqrt3" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="-\sqrt3" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="135^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan135^\circ=-1" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="-1" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="150^\circ" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="\tan150^\circ=-\dfrac1{\sqrt3}" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="-\dfrac1{\sqrt3}" />
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    예시 1
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선이 <InlineMath math="x" />축의 양의 방향과{" "}
                                    <InlineMath math="60^\circ" />의 각을 이루면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            m=\tan60^\circ=\sqrt3
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    예시 2
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선이 <InlineMath math="x" />축의 양의 방향과{" "}
                                    <InlineMath math="135^\circ" />의 각을 이루면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            m=\tan135^\circ=-1
                        `}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선이 <InlineMath math="x" />축의 양의 방향과{" "}
                                <InlineMath math="90^\circ" />의 각을 이루면 세로선입니다.
                                이때 <InlineMath math="\tan90^\circ" />는 정의되지 않으므로
                                세로선의 기울기도 정의되지 않습니다.
                            </p>

                        </div>

                    </div>

                    {/* 절편 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. <InlineMath math="x" />절편과 <InlineMath math="y" />절편
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선이 좌표축과 만나는 위치를 절편이라고 합니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    <InlineMath math="x" />절편
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선이 <InlineMath math="x" />축과 만나는 점의{" "}
                                    <InlineMath math="x" />좌표입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="x" />축 위의 점은{" "}
                                    <InlineMath math="y=0" />이므로 직선의 방정식에{" "}
                                    <InlineMath math="y=0" />을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{y=0\text{을 대입}}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    <InlineMath math="y" />절편
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선이 <InlineMath math="y" />축과 만나는 점의{" "}
                                    <InlineMath math="y" />좌표입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="y" />축 위의 점은{" "}
                                    <InlineMath math="x=0" />이므로 직선의 방정식에{" "}
                                    <InlineMath math="x=0" />을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{x=0\text{을 대입}}
                        `}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <BlockMath
                                math={String.raw`
                        2x+3y-6=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />절편은{" "}
                                <InlineMath math="y=0" />을 대입하여 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        2x-6=0
                        \quad\Longrightarrow\quad
                        x=3
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="y" />절편은{" "}
                                <InlineMath math="x=0" />을 대입하여 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        3y-6=0
                        \quad\Longrightarrow\quad
                        y=2
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{x\text{절편}=3,\qquad y\text{절편}=2}
                    `}
                            />

                        </div>

                    </div>

                    {/* 세로선과 가로선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 세로선과 가로선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세로선과 가로선은 기울기와 절편을 이용하지 않고
                            좌표가 일정하다는 성질로 나타냅니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    세로선
                                </p>

                                <p className="leading-8 text-gray-300">
                                    모든 점의 <InlineMath math="x" />좌표가{" "}
                                    <InlineMath math="p" />로 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{x=p}
                        `}
                                />

                                <div className="mt-3 space-y-2 leading-8 text-gray-300">

                                    <p>
                                        • <InlineMath math="y" />축에 평행한 직선
                                    </p>

                                    <p>
                                        • <InlineMath math="x" />축에 수직인 직선
                                    </p>

                                    <p>
                                        • 기울기가 없는 직선
                                    </p>

                                </div>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    가로선
                                </p>

                                <p className="leading-8 text-gray-300">
                                    모든 점의 <InlineMath math="y" />좌표가{" "}
                                    <InlineMath math="q" />로 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{y=q}
                        `}
                                />

                                <div className="mt-3 space-y-2 leading-8 text-gray-300">

                                    <p>
                                        • <InlineMath math="x" />축에 평행한 직선
                                    </p>

                                    <p>
                                        • <InlineMath math="y" />축에 수직인 직선
                                    </p>

                                    <p>
                                        • 기울기가 <InlineMath math="0" />인 직선
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                좌표로 바로 판단하기
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    • 점 <InlineMath math="(3,5)" />를 지나는 세로선은{" "}
                                    <InlineMath math="x=3" />입니다.
                                </p>

                                <p>
                                    • 점 <InlineMath math="(3,5)" />를 지나는 가로선은{" "}
                                    <InlineMath math="y=5" />입니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 기울기와 한 점이 주어진 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 기울기와 한 점이 주어진 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선의 기울기와 직선이 지나는 한 점이 주어지면
                            직선의 방정식을 바로 만들 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                조건을 보고 바로 식 만들기
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        y=
                        \text{기울기}
                        \left(
                        x-\text{지나는 점의 \(x\)좌표}
                        \right)
                        +
                        \text{지나는 점의 \(y\)좌표}
                        }
                    `}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            기울기가 <InlineMath math="m" />이고 점{" "}
                            <InlineMath math="(\alpha,\beta)" />를 지나는 직선은
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=m(x-\alpha)+\beta
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                기울기가 <InlineMath math="3" />이고 점{" "}
                                <InlineMath math="(2,5)" />를 지나는 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=3(x-2)+5
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                필요하면 식을 정리하여
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=3x-1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                로 나타냅니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                기울기가 <InlineMath math="-2" />이고 점{" "}
                                <InlineMath math="(-1,4)" />를 지나는 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=-2\{x-(-1)\}+4
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        y=-2(x+1)+4
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        y=-2x+2
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                부호에 주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                지나는 점의 <InlineMath math="x" />좌표는
                                괄호 안에서 빼고, <InlineMath math="y" />좌표는
                                괄호 밖에 그대로 더합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        (2,5)
                        \quad\Longrightarrow\quad
                        y=m(x-2)+5
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        (-2,-5)
                        \quad\Longrightarrow\quad
                        y=m(x+2)-5
                    `}
                            />

                        </div>

                    </div>

                    {/* 각과 한 점이 주어진 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 직선이 이루는 각과 한 점이 주어진 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선이 <InlineMath math="x" />축의 양의 방향과 이루는 각이
                            주어지면 먼저 탄젠트값으로 기울기를 구합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{기울기}=\tan\theta
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            그 기울기와 지나는 점을 바로 직선의 방정식에 넣습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />축의 양의 방향과{" "}
                                <InlineMath math="60^\circ" />의 각을 이루고 점{" "}
                                <InlineMath math="(3,-2)" />를 지나는 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{기울기}
                        =
                        \tan60^\circ
                        =
                        \sqrt3
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        y=\sqrt3(x-3)-2
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />축의 양의 방향과{" "}
                                <InlineMath math="120^\circ" />의 각을 이루고 점{" "}
                                <InlineMath math="(2,5)" />를 지나는 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{기울기}
                        =
                        \tan120^\circ
                        =
                        -\sqrt3
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        y=-\sqrt3(x-2)+5
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                실전에서의 순서
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{각}
                        \;\longrightarrow\;
                        \text{탄젠트값}
                        \;\longrightarrow\;
                        \text{기울기}
                        \;\longrightarrow\;
                        \text{직선의 방정식}
                    `}
                            />

                        </div>

                    </div>

                    {/* 두 점이 주어진 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 두 점이 주어진 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점을 지나는 직선의 방정식은 먼저 두 점으로 기울기를 구한 뒤,
                            기울기와 한 점이 주어진 직선의 방정식을 이용합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                풀이 순서
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    ① 두 점을 이용하여 기울기를 구합니다.
                                </p>

                                <p>
                                    ② 구한 기울기와 두 점 중 한 점을 식에 바로 넣습니다.
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(x_1,y_1),\ B(x_2,y_2)" />를 지나는
                            직선의 기울기는
                        </p>

                        <BlockMath
                            math={String.raw`
                    m=
                    \frac{y_2-y_1}{x_2-x_1}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 구한 기울기와 한 점을 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=
                    \frac{y_2-y_1}{x_2-x_1}
                    (x-x_1)+y_1
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 점 <InlineMath math="(1,2),\ (4,8)" />을 지나는 직선의
                                방정식을 구하겠습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                먼저 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{8-2}{4-1}
                        =
                        \frac63
                        =
                        2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. 기울기 <InlineMath math="2" />와 점{" "}
                                <InlineMath math="(1,2)" />를 바로 식에 넣으면
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=2(x-1)+2
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{y=2x}
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                두 점의 <InlineMath math="x" />좌표가 같을 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 점의 <InlineMath math="x" />좌표가 같으면 세로선이므로
                                기울기를 구하지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        (3,1),\ (3,7)
                        \quad\Longrightarrow\quad
                        \boxed{x=3}
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="mb-3 font-bold text-green-300">
                                두 점의 <InlineMath math="y" />좌표가 같을 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 점의 <InlineMath math="y" />좌표가 같으면 기울기가{" "}
                                <InlineMath math="0" />인 가로선입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        (1,4),\ (6,4)
                        \quad\Longrightarrow\quad
                        \boxed{y=4}
                    `}
                            />

                        </div>

                    </div>

                    {/* 절편형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            9. <InlineMath math="x" />절편과 <InlineMath math="y" />절편이 주어진 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선의 <InlineMath math="x" />절편이{" "}
                            <InlineMath math="p" />,{" "}
                            <InlineMath math="y" />절편이{" "}
                            <InlineMath math="q" />이면 직선은 두 점
                        </p>

                        <BlockMath
                            math={String.raw`
                    (p,0),\qquad(0,q)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 지납니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                직선의 절편형
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \frac{x}{p}+\frac{y}{q}=1
                        }
                    `}
                            />

                            <p className="mt-3 text-center leading-8 text-gray-300">
                                <InlineMath math="x" /> 아래에는{" "}
                                <InlineMath math="x" />절편,{" "}
                                <InlineMath math="y" /> 아래에는{" "}
                                <InlineMath math="y" />절편을 넣고 합을{" "}
                                <InlineMath math="1" />로 만듭니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />절편이{" "}
                                <InlineMath math="3" />이고{" "}
                                <InlineMath math="y" />절편이{" "}
                                <InlineMath math="2" />인 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \frac{x}{3}+\frac{y}{2}=1
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. 양변에 <InlineMath math="6" />을 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        2x+3y=6
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{2x+3y-6=0}
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />절편이{" "}
                                <InlineMath math="-4" />이고{" "}
                                <InlineMath math="y" />절편이{" "}
                                <InlineMath math="3" />인 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{x}{-4}+\frac{y}{3}=1
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        -\frac{x}{4}+\frac{y}{3}=1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                절편이 0인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                절편형에서는 분모에 절편을 넣으므로{" "}
                                <InlineMath math="x" />절편이나{" "}
                                <InlineMath math="y" />절편이{" "}
                                <InlineMath math="0" />이면 사용할 수 없습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이때에는 기울기와 한 점 또는 두 점을 이용하여 직선의 방정식을
                                구합니다.
                            </p>

                        </div>

                    </div>

                    {/* 조건에 따른 직선의 방정식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            10. 조건에 따라 직선의 방정식 만들기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            문제에서 주어진 조건을 확인하면 어떤 방법을 사용할지 바로 결정할 수 있습니다.
                        </p>

                        <div className="mt-5 space-y-4">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    기울기와 한 점
                                </p>

                                <BlockMath
                                    math={String.raw`
                            y=
                            \text{기울기}
                            \left(
                            x-\text{지나는 점의 \(x\)좌표}
                            \right)
                            +
                            \text{지나는 점의 \(y\)좌표}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    두 점
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \text{두 점으로 기울기를 구한 뒤}
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \text{기울기와 한 점이 주어진 식을 이용}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-3 font-bold text-purple-300">
                                    x절편과 y절편
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{x}{x\text{절편}}
                            +
                            \frac{y}{y\text{절편}}
                            =
                            1
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                <p className="mb-3 font-bold text-orange-300">
                                    세로선과 가로선
                                </p>

                                <BlockMath
                                    math={String.raw`
                            x=p
                            \qquad\text{또는}\qquad
                            y=q
                        `}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(7,-3),\ B(2,-8)" />을 이은 선분{" "}
                            <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="3:2" />로 내분하는 점과 점{" "}
                            <InlineMath math="(5,2)" />를 지나는 직선의 방정식을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="3:2" />로 내분하는 점을{" "}
                                <InlineMath math="P" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                내분점은 문제에 보이는 안쪽의 곱과 바깥쪽의 곱을 더한 뒤
                                비율의 합으로 나누므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    P=\frac{3B+2A}{3+2}
                `}
                            />

                            <p className="leading-8">
                                입니다. 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    \frac{
                    3(2,-8)+2(7,-3)
                    }5\\[6pt]
                    &=
                    \frac{
                    (6,-24)+(14,-6)
                    }5\\[6pt]
                    &=
                    \frac{(20,-30)}5\\[6pt]
                    &=(4,-6)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 구하는 직선은 두 점{" "}
                                <InlineMath math="P(4,-6)" />과{" "}
                                <InlineMath math="(5,2)" />를 지납니다.
                            </p>

                            <p className="leading-8">
                                두 점을 이용하여 기울기를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{기울기}
                    =
                    \frac{2-(-6)}{5-4}
                    =
                    8
                `}
                            />

                            <p className="leading-8">
                                기울기가 <InlineMath math="8" />이고 점{" "}
                                <InlineMath math="(5,2)" />를 지나므로 조건을 식에 바로 넣으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=8(x-5)+2
                `}
                            />

                            <p className="leading-8">
                                이를 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=8x-38
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{y=8x-38}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 내분점의 좌표를 구하면 두 점이 주어진 직선의 문제가 됩니다.
                                    두 점으로 기울기를 구한 뒤, 기울기와 한 점을 직선의 방정식에
                                    바로 넣습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{내분점}
                        \;\longrightarrow\;
                        \text{기울기}
                        \;\longrightarrow\;
                        \text{직선의 방정식}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />
                            축의 양의 방향과 이루는 각의 크기가{" "}
                            <InlineMath math="30^\circ" />
                            이고 점{" "}
                            <InlineMath math="(3,-\sqrt3)" />
                            을 지나는 직선과{" "}
                            <InlineMath math="x" />
                            축 및{" "}
                            <InlineMath math="y" />
                            축으로 둘러싸인 삼각형의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선이{" "}
                                <InlineMath math="x" />
                                축의 양의 방향과 이루는 각이{" "}
                                <InlineMath math="30^\circ" />
                                이므로 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    m=\tan30^\circ=\frac1{\sqrt3}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                                기울기가{" "}
                                <InlineMath math="\frac1{\sqrt3}" />
                                이고 점{" "}
                                <InlineMath math="(3,-\sqrt3)" />
                                를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=\frac1{\sqrt3}(x-3)-\sqrt3
                `}
                            />

                            <p className="leading-8">
                                이를 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=\frac1{\sqrt3}x-2\sqrt3
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />
                                절편은{" "}
                                <InlineMath math="y=0" />
                                을 대입하여 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    0=\frac1{\sqrt3}x-2\sqrt3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=6
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="y" />
                                절편은{" "}
                                <InlineMath math="x=0" />
                                을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=-2\sqrt3
                `}
                            />

                            <p className="leading-8">
                                따라서 삼각형의 밑변의 길이는{" "}
                                <InlineMath math="6" />,
                                높이의 길이는{" "}
                                <InlineMath math="2\sqrt3" />
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{넓이}
                    =
                    \frac12
                    \times6
                    \times2\sqrt3
                    =
                    6\sqrt3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{6\sqrt3}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 직선이 이루는 각으로 기울기를 구한 뒤,
                                    기울기와 한 점을 이용하여 직선의 방정식을 구합니다.
                                    그 다음 x절편과 y절편을 구하여 삼각형의 넓이를 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{각}
                        \rightarrow
                        \text{기울기}
                        \rightarrow
                        \text{직선의 방정식}
                        \rightarrow
                        \text{x절편, y절편}
                        \rightarrow
                        \text{넓이}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 3 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />절편과{" "}
                            <InlineMath math="y" />절편의 절댓값이 같고 부호가 반대인 직선이
                            점 <InlineMath math="(2,-1)" />을 지날 때,
                            이 직선의 <InlineMath math="y" />절편을 구하시오.
                            <br />
                            <span className="text-sm text-gray-400">
                                (단, 직선은 원점을 지나지 않는다.)
                            </span>
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선의 <InlineMath math="x" />절편을{" "}
                                <InlineMath math="a" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                두 절편의 절댓값이 같고 부호가 반대이므로{" "}
                                <InlineMath math="y" />절편은{" "}
                                <InlineMath math="-a" />입니다.
                            </p>

                            <p className="leading-8">
                                따라서 직선의 절편형은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{x}{a}
                    +
                    \frac{y}{-a}
                    =
                    1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \frac{x-y}{a}=1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x-y=a
                `}
                            />

                            <p className="leading-8">
                                이 직선이 점{" "}
                                <InlineMath math="(2,-1)" />을 지나므로{" "}
                                <InlineMath math="x=2,\ y=-1" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    2-(-1)=a
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=3
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />절편이{" "}
                                <InlineMath math="3" />이므로{" "}
                                <InlineMath math="y" />절편은 그와 부호가 반대인
                            </p>

                            <BlockMath
                                math={String.raw`
                    -3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-3}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />절편과{" "}
                                    <InlineMath math="y" />절편의 절댓값이 같고 부호가 반대이면
                                    두 절편을 <InlineMath math="a,\ -a" />로 놓습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{x}{a}
                        +
                        \frac{y}{-a}
                        =
                        1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    절편에 대한 조건이 주어진 문제에서는 직선의 절편형을 이용하면
                                    조건을 식에 바로 넣을 수 있습니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 네 점{" "}
                                <InlineMath math="A(0,4),\ B(-1,-1),\ C(4,0),\ D(2,5)" />
                                를 꼭짓점으로 하는 사각형{" "}
                                <InlineMath math="ABCD" />가 있다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                사각형 <InlineMath math="ABCD" />의 두 대각선의 교점의 좌표를{" "}
                                <InlineMath math="(a,b)" />라 할 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.9_4.png"
                                alt="사각형 ABCD의 두 대각선의 교점"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                사각형의 두 대각선은{" "}
                                <InlineMath math="\overline{AC}" />와{" "}
                                <InlineMath math="\overline{BD}" />입니다.
                                두 대각선의 방정식을 각각 구하겠습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    대각선 AC의 방정식
                                </p>

                                <p className="leading-8">
                                    두 점 <InlineMath math="A(0,4),\ C(4,0)" />를 지나는
                                    직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{0-4}{4-0}
                        =
                        -1
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 기울기가{" "}
                                    <InlineMath math="-1" />이고 점{" "}
                                    <InlineMath math="A(0,4)" />를 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=-1(x-0)+4
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{y=-x+4}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    대각선 BD의 방정식
                                </p>

                                <p className="leading-8">
                                    두 점 <InlineMath math="B(-1,-1),\ D(2,5)" />를 지나는
                                    직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{5-(-1)}{2-(-1)}
                        =
                        \frac63
                        =
                        2
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 기울기가{" "}
                                    <InlineMath math="2" />이고 점{" "}
                                    <InlineMath math="B(-1,-1)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=2\{x-(-1)\}-1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=2(x+1)-1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{y=2x+1}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                두 대각선의 교점에서는 두 직선의{" "}
                                <InlineMath math="y" />값이 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    -x+4=2x+1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    3x=3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=1
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="x=1" />을{" "}
                                <InlineMath math="y=-x+4" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=-1+4=3
                `}
                            />

                            <p className="leading-8">
                                따라서 두 대각선의 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a,b)=(1,3)
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=1+3=4
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{4}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 교점을 구할 때에는 각 직선의 방정식을 만든 뒤
                                    두 식을 연립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{두 점}
                        \rightarrow
                        \text{기울기}
                        \rightarrow
                        \text{직선의 방정식}
                        \rightarrow
                        \text{연립방정식}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="0" />이 아닌 실수{" "}
                                <InlineMath math="a" />에 대하여
                                이차함수
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x^2+2ax+a
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                의 그래프의 꼭짓점을{" "}
                                <InlineMath math="A" />,
                                그래프가{" "}
                                <InlineMath math="y" />축과 만나는 점을{" "}
                                <InlineMath math="B" />라 하자.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                두 점{" "}
                                <InlineMath math="A,\ B" />를 지나는 직선을{" "}
                                <InlineMath math="l" />이라 할 때,
                                직선{" "}
                                <InlineMath math="l" />의{" "}
                                <InlineMath math="x" />절편을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.9_5.png"
                                alt="직선의 방정식 예제5"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 꼭짓점{" "}
                                <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />의 좌표를 구합니다.
                            </p>

                            <p className="leading-8">
                                꼭짓점의{" "}
                                <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=-\frac{2a}{2}=-a
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(-a,\,-a^2+a)
                `}
                            />

                            <p className="leading-8">
                                또한{" "}
                                <InlineMath math="y" />축과 만나는 점은{" "}
                                <InlineMath math="x=0" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    B(0,a)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                직선{" "}
                                <InlineMath math="AB" />의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{a-(-a^2+a)}
                    {0-(-a)}
                    =
                    \frac{a^2}{a}
                    =
                    a
                `}
                            />

                            <p className="leading-8">
                                따라서 기울기가{" "}
                                <InlineMath math="a" />이고
                                점{" "}
                                <InlineMath math="(0,a)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=a(x-0)+a
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    y=ax+a
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />절편은{" "}
                                <InlineMath math="y=0" />을 대입하여 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    0=ax+a
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a(x+1)=0
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="a\neq0" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=-1
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-1}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    꼭짓점의 좌표와{" "}
                                    <InlineMath math="y" />절편을 이용하여
                                    두 점을 구한 뒤,
                                    두 점을 지나는 직선의 방정식을 구합니다.
                                    마지막으로{" "}
                                    <InlineMath math="y=0" />을 대입하여{" "}
                                    <InlineMath math="x" />절편을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{꼭짓점}
                        \rightarrow
                        \text{두 점}
                        \rightarrow
                        \text{직선의 방정식}
                        \rightarrow
                        \text{x절편}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 6 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 네 점
                        </p>

                        <BlockMath
                            math={String.raw`
                A(0,2),\;
                B(0,6),\;
                C(\sqrt3,p),\;
                D(3\sqrt3,q)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 다음 조건을 만족시킬 때,{" "}
                            <InlineMath math="p+q" />
                            의 값을 구하시오.
                        </p>

                        <div className="mt-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">

                            <p className="leading-8 text-gray-300">
                                (가) 직선 <InlineMath math="CD" />의 기울기는 음수이다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                (나){" "}
                                <InlineMath math="\overline{AB}=\overline{CD}" />
                                이고{" "}
                                <InlineMath math="\overline{AD}\parallel\overline{BC}" />
                                이다.
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저{" "}
                                <InlineMath math="\overline{AB}" />
                                의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    AB=\sqrt{(0-0)^2+(6-2)^2}=4
                `}
                            />

                            <p className="leading-8">
                                조건{" "}
                                <InlineMath math="\overline{AB}=\overline{CD}" />
                                에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    CD=4
                `}
                            />

                            <p className="leading-8">
                                두 점{" "}
                                <InlineMath math="C,D" />
                                사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt{(3\sqrt3-\sqrt3)^2+(q-p)^2}=4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \sqrt{12+(q-p)^2}=4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (q-p)^2=4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    q-p=\pm2
                `}
                            />

                            <p className="leading-8">
                                또,
                                <InlineMath math="\overline{AD}\parallel\overline{BC}" />
                                이므로 두 직선의 기울기가 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{q-2}{3\sqrt3}
                    =
                    \frac{p-6}{\sqrt3}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    q-2=3(p-6)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    q=3p-16
                `}
                            />

                            <p className="leading-8">
                                이를{" "}
                                <InlineMath math="q-p=\pm2" />
                                와 함께 이용합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    경우 ①{" "}
                                    <InlineMath math="q-p=2" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3p-16-p=2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        p=9,\qquad
                        q=11
                    `}
                                />

                                <p className="leading-8">
                                    이때
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{기울기}
                        =
                        \frac{11-9}{2\sqrt3}
                        =
                        \frac1{\sqrt3}>0
                    `}
                                />

                                <p className="leading-8">
                                    조건 (가)를 만족하지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    경우 ②{" "}
                                    <InlineMath math="q-p=-2" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3p-16-p=-2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        p=7,\qquad
                        q=5
                    `}
                                />

                                <p className="leading-8">
                                    이때
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{기울기}
                        =
                        \frac{5-7}{2\sqrt3}
                        =
                        -\frac1{\sqrt3}<0
                    `}
                                />

                                <p className="leading-8">
                                    조건 (가)를 만족합니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p+q=7+5=12
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{12}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    길이가 같다는 조건에서는 두 점 사이의 거리를 이용하고,
                                    평행이라는 조건에서는 두 직선의 기울기가 같음을 이용합니다.
                                    마지막으로 기울기의 부호 조건으로 알맞은 해를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{거리}
                        \rightarrow
                        q-p
                        \rightarrow
                        \text{평행}
                        \rightarrow
                        q=3p-16
                        \rightarrow
                        \text{기울기의 부호}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 7 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 직선{" "}
                            <InlineMath math="y=mx,\ y=nx\ (m>n)" />가 직선{" "}
                            <InlineMath math="\dfrac{x}{6}+\dfrac{y}{9}=1" />과{" "}
                            <InlineMath math="x" />축 및{" "}
                            <InlineMath math="y" />축으로 둘러싸인 부분의 넓이를
                            삼등분할 때,{" "}
                            <InlineMath math="4mn" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선{" "}
                                <InlineMath math="\dfrac{x}{6}+\dfrac{y}{9}=1" />의{" "}
                                <InlineMath math="x" />절편은{" "}
                                <InlineMath math="6" />,{" "}
                                <InlineMath math="y" />절편은{" "}
                                <InlineMath math="9" />입니다.
                            </p>

                            <p className="leading-8">
                                따라서 이 직선과 두 좌표축으로 둘러싸인 삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12\cdot6\cdot9=27
                `}
                            />

                            <p className="leading-8">
                                입니다. 두 직선이 이 넓이를 삼등분하므로 각 부분의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{27}{3}=9
                `}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    기울기 <InlineMath math="n" /> 구하기
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="y=nx" />가{" "}
                                    <InlineMath math="\dfrac{x}{6}+\dfrac{y}{9}=1" />과
                                    만나는 점을 <InlineMath math="P" />라 하겠습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y=nx" />를 절편형에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{x}{6}+\frac{nx}{9}=1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=\frac{18}{3+2n}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="P" />의{" "}
                                    <InlineMath math="y" />좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=nx
                        =
                        \frac{18n}{3+2n}
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />축과 직선{" "}
                                    <InlineMath math="y=nx" /> 사이의 삼각형은
                                    밑변의 길이가 <InlineMath math="6" />,
                                    높이가 점 <InlineMath math="P" />의{" "}
                                    <InlineMath math="y" />좌표이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac12\cdot6\cdot
                        \frac{18n}{3+2n}
                        =
                        9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \frac{54n}{3+2n}=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        54n=27+18n
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        n=\frac34
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    기울기 <InlineMath math="m" /> 구하기
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="y=mx" />가{" "}
                                    <InlineMath math="\dfrac{x}{6}+\dfrac{y}{9}=1" />과
                                    만나는 점을 <InlineMath math="Q" />라 하겠습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y=mx" />를 절편형에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{x}{6}+\frac{mx}{9}=1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=\frac{18}{3+2m}
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="y" />축과 직선{" "}
                                    <InlineMath math="y=mx" /> 사이의 삼각형은
                                    밑변의 길이가 <InlineMath math="9" />,
                                    높이가 점 <InlineMath math="Q" />의{" "}
                                    <InlineMath math="x" />좌표이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac12\cdot9\cdot
                        \frac{18}{3+2m}
                        =
                        9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \frac{81}{3+2m}=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3+2m=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        m=3
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    4mn
                    &=
                    4\cdot3\cdot\frac34\\[4pt]
                    &=9
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{9}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 절편을 이용하여 전체 삼각형의 넓이를 구합니다.
                                    넓이가 삼등분되므로 양쪽 끝에 있는 두 삼각형의 넓이를
                                    각각 <InlineMath math="9" />로 놓으면{" "}
                                    <InlineMath math="m,\ n" />을 따로 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{전체 넓이}
                        \rightarrow
                        \text{삼등분된 넓이}
                        \rightarrow
                        n
                        \rightarrow
                        m
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 8 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위의 세 점{" "}
                                <InlineMath math="A(4,6),\ B(1,2),\ C(7,0)" />을
                                꼭짓점으로 하는 삼각형{" "}
                                <InlineMath math="ABC" />가 있다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                선분 <InlineMath math="\overline{AB}" /> 위의 점{" "}
                                <InlineMath math="D" />와 선분{" "}
                                <InlineMath math="\overline{AC}" /> 위의 점{" "}
                                <InlineMath math="E" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-4 rounded-lg border border-cyan-500/30 bg-cyan-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    (가) 선분 <InlineMath math="\overline{DE}" />와 선분{" "}
                                    <InlineMath math="\overline{BC}" />는 평행하다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    (나) 삼각형 <InlineMath math="ADE" />와 삼각형{" "}
                                    <InlineMath math="ABC" />의 넓이의 비는{" "}
                                    <InlineMath math="1:9" />이다.
                                </p>

                            </div>

                            <p className="mt-4 leading-8 text-gray-300">
                                직선 <InlineMath math="BE" />의 방정식이{" "}
                                <InlineMath math="x+ay+b=0" />일 때,
                                상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.9_8.png"
                                alt="삼각형 ABC와 평행한 선분 DE"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{DE}" />와 선분{" "}
                                <InlineMath math="\overline{BC}" />가 평행하므로
                                삼각형 <InlineMath math="ADE" />와 삼각형{" "}
                                <InlineMath math="ABC" />는 닮음입니다.
                            </p>

                            <p className="leading-8">
                                닮은 도형의 넓이의 비는 닮음비의 제곱이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \triangle ADE:\triangle ABC=1:9
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    AD:AB=AE:AC=1:3
                `}
                            />

                            <p className="leading-8">
                                따라서 점 <InlineMath math="E" />는 선분{" "}
                                <InlineMath math="\overline{AC}" />를{" "}
                                <InlineMath math="1:2" />로 내분하는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    AE:EC=1:2
                `}
                            />

                            <p className="leading-8">
                                내분점은 문제에 보이는 안쪽의 곱과 바깥쪽의 곱을 더한 뒤
                                비율의 합으로 나누므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    E=\frac{1C+2A}{1+2}
                `}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="A(4,6),\ C(7,0)" />의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    E
                    &=
                    \frac{(7,0)+2(4,6)}{3}\\[6pt]
                    &=
                    \frac{(7,0)+(8,12)}{3}\\[6pt]
                    &=
                    \frac{(15,12)}{3}\\[6pt]
                    &=(5,4)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 직선 <InlineMath math="BE" />는 두 점{" "}
                                <InlineMath math="B(1,2),\ E(5,4)" />를 지납니다.
                            </p>

                            <p className="leading-8">
                                두 점을 이용하여 기울기를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{기울기}
                    =
                    \frac{4-2}{5-1}
                    =
                    \frac24
                    =
                    \frac12
                `}
                            />

                            <p className="leading-8">
                                기울기가 <InlineMath math="\dfrac12" />이고 점{" "}
                                <InlineMath math="B(1,2)" />를 지나므로 조건을 식에 바로 넣으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=\frac12(x-1)+2
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="2" />를 곱하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    2y=x-1+4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x-2y+3=0
                `}
                            />

                            <p className="leading-8">
                                주어진 식{" "}
                                <InlineMath math="x+ay+b=0" />과 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-2,\qquad b=3
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=-2+3=1
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{1}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    평행 조건으로 두 삼각형의 닮음을 찾고,
                                    넓이의 비에서 닮음비를 구합니다.
                                    그 비를 이용하여 점 <InlineMath math="E" />의 좌표를 구한 뒤,
                                    두 점 <InlineMath math="B,\ E" />를 지나는 직선의 방정식을
                                    만듭니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{평행}
                        \rightarrow
                        \text{닮음}
                        \rightarrow
                        \text{넓이비}
                        \rightarrow
                        \text{내분점}
                        \rightarrow
                        \text{직선의 방정식}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 9 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(1,-1),\ B(2,k),\ C(-k,-10)" />이
                            한 직선 위에 있도록 하는 모든{" "}
                            <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 1 · 직선의 방정식 이용
                                </p>

                                <p className="leading-8">
                                    먼저 두 점{" "}
                                    <InlineMath math="A(1,-1),\ B(2,k)" />를 지나는
                                    직선의 방정식을 구하겠습니다.
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="AB" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{k-(-1)}{2-1}
                        =
                        k+1
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    기울기가 <InlineMath math="k+1" />이고 점{" "}
                                    <InlineMath math="A(1,-1)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=(k+1)(x-1)-1
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    세 점이 한 직선 위에 있으려면 점{" "}
                                    <InlineMath math="C(-k,-10)" />도 이 직선의 방정식을
                                    만족해야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서{" "}
                                    <InlineMath math="x=-k,\ y=-10" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -10
                        =
                        (k+1)(-k-1)-1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -10
                        =
                        -(k+1)^2-1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (k+1)^2=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k+1=\pm3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=2
                        \qquad\text{또는}\qquad
                        k=-4
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 2 · 기울기 이용
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 점이 한 직선 위에 있으므로 직선{" "}
                                    <InlineMath math="AB" />와 직선{" "}
                                    <InlineMath math="AC" />의 기울기가 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{k-(-1)}{2-1}
                        =
                        \frac{-10-(-1)}{-k-1}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k+1
                        =
                        \frac{-9}{-(k+1)}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k+1
                        =
                        \frac{9}{k+1}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    여기서 <InlineMath math="k=-1" />이면 점{" "}
                                    <InlineMath math="A,\ C" />의{" "}
                                    <InlineMath math="x" />좌표는 같지만 점{" "}
                                    <InlineMath math="B" />는 그 세로선 위에 있지 않으므로
                                    조건을 만족하지 않습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 양변에{" "}
                                    <InlineMath math="k+1" />을 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (k+1)^2=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=2
                        \qquad\text{또는}\qquad
                        k=-4
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                모든 <InlineMath math="k" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                    2+(-4)=-2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    두 풀이의 비교
                                </p>

                                <div className="space-y-3 leading-8 text-gray-300">

                                    <p>
                                        • 풀이 1은 두 점을 지나는 직선의 방정식을 만든 뒤,
                                        나머지 한 점의 좌표를 대입하는 방법입니다.
                                    </p>

                                    <p>
                                        • 풀이 2는 세 점이 한 직선 위에 있으면 두 직선의
                                        기울기가 같다는 것을 이용하는 방법입니다.
                                    </p>

                                    <p>
                                        • 세로선이 될 가능성이 있는 경우에는 기울기의 분모가{" "}
                                        <InlineMath math="0" />이 될 수 있으므로 별도로 확인해야 합니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 10 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 세 점{" "}
                            <InlineMath math="A(a,-2),\ B(-4,-a),\ C(2,-5)" />
                            가 삼각형을 이루지 않도록 하는 모든{" "}
                            <InlineMath math="a" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 1 · 직선의 방정식 이용
                                </p>

                                <p className="leading-8">
                                    세 점이 삼각형을 이루지 않으려면 세 점이 한 직선 위에 있어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 두 점{" "}
                                    <InlineMath math="B(-4,-a),\ C(2,-5)" />
                                    를 지나는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{-5-(-a)}{2-(-4)}
                        =
                        \frac{a-5}{6}
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                    따라서 직선{" "}
                                    <InlineMath math="BC" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=\frac{a-5}{6}(x+4)-a
                    `}
                                />

                                <p className="leading-8">
                                    점{" "}
                                    <InlineMath math="A(a,-2)" />
                                    가 이 직선 위에 있으므로{" "}
                                    <InlineMath math="x=a,\ y=-2" />
                                    를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -2
                        =
                        \frac{a-5}{6}(a+4)-a
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -12
                        =
                        (a-5)(a+4)-6a
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a^2-7a-8=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (a-8)(a+1)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a=8
                        \qquad\text{또는}\qquad
                        a=-1
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 2 · 기울기 이용
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 점이 한 직선 위에 있으므로
                                    직선{" "}
                                    <InlineMath math="AB" />와
                                    직선{" "}
                                    <InlineMath math="BC" />의 기울기가 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{-a+2}{-4-a}
                        =
                        \frac{-5+a}{6}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \frac{a-2}{a+4}
                        =
                        \frac{a-5}{6}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        6(a-2)
                        =
                        (a-5)(a+4)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a^2-7a-8=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (a-8)(a+1)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a=8
                        \qquad\text{또는}\qquad
                        a=-1
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 모든{" "}
                                <InlineMath math="a" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                    8+(-1)=7
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{7}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 점이 삼각형을 이루지 않는다는 것은
                                    세 점이 한 직선 위에 있다는 뜻입니다.
                                    따라서
                                    <strong className="text-white">
                                        직선의 방정식을 만들어 나머지 한 점을 대입하는 방법
                                    </strong>
                                    이 가장 일반적이며,
                                    기울기를 이용하는 방법으로도 같은 결과를 얻을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{세 점이 일직선}
                        \Longleftrightarrow
                        \text{직선의 방정식}
                        \Longleftrightarrow
                        \text{기울기}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p className="leading-8">
                            • 일차함수 <InlineMath math="y=mx+n" />은 세로선을 나타낼 수 없지만,
                            직선의 방정식 <InlineMath math="ax+by+c=0" />은 모든 직선을
                            나타낼 수 있습니다.
                        </p>

                        <p className="leading-8">
                            • 기울기는 <InlineMath math="x" />가 오른쪽으로{" "}
                            <InlineMath math="1" />만큼 움직일 때{" "}
                            <InlineMath math="y" />가 변하는 양입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=mx+n
                    \quad\Longrightarrow\quad
                    \text{기울기}=m
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    ax+by+c=0
                    \quad\Longrightarrow\quad
                    \text{기울기}=-\frac{a}{b}
                    \qquad(b\neq0)
                `}
                        />

                        <p className="leading-8">
                            • 직선이 <InlineMath math="x" />축의 양의 방향과 이루는 각이{" "}
                            <InlineMath math="\theta" />이면 기울기는{" "}
                            <InlineMath math="\tan\theta" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    m=\tan\theta
                `}
                        />

                        <p className="leading-8">
                            • <InlineMath math="x" />절편은{" "}
                            <InlineMath math="y=0" />을 대입하고,{" "}
                            <InlineMath math="y" />절편은{" "}
                            <InlineMath math="x=0" />을 대입하여 구합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    x=p:\text{ 세로선},
                    \qquad
                    y=q:\text{ 가로선}
                `}
                        />

                        <p className="leading-8">
                            • 기울기와 한 점이 주어지면 조건을 식에 바로 넣습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=
                    \text{기울기}
                    \left(
                    x-\text{지나는 점의 \(x\)좌표}
                    \right)
                    +
                    \text{지나는 점의 \(y\)좌표}
                `}
                        />

                        <p className="leading-8">
                            • 두 점이 주어지면 기울기를 먼저 구한 뒤 한 점을 이용합니다.
                        </p>

                        <p className="leading-8">
                            • <InlineMath math="x" />절편과{" "}
                            <InlineMath math="y" />절편이 주어지면 절편형을 이용합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{x}{x\text{절편}}
                    +
                    \frac{y}{y\text{절편}}
                    =
                    1
                `}
                        />

                    </div>

                </div>

            </section>

            {/* 1.10 도형의 넓이를 이등분하는 직선 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.10 도형의 넓이를 이등분하는 직선
                </h2>

                <p className="leading-8 text-gray-300">
                    도형의 넓이를 이등분하는 직선은 도형의 대칭성이나
                    삼각형의 넓이 성질을 이용하여 찾을 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 대칭의 중심이 있는 도형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 대칭의 중심이 있는 도형
                        </h3>

                        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.25fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.10_01.png"
                                    alt="대칭의 중심을 지나는 넓이 이등분 직선"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-4">

                                <p className="leading-8 text-gray-300">
                                    한 점을 중심으로 대칭인 도형에서는
                                    <strong className="text-white">
                                        대칭의 중심을 지나는 모든 직선
                                    </strong>
                                    이 도형의 넓이를 이등분합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선의 방향은 달라도 상관없으며,
                                    대칭의 중심을 지나기만 하면 직선의 한쪽 부분과
                                    다른 쪽 부분이 서로 대응합니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        대표적인 도형
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        평행사변형, 직사각형, 마름모, 정사각형,
                                        원, 타원 등이 있습니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \text{대칭의 중심을 지나는 직선}
                            \;\Longrightarrow\;
                            \text{넓이를 이등분}
                            }
                        `}
                                />

                            </div>

                        </div>

                    </div>

                    {/* 2. 삼각형의 중선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 삼각형의 꼭짓점을 지나는 직선
                        </h3>

                        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.25fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.10_02.png"
                                    alt="삼각형의 넓이를 이등분하는 중선"
                                    className="mx-auto w-full max-w-sm rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-4">

                                <p className="leading-8 text-gray-300">
                                    삼각형의 한 꼭짓점에서 대변 위의 한 점으로
                                    선분을 그으면 삼각형이 두 개의 작은 삼각형으로 나뉩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 두 삼각형은 대변에 대한 높이가 같으므로
                                    넓이의 비는 밑변의 길이의 비와 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \triangle ABD:\triangle ACD
                            =
                            \overline{BD}:\overline{DC}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 두 삼각형의 넓이가 같으려면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \overline{BD}=\overline{DC}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이어야 합니다. 즉, 대변 위의 점은 대변의 중점이고,
                                    꼭짓점과 이 중점을 이은 선분은
                                    <strong className="text-white"> 중선</strong>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \text{삼각형의 중선}
                            \;\Longrightarrow\;
                            \text{넓이를 이등분}
                            }
                        `}
                                />

                            </div>

                        </div>

                    </div>

                    {/* 3. 삼각형과 사각형으로 나누는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            3. 삼각형과 사각형으로 나누는 경우
                        </h3>

                        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.25fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.10_03.png"
                                    alt="삼각형과 사각형의 넓이가 같아지는 분점의 조건"
                                    className="mx-auto w-full max-w-sm rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-4">

                                <p className="leading-8 text-gray-300">
                                    그림과 같이 직선이 삼각형을
                                    한 꼭짓각을 포함하는 작은 삼각형과
                                    나머지 사각형으로 나눈다고 하겠습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    꼭짓각을 이루는 두 변의 전체 길이를{" "}
                                    <InlineMath math="a,\ b" />,
                                    꼭짓점에서 두 분점까지의 길이를{" "}
                                    <InlineMath math="x,\ y" />라 하겠습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    꼭짓각의 크기를{" "}
                                    <InlineMath math="\theta" />라 하면
                                    전체 삼각형의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac12ab\sin\theta
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 꼭짓각을 포함하는 작은 삼각형의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac12xy\sin\theta
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    작은 삼각형과 나머지 사각형의 넓이가 같다면
                                    작은 삼각형의 넓이는 전체 삼각형 넓이의{" "}
                                    <InlineMath math="\dfrac12" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac12xy\sin\theta
                            =
                            \frac12
                            \left(
                            \frac12ab\sin\theta
                            \right)
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    양변에서 공통인 값을 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            xy=\frac12ab
                            }
                        `}
                                />

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        기억하기
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        꼭짓점에서 두 분점까지의 길이의 곱은
                                        두 변의 전체 길이의 곱의 절반입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                \text{분점까지의 길이의 곱}
                                =
                                \frac12
                                \times
                                \text{전체 변의 길이의 곱}
                            `}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 마름모와 직사각형의 넓이를 동시에
                                이등분하는 직선의 방정식이{" "}
                                <InlineMath math="ax+by-3=0" />일 때,
                                상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_1.png"
                                alt="마름모와 직사각형의 넓이를 동시에 이등분하는 직선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                대칭의 중심이 있는 도형은 대칭의 중심을 지나는 직선에 의해
                                넓이가 이등분됩니다.
                            </p>

                            <p className="leading-8">
                                직사각형의 대칭의 중심은 두 대각선의 교점입니다.
                                직사각형의 가로 방향은{" "}
                                <InlineMath math="x=2" />부터{" "}
                                <InlineMath math="x=6" />까지이고,
                                세로 방향은 <InlineMath math="y=2" />부터{" "}
                                <InlineMath math="y=4" />까지이므로 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \left(
                    \frac{2+6}{2},
                    \frac{2+4}{2}
                    \right)
                    =
                    (4,3)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                마름모의 대칭의 중심도 두 대각선의 교점입니다.
                                그림에서 마름모의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-3,-3)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 도형의 넓이를 동시에 이등분하는 직선은
                                두 점 <InlineMath math="(-3,-3)" />과{" "}
                                <InlineMath math="(4,3)" />을 지납니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 중심을 지나는 직선의 방정식
                                </p>

                                <p className="leading-8">
                                    두 점을 지나는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{3-(-3)}{4-(-3)}
                        =
                        \frac67
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 기울기가 <InlineMath math="\dfrac67" />이고
                                    점 <InlineMath math="(4,3)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=\frac67(x-4)+3
                    `}
                                />

                                <p className="leading-8">
                                    양변에 <InlineMath math="7" />을 곱하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        7y=6(x-4)+21
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        7y=6x-3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{6x-7y-3=0}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                주어진 직선의 방정식{" "}
                                <InlineMath math="ax+by-3=0" />과 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=6,\qquad b=-7
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=6+(-7)=-1
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-1}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직사각형과 마름모는 모두 대칭의 중심이 있는 도형입니다.
                                    각 도형의 넓이를 이등분하는 직선은 대칭의 중심을 지나므로,
                                    두 도형의 중심을 구한 뒤 두 점을 지나는 직선의 방정식을
                                    만들면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{두 도형의 중심}
                        \rightarrow
                        \text{두 점을 지나는 직선}
                        \rightarrow
                        \text{계수 비교}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점 <InlineMath math="A(3,5),\ B(1,1),\ C(5,-1)" />을
                            꼭짓점으로 하는 삼각형 <InlineMath math="ABC" />가 있다.
                            삼각형 <InlineMath math="ABC" />의 넓이를 이등분하고
                            점 <InlineMath math="B" />를 지나는 직선이
                            점 <InlineMath math="(4,a)" />를 지날 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형에서 꼭짓점을 지나는 직선이 넓이를 이등분하려면
                                그 직선은 반드시 중선이어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 직선은 꼭짓점 <InlineMath math="B" />와
                                대변 <InlineMath math="\overline{AC}" />의 중점을 지납니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    선분 AC의 중점
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(
                        \frac{3+5}{2},
                        \frac{5+(-1)}{2}
                        \right)
                        =
                        (4,2)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 넓이를 이등분하는 직선은
                                점 <InlineMath math="B(1,1)" />과
                                중점 <InlineMath math="(4,2)" />를 지납니다.
                            </p>

                            <p className="leading-8">
                                문제에서 이 직선이{" "}
                                <InlineMath math="(4,a)" />를 지난다고 하였으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (4,a)=(4,2)
                `}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    삼각형에서 꼭짓점을 지나는 넓이 이등분선은 중선입니다.
                                    따라서 먼저 대변의 중점을 구한 뒤,
                                    그 점이 직선 위에 있다는 사실을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{넓이 이등분}
                        \rightarrow
                        \text{중선}
                        \rightarrow
                        \text{대변의 중점}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 3 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 세 점{" "}
                                <InlineMath math="A(2,3),\ B(-3,-1),\ C(6,-4)" />
                                를 꼭짓점으로 하는 삼각형 <InlineMath math="ABC" />에 대하여
                                두 삼각형 <InlineMath math="ABD" />와{" "}
                                <InlineMath math="ADC" />의 넓이의 비가{" "}
                                <InlineMath math="2:1" />일 때,
                                두 점 <InlineMath math="A,\ D" />를 지나는 직선의 방정식을{" "}
                                <InlineMath math="ax+y+b=0" />이라 하자.
                                이때 상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_3.png"
                                alt="삼각형의 넓이의 비"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 삼각형 <InlineMath math="ABD" />와{" "}
                                <InlineMath math="ADC" />는
                                꼭짓점 <InlineMath math="A" />에서
                                밑변 <InlineMath math="BC" />까지의 높이가 같습니다.
                            </p>

                            <p className="leading-8">
                                따라서 넓이의 비는 밑변의 비와 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \triangle ABD : \triangle ADC
                    =
                    BD : DC
                    =
                    2:1
                `}
                            />

                            <p className="leading-8">
                                즉, 점 <InlineMath math="D" />는
                                선분 <InlineMath math="BC" />를{" "}
                                <InlineMath math="2:1" />로 내분하는 점입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    점 D의 좌표
                                </p>

                                <BlockMath
                                    math={String.raw`
                        D
                        =
                        \left(
                        \frac{1(-3)+2(6)}{3},
                        \frac{1(-1)+2(-4)}{3}
                        \right)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        D=(3,-3)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                이제 두 점{" "}
                                <InlineMath math="A(2,3)" />과{" "}
                                <InlineMath math="D(3,-3)" />을
                                지나는 직선의 방정식을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    m=
                    \frac{-3-3}{3-2}
                    =-6
                `}
                            />

                            <p className="leading-8">
                                기울기가{" "}
                                <InlineMath math="-6" />이고
                                점 <InlineMath math="A(2,3)" />을 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=-6(x-2)+3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    y=-6x+15
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    6x+y-15=0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=6,\qquad
                    b=-15
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a+b=6+(-15)=-9
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-9}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 꼭짓점을 가지는 두 삼각형은 높이가 같으므로
                                    넓이의 비는 밑변의 비와 같습니다.
                                    따라서 먼저 점 <InlineMath math="D" />를 내분점으로 구한 뒤,
                                    두 점을 지나는 직선의 방정식을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{넓이의 비}
                        \rightarrow
                        \text{내분점}
                        \rightarrow
                        \text{직선의 방정식}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 좌표평면 위에 세 점{" "}
                                <InlineMath math="A(-5,a),\ B(4,2),\ C(-4,0)" />이 있다.
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="2:1" />로 내분하는 점을{" "}
                                <InlineMath math="P" />라 할 때, 직선{" "}
                                <InlineMath math="PC" />가 삼각형{" "}
                                <InlineMath math="AOB" />의 넓이를 이등분한다.
                                양수 <InlineMath math="a" />의 값을 구하시오.
                                <br />
                                (단, <InlineMath math="O" />는 원점이다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_4.png"
                                alt="삼각형 AOB의 넓이를 이등분하는 직선 PC"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="PC" />와 선분{" "}
                                <InlineMath math="\overline{AO}" />의 교점을{" "}
                                <InlineMath math="D" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                직선 <InlineMath math="PC" />는 삼각형{" "}
                                <InlineMath math="AOB" />를 꼭짓점{" "}
                                <InlineMath math="A" />를 포함하는 삼각형{" "}
                                <InlineMath math="APD" />와 나머지 사각형으로 나눕니다.
                            </p>

                            <p className="leading-8">
                                두 부분의 넓이가 같으므로
                                삼각형 <InlineMath math="APD" />의 넓이는
                                삼각형 <InlineMath math="AOB" />의 넓이의 절반입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    [\triangle APD]
                    =
                    \frac12[\triangle AOB]
                `}
                            />

                            <p className="leading-8">
                                꼭짓점 <InlineMath math="A" />에서 만나는 두 변의 길이를
                                이용하면 넓이를 이등분하는 조건은
                            </p>

                            <BlockMath
                                math={String.raw`
                    AP\cdot AD
                    =
                    \frac12\,AB\cdot AO
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    선분 AD와 AO의 비
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />는 선분{" "}
                                    <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="2:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AP:PB=2:1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        AP=\frac23AB
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이를 넓이를 이등분하는 조건에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac23AB\cdot AD
                        =
                        \frac12AB\cdot AO
                    `}
                                />

                                <p className="leading-8">
                                    양변을 <InlineMath math="AB" />로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac23AD
                        =
                        \frac12AO
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        AD=\frac34AO
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AD:DO=3:1
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                즉, 점 <InlineMath math="D" />는 선분{" "}
                                <InlineMath math="\overline{AO}" />를{" "}
                                <InlineMath math="3:1" />로 내분하는 점입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="A(-5,a)" />와 원점{" "}
                                <InlineMath math="O(0,0)" />를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    D
                    &=
                    \left(
                    \frac{3\cdot0+1\cdot(-5)}{3+1},
                    \frac{3\cdot0+1\cdot a}{3+1}
                    \right)\\[6pt]
                    &=
                    \left(
                    -\frac54,
                    \frac a4
                    \right)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \boxed{
                    D\left(-\frac54,\frac a4\right)
                    }
                `}
                            />
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    점 P의 좌표
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />는 선분{" "}
                                    <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="2:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        P
                        &=
                        \left(
                        \frac{2\cdot4+1\cdot(-5)}{2+1},
                        \frac{2\cdot2+1\cdot a}{2+1}
                        \right)\\[6pt]
                        &=
                        \left(
                        1,
                        \frac{a+4}{3}
                        \right)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        P\left(1,\frac{a+4}{3}\right)
                        }
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                세 점 <InlineMath math="C,\ D,\ P" />는 모두 직선{" "}
                                <InlineMath math="PC" /> 위에 있으므로
                                직선 <InlineMath math="CD" />와 직선{" "}
                                <InlineMath math="CP" />의 기울기가 같습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직선 CD의 기울기
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{기울기}
                        &=
                        \frac{\frac a4-0}
                        {-\frac54-(-4)}\\[6pt]
                        &=
                        \frac{\frac a4}{\frac{11}{4}}\\[6pt]
                        &=
                        \frac a{11}
                        \end{aligned}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직선 CP의 기울기
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{기울기}
                        &=
                        \frac{\frac{a+4}{3}-0}
                        {1-(-4)}\\[6pt]
                        &=
                        \frac{\frac{a+4}{3}}{5}\\[6pt]
                        &=
                        \frac{a+4}{15}
                        \end{aligned}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                두 기울기가 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac a{11}
                    =
                    \frac{a+4}{15}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    15a=11(a+4)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    15a=11a+44
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    4a=44
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=11
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{11}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 넓이를 이등분하는 조건{" "}
                                    <InlineMath math="AP\cdot AD=\dfrac12AB\cdot AO" />를
                                    이용하여 점 <InlineMath math="D" />가 선분{" "}
                                    <InlineMath math="\overline{AO}" />를{" "}
                                    <InlineMath math="3:1" />로 내분한다는 것을 구합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그다음 점 <InlineMath math="P" />와 점{" "}
                                    <InlineMath math="D" />의 좌표를 구하고,
                                    세 점 <InlineMath math="C,\ D,\ P" />가 한 직선 위에
                                    있다는 조건을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{넓이 이등분 조건}
                        \rightarrow
                        \text{점 \(D\)의 내분비}
                        \rightarrow
                        \text{점 \(D,\ P\)의 좌표}
                        \rightarrow
                        \text{세 점이 일직선}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위에 두 직사각형{" "}
                                <InlineMath math="OABC,\ OFED" />가 있다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                두 직사각형의 넓이를 동시에 이등분하는 직선의 방정식을{" "}
                                <InlineMath math="x+ay+b=0" />이라 할 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                                <br />
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_5.png"
                                alt="두 직사각형의 넓이를 동시에 이등분하는 직선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직사각형은 대칭의 중심이 있는 도형이므로
                                대칭의 중심을 지나는 직선이 넓이를 이등분합니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 직사각형의 넓이를 동시에 이등분하는 직선은
                                두 직사각형의 중심을 모두 지나야 합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직사각형 OABC의 중심
                                </p>

                                <p className="leading-8">
                                    직사각형 <InlineMath math="OABC" />는
                                    가로의 길이가 <InlineMath math="6" />,
                                    세로의 길이가 <InlineMath math="8" />이므로
                                    중심의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(
                        \frac{0+6}{2},
                        \frac{0+8}{2}
                        \right)
                        =
                        (3,4)
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직사각형 OFED의 중심
                                </p>

                                <p className="leading-8">
                                    직사각형 <InlineMath math="OFED" />는
                                    가로의 길이가 <InlineMath math="2" />,
                                    세로의 길이가 <InlineMath math="4" />이므로
                                    중심의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(
                        \frac{0+2}{2},
                        \frac{0+4}{2}
                        \right)
                        =
                        (1,2)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 구하는 직선은 두 점{" "}
                                <InlineMath math="(3,4),\ (1,2)" />를 지납니다.
                            </p>

                            <p className="leading-8">
                                두 점을 지나는 직선의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{4-2}{3-1}
                    =
                    1
                `}
                            />

                            <p className="leading-8">
                                입니다. 기울기가 <InlineMath math="1" />이고
                                점 <InlineMath math="(1,2)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=1(x-1)+2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    y=x+1
                `}
                            />

                            <p className="leading-8">
                                이를 일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
                    x-y+1=0
                `}
                            />

                            <p className="leading-8">
                                주어진 직선의 방정식{" "}
                                <InlineMath math="x+ay+b=0" />과 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-1,\qquad b=1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=-1+1=0
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{0}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직사각형의 넓이를 이등분하는 직선은
                                    직사각형의 대칭의 중심을 지납니다.
                                    따라서 두 직사각형의 중심을 각각 구한 뒤,
                                    두 중심을 지나는 직선의 방정식을 만들면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{두 직사각형의 중심}
                        \rightarrow
                        \text{두 점을 지나는 직선}
                        \rightarrow
                        \text{계수 비교}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 6 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 꼭짓점의 좌표가{" "}
                                <InlineMath math="O(0,0),\ A(12,0),\ B(6,8),\ C(0,8)" />인
                                사다리꼴 <InlineMath math="OABC" />가 있다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                원점을 지나는 직선이 사다리꼴{" "}
                                <InlineMath math="OABC" />의 넓이를 이등분할 때,
                                이 직선의 기울기를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_6.png"
                                alt="사다리꼴의 넓이를 이등분하는 원점을 지나는 직선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                사다리꼴 <InlineMath math="OABC" />를
                                직사각형과 직각삼각형으로 나누어 전체 넓이를 구하겠습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    사다리꼴 OABC의 넓이
                                </p>

                                <p className="leading-8">
                                    왼쪽 직사각형의 가로와 세로의 길이는 각각{" "}
                                    <InlineMath math="6,\ 8" />이므로 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6\times8=48
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 오른쪽 직각삼각형의 밑변과 높이의 길이도
                                    각각 <InlineMath math="6,\ 8" />이므로 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac12\times6\times8=24
                    `}
                                />

                                <p className="leading-8">
                                    따라서 사다리꼴의 전체 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        48+24=72
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                넓이를 이등분하므로 직선의 아래쪽에 있는 도형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{72}{2}=36
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                넓이를 이등분하는 직선이 변{" "}
                                <InlineMath math="\overline{AB}" />와 만나는 점을{" "}
                                <InlineMath math="P" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                직선의 아래쪽 부분은 삼각형{" "}
                                <InlineMath math="OAP" />이므로,
                                점 <InlineMath math="P" />의{" "}
                                <InlineMath math="y" />좌표를{" "}
                                <InlineMath math="h" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12\times12\times h=36
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    6h=36
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    h=6
                `}
                            />

                            <p className="leading-8">
                                따라서 점 <InlineMath math="P" />의{" "}
                                <InlineMath math="y" />좌표는 <InlineMath math="6" />입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    점 P의 좌표
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="AB" />는 두 점{" "}
                                    <InlineMath math="A(12,0),\ B(6,8)" />을 지나므로
                                    기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{8-0}{6-12}
                        =
                        -\frac43
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 직선 <InlineMath math="AB" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=-\frac43(x-12)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=-\frac43x+16
                    `}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="P" />의{" "}
                                    <InlineMath math="y" />좌표가{" "}
                                    <InlineMath math="6" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6=-\frac43x+16
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -\frac43x=-10
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=\frac{15}{2}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P\left(\frac{15}{2},6\right)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                구하는 직선은 원점과 점{" "}
                                <InlineMath math="P\left(\dfrac{15}{2},6\right)" />을
                                지나므로 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{6-0}{\frac{15}{2}-0}
                    =
                    6\times\frac{2}{15}
                    =
                    \frac45
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac45}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 사다리꼴 전체 넓이의 절반을 구합니다.
                                    원점을 지나는 직선 아래쪽의 도형은 삼각형이므로,
                                    넓이 조건에서 직선과 변{" "}
                                    <InlineMath math="\overline{AB}" />의 교점의 높이를
                                    구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{전체 넓이}
                        \rightarrow
                        \text{절반의 넓이}
                        \rightarrow
                        \text{교점 \(P\)의 좌표}
                        \rightarrow
                        \text{직선의 기울기}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 7 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 원점을 지나는 직선 <InlineMath math="l" />이
                                원점 <InlineMath math="O" />와 다섯 개의 점
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(7,0),\ B(7,2),\ C(4,2),\ D(4,5),\ E(0,5)
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                를 선분으로 이은 도형 <InlineMath math="OABCDE" />의 넓이를
                                이등분한다.
                                이때 직선 <InlineMath math="l" />의 기울기는{" "}
                                <InlineMath math="\dfrac{q}{p}" />이다.{" "}
                                <InlineMath math="p+q" />의 값을 구하시오.
                                <br />
                                (단, <InlineMath math="p,\ q" />는 서로소인 자연수이다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.10_7.png"
                                alt="도형 OABCDE의 넓이를 이등분하는 원점을 지나는 직선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 도형 <InlineMath math="OABCDE" />의 전체 넓이를 구하겠습니다.
                            </p>

                            <p className="leading-8">
                                도형을 아래쪽 직사각형과 왼쪽 위 직사각형으로 나누면 됩니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    도형 OABCDE의 넓이
                                </p>

                                <p className="leading-8">
                                    아래쪽 직사각형의 가로와 세로의 길이는 각각{" "}
                                    <InlineMath math="7,\ 2" />이므로 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        7\times2=14
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    왼쪽 위 직사각형의 가로와 세로의 길이는 각각{" "}
                                    <InlineMath math="4,\ 3" />이므로 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4\times3=12
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 전체 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        14+12=26
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                직선 <InlineMath math="l" />이 도형의 넓이를 이등분하므로
                                직선 아래쪽 부분의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{26}{2}=13
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                직선 <InlineMath math="l" />과 선분{" "}
                                <InlineMath math="\overline{CD}" />의 교점을{" "}
                                <InlineMath math="P" />라 하고,
                                점 <InlineMath math="P" />의{" "}
                                <InlineMath math="y" />좌표를 <InlineMath math="h" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                직선 아래쪽 부분은 삼각형 <InlineMath math="ODP" />와
                                직사각형 <InlineMath math="OABC" />의 일부로 볼 수 있지만,
                                다음과 같이 두 부분으로 나누어 계산하는 것이 간단합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직선 아래쪽 부분의 넓이
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="0\leq x\leq4" />인 부분은
                                    밑변의 길이가 <InlineMath math="4" />,
                                    높이가 <InlineMath math="h" />인 삼각형입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac12\times4\times h=2h
                    `}
                                />

                                <p className="leading-8">
                                    또한 <InlineMath math="4\leq x\leq7" />인 부분은
                                    가로의 길이가 <InlineMath math="3" />,
                                    세로의 길이가 <InlineMath math="2" />인 직사각형입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\times2=6
                    `}
                                />

                                <p className="leading-8">
                                    따라서 직선 아래쪽 부분의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2h+6
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                이 넓이가 <InlineMath math="13" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    2h+6=13
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    2h=7
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    h=\frac72
                `}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="P" />는{" "}
                                <InlineMath math="x=4" />인 선분{" "}
                                <InlineMath math="\overline{CD}" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    P\left(4,\frac72\right)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                직선 <InlineMath math="l" />은 원점과 점{" "}
                                <InlineMath math="P\left(4,\dfrac72\right)" />를 지나므로
                                기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{\frac72-0}{4-0}
                    =
                    \frac72\times\frac14
                    =
                    \frac78
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p=8,\qquad q=7
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    p+q=8+7=15
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{15}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 계단 모양 도형의 전체 넓이를 구한 뒤,
                                    넓이의 절반을 계산합니다.
                                    직선 아래쪽 영역을 삼각형과 직사각형으로 나누면
                                    직선과 선분 <InlineMath math="\overline{CD}" />의 교점의
                                    높이를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{전체 넓이}
                        \rightarrow
                        \text{절반의 넓이}
                        \rightarrow
                        \text{교점의 높이}
                        \rightarrow
                        \text{직선의 기울기}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                1. 대칭의 중심이 있는 도형
                            </p>

                            <p className="leading-8">
                                대칭의 중심을 지나는 모든 직선은 도형의 넓이를 이등분합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{대칭의 중심을 지나면 넓이를 이등분}
                        }
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                2. 삼각형의 꼭짓점을 지나는 직선
                            </p>

                            <p className="leading-8">
                                삼각형의 중선은 삼각형의 넓이를 이등분합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{중선이면 넓이를 이등분}
                        }
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                3. 삼각형과 사각형으로 나누는 경우
                            </p>

                            <p className="leading-8">
                                두 변의 전체 길이가{" "}
                                <InlineMath math="a,\ b" />이고
                                꼭짓점에서 두 분점까지의 길이가{" "}
                                <InlineMath math="x,\ y" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        xy=\frac12ab
                        }
                    `}
                            />

                            <p className="leading-8">
                                일 때 작은 삼각형과 나머지 사각형의 넓이가 같습니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.11 계수의 부호에 따른 그래프의 개형 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.11 계수의 부호에 따른 그래프의 개형
                </h2>

                <p className="leading-8 text-gray-300">
                    함수의 식에 나타난 계수의 부호를 알면 그래프의 모양과 위치를
                    빠르게 판단할 수 있습니다.
                </p>

                {/* 참고 단원 */}
                <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                    <p className="mb-3 font-bold text-blue-300">
                        참고
                    </p>

                    <p className="leading-8 text-gray-300">
                        일차함수와 이차함수의 계수에 따른 그래프의 특징은
                        다음 단원에서 자세히 확인할 수 있습니다.
                    </p>

                    <div className="mt-4 space-y-2 leading-8 text-gray-300">

                        <p>
                            공통수학1 → 방정식 → 방정식과 이차함수
                        </p>

                        <p>
                            • 2.22 일차함수{" "}
                            <InlineMath math="y=mx+n" />의 그래프
                        </p>

                        <p>
                            • 2.25 이차함수{" "}
                            <InlineMath math="y=ax^2+bx+c" />의 그래프
                        </p>

                    </div>

                </div>

                <div className="mt-8 space-y-6">

                    {/* 1. 일차함수와 이차함수의 계수 복습 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 일차함수와 이차함수의 계수 복습
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일차함수와 이차함수를 다음과 같이 나타내겠습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=mx+n,
                    \qquad
                    y=ax^2+bx+c
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            두 식의 문자를 서로 다르게 두고 계수의 역할을 비교해 봅시다.
                        </p>

                        {/* a */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-xl font-bold text-white">
                                <InlineMath math="a" /> : 이차함수 그래프의 모양
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    <InlineMath math="a>0" /> : 아래로 볼록
                                </p>

                                <p>
                                    <InlineMath math="a<0" /> : 위로 볼록
                                </p>

                            </div>

                        </div>

                        {/* m과 b */}
                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-blue-300">
                                <InlineMath math="m" />과{" "}
                                <InlineMath math="b" /> : 그래프가{" "}
                                <InlineMath math="y" />축을 통과하는 방향
                            </p>

                            <p className="leading-8 text-gray-300">
                                일차함수에서 <InlineMath math="m" />은 기울기이고,
                                이차함수에서 <InlineMath math="b" />는 그래프가{" "}
                                <InlineMath math="y" />축을 통과하는 방향을 결정합니다.
                            </p>

                            <div className="mt-4 space-y-3 leading-8 text-gray-300">

                                <p>
                                    <InlineMath math="m>0,\ b>0" /> :
                                    그래프가 <InlineMath math="y" />축을
                                    오른쪽 위로 통과
                                </p>

                                <p>
                                    <InlineMath math="m=0" /> :
                                    기울기가 <InlineMath math="0" />인 가로선
                                </p>

                                <p>
                                    <InlineMath math="b=0" /> :
                                    이차함수의 꼭짓점이{" "}
                                    <InlineMath math="y" />축 위에 있음
                                </p>

                                <p>
                                    <InlineMath math="m<0,\ b<0" /> :
                                    그래프가 <InlineMath math="y" />축을
                                    오른쪽 아래로 통과
                                </p>

                            </div>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    이차함수에서 <InlineMath math="b" />의 부호
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이차함수{" "}
                                    <InlineMath math="f(x)=ax^2+bx+c" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f(1)-f(-1)=2b
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="b" />의 부호를 이용하여
                                    그래프가 <InlineMath math="y" />축을 통과하는 방향을
                                    판단할 수 있습니다.
                                </p>

                            </div>

                        </div>

                        {/* n과 c */}
                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-purple-300">
                                <InlineMath math="n" />과{" "}
                                <InlineMath math="c" /> :{" "}
                                <InlineMath math="y" />절편
                            </p>

                            <p className="leading-8 text-gray-300">
                                일차함수에서는{" "}
                                <InlineMath math="x=0" />일 때{" "}
                                <InlineMath math="y=n" />이고,
                                이차함수에서는{" "}
                                <InlineMath math="x=0" />일 때{" "}
                                <InlineMath math="y=c" />입니다.
                            </p>

                            <div className="mt-4 space-y-3 leading-8 text-gray-300">

                                <p>
                                    <InlineMath math="n>0,\ c>0" /> :
                                    그래프가 <InlineMath math="y" />축과{" "}
                                    <InlineMath math="x" />축 위에서 만남
                                </p>

                                <p>
                                    <InlineMath math="n=0,\ c=0" /> :
                                    그래프가 원점을 지남
                                </p>

                                <p>
                                    <InlineMath math="n<0,\ c<0" /> :
                                    그래프가 <InlineMath math="y" />축과{" "}
                                    <InlineMath math="x" />축 아래에서 만남
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 2. 직선 ax+by+c=0 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 직선{" "}
                            <InlineMath math="ax+by+c=0" />의 계수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선의 방정식
                        </p>

                        <BlockMath
                            math={String.raw`
                    ax+by+c=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 <InlineMath math="b\neq0" />이면
                            식을 <InlineMath math="y" />에 대하여 정리할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=-\frac abx-\frac cb
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 기울기는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{-\frac ab}
                `}
                        />

                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* x절편 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="x" />절편
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />축은{" "}
                                    <InlineMath math="y=0" />이므로
                                    식에 <InlineMath math="y=0" />을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            ax+c=0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \boxed{x=-\frac ca}
                        `}
                                />

                            </div>

                            {/* y절편 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="y" />절편
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="y" />축은{" "}
                                    <InlineMath math="x=0" />이므로
                                    식에 <InlineMath math="x=0" />을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            by+c=0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \boxed{y=-\frac cb}
                        `}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 font-bold text-blue-300">
                                직선의 그래프를 결정하는 값
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \begin{aligned}
                        \text{기울기}&=-\frac ab\\
                        x\text{절편}&=-\frac ca\\
                        y\text{절편}&=-\frac cb
                        \end{aligned}
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                계수가 0인 경우
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    <InlineMath math="a=0" />이면{" "}
                                    <InlineMath math="y=-\dfrac cb" />인 가로선입니다.
                                </p>

                                <p>
                                    <InlineMath math="b=0" />이면{" "}
                                    <InlineMath math="x=-\dfrac ca" />인 세로선입니다.
                                </p>

                                <p>
                                    <InlineMath math="c=0" />이면 직선은 원점을 지납니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 3. 부호를 대표하는 수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            3. 부호를 대표하는 수를 넣는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            계수의 정확한 값이 아니라 부호만 주어진 경우에는
                            복잡한 문자 계산 대신 부호를 대표하는 간단한 수를
                            넣을 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{양수}\rightarrow1,
                    \qquad
                    \text{음수}\rightarrow-1,
                    \qquad
                    0\rightarrow0
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            그래프의 개형과 지나는 사분면을 판단할 때에는
                            계수의 정확한 크기보다 기울기와 절편의 부호가 중요합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 주어진 부호 조건을 만족하는 대표식을 하나 만들어
                            그래프를 판단하면 계산이 간단해집니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="mb-4 font-bold text-purple-300">
                                전체 부호를 반대로 두어도 같은 그래프
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선의 방정식은 식 전체에{" "}
                                <InlineMath math="-1" />을 곱해도 같은 직선을 나타냅니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        ax+by+c=0
                        \quad\Longleftrightarrow\quad
                        -ax-by-c=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 공통으로 등장하는 문자를 편리하게{" "}
                                <InlineMath math="1" />로 두고 나머지 부호를 정해도 됩니다.
                            </p>

                        </div>

                    </div>

                    {/* 4. 대표값을 이용한 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            4. 대표값을 이용한 그래프의 개형 판단
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선{" "}
                                <InlineMath math="ax+by+c=0" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
                        ab<0,
                        \qquad
                        bc>0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때, 이 직선이 지나는 사분면을 알아봅시다.
                            </p>

                        </div>

                        <div className="mt-5 space-y-5">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 공통으로 등장하는 문자 정하기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 조건에 공통으로 등장하는 문자는{" "}
                                    <InlineMath math="b" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                            b=1
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 둡니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 나머지 계수의 부호 정하기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="ab<0" />이므로{" "}
                                    <InlineMath math="a" />와{" "}
                                    <InlineMath math="b" />의 부호는 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            a=-1
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 <InlineMath math="bc>0" />이므로{" "}
                                    <InlineMath math="b" />와{" "}
                                    <InlineMath math="c" />의 부호는 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            c=1
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 대표식 만들기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="a=-1,\ b=1,\ c=1" />을
                                    직선의 방정식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            -x+y+1=0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 이를 <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            y=x-1
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ④ 그래프의 개형 판단
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선 <InlineMath math="y=x-1" />의 기울기는 양수이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
                            x\text{절편}=1,
                            \qquad
                            y\text{절편}=-1
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 직선은
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \text{제1사분면, 제3사분면, 제4사분면}
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 지납니다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 실수 <InlineMath math="a,\ b,\ c" />에 대하여{" "}
                            <InlineMath math="ab<0,\ bc<0" />일 때, 직선{" "}
                            <InlineMath math="ax+by+c=0" />이 지나지 않는 사분면을
                            구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                계수의 정확한 값이 아니라 부호만 주어졌으므로
                                양수는 <InlineMath math="1" />, 음수는{" "}
                                <InlineMath math="-1" />을 대표값으로 사용하겠습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    계수의 부호 정하기
                                </p>

                                <p className="leading-8">
                                    두 조건에 공통으로 등장하는 문자는{" "}
                                    <InlineMath math="b" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b=1
                    `}
                                />

                                <p className="leading-8">
                                    로 두겠습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="ab<0" />이므로{" "}
                                    <InlineMath math="a" />와{" "}
                                    <InlineMath math="b" />의 부호는 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=-1
                    `}
                                />

                                <p className="leading-8">
                                    또한 <InlineMath math="bc<0" />이므로{" "}
                                    <InlineMath math="b" />와{" "}
                                    <InlineMath math="c" />의 부호도 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        c=-1
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    대표식 만들기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=-1,\ b=1,\ c=-1" />을
                                    직선의 방정식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -x+y-1=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=x+1
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                직선 <InlineMath math="y=x+1" />의 기울기는 양수이고,
                                두 절편은
                            </p>

                            <BlockMath
                                math={String.raw`
                    x\text{절편}=-1,
                    \qquad
                    y\text{절편}=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 이 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{제1사분면, 제2사분면, 제3사분면}
                `}
                            />

                            <p className="leading-8">
                                을 지나므로, 지나지 않는 사분면은
                                제4사분면입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{제4사분면}}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    부호 조건만 주어졌을 때에는 공통으로 등장하는 계수를{" "}
                                    <InlineMath math="1" />로 두고, 나머지 계수의 부호를
                                    결정하여 대표식을 만들면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        ab<0,\ bc<0
                        \rightarrow
                        b=1
                        \rightarrow
                        a=-1,\ c=-1
                        \rightarrow
                        y=x+1
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            상수 <InlineMath math="a,\ b,\ c" />가 다음을 만족시킬 때,
                            직선 <InlineMath math="ax+by+c=0" />이 지나는 사분면을
                            모두 구하시오.
                        </p>

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                (1) <InlineMath math="a=0,\ bc<0" />
                            </p>

                            <p>
                                (2) <InlineMath math="ab<0,\ bc<0" />
                            </p>

                            <p>
                                (3) <InlineMath math="c=0,\ ab<0" />
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* (1) */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    (1) <InlineMath math="a=0,\ bc<0" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=0" />이므로 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        by+c=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 부호를 대표하는 수를 이용하여{" "}
                                    <InlineMath math="b=1" />로 두겠습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="bc<0" />이므로{" "}
                                    <InlineMath math="b" />와 <InlineMath math="c" />의
                                    부호는 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b=1,\qquad c=-1
                    `}
                                />

                                <p className="leading-8">
                                    따라서 대표식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y-1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=1
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이 직선은 <InlineMath math="x" />축 위쪽의
                                    가로선이므로 제1사분면과 제2사분면을 지납니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{제1사분면, 제2사분면}}
                    `}
                                />

                            </div>

                            {/* (2) */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    (2) <InlineMath math="ab<0,\ bc<0" />
                                </p>

                                <p className="leading-8">
                                    두 조건에 공통으로 등장하는 문자는{" "}
                                    <InlineMath math="b" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b=1
                    `}
                                />

                                <p className="leading-8">
                                    로 두겠습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="ab<0" />이므로{" "}
                                    <InlineMath math="a" />와 <InlineMath math="b" />의
                                    부호는 서로 반대이고,{" "}
                                    <InlineMath math="bc<0" />이므로{" "}
                                    <InlineMath math="b" />와 <InlineMath math="c" />의
                                    부호도 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=-1,\qquad b=1,\qquad c=-1
                    `}
                                />

                                <p className="leading-8">
                                    따라서 대표식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -x+y-1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=x+1
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이 직선의 기울기는 양수이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x\text{절편}=-1,
                        \qquad
                        y\text{절편}=1
                    `}
                                />

                                <p className="leading-8">
                                    이므로 제1사분면, 제2사분면, 제3사분면을 지납니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{제1사분면, 제2사분면, 제3사분면}
                        }
                    `}
                                />

                            </div>

                            {/* (3) */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    (3) <InlineMath math="c=0,\ ab<0" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="c=0" />이므로 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        ax+by=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 공통으로 등장하는 문자{" "}
                                    <InlineMath math="b" />를{" "}
                                    <InlineMath math="1" />로 두면,{" "}
                                    <InlineMath math="ab<0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=-1,\qquad b=1
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 대표식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -x+y=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=x
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이 직선은 원점을 지나고 기울기가 양수이므로
                                    제1사분면과 제3사분면을 지납니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{제1사분면, 제3사분면}}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    계수의 부호만 주어졌을 때에는
                                    양수는 <InlineMath math="1" />,
                                    음수는 <InlineMath math="-1" />,{" "}
                                    <InlineMath math="0" />은 그대로 대입하여
                                    대표식을 만들면 됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    특히 계수가 <InlineMath math="0" />인 경우에는
                                    직선의 모양이 바로 결정됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a=0&\rightarrow\text{가로선}\\
                        b=0&\rightarrow\text{세로선}\\
                        c=0&\rightarrow\text{원점을 지나는 직선}
                        \end{aligned}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 3 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                이차함수{" "}
                                <InlineMath math="y=ax^2+bx+c" />의 그래프가
                                오른쪽 그림과 같을 때,
                                직선 <InlineMath math="ax+by+c=0" />이
                                지나지 않는 사분면을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.11_3.png"
                                alt="이차함수의 그래프"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 그림에서 계수의 부호를 판단합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    그래프에서 계수의 부호 읽기
                                </p>

                                <p className="leading-8">
                                    그래프는 아래로 볼록이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a>0
                    `}
                                />

                                <p className="leading-8">
                                    그래프가 <InlineMath math="y" />축을 통과할 때
                                    오른쪽 아래 방향으로 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b<0
                    `}
                                />

                                <p className="leading-8">
                                    또한 <InlineMath math="y" />절편이{" "}
                                    <InlineMath math="x" />축 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        c>0
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a>0,\qquad b<0,\qquad c>0
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                부호만 주어졌으므로 대표값을 사용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=1,\qquad b=-1,\qquad c=1
                `}
                            />

                            <p className="leading-8">
                                이고, 직선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
                    x-y+1=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    y=x+1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                기울기는 양수이고,
                            </p>

                            <BlockMath
                                math={String.raw`
                    x\text{절편}=-1,\qquad
                    y\text{절편}=1
                `}
                            />

                            <p className="leading-8">
                                이므로 직선은
                                제1사분면, 제2사분면, 제3사분면을 지나고
                                제4사분면은 지나지 않습니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{제4사분면}}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 이차함수의 그래프에서{" "}
                                    <InlineMath math="a,\ b,\ c" />의 부호를
                                    읽어낸 뒤,
                                    양수는 <InlineMath math="1" />,
                                    음수는 <InlineMath math="-1" />을 대입하여
                                    대표식을 만들면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a>0,\ b<0,\ c>0
                        \rightarrow
                        (1,-1,1)
                        \rightarrow
                        y=x+1
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="ax+by+c=0" />의 개형이
                                오른쪽 그림과 같을 때,
                                직선 <InlineMath math="bx+cy+a=0" />이
                                지나지 않는 사분면을 구하시오.
                                <br />
                                (단, <InlineMath math="a,\ b,\ c" />는 상수이다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.11_4.png"
                                alt="직선 ax+by+c=0의 개형"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                그림에서 직선 <InlineMath math="ax+by+c=0" />은
                                기울기가 음수이고,{" "}
                                <InlineMath math="x" />절편과{" "}
                                <InlineMath math="y" />절편이 모두 양수입니다.
                            </p>

                            <p className="leading-8">
                                그래프의 개형만 판단하면 되므로
                                두 절편을 모두 <InlineMath math="1" />로 두어
                                대표식을 만들겠습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원래 직선의 대표식
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />절편과{" "}
                                    <InlineMath math="y" />절편이 모두{" "}
                                    <InlineMath math="1" />인 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{x}{1}+\frac{y}{1}=1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x+y-1=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 대표값은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=1,\qquad
                        b=1,\qquad
                        c=-1
                    `}
                                />

                                <p className="leading-8">
                                    로 둘 수 있습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    새로운 직선의 대표식
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="bx+cy+a=0" />에{" "}
                                    <InlineMath math="a=1,\ b=1,\ c=-1" />을
                                    대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-y+1=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=x+1
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                직선 <InlineMath math="y=x+1" />의 기울기는 양수이고,
                                두 절편은
                            </p>

                            <BlockMath
                                math={String.raw`
                    x\text{절편}=-1,
                    \qquad
                    y\text{절편}=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 이 직선은 제1사분면, 제2사분면, 제3사분면을 지나고
                                제4사분면은 지나지 않습니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{제4사분면}}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그래프의 개형만 주어진 경우에는
                                    절편의 정확한 크기가 아니라 부호가 중요합니다.
                                    따라서 양의 <InlineMath math="x" />절편과
                                    양의 <InlineMath math="y" />절편을 각각{" "}
                                    <InlineMath math="1" />로 두어
                                    원래 직선의 대표식을 바로 만들 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{그래프의 개형}
                        \rightarrow
                        x+y-1=0
                        \rightarrow
                        (a,b,c)=(1,1,-1)
                        \rightarrow
                        bx+cy+a=0
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                1. 일차함수와 이차함수의 계수
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        a&:\text{이차함수 그래프의 모양}\\
                        m,\ b&:\text{그래프가 \(y\)축을 통과하는 방향}\\
                        n,\ c&:\text{\(y\)절편}
                        \end{aligned}
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                2. 직선{" "}
                                <InlineMath math="ax+by+c=0" />
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \begin{aligned}
                        \text{기울기}&=-\frac ab\\
                        x\text{절편}&=-\frac ca\\
                        y\text{절편}&=-\frac cb
                        \end{aligned}
                        }
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                3. 대표값을 이용한 빠른 판단
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{양수}\rightarrow1,\qquad
                        \text{음수}\rightarrow-1,\qquad
                        0\rightarrow0
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                부호 조건을 만족하는 대표식을 만든 뒤
                                기울기와 절편을 이용하여 그래프의 개형과
                                지나는 사분면을 판단합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{부호 조건}
                        \rightarrow
                        \text{대표값 대입}
                        \rightarrow
                        \text{대표식}
                        \rightarrow
                        \text{그래프의 개형}
                    `}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.12 두 직선의 위치관계 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.12 두 직선의 위치관계
                </h2>

                <p className="leading-8 text-gray-300">
                    두 직선의 기울기와 절편 또는 각 항의 계수를 비교하면
                    두 직선이 평행한지, 일치하는지, 한 점에서 만나는지,
                    수직으로 만나는지를 판단할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 기울기형으로 나타낸 두 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 기울기형으로 나타낸 두 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 직선
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=mx+n,
                    \qquad
                    y=m'x+n'
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 <InlineMath math="m,\ m'" />은 각각 두 직선의
                            기울기이고, <InlineMath math="n,\ n'" />은 각각{" "}
                            <InlineMath math="y" />절편입니다.
                        </p>

                        <div className="mt-6 space-y-5">

                            {/* 평행 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-blue-300">
                                    평행하다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 기울기는 같고{" "}
                                    <InlineMath math="y" />절편은 다릅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            m=m',
                            \qquad
                            n\ne n'
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 직선은 만나지 않으므로 교점이 없고,
                                    두 직선의 방정식을 연립한 연립방정식은
                                    해가 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \text{평행}
                            \Longleftrightarrow
                            \text{교점이 없음}
                            \Longleftrightarrow
                            \text{해가 없음}
                        `}
                                />

                            </div>

                            {/* 일치 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-purple-300">
                                    일치한다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 기울기와{" "}
                                    <InlineMath math="y" />절편이 모두 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            m=m',
                            \qquad
                            n=n'
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 직선이 완전히 포개어지므로 모든 점이 공통점입니다.
                                    따라서 교점과 연립방정식의 해가 무수히 많습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \text{일치}
                            \Longleftrightarrow
                            \text{교점이 무수히 많음}
                            \Longleftrightarrow
                            \text{해가 무수히 많음}
                        `}
                                />

                            </div>

                            {/* 한 점에서 만남 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-green-300">
                                    한 점에서 만난다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 기울기가 다릅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{m\ne m'}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 직선은 한 점에서 만나므로 교점이 한 개이고,
                                    연립방정식의 해는 한 쌍입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \text{한 점에서 만남}
                            \Longleftrightarrow
                            \text{교점이 한 개}
                            \Longleftrightarrow
                            \text{해가 한 쌍}
                        `}
                                />

                            </div>

                            {/* 수직 */}
                            <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-rose-300">
                                    수직으로 만난다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선이 수직으로 만나면
                                    두 기울기의 곱은 <InlineMath math="-1" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{mm'=-1}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉, 두 직선의 기울기는{" "}
                                    <strong className="text-white">
                                        서로 역수이면서 반대 부호
                                    </strong>
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            3
                            \longleftrightarrow
                            -\frac13,
                            \qquad
                            -2
                            \longleftrightarrow
                            \frac12
                        `}
                                />

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        기울기를 수로 나타낼 수 없는 경우
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        가로선과 세로선도 서로 수직입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                y=q
                                \quad\perp\quad
                                x=p
                            `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        세로선의 기울기는 정의되지 않으므로
                                        이 경우에는 <InlineMath math="mm'=-1" />을
                                        직접 사용할 수 없습니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 2. 일반형으로 나타낸 두 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 일반형으로 나타낸 두 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 직선
                        </p>

                        <BlockMath
                            math={String.raw`
                    ax+by+c=0,
                    \qquad
                    a'x+b'y+c'=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 위치관계는 <InlineMath math="x" />의 계수,{" "}
                            <InlineMath math="y" />의 계수, 상수항의 비를
                            비교하여 판단할 수 있습니다.
                        </p>

                        <div className="mt-6 space-y-5">

                            {/* 평행 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-blue-300">
                                    평행하다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />의 계수의 비와{" "}
                                    <InlineMath math="y" />의 계수의 비는 같지만,
                                    상수항의 비는 다릅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \frac{a}{a'}
                            =
                            \frac{b}{b'}
                            \ne
                            \frac{c}{c'}
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 식의 <InlineMath math="x,\ y" /> 계수는
                                    서로 같은 비율이지만 상수항은 그 비율과 다르므로,
                                    두 직선은 서로 다른 평행선입니다.
                                </p>

                            </div>

                            {/* 일치 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-purple-300">
                                    일치한다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />의 계수,{" "}
                                    <InlineMath math="y" />의 계수, 상수항의 비가
                                    모두 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \frac{a}{a'}
                            =
                            \frac{b}{b'}
                            =
                            \frac{c}{c'}
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    한 식에 일정한 수를 곱하면 다른 식이 되므로
                                    두 식은 같은 직선을 나타냅니다.
                                </p>

                            </div>

                            {/* 한 점에서 만남 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-green-300">
                                    한 점에서 만난다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />의 계수의 비와{" "}
                                    <InlineMath math="y" />의 계수의 비가 다릅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \frac{a}{a'}
                            \ne
                            \frac{b}{b'}
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    분모가 <InlineMath math="0" />인 경우까지
                                    예외 없이 나타내려면 다음 조건을 사용할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{ab'-a'b\ne0}
                        `}
                                />

                            </div>

                            {/* 수직 */}
                            <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-rose-300">
                                    수직으로 만난다
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선이 수직으로 만나면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{aa'+bb'=0}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이를 우리말로 나타내면
                                </p>

                                <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="text-center text-lg font-bold text-white">
                                        <InlineMath math="x" />계수의 곱
                                        {" + "}
                                        <InlineMath math="y" />계수의 곱
                                        {" = "}
                                        <InlineMath math="0" />
                                    </p>

                                </div>

                                <p className="mt-4 leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        예
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                3x+5y+1=0,
                                \qquad
                                5x-3y-2=0
                            `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        에서 <InlineMath math="x" />계수의 곱과{" "}
                                        <InlineMath math="y" />계수의 곱의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                3\cdot5+5\cdot(-3)
                                =
                                15-15
                                =
                                0
                            `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로 두 직선은 서로 수직입니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                비를 사용할 때의 주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                계수 중 <InlineMath math="0" />이 있어 비를 나타내기
                                어려운 경우에는 식을 직접 정리하여 기울기를 비교하거나,
                                다음과 같이 곱셈 형태를 사용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        ab'-a'b=0
                        \quad:\quad
                        \text{평행 또는 일치}
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        ab'-a'b\ne0
                        \quad:\quad
                        \text{한 점에서 만남}
                    `}
                            />

                        </div>

                    </div>

                    {/* 3. 평행한 직선 작성 요령 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            3. 평행한 직선의 방정식을 작성하는 요령
                        </h3>

                        <p className="leading-8 text-gray-300">
                            평행한 두 직선은 기울기가 같습니다.
                            따라서 주어진 직선의 형태에 맞추어
                            기울기 또는 <InlineMath math="x,\ y" />의 계수를
                            그대로 사용하면 됩니다.
                        </p>

                        {/* 기울기형 예시 */}
                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-blue-300">
                                기울기형에서 평행한 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="y=3x+2" />와 평행하고
                                점 <InlineMath math="(1,2)" />를 지나는 직선을
                                구해봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                평행한 직선의 기울기는 그대로{" "}
                                <InlineMath math="3" />입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                기울기가 <InlineMath math="3" />이고
                                점 <InlineMath math="(1,2)" />를 지나므로 바로
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=3(x-1)+2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                로 작성할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{y=3x-1}
                    `}
                            />

                        </div>

                        {/* 일반형 예시 */}
                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-blue-300">
                                일반형에서 평행한 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="3x+5y+1=0" />과 평행하고
                                점 <InlineMath math="(1,2)" />를 지나는 직선을
                                구해봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                평행한 직선은 <InlineMath math="x,\ y" />의 계수를
                                그대로 사용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        3x+5y=\square
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(1,2)" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        3\cdot1+5\cdot2
                        =
                        13
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{3x+5y=13}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                    </div>

                    {/* 4. 수직인 직선 작성 요령 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            4. 수직인 직선의 방정식을 작성하는 요령
                        </h3>

                        <p className="leading-8 text-gray-300">
                            수직인 직선을 작성할 때에는
                            기울기형과 일반형에서 서로 다른 요령을 사용합니다.
                        </p>

                        {/* 기울기형 예시 */}
                        <div className="mt-6 rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-rose-300">
                                기울기형에서 수직인 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="y=3x+2" />와 수직이고
                                점 <InlineMath math="(1,2)" />를 지나는 직선을
                                구해봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                원래 직선의 기울기는 <InlineMath math="3" />입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                수직인 직선의 기울기는{" "}
                                <strong className="text-white">
                                    역수이면서 반대 부호
                                </strong>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        3
                        \longrightarrow
                        -\frac13
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                기울기가 <InlineMath math="-\dfrac13" />이고
                                점 <InlineMath math="(1,2)" />를 지나므로 바로
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=-\frac13(x-1)+2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                로 작성할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{x+3y-7=0}
                    `}
                            />

                        </div>

                        {/* 일반형 예시 */}
                        <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-rose-300">
                                일반형에서 수직인 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="3x+5y+1=0" />과 수직이고
                                점 <InlineMath math="(1,2)" />를 지나는 직선을
                                구해봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                원래 직선의 <InlineMath math="x,\ y" /> 계수는
                            </p>

                            <BlockMath
                                math={String.raw`
                        (3,5)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 계수의 자리를 바꾸고 하나의 부호를 바꾸면
                                수직인 직선의 계수를 만들 수 있습니다.
                                여기서는
                            </p>

                            <BlockMath
                                math={String.raw`
                        (3,5)
                        \longrightarrow
                        (5,-3)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 두겠습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        5x-3y=\square
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(1,2)" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        5\cdot1-3\cdot2
                        =
                        -1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{5x-3y=-1}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    왜 계수의 자리를 바꾸고 하나의 부호를 바꿀까?
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원래 직선의 계수가 <InlineMath math="(a,b)" />일 때
                                    수직인 직선의 계수를
                                </p>

                                <BlockMath
                                    math={String.raw`
                            (b,-a)
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 두면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            a\cdot b+b\cdot(-a)=0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                            aa'+bb'=0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 만족합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            (a,b)
                            \xrightarrow{\text{수직}}
                            (b,-a)
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    하나의 부호를 반대쪽으로 바꾸어
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            (a,b)
                            \xrightarrow{\text{수직}}
                            (-b,a)
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 사용해도 같은 방향의 직선을 만들 수 있습니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            5. 왜 수직인 직선의 기울기의 곱이 <InlineMath math="-1" />인가?
                        </h3>
                        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">
                            {/* 이미지 */}
                            <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4">
                                <img
                                    src="/images/commonMath2/1.12.png"
                                    alt="수직인 직선의 기울기"
                                    className="mx-auto w-full max-w-[380px] rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">
                                <p>
                                    두 직선이 서로 수직이면 한 직선의 가로와 세로 길이가
                                    다른 직선에서는 서로 바뀝니다.
                                </p>

                                <p>
                                    따라서 기울기의 분모와 분자가 서로 바뀌어
                                    <strong className="text-sky-400"> 역수</strong>가 되고,
                                    두 직선은 서로 반대 방향으로 기울어 있으므로
                                    <strong className="text-pink-400"> 부호도 반대</strong>가 됩니다.
                                </p>

                                <div className="rounded-lg bg-zinc-900 p-4">
                                    <BlockMath math={"m=\\frac{b}{a}"} />
                                    <BlockMath math={"m'=-\\frac{a}{b}"} />
                                </div>

                                <p>따라서</p>

                                <BlockMath
                                    math={String.raw`
                                    mm'
                                    =
                                    \frac{b}{a}
                                    \times
                                    \left(-\frac{a}{b}\right)
                                    =-1
                                    `}
                                />

                                <div className="rounded-lg border border-emerald-600 bg-emerald-950/30 p-4">
                                    <p className="font-semibold text-emerald-300">
                                        핵심
                                    </p>
                                    <p className="mt-2">
                                        수직인 직선은
                                        <strong> 기울기가 역수이면서 부호가 반대</strong>이므로
                                        기울기의 곱은 항상
                                        <strong> <InlineMath math="-1" /></strong>입니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="y=4x-12" />에 평행하고
                                점 <InlineMath math="(-2,\,5)" />를 지나는 직선이
                                점 <InlineMath math="(6,\,k)" />를 지날 때,{" "}
                                <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    평행한 두 직선은 기울기가 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    m=4
                `}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="(-2,\,5)" />를 지나므로
                                    점-기울기식을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    y-5
                    =
                    4(x+2)
                `}
                                />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    y=4x+13
                `}
                                />

                                <p className="leading-8">
                                    이 직선이 점 <InlineMath math="(6,\,k)" />를 지나므로{" "}
                                    <InlineMath math="x=6" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    k
                    =
                    4\times6+13
                    =
                    37
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{37}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        평행한 두 직선은 기울기가 같습니다.
                                        따라서 먼저 기울기를 구한 뒤,
                                        점-기울기식을 이용하여 직선의 방정식을 만들고
                                        필요한 점을 대입하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{평행}
                        \rightarrow
                        \text{기울기}
                        \rightarrow
                        \text{점-기울기식}
                        \rightarrow
                        \text{대입}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 2
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 점 <InlineMath math="(1,\,3),\ (5,\,-7)" />을 이은 선분의 중점을 지나고
                                직선 <InlineMath math="3x+5y-12=0" />에 수직인
                                직선의 방정식을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 두 점의 중점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                \left(
                \frac{1+5}{2},
                \frac{3+(-7)}{2}
                \right)
                =(3,-2)
                `}
                                />

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="3x+5y-12=0" />
                                    의 계수는{" "}
                                    <InlineMath math="(3,\,5)" />
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    수직인 직선은
                                    x계수와 y계수를 서로 바꾸고
                                    하나의 부호를 바꾸면 되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                5x-3y+n=0
                `}
                                />

                                <p className="leading-8">
                                    중점{" "}
                                    <InlineMath math="(3,\,-2)" />
                                    를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                5(3)-3(-2)+n=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                15+6+n=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                n=-21
                `}
                                />

                                <p className="leading-8">
                                    따라서 구하는 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                5x-3y-21=0
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \boxed{5x-3y-21=0}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        먼저 지나가는 점(중점)을 구한 뒤,
                                        수직인 직선의 계수는
                                        <strong>x계수와 y계수를 서로 바꾸고 하나의 부호를 바꾸는 방법</strong>으로
                                        구합니다.
                                        마지막으로 지나가는 점을 대입하여 상수항을 결정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \text{중점}
                    \rightarrow
                    \text{수직인 계수}
                    \rightarrow
                    \text{점 대입}
                    \rightarrow
                    \text{직선의 방정식}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 3
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 점{" "}
                                <InlineMath math="A(-1,\,2),\ B(5,\,-4)" />
                                를 이은 선분 <InlineMath math="AB" />의
                                수직이등분선이
                                점 <InlineMath math="(a,\,-2)" />를 지날 때,{" "}
                                <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 선분 <InlineMath math="AB" />의 중점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                \left(
                \frac{-1+5}{2},
                \frac{2+(-4)}{2}
                \right)
                =(2,-1)
                `}
                                />

                                <p className="leading-8">
                                    직선 <InlineMath math="AB" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                \frac{-4-2}{5-(-1)}
                =
                -1
                `}
                                />

                                <p className="leading-8">
                                    따라서 수직이등분선의 기울기는{" "}
                                    <InlineMath math="1" />입니다.
                                </p>

                                <p className="leading-8">
                                    중점 <InlineMath math="(2,\,-1)" />을 지나므로
                                    수직이등분선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                y+1=x-2
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                y=x-3
                `}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="(a,\,-2)" />를 지나므로{" "}
                                    <InlineMath math="y=-2" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                -2=a-3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                a=1
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \boxed{a=1}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        수직이등분선은
                                        <strong>선분의 중점을 지나고 원래 직선에 수직</strong>입니다.
                                        따라서 먼저 중점을 구하고,
                                        기울기를 이용하여 수직인 직선을 만든 뒤
                                        필요한 점을 대입하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \text{중점}
                    \rightarrow
                    \text{수직}
                    \rightarrow
                    \text{직선의 방정식}
                    \rightarrow
                    \text{점 대입}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 4
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 점{" "}
                                <InlineMath math="A(-5,\,-4),\ B(a,\,8)" />
                                를 이은 선분 <InlineMath math="AB" />의
                                수직이등분선의 방정식이{" "}
                                <InlineMath math="2x+3y+b=0" />
                                일 때,<br />
                                <InlineMath math="a-b" />의 값을 구하시오.
                                (<InlineMath math="b" />는 상수이다.)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    수직이등분선의 계수가{" "}
                                    <InlineMath math="(2,\,3)" />이므로
                                    직선 <InlineMath math="AB" />의 계수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                (3,\,-2)
                `}
                                />

                                <p className="leading-8">
                                    따라서 직선 <InlineMath math="AB" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                3x-2y+n=0
                `}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="A(-5,\,-4)" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                3(-5)-2(-4)+n=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                -15+8+n=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                n=7
                `}
                                />

                                <p className="leading-8">
                                    따라서 직선 <InlineMath math="AB" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
                3x-2y+7=0
                `}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="B(a,\,8)" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                3a-2(8)+7=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                3a-9=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                a=3
                `}
                                />

                                <p className="leading-8">
                                    수직이등분선은 선분의 중점을 지나므로
                                    중점은
                                </p>

                                <BlockMath
                                    math={String.raw`
                \left(
                \frac{-5+3}{2},
                \frac{-4+8}{2}
                \right)
                =
                (-1,\,2)
                `}
                                />

                                <p className="leading-8">
                                    이를{" "}
                                    <InlineMath math="2x+3y+b=0" />
                                    에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                2(-1)+3(2)+b=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                -2+6+b=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                b=-4
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                a-b
                =
                3-(-4)
                =
                7
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \boxed{7}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        수직이등분선이 주어졌다면 먼저 수직인 직선{" "}
                                        <InlineMath math="AB" />를 구합니다.
                                        이후 점을 이용하여 <InlineMath math="AB" />의 방정식을 완성하고,
                                        다른 점을 이용하여 <InlineMath math="a" />를 구합니다.
                                        마지막으로 중점을 수직이등분선에 대입하여{" "}
                                        <InlineMath math="b" />를 구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \text{수직인 직선}
                    \rightarrow
                    AB
                    \rightarrow
                    a
                    \rightarrow
                    \text{중점}
                    \rightarrow
                    b
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 5
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(2,\,5)" />를 지나고
                                직선 <InlineMath math="3x+2y-4=0" />에 수직인 직선의 방정식이
                                <InlineMath math="2x+ay+b=0" />일 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.{" "}
                                (<InlineMath math="a,\ b" />는 상수이다.)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="3x+2y-4=0" />
                                    에 수직인 직선의 <InlineMath math="x" />계수와 <InlineMath math="y" />계수를 서로 바꾸고
                                    하나의 부호를 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
    2x-3y+b=0
    `}
                                />

                                <p className="leading-8">
                                    그런데 직선의 방정식이{" "}
                                    <InlineMath math="2x+ay+b=0" />
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
    a=-3
    `}
                                />

                                <p className="leading-8">
                                    점{" "}
                                    <InlineMath math="(2,\,5)" />
                                    를 지나므로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
    2(2)-3(5)+b=0
    `}
                                />

                                <BlockMath
                                    math={String.raw`
    4-15+b=0
    `}
                                />

                                <BlockMath
                                    math={String.raw`
    b=11
    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
    a+b=-3+11=8
    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                a+b=-3+11=8
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \boxed{8}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        일반형 직선에서는
                                        <strong>수직인 두 직선의 x계수의 곱과 y계수의 곱의 합이 0</strong>임을
                                        이용하면 미지수 계수를 바로 구할 수 있습니다.
                                        이후 지나가는 점을 대입하여 상수항을 구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    aa'+bb'=0
                    \rightarrow
                    a
                    \rightarrow
                    b
                    \rightarrow
                    a+b
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 6
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(2,\,0)" />을 지나는 직선과
                                직선 <InlineMath math="(3k-2)x-y+5=0" />이{" "}
                                <InlineMath math="y" />축에서 수직으로 만날 때,
                                상수 <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    두 직선이 <InlineMath math="y" />축에서 만나므로
                                    만나는 점은{" "}
                                    <InlineMath math="(0,\,5)" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                x=0
                \text{을 대입하면 }
                -y+5=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                y=5
                `}
                                />

                                <p className="leading-8">
                                    따라서 점{" "}
                                    <InlineMath math="(2,\,0)" />,{" "}
                                    <InlineMath math="(0,\,5)" />
                                    를 지나는 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                5x+2y-10=0
                `}
                                />

                                <p className="leading-8">
                                    수직인 직선이므로
                                    <InlineMath math="x" />계수와 <InlineMath math="y" />계수의 자리를 바꾸고
                                    하나의 부호를 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
                2x-5y+n=0
                `}
                                />

                                <p className="leading-8">
                                    이를{" "}
                                    <InlineMath math="(3k-2)x-y+5=0" />
                                    와 비교하면
                                    두 식은 같은 직선이므로 계수의 비가 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                \frac{3k-2}{2}
                =
                \frac{-1}{-5}
                =
                \frac{5}{n}
                =
                \frac15
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                3k-2=\frac25
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                15k-10=2
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                k=\frac45
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \boxed{\frac45}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        먼저 만나는 점을 구하여 한 직선의 방정식을 만든 뒤,
                                        수직인 직선은
                                        <strong>계수의 자리를 바꾸고 하나의 부호를 바꾸는 방법</strong>으로
                                        작성합니다.
                                        마지막으로 두 직선이 같은 직선임을 이용하여 계수를 비교합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    \text{교점}
                    \rightarrow
                    \text{직선}
                    \rightarrow
                    \text{수직인 직선}
                    \rightarrow
                    \text{계수 비교}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 7
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="5x+2y+8=0" />은
                                직선 <InlineMath math="6x-ay-1=0" />과 수직이고
                                직선 <InlineMath math="ax+by+4=0" />과 평행하다.
                                이때 직선{" "}
                                <InlineMath math="\dfrac{x}{a}+\dfrac{y}{b}=1" />과{" "}
                                <InlineMath math="x" />축, <InlineMath math="y" />축으로
                                둘러싸인 도형의 넓이를 구하시오.
                                (<InlineMath math="a,\ b" />는 상수이다.)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수직 조건으로 <InlineMath math="a" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 직선
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x+2y+8=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        6x-ay-1=0
                    `}
                                    />

                                    <p className="leading-8">
                                        이 서로 수직이므로{" "}
                                        <InlineMath math="x" />계수의 곱과{" "}
                                        <InlineMath math="y" />계수의 곱의 합이{" "}
                                        <InlineMath math="0" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5\cdot6+2\cdot(-a)=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        30-2a=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a=15
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        평행 조건으로 <InlineMath math="b" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 직선
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x+2y+8=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        ax+by+4=0
                    `}
                                    />

                                    <p className="leading-8">
                                        이 서로 평행하므로{" "}
                                        <InlineMath math="x,\ y" />의 계수는 같은 비입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5:2=a:b
                    `}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="a=15" />이므로 첫 번째 직선의 계수에{" "}
                                        <InlineMath math="3" />을 곱한 관계입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (5,2)\times3=(15,6)
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        b=6
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    이제 직선
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{x}{a}+\frac{y}{b}=1
                `}
                                />

                                <p className="leading-8">
                                    에 <InlineMath math="a=15,\ b=6" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{x}{15}+\frac{y}{6}=1
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 직선의 <InlineMath math="x" />절편은{" "}
                                    <InlineMath math="15" />이고{" "}
                                    <InlineMath math="y" />절편은{" "}
                                    <InlineMath math="6" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (15,0),
                    \qquad
                    (0,6)
                `}
                                />

                                <p className="leading-8">
                                    따라서 직선과 두 좌표축으로 둘러싸인 도형은
                                    밑변의 길이가 <InlineMath math="15" />,
                                    높이가 <InlineMath math="6" />인 직각삼각형입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \text{넓이}
                    =
                    \frac12\cdot15\cdot6
                    =
                    45
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{45}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        수직인 두 직선이 모두 주어졌으므로{" "}
                                        <InlineMath math="x" />계수의 곱과{" "}
                                        <InlineMath math="y" />계수의 곱의 합이{" "}
                                        <InlineMath math="0" />임을 이용합니다.
                                        평행한 두 직선에서는{" "}
                                        <InlineMath math="x,\ y" /> 계수의 비가 같음을 이용합니다.
                                        마지막으로 절편형의 분모가 각각 두 좌표축과의 절편임을
                                        이용하여 삼각형의 넓이를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{수직 조건}
                        \rightarrow
                        a
                        \rightarrow
                        \text{평행 조건}
                        \rightarrow
                        b
                        \rightarrow
                        \text{두 절편}
                        \rightarrow
                        \text{삼각형의 넓이}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 8 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 8
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선{" "}
                                <InlineMath math="2x+ay+3=0" />
                                이
                                직선{" "}
                                <InlineMath math="x+by-1=0" />
                                에는 수직이고,
                                직선{" "}
                                <InlineMath math="2x-(b+4)y-3=0" />
                                에는 평행할 때,
                                상수{" "}
                                <InlineMath math="a,\ b" />
                                에 대하여{" "}
                                <InlineMath math="\dfrac{a^2}{b}+\dfrac{b^2}{a}" />
                                의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ① 평행 조건 이용
                                    </p>

                                    <p className="leading-8">
                                        두 직선이 평행하므로{" "}
                                        <InlineMath math="x,\ y" />의 계수의 비가 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    2: a
                    =
                    2:-(b+4)
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                    a=-(b+4)
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ② 수직 조건 이용
                                    </p>

                                    <p className="leading-8">
                                        수직인 두 직선이므로
                                        <InlineMath math="x" />계수의 곱과 <InlineMath math="y" />계수의 곱의 합은{" "}
                                        <InlineMath math="0" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                    2\cdot1+a\cdot b=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                    ab=-2
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    평행 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
        a=-(b+4)
    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
        a+b=-4
    `}
                                />

                                <p className="leading-8">
                                    또한 수직 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
        ab=-2
    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    구하려는 식은 <InlineMath math="a,\ b" />의
                                    대칭식이므로 통분하여 정리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
        \frac{a^2}{b}+\frac{b^2}{a}
        =
        \frac{a^3+b^3}{ab}
    `}
                                />

                                <p className="leading-8">
                                    세제곱의 합을 <InlineMath math="a+b" />와{" "}
                                    <InlineMath math="ab" />로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
        a^3+b^3
        =
        (a+b)^3-3ab(a+b)
    `}
                                />

                                <BlockMath
                                    math={String.raw`
        =
        (-4)^3-3(-2)(-4)
    `}
                                />

                                <BlockMath
                                    math={String.raw`
        =
        -64-24
        =
        -88
    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
        \frac{a^2}{b}+\frac{b^2}{a}
        =
        \frac{-88}{-2}
        =
        44
    `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
            \boxed{44}
        `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        평행 조건에서 <InlineMath math="a+b" />를 구하고,
                                        수직 조건에서 <InlineMath math="ab" />를 구합니다.
                                        구하려는 식은 <InlineMath math="a,\ b" />의 대칭식이므로
                                        각 값을 직접 구하지 않고 합과 곱을 이용하여 계산합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
            \text{평행}
            \rightarrow
            a+b
            \rightarrow
            \text{수직}
            \rightarrow
            ab
            \rightarrow
            \text{대칭식}
        `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 9 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 9
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 직선 <InlineMath math="x+ay+1=0" />,{" "}
                                <InlineMath math="ax+(a+3)y+b=0" />은 서로 수직이고,
                                두 직선의 교점의 좌표는 <InlineMath math="(c,\,2)" />일 때,
                                상수 <InlineMath math="a,\ b,\ c" />에 대하여{" "}
                                <InlineMath math="a+b+c" />의 값을 구하시오.
                                (단, <InlineMath math="a<0" />)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수직 조건으로 <InlineMath math="a" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 직선이 서로 수직이므로{" "}
                                        <InlineMath math="x" />계수의 곱과{" "}
                                        <InlineMath math="y" />계수의 곱의 합은{" "}
                                        <InlineMath math="0" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        1\cdot a+a(a+3)=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a+a^2+3a=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a^2+4a=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a(a+4)=0
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a=0
                        \quad\text{또는}\quad
                        a=-4
                    `}
                                    />

                                    <p className="leading-8">
                                        그런데 <InlineMath math="a<0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a=-4
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        교점의 좌표를 이용하여 <InlineMath math="c" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 직선의 교점 <InlineMath math="(c,\,2)" />는
                                        첫 번째 직선
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+ay+1=0
                    `}
                                    />

                                    <p className="leading-8">
                                        위의 점이므로{" "}
                                        <InlineMath math="x=c,\ y=2,\ a=-4" />를 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        c+(-4)\cdot2+1=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        c-7=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        c=7
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        교점의 좌표를 이용하여 <InlineMath math="b" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        교점 <InlineMath math="(7,\,2)" />는
                                        두 번째 직선
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        ax+(a+3)y+b=0
                    `}
                                    />

                                    <p className="leading-8">
                                        위의 점이므로{" "}
                                        <InlineMath math="x=7,\ y=2,\ a=-4" />를 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (-4)\cdot7+\{-4+3\}\cdot2+b=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        -28-2+b=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        b=30
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a+b+c
                    =
                    -4+30+7
                    =
                    33
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{33}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 직선이 모두 주어져 있으므로 수직 조건인{" "}
                                        <strong>
                                            <InlineMath math="x" />계수의 곱
                                            {" + "}
                                            <InlineMath math="y" />계수의 곱
                                            {" = "}
                                            <InlineMath math="0" />
                                        </strong>
                                        을 이용하여 <InlineMath math="a" />를 구합니다.
                                        그다음 교점은 두 직선 위에 모두 있으므로,
                                        교점의 좌표를 각 직선에 차례로 대입하여{" "}
                                        <InlineMath math="c" />와 <InlineMath math="b" />를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{수직 조건}
                        \rightarrow
                        a
                        \rightarrow
                        \text{첫 번째 직선에 교점 대입}
                        \rightarrow
                        c
                        \rightarrow
                        \text{두 번째 직선에 교점 대입}
                        \rightarrow
                        b
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 10 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 10
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 자연수 <InlineMath math="n" />에 대하여
                                    좌표평면에서 점 <InlineMath math="A(0,3)" />을 지나는 직선과
                                    점 <InlineMath math="B(n,3)" />을 지나는 직선이 서로
                                    수직으로 만나는 점을 <InlineMath math="P(4,5)" />라 할 때,
                                    삼각형 <InlineMath math="ABP" />의 무게중심의 좌표를{" "}
                                    <InlineMath math="(a,b)" />라 하자.{" "}
                                    <InlineMath math="a+b" />의 값을 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.12_10.png"
                                    alt="서로 수직인 두 직선과 삼각형 ABP"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    점 <InlineMath math="A(0,3)" />과{" "}
                                    <InlineMath math="P(4,5)" />를 지나는 직선{" "}
                                    <InlineMath math="AP" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{5-3}{4-0}
                    =
                    \frac24
                    =
                    \frac12
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="B(n,3)" />과{" "}
                                    <InlineMath math="P(4,5)" />를 지나는 직선{" "}
                                    <InlineMath math="BP" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{5-3}{4-n}
                    =
                    \frac{2}{4-n}
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수직 조건으로 <InlineMath math="n" /> 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 직선 <InlineMath math="AP" />와{" "}
                                        <InlineMath math="BP" />가 서로 수직이므로
                                        두 기울기의 곱은 <InlineMath math="-1" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac12
                        \cdot
                        \frac{2}{4-n}
                        =
                        -1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        \frac{1}{4-n}
                        =
                        -1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        4-n=-1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        n=5
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="B" />의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    B(5,3)
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        삼각형의 무게중심
                                    </p>

                                    <p className="leading-8">
                                        삼각형의 무게중심의 좌표는 세 꼭짓점의{" "}
                                        <InlineMath math="x" />좌표와{" "}
                                        <InlineMath math="y" />좌표의 평균입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (a,b)
                        =
                        \left(
                        \frac{0+5+4}{3},
                        \frac{3+3+5}{3}
                        \right)
                `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        (a,b)
                        =
                        \left(
                        3,
                        \frac{11}{3}
                        \right)
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a+b
                    =
                    3+\frac{11}{3}
                    =
                    \frac{9}{3}+\frac{11}{3}
                    =
                    \frac{20}{3}
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{\frac{20}{3}}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 직선이 서로 수직이므로 먼저 두 직선의 기울기를 구하여
                                        기울기의 곱이 <InlineMath math="-1" />임을 이용합니다.
                                        이 조건으로 점 <InlineMath math="B" />의 좌표를 결정한 뒤,
                                        세 꼭짓점의 좌표를 평균하여 삼각형의 무게중심을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{두 직선의 기울기}
                        \rightarrow
                        \text{수직 조건}
                        \rightarrow
                        n
                        \rightarrow
                        \text{세 꼭짓점}
                        \rightarrow
                        \text{무게중심}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 11
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 좌표평면에서
                                    점 <InlineMath math="A(-2,5)" />와
                                    직선 <InlineMath math="y=m(x-3)" /> 위의 서로 다른 두 점{" "}
                                    <InlineMath math="B,\ C" />가
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \overline{AB}=\overline{AC}
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 만족시킨다. 선분 <InlineMath math="BC" />의 중점이{" "}
                                    <InlineMath math="y" />축 위에 있을 때,
                                    양수 <InlineMath math="m" />의 값을 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.12_11.png"
                                    alt="점 A와 직선 위의 두 점 B, C가 이루는 이등변삼각형"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    선분 <InlineMath math="BC" />의 중점을{" "}
                                    <InlineMath math="M" />이라 하겠습니다.
                                </p>

                                <p className="leading-8">
                                    삼각형 <InlineMath math="ABC" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \overline{AB}=\overline{AC}
                `}
                                />

                                <p className="leading-8">
                                    이므로 삼각형 <InlineMath math="ABC" />는
                                    밑변이 <InlineMath math="\overline{BC}" />인
                                    이등변삼각형입니다.
                                </p>

                                <p className="leading-8">
                                    이등변삼각형에서 꼭짓점과 밑변의 중점을 이은 선분은
                                    밑변에 수직이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \overline{AM}\perp\overline{BC}
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중점 <InlineMath math="M" />의 좌표
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="M" />은{" "}
                                        <InlineMath math="y" />축 위에 있으므로{" "}
                                        <InlineMath math="x=0" />입니다.
                                    </p>

                                    <p className="leading-8">
                                        또한 점 <InlineMath math="M" />은 직선
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=m(x-3)
                    `}
                                    />

                                    <p className="leading-8">
                                        위에 있으므로 <InlineMath math="x=0" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=m(0-3)=-3m
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        M(0,-3m)
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        두 직선의 수직 조건
                                    </p>

                                    <p className="leading-8">
                                        직선 <InlineMath math="BC" />는
                                        직선 <InlineMath math="y=m(x-3)" /> 위에 있으므로
                                        기울기는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        m
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="A(-2,5)" />와{" "}
                                        <InlineMath math="M(0,-3m)" />을 지나는 직선{" "}
                                        <InlineMath math="AM" />의 기울기는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac{-3m-5}{0-(-2)}
                        =
                        \frac{-3m-5}{2}
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        두 직선이 서로 수직이므로
                                        두 기울기의 곱은 <InlineMath math="-1" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        m\cdot\frac{-3m-5}{2}=-1
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    양변에 <InlineMath math="2" />를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -3m^2-5m=-2
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    3m^2+5m-2=0
                `}
                                />

                                <p className="leading-8">
                                    인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (3m-1)(m+2)=0
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    m=\frac13
                    \quad\text{또는}\quad
                    m=-2
                `}
                                />

                                <p className="leading-8">
                                    그런데 <InlineMath math="m" />은 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    m=\frac13
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{\frac13}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 변의 길이가 같은 이등변삼각형에서
                                        꼭짓점과 밑변의 중점을 이은 직선은 밑변에 수직입니다.
                                        따라서 중점의 좌표를 먼저 구한 뒤,
                                        두 직선의 기울기의 곱이{" "}
                                        <InlineMath math="-1" />임을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \overline{AB}=\overline{AC}
                        \rightarrow
                        \text{이등변삼각형}
                        \rightarrow
                        \text{중점과 꼭짓점을 이은 직선은 수직}
                        \rightarrow
                        \text{기울기의 곱}=-1
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 12 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 12
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 마름모 <InlineMath math="ABCD" />에 대하여{" "}
                                    <InlineMath math="A(-1,6),\ C(n,0)" />이고,
                                    대각선 <InlineMath math="\overline{AC}" />의 길이가{" "}
                                    <InlineMath math="10" />이다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    두 점 <InlineMath math="B,\ D" />를 지나는 직선{" "}
                                    <InlineMath math="l" />의 방정식이{" "}
                                    <InlineMath math="ax-3y+b=0" />일 때,
                                    상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                    <InlineMath math="ab" />의 값을 구하시오.
                                    (단, <InlineMath math="n>0" />)
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.12_12.png"
                                    alt="마름모 ABCD의 두 대각선과 직선 l"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        점 <InlineMath math="C" />의 좌표 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 점 <InlineMath math="A(-1,6),\ C(n,0)" /> 사이의
                                        거리가 <InlineMath math="10" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \sqrt{\{n-(-1)\}^2+(0-6)^2}=10
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        (n+1)^2+36=100
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        (n+1)^2=64
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        n+1=\pm8
                    `}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="n>0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        n=7
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        C(7,0)
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        두 대각선의 교점 구하기
                                    </p>

                                    <p className="leading-8">
                                        마름모의 두 대각선은 서로를 이등분하므로,
                                        직선 <InlineMath math="l" />은 선분{" "}
                                        <InlineMath math="\overline{AC}" />의 중점을 지납니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \left(
                        \frac{-1+7}{2},
                        \frac{6+0}{2}
                        \right)
                        =
                        (3,3)
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        직선 <InlineMath math="l" />의 방정식 구하기
                                    </p>

                                    <p className="leading-8">
                                        대각선 <InlineMath math="\overline{AC}" />의 기울기는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac{0-6}{7-(-1)}
                        =
                        -\frac68
                        =
                        -\frac34
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        마름모의 두 대각선은 서로 수직이므로,
                                        직선 <InlineMath math="l" />의 기울기는 역수이면서
                                        부호가 반대인
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac43
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        기울기가 <InlineMath math="\dfrac43" />이고
                                        점 <InlineMath math="(3,3)" />을 지나므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y-3=\frac43(x-3)
                    `}
                                    />

                                    <p className="leading-8">
                                        양변에 <InlineMath math="3" />을 곱하여 정리하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3y-9=4x-12
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        4x-3y-3=0
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    주어진 직선의 방정식{" "}
                                    <InlineMath math="ax-3y+b=0" />과 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a=4,\qquad b=-3
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    ab=4\cdot(-3)=-12
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{-12}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        먼저 대각선 <InlineMath math="\overline{AC}" />의 길이를
                                        이용하여 점 <InlineMath math="C" />의 좌표를 구합니다.
                                        마름모의 두 대각선은 서로를 이등분하고 수직이므로,
                                        대각선의 중점과 수직인 기울기를 이용하여 직선{" "}
                                        <InlineMath math="l" />의 방정식을 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{대각선의 길이}
                        \rightarrow
                        C
                        \rightarrow
                        \text{대각선의 중점}
                        \rightarrow
                        \text{수직인 기울기}
                        \rightarrow
                        \text{직선의 방정식}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 13
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선 <InlineMath math="x+2y=10" /> 위의 점 중에서
                                원점에 가장 가까운 점의 좌표를{" "}
                                <InlineMath math="(a,b)" />라 할 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원점에서 직선까지의 가장 짧은 거리는
                                    직선에 수직인 선분입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 원점에 가장 가까운 점은
                                    원점을 지나고{" "}
                                    <InlineMath math="x+2y=10" />에
                                    수직인 직선과의 교점입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수직인 직선의 방정식
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x+2y=10" />의{" "}
                                        <InlineMath math="x,\ y" />의 계수는{" "}
                                        <InlineMath math="(1,2)" />입니다.
                                    </p>

                                    <p className="leading-8">
                                        수직인 직선은
                                        계수의 자리를 바꾸고
                                        하나의 부호를 바꾸므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        2x-y=0
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        두 직선의 교점
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \begin{cases}
                        x+2y=10\\
                        2x-y=0
                        \end{cases}
                    `}
                                    />

                                    <p className="leading-8">
                                        두 번째 식에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=2x
                    `}
                                    />

                                    <p className="leading-8">
                                        이를 첫 번째 식에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+4x=10
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        x=2
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        y=4
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 원점에 가장 가까운 점은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (a,b)=(2,4)
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a+b=2+4=6
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{6}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        직선 위에서 원점에 가장 가까운 점은
                                        원점에서 그 직선에 내린 수선의 발입니다.
                                        따라서 원점을 지나면서 주어진 직선에
                                        수직인 직선의 방정식을 먼저 만든 뒤,
                                        두 직선의 교점을 구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{수선의 발}
                        \rightarrow
                        \text{수직인 직선}
                        \rightarrow
                        \text{두 직선의 교점}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 14
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 점{" "}
                                    <InlineMath math="A(3,5)" />
                                    에서 직선{" "}
                                    <InlineMath math="x+2y-2=0" />
                                    에 내린 수선의 발을{" "}
                                    <InlineMath math="H" />
                                    라 할 때,
                                    선분{" "}
                                    <InlineMath math="OH" />
                                    의 길이를 구하시오.
                                    (단,{" "}
                                    <InlineMath math="O" />
                                    는 원점이다.)
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.12_14.png"
                                    alt="수선의 발 H"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    수선의 발{" "}
                                    <InlineMath math="H" />
                                    는 점{" "}
                                    <InlineMath math="A" />
                                    를 지나고
                                    직선{" "}
                                    <InlineMath math="x+2y-2=0" />
                                    에 수직인 직선과의 교점입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수직인 직선의 방정식
                                    </p>

                                    <p className="leading-8">
                                        직선{" "}
                                        <InlineMath math="x+2y-2=0" />
                                        의 계수는{" "}
                                        <InlineMath math="(1,2)" />
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        수직인 직선은
                                        계수의 자리를 바꾸고
                                        하나의 부호를 바꾸면 되므로
                                    </p>

                                    <BlockMath math="2x-y+n=0" />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        점{" "}
                                        <InlineMath math="A(3,5)" />
                                        를 지나므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        2\cdot3-5+n=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        n=-1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        2x-y-1=0
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        수선의 발의 좌표
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \begin{cases}
                        x+2y-2=0\\
                        2x-y-1=0
                        \end{cases}
                    `}
                                    />

                                    <p className="leading-8">
                                        두 번째 식에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=2x-1
                    `}
                                    />

                                    <p className="leading-8">
                                        이를 첫 번째 식에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+2(2x-1)=2
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        5x=4
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        x=\frac45
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        y=\frac35
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        H\left(\frac45,\frac35\right)
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    OH
                    =
                    \sqrt{
                    \left(\frac45\right)^2+
                    \left(\frac35\right)^2}
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    =
                    \sqrt{\frac{16+9}{25}}
                    =
                    1
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{1}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        수선의 발은
                                        점을 지나면서 주어진 직선에
                                        수직인 직선과의 교점입니다.
                                        따라서 먼저 수직인 직선을 만든 뒤,
                                        두 직선의 교점을 구하면
                                        수선의 발의 좌표를 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{수선의 발}
                        \rightarrow
                        \text{수직인 직선}
                        \rightarrow
                        \text{교점}
                        \rightarrow
                        OH
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 15 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 15
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                세 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                x-y+5=0,\qquad
                5x+3y-15=0,\qquad
                y=0
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 둘러싸인 삼각형의 수심의 좌표를{" "}
                                <InlineMath math="(a,b)" />라 할 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 세 직선의 교점을 구하여 삼각형의 꼭짓점을 정하겠습니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        삼각형의 세 꼭짓점
                                    </p>

                                    <p className="leading-8">
                                        직선 <InlineMath math="x-y+5=0" />과{" "}
                                        <InlineMath math="y=0" />의 교점은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+5=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        A(-5,0)
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        직선 <InlineMath math="5x+3y-15=0" />과{" "}
                                        <InlineMath math="y=0" />의 교점은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x-15=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        B(3,0)
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        나머지 두 직선을 연립하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \begin{cases}
                        x-y+5=0\\
                        5x+3y-15=0
                        \end{cases}
                    `}
                                    />

                                    <p className="leading-8">
                                        첫 번째 식에서 <InlineMath math="y=x+5" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x+3(x+5)-15=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        8x=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        C(0,5)
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        두 변이 수직인지 확인하기
                                    </p>

                                    <p className="leading-8">
                                        직선 <InlineMath math="AC" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x-y+5=0
                    `}
                                    />

                                    <p className="leading-8">
                                        이고, 직선 <InlineMath math="BC" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x+3y-15=0
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        두 직선의 기울기는 각각
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        1,\qquad -\frac53
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 서로 수직이 아닙니다. 따라서 세 꼭짓점을 이용하여
                                        각 꼭짓점에서 맞은편 변에 내린 높이의 방정식을 구합니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        꼭짓점 A에서 내린 높이
                                    </p>

                                    <p className="leading-8">
                                        변 <InlineMath math="BC" />의 방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        5x+3y-15=0
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다. 이에 수직인 직선은 계수의 자리를 바꾸고
                                        하나의 부호를 바꾸어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3x-5y=\square
                    `}
                                    />

                                    <p className="leading-8">
                                        로 둘 수 있습니다.
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="A(-5,0)" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3(-5)-5(0)=-15
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서 높이의 방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3x-5y=-15
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        꼭짓점 B에서 내린 높이
                                    </p>

                                    <p className="leading-8">
                                        변 <InlineMath math="AC" />의 방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x-y+5=0
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다. 이에 수직인 직선은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+y=\square
                    `}
                                    />

                                    <p className="leading-8">
                                        로 둘 수 있습니다.
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="B(3,0)" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3+0=3
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서 높이의 방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x+y=3
                    `}
                                    />

                                </div>

                                <p className="leading-8">
                                    수심은 두 높이의 교점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{cases}
                    3x-5y=-15\\
                    x+y=3
                    \end{cases}
                `}
                                />

                                <p className="leading-8">
                                    두 번째 식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    y=3-x
                `}
                                />

                                <p className="leading-8">
                                    이를 첫 번째 식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    3x-5(3-x)=-15
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    8x-15=-15
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    x=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    y=3
                `}
                                />

                                <p className="leading-8">
                                    따라서 수심의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (a,b)=(0,3)
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a+b=0+3=3
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{3}
                    `}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        삼각형의 수심은 각 꼭짓점에서 맞은편 변에 내린
                                        높이들의 교점입니다. 먼저 세 직선의 교점을 구하여
                                        삼각형의 꼭짓점을 정하고, 두 꼭짓점에서 맞은편 변에
                                        수직인 직선을 각각 만든 뒤 연립합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{세 꼭짓점}
                        \rightarrow
                        \text{두 높이의 방정식}
                        \rightarrow
                        \text{두 높이의 교점}
                        \rightarrow
                        \text{수심}
                    `}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>
                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-5 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-5">

                            {/* 기울기형 정리 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    1. 기울기형
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=mx+n,
                        \qquad
                        y=m'x+n'
                    `}
                                />

                                <div className="overflow-x-auto">

                                    <table className="w-full min-w-[680px] border-collapse text-left text-gray-300">

                                        <thead>

                                            <tr className="border-b border-white/15 text-white">

                                                <th className="px-4 py-3">
                                                    위치관계
                                                </th>

                                                <th className="px-4 py-3">
                                                    조건
                                                </th>

                                                <th className="px-4 py-3">
                                                    교점과 해
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-blue-300">
                                                    평행
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="m=m',\ n\ne n'" />
                                                </td>

                                                <td className="px-4 py-3">
                                                    교점 없음, 해 없음
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-purple-300">
                                                    일치
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="m=m',\ n=n'" />
                                                </td>

                                                <td className="px-4 py-3">
                                                    교점과 해가 무수히 많음
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-green-300">
                                                    한 점에서 만남
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="m\ne m'" />
                                                </td>

                                                <td className="px-4 py-3">
                                                    교점 한 개, 해 한 쌍
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="px-4 py-3 font-semibold text-rose-300">
                                                    수직
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="mm'=-1" />
                                                </td>

                                                <td className="px-4 py-3">
                                                    기울기는 역수이면서 반대 부호
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 일반형 정리 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    2. 일반형
                                </p>

                                <BlockMath
                                    math={String.raw`
                        ax+by+c=0,
                        \qquad
                        a'x+b'y+c'=0
                    `}
                                />

                                <div className="overflow-x-auto">

                                    <table className="w-full min-w-[720px] border-collapse text-left text-gray-300">

                                        <thead>

                                            <tr className="border-b border-white/15 text-white">

                                                <th className="px-4 py-3">
                                                    위치관계
                                                </th>

                                                <th className="px-4 py-3">
                                                    조건
                                                </th>

                                                <th className="px-4 py-3">
                                                    우리말 표현
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-blue-300">
                                                    평행
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath
                                                        math="\dfrac{a}{a'}=\dfrac{b}{b'}\ne\dfrac{c}{c'}"
                                                    />
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="x,\ y" /> 계수는 같은 비,
                                                    상수항은 다른 비
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-purple-300">
                                                    일치
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath
                                                        math="\dfrac{a}{a'}=\dfrac{b}{b'}=\dfrac{c}{c'}"
                                                    />
                                                </td>

                                                <td className="px-4 py-3">
                                                    모든 계수가 같은 비
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="px-4 py-3 font-semibold text-green-300">
                                                    한 점에서 만남
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath
                                                        math="\dfrac{a}{a'}\ne\dfrac{b}{b'}"
                                                    />
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="x,\ y" /> 계수의 비가 다름
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="px-4 py-3 font-semibold text-rose-300">
                                                    수직
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="aa'+bb'=0" />
                                                </td>

                                                <td className="px-4 py-3">
                                                    <InlineMath math="x" />계수의 곱
                                                    {" + "}
                                                    <InlineMath math="y" />계수의 곱
                                                    {" = "}
                                                    <InlineMath math="0" />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 직선 작성 요령 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    3. 평행하거나 수직인 직선 작성 요령
                                </p>

                                <div className="space-y-4 text-gray-300">

                                    <p className="leading-8">
                                        • 기울기형에서 평행한 직선:
                                        기울기를 그대로 사용합니다.
                                    </p>

                                    <p className="leading-8">
                                        • 기울기형에서 수직인 직선:
                                        기울기를 역수로 바꾸고 부호를 반대로 합니다.
                                    </p>

                                    <p className="leading-8">
                                        • 일반형에서 평행한 직선:
                                        <InlineMath math="x,\ y" />의 계수를 그대로 사용합니다.
                                    </p>

                                    <p className="leading-8">
                                        • 일반형에서 수직인 직선:
                                        <InlineMath math="x,\ y" />의 계수를 서로 바꾸고
                                        하나의 부호를 바꿉니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (a,b)
                        \xrightarrow{\text{평행}}
                        (a,b)
                        }
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (a,b)
                        \xrightarrow{\text{수직}}
                        (b,-a)
                        \text{ 또는 }
                        (-b,a)
                        }
                    `}
                                />

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 1.13 두 직선의 교점을 지나는 직선 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.13 두 직선의 교점을 지나는 직선
                </h2>

                <p className="leading-8 text-gray-300">
                    두 도형의 교점을 직접 구하지 않고도 그 교점을 지나는 새로운
                    도형의 방정식을 만들 수 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    이번 단원에서는 두 직선의 교점을 지나는 직선을 만드는 방법과,
                    식에 다른 문자가 포함된 직선이 항상 지나는 고정점을 찾는 방법을
                    알아봅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 두 직선의 교점을 지나는 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 두 직선의 교점을 지나는 직선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 직선
                        </p>

                        <BlockMath
                            math={String.raw`
                    L_1=ax+by+c=0
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    L_2=a'x+b'y+c'=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 한 점에서 만난다고 하겠습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 직선의 교점에서는{" "}
                            <InlineMath math="L_1" />과{" "}
                            <InlineMath math="L_2" />의 값이 모두{" "}
                            <InlineMath math="0" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    L_1=0,\qquad L_2=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 어떤 실수 <InlineMath math="k" />에 대해서도
                        </p>

                        <BlockMath
                            math={String.raw`
                    L_1+kL_2=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            즉, 두 직선의 교점을 지나는 직선은
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    ax+by+c
                    +
                    k(a'x+b'y+c')
                    =
                    0
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 형태로 나타낼 수 있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 식의 순서를 바꾸어
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    k(ax+by+c)
                    +
                    a'x+b'y+c'
                    =
                    0
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 나타내도 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                왜 교점을 지나는가?
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 직선의 교점에서는 두 식이 모두{" "}
                                <InlineMath math="0" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        L_1+kL_2
                        =
                        0+k\cdot0
                        =
                        0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. 따라서 <InlineMath math="k" />의 값이
                                달라져도 만들어진 직선은 항상 두 직선의 교점을 지납니다.
                            </p>

                        </div>

                    </div>

                    {/* 2. 원래의 완전한 형태 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 왜 문자 하나만 사용할까?
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 도형의 모든 공통점을 지나는 도형은 원래
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    pL_1+qL_2=0
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 나타내는 것이 가장 완전합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            단,
                            <InlineMath math="p,\ q" />가 동시에{" "}
                            <InlineMath math="0" />이면 식 전체가{" "}
                            <InlineMath math="0=0" />이 되므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    (p,q)\neq(0,0)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            그러나 <InlineMath math="p,\ q" />라는 문자가 두 개 생기면
                            계산이 복잡해집니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            그래서 한쪽 계수가 <InlineMath math="0" />이 아니라고 보고
                            그 계수로 식 전체를 나누어 문자 하나만 남깁니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                <InlineMath math="p\neq0" />인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="pL_1+qL_2=0" />의 양변을{" "}
                                <InlineMath math="p" />로 나누면
                            </p>

                            <BlockMath
                                math={String.raw`
                        L_1+\frac qpL_2=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.{" "}
                                <InlineMath math="k=\dfrac qp" />로 두면
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{L_1+kL_2=0}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                을 얻습니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                <InlineMath math="q\neq0" />인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="pL_1+qL_2=0" />의 양변을{" "}
                                <InlineMath math="q" />로 나누면
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac pqL_1+L_2=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="k=\dfrac pq" />로 두어
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{kL_1+L_2=0}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 나타낼 수 있습니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                한 문자 형태에서 빠지는 도형
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="L_1+kL_2=0" />에서는{" "}
                                <InlineMath math="k=0" />을 대입하여{" "}
                                <InlineMath math="L_1=0" />은 만들 수 있습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                그러나 유한한 실수 <InlineMath math="k" />를 대입하여{" "}
                                <InlineMath math="L_2=0" /> 자체를 만들 수는 없습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        L_1+kL_2=0
                        \text{에서는 }
                        L_2=0
                        \text{이 빠진다.}
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                반대로
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        kL_1+L_2=0
                        \text{에서는 }
                        L_1=0
                        \text{이 빠진다.}
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 구하려는 직선이 빠진 원래 직선일 가능성이 있다면
                                마지막에 별도로 확인해야 합니다.
                            </p>

                        </div>

                    </div>

                    {/* 3. 직선뿐 아니라 다른 도형에도 적용 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            3. 직선이 아닌 도형에도 사용할 수 있다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="L_1" />과{" "}
                            <InlineMath math="L_2" />는 반드시 직선의 식일 필요가 없습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 식
                        </p>

                        <BlockMath
                            math={String.raw`
                    L_1(x,y)=0,\qquad
                    L_2(x,y)=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 나타내는 두 도형의 공통점에서는
                        </p>

                        <BlockMath
                            math={String.raw`
                    L_1=0,\qquad L_2=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    pL_1+qL_2=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 나타내는 새로운 도형도 두 도형의 공통점을 모두 지납니다.
                        </p>

                        <div className="mt-5 grid gap-5 lg:grid-cols-3">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 직선
                                </p>

                                <p className="leading-8 text-gray-300">
                                    결과도 일반적으로 직선이 됩니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    직선과 원
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 도형의 교점을 지나는 이차식이 만들어집니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 원
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 원의 공통점을 지나는 원이나 직선을 만들 수 있습니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="mb-3 font-bold text-purple-300">
                                더 넓게 보기
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 원리는 직선, 이차함수, 원 등 도형의 종류와 관계없이
                                사용할 수 있습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                다만 <InlineMath math="pL_1+qL_2=0" />으로 만든 결과가
                                항상 직선이 되는 것은 아닙니다. 결과의 모양은
                                <InlineMath math="L_1,\ L_2" />의 식에 따라 달라집니다.
                            </p>

                        </div>

                    </div>

                    {/* 4. 점-기울기식과의 관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            4. 점-기울기식과의 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            앞에서 배운 기울기가 <InlineMath math="m" />이고
                            점 <InlineMath math="(\alpha,\beta)" />를 지나는 직선의
                            방정식은
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=m(x-\alpha)+\beta
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            이를 한쪽으로 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    y-\beta-m(x-\alpha)=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            여기서
                        </p>

                        <BlockMath
                            math={String.raw`
                    y-\beta=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            은 점 <InlineMath math="(\alpha,\beta)" />를 지나는 가로선이고,
                        </p>

                        <BlockMath
                            math={String.raw`
                    x-\alpha=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            은 점 <InlineMath math="(\alpha,\beta)" />를 지나는
                            세로선입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
                    (y-\beta)-m(x-\alpha)=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            은 두 직선
                        </p>

                        <BlockMath
                            math={String.raw`
                    y-\beta=0,\qquad
                    x-\alpha=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 교점 <InlineMath math="(\alpha,\beta)" />를 지나는
                            직선들의 모임으로 해석할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                점-기울기식에서 빠지는 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                식
                            </p>

                            <BlockMath
                                math={String.raw`
                        (y-\beta)-m(x-\alpha)=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                에서는 <InlineMath math="m" />이{" "}
                                <InlineMath math="x-\alpha" />에 곱해져 있습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 유한한 실수 <InlineMath math="m" />으로는
                                세로선
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{x=\alpha}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                를 만들 수 없습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                이것은 <InlineMath math="L_1+kL_2=0" />에서{" "}
                                <InlineMath math="k" />가 곱해진 도형{" "}
                                <InlineMath math="L_2=0" />을 만들 수 없는 것과
                                같은 원리입니다.
                            </p>

                        </div>

                    </div>

                    {/* 5. 변하는 부분이 있는 직선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            5. 변하는 부분이 있는 직선의 해석
                        </h3>

                        <p className="leading-8 text-gray-300">
                            식에 <InlineMath math="x,\ y" /> 이외의 다른 문자가
                            포함되어 있으면, 그 문자의 값에 따라 직선이 변합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=m(x-2)+3
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 <InlineMath math="m" />은 기울기입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="m" />의 값은 변하지만,
                            모든 직선은 항상
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{(2,3)}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 지납니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 이 식은
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{점 }(2,3)\text{을 고정하고 기울기 }m\text{을 변화시키는 직선}
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 해석할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                문제를 보는 방법
                            </p>

                            <p className="leading-8 text-gray-300">
                                변하는 문자가 있는 직선을 보면 먼저
                                직선이 항상 지나는 고정점을 찾습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                그다음 그 고정점을 중심으로 직선을 회전시키며
                                문제에서 요구하는 교점, 사분면, 기울기 등의 조건을
                                만족하도록 문자의 범위를 찾습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{고정점 찾기}
                        \rightarrow
                        \text{직선을 회전시켜 해석}
                        \rightarrow
                        \text{필요한 조건 찾기}
                    `}
                            />

                        </div>

                    </div>

                    {/* 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            6. 두 직선의 교점과 한 점을 지나는 직선
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        2x-y-1=0,
                        \qquad
                        x-y-3=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                의 교점과 점 <InlineMath math="(2,2)" />를 지나는
                                직선의 방정식을 구해봅시다.
                            </p>

                        </div>

                        <div className="mt-5 space-y-5">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 두 직선의 교점을 지나는 직선 만들기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 교점을 지나는 직선을
                                </p>

                                <BlockMath
                                    math={String.raw`
                            (2x-y-1)
                            +
                            k(x-y-3)
                            =
                            0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    으로 둡니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 단계에서는 식을 전개하거나 정리하지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 점 <InlineMath math="(2,2)" />를 바로 대입하기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    구하는 직선은 점 <InlineMath math="(2,2)" />를
                                    지나므로 <InlineMath math="x=2,\ y=2" />를
                                    바로 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            (2\cdot2-2-1)
                            +
                            k(2-2-3)
                            =
                            0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            1-3k=0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            k=\frac13
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 마지막에 한 번만 정리하기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    구한 <InlineMath math="k=\dfrac13" />을
                                    처음 만든 식에 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            (2x-y-1)
                            +
                            \frac13(x-y-3)
                            =
                            0
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    분수를 없애기 위해 양변에{" "}
                                    <InlineMath math="3" />을 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            3(2x-y-1)
                            +
                            (x-y-3)
                            =
                            0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            6x-3y-3+x-y-3=0
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \boxed{7x-4y-6=0}
                        `}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                실전 풀이 순서
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{교점을 지나는 식 만들기}
                        \rightarrow
                        \text{주어진 점 바로 대입}
                        \rightarrow
                        k\text{ 구하기}
                        \rightarrow
                        \text{마지막에 정리}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                처음부터 식을 전개하지 않으면 계산이 짧아지고
                                부호 실수도 줄일 수 있습니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 예시 2 */}
                <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                    <h3 className="mb-5 text-2xl font-bold">
                        7. 다른 문자가 포함된 직선이 항상 지나는 점
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-4 font-bold text-white">
                            예시
                        </p>

                        <p className="leading-8 text-gray-300">
                            직선
                        </p>

                        <BlockMath
                            math={String.raw`
                        (2k-1)x-(k-1)y-3=0
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            은 실수 <InlineMath math="k" />의 값에 관계없이 항상
                            점 <InlineMath math="P" />를 지납니다.
                            점 <InlineMath math="P" />의 좌표를 구해봅시다.
                        </p>

                    </div>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ① <InlineMath math="k" />가 있는 부분과 없는 부분으로 정리하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                주어진 식을 전개하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            2kx-x-ky+y-3=0
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="k" />가 포함된 항끼리 묶으면
                            </p>

                            <BlockMath
                                math={String.raw`
                            k(2x-y)+(-x+y-3)=0
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 정리할 수 있습니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ② 두 부분을 각각 <InlineMath math="0" />으로 두기
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="P" />에서는
                                이 식이 모든 실수 <InlineMath math="k" />에 대하여
                                항상 성립해야 합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="k" />에 곱해진 부분과
                                그렇지 않은 부분이 각각 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                            \begin{cases}
                            2x-y=0\\
                            -x+y-3=0
                            \end{cases}
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                즉, 점 <InlineMath math="P" />는 두 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                            2x-y=0,
                            \qquad
                            -x+y-3=0
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                의 교점입니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ③ 연립방정식 풀기
                            </p>

                            <p className="leading-8 text-gray-300">
                                첫 번째 식에서
                            </p>

                            <BlockMath
                                math={String.raw`
                            y=2x
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 이를 두 번째 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            -x+2x-3=0
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            x=3
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                            y=2\cdot3=6
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 항상 지나는 점은
                            </p>

                            <BlockMath
                                math={String.raw`
                            \boxed{P(3,6)}
                        `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="mb-3 font-bold text-blue-300">
                            사고의 흐름
                        </p>

                        <BlockMath
                            math={String.raw`
                        \text{문자가 있는 부분과 없는 부분으로}
                        \rightarrow
                        \text{각 부분을 \(0\)으로 둠}
                        \rightarrow
                        \text{두 식을 연립}
                        \rightarrow
                        \text{고정점}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            식{" "}
                            <InlineMath math="kL_1+L_2=0" />이
                            모든 <InlineMath math="k" />에 대하여 성립하는 점에서는
                            반드시{" "}
                            <InlineMath math="L_1=0,\ L_2=0" />이어야 합니다.
                        </p>

                    </div>

                </div>

                {/* 예시 3 */}
                <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                    <h3 className="mb-5 text-2xl font-bold">
                        8. 고정점을 중심으로 회전하는 직선
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-4 font-bold text-white">
                            예시
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 직선
                        </p>

                        <BlockMath
                            math={String.raw`
                        x+y-2=0,
                        \qquad
                        mx-y+m+1=0
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 제1사분면에서 만나도록 하는
                            실수 <InlineMath math="m" />의 값의 범위를 구해봅시다.
                        </p>

                    </div>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ① 움직이는 직선의 고정점 찾기
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 번째 직선을{" "}
                                <InlineMath math="m" />이 포함된 부분과
                                그렇지 않은 부분으로 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            mx-y+m+1=0
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            m(x+1)-(y-1)=0
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 직선이 <InlineMath math="m" />의 값에 관계없이
                                항상 지나는 점에서는
                            </p>

                            <BlockMath
                                math={String.raw`
                            \begin{cases}
                            x+1=0\\
                            y-1=0
                            \end{cases}
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이어야 하므로 고정점은
                            </p>

                            <BlockMath
                                math={String.raw`
                            \boxed{(-1,1)}
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
                            y=m(x+1)+1
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 <InlineMath math="m" />은
                                이 직선의 기울기입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 두 번째 직선은 점{" "}
                                <InlineMath math="(-1,1)" />을 고정하고
                                기울기 <InlineMath math="m" />을 변화시키며 회전합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ② 첫 번째 직선의 제1사분면 부분 찾기
                            </p>

                            <p className="leading-8 text-gray-300">
                                첫 번째 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                            x+y-2=0
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            y=-x+2
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 직선의 두 절편은
                            </p>

                            <BlockMath
                                math={String.raw`
                            (0,2),
                            \qquad
                            (2,0)
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 두 직선이 제1사분면에서 만나려면,
                                움직이는 직선이 첫 번째 직선의
                                두 절편 사이의 부분과 만나야 합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ③ 두 경계 직선의 기울기 구하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                고정점 <InlineMath math="(-1,1)" />과{" "}
                                <InlineMath math="y" />절편{" "}
                                <InlineMath math="(0,2)" />를 지나는 직선의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                            \frac{2-1}{0-(-1)}
                            =
                            1
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                고정점 <InlineMath math="(-1,1)" />과{" "}
                                <InlineMath math="x" />절편{" "}
                                <InlineMath math="(2,0)" />을 지나는 직선의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                            \frac{0-1}{2-(-1)}
                            =
                            -\frac13
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                교점이 제1사분면의 내부에 있으려면
                                움직이는 직선의 기울기는 이 두 값 사이여야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                            -\frac13<m<1
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                두 끝값에서는 교점이 좌표축 위에 있으므로
                                제1사분면에 포함되지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                            \boxed{-\frac13<m<1}
                        `}
                            />

                        </div>

                    </div>

                    <RotatingLineIntersectionDemo />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="mb-3 font-bold text-blue-300">
                            사고의 흐름
                        </p>

                        <BlockMath
                            math={String.raw`
                        \text{움직이는 직선의 고정점}
                        \rightarrow
                        \text{양 끝을 지나는 경계 기울기}
                        \rightarrow
                        \text{기울기의 범위}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            두 식을 바로 연립하여 교점을 계산할 수도 있지만,
                            고정점을 중심으로 직선이 회전한다고 해석하면
                            기울기의 범위를 그림으로 빠르게 판단할 수 있습니다.
                        </p>

                    </div>

                </div>
                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 직선{" "}
                            <InlineMath math="3x+y+1=0" />,{" "}
                            <InlineMath math="x+y-3=0" />
                            의 교점과
                            점 <InlineMath math="(1,-1)" />을
                            지나는 직선 <InlineMath math="l" />에 대하여,
                            직선 <InlineMath math="l" />과{" "}
                            <InlineMath math="x" />축,{" "}
                            <InlineMath math="y" />축으로 둘러싸인 부분의
                            넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 1. 두 직선의 교점을 직접 구하는 방법
                                </p>

                                <p className="leading-8">
                                    먼저 두 직선의 교점을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        3x+y+1=0\\
                        x+y-3=0
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    두 식을 빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2x+4=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=-2
                    `}
                                />

                                <p className="leading-8">
                                    이를 <InlineMath math="x+y-3=0" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -2+y-3=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=5
                    `}
                                />

                                <p className="leading-8">
                                    따라서 두 직선의 교점은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (-2,5)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 두 점{" "}
                                    <InlineMath math="(-2,5)" />,{" "}
                                    <InlineMath math="(1,-1)" />
                                    을 지나는 직선의 기울기를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{-1-5}{1-(-2)}
                        =
                        -2
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y+1=-2(x-1)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{2x+y-1=0}
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 2. 교점을 지나는 직선의 방정식을 이용하는 방법
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선{" "}
                                    <InlineMath math="3x+y+1=0" />,{" "}
                                    <InlineMath math="x+y-3=0" />
                                    의 교점을 지나는 직선은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (3x+y+1)
                        +
                        k(x+y-3)
                        =
                        0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    으로 나타낼 수 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 직선이 점 <InlineMath math="(1,-1)" />을
                                    지나므로 식을 먼저 정리하지 않고 바로{" "}
                                    <InlineMath math="x=1,\ y=-1" />을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \{3(1)+(-1)+1\}
                        +
                        k\{1+(-1)-3\}
                        =
                        0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3-3k=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막에 <InlineMath math="k=1" />을
                                    원래 식에 대입하여 한 번만 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (3x+y+1)+(x+y-3)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        4x+2y-2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{2x+y-1=0}
                    `}
                                />

                            </div>

                            {/* 넓이 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 좌표축과 둘러싸인 부분의 넓이
                                </p>

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="2x+y-1=0" />의{" "}
                                    <InlineMath math="x" />절편은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(\frac12,0\right)
                    `}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="y" />절편은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (0,1)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 직선과 두 좌표축으로 둘러싸인 부분은
                                    밑변의 길이가 <InlineMath math="\dfrac12" />,
                                    높이가 <InlineMath math="1" />인 직각삼각형이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{넓이}
                        =
                        \frac12
                        \times
                        \frac12
                        \times
                        1
                        =
                        \frac14
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac14}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 교점을 직접 구한 뒤 주어진 점과 연결하여
                                    직선의 방정식을 구할 수도 있습니다.
                                    그러나 두 직선의 교점을 지나는 직선이라는 조건이 주어지면
                                    교점을 직접 구하지 않고
                                </p>

                                <BlockMath
                                    math={String.raw`
                        L_1+kL_2=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 이용하여 바로 직선의 방정식을 만들 수 있습니다.
                                    이때 식을 먼저 전개하지 않고 주어진 점을 대입하여{" "}
                                    <InlineMath math="k" />를 구한 뒤
                                    마지막에 한 번만 정리하는 것이 편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{두 직선의 교점}
                        \rightarrow
                        L_1+kL_2=0
                        \rightarrow
                        \text{점 대입}
                        \rightarrow
                        k
                        \rightarrow
                        \text{마지막에 한 번 정리}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 직선{" "}
                            <InlineMath math="2x-3y+4=0" />,{" "}
                            <InlineMath math="3x+y-5=0" />
                            의 교점을 지나고 직선{" "}
                            <InlineMath math="6x+3y+1=0" />
                            에 평행한 직선의 방정식이{" "}
                            <InlineMath math="ax+y+b=0" />
                            일 때, 상수{" "}
                            <InlineMath math="a,\ b" />
                            에 대하여{" "}
                            <InlineMath math="a+b" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 직선의 교점을 지나는 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (2x-3y+4)
                    +
                    k(3x+y-5)
                    =
                    0
                `}
                            />

                            <p className="leading-8">
                                으로 나타낼 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    평행 조건으로 <InlineMath math="k" /> 구하기
                                </p>

                                <p className="leading-8">
                                    위 직선의 <InlineMath math="x,\ y" />의 계수는 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2+3k,
                        \qquad
                        -3+k
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="6x+3y+1=0" />에
                                    평행하므로 <InlineMath math="x,\ y" /> 계수의 비가 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (2+3k):(-3+k)
                        =
                        6:3
                        =
                        2:1
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2+3k
                        =
                        2(-3+k)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2+3k=-6+2k
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=-8
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                이제 <InlineMath math="k=-8" />을 처음 식에 대입한 뒤
                                마지막에 한 번만 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (2x-3y+4)
                    -8(3x+y-5)
                    =
                    0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    -22x-11y+44=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    2x+y-4=0
                `}
                            />

                            <p className="leading-8">
                                주어진 직선의 방정식{" "}
                                <InlineMath math="ax+y+b=0" />
                                과 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=2,
                    \qquad
                    b=-4
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b
                    =
                    2+(-4)
                    =
                    -2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 교점을 직접 구하지 않고{" "}
                                    <InlineMath math="L_1+kL_2=0" />으로
                                    교점을 지나는 직선을 먼저 만듭니다.
                                    평행 조건으로 <InlineMath math="k" />를 구한 뒤,
                                    마지막에 한 번만 식을 정리하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{교점을 지나는 직선}
                        \rightarrow
                        \text{평행 조건}
                        \rightarrow
                        k
                        \rightarrow
                        \text{마지막에 한 번 정리}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 3 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="3x-3y-8=0" />과 수직이고,
                            두 직선{" "}
                            <InlineMath math="x-2y+1=0" />,{" "}
                            <InlineMath math="2x-y+1=0" />
                            의 교점을 지나는 직선의 방정식을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 직선의 교점을 지나는 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x-2y+1)
                    +
                    k(2x-y+1)
                    =
                    0
                `}
                            />

                            <p className="leading-8">
                                으로 나타낼 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    수직 조건으로 <InlineMath math="k" /> 구하기
                                </p>

                                <p className="leading-8">
                                    위 직선의 <InlineMath math="x,\ y" />의 계수는 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+2k,
                        \qquad
                        -2-k
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="3x-3y-8=0" />과
                                    수직이므로
                                    <InlineMath math="x" />계수의 곱과{" "}
                                    <InlineMath math="y" />계수의 곱의 합이{" "}
                                    <InlineMath math="0" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3(1+2k)
                        +
                        (-3)(-2-k)
                        =
                        0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3+6k+6+3k=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        9+9k=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=-1
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                <InlineMath math="k=-1" />을 처음 식에 대입하고
                                마지막에 한 번만 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x-2y+1)
                    -
                    (2x-y+1)
                    =
                    0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    -x-y=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x+y=0
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{x+y=0}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 직선의 교점을 직접 구하지 않고{" "}
                                    <InlineMath math="L_1+kL_2=0" />으로
                                    교점을 지나는 직선을 만듭니다.
                                    두 직선이 이미 주어져 있으므로 수직 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
                        aa'+bb'=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 이용하여 <InlineMath math="k" />를 구한 뒤,
                                    마지막에 한 번만 식을 정리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{교점을 지나는 직선}
                        \rightarrow
                        \text{수직 조건}
                        \rightarrow
                        k
                        \rightarrow
                        \text{마지막에 한 번 정리}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 직선{" "}
                            <InlineMath math="l:x-ky+2=0" />,{" "}
                            <InlineMath math="m:(k-1)x-2y+k=0" />에 대하여
                            다음 보기 중 옳은 것만을 있는 대로 고른 것은?
                            (단, <InlineMath math="k" />는 실수이다.)
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                ㄱ. 직선 <InlineMath math="m" />은{" "}
                                <InlineMath math="k" />의 값에 관계없이 항상
                                점 <InlineMath math="\left(1,\dfrac12\right)" />을 지난다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄴ. <InlineMath math="k=-1" />일 때,
                                두 직선 <InlineMath math="l" />과{" "}
                                <InlineMath math="m" />은 서로 평행하다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄷ. <InlineMath math="k=\dfrac13" />일 때,
                                두 직선 <InlineMath math="l" />과{" "}
                                <InlineMath math="m" />은 서로 수직이다.
                            </p>

                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ② ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ③ ㄱ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ⑤ ㄱ, ㄴ, ㄷ
                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄱ. 직선 <InlineMath math="m" />이 항상 지나는 점
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="m" />의 방정식을{" "}
                                    <InlineMath math="k" />가 포함된 부분과
                                    포함되지 않은 부분으로 나누어 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (k-1)x-2y+k=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k(x+1)-x-2y=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k" />의 값에 관계없이 항상 지나는 점에서는{" "}
                                    <InlineMath math="k" />가 곱해진 부분과 그렇지 않은 부분이
                                    각각 <InlineMath math="0" />이 되어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x+1=0\\
                        -x-2y=0
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    이를 풀면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=-1,\qquad y=\frac12
                    `}
                                />

                                <p className="leading-8">
                                    따라서 직선 <InlineMath math="m" />이 항상 지나는 점은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(-1,\frac12\right)
                    `}
                                />

                                <p className="leading-8">
                                    이므로 ㄱ은 <strong className="text-rose-300">거짓</strong>입니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄴ. <InlineMath math="k=-1" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=-1" />을 두 직선에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        l:x+y+2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        m:-2x-2y-1=0
                    `}
                                />

                                <p className="leading-8">
                                    두 직선의 <InlineMath math="x,\ y" /> 계수의 비는 같고
                                    상수항의 비는 다릅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{1}{-2}
                        =
                        \frac{1}{-2}
                        \ne
                        \frac{2}{-1}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 두 직선은 서로 평행하므로
                                    ㄴ은 <strong className="text-green-300">참</strong>입니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄷ. <InlineMath math="k=\dfrac13" />일 때
                                </p>

                                <p className="leading-8">
                                    두 직선의 <InlineMath math="x,\ y" /> 계수는 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
                        l:(1,-k),
                        \qquad
                        m:(k-1,-2)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    수직 조건인{" "}
                                    <InlineMath math="x" />계수의 곱
                                    {" + "}
                                    <InlineMath math="y" />계수의 곱
                                    {" = "}
                                    <InlineMath math="0" />을 확인하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\cdot(k-1)+(-k)(-2)
                        =
                        3k-1
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="k=\dfrac13" />일 때
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\cdot\frac13-1=0
                    `}
                                />

                                <p className="leading-8">
                                    이므로 두 직선은 서로 수직입니다.
                                    따라서 ㄷ은 <strong className="text-green-300">참</strong>입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 옳은 것은 ㄴ, ㄷ입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {④}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    문자가 포함된 직선이 항상 지나는 점을 구할 때에는
                                    그 문자가 포함된 부분과 포함되지 않은 부분을 나누어
                                    각각 <InlineMath math="0" />으로 둡니다.
                                    평행과 수직은 두 직선의 계수를 직접 비교하면 빠르게
                                    판단할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{항상 지나는 점}
                        \rightarrow
                        \text{문자가 있는 부분과 없는 부분}
                        \qquad
                        \text{평행·수직}
                        \rightarrow
                        \text{계수 비교}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선{" "}
                            <InlineMath math="(k-1)x+(2k+1)y+k-5=0" />이
                            실수 <InlineMath math="k" />의 값에 관계없이 항상
                            점 <InlineMath math="P" />를 지날 때,
                            기울기가 <InlineMath math="-2" />이고
                            점 <InlineMath math="P" />를 지나는 직선의 방정식이{" "}
                            <InlineMath math="ax+y+b=0" />이다.
                            이때 상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    항상 지나는 점 <InlineMath math="P" /> 구하기
                                </p>

                                <p className="leading-8">
                                    주어진 직선의 방정식을{" "}
                                    <InlineMath math="k" />가 포함된 부분과
                                    포함되지 않은 부분으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (k-1)x+(2k+1)y+k-5=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k(x+2y+1)+(-x+y-5)=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 직선이 <InlineMath math="k" />의 값에 관계없이
                                    항상 같은 점을 지나려면{" "}
                                    <InlineMath math="k" />가 곱해진 부분과
                                    그렇지 않은 부분이 각각 <InlineMath math="0" />이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x+2y+1=0\\
                        -x+y-5=0
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    두 번째 식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=x+5
                    `}
                                />

                                <p className="leading-8">
                                    이를 첫 번째 식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+2(x+5)+1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3x+11=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=-\frac{11}{3}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=-\frac{11}{3}+5
                        =
                        \frac43
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P\left(-\frac{11}{3},\frac43\right)
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    점 <InlineMath math="P" />를 지나는 직선 구하기
                                </p>

                                <p className="leading-8">
                                    기울기가 <InlineMath math="-2" />이고
                                    점{" "}
                                    <InlineMath math="P\left(-\dfrac{11}{3},\dfrac43\right)" />
                                    을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y-\frac43
                        =
                        -2\left(
                        x+\frac{11}{3}
                        \right)
                    `}
                                />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=-2x-6
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2x+y+6=0
                    `}
                                />

                                <p className="leading-8">
                                    이를 주어진 방정식{" "}
                                    <InlineMath math="ax+y+b=0" />과 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=2,
                        \qquad
                        b=6
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=2+6=8
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{8}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x,\ y" /> 이외의 문자가 포함된 직선이
                                    그 문자의 값에 관계없이 항상 같은 점을 지날 때에는,
                                    문자가 포함된 부분과 포함되지 않은 부분으로 나누어
                                    각각 <InlineMath math="0" />으로 두고 연립합니다.
                                    항상 지나는 점을 구한 뒤에는
                                    주어진 기울기를 이용하여 직선의 방정식을 만들면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{문자가 있는 부분과 없는 부분}
                        \rightarrow
                        \text{연립}
                        \rightarrow
                        P
                        \rightarrow
                        \text{기울기와 한 점}
                        \rightarrow
                        \text{직선의 방정식}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 6 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="x+2y=1" /> 위의 모든 점{" "}
                            <InlineMath math="(a,b)" />에 대하여
                            직선 <InlineMath math="ax+by=3" />이
                            항상 지나는 점의 좌표를 <InlineMath math="(p,q)" />라 할 때,{" "}
                            <InlineMath math="p+q" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(a,b)" />가
                                직선 <InlineMath math="x+2y=1" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+2b=1
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=1-2b
                `}
                            />

                            <p className="leading-8">
                                로 나타낼 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    항상 지나는 점 구하기
                                </p>

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="ax+by=3" />에{" "}
                                    <InlineMath math="a=1-2b" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1-2b)x+by=3
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="b" />가 포함된 부분과
                                    포함되지 않은 부분으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+b(-2x+y)=3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        b(-2x+y)+(x-3)=0
                    `}
                                />

                                <p className="leading-8">
                                    이 직선이 <InlineMath math="b" />의 값에 관계없이
                                    항상 같은 점을 지나려면{" "}
                                    <InlineMath math="b" />가 곱해진 부분과
                                    그렇지 않은 부분이 각각 <InlineMath math="0" />이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        -2x+y=0\\
                        x-3=0
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=3,\qquad y=6
                    `}
                                />

                                <p className="leading-8">
                                    이므로 항상 지나는 점은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (p,q)=(3,6)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p+q=3+6=9
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{9}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="a,\ b" /> 사이에 관계식이 있으므로
                                    한 문자를 다른 문자로 나타내어
                                    직선의 방정식에 대입합니다.
                                    그다음 남은 문자가 포함된 부분과
                                    포함되지 않은 부분으로 나누어 각각{" "}
                                    <InlineMath math="0" />으로 두면
                                    항상 지나는 점을 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a+2b=1
                        \rightarrow
                        a=1-2b
                        \rightarrow
                        \text{한 문자로 정리}
                        \rightarrow
                        \text{항상 지나는 점}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 7 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="mx-y-3m+1=0" />이
                            세 점{" "}
                            <InlineMath math="A(-5,0),\ B(1,-5),\ C(0,4)" />를
                            꼭짓점으로 하는 삼각형 <InlineMath math="ABC" />와
                            만나도록 하는 실수 <InlineMath math="m" />의 값의 범위가{" "}
                            <InlineMath math="a\le m\le b" />일 때,
                            실수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="ab" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    움직이는 직선의 정점 찾기
                                </p>

                                <p className="leading-8">
                                    주어진 직선의 방정식을 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        mx-y-3m+1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=m(x-3)+1
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 이 직선은 <InlineMath math="m" />의 값에 관계없이
                                    항상 점
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P(3,1)
                    `}
                                />

                                <p className="leading-8">
                                    을 지나며, 점 <InlineMath math="P" />를 중심으로
                                    기울기 <InlineMath math="m" />이 변하면서 회전합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    삼각형과 만나는 경계 직선
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P(3,1)" />를 중심으로 직선을 회전시키면,
                                    삼각형 <InlineMath math="ABC" />와 만나는 범위의
                                    양쪽 경계는 점 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />를 지나는 직선입니다.
                                </p>

                                <p className="leading-8">
                                    먼저 점 <InlineMath math="P(3,1)" />와{" "}
                                    <InlineMath math="C(0,4)" />를 지나는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{4-1}{0-3}
                        =
                        \frac{3}{-3}
                        =
                        -1
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 점 <InlineMath math="P(3,1)" />와{" "}
                                    <InlineMath math="B(1,-5)" />를 지나는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{-5-1}{1-3}
                        =
                        \frac{-6}{-2}
                        =
                        3
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 직선이 삼각형 <InlineMath math="ABC" />와 만나기 위한
                                기울기 <InlineMath math="m" />의 범위는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -1\le m\le3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-1,
                    \qquad
                    b=3
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    ab=(-1)\cdot3=-3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-3}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="y=m(x-3)+1" />과 같이
                                    기울기만 변하는 직선은
                                    점 <InlineMath math="(3,1)" />을 고정하고 회전합니다.
                                    따라서 삼각형과 만나는 기울기의 범위는
                                    고정점에서 삼각형을 바라보았을 때의
                                    양쪽 경계 직선의 기울기를 구하여 결정할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{고정점}
                        \rightarrow
                        \text{직선의 회전}
                        \rightarrow
                        \text{양쪽 경계}
                        \rightarrow
                        \text{기울기의 범위}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 8 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="y=mx+2" />가
                            두 점 <InlineMath math="A(5,1),\ B(2,3)" />을
                            이은 선분 <InlineMath math="AB" />와 만나도록 하는
                            실수 <InlineMath math="m" />의 값의 범위를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    움직이는 직선의 고정점
                                </p>

                                <p className="leading-8">
                                    직선
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=mx+2
                    `}
                                />

                                <p className="leading-8">
                                    는 항상 점
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P(0,2)
                    `}
                                />

                                <p className="leading-8">
                                    을 지나며,
                                    기울기 <InlineMath math="m" />이 변하면서
                                    점 <InlineMath math="P" />를 중심으로 회전합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    선분과 만나는 경계
                                </p>

                                <p className="leading-8">
                                    직선이 선분 <InlineMath math="AB" />와 만나는
                                    양쪽 경계는
                                    점 <InlineMath math="P" />와
                                    두 끝점 <InlineMath math="A,\ B" />를
                                    잇는 직선입니다.
                                </p>

                                <p className="leading-8">
                                    먼저{" "}
                                    <InlineMath math="PA" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{1-2}{5-0}
                        =
                        -\frac15
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로{" "}
                                    <InlineMath math="PB" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{3-2}{2-0}
                        =
                        \frac12
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 직선이 선분{" "}
                                <InlineMath math="AB" />
                                와 만나기 위한
                                기울기의 범위는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -\frac15
                    \le
                    m
                    \le
                    \frac12
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        -\frac15
                        \le
                        m
                        \le
                        \frac12
                        }
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선{" "}
                                    <InlineMath math="y=mx+n" />
                                    은{" "}
                                    <InlineMath math="(0,n)" />
                                    을 중심으로 회전합니다.
                                    따라서 선분과 만나는 기울기의 범위는
                                    고정점에서 선분의 양 끝점을 이은
                                    두 직선의 기울기 사이가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{고정점}
                        \rightarrow
                        \text{회전}
                        \rightarrow
                        \text{양 끝점}
                        \rightarrow
                        \text{기울기의 범위}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 9 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선{" "}
                            <InlineMath math="(1-k)x+(k-2)y+2=0" />
                            에 대하여 다음 보기 중 옳은 것만을 모두 고른 것은?
                            (단, <InlineMath math="k" />는 실수이다.)
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                ㄱ. 이 직선은 <InlineMath math="k" />에 관계없이
                                점 <InlineMath math="(2,2)" />를 지난다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄴ. 기울기가 <InlineMath math="1" />인 직선이 되는
                                실수 <InlineMath math="k" />가 존재한다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄷ. <InlineMath math="k=3" />일 때,{" "}
                                <InlineMath math="x" />축과 <InlineMath math="y" />축으로
                                둘러싸인 부분의 넓이가 <InlineMath math="1" />이다.
                            </p>

                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ② ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ③ ㄱ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ⑤ ㄱ, ㄴ, ㄷ
                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄱ. 항상 지나는 점
                                </p>

                                <p className="leading-8">
                                    주어진 직선을 <InlineMath math="k" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-2y+2+k(-x+y)=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k" />의 값에 관계없이 항상 지나는 점에서는{" "}
                                    <InlineMath math="k" />가 없는 부분과{" "}
                                    <InlineMath math="k" />가 곱해진 부분이 각각{" "}
                                    <InlineMath math="0" />이 되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x-2y+2=0\\
                        -x+y=0
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    두 번째 식에서 <InlineMath math="y=x" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-2x+2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=2,\qquad y=2
                    `}
                                />

                                <p className="leading-8">
                                    따라서 이 직선은 <InlineMath math="k" />의 값에 관계없이
                                    항상 점 <InlineMath math="(2,2)" />를 지나므로
                                    ㄱ은 <strong className="text-green-300">참</strong>입니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄴ. 기울기가 <InlineMath math="1" />인 직선을 만들 수 있는가?
                                </p>

                                <p className="leading-8">
                                    다시
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-2y+2+k(-x+y)=0
                    `}
                                />

                                <p className="leading-8">
                                    을 봅니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k" />가 곱해진 부분
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -x+y=0
                    `}
                                />

                                <p className="leading-8">
                                    은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=x
                    `}
                                />

                                <p className="leading-8">
                                    이므로 기울기가 <InlineMath math="1" />인 직선입니다.
                                </p>

                                <p className="leading-8">
                                    하지만{" "}
                                    <InlineMath math="L_1+kL_2=0" />의 형태에서는{" "}
                                    <InlineMath math="k" />가 곱해진{" "}
                                    <InlineMath math="L_2=0" /> 자체는 만들 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 기울기가 <InlineMath math="1" />인 직선이 되는
                                    실수 <InlineMath math="k" />는 존재하지 않으므로
                                    ㄴ은 <strong className="text-rose-300">거짓</strong>입니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄷ. <InlineMath math="k=3" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=3" />을 주어진 직선에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1-3)x+(3-2)y+2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -2x+y+2=0
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />절편은{" "}
                                    <InlineMath math="y=0" />을 대입하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -2x+2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=1
                    `}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="y" />절편은{" "}
                                    <InlineMath math="x=0" />을 대입하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y+2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=-2
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 두 좌표축과 이루는 삼각형의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac12
                        \times
                        1
                        \times
                        2
                        =
                        1
                    `}
                                />

                                <p className="leading-8">
                                    이므로 ㄷ은 <strong className="text-green-300">참</strong>입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 옳은 것은 ㄱ, ㄷ입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {③}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선을 <InlineMath math="k" />에 대하여 정리하면
                                    항상 지나는 점뿐만 아니라
                                    <strong>
                                        {" "}만들 수 없는 직선
                                    </strong>
                                    도 바로 확인할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-2y+2+k(-x+y)=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    여기서 두 식{" "}
                                    <InlineMath math="x-2y+2=0" />과{" "}
                                    <InlineMath math="-x+y=0" />의 교점이
                                    항상 지나는 점이고,{" "}
                                    <InlineMath math="k" />가 곱해진{" "}
                                    <InlineMath math="-x+y=0" />은 이 형태로는
                                    만들 수 없는 직선입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{항상 지나는 점}
                        \quad+\quad
                        \text{만들 수 없는 직선}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                1. 두 직선의 교점을 지나는 직선
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        L_1+kL_2=0
                        \quad\text{또는}\quad
                        kL_1+L_2=0
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                두 직선의 교점에서는{" "}
                                <InlineMath math="L_1=L_2=0" />이므로
                                어떤 <InlineMath math="k" />에 대해서도 위 식을 만족합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                2. 모든 경우를 포함하는 완전한 형태
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        pL_1+qL_2=0,
                        \qquad
                        (p,q)\neq(0,0)
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                실제 계산에서는 문자를 하나 줄이기 위해
                                한쪽 계수를 <InlineMath math="1" />로 둔 형태를 사용합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                3. 한 문자 형태에서 빠지는 도형
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        L_1+kL_2=0
                        &\;:\;
                        L_2=0\text{을 만들 수 없음}\\[4pt]
                        kL_1+L_2=0
                        &\;:\;
                        L_1=0\text{을 만들 수 없음}
                        \end{aligned}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                구하려는 도형이 빠진 원래 도형인지 마지막에 확인합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                4. 점-기울기식의 해석
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=m(x-\alpha)+\beta
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        (y-\beta)-m(x-\alpha)=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(\alpha,\beta)" />를 고정하고
                                기울기 <InlineMath math="m" />을 변화시키는 직선입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                단, 유한한 <InlineMath math="m" />으로는 세로선{" "}
                                <InlineMath math="x=\alpha" />를 만들 수 없습니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                5. 다른 문자가 포함된 직선의 고정점
                            </p>

                            <p className="leading-8 text-gray-300">
                                식을 변하는 문자가 있는 부분과 없는 부분으로 정리합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        kA(x,y)+B(x,y)=0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이 직선이 모든 <InlineMath math="k" />에 대하여
                                항상 지나는 점은
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \begin{cases}
                        A(x,y)=0\\
                        B(x,y)=0
                        \end{cases}
                        }
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                을 연립하여 구합니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                6. 실전 풀이 순서
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{고정되는 점 찾기}
                        \rightarrow
                        \text{주어진 조건 대입}
                        \rightarrow
                        \text{변수의 값이나 범위 구하기}
                        \rightarrow
                        \text{식 정리}
                    `}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.14 세 직선의 위치관계 */}
            <section className="mt-10 rounded-2xl border border-white/15 bg-black/40 p-6">

                <h2 className="text-3xl font-bold text-white">
                    1.14 세 직선의 위치관계
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                    서로 다른 세 직선은 위치에 따라
                    크게 네 가지 경우로 나눌 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1 */}
                    <div className="grid gap-6 rounded-xl border border-white/10 bg-white/5 p-5 lg:grid-cols-[220px_1fr]">

                        {/* 이미지 */}
                        <div className="rounded-xl bg-white p-4">
                            <img
                                src="/images/commonMath2/1.14_01.png"
                                alt="평행한 세 직선"
                                className="mx-auto w-full max-w-[260px]"
                            />
                        </div>

                        {/* 설명 */}
                        <div className="flex flex-col justify-center">

                            <h3 className="text-2xl font-bold text-white">
                                ① 평행한 세 직선
                            </h3>

                            <div className="mt-5 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    세 직선이 모두 서로 평행합니다.
                                </p>

                                <p className="leading-8">
                                    서로 만나는 점이 없으므로
                                    <strong className="text-sky-300"> 교점은 0개</strong>입니다.
                                </p>

                                <p className="leading-8">
                                    세 직선은 평면을
                                    <strong className="text-amber-300"> 4개의 부분</strong>으로
                                    나눕니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 2 */}
                    <div className="grid gap-6 rounded-xl border border-white/10 bg-white/5 p-5 lg:grid-cols-[220px_1fr]">

                        {/* 이미지 */}
                        <div className="rounded-xl bg-white p-4">
                            <img
                                src="/images/commonMath2/1.14_02.png"
                                alt="평행한 두 직선과 나머지 한 직선"
                                className="mx-auto w-full max-w-[260px]"
                            />
                        </div>

                        {/* 설명 */}
                        <div className="flex flex-col justify-center">

                            <h3 className="text-2xl font-bold text-white">
                                ② 평행한 두 직선과 나머지 한 직선
                            </h3>

                            <div className="mt-5 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    두 직선은 서로 평행하고,
                                    나머지 한 직선이 두 직선과 각각 만납니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                    <strong className="text-sky-300"> 교점은 2개</strong>입니다.
                                </p>

                                <p className="leading-8">
                                    세 직선은 평면을
                                    <strong className="text-amber-300"> 6개의 부분</strong>으로
                                    나눕니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 3 */}
                    <div className="grid gap-6 rounded-xl border border-white/10 bg-white/5 p-5 lg:grid-cols-[220px_1fr]">

                        {/* 이미지 */}
                        <div className="rounded-xl bg-white p-4">
                            <img
                                src="/images/commonMath2/1.14_03.png"
                                alt="삼각형을 만드는 세 직선"
                                className="mx-auto w-full max-w-[260px]"
                            />
                        </div>

                        {/* 설명 */}
                        <div className="flex flex-col justify-center">

                            <h3 className="text-2xl font-bold text-white">
                                ③ 세 직선이 서로 다른 세 점에서 만나는 경우
                            </h3>

                            <div className="mt-5 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    세 직선 중 평행한 두 직선이 없고,
                                    세 직선이 한 점에서 만나지도 않는 경우입니다.
                                </p>

                                <p className="leading-8">
                                    세 직선은 서로 다른 세 점에서 만나므로
                                    <strong className="text-sky-300"> 교점은 3개</strong>입니다.
                                </p>

                                <p className="leading-8">
                                    이때 세 직선은
                                    <strong className="text-emerald-300"> 삼각형을 만듭니다.</strong>
                                </p>

                                <p className="leading-8">
                                    세 직선은 평면을
                                    <strong className="text-amber-300"> 7개의 부분</strong>으로
                                    나눕니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 4 */}
                    <div className="grid gap-6 rounded-xl border border-white/10 bg-white/5 p-5 lg:grid-cols-[220px_1fr]">

                        {/* 이미지 */}
                        <div className="rounded-xl bg-white p-4">
                            <img
                                src="/images/commonMath2/1.14_04.png"
                                alt="한 점에서 만나는 세 직선"
                                className="mx-auto w-full max-w-[260px]"
                            />
                        </div>

                        {/* 설명 */}
                        <div className="flex flex-col justify-center">

                            <h3 className="text-2xl font-bold text-white">
                                ④ 한 점에서 만나는 세 직선
                            </h3>

                            <div className="mt-5 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    세 직선이 모두 같은 한 점을 지납니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                    <strong className="text-sky-300"> 교점은 1개</strong>입니다.
                                </p>

                                <p className="leading-8">
                                    세 직선은 평면을
                                    <strong className="text-amber-300"> 6개의 부분</strong>으로
                                    나눕니다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 세 직선{" "}
                            <InlineMath math="x-2y-1=0,\;2x+y-2=0,\;ax+4y-1=0" />
                            에 의하여 생기는 교점이{" "}
                            <InlineMath math="2" />개가 되도록 하는
                            모든 상수 <InlineMath math="a" />의 값의 곱을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 직선의 교점이{" "}
                                <InlineMath math="2" />개이려면
                                <strong className="text-sky-300">
                                    {" "}평행한 두 직선이 있어야 합니다.
                                </strong>
                            </p>

                            <p className="leading-8">
                                앞의 두 직선은
                            </p>

                            <BlockMath math="x-2y-1=0" />

                            <BlockMath math="2x+y-2=0" />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                \frac{1}{2}\ne\frac{-2}{1}
                `}
                            />

                            <p className="leading-8">
                                서로 평행하지 않습니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 번째 직선이 첫 번째 또는 두 번째 직선과 평행해야 합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-semibold text-white">
                                    ① 첫 번째 직선과 평행
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{a}{1}
                    =
                    \frac{4}{-2}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=-2
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-semibold text-white">
                                    ② 두 번째 직선과 평행
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{a}{2}
                    =
                    \frac{4}{1}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=8
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 가능한 <InlineMath math="a" />의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                -2,\;8
                `}
                            />

                            <p className="leading-8">
                                이므로 그 곱은
                            </p>

                            <BlockMath
                                math={String.raw`
                (-2)\times8=-16
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-16}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 직선{" "}
                            <InlineMath math="x+3y=0,\;x-y-4=0,\;mx+2y+1=0" />
                            이 삼각형을 이루지 않도록 하는
                            모든 상수 <InlineMath math="m" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 직선이 삼각형을 이루지 않는 경우는
                            </p>

                            <ul className="ml-6 list-disc space-y-2 leading-8">
                                <li>평행한 두 직선이 있는 경우</li>
                                <li>세 직선이 한 점에서 만나는 경우</li>
                            </ul>

                            {/* 평행 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-semibold text-white">
                                    ① 평행한 두 직선이 있는 경우
                                </p>

                                <p className="leading-8">
                                    앞의 두 직선은 서로 평행하지 않으므로
                                    세 번째 직선이 각각과 평행한 경우를 찾습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    첫 번째 직선과 평행하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{m}{1}
                    =
                    \frac{2}{3}
                    `}
                                />

                                <BlockMath math="m=\frac23" />

                                <p className="mt-3 leading-8">
                                    두 번째 직선과 평행하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{m}{1}
                    =
                    \frac{2}{-1}
                    `}
                                />

                                <BlockMath math="m=-2" />

                            </div>

                            {/* 한 점 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-semibold text-white">
                                    ② 세 직선이 한 점에서 만나는 경우
                                </p>

                                <p className="leading-8">
                                    먼저 앞의 두 직선의 교점을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{cases}
                    x+3y=0\\
                    x-y-4=0
                    \end{cases}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    y=-1,\qquad x=3
                    `}
                                />

                                <p className="leading-8">
                                    이 점이 세 번째 직선 위에 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    3m+2(-1)+1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    3m-1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    m=\frac13
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 가능한{" "}
                                <InlineMath math="m" />
                                의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                \frac23,\;
                -2,\;
                \frac13
                `}
                            />

                            <p className="leading-8">
                                이들의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                \frac23+\frac13-2
                =1-2
                =-1
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-1}
                `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 3 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 직선{" "}
                            <InlineMath math="x-y-1=0,\;x+y-3=0,\;x+ay-4=0" />
                            이 좌표평면을{" "}
                            <InlineMath math="6" />
                            개 부분으로 나눌 때,
                            모든 실수 <InlineMath math="a" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 직선이 평면을{" "}
                                <InlineMath math="6" />
                                개 부분으로 나누는 경우는
                            </p>

                            <ul className="ml-6 list-disc space-y-2 leading-8">
                                <li>평행한 두 직선이 있는 경우</li>
                                <li>세 직선이 한 점에서 만나는 경우</li>
                            </ul>

                            {/* 평행 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-semibold text-white">
                                    ① 평행한 두 직선이 있는 경우
                                </p>

                                <p className="leading-8">
                                    앞의 두 직선은 서로 평행하지 않으므로
                                    세 번째 직선이 각각과 평행한 경우를 찾습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    첫 번째 직선과 평행하면
                                </p>

                                <BlockMath math={String.raw`\frac{1}{1}=\frac{a}{-1}`} />

                                <BlockMath math={String.raw`a=-1`} />

                                <p className="mt-3 leading-8">
                                    두 번째 직선과 평행하면
                                </p>

                                <BlockMath math={String.raw`\frac{1}{1}=\frac{a}{1}`} />

                                <BlockMath math={String.raw`a=1`} />

                            </div>

                            {/* 한 점 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-semibold text-white">
                                    ② 세 직선이 한 점에서 만나는 경우
                                </p>

                                <p className="leading-8">
                                    먼저 앞의 두 직선의 교점을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{cases}
                    x-y-1=0\\
                    x+y-3=0
                    \end{cases}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    x=2,\qquad y=1
                    `}
                                />

                                <p className="leading-8">
                                    이 점이 세 번째 직선 위에 있어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2+a-4=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=2
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 가능한{" "}
                                <InlineMath math="a" />
                                의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                -1,\;1,\;2
                `}
                            />

                            <p className="leading-8">
                                이들의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                -1+1+2=2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{2}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 세 직선{" "}
                            <InlineMath math="ax+y+5=0" />,{" "}
                            <InlineMath math="2x+by-4=0" />,{" "}
                            <InlineMath math="x+2y+3=0" />에 의하여
                            좌표평면이 네 부분으로 나누어질 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                서로 다른 세 직선이 좌표평면을{" "}
                                <InlineMath math="4" />개의 부분으로 나누려면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{세 직선이 모두 서로 평행해야 한다.}
                `}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-semibold text-white">
                                    ① <InlineMath math="a" /> 구하기
                                </p>

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="ax+y+5=0" />과{" "}
                                    <InlineMath math="x+2y+3=0" />이
                                    서로 평행해야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y" />의 계수를 맞춰 보면
                                    두 번째 직선의 <InlineMath math="x,\ y" /> 계수에{" "}
                                    <InlineMath math="\dfrac12" />을 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+2y
                        \rightarrow
                        \frac12x+y
                    `}
                                />

                                <p className="leading-8">
                                    가 되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=\frac12
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-semibold text-white">
                                    ② <InlineMath math="b" /> 구하기
                                </p>

                                <p className="leading-8">
                                    직선{" "}
                                    <InlineMath math="2x+by-4=0" />도{" "}
                                    <InlineMath math="x+2y+3=0" />과
                                    서로 평행해야 합니다.
                                </p>

                                <p className="leading-8">
                                    이번에는 <InlineMath math="x" />의 계수를 맞추면{" "}
                                    <InlineMath math="x+2y" />에{" "}
                                    <InlineMath math="2" />를 곱하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+2y
                        \rightarrow
                        2x+4y
                    `}
                                />

                                <p className="leading-8">
                                    가 되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b=4
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b
                    =
                    \frac12+4
                    =
                    \frac92
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac92}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    서로 다른 세 직선이 평면을{" "}
                                    <InlineMath math="4" />개의 부분으로 나눈다는 것은
                                    <strong> 세 직선이 모두 서로 평행하다</strong>는 뜻입니다.
                                    따라서 상수항은 보지 않고{" "}
                                    <InlineMath math="x,\ y" />의 계수만 같은 비가 되도록
                                    맞추면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{4개의 부분}
                        \rightarrow
                        \text{세 직선 모두 평행}
                        \rightarrow
                        a,\ b
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 직선{" "}
                            <InlineMath math="2x-y=4,\;3x+2y=-1,\;x-ay=0" />
                            이 삼각형을 이루지 않도록 하는
                            모든 상수 <InlineMath math="a" />의 값의 곱을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 직선이 삼각형을 이루지 않는 경우는
                            </p>

                            <ul className="ml-6 list-disc space-y-2 leading-8">
                                <li>평행한 두 직선이 있는 경우</li>
                                <li>세 직선이 한 점에서 만나는 경우</li>
                            </ul>

                            {/* 평행 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-semibold text-white">
                                    ① 평행한 두 직선이 있는 경우
                                </p>

                                <p className="leading-8">
                                    첫 번째 직선과 평행하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{1}{2}=\frac{-a}{-1}
                    `}
                                />

                                <BlockMath math={String.raw`a=\frac12`} />

                                <p className="mt-4 leading-8">
                                    두 번째 직선과 평행하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{1}{3}=\frac{-a}{2}
                    `}
                                />

                                <BlockMath math={String.raw`a=-\frac23`} />

                            </div>

                            {/* 한 점 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-semibold text-white">
                                    ② 세 직선이 한 점에서 만나는 경우
                                </p>

                                <p className="leading-8">
                                    먼저 앞의 두 직선의 교점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{cases}
                    2x-y=4\\
                    3x+2y=-1
                    \end{cases}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    x=1,\qquad y=-2
                    `}
                                />

                                <p className="leading-8">
                                    이 점이 세 번째 직선 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    1-a(-2)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    1+2a=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=-\frac12
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 가능한 <InlineMath math="a" />의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                \frac12,\;
                -\frac23,\;
                -\frac12
                `}
                            />

                            <p className="leading-8">
                                이들의 곱은
                            </p>

                            <BlockMath
                                math={String.raw`
                \frac12
                \times
                \left(-\frac23\right)
                \times
                \left(-\frac12\right)
                =
                \frac16
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{\frac16}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 6 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 직선{" "}
                            <InlineMath math="x+2y=3,\;2x-3y-12=0,\;ax+y=1" />
                            로 둘러싸인 삼각형이 직각삼각형이 되도록 하는
                            모든 상수 <InlineMath math="a" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형이 직각삼각형이 되려면
                                세 직선 중 서로 수직인 두 직선이 있어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 가지 경우를 모두 조사합니다.
                            </p>

                            {/* ① */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-semibold text-white">
                                    ① 첫 번째와 두 번째 직선이 수직
                                </p>

                                <BlockMath
                                    math={String.raw`
                    1\cdot2+2(-3)
                    =-4\ne0
                    `}
                                />

                                <p>
                                    따라서 이 경우는 성립하지 않습니다.
                                </p>

                            </div>

                            {/* ② */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-semibold text-white">
                                    ② 첫 번째와 세 번째 직선이 수직
                                </p>

                                <BlockMath
                                    math={String.raw`
                    1\cdot a+2\cdot1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=-2
                    `}
                                />

                            </div>

                            {/* ③ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-semibold text-white">
                                    ③ 두 번째와 세 번째 직선이 수직
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2a+(-3)\cdot1=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    2a-3=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=\frac32
                    `}
                                />

                            </div>

                            <p>
                                따라서 가능한{" "}
                                <InlineMath math="a" />
                                의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                -2,\;
                \frac32
                `}
                            />

                            <p>
                                이들의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                -2+\frac32
                =-\frac12
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-\frac12}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="mt-4 space-y-3 text-gray-300">

                        <p className="leading-8">
                            세 직선이 삼각형을 만들려면
                        </p>

                        <p className="leading-8">
                            • 평행한 두 직선이 없어야 합니다.
                        </p>

                        <p className="leading-8">
                            • 세 직선이 한 점에서 만나지 않아야 합니다.
                        </p>

                    </div>

                    <BlockMath
                        math={String.raw`
                \boxed{
                \text{평행한 두 직선이 없음}
                \quad+\quad
                \text{한 점에서 만나지 않음}
                \Rightarrow
                \text{삼각형}
                }
            `}
                    />

                </div>

            </section>

            {/* 1.15 점과 직선 사이의 거리와 평행한 두 직선 사이의 거리 */}
            <section className="mt-10 rounded-2xl border border-white/15 bg-black/40 p-6">

    {/* 제목 */}

        <h2 className="text-3xl font-bold text-white">
            1.15 점과 직선 사이의 거리와 평행한 두 직선 사이의 거리
        </h2>

        <p className="mt-5 leading-8 text-gray-300">
            점과 직선 사이의 거리는
            <strong className="text-yellow-300"> 공식을 암기하여 바로 사용</strong>합니다.
            평행한 두 직선 사이의 거리도 같은 공식을 이용하여 간단하게 구할 수 있습니다.
        </p>



<div className="mt-8 space-y-6">
    {/* 1. 점과 직선 사이의 거리 */}
    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
            1. 점과 직선 사이의 거리
        </h3>

        <p className="leading-8 text-gray-300">
            점 <InlineMath math="(\alpha,\beta)" />와 직선
        </p>

        <BlockMath
            math={String.raw`
                ax+by+c=0
            `}
        />

        <p className="leading-8 text-gray-300">
            사이의 거리를 <InlineMath math="d" />라 하면
        </p>

        <div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

            <BlockMath
                math={String.raw`
                    \boxed{
                    d=
                    \frac{|a\alpha+b\beta+c|}
                    {\sqrt{a^2+b^2}}
                    }
                `}
            />

        </div>

    </div>


    {/* 2. 실전 작성법 */}
    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
            2. 점과 직선 사이의 거리 — 실전 작성법
        </h3>

        <p className="leading-8 text-gray-300">
            공식을 문자로 외우는 것과 함께,
            실제 문제에서는 다음과 같이 생각하면 빠르게 식을 작성할 수 있습니다.
        </p>

        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

            <p className="text-center text-lg font-semibold text-yellow-200">
                직선의 식을 그대로 옮겨 쓰면서 점을 대입
            </p>

            <div className="my-3 text-center text-2xl text-gray-400">
                ↓
            </div>

            <p className="text-center text-lg font-semibold text-yellow-200">
                절댓값
            </p>

            <div className="my-3 text-center text-2xl text-gray-400">
                ↓
            </div>

            <BlockMath
                math={String.raw`
                    \sqrt{
                    (x\text{계수})^2+
                    (y\text{계수})^2
                    }
                    \text{로 나눈다}
                `}
            />

        </div>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

            <p className="mb-4 font-bold text-white">
                절댓값 처리
            </p>

            <div className="space-y-3 text-gray-300">

                <p className="leading-8">
                    ① 양수인 경우 → <strong className="text-emerald-300">그대로 처리</strong>
                </p>

                <p className="leading-8">
                    ② 음수인 경우 → 부호를 바꾸어
                    <strong className="text-emerald-300"> 양수로 처리</strong>
                </p>

                <p className="leading-8">
                    ③ 양수인지 음수인지 알 수 없는 경우 →
                    <strong className="text-yellow-300"> 절댓값 기호를 그대로 사용</strong>
                </p>

            </div>

            <div className="mt-5 grid gap-4 md:grid-cols-3">

                <div className="rounded-lg bg-black/30 p-4">
                    <BlockMath math="|7|=7" />
                </div>

                <div className="rounded-lg bg-black/30 p-4">
                    <BlockMath math="|-7|=7" />
                </div>

                <div className="rounded-lg bg-black/30 p-4">
                    <BlockMath math="|a-3|" />
                </div>

            </div>

        </div>

        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

            <p className="font-bold text-emerald-300">
                핵심
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                점과 직선 사이의 거리는
                <strong className="text-white"> 공식을 암기해서 풉니다.</strong>
                증명은 공식이 만들어지는 원리를 이해하기 위한 것입니다.
            </p>

        </div>

    </div>


    {/* 3. 점과 직선 사이의 거리 증명 */}
    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
            3. 점과 직선 사이의 거리 공식은 왜 성립할까?
        </h3>

        <div className="grid gap-8 lg:grid-cols-[400px_1fr]">

            {/* 이미지 */}
            <div className="rounded-xl border border-zinc-700 bg-zinc-900 p-4">

                <img
                    src="/images/commonMath2/1.15.png"
                    alt="점과 직선 사이의 거리 공식의 증명"
                    className="mx-auto w-full rounded-lg max-w-[390px]"
                />

            </div>

            {/* 설명 */}
            <div className="space-y-5 text-gray-300">

                <p className="leading-8">
                    직선{" "}
                    <InlineMath math="ax+by+c=0" />의 기울기는{" "}
                    <InlineMath math="-\dfrac{a}{b}" />이므로,
                    그림의 작은 직각삼각형의 가로와 세로의 길이를 각각{" "}
                    <InlineMath math="|b|,\ |a|" />로 볼 수 있습니다.
                </p>

                <p className="leading-8">
                    따라서 피타고라스의 정리에 의해 빗변의 길이는
                </p>

                <BlockMath
                    math={String.raw`
                        \sqrt{a^2+b^2}
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    이제 점 <InlineMath math="(\alpha,\beta)" />에서
                    세로로 올라가 직선과 만나는 점을 생각합니다.
                    이 점의 <InlineMath math="x" />좌표는{" "}
                    <InlineMath math="\alpha" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        a\alpha+by+c=0
                    `}
                />

                <p className="leading-8">
                    에서
                </p>

                <BlockMath
                    math={String.raw`
                        y=-\frac{a\alpha+c}{b}
                    `}
                />

                

            </div>

        </div>

        {/* 증명 이어서 */}
        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

        <p className="leading-8">
                    이므로 직선 위의 점은
                </p>

                <BlockMath
                    math={String.raw`
                        \left(
                        \alpha,
                        -\frac{a\alpha+c}{b}
                        \right)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

            <p className="leading-8 text-gray-300">
                따라서 그림의 파란 선분의 길이는
            </p>

            <BlockMath
                math={String.raw`
                    \left|
                    \beta-
                    \left(
                    -\frac{a\alpha+c}{b}
                    \right)
                    \right|
                    =
                    \left|
                    \beta+\frac{a\alpha+c}{b}
                    \right|
                    =
                    \frac{|a\alpha+b\beta+c|}{|b|}
                `}
            />

            <p className="leading-8 text-gray-300">
                입니다.
            </p>

            <p className="mt-4 leading-8 text-gray-300">
                그림의 두 직각삼각형은 닮음이므로
            </p>

            <BlockMath
                math={String.raw`
                    \frac{
                    d
                    }{
                    \dfrac{|a\alpha+b\beta+c|}{|b|}
                    }
                    =
                    \frac{|b|}
                    {\sqrt{a^2+b^2}}
                `}
            />

            <p className="leading-8 text-gray-300">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    d
                    =
                    \frac{|a\alpha+b\beta+c|}
                    {\sqrt{a^2+b^2}}
                `}
            />

            <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                <BlockMath
                    math={String.raw`
                        \boxed{
                        d=
                        \frac{|a\alpha+b\beta+c|}
                        {\sqrt{a^2+b^2}}
                        }
                    `}
                />

            </div>

            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

            <p className="text-center text-lg font-semibold text-yellow-200">
                점과 직선 사이의 거리
            </p>

            <BlockMath
                math={String.raw`
                    =
                    \frac{
                    |\text{직선에 점을 대입한 값}|
                    }{
                    \sqrt{
                    (x\text{계수})^2+
                    (y\text{계수})^2
                    }
                    }
                `}
            />

        </div>

        </div>

    </div>


    {/* 4. 평행한 두 직선 사이의 거리 */}
    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
            4. 평행한 두 직선 사이의 거리
        </h3>

        <p className="leading-8 text-gray-300">
            서로 평행한 두 직선
        </p>

        <BlockMath
            math={String.raw`
                ax+by+c=0
            `}
        />

        <BlockMath
            math={String.raw`
                ax+by+c'=0
            `}
        />

        <p className="leading-8 text-gray-300">
            사이의 거리를 <InlineMath math="d" />라 하면
        </p>

        <div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

            <BlockMath
                math={String.raw`
                    \boxed{
                    d=
                    \frac{|c-c'|}
                    {\sqrt{a^2+b^2}}
                    }
                `}
            />

        </div>

        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

            <p className="text-center text-lg font-semibold text-yellow-200">
                평행한 두 직선 사이의 거리
            </p>

            <BlockMath
                math={String.raw`
                    =
                    \frac{
                    |\text{상수항의 차}|
                    }{
                    \sqrt{
                    (x\text{계수})^2+
                    (y\text{계수})^2
                    }
                    }
                `}
            />

        </div>

    </div>


    {/* 5. 주의 */}
    <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-6">

        <h3 className="mb-4 text-2xl font-bold text-rose-300">
            5. 상수항을 빼기 전에 계수를 먼저 맞춘다
        </h3>

        <p className="leading-8 text-gray-300">
            평행한 두 직선의 거리 공식은
            두 직선의 <InlineMath math="x,\ y" />의 계수가
            서로 같을 때 바로 사용할 수 있습니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            예를 들어
        </p>

        <BlockMath
            math={String.raw`
                2x+4y+3=0
            `}
        />

        <BlockMath
            math={String.raw`
                x+2y-5=0
            `}
        />

        <p className="leading-8 text-gray-300">
            에서는 바로 상수항 <InlineMath math="3" />과{" "}
            <InlineMath math="-5" />를 빼면 안 됩니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            두 번째 식을 <InlineMath math="2" />배하여
        </p>

        <BlockMath
            math={String.raw`
                2x+4y-10=0
            `}
        />

        <p className="leading-8 text-gray-300">
            으로 만든 뒤 상수항을 비교합니다.
        </p>

        <div className="mt-5 rounded-lg bg-black/20 p-4">

            <p className="text-center font-bold text-rose-200">
                x계수와 y계수를 똑같이 맞춘 뒤 상수항의 차를 구한다.
            </p>

        </div>

    </div>


    {/* 6. 평행한 두 직선 사이의 거리 증명 */}
    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

        <h3 className="mb-5 text-2xl font-bold text-white">
            6. 평행한 두 직선 사이의 거리 공식은 왜 성립할까?
        </h3>

        <p className="leading-8 text-gray-300">
            서로 평행한 두 직선
        </p>

        <BlockMath
            math={String.raw`
                ax+by+c=0,
                \qquad
                ax+by+c'=0
            `}
        />

        <p className="leading-8 text-gray-300">
            을 생각합니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            첫 번째 직선{" "}
            <InlineMath math="ax+by+c=0" /> 위의 한 점을{" "}
            <InlineMath math="(\alpha,\beta)" />라고 하겠습니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            두 직선은 서로 평행하므로,
            이 점에서 두 번째 직선까지의 거리가
            곧 두 평행한 직선 사이의 거리입니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            점과 직선 사이의 거리 공식을 사용하면
        </p>

        <BlockMath
            math={String.raw`
                d
                =
                \frac{
                |a\alpha+b\beta+c'|
                }{
                \sqrt{a^2+b^2}
                }
            `}
        />

        <p className="leading-8 text-gray-300">
            입니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            그런데 점 <InlineMath math="(\alpha,\beta)" />는
            첫 번째 직선{" "}
            <InlineMath math="ax+by+c=0" /> 위의 점이므로
        </p>

        <BlockMath
            math={String.raw`
                a\alpha+b\beta+c=0
            `}
        />

        <p className="leading-8 text-gray-300">
            따라서
        </p>

        <BlockMath
            math={String.raw`
                a\alpha+b\beta=-c
            `}
        />

        <p className="leading-8 text-gray-300">
            입니다.
        </p>

        <p className="mt-4 leading-8 text-gray-300">
            이를 거리 공식에 대입하면
        </p>

        <BlockMath
            math={String.raw`
                d
                =
                \frac{
                |-c+c'|
                }{
                \sqrt{a^2+b^2}
                }
            `}
        />

        <BlockMath
            math={String.raw`
                d
                =
                \frac{
                |c-c'|
                }{
                \sqrt{a^2+b^2}
                }
            `}
        />

        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

            <BlockMath
                math={String.raw`
                    \boxed{
                    d=
                    \frac{|c-c'|}
                    {\sqrt{a^2+b^2}}
                    }
                `}
            />

        </div>

        <p className="mt-5 leading-8 text-gray-300">
            즉 평행한 두 직선 사이의 거리 공식은
            <strong className="text-emerald-300">
                {" "}점과 직선 사이의 거리 공식을 그대로 이용한 결과
            </strong>
            입니다.
        </p>

    </div>

    {/* 예제 1 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 1
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 점 <InlineMath math="A(2,-4)" />에서
                두 점 <InlineMath math="(-2,0),\ (2,4)" />를 지나는
                직선 <InlineMath math="l" /> 위를 움직이는 점{" "}
                <InlineMath math="P" />에 대하여
                선분 <InlineMath math="\overline{AP}" />의 최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_1.png"
                alt="점 A와 직선 l 사이의 거리"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
                점 <InlineMath math="P" />가 직선 <InlineMath math="l" /> 위를
                움직일 때 <InlineMath math="AP" />가 가장 짧아지는 경우는
                점 <InlineMath math="A" />에서 직선 <InlineMath math="l" />에
                내린 수선의 발이 <InlineMath math="P" />가 될 때입니다.
            </p>

            <p className="leading-8">
                따라서 <InlineMath math="\overline{AP}" />의 최솟값은
                점 <InlineMath math="A" />와 직선 <InlineMath math="l" /> 사이의 거리입니다.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    직선 <InlineMath math="l" />의 방정식
                </p>

                <p className="leading-8">
                    두 점 <InlineMath math="(-2,0)" />,{" "}
                    <InlineMath math="(2,4)" />를 지나는 직선의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{4-0}{2-(-2)}
                        =
                        1
                    `}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        y=x+2
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        x-y+2=0
                    `}
                />

            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점과 직선 사이의 거리
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(2,-4)" />와
                    직선 <InlineMath math="x-y+2=0" /> 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{|2-(-4)+2|}
                        {\sqrt{1^2+(-1)^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{8}{\sqrt2}
                        =
                        4\sqrt2
                    `}
                />

            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{4\sqrt2}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    점이 직선 위를 움직일 때 한 점에서 그 점까지의 거리의 최솟값은
                    그 점과 직선 사이의 거리입니다.
                    따라서 먼저 직선의 방정식을 구한 뒤
                    점과 직선 사이의 거리 공식을 바로 사용하면 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{최솟값}
                        \rightarrow
                        \text{수선의 길이}
                        \rightarrow
                        \text{점과 직선 사이의 거리 공식}
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 2 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 2
    </h3>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            세 점{" "}
            <InlineMath math="A(2,7),\ B(2,1),\ C(5,4)" />
            를 꼭짓점으로 하는 삼각형{" "}
            <InlineMath math="ABC" />
            의 무게중심을 지나고
            직선 <InlineMath math="AC" />에 평행한 직선을{" "}
            <InlineMath math="l" />이라 할 때,
            점 <InlineMath math="C" />에서 직선{" "}
            <InlineMath math="l" />까지의 거리를 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
                먼저 직선 <InlineMath math="AC" />의 방정식을 구합니다.
            </p>

            <BlockMath
                math={String.raw`
                    \frac{4-7}{5-2}
                    =
                    -1
                `}
            />

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    y-7=-(x-2)
                `}
            />

            <BlockMath
                math={String.raw`
                    x+y-9=0
                `}
            />

            <p className="leading-8">
                삼각형의 무게중심은
            </p>

            <BlockMath
                math={String.raw`
                    \left(
                    \frac{2+2+5}{3},
                    \frac{7+1+4}{3}
                    \right)
                    =
                    (3,4)
                `}
            />

            <p className="leading-8">
                이므로,
                직선 <InlineMath math="l" />은
                점 <InlineMath math="(3,4)" />를 지나고
                직선 <InlineMath math="AC" />와 평행합니다.
            </p>

            <BlockMath
                math={String.raw`
                    x+y-7=0
                `}
            />

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    평행한 두 직선 사이의 거리
                </p>

                <p className="leading-8">
                    직선{" "}
                    <InlineMath math="x+y-9=0" />과{" "}
                    <InlineMath math="x+y-7=0" /> 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{|(-9)-(-7)|}
                        {\sqrt{1^2+1^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{2}{\sqrt2}
                        =
                        \sqrt2
                    `}
                />

            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{\sqrt2}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8">
                    점 <InlineMath math="C" />는 직선{" "}
                    <InlineMath math="AC" /> 위의 점입니다.
                    따라서 점 <InlineMath math="C" />에서
                    직선 <InlineMath math="l" />까지의 거리는
                    <strong> 직선 <InlineMath math="AC" />와 직선 <InlineMath math="l" /> 사이의 거리</strong>와 같습니다.
                </p>

                <p className="mt-3 leading-8">
                    즉, 점과 직선 사이의 거리 공식을 사용할 수도 있지만,
                    이 문제에서는
                    <strong className="text-yellow-300">
                        {" "}평행한 두 직선 사이의 거리 공식
                    </strong>
                    을 이용하는 것이 가장 간단합니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 3 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 3
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 좌표평면 위의 점{" "}
                <InlineMath math="A(-8,0)" />과 원점{" "}
                <InlineMath math="O" />에서 직선{" "}
                <InlineMath math="3x+y-6=0" />에 내린 수선의 발을
                각각 <InlineMath math="B,\ C" />라 할 때,
                사다리꼴 <InlineMath math="OABC" />의 넓이를 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_3.png"
                alt="점 A와 원점 O에서 직선에 내린 수선과 사다리꼴 OABC"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
                선분 <InlineMath math="AB" />와{" "}
                <InlineMath math="OC" />는 모두 직선{" "}
                <InlineMath math="3x+y-6=0" />에 수직이므로
                서로 평행합니다.
            </p>

            <BlockMath
                math={String.raw`
                    AB\parallel OC
                `}
            />

            <p className="leading-8">
                따라서 사각형 <InlineMath math="OABC" />는{" "}
                <InlineMath math="AB,\ OC" />를 평행한 두 변으로 하는
                사다리꼴입니다.
            </p>

            {/* AB */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① <InlineMath math="AB" />의 길이
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(-8,0)" />과
                    직선 <InlineMath math="3x+y-6=0" /> 사이의 거리이므로
                </p>

                <BlockMath
                    math={String.raw`
                        AB
                        =
                        \frac{|3(-8)+0-6|}
                        {\sqrt{3^2+1^2}}
                `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{30}{\sqrt{10}}
                        =
                        3\sqrt{10}
                    `}
                />

            </div>

            {/* OC */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② <InlineMath math="OC" />의 길이
                </p>

                <p className="leading-8">
                    원점 <InlineMath math="O(0,0)" />과
                    직선 <InlineMath math="3x+y-6=0" /> 사이의 거리이므로
                </p>

                <BlockMath
                    math={String.raw`
                        OC
                        =
                        \frac{|3(0)+0-6|}
                        {\sqrt{3^2+1^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{6}{\sqrt{10}}
                        =
                        \frac{3\sqrt{10}}{5}
                    `}
                />

            </div>

            {/* BC */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 사다리꼴의 높이 <InlineMath math="BC" />
                </p>

                <p className="leading-8">
                    <InlineMath math="B,\ C" />는 같은 직선 위에 있고,{" "}
                    <InlineMath math="AB,\ OC" />는 그 직선에 수직이므로{" "}
                    <InlineMath math="BC" />는 사다리꼴의 높이입니다.
                </p>

                <p className="leading-8">
                    두 평행한 변의 길이의 차는
                </p>

                <BlockMath
                    math={String.raw`
                        AB-OC
                        =
                        3\sqrt{10}
                        -
                        \frac{3\sqrt{10}}5
                        =
                        \frac{12\sqrt{10}}5
                    `}
                />

                <p className="leading-8">
                    이고 <InlineMath math="AO=8" />이므로
                    피타고라스의 정리에 의하여
                </p>

                <BlockMath
                    math={String.raw`
                        BC^2
                        +
                        \left(
                        \frac{12\sqrt{10}}5
                        \right)^2
                        =
                        8^2
                    `}
                />

                <BlockMath
                    math={String.raw`
                        BC^2
                        =
                        64-\frac{288}{5}
                        =
                        \frac{32}{5}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        BC
                        =
                        \frac{4\sqrt{10}}5
                    `}
                />

            </div>

            {/* 넓이 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    사다리꼴의 넓이
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12
                        (AB+OC)\times BC
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac12
                        \left(
                        3\sqrt{10}
                        +
                        \frac{3\sqrt{10}}5
                        \right)
                        \times
                        \frac{4\sqrt{10}}5
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{72}{5}
                    `}
                />

            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{\frac{72}{5}}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    두 점에서 같은 직선에 내린 수선은 서로 평행합니다.
                    따라서 먼저 점과 직선 사이의 거리 공식으로{" "}
                    <InlineMath math="AB,\ OC" />를 구하고,
                    사다리꼴의 높이 <InlineMath math="BC" />를 구한 뒤
                    넓이를 계산합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{점과 직선 사이의 거리}
                        \rightarrow
                        AB,\ OC
                        \rightarrow
                        BC
                        \rightarrow
                        \text{사다리꼴의 넓이}
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 4 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 4
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 좌표평면 위에
                점 <InlineMath math="A(a,5)\;(a>0)" />과
                두 점 <InlineMath math="(4,0),\ (0,2)" />를 지나는
                직선 <InlineMath math="l" />이 있다.
                직선 <InlineMath math="l" /> 위의 서로 다른 두 점{" "}
                <InlineMath math="B,\ C" />와 제1사분면 위의 점{" "}
                <InlineMath math="D" />를 사각형{" "}
                <InlineMath math="ABCD" />가 정사각형이 되도록 잡는다.
                정사각형 <InlineMath math="ABCD" />의 넓이가{" "}
                <InlineMath math="\dfrac{64}{5}" />일 때,{" "}
                <InlineMath math="a" />의 값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_4.png"
                alt="직선 l 위에 한 변을 둔 정사각형 ABCD"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 직선 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 직선 <InlineMath math="l" />의 방정식
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l" />은
                    두 점 <InlineMath math="(4,0)" />,{" "}
                    <InlineMath math="(0,2)" />를 지나므로{" "}
                    <InlineMath math="x" />절편은 <InlineMath math="4" />,{" "}
                    <InlineMath math="y" />절편은 <InlineMath math="2" />입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{x}{4}+\frac{y}{2}=1
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        x+2y-4=0
                    `}
                />

            </div>

            {/* 정사각형 한 변 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 정사각형의 한 변의 길이
                </p>

                <p className="leading-8">
                    정사각형의 한 변의 길이를{" "}
                    <InlineMath math="s" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
                        s^2=\frac{64}{5}
                    `}
                />

                <p className="leading-8">
                    길이는 양수이므로
                </p>

                <BlockMath
                    math={String.raw`
                        s=\frac{8}{\sqrt5}
                    `}
                />

            </div>

            {/* 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 점과 직선 사이의 거리
                </p>

                <p className="leading-8">
                    선분 <InlineMath math="BC" />는 직선{" "}
                    <InlineMath math="l" /> 위에 있고
                    사각형 <InlineMath math="ABCD" />는 정사각형이므로
                </p>

                <BlockMath
                    math={String.raw`
                        AB\perp BC
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 <InlineMath math="AB" />의 길이는
                    점 <InlineMath math="A(a,5)" />와
                    직선 <InlineMath math="x+2y-4=0" /> 사이의 거리입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        AB
                        =
                        \frac{|a+2\cdot5-4|}
                        {\sqrt{1^2+2^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{|a+6|}{\sqrt5}
                    `}
                />

                <p className="leading-8">
                    그런데 <InlineMath math="a>0" />이므로{" "}
                    <InlineMath math="a+6>0" />입니다.
                    따라서 절댓값을 그대로 없애면
                </p>

                <BlockMath
                    math={String.raw`
                        AB=\frac{a+6}{\sqrt5}
                    `}
                />

            </div>

            <p className="leading-8">
                정사각형의 한 변의 길이는{" "}
                <InlineMath math="\dfrac{8}{\sqrt5}" />이므로
            </p>

            <BlockMath
                math={String.raw`
                    \frac{a+6}{\sqrt5}
                    =
                    \frac{8}{\sqrt5}
                `}
            />

            <BlockMath
                math={String.raw`
                    a+6=8
                `}
            />

            <BlockMath
                math={String.raw`
                    a=2
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{2}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    정사각형의 넓이에서 한 변의 길이를 먼저 구합니다.
                    그리고 <InlineMath math="BC" />가 직선{" "}
                    <InlineMath math="l" /> 위에 있으므로{" "}
                    <InlineMath math="AB" />는 점{" "}
                    <InlineMath math="A" />에서 직선{" "}
                    <InlineMath math="l" />까지의 거리입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{정사각형의 넓이}
                        \rightarrow
                        AB
                        \rightarrow
                        \text{점과 직선 사이의 거리}
                        \rightarrow
                        a
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 5 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 5
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            점 <InlineMath math="(0,k)" />에서
            두 직선{" "}
            <InlineMath math="x+2y-5=0" />,{" "}
            <InlineMath math="2x-y-2=0" />에 이르는 거리가
            같도록 하는 모든 실수 <InlineMath math="k" />의 값의 합을
            구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 첫 번째 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 첫 번째 직선까지의 거리
                </p>

                <p className="leading-8">
                    점 <InlineMath math="(0,k)" />와
                    직선 <InlineMath math="x+2y-5=0" /> 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d_1
                        =
                        \frac{|0+2k-5|}
                        {\sqrt{1^2+2^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        d_1
                        =
                        \frac{|2k-5|}{\sqrt5}
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>

            {/* 두 번째 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 두 번째 직선까지의 거리
                </p>

                <p className="leading-8">
                    점 <InlineMath math="(0,k)" />와
                    직선 <InlineMath math="2x-y-2=0" /> 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d_2
                        =
                        \frac{|2\cdot0-k-2|}
                        {\sqrt{2^2+(-1)^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        d_2
                        =
                        \frac{|-k-2|}{\sqrt5}
                        =
                        \frac{|k+2|}{\sqrt5}
                    `}
                />

            </div>

            {/* 거리 같음 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 두 거리가 같은 조건
                </p>

                <p className="leading-8">
                    두 거리가 같으므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{|2k-5|}{\sqrt5}
                        =
                        \frac{|k+2|}{\sqrt5}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        |2k-5|
                        =
                        |k+2|
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    절댓값이 같으므로
                </p>

                <BlockMath
                    math={String.raw`
                        2k-5=k+2
                    `}
                />

                <p className="leading-8">
                    또는
                </p>

                <BlockMath
                    math={String.raw`
                        2k-5=-(k+2)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        k=7
                        \qquad\text{또는}\qquad
                        k=1
                    `}
                />

            </div>

            <p className="leading-8">
                따라서 모든 <InlineMath math="k" />의 값의 합은
            </p>

            <BlockMath
                math={String.raw`
                    7+1=8
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{8}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    <InlineMath math="k" />의 값을 모르므로
                    거리 공식에 대입하여 나온 식의 부호를 판단할 수 없습니다.
                    따라서 절댓값을 그대로 유지합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        |2k-5|=|k+2|
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    이후 두 절댓값이 같다는 조건을 이용하여
                    두 경우로 나누어 <InlineMath math="k" />를 구합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{거리 공식}
                        \rightarrow
                        \text{절댓값 유지}
                        \rightarrow
                        \text{두 거리 같음}
                        \rightarrow
                        k
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 6 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 6
    </h3>

    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            직선 <InlineMath math="x-2y+6=0" />에 수직이고
            원점으로부터의 거리가{" "}
            <InlineMath math="\sqrt3" />인 직선 중
            제1사분면을 지나지 않는 직선의{" "}
            <InlineMath math="y" />절편을 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
                구하는 직선은
                직선 <InlineMath math="x-2y+6=0" />에 수직이므로
                기울기는
            </p>

            <BlockMath
                math={String.raw`
                    -2
                `}
            />

            <p className="leading-8">
                따라서 직선의 방정식을
            </p>

            <BlockMath
                math={String.raw`
                    2x+y+c=0
                `}
            />

            <p className="leading-8">
                라고 둘 수 있습니다.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    원점에서 직선까지의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{|c|}
                        {\sqrt{2^2+1^2}}
                        =
                        \sqrt3
                    `}
                />

                <BlockMath
                    math={String.raw`
                        \frac{|c|}{\sqrt5}
                        =
                        \sqrt3
                    `}
                />

                <BlockMath
                    math={String.raw`
                        |c|
                        =
                        \sqrt{15}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        c=\pm\sqrt{15}
                    `}
                />

            </div>

            <p className="leading-8">
                따라서 가능한 직선은
            </p>

            <BlockMath
                math={String.raw`
                    2x+y+\sqrt{15}=0
                `}
            />

            <p className="text-center text-gray-400">
                또는
            </p>

            <BlockMath
                math={String.raw`
                    2x+y-\sqrt{15}=0
                `}
            />

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    제1사분면을 지나지 않는 직선
                </p>

                <p className="leading-8">
                    직선{" "}
                    <InlineMath math="2x+y-\sqrt{15}=0" />은
                </p>

                <BlockMath
                    math={String.raw`
                        y=-2x+\sqrt{15}
                    `}
                />

                <p className="leading-8">
                    이므로{" "}
                    <InlineMath math="0<x<\dfrac{\sqrt{15}}2" />에서{" "}
                    <InlineMath math="y>0" />가 되어
                    제1사분면을 지납니다.
                </p>

                <p className="leading-8">
                    따라서 조건을 만족하는 직선은
                </p>

                <BlockMath
                    math={String.raw`
                        2x+y+\sqrt{15}=0
                    `}
                />

            </div>

            <p className="leading-8">
                이 직선의 <InlineMath math="y" />절편은
            </p>

            <BlockMath
                math={String.raw`
                    y=-\sqrt{15}
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{-\sqrt{15}}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 수직인 직선의 방정식을{" "}
                    <InlineMath math="2x+y+c=0" />으로 놓습니다.
                    원점과 직선 사이의 거리 공식을 이용하여{" "}
                    <InlineMath math="c" />를 구하면 두 개의 직선이 나오고,
                    마지막에 <strong>제1사분면을 지나지 않는다</strong>는 조건으로
                    하나를 선택하면 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{수직}
                        \rightarrow
                        2x+y+c=0
                        \rightarrow
                        \text{거리 공식}
                        \rightarrow
                        c=\pm\sqrt{15}
                        \rightarrow
                        \text{조건으로 선택}
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 7 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 7
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            두 직선{" "}
            <InlineMath math="x-y+1=0" />,{" "}
            <InlineMath math="x-2y+3=0" />의 교점을 지나고
            원점으로부터 거리가 <InlineMath math="1" />인 직선의 방정식을{" "}
            <InlineMath math="ax+by+5=0" />이라 할 때,
            상수 <InlineMath math="a,\ b" />에 대하여{" "}
            <InlineMath math="a+b" />의 값을 구하시오.
            (단, <InlineMath math="ab\ne0" />)
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 교점 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 두 직선의 교점
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{cases}
                        x-y+1=0\\
                        x-2y+3=0
                        \end{cases}
                    `}
                />

                <p className="leading-8">
                    두 식을 빼면
                </p>

                <BlockMath math="y-2=0" />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        y=2,\qquad x=1
                    `}
                />

                <p className="leading-8">
                    따라서 두 직선의 교점은
                </p>

                <BlockMath math="(1,2)" />

            </div>

            {/* 교점을 지난다는 조건 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 교점을 지난다는 조건
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="ax+by+5=0" />이
                    점 <InlineMath math="(1,2)" />를 지나므로
                    점을 바로 대입하면
                </p>

                <BlockMath
                    math={String.raw`
                        a+2b+5=0
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        a+2b=-5
                    `}
                />

            </div>

            {/* 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 원점과 직선 사이의 거리
                </p>

                <p className="leading-8">
                    원점 <InlineMath math="(0,0)" />과
                    직선 <InlineMath math="ax+by+5=0" /> 사이의 거리가{" "}
                    <InlineMath math="1" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{|5|}
                        {\sqrt{a^2+b^2}}
                        =
                        1
                    `}
                />

                <BlockMath
                    math={String.raw`
                        \sqrt{a^2+b^2}=5
                    `}
                />

                <BlockMath
                    math={String.raw`
                        a^2+b^2=25
                    `}
                />

            </div>

            {/* 연립 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ <InlineMath math="a,\ b" /> 구하기
                </p>

                <p className="leading-8">
                    <InlineMath math="a+2b=-5" />에서
                </p>

                <BlockMath math="a=-5-2b" />

                <p className="leading-8">
                    이를 <InlineMath math="a^2+b^2=25" />에 대입하면
                </p>

                <BlockMath
                    math={String.raw`
                        (-5-2b)^2+b^2=25
                    `}
                />

                <BlockMath
                    math={String.raw`
                        25+20b+5b^2=25
                    `}
                />

                <BlockMath
                    math={String.raw`
                        5b(b+4)=0
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        b=0
                        \quad\text{또는}\quad
                        b=-4
                    `}
                />

                <p className="leading-8">
                    그런데 <InlineMath math="ab\ne0" />이므로{" "}
                    <InlineMath math="b=0" />은 제외합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        b=-4
                    `}
                />

                <p className="leading-8">
                    이를 <InlineMath math="a+2b=-5" />에 대입하면
                </p>

                <BlockMath
                    math={String.raw`
                        a-8=-5
                    `}
                />

                <BlockMath math="a=3" />

            </div>

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    a+b
                    =
                    3+(-4)
                    =
                    -1
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{-1}
                    `}
                />

            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 두 직선의 교점을 구하여{" "}
                    <InlineMath math="ax+by+5=0" />에 대입합니다.
                    또 원점과 이 직선 사이의 거리가{" "}
                    <InlineMath math="1" />이라는 조건에
                    점과 직선 사이의 거리 공식을 적용하면{" "}
                    <InlineMath math="a,\ b" />에 대한 두 식을 얻을 수 있습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{교점}
                        \rightarrow
                        a+2b=-5
                        \qquad
                        \text{거리}
                        \rightarrow
                        a^2+b^2=25
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    마지막에는 조건 <InlineMath math="ab\ne0" />을 이용하여
                    불필요한 해를 제외합니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 8 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 8
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            원점과 직선{" "}
            <InlineMath math="k(x+y)+4x-8=0" /> 사이의 거리는{" "}
            <InlineMath math="k=a" />일 때 최댓값{" "}
            <InlineMath math="b" />를 가진다고 한다.
            두 상수 <InlineMath math="a,\ b" />에 대하여{" "}
            <InlineMath math="b^2-a^2" />의 값을 구하시오.
            (단, <InlineMath math="k" />는 실수이다.)
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-6 text-gray-300">

            {/* 풀이 1 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    풀이 1. 점과 직선 사이의 거리 공식 이용
                </p>

                <p className="leading-8">
                    주어진 직선을 정리하면
                </p>

                <BlockMath
                    math={String.raw`
                        (k+4)x+ky-8=0
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    원점 <InlineMath math="(0,0)" />과 이 직선 사이의 거리를{" "}
                    <InlineMath math="d" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{|-8|}
                        {\sqrt{(k+4)^2+k^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{8}
                        {\sqrt{2k^2+8k+16}}
                    `}
                />

                <p className="leading-8">
                    거리 <InlineMath math="d" />가 최대가 되려면
                    분모가 최소가 되어야 합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        2k^2+8k+16
                        =
                        2\left\{(k+2)^2+4\right\}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="k=-2" />일 때 분모가 최소이므로
                </p>

                <BlockMath
                    math={String.raw`
                        a=-2
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    이때 거리의 최댓값은
                </p>

                <BlockMath
                    math={String.raw`
                        b
                        =
                        \frac{8}
                        {\sqrt{2\cdot4}}
                        =
                        \frac{8}{2\sqrt2}
                        =
                        2\sqrt2
                    `}
                />

            </div>

            {/* 풀이 2 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 text-xl font-bold text-blue-300">
                    풀이 2. 직선이 지나는 정점을 이용
                </p>

                <p className="leading-8 text-gray-300">
                    주어진 직선을 <InlineMath math="k" />가 있는 부분과
                    없는 부분으로 보면
                </p>

                <BlockMath
                    math={String.raw`
                        k(x+y)+(4x-8)=0
                    `}
                />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    따라서 이 직선은 <InlineMath math="k" />의 값에 관계없이
                    두 직선
                </p>

                <BlockMath
                    math={String.raw`
                        x+y=0,
                        \qquad
                        4x-8=0
                    `}
                />

                <p className="leading-8 text-gray-300">
                    의 교점을 항상 지납니다.
                </p>

                <BlockMath
                    math={String.raw`
                        x=2,\qquad y=-2
                    `}
                />

                <p className="leading-8 text-gray-300">
                    따라서 모든 직선은 고정점
                </p>

                <BlockMath
                    math={String.raw`
                        P(2,-2)
                    `}
                />

                <p className="leading-8 text-gray-300">
                    를 중심으로 회전합니다.
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                    <p className="mb-3 font-bold text-white">
                        원점과 직선 사이의 거리가 최대가 되는 경우
                    </p>

                    <p className="leading-8 text-gray-300">
                        점 <InlineMath math="P" />를 지나는 모든 직선 중
                        원점 <InlineMath math="O" />에서 직선까지의 거리가
                        가장 큰 경우는
                        직선이 <InlineMath math="OP" />에
                        <strong className="text-yellow-300"> 수직일 때</strong>입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이때 원점에서 직선까지의 거리는
                        바로 <InlineMath math="OP" />의 길이가 됩니다.
                    </p>

                </div>

                <p className="leading-8 text-gray-300">
                    직선 <InlineMath math="OP" />의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{-2-0}{2-0}=-1
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로 이에 수직인 직선의 기울기는
                </p>

                <BlockMath math="1" />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    한편 주어진 직선
                </p>

                <BlockMath
                    math={String.raw`
                        (k+4)x+ky-8=0
                    `}
                />

                <p className="leading-8 text-gray-300">
                    의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        -\frac{k+4}{k}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        -\frac{k+4}{k}=1
                    `}
                />

                <BlockMath
                    math={String.raw`
                        -k-4=k
                    `}
                />

                <BlockMath
                    math={String.raw`
                        k=-2
                    `}
                />

                <p className="leading-8 text-gray-300">
                    따라서
                </p>

                <BlockMath math="a=-2" />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    이때 최대거리는 <InlineMath math="OP" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        b
                        =
                        OP
                        =
                        \sqrt{2^2+(-2)^2}
                        =
                        2\sqrt2
                    `}
                />

            </div>

            {/* 마무리 */}
            <p className="leading-8">
                두 풀이에서
            </p>

            <BlockMath
                math={String.raw`
                    a=-2,
                    \qquad
                    b=2\sqrt2
                `}
            />

            <p className="leading-8">
                이므로
            </p>

            <BlockMath
                math={String.raw`
                    b^2-a^2
                    =
                    (2\sqrt2)^2-(-2)^2
                `}
            />

            <BlockMath
                math={String.raw`
                    =8-4
                    =4
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{4}
                    `}
                />

            </div>

            {/* 풀이 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    <InlineMath math="k" />에 따라 움직이는 직선이
                    항상 같은 점을 지난다면,
                    그 직선은 그 <strong>정점을 중심으로 회전</strong>합니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    정점 <InlineMath math="P" />를 지나는 직선과
                    원점 <InlineMath math="O" /> 사이의 거리는
                    직선이 <InlineMath math="OP" />에 수직일 때 가장 크며,
                    그 최댓값은 <InlineMath math="OP" />입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{정점 }P
                        \rightarrow
                        \text{직선의 회전}
                        \rightarrow
                        OP\perp\text{직선}
                        \rightarrow
                        \text{최대거리}=OP
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 9 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 9
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            두 직선{" "}
            <InlineMath math="x-3y-2=0" />,{" "}
            <InlineMath math="x+2y+3=0" />의 교점을 지나는 직선과
            점 <InlineMath math="A(3,-3)" /> 사이의 거리를{" "}
            <InlineMath math="f(k)" />라 할 때,{" "}
            <InlineMath math="f(k)" />의 최댓값을 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-6 text-gray-300">

            {/* 풀이 1 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    풀이 1. 점과 직선 사이의 거리 공식 이용
                </p>

                <p className="leading-8">
                    두 직선의 교점을 지나는 직선은
                </p>

                <BlockMath
                    math={String.raw`
                        (x-3y-2)+k(x+2y+3)=0
                    `}
                />

                <p className="leading-8">
                    으로 나타낼 수 있습니다.
                </p>

                <p className="leading-8">
                    정리하면
                </p>

                <BlockMath
                    math={String.raw`
                        (1+k)x+(2k-3)y+(3k-2)=0
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(3,-3)" />과 이 직선 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        f(k)
                        =
                        \frac{
                        |3(1+k)-3(2k-3)+(3k-2)|
                        }{
                        \sqrt{(1+k)^2+(2k-3)^2}
                        }
                    `}
                />

                <p className="leading-8">
                    분자를 정리하면
                </p>

                <BlockMath
                    math={String.raw`
                        |3+3k-6k+9+3k-2|
                        =
                        10
                    `}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        f(k)
                        =
                        \frac{10}
                        {\sqrt{(1+k)^2+(2k-3)^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{10}
                        {\sqrt{5k^2-10k+10}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{10}
                        {\sqrt{5\{(k-1)^2+1\}}}
                    `}
                />

                <p className="leading-8">
                    <InlineMath math="f(k)" />가 최대가 되려면
                    분모가 최소가 되어야 하므로
                </p>

                <BlockMath
                    math={String.raw`
                        k=1
                    `}
                />

                <p className="leading-8">
                    일 때 최댓값을 가집니다.
                </p>

                <BlockMath
                    math={String.raw`
                        f(1)
                        =
                        \frac{10}{\sqrt5}
                        =
                        2\sqrt5
                    `}
                />

            </div>

            {/* 풀이 2 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 text-xl font-bold text-blue-300">
                    풀이 2. 교점을 중심으로 회전하는 직선으로 해석
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 두 직선의 교점을 구합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{cases}
                        x-3y-2=0\\
                        x+2y+3=0
                        \end{cases}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    두 식을 빼면
                </p>

                <BlockMath
                    math={String.raw`
                        -5y-5=0
                    `}
                />

                <BlockMath
                    math={String.raw`
                        y=-1
                    `}
                />

                <p className="leading-8 text-gray-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        x=-1
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로 두 직선의 교점은
                </p>

                <BlockMath
                    math={String.raw`
                        P(-1,-1)
                    `}
                />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                    <p className="mb-3 font-bold text-white">
                        거리가 최대가 되는 직선
                    </p>

                    <p className="leading-8 text-gray-300">
                        교점 <InlineMath math="P" />를 지나는 직선을 회전시키면,
                        점 <InlineMath math="A" />에서 그 직선까지의 거리가
                        가장 큰 경우는
                        <strong className="text-yellow-300">
                            {" "}직선이 <InlineMath math="AP" />에 수직일 때
                        </strong>
                        입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이때 점 <InlineMath math="A" />에서 직선까지의 거리는
                        바로 <InlineMath math="AP" />의 길이가 됩니다.
                    </p>

                </div>

                <p className="leading-8 text-gray-300">
                    따라서 최댓값은
                </p>

                <BlockMath
                    math={String.raw`
                        AP
                        =
                        \sqrt{
                        \{3-(-1)\}^2+
                        \{-3-(-1)\}^2
                        }
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \sqrt{4^2+(-2)^2}
                        =
                        \sqrt{20}
                        =
                        2\sqrt5
                    `}
                />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    실제로 <InlineMath math="AP" />의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{-3-(-1)}{3-(-1)}
                        =
                        -\frac12
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로 이에 수직인 직선의 기울기는
                </p>

                <BlockMath math="2" />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    한편
                </p>

                <BlockMath
                    math={String.raw`
                        (1+k)x+(2k-3)y+(3k-2)=0
                    `}
                />

                <p className="leading-8 text-gray-300">
                    의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        -\frac{1+k}{2k-3}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로 최대가 되는 직선에서는
                </p>

                <BlockMath
                    math={String.raw`
                        -\frac{1+k}{2k-3}=2
                    `}
                />

                <BlockMath
                    math={String.raw`
                        -1-k=4k-6
                    `}
                />

                <BlockMath
                    math={String.raw`
                        k=1
                    `}
                />

                <p className="leading-8 text-gray-300">
                    로 풀이 1의 결과와도 일치합니다.
                </p>

            </div>

            {/* 정답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{2\sqrt5}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    한 점 <InlineMath math="P" />를 지나는 직선을 움직일 때,
                    다른 점 <InlineMath math="A" />에서 그 직선까지의 거리는
                    항상 <InlineMath math="AP" /> 이하입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{최대거리}=AP
                    `}
                />

                <p className="leading-8 text-gray-300">
                    그리고 최댓값은
                </p>

                <BlockMath
                    math={String.raw`
                        AP\perp\text{직선}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    일 때 만들어집니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 10 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 10
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            평행한 두 직선{" "}
            <InlineMath math="ax-2y+3=0,\quad 3x+(a+5)y-3=0" />
            사이의 거리를 구하시오.
            (단, <InlineMath math="a" />는 상수이다.)
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-6 text-gray-300">

            {/* 평행조건 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    ① 평행 조건
                </p>

                <p className="leading-8">
                    두 직선이 평행하므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{a}{3}
                        =
                        \frac{-2}{a+5}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        a(a+5)=-6
                    `}
                />

                <BlockMath
                    math={String.raw`
                        a^2+5a+6=0
                    `}
                />

                <BlockMath
                    math={String.raw`
                        (a+2)(a+3)=0
                    `}
                />

                <BlockMath
                    math={String.raw`
                        a=-2
                        \quad\text{또는}\quad
                        a=-3
                    `}
                />

            </div>

            {/* a=-2 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    ② <InlineMath math="a=-2" />인 경우
                </p>

                <p className="leading-8">
                    두 직선은
                </p>

                <BlockMath
                    math={String.raw`
                        -2x-2y+3=0
                    `}
                />

                <p className="text-center text-gray-400">
                    ,
                </p>

                <BlockMath
                    math={String.raw`
                        3x+3y-3=0
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    두 번째 식을 <InlineMath math="3" />으로 나누면
                </p>

                <BlockMath
                    math={String.raw`
                        x+y-1=0
                    `}
                />

                <p className="leading-8">
                    첫 번째 식을 <InlineMath math="-2" />로 나누면
                </p>

                <BlockMath
                    math={String.raw`
                        x+y-\frac32=0
                    `}
                />

                <p className="leading-8">
                    따라서 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{\left|-\frac32-(-1)\right|}
                        {\sqrt2}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac1{2\sqrt2}
                        =
                        \frac{\sqrt2}{4}
                    `}
                />

            </div>

            {/* a=-3 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    ③ <InlineMath math="a=-3" />인 경우
                </p>

                <p className="leading-8">
                    두 직선은
                </p>

                <BlockMath
                    math={String.raw`
                        -3x-2y+3=0
                    `}
                />

                <p className="text-center text-gray-400">
                    ,
                </p>

                <BlockMath
                    math={String.raw`
                        3x+2y-3=0
                    `}
                />

                <p className="leading-8">
                    첫 번째 식에 <InlineMath math="-1" />을 곱하면
                </p>

                <BlockMath
                    math={String.raw`
                        3x+2y-3=0
                    `}
                />

                <p className="leading-8">
                    이 되어 두 직선이 일치합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        d=0
                    `}
                />

            </div>

            {/* 답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서 가능한 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{
                        0,\;
                        \frac{\sqrt2}{4}
                        }
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 평행 조건으로{" "}
                    <InlineMath math="a" />를 구한 뒤,
                    두 직선의 계수를 같게 만든 다음
                    평행한 두 직선 사이의 거리 공식을 적용합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{평행}
                        \rightarrow
                        a
                        \rightarrow
                        \text{계수 맞추기}
                        \rightarrow
                        \text{거리 공식}
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    특히 <InlineMath math="a=-3" />에서는
                    두 직선이 완전히 일치하므로
                    거리도 <InlineMath math="0" />이 된다는 점을 확인해야 합니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 11 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 11
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                그림과 같이 좌표평면 위에 직선{" "}
                <InlineMath math="l_1:x-3y-3=0" />과 평행하고{" "}
                <InlineMath math="y" />절편이 양수인 직선{" "}
                <InlineMath math="l_2" />가 있다.
                직선 <InlineMath math="l_1" />이{" "}
                <InlineMath math="x" />축, <InlineMath math="y" />축과
                만나는 점을 각각 <InlineMath math="A,\ B" />라 하고,
                직선 <InlineMath math="l_2" />가{" "}
                <InlineMath math="x" />축, <InlineMath math="y" />축과
                만나는 점을 각각 <InlineMath math="C,\ D" />라 할 때,
                사각형 <InlineMath math="ADCB" />의 넓이가{" "}
                <InlineMath math="24" />이다.
                두 직선 <InlineMath math="l_1" />과{" "}
                <InlineMath math="l_2" /> 사이의 거리를{" "}
                <InlineMath math="d" />라 할 때,{" "}
                <InlineMath math="5d^2" />의 값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_11.png"
                alt="평행한 두 직선과 사각형 ADCB"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* l2 설정 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 평행한 직선 <InlineMath math="l_2" /> 나타내기
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l_2" />는{" "}
                    <InlineMath math="l_1:x-3y-3=0" />과 평행하므로
                </p>

                <BlockMath
                    math={String.raw`
                        l_2:x-3y+c=0
                    `}
                />

                <p className="leading-8">
                    로 둘 수 있습니다.
                </p>

                <p className="leading-8">
                    <InlineMath math="l_2" />의{" "}
                    <InlineMath math="y" />절편이 양수이므로{" "}
                    <InlineMath math="c>0" />입니다.
                </p>

            </div>

            {/* 절편 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 네 점의 좌표
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l_1:x-3y-3=0" />의 절편은
                </p>

                <BlockMath
                    math={String.raw`
                        A(3,0),\qquad B(0,-1)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l_2:x-3y+c=0" />의 절편은
                </p>

                <BlockMath
                    math={String.raw`
                        C(-c,0),\qquad
                        D\left(0,\frac{c}{3}\right)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>

            {/* 넓이 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 사각형 <InlineMath math="ADCB" />의 넓이
                </p>

                <p className="leading-8">
                    대각선 <InlineMath math="AC" />는{" "}
                    <InlineMath math="x" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
                        AC=3+c
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="D" />와{" "}
                    <InlineMath math="B" />에서{" "}
                    <InlineMath math="x" />축까지의 거리의 합은
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{c}{3}+1
                        =
                        \frac{c+3}{3}
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 사각형 <InlineMath math="ADCB" />의 넓이는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12(c+3)
                        \left(\frac{c+3}{3}\right)
                        =
                        \frac{(c+3)^2}{6}
                    `}
                />

                <p className="leading-8">
                    이고, 넓이가 <InlineMath math="24" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{(c+3)^2}{6}=24
                    `}
                />

                <BlockMath
                    math={String.raw`
                        (c+3)^2=144
                    `}
                />

            </div>

            {/* 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 평행한 두 직선 사이의 거리
                </p>

                <p className="leading-8">
                    두 직선
                </p>

                <BlockMath
                    math={String.raw`
                        x-3y-3=0,
                        \qquad
                        x-3y+c=0
                    `}
                />

                <p className="leading-8">
                    사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{|c-(-3)|}
                        {\sqrt{1^2+(-3)^2}}
                    `}
                />

                <p className="leading-8">
                    <InlineMath math="c>0" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{c+3}{\sqrt{10}}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        d^2
                        =
                        \frac{(c+3)^2}{10}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        5d^2
                        =
                        \frac{(c+3)^2}{2}
                    `}
                />

                <p className="leading-8">
                    앞에서 <InlineMath math="(c+3)^2=144" />이므로
                </p>

                <BlockMath
                    math={String.raw`
                        5d^2
                        =
                        \frac{144}{2}
                        =
                        72
                    `}
                />

            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{72}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    평행한 직선은{" "}
                    <InlineMath math="x,\ y" />의 계수를 그대로 두고
                    상수항만 바꾸어 나타냅니다.
                    사각형의 넓이에서{" "}
                    <InlineMath math="(c+3)^2" />을 구한 뒤,
                    평행한 두 직선 사이의 거리 공식에서도 같은{" "}
                    <InlineMath math="(c+3)^2" />이 나타나는 것을 이용하면{" "}
                    <InlineMath math="c" />를 직접 구할 필요가 없습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{넓이}
                        \rightarrow
                        (c+3)^2
                        \rightarrow
                        d^2
                        \rightarrow
                        5d^2
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 12 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 12
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            두 직선{" "}
            <InlineMath math="3x-4y+7=0" />,{" "}
            <InlineMath math="4x+3y+a=0" />이 이루는 각을 이등분하는
            직선이 점 <InlineMath math="(1,2)" />를 지날 때,
            모든 상수 <InlineMath math="a" />의 값의 합을 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <p className="leading-8">
                각의 이등분선 위의 점은
                <strong className="text-yellow-300">
                    {" "}두 직선까지의 거리가 같습니다.
                </strong>
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="(1,2)" />에서
                두 직선까지의 거리를 같게 놓습니다.
            </p>

            {/* 첫 번째 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 첫 번째 직선까지의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{
                        |3(1)-4(2)+7|
                        }{
                        \sqrt{3^2+(-4)^2}
                        }
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{|2|}{5}
                        =
                        \frac25
                    `}
                />

            </div>

            {/* 두 번째 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 두 번째 직선까지의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{
                        |4(1)+3(2)+a|
                        }{
                        \sqrt{4^2+3^2}
                        }
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{|a+10|}{5}
                    `}
                />

            </div>

            {/* 거리 같음 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 두 거리가 같은 조건
                </p>

                <BlockMath
                    math={String.raw`
                        \frac25
                        =
                        \frac{|a+10|}{5}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        |a+10|=2
                    `}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        a+10=2
                        \qquad\text{또는}\qquad
                        a+10=-2
                    `}
                />

                <BlockMath
                    math={String.raw`
                        a=-8
                        \qquad\text{또는}\qquad
                        a=-12
                    `}
                />

            </div>

            <p className="leading-8">
                따라서 모든 <InlineMath math="a" />의 값의 합은
            </p>

            <BlockMath
                math={String.raw`
                    -8+(-12)=-20
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{-20}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    두 직선이 이루는 각의 이등분선 위의 점은
                    두 직선까지의 거리가 같습니다.
                    따라서 점과 직선 사이의 거리 공식을 각각 작성한 뒤
                    두 거리를 같게 놓으면 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{각의 이등분선}
                        \rightarrow
                        \text{두 직선까지의 거리 같음}
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    이 문제에서는 두 직선의 계수 제곱합이 모두{" "}
                    <InlineMath math="25" />이므로 분모가 같아져
                    절댓값만 비교하면 됩니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 13 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 13
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            세 점{" "}
            <InlineMath math="A(-2,0),\ B(4,-2),\ C(6,4)" />
            를 꼭짓점으로 하는 삼각형{" "}
            <InlineMath math="ABC" />
            가 있다.
            이때 점 <InlineMath math="B" />와 삼각형{" "}
            <InlineMath math="ABC" />의 내심을 지나는 직선의 방정식이{" "}
            <InlineMath math="ax+y+b=0" />{" "}
            일 때,{" "}
            <InlineMath math="a+b" />의 값을 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 변의 방정식 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 점 B에서 만나는 두 변의 방정식
                </p>

                <BlockMath math="AB:x+3y+2=0" />

                <BlockMath math="BC:3x-y-14=0" />

            </div>

            {/* 각의 이등분선 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 내심은 각의 이등분선 위의 점
                </p>

                <p className="leading-8">
                    점 <InlineMath math="B" />와 내심을 지나는 직선은{" "}
                    <InlineMath math="\angle B" />의 이등분선입니다.
                </p>

                <p className="leading-8">
                    각의 이등분선 위의 점은
                    두 변까지의 거리가 같으므로
                </p>

                <BlockMath
                    math={String.raw`
                    \frac{|x+3y+2|}{\sqrt{10}}
                    =
                    \frac{|3x-y-14|}{\sqrt{10}}
                    `}
                />

                <p className="leading-8">
                    즉
                </p>

                <BlockMath
                    math={String.raw`
                    |x+3y+2|
                    =
                    |3x-y-14|
                    `}
                />

            </div>

            {/* 두 직선 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 두 각의 이등분선
                </p>

                <BlockMath
                    math={String.raw`
                    x+3y+2
                    =
                    3x-y-14
                    `}
                />

                <BlockMath
                    math={String.raw`
                    x-2y-8=0
                    `}
                />

                <p className="text-center text-gray-400">
                    또는
                </p>

                <BlockMath
                    math={String.raw`
                    x+3y+2
                    =
                    -(3x-y-14)
                    `}
                />

                <BlockMath
                    math={String.raw`
                    2x+y-6=0
                    `}
                />

            </div>

            {/* 선택 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 font-bold text-blue-300">
                    ④ 어느 직선이 내부의 각의 이등분선인가?
                </p>

                <p className="leading-8">
                    점 <InlineMath math="B(4,-2)" />를 대입하면
                </p>

                <BlockMath math="4-2(-2)-8=0" />

                <BlockMath math="2(4)+(-2)-6=0" />

                <p className="leading-8">
                    두 직선 모두 점 <InlineMath math="B" />를 지나므로
                    내부와 외부의 각의 이등분선입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(-2,0)" />를 대입하면
                </p>

                <BlockMath math="x-2y-8=-10" />

                <BlockMath math="2x+y-6=-10" />

                <p className="leading-8">
                    점 <InlineMath math="C(6,4)" />를 대입하면
                </p>

                <BlockMath math="x-2y-8=-10" />

                <BlockMath math="2x+y-6=10" />

                <p className="leading-8">
                    내부의 각의 이등분선은
                    두 꼭짓점 <InlineMath math="A,C" />가
                    <strong className="text-yellow-300">
                        같은 쪽
                    </strong>
                    에 있는 직선이므로
                </p>

                <BlockMath
                    math={String.raw`
                    2x+y-6=0
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>

            {/* 답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="leading-8">
                    직선을
                </p>

                <BlockMath
                    math={String.raw`
                    2x+y-6=0
                    `}
                />

                <p className="leading-8">
                    와 비교하면
                </p>

                <BlockMath
                    math={String.raw`
                    a=2,\qquad b=-6
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                    a+b=-4
                    `}
                />

                <BlockMath
                    math={String.raw`
                    \boxed{-4}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    내심은 세 각의 이등분선의 교점입니다.
                    따라서 점 <InlineMath math="B" />와 내심을 잇는 직선은{" "}
                    <InlineMath math="\angle B" />의 이등분선입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    또한 각의 이등분선은
                    두 변까지의 거리가 같은 점들의 자취이므로
                    거리 공식을 이용하여 쉽게 구할 수 있습니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 14 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 14
    </h3>

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            세 직선{" "}
            <InlineMath math="x+2y-6=0" />,{" "}
            <InlineMath math="2x-y-2=0" />,{" "}
            <InlineMath math="3x+y-3=0" />
            으로 둘러싸인 삼각형의 넓이를 구하시오.
        </p>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-6 text-gray-300">

            {/* 교점 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    먼저 세 직선의 교점을 구한다
                </p>

                <p className="leading-8">
                    첫 번째와 두 번째 직선의 교점은
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{cases}
                        x+2y-6=0\\
                        2x-y-2=0
                        \end{cases}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        A(2,2)
                    `}
                />

                <p className="leading-8">
                    두 번째와 세 번째 직선의 교점은
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{cases}
                        2x-y-2=0\\
                        3x+y-3=0
                        \end{cases}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        B(1,0)
                    `}
                />

                <p className="leading-8">
                    세 번째와 첫 번째 직선의 교점은
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{cases}
                        3x+y-3=0\\
                        x+2y-6=0
                        \end{cases}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        C(0,3)
                    `}
                />

            </div>

            {/* 풀이 1 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 text-xl font-bold text-white">
                    풀이 1. 점과 직선 사이의 거리 이용
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A,\ B" />는 모두 직선
                </p>

                <BlockMath
                    math={String.raw`
                        2x-y-2=0
                    `}
                />

                <p className="leading-8">
                    위에 있으므로 <InlineMath math="AB" />를 밑변으로 잡습니다.
                </p>

                <p className="leading-8">
                    먼저
                </p>

                <BlockMath
                    math={String.raw`
                        AB
                        =
                        \sqrt{(2-1)^2+(2-0)^2}
                        =
                        \sqrt5
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    높이는 점 <InlineMath math="C(0,3)" />에서
                    직선 <InlineMath math="2x-y-2=0" />까지의 거리이므로
                </p>

                <BlockMath
                    math={String.raw`
                        h
                        =
                        \frac{|2(0)-3-2|}
                        {\sqrt{2^2+(-1)^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac5{\sqrt5}
                        =
                        \sqrt5
                    `}
                />

                <p className="leading-8">
                    따라서 삼각형의 넓이는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12\times AB\times h
                        =
                        \frac12\times\sqrt5\times\sqrt5
                        =
                        \frac52
                    `}
                />

            </div>

            {/* 풀이 2 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 text-xl font-bold text-blue-300">
                    풀이 2. 한 꼭짓점을 원점으로 평행이동
                </p>

                <p className="leading-8 text-gray-300">
                    삼각형 전체를 평행이동해도 넓이는 변하지 않습니다.
                </p>

                <p className="leading-8 text-gray-300">
                    점 <InlineMath math="B(1,0)" />가 원점으로 오도록
                    왼쪽으로 <InlineMath math="1" />만큼 평행이동하면
                </p>

                <BlockMath
                    math={String.raw`
                        B(1,0)\rightarrow O(0,0)
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이고 나머지 두 점은
                </p>

                <BlockMath
                    math={String.raw`
                        A(2,2)\rightarrow A'(1,2)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        C(0,3)\rightarrow C'(-1,3)
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이 됩니다.
                </p>

                <p className="leading-8 text-gray-300">
                    한 꼭짓점이 원점인 삼각형의 넓이는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12
                        \left|
                        x_1y_2-x_2y_1
                        \right|
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12
                        \left|
                        1\cdot3-(-1)\cdot2
                        \right|
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac12|3+2|
                        =
                        \frac52
                    `}
                />

            </div>

            {/* 정답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{\frac52}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    직선으로 둘러싸인 삼각형의 넓이는
                    세 교점을 구한 뒤 여러 방법으로 계산할 수 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    한 변이 어떤 직선 위에 있으면
                    <strong> 점과 직선 사이의 거리</strong>를
                    높이로 사용하는 것이 편리하고,
                    좌표가 간단하면 한 꼭짓점을 원점으로 평행이동하여
                    넓이를 구하는 것도 편리합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{교점 3개}
                        \rightarrow
                        \begin{cases}
                        \text{밑변}\times\text{점과 직선 사이의 거리}\\
                        \text{한 점을 원점으로 평행이동}
                        \end{cases}
                    `}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 15 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 15
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                그림과 같이 세 점{" "}
                <InlineMath math="A(1,6),\ B(3,2),\ C(-2,0)" />을
                꼭짓점으로 하는 삼각형 <InlineMath math="ABC" />가 있다.
                변 <InlineMath math="AC" />가 <InlineMath math="y" />축과
                만나는 점 <InlineMath math="D" />를 지나고
                삼각형 <InlineMath math="ABC" />의 넓이를 이등분하는
                직선 <InlineMath math="l" />이 변 <InlineMath math="BC" />와
                만나는 점을 <InlineMath math="E" />라 할 때,
                원점에서 직선 <InlineMath math="l" /> 사이의 거리를{" "}
                <InlineMath math="\dfrac{a\sqrt{149}}{149}" />라 하자.
                이때 상수 <InlineMath math="a" />의 값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_15.png"
                alt="삼각형 ABC의 넓이를 이등분하는 직선 l"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* D */}
<div className="rounded-xl border border-white/10 bg-black/20 p-5">

    <p className="mb-4 font-bold text-white">
        ① 점 <InlineMath math="D" />의 위치
    </p>

    <p className="leading-8">
        점 <InlineMath math="D" />는
        선분 <InlineMath math="CA" />와{" "}
        <InlineMath math="y" />축이 만나는 점입니다.
    </p>

    <p className="leading-8">
        점 <InlineMath math="C(-2,0)" />에서
        점 <InlineMath math="A(1,6)" />로 갈 때,{" "}
        <InlineMath math="x" />좌표는
    </p>

    <BlockMath
        math={String.raw`
            -2 \rightarrow 0 \rightarrow 1
        `}
    />

    <p className="leading-8">
        이므로
    </p>

    <BlockMath
        math={String.raw`
            CD:DA=2:1
        `}
    />

    <p className="leading-8">
        입니다.
        따라서 점 <InlineMath math="D" />는
        선분 <InlineMath math="CA" />를{" "}
        <InlineMath math="2:1" />로 내분하는 점입니다.
    </p>

    <BlockMath
        math={String.raw`
            D
            =
            \left(
            \frac{1\cdot(-2)+2\cdot1}{2+1},
            \frac{1\cdot0+2\cdot6}{2+1}
            \right)
        `}
    />

    <BlockMath
        math={String.raw`
            D=(0,4)
        `}
    />

</div>

            {/* E 위치 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 font-bold text-blue-300">
                    ② 넓이를 이등분하는 점 <InlineMath math="E" />의 위치
                </p>

                <p className="leading-8">
                    삼각형 <InlineMath math="CDE" />와
                    삼각형 <InlineMath math="CBA" />는
                    점 <InlineMath math="C" />에서 같은 각을 가지므로
                    넓이의 비는 두 변의 길이의 비의 곱으로 나타낼 수 있습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{[CDE]}{[CBA]}
                        =
                        \frac{CD}{CA}
                        \cdot
                        \frac{CE}{CB}
                    `}
                />

                <p className="leading-8">
                    직선 <InlineMath math="l" />이
                    삼각형의 넓이를 이등분하므로
                </p>

                <BlockMath
                    math={String.raw`
                        \frac12
                        =
                        \frac23
                        \cdot
                        \frac{CE}{CB}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{CE}{CB}=\frac34
                    `}
                />

                <div className="mt-4 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">

                    <p className="text-center font-semibold text-yellow-200">
                        즉, <InlineMath math="E" />는{" "}
                        <InlineMath math="C" />에서{" "}
                        <InlineMath math="B" />로{" "}
                        <InlineMath math="\dfrac34" />만큼 간 점입니다.
                    </p>

                </div>

            </div>

            {/* E 좌표 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 점 <InlineMath math="E" />의 좌표
                </p>

                <p className="leading-8">
                    점{" "}
                    <InlineMath math="C(-2,0)" />에서{" "}
                    <InlineMath math="B(3,2)" />로 가는 변화량은
                </p>

                <BlockMath
                    math={String.raw`
                        (5,2)
                    `}
                />

                <p className="leading-8">
                    이므로 그 <InlineMath math="\dfrac34" />만큼 이동하면
                </p>

                <BlockMath
                    math={String.raw`
                        E
                        =
                        (-2,0)
                        +
                        \frac34(5,2)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        E
                        =
                        \left(
                        \frac74,\frac32
                        \right)
                    `}
                />

            </div>

            {/* 직선 l */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 직선 <InlineMath math="l" />의 방정식
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l" />은
                    두 점{" "}
                    <InlineMath math="D(0,4)" />와{" "}
                    <InlineMath math="E\left(\dfrac74,\dfrac32\right)" />를
                    지납니다.
                </p>

                <p className="leading-8">
                    기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{
                        \frac32-4
                        }{
                        \frac74-0
                        }
                        =
                        -\frac{10}{7}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        y-4=-\frac{10}{7}x
                    `}
                />

                <BlockMath
                    math={String.raw`
                        10x+7y-28=0
                    `}
                />

            </div>

            {/* 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ⑤ 원점과 직선 <InlineMath math="l" /> 사이의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{|10(0)+7(0)-28|}
                        {\sqrt{10^2+7^2}}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{28}{\sqrt{149}}
                    `}
                />

                <p className="leading-8">
                    분모를 유리화하면
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{28\sqrt{149}}{149}
                    `}
                />

            </div>

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    a=28
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{28}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    점 <InlineMath math="D" />는 변{" "}
                    <InlineMath math="AC" />의{" "}
                    <InlineMath math="\dfrac23" /> 지점에 있습니다.
                    따라서 넓이를 절반으로 만들기 위해서는
                    다른 변에서의 비를 이용하여
                </p>

                <BlockMath
                    math={String.raw`
                        \frac23
                        \times
                        \frac{CE}{CB}
                        =
                        \frac12
                    `}
                />

                <p className="leading-8 text-gray-300">
                    로 생각하면 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{CE}{CB}=\frac34
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    즉 복잡하게 삼각형의 넓이를 직접 계산하지 않고,
                    <strong>
                        {" "}변 위의 위치의 비만으로 넓이를 이등분하는 점을 바로 찾는 것
                    </strong>
                    이 이 문제의 핵심입니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 16 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 16
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                그림과 같이{" "}
                <InlineMath math="\overline{AB}=6,\ \overline{AD}=4" />인
                직사각형 <InlineMath math="ABCD" />가 있다.
                변 <InlineMath math="AB" />의 중점을 <InlineMath math="M" />,
                변 <InlineMath math="BC" />의 중점을 <InlineMath math="N" />이라 하고,
                직사각형 <InlineMath math="ABCD" />를 직선
                <InlineMath math="MN" />을 접는 선으로 하여 접었을 때
                점 <InlineMath math="B" />가 접힌 점을 <InlineMath math="E" />라 하자.
                점 <InlineMath math="D" />와 직선 <InlineMath math="EM" /> 사이의
                거리를 <InlineMath math="\dfrac{q}{p}" />라 할 때,<br/>
                <InlineMath math="q-p" />의 값을 구하시오.<br/>
                (단, 점 <InlineMath math="E" />는 직사각형{" "}
                <InlineMath math="ABCD" />의 내부에 있다.)
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.15_16.png"
                alt="직사각형 ABCD를 직선 MN을 따라 접은 그림"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 좌표 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 각 점의 좌표
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A" />를 원점으로 두면
                </p>

                <BlockMath
                    math={String.raw`
                        A(0,0),\quad
                        B(6,0),\quad
                        C(6,4),\quad
                        D(0,4)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    <InlineMath math="M,\ N" />은 각각{" "}
                    <InlineMath math="AB,\ BC" />의 중점이므로
                </p>

                <BlockMath
                    math={String.raw`
                        M(3,0),\qquad N(6,2)
                    `}
                />

            </div>

            {/* MN */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 접는 선 <InlineMath math="MN" />의 방정식
                </p>

                <p className="leading-8">
                    두 점 <InlineMath math="M(3,0)" />,{" "}
                    <InlineMath math="N(6,2)" />를 지나는 직선의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{2-0}{6-3}=\frac23
                    `}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
                        y=\frac23(x-3)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        2x-3y-6=0
                    `}
                />

            </div>

            {/* E */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-4 font-bold text-blue-300">
                    ③ 접힌 점 <InlineMath math="E" />의 좌표
                </p>

                <p className="leading-8">
                    점 <InlineMath math="B" />가 점 <InlineMath math="E" />로
                    접히므로 접는 선 <InlineMath math="MN" />은
                    선분 <InlineMath math="BE" />의
                    <strong className="text-yellow-300"> 수직이등분선</strong>입니다.
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="MN" />의 기울기가{" "}
                    <InlineMath math="\dfrac23" />이므로
                    직선 <InlineMath math="BE" />의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        -\frac32
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 점 <InlineMath math="B(6,0)" />를 지나는 직선{" "}
                    <InlineMath math="BE" />는
                </p>

                <BlockMath
                    math={String.raw`
                        y=-\frac32(x-6)
                    `}
                />

                <p className="leading-8">
                    이고, <InlineMath math="BE" />와{" "}
                    <InlineMath math="MN" />의 교점을 <InlineMath math="H" />라 하면{" "}
                    <InlineMath math="H" />는 <InlineMath math="BE" />의 중점입니다.
                </p>

                <p className="leading-8">
                    두 직선을 연립하면
                </p>

                <BlockMath
                    math={String.raw`
                        H\left(
                        \frac{66}{13},
                        \frac{18}{13}
                        \right)
                    `}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    <InlineMath math="H" />가{" "}
                    <InlineMath math="BE" />의 중점이므로
                </p>

                <BlockMath
                    math={String.raw`
                        E
                        =
                        \left(
                        2\cdot\frac{66}{13}-6,\,
                        2\cdot\frac{18}{13}
                        \right)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        E\left(
                        \frac{54}{13},
                        \frac{36}{13}
                        \right)
                    `}
                />

            </div>

            {/* EM */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 직선 <InlineMath math="EM" />의 방정식
                </p>

                <p className="leading-8">
                    두 점{" "}
                    <InlineMath math="M(3,0)" />과{" "}
                    <InlineMath math="E\left(\dfrac{54}{13},\dfrac{36}{13}\right)" />
                    를 지나는 직선의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{
                        \frac{36}{13}
                        }{
                        \frac{54}{13}-3
                        }
                        =
                        \frac{12}{5}
                    `}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        y=\frac{12}{5}(x-3)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        12x-5y-36=0
                    `}
                />

            </div>

            {/* 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ⑤ 점 <InlineMath math="D" />와 직선 <InlineMath math="EM" /> 사이의 거리
                </p>

                <p className="leading-8">
                    점 <InlineMath math="D(0,4)" />에서
                    직선 <InlineMath math="12x-5y-36=0" />까지의 거리는
                </p>

                <BlockMath
                    math={String.raw`
                        d
                        =
                        \frac{
                        |12(0)-5(4)-36|
                        }{
                        \sqrt{12^2+(-5)^2}
                        }
                    `}
                />

                <BlockMath
                    math={String.raw`
                        =
                        \frac{56}{13}
                    `}
                />

            </div>

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    p=13,\qquad q=56
                `}
            />

            <BlockMath
                math={String.raw`
                    q-p=56-13=43
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{43}
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="mb-3 font-bold text-yellow-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    도형을 직선 <InlineMath math="MN" />을 따라 접어
                    점 <InlineMath math="B" />가
                    점 <InlineMath math="E" />로 이동했다면
                </p>

                <BlockMath
                    math={String.raw`
                        MN\perp BE
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이고, 접는 선은 선분 <InlineMath math="BE" />를
                    정확히 반으로 나눕니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \text{접기}
                        \rightarrow
                        \text{수직이등분선}
                        \rightarrow
                        E
                        \rightarrow
                        EM
                        \rightarrow
                        \text{점과 직선 사이의 거리}
                    `}
                />

            </div>

        </div>

    </details>

</div>

    {/* 핵심 정리 */}
    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

        <h3 className="mb-5 text-2xl font-bold text-yellow-300">
            핵심 정리
        </h3>

        <div className="space-y-6">

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    ① 점과 직선 사이의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        d=
                        \frac{|a\alpha+b\beta+c|}
                        {\sqrt{a^2+b^2}}
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    <strong>직선의 식을 그대로 옮겨 쓰면서 점을 대입</strong>하고,
                    절댓값을 씌운 뒤
                    <InlineMath math="\sqrt{(x\text{계수})^2+(y\text{계수})^2}" />
                    로 나눕니다.
                </p>

            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    ② 평행한 두 직선 사이의 거리
                </p>

                <BlockMath
                    math={String.raw`
                        d=
                        \frac{|c-c'|}
                        {\sqrt{a^2+b^2}}
                    `}
                />

                <p className="mt-3 leading-8 text-gray-300">
                    먼저 두 직선의{" "}
                    <InlineMath math="x,\ y" />의 계수를 똑같이 맞춘 뒤,
                    <strong> 상수항의 차</strong>를 이용합니다.
                </p>

            </div>

            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                <p className="font-bold text-emerald-300">
                    문제를 풀 때
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    증명을 다시 하지 않습니다.
                    <strong className="text-white">
                        {" "}두 공식을 정확하게 암기하여 바로 식을 작성합니다.
                    </strong>
                </p>

            </div>

        </div>

    </div>
    </div>

</section>

        </>
    )
};