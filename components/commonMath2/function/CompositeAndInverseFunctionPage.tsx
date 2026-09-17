"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

function CompositeFunctionDiagram() {
    return (
        <div className="rounded-xl border border-white/10 bg-black/20 p-6">
            <div className="mx-auto w-full max-w-4xl">
                <svg
                    viewBox="0 0 1000 560"
                    className="h-auto w-full"
                    role="img"
                    aria-label="합성함수 g composed with f diagram"
                >
                    <defs>
                        <marker
                            id="arrowGray"
                            markerWidth="10"
                            markerHeight="10"
                            refX="8"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path
                                d="M0,0 L0,6 L9,3 z"
                                fill="currentColor"
                            />
                        </marker>

                        <marker
                            id="arrowRed"
                            markerWidth="10"
                            markerHeight="10"
                            refX="8"
                            refY="3"
                            orient="auto"
                            markerUnits="strokeWidth"
                        >
                            <path
                                d="M0,0 L0,6 L9,3 z"
                                fill="#f87171"
                            />
                        </marker>
                    </defs>

                    {/* 집합 X */}
                    <ellipse
                        cx="160"
                        cy="320"
                        rx="105"
                        ry="170"
                        fill="rgba(255,255,255,0.03)"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="4"
                    />

                    {/* 집합 Y */}
                    <ellipse
                        cx="500"
                        cy="320"
                        rx="105"
                        ry="170"
                        fill="rgba(255,255,255,0.03)"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="4"
                    />

                    {/* 집합 Z */}
                    <ellipse
                        cx="840"
                        cy="320"
                        rx="105"
                        ry="170"
                        fill="rgba(255,255,255,0.03)"
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="4"
                    />

                    {/* 집합 이름 */}
                    <foreignObject x="110" y="90" width="100" height="60">
                        <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                            <InlineMath math="X" />
                        </div>
                    </foreignObject>

                    <foreignObject x="450" y="90" width="100" height="60">
                        <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                            <InlineMath math="Y" />
                        </div>
                    </foreignObject>

                    <foreignObject x="790" y="90" width="100" height="60">
                        <div className="flex h-full items-center justify-center text-4xl font-bold text-white">
                            <InlineMath math="Z" />
                        </div>
                    </foreignObject>

                    {/* f : X -> Y */}
                    <line
                        x1="265"
                        y1="190"
                        x2="390"
                        y2="190"
                        stroke="currentColor"
                        className="text-gray-300"
                        strokeWidth="4"
                        markerEnd="url(#arrowGray)"
                    />

                    <foreignObject x="300" y="135" width="70" height="50">
                        <div className="flex h-full items-center justify-center text-2xl text-gray-200">
                            <InlineMath math="f" />
                        </div>
                    </foreignObject>

                    {/* g : Y -> Z */}
                    <line
                        x1="605"
                        y1="190"
                        x2="730"
                        y2="190"
                        stroke="currentColor"
                        className="text-gray-300"
                        strokeWidth="4"
                        markerEnd="url(#arrowGray)"
                    />

                    <foreignObject x="640" y="135" width="70" height="50">
                        <div className="flex h-full items-center justify-center text-2xl text-gray-200">
                            <InlineMath math="g" />
                        </div>
                    </foreignObject>

                    {/* x -> f(x) */}
                    <line
                        x1="175"
                        y1="320"
                        x2="450"
                        y2="320"
                        stroke="currentColor"
                        className="text-gray-400"
                        strokeWidth="4"
                        markerEnd="url(#arrowGray)"
                    />

                    {/* f(x) -> g(f(x)) */}
                    <line
                        x1="545"
                        y1="320"
                        x2="770"
                        y2="320"
                        stroke="currentColor"
                        className="text-gray-400"
                        strokeWidth="4"
                        markerEnd="url(#arrowGray)"
                    />

                    {/* 원소 x */}
                    <foreignObject x="95" y="285" width="100" height="70">
                        <div className="flex h-full items-center justify-center text-3xl text-white">
                            <InlineMath math="x" />
                        </div>
                    </foreignObject>

                    {/* 원소 f(x) */}
                    <foreignObject x="410" y="280" width="180" height="80">
                        <div className="flex h-full items-center justify-center text-3xl text-white">
                            <InlineMath math="f(x)" />
                        </div>
                    </foreignObject>

                    {/* 원소 g(f(x)) */}
                    <foreignObject x="745" y="275" width="200" height="90">
                        <div className="flex h-full items-center justify-center text-3xl text-white">
                            <InlineMath math="g(f(x))" />
                        </div>
                    </foreignObject>

                    {/* 위쪽 합성함수 화살표 */}
                    <path
                        d="M 150 135 C 330 25, 670 25, 825 145"
                        fill="none"
                        stroke="currentColor"
                        className="text-red-400"
                        strokeWidth="5"
                        markerEnd="url(#arrowRed)"
                    />

                    <foreignObject x="410" y="-20" width="180" height="70">
                        <div className="flex h-full items-center justify-center text-3xl font-semibold text-red-300">
                            <InlineMath math="g\circ f" />
                        </div>
                    </foreignObject>

                    {/* 아래쪽 합성 결과 화살표 */}
                    <path
                        d="M 145 370 C 260 515, 650 515, 825 400"
                        fill="none"
                        stroke="currentColor"
                        className="text-red-400"
                        strokeWidth="5"
                        markerEnd="url(#arrowRed)"
                    />

                    <foreignObject x="350" y="485" width="320" height="70">
                        <div className="flex h-full items-center justify-center text-2xl font-semibold text-red-300">
                            <InlineMath math="(g\circ f)(x)=g(f(x))" />
                        </div>
                    </foreignObject>
                </svg>
            </div>

            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                <p className="text-center leading-8 text-gray-200">
                    먼저 <InlineMath math="f" />를 적용하고,
                    그 결과에 다시 <InlineMath math="g" />를 적용합니다.
                </p>

                <BlockMath math={String.raw`
                    x
                    \xrightarrow{\ f\ }
                    f(x)
                    \xrightarrow{\ g\ }
                    g(f(x))
                `} />

                <BlockMath math={String.raw`
                    \boxed{
                        (g\circ f)(x)=g(f(x))
                    }
                `} />
            </div>
        </div>
    );
}

type CompositeMode = "gof" | "fof" | "fog" | "gog";
type Step = 0 | 1 | 2;

type Point = {
    x: number;
    y: number;
};

type Piece = {
    from: Point;
    to: Point;
};

type FunctionName = "f" | "g";

const FUNCTION_PIECES: Record<FunctionName, Piece[]> = {
    f: [
        {
            from: { x: 0, y: 0 },
            to: { x: 1, y: 2 },
        },
        {
            from: { x: 1, y: 2 },
            to: { x: 2, y: 0 },
        },
    ],

    g: [
        {
            from: { x: 0, y: 0 },
            to: { x: 1, y: 2 },
        },
        {
            from: { x: 1, y: 2 },
            to: { x: 2, y: 1 },
        },
    ],
};

const MODE_INFO: Record<
    CompositeMode,
    {
        label: string;
        inner: FunctionName;
        outer: FunctionName;
    }
> = {
    gof: {
        label: "g\\circ f",
        inner: "f",
        outer: "g",
    },
    fof: {
        label: "f\\circ f",
        inner: "f",
        outer: "f",
    },
    fog: {
        label: "f\\circ g",
        inner: "g",
        outer: "f",
    },
    gog: {
        label: "g\\circ g",
        inner: "g",
        outer: "g",
    },
};

function functionValue(name: FunctionName, x: number) {
    if (name === "f") {
        if (x <= 1) return 2 * x;
        return -2 * x + 4;
    }

    if (x <= 1) return 2 * x;
    return -x + 3;
}

function CompositeGraphExplorer() {
    const [mode, setMode] = React.useState<CompositeMode>("gof");
    const [step, setStep] = React.useState<Step>(0);

    // animationKey를 바꾸면 같은 단계를 다시 눌러도 애니메이션 재생
    const [animationKey, setAnimationKey] = React.useState(0);

    const info = MODE_INFO[mode];

    const selectMode = (nextMode: CompositeMode) => {
        setMode(nextMode);
        setStep(0);
        setAnimationKey((v) => v + 1);
    };

    const selectStep = (nextStep: 1 | 2) => {
        setStep(nextStep);
        setAnimationKey((v) => v + 1);
    };

    const reset = () => {
        setMode("gof");
        setStep(0);
        setAnimationKey((v) => v + 1);
    };

    return (
        <div className="rounded-xl border border-white/15 bg-black/20 p-2 md:p-3">
            {/* 상단 */}
            <div className="grid gap-3 lg:grid-cols-[0.6fr_1.4fr]">
                {/* 합성함수 선택 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-4 font-bold text-white">
                        합성함수를 선택하세요.
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                        {(
                            [
                                "gof",
                                "fof",
                                "fog",
                                "gog",
                            ] as CompositeMode[]
                        ).map((item) => {
                            const selected = mode === item;

                            return (
                                <button
                                    key={item}
                                    type="button"
                                    onClick={() => selectMode(item)}
                                    className={[
                                        "rounded-xl border px-4 py-3 font-semibold transition",
                                        selected
                                            ? "border-yellow-300/70 bg-yellow-300/15 text-yellow-200"
                                            : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10",
                                    ].join(" ")}
                                >
                                    <InlineMath
                                        math={MODE_INFO[item].label}
                                    />
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* 고정 함수 f, g */}
                <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="mb-2 text-center font-bold text-white">
                            <InlineMath math="f(x)" />
                        </p>

                        <MiniFunctionGraph name="f" />

                        <div className="mt-3 text-center text-sm text-gray-300">
                            <BlockMath
                                math={String.raw`
                                    f(x)=
                                    \begin{cases}
                                    2x &(0\le x\le1)\\
                                    -2x+4 &(1\le x\le2)
                                    \end{cases}
                                `}
                            />
                        </div>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                        <p className="mb-2 text-center font-bold text-white">
                            <InlineMath math="g(x)" />
                        </p>

                        <MiniFunctionGraph name="g" />

                        <div className="mt-3 text-center text-sm text-gray-300">
                            <BlockMath
                                math={String.raw`
                                    g(x)=
                                    \begin{cases}
                                    2x &(0\le x\le1)\\
                                    -x+3 &(1\le x\le2)
                                    \end{cases}
                                `}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 먼저 만나는 함수 / 나중에 만나는 함수 */}
            <div className="mt-5 grid gap-2 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-1 text-center text-sm text-gray-400">
                        먼저 만나는 함수
                    </p>

                    <p className="mb-4 text-center text-xl font-bold text-white">
                        <InlineMath math={`${info.inner}(x)`} />
                    </p>

                    <AnimatedSourceGraph
                        key={`source-${mode}-${step}-${animationKey}`}
                        name={info.inner}
                        step={step}
                    />
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-1 text-center text-sm text-gray-400">
                        나중에 만나는 함수
                    </p>

                    <p className="mb-4 text-center text-xl font-bold text-white">
                        <InlineMath math={`${info.outer}(x)`} />
                    </p>

                    <AnimatedOuterGraph
                        key={`outer-${mode}-${step}-${animationKey}`}
                        inner={info.inner}
                        outer={info.outer}
                        step={step}
                    />
                </div>
            </div>

            {/* 결과 + 단계 설명 */}
            <div className="mt-5 grid gap-2 lg:grid-cols-[1fr_1fr]">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-1 text-center text-sm text-gray-400">
                        합성함수
                    </p>

                    <p className="mb-4 text-center text-xl font-bold text-white">
                        <InlineMath math={MODE_INFO[mode].label} />
                    </p>

                    <CompositeResultGraph
                        key={`result-${mode}-${step}-${animationKey}`}
                        inner={info.inner}
                        outer={info.outer}
                        step={step}
                    />
                </div>

                <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            type="button"
                            onClick={() => selectStep(1)}
                            className={[
                                "rounded-xl border px-4 py-3 font-semibold transition",
                                step === 1
                                    ? "border-sky-300/70 bg-sky-300/15 text-sky-200"
                                    : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10",
                            ].join(" ")}
                        >
                            1단계
                        </button>

                        <button
                            type="button"
                            onClick={() => selectStep(2)}
                            className={[
                                "rounded-xl border px-4 py-3 font-semibold transition",
                                step === 2
                                    ? "border-sky-300/70 bg-sky-300/15 text-sky-200"
                                    : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10",
                            ].join(" ")}
                        >
                            2단계
                        </button>
                    </div>

                    <div className="mt-4 flex-1 rounded-xl border border-white/10 bg-black/20 p-5">
                        <StepExplanation
                            inner={info.inner}
                            outer={info.outer}
                            step={step}
                        />
                    </div>

                    <button
                        type="button"
                        onClick={reset}
                        className="mt-4 rounded-xl border border-white/15 bg-black/30 px-4 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
                    >
                        초기화
                    </button>
                </div>
            </div>
        </div>
    );
}

/* -------------------------------------------------------
   좌표계 공통
------------------------------------------------------- */

const GRAPH = {
    width: 360,
    height: 300,

    originX: 55,
    originY: 245,

    // x축, y축 모두 1단위 = 90px
    unit: 90,
};

function sx(x: number) {
    return GRAPH.originX + x * GRAPH.unit;
}

function sy(y: number) {
    return GRAPH.originY - y * GRAPH.unit;
}

function pointsToString(points: Point[]) {
    return points
        .map((p) => `${sx(p.x)},${sy(p.y)}`)
        .join(" ");
}

function GraphFrame({
    children,
    mini = false,
}: {
    children: React.ReactNode;
    mini?: boolean;
}) {
    return (
        <svg
            viewBox={`0 0 ${GRAPH.width} ${GRAPH.height}`}
            className={
                mini
                    ? "mx-auto h-auto w-full max-w-[150px]"
                    : "mx-auto h-auto w-full max-w-[420px]"
            }
            preserveAspectRatio="xMidYMid meet"
        >
            {/* 세로 격자선 */}
            {[0, 1, 2].map((v) => (
                <line
                    key={`x-grid-${v}`}
                    x1={sx(v)}
                    y1={sy(0)}
                    x2={sx(v)}
                    y2={sy(2)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                />
            ))}

            {/* 가로 격자선 */}
            {[0, 1, 2].map((v) => (
                <line
                    key={`y-grid-${v}`}
                    x1={sx(0)}
                    y1={sy(v)}
                    x2={sx(2)}
                    y2={sy(v)}
                    stroke="rgba(255,255,255,0.08)"
                    strokeWidth="1"
                />
            ))}

            {/* x축 */}
            <line
                x1={sx(0)}
                y1={sy(0)}
                x2={sx(2.25)}
                y2={sy(0)}
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.5"
            />

            {/* y축 */}
            <line
                x1={sx(0)}
                y1={sy(0)}
                x2={sx(0)}
                y2={sy(2.2)}
                stroke="rgba(255,255,255,0.65)"
                strokeWidth="1.5"
            />

            {/* x축 눈금 */}
            {[0, 1, 2].map((v) => (
                <text
                    key={`x-label-${v}`}
                    x={sx(v)}
                    y={sy(0) + 24}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.7)"
                    fontSize="14"
                >
                    {v}
                </text>
            ))}

            {/* y축 눈금 */}
            {[1, 2].map((v) => (
                <text
                    key={`y-label-${v}`}
                    x={sx(0) - 18}
                    y={sy(v) + 5}
                    textAnchor="middle"
                    fill="rgba(255,255,255,0.7)"
                    fontSize="14"
                >
                    {v}
                </text>
            ))}

            {children}
        </svg>
    );
}

/* -------------------------------------------------------
   위쪽 작은 f, g 그래프
------------------------------------------------------- */

function MiniFunctionGraph({
    name,
}: {
    name: FunctionName;
}) {
    const pieces = FUNCTION_PIECES[name];

    return (
        <GraphFrame mini>
            {pieces.map((piece, index) => (
                <line
                    key={index}
                    x1={sx(piece.from.x)}
                    y1={sy(piece.from.y)}
                    x2={sx(piece.to.x)}
                    y2={sy(piece.to.y)}
                    stroke="#e5e7eb"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            ))}

            {pieces
                .flatMap((piece) => [
                    piece.from,
                    piece.to,
                ])
                .map((p, index) => (
                    <circle
                        key={index}
                        cx={sx(p.x)}
                        cy={sy(p.y)}
                        r="4"
                        fill="#e5e7eb"
                    />
                ))}
        </GraphFrame>
    );
}

/* -------------------------------------------------------
   먼저 만나는 함수
------------------------------------------------------- */

function AnimatedSourceGraph({
    name,
    step,
}: {
    name: FunctionName;
    step: Step;
}) {
    const pieces = FUNCTION_PIECES[name];

    return (
        <GraphFrame>
            {pieces.map((piece, index) => {
                const active = step === index + 1;

                return (
                    <line
                        key={index}
                        x1={sx(piece.from.x)}
                        y1={sy(piece.from.y)}
                        x2={sx(piece.to.x)}
                        y2={sy(piece.to.y)}
                        stroke={
                            active
                                ? "#38bdf8"
                                : "rgba(229,231,235,0.45)"
                        }
                        strokeWidth={active ? 6 : 4}
                        strokeLinecap="round"
                        className={
                            active
                                ? "composite-source-active"
                                : ""
                        }
                    />
                );
            })}

            {step !== 0 && (
                <MovingDot
                    piece={pieces[step - 1]}
                    color="#facc15"
                />
            )}
        </GraphFrame>
    );
}

/* -------------------------------------------------------
   나중에 만나는 함수
------------------------------------------------------- */

function AnimatedOuterGraph({
    inner,
    outer,
    step,
}: {
    inner: FunctionName;
    outer: FunctionName;
    step: Step;
}) {
    const pieces = FUNCTION_PIECES[outer];

    if (step === 0) {
        return (
            <GraphFrame>
                {pieces.map((piece, index) => (
                    <line
                        key={index}
                        x1={sx(piece.from.x)}
                        y1={sy(piece.from.y)}
                        x2={sx(piece.to.x)}
                        y2={sy(piece.to.y)}
                        stroke="#e5e7eb"
                        strokeWidth="4"
                        strokeLinecap="round"
                    />
                ))}
            </GraphFrame>
        );
    }

    const innerPiece = FUNCTION_PIECES[inner][step - 1];

    const inputFrom = innerPiece.from.y;
    const inputTo = innerPiece.to.y;

    const outerPath = getFunctionPathBetween(
        outer,
        inputFrom,
        inputTo
    ).reverse();

    return (
        <GraphFrame>
            {/* 원래 그래프 */}
            {pieces.map((piece, index) => (
                <line
                    key={index}
                    x1={sx(piece.from.x)}
                    y1={sy(piece.from.y)}
                    x2={sx(piece.to.x)}
                    y2={sy(piece.to.y)}
                    stroke="rgba(229,231,235,0.35)"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            ))}

            {/* 전달될 부분 */}
            <polyline
                points={pointsToString(outerPath)}
                fill="none"
                stroke="#facc15"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                className="composite-outer-transfer"
            />
        </GraphFrame>
    );
}

/* -------------------------------------------------------
   합성함수 결과
------------------------------------------------------- */

function CompositeResultGraph({
    inner,
    outer,
    step,
}: {
    inner: FunctionName;
    outer: FunctionName;
    step: Step;
}) {
    const first =
        step >= 1
            ? getCompositePiece(inner, outer, 0)
            : [];

    const second =
        step >= 2
            ? getCompositePiece(inner, outer, 1)
            : [];

    return (
        <GraphFrame>
            {first.length > 0 && (
                <polyline
                    points={pointsToString(first)}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className={
                        step === 1
                            ? "composite-result-draw"
                            : ""
                    }
                />
            )}

            {second.length > 0 && (
                <polyline
                    points={pointsToString(second)}
                    fill="none"
                    stroke="#34d399"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="1"
                    className="composite-result-draw composite-result-delay"
                />
            )}
        </GraphFrame>
    );
}

/* -------------------------------------------------------
   단계 설명
------------------------------------------------------- */

function StepExplanation({
    inner,
    outer,
    step,
}: {
    inner: FunctionName;
    outer: FunctionName;
    step: Step;
}) {
    if (step === 0) {
        return (
            <div className="space-y-3 leading-8 text-gray-300">
                <p>
                    먼저 만나는 함수{" "}
                    <InlineMath math={`${inner}(x)`} />의
                    그래프를 조각별로 살펴봅니다.
                </p>

                <p>
                    <strong className="text-white">
                        1단계
                    </strong>
                    를 눌러 첫 번째 조각부터 확인해 보세요.
                </p>
            </div>
        );
    }

    const piece = FUNCTION_PIECES[inner][step - 1];

    const xFrom = piece.from.x;
    const xTo = piece.to.x;

    const valueFrom = piece.from.y;
    const valueTo = piece.to.y;

    const increasing = valueTo > valueFrom;

    return (
        <div className="space-y-4 leading-8 text-gray-300">
            <p className="font-bold text-white">
                {step}단계
            </p>

            <p>
                <InlineMath
                    math={`${xFrom}\\le x\\le${xTo}`}
                />{" "}
                에서 먼저 만나는 함수의 값은
            </p>

            <BlockMath
                math={String.raw`
                    ${inner}(x):
                    ${valueFrom}\longrightarrow${valueTo}
                `}
            />

            <p>
                로 움직입니다. 따라서{" "}
                <InlineMath math={`${outer}(x)`} />의
                그래프를 입력{" "}
                <InlineMath
                    math={`${valueFrom}\\to${valueTo}`}
                />{" "}
                방향으로 읽습니다.
            </p>

            <p>
                즉, 그래프가{" "}
                <strong className="text-yellow-300">
                    {increasing
                        ? "왼쪽에서 오른쪽으로"
                        : "오른쪽에서 왼쪽으로"}
                </strong>{" "}
                전달됩니다.
            </p>

            <p>
                가져온 그래프의 모양은 합성함수의{" "}
                <InlineMath
                    math={`${xFrom}\\le x\\le${xTo}`}
                />{" "}
                구간에 왼쪽에서 오른쪽으로 그려집니다.
            </p>
        </div>
    );
}

/* -------------------------------------------------------
   이동하는 점
------------------------------------------------------- */

function MovingDot({
    piece,
    color,
}: {
    piece: Piece;
    color: string;
}) {
    const x1 = sx(piece.from.x);
    const y1 = sy(piece.from.y);
    const x2 = sx(piece.to.x);
    const y2 = sy(piece.to.y);

    return (
        <circle r="6" fill={color}>
            <animate
                attributeName="cx"
                from={x1}
                to={x2}
                dur="1.1s"
                fill="freeze"
            />
            <animate
                attributeName="cy"
                from={y1}
                to={y2}
                dur="1.1s"
                fill="freeze"
            />
        </circle>
    );
}

/* -------------------------------------------------------
   함수의 입력 a → b 사이 그래프를 구함
------------------------------------------------------- */

function getFunctionPathBetween(
    name: FunctionName,
    from: number,
    to: number
): Point[] {
    const breakPoints = [0, 1, 2];

    const min = Math.min(from, to);
    const max = Math.max(from, to);

    const middlePoints = breakPoints.filter(
        (x) => x > min && x < max
    );

    const xs =
        from <= to
            ? [from, ...middlePoints.sort((a, b) => a - b), to]
            : [from, ...middlePoints.sort((a, b) => b - a), to];

    return xs.map((x) => ({
        x,
        y: functionValue(name, x),
    }));
}

/* -------------------------------------------------------
   합성함수의 한 조각 계산
------------------------------------------------------- */

function getCompositePiece(
    inner: FunctionName,
    outer: FunctionName,
    pieceIndex: number
): Point[] {
    const innerPiece = FUNCTION_PIECES[inner][pieceIndex];

    const x0 = innerPiece.from.x;
    const x1 = innerPiece.to.x;

    const y0 = innerPiece.from.y;
    const y1 = innerPiece.to.y;

    /*
       outer가 x=1에서 식이 바뀌므로
       inner(x)=1이 되는 x를 찾아 중간점으로 넣습니다.
    */

    const xs: number[] = [x0];

    if (
        (y0 < 1 && y1 > 1) ||
        (y0 > 1 && y1 < 1) ||
        y0 === 1 ||
        y1 === 1
    ) {
        if (y1 !== y0) {
            const ratio = (1 - y0) / (y1 - y0);
            const crossX = x0 + ratio * (x1 - x0);

            if (crossX > x0 && crossX < x1) {
                xs.push(crossX);
            }
        }
    }

    xs.push(x1);

    return xs.map((x) => ({
        x,
        y: functionValue(
            outer,
            functionValue(inner, x)
        ),
    }));
}

export default function CompositeAndInverseFunctionPage() {
    return (
        <>
            {/* 3.6 합성함수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.6 합성함수
                </h2>

                <p className="leading-8 text-gray-300">
                    한 함수의 함숫값을 다시 다른 함수의 입력으로 넣으면
                    두 함수가 차례대로 작용하는 새로운 함수를 만들 수 있습니다.
                    이러한 함수를 합성함수라고 합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 합성함수의 뜻 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 합성함수의 뜻
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세 집합 <InlineMath math="X,Y,Z" />에 대하여 두 함수
                        </p>

                        <BlockMath math={String.raw`
                f:X\longrightarrow Y,
                \qquad
                g:Y\longrightarrow Z
            `} />

                        <p className="leading-8 text-gray-300">
                            가 있다고 합시다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            집합 <InlineMath math="X" />의 원소{" "}
                            <InlineMath math="x" />를 함수 <InlineMath math="f" />에
                            의하여 <InlineMath math="f(x)" />에 대응시키고,
                            다시 <InlineMath math="f(x)" />를 함수{" "}
                            <InlineMath math="g" />에 의하여{" "}
                            <InlineMath math="g(f(x))" />에 대응시킬 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                x
                \xrightarrow{\ f\ }
                f(x)
                \xrightarrow{\ g\ }
                g(f(x))
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 <InlineMath math="X" />를 정의역,{" "}
                            <InlineMath math="Z" />를 공역으로 하는 새로운 함수를
                            정의할 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                g\circ f:X\longrightarrow Z
            `} />

                        <p className="leading-8 text-gray-300">
                            이 함수를 <strong className="text-white">
                                <InlineMath math="f" />와 <InlineMath math="g" />의
                                합성함수
                            </strong>라고 하고,{" "}
                            <InlineMath math="g\circ f" />로 나타냅니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (g\circ f)(x)=g(f(x))
                }
            `} />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                합성하는 순서
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="g\circ f" />에서는 식에 오른쪽에 있는{" "}
                                <InlineMath math="f" />가 먼저 작용하고,
                                그 결과에 <InlineMath math="g" />가 작용합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        g\circ f
                        \;:\;
                        f\text{를 먼저}
                        \longrightarrow
                        g\text{를 나중에}
                    }
                `} />

                            <p className="leading-8 text-gray-200">
                                따라서 <InlineMath math="g\circ f" />를
                                「<InlineMath math="f" />와{" "}
                                <InlineMath math="g" />의 합성함수」라고 합니다.
                            </p>
                        </div>

                        <div className="mt-6">
                            <CompositeFunctionDiagram />
                        </div>
                    </div>


                    {/* 2. 합성이 가능한 조건 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 합성이 가능한 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="g\circ f" />를 만들려면{" "}
                            <InlineMath math="f(x)" />를 다시 함수{" "}
                            <InlineMath math="g" />의 입력으로 넣을 수 있어야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                x
                \xrightarrow{\ f\ }
                f(x)
                \xrightarrow{\ g\ }
                g(f(x))
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 함수 <InlineMath math="f" />에서 나오는 모든
                            함숫값이 함수 <InlineMath math="g" />의 정의역에
                            포함되어 있어야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    f\text{의 치역}
                    \subset
                    g\text{의 정의역}
                }
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                생각하는 방법
                            </p>

                            <p className="leading-8 text-gray-200">
                                함수 <InlineMath math="f" />의 출력값이
                                함수 <InlineMath math="g" />의 입력값이 됩니다.
                                따라서 <InlineMath math="f(x)" />가{" "}
                                <InlineMath math="g" />에 들어갈 수 있는지를
                                확인하면 됩니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f\text{의 출력}
                        \longrightarrow
                        g\text{의 입력}
                    }
                `} />
                        </div>
                    </div>


                    {/* 3. 합성함수의 성질 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 합성함수의 성질
                        </h3>

                        <p className="leading-8 text-gray-300">
                            다음 세 함수를 이용하여 합성함수의 성질을
                            살펴봅시다.
                        </p>

                        <BlockMath math={String.raw`
                f(x)=2x+3,\qquad
                g(x)=3x-5,\qquad
                h(x)=-x+3
            `} />


                        {/* 교환법칙 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <h4 className="mb-4 text-xl font-bold text-white">
                                ① 교환법칙은 성립하지 않는다
                            </h4>

                            <p className="leading-8 text-gray-300">
                                먼저 <InlineMath math="f\circ g" />를 구하면
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ g)(x)
                    &=f(g(x))\\
                    &=f(3x-5)\\
                    &=2(3x-5)+3\\
                    &=6x-7
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                반대로 <InlineMath math="g\circ f" />를 구하면
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (g\circ f)(x)
                    &=g(f(x))\\
                    &=g(2x+3)\\
                    &=3(2x+3)-5\\
                    &=6x+4
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                두 합성함수의 결과가 서로 다릅니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f\circ g\ne g\circ f
                    }
                `} />

                            <p className="text-center font-semibold text-red-300">
                                합성함수에서는 일반적으로 자리바꿈을 할 수 없습니다.
                            </p>
                        </div>


                        {/* 결합법칙 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <h4 className="mb-4 text-xl font-bold text-white">
                                ② 결합법칙은 성립한다
                            </h4>

                            <p className="leading-8 text-gray-300">
                                이번에는 세 함수 <InlineMath math="f,g,h" />를
                                합성해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                앞에서
                            </p>

                            <BlockMath math={String.raw`
                    (f\circ g)(x)=6x-7
                `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    ((f\circ g)\circ h)(x)
                    &=(f\circ g)(h(x))\\
                    &=6(-x+3)-7\\
                    &=-6x+11
                    \end{aligned}
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                한편
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (g\circ h)(x)
                    &=g(h(x))\\
                    &=3(-x+3)-5\\
                    &=-3x+4
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ(g\circ h))(x)
                    &=f((g\circ h)(x))\\
                    &=f(-3x+4)\\
                    &=2(-3x+4)+3\\
                    &=-6x+11
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        (f\circ g)\circ h
                        =
                        f\circ(g\circ h)
                    }
                `} />

                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <p className="leading-8 text-gray-200">
                                    결합법칙은 함수의 순서를 바꾸는 것이 아닙니다.
                                    함수가 작용하는 순서는 그대로 두고{" "}
                                    <strong className="text-yellow-300">
                                        괄호를 묶는 위치만 바꿀 수 있습니다.
                                    </strong>
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{자리바꿈 }\times
                            \qquad
                            \text{괄호 위치 변경 }\bigcirc
                        }
                    `} />
                            </div>
                        </div>


                        {/* 항등함수 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <h4 className="mb-4 text-xl font-bold text-white">
                                ③ 항등함수와의 합성
                            </h4>

                            <p className="leading-8 text-gray-300">
                                정의역의 각 원소를 자기 자신에 대응시키는 함수를
                                항등함수라고 하고 <InlineMath math="I" />로
                                나타냅니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        I(x)=x
                    }
                `} />

                            <p className="leading-8 text-gray-300">
                                항등함수는 입력값을 그대로 출력하므로 다른 함수와
                                합성해도 그 함수에 영향을 주지 않습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                예를 들어 <InlineMath math="f(x)=2x+3" />이면
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ I)(x)
                    &=f(I(x))\\
                    &=f(x)\\
                    &=2x+3
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                이고
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (I\circ f)(x)
                    &=I(f(x))\\
                    &=f(x)\\
                    &=2x+3
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f\circ I
                        =
                        I\circ f
                        =
                        f
                    }
                `} />

                            <p className="text-center leading-8 text-gray-300">
                                항등함수는 합성해도 원래 함수를 변화시키지 않습니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 함수를 합성함수의 관점에서 보기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 함수를 합성함수의 관점에서 보기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            항등함수 <InlineMath math="y=x" />와 상수함수{" "}
                            <InlineMath math="y=c" />를 제외한 여러 함수는
                            간단한 함수들이 차례대로 작용한 합성함수의 관점에서
                            생각할 수 있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            함수의 식을 볼 때 어떤 계산이 어떤 순서로
                            이루어지는지 살펴봅시다.
                        </p>


                        {/* f(x) = 2x + 3 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <h4 className="mb-4 text-xl font-bold text-white">
                                ① <InlineMath math="f(x)=2x+3" />
                            </h4>

                            <p className="leading-8 text-gray-300">
                                먼저 <InlineMath math="x" />에 2를 곱하고,
                                그 결과에 3을 더합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        x
                        \xrightarrow{\times2}
                        2x
                        \xrightarrow{+3}
                        2x+3
                    }
                `} />

                            <p className="text-center leading-8 text-gray-200">
                                즉, <InlineMath math="f(x)=2x+3" />은{" "}
                                <strong className="text-white">
                                    2를 곱하고 3을 더하는 함수
                                </strong>
                                로 생각할 수 있습니다.
                            </p>
                        </div>


                        {/* g(x) = 2(x + 3) */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <h4 className="mb-4 text-xl font-bold text-white">
                                ② <InlineMath math="g(x)=2(x+3)" />
                            </h4>

                            <p className="leading-8 text-gray-300">
                                먼저 <InlineMath math="x" />에 3을 더하고,
                                그 결과에 2를 곱합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        x
                        \xrightarrow{+3}
                        x+3
                        \xrightarrow{\times2}
                        2(x+3)
                    }
                `} />

                            <p className="text-center leading-8 text-gray-200">
                                즉, <InlineMath math="g(x)=2(x+3)" />은{" "}
                                <strong className="text-white">
                                    3을 더하고 2를 곱하는 함수
                                </strong>
                                로 생각할 수 있습니다.
                            </p>
                        </div>


                        {/* 두 함수 비교 */}
                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-4 font-bold text-blue-300">
                                두 함수의 차이
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    f(x)=2x+3 &:\
                    x\xrightarrow{\times2}2x
                    \xrightarrow{+3}2x+3\\[6pt]
                    g(x)=2(x+3) &:\
                    x\xrightarrow{+3}x+3
                    \xrightarrow{\times2}2(x+3)
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-200">
                                두 함수는 모두 「2를 곱하기」와 「3을 더하기」라는
                                계산을 사용하지만 계산하는 순서가 다릅니다.
                            </p>

                            <BlockMath math={String.raw`
                    2x+3\ne2(x+3)
                `} />

                            <p className="leading-8 text-gray-200">
                                따라서 같은 계산을 사용하더라도{" "}
                                <strong className="text-white">
                                    적용하는 순서가 달라지면 결과가 달라질 수 있습니다.
                                </strong>
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                이것은 합성함수에서 일반적으로 교환법칙이
                                성립하지 않는 것과 같은 원리입니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                함수를 볼 때의 관점
                            </p>

                            <p className="leading-8 text-gray-200">
                                함수의 식을 하나의 계산 결과로만 보지 말고,
                                입력값에 어떤 계산이 어떤 순서로 작용하는지
                                생각해 봅시다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{입력}
                        \longrightarrow
                        \text{계산}
                        \longrightarrow
                        \text{계산}
                        \longrightarrow
                        \text{출력}
                    }
                `} />

                            <p className="leading-8 text-gray-200">
                                이러한 관점은 여러 함수의 합성을 이해하는 데
                                도움이 되고, 다음에 배우는 역함수를 이해할 때도
                                중요합니다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                세 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2+1\;(0\le x\le2),\qquad
            g(x)=2x+1\;(0\le x\le1),
        `} />

                            <BlockMath math={String.raw`
            h(x)=x^3\;(-1\le x\le4)
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 다음 합성함수 중 정의되는 것은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① <InlineMath math="f\circ g" /></div>
                                <div>② <InlineMath math="f\circ h" /></div>
                                <div>③ <InlineMath math="g\circ f" /></div>
                                <div>④ <InlineMath math="h\circ g" /></div>
                                <div>⑤ <InlineMath math="h\circ f\circ g" /></div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수 <InlineMath math="g\circ f" />가 정의되려면
                                    먼저 작용하는 함수 <InlineMath math="f" />의 치역이
                                    다음에 작용하는 함수 <InlineMath math="g" />의 정의역에
                                    포함되어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{
                    \text{앞 함수의 치역}
                    \subset
                    \text{뒤 함수의 정의역}
                }
            `} />

                                <p className="leading-8">
                                    먼저 세 함수의 정의역과 치역을 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{array}{c|c|c}
                &\text{정의역}&\text{치역}\\
                \hline
                f&0\le x\le2&1\le y\le5\\
                g&0\le x\le1&1\le y\le3\\
                h&-1\le x\le4&-1\le y\le64
                \end{array}
            `} />

                                <p className="leading-8">
                                    ① <InlineMath math="f\circ g" />에서는
                                    먼저 <InlineMath math="g" />가 작용합니다.
                                    그런데 <InlineMath math="g" />의 치역{" "}
                                    <InlineMath math="1\le y\le3" />이{" "}
                                    <InlineMath math="f" />의 정의역{" "}
                                    <InlineMath math="0\le x\le2" />에 모두 포함되지 않으므로
                                    정의되지 않습니다.
                                </p>

                                <p className="leading-8">
                                    ② <InlineMath math="f\circ h" />에서는{" "}
                                    <InlineMath math="h" />의 치역{" "}
                                    <InlineMath math="-1\le y\le64" />가{" "}
                                    <InlineMath math="f" />의 정의역에 포함되지 않으므로
                                    정의되지 않습니다.
                                </p>

                                <p className="leading-8">
                                    ③ <InlineMath math="g\circ f" />에서는{" "}
                                    <InlineMath math="f" />의 치역{" "}
                                    <InlineMath math="1\le y\le5" />가{" "}
                                    <InlineMath math="g" />의 정의역{" "}
                                    <InlineMath math="0\le x\le1" />에 포함되지 않으므로
                                    정의되지 않습니다.
                                </p>

                                <p className="leading-8">
                                    ④ <InlineMath math="h\circ g" />에서는{" "}
                                    <InlineMath math="g" />의 치역{" "}
                                    <InlineMath math="1\le y\le3" />이{" "}
                                    <InlineMath math="h" />의 정의역{" "}
                                    <InlineMath math="-1\le x\le4" />에 모두 포함됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid1\le y\le3\}
                \subset
                \{x\mid-1\le x\le4\}
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="h\circ g" />는 정의됩니다.
                                </p>

                                <p className="leading-8">
                                    ⑤ <InlineMath math="h\circ f\circ g" />는
                                    먼저 <InlineMath math="g" />와{" "}
                                    <InlineMath math="f" />를 합성해야 하지만{" "}
                                    <InlineMath math="f\circ g" />가 정의되지 않으므로
                                    정의되지 않습니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{④\;h\circ g}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 식을 직접 계산하기 전에{" "}
                                        <strong className="text-white">
                                            먼저 작용하는 함수의 치역이 다음 함수의 정의역에
                                            포함되는지
                                        </strong>
                                        를 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        g\circ f\text{가 정의}
                        \quad\Longleftrightarrow\quad
                        f\text{의 치역}\subset g\text{의 정의역}
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            -2x+9 & (x\ge3)\\
            5 & (x<3)
            \end{cases},
            \qquad
            g(x)=\frac{1}{3}x^2-2
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여
                            </p>

                            <BlockMath math={String.raw`
            (f\circ g)(\sqrt3)+(g\circ f)(3)
        `} />

                            <p className="leading-8 text-gray-200">
                                의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수는 안쪽에 있는 함수부터 계산합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="(f\circ g)(\sqrt3)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(\sqrt3)
                =
                f(g(\sqrt3))
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="g(\sqrt3)" />을 먼저 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(\sqrt3)
                &=
                \frac13(\sqrt3)^2-2\\
                &=1-2\\
                &=-1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="-1<3" />이므로{" "}
                                    <InlineMath math="f(x)" />에서{" "}
                                    <InlineMath math="x<3" />일 때의 식을 사용합니다.
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(\sqrt3)
                =
                f(-1)
                =
                5
            `} />

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="(g\circ f)(3)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(3)
                =
                g(f(3))
            `} />

                                <p className="leading-8">
                                    <InlineMath math="3\ge3" />이므로{" "}
                                    <InlineMath math="f(x)" />에서{" "}
                                    <InlineMath math="x\ge3" />일 때의 식을 사용합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)
                &=-2(3)+9\\
                &=3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(3)
                &=g(3)\\
                &=\frac13(3)^2-2\\
                &=3-2\\
                &=1
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ g)(\sqrt3)+(g\circ f)(3)
                    &=5+1\\
                    &=\boxed{6}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 함숫값은{" "}
                                        <strong className="text-white">
                                            안쪽 함수의 함숫값을 먼저 구한 뒤,
                                            그 값을 바깥 함수에 다시 대입
                                        </strong>
                                        하여 구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (f\circ g)(a)
                        =
                        f(g(a))
                    }
                `} />

                                    <p className="leading-8">
                                        특히 바깥 함수가 조각함수인 경우에는 안쪽 함수에서
                                        나온 값이 어느 조건에 해당하는지 확인해야 합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-2">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        그림은 두 함수
                                    </p>

                                    <BlockMath math={String.raw`
                    f:X\longrightarrow Y,\qquad
                    g:Y\longrightarrow X
                `} />

                                    <p className="leading-8 text-gray-200">
                                        를 나타낸 것이다.
                                    </p>

                                    <p className="mt-5 leading-8 text-gray-200">
                                        다음 값을 구하시오.
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)(4)-(g\circ f)(5)
                `} />
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.6_3.png"
                                        alt="두 함수 f와 g의 대응 관계"
                                        className="w-full max-w-lg rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="(f\circ g)(4)" />를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(4)=f(g(4))
            `} />

                                <p className="leading-8">
                                    그림에서 <InlineMath math="g(4)=1" />이고{" "}
                                    <InlineMath math="f(1)=6" />이므로
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(4)
                =f(g(4))
                =f(1)
                =6
            `} />

                                <p className="leading-8">
                                    다음으로 <InlineMath math="(g\circ f)(5)" />를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(5)=g(f(5))
            `} />

                                <p className="leading-8">
                                    그림에서 <InlineMath math="f(5)=2" />이고{" "}
                                    <InlineMath math="g(2)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(5)
                =g(f(5))
                =g(2)
                =3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ g)(4)-(g\circ f)(5)
                    &=6-3\\
                    &=\boxed{3}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        대응 그림에서도 합성함수는{" "}
                                        <strong className="text-white">
                                            오른쪽에 있는 함수부터 차례대로
                                        </strong>{" "}
                                        따라가면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)(4)
                    =
                    f(g(4))
                    :
                    \quad
                    4\xrightarrow{g}1\xrightarrow{f}6
                `} />

                                    <BlockMath math={String.raw`
                    (g\circ f)(5)
                    =
                    g(f(5))
                    :
                    \quad
                    5\xrightarrow{f}2\xrightarrow{g}3
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=2x+a,\qquad g(x)=bx-5
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여
                            </p>

                            <BlockMath math={String.raw`
            (f\circ g)(x)=-2x-7
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="(g\circ f)(-5)" />의 값을 구하시오.
                                <br />
                                (단, <InlineMath math="a,b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="(f\circ g)(x)" />를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(x)
                &=f(g(x))\\
                &=f(bx-5)\\
                &=2(bx-5)+a\\
                &=2bx+a-10
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이것이 모든 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="-2x-7" />과 같으므로
                                    각 항의 계수를 비교합니다.
                                </p>

                                <BlockMath math={String.raw`
                2bx+a-10=-2x-7
            `} />

                                <BlockMath math={String.raw`
                2b=-2,\qquad a-10=-7
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=3,\qquad b=-1
            `} />

                                <p className="leading-8">
                                    이므로 두 함수는
                                </p>

                                <BlockMath math={String.raw`
                f(x)=2x+3,\qquad g(x)=-x-5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="(g\circ f)(-5)" />를 구합니다.
                                    합성함수는 안쪽 함수인 <InlineMath math="f" />부터
                                    계산합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-5)
                &=2(-5)+3\\
                &=-7
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(-5)
                &=g(f(-5))\\
                &=g(-7)\\
                &=-(-7)-5\\
                &=2
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{2}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        주어진 합성함수의 식을 이용하여 먼저{" "}
                                        <InlineMath math="a,b" />의 값을 구합니다.
                                        이때 <InlineMath math="f\circ g" />와{" "}
                                        <InlineMath math="g\circ f" />는 일반적으로 서로
                                        다르므로 합성하는 순서를 주의해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f\circ g\ne g\circ f
                    }
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="(f\circ g)(x)" />가 주어졌더라도
                                        마지막에 구해야 하는 것은{" "}
                                        <InlineMath math="(g\circ f)(-5)" />이므로,{" "}
                                        <InlineMath math="f" />를 먼저 적용하고{" "}
                                        <InlineMath math="g" />를 적용합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x+a,\qquad
            g(x)=
            \begin{cases}
            x-2 & (x<2)\\
            x^2 & (x\ge2)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여
                            </p>

                            <BlockMath math={String.raw`
            (f\circ g)(0)+(g\circ f)(0)=4
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시키는 상수 <InlineMath math="a" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="(f\circ g)(0)" />을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(0)=f(g(0))
            `} />

                                <p className="leading-8">
                                    <InlineMath math="0<2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                g(0)=0-2=-2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(0)
                =f(-2)
                =-2+a
                =a-2
            `} />

                                <p className="leading-8">
                                    다음으로 <InlineMath math="(g\circ f)(0)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(0)
                =g(f(0))
                =g(a)
            `} />

                                <p className="leading-8">
                                    따라서 주어진 조건에서
                                </p>

                                <BlockMath math={String.raw`
                a-2+g(a)=4
            `} />

                                <p className="leading-8">
                                    를 얻습니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ① <InlineMath math="a<2" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="g(a)=a-2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a-2+(a-2)&=4\\
                2a-4&=4\\
                a&=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그런데 <InlineMath math="a=4" />는{" "}
                                    <InlineMath math="a<2" />를 만족하지 않으므로
                                    이 경우에는 해가 없습니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ② <InlineMath math="a\ge2" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="g(a)=a^2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a-2+a^2&=4\\
                a^2+a-6&=0\\
                (a+3)(a-2)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=-3\quad\text{또는}\quad a=2
            `} />

                                <p className="leading-8">
                                    이 중 <InlineMath math="a\ge2" />를 만족하는 것은{" "}
                                    <InlineMath math="a=2" />입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{a=2}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="(g\circ f)(0)" />에서는 먼저{" "}
                                        <InlineMath math="f(0)=a" />가 나오므로
                                        실제로 구해야 하는 값은{" "}
                                        <InlineMath math="g(a)" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        함수 <InlineMath math="g" />가 조각함수이므로{" "}
                                        <strong className="text-white">
                                            입력값인 <InlineMath math="a" />가 어느 조건에
                                            속하는지에 따라 경우를 나누어야 합니다.
                                        </strong>
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        a<2,\qquad a\ge2
                    }
                `} />

                                    <p className="leading-8">
                                        각 경우에서 방정식을 푼 뒤에는 반드시 처음에
                                        정한 범위 조건을 만족하는지 다시 확인합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                함수 <InlineMath math="f(x)=x^2+ax" />에 대하여{" "}
                                <InlineMath math="(f\circ f)(x)" />가{" "}
                                <InlineMath math="x+3" />으로 나누어떨어지도록 하는
                                모든 실수 <InlineMath math="a" />의 값의 합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="(f\circ f)(x)" />가{" "}
                                    <InlineMath math="x+3" />으로 나누어떨어지므로
                                    나머지정리에 의하여
                                </p>

                                <BlockMath math={String.raw`
                (f\circ f)(-3)=0
            `} />

                                <p className="leading-8">
                                    입니다. 합성함수의 뜻을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                f(f(-3))=0
            `} />

                                <p className="leading-8">
                                    이므로 먼저 <InlineMath math="f(-3)" />을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(-3)
                =(-3)^2+a(-3)
                =9-3a
            `} />

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x^2+ax=x(x+a)
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(x)=0" />이 되는 입력값은
                                </p>

                                <BlockMath math={String.raw`
                x=0\quad\text{또는}\quad x=-a
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f(f(-3))=0" />이
                                    되려면
                                </p>

                                <BlockMath math={String.raw`
                f(-3)=0
                \quad\text{또는}\quad
                f(-3)=-a
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                9-3a=0
                \quad\text{또는}\quad
                9-3a=-a
            `} />

                                <p className="leading-8">
                                    각각을 풀면
                                </p>

                                <BlockMath math={String.raw`
                a=3
                \quad\text{또는}\quad
                a=\frac92
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    3+\frac92
                    =\boxed{\frac{15}{2}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="(f\circ f)(x)" />의 식을 직접
                                        전개할 필요가 없습니다.{" "}
                                        <InlineMath math="x+3" />으로 나누어떨어진다는
                                        조건에서 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ f)(-3)
                    =f(f(-3))
                    =0
                `} />

                                    <p className="leading-8">
                                        을 얻고, <InlineMath math="f(x)=0" />이 되는
                                        입력값을 이용하면 계산을 간단하게 할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x(x+a)=0
                    \quad\Longrightarrow\quad
                    x=0\text{ 또는 }x=-a
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                함수 <InlineMath math="f(x)=x^2-4x+a" />가
                            </p>

                            <BlockMath math={String.raw`
            (f\circ f)(2)=(f\circ f)(4)
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때, <InlineMath math="f(5)" />의 값을 구하시오.
                                (단, <InlineMath math="a" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 뜻을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                (f\circ f)(2)=f(f(2)),\qquad
                (f\circ f)(4)=f(f(4))
            `} />

                                <p className="leading-8">
                                    입니다. 먼저 안쪽 함수의 값을 각각 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2)&=2^2-4\cdot2+a=a-4,\\
                f(4)&=4^2-4\cdot4+a=a
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 주어진 조건은
                                </p>

                                <BlockMath math={String.raw`
                f(a-4)=f(a)
            `} />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <p className="leading-8">
                                    이차함수 <InlineMath math="f(x)=x^2-4x+a" />에서
                                    두 입력값 <InlineMath math="u,v" />의 함숫값이 같다면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(u)=f(v)
                &\Longrightarrow
                u^2-4u+a=v^2-4v+a\\
                &\Longrightarrow
                (u-v)(u+v-4)=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    여기서 두 입력값은 <InlineMath math="a-4" />와{" "}
                                    <InlineMath math="a" />이고 항상 서로 다르므로
                                </p>

                                <BlockMath math={String.raw`
                (a-4)+a=4
            `} />

                                <p className="leading-8">
                                    이어야 합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                2a-4=4
                \quad\Longrightarrow\quad
                a=4
            `} />

                                <p className="leading-8">
                                    이제 <InlineMath math="a=4" />를{" "}
                                    <InlineMath math="f(5)" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(5)
                &=5^2-4\cdot5+4\\
                &=25-20+4\\
                &=9
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{9}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="(f\circ f)(2)" />와{" "}
                                        <InlineMath math="(f\circ f)(4)" />를 처음부터
                                        전개하기보다{" "}
                                        <strong className="text-white">
                                            안쪽 함수의 값을 먼저 구합니다.
                                        </strong>
                                    </p>

                                    <BlockMath math={String.raw`
                    f(f(2))=f(f(4))
                    \quad\Longrightarrow\quad
                    f(a-4)=f(a)
                `} />

                                    <p className="leading-8">
                                        또한 이차함수 <InlineMath math="f(x)=x^2-4x+a" />는
                                        축이 <InlineMath math="x=2" />이므로,
                                        서로 다른 두 입력값의 함숫값이 같으면
                                        두 입력값은 축을 기준으로 대칭입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{(a-4)+a}{2}=2
                `} />

                                    <p className="leading-8">
                                        로 생각하면 <InlineMath math="a=4" />를 더욱
                                        빠르게 구할 수도 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 8 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                세 함수 <InlineMath math="f,g,h" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            (f\circ g)(x)=x^2+6,\qquad h(x)=x-1
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때,
                            </p>

                            <BlockMath math={String.raw`
            (f\circ(g\circ h))(x)=15
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시키는 모든 실수 <InlineMath math="x" />의 값의 합을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 결합법칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                f\circ(g\circ h)
                =
                (f\circ g)\circ h
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ(g\circ h))(x)
                &=((f\circ g)\circ h)(x)\\
                &=(f\circ g)(h(x))
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="h(x)=x-1" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(h(x))
                &=(h(x))^2+6\\
                &=(x-1)^2+6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    주어진 조건에 의하여
                                </p>

                                <BlockMath math={String.raw`
                (x-1)^2+6=15
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (x-1)^2&=9\\
                x-1&=3\quad\text{또는}\quad x-1=-3\\
                x&=4\quad\text{또는}\quad x=-2
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    4+(-2)=\boxed{2}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f" />와 <InlineMath math="g" />가
                                        각각 어떤 함수인지 구할 필요가 없습니다.
                                        합성함수의 결합법칙을 이용하여
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f\circ(g\circ h)
                        =
                        (f\circ g)\circ h
                    }
                `} />

                                    <p className="leading-8">
                                        와 같이 괄호를 묶는 위치를 바꾸면,
                                        문제에서 주어진 <InlineMath math="f\circ g" />를
                                        하나의 함수처럼 바로 사용할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x
                    \xrightarrow{\ h\ }
                    x-1
                    \xrightarrow{\ f\circ g\ }
                    (x-1)^2+6
                `} />

                                    <p className="leading-8">
                                        이때 함수의 순서를 바꾼 것이 아니라{" "}
                                        <strong className="text-white">
                                            괄호를 묶는 위치만 바꾼 것
                                        </strong>
                                        입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 9 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                세 함수 <InlineMath math="f,g,h" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f(x)=2x+a,\qquad
            (h\circ g)(x)=x^2-2a
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때,
                            </p>

                            <BlockMath math={String.raw`
            (h\circ(g\circ f))(-1)=11
        `} />

                            <p className="leading-8 text-gray-200">
                                을 만족시키는 실수 <InlineMath math="a" />의 값의 합을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 결합법칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                h\circ(g\circ f)
                =
                (h\circ g)\circ f
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (h\circ(g\circ f))(-1)
                &=((h\circ g)\circ f)(-1)\\
                &=(h\circ g)(f(-1))
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(-1)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)
                &=2(-1)+a\\
                &=a-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                (h\circ(g\circ f))(-1)
                =(h\circ g)(a-2)
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="(h\circ g)(x)=x^2-2a" />이므로
                                </p>

                                <BlockMath math={String.raw`
                (h\circ g)(a-2)
                =(a-2)^2-2a
            `} />

                                <p className="leading-8">
                                    주어진 조건에 의하여
                                </p>

                                <BlockMath math={String.raw`
                (a-2)^2-2a=11
            `} />

                                <p className="leading-8">
                                    이 방정식을 정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a^2-4a+4-2a&=11\\
                a^2-6a-7&=0\\
                (a-7)(a+1)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=7\quad\text{또는}\quad a=-1
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    7+(-1)=\boxed{6}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="g" />와 <InlineMath math="h" />를
                                        각각 구하려고 하지 않고, 주어진{" "}
                                        <InlineMath math="h\circ g" />를 하나의 함수처럼
                                        이용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        h\circ(g\circ f)
                        =
                        (h\circ g)\circ f
                    }
                `} />

                                    <p className="leading-8">
                                        따라서 함수가 작용하는 과정을
                                    </p>

                                    <BlockMath math={String.raw`
                    -1
                    \xrightarrow{\ f\ }
                    a-2
                    \xrightarrow{\ h\circ g\ }
                    (a-2)^2-2a
                `} />

                                    <p className="leading-8">
                                        로 생각하면 간단합니다. 결합법칙에서는{" "}
                                        <strong className="text-white">
                                            함수의 순서는 그대로 두고 괄호의 위치만
                                            바꿉니다.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 10 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                두 함수 <InlineMath math="f,g" />가 일대일대응이고
                            </p>

                            <BlockMath math={String.raw`
            f(1)=3,\qquad
            g(2)=4,\qquad
            (f\circ g)(1)=1,\qquad
            (g\circ f)(4)=2
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족할 때,{" "}
                                <InlineMath math="g(3)+(g\circ f)(2)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="(f\circ g)(1)=1" />에서
                                </p>

                                <BlockMath math={String.raw`
                f(g(1))=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="g(2)=4" />이고{" "}
                                    <InlineMath math="g" />가 일대일대응이므로{" "}
                                    <InlineMath math="g(1)\ne4" />입니다.
                                    또한 <InlineMath math="f(1)=3" />이므로{" "}
                                    <InlineMath math="g(1)\ne1" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 가능한 것은
                                </p>

                                <BlockMath math={String.raw`
                g(1)=2\quad\text{또는}\quad g(1)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    만약 <InlineMath math="g(1)=2" />라면{" "}
                                    <InlineMath math="f(g(1))=1" />에서{" "}
                                    <InlineMath math="f(2)=1" />입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="(g\circ f)(4)=2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                g(f(4))=2
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="g(1)=2" />이므로
                                    일대일대응에 의하여 <InlineMath math="f(4)=1" />이어야
                                    합니다. 그러면
                                </p>

                                <BlockMath math={String.raw`
                f(2)=f(4)=1
            `} />

                                <p className="leading-8">
                                    이 되어 <InlineMath math="f" />가 일대일대응이라는
                                    조건에 어긋납니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                g(1)=3
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="f(g(1))=1" />에서
                                </p>

                                <BlockMath math={String.raw`
                f(3)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="f" />는 일대일대응이고
                                </p>

                                <BlockMath math={String.raw`
                f(1)=3,\qquad f(3)=1
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(2),f(4)" />에는
                                    남은 두 값 <InlineMath math="2,4" />가 각각
                                    대응해야 합니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                g(f(4))=2
            `} />

                                <p className="leading-8">
                                    인데 <InlineMath math="g(2)=4" />이므로{" "}
                                    <InlineMath math="f(4)=2" />일 수 없습니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(4)=4,\qquad f(2)=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로 <InlineMath math="g(f(4))=2" />에서
                                </p>

                                <BlockMath math={String.raw`
                g(4)=2
            `} />

                                <p className="leading-8">
                                    입니다. 지금까지
                                </p>

                                <BlockMath math={String.raw`
                g(1)=3,\qquad
                g(2)=4,\qquad
                g(4)=2
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="g" />가 일대일대응이므로
                                    남은 값은
                                </p>

                                <BlockMath math={String.raw`
                g(3)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(2)
                &=g(f(2))\\
                &=g(2)\\
                &=4
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    g(3)+(g\circ f)(2)
                    &=1+4\\
                    &=\boxed{5}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 조건은 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)(1)=1
                    \quad\Longrightarrow\quad
                    f(g(1))=1
                `} />

                                    <BlockMath math={String.raw`
                    (g\circ f)(4)=2
                    \quad\Longrightarrow\quad
                    g(f(4))=2
                `} />

                                    <p className="leading-8">
                                        와 같이 풀어서 생각합니다.
                                    </p>

                                    <p className="leading-8">
                                        그리고 <InlineMath math="f,g" />가 모두
                                        일대일대응이므로{" "}
                                        <strong className="text-white">
                                            서로 다른 입력값은 서로 다른 함숫값에 대응하고,
                                            집합 <InlineMath math="X" />의 모든 값이 정확히
                                            한 번씩 함숫값으로 사용됩니다.
                                        </strong>
                                    </p>

                                    <p className="leading-8">
                                        이 성질을 이용하여 가능한 대응을 하나씩 결정하면
                                        됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-3">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-2">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        세 집합
                                    </p>

                                    <BlockMath math={String.raw`
                    X=\{1,2,3\},\qquad
                    Y=\{a,b,c\},\qquad
                    Z=\{4,5,6\}
                `} />

                                    <p className="leading-8 text-gray-200">
                                        에 대하여 일대일대응인 두 함수
                                    </p>

                                    <BlockMath math={String.raw`
                    f:X\longrightarrow Y,\qquad
                    g:Y\longrightarrow Z
                `} />

                                    <p className="leading-8 text-gray-200">
                                        가
                                    </p>

                                    <BlockMath math={String.raw`
                    f(3)=c,\qquad
                    g(a)=5,\qquad
                    (g\circ f)(1)=4
                `} />

                                    <p className="leading-8 text-gray-200">
                                        를 만족시킬 때,{" "}
                                        <InlineMath math="(g\circ f)(2)+g(b)" />의 값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.6_11.png"
                                        alt="집합 X, Y, Z 사이의 두 일대일대응 f와 g"
                                        className="w-full max-w-[250px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f(3)=c" />이고{" "}
                                    <InlineMath math="f" />가 일대일대응이므로
                                    남은 두 원소 <InlineMath math="1,2" />는{" "}
                                    <InlineMath math="a,b" />에 하나씩 대응합니다.
                                </p>

                                <BlockMath math={String.raw`
                \{f(1),f(2)\}=\{a,b\}
            `} />

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(1)=4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                g(f(1))=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="g(a)=5" />이므로{" "}
                                    <InlineMath math="f(1)=a" />일 수 없습니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(1)=b
            `} />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath math={String.raw`
                g(b)=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f" />가 일대일대응이고
                                </p>

                                <BlockMath math={String.raw`
                f(1)=b,\qquad f(3)=c
            `} />

                                <p className="leading-8">
                                    이므로 남은 대응은
                                </p>

                                <BlockMath math={String.raw`
                f(2)=a
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(2)
                &=g(f(2))\\
                &=g(a)\\
                &=5
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    (g\circ f)(2)+g(b)
                    &=5+4\\
                    &=\boxed{9}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 합성함수의 조건
                                    </p>

                                    <BlockMath math={String.raw`
                    (g\circ f)(1)=4
                    \quad\Longrightarrow\quad
                    g(f(1))=4
                `} />

                                    <p className="leading-8">
                                        을 이용합니다.{" "}
                                        <InlineMath math="g(a)=5" />이므로{" "}
                                        <InlineMath math="f(1)" />은{" "}
                                        <InlineMath math="a" />가 될 수 없고,
                                        일대일대응이라는 조건에 의해 남은 대응이 차례로
                                        결정됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    1\xrightarrow{\ f\ }b
                    \xrightarrow{\ g\ }4,
                    \qquad
                    2\xrightarrow{\ f\ }a
                    \xrightarrow{\ g\ }5
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 12 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 12</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                세 함수 <InlineMath math="f,g,h" />는 각각 일대일대응,
                                항등함수, 상수함수이고 다음 조건을 만족시킬 때,
                            </p>

                            <BlockMath math={String.raw`
            (f\circ g)(1)+f(4)
        `} />

                            <p className="leading-8 text-gray-200">
                                의 값을 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/15 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="f(3)=g(3)=h(3)" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="2f(1)-f(3)=f(2)" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="g" />는 항등함수이므로
                                </p>

                                <BlockMath math={String.raw`
                g(3)=3
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 조건 (가)에서
                                </p>

                                <BlockMath math={String.raw`
                f(3)=g(3)=h(3)=3
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 조건 (나)에 <InlineMath math="f(3)=3" />을
                                    대입하면
                                </p>

                                <BlockMath math={String.raw`
                2f(1)-3=f(2)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응이고 <InlineMath math="f(3)=3" />이므로
                                    나머지 세 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                \{f(1),f(2),f(4)\}=\{1,2,4\}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)" />에 가능한 값{" "}
                                    <InlineMath math="1,2,4" />를 조건{" "}
                                    <InlineMath math="f(2)=2f(1)-3" />에 확인해 보면,
                                </p>

                                <BlockMath math={String.raw`
                \begin{array}{c|c}
                f(1)&2f(1)-3\\
                \hline
                1&-1\\
                2&1\\
                4&5
                \end{array}
            `} />

                                <p className="leading-8">
                                    이 중 <InlineMath math="X=\{1,2,3,4\}" />의 원소가
                                    되는 경우는
                                </p>

                                <BlockMath math={String.raw`
                f(1)=2,\qquad f(2)=1
            `} />

                                <p className="leading-8">
                                    뿐입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f" />가 일대일대응이므로
                                    남은 값 <InlineMath math="4" />가{" "}
                                    <InlineMath math="4" />에 대응하여
                                </p>

                                <BlockMath math={String.raw`
                f(4)=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="g" />는 항등함수이므로
                                </p>

                                <BlockMath math={String.raw`
                g(1)=1
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(1)
                &=f(g(1))\\
                &=f(1)\\
                &=2
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    (f\circ g)(1)+f(4)
                    &=2+4\\
                    &=\boxed{6}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        항등함수 <InlineMath math="g" />는 모든 원소를
                                        자기 자신에 대응시키므로
                                    </p>

                                    <BlockMath math={String.raw`
                    g(x)=x,\qquad
                    f\circ g=f
                `} />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)(1)=f(1)
                `} />

                                    <p className="leading-8">
                                        로 바로 생각할 수 있습니다. 또한{" "}
                                        <InlineMath math="f" />가 일대일대응이므로
                                        집합 <InlineMath math="X" />의 각 원소가 함숫값으로
                                        정확히 한 번씩 사용된다는 성질을 함께 이용합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 13</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        그림은 두 함수{" "}
                                        <InlineMath math="y=f(x)" />,{" "}
                                        <InlineMath math="y=g(x)" />의 그래프와 직선{" "}
                                        <InlineMath math="y=x" />를 나타낸 것이다.
                                    </p>

                                    <p className="mt-5 leading-8 text-gray-200">
                                        <InlineMath math="(f\circ g\circ f)(d)=x_1" />,{" "}
                                        <InlineMath math="(f\circ g)(x_2)=e" />일 때,
                                        상수 <InlineMath math="x_1,x_2" />에 대하여{" "}
                                        <InlineMath math="x_1+x_2" />의 값은?
                                    </p>

                                    <p className="mt-4 text-sm leading-7 text-gray-400">
                                        (단, 모든 점선은 <InlineMath math="x" />축 또는{" "}
                                        <InlineMath math="y" />축과 서로 평행하다.)
                                    </p>

                                    <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                        <div>① <InlineMath math="b+e" /></div>
                                        <div>② <InlineMath math="c+e" /></div>
                                        <div>③ <InlineMath math="2b" /></div>
                                        <div>④ <InlineMath math="2c" /></div>
                                        <div>⑤ <InlineMath math="2e" /></div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.6_13.png"
                                        alt="두 함수 f와 g의 그래프와 직선 y=x"
                                        className="w-full max-w-[420px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    그림의 점선을 따라가면 필요한 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                f(d)=e,\qquad g(e)=d
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="x_1" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g\circ f)(d)
                =
                f(g(f(d)))
            `} />

                                <p className="leading-8">
                                    이므로 오른쪽의 <InlineMath math="f" />부터
                                    차례대로 적용합니다.
                                </p>

                                <BlockMath math={String.raw`
                d
                \xrightarrow{\ f\ }
                e
                \xrightarrow{\ g\ }
                d
                \xrightarrow{\ f\ }
                e
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x_1=e
            `} />

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="x_2" />를 구합니다.
                                </p>

                                <p className="leading-8">
                                    주어진 조건
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(x_2)=e
            `} />

                                <p className="leading-8">
                                    는
                                </p>

                                <BlockMath math={String.raw`
                f(g(x_2))=e
            `} />

                                <p className="leading-8">
                                    입니다. 그림에서 <InlineMath math="f(d)=e" />이므로
                                    먼저
                                </p>

                                <BlockMath math={String.raw`
                g(x_2)=d
            `} />

                                <p className="leading-8">
                                    가 되어야 합니다.
                                </p>

                                <p className="leading-8">
                                    다시 그림에서 <InlineMath math="g(e)=d" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x_2=e
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
    x_1+x_2
    =e+e
    =2e
`} />

                                    <p className="mt-3 text-center font-bold text-green-300">
                                        ⑤ <InlineMath math="2e" />
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        그래프로 주어진 합성함수도 식으로 주어진 경우와
                                        마찬가지로{" "}
                                        <strong className="text-white">
                                            오른쪽에 있는 함수부터 차례대로
                                        </strong>{" "}
                                        적용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g\circ f)(d)
                    :
                    \quad
                    d\xrightarrow{f}e
                    \xrightarrow{g}d
                    \xrightarrow{f}e
                `} />

                                    <p className="leading-8">
                                        반대로 <InlineMath math="(f\circ g)(x_2)=e" />처럼
                                        결과가 주어진 경우에는 그래프의 대응을{" "}
                                        <strong className="text-white">
                                            결과에서부터 거꾸로 추적
                                        </strong>
                                        하면 편리합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    e
                    \xleftarrow{\ f\ }
                    d
                    \xleftarrow{\ g\ }
                    e
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 14</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                세 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{1,2,3\},\qquad
            Y=\{3,4,5\},\qquad
            Z=\{5,6,7\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 두 함수
                            </p>

                            <BlockMath math={String.raw`
            f:X\longrightarrow Y,\qquad
            g:Y\longrightarrow Z
        `} />

                            <p className="leading-8 text-gray-200">
                                가 모두 일대일대응이고{" "}
                                <InlineMath math="f(1)=3" />,{" "}
                                <InlineMath math="g(5)=6" />이다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-200">
                                <InlineMath math="(g\circ f)(3)=5" />일 때,{" "}
                                <InlineMath math="(g\circ f)(1)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 합성함수의 조건에서
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(3)=5
                \quad\Longrightarrow\quad
                g(f(3))=5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)=3" />이고{" "}
                                    <InlineMath math="f" />가 일대일대응이므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)\ne3
            `} />

                                <p className="leading-8">
                                    입니다. 또 <InlineMath math="g(5)=6" />이고{" "}
                                    <InlineMath math="g(f(3))=5" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)\ne5
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(3)" />은{" "}
                                    <InlineMath math="Y=\{3,4,5\}" />의 남은 원소인
                                </p>

                                <BlockMath math={String.raw`
                f(3)=4
            `} />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath math={String.raw`
                g(4)=5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="f" />가 일대일대응이고
                                </p>

                                <BlockMath math={String.raw`
                f(1)=3,\qquad f(3)=4
            `} />

                                <p className="leading-8">
                                    이므로 남은 대응은
                                </p>

                                <BlockMath math={String.raw`
                f(2)=5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="g" />가 일대일대응이고
                                </p>

                                <BlockMath math={String.raw`
                g(4)=5,\qquad g(5)=6
            `} />

                                <p className="leading-8">
                                    이므로 남은 대응은
                                </p>

                                <BlockMath math={String.raw`
                g(3)=7
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(1)
                &=g(f(1))\\
                &=g(3)\\
                &=7
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{7}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 조건을
                                    </p>

                                    <BlockMath math={String.raw`
                    (g\circ f)(3)=5
                    \quad\Longrightarrow\quad
                    g(f(3))=5
                `} />

                                    <p className="leading-8">
                                        로 풀어서 생각한 뒤,{" "}
                                        <strong className="text-white">
                                            두 함수가 모두 일대일대응이라는 조건
                                        </strong>
                                        을 이용하여 이미 사용된 함숫값을 하나씩 제외하면
                                        대응이 결정됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    3\xrightarrow{\ f\ }4
                    \xrightarrow{\ g\ }5
                `} />

                                    <p className="leading-8">
                                        결국 <InlineMath math="g(3)=7" />을 찾아내는 것이
                                        핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 15 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 15</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x-4,\qquad
            g(x)=
            \begin{cases}
            -x+7 &(x<0)\\
            2x^2-4ax+7 &(x\ge0)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 합성함수{" "}
                                <InlineMath math="y=(f\circ g)(x)" />의 치역이
                            </p>

                            <BlockMath math={String.raw`
            \{y\mid y\ge1\}
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, 상수 <InlineMath math="a" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 합성함수의 식을 구하면
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(x)
                =f(g(x))
                =g(x)-4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)(x)=
                \begin{cases}
                -x+3 &(x<0)\\
                2x^2-4ax+3 &(x\ge0)
                \end{cases}
            `} />

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="x<0" />인 부분의 치역을
                                    살펴봅시다.
                                </p>

                                <BlockMath math={String.raw`
                y=-x+3
            `} />

                                <p className="leading-8">
                                    에서 <InlineMath math="x<0" />이므로{" "}
                                    <InlineMath math="-x>0" />이고
                                </p>

                                <BlockMath math={String.raw`
                y>3
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 이 부분의 치역은
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid y>3\}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 전체 합성함수의 치역이
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid y\ge1\}
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="x\ge0" />인 부분에서
                                    최솟값 <InlineMath math="1" />을 가져야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x\ge0" />에서의 식을 완전제곱식으로
                                    나타내면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2x^2-4ax+3
                &=2(x^2-2ax)+3\\
                &=2(x-a)^2+3-2a^2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    최솟값이 꼭짓점에서 나오려면 꼭짓점의{" "}
                                    <InlineMath math="x" />좌표 <InlineMath math="a" />가
                                    정의역 <InlineMath math="x\ge0" />에 포함되어야 하므로
                                </p>

                                <BlockMath math={String.raw`
                a\ge0
            `} />

                                <p className="leading-8">
                                    입니다. 이때 최솟값은
                                </p>

                                <BlockMath math={String.raw`
                3-2a^2
            `} />

                                <p className="leading-8">
                                    이므로 전체 치역의 최솟값이 <InlineMath math="1" />이라는
                                    조건에서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                3-2a^2&=1\\
                2a^2&=2\\
                a^2&=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=1\quad\text{또는}\quad a=-1
            `} />

                                <p className="leading-8">
                                    이 중 <InlineMath math="a\ge0" />을 만족하는 것은
                                </p>

                                <BlockMath math={String.raw`
                a=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{a=1}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 합성함수의 식을 구한 뒤, 조각별로 치역을
                                        살펴봅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)(x)=
                    \begin{cases}
                    -x+3 &(x<0)\\
                    2(x-a)^2+3-2a^2 &(x\ge0)
                    \end{cases}
                `} />

                                    <p className="leading-8">
                                        첫 번째 부분에서는 이미{" "}
                                        <InlineMath math="y>3" />의 모든 값을 만들 수
                                        있으므로, 전체 치역이{" "}
                                        <InlineMath math="\{y\mid y\ge1\}" />이 되기 위해서는
                                        두 번째 부분이{" "}
                                        <strong className="text-white">
                                            최솟값 1부터 위의 모든 값을 가져야 합니다.
                                        </strong>
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 이차함수의 꼭짓점이 주어진 정의역{" "}
                                        <InlineMath math="x\ge0" /> 안에 있는지도 반드시
                                        확인해야 합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 16 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 16</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                정의역이 자연수 전체의 집합인 함수{" "}
                                <InlineMath math="f" />가
                            </p>

                            <BlockMath math={String.raw`
            f(n)=
            \begin{cases}
            n+1 & (n\text{이 홀수})\\[2mm]
            \dfrac{n}{2}+1 & (n\text{이 짝수})
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="(f\circ f)(n)=5" />를
                                만족시키는 모든 자연수 <InlineMath math="n" />의 값의
                                합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 식을 합성함수의 뜻에 따라 나타내면
                                </p>

                                <BlockMath math={String.raw`
                f(f(n))=5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(n)" />을 하나의 자연수{" "}
                                    <InlineMath math="m" />이라고 생각하여
                                </p>

                                <BlockMath math={String.raw`
                f(m)=5
            `} />

                                <p className="leading-8">
                                    를 만족시키는 <InlineMath math="m" />을 구해 봅시다.
                                </p>

                                <p className="font-semibold text-white">
                                    <InlineMath math="m" />이 홀수인 경우
                                </p>

                                <BlockMath math={String.raw`
                m+1=5
                \quad\Longrightarrow\quad
                m=4
            `} />

                                <p className="leading-8">
                                    그런데 <InlineMath math="4" />는 홀수가 아니므로
                                    조건을 만족하지 않습니다.
                                </p>

                                <p className="font-semibold text-white">
                                    <InlineMath math="m" />이 짝수인 경우
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{m}{2}+1&=5\\
                \frac{m}{2}&=4\\
                m&=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(n)=8
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    이제 <InlineMath math="f(n)=8" />을 만족시키는{" "}
                                    <InlineMath math="n" />을 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n" />이 홀수이면
                                </p>

                                <BlockMath math={String.raw`
                n+1=8
                \quad\Longrightarrow\quad
                n=7
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="7" />은 홀수이므로
                                    조건을 만족합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n" />이 짝수이면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{n}{2}+1&=8\\
                \frac{n}{2}&=7\\
                n&=14
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="14" />는 짝수이므로
                                    조건을 만족합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 조건을 만족시키는 모든 자연수{" "}
                                    <InlineMath math="n" />은
                                </p>

                                <BlockMath math={String.raw`
                n=7,\ 14
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    7+14=\boxed{21}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(f(n))=5" />에서 처음부터{" "}
                                        <InlineMath math="n" />의 홀짝을 나누기보다,
                                        바깥쪽 함수부터 거꾸로 생각하면 간단합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    n
                    \xrightarrow{\ f\ }
                    8
                    \xrightarrow{\ f\ }
                    5
                `} />

                                    <p className="leading-8">
                                        먼저 <InlineMath math="f(m)=5" />에서{" "}
                                        <InlineMath math="m=8" />을 찾고, 다시{" "}
                                        <InlineMath math="f(n)=8" />을 풀어
                                    </p>

                                    <BlockMath math={String.raw`
                    n=7,\ 14
                `} />

                                    <p className="leading-8">
                                        를 구합니다. 특히 조각함수에서는 구한 값이
                                        해당 조건을 실제로 만족하는지도 반드시
                                        확인해야 합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>


                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-6 text-gray-200">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    1. 합성함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            (g\circ f)(x)=g(f(x))
                        }
                    `} />

                                <p className="text-center leading-8">
                                    <InlineMath math="f" />를 먼저 적용하고{" "}
                                    <InlineMath math="g" />를 나중에 적용합니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    2. 합성이 가능한 조건
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            f\text{의 치역}
                            \subset
                            g\text{의 정의역}
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    3. 교환법칙
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            f\circ g\ne g\circ f
                        }
                    `} />

                                <p className="text-center leading-8">
                                    일반적으로 함수의 자리를 바꿀 수 없습니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    4. 결합법칙
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            (f\circ g)\circ h
                            =
                            f\circ(g\circ h)
                        }
                    `} />

                                <p className="text-center leading-8">
                                    함수의 순서는 그대로이고 괄호를 묶는 위치만
                                    바꿀 수 있습니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    5. 항등함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            I(x)=x
                        }
                    `} />

                                <BlockMath math={String.raw`
                        \boxed{
                            f\circ I=I\circ f=f
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    6. 함수를 과정으로 보기
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            x
                            \longrightarrow
                            \text{계산}
                            \longrightarrow
                            \text{계산}
                            \longrightarrow
                            f(x)
                        }
                    `} />

                                <p className="text-center leading-8">
                                    함수의 식에서 어떤 계산이 어떤 순서로
                                    이루어지는지를 살펴봅니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* 3.7 <InlineMath math="f\circ g=g\circ f" />인 함수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.7 <InlineMath math="f\circ g=g\circ f" />인 함수
                </h2>

                <p className="leading-8 text-gray-300">
                    합성함수는 일반적으로 교환법칙이 성립하지 않습니다.
                    하지만 특별한 두 함수에서는 합성하는 순서를 바꾸어도
                    같은 함수가 될 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 합성함수와 교환법칙 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 합성함수와 교환법칙
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수 <InlineMath math="f,g" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                (f\circ g)(x)=f(g(x))
            `} />

                        <BlockMath math={String.raw`
                (g\circ f)(x)=g(f(x))
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 식은 함수를 적용하는 순서가 다르므로 일반적으로
                            서로 다른 함수가 됩니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    f\circ g\ne g\circ f
                    \qquad\text{(일반적으로)}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            즉, 합성함수에서는 일반적으로{" "}
                            <strong className="text-white">
                                교환법칙이 성립하지 않습니다.
                            </strong>
                        </p>
                    </div>

                    {/* 2. f∘g=g∘f가 성립하는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="f\circ g=g\circ f" />가 성립하는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            특별한 두 함수에서는 합성하는 순서를 바꾸어도
                            같은 함수가 될 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                        <p className="leading-8 text-gray-300">
                            두 함수가 같다는 것은 같은 입력값에 대하여
                            함숫값이 항상 같다는 뜻이므로
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    f(g(x))=g(f(x))
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            가 모든 <InlineMath math="x" />에 대하여 성립해야 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 <InlineMath math="f\circ g=g\circ f" />라는
                            조건이 주어지면 두 합성함수의 식을 각각 구하여
                            비교하면 됩니다.
                        </p>
                    </div>

                    {/* 3. 미지수가 있는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 미지수가 있는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath math={String.raw`
                f(x)=2x+3,\qquad
                g(x)=-x+k
            `} />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                        <p className="leading-8 text-gray-300">
                            가 성립한다고 합시다.
                        </p>

                        <p className="mt-5 font-semibold text-white">
                            먼저 <InlineMath math="f\circ g" />를 구하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(x)
                &=f(g(x))\\
                &=f(-x+k)\\
                &=2(-x+k)+3\\
                &=-2x+2k+3
                \end{aligned}
            `} />

                        <p className="font-semibold text-white">
                            다음으로 <InlineMath math="g\circ f" />를 구하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(x)
                &=g(f(x))\\
                &=g(2x+3)\\
                &=-(2x+3)+k\\
                &=-2x-3+k
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            두 함수가 같으므로
                        </p>

                        <BlockMath math={String.raw`
                -2x+2k+3=-2x-3+k
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다. <InlineMath math="x" />의 계수는 이미 같으므로
                            상수항을 비교하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                2k+3&=-3+k\\
                k&=-6
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                g(x)=-x-6
            `} />

                        <p className="leading-8 text-gray-300">
                            이고,
                        </p>

                        <BlockMath math={String.raw`
                g(-2)
                =-(-2)-6
                =-4
            `} />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="font-bold text-green-300">
                                예시의 답
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{g(-2)=-4}
                `} />
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수{" "}
                                <InlineMath math="f(x)=ax+b" />,{" "}
                                <InlineMath math="g(x)=4x-1" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f(1)=3,\qquad g\circ f=f\circ g
        `} />

                            <p className="leading-8 text-gray-200">
                                가 항상 성립할 때,{" "}
                                <InlineMath math="(g\circ f)(1)" />의 값을 구하시오.
                                (단, <InlineMath math="a,b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    구하려는 값을 합성함수의 뜻에 따라 나타내면
                                </p>

                                <BlockMath math={String.raw`
                (g\circ f)(1)=g(f(1))
            `} />

                                <p className="leading-8">
                                    입니다. 문제에서 <InlineMath math="f(1)=3" />이
                                    주어졌으므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(1)
                &=g(f(1))\\
                &=g(3)\\
                &=4\cdot3-1\\
                &=11
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{11}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        문제에 <InlineMath math="g\circ f=f\circ g" />라는
                                        조건이 있지만, 구하려는 값은
                                    </p>

                                    <BlockMath math={String.raw`
                    (g\circ f)(1)=g(f(1))
                `} />

                                    <p className="leading-8">
                                        이고 <InlineMath math="f(1)=3" />이 이미
                                        주어져 있습니다. 따라서{" "}
                                        <strong className="text-white">
                                            필요한 조건만 이용하면
                                        </strong>{" "}
                                        <InlineMath math="a,b" />를 구하지 않고 바로
                                        계산할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    1\xrightarrow{\ f\ }3
                    \xrightarrow{\ g\ }11
                `} />

                                    <p className="leading-8">
                                        합성함수 문제에서는 모든 조건을 반드시 사용해야
                                        한다고 생각하기보다, 구하려는 값에 필요한 대응을
                                        먼저 확인하는 것이 좋습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{0,1,2,3,4\}" />에 대하여
                                함수 <InlineMath math="f:X\longrightarrow X" />가
                            </p>

                            <BlockMath math={String.raw`
            f(x)
            =
            (3x\text{를 }5\text{로 나누었을 때의 나머지})
        `} />

                            <p className="leading-8 text-gray-200">
                                이다. 함수 <InlineMath math="g:X\longrightarrow X" />가
                            </p>

                            <BlockMath math={String.raw`
            g(1)=3,\qquad
            f\circ g=g\circ f
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="g(2)+g(4)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 함숫값을
                                    구해 봅시다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)&=0,\\
                f(1)&=3,\\
                f(2)&=1,\\
                f(3)&=4,\\
                f(4)&=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="1" />에서 시작하여{" "}
                                    <InlineMath math="f" />를 계속 적용하면
                                </p>

                                <BlockMath math={String.raw`
                1
                \xrightarrow{\ f\ }
                3
                \xrightarrow{\ f\ }
                4
                \xrightarrow{\ f\ }
                2
                \xrightarrow{\ f\ }
                1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                                <p className="leading-8">
                                    이므로 모든 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(g(x))=g(f(x))
            `} />

                                <p className="leading-8">
                                    가 성립합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(g(1))=g(f(1))
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="g(1)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(3)
                &=g(f(1))\\
                &=f(g(1))\\
                &=f(3)\\
                &=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    같은 방법으로 <InlineMath math="x=3" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(4)
                &=g(f(3))\\
                &=f(g(3))\\
                &=f(4)\\
                &=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="x=4" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(2)
                &=g(f(4))\\
                &=f(g(4))\\
                &=f(2)\\
                &=1
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    g(2)+g(4)
                    &=1+2\\
                    &=\boxed{3}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f\circ g=g\circ f" />이면
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        g(f(x))=f(g(x))
                    }
                `} />

                                    <p className="leading-8">
                                        이므로 하나의 대응을 알면 함수{" "}
                                        <InlineMath math="f" />의 대응을 따라가면서{" "}
                                        <InlineMath math="g" />의 다른 대응도 차례대로
                                        알아낼 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{array}{ccccccccc}
                    1&\xrightarrow{f}&3&\xrightarrow{f}&4&\xrightarrow{f}&2&\xrightarrow{f}&1\\
                    \downarrow g&&\downarrow g&&\downarrow g&&\downarrow g&&\downarrow g\\
                    3&\xrightarrow{f}&4&\xrightarrow{f}&2&\xrightarrow{f}&1&\xrightarrow{f}&3
                    \end{array}
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-[1.2fr_0.8fr]">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        집합 <InlineMath math="A=\{1,2,3,4,5\}" />에 대하여
                                        함수 <InlineMath math="f:A\longrightarrow A" />의
                                        대응 관계는 오른쪽 그림과 같다.
                                    </p>

                                    <p className="mt-4 leading-8 text-gray-200">
                                        함수 <InlineMath math="g:A\longrightarrow A" />가
                                    </p>

                                    <BlockMath math={String.raw`
                    f\circ g=g\circ f,\qquad g(1)=3
                `} />

                                    <p className="leading-8 text-gray-200">
                                        을 만족할 때,{" "}
                                        <InlineMath math="g(2)+g(3)" />의 값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.7_3.png"
                                        alt="집합 A에서 A로의 함수 f의 대응 관계"
                                        className="w-full max-w-[250px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    그림에서 함수 <InlineMath math="f" />의 대응은
                                </p>

                                <BlockMath math={String.raw`
                1\xrightarrow{f}2
                \xrightarrow{f}3
                \xrightarrow{f}4
                \xrightarrow{f}5
                \xrightarrow{f}1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                                <p className="leading-8">
                                    이므로 모든 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(g(x))=g(f(x))
            `} />

                                <p className="leading-8">
                                    가 성립합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(g(1))=g(f(1))
            `} />

                                <p className="leading-8">
                                    <InlineMath math="g(1)=3" />,{" "}
                                    <InlineMath math="f(1)=2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(2)
                &=g(f(1))\\
                &=f(g(1))\\
                &=f(3)\\
                &=4
                \end{aligned}
            `} />

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(g(2))=g(f(2))
            `} />

                                <p className="leading-8">
                                    <InlineMath math="g(2)=4" />,{" "}
                                    <InlineMath math="f(2)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(3)
                &=g(f(2))\\
                &=f(g(2))\\
                &=f(4)\\
                &=5
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    g(2)+g(3)
                    &=4+5\\
                    &=\boxed{9}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f\circ g=g\circ f" />이면
                                    </p>

                                    <BlockMath math={String.raw`
                    g(f(x))=f(g(x))
                `} />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="g(1)=3" />이라는 하나의
                                        대응을 알고 있으면, 함수 <InlineMath math="f" />의
                                        대응을 따라가면서 함수 <InlineMath math="g" />의
                                        다른 대응도 차례로 결정할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{array}{cccccc}
                    1&\xrightarrow{f}&2&\xrightarrow{f}&3\\
                    \downarrow g&&\downarrow g&&\downarrow g\\
                    3&\xrightarrow{f}&4&\xrightarrow{f}&5
                    \end{array}
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여
                                함수 <InlineMath math="f:X\longrightarrow X" />는
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            x+1 & (x\ne4)\\
            1 & (x=4)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                이다. 함수 <InlineMath math="g:X\longrightarrow X" />가
                            </p>

                            <BlockMath math={String.raw`
            g(1)=4,\qquad
            g\circ f=f\circ g
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="g(2)+g(4)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 대응을 구하면
                                </p>

                                <BlockMath math={String.raw`
                f(1)=2,\qquad
                f(2)=3,\qquad
                f(3)=4,\qquad
                f(4)=1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                1
                \xrightarrow{f}
                2
                \xrightarrow{f}
                3
                \xrightarrow{f}
                4
                \xrightarrow{f}
                1
            `} />

                                <p className="leading-8">
                                    과 같이 대응합니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                g\circ f=f\circ g
            `} />

                                <p className="leading-8">
                                    이므로 모든 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                g(f(x))=f(g(x))
            `} />

                                <p className="leading-8">
                                    가 성립합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(2)
                &=g(f(1))\\
                &=f(g(1))\\
                &=f(4)\\
                &=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(3)
                &=g(f(2))\\
                &=f(g(2))\\
                &=f(1)\\
                &=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="font-semibold text-white">
                                    이제 <InlineMath math="x=3" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(4)
                &=g(f(3))\\
                &=f(g(3))\\
                &=f(2)\\
                &=3
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    g(2)+g(4)
                    &=1+3\\
                    &=\boxed{4}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 함수 <InlineMath math="f" />의 대응을
                                        순서대로 정리하면
                                    </p>

                                    <BlockMath math={String.raw`
                    1
                    \xrightarrow{f}
                    2
                    \xrightarrow{f}
                    3
                    \xrightarrow{f}
                    4
                    \xrightarrow{f}
                    1
                `} />

                                    <p className="leading-8">
                                        입니다. 그리고{" "}
                                        <InlineMath math="g\circ f=f\circ g" />에서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        g(f(x))=f(g(x))
                    }
                `} />

                                    <p className="leading-8">
                                        을 이용하면 <InlineMath math="g(1)=4" />에서
                                        시작하여 <InlineMath math="f" />의 대응을
                                        따라가면서
                                    </p>

                                    <BlockMath math={String.raw`
                    g(1)=4
                    \;\Longrightarrow\;
                    g(2)=1
                    \;\Longrightarrow\;
                    g(3)=2
                    \;\Longrightarrow\;
                    g(4)=3
                `} />

                                    <p className="leading-8">
                                        을 차례대로 구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수{" "}
                                <InlineMath math="f(x)=-ax+b" />,{" "}
                                <InlineMath math="g(x)=3x+4" />가
                            </p>

                            <BlockMath math={String.raw`
            f\circ g=g\circ f
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때, 함수 <InlineMath math="y=f(x)" />의
                                그래프는 <InlineMath math="a" />의 값에 관계없이
                                점 <InlineMath math="(m,n)" />을 항상 지난다.
                                이때 <InlineMath math="m+n" />의 값을 구하시오.
                                (단, <InlineMath math="a,b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 두 합성함수의 식을 각각 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(x)
                &=f(g(x))\\
                &=f(3x+4)\\
                &=-a(3x+4)+b\\
                &=-3ax-4a+b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(x)
                &=g(f(x))\\
                &=g(-ax+b)\\
                &=3(-ax+b)+4\\
                &=-3ax+3b+4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="f\circ g=g\circ f" />이므로
                                    두 함수의 상수항을 비교하면
                                </p>

                                <BlockMath math={String.raw`
                -4a+b=3b+4
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -4a-2b-4&=0\\
                2a+b+2&=0\\
                b&=-2a-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이를 <InlineMath math="f(x)=-ax+b" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=-ax-2a-2\\
                &=-a(x+2)-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 식에서 <InlineMath math="a" />의 값에 관계없이
                                    항상 같은 함숫값을 가지려면{" "}
                                    <InlineMath math="a" />의 계수가 0이 되어야 하므로
                                </p>

                                <BlockMath math={String.raw`
                x+2=0
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                x=-2
            `} />

                                <p className="leading-8">
                                    입니다. 이때
                                </p>

                                <BlockMath math={String.raw`
                f(-2)=-2
            `} />

                                <p className="leading-8">
                                    이므로 모든 그래프가 지나는 점은
                                </p>

                                <BlockMath math={String.raw`
                (m,n)=(-2,-2)
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    m+n=-2+(-2)=\boxed{-4}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저{" "}
                                        <InlineMath math="f\circ g=g\circ f" />를 이용하여
                                        두 상수 <InlineMath math="a,b" />의 관계를 구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    b=-2a-2
                `} />

                                    <p className="leading-8">
                                        이를 함수식에 대입하여
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=-a(x+2)-2
                `} />

                                    <p className="leading-8">
                                        로 정리하면,{" "}
                                        <strong className="text-white">
                                            매개변수 <InlineMath math="a" />가 붙은 부분을
                                            0으로 만드는 <InlineMath math="x" />의 값
                                        </strong>
                                        을 통해 모든 그래프가 공통으로 지나는 점을
                                        찾을 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x=-2
                    \quad\Longrightarrow\quad
                    y=-2
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            합성함수는 일반적으로 교환법칙이 성립하지 않습니다.
                        </p>

                        <BlockMath math={String.raw`
                f\circ g\ne g\circ f
            `} />

                        <p className="leading-8 text-gray-300">
                            그러나 문제에서
                        </p>

                        <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                        <p className="leading-8 text-gray-300">
                            라는 조건이 주어지면
                        </p>

                        <BlockMath math={String.raw`
                f(g(x))=g(f(x))
            `} />

                        <p className="leading-8 text-gray-300">
                            를 이용합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            즉,{" "}
                            <strong className="text-white">
                                두 합성함수를 각각 구한 뒤 같은 함수의 조건을 이용하여
                                계수나 미지수를 결정
                            </strong>
                            하면 됩니다.
                        </p>
                    </div>

                </div>
            </section>

            {/* 3.8 합성함수의 반복과 추정 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.8 합성함수의 반복과 추정
                </h2>

                <p className="leading-8 text-gray-300">
                    같은 함수를 여러 번 합성하면 함수식이나 함숫값에서
                    일정한 규칙이 나타나는 경우가 있습니다.
                    이러한 규칙을 이용하면 여러 번 합성한 함수의 식이나
                    함숫값을 간단하게 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 같은 함수의 반복 합성 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 같은 함수의 반복 합성
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f" />를 자기 자신과 여러 번
                            합성한 함수를 다음과 같이 나타냅니다.
                        </p>

                        <BlockMath math={String.raw`
                f^1=f
            `} />

                        <BlockMath math={String.raw`
                f^{n+1}=f^n\circ f
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f^2(x)&=f(f(x)),\\
                f^3(x)&=f(f(f(x))),\\
                f^4(x)&=f(f(f(f(x))))
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            와 같이 같은 함수 <InlineMath math="f" />를
                            반복해서 적용합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-200">
                                여기서 <InlineMath math="f^n(x)" />는
                                <InlineMath math="f(x)" />를{" "}
                                <InlineMath math="n" />제곱한다는 뜻이 아닙니다.
                                함수 <InlineMath math="f" />를{" "}
                                <InlineMath math="n" />번 반복해서 적용한다는 뜻입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f^n(x)
                        =
                        \underbrace{f(f(\cdots f(x)\cdots))}_{f\text{를 }n\text{번 적용}}
                    }
                `} />
                        </div>
                    </div>


                    {/* 2. 함수식에서 규칙 찾기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 함수식에서 규칙 찾기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            같은 함수를 반복해서 합성할 때 함수식이 일정한
                            규칙을 가지는 경우가 있습니다.
                        </p>

                        <div className="mt-6 rounded-xl border border-yellow-400/20 bg-black/20 p-5">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="rounded-md bg-yellow-400/15 px-3 py-1 text-sm font-bold text-yellow-300">
                                    예시
                                </span>

                                <p className="font-semibold text-white">
                                    함수식의 규칙을 찾아봅시다.
                                </p>
                            </div>

                            <BlockMath math={String.raw`
        f(x)=x+2
    `} />

                            <p className="leading-8 text-gray-300">
                                일 때 <InlineMath math="f^{10}(3)" />을 구해 봅시다.
                            </p>

                            <p className="mt-5 leading-8 text-gray-300">
                                먼저 같은 함수를 차례대로 합성하면
                            </p>

                            <BlockMath math={String.raw`
                \begin{aligned}
                f^2(x)
                &=f(f(x))\\
                &=f(x+2)\\
                &=x+2+2\\
                &=x+4
                \end{aligned}
            `} />

                            <BlockMath math={String.raw`
                \begin{aligned}
                f^3(x)
                &=f(f^2(x))\\
                &=f(x+4)\\
                &=x+4+2\\
                &=x+6
                \end{aligned}
            `} />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                f(x)=x+2,\qquad
                f^2(x)=x+4,\qquad
                f^3(x)=x+6,\quad\cdots
            `} />

                            <p className="leading-8 text-gray-300">
                                와 같은 규칙을 찾을 수 있습니다.
                            </p>

                            <BlockMath math={String.raw`
                \boxed{
                    f^n(x)=x+2n
                }
            `} />

                            <p className="leading-8 text-gray-300">
                                즉, <InlineMath math="f(x)=x+2" />는 입력값에
                                2를 더하는 함수이므로 함수를{" "}
                                <InlineMath math="n" />번 적용하면 2를{" "}
                                <InlineMath math="n" />번 더하게 됩니다.
                            </p>

                            <BlockMath math={String.raw`
                x
                \xrightarrow{+2}
                x+2
                \xrightarrow{+2}
                x+4
                \xrightarrow{+2}
                \cdots
                \xrightarrow{+2}
                x+2n
            `} />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                \begin{aligned}
                f^{10}(3)
                &=3+2\cdot10\\
                &=23
                \end{aligned}
            `} />

                            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    예시의 답
                                </p>

                                <BlockMath math={String.raw`
                    \boxed{23}
                `} />
                            </div>
                        </div>




                    </div>


                    {/* 3. 함숫값의 반복에서 규칙 찾기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 함숫값의 반복에서 규칙 찾기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수식을 직접 구하기 어려워도 함숫값이 일정한
                            순서로 반복되는 경우가 있습니다.
                        </p>

                        <div className="mt-6 rounded-xl border border-yellow-400/20 bg-black/20 p-5">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="rounded-md bg-yellow-400/15 px-3 py-1 text-sm font-bold text-yellow-300">
                                    예시
                                </span>

                                <p className="font-semibold text-white">
                                    반복되는 함숫값의 규칙을 찾아봅시다.
                                </p>
                            </div>

                            <BlockMath math={String.raw`
        f(1)=2,\qquad
        f(2)=3,\qquad
        f(3)=1
    `} />

                            <p className="leading-8 font-semibold text-white">
                                일 때{" "}
                                <InlineMath math="f^{10}(3)+f^{10}(1)" />의 값을
                                구해 봅시다.
                            </p>

                            <p className="mt-5 leading-8 text-gray-300">
                                함수 <InlineMath math="f" />의 대응을 계속 따라가면
                            </p>

                            <BlockMath math={String.raw`
                1
                \xrightarrow{f}
                2
                \xrightarrow{f}
                3
                \xrightarrow{f}
                1
                \xrightarrow{f}
                2
                \xrightarrow{f}
                \cdots
            `} />

                            <p className="leading-8 text-gray-300">
                                와 같이 세 번마다 같은 값이 반복됩니다.
                            </p>

                            <BlockMath math={String.raw`
                \boxed{
                    1\rightarrow2\rightarrow3\rightarrow1
                }
            `} />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="f^{10}(1)" />을 구할 때
                                10번을 모두 계산할 필요가 없습니다.
                            </p>

                            <BlockMath math={String.raw`
                10=3\cdot3+1
            `} />

                            <p className="leading-8 text-gray-300">
                                이므로 세 번씩 반복되는 부분을 제외하면
                                한 번 적용한 것과 같습니다.
                            </p>

                            <BlockMath math={String.raw`
                f^{10}(1)=f(1)=2
            `} />

                            <p className="mt-5 leading-8 text-gray-300">
                                마찬가지로 <InlineMath math="3" />에서 시작하면
                            </p>

                            <BlockMath math={String.raw`
                3
                \xrightarrow{f}
                1
                \xrightarrow{f}
                2
                \xrightarrow{f}
                3
                \xrightarrow{f}
                1
                \xrightarrow{f}
                \cdots
            `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                f^{10}(3)=f(3)=1
            `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    예시의 답
                                </p>

                                <BlockMath math={String.raw`
                    \begin{aligned}
                    f^{10}(3)+f^{10}(1)
                    &=1+2\\
                    &=\boxed{3}
                    \end{aligned}
                `} />
                            </div>
                        </div>
                    </div>




                    {/* 4. 반복되는 주기 이용 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 반복되는 주기 이용하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함숫값이 일정한 횟수마다 반복되면 그 반복 횟수를
                            이용하여 큰 지수의 합성도 간단하게 계산할 수 있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath math={String.raw`
                1\rightarrow2\rightarrow3\rightarrow1
            `} />

                        <p className="leading-8 text-gray-300">
                            과 같이 세 번마다 원래 값으로 돌아온다면
                        </p>

                        <BlockMath math={String.raw`
                f^3(1)=1,\qquad
                f^3(2)=2,\qquad
                f^3(3)=3
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 <InlineMath math="f^n(x)" />을 구할 때에는{" "}
                            <InlineMath math="n" />을 반복 주기로 나눈 나머지만
                            확인하면 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                생각하는 방법
                            </p>

                            <BlockMath math={String.raw`
                    n=(\text{주기의 배수})+r
                `} />

                            <p className="leading-8 text-gray-200">
                                이면 주기의 배수만큼 반복한 뒤에는 다시 같은
                                위치로 돌아오므로 남은 <InlineMath math="r" />번만
                                따라가면 됩니다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                함수 <InlineMath math="f(x)=\displaystyle\frac{x}{3}" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f^1=f,\qquad
            f^2=f\circ f^1,\qquad
            f^3=f\circ f^2,\qquad
            \cdots,\qquad
            f^{n+1}=f\circ f^n
            \quad(n\text{은 자연수})
        `} />

                            <p className="leading-8 text-gray-200">
                                으로 정의할 때,{" "}
                                <InlineMath math="f^5(729)+f^4(243)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수
                                </p>

                                <BlockMath math={String.raw`
                f(x)=\frac{x}{3}
            `} />

                                <p className="leading-8">
                                    는 입력값을 <InlineMath math="3" />으로 나누는 함수입니다.
                                </p>

                                <p className="leading-8">
                                    같은 함수를 반복해서 합성해 보면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^2(x)
                &=f(f(x))\\
                &=f\left(\frac{x}{3}\right)\\
                &=\frac{x}{3^2}
                \end{aligned}
            `} />

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^3(x)
                &=f(f^2(x))\\
                &=f\left(\frac{x}{3^2}\right)\\
                &=\frac{x}{3^3}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 다음과 같은 규칙을 찾을 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{
                    f^n(x)=\frac{x}{3^n}
                }
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^5(729)
                &=\frac{729}{3^5}\\
                &=\frac{729}{243}\\
                &=3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^4(243)
                &=\frac{243}{3^4}\\
                &=\frac{243}{81}\\
                &=3
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f^5(729)+f^4(243)
                    &=3+3\\
                    &=\boxed{6}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(x)=\displaystyle\frac{x}{3}" />은
                                        입력값을 3으로 나누는 함수입니다.
                                        따라서 함수를 한 번 적용할 때마다 3으로 한 번씩
                                        더 나누게 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x
                    \xrightarrow{\div3}
                    \frac{x}{3}
                    \xrightarrow{\div3}
                    \frac{x}{3^2}
                    \xrightarrow{\div3}
                    \frac{x}{3^3}
                    \xrightarrow{\div3}
                    \cdots
                    \xrightarrow{\div3}
                    \frac{x}{3^n}
                `} />

                                    <p className="leading-8">
                                        즉, 같은 함수를 여러 번 합성하는 문제에서는
                                        몇 번 직접 합성해 본 뒤{" "}
                                        <strong className="text-white">
                                            함수식에서 반복되는 규칙을 찾아
                                            일반적인 <InlineMath math="f^n(x)" />을 추정
                                        </strong>
                                        하면 됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                함수 <InlineMath math="f(x)=1-x" />에 대하여{" "}
                                <InlineMath math="f^{100}(9)+f^{101}(9)" />의 값을 구하시오.
                            </p>

                            <p className="mt-4 leading-8 text-gray-400">
                                (단, <InlineMath math="f^1=f" />,{" "}
                                <InlineMath math="f^{n+1}=f\circ f^n" />이고,{" "}
                                <InlineMath math="n" />은 자연수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="f" />를 두 번 합성해 보면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^2(x)
                &=f(f(x))\\
                &=f(1-x)\\
                &=1-(1-x)\\
                &=x
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 즉, 함수 <InlineMath math="f" />를 두 번
                                    적용하면 처음 입력값으로 돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                x
                \xrightarrow{\ f\ }
                1-x
                \xrightarrow{\ f\ }
                x
                \xrightarrow{\ f\ }
                1-x
                \xrightarrow{\ f\ }
                x
                \rightarrow\cdots
            `} />

                                <p className="leading-8">
                                    따라서 합성 횟수에 따라
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^1(x)&=1-x,\\
                f^2(x)&=x,\\
                f^3(x)&=1-x,\\
                f^4(x)&=x,\quad\cdots
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    와 같이 두 가지 함수가 반복됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{
                    \begin{aligned}
                    n\text{이 홀수}&:\quad f^n(x)=1-x\\
                    n\text{이 짝수}&:\quad f^n(x)=x
                    \end{aligned}
                }
            `} />

                                <p className="leading-8">
                                    <InlineMath math="100" />은 짝수이므로
                                </p>

                                <BlockMath math={String.raw`
                f^{100}(9)=9
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="101" />은 홀수이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^{101}(9)
                &=f(9)\\
                &=1-9\\
                &=-8
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f^{100}(9)+f^{101}(9)
                    &=9+(-8)\\
                    &=\boxed{1}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        반복 합성에서는 큰 지수를 처음부터 계산하지 않고
                                        먼저 몇 번만 합성하여{" "}
                                        <strong className="text-white">
                                            반복되는 규칙을 찾습니다.
                                        </strong>
                                    </p>

                                    <BlockMath math={String.raw`
                    f^2(x)=x
                `} />

                                    <p className="leading-8">
                                        이므로 두 번 합성할 때마다 원래 함수로 돌아갑니다.
                                        따라서 지수가 홀수인지 짝수인지만 확인하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{홀수 번}\rightarrow1-x,\qquad
                        \text{짝수 번}\rightarrow x
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="A=\{0,1,2,3,4\}" />에 대하여
                                함수 <InlineMath math="f:A\longrightarrow A" />를
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            x+1 & (x\le3)\\
            0 & (x=4)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                로 정의하자.
                            </p>

                            <BlockMath math={String.raw`
            f^1(x)=f(x),\qquad
            f^{n+1}(x)=f(f^n(x))
            \quad(n=1,2,3,\cdots)
        `} />

                            <p className="leading-8 text-gray-200">
                                라 할 때,{" "}
                                <InlineMath math="f^{2025}(2)+f^{2026}(3)" />의 값을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 대응을 살펴보면
                                </p>

                                <BlockMath math={String.raw`
                0
                \xrightarrow{f}
                1
                \xrightarrow{f}
                2
                \xrightarrow{f}
                3
                \xrightarrow{f}
                4
                \xrightarrow{f}
                0
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    즉, 함수 <InlineMath math="f" />를 5번 적용하면
                                    처음 값으로 돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{
                    f^5(x)=x
                }
            `} />

                                <p className="leading-8">
                                    따라서 함수를 반복해서 적용할 때에는 지수를
                                    5로 나눈 나머지만 확인하면 됩니다.
                                </p>

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="f^{2025}(2)" />를 구하면
                                </p>

                                <BlockMath math={String.raw`
                2025=5\cdot405
            `} />

                                <p className="leading-8">
                                    이므로 5번씩 반복되는 부분을 모두 제외하면
                                    처음 값으로 돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                f^{2025}(2)=2
            `} />

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="f^{2026}(3)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                2026=5\cdot405+1
            `} />

                                <p className="leading-8">
                                    이므로 5번씩 반복되는 부분을 제외한 뒤
                                    함수 <InlineMath math="f" />를 한 번 더 적용하면 됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^{2026}(3)
                &=f(3)\\
                &=4
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f^{2025}(2)+f^{2026}(3)
                    &=2+4\\
                    &=\boxed{6}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        유한집합에서 함숫값이 반복되는 경우에는
                                        먼저 대응을 따라가며{" "}
                                        <strong className="text-white">
                                            몇 번 만에 처음 값으로 돌아오는지
                                        </strong>
                                        확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    0\to1\to2\to3\to4\to0
                    \qquad\Longrightarrow\qquad
                    \text{주기 }5
                `} />

                                    <p className="leading-8">
                                        따라서 <InlineMath math="f^n(x)" />을 구할 때는{" "}
                                        <InlineMath math="n" />을 5로 나눈 나머지만
                                        확인하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        n=5q+r
                        \quad\Longrightarrow\quad
                        f^n(x)=f^r(x)
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여
                                함수 <InlineMath math="f:X\longrightarrow X" />가
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            5 & (x=1)\\
            x-1 & (x>1)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                이고,
                            </p>

                            <BlockMath math={String.raw`
            f^1=f,\qquad
            f^{n+1}=f\circ f^n
            \quad(n\text{은 자연수})
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="f^{2024}(3)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 대응을 살펴보면
                                </p>

                                <BlockMath math={String.raw`
                f(1)=5,\qquad
                f(2)=1,\qquad
                f(3)=2,\qquad
                f(4)=3,\qquad
                f(5)=4
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="3" />에서 시작하여
                                    함수 <InlineMath math="f" />를 계속 적용하면
                                </p>

                                <BlockMath math={String.raw`
                3
                \xrightarrow{f}
                2
                \xrightarrow{f}
                1
                \xrightarrow{f}
                5
                \xrightarrow{f}
                4
                \xrightarrow{f}
                3
            `} />

                                <p className="leading-8">
                                    과 같이 5번 만에 처음 값으로 돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{f^5(3)=3}
            `} />

                                <p className="leading-8">
                                    따라서 함숫값은 5번마다 반복됩니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="2024" />를 5로 나누면
                                </p>

                                <BlockMath math={String.raw`
                2024=5\cdot404+4
            `} />

                                <p className="leading-8">
                                    이므로 5번씩 반복되는 부분을 제외하고
                                    함수 <InlineMath math="f" />를 4번 적용하면 됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)&=2,\\
                f^2(3)&=1,\\
                f^3(3)&=5,\\
                f^4(3)&=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f^{2024}(3)=f^4(3)=4
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{4}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        큰 지수의 반복 합성에서는 직접{" "}
                                        <InlineMath math="2024" />번 계산하지 않고,
                                        먼저 함숫값의{" "}
                                        <strong className="text-white">
                                            반복 주기
                                        </strong>
                                        를 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    3\to2\to1\to5\to4\to3
                    \qquad\Longrightarrow\qquad
                    \text{주기 }5
                `} />

                                    <p className="leading-8">
                                        그다음 합성 횟수를 주기로 나눈 나머지만큼만
                                        함수를 적용하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    2024\equiv4\pmod5
                    \quad\Longrightarrow\quad
                    f^{2024}(3)=f^4(3)
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여{" "}
                                        <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                        함수 <InlineMath math="f" />는 오른쪽 그림과 같고
                                    </p>

                                    <BlockMath math={String.raw`
                    f^2=f\circ f,
                `} />

                                    <BlockMath math={String.raw`
                    f^{n+1}=f\circ f^n
                    \qquad(n=2,3,4,\cdots)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        으로 정의할 때,
                                    </p>

                                    <BlockMath math={String.raw`
                    f^{100}(1)+f^{101}(2)+f^{102}(3)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        의 값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.8_5.png"
                                        alt="집합 X에서 X로의 함수 f의 대응 관계"
                                        className="w-full max-w-[240px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 그림에서 함수 <InlineMath math="f" />의 대응을
                                    읽으면
                                </p>

                                <BlockMath math={String.raw`
                f(1)=3,\qquad
                f(2)=1,\qquad
                f(3)=2,\qquad
                f(4)=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="1,2,3" />의 대응을 계속
                                    따라가면
                                </p>

                                <BlockMath math={String.raw`
                1
                \xrightarrow{f}
                3
                \xrightarrow{f}
                2
                \xrightarrow{f}
                1
            `} />

                                <p className="leading-8">
                                    과 같이 3번마다 처음 값으로 돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{\text{주기 }3}
            `} />

                                <p className="font-semibold text-white">
                                    먼저 <InlineMath math="f^{100}(1)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                100=3\cdot33+1
            `} />

                                <p className="leading-8">
                                    이므로 한 번 적용한 것과 같습니다.
                                </p>

                                <BlockMath math={String.raw`
                f^{100}(1)=f(1)=3
            `} />

                                <p className="font-semibold text-white">
                                    다음으로 <InlineMath math="f^{101}(2)" />를 구하면
                                </p>

                                <BlockMath math={String.raw`
                101=3\cdot33+2
            `} />

                                <p className="leading-8">
                                    이므로 두 번 적용한 것과 같습니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^{101}(2)
                &=f^2(2)\\
                &=f(1)\\
                &=3
                \end{aligned}
            `} />

                                <p className="font-semibold text-white">
                                    마지막으로 <InlineMath math="f^{102}(3)" />을 구하면
                                </p>

                                <BlockMath math={String.raw`
                102=3\cdot34
            `} />

                                <p className="leading-8">
                                    이므로 3번씩 반복되는 부분만 있고 처음 값으로
                                    돌아옵니다.
                                </p>

                                <BlockMath math={String.raw`
                f^{102}(3)=3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f^{100}(1)+f^{101}(2)+f^{102}(3)
                    &=3+3+3\\
                    &=\boxed{9}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        대응 그림에서는 먼저 각 원소의 이동을 따라가며
                                        반복되는 순환을 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    1\to3\to2\to1
                    \qquad\Longrightarrow\qquad
                    \text{주기 }3
                `} />

                                    <p className="leading-8">
                                        따라서 큰 지수의 반복 합성은 지수를 3으로 나눈
                                        나머지만 확인하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        n=3q+r
                        \quad\Longrightarrow\quad
                        f^n(x)=f^r(x)
                    }
                `} />

                                    <p className="leading-8">
                                        단, 나머지가 <InlineMath math="0" />이면
                                        한 바퀴를 모두 돌아 처음 값으로 돌아온다는 점에
                                        주의합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{x\mid0\le x\le1\}" />에서
                                정의된 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            2x & \left(0\le x<\dfrac12\right)\\[2mm]
            -2x+2 & \left(\dfrac12\le x\le1\right)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f^1=f,\qquad
            f^{n+1}=f\circ f^n
            \quad(n\text{은 자연수})
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때,{" "}
                                <InlineMath math="f^{99}\left(\displaystyle\frac25\right)" />의
                                값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="\displaystyle\frac25" />에서
                                    시작하여 함수 <InlineMath math="f" />를 차례대로
                                    적용해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\displaystyle\frac25<\frac12" />이므로
                                    첫 번째 식을 사용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac25\right)
                &=2\cdot\frac25\\
                &=\frac45
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이번에는{" "}
                                    <InlineMath math="\displaystyle\frac45\ge\frac12" />이므로
                                    두 번째 식을 사용합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac45\right)
                &=-2\cdot\frac45+2\\
                &=-\frac85+\frac{10}{5}\\
                &=\frac25
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                \frac25
                \xrightarrow{f}
                \frac45
                \xrightarrow{f}
                \frac25
                \xrightarrow{f}
                \frac45
                \xrightarrow{f}
                \cdots
            `} />

                                <p className="leading-8">
                                    와 같이 두 번마다 반복됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{\text{주기 }2}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f^1\left(\frac25\right)&=\frac45,\\
                f^2\left(\frac25\right)&=\frac25,\\
                f^3\left(\frac25\right)&=\frac45,\quad\cdots
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 홀수 번 적용하면{" "}
                                    <InlineMath math="\displaystyle\frac45" />,
                                    짝수 번 적용하면{" "}
                                    <InlineMath math="\displaystyle\frac25" />가 됩니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="99" />는 홀수이므로
                                </p>

                                <BlockMath math={String.raw`
                f^{99}\left(\frac25\right)=\frac45
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{\frac45}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        조각함수를 반복해서 합성할 때에는 각 단계에서
                                        나온 값이{" "}
                                        <strong className="text-white">
                                            어느 조건에 해당하는지 다시 확인
                                        </strong>
                                        해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac25
                    \longrightarrow
                    \frac45
                    \longrightarrow
                    \frac25
                `} />

                                    <p className="leading-8">
                                        여기서는 두 번 적용하면 처음 값으로 돌아오므로
                                        반복 주기는 2입니다. 따라서 큰 지수를 직접
                                        계산하지 않고 홀수인지 짝수인지만 확인하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \begin{aligned}
                        n\text{이 홀수}&:\quad
                        f^n\left(\frac25\right)=\frac45\\
                        n\text{이 짝수}&:\quad
                        f^n\left(\frac25\right)=\frac25
                        \end{aligned}
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid items-center gap-6 md:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-8 text-gray-200">
                                        집합 <InlineMath math="A=\{x\mid0\le x\le1\}" />에
                                        대하여 <InlineMath math="A" />에서{" "}
                                        <InlineMath math="A" />로의 함수{" "}
                                        <InlineMath math="y=f(x)" />의 그래프가 오른쪽
                                        그림과 같다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f^1=f,\qquad
                    f^{n+1}=f\circ f^n
                    \quad(n=1,2,3,\cdots)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        라고 할 때,
                                    </p>

                                    <BlockMath math={String.raw`
                    f\left(\frac57\right)
                    +f^2\left(\frac57\right)
                    +f^3\left(\frac57\right)
                    +\cdots+
                    f^{15}\left(\frac57\right)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        의 값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.8_7.png"
                                        alt="구간 0 이상 1 이하에서 정의된 함수 f의 그래프"
                                        className="w-full max-w-[340px] rounded-xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    그래프를 이용하여 함수식을 나타내면
                                </p>

                                <BlockMath math={String.raw`
                f(x)=
                \begin{cases}
                2x & \left(0\le x\le\dfrac12\right)\\[2mm]
                -2x+2 & \left(\dfrac12\le x\le1\right)
                \end{cases}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="\displaystyle\frac57" />에서
                                    시작하여 함수 <InlineMath math="f" />를 차례대로
                                    적용해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\displaystyle\frac57>\frac12" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac57\right)
                &=-2\cdot\frac57+2\\
                &=\frac47
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 다시{" "}
                                    <InlineMath math="\displaystyle\frac47>\frac12" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac47\right)
                &=-2\cdot\frac47+2\\
                &=\frac67
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    또 <InlineMath math="\displaystyle\frac67>\frac12" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac67\right)
                &=-2\cdot\frac67+2\\
                &=\frac27
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이번에는{" "}
                                    <InlineMath math="\displaystyle\frac27<\frac12" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f\left(\frac27\right)
                =2\cdot\frac27
                =\frac47
            `} />

                                <p className="leading-8">
                                    따라서 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                \frac57
                \xrightarrow{f}
                \frac47
                \xrightarrow{f}
                \frac67
                \xrightarrow{f}
                \frac27
                \xrightarrow{f}
                \frac47
                \xrightarrow{f}
                \cdots
            `} />

                                <p className="leading-8">
                                    와 같이 <InlineMath math="f^1\left(\frac57\right)" />부터
                                    세 값
                                </p>

                                <BlockMath math={String.raw`
                \frac47,\qquad
                \frac67,\qquad
                \frac27
            `} />

                                <p className="leading-8">
                                    이 반복됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \boxed{\text{주기 }3}
            `} />

                                <p className="leading-8">
                                    한 주기의 합은
                                </p>

                                <BlockMath math={String.raw`
                \frac47+\frac67+\frac27
                =\frac{12}{7}
            `} />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath math={String.raw`
                15=3\cdot5
            `} />

                                <p className="leading-8">
                                    이므로 같은 세 항의 묶음이 5번 반복됩니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &f\left(\frac57\right)
                    +f^2\left(\frac57\right)
                    +\cdots+
                    f^{15}\left(\frac57\right)\\[2mm]
                    &=
                    5\left(
                    \frac47+\frac67+\frac27
                    \right)\\[2mm]
                    &=5\cdot\frac{12}{7}\\
                    &=\boxed{\frac{60}{7}}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        반복 합성의 합을 구하는 문제에서는 각 항을
                                        모두 계산하지 않고 먼저{" "}
                                        <strong className="text-white">
                                            반복되는 함숫값과 그 주기
                                        </strong>
                                        를 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac47
                    \to
                    \frac67
                    \to
                    \frac27
                    \to
                    \frac47
                `} />

                                    <p className="leading-8">
                                        여기서는 주기가 3이고 구해야 하는 항이 15개이므로,
                                        한 주기의 합을 구한 뒤 5배하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{전체 합}
                        =
                        \text{한 주기의 합}
                        \times
                        \text{반복 횟수}
                    }
                `} />
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
                                집합 <InlineMath math="X=\{2,4,6,8\}" />에 대하여 함수{" "}
                                <InlineMath math="f:X\to X" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                                <p className="leading-8 text-gray-300">
                                    (가) 집합 <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x+f(f(x))\le10
                `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    (나) 함수 <InlineMath math="f" />의 치역은{" "}
                                    <InlineMath math="\{2,4,8\}" />이다.
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                보기에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                                <p className="leading-8 text-gray-300">
                                    ㄱ. <InlineMath math="f(f(8))=2" />
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    ㄴ. <InlineMath math="f(6)=8" />
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    ㄷ. 가능한 함수 <InlineMath math="f" />의 개수는{" "}
                                    <InlineMath math="3" />이다.
                                </p>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄱ, ㄴ</div>
                                <div>③ ㄱ, ㄷ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-6 text-gray-300">
                                <div>
                                    <p className="font-bold text-white">
                                        ㄱ
                                    </p>

                                    <p className="mt-2 leading-8">
                                        조건 (가)에 <InlineMath math="x=8" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        8+f(f(8))\le10
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(8))\le2
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다. 함수 <InlineMath math="f" />의 치역은{" "}
                                        <InlineMath math="\{2,4,8\}" />이므로{" "}
                                        <InlineMath math="f(f(8))" />도 이 중 하나입니다.
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(8))=2
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 ㄱ은 <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="font-bold text-white">
                                        ㄴ, ㄷ
                                    </p>

                                    <p className="mt-2 leading-8">
                                        조건 (가)와 치역 조건을 동시에 만족시키는 대응을
                                        확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        치역이 <InlineMath math="\{2,4,8\}" />이므로{" "}
                                        <InlineMath math="2,4,8" />은 모두 적어도 한 번씩
                                        함숫값으로 나타나야 합니다.
                                    </p>

                                    <p className="leading-8">
                                        또한 각 <InlineMath math="x" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(x))\le10-x
                    `}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="leading-8">
                                        이를 만족하는 함수의 대응은 다음 세 가지뿐입니다.
                                    </p>

                                    <div className="overflow-x-auto">
                                        <table className="mx-auto min-w-[460px] border-collapse text-center">
                                            <tbody>
                                                <tr>
                                                    <td className="border border-white/20 px-4 py-2 font-bold">
                                                        <InlineMath math="x" />
                                                    </td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                    <td className="border border-white/20 px-4 py-2">4</td>
                                                    <td className="border border-white/20 px-4 py-2">6</td>
                                                    <td className="border border-white/20 px-4 py-2">8</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-white/20 px-4 py-2 font-bold">
                                                        <InlineMath math="f(x)" />
                                                    </td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                    <td className="border border-white/20 px-4 py-2">8</td>
                                                    <td className="border border-white/20 px-4 py-2">4</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-white/20 px-4 py-2 font-bold">
                                                        <InlineMath math="f(x)" />
                                                    </td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                    <td className="border border-white/20 px-4 py-2">4</td>
                                                    <td className="border border-white/20 px-4 py-2">8</td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                </tr>

                                                <tr>
                                                    <td className="border border-white/20 px-4 py-2 font-bold">
                                                        <InlineMath math="f(x)" />
                                                    </td>
                                                    <td className="border border-white/20 px-4 py-2">4</td>
                                                    <td className="border border-white/20 px-4 py-2">2</td>
                                                    <td className="border border-white/20 px-4 py-2">8</td>
                                                    <td className="border border-white/20 px-4 py-2">4</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="leading-8">
                                        세 경우 모두
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(6)=8
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 ㄴ은 <strong className="text-white">참</strong>입니다.
                                    </p>

                                    <p className="leading-8">
                                        가능한 함수는 모두 <InlineMath math="3" />개이므로
                                        ㄷ은 <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <p className="mt-3 leading-8">
                                        옳은 것은 ㄱ, ㄴ, ㄷ입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        {\text{⑤}}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성된 함숫값에 대한 부등식은 큰 값부터 대입하면
                                        강한 조건을 얻을 수 있습니다. 특히{" "}
                                        <InlineMath math="x=8" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(8))=2
                    `}
                                    />

                                    <p className="leading-8">
                                        가 바로 결정됩니다. 그다음 치역이 정확히{" "}
                                        <InlineMath math="\{2,4,8\}" />이라는 조건과 함께
                                        가능한 대응을 확인합니다.
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여 함수{" "}
                                <InlineMath math="f:X\to X" />가 있습니다.
                                함수 <InlineMath math="f" />가 일대일대응일 때,
                                보기에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-emerald-400/40 p-3">
                                <div className="space-y-4 text-gray-300">
                                    <p className="leading-8">
                                        ㄱ. <InlineMath math="f(1)\times f(2)=6" />이면{" "}
                                        <InlineMath math="f(3)+f(4)+f(5)=10" />이다.
                                    </p>

                                    <p className="leading-8">
                                        ㄴ. 집합 <InlineMath math="X" />의 모든 원소{" "}
                                        <InlineMath math="x" />에 대하여{" "}
                                        <InlineMath math="(f\circ f)(x)=x" />이면{" "}
                                        <InlineMath math="f(a)=a" />인 집합{" "}
                                        <InlineMath math="X" />의 원소{" "}
                                        <InlineMath math="a" />가 존재한다.
                                    </p>

                                    <p className="leading-8">
                                        ㄷ. 집합 <InlineMath math="X" />의 어떤 원소{" "}
                                        <InlineMath math="x" />에 대하여{" "}
                                        <InlineMath math="(f\circ f\circ f)(x)=x" />이면{" "}
                                        <InlineMath math="f(b)=b" />인 집합{" "}
                                        <InlineMath math="X" />의 원소{" "}
                                        <InlineMath math="b" />가 존재한다.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄷ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-6 text-gray-300">
                                {/* ㄱ */}
                                <div>
                                    <p className="font-bold text-white">
                                        ㄱ
                                    </p>

                                    <p className="mt-2 leading-8">
                                        함수 <InlineMath math="f" />는 일대일대응이므로{" "}
                                        <InlineMath math="f(1)" />과{" "}
                                        <InlineMath math="f(2)" />는 서로 다른{" "}
                                        <InlineMath math="X" />의 원소입니다.
                                    </p>

                                    <p className="leading-8">
                                        서로 다른 두 원소의 곱이 <InlineMath math="6" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \{f(1),f(2)\}=\{2,3\}
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        일대일대응에서는 <InlineMath math="1,2,3,4,5" />가
                                        함숫값으로 하나씩 모두 나타나므로{" "}
                                        <InlineMath math="f(3),f(4),f(5)" />는{" "}
                                        <InlineMath math="1,4,5" />를 하나씩 가집니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(3)+f(4)+f(5)
                        =
                        1+4+5
                        =
                        10
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서 ㄱ은{" "}
                                        <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                {/* ㄴ */}
                                <div>
                                    <p className="font-bold text-white">
                                        ㄴ
                                    </p>

                                    <p className="mt-2 leading-8">
                                        모든 <InlineMath math="x\in X" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ f)(x)=x
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 각 원소는 함수를 두 번 적용하면
                                        다시 원래 원소로 돌아옵니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 원소의 대응은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a\longrightarrow a
                    `}
                                    />

                                    <p className="leading-8">
                                        처럼 자기 자신에 대응하거나,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a\longrightarrow b\longrightarrow a
                    `}
                                    />

                                    <p className="leading-8">
                                        처럼 두 원소가 서로 바뀌는 형태가 됩니다.
                                    </p>

                                    <p className="leading-8">
                                        두 원소가 서로 바뀌는 경우에는 원소가 항상{" "}
                                        <InlineMath math="2" />개씩 필요합니다.
                                        그런데 집합 <InlineMath math="X" />의 원소는{" "}
                                        <InlineMath math="5" />개이므로 모든 원소를
                                        두 개씩 짝지을 수 없습니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 적어도 하나의 원소{" "}
                                        <InlineMath math="a" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(a)=a
                    `}
                                    />

                                    <p className="leading-8">
                                        를 만족합니다. 따라서 ㄴ은{" "}
                                        <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                {/* ㄷ */}
                                <div>
                                    <p className="font-bold text-white">
                                        ㄷ
                                    </p>

                                    <p className="mt-2 leading-8">
                                        다음과 같은 일대일대응을 생각할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        1\longrightarrow2
                        \longrightarrow3
                        \longrightarrow1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        4\longrightarrow5
                        \longrightarrow4
                    `}
                                    />

                                    <p className="leading-8">
                                        이 함수에서는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ f\circ f)(1)=1
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 세 번 합성하여 원래 값으로 돌아오는 원소가
                                        존재합니다.
                                    </p>

                                    <p className="leading-8">
                                        그러나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(1)\ne1,\quad
                        f(2)\ne2,\quad
                        f(3)\ne3,\quad
                        f(4)\ne4,\quad
                        f(5)\ne5
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="f(b)=b" />인 원소는
                                        존재하지 않습니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 ㄷ은{" "}
                                        <strong className="text-white">거짓</strong>입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <p className="mt-3 leading-8">
                                        옳은 것은 ㄱ, ㄴ입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        {\text{③}}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        일대일대응에서 같은 함수를 반복하여 합성할 때는
                                        원소들이 어떻게 되돌아오는지를 살펴봅니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        특히
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ f)(x)=x
                    `}
                                    />

                                    <p className="leading-8">
                                        이면 원소는 자기 자신에 대응하거나 두 원소가 서로
                                        바뀝니다. 원소의 개수가 홀수이면 반드시 자기 자신에
                                        대응하는 원소가 존재합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        반면 세 번 합성하여 원래 값으로 돌아온다고 해서
                                        반드시 자기 자신에 대응하는 원소가 있는 것은 아닙니다.
                                        세 원소가 순환하는 경우가 있기 때문입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>


                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-6 text-gray-200">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    1. 반복 합성
                                </p>

                                <BlockMath math={String.raw`
                        f^1=f,\qquad
                        f^{n+1}=f^n\circ f
                    `} />

                                <p className="text-center leading-8">
                                    <InlineMath math="f^n" />은 함수{" "}
                                    <InlineMath math="f" />를{" "}
                                    <InlineMath math="n" />번 반복하여 합성한 함수입니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    2. 함수식에 규칙이 있는 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f^2(x),f^3(x),\cdots" />를
                                    몇 번 직접 구하여 함수식의 규칙을 찾습니다.
                                </p>

                                <BlockMath math={String.raw`
                        f(x)=x+2
                        \quad\Longrightarrow\quad
                        f^n(x)=x+2n
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    3. 함숫값이 반복되는 경우
                                </p>

                                <p className="leading-8">
                                    함숫값의 대응을 계속 따라가면서 반복되는
                                    주기를 찾습니다.
                                </p>

                                <BlockMath math={String.raw`
                        1\rightarrow2\rightarrow3\rightarrow1
                        \quad\Longrightarrow\quad
                        \text{주기 }3
                    `} />

                                <p className="text-center leading-8">
                                    지수를 주기로 나눈 나머지를 이용하면
                                    큰 지수의 합성도 빠르게 계산할 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* 3.9 합성함수에서 함수 구하기 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.9 합성함수에서 함수 구하기
                </h2>

                <p className="leading-8 text-gray-300">
                    합성함수의 관계식에서 한 함수가 주어지지 않은 경우,
                    주어진 함수들을 이용하여 그 함수의 식을 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 함수 구하기의 기본 원리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 함수 구하기의 기본 원리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            합성함수에서 어떤 함수의 식을 구하려면
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="text-center text-lg font-bold text-yellow-300">
                                구하려는 함수는 남기고, 나머지 함수는 관계식으로 바꾼다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            예를 들어 함수 <InlineMath math="h" />를 구하려면
                            합성함수 안에 있는 <InlineMath math="f" />와{" "}
                            <InlineMath math="g" />는 주어진 함수식을 이용하여
                            없애고, <InlineMath math="h" />만 남도록 정리합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{합성함수의 관계식}
                    \longrightarrow
                    h(\text{어떤 식})=\text{어떤 식}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            그다음 <InlineMath math="h" /> 안에 들어 있는 식이
                            단순히 <InlineMath math="x" />가 되도록 바꾸면{" "}
                            <InlineMath math="h(x)" />를 구할 수 있습니다.
                        </p>
                    </div>


                    {/* 2. h(x)가 바로 나타나는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="h(x)" />가 바로 나타나는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수
                        </p>

                        <BlockMath math={String.raw`
                f(x)=2x-1,\qquad
                g(x)=-3x+4
            `} />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath math={String.raw`
                (f\circ h)(x)=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 함수 <InlineMath math="h(x)" />를
                            구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            합성함수의 뜻에 따라
                        </p>

                        <BlockMath math={String.raw`
                f(h(x))=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            구하려는 <InlineMath math="h" />는 그대로 남겨 두고,{" "}
                            <InlineMath math="f" />와 <InlineMath math="g" />를
                            주어진 함수식으로 바꾸면
                        </p>

                        <BlockMath math={String.raw`
                2h(x)-1=-3x+4
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다. 이를 <InlineMath math="h(x)" />에 대하여
                            정리하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                2h(x)&=-3x+5\\
                h(x)&=-\frac32x+\frac52
                \end{aligned}
            `} />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        h(x)=-\frac32x+\frac52
                    }
                `} />
                        </div>
                    </div>


                    {/* 3. h(어떤 식)으로 나타나는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. <InlineMath math="h(\text{어떤 식})" />으로 나타나는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이번에는
                        </p>

                        <BlockMath math={String.raw`
                (h\circ f)(x)=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 함수 <InlineMath math="h(x)" />를
                            구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            합성함수의 뜻에 따라
                        </p>

                        <BlockMath math={String.raw`
                h(f(x))=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            이고, <InlineMath math="f(x)=2x-1" />,{" "}
                            <InlineMath math="g(x)=-3x+4" />를 대입하면
                        </p>

                        <BlockMath math={String.raw`
                h(2x-1)=-3x+4
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            여기서 구하려는 것은 <InlineMath math="h(x)" />이므로
                            <InlineMath math="h" /> 안의{" "}
                            <InlineMath math="2x-1" />을{" "}
                            <InlineMath math="x" />로 만들어야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 위의 식에서 <InlineMath math="x" /> 대신
                        </p>

                        <BlockMath math={String.raw`
                \frac{x+1}{2}
            `} />

                        <p className="leading-8 text-gray-300">
                            을 대입합니다.
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                h\left(
                    2\cdot\frac{x+1}{2}-1
                \right)
                &=
                -3\left(\frac{x+1}{2}\right)+4\\[2mm]
                h(x)
                &=
                -\frac32x+\frac52
                \end{aligned}
            `} />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        h(x)=-\frac32x+\frac52
                    }
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                다른 방법
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="2x-1=t" />로 놓고
                                <InlineMath math="x" />를{" "}
                                <InlineMath math="t" />에 대한 식으로 나타내도 됩니다.
                            </p>

                            <BlockMath math={String.raw`
                    2x-1=t
                    \quad\Longrightarrow\quad
                    x=\frac{t+1}{2}
                `} />

                            <p className="leading-8 text-gray-200">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    h(t)
                    &=-3\left(\frac{t+1}{2}\right)+4\\
                    &=-\frac32t+\frac52
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-200">
                                이므로 문자를 다시 <InlineMath math="x" />로
                                나타내면 같은 결과를 얻습니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 여러 함수가 합성된 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 여러 함수가 합성된 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이번에는
                        </p>

                        <BlockMath math={String.raw`
                (h\circ g\circ f)(x)=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 함수 <InlineMath math="h(x)" />를
                            구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            오른쪽에 있는 함수부터 차례대로 계산하면
                        </p>

                        <BlockMath math={String.raw`
                (h\circ g\circ f)(x)
                =
                h(g(f(x)))
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            먼저
                        </p>

                        <BlockMath math={String.raw`
                f(x)=2x-1
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                g(f(x))
                &=g(2x-1)\\
                &=-3(2x-1)+4\\
                &=-6x+7
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 주어진 관계식은
                        </p>

                        <BlockMath math={String.raw`
                h(-6x+7)=-3x+4
            `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            <InlineMath math="h" /> 안의{" "}
                            <InlineMath math="-6x+7" />을{" "}
                            <InlineMath math="x" />로 만들기 위하여
                            위의 식에서 <InlineMath math="x" /> 대신
                        </p>

                        <BlockMath math={String.raw`
                \frac{7-x}{6}
            `} />

                        <p className="leading-8 text-gray-300">
                            을 대입합니다.
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                h\left(
                    -6\cdot\frac{7-x}{6}+7
                \right)
                &=
                -3\left(\frac{7-x}{6}\right)+4\\[2mm]
                h(x)
                &=
                -\frac{7-x}{2}+4\\[2mm]
                &=\frac{x+1}{2}
                \end{aligned}
            `} />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        h(x)=\frac{x+1}{2}
                    }
                `} />
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                모든 실수 <InlineMath math="x" />에 대하여 함수{" "}
                                <InlineMath math="f" />가
                            </p>

                            <BlockMath math={String.raw`
            f\left(\frac{x+1}{2}\right)=3x+2
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="f\left(\displaystyle\frac{1-2x}{3}\right)" />를
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 식은
                                </p>

                                <BlockMath math={String.raw`
                f\left(\frac{x+1}{2}\right)=3x+2
            `} />

                                <p className="leading-8">
                                    입니다. 함수 <InlineMath math="f(x)" />의 식을
                                    구하려면 함수 안의
                                </p>

                                <BlockMath math={String.raw`
                \frac{x+1}{2}
            `} />

                                <p className="leading-8">
                                    를 <InlineMath math="x" />로 만들면 됩니다.
                                </p>

                                <p className="leading-8">
                                    따라서 주어진 식의 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="2x-1" />을 대입합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(
                    \frac{(2x-1)+1}{2}
                \right)
                &=3(2x-1)+2\\[2mm]
                f(x)
                &=6x-3+2\\
                &=6x-1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(x)=6x-1
            `} />

                                <p className="leading-8">
                                    입니다. 이제{" "}
                                    <InlineMath math="\displaystyle\frac{1-2x}{3}" />을
                                    대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac{1-2x}{3}\right)
                &=6\left(\frac{1-2x}{3}\right)-1\\
                &=2(1-2x)-1\\
                &=1-4x
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f\left(\frac{1-2x}{3}\right)=1-4x
                    }
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(\text{어떤 식})" />의 형태로
                                        주어졌을 때 함수 <InlineMath math="f(x)" />를
                                        구하려면,{" "}
                                        <strong className="text-white">
                                            함수 안의 식이 <InlineMath math="x" />가 되도록
                                            원래 식의 <InlineMath math="x" />에 적절한 식을
                                            대입
                                        </strong>
                                        합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{x+1}{2}
                    \longrightarrow x
                    \qquad
                    \text{이므로}
                    \qquad
                    x\longrightarrow2x-1
                `} />

                                    <p className="leading-8">
                                        이 방법은 새로운 문자를 놓고 치환하여 푸는 것과
                                        같은 원리입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수{" "}
                                <InlineMath math="f(x)=2x-7" />,{" "}
                                <InlineMath math="g(x)=-4x+3" />일 때,
                            </p>

                            <BlockMath math={String.raw`
            (h\circ f)(x)=g(x)
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족하는 함수 <InlineMath math="h(x)" />에 대하여{" "}
                                <InlineMath math="h(-3)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-6 text-gray-300">

                                {/* 풀이 1 */}
                                <div>
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 1. 필요한 함숫값을 바로 구하기
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 뜻에 따라
                                    </p>

                                    <BlockMath math={String.raw`
                    h(f(x))=g(x)
                `} />

                                    <p className="leading-8">
                                        이므로 주어진 함수식을 대입하면
                                    </p>

                                    <BlockMath math={String.raw`
                    h(2x-7)=-4x+3
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        구하려는 값은 <InlineMath math="h(-3)" />이므로
                                        함수 <InlineMath math="h" /> 안의{" "}
                                        <InlineMath math="2x-7" />이{" "}
                                        <InlineMath math="-3" />이 되도록 하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    2x-7&=-3\\
                    2x&=4\\
                    x&=2
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서{" "}
                                        <InlineMath math="h(2x-7)=-4x+3" />의 양변에{" "}
                                        <InlineMath math="x=2" />를 대입하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    h(2\cdot2-7)
                    &=-4\cdot2+3\\
                    h(-3)&=-5
                    \end{aligned}
                `} />
                                </div>


                                {/* 풀이 2 */}
                                <div className="border-t border-white/10 pt-6">
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 2. <InlineMath math="h(x)" />를 먼저 구하기
                                    </p>

                                    <p className="leading-8">
                                        풀이 1과 마찬가지로
                                    </p>

                                    <BlockMath math={String.raw`
                    h(2x-7)=-4x+3
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        이번에는 함수 <InlineMath math="h(x)" />의 식을
                                        구하기 위해 함수 안의{" "}
                                        <InlineMath math="2x-7" />을{" "}
                                        <InlineMath math="x" />로 만듭니다.
                                    </p>

                                    <p className="leading-8">
                                        이를 위해 원래 식의 <InlineMath math="x" /> 대신
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{x+7}{2}
                `} />

                                    <p className="leading-8">
                                        를 대입하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    h\left(
                        2\cdot\frac{x+7}{2}-7
                    \right)
                    &=
                    -4\left(\frac{x+7}{2}\right)+3\\[2mm]
                    h(x)
                    &=-2(x+7)+3\\
                    &=-2x-11
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    h(-3)
                    &=-2(-3)-11\\
                    &=6-11\\
                    &=-5
                    \end{aligned}
                `} />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{-5}
                `} />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 관계식을 정리하여
                                    </p>

                                    <BlockMath math={String.raw`
                    h(2x-7)=-4x+3
                `} />

                                    <p className="leading-8">
                                        을 얻은 뒤, 무엇을 구하는지에 따라 두 가지 방법으로
                                        생각할 수 있습니다.
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        <p className="leading-8">
                                            <strong className="text-white">
                                                특정 함숫값 <InlineMath math="h(-3)" />만
                                                필요한 경우
                                            </strong>
                                            {" → "}
                                            함수 안의 식을 <InlineMath math="-3" />으로
                                            만듭니다.
                                        </p>

                                        <p className="leading-8">
                                            <strong className="text-white">
                                                함수 <InlineMath math="h(x)" /> 자체가
                                                필요한 경우
                                            </strong>
                                            {" → "}
                                            함수 안의 식을 <InlineMath math="x" />로
                                            만듭니다.
                                        </p>
                                    </div>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \begin{aligned}
                        h(-3)\text{을 구할 때}&:\quad 2x-7=-3\\
                        h(x)\text{를 구할 때}&:\quad 2x-7\to x
                        \end{aligned}
                    }
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="h(-3)" />만
                                        필요하므로 <strong className="text-white">풀이 1이 더 간단합니다.</strong>
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                실수 전체의 집합에서 정의된 두 함수{" "}
                                <InlineMath math="f,\ g" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            g(x)=\frac{-x+3}{2},
            \qquad
            (f\circ g)(x)=\frac13x+7
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="f(6)+f(3)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 뜻에 따라
                                </p>

                                <BlockMath math={String.raw`
                f(g(x))=\frac13x+7
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="g(x)=\displaystyle\frac{-x+3}{2}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f\left(\frac{-x+3}{2}\right)=\frac13x+7
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                {/* f(6) */}
                                <p className="text-lg font-bold text-white">
                                    <InlineMath math="f(6)" /> 구하기
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" /> 안의 식이{" "}
                                    <InlineMath math="6" />이 되도록 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{-x+3}{2}&=6\\
                -x+3&=12\\
                x&=-9
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 주어진 식에{" "}
                                    <InlineMath math="x=-9" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(6)
                &=\frac13(-9)+7\\
                &=-3+7\\
                &=4
                \end{aligned}
            `} />

                                {/* f(3) */}
                                <p className="text-lg font-bold text-white">
                                    <InlineMath math="f(3)" /> 구하기
                                </p>

                                <p className="leading-8">
                                    이번에는 함수 <InlineMath math="f" /> 안의 식이{" "}
                                    <InlineMath math="3" />이 되도록 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{-x+3}{2}&=3\\
                -x+3&=6\\
                x&=-3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="x=-3" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)
                &=\frac13(-3)+7\\
                &=-1+7\\
                &=6
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    f(6)+f(3)
                    =4+6
                    =\boxed{10}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(x)" />의 식 전체를 구할 필요는
                                        없습니다. 특정 함숫값만 필요하다면{" "}
                                        <strong className="text-white">
                                            함수 안의 식을 구하려는 입력값으로 만들면
                                        </strong>{" "}
                                        됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f(6)\text{을 구할 때}
                    &:\
                    \frac{-x+3}{2}=6
                    \Rightarrow x=-9\\[2mm]
                    f(3)\text{을 구할 때}
                    &:\
                    \frac{-x+3}{2}=3
                    \Rightarrow x=-3
                    \end{aligned}
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                세 함수{" "}
                                <InlineMath math="f(x)=2x-6" />,{" "}
                                <InlineMath math="g(x)=4x+k" />,{" "}
                                <InlineMath math="h(x)" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            (f\circ h)(x)=g(x)
            \qquad\text{이고}\qquad
            h(2)=g(2)
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="h(k)" />의 값을 구하시오.
                                (단, <InlineMath math="k" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 뜻에 따라
                                </p>

                                <BlockMath math={String.raw`
                f(h(x))=g(x)
            `} />

                                <p className="leading-8">
                                    입니다. 구하려는 함수 <InlineMath math="h" />는
                                    남겨 두고 <InlineMath math="f" />와{" "}
                                    <InlineMath math="g" />를 주어진 함수식으로 바꾸면
                                </p>

                                <BlockMath math={String.raw`
                2h(x)-6=4x+k
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2h(x)&=4x+k+6\\
                h(x)&=2x+\frac{k+6}{2}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이제 조건 <InlineMath math="h(2)=g(2)" />를
                                    이용합니다.
                                </p>

                                <BlockMath math={String.raw`
                h(2)
                =4+\frac{k+6}{2}
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                g(2)=8+k
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                4+\frac{k+6}{2}&=8+k\\
                8+k+6&=16+2k\\
                k&=-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="k=-2" />를{" "}
                                    <InlineMath math="h(x)" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                h(x)
                &=2x+\frac{-2+6}{2}\\
                &=2x+2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이제 <InlineMath math="k=-2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                h(k)
                &=h(-2)\\
                &=2(-2)+2\\
                &=-2
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{-2}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 합성함수의 관계식에서{" "}
                                        <strong className="text-white">
                                            구하려는 함수 <InlineMath math="h" />는 남기고
                                            나머지 함수는 함수식으로 바꿉니다.
                                        </strong>
                                    </p>

                                    <BlockMath math={String.raw`
                    f(h(x))=g(x)
                    \quad\Longrightarrow\quad
                    h(x)=2x+\frac{k+6}{2}
                `} />

                                    <p className="leading-8">
                                        함수식에 상수 <InlineMath math="k" />가 남아 있으므로
                                        추가 조건 <InlineMath math="h(2)=g(2)" />를 이용하여{" "}
                                        <InlineMath math="k" />를 결정한 뒤 필요한 함숫값을
                                        구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    h(x)
                    \longrightarrow
                    k
                    \longrightarrow
                    h(k)
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            x^2+2 & (x\ge0)\\[2mm]
            \dfrac14x+1 & (x<0)
            \end{cases},
            \qquad
            g(x)=-x+1
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 함수 <InlineMath math="h(x)" />가
                            </p>

                            <BlockMath math={String.raw`
            (h\circ g)(x)=f(x)
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="h(-1)+h(9)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 뜻에 따라
                                </p>

                                <BlockMath math={String.raw`
                h(g(x))=f(x)
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="g(x)=-x+1" />이므로
                                </p>

                                <BlockMath math={String.raw`
                h(-x+1)=f(x)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                {/* h(-1) */}
                                <p className="text-lg font-bold text-white">
                                    <InlineMath math="h(-1)" /> 구하기
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="h" /> 안의{" "}
                                    <InlineMath math="-x+1" />이{" "}
                                    <InlineMath math="-1" />이 되도록 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -x+1&=-1\\
                -x&=-2\\
                x&=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 주어진 관계식에{" "}
                                    <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                h(-1)=f(2)
            `} />

                                <p className="leading-8">
                                    <InlineMath math="2\ge0" />이므로{" "}
                                    <InlineMath math="f(x)" />의 첫 번째 식을 사용합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                h(-1)
                &=f(2)\\
                &=2^2+2\\
                &=6
                \end{aligned}
            `} />

                                {/* h(9) */}
                                <p className="text-lg font-bold text-white">
                                    <InlineMath math="h(9)" /> 구하기
                                </p>

                                <p className="leading-8">
                                    이번에는 함수 <InlineMath math="h" /> 안의{" "}
                                    <InlineMath math="-x+1" />이{" "}
                                    <InlineMath math="9" />가 되도록 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -x+1&=9\\
                -x&=8\\
                x&=-8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                h(9)=f(-8)
            `} />

                                <p className="leading-8">
                                    <InlineMath math="-8<0" />이므로 이번에는{" "}
                                    <InlineMath math="f(x)" />의 두 번째 식을 사용합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                h(9)
                &=f(-8)\\
                &=\frac14(-8)+1\\
                &=-2+1\\
                &=-1
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    h(-1)+h(9)
                    &=6+(-1)\\
                    &=\boxed{5}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="h(x)" /> 전체를 구할 필요 없이,
                                        구하려는 함숫값에 맞게{" "}
                                        <strong className="text-white">
                                            함수 <InlineMath math="h" /> 안의 식을
                                            원하는 입력값으로 만듭니다.
                                        </strong>
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    h(-1)\text{을 구할 때}
                    &:\
                    -x+1=-1
                    \Rightarrow x=2\\[2mm]
                    h(9)\text{을 구할 때}
                    &:\
                    -x+1=9
                    \Rightarrow x=-8
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        그다음 얻어진 <InlineMath math="x" />의 값이
                                        조각함수 <InlineMath math="f" />의 어느 조건에
                                        해당하는지를 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    x=2&\Rightarrow x\ge0
                    \Rightarrow f(x)=x^2+2\\
                    x=-8&\Rightarrow x<0
                    \Rightarrow f(x)=\frac14x+1
                    \end{aligned}
                `} />
                                </div>
                            </div>
                        </details>
                    </div>


                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <p className="leading-8 text-gray-200">
                            합성함수의 관계식에서 함수{" "}
                            <InlineMath math="h" />를 구할 때에는
                        </p>

                        <div className="mt-5 space-y-5">

                            <div>
                                <p className="font-bold text-white">
                                    1. 구하려는 함수는 남긴다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="h" />를 구한다면{" "}
                                    <InlineMath math="h" />는 그대로 두고,
                                    나머지 함수들은 주어진 함수식으로 바꿉니다.
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    2. <InlineMath math="h(\text{어떤 식})" />의
                                    형태로 정리한다.
                                </p>

                                <BlockMath math={String.raw`
                        h(2x-1)=-3x+4
                    `} />

                                <p className="leading-8 text-gray-300">
                                    와 같이 구하려는 함수만 남도록 만듭니다.
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    3. 함수 안의 식을 <InlineMath math="x" />로 만든다.
                                </p>

                                <BlockMath math={String.raw`
                        2x-1
                        \longrightarrow
                        x
                    `} />

                                <p className="leading-8 text-gray-300">
                                    안쪽 식이 <InlineMath math="x" />가 되도록
                                    적절한 값을 대입하거나 새로운 문자로 치환합니다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        \text{구하려는 함수는 남기고}
                        \;\longrightarrow\;
                        \text{나머지 함수는 계산하고}
                        \;\longrightarrow\;
                        \text{안쪽 식을 }x\text{로 만든다}
                    }
                `} />
                        </div>
                    </div>

                </div>

                {/* 예제 */}
            </section>

            {/* 3.10 합성함수의 그래프 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.10 합성함수의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    합성함수의 그래프는 합성함수의 식을 먼저 구하여 그릴 수도 있고,
                    두 함수의 그래프를 이용하여 직접 그릴 수도 있습니다.
                    두 방법을 비교하여 합성함수의 그래프가 만들어지는 원리를 알아봅시다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            합성함수의 그래프
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수
                        </p>

                        <div className="my-5 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                                <BlockMath
                                    math={String.raw`
                            f(x)=
                            \begin{cases}
                            2x &(0\le x\le1)\\
                            -2x+4 &(1\le x\le2)
                            \end{cases}
                        `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                                <BlockMath
                                    math={String.raw`
                            g(x)=
                            \begin{cases}
                            2x &(0\le x\le1)\\
                            -x+3 &(1\le x\le2)
                            \end{cases}
                        `}
                                />
                            </div>
                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여 합성함수{" "}
                            <InlineMath math="(g\circ f)(x)" />를 구하고
                            그 그래프를 그려 봅시다.
                        </p>
                    </div>

                    {/* 풀이 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 식을 이용하여 구하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            먼저 합성함수의 정의에 따라
                        </p>

                        <BlockMath
                            math={String.raw`
                    (g\circ f)(x)=g(f(x))
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 함수 <InlineMath math="g(x)" />의{" "}
                            <InlineMath math="x" />에{" "}
                            <InlineMath math="f(x)" />를 대입하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    g(f(x))
                    =
                    \begin{cases}
                    2f(x) &(0\le f(x)\le1)\\
                    -f(x)+3 &(1\le f(x)\le2)
                    \end{cases}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                합성할 때는 함수의 식에만{" "}
                                <InlineMath math="f(x)" />를 대입하는 것이 아닙니다.
                                각 식이 적용되는 <strong className="text-white">조건의 </strong>
                                <InlineMath math="x" />에도{" "}
                                <InlineMath math="f(x)" />를 대입해야 합니다.
                            </p>

                            <div className="mt-3">
                                <BlockMath
                                    math={String.raw`
                            0\le x\le1
                            \quad\longrightarrow\quad
                            0\le f(x)\le1
                        `}
                                />
                            </div>
                        </div>

                        {/* 첫 번째 구간 */}
                        <div className="mt-6">
                            <p className="mb-3 text-lg font-bold text-white">
                                <InlineMath math="0\le x\le1" />일 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 구간에서는{" "}
                                <InlineMath math="f(x)=2x" />이므로
                                먼저 <InlineMath math="0\le f(x)\le1" />인
                                범위를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        0\le2x\le1
                        \quad\Longrightarrow\quad
                        0\le x\le\frac12
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                        g(f(x))
                        =2f(x)
                        =4x
                        \qquad
                        \left(0\le x\le\frac12\right)
                    `}
                            />

                            <p className="mt-4 leading-8 text-gray-300">
                                다음으로{" "}
                                <InlineMath math="1\le f(x)\le2" />인 범위를
                                구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        1\le2x\le2
                        \quad\Longrightarrow\quad
                        \frac12\le x\le1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        g(f(x))
                        =-f(x)+3
                        =-2x+3
                        \qquad
                        \left(\frac12\le x\le1\right)
                    `}
                            />
                        </div>

                        {/* 두 번째 구간 */}
                        <div className="mt-7">
                            <p className="mb-3 text-lg font-bold text-white">
                                <InlineMath math="1\le x\le2" />일 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 구간에서는{" "}
                                <InlineMath math="f(x)=-2x+4" />입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                먼저 <InlineMath math="1\le f(x)\le2" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
                        1\le-2x+4\le2
                        \quad\Longrightarrow\quad
                        1\le x\le\frac32
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        g(f(x))
                        =-f(x)+3
                        =2x-1
                        \qquad
                        \left(1\le x\le\frac32\right)
                    `}
                            />

                            <p className="mt-4 leading-8 text-gray-300">
                                또 <InlineMath math="0\le f(x)\le1" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
                        0\le-2x+4\le1
                        \quad\Longrightarrow\quad
                        \frac32\le x\le2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        g(f(x))
                        =2f(x)
                        =-4x+8
                        \qquad
                        \left(\frac32\le x\le2\right)
                    `}
                            />
                        </div>

                        <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="mb-3 font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                        (g\circ f)(x)
                        =
                        \begin{cases}
                        4x
                        &\left(0\le x\le \frac12\right)\\
                        -2x+3
                        &\left(\frac12\le x\le1\right)\\
                        2x-1
                        &\left(1\le x\le\frac32\right)\\
                        -4x+8
                        &\left(\frac32\le x\le2\right)
                        \end{cases}
                    `}
                            />
                        </div>
                    </div>

                    {/* 풀이 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 그래프를 이용하여 구하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="g(f(x))" />에서는 먼저{" "}
                            <InlineMath math="f" />를 만나고 그 결과를{" "}
                            <InlineMath math="g" />에 넣습니다.
                            따라서 먼저 만나는 함수{" "}
                            <InlineMath math="f" />의 그래프를 구간별로 따라가며{" "}
                            <InlineMath math="f(x)" />가 움직이는{" "}
                            <strong className="text-white">범위와 방향</strong>을
                            확인합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                그래프를 옮기는 순서
                            </p>

                            <div className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-lg text-white">
                                <span>먼저 만나는 함수의 한 구간</span>
                                <span className="text-blue-300">→</span>
                                <span>출력 범위와 방향</span>
                                <span className="text-blue-300">→</span>
                                <span>나중 함수의 해당 그래프</span>
                                <span className="text-blue-300">→</span>
                                <span className="font-bold text-yellow-300">
                                    합성함수
                                </span>
                            </div>
                        </div>

                        {/* 1단계 */}
                        <div className="mt-7">
                            <p className="mb-3 text-lg font-bold text-white">
                                ① <InlineMath math="0\le x\le1" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 구간에서 <InlineMath math="f(x)" />는
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(x):0\longrightarrow2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                로 움직인다. 따라서 나중에 만나는 함수{" "}
                                <InlineMath math="g" />의 그래프를 입력{" "}
                                <InlineMath math="0\to2" />의 방향,
                                즉 <strong className="text-white">왼쪽에서 오른쪽으로</strong>{" "}
                                읽습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        (0,0)\rightarrow(1,2)\rightarrow(2,1)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이 그래프를 원래{" "}
                                <InlineMath math="f" />의 입력 구간{" "}
                                <InlineMath math="0\le x\le1" />에 옮겨 그립니다.
                                이때 <InlineMath math="f(x)=1" />이 되는 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                        2x=1
                        \quad\Longrightarrow\quad
                        x=\frac12
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 합성함수의 그래프는
                            </p>

                            <BlockMath
                                math={String.raw`
                        (0,0)
                        \rightarrow
                        \left(\frac12,2\right)
                        \rightarrow
                        (1,1)
                    `}
                            />
                        </div>

                        {/* 2단계 */}
                        <div className="mt-7">
                            <p className="mb-3 text-lg font-bold text-white">
                                ② <InlineMath math="1\le x\le2" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                이번에는 <InlineMath math="f(x)" />가
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(x):2\longrightarrow0
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                로 움직인다. 따라서{" "}
                                <InlineMath math="g" />의 그래프를 입력{" "}
                                <InlineMath math="2\to0" />의 방향,
                                즉 <strong className="text-white">오른쪽에서 왼쪽으로</strong>{" "}
                                읽습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        (2,1)\rightarrow(1,2)\rightarrow(0,0)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이를 원래 입력 구간{" "}
                                <InlineMath math="1\le x\le2" />에
                                왼쪽에서 오른쪽으로 옮겨 그립니다.
                                이때 <InlineMath math="f(x)=1" />이 되는 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                        -2x+4=1
                        \quad\Longrightarrow\quad
                        x=\frac32
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        (1,1)
                        \rightarrow
                        \left(\frac32,2\right)
                        \rightarrow
                        (2,0)
                    `}
                            />
                        </div>

                        {/* 간격의 비율 */}
                        <div className="mt-7 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                그래프를 옮길 때 주의할 점
                            </p>

                            <p className="leading-8 text-gray-300">
                                나중에 만나는 함수의 그래프를
                                닮은 도형으로 축소하거나 확대하여 옮기는 것이 아닙니다.
                                <strong className="text-white">
                                    {" "}먼저 만나는 함수의 입력과 출력 사이의 간격의 비율
                                </strong>
                                에 맞도록 그래프가 가로 방향으로 늘어나거나 압축되어
                                옮겨집니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이 문제에서는{" "}
                                <InlineMath math="f" />의 입력 구간의 길이{" "}
                                <InlineMath math="1" /> 동안 함숫값이{" "}
                                <InlineMath math="0" />에서{" "}
                                <InlineMath math="2" />까지 움직입니다.
                                따라서 <InlineMath math="g" />의 가로 길이{" "}
                                <InlineMath math="2" />인 부분이 합성함수에서는
                                가로 길이 <InlineMath math="1" />인 구간에 들어가므로
                                가로 방향으로 정확히 절반으로 압축됩니다.
                            </p>
                        </div>

                        {/* 꺾이는 점 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                합성함수의 구간이 나뉘는 위치
                            </p>

                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="g" />는 입력값{" "}
                                <InlineMath math="1" />에서 식이 바뀝니다.
                                따라서 합성함수{" "}
                                <InlineMath math="g(f(x))" />에서는{" "}
                                <InlineMath math="f(x)=1" />이 되는 곳에서
                                식이 바뀔 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(x)=1
                        \quad\Longrightarrow\quad
                        x=\frac12,\ \frac32
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="g" />의 꺾이는 점에 해당하는
                                위치가 합성함수에서는{" "}
                                <InlineMath math="\displaystyle x=\frac12,\ \frac32" />로
                                옮겨집니다.
                            </p>
                        </div>


                        {/* 인터랙티브 컴포넌트 */}
                        <div className="mt-7">
                        </div>
                    </div>
                    <CompositeGraphExplorer />

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                <InlineMath math="0\le x\le2" />에서 정의된 두 함수{" "}
                                <InlineMath math="y=f(x)" />,{" "}
                                <InlineMath math="y=g(x)" />의 그래프가 그림과 같다.
                            </p>

                            <div className="my-6 flex justify-center">
                                <img
                                    src="/images/commonMath2/3.10_1.png"
                                    alt="함수 f와 g의 그래프"
                                    className="w-full max-w-[350px] rounded-xl"
                                />
                            </div>

                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="y=(f\circ g)(x)" />에 대하여
                                다음 보기에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5 text-gray-300">
                                <p className="leading-8">
                                    ㄱ. 함수 <InlineMath math="y=(f\circ g)(x)" />의
                                    치역은{" "}
                                    <InlineMath math="\{y\mid 0\le y\le2\}" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄴ. 함수 <InlineMath math="y=(f\circ g)(x)" />의
                                    그래프와 <InlineMath math="x" />축,{" "}
                                    <InlineMath math="y" />축 및 직선{" "}
                                    <InlineMath math="x=2" />로 둘러싸인 부분의 넓이는{" "}
                                    <InlineMath math="2" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄷ. 방정식{" "}
                                    <InlineMath math="(f\circ g)(x)=1" />의 모든 실근의
                                    합은 <InlineMath math="2" />이다.
                                </p>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄱ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    그래프에서 먼저 만나는 함수는{" "}
                                    <InlineMath math="g" />입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="0\le x\le1" />에서{" "}
                                    <InlineMath math="g(x)" />의 값은{" "}
                                    <InlineMath math="0\to2" />로 움직이므로{" "}
                                    <InlineMath math="f" />의 그래프를 입력{" "}
                                    <InlineMath math="0\to2" />의 방향으로 읽습니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="1\le x\le2" />에서는{" "}
                                    <InlineMath math="g(x)" />의 값이{" "}
                                    <InlineMath math="2\to0" />으로 움직이므로{" "}
                                    <InlineMath math="f" />의 그래프를 오른쪽에서
                                    왼쪽으로 읽습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 합성함수의 그래프는 다음과 같이 네 개의
                                    선분으로 이루어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (0,2)
                    \rightarrow
                    \left(\frac12,0\right)
                    \rightarrow
                    (1,2)
                    \rightarrow
                    \left(\frac32,0\right)
                    \rightarrow
                    (2,2)
                `}
                                />

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 최솟값은{" "}
                                        <InlineMath math="0" />, 최댓값은{" "}
                                        <InlineMath math="2" />이므로 치역은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \{y\mid0\le y\le2\}
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 ㄱ은 옳습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ
                                    </p>

                                    <p className="leading-8">
                                        그래프와 <InlineMath math="x" />축 사이의 부분은
                                        밑변의 길이가{" "}
                                        <InlineMath math="\displaystyle \frac12" />, 높이가{" "}
                                        <InlineMath math="2" />인 삼각형 네 개로 나누어
                                        볼 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        4\times
                        \frac12\times
                        \frac12\times2
                        =2
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서 ㄴ도 옳습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ
                                    </p>

                                    <p className="leading-8">
                                        직선 <InlineMath math="y=1" />과 합성함수의
                                        그래프가 만나는 곳은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        x=
                        \frac14,\ 
                        \frac34,\ 
                        \frac54,\ 
                        \frac74
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 모든 실근의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac14+\frac34+\frac54+\frac74
                        =4
                    `}
                                    />

                                    <p className="leading-8">
                                        이다. 따라서 ㄷ은 옳지 않습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <p className="mt-3 text-lg font-bold text-white">
                                        ③ ㄱ, ㄴ
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f\circ g" />에서는{" "}
                                        <InlineMath math="g" />를 먼저 만납니다.
                                        따라서 <InlineMath math="g(x)" />가 움직이는
                                        범위와 방향을 따라{" "}
                                        <InlineMath math="f" />의 그래프를 읽어
                                        합성함수의 그래프를 그립니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        특히 <InlineMath math="g(x)" />가 감소하는
                                        구간에서는 <InlineMath math="f" />의 그래프를
                                        오른쪽에서 왼쪽으로 읽어야 합니다.
                                    </p>
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
                                두 함수 <InlineMath math="y=f(x)" />,{" "}
                                <InlineMath math="y=g(x)" />의 그래프가 각각 그림과 같다.
                            </p>

                            <div className="my-6 flex justify-center">
                                <img
                                    src="/images/commonMath2/3.10_002.png"
                                    alt="함수 f와 g의 그래프"
                                    className="w-full max-w-[350px] rounded-xl"
                                />
                            </div>

                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="y=(f\circ g)(x)" />에 대하여
                                다음 보기에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5 text-gray-300">
                                <p className="leading-8">
                                    ㄱ. 함수 <InlineMath math="y=(f\circ g)(x)" />의
                                    최댓값은 <InlineMath math="3" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄴ. 함수 <InlineMath math="y=(f\circ g)(x)" />의
                                    그래프와 <InlineMath math="x" />축으로 둘러싸인
                                    부분의 넓이는{" "}
                                    <InlineMath math="\displaystyle\frac{15}{4}" />이다.
                                </p>

                                <p className="leading-8">
                                    ㄷ. 방정식{" "}
                                    <InlineMath math="(f\circ g)(x)=1" />의
                                    모든 실근의 합은{" "}
                                    <InlineMath math="\displaystyle\frac94" />이다.
                                </p>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄱ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f\circ g" />에서는{" "}
                                    <InlineMath math="g" />를 먼저 만나므로
                                    먼저 <InlineMath math="g(x)" />의 값이 어떻게
                                    움직이는지 살펴봅니다.
                                </p>

                                <p className="leading-8">
                                    그래프에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(x)=
                    \begin{cases}
                    2x &(0\le x\le1)\\
                    \dfrac12x+\dfrac32 &(1\le x\le3)
                    \end{cases}
                `}
                                />

                                <p className="leading-8">
                                    이고, 함수 <InlineMath math="f" />의 식은 입력값{" "}
                                    <InlineMath math="\displaystyle \frac32" />에서 바뀝니다.
                                    따라서 먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(x)=\frac32
                `}
                                />

                                <p className="leading-8">
                                    이 되는 위치를 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2x=\frac32
                    \quad\Longrightarrow\quad
                    x=\frac34
                `}
                                />

                                <p className="leading-8">
                                    따라서 합성함수의 그래프는{" "}
                                    <InlineMath math="\displaystyle x=\frac34" />와{" "}
                                    <InlineMath math="x=1" />을 기준으로 나누어 생각할 수 있습니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        합성함수의 그래프
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\displaystyle 0\le x\le\frac34" />에서는{" "}
                                        <InlineMath math="g(x)" />가{" "}
                                        <InlineMath math="0" />에서{" "}
                                        <InlineMath math="\displaystyle \frac32" />까지 움직이므로
                                        <InlineMath math="f" />의 첫 번째 그래프를 읽습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)(x)
                        =2g(x)
                        =4x
                    `}
                                    />

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="\displaystyle \frac34\le x\le1" />에서는{" "}
                                        <InlineMath math="g(x)" />가{" "}
                                        <InlineMath math="\displaystyle \frac32" />에서{" "}
                                        <InlineMath math="2" />까지 움직이므로
                                        <InlineMath math="f" />의 두 번째 그래프를 읽습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)(x)
                        =-2g(x)+6
                        =-4x+6
                    `}
                                    />

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="1\le x\le3" />에서는{" "}
                                        <InlineMath math="g(x)" />가{" "}
                                        <InlineMath math="2" />에서{" "}
                                        <InlineMath math="3" />까지 움직입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)(x)
                        =-2\left(
                        \frac12x+\frac32
                        \right)+6
                        =-x+3
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)(x)=
                        \begin{cases}
                        4x
                        &\left(0\le x\le\frac34\right)\\
                        -4x+6
                        &\left(\frac34\le x\le1\right)\\
                        -x+3
                        &(1\le x\le3)
                        \end{cases}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 그래프는{" "}
                                        <InlineMath math="\displaystyle x=\frac34" />에서 가장 높은 점을
                                        지나며 이때 함숫값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)\left(\frac34\right)=3
                    `}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 최댓값은{" "}
                                        <InlineMath math="3" />이므로 ㄱ은 옳습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 그래프와{" "}
                                        <InlineMath math="x" />축으로 둘러싸인 부분을
                                        나누어 넓이를 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac12\cdot\frac34\cdot3
                        +
                        \frac{3+2}{2}\cdot\frac14
                        +
                        \frac12\cdot2\cdot2
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        =
                        \frac98+\frac58+2
                        =
                        \frac{15}{4}
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 ㄴ도 옳습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ
                                    </p>

                                    <p className="leading-8">
                                        방정식{" "}
                                        <InlineMath math="(f\circ g)(x)=1" />의 해를
                                        그래프에서 찾으면 두 개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        첫 번째 구간에서는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        4x=1
                        \quad\Longrightarrow\quad
                        x=\frac14
                    `}
                                    />

                                    <p className="leading-8">
                                        이고, 마지막 구간에서는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        -x+3=1
                        \quad\Longrightarrow\quad
                        x=2
                    `}
                                    />

                                    <p className="leading-8">
                                        따라서 모든 실근의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac14+2
                        =
                        \frac94
                    `}
                                    />

                                    <p className="leading-8">
                                        이므로 ㄷ도 옳습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <p className="mt-3 text-lg font-bold text-white">
                                        ⑤ ㄱ, ㄴ, ㄷ
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f\circ g" />에서는{" "}
                                        <InlineMath math="g(x)" />가 먼저 움직입니다.
                                        나중에 만나는 함수{" "}
                                        <InlineMath math="f" />의 그래프가 입력{" "}
                                        <InlineMath math="\displaystyle \frac32" />에서 꺾이므로,
                                        먼저 <InlineMath math="\displaystyle g(x)=\frac32" />이 되는
                                        위치를 찾으면 합성함수의 그래프가 나뉘는 위치를
                                        알 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 가져오는 <InlineMath math="f" />의 그래프는
                                        닮은 모양으로 옮기는 것이 아니라{" "}
                                        <strong className="text-white">
                                            먼저 만나는 함수의 입력과 출력 사이의 간격의 비율
                                        </strong>
                                        에 맞게 가로 방향으로 늘어나거나 압축되어 옮겨집니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-5 text-gray-300">
                            <div>
                                <p className="mb-2 font-bold text-white">
                                    식으로 구할 때
                                </p>

                                <p className="leading-8">
                                    바깥 함수의 식뿐만 아니라 각 식이 적용되는
                                    <strong className="text-white"> 구간의 조건</strong>에도
                                    안쪽 함수를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            g(x)
                            =
                            \begin{cases}
                            \cdots &(0\le x\le1)\\
                            \cdots &(1\le x\le2)
                            \end{cases}
                            \quad\Longrightarrow\quad
                            g(f(x))
                            =
                            \begin{cases}
                            \cdots &(0\le f(x)\le1)\\
                            \cdots &(1\le f(x)\le2)
                            \end{cases}
                        `}
                                />
                            </div>

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    그래프로 구할 때
                                </p>

                                <p className="leading-8">
                                    먼저 만나는 함수의 값을 따라가며
                                    <strong className="text-white"> 범위와 방향</strong>을
                                    확인하고, 그에 해당하는 나중 함수의 그래프를 가져옵니다.
                                    가져온 그래프는 원래 입력 구간의
                                    <strong className="text-white"> 간격의 비율</strong>에
                                    맞게 가로 방향으로 늘어나거나 압축하여 옮깁니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    구간이 나뉘는 위치
                                </p>

                                <p className="leading-8">
                                    나중에 만나는 함수의 식이 바뀌는 입력값을
                                    먼저 만나는 함수가 언제 출력하는지 확인하면
                                    합성함수의 식이 바뀌는 위치를 찾을 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3.11 합성함수로 표현된 방정식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.11 합성함수로 표현된 방정식
                </h2>

                <p className="leading-8 text-gray-300">
                    합성함수가 포함된 방정식은 안쪽의 함숫값을 하나의 문자로
                    치환하면 일반적인 함수방정식처럼 생각할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">
                    {/* 본문 카드 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. <InlineMath math="f(f(x))=a" /> 꼴의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            먼저 안쪽의 함숫값을
                        </p>

                        <BlockMath math={String.raw`
                f(x)=t
            `} />

                        <p className="leading-8 text-gray-300">
                            로 치환합니다. 그러면
                        </p>

                        <BlockMath math={String.raw`
                f(f(x))=a
            `} />

                        <p className="leading-8 text-gray-300">
                            는
                        </p>

                        <BlockMath math={String.raw`
                f(t)=a
            `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            방정식
                        </p>

                        <BlockMath math={String.raw`
    f(t)=a
`} />

                        <p className="leading-8 text-gray-300">
                            의 해는 두 그래프
                        </p>

                        <BlockMath math={String.raw`
    y=f(t),\qquad y=a
`} />

                        <p className="leading-8 text-gray-300">
                            의 교점의 <InlineMath math="t" />좌표와 같습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            교점의 <InlineMath math="t" />좌표를
                        </p>

                        <BlockMath math={String.raw`
    t=\alpha_1,\ \alpha_2,\ \cdots
`} />

                        <p className="leading-8 text-gray-300">
                            라고 하면, 처음에 <InlineMath math="t=f(x)" />로 두었으므로
                        </p>

                        <BlockMath math={String.raw`
    f(x)=\alpha_1,\qquad
    f(x)=\alpha_2,\qquad \cdots
`} />

                        <p className="leading-8 text-gray-300">
                            를 각각 풀어 원래 방정식의 해를 구합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                풀이의 흐름
                            </p>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-gray-200">
                                <span>
                                    <InlineMath math="f(f(x))=a" />
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="f(x)=t" />로 치환
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="y=f(t)" />와{" "}
                                    <InlineMath math="y=a" />의 교점
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="t=\alpha_i" />
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="f(x)=\alpha_i" /> 풀기
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* 본문 카드 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="f(f(x))=-f(x)+2" /> 꼴의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이 경우에도 안쪽의 함숫값을
                        </p>

                        <BlockMath math={String.raw`
                f(x)=t
            `} />

                        <p className="leading-8 text-gray-300">
                            로 치환합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            그러면
                        </p>

                        <BlockMath math={String.raw`
                f(f(x))=-f(x)+2
            `} />

                        <p className="leading-8 text-gray-300">
                            는
                        </p>

                        <BlockMath math={String.raw`
                f(t)=-t+2
            `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            즉, 두 그래프
                        </p>

                        <BlockMath math={String.raw`
                y=f(t),\qquad y=-t+2
            `} />

                        <p className="leading-8 text-gray-300">
                            의 교점의 <InlineMath math="t" />좌표를 찾으면 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            그 값을
                        </p>

                        <BlockMath math={String.raw`
                t=\alpha_1,\ \alpha_2,\ \cdots
            `} />

                        <p className="leading-8 text-gray-300">
                            라고 하면, 다시
                        </p>

                        <BlockMath math={String.raw`
                f(x)=\alpha_1,\qquad
                f(x)=\alpha_2,\qquad \cdots
            `} />

                        <p className="leading-8 text-gray-300">
                            를 각각 풀어 원래 방정식의 해를 구합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                풀이의 흐름
                            </p>

                            <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-gray-200">
                                <span>
                                    <InlineMath math="f(f(x))=-f(x)+2" />
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="f(x)=t" />로 치환
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="f(t)=-t+2" />
                                </span>
                                <span className="text-blue-300">→</span>
                                <span>교점의 t좌표 구하기</span>
                                <span className="text-blue-300">→</span>
                                <span>
                                    <InlineMath math="f(x)=\alpha_i" /> 풀기
                                </span>
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
                                두 함수
                            </p>

                            <BlockMath
                                math={String.raw`
                f(x)=|x|-5,\qquad
                g(x)=
                \begin{cases}
                -x^2+3 &(x\ge0)\\
                x^2+3 &(x<0)
                \end{cases}
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="g(f(k))=7" />을 만족시키는 실수{" "}
                                <InlineMath math="k" />의 값을{" "}
                                <InlineMath math="\alpha,\beta" />라고 할 때,
                                <InlineMath math="\alpha^2+\beta^2" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 안쪽의 함숫값을
                                </p>

                                <BlockMath math={String.raw`f(k)=t`} />

                                <p className="leading-8 text-gray-300">
                                    로 치환합니다. 그러면
                                </p>

                                <BlockMath math={String.raw`g(f(k))=7`} />

                                <p className="leading-8 text-gray-300">
                                    은
                                </p>

                                <BlockMath math={String.raw`g(t)=7`} />

                                <p className="leading-8 text-gray-300">
                                    이 됩니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        그래프로 생각하기
                                    </p>

                                    <p className="leading-8">
                                        방정식 <InlineMath math="g(t)=7" />은 두 그래프
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=g(t),\qquad y=7
                    `}
                                    />

                                    <p className="leading-8">
                                        의 교점의 <InlineMath math="t" />좌표를 구하는 것과 같습니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    함수 <InlineMath math="g" />를 경우를 나누어 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    t\ge0&:\ -t^2+3=7
                    \Rightarrow t^2=-4
                    \quad(\text{해가 없습니다.})\\\\
                    t<0&:\ t^2+3=7
                    \Rightarrow t^2=4
                    \Rightarrow t=-2
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(k)=-2
                `}
                                />

                                <p className="leading-8">
                                    를 풀면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    |k|-5=-2
                    \Rightarrow |k|=3
                    \Rightarrow k=\pm3
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                    <InlineMath math="\alpha=-3,\ \beta=3" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \alpha^2+\beta^2
                    =(-3)^2+3^2
                    =18
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`18`} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 2
                        </h3>
                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <p className="leading-8 text-gray-300">
                                    이차함수 <InlineMath math="y=f(x)" />의 그래프는
                                    오른쪽 그림과 같이 점 <InlineMath math="(3,12)" />를
                                    꼭짓점으로 하고 점 <InlineMath math="(0,3)" />을 지납니다.
                                </p>



                                <p className="leading-8 text-gray-300">
                                    이때 방정식 <InlineMath math="f(f(x))=3" />의 모든 서로
                                    다른 실근의 합을 구하시오.
                                </p>
                            </div>
                            <div className="my-6 flex justify-center">
                                <img
                                    src="/images/commonMath2/3.11_2.png"
                                    alt="이차함수 y=f(x)의 그래프"
                                    className="w-full max-w-[560px] rounded-xl"
                                />
                            </div>
                        </div>
                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 그래프의 꼭짓점이{" "}
                                    <InlineMath math="(3,12)" />이므로 함수{" "}
                                    <InlineMath math="f" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x)=a(x-3)^2+12
                `}
                                />

                                <p className="leading-8">
                                    로 나타낼 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    그래프가 점 <InlineMath math="(0,3)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    3=9a+12
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=-1
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x)=-(x-3)^2+12
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 안쪽의 함숫값을
                                </p>

                                <BlockMath math={String.raw`
                f(x)=t
            `} />

                                <p className="leading-8">
                                    로 치환합니다. 그러면 방정식{" "}
                                    <InlineMath math="f(f(x))=3" />은
                                </p>

                                <BlockMath math={String.raw`
                f(t)=3
            `} />

                                <p className="leading-8">
                                    이 됩니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        그래프로 생각하기
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(t)=3" />의 해는 두 그래프{" "}
                                        <InlineMath math="y=f(t)" />와{" "}
                                        <InlineMath math="y=3" />의 교점의{" "}
                                        <InlineMath math="t" />좌표입니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -(t-3)^2+12=3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    (t-3)^2=9
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    t=0,\ 6
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    처음에 <InlineMath math="t=f(x)" />로 놓았으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
        f(x)=0,\qquad f(x)=6
    `}
                                />

                                <p className="leading-8">
                                    을 각각 만족시키는 실근을 생각합니다.
                                </p>

                                <p className="leading-8">
                                    이차함수 <InlineMath math="y=f(x)" />의 대칭축은{" "}
                                    <InlineMath math="x=3" />입니다. 따라서 수평선과 만나는
                                    두 점의 <InlineMath math="x" />좌표의 합은 대칭축의{" "}
                                    <InlineMath math="x" />좌표의 두 배인
                                </p>

                                <BlockMath
                                    math={String.raw`
        3\times2=6
    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=0" />의 두 실근의 합은{" "}
                                    <InlineMath math="6" />이고,{" "}
                                    <InlineMath math="f(x)=6" />의 두 실근의 합도{" "}
                                    <InlineMath math="6" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 방정식 <InlineMath math="f(f(x))=3" />의
                                    모든 서로 다른 실근의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
        6+6=12
    `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`12`} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(x)=t" />로 치환하여 먼저{" "}
                                        <InlineMath math="f(t)=3" />의 해{" "}
                                        <InlineMath math="t=0,\ 6" />을 구합니다.
                                        그다음 <InlineMath math="f(x)=0" />과{" "}
                                        <InlineMath math="f(x)=6" />을 생각합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이때 각 방정식의 근을 직접 구할 필요는 없습니다.
                                        이차함수의 대칭축이 <InlineMath math="x=3" />이므로
                                        각 방정식의 두 근의 합은{" "}
                                        <InlineMath math="2\times3=6" />임을 이용합니다.
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

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <p className="leading-8 text-gray-300">
                                    닫힌구간 <InlineMath math="[0,4]" />에서 정의된 함수
                                </p>

                                <BlockMath
                                    math={String.raw`
                f(x)=
                \begin{cases}
                2x &(0\le x<2)\\
                -x+6 &(2\le x\le4)
                \end{cases}
            `}
                                />

                                <p className="leading-8 text-gray-300">
                                    에 대하여 합성함수{" "}
                                    <InlineMath math="y=(f\circ f)(x)" />의 그래프와 <br />직선{" "}
                                    <InlineMath math="\displaystyle y=\frac12x+2" />의
                                    교점의 개수를 구하시오.
                                </p>
                            </div>
                            <div className="my-6 flex justify-center">
                                <img
                                    src="/images/commonMath2/3.11_3.png"
                                    alt="함수 y=f(x)의 그래프"
                                    className="w-full max-w-[520px] rounded-xl"
                                />
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-6 text-gray-300">
                                <p className="leading-8">
                                    방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(x))=\frac12x+2
                `}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="f(x)=t" />로 치환하여도 오른쪽에{" "}
                                    <InlineMath math="x" />가 남습니다.
                                    따라서 합성함수 <InlineMath math="f\circ f" />를 먼저 구한 뒤
                                    직선과의 교점을 찾습니다.
                                </p>

                                {/* 풀이 1 */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-5 text-lg font-bold text-white">
                                        풀이 1. 수식으로 합성함수 구하기
                                    </p>

                                    <p className="leading-8">
                                        먼저 만나는 함수 <InlineMath math="f" />의 구간과
                                        그때의 함숫값의 범위를 확인합니다.
                                    </p>

                                    <div className="mt-5 space-y-5">
                                        <div>
                                            <p className="font-semibold text-white">
                                                ① <InlineMath math="0\le x<1" />
                                            </p>

                                            <p className="mt-2 leading-8">
                                                이때 <InlineMath math="f(x)=2x" />이고
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                0\le f(x)<2
                            `}
                                            />

                                            <p className="leading-8">
                                                이므로 나중에 만나는 <InlineMath math="f" />에서도
                                                첫 번째 식을 사용합니다.
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                f(f(x))
                                =2(2x)
                                =4x
                            `}
                                            />
                                        </div>

                                        <div>
                                            <p className="font-semibold text-white">
                                                ② <InlineMath math="1\le x<2" />
                                            </p>

                                            <p className="mt-2 leading-8">
                                                이때 <InlineMath math="f(x)=2x" />이고
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                2\le f(x)<4
                            `}
                                            />

                                            <p className="leading-8">
                                                이므로 나중에 만나는 <InlineMath math="f" />에서는
                                                두 번째 식을 사용합니다.
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                f(f(x))
                                =-(2x)+6
                                =-2x+6
                            `}
                                            />
                                        </div>

                                        <div>
                                            <p className="font-semibold text-white">
                                                ③ <InlineMath math="2\le x\le4" />
                                            </p>

                                            <p className="mt-2 leading-8">
                                                이때
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                f(x)=-x+6
                            `}
                                            />

                                            <p className="leading-8">
                                                이고 <InlineMath math="f(x)" />는{" "}
                                                <InlineMath math="4" />에서{" "}
                                                <InlineMath math="2" />까지 움직이므로
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                2\le f(x)\le4
                            `}
                                            />

                                            <p className="leading-8">
                                                입니다. 따라서 나중에 만나는{" "}
                                                <InlineMath math="f" />에서는 두 번째 식을 사용합니다.
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                f(f(x))
                                =-(-x+6)+6
                                =x
                            `}
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-5 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ f)(x)=
                        \begin{cases}
                        4x &(0\le x<1)\\
                        -2x+6 &(1\le x<2)\\
                        x &(2\le x\le4)
                        \end{cases}
                    `}
                                    />
                                </div>

                                {/* 풀이 2 */}
                                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                    <p className="mb-5 text-lg font-bold text-white">
                                        풀이 2. 그래프를 이용하여 합성함수 구하기
                                    </p>

                                    <p className="leading-8">
                                        3.10에서 배운 방법을 이용하여 먼저 만나는{" "}
                                        <InlineMath math="f" />의 출력 범위와 방향을 확인합니다.
                                    </p>

                                    <div className="mt-5 space-y-5">
                                        <div>
                                            <p className="font-semibold text-white">
                                                ① <InlineMath math="0\le x<2" />
                                            </p>

                                            <p className="mt-2 leading-8">
                                                먼저 만나는 함수의 그래프에서{" "}
                                                <InlineMath math="f(x)" />는
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                0\to4
                            `}
                                            />

                                            <p className="leading-8">
                                                로 증가합니다.
                                            </p>

                                            <p className="mt-2 leading-8">
                                                따라서 나중에 만나는 함수{" "}
                                                <InlineMath math="f" />의 그래프를 입력값{" "}
                                                <InlineMath math="0" />부터{" "}
                                                <InlineMath math="4" />까지 왼쪽에서 오른쪽으로 읽습니다.
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                (0,0)\to(2,4)\to(4,2)
                            `}
                                            />

                                            <p className="leading-8">
                                                이 그래프를 원래의{" "}
                                                <InlineMath math="0\le x<2" /> 구간에 옮기면
                                                가로 방향으로 압축되어
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                (0,0)\to(1,4)\to(2,2)
                            `}
                                            />

                                            <p className="leading-8">
                                                가 됩니다.
                                            </p>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-white">
                                                ② <InlineMath math="2\le x\le4" />
                                            </p>

                                            <p className="mt-2 leading-8">
                                                이 구간에서는 <InlineMath math="f(x)" />가
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                4\to2
                            `}
                                            />

                                            <p className="leading-8">
                                                로 감소합니다.
                                            </p>

                                            <p className="mt-2 leading-8">
                                                따라서 나중에 만나는{" "}
                                                <InlineMath math="f" />의 그래프에서 입력값{" "}
                                                <InlineMath math="4" />부터{" "}
                                                <InlineMath math="2" />까지의 부분을
                                                오른쪽에서 왼쪽으로 읽습니다.
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                (4,2)\to(2,4)
                            `}
                                            />

                                            <p className="leading-8">
                                                이를 원래의 <InlineMath math="2\le x\le4" /> 구간에
                                                옮기면
                                            </p>

                                            <BlockMath
                                                math={String.raw`
                                (2,2)\to(4,4)
                            `}
                                            />

                                            <p className="leading-8">
                                                가 됩니다.
                                            </p>
                                        </div>
                                    </div>

                                    <p className="mt-5 leading-8">
                                        따라서 합성함수 <InlineMath math="y=(f\circ f)(x)" />의
                                        그래프는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (0,0)\to(1,4)\to(2,2)\to(4,4)
                    `}
                                    />

                                    <p className="leading-8">
                                        를 차례로 연결한 그래프입니다.
                                    </p>
                                </div>

                                {/* 최종 그래프 */}
                                <p className="leading-8">
                                    두 방법으로 구한 합성함수의 그래프에 직선{" "}
                                    <InlineMath math="\displaystyle y=\frac12x+2" />를
                                    함께 나타내면 다음과 같습니다.
                                </p>

                                <div className="my-6 flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.11_3_1.png"
                                        alt="합성함수 y=(f∘f)(x)와 직선의 교점"
                                        className="w-full max-w-[250px] rounded-xl"
                                    />
                                </div>

                                <p className="leading-8">
                                    두 그래프는 서로 다른 세 점에서 만납니다.
                                    따라서 교점의 개수는 <InlineMath math="3" />입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`3`} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(f(x))=a" />처럼 오른쪽이 상수이거나{" "}
                                        <InlineMath math="f(x)" />에 관한 식이면{" "}
                                        <InlineMath math="f(x)=t" />로 치환하여 해결할 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 이 문제의
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(x))=\frac12x+2
                    `}
                                    />

                                    <p className="leading-8">
                                        에서는 치환한 뒤에도 오른쪽에{" "}
                                        <InlineMath math="x" />가 남습니다.
                                        이 경우에는 합성함수{" "}
                                        <InlineMath math="f\circ f" />의 식이나 그래프를 먼저 구한 뒤,
                                        주어진 함수와의 교점을 찾는 것이 좋습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        합성함수는 수식으로 구할 수도 있고, 3.10에서 배운 것처럼{" "}
                                        <strong className="text-white">
                                            먼저 만나는 함수의 출력 범위와 방향을 확인하여
                                            나중에 만나는 함수의 그래프를 옮기는 방법
                                        </strong>
                                        으로 구할 수도 있습니다.
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
                                    <InlineMath math="0\le x\le4" />에서 정의된 함수{" "}
                                    <InlineMath math="y=f(x)" />의 그래프가 오른쪽 그림과 같을 때,
                                    방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ f)(x)=f(x)-2
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 서로 다른 실근의 합을 구하시오.
                                </p>
                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.11_4.png"
                                    alt="함수 y=f(x)의 그래프"
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
                                    안쪽의 함숫값을
                                </p>

                                <BlockMath math={String.raw`
                f(x)=t
            `} />

                                <p className="leading-8">
                                    로 치환합니다. 그러면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(x))=f(x)-2
                `}
                                />

                                <p className="leading-8">
                                    는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(t)=t-2
                `}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        그래프로 생각하기
                                    </p>

                                    <p className="leading-8">
                                        방정식 <InlineMath math="f(t)=t-2" />의 해는 두 그래프
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=f(t),\qquad y=t-2
                    `}
                                    />

                                    <p className="leading-8">
                                        의 교점의 <InlineMath math="t" />좌표입니다.
                                        먼저 이 <InlineMath math="t" />값들을 구한 뒤,
                                        각각에 대하여 <InlineMath math="f(x)=t" />를 다시 풉니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    주어진 그래프에서 함수 <InlineMath math="f" />를 식으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
        f(t)=
        \begin{cases}
        -4t+4 &(0\le t\le1)\\
        2t-2 &(1\le t\le2)\\
        -2t+6 &(2\le t\le3)\\
        4t-12 &(3\le t\le4)
        \end{cases}
    `}
                                />

                                <p className="leading-8">
                                    각 구간에서 <InlineMath math="f(t)=t-2" />를 풀고,
                                    구한 값이 해당 구간에 포함되는지 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
        \begin{aligned}
        -4t+4&=t-2
        &&\Rightarrow t=\frac65
        &&\left(0\le t\le1\text{을 만족하지 않습니다.}\right)\\[4pt]

        2t-2&=t-2
        &&\Rightarrow t=0
        &&\left(1\le t\le2\text{를 만족하지 않습니다.}\right)\\[4pt]

        -2t+6&=t-2
        &&\Rightarrow t=\frac83
        &&\left(2\le t\le3\text{을 만족합니다.}\right)\\[4pt]

        4t-12&=t-2
        &&\Rightarrow t=\frac{10}{3}
        &&\left(3\le t\le4\text{를 만족합니다.}\right)
        \end{aligned}
    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
        t=\frac83,\qquad \frac{10}{3}
    `}
                                />

                                <p className="leading-8">
                                    입니다. 처음에 <InlineMath math="t=f(x)" />로 놓았으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
        f(x)=\frac83,\qquad
        f(x)=\frac{10}{3}
    `}
                                />

                                <p className="leading-8">
                                    을 만족시키는 <InlineMath math="x" />를 찾습니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="y=f(x)" />의 그래프는{" "}
                                    <InlineMath math="x=2" />에 대하여 대칭입니다.
                                    두 수평선{" "}
                                    <InlineMath math="\displaystyle y=\frac83" />,{" "}
                                    <InlineMath math="\displaystyle y=\frac{10}{3}" />은 각각 그래프와 두 점에서
                                    만나므로, 각 방정식의 두 근의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
        2\times2=4
    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 모든 서로 다른 실근의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
        4+4=8
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

                                    <p className="leading-8">
                                        <InlineMath math="f(x)=t" />로 치환하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(x))=f(x)-2
                        \quad\longrightarrow\quad
                        f(t)=t-2
                    `}
                                    />

                                    <p className="leading-8">
                                        가 됩니다. 먼저{" "}
                                        <InlineMath math="y=f(t)" />와{" "}
                                        <InlineMath math="y=t-2" />의 교점의{" "}
                                        <InlineMath math="t" />좌표를 구한 뒤,
                                        그 값을 높이로 하는 수평선과<br />
                                        <InlineMath math="y=f(x)" />의 교점을 찾아
                                        원래 방정식의 해를 구합니다.
                                    </p>
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
                                실수 전체의 집합에서 정의된 함수
                            </p>

                            <BlockMath
                                math={String.raw`
                f(x)=
                \begin{cases}
                3x+12 &(x<2)\\
                x^2-11x+36 &(x\ge2)
                \end{cases}
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                에 대하여{" "}
                                <InlineMath math="(f\circ f)(a)=f(a)" />를 만족시키는
                                모든 실수 <InlineMath math="a" />의 값의 합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    안쪽의 함숫값을
                                </p>

                                <BlockMath math={String.raw`
                f(a)=t
            `} />

                                <p className="leading-8">
                                    로 치환합니다. 그러면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(a))=f(a)
                `}
                                />

                                <p className="leading-8">
                                    는
                                </p>

                                <BlockMath math={String.raw`
                f(t)=t
            `} />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                    <p className="mb-4 font-bold text-white">
                                        먼저 <InlineMath math="f(t)=t" />를 풉니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="t<2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3t+12=t
                        \quad\Rightarrow\quad
                        t=-6
                    `}
                                    />

                                    <p className="leading-8">
                                        이고 <InlineMath math="-6<2" />이므로 조건을 만족합니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="t\ge2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        t^2-11t+36=t
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        t^2-12t+36=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        (t-6)^2=0
                        \quad\Rightarrow\quad
                        t=6
                    `}
                                    />

                                    <p className="leading-8">
                                        이고 <InlineMath math="6\ge2" />이므로 조건을 만족합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    t=-6,\ 6
                `}
                                />

                                <p className="leading-8">
                                    입니다. 처음에 <InlineMath math="t=f(a)" />로 놓았으므로
                                    이제
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(a)=-6,\qquad f(a)=6
                `}
                                />

                                <p className="leading-8">
                                    을 각각 풉니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                    <p className="mb-4 font-bold text-white">
                                        ① <InlineMath math="f(a)=-6" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a<2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3a+12=-6
                        \quad\Rightarrow\quad
                        a=-6
                    `}
                                    />

                                    <p className="leading-8">
                                        이고 조건을 만족합니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="a\ge2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a^2-11a+36=-6
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a^2-11a+42=0
                    `}
                                    />

                                    <p className="leading-8">
                                        이 이차방정식은 실근을 갖지 않습니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        따라서 <InlineMath math="f(a)=-6" />에서
                                    </p>

                                    <BlockMath math={String.raw`
                    a=-6
                `} />
                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                    <p className="mb-4 font-bold text-white">
                                        ② <InlineMath math="f(a)=6" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a<2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        3a+12=6
                        \quad\Rightarrow\quad
                        a=-2
                    `}
                                    />

                                    <p className="leading-8">
                                        이고 조건을 만족합니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="a\ge2" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        a^2-11a+36=6
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a^2-11a+30=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        (a-5)(a-6)=0
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        a=5,\ 6
                    `}
                                    />

                                    <p className="leading-8">
                                        이고 두 값 모두 <InlineMath math="a\ge2" />를 만족합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    따라서 조건을 만족시키는 모든 실수{" "}
                                    <InlineMath math="a" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -6,\ -2,\ 5,\ 6
                `}
                                />

                                <p className="leading-8">
                                    이므로 그 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -6-2+5+6=3
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

                                    <p className="leading-8">
                                        <InlineMath math="f(a)=t" />로 치환하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(f(a))=f(a)
                        \quad\longrightarrow\quad
                        f(t)=t
                    `}
                                    />

                                    <p className="leading-8">
                                        가 됩니다. 먼저 <InlineMath math="f(t)=t" />를 만족시키는{" "}
                                        <InlineMath math="t" />의 값을 구한 뒤, 각각의 값에 대하여{" "}
                                        <InlineMath math="f(a)=t" />를 다시 풉니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        함수가 구간에 따라 다르게 정의되어 있으므로,
                                        각 식에서 구한 해가 해당 조건을 만족하는지도 반드시 확인합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 6
                        </h3>

                        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 집합
                                </p>

                                <BlockMath
                                    math={String.raw`
                    X=\{x\mid 0\le x\le10\}
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    에서 <InlineMath math="X" />로의 함수{" "}
                                    <InlineMath math="y=f(x)" />의 그래프는{" "}
                                    <InlineMath math="0\le x\le4" />에서{" "}
                                    <InlineMath math="x=2" />에 대칭,{" "}
                                    <InlineMath math="4\le x\le10" />에서{" "}
                                    <InlineMath math="x=7" />에 대칭이고
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (0,0),\ (2,10),\ (4,0),\ (6,4),\ (8,4),\ (10,0)
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 지나는 두 이차함수의 그래프입니다.
                                    방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x)+(f\circ f)(x)=10
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 서로 다른 모든 실근의 합을 구하시오.
                                </p>
                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.11_6.png"
                                    alt="두 이차함수로 이루어진 함수 y=f(x)의 그래프"
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
                                    안쪽의 함숫값을
                                </p>

                                <BlockMath math={String.raw`
                f(x)=t
            `} />

                                <p className="leading-8">
                                    로 치환합니다. 그러면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x)+f(f(x))=10
                `}
                                />

                                <p className="leading-8">
                                    은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    t+f(t)=10
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(t)=10-t
                `}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        그래프로 생각하기
                                    </p>

                                    <p className="leading-8">
                                        방정식 <InlineMath math="f(t)=10-t" />의 해는
                                        두 그래프
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        y=f(t),\qquad y=10-t
                    `}
                                    />

                                    <p className="leading-8">
                                        의 교점의 <InlineMath math="t" />좌표입니다.
                                        이 값을 먼저 구한 뒤, 각각에 대하여{" "}
                                        <InlineMath math="f(x)=t" />를 다시 생각합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    먼저 <InlineMath math="0\le t\le4" />에서
                                    이차함수의 꼭짓점은 <InlineMath math="(2,10)" />이고
                                    점 <InlineMath math="(0,0)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(t)=-\frac52(t-2)^2+10
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f(t)=10-t" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -\frac52(t-2)^2+10=10-t
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    5t^2-22t+20=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    t=\frac{11-\sqrt{21}}5,\qquad
                    \frac{11+\sqrt{21}}5
                `}
                                />

                                <p className="leading-8">
                                    이고 두 값 모두 <InlineMath math="0\le t\le4" />를
                                    만족합니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 <InlineMath math="4\le t\le10" />에서
                                    이차함수는 <InlineMath math="x=7" />에 대칭이고
                                    점 <InlineMath math="(4,0)" />과{" "}
                                    <InlineMath math="(6,4)" />를 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(t)=-\frac12(t-7)^2+\frac92
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -\frac12(t-7)^2+\frac92=10-t
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    t^2-16t+60=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    (t-6)(t-10)=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    t=6,\ 10
                `}
                                />

                                <p className="leading-8">
                                    을 얻습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(x)=t" />에서 생각해야 할
                                    함숫값은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{11-\sqrt{21}}5,\qquad
                    \frac{11+\sqrt{21}}5,\qquad
                    6,\qquad10
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                    <p className="mb-4 font-bold text-white">
                                        그래프의 대칭성을 이용하여 근의 합 구하기
                                    </p>

                                    <p className="leading-8">
                                        두 값
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \frac{11-\sqrt{21}}5,\qquad
                        \frac{11+\sqrt{21}}5
                    `}
                                    />

                                    <p className="leading-8">
                                        은 모두 <InlineMath math="0" />보다 크고{" "}
                                        <InlineMath math="4" />보다 작습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 각각의 높이에서 수평선을 그으면
                                        왼쪽 이차함수와 두 점, 오른쪽 이차함수와 두 점에서
                                        만납니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        왼쪽 이차함수는 <InlineMath math="x=2" />에
                                        대칭이므로 두 근의 합은
                                    </p>

                                    <BlockMath math={String.raw`
                    2\times2=4
                `} />

                                    <p className="leading-8">
                                        이고, 오른쪽 이차함수는{" "}
                                        <InlineMath math="x=7" />에 대칭이므로
                                        두 근의 합은
                                    </p>

                                    <BlockMath math={String.raw`
                    2\times7=14
                `} />

                                    <p className="leading-8">
                                        입니다. 따라서 각 높이에서 얻는 네 근의 합은
                                    </p>

                                    <BlockMath math={String.raw`
                    4+14=18
                `} />

                                    <p className="leading-8">
                                        입니다. 이러한 높이가 두 개이므로 근의 합은
                                    </p>

                                    <BlockMath math={String.raw`
                    18\times2=36
                `} />

                                    <p className="mt-5 leading-8">
                                        <InlineMath math="f(x)=6" />에서는 오른쪽 이차함수의
                                        최댓값이 <InlineMath math="\frac92" />이므로
                                        왼쪽 이차함수에서만 두 근을 얻습니다.
                                        두 근의 합은
                                    </p>

                                    <BlockMath math={String.raw`
                    2\times2=4
                `} />

                                    <p className="mt-5 leading-8">
                                        마지막으로 <InlineMath math="f(x)=10" />에서는
                                        왼쪽 이차함수의 꼭짓점에서만 만나므로
                                    </p>

                                    <BlockMath math={String.raw`
                    x=2
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    따라서 방정식의 서로 다른 모든 실근의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    36+4+2=42
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{42}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(x)=t" />로 치환하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(x)+f(f(x))=10
                        \quad\longrightarrow\quad
                        f(t)=10-t
                    `}
                                    />

                                    <p className="leading-8">
                                        가 됩니다. 먼저 <InlineMath math="y=f(t)" />와{" "}
                                        <InlineMath math="y=10-t" />의 교점의{" "}
                                        <InlineMath math="t" />좌표를 찾고, 그 값을 높이로 하는
                                        수평선과 <InlineMath math="y=f(x)" />의 교점을 다시 찾습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이때 각각의 근을 모두 직접 구하지 않고,
                                        두 이차함수의 대칭축{" "}
                                        <InlineMath math="x=2" />와{" "}
                                        <InlineMath math="x=7" />을 이용하면
                                        근의 합을 빠르게 구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            합성함수로 표현된 방정식은 안쪽의 함숫값을{" "}
                            <InlineMath math="t" />로 치환한 뒤,
                            먼저 <InlineMath math="t" />에 대한 방정식을 풉니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            그 해가
                            <InlineMath math="t=\alpha_1,\alpha_2,\cdots" />라면
                            다시
                        </p>

                        <BlockMath math={String.raw`
                f(x)=\alpha_1,\qquad
                f(x)=\alpha_2,\qquad \cdots
            `} />

                        <p className="leading-8 text-gray-300">
                            를 풀어 원래 방정식의 해를 구합니다.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3.12 역함수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.12 역함수
                </h2>

                <p className="leading-8 text-gray-300">
                    함수가 일대일대응이면 입력과 출력의 대응을 거꾸로 하여
                    새로운 함수를 만들 수 있습니다. 이와 같이 원래 함수의 대응을
                    거꾸로 되돌리는 함수를 역함수라고 합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 역함수의 존재 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 역함수의 존재
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f:X\to Y" />가 일대일대응이면
                            정의역 <InlineMath math="X" />의 각 원소와 공역{" "}
                            <InlineMath math="Y" />의 각 원소가 하나씩 대응합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 이 대응의 방향을 거꾸로 하여{" "}
                            <InlineMath math="Y" />의 원소를{" "}
                            <InlineMath math="X" />의 원소에 대응시키는 함수도
                            만들 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    a
                    \xrightarrow{\quad f\quad}
                    b
                    \qquad\Longleftrightarrow\qquad
                    b
                    \xrightarrow{\quad f^{-1}\quad}
                    a
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 함수를 <InlineMath math="f" />의{" "}
                            <strong className="text-white">역함수</strong>라고 하고{" "}
                            <InlineMath math="f^{-1}" />로 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                역함수의 존재 조건
                            </p>

                            <BlockMath
                                math={String.raw`
                        f\text{가 일대일대응}
                        \quad\Longleftrightarrow\quad
                        f^{-1}\text{이 존재}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                역함수가 존재하려면 서로 다른 입력이 서로 다른 출력에
                                대응하고, 공역의 모든 원소가 빠짐없이 대응되어야 합니다.
                            </p>
                        </div>
                    </div>

                    {/* 2. 역함수의 정의 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 역함수의 정의
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수를 합성했을 때 원래의 입력으로 되돌아오면
                            두 함수를 서로 역함수라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            함수 <InlineMath math="f" />와{" "}
                            <InlineMath math="g" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    (f\circ g)(x)=x,
                    \qquad
                    (g\circ f)(x)=x
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            즉,
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(g(x))=x,
                    \qquad
                    g(f(x))=x
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이면 <InlineMath math="f" />와{" "}
                            <InlineMath math="g" />를 서로 역함수라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <p className="mb-3 font-bold text-green-300">
                                역함수의 정의
                            </p>

                            <BlockMath
                                math={String.raw`
                        f\circ g=g\circ f=I
                    `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                이때
                            </p>

                            <BlockMath
                                math={String.raw`
                        g=f^{-1},
                        \qquad
                        f=g^{-1}
                    `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 함수 <InlineMath math="f" />와 그 역함수{" "}
                            <InlineMath math="f^{-1}" />을 합성하면 항상
                            항등함수가 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    f\circ f^{-1}
                    =
                    f^{-1}\circ f
                    =
                    I
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    f(f^{-1}(x))
                    =
                    f^{-1}(f(x))
                    =
                    x
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                생각하기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                함수 <InlineMath math="f" />가 어떤 입력을 다른 값으로
                                바꾸었다면, 역함수 <InlineMath math="f^{-1}" />은
                                그 값을 다시 원래의 입력으로 되돌립니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        x
                        \xrightarrow{\quad f\quad}
                        f(x)
                        \xrightarrow{\quad f^{-1}\quad}
                        x
                `}
                            />
                        </div>
                    </div>

                    {/* 3. 함수와 역함수 위의 점의 관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 함수와 역함수 위의 점의 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            역함수가 존재하는 함수 <InlineMath math="f" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(a)=b
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 하면 <InlineMath math="f" />는{" "}
                            <InlineMath math="a" />를{" "}
                            <InlineMath math="b" />에 대응시킵니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    a
                    \xrightarrow{\quad f\quad}
                    b
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            역함수는 이 대응을 거꾸로 되돌리므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    b
                    \xrightarrow{\quad f^{-1}\quad}
                    a
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 따라서
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
                        \boxed{
                            f(a)=b
                            \quad\Longleftrightarrow\quad
                            f^{-1}(b)=a
                        }
                    `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            함수 <InlineMath math="y=f(x)" />가 점{" "}
                            <InlineMath math="(a,b)" />를 지나면 역함수{" "}
                            <InlineMath math="y=f^{-1}(x)" />는 점{" "}
                            <InlineMath math="(b,a)" />를 지납니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    (a,b)
                    \quad\longleftrightarrow\quad
                    (b,a)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            두 점 <InlineMath math="(a,b)" />와{" "}
                            <InlineMath math="(b,a)" />는 직선{" "}
                            <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                            따라서 함수와 그 역함수의 그래프도 직선{" "}
                            <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                역함수의 함숫값이 주어졌을 때
                            </p>

                            <p className="leading-8 text-gray-300">
                                역함수의 함숫값이 주어지면 원래 함수의 관계로
                                바꾸어 해석하는 것이 편리합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        f^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        f(b)=a
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                예를 들어
                            </p>

                            <BlockMath
                                math={String.raw`
                        f^{-1}(3)=5
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                이면 이를 원래 함수의 관계로 바꾸어
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(5)=3
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                으로 해석합니다.
                            </p>
                        </div>
                    </div>

                    {/* 4. 역함수의 성질 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 역함수의 성질
                        </h3>

                        {/* (1) 역함수의 역함수 */}
                        <div>
                            <h4 className="mb-3 text-xl font-bold text-white">
                                (1) 역함수의 역함수
                            </h4>

                            <p className="leading-8 text-gray-300">
                                역함수는 원래 함수의 대응을 거꾸로 한 함수입니다.
                                따라서 역함수의 대응을 다시 거꾸로 하면
                                원래 함수가 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                            (f^{-1})^{-1}=f
                        }
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        a
                        \xrightarrow{\quad f\quad}
                        b
                        \xrightarrow{\quad f^{-1}\quad}
                        a
                    `}
                            />
                        </div>

                        {/* (2) 두 함수의 합성 */}
                        <div className="mt-8">
                            <h4 className="mb-3 text-xl font-bold text-white">
                                (2) 합성함수의 역함수
                            </h4>

                            <p className="leading-8 text-gray-300">
                                두 함수 <InlineMath math="f" />와{" "}
                                <InlineMath math="g" />가 각각 역함수를 가질 때,
                                합성함수의 역함수는 각 함수의 역함수를
                                <strong className="text-white"> 반대 순서로 합성</strong>
                                합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                            (f\circ g)^{-1}
                            =
                            g^{-1}\circ f^{-1}
                        }
                    `}
                            />

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="f\circ g" />에서는{" "}
                                <InlineMath math="g" />를 먼저 적용하고{" "}
                                <InlineMath math="f" />를 나중에 적용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        x
                        \xrightarrow{\quad g\quad}
                        g(x)
                        \xrightarrow{\quad f\quad}
                        f(g(x))
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                이 과정을 거꾸로 되돌리려면 마지막에 적용한{" "}
                                <InlineMath math="f" />부터 되돌려야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(g(x))
                        \xrightarrow{\quad f^{-1}\quad}
                        g(x)
                        \xrightarrow{\quad g^{-1}\quad}
                        x
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 합성함수의 역함수는
                            </p>

                            <BlockMath
                                math={String.raw`
                        (f\circ g)^{-1}
                        =
                        g^{-1}\circ f^{-1}
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>
                        </div>

                        {/* (3) 세 함수의 합성 */}
                        <div className="mt-8">
                            <h4 className="mb-3 text-xl font-bold text-white">
                                (3) 세 함수의 합성
                            </h4>

                            <p className="leading-8 text-gray-300">
                                함수가 세 개 이상 합성되어 있어도 같은 원리를
                                적용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        x
                        \xrightarrow{\quad h\quad}
                        h(x)
                        \xrightarrow{\quad g\quad}
                        g(h(x))
                        \xrightarrow{\quad f\quad}
                        f(g(h(x)))
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                이 과정을 되돌릴 때는 마지막에 적용한 함수부터
                                차례로 역함수를 적용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        f(g(h(x)))
                        \xrightarrow{\quad f^{-1}\quad}
                        g(h(x))
                        \xrightarrow{\quad g^{-1}\quad}
                        h(x)
                        \xrightarrow{\quad h^{-1}\quad}
                        x
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                            (f\circ g\circ h)^{-1}
                            =
                            h^{-1}\circ g^{-1}\circ f^{-1}
                        }
                `}
                            />

                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    합성함수의 역함수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    합성함수의 역함수를 구할 때는
                                </p>

                                <p className="mt-3 text-center text-lg font-bold text-white">
                                    각각을 역함수로 바꾸고, 합성 순서를 반대로 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f\circ g\circ h
                            \quad\longrightarrow\quad
                            h^{-1}\circ g^{-1}\circ f^{-1}
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
                            실수 전체의 집합에서 정의된 함수
                        </p>

                        <BlockMath
                            math={String.raw`
                f(x)=
                \begin{cases}
                    \displaystyle\frac12x-2a & (x\ge0)\\
                    (a-1)x+a^2-15 & (x<0)
                \end{cases}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 역함수가 존재할 때, 상수{" "}
                            <InlineMath math="a" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />의 역함수가 존재하려면{" "}
                                <InlineMath math="f" />가 일대일대응이어야 합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x\ge0" />에서 함수의 기울기는{" "}
                                <InlineMath math="\displaystyle \frac12" />이므로 함수는 증가합니다.
                                따라서 <InlineMath math="x<0" />에서도 증가해야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a-1>0
                `}
                            />

                            <p className="leading-8">
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
                    a>1
                `}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <p className="leading-8">
                                또한 실수 전체에서 일대일대응이 되려면 두 부분 사이에
                                함숫값이 빠지지 않아야 하므로{" "}
                                <InlineMath math="x=0" />을 기준으로 두 식의 경계값이
                                같아야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    -2a=a^2-15
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a^2+2a-15=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a+5)(a-3)=0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-5
                    \quad\text{또는}\quad
                    a=3
                `}
                            />

                            <p className="leading-8">
                                이 중 <InlineMath math="a>1" />을 만족하는 값은{" "}
                                <InlineMath math="a=3" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{a=3}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수가 존재한다는 조건은 함수가{" "}
                                    <strong className="text-white">
                                        일대일대응
                                    </strong>
                                    이라는 뜻입니다. 따라서 일대일대응의 그래프 조건을
                                    이용하여 해결합니다.
                                </p>
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
                            실수 전체의 집합에서 정의된 함수{" "}
                            <InlineMath math="f(x)" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                f(x)=a|x-2|-4x+1
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="f(x)" />의 역함수가 존재하도록 하는
                            정수 <InlineMath math="a" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />의 역함수가 존재하려면{" "}
                                <InlineMath math="f" />가 일대일대응이어야 합니다.
                            </p>

                            <p className="leading-8">
                                절댓값 안의 식의 부호가 바뀌는{" "}
                                <InlineMath math="x=2" />를 기준으로 나누면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=
                    \begin{cases}
                        (-a-4)x+2a+1 & (x<2)\\
                        (a-4)x-2a+1 & (x\ge2)
                    \end{cases}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                전체 실수에서 일대일대응이 되려면{" "}
                                <InlineMath math="x=2" />의 왼쪽과 오른쪽에서 함수가
                                같은 방향으로 변해야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 직선의 기울기
                            </p>

                            <BlockMath
                                math={String.raw`
                    -a-4,
                    \qquad
                    a-4
                `}
                            />

                            <p className="leading-8">
                                의 부호가 같아야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-a-4)(a-4)>0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    16-a^2>0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    -4<a<4
                `}
                            />

                            <p className="leading-8">
                                이를 만족하는 정수 <InlineMath math="a" />는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -3,\,-2,\,-1,\,0,\,1,\,2,\,3
                `}
                            />

                            <p className="leading-8">
                                으로 모두 <InlineMath math="7" />개입니다.
                            </p>

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

                                <p className="leading-8">
                                    역함수가 존재하려면 함수가 일대일대응이어야 합니다.
                                    절댓값 함수에서는 꺾이는 점의 양쪽 기울기의 부호가
                                    같아야 전체 구간에서 한 방향으로 변하여
                                    일대일대응이 됩니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            함수
                        </p>

                        <BlockMath
                            math={String.raw`
                f(x)=|3x-4|-kx+2
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 역함수가 존재하지 않게 되는 정수{" "}
                            <InlineMath math="k" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                절댓값 안의 식이 <InlineMath math="0" />이 되는{" "}
                                <InlineMath math="\displaystyle x=\frac43" />을 기준으로 나누면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=
                    \begin{cases}
                        (-3-k)x+6
                        & \left(x<\displaystyle\frac43\right)\\
                        (3-k)x-2
                        & \left(x\ge\displaystyle\frac43\right)
                    \end{cases}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 역함수가 존재하는 조건을 구합니다.
                                역함수가 존재하려면 함수가 일대일대응이어야 하므로
                                꺾이는 점의 양쪽에서 함수가 같은 방향으로 변해야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 부분의 기울기
                            </p>

                            <BlockMath
                                math={String.raw`
                    -3-k,
                    \qquad
                    3-k
                `}
                            />

                            <p className="leading-8">
                                의 부호가 같아야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-3-k)(3-k)>0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    k^2-9>0
                `}
                            />

                            <p className="leading-8">
                                따라서 역함수가 존재하는 경우는
                            </p>

                            <BlockMath
                                math={String.raw`
                    k<-3
                    \quad\text{또는}\quad
                    k>3
                `}
                            />

                            <p className="leading-8">
                                입니다. 그러므로 역함수가 존재하지 않는 경우는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -3\le k\le3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이때 <InlineMath math="k=-3" /> 또는{" "}
                                <InlineMath math="k=3" />이면 한쪽 부분의 기울기가{" "}
                                <InlineMath math="0" />이 되어 일대일함수가 아니므로
                                역함수가 존재하지 않습니다.
                            </p>

                            <p className="leading-8">
                                따라서 가능한 정수 <InlineMath math="k" />는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -3,\,-2,\,-1,\,0,\,1,\,2,\,3
                `}
                            />

                            <p className="leading-8">
                                으로 모두 <InlineMath math="7" />개입니다.
                            </p>

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

                                <p className="leading-8">
                                    역함수가 존재하지 않는 조건을 바로 구하기보다
                                    먼저 <strong className="text-white">역함수가 존재하는 조건</strong>을
                                    구한 뒤 그 반대의 범위를 찾습니다.
                                    특히 한쪽 기울기가 <InlineMath math="0" />인 경우에도
                                    일대일함수가 아니므로 경계값을 포함해야 합니다.
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
                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여{" "}
                            <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수{" "}
                            <InlineMath math="f" />의 역함수가 존재하고
                        </p>

                        <BlockMath
                            math={String.raw`
                2f(2)+4f(3)=12,
                \qquad
                f^{-1}(2)-f^{-1}(3)=1
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,{" "}
                            <InlineMath math="f(5)+f^{-1}(5)" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />의 역함수가 존재하므로{" "}
                                <InlineMath math="f" />는 일대일대응입니다.
                            </p>

                            <p className="leading-8">
                                먼저
                            </p>

                            <BlockMath
                                math={String.raw`
                    2f(2)+4f(3)=12
                `}
                            />

                            <p className="leading-8">
                                의 양변을 <InlineMath math="2" />로 나누면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)+2f(3)=6
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="f(2)" />와{" "}
                                <InlineMath math="f(3)" />은 서로 다른{" "}
                                <InlineMath math="X" />의 원소이므로 이를 만족하는 경우는
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=4,
                    \qquad
                    f(3)=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 역함수의 조건
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2)-f^{-1}(3)=1
                `}
                            />

                            <p className="leading-8">
                                을 살펴봅니다.
                            </p>

                            <p className="leading-8">
                                이미 <InlineMath math="2" />와{" "}
                                <InlineMath math="3" />은 각각{" "}
                                <InlineMath math="4" />와{" "}
                                <InlineMath math="1" />에 대응하므로, 남은 입력{" "}
                                <InlineMath math="1,4,5" />가 출력{" "}
                                <InlineMath math="2,3,5" />에 하나씩 대응해야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2),\ f^{-1}(3)
                    \in\{1,4,5\}
                `}
                            />

                            <p className="leading-8">
                                이고 두 값의 차가 <InlineMath math="1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2)=5,
                    \qquad
                    f^{-1}(3)=4
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                역함수의 함숫값을 원래 함수의 관계로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(5)=2,
                    \qquad
                    f(4)=3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 남은 입력과 출력은 각각{" "}
                                <InlineMath math="1" />과{" "}
                                <InlineMath math="5" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=5
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(5)=1
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(5)+f^{-1}(5)
                        =
                        2+1
                        =
                        \boxed{3}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수의 함숫값은 원래 함수의 대응으로 바꾸어
                                    해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        f(b)=a
                    `}
                                />

                                <p className="leading-8">
                                    또한 역함수가 존재하므로{" "}
                                    <InlineMath math="f" />가 일대일대응이라는 조건을
                                    함께 이용합니다.
                                </p>
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
                            집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여 함수{" "}
                            <InlineMath math="f:X\to X" />가 일대일대응이고
                        </p>

                        <BlockMath
                            math={String.raw`
                f(2)=3,\qquad
                f^{-1}(2)=3,\qquad
                f^{-1}(4)=1
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족시킬 때,{" "}
                            <InlineMath math="f(4)+f^{-1}(4)" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                역함수의 함숫값을 원래 함수의 관계로 바꾸어 해석합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2)=3
                    \quad\Longleftrightarrow\quad
                    f(3)=2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    f^{-1}(4)=1
                    \quad\Longleftrightarrow\quad
                    f(1)=4
                `}
                            />

                            <p className="leading-8">
                                따라서 지금까지 주어진 대응을 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    1\xrightarrow{\ f\ }4,\qquad
                    2\xrightarrow{\ f\ }3,\qquad
                    3\xrightarrow{\ f\ }2
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f:X\to X" />는 일대일대응이므로
                                남은 원소도 하나씩 대응해야 합니다.
                                정의역에서 남은 원소는 <InlineMath math="4" />이고,
                                공역에서 남은 원소는 <InlineMath math="1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(4)=1
                `}
                            />

                            <p className="leading-8">
                                입니다. 또한 주어진 조건에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(4)=1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(4)+f^{-1}(4)
                        =
                        1+1
                        =
                        \boxed{2}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수의 함숫값이 주어지면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        f(b)=a
                    `}
                                />

                                <p className="leading-8">
                                    로 바꾸어 해석합니다. 그다음 일대일대응에서는
                                    정의역과 공역의 원소가 하나씩 대응한다는 것을 이용하여
                                    남은 대응을 결정합니다.
                                </p>
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
                            집합{" "}
                            <InlineMath math="X=\{2,9,11,13,15\}" />에서{" "}
                            <InlineMath math="Y=\{0,1,2,3,4\}" />로의 두 함수{" "}
                            <InlineMath math="f,\ g" />를 다음과 같이 정의합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                            <BlockMath
                                math={String.raw`
                    f(x)
                    =
                    (x\text{를 }5\text{로 나누었을 때의 나머지})
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    g(x)
                    =
                    (2x\text{를 }5\text{로 나누었을 때의 나머지})
                `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            <InlineMath
                                math="f\circ(f\circ h^{-1})^{-1}\circ f=g"
                            />{" "}
                            를 만족시키는 함수 <InlineMath math="h(x)" />에 대하여{" "}
                            <InlineMath math="h(4)" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                합성함수의 역함수는 각각을 역함수로 바꾸고
                                합성 순서를 반대로 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ h^{-1})^{-1}
                    =
                    (h^{-1})^{-1}\circ f^{-1}
                    =
                    h\circ f^{-1}
                `}
                            />

                            <p className="leading-8">
                                이를 주어진 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f\circ h\circ f^{-1}\circ f=g
                `}
                            />

                            <p className="leading-8">
                                입니다. 이때
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}\circ f=I
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f\circ h=g
                `}
                            />

                            <p className="leading-8">
                                입니다. 양쪽에 <InlineMath math="f^{-1}" />을 합성하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    h=f^{-1}\circ g
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    h(4)=f^{-1}(g(4))
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="g(4)" />는{" "}
                                <InlineMath math="2\cdot4=8" />을{" "}
                                <InlineMath math="5" />로 나누었을 때의 나머지이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    h(4)=f^{-1}(3)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="X" />의 원소 중{" "}
                                <InlineMath math="5" />로 나누었을 때 나머지가{" "}
                                <InlineMath math="3" />인 원소는{" "}
                                <InlineMath math="13" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(13)=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 역함수의 관계를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(3)=13
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{h(4)=13}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 합성함수의 역함수에서{" "}
                                    <strong className="text-white">
                                        각각을 역함수로 바꾸고 합성 순서를 반대로
                                    </strong>
                                    합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f\circ h^{-1})^{-1}
                        =
                        h\circ f^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    그다음{" "}
                                    <InlineMath math="f^{-1}\circ f=I" />를 이용하여
                                    합성을 정리하고, 역함수의 함숫값은 원래 함수의
                                    대응으로 바꾸어 해석합니다.
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
                            집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여 함수{" "}
                            <InlineMath math="f:X\to X" />의 역함수가 존재하고
                        </p>

                        <BlockMath
                            math={String.raw`
                f(1)=4,\qquad
                f(3)=5,\qquad
                f^{-1}(2)=5,\qquad
                (f\circ f)(4)=4
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,{" "}
                            <InlineMath math="(f^{-1}\circ f^{-1})(2)" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 역함수의 함숫값을 원래 함수의 관계로 바꾸어
                                해석합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2)=5
                    \quad\Longleftrightarrow\quad
                    f(5)=2
                `}
                            />

                            <p className="leading-8">
                                따라서 지금까지의 대응은
                            </p>

                            <BlockMath
                                math={String.raw`
                    1\xrightarrow{\ f\ }4,\qquad
                    3\xrightarrow{\ f\ }5,\qquad
                    5\xrightarrow{\ f\ }2
                `}
                            />

                            <p className="leading-8">
                                입니다. 함수 <InlineMath math="f" />는 일대일대응이므로
                                남은 입력 <InlineMath math="2,4" />는 남은 출력{" "}
                                <InlineMath math="1,3" />에 하나씩 대응해야 합니다.
                            </p>

                            <p className="leading-8">
                                한편,
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ f)(4)=4
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(f(4))=4
                `}
                            />

                            <p className="leading-8">
                                입니다. 이미 <InlineMath math="f(1)=4" />이므로
                                일대일대응에서 <InlineMath math="4" />에 대응하는
                                입력은 <InlineMath math="1" />뿐입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(4)=1
                `}
                            />

                            <p className="leading-8">
                                이고, 남은 대응은
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 구하려는 값을 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f^{-1}\circ f^{-1})(2)
                    =
                    f^{-1}(f^{-1}(2))
                `}
                            />

                            <p className="leading-8">
                                입니다. 주어진 조건에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(2)=5
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="f(3)=5" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(5)=3
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
                        (f^{-1}\circ f^{-1})(2)
                        =
                        f^{-1}(5)
                        =
                        \boxed{3}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수의 함숫값은 원래 함수의 대응으로 바꾸어
                                    해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        f(b)=a
                    `}
                                />

                                <p className="leading-8">
                                    또한 <InlineMath math="(f\circ f)(4)=4" />는{" "}
                                    <InlineMath math="f(f(4))=4" />로 해석하고,
                                    일대일대응에서 이미 정해진 대응을 이용하여
                                    나머지 대응을 결정합니다.
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

                    <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여 함수{" "}
                                <InlineMath math="f:X\to X" />가 그림과 같습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                함수 <InlineMath math="g:X\to X" />의 역함수가 존재하고
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(1)=4,\qquad
                    g^{-1}(2)=3,\qquad
                    (g\circ f)(3)=1
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때,{" "}
                                <InlineMath math="g^{-1}(1)+(f\circ g)(2)" />의 값을
                                구하시오.
                            </p>
                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">
                            <img
                                src="/images/commonMath2/3.12_8.png"
                                alt="함수 f의 대응 관계"
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
                                먼저 그림에서 함수 <InlineMath math="f" />의 대응을
                                확인합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=3,\qquad
                    f(2)=1,\qquad
                    f(3)=4,\qquad
                    f(4)=2
                `}
                            />

                            <p className="leading-8">
                                주어진 역함수의 조건
                            </p>

                            <BlockMath
                                math={String.raw`
                    g^{-1}(2)=3
                `}
                            />

                            <p className="leading-8">
                                을 원래 함수의 관계로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(3)=2
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)(3)=1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(f(3))=1
                `}
                            />

                            <p className="leading-8">
                                입니다. 그림에서 <InlineMath math="f(3)=4" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                지금까지 함수 <InlineMath math="g" />의 대응을 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(1)=4,\qquad
                    g(3)=2,\qquad
                    g(4)=1
                `}
                            />

                            <p className="leading-8">
                                입니다. 함수 <InlineMath math="g" />의 역함수가 존재하므로{" "}
                                <InlineMath math="g" />는 일대일대응입니다.
                                따라서 남은 입력 <InlineMath math="2" />는 남은 출력{" "}
                                <InlineMath math="3" />에 대응해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(2)=3
                `}
                            />

                            <p className="leading-8">
                                이제 구하려는 두 값을 각각 계산합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="g(4)=1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g^{-1}(1)=4
                `}
                            />

                            <p className="leading-8">
                                이고,
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(2)
                    =
                    f(g(2))
                    =
                    f(3)
                    =
                    4
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
                        g^{-1}(1)+(f\circ g)(2)
                        =
                        4+4
                        =
                        \boxed{8}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수의 함숫값은 원래 함수의 대응으로 바꾸고,
                                    합성함수는 안쪽 함수부터 차례로 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        g(b)=a
                `}
                                />

                                <p className="leading-8">
                                    또한 역함수가 존재하는 함수는 일대일대응이므로
                                    이미 정해진 대응을 이용하여 남은 대응을 결정할 수 있습니다.
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
                        <p className="leading-8 text-gray-300">
                            역함수가 존재하는 두 함수{" "}
                            <InlineMath math="f:X\to X" />,{" "}
                            <InlineMath math="g:X\to X" />에 대하여
                            다음 보기에서 옳은 것만을 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                            <div className="space-y-4 text-gray-300">
                                <p className="leading-8">
                                    ㄱ.{" "}
                                    <InlineMath
                                        math="(f^{-1}\circ g^{-1}\circ f)^{-1}
                        =f^{-1}\circ g\circ f"
                                    />
                                </p>

                                <p className="leading-8">
                                    ㄴ. <InlineMath math="f=f^{-1}" />이면{" "}
                                    <InlineMath math="f" />는 항등함수이다.
                                </p>

                                <p className="leading-8">
                                    ㄷ. <InlineMath math="f\circ g=g\circ f" />이면{" "}
                                    <InlineMath
                                        math="(g\circ f)^{-1}
                        =g^{-1}\circ f^{-1}"
                                    />
                                    이다.
                                </p>

                                <p className="leading-8">
                                    ㄹ. 함수 <InlineMath math="f\circ f^{-1}" />과 함수{" "}
                                    <InlineMath math="f^{-1}\circ f" />는 서로 같은 함수이다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                            <div>① ㄱ</div>
                            <div>② ㄱ, ㄴ</div>
                            <div>③ ㄱ, ㄷ, ㄹ</div>
                            <div>④ ㄴ, ㄷ, ㄹ</div>
                            <div>⑤ ㄱ, ㄴ, ㄷ, ㄹ</div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">
                            {/* ㄱ */}
                            <div>
                                <p className="font-bold text-white">
                                    ㄱ
                                </p>

                                <p className="mt-2 leading-8">
                                    합성함수의 역함수는 각각을 역함수로 바꾸고
                                    합성 순서를 반대로 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f^{-1}\circ g^{-1}\circ f)^{-1}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        f^{-1}
                        \circ
                        (g^{-1})^{-1}
                        \circ
                        (f^{-1})^{-1}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        f^{-1}\circ g\circ f
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ㄱ은 <strong className="text-white">참</strong>입니다.
                                </p>
                            </div>

                            {/* ㄴ */}
                            <div>
                                <p className="font-bold text-white">
                                    ㄴ
                                </p>

                                <p className="mt-2 leading-8">
                                    <InlineMath math="f=f^{-1}" />이면{" "}
                                    <InlineMath math="f" />를 두 번 합성했을 때
                                    항등함수가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f\circ f=I
                    `}
                                />

                                <p className="leading-8">
                                    그러나 이것이 <InlineMath math="f=I" />를 의미하는 것은
                                    아닙니다.
                                </p>

                                <p className="leading-8">
                                    예를 들어 집합 <InlineMath math="X=\{1,2\}" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(1)=2,\qquad f(2)=1
                    `}
                                />

                                <p className="leading-8">
                                    로 정의하면 <InlineMath math="f=f^{-1}" />이지만{" "}
                                    <InlineMath math="f" />는 항등함수가 아닙니다.
                                    따라서 ㄴ은 <strong className="text-white">거짓</strong>입니다.
                                </p>
                            </div>

                            {/* ㄷ */}
                            <div>
                                <p className="font-bold text-white">
                                    ㄷ
                                </p>

                                <p className="mt-2 leading-8">
                                    주어진 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f\circ g=g\circ f
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 양쪽 함수의 역함수를 생각하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f\circ g)^{-1}
                        =
                        (g\circ f)^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g^{-1}\circ f^{-1}
                        =
                        f^{-1}\circ g^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)^{-1}
                        =
                        f^{-1}\circ g^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    이고 위의 관계에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f^{-1}\circ g^{-1}
                        =
                        g^{-1}\circ f^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)^{-1}
                        =
                        g^{-1}\circ f^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ㄷ은{" "}
                                    <strong className="text-white">참</strong>입니다.
                                </p>
                            </div>

                            {/* ㄹ */}
                            <div>
                                <p className="font-bold text-white">
                                    ㄹ
                                </p>

                                <p className="mt-2 leading-8">
                                    함수와 그 역함수를 어느 순서로 합성해도
                                    항등함수가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f\circ f^{-1}=I
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        f^{-1}\circ f=I
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f\circ f^{-1}
                        =
                        f^{-1}\circ f
                    `}
                                />

                                <p className="leading-8">
                                    이므로 ㄹ은 <strong className="text-white">참</strong>입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <p className="mt-3 leading-8">
                                    옳은 것은 ㄱ, ㄷ, ㄹ입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③}}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    합성함수의 역함수에서는{" "}
                                    <strong className="text-white">
                                        각각을 역함수로 바꾸고 합성 순서를 반대로
                                    </strong>
                                    합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f\circ g)^{-1}
                        =
                        g^{-1}\circ f^{-1}
                    `}
                                />

                                <p className="leading-8">
                                    또한 <InlineMath math="f=f^{-1}" />은{" "}
                                    <InlineMath math="f\circ f=I" />라는 뜻이지,
                                    반드시 <InlineMath math="f=I" />라는 뜻은 아니라는
                                    점에 주의합니다.
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

                    <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여
                                함수 <InlineMath math="f:X\to X" />가 오른쪽 그림과 같고
                                함수 <InlineMath math="g:X\to X" />는 다음 조건을
                                만족시킵니다.
                            </p>

                            <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                                <p className="leading-8 text-gray-300">
                                    (가) <InlineMath math="g(1)=3,\quad g(2)=5" />
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    (나) <InlineMath math="g" />의 역함수가 존재합니다.
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                <InlineMath
                                    math="(g\circ f)(4)+(f\circ g)(4)"
                                />{" "}
                                의 최댓값을 구하시오.
                            </p>
                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">
                            <img
                                src="/images/commonMath2/3.12_10.png"
                                alt="함수 f의 대응 관계"
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
                                먼저 그림에서 함수 <InlineMath math="f" />의 대응을
                                확인합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=2,\quad
                    f(2)=1,\quad
                    f(3)=4,\quad
                    f(4)=5,\quad
                    f(5)=3
                `}
                            />

                            <p className="leading-8">
                                함수 <InlineMath math="g" />의 역함수가 존재하므로{" "}
                                <InlineMath math="g" />는 일대일대응입니다.
                            </p>

                            <p className="leading-8">
                                이미
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(1)=3,\qquad g(2)=5
                `}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="g(3),g(4),g(5)" />에는
                                남은 값 <InlineMath math="1,2,4" />가 하나씩
                                대응해야 합니다.
                            </p>

                            <p className="leading-8">
                                이제 구하려는 식을 합성함수의 순서에 따라 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)(4)
                    =
                    g(f(4))
                    =
                    g(5)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(4)
                    =
                    f(g(4))
                `}
                            />

                            <p className="leading-8">
                                이므로 구하려는 것은
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(5)+f(g(4))
                `}
                            />

                            <p className="leading-8">
                                의 최댓값입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="g(4)" />에 들어갈 수 있는 값은{" "}
                                <InlineMath math="1,2,4" />이고
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=2,\qquad
                    f(2)=1,\qquad
                    f(4)=5
                `}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="f(g(4))" />를 가장 크게 하려면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=4
                `}
                            />

                            <p className="leading-8">
                                로 두면 됩니다. 이때
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(4))=f(4)=5
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 <InlineMath math="g(3),g(5)" />에는{" "}
                                <InlineMath math="1,2" />가 하나씩 대응하므로{" "}
                                <InlineMath math="g(5)" />를 가장 크게 하려면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(5)=2
                `}
                            />

                            <p className="leading-8">
                                로 두면 됩니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)(4)+(f\circ g)(4)
                        =
                        2+5
                        =
                        \boxed{7}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수가 존재하는 함수는 일대일대응이므로 이미 사용된
                                    함숫값을 제외하고 남은 값이 하나씩 대응해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    합성함수를 먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)(4)+(f\circ g)(4)
                        =
                        g(5)+f(g(4))
                    `}
                                />

                                <p className="leading-8">
                                    로 바꾼 뒤, 가능한 대응 중 전체 값이 가장 커지도록
                                    <InlineMath math="g(4)" />와{" "}
                                    <InlineMath math="g(5)" />의 값을 결정합니다.
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            두 집합{" "}
                            <InlineMath math="X=\{1,2,3,4\}" />,{" "}
                            <InlineMath math="Y=\{1,3,6,9\}" />에 대하여
                            함수 <InlineMath math="f:X\to Y" />가 다음 조건을
                            만족시킵니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                            <p className="leading-8 text-gray-300">
                                (가) 함수 <InlineMath math="f" />는 일대일대응입니다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (나) <InlineMath math="f(2)\ne1" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (다) 등식{" "}
                                <InlineMath math="\displaystyle\frac13f(a)=(f\circ f^{-1})(a)" />를
                                만족시키는 <InlineMath math="a" />의 개수는{" "}
                                <InlineMath math="2" />입니다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            <InlineMath math="f(1)\times f^{-1}(1)" />의 값을
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 조건 (다)의 등식이 정의될 수 있는{" "}
                                <InlineMath math="a" />의 범위를 확인합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="f(a)" />가 정의되려면{" "}
                                <InlineMath math="a\in X" />이어야 하고,{" "}
                                <InlineMath math="f^{-1}(a)" />가 정의되려면{" "}
                                <InlineMath math="a\in Y" />이어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="a" />는 두 집합에 모두
                                속해야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a\in X\cap Y=\{1,3\}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f" />는 일대일대응이므로
                                역함수가 존재하고
                            </p>

                            <BlockMath
                                math={String.raw`
                    f\circ f^{-1}=I
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 <InlineMath math="a\in Y" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ f^{-1})(a)=a
                `}
                            />

                            <p className="leading-8">
                                이므로 조건 (다)의 등식은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac13f(a)=a
                `}
                            />

                            <p className="leading-8">
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(a)=3a
                `}
                            />

                            <p className="leading-8">
                                가 됩니다.
                            </p>

                            <p className="leading-8">
                                가능한 <InlineMath math="a" />는{" "}
                                <InlineMath math="1,3" />이고 이 등식을 만족시키는{" "}
                                <InlineMath math="a" />의 개수가{" "}
                                <InlineMath math="2" />이므로 두 값이 모두
                                등식을 만족합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=3,\qquad f(3)=9
                `}
                            />

                            <p className="leading-8">
                                함수 <InlineMath math="f" />는 일대일대응이므로
                                남은 입력 <InlineMath math="2,4" />에는 남은 함숫값{" "}
                                <InlineMath math="1,6" />이 하나씩 대응합니다.
                            </p>

                            <p className="leading-8">
                                그런데 조건 (나)에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)\ne1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=6,\qquad f(4)=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="f(4)=1" />이므로 역함수의 관계에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(1)=4
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
                        f(1)\times f^{-1}(1)
                        =
                        3\times4
                        =
                        \boxed{12}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 식에 <InlineMath math="f(a)" />와{" "}
                                    <InlineMath math="f^{-1}(a)" />가 함께 있으므로
                                    두 식이 모두 정의될 수 있는{" "}
                                    <InlineMath math="a" />를 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a\in X\cap Y
                    `}
                                />

                                <p className="leading-8">
                                    그다음
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f\circ f^{-1})(a)=a
                    `}
                                />

                                <p className="leading-8">
                                    를 이용하여 조건을 원래 함수{" "}
                                    <InlineMath math="f" />에 대한 식으로 바꾸어
                                    해석합니다.
                                </p>
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
                            집합 <InlineMath math="A=\{1,2,3,4\}" />에 대하여 두 함수{" "}
                            <InlineMath math="f,\ g" />는 각각
                        </p>

                        <BlockMath
                            math={String.raw`
                f:A\to A,
                \qquad
                g:A\to A
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            인 일대일대응입니다. 두 함수 <InlineMath math="f,\ g" />가
                            다음 세 조건을 만족시킬 때,{" "}
                            <InlineMath math="(g\circ f)^{-1}(2)" />의 값을 구하시오.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                            <p className="leading-8 text-gray-300">
                                (가){" "}
                                <InlineMath math="f(1)=3,\quad f(4)=4,\quad g(1)=3" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (나){" "}
                                <InlineMath math="(g\circ f)(1)=1,\quad (f\circ g)(1)=1" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (다){" "}
                                <InlineMath math="(f\circ g)^{-1}(2)=4" />
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                조건 (가)에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=3,\qquad g(1)=3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                조건 (나)의 첫 번째 식
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)(1)=1
                `}
                            />

                            <p className="leading-8">
                                에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(f(1))=g(3)=1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(3)=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(1)=1
                `}
                            />

                            <p className="leading-8">
                                에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(1))=f(3)=1
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(3)=1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 함수 <InlineMath math="f" />의 대응은
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=3,\qquad
                    f(3)=1,\qquad
                    f(4)=4
                `}
                            />

                            <p className="leading-8">
                                이고 <InlineMath math="f" />는 일대일대응이므로
                                남은 대응은
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=2
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 조건 (다)
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)^{-1}(2)=4
                `}
                            />

                            <p className="leading-8">
                                를 원래 함수의 관계로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(4)=2
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(4))=2
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="f(2)=2" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=2
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 구하려는 합성함수의 역함수를 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)^{-1}
                    =
                    f^{-1}\circ g^{-1}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)^{-1}(2)
                    =
                    f^{-1}(g^{-1}(2))
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="g(4)=2" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g^{-1}(2)=4
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="f(4)=4" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(4)=4
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)^{-1}(2)
                        =
                        f^{-1}(4)
                        =
                        \boxed{4}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    역함수의 함숫값은 원래 함수의 대응으로 바꾸어
                                    해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        h^{-1}(a)=b
                        \quad\Longleftrightarrow\quad
                        h(b)=a
                    `}
                                />

                                <p className="leading-8">
                                    또한 합성함수의 역함수에서는 각각을 역함수로 바꾸고
                                    합성 순서를 반대로 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)^{-1}
                        =
                        f^{-1}\circ g^{-1}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            집합{" "}
                            <InlineMath math="X=\{1,2,3,4,5,6,7\}" />에 대하여
                            다음 조건을 만족시키는 함수{" "}
                            <InlineMath math="f:X\to X" />의 개수를 구하시오.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40 p-5">
                            <p className="leading-8 text-gray-300">
                                (가) <InlineMath math="x_1\in X,\ x_2\in X" />인 임의의{" "}
                                <InlineMath math="x_1,\ x_2" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    1\le x_1<x_2\le5
                    \text{이면 }
                    f(x_1)>f(x_2)
                `}
                            />

                            <p className="mt-3 leading-8 text-gray-300">
                                (나) 함수 <InlineMath math="f" />의 역함수가 존재하지 않습니다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                조건 (가)에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)>f(2)>f(3)>f(4)>f(5)
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서{" "}
                                <InlineMath math="f(1),f(2),f(3),f(4),f(5)" />는
                                서로 다른 <InlineMath math="5" />개의 값입니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="X" />의 7개의 원소 중
                                함숫값으로 사용할 5개를 고르면, 큰 값부터 차례대로
                                대응해야 하므로 대응 방법은 하나로 정해집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    7C5=21
                `}
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="f(1),\ldots,f(5)" />를
                                정하는 방법은 <InlineMath math="21" />가지입니다.
                            </p>

                            <p className="leading-8">
                                이제 <InlineMath math="f(6)" />과{" "}
                                <InlineMath math="f(7)" />은 각각 집합{" "}
                                <InlineMath math="X" />의 7개 원소 중 하나가 될 수 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    7\times7=49
                `}
                            />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                여기서 역함수가 존재하는 경우를 제외합니다.
                            </p>

                            <p className="leading-8">
                                역함수가 존재하려면 <InlineMath math="f" />가
                                일대일대응이어야 합니다. 이미{" "}
                                <InlineMath math="f(1),\ldots,f(5)" />에서 서로 다른
                                5개의 값을 사용했으므로, 남아 있는 두 함숫값을{" "}
                                <InlineMath math="f(6),f(7)" />에 하나씩 대응시켜야 합니다.
                            </p>

                            <p className="leading-8">
                                남은 두 값을 대응시키는 방법은
                            </p>

                            <BlockMath
                                math={String.raw`
                    2
                `}
                            />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                따라서 처음 5개의 함숫값을 정한 각각의 경우에 대하여
                                역함수가 존재하지 않는 경우는
                            </p>

                            <BlockMath
                                math={String.raw`
                    49-2=47
                `}
                            />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        7C5\times47
                        =
                        21\times47
                        =
                        \boxed{987}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 조건 (가)에서{" "}
                                    <InlineMath math="f(1),\ldots,f(5)" />의 값은
                                    서로 달라야 하고, 크기순으로 대응되므로{" "}
                                    <strong className="text-white">
                                        5개의 함숫값만 고르면 대응이 하나로 결정
                                    </strong>
                                    됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그다음 역함수가 존재하지 않는 경우를 직접 세기보다
                                    전체 경우에서{" "}
                                    <strong className="text-white">
                                        일대일대응이 되는 경우
                                    </strong>
                                    를 빼는 것이 간단합니다.
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
                            세 집합
                        </p>

                        <BlockMath
                            math={String.raw`
                X=\{1,2,3,4\},\qquad
                Y=\{2,3,4,5\},\qquad
                Z=\{3,4,5\}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 두 함수{" "}
                            <InlineMath math="f:X\to Y" />,{" "}
                            <InlineMath math="g:Y\to Z" />가 다음 조건을 만족시킨다.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40  bg-black/20 p-5">
                            <p className="leading-8 text-gray-300">
                                (가) 함수 <InlineMath math="f" />는 일대일대응이다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (나) <InlineMath math="x\in(X\cap Y)" />이면{" "}
                                <InlineMath math="g(x)-f(x)=1" />이다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            보기에서 옳은 것만을 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/40  bg-black/20 p-5">
                            <p className="leading-8 text-gray-300">
                                ㄱ. 함수 <InlineMath math="g\circ f" />의 치역은{" "}
                                <InlineMath math="Z" />이다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                ㄴ. <InlineMath math="f^{-1}(5)\ge2" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                ㄷ.{" "}
                                <InlineMath math="f(3)<g(2)<f(1)" />이면{" "}
                                <InlineMath math="f(4)+g(2)=6" />이다.
                            </p>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ② ㄱ, ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ③ ㄱ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ⑤ ㄱ, ㄴ, ㄷ
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 두 집합의 공통 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
                    X\cap Y=\{2,3,4\}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 조건 (나)에 의해{" "}
                                <InlineMath math="x=2,3,4" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(x)=f(x)+1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                그런데 <InlineMath math="g(x)" />는 집합{" "}
                                <InlineMath math="Z=\{3,4,5\}" />의 원소이어야 하므로
                                <InlineMath math="f(2),f(3),f(4)" /> 중에는{" "}
                                <InlineMath math="5" />가 올 수 없습니다.
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f" />는{" "}
                                <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                일대일대응이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \{f(2),f(3),f(4)\}
                    =
                    \{2,3,4\}
                `}
                            />

                            <p className="leading-8">
                                이고, 남은 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(1)=5
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-4 font-bold text-white">
                                    ㄱ
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(2),f(3),f(4)" />가{" "}
                                    <InlineMath math="2,3,4" />를 하나씩 가지므로
                                    조건 (나)에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \{g(2),g(3),g(4)\}
                        =
                        \{3,4,5\}
                        =
                        Z
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="f" />는 일대일대응이므로
                                    치역이 <InlineMath math="Y" /> 전체입니다.
                                    따라서 <InlineMath math="g\circ f" />의 치역은
                                    <InlineMath math="g" />의 치역과 같고,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        Z
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ㄱ은 참입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-4 font-bold text-white">
                                    ㄴ
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)=5" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f^{-1}(5)=1
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서{" "}
                                    <InlineMath math="f^{-1}(5)\ge2" />는 성립하지
                                    않으므로 ㄴ은 거짓입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-4 font-bold text-white">
                                    ㄷ
                                </p>

                                <p className="leading-8">
                                    조건에서 <InlineMath math="f(1)=5" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(3)<g(2)<5
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 또한 조건 (나)에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g(2)=f(2)+1
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    만약 <InlineMath math="f(2)=2" />이면{" "}
                                    <InlineMath math="g(2)=3" />인데,
                                    남은 <InlineMath math="f(3)" />의 값은{" "}
                                    <InlineMath math="3" /> 또는{" "}
                                    <InlineMath math="4" />이므로{" "}
                                    <InlineMath math="f(3)<3" />을 만족할 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(2)=3,\qquad g(2)=4
                `}
                                />

                                <p className="leading-8">
                                    이어야 합니다. 이때{" "}
                                    <InlineMath math="f(3)<4" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(3)=2,\qquad f(4)=4
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(4)+g(2)
                        =
                        4+4
                        =
                        8
                `}
                                />

                                <p className="leading-8">
                                    이므로 ㄷ은 거짓입니다.
                                </p>
                            </div>

                            <p className="leading-8">
                                따라서 옳은 것은 ㄱ뿐입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{① ㄱ}}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 조건 <InlineMath math="g(x)=f(x)+1" />과
                                    공역 <InlineMath math="Z=\{3,4,5\}" />를 이용하여
                                    <InlineMath math="f(2),f(3),f(4)" />가 가질 수 있는
                                    값을 제한합니다. 그다음 함수{" "}
                                    <InlineMath math="f" />가 일대일대응이라는 조건을
                                    이용하면 <InlineMath math="f(1)" />의 값까지
                                    결정됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g(x)=f(x)+1
                        \rightarrow
                        \{f(2),f(3),f(4)\}=\{2,3,4\}
                        \rightarrow
                        f(1)=5
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

                    <div className="space-y-5 text-gray-300">
                        <div>
                            <p className="font-bold text-white">
                                1. 역함수의 존재
                            </p>

                            <BlockMath
                                math={String.raw`
                    f\text{가 일대일대응}
                    \quad\Longleftrightarrow\quad
                    f^{-1}\text{이 존재}
                `}
                            />
                        </div>

                        <div>
                            <p className="font-bold text-white">
                                2. 역함수의 정의
                            </p>

                            <BlockMath
                                math={String.raw`
                    f\circ f^{-1}
                    =
                    f^{-1}\circ f
                    =
                    I
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    f(f^{-1}(x))
                    =
                    f^{-1}(f(x))
                    =
                    x
                `}
                            />
                        </div>

                        <div>
                            <p className="font-bold text-white">
                                3. 함수와 역함수의 값과 점
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(a)=b
                    \quad\Longleftrightarrow\quad
                    f^{-1}(b)=a
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a,b)
                    \quad\longleftrightarrow\quad
                    (b,a)
                `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="y=f(x)" />와{" "}
                                <InlineMath math="y=f^{-1}(x)" />의 그래프는{" "}
                                <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                            </p>
                        </div>

                        <div>
                            <p className="font-bold text-white">
                                4. 역함수의 성질
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f^{-1})^{-1}=f
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (f\circ g)^{-1}
                    =
                    g^{-1}\circ f^{-1}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (f\circ g\circ h)^{-1}
                    =
                    h^{-1}\circ g^{-1}\circ f^{-1}
                `}
                            />

                            <p className="text-center font-bold text-white">
                                합성함수의 역함수는 각각을 역함수로 바꾸고
                                합성 순서를 반대로 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.13 합성함수와 역함수의 해석 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.13 합성함수와 역함수의 해석
                </h2>

                <p className="leading-8 text-gray-300">
                    역함수는 함수를 거꾸로 되돌리는 함수입니다.
                    역함수의 함숫값을 구할 때에는 역함수를 직접 구하지 않고
                    원래 함수를 이용할 수 있으며,
                    합성함수로 표현된 식에서는 두 함수를 합성하여 항등함수가 되는 관계를
                    이용하여 역함수를 해석할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 역함수의 함숫값 구하기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 역함수의 함숫값 구하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            역함수의 함숫값을 구할 때에는 역함수의 식을 직접 구하지 않아도 됩니다.
                            구하려는 역함수의 함숫값을 하나의 문자로 놓고
                            원래 함수의 관계로 바꾸어 계산합니다.
                        </p>

                        <div className="mt-5">
                            <BlockMath math={String.raw`
                    f^{-1}(a)=k
                    \quad\Longleftrightarrow\quad
                    f(k)=a
                `} />
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="f(x)=2x+3" />일 때,{" "}
                                <InlineMath math="f^{-1}(7)" />을 구해 봅니다.
                            </p>

                            <div className="mt-4">
                                <BlockMath math={String.raw`
                        f^{-1}(7)=k
                    `} />
                            </div>

                            <p className="mt-4 leading-8 text-gray-300">
                                로 놓으면
                            </p>

                            <BlockMath math={String.raw`
                    f(k)=7
                `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    2k+3=7
                `} />

                            <BlockMath math={String.raw`
                    k=2
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{f^{-1}(7)=2}
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="leading-8 text-gray-300">
                                역함수의 함숫값이 나오면 역함수를 먼저 구하려 하지 않고{" "}
                                <InlineMath math="f^{-1}(a)=k" />를{" "}
                                <InlineMath math="f(k)=a" />로 바꾸어 해석합니다.
                            </p>
                        </div>
                    </div>


                    {/* 2. 합성함수로 표현된 식에서 역함수 해석하기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 합성함수로 표현된 식에서 역함수 해석하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수가 서로 역함수이면 두 함수를 합성한 결과는 항등함수가 됩니다.
                            반대로 두 함수를 합성하여 항상 입력한 값이 그대로 나오면
                            두 함수는 서로 역함수입니다.
                        </p>

                        <div className="mt-5">
                            <BlockMath math={String.raw`
                    f(g(x))=x
                    \quad\Longleftrightarrow\quad
                    f\text{와 }g\text{는 서로 역함수}
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 복잡한 합성함수에서도{" "}
                            <InlineMath math="F(G(x))=x" />의 모양을 찾으면{" "}
                            <InlineMath math="F" />와 <InlineMath math="G" />가
                            서로 역함수라는 것을 알 수 있습니다.
                        </p>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                기본적인 해석
                            </p>

                            <BlockMath math={String.raw`
                    f(g(x))=x
                `} />

                            <p className="leading-8 text-gray-300">
                                이면 <InlineMath math="f(x)" />와{" "}
                                <InlineMath math="g(x)" />는 서로 역함수입니다.
                            </p>

                            <div className="my-5 border-t border-white/10" />

                            <BlockMath math={String.raw`
                    f(g(2x+3))=2x+3
                `} />

                            <p className="leading-8 text-gray-300">
                                에서 <InlineMath math="2x+3" />을 하나의 입력으로 보면
                            </p>

                            <BlockMath math={String.raw`
                    f(g(t))=t
                `} />

                            <p className="leading-8 text-gray-300">
                                의 형태이므로 역시 <InlineMath math="f" />와{" "}
                                <InlineMath math="g" />가 서로 역함수입니다.
                            </p>
                        </div>


                        {/* 예시 1 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="f(x)" />의 역함수를{" "}
                                <InlineMath math="g(x)" />라 할 때,{" "}
                                <InlineMath math="f(2x+3)" />의 역함수를 구해 봅니다.
                            </p>

                            <p className="mt-5 leading-8 text-gray-300">
                                <InlineMath math="f(2x+3)" />은 입력한 값에
                                2를 곱하고, 3을 더한 뒤, 마지막으로{" "}
                                <InlineMath math="f" />를 적용하는 함수입니다.
                            </p>

                            <div className="mt-4">
                                <BlockMath math={String.raw`
                        x
                        \xrightarrow{\times 2}
                        2x
                        \xrightarrow{+3}
                        2x+3
                        \xrightarrow{f}
                        f(2x+3)
                    `} />
                            </div>

                            <p className="mt-4 leading-8 text-gray-300">
                                역함수에서는 이 과정을 반대 순서로 되돌립니다.{" "}
                                <InlineMath math="f" />의 역함수가{" "}
                                <InlineMath math="g" />이므로
                            </p>

                            <BlockMath math={String.raw`
                    x
                    \xrightarrow{g}
                    g(x)
                    \xrightarrow{-3}
                    g(x)-3
                    \xrightarrow{\div 2}
                    \frac{g(x)-3}{2}
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                따라서 <InlineMath math="f(2x+3)" />의 역함수는
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        y=\frac{g(x)-3}{2}
                    }
                `} />
                        </div>


                        {/* 예시 2 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                이번에는 <InlineMath math="f(2x+3)" />의 역함수가{" "}
                                <InlineMath math="g(x)" />일 때,{" "}
                                <InlineMath math="f(x)" />의 역함수를 구해 봅니다.
                            </p>

                            <p className="mt-5 leading-8 text-gray-300">
                                <InlineMath math="f(2x+3)" />과{" "}
                                <InlineMath math="g(x)" />가 서로 역함수이므로
                                두 함수를 합성하면 항등함수가 됩니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                두 가지 합성 방법 중{" "}
                                <InlineMath math="g(x)" />를 먼저 적용하는 방향으로 합성하면
                            </p>

                            <BlockMath math={String.raw`
                    g(x)
                    \xrightarrow{\times 2}
                    2g(x)
                    \xrightarrow{+3}
                    2g(x)+3
                    \xrightarrow{f}
                    x
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    f(2g(x)+3)=x
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                이제 이 식을 하나의 합성함수로 해석합니다.
                                <InlineMath math="f(x)" />와{" "}
                                <InlineMath math="2g(x)+3" />을 합성한 결과가
                                항등함수이므로 두 함수는 서로 역함수입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f^{-1}(x)=2g(x)+3
                    }
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                풀이의 핵심
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 함수가 서로 역함수라는 조건이 주어지면
                                두 함수를 합성하여 항등함수를 만듭니다.
                                두 가지 합성 순서 중에서
                                <strong className="text-white"> 식을 다루기 쉬운 방향을 선택합니다.</strong>
                            </p>

                            <div className="mt-4">
                                <BlockMath math={String.raw`
                        F(G(x))=x
                        \quad\Longrightarrow\quad
                        F^{-1}(x)=G(x)
                    `} />
                            </div>
                        </div>
                    </div>


                    {/* 3. 하나의 식을 여러 방법으로 역함수로 해석하기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 하나의 식을 여러 방법으로 역함수로 해석하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            합성함수로 이루어진 식에서는 어디까지를 하나의 함수로 볼 것인지에 따라
                            서로 다른 두 함수를 역함수 관계로 해석할 수 있습니다.
                        </p>

                        <div className="mt-5">
                            <BlockMath math={String.raw`
                    f(g(2x+3))=x
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            먼저 <InlineMath math="g(2x+3)" /> 전체를 하나의 함수로 보면
                        </p>

                        <BlockMath math={String.raw`
                f\bigl(g(2x+3)\bigr)=x
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로 <InlineMath math="f(x)" />와{" "}
                            <InlineMath math="g(2x+3)" />은 서로 역함수입니다.
                        </p>

                        <div className="my-6 border-t border-white/10" />

                        <p className="leading-8 text-gray-300">
                            이번에는
                        </p>

                        <BlockMath math={String.raw`
                F(x)=f(g(x))
            `} />

                        <p className="leading-8 text-gray-300">
                            로 놓으면 주어진 식은
                        </p>

                        <BlockMath math={String.raw`
                F(2x+3)=x
            `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다. 따라서{" "}
                            <InlineMath math="F(x)=f(g(x))" />와{" "}
                            <InlineMath math="2x+3" />도 서로 역함수입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="leading-8 text-gray-300">
                                복잡한 합성함수는 필요한 부분을 하나의 함수로 묶어서{" "}
                                <InlineMath math="F(G(x))=x" />의 형태를 찾습니다.
                                그러면 <InlineMath math="F" />와{" "}
                                <InlineMath math="G" />를 서로 역함수로 해석할 수 있습니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 함수식을 합성 과정으로 보고 역함수 구하기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 함수식을 합성 과정으로 보고 역함수 구하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수식을 하나의 복잡한 식으로만 보지 않고
                            여러 간단한 계산이 차례대로 합성된 것으로 볼 수 있습니다.
                            역함수는 각각의 계산을 역연산으로 바꾸고
                            계산 순서를 반대로 하면 구할 수 있습니다.
                        </p>

                        <div className="mt-5">
                            <BlockMath math={String.raw`
                    (f\circ g\circ h)^{-1}
                    =
                    h^{-1}\circ g^{-1}\circ f^{-1}
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            즉, 이 성질을 계산 과정으로 표현하면
                        </p>

                        <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="text-center text-lg font-bold text-blue-300">
                                각각의 계산을 역연산으로 바꾸고, 계산 순서를 반대로 합니다.
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                예시
                            </p>

                            <BlockMath math={String.raw`
                    f(x)=2x+3
                `} />

                            <p className="leading-8 text-gray-300">
                                는
                            </p>

                            <BlockMath math={String.raw`
                    x
                    \xrightarrow{\times2}
                    2x
                    \xrightarrow{+3}
                    2x+3
                `} />

                            <p className="leading-8 text-gray-300">
                                의 순서로 계산하는 함수입니다.
                                이를 거꾸로 되돌리면
                            </p>

                            <BlockMath math={String.raw`
                    x
                    \xrightarrow{-3}
                    x-3
                    \xrightarrow{\div2}
                    \frac{x-3}{2}
                `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f^{-1}(x)=\frac{x-3}{2}
                    }
                `} />
                        </div>


                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                이차함수에서도 같은 방법을 사용할 수 있습니다.
                            </p>

                            <BlockMath math={String.raw`
                    f(x)=(x-2)^2-1
                    \qquad (x\ge2)
                `} />

                            <p className="leading-8 text-gray-300">
                                이 함수의 계산 과정은
                            </p>

                            <BlockMath math={String.raw`
                    x
                    \xrightarrow{-2}
                    x-2
                    \xrightarrow{\text{제곱}}
                    (x-2)^2
                    \xrightarrow{-1}
                    (x-2)^2-1
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                입니다. 이 과정을 거꾸로 되돌리면
                            </p>

                            <BlockMath math={String.raw`
                    x
                    \xrightarrow{+1}
                    x+1
                    \xrightarrow{\text{제곱근}}
                    \sqrt{x+1}
                    \xrightarrow{+2}
                    \sqrt{x+1}+2
                `} />

                            <p className="mt-4 leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f^{-1}(x)=\sqrt{x+1}+2
                        \qquad (x\ge-1)
                    }
                `} />

                            <p className="mt-5 leading-8 text-gray-300">
                                제곱을 거꾸로 되돌릴 때에는 제곱근의 부호를 결정해야 합니다.
                                이때 원래 함수의 정의역과 증가·감소를 확인하여
                                역함수에 알맞은 부호를 선택합니다.
                                이에 대한 자세한 내용은 무리함수에서 다시 알아봅니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                원래 함수가 증가하면 역함수도 증가하고,
                                원래 함수가 감소하면 역함수도 감소합니다.
                            </p>

                            <div className="mt-4">
                                <BlockMath math={String.raw`
                        \begin{aligned}
                        f\text{가 증가}
                        &\Longrightarrow
                        f^{-1}\text{도 증가}\\[4pt]
                        f\text{가 감소}
                        &\Longrightarrow
                        f^{-1}\text{도 감소}
                        \end{aligned}
                    `} />
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
                                함수 <InlineMath math="f(x)=ax+b" />라 할 때,{" "}
                                <InlineMath math="f(x)" />의 역함수{" "}
                                <InlineMath math="f^{-1}(x)" />에 대하여
                            </p>

                            <div className="my-4">
                                <BlockMath math={String.raw`
                f^{-1}(-2)=1,\qquad
                (f\circ f)(1)=10
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                일 때, <InlineMath math="f(-3)" />의 값을 구하시오.
                                (단, <InlineMath math="a,b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    역함수의 함숫값을 원래 함수의 관계로 바꾸면
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(-2)=1
                \quad\Longleftrightarrow\quad
                f(1)=-2
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a+b=-2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편,{" "}
                                    <InlineMath math="(f\circ f)(1)=10" />이고{" "}
                                    <InlineMath math="f(1)=-2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                (f\circ f)(1)
                =f(f(1))
                =f(-2)
                =10
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                -2a+b=10
            `} />

                                <p className="leading-8">
                                    입니다. 두 식
                                </p>

                                <BlockMath math={String.raw`
                a+b=-2,\qquad -2a+b=10
            `} />

                                <p className="leading-8">
                                    을 연립하면
                                </p>

                                <BlockMath math={String.raw`
                a=-4,\qquad b=2
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(-3)
                =(-4)(-3)+2
                =14
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{14}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        역함수의 함숫값이 주어지면 역함수를 직접 구하지 않고
                                    </p>

                                    <BlockMath math={String.raw`
                    f^{-1}(a)=b
                    \quad\Longleftrightarrow\quad
                    f(b)=a
                `} />

                                    <p className="leading-8">
                                        로 바꾸어 원래 함수의 관계를 이용합니다.
                                        이 문제에서는{" "}
                                        <InlineMath math="f^{-1}(-2)=1" />에서{" "}
                                        <InlineMath math="f(1)=-2" />를 먼저 얻는 것이 핵심입니다.
                                    </p>
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
                                두 일차함수{" "}
                                <InlineMath math="f(x)=3x-2" />,{" "}
                                <InlineMath math="g(x)=-4x+5" />에 대하여
                            </p>

                            <div className="my-4">
                                <BlockMath math={String.raw`
                (g\circ f^{-1})(a)=-7
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                을 만족시키는 실수 <InlineMath math="a" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 합성함수를 풀어 쓰면
                                </p>

                                <BlockMath math={String.raw`
                g(f^{-1}(a))=-7
            `} />

                                <p className="leading-8">
                                    입니다. 여기서{" "}
                                    <InlineMath math="f^{-1}(a)=k" />라고 놓으면
                                </p>

                                <BlockMath math={String.raw`
                g(k)=-7
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="g(x)=-4x+5" />를 이용하면
                                </p>

                                <BlockMath math={String.raw`
                -4k+5=-7
            `} />

                                <BlockMath math={String.raw`
                k=3
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(a)=3
            `} />

                                <p className="leading-8">
                                    입니다. 역함수의 관계를 원래 함수로 바꾸면
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(a)=3
                \quad\Longleftrightarrow\quad
                f(3)=a
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=f(3)
                =3\cdot3-2
                =7
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{7}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수 안에 역함수가 들어 있어도
                                        역함수의 식을 직접 구할 필요는 없습니다.
                                        먼저{" "}
                                        <InlineMath math="f^{-1}(a)=k" />로 놓아
                                        바깥 함수 <InlineMath math="g" />를 이용하여{" "}
                                        <InlineMath math="k" />를 구한 뒤,
                                    </p>

                                    <BlockMath math={String.raw`
                    f^{-1}(a)=k
                    \quad\Longleftrightarrow\quad
                    f(k)=a
                `} />

                                    <p className="leading-8">
                                        로 바꾸어 원래 함수 <InlineMath math="f" />를 이용합니다.
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="f(x)=x|x|+k" />{" "}
                                <InlineMath math="\;(k\text{는 상수})" />의 역함수를{" "}
                                <InlineMath math="f^{-1}" />라고 하자.
                            </p>

                            <div className="my-4">
                                <BlockMath math={String.raw`
                f^{-1}(0)=1
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                일 때,{" "}
                                <InlineMath math="f^{-1}(3)+(f\circ f)(1)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    역함수의 함숫값을 원래 함수의 관계로 바꾸면
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(0)=1
                \quad\Longleftrightarrow\quad
                f(1)=0
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                1\cdot|1|+k=0
            `} />

                                <BlockMath math={String.raw`
                k=-1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x|x|-1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="f^{-1}(3)=a" />라고 놓으면
                                </p>

                                <BlockMath math={String.raw`
                f(a)=3
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a|a|-1=3
            `} />

                                <BlockMath math={String.raw`
                a|a|=4
            `} />

                                <p className="leading-8">
                                    입니다.{" "}
                                    <InlineMath math="a<0" />이면{" "}
                                    <InlineMath math="a|a|<0" />이므로 성립할 수 없습니다.{" "}
                                    따라서 <InlineMath math="a>0" />이고,
                                </p>

                                <BlockMath math={String.raw`
                a^2=4
            `} />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath math={String.raw`
                a=2
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(3)=2
            `} />

                                <p className="leading-8">
                                    한편,{" "}
                                    <InlineMath math="f(1)=0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                (f\circ f)(1)
                =f(f(1))
                =f(0)
                =-1
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f^{-1}(3)+(f\circ f)(1)
                =2+(-1)
                =1
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{1}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        역함수의 식을 직접 구하지 않고
                                    </p>

                                    <BlockMath math={String.raw`
                    f^{-1}(a)=b
                    \quad\Longleftrightarrow\quad
                    f(b)=a
                `} />

                                    <p className="leading-8">
                                        를 이용합니다.
                                        먼저 <InlineMath math="f^{-1}(0)=1" />을{" "}
                                        <InlineMath math="f(1)=0" />으로 바꾸어{" "}
                                        <InlineMath math="k" />를 구하고,{" "}
                                        <InlineMath math="f^{-1}(3)" />도 같은 방법으로
                                        원래 함수의 관계로 바꾸어 구합니다.
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
                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="f(x)=ax+b" />에 대하여{" "}
                                <InlineMath math="f(2)=9" />,{" "}
                                <InlineMath math="f^{-1}(3)=-1" />일 때,
                            </p>

                            <div className="my-4">
                                <BlockMath math={String.raw`
                f^{-1}(x)=cx+d
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                이다. <InlineMath math="c-d" />의 값을 구하시오.
                                (단, <InlineMath math="a,b,c,d" />는 상수이고{" "}
                                <InlineMath math="f^{-1}" />는{" "}
                                <InlineMath math="f" />의 역함수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    이 문제에서 구하려는 것은{" "}
                                    <InlineMath math="f(x)" />의 계수{" "}
                                    <InlineMath math="a,b" />가 아니라
                                    역함수 <InlineMath math="f^{-1}(x)" />의 계수{" "}
                                    <InlineMath math="c,d" />입니다.
                                    따라서 주어진 조건을 역함수의 관계로 바꾸어 바로 이용합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(2)=9
                \quad\Longleftrightarrow\quad
                f^{-1}(9)=2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="f^{-1}(x)=cx+d" />이므로
                                </p>

                                <BlockMath math={String.raw`
                9c+d=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                    또 주어진{" "}
                                    <InlineMath math="f^{-1}(3)=-1" />에서
                                </p>

                                <BlockMath math={String.raw`
                3c+d=-1
            `} />

                                <p className="leading-8">
                                    을 얻습니다.
                                    두 식
                                </p>

                                <BlockMath math={String.raw`
                9c+d=2,\qquad
                3c+d=-1
            `} />

                                <p className="leading-8">
                                    을 연립하면
                                </p>

                                <BlockMath math={String.raw`
                6c=3
            `} />

                                <BlockMath math={String.raw`
                c=\frac12
            `} />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath math={String.raw`
                3\cdot\frac12+d=-1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                d=-\frac52
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                c-d
                =
                \frac12-\left(-\frac52\right)
                =3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{3}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        구하려는 대상이 역함수의 계수{" "}
                                        <InlineMath math="c,d" />이므로
                                        원래 함수의 계수{" "}
                                        <InlineMath math="a,b" />를 먼저 구할 필요가 없습니다.
                                        주어진 조건을
                                    </p>

                                    <BlockMath math={String.raw`
                    f(a)=b
                    \quad\Longleftrightarrow\quad
                    f^{-1}(b)=a
                `} />

                                    <p className="leading-8">
                                        로 바꾸어 역함수의 관계식만 세우면
                                        필요한 값만 바로 구할 수 있습니다.
                                    </p>
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
                                두 함수{" "}
                                <InlineMath math="f(x)=3x-1" />,{" "}
                                <InlineMath math="g(x)=2x+4" />에 대하여
                            </p>

                            <div className="my-4 overflow-x-auto">
                                <BlockMath math={String.raw`
                \left(g\circ(f\circ g)^{-1}\circ g\right)(2)
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 역함수는 각각의 함수를 역함수로 바꾸고
                                    순서를 반대로 합니다.
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)^{-1}
                =
                g^{-1}\circ f^{-1}
            `} />

                                <p className="leading-8">
                                    이를 주어진 식에 대입하면
                                </p>

                                <div className="overflow-x-auto">
                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    g\circ(f\circ g)^{-1}\circ g
                    &=
                    g\circ g^{-1}\circ f^{-1}\circ g\\
                    &=
                    f^{-1}\circ g
                    \end{aligned}
                `} />
                                </div>

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \left(g\circ(f\circ g)^{-1}\circ g\right)(2)
                =
                f^{-1}(g(2))
            `} />

                                <p className="leading-8">
                                    먼저 <InlineMath math="g(2)" />를 구하면
                                </p>

                                <BlockMath math={String.raw`
                g(2)=2\cdot2+4=8
            `} />

                                <p className="leading-8">
                                    이므로 구하려는 값은{" "}
                                    <InlineMath math="f^{-1}(8)" />입니다.
                                    역함수의 식을 직접 구하지 않고{" "}
                                    <InlineMath math="f^{-1}(8)=k" />라고 놓으면
                                </p>

                                <BlockMath math={String.raw`
                f(k)=8
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                3k-1=8
            `} />

                                <BlockMath math={String.raw`
                k=3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{3}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 역함수가 있으면 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)^{-1}
                    =
                    g^{-1}\circ f^{-1}
                `} />

                                    <p className="leading-8">
                                        로 바꾸어 봅니다. 그러면{" "}
                                        <InlineMath math="g\circ g^{-1}=I" />가 되어
                                        복잡한 합성함수가 간단해집니다.
                                        또한 마지막에 남은{" "}
                                        <InlineMath math="f^{-1}(8)" />도 역함수를 직접 구하지 않고{" "}
                                        <InlineMath math="f(k)=8" />로 바꾸어 계산할 수 있습니다.
                                    </p>
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
                                두 함수{" "}
                                <InlineMath math="f(x)=ax-2\;(a\ne0)" />,{" "}
                                <InlineMath math="g(x)=3x+1" />에 대하여
                            </p>

                            <div className="my-4">
                                <BlockMath math={String.raw`
                (f\circ g)^{-1}
                =
                f^{-1}\circ g^{-1}
            `} />
                            </div>

                            <p className="leading-8 text-gray-300">
                                를 만족시킬 때, 상수 <InlineMath math="a" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 역함수는 각각의 함수를 역함수로 바꾸고
                                    순서를 반대로 하므로
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)^{-1}
                =
                g^{-1}\circ f^{-1}
            `} />

                                <p className="leading-8">
                                    입니다. 그런데 문제에서
                                </p>

                                <BlockMath math={String.raw`
                (f\circ g)^{-1}
                =
                f^{-1}\circ g^{-1}
            `} />

                                <p className="leading-8">
                                    이라고 하였으므로
                                </p>

                                <BlockMath math={String.raw`
                g^{-1}\circ f^{-1}
                =
                f^{-1}\circ g^{-1}
            `} />

                                <p className="leading-8">
                                    입니다. 양변의 역함수를 생각하면
                                </p>

                                <BlockMath math={String.raw`
                f\circ g=g\circ f
            `} />

                                <p className="leading-8">
                                    를 얻습니다. 이제 두 합성함수를 각각 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (f\circ g)(x)
                &=f(3x+1)\\
                &=a(3x+1)-2\\
                &=3ax+a-2
                \end{aligned}
            `} />

                                <BlockMath math={String.raw`
                \begin{aligned}
                (g\circ f)(x)
                &=g(ax-2)\\
                &=3(ax-2)+1\\
                &=3ax-5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 함수가 같으므로
                                </p>

                                <BlockMath math={String.raw`
                a-2=-5
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=-3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <div className="mt-3">
                                        <BlockMath math={String.raw`
                        \boxed{-3}
                    `} />
                                    </div>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        합성함수의 역함수에서는 함수의 순서가 반대로 바뀝니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    (f\circ g)^{-1}
                    =
                    g^{-1}\circ f^{-1}
                `} />

                                    <p className="leading-8">
                                        이를 문제의 조건과 비교하면 역함수를 직접 구하지 않고
                                        원래 함수의 관계
                                    </p>

                                    <BlockMath math={String.raw`
                    f\circ g=g\circ f
                `} />

                                    <p className="leading-8">
                                        로 바꾸어 해결할 수 있습니다.
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="f" />에 대하여{" "}
                                <InlineMath math="f^1(x)=f(x)" />,{" "}
                                <InlineMath math="f^{n+1}(x)=f(f^n(x))" />
                                (<InlineMath math="n" />은 자연수)로 정의하자.
                                집합 <InlineMath math="X=\{1,3,5\}" />에 대하여
                                함수 <InlineMath math="f:X\to X" />가
                            </p>

                            <BlockMath
                                math={String.raw`
                f(1)=5,\qquad f^3(x)=x
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                를 만족시킨다. 함수 <InlineMath math="f" />의
                                역함수를 <InlineMath math="g" />라 할 때,{" "}
                                <InlineMath math="g^{22}(3)+g^{23}(5)" />의 값을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f^3(x)=x" />이므로
                                    함수 <InlineMath math="f" />를 세 번 적용하면
                                    처음 값으로 돌아옵니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)=5" />이고{" "}
                                    <InlineMath math="X=\{1,3,5\}" />이므로
                                    함수 <InlineMath math="f" />의 대응은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    1\xrightarrow{f}5
                    \xrightarrow{f}3
                    \xrightarrow{f}1
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(1)=5,\qquad
                    f(5)=3,\qquad
                    f(3)=1
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    역함수 <InlineMath math="g" />는
                                    함수 <InlineMath math="f" />의 대응을 반대 방향으로
                                    따라가므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    1\xrightarrow{g}3
                    \xrightarrow{g}5
                    \xrightarrow{g}1
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 함수 <InlineMath math="g" />도
                                    세 번 적용하면 처음 값으로 돌아오므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g^3(x)=x
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="22=3\cdot7+1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g^{22}(3)
                    =
                    g(3)
                    =
                    5
                `}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="23=3\cdot7+2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g^{23}(5)
                    =
                    g^2(5)
                    =
                    3
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g^{22}(3)+g^{23}(5)
                    =
                    5+3
                    =
                    8
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
                                        <InlineMath math="f^3(x)=x" />는
                                        함수 <InlineMath math="f" />를 세 번 적용하면
                                        처음 값으로 돌아온다는 뜻입니다.
                                        역함수는 원래 함수의 대응을 반대 방향으로 따라가므로
                                        함수 <InlineMath math="g" />도 3번마다 같은 값으로
                                        돌아옵니다. 따라서 지수를 3으로 나눈 나머지만
                                        확인하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f^3(x)=x
                        \rightarrow
                        g^3(x)=x
                        \rightarrow
                        \text{지수를 3으로 나눈 나머지}
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
                                실수 전체의 집합에서 정의된 두 함수
                            </p>

                            <BlockMath
                                math={String.raw`
                f(x)=2x+15,\qquad
                g(x)=
                \begin{cases}
                2x & (x<15)\\
                x+15 & (x\ge 15)
                \end{cases}
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                에 대하여{" "}
                                <InlineMath math="f(g^{-1}(20))+f^{-1}(g(20))" />의
                                값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="g^{-1}(20)" />은
                                    함수 <InlineMath math="g" />에 넣었을 때{" "}
                                    <InlineMath math="20" />이 되는 값을 뜻합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x<15" />일 때{" "}
                                    <InlineMath math="g(x)=2x" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2x=20
                `}
                                />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g^{-1}(20)=10
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(g^{-1}(20))
                    =
                    f(10)
                    =
                    2\cdot10+15
                    =
                    35
                `}
                                />

                                <p className="leading-8">
                                    한편 <InlineMath math="20\ge15" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(20)=20+15=35
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f^{-1}(35)" />는
                                    함수 <InlineMath math="f" />에 넣었을 때{" "}
                                    <InlineMath math="35" />가 되는 값을 뜻하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2x+15=35
                `}
                                />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f^{-1}(35)=10
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(g^{-1}(20))+f^{-1}(g(20))
                    =
                    35+10
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
                                        역함수의 값을 구할 때 역함수의 식을 먼저 구할
                                        필요는 없습니다.{" "}
                                        <InlineMath math="g^{-1}(20)" />은{" "}
                                        <InlineMath math="g(x)=20" />이 되는{" "}
                                        <InlineMath math="x" />를 찾고,{" "}
                                        <InlineMath math="f^{-1}(35)" />는{" "}
                                        <InlineMath math="f(x)=35" />가 되는{" "}
                                        <InlineMath math="x" />를 찾으면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f^{-1}(a)=b
                        \iff
                        f(b)=a
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
                                함수 <InlineMath math="f(x)=ax+2" />의 역함수{" "}
                                <InlineMath math="f^{-1}(x)" />에 대하여{" "}
                                <InlineMath math="f=f^{-1}" />일 때, 상수{" "}
                                <InlineMath math="a" />의 값을 구하시오.
                                (단, <InlineMath math="a\ne0" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f=f^{-1}" />이므로
                                    함수 <InlineMath math="f" />를 두 번 적용하면
                                    처음 값으로 돌아옵니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(x))=x
                `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="f(x)=ax+2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(x))
                    =
                    a(ax+2)+2
                `}
                                />

                                <p className="leading-8">
                                    이를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(f(x))
                    =
                    a^2x+2a+2
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a^2x+2a+2=x
                `}
                                />

                                <p className="leading-8">
                                    이 식이 모든 실수 <InlineMath math="x" />에 대하여
                                    성립해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a^2=1,\qquad 2a+2=0
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2a+2=0
                    \quad\Rightarrow\quad
                    a=-1
                `}
                                />

                                <p className="leading-8">
                                    이때 <InlineMath math="a^2=1" />도 만족합니다.
                                </p>

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
                                        <InlineMath math="f=f^{-1}" />는 함수{" "}
                                        <InlineMath math="f" />가 자기 자신의 역함수라는
                                        뜻입니다. 따라서 함수 <InlineMath math="f" />를
                                        한 번 적용한 뒤 다시 <InlineMath math="f" />를
                                        적용하면 처음 값으로 돌아옵니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f=f^{-1}
                        \rightarrow
                        f\circ f=I
                        \rightarrow
                        f(f(x))=x
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="y=f(x)" />의 역함수를{" "}
                                <InlineMath math="y=g(x)" />라 할 때, 함수{" "}
                                <InlineMath math="f(3x+7)" />의 역함수를{" "}
                                <InlineMath math="g(x)" />에 대한 식으로 나타낸 것으로
                                옳은 것은?
                            </p>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                    ① <InlineMath math="y=g\left(\dfrac{x}{3}+7\right)" />
                                </div>

                                <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                    ② <InlineMath math="y=3g(x)+7" />
                                </div>

                                <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                    ③ <InlineMath math="y=\dfrac{1}{3}g(x+7)" />
                                </div>

                                <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                    ④ <InlineMath math="y=\dfrac{1}{3}\{g(x)-7\}" />
                                </div>

                                <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                    ⑤ <InlineMath math="y=\dfrac{1}{3}\left\{g\left(\dfrac{x}{2}\right)+7\right\}" />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f(3x+7)" />에서
                                    입력값 <InlineMath math="x" />는 먼저{" "}
                                    <InlineMath math="3x+7" />이 된 후 함수{" "}
                                    <InlineMath math="f" />에 들어갑니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x
                    \rightarrow
                    3x+7
                    \rightarrow
                    f(3x+7)
                `}
                                />

                                <p className="leading-8">
                                    역함수에서는 이 과정을 마지막 작동부터
                                    반대 순서로 되돌립니다.
                                </p>

                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 역함수인{" "}
                                    <InlineMath math="g" />를 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x
                    \rightarrow
                    g(x)
                `}
                                />

                                <p className="leading-8">
                                    다음으로 <InlineMath math="3x+7" />의 작동을
                                    거꾸로 되돌립니다. 먼저 <InlineMath math="7" />을
                                    빼고, 그다음 <InlineMath math="3" />으로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(x)
                    \rightarrow
                    g(x)-7
                    \rightarrow
                    \frac{g(x)-7}{3}
                `}
                                />

                                <p className="leading-8">
                                    따라서 함수 <InlineMath math="f(3x+7)" />의
                                    역함수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    y=\frac{g(x)-7}{3}
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
                        {\text{④}}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        역함수는 원래 함수의 작동을
                                        <strong className="text-white">
                                            {" "}반대 순서로 하나씩 되돌립니다.
                                        </strong>
                                        {" "}원래 함수에서는{" "}
                                        <InlineMath math="\times3" />,{" "}
                                        <InlineMath math="+7" />,{" "}
                                        <InlineMath math="f" />의 순서로 작동하므로,
                                        역함수에서는 <InlineMath math="g" />,{" "}
                                        <InlineMath math="-7" />,{" "}
                                        <InlineMath math="\div3" />의 순서로 되돌립니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \times3
                        \rightarrow
                        +7
                        \rightarrow
                        f
                        \qquad\Longrightarrow\qquad
                        g
                        \rightarrow
                        -7
                        \rightarrow
                        \div3
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                두 함수 <InlineMath math="f,\ g" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                f(x)=3x+1,\qquad
                f^{-1}(x)=g\left(\frac{1}{6}x+1\right)
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때, 함수 <InlineMath math="g(x)=ax+b" />이다.
                                상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="ab" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="f(x)=3x+1" />의 역함수를
                                    구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f^{-1}(x)=\frac{x-1}{3}
                `}
                                />

                                <p className="leading-8">
                                    입니다. 주어진 식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g\left(\frac{x}{6}+1\right)
                    =
                    \frac{x-1}{3}
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="g" /> 안의 값을{" "}
                                    <InlineMath math="t" />라고 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    t=\frac{x}{6}+1
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x=6t-6
                `}
                                />

                                <p className="leading-8">
                                    입니다. 이를{" "}
                                    <InlineMath math="\displaystyle g\left(\frac{x}{6}+1\right)=\frac{x-1}{3}" />에
                                    대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(t)
                    =
                    \frac{(6t-6)-1}{3}
                    =
                    2t-\frac{7}{3}
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(x)=2x-\frac{7}{3}
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a=2,\qquad b=-\frac{7}{3}
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    ab
                    =
                    2\left(-\frac{7}{3}\right)
                    =
                    -\frac{14}{3}
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{-\frac{14}{3}}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="\displaystyle g\left(\frac{x}{6}+1\right)" />에서
                                        바로 <InlineMath math="g(x)" />를 구하려 하지 말고,
                                        함수 <InlineMath math="g" />에 들어가는 값{" "}
                                        <InlineMath math="\displaystyle \frac{x}{6}+1" />을 하나의
                                        새로운 입력으로 생각합니다. 그 입력을{" "}
                                        <InlineMath math="t" />로 놓고 원래의{" "}
                                        <InlineMath math="x" />를 <InlineMath math="t" />에
                                        대한 식으로 바꾸면 <InlineMath math="g(t)" />의
                                        식을 바로 얻을 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        t=\frac{x}{6}+1
                        \rightarrow
                        x=6t-6
                        \rightarrow
                        g(t)=2t-\frac73
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
                                정의역과 공역이 실수 전체의 집합이고 역함수가 존재하는 함수
                            </p>

                            <BlockMath
                                math={String.raw`
                f(x)=
                \begin{cases}
                -x+1 & (x<2)\\
                -\dfrac14x+a & (x\ge2)
                \end{cases}
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                의 역함수를 <InlineMath math="g" />라고 하자.{" "}
                                <InlineMath math="g(g(6))=b" />일 때, 실수{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="ab" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />의 정의역과 공역이
                                    실수 전체의 집합이고 역함수가 존재하므로,
                                    서로 다른 두 구간의 함숫값이 겹치거나 빠지는 값이
                                    없어야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x<2" />에서{" "}
                                    <InlineMath math="f(x)=-x+1" />이므로 함숫값의 범위는
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x)>-1
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x\ge2" />에서{" "}
                                    <InlineMath math="f(x)=-\dfrac14x+a" />이므로
                                    가장 큰 함숫값은 <InlineMath math="x=2" />일 때의
                                    값입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(2)
                    =
                    -\frac14\cdot2+a
                    =
                    a-\frac12
                `}
                                />

                                <p className="leading-8">
                                    두 부분의 함숫값이 겹치거나 빠지지 않고
                                    실수 전체가 되어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a-\frac12=-1
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a=-\frac12
                `}
                                />

                                <p className="leading-8">
                                    이제 역함수의 값을 구합니다.{" "}
                                    <InlineMath math="g(6)" />은{" "}
                                    <InlineMath math="f(x)=6" />이 되게 하는{" "}
                                    <InlineMath math="x" />의 값입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="6>-1" />이므로{" "}
                                    <InlineMath math="f(x)=-x+1" />인 부분에서 찾으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -x+1=6
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g(6)=-5
                `}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="g(g(6))=g(-5)" />입니다.
                                    <InlineMath math="g(-5)" />는{" "}
                                    <InlineMath math="f(x)=-5" />가 되게 하는{" "}
                                    <InlineMath math="x" />의 값입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="-5<-1" />이므로{" "}
                                    <InlineMath math="f(x)=-\dfrac14x-\dfrac12" />인
                                    부분에서 찾으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -\frac14x-\frac12=-5
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x=18
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    b=g(g(6))=18
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    ab
                    =
                    \left(-\frac12\right)\cdot18
                    =
                    -9
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
                                        정의역과 공역이 실수 전체이고 역함수가 존재하려면
                                        두 부분의 치역이 겹치지 않으면서 실수 전체를
                                        만들어야 합니다. 먼저 이 조건으로{" "}
                                        <InlineMath math="a" />를 구합니다. 그다음 역함수의
                                        값을 직접 구하지 않고,{" "}
                                        <InlineMath math="g(k)" />를{" "}
                                        <InlineMath math="f(x)=k" />가 되는{" "}
                                        <InlineMath math="x" />로 해석하여 차례로 찾습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \text{역함수 존재}
                        \rightarrow
                        a=-\frac12
                        \rightarrow
                        f(x)=6
                        \rightarrow
                        g(6)=-5
                        \rightarrow
                        f(x)=-5
                        \rightarrow
                        g(-5)=18
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
                                두 함수{" "}
                                <InlineMath math="f(x)=ax+b" />,{" "}
                                <InlineMath math="g(x)=x+c" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                (f\circ g)^{-1}(2x+1)=x,
                \qquad
                f^{-1}(3)=-1
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때, 상수 <InlineMath math="a,\ b,\ c" />에 대하여{" "}
                                <InlineMath math="a+b+c" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)^{-1}(2x+1)=x
                `}
                                />

                                <p className="leading-8">
                                    를 원래 함수의 관계로 바꾸어 읽으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)(x)=2x+1
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)(x)
                    =
                    f(g(x))
                `}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="g(x)=x+c" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(g(x))
                    =
                    f(x+c)
                `}
                                />

                                <p className="leading-8">
                                    입니다. <InlineMath math="f(x)=ax+b" />를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(x+c)
                    =
                    a(x+c)+b
                    =
                    ax+ac+b
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    ax+ac+b=2x+1
                `}
                                />

                                <p className="leading-8">
                                    이 식이 모든 실수 <InlineMath math="x" />에 대하여
                                    성립하므로 계수를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a=2,\qquad ac+b=1
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f^{-1}(3)=-1
                `}
                                />

                                <p className="leading-8">
                                    을 원래 함수의 관계로 바꾸어 읽으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(-1)=3
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -a+b=3
                `}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="a=2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -2+b=3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    b=5
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="ac+b=1" />에{" "}
                                    <InlineMath math="a=2,\ b=5" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2c+5=1
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    c=-2
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a+b+c
                    =
                    2+5-2
                    =
                    5
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{5}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        역함수의 식을 직접 구하지 않고 역함수의 의미를
                                        이용하여 원래 함수의 관계로 바꾸어 읽습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        (f\circ g)^{-1}(2x+1)=x
                        \iff
                        (f\circ g)(x)=2x+1
                    `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                        f^{-1}(3)=-1
                        \iff
                        f(-1)=3
                    `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        복잡해 보이는 역함수 식도 원래 함수의 관계로
                                        바꾸면 계수 비교와 일차방정식으로 간단하게
                                        해결할 수 있습니다.
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
                                일대일대응인 세 함수 <InlineMath math="f,\ g,\ h" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
                (f\circ g)(x)=2x-3,\qquad h(x)=x+1
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때,{" "}
                                <InlineMath math="(h^{-1}\circ g^{-1}\circ f^{-1})(1)" />의
                                값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    합성함수의 역함수는 합성의 순서를 반대로 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)^{-1}
                    =
                    g^{-1}\circ f^{-1}
                `}
                                />

                                <p className="leading-8">
                                    따라서 주어진 식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (h^{-1}\circ g^{-1}\circ f^{-1})(1)
                    =
                    \left(h^{-1}\circ(f\circ g)^{-1}\right)(1)
                `}
                                />

                                <p className="leading-8">
                                    로 볼 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="(f\circ g)(x)=2x-3" />에서{" "}
                                    <InlineMath math="(f\circ g)^{-1}(1)" />을 구합니다.
                                    역함수의 식을 직접 구하지 않고
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)(2)=1
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (f\circ g)^{-1}(1)=2
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 <InlineMath math="h(x)=x+1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    h(1)=2
                `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    h^{-1}(2)=1
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    (h^{-1}\circ g^{-1}\circ f^{-1})(1)
                    =
                    h^{-1}(2)
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
                                        여러 함수가 합성되어 있을 때 역함수는 지나온
                                        순서를 반대로 되돌아갑니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f\circ g
                        \quad\longleftrightarrow\quad
                        g^{-1}\circ f^{-1}
                    `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 <InlineMath math="g^{-1}" />와{" "}
                                        <InlineMath math="f^{-1}" />를 각각 구할 필요 없이{" "}
                                        <InlineMath math="(f\circ g)^{-1}" />로 한꺼번에
                                        읽으면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        1
                        \xrightarrow{(f\circ g)^{-1}}
                        2
                        \xrightarrow{h^{-1}}
                        1
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
                                함수 <InlineMath math="f(x)" />가
                            </p>

                            <BlockMath
                                math={String.raw`
                f\left(\frac{x-1}{x+1}\right)=2x
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                를 만족할 때, <InlineMath math="f(x)" />의 역함수{" "}
                                <InlineMath math="f^{-1}(x)" />를 구하여라.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    역함수에서는 함수의 입력과 출력이 서로 바뀝니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(a)=b
                    \quad\Longleftrightarrow\quad
                    f^{-1}(b)=a
                `}
                                />

                                <p className="leading-8">
                                    주어진 식
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f\left(\frac{x-1}{x+1}\right)=2x
                `}
                                />

                                <p className="leading-8">
                                    에서 입력은{" "}
                                    <InlineMath math="\dfrac{x-1}{x+1}" />이고
                                    출력은 <InlineMath math="2x" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f^{-1}(2x)=\frac{x-1}{x+1}
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="2x=t" />라고 하면{" "}
                                    <InlineMath math="x=\dfrac{t}{2}" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    f^{-1}(t)
                    &=
                    \frac{\frac{t}{2}-1}{\frac{t}{2}+1}\\[6pt]
                    &=
                    \frac{t-2}{t+2}
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="t" />를 다시{" "}
                                    <InlineMath math="x" />로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f^{-1}(x)=\frac{x-2}{x+2}
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{
                            f^{-1}(x)=\frac{x-2}{x+2}
                        }
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        역함수에서는 함수의 입력과 출력이 서로 바뀝니다.
                                        따라서 다음 관계를 바로 읽을 수 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(A)=B
                        \quad\Longleftrightarrow\quad
                        f^{-1}(B)=A
                    `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이 문제에서는 <InlineMath math="f(x)" />를 먼저
                                        구할 필요 없이, 주어진 식의 입력과 출력을 서로
                                        바꾸어 역함수를 바로 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f\left(\frac{x-1}{x+1}\right)=2x
                        \rightarrow
                        f^{-1}(2x)=\frac{x-1}{x+1}
                    `}
                                    />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 16 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 16
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                함수 <InlineMath math="f(x)" />의 역함수를{" "}
                                <InlineMath math="g(x)" />라고 하자.
                            </p>

                            <BlockMath
                                math={String.raw`
                f\left(
                    2g(x)+\frac{x}{x-1}
                \right)=x
            `}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때, <InlineMath math="f(3)" />의 값을 구하여라.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="g" />는 <InlineMath math="f" />의
                                    역함수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(A)=x
                    \quad\Longleftrightarrow\quad
                    A=g(x)
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 주어진 식
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f\left(
                        2g(x)+\frac{x}{x-1}
                    \right)=x
                `}
                                />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2g(x)+\frac{x}{x-1}=g(x)
                `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    g(x)
                    &=-\frac{x}{x-1}\\[4pt]
                    &=\frac{x}{1-x}
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(3)" />의 값을 구하려면 역함수의
                                    관계에 의해 <InlineMath math="g(x)=3" />이 되는{" "}
                                    <InlineMath math="x" />를 구하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \frac{x}{1-x}=3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    x&=3(1-x)\\
                    4x&=3\\
                    x&=\frac34
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    즉
                                </p>

                                <BlockMath
                                    math={String.raw`
                    g\left(\frac34\right)=3
                `}
                                />

                                <p className="leading-8">
                                    이므로 역함수의 관계에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
                    f(3)=\frac34
                `}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        \boxed{\frac34}
                    `}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="g=f^{-1}" />이므로 다음 관계를
                                        바로 읽을 수 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        f(A)=x
                        \quad\Longleftrightarrow\quad
                        A=g(x)
                `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        먼저 이 관계를 이용하여 <InlineMath math="g(x)" />를
                                        구합니다. 그다음 <InlineMath math="f(3)" />을
                                        구하는 것은 역으로 <InlineMath math="g(x)=3" />이
                                        되는 <InlineMath math="x" />를 찾는 것과 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                        g(x)=3
                        \quad\Longleftrightarrow\quad
                        f(3)=x
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

                        <div className="space-y-4 leading-8 text-gray-300">
                            <p>
                                ① 역함수의 함숫값은
                                <InlineMath math="f^{-1}(a)=k" />를
                                <InlineMath math="f(k)=a" />로 바꾸어 구합니다.
                            </p>

                            <p>
                                ② 두 함수를 합성하여 항등함수가 되면
                                두 함수는 서로 역함수입니다.
                            </p>

                            <BlockMath math={String.raw`
                    f(g(x))=x
                    \quad\Longleftrightarrow\quad
                    f^{-1}=g
                `} />

                            <p>
                                ③ 복잡한 합성함수에서는 필요한 부분을 하나의 함수로 묶어
                                <InlineMath math="F(G(x))=x" />의 형태를 찾습니다.
                            </p>

                            <p>
                                ④ 함수식을 여러 계산의 합성으로 보면
                                역함수는 각각의 계산을 역연산으로 바꾸고
                                계산 순서를 반대로 하여 구할 수 있습니다.
                            </p>

                            <BlockMath math={String.raw`
                    (f\circ g\circ h)^{-1}
                    =
                    h^{-1}\circ g^{-1}\circ f^{-1}
                `} />
                        </div>
                    </div>

                </div>
            </section>

            {/* 3.14 역함수의 그래프 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.14 역함수의 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    역함수는 원래 함수의 입력과 출력을 서로 바꾼 함수입니다.
                    이를 그래프에서 어떻게 나타내는지 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">
                    {/* 1. 함수와 역함수의 그래프 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 함수와 역함수의 그래프
                        </h3>

                        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    함수 <InlineMath math="y=f(x)" />의 그래프 위에
                                    점 <InlineMath math="(a,b)" />가 있으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f(a)=b
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 역함수에서는 입력과 출력이 서로 바뀌므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f^{-1}(b)=a
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 함수의 그래프 위의 점{" "}
                                    <InlineMath math="(a,b)" />는 역함수의
                                    그래프에서 점 <InlineMath math="(b,a)" />에
                                    대응합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            (a,b)
                            \longleftrightarrow
                            (b,a)
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 점 <InlineMath math="(a,b)" />와{" "}
                                    <InlineMath math="(b,a)" />는 직선{" "}
                                    <InlineMath math="y=x" />에 대하여 서로
                                    대칭입니다.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_01.png"
                                    alt="함수와 역함수의 그래프가 y=x에 대하여 대칭인 모습"
                                    className="mx-auto w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 2. y=x에 대하여 대칭인 그래프 그리기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="y=x" />를 이용하여 역함수의 그래프 그리기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="y=f(x)" />의 그래프가 주어지면
                            직선 <InlineMath math="y=x" />를 먼저 그립니다.
                            그다음 원래 함수의 그래프를 직선{" "}
                            <InlineMath math="y=x" />에 대하여 대칭이동하면
                            역함수 <InlineMath math="y=f^{-1}(x)" />의 그래프를
                            그릴 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    y=f(x)
                    \xrightarrow{\ y=x\text{에 대하여 대칭}\ }
                    y=f^{-1}(x)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            원래 그래프의 점 <InlineMath math="(a,b)" />를
                            대칭이동하면 역함수의 그래프에서는{" "}
                            <InlineMath math="(b,a)" />가 됩니다.
                        </p>
                    </div>

                    {/* 3. x축과 y축을 바꾸어 읽기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. <InlineMath math="x" />축과{" "}
                            <InlineMath math="y" />축을 바꾸어 읽기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            역함수의 그래프를 새로 그리지 않고, 원래 함수의
                            그래프에서 <InlineMath math="x" />축과{" "}
                            <InlineMath math="y" />축의 역할을 서로 바꾸어
                            읽을 수도 있습니다.
                        </p>

                        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    원래 함수 <InlineMath math="y=f(x)" />의
                                    그래프에서 점 <InlineMath math="(a,b)" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
                            x=a,\qquad y=b
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 읽습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    즉 <InlineMath math="x" />축에서{" "}
                                    <InlineMath math="a" />를 찾아 그래프까지 간 뒤,
                                    <InlineMath math="y" />축에서{" "}
                                    <InlineMath math="b" />를 읽으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f(a)=b
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 알 수 있습니다.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_02.png"
                                    alt="함수 y=f(x)의 그래프에서 점 (a,b)를 읽는 모습"
                                    className="mx-auto w-full"
                                />
                            </div>
                        </div>

                        <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    이번에는 그래프를 움직이지 않고 기존의{" "}
                                    <InlineMath math="y" />축을 새로운{" "}
                                    <InlineMath math="x" />축으로, 기존의{" "}
                                    <InlineMath math="x" />축을 새로운{" "}
                                    <InlineMath math="y" />축으로 바꾸어 읽습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    그러면 원래의 점 <InlineMath math="(a,b)" />는
                                    새로운 좌표축에서는{" "}
                                    <InlineMath math="(b,a)" />로 읽힙니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            f(a)=b
                            \iff
                            f^{-1}(b)=a
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 그래프 자체를 새로 그리지 않아도 같은
                                    그래프를 역함수{" "}
                                    <InlineMath math="y=f^{-1}(x)" />의 그래프로
                                    사용할 수 있습니다.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_03.png"
                                    alt="x축과 y축을 바꾸어 원래 그래프를 역함수의 그래프로 읽는 모습"
                                    className="mx-auto w-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* 4. y=x와의 교점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 함수와 직선 <InlineMath math="y=x" />의 교점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="y=f(x)" />와 직선{" "}
                            <InlineMath math="y=x" />가 점{" "}
                            <InlineMath math="(a,a)" />에서 만나면
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(a)=a
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 역함수의 의미를 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(a)=a
                    \iff
                    f^{-1}(a)=a
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 점 <InlineMath math="(a,a)" />는
                            역함수 <InlineMath math="y=f^{-1}(x)" />의
                            그래프 위에도 있습니다.
                        </p>
                    </div>

                    {/* 5. 증가하는 함수와 역함수의 교점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 증가하는 함수와 역함수의 교점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f" />가 증가하는 함수일 때,
                            함수 <InlineMath math="y=f(x)" />와 역함수{" "}
                            <InlineMath math="y=f^{-1}(x)" />의 교점은
                            직선 <InlineMath math="y=x" /> 위에 있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 증가하는 함수에서는 다음 세 그래프의 교점을
                            같은 방법으로 구할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    &y=f(x)\text{와 }y=f^{-1}(x)\\
                    &y=f(x)\text{와 }y=x\\
                    &y=f^{-1}(x)\text{와 }y=x
                    \end{aligned}
                `}
                        />
                    </div>
                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A=\{1,2,3,4\}" />에 대하여
                                    집합 <InlineMath math="A" />에서{" "}
                                    <InlineMath math="A" />로의 두 함수{" "}
                                    <InlineMath math="y=f(x)" />,{" "}
                                    <InlineMath math="y=g(x)" />의 그래프가 각각
                                    그림과 같을 때,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (g\circ f)(2)+(f\circ g)^{-1}(1)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 값을 구하시오.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_1.png"
                                    alt="함수 f와 g의 그래프"
                                    className="mx-auto w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 함수 <InlineMath math="f" />의 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=4
                `}
                            />

                            <p className="leading-8">
                                이고, 함수 <InlineMath math="g" />의 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=3
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)(2)
                    =
                    g(f(2))
                    =
                    g(4)
                    =
                    3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                다음으로 합성함수의 역함수는 함수의 순서를
                                반대로 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)^{-1}
                    =
                    g^{-1}\circ f^{-1}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)^{-1}(1)
                    =
                    g^{-1}(f^{-1}(1))
                `}
                            />

                            <p className="leading-8">
                                을 구하면 됩니다.
                            </p>

                            <p className="leading-8">
                                역함수의 값은 그래프에서{" "}
                                <InlineMath math="x" />축과{" "}
                                <InlineMath math="y" />축을 바꾸어 읽으면 됩니다.
                                함수 <InlineMath math="f" />의 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(3)=1
                `}
                            />

                            <p className="leading-8">
                                이므로 거꾸로 읽으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(1)=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 다시 함수 <InlineMath math="g" />의
                                그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=3
                `}
                            />

                            <p className="leading-8">
                                이므로 거꾸로 읽으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g^{-1}(3)=4
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)^{-1}(1)
                    =
                    g^{-1}(3)
                    =
                    4
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)(2)+(f\circ g)^{-1}(1)
                    =
                    3+4
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
                                    그래프에서 역함수의 값을 찾을 때는 역함수의
                                    그래프를 새로 그릴 필요가 없습니다.{" "}
                                    <InlineMath math="x" />축과{" "}
                                    <InlineMath math="y" />축의 역할을 바꾸어
                                    원래 그래프를 거꾸로 읽으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(a)=b
                        \iff
                        f^{-1}(b)=a
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
                        <div className="grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A=\{1,2,3,4,5\}" />에 대하여
                                    집합 <InlineMath math="A" />에서 집합{" "}
                                    <InlineMath math="A" />로의 두 함수{" "}
                                    <InlineMath math="f(x),\ g(x)" />가 있다.
                                    두 함수 <InlineMath math="y=f(x)" />,{" "}
                                    <InlineMath math="y=(f\circ g)(x)" />의 그래프가
                                    그림과 같을 때,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g(4)+(g\circ f)^{-1}(4)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 값을 구하시오.
                                </p>
                            </div>

                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_2.png"
                                    alt="함수 f와 합성함수 f와 g의 그래프"
                                    className="mx-auto w-full"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 <InlineMath math="g(4)" />를 구합니다.
                                오른쪽 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(4)=3
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(4))=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 왼쪽 그래프에서{" "}
                                <InlineMath math="f(3)=3" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)=3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                다음으로{" "}
                                <InlineMath math="(g\circ f)^{-1}(4)" />를 구합니다.
                                역함수의 값을 구하는 것은 원래 함수에서
                                함숫값이 <InlineMath math="4" />가 되는 입력값을
                                찾는 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)^{-1}(4)=k
                    \iff
                    (g\circ f)(k)=4
                `}
                            />

                            <p className="leading-8">
                                즉
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(f(k))=4
                `}
                            />

                            <p className="leading-8">
                                가 되는 <InlineMath math="k" />를 찾으면 됩니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="g(f(k))=4" />에서 양변에{" "}
                                <InlineMath math="f" />를 적용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(f(k)))=f(4)
                `}
                            />

                            <p className="leading-8">
                                왼쪽 그래프에서 <InlineMath math="f(4)=5" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(g(f(k)))=5
                `}
                            />

                            <p className="leading-8">
                                입니다. 그런데{" "}
                                <InlineMath math="f(g(x))=(f\circ g)(x)" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(f(k))=5
                `}
                            />

                            <p className="leading-8">
                                오른쪽 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g)(5)=5
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(k)=5
                `}
                            />

                            <p className="leading-8">
                                입니다. 다시 왼쪽 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(4)=5
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    k=4
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (g\circ f)^{-1}(4)=4
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(4)+(g\circ f)^{-1}(4)
                    =
                    3+4
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
                                    그래프가 주어졌다고 해서 모든 함수의 식이나
                                    대응을 구할 필요는 없습니다. 필요한 함숫값을
                                    그래프에서 차례로 따라가고, 역함수의 값은
                                    대응을 반대 방향으로 읽습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        h^{-1}(a)=b
                        \iff
                        h(b)=a
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    특히 합성함수에서는 안쪽 함수부터 차례로
                                    따라가고, 역함수가 나오면 그 대응을 거꾸로
                                    추적합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 <InlineMath math="x\ge0" />에서
                                    정의된 두 함수{" "}
                                    <InlineMath math="y=f(x)" />,{" "}
                                    <InlineMath math="y=g(x)" />의 그래프와
                                    직선 <InlineMath math="y=x" />를 나타낸 것이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g^{-1}(f(c))
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 값을 구하시오.
                                    (단, <InlineMath math="g^{-1}" />는{" "}
                                    <InlineMath math="g" />의 역함수이다.)
                                </p>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ① <InlineMath math="a" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ② <InlineMath math="b" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ③ <InlineMath math="c" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ④ <InlineMath math="d" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ⑤ <InlineMath math="e" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_3.png"
                                    alt="함수 f, g의 그래프와 직선 y=x"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 함수 <InlineMath math="f" />의 그래프에서{" "}
                                <InlineMath math="x=c" />일 때의 함숫값{" "}
                                <InlineMath math="f(c)" />를 찾습니다.
                            </p>

                            <p className="leading-8">
                                이제 <InlineMath math="g^{-1}(f(c))" />를 구해야 합니다.
                                역함수의 값을 구할 때는 함수{" "}
                                <InlineMath math="g" />의 그래프를 거꾸로 읽으면 됩니다.
                            </p>

                            <p className="leading-8">
                                즉 <InlineMath math="y=f(c)" />가 되도록 하는
                                함수 <InlineMath math="g" />의 입력값을 찾습니다.
                                그림에서 <InlineMath math="f(c)" />와 같은 높이에서
                                함수 <InlineMath math="g" />의 그래프를 보면
                                그 점의 <InlineMath math="x" />좌표는{" "}
                                <InlineMath math="a" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(a)=f(c)
                `}
                            />

                            <p className="leading-8">
                                따라서 이 관계를 역함수로 읽으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    g^{-1}(f(c))=a
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{① }a}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="g^{-1}(k)" />는 함수{" "}
                                    <InlineMath math="g" />의 그래프에서 함숫값이{" "}
                                    <InlineMath math="k" />가 되게 하는 입력값을
                                    찾는 것입니다. 따라서 역함수의 그래프를
                                    따로 그리지 않고, 원래 그래프에서{" "}
                                    <InlineMath math="y" />값을 먼저 찾은 뒤{" "}
                                    <InlineMath math="x" />값을 거꾸로 읽으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        g(a)=f(c)
                        \iff
                        g^{-1}(f(c))=a
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
                        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    두 함수 <InlineMath math="y=f(x)" />,{" "}
                                    <InlineMath math="y=g(x)" />의 그래프와 직선{" "}
                                    <InlineMath math="y=x" />가 그림과 같을 때,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (f\circ g\circ f^{-1})(a)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 값을 구하시오.
                                    (단, 모든 점선은 <InlineMath math="x" />축 또는{" "}
                                    <InlineMath math="y" />축에 평행하다.)
                                </p>

                                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ① <InlineMath math="a" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ② <InlineMath math="b" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ③ <InlineMath math="c" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ④ <InlineMath math="d" />
                                    </div>

                                    <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                        ⑤ <InlineMath math="e" />
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_4.png"
                                    alt="두 함수 f, g의 그래프와 직선 y=x"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                합성함수는 안쪽 함수부터 차례로 값을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    a
                    \xrightarrow{\,f^{-1}\,}
                    \ ?
                    \xrightarrow{\,g\,}
                    \ ?
                    \xrightarrow{\,f\,}
                    \ ?
                `}
                            />

                            <p className="leading-8">
                                먼저 <InlineMath math="f^{-1}(a)" />를 구합니다.
                                역함수의 값은 함수 <InlineMath math="f" />의 그래프를
                                거꾸로 읽으면 됩니다.
                            </p>

                            <p className="leading-8">
                                그림에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(b)=a
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f^{-1}(a)=b
                `}
                            />

                            <p className="leading-8">
                                입니다. 다음으로 함수 <InlineMath math="g" />의
                                그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    g(b)=d
                `}
                            />

                            <p className="leading-8">
                                이고, 다시 함수 <InlineMath math="f" />의 그래프에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(d)=c
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a
                    \xrightarrow{\,f^{-1}\,}
                    b
                    \xrightarrow{\,g\,}
                    d
                    \xrightarrow{\,f\,}
                    c
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (f\circ g\circ f^{-1})(a)=c
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③ }c}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    합성함수는 가장 안쪽 함수부터 차례로 그래프를
                                    따라갑니다. 역함수 <InlineMath math="f^{-1}" />가
                                    나오면 새로운 그래프를 그리지 않고 함수{" "}
                                    <InlineMath math="f" />의 그래프에서 대응을
                                    거꾸로 읽으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(b)=a
                        \Rightarrow
                        f^{-1}(a)=b
                        \rightarrow
                        g(b)=d
                        \rightarrow
                        f(d)=c
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
                            함수{" "}
                            <InlineMath math="f(x)=\dfrac13x^2+3\ (x\ge0)" />의
                            그래프와 두 직선 <InlineMath math="x=3" />,{" "}
                            <InlineMath math="x=6" /> 및 <InlineMath math="x" />축으로
                            둘러싸인 도형의 넓이를 <InlineMath math="A" />라 할 때,
                            역함수 <InlineMath math="y=f^{-1}(x)" />의 그래프와
                            두 직선 <InlineMath math="x=6" />,{" "}
                            <InlineMath math="x=15" /> 및 <InlineMath math="x" />축으로
                            둘러싸인 도형의 넓이를 <InlineMath math="A" />에 대하여
                            나타낸 것으로 옳은 것은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ① <InlineMath math="80-A" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ② <InlineMath math="72-A" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ③ <InlineMath math="64-A" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ④ <InlineMath math="56-A" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ⑤ <InlineMath math="48-A" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 함수 <InlineMath math="f" />의 값을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(3)
                    =
                    \frac13\cdot3^2+3
                    =
                    6
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    f(6)
                    =
                    \frac13\cdot6^2+3
                    =
                    15
                `}
                            />

                            <p className="leading-8">
                                이므로 그래프는 두 점{" "}
                                <InlineMath math="(3,6)" />,{" "}
                                <InlineMath math="(6,15)" />를 지납니다.
                            </p>

                            <p className="leading-8">
                                역함수의 그래프를 따로 그리는 대신{" "}
                                <InlineMath math="x" />축과{" "}
                                <InlineMath math="y" />축의 역할을 서로 바꾸어
                                원래 함수의 그래프를 역함수의 그래프로 읽습니다.
                            </p>

                            <div className="mx-auto w-fit rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_5.png"
                                    alt="x축과 y축을 바꾸어 함수와 역함수의 넓이를 하나의 그래프로 나타낸 그림"
                                    className="w-full max-w-[230px] rounded-lg"
                                />
                            </div>

                            <p className="leading-8">
                                그림에서 파란색 축을 기준으로 보면 원래 함수{" "}
                                <InlineMath math="y=f(x)" />의 그래프이고,
                                빨간색으로 표시된 축의 역할을 바꾸어 읽으면 같은
                                곡선을 역함수 <InlineMath math="y=f^{-1}(x)" />의
                                그래프로 볼 수 있습니다.
                            </p>

                            <p className="leading-8">
                                원래 함수가 만드는 넓이 <InlineMath math="A" />와
                                역함수가 만드는 넓이를 합하면,
                                가로 <InlineMath math="6" />, 세로{" "}
                                <InlineMath math="15" />인 큰 직사각형에서
                                가로 <InlineMath math="3" />, 세로{" "}
                                <InlineMath math="6" />인 작은 직사각형을 뺀
                                넓이가 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    6\cdot15-3\cdot6
                    =
                    90-18
                    =
                    72
                `}
                            />

                            <p className="leading-8">
                                따라서 구하려는 넓이를 <InlineMath math="B" />라고 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    A+B=72
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    B=72-A
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{② }72-A}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    역함수의 넓이를 구할 때 역함수의 식을 구하거나
                                    역함수의 그래프를 새로 그릴 필요가 없습니다.
                                    원래 그래프에서 <InlineMath math="x" />축과{" "}
                                    <InlineMath math="y" />축의 역할을 바꾸어 읽으면
                                    함수와 역함수가 만드는 두 영역을 하나의 그림에서
                                    비교할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+\text{역함수의 영역}
                        =
                        6\cdot15-3\cdot6
                        =
                        72
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
                            함수{" "}
                            <InlineMath math="f(x)=\dfrac14(x^2+3)\ (x\ge0)" />의
                            역함수를 <InlineMath math="g(x)" />라고 할 때,
                            두 함수 <InlineMath math="y=f(x)" />와{" "}
                            <InlineMath math="y=g(x)" />의 그래프의 두 교점 사이의
                            거리를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />는{" "}
                                <InlineMath math="x\ge0" />에서 증가하는 함수입니다.
                                따라서 함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                그러므로 역함수 <InlineMath math="g(x)" />를
                                직접 구하지 않고
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                를 풀어 교점을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac14(x^2+3)=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x^2-4x+3=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (x-1)(x-3)=0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=1,\ 3
                `}
                            />

                            <p className="leading-8">
                                이고, 두 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (1,1),\qquad(3,3)
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 두 교점 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt{(3-1)^2+(3-1)^2}
                    =
                    \sqrt{8}
                    =
                    2\sqrt2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2\sqrt2}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    증가하는 함수와 그 역함수의 교점은 직선{" "}
                                    <InlineMath math="y=x" /> 위에 있습니다.
                                    따라서 역함수의 식을 구하지 않고{" "}
                                    <InlineMath math="f(x)=x" />를 풀어 교점을
                                    바로 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(x)=f^{-1}(x)
                        \iff
                        f(x)=x
                        \qquad
                        (\text{\(f\)가 증가함수일 때})
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
                            함수{" "}
                            <InlineMath math="f(x)=\dfrac12(x-1)^2+1\ (x\ge1)" />에
                            대하여 함수 <InlineMath math="y=f(x)" />의 그래프와
                            그 역함수 <InlineMath math="y=f^{-1}(x)" />의 그래프는
                            두 점에서 만난다. 이 두 점 사이의 거리를{" "}
                            <InlineMath math="l" />이라 할 때,{" "}
                            <InlineMath math="l^2" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />는{" "}
                                <InlineMath math="x\ge1" />에서 증가하는 함수이므로
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                따라서 역함수의 식을 구하지 않고
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                를 풀어 두 교점을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12(x-1)^2+1=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (x-1)^2=2(x-1)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (x-1)(x-3)=0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=1,\ 3
                `}
                            />

                            <p className="leading-8">
                                이므로 두 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (1,1),\qquad(3,3)
                `}
                            />

                            <p className="leading-8">
                                입니다. 두 점 사이의 거리의 제곱은
                            </p>

                            <BlockMath
                                math={String.raw`
                    l^2
                    =(3-1)^2+(3-1)^2
                    =4+4
                    =8
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
                                    증가하는 함수와 그 역함수의 교점은 직선{" "}
                                    <InlineMath math="y=x" /> 위에 있습니다.
                                    따라서 역함수를 직접 구하지 않고{" "}
                                    <InlineMath math="f(x)=x" />를 풀어 교점을
                                    구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(x)=f^{-1}(x)
                        \iff
                        f(x)=x
                        \qquad
                        (\text{\(f\)가 증가함수일 때})
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
                            이차함수{" "}
                            <InlineMath math="f(x)=\dfrac{x^2}{2}+a\ (x\ge0)" />의
                            역함수를 <InlineMath math="g(x)" />라 하자.
                            두 함수 <InlineMath math="y=f(x)" />와{" "}
                            <InlineMath math="y=g(x)" />의 그래프가 서로 다른 두 점에서
                            만날 때, 실수 <InlineMath math="a" />의 값의 범위를 구하시오.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ① <InlineMath math="0\le a\le1" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ② <InlineMath math="0<a<1" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ③ <InlineMath math="a<1" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ④ <InlineMath math="0\le a<\dfrac12" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-gray-300">
                                ⑤ <InlineMath math="a\le\dfrac12" />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />는{" "}
                                <InlineMath math="x\ge0" />에서 증가하는 함수이므로
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 그래프가 서로 다른 두 점에서 만나려면
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                가 정의역 <InlineMath math="x\ge0" />에서 서로 다른
                                두 해를 가져야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{x^2}{2}+a=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x^2-2x+2a=0
                `}
                            />

                            <p className="leading-8">
                                먼저 서로 다른 두 실근을 가져야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{D}{4}
                    =
                    1-2a
                    >
                    0
                `}
                            />

                            <p className="leading-8">
                                에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a<\frac12
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                또한 두 교점은 함수 <InlineMath math="f" />의 정의역{" "}
                                <InlineMath math="x\ge0" />에 있어야 합니다.
                                방정식의 두 근은
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=1\pm\sqrt{1-2a}
                `}
                            />

                            <p className="leading-8">
                                이므로 작은 근이 <InlineMath math="0" /> 이상이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    1-\sqrt{1-2a}\ge0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \sqrt{1-2a}\le1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a\ge0
                `}
                            />

                            <p className="leading-8">
                                두 조건을 모두 만족시키면
                            </p>

                            <BlockMath
                                math={String.raw`
                    0\le a<\frac12
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{④ }0\le a<\frac12}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    증가하는 함수와 역함수의 교점을 구할 때는{" "}
                                    <InlineMath math="f(x)=x" />를 이용합니다.
                                    서로 다른 두 교점이 존재하려면 방정식이 서로 다른
                                    두 실근을 가져야 할 뿐만 아니라, 두 근이 모두
                                    함수의 정의역 <InlineMath math="x\ge0" />에
                                    포함되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &\text{서로 다른 두 실근}
                        &&\Rightarrow\quad a<\frac12\\
                        &\text{두 근이 모두 }x\ge0
                        &&\Rightarrow\quad a\ge0
                        \end{aligned}
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
                            함수
                        </p>

                        <BlockMath
                            math={String.raw`
                f(x)=
                \begin{cases}
                    2x+3 & (x<1)\\
                    \dfrac12x+\dfrac92 & (x\ge1)
                \end{cases}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \{f(x)\}^2=f(x)f^{-1}(x)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모든 실근의 합을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                주어진 식을 한쪽으로 이항하여 인수분해하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \{f(x)\}^2-f(x)f^{-1}(x)=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    f(x)\{f(x)-f^{-1}(x)\}=0
                `}
                            />

                            <p className="leading-8">
                                이므로 다음 두 경우로 나누어 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=0
                    \quad\text{또는}\quad
                    f(x)=f^{-1}(x)
                `}
                            />

                            <p className="leading-8 font-bold text-white">
                                ① <InlineMath math="f(x)=0" />인 경우
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x<1" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    2x+3=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=-\frac32
                `}
                            />

                            <p className="leading-8">
                                이고 <InlineMath math="-\frac32<1" />이므로 조건을
                                만족합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x\ge1" />에서는{" "}
                                <InlineMath math="\dfrac12x+\dfrac92>0" />이므로
                                해가 없습니다.
                            </p>

                            <p className="leading-8 font-bold text-white">
                                ② <InlineMath math="f(x)=f^{-1}(x)" />인 경우
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f" />는 증가하는 함수이므로
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=f^{-1}(x)
                    \iff
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                로 바꾸어 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x<1" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    2x+3=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=-3
                `}
                            />

                            <p className="leading-8">
                                이고 <InlineMath math="-3<1" />이므로 조건을
                                만족합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x\ge1" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12x+\frac92=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=9
                `}
                            />

                            <p className="leading-8">
                                이고 <InlineMath math="9\ge1" />이므로 조건을
                                만족합니다.
                            </p>

                            <p className="leading-8">
                                따라서 모든 실근은
                            </p>

                            <BlockMath
                                math={String.raw`
                    -\frac32,\quad -3,\quad 9
                `}
                            />

                            <p className="leading-8">
                                이므로 그 합은
                            </p>

                            <BlockMath
                                math={String.raw`
                    -\frac32-3+9
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
                                    양변에 <InlineMath math="f(x)" />가 있다고 해서
                                    바로 약분하면 <InlineMath math="f(x)=0" />인 해를
                                    잃을 수 있습니다. 먼저 인수분해하여 두 경우를
                                    모두 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(x)\{f(x)-f^{-1}(x)\}=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 <InlineMath math="f(x)=f^{-1}(x)" />에서는
                                    <InlineMath math="f" />가 증가하는 함수라는 것을
                                    이용하여 <InlineMath math="f(x)=x" />로 바꾸어
                                    해결합니다.
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
                            함수
                        </p>

                        <div className="my-6 ">
                            <BlockMath
                                math={String.raw`
            f(x)=
            \begin{cases}
                \displaystyle \frac{1}{2}x+a
                & \quad (x\ge 0) \\[10pt]
                \displaystyle \frac{3}{2}x+a
                & \quad (x<0)
            \end{cases}
        `}
                            />
                        </div>
                        <p className="leading-8 text-gray-300">
                            의 역함수를 <InlineMath math="g(x)" />라 할 때,
                            두 함수 <InlineMath math="y=f(x)" />,{" "}
                            <InlineMath math="y=g(x)" />의 그래프로 둘러싸인 도형의
                            넓이는 <InlineMath math="100" />이다.
                            이때 양수 <InlineMath math="a" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f" />는 증가하는 함수이므로
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                를 풀어 두 교점을 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x\ge0" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12x+a=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=2a
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="x<0" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac32x+a=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=-2a
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 함수와 역함수의 두 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-2a,-2a),\qquad(2a,2a)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수와 역함수의 그래프는 직선{" "}
                                <InlineMath math="y=x" />에 대하여 대칭이므로,
                                두 그래프로 둘러싸인 넓이는 함수{" "}
                                <InlineMath math="y=f(x)" />와 직선{" "}
                                <InlineMath math="y=x" /> 사이 넓이의 2배입니다.
                            </p>

                            <p className="leading-8">
                                또
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(0)=a
                `}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="y=f(x)" />와{" "}
                                <InlineMath math="y=x" /> 사이의 영역은
                                밑변의 길이가 각각 <InlineMath math="2a" />,
                                높이가 <InlineMath math="a" />인 삼각형 두 개로
                                나누어집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12\cdot2a\cdot a
                    +
                    \frac12\cdot2a\cdot a
                    =
                    2a^2
                `}
                            />

                            <p className="leading-8">
                                따라서 함수와 역함수로 둘러싸인 전체 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    2\cdot2a^2=4a^2
                `}
                            />

                            <p className="leading-8">
                                입니다. 문제에서 이 넓이가{" "}
                                <InlineMath math="100" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    4a^2=100
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a^2=25
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=5
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{5}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    함수와 역함수의 그래프는 직선{" "}
                                    <InlineMath math="y=x" />에 대하여 대칭입니다.
                                    따라서 두 그래프가 만드는 전체 넓이를 직접
                                    구하지 않고, 함수와 직선{" "}
                                    <InlineMath math="y=x" /> 사이의 넓이를 구한 뒤
                                    2배 하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{함수와 역함수 사이의 넓이}
                        =
                        2\times
                        \text{함수와 }y=x\text{ 사이의 넓이}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            함수{" "}
                            <InlineMath math="f(x)=x^2+6x+k\ (x\le-3)" />의
                            그래프와 그 역함수{" "}
                            <InlineMath math="y=f^{-1}(x)" />의 그래프의 교점은
                            점 <InlineMath math="\mathrm{P}(p,q)" />뿐이다.
                            점 <InlineMath math="\mathrm{P}" />에서{" "}
                            <InlineMath math="y" />축에 내린 수선의 발을{" "}
                            <InlineMath math="\mathrm{H}" />라 하면 삼각형{" "}
                            <InlineMath math="\mathrm{OPH}" />의 넓이가{" "}
                            <InlineMath math="18" />일 때,{" "}
                            <InlineMath math="k+p+q" />의 값을 구하시오.
                            (단, <InlineMath math="\mathrm{O}" />는 원점이고{" "}
                            <InlineMath math="k" />는 상수이다.)
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수와 역함수의 그래프는 직선{" "}
                                <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 그래프의 교점{" "}
                                <InlineMath math="\mathrm{P}(p,q)" />가 있다면,
                                직선 <InlineMath math="y=x" />에 대한 대칭점{" "}
                                <InlineMath math="(q,p)" />도 두 그래프의
                                교점이어야 합니다.
                            </p>

                            <p className="leading-8">
                                그런데 두 그래프의 교점은 점{" "}
                                <InlineMath math="\mathrm{P}" /> 하나뿐이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (p,q)=(q,p)
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p=q
                `}
                            />

                            <p className="leading-8">
                                이므로 점 <InlineMath math="\mathrm{P}" />는
                                직선 <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="\mathrm{P}(p,q)" />에서{" "}
                                <InlineMath math="y" />축에 내린 수선의 발은{" "}
                                <InlineMath math="\mathrm{H}(0,q)" />이므로
                                삼각형 <InlineMath math="\mathrm{OPH}" />의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12|p||q|=18
                `}
                            />

                            <p className="leading-8">
                                입니다. <InlineMath math="p=q" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12p^2=18
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    p^2=36
                `}
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="p=\pm6" />입니다.
                                그런데 점 <InlineMath math="\mathrm{P}" />는 함수{" "}
                                <InlineMath math="y=f(x)" />의 그래프 위에 있고
                                함수의 정의역이 <InlineMath math="x\le-3" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    p=-6
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p=q=-6
                `}
                            />

                            <p className="leading-8">
                                이고 점 <InlineMath math="(-6,-6)" />이
                                함수 <InlineMath math="y=f(x)" />의 그래프 위에
                                있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(-6)=-6
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (-6)^2+6(-6)+k=-6
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    k=-6
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    k+p+q
                    =
                    -6-6-6
                    =
                    -18
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-18}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    함수와 역함수의 그래프는 직선{" "}
                                    <InlineMath math="y=x" />에 대하여 대칭입니다.
                                    따라서 교점 <InlineMath math="(p,q)" />가 있으면{" "}
                                    <InlineMath math="(q,p)" />도 교점입니다.
                                    이 문제에서는 교점이 하나뿐이므로 두 점이 같아야 하고,
                                    결국 그 교점은 직선{" "}
                                    <InlineMath math="y=x" /> 위에 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{교점이 하나}
                        \rightarrow
                        (p,q)=(q,p)
                        \rightarrow
                        p=q
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
                            정의역과 치역이 모두 실수 전체의 집합이고 역함수가
                            존재하는 함수
                        </p>

                        <div className="my-6 ">
                            <BlockMath
                                math={String.raw`
                    f(x)=
                    \begin{cases}
                        \displaystyle (a^2-4)(x-5)+1
                        & \quad (x\ge5) \\[10pt]
                        \displaystyle \frac15x
                        & \quad (x<5)
                    \end{cases}
                `}
                            />
                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="a" />의 값이 최소의 양의
                            정수일 때, 함수 <InlineMath math="f(x)" />의 역함수를{" "}
                            <InlineMath math="y=g(x)" />라고 하자. 두 함수{" "}
                            <InlineMath math="y=f(x)" />,{" "}
                            <InlineMath math="y=g(x)" />의 그래프로 둘러싸인 부분의
                            넓이를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                먼저 역함수가 존재하도록 하는{" "}
                                <InlineMath math="a" />의 값을 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x<5" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=\frac15x<1
                `}
                            />

                            <p className="leading-8">
                                이므로 이 부분의 치역은 <InlineMath math="y<1" />입니다.
                                정의역과 치역이 모두 실수 전체이고 역함수가 존재하려면{" "}
                                <InlineMath math="x\ge5" />에서는{" "}
                                <InlineMath math="y\ge1" />이 되어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="x\ge5" />에서 함수가
                                증가해야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a^2-4>0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a>2
                    \quad\text{또는}\quad
                    a<-2
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />가 최소의 양의 정수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 함수는
                            </p>

                            <div className="my-6 text-lg sm:text-xl">
                                <BlockMath
                                    math={String.raw`
                        f(x)=
                        \begin{cases}
                            \displaystyle 5x-24
                            & \quad (x\ge5) \\[10pt]
                            \displaystyle \frac15x
                            & \quad (x<5)
                        \end{cases}
                    `}
                                />
                            </div>

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f" />는 증가하는 함수이므로
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=x
                `}
                            />

                            <p className="leading-8">
                                를 풀어 교점을 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x<5" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac15x=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=0
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="x\ge5" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
                    5x-24=x
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=6
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 함수와 역함수의 두 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (0,0),\qquad(6,6)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="y=f(x)" />는 두 직선으로
                                이루어져 있고 두 식은 점{" "}
                                <InlineMath math="(5,1)" />에서 연결됩니다.
                                따라서 함수의 그래프와 직선{" "}
                                <InlineMath math="y=x" />로 둘러싸인 부분은 세 점
                            </p>

                            <BlockMath
                                math={String.raw`
                    (0,0),\qquad(5,1),\qquad(6,6)
                `}
                            />

                            <p className="leading-8">
                                을 꼭짓점으로 하는 삼각형입니다.
                            </p>

                            <p className="leading-8">
                                밑변을 <InlineMath math="y=x" /> 위의 선분으로 보면
                                그 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt{6^2+6^2}=6\sqrt2
                `}
                            />

                            <p className="leading-8">
                                이고, 점 <InlineMath math="(5,1)" />에서 직선{" "}
                                <InlineMath math="y=x" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{|5-1|}{\sqrt2}
                    =
                    2\sqrt2
                `}
                            />

                            <p className="leading-8">
                                이므로 이 삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12\cdot6\sqrt2\cdot2\sqrt2
                    =
                    12
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                함수와 역함수의 그래프는 직선{" "}
                                <InlineMath math="y=x" />에 대하여 대칭이므로
                                두 그래프로 둘러싸인 전체 넓이는 이 넓이의
                                2배입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    2\cdot12=24
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{24}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 정의역과 치역이 모두 실수 전체이고
                                    역함수가 존재한다는 조건을 이용하여{" "}
                                    <InlineMath math="a" />를 결정합니다.
                                    그다음 함수와 역함수가 직선{" "}
                                    <InlineMath math="y=x" />에 대하여 대칭임을
                                    이용하면 역함수의 식을 직접 구하지 않고도
                                    넓이를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{역함수 존재}
                        \rightarrow
                        a=3
                        \rightarrow
                        f(x)=x
                        \rightarrow
                        \text{한쪽 넓이}\times2
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
                        <div className="grid items-start gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                            <div>
                                <p className="leading-8 text-gray-300">
                                    함수 <InlineMath math="y=f(x)" />와 그 역함수{" "}
                                    <InlineMath math="y=f^{-1}(x)" />의 그래프가
                                    그림과 같다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    곡선 <InlineMath math="y=f(x)" /> 위의 두 점{" "}
                                    <InlineMath math="A,\ D" />와 곡선{" "}
                                    <InlineMath math="y=f^{-1}(x)" /> 위의 두 점{" "}
                                    <InlineMath math="B,\ C" />가 다음 조건을 만족시키고
                                </p>

                                <BlockMath
                                    math={String.raw`
                        f(2)=f^{-1}(2)+9
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    일 때, 사각형 <InlineMath math="ABCD" />의 넓이가{" "}
                                    <InlineMath math="\dfrac pq" />이다.{" "}
                                    <InlineMath math="p,\ q" />가 서로소인 자연수일 때,{" "}
                                    <InlineMath math="p+q" />의 값을 구하시오.
                                </p>

                                <div className="mt-5 rounded-xl border border-teal-400/30 bg-teal-400/5 p-5">
                                    <p className="leading-8 text-gray-300">
                                        (가) 점 <InlineMath math="A" />의 좌표는{" "}
                                        <InlineMath math="A(2,3)" />이다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        (나) 두 선분 <InlineMath math="AB,\ DC" />는
                                        각각 직선 <InlineMath math="y=x" />와 서로 수직이다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        (다) 직선 <InlineMath math="BD" />는{" "}
                                        <InlineMath math="x" />축과 서로 평행하다.
                                    </p>
                                </div>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/3.14_13.png"
                                    alt="함수와 역함수의 그래프 위의 네 점 A, B, C, D"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수와 역함수의 그래프는 직선{" "}
                                <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="A(2,3)" />와 점{" "}
                                <InlineMath math="B" />를 잇는 선분이 직선{" "}
                                <InlineMath math="y=x" />에 수직이므로{" "}
                                <InlineMath math="B" />는{" "}
                                <InlineMath math="A" />의 대칭점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(2,3)
                    \longrightarrow
                    B(3,2)
                `}
                            />

                            <p className="leading-8">
                                또한 <InlineMath math="BD" />가{" "}
                                <InlineMath math="x" />축과 평행하므로 점{" "}
                                <InlineMath math="D" />의 <InlineMath math="y" />좌표도{" "}
                                <InlineMath math="2" />입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="D" />를{" "}
                                <InlineMath math="D(t,2)" />라고 하면,{" "}
                                <InlineMath math="DC" />도 직선{" "}
                                <InlineMath math="y=x" />에 수직이므로{" "}
                                <InlineMath math="C" />는{" "}
                                <InlineMath math="D" />의 대칭점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    D(t,2)
                    \longrightarrow
                    C(2,t)
                `}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="D(t,2)" />는 함수{" "}
                                <InlineMath math="y=f(x)" />의 그래프 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(t)=2
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    t=f^{-1}(2)
                `}
                            />

                            <p className="leading-8">
                                한편 <InlineMath math="A(2,3)" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=3
                `}
                            />

                            <p className="leading-8">
                                입니다. 주어진 조건
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(2)=f^{-1}(2)+9
                `}
                            />

                            <p className="leading-8">
                                에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    3=t+9
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    t=-6
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 네 점의 좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(2,3),\quad
                    B(3,2),\quad
                    C(2,-6),\quad
                    D(-6,2)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                평면좌표에서 배운 좌표를 이용한 다각형의 넓이를 사용합니다.
                                먼저 꼭짓점을 사각형의 둘레를 따라
                            </p>

                            <BlockMath
                                math={String.raw`
        A\rightarrow B\rightarrow C\rightarrow D\rightarrow A
    `}
                            />

                            <p className="leading-8">
                                의 순서로 놓고, 각 점의 좌표를 세로로 나열합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <BlockMath
                                    math={String.raw`
            \begin{array}{ccccc}
            2 & 3 & 2 & -6 & 2\\
            3 & 2 & -6 & 2 & 3
            \end{array}
        `}
                                />
                            </div>

                            <p className="leading-8">
                                처음 점 <InlineMath math="A" />를 마지막에 한 번 더 적은 뒤,
                                오른쪽 아래 방향의 곱은 모두 더하고 왼쪽 아래 방향의 곱은
                                모두 뺍니다.
                            </p>

                            <BlockMath
                                math={String.raw`
        \text{오른쪽 아래 방향}
        =
        2\cdot2
        +
        3\cdot(-6)
        +
        2\cdot2
        +
        (-6)\cdot3
        =
        -28
    `}
                            />

                            <BlockMath
                                math={String.raw`
        \text{왼쪽 아래 방향}
        =
        3\cdot3
        +
        2\cdot2
        +
        (-6)\cdot(-6)
        +
        2\cdot2
        =
        53
    `}
                            />

                            <p className="leading-8">
                                따라서 사각형 <InlineMath math="ABCD" />의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
        \frac12
        \left|
        -28-53
        \right|
        =
        \frac{81}{2}
    `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    p=81,\qquad q=2
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    p+q=81+2=83
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{83}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    함수와 역함수의 그래프는 직선{" "}
                                    <InlineMath math="y=x" />에 대하여 대칭이므로,
                                    서로 대응하는 두 점의 좌표는 서로 바뀝니다.
                                    따라서 <InlineMath math="A(2,3)" />에서{" "}
                                    <InlineMath math="B(3,2)" />를 찾고,{" "}
                                    <InlineMath math="D(t,2)" />에서{" "}
                                    <InlineMath math="C(2,t)" />를 찾을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (a,b)
                        \longleftrightarrow
                        (b,a)
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

                    <div className="space-y-6 text-gray-300">
                        <div>
                            <p className="mb-2 font-bold text-white">
                                1. 함수와 역함수의 그래프
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(a)=b
                    \iff
                    f^{-1}(b)=a
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a,b)
                    \longleftrightarrow
                    (b,a)
                `}
                            />

                            <p className="leading-8">
                                따라서 함수 <InlineMath math="y=f(x)" />와 역함수{" "}
                                <InlineMath math="y=f^{-1}(x)" />의 그래프는 직선{" "}
                                <InlineMath math="y=x" />에 대하여 서로 대칭입니다.
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                2. 역함수의 그래프를 보는 두 가지 방법
                            </p>

                            <p className="leading-8">
                                역함수의 그래프를 직접 그릴 때는 원래 함수의 그래프를
                                직선 <InlineMath math="y=x" />에 대하여 대칭이동합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=f(x)
                    \xrightarrow{\ y=x\text{에 대하여 대칭}\ }
                    y=f^{-1}(x)
                `}
                            />

                            <p className="leading-8">
                                역함수의 그래프를 따로 그리지 않고 원래 그래프를
                                이용할 때는 <InlineMath math="x" />축과{" "}
                                <InlineMath math="y" />축의 역할을 서로 바꾸어 읽습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    x\text{축}
                    \longleftrightarrow
                    y\text{축}
                `}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                3. 직선 <InlineMath math="y=x" />와의 교점
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(a)=a
                    \iff
                    f^{-1}(a)=a
                `}
                            />

                            <p className="leading-8">
                                따라서 함수 <InlineMath math="y=f(x)" />와 직선{" "}
                                <InlineMath math="y=x" />의 교점은 역함수{" "}
                                <InlineMath math="y=f^{-1}(x)" />와 직선{" "}
                                <InlineMath math="y=x" />의 교점과 같습니다.
                            </p>
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                4. 증가하는 함수와 역함수의 교점
                            </p>

                            <p className="leading-8">
                                함수 <InlineMath math="f" />가 증가하는 함수이면
                                함수와 역함수의 교점은 직선{" "}
                                <InlineMath math="y=x" /> 위에 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    f(x)=f^{-1}(x)
                    \iff
                    f(x)=x
                    \qquad
                    (\text{\(f\)가 증가함수일 때})
                `}
                            />

                            <p className="leading-8">
                                따라서 증가하는 함수에서는{" "}
                                <InlineMath math="y=f(x)" />와{" "}
                                <InlineMath math="y=f^{-1}(x)" />의 교점,{" "}
                                <InlineMath math="y=f(x)" />와{" "}
                                <InlineMath math="y=x" />의 교점,{" "}
                                <InlineMath math="y=f^{-1}(x)" />와{" "}
                                <InlineMath math="y=x" />의 교점이 같습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.15 우함수와 기함수, 합성함수의 증감 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.15 우함수와 기함수, 합성함수의 증감
                </h2>

                <p className="leading-8 text-gray-300">
                    함수에 <InlineMath math="-x" />를 대입했을 때 나타나는 관계를
                    이용하면 함수의 대칭성을 판단할 수 있습니다.
                    또한 우함수와 기함수의 연산과 합성, 증가함수와 감소함수의
                    합성에는 일정한 규칙이 있습니다.
                </p>

                <div className="mt-8 space-y-6">
                    {/* 1. 우함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 우함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(-x)=f(x)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립하면 함수 <InlineMath math="f" />를{" "}
                            <strong className="text-white">우함수</strong>라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="0" />을 기준으로 왼쪽으로{" "}
                            <InlineMath math="x" />만큼 떨어진 곳과 오른쪽으로{" "}
                            <InlineMath math="x" />만큼 떨어진 곳의 함숫값이 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(-x)=f(x)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 우함수의 그래프는{" "}
                            <strong className="text-white">
                                <InlineMath math="y" />축에 대하여 대칭
                            </strong>
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-400/30 bg-blue-400/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                대표적인 우함수
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=x^2,\qquad
                        y=x^4,\qquad
                        y=|x|,\qquad
                        y=c
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                특히 다항함수에서는 짝수 차수의 항과 상수항으로만
                                이루어진 함수가 우함수입니다.
                            </p>
                        </div>
                    </div>

                    {/* 2. 기함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 기함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(-x)=-f(x)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립하면 함수 <InlineMath math="f" />를{" "}
                            <strong className="text-white">기함수</strong>라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 식은
                        </p>

                        <BlockMath
                            math={String.raw`
                    f(-x)+f(x)=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 나타낼 수 있습니다. 즉{" "}
                            <InlineMath math="0" />을 기준으로 왼쪽과 오른쪽으로
                            같은 거리만큼 떨어진 두 곳의 함숫값의 합이{" "}
                            <InlineMath math="0" />입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 기함수의 그래프는{" "}
                            <strong className="text-white">
                                원점에 대하여 대칭
                            </strong>
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-rose-400/30 bg-rose-400/5 p-5">
                            <p className="mb-3 font-bold text-rose-300">
                                대표적인 기함수
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=x,\qquad
                        y=x^3,\qquad
                        y=x^5
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                특히 다항함수에서는 홀수 차수의 항으로만
                                이루어진 함수가 기함수입니다.
                            </p>
                        </div>
                    </div>

                    {/* 3. 우함수와 기함수의 판정 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 우함수와 기함수의 판정
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수가 우함수인지 기함수인지 판단하려면{" "}
                            <strong className="text-white">
                                <InlineMath math="x" /> 대신 <InlineMath math="-x" />를
                                대입
                            </strong>
                            합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        f(-x)=f(x)
                        &\quad\Rightarrow\quad
                        \text{우함수}\\[6pt]
                        f(-x)=-f(x)
                        &\quad\Rightarrow\quad
                        \text{기함수}
                        \end{aligned}
                    `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 관계가 모두 성립하지 않으면 우함수도 기함수도
                            아닙니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                함수의 최고차항의 차수만 보고 우함수와 기함수를
                                판단하면 안 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        x^2+x,\qquad x^3+1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                과 같은 함수는 각각 이차함수, 삼차함수이지만
                                우함수와 기함수가 아닙니다. <br />
                                항상{" "}<InlineMath math="f(-x)" />를 이용하여 판단합니다.
                            </p>
                        </div>
                    </div>

                    {/* 4. 우함수와 기함수의 연산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 우함수와 기함수의 연산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            우함수와 기함수를 더하거나 빼면 다음과 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \text{우함수}\pm\text{우함수}
                    &=
                    \text{우함수}\\[6pt]
                    \text{기함수}\pm\text{기함수}
                    &=
                    \text{기함수}
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            우함수와 기함수의 합이나 차는 일반적으로 우함수도
                            기함수도 아닙니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 함수를 곱하면 다음과 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \text{우함수}\times\text{우함수}
                        &=\text{우함수}\\[6pt]
                        \text{우함수}\times\text{기함수}
                        &=\text{기함수}\\[6pt]
                        \text{기함수}\times\text{우함수}
                        &=\text{기함수}\\[6pt]
                        \text{기함수}\times\text{기함수}
                        &=\text{우함수}
                        \end{aligned}
                    `}
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
                            <p className="mb-3 font-bold text-emerald-300">
                                간단하게 생각하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                우함수는 <InlineMath math="x^2" />, 기함수는{" "}
                                <InlineMath math="x" />라고 생각하면 결과를 쉽게
                                판단할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        x^2\cdot x^2&=x^4
                        &&\Rightarrow\text{우함수}\\
                        x^2\cdot x&=x^3
                        &&\Rightarrow\text{기함수}\\
                        x\cdot x&=x^2
                        &&\Rightarrow\text{우함수}
                        \end{aligned}
                    `}
                            />
                        </div>
                    </div>

                    {/* 5. 우함수와 기함수의 합성 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 우함수와 기함수의 합성
                        </h3>

                        <p className="leading-8 text-gray-300">
                            합성함수가 정의된다고 할 때 우함수와 기함수를
                            합성하면 다음과 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \text{우함수}\circ\text{우함수}
                        &=\text{우함수}\\[6pt]
                        \text{우함수}\circ\text{기함수}
                        &=\text{우함수}\\[6pt]
                        \text{기함수}\circ\text{우함수}
                        &=\text{우함수}\\[6pt]
                        \text{기함수}\circ\text{기함수}
                        &=\text{기함수}
                        \end{aligned}
                    `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            이 결과도 우함수를 <InlineMath math="x^2" />,
                            기함수를 <InlineMath math="x" />로 생각하면 쉽게
                            확인할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    x^2\circ x^2
                    &=(x^2)^2=x^4
                    &&\Rightarrow\text{우함수}\\[4pt]
                    x^2\circ x
                    &=x^2
                    &&\Rightarrow\text{우함수}\\[4pt]
                    x\circ x^2
                    &=x^2
                    &&\Rightarrow\text{우함수}\\[4pt]
                    x\circ x
                    &=x
                    &&\Rightarrow\text{기함수}
                    \end{aligned}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                곱셈과 합성을 구분
                            </p>

                            <p className="leading-8 text-gray-300">
                                우함수와 기함수의{" "}
                                <strong className="text-white">곱셈</strong>과{" "}
                                <strong className="text-white">합성</strong>은
                                결과가 서로 다릅니다. 어떤 연산을 하고 있는지
                                먼저 확인해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{우}\times\text{기}=\text{기},
                        \qquad
                        \text{우}\circ\text{기}=\text{우}
                    `}
                            />
                        </div>
                    </div>

                    {/* 6. 증가함수와 감소함수 */}
<div className="rounded-xl border border-white/10 bg-white/10 p-6">
    <h3 className="mb-4 text-2xl font-bold">
        6. 증가함수와 감소함수
    </h3>

    <p className="leading-8 text-gray-300">
        함수에서 <InlineMath math="x" />의 값이 증가할 때
        함숫값이 어떻게 변하는지에 따라 증가함수와 감소함수로
        구분할 수 있습니다.
    </p>

    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
        <p className="mb-4 font-bold text-white">
            증가함수
        </p>

        <p className="leading-8 text-gray-300">
            <InlineMath math="x_1<x_2" />일 때 항상
        </p>

        <BlockMath
            math={String.raw`
                f(x_1)<f(x_2)
            `}
        />

        <p className="leading-8 text-gray-300">
            이면 <InlineMath math="f(x)" />를 증가함수라고 합니다.
        </p>

        <BlockMath
            math={String.raw`
                x_1<x_2
                \quad\Longrightarrow\quad
                f(x_1)<f(x_2)
            `}
        />

        <p className="leading-8 text-gray-300">
            즉 입력값의 대소관계와 함숫값의 대소관계가
            <strong className="text-white"> 같은 방향</strong>입니다.
        </p>
    </div>

    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
        <p className="mb-4 font-bold text-white">
            감소함수
        </p>

        <p className="leading-8 text-gray-300">
            <InlineMath math="x_1<x_2" />일 때 항상
        </p>

        <BlockMath
            math={String.raw`
                f(x_1)>f(x_2)
            `}
        />

        <p className="leading-8 text-gray-300">
            이면 <InlineMath math="f(x)" />를 감소함수라고 합니다.
        </p>

        <BlockMath
            math={String.raw`
                x_1<x_2
                \quad\Longrightarrow\quad
                f(x_1)>f(x_2)
            `}
        />

        <p className="leading-8 text-gray-300">
            즉 입력값의 대소관계와 함숫값의 대소관계가
            <strong className="text-white"> 반대 방향</strong>입니다.
        </p>
    </div>

    <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
        <p className="mb-3 font-bold text-emerald-300">
            간단하게 생각하기
        </p>

        <p className="leading-8 text-gray-300">
            증가함수는 <InlineMath math="y=x" />,
            감소함수는 <InlineMath math="y=-x" />를
            대표적으로 생각하면 됩니다.
        </p>

        <BlockMath
            math={String.raw`
                \begin{aligned}
                y=x
                &:\quad x\uparrow\ \Longrightarrow\ y\uparrow
                &&\text{증가}\\[6pt]
                y=-x
                &:\quad x\uparrow\ \Longrightarrow\ y\downarrow
                &&\text{감소}
                \end{aligned}
            `}
        />
    </div>

    <div className="mt-5 rounded-xl border border-yellow-400/30 bg-yellow-400/5 p-5">
        <p className="mb-3 font-bold text-yellow-300">
            함숫값을 비교할 때
        </p>

        <p className="leading-8 text-gray-300">
            증가함수에서는 함숫값의 대소관계와 입력값의
            대소관계가 같고, 감소함수에서는 반대입니다.
        </p>

        <BlockMath
            math={String.raw`
                \begin{aligned}
                \text{증가함수}\quad
                f(A)<f(B)
                &\quad\Longleftrightarrow\quad A<B\\[8pt]
                \text{감소함수}\quad
                f(A)<f(B)
                &\quad\Longleftrightarrow\quad A>B
                \end{aligned}
            `}
        />
    </div>
</div>

                    {/* 7. 합성함수의 증감 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            7. 합성함수의 증감
                        </h3>

                        <p className="leading-8 text-gray-300">
                            증가함수와 감소함수를 합성할 때에는 각 함수가
                            값의 변화 방향을 유지하는지 또는 반대로 바꾸는지를
                            생각하면 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \text{증가}\circ\text{증가}
                        &=\text{증가}\\[6pt]
                        \text{증가}\circ\text{감소}
                        &=\text{감소}\\[6pt]
                        \text{감소}\circ\text{증가}
                        &=\text{감소}\\[6pt]
                        \text{감소}\circ\text{감소}
                        &=\text{증가}
                        \end{aligned}
                    `}
                            />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            특히 감소함수는 값의 변화 방향을 한 번 반대로
                            바꾼다고 생각할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{감소}\circ\text{감소}
                    \quad:\quad
                    \uparrow\ \longrightarrow\ \downarrow
                    \ \longrightarrow\ \uparrow
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 감소함수를 두 번 거치면 방향이 두 번 바뀌어
                            다시 증가하게 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-5">
                            <p className="mb-3 font-bold text-emerald-300">
                                간단하게 생각하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                증가함수는 <InlineMath math="y=x" />,
                                감소함수는 <InlineMath math="y=-x" />라고
                                생각하면 결과를 쉽게 판단할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        x\circ x&=x
                        &&\Rightarrow\text{증가}\\[4pt]
                        x\circ(-x)&=-x
                        &&\Rightarrow\text{감소}\\[4pt]
                        (-x)\circ x&=-x
                        &&\Rightarrow\text{감소}\\[4pt]
                        (-x)\circ(-x)&=x
                        &&\Rightarrow\text{증가}
                        \end{aligned}
                    `}
                            />
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
            함수 <InlineMath math="f(x)" />는 우함수, 함수{" "}
            <InlineMath math="g(x)" />는 기함수일 때, 다음 중
            우함수만으로 짝지어진 것을 구하여라.
        </p>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <p className="text-gray-300">
                    ㄱ. <InlineMath math="f(g(x))" />
                </p>
                <p className="text-gray-300">
                    ㄴ. <InlineMath math="g(f(x))" />
                </p>
                <p className="text-gray-300">
                    ㄷ. <InlineMath math="f(f(x))" />
                </p>
                <p className="text-gray-300">
                    ㄹ. <InlineMath math="g(g(x))" />
                </p>
                <p className="text-gray-300">
                    ㅁ. <InlineMath math="f(x)\cdot g(x)" />
                </p>
            </div>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <p className="text-gray-300">① ㄱ, ㄴ</p>
            <p className="text-gray-300">② ㄱ, ㄷ, ㅁ</p>
            <p className="text-gray-300">③ ㄴ, ㄷ, ㄹ</p>
            <p className="text-gray-300">④ ㄱ, ㄴ, ㄷ</p>
            <p className="text-gray-300">⑤ ㄱ, ㄴ, ㄷ, ㅁ</p>
        </div>
    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">
        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">
            <p className="leading-8">
                우함수는 <InlineMath math="x^2" />, 기함수는{" "}
                <InlineMath math="x" />라고 생각하여 합성의 결과를
                판단할 수 있습니다.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    ㄱ. <InlineMath math="f(g(x))" />
                </p>

                <BlockMath
                    math={String.raw`
                        \text{우}\circ\text{기}
                        =
                        \text{우}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="f(g(x))" />는 우함수입니다.
                </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    ㄴ. <InlineMath math="g(f(x))" />
                </p>

                <BlockMath
                    math={String.raw`
                        \text{기}\circ\text{우}
                        =
                        \text{우}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="g(f(x))" />는 우함수입니다.
                </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    ㄷ. <InlineMath math="f(f(x))" />
                </p>

                <BlockMath
                    math={String.raw`
                        \text{우}\circ\text{우}
                        =
                        \text{우}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="f(f(x))" />는 우함수입니다.
                </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    ㄹ. <InlineMath math="g(g(x))" />
                </p>

                <BlockMath
                    math={String.raw`
                        \text{기}\circ\text{기}
                        =
                        \text{기}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="g(g(x))" />는 기함수입니다.
                </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    ㅁ. <InlineMath math="f(x)\cdot g(x)" />
                </p>

                <BlockMath
                    math={String.raw`
                        \text{우}\times\text{기}
                        =
                        \text{기}
                    `}
                />

                <p className="leading-8">
                    따라서 <InlineMath math="f(x)g(x)" />는 기함수입니다.
                </p>
            </div>

            <p className="leading-8">
                그러므로 우함수인 것은 ㄱ, ㄴ, ㄷ입니다.
            </p>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        {\text{④ ㄱ, ㄴ, ㄷ}}
                    `}
                />
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    합성과 곱셈을 구분하여 판단해야 합니다.
                    합성에서는 우함수를 <InlineMath math="x^2" />,
                    기함수를 <InlineMath math="x" />로 생각하면
                    결과를 쉽게 확인할 수 있습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{aligned}
                        \text{우}\circ\text{우}&=\text{우}\\
                        \text{우}\circ\text{기}&=\text{우}\\
                        \text{기}\circ\text{우}&=\text{우}\\
                        \text{기}\circ\text{기}&=\text{기}
                        \end{aligned}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    반면 곱셈에서는
                </p>

                <BlockMath
                    math={String.raw`
                        \text{우}\times\text{기}=\text{기}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    이므로 같은 우함수와 기함수라도{" "}
                    <strong className="text-white">
                        합성인지 곱셈인지 먼저 확인
                    </strong>
                    해야 합니다.
                </p>
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
            실수 전체의 집합에서 정의된 함수{" "}
            <InlineMath math="f(x)" />가 다음 조건을 만족한다.
        </p>

        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
            <p className="leading-8 text-gray-300">
                (가) <InlineMath math="f(x)" />는 기함수이다.
            </p>

            <p className="mt-2 leading-8 text-gray-300">
                (나) <InlineMath math="f(x)" />는 감소함수이다.
            </p>
        </div>

        <p className="mt-5 leading-8 text-gray-300">
            부등식
        </p>

        <BlockMath
            math={String.raw`
                f(1-x)+f(1-x^2)<0
            `}
        />

        <p className="leading-8 text-gray-300">
            을 풀어라.
        </p>

        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <p className="text-gray-300">
                ① <InlineMath math="-2<x<1" />
            </p>
            <p className="text-gray-300">
                ② <InlineMath math="x<-2,\ x>1" />
            </p>
            <p className="text-gray-300">
                ③ <InlineMath math="x<0,\ x>1" />
            </p>
            <p className="text-gray-300">
                ④ <InlineMath math="0<x<1" />
            </p>
            <p className="text-gray-300">
                ⑤ <InlineMath math="-2<x<0" />
            </p>
        </div>
    </div>

    <details className="mt-5 rounded-xl border border-white/15 p-5">
        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">
            <p className="leading-8">
                <InlineMath math="f(x)" />는 기함수이므로
            </p>

            <BlockMath
                math={String.raw`
                    f(-x)=-f(x)
                `}
            />

            <p className="leading-8">
                입니다.
            </p>

            <p className="leading-8">
                <InlineMath math="1-x=-(x-1)" />이므로
            </p>

            <BlockMath
                math={String.raw`
                    f(1-x)
                    =
                    f(-(x-1))
                    =
                    -f(x-1)
                `}
            />

            <p className="leading-8">
                입니다. 따라서 주어진 부등식은
            </p>

            <BlockMath
                math={String.raw`
                    -f(x-1)+f(1-x^2)<0
                `}
            />

            <p className="leading-8">
                이고, 정리하면
            </p>

            <BlockMath
                math={String.raw`
                    f(1-x^2)<f(x-1)
                `}
            />

            <p className="leading-8">
                입니다.
            </p>

            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                <p className="mb-4 font-bold text-white">
                    감소함수의 성질 이용
                </p>

                <p className="leading-8">
                    <InlineMath math="f(x)" />는 감소함수이므로
                    함숫값의 대소관계와 입력값의 대소관계는
                    반대입니다.
                </p>

                <BlockMath
                    math={String.raw`
                        f(1-x^2)<f(x-1)
                        \quad\Longrightarrow\quad
                        1-x^2>x-1
                    `}
                />
            </div>

            <p className="leading-8">
                부등식을 정리하면
            </p>

            <BlockMath
                math={String.raw`
                    \begin{aligned}
                    1-x^2&>x-1\\
                    x^2+x-2&<0\\
                    (x+2)(x-1)&<0
                    \end{aligned}
                `}
            />

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
                    -2<x<1
                `}
            />

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{\text{① }-2<x<1}
                    `}
                />
            </div>

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 기함수의 성질을 이용하여 두 함숫값을
                    비교하는 형태로 바꿉니다.
                </p>

                <BlockMath
                    math={String.raw`
                        f(-x)=-f(x)
                    `}
                />

                <BlockMath
                    math={String.raw`
                        f(1-x)+f(1-x^2)<0
                        \rightarrow
                        f(1-x^2)<f(x-1)
                    `}
                />

                <p className="leading-8 text-gray-300">
                    그다음 감소함수에서는{" "}
                    <strong className="text-white">
                        함숫값의 대소관계와 입력값의 대소관계가 반대
                    </strong>
                    라는 것을 이용합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        f(A)<f(B)
                        \quad\Longrightarrow\quad
                        A>B
                        \qquad
                        (\text{감소함수})
                    `}
                />

                <p className="leading-8 text-gray-300">
                    즉 이 문제는 함수의 식을 구하는 문제가 아니라{" "}
                    <strong className="text-white">
                        기함수의 성질로 식을 바꾸고, 감소함수의 성질로
                        함숫값의 비교를 입력값의 비교로 바꾸는 문제
                    </strong>
                    입니다.
                </p>
            </div>
        </div>
    </details>
</div>

                    {/* 핵심 정리 */}
                    <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-6">
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    1. 우함수와 기함수
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            f(-x)=f(x)
                            &\iff
                            \text{우함수}
                            \iff
                            y\text{축 대칭}\\[6pt]
                            f(-x)=-f(x)
                            &\iff
                            \text{기함수}
                            \iff
                            \text{원점 대칭}
                            \end{aligned}
                        `}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    2. 우함수와 기함수의 곱
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{우}\times\text{우}&=\text{우}\\
                            \text{우}\times\text{기}&=\text{기}\\
                            \text{기}\times\text{우}&=\text{기}\\
                            \text{기}\times\text{기}&=\text{우}
                            \end{aligned}
                        `}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    3. 우함수와 기함수의 합성
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{우}\circ\text{우}&=\text{우}\\
                            \text{우}\circ\text{기}&=\text{우}\\
                            \text{기}\circ\text{우}&=\text{우}\\
                            \text{기}\circ\text{기}&=\text{기}
                            \end{aligned}
                        `}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    4. 합성함수의 증감
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{증가}\circ\text{증가}&=\text{증가}\\
                            \text{증가}\circ\text{감소}&=\text{감소}\\
                            \text{감소}\circ\text{증가}&=\text{감소}\\
                            \text{감소}\circ\text{감소}&=\text{증가}
                            \end{aligned}
                        `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-3 font-bold text-white">
                                    기억하기
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \boxed{
                            \text{우}:x^2,\quad
                            \text{기}:x,\quad
                            \text{증가}:x,\quad
                            \text{감소}:-x
                            }
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    결과가 기억나지 않을 때에는 대표적인 함수를
                                    이용하여 직접 합성하거나 곱해 보면 규칙을
                                    다시 만들어낼 수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}