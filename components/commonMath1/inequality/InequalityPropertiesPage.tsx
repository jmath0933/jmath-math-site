"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

                    <motion.text x={getX(-2) - 12} y={BASE_Y + 60} fill="#d1d5db" fontSize="48">
                        -2
                    </motion.text>

                    <motion.text x={getX(3) - 7} y={BASE_Y + 60} fill="#d1d5db" fontSize="48">
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

export default function InequalityPropertiesPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.1 부등식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    두 대상의 크기를 비교하면 <b>크다</b>, <b>같다</b>, <b>작다</b>의 세 가지 관계가 있습니다.
                    이를 기호로 나타내면 <InlineMath math=">,\ \ge,\ =,\ \le,\ <,\ \ne" />
                    의 여섯 가지가 됩니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        등식과 부등식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="=" />을 사용하는 식을 <b>등식</b>,
                        나머지 <InlineMath math=">,\ \ge,\ <,\ \le,\ \ne" />
                        를 사용하는 식을 <b>부등식</b>이라고 합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        부등호의 기호와 뜻
                    </h3>

                    <div className="space-y-6 text-gray-300">

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="A>B" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>A가 B보다 크다.</li>
                                <li>A가 B 초과이다.</li>
                                <li>가로선에서는 A가 B의 오른쪽에 있다.</li>
                                <li>세로선에서는 A가 B의 위쪽에 있다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="A\ge B" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>A가 B보다 크거나 같다.</li>
                                <li>A가 B 이상이다.</li>
                                <li>A가 B보다 작지 않다.</li>
                                <li>가로선에서는 A가 B를 포함한 오른쪽에 있다.</li>
                                <li>세로선에서는 A가 B를 포함한 위쪽에 있다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="A<B" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>A가 B보다 작다.</li>
                                <li>A가 B 미만이다.</li>
                                <li>가로선에서는 A가 B의 왼쪽에 있다.</li>
                                <li>세로선에서는 A가 B의 아래쪽에 있다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="A\le B" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>A가 B보다 작거나 같다.</li>
                                <li>A가 B 이하이다.</li>
                                <li>A가 B보다 크지 않다.</li>
                                <li>가로선에서는 A가 B를 포함한 왼쪽에 있다.</li>
                                <li>세로선에서는 A가 B를 포함한 아래쪽에 있다.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold text-white">
                                <InlineMath math="A\ne B" />
                            </p>

                            <ul className="mt-2 ml-6 list-disc space-y-1">
                                <li>A가 B와 같지 않다.</li>
                                <li>A는 B보다 크거나 작다.</li>
                                <li>가로선에서는 A와 B가 서로 다른 점이다.</li>
                                <li>세로선에서는 A와 B가 서로 다른 점이다.</li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        수식 읽기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        수식은 <b>좌변에서 우변으로 읽는 것</b>을 기본으로 합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 <b>설명하려는 대상(주인공)은 좌변</b>에, <b>비교의 기준은 우변</b>에 두는 것이 자연스럽습니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">

                        <BlockMath math="x>3" />

                        <p className="text-center text-gray-300">
                            <InlineMath math="x" />가 <InlineMath math="3" />보다 크다.
                        </p>

                        <BlockMath math="y\le5" />

                        <p className="text-center text-gray-300">
                            <InlineMath math="y" />가 <InlineMath math="5" />보다 작거나 같다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        앞으로 부등식을 풀 때도 이 원칙을 사용하면
                        수식을 읽는 방법과 해를 표현하는 방법이 자연스럽게 연결됩니다.
                    </p>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.2 부등식의 기본 성질
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    부등식을 계산하거나 변형하기 위해서는 대소를 비교하는 방법과
                    부등식의 기본 성질을 이해해야 합니다.
                </p>

                {/* 두 실수의 대소 비교 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 실수의 대소 비교
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 실수의 크기를 비교하는 방법에는 여러 가지가 있다.
                        상황에 따라 가장 계산하기 쉬운 방법을 선택합니다.
                    </p>

                    <div className="mt-6">

                        <p className="font-bold text-white">
                            ① 두 수를 뺀 후에 <InlineMath math="0" />과 비교합니다.
                        </p>

                        <BlockMath math="A-B>0\Longleftrightarrow A>B" />

                        <BlockMath math="A-B=0\Longleftrightarrow A=B" />

                        <BlockMath math="A-B<0\Longleftrightarrow A<B" />

                    </div>

                    <div className="mt-6">

                        <p className="font-bold text-white">
                            ② 두 수를 나눈 후에 <InlineMath math="1" />과 비교합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            단, 두 수의 부호가 같을 때 사용할 수 있습니다.
                        </p>

                        <BlockMath math="\frac AB>1\Longleftrightarrow A>B" />

                        <BlockMath math="\frac AB=1\Longleftrightarrow A=B" />

                        <BlockMath math="\frac AB<1\Longleftrightarrow A<B" />

                    </div>

                    <div className="mt-6">

                        <p className="font-bold text-white">
                            ③ 같은 부호의 두 수는 제곱한 다음 뺀 후에 <InlineMath math="0" />과 비교합니다.
                        </p>

                        <BlockMath math="A^2-B^2>0\Longleftrightarrow A>B" />

                        <BlockMath math="A^2-B^2=0\Longleftrightarrow A=B" />

                        <BlockMath math="A^2-B^2<0\Longleftrightarrow A<B" />

                    </div>

                </div>


                {/* 부등식의 성질 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        부등식의 성질
                    </h3>

                    <div className="space-y-8">

                        <div>

                            <p className="font-bold text-white">
                                ① 서로 같은 수를 더하거나 빼도 부등호는 변하지 않습니다.
                            </p>

                            <BlockMath math="A>B\Longrightarrow A+C>B+C" />

                            <BlockMath math="A>B\Longrightarrow A-C>B-C" />

                            <p className="leading-8 text-gray-300">
                                따라서 이항하여도 부등호의 방향은 변하지 않습니다.
                            </p>

                        </div>

                        <div>

                            <p className="font-bold text-white">
                                ② 0이 아닌 서로 같은 양수를 곱하거나 나누어도 부등호는 변하지 않습니다.
                            </p>

                            <BlockMath math="A>B,\ C>0\Longrightarrow AC>BC" />

                            <BlockMath math="A>B,\ C>0\Longrightarrow \frac AC>\frac BC" />

                        </div>

                        <div>

                            <p className="font-bold text-white">
                                ③ 0이 아닌 서로 같은 음수를 곱하거나 나누면 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="A>B,\ C<0\Longrightarrow AC<BC" />

                            <BlockMath math="A>B,\ C<0\Longrightarrow \frac AC<\frac BC" />

                        </div>

                        <div>

                            <p className="font-bold text-white">
                                ④ 같은 부호의 수는 역수를 취하면 부등호의 방향이 바뀝니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                예를 들어
                            </p>

                            <BlockMath math="A<B,\quad AB>0" />

                            <p className="leading-8 text-gray-300">
                                이면 양변을 <InlineMath math="AB" />로 나누어
                            </p>

                            <BlockMath math="\frac{A}{AB}<\frac{B}{AB}" />

                            <BlockMath math="\frac1B<\frac1A" />

                            <p className="leading-8 text-gray-300">
                                즉,
                            </p>

                            <BlockMath math="A<B\Longleftrightarrow \frac1A>\frac1B\qquad(AB>0)" />

                        </div>

                    </div>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 수 <InlineMath math="A=\sqrt3+\sqrt2,\;B=2\sqrt2,\;C=3\sqrt2-\sqrt5" />
                            의 대소를 비교하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 <InlineMath math="A" />와 <InlineMath math="B" />를 비교합니다.
                            </p>

                            <p>
                                같은 수를 이항하여도 부등호는 변하지 않습니다.
                            </p>

                            <BlockMath math="\sqrt3+\sqrt2\ ?\ 2\sqrt2" />

                            <BlockMath math="\sqrt3\ ?\ 2\sqrt2-\sqrt2=\sqrt2" />

                            <BlockMath math="\sqrt3>\sqrt2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="A>B" />

                            <hr className="border-white/10" />

                            <p>
                                다음으로 <InlineMath math="B" />와 <InlineMath math="C" />를 비교합니다.
                            </p>

                            <BlockMath math="2\sqrt2\ ?\ 3\sqrt2-\sqrt5" />

                            <BlockMath math="\sqrt5\ ?\ 3\sqrt2-2\sqrt2=\sqrt2" />

                            <BlockMath math="\sqrt5>\sqrt2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="B>C" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="A>B>C" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="A>B,\;C>D" />
                            일 때, 다음 중 항상 옳은 것은?
                        </p>

                        <div className="space-y-3 [&_.katex-display]:!block [&_.katex-display]:!text-left [&_.katex-display_.katex]:!text-left">
                            <BlockMath math="\text{① }\;\frac1A<\frac1B" />
                            <BlockMath math="\text{② }\;A^2>B^2" />
                            <BlockMath math="\text{③ }\;A-D>B-C" />
                            <BlockMath math="\text{④ }\;A-C>B-D" />
                            <BlockMath math="\text{⑤ }\;AC>BD" />
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                각 보기를 하나씩 확인합니다.
                            </p>

                            <div>

                                <p>
                                    ① 역수는 두 수의 부호가 같을 때만 부등호의 방향이 바뀝니다.
                                    부호를 알 수 없으므로 항상 성립하지 않습니다.
                                </p>

                            </div>

                            <div>

                                <p>
                                    ② 제곱도 두 수의 부호가 같을 때만 대소관계가 유지됩니다.
                                    항상 성립하지 않습니다.
                                </p>

                            </div>

                            <div>

                                <p>
                                    ③
                                </p>

                                <BlockMath math="A>B,\quad -D>-C" />

                                <p>
                                    두 부등식을 더하면
                                </p>

                                <BlockMath math="A-D>B-C" />

                                <p>
                                    이므로 항상 성립합니다.
                                </p>

                            </div>

                            <div>

                                <p>
                                    ④는
                                </p>

                                <BlockMath math="-C<-D" />

                                <p>
                                    이므로 항상 성립하지 않습니다.
                                </p>

                            </div>

                            <div>

                                <p>
                                    ⑤는 음수나 0이 포함될 수도 있으므로 항상 성립하지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="{③}" />

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="1<\alpha<\beta" />인 임의의 실수 <InlineMath math="\alpha,\beta" />에 대하여
                        다음 중 항상 옳은 것을 고르시오.
                    </p>

                    <div
                        className="mt-5 space-y-3
        [&_.katex-display]:!block
        [&_.katex-display]:!text-left
        [&_.katex-display_.katex]:!text-left"
                    >
                        <BlockMath math="\text{① }\;\frac{\beta}{\alpha}<1" />
                        <BlockMath math="\text{② }\;\frac{\beta-1}{\alpha-1}<1" />
                        <BlockMath math="\text{③ }\;\frac{\beta-1}{\alpha-1}<\frac{\beta}{\alpha}" />
                        <BlockMath math="\text{④ }\;\frac{\alpha}{\beta}>1" />
                        <BlockMath math="\text{⑤ }\;\frac{\alpha-1}{\beta-1}<\frac{\alpha}{\beta}" />
                    </div>
                </div>

                <details className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                    <summary className="cursor-pointer text-xl font-bold text-yellow-300">
                        풀이 보기
                    </summary>

                    <div className="mt-5 space-y-4 leading-8 text-gray-300">

                        <p>
                            ① <InlineMath math="\beta>\alpha>0" />이므로
                        </p>

                        <BlockMath math="\frac{\beta}{\alpha}>1" />

                        <p>
                            따라서 거짓입니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ② <InlineMath math="\beta-1>\alpha-1>0" />이므로
                        </p>

                        <BlockMath math="\frac{\beta-1}{\alpha-1}>1" />

                        <p>
                            따라서 거짓입니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ③ 양변의 분모가 모두 양수이므로 교차곱하면
                        </p>

                        <BlockMath math="\frac{\beta-1}{\alpha-1}<\frac{\beta}{\alpha}" />

                        <BlockMath math="\Longleftrightarrow \alpha(\beta-1)<\beta(\alpha-1)" />

                        <BlockMath math="\Longleftrightarrow -\alpha<-\beta" />

                        <BlockMath math="\Longleftrightarrow \alpha>\beta" />

                        <p>
                            주어진 조건과 모순이므로 거짓입니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ④ <InlineMath math="\alpha<\beta" />이므로
                        </p>

                        <BlockMath math="\frac{\alpha}{\beta}<1" />

                        <p>
                            따라서 거짓입니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ⑤ 양변의 분모가 모두 양수이므로 교차곱하면
                        </p>

                        <BlockMath math="\frac{\alpha-1}{\beta-1}<\frac{\alpha}{\beta}" />

                        <BlockMath math="\Longleftrightarrow \beta(\alpha-1)<\alpha(\beta-1)" />

                        <BlockMath math="\Longleftrightarrow -\beta<-\alpha" />

                        <BlockMath math="\Longleftrightarrow \beta>\alpha" />

                        <p>
                            이는 항상 성립합니다.
                        </p>

                        <div className="mt-5 rounded-lg bg-green-500/10 p-4 text-lg font-bold text-green-300">
                            정답 : ⑤
                        </div>

                    </div>
                </details>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a>b" />일 때, 다음 중 항상 옳은 것을 고르시오.
                    </p>

                    <div
                        className="mt-5 space-y-3
        [&_.katex-display]:!block
        [&_.katex-display]:!text-left
        [&_.katex-display_.katex]:!text-left"
                    >
                        <BlockMath math="\text{① }\;\frac1a>\frac1b" />
                        <BlockMath math="\text{② }\;ac>bc" />
                        <BlockMath math="\text{③ }\;a^2>b^2" />
                        <BlockMath math="\text{④ }\;a^3>b^3" />
                        <BlockMath math="\text{⑤ }\;a^2>ab" />
                    </div>
                </div>

                <details className="mt-6 rounded-xl border border-yellow-500/20 bg-yellow-500/5 p-5">
                    <summary className="cursor-pointer text-xl font-bold text-yellow-300">
                        풀이 보기
                    </summary>

                    <div className="mt-5 space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 역수는 두 수의 부호가 같을 때만 부등호의 방향이 바뀝니다.
                            부호를 알 수 없으므로 항상 성립하지 않습니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ② <InlineMath math="c" />의 부호를 알 수 없습니다.
                        </p>

                        <p>
                            예를 들어 <InlineMath math="c<0" />이면
                            부등호의 방향이 바뀝니다.
                        </p>

                        <p>
                            따라서 항상 성립하지 않습니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ③ 제곱은 두 수의 부호가 같을 때만 대소관계가 유지됩니다.
                        </p>

                        <p>
                            예를 들어
                            <InlineMath math="a=1,\;b=-2" />이면
                        </p>

                        <BlockMath math="1>-2" />

                        <p>
                            이지만
                        </p>

                        <BlockMath math="1<4" />

                        <p>
                            가 됩니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ④ 세제곱은 실수 전체에서 항상 증가합니다.
                        </p>

                        <p>
                            따라서
                        </p>

                        <BlockMath math="a>b\Longrightarrow a^3>b^3" />

                        <p>
                            가 항상 성립합니다.
                        </p>

                        <hr className="border-white/10" />

                        <p>
                            ⑤
                        </p>

                        <BlockMath math="a^2>ab" />

                        <p>
                            를 정리하면
                        </p>

                        <BlockMath math="a(a-b)>0" />

                        <p>
                            입니다.
                        </p>

                        <p>
                            주어진 조건에서 <InlineMath math="a-b>0" />이므로
                            이 부등식은 <InlineMath math="a>0" />일 때만 성립합니다.
                        </p>

                        <p>
                            따라서 항상 성립하지 않습니다.
                        </p>

                        <div className="mt-5 rounded-lg bg-green-500/10 p-4 text-lg font-bold text-green-300">
                            정답 : ④
                        </div>

                    </div>
                </details>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|a|<1,\;|b|<1,\;|c|<1" />을 만족하는
                        세 실수 <InlineMath math="a,b,c" />에 대하여
                        다음 중 항상 성립하는 것을 모두 고르시오.
                    </p>

                    <div
                        className="mt-5 space-y-3
                            [&_.katex-display]:!block
                            [&_.katex-display]:!text-left
                            [&_.katex-display_.katex]:!text-left"
                    >
                        <BlockMath math="\text{ㄱ. }\;ab+1>a+b" />
                        <BlockMath math="\text{ㄴ. }\;abc+1>a+bc" />
                        <BlockMath math="\text{ㄷ. }\;a+b>\frac{ab}{a+b}" />
                    </div>
                </div>

                <details className="mt-5 rounded-xl border border-white/15 p-5">
                    <summary className="cursor-pointer font-semibold text-yellow-300">
                        풀이 보기
                    </summary>

                    <div className="mt-5 space-y-6 text-gray-300">
                        <p>
                            <InlineMath math="|a|<1,\ |b|<1,\ |c|<1" />이므로
                        </p>

                        <BlockMath math="-1<a<1,\quad -1<b<1,\quad -1<c<1" />

                        <hr className="border-white/10" />

                        <p className="font-semibold text-white">
                            ㄱ
                        </p>

                        <BlockMath math="ab+1>a+b" />

                        <BlockMath math="\Longleftrightarrow ab-a-b+1>0" />

                        <BlockMath math="\Longleftrightarrow (1-a)(1-b)>0" />

                        <p>
                            <InlineMath math="a<1,\ b<1" />이므로 <InlineMath math="1-a>0,\ 1-b>0" />이다.
                        </p>

                        <p>
                            따라서 ㄱ은 항상 성립합니다.
                        </p>

                        <hr className="border-white/10" />

                        <p className="font-semibold text-white">
                            ㄴ
                        </p>

                        <BlockMath math="abc+1>a+bc" />

                        <BlockMath math="\Longleftrightarrow abc-a-bc+1>0" />

                        <BlockMath math="\Longleftrightarrow (1-a)(1-bc)>0" />

                        <p>
                            <InlineMath math="a<1" />이므로 <InlineMath math="1-a>0" />입니다.
                        </p>

                        <p>
                            또 <InlineMath math="|b|<1,\ |c|<1" />이므로 <InlineMath math="|bc|<1" />이고,
                            따라서 <InlineMath math="1-bc>0" />입니다.
                        </p>

                        <p>
                            따라서 ㄴ은 항상 성립합니다.
                        </p>

                        <hr className="border-white/10" />

                        <p className="font-semibold text-white">
                            ㄷ
                        </p>

                        <BlockMath math="a+b>\frac{ab}{a+b}" />

                        <p>
                            분모가 있으므로 <InlineMath math="a+b\ne0" />입니다.
                            따라서 <InlineMath math="a+b>0" />인 경우와 <InlineMath math="a+b<0" />인 경우로 나누어 생각합니다.
                        </p>

                        <p>
                            먼저 <InlineMath math="a+b>0" />이면 양변에 <InlineMath math="a+b" />를 곱해도 부등호의 방향은 변하지 않습니다.
                        </p>

                        <BlockMath math="(a+b)^2>ab" />

                        <BlockMath math="a^2+ab+b^2>0" />

                        <p>
                            그런데
                        </p>

                        <BlockMath math="a^2+ab+b^2=\left(a+\frac b2\right)^2+\frac34b^2" />

                        <p>
                            이므로 항상 <InlineMath math="0" /> 이상이고, <InlineMath math="a+b\ne0" />이므로 <InlineMath math="a,\ b" />가 동시에 <InlineMath math="0" />일 수 없다.
                            따라서 이 경우에는 참입니다.
                        </p>

                        <p>
                            다음으로 <InlineMath math="a+b<0" />이면 양변에 <InlineMath math="a+b" />를 곱할 때 부등호의 방향이 바뀝니다.
                        </p>

                        <BlockMath math="(a+b)^2<ab" />

                        <BlockMath math="a^2+ab+b^2<0" />

                        <p>
                            하지만 <InlineMath math="a^2+ab+b^2" />는 항상 <InlineMath math="0" /> 이상이므로 이 경우에는 성립하지 않습니다.
                        </p>

                        <p>
                            따라서 ㄷ은 항상 성립하지 않습니다.
                        </p>

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath math="ㄱ, ㄴ" />
                        </div>
                    </div>
                </details>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            다음은 실수 <InlineMath math="a,\ b" />에 대하여 부등식 <InlineMath math="a^2+b^2\ge ab" />가 성립함을 보인 것이다.
                            빈칸을 완성하여라.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                            <p className="mb-4 font-bold text-white">
                                증명
                            </p>

                            <BlockMath math="a^2+b^2-ab=a^2-ab+\frac14b^2+\frac34b^2" />

                            <BlockMath math="=\left(a-\frac12b\right)^2+\left(\text{①}\right)" />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="a-\frac12b" />, <InlineMath math="b" />는 <InlineMath math="\left(\text{②}\right)" />이므로
                            </p>

                            <BlockMath math="\left(a-\frac12b\right)^2\ge0,\qquad \left(\text{①}\right)\ge0" />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="a^2+b^2\ge ab" />.
                                또 등호가 성립하는 경우는 <InlineMath math="\left(\text{③}\right)" />이다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                완전제곱식을 만들면
                            </p>

                            <BlockMath math="a^2-ab+\frac14b^2=\left(a-\frac12b\right)^2" />

                            <p>
                                이므로 남는 항은
                            </p>

                            <BlockMath math="\frac34b^2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\text{① }=\frac34b^2" />

                            <hr className="border-white/10" />

                            <p>
                                <InlineMath math="a-\frac12b" />와 <InlineMath math="b" />는 모두 실수이므로,
                                그 제곱은 항상 <InlineMath math="0" /> 이상입니다.
                            </p>

                            <BlockMath math="\text{② }=\text{실수}" />

                            <hr className="border-white/10" />

                            <p>
                                등호가 성립하려면 두 제곱식이 모두 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="\left(a-\frac12b\right)^2=0,\qquad \frac34b^2=0" />

                            <BlockMath math="a-\frac12b=0,\qquad b=0" />

                            <BlockMath math="a=0,\qquad b=0" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{① }=\frac34b^2,\qquad \text{② }=\text{실수},\qquad \text{③ }=a=b=0" />
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
                            다음은 <InlineMath math="a\ge0,\ b\ge0" />일 때,
                            두 수 <InlineMath math="A=\sqrt a+\sqrt b" />와 <InlineMath math="B=\sqrt{a+b}" />의 대소를 비교하는 과정이다.
                            증명과정을 완성하여라.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">
                            <BlockMath math="\left(A^2=\text{①}\right),\quad \left(B^2=\text{②}\right)" />

                            <BlockMath math="A^2-B^2=\left(\text{③}\right)\ge0" />

                            <p className="leading-8 text-gray-300">
                                따라서, <InlineMath math="\left(\text{④}\right)" />이고
                                등호는 <InlineMath math="ab=0" />일 때 성립한다.
                            </p>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 각각 제곱합니다.
                            </p>

                            <BlockMath math="A^2=(\sqrt a+\sqrt b)^2=a+b+2\sqrt{ab}" />

                            <BlockMath math="B^2=(\sqrt{a+b})^2=a+b" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="A^2-B^2=2\sqrt{ab}" />

                            <p>
                                <InlineMath math="a\ge0,\ b\ge0" />이므로 <InlineMath math="\sqrt{ab}\ge0" />입니다.
                            </p>

                            <BlockMath math="2\sqrt{ab}\ge0" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="A^2\ge B^2" />

                            <p>
                                또한 <InlineMath math="A\ge0,\ B\ge0" />이므로
                                제곱의 대소가 원래 수의 대소와 같습니다.
                            </p>

                            <BlockMath math="A\ge B" />

                            <p>
                                등호는 <InlineMath math="2\sqrt{ab}=0" />,
                                즉 <InlineMath math="ab=0" />일 때 성립합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>
                                <div className="mt-5 space-y-3
        [&_.katex-display]:!block
        [&_.katex-display]:!text-left
        [&_.katex-display_.katex]:!text-left">

                                    <BlockMath math="\text{① }=a+b+2\sqrt{ab}" />

                                    <BlockMath math="\text{② }=a+b" />

                                    <BlockMath math="\text{③ }=2\sqrt{ab}" />

                                    <BlockMath math="\text{④ }=A\ge B" />
                                </div>
                            </div>
                        </div>
                    </details>
                </div>


                {/* 요약 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <ul className="space-y-3 leading-8 text-gray-300">

                        <li>
                            • 대소 비교는 <InlineMath math="0" />, <InlineMath math="1" />, 제곱을 이용하여 비교할 수 있습니다.
                        </li>

                        <li>
                            • 같은 수를 더하거나 빼도 부등호는 변하지 않습니다.
                        </li>

                        <li>
                            • 같은 양수를 곱하거나 나누어도 부등호는 변하지 않습니다.
                        </li>

                        <li>
                            • 같은 음수를 곱하거나 나누면 부등호의 방향이 바뀝니다.
                        </li>

                        <li>
                            • 같은 부호의 수는 역수를 취하면 부등호의 방향이 바뀝니다.
                        </li>

                    </ul>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.3 범위의 사칙연산
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    두 범위의 합, 차, 곱, 몫의 범위는
                    각 범위의 <strong>경계값</strong>을 이용하여 구할 수 있습니다.
                    새로운 범위의 경계는 항상 경계값의 연산 결과에서 결정되며,
                    계산에 사용된 경계값이 모두 포함될 때만 등호를 붙입니다.
                </p>

                {/* 정의 */}
                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        범위의 사칙연산
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 범위
                    </p>

                    <BlockMath math="-2<x\le1,\qquad -3\le y<4" />

                    <p className="leading-8 text-gray-300">
                        가 주어졌을 때 새로운 범위는 다음과 같이 구합니다.
                    </p>

                    <ul className="mt-4 space-y-4 leading-8 text-gray-300">

                        <li>
                            <strong>① 덧셈</strong><br />
                            작은 값끼리 더하고 큰 값끼리 더하여 범위를 구합니다.
                            계산에 사용된 경계값이 모두 포함되는 경우에만 등호를 붙입니다.
                        </li>

                        <BlockMath math="-5<x+y<5" />

                        <li>
                            <strong>② 뺄셈</strong><br />
                            작은 값에서 큰 값을 빼고,
                            큰 값에서 작은 값을 빼서 범위를 구합니다.
                            계산에 사용된 경계값이 모두 포함되는 경우에만 등호를 붙입니다.
                        </li>

                        <BlockMath math="-6<x-y<4" />

                        <li>
                            <strong>③ 곱셈</strong><br />
                            네 개의 경계값을 모두 서로 곱하여 가능한 값을 구한 후
                            최솟값과 최댓값을 새로운 범위의 경계로 합니다.
                        </li>

                        <BlockMath math="(-2)(-3)=6,\quad (-2)(4)=-8,\quad (1)(-3)=-3,\quad (1)(4)=4" />

                        <BlockMath math="-8<xy<6" />

                        <li>
                            <strong>④ 나눗셈</strong><br />
                            네 개의 경계값을 모두 서로 나누어 가능한 값을 구한 후
                            최솟값과 최댓값을 새로운 범위의 경계로 합니다.
                        </li>

                        <BlockMath math="\frac{-2}{-3}=\frac23,\quad
            \frac{-2}{4}=-\frac12,\quad
            \frac1{-3}=-\frac13,\quad
            \frac14=\frac14" />

                    </ul>

                    <div className="mt-6 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
                        <p className="leading-8 text-yellow-200">
                            <strong>※ 주의</strong><br />
                            나눗셈은 분모의 범위에 <InlineMath math="0" />
                            이 포함되면 따로 경우를 나누어 생각해야 합니다.
                        </p>
                    </div>
                </div>

                {/* 예제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음을 만족하는 <InlineMath math="y" />의 값 중 정수들의 합을 구하여라.
                    </p>

                    <BlockMath math="\frac14\le x\le\frac12,\qquad
    y=\frac{4-3x}{2x}" />

                    <details className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 leading-8 text-gray-300">

                            <p>
                                먼저 식을 다음과 같이 변형합니다.
                            </p>

                            <BlockMath math="
            y=\frac4{2x}-\frac{3x}{2x}
            =\frac2x-\frac32
            " />

                            <p>
                                주어진 범위의 양변은 모두 양수이므로
                                역수를 취하면 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="
            \frac14\le x\le\frac12
            " />

                            <BlockMath math="
            2\le\frac1x\le4
            " />

                            <p>
                                양변에 2를 곱하면
                            </p>

                            <BlockMath math="
            4\le\frac2x\le8
            " />

                            <p>
                                양변에서 <InlineMath math="\frac32" />
                                를 빼면
                            </p>

                            <BlockMath math="
            \frac52\le y\le\frac{13}2
            " />

                            <p>
                                따라서 가능한 정수는
                            </p>

                            <BlockMath math="
            3,\;4,\;5,\;6
            " />

                            <p>
                                이들의 합은
                            </p>

                            <BlockMath math="
            3+4+5+6=18
            " />

                            <p className="font-semibold text-green-400">
                                따라서 정답은 18입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x+2y=3,\;-1\le y\le2" />
                        일 때  <InlineMath math="x" />
                        의 범위를 <InlineMath math="a\le x\le b" />
                        라 하면 <InlineMath math="a-b" />
                        의 값을 구하여라.
                    </p>

                    <details className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 leading-8 text-gray-300">

                            <p>
                                먼저 <InlineMath math="x" />에 대하여 정리하면
                            </p>

                            <BlockMath math="
            x=3-2y
            " />

                            <p>
                                주어진 범위의 양변에 2를 곱하면
                            </p>

                            <BlockMath math="
            -2\le2y\le4
            " />

                            <p>
                                양변에 -1을 곱하면 부등호의 방향이 바뀝니다.
                            </p>

                            <BlockMath math="
            -4\le-2y\le2
            " />

                            <p>
                                양변에 3을 더하면
                            </p>

                            <BlockMath math="
            -1\le3-2y\le5
            " />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="
            -1\le x\le5
            " />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="
            a=-1,\qquad b=5
            " />

                            <BlockMath math="
            a-b=-1-5=-6
            " />

                            <p className="font-semibold text-green-400">
                                따라서 정답은 <InlineMath math="-6" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="-1\le x\le2,\;-5\le y\le-2" />
                        일 때, <InlineMath math="3x-2y" />
                        의 최댓값과 최솟값의 곱을 구하여라.
                    </p>

                    <details className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 leading-8 text-gray-300">

                            <p>
                                먼저 양변에 3을 곱하면
                            </p>

                            <BlockMath math="-3\le3x\le6" />

                            <p>
                                다음으로 양변에 -2를 곱하면 부등호의 방향이 바뀌므로
                            </p>

                            <BlockMath math="4\le-2y\le10" />

                            <p>
                                두 범위를 더하면
                            </p>

                            <BlockMath math="1\le3x-2y\le16" />

                            <p>
                                따라서 최솟값은 <InlineMath math="1" />,
                                최댓값은 <InlineMath math="16" />
                                입니다.
                            </p>

                            <BlockMath math="1\times16=16" />

                            <p className="font-semibold text-green-400">
                                따라서 정답은 <InlineMath math="16" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="f(x)=ax+b" />
                        에 대하여 <InlineMath math="1<f(1)<4,\;-2<f(2)<2" />
                        일 때, <InlineMath math="f(0)" />
                        의 값의 범위를 구하여라.
                        (단, <InlineMath math="a,b" />
                        는 실수이다.)
                    </p>

                    <details className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 leading-8 text-gray-300">

                            <p>
                                먼저
                            </p>

                            <BlockMath math="
            \begin{aligned}
            f(1)&=a+b\\
            f(2)&=2a+b
            \end{aligned}
            " />

                            <p>
                                두 식을 이용하면
                            </p>

                            <BlockMath math="
            a=f(2)-f(1)
            " />

                            <BlockMath math="
            b=2f(1)-f(2)
            " />

                            <p>
                                또, <InlineMath math="f(0)=b" />
                                이므로
                            </p>

                            <BlockMath math="
            f(0)=2f(1)-f(2)
            " />

                            <p>
                                먼저 양변에 2를 곱하면
                            </p>

                            <BlockMath math="
            2<2f(1)<8
            " />

                            <p>
                                다음으로 양변에 -1을 곱하면 부등호의 방향이 바뀌므로
                            </p>

                            <BlockMath math="
            -2<-f(2)<2
            " />

                            <p>
                                두 범위를 더하면
                            </p>

                            <BlockMath math="
            0<f(0)<10
            " />

                            <p className="font-semibold text-green-400">
                                따라서
                            </p>

                            <BlockMath math="
            0<f(0)<10
            " />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="-2<x<10,\;-12<y<-2" />
                        에 대하여 다음 식의 값의 범위를 구하여라.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        (1)&nbsp;<InlineMath math="xy" />
                    </p>

                    <p className="leading-8 text-gray-300">
                        (2)&nbsp;<InlineMath math="\dfrac{x}{y}" />
                    </p>

                    <details className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <summary className="cursor-pointer text-lg font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 leading-8 text-gray-300">

                            <h4 className="font-semibold text-white">
                                (1) <InlineMath math="xy" />
                            </h4>

                            <p>
                                네 개의 경계값을 모두 곱합니다.
                            </p>

                            <BlockMath math="
            (-2)(-12)=24,\quad
            (-2)(-2)=4,\quad
            10(-12)=-120,\quad
            10(-2)=-20
            " />

                            <p>
                                최솟값은 <InlineMath math="-120" />,
                                최댓값은 <InlineMath math="24" />
                                이므로
                            </p>

                            <BlockMath math="
            -120<xy<24
            " />

                            <hr className="border-white/20" />

                            <h4 className="font-semibold text-white">
                                (2) <InlineMath math="\dfrac{x}{y}" />
                            </h4>

                            <p>
                                네 개의 경계값을 모두 나눕니다.
                            </p>

                            <BlockMath math="
            \frac{-2}{-12}=\frac16,\quad
            \frac{-2}{-2}=1,\quad
            \frac{10}{-12}=-\frac56,\quad
            \frac{10}{-2}=-5
            " />

                            <p>
                                최솟값은 <InlineMath math="-5" />,
                                최댓값은 <InlineMath math="1" />
                                이므로
                            </p>

                            <BlockMath math="
            -5<\frac{x}{y}<1
            " />

                        </div>
                    </details>
                </div>
                {/* 요약 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <ul className="space-y-3 leading-8 text-gray-300">
                        <li>• 덧셈 : 작은 값끼리, 큰 값끼리 더합니다.</li>
                        <li>• 뺄셈 : 작은 값−큰 값, 큰 값−작은 값을 계산합니다.</li>
                        <li>• 곱셈 : 네 개의 경계값을 모두 곱하여 최솟값과 최댓값을 찾습니다.</li>
                        <li>• 나눗셈 : 네 개의 경계값을 모두 나누어 최솟값과 최댓값을 찾습니다.</li>
                        <li>• 등호는 계산에 사용된 경계값이 모두 포함될 때만 붙습니다.</li>
                    </ul>
                </div>
            </section>

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
                        위에 있다는 뜻입다.
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
                            <BlockMath math="x>3\;:\;\text{『x는 3보다 크다』}" />
                            <BlockMath math="x<3\;:\;\text{『x는 3보다 작다』}" />
                            <BlockMath math="x\ge3\;:\;\text{『x는 3 이상이다』}" />
                            <BlockMath math="x\le3\;:\;\text{『x는 3 이하이다』}" />
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

                    <details className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                        <summary className="cursor-pointer text-xl font-bold text-yellow-300">
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
                            <InlineMath math="x" />에 대한 부등식
                            <InlineMath math="(a+b)x-2b\le0" />
                            의 해가
                            <InlineMath math="x\ge-2" />
                            일 때,
                            <InlineMath math="bx-4a\ge0" />
                            의 해를 구하시오.
                        </p>
                    </div>

                    <details className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                        <summary className="cursor-pointer text-xl font-bold text-yellow-300">
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

                    <details className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                        <summary className="cursor-pointer text-xl font-bold text-yellow-300">
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



        </>
    )
};