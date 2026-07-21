"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

const A_VALUES = [-2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2];
const SHIFT_VALUES = [-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2];

type GraphType = "quadratic" | "absolute";

type FunctionGraphProps = {
    type: GraphType;
    a: number;
    p: number;
    q: number;
};

function formatNumber(value: number) {
    if (Number.isInteger(value)) {
        return String(value);
    }

    return value.toFixed(1);
}

function makeSignedLatex(value: number) {
    if (value >= 0) {
        return `+${formatNumber(value)}`;
    }

    return formatNumber(value);
}

function makeShiftLatex(p: number) {
    if (p > 0) {
        return `x-${formatNumber(p)}`;
    }

    if (p < 0) {
        return `x+${formatNumber(Math.abs(p))}`;
    }

    return "x";
}

function FunctionGraph({
    type,
    a,
    p,
    q,
}: FunctionGraphProps) {
    const width = 620;
    const height = 470;

    const padding = {
        left: 54,
        right: 28,
        top: 42,
        bottom: 48,
    };

    const xMin = -4;
    const xMax = 4;
    const yMin = -4;
    const yMax = 4;

    const graphWidth = width - padding.left - padding.right;
    const graphHeight = height - padding.top - padding.bottom;

    const toSvgX = (x: number) =>
        padding.left +
        ((x - xMin) / (xMax - xMin)) * graphWidth * 0.75;

    const toSvgY = (y: number) =>
        padding.top +
        ((yMax - y) / (yMax - yMin)) * graphHeight;

    const graphPoints = useMemo(() => {
        const points: string[] = [];
        const sampleCount = 240;

        for (let i = 0; i <= sampleCount; i++) {
            const x =
                xMin +
                ((xMax - xMin) * i) / sampleCount;

            const y =
                type === "quadratic"
                    ? a * (x - p) ** 2 + q
                    : a * Math.abs(x - p) + q;

            points.push(`${toSvgX(x)},${toSvgY(y)}`);
        }

        return points.join(" ");
    }, [type, a, p, q]);

    const xTicks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];
    const yTicks = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

    const isQuadratic = type === "quadratic";

    const formula = isQuadratic
        ? `y=${formatNumber(a)}(${makeShiftLatex(p)})^2${makeSignedLatex(q)}`
        : `y=${formatNumber(a)}|${makeShiftLatex(p)}|${makeSignedLatex(q)}`;

    const strokeColor = isQuadratic ? "#60a5fa" : "#c084fc";
    const pointColor = isQuadratic ? "#3b82f6" : "#a855f7";

    return (
        <div className="overflow-hidden rounded-xl border border-white/15 bg-black/30">
            <div className="border-b border-white/10 px-4 py-4 text-center">
                <p
                    className={`mb-1 font-semibold ${isQuadratic
                        ? "text-blue-300"
                        : "text-purple-300"
                        }`}
                >
                    {isQuadratic ? "이차함수" : "절댓값 함수"}
                </p>

                <div
                    className={
                        isQuadratic
                            ? "text-blue-200"
                            : "text-purple-200"
                    }
                >
                    <InlineMath math={formula} />
                </div>
            </div>

            <svg
                viewBox={`0 0 ${width} ${height}`}
                className="h-auto w-full"
                role="img"
                aria-label={
                    isQuadratic
                        ? "이차함수 그래프"
                        : "절댓값 함수 그래프"
                }
            >
                <rect
                    x="0"
                    y="0"
                    width={width}
                    height={height}
                    fill="transparent"
                />

                {xTicks.map((x) => (
                    <line
                        key={`x-grid-${x}`}
                        x1={toSvgX(x)}
                        y1={padding.top}
                        x2={toSvgX(x)}
                        y2={height - padding.bottom}
                        stroke="rgba(255,255,255,0.12)"
                        strokeDasharray="5 6"
                    />
                ))}

                {yTicks.map((y) => (
                    <line
                        key={`y-grid-${y}`}
                        x1={padding.left}
                        y1={toSvgY(y)}
                        x2={width - padding.right}
                        y2={toSvgY(y)}
                        stroke="rgba(255,255,255,0.12)"
                        strokeDasharray="5 6"
                    />
                ))}

                <line
                    x1={padding.left}
                    y1={toSvgY(0)}
                    x2={width - padding.right}
                    y2={toSvgY(0)}
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.5"
                />

                <line
                    x1={toSvgX(0)}
                    y1={padding.top}
                    x2={toSvgX(0)}
                    y2={height - padding.bottom}
                    stroke="rgba(255,255,255,0.7)"
                    strokeWidth="1.5"
                />

                {xTicks.map((x) => (
                    <g key={`x-label-${x}`}>
                        <line
                            x1={toSvgX(x)}
                            y1={toSvgY(0) - 5}
                            x2={toSvgX(x)}
                            y2={toSvgY(0) + 5}
                            stroke="rgba(255,255,255,0.75)"
                        />

                        {x !== 0 && (
                            <text
                                x={toSvgX(x)}
                                y={toSvgY(0) + 25}
                                fill="rgba(255,255,255,0.78)"
                                fontSize="15"
                                textAnchor="middle"
                            >
                                {x}
                            </text>
                        )}
                    </g>
                ))}

                {yTicks.map((y) => (
                    <g key={`y-label-${y}`}>
                        <line
                            x1={toSvgX(0) - 5}
                            y1={toSvgY(y)}
                            x2={toSvgX(0) + 5}
                            y2={toSvgY(y)}
                            stroke="rgba(255,255,255,0.75)"
                        />

                        {y !== 0 && (
                            <text
                                x={toSvgX(0) - 12}
                                y={toSvgY(y) + 5}
                                fill="rgba(255,255,255,0.78)"
                                fontSize="15"
                                textAnchor="end"
                            >
                                {y}
                            </text>
                        )}
                    </g>
                ))}

                <text
                    x={width - padding.right + 5}
                    y={toSvgY(0) + 6}
                    fill="white"
                    fontSize="18"
                    fontStyle="italic"
                >
                    x
                </text>

                <text
                    x={toSvgX(0) + 8}
                    y={padding.top - 12}
                    fill="white"
                    fontSize="18"
                    fontStyle="italic"
                >
                    y
                </text>

                <polyline
                    points={graphPoints}
                    fill="none"
                    stroke={strokeColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                <circle
                    cx={toSvgX(p)}
                    cy={toSvgY(q)}
                    r="7"
                    fill={pointColor}
                    stroke="white"
                    strokeWidth="1.5"
                />

                <text
                    x={toSvgX(p) + 13}
                    y={toSvgY(q) + 13}
                    fill={strokeColor}
                    fontSize="30"
                    fontWeight="600"
                >
                    ({formatNumber(p)}, {formatNumber(q)})
                </text>
            </svg>
        </div>
    );
}

export function AbsoluteValueFunctionExplorer() {
    const [aIndex, setAIndex] = useState(5);
    const [pIndex, setPIndex] = useState(4);
    const [qIndex, setQIndex] = useState(4);

    const a = A_VALUES[aIndex];
    const p = SHIFT_VALUES[pIndex];
    const q = SHIFT_VALUES[qIndex];

    const quadraticFormula =
        `y=${formatNumber(a)}(${makeShiftLatex(p)})^2${makeSignedLatex(q)}`;

    const absoluteFormula =
        `y=${formatNumber(a)}|${makeShiftLatex(p)}|${makeSignedLatex(q)}`;

    return (
        <div className="mt-8 rounded-xl border border-white/15 bg-black/20 p-5 sm:p-6">
            <h3 className="mb-6 text-center text-2xl font-bold text-white">
                <InlineMath math="y=a|x-p|+q" /> 직접 움직여 보기
            </h3>

            <div className="grid gap-4 lg:grid-cols-2">
                <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 text-center">
                    <p className="mb-2 font-semibold text-blue-300">
                        이차함수
                    </p>

                    <div className="text-lg text-blue-100">
                        <InlineMath math={quadraticFormula} />
                    </div>
                </div>

                <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 text-center">
                    <p className="mb-2 font-semibold text-purple-300">
                        절댓값 함수
                    </p>

                    <div className="text-lg text-purple-100">
                        <InlineMath math={absoluteFormula} />
                    </div>
                </div>
            </div>

            <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                <ParameterSlider
                    symbol={<InlineMath math="a" />}
                    value={a}
                    min={0}
                    max={A_VALUES.length - 1}
                    index={aIndex}
                    onChange={setAIndex}
                    displayValues={A_VALUES}
                    accentClass="accent-red-500"
                    textClass="text-red-300"
                />

                <ParameterSlider
                    symbol={<InlineMath math="p" />}
                    value={p}
                    min={0}
                    max={SHIFT_VALUES.length - 1}
                    index={pIndex}
                    onChange={setPIndex}
                    displayValues={SHIFT_VALUES}
                    accentClass="accent-green-500"
                    textClass="text-green-300"
                />

                <ParameterSlider
                    symbol={<InlineMath math="q" />}
                    value={q}
                    min={0}
                    max={SHIFT_VALUES.length - 1}
                    index={qIndex}
                    onChange={setQIndex}
                    displayValues={SHIFT_VALUES}
                    accentClass="accent-orange-500"
                    textClass="text-orange-300"
                    isLast
                />
            </div>

            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <FunctionGraph
                    type="quadratic"
                    a={a}
                    p={p}
                    q={q}
                />

                <FunctionGraph
                    type="absolute"
                    a={a}
                    p={p}
                    q={q}
                />
            </div>
        </div>
    );
}

type ParameterSliderProps = {
    symbol: React.ReactNode;
    value: number;
    min: number;
    max: number;
    index: number;
    displayValues: number[];
    onChange: (index: number) => void;
    accentClass: string;
    textClass: string;
    isLast?: boolean;
};

function ParameterSlider({
    symbol,
    value,
    min,
    max,
    index,
    displayValues,
    onChange,
    accentClass,
    textClass,
    isLast = false,
}: ParameterSliderProps) {
    return (
        <div
            className={
                isLast
                    ? ""
                    : "mb-5 border-b border-white/10 pb-5"
            }
        >
            <div className="grid items-center gap-3 sm:grid-cols-[40px_1fr_58px]">
                <div
                    className={`text-center text-2xl font-bold italic ${textClass}`}
                >
                    {symbol}
                </div>

                <div>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        step={1}
                        value={index}
                        onChange={(event) =>
                            onChange(Number(event.target.value))
                        }
                        className={`w-full cursor-pointer ${accentClass}`}
                        aria-label={`${symbol} 값 조절`}
                    />

                    <div
                        className="mt-1 grid text-xs text-gray-500"
                        style={{
                            gridTemplateColumns: `repeat(${displayValues.length}, minmax(0, 1fr))`,
                        }}
                    >
                        {displayValues.map((tickValue) => (
                            <span
                                key={`${symbol}-${tickValue}`}
                                className="text-center"
                            >
                                {formatNumber(tickValue)}
                            </span>
                        ))}
                    </div>
                </div>

                <div
                    className={`rounded-lg border border-white/15 bg-black/30 px-2 py-2 text-center text-lg font-bold ${textClass}`}
                >
                    {formatNumber(value)}
                </div>
            </div>
        </div>
    );
};

function LinearInequalityVisualizer() {
    const [playKey, setPlayKey] = useState(0);
    const [step, setStep] = useState(0);

    const replay = () => {
        setStep(0);
        setPlayKey((prev) => prev + 1);
    };

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 1700),
            setTimeout(() => setStep(4), 2400),
            setTimeout(() => setStep(5), 3000),
            setTimeout(() => setStep(6), 3700),
            setTimeout(() => setStep(7), 4500),
            setTimeout(() => setStep(8), 5200),
            setTimeout(() => setStep(9), 5900),
        ];

        return () => timers.forEach(clearTimeout);
    }, [playKey]);

    const LEFT = 60;
    const RIGHT = 520;

    const Y_AXIS_X = 170;
    const X_AXIS_Y = 240;

    const ANSWER_X = 330;
    const ANSWER_Y = X_AXIS_Y;

    const LINE_LEFT_X = 80;
    const LINE_LEFT_Y = 70;
    const LINE_RIGHT_X = 440;
    const LINE_RIGHT_Y = 315;

    const NUMBER_Y = 350;
    const RANGE_Y = 315;

    return (
        <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5">
            <div className="mb-4 flex justify-end">
                <button
                    type="button"
                    onClick={replay}
                    className="rounded-lg border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300 hover:bg-sky-400/20"
                >
                    ▶ 애니메이션 재생
                </button>
            </div>

            <svg
                key={playKey}
                viewBox="0 0 620 430"
                className="h-auto w-full"
                role="img"
                aria-label="-2x+6>0의 그래프와 수직선 표현"
            >
                {step >= 1 && (
                    <>
                        <motion.line
                            x1={Y_AXIS_X}
                            y1="45"
                            x2={Y_AXIS_X}
                            y2="270"
                            stroke="#9ca3af"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.text
                            x={Y_AXIS_X - 12}
                            y="38"
                            fill="#d1d5db"
                            fontSize="16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            y
                        </motion.text>
                    </>
                )}

                {step >= 2 && (
                    <>
                        <motion.line
                            x1={LINE_LEFT_X}
                            y1={LINE_LEFT_Y}
                            x2={LINE_RIGHT_X}
                            y2={LINE_RIGHT_Y}
                            stroke="#6b7280"
                            strokeWidth="4"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.9 }}
                        />

                        <motion.text
                            x="80"
                            y="58"
                            fill="#d1d5db"
                            fontSize="16"
                            fontStyle="italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            y = -2x + 6
                        </motion.text>
                    </>
                )}

                {step >= 3 && (
                    <>
                        <motion.line
                            x1={LEFT}
                            y1={X_AXIS_Y}
                            x2={RIGHT}
                            y2={X_AXIS_Y}
                            stroke="#9ca3af"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.text
                            x={RIGHT + 8}
                            y={X_AXIS_Y + 5}
                            fill="#d1d5db"
                            fontSize="16"
                            fontStyle="italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            x
                        </motion.text>

                        <motion.text
                            x="455"
                            y={X_AXIS_Y - 14}
                            fill="#9ca3af"
                            fontSize="15"
                            fontStyle="italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            y = 0
                        </motion.text>
                    </>
                )}

                {step >= 4 && (
                    <motion.circle
                        cx={ANSWER_X}
                        cy={ANSWER_Y}
                        r="7"
                        fill="#38bdf8"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.25 }}
                        style={{ transformOrigin: `${ANSWER_X}px ${ANSWER_Y}px` }}
                    />
                )}

                {step >= 5 && (
                    <>
                        <motion.circle
                            cx={ANSWER_X}
                            cy={ANSWER_Y}
                            r="11"
                            fill="#111827"
                            stroke="#38bdf8"
                            strokeWidth="4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            style={{ transformOrigin: `${ANSWER_X}px ${ANSWER_Y}px` }}
                        />

                        <motion.text
                            x={ANSWER_X - 7}
                            y={ANSWER_Y + 28}
                            fill="#d1d5db"
                            fontSize="16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            3
                        </motion.text>
                    </>
                )}

                {step >= 6 && (
                    <>
                        <motion.line
                            x1={ANSWER_X}
                            y1={ANSWER_Y}
                            x2={LINE_LEFT_X}
                            y2={LINE_LEFT_Y}
                            stroke="#38bdf8"
                            strokeWidth="7"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.8 }}
                        />

                        <motion.text
                            x="80"
                            y="300"
                            fill="#38bdf8"
                            fontSize="16"
                            fontStyle="italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            x축보다 위에 있는 부분
                        </motion.text>
                    </>
                )}

                {step >= 7 && (
                    <>
                        <motion.line
                            x1={LEFT}
                            y1={NUMBER_Y}
                            x2={RIGHT}
                            y2={NUMBER_Y}
                            stroke="#9ca3af"
                            strokeWidth="2"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.circle
                            cx={ANSWER_X}
                            cy={NUMBER_Y}
                            r="8"
                            fill="#111827"
                            stroke="#38bdf8"
                            strokeWidth="4"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            style={{ transformOrigin: `${ANSWER_X}px ${NUMBER_Y}px` }}
                        />

                        <motion.text
                            x={ANSWER_X - 6}
                            y={NUMBER_Y + 28}
                            fill="#d1d5db"
                            fontSize="16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            3
                        </motion.text>
                    </>
                )}

                {step >= 8 && (
                    <motion.line
                        x1={ANSWER_X}
                        x2={LEFT + 30}
                        y1={NUMBER_Y}
                        y2={NUMBER_Y}
                        stroke="#38bdf8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            y1: [NUMBER_Y, NUMBER_Y, RANGE_Y],
                            y2: [NUMBER_Y, NUMBER_Y, RANGE_Y],
                        }}
                        transition={{
                            pathLength: { duration: 0.6 },
                            y1: { delay: 0.7, duration: 0.6 },
                            y2: { delay: 0.7, duration: 0.6 },
                        }}
                    />
                )}

                {step >= 9 && (
                    <>
                        <motion.line
                            x1={ANSWER_X}
                            x2={ANSWER_X}
                            y1={NUMBER_Y}
                            y2={NUMBER_Y}
                            stroke="#38bdf8"
                            strokeWidth="3"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                y1: RANGE_Y,
                                y2: NUMBER_Y,
                            }}
                            transition={{ duration: 0.6 }}
                        />

                        <motion.text
                            x={ANSWER_X - 40}
                            y="410"
                            fill="#38bdf8"
                            fontSize="24"
                            fontWeight="700"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.4 }}
                        >
                            <tspan fontStyle="italic">x &lt; 3</tspan>
                        </motion.text>
                    </>
                )}
            </svg>
        </div>
    );
};

