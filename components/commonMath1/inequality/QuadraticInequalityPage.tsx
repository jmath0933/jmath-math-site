"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

function QuadraticInequalityExplorer() {
    type SignType = ">" | ">=" | "<" | "<=";

    const [sign, setSign] = useState<SignType>(">");

    // true: a > 0, false: a < 0
    const [isPositiveA, setIsPositiveA] = useState(true);

    // -100 ~ 100을 그래프의 위아래 이동값으로 사용
    // 화면에는 구체적인 수치를 표시하지 않습니다.
    const [cValue, setCValue] = useState(-50);

    const a = isPositiveA ? 1 : -1;
    const c = cValue / 25;

    const isInclusive = sign === ">=" || sign === "<=";
    const isPositiveCondition = sign === ">" || sign === ">=";

    const signLatex: Record<SignType, string> = {
        ">": ">",
        ">=": "\\ge",
        "<": "<",
        "<=": "\\le",
    };

    /*
     * y = ax² + c
     *
     * 교점 조건:
     * ax² + c = 0
     * x² = -c/a
     */
    const rootSquare = -c / a;
    const epsilon = 0.0001;

    const hasTwoRoots = rootSquare > epsilon;
    const hasOneRoot = Math.abs(rootSquare) <= epsilon;
    const hasNoRoots = rootSquare < -epsilon;

    const root = hasTwoRoots ? Math.sqrt(rootSquare) : 0;

    /*
     * 현재 x가 부등식의 해인지 판단합니다.
     */
    const satisfiesInequality = (x: number) => {
        const y = a * x * x + c;

        switch (sign) {
            case ">":
                return y > 0;
            case ">=":
                return y >= 0;
            case "<":
                return y < 0;
            case "<=":
                return y <= 0;
        }
    };

    /*
     * 해의 구조를 문자열로 만듭니다.
     */
    const getSolution = (): {
        kind:
        | "inside"
        | "outside"
        | "all"
        | "none"
        | "single"
        | "exceptSingle";
        math?: string;
        text?: string;
    } => {
        if (hasTwoRoots) {
            const positiveIsOutside = a > 0;

            const solutionIsOutside = isPositiveCondition
                ? positiveIsOutside
                : !positiveIsOutside;

            if (solutionIsOutside) {
                return {
                    kind: "outside",
                    math: isInclusive
                        ? "x\\le\\alpha\\ \\text{또는}\\ x\\ge\\beta"
                        : "x<\\alpha\\ \\text{또는}\\ x>\\beta",
                };
            }

            return {
                kind: "inside",
                math: isInclusive
                    ? "\\alpha\\le x\\le\\beta"
                    : "\\alpha<x<\\beta",
            };
        }

        if (hasOneRoot) {
            if (a > 0) {
                if (sign === ">") {
                    return {
                        kind: "exceptSingle",
                        math: "x\\ne\\alpha",
                    };
                }

                if (sign === ">=") {
                    return {
                        kind: "all",
                        text: "모든 실수",
                    };
                }

                if (sign === "<") {
                    return {
                        kind: "none",
                        text: "해 없음",
                    };
                }

                return {
                    kind: "single",
                    math: "x=\\alpha",
                };
            }

            if (sign === ">") {
                return {
                    kind: "none",
                    text: "해 없음",
                };
            }

            if (sign === ">=") {
                return {
                    kind: "single",
                    math: "x=\\alpha",
                };
            }

            if (sign === "<") {
                return {
                    kind: "exceptSingle",
                    math: "x\\ne\\alpha",
                };
            }

            return {
                kind: "all",
                text: "모든 실수",
            };
        }

        /*
         * 교점이 없는 경우에는 그래프 전체가
         * x축 위 또는 아래에 있습니다.
         */
        const graphIsPositive = a > 0;

        if (isPositiveCondition === graphIsPositive) {
            return {
                kind: "all",
                text: "모든 실수",
            };
        }

        return {
            kind: "none",
            text: "해 없음",
        };
    };

    const solution = getSolution();

    /*
     * SVG 좌표 설정
     */
    const svgWidth = 800;
    const svgHeight = 520;

    const graphLeft = 70;
    const graphRight = 730;

    const graphTop = 35;
    const graphBottom = 335;

    const xAxisY = 190;
    const numberLineY = 430;

    const xMin = -4;
    const xMax = 4;

    const xScale =
        (graphRight - graphLeft) /
        (xMax - xMin);

    const yScale = 45;

    const toSvgX = (x: number) =>
        graphLeft + (x - xMin) * xScale;

    const toSvgY = (y: number) =>
        xAxisY - y * yScale;

    /*
     * 포물선 전체 경로
     */
    const pointCount = 280;

    const parabolaPoints = Array.from(
        { length: pointCount + 1 },
        (_, index) => {
            const x =
                xMin +
                ((xMax - xMin) * index) /
                pointCount;

            const y = a * x * x + c;

            return {
                x,
                y,
                svgX: toSvgX(x),
                svgY: toSvgY(y),
            };
        }
    );

    const fullParabolaPath = parabolaPoints
        .map((point, index) =>
            `${index === 0 ? "M" : "L"} ${point.svgX} ${point.svgY}`
        )
        .join(" ");

    /*
     * 해가 되는 부분만 여러 개의 SVG path로 나눕니다.
     */
    const highlightedPaths: string[] = [];

    let currentPath = "";

    parabolaPoints.forEach((point) => {
        const isSolution = satisfiesInequality(point.x);

        if (isSolution) {
            if (currentPath === "") {
                currentPath = `M ${point.svgX} ${point.svgY}`;
            } else {
                currentPath += ` L ${point.svgX} ${point.svgY}`;
            }
        } else if (currentPath !== "") {
            highlightedPaths.push(currentPath);
            currentPath = "";
        }
    });

    if (currentPath !== "") {
        highlightedPaths.push(currentPath);
    }

    /*
     * 교점 표시
     */
    const rootPoints = hasTwoRoots
        ? [
            {
                x: -root,
                label: "\\alpha",
            },
            {
                x: root,
                label: "\\beta",
            },
        ]
        : hasOneRoot
            ? [
                {
                    x: 0,
                    label: "\\alpha",
                },
            ]
            : [];

    const solutionColor = "#22d3ee";
    const inactiveColor = "#64748b";
    const backgroundColor = "#111827";

    const renderBoundaryPoint = (
        x: number,
        y: number,
        key: string
    ) => (
        <circle
            key={key}
            cx={x}
            cy={y}
            r={7}
            fill={
                isInclusive
                    ? solutionColor
                    : backgroundColor
            }
            stroke={solutionColor}
            strokeWidth={3}
        />
    );

    /*
     * 수직선의 해 부분
     */
    const numberLineStart = graphLeft;
    const numberLineEnd = graphRight;

    const alphaX = hasTwoRoots
        ? toSvgX(-root)
        : toSvgX(0);

    const betaX = hasTwoRoots
        ? toSvgX(root)
        : toSvgX(0);

    const renderNumberLineSolution = () => {
        switch (solution.kind) {
            case "inside":
                return (
                    <line
                        x1={alphaX}
                        y1={numberLineY}
                        x2={betaX}
                        y2={numberLineY}
                        stroke={solutionColor}
                        strokeWidth={7}
                        strokeLinecap="round"
                    />
                );

            case "outside":
                return (
                    <>
                        <line
                            x1={numberLineStart}
                            y1={numberLineY}
                            x2={alphaX}
                            y2={numberLineY}
                            stroke={solutionColor}
                            strokeWidth={7}
                            strokeLinecap="round"
                        />

                        <line
                            x1={betaX}
                            y1={numberLineY}
                            x2={numberLineEnd}
                            y2={numberLineY}
                            stroke={solutionColor}
                            strokeWidth={7}
                            strokeLinecap="round"
                        />
                    </>
                );

            case "all":
                return (
                    <line
                        x1={numberLineStart}
                        y1={numberLineY}
                        x2={numberLineEnd}
                        y2={numberLineY}
                        stroke={solutionColor}
                        strokeWidth={7}
                        strokeLinecap="round"
                    />
                );

            case "single":
                return (
                    <circle
                        cx={alphaX}
                        cy={numberLineY}
                        r={8}
                        fill={solutionColor}
                    />
                );

            case "exceptSingle":
                return (
                    <>
                        <line
                            x1={numberLineStart}
                            y1={numberLineY}
                            x2={alphaX - 8}
                            y2={numberLineY}
                            stroke={solutionColor}
                            strokeWidth={7}
                            strokeLinecap="round"
                        />

                        <line
                            x1={alphaX + 8}
                            y1={numberLineY}
                            x2={numberLineEnd}
                            y2={numberLineY}
                            stroke={solutionColor}
                            strokeWidth={7}
                            strokeLinecap="round"
                        />

                        <circle
                            cx={alphaX}
                            cy={numberLineY}
                            r={7}
                            fill={backgroundColor}
                            stroke={solutionColor}
                            strokeWidth={3}
                        />
                    </>
                );

            case "none":
                return null;
        }
    };

    return (
        <div className="mt-8 rounded-2xl border border-white/20 bg-black/30 p-6">
            <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">
                    직접 움직여보기
                </h3>
            </div>

            {/* 현재 부등식과 해 */}
            <div className="mb-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-black/40 p-5">
                    <p className="mb-3 text-xl text-gray-400">
                        현재 부등식
                    </p>

                    <div className="text-xl font-bold text-white">
                        <InlineMath
                            math={`ax^2+bx+c${signLatex[sign]}0`}
                        />
                    </div>
                </div>

                <div className="rounded-xl bg-black/40 p-5">
                    <p className="mb-3 text-xl text-gray-400">
                        해
                    </p>

                    <div className="text-xl font-bold text-cyan-300">
                        {solution.math ? (
                            <InlineMath math={solution.math} />
                        ) : (
                            solution.text
                        )}
                    </div>
                </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
                {/* 왼쪽 조작 영역 */}
                <div className="grid gap-6 sm:grid-cols-[1fr_120px]">

                    {/* 부등호 + 그래프의 모양 */}
                    <div className="space-y-8">

                        {/* 부등호 */}
                        <div>
                            <p className="mb-3 font-semibold text-white">
                                부등호
                            </p>

                            <div className="grid grid-cols-2 gap-2">
                                {(
                                    [
                                        ">",
                                        ">=",
                                        "<",
                                        "<=",
                                    ] as SignType[]
                                ).map((item) => (
                                    <button
                                        key={item}
                                        type="button"
                                        onClick={() => setSign(item)}
                                        className={`rounded-lg border px-4 py-3 text-lg font-semibold transition ${sign === item
                                            ? "border-cyan-400 bg-cyan-500/20 text-cyan-300"
                                            : "border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
                                            }`}
                                    >
                                        <InlineMath math={signLatex[item]} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* a의 부호 */}
                        <div>
                            <p className="mb-3 font-semibold text-white">
                                그래프의 모양
                            </p>

                            <div className="space-y-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPositiveA(true)}
                                    className={`w-full rounded-lg border px-4 py-3 text-left transition ${isPositiveA
                                        ? "border-cyan-400 bg-cyan-500/20"
                                        : "border-white/20 bg-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    <p className="font-semibold text-white">
                                        <InlineMath math="a>0" />
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        아래로 볼록
                                    </p>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsPositiveA(false)}
                                    className={`w-full rounded-lg border px-4 py-3 text-left transition ${!isPositiveA
                                        ? "border-cyan-400 bg-cyan-500/20"
                                        : "border-white/20 bg-white/5 hover:bg-white/10"
                                        }`}
                                >
                                    <p className="font-semibold text-white">
                                        <InlineMath math="a<0" />
                                    </p>

                                    <p className="mt-1 text-sm text-gray-400">
                                        위로 볼록
                                    </p>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* 그래프 이동 */}
                    <div>
                        <p className="mb-3 text-center font-semibold text-white">
                            그래프 이동
                        </p>

                        <div className="flex h-full min-h-[300px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
                            <input
                                type="range"
                                min={-70}
                                max={70}
                                step={1}
                                value={cValue}
                                onChange={(event) =>
                                    setCValue(Number(event.target.value))
                                }
                                aria-label="이차함수 위아래 이동"
                                className="h-2 w-72 cursor-pointer accent-cyan-400"
                                style={{
                                    transform: "rotate(-90deg)",
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* 그래프 */}
                <div className="rounded-2xl border border-white/10 bg-[#111827] p-4 sm:p-6">
                    <svg
                        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                        className="h-auto w-full"
                        role="img"
                        aria-label="이차함수 그래프와 부등식의 해"
                    >
                        <defs>
                            <clipPath id="quadraticGraphClip">
                                <rect
                                    x={graphLeft}
                                    y={graphTop}
                                    width={
                                        graphRight -
                                        graphLeft
                                    }
                                    height={
                                        graphBottom -
                                        graphTop
                                    }
                                />
                            </clipPath>
                        </defs>

                        {/* x축 */}
                        <line
                            x1={graphLeft}
                            y1={xAxisY}
                            x2={graphRight}
                            y2={xAxisY}
                            stroke="#94a3b8"
                            strokeWidth={2}
                        />

                        {/* x축 화살표 */}
                        <path
                            d={`M ${graphRight} ${xAxisY}
                                L ${graphRight - 12} ${xAxisY - 7}
                                L ${graphRight - 12} ${xAxisY + 7}
                                Z`}
                            fill="#94a3b8"
                        />

                        {/* 전체 포물선 */}
                        <path
                            d={fullParabolaPath}
                            fill="none"
                            stroke={inactiveColor}
                            strokeWidth={4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            clipPath="url(#quadraticGraphClip)"
                        />

                        {/* 해가 되는 포물선 부분 */}
                        {highlightedPaths.map(
                            (path, index) => (
                                <path
                                    key={`highlight-${index}`}
                                    d={path}
                                    fill="none"
                                    stroke={solutionColor}
                                    strokeWidth={7}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    clipPath="url(#quadraticGraphClip)"
                                />
                            )
                        )}

                        {/* 그래프 위 교점 */}
                        {rootPoints.map((point) => {
                            const pointX = toSvgX(
                                point.x
                            );

                            return (
                                <g
                                    key={`graph-root-${point.label}`}
                                >
                                    {renderBoundaryPoint(
                                        pointX,
                                        xAxisY,
                                        `circle-${point.label}`
                                    )}

                                    <foreignObject
                                        x={pointX - 28}
                                        y={xAxisY + 12}
                                        width={56}
                                        height={46}
                                    >
                                        <div className="text-center text-4xl font-semibold text-white">
                                            <InlineMath
                                                math={
                                                    point.label
                                                }
                                            />
                                        </div>
                                    </foreignObject>
                                </g>
                            );
                        })}

                        {/* 수직선 기본선 */}
                        <line
                            x1={numberLineStart}
                            y1={numberLineY}
                            x2={numberLineEnd}
                            y2={numberLineY}
                            stroke="#475569"
                            strokeWidth={4}
                            strokeLinecap="round"
                        />

                        {/* 수직선의 해 */}
                        {renderNumberLineSolution()}

                        {/* 수직선의 경계점 */}
                        {hasTwoRoots &&
                            rootPoints.map(
                                (point) => {
                                    const pointX =
                                        toSvgX(
                                            point.x
                                        );

                                    return (
                                        <g
                                            key={`number-root-${point.label}`}
                                        >
                                            {renderBoundaryPoint(
                                                pointX,
                                                numberLineY,
                                                `number-circle-${point.label}`
                                            )}

                                            <foreignObject
                                                x={
                                                    pointX -
                                                    28
                                                }
                                                y={
                                                    numberLineY +
                                                    13
                                                }
                                                width={56}
                                                height={46}
                                            >
                                                <div className="text-center text-4xl font-semibold text-white">
                                                    <InlineMath
                                                        math={
                                                            point.label
                                                        }
                                                    />
                                                </div>
                                            </foreignObject>
                                        </g>
                                    );
                                }
                            )}

                        {/* 중근 수직선 표시 */}
                        {hasOneRoot &&
                            solution.kind !==
                            "exceptSingle" && (
                                <g>
                                    {solution.kind ===
                                        "single"
                                        ? renderBoundaryPoint(
                                            alphaX,
                                            numberLineY,
                                            "single-number-root"
                                        )
                                        : null}

                                    <foreignObject
                                        x={alphaX - 28}
                                        y={
                                            numberLineY +
                                            13
                                        }
                                        width={56}
                                        height={46}
                                    >
                                        <div className="text-center text-4xl font-semibold text-white">
                                            <InlineMath math="\alpha" />
                                        </div>
                                    </foreignObject>
                                </g>
                            )}

                        {/* 해 없음 표시 */}
                        {solution.kind ===
                            "none" && (
                                <foreignObject
                                    x={svgWidth / 2 - 80}
                                    y={numberLineY - 45}
                                    width={160}
                                    height={50}
                                >
                                    <div className="text-center text-4xl font-bold text-gray-400">
                                        해 없음
                                    </div>
                                </foreignObject>
                            )}

                        {/* 모든 실수 표시 */}
                        {solution.kind ===
                            "all" && (
                                <foreignObject
                                    x={svgWidth / 2 - 80}
                                    y={numberLineY - 45}
                                    width={160}
                                    height={36}
                                >
                                    <div className="text-center text-4xl font-semibold text-cyan-300">
                                        모든 실수
                                    </div>
                                </foreignObject>
                            )}
                    </svg>
                </div>
            </div>
        </div>
    );
};

type AbsoluteCondition =
    | "positive"
    | "nonNegative"
    | "negative"
    | "nonPositive";

type GraphItem = {
    id: number;
    type: GraphType;
    title: string;
    coeff: string;
    matches: AbsoluteCondition[];
};

type GraphType =
    | "up-no-root"
    | "up-touch"
    | "up-two-roots"
    | "down-two-roots"
    | "down-touch"
    | "down-no-root"
    | "linear-up"
    | "linear-down"
    | "constant-positive"
    | "constant-zero"
    | "constant-negative";

function GraphThumbnail({
    type,
    selected,
}: {
    type: GraphType;
    selected: boolean;
}) {
    const width = 110;
    const height = 100;
    const axisY = 50;

    const activeColor = "#22d3ee";
    const normalColor = "#e5e7eb";
    const axisColor = "#64748b";

    const graphColor = selected ? activeColor : normalColor;

    const renderGraph = () => {
        switch (type) {
            /*
             * a > 0 : 아래로 볼록
             */

            // D < 0 : x축과 만나지 않고 전체가 x축 위
            case "up-no-root":
                return (
                    <path
                        d="M 12 8 Q 55 62 98 8"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            // D = 0 : x축에 한 점에서 접함
            case "up-touch":
                return (
                    <path
                        d="M 12 5 Q 55 95 98 5"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            // D > 0 : x축과 서로 다른 두 점에서 만남
            case "up-two-roots":
                return (
                    <path
                        d="M 12 5 Q 55 120 98 5"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            /*
             * a < 0 : 위로 볼록
             */

            // D > 0 : x축과 서로 다른 두 점에서 만남
            case "down-two-roots":
                return (
                    <path
                        d="M 12 95 Q 55 -20 98 95"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            // D = 0 : x축에 한 점에서 접함
            case "down-touch":
                return (
                    <path
                        d="M 12 95 Q 55 5 98 95"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            // D < 0 : x축과 만나지 않고 전체가 x축 아래
            case "down-no-root":
                return (
                    <path
                        d="M 12 92 Q 55 38 98 92"
                        fill="none"
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            case "linear-up":
                return (
                    <line
                        x1={15}
                        y1={82}
                        x2={95}
                        y2={18}
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            case "linear-down":
                return (
                    <line
                        x1={15}
                        y1={18}
                        x2={95}
                        y2={82}
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            case "constant-positive":
                return (
                    <line
                        x1={15}
                        y1={25}
                        x2={95}
                        y2={25}
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );

            case "constant-zero":
                return (
                    <line
                        x1={15}
                        y1={axisY}
                        x2={95}
                        y2={axisY}
                        stroke={graphColor}
                        strokeWidth={5}
                        strokeLinecap="round"
                    />
                );

            case "constant-negative":
                return (
                    <line
                        x1={15}
                        y1={75}
                        x2={95}
                        y2={75}
                        stroke={graphColor}
                        strokeWidth={4}
                        strokeLinecap="round"
                    />
                );
        }
    };

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-20 w-20"
            aria-hidden="true"
        >
            <line
                x1={5}
                y1={axisY}
                x2={105}
                y2={axisY}
                stroke={axisColor}
                strokeWidth={2}
            />

            {renderGraph()}
        </svg>
    );
};

function QuadraticGraphTypeExplorer() {

    // 선택된 그래프(11개)
    const [selectedGraph, setSelectedGraph] =
        useState<number | null>(null);

    // 선택된 절대부등식
    const [selectedCondition, setSelectedCondition] =
        useState<AbsoluteCondition | null>(null);

    const graphTypes: GraphItem[] = [
        {
            id: 0,
            type: "up-no-root",
            title: "아래로 볼록, 교점 없음",
            coeff: "a>0,\\quad D<0",
            matches: ["positive", "nonNegative"],
        },
        {
            id: 1,
            type: "up-touch",
            title: "아래로 볼록, 한 점에서 접함",
            coeff: "a>0,\\quad D=0",
            matches: ["nonNegative"],
        },
        {
            id: 2,
            type: "up-two-roots",
            title: "아래로 볼록, 서로 다른 두 교점",
            coeff: "a>0,\\quad D>0",
            matches: [],
        },
        {
            id: 3,
            type: "down-two-roots",
            title: "위로 볼록, 서로 다른 두 교점",
            coeff: "a<0,\\quad D>0",
            matches: [],
        },
        {
            id: 4,
            type: "down-touch",
            title: "위로 볼록, 한 점에서 접함",
            coeff: "a<0,\\quad D=0",
            matches: ["nonPositive"],
        },
        {
            id: 5,
            type: "down-no-root",
            title: "위로 볼록, 교점 없음",
            coeff: "a<0,\\quad D<0",
            matches: ["negative", "nonPositive"],
        },
        {
            id: 6,
            type: "linear-up",
            title: "오른쪽 위로 향하는 직선",
            coeff: "a=0,\\quad b>0",
            matches: [],
        },
        {
            id: 7,
            type: "linear-down",
            title: "오른쪽 아래로 향하는 직선",
            coeff: "a=0,\\quad b<0",
            matches: [],
        },
        {
            id: 8,
            type: "constant-positive",
            title: "x축 위의 상수함수",
            coeff: "a=0,\\quad b=0,\\quad c>0",
            matches: ["positive", "nonNegative"],
        },
        {
            id: 9,
            type: "constant-zero",
            title: "x축",
            coeff: "a=0,\\quad b=0,\\quad c=0",
            matches: ["nonNegative", "nonPositive"],
        },
        {
            id: 10,
            type: "constant-negative",
            title: "x축 아래의 상수함수",
            coeff: "a=0,\\quad b=0,\\quad c<0",
            matches: ["negative", "nonPositive"],
        },
    ];

    const conditionInfo = {
        positive: {
            title: "항상 >0",
            expression: "ax^2+bx+c>0",
            formulas: [
                "a>0,\\;D<0",
                "a=0,\\;b=0,\\;c>0"
            ]
        },

        nonNegative: {
            title: "항상 ≥0",
            expression: "ax^2+bx+c\\ge0",
            formulas: [
                "a>0,\\;D\\le0",
                "a=0,\\;b=0,\\;c\\ge0"
            ]
        },

        negative: {
            title: "항상 <0",
            expression: "ax^2+bx+c<0",
            formulas: [
                "a<0,\\;D<0",
                "a=0,\\;b=0,\\;c<0"
            ]
        },

        nonPositive: {
            title: "항상 ≤0",
            expression: "ax^2+bx+c\\le0",
            formulas: [
                "a<0,\\;D\\le0",
                "a=0,\\;b=0,\\;c\\le0"
            ]
        }
    };

    return (

        <div className="space-y-8">

            {/* 11개 그래프 */}

            <div className="overflow-x-auto pb-3">
                <div className="flex min-w-max items-end gap-1">
                    {graphTypes.map((graph) => {
                        const isMatched =
                            !selectedCondition ||
                            graph.matches.includes(selectedCondition);

                        const isSelected =
                            selectedGraph === graph.id;

                        return (
                            <button
                                key={graph.id}
                                type="button"
                                onClick={() =>
                                    setSelectedGraph(
                                        isSelected ? null : graph.id
                                    )
                                }
                                className={`w-16 shrink-0 rounded-xl border p-1 transition ${isSelected
                                    ? "border-cyan-400 bg-cyan-500/10"
                                    : "border-white/15 bg-white/[0.03]"
                                    } ${isMatched
                                        ? "opacity-100"
                                        : "pointer-events-none opacity-10"
                                    }`}
                            >
                                <div className="flex justify-center">
                                    <GraphThumbnail
                                        type={graph.type}
                                        selected={isSelected}
                                    />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>


            {/* 그래프 클릭시 */}

            <div className="rounded-xl border border-white/15 bg-white/[0.03] p-5">
                {selectedGraph === null ? (
                    <p className="text-center text-gray-500">
                        그래프를 클릭하면 계수의 조건이 표시됩니다.
                    </p>
                ) : (
                    <div className="text-center">
                        <p className="mb-3 text-gray-300">
                            {graphTypes[selectedGraph].title}
                        </p>

                        <BlockMath
                            math={graphTypes[selectedGraph].coeff}
                        />
                    </div>
                )}
            </div>


            {/* 절대부등식 버튼 */}

            <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">

                {Object.entries(conditionInfo).map(
                    ([key, value]) => {

                        const selected =
                            selectedCondition === key;

                        return (

                            <button

                                key={key}

                                onClick={() => {

                                    setSelectedCondition(

                                        selected
                                            ? null
                                            : (key as any)

                                    );

                                }}

                                className="
                        rounded-xl
                        border
                        border-white/15
                        p-5
                        min-h-[130px]
                        "

                            >

                                {!selected ?

                                    <div>

                                        <p className="text-xl font-bold text-white">

                                            {value.title}

                                        </p>

                                        <p className="mt-3 text-sm text-gray-400">

                                            <InlineMath math={value.expression} />

                                        </p>

                                    </div>

                                    :

                                    <div className="space-y-2">

                                        <BlockMath
                                            math={value.formulas[0]}
                                        />

                                        <p className="text-center text-gray-500">

                                            또는

                                        </p>

                                        <BlockMath
                                            math={value.formulas[1]}
                                        />

                                    </div>

                                }

                            </button>

                        );

                    })}

            </div>

        </div>

    );

};

type InequalityOperator = ">" | ">=" | "<" | "<=";

function QuadraticRelationExplorer() {
    const [a, setA] = useState(-0.4);
    const [b, setB] = useState(0.6);
    const [c, setC] = useState(0.7);

    const [operator, setOperator] =
        useState<InequalityOperator>("<");

    const graphWidth = 620;
    const graphHeight = 480;

    const xMin = -6;
    const xMax = 7;

    /*
     * 그래프가 슬라이더 변화에 따라 화면 밖으로 지나치게 벗어나지 않도록
     * y축 범위를 넉넉하게 잡습니다.
     */
    const yMin = -18;
    const yMax = 24;

    const rootAlpha = -2;
    const rootBeta = 3;

    /*
     * 좌변:
     * (1+a)x² + (-1+b)x + (-6+c)
     */
    const leftFunction = (x: number) =>
        (1 + a) * x * x +
        (-1 + b) * x +
        (-6 + c);

    /*
     * 우변:
     * ax² + bx + c
     */
    const rightFunction = (x: number) =>
        a * x * x + b * x + c;

    /*
     * 두 함수의 차이는 슬라이더와 관계없이 항상
     * x² - x - 6입니다.
     */
    const differenceFunction = (x: number) =>
        leftFunction(x) - rightFunction(x);

    const toSvgX = (x: number) =>
        ((x - xMin) / (xMax - xMin)) * graphWidth;

    const toSvgY = (y: number) =>
        graphHeight -
        ((y - yMin) / (yMax - yMin)) * graphHeight;

    const makePath = (
        fn: (x: number) => number,
        startX = xMin,
        endX = xMax,
        steps = 300
    ) => {
        const commands: string[] = [];

        for (let i = 0; i <= steps; i++) {
            const x =
                startX +
                ((endX - startX) * i) / steps;

            const y = fn(x);

            const svgX = toSvgX(x);
            const svgY = toSvgY(y);

            commands.push(
                `${i === 0 ? "M" : "L"} ${svgX} ${svgY}`
            );
        }

        return commands.join(" ");
    };

    const leftPath = makePath(leftFunction);
    const rightPath = makePath(rightFunction);

    const alphaSvgX = toSvgX(rootAlpha);
    const betaSvgX = toSvgX(rootBeta);

    const alphaY = leftFunction(rootAlpha);
    const betaY = leftFunction(rootBeta);

    const alphaSvgY = toSvgY(alphaY);
    const betaSvgY = toSvgY(betaY);

    const xAxisY = toSvgY(0);
    const yAxisX = toSvgX(0);

    const includesBoundary =
        operator === ">=" || operator === "<=";

    const solutionIsInside =
        operator === "<" || operator === "<=";

    const solutionText = (() => {
        switch (operator) {
            case "<":
                return "-2<x<3";

            case "<=":
                return "-2\\le x\\le3";

            case ">":
                return "x<-2\\quad\\text{또는}\\quad x>3";

            case ">=":
                return "x\\le-2\\quad\\text{또는}\\quad x\\ge3";
        }
    })();

    const operatorLatex = (() => {
        switch (operator) {
            case ">":
                return ">";

            case ">=":
                return "\\ge";

            case "<":
                return "<";

            case "<=":
                return "\\le";
        }
    })();

    const formatNumber = (value: number) => {
        const rounded = Math.round(value * 10) / 10;

        if (Object.is(rounded, -0)) {
            return "0";
        }

        return Number.isInteger(rounded)
            ? rounded.toFixed(0)
            : rounded.toFixed(1);
    };

    const signedTerm = (
        value: number,
        variable = ""
    ) => {
        const rounded = Math.round(value * 10) / 10;

        if (Math.abs(rounded) < 0.0001) {
            return "";
        }

        const sign = rounded > 0 ? "+" : "-";
        const absolute = Math.abs(rounded);

        const coefficient =
            variable && absolute === 1
                ? ""
                : formatNumber(absolute);

        return `${sign}${coefficient}${variable}`;
    };

    const buildQuadraticExpression = (
        quadratic: number,
        linear: number,
        constant: number
    ) => {
        const parts: string[] = [];

        if (Math.abs(quadratic) >= 0.0001) {
            if (quadratic === 1) {
                parts.push("x^2");
            } else if (quadratic === -1) {
                parts.push("-x^2");
            } else {
                parts.push(
                    `${formatNumber(quadratic)}x^2`
                );
            }
        }

        const linearTerm = signedTerm(linear, "x");

        if (linearTerm) {
            if (parts.length === 0) {
                parts.push(
                    linearTerm.startsWith("+")
                        ? linearTerm.slice(1)
                        : linearTerm
                );
            } else {
                parts.push(linearTerm);
            }
        }

        const constantTerm = signedTerm(constant);

        if (constantTerm) {
            if (parts.length === 0) {
                parts.push(
                    constantTerm.startsWith("+")
                        ? constantTerm.slice(1)
                        : constantTerm
                );
            } else {
                parts.push(constantTerm);
            }
        }

        return parts.length > 0
            ? parts.join("")
            : "0";
    };

    const leftExpression =
        buildQuadraticExpression(
            1 + a,
            -1 + b,
            -6 + c
        );

    const rightExpression =
        buildQuadraticExpression(a, b, c);

    const reset = () => {
        setA(-0.0);
        setB(0.0);
        setC(0.0);
        setOperator("<");
    };

    const inequalityButtons: {
        value: InequalityOperator;
        label: string;
    }[] = [
            { value: ">", label: ">" },
            { value: ">=", label: "≥" },
            { value: "<", label: "<" },
            { value: "<=", label: "≤" },
        ];

    const gridXValues = Array.from(
        { length: xMax - xMin + 1 },
        (_, index) => xMin + index
    );

    const gridYValues = Array.from(
        { length: 15 },
        (_, index) => -18 + index * 3
    );

    return (
        <div className="rounded-2xl border border-blue-500/30 bg-[#030812] p-5 sm:p-7">
            <h3 className="text-2xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mt-3 leading-8 text-gray-300">
                슬라이더를 움직이면 양변의 그래프가 함께
                변합니다. 그래프의 모양은 달라지지만 교점의 <InlineMath math="x" />좌표와 위아래 관계는
                변하지 않습니다.
            </p>

            {/* 부등호 선택과 현재 부등식 */}
            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.04] p-4">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="mr-2 font-semibold text-white">
                        부등호
                    </span>

                    {inequalityButtons.map((item) => {
                        const isSelected =
                            operator === item.value;

                        return (
                            <button
                                key={item.value}
                                type="button"
                                onClick={() =>
                                    setOperator(item.value)
                                }
                                className={`h-12 min-w-16 rounded-lg border px-5 text-xl transition ${isSelected
                                    ? "border-cyan-400 bg-cyan-500/15 text-cyan-300"
                                    : "border-white/15 bg-black/30 text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                {item.label}
                            </button>
                        );
                    })}
                </div>

                <div className="mt-5 overflow-x-auto text-center">
                    <BlockMath
                        math={`${leftExpression}${operatorLatex}${rightExpression}`}
                    />
                </div>
            </div>

            {/* 좌변 함수와 우변 함수 */}
            <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <p className="font-bold text-red-300">
                        좌변 함수
                    </p>

                    <div className="mt-3 overflow-x-auto text-center">
                        <BlockMath math={`y=${leftExpression}`} />
                    </div>
                </div>

                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                    <p className="font-bold text-green-300">
                        우변 함수
                    </p>

                    <div className="mt-3 overflow-x-auto text-center">
                        <BlockMath math={`y=${rightExpression}`} />
                    </div>
                </div>
            </div>

            <div className="mt-5 grid items-start gap-5 lg:grid-cols-[300px_minmax(0,1fr)]">
                {/* 왼쪽 조절 영역 */}
                <div className="space-y-5">

                    <div className="rounded-xl border border-white/10 bg-white/[0.05] p-5">
                        <h4 className="mb-5 text-lg font-bold text-white">
                            우변 함수 조절
                        </h4>

                        <div className="space-y-6">
                            <label className="grid grid-cols-[90px_1fr] items-center gap-4">
                                <span className="font-semibold text-blue-300">
                                    <InlineMath
                                        math={`a=${formatNumber(a)}`}
                                    />
                                </span>

                                <input
                                    type="range"
                                    min="-1.5"
                                    max="1.5"
                                    step="0.1"
                                    value={a}
                                    onChange={(event) =>
                                        setA(
                                            Number(
                                                event.target
                                                    .value
                                            )
                                        )
                                    }
                                    className="w-full accent-blue-500"
                                />
                            </label>

                            <label className="grid grid-cols-[90px_1fr] items-center gap-4">
                                <span className="font-semibold text-green-300">
                                    <InlineMath
                                        math={`b=${formatNumber(b)}`}
                                    />
                                </span>

                                <input
                                    type="range"
                                    min="-4"
                                    max="4"
                                    step="0.1"
                                    value={b}
                                    onChange={(event) =>
                                        setB(
                                            Number(
                                                event.target
                                                    .value
                                            )
                                        )
                                    }
                                    className="w-full accent-green-500"
                                />
                            </label>

                            <label className="grid grid-cols-[90px_1fr] items-center gap-4">
                                <span className="font-semibold text-purple-300">
                                    <InlineMath
                                        math={`c=${formatNumber(c)}`}
                                    />
                                </span>

                                <input
                                    type="range"
                                    min="-6"
                                    max="6"
                                    step="0.1"
                                    value={c}
                                    onChange={(event) =>
                                        setC(
                                            Number(
                                                event.target
                                                    .value
                                            )
                                        )
                                    }
                                    className="w-full accent-purple-500"
                                />
                            </label>
                        </div>

                        <button
                            type="button"
                            onClick={reset}
                            className="mt-6 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/10"
                        >
                            초기화
                        </button>
                    </div>

                    {/* 해의 범위 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="text-lg font-bold text-yellow-300">
                            해의 범위
                        </p>

                        <div className="mt-3 overflow-x-auto text-center">
                            <BlockMath math={solutionText} />
                        </div>
                    </div>

                </div>

                {/* 그래프 */}
                <div className="min-w-0 overflow-hidden rounded-xl border border-white/10 bg-[#050a13]">
                    <svg
                        viewBox={`0 0 ${graphWidth} ${graphHeight}`}
                        className="h-auto w-full"
                        role="img"
                        aria-label="좌변 함수와 우변 함수의 위치관계 그래프"
                    >
                        <defs>
                            <clipPath id="quadratic-relation-clip">
                                <rect
                                    x="0"
                                    y="0"
                                    width={graphWidth}
                                    height={graphHeight}
                                />
                            </clipPath>
                        </defs>

                        <g clipPath="url(#quadratic-relation-clip)">
                            {/* 전체 배경 */}
                            <rect
                                x="0"
                                y="0"
                                width={graphWidth}
                                height={graphHeight}
                                fill="#050a13"
                            />

                            {/*
                             * 해 영역의 세로 배경
                             *
                             * <, ≤ : -2와 3 사이
                             * >, ≥ : -2보다 왼쪽과 3보다 오른쪽
                             */}
                            {solutionIsInside ? (
                                <rect
                                    x={alphaSvgX}
                                    y="0"
                                    width={
                                        betaSvgX -
                                        alphaSvgX
                                    }
                                    height={graphHeight}
                                    fill="#22d3ee"
                                    opacity="0.13"
                                />
                            ) : (
                                <>
                                    <rect
                                        x="0"
                                        y="0"
                                        width={alphaSvgX}
                                        height={graphHeight}
                                        fill="#22d3ee"
                                        opacity="0.13"
                                    />

                                    <rect
                                        x={betaSvgX}
                                        y="0"
                                        width={
                                            graphWidth -
                                            betaSvgX
                                        }
                                        height={graphHeight}
                                        fill="#22d3ee"
                                        opacity="0.13"
                                    />
                                </>
                            )}

                            {/* 해 영역의 경계선 */}
                            <line
                                x1={alphaSvgX}
                                y1="0"
                                x2={alphaSvgX}
                                y2={graphHeight}
                                stroke="#22d3ee"
                                strokeWidth="1.5"
                                strokeDasharray="7 7"
                                opacity="0.55"
                            />

                            <line
                                x1={betaSvgX}
                                y1="0"
                                x2={betaSvgX}
                                y2={graphHeight}
                                stroke="#22d3ee"
                                strokeWidth="1.5"
                                strokeDasharray="7 7"
                                opacity="0.55"
                            />

                            {/* 격자 */}
                            {gridXValues.map((value) => (
                                <line
                                    key={`grid-x-${value}`}
                                    x1={toSvgX(value)}
                                    y1="0"
                                    x2={toSvgX(value)}
                                    y2={graphHeight}
                                    stroke="#334155"
                                    strokeWidth="1"
                                    opacity="0.35"
                                />
                            ))}

                            {gridYValues.map((value) => (
                                <line
                                    key={`grid-y-${value}`}
                                    x1="0"
                                    y1={toSvgY(value)}
                                    x2={graphWidth}
                                    y2={toSvgY(value)}
                                    stroke="#334155"
                                    strokeWidth="1"
                                    opacity="0.35"
                                />
                            ))}

                            {/* 좌표축 */}
                            <line
                                x1="0"
                                y1={xAxisY}
                                x2={graphWidth}
                                y2={xAxisY}
                                stroke="#cbd5e1"
                                strokeWidth="2"
                                opacity="0.8"
                            />

                            <line
                                x1={yAxisX}
                                y1="0"
                                x2={yAxisX}
                                y2={graphHeight}
                                stroke="#cbd5e1"
                                strokeWidth="2"
                                opacity="0.8"
                            />

                            {/* 좌변 그래프 */}
                            <path
                                d={leftPath}
                                fill="none"
                                stroke="#fb4b4b"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* 우변 그래프 */}
                            <path
                                d={rightPath}
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            {/* 두 교점 */}
                            <circle
                                cx={alphaSvgX}
                                cy={alphaSvgY}
                                r="8"
                                fill={
                                    includesBoundary
                                        ? "#facc15"
                                        : "#050a13"
                                }
                                stroke="#facc15"
                                strokeWidth="4"
                            />

                            <circle
                                cx={betaSvgX}
                                cy={betaSvgY}
                                r="8"
                                fill={
                                    includesBoundary
                                        ? "#facc15"
                                        : "#050a13"
                                }
                                stroke="#facc15"
                                strokeWidth="4"
                            />

                            {/* 교점 라벨 */}
                            <text
                                x={alphaSvgX + 10}
                                y={alphaSvgY - 12}
                                fill="#facc15"
                                fontSize="17"
                                fontWeight="700"
                            >
                                x=-2
                            </text>

                            <text
                                x={betaSvgX + 10}
                                y={betaSvgY - 12}
                                fill="#facc15"
                                fontSize="17"
                                fontWeight="700"
                            >
                                x=3
                            </text>

                            {/* 축 라벨 */}
                            <text
                                x={graphWidth - 26}
                                y={xAxisY - 12}
                                fill="#e2e8f0"
                                fontSize="20"
                                fontStyle="italic"
                            >
                                x
                            </text>

                            <text
                                x={yAxisX + 12}
                                y="25"
                                fill="#e2e8f0"
                                fontSize="20"
                                fontStyle="italic"
                            >
                                y
                            </text>

                            {/* 해 영역 라벨 */}
                            {solutionIsInside ? (
                                <text
                                    x={
                                        (alphaSvgX +
                                            betaSvgX) /
                                        2
                                    }
                                    y="28"
                                    textAnchor="middle"
                                    fill="#67e8f9"
                                    fontSize="17"
                                    fontWeight="700"
                                >
                                    해가 되는 구간
                                </text>
                            ) : (
                                <>
                                    <text
                                        x={alphaSvgX / 2}
                                        y="28"
                                        textAnchor="middle"
                                        fill="#67e8f9"
                                        fontSize="16"
                                        fontWeight="700"
                                    >
                                        해가 되는 구간
                                    </text>

                                    <text
                                        x={
                                            (betaSvgX +
                                                graphWidth) /
                                            2
                                        }
                                        y="28"
                                        textAnchor="middle"
                                        fill="#67e8f9"
                                        fontSize="16"
                                        fontWeight="700"
                                    >
                                        해가 되는 구간
                                    </text>
                                </>
                            )}
                        </g>
                    </svg>

                    <div className="border-t border-white/10 p-4 text-center text-sm leading-7 text-gray-400">
                        하늘색 세로 배경은 현재 부등식을
                        만족하는 <InlineMath math="x" />의
                        범위입니다. 슬라이더를 움직여도 이 영역은
                        변하지 않습니다.
                    </div>
                </div>
            </div>
            {/* 차이 */}
            <div className="mt-5 ">

                <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                    <p className="font-bold text-cyan-300">
                        두 함수의 차이
                    </p>

                    <BlockMath
                        math={`\\text{좌변}-\\text{우변}=x^2-x-6`}
                    />

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a,b,c" />를 움직여도
                        이 차이는 변하지 않습니다.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function QuadraticInequalityPage() {
    return (
        <>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.10 이차부등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차부등식은 이차함수의 그래프와 <InlineMath math="x" />축의 위치관계를 이용하여 해석할 수 있습니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        이차부등식의 뜻
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a\ne0" />일 때, <InlineMath math="ax^2+bx+c>0" />과 같은 형태의 부등식을
                        <b> 이차부등식</b>이라고 합니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath math="ax^2+bx+c>0\qquad(a\ne0)" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        부등호는 <InlineMath math=">,\ \ge,\ <,\ \le" /> 중 어느 것을
                        사용해도 되며, 최고차항이 이차항인 부등식을 이차부등식이라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        두 그래프의 위치관계
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식의 좌변과 우변을 각각 함수로 생각하면
                    </p>

                    <BlockMath math="y=ax^2+bx+c,\qquad y=0" />

                    <p className="leading-8 text-gray-300">
                        의 위치관계를 비교하는 문제가 됩니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="y=0" />은 <InlineMath math="x" />축이므로,
                        결국 이차함수의 그래프가 <InlineMath math="x" />축보다 위에 있는지 아래에 있는지를
                        판단하여 해의 범위를 구합니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c>0" />은
                            이차함수의 그래프가 <InlineMath math="x" />축보다 <b>위에 있는 부분</b>을 뜻합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c<0" />은
                            이차함수의 그래프가 <InlineMath math="x" />축보다 <b>아래에 있는 부분</b>을 뜻합니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        그래프의 형태
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차함수 <InlineMath math="y=ax^2+bx+c" />의 그래프 형태는 <InlineMath math="a" />의 부호에 따라 두 가지뿐입니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">
                        <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                            <p className="mb-3 text-lg font-bold text-blue-300">
                                <InlineMath math="a>0" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                그래프는 <b>아래로 볼록</b>입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                두 교점이 있다면 그래프는 두 교점의 바깥쪽에서 <InlineMath math="x" />축보다 위에 있고,
                                두 교점 사이에서 아래에 있습니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-5">
                            <p className="mb-3 text-lg font-bold text-red-300">
                                <InlineMath math="a<0" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                그래프는 <b>위로 볼록</b>입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                두 교점이 있다면 그래프는 두 교점 사이에서 <InlineMath math="x" />축보다 위에 있고,
                                바깥쪽에서 아래에 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        교점과 이차방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        해의 범위를 구하려면 먼저 이차함수의 그래프와 <InlineMath math="x" />축의 교점을 구해야 합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        두 그래프가 만나는 점에서는
                    </p>

                    <BlockMath math="ax^2+bx+c=0" />

                    <p className="leading-8 text-gray-300">
                        이 성립합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 교점을 구하기 위해서는 <InlineMath math="ax^2+bx+c=0" />의 이차방정식을 풉니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        이 이차방정식의 해는 그래프와 <InlineMath math="x" />축이 만나는 <InlineMath math="x" />좌표이며,
                        이차부등식의 해의 범위를 나누는 경계값이 됩니다.
                    </p>
                </div>
                <QuadraticInequalityExplorer />

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="mb-4 leading-8 text-gray-300">
                            이차부등식
                        </p>

                        <BlockMath math="-3x^2+2x+1\ge0" />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 해를 구하시오.
                        </p>

                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                먼저 좌변을 인수분해합니다.
                            </p>

                            <BlockMath math="-3x^2+2x+1=-(3x+1)(x-1)" />

                            <p>
                                따라서 부등식은
                            </p>

                            <BlockMath math="-(3x+1)(x-1)\ge0" />

                            <p>
                                양변에 <InlineMath math="-1" />을 곱하면 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="(3x+1)(x-1)\le0" />

                            <p>
                                이차방정식 <InlineMath math="(3x+1)(x-1)=0" />
                                의 두 근은
                            </p>

                            <BlockMath math="x=-\frac13,\qquad x=1" />

                            <p>
                                최고차항의 계수가 양수이므로 <InlineMath math="(3x+1)(x-1)\le0" />
                                의 해는 두 근 사이입니다.
                            </p>

                            <BlockMath math="-\frac13\le x\le1" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="-\frac13\le x\le1" /> 입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 */}

                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=ax^2+bx+c" />
                                    의 그래프와 직선 <InlineMath math="y=mx+n" />
                                    이 오른쪽 그림과 같을 때,
                                    이차부등식
                                </p>

                                <BlockMath math="ax^2+(b-m)x+c-n>0" />

                                <p className="leading-8 text-gray-300">
                                    의 해는 <InlineMath math="\alpha<x<\beta" />
                                    이다.
                                    이때 <InlineMath math="\alpha\beta" />
                                    의 값을 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/3.10_2.png"
                                    alt="이차함수와 직선"
                                    className="w-full max-w-sm"
                                />

                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                좌변은 두 함수의 차입니다.
                            </p>

                            <BlockMath
                                math="ax^2+(b-m)x+c-n=(ax^2+bx+c)-(mx+n)"
                            />

                            <p>
                                따라서 부등식은
                                이차함수의 그래프가
                                직선보다 위에 있는 <InlineMath math="x" />
                                의 범위를 구하는 문제입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                그림에서 두 그래프의 교점의 <InlineMath math="x" />
                                좌표는
                            </p>

                            <BlockMath math="-2,\;3" />

                            <p>
                                이차함수가 직선보다 위에 있는 부분은
                                두 교점 사이입니다.
                            </p>

                            <BlockMath math="-2<x<3" />

                            <BlockMath math="\alpha=-2,\qquad\beta=3" />

                            <BlockMath math="\alpha\beta=(-2)\times3=-6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\alpha\beta=-6" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 */}

                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    두 이차함수 <InlineMath math="y=f(x),\;y=g(x)" />
                                    의 그래프가 오른쪽 그림과 같을 때,
                                    부등식
                                </p>

                                <BlockMath math="f(x)g(x)>0" />

                                <p className="leading-8 text-gray-300">
                                    의 해는?
                                </p>

                                <div className="mt-5 grid grid-cols-1 gap-2 text-gray-300">

                                    <p>① <InlineMath math="1<x<2 \;\text{ 또는 }\; x>3" /></p>

                                    <p>② <InlineMath math="x<1 \;\text{ 또는 }\; 3<x<4" /></p>

                                    <p>③ <InlineMath math="2<x<3 \;\text{ 또는 }\; x>4" /></p>

                                    <p>④ <InlineMath math="1<x<2 \;\text{ 또는 }\; 3<x<5" /></p>

                                    <p>⑤ <InlineMath math="x<1 \;\text{ 또는 }\; x>4" /></p>

                                </div>

                            </div>

                            {/* 그림 */}

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/3.10_3.png"
                                    alt="두 이차함수의 그래프"
                                    className="w-full max-w-sm"
                                />

                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="f(x)g(x)>0" />
                                이므로 두 함수의 함수값의 부호가 같아야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                먼저 <InlineMath math="f(x)" />의 부호를 그래프에서 읽으면
                            </p>

                            <BlockMath math="f(x)>0:\;x<2\;\text{ 또는 }\;x>5" />

                            <BlockMath math="f(x)<0:\;2<x<5" />

                            <hr className="border-white/10" />

                            <p>
                                다음으로 <InlineMath math="g(x)" />의 부호를 그래프에서 읽으면
                            </p>

                            <BlockMath math="g(x)>0:\;1<x<3" />

                            <BlockMath math="g(x)<0:\;x<1\;\text{ 또는 }\;x>3" />

                            <hr className="border-white/10" />

                            <p>
                                두 함수가 모두 양수인 구간은
                            </p>

                            <BlockMath math="1<x<2" />

                            <p>
                                두 함수가 모두 음수인 구간은
                            </p>

                            <BlockMath math="3<x<5" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)g(x)>0\;:\;1<x<2\;\text{ 또는 }\;3<x<5" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="{④}" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="mb-5 leading-8 text-gray-300">
                            다음 이차부등식 중 해가 없는 것은?
                        </p>

                        <div className="grid grid-cols-1 gap-3 text-gray-300 sm:grid-cols-2">

                            <p>① <InlineMath math="-x^2+2x-1\ge0" /></p>

                            <p>② <InlineMath math="-x^2-5x+14>0" /></p>

                            <p>③ <InlineMath math="x^2+25<10x" /></p>

                            <p>④ <InlineMath math="x^2+4>-4x" /></p>

                            <p>⑤ <InlineMath math="x^2+16\ge8x" /></p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                각 식을 한쪽으로 정리하여 그래프의 모양을 살펴봅니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ①
                            </p>

                            <BlockMath math="-x^2+2x-1=-(x-1)^2" />

                            <BlockMath math="-(x-1)^2\ge0" />

                            <p>
                                <InlineMath math="x=1" />에서만 성립하므로 해가 있습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ②
                            </p>

                            <BlockMath math="-x^2-5x+14>0" />

                            <p>
                                아래로 볼록인 이차함수이므로 두 근 사이에서 성립하여
                                해가 있습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ③
                            </p>

                            <BlockMath math="x^2-10x+25<0" />

                            <BlockMath math="(x-5)^2<0" />

                            <p>
                                제곱은 항상 <InlineMath math="0" /> 이상이므로
                            </p>

                            <BlockMath math="(x-5)^2<0" />

                            <p>
                                을 만족하는 실수는 존재하지 않습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ④
                            </p>

                            <BlockMath math="x^2+4x+4>0" />

                            <BlockMath math="(x+2)^2>0" />

                            <p>
                                <InlineMath math="x=-2" />를 제외한 모든 실수에서 성립하므로
                                해가 있습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ⑤
                            </p>

                            <BlockMath math="x^2-8x+16\ge0" />

                            <BlockMath math="(x-4)^2\ge0" />

                            <p>
                                제곱은 항상 0 이상이므로 모든 실수에서 성립합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="{③}" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="|x^2-6x+10|-2|x-1|\le0" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 모든 정수 <InlineMath math="x" />의 개수는?
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-5 text-lg font-bold text-blue-300">
                                    풀이 1 : 구간을 나누어 풀기
                                </h4>

                                <p>
                                    먼저 <InlineMath math="x^2-6x+10" />을 정리하면
                                </p>

                                <BlockMath math="x^2-6x+10=(x-3)^2+1" />

                                <p>
                                    항상 양수이므로
                                </p>

                                <BlockMath math="|x^2-6x+10|=x^2-6x+10" />

                                <p>
                                    입니다. 따라서 주어진 부등식은
                                </p>

                                <BlockMath math="x^2-6x+10\le2|x-1|" />

                                <p>
                                    이 됩니다.
                                </p>

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ① <InlineMath math="x<1" />일 때
                                </p>

                                <BlockMath math="|x-1|=1-x" />

                                <BlockMath math="x^2-6x+10\le2(1-x)" />

                                <BlockMath math="x^2-4x+8\le0" />

                                <p>
                                    이차방정식 <InlineMath math="x^2-4x+8=0" />의 판별식은
                                </p>

                                <BlockMath math="D=(-4)^2-4\cdot1\cdot8=-16<0" />

                                <p>
                                    이고 최고차항의 계수가 양수이므로 <InlineMath math="x^2-4x+8" />은 항상 양수입니다.
                                    따라서 이 구간에서는 해가 없습니다.
                                </p>

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ② <InlineMath math="x\ge1" />일 때
                                </p>

                                <BlockMath math="|x-1|=x-1" />

                                <BlockMath math="x^2-6x+10\le2(x-1)" />

                                <BlockMath math="x^2-8x+12\le0" />

                                <BlockMath math="(x-2)(x-6)\le0" />

                                <p>
                                    최고차항의 계수가 양수이므로 두 근 사이가 해입니다.
                                </p>

                                <BlockMath math="2\le x\le6" />

                                <p>
                                    이 범위는 <InlineMath math="x\ge1" />과도 일치하므로
                                    주어진 부등식의 해는 <InlineMath math="2\le x\le6" />입니다.
                                </p>
                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-5 text-lg font-bold text-purple-300">
                                    풀이 2 : 그래프의 높낮이 비교하기
                                </h4>

                                <p>
                                    앞에서 확인한 것처럼
                                </p>

                                <BlockMath math="x^2-6x+10=(x-3)^2+1>0" />

                                <p>
                                    이므로 주어진 부등식은
                                </p>

                                <BlockMath math="x^2-6x+10\le2|x-1|" />

                                <p>
                                    입니다. 따라서 두 함수
                                </p>

                                <BlockMath math="y=x^2-6x+10,\qquad y=2|x-1|" />

                                <p>
                                    의 그래프를 비교하여 이차함수의 그래프가
                                    절댓값 함수의 그래프보다 아래에 있거나 만나는 범위를 찾습니다.
                                </p>

                                <p>
                                    <InlineMath math="x<1" />에서는 <InlineMath math="y=2|x-1|" />의 식이 <InlineMath math="y=-2x+2" />입니다.
                                    두 그래프의 교점을 구하면
                                </p>

                                <BlockMath math="x^2-6x+10=-2x+2" />

                                <BlockMath math="x^2-4x+8=0" />

                                <p>
                                    이 방정식은 실근을 갖지 않으므로
                                    왼쪽에서는 두 그래프가 만나지 않습니다.
                                </p>

                                <p>
                                    <InlineMath math="x\ge1" />에서는 <InlineMath math="y=2|x-1|" />의 식이 <InlineMath math="y=2x-2" />입니다.
                                </p>

                                <BlockMath math="x^2-6x+10=2x-2" />

                                <BlockMath math="x^2-8x+12=0" />

                                <BlockMath math="(x-2)(x-6)=0" />

                                <BlockMath math="x=2,\qquad x=6" />

                                <p>
                                    두 교점 사이에서 이차함수의 그래프가
                                    직선 <InlineMath math="y=2x-2" />보다 아래에 있으므로
                                </p>

                                <BlockMath math="2\le x\le6" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <p>
                                이 범위의 정수는
                            </p>

                            <BlockMath math="2,\ 3,\ 4,\ 5,\ 6" />

                            <p className="font-semibold text-white">
                                따라서 정수 <InlineMath math="x" />의 개수는 <InlineMath math="5" />개입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 자연수 <InlineMath math="a,\;b" />에 대하여
                            이차함수
                        </p>

                        <BlockMath math="f(x)=a(x-b)(x-5)" />

                        <p className="leading-8 text-gray-300">
                            가 다음 조건을 만족시킬 때, <InlineMath math="f(6)" />의 값을 구하시오.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">

                            <div className="space-y-3 text-gray-300">

                                <p>(가) <InlineMath math="f(0)=10" /></p>

                                <p>(나) <InlineMath math="x<2" />일 때, <InlineMath math="f(x)>0" />
                                </p>

                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 <InlineMath math="a" />
                                는 자연수이므로
                            </p>

                            <BlockMath math="a>0" />

                            <p>
                                입니다.
                                따라서 <InlineMath math="f(x)>0" />
                                의 해는 두 근의 바깥입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                한 근은 <InlineMath math="5" />
                                이고,
                                조건 (나)에서
                            </p>

                            <BlockMath math="x<2\Longrightarrow f(x)>0" />

                            <p>
                                이므로 <InlineMath math="2" />
                                보다 작은 모든 실수가
                                두 근의 바깥에 있어야 합니다.
                            </p>

                            <p>
                                따라서 다른 근은 <InlineMath math="2" />
                                이상이어야 하므로
                            </p>

                            <BlockMath math="b=2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이제 조건 (가)를 이용합니다.
                            </p>

                            <BlockMath math="f(0)=10" />

                            <BlockMath math="a(0-2)(0-5)=10" />

                            <BlockMath math="10a=10" />

                            <BlockMath math="a=1" />

                            <hr className="border-white/10" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=(x-2)(x-5)" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(6)=(6-2)(6-5)=4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="f(6)=4" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이차함수 <InlineMath math="f(x)" />가 다음 조건을 만족시킨다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">

                            <div className="space-y-3 text-gray-300">

                                <p>
                                    (가)
                                    <InlineMath math="f(0)=18" />
                                </p>

                                <p>
                                    (나)
                                    이차부등식 <InlineMath math="f(x)>0" />
                                    의 해는 <InlineMath math="x\ne3" />
                                    인 모든 실수이다.
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            <InlineMath math="f(8)" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="f(x)>0" />의 해가 <InlineMath math="x=3" />을 제외한 모든 실수이므로,
                                그래프는 <InlineMath math="x=3" />에서만 <InlineMath math="x" />축과 만나고
                                나머지에서는 항상 <InlineMath math="x" />축 위에 있습니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="x=3" />은 중근이고,
                            </p>

                            <BlockMath math="f(x)=a(x-3)^2" />

                            <p>
                                (<InlineMath math="a>0" />)
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                조건 (가)를 이용하면
                            </p>

                            <BlockMath math="f(0)=18" />

                            <BlockMath math="9a=18" />

                            <BlockMath math="a=2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=2(x-3)^2" />

                            <hr className="border-white/10" />

                            <p>
                                이제 <InlineMath math="x=8" />을 대입하면
                            </p>

                            <BlockMath math="f(8)=2(8-3)^2" />

                            <BlockMath math="=2\times25=50" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="f(8)=50" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이차부등식
                        </p>

                        <BlockMath math="2x^2-6x+1\le0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 <InlineMath math="\alpha\le x\le\beta" />
                            일 때, <InlineMath math="\alpha+\beta" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                이차부등식의 경계는 이차방정식
                            </p>

                            <BlockMath math="2x^2-6x+1=0" />

                            <p>
                                의 두 근입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha+\beta=\frac{-(-6)}2=3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\alpha+\beta=3" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이차부등식
                        </p>

                        <BlockMath math="x^2+px+q<0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 <InlineMath math="-2<x<3" />
                            일 때, <InlineMath math="p+q" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                이차부등식의 해의 경계는
                                이차방정식
                            </p>

                            <BlockMath math="x^2+px+q=0" />

                            <p>
                                의 두 근입니다.
                            </p>

                            <p>
                                따라서 두 근은
                            </p>

                            <BlockMath math="-2,\qquad3" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="x^2+px+q=(x+2)(x-3)" />

                            <BlockMath math="=x^2-x-6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="p=-1,\qquad q=-6" />

                            <BlockMath math="p+q=-7" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="-7" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="a>1" />일 때,
                            이차부등식
                        </p>

                        <BlockMath math="x^2-(a+1)x+a>0" />

                        <p className="leading-8 text-gray-300">
                            의 해를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 좌변을 인수분해하면
                            </p>

                            <BlockMath math="x^2-(a+1)x+a=(x-1)(x-a)" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                조건 <InlineMath math="a>1" />
                                이므로
                            </p>

                            <BlockMath math="1<a" />

                            <p>
                                따라서 두 근의 위치는
                            </p>

                            <BlockMath math="1,\qquad a" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                최고차항의 계수가 양수이므로
                                부등식
                            </p>

                            <BlockMath math="(x-1)(x-a)>0" />

                            <p>
                                의 해는 두 근의 바깥입니다.
                            </p>

                            <BlockMath math="x<1\quad\text{또는}\quad x>a" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="x<1\quad\text{또는}\quad x>a" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차다항식 <InlineMath math="P(x)" />가 다음 조건을 만족시킬 때, <InlineMath math="P(-2)" />의 값을 구하시오.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">
                            <div className="space-y-4 leading-8 text-gray-300">
                                <p>
                                    (가) 부등식 <InlineMath math="P(x)\ge-3x-4" />의 해는 <InlineMath math="0\le x\le1" />이다.
                                </p>

                                <p>
                                    (나) 방정식 <InlineMath math="P(x)=-4x-3" />은
                                    중근을 가진다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                조건 (가)의 부등식을 한쪽으로 정리하면
                            </p>

                            <BlockMath math="P(x)+3x+4\ge0" />

                            <p>
                                입니다. 이 이차부등식의 해가 <InlineMath math="0\le x\le1" />이므로
                                경계값 <InlineMath math="0,\ 1" />은
                                이차방정식
                            </p>

                            <BlockMath math="P(x)+3x+4=0" />

                            <p>
                                의 두 근입니다.
                            </p>

                            <p>
                                또한 두 근 사이에서 식의 값이 <InlineMath math="0" /> 이상이므로 최고차항의 계수는
                                음수입니다. 따라서 양수 <InlineMath math="k" />에 대하여
                            </p>

                            <BlockMath math="P(x)+3x+4=kx(1-x)" />

                            <p>
                                로 나타낼 수 있습니다.
                            </p>

                            <BlockMath math="P(x)=kx(1-x)-3x-4" />

                            <hr className="border-white/10" />

                            <p>
                                조건 (나)의 방정식에 위 식을 대입하면
                            </p>

                            <BlockMath math="kx(1-x)-3x-4=-4x-3" />

                            <BlockMath math="kx(1-x)+x-1=0" />

                            <p>
                                좌변을 인수분해하면
                            </p>

                            <BlockMath math="kx(1-x)+x-1=(1-x)(kx-1)" />

                            <p>
                                따라서 방정식은
                            </p>

                            <BlockMath math="(1-x)(kx-1)=0" />

                            <p>
                                입니다. 이 방정식이 중근을 가지려면 두 근이 같아야 하므로
                            </p>

                            <BlockMath math="1=\frac1k" />

                            <BlockMath math="k=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="P(x)=x(1-x)-3x-4" />

                            <BlockMath math="P(x)=-x^2-2x-4" />

                            <hr className="border-white/10" />

                            <p>
                                이제 <InlineMath math="x=-2" />를 대입하면
                            </p>

                            <BlockMath math="P(-2)=-(-2)^2-2(-2)-4" />

                            <BlockMath math="P(-2)=-4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="P(-2)=-4" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 12
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="ax^2+bx+c>0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 <InlineMath math="x<-2" /> 또는 <InlineMath math="x>3" />일 때, 부등식
                        </p>

                        <BlockMath math="a(x-2)^2-b(x-2)+c<0" />

                        <p className="leading-8 text-gray-300">
                            의 해를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                이차함수를
                            </p>

                            <BlockMath math="f(x)=ax^2+bx+c" />

                            <p>
                                라고 하겠습니다.
                            </p>

                            <p>
                                부등식 <InlineMath math="f(x)>0" />의 해가 <InlineMath math="x<-2" /> 또는 <InlineMath math="x>3" />이므로,
                                반대로 <InlineMath math="f(x)<0" />의 해는 두 경계값 사이입니다.
                            </p>

                            <BlockMath math="-2<x<3" />

                            <hr className="border-white/10" />

                            <p>
                                구하려는 부등식의 좌변을 살펴보면
                            </p>

                            <BlockMath math={`\\begin{aligned}
f(2-x)
&=a(2-x)^2+b(2-x)+c\\
&=a(x-2)^2-b(x-2)+c
\\end{aligned}`}
                            />

                            <p>
                                이므로 주어진 부등식은
                            </p>

                            <BlockMath math="f(2-x)<0" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                <InlineMath math="f(t)<0" />의 해가 <InlineMath math="-2<t<3" />이므로, <InlineMath math="t=2-x" />를 대입하면
                            </p>

                            <BlockMath math="-2<2-x<3" />

                            <p>
                                왼쪽 부등식에서
                            </p>

                            <BlockMath math="-2<2-x\quad\Longrightarrow\quad x<4" />

                            <p>
                                오른쪽 부등식에서
                            </p>

                            <BlockMath math="2-x<3\quad\Longrightarrow\quad x>-1" />

                            <p>
                                따라서 두 조건을 함께 만족시키는 범위는
                            </p>

                            <BlockMath math="-1<x<4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="-1<x<4" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 13
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 */}
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 두 점 <InlineMath math="(-1,0),\;(3,0)" />을 지나는
                                    이차함수 <InlineMath math="y=f(x)" />의 그래프를
                                    나타낸 것이다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    부등식
                                </p>

                                <BlockMath math="f\left(\frac{x-k}{2}\right)<0" />

                                <p className="leading-8 text-gray-300">
                                    의 해가  <InlineMath math="x<2" /> 또는 <InlineMath math="x>10" />이 되도록 하는
                                    상수 <InlineMath math="k" />의 값을 구하시오.
                                </p>
                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/3.10_13.png"
                                    alt="x축과 x=-1, x=3에서 만나고 위로 볼록인 이차함수 그래프"
                                    className="w-full max-w-sm"
                                />
                            </div>

                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                그래프는 위로 볼록이고 <InlineMath math="x" />축과 <InlineMath math="x=-1,\;3" />에서 만납니다.
                            </p>

                            <p>
                                따라서 그래프가 <InlineMath math="x" />축보다 아래에 있는 범위는
                                두 근의 바깥입니다.
                            </p>

                            <BlockMath math="f(t)<0\quad\Longleftrightarrow\quad t<-1\ \text{또는}\ t>3" />

                            <hr className="border-white/10" />

                            <p>
                                여기서
                            </p>

                            <BlockMath math="t=\frac{x-k}{2}" />

                            <p>
                                로 놓으면 주어진 부등식의 해는
                            </p>

                            <BlockMath math="\frac{x-k}{2}<-1\quad\text{또는}\quad\frac{x-k}{2}>3" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                첫 번째 부등식을 풀면
                            </p>

                            <BlockMath math="x-k<-2" />

                            <BlockMath math="x<k-2" />

                            <p>
                                두 번째 부등식을 풀면
                            </p>

                            <BlockMath math="x-k>6" />

                            <BlockMath math="x>k+6" />

                            <p>
                                따라서 주어진 부등식의 해는
                            </p>

                            <BlockMath math="x<k-2\quad\text{또는}\quad x>k+6" />

                            <hr className="border-white/10" />

                            <p>
                                이 해가 <InlineMath math="x<2" /> 또는 <InlineMath math="x>10" />과 같으므로 경계값을 비교하면
                            </p>

                            <BlockMath math="k-2=2,\qquad k+6=10" />

                            <p>
                                두 식에서 모두
                            </p>

                            <BlockMath math="k=4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k=4" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 14
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 */}
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 두 점 <InlineMath math="(-1,0),\;(2,0)" />을 지나는
                                    이차함수 <InlineMath math="y=f(x)" />의 그래프를
                                    나타낸 것이다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    부등식
                                </p>

                                <BlockMath math="f\left(\frac{2x-k}{3}\right)\ge0" />

                                <p className="leading-8 text-gray-300">
                                    의 해가 <InlineMath math="x\le2" /> 또는 <InlineMath math="x\ge\frac{13}{2}" />가 되도록 하는
                                    상수 <InlineMath math="k" />가 존재할 때, 부등식
                                </p>

                                <BlockMath math="f\left(\frac{-x+k}{2}\right)\le0" />

                                <p className="leading-8 text-gray-300">
                                    의 해가 <InlineMath math="\alpha\le x\le\beta" />이다.
                                    이때 <InlineMath math="\alpha\beta" />의 값을 구하시오.
                                </p>
                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/3.10_14.png"
                                    alt="x축과 x=-1, x=2에서 만나고 아래로 볼록인 이차함수 그래프"
                                    className="w-full max-w-sm"
                                />
                            </div>

                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                그래프는 아래로 볼록이고 <InlineMath math="x" />축과 <InlineMath math="x=-1,\;2" />에서 만납니다.
                            </p>

                            <p>
                                따라서 그래프가 <InlineMath math="x" />축보다 위에 있거나 만나는 범위는
                                두 근의 바깥입니다.
                            </p>

                            <BlockMath math="f(t)\ge0\quad\Longleftrightarrow\quad t\le-1\ \text{또는}\ t\ge2" />

                            <hr className="border-white/10" />

                            <p>
                                먼저
                            </p>

                            <BlockMath math="t=\frac{2x-k}{3}" />

                            <p>
                                로 놓으면
                            </p>

                            <BlockMath math="\frac{2x-k}{3}\le-1\quad\text{또는}\quad\frac{2x-k}{3}\ge2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                첫 번째 부등식을 풀면
                            </p>

                            <BlockMath math="2x-k\le-3" />

                            <BlockMath math="x\le\frac{k-3}{2}" />

                            <p>
                                두 번째 부등식을 풀면
                            </p>

                            <BlockMath math="2x-k\ge6" />

                            <BlockMath math="x\ge\frac{k+6}{2}" />

                            <p>
                                따라서 부등식의 해는
                            </p>

                            <BlockMath math="x\le\frac{k-3}{2}\quad\text{또는}\quad x\ge\frac{k+6}{2}" />

                            <p>
                                이 해가 <InlineMath math="x\le2" /> 또는 <InlineMath math="x\ge\frac{13}{2}" />와 같으므로
                                경계값을 비교하면
                            </p>

                            <BlockMath math="\frac{k-3}{2}=2,\qquad\frac{k+6}{2}=\frac{13}{2}" />

                            <p>
                                두 식에서 모두
                            </p>

                            <BlockMath math="k=7" />

                            <hr className="border-white/10" />

                            <p>
                                이제 두 번째 부등식을 살펴봅니다.
                                그래프에서 <InlineMath math="f(t)\le0" />의 해는 두 근 사이이므로
                            </p>

                            <BlockMath math="-1\le t\le2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                여기에
                            </p>

                            <BlockMath math="t=\frac{-x+7}{2}" />

                            <p>
                                를 대입하면
                            </p>

                            <BlockMath math="-1\le\frac{-x+7}{2}\le2" />

                            <BlockMath math="-2\le-x+7\le4" />

                            <p>
                                왼쪽 부등식에서
                            </p>

                            <BlockMath math="-2\le-x+7\quad\Longrightarrow\quad x\le9" />

                            <p>
                                오른쪽 부등식에서
                            </p>

                            <BlockMath math="-x+7\le4\quad\Longrightarrow\quad x\ge3" />

                            <p>
                                따라서 해는
                            </p>

                            <BlockMath math="3\le x\le9" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\alpha=3,\qquad\beta=9" />

                            <BlockMath math="\alpha\beta=3\cdot9=27" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\alpha\beta=27" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 15
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 이차부등식
                        </p>

                        <BlockMath math="x^2-(n+6)x+6n\le0" />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 정수 <InlineMath math="x" />의 개수가 <InlineMath math="3" />이 되도록 하는 모든 자연수 <InlineMath math="n" />의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 좌변을 인수분해하면
                            </p>

                            <BlockMath math="x^2-(n+6)x+6n=(x-n)(x-6)" />

                            <p>
                                입니다. 최고차항의 계수가 양수이므로
                                부등식의 해는 두 근 사이이며, 두 근도 포함합니다.
                            </p>

                            <p>
                                따라서 두 근 <InlineMath math="n" />과 <InlineMath math="6" /> 사이에 있는 정수의 개수가 <InlineMath math="3" />이어야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                양 끝의 정수를 포함하여 정수가 <InlineMath math="3" />개 있으려면 두 근의 차는 <InlineMath math="2" />이어야 합니다.
                            </p>

                            <BlockMath math="|n-6|+1=3" />

                            <BlockMath math="|n-6|=2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="n-6=2\quad\text{또는}\quad n-6=-2" />

                            <BlockMath math="n=8\quad\text{또는}\quad n=4" />

                            <p>
                                실제로
                            </p>

                            <BlockMath math="n=4:\quad 4\le x\le6" />

                            <p>
                                에서 정수해는 <InlineMath math="4,\ 5,\ 6" />이고,
                            </p>

                            <BlockMath math="n=8:\quad 6\le x\le8" />

                            <p>
                                에서 정수해는 <InlineMath math="6,\ 7,\ 8" />이므로 각각 <InlineMath math="3" />개입니다.
                            </p>

                            <p>
                                따라서 모든 자연수 <InlineMath math="n" />의 값의 합은
                            </p>

                            <BlockMath math="4+8=12" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="12" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차부등식을 푸는 순서는 항상 같습니다.
                    </p>

                    <div className="mt-5 space-y-5">
                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                이차방정식을 풀어 교점을 구합니다.
                            </p>

                            <BlockMath math="ax^2+bx+c=0" />
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                <InlineMath math="a" />의 부호를 확인하여 그래프의 형태를
                                판단합니다.
                            </p>

                            <BlockMath math="a>0:\ \text{아래로 볼록}" />

                            <BlockMath math="a<0:\ \text{위로 볼록}" />
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                그래프가 <InlineMath math="x" />축보다 위인지 아래인지
                                판단하여 해의 범위를 구합니다.
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 leading-8 font-semibold text-white">
                        결국 이차방정식의 해가 이차부등식의 해를 나누는 경계값이 됩니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold text-white">
                    3.11 이차식 이하의 그래프와 절대부등식
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    절대부등식은 모든 실수에 대하여 항상 성립하는 부등식입니다.
                    식의 차수와 계수에 따른 그래프의 개형을 이용하면
                    절대부등식이 성립하기 위한 조건을 판정할 수 있습니다.
                </p>

                {/* 절대부등식의 뜻 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        절대부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        등식에서 모든 실수에 대하여 성립하는 식을
                        <b className="text-white"> 항등식</b>이라고 하는 것처럼,
                        모든 실수 <InlineMath math="x" />에 대하여 항상 성립하는
                        부등식을 <b className="text-white">절대부등식</b>이라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <p className="text-center leading-8 text-gray-300">
                            절대부등식의 해는
                            <b className="text-white"> 모든 실수</b>입니다.
                        </p>
                    </div>
                </div>

                {/* 문제에 등장하는 표현 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        문제에 등장하는 표현
                    </h3>

                    <p className="leading-8 text-gray-300">
                        절대부등식은 보통 미정계수가 포함된 식이
                        모든 실수에서 성립하도록 하는
                        <b className="text-white"> 계수의 조건이나 범위</b>를
                        구하는 문제로 제시됩니다.
                    </p>

                    <div className="mt-5 grid gap-3 md:grid-cols-3">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                            <p className="leading-8 text-gray-300">
                                모든 실수 <InlineMath math="x" />에 대하여
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                            <p className="leading-8 text-gray-300">
                                임의의 실수 <InlineMath math="x" />에 대하여
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-4 text-center">
                            <p className="leading-8 text-gray-300">
                                실수 <InlineMath math="x" />에 관계없이
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        이 표현들은 모두 <InlineMath math="x" />에 어떤 실수를 대입해도
                        부등식이 성립해야 한다는 뜻입니다.
                    </p>
                </div>

                {/* 그래프와 절대부등식 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        그래프를 이용한 판정
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 식을 함수로 생각하겠습니다.
                    </p>

                    <BlockMath math="y=ax^2+bx+c" />

                    <p className="leading-8 text-gray-300">
                        절대부등식은 그래프가 모든 <InlineMath math="x" />에서 <InlineMath math="x" />축보다 위에 있는지,
                        아래에 있는지 또는 접하는지를 이용하여 판정합니다.
                    </p>

                    <div className="mt-5 space-y-3 rounded-xl border border-white/10 bg-black/30 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c>0" />
                            이 항상 성립하려면 그래프 전체가 <InlineMath math="x" />축보다 위에 있어야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c\ge0" />
                            이 항상 성립하려면 그래프 전체가 <InlineMath math="x" />축보다 위에 있거나 <InlineMath math="x" />축에 접할 수 있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c<0" />
                            이 항상 성립하려면 그래프 전체가 <InlineMath math="x" />축보다 아래에 있어야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="ax^2+bx+c\le0" />
                            이 항상 성립하려면 그래프 전체가 <InlineMath math="x" />축보다 아래에 있거나 <InlineMath math="x" />축에 접할 수 있습니다.
                        </p>
                    </div>
                </div>

                {/* 11가지 개형 */}
                <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        이차식 이하의 그래프의 모든 개형
                    </h3>

                    <p className="leading-8 text-gray-300">
                        식 <InlineMath math="ax^2+bx+c" />은 계수의 조건에 따라
                        이차함수, 일차함수 또는 상수함수가 됩니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        계수에 따라 나타나는 그래프의 개형은 모두
                        <b className="text-white"> 11가지</b>이며,
                        각 개형과 <InlineMath math="x" />축의 위치관계를 알면
                        절대부등식이 성립하기 위한 계수의 조건을 빠르게 판정할 수 있습니다.
                    </p>

                    <div className="mt-6">
                        <QuadraticGraphTypeExplorer />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            모든 실수 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath math="\sqrt{x^2-2kx+2k+15}" />

                        <p className="leading-8 text-gray-300">
                            가 실수가 되도록 하는 정수 <InlineMath math="k" />의 개수를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                제곱근이 모든 실수 <InlineMath math="x" />에 대하여
                                실수가 되려면 근호 안의 식이 항상 <InlineMath math="0" /> 이상이어야 합니다.
                            </p>

                            <BlockMath math="x^2-2kx+2k+15\ge0" />

                            <p>
                                이 이차식의 최고차항의 계수는 양수이므로,
                                그래프가 <InlineMath math="x" />축과 만나지 않거나
                                한 점에서 접해야 합니다.
                            </p>

                            <p>
                                따라서 판별식은
                            </p>

                            <BlockMath math="D\le0" />

                            <p>
                                이어야 합니다. 계산을 간단히 하기 위해 <InlineMath math="\frac{D}{4}" />를 이용하면
                            </p>

                            <BlockMath math="\frac{D}{4}=k^2-(2k+15)\le0" />

                            <BlockMath math="k^2-2k-15\le0" />

                            <BlockMath math="(k-5)(k+3)\le0" />

                            <p>
                                최고차항의 계수가 양수이므로 두 근 사이가 해입니다.
                            </p>

                            <BlockMath math="-3\le k\le5" />

                            <p>
                                이 범위의 정수 <InlineMath math="k" />는
                            </p>

                            <BlockMath math="-3,-2,-1,0,1,2,3,4,5" />

                            <p>
                                로 모두 <InlineMath math="9" />개입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 정수 <InlineMath math="k" />의 개수는
                                </p>

                                <BlockMath math="9" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            모든 실수 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath math="(p-3)x+q-2>0" />

                        <p className="leading-8 text-gray-300">
                            이 성립하기 위한 <InlineMath math="p,q" />의 조건을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                모든 실수 <InlineMath math="x" />에 대하여 성립해야 하므로
                                그래프가 항상 <InlineMath math="x" />축 위에 있어야 합니다.
                            </p>

                            <p>
                                주어진 식은 일차식이므로 그래프는 직선입니다.
                            </p>

                            <BlockMath math="y=(p-3)x+q-2" />

                            <p>
                                기울기가 <InlineMath math="0" />이 아니면
                                직선은 반드시 <InlineMath math="x" />축을 한 번 지나므로
                                모든 실수에서 항상 양수가 될 수 없습니다.
                            </p>

                            <p>
                                따라서 직선이 아니라 상수함수이어야 합니다.
                            </p>

                            <BlockMath math="p-3=0" />

                            <BlockMath math="p=3" />

                            <p>
                                이때 부등식은
                            </p>

                            <BlockMath math="q-2>0" />

                            <p>
                                이 되어야 하므로
                            </p>

                            <BlockMath math="q>2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="p=3,\qquad q>2" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 이차방정식
                        </p>

                        <BlockMath math="x^2+(m+2)x-m^2-3am-4=0" />

                        <p className="leading-8 text-gray-300">
                            이 실수 <InlineMath math="m" />의 값에 관계없이 항상 실근을
                            가질 때, 실수 <InlineMath math="a" />의 값의 범위를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                <InlineMath math="x" />에 대한 이차방정식이 항상 실근을
                                가지려면 판별식이 모든 실수 <InlineMath math="m" />에 대하여 <InlineMath math="0" /> 이상이어야 합니다.
                            </p>

                            <BlockMath math="D\ge0" />

                            <p>
                                판별식을 계산하면
                            </p>

                            <BlockMath math="\begin{aligned}
D
&=(m+2)^2-4(-m^2-3am-4)\\
&=5m^2+(12a+4)m+20
\end{aligned}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="5m^2+(12a+4)m+20\ge0" />

                            <p>
                                가 모든 실수 <InlineMath math="m" />에 대하여
                                성립하여야 합니다.
                            </p>

                            <p>
                                최고차항의 계수가 양수이므로
                                이 이차식의 판별식은 <InlineMath math="0" /> 이하입니다.
                            </p>

                            <BlockMath math="(12a+4)^2-4\cdot5\cdot20\le0" />

                            <BlockMath math="(12a+4)^2\le400" />

                            <BlockMath math="-20\le12a+4\le20" />

                            <BlockMath math="-24\le12a\le16" />

                            <BlockMath math="-2\le a\le\frac43" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="-2\le a\le\frac43" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="(m+1)x^2-(m+1)x+2>0" />

                        <p className="leading-8 text-gray-300">
                            이 모든 실수 <InlineMath math="x" />에 대하여 항상
                            성립하도록 하는 실수 <InlineMath math="m" />의 값의
                            범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                <InlineMath math="x^2" />의 계수 <InlineMath math="m+1" />이 <InlineMath math="0" />이 되는 경우와
                                그렇지 않은 경우를 나누어 살펴봅니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="m+1=0" />일 때
                            </p>

                            <BlockMath math="m=-1" />

                            <p>
                                주어진 부등식은
                            </p>

                            <BlockMath math="2>0" />

                            <p>
                                이 되므로 모든 실수 <InlineMath math="x" />에 대하여
                                항상 성립합니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="m=-1" />은 조건을 만족합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="m+1\ne0" />일 때
                            </p>

                            <p>
                                주어진 식이 모든 실수 <InlineMath math="x" />에 대하여
                                항상 양수가 되려면 그래프가 아래로 볼록이고 <InlineMath math="x" />축과 만나지 않아야 합니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="m+1>0" />

                            <BlockMath math="D<0" />

                            <p>
                                이어야 합니다. 먼저
                            </p>

                            <BlockMath math="m>-1" />

                            <p>
                                이고, 판별식을 계산하면
                            </p>

                            <BlockMath math="D=\{-(m+1)\}^2-4(m+1)\cdot2" />

                            <BlockMath math="D=(m+1)(m-7)" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="(m+1)(m-7)<0" />

                            <BlockMath math="-1<m<7" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ①의 <InlineMath math="m=-1" />과 ②의 범위를 합하면
                            </p>

                            <BlockMath math="-1\le m<7" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="-1\le m<7" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="m=-1" />이면 이차식이 아니라
                                    양의 상수 <InlineMath math="2" />가 됩니다.
                                    따라서 이차식의 조건 <InlineMath math="m+1>0,\;D<0" />만 사용하면 <InlineMath math="m=-1" />을 빠뜨리게 됩니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식
                        </p>

                        <BlockMath math="kx^2-4x+(k-3)\le0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 없을 때, 실수 <InlineMath math="k" />의 값의 범위를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 부등식의 해가 없다는 것은 모든 실수 <InlineMath math="x" />에 대하여
                            </p>

                            <BlockMath math="kx^2-4x+k-3>0" />

                            <p>
                                이 성립한다는 뜻입니다.
                            </p>

                            <p>
                                즉, 그래프 <InlineMath math="y=kx^2-4x+k-3" />이 항상 <InlineMath math="x" />축보다 위에 있어야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                먼저 <InlineMath math="k=0" />이면 주어진 식은
                            </p>

                            <BlockMath math="-4x-3" />

                            <p>
                                인 일차식이므로 모든 실수에서 항상 양수가 될 수 없습니다.
                                따라서 <InlineMath math="k\ne0" />이고, 이차식이 항상
                                양수가 되기 위한 조건은
                            </p>

                            <BlockMath math="k>0,\qquad \frac {D}{4}<0" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                판별식을 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac {D}{4}
&=(-2)^2-k(k-3)\\
&=4-k^2+3k\\
&=-(k-4)(k+1)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-(k-4)(k+1)<0" />

                            <BlockMath math="(k-4)(k+1)>0" />

                            <BlockMath math="k<-1\quad\text{또는}\quad k>4" />

                            <p>
                                여기에 <InlineMath math="k>0" />을 함께 적용하면
                            </p>

                            <BlockMath math="k>4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k>4" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    부등식 <InlineMath math="f(x)\le0" />의 해가 없다는 것은
                                    모든 실수 <InlineMath math="x" />에 대하여 <InlineMath math="f(x)>0" />이라는 뜻입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차부등식
                        </p>

                        <BlockMath math="(m+1)x^2-2(m+1)x-5\ge0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 오직 한 개 <InlineMath math="x=a" />만 존재할 때, <InlineMath math="a+m" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                이차부등식의 해가 오직 한 개만 존재하려면 그래프가 <InlineMath math="x" />축에 한 점에서 접하고,
                                그 한 점에서만 함수값이 <InlineMath math="0" /> 이상이어야 합니다.
                            </p>

                            <p>
                                따라서 그래프는 위로 볼록이어야 하고 판별식은 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="m+1<0,\qquad D=0" />

                            <hr className="border-white/10" />

                            <p>
                                <InlineMath math="D/4" />를 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=\{-(m+1)\}^{2}-(m+1)(-5)\\
&=(m+1)^2+5(m+1)\\
&=(m+1)(m+6)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac{D}{4}=0" />

                            <BlockMath math="(m+1)(m+6)=0" />

                            <BlockMath math="m=-1\quad\text{또는}\quad m=-6" />

                            <hr className="border-white/10" />

                            <p>
                                그런데 <InlineMath math="m=-1" />이면 이차항과 일차항이
                                모두 사라져 부등식은
                            </p>

                            <BlockMath math="-5\ge0" />

                            <p>
                                이 되므로 해가 없습니다. 따라서
                            </p>

                            <BlockMath math="m=-6" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                이때 주어진 부등식은
                            </p>

                            <BlockMath math="-5x^2+10x-5\ge0" />

                            <BlockMath math="-5(x-1)^2\ge0" />

                            <p>
                                이므로 오직
                            </p>

                            <BlockMath math="x=1" />

                            <p>
                                일 때만 성립합니다. 따라서
                            </p>

                            <BlockMath math="a=1" />

                            <BlockMath math="a+m=1+(-6)=-5" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a+m=-5" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="f(x)\ge0" />의 해가 한 개뿐이면
                                    그래프는 <InlineMath math="x" />축에 접하는
                                    위로 볼록인 그래프입니다. 즉, 최고차항의 계수는
                                    음수이고 판별식은 <InlineMath math="0" />입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식
                        </p>

                        <BlockMath math="(a+1)x^2-(a+1)x+a+4\ge0" />

                        <p className="leading-8 text-gray-300">
                            의 해가 존재하도록 하는 실수 <InlineMath math="a" />의 값의
                            범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                해가 존재하는 경우를 모두 직접 나누기보다,
                                먼저 <b className="text-white">해가 존재하지 않는 경우</b>를
                                구한 뒤 그 반대 범위를 찾습니다.
                            </p>

                            <p>
                                주어진 부등식의 해가 존재하지 않으려면 모든 실수 <InlineMath math="x" />에 대하여
                            </p>

                            <BlockMath math="(a+1)x^2-(a+1)x+a+4<0" />

                            <p>
                                이어야 합니다.
                            </p>

                            <p>
                                이차식이 항상 음수가 되기 위한 조건은
                            </p>

                            <BlockMath math="a+1<0,\qquad D<0" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                먼저
                            </p>

                            <BlockMath math="a+1<0" />

                            <BlockMath math="a<-1" />

                            <p>
                                입니다. 판별식을 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=\{-(a+1)\}^2-4(a+1)(a+4)\\
&=(a+1)\{(a+1)-4(a+4)\}\\
&=-3(a+1)(a+5)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-3(a+1)(a+5)<0" />

                            <BlockMath math="(a+1)(a+5)>0" />

                            <BlockMath math="a<-5\quad\text{또는}\quad a>-1" />

                            <p>
                                여기에 <InlineMath math="a<-1" />을 함께 적용하면,
                                해가 존재하지 않는 범위는
                            </p>

                            <BlockMath math="a<-5" />

                            <hr className="border-white/10" />

                            <p>
                                따라서 주어진 부등식의 해가 존재하는 범위는 그 반대인
                            </p>

                            <BlockMath math="a\ge-5" />

                            <p>
                                입니다. 특히 <InlineMath math="a=-5" />일 때에는
                            </p>

                            <BlockMath math="-4x^2+4x-1\ge0" />

                            <BlockMath math="-(2x-1)^2\ge0" />

                            <p>
                                이므로 <InlineMath math="x=\frac12" />이라는 하나의 해가
                                존재합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a\ge-5" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="f(x)\ge0" />의 해가 존재하지 않는 것은 <InlineMath math="f(x)<0" />이 모든 실수에서 성립하는
                                    경우입니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        절대부등식 문제에서는 먼저 식의 차수를 확인하고,
                        계수에 따른 그래프의 개형을 판단합니다.
                    </p>

                    <div className="mt-5 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ① 이차식인 경우
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="a" />의 부호로 그래프의 방향을 정하고,
                                판별식 <InlineMath math="D=b^2-4ac" />로 <InlineMath math="x" />축과의 교점 개수를 판단합니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ② 일차식인 경우
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                기울기가 <InlineMath math="0" />이 아니면
                                그래프가 직선이므로 모든 실수에서 부호가 일정할 수 없습니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ③ 상수식인 경우
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                상수의 부호만 확인하면 됩니다.
                            </p>
                        </div>
                    </div>

                    <p className="mt-5 font-semibold leading-8 text-white">
                        절대부등식은 그래프의 개형에 맞는 계수의 조건을 찾는 문제입니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold text-white">
                    3.12 이차함수와 직선의 위치관계와 부등식
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    2.29와 2.30에서는 이차함수와 직선의 교점을 구하고,
                    교점을 이용하여 식을 만드는 방법을 배웠습니다.
                    이번에는 두 함수의 위아래 관계를 부등식으로 해석하는 방법을 알아봅니다.
                </p>

                {/* 이전 단원과의 연결 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        교점과 부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 함수 <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />의 그래프가 만나는 점에서는
                        두 함수의 <InlineMath math="y" />좌표가 같습니다.
                    </p>

                    <BlockMath math="f(x)=g(x)" />

                    <p className="leading-8 text-gray-300">
                        반대로 두 그래프가 만나지 않는 구간에서는
                        어느 한 함수가 다른 함수보다 위에 있거나 아래에 있습니다.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <BlockMath math="f(x)>g(x)" />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="y=f(x)" />의 그래프가 <InlineMath math="y=g(x)" />의 그래프보다 위에 있습니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <BlockMath math="f(x)<g(x)" />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="y=f(x)" />의 그래프가 <InlineMath math="y=g(x)" />의 그래프보다 아래에 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 같은 식을 더해도 변하지 않는 관계 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        양변에 같은 함수를 더해도 위치관계는 변하지 않는다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 이차부등식을 생각해 봅시다.
                    </p>

                    <BlockMath math="x^2-x-6<0" />

                    <p className="leading-8 text-gray-300">
                        양변에 같은 식 <InlineMath math="ax^2+bx+c" />를 더하면
                    </p>

                    <BlockMath
                        math={String.raw`
\begin{aligned}
x^2-x-6+ax^2+bx+c
&<ax^2+bx+c
\end{aligned}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath
                        math={String.raw`
(1+a)x^2+(-1+b)x+(-6+c)
<
ax^2+bx+c
`}
                    />

                    <p className="leading-8 text-gray-300">
                        로 나타낼 수 있습니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 함수의 차이를 계산하면
                    </p>

                    <BlockMath
                        math={String.raw`
\begin{aligned}
&\{(1+a)x^2+(-1+b)x+(-6+c)\}\\
&\qquad -(ax^2+bx+c)\\
&=x^2-x-6
\end{aligned}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서 <InlineMath math="a,b,c" />의 값이
                        어떻게 바뀌더라도 두 함수의 높이 차이는 항상 같습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <p className="leading-8 text-gray-300">
                            그러므로 두 그래프의
                        </p>

                        <div className="mt-3 space-y-2 leading-8 text-gray-300">
                            <p>
                                · 교점의 <InlineMath math="x" />좌표
                            </p>

                            <p>
                                · 어느 그래프가 위에 있는지 또는 아래에 있는지
                            </p>
                        </div>

                        <p className="mt-3 leading-8 text-gray-300">
                            는 변하지 않습니다.
                        </p>
                    </div>
                </div>

                {/* 예시의 해 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        같은 해를 갖는 부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        원래 부등식의 좌변을 인수분해하면
                    </p>

                    <BlockMath math="x^2-x-6=(x+2)(x-3)" />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath math="x^2-x-6<0" />

                    <p className="leading-8 text-gray-300">
                        의 해는
                    </p>

                    <BlockMath math="-2<x<3" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath
                        math={String.raw`
(1+a)x^2+(-1+b)x+(-6+c)
<
ax^2+bx+c
`}
                    />

                    <p className="leading-8 text-gray-300">
                        의 해도 <InlineMath math="a,b,c" />의 값에 관계없이 항상
                    </p>

                    <BlockMath math="-2<x<3" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                {/* 부등식을 한쪽으로 정리하는 이유 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        부등식을 한쪽으로 정리하는 이유
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 함수 <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />의 대소관계를 조사할 때에는
                        두 함수의 차이를 생각하면 됩니다.
                    </p>

                    <BlockMath math="f(x)<g(x)" />

                    <p className="leading-8 text-gray-300">
                        에서 우변의 모든 항을 왼쪽으로 이항하면
                    </p>

                    <BlockMath math="f(x)-g(x)<0" />

                    <p className="leading-8 text-gray-300">
                        이 됩니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 두 함수의 위치관계를 직접 비교하는 대신
                    </p>

                    <BlockMath math="y=f(x)-g(x)" />

                    <p className="leading-8 text-gray-300">
                        의 그래프와
                    </p>

                    <BlockMath math="y=0" />

                    <p className="leading-8 text-gray-300">
                        즉, <InlineMath math="x" />축과의 위치관계를 조사하면 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <BlockMath
                            math={String.raw`
f(x)<g(x)
\quad\Longleftrightarrow\quad
f(x)-g(x)<0
`}
                        />

                        <BlockMath
                            math={String.raw`
f(x)>g(x)
\quad\Longleftrightarrow\quad
f(x)-g(x)>0
`}
                        />
                    </div>
                </div>
                <div className="mt-8">
                    <QuadraticRelationExplorer />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차함수 <InlineMath math="y=x^2-2x+k" />의 그래프가
                            직선 <InlineMath math="y=2x+1" />과 적어도 한 점에서 만나고,
                            직선 <InlineMath math="y=-x-2" />와 만나지 않도록 하는
                            정수 <InlineMath math="k" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            {/* 첫 번째 직선 */}
                            <p className="font-semibold text-white">
                                ① 직선 <InlineMath math="y=2x+1" />과 적어도 한 점에서 만나는 조건
                            </p>

                            <p>
                                두 그래프의 교점에서는 함수값이 같으므로
                            </p>

                            <BlockMath math="x^2-2x+k=2x+1" />

                            <p>
                                한쪽으로 정리하면
                            </p>

                            <BlockMath math="x^2-4x+k-1=0" />

                            <p>
                                두 그래프가 적어도 한 점에서 만나려면 이 방정식이
                                실근을 가져야 하므로
                            </p>

                            <BlockMath math="D\ge0" />

                            <p>
                                입니다. <InlineMath math="D/4" />를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-2)^2-(k-1)\\
&=5-k
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="5-k\ge0" />

                            <BlockMath math="k\le5" />

                            <hr className="border-white/10" />

                            {/* 두 번째 직선 */}
                            <p className="font-semibold text-white">
                                ② 직선 <InlineMath math="y=-x-2" />와 만나지 않는 조건
                            </p>

                            <p>
                                두 그래프의 교점을 구하는 방정식은
                            </p>

                            <BlockMath math="x^2-2x+k=-x-2" />

                            <BlockMath math="x^2-x+k+2=0" />

                            <p>
                                두 그래프가 만나지 않으려면 이 방정식이 실근을 갖지 않아야
                                하므로
                            </p>

                            <BlockMath math="D<0" />

                            <p>
                                입니다. 판별식을 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=(-1)^2-4(k+2)\\
