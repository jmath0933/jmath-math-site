"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";

type Quad = {
    a: number;
    h: number;
    k: number;
};

const xMin = -6;
const xMax = 6;
const yMin = -6;
const yMax = 6;

function rand(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function round1(n: number) {
    return Math.round(n * 10) / 10;
}

function makeRandomQuad(): Quad {
    const sign = Math.random() < 0.5 ? 1 : -1;

    return {
        a: round1(sign * rand(0.35, 0.9)),
        h: round1(rand(-2.5, 2.5)),
        k: round1(rand(-2, 2)),
    };
}

function fx(q: Quad, x: number) {
    return q.a * (x - q.h) ** 2 + q.k;
}

function toSvgX(x: number) {
    return ((x - xMin) / (xMax - xMin)) * 100;
}

function toSvgY(y: number) {
    return 100 - ((y - yMin) / (yMax - yMin)) * 100;
}

function formatSigned(n: number) {
    if (n === 0) return "";
    return n > 0 ? `+${n}` : `${n}`;
}

function vertexForm(q: Quad) {
    const hPart =
        q.h === 0
            ? "x"
            : q.h > 0
                ? `x-${q.h}`
                : `x+${Math.abs(q.h)}`;

    return `y=${q.a}(${hPart})^2${formatSigned(q.k)}`;
}

function SymmetryExplorer() {
    const [quad, setQuad] = useState<Quad>(() => ({
        a: 0.6,
        h: 0,
        k: -3,
    }));

    const [lineY, setLineY] = useState(0);

    const graphPath = useMemo(() => {
        const points: string[] = [];

        for (let i = 0; i <= 240; i++) {
            const x = xMin + ((xMax - xMin) * i) / 240;
            const y = fx(quad, x);

            if (y < yMin - 1 || y > yMax + 1) continue;

            points.push(`${toSvgX(x)},${toSvgY(y)}`);
        }

        return points.length > 0 ? `M ${points.join(" L ")}` : "";
    }, [quad]);

    const hasIntersection =
        (lineY - quad.k) / quad.a >= 0 &&
        Number.isFinite((lineY - quad.k) / quad.a);

    const d = hasIntersection
        ? Math.sqrt((lineY - quad.k) / quad.a)
        : 0;

    const x1 = quad.h - d;
    const x2 = quad.h + d;

    const visibleIntersection =
        hasIntersection && x1 >= xMin && x2 <= xMax && lineY >= yMin && lineY <= yMax;

    const sx1 = toSvgX(x1);
    const sx2 = toSvgX(x2);
    const sm = toSvgX(quad.h);
    const sy = toSvgY(lineY);

    return (
        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <h3 className="text-2xl font-bold text-blue-300">
                        직접 움직여 보기
                    </h3>
                    <p className="mt-2 leading-7 text-gray-300">
                        가로선을 움직여도 두 교점의 중점은 항상 대칭축 위에 있습니다.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={() => {
                        const next = makeRandomQuad();
                        setQuad(next);
                        setLineY(round1(next.k + Math.abs(next.a) * rand(2, 5)));
                    }}
                    className="rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 font-bold text-blue-200 hover:bg-blue-500/20"
                >
                    🎲 예제 바꾸기
                </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[360px_1fr]">
                <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="mb-2 font-bold text-white">현재 이차함수</p>
                        <BlockMath math={vertexForm(quad)} />
                    </div>

                    <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                        <p className="mb-4 font-bold text-white">가로선 조절</p>

                        <div className="flex items-center gap-4">
                            <span className="w-30 text-orange-300">
                                <InlineMath math={`y=${lineY}`} />
                            </span>

                            <input
                                type="range"
                                min={yMin}
                                max={yMax}
                                step={0.1}
                                value={lineY}
                                onChange={(e) => setLineY(Number(e.target.value))}
                                className="w-full accent-orange-400"
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <p className="mb-3 font-bold text-yellow-300">
                            관찰할 점
                        </p>

                        {visibleIntersection ? (
                            <div className="space-y-3 text-gray-300">
                                <p>
                                    두 점 <InlineMath math="A" />,{" "}
                                    <InlineMath math="B" />의 중점{" "}
                                    <InlineMath math="M" />은 대칭축 위에 있습니다.
                                </p>

                                <BlockMath math="MA=MB" />

                                <p>
                                    대칭축은 <InlineMath math={`x=${quad.h}`} />입니다.
                                </p>
                            </div>
                        ) : (
                            <p className="leading-7 text-gray-300">
                                이 가로선은 현재 포물선과 두 점에서 만나지 않습니다.
                                가로선을 조금 움직여 보세요.
                            </p>
                        )}
                    </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <svg
                        viewBox="0 0 100 100"
                        className="h-[560px] w-full"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <marker
                                id="arrow"
                                markerWidth="8"
                                markerHeight="8"
                                refX="4"
                                refY="4"
                                orient="auto"
                            >
                                <path d="M0,0 L8,4 L0,8 Z" fill="#60a5fa" />
                            </marker>
                        </defs>

                        {/* grid */}
                        {Array.from({ length: 13 }).map((_, i) => {
                            const x = (i / 12) * 100;
                            return (
                                <line
                                    key={`vx-${i}`}
                                    x1={x}
                                    y1={0}
                                    x2={x}
                                    y2={100}
                                    stroke="rgba(255,255,255,0.07)"
                                    strokeWidth="0.25"
                                />
                            );
                        })}

                        {Array.from({ length: 13 }).map((_, i) => {
                            const y = (i / 12) * 100;
                            return (
                                <line
                                    key={`hy-${i}`}
                                    x1={0}
                                    y1={y}
                                    x2={100}
                                    y2={y}
                                    stroke="rgba(255,255,255,0.07)"
                                    strokeWidth="0.25"
                                />
                            );
                        })}

                        {/* symmetry axis */}
                        <line
                            x1={toSvgX(quad.h)}
                            y1={0}
                            x2={toSvgX(quad.h)}
                            y2={100}
                            stroke="#60a5fa"
                            strokeWidth="0.7"
                            strokeDasharray="2 2"
                        />

                        {/* horizontal line */}
                        <line
                            x1="0"
                            y1={toSvgY(lineY)}
                            x2="100"
                            y2={toSvgY(lineY)}
                            stroke="#f97316"
                            strokeWidth="0.8"
                        />

                        {/* parabola */}
                        <path
                            d={graphPath}
                            fill="none"
                            stroke="#3b82f6"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                        />

                        {/* vertex */}
                        <circle
                            cx={toSvgX(quad.h)}
                            cy={toSvgY(quad.k)}
                            r="1.4"
                            fill="#3b82f6"
                        />

                        {visibleIntersection && (
                            <>
                                {/* chord */}
                                <line
                                    x1={sx1}
                                    y1={sy}
                                    x2={sx2}
                                    y2={sy}
                                    stroke="#f97316"
                                    strokeWidth="1"
                                />

                                {/* A M B */}
                                <circle cx={sx1} cy={sy} r="1.6" fill="#3b82f6" />
                                <circle cx={sm} cy={sy} r="1.6" fill="#a855f7" />
                                <circle cx={sx2} cy={sy} r="1.6" fill="#3b82f6" />

                                <text x={sx1 - 4} y={sy - 4} fill="#bfdbfe" fontSize="4">
                                    A
                                </text>
                                <text x={sm + 2} y={sy - 4} fill="#d8b4fe" fontSize="4">
                                    M
                                </text>
                                <text x={sx2 + 2} y={sy - 4} fill="#bfdbfe" fontSize="4">
                                    B
                                </text>

                                {/* equal arrows 
                                <line
                                    x1={sx1 + 2}
                                    y1={sy + 10}
                                    x2={sm - 2}
                                    y2={sy + 10}
                                    stroke="#60a5fa"
                                    strokeWidth="0.9"
                                    markerEnd="url(#arrow)"
                                />
                                <line
                                    x1={sx2 - 2}
                                    y1={sy + 10}
                                    x2={sm + 2}
                                    y2={sy + 10}
                                    stroke="#60a5fa"
                                    strokeWidth="0.9"
                                    markerEnd="url(#arrow)"
                                />

                                <text x={sm - 10} y={sy + 18} fill="#bfdbfe" fontSize="4">
                                    MA = MB
                                </text>*/}
                            </>
                        )}

                        <text
                            x={toSvgX(quad.h) + 2}
                            y="6"
                            fill="#93c5fd"
                            fontSize="4"
                        >
                            대칭축
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

function LinearFunctionSlider() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);

    const width = 620;
    const height = 420;
    const scale = 42;
    const originX = width / 2 - 100;
    const originY = height / 2;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const xMin = -6;
    const xMax = 6;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const formatLinearEquation = () => {
        if (a === 0) {
            return `y=${formatNumber(b)}`;
        }

        const aTerm =
            a === 1
                ? "x"
                : a === -1
                    ? "-x"
                    : `${formatNumber(a)}x`;

        const bTerm =
            b === 0
                ? ""
                : b > 0
                    ? `+${formatNumber(b)}`
                    : `${formatNumber(b)}`;

        return `y=${aTerm}${bTerm}`;
    };

    const y1 = a * xMin + b;
    const y2 = a * xMax + b;

    const points = useMemo(() => {
        return {
            lineX1: toSvgX(xMin),
            lineY1: toSvgY(y1),
            lineX2: toSvgX(xMax),
            lineY2: toSvgY(y2),
            interceptX: toSvgX(0),
            interceptY: toSvgY(b),
            slopeStartX: toSvgX(0),
            slopeStartY: toSvgY(b),
            slopeEndX: toSvgX(1),
            slopeEndY: toSvgY(a + b),
        };
    }, [a, b]);

    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                슬라이더를 움직이며 <InlineMath math="y=ax+b" />의 그래프가
                어떻게 변하는지 확인해 봅시다.
            </p>

            <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
                <div className="space-y-4">
                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-3 font-bold text-white">현재 식</h4>

                        <p className="text-center text-2xl text-white">
                            <InlineMath math={formatLinearEquation()} />
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-4 font-bold text-white">계수 조절</h4>

                        <div className="space-y-5">
                            <SliderRow
                                label="a"
                                value={a}
                                min={-3}
                                max={3}
                                step={0.1}
                                color="text-blue-300"
                                description={
                                    a > 0
                                        ? "오른쪽 위로 향함"
                                        : a < 0
                                            ? "오른쪽 아래로 향함"
                                            : "가로선"
                                }
                                onChange={setA}
                            />

                            <SliderRow
                                label="b"
                                value={b}
                                min={-4}
                                max={4}
                                step={0.1}
                                color="text-yellow-300"
                                description={
                                    b > 0 ? (
                                        <>
                                            <Variable>y</Variable>축과 <Variable>x</Variable>축 위에서 만남
                                        </>
                                    ) : b < 0 ? (
                                        <>
                                            <Variable>y</Variable>축과 <Variable>x</Variable>축 아래에서 만남
                                        </>
                                    ) : (
                                        <>원점을 지남</>
                                    )
                                }
                                onChange={setB}
                            />
                        </div>
                    </div>

                </div>

                <div className="overflow-x-auto">
                    <svg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className="mx-auto rounded-xl bg-black/30"
                    >
                        {Array.from({ length: 11 }, (_, i) => {
                            const x = i - 5;
                            return (
                                <line
                                    key={`v-${x}`}
                                    x1={toSvgX(x)}
                                    y1={0}
                                    x2={toSvgX(x)}
                                    y2={height}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        {Array.from({ length: 11 }, (_, i) => {
                            const y = i - 5;
                            return (
                                <line
                                    key={`h-${y}`}
                                    x1={0}
                                    y1={toSvgY(y)}
                                    x2={width}
                                    y2={toSvgY(y)}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        <line
                            x1={toSvgX(-6)}
                            y1={originY}
                            x2={toSvgX(6)}
                            y2={originY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(5)}
                            x2={originX}
                            y2={toSvgY(-5)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <text
                            x={width - 28}
                            y={originY - 8}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            x
                        </text>

                        <text
                            x={originX + 8}
                            y={28}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            y
                        </text>

                        <line
                            x1={points.lineX1}
                            y1={points.lineY1}
                            x2={points.lineX2}
                            y2={points.lineY2}
                            stroke="#60a5fa"
                            strokeWidth="4"
                            strokeLinecap="round"
                        />

                        <circle
                            cx={points.interceptX}
                            cy={points.interceptY}
                            r="6"
                            fill="#facc15"
                        />

                        <text
                            x={points.interceptX + 10}
                            y={points.interceptY - 8}
                            fill="#facc15"
                            fontSize="22"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            b
                        </text>

                        <line
                            x1={points.slopeStartX}
                            y1={points.slopeStartY}
                            x2={points.slopeEndX}
                            y2={points.slopeStartY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />

                        <line
                            x1={points.slopeEndX}
                            y1={points.slopeStartY}
                            x2={points.slopeEndX}
                            y2={points.slopeEndY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />

                        <circle
                            cx={points.slopeEndX}
                            cy={points.slopeEndY}
                            r="6"
                            fill="#93c5fd"
                        />

                        <text
                            x={(points.slopeStartX + points.slopeEndX) / 2 - 5}
                            y={points.slopeStartY + 24}
                            fill="white"
                            fontSize="18"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            1
                        </text>

                        <text
                            x={points.slopeEndX + 12}
                            y={(points.slopeStartY + points.slopeEndY) / 2}
                            fill="white"
                            fontSize="22"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            a
                        </text>
                    </svg>
                </div>
            </div>

            <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-gray-200">
                <h4 className="mb-3 font-bold text-white">핵심</h4>

                <p className="leading-8">
                    <InlineMath math="a" />는 <InlineMath math="x" />가 오른쪽으로
                    1만큼 움직일 때 <InlineMath math="y" />가 움직이는 양입니다.
                </p>

                <p className="mt-2 leading-8">
                    <InlineMath math="b" />는 그래프가 <InlineMath math="y" />축과
                    만나는 점의 <InlineMath math="y" />좌표입니다.
                </p>
            </div>
        </div>
    );
};

function QuadraticBasicSlider() {
    const [a, setA] = useState(1);

    const width = 620;
    const height = 420;
    const scale = 42;
    const originX = width / 2 - 100;
    const originY = height / 2;

    const xMin = -5;
    const xMax = 5;
    const step = 0.1;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const equation =
        a === 0
            ? "y=0"
            : a === 1
                ? "y=x^2"
                : a === -1
                    ? "y=-x^2"
                    : `y=${formatNumber(a)}x^2`;

    const graphPath = useMemo(() => {
        const points: string[] = [];

        for (let x = xMin; x <= xMax; x += step) {
            const y = a * x * x;
            points.push(`${toSvgX(x)},${toSvgY(y)}`);
        }

        return points.join(" ");
    }, [a]);

    const pointX = 1;
    const pointY = a;

    const description =
        a > 0 ? (
            <>아래로 볼록</>
        ) : a < 0 ? (
            <>위로 볼록</>
        ) : (
            <>
                <Variable>x</Variable>축
            </>
        );

    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                슬라이더를 움직이며 <InlineMath math="y=ax^2" />의 그래프에서 <InlineMath math="a" />가 어떤 역할을 하는지 확인해 보자.
            </p>

            <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
                <div className="space-y-4">
                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-3 font-bold text-white">현재 식</h4>
                        <p className="text-center text-2xl text-white">
                            <InlineMath math={equation} />
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-4 font-bold text-white">계수 조절</h4>

                        <div className="space-y-2">
                            <div className="grid grid-cols-[110px_1fr] items-center gap-3">
                                <div className="text-2xl text-blue-300">
                                    <span
                                        style={{
                                            fontFamily: "Times New Roman, serif",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        a
                                    </span>
                                    <span> = {formatNumber(a)}</span>
                                </div>

                                <p className="text-lg font-medium text-gray-100">
                                    {description}
                                </p>
                            </div>

                            <input
                                type="range"
                                min="-3"
                                max="3"
                                step="0.1"
                                value={a}
                                onChange={(e) => setA(Number(e.target.value))}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <svg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className="mx-auto rounded-xl bg-black/30"
                    >
                        {Array.from({ length: 11 }, (_, i) => {
                            const x = i - 5;
                            return (
                                <line
                                    key={`v-${x}`}
                                    x1={toSvgX(x)}
                                    y1={0}
                                    x2={toSvgX(x)}
                                    y2={height}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        {Array.from({ length: 11 }, (_, i) => {
                            const y = i - 5;
                            return (
                                <line
                                    key={`h-${y}`}
                                    x1={0}
                                    y1={toSvgY(y)}
                                    x2={width}
                                    y2={toSvgY(y)}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        <line
                            x1={toSvgX(-5)}
                            y1={originY}
                            x2={toSvgX(5)}
                            y2={originY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(5)}
                            x2={originX}
                            y2={toSvgY(-5)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <text
                            x={width - 28}
                            y={originY - 8}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            x
                        </text>

                        <text
                            x={originX + 8}
                            y={28}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            y
                        </text>

                        <polyline
                            points={graphPath}
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <circle cx={originX} cy={originY} r="5" fill="#facc15" />

                        <text
                            x={originX + 8}
                            y={originY + 22}
                            fill="#facc15"
                            fontSize="16"
                        >
                            O
                        </text>

                        <circle
                            cx={toSvgX(pointX)}
                            cy={toSvgY(pointY)}
                            r="6"
                            fill="#93c5fd"
                        />

                        <line
                            x1={toSvgX(1)}
                            y1={originY}
                            x2={toSvgX(1)}
                            y2={toSvgY(pointY)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(pointY)}
                            x2={toSvgX(1)}
                            y2={toSvgY(pointY)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                            strokeDasharray="6 6"
                        />

                        <text
                            x={toSvgX(1) + 10}
                            y={toSvgY(pointY) - 8}
                            fill="#93c5fd"
                            fontSize="16"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            (1, a)
                        </text>
                    </svg>
                </div>
            </div>
            <div className="rounded-xl border border-white/15 bg-white/5 p-4 text-gray-200">
                <h4 className="mb-3 font-bold text-white">핵심</h4>

                <p className="leading-8">
                    <InlineMath math="a>0" />이면 아래로 볼록, <InlineMath math="a<0" />이면 위로 볼록합니다.
                </p>

                <p className="mt-2 leading-8">
                    <InlineMath math="|a|" />가 클수록 포물선은 좁아지고, <InlineMath math="|a|" />가 작을수록 포물선은 넓어집니다.
                </p>
            </div>
        </div>
    );
};

type Point = {
    x: number;
    y: number;
};

type StepProps = {
    title: React.ReactNode;
    children: React.ReactNode;
};

function Step({ title, children }: StepProps) {
    return (
        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
            <h4 className="mb-3 text-lg font-bold text-white">
                {title}
            </h4>

            <div className="space-y-3 leading-8 text-gray-300">
                {children}
            </div>
        </div>
    );
};

function QuadraticFullSlider() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const [showTotal, setShowTotal] = useState(true);
    const [showBase, setShowBase] = useState(true);
    const [showLinear, setShowLinear] = useState(true);
    const [showPoints, setShowPoints] = useState(true);
    const [showDifference, setShowDifference] = useState(true);
    const [showVertex, setShowVertex] = useState(false);

    const width = 540;
    const height = 420;
    const scale = 42;
    const originX = width / 2 - 50;
    const originY = height / 2;

    const xMin = -5;
    const xMax = 5;
    const step = 0.05;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const fBase = (x: number) => a * x * x;
    const fLinear = (x: number) => b * x + c;
    const fTotal = (x: number) => a * x * x + b * x + c;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const formatTerm = (coef: number, variable: string, isFirst = false) => {
        if (coef === 0) return "";

        const sign = coef > 0 ? (isFirst ? "" : "+") : "-";
        const abs = Math.abs(coef);

        if (abs === 1 && variable) return `${sign}${variable}`;
        return `${sign}${formatNumber(abs)}${variable}`;
    };

    const equation = useMemo(() => {
        const terms = [
            formatTerm(a, "x^2", true),
            formatTerm(b, "x"),
            c === 0 ? "" : `${c > 0 ? "+" : "-"}${formatNumber(Math.abs(c))}`,
        ].filter(Boolean);

        if (terms.length === 0) return "y=0";

        return `y=${terms.join("")}`;
    }, [a, b, c]);

    const makePath = (fn: (x: number) => number) => {
        const points: string[] = [];

        for (let x = xMin; x <= xMax; x += step) {
            const y = fn(x);

            if (Number.isFinite(y)) {
                points.push(`${toSvgX(x)},${toSvgY(y)}`);
            }
        }

        return points.join(" ");
    };

    const totalPath = useMemo(() => makePath(fTotal), [a, b, c]);
    const basePath = useMemo(() => makePath(fBase), [a]);
    const linearPath = useMemo(() => makePath(fLinear), [b, c]);

    const pointMinus: Point = { x: -1, y: fTotal(-1) };
    const pointZero: Point = { x: 0, y: fTotal(0) };
    const pointPlus: Point = { x: 1, y: fTotal(1) };

    const diff = pointPlus.y - pointMinus.y;

    const hasVertex = a !== 0;
    const vertexX = hasVertex ? -b / (2 * a) : 0;
    const vertexY = hasVertex ? fTotal(vertexX) : 0;

    const reset = () => {
        setA(1);
        setB(0);
        setC(0);
    };

    return (
        <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-5">
            <h3 className="mb-4 text-xl font-bold text-white">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                슬라이더를 움직이며 <InlineMath math="y=ax^2" />, <InlineMath math="y=bx+c" />, <InlineMath math="y=ax^2+bx+c" />의 관계를 확인해 봅시다.
            </p>

            <div className="grid gap-5 lg:grid-cols-[240px_1fr]">
                <div className="space-y-4">
                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-3 font-bold text-white">그래프 보이기</h4>

                        <label className="mb-3 flex cursor-pointer items-center gap-3 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showTotal}
                                onChange={(e) => setShowTotal(e.target.checked)}
                            />
                            <span className="h-3 w-3 rounded-sm bg-red-500" />
                            <span>
                                전체 그래프
                                <br />
                                <InlineMath math="y=ax^2+bx+c" />
                            </span>
                        </label>

                        <label className="mb-3 flex cursor-pointer items-center gap-3 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showBase}
                                onChange={(e) => setShowBase(e.target.checked)}
                            />
                            <span className="h-3 w-3 rounded-sm bg-blue-400" />
                            <span>
                                기본 포물선
                                <br />
                                <InlineMath math="y=ax^2" />
                            </span>
                        </label>

                        <label className="flex cursor-pointer items-center gap-3 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showLinear}
                                onChange={(e) => setShowLinear(e.target.checked)}
                            />
                            <span className="h-3 w-3 rounded-sm bg-green-500" />
                            <span>
                                일차 부분
                                <br />
                                <InlineMath math="y=bx+c" />
                            </span>
                        </label>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-3 font-bold text-white">표시 옵션</h4>

                        <label className="mb-2 flex cursor-pointer items-center gap-2 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showPoints}
                                onChange={(e) => setShowPoints(e.target.checked)}
                            />
                            <span style={{ fontSize: "15px" }}>
                                <InlineMath math="f(-1), f(0), f(1)" />
                            </span>
                        </label>

                        <label className="mb-2 flex cursor-pointer items-center gap-2 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showDifference}
                                onChange={(e) => setShowDifference(e.target.checked)}
                            />
                            <span style={{ fontSize: "15px" }}>
                                <InlineMath math="f(1)-f(-1)" />
                            </span>
                        </label>

                        <label className="flex cursor-pointer items-center gap-2 text-gray-300">
                            <input
                                type="checkbox"
                                checked={showVertex}
                                onChange={(e) => setShowVertex(e.target.checked)}
                            />
                            <span>꼭짓점</span>
                        </label>
                    </div>

                    <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-3 font-bold text-white">현재 식</h4>
                        <p className="text-center text-l text-white">
                            <InlineMath math={equation} />
                        </p>
                    </div>


                </div>

                <div className="overflow-x-auto">
                    <svg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className="mx-auto rounded-xl bg-black/30"
                    >
                        {Array.from({ length: 11 }, (_, i) => {
                            const x = i - 5;
                            return (
                                <line
                                    key={`v-${x}`}
                                    x1={toSvgX(x)}
                                    y1={0}
                                    x2={toSvgX(x)}
                                    y2={height}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        {Array.from({ length: 11 }, (_, i) => {
                            const y = i - 5;
                            return (
                                <line
                                    key={`h-${y}`}
                                    x1={0}
                                    y1={toSvgY(y)}
                                    x2={width}
                                    y2={toSvgY(y)}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        <line
                            x1={toSvgX(-5)}
                            y1={originY}
                            x2={toSvgX(6)}
                            y2={originY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(5)}
                            x2={originX}
                            y2={toSvgY(-5)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <text
                            x={width - 80}
                            y={originY - 8}
                            fill="white"
                            fontSize="18"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            x
                        </text>

                        <text
                            x={originX + 8}
                            y={22}
                            fill="white"
                            fontSize="18"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            y
                        </text>

                        {showBase && (
                            <polyline
                                points={basePath}
                                fill="none"
                                stroke="#60a5fa"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.9"
                            />
                        )}

                        {showLinear && (
                            <polyline
                                points={linearPath}
                                fill="none"
                                stroke="#22c55e"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                opacity="0.9"
                            />
                        )}

                        {showTotal && (
                            <polyline
                                points={totalPath}
                                fill="none"
                                stroke="#ef4444"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        )}

                        {showPoints && (
                            <>
                                <PointDot
                                    x={toSvgX(pointMinus.x)}
                                    y={toSvgY(pointMinus.y)}
                                    label={`f(-1)=${formatNumber(pointMinus.y)}`}
                                    color="#ef4444"
                                />
                                <PointDot
                                    x={toSvgX(pointZero.x)}
                                    y={toSvgY(pointZero.y)}
                                    label={`f(0)=${formatNumber(pointZero.y)}`}
                                    color="#a855f7"
                                />
                                <PointDot
                                    x={toSvgX(pointPlus.x)}
                                    y={toSvgY(pointPlus.y)}
                                    label={`f(1)=${formatNumber(pointPlus.y)}`}
                                    color="#ef4444"
                                />
                            </>
                        )}

                        {showDifference && (
                            <>
                                <line
                                    x1={toSvgX(3.8)}
                                    y1={toSvgY(pointMinus.y)}
                                    x2={toSvgX(3.8)}
                                    y2={toSvgY(pointPlus.y)}
                                    stroke="#c084fc"
                                    strokeWidth="2"
                                    strokeDasharray="6 6"
                                />

                                <line
                                    x1={toSvgX(3.4)}
                                    y1={toSvgY(pointMinus.y)}
                                    x2={toSvgX(4.2)}
                                    y2={toSvgY(pointMinus.y)}
                                    stroke="#c084fc"
                                    strokeWidth="2"
                                    strokeDasharray="6 6"
                                />

                                <line
                                    x1={toSvgX(3.4)}
                                    y1={toSvgY(pointPlus.y)}
                                    x2={toSvgX(4.2)}
                                    y2={toSvgY(pointPlus.y)}
                                    stroke="#c084fc"
                                    strokeWidth="2"
                                    strokeDasharray="6 6"
                                />

                                <text
                                    x={toSvgX(4.35)}
                                    y={(toSvgY(pointMinus.y) + toSvgY(pointPlus.y)) / 2}
                                    fill="#c084fc"
                                    fontSize="15"
                                    fontFamily="Times New Roman"
                                    fontStyle="italic"
                                >
                                    f(1)-f(-1)=2b
                                </text>
                            </>
                        )}

                        {showVertex && hasVertex && (
                            <>
                                <circle
                                    cx={toSvgX(vertexX)}
                                    cy={toSvgY(vertexY)}
                                    r="6"
                                    fill="#facc15"
                                />

                                <text
                                    x={toSvgX(vertexX) + 8}
                                    y={toSvgY(vertexY) + 22}
                                    fill="#facc15"
                                    fontSize="15"
                                >
                                    꼭짓점
                                </text>
                            </>
                        )}
                    </svg>
                </div>
            </div>

            <div className="space-y-4">
                <SliderRow
                    label="a"
                    value={a}
                    min={-3}
                    max={3}
                    step={0.1}
                    color="text-blue-300"
                    description={a > 0 ? "아래로 볼록" : a < 0 ? "위로 볼록" : "직선"}
                    onChange={setA}
                />

                <SliderRow
                    label="b"
                    value={b}
                    min={-5}
                    max={5}
                    step={0.1}
                    color="text-green-300"
                    description={
                        b > 0 ? (
                            <>
                                <Variable>y</Variable>축을 오른쪽 위로 통과
                            </>
                        ) : b < 0 ? (
                            <>
                                <Variable>y</Variable>축을 오른쪽 아래로 통과
                            </>
                        ) : (
                            <>
                                꼭짓점이 <Variable>y</Variable>축 위
                            </>
                        )
                    }
                    onChange={setB}
                />

                <SliderRow
                    label="c"
                    value={c}
                    min={-5}
                    max={5}
                    step={0.1}
                    color="text-purple-300"
                    description={
                        c > 0 ? (
                            <>
                                <Variable>x</Variable>축 위에서 만남
                            </>
                        ) : c < 0 ? (
                            <>
                                <Variable>x</Variable>축 아래에서 만남
                            </>
                        ) : (
                            "원점을 지남"
                        )
                    }
                    onChange={setC}
                />
                <div className="flex justify-end">
                    <button
                        type="button"
                        onClick={reset}
                        className="rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                    >
                        초기화
                    </button>
                </div>
            </div>

            <div className="mt-5 rounded-xl bg-black/30 p-4 text-gray-300">
                <p className="leading-8">
                    <InlineMath math="a" />는 포물선의 모양을 결정합니다.
                </p>
                <p className="leading-8">
                    <InlineMath math="b" />는 <InlineMath math="f(1)-f(-1)=2b" />를 통해 좌우 높이 차로 볼 수 있습니다.
                </p>
                <p className="leading-8">
                    <InlineMath math="c=f(0)" />이므로 <InlineMath math="c" />는 <InlineMath math="y" />축과 만나는 점의 <InlineMath math="y" />좌표입니다.
                </p>
            </div>
        </div>
    );
};

function SliderRow({
    label,
    value,
    min,
    max,
    step,
    color,
    description,
    onChange,
}: {
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    color: string;
    description: ReactNode;
    onChange: (value: number) => void;
}) {
    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    return (
        <div className="grid grid-cols-[80px_180px_1fr] items-center gap-2">
            <div className={`text-xl ${color}`}>
                <span className="font-serif italic">{label}</span>
                <span> = {formatNumber(value)}</span>
            </div>

            <p className="text-lg font-medium text-gray-200 tracking-tight">
                {description}
            </p>

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                className="w-full"
            />
        </div>
    );
};

function PointDot({
    x,
    y,
    label,
    color,
}: {
    x: number;
    y: number;
    label: string;
    color: string;
}) {
    return (
        <>
            <circle cx={x} cy={y} r="5" fill={color} />
            <rect
                x={x + 8}
                y={y - 27}
                width={82}
                height={24}
                rx={6}
                fill="rgba(0,0,0,0.55)"
                stroke="rgba(255,255,255,0.2)"
            />
            <text
                x={x + 14}
                y={y - 10}
                fill={color}
                fontSize="13"
                fontFamily="Times New Roman"
                fontStyle="italic"
            >
                {label}
            </text>
        </>
    );
};

function Variable({ children }: { children: React.ReactNode }) {
    return (
        <span
            style={{
                fontFamily: "Times New Roman, serif",
                fontStyle: "italic",
            }}
        >
            {children}
        </span>
    );
};

function EquationFunctionRelationExplorer() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const width = 520;
    const height = 420;
    const scale = 22;
    const originX = width / 2 - 100;
    const originY = height / 2;

    const xMin = -6;
    const xMax = 6;
    const step = 0.05;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const formatTerm = (coef: number, variable: string, isFirst = false) => {
        if (coef === 0) return "";

        const sign = coef > 0 ? (isFirst ? "" : "+") : "-";
        const abs = Math.abs(coef);

        if (abs === 1 && variable) return `${sign}${variable}`;
        return `${sign}${formatNumber(abs)}${variable}`;
    };

    const formatPolynomial = (
        q: number,
        l: number,
        k: number,
        yPrefix = true
    ) => {
        const terms = [
            formatTerm(q, "x^2", true),
            formatTerm(l, "x"),
            k === 0 ? "" : `${k > 0 ? "+" : "-"}${formatNumber(Math.abs(k))}`,
        ].filter(Boolean);

        const expression = terms.length === 0 ? "0" : terms.join("");
        return yPrefix ? `y=${expression}` : expression;
    };

    const rightQ = a;
    const rightL = b;
    const rightC = c;

    const leftQ = 1 + a;
    const leftL = -1 + b;
    const leftC = -6 + c;

    const leftEquation = formatPolynomial(leftQ, leftL, leftC, false);
    const rightEquation = formatPolynomial(rightQ, rightL, rightC, false);

    const leftFunction = (x: number) => leftQ * x * x + leftL * x + leftC;
    const rightFunction = (x: number) => rightQ * x * x + rightL * x + rightC;

    const makePath = (fn: (x: number) => number) => {
        const points: string[] = [];

        for (let x = xMin; x <= xMax; x += step) {
            const y = fn(x);
            if (Number.isFinite(y)) {
                points.push(`${toSvgX(x)},${toSvgY(y)}`);
            }
        }

        return points.join(" ");
    };

    const leftPath = useMemo(() => makePath(leftFunction), [a, b, c]);
    const rightPath = useMemo(() => makePath(rightFunction), [a, b, c]);

    const xRoot1 = -2;
    const xRoot2 = 3;

    const point1Y = rightFunction(xRoot1);
    const point2Y = rightFunction(xRoot2);

    const reset = () => {
        setA(0);
        setB(0);
        setC(0);
    };

    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                슬라이더를 움직이면 방정식과 두 함수의 그래프가 함께 변합니다.
                하지만 교점의 <InlineMath math="x" />좌표는 변하지 않습니다.
            </p>

            <div className="mb-5 rounded-xl border border-white/15 bg-white/5 p-4">
                <h4 className="mb-3 font-bold text-white">방정식</h4>

                <p className="text-center text-2xl text-white">
                    <InlineMath math={`${leftEquation}=${rightEquation}`} />
                </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <h4 className="mb-3 font-bold text-red-300">좌변 함수</h4>
                    <p className="text-center text-lg text-white">
                        <InlineMath math={formatPolynomial(leftQ, leftL, leftC)} />
                    </p>
                </div>

                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                    <h4 className="mb-3 font-bold text-green-300">우변 함수</h4>
                    <p className="text-center text-lg text-white">
                        <InlineMath math={formatPolynomial(rightQ, rightL, rightC)} />
                    </p>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
                <div className="space-y-4">

                    <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-4 font-bold text-white">우변 함수 조절</h4>

                        <div className="space-y-5">
                            <SliderRow
                                label="a"
                                value={a}
                                min={-2}
                                max={2}
                                step={0.1}
                                color="text-blue-300"
                                description="이차항 조절"
                                onChange={setA}
                            />

                            <SliderRow
                                label="b"
                                value={b}
                                min={-3}
                                max={3}
                                step={0.1}
                                color="text-green-300"
                                description="일차항 조절"
                                onChange={setB}
                            />

                            <SliderRow
                                label="c"
                                value={c}
                                min={-3}
                                max={3}
                                step={0.1}
                                color="text-purple-300"
                                description="상수항 조절"
                                onChange={setC}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={reset}
                            className="mt-5 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                        >
                            초기화
                        </button>
                    </div>

                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <h4 className="mb-3 font-bold text-yellow-300">교점의 x좌표</h4>

                        <p className="text-center text-xl text-white">
                            <InlineMath math="x=-2,\quad x=3" />
                        </p>

                        <p className="mt-3 leading-7 text-gray-300">
                            슬라이더를 움직이면 교점의 <InlineMath math="y" />좌표는
                            변하지만, <br /><InlineMath math="x" />좌표는 변하지 않습니다.
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <svg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className="mx-auto rounded-xl bg-black/30"
                    >
                        {Array.from({ length: 13 }, (_, i) => {
                            const x = i - 6;
                            return (
                                <line
                                    key={`v-${x}`}
                                    x1={toSvgX(x)}
                                    y1={0}
                                    x2={toSvgX(x)}
                                    y2={height}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        {Array.from({ length: 11 }, (_, i) => {
                            const y = i - 5;
                            return (
                                <line
                                    key={`h-${y}`}
                                    x1={0}
                                    y1={toSvgY(y)}
                                    x2={width}
                                    y2={toSvgY(y)}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        <line
                            x1={toSvgX(-8)}
                            y1={originY}
                            x2={toSvgX(8)}
                            y2={originY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(8)}
                            x2={originX}
                            y2={toSvgY(-8)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <text
                            x={width - 198}
                            y={originY - 8}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            x
                        </text>

                        <text
                            x={originX + 8}
                            y={28}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            y
                        </text>

                        <polyline
                            points={leftPath}
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <polyline
                            points={rightPath}
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <IntersectionPoint
                            x={toSvgX(xRoot1)}
                            y={toSvgY(point1Y)}
                            label={`x=-2`}
                        />

                        <IntersectionPoint
                            x={toSvgX(xRoot2)}
                            y={toSvgY(point2Y)}
                            label={`x=3`}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

function EquationFunctionRelationExplorer2() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    const width = 520;
    const height = 420;
    const scale = 22;
    const originX = width / 2 - 100;
    const originY = height / 2;

    const xMin = -6;
    const xMax = 6;
    const step = 0.05;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const formatTerm = (coef: number, variable: string, isFirst = false) => {
        if (coef === 0) return "";

        const sign = coef > 0 ? (isFirst ? "" : "+") : "-";
        const abs = Math.abs(coef);

        if (abs === 1 && variable) return `${sign}${variable}`;
        return `${sign}${formatNumber(abs)}${variable}`;
    };

    const formatPolynomial = (
        q: number,
        l: number,
        k: number,
        yPrefix = true
    ) => {
        const terms = [
            formatTerm(q, "x^2", true),
            formatTerm(l, "x"),
            k === 0 ? "" : `${k > 0 ? "+" : "-"}${formatNumber(Math.abs(k))}`,
        ].filter(Boolean);

        const expression = terms.length === 0 ? "0" : terms.join("");
        return yPrefix ? `y=${expression}` : expression;
    };

    const rightQ = a;
    const rightL = b;
    const rightC = c;

    const leftQ = 1 + a;
    const leftL = -4 + b;
    const leftC = 4 + c;

    const leftEquation = formatPolynomial(leftQ, leftL, leftC, false);
    const rightEquation = formatPolynomial(rightQ, rightL, rightC, false);

    const leftFunction = (x: number) => leftQ * x * x + leftL * x + leftC;
    const rightFunction = (x: number) => rightQ * x * x + rightL * x + rightC;

    const makePath = (fn: (x: number) => number) => {
        const points: string[] = [];

        for (let x = xMin; x <= xMax; x += step) {
            const y = fn(x);
            if (Number.isFinite(y)) {
                points.push(`${toSvgX(x)},${toSvgY(y)}`);
            }
        }

        return points.join(" ");
    };

    const leftPath = useMemo(() => makePath(leftFunction), [a, b, c]);
    const rightPath = useMemo(() => makePath(rightFunction), [a, b, c]);

    const xRoot1 = 2;

    const point1Y = rightFunction(xRoot1);

    const reset = () => {
        setA(0);
        setB(0);
        setC(0);
    };

    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                슬라이더를 움직이면 방정식과 두 함수의 그래프가 함께 변합니다.
                하지만 교점의 <InlineMath math="x" />좌표는 변하지 않습니다.
            </p>

            <div className="mb-5 rounded-xl border border-white/15 bg-white/5 p-4">
                <h4 className="mb-3 font-bold text-white">방정식</h4>

                <p className="text-center text-2xl text-white">
                    <InlineMath math={`${leftEquation}=${rightEquation}`} />
                </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4">
                    <h4 className="mb-3 font-bold text-red-300">좌변 함수</h4>
                    <p className="text-center text-lg text-white">
                        <InlineMath math={formatPolynomial(leftQ, leftL, leftC)} />
                    </p>
                </div>

                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                    <h4 className="mb-3 font-bold text-green-300">우변 함수</h4>
                    <p className="text-center text-lg text-white">
                        <InlineMath math={formatPolynomial(rightQ, rightL, rightC)} />
                    </p>
                </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
                <div className="space-y-4">

                    <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-4">
                        <h4 className="mb-4 font-bold text-white">우변 함수 조절</h4>

                        <div className="space-y-5">
                            <SliderRow
                                label="a"
                                value={a}
                                min={-2}
                                max={2}
                                step={0.1}
                                color="text-blue-300"
                                description="이차항 조절"
                                onChange={setA}
                            />

                            <SliderRow
                                label="b"
                                value={b}
                                min={-3}
                                max={3}
                                step={0.1}
                                color="text-green-300"
                                description="일차항 조절"
                                onChange={setB}
                            />

                            <SliderRow
                                label="c"
                                value={c}
                                min={-6}
                                max={3}
                                step={0.1}
                                color="text-purple-300"
                                description="상수항 조절"
                                onChange={setC}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={reset}
                            className="mt-5 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                        >
                            초기화
                        </button>
                    </div>

                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                        <h4 className="mb-3 font-bold text-yellow-300">교점의 x좌표</h4>

                        <p className="text-center text-xl text-white">
                            <InlineMath math="x=2" /> (중근)
                        </p>

                        <p className="mt-3 leading-7 text-gray-300">
                            슬라이더를 움직이면 교점의 <InlineMath math="y" />좌표는 변하지만,
                            <br />
                            <InlineMath math="x" />좌표는 변하지 않습니다.
                        </p>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <svg
                        width={width}
                        height={height}
                        viewBox={`0 0 ${width} ${height}`}
                        className="mx-auto rounded-xl bg-black/30"
                    >
                        {Array.from({ length: 13 }, (_, i) => {
                            const x = i - 6;
                            return (
                                <line
                                    key={`v-${x}`}
                                    x1={toSvgX(x)}
                                    y1={0}
                                    x2={toSvgX(x)}
                                    y2={height}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        {Array.from({ length: 11 }, (_, i) => {
                            const y = i - 5;
                            return (
                                <line
                                    key={`h-${y}`}
                                    x1={0}
                                    y1={toSvgY(y)}
                                    x2={width}
                                    y2={toSvgY(y)}
                                    stroke="rgba(255,255,255,0.08)"
                                />
                            );
                        })}

                        <line
                            x1={toSvgX(-8)}
                            y1={originY}
                            x2={toSvgX(8)}
                            y2={originY}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <line
                            x1={originX}
                            y1={toSvgY(8)}
                            x2={originX}
                            y2={toSvgY(-8)}
                            stroke="rgba(255,255,255,0.65)"
                            strokeWidth="2"
                        />

                        <text
                            x={width - 198}
                            y={originY - 8}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            x
                        </text>

                        <text
                            x={originX + 8}
                            y={28}
                            fill="white"
                            fontSize="20"
                            fontFamily="Times New Roman"
                            fontStyle="italic"
                        >
                            y
                        </text>

                        <polyline
                            points={leftPath}
                            fill="none"
                            stroke="#ef4444"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <polyline
                            points={rightPath}
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        <IntersectionPoint
                            x={toSvgX(xRoot1)}
                            y={toSvgY(point1Y)}
                            label={`x=2`}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

function IntersectionPoint({
    x,
    y,
    label,
}: {
    x: number;
    y: number;
    label: string;
}) {
    return (
        <>
            <circle cx={x} cy={y} r="6" fill="#facc15" />

            <text
                x={x + 8}
                y={y - 8}
                fill="#facc15"
                fontSize="15"
                fontFamily="Times New Roman"
                fontStyle="italic"
            >
                {label}
            </text>
        </>
    );
};

type AbsMode = "absX" | "absY" | "absXY" | "absFx";
type AbsStep = "original" | "domain" | "reflected";

function AbsoluteValueGraphExplorer() {
    const [a, setA] = useState(0.35);
    const [b, setB] = useState(-0.8);
    const [c, setC] = useState(-1.2);

    const [mode, setMode] = useState<AbsMode>("absX");
    const [step, setStep] = useState<AbsStep>("original");

    const width = 360;
    const height = 360;
    const scale = 28;
    const originX = width / 2;
    const originY = height / 2;

    const xMin = -5;
    const xMax = 5;
    const stepSize = 0.05;

    const toSvgX = (x: number) => originX + x * scale;
    const toSvgY = (y: number) => originY - y * scale;

    const f = (x: number) => a * x * x + b * x + c;

    const formatNumber = (n: number) => {
        if (Object.is(n, -0)) return "0";
        if (Number.isInteger(n)) return String(n);
        return n.toFixed(1);
    };

    const equation = `y=${formatNumber(a)}x^2${b >= 0 ? "+" : ""}${formatNumber(
        b
    )}x${c >= 0 ? "+" : ""}${formatNumber(c)}`;

    const makePath = (points: { x: number; y: number }[]) =>
        points.map((p) => `${toSvgX(p.x)},${toSvgY(p.y)}`).join(" ");

    const splitByCondition = (
        points: { x: number; y: number }[],
        condition: (p: { x: number; y: number }) => boolean
    ) => {
        const segments: { x: number; y: number }[][] = [];
        let current: { x: number; y: number }[] = [];

        points.forEach((p) => {
            if (condition(p)) {
                current.push(p);
            } else {
                if (current.length > 1) {
                    segments.push(current);
                }
                current = [];
            }
        });

        if (current.length > 1) {
            segments.push(current);
        }

        return segments;
    };

    const basePoints = useMemo(() => {
        const points: { x: number; y: number }[] = [];

        for (let x = xMin; x <= xMax; x += stepSize) {
            points.push({ x, y: f(x) });
        }

        return points;
    }, [a, b, c]);

    const positiveXPoints = basePoints.filter((p) => p.x >= 0);

    const positiveYSegments = splitByCondition(basePoints, (p) => p.y >= 0);
    const negativeYSegments = splitByCondition(basePoints, (p) => p.y < 0);
    const positiveXYSegments = splitByCondition(
        basePoints,
        (p) => p.x >= 0 && p.y >= 0
    );

    const reflectedYAxis = positiveXPoints.map((p) => ({
        x: -p.x,
        y: p.y,
    }));

    const selectMode = (nextMode: AbsMode) => {
        setMode(nextMode);
        setStep("original");
    };

    const modeTitle = {
        absX: "y=f(|x|)",
        absY: "|y|=f(x)",
        absXY: "|y|=f(|x|)",
        absFx: "y=|f(x)|",
    }[mode];

    const drawSegments = (
        segments: { x: number; y: number }[][],
        keyPrefix: string,
        options?: {
            dashed?: boolean;
            opacity?: string;
        }
    ) =>
        segments.map((segment, index) => (
            <polyline
                key={`${keyPrefix}-${index}`}
                points={makePath(segment)}
                fill="none"
                stroke={options?.opacity ?? "#60a5fa"}
                strokeWidth={options?.dashed ? "3" : "4"}
                strokeDasharray={options?.dashed ? "7 7" : undefined}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ));

    const reflectXAxis = (segment: { x: number; y: number }[]) =>
        segment.map((p) => ({
            x: p.x,
            y: -p.y,
        }));

    const reflectYAxis = (segment: { x: number; y: number }[]) =>
        segment.map((p) => ({
            x: -p.x,
            y: p.y,
        }));

    const reflectBoth = (segment: { x: number; y: number }[]) =>
        segment.map((p) => ({
            x: -p.x,
            y: -p.y,
        }));

    return (
        <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
            <h3 className="mb-4 text-xl font-bold text-blue-300">
                직접 움직여 보기
            </h3>

            <p className="mb-5 leading-8 text-gray-300">
                계수를 바꾸어 원형 함수 <InlineMath math="y=f(x)" />를 만들고,
                절댓값 기호가 그래프를 어떻게 바꾸는지 확인합니다.
            </p>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-white/15 bg-white/5 p-4">
                    <h4 className="mb-4 font-bold text-white">원형 함수</h4>

                    <div className="mb-4 rounded-xl bg-black/30 p-3 text-center text-white">
                        <InlineMath math={equation} />
                    </div>

                    <div className="overflow-hidden">
                        <svg
                            viewBox={`0 0 ${width} ${height}`}
                            className="block h-auto w-full rounded-xl bg-black/30"
                        >
                            {Array.from({ length: 11 }, (_, i) => {
                                const x = i - 5;
                                return (
                                    <line
                                        key={`v-${x}`}
                                        x1={toSvgX(x)}
                                        y1={0}
                                        x2={toSvgX(x)}
                                        y2={height}
                                        stroke="rgba(255,255,255,0.08)"
                                    />
                                );
                            })}

                            {Array.from({ length: 11 }, (_, i) => {
                                const y = i - 5;
                                return (
                                    <line
                                        key={`h-${y}`}
                                        x1={0}
                                        y1={toSvgY(y)}
                                        x2={width}
                                        y2={toSvgY(y)}
                                        stroke="rgba(255,255,255,0.08)"
                                    />
                                );
                            })}

                            <line
                                x1={0}
                                y1={originY}
                                x2={width}
                                y2={originY}
                                stroke="rgba(255,255,255,0.65)"
                                strokeWidth="2"
                            />

                            <line
                                x1={originX}
                                y1={0}
                                x2={originX}
                                y2={height}
                                stroke="rgba(255,255,255,0.65)"
                                strokeWidth="2"
                            />

                            {step === "original" && (
                                <polyline
                                    points={makePath(basePoints)}
                                    fill="none"
                                    stroke="#60a5fa"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            )}

                            {mode === "absX" && step !== "original" && (
                                <>
                                    <polyline
                                        points={makePath(positiveXPoints)}
                                        fill="none"
                                        stroke="#60a5fa"
                                        strokeWidth="4"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />

                                    {step === "reflected" && (
                                        <polyline
                                            points={makePath(reflectedYAxis)}
                                            fill="none"
                                            stroke="#60a5fa"
                                            strokeWidth="4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    )}
                                </>
                            )}

                            {mode === "absY" && step !== "original" && (
                                <>
                                    {drawSegments(positiveYSegments, "absY-positive")}

                                    {step === "reflected" &&
                                        positiveYSegments.map((segment, index) => (
                                            <polyline
                                                key={`absY-reflected-${index}`}
                                                points={makePath(reflectXAxis(segment))}
                                                fill="none"
                                                stroke="#60a5fa"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        ))}
                                </>
                            )}

                            {mode === "absXY" && step !== "original" && (
                                <>
                                    {drawSegments(positiveXYSegments, "absXY-positive")}

                                    {step === "reflected" &&
                                        positiveXYSegments.map((segment, index) => (
                                            <g key={`absXY-reflected-${index}`}>
                                                <polyline
                                                    points={makePath(reflectXAxis(segment))}
                                                    fill="none"
                                                    stroke="#60a5fa"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />

                                                <polyline
                                                    points={makePath(reflectYAxis(segment))}
                                                    fill="none"
                                                    stroke="#60a5fa"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />

                                                <polyline
                                                    points={makePath(reflectBoth(segment))}
                                                    fill="none"
                                                    stroke="#60a5fa"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                        ))}
                                </>
                            )}

                            {mode === "absFx" && step !== "original" && (
                                <>
                                    {drawSegments(positiveYSegments, "absFx-positive")}

                                    {drawSegments(negativeYSegments, "absFx-negative", {
                                        dashed: true,
                                        opacity: "rgba(255,255,255,0.45)",
                                    })}

                                    {step === "reflected" &&
                                        negativeYSegments.map((segment, index) => (
                                            <polyline
                                                key={`absFx-reflected-${index}`}
                                                points={makePath(reflectXAxis(segment))}
                                                fill="none"
                                                stroke="#60a5fa"
                                                strokeWidth="4"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        ))}
                                </>
                            )}
                        </svg>
                    </div>

                    <div className="mt-5 space-y-4">
                        <SliderRow
                            label="a"
                            value={a}
                            min={-1}
                            max={1}
                            step={0.05}
                            color="text-blue-300"
                            description="이차항 계수"
                            onChange={setA}
                        />

                        <SliderRow
                            label="b"
                            value={b}
                            min={-4}
                            max={4}
                            step={0.1}
                            color="text-green-300"
                            description="일차항 계수"
                            onChange={setB}
                        />

                        <SliderRow
                            label="c"
                            value={c}
                            min={-4}
                            max={4}
                            step={0.1}
                            color="text-purple-300"
                            description="상수항"
                            onChange={setC}
                        />
                    </div>
                </div>

                <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                    <h4 className="mb-4 font-bold text-white">변환 선택</h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {[
                            ["absX", "y=f(|x|)"],
                            ["absY", "|y|=f(x)"],
                            ["absXY", "|y|=f(|x|)"],
                            ["absFx", "y=|f(x)|"],
                        ].map(([key, label]) => (
                            <button
                                key={key}
                                type="button"
                                onClick={() => selectMode(key as AbsMode)}
                                className={`rounded-lg border px-3 py-2 text-sm ${mode === key
                                    ? "border-blue-400 bg-blue-500/20 text-blue-200"
                                    : "border-white/15 text-gray-300 hover:bg-white/10"
                                    }`}
                            >
                                <InlineMath math={label} />
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <h4 className="mb-3 text-lg font-bold text-blue-300">
                            현재 변환 : <InlineMath math={modeTitle} />
                        </h4>

                        {mode === "absX" && (
                            <>
                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="|x|=x" />가 되는 동치영역은{" "}
                                    <InlineMath math="x\ge0" />입니다.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStep("domain")}
                                    className="mt-4 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                                >
                                    동치영역만 보기
                                </button>

                                {step !== "original" && (
                                    <>
                                        <p className="mt-5 leading-8 text-gray-300">
                                            남은 그래프를 <InlineMath math="y" />축에 대칭하여
                                            그래프를 완성합니다.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setStep("reflected")}
                                            className="mt-4 rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20"
                                        >
                                            대칭 추가
                                        </button>
                                    </>
                                )}
                            </>
                        )}

                        {mode === "absY" && (
                            <>
                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="|y|=y" />가 되는 동치영역은{" "}
                                    <InlineMath math="y\ge0" />입니다.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStep("domain")}
                                    className="mt-4 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                                >
                                    동치영역만 보기
                                </button>

                                {step !== "original" && (
                                    <>
                                        <p className="mt-5 leading-8 text-gray-300">
                                            남은 그래프를 <InlineMath math="x" />축에 대칭하여
                                            그래프를 완성합니다.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setStep("reflected")}
                                            className="mt-4 rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20"
                                        >
                                            대칭 추가
                                        </button>
                                    </>
                                )}
                            </>
                        )}

                        {mode === "absXY" && (
                            <>
                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="|x|=x" />, <InlineMath math="|y|=y" />가
                                    되는 동치영역은 <InlineMath math="x\ge0,\ y\ge0" />입니다.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStep("domain")}
                                    className="mt-4 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                                >
                                    동치영역만 보기
                                </button>

                                {step !== "original" && (
                                    <>
                                        <p className="mt-5 leading-8 text-gray-300">
                                            먼저 <InlineMath math="x" />축 대칭을 추가하고, 다시{" "}
                                            <InlineMath math="y" />축 대칭을 추가합니다.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setStep("reflected")}
                                            className="mt-4 rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20"
                                        >
                                            대칭 추가
                                        </button>
                                    </>
                                )}
                            </>
                        )}

                        {mode === "absFx" && (
                            <>
                                <p className="leading-8 text-gray-300">
                                    먼저 <InlineMath math="y=f(x)" />를 그립니다. 그다음{" "}
                                    <InlineMath math="x" />축 아래의 그래프를{" "}
                                    <InlineMath math="x" />축에 대칭하여 위로 올립니다.
                                </p>

                                <button
                                    type="button"
                                    onClick={() => setStep("domain")}
                                    className="mt-4 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-200 hover:bg-white/10"
                                >
                                    아래쪽 그래프 표시
                                </button>

                                {step !== "original" && (
                                    <>
                                        <p className="mt-5 leading-8 text-gray-300">
                                            점선 부분은 원래 <InlineMath math="x" />축 아래에 있던
                                            그래프입니다.
                                        </p>

                                        <button
                                            type="button"
                                            onClick={() => setStep("reflected")}
                                            className="mt-4 rounded-lg border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-200 hover:bg-blue-500/20"
                                        >
                                            x축 대칭
                                        </button>
                                    </>
                                )}
                            </>
                        )}

                        <button
                            type="button"
                            onClick={() => setStep("original")}
                            className="mt-5 rounded-lg border border-white/20 px-4 py-2 text-sm text-gray-300 hover:bg-white/10"
                        >
                            원형 그래프로 돌아가기
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

function ParallelTangentAreaExplorer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [k, setK] = useState(0);
    const rafRef = useRef<number | null>(null);

    const minX = -1.6;
    const maxX = 2.6;
    const minY = -1.4;
    const maxY = 4.8;

    const width = 540;
    const height = 540;
    const pad = 44;

    const sx = (x: number) =>
        pad + ((x - minX) / (maxX - minX)) * (width - pad * 2);

    const sy = (y: number) =>
        height - pad - ((y - minY) / (maxY - minY)) * (height - pad * 2);

    const parabolaPath = useMemo(() => {
        const points: string[] = [];
        for (let i = 0; i <= 180; i++) {
            const x = minX + (maxX - minX) * (i / 180);
            const y = x * x;
            points.push(`${i === 0 ? "M" : "L"} ${sx(x)} ${sy(y)}`);
        }
        return points.join(" ");
    }, []);

    const linePath = (intercept: number) => {
        const x1 = minX;
        const x2 = maxX;
        return `M ${sx(x1)} ${sy(2 * x1 + intercept)} L ${sx(x2)} ${sy(2 * x2 + intercept)}`;
    };

    const O = { x: 0, y: 0 };
    const A = { x: 2, y: 4 };
    const P = { x: 1, y: 1 };

    const isDone = k <= -1;

    const startAnimation = () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        setK(0);
        setIsPlaying(true);

        const duration = 2600;
        const start = performance.now();

        const animate = (now: number) => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            const nextK = -eased;

            setK(nextK);

            if (t < 1) {
                rafRef.current = requestAnimationFrame(animate);
            } else {
                setK(-1);
                setIsPlaying(false);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <div className="rounded-xl border border-blue-500/30 bg-black/30 p-5">
            <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h4 className="text-xl font-bold text-blue-300">
                        왜 접할 때 넓이가 최대일까?
                    </h4>

                    <p className="mt-2 leading-7 text-gray-300">
                        <InlineMath math="OA" />와 평행한 직선{" "}
                        <InlineMath math="y=2x+k" />를 이동시켜 보겠습니다.
                    </p>
                </div>

                <button
                    type="button"
                    onClick={startAnimation}
                    className="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-500"
                >
                    애니메이션으로 확인하기
                </button>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-xl bg-white p-3">
                    <svg
                        viewBox={`0 0 ${width} ${height}`}
                        className="h-auto w-full"
                    >
                        {/* grid */}
                        {Array.from({ length: 9 }).map((_, i) => {
                            const x = -1.5 + i * 0.5;
                            return (
                                <line
                                    key={`vx-${i}`}
                                    x1={sx(x)}
                                    y1={sy(minY)}
                                    x2={sx(x)}
                                    y2={sy(maxY)}
                                    stroke="#e5e7eb"
                                    strokeWidth="1"
                                />
                            );
                        })}

                        {Array.from({ length: 13 }).map((_, i) => {
                            const y = -1 + i * 0.5;
                            return (
                                <line
                                    key={`hy-${i}`}
                                    x1={sx(minX)}
                                    y1={sy(y)}
                                    x2={sx(maxX)}
                                    y2={sy(y)}
                                    stroke="#e5e7eb"
                                    strokeWidth="1"
                                />
                            );
                        })}

                        {/* axes */}
                        <line x1={sx(minX)} y1={sy(0)} x2={sx(maxX)} y2={sy(0)} stroke="#111" strokeWidth="2" />
                        <line x1={sx(0)} y1={sy(minY)} x2={sx(0)} y2={sy(maxY)} stroke="#111" strokeWidth="2" />

                        {/* parabola */}
                        <path d={parabolaPath} fill="none" stroke="#dc2626" strokeWidth="4" />

                        {/* OA line y=2x */}
                        <path d={linePath(0)} fill="none" stroke="#2563eb" strokeWidth="3" />

                        {/* moving parallel line */}
                        <path d={linePath(k)} fill="none" stroke="#16a34a" strokeWidth="4" />

                        {/* triangle after tangency */}
                        {isDone && (
                            <>
                                <polygon
                                    points={`${sx(O.x)},${sy(O.y)} ${sx(P.x)},${sy(P.y)} ${sx(A.x)},${sy(A.y)}`}
                                    fill="rgba(239,68,68,0.18)"
                                    stroke="none"
                                />

                                <line x1={sx(O.x)} y1={sy(O.y)} x2={sx(P.x)} y2={sy(P.y)} stroke="#111" strokeWidth="4" />
                                <line x1={sx(P.x)} y1={sy(P.y)} x2={sx(A.x)} y2={sy(A.y)} stroke="#111" strokeWidth="4" />
                                <line x1={sx(O.x)} y1={sy(O.y)} x2={sx(A.x)} y2={sy(A.y)} stroke="#2563eb" strokeWidth="3" />
                            </>
                        )}

                        {/* points */}
                        <circle cx={sx(O.x)} cy={sy(O.y)} r="7" fill="#111" />
                        <circle cx={sx(A.x)} cy={sy(A.y)} r="7" fill="#dc2626" />

                        {isDone && (
                            <circle cx={sx(P.x)} cy={sy(P.y)} r="7" fill="#16a34a" />
                        )}

                        {/* labels */}
                        <text x={sx(O.x) - 32} y={sy(O.y) + 30} fontSize="22" fill="#111">
                            O(0,0)
                        </text>

                        <text x={sx(A.x) + 10} y={sy(A.y) - 8} fontSize="22" fill="#dc2626">
                            A(2,4)
                        </text>

                        {isDone && (
                            <text x={sx(P.x) + 10} y={sy(P.y) + 4} fontSize="22" fill="#16a34a">
                                P(1,1)
                            </text>
                        )}

                        <text x={sx(1.55)} y={sy(3.3)} fontSize="22" fontStyle="italic" fill="#2563eb">
                            y=2x
                        </text>

                        <text x={sx(1.35)} y={sy(2 * 1.35 + k - 0.2)} fontSize="22" fontStyle="italic" fill="#16a34a">
                            {isDone ? "y=2x-1" : "y=2x+k"}
                        </text>

                        <text x={sx(1.45)} y={sy(4.55)} fontSize="22" fontStyle="italic" fill="#dc2626">
                            y=x²
                        </text>
                    </svg>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="font-bold text-white">
                        현재 평행이동된 직선
                    </p>

                    <div className="mt-4 rounded-lg bg-black/30 p-4 text-center text-xl">
                        <InlineMath math={`y=2x${k === 0 ? "" : k < 0 ? `${k.toFixed(2)}` : `+${k.toFixed(2)}`}`} />
                    </div>

                    <div className="mt-5 space-y-3 leading-8 text-gray-300">
                        <p>
                            <InlineMath math="k" />가 <InlineMath math="0" />에서 <InlineMath math="-1" />까지 변하면서,
                            직선이 <InlineMath math="OA" />와 평행하게 이동합니다.
                        </p>

                        <p>
                            <InlineMath math="k=-1" />일 때 <InlineMath math="y=2x-1" />은<br />
                            포물선 <InlineMath math="y=x^2" />에 접합니다.
                        </p>

                        <p>
                            이때 접점은 <InlineMath math="P(1,1)" />이고, <InlineMath math="OP" />, <InlineMath math="PA" />를 연결하면
                            삼각형 <InlineMath math="OAP" />의 넓이가 최대가 됩니다.
                        </p>
                    </div>

                    {isDone && (
                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4 text-center">
                            <p className="font-bold text-green-300">
                                넓이가 최대가 되는 순간
                            </p>
                            <div className="mt-2 text-2xl">
                                <InlineMath math="t=1" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function QuadraticEquationAndFunctionPage() {
    return (
        <>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.21 좌표평면과 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면은 평면 위의 점의 위치를 두 개의 수로 나타내기 위한 도구입니다.
                    오늘날 우리가 사용하는 좌표평면은 약 400년 전 프랑스의 수학자
                    르네 데카르트가 고안한 것으로 알려져 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold"><InlineMath math="x" />축과 <InlineMath math="y" />축</h3>

                    <p className="leading-8 text-gray-300">
                        <strong><InlineMath math="x" />축</strong>은 <InlineMath math="y" />좌표가 <InlineMath math="0" />인 점들을
                        연결한 가로선입니다.
                    </p>

                    <BlockMath math="x\text{축}: y=0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        <strong><InlineMath math="y" />축</strong>은 <InlineMath math="x" />좌표가 <InlineMath math="0" />인 점들을
                        연결한 세로선입니다.
                    </p>

                    <BlockMath math="y\text{축}: x=0" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">원점</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />축과 <InlineMath math="y" />축이 만나는 점을 <strong>원점</strong>이라고 합니다.
                    </p>

                    <BlockMath math="x=0,\qquad y=0" />

                    <p className="leading-8 text-gray-300">
                        따라서 원점의 좌표는
                    </p>

                    <BlockMath math="(0,0)" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">가로선과 세로선</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="y=3" />은 <InlineMath math="y" />좌표가 항상 <InlineMath math="3" />인 점들을 연결한 선입니다.
                        따라서 가로선입니다.
                    </p>

                    <BlockMath math="y=3" />

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="x=2" />는 <InlineMath math="x" />좌표가 항상 <InlineMath math="2" />인 점들을 연결한 선입니다.
                        따라서 세로선입니다.
                    </p>

                    <BlockMath math="x=2" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">교점과 점의 좌표</h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x=2" />와 <InlineMath math="y=3" />이 만나는 점은
                        두 조건을 동시에 만족하는 점입니다.
                    </p>

                    <BlockMath math="x=2,\qquad y=3" />

                    <p className="leading-8 text-gray-300">
                        따라서 그 점의 좌표는
                    </p>

                    <BlockMath math="(2,3)" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="text-center text-lg font-semibold text-yellow-300">
                            좌표는 점의 주소입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="(2,3)" />은 <InlineMath math="(2,0)" />과 <InlineMath math="(0,3)" />의
                        두 점을 뜻하는 것이 아닙니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="(2,3)" />은 <InlineMath math="x=2" />와 <InlineMath math="y=3" />을
                        동시에 만족하는 하나의 점입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">그래프</h3>

                    <p className="leading-8 text-gray-300">
                        어떤 식을 만족하는 점들을 좌표평면 위에 모두 나타낸 것을
                        <strong> 그래프</strong>라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <p className="leading-8 text-gray-300">
                            그래프는 단순히 그림을 그리는 것이 아니라,
                            <strong> 식을 만족하는 모든 점을 모아 놓은 것</strong>입니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.22 일차함수 <InlineMath math="y=ax+b" />의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    일차함수 <InlineMath math="y=ax+b" />의 그래프는 직선입니다.
                    이 직선의 모양과 위치는 두 수 <InlineMath math="a" />, <InlineMath math="b" />에 의해 결정됩니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="b" /> : <InlineMath math="y" />절편
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x=0" />을 대입하면
                    </p>

                    <BlockMath math="y=a\cdot0+b=b" />

                    <p className="leading-8 text-gray-300">
                        이므로 그래프는 항상 <InlineMath math="(0,b)" />를 지납니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        즉, <InlineMath math="b" />는 그래프가 <InlineMath math="y" />축과 만나는 점의 <InlineMath math="y" />좌표입니다.
                        이를 <strong><InlineMath math="y" />절편</strong>이라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="a" /> : 기울기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이제 <InlineMath math="x=1" />을 대입하면
                    </p>

                    <BlockMath math="y=a\cdot1+b=a+b" />

                    <p className="leading-8 text-gray-300">
                        이므로 그래프는 <InlineMath math="(1,a+b)" />도 지납니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 <InlineMath math="x" />가 오른쪽으로 <InlineMath math="1" />칸 움직일 때, <InlineMath math="y" />는
                    </p>

                    <BlockMath math="(a+b)-b=a" />

                    <p className="leading-8 text-gray-300">
                        만큼 움직입니다.
                        이 <InlineMath math="a" />를 <strong>기울기</strong>라고 합니다.
                    </p>
                </div>

                <LinearFunctionSlider />

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        기울기에 따른 그래프의 방향
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p>
                            <InlineMath math="a>0" /> :
                            오른쪽 위로 향하는 직선
                        </p>

                        <p>
                            <InlineMath math="a=0" /> :
                            가로선
                        </p>

                        <p>
                            <InlineMath math="a<0" /> :
                            오른쪽 아래로 향하는 직선
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        y절편에 따른 그래프의 위치
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p>
                            <InlineMath math="b>0" /> : <InlineMath math="y" />축과의 교점이 <InlineMath math="x" />축 위에 있음
                        </p>

                        <p>
                            <InlineMath math="b=0" /> :
                            원점을 지남
                        </p>

                        <p>
                            <InlineMath math="b<0" /> : <InlineMath math="y" />축과의 교점이 <InlineMath math="x" />축 아래에 있음
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            <InlineMath math="b" /> :
                            그래프가 <InlineMath math="y" />축과 만나는 점의 <InlineMath math="y" />좌표
                        </p>

                        <p>
                            <InlineMath math="a" /> : <InlineMath math="x" />가 오른쪽으로 <InlineMath math="1" />칸 움직일 때, <InlineMath math="y" />가 움직이는 양
                        </p>
                    </div>

                    <div className="mt-5 rounded-lg bg-black/30 p-4 text-gray-300">
                        <p className="text-center">
                            <InlineMath math="x=0" />에서 <InlineMath math="(0,b)" />를 찾고, <InlineMath math="x=1" />에서 <InlineMath math="(1,a+b)" />를 찾으면
                            직선을 그릴 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.23 모든 직선은 정점을 지난다
                </h2>

                <p className="leading-8 text-gray-300">
                    직선은 기울기와 한 점이 정해지면 하나로 결정됩니다.
                    <br />
                    이번에는 <InlineMath math="y=m(x-a)+b" />의 의미를 해석해 보겠습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        식의 의미
                    </h3>

                    <BlockMath math="y=m(x-a)+b" />

                    <p className="leading-8 text-gray-300">
                        일차항의 계수가 <InlineMath math="m" />이므로,
                        <InlineMath math="m" />은 직선의 기울기를 나타냅니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        또한 <InlineMath math="x=a" />를 대입하면
                    </p>

                    <BlockMath math="y=m(a-a)+b=b" />

                    <p className="leading-8 text-gray-300">
                        이므로, 이 직선은 항상 점 <InlineMath math="(a,b)" />를 지납니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <p className="text-lg font-bold text-blue-300">
                            결론
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="y=m(x-a)+b" />는 기울기가 <InlineMath math="m" />이고, 점 <InlineMath math="(a,b)" />를 지나는 직선입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        여러 가지 예
                    </h3>

                    <div className="space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <BlockMath math="y=3(x-3)+5" />
                            <p className="leading-8 text-gray-300">
                                기울기는 <InlineMath math="3" />이고,
                                점 <InlineMath math="(3,5)" />를 지나는 직선입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <BlockMath math="y=m(x+1)-3" />
                            <p className="leading-8 text-gray-300">
                                기울기는 <InlineMath math="m" />이고,
                                점 <InlineMath math="(-1,-3)" />을 지나는 직선입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <BlockMath math="y=(p+1)(x-2)+q+3" />
                            <p className="leading-8 text-gray-300">
                                기울기는 <InlineMath math="p+1" />이고,
                                점 <InlineMath math="(2,q+3)" />을 지나는 직선입니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-green-300">
                        직선의 방정식 작성
                    </h3>

                    <p className="leading-8 text-gray-300">
                        기울기와 지나는 점이 주어지면 다음 형태를 이용할 수 있습니다.
                    </p>

                    <BlockMath math="y=\text{기울기}(x-\text{지나는 점의 }x\text{좌표})+\text{지나는 점의 }y\text{좌표}" />

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">
                                기울기가 2이고 점 <InlineMath math="(3,5)" />를 지나는 직선
                            </p>

                            <BlockMath math="y=2(x-3)+5" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">
                                점 <InlineMath math="(-1,-1)" />을 지나는 직선
                            </p>

                            <p className="leading-8 text-gray-300">
                                기울기를 <InlineMath math="m" />이라 두면
                            </p>

                            <BlockMath math="y=m(x+1)-1" />
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
                            함수 <InlineMath math="f(x)=mx+2m-3" />에 대하여 <InlineMath math="1\le x\le 2" />에서 함숫값이 항상 양수가
                            되도록 하는 실수 <InlineMath math="m" />의 값의 범위를 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 식을 <InlineMath math="y=m(x-a)+b" />의 형태로 정리합니다.
                            </p>

                            <BlockMath math="f(x)=mx+2m-3=m(x+2)-3" />

                            <p>
                                따라서 이 직선은 기울기가 <InlineMath math="m" />이고,
                                점 <InlineMath math="(-2,-3)" />을 지납니다.
                            </p>

                            <p>
                                구간 <InlineMath math="1\le x\le2" />에서 항상 양수이려면,
                                구간에서 가장 작은 함숫값이 양수이면 됩니다.
                            </p>

                            <p>
                                증가하면 왼쪽 끝, 감소하면 오른쪽 끝에서 가장 작습니다.
                            </p>

                            <BlockMath math="f(1)=3m-3,\qquad f(2)=4m-3" />

                            <p>
                                기울기가 양수일 때는 <InlineMath math="f(1)>0" />이어야 하므로
                            </p>

                            <BlockMath math="3m-3>0\quad\Rightarrow\quad m>1" />

                            <p>
                                기울기가 음수일 때는 <InlineMath math="f(2)>0" />이어야 하지만
                            </p>

                            <BlockMath math="4m-3>0\quad\Rightarrow\quad m>\frac34" />

                            <p>
                                이는 <InlineMath math="m<0" />와 함께 만족할 수 없습니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="m>1" />
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
                            일차함수 <InlineMath math="y=(2+m)x+3m+2" />에 대하여 <InlineMath math="-2<x<1" />에서 <InlineMath math="y" />의 값이
                            항상 양수가 되도록 하는 실수 <InlineMath math="m" />의 값의 범위를 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 식을 <InlineMath math="y=m(x-a)+b" />의 형태로 정리합니다.
                            </p>

                            <BlockMath math="y=(2+m)x+3m+2=(2+m)(x+3)-4" />

                            <p>
                                따라서 이 직선은 기울기가 <InlineMath math="2+m" />이고,
                                점 <InlineMath math="(-3,-4)" />를 지납니다.
                            </p>

                            <p>
                                구간 <InlineMath math="-2<x<1" />에서 항상 양수이려면,
                                구간에서 가장 작은 함숫값이 양수이면 됩니다.
                            </p>

                            <p>
                                증가하면 왼쪽 끝, 감소하면 오른쪽 끝에서 가장 작습니다.
                            </p>

                            <BlockMath math="y(-2)=m-2,\qquad y(1)=6m+4" />

                            <p>
                                기울기가 양수일 때는 <InlineMath math="y(-2)\ge0" />이어도 됩니다.
                                왜냐하면 <InlineMath math="-2" />는 구간에 포함되지 않기 때문입니다.
                            </p>

                            <BlockMath math="m-2\ge0\quad\Rightarrow\quad m\ge2" />

                            <p>
                                기울기가 음수일 때는 <InlineMath math="y(1)\ge0" />이어도 되지만, <InlineMath math="1" />도 구간에 포함되지 않습니다.
                            </p>

                            <BlockMath math="6m+4\ge0\quad\Rightarrow\quad m\ge-\frac23" />

                            <p>
                                그러나 감소하려면 <InlineMath math="2+m<0" />, 즉 <InlineMath math="m<-2" />이어야 하므로 함께 만족할 수 없습니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="m\ge2" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            <InlineMath math="y=m(x-a)+b" />는 기울기가 <InlineMath math="m" />이고 점 <InlineMath math="(a,b)" />를 지나는 직선입니다.
                        </p>

                        <p>
                            식을 작성할 때는 <InlineMath math="y=\text{기울기}(x-\text{지나는 점의 }x \text{좌표})+\text{지나는 점의 }y\text{좌표}" /><br />
                            형태를 이용하면 편리합니다.
                        </p>

                        <p>
                            이 표현은 이후 접선의 방정식 <InlineMath math="y=m(x-a)+b" />를 해석할 때도 중요하게 사용됩니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.24 이차함수 <InlineMath math="y=ax^2" />의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    가장 기본이 되는 이차함수는 <InlineMath math="y=ax^2" />입니다.
                    이 그래프는 항상 원점을 지나며, <InlineMath math="y" />축을 기준으로 대칭인 포물선입니다.
                </p>

                <QuadraticBasicSlider />

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        <InlineMath math="a" />의 부호에 따른 그래프
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p>
                            <InlineMath math="a>0" /> :
                            아래로 볼록한 포물선
                        </p>

                        <p>
                            <InlineMath math="a=0" /> : <InlineMath math="y=0" /> (<InlineMath math="x" />축)
                        </p>

                        <p>
                            <InlineMath math="a<0" /> :
                            위로 볼록한 포물선
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        <InlineMath math="|a|" />의 크기에 따른 그래프
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p>
                            <InlineMath math="|a|" />가 클수록
                            포물선이 더 좁아집니다.
                        </p>

                        <p>
                            <InlineMath math="|a|" />가 작을수록
                            포물선이 더 넓어집니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • <InlineMath math="y=ax^2" />는
                            항상 원점을 지나고 <InlineMath math="y" />축에 대칭입니다.
                        </p>

                        <p>
                            • <InlineMath math="a" />는
                            포물선의 모양을 결정합니다.
                        </p>

                        <p>
                            • <InlineMath math="|a|" />는
                            포물선의 넓고 좁음을 결정합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.25 이차함수 <InlineMath math="y=ax^2+bx+c" />의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    이차함수 <InlineMath math="y=ax^2+bx+c" />의 그래프는 세 계수 <InlineMath math="a" />, <InlineMath math="b" />, <InlineMath math="c" />에
                    의해 모양과 위치가 결정됩니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="a" /> : 그래프의 모양
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p><InlineMath math="a>0" /> : 아래로 볼록</p>
                        <p><InlineMath math="a=0" /> : 직선</p>
                        <p><InlineMath math="a<0" /> : 위로 볼록</p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="b" /> : <InlineMath math="y" />축을 통과하는 방향
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(1)" />과 <InlineMath math="f(-1)" />을 비교하면 <InlineMath math="b" />의 부호를 확인할 수 있습니다.
                    </p>

                    <BlockMath math="f(1)-f(-1)=2b" />

                    <div className="mt-4 space-y-3 text-gray-300">
                        <p><InlineMath math="b>0" /> : <InlineMath math="y" />축을 오른쪽 위로 통과</p>
                        <p><InlineMath math="b=0" /> : 꼭짓점이 <InlineMath math="y" />축 위에 있음</p>
                        <p><InlineMath math="b<0" /> : <InlineMath math="y" />축을 오른쪽 아래로 통과</p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="c" /> : <InlineMath math="y" />절편
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x=0" />을 대입하면
                    </p>

                    <BlockMath math="f(0)=c" />

                    <p className="leading-8 text-gray-300">
                        따라서 <InlineMath math="c" />는 그래프가
                        <InlineMath math="y" />축과 만나는 점의 <InlineMath math="y" />좌표입니다.
                    </p>

                    <div className="mt-4 space-y-3 text-gray-300">
                        <p><InlineMath math="c>0" /> : <InlineMath math="x" />축보다 위에서 만남</p>
                        <p><InlineMath math="c=0" /> : 원점을 지남</p>
                        <p><InlineMath math="c<0" /> : <InlineMath math="x" />축보다 아래에서 만남</p>
                    </div>
                </div>

                <QuadraticFullSlider />

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=ax^2+bx+c" />
                                    의 그래프가 오른쪽 그림과 같을 때,
                                    옳은 것만을 보기에서 있는 대로 고른 것은?
                                    단, <InlineMath math="a,b,c" />는 실수이다.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">
                                    <p className="mb-4 text-center font-bold text-white">
                                        보기
                                    </p>

                                    <div className="space-y-3 text-gray-300">
                                        <p>ㄱ. <InlineMath math="ab<0" /></p>
                                        <p>ㄴ. <InlineMath math="4a-2b+c<0" /></p>
                                        <p>ㄷ. <InlineMath math="b^2-4ac>0" /></p>
                                    </div>
                                </div>

                                <div className="mt-5 grid grid-cols-2 gap-2 text-gray-300 sm:grid-cols-5">
                                    <p>① ㄱ</p>
                                    <p>② ㄴ</p>
                                    <p>③ ㄱ, ㄴ</p>
                                    <p>④ ㄴ, ㄷ</p>
                                    <p>⑤ ㄱ, ㄴ, ㄷ</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.25_1.png"
                                    alt="이차함수 그래프"
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
                                그래프가 위로 볼록이므로 <InlineMath math="a<0" />입니다.
                            </p>

                            <p>
                                또 <InlineMath math="y" />축을 오른쪽 위로 통과하므로 <InlineMath math="b>0" />입니다.
                            </p>

                            <BlockMath math="ab<0" />

                            <p>
                                따라서 ㄱ은 참입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                ㄴ의 식은
                            </p>

                            <BlockMath math="4a-2b+c=f(-2)" />

                            <p>
                                그림에서 <InlineMath math="x=-2" />일 때 그래프는 <InlineMath math="x" />축 아래에 있으므로
                            </p>

                            <BlockMath math="f(-2)<0" />

                            <p>
                                따라서 ㄴ도 참입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                그래프가 <InlineMath math="x" />축과 서로 다른 두 점에서 만나므로
                                이차방정식 <InlineMath math="ax^2+bx+c=0" />은 서로 다른 두 실근을 갖습니다.
                            </p>

                            <BlockMath math="b^2-4ac>0" />

                            <p>
                                따라서 ㄷ도 참입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="⑤" />
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
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=ax^2+bx+c" />의 그래프의
                                    개형이 오른쪽 그림과 같을 때, 함수 <InlineMath math="y=cx^2+bx+a" />의 그래프의 개형으로
                                    적당한 것은? 단, <InlineMath math="a,b,c" />는 상수이다.
                                </p>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.25_2.png"
                                    alt="원래 이차함수 그래프"
                                    className="w-full max-w-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="mb-4 text-lg font-bold text-white">
                                보기
                            </h4>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        key={num}
                                        className="rounded-xl border border-white/10 bg-white p-4"
                                    >
                                        <p className="mb-3 text-center text-xl font-bold text-black">
                                            {num}
                                        </p>

                                        <img
                                            src={`/images/2.25_2_${num}.png`}
                                            alt={`보기 ${num}`}
                                            className="mx-auto w-full max-w-[220px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 원래 그래프에서 <InlineMath math="a,b,c" />의 부호를 확인합니다.
                            </p>

                            <p>
                                그래프가 아래로 볼록이므로
                            </p>

                            <BlockMath math="a>0" />

                            <p>
                                그래프가 <InlineMath math="y" />축을
                                오른쪽 아래 방향으로 통과하므로
                            </p>

                            <BlockMath math="b<0" />

                            <p>
                                또 <InlineMath math="y" />절편이
                                <InlineMath math="x" />축 아래에 있으므로
                            </p>

                            <BlockMath math="c<0" />

                            <hr className="border-white/10" />

                            <p>
                                이제 새 함수
                            </p>

                            <BlockMath math="y=cx^2+bx+a" />

                            <p>
                                를 생각합니다.
                            </p>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    <InlineMath math="c<0" /> 이므로 위로 볼록입니다.
                                </li>

                                <li>
                                    <InlineMath math="a>0" /> 이므로 <InlineMath math="y" />절편은 양수입니다.
                                </li>

                                <li>
                                    <InlineMath math="b<0" /> 이므로
                                    그래프는 <InlineMath math="y" />축을
                                    오른쪽 아래 방향으로 통과합니다.
                                </li>
                            </ul>

                            <p>
                                따라서 그래프는 위로 볼록이고, 대칭축은 <InlineMath math="y" />축의 왼쪽에 있으며, <InlineMath math="y" />절편은 양수입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="\boxed{④}" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            <InlineMath math="a" />는 그래프의 <strong>모양</strong>을 결정합니다.
                        </p>

                        <p>
                            <InlineMath math="b" />는 그래프가 <InlineMath math="y" />축을 통과하는 <strong>방향</strong>을 결정합니다.
                        </p>

                        <p>
                            <InlineMath math="c" />는 그래프가 <InlineMath math="y" />축과 만나는 <strong>위치</strong>를 결정합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===========================
    2.26 이차함수의 대칭성
=========================== */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.26 이차함수의 대칭성
                </h2>

                <p className="leading-8 text-gray-300">
                    모든 이차함수는 하나의 대칭축을 가지며,
                    대칭축을 기준으로 좌우가 완전히 같은 모양입니다.
                    <br />
                    이번에는 이차함수의 대칭성을 그래프로 살펴보겠습니다.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">

                    {/* PNG */}
                    <div className="flex justify-center">
                        <img
                            src="/images/symmetry.png"
                            alt="이차함수의 대칭성"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    {/* 설명 */}
                    <div className="space-y-5">

                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ① 모든 이차함수는 대칭이다.
                            </h3>

                            <p className="leading-8 text-gray-300">
                                모든 이차함수는 하나의 대칭축을 가지며,
                                대칭축을 기준으로 좌우가 완전히 대칭입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                대칭축은 항상 꼭짓점을 지나는
                                세로선입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ② 같은 높이의 두 점
                            </h3>

                            <p className="leading-8 text-gray-300">
                                대칭축과 수직인 가로선을 그으면
                                포물선과 두 점에서 만납니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이 두 점은 대칭축에서 항상
                                같은 거리에 있습니다.
                            </p>

                            <BlockMath math="MA=MB" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ③ 대칭축 찾기
                            </h3>

                            <p className="leading-8 text-gray-300">
                                같은 높이의 두 점을 연결한 선분의
                                중점은 항상 대칭축 위에 있습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 두 점만 알아도
                                대칭축의 위치를 찾을 수 있습니다.
                            </p>
                        </div>

                    </div>
                </div>

                {/* 직접 움직여 보기 
    <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
        <h3 className="mb-4 text-2xl font-bold text-blue-300">
            직접 움직여 보기
        </h3>

        <p className="leading-8 text-gray-300">
            다양한 이차함수를 생성하고,
            가로선을 움직이며 대칭성을 직접 확인해 보세요.
        </p>

        <div className="mt-6 flex h-[650px] items-center justify-center rounded-xl border border-dashed border-white/20 bg-black/20">
            <span className="text-gray-500">
                SymmetryExplorer 컴포넌트가 들어갈 영역
            </span>
        </div>
    </div>*/}

                <SymmetryExplorer />

                {/* 이차함수의 대칭표현 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-purple-300">
                        이차함수의 대칭표현
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 표현들은 모두 대칭축이 <InlineMath math="x=a" />라는 같은 의미입니다.
                    </p>

                    <div className="mt-5 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            이차함수가 <InlineMath math="x=a" />에 대하여 대칭이다.
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            이차함수의 꼭짓점의 <InlineMath math="x" />좌표가 <InlineMath math="a" />이다.
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <BlockMath math="f(a-x)=f(a+x)" />
                            <p className="leading-8 text-gray-300">
                                <InlineMath math="a" />에서 왼쪽으로 <InlineMath math="x" />만큼 떨어진 지점과
                                오른쪽으로 <InlineMath math="x" />만큼 떨어진 지점의 높이가 같습니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <BlockMath math="f(x)=f(2a-x)" />
                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />와 <InlineMath math="2a-x" />는
                                대칭축 <InlineMath math="x=a" />를 기준으로 서로 대칭인 점입니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <p className="mb-3 font-bold text-green-300">
                            빠르게 찾기
                        </p>

                        <BlockMath math="f(\square-x)=f(\triangle+x)" />

                        <p className="leading-8 text-gray-300">
                            이 꼴이면 대칭축은 괄호 안 두 수의 평균입니다.
                        </p>

                        <BlockMath math="x=\frac{\square+\triangle}{2}" />

                        <div className="mt-4 space-y-3 text-gray-300">
                            <p>
                                <InlineMath math="f(x)=f(4-x)" /> 이면 대칭축은{" "}
                                <InlineMath math="x=2" />입니다.
                            </p>

                            <p>
                                <InlineMath math="f(2-x)=f(6+x)" /> 이면 대칭축은{" "}
                                <InlineMath math="x=4" />입니다.
                            </p>
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
                            <InlineMath math="y=ax^2+bx+c" />의 그래프의 꼭짓점은 <InlineMath math="(1,8)" />이고, <InlineMath math="x" />축이
                            그래프에 의해 잘려진 선분의 길이는 <InlineMath math="4" />라고 한다.
                            이때 상수 <InlineMath math="a,b,c" />에 대하여 <InlineMath math="abc" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                꼭짓점이 <InlineMath math="(1,8)" />이므로 대칭축은 <InlineMath math="x=1" />입니다.
                            </p>

                            <p>
                                <InlineMath math="x" />축이 그래프에 의해 잘려진 선분의 길이가 <InlineMath math="4" />이므로, 두 근 사이의 거리는 <InlineMath math="4" />입니다.
                            </p>

                            <p>
                                두 근은 대칭축 <InlineMath math="x=1" />을 기준으로
                                좌우로 <InlineMath math="2" />씩 떨어져 있습니다.
                            </p>

                            <BlockMath math="\alpha=-1,\qquad \beta=3" />

                            <p>
                                따라서 이차함수는 다음과 같이 쓸 수 있습니다.
                            </p>

                            <BlockMath math="y=a(x+1)(x-3)" />

                            <p>
                                꼭짓점 <InlineMath math="(1,8)" />을 지나므로 <InlineMath math="x=1" />, <InlineMath math="y=8" />을 대입합니다.
                            </p>

                            <BlockMath math="8=a(1+1)(1-3)" />
                            <BlockMath math="8=-4a" />
                            <BlockMath math="a=-2" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="y=-2(x+1)(x-3)" />

                            <BlockMath math="y=-2x^2+4x+6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a=-2,\qquad b=4,\qquad c=6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="abc=(-2)\cdot4\cdot6=-48" />
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
                            이차함수 <InlineMath math="y=x^2-ax+a" />의 그래프가 <InlineMath math="x" />축과 서로 다른 두 점 <InlineMath math="A,\ B" />에서 만날 때, <InlineMath math="\overline{AB}=\sqrt5" />가 되도록 하는
                            양수 <InlineMath math="a" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이 1. 두 근의 합과 곱 이용
                                </p>

                                <p className="leading-8">
                                    두 근을 <InlineMath math="\alpha,\ \beta" />라고 하면
                                </p>

                                <BlockMath math="\alpha+\beta=a,\qquad \alpha\beta=a" />

                                <p className="leading-8">
                                    두 점 <InlineMath math="A,\ B" />는 <InlineMath math="x" />축 위에 있으므로 <InlineMath math="\overline{AB}" />는 두 근 사이의 거리입니다.
                                </p>

                                <BlockMath math="|\alpha-\beta|=\sqrt5" />

                                <BlockMath math="(\alpha-\beta)^2=5" />

                                <BlockMath math="(\alpha+\beta)^2-4\alpha\beta=5" />

                                <BlockMath math="a^2-4a=5" />

                                <BlockMath math="a^2-4a-5=0" />

                                <BlockMath math="(a-5)(a+1)=0" />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로 <InlineMath math="a=5" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <p className="mb-3 font-bold text-purple-300">
                                    풀이 2. 대칭성과 길이 이용
                                </p>

                                <p className="leading-8">
                                    이차함수 <InlineMath math="y=x^2-ax+a" />의 꼭짓점의 <InlineMath math="x" />좌표는 두 근의 중점입니다.
                                </p>

                                <BlockMath math="x=\frac{a}{2}" />

                                <p className="leading-8">
                                    두 점 사이의 길이가 <InlineMath math="\sqrt5" />이므로,
                                    두 근은 대칭축에서 좌우로 <InlineMath math="\frac{\sqrt5}{2}" />씩 떨어져 있습니다.
                                </p>

                                <BlockMath math="\alpha=\frac{a}{2}-\frac{\sqrt5}{2},\qquad \beta=\frac{a}{2}+\frac{\sqrt5}{2}" />

                                <p className="leading-8">
                                    두 근의 곱은 상수항과 같으므로
                                </p>

                                <BlockMath math="\left(\frac{a}{2}-\frac{\sqrt5}{2}\right)\left(\frac{a}{2}+\frac{\sqrt5}{2}\right)=a" />

                                <BlockMath math="\frac{a^2-5}{4}=a" />

                                <BlockMath math="a^2-4a-5=0" />

                                <BlockMath math="(a-5)(a+1)=0" />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로 <InlineMath math="a=5" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a=5" />
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
                            이차함수 <InlineMath math="f(x)=x^2+ax+b" />가 모든 실수 <InlineMath math="x" />에 대하여 <InlineMath math="f(1+x)=f(1-x)" />를 만족할 때, <InlineMath math="f(-1),\ f(1),\ f(2)" />의 대소 관계를 나타내어라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="f(1+x)=f(1-x)" />는 <InlineMath math="x=1" />을 기준으로 좌우가 대칭이라는 뜻입니다.
                            </p>

                            대칭축은 <BlockMath math="x=1" />

                            <p>
                                또 <InlineMath math="f(x)=x^2+ax+b" />는 <InlineMath math="x^2" />의 계수가 양수이므로 아래로 볼록입니다.
                            </p>

                            <p>
                                따라서 대칭축 <InlineMath math="x=1" />에서 가까울수록 함숫값이 작고,
                                멀어질수록 함숫값이 커집니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="leading-8 text-gray-300">
                                    각 점과 대칭축 <InlineMath math="x=1" /> 사이의 거리를 비교하면
                                </p>

                                <BlockMath math="|-1-1|=2" />
                                <BlockMath math="|1-1|=0" />
                                <BlockMath math="|2-1|=1" />
                            </div>

                            <p>
                                대칭축에서 가장 가까운 것은 <InlineMath math="x=1" />,
                                그다음은 <InlineMath math="x=2" />,
                                가장 먼 것은 <InlineMath math="x=-1" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="f(1)<f(2)<f(-1)" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-3 text-gray-300">
                        <p>
                            • 모든 이차함수는 대칭축을 기준으로 좌우가 대칭이다.
                        </p>

                        <p>
                            • 같은 높이의 두 점은 대칭축에서 같은 거리에 있다.
                        </p>

                        <p>
                            • 같은 높이의 두 점을 연결한 선분의 중점은 항상 대칭축 위에 있다.
                        </p>
                    </div>
                </div>

            </section>

            {/* ===========================
    2.27 이차함수의 식 구하기
=========================== */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.27 이차함수의 식 구하기
                </h2>

                <p className="leading-8 text-gray-300">
                    이차함수의 그래프에서 조건을 읽으면 식을 만들 수 있습니다.
                    <br />
                    이번에는 꼭짓점, 대칭축, 지나는 점을 이용하여 이차함수의 식을 구해 보겠습니다.
                </p>

                <div className="mt-8 space-y-6">
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            ① 꼭짓점과 한 점이 주어진 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            꼭짓점이 <InlineMath math="(p,q)" />이면 이차함수는 다음 꼴로 놓을 수 있습니다.
                        </p>

                        <BlockMath math="y=a(x-p)^2+q" />

                        <p className="leading-8 text-gray-300">
                            여기에 지나는 한 점의 좌표를 대입하여 <InlineMath math="a" />를 구합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                꼭짓점이 <InlineMath math="(2,-3)" />이고,
                                점 <InlineMath math="(4,5)" />를 지나는 이차함수를 구해 봅시다.
                            </p>

                            <BlockMath math="y=a(x-2)^2-3" />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(4,5)" />를 대입하면
                            </p>

                            <BlockMath math="5=a(4-2)^2-3" />
                            <BlockMath math="5=4a-3" />
                            <BlockMath math="a=2" />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math="y=2(x-2)^2-3" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            ② 대칭축과 두 점이 주어진 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            대칭축이 <InlineMath math="x=p" />이면 이차함수는 다음 꼴로 놓을 수 있습니다.
                        </p>

                        <BlockMath math="y=a(x-p)^2+b" />

                        <p className="leading-8 text-gray-300">
                            지나는 두 점을 각각 대입하여 <InlineMath math="a" />와 <InlineMath math="b" />를 구합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                대칭축이 <InlineMath math="x=1" />이고,
                                점 <InlineMath math="(0,3)" />, <InlineMath math="(3,12)" />를
                                지나는 이차함수를 구해 봅시다.
                            </p>

                            <BlockMath math="y=a(x-1)^2+b" />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(0,3)" />을 대입하면
                            </p>

                            <BlockMath math="3=a+b" />

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(3,12)" />를 대입하면
                            </p>

                            <BlockMath math="12=4a+b" />

                            <p className="leading-8 text-gray-300">
                                두 식을 빼면
                            </p>

                            <BlockMath math="9=3a" />
                            <BlockMath math="a=3,\quad b=0" />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math="y=3(x-1)^2" />
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            ③ 세 점이 주어진 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세 점이 주어진 경우에는 보통 <InlineMath math="y=ax^2+bx+c" />로 놓고 세 점을 대입할 수 있습니다.
                            <br />
                            하지만 나머지정리의 관점으로 보면 더 자연스럽게 식을 만들 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                같은 함숫값을 갖는 두 점
                            </p>

                            <p className="leading-8 text-gray-300">
                                만약 <InlineMath math="f(3)=5" />, <InlineMath math="f(-2)=5" />라면 <InlineMath math="f(x)" />는 <InlineMath math="x-3" />, <InlineMath math="x+2" />로 나눈 나머지가 <InlineMath math="5" />입니다.
                            </p>

                            <BlockMath math="f(x)=a(x-3)(x+2)+5" />
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                이차함수 <InlineMath math="f(x)" />가 <InlineMath math="f(1)=3" />, <InlineMath math="f(2)=-1" />, <InlineMath math="f(3)=2" />를 만족할 때, <InlineMath math="f(x)" />를 구해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                먼저 점 <InlineMath math="(1,3)" />, <InlineMath math="(2,-1)" />을 지나는 직선을 생각합니다.
                            </p>

                            <BlockMath math="y=-4x+7" />

                            <p className="leading-8 text-gray-300">
                                그러면 <InlineMath math="f(x)" />를 <InlineMath math="x-1" />, <InlineMath math="x-2" />로 나눈 나머지가 <InlineMath math="-4x+7" />입니다.
                            </p>

                            <BlockMath math="f(x)=a(x-1)(x-2)-4x+7" />

                            <p className="leading-8 text-gray-300">
                                이제 <InlineMath math="f(3)=2" />를 대입하면
                            </p>

                            <BlockMath math="2=a(3-1)(3-2)-12+7" />
                            <BlockMath math="2=2a-5" />
                            <BlockMath math="a=\frac{7}{2}" />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math="f(x)=\frac{7}{2}(x-1)(x-2)-4x+7" />
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
                            이차함수
                        </p>

                        <BlockMath math="y=-2x^2+4ax-3a^2-b^2-6b" />

                        <p className="leading-8 text-gray-300">
                            의 그래프의 꼭짓점의 좌표가 <InlineMath math="(4,-7)" />일 때, <InlineMath math="ab" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                이차함수의 꼭짓점의 <InlineMath math="x" />좌표는
                                두 근의 합의 절반과 같습니다.
                            </p>

                            <BlockMath math="\frac{4a}{4}=a" />

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표가 <InlineMath math="4" />이므로
                            </p>

                            <BlockMath math="a=4" />

                            <p>
                                꼭짓점의 <InlineMath math="y" />좌표는 <InlineMath math="-7" />이므로
                            </p>

                            <BlockMath math="-2(4)^2+4\cdot4\cdot4-3(4)^2-b^2-6b=-7" />

                            <BlockMath math="-b^2-6b-9=0" />

                            <BlockMath math="(b+3)^2=0" />

                            <BlockMath math="b=-3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="ab=4\times(-3)=-12" />
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
                            축의 방정식이 <InlineMath math="x=1" />이고,
                            두 점 <InlineMath math="(-1,0)" />, <InlineMath math="(4,-5)" />를 지나는
                            이차함수의 <InlineMath math="y" />절편을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                축의 방정식이 <InlineMath math="x=1" />이므로
                                이차함수를 다음과 같이 놓습니다.
                            </p>

                            <BlockMath math="y=a(x-1)^2+b" />

                            <p>
                                점 <InlineMath math="(-1,0)" />을 대입하면
                            </p>

                            <BlockMath math="0=4a+b" />

                            <p>
                                점 <InlineMath math="(4,-5)" />를 대입하면
                            </p>

                            <BlockMath math="-5=9a+b" />

                            <p>
                                두 식을 빼면
                            </p>

                            <BlockMath math="-5=5a" />

                            <BlockMath math="a=-1" />

                            <BlockMath math="b=4" />

                            <p>
                                따라서 이차함수는
                            </p>

                            <BlockMath math="y=-(x-1)^2+4" />

                            <p>
                                <InlineMath math="x=0" />을 대입하면
                            </p>

                            <BlockMath math="y=-1+4=3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 y절편은
                                </p>

                                <BlockMath math="3" />
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
                            이차함수 <InlineMath math="f(x)" />가 <InlineMath math="f(1)=p" />, <InlineMath math="f(2)=p+1" />, <InlineMath math="f(3)=p+3" />일 때, <InlineMath math="f(4)" />를 <InlineMath math="p" />에 대한 식으로 나타내어라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="(x-1)(x-2)" />로 나누었을 때의 나머지를 <InlineMath math="R(x)" />라고 하면,
                                나머지는 일차식입니다.
                            </p>

                            <BlockMath math="R(x)=ax+b" />

                            <p>
                                나머지정리에 의해
                            </p>

                            <BlockMath math="R(1)=f(1)=p" />
                            <BlockMath math="R(2)=f(2)=p+1" />

                            <p>
                                따라서 나머지식은
                            </p>

                            <BlockMath math="R(x)=x+p-1" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="f(x)=A(x-1)(x-2)+x+p-1" />

                            <p>
                                이제 <InlineMath math="f(3)=p+3" />을 이용하면
                            </p>

                            <BlockMath math="p+3=2A+3+p-1" />

                            <BlockMath math="2A=1" />

                            <BlockMath math="A=\frac12" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=\frac12(x-1)(x-2)+x+p-1" />

                            <p>
                                <InlineMath math="x=4" />를 대입하면
                            </p>

                            <BlockMath math="f(4)=\frac12(3)(2)+4+p-1" />

                            <BlockMath math="=3+3+p" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="f(4)=p+6" />
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
                            이차함수 <InlineMath math="y=f(x)" />의 그래프가 <InlineMath math="x" />축과 서로 다른 두 점 <InlineMath math="(\alpha,0),\ (\beta,0)" />에서 만나고 <InlineMath math="\alpha+\beta=20" />일 때,
                            방정식 <InlineMath math="f(2x-5)=0" />의 모든 실근의 합을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                그래프가 <InlineMath math="x" />축과 <InlineMath math="\alpha,\beta" />에서 만나므로
                            </p>

                            <BlockMath math="f(\alpha)=0,\qquad f(\beta)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(t)=0" />

                            <p>
                                의 두 근은 <InlineMath math="\alpha,\beta" />입니다.
                            </p>

                            <p>
                                이제 <InlineMath math="f(2x-5)=0" />에서
                            </p>

                            <BlockMath math="2x-5=\alpha\quad\text{또는}\quad 2x-5=\beta" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="x=\frac{\alpha+5}{2},\qquad x=\frac{\beta+5}{2}" />

                            <p>
                                두 실근의 합은
                            </p>

                            <BlockMath math="\frac{\alpha+5}{2}+\frac{\beta+5}{2}" />

                            <BlockMath math="\frac{\alpha+\beta+10}{2}" />

                            <p>
                                <InlineMath math="\alpha+\beta=20" />이므로
                            </p>

                            <BlockMath math="\frac{20+10}{2}=15" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="15" />
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
                            방정식 <InlineMath math="x^2-3x+1=0" />
                            의 두 근을 <InlineMath math="\alpha,\beta" />
                            라 할 때,
                            세 점 <InlineMath math="(\alpha,\beta),\ (\beta,\alpha),\ (1,1)" />
                            을 지나고 <InlineMath math="y" />
                            축에 평행한 축을 갖는 포물선의 식을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                방정식 <InlineMath math="x^2-3x+1=0" />
                                의 두 근이 <InlineMath math="\alpha,\beta" />
                                이므로
                            </p>

                            <BlockMath math="\alpha+\beta=3,\qquad \alpha\beta=1" />

                            <p>
                                또
                            </p>

                            <BlockMath math="f(\alpha)=\beta=3-\alpha" />
                            <BlockMath math="f(\beta)=\alpha=3-\beta" />

                            <p>
                                따라서 <InlineMath math="f(x)" />
                                를 <InlineMath math="(x-\alpha)(x-\beta)" />
                                로 나누었을 때의 나머지는
                                두 점 <InlineMath math="(\alpha,3-\alpha)" />, <InlineMath math="(\beta,3-\beta)" />
                                를 지나는 일차식입니다.
                            </p>

                            <BlockMath math="R(x)=-x+3" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="f(x)=a(x-\alpha)(x-\beta)-x+3" />

                            <p>
                                <InlineMath math="\alpha,\beta" />
                                는 <InlineMath math="x^2-3x+1=0" />
                                의 근이므로
                            </p>

                            <BlockMath math="(x-\alpha)(x-\beta)=x^2-3x+1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=a(x^2-3x+1)-x+3" />

                            <p>
                                이제 점 <InlineMath math="(1,1)" />
                                을 지나므로
                            </p>

                            <BlockMath math="1=a(1-3+1)-1+3" />

                            <BlockMath math="1=-a+2" />

                            <BlockMath math="a=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=x^2-3x+1-x+3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="y=x^2-4x+4=(x-2)^2" />
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
                            두 이차함수 <InlineMath math="f(x),\ g(x)" />가 다음 조건을 모두 만족시킨다.
                        </p>

                        <div className="my-5 rounded-xl border border-white/15 bg-black/20 p-5">
                            <p><InlineMath math="(가)" /> <InlineMath math="f(x)" />는 <InlineMath math="x=2" />에서 최솟값 <InlineMath math="8" />을 갖는다.</p>

                            <p className="mt-3"><InlineMath math="(나)" /> <InlineMath math="g(x)" />는 <InlineMath math="x=0" />에서 최댓값 <InlineMath math="6" />을 갖는다.</p>

                            <p className="mt-3"><InlineMath math="(다)" /> <InlineMath math="f(x)+g(x)" />는 <InlineMath math="x=4" />에서 최솟값 <InlineMath math="2" />를 갖는다.</p>
                        </div>

                        <p className="leading-8 text-gray-300">
                            이때 <InlineMath math="f(1)+g(1)" />
                            의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                조건 (가), (나)로부터
                            </p>

                            <BlockMath math="f(x)=a(x-2)^2+8" />

                            <BlockMath math="g(x)=b x^2+6\qquad(b<0)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)+g(x)=a(x-2)^2+bx^2+14" />

                            <p>
                                조건 (다)에 의해 <InlineMath math="x=4" />
                                에서 최솟값 <InlineMath math="2" />
                                를 갖습니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="x=4" />
                                를 대입하면
                            </p>

                            <BlockMath math="4a+16b+14=2" />

                            <BlockMath math="a+4b=-3" />

                            <p>
                                또 꼭짓점의 <InlineMath math="x" />
                                좌표가 <InlineMath math="4" />
                                이므로
                            </p>

                            <BlockMath math="\frac{4a}{2(a+b)}=4" />

                            <BlockMath math="a=8(a+b)" />

                            <BlockMath math="7a+8b=0" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=8,\qquad b=-\frac72" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(1)=8(1-2)^2+8=16" />

                            <BlockMath math="g(1)=-\frac72+6=\frac52" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="f(1)+g(1)=16+\frac52=\frac{37}{2}" />
                            </div>

                        </div>

                    </details>
                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • 꼭짓점이 <InlineMath math="(p,q)" />이면 <InlineMath math="y=a(x-p)^2+q" />로 놓는다.
                        </p>

                        <p>
                            • 대칭축이 <InlineMath math="x=p" />이면 <InlineMath math="y=a(x-p)^2+b" />로 놓는다.
                        </p>

                        <p>
                            • 같은 함숫값을 갖는 두 점이 있으면, 그 값을 빼서
                            나머지정리처럼 해석한다.
                        </p>

                        <p>
                            • 세 점이 주어진 경우에도 두 점을 지나는 직선을 먼저 만들면
                            식을 더 쉽게 구할 수 있다.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===========================
    2.28 이차함수의 최대와 최소
=========================== */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.28 이차함수의 최대와 최소
                </h2>

                <p className="leading-8 text-gray-300">
                    이차함수의 그래프는 꼭짓점을 기준으로 방향이 바뀝니다.
                    <br />
                    따라서 최대와 최소는 항상 꼭짓점을 먼저 살펴보는 것에서 시작합니다.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* PNG */}
                    <div className="flex justify-center">
                        <img
                            src="/images/max_min.png"
                            alt="이차함수의 최대와 최소"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    {/* 설명 카드 */}
                    <div className="space-y-5">
                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ① 아래로 볼록
                            </h3>

                            <p className="leading-8 text-gray-300">
                                그래프가 아래로 볼록하면 꼭짓점이 가장 낮은 곳입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 꼭짓점에서 <span className="font-bold text-blue-300">최솟값</span>을 가집니다.
                            </p>

                            <BlockMath math="y\ge k" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ② 위로 볼록
                            </h3>

                            <p className="leading-8 text-gray-300">
                                그래프가 위로 볼록하면 꼭짓점이 가장 높은 곳입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 꼭짓점에서 <span className="font-bold text-orange-300">최댓값</span>을 가집니다.
                            </p>

                            <BlockMath math="y\le k" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                            <h3 className="mb-3 text-xl font-bold">
                                ③ 꼭짓점의 <InlineMath math="x" />좌표
                            </h3>

                            <p className="leading-8 text-gray-300">
                                이차함수의 그래프가 x축과 두 점에서 만날 때,
                                두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                                꼭짓점의 <InlineMath math="x" />좌표는 두 근의 중점입니다.
                            </p>

                            <BlockMath math="x=\frac{\alpha+\beta}{2}" />
                        </div>
                    </div>
                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시 문제
                    </h3>

                    {/* 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                        <h4 className="mb-3 text-xl font-bold text-blue-300">
                            예시 1. 전체 범위에서의 최솟값
                        </h4>

                        <p className="leading-8 text-gray-300">
                            다음 이차함수의 최솟값을 구해 봅시다.
                        </p>

                        <BlockMath math="y=x^2-4x+1" />

                        <div className="mt-5 space-y-4">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 1. 대략의 그래프를 생각한다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 함수는 <InlineMath math="x^2" />의 계수가 양수이므로
                                    아래로 볼록한 그래프입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 2. 꼭짓점의 <InlineMath math="x" />좌표를 찾는다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이차함수의 꼭짓점은 두 근의 중점에 있습니다.
                                </p>

                                <BlockMath math="x=\frac{\alpha+\beta}{2}" />

                                <p className="leading-8 text-gray-300">
                                    이 함수의 두 근의 합은
                                    <InlineMath math="4" />이므로
                                </p>

                                <BlockMath math="x=\frac{4}{2}=2" />

                                <p className="leading-8 text-gray-300">
                                    따라서 꼭짓점의 <InlineMath math="x" />좌표는
                                    <InlineMath math="2" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 3. 꼭짓점의 <InlineMath math="y" />좌표를 구한다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    꼭짓점의 <InlineMath math="x" />좌표가 <InlineMath math="2" />이므로,
                                    원래 식에 <InlineMath math="x=2" />를 대입합니다.
                                </p>

                                <BlockMath math="y=2^2-4\cdot2+1" />

                                <BlockMath math="y=4-8+1=-3" />

                                <p className="leading-8 text-gray-300">
                                    따라서 꼭짓점은 <InlineMath math="(2,-3)" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="mb-2 font-bold text-yellow-300">
                                    Step 4. 최대·최소를 판단한다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x^2" />의 계수가 양수이므로
                                    그래프는 아래로 볼록입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    아래로 볼록한 이차함수는 꼭짓점에서
                                    <span className="font-bold text-blue-300"> 최솟값</span>을 가집니다.
                                </p>

                                <BlockMath math="x=2\text{ 에서 최솟값 }-3" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="mb-2 font-bold text-yellow-300">
                                    결론
                                </p>

                                <p className="leading-8 text-gray-300">
                                    꼭짓점은 <InlineMath math="(2,-3)" />이고,
                                    아래로 볼록이므로 <InlineMath math="x=2" />에서
                                    최솟값 <InlineMath math="-3" />을 가집니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 예시 2 */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                        <h4 className="mb-3 text-xl font-bold text-blue-300">
                            예시 2. 제한범위에서의 최대와 최소
                        </h4>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="0\le x\le 3" />에서 다음 이차함수의
                            최댓값과 최솟값을 구해 봅시다.
                        </p>

                        <BlockMath math="y=x^2-4x+1" />

                        <div className="mt-5 space-y-4">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 1. 전체 그래프를 먼저 본다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 그래프는 아래로 볼록이고,
                                    꼭짓점은 <InlineMath math="(2,-3)" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 2. 주어진 범위만 남긴다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이제 전체 그래프가 아니라 <InlineMath math="0\le x\le 3" />인 부분만 봅니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    제한범위 안에서는 꼭짓점과 양쪽 끝점을 비교하면 됩니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 3. 세 곳의 함숫값을 비교한다.
                                </p>

                                <BlockMath math="y(0)=1" />
                                <BlockMath math="y(2)=-3" />
                                <BlockMath math="y(3)=-2" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="mb-2 font-bold text-yellow-300">
                                    결론
                                </p>

                                <p className="leading-8 text-gray-300">
                                    가장 높은 값은 <InlineMath math="1" />이고,
                                    가장 낮은 값은 <InlineMath math="-3" />입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 최댓값은 <InlineMath math="1" />,
                                    최솟값은 <InlineMath math="-3" />입니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 예시 3 */}
                    <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                        <h4 className="mb-3 text-xl font-bold text-purple-300">
                            예시 3. 제한범위가 있는 치환형 이차함수
                        </h4>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="0\le x\le 3" />에서 다음 함수의
                            최댓값과 최솟값을 구해 봅시다.
                        </p>

                        <BlockMath math="y=(x^2-2x+3)^2-4(x^2-2x+3)+4" />

                        <div className="mt-5 space-y-4">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 1. 복잡한 부분을 하나의 문자로 둔다.
                                </p>

                                <BlockMath math="t=x^2-2x+3" />

                                <p className="leading-8 text-gray-300">
                                    그러면 주어진 함수는 다음과 같이 바뀝니다.
                                </p>

                                <BlockMath math="y=t^2-4t+4" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 2. 먼저 <InlineMath math="t" />의 범위를 구한다.
                                </p>

                                <BlockMath math="t=x^2-2x+3=(x-1)^2+2" />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="0\le x\le 3" />에서 <InlineMath math="t" />의 최솟값은 <InlineMath math="x=1" />일 때 <InlineMath math="2" />입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    끝점도 확인하면
                                </p>

                                <BlockMath math="t(0)=3,\quad t(3)=6" />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath math="2\le t\le 6" />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                                <p className="mb-2 font-bold text-white">
                                    Step 3. t에 대한 이차함수로 생각한다.
                                </p>

                                <BlockMath math="y=t^2-4t+4=(t-2)^2" />

                                <p className="leading-8 text-gray-300">
                                    이제 <InlineMath math="x" />가 아니라 <InlineMath math="t" />의 범위 <InlineMath math="2\le t\le 6" />에서 그래프를 봅니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">
                                <p className="mb-2 font-bold text-yellow-300">
                                    결론
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="y=(t-2)^2" />는 <InlineMath math="t=2" />에서 최솟값 <InlineMath math="0" />을 가집니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    제한범위의 오른쪽 끝 <InlineMath math="t=6" />에서
                                </p>

                                <BlockMath math="y=(6-2)^2=16" />

                                <p className="leading-8 text-gray-300">
                                    따라서 최댓값은 <InlineMath math="16" />,
                                    최솟값은 <InlineMath math="0" />입니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="1\le x\le5" />일 때,
                        </p>

                        <BlockMath math="y=x^2-4x+3" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표를 구합니다.
                            </p>

                            <BlockMath math="x=\frac{4}{2}=2" />

                            <p>
                                <InlineMath math="2" />는 <InlineMath math="1\le x\le5" />에 포함되므로
                                꼭짓점과 양 끝점을 비교합니다.
                            </p>

                            <BlockMath math="f(1)=1-4+3=0" />

                            <BlockMath math="f(2)=4-8+3=-1" />

                            <BlockMath math="f(5)=25-20+3=8" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="0,\quad -1,\quad 8" />

                            <p>
                                을 비교하면
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=8,\qquad \text{최솟값}=-1" />

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
                            이차함수
                        </p>

                        <BlockMath math="f(x)=-x^2+2kx-2k" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값이 <InlineMath math="8" />이 되도록 하는
                            모든 상수 <InlineMath math="k" />의 값의 곱을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                아래로 볼록한 이차함수이므로
                                최댓값은 꼭짓점에서 갖습니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{2k}{2}=k" />

                            <p>
                                따라서 최댓값은
                            </p>

                            <BlockMath math="f(k)=-k^2+2k^2-2k" />

                            <BlockMath math="=k^2-2k" />

                            <p>
                                조건에 의해
                            </p>

                            <BlockMath math="k^2-2k=8" />

                            <BlockMath math="k^2-2k-8=0" />

                            <BlockMath math="(k-4)(k+2)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="k=4,\qquad k=-2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="4\times(-2)=-8" />

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
                            등식
                        </p>

                        <BlockMath math="\frac{\sqrt{x-1}}{\sqrt{x-5}}=-\sqrt{\frac{x-1}{x-5}}" />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 실수 <InlineMath math="x" />에 대하여
                            이차함수
                        </p>

                        <BlockMath math="f(x)=2x^2-16x+35" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값의 차를 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                복소수 단원에서 배운 성질을 이용합니다.
                            </p>

                            <BlockMath math="a\ge0,\ b<0 \quad\Rightarrow\quad \frac{\sqrt a}{\sqrt b}=-\sqrt{\frac ab}" />

                            <p>
                                따라서 주어진 등식이 성립하려면
                            </p>

                            <BlockMath math="x-1\ge0,\qquad x-5<0" />

                            <p>
                                이어야 하므로
                            </p>

                            <BlockMath math="1\le x<5" />

                            <p>
                                이제 이 범위에서 <InlineMath math="f(x)=2x^2-16x+35" />의 최대와 최소를 구합니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{16}{4}=4" />

                            <p>
                                이고, <InlineMath math="4" />는 <InlineMath math="1\le x<5" />에 포함됩니다.
                            </p>

                            <BlockMath math="f(4)=2\cdot 4^2-16\cdot4+35=3" />

                            <p>
                                따라서 최솟값은 <InlineMath math="3" />입니다.
                            </p>

                            <p>
                                최댓값은 범위의 끝에서 확인합니다.
                                오른쪽 끝 <InlineMath math="x=5" />는 포함되지 않으므로,
                                왼쪽 끝 <InlineMath math="x=1" />만 실제로 포함됩니다.
                            </p>

                            <BlockMath math="f(1)=2-16+35=21" />

                            <p>
                                따라서 최댓값은 <InlineMath math="21" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 최댓값과 최솟값의 차는
                                </p>

                                <BlockMath math="21-3=18" />
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
                            <InlineMath math="2x+y=1" />을 만족시키는 실수 <InlineMath math="x,y" />에 대하여
                        </p>

                        <BlockMath math="x^2+y^2" />

                        <p className="leading-8 text-gray-300">
                            의 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 <InlineMath math="y" />를 <InlineMath math="x" />에 대한 식으로 나타냅니다.
                            </p>

                            <BlockMath math="y=1-2x" />

                            <p>
                                이를 <InlineMath math="x^2+y^2" />에 대입하면
                            </p>

                            <BlockMath math="x^2+(1-2x)^2" />

                            <BlockMath math="=5x^2-4x+1" />

                            <p>
                                아래로 볼록한 이차함수이므로
                                최솟값은 꼭짓점에서 갖습니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{4}{10}=\frac25" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="y=1-2\cdot\frac25=\frac15" />

                            <p>
                                최솟값은
                            </p>

                            <BlockMath math="\left(\frac25\right)^2+\left(\frac15\right)^2" />

                            <BlockMath math="\frac{4}{25}+\frac{1}{25}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\frac15" />
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
                            <InlineMath math="x+y=3,\ x\ge0,\ y\ge0" />일 때,
                        </p>

                        <BlockMath math="2x^2+y^2" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 <InlineMath math="y=3-x" />를 대입합니다.
                            </p>

                            <BlockMath math="2x^2+(3-x)^2" />

                            <BlockMath math="=3x^2-6x+9" />

                            <p>
                                조건 <InlineMath math="x\ge0,\ y\ge0" />에서
                            </p>

                            <BlockMath math="0\le x\le3" />

                            <p>
                                따라서 <InlineMath math="0\le x\le3" />
                                에서 최대와 최소를 구하면 됩니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{6}{6}=1" />

                            <p>
                                꼭짓점과 양 끝점을 비교하면
                            </p>

                            <BlockMath math="f(0)=9" />

                            <BlockMath math="f(1)=6" />

                            <BlockMath math="f(3)=18" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=18,\qquad \text{최솟값}=6" />

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
                            <InlineMath math="x,y" />가 실수이고,
                        </p>

                        <BlockMath math="x^2+y^2=4" />

                        <p className="leading-8 text-gray-300">
                            일 때,
                        </p>

                        <BlockMath math="4x+y^2" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                조건 <InlineMath math="x^2+y^2=4" />
                                에서
                            </p>

                            <BlockMath math="y^2=4-x^2" />

                            <p>
                                이를 대입하면
                            </p>

                            <BlockMath math="4x+y^2=4x+4-x^2" />

                            <BlockMath math="=-x^2+4x+4" />

                            <p>
                                또 <InlineMath math="x^2+y^2=4" />
                                이므로
                            </p>

                            <BlockMath math="-2\le x\le2" />

                            <p>
                                따라서 <InlineMath math="-2\le x\le2" />
                                에서 최대와 최소를 구하면 됩니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{4}{2}=2" />

                            <p>
                                꼭짓점과 양 끝점을 비교하면
                            </p>

                            <BlockMath math="f(-2)=-( -2)^2+4(-2)+4=-8" />

                            <BlockMath math="f(2)=-(2)^2+4(2)+4=8" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=8,\qquad \text{최솟값}=-8" />

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

                        <BlockMath math="x^2+(a-2)x+a^2+a+2=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 실근을 <InlineMath math="\alpha,\beta" />라고 할 때, <InlineMath math="(\alpha-1)(\beta-1)" />의 최댓값과 최솟값의 합을 구하여라.
                            단, <InlineMath math="a" />는 실수이다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="\alpha+\beta=2-a,\qquad \alpha\beta=a^2+a+2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(\alpha-1)(\beta-1)=\alpha\beta-(\alpha+\beta)+1" />

                            <BlockMath math="=a^2+a+2-(2-a)+1" />

                            <BlockMath math="=a^2+2a+1=(a+1)^2" />

                            <p>
                                그런데 두 실근을 가지므로 판별식은 0 이상입니다.
                            </p>

                            <BlockMath math="D=(a-2)^2-4(a^2+a+2)\ge0" />

                            <BlockMath math="-3a^2-8a-4\ge0" />

                            <BlockMath math="3a^2+8a+4\le0" />

                            <BlockMath math="(3a+2)(a+2)\le0" />

                            <BlockMath math="-2\le a\le-\frac23" />

                            <p>
                                이제 <InlineMath math="(a+1)^2" />의 최대와 최소를
                                이 범위에서 구합니다.
                            </p>

                            <BlockMath math="-2\le a\le-\frac23" />

                            <p>
                                꼭짓점은 <InlineMath math="a=-1" />이고,
                                이 값은 범위 안에 있습니다.
                            </p>

                            <BlockMath math="\text{최솟값}=0" />

                            <p>
                                양 끝값을 비교하면
                            </p>

                            <BlockMath math="(-2+1)^2=1" />

                            <BlockMath math="\left(-\frac23+1\right)^2=\frac19" />

                            <BlockMath math="\text{최댓값}=1" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 최댓값과 최솟값의 합은
                                </p>

                                <BlockMath math="1+0=1" />
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
                            이차함수 <InlineMath math="f(x)=-x^2-2ax+a-1" />
                            의 최댓값을 <InlineMath math="g(a)" />라고 할 때, <InlineMath math="g(a)" />의 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="f(x)" />는 위로 볼록한 이차함수이므로
                                최댓값은 꼭짓점에서 갖습니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{-2a}{2}= -a" />

                            <p>
                                따라서 최댓값은
                            </p>

                            <BlockMath math="g(a)=f(-a)" />

                            <BlockMath math="g(a)=-(-a)^2-2a(-a)+a-1" />

                            <BlockMath math="=a^2+a-1" />

                            <p>
                                이제 <InlineMath math="g(a)" />의 최솟값을 구합니다.
                            </p>

                            <BlockMath math="g(a)=a^2+a-1" />

                            <p>
                                꼭짓점의 <InlineMath math="a" />좌표는
                            </p>

                            <BlockMath math="a=-\frac12" />

                            <p>
                                이때
                            </p>

                            <BlockMath math="g\left(-\frac12\right)=\frac14-\frac12-1" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최솟값}=-\frac54" />
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
                            <InlineMath math="-3\le x\le0" />일 때,
                            함수
                        </p>

                        <BlockMath math="y=(x^2+2x+2)^2-4(x^2+2x)-9" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값의 합을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                복잡한 부분을 하나의 문자로 둡니다.
                            </p>

                            <BlockMath math="t=x^2+2x+2" />

                            <p>
                                먼저 <InlineMath math="t" />의 범위를 구합니다.
                            </p>

                            <BlockMath math="t=x^2+2x+2=(x+1)^2+1" />

                            <p>
                                <InlineMath math="-3\le x\le0" />에서
                                꼭짓점 <InlineMath math="x=-1" />은 범위 안에 있으므로
                            </p>

                            <BlockMath math="t_{\min}=1" />

                            <p>
                                양 끝값을 확인하면
                            </p>

                            <BlockMath math="t(-3)=5,\qquad t(0)=2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="1\le t\le5" />

                            <p>
                                이제 원래 식은
                            </p>

                            <BlockMath math="y=t^2-4t-1" />

                            <p>
                                입니다.
                                <InlineMath math="1\le t\le5" />에서 최대와 최소를 구합니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="t" />좌표는
                            </p>

                            <BlockMath math="t=\frac{4}{2}=2" />

                            <p>
                                <InlineMath math="2" />는 범위 안에 있으므로
                                꼭짓점과 양 끝값을 비교합니다.
                            </p>

                            <BlockMath math="y(1)=1-4-1=-4" />

                            <BlockMath math="y(2)=4-8-1=-5" />

                            <BlockMath math="y(5)=25-20-1=4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=4,\qquad \text{최솟값}=-5" />

                                <BlockMath math="\text{최댓값과 최솟값의 합}=-1" />
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
                            함수
                        </p>

                        <BlockMath math="y=-2(x^2+2x-1)^2+12(x^2+2x-1)-k" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값이 <InlineMath math="15" />일 때,
                            실수 <InlineMath math="k" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                복잡한 부분을 하나의 문자로 둡니다.
                            </p>

                            <BlockMath math="t=x^2+2x-1" />

                            <p>
                                먼저 <InlineMath math="t" />의 범위를 구합니다.
                            </p>

                            <BlockMath math="t=(x+1)^2-2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="t\ge -2" />

                            <p>
                                원래 함수는
                            </p>

                            <BlockMath math="y=-2t^2+12t-k" />

                            <p>
                                이 됩니다.
                            </p>

                            <p>
                                이 이차함수의 꼭짓점의 <InlineMath math="t" />좌표는
                            </p>

                            <BlockMath math="t=\frac{12}{4}=3" />

                            <p>
                                <InlineMath math="3" />은 <InlineMath math="t\ge-2" />에 포함되므로,
                                최댓값은 <InlineMath math="t=3" />에서 가집니다.
                            </p>

                            <BlockMath math="y_{\max}=-2\cdot3^2+12\cdot3-k" />

                            <BlockMath math="=18-k" />

                            <p>
                                최댓값이 <InlineMath math="15" />이므로
                            </p>

                            <BlockMath math="18-k=15" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k=3" />
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
                            이차방정식
                        </p>

                        <BlockMath math="x^2+3x+1=0" />

                        <p className="leading-8 text-gray-300">
                            의 두 근을 <InlineMath math="\alpha,\beta" />
                            라 할 때,
                        </p>

                        <BlockMath math="f(\alpha)=2\beta,\qquad f(\beta)=2\alpha,\qquad f(1)=12" />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 이차함수 <InlineMath math="f(x)" />
                            의 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                방정식 <InlineMath math="x^2+3x+1=0" />
                                의 두 근이 <InlineMath math="\alpha,\beta" />
                                이므로
                            </p>

                            <BlockMath math="\alpha+\beta=-3,\qquad \alpha\beta=1" />

                            <p>
                                <InlineMath math="f(\alpha)=2\beta,\ f(\beta)=2\alpha" />
                                이므로
                            </p>

                            <BlockMath math="2\beta=-2\alpha-6,\qquad 2\alpha=-2\beta-6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(\alpha)=-2\alpha-6,\qquad f(\beta)=-2\beta-6" />

                            <p>
                                <InlineMath math="f(x)" />를 <InlineMath math="x^2+3x+1" />
                                로 나누었을 때의 나머지는 일차식이므로
                            </p>

                            <BlockMath math="R(x)=-2x-6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=a(x^2+3x+1)-2x-6" />

                            <p>
                                또 <InlineMath math="f(1)=12" />이므로
                            </p>

                            <BlockMath math="5a-8=12" />

                            <BlockMath math="a=4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=4(x^2+3x+1)-2x-6" />

                            <BlockMath math="=4x^2+10x-2" />

                            <p>
                                아래로 볼록한 이차함수이므로
                                최솟값은 꼭짓점에서 갖습니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />
                                좌표는
                            </p>

                            <BlockMath math="x=\frac{-10}{8}=-\frac54" />

                            <p>
                                이때
                            </p>

                            <BlockMath math="f\!\left(-\frac54\right)=4\left(\frac{25}{16}\right)+10\left(-\frac54\right)-2" />

                            <BlockMath math="=\frac{25}{4}-\frac{25}{2}-2=-\frac{33}{4}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최솟값}=-\frac{33}{4}" />
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
                            <InlineMath math="x,y,z" />가 실수일 때, 다음 식의 최솟값을 구하여라.
                        </p>

                        <div className="mt-4 space-y-3">
                            <p className="leading-8 text-gray-300">
                                (1) <InlineMath math="x^2+2y^2-4x+8y+5" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                (2) <InlineMath math="x^2+y^2+z^2-2x-4y-6z+15" />
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    (1)
                                </p>

                                <BlockMath math="x^2+2y^2-4x+8y+5" />

                                <BlockMath math="=(x^2-4x)+2(y^2+4y)+5" />

                                <BlockMath math="=(x-2)^2-4+2\{(y+2)^2-4\}+5" />

                                <BlockMath math="=(x-2)^2+2(y+2)^2-7" />

                                <p>
                                    제곱항은 항상 <InlineMath math="0" /> 이상이므로
                                </p>

                                <BlockMath math="\text{최솟값}=-7" />
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    (2)
                                </p>

                                <BlockMath math="x^2+y^2+z^2-2x-4y-6z+15" />

                                <BlockMath math="=(x^2-2x)+(y^2-4y)+(z^2-6z)+15" />

                                <BlockMath math="=(x-1)^2-1+(y-2)^2-4+(z-3)^2-9+15" />

                                <BlockMath math="=(x-1)^2+(y-2)^2+(z-3)^2+1" />

                                <p>
                                    제곱항은 항상 <InlineMath math="0" /> 이상이므로
                                </p>

                                <BlockMath math="\text{최솟값}=1" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="(1)\ -7,\qquad (2)\ 1" />
                            </div>
                        </div>
                    </details>
                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • 아래로 볼록한 이차함수는 꼭짓점에서 최솟값을 가진다.
                        </p>

                        <p>
                            • 위로 볼록한 이차함수는 꼭짓점에서 최댓값을 가진다.
                        </p>

                        <p>
                            • 제한범위가 있으면 그래프 전체가 아니라 주어진 범위만 보고 판단한다.
                        </p>

                        <p>
                            • 치환형 문제는 먼저 치환한 문자의 범위를 구한 뒤, 그 범위에서 최대와 최소를 찾는다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.29 서로 다른 두 실근의 갖는 이차방정식의 그래프 해석
                </h2>

                <p className="leading-8 text-gray-300">
                    방정식의 해는 그래프에서는 교점의 <InlineMath math="x" />좌표로 해석할 수 있습니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        두 이차함수의 교점
                    </h3>

                    <BlockMath math="y=ax^2+bx+c,\qquad y=px^2+qx+r" />

                    <p className="leading-8 text-gray-300">
                        두 그래프의 교점을 구한다는 것은 두 식의 값이 같아지는 <InlineMath math="x" />를 찾는 것입니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=px^2+qx+r" />
                    <BlockMath math="(a-p)x^2+(b-q)x+(c-r)=0" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차함수와 직선의 교점
                    </h3>

                    <BlockMath math="y=ax^2+bx+c,\qquad y=mx+n" />

                    <p className="leading-8 text-gray-300">
                        이 경우도 두 그래프의 교점을 구하는 문제입니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=mx+n" />
                    <BlockMath math="ax^2+(b-m)x+(c-n)=0" />
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-purple-300">
                        방정식의 그래프 해석
                    </h3>

                    <p className="leading-8 text-gray-300">
                        방정식 <InlineMath math="x^2-x-6=0" />은 <br />좌변과 우변을 어떻게
                        나누느냐에 따라 여러 가지 두 함수의 교점으로 해석할 수 있습니다.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">① <InlineMath math="x" />축과의 교점</p>
                            <BlockMath math="y=x^2-x-6,\qquad y=0" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">② 좌변과 우변으로 나누기</p>
                            <BlockMath math="y=x^2-2x-2,\qquad y=x+4" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">③ 다른 형태로 나누기</p>
                            <BlockMath math="y=2x^2-3,\qquad y=x^2+x+3" />
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="text-lg font-bold text-yellow-300">
                            핵심
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            좌변과 우변을 어떻게 나누더라도 원래 방정식은 같으므로,
                            두 그래프의 교점의 <InlineMath math="x" />좌표는 항상 같습니다.
                        </p>
                    </div>
                </div>


                <EquationFunctionRelationExplorer />


                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        왜 <InlineMath math="x" />좌표는 변하지 않을까?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 함수 <InlineMath math="f(x)" />, <InlineMath math="g(x)" />의
                        교점은
                    </p>

                    <BlockMath math="f(x)=g(x)" />

                    <p className="leading-8 text-gray-300">
                        를 만족하는 점입니다. 이 식을 한쪽으로 정리하면
                    </p>

                    <BlockMath math="f(x)-g(x)=0" />

                    <p className="leading-8 text-gray-300">
                        이 됩니다. 식의 모양은 달라져도, 두 식이 같아지는
                        <InlineMath math="x" />값은 그대로 유지됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • 두 그래프의 교점을 구하는 문제는 방정식을 푸는 문제로
                            바꿀 수 있습니다.
                        </p>

                        <p>
                            • 방정식의 해는 두 그래프의 교점의
                            <InlineMath math="x" />좌표입니다.
                        </p>

                        <p>
                            • 조건이 복잡할 때는 좌변과 우변을 계산하기 편한 식으로
                            변형할 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.30 그래프를 수식으로
                </h2>

                <p className="leading-8 text-gray-300">
                    2.29에서는 방정식을 그래프로 해석했습니다. <br />이번에는 반대로,
                    그래프에서 얻은 교점 정보를 이용하여 수식을 만들어 보겠습니다.
                </p>
                <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                    {/* 왼쪽 이미지 영역 */}
                    <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5">
                        <img
                            src="/images/Eq_to_graph_1.png"
                            alt="이차함수와 직선"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    {/* 오른쪽 카드 */}
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                        <h3 className="mb-5 text-xl font-bold text-blue-300">
                            그래프에서 방정식으로
                        </h3>

                        <div className="space-y-6">
                            <Step title={<> ① 교점의 <InlineMath math="x" />좌표</>}>
                                <p>
                                    <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />의 교점의 <InlineMath math="x" />좌표를 <InlineMath math="\alpha,\beta" />
                                </p>
                            </Step>

                            <Step title="② 방정식의 해">
                                <BlockMath math="f(x)=g(x)" />
                                <p>
                                    이 방정식의 해는 <InlineMath math="x=\alpha,\beta" />이다.
                                </p>
                            </Step>

                            <Step title="③ 한쪽으로 이항">
                                <BlockMath math="f(x)-g(x)=0" />
                                <p>
                                    이 방정식의 해도 <InlineMath math="x=\alpha,\beta" />이다.
                                </p>
                            </Step>

                            <Step title="④ 해를 이용해 방정식 작성">
                                <BlockMath math="a(x-\alpha)(x-\beta)=0" />
                            </Step>

                            <Step title="⑤ 왼쪽 식과 비교">
                                <BlockMath math="f(x)-g(x)=a(x-\alpha)(x-\beta)" />
                            </Step>

                            <Step title="⑥ 함수식으로 정리">
                                <BlockMath math="f(x)=a(x-\alpha)(x-\beta)+g(x)" />
                            </Step>

                            <Step title="⑦ 나머지정리로 해석">
                                <p>
                                    <InlineMath math="g(x)" />가 일차 이하의 식이면, </p>
                                <p>
                                    <InlineMath math="f(x)" />를 <InlineMath math="(x-\alpha)(x-\beta)" />로 나눈 나머지가 <InlineMath math="g(x)" />
                                </p>
                            </Step>
                        </div>
                    </div>

                    {/* 왼쪽 이미지 영역 */}
                    <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5">
                        <img
                            src="/images/Eq_to_graph_2.png"
                            alt="이차함수와 직선의 교점"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    {/* 오른쪽 카드 */}
                    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                        <h3 className="mb-6 text-2xl font-bold text-green-300">
                            수식이 주어졌을 때 알 수 있는 것
                        </h3>

                        <div className="space-y-5">
                            <Step title="① 두 식을 같게 둔다">
                                <p>
                                    <InlineMath math="y=ax^2+bx+c" />와{" "}
                                    <InlineMath math="y=mx+n" />의 교점을 구하려면 두 식의 값이
                                    같아지는 <InlineMath math="x" />를 찾으면 됩니다.
                                </p>

                                <BlockMath math="ax^2+bx+c=mx+n" />
                            </Step>

                            <Step title="② 한쪽으로 이항">
                                <p>모든 항을 왼쪽으로 옮기면 이차방정식이 됩니다.</p>

                                <BlockMath math="ax^2+(b-m)x+(c-n)=0" />
                            </Step>

                            <Step title="③ 해를 이용해 인수분해">
                                <p>
                                    교점의 <InlineMath math="x" />좌표가{" "}
                                    <InlineMath math="\alpha,\beta" />이면
                                </p>

                                <BlockMath math="ax^2+(b-m)x+(c-n)=a(x-\alpha)(x-\beta)" />
                            </Step>

                            <Step title="④ 다시 함수식으로 정리">
                                <BlockMath math="ax^2+bx+c=a(x-\alpha)(x-\beta)+mx+n" />

                                <p>
                                    따라서 <InlineMath math="ax^2+bx+c" />를{" "}
                                    <InlineMath math="(x-\alpha)(x-\beta)" />로 나눈 나머지는{" "}
                                    <InlineMath math="mx+n" />입니다.
                                </p>
                            </Step>

                            <Step title="⑤ 근과 계수의 관계">
                                <BlockMath math="\alpha+\beta=-\frac{b-m}{a}" />
                                <BlockMath math="\alpha\beta=\frac{c-n}{a}" />
                            </Step>

                            <Step title="⑥ 판별식">
                                <p>
                                    서로 다른 두 점에서 만나므로 정리된 이차방정식의 판별식은{" "}
                                    <InlineMath math="D>0" />입니다.
                                </p>
                            </Step>
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
                            두 이차함수
                        </p>

                        <BlockMath math="y=x^2+2x-3,\qquad y=-3x^2+4x-2" />

                        <p className="leading-8 text-gray-300">
                            의 그래프의 교점의 <InlineMath math="x" />좌표의 합을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                교점의 <InlineMath math="x" />좌표는 두 함숫값이 같아지는 <InlineMath math="x" />의 값입니다.
                            </p>

                            <BlockMath math="x^2+2x-3=-3x^2+4x-2" />

                            <p>
                                한쪽으로 이항하면
                            </p>

                            <BlockMath math="4x^2-2x-1=0" />

                            <p>
                                이 방정식의 두 근이 교점의 <InlineMath math="x" />좌표입니다.
                            </p>

                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="x_1+x_2=\frac{2}{4}=\frac12" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\frac12" />

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

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.8fr_1fr]">

                            {/* 문제 내용 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 두 함수 <InlineMath math="y=ax^2+bx+c" />, <InlineMath math="y=mx+n" />
                                    의 그래프이다.
                                </p>

                                <p className="mt-5 font-semibold text-white">
                                    (1) 다음 부호를 판정하여라.
                                </p>

                                <div className="mt-3 space-y-2 text-gray-300">
                                    <p>① <InlineMath math="a+b+c" /></p>
                                    <p>② <InlineMath math="a-b+c" /></p>
                                    <p>③ <InlineMath math="m+n" /></p>
                                    <p>④ <InlineMath math="m-n" /></p>
                                    <p>⑤ <InlineMath math="b^2-4ac" /></p>
                                </div>

                                <p className="mt-6 font-semibold text-white">
                                    (2) <InlineMath math="\alpha+\beta,\ \alpha\beta" />
                                    를 <InlineMath math="a,b,c,m,n" />
                                    으로 나타내어라.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/2.30_1.png"
                                    alt="그래프"
                                    className="w-full max-w-sm"
                                />

                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="font-semibold text-white">
                                (1) 부호 판정
                            </p>

                            <p>
                                <InlineMath math="a+b+c=f(1)" />이고,
                                그림에서 <InlineMath math="x=1" />일 때 포물선은 <InlineMath math="x" />축 위에 있으므로
                            </p>

                            <BlockMath math="a+b+c>0" />

                            <p>
                                <InlineMath math="a-b+c=f(-1)" />이고,
                                그림에서 <InlineMath math="x=-1" />일 때 포물선은 <InlineMath math="x" />축 아래에 있으므로
                            </p>

                            <BlockMath math="a-b+c<0" />

                            <p>
                                <InlineMath math="m+n" />은 직선의 <InlineMath math="x=1" />에서의 함숫값이다.
                                그림에서 양수이므로
                            </p>

                            <BlockMath math="m+n>0" />

                            <p>
                                <InlineMath math="m-n" />은 직선의 <InlineMath math="x=-1" />에서의 함숫값이다.
                                그림에서 양수이므로
                            </p>

                            <BlockMath math="m-n>0" />

                            <p>
                                포물선은 <InlineMath math="x" />축과 서로 다른 두 점에서 만나므로
                            </p>

                            <BlockMath math="b^2-4ac>0" />

                            <hr className="border-white/10" />

                            <p className="font-semibold text-white">
                                (2) <InlineMath math="\alpha+\beta,\ \alpha\beta" />를 <InlineMath math="a,b,c,m,n" />으로 나타내기
                            </p>

                            <p>
                                교점의 <InlineMath math="x" />좌표는 두 함수를 같게 한
                                방정식의 두 근입니다.
                            </p>

                            <BlockMath math="ax^2+bx+c=mx+n" />

                            <BlockMath math="ax^2+(b-m)x+(c-n)=0" />

                            <p>
                                이 방정식의 두 근이 <InlineMath math="\alpha,\beta" />이므로
                                근과 계수의 관계를 이용하면
                            </p>

                            <BlockMath math="\alpha+\beta=-\frac{b-m}{a}=\frac{m-b}{a}" />

                            <BlockMath math="\alpha\beta=\frac{c-n}{a}" />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    정리
                                </p>

                                <BlockMath math="①\ a+b+c>0" />

                                <BlockMath math="②\ a-b+c<0" />

                                <BlockMath math="③\ m+n>0" />

                                <BlockMath math="④\ m-n>0" />

                                <BlockMath math="⑤\ b^2-4ac>0" />

                                <BlockMath math="\alpha+\beta=\frac{m-b}{a},\qquad \alpha\beta=\frac{c-n}{a}" />

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
                            이차함수 <InlineMath math="y=x^2+a" />의 그래프와
                            직선 <InlineMath math="y=bx" />가 두 점 <InlineMath math="A,\ B" />에서 만나고,
                            점 <InlineMath math="A" />의 <InlineMath math="x" />좌표가 <InlineMath math="2+\sqrt2" />일 때,
                            유리수 <InlineMath math="a,\ b" />에 대하여 <InlineMath math="a+b" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                교점의 <InlineMath math="x" />좌표는 두 식을 같게 한 방정식의 해입니다.
                            </p>

                            <BlockMath math="x^2+a=bx" />

                            <BlockMath math="x^2-bx+a=0" />

                            <p>
                                이 방정식의 한 근이 <InlineMath math="2+\sqrt2" />입니다.
                                그런데 <InlineMath math="a,b" />가 유리수이므로 다른 근은
                                켤레인 <InlineMath math="2-\sqrt2" />입니다.
                            </p>

                            <BlockMath math="\alpha=2+\sqrt2,\qquad \beta=2-\sqrt2" />

                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="\alpha+\beta=b,\qquad \alpha\beta=a" />

                            <BlockMath math="b=4,\qquad a=(2+\sqrt2)(2-\sqrt2)=2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a+b=2+4=6" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">

                            {/* 문제 내용 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 이차함수 <InlineMath math="y=x^2+b" />
                                    의 그래프와 <br />직선 <InlineMath math="y=ax" />
                                    가 서로 다른 두 점에서 만나고,
                                    한 교점의 <InlineMath math="x" />
                                    좌표가 <InlineMath math="2+\sqrt3" />
                                    일 때,
                                    유리수 <InlineMath math="a,b" />
                                    에 대하여 <InlineMath math="a+b" />
                                    의 값을 구하여라.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/2.30_2.png"
                                    alt="직선과 이차함수의 교점"
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
                                교점의 <InlineMath math="x" />좌표는
                                두 식을 같게 한 방정식의 근입니다.
                            </p>

                            <BlockMath math="x^2+b=ax" />

                            <BlockMath math="x^2-ax+b=0" />

                            <p>
                                한 근이 <InlineMath math="2+\sqrt3" />
                                이고, <InlineMath math="a,b" />
                                가 유리수이므로
                                다른 근은 켤레근
                            </p>

                            <BlockMath math="2-\sqrt3" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="a=(2+\sqrt3)+(2-\sqrt3)=4" />

                            <BlockMath math="b=(2+\sqrt3)(2-\sqrt3)=1" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a+b=4+1=5" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 내용 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 이차함수 <InlineMath math="y=x^2+ax-5" />
                                    의 그래프와 <br />직선 <InlineMath math="y=x+b" />
                                    가 서로 다른 두 점에서 만나고,
                                    교점의 <InlineMath math="x" />좌표가 <InlineMath math="-3,\ 2" />
                                    일 때,
                                    상수 <InlineMath math="a,b" />에 대하여 <InlineMath math="a+b" />의 값을 구하여라.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/2.30_3.png"
                                    alt="이차함수와 직선의 교점"
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
                                교점의 <InlineMath math="x" />좌표는 두 식을 같게 한 방정식의 근입니다.
                            </p>

                            <BlockMath math="x^2+ax-5=x+b" />

                            <BlockMath math="x^2+(a-1)x-(b+5)=0" />

                            <p>
                                그림에서 두 근은
                            </p>

                            <BlockMath math="-3,\qquad 2" />

                            <p>
                                이므로 근과 계수의 관계를 이용하면
                            </p>

                            <BlockMath math="-3+2=1-a" />

                            <BlockMath math="-6=-(b+5)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a=0,\qquad b=1" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a+b=0+1=1" />

                            </div>

                        </div>

                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="y=2x+k" />
                            가 이차함수 <InlineMath math="y=x^2" />
                            의 그래프와 서로 다른 두 점에서 만나고,
                            이 두 점 사이의 거리가 <InlineMath math="2\sqrt{10}" />
                            일 때,
                            상수 <InlineMath math="k" />의 값을 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                교점의 <InlineMath math="x" />좌표를
                                <InlineMath math="\alpha,\beta" />라 하면
                            </p>

                            <BlockMath math="x^2=2x+k" />

                            <BlockMath math="x^2-2x-k=0" />

                            <p>
                                이 방정식의 두 근이
                                <InlineMath math="\alpha,\beta" />입니다.
                            </p>

                            <p>
                                두 교점은
                            </p>

                            <BlockMath math="(\alpha,\alpha^2),\qquad(\beta,\beta^2)" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                직선 위의 두 점이므로
                            </p>

                            <BlockMath math="\beta^2-\alpha^2=2(\beta-\alpha)" />

                            <p>
                                따라서 두 점 사이의 거리는
                            </p>

                            <BlockMath math="\sqrt{(\beta-\alpha)^2+\{2(\beta-\alpha)\}^2}" />

                            <BlockMath math="\sqrt5\,|\beta-\alpha|" />

                            <p>
                                이것이 <InlineMath math="2\sqrt{10}" />
                                이므로
                            </p>

                            <BlockMath math="\sqrt5\,|\beta-\alpha|=2\sqrt{10}" />

                            <BlockMath math="|\beta-\alpha|=2\sqrt2" />

                            <p>
                                또
                            </p>

                            <BlockMath math="(\beta-\alpha)^2=(\alpha+\beta)^2-4\alpha\beta" />

                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="\alpha+\beta=2,\qquad \alpha\beta=-k" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="8=2^2-4(-k)" />

                            <BlockMath math="8=4+4k" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k=1" />

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
                            이차함수 <InlineMath math="f(x)=x^2-2ax" />
                            의 그래프와 직선 <InlineMath math="y=2x+1" />이
                            서로 다른 두 점에서 만날 때,
                            두 교점 사이의 거리의 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                교점의 <InlineMath math="x" />좌표를 <InlineMath math="\alpha,\beta" />라고 하면
                            </p>

                            <BlockMath math="x^2-2ax=2x+1" />
                            <BlockMath math="x^2-2(a+1)x-1=0" />

                            <p>이 방정식의 두 근이 교점의 <InlineMath math="x" />좌표입니다.</p>

                            <BlockMath math="\alpha+\beta=2(a+1),\qquad \alpha\beta=-1" />

                            <p>
                                두 교점은 직선 <InlineMath math="y=2x+1" /> 위에 있으므로,
                                <InlineMath math="x" />좌표 차가 <InlineMath math="|\alpha-\beta|" />이면
                                <InlineMath math="y" />좌표 차는 <InlineMath math="2|\alpha-\beta|" />입니다.
                            </p>

                            <BlockMath math="\text{거리}=\sqrt{(\alpha-\beta)^2+\{2(\alpha-\beta)\}^2}" />
                            <BlockMath math="=\sqrt5|\alpha-\beta|" />

                            <p>
                                이제 <InlineMath math="(\alpha-\beta)^2" />을 구하면
                            </p>

                            <BlockMath math="(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta" />
                            <BlockMath math="=\{2(a+1)\}^2-4(-1)" />
                            <BlockMath math="=4\{(a+1)^2+1\}" />

                            <p>
                                따라서 거리의 제곱은
                            </p>

                            <BlockMath math="5(\alpha-\beta)^2=20\{(a+1)^2+1\}" />

                            <p>
                                이 값은 <InlineMath math="a=-1" />일 때 가장 작습니다.
                            </p>

                            <BlockMath math="\text{최소 거리}=\sqrt{20}=2\sqrt5" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="2\sqrt5" />
                            </div>
                        </div>
                    </details>
                </div>


                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x^2" />의 계수가 <InlineMath math="1" />인
                                    두 이차함수 <InlineMath math="y=f(x)" />, <InlineMath math="y=g(x)" />의 그래프가 오른쪽 그림과 같을 때,
                                    방정식 <InlineMath math="f(x)=2g(x)" />의 모든 근의 합을 구하여라.
                                </p>

                                <div className="mt-5 space-y-2 text-gray-300">
                                    <p>① <InlineMath math="\alpha+\beta-2\gamma" /></p>
                                    <p>② <InlineMath math="\alpha+2\beta-\gamma" /></p>
                                    <p>③ <InlineMath math="\alpha-\beta+2\gamma" /></p>
                                    <p>④ <InlineMath math="2\alpha-\beta+\gamma" /></p>
                                    <p>⑤ <InlineMath math="2(\alpha+\beta-\gamma)" /></p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.30_7.png"
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
                                그래프에서 <InlineMath math="f(x)" />의 두 근은 <InlineMath math="\alpha,\beta" />이고, <InlineMath math="g(x)" />의 두 근은 <InlineMath math="\alpha,\gamma" />입니다.
                            </p>

                            <p>
                                두 이차함수의 <InlineMath math="x^2" />의 계수가 모두
                                <InlineMath math="1" />이므로
                            </p>

                            <BlockMath math="f(x)=(x-\alpha)(x-\beta)" />

                            <BlockMath math="g(x)=(x-\alpha)(x-\gamma)" />

                            <p>
                                이제 <InlineMath math="f(x)=2g(x)" />를 이용합니다.
                            </p>

                            <BlockMath math="(x-\alpha)(x-\beta)=2(x-\alpha)(x-\gamma)" />

                            <BlockMath math="(x-\alpha)\{(x-\beta)-2(x-\gamma)\}=0" />

                            <BlockMath math="(x-\alpha)(-x-\beta+2\gamma)=0" />

                            <p>
                                따라서 두 근은
                            </p>

                            <BlockMath math="x=\alpha,\qquad x=2\gamma-\beta" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 근의 합은
                                </p>

                                <BlockMath math="\alpha-\beta+2\gamma" />

                                <p className="mt-3 font-bold text-white">
                                    정답은 ③
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />의 교점의 <InlineMath math="x" />좌표는 방정식 <InlineMath math="f(x)=g(x)" />의 해입니다.
                        </p>

                        <p>
                            <InlineMath math="f(x)-g(x)=0" />의 해가 <InlineMath math="\alpha,\beta" />이면 <InlineMath math="f(x)-g(x)=a(x-\alpha)(x-\beta)" />입니다.
                        </p>

                        <p>
                            따라서 <InlineMath math="f(x)=a(x-\alpha)(x-\beta)+g(x)" />로 나타낼 수 있습니다.
                        </p>

                        <p>
                            이차함수와 직선이 서로 다른 두 점에서 만나면 <InlineMath math="D>0" />입니다.
                        </p>
                    </div>
                </div>


            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.31 중근을 갖는 이차방정식의 그래프 해석
                </h2>

                <p className="leading-8 text-gray-300">
                    2.29에서는 서로 다른 두 실근을 갖는 이차방정식을 그래프로 해석했습니다.<br />
                    이번에는 중근을 갖는 이차방정식을 그래프로 해석해 봅시다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        중근을 갖는 방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        방정식 <InlineMath math="x^2-4x+4=0" />은
                    </p>

                    <BlockMath math="(x-2)^2=0" />

                    <p className="leading-8 text-gray-300">
                        으로 나타낼 수 있으므로, 해는
                    </p>

                    <BlockMath math="x=2" />

                    <p className="leading-8 text-gray-300">
                        입니다. 이처럼 같은 해가 두 번 나오는 경우를 중근이라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-purple-300">
                        방정식의 그래프 해석
                    </h3>

                    <p className="leading-8 text-gray-300">
                        방정식 <InlineMath math="x^2-4x+4=0" />도 <br />좌변과 우변을 어떻게
                        나누느냐에 따라 여러 가지 두 함수의 교점으로 해석할 수 있습니다.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">① <InlineMath math="x" />축과 만나는 경우</p>
                            <BlockMath math="y=x^2-4x+4,\qquad y=0" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">② 좌변과 우변으로 나누기</p>
                            <BlockMath math="y=x^2-5x+1,\qquad y=-x-3" />
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="mb-2 font-bold text-white">③ 다른 형태로 나누기</p>
                            <BlockMath math="y=2x^2-4,\qquad y=x^2+4x" />
                        </div>
                    </div>

                    <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="text-lg font-bold text-yellow-300">
                            핵심
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            좌변과 우변을 어떻게 나누더라도 원래 방정식은 같으므로,
                            교점의 <InlineMath math="x" />좌표는 항상 같습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            특히 중근을 갖는 경우에는 두 그래프가 항상 한 점에서 만납니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        서로 다른 두 실근과 중근의 차이
                    </h3>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <h4 className="mb-3 text-lg font-bold text-blue-300">
                                서로 다른 두 실근
                            </h4>

                            <BlockMath math="(x-\alpha)(x-\beta)=0\quad(\alpha\ne\beta)" />

                            <p className="leading-8 text-gray-300">
                                두 그래프는 서로 다른 두 <InlineMath math="x" />좌표에서 만납니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <h4 className="mb-3 text-lg font-bold text-green-300">
                                중근
                            </h4>

                            <BlockMath math="(x-\alpha)^2=0" />

                            <p className="leading-8 text-gray-300">
                                두 그래프는 하나의 <InlineMath math="x" />좌표에서 한 점으로 만납니다.
                            </p>
                        </div>
                    </div>
                </div>

                <EquationFunctionRelationExplorer2 />

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • 중근을 갖는 이차방정식은 <InlineMath math="(x-\alpha)^2=0" />의
                            형태로 나타낼 수 있습니다.
                        </p>

                        <p>
                            • 좌변과 우변을 어떻게 나누더라도 교점의 <InlineMath math="x" />좌표는 변하지 않습니다.
                        </p>

                        <p>
                            • 중근인 경우 두 그래프는 항상 한 점에서 만나는 형태가 됩니다.
                        </p>

                        <p>
                            • 이 관점은 이후 접선의 방정식으로 자연스럽게 이어집니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.32 그래프를 수식으로
                </h2>

                <p className="leading-8 text-gray-300">
                    2.31에서는 중근을 갖는 방정식을 그래프로 해석했습니다.
                    <br />
                    이번에는 접하는 그래프에서 얻은 정보를 이용하여 수식을 만들어 보겠습니다.
                </p>

                <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5">
                        <img
                            src="/images/Eq_to_graph_3.png"
                            alt="접하는 두 그래프"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                        <h3 className="mb-5 text-xl font-bold text-blue-300">
                            그래프에서 방정식으로
                        </h3>

                        <div className="space-y-6">
                            <Step title={<> ① 교점의 <InlineMath math="x" />좌표</>}>
                                <p>
                                    <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />가 한 점에서 만나고,
                                    교점의 <InlineMath math="x" />좌표를 <InlineMath math="\alpha" />라 하자.
                                </p>
                            </Step>

                            <Step title="② 방정식의 해">
                                <BlockMath math="f(x)=g(x)" />
                                <p>
                                    이 방정식은 <InlineMath math="x=\alpha" />를 해로 갖습니다.
                                </p>
                            </Step>

                            <Step title="③ 한쪽으로 이항">
                                <BlockMath math="f(x)-g(x)=0" />
                                <p>
                                    이 방정식도 <InlineMath math="x=\alpha" />를 해로 갖습니다.
                                </p>
                            </Step>

                            <Step title="④ 중근을 이용해 방정식 작성">
                                <BlockMath math="a(x-\alpha)^2=0" />
                            </Step>

                            <Step title="⑤ 왼쪽 식과 비교">
                                <BlockMath math="f(x)-g(x)=a(x-\alpha)^2" />
                            </Step>

                            <Step title="⑥ 함수식으로 정리">
                                <BlockMath math="f(x)=a(x-\alpha)^2+g(x)" />
                            </Step>

                            <Step title="⑦ 나머지정리로 해석">
                                <p>
                                    <InlineMath math="g(x)" />가 일차 이하의 식이면,
                                </p>
                                <p>
                                    <InlineMath math="f(x)" />를 <InlineMath math="(x-\alpha)^2" />로 나눈 나머지가{" "} <InlineMath math="g(x)" />입니다.
                                </p>
                            </Step>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-xl border border-dashed border-white/20 bg-white/5">
                        <img
                            src="/images/Eq_to_graph_4.png"
                            alt="이차함수와 접선"
                            className="w-full max-w-sm rounded-xl bg-white"
                        />
                    </div>

                    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                        <h3 className="mb-6 text-2xl font-bold text-green-300">
                            수식이 주어졌을 때 알 수 있는 것
                        </h3>

                        <div className="space-y-5">
                            <Step title="① 두 식을 같게 둔다">
                                <p>
                                    <InlineMath math="y=ax^2+bx+c" />와{" "}
                                    <InlineMath math="y=mx+n" />이 한 점에서 만나면,
                                    두 식의 값이 같아지는 <InlineMath math="x" />값은 하나입니다.
                                </p>

                                <BlockMath math="ax^2+bx+c=mx+n" />
                            </Step>

                            <Step title="② 한쪽으로 이항">
                                <p>모든 항을 왼쪽으로 옮기면 이차방정식이 됩니다.</p>

                                <BlockMath math="ax^2+(b-m)x+(c-n)=0" />
                            </Step>

                            <Step title="③ 중근으로 해석">
                                <p>
                                    교점의 <InlineMath math="x" />좌표가 <InlineMath math="\alpha" />이면
                                </p>

                                <BlockMath math="ax^2+(b-m)x+(c-n)=a(x-\alpha)^2" />
                            </Step>

                            <Step title="④ 다시 함수식으로 정리">
                                <BlockMath math="ax^2+bx+c=a(x-\alpha)^2+mx+n" />

                                <p>
                                    따라서 <InlineMath math="ax^2+bx+c" />를{" "}
                                    <InlineMath math="(x-\alpha)^2" />로 나눈 나머지는{" "}
                                    <InlineMath math="mx+n" />입니다.
                                </p>
                            </Step>

                            <Step title="⑤ 판별식">
                                <p>
                                    한 점에서 만나므로 정리된 이차방정식은 중근을 갖고,
                                    판별식은 <InlineMath math="D=0" />입니다.
                                </p>
                            </Step>
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
                            이차함수 <InlineMath math="y=-x^2+2" />
                            의 그래프와 접하고
                            기울기가 <InlineMath math="2" />
                            인 직선의 방정식이 <InlineMath math="y=ax+b" />
                            일 때,
                            상수 <InlineMath math="a,b" />
                            의 합 <InlineMath math="a+b" />
                            의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                기울기가 <InlineMath math="2" />
                                인 직선을
                            </p>

                            <BlockMath math="y=2x+k" />

                            <p>
                                라고 둡니다.
                            </p>

                            <p>
                                이 직선이 <InlineMath math="y=-x^2+2" />
                                와 접하므로
                            </p>

                            <BlockMath math="-x^2+2=2x+k" />

                            <BlockMath math="x^2+2x+k-2=0" />

                            <p>
                                접하므로 <InlineMath math="\dfrac{D}{4}=0" />
                                입니다.
                            </p>

                            <BlockMath math="\left(\frac{2}{2}\right)^2-(k-2)=0" />

                            <BlockMath math="1-k+2=0" />

                            <BlockMath math="k=3" />

                            <p>
                                따라서 접선의 방정식은
                            </p>

                            <BlockMath math="y=2x+3" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="a=2,\qquad b=3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a+b=5" />

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
                            이차함수 <InlineMath math="y=2x^2-3x+2" />
                            의 그래프 위의 점 <InlineMath math="(1,1)" />
                            에서 이 그래프에 접하는 직선의 방정식을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                점 <InlineMath math="(1,1)" />을 지나는 직선을
                            </p>

                            <BlockMath math="y=m(x-1)+1" />

                            <p>
                                로 둡니다.
                            </p>

                            <p>
                                이 직선이 포물선과 접하므로 두 식을 같게 한 방정식은 중근을 가져야 합니다.
                            </p>

                            <BlockMath math="2x^2-3x+2=m(x-1)+1" />

                            <BlockMath math="2x^2-(m+3)x+m+1=0" />

                            <p>
                                이 방정식은 접점의 <InlineMath math="x" />좌표인 <InlineMath math="1" />을 중근으로 가져야 합니다.
                            </p>

                            <BlockMath math="2x^2-(m+3)x+m+1=2(x-1)^2" />

                            <BlockMath math="2x^2-(m+3)x+m+1=2x^2-4x+2" />

                            <p>
                                계수를 비교하면
                            </p>

                            <BlockMath math="m+3=4" />

                            <BlockMath math="m=1" />

                            <p>
                                따라서 접선의 방정식은
                            </p>

                            <BlockMath math="y=x" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="y=x" />
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
                            점 <InlineMath math="(-2,1)" />
                            을 지나고
                            이차함수 <InlineMath math="y=-x^2+5x+3" />
                            의 그래프와 접하는 두 직선의
                            기울기의 곱을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                점 <InlineMath math="(-2,1)" />
                                을 지나는 직선을
                            </p>

                            <BlockMath math="y=m(x+2)+1" />

                            <p>
                                이라고 둡니다.
                            </p>

                            <p>
                                이 직선이 포물선과 접하므로
                            </p>

                            <BlockMath math="-x^2+5x+3=m(x+2)+1" />

                            <BlockMath math="x^2-(5-m)x+(2m-2)=0" />

                            <p>
                                접하므로 <InlineMath math="D=0" />
                                입니다.
                            </p>

                            <BlockMath math="D=(5-m)^2-4(2m-2)=0" />

                            <BlockMath math="m^2-10m+25-8m+8=0" />

                            <BlockMath math="m^2-18m+33=0" />

                            <p>
                                두 접선의 기울기를 <InlineMath math="m_1,m_2" />
                                라 하면
                            </p>

                            <p>
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath math="m_1m_2=33" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="33" />

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
                            이차함수 <InlineMath math="y=x^2-2ax+a^2+2a-1" />
                            의 그래프가 <InlineMath math="a" />
                            의 값에 관계없이
                            직선 <InlineMath math="y=mx+n" />
                            과 접할 때,
                            상수 <InlineMath math="m,n" />
                            에 대하여 <InlineMath math="m+n" />
                            의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                두 식을 같게 하면
                            </p>

                            <BlockMath math="x^2-2ax+a^2+2a-1=mx+n" />

                            <BlockMath math="x^2-(2a+m)x+(a^2+2a-1-n)=0" />

                            <p>
                                항상 접하므로 판별식은 항상 <InlineMath math="0" />
                                입니다.
                            </p>

                            <BlockMath math="D=(2a+m)^2-4(a^2+2a-1-n)=0" />

                            <BlockMath math="=4(m-2)a+m^2+4n+4" />

                            <p>
                                이 식이 모든 <InlineMath math="a" />
                                에 대하여 <InlineMath math="0" />
                                이므로
                            </p>

                            <BlockMath math="4(m-2)=0" />

                            <BlockMath math="m^2+4n+4=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="m=2" />

                            <BlockMath math="4+4n+4=0" />

                            <BlockMath math="n=-2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="m+n=2+(-2)=0" />

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
                            두 포물선 <InlineMath math="y=2x^2" />, <InlineMath math="y=x^2+1" />
                            의 공통접선의 방정식을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                공통접선을 <InlineMath math="y=mx+n" />
                                이라고 둡니다.
                            </p>

                            <p>
                                먼저 <InlineMath math="y=2x^2" />
                                와 접하므로
                            </p>

                            <BlockMath math="2x^2=mx+n" />
                            <BlockMath math="2x^2-mx-n=0" />

                            <p>
                                이 방정식은 중근을 가져야 하므로
                            </p>

                            <BlockMath math="D=m^2+8n=0" />

                            <p>
                                또 <InlineMath math="y=x^2+1" />
                                과도 접하므로
                            </p>

                            <BlockMath math="x^2+1=mx+n" />
                            <BlockMath math="x^2-mx+1-n=0" />

                            <p>
                                이 방정식도 중근을 가져야 하므로
                            </p>

                            <BlockMath math="D=m^2-4(1-n)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="m^2+8n=0" />
                            <BlockMath math="m^2-4+4n=0" />

                            <p>
                                두 식을 빼면
                            </p>

                            <BlockMath math="4+4n=0" />
                            <BlockMath math="n=-1" />

                            <p>
                                그러므로
                            </p>

                            <BlockMath math="m^2=8" />
                            <BlockMath math="m=\pm2\sqrt2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 공통접선은
                                </p>

                                <BlockMath math="y=2\sqrt2x-1,\qquad y=-2\sqrt2x-1" />
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
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x^2" />의 계수가 <InlineMath math="1" />인
                                    두 이차함수 <InlineMath math="y=f(x)" />, <InlineMath math="y=g(x)" />의 그래프가 오른쪽 그림과 같이
                                    직선 <InlineMath math="y=mx+n" />에 각각
                                    점 <InlineMath math="(\alpha,f(\alpha))" />, <InlineMath math="(\beta,g(\beta))" />에서 접할 때,
                                    두 곡선 <InlineMath math="y=f(x)" />, <InlineMath math="y=g(x)" />의 교점의 <InlineMath math="x" />좌표를 구하여라.
                                    단, <InlineMath math="\alpha\ne\beta" />이다.
                                </p>

                                <div className="mt-5 grid grid-cols-1 gap-2 text-gray-300 sm:grid-cols-2">
                                    <p>① <InlineMath math="\frac{2\alpha+\beta}{3}" /></p>
                                    <p>② <InlineMath math="\frac{\alpha+2\beta}{3}" /></p>
                                    <p>③ <InlineMath math="\frac{2\alpha+\beta}{2}" /></p>
                                    <p>④ <InlineMath math="\frac{\alpha+2\beta}{2}" /></p>
                                    <p>⑤ <InlineMath math="\frac{\alpha+\beta}{2}" /></p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.32_6.png"
                                    alt="두 이차함수와 공통 접선"
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
                                직선 <InlineMath math="y=mx+n" />과 접한다는 것은
                                두 그래프의 차가 중근을 갖는다는 뜻입니다.
                            </p>

                            <p>
                                <InlineMath math="f(x)" />는 <InlineMath math="x=\alpha" />에서 직선과 접하고, <InlineMath math="x^2" />의 계수가 <InlineMath math="1" />이므로
                            </p>

                            <BlockMath math="f(x)-(mx+n)=(x-\alpha)^2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=mx+n+(x-\alpha)^2" />

                            <p>
                                같은 이유로
                            </p>

                            <BlockMath math="g(x)=mx+n+(x-\beta)^2" />

                            <p>
                                두 곡선의 교점에서는 <InlineMath math="f(x)=g(x)" />이므로
                            </p>

                            <BlockMath math="mx+n+(x-\alpha)^2=mx+n+(x-\beta)^2" />

                            <BlockMath math="(x-\alpha)^2=(x-\beta)^2" />

                            <BlockMath math="x-\alpha=-(x-\beta)" />

                            <BlockMath math="2x=\alpha+\beta" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="x=\frac{\alpha+\beta}{2}" />

                                <p className="mt-3 font-bold text-white">
                                    정답은 ⑤
                                </p>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            <InlineMath math="y=f(x)" />와 <InlineMath math="y=g(x)" />가 한 점에서 만나면
                            방정식 <InlineMath math="f(x)=g(x)" />는 중근을 갖습니다.
                        </p>

                        <p>
                            <InlineMath math="f(x)-g(x)=0" />의 중근이 <InlineMath math="\alpha" />이면{" "}
                            <InlineMath math="f(x)-g(x)=a(x-\alpha)^2" />입니다.
                        </p>

                        <p>
                            따라서 <InlineMath math="f(x)=a(x-\alpha)^2+g(x)" />로 나타낼 수 있습니다.
                        </p>

                        <p>
                            이차함수와 직선이 한 점에서 만나면 <InlineMath math="D=0" />입니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.33 절댓값 기호가 포함된 함수의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    절댓값 기호가 포함된 함수는 먼저 절댓값 안의 식이 그대로 유지되는
                    <span className="font-bold text-white"> 동치영역</span>을 그리고,
                    필요한 대칭을 추가하여 그래프를 완성합니다.
                </p>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-5 text-2xl font-bold text-purple-300">
                        동치영역과 대칭
                    </h3>

                    <div className="space-y-5">
                        <Step title="① 원형 함수">
                            <BlockMath math="y=f(x)" />
                            <p>
                                먼저 기준이 되는 원형 함수의 그래프를 생각합니다.
                            </p>
                        </Step>

                        <Step title={<> ② <InlineMath math="x" />에 절댓값이 있는 경우</>}>
                            <BlockMath math="y=f(|x|)" />
                            <p>
                                <InlineMath math="|x|=x" />가 되는 동치영역은{" "}
                                <InlineMath math="x\ge 0" />입니다.
                            </p>
                            <p>
                                먼저 <InlineMath math="x\ge 0" />의 그래프를 그리고,
                                그 그래프를 <InlineMath math="y" />축에 대칭하여 완성합니다.
                            </p>
                        </Step>

                        <Step title={<> ③ <InlineMath math="y" />에 절댓값이 있는 경우</>}>
                            <BlockMath math="|y|=f(x)" />
                            <p>
                                <InlineMath math="|y|=y" />가 되는 동치영역은{" "}
                                <InlineMath math="y\ge 0" />입니다.
                            </p>
                            <p>
                                먼저 <InlineMath math="y\ge 0" />의 그래프를 그리고,
                                그 그래프를 <InlineMath math="x" />축에 대칭하여 완성합니다.
                            </p>
                        </Step>

                        <Step title={<>④ <InlineMath math="x" />와 <InlineMath math="y" />에 모두 절댓값이 있는 경우"</>}>
                            <BlockMath math="|y|=f(|x|)" />
                            <p>
                                <InlineMath math="|x|=x" />, <InlineMath math="|y|=y" />가 되는
                                동치영역은 <InlineMath math="x\ge0,\ y\ge0" />입니다.
                            </p>
                            <p>
                                먼저 <InlineMath math="x\ge0,\ y\ge0" />의 그래프를 그리고, <InlineMath math="x" />축 대칭을 추가한 뒤, <InlineMath math="y" />축 대칭을 추가합니다.
                            </p>
                        </Step>

                        <Step title="⑤ 함수값에 절댓값이 있는 경우">
                            <BlockMath math="y=|f(x)|" />
                            <p>
                                먼저 <InlineMath math="y=f(x)" />의 그래프를 그립니다.
                            </p>
                            <p>
                                그다음 <InlineMath math="x" />축 아래에 있는 부분을 <InlineMath math="x" />축에 대칭하여 위로 올립니다.
                            </p>
                        </Step>
                    </div>
                </div>

                {/* 여기에 직접 움직여 보기 컴포넌트 */}
                <AbsoluteValueGraphExplorer />

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="a|x|+3|y|=9" />
                            의 그래프가 나타내는 도형의 넓이가 <InlineMath math="36" />
                            일 때,
                            양수 <InlineMath math="a" />
                            의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                그래프는 마름모 모양입니다.
                            </p>

                            <p>
                                <InlineMath math="y=0" />을 대입하면
                            </p>

                            <BlockMath math="a|x|=9" />

                            <BlockMath math="|x|=\frac9a" />

                            <p>
                                따라서 <InlineMath math="x" />축과 만나는 점은
                            </p>

                            <BlockMath math="\left(\pm\frac9a,0\right)" />

                            <p>
                                또, <InlineMath math="x=0" />을 대입하면
                            </p>

                            <BlockMath math="3|y|=9" />

                            <BlockMath math="|y|=3" />

                            <p>
                                따라서 <InlineMath math="y" />축과 만나는 점은
                            </p>

                            <BlockMath math="(0,\pm3)" />

                            <p>
                                마름모의 두 대각선의 길이는
                            </p>

                            <BlockMath math="\frac{18}{a},\qquad 6" />

                            <p>
                                넓이는
                            </p>

                            <BlockMath math="\frac12\times\frac{18}{a}\times6=36" />

                            <BlockMath math="\frac{54}{a}=36" />

                            <BlockMath math="a=\frac32" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a=\frac32" />

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

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    함수 <InlineMath math="y=f(x)" />
                                    의 그래프가 오른쪽 그림과 같을 때,
                                    다음 식의 그래프를 그려라.
                                </p>

                                <div className="mt-5 space-y-3 text-gray-300">

                                    <p>(1) <InlineMath math="y=|f(x)|" /></p>

                                    <p>(2) <InlineMath math="y=f(|x|)" /></p>

                                    <p>(3) <InlineMath math="|y|=f(x)" /></p>

                                    <p>(4) <InlineMath math="|y|=f(|x|)" /></p>

                                </div>

                            </div>

                            {/* 원래 그래프 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/2.33_2.png"
                                    alt="원래 그래프"
                                    className="w-full max-w-sm"
                                />

                            </div>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    (1) <InlineMath math="y=|f(x)|" />
                                </p>

                                <p className="mb-4 leading-8">
                                    <InlineMath math="x" />축 아래에 있는 부분을 <InlineMath math="x" />축에 대하여 대칭시킵니다.
                                </p>

                                <img
                                    src="/images/2.33_2_1.png"
                                    alt="y=|f(x)| 그래프"
                                    className="mx-auto w-full max-w-[360px] rounded-lg bg-white p-2"
                                />
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    (2) <InlineMath math="y=f(|x|)" />
                                </p>

                                <p className="mb-4 leading-8">
                                    <InlineMath math="y" />축 오른쪽 그래프를 남기고,
                                    그것을 <InlineMath math="y" />축에 대하여 왼쪽으로 대칭시킵니다.
                                </p>

                                <img
                                    src="/images/2.33_2_2.png"
                                    alt="y=f(|x|) 그래프"
                                    className="mx-auto w-full max-w-[360px] rounded-lg bg-white p-2"
                                />
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    (3) <InlineMath math="|y|=f(x)" />
                                </p>

                                <p className="mb-4 leading-8">
                                    먼저 <InlineMath math="f(x)\ge0" />인 부분만 남깁니다.
                                    그 부분을 <InlineMath math="x" />축에 대하여 대칭시킵니다.
                                </p>

                                <img
                                    src="/images/2.33_2_3.png"
                                    alt="|y|=f(x) 그래프"
                                    className="mx-auto w-full max-w-[360px] rounded-lg bg-white p-2"
                                />
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    (4) <InlineMath math="|y|=f(|x|)" />
                                </p>

                                <p className="mb-4 leading-8">
                                    먼저 <InlineMath math="y=f(|x|)" />를 만든 뒤, <InlineMath math="y\ge0" />인 부분을 <InlineMath math="x" />축에 대하여 대칭시킵니다.
                                </p>

                                <img
                                    src="/images/2.33_2_4.png"
                                    alt="|y|=f(|x|) 그래프"
                                    className="mx-auto w-full max-w-[360px] rounded-lg bg-white p-2"
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
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=f(x)" />의 그래프가
                                    오른쪽 그림과 같을 때,
                                    방정식 <InlineMath math="|f(x)|=2" />의
                                    서로 다른 모든 실근의 합을 구하여라.
                                </p>

                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.33_3.png"
                                    alt="이차함수 그래프"
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
                                <InlineMath math="|f(x)|=2" />는
                                다음 두 방정식을 함께 생각하는 것과 같습니다.
                            </p>

                            <BlockMath math="f(x)=2\quad\text{또는}\quad f(x)=-2" />

                            <p>
                                그림에서 포물선은
                                <InlineMath math="x=1,\ 3" />에서 <InlineMath math="x" />축과 만나므로,
                                두 근의 중점은 <InlineMath math="2" />입니다.
                            </p>

                            <p>
                                따라서 대칭축은
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                또 꼭짓점은
                                <InlineMath math="(2,-2)" />이므로
                            </p>

                            <BlockMath math="f(2)=-2" />

                            <p>
                                즉, <InlineMath math="f(x)=-2" />의 해는
                                중근
                            </p>

                            <BlockMath math="x=2" />

                            <p>
                                하나입니다.
                            </p>

                            <p>
                                한편 <InlineMath math="f(x)=2" />의 두 해는
                                대칭축 <InlineMath math="x=2" />를 기준으로 대칭이므로,
                                두 해의 합은
                            </p>

                            <BlockMath math="2\cdot2=4" />

                            <p>
                                따라서 서로 다른 모든 실근의 합은
                            </p>

                            <BlockMath math="4+2=6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="6" />

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

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">

                            {/* 문제 내용 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=ax^2+bx+c" />
                                    의 그래프가 오른쪽 그림과 같을 때,
                                    다음 중 <InlineMath math="y=bx^2+a|x|+c" />
                                    의 그래프의 개형으로 알맞은 것을 고르시오.
                                </p>

                            </div>

                            {/* 원래 그래프 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.33_4.png"
                                    alt="원래 그래프"
                                    className="w-full max-w-sm"
                                />
                            </div>

                        </div>

                        {/* 보기 */}
                        <div className="mt-8">
                            <h4 className="mb-4 text-lg font-bold text-white">
                                보기
                            </h4>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        key={num}
                                        className="rounded-xl border border-white/10 bg-white p-4"
                                    >
                                        <p className="mb-3 text-center text-xl font-bold text-black">
                                            {num}
                                        </p>

                                        <img
                                            src={`/images/2.33_4_${num}.png`}
                                            alt={`보기 ${num}`}
                                            className="mx-auto w-full max-w-[220px]"
                                        />
                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 주어진 그래프에서 계수의 부호를 확인합니다.
                            </p>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    아래로 볼록이므로 <InlineMath math="a&gt;0" />
                                </li>

                                <li>
                                    <InlineMath math="y" />축을 오른쪽 아래로 통과하므로 <InlineMath math="b&lt;0" />
                                </li>

                                <li>
                                    <InlineMath math="y" />절편이 양수이므로 <InlineMath math="c&gt;0" />
                                </li>
                            </ul>

                            <hr className="border-white/10" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="y=bx^2+a|x|+c" />

                            <p>
                                에서는
                            </p>

                            <ul className="list-disc space-y-2 pl-6">
                                <li>
                                    <InlineMath math="b&lt;0" /> 이므로 아래로 볼록인 그래프입니다.
                                </li>

                                <li>
                                    <InlineMath math="a&gt;0" /> 이므로 <InlineMath math="|x|" />의 영향으로 <InlineMath math="x=0" />에서 뾰족한 점이 생깁니다.
                                </li>

                                <li>
                                    <InlineMath math="c&gt;0" /> 이므로 <InlineMath math="y" />절편은 양수입니다.
                                </li>
                            </ul>

                            <p>
                                이 조건을 모두 만족하는 것은 보기 <strong>②</strong>입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="{②}" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">
                        <p>
                            • <InlineMath math="x" />에 절댓값이 있으면 먼저 <InlineMath math="x\ge0" />의 그래프를 그리고 <InlineMath math="y" />축 대칭을 추가합니다.
                        </p>

                        <p>
                            • <InlineMath math="y" />에 절댓값이 있으면 먼저 <InlineMath math="y\ge0" />의 그래프를 그리고 <InlineMath math="x" />축 대칭을 추가합니다.
                        </p>

                        <p>
                            • <InlineMath math="y=|f(x)|" />는 <InlineMath math="x" />축 아래의 그래프를 위로 접어 올립니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* ===========================
    2.34 판별식의 활용
=========================== */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.34 판별식의 활용
                </h2>

                <p className="leading-8 text-gray-300">
                    판별식은 이차방정식의 해의 개수를 판단할 때만 사용하는 것이 아닙니다.
                    <br />
                    그래프의 교점 개수, 접하는 조건, 최대·최소 문제에서도 사용할 수 있습니다.
                </p>

                <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3">
                    <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                        <h3 className="mb-3 text-xl font-bold text-blue-300">
                            ① 해의 개수
                        </h3>

                        <BlockMath math="ax^2+bx+c=0" />

                        <div className="space-y-3 text-gray-300">
                            <p><InlineMath math="D>0" /> : 서로 다른 두 실근</p>
                            <p><InlineMath math="D=0" /> : 중근</p>
                            <p><InlineMath math="D<0" /> : 서로 다른 두 허근</p>
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                        <h3 className="mb-3 text-xl font-bold text-blue-300">
                            ② 교점의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 그래프의 교점은 두 식을 같게 한 방정식의 해입니다.
                        </p>

                        <BlockMath math="f(x)=g(x)" />

                        <p className="leading-8 text-gray-300">
                            이 방정식의 판별식을 이용하면 교점의 개수를 알 수 있습니다.
                        </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/10 p-5">
                        <h3 className="mb-3 text-xl font-bold text-blue-300">
                            ③ 최대·최소
                        </h3>

                        <p className="leading-8 text-gray-300">
                            식을 직접 이차함수로 정리하기 어려울 때,
                            가능한 값의 범위를 판별식으로 찾을 수 있습니다.
                        </p>

                        <BlockMath math="D\ge0" />

                        <p className="leading-8 text-gray-300">
                            실수 해가 존재해야 하는 조건을 이용합니다.
                        </p>
                    </div>
                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이차함수 <InlineMath math="y=x^2-2k(x-4)-15" />
                            의 그래프가 다음 조건을 만족하도록 하는 <InlineMath math="k" />의 값 또는 값의 범위를 구하여라.
                        </p>

                        <div className="mt-5 space-y-3 text-gray-300">
                            <p>(1) <InlineMath math="x" />축과 서로 다른 두 점에서 만난다.</p>
                            <p>(2) <InlineMath math="x" />축에 접한다.</p>
                            <p>(3) <InlineMath math="x" />축과 만나지 않는다.</p>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="x" />축과의 교점은
                            </p>

                            <BlockMath math="x^2-2k(x-4)-15=0" />

                            <p>
                                의 실근의 개수와 같습니다.
                            </p>

                            <BlockMath math="x^2-2kx+8k-15=0" />

                            <p>
                                판별식을 이용하면
                            </p>

                            <BlockMath math="\frac{D}{4}=k^2-(8k-15)" />

                            <BlockMath math="=k^2-8k+15" />

                            <BlockMath math="=(k-3)(k-5)" />

                            <hr className="border-white/10" />

                            <p className="font-bold text-white">
                                (1) 서로 다른 두 점에서 만날 때
                            </p>

                            <BlockMath math="\frac{D}{4}>0" />

                            <BlockMath math="(k-3)(k-5)>0" />

                            <BlockMath math="k<3\quad\text{또는}\quad k>5" />

                            <hr className="border-white/10" />

                            <p className="font-bold text-white">
                                (2) <InlineMath math="x" />축에 접할 때
                            </p>

                            <BlockMath math="\frac{D}{4}=0" />

                            <BlockMath math="(k-3)(k-5)=0" />

                            <BlockMath math="k=3,\;5" />

                            <hr className="border-white/10" />

                            <p className="font-bold text-white">
                                (3) <InlineMath math="x" />축과 만나지 않을 때
                            </p>

                            <BlockMath math="\frac{D}{4}<0" />

                            <BlockMath math="(k-3)(k-5)<0" />

                            <BlockMath math="3<k<5" />
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\begin{aligned}
                                    (1)\;&k<3\ \text{또는}\ k>5\\[2mm]
                                    (2)\;&k=3,\;5\\[2mm]
                                    (3)\;&3<k<5
                                    \end{aligned}" />

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
                            실수 <InlineMath math="x,y" />에 대하여
                        </p>

                        <BlockMath math="x^2+2y^2-2xy-4=0" />

                        <p className="leading-8 text-gray-300">
                            을 만족할 때, <InlineMath math="x" />의 최댓값과 <InlineMath math="y" />의 최댓값의 합을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">
                            <div>
                                <p className="font-bold text-white">
                                    ① <InlineMath math="x" />의 최댓값
                                </p>

                                <p className="mt-3">
                                    주어진 식을 <InlineMath math="y" />에 대한 이차방정식으로 봅니다.
                                </p>

                                <BlockMath math="2y^2-2xy+x^2-4=0" />

                                <p>
                                    실수 <InlineMath math="y" />가 존재해야 하므로 판별식은
                                    <InlineMath math="0" /> 이상입니다.
                                </p>

                                <BlockMath math="\frac{D}{4}=x^2-2(x^2-4)\ge0" />

                                <BlockMath math="-x^2+8\ge0" />

                                <BlockMath math="-2\sqrt2\le x\le2\sqrt2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x_{\max}=2\sqrt2" />
                            </div>

                            <hr className="border-white/10" />

                            <div>
                                <p className="font-bold text-white">
                                    ② <InlineMath math="y" />의 최댓값
                                </p>

                                <p className="mt-3">
                                    이번에는 주어진 식을 <InlineMath math="x" />에 대한 이차방정식으로 봅니다.
                                </p>

                                <BlockMath math="x^2-2yx+2y^2-4=0" />

                                <p>
                                    실수 <InlineMath math="x" />가 존재해야 하므로 판별식은
                                    <InlineMath math="0" /> 이상입니다.
                                </p>

                                <BlockMath math="\frac{D}{4}=y^2-(2y^2-4)\ge0" />

                                <BlockMath math="-y^2+4\ge0" />

                                <BlockMath math="-2\le y\le2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="y_{\max}=2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="x_{\max}+y_{\max}=2\sqrt2+2" />
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
                            실수 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath math="\frac{6x}{x^2+1}" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값과 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                주어진 식의 값을 <InlineMath math="y" />라고 둡니다.
                            </p>

                            <BlockMath math="y=\frac{6x}{x^2+1}" />

                            <p>
                                양변에 <InlineMath math="x^2+1" />을 곱하면
                            </p>

                            <BlockMath math="yx^2-6x+y=0" />

                            <p>
                                이 식을 <InlineMath math="x" />에 대한 이차방정식으로 봅니다.
                                실수 <InlineMath math="x" />가 존재해야 하므로 판별식은 <InlineMath math="0" /> 이상입니다.
                            </p>

                            <BlockMath math="\frac{D}{4}=(-3)^2-y^2" />

                            <BlockMath math="9-y^2\ge0" />

                            <BlockMath math="-3\le y\le3" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=3,\qquad \text{최솟값}=-3" />
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
                            실수 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath math="\frac{x^2+ax+b}{x^2+1}" />

                        <p className="leading-8 text-gray-300">
                            의 최댓값이 <InlineMath math="3" />, 최솟값이 <InlineMath math="-1" />일 때, <InlineMath math="a,b" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                주어진 식의 값을 <InlineMath math="y" />라고 둡니다.
                            </p>

                            <BlockMath math="y=\frac{x^2+ax+b}{x^2+1}" />

                            <p>
                                양변에 <InlineMath math="x^2+1" />을 곱하면
                            </p>

                            <BlockMath math="yx^2+y=x^2+ax+b" />

                            <BlockMath math="(y-1)x^2-ax+(y-b)=0" />

                            <p>
                                실수 <InlineMath math="x" />가 존재해야 하므로 판별식은 <InlineMath math="0" /> 이상입니다.
                            </p>

                            <BlockMath math="D=a^2-4(y-1)(y-b)" />

                            <p>
                                최댓값이 <InlineMath math="3" />, 최솟값이 <InlineMath math="-1" />이므로 <InlineMath math="y=3" />, <InlineMath math="y=-1" />에서
                                판별식은 <InlineMath math="0" />입니다.
                            </p>

                            <BlockMath math="y=3\;:\quad a^2-4(3-1)(3-b)=0" />

                            <BlockMath math="a^2=8(3-b)" />

                            <BlockMath math="y=-1\;:\quad a^2-4(-1-1)(-1-b)=0" />

                            <BlockMath math="a^2=8(1+b)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="8(3-b)=8(1+b)" />

                            <BlockMath math="b=1" />

                            <p>
                                이를 대입하면
                            </p>

                            <BlockMath math="a^2=16" />

                            <BlockMath math="a=\pm4" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="(a,b)=(4,1),\;(-4,1)" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 생각
                    </h3>

                    <p className="leading-8 text-gray-300">
                        판별식은 결국 <InlineMath math="\text{실수 }x\text{가 존재하는가?}" />
                        를 판단하는 도구입니다.
                    </p>

                    <BlockMath math="D\ge0" />

                    <p className="leading-8 text-gray-300">
                        따라서 어떤 값이 가능하려면, 그 값을 만들 수 있는 실수 <InlineMath math="x" />가 존재해야 합니다.
                    </p>
                </div>
            </section>

            {/* ===========================
    2.35 그 외 이차함수의 활용
=========================== */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-3 text-3xl font-bold">
                    2.35 그 외 이차함수의 활용
                </h2>

                <p className="leading-8 text-gray-300">
                    지금까지 학습한 이차함수의 성질을 종합하여 해결하는 문제들입니다.
                    여러 단원의 개념을 함께 활용하는 연습을 해 봅시다.
                </p>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            실수 <InlineMath math="x,y,z" />에 대하여
                        </p>

                        <BlockMath math="x-1=\frac{y-5}{3}=\frac{z+1}{2}" />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="x^2+y^2+z^2" />의 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                공통된 값을 <InlineMath math="t" />라고 두면
                            </p>

                            <BlockMath math="x=1+t,\qquad y=5+3t,\qquad z=-1+2t" />

                            <p>
                                이를 <InlineMath math="x^2+y^2+z^2" />
                                에 대입하면
                            </p>

                            <BlockMath math="(1+t)^2+(5+3t)^2+(-1+2t)^2" />

                            <BlockMath math="=14t^2+28t+27" />

                            <BlockMath math="=14(t+1)^2+13" />

                            <p>
                                <InlineMath math="(t+1)^2\ge0" /> 이므로
                            </p>

                            <BlockMath math="14(t+1)^2+13\ge13" />

                            <p>
                                등호는 <InlineMath math="t=-1" />일 때 성립합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{13}" />

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
                            어떤 상품을 <InlineMath math="x" />개 생산하는 데 필요한 비용은
                        </p>

                        <BlockMath math="1000+x+\frac{x^2}{400}\text{ (원)}" />

                        <p className="leading-8 text-gray-300">
                            이고, 생산된 상품 <InlineMath math="x" />개를 모두 팔려면
                            한 개의 가격이
                        </p>

                        <BlockMath math="11-\frac{x}{100}\text{ (원)}" />

                        <p className="leading-8 text-gray-300">
                            이어야 한다.
                            몇 개의 상품을 생산하여 팔면 이익이 최대가 되겠는가?
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                판매금액은
                            </p>

                            <BlockMath math="x\left(11-\frac{x}{100}\right)" />

                            <p>
                                비용은
                            </p>

                            <BlockMath math="1000+x+\frac{x^2}{400}" />

                            <p>
                                따라서 이익은
                            </p>

                            <BlockMath math="\begin{aligned}
                                \text{이익}
                                &=\text{판매금액}-\text{비용} \\
                                &=x\left(11-\frac{x}{100}\right)-\left(1000+x+\frac{x^2}{400}\right) \\
                                &=-\frac{x^2}{80}+10x-1000
                                \end{aligned}" />

                            <p>
                                아래로 볼록인 이차함수이므로 꼭짓점에서 최댓값을 갖습니다.
                            </p>

                            <BlockMath math="x=-\frac{10}{2\left(-\frac1{80}\right)}=400" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{400\text{개}}" />
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
                            1인당 입장료가 <InlineMath math="600" />원인 어떤 공원의
                            하루 입장객은 <InlineMath math="4000" />명이다.
                            입장료가 <InlineMath math="50" />원씩 인상되면
                            하루 입장객이 <InlineMath math="200" />명씩 감소한다고 할 때,
                            하루 입장료 수입이 최대가 되게 하려면
                            1인당 입장료를 얼마 인상해야 하는가?
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                입장료를 <InlineMath math="50x" />원 인상한다고 둡니다.
                            </p>

                            <p>
                                그러면 1인당 입장료는
                            </p>

                            <BlockMath math="600+50x" />

                            <p>
                                하루 입장객 수는
                            </p>

                            <BlockMath math="4000-200x" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                하루 입장료 수입은
                            </p>

                            <BlockMath math="(600+50x)(4000-200x)" />

                            <BlockMath math="=-10000x^2+80000x+2400000" />

                            <p>
                                아래로 볼록인 이차함수이므로 꼭짓점에서 최댓값을 갖습니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath math="x=\frac{-80000}{2(-10000)}=4" />

                            <p>
                                따라서 입장료는
                            </p>

                            <BlockMath math="50x=50\cdot4=200" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{200\text{원}}" />
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
                            두 점 <InlineMath math="O(0,0)" />, <InlineMath math="A(2,4)" />와
                            이차함수 <InlineMath math="y=x^2" />의 그래프 위를 움직이는 점 <InlineMath math="P(t,t^2)" />에 대하여 삼각형 <InlineMath math="OAP" />의 넓이가 최대가 되는 <InlineMath math="t" />의 값을 구하여라.
                            단, <InlineMath math="0<t<2" />이다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                삼각형 <InlineMath math="OAP" />에서 <InlineMath math="OA" />는 고정되어 있습니다.
                            </p>

                            <p>
                                따라서 넓이가 최대가 되려면 점 <InlineMath math="P" />에서 직선 <InlineMath math="OA" />까지의 거리가 최대가 되어야 합니다.
                            </p>

                            <p>
                                직선 <InlineMath math="OA" />의 기울기는
                            </p>

                            <BlockMath math="\frac{4-0}{2-0}=2" />

                            <p>
                                이므로, <InlineMath math="OA" />와 평행한 직선은
                            </p>

                            <BlockMath math="y=2x+k" />

                            <p>
                                로 둘 수 있습니다.
                            </p>

                            <p>
                                이 직선이 포물선 <InlineMath math="y=x^2" />와 접할 때,
                                점 <InlineMath math="P" />는 직선 <InlineMath math="OA" />에서 가장 멀어집니다.
                            </p>

                            <p>
                                따라서
                                <InlineMath math="y=x^2" />와 <InlineMath math="y=2x+k" />가 접하도록 합니다.
                            </p>

                            <BlockMath math="x^2=2x+k" />

                            <BlockMath math="x^2-2x-k=0" />

                            <p>
                                접하므로 중근을 가져야 하므로
                            </p>

                            <BlockMath math="\frac{D}{4}=1+k=0" />

                            <BlockMath math="k=-1" />

                            <p>
                                따라서 접선은
                            </p>

                            <BlockMath math="y=2x-1" />

                            <p>
                                접점의 <InlineMath math="x" />좌표를 구하면
                            </p>

                            <BlockMath math="x^2=2x-1" />

                            <BlockMath math="x^2-2x+1=0" />

                            <BlockMath math="(x-1)^2=0" />

                            <BlockMath math="x=1" />

                            <p>
                                점 <InlineMath math="P" />는 <InlineMath math="(t,t^2)" />이므로 <InlineMath math="t=1" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{t=1}" />
                            </div>
                        </div>
                        <hr className="my-4 border-white/10" />
                        <ParallelTangentAreaExplorer />
                    </details>
                </div>

                {/* 예제 5 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            한 변의 길이가 <InlineMath math="1" />인 정사각형 <InlineMath math="ABCD" />의 변 <InlineMath math="AB,BC,CD,DA" /> 위에 각각 점 <InlineMath math="P,Q,R,S" />가 있다.
                        </p>

                        <BlockMath math="\overline{AP}=a,\quad \overline{BQ}=b,\quad \overline{CR}=c,\quad \overline{DS}=d" />

                        <p className="leading-8 text-gray-300">
                            이고 <InlineMath math="a+b+c+d=1" />일 때,
                            사각형 <InlineMath math="PQRS" />의 넓이의 최댓값과 최솟값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                정사각형의 넓이에서 네 모서리의 삼각형 넓이를 빼면
                                사각형 <InlineMath math="PQRS" />의 넓이를 구할 수 있습니다.
                            </p>

                            <BlockMath math="\begin{aligned}
                                [PQRS]
                                &=1-\frac12a(1-b)-\frac12b(1-c)-\frac12c(1-d)-\frac12d(1-a)
                                \end{aligned}" />

                            <p>
                                정리하면
                            </p>

                            <BlockMath math="[PQRS]=1-\frac12(a+b+c+d)+\frac12(ab+bc+cd+da)" />

                            <p>
                                그런데 <InlineMath math="a+b+c+d=1" />이므로
                            </p>

                            <BlockMath math="[PQRS]=\frac12+\frac12(ab+bc+cd+da)" />

                            <p>
                                여기서
                            </p>

                            <BlockMath math="ab+bc+cd+da=(a+c)(b+d)" />

                            <p>
                                입니다. <InlineMath math="a+c=t" />라고 두면 <InlineMath math="b+d=1-t" />이므로
                            </p>

                            <BlockMath math="[PQRS]=\frac12+\frac12t(1-t)" />

                            <p>
                                <InlineMath math="0\le t\le1" />에서 <InlineMath math="t(1-t)" />의 최댓값은 <InlineMath math="\frac14" />, 최솟값은 <InlineMath math="0" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{최댓값}=\frac12+\frac12\cdot\frac14=\frac58" />

                                <BlockMath math="\text{최솟값}=\frac12" />
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
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    그림과 같이 한 변의 길이가 <InlineMath math="2" />인 정사각형 <InlineMath math="ABCD" />의 세 변 <InlineMath math="AB,BC,CD" /> 위에 각각 점 <InlineMath math="P,Q,R" />가 있다.
                                    <br /><InlineMath math="6\overline{AP}=3\overline{BQ}=2\overline{CR}" />
                                    일 때, 삼각형 <InlineMath math="PQR" />의 넓이의 최솟값을 구하여라.
                                </p>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.35_6.png"
                                    alt="정사각형과 삼각형 PQR"
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
                                공통된 값을 <InlineMath math="t" />라고 두면
                            </p>

                            <BlockMath math="6\overline{AP}=3\overline{BQ}=2\overline{CR}=t" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\overline{AP}=\frac{t}{6},\qquad \overline{BQ}=\frac{t}{3},\qquad \overline{CR}=\frac{t}{2}" />

                            <p>
                                정사각형의 한 변의 길이가 <InlineMath math="2" />이므로 <InlineMath math="0\le t\le4" />입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                삼각형 <InlineMath math="PQR" />의 넓이는
                                사다리꼴 <InlineMath math="PBCR" />의 넓이에서
                                두 삼각형 <InlineMath math="PBQ" />, <InlineMath math="RCQ" />의 넓이를 빼서 구합니다.
                            </p>

                            <BlockMath math="[PQR]=[PBCR]-[PBQ]-[RCQ]" />

                            <p>
                                먼저
                            </p>

                            <BlockMath math="\overline{PB}=2-\frac{t}{6},\qquad \overline{RC}=\frac{t}{2},\qquad \overline{BC}=2" />

                            <p>
                                이므로 사다리꼴 <InlineMath math="PBCR" />의 넓이는
                            </p>

                            <BlockMath math="[PBCR]=\frac12\left(2-\frac{t}{6}+\frac{t}{2}\right)\cdot2" />

                            <BlockMath math="=2+\frac{t}{3}" />

                            <p>
                                또
                            </p>

                            <BlockMath math="[PBQ]=\frac12\left(2-\frac{t}{6}\right)\cdot\frac{t}{3}" />

                            <BlockMath math="=\frac{t}{3}-\frac{t^2}{36}" />

                            <BlockMath math="[RCQ]=\frac12\cdot\frac{t}{2}\left(2-\frac{t}{3}\right)" />

                            <BlockMath math="=\frac{t}{2}-\frac{t^2}{12}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\begin{aligned}
                                [PQR]
                                &=2+\frac{t}{3}
                                -\left(\frac{t}{3}-\frac{t^2}{36}\right)
                                -\left(\frac{t}{2}-\frac{t^2}{12}\right)\\
                                &=\frac{t^2}{9}-\frac{t}{2}+2
                                \end{aligned}" />

                            <p>
                                이제 <InlineMath math="0\le t\le4" />에서
                                이 이차함수의 최솟값을 구합니다.
                            </p>

                            <p>
                                꼭짓점의 <InlineMath math="t" />좌표는
                            </p>

                            <BlockMath math="t=\frac{\frac12}{2\cdot\frac19}=\frac94" />

                            <p>
                                이 값은 <InlineMath math="0\le t\le4" />에 포함됩니다.
                            </p>

                            <BlockMath math="[PQR]_{\min}=\frac19\left(\frac94\right)^2-\frac12\cdot\frac94+2" />

                            <BlockMath math="=\frac{23}{16}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{\frac{23}{16}}" />
                            </div>
                        </div>
                    </details>
                </div>
            </section>
        </>
    )
};