function NumberLineVisualizer() {
    const [type, setType] = useState<">" | ">=" | "<" | "<=">("<");

    const LEFT = 70;
    const RIGHT = 500;
    const POINT_X = 285;
    const BASE_Y = 170;
    const RANGE_Y = 120;

    const isLeft = type === "<" || type === "<=";
    const isClosed = type === ">=" || type === "<=";

    const rangeX1 = POINT_X;
    const rangeX2 = isLeft ? LEFT + 30 : RIGHT - 30;

    const label =
        type === ">" ? "x > 3" :
            type === ">=" ? "x ≥ 3" :
                type === "<" ? "x < 3" :
                    "x ≤ 3";

    return (
        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
            <div className="grid grid-cols-2 gap-4">
                {[
                    [">", "x>3"],
                    [">=", "x≥3"],
                    ["<", "x<3"],
                    ["<=", "x≤3"],
                ].map(([value, math]) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setType(value as typeof type)}
                        className={`rounded-xl border p-3 text-xl font-semibold transition ${type === value
                            ? "border-sky-400 bg-sky-500/20 text-sky-300"
                            : "border-white/20 bg-black/30 text-gray-200 hover:border-sky-400 hover:bg-sky-500/10"
                            }`}
                    >
                        <InlineMath math={math} />
                    </button>
                ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <svg
                    key={type}
                    viewBox="0 0 600 250"
                    className="h-auto w-full"
                    role="img"
                    aria-label={`${label}의 수직선 표현`}
                >
                    <motion.line
                        x1={LEFT}
                        y1={BASE_Y}
                        x2={RIGHT}
                        y2={BASE_Y}
                        stroke="#9ca3af"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    <motion.circle
                        cx={POINT_X}
                        cy={BASE_Y}
                        r="10"
                        fill={isClosed ? "#38bdf8" : "#111827"}
                        stroke="#38bdf8"
                        strokeWidth="4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.25 }}
                        style={{ transformOrigin: `${POINT_X}px ${BASE_Y}px` }}
                    />

                    <motion.text
                        x={POINT_X - 7}
                        y={BASE_Y + 50}
                        fill="#d1d5db"
                        fontSize="40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        3
                    </motion.text>

                    <motion.line
                        x1={rangeX1}
                        y1={BASE_Y}
                        x2={rangeX2}
                        y2={BASE_Y}
                        stroke="#38bdf8"
                        strokeWidth="5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{
                            pathLength: 1,
                            y1: [BASE_Y, BASE_Y, RANGE_Y],
                            y2: [BASE_Y, BASE_Y, RANGE_Y],
                        }}
                        transition={{
                            pathLength: { delay: 0.9, duration: 0.6 },
                            y1: { delay: 1.6, duration: 0.5 },
                            y2: { delay: 1.6, duration: 0.5 },
                        }}
                    />

                    <motion.line
                        x1={POINT_X}
                        x2={POINT_X}
                        y1={BASE_Y}
                        y2={BASE_Y}
                        stroke="#38bdf8"
                        strokeWidth="5"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            y1: RANGE_Y,
                            y2: BASE_Y,
                        }}
                        transition={{ delay: 1.6, duration: 0.5 }}
                    />
                </svg>
                <div className="mt-4 text-center text-3xl text-sky-300 font-bold">
                    <InlineMath math={label} />
                </div>
            </div>

        </div>
    );
};