&=-4k-7
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-4k-7<0" />

                            <BlockMath math="k>-\frac74" />

                            <hr className="border-white/10" />

                            {/* 조건 결합 */}
                            <p>
                                두 조건을 동시에 만족해야 하므로
                            </p>

                            <BlockMath math="-\frac74<k\le5" />

                            <p>
                                이 범위에 있는 정수 <InlineMath math="k" />는
                            </p>

                            <BlockMath math="-1,\;0,\;1,\;2,\;3,\;4,\;5" />

                            <p>
                                로 모두 <InlineMath math="7" />개입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 정수 <InlineMath math="k" />의 개수는
                                </p>

                                <BlockMath math="7" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <div className="mt-2 space-y-2 text-gray-300">
                                    <p>
                                        적어도 한 점에서 만남 <InlineMath math="\;\Longleftrightarrow\;D\ge0" />
                                    </p>

                                    <p>
                                        만나지 않음 <InlineMath math="\;\Longleftrightarrow\;D<0" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차항의 계수가 음수인 이차함수 <InlineMath math="y=f(x)" />
                            의 그래프와 직선 <InlineMath math="y=2x+1" />
                            이 두 점에서 만나고,
                            그 교점의 <InlineMath math="y" />
                            좌표가 각각 <InlineMath math="3,\,11" />
                            이다.
                            <br />
                            이때 <InlineMath math="f(x)-2x-1>0" />
                            을 만족시키는 모든 정수 <InlineMath math="x" />
                            의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p className="font-semibold text-white">
                                ① 교점의 <InlineMath math="x" />좌표를 구합니다.
                            </p>

                            <p>
                                교점은 직선 <InlineMath math="y=2x+1" />
                                위의 점이므로
                            </p>

                            <BlockMath math="y=3,\;11" />

                            <p>
                                을 직선의 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
2x+1&=3 \\
x&=1
\end{aligned}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
2x+1&=11 \\
x&=5
\end{aligned}
`}
                            />

                            <p>
                                따라서 두 그래프의 교점의 <InlineMath math="x" />
                                좌표는
                            </p>

                            <BlockMath math="x=1,\;5" />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 부등식을 그래프로 해석합니다.
                            </p>

                            <BlockMath math="f(x)-2x-1>0" />

                            <p>
                                은
                            </p>

                            <BlockMath math="f(x)>2x+1" />

                            <p>
                                과 같으므로,
                                이차함수의 그래프가 직선보다 위에 있는 구간을 찾으면 됩니다.
                            </p>

                            <p>
                                또한 이차항의 계수가 음수이므로 포물선은 아래로 볼록입니다.
                                따라서 두 교점 사이에서만 포물선이 직선보다 위에 있습니다.
                            </p>

                            <BlockMath math="1<x<5" />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 정수를 구합니다.
                            </p>

                            <p>
                                조건을 만족하는 정수는
                            </p>

                            <BlockMath math="2,\;3,\;4" />

                            <p>
                                이므로 그 합은
                            </p>

                            <BlockMath math="2+3+4=9" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    답
                                </p>

                                <BlockMath math="9" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-300">
                                    <li>교점의 y좌표가 주어지면 직선의 식에 대입하여 x좌표를 구합니다.</li>
                                    <li><InlineMath math="f(x)-g(x)>0" />은 이차함수가 직선보다 위에 있는 구간입니다.</li>
                                    <li>아래로 볼록이면 두 교점 사이에서 부등식이 성립합니다.</li>
                                </ul>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차함수 <InlineMath math="y=ax^2-4x-5" />의 그래프가
                            이차함수 <InlineMath math="y=2x^2-2ax-3" />의 그래프보다
                            항상 아래쪽에 있도록 하는 실수 <InlineMath math="a" />의
                            값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                첫 번째 그래프가 두 번째 그래프보다 항상 아래쪽에 있다는 것은
                                모든 실수 <InlineMath math="x" />에 대하여
                            </p>

                            <BlockMath math="ax^2-4x-5<2x^2-2ax-3" />

                            <p>
                                이 성립한다는 뜻입니다.
                            </p>

                            <p>
                                모든 항을 왼쪽으로 이항하면
                            </p>

                            <BlockMath math="(a-2)x^2+(2a-4)x-2<0" />

                            <p>
                                이 부등식이 모든 실수 <InlineMath math="x" />에 대하여
                                항상 성립해야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="a-2=0" />인 경우
                            </p>

                            <BlockMath math="a=2" />

                            <p>
                                이때 부등식은
                            </p>

                            <BlockMath math="-2<0" />

                            <p>
                                이 되므로 모든 실수 <InlineMath math="x" />에 대하여
                                항상 성립합니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="a=2" />는 조건을 만족합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="a-2\ne0" />인 경우
                            </p>

                            <p>
                                이차식이 모든 실수 <InlineMath math="x" />에 대하여
                                항상 음수가 되려면 그래프가 위로 볼록이고 <InlineMath math="x" />축과 만나지 않아야 합니다.
                            </p>

                            <BlockMath math="a-2<0,\qquad D<0" />

                            <p>
                                먼저
                            </p>

                            <BlockMath math="a<2" />

                            <p>
                                입니다. 일차항의 계수가 짝수이므로 <InlineMath math="\frac{D}{4}" />를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(a-2)^2-(a-2)(-2)\\
&=(a-2)^2+2(a-2)\\
&=a(a-2)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a(a-2)<0" />

                            <BlockMath math="0<a<2" />

                            <p>
                                이 범위에서는 <InlineMath math="a<2" />도 만족하므로
                            </p>

                            <BlockMath math="0<a<2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ①과 ②의 결과를 합하면
                            </p>

                            <BlockMath math="0<a\le2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 실수 <InlineMath math="a" />의 값의 범위는
                                </p>

                                <BlockMath math="0<a\le2" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="a=2" />이면 정리한 식이 이차식이 아니라
                                    음의 상수 <InlineMath math="-2" />가 됩니다.
                                    따라서 이차식의 조건만 적용하면 <InlineMath math="a=2" />를 빠뜨릴 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="-1\le x\le1" />에서 이차부등식
                        </p>

                        <BlockMath math="x^2-2x+3\le -x^2+k" />

                        <p className="leading-8 text-gray-300">
                            가 항상 성립할 때, 실수 <InlineMath math="k" />의 최솟값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                모든 항을 왼쪽으로 이항하면
                            </p>

                            <BlockMath math="2x^2-2x+3\le k" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 구간 <InlineMath math="-1\le x\le1" />
                                에서 함수
                            </p>

                            <BlockMath math="f(x)=2x^2-2x+3" />

                            <p>
                                의 모든 함수값보다 <InlineMath math="k" />
                                가 크거나 같아야 합니다.
                            </p>

                            <p>
                                즉, <InlineMath math="k" />
                                의 최솟값은 <InlineMath math="f(x)" />
                                의 최댓값입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이차함수 <InlineMath math="f(x)=2x^2-2x+3" />
                                은 아래로 볼록이므로,
                                구간에서의 최댓값은 양 끝점에서 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(-1)
&=2(-1)^2-2(-1)+3\\
&=7
\end{aligned}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(1)
&=2(1)^2-2(1)+3\\
&=3
\end{aligned}
`}
                            />

                            <p>
                                따라서 구간에서의 최댓값은
                            </p>

                            <BlockMath math="7" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="k\ge7" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 실수 <InlineMath math="k" />
                                    의 최솟값은
                                </p>

                                <BlockMath math="7" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    구간에서 <InlineMath math="f(x)\le k" />
                                    가 항상 성립하려면 <InlineMath math="k" />
                                    는 그 구간에서의 <InlineMath math="f(x)" />
                                    의 최댓값 이상이어야 합니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차부등식 <InlineMath math="x^2+8x+12\le0" />을 만족시키는 모든 실수 <InlineMath math="x" />에 대하여 이차부등식
                        </p>

                        <BlockMath math="x^2-2ax+a^2+a>0" />

                        <p className="leading-8 text-gray-300">
                            가 항상 성립할 때, 실수 <InlineMath math="a" />의 값의 범위를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 첫 번째 이차부등식의 해를 구합니다.
                            </p>

                            <BlockMath math="x^2+8x+12\le0" />

                            <BlockMath math="(x+6)(x+2)\le0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-6\le x\le-2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                두 번째 부등식의 좌변을 정리하면
                            </p>

                            <BlockMath math="x^2-2ax+a^2+a=(x-a)^2+a" />

                            <p>
                                입니다. 따라서 구간 <InlineMath math="-6\le x\le-2" />에서
                            </p>

                            <BlockMath math="f(x)=(x-a)^2+a" />

                            <p>
                                의 최솟값이 <InlineMath math="0" />보다 커야 합니다.
                            </p>

                            <p>
                                함수 <InlineMath math="f(x)" />의 꼭짓점의 <InlineMath math="x" />좌표는 <InlineMath math="a" />이므로, <InlineMath math="a" />의 위치에 따라 나누어 살펴봅니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="a<-6" />인 경우
                            </p>

                            <p>
                                꼭짓점이 구간의 왼쪽에 있으므로 구간에서의 최솟값은 <InlineMath math="x=-6" />일 때입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(-6)
&=(-6-a)^2+a\\
&=(a+6)^2+a\\
&=a^2+13a+36
\end{aligned}
`}
                            />

                            <p>
                                이 값이 양수이어야 하므로
                            </p>

                            <BlockMath math="a^2+13a+36>0" />

                            <BlockMath math="(a+9)(a+4)>0" />

                            <BlockMath math="a<-9\quad\text{또는}\quad a>-4" />

                            <p>
                                여기에 <InlineMath math="a<-6" />을 함께 적용하면
                            </p>

                            <BlockMath math="a<-9" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="-6\le a\le-2" />인 경우
                            </p>

                            <p>
                                꼭짓점이 주어진 구간 안에 있으므로 최솟값은 <InlineMath math="x=a" />일 때입니다.
                            </p>

                            <BlockMath math="f(a)=a" />

                            <p>
                                그러나 <InlineMath math="-6\le a\le-2" />이므로 <InlineMath math="f(a)>0" />을 만족할 수 없습니다.
                            </p>

                            <p>
                                따라서 이 경우에는 조건을 만족하는 <InlineMath math="a" />가 없습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ <InlineMath math="a>-2" />인 경우
                            </p>

                            <p>
                                꼭짓점이 구간의 오른쪽에 있으므로 구간에서의 최솟값은 <InlineMath math="x=-2" />일 때입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(-2)
&=(-2-a)^2+a\\
&=(a+2)^2+a\\
&=a^2+5a+4
\end{aligned}
`}
                            />

                            <p>
                                이 값이 양수이어야 하므로
                            </p>

                            <BlockMath math="a^2+5a+4>0" />

                            <BlockMath math="(a+1)(a+4)>0" />

                            <BlockMath math="a<-4\quad\text{또는}\quad a>-1" />

                            <p>
                                여기에 <InlineMath math="a>-2" />를 함께 적용하면
                            </p>

                            <BlockMath math="a>-1" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                세 경우의 결과를 합하면
                            </p>

                            <BlockMath math="a<-9\quad\text{또는}\quad a>-1" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 실수 <InlineMath math="a" />의 값의 범위는
                                </p>

                                <BlockMath math="a<-9\quad\text{또는}\quad a>-1" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    제한된 구간에서 부등식이 항상 성립하는 조건은 해당
                                    함수의 구간 내 최솟값을 이용하여 구합니다. 꼭짓점의
                                    위치가 구간의 왼쪽, 내부, 오른쪽 중 어디에 있는지에 따라
                                    최솟값이 나오는 위치가 달라집니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        핵심정리
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">
                        <p>
                            ① 두 함수가 만나는 점에서는 두 함수의 값이 같습니다.
                        </p>

                        <BlockMath math="f(x)=g(x)" />

                        <p>
                            ② 한 함수가 다른 함수보다 위에 있다는 것은 함수값이 더 크다는
                            뜻입니다.
                        </p>

                        <BlockMath math="f(x)>g(x)" />

                        <p>
                            ③ 양변에 같은 함수를 더하거나 빼도 두 함수의 교점과
                            위아래 관계는 변하지 않습니다.
                        </p>

                        <p>
                            ④ 부등식을 한쪽으로 이항하면 두 함수의 비교를
                            하나의 함수와 <InlineMath math="x" />축의 비교로 바꿀 수
                            있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
f(x)\gtrless g(x)
\quad\Longleftrightarrow\quad
f(x)-g(x)\gtrless0
`}
                        />
                    </div>

                    <p className="mt-5 font-semibold leading-8 text-white">
                        부등식을 푼다는 것은 결국 두 함수의 높이를 비교하는 것입니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold text-white">
                    3.13 연립부등식
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    두 개 이상의 부등식을 동시에 만족하는 해를 구하는 방법을
                    알아봅니다.
                </p>

                {/* 연립부등식의 뜻 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        연립부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 개 이상의 부등식을 한꺼번에 만족하는
                        <InlineMath math="x" />의 값을 구하는 것을
                        <b className="text-white"> 연립부등식을 푼다</b>고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <BlockMath
                            math={String.raw`
\begin{cases}
f(x)>0\\
g(x)\le0
\end{cases}
`}
                        />

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            두 부등식이 모두 성립하는
                            <InlineMath math="x" />의 범위를 구합니다.
                        </p>
                    </div>
                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        연립부등식을 푸는 순서
                    </h3>

                    <div className="space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ① 각각의 부등식을 풉니다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                연립된 부등식을 하나씩 따로 풀어 각각의 해를 구합니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ② 각 해를 수직선에 나타냅니다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                열린 점과 닫힌 점을 구분하여 각 부등식의 해를
                                수직선에 표시합니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ③ 공통부분을 찾습니다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                여러 해 중에서 모든 부등식을 동시에 만족하는 부분만
                                남깁니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="font-semibold text-white">
                                ④ 공통부분을 답으로 씁니다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                공통부분이 없으면 해가 없다고 합니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 기본 예시 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        기본 예시
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 연립부등식을 생각해 봅시다.
                    </p>

                    <BlockMath
                        math={String.raw`
\begin{cases}
x>-2\\
x\le3
\end{cases}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        첫 번째 부등식의 해는
                    </p>

                    <BlockMath math="x>-2" />

                    <p className="leading-8 text-gray-300">
                        이고, 두 번째 부등식의 해는
                    </p>

                    <BlockMath math="x\le3" />

                    <p className="leading-8 text-gray-300">
                        입니다. 두 부등식을 동시에 만족하는 공통부분은
                    </p>

                    <BlockMath math="-2<x\le3" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                {/* 수직선 해석 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        수직선으로 나타내기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        각 부등식의 해를 같은 수직선에 나타내면 공통부분을 쉽게
                        찾을 수 있습니다.
                    </p>

                    <div className="mt-5 space-y-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <div>
                            <p className="mb-3 font-semibold text-blue-300">
                                첫 번째 부등식
                            </p>

                            <BlockMath math="x>-2" />
                        </div>

                        <div>
                            <p className="mb-3 font-semibold text-purple-300">
                                두 번째 부등식
                            </p>

                            <BlockMath math="x\le3" />
                        </div>

                        <div>
                            <p className="mb-3 font-semibold text-green-300">
                                공통부분
                            </p>

                            <BlockMath math="-2<x\le3" />
                        </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <p className="font-semibold text-yellow-300">
                            주의
                        </p>

                        <p className="mt-2 leading-8 text-gray-300">
                            부등호에 등호가 포함되지 않으면 열린 점으로 표시하고,
                            등호가 포함되면 닫힌 점으로 표시합니다.
                        </p>
                    </div>
                </div>

                {/* 다양한 연립부등식 */}
                <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        여러 종류의 연립부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        연립부등식은 부등식의 종류가 서로 달라도 같은 순서로 풉니다.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-4 text-center font-semibold text-blue-300">
                                일차부등식과 일차부등식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
2x-1>0\\
x+3\le5
\end{cases}
`}
                            />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-4 text-center font-semibold text-purple-300">
                                일차부등식과 이차부등식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
x+1>0\\
x^2-5x+6\le0
\end{cases}
`}
                            />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-4 text-center font-semibold text-yellow-300">
                                절댓값이 포함된 부등식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
|x|<3\\
x^2-x-2\ge0
\end{cases}
`}
                            />
                        </div>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        일차부등식, 이차부등식, 절댓값이 포함된 부등식도 각각의 해를
                        구한 뒤 공통부분을 찾으면 됩니다.
                    </p>
                </div>

                {/* 해가 없는 경우 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        해가 없는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        각각의 부등식은 해를 갖더라도 서로 겹치는 부분이 없을 수
                        있습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
\begin{cases}
x<1\\
x\ge3
\end{cases}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        두 조건을 동시에 만족하는 실수
                        <InlineMath math="x" />는 없으므로 이 연립부등식은
                        해가 없습니다.
                    </p>
                </div>

                {/* 한쪽 해에 다른 해가 포함되는 경우 */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        한쪽 조건이 더 강한 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        한 부등식의 해가 다른 부등식의 해 안에 모두 들어가는 경우에는
                        더 좁은 범위가 답이 됩니다.
                    </p>

                    <BlockMath
                        math={String.raw`
\begin{cases}
-3<x<5\\
-1\le x\le2
\end{cases}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        두 조건을 동시에 만족하는 범위는
                    </p>

                    <BlockMath math="-1\le x\le2" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-200">
                            다음 두 부등식을 동시에 만족시키는 정수{" "}
                            <InlineMath math="x" />
                            의 개수를 구하시오.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
3x^2-8x-16<0\\
2x^2-7x+6\ge0
\end{cases}
`}
                        />
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>먼저 첫 번째 부등식을 풉니다.</p>

                            <BlockMath math="3x^2-8x-16=(3x+4)(x-4)" />

                            <BlockMath math="(3x+4)(x-4)<0" />

                            <p>따라서</p>

                            <BlockMath math="-\frac43<x<4" />

                            <hr className="border-white/10" />

                            <p>다음으로 두 번째 부등식을 풉니다.</p>

                            <BlockMath math="2x^2-7x+6=(2x-3)(x-2)" />

                            <BlockMath math="(2x-3)(x-2)\ge0" />

                            <p>따라서</p>

                            <BlockMath
                                math={String.raw`
x\le\frac32
\quad\text{또는}\quad
x\ge2
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                이제 두 부등식의 해를 수직선에 나타내고 공통부분을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
-\frac43<x\le\frac32
\quad\text{또는}\quad
2\le x<4
`}
                            />

                            <p>이를 만족하는 정수는</p>

                            <BlockMath math="-1,\;0,\;1,\;2,\;3" />

                            <p>이므로 개수는 5입니다.</p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{5}" />
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
                        <p className="leading-8 text-gray-200">
                            연립부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
x^2-4x+4\le0\\
x^2-x+1>0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            을 푸시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                먼저 첫 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2-4x+4=(x-2)^2" />

                            <BlockMath math="(x-2)^2\le0" />

                            <p>
                                제곱은 항상 0 이상이므로
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                다음으로 두 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2-x+1>0" />

                            <p>
                                판별식은
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{D}{4}
=\left(-\frac12\right)^2-1
=-\frac34<0
`}
                            />

                            <p>
                                이고 이차항의 계수가 양수이므로 모든 실수{" "}
                                <InlineMath math="x" />
                                에 대하여 항상 성립합니다.
                            </p>

                            <p>
                                따라서 두 부등식의 공통부분은
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{x=2}" />
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
                        <p className="leading-8 text-gray-200">
                            연립부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
x^2-x-p>0\\
x^2-x-q\le0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            을 만족하는 <InlineMath math="x" />의 범위가
                        </p>

                        <BlockMath math="a\le x<b,\qquad c<x\le d" />

                        <p className="leading-8 text-gray-200">
                            라고 할 때, <InlineMath math="a+b+c+d" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                첫 번째 부등식의 경계가 되는 방정식은
                            </p>

                            <BlockMath math="x^2-x-p=0" />

                            <p>
                                입니다. 이 방정식의 두 근은 연립부등식의 해에서
                                등호가 포함되지 않은 두 경계값 <InlineMath math="b,c" />입니다.
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="b+c=1" />

                            <hr className="border-white/10" />

                            <p>
                                두 번째 부등식의 경계가 되는 방정식은
                            </p>

                            <BlockMath math="x^2-x-q=0" />

                            <p>
                                입니다. 이 방정식의 두 근은 연립부등식의 해에서
                                등호가 포함된 두 경계값 <InlineMath math="a,d" />입니다.
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="a+d=1" />

                            <hr className="border-white/10" />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a+b+c+d
&=(a+d)+(b+c)\\
&=1+1\\
&=2
\end{aligned}
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{2}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    등호가 포함되지 않은 경계값 <InlineMath math="b,c" />는 <InlineMath math="x^2-x-p=0" />의 두 근이고,
                                    등호가 포함된 경계값 <InlineMath math="a,d" />는 <InlineMath math="x^2-x-q=0" />의 두 근입니다.
                                    두 방정식 모두 두 근의 합은 <InlineMath math="1" />입니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-200">
                            연립부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
x^2-2x-3\le0\\
(x-k)(x-1)>0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            의 해가 <InlineMath math="1<x\le3" />일 때, 실수{" "}
                            <InlineMath math="k" />의 최댓값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 첫 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2-2x-3=(x+1)(x-3)" />

                            <BlockMath math="(x+1)(x-3)\le0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-1\le x\le3" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                연립부등식의 해가 <InlineMath math="1<x\le3" />이므로, 두 번째 부등식은
                                구간 <InlineMath math="-1\le x\le3" />에서 <InlineMath math="x>1" />인 부분만 남겨야 합니다.
                            </p>

                            <p>
                                두 번째 부등식
                            </p>

                            <BlockMath math="(x-k)(x-1)>0" />

                            <p>
                                에서 <InlineMath math="k<1" />이면 두 근의 크기는
                            </p>

                            <BlockMath math="k<1" />

                            <p>
                                이고, 최고차항의 계수가 양수이므로 부등식의 해는
                            </p>

                            <BlockMath
                                math={String.raw`
x<k
\quad\text{또는}\quad
x>1
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                이때 첫 번째 부등식의 해 <InlineMath math="-1\le x\le3" />과 겹치는 부분에서 <InlineMath math="x<k" />인 구간이 나타나지 않아야 합니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="k" />는 첫 번째 구간의 왼쪽
                                끝점인 <InlineMath math="-1" />보다 작거나 같아야 합니다.
                            </p>

                            <BlockMath math="k\le-1" />

                            <p>
                                실제로 <InlineMath math="k\le-1" />이면 <InlineMath math="x<k" />인 부분은 <InlineMath math="-1\le x\le3" />과 겹치지 않으므로,
                                두 부등식의 공통부분은
                            </p>

                            <BlockMath math="1<x\le3" />

                            <p>
                                이 됩니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="k" />의 값의 범위는
                            </p>

                            <BlockMath math="k\le-1" />

                            <p>
                                이므로 최댓값은 <InlineMath math="-1" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-1}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-200">
                            연립부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
|x-1|\le3\\
x^2-7x+10>0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            을 만족시키는 정수 <InlineMath math="x" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 첫 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="|x-1|\le3" />

                            <p>
                                절댓값 부등식을 풀면
                            </p>

                            <BlockMath math="-3\le x-1\le3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-2\le x\le4" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                다음으로 두 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2-7x+10=(x-2)(x-5)" />

                            <BlockMath math="(x-2)(x-5)>0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
x<2
\quad\text{또는}\quad
x>5
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                두 부등식의 해를 수직선에 나타내고 공통부분을 구합니다.
                            </p>

                            <BlockMath math="-2\le x<2" />

                            <p>
                                이를 만족시키는 정수는
                            </p>

                            <BlockMath math="-2,\;-1,\;0,\;1" />

                            <p>
                                이므로 모두 <InlineMath math="4" />개입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{4}" />
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
                        <p className="leading-8 text-gray-200">
                            등식
                        </p>

                        <BlockMath
                            math={String.raw`
\frac{\sqrt{x^2+5x-6}}
{\sqrt{x^2+2x-15}}
=
-\sqrt{
\frac{x^2+5x-6}
{x^2+2x-15}
}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            을 만족시키는 정수 <InlineMath math="x" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                다음과 같이 놓습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=x^2+5x-6,\qquad
B=x^2+2x-15
`}
                            />

                            <p>
                                복소수에서
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\sqrt A}{\sqrt B}
=
-\sqrt{\frac AB}
`}
                            />

                            <p>
                                가 성립하려면 다음 두 경우를 생각해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=0,\quad B\ne0
`}
                            />

                            <p className="text-center text-gray-400">
                                또는
                            </p>

                            <BlockMath
                                math={String.raw`
A>0,\quad B<0
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="A=0,\;B\ne0" />인 경우
                            </p>

                            <BlockMath math="x^2+5x-6=0" />

                            <BlockMath math="(x+6)(x-1)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x=-6,\;1" />

                            <p>
                                입니다. 두 값에서 분모가 0이 되는지 확인합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
B(-6)
&=(-6)^2+2(-6)-15\\
&=9\ne0
\end{aligned}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
B(1)
&=1^2+2\cdot1-15\\
&=-12\ne0
\end{aligned}
`}
                            />

                            <p>
                                따라서 <InlineMath math="x=-6,\;1" />은 모두 조건을 만족합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="A>0,\;B<0" />인 경우
                            </p>

                            <p>
                                먼저
                            </p>

                            <BlockMath math="x^2+5x-6>0" />

                            <BlockMath math="(x+6)(x-1)>0" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
x<-6
\quad\text{또는}\quad
x>1
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                또한
                            </p>

                            <BlockMath math="x^2+2x-15<0" />

                            <BlockMath math="(x+5)(x-3)<0" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="-5<x<3" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                두 부등식을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="1<x<3" />

                            <p>
                                이고, 이 범위의 정수는
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                따라서 등식을 만족시키는 정수는
                            </p>

                            <BlockMath math="-6,\;1,\;2" />

                            <p>
                                로 모두 <InlineMath math="3" />개입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{3}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    분자가 <InlineMath math="0" />이 되는 경우에는
                                    양변이 모두 <InlineMath math="0" />이 될 수 있지만,
                                    분모가 <InlineMath math="0" />이 되는 값은
                                    반드시 제외해야 합니다.
                                </p>
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
                        <p className="leading-8 text-gray-200">
                            연립부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
x^2-x-6<0\\
x^2-(a+1)x+a<0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            을 만족하는 정수가 단 한 개만 존재하도록 하는 실수{" "}
                            <InlineMath math="a" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 첫 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2-x-6=(x+2)(x-3)" />

                            <BlockMath math="(x+2)(x-3)<0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-2<x<3" />

                            <p>
                                입니다. 이 범위에 있는 정수는
                            </p>

                            <BlockMath math="-1,\;0,\;1,\;2" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                두 번째 부등식의 좌변을 인수분해하면
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-(a+1)x+a=(x-1)(x-a)
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="(x-1)(x-a)<0" />

                            <p>
                                입니다. 두 근 <InlineMath math="1,a" />의 대소관계에 따라
                                나누어 살펴봅니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="a<1" />인 경우
                            </p>

                            <p>
                                두 번째 부등식의 해는
                            </p>

                            <BlockMath math="a<x<1" />

                            <p>
                                입니다. 첫 번째 부등식의 해와 동시에 만족하는 정수는 <InlineMath math="-1,0" /> 중에서 정해집니다.
                            </p>

                            <p>
                                정수가 단 한 개만 존재하려면 <InlineMath math="0" />은 포함되고 <InlineMath math="-1" />은 포함되지 않아야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a<0,\qquad a\ge-1
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-1\le a<0" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="a=1" />인 경우
                            </p>

                            <p>
                                두 번째 부등식은
                            </p>

                            <BlockMath math="(x-1)^2<0" />

                            <p>
                                이 되어 해가 없습니다. 따라서 조건을 만족하지 않습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ <InlineMath math="a>1" />인 경우
                            </p>

                            <p>
                                두 번째 부등식의 해는
                            </p>

                            <BlockMath math="1<x<a" />

                            <p>
                                입니다. 첫 번째 부등식의 해와 동시에 만족할 수 있는 정수는 <InlineMath math="2" />뿐입니다.
                            </p>

                            <p>
                                정수 <InlineMath math="2" />가 포함되려면
                            </p>

                            <BlockMath math="a>2" />

                            <p>
                                이어야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                세 경우를 종합하면 실수 <InlineMath math="a" />의 범위는
                            </p>

                            <BlockMath
                                math={String.raw`
-1\le a<0
\quad\text{또는}\quad
a>2
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-1\le a<0
\quad\text{또는}\quad
a>2}
`}
                                />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 번째 부등식의 한 근은 항상 <InlineMath math="1" />이므로, 부등호가 엄격한 <InlineMath math="<" />인 이 문제에서 <InlineMath math="x=1" />은 해에 포함되지 않습니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-200">
                            연립이차부등식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
x^2+3x-28\le0\\
x^2-5ax-6a^2>0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-200">
                            의 해가 존재하도록 하는 양의 정수 <InlineMath math="a" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 첫 번째 부등식을 풉니다.
                            </p>

                            <BlockMath math="x^2+3x-28=(x+7)(x-4)" />

                            <BlockMath math="(x+7)(x-4)\le0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-7\le x\le4" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                다음으로 두 번째 부등식의 좌변을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-5ax-6a^2=(x+a)(x-6a)
`}
                            />

                            <BlockMath math="(x+a)(x-6a)>0" />

                            <p>
                                <InlineMath math="a" />는 양의 정수이므로 <InlineMath math="-a<6a" />입니다. 따라서 두 번째
                                부등식의 해는
                            </p>

                            <BlockMath
                                math={String.raw`
x<-a
\quad\text{또는}\quad
x>6a
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                연립부등식의 해가 존재하려면
                            </p>

                            <BlockMath math="-7\le x\le4" />

                            <p>
                                와 두 번째 부등식의 해가 겹치는 부분이 있어야 합니다.
                            </p>

                            <p className="font-semibold text-white">
                                ① <InlineMath math="x<-a" />인 부분
                            </p>

                            <p>
                                구간 <InlineMath math="-7\le x\le4" />와 겹치는 부분이
                                존재하려면
                            </p>

                            <BlockMath math="-7<-a" />

                            <p>
                                이어야 합니다. 따라서
                            </p>

                            <BlockMath math="a<7" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="x>6a" />인 부분
                            </p>

                            <p>
                                구간 <InlineMath math="-7\le x\le4" />와 겹치는 부분이
                                존재하려면
                            </p>

                            <BlockMath math="6a<4" />

                            <p>
                                이어야 합니다. 그러나 <InlineMath math="a" />는 양의
                                정수이므로 이 조건을 만족할 수 없습니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                따라서 양의 정수 <InlineMath math="a" />는
                            </p>

                            <BlockMath math="1,\;2,\;3,\;4,\;5,\;6" />

                            <p>
                                이므로 모두 <InlineMath math="6" />개입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{6}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 번째 부등식은 등호가 없는 <InlineMath math=">" />이므로 <InlineMath math="a=7" />일 때 <InlineMath math="x=-7" />은 해에 포함되지 않습니다.
                                    따라서 <InlineMath math="a=7" />은 제외됩니다.
                                </p>
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
                        <p className="leading-8 text-gray-200">
                            두 다항식 <InlineMath math="f(x)=2x^2+7x+5" />, <InlineMath math="g(x)=(a-1)x+b" />가 있다.
                            모든 실수 <InlineMath math="x" />에 대하여 부등식
                        </p>

                        <BlockMath math="x-4\le g(x)\le f(x)" />

                        <p className="leading-8 text-gray-200">
                            가 항상 성립하도록 하는 실수 <InlineMath math="b" />의 값의
                            범위는 <InlineMath math="\alpha\le b\le\beta" />이다.
                            이때 <InlineMath math="\alpha\beta" />의 값을 구하시오.
                            단, <InlineMath math="a" />는 실수이다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                연속된 부등식은 다음 두 부등식이 모두 성립한다는 뜻입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x-4\le g(x),
\qquad
g(x)\le f(x)
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="x-4\le g(x)" />가 항상 성립하는 조건
                            </p>

                            <p>
                                <InlineMath math="g(x)=(a-1)x+b" />를 대입하면
                            </p>

                            <BlockMath math="x-4\le(a-1)x+b" />

                            <p>
                                한쪽으로 정리하면
                            </p>

                            <BlockMath math="(a-2)x+b+4\ge0" />

                            <p>
                                입니다. 이 일차식이 모든 실수 <InlineMath math="x" />에
                                대하여 항상 0 이상이려면 <InlineMath math="x" />의 계수가
                                0이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a-2=0,
\qquad
b+4\ge0
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a=2,
\qquad
b\ge-4
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="g(x)\le f(x)" />가 항상 성립하는 조건
                            </p>

                            <p>
                                앞에서 구한 <InlineMath math="a=2" />를 이용하면
                            </p>

                            <BlockMath math="g(x)=x+b" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="x+b\le2x^2+7x+5" />

                            <p>
                                한쪽으로 정리하면
                            </p>

                            <BlockMath math="2x^2+6x+5-b\ge0" />

                            <p>
                                입니다. 이 이차식은 이차항의 계수가 양수이므로 모든 실수 <InlineMath math="x" />에 대하여 0 이상이려면 판별식이
                                0 이하이어야 합니다.
                            </p>

                            <BlockMath math="\frac{D}{4}\le0" />

                            <p>
                                일차항의 계수가 짝수이므로 <InlineMath math="D/4" />를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=3^2-2(5-b)\\
&=9-10+2b\\
&=2b-1
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="2b-1\le0" />

                            <BlockMath math="b\le\frac12" />

                            <hr className="border-white/10" />

                            <p>
                                두 조건을 동시에 만족해야 하므로
                            </p>

                            <BlockMath math="-4\le b\le\frac12" />

                            <p>
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha=-4,
\qquad
\beta=\frac12
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha\beta
=(-4)\cdot\frac12
=-2
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-2}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    연속된 부등식 <InlineMath math="x-4\le g(x)\le f(x)" />는 두 부등식 <InlineMath math="x-4\le g(x)" />와 <InlineMath math="g(x)\le f(x)" />가 동시에 성립하는
                                    조건으로 나누어 풉니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-200">
                            모든 실수 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
-x^2+6x+1
\le
mx+n
\le
x^2+2x+3
`}
                        />

                        <p className="leading-8 text-gray-200">
                            가 성립할 때, <InlineMath math="m^2+n^2" />의 값을 구하시오.
                            (단, <InlineMath math="m,n" />은 상수이다.)
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                연속된 부등식은 다음 두 부등식이 모두 성립한다는 뜻입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
-x^2+6x+1\le mx+n\\
mx+n\le x^2+2x+3
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 첫 번째 부등식
                            </p>

                            <BlockMath
                                math={String.raw`
-x^2+(6-m)x+(1-n)\le0
`}
                            />

                            <p>
                                이차항의 계수가 음수이므로 모든 실수 <InlineMath math="x" />에 대하여 항상
                                0 이하가 되려면 판별식이 0 이하이어야 합니다.
                            </p>

                            <BlockMath math="\frac{D}{4}\le0" />

                            <BlockMath
                                math={String.raw`
\frac{D}{4}
=
\left(\frac{6-m}{2}\right)^2+(1-n)
\le0
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
n\ge
1+\left(\frac{6-m}{2}\right)^2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 번째 부등식
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+(2-m)x+(3-n)\ge0
`}
                            />

                            <p>
                                이차항의 계수가 양수이므로 모든 실수 <InlineMath math="x" />에 대하여 항상
                                0 이상이 되려면 판별식이 0 이하이어야 합니다.
                            </p>

                            <BlockMath math="\frac{D}{4}\le0" />

                            <BlockMath
                                math={String.raw`
\frac{D}{4}
=
\left(\frac{2-m}{2}\right)^2-(3-n)
\le0
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
n\le
3-\left(\frac{2-m}{2}\right)^2
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                두 조건을 동시에 만족해야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
1+\left(\frac{6-m}{2}\right)^2
\le
3-\left(\frac{2-m}{2}\right)^2
`}
                            />

                            <p>
                                이를 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
(m-4)^2\le0
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="m=4" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                이를 조건에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
n\ge2,\qquad
n\le2
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="n=2" />

                            <hr className="border-white/10" />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
m^2+n^2
=
4^2+2^2
=20
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{20}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 부등식이 모두 모든 실수에서 성립해야 하므로 각각을
                                    이차식으로 정리한 뒤 <InlineMath math="D/4\le0" />
                                    조건을 적용합니다. 마지막에는 두 조건을 동시에 만족하는 <InlineMath math="m,n" />을 구하면 됩니다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        핵심정리
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">
                        <p>
                            ① 연립부등식은 두 개 이상의 부등식을 동시에 만족하는 해를
                            구하는 것입니다.
                        </p>

                        <p>
                            ② 각각의 부등식을 따로 풀어 해를 구합니다.
                        </p>

                        <p>
                            ③ 각 해를 수직선에 나타냅니다.
                        </p>

                        <p>
                            ④ 모든 부등식을 동시에 만족하는 공통부분을 답으로 합니다.
                        </p>

                        <p>
                            ⑤ 공통부분이 없으면 해가 없습니다.
                        </p>
                    </div>

                    <p className="mt-5 font-semibold leading-8 text-white">
                        연립부등식은 각각의 해를 구한 뒤 공통부분을 찾는 문제입니다.
                    </p>
                </div>
            </section>

            {/* 3.14 이차방정식의 실근의 부호 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold text-white">
                    3.14 이차방정식의 실근의 부호
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    근과 계수의 관계를 이용하여 이차방정식의 실근의 부호를
                    판단하고, 이를 삼차방정식과 복이차식 사차방정식에
                    활용하는 방법을 알아봅니다.
                </p>

                {/* 근과 계수의 관계 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        근과 계수의 관계
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="ax^2+bx+c=0\qquad(a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-blue-300">
                                두 근의 합
                            </p>

                            <BlockMath math="\alpha+\beta=-\frac{b}{a}" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-purple-300">
                                두 근의 곱
                            </p>

                            <BlockMath math="\alpha\beta=\frac{c}{a}" />
                        </div>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 근의 <b className="text-white">곱</b>으로 두 근의 부호가
                        같은지 다른지를 판단하고, 두 근의
                        <b className="text-white"> 합</b>으로 어느 부호의 근이
                        더 큰지를 판단합니다.
                    </p>
                </div>

                {/* 판별식 확인 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        판별식을 확인해야 하는 경우
                    </h3>

                    <div className="space-y-5 leading-8 text-gray-300">
                        <p>
                            두 근의 부호가 같을 때는 두 근의 합과 곱만으로
                            실근의 존재를 알 수 없으므로 판별식을 함께 확인합니다.
                        </p>

                        <BlockMath math="D=b^2-4ac\ge0" />

                        <p>
                            두 근의 부호가 다를 때는 두 근의 곱이 음수입니다.
                        </p>

                        <BlockMath math="\alpha\beta<0" />

                        <p>
                            두 근의 곱이 음수이면 서로 다른 두 실근이 자동으로
                            존재하므로 판별식을 따로 확인하지 않아도 됩니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <p className="text-center font-semibold text-white">
                            부호가 같음 <InlineMath math="\;\Longrightarrow\;" />
                            판별식 확인
                        </p>

                        <p className="mt-3 text-center font-semibold text-white">
                            부호가 다름 <InlineMath math="\;\Longrightarrow\;" />
                            곱만 확인
                        </p>
                    </div>
                </div>

                {/* 두 근의 부호 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-5 text-xl font-bold text-purple-300">
                        두 실근의 부호
                    </h3>

                    <div className="grid gap-5 lg:grid-cols-3">
                        {/* 두 양근 */}
                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="text-center text-lg font-bold text-green-300">
                                두 근이 모두 양수
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta>0\\
\alpha\beta>0\\
D\ge0
\end{cases}
`}
                            />

                            <div className="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                                <p>두 근의 합은 양수입니다.</p>
                                <p>두 근의 곱은 양수입니다.</p>
                                <p>두 근이 실수이므로 판별식은 0 이상입니다.</p>
                            </div>
                        </div>

                        {/* 두 음근 */}
                        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <p className="text-center text-lg font-bold text-red-300">
                                두 근이 모두 음수
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta<0\\
\alpha\beta>0\\
D\ge0
\end{cases}
`}
                            />

                            <div className="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                                <p>두 근의 합은 음수입니다.</p>
                                <p>두 근의 곱은 양수입니다.</p>
                                <p>두 근이 실수이므로 판별식은 0 이상입니다.</p>
                            </div>
                        </div>

                        {/* 서로 다른 부호 */}
                        <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">
                            <p className="text-center text-lg font-bold text-cyan-300">
                                두 근의 부호가 다름
                            </p>

                            <BlockMath math="\alpha\beta<0" />

                            <div className="mt-4 space-y-2 text-sm leading-7 text-gray-300">
                                <p>양근과 음근을 하나씩 갖습니다.</p>
                                <p>
                                    서로 다른 두 실근이 자동으로 존재하므로
                                    판별식은 확인하지 않습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <p className="font-semibold text-yellow-300">
                            서로 다른 두 근을 갖는다고 주어진 경우
                        </p>

                        <p className="mt-2 leading-8 text-gray-300">
                            두 근이 모두 양수 또는 모두 음수이면서
                            <b className="text-white"> 서로 다른 두 근</b>을 가져야 하면 <InlineMath math="D\ge0" />이 아니라 <InlineMath math="D>0" />을 사용합니다.
                        </p>
                    </div>
                </div>

                {/* 부호가 다른 두 근의 절댓값 */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        부호가 다른 두 근의 절댓값 비교
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 근의 부호가 다르면
                        <InlineMath math="\alpha\beta<0" />입니다.
                        이때 두 근의 합을 이용하면 양근과 음근 중 어느 근의
                        절댓값이 더 큰지 판단할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-3">
                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="text-center font-bold text-green-300">
                                양근의 절댓값이 더 큼
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha\beta<0\\
\alpha+\beta>0
\end{cases}
`}
                            />

                            <p className="mt-3 text-center leading-7 text-gray-300">
                                양근의 크기가 음근의 절댓값보다 큽니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="text-center font-bold text-yellow-300">
                                두 근의 절댓값이 같음
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha\beta<0\\
\alpha+\beta=0
\end{cases}
`}
                            />

                            <p className="mt-3 text-center leading-7 text-gray-300">
                                두 근은 서로 반대수입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <p className="text-center font-bold text-red-300">
                                음근의 절댓값이 더 큼
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha\beta<0\\
\alpha+\beta<0
\end{cases}
`}
                            />

                            <p className="mt-3 text-center leading-7 text-gray-300">
                                음근의 절댓값이 양근보다 큽니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <p className="text-center font-semibold text-white">
                            두 근의 곱은 부호를 판단하고,
                            두 근의 합은 절댓값의 크기를 판단합니다.
                        </p>
                    </div>
                </div>

                {/* 계수로 나타내기 */}
                <div className="mt-8 rounded-xl border border-white/15 bg-white/[0.03] p-6">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        계수를 이용한 조건
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식 <InlineMath math="ax^2+bx+c=0" />의 두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                    </p>

                    <BlockMath
                        math={String.raw`
\alpha+\beta=-\frac ba,
\qquad
\alpha\beta=\frac ca
`}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 근의 합과 곱에 대한 조건을 계수에 대한 조건으로
                        바꾸어 계산합니다.
                    </p>

                    <div className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-black/30">
                        <table className="w-full min-w-[720px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="px-5 py-4 font-semibold text-white">
                                        근의 상태
                                    </th>
                                    <th className="px-5 py-4 font-semibold text-white">
                                        근의 합과 곱
                                    </th>
                                    <th className="px-5 py-4 font-semibold text-white">
                                        계수 조건
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/10">
                                    <td className="px-5 py-4">두 근이 모두 양수</td>
                                    <td className="px-5 py-4">
                                        <InlineMath
                                            math="\alpha+\beta>0,\;\alpha\beta>0,\;D\ge0"
                                        />
                                    </td>
                                    <td className="px-5 py-4">
                                        <InlineMath
                                            math="-\frac ba>0,\;\frac ca>0,\;D\ge0"
                                        />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="px-5 py-4">두 근이 모두 음수</td>
                                    <td className="px-5 py-4">
                                        <InlineMath
                                            math="\alpha+\beta<0,\;\alpha\beta>0,\;D\ge0"
                                        />
                                    </td>
                                    <td className="px-5 py-4">
                                        <InlineMath
                                            math="-\frac ba<0,\;\frac ca>0,\;D\ge0"
                                        />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-5 py-4">두 근의 부호가 다름</td>
                                    <td className="px-5 py-4">
                                        <InlineMath math="\alpha\beta<0" />
                                    </td>
                                    <td className="px-5 py-4">
                                        <InlineMath math="\frac ca<0" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 삼차방정식 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        삼차방정식의 근의 부호
                    </h3>

                    <p className="leading-8 text-gray-300">
                        삼차방정식을 인수분해하여
                        <b className="text-white"> 일차식 × 이차식</b>의 꼴로 나타낼 수
                        있으면, 일차식의 근을 구하고 이차방정식의 실근의 부호를
                        조사합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                        <BlockMath
                            math={String.raw`
(x-r)(ax^2+bx+c)=0
`}
                        />

                        <BlockMath
                            math={String.raw`
x=r
\quad\text{또는}\quad
ax^2+bx+c=0
`}
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        일차식에서 얻은 근 <InlineMath math="r" />의 부호와
                        이차방정식의 두 실근의 부호를 각각 조사하여
                        삼차방정식의 세 근의 부호를 판단합니다.
                    </p>
                </div>

                {/* 복이차식 */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        복이차식 사차방정식의 근의 조건
                    </h3>

                    <p className="leading-8 text-gray-300">
                        복이차식 사차방정식
                    </p>

                    <BlockMath math="ax^4+bx^2+c=0" />

                    <p className="leading-8 text-gray-300">
                        에서 <InlineMath math="x^2=t" />로 치환하면
                    </p>

                    <BlockMath math="at^2+bt+c=0" />

                    <p className="leading-8 text-gray-300">
                        이 됩니다. 치환한 이차방정식의 근의 부호에 따라
                        원래 사차방정식의 실근과 허근의 개수가 정해집니다.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="text-center font-bold text-green-300">
                                <InlineMath math="t>0" />일 때
                            </p>

                            <BlockMath math="x^2=t" />

                            <BlockMath math="x=\pm\sqrt t" />

                            <p className="text-center leading-7 text-gray-300">
                                서로 다른 두 실근이 생깁니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                            <p className="text-center font-bold text-purple-300">
                                <InlineMath math="t<0" />일 때
                            </p>

                            <BlockMath math="x^2=t" />

                            <BlockMath math="x=\pm i\sqrt{-t}" />

                            <p className="text-center leading-7 text-gray-300">
                                서로 다른 두 허근이 생깁니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 overflow-x-auto rounded-xl border border-white/10 bg-black/30">
                        <table className="w-full min-w-[700px] border-collapse text-left">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/5">
                                    <th className="px-5 py-4 font-semibold text-white">
                                        치환한 이차방정식의 근
                                    </th>
                                    <th className="px-5 py-4 font-semibold text-white">
                                        원래 복이차식 사차방정식의 근
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/10">
                                    <td className="px-5 py-4">
                                        서로 다른 두 양근
                                    </td>
                                    <td className="px-5 py-4">
                                        서로 다른 4개의 실근
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="px-5 py-4">
                                        서로 다른 두 음근
                                    </td>
                                    <td className="px-5 py-4">
                                        서로 다른 4개의 허근
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-5 py-4">
                                        서로 다른 부호의 두 근
                                    </td>
                                    <td className="px-5 py-4">
                                        서로 다른 2개의 실근과 서로 다른 2개의 허근
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <p className="font-semibold text-yellow-300">
                            주의
                        </p>

                        <p className="mt-2 leading-8 text-gray-300">
                            치환한 이차방정식의 근에 <InlineMath math="t=0" />이 포함되면 <InlineMath math="x=0" />이 중근으로 나타납니다.
                            따라서 문제에서
                            <b className="text-white"> 서로 다른 네 근</b>을 요구하면 <InlineMath math="t=0" />이 나오지 않도록 확인해야 합니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2-(k-4)x+1=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 양수일 때, <InlineMath math="k" />값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                두 근이 모두 양수이므로 다음 세 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta>0\\
\alpha\beta>0\\
D\ge0
\end{cases}
`}
                            />

                            <p>
                                근과 계수의 관계를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha+\beta=k-4,\qquad
\alpha\beta=1
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
k-4>0
\Longrightarrow
k>4
`}
                            />

                            <p>
                                또한
                            </p>

                            <BlockMath math="\alpha\beta=1>0" />

                            <p>
                                은 항상 성립합니다.
                            </p>

                            <p>
                                마지막으로 판별식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
D=(4-k)^2-4\ge0
`}
                            />

                            <BlockMath
                                math={String.raw`
(k-4)^2\ge4
`}
                            />

                            <BlockMath
                                math={String.raw`
k\le2
\quad\text{또는}\quad
k\ge6
`}
                            />

                            <p>
                                이를 <InlineMath math="k>4" />와 함께 만족시키면
                            </p>

                            <BlockMath math="k\ge6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="k\ge6" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2+4x-(a-3)=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 음수일 때, <InlineMath math="a" />의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                두 근이 모두 음수이므로 다음 세 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta<0\\