function CompoundInequalityVisualizer() {
    type CaseKey = "case1" | "case2" | "case3" | "case4" | "case5" | "case6";
    type InequalityType = ">" | ">=" | "<" | "<=";

    type Condition = {
        value: number;
        type: InequalityType;
        color: string;
    };

    const OPEN_R = 14;
    const CLOSED_R = 8;

    const cases = {
        case1: {
            title: "\\begin{cases}x>-2\\\\x\\le3\\end{cases}",
            answer: "-2<x\\le3",
            first: { value: -2, type: ">", color: "#facc15" },
            second: { value: 3, type: "<=", color: "#38bdf8" },
        },
        case2: {
            title: "\\begin{cases}x\\ge-2\\\\x\\le-2\\end{cases}",
            answer: "x=-2",
            first: { value: -2, type: ">=", color: "#facc15" },
            second: { value: -2, type: "<=", color: "#38bdf8" },
        },
        case3: {
            title: "\\begin{cases}x<-2\\\\x\\ge3\\end{cases}",
            answer: "\\text{해가 없습니다.}",
            first: { value: -2, type: "<", color: "#facc15" },
            second: { value: 3, type: ">=", color: "#38bdf8" },
        },
        case4: {
            title: "\\begin{cases}x<-2\\\\x\\ge-2\\end{cases}",
            answer: "\\text{해가 없습니다.}",
            first: { value: -2, type: "<", color: "#facc15" },
            second: { value: -2, type: ">=", color: "#38bdf8" },
        },
        case5: {
            title: "\\begin{cases}x>-2\\\\x\\ge3\\end{cases}",
            answer: "x\\ge3",
            first: { value: -2, type: ">", color: "#facc15" },
            second: { value: 3, type: ">=", color: "#38bdf8" },
        },
        case6: {
            title: "\\begin{cases}x<-2\\\\x\\le3\\end{cases}",
            answer: "x<-2",
            first: { value: -2, type: "<", color: "#facc15" },
            second: { value: 3, type: "<=", color: "#38bdf8" },
        },
    } as const;

    const [selected, setSelected] = useState<CaseKey>("case1");
    const [playKey, setPlayKey] = useState(0);
    const [step, setStep] = useState(0);

    const current = cases[selected];

    const replay = (key: CaseKey) => {
        setSelected(key);
        setStep(0);
        setPlayKey((prev) => prev + 1);
    };

    useEffect(() => {
        const timers = [
            setTimeout(() => setStep(1), 300),
            setTimeout(() => setStep(2), 1000),
            setTimeout(() => setStep(3), 1800),
            setTimeout(() => setStep(4), 2600),
            setTimeout(() => setStep(5), 3400),
            setTimeout(() => setStep(6), 4300),
        ];

        return () => timers.forEach(clearTimeout);
    }, [playKey]);

    const LEFT = 60;
    const RIGHT = 520;
    const BASE_Y = 190;
    const FIRST_Y = 135;
    const SECOND_Y = 85;

    const GREEN = "#22c55e";

    const getX = (value: number) => {
        if (value === -2) return 210;
        if (value === 3) return 370;
        return 290;
    };

    const isLeft = (type: string) => type === "<" || type === "<=";
    const isClosed = (type: string) => type === ">=" || type === "<=";

    const getRangeEnd = (type: string) => {
        return isLeft(type) ? LEFT + 30 : RIGHT - 30;
    };

    const getOverlap = () => {
        const f = current.first;
        const s = current.second;

        const fLeft = isLeft(f.type);
        const sLeft = isLeft(s.type);

        if (!fLeft && !sLeft) {
            const stronger = f.value > s.value ? f : s;
            return {
                kind: "ray",
                from: getX(stronger.value),
                to: RIGHT - 30,
                leftPoint: stronger.value,
                rightPoint: null,
                leftClosed: isClosed(stronger.type),
                rightClosed: false,
            };
        }

        if (fLeft && sLeft) {
            const stronger = f.value < s.value ? f : s;
            return {
                kind: "ray",
                from: getX(stronger.value),
                to: LEFT + 30,
                leftPoint: null,
                rightPoint: stronger.value,
                leftClosed: false,
                rightClosed: isClosed(stronger.type),
            };
        }

        const lower = !fLeft ? f : s;
        const upper = fLeft ? f : s;

        if (lower.value < upper.value) {
            return {
                kind: "between",
                from: getX(lower.value),
                to: getX(upper.value),
                leftPoint: lower.value,
                rightPoint: upper.value,
                leftClosed: isClosed(lower.type),
                rightClosed: isClosed(upper.type),
            };
        }

        if (lower.value === upper.value && isClosed(lower.type) && isClosed(upper.type)) {
            return {
                kind: "point",
                x: getX(lower.value),
                value: lower.value,
            };
        }

        return { kind: "none" };
    };

    const overlap = getOverlap();

    const renderCondition = (
        condition: Condition,
        y: number,
        stepVisible: number
    ) => {
        const pointX = getX(condition.value);
        const endX = getRangeEnd(condition.type);

        return (
            <>
                {step >= stepVisible && (
                    <>
                        <motion.circle
                            cx={pointX}
                            cy={BASE_Y}
                            r={isClosed(condition.type) ? CLOSED_R : OPEN_R}
                            fill={isClosed(condition.type) ? condition.color : "transparent"}
                            stroke={condition.color}
                            strokeWidth="3"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.25 }}
                            style={{ transformOrigin: `${pointX}px ${BASE_Y}px` }}
                        />

                        <motion.line
                            x1={pointX}
                            x2={endX}
                            y1={BASE_Y}
                            y2={BASE_Y}
                            stroke={condition.color}
                            strokeWidth="3"
                            strokeLinecap="round"
                            initial={{ pathLength: 0 }}
                            animate={{
                                pathLength: 1,
                                y1: [BASE_Y, BASE_Y, y],
                                y2: [BASE_Y, BASE_Y, y],
                            }}
                            transition={{
                                pathLength: { delay: 0.2, duration: 0.6 },
                                y1: { delay: 0.9, duration: 0.5 },
                                y2: { delay: 0.9, duration: 0.5 },
                            }}
                        />

                        <motion.line
                            x1={pointX}
                            x2={pointX}
                            y1={BASE_Y}
                            y2={BASE_Y}
                            stroke={condition.color}
                            strokeWidth="3"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, y1: y, y2: BASE_Y }}
                            transition={{ delay: 0.9, duration: 0.5 }}
                        />
                    </>
                )}
            </>
        );
    };

    const renderOverlap = () => {
        if (step < 5) return null;

        if (overlap.kind === "none") {
            return (
                <motion.text
                    x="220"
                    y="285"
                    fill={GREEN}
                    fontSize="22"
                    fontWeight="700"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                </motion.text>
            );
        }

        if (overlap.kind === "point") {
            return (
                <motion.circle
                    cx={overlap.x}
                    cy={BASE_Y}
                    r={overlap.leftClosed ? CLOSED_R : OPEN_R}
                    fill={GREEN}
                    stroke={GREEN}
                    strokeWidth="4"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ transformOrigin: `${overlap.x}px ${BASE_Y}px` }}
                />
            );
        }

        return (
            <>
                <motion.line
                    x1={overlap.from}
                    x2={overlap.to}
                    y1={FIRST_Y}
                    y2={FIRST_Y}
                    stroke={GREEN}
                    strokeWidth="7"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                <motion.line
                    x1={overlap.from}
                    x2={overlap.to}
                    y1={SECOND_Y}
                    y2={SECOND_Y}
                    stroke={GREEN}
                    strokeWidth="7"
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                {typeof overlap.leftPoint === "number" && (
                    <motion.circle
                        cx={getX(overlap.leftPoint)}
                        cy={BASE_Y}
                        r={overlap.leftClosed ? CLOSED_R : OPEN_R}
                        fill={overlap.leftClosed ? GREEN : "#111827"}
                        stroke={GREEN}
                        strokeWidth="4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ transformOrigin: `${getX(overlap.leftPoint)}px ${BASE_Y}px` }}
                    />
                )}

                {typeof overlap.rightPoint === "number" && (
                    <motion.circle
                        cx={getX(overlap.rightPoint)}
                        cy={BASE_Y}
                        r={overlap.rightClosed ? CLOSED_R : OPEN_R}
                        fill={overlap.rightClosed ? GREEN : "#111827"}
                        stroke={GREEN}
                        strokeWidth="4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ transformOrigin: `${getX(overlap.rightPoint)}px ${BASE_Y}px` }}
                    />
                )}
            </>
        );
    };

    return (
        <div className="mt-8 grid gap-6 lg:grid-cols-[300px_1fr]">
            <div className="grid grid-cols-2 gap-3">
                {(Object.keys(cases) as CaseKey[]).map((key, index) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => replay(key)}
                        className={`flex h-28 items-center justify-center rounded-xl border p-3 text-lg font-semibold transition ${selected === key
                            ? "border-sky-400 bg-sky-500/10 text-sky-300"
                            : "border-white/20 bg-black/30 text-gray-200 hover:border-sky-400 hover:bg-sky-500/10"
                            }`}
                    >
                        <div className="text-center">
                            <p className="mb-1 text-sm text-gray-400">예시 {index + 1}</p>
                            <InlineMath math={cases[key].title} />
                        </div>
                    </button>
                ))}
            </div>

            <div className="rounded-xl border border-white/10 bg-black/30 p-6">
                <svg
                    key={playKey}
                    viewBox="0 0 580 330"
                    className="h-auto w-full"
                    role="img"
                    aria-label="연립일차부등식의 공통부분 표현"
                >
                    <motion.line
                        x1={LEFT}
                        y1={BASE_Y}
                        x2={RIGHT}
                        y2={BASE_Y}
                        stroke="#9ca3af"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5 }}
                    />

                    <motion.text x={getX(-2) - 20} y={BASE_Y + 60} fill="#d1d5db" fontSize="44">
                        -2
                    </motion.text>

                    <motion.text x={getX(3) - 7} y={BASE_Y + 60} fill="#d1d5db" fontSize="44">
                        3
                    </motion.text>

                    {renderCondition(current.first, FIRST_Y, 1)}
                    {renderCondition(current.second, SECOND_Y, 3)}
                    {renderOverlap()}
                </svg>

                <div className="mt-4 min-h-[48px] text-center text-2xl font-bold">
                    {step >= 6 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className={
                                current.answer.includes("해가 없습니다")
                                    ? "text-gray-200"
                                    : "text-green-400"
                            }
                        >
                            <InlineMath math={current.answer} />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default function LinearInequalityPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.4 일차부등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    일차식으로 이루어진 부등식을 <strong>일차부등식</strong>이라고 합니다.
                    일차부등식은 대수적으로 풀 수도 있고, 그래프나 수직선을 이용하여 해석할 수도 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시
                    </h3>

                    <BlockMath math="-2x+6>0" />

                    <p className="leading-8 text-gray-300">
                        이 부등식을 여러 가지 방법으로 풀어 봅시다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        대수적 풀이
                    </h3>

                    <p className="leading-8 text-gray-300">
                        구하려는 대상은 좌변에, 나머지는 우변에 두도록 이항하여 정리합니다.
                    </p>

                    <BlockMath math="-2x+6>0" />
                    <BlockMath math="-2x>-6" />

                    <p className="leading-8 text-gray-300">
                        양변을 <InlineMath math="-2" />로 나누면 음수로 나누는 것이므로
                        부등호의 방향이 바뀝니다.
                    </p>

                    <BlockMath math="x<3" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        해석적 풀이
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식 <InlineMath math="-2x+6>0" />은
                        두 그래프 <InlineMath math="y=-2x+6" />와 <InlineMath math="y=0" />을 비교하는 문제로 볼 수 있습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="-2x+6>0" />이라는 것은 <InlineMath math="y=-2x+6" />의 그래프가 <InlineMath math="y=0" />, 즉 <InlineMath math="x" />축보다
                        위에 있다는 뜻입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        직선 <InlineMath math="y=-2x+6" />은 <InlineMath math="x=3" />에서 <InlineMath math="x" />축과 만나고,
                        내려가는 직선이므로 <InlineMath math="x=3" />의 왼쪽에서 <InlineMath math="x" />축보다 위에 있습니다.
                    </p>

                    <BlockMath math="x<3" />
                    <LinearInequalityVisualizer />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        수직선에서 표현
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식의 해는 수직선 위에서 범위로 표현한다.
                        아래 버튼을 눌러
                        <InlineMath math="x>3" />,{" "}
                        <InlineMath math="x\ge3" />,{" "}
                        <InlineMath math="x<3" />,{" "}
                        <InlineMath math="x\le3" />
                        의 표현 방법을 비교해 봅시다.
                    </p>

                    <NumberLineVisualizer />

                    <p className="mt-8 leading-8 text-gray-300">
                        수직선 위에 바로 해를 표시하면 수직선과 겹쳐 알아보기 어렵습니다.
                        따라서 해를 나타내는 선을 수직선보다 약간 위에 그려
                        해가 되는 범위를 표시합니다.
                    </p>

                    <ul className="mt-4 space-y-3 leading-8 text-gray-300">
                        <li>• 아래 선 : 수직선</li>
                        <li>• 위 선 : 해가 되는 범위</li>
                        <li>• 세로선 : 기준이 되는 수를 가리키는 표시</li>
                        <li>• ○ : 기준값을 포함하지 않음</li>
                        <li>• ● : 기준값을 포함함</li>
                    </ul>
                </div>

                {/* ========================= 3.4 일차부등식의 일반해 ========================= */}

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차부등식의 일반해
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일차부등식 <InlineMath math="ax+b>0" />의 해는 문자{" "}
                        <InlineMath math="a" />의 부호에 따라 다음과 같이 결정됩니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-6">
                        <div className="space-y-4 [&_.katex-display]:!text-left">
                            <BlockMath math="a>0\;:\;x>-\frac{b}{a}" />
                            <BlockMath math="a<0\;:\;x<-\frac{b}{a}" />
                            <BlockMath math="a=0,\;b>0\;:\;\text{모든 실수}" />
                            <BlockMath math="a=0,\;b\le0\;:\;\text{해가 없다}" />
                        </div>
                    </div>

                    <p className="mt-6 leading-8 text-gray-300">
                        부등식을 풀 때에는 이항하는 과정까지는 방정식과 같습니다.
                        그러나 양변을 문자 <InlineMath math="a" />로 나누는 과정에서는 <InlineMath math="a" />의 부호에 따라 부등호의 방향이 달라지므로
                        항상 <InlineMath math="a" />의 부호를 먼저 확인해야 합니다.
                    </p>
                </div>

                {/* ========================= 부등식을 읽으면서 해석하기 ========================= */}

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        부등식을 읽으면서 해석하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일차부등식은 항상 <b>변수 - 부등호 - 상수</b>의 형태로 정리합니다.
                        이렇게 정리하면 식을 읽는 것만으로도 해의 의미를 자연스럽게
                        해석할 수 있습니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-6">
                        <div className="space-y-4 [&_.katex-display]:!text-left">
                            <BlockMath math="x>3\;:\;\text{『}x\text{는 3보다 크다』}" />
                            <BlockMath math="x<3\;:\;\text{『}x\text{는 3보다 작다』}" />
                            <BlockMath math="x\ge3\;:\;\text{『}x\text{는 3 이상이다』}" />
                            <BlockMath math="x\le3\;:\;\text{『}x\text{는 3 이하이다』}" />
                        </div>
                    </div>

                    <p className="mt-6 leading-8 text-gray-300">
                        수직선에 해를 나타낼 때에는 부등호를 해의 방향을 알려 주는
                        화살표처럼 생각하면 됩니다.
                        따라서 <InlineMath math="x>3" />은 기준값보다 큰 오른쪽 범위를, <InlineMath math="x<3" />은 기준값보다 작은 왼쪽 범위를
                        나타냅니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-sky-500/30 bg-sky-500/10 p-5">
                        <p className="leading-8 text-sky-200">
                            <b>기억하기</b><br />
                            일차부등식은 항상 <b>변수 - 부등호 - 상수</b>의 형태로
                            정리한 후 읽습니다.
                            문법에 맞게 정리하면 식을 읽는 것만으로도 해를 해석할 수
                            있으며, 수직선에서는 부등호가 가리키는 방향으로 해를
                            표시하면 됩니다.
                        </p>
                    </div>
                </div>

                {/* ========================= 예제 1 ========================= */}

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="(2a-b)x+3a-2b<0" />

                        <p className="my-4 leading-8 text-gray-300">
                            의 해가
                        </p>

                        <BlockMath math="x<-3" />

                        <p className="mt-4 leading-8 text-gray-300">
                            일 때, 다음 부등식의 해를 구하시오.
                        </p>

                        <BlockMath math="(4a-b)x+a-3b<0" />
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                첫 번째 부등식의 해가 <InlineMath math="x<-3" />
                                이므로 일반해에 의해 <InlineMath math="2a-b>0" />
                                이고 경계값은 <InlineMath math="-3" />
                                입니다.
                            </p>

                            <BlockMath math="-\frac{3a-2b}{2a-b}=-3" />

                            <BlockMath math="3a-2b=3(2a-b)" />

                            <BlockMath math="3a-2b=6a-3b" />

                            <BlockMath math="b=3a" />

                            <p>
                                이를 <InlineMath math="2a-b>0" />
                                에 대입하면
                            </p>

                            <BlockMath math="2a-3a>0" />

                            <BlockMath math="-a>0" />

                            <BlockMath math="a<0" />

                            <p>
                                이제 <InlineMath math="b=3a" />
                                를 두 번째 부등식에 대입합니다.
                            </p>

                            <BlockMath math="(4a-b)x+a-3b<0" />

                            <BlockMath math="ax-8a<0" />

                            <BlockMath math="a(x-8)<0" />

                            <p>
                                <InlineMath math="a<0" />
                                이므로 음수로 나누면 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="x-8>0" />

                            <BlockMath math="\boxed{x>8}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식 <InlineMath math="(a+b)x-2b\le0" />
                            의 해가 <InlineMath math="x\ge-2" />
                            일 때, <InlineMath math="bx-4a\ge0" />
                            의 해를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <p>
                                부등식 <InlineMath math="(a+b)x-2b\le0" />
                                의 해가 <InlineMath math="x\ge-2" />
                                이므로 <InlineMath math="a+b<0" />
                                이고 경계값은 <InlineMath math="-2" />
                                입니다.
                            </p>

                            <BlockMath math="\frac{2b}{a+b}=-2" />

                            <BlockMath math="2b=-2(a+b)" />

                            <BlockMath math="2b=-2a-2b" />

                            <BlockMath math="a=-2b" />

                            <p>
                                또한 <InlineMath math="a+b<0" />
                                이므로
                            </p>

                            <BlockMath math="-2b+b<0" />

                            <BlockMath math="-b<0" />

                            <BlockMath math="b>0" />

                            <p>
                                이제 <InlineMath math="a=-2b" />
                                를 두 번째 부등식에 대입합니다.
                            </p>

                            <BlockMath math="bx-4a\ge0" />

                            <BlockMath math="bx+8b\ge0" />

                            <BlockMath math="b(x+8)\ge0" />

                            <p>
                                <InlineMath math="b>0" />
                                이므로 양수로 나누어도 부등호의 방향은 바뀌지 않습니다.
                            </p>

                            <BlockMath math="x+8\ge0" />

                            <BlockMath math="\boxed{x\ge-8}" />
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식 <InlineMath math="ax-10\ge2x-5a" />
                            를 푸시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                먼저 <InlineMath math="x" />에 관한 항을 한쪽으로,
                                상수항을 다른 쪽으로 이항합니다.
                            </p>

                            <BlockMath math="ax-2x\ge10-5a" />

                            <BlockMath math="(a-2)x\ge10-5a" />

                            <p>
                                이제 <InlineMath math="a-2" />의 부호에 따라 경우를 나눕니다.
                            </p>

                            <hr className="border-white/10" />

                            <h4 className="text-lg font-bold text-white">
                                (1) <InlineMath math="a-2>0" /> 인 경우
                            </h4>

                            <BlockMath math="x\ge\frac{10-5a}{a-2}" />

                            <BlockMath math="x\ge -5" />


                            <BlockMath math="a>2" />

                            <hr className="border-white/10" />

                            <h4 className="text-lg font-bold text-white">
                                (2) <InlineMath math="a-2<0" /> 인 경우
                            </h4>

                            <p>
                                음수로 나누므로 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="x\le\frac{10-5a}{a-2}" />

                            <BlockMath math="x\le -5" />

                            <BlockMath math="a<2" />

                            <hr className="border-white/10" />

                            <h4 className="text-lg font-bold text-white">
                                (3) <InlineMath math="a-2=0" /> 인 경우
                            </h4>

                            <BlockMath math="0\cdot x\ge0" />

                            <p>
                                항상 성립하므로 모든 실수가 해입니다.
                            </p>

                            <hr className="border-white/10" />

                            <h4 className="text-lg font-bold text-white">
                                따라서
                            </h4>

                            <div className="space-y-3 [&_.katex-display]:!text-left">
                                <BlockMath math="a>2\;:\;x\ge-5" />
                                <BlockMath math="a<2\;:\;x\le-5" />
                                <BlockMath math="a=2\;:\;\text{모든 실수}" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="a^{2}x-a\ge9x+2" />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 해가 모든 실수일 때, 상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                부등식을 정리하면
                            </p>

                            <BlockMath math="(a^{2}-9)x\ge a+2" />

                            <p>
                                이 됩니다.
                            </p>

                            <p>
                                해가 모든 실수가 되려면 문자 <InlineMath math="x" />의 계수가 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="a^{2}-9=0" />

                            <BlockMath math="a=\pm3" />

                            <p>
                                각각 확인합니다.
                            </p>

                            <h4 className="text-lg font-semibold text-white">
                                (1)&nbsp;<InlineMath math="a=3" />
                            </h4>

                            <BlockMath math="0\cdot x\ge5" />

                            <BlockMath math="0\ge5" />

                            <p>
                                이는 성립하지 않으므로 해가 없습니다.
                            </p>

                            <h4 className="text-lg font-semibold text-white">
                                (2)&nbsp;<InlineMath math="a=-3" />
                            </h4>

                            <BlockMath math="0\cdot x\ge-1" />

                            <BlockMath math="0\ge-1" />

                            <p>
                                항상 성립하므로 해는 모든 실수입니다.
                            </p>

                            <BlockMath math="\boxed{a=-3}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <ul className="space-y-3 leading-8 text-gray-300">
                        <li>• 일차부등식은 일차식으로 이루어진 부등식입니다.</li>
                        <li>• 대수적 풀이에서는 이항 후 계수로 나누어 풉니다.</li>
                        <li>• 음수로 나누면 부등호의 방향이 바뀝니다.</li>
                        <li>• 해석적 풀이는 그래프가 위에 있는 범위를 찾는 방법입니다.</li>
                        <li>• 수직선에서는 기준값의 포함 여부와 방향을 함께 표시합니다.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.5 연립일차부등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    두 개 이상의 일차부등식을 동시에 만족하는 범위를 구하는 부등식을
                    <strong> 연립일차부등식</strong>이라고 합니다.
                    연립일차부등식은 각 부등식의 해를 수직선에 나타낸 뒤,
                    모든 해가 동시에 겹치는 공통부분을 찾습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        연립일차부등식의 해
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식이 2개이면 높낮이가 서로 다른 두 개의 선으로 나타내고,
                        두 선이 동시에 겹치는 부분이 해가 됩니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        부등식이 3개이면 높낮이가 서로 다른 세 개의 선으로 나타내고,
                        세 선이 동시에 겹치는 부분이 해가 됩니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-sky-500/30 bg-sky-500/10 p-5">
                        <p className="leading-8 text-sky-200">
                            <b>핵심</b><br />
                            연립일차부등식의 해는 각각의 해를 모두 만족하는
                            <b> 공통부분</b>입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        공통부분의 여러 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 여섯 가지 경우를 수직선에서 비교해 봅니다.
                    </p>

                    <CompoundInequalityVisualizer />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        부등식은 건너서 식을 만들면 안 됩니다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        여러 식이 한 줄로 연결되어 있을 때, 등식과 부등식은 나누는 방법이 다릅니다.
                    </p>

                    <div className="mt-6 rounded-xl bg-black/30 p-5">
                        <h4 className="mb-3 text-lg font-bold text-white">
                            등식의 경우
                        </h4>

                        <BlockMath math="A=B=C" />

                        <p className="leading-8 text-gray-300">
                            이 식은 세 대상이 모두 같다는 뜻입니다.
                            따라서 다음 세 식 중 두 개를 선택하여 연립방정식을 만들 수 있습니다.
                        </p>

                        <div className="mt-4 space-y-3 [&_.katex-display]:!text-left">
                            <BlockMath math="A=B,\quad A=C" />
                            <BlockMath math="A=B,\quad B=C" />
                            <BlockMath math="A=C,\quad B=C" />
                        </div>

                        <p className="mt-4 leading-8 text-gray-300">
                            등식은 같은 대상을 연결하므로 건너서 식을 만들어도 의미가 유지됩니다.
                        </p>
                    </div>

                    <div className="mt-6 rounded-xl bg-black/30 p-5">
                        <h4 className="mb-3 text-lg font-bold text-white">
                            부등식의 경우
                        </h4>

                        <BlockMath math="A<B<C" />

                        <p className="leading-8 text-gray-300">
                            이 식은 왼쪽에서 오른쪽으로 순서가 정해져 있다는 뜻입니다.
                            따라서 반드시 다음 두 부등식으로만 나누어야 합니다.
                        </p>

                        <BlockMath math="A<B,\quad B<C" />

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="A<C" />도 참이지만,
                            <InlineMath math="A<B<C" />를 푸는 데 필요한 조건을 모두 담고 있지는 않습니다.
                            중간에 있는 <InlineMath math="B" />와의 관계가 사라지기 때문입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 부등식은 건너서 식을 만들지 않고,
                            이웃한 두 대상끼리 차례대로 나누어 해석해야 합니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            연립부등식
                        </p>

                        <BlockMath math="\begin{cases}5x\ge2x+6\\x-16\le-3x\end{cases}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 모든 정수 <InlineMath math="x" />의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                첫 번째 부등식을 풀면
                            </p>

                            <BlockMath math="5x\ge2x+6" />

                            <BlockMath math="3x\ge6" />

                            <BlockMath math="x\ge2" />

                            <p>
                                두 번째 부등식을 풀면
                            </p>

                            <BlockMath math="x-16\le-3x" />

                            <BlockMath math="4x\le16" />

                            <BlockMath math="x\le4" />

                            <p>
                                따라서 연립부등식의 해는 두 부등식의 공통부분이므로
                            </p>

                            <BlockMath math="2\le x\le4" />

                            <p>
                                이를 만족하는 정수는
                            </p>

                            <BlockMath math="x=2,\;3,\;4" />

                            <p>
                                따라서 모든 정수의 값의 합은
                            </p>

                            <BlockMath math="2+3+4=9" />

                            <BlockMath math="\boxed{9}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            연립부등식
                        </p>

                        <BlockMath math="\begin{cases}\dfrac{2x+1}{3}\le\dfrac{3x+2}{2}+1\\0.4x+0.8>0.5(x+1)\end{cases}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 모든 정수 <InlineMath math="x" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <p>첫 번째 부등식을 풀면</p>

                            <BlockMath math="\dfrac{2x+1}{3}\le\dfrac{3x+2}{2}+1" />
                            <BlockMath math="2(2x+1)\le3(3x+2)+6" />
                            <BlockMath math="4x+2\le9x+12" />
                            <BlockMath math="-10\le5x" />
                            <BlockMath math="x\ge-2" />

                            <p>두 번째 부등식을 풀면</p>

                            <BlockMath math="0.4x+0.8>0.5(x+1)" />
                            <BlockMath math="0.4x+0.8>0.5x+0.5" />
                            <BlockMath math="0.3>0.1x" />
                            <BlockMath math="x<3" />

                            <p>
                                따라서 연립부등식의 해는 두 부등식의 공통부분이므로
                            </p>

                            <BlockMath math="-2\le x<3" />

                            <p>이를 만족하는 정수는</p>

                            <BlockMath math="x=-2,\;-1,\;0,\;1,\;2" />

                            <p>따라서 정수의 개수는</p>

                            <BlockMath math="\boxed{5}" />
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="\frac{7x-2}{6}\le\frac{3x+2}{3}\le3x" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 실수 <InlineMath math="x" />의 최댓값과 최솟값의 곱을
                            구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                부등식은 건너서 식을 만들지 않고 인접한 두 부등식으로 나누어 풉니다.
                            </p>

                            <BlockMath math="\frac{7x-2}{6}\le\frac{3x+2}{3}" />

                            <BlockMath math="7x-2\le2(3x+2)" />

                            <BlockMath math="7x-2\le6x+4" />

                            <BlockMath math="x\le6" />

                            <p>
                                다음 부등식을 풉니다.
                            </p>

                            <BlockMath math="\frac{3x+2}{3}\le3x" />

                            <BlockMath math="3x+2\le9x" />

                            <BlockMath math="2\le6x" />

                            <BlockMath math="x\ge\frac13" />

                            <p>
                                따라서 연립부등식의 해는 두 부등식의 공통부분이므로
                            </p>

                            <BlockMath math="\frac13\le x\le6" />

                            <p>
                                최솟값은 <InlineMath math="\frac13" />,
                                최댓값은 <InlineMath math="6" />입니다.
                            </p>

                            <p>
                                따라서 최댓값과 최솟값의 곱은
                            </p>

                            <BlockMath math="6\times\frac13=2" />

                            <BlockMath math="\boxed{2}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            연립부등식
                        </p>

                        <BlockMath
                            math={`
\\left\\{
\\begin{array}{l}
\\dfrac{3(x+2)}{10}\\le\\dfrac{x+4}{5}\\\\[10pt]
\\dfrac{x-3}{2}<\\dfrac{7x-18}{8}
\\end{array}
\\right.
`}
                        />
                        <p className="mt-4 leading-8 text-gray-300">
                            의 해를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <p>첫 번째 부등식을 풀면</p>

                            <BlockMath math="\dfrac{3(x+2)}{10}\le\dfrac{x+4}{5}" />
                            <BlockMath math="3(x+2)\le2(x+4)" />
                            <BlockMath math="3x+6\le2x+8" />
                            <BlockMath math="x\le2" />

                            <p>두 번째 부등식을 풀면</p>

                            <BlockMath math="\dfrac{x-3}{2}<\dfrac{7x-18}{8}" />
                            <BlockMath math="4(x-3)<7x-18" />
                            <BlockMath math="4x-12<7x-18" />
                            <BlockMath math="6<3x" />
                            <BlockMath math="x>2" />

                            <p>
                                따라서 연립부등식의 해는
                            </p>

                            <BlockMath math="\begin{cases}x\le2\\x>2\end{cases}" />

                            <p>
                                두 범위를 동시에 만족하는 실수는 없습니다.
                            </p>

                            <BlockMath math="\boxed{\text{해가 없다}}" />
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

                        <BlockMath math="5x+a\le7x+3<2(x+2b)" />

                        <p className="my-4 leading-8 text-gray-300">
                            의 해가
                        </p>

                        <BlockMath math="-4\le x<5" />

                        <p className="mt-4 leading-8 text-gray-300">
                            일 때, 상수 <InlineMath math="a,\;b" />에 대하여 <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                부등식은 건너서 식을 만들지 않고 두 부등식으로 나누어 풉니다.
                            </p>

                            <BlockMath math="5x+a\le7x+3" />

                            <BlockMath math="a-3\le2x" />

                            <BlockMath math="\frac{a-3}{2}\le x" />

                            <p>
                                해가 <InlineMath math="-4\le x" />이므로
                            </p>

                            <BlockMath math="\frac{a-3}{2}=-4" />

                            <BlockMath math="a=-5" />

                            <p>
                                다음 부등식을 풉니다.
                            </p>

                            <BlockMath math="7x+3<2(x+2b)" />

                            <BlockMath math="5x<4b-3" />

                            <BlockMath math="x<\frac{4b-3}{5}" />

                            <p>
                                해가 <InlineMath math="x<5" />이므로
                            </p>

                            <BlockMath math="\frac{4b-3}{5}=5" />

                            <BlockMath math="4b=28" />

                            <BlockMath math="b=7" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b=-5+7=2" />

                            <BlockMath math="\boxed{2}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 연립부등식
                        </p>

                        <BlockMath math="\begin{cases}2x+a\ge3x+6\\2x+1\le11x+b\end{cases}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 해가 <InlineMath math="x=-1" />일 때, 두 상수 <InlineMath math="a,\;b" />에 대하여 <InlineMath math="a+b" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                첫 번째 부등식을 풀면
                            </p>

                            <BlockMath math="2x+a\ge3x+6" />

                            <BlockMath math="a-6\ge x" />

                            <BlockMath math="x\le a-6" />

                            <p>
                                해의 범위가 <InlineMath math="x=-1" />뿐이므로
                            </p>

                            <BlockMath math="a-6=-1" />

                            <BlockMath math="a=5" />

                            <p>
                                두 번째 부등식을 풀면
                            </p>

                            <BlockMath math="2x+1\le11x+b" />

                            <BlockMath math="1-b\le9x" />

                            <BlockMath math="\frac{1-b}{9}\le x" />

                            <p>
                                해의 범위가 <InlineMath math="x=-1" />뿐이므로
                            </p>

                            <BlockMath math="\frac{1-b}{9}=-1" />

                            <BlockMath math="1-b=-9" />

                            <BlockMath math="b=10" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a+b=5+10=15" />

                            <BlockMath math="\boxed{15}" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <ul className="space-y-3 leading-8 text-gray-300">
                        <li>• 연립일차부등식은 두 개 이상의 일차부등식을 동시에 만족하는 범위를 구하는 부등식입니다.</li>
                        <li>• 각 부등식의 해를 따로 구한 뒤 수직선에 나타냅니다.</li>
                        <li>• 모든 선이 동시에 겹치는 공통부분이 연립일차부등식의 해입니다.</li>
                        <li>• 공통부분이 없으면 해가 없습니다.</li>
                    </ul>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    3.6 등호를 넣어야 해? 안 넣어야 해?
                </h2>

                <p className="leading-8 text-gray-300">
                    부등식의 해가 특정한 조건을 만족하도록 하는
                    미지수의 범위를 구하는 문제가 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    이러한 문제에서는 부등호에 등호가 있는지 없는지를
                    따로 외우려고 하면 혼동하기 쉽습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    먼저 답이 되는 범위를 찾고, 경계값을 넣었을 때
                    문제의 조건이 성립하는지를 읽어서 등호를 결정합니다.
                </p>

                {/* 대표적인 문제 유형 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-5 text-2xl font-bold">
                        대표적인 문제 유형
                    </h3>

                    <div className="grid gap-3 sm:grid-cols-2">
                        <div className="rounded-xl bg-black/40 p-4 text-gray-300">
                            해가 없도록 하는 조건
                        </div>

                        <div className="rounded-xl bg-black/40 p-4 text-gray-300">
                            공통부분이 생기도록 하는 조건
                        </div>

                        <div className="rounded-xl bg-black/40 p-4 text-gray-300">
                            정수해의 개수가 일정하도록 하는 조건
                        </div>

                        <div className="rounded-xl bg-black/40 p-4 text-gray-300">
                            정수해의 합이 일정하도록 하는 조건
                        </div>

                        <div className="rounded-xl bg-black/40 p-4 text-gray-300 sm:col-span-2">
                            특정 정수를 포함하도록 하는 조건
                        </div>
                    </div>
                </div>

                {/* 공통 풀이 구조 */}
                <div className="mt-8 rounded-xl border border-sky-500/30 bg-sky-500/5 p-6">
                    <h3 className="mb-5 text-2xl font-bold text-sky-300">
                        모든 문제는 같은 순서로 풉니다
                    </h3>

                    <div className="space-y-4">
                        <div className="flex gap-4 rounded-xl bg-black/30 p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-bold text-black">
                                1
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    정확히 아는 부등식을 먼저 그립니다.
                                </p>

                                <p className="mt-2 leading-7 text-gray-300">
                                    미지수가 들어 있지 않아 범위가 확실하게 정해진
                                    부등식을 먼저 수직선에 나타냅니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-xl bg-black/30 p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-bold text-black">
                                2
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    미지수가 포함된 경계를 답이 되는 자리에 둡니다.
                                </p>

                                <p className="mt-2 leading-7 text-gray-300">
                                    문제의 조건을 만족하려면 움직이는 경계가
                                    어느 두 값 사이에 있어야 하는지 찾습니다.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-xl border border-yellow-500/40 bg-yellow-500/10 p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 font-bold text-black">
                                3
                            </div>

                            <div>
                                <p className="font-bold text-yellow-300">
                                    경계값을 넣고 문장을 완성하여 읽습니다.
                                </p>

                                <p className="mt-2 leading-7 text-gray-300">
                                    미지수가 포함된 경계가 실제 숫자와 같다고 생각하고,
                                    문제에 주어진 조건이 성립하는지를 확인합니다.
                                </p>

                                <div className="mt-4 rounded-xl bg-black/40 p-4">
                                    <p className="leading-7 text-gray-300">
                                        조건이 성립하면
                                        <span className="mx-2 font-bold text-yellow-300">
                                            등호를 넣습니다.
                                        </span>
                                    </p>

                                    <p className="mt-2 leading-7 text-gray-300">
                                        조건이 성립하지 않으면
                                        <span className="mx-2 font-bold text-yellow-300">
                                            등호를 넣지 않습니다.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 rounded-xl bg-black/30 p-4">
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-500 font-bold text-black">
                                4
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    완성된 부등식을 풉니다.
                                </p>

                                <p className="mt-2 leading-7 text-gray-300">
                                    등호까지 결정된 부등식을 풀어
                                    미지수의 최종 범위를 구합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 핵심 문장 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        등호를 먼저 결정하지 않습니다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등호에 등호가 있는지 없는지를 보고
                        답의 등호를 기계적으로 결정하면 안 됩니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        경계값을 넣었을 때 문제의 조건이 성립하는지를
                        문장으로 완성하여 읽은 뒤 등호를 결정합니다.
                    </p>

                    <p className="mt-4 font-semibold text-white">
                        등호는 외워서 붙이는 것이 아니라,
                        조건을 읽은 결과로 붙습니다.
                    </p>
                </div>

                {/* 기본 예제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            연립부등식
                        </p>

                        <BlockMath
                            math={`
\\left\\{
\\begin{aligned}
x&>-2\\\\[6pt]
x&\\le k+1
\\end{aligned}
\\right.
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족하는 정수 <InlineMath math="x" />의 개수가 <InlineMath math="5" />개일 때, <InlineMath math="k" />의 범위를 구합니다.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <div>
                                <p className="font-semibold text-white">
                                    1단계 : 정확히 아는 부등식을 먼저 봅니다.
                                </p>

                                <BlockMath math="x>-2" />

                                <p>
                                    따라서 해가 될 수 있는 정수는
                                </p>

                                <BlockMath math="-1,\;0,\;1,\;2,\;3,\;4,\;\cdots" />
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    2단계 : 정수해가 5개가 되도록 경계를 둡니다.
                                </p>

                                <p>
                                    정수해가 5개이면 다음 다섯 정수가 포함되어야 합니다.
                                </p>

                                <BlockMath math="-1,\;0,\;1,\;2,\;3" />

                                <p>
                                    따라서 움직이는 오른쪽 경계 <InlineMath math="k+1" />은 <InlineMath math="3" />과 <InlineMath math="4" /> 사이에 있어야 합니다.
                                </p>

                                <BlockMath math="3\quad k+1\quad 4" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-black/30 p-5">
                                <p className="font-bold text-yellow-300">
                                    3단계 : 경계값을 넣고 문장을 읽습니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-white/5 p-4">
                                    <BlockMath math="k+1=3" />

                                    <p>
                                        이때 연립부등식은
                                    </p>

                                    <BlockMath
                                        math={`
\\left\\{
\\begin{aligned}
x&>-2\\\\[6pt]
x&\\le3
\\end{aligned}
\\right.
`}
                                    />

                                    <p>
                                        이고 정수해는
                                    </p>

                                    <BlockMath math="-1,\;0,\;1,\;2,\;3" />

                                    <p>
                                        입니다. 정수해가 5개이므로 조건이 성립합니다.
                                        따라서 <InlineMath math="3" />에는 등호를 넣습니다.
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl bg-white/5 p-4">
                                    <BlockMath math="k+1=4" />

                                    <p>
                                        이때 연립부등식은
                                    </p>

                                    <BlockMath
                                        math={`
\\left\\{
\\begin{aligned}
x&>-2\\\\[6pt]
x&\\le4
\\end{aligned}
\\right.
`}
                                    />

                                    <p>
                                        이고 정수해는
                                    </p>

                                    <BlockMath math="-1,\;0,\;1,\;2,\;3,\;4" />

                                    <p>
                                        입니다. 정수해가 6개이므로 조건이 성립하지 않습니다.
                                        따라서 <InlineMath math="4" />에는 등호를 넣지 않습니다.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    4단계 : 완성된 부등식을 풉니다.
                                </p>

                                <BlockMath math="3\le k+1<4" />

                                <p>
                                    각 변에서 <InlineMath math="1" />을 빼면
                                </p>

                                <BlockMath math="2\le k<3" />

                                <p>
                                    따라서 구하는 범위는
                                </p>

                                <BlockMath math="\boxed{2\le k<3}" />
                            </div>
                        </div>
                        {/* 읽기 연습 */}
                        <div className="mt-8 rounded-xl bg-white/10 p-6">
                            <h3 className="mb-4 text-2xl font-bold">
                                문장을 완성해서 읽기
                            </h3>

                            <p className="leading-8 text-gray-300">
                                경계값에서는 다음과 같이 반드시 문제의 문장을
                                완성하여 읽습니다.
                            </p>

                            <div className="mt-5 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl bg-black/40 p-5">
                                    <BlockMath math="k+1=3" />

                                    <p className="text-center leading-7 text-gray-300">
                                        정수해의 개수가 5개가 됩니까?
                                    </p>

                                    <p className="mt-3 text-center font-bold text-emerald-300">
                                        됩니다 → 등호를 넣습니다.
                                    </p>
                                </div>

                                <div className="rounded-xl bg-black/40 p-5">
                                    <BlockMath math="k+1=4" />

                                    <p className="text-center leading-7 text-gray-300">
                                        정수해의 개수가 5개가 됩니까?
                                    </p>

                                    <p className="mt-3 text-center font-bold text-rose-300">
                                        되지 않습니다 → 등호를 넣지 않습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>

                {/* 예제 1 */}
                <div className="mt-10 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 연립부등식
                        </p>

                        <BlockMath
                            math={`
\\left\\{
\\begin{aligned}
\\frac{x}{3}-\\frac54
&\\le
\\frac{x}{6}-\\frac{a}{12}
\\\\[8pt]
7x+13
&\\le
3(4x-1)
\\end{aligned}
\\right.
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 정수인 해가 <InlineMath math="4, 5, 6" />
                            뿐일 때,
                            정수 <InlineMath math="a" />
                            의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-8 leading-8 text-gray-300">

                            {/* Step1 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    1단계 : 정확히 아는 부등식을 먼저 풉니다.
                                </h4>

                                <BlockMath math="7x+13\le3(4x-1)" />

                                <BlockMath math="7x+13\le12x-3" />

                                <BlockMath math="16\le5x" />

                                <BlockMath math="x\ge\dfrac{16}{5}" />

                                <p>
                                    따라서 정수해는
                                </p>

                                <BlockMath math="4,\;5,\;6,\;7,\;\cdots" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            {/* Step2 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    2단계 : 미지수가 있는 부등식을 정리합니다.
                                </h4>

                                <BlockMath
                                    math={`
\\frac{x}{3}-\\frac54
\\le
\\frac{x}{6}-\\frac{a}{12}
`}
                                />

                                <p>
                                    양변에 <InlineMath math="12" />
                                    를 곱하면
                                </p>

                                <BlockMath math="4x-15\le2x-a" />

                                <BlockMath math="2x\le15-a" />

                                <BlockMath math="x\le\dfrac{15-a}{2}" />

                                <p>
                                    따라서 움직이는 경계는
                                </p>

                                <BlockMath math="\dfrac{15-a}{2}" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            {/* Step3 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-black/30 p-5">
                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3단계 : 경계값을 넣고 읽습니다.
                                </h4>

                                <p>
                                    정수해가 <InlineMath math="4,5,6" />
                                    뿐이므로
                                    움직이는 경계는 <InlineMath math="6" />
                                    과 <InlineMath math="7" />
                                    사이에 있어야 합니다.
                                </p>

                                <BlockMath math="6\quad\dfrac{15-a}{2}\quad7" />

                                <div className="mt-5 rounded-xl bg-white/5 p-4">
                                    <BlockMath math="\dfrac{15-a}{2}=6" />

                                    <p>
                                        이때 정수해는
                                    </p>

                                    <BlockMath math="4,\;5,\;6" />

                                    <p>
                                        입니다.
                                    </p>

                                    <p className="mt-2 font-semibold text-emerald-300">
                                        조건이 성립하므로 6에는 등호를 넣습니다.
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl bg-white/5 p-4">
                                    <BlockMath math="\dfrac{15-a}{2}=7" />

                                    <p>
                                        이때 정수해는
                                    </p>

                                    <BlockMath math="4,\;5,\;6,\;7" />

                                    <p>
                                        입니다.
                                    </p>

                                    <p className="mt-2 font-semibold text-rose-300">
                                        조건이 성립하지 않으므로 7에는 등호를 넣지 않습니다.
                                    </p>
                                </div>
                            </div>

                            {/* Step4 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    4단계 : 부등식을 완성하여 풉니다.
                                </h4>

                                <BlockMath
                                    math={`
6
\\le
\\frac{15-a}{2}
<
7
`}
                                />

                                <BlockMath
                                    math={`
12
\\le
15-a
<
14
`}
                                />

                                <BlockMath
                                    math={`
1
<
a
\\le
3
`}
                                />

                                <p>
                                    <InlineMath math="a" />
                                    는 정수이므로
                                </p>

                                <BlockMath math="a=2,\;3" />

                                <p>
                                    따라서 구하는 값은
                                </p>

                                <BlockMath math="2+3=\boxed{5}" />
                            </div>

                        </div>
                    </details>
                </div>

                {/* 예제 2 */}
                <div className="mt-10 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 연립부등식
                        </p>

                        <BlockMath
                            math={`
\\left\\{
\\begin{aligned}
x+1&>3\\\\[6pt]
3x&<a+2
\\end{aligned}
\\right.
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 모든 정수 <InlineMath math="x" />의 값의 합이 <InlineMath math="18" />이 되도록 하는 <InlineMath math="a" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-8 leading-8 text-gray-300">

                            {/* Step 1 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    1단계 : 정확히 아는 부등식을 먼저 풉니다.
                                </h4>

                                <BlockMath math="x+1>3" />

                                <BlockMath math="x>2" />

                                <p>
                                    따라서 해가 될 수 있는 정수는
                                </p>

                                <BlockMath math="3,\;4,\;5,\;6,\;7,\;\cdots" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    2단계 : 정수해의 합이 18이 되는 구간을 찾습니다.
                                </h4>

                                <p>
                                    작은 정수부터 차례대로 더하면
                                </p>

                                <BlockMath math="3+4+5+6=18" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서 정수해는 정확히
                                </p>

                                <BlockMath math="3,\;4,\;5,\;6" />

                                <p>
                                    이어야 합니다.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    3단계 : 미지수가 있는 부등식을 정리합니다.
                                </h4>

                                <BlockMath math="3x<a+2" />

                                <BlockMath math="x<\dfrac{a+2}{3}" />

                                <p>
                                    따라서 움직이는 오른쪽 경계는
                                </p>

                                <BlockMath math="\dfrac{a+2}{3}" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    정수해가 <InlineMath math="3,4,5,6" />
                                    이어야 하므로 움직이는 경계는 <InlineMath math="6" />과 <InlineMath math="7" /> 사이에 있어야 합니다.
                                </p>

                                <BlockMath math="6\quad\dfrac{a+2}{3}\quad7" />
                            </div>

                            {/* Step 4 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-black/30 p-5">
                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    4단계 : 경계값을 넣고 읽습니다.
                                </h4>

                                <div className="rounded-xl bg-white/5 p-4">
                                    <BlockMath math="\dfrac{a+2}{3}=6" />

                                    <p>
                                        이때 두 번째 부등식은
                                    </p>

                                    <BlockMath math="x<6" />

                                    <p>
                                        이므로 정수해는
                                    </p>

                                    <BlockMath math="3,\;4,\;5" />

                                    <p>
                                        입니다.
                                    </p>

                                    <p>
                                        정수해의 합은
                                    </p>

                                    <BlockMath math="3+4+5=12" />

                                    <p className="mt-2 font-semibold text-rose-300">
                                        조건이 성립하지 않으므로 6에는 등호를 넣지 않습니다.
                                    </p>
                                </div>

                                <div className="mt-5 rounded-xl bg-white/5 p-4">
                                    <BlockMath math="\dfrac{a+2}{3}=7" />

                                    <p>
                                        이때 두 번째 부등식은
                                    </p>

                                    <BlockMath math="x<7" />

                                    <p>
                                        이므로 정수해는
                                    </p>

                                    <BlockMath math="3,\;4,\;5,\;6" />

                                    <p>
                                        입니다.
                                    </p>

                                    <p>
                                        정수해의 합은
                                    </p>

                                    <BlockMath math="3+4+5+6=18" />

                                    <p className="mt-2 font-semibold text-emerald-300">
                                        조건이 성립하므로 7에는 등호를 넣습니다.
                                    </p>
                                </div>
                            </div>

                            {/* Step 5 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    5단계 : 완성된 부등식을 풉니다.
                                </h4>

                                <BlockMath
                                    math={`
6
<
\\frac{a+2}{3}
\\le
7
`}
                                />

                                <p>
                                    각 변에 <InlineMath math="3" />을 곱하면
                                </p>

                                <BlockMath math="18<a+2\le21" />

                                <p>
                                    각 변에서 <InlineMath math="2" />를 빼면
                                </p>

                                <BlockMath math="16<a\le19" />

                                <p>
                                    따라서 구하는 범위는
                                </p>

                                <BlockMath math="\boxed{16<a\le19}" />
                            </div>

                        </div>
                    </details>
                </div>

                {/* 예제 3 */}
                <div className="mt-10 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 연립부등식
                        </p>

                        <BlockMath
                            math={`
\\frac{x+3}{2}
<
\\frac{5x+7}{6}
\\le
\\frac{2x+k}{3}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            가 해를 갖지 않도록 하는 자연수 <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-8 leading-8 text-gray-300">

                            {/* Step 1 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    1단계 : 이어진 부등식을 두 개로 나눕니다.
                                </h4>

                                <p>
                                    부등식은 건너서 식을 만들지 않고,
                                    서로 이웃한 식끼리 나누어 풉니다.
                                </p>

                                <BlockMath
                                    math={`
\\frac{x+3}{2}
<
\\frac{5x+7}{6}
`}
                                />

                                <BlockMath
                                    math={`
\\frac{5x+7}{6}
\\le
\\frac{2x+k}{3}
`}
                                />
                            </div>

                            {/* Step 2 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    2단계 : 정확히 아는 부등식을 먼저 풉니다.
                                </h4>

                                <BlockMath
                                    math={`
\\frac{x+3}{2}
<
\\frac{5x+7}{6}
`}
                                />

                                <p>
                                    양변에 <InlineMath math="6" />을 곱하면
                                </p>

                                <BlockMath math="3(x+3)<5x+7" />

                                <BlockMath math="3x+9<5x+7" />

                                <BlockMath math="2<2x" />

                                <BlockMath math="x>1" />

                                <p>
                                    따라서 정확히 아는 범위는
                                </p>

                                <BlockMath math="x>1" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    3단계 : 미지수가 있는 부등식을 정리합니다.
                                </h4>

                                <BlockMath
                                    math={`
\\frac{5x+7}{6}
\\le
\\frac{2x+k}{3}
`}
                                />

                                <p>
                                    양변에 <InlineMath math="6" />을 곱하면
                                </p>

                                <BlockMath math="5x+7\le2(2x+k)" />

                                <BlockMath math="5x+7\le4x+2k" />

                                <BlockMath math="x\le2k-7" />

                                <p>
                                    따라서 움직이는 경계는
                                </p>

                                <BlockMath math="2k-7" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    4단계 : 공통부분이 생기지 않도록 경계를 둡니다.
                                </h4>

                                <p>
                                    연립부등식은
                                </p>

                                <BlockMath
                                    math={`
\\left\\{
\\begin{aligned}
x&>1\\\\[6pt]
x&\\le2k-7
\\end{aligned}
\\right.
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    해가 없으려면 두 범위의 공통부분이 생기지 않아야 하므로
                                    움직이는 경계 <InlineMath math="2k-7" />은 <InlineMath math="1" />보다 왼쪽에 있어야 합니다.
                                </p>
                            </div>

                            {/* Step 5 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-black/30 p-5">
                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    5단계 : 경계값을 넣고 읽습니다.
                                </h4>

                                <BlockMath math="2k-7=1" />

                                <p>
                                    이때 연립부등식은
                                </p>

                                <BlockMath
                                    math={`
\\left\\{
\\begin{aligned}
x&>1\\\\[6pt]
x&\\le1
\\end{aligned}
\\right.
`}
                                />

                                <p>
                                    이 됩니다.
                                </p>

                                <p>
                                    두 범위의 공통부분이 생기지 않으므로 해가 없습니다.
                                </p>

                                <p className="mt-3 font-semibold text-emerald-300">
                                    경계가 1일 때도 조건이 성립하므로 등호를 넣습니다.
                                </p>

                                <BlockMath math="2k-7\le1" />
                            </div>

                            {/* Step 6 */}
                            <div>
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    6단계 : 완성된 부등식을 풉니다.
                                </h4>

                                <BlockMath math="2k-7\le1" />

                                <BlockMath math="2k\le8" />

                                <BlockMath math="k\le4" />

                                <p>
                                    <InlineMath math="k" />는 자연수이므로
                                </p>

                                <BlockMath math="k=1,\;2,\;3,\;4" />

                                <p>
                                    따라서 구하는 합은
                                </p>

                                <BlockMath math="1+2+3+4=\boxed{10}" />
                            </div>

                        </div>
                    </details>
                </div>


                {/* 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정확히 아는 부등식을 먼저 그리고,
                        미지수가 포함된 경계를 답이 되는 자리에 둡니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        경계값을 넣어 문제의 문장을 완성해서 읽고,
                        조건이 성립하면 등호를 넣습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        조건이 성립하지 않으면 등호를 넣지 않습니다.
                    </p>

                    <p className="mt-4 font-semibold text-white">
                        그립니다 → 놓습니다 → 읽습니다 → 등호를 결정합니다 → 풉니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.7 <InlineMath math="|ax+b|" />의 해석
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    2.13에서 공부한 절댓값의 정의인
                    <b> 수직선 위의 두 점 사이의 거리</b>는 <InlineMath math="|\text{일차식}|" />에도 그대로 적용됩니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        <InlineMath math="|x-k|" />의 의미
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|x-k|" />는 수직선 위에서 <InlineMath math="x" />와 <InlineMath math="k" /> 사이의 거리입니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath
                            math="|x-k|=
                \begin{cases}
                k-x & (x<k)\\
                x-k & (x\ge k)
                \end{cases}"
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 그래프는 <InlineMath math="(k,0)" />을 기준으로 식이 달라집니다.
                    </p>

                    <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-300">
                        <li>
                            왼쪽에서는 <InlineMath math="y=-x+k" />
                        </li>
                        <li>
                            오른쪽에서는 <InlineMath math="y=x-k" />
                        </li>
                    </ul>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 직선이 <InlineMath math="(k,0)" />에서 만나므로 <InlineMath math="y=|x-k|" />는
                        <b> V자 모양의 꺾인 그래프</b>가 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        이차함수의 그래프와 비교하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이미 공부한 이차함수의 그래프와 비교하면 절댓값 그래프의 성질을
                        쉽게 파악할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-2">
                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-white">
                                아래로 볼록인 경우
                            </p>

                            <BlockMath math="y=(x-3)^2+5" />
                            <BlockMath math="y=|x-3|+5" />
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-white">
                                위로 볼록인 경우
                            </p>

                            <BlockMath math="y=-(x-3)^2+5" />
                            <BlockMath math="y=-|x-3|+5" />
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-white">
                                더 좁아지는 경우
                            </p>

                            <BlockMath math="y=2(x-3)^2+5" />
                            <BlockMath math="y=2|x-3|+5" />
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 text-center font-semibold text-white">
                                역 V자가 더 좁아지는 경우
                            </p>

                            <BlockMath math="y=-2(x-3)^2+5" />
                            <BlockMath math="y=-2|x-3|+5" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        <InlineMath math="y=a|x-p|+q" />의 그래프
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="y=a|x-p|+q" />의 그래프는 <InlineMath math="y=a(x-p)^2+q" />의 그래프와 비슷한 성질을
                        가집니다.
                    </p>

                    <div className="mt-5 space-y-5 text-gray-300">
                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="a>0" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>이차함수는 아래로 볼록입니다.</li>
                                <li>절댓값 함수는 V자 그래프입니다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="a<0" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>이차함수는 위로 볼록입니다.</li>
                                <li>절댓값 함수는 역 V자 그래프입니다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="|a|" />의 크기
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>
                                    <InlineMath math="|a|" />가 클수록 그래프가 더 좁아집니다.
                                </li>
                                <li>함숫값이 더 빠르게 증가하거나 감소합니다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="(p,q)" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>이차함수에서는 꼭짓점입니다.</li>
                                <li>절댓값 함수에서는 그래프가 꺾이는 점입니다.</li>
                            </ul>
                        </div>
                    </div>
                    <AbsoluteValueFunctionExplorer />
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        절댓값의 계수 해석하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        같은 식을 여러 번 더하는 것처럼, 절댓값의 계수도 같은 거리를
                        여러 번 더한 것으로 해석할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath math="2(x-3)=(x-3)+(x-3)" />
                        <BlockMath math="2|x-3|=|x-3|+|x-3|" />
                    </div>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath math="|3x-5|=3\left|x-\frac53\right|" />
                        <BlockMath
                            math="|3x-5|
                =
                \left|x-\frac53\right|
                +
                \left|x-\frac53\right|
                +
                \left|x-\frac53\right|"
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 <InlineMath math="|3x-5|" />는 <InlineMath math="x" />와 <InlineMath math="\frac53" /> 사이의
                        거리의 3배입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        |일차식|의 덧셈과 뺄셈 그래프
                    </h3>

                    <p className="leading-8 text-gray-300">
                        절댓값 안이 일차식인 함수는 여러 개의 직선을 이어 붙인
                        꺾은선 그래프입니다. 따라서 구간별 식을 모두 구하기 전에
                        <b> 전체 개형과 꺾이는 점</b>을 먼저 파악할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <p className="mb-3 font-semibold text-white">
                            그래프를 그리는 순서
                        </p>

                        <ul className="ml-6 list-disc space-y-2 text-gray-300">
                            <li>
                                각 절댓값 안이 <InlineMath math="0" />이 되는
                                <b> 기준점</b>을 찾습니다.
                            </li>
                            <li>
                                기준점의 함숫값을 구하여 <b>꺾이는 점</b>을 찍습니다.
                            </li>
                            <li>
                                각 항을 <InlineMath math="a|x-p|" />의 꼴로 바꿉니다.
                            </li>
                            <li>
                                양쪽 끝의 기울기는 절댓값 앞의 계수를 모두 더한 값으로
                                결정됩니다.
                            </li>
                            <li>꺾이는 점들을 차례로 직선으로 연결합니다.</li>
                        </ul>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        절댓값 앞의 계수의 합이 양수이면 전체적으로 V자형,
                        음수이면 전체적으로 역 V자형이 됩니다. 계수의 합이 <InlineMath math="0" />이면 양쪽 끝이 가로선이 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        덧셈과 뺄셈의 그래프 비교
                    </h3>

                    <div className="space-y-8">
                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 font-semibold text-white">
                                같은 기울기의 두 식을 더한 경우
                            </p>

                            <BlockMath math="(x-2)+(x-3)=2x-5" />
                            <BlockMath math="y=|x-2|+|x-3|" />

                            <ul className="ml-6 list-disc space-y-2 text-gray-300">
                                <li>
                                    꺾이는 점은 <InlineMath math="(2,1),\ (3,1)" />입니다.
                                </li>
                                <li>
                                    절댓값 앞의 계수의 합은 <InlineMath math="1+1=2" />입니다.
                                </li>
                                <li>양쪽 끝의 기울기는 각각 2와 -2입니다.</li>
                                <li>전체적으로 V자형 그래프가 됩니다.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 font-semibold text-white">
                                같은 기울기의 두 식을 뺀 경우
                            </p>

                            <BlockMath math="(x-2)-(x-3)=1" />
                            <BlockMath math="y=|x-2|-|x-3|" />

                            <ul className="ml-6 list-disc space-y-2 text-gray-300">
                                <li>
                                    꺾이는 점은 <InlineMath math="(2,-1),\ (3,1)" />입니다.
                                </li>
                                <li>
                                    절댓값 앞의 계수의 합은 <InlineMath math="1-1=0" />입니다.
                                </li>
                                <li>양쪽 끝에서는 절댓값이 서로 상쇄됩니다.</li>
                                <li>따라서 양쪽 끝이 가로선인 그래프가 됩니다.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 font-semibold text-white">
                                기울기가 다른 두 식을 더한 경우
                            </p>

                            <BlockMath math="(x-2)+(2x-5)=3x-7" />
                            <BlockMath math="y=|x-2|+|2x-5|" />

                            <p className="mt-3 leading-8 text-gray-300">
                                먼저 <InlineMath math="|2x-5|=2\left|x-\frac52\right|" />
                                로 읽습니다.
                            </p>

                            <ul className="mt-3 ml-6 list-disc space-y-2 text-gray-300">
                                <li>
                                    꺾이는 점은 <InlineMath math="(2,1),\ \left(\frac52,\frac12\right)" />
                                    입니다.
                                </li>
                                <li>
                                    절댓값 앞의 계수의 합은 <InlineMath math="1+2=3" />입니다.
                                </li>
                                <li>양쪽 끝의 기울기는 각각 3과 -3입니다.</li>
                                <li>전체적으로 V자형 그래프가 됩니다.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 font-semibold text-white">
                                음수인 계수의 영향이 더 큰 경우
                            </p>

                            <BlockMath math="(x-2)-2(x-3)=-x+4" />
                            <BlockMath math="y=|x-2|-2|x-3|" />

                            <ul className="ml-6 list-disc space-y-2 text-gray-300">
                                <li>
                                    꺾이는 점은 <InlineMath math="(2,-2),\ (3,1)" />입니다.
                                </li>
                                <li>
                                    절댓값 앞의 계수의 합은 <InlineMath math="1-2=-1" />입니다.
                                </li>
                                <li>양쪽 끝의 기울기의 크기는 1입니다.</li>
                                <li>전체적으로 역 V자형 그래프가 됩니다.</li>
                            </ul>
                        </div>

                        <div className="rounded-lg bg-black/30 p-5">
                            <p className="mb-3 font-semibold text-white">
                                세 개의 절댓값을 더하고 뺀 경우
                            </p>

                            <BlockMath math="(x-2)+2(x-3)-5(x-4)=-2x+12" />
                            <BlockMath math="y=|x-2|+2|x-3|-5|x-4|" />

                            <ul className="ml-6 list-disc space-y-2 text-gray-300">
                                <li>
                                    꺾이는 점은 <InlineMath math="(2,-8),\ (3,-4),\ (4,4)" />입니다.
                                </li>
                                <li>
                                    절댓값 앞의 계수의 합은 <InlineMath math="1+2-5=-2" />입니다.
                                </li>
                                <li>양쪽 끝의 기울기의 크기는 2입니다.</li>
                                <li>전체적으로 역 V자형 그래프가 됩니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        필요한 구간의 식만 구하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        그래프를 그리기 위해 모든 구간의 식을 먼저 구할 필요는 없습니다.
                        전체 개형과 꺾이는 점을 찾은 뒤, 특정 구간의 식이 필요할 때만
                        그 구간을 지나는 두 점을 이용하여 직선의 식을 구하면 됩니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        즉, <b>식을 모두 구한 뒤 그래프를 그리는 것</b>이 아니라
                        <b> 그래프를 먼저 파악한 뒤 필요한 식만 역산</b>합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            다음 부등식의 해를 구하시오.
                        </p>

                        <BlockMath math="2<|x-3|<5" />
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <p>
                                <InlineMath math="|x-3|" />은 <InlineMath math="x" />와 <InlineMath math="3" /> 사이의 거리입니다.
                            </p>

                            <p>
                                따라서 <InlineMath math="2<|x-3|<5" />는
                                기준점 <InlineMath math="3" />에서의 거리가 <InlineMath math="2" />보다 크고 <InlineMath math="5" />보다 작은 점을 찾는 것입니다.
                            </p>

                            <p>
                                기준점 <InlineMath math="3" />에서
                                왼쪽으로 <InlineMath math="2" />,
                                오른쪽으로 <InlineMath math="2" />만큼 떨어진 점은
                                각각 <InlineMath math="1" />, <InlineMath math="5" />입니다.
                            </p>

                            <BlockMath math="3-2=1,\qquad 3+2=5" />

                            <p>
                                또 기준점 <InlineMath math="3" />에서
                                왼쪽으로 <InlineMath math="5" />,
                                오른쪽으로 <InlineMath math="5" />만큼 떨어진 점은
                                각각 <InlineMath math="-2" />, <InlineMath math="8" />입니다.
                            </p>

                            <BlockMath math="3-5=-2,\qquad 3+5=8" />

                            <p>
                                거리가 <InlineMath math="2" />보다 커야 하므로 <InlineMath math="1" />과 <InlineMath math="5" />의 바깥쪽을 찾고,
                                거리가 <InlineMath math="5" />보다 작아야 하므로 <InlineMath math="-2" />와 <InlineMath math="8" />의 안쪽을 찾습니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 부등식의 해는 <InlineMath math="-2<x<1" /> 또는 <InlineMath math="5<x<8" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <ul className="ml-6 list-disc space-y-3 leading-8 text-gray-300">
                        <li>
                            <InlineMath math="|x-k|" />는 <InlineMath math="x" />와 <InlineMath math="k" /> 사이의 거리입니다.
                        </li>
                        <li>
                            <InlineMath math="y=a|x-p|+q" />는 <InlineMath math="(p,q)" />에서 꺾이는 그래프입니다.
                        </li>
                        <li>
                            <InlineMath math="a>0" />이면 V자, <InlineMath math="a<0" />이면 역 V자 그래프입니다.
                        </li>
                        <li>
                            <InlineMath math="|a|" />가 클수록 그래프가 더 빠르게 증가하거나
                            감소합니다.
                        </li>
                        <li>절댓값 안이 0이 되는 곳의 함숫값을 먼저 구합니다.</li>
                        <li>
                            양쪽 끝의 그래프는 절댓값 앞의 계수의 합으로 결정됩니다.
                        </li>
                        <li>
                            구간별 식을 모두 구하지 말고 전체 개형과 꺾이는 점을 먼저
                            파악합니다.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.8 <InlineMath math="|ax+b|" /> 그래프를 이용한 해법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    일반적으로 절댓값이 포함된 식은
                    <b> 절댓값 안이 0이 되는 점</b>을 기준으로 구간을 나누어 풉니다.
                    그러나 3.7에서 공부한 그래프의 성질을 이용하면,
                    좌변과 우변의 그래프를 먼저 파악한 뒤
                    <b> 두 그래프의 높낮이</b>를 비교하여 해를 구할 수도 있습니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        그래프를 이용한 부등식의 해석
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식 <InlineMath math="f(x)\le g(x)" />는 <InlineMath math="y=f(x)" />의 그래프가 <InlineMath math="y=g(x)" />의 그래프보다
                        <b> 아래에 있거나 만나는 부분</b>을 찾는 것입니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath math="f(x)\le g(x)" />

                        <p className="text-center leading-8 text-gray-300">
                            <InlineMath math="y=f(x)" />의 그래프가 <InlineMath math="y=g(x)" />의 그래프보다
                            아래에 있거나 만나는 <InlineMath math="x" />의 범위
                        </p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 그래프의 전체 개형을 먼저 파악하면,
                        구간별 식을 모두 계산하지 않고도
                        필요한 교점과 해의 범위를 찾을 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-black/30 p-6">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예시
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식
                    </p>

                    <BlockMath math="|3x-2|-x\le6" />

                    <p className="leading-8 text-gray-300">
                        을 풀어라.
                    </p>



                    <div className="mt-6 space-y-8 text-gray-300">
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <h4 className="mb-4 text-lg font-bold text-blue-300">
                                풀이 1 : 그래프로 범위 찾기
                            </h4>

                            <p className="leading-8">
                                먼저 부등식을 절댓값 함수와 일차함수의 높낮이를
                                비교할 수 있도록 정리합니다.
                            </p>

                            <BlockMath math="|3x-2|\le x+6" />

                            <p className="leading-8">
                                좌변과 우변을 각각 함수로 생각하면
                            </p>

                            <BlockMath math="y=|3x-2|,\qquad y=x+6" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-lg bg-black/30 p-5">
                                <p className="leading-8">
                                    <InlineMath math="y=|3x-2|" />는 <InlineMath math="\left(\frac23,0\right)" />에서
                                    꺾이는 V자 그래프입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="y=x+6" />은 <InlineMath math="(-6,0)" />을 지나고
                                    오른쪽 위로 향하는 직선입니다.
                                </p>
                            </div>

                            <p className="leading-8">
                                구해야 하는 것은
                                <b> 절댓값 그래프가 직선보다 아래에 있거나 만나는 부분</b>입니다.
                            </p>

                            <p className="leading-8">
                                절댓값 그래프의 왼쪽 부분은 <InlineMath math="y=-3x+2" />,
                                오른쪽 부분은 <InlineMath math="y=3x-2" />이므로,
                                직선 <InlineMath math="y=x+6" />과
                                왼쪽과 오른쪽에서 각각 한 번씩 만납니다.
                            </p>

                            <p className="font-semibold text-white">
                                왼쪽 교점
                            </p>

                            <BlockMath math="-3x+2=x+6" />
                            <BlockMath math="-4x=4" />
                            <BlockMath math="x=-1" />

                            <p className="font-semibold text-white">
                                오른쪽 교점
                            </p>

                            <BlockMath math="3x-2=x+6" />
                            <BlockMath math="2x=8" />
                            <BlockMath math="x=4" />

                            <p className="leading-8">
                                두 교점 사이에서 절댓값 그래프가 직선보다 아래에 있고,
                                부등호에 등호가 포함되어 있으므로 경계도 포함합니다.
                            </p>

                            <BlockMath math="-1\le x\le4" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="-1\le x\le4" />입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                풀이 2 : 구간을 나누어서 범위 찾기
                            </h4>

                            <p className="leading-8">
                                <InlineMath math="|3x-2|" />는 절댓값 안이 <InlineMath math="0" />이 되는 <InlineMath math="x=\frac23" />을 기준으로 식이 달라집니다.
                            </p>

                            <BlockMath math="3x-2=0\quad\Rightarrow\quad x=\frac23" />

                            <p className="leading-8">
                                따라서 <InlineMath math="x<\frac23" />인 경우와 <InlineMath math="x\ge\frac23" />인 경우로 나누어 풉니다.
                            </p>

                            <div className="rounded-lg bg-black/30 p-5">
                                <p className="mb-3 font-semibold text-white">
                                    <InlineMath math="x<\frac23" />일 때
                                </p>

                                <p className="leading-8">
                                    이 구간에서는 <InlineMath math="|3x-2|=-3x+2" />입니다.
                                </p>

                                <BlockMath math="-3x+2-x\le6" />
                                <BlockMath math="-4x\le4" />
                                <BlockMath math="x\ge-1" />

                                <p className="leading-8">
                                    처음에 정한 범위 <InlineMath math="x<\frac23" />와 함께 생각하면
                                </p>

                                <BlockMath math="-1\le x<\frac23" />
                            </div>

                            <div className="rounded-lg bg-black/30 p-5">
                                <p className="mb-3 font-semibold text-white">
                                    <InlineMath math="x\ge\frac23" />일 때
                                </p>

                                <p className="leading-8">
                                    이 구간에서는 <InlineMath math="|3x-2|=3x-2" />입니다.
                                </p>

                                <BlockMath math="3x-2-x\le6" />
                                <BlockMath math="2x\le8" />
                                <BlockMath math="x\le4" />

                                <p className="leading-8">
                                    처음에 정한 범위 <InlineMath math="x\ge\frac23" />와 함께 생각하면
                                </p>

                                <BlockMath math="\frac23\le x\le4" />
                            </div>

                            <p className="leading-8">
                                왼쪽일 때의 해와 오른쪽일 때의 해를 붙이면
                            </p>

                            <BlockMath
                                math="-1\le x<\frac23,\qquad
                        \frac23\le x\le4"
                            />

                            <p className="leading-8">
                                두 범위는 <InlineMath math="x=\frac23" />에서 이어지므로
                            </p>

                            <BlockMath math="-1\le x\le4" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="-1\le x\le4" />입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <h4 className="mb-4 text-lg font-bold text-green-300">
                                두 풀이의 비교
                            </h4>

                            <p className="leading-8">
                                구간을 나누는 풀이는 절댓값의 정의를 직접 사용한
                                일반적인 풀이입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                그래프를 이용한 풀이는 두 그래프의 전체 개형을 먼저 보고,
                                필요한 교점만 구하여 해의 범위를 판단합니다.
                            </p>

                            <p className="mt-3 leading-8 font-semibold text-white">
                                그래프를 떠올릴 수 있다면 구간별 계산을 시작하기 전에
                                전체에서 어느 부분이 답이 되는지 먼저 판단할 수 있습니다.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="x>|2x+1|-7" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 정수 <InlineMath math="x" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                먼저 절댓값 그래프와 직선의 높낮이를 비교할 수 있도록 정리합니다.
                            </p>

                            <BlockMath math="|2x+1|<x+7" />

                            <p>
                                좌변과 우변을 각각 함수로 생각하면 <InlineMath math="y=|2x+1|" />, <InlineMath math="y=x+7" />
                                입니다.
                            </p>

                            <p>
                                <InlineMath math="y=|2x+1|" />는 <InlineMath math="\left(-\frac12,0\right)" />
                                에서 꺾이는 V자 그래프이고, <InlineMath math="y=x+7" />은 <InlineMath math="(-7,0)" />을 지나
                                오른쪽 위로 향하는 직선입니다.
                            </p>

                            <p>
                                절댓값 그래프가 직선보다 아래에 있는 부분을 찾기 위해
                                왼쪽과 오른쪽에서 각각 교점을 구합니다.
                            </p>

                            <p className="font-semibold text-white">
                                왼쪽 교점
                            </p>

                            <BlockMath math="-2x-1=x+7" />

                            <BlockMath math="-3x=8" />

                            <BlockMath math="x=-\frac83" />

                            <p className="font-semibold text-white">
                                오른쪽 교점
                            </p>

                            <BlockMath math="2x+1=x+7" />

                            <BlockMath math="x=6" />

                            <p>
                                두 교점 사이에서 절댓값 그래프가 직선보다 아래에 있고,
                                부등호가 <InlineMath math="<" />이므로 경계는 포함하지 않습니다.
                            </p>

                            <BlockMath math="-\frac83<x<6" />

                            <p>
                                이 범위의 정수는 <InlineMath math="-2,-1,0,1,2,3,4,5" />
                                이므로 모두 <InlineMath math="8" />개입니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 정수 <InlineMath math="x" />의 개수는 <InlineMath math="8" />개입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="3|x+2|+|x-1|<6" />

                        <p className="mt-4 leading-8 text-gray-300">
                            을 만족시키는 정수 <InlineMath math="x" />의 개수를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                좌변을 함수로 생각하면 <InlineMath math="y=3|x+2|+|x-1|" />
                                입니다.
                            </p>

                            <p>
                                <InlineMath math="|x+2|" />는 <InlineMath math="x=-2" />, <InlineMath math="|x-1|" />은 <InlineMath math="x=1" />에서 꺾이므로
                                그래프도 이 두 점에서 꺾입니다.
                            </p>

                            <p>
                                먼저 꺾이는 점의 함수값을 구합니다.
                            </p>

                            <BlockMath math="3|-2+2|+|-2-1|=3" />

                            <BlockMath math="3|1+2|+|1-1|=9" />

                            <p>
                                따라서 그래프는 <InlineMath math="(-2,3)" />, <InlineMath math="(1,9)" />
                                을 지납니다.
                            </p>

                            <p>
                                양쪽 끝의 기울기는 절댓값 앞의 계수의 합인 <InlineMath math="3+1=4" />이고, V자 그래프입니다.
                            </p>

                            <p>
                                정수의 개수만 구하면 되므로 <InlineMath math="(-2,3)" />
                                를 기준으로 주변의 정수점만 확인합니다.
                            </p>

                            <BlockMath math="(-3,7),\ (-2,3),\ (-1,5),\ (0,7),\ (1,9)" />

                            <p>
                                <InlineMath math="y<6" />
                                을 만족하는 점은 <InlineMath math="(-2,3)" />, <InlineMath math="(-1,5)" />
                                뿐입니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 정수 <InlineMath math="x" />의 개수는 <InlineMath math="2" />개입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="|x+2|+2|x-1|<5" />

                        <p className="my-4 leading-8 text-gray-300">
                            의 해가
                        </p>

                        <BlockMath math="\alpha<x<\beta" />

                        <p className="mt-4 leading-8 text-gray-300">
                            일 때, <InlineMath math="-3\alpha\beta" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">
                            <p>
                                좌변을 함수로 생각하면 <InlineMath math="y=|x+2|+2|x-1|" />입니다.
                            </p>

                            <p>
                                절댓값 앞의 계수의 합은 <InlineMath math="1+2=3" />이므로
                                전체적으로 V자형 그래프입니다.
                            </p>

                            <p>
                                그래프는 절댓값 안이 <InlineMath math="0" />이 되는 <InlineMath math="x=-2" />와 <InlineMath math="x=1" />에서 꺾입니다.
                            </p>

                            <p>
                                두 꺾이는 점의 함숫값을 구하면
                            </p>

                            <BlockMath math="|-2+2|+2|-2-1|=6" />

                            <BlockMath math="|1+2|+2|1-1|=3" />

                            <p>
                                따라서 그래프는 <InlineMath math="(-2,6)" />과 <InlineMath math="(1,3)" />을 지납니다.
                            </p>

                            <p>
                                가로선 <InlineMath math="y=5" />는
                                두 꺾이는 점의 높이인 <InlineMath math="6" />과 <InlineMath math="3" /> 사이에 있습니다.
                                따라서 왼쪽 교점은 두 꺾이는 점 사이에 있습니다.
                            </p>

                            <p>
                                두 꺾이는 점 <InlineMath math="(-2,6)" />, <InlineMath math="(1,3)" />을 지나는 직선의 기울기는
                            </p>

                            <BlockMath math="\frac{3-6}{1-(-2)}=-1" />

                            <p>
                                이 직선은 <InlineMath math="(1,3)" />을 지나므로
                            </p>

                            <BlockMath math="y-3=-(x-1)" />

                            <BlockMath math="y=-x+4" />

                            <p>
                                가로선 <InlineMath math="y=5" />와 만나는
                                왼쪽 교점을 구하면
                            </p>

                            <BlockMath math="-x+4=5" />

                            <BlockMath math="x=-1" />

                            <p>
                                오른쪽 구간은 전체 V자형 그래프의 오른쪽 부분이므로
                                기울기가 <InlineMath math="3" />이고 <InlineMath math="(1,3)" />을 지나는 직선입니다.
                            </p>

                            <BlockMath math="y-3=3(x-1)" />

                            <BlockMath math="y=3x" />

                            <p>
                                가로선 <InlineMath math="y=5" />와 만나는
                                오른쪽 교점을 구하면
                            </p>

                            <BlockMath math="3x=5" />

                            <BlockMath math="x=\frac53" />

                            <p>
                                그래프가 가로선 <InlineMath math="y=5" />보다 아래에 있는
                                두 교점 사이가 부등식의 해입니다.
                                부등호가 <InlineMath math="<" />이므로
                                두 교점은 포함하지 않습니다.
                            </p>

                            <BlockMath math="-1<x<\frac53" />

                            <p>
                                따라서 <InlineMath math="\alpha=-1" />, <InlineMath math="\beta=\frac53" />입니다.
                            </p>

                            <BlockMath math="-3\alpha\beta=-3\cdot(-1)\cdot\frac53=5" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="-3\alpha\beta" />의 값은 <InlineMath math="5" />입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    꺾인 그래프의 식 구하기
                                </h4>

                                <p>
                                    그래프의 직선식이 필요할 때에는 절댓값을 처음부터
                                    구간별로 풀지 않아도 됩니다.
                                    <b> 꺾이는 점과 기울기</b>를 이용하면
                                    필요한 직선식을 만들 수 있습니다.
                                </p>

                                <p>
                                    이 그래프는 절댓값 앞의 계수의 합이 <InlineMath math="3" />인 V자형 그래프이고,
                                    꺾이는 점은 <InlineMath math="(-2,6)" />, <InlineMath math="(1,3)" />입니다.
                                </p>

                                <p className="font-semibold text-white">
                                    왼쪽 직선 구간
                                </p>

                                <p>
                                    기울기가 <InlineMath math="-3" />이고 <InlineMath math="(-2,6)" />을 지나므로
                                </p>

                                <BlockMath math="y-6=-3(x+2)" />

                                <BlockMath math="y=-3x" />

                                <p className="font-semibold text-white">
                                    가운데 직선 구간
                                </p>

                                <p>
                                    두 꺾이는 점 <InlineMath math="(-2,6)" />과 <InlineMath math="(1,3)" />을 지나므로
                                </p>

                                <BlockMath math="y=-x+4" />

                                <p className="font-semibold text-white">
                                    오른쪽 직선 구간
                                </p>

                                <p>
                                    기울기가 <InlineMath math="3" />이고 <InlineMath math="(1,3)" />을 지나므로
                                </p>

                                <BlockMath math="y-3=3(x-1)" />

                                <BlockMath math="y=3x" />

                                <p>
                                    따라서 전체 그래프의 식은
                                </p>

                                <BlockMath
                                    math={`y=
\\begin{cases}
-3x & (x<-2)\\\\
-x+4 & (-2\\le x<1)\\\\
3x & (x\\ge1)
\\end{cases}`}
                                />

                                <p className="font-semibold text-white">
                                    전체 식을 모두 만들 수 있지만, 실제 문제에서는
                                    필요한 직선 구간만 골라서 사용하면 됩니다.
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
                        <p className="mb-4 leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식
                        </p>

                        <BlockMath math="|x+5|-3|x-4|\ge k" />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 해가 존재하도록 하는 실수 <InlineMath math="k" />의 최댓값을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                좌변을 함수로 생각하면 <InlineMath math="y=|x+5|-3|x-4|" />
                                입니다.
                            </p>

                            <p>
                                절댓값 앞의 계수의 합은 <InlineMath math="1-3=-2" />
                                이므로 전체적으로 역 V자형 그래프입니다.
                            </p>

                            <p>
                                따라서 부등식의 해가 존재하도록 하는 <InlineMath math="k" />의 최댓값은
                                이 함수의 최댓값과 같습니다.
                            </p>

                            <p>
                                그래프는 절댓값 안이 <InlineMath math="0" />이 되는 <InlineMath math="x=-5" />, <InlineMath math="x=4" />
                                에서 꺾입니다.
                            </p>

                            <p>
                                역 V자형 그래프이므로 꺾이는 점의 함숫값을 확인합니다.
                            </p>

                            <BlockMath math="|-5+5|-3|-5-4|=-27" />

                            <BlockMath math="|4+5|-3|4-4|=9" />

                            <p>
                                두 꺾이는 점 중 더 높은 점은
                                <InlineMath math="(4,9)" />이므로 함수의 최댓값은 <InlineMath math="9" />입니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 실수 <InlineMath math="k" />의 최댓값은 <InlineMath math="9" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식
                        </p>

                        <BlockMath math="|3x-1|+|2x+3|\le k" />

                        <p className="mt-4 leading-8 text-gray-300">
                            의 해가 존재하지 않도록 하는 실수 <InlineMath math="k" />의 값의 범위를 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                좌변을 함수로 생각하면 <InlineMath math="y=|3x-1|+|2x+3|" />
                                입니다.
                            </p>

                            <p>
                                절댓값 앞의 계수의 합은 <InlineMath math="3+2=5" />
                                이므로 전체적으로 V자형 그래프입니다.
                            </p>

                            <p>
                                따라서 부등식의 해가 존재하지 않으려면 <InlineMath math="k" />가 함수의 최솟값보다 작아야 합니다.
                            </p>

                            <p>
                                그래프는 절댓값 안이 <InlineMath math="0" />이 되는 <InlineMath math="x=-\frac32" />, <InlineMath math="x=\frac13" />
                                에서 꺾입니다.
                            </p>

                            <p>
                                V자형 그래프이므로 꺾이는 점의 함숫값을 확인합니다.
                            </p>

                            <BlockMath math="\left|3\left(-\frac32\right)-1\right|+\left|2\left(-\frac32\right)+3\right|=\frac{11}{2}" />

                            <BlockMath math="\left|3\left(\frac13\right)-1\right|+\left|2\left(\frac13\right)+3\right|=\frac{11}{3}" />

                            <p>
                                두 꺾이는 점 중 더 낮은 점은 <InlineMath math="\left(\frac13,\frac{11}{3}\right)" />
                                이므로 함수의 최솟값은 <InlineMath math="\frac{11}{3}" />
                                입니다.
                            </p>

                            <p>
                                부등호가 <InlineMath math="\le" />
                                이므로 <InlineMath math="k=\frac{11}{3}" />
                                일 때는 <InlineMath math="x=\frac13" />
                                에서 부등식을 만족합니다.
                            </p>

                            <p>
                                따라서 해가 존재하지 않으려면 <InlineMath math="k" />는 함수의 최솟값보다 작아야 합니다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 실수 <InlineMath math="k" />의 값의 범위는 <InlineMath math="k&lt;\frac{11}{3}" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <ul className="ml-6 list-disc space-y-3 leading-8 text-gray-300">
                        <li>
                            부등식의 좌변과 우변을 각각 함수의 그래프로 생각할 수 있습니다.
                        </li>
                        <li>
                            <InlineMath math="f(x)\le g(x)" />는 <InlineMath math="y=f(x)" />가 <InlineMath math="y=g(x)" />보다 아래에 있거나 만나는 <InlineMath math="x" />의 범위를 찾는 것입니다.
                        </li>
                        <li>
                            절댓값 그래프의 꺾이는 점과 전체 개형을 먼저 파악합니다.
                        </li>
                        <li>
                            두 그래프의 교점을 구한 뒤, 그래프의 위아래를 비교합니다.
                        </li>
                        <li>
                            그래프를 이용하면 구간별 식을 모두 구하지 않고도
                            해의 범위를 판단할 수 있습니다.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.9 <InlineMath math="|x-k|" /> 부등식의 해의 구조
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    3.7에서 <InlineMath math="|x-k|" />는 <InlineMath math="x" />와 <InlineMath math="k" /> 사이의 거리라고
                    공부했습니다. 따라서 절댓값 부등식의 해를 알면
                    <b> 기준점과 거리</b>를 거꾸로 찾을 수도 있습니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        <InlineMath math="|x-k|<d" />의 해
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|x-k|<d" />는 <InlineMath math="x" />에서 <InlineMath math="k" />까지의 거리가 <InlineMath math="d" />보다 작다는 뜻입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 기준점 <InlineMath math="k" />에서
                        왼쪽으로 <InlineMath math="d" />만큼 떨어진 점과
                        오른쪽으로 <InlineMath math="d" />만큼 떨어진 점 사이가 해가 됩니다.
                    </p>

                    <BlockMath math="k-d<x<k+d" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이 해를
                    </p>

                    <BlockMath math="p<x<q" />

                    <p className="leading-8 text-gray-300">
                        라고 하면 <InlineMath math="p" />와 <InlineMath math="q" />의 중점에 <InlineMath math="k" />가 있고, <InlineMath math="p" />와 <InlineMath math="q" /> 사이의 거리는 <InlineMath math="d" />의 두 배입니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <BlockMath math="k=\frac{p+q}{2}" />

                        <BlockMath math="d=\frac{q-p}{2}" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        해에서 기준점과 거리 찾기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|x-k|<d" />의 해가
                    </p>

                    <BlockMath math="-2<x<6" />

                    <p className="leading-8 text-gray-300">
                        이라고 하겠습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        해의 양 끝인 <InlineMath math="-2" />와 <InlineMath math="6" />의 중점이 기준점 <InlineMath math="k" />입니다.
                    </p>

                    <BlockMath math="k=\frac{-2+6}{2}=2" />

                    <p className="leading-8 text-gray-300">
                        해의 전체 간격은
                    </p>

                    <BlockMath math="6-(-2)=8" />

                    <p className="leading-8 text-gray-300">
                        이므로 기준점에서 한쪽 끝까지의 거리는 그 절반입니다.
                    </p>

                    <BlockMath math="d=\frac82=4" />

                    <p className="font-semibold text-white">
                        따라서 <InlineMath math="k=2" />, <InlineMath math="d=4" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        <InlineMath math="|ax-b|" />의 기준점과 거리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|ax-b|" />는 <InlineMath math="a" />의 부호에 관계없이 다음과 같이 정리할 수 있습니다.
                    </p>

                    <BlockMath math="|ax-b|=|a|\left|x-\frac ba\right|" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="|ax-b|<c" />

                    <p className="leading-8 text-gray-300">
                        는
                    </p>

                    <BlockMath math="\left|x-\frac ba\right|<\frac{c}{|a|}" />

                    <p className="leading-8 text-gray-300">
                        로 해석할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <ul className="ml-6 list-disc space-y-2 text-gray-300">
                            <li>
                                기준점은 <InlineMath math="\frac ba" />
                            </li>
                            <li>
                                기준점에서 해의 한쪽 끝까지의 거리는 <InlineMath math="\frac{c}{|a|}" />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        예시
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식
                    </p>

                    <BlockMath math="|ax-b|<6" />

                    <p className="leading-8 text-gray-300">
                        의 해가
                    </p>

                    <BlockMath math="-1<x<5" />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="a" />와 <InlineMath math="b" />의 관계를 구해 봅시다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        먼저 해의 양 끝인 <InlineMath math="-1" />과 <InlineMath math="5" />의 중점을 구하면
                    </p>

                    <BlockMath math="\frac{-1+5}{2}=2" />

                    <p className="leading-8 text-gray-300">
                        이므로 기준점은 <InlineMath math="2" />입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        해의 전체 간격은
                    </p>

                    <BlockMath math="5-(-1)=6" />

                    <p className="leading-8 text-gray-300">
                        이므로 기준점에서 한쪽 끝까지의 거리는
                    </p>

                    <BlockMath math="\frac62=3" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        한편
                    </p>

                    <BlockMath math="|ax-b|=|a|\left|x-\frac ba\right|" />

                    <p className="leading-8 text-gray-300">
                        이므로 기준점과 거리를 비교하면
                    </p>

                    <BlockMath math="\frac ba=2" />

                    <BlockMath math="\frac6{|a|}=3" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="|a|=2" />

                    <BlockMath math="a=\pm2" />

                    <p className="leading-8 text-gray-300">
                        그리고 <InlineMath math="\frac ba=2" />이므로
                    </p>

                    <BlockMath math="b=2a" />

                    <p className="leading-8 text-gray-300">
                        따라서 가능한 순서쌍 <InlineMath math="(a,b)" />는
                    </p>

                    <BlockMath math="(2,4),\quad(-2,-4)" />

                    <p className="font-semibold text-white">
                        절댓값 안의 식 전체에 <InlineMath math="-1" />을 곱해도 절댓값은 같으므로,
                        두 경우는 같은 부등식을 나타냅니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            부등식
                        </p>

                        <BlockMath math="|3x+2|<6" />

                        <p className="my-4 leading-8 text-gray-300">
                            의 해가
                        </p>

                        <BlockMath math="a<x<b" />

                        <p className="mt-4 leading-8 text-gray-300">
                            일 때, <InlineMath math="b-a" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                절댓값을 기준점과 거리의 형태로 바꾸면
                            </p>

                            <BlockMath math="|3x+2|=3\left|x+\frac23\right|" />

                            <p>
                                따라서 기준점은 <InlineMath math="-\frac23" />,
                                기준점에서 해의 한쪽 끝까지의 거리는
                            </p>

                            <BlockMath math="\frac63=2" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 해는
                            </p>

                            <BlockMath math="-\frac23-2<x<-\frac23+2" />

                            <BlockMath math="-\frac83<x<\frac43" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="a=-\frac83,\qquad b=\frac43" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="b-a=\frac43-\left(-\frac83\right)=4" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="b-a=4" />입니다.
                            </p>

                        </div>
                    </details>

                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 2
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="mb-4 leading-8 text-gray-300">
                                <InlineMath math="x" />에 대한 부등식
                            </p>

                            <BlockMath math="|2x-a|<12" />

                            <p className="my-4 leading-8 text-gray-300">
                                의 해가
                            </p>

                            <BlockMath math="-2<x<b" />

                            <p className="mt-4 leading-8 text-gray-300">
                                일 때, 두 상수 <InlineMath math="a" />,
                                <InlineMath math="b" />에 대하여 <InlineMath math="b-a" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-6 space-y-6 leading-8 text-gray-300">
                                <p>
                                    절댓값을 기준점과 거리의 형태로 바꾸면
                                </p>

                                <BlockMath math="|2x-a|=2\left|x-\frac a2\right|" />

                                <p>
                                    따라서 주어진 부등식은
                                </p>

                                <BlockMath math="\left|x-\frac a2\right|<6" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    해의 왼쪽 끝은 <InlineMath math="-2" />이고,
                                    기준점에서 해의 한쪽 끝까지의 거리는 <InlineMath math="6" />이므로 기준점은
                                </p>

                                <BlockMath math="-2+6=4" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\frac a2=4" />

                                <BlockMath math="a=8" />

                                <p>
                                    해의 오른쪽 끝은 기준점 <InlineMath math="4" />에서 오른쪽으로 <InlineMath math="6" />만큼 떨어진 점이므로
                                </p>

                                <BlockMath math="b=4+6=10" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="b-a=10-8=2" />

                                <p className="font-semibold text-white">
                                    따라서 <InlineMath math="b-a" />의 값은 <InlineMath math="2" />입니다.
                                </p>
                            </div>
                        </details>
                    </div>


                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 부등식
                        </p>

                        <BlockMath math="|2x-a|<5" />

                        <p className="my-4 leading-8 text-gray-300">
                            를 만족시키는 정수 <InlineMath math="x" />의 최댓값이 <InlineMath math="10" />일 때,
                            모든 정수 <InlineMath math="a" />의 값의 합을 구하시오.
                        </p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                절댓값을 기준점과 거리의 형태로 바꾸면
                            </p>

                            <BlockMath math="|2x-a|=2\left|x-\frac a2\right|" />

                            <p>
                                따라서 주어진 부등식은
                            </p>

                            <BlockMath math="\left|x-\frac a2\right|<\frac52" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                기준점은 <InlineMath math="\dfrac a2" />,
                                기준점에서 해의 한쪽 끝까지의 거리는 <InlineMath math="\dfrac52" />입니다.
                            </p>

                            <p>
                                정수해의 최댓값이 <InlineMath math="10" />이므로
                                오른쪽 끝은 <InlineMath math="10" />보다 크고 <InlineMath math="11" />보다 작아야 합니다.
                            </p>

                            <BlockMath math="10<\frac a2+\frac52\le11" />

                            <BlockMath math="\frac{15}{2}<\frac a2\le\frac{17}{2}" />

                            <BlockMath math="15<a\le17" />

                            <p>
                                <InlineMath math="a" />는 정수이므로
                            </p>

                            <BlockMath math="a=16,\ 17" />

                            <p>
                                따라서 모든 정수 <InlineMath math="a" />의 값의 합은
                            </p>

                            <BlockMath math="16+17=33" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="33" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-4 leading-8 text-gray-300">
                            다음 조건을 만족시키는 실수 <InlineMath math="a" />의 최댓값을 구하시오.
                        </p>

                        <BlockMath math="-1<x<a\text{를 만족시키는 모든 실수 }x\text{가 }|x-4|\ge1\text{을 만족한다.}" />
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-6 space-y-6 leading-8 text-gray-300">

                            <p>
                                먼저 절댓값 부등식을 그래프로 생각합니다.
                            </p>

                            <BlockMath math="|x-4|\ge1" />

                            <p>
                                기준점은 <InlineMath math="4" />, 거리는 <InlineMath math="1" />이므로
                            </p>

                            <BlockMath math="x\le3\quad\text{또는}\quad x\ge5" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                즉, <InlineMath math="3<x<5" />에서는
                                부등식을 만족하지 않습니다.
                            </p>

                            <p>
                                이제 <InlineMath math="-1<x<a" />의 모든 실수가
                                주어진 부등식을 만족해야 합니다.
                            </p>

                            <p>
                                따라서 구간 <InlineMath math="-1<x<a" />가 <InlineMath math="3<x<5" />와 만나면 안 됩니다.
                            </p>

                            <p>
                                가능한 가장 큰 <InlineMath math="a" />는
                                금지 구간이 시작되는 점 <InlineMath math="3" />입니다.
                            </p>

                            <BlockMath math="a=3" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="a" />의 최댓값은 <InlineMath math="3" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-white/20 bg-white/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <ul className="ml-6 list-disc space-y-3 leading-8 text-gray-300">
                        <li>
                            <InlineMath math="|x-k|<d" />의 해가 <InlineMath math="p<x<q" />이면
                            기준점은 해의 양 끝의 중점입니다.
                        </li>

                        <li>
                            기준점에서 해의 한쪽 끝까지의 거리는
                            해의 전체 간격의 절반입니다.
                        </li>

                        <li>
                            <BlockMath math="k=\frac{p+q}{2},\qquad d=\frac{q-p}{2}" />
                        </li>

                        <li>
                            <InlineMath math="|ax-b|" />에서는 <InlineMath math="|a|" />가 거리의 배수 역할을 합니다.
                        </li>

                        <li>
                            <BlockMath math="|ax-b|=|a|\left|x-\frac ba\right|" />
                        </li>

                        <li>
                            <InlineMath math="a" />가 음수일 수도 있으므로
                            거리에는 <InlineMath math="|a|" />를 사용해야 합니다.
                        </li>
                    </ul>
                </div>
            </section>

        </>
    )
};