\alpha\beta>0\\
D\ge0
\end{cases}
`}
                            />

                            <p>
                                근과 계수의 관계를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha+\beta=-4,\qquad
\alpha\beta=3-a
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha+\beta=-4<0" />

                            <p>
                                은 항상 성립합니다.
                            </p>

                            <p>
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
3-a>0
\Longrightarrow
a<3
`}
                            />

                            <p>
                                마지막으로 판별식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
D=4^2-4(1)(3-a)\ge0
`}
                            />

                            <BlockMath
                                math={String.raw`
16-12+4a\ge0
`}
                            />

                            <BlockMath
                                math={String.raw`
a\ge-1
`}
                            />

                            <p>
                                이를 <InlineMath math="a<3" />과 함께 만족시키면
                            </p>

                            <BlockMath math="-1\le a<3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="-1\le a<3" />
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
                            이차방정식
                        </p>

                        <BlockMath math="x^2+2kx-k+2=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 음수가 되는 <InlineMath math="k" />값의 범위는 <InlineMath math="\alpha\le k<\beta" />이다.
                            이때 <InlineMath math="\alpha+\beta" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                두 근을 <InlineMath math="\alpha_1,\alpha_2" />라고 하겠습니다.
                                두 근이 모두 음수이므로 다음 세 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha_1+\alpha_2<0\\
\alpha_1\alpha_2>0\\
D\ge0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 합이 음수인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha_1+\alpha_2=-2k" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
-2k<0
\quad\Longrightarrow\quad
k>0
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 곱이 양수인 조건
                            </p>

                            <BlockMath math="\alpha_1\alpha_2=2-k" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
2-k>0
\quad\Longrightarrow\quad
k<2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 두 근이 실수인 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로 <InlineMath math="D/4" />를 이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=k^2-1(-k+2)\\
&=k^2+k-2\\
&=(k+2)(k-1)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(k+2)(k-1)\ge0" />

                            <BlockMath
                                math={String.raw`
k\le-2
\quad\text{또는}\quad
k\ge1
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건
                            </p>

                            <BlockMath
                                math={String.raw`
k>0,\qquad
k<2,\qquad
\left(k\le-2\ \text{또는}\ k\ge1\right)
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="1\le k<2" />

                            <p>
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha=1,\qquad
\beta=2
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha+\beta
=1+2
=3
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{3}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2+2(k-1)x+3-k=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 서로 다른 부호일 때, <InlineMath math="k" />의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                두 근의 부호가 서로 다르려면 두 근의 곱이 음수이어야 합니다.
                            </p>

                            <BlockMath math="\alpha\beta<0" />

                            <p>
                                근과 계수의 관계를 이용하면
                            </p>

                            <BlockMath math="\alpha\beta=3-k" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="3-k<0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="k>3" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 근의 곱이 음수이면 양근과 음근을 하나씩 가지므로
                                    서로 다른 두 실근이 자동으로 존재합니다. 따라서
                                    판별식을 따로 확인하지 않아도 됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{k>3}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2-(m-3)x+(m-4)=0" />

                        <p className="leading-8 text-gray-300">
                            이 서로 다른 부호의 실근 <InlineMath math="\alpha,\beta" />를 갖고,
                        </p>

                        <BlockMath math="\alpha^2+\beta^2=26" />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="m" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha+\beta=m-3,\qquad
\alpha\beta=m-4
`}
                            />

                            <p>
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha^2+\beta^2
=(\alpha+\beta)^2-2\alpha\beta
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
(m-3)^2-2(m-4)=26
`}
                            />

                            <BlockMath
                                math={String.raw`
m^2-8m-9=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(m-9)(m+1)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
m=9
\quad\text{또는}\quad
m=-1
`}
                            />

                            <p>
                                이제 두 근의 부호가 서로 다른 조건을 확인합니다.
                            </p>

                            <p>
                                서로 다른 부호의 두 실근을 가지려면 두 근의 곱이 음수이면 됩니다.
                            </p>

                            <BlockMath math="\alpha\beta=m-4<0" />

                            <BlockMath math="m<4" />

                            <p>
                                따라서 <InlineMath math="m=9" />는 조건을 만족하지 않고, <InlineMath math="m=-1" />만 가능합니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    확인
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="m=-1" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
\alpha\beta=-5<0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 실제로 두 근의 부호는 서로 다릅니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{m=-1}" />
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
                            이차방정식
                        </p>

                        <BlockMath math="x^2-2mx-6m-12=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근 중 적어도 하나는 양의 실수가 되도록 하는 정수{" "}
                            <InlineMath math="m" />의 최솟값을 <InlineMath math="k" />라
                            할 때, <InlineMath math="k^2" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                두 근 중 적어도 하나가 양수인 경우의 반대는 두 근이 모두 <InlineMath math="0" /> 이하인 경우입니다.
                            </p>

                            <p>
                                따라서 먼저 두 근이 모두 <InlineMath math="0" /> 이하가 되는 조건을 구합니다.
                            </p>

                            <p>
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta\le0\\
\alpha\beta\ge0\\
\dfrac{D}{4}\ge0
\end{cases}
`}
                            />

                            <p>
                                을 모두 만족해야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 합
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=2m" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
2m\le0
\quad\Longrightarrow\quad
m\le0
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 곱
                            </p>

                            <BlockMath math="\alpha\beta=-6m-12" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
-6m-12\ge0
\quad\Longrightarrow\quad
m\le-2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 두 근이 실수인 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로 <InlineMath math="D/4" />를 사용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-m)^2-1(-6m-12)\\
&=m^2+6m+12\\
&=(m+3)^2+3
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac{D}{4}>0" />

                            <p>
                                은 모든 실수 <InlineMath math="m" />에 대하여 항상
                                성립합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                세 조건을 함께 만족시키면
                            </p>

                            <BlockMath math="m\le-2" />

                            <p>
                                입니다. 즉, 두 근이 모두 <InlineMath math="0" /> 이하인 경우는
                            </p>

                            <BlockMath math="m\le-2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 두 근 중 적어도 하나가 양의 실수가 되려면
                            </p>

                            <BlockMath math="m>-2" />

                            <p>
                                이어야 합니다.
                            </p>

                            <p>
                                정수 <InlineMath math="m" />의 최솟값은
                            </p>

                            <BlockMath math="k=-1" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
k^2=(-1)^2=1
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{1}" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    “적어도 하나가 양수”의 반대는 “두 근이 모두 음수”가
                                    아니라 “두 근이 모두 <InlineMath math="0" /> 이하”입니다.
                                    따라서 등호를 포함하여 조건을 세워야 합니다.
                                </p>
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
                            <InlineMath math="x" />에 대한 이차방정식
                        </p>

                        <BlockMath
                            math="x^2-(a^2-6a-7)x-a+1=0"
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 근의 부호가 서로 다르고, 음수인 근의 절댓값이
                            양수인 근의 절댓값보다 클 때, 정수{" "}
                            <InlineMath math="a" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하겠습니다.
                            </p>

                            <p>
                                두 근의 부호가 서로 다르므로 두 근의 곱은 음수입니다.
                            </p>

                            <BlockMath math="\alpha\beta<0" />

                            <p>
                                또한 음수인 근의 절댓값이 양수인 근의 절댓값보다 크므로
                                두 근의 합은 음수입니다.
                            </p>

                            <BlockMath math="\alpha+\beta<0" />

                            <p>
                                따라서 다음 두 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha\beta<0\\
\alpha+\beta<0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 곱이 음수인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha\beta=1-a" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
1-a<0
\quad\Longrightarrow\quad
a>1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 합이 음수인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=a^2-6a-7" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="a^2-6a-7<0" />

                            <BlockMath math="(a+1)(a-7)<0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-1<a<7" />

                            <hr className="border-white/10" />

                            <p>
                                두 조건
                            </p>

                            <BlockMath
                                math={String.raw`
a>1,\qquad -1<a<7
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="1<a<7" />

                            <p>
                                입니다. 이 범위에 있는 정수 <InlineMath math="a" />는
                            </p>

                            <BlockMath math="2,\;3,\;4,\;5,\;6" />

                            <p>
                                이므로 모두 <InlineMath math="5" />개입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 근의 곱이 음수이면 양근과 음근을 하나씩 가지므로
                                    서로 다른 두 실근이 자동으로 존재합니다. 따라서
                                    판별식을 따로 확인하지 않아도 됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{5}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 8 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 이차방정식
                        </p>

                        <BlockMath
                            math="x^2+(a^2-3a-4)x-a+2=0"
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 실근의 절댓값이 서로 같고 부호가 다를 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                두 실근의 절댓값이 서로 같고 부호가 다르면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta=0\\
\alpha\beta<0
\end{cases}
`}
                            />

                            <p>
                                을 만족합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 합이 0인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=-(a^2-3a-4)" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^2-3a-4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(a-4)(a+1)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a=4
\quad\text{또는}\quad
a=-1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 곱이 음수인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha\beta=2-a" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
2-a<0
\quad\Longrightarrow\quad
a>2
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                두 조건을 함께 만족하는 값은
                            </p>

                            <BlockMath math="a=4" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 근의 곱이 음수이면 서로 다른 부호의 두 실근이
                                    자동으로 존재하므로 판별식을 따로 확인할 필요가 없습니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{4}" />
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
                            <InlineMath math="x" />에 대한 삼차방정식
                        </p>

                        <BlockMath
                            math="x^3+(a+1)x^2+4ax+3a=0"
                        />

                        <p className="leading-8 text-gray-300">
                            이 한 실근과 서로 다른 두 허근을 갖도록 하는 정수{" "}
                            <InlineMath math="a" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 삼차식을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
x^3+(a+1)x^2+4ax+3a
&=(x+1)(x^2+ax+3a)
\end{aligned}
`}
                            />

                            <p>
                                따라서 주어진 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
(x+1)(x^2+ax+3a)=0
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
x=-1
\quad\text{또는}\quad
x^2+ax+3a=0
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                일차방정식 <InlineMath math="x+1=0" />에서 하나의 실근 <InlineMath math="x=-1" />을 얻습니다.
                            </p>

                            <p>
                                따라서 삼차방정식이 한 실근과 서로 다른 두 허근을 가지려면
                                이차방정식
                            </p>

                            <BlockMath math="x^2+ax+3a=0" />

                            <p>
                                이 서로 다른 두 허근을 가져야 합니다.
                            </p>

                            <p>
                                일차항의 계수에 따라 <InlineMath math="D" />를 사용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=a^2-4(1)(3a)\\
&=a^2-12a\\
&=a(a-12)
\end{aligned}
`}
                            />

                            <p>
                                서로 다른 두 허근을 가지려면
                            </p>

                            <BlockMath math="D<0" />

                            <p>
                                이어야 하므로
                            </p>

                            <BlockMath math="a(a-12)<0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="0<a<12" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이 범위에 있는 정수 <InlineMath math="a" />는
                            </p>

                            <BlockMath
                                math="1,\;2,\;3,\;\cdots,\;11"
                            />

                            <p>
                                이므로 모두 <InlineMath math="11" />개입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    삼차방정식을 일차식과 이차식의 곱으로 인수분해한 뒤,
                                    일차식에서 한 실근을 얻고 이차방정식이 서로 다른 두
                                    허근을 갖도록 <InlineMath math="D<0" />을 적용합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{11}" />
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
                            삼차방정식
                        </p>

                        <BlockMath
                            math="x^3-(a-3)x^2+3x+a+1=0"
                        />

                        <p className="leading-8 text-gray-300">
                            의 세 근이 모두 음수가 되도록 하는 실수{" "}
                            <InlineMath math="a" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 삼차식을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
&x^3-(a-3)x^2+3x+a+1\\
&=(x+1)\{x^2+(2-a)x+a+1\}
\end{aligned}
`}
                            />

                            <p>
                                따라서 주어진 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
(x+1)\{x^2+(2-a)x+a+1\}=0
`}
                            />

                            <p>
                                이므로 한 근은
                            </p>

                            <BlockMath math="x=-1" />

                            <p>
                                입니다. 이 근은 항상 음수이므로, 이차방정식
                            </p>

                            <BlockMath math="x^2+(2-a)x+a+1=0" />

                            <p>
                                의 두 근이 모두 음수가 되는 조건을 구하면 됩니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이차방정식의 두 근을 <InlineMath math="\alpha,\beta" />라고 하면, 두 근이 모두
                                음수가 되기 위한 조건은
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
\alpha+\beta<0\\
\alpha\beta>0\\
\dfrac{D}{4}\ge0
\end{cases}
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 합이 음수인 조건
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=a-2" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a-2<0
\quad\Longrightarrow\quad
a<2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 곱이 양수인 조건
                            </p>

                            <BlockMath math="\alpha\beta=a+1" />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+1>0
\quad\Longrightarrow\quad
a>-1
`}
                            />

                            <p className="font-semibold text-white">
                                ③ 두 근이 실수인 조건
                            </p>

                            <p>
                                판별식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=(2-a)^2-4(a+1)\\
&=a^2-8a\\
&=a(a-8)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a(a-8)\ge0" />

                            <BlockMath
                                math={String.raw`
a\le0
\quad\text{또는}\quad
a\ge8
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건
                            </p>

                            <BlockMath
                                math={String.raw`
a<2,\qquad
a>-1,\qquad
\left(a\le0\ \text{또는}\ a\ge8\right)
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="-1<a\le0" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    중근이 포함되는 경우
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    문제에서는 세 근이 모두 음수라고 하였으므로 중근도
                                    포함할 수 있습니다. 따라서 판별식의 조건은{" "}
                                    <InlineMath math="D>0" />이 아니라{" "}
                                    <InlineMath math="D\ge0" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-1<a\le0}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 11 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            사차방정식
                        </p>

                        <BlockMath math="x^4+ax^2+9=0" />

                        <p className="leading-8 text-gray-300">
                            이 서로 다른 네 실근을 가질 때, 실수{" "}
                            <InlineMath math="a" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <p>
                                <InlineMath math="t=x^2" />로 치환하면
                            </p>

                            <BlockMath math="t^2+at+9=0" />

                            <p>
                                이 됩니다.
                            </p>

                            <p>
                                원래 방정식이 서로 다른 네 실근을 가지려면
                                치환한 이차방정식이 서로 다른 두 양근을 가져야 합니다.
                            </p>

                            <p>
                                따라서 다음 세 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
t_1+t_2>0\\
t_1t_2>0\\
D>0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 두 근의 합이 양수
                            </p>

                            <BlockMath math="t_1+t_2=-a" />

                            <BlockMath
                                math={String.raw`
-a>0
\quad\Longrightarrow\quad
a<0
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 두 근의 곱이 양수
                            </p>

                            <BlockMath math="t_1t_2=9>0" />

                            <p>
                                항상 성립합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 서로 다른 두 실근
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=a^2-36
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^2-36>0
`}
                            />

                            <BlockMath
                                math={String.raw`
a<-6
\quad\text{또는}\quad
a>6
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건을 동시에 만족하는 범위는
                            </p>

                            <BlockMath
                                math="a<-6"
                            />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    복이차방정식이 서로 다른 네 실근을 가지려면 <InlineMath math="x^2=t" />로 치환한 이차방정식이
                                    서로 다른 두 양근을 가져야 합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{a<-6}" />
                            </div>

                        </div>
                    </details>
                </div>

                {/* 예제 12 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 12
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            사차방정식
                        </p>

                        <BlockMath
                            math="x^4-2ax^2+a^2-5a-6=0"
                        />

                        <p className="leading-8 text-gray-300">
                            이 서로 다른 두 실근과 서로 다른 두 허근을 갖도록 하는 정수{" "}
                            <InlineMath math="a" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                <InlineMath math="t=x^2" />로 치환하면
                            </p>

                            <BlockMath
                                math="t^2-2at+a^2-5a-6=0"
                            />

                            <p>
                                이 됩니다.
                            </p>

                            <p>
                                원래 사차방정식이 서로 다른 두 실근과 서로 다른 두 허근을
                                가지려면, 치환한 이차방정식이 서로 다른 부호의 두 실근을
                                가져야 합니다.
                            </p>

                            <p>
                                두 근의 부호가 서로 다르기 위한 조건은 두 근의 곱이
                                음수인 것입니다.
                            </p>

                            <BlockMath math="t_1t_2<0" />

                            <hr className="border-white/10" />

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
t_1t_2=a^2-5a-6
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^2-5a-6<0
`}
                            />

                            <BlockMath
                                math={String.raw`
(a-6)(a+1)<0
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-1<a<6" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이 범위에 있는 정수 <InlineMath math="a" />는
                            </p>

                            <BlockMath math="0,\;1,\;2,\;3,\;4,\;5" />

                            <p>
                                이므로 모두 <InlineMath math="6" />개입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 근의 곱이 음수이면 치환한 이차방정식은 양근과
                                    음근을 하나씩 갖습니다. 따라서 서로 다른 두 실근이
                                    자동으로 존재하므로 판별식을 따로 확인하지 않아도
                                    됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-4">
                                <p className="font-semibold text-cyan-300">
                                    원래 방정식의 근
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    양근 <InlineMath math="t_1>0" />에서는 <InlineMath math="x=\pm\sqrt{t_1}" />인 서로 다른
                                    두 실근이 나오고, 음근 <InlineMath math="t_2<0" />에서는 <InlineMath math="x=\pm i\sqrt{-t_2}" />인 서로 다른
                                    두 허근이 나옵니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{6}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 13 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 13
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 사차방정식
                        </p>

                        <BlockMath
                            math="x^4-(m+4)x^2+m^2+3=0"
                        />

                        <p className="leading-8 text-gray-300">
                            이 서로 다른 네 실근 <InlineMath math="\alpha,\beta,\gamma,\delta" />를 갖고
                        </p>

                        <BlockMath math="\alpha\beta\gamma\delta=12" />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, 양수 <InlineMath math="m" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                사차방정식의 모든 근의 곱은 상수항과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha\beta\gamma\delta=m^2+3
`}
                            />

                            <p>
                                문제의 조건에 의하여
                            </p>

                            <BlockMath math="m^2+3=12" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="m^2=9" />

                            <BlockMath math={String.raw`m=3\quad\text{또는}\quad m=-3`}
                            />

                            <p>
                                이때 <InlineMath math="m" />은 양수이므로
                            </p>

                            <BlockMath math="m=3" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                서로 다른 네 실근을 갖는지 확인
                            </p>

                            <p>
                                <InlineMath math="m=3" />을 원래 방정식에 대입하면
                            </p>

                            <BlockMath math="x^4-7x^2+12=0" />

                            <p>
                                입니다. <InlineMath math="t=x^2" />로 치환하면
                            </p>

                            <BlockMath math="t^2-7t+12=0" />

                            <BlockMath math="(t-3)(t-4)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="t=3,\;4" />

                            <p>
                                입니다. 치환한 이차방정식이 서로 다른 두 양근을 가지므로
                            </p>

                            <BlockMath math={String.raw`x=\pm\sqrt3,\qquad x=\pm2`}
                            />

                            <p>
                                인 서로 다른 네 실근을 갖습니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    핵심
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    근과 계수의 관계로 <InlineMath math="m" />의 후보를
                                    먼저 구한 뒤, 복이차식이 서로 다른 네 실근을 갖는지 <InlineMath math="t=x^2" />로 치환하여 확인합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{3}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        핵심정리
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">
                        <p>
                            ① 두 근의 곱으로 두 근의 부호가 같은지 다른지를
                            판단합니다.
                        </p>

                        <p>
                            ② 두 근의 합으로 양근과 음근 중 어느 근의 절댓값이
                            더 큰지를 판단합니다.
                        </p>

                        <p>
                            ③ 두 근의 부호가 같으면 실근의 존재를 확인하기 위해 <InlineMath math="D\ge0" />을 함께 사용합니다.
                        </p>

                        <p>
                            ④ 서로 다른 두 실근을 요구하면 <InlineMath math="D>0" />을 사용합니다.
                        </p>

                        <p>
                            ⑤ 삼차방정식은 일차식과 이차식으로 인수분해한 뒤
                            각각의 근의 부호를 조사합니다.
                        </p>

                        <p>
                            ⑥ 복이차식 사차방정식은 <InlineMath math="x^2=t" />로 치환한 이차방정식의
                            실근의 부호를 조사합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3.15 이차방정식의 근의 분리 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.15 이차방정식의 근의 분리
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차방정식의 근의 분리는 두 실근이 수직선 위의 어느 위치에
                    있는지를 판단하는 것입니다. 근을 직접 구하지 않고 이차함수의
                    함숫값, 축의 위치, 판별식을 이용하여 두 근의 위치를 조사합니다.
                </p>

                {/* 기본 설정 */}
                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        근의 위치와 이차함수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        최고차항의 계수가 양수인 이차함수
                    </p>

                    <BlockMath math="f(x)=ax^2+bx+c\qquad(a>0)" />

                    <p className="leading-8 text-gray-300">
                        에 대하여 이차방정식 <InlineMath math="f(x)=0" />의 두 실근을 <InlineMath math="\alpha,\beta" />라고 하겠습니다.
                    </p>

                    <BlockMath math="\alpha\le\beta" />

                    <p className="leading-8 text-gray-300">
                        이차함수의 축은 두 근의 중점을 지나므로 축의 <InlineMath math="x" />좌표는
                    </p>

                    <BlockMath math="\frac{\alpha+\beta}{2}" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            아래로 볼록한 이차함수가 서로 다른 두 실근을 가지면
                            함숫값의 부호는 왼쪽부터 다음과 같이 나타납니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{array}{c|ccccc}
x
& & \alpha & & \beta & \\ \hline
f(x)
& + & 0 & - & 0 & +
\end{array}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            두 근의 바깥에서는 함숫값이 양수이고, 두 근 사이에서는
                            함숫값이 음수입니다.
                        </p>
                    </div>
                </div>

                {/* 두 근이 모두 주어진 범위 안에 있는 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        두 근이 모두 주어진 범위 안에 있는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 근이 모두 문제에서 제시한 하나의 범위 안에 있는 경우에는
                        다음 세 가지를 확인합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <p className="leading-8 text-gray-300">
                            ① 범위의 경계에서 함숫값이 양수인지 확인합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ② 축의 위치 <InlineMath math="\dfrac{\alpha+\beta}{2}" />가 문제에서
                            제시한 범위 안에 있는지 확인합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ③ 두 실근이 존재하도록 판별식 <InlineMath math="D\ge0" />을 확인합니다.
                        </p>
                    </div>

                    {/* p보다 큰 경우 */}
                    <div className="mt-6 rounded-xl bg-black/40 p-5">
                        <h4 className="mb-3 text-lg font-bold text-blue-300">
                            두 근이 모두 <InlineMath math="p" />보다 큰 경우
                        </h4>

                        <BlockMath math="p<\alpha\le\beta" />

                        <p className="leading-8 text-gray-300">
                            경계값 <InlineMath math="p" />는 두 근의 왼쪽에 있고,
                            축도 <InlineMath math="p" />보다 오른쪽에 있어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
f(p)>0\\[2mm]
\dfrac{\alpha+\beta}{2}>p\\[2mm]
D\ge0
\end{cases}
`}
                        />
                    </div>

                    {/* q보다 작은 경우 */}
                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <h4 className="mb-3 text-lg font-bold text-blue-300">
                            두 근이 모두 <InlineMath math="q" />보다 작은 경우
                        </h4>

                        <BlockMath math="\alpha\le\beta<q" />

                        <p className="leading-8 text-gray-300">
                            경계값 <InlineMath math="q" />는 두 근의 오른쪽에 있고,
                            축도 <InlineMath math="q" />보다 왼쪽에 있어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
f(q)>0\\[2mm]
\dfrac{\alpha+\beta}{2}<q\\[2mm]
D\ge0
\end{cases}
`}
                        />
                    </div>

                    {/* p와 q 사이 */}
                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <h4 className="mb-3 text-lg font-bold text-blue-300">
                            두 근이 모두 <InlineMath math="p" />와 <InlineMath math="q" /> 사이에 있는 경우
                        </h4>

                        <BlockMath math="p<\alpha\le\beta<q\qquad(p<q)" />

                        <p className="leading-8 text-gray-300">
                            두 경계값은 모두 두 근의 바깥에 있고, 축은 두 경계값
                            사이에 있어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
f(p)>0\\
f(q)>0\\[2mm]
p<\dfrac{\alpha+\beta}{2}<q\\[2mm]
D\ge0
\end{cases}
`}
                        />
                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-green-300">
                            하나의 원리로 정리
                        </h4>

                        <p className="leading-8 text-gray-300">
                            두 근이 모두 어떤 범위 안에 있는 문제는 유형을 따로 외우지
                            않고 다음 세 조건으로 통일하여 판단합니다.
                        </p>

                        <div className="mt-4 rounded-xl bg-black/40 p-5">
                            <p className="leading-8 text-gray-300">
                                경계에서의 함숫값
                            </p>

                            <p className="leading-8 text-gray-300">
                                축의 위치 <InlineMath math="\dfrac{\alpha+\beta}{2}" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                실근의 존재 조건 <InlineMath math="D\ge0" />
                            </p>
                        </div>
                    </div>
                </div>

                {/* 두 근이 모두 하나의 범위 안에 있는 경우가 아닌 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        두 근이 모두 하나의 범위 안에 있는 경우가 아닌 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 근이 서로 다른 구간에 있거나 특정한 값이 두 근 사이에
                        있는 경우에는 아래로 볼록한 이차함수의 그래프를 그리고,
                        문제에서 제시한 경계값에서 함숫값의 부호를 판단합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            경계값이 두 근 사이에 있으면 함숫값은 음수입니다.
                        </p>

                        <BlockMath math="\alpha<k<\beta\quad\Longrightarrow\quad f(k)<0" />

                        <p className="leading-8 text-gray-300">
                            경계값이 두 근의 바깥에 있으면 함숫값은 양수입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
k<\alpha
\quad\text{또는}\quad
k>\beta
\quad\Longrightarrow\quad
f(k)>0
`}
                        />
                    </div>

                    {/* 두 근 사이에 3 */}
                    <div className="mt-6 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-purple-300">
                            두 근 사이에 <InlineMath math="3" />이 있는 경우
                        </h4>

                        <BlockMath math="\alpha<3<\beta" />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="3" />은 두 근 사이에 있으므로
                        </p>

                        <BlockMath math="f(3)<0" />

                        <p className="leading-8 text-gray-300">
                            입니다. 이 조건은 서로 다른 두 실근의 존재를 자동으로
                            보장하므로 판별식을 따로 확인하지 않아도 됩니다.
                        </p>
                    </div>

                    {/* 한 근은 1보다 작고 다른 근은 2와 3 사이 */}
                    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-purple-300">
                            한 근은 <InlineMath math="1" />보다 작고 다른 근은 <InlineMath math="2" />와 <InlineMath math="3" /> 사이인 경우
                        </h4>

                        <BlockMath math="\alpha<1, \quad 2<\beta<3" />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="1" />과 <InlineMath math="2" />는 두 근
                            사이에 있고, <InlineMath math="3" />은 두 근의 오른쪽에
                            있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
f(1)<0\\
f(2)<0\\
f(3)>0
\end{cases}
`}
                        />
                    </div>

                    {/* 각각 다른 구간 */}
                    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-purple-300">
                            두 근이 각각 다른 구간에 있는 경우
                        </h4>

                        <BlockMath math="1<\alpha<2,\qquad3<\beta<4" />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="1" />과 <InlineMath math="4" />는 두 근의
                            바깥에 있고, <InlineMath math="2" />와 <InlineMath math="3" />은 두 근 사이에 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
f(1)>0\\
f(2)<0\\
f(3)<0\\
f(4)>0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            구간 <InlineMath math="(1,2)" />와 <InlineMath math="(3,4)" />에서 각각 함숫값의 부호가
                            바뀌므로 각 구간에 근이 하나씩 존재합니다.
                        </p>
                    </div>
                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <p className="leading-8 text-gray-300">
                        근의 분리 문제에서는 조건을 먼저 외우기보다 문제에서 요구하는
                        근의 위치를 수직선에 나타내고, 그 위치에 맞는 아래로 볼록한
                        이차함수의 그래프를 간단히 그리는 것이 중요합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            두 근이 모두 하나의 범위 안에 있는 경우
                        </p>

                        <p className="font-semibold leading-8 text-white">
                            경계의 함숫값 + 축의 위치 + 판별식
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 근이 서로 다른 구간에 있는 경우
                        </p>

                        <p className="font-semibold leading-8 text-white">
                            그래프를 그린 뒤 경계에서의 함숫값의 부호
                        </p>
                    </div>
                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        위의 함숫값 부호는 최고차항의 계수가 양수인 아래로 볼록한
                        이차함수를 기준으로 합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        최고차항의 계수가 음수이면 식 전체에 <InlineMath math="-1" />을 곱하여 최고차항의 계수를 양수로
                        만든 뒤 판단하면 부호를 일관되게 적용할 수 있습니다.
                    </p>
                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2-2ax+4a-3=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 <InlineMath math="1" />보다 클 때, 실수{" "}
                            <InlineMath math="a" />의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2-2ax+4a-3" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                두 근이 모두 <InlineMath math="1" />보다 크려면 다음 세
                                조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(1)>0\\[2mm]
\dfrac{\alpha+\beta}{2}>1\\[2mm]
D\ge0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(1)
&=1-2a+4a-3\\
&=2a-2
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
2a-2>0
\quad\Longrightarrow\quad
a>1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 축의 위치
                            </p>

                            <p>
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하면 근과
                                계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=2a" />

                            <p>
                                이므로 축의 위치는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\alpha+\beta}{2}
=\frac{2a}{2}
=a
`}
                            />

                            <p>
                                입니다. 축이 <InlineMath math="1" />보다 오른쪽에 있어야
                                하므로
                            </p>

                            <BlockMath math="a>1" />

                            <p>
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 두 실근이 존재하는 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로 <InlineMath math="D/4" />를 이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-a)^2-(4a-3)\\
&=a^2-4a+3\\
&=(a-1)(a-3)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(a-1)(a-3)\ge0" />

                            <BlockMath
                                math={String.raw`
a\le1
\quad\text{또는}\quad
a\ge3
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건을 동시에 만족해야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
a>1,\qquad
a>1,\qquad
\left(a\le1\ \text{또는}\ a\ge3\right)
`}
                            />

                            <p>
                                에서
                            </p>

                            <BlockMath math="a\ge3" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    <InlineMath math="a=3" />인 경우
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="a=3" />이면 주어진 방정식은
                                </p>

                                <BlockMath math="x^2-6x+9=0" />

                                <BlockMath math="(x-3)^2=0" />

                                <p className="leading-8 text-gray-300">
                                    이므로 두 근은 모두 <InlineMath math="3" />입니다.
                                    두 근이 모두 <InlineMath math="1" />보다 크므로 <InlineMath math="a=3" />은 포함됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{a\ge3}" />
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
                            이차방정식
                        </p>

                        <BlockMath math="x^2-(m+2)x-(m-1)=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 <InlineMath math="0" />과{" "}
                            <InlineMath math="2" /> 사이에 있을 때, 실수{" "}
                            <InlineMath math="m" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2-(m+2)x-(m-1)" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하면 두 근이
                                모두 <InlineMath math="0" />과 <InlineMath math="2" /> 사이에
                                있기 위한 조건은 다음과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(0)>0\\
f(2)>0\\[2mm]
0<\dfrac{\alpha+\beta}{2}<2\\[2mm]
D\ge0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 왼쪽 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(0)
&=-(m-1)\\
&=1-m
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
1-m>0
\quad\Longrightarrow\quad
m<1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 오른쪽 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(2)
&=2^2-2(m+2)-(m-1)\\
&=4-2m-4-m+1\\
&=1-3m
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
1-3m>0
\quad\Longrightarrow\quad
m<\frac13
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 축의 위치
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=m+2" />

                            <p>
                                이므로 축의 위치는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\alpha+\beta}{2}
=\frac{m+2}{2}
`}
                            />

                            <p>
                                입니다. 축이 <InlineMath math="0" />과{" "}
                                <InlineMath math="2" /> 사이에 있어야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
0<\frac{m+2}{2}<2
`}
                            />

                            <BlockMath
                                math={String.raw`
-2<m<2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ④ 두 실근이 존재하는 조건
                            </p>

                            <p>
                                판별식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D
&=\{-(m+2)\}^2-4\{-(m-1)\}\\
&=(m+2)^2+4(m-1)\\
&=m^2+8m\\
&=m(m+8)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="m(m+8)\ge0" />

                            <BlockMath
                                math={String.raw`
m\le-8
\quad\text{또는}\quad
m\ge0
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                네 조건
                            </p>

                            <BlockMath
                                math={String.raw`
m<1,\qquad
m<\frac13,\qquad
-2<m<2,\qquad
\left(m\le-8\ \text{또는}\ m\ge0\right)
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="0\le m<\frac13" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    <InlineMath math="m=0" />이 포함되는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="m=0" />이면 주어진 방정식은
                                </p>

                                <BlockMath math="x^2-2x+1=0" />

                                <BlockMath math="(x-1)^2=0" />

                                <p className="leading-8 text-gray-300">
                                    이므로 두 근은 모두 <InlineMath math="1" />입니다.
                                    두 근이 모두 <InlineMath math="0" />과{" "}
                                    <InlineMath math="2" /> 사이에 있으므로{" "}
                                    <InlineMath math="m=0" />은 포함됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{0\le m<\frac13}" />
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
                            이차방정식
                        </p>

                        <BlockMath math="x^2-4kx+3k^2-k+2=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 모두 <InlineMath math="2" />보다 작을 때,
                            실수 <InlineMath math="k" />의 최솟값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2-4kx+3k^2-k+2" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                두 근이 모두 <InlineMath math="2" />보다 작기 위한 조건은
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(2)>0\\[2mm]
\dfrac{\alpha+\beta}{2}<2\\[2mm]
D\ge0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(2)
&=4-8k+3k^2-k+2\\
&=3k^2-9k+6\\
&=3(k-1)(k-2)
\end{aligned}
`}
                            />

                            <p>따라서</p>

                            <BlockMath
                                math={String.raw`
3(k-1)(k-2)>0
`}
                            />

                            <BlockMath
                                math={String.raw`
k<1
\quad\text{또는}\quad
k>2
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 축의 위치
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4k" />

                            <p>
                                이므로 축의 위치는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\alpha+\beta}{2}=2k
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
2k<2
\quad\Longrightarrow\quad
k<1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 두 실근이 존재하는 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로 <InlineMath math="D/4" />를
                                이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-2k)^2-(3k^2-k+2)\\
&=k^2+k-2\\
&=(k+2)(k-1)
\end{aligned}
`}
                            />

                            <p>따라서</p>

                            <BlockMath
                                math={String.raw`
(k+2)(k-1)\ge0
`}
                            />

                            <BlockMath
                                math={String.raw`
k\le-2
\quad\text{또는}\quad
k\ge1
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건을 동시에 만족시키면
                            </p>

                            <BlockMath
                                math={String.raw`
k<1,\qquad
k<1,\qquad
(k\le-2\ \text{또는}\ k\ge1)
`}
                            />

                            <p>이므로</p>

                            <BlockMath math="k\le-2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 실수 <InlineMath math="k" />의 최솟값은
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-2}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 4 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 이차방정식
                        </p>

                        <BlockMath math="2x^2-6kx+k^2+3=0" />

                        <p className="leading-8 text-gray-300">
                            의 서로 다른 두 근 사이에 <InlineMath math="1" />이 있도록 하는
                            실수 <InlineMath math="k" />의 값의 범위가 <InlineMath math="\alpha<k<\beta" />일 때, <InlineMath math="\alpha+\beta" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=2x^2-6kx+k^2+3" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                최고차항의 계수가 양수이므로 <InlineMath math="y=f(x)" />의 그래프는 아래로 볼록합니다.
                            </p>

                            <p>
                                서로 다른 두 근 사이에 <InlineMath math="1" />이 있으려면 <InlineMath math="x=1" />에서의 함숫값이 음수이어야 합니다.
                            </p>

                            <BlockMath math="f(1)<0" />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(1)
&=2-6k+k^2+3\\
&=k^2-6k+5\\
&=(k-1)(k-5)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(k-1)(k-5)<0" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="1<k<5" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 따로 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    아래로 볼록한 이차함수에서 <InlineMath math="f(1)<0" />이면 그래프가 <InlineMath math="x=1" />에서 <InlineMath math="x" />축
                                    아래에 있습니다. 따라서 그래프는 <InlineMath math="1" />의
                                    왼쪽과 오른쪽에서 각각 <InlineMath math="x" />축과 만나므로
                                    서로 다른 두 실근이 자동으로 존재합니다.
                                </p>
                            </div>

                            <p>
                                문제의 조건
                            </p>

                            <BlockMath math="\alpha<k<\beta" />

                            <p>
                                와 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha=1,\qquad
\beta=5
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\alpha+\beta
=1+5
=6
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{6}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="2x^2-ax+2a-1=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근 <InlineMath math="\alpha,\beta" />에 대하여
                        </p>

                        <BlockMath math="-1<\alpha<0<\beta<1" />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 실수 <InlineMath math="a" />의 값의 범위를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=2x^2-ax+2a-1" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                최고차항의 계수가 양수이므로 <InlineMath math="y=f(x)" />의 그래프는 아래로 볼록합니다.
                            </p>

                            <p>
                                두 근의 위치가
                            </p>

                            <BlockMath math="-1<\alpha<0<\beta<1" />

                            <p>
                                이므로 <InlineMath math="-1" />과 <InlineMath math="1" />은
                                두 근의 바깥에 있고, <InlineMath math="0" />은 두 근
                                사이에 있습니다.
                            </p>

                            <p>
                                따라서 다음 세 조건을 모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(-1)>0\\
f(0)<0\\
f(1)>0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① <InlineMath math="x=-1" />에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(-1)
&=2(-1)^2-a(-1)+2a-1\\
&=2+a+2a-1\\
&=3a+1
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
3a+1>0
\quad\Longrightarrow\quad
a>-\frac13
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② <InlineMath math="x=0" />에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
f(0)=2a-1
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
2a-1<0
\quad\Longrightarrow\quad
a<\frac12
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ <InlineMath math="x=1" />에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(1)
&=2-a+2a-1\\
&=a+1
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+1>0
\quad\Longrightarrow\quad
a>-1
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건
                            </p>

                            <BlockMath
                                math={String.raw`
a>-\frac13,\qquad
a<\frac12,\qquad
a>-1
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="-\frac13<a<\frac12" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식을 확인하지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="f(-1)>0" />이고 <InlineMath math="f(0)<0" />이므로 <InlineMath math="-1" />과 <InlineMath math="0" /> 사이에
                                    한 실근이 있습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    또한 <InlineMath math="f(0)<0" />이고 <InlineMath math="f(1)>0" />이므로 <InlineMath math="0" />과 <InlineMath math="1" /> 사이에
                                    다른 한 실근이 있습니다. 따라서 서로 다른 두 실근이
                                    자동으로 존재하므로 판별식을 따로 확인하지 않아도 됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-\frac13<a<\frac12}" />
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
                            삼차방정식
                        </p>

                        <BlockMath
                            math="x^3+(2a+2)x^2+(8a+5)x+8a+10=0"
                        />

                        <p className="leading-8 text-gray-300">
                            이 <InlineMath math="-1" />보다 큰 서로 다른 두 실근을 갖도록
                            하는 실수 <InlineMath math="a" />의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 삼차식을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
&x^3+(2a+2)x^2+(8a+5)x+8a+10\\
&=(x+2)(x^2+2ax+4a+5)
\end{aligned}
`}
                            />

                            <p>
                                따라서 주어진 삼차방정식은
                            </p>

                            <BlockMath
                                math="(x+2)(x^2+2ax+4a+5)=0"
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                일차식에서 얻는 근은
                            </p>

                            <BlockMath math="x=-2" />

                            <p>
                                이며, 이 근은 <InlineMath math="-1" />보다 작습니다.
                                따라서 <InlineMath math="-1" />보다 큰 서로 다른 두 실근은
                                이차방정식
                            </p>

                            <BlockMath math="x^2+2ax+4a+5=0" />

                            <p>
                                에서 나와야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2+2ax+4a+5" />

                            <p>
                                라고 하겠습니다.
                            </p>

                            <p>
                                이 이차방정식의 서로 다른 두 근이 모두 <InlineMath math="-1" />보다 크려면 다음 세 조건을
                                모두 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(-1)>0\\[2mm]
\dfrac{\alpha+\beta}{2}>-1\\[2mm]
D>0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(-1)
&=(-1)^2+2a(-1)+4a+5\\
&=2a+6
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
2a+6>0
\quad\Longrightarrow\quad
a>-3
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 축의 위치
                            </p>

                            <p>
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=-2a" />

                            <p>
                                이므로 축의 위치는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\alpha+\beta}{2}
=\frac{-2a}{2}
=-a
`}
                            />

                            <p>
                                입니다. 축이 <InlineMath math="-1" />보다 오른쪽에
                                있어야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
-a>-1
\quad\Longrightarrow\quad
a<1
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 서로 다른 두 실근이 존재하는 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로
                                <InlineMath math="D/4" />를 이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=a^2-(4a+5)\\
&=a^2-4a-5\\
&=(a+1)(a-5)
\end{aligned}
`}
                            />

                            <p>
                                서로 다른 두 실근을 가져야 하므로
                            </p>

                            <BlockMath math="(a+1)(a-5)>0" />

                            <BlockMath
                                math={String.raw`
a<-1
\quad\text{또는}\quad
a>5
`}
                            />

                            <hr className="border-white/10" />

                            <p>
                                세 조건
                            </p>

                            <BlockMath
                                math={String.raw`
a>-3,\qquad
a<1,\qquad
\left(a<-1\ \text{또는}\ a>5\right)
`}
                            />

                            <p>
                                을 동시에 만족하는 범위는
                            </p>

                            <BlockMath math="-3<a<-1" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    판별식에 등호가 포함되지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    문제에서는 <b className="text-white">서로 다른</b> 두
                                    실근을 요구합니다. 따라서 중근을 제외해야 하므로 <InlineMath math="D\ge0" />이 아니라 <InlineMath math="D>0" />을 사용합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{-3<a<-1}" />
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
                            <InlineMath math="x" />에 대한 삼차방정식
                        </p>

                        <BlockMath math="x^3-5x^2+(k-5)x+k+1=0" />

                        <p className="leading-8 text-gray-300">
                            이 <InlineMath math="1" />보다 작은 한 근과{" "}
                            <InlineMath math="1" />보다 큰 서로 다른 두 실근을 갖도록 하는
                            모든 정수 <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                주어진 삼차식을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
&x^3-5x^2+(k-5)x+k+1\\
&=(x+1)(x^2-6x+k+1)
\end{aligned}
`}
                            />

                            <p>
                                따라서 주어진 삼차방정식은
                            </p>

                            <BlockMath math="(x+1)(x^2-6x+k+1)=0" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                일차식에서 얻는 근은
                            </p>

                            <BlockMath math="x=-1" />

                            <p>
                                이며, 이 근은 항상 <InlineMath math="1" />보다 작습니다.
                            </p>

                            <p>
                                따라서 나머지 이차방정식
                            </p>

                            <BlockMath math="x^2-6x+k+1=0" />

                            <p>
                                이 <InlineMath math="1" />보다 큰 서로 다른 두 실근을 가져야
                                합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2-6x+k+1" />

                            <p>
                                이라고 하겠습니다.
                            </p>

                            <p>
                                두 근이 모두 <InlineMath math="1" />보다 크고 서로 다르려면
                                다음 조건을 만족해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
f(1)>0\\[2mm]
\dfrac{\alpha+\beta}{2}>1\\[2mm]
D>0
\end{cases}
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ① 경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(1)
&=1-6+k+1\\
&=k-4
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
k-4>0
\quad\Longrightarrow\quad
k>4
`}
                            />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ② 축의 위치
                            </p>

                            <p>
                                근과 계수의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=6" />

                            <p>
                                이므로 축의 위치는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{\alpha+\beta}{2}
=\frac{6}{2}
=3
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <BlockMath math="3>1" />

                            <p>
                                이므로 축의 위치에 대한 조건은 항상 만족합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                ③ 서로 다른 두 실근이 존재하는 조건
                            </p>

                            <p>
                                일차항의 계수가 짝수이므로{" "}
                                <InlineMath math="D/4" />를 이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-3)^2-(k+1)\\
&=9-k-1\\
&=8-k
\end{aligned}
`}
                            />

                            <p>
                                서로 다른 두 실근을 가져야 하므로
                            </p>

                            <BlockMath math="8-k>0" />

                            <BlockMath math="k<8" />

                            <hr className="border-white/10" />

                            <p>
                                두 조건을 함께 만족시키면
                            </p>

                            <BlockMath math="4<k<8" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                이 범위에 있는 정수 <InlineMath math="k" />는
                            </p>

                            <BlockMath math="5,\;6,\;7" />

                            <p>
                                이므로 그 합은
                            </p>

                            <BlockMath
                                math={String.raw`
5+6+7=18
`}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    근의 위치
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    인수 <InlineMath math="x+1" />에서 얻는 근{" "}
                                    <InlineMath math="-1" />은 항상{" "}
                                    <InlineMath math="1" />보다 작습니다. 따라서 이 근의
                                    위치는 따로 조건을 구할 필요가 없고, 이차방정식의 두
                                    근이 모두 <InlineMath math="1" />보다 큰지만 조사하면
                                    됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{18}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 8 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            이차방정식
                        </p>

                        <BlockMath math="x^2-2kx+k+2=0" />

                        <p className="leading-8 text-gray-300">
                            의 근 중 적어도 한 개가 이차방정식
                        </p>

                        <BlockMath math="x^2-5x+6=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근 사이에 있을 때, 실수 <InlineMath math="k" />의 값의
                            범위를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">
                            <p>
                                먼저 두 번째 이차방정식을 인수분해합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
x^2-5x+6
&=(x-2)(x-3)
\end{aligned}
`}
                            />

                            <p>
                                따라서 두 근은
                            </p>

                            <BlockMath math="2,\qquad 3" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                그러므로 첫 번째 이차방정식의 근 중 적어도 한 개가 <InlineMath math="2" />와 <InlineMath math="3" /> 사이에
                                있어야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                첫 번째 이차방정식의 좌변을
                            </p>

                            <BlockMath math="f(x)=x^2-2kx+k+2" />

                            <p>
                                라고 하겠습니다.
                            </p>

                            <p>
                                최고차항의 계수가 양수이므로 <InlineMath math="y=f(x)" />의 그래프는 아래로 볼록합니다.
                            </p>

                            <p>
                                <InlineMath math="2" />와 <InlineMath math="3" /> 사이에
                                한 근이 있으려면 두 경계에서의 함숫값의 부호가 서로
                                달라야 합니다.
                            </p>

                            <BlockMath math="f(2)f(3)<0" />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                경계에서의 함숫값
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(2)
&=2^2-2k\cdot2+k+2\\
&=6-3k\\
&=-3(k-2)
\end{aligned}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
f(3)
&=3^2-2k\cdot3+k+2\\
&=11-5k\\
&=-5\left(k-\frac{11}{5}\right)
\end{aligned}
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
(-3)(-5)(k-2)
\left(k-\frac{11}{5}\right)<0
`}
                            />

                            <p>
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
(k-2)\left(k-\frac{11}{5}\right)<0
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="2<k<\frac{11}{5}" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="font-semibold text-yellow-300">
                                    양 끝값이 포함되지 않는 이유
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="k=2" />이면 <InlineMath math="f(2)=0" />이므로 <InlineMath math="2" />가 근입니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    또한 <InlineMath math="k=\frac{11}{5}" />이면 <InlineMath math="f(3)=0" />이므로 <InlineMath math="3" />이 근입니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    문제에서는 두 근 <InlineMath math="2,3" />의
                                    <b className="text-white"> 사이</b>에 있어야 하므로
                                    양 끝값은 포함하지 않습니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="mb-2 font-semibold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="\boxed{2<k<\frac{11}{5}}" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-3 leading-8 text-gray-300">
                        <p>
                            이차방정식의 근의 분리는 두 실근의 위치를 판단하는 것입니다.
                        </p>

                        <p>
                            두 근이 모두 주어진 범위 안에 있으면 경계에서의 함숫값,
                            축의 위치, 판별식을 확인합니다.
                        </p>

                        <p>
                            축의 위치는 두 근의 중점인 <InlineMath math="\dfrac{\alpha+\beta}{2}" />를 이용합니다.
                        </p>

                        <p>
                            두 근이 서로 다른 구간에 있으면 아래로 볼록한 이차함수를
                            그린 뒤 경계값에서의 함숫값의 부호를 조사합니다.
                        </p>

                        <p>
                            함숫값이 음수인 점은 두 근 사이에 있고, 함숫값이 양수인
                            점은 두 근의 바깥에 있습니다.
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
};