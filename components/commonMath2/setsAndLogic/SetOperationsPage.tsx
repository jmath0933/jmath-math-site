"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type VennType =
    | "disjoint"
    | "overlap"
    | "a-subset-b"
    | "b-subset-a"
    | "equal";

function VennDiagram({ type }: { type: VennType }) {

    if (type === "disjoint") {
        return (
            <div className="mx-auto w-full max-w-sm">
                <svg viewBox="0 0 500 320" className="h-auto w-full">
                    <circle
                        cx="155"
                        cy="165"
                        r="95"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    <circle
                        cx="385"
                        cy="165"
                        r="95"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />


                    {/* 라벨 */}
                    <text
                        x="155"
                        y="55"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        A
                    </text>

                    <text
                        x="385"
                        y="55"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        B
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "overlap") {
        return (
            <div className="mx-auto w-full max-w-sm">
                <svg
                    viewBox="0 0 500 320"
                    className="h-auto w-full"
                    aria-label="교집합이 있는 두 집합 A와 B"
                >
                    <circle
                        cx="205"
                        cy="165"
                        r="105"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    <circle
                        cx="295"
                        cy="165"
                        r="105"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    <text
                        x="165"
                        y="55"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        A
                    </text>

                    <text
                        x="335"
                        y="55"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        B
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "a-subset-b") {
        return (
            <div className="mx-auto w-full max-w-sm">
                <svg
                    viewBox="0 0 500 320"
                    className="h-auto w-full"
                    aria-label="A가 B의 부분집합인 벤다이어그램"
                >
                    {/* B */}
                    <circle
                        cx="250"
                        cy="165"
                        r="130"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    {/* A */}
                    <circle
                        cx="250"
                        cy="165"
                        r="75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    <text
                        x="250"
                        y="38"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        B
                    </text>

                    <text
                        x="250"
                        y="105"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        A
                    </text>
                </svg>
            </div>
        );
    }

    if (type === "b-subset-a") {
        return (
            <div className="mx-auto w-full max-w-sm">
                <svg
                    viewBox="0 0 500 320"
                    className="h-auto w-full"
                    aria-label="A가 B의 부분집합인 벤다이어그램"
                >
                    {/* B */}
                    <circle
                        cx="250"
                        cy="165"
                        r="130"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    {/* A */}
                    <circle
                        cx="250"
                        cy="165"
                        r="75"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />

                    <text
                        x="250"
                        y="38"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        A
                    </text>

                    <text
                        x="250"
                        y="105"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        B
                    </text>
                </svg>
            </div>
        );
    }

    // A = B
    return (
        <div className="mx-auto w-full max-w-sm">
            <svg
                viewBox="0 0 500 320"
                className="h-auto w-full"
                aria-label="두 집합 A와 B가 같은 벤다이어그램"
            >
                <circle
                    cx="250"
                    cy="165"
                    r="125"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-gray-400"
                />

                <text
                    x="250"
                    y="35"
                    textAnchor="middle"
                    fill="currentColor"
                    fontSize="30"
                    fontFamily="KaTeX_Math, serif"
                    fontStyle="italic"
                    className="text-gray-200"
                >
                    A = B
                </text>
            </svg>
        </div>
    );
}
type SetRegionType =
    | "aOnly"
    | "intersection"
    | "bOnly"
    | "outside"
    | "a"
    | "aComplement"
    | "b"
    | "bComplement"
    | "union";


function SetRegionExplorer() {

    const [selected, setSelected] =
        useState<SetRegionType | null>(null);


    const activeRegions: Record<SetRegionType, string[]> = {
        aOnly: ["aOnly"],
        intersection: ["intersection"],
        bOnly: ["bOnly"],
        outside: ["outside"],

        a: ["aOnly", "intersection"],
        aComplement: ["bOnly", "outside"],

        b: ["intersection", "bOnly"],
        bComplement: ["aOnly", "outside"],

        union: ["aOnly", "intersection", "bOnly"],
    };


    const isActive = (region: string) => {
        if (!selected) return false;

        return activeRegions[selected].includes(region);
    };


    const buttonClass = (type: SetRegionType) => `
        flex min-h-[56px] items-center justify-center
        rounded-lg border px-4 py-3
        transition
        ${selected === type
            ? "border-blue-400 bg-blue-500/20 text-white"
            : "border-white/20 bg-white/5 text-gray-300 hover:bg-white/10"
        }
    `;


    return (
        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

            {/* 벤다이어그램 */}
            <div className="mx-auto w-full max-w-xl">

                <svg
                    viewBox="0 0 560 380"
                    className="h-auto w-full"
                    aria-label="집합 A와 B가 만드는 영역"
                >

                    <defs>

                        {/* B 안쪽 */}
                        <clipPath id="set-region-clip-b">
                            <circle
                                cx="335"
                                cy="190"
                                r="115"
                            />
                        </clipPath>


                        {/* A에서 B를 제외 */}
                        <mask id="set-region-a-only-mask">

                            <rect
                                x="0"
                                y="0"
                                width="560"
                                height="380"
                                fill="white"
                            />

                            <circle
                                cx="335"
                                cy="190"
                                r="115"
                                fill="black"
                            />

                        </mask>


                        {/* B에서 A를 제외 */}
                        <mask id="set-region-b-only-mask">

                            <rect
                                x="0"
                                y="0"
                                width="560"
                                height="380"
                                fill="white"
                            />

                            <circle
                                cx="225"
                                cy="190"
                                r="115"
                                fill="black"
                            />

                        </mask>


                        {/* A와 B 모두 제외 */}
                        <mask id="set-region-outside-mask">

                            <rect
                                x="0"
                                y="0"
                                width="560"
                                height="380"
                                fill="white"
                            />

                            <circle
                                cx="225"
                                cy="190"
                                r="115"
                                fill="black"
                            />

                            <circle
                                cx="335"
                                cy="190"
                                r="115"
                                fill="black"
                            />

                        </mask>

                    </defs>


                    {/* 전체집합 U */}
                    <rect
                        x="30"
                        y="30"
                        width="500"
                        height="320"
                        rx="32"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-400"
                    />


                    {/* A ∩ B^C */}
                    {isActive("aOnly") && (
                        <circle
                            cx="225"
                            cy="190"
                            r="115"
                            mask="url(#set-region-a-only-mask)"
                            fill="currentColor"
                            className="text-blue-500/40"
                        />
                    )}


                    {/* A ∩ B */}
                    {isActive("intersection") && (
                        <circle
                            cx="225"
                            cy="190"
                            r="115"
                            clipPath="url(#set-region-clip-b)"
                            fill="currentColor"
                            className="text-blue-500/40"
                        />
                    )}


                    {/* A^C ∩ B */}
                    {isActive("bOnly") && (
                        <circle
                            cx="335"
                            cy="190"
                            r="115"
                            mask="url(#set-region-b-only-mask)"
                            fill="currentColor"
                            className="text-blue-500/40"
                        />
                    )}


                    {/* A^C ∩ B^C */}
                    {isActive("outside") && (
                        <rect
                            x="30"
                            y="30"
                            width="500"
                            height="320"
                            rx="32"
                            mask="url(#set-region-outside-mask)"
                            fill="currentColor"
                            className="text-blue-500/30"
                        />
                    )}


                    {/* 집합 A */}
                    <circle
                        cx="225"
                        cy="190"
                        r="115"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-300"
                    />


                    {/* 집합 B */}
                    <circle
                        cx="335"
                        cy="190"
                        r="115"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="text-gray-300"
                    />


                    {/* U 라벨 */}
                    <text
                        x="50"
                        y="23"
                        fill="currentColor"
                        fontSize="28"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-200"
                    >
                        U
                    </text>


                    {/* A 라벨 */}
                    <text
                        x="170"
                        y="82"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-100"
                    >
                        A
                    </text>


                    {/* B 라벨 */}
                    <text
                        x="390"
                        y="82"
                        textAnchor="middle"
                        fill="currentColor"
                        fontSize="30"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                        className="text-gray-100"
                    >
                        B
                    </text>

                </svg>

            </div>


            {/* 버튼 */}
            <div className="mt-6 grid grid-cols-5 gap-2">

                {/* 첫째 줄 : 4개의 방 */}

                <button
                    type="button"
                    onClick={() => setSelected("aOnly")}
                    className={buttonClass("aOnly")}
                >
                    <InlineMath math="A\cap B^C" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("intersection")}
                    className={buttonClass("intersection")}
                >
                    <InlineMath math="A\cap B" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("bOnly")}
                    className={buttonClass("bOnly")}
                >
                    <InlineMath math="A^C\cap B" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("outside")}
                    className={buttonClass("outside")}
                >
                    <InlineMath math="A^C\cap B^C" />
                </button>


                {/* 합집합 : 두 줄 차지 */}
                <div className="row-span-2 flex flex-col gap-2">
                    <button
                        type="button"
                        onClick={() => setSelected("union")}
                        className={`${buttonClass("union")} flex-1`}
                    >
                        <InlineMath math="A\cup B" />
                    </button>

                    <button
                        type="button"
                        onClick={() => setSelected(null)}
                        className="
            rounded-lg border border-white/15
            px-3 py-2
            text-sm text-gray-500
            transition
            hover:border-white/30
            hover:bg-white/5
            hover:text-gray-300
        "
                    >
                        초기화
                    </button>
                </div>


                {/* 둘째 줄 : 집합과 여집합 */}

                <button
                    type="button"
                    onClick={() => setSelected("a")}
                    className={buttonClass("a")}
                >
                    <InlineMath math="A" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("aComplement")}
                    className={buttonClass("aComplement")}
                >
                    <InlineMath math="A^C" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("b")}
                    className={buttonClass("b")}
                >
                    <InlineMath math="B" />
                </button>


                <button
                    type="button"
                    onClick={() => setSelected("bComplement")}
                    className={buttonClass("bComplement")}
                >
                    <InlineMath math="B^C" />
                </button>

            </div>


            {/* 안내 */}
            <p className="mt-4 text-center text-sm text-gray-400">
                집합을 선택하여 해당하는 영역을 확인해 보세요.
            </p>

        </div>
    );
}

function InequalitySetExplorer() {
    type Sign = ">" | "<" | ">=" | "<=";

    type Interval = {
        left: number;
        right: number;
        leftClosed: boolean;
        rightClosed: boolean;
    };

    type Operation =
        | "aOnly"
        | "intersection"
        | "bOnly"
        | "outside"
        | "union"
        | "A"
        | "B"
        | "Ac"
        | "Bc";

    const [aSign, setASign] = useState<Sign>(">");
    const [bSign, setBSign] = useState<Sign>("<");
    const [operation, setOperation] =
        useState<Operation>("intersection");

    const A_VALUE = -2;
    const B_VALUE = 3;

    /* ----------------------------------------
       부등식 하나를 구간으로 변환
    ---------------------------------------- */
    const inequalityToIntervals = (
        sign: Sign,
        value: number
    ): Interval[] => {
        if (sign === ">") {
            return [
                {
                    left: value,
                    right: Infinity,
                    leftClosed: false,
                    rightClosed: false,
                },
            ];
        }

        if (sign === ">=") {
            return [
                {
                    left: value,
                    right: Infinity,
                    leftClosed: true,
                    rightClosed: false,
                },
            ];
        }

        if (sign === "<") {
            return [
                {
                    left: -Infinity,
                    right: value,
                    leftClosed: false,
                    rightClosed: false,
                },
            ];
        }

        return [
            {
                left: -Infinity,
                right: value,
                leftClosed: false,
                rightClosed: true,
            },
        ];
    };


    /* ----------------------------------------
       구간의 여집합
    ---------------------------------------- */
    const complement = (intervals: Interval[]): Interval[] => {
        if (intervals.length === 0) {
            return [
                {
                    left: -Infinity,
                    right: Infinity,
                    leftClosed: false,
                    rightClosed: false,
                },
            ];
        }

        const sorted = [...intervals].sort(
            (a, b) => a.left - b.left
        );

        const result: Interval[] = [];
        let current = -Infinity;
        let currentClosed = false;

        for (const interval of sorted) {
            if (current < interval.left) {
                result.push({
                    left: current,
                    right: interval.left,
                    leftClosed: currentClosed,
                    rightClosed: !interval.leftClosed,
                });
            }

            current = interval.right;
            currentClosed = !interval.rightClosed;
        }

        if (current < Infinity) {
            result.push({
                left: current,
                right: Infinity,
                leftClosed: currentClosed,
                rightClosed: false,
            });
        }

        return result;
    };


    /* ----------------------------------------
       두 집합의 교집합
    ---------------------------------------- */
    const intersection = (
        first: Interval[],
        second: Interval[]
    ): Interval[] => {
        const result: Interval[] = [];

        first.forEach((a) => {
            second.forEach((b) => {
                const left = Math.max(a.left, b.left);
                const right = Math.min(a.right, b.right);

                let leftClosed = false;
                let rightClosed = false;

                if (a.left === b.left) {
                    leftClosed =
                        a.leftClosed && b.leftClosed;
                } else if (left === a.left) {
                    leftClosed = a.leftClosed;
                } else {
                    leftClosed = b.leftClosed;
                }

                if (a.right === b.right) {
                    rightClosed =
                        a.rightClosed && b.rightClosed;
                } else if (right === a.right) {
                    rightClosed = a.rightClosed;
                } else {
                    rightClosed = b.rightClosed;
                }

                if (
                    left < right ||
                    (left === right &&
                        leftClosed &&
                        rightClosed)
                ) {
                    result.push({
                        left,
                        right,
                        leftClosed,
                        rightClosed,
                    });
                }
            });
        });

        return result;
    };


    /* ----------------------------------------
       여러 구간을 합쳐 정리
    ---------------------------------------- */
    const unionIntervals = (
        intervals: Interval[]
    ): Interval[] => {
        if (intervals.length === 0) return [];

        const sorted = [...intervals].sort((a, b) => {
            if (a.left === b.left) {
                return Number(b.leftClosed) - Number(a.leftClosed);
            }
            return a.left - b.left;
        });

        const result: Interval[] = [
            { ...sorted[0] },
        ];

        for (let i = 1; i < sorted.length; i++) {
            const current = result[result.length - 1];
            const next = sorted[i];

            const overlap =
                next.left < current.right ||
                (next.left === current.right &&
                    (current.rightClosed ||
                        next.leftClosed));

            if (overlap) {
                if (next.right > current.right) {
                    current.right = next.right;
                    current.rightClosed =
                        next.rightClosed;
                } else if (
                    next.right === current.right
                ) {
                    current.rightClosed =
                        current.rightClosed ||
                        next.rightClosed;
                }
            } else {
                result.push({ ...next });
            }
        }

        return result;
    };


    /* ----------------------------------------
       합집합
    ---------------------------------------- */
    const union = (
        first: Interval[],
        second: Interval[]
    ): Interval[] =>
        unionIntervals([...first, ...second]);


    /* ----------------------------------------
       A, B 및 여집합
    ---------------------------------------- */
    const A = inequalityToIntervals(
        aSign,
        A_VALUE
    );

    const B = inequalityToIntervals(
        bSign,
        B_VALUE
    );

    const Ac = complement(A);
    const Bc = complement(B);


    /* ----------------------------------------
       현재 선택된 연산 결과
    ---------------------------------------- */
    const getResult = (): Interval[] => {
        switch (operation) {
            case "aOnly":
                return intersection(A, Bc);

            case "intersection":
                return intersection(A, B);

            case "bOnly":
                return intersection(Ac, B);

            case "outside":
                return intersection(Ac, Bc);

            case "union":
                return union(A, B);

            case "A":
                return A;

            case "B":
                return B;

            case "Ac":
                return Ac;

            case "Bc":
                return Bc;
        }
    };

    const result = getResult();


    /* ----------------------------------------
       부등호를 KaTeX용 문자열로
    ---------------------------------------- */
    const signToMath = (sign: Sign) => {
        if (sign === ">=") return "\\ge";
        if (sign === "<=") return "\\le";
        return sign;
    };


    /* ----------------------------------------
       선택한 연산의 이름
    ---------------------------------------- */
    const operationMath: Record<
        Operation,
        string
    > = {
        aOnly: "A\\cap B^C",
        intersection: "A\\cap B",
        bOnly: "A^C\\cap B",
        outside: "A^C\\cap B^C",
        union: "A\\cup B",
        A: "A",
        B: "B",
        Ac: "A^C",
        Bc: "B^C",
    };


    /* ----------------------------------------
       구간 하나를 조건식으로 표현
    ---------------------------------------- */
    const intervalToCondition = (
        interval: Interval
    ): string => {
        const {
            left,
            right,
            leftClosed,
            rightClosed,
        } = interval;

        if (
            left === -Infinity &&
            right === Infinity
        ) {
            return "\\text{모든 실수 }x";
        }

        if (left === right) {
            return `x=${left}`;
        }

        if (left === -Infinity) {
            return `x${rightClosed ? "\\le" : "<"
                }${right}`;
        }

        if (right === Infinity) {
            return `x${leftClosed ? "\\ge" : ">"
                }${left}`;
        }

        const leftSign = leftClosed
            ? "\\le"
            : "<";

        const rightSign = rightClosed
            ? "\\le"
            : "<";

        return `${left}${leftSign} x ${rightSign}${right}`;
    };


    /* ----------------------------------------
       결과를 집합 식으로 표현
    ---------------------------------------- */
    const resultMath = () => {
        if (result.length === 0) {
            return `${operationMath[operation]}=\\varnothing`;
        }

        if (
            result.length === 1 &&
            result[0].left === -Infinity &&
            result[0].right === Infinity
        ) {
            return `${operationMath[operation]}=\\mathbb{R}`;
        }

        const conditions = result.map(
            intervalToCondition
        );

        return `${operationMath[operation]}
=
\\left\\{
x\\mid
${conditions.join("\\text{ 또는 }")}
\\right\\}`;
    };


    /* ----------------------------------------
       수직선 좌표
    ---------------------------------------- */
    const SVG_WIDTH = 760;
    const SVG_HEIGHT = 150;

    const LINE_LEFT = 55;
    const LINE_RIGHT = 705;
    const LINE_Y = 72;

    const VIEW_MIN = -7;
    const VIEW_MAX = 8;

    const toX = (value: number) =>
        LINE_LEFT +
        ((value - VIEW_MIN) /
            (VIEW_MAX - VIEW_MIN)) *
        (LINE_RIGHT - LINE_LEFT);


    /* ----------------------------------------
       선택 버튼 스타일
    ---------------------------------------- */
    const operationButtonClass = (
        value: Operation
    ) =>
        `rounded-lg border px-3 py-3 transition ${operation === value
            ? "border-blue-400 bg-blue-500/20 text-white"
            : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10"
        }`;


    const signButtonClass = (
        current: Sign,
        value: Sign
    ) =>
        `flex h-11 w-14 items-center justify-center rounded-md border text-lg font-bold transition ${current === value
            ? "border-blue-400 bg-blue-500/20 text-white"
            : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10"
        }`;


    /* ----------------------------------------
       초기화
    ---------------------------------------- */
    const reset = () => {
        setASign(">");
        setBSign("<");
        setOperation("intersection");
    };


    return (
        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

            {/* A, B 설정 */}
            <div className="grid gap-6 lg:grid-cols-2">

                {/* A */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="flex min-h-[104px] flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5">

                        <InlineMath
                            math={`A=\\{x\\mid x${signToMath(
                                aSign
                            )}-2\\}`}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-1">

                        <button
                            type="button"
                            onClick={() =>
                                setASign(">")
                            }
                            className={signButtonClass(
                                aSign,
                                ">"
                            )}
                        >
                            &gt;
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setASign("<")
                            }
                            className={signButtonClass(
                                aSign,
                                "<"
                            )}
                        >
                            &lt;
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setASign(">=")
                            }
                            className={signButtonClass(
                                aSign,
                                ">="
                            )}
                        >
                            ≥
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setASign("<=")
                            }
                            className={signButtonClass(
                                aSign,
                                "<="
                            )}
                        >
                            ≤
                        </button>

                    </div>

                </div>


                {/* B */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                    <div className="flex min-h-[104px] flex-1 items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5">

                        <InlineMath
                            math={`B=\\{x\\mid x${signToMath(
                                bSign
                            )}3\\}`}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-1">

                        <button
                            type="button"
                            onClick={() =>
                                setBSign(">")
                            }
                            className={signButtonClass(
                                bSign,
                                ">"
                            )}
                        >
                            &gt;
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setBSign("<")
                            }
                            className={signButtonClass(
                                bSign,
                                "<"
                            )}
                        >
                            &lt;
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setBSign(">=")
                            }
                            className={signButtonClass(
                                bSign,
                                ">="
                            )}
                        >
                            ≥
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setBSign("<=")
                            }
                            className={signButtonClass(
                                bSign,
                                "<="
                            )}
                        >
                            ≤
                        </button>

                    </div>

                </div>

            </div>


            {/* 수직선 */}
            <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">

                <svg
                    viewBox={`0 0 ${SVG_WIDTH} 210`}
                    className="h-auto w-full"
                    role="img"
                    aria-label="부등식의 해를 나타내는 수직선"
                >

                    {/* 높이 */}
                    {/*
            A       : y = 45
            B       : y = 85
            결과     : y = 135
            기준선   : y = 155
        */}

                    {/* 기본 수직선 */}
                    <line
                        x1={LINE_LEFT}
                        y1={155}
                        x2={LINE_RIGHT}
                        y2={155}
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="2"
                    />

                    {/* 왼쪽 화살표 */}
                    <path
                        d={`M ${LINE_LEFT} 155
                L ${LINE_LEFT + 12} 148
                M ${LINE_LEFT} 155
                L ${LINE_LEFT + 12} 162`}
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="2.5"
                        fill="none"
                    />

                    {/* 오른쪽 화살표 */}
                    <path
                        d={`M ${LINE_RIGHT} 155
                L ${LINE_RIGHT - 12} 148
                M ${LINE_RIGHT} 155
                L ${LINE_RIGHT - 12} 162`}
                        stroke="rgba(255,255,255,0.45)"
                        strokeWidth="2.5"
                        fill="none"
                    />


                    {/* A 범위 */}
                    {A.map((interval, index) => {
                        const leftX =
                            interval.left === -Infinity
                                ? LINE_LEFT
                                : toX(interval.left);

                        const rightX =
                            interval.right === Infinity
                                ? LINE_RIGHT
                                : toX(interval.right);

                        return (
                            <g key={`A-${index}`}>

                                <line
                                    x1={leftX}
                                    y1={45}
                                    x2={rightX}
                                    y2={45}
                                    stroke="rgb(56,189,248)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />

                                {/* 왼쪽 경계 연결선 */}
                                {interval.left !== -Infinity && (
                                    <>
                                        <line
                                            x1={leftX}
                                            y1={45}
                                            x2={leftX}
                                            y2={155}
                                            stroke="rgb(56,189,248)"
                                            strokeWidth="2"
                                            opacity="0.65"
                                        />

                                        <circle
                                            cx={leftX}
                                            cy={155}
                                            r="8"
                                            fill={
                                                interval.leftClosed
                                                    ? "rgb(56,189,248)"
                                                    : "rgb(15,23,42)"
                                            }
                                            stroke="rgb(56,189,248)"
                                            strokeWidth="3"
                                        />
                                    </>
                                )}

                                {/* 오른쪽 경계 연결선 */}
                                {interval.right !== Infinity && (
                                    <>
                                        <line
                                            x1={rightX}
                                            y1={45}
                                            x2={rightX}
                                            y2={155}
                                            stroke="rgb(56,189,248)"
                                            strokeWidth="2"
                                            opacity="0.65"
                                        />

                                        <circle
                                            cx={rightX}
                                            cy={155}
                                            r="8"
                                            fill={
                                                interval.rightClosed
                                                    ? "rgb(56,189,248)"
                                                    : "rgb(15,23,42)"
                                            }
                                            stroke="rgb(56,189,248)"
                                            strokeWidth="3"
                                        />
                                    </>
                                )}

                            </g>
                        );
                    })}


                    {/* B 범위 */}
                    {B.map((interval, index) => {
                        const leftX =
                            interval.left === -Infinity
                                ? LINE_LEFT
                                : toX(interval.left);

                        const rightX =
                            interval.right === Infinity
                                ? LINE_RIGHT
                                : toX(interval.right);

                        return (
                            <g key={`B-${index}`}>

                                <line
                                    x1={leftX}
                                    y1={85}
                                    x2={rightX}
                                    y2={85}
                                    stroke="rgb(34,197,94)"
                                    strokeWidth="5"
                                    strokeLinecap="round"
                                />

                                {interval.left !== -Infinity && (
                                    <>
                                        <line
                                            x1={leftX}
                                            y1={85}
                                            x2={leftX}
                                            y2={155}
                                            stroke="rgb(34,197,94)"
                                            strokeWidth="2"
                                            opacity="0.65"
                                        />

                                        <circle
                                            cx={leftX}
                                            cy={155}
                                            r="8"
                                            fill={
                                                interval.leftClosed
                                                    ? "rgb(34,197,94)"
                                                    : "rgb(15,23,42)"
                                            }
                                            stroke="rgb(34,197,94)"
                                            strokeWidth="3"
                                        />
                                    </>
                                )}

                                {interval.right !== Infinity && (
                                    <>
                                        <line
                                            x1={rightX}
                                            y1={85}
                                            x2={rightX}
                                            y2={155}
                                            stroke="rgb(34,197,94)"
                                            strokeWidth="2"
                                            opacity="0.65"
                                        />

                                        <circle
                                            cx={rightX}
                                            cy={155}
                                            r="8"
                                            fill={
                                                interval.rightClosed
                                                    ? "rgb(34,197,94)"
                                                    : "rgb(15,23,42)"
                                            }
                                            stroke="rgb(34,197,94)"
                                            strokeWidth="3"
                                        />
                                    </>
                                )}

                            </g>
                        );
                    })}


                    {/* 선택된 연산 결과 */}
                    {result.map((interval, index) => {
                        const RESULT_Y = 125;

                        const leftX =
                            interval.left === -Infinity
                                ? LINE_LEFT
                                : toX(interval.left);

                        const rightX =
                            interval.right === Infinity
                                ? LINE_RIGHT
                                : toX(interval.right);

                        return (
                            <g key={`result-${index}`}>

                                {/* 결과 범위 */}
                                <line
                                    x1={leftX}
                                    y1={RESULT_Y}
                                    x2={rightX}
                                    y2={RESULT_Y}
                                    stroke="rgb(250,204,21)"
                                    strokeWidth="7"
                                    strokeLinecap="round"
                                />


                                {/* 왼쪽 경계 */}
                                {interval.left !== -Infinity && (
                                    <circle
                                        cx={leftX}
                                        cy={RESULT_Y}
                                        r="8"
                                        fill={
                                            interval.leftClosed
                                                ? "rgb(250,204,21)"
                                                : "rgb(15,23,42)"
                                        }
                                        stroke="rgb(250,204,21)"
                                        strokeWidth="3"
                                    />
                                )}


                                {/* 오른쪽 경계 */}
                                {interval.right !== Infinity && (
                                    <circle
                                        cx={rightX}
                                        cy={RESULT_Y}
                                        r="8"
                                        fill={
                                            interval.rightClosed
                                                ? "rgb(250,204,21)"
                                                : "rgb(15,23,42)"
                                        }
                                        stroke="rgb(250,204,21)"
                                        strokeWidth="3"
                                    />
                                )}

                            </g>
                        );
                    })}


                    {/* -2 */}
                    <text
                        x={toX(-2)}
                        y={190}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.8)"
                        fontSize="18"
                    >
                        -2
                    </text>

                    {/* 3 */}
                    <text
                        x={toX(3)}
                        y={190}
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.8)"
                        fontSize="18"
                    >
                        3
                    </text>


                    {/* A / B / 결과 라벨 */}
                    <text
                        x={LINE_LEFT + 8}
                        y={37}
                        fill="rgb(56,189,248)"
                        fontSize="17"
                        fontWeight="600"
                    >
                        A
                    </text>

                    <text
                        x={LINE_LEFT + 8}
                        y={77}
                        fill="rgb(34,197,94)"
                        fontSize="17"
                        fontWeight="600"
                    >
                        B
                    </text>

                    <text
                        x={LINE_LEFT + 8}
                        y={117}
                        fill="rgb(250,204,21)"
                        fontSize="17"
                        fontWeight="600"
                    >
                        결과
                    </text>


                    {/* 공집합 */}
                    {result.length === 0 && (
                        <text
                            x={SVG_WIDTH / 2}
                            y={130}
                            textAnchor="middle"
                            fill="rgb(250,204,21)"
                            fontSize="24"
                        >
                            ∅
                        </text>
                    )}

                </svg>

            </div>


            {/* 결과식 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-center">

                <BlockMath
                    math={String.raw`${resultMath()}`}
                />

            </div>


            {/* 연산 버튼 1 */}
            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                <button
                    type="button"
                    onClick={() =>
                        setOperation("aOnly")
                    }
                    className={operationButtonClass(
                        "aOnly"
                    )}
                >
                    <InlineMath math="A\cap B^C" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("intersection")
                    }
                    className={operationButtonClass(
                        "intersection"
                    )}
                >
                    <InlineMath math="A\cap B" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("bOnly")
                    }
                    className={operationButtonClass(
                        "bOnly"
                    )}
                >
                    <InlineMath math="A^C\cap B" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("outside")
                    }
                    className={operationButtonClass(
                        "outside"
                    )}
                >
                    <InlineMath math="A^C\cap B^C" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("union")
                    }
                    className={operationButtonClass(
                        "union"
                    )}
                >
                    <InlineMath math="A\cup B" />
                </button>

            </div>


            {/* 연산 버튼 2 */}
            <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                <button
                    type="button"
                    onClick={() =>
                        setOperation("A")
                    }
                    className={operationButtonClass(
                        "A"
                    )}
                >
                    <InlineMath math="A" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("B")
                    }
                    className={operationButtonClass(
                        "B"
                    )}
                >
                    <InlineMath math="B" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("Ac")
                    }
                    className={operationButtonClass(
                        "Ac"
                    )}
                >
                    <InlineMath math="A^C" />
                </button>

                <button
                    type="button"
                    onClick={() =>
                        setOperation("Bc")
                    }
                    className={operationButtonClass(
                        "Bc"
                    )}
                >
                    <InlineMath math="B^C" />
                </button>

                <button
                    type="button"
                    onClick={reset}
                    className="rounded-lg border border-white/15 bg-black/20 px-3 py-3 font-semibold text-gray-300 transition hover:bg-white/10"
                >
                    초기화
                </button>

            </div>

        </div>
    );
}

function InclusionExclusionExplorer() {
    type RegionKey =
        | "aOnly"
        | "bOnly"
        | "cOnly"
        | "abOnly"
        | "bcOnly"
        | "caOnly"
        | "abc";

    type ViewMode =
        | "idle"
        | "A"
        | "B"
        | "C"
        | "AB"
        | "BC"
        | "CA"
        | "ABC"
        | "union";

    type UnionStep =
        | "idle"
        | "readyAdd"
        | "addingA"
        | "addingB"
        | "addingC"
        | "readySubtract"
        | "subtractingAB"
        | "subtractingBC"
        | "subtractingCA"
        | "readyTriple"
        | "addingTriple"
        | "complete";

    const [viewMode, setViewMode] = useState<ViewMode>("idle");
    const [unionStep, setUnionStep] = useState<UnionStep>("idle");

    const [counts, setCounts] = useState<Record<RegionKey, number>>({
        aOnly: 0,
        bOnly: 0,
        cOnly: 0,
        abOnly: 0,
        bcOnly: 0,
        caOnly: 0,
        abc: 0,
    });

    const sleep = (ms: number) =>
        new Promise((resolve) => setTimeout(resolve, ms));

    /* ----------------------------------------
       색
    ---------------------------------------- */

    const countColor = (count: number) => {
        if (count <= 0) return "transparent";

        if (count === 1) {
            return "rgba(34,197,94,0.72)";
        }

        if (count === 2) {
            return "rgba(250,204,21,0.80)";
        }

        return "rgba(239,68,68,0.82)";
    };

    /* ----------------------------------------
       초기화
    ---------------------------------------- */

    const clearCounts = () => {
        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 0,
            abOnly: 0,
            bcOnly: 0,
            caOnly: 0,
            abc: 0,
        });
    };

    const reset = () => {
        clearCounts();
        setViewMode("idle");
        setUnionStep("idle");
    };

    /* ----------------------------------------
       개별 영역 보기
    ---------------------------------------- */

    const showA = () => {
        setViewMode("A");
        setUnionStep("idle");

        setCounts({
            aOnly: 1,
            bOnly: 0,
            cOnly: 0,
            abOnly: 1,
            bcOnly: 0,
            caOnly: 1,
            abc: 1,
        });
    };

    const showB = () => {
        setViewMode("B");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 1,
            cOnly: 0,
            abOnly: 1,
            bcOnly: 1,
            caOnly: 0,
            abc: 1,
        });
    };

    const showC = () => {
        setViewMode("C");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 1,
            abOnly: 0,
            bcOnly: 1,
            caOnly: 1,
            abc: 1,
        });
    };

    const showAB = () => {
        setViewMode("AB");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 0,
            abOnly: 2,
            bcOnly: 0,
            caOnly: 0,
            abc: 2,
        });
    };

    const showBC = () => {
        setViewMode("BC");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 0,
            abOnly: 0,
            bcOnly: 2,
            caOnly: 0,
            abc: 2,
        });
    };

    const showCA = () => {
        setViewMode("CA");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 0,
            abOnly: 0,
            bcOnly: 0,
            caOnly: 2,
            abc: 2,
        });
    };

    const showABC = () => {
        setViewMode("ABC");
        setUnionStep("idle");

        setCounts({
            aOnly: 0,
            bOnly: 0,
            cOnly: 0,
            abOnly: 0,
            bcOnly: 0,
            caOnly: 0,
            abc: 3,
        });
    };

    /* ----------------------------------------
       합집합 시작
    ---------------------------------------- */

    const startUnion = () => {
        clearCounts();
        setViewMode("union");
        setUnionStep("readyAdd");
    };

    /* ----------------------------------------
       1단계 : n(A)+n(B)+n(C)
    ---------------------------------------- */

    const playAdd = async () => {
        if (unionStep !== "readyAdd") return;

        clearCounts();

        setUnionStep("addingA");

        setCounts({
            aOnly: 1,
            bOnly: 0,
            cOnly: 0,
            abOnly: 1,
            bcOnly: 0,
            caOnly: 1,
            abc: 1,
        });

        await sleep(600);

        setUnionStep("addingB");

        setCounts({
            aOnly: 1,
            bOnly: 1,
            cOnly: 0,
            abOnly: 2,
            bcOnly: 1,
            caOnly: 1,
            abc: 2,
        });

        await sleep(600);

        setUnionStep("addingC");

        setCounts({
            aOnly: 1,
            bOnly: 1,
            cOnly: 1,
            abOnly: 2,
            bcOnly: 2,
            caOnly: 2,
            abc: 3,
        });

        await sleep(650);

        setUnionStep("readySubtract");
    };

    /* ----------------------------------------
       2단계 : 교집합 3개 빼기
    ---------------------------------------- */

    const playSubtract = async () => {
        if (unionStep !== "readySubtract") return;

        setUnionStep("subtractingAB");

        setCounts((prev) => ({
            ...prev,
            abOnly: prev.abOnly - 1,
            abc: prev.abc - 1,
        }));

        await sleep(650);

        setUnionStep("subtractingBC");

        setCounts((prev) => ({
            ...prev,
            bcOnly: prev.bcOnly - 1,
            abc: prev.abc - 1,
        }));

        await sleep(650);

        setUnionStep("subtractingCA");

        setCounts((prev) => ({
            ...prev,
            caOnly: prev.caOnly - 1,
            abc: prev.abc - 1,
        }));

        await sleep(650);

        setUnionStep("readyTriple");
    };

    /* ----------------------------------------
       3단계 : 세 집합 공통부분 다시 더하기
    ---------------------------------------- */

    const playTriple = async () => {
        if (unionStep !== "readyTriple") return;

        setUnionStep("addingTriple");

        setCounts((prev) => ({
            ...prev,
            abc: prev.abc + 1,
        }));

        await sleep(700);

        setUnionStep("complete");
    };

    /* ----------------------------------------
       상태창 식
    ---------------------------------------- */

    const statusMath = () => {
        if (viewMode === "A") return "n(A)";
        if (viewMode === "B") return "n(B)";
        if (viewMode === "C") return "n(C)";

        if (viewMode === "AB") {
            return "n(A\\cap B)";
        }

        if (viewMode === "BC") {
            return "n(B\\cap C)";
        }

        if (viewMode === "CA") {
            return "n(C\\cap A)";
        }

        if (viewMode === "ABC") {
            return "n(A\\cap B\\cap C)";
        }

        if (viewMode !== "union") {
            return "\\text{영역을 선택해 보세요.}";
        }

        if (
            unionStep === "readyAdd" ||
            unionStep === "addingA" ||
            unionStep === "addingB" ||
            unionStep === "addingC"
        ) {
            return `
n(A\\cup B\\cup C)
`;
        }

        if (unionStep === "readySubtract") {
            return `
n(A\\cup B\\cup C)
=
n(A)+n(B)+n(C)
`;
        }

        if (
            unionStep === "subtractingAB" ||
            unionStep === "subtractingBC" ||
            unionStep === "subtractingCA"
        ) {
            return `
n(A\\cup B\\cup C)
=
n(A)+n(B)+n(C)
`;
        }

        if (unionStep === "readyTriple") {
            return `
\\begin{aligned}
n(A\\cup B\\cup C)
={}&n(A)+n(B)+n(C)\\\\
&-n(A\\cap B)-n(B\\cap C)-n(C\\cap A)
\\end{aligned}
`;
        }

        return `
\\begin{aligned}
n(A\\cup B\\cup C)
={}&n(A)+n(B)+n(C)\\\\
&-n(A\\cap B)-n(B\\cap C)-n(C\\cap A)\\\\
&+n(A\\cap B\\cap C)
\\end{aligned}
`;
    };

    /* ----------------------------------------
       현재 애니메이션 버튼
    ---------------------------------------- */

    const unionActionButton = () => {
        if (viewMode !== "union") return null;

        if (
            unionStep === "readyAdd" ||
            unionStep === "addingA" ||
            unionStep === "addingB" ||
            unionStep === "addingC"
        ) {
            return (
                <button
                    type="button"
                    disabled={unionStep !== "readyAdd"}
                    onClick={playAdd}
                    className="w-full rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-4 font-semibold text-green-300 transition hover:bg-green-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <InlineMath math="n(A)+n(B)+n(C)" />
                </button>
            );
        }

        if (
            unionStep === "readySubtract" ||
            unionStep === "subtractingAB" ||
            unionStep === "subtractingBC" ||
            unionStep === "subtractingCA"
        ) {
            return (
                <button
                    type="button"
                    disabled={unionStep !== "readySubtract"}
                    onClick={playSubtract}
                    className="w-full rounded-lg border border-yellow-500/40 bg-yellow-500/10 px-4 py-4 font-semibold text-yellow-300 transition hover:bg-yellow-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <InlineMath
                        math="-n(A\cap B)-n(B\cap C)-n(C\cap A)"
                    />
                </button>
            );
        }

        if (
            unionStep === "readyTriple" ||
            unionStep === "addingTriple"
        ) {
            return (
                <button
                    type="button"
                    disabled={unionStep !== "readyTriple"}
                    onClick={playTriple}
                    className="w-full rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-4 font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    <InlineMath math="+n(A\cap B\cap C)" />
                </button>
            );
        }

        if (unionStep === "complete") {
            return (
                <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4 text-center text-green-300">
                    포함과 배제가 완료되었습니다.
                </div>
            );
        }

        return null;
    };

    /* ----------------------------------------
       버튼 스타일
    ---------------------------------------- */

    const buttonClass = (
        active: boolean,
        color: "green" | "yellow" | "red" | "blue"
    ) => {
        const activeStyle = {
            green:
                "border-green-400 bg-green-500/20 text-green-200",
            yellow:
                "border-yellow-400 bg-yellow-500/20 text-yellow-200",
            red:
                "border-red-400 bg-red-500/20 text-red-200",
            blue:
                "border-blue-400 bg-blue-500/20 text-blue-200",
        };

        return `rounded-lg border px-3 py-3 transition ${active
            ? activeStyle[color]
            : "border-white/15 bg-black/20 text-gray-300 hover:bg-white/10"
            }`;
    };

    return (
        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

            {/* SVG */}
            <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4">

                <svg
                    viewBox="0 0 640 470"
                    className="mx-auto w-full max-w-[760px]"
                    role="img"
                    aria-label="세 집합의 포함과 배제 원리를 나타내는 벤다이어그램"
                >

                    <defs>

                        {/* A */}
                        <clipPath id="clipA">
                            <circle
                                cx="320"
                                cy="160"
                                r="120"
                            />
                        </clipPath>

                        {/* B */}
                        <clipPath id="clipB">
                            <circle
                                cx="235"
                                cy="300"
                                r="120"
                            />
                        </clipPath>

                        {/* C */}
                        <clipPath id="clipC">
                            <circle
                                cx="405"
                                cy="300"
                                r="120"
                            />
                        </clipPath>

                        {/* B가 아닌 영역 */}
                        <mask id="notB">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />
                            <circle
                                cx="235"
                                cy="300"
                                r="120"
                                fill="black"
                            />
                        </mask>

                        {/* C가 아닌 영역 */}
                        <mask id="notC">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />
                            <circle
                                cx="405"
                                cy="300"
                                r="120"
                                fill="black"
                            />
                        </mask>

                        {/* A가 아닌 영역 */}
                        <mask id="notA">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />
                            <circle
                                cx="320"
                                cy="160"
                                r="120"
                                fill="black"
                            />
                        </mask>

                        {/* B와 C를 모두 제외 */}
                        <mask id="notBOrC">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />

                            <circle
                                cx="235"
                                cy="300"
                                r="120"
                                fill="black"
                            />

                            <circle
                                cx="405"
                                cy="300"
                                r="120"
                                fill="black"
                            />
                        </mask>


                        {/* A와 C를 모두 제외 */}
                        <mask id="notAOrC">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />

                            <circle
                                cx="320"
                                cy="160"
                                r="120"
                                fill="black"
                            />

                            <circle
                                cx="405"
                                cy="300"
                                r="120"
                                fill="black"
                            />
                        </mask>


                        {/* A와 B를 모두 제외 */}
                        <mask id="notAOrB">
                            <rect
                                width="640"
                                height="470"
                                fill="white"
                            />

                            <circle
                                cx="320"
                                cy="160"
                                r="120"
                                fill="black"
                            />

                            <circle
                                cx="235"
                                cy="300"
                                r="120"
                                fill="black"
                            />
                        </mask>

                    </defs>


                    {/* A only */}
                    <circle
                        cx="320"
                        cy="160"
                        r="120"
                        fill={countColor(counts.aOnly)}
                        mask="url(#notBOrC)"
                    />


                    {/* B only */}
                    <circle
                        cx="235"
                        cy="300"
                        r="120"
                        fill={countColor(counts.bOnly)}
                        mask="url(#notAOrC)"
                    />


                    {/* C only */}
                    <circle
                        cx="405"
                        cy="300"
                        r="120"
                        fill={countColor(counts.cOnly)}
                        mask="url(#notAOrB)"
                    />


                    {/* A ∩ B 이지만 C는 아닌 부분 */}
                    <g
                        clipPath="url(#clipA)"
                        mask="url(#notC)"
                    >
                        <circle
                            cx="235"
                            cy="300"
                            r="120"
                            fill={countColor(counts.abOnly)}
                        />
                    </g>


                    {/* B ∩ C 이지만 A는 아닌 부분 */}
                    <g
                        clipPath="url(#clipB)"
                        mask="url(#notA)"
                    >
                        <circle
                            cx="405"
                            cy="300"
                            r="120"
                            fill={countColor(counts.bcOnly)}
                        />
                    </g>


                    {/* C ∩ A 이지만 B는 아닌 부분 */}
                    <g
                        clipPath="url(#clipA)"
                        mask="url(#notB)"
                    >
                        <circle
                            cx="405"
                            cy="300"
                            r="120"
                            fill={countColor(counts.caOnly)}
                        />
                    </g>


                    {/* A ∩ B ∩ C */}
                    <g clipPath="url(#clipA)">
                        <g clipPath="url(#clipB)">
                            <circle
                                cx="405"
                                cy="300"
                                r="120"
                                fill={countColor(counts.abc)}
                            />
                        </g>
                    </g>

                    {/* 원 테두리 */}
                    <circle
                        cx="320"
                        cy="160"
                        r="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.70)"
                        strokeWidth="3"
                    />

                    <circle
                        cx="235"
                        cy="300"
                        r="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.70)"
                        strokeWidth="3"
                    />

                    <circle
                        cx="405"
                        cy="300"
                        r="120"
                        fill="none"
                        stroke="rgba(255,255,255,0.70)"
                        strokeWidth="3"
                    />


                    {/* 라벨 */}
                    <text
                        x="320"
                        y="25"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.9)"
                        fontSize="25"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                    >
                        A
                    </text>

                    <text
                        x="105"
                        y="365"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.9)"
                        fontSize="25"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                    >
                        B
                    </text>

                    <text
                        x="535"
                        y="365"
                        textAnchor="middle"
                        fill="rgba(255,255,255,0.9)"
                        fontSize="25"
                        fontFamily="KaTeX_Math, serif"
                        fontStyle="italic"
                    >
                        C
                    </text>

                </svg>

            </div>


            {/* 상태창 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5 text-center">

                <BlockMath
                    math={String.raw`${statusMath()}`}
                />

            </div>


            {/* 개별 집합 */}
            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

                <button
                    type="button"
                    onClick={showA}
                    className={buttonClass(
                        viewMode === "A",
                        "green"
                    )}
                >
                    <InlineMath math="n(A)" />
                </button>

                <button
                    type="button"
                    onClick={showB}
                    className={buttonClass(
                        viewMode === "B",
                        "green"
                    )}
                >
                    <InlineMath math="n(B)" />
                </button>

                <button
                    type="button"
                    onClick={showC}
                    className={buttonClass(
                        viewMode === "C",
                        "green"
                    )}
                >
                    <InlineMath math="n(C)" />
                </button>

                <button
                    type="button"
                    onClick={reset}
                    className="rounded-lg border border-white/15 bg-black/20 px-3 py-3 font-semibold text-gray-300 transition hover:bg-white/10"
                >
                    초기화
                </button>

            </div>


            {/* 교집합 */}
            <div className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">

                <button
                    type="button"
                    onClick={showAB}
                    className={buttonClass(
                        viewMode === "AB",
                        "yellow"
                    )}
                >
                    <InlineMath math="n(A\cap B)" />
                </button>

                <button
                    type="button"
                    onClick={showBC}
                    className={buttonClass(
                        viewMode === "BC",
                        "yellow"
                    )}
                >
                    <InlineMath math="n(B\cap C)" />
                </button>

                <button
                    type="button"
                    onClick={showCA}
                    className={buttonClass(
                        viewMode === "CA",
                        "yellow"
                    )}
                >
                    <InlineMath math="n(C\cap A)" />
                </button>

                <button
                    type="button"
                    onClick={showABC}
                    className={buttonClass(
                        viewMode === "ABC",
                        "red"
                    )}
                >
                    <InlineMath math="n(A\cap B\cap C)" />
                </button>

            </div>


            {/* 합집합 시작 */}
            <div className="mt-2">

                <button
                    type="button"
                    onClick={startUnion}
                    className={buttonClass(
                        viewMode === "union",
                        "blue"
                    ) + " w-full"}
                >
                    <InlineMath math="n(A\cup B\cup C)" />
                </button>

            </div>


            {/* 포함과 배제 애니메이션 */}
            {viewMode === "union" && (
                <div className="mt-3">
                    {unionActionButton()}
                </div>
            )}


            {/* 색 의미 */}
            <div className="mt-5 flex flex-wrap justify-center gap-5 text-sm text-gray-400">

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-green-500" />
                    <span>1번 셈</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-yellow-400" />
                    <span>2번 셈</span>
                </div>

                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500" />
                    <span>3번 셈</span>
                </div>

            </div>

        </div>
    );
}

export default function SetOperationsPage() {
    return (
        <>
            {/* 2.6 집합의 연산 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.6 집합의 연산
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합을 이용하여 새로운 집합을 만들 수 있습니다.
                    <br />
                    집합의 연산은 각 원소가 어느 집합에 속하는지를
                    조건으로 판단합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 전체집합과 여집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 전체집합과 여집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합의 연산에서 생각하는 대상의 범위를 정해 주는 집합을{" "}
                            <b>전체집합</b>이라 하고, 보통{" "}
                            <InlineMath math="U" />로 나타냅니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" />의 원소 중에서
                            집합 <InlineMath math="A" />에 속하지 않는 원소로
                            이루어진 집합을 <b>집합 A의 여집합</b>이라 하고{" "}
                            <InlineMath math="A^C" />로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A^C=\{x\mid x\in U,\ x\notin A\}
`}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                우리말로 해석하면
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="A^C" />는
                                전체집합 <InlineMath math="U" /> 안에서{" "}
                                <b>집합 A가 아닌 원소들의 집합</b>입니다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
A^C=U-A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 생각할 수 있습니다.
                        </p>

                    </div>


                    {/* 2. 두 집합의 관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 두 집합의 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합 <InlineMath math="A,\ B" />의 위치 관계는
                            벤다이어그램으로 나타내면 다음과 같이 나누어 생각할 수 있습니다.
                        </p>


                        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                            {/* 서로소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-2 text-center font-bold text-white">
                                    서로소
                                </p>

                                <VennDiagram type="disjoint" />

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
`}
                                />

                            </div>


                            {/* 일반적인 겹침 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-2 text-center font-bold text-white">
                                    서로 겹치는 경우
                                </p>

                                <VennDiagram type="overlap" />

                                <p className="text-center leading-7 text-gray-300">
                                    서로 부분집합 관계는 아니지만
                                    공통인 원소가 있는 경우
                                </p>

                            </div>


                            {/* A subset B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-2 text-center font-bold text-white">
                                    <InlineMath math="A\subset B,\ A\ne B" />
                                </p>

                                <VennDiagram type="a-subset-b" />

                            </div>


                            {/* B subset A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-2 text-center font-bold text-white">
                                    <InlineMath math="B\subset A,\ A\ne B" />
                                </p>

                                <VennDiagram type="b-subset-a" />

                            </div>


                            {/* A = B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-2 text-center font-bold text-white">
                                    같은 집합
                                </p>

                                <VennDiagram type="equal" />

                            </div>

                        </div>


                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                서로소
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                두 집합에 공통으로 들어 있는 원소가 하나도 없을 때
                                두 집합을 <b>서로소</b>라고 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A\cap B=\varnothing
}
`}
                            />

                        </div>

                    </div>


                    {/* 3. 교집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 교집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />에도 있고
                            집합 <InlineMath math="B" />에도 있는
                            공통인 원소들을 모아 만든 집합을{" "}
                            <b>교집합</b>이라 하고{" "}
                            <InlineMath math="A\cap B" />로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B
=
\{x\mid x\in A\text{ and }x\in B\}
`}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                우리말로 해석하면
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B
\quad:\quad
A\text{이고 }B
`}
                            />

                            <p className="leading-8 text-gray-300">
                                즉, 두 집합에 <b>동시에 속하는 원소</b>입니다.
                            </p>

                        </div>

                    </div>


                    {/* 4. 합집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 합집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />에 있거나
                            집합 <InlineMath math="B" />에 있는 원소들을
                            모두 모아 만든 집합을 <b>합집합</b>이라 하고{" "}
                            <InlineMath math="A\cup B" />로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B
=
\{x\mid x\in A\text{ or }x\in B\}
`}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                우리말로 해석하면
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
\quad:\quad
A\text{ 또는 }B
`}
                            />

                            <p className="leading-8 text-gray-300">
                                여기서 <b>또는</b>은
                                집합 <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />에 동시에 속하는 경우도
                                포함합니다.
                            </p>

                        </div>

                    </div>


                    {/* 5. 두 집합이 만드는 4개의 영역 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 두 집합이 만드는 4개의 영역
                        </h3>

                        <p className="leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" /> 안에
                            두 집합 <InlineMath math="A,\ B" />가 있으면
                            전체 영역은 서로 겹치지 않는 4개의 영역으로
                            나누어 생각할 수 있습니다.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <BlockMath
                                    math={String.raw`
A\cap B^C
`}
                                />

                                <p className="text-center leading-7 text-gray-300">
                                    <InlineMath math="A" />이지만{" "}
                                    <InlineMath math="B" />는 아닌 영역
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <BlockMath
                                    math={String.raw`
A\cap B
`}
                                />

                                <p className="text-center leading-7 text-gray-300">
                                    <InlineMath math="A" />이고{" "}
                                    <InlineMath math="B" />인 영역
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <BlockMath
                                    math={String.raw`
A^C\cap B
`}
                                />

                                <p className="text-center leading-7 text-gray-300">
                                    <InlineMath math="A" />는 아니고{" "}
                                    <InlineMath math="B" />인 영역
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
`}
                                />

                                <p className="text-center leading-7 text-gray-300">
                                    <InlineMath math="A" />도 아니고{" "}
                                    <InlineMath math="B" />도 아닌 영역
                                </p>

                            </div>

                        </div>


                        <p className="mt-6 leading-8 text-gray-300">
                            다음 그림에서 각각의 집합을 선택하여
                            어느 영역에 해당하는지 확인해 봅시다.
                        </p>

                        <SetRegionExplorer />


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                영역의 개수로 생각하면
                            </p>

                            <div className="mt-4 space-y-3 text-gray-300">

                                <p>
                                    • <InlineMath math="A\cap B^C, A\cap B, A^C\cap B, A^C\cap B^C" /> : 1개의 영역
                                </p>

                                <p>
                                    • <InlineMath math="A, A^C, B, B^C" /> : 2개의 영역
                                </p>

                                <p>
                                    • <InlineMath math="A\cup B" /> : 3개의 영역
                                </p>

                                <p>
                                    • <InlineMath math="U" /> : 4개의 영역
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 6. 차집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 차집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />에는 있지만
                            집합 <InlineMath math="B" />에는 없는 원소들로
                            이루어진 집합을 <b>A와 B의 차집합</b>이라 하고{" "}
                            <InlineMath math="A-B" />로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A-B
=
\{x\mid x\in A,\ x\notin B\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x\notin B" />는{" "}
                            <InlineMath math="x\in B^C" />와 같은 뜻이므로
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A-B=A\cap B^C
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                같은 영역을 여러 방법으로 표현할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A-B
=
A\cap B^C
=
(A\cup B)-B
=
A-(A\cap B)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                네 식은 모두 벤다이어그램에서{" "}
                                <b>집합 A에만 속하는 하나의 영역</b>을
                                나타냅니다.
                            </p>

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
                            집합 <InlineMath math="S=\{1,2,3,4,5,6\}" />의 부분집합 중에서
                            집합 <InlineMath math="\{1,2,3\}" />과 서로소인 집합의 개수는?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="\{1,2,3\}" />과 서로소이려면
                                공통인 원소가 없어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 부분집합에 <InlineMath math="1,\ 2,\ 3" />은
                                포함될 수 없고, <InlineMath math="4,\ 5,\ 6" />만
                                포함될 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    각 원소의 선택
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="4,\ 5,\ 6" />은 각각
                                    포함하거나 포함하지 않는 2가지 선택이 가능합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2=8
`}
                                />

                            </div>

                            <p className="leading-8">
                                이때 아무 원소도 선택하지 않는 공집합도
                                집합 <InlineMath math="\{1,2,3\}" />과 서로소이므로
                                포함됩니다.
                            </p>

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
                                    어떤 집합과 서로소인 부분집합을 만들려면
                                    그 집합의 원소는 모두 제외해야 합니다.
                                    남은 원소들은 각각 포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{서로소}
\rightarrow
\text{공통 원소 제외}
\rightarrow
\text{남은 원소를 선택}
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
                            집합{" "}
                            <InlineMath math="A=\{x\mid |x-1|<5\}" />와{" "}
                            <InlineMath math="B=\{x\mid a\le x<9\}" />가
                            서로소일 때, 상수 <InlineMath math="a" />의 최솟값은?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 범위를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
|x-1|<5
`}
                            />

                            <BlockMath
                                math={String.raw`
-5<x-1<5
`}
                            />

                            <BlockMath
                                math={String.raw`
-4<x<6
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid -4<x<6\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    서로소가 되기 위한 조건
                                </p>

                                <p className="leading-8">
                                    두 집합이 서로소이려면 공통인 원소가 없어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="A" />는{" "}
                                    <InlineMath math="6" />보다 작은 실수들의 범위이고,
                                    집합 <InlineMath math="B" />는{" "}
                                    <InlineMath math="a" /> 이상에서 시작하므로
                                    두 집합이 겹치지 않으려면
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ge 6
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 <InlineMath math="a" />가 가질 수 있는 가장 작은 값은{" "}
                                <InlineMath math="6" />입니다.
                            </p>

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
                                    두 집합이 서로소라는 것은 두 집합에 공통인 원소가
                                    없다는 뜻입니다. 실수의 범위로 주어진 집합에서는
                                    각 집합의 범위를 먼저 구한 뒤 두 범위가 겹치지 않을
                                    조건을 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{각 집합의 범위}
\rightarrow
\text{겹치지 않을 조건}
\rightarrow
\text{서로소}
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
                            두 집합 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A=
\left\{
x\mid x=\frac{4}{n},\ x\text{와 }n\text{은 자연수}
\right\}
`}
                        />

                        <BlockMath
                            math={String.raw`
A\cup B=
\left\{
x\mid x=\frac{16}{n},\ x\text{와 }n\text{은 자연수}
\right\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="A" />와 서로소인
                            집합 <InlineMath math="B" />의 모든 원소의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 원소를 구해 봅시다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x=\dfrac4n" />이고{" "}
                                <InlineMath math="x,\ n" />이 모두 자연수이므로{" "}
                                <InlineMath math="n" />은 <InlineMath math="4" />의
                                약수이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
n=1,\ 2,\ 4
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{4,2,1\}=\{1,2,4\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    합집합의 원소
                                </p>

                                <p className="leading-8">
                                    마찬가지로{" "}
                                    <InlineMath math="x=\dfrac{16}{n}" />이 자연수가 되려면{" "}
                                    <InlineMath math="n" />은 <InlineMath math="16" />의
                                    약수이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n=1,\ 2,\ 4,\ 8,\ 16
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=\{1,2,4,8,16\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                집합 <InlineMath math="A" />와 집합{" "}
                                <InlineMath math="B" />는 서로소이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\varnothing
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="A\cup B" />의 원소 중에서
                                집합 <InlineMath math="A" />의 원소{" "}
                                <InlineMath math="1,2,4" />를 제외한 나머지가
                                집합 <InlineMath math="B" />의 원소입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{8,16\}
`}
                            />

                            <p className="leading-8">
                                따라서 집합 <InlineMath math="B" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
8+16=24
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
                                    두 집합이 서로소이면 합집합에서 두 집합이
                                    서로 겹치지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 합집합에서 집합 <InlineMath math="A" />의
                                    원소를 제외하면 집합 <InlineMath math="B" />의
                                    원소를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=(A\cup B)-A
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

                        <p>
                            • 전체집합 <InlineMath math="U" />는
                            집합의 연산에서 생각하는 대상의 범위를 정해 준다.
                        </p>

                        <p>
                            • 여집합 <InlineMath math="A^C" />는
                            전체집합에서 <InlineMath math="A" />가 아닌 원소의 집합이다.
                        </p>

                        <BlockMath
                            math={String.raw`
A^C=U-A
`}
                        />

                        <p>
                            • 교집합은 두 집합에 동시에 속하는 원소의 집합이다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B
\quad:\quad
A\text{이고 }B
`}
                        />

                        <p>
                            • 합집합은 두 집합 중 적어도 하나에 속하는 원소의 집합이다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B
\quad:\quad
A\text{ 또는 }B
`}
                        />

                        <p>
                            • 차집합은 앞의 집합에는 속하지만
                            뒤의 집합에는 속하지 않는 원소의 집합이다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A-B=A\cap B^C
}
`}
                        />

                        <p>
                            • 두 집합이 만드는 영역은
                            다음 4개의 서로 겹치지 않는 영역으로 나누어 생각할 수 있다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A\cap B^C,\qquad
A\cap B,\qquad
A^C\cap B,\qquad
A^C\cap B^C
}
`}
                        />

                        <p>
                            • 복잡한 집합의 연산은 기호를 외우기보다
                            벤다이어그램에서 어떤 영역을 나타내는지 생각한다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 2.7 집합의 연산의 성질 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.7 집합의 연산의 성질
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합이 만드는 영역을 이용하면 집합의 연산을 여러 가지
                    방법으로 표현할 수 있습니다.
                    <br />
                    집합의 연산에서 성립하는 여러 성질을 알아봅시다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 두 집합이 만드는 방 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 두 집합이 만드는 방
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합 <InlineMath math="A,\ B" />가 서로 겹치는
                            일반적인 경우 전체집합은 다음 4개의 서로 겹치지 않는
                            영역으로 나누어집니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B^C,\qquad
A\cap B,\qquad
A^C\cap B,\qquad
A^C\cap B^C
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이 4개의 영역을 기본적인 <b>방</b>으로 생각하면
                            여러 집합의 연산을 쉽게 이해할 수 있습니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                합집합 — 3개의 방
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
=
(A\cap B^C)\cup(A\cap B)\cup(A^C\cap B)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                차집합을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
=
(A-B)\cup(A\cap B)\cup(B-A)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                로 나타낼 수도 있습니다.
                            </p>

                        </div>


                        <div className="mt-4 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" /> — 2개의 방
                                </p>

                                <BlockMath
                                    math={String.raw`
A
=
(A\cap B^C)\cup(A\cap B)
`}
                                />

                                <BlockMath
                                    math={String.raw`
A
=
(A-B)\cup(A\cap B)
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" /> — 2개의 방
                                </p>

                                <BlockMath
                                    math={String.raw`
B
=
(A\cap B)\cup(A^C\cap B)
`}
                                />

                                <BlockMath
                                    math={String.raw`
B
=
(A\cap B)\cup(B-A)
`}
                                />

                            </div>

                        </div>


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                방의 개수로 생각하기
                            </p>

                            <div className="space-y-3 text-gray-300">

                                <p>
                                    • <InlineMath math="A\cap B^C" />,{" "}
                                    <InlineMath math="A\cap B" />,{" "}
                                    <InlineMath math="A^C\cap B" />,{" "}
                                    <InlineMath math="A^C\cap B^C" /> : 1개의 방
                                </p>

                                <p>
                                    • <InlineMath math="A" />,{" "}
                                    <InlineMath math="A^C" />,{" "}
                                    <InlineMath math="B" />,{" "}
                                    <InlineMath math="B^C" /> : 2개의 방
                                </p>

                                <p>
                                    • <InlineMath math="A\cup B" /> : 3개의 방
                                </p>

                                <p>
                                    • <InlineMath math="U" /> : 4개의 방
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 2. 여집합의 기본 성질 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 여집합의 기본 성질
                        </h3>

                        <p className="leading-8 text-gray-300">
                            여집합은 전체집합에서 해당 집합을 제외한 나머지 영역을
                            나타냅니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
\varnothing^C=U,\qquad U^C=\varnothing
`}
                            />

                            <BlockMath
                                math={String.raw`
A\cap A^C=\varnothing,\qquad
A\cup A^C=U
`}
                            />

                            <BlockMath
                                math={String.raw`
(A^C)^C=A
`}
                            />

                        </div>


                        <div className="mt-5 space-y-3 leading-8 text-gray-300">

                            <p>
                                • 공집합이 아닌 모든 영역은 전체집합이므로{" "}
                                <InlineMath math="\varnothing^C=U" />입니다.
                            </p>

                            <p>
                                • 전체집합이 아닌 영역은 없으므로{" "}
                                <InlineMath math="U^C=\varnothing" />입니다.
                            </p>

                            <p>
                                • <InlineMath math="A" />와{" "}
                                <InlineMath math="A^C" />는 동시에 속할 수 없으므로{" "}
                                <InlineMath math="A\cap A^C=\varnothing" />입니다.
                            </p>

                            <p>
                                • <InlineMath math="A" />와{" "}
                                <InlineMath math="A^C" />를 합하면 전체집합이므로{" "}
                                <InlineMath math="A\cup A^C=U" />입니다.
                            </p>

                            <p>
                                • <InlineMath math="A" />가 아닌 것의 반대는 다시{" "}
                                <InlineMath math="A" />이므로{" "}
                                <InlineMath math="(A^C)^C=A" />입니다.
                            </p>

                        </div>

                    </div>


                    {/* 3. 드모르간의 법칙 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 드모르간의 법칙
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합의 연산 전체에 여집합을 취하면 각각의 집합에
                            여집합을 취하고 교집합과 합집합을 서로 바꿀 수 있습니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
(A\cup B)^C=A^C\cap B^C
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="A\cup B" />는 3개의 방이므로
                                그 여집합은 그 3개의 방이 아닌 나머지{" "}
                                <b>1개의 방</b>입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cup B)^C
=
A^C\cap B^C
`}
                            />

                        </div>


                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
(A\cap B)^C=A^C\cup B^C
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="A\cap B" />는 1개의 방이므로
                                그 여집합은 그 방이 아닌 나머지{" "}
                                <b>3개의 방</b>입니다.
                            </p>

                        </div>


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                드모르간의 법칙을 기억하는 방법
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="A" />와{" "}
                                <InlineMath math="A^C" />는 서로 부정 관계이고,{" "}
                                <InlineMath math="\cap" />과{" "}
                                <InlineMath math="\cup" />도 서로 바뀌는 관계로
                                생각합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\longleftrightarrow A^C
\qquad
\cap\longleftrightarrow\cup
`}
                            />

                            <p className="leading-8 text-gray-300">
                                즉, <b>전체를 부정하면 괄호 안의 각각을 부정하고
                                    연산 기호도 바꿉니다.</b>
                            </p>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            집합의 개수가 늘어나도 같은 규칙이 성립합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
(A\cap B\cap C)^C
=
A^C\cup B^C\cup C^C
`}
                        />

                        <BlockMath
                            math={String.raw`
(A\cup B\cup C)^C
=
A^C\cap B^C\cap C^C
`}
                        />

                    </div>


                    {/* 4. 교환법칙 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 교환법칙
                        </h3>

                        <p className="leading-8 text-gray-300">
                            교집합과 합집합에서는 두 집합의 자리를 바꾸어도
                            결과가 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                연산의 자리바꿈이 가능
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A\cup B=B\cup A
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
A\cap B=B\cap A
}
`}
                            />

                        </div>

                    </div>


                    {/* 5. 결합법칙 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 결합법칙
                        </h3>

                        <p className="leading-8 text-gray-300">
                            같은 연산으로 연결된 세 집합에서는 어느 두 집합부터
                            연산하여도 결과가 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                연산의 순서바꿈이 가능
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(A\cap B)\cap C
=
A\cap(B\cap C)
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
(A\cup B)\cup C
=
A\cup(B\cup C)
}
`}
                            />

                        </div>

                    </div>


                    {/* 6. 분배법칙 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 분배법칙
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합의 연산에서는 교집합과 합집합을 괄호 안으로
                            분배할 수 있습니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                <InlineMath math="\cap" /> 기호가 분배
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A\cap(B\cup C)
=
(A\cap B)\cup(A\cap C)
}
`}
                            />

                        </div>


                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                <InlineMath math="\cup" /> 기호가 분배
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A\cup(B\cap C)
=
(A\cup B)\cap(A\cup C)
}
`}
                            />

                        </div>


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                주의
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                집합의 연산에서는{" "}
                                <InlineMath math="\cap" />도 분배할 수 있고{" "}
                                <InlineMath math="\cup" />도 분배할 수 있습니다.
                                분배한 뒤에는 괄호 사이의 연산 기호가
                                처음 분배한 기호와 반대로 바뀌는 것에 주의합니다.
                            </p>

                        </div>

                    </div>


                    {/* 7. 차집합의 변환 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 차집합의 변환
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />에는 있고 집합{" "}
                            <InlineMath math="B" />에는 없다는 것은{" "}
                            <InlineMath math="A" />이면서{" "}
                            <InlineMath math="B^C" />라는 뜻입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A-B=A\cap B^C
}
`}
                        />


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                차집합을 교집합으로 바꾸기
                            </p>

                            <p className="leading-8 text-gray-300">
                                <b>차집합 기호를 교집합 기호로 바꾸면
                                    뒤의 집합에 여집합을 취합니다.</b>
                            </p>

                            <BlockMath
                                math={String.raw`
A-B
\quad\longrightarrow\quad
A\cap B^C
`}
                            />

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 차집합과 드모르간의 법칙을 함께 이용하여
                            복잡한 식을 바꿀 수도 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A-(B\cup C)
`}
                        />

                        <BlockMath
                            math={String.raw`
=A\cap(B\cup C)^C
`}
                        />

                        <BlockMath
                            math={String.raw`
=A\cap B^C\cap C^C
`}
                        />

                    </div>


                    {/* 8. 벤다이어그램을 이용한 조건의 처리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 벤다이어그램을 이용한 조건의 처리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            여러 집합의 조건이 주어졌을 때는 각 조건이
                            벤다이어그램에서 몇 개의 방으로 이루어져 있는지
                            먼저 생각하면 편리합니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                방의 개수가 적은 조건부터 처리
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
1\text{개의 방}
\quad\longrightarrow\quad
2\text{개의 방}
\quad\longrightarrow\quad
3\text{개의 방}
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                하나의 방으로 이루어진 조건은 해당 영역을 바로
                                결정할 수 있으므로 먼저 처리하는 것이 유리합니다.
                                그다음 2개의 방, 3개의 방으로 이루어진 조건을
                                차례대로 이용합니다.
                            </p>

                        </div>


                        <div className="mt-5 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-3 text-center font-bold text-white">
                                    1개의 방
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
`}
                                />

                                <BlockMath
                                    math={String.raw`
A\cap B^C
`}
                                />

                                <BlockMath
                                    math={String.raw`
A^C\cap B
`}
                                />

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-3 text-center font-bold text-white">
                                    2개의 방
                                </p>

                                <BlockMath math="A" />
                                <BlockMath math="B" />
                                <BlockMath math="A^C" />
                                <BlockMath math="B^C" />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-4">

                                <p className="mb-3 text-center font-bold text-white">
                                    3개의 방
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B
`}
                                />

                                <BlockMath
                                    math={String.raw`
(A\cap B)^C
`}
                                />

                            </div>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            이 방법은 집합의 조건을 벤다이어그램에 표시하거나,
                            이후 여러 영역의 원소의 개수를 구할 때에도 유용하게
                            사용할 수 있습니다.
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
                            전체집합{" "}
                            <InlineMath
                                math={String.raw`
U=\{x\mid x\text{는 }12\text{ 이하의 자연수}\}
`}
                            />의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x=2b+1,\ b\text{는 자연수}\},
`}
                        />

                        <BlockMath
                            math={String.raw`
B=\{x\mid x=3b-1,\ b\text{는 자연수}\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합{" "}
                            <InlineMath math="(A\cup B)-(A\cap B^C)^C" />의
                            모든 원소의 합을 구하시오.
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
                                    풀이 1. 방을 이용
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="A\cup B" />는
                                    두 집합이 만드는 4개의 방 중에서
                                    다음 3개의 방으로 이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B^C,\qquad
A\cap B,\qquad
A^C\cap B
`}
                                />

                                <p className="leading-8">
                                    한편 <InlineMath math="A\cap B^C" />는
                                    하나의 방이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cap B^C)^C
`}
                                />

                                <p className="leading-8">
                                    는 <InlineMath math="A\cap B^C" />인 방을 제외한
                                    나머지 3개의 방입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="A\cup B" />의 3개의 방에서{" "}
                                    <InlineMath math="(A\cap B^C)^C" />에 해당하는
                                    방들을 빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(A\cup B)-(A\cap B^C)^C
=
A\cap B^C
}
`}
                                />

                                <p className="leading-8">
                                    가 남습니다.
                                </p>

                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 2. 연산의 성질을 이용
                                </p>

                                <p className="leading-8">
                                    차집합을 교집합으로 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(A\cup B)-(A\cap B^C)^C
&=(A\cup B)\cap\left((A\cap B^C)^C\right)^C\\
&=(A\cup B)\cap(A\cap B^C)
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A\cap B^C" />는 이미{" "}
                                    <InlineMath math="A\cup B" />에 포함되어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap(A\cap B^C)
=
A\cap B^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(A\cup B)-(A\cap B^C)^C
=
A\cap B^C
}
`}
                                />

                            </div>


                            {/* 원소 구하기 */}
                            <p className="leading-8">
                                이제 집합 <InlineMath math="A,\ B" />의 원소를 구합니다.
                            </p>

                            <p className="leading-8">
                                전체집합 <InlineMath math="U" />에서{" "}
                                <InlineMath math="x=2b+1" />인 자연수를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{3,5,7,9,11\}
`}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="x=3b-1" />인 자연수를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{2,5,8,11\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="A\cap B^C" />는{" "}
                                <InlineMath math="A" />에는 있지만{" "}
                                <InlineMath math="B" />에는 없는 원소들의 집합이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B^C
=
\{3,7,9\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
3+7+9=19
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{19}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합식은 벤다이어그램의 방으로 판단할 수도 있고,
                                    집합의 연산의 성질을 이용하여 식으로 변형할 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{방을 이용}
\qquad\Longleftrightarrow\qquad
\text{연산의 성질을 이용}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 문제에서는 두 방법 모두
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)-(A\cap B^C)^C
=
A\cap B^C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 간단히 한 뒤 필요한 원소만 구하면 됩니다.
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
                            집합 <InlineMath math="A=\{1,2,3,4,5\}" />에 대하여
                            집합 <InlineMath math="B" />가{" "}
                            <InlineMath math="B-A=\{6,7\}" />을 만족시킨다.
                            집합 <InlineMath math="B" />의 모든 원소의 합이{" "}
                            <InlineMath math="15" />일 때, 집합{" "}
                            <InlineMath math="A-B" />의 모든 원소의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="B" />는
                                두 개의 방
                            </p>

                            <BlockMath
                                math={String.raw`
B-A,\qquad A\cap B
`}
                            />

                            <p className="leading-8">
                                로 나누어 생각할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
B=(B-A)\cup(A\cap B)
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A\cap B" />의 원소의 합
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="B-A=\{6,7\}" />이므로
                                    집합 <InlineMath math="B-A" />의 모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
6+7=13
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="B" />의 모든 원소의 합이{" "}
                                    <InlineMath math="15" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{집합 }A\cap B\text{의 원소의 합}
=
15-13
=
2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이번에는 집합 <InlineMath math="A" />를
                                두 개의 방으로 나누어 생각합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=(A-B)\cup(A\cap B)
`}
                            />

                            <p className="leading-8">
                                집합 <InlineMath math="A" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+2+3+4+5=15
`}
                            />

                            <p className="leading-8">
                                이고, 집합 <InlineMath math="A\cap B" />의
                                원소의 합이 <InlineMath math="2" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\text{집합 }A-B\text{의 원소의 합}
=
15-2
=
13
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{13}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />는 각각 두 개의 방으로
                                    분해할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=(B-A)\cup(A\cap B)
`}
                                />

                                <BlockMath
                                    math={String.raw`
A=(A-B)\cup(A\cap B)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    먼저 <InlineMath math="B-A" />를 이용하여
                                    공통인 방 <InlineMath math="A\cap B" />의
                                    원소의 합을 구하고, 그 값을 다시 집합{" "}
                                    <InlineMath math="A" />에 이용하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A
\rightarrow
A\cap B
\rightarrow
A-B
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
                            전체집합{" "}
                            <InlineMath math="U=\{1,3,5,7,9,11,13\}" />의
                            두 부분집합 <InlineMath math="A,\ B" />가 다음 조건을
                            만족시킨다.
                        </p>

                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="leading-8 text-gray-300">
                                (가) <InlineMath math="A\cap B=\{3,9\}" />
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                (나) <InlineMath math="A^C\cup B=\{1,3,9,13\}" />
                            </p>
                        </div>

                        <p className="mt-4 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />의 모든 원소의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 방을 이용한 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A^C" />와{" "}
                                    <InlineMath math="B" />는 각각
                                    <b> 2개의 방</b>으로 이루어져 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 두 집합의 합집합
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B
`}
                                />

                                <p className="leading-8">
                                    는 <b>3개의 방</b>으로 이루어져 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 3개의 방의 여집합을 구하면
                                    전체 4개의 방 중에서 <b>나머지 1개의 방</b>이
                                    남습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
3\text{개의 방}
\quad\xrightarrow{\text{여집합}}\quad
1\text{개의 방}
}
`}
                                />

                            </div>


                            {/* 드모르간의 법칙 */}
                            <p className="leading-8">
                                그 1개의 방이 무엇인지 드모르간의 법칙을 이용하여
                                확인하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
(A^C\cup B)^C
&=(A^C)^C\cap B^C\\
&=A\cap B^C
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                조건 (나)에서
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cup B=\{1,3,9,13\}
`}
                            />

                            <p className="leading-8">
                                이므로 전체집합에서 이 원소들을 제외하면
                                나머지 1개의 방의 원소를 구할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
A\cap B^C
&=U-(A^C\cup B)\\
&=\{1,3,5,7,9,11,13\}
  -\{1,3,9,13\}\\
&=\{5,7,11\}
\end{aligned}
`}
                            />


                            {/* A 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A" /> 구하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는 다음 두 개의 방으로
                                    이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=(A\cap B^C)\cup(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    조건 (가)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{3,9\}
`}
                                />

                                <p className="leading-8">
                                    이고, 앞에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B^C=\{5,7,11\}
`}
                                />

                                <p className="leading-8">
                                    을 구했으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A
&=(A\cap B^C)\cup(A\cap B)\\
&=\{5,7,11\}\cup\{3,9\}\\
&=\{3,5,7,9,11\}
\end{aligned}
`}
                                />

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
3+5+7+9+11=35
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{35}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^C" />와{" "}
                                    <InlineMath math="B" />는 각각 2개의 방이고,
                                    그 합집합 <InlineMath math="A^C\cup B" />는
                                    3개의 방입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B
\;:\;
3\text{개의 방}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 여집합을 취하면 반대쪽
                                    1개의 방을 바로 찾을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A^C\cup B)^C
=
A\cap B^C
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{
3\text{개의 방}
\rightarrow
\text{여집합}
\rightarrow
1\text{개의 방}
}
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
                            전체집합{" "}
                            <InlineMath
                                math={String.raw`
U=\{x\mid x\text{는 }10\text{ 이하의 자연수}\}
`}
                            />의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x\text{는 홀수}\},\qquad
B=\left\{x\mid x=\frac{10}{n},\ n\text{은 자연수}\right\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합{" "}
                            <InlineMath math="(A\cup B^C)^C" />의
                            모든 원소의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 방을 이용한 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />와{" "}
                                    <InlineMath math="B^C" />는 각각
                                    2개의 방으로 이루어져 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A\cup B^C" />의 여집합은
                                    이 합집합에 포함되지 않는 영역이므로
                                    나머지 <b>1개의 방</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B^C)^C
`}
                                />

                                <p className="leading-8">
                                    이 한 방이 무엇인지 드모르간의 법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(A\cup B^C)^C
&=A^C\cap(B^C)^C\\
&=A^C\cap B
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(A\cup B^C)^C=A^C\cap B
}
`}
                                />

                            </div>


                            {/* 집합 A, B 구하기 */}
                            <p className="leading-8">
                                전체집합 <InlineMath math="U" />에서
                                홀수인 원소를 모으면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,3,5,7,9\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="B" />에서{" "}
                                <InlineMath math="x=\dfrac{10}{n}" />이 자연수이므로{" "}
                                <InlineMath math="n" />은 10의 약수입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
n=1,\ 2,\ 5,\ 10
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{1,2,5,10\}
`}
                            />


                            {/* 필요한 한 방 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    필요한 1개의 방
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A^C\cap B" />는
                                    집합 <InlineMath math="B" />에는 있지만
                                    집합 <InlineMath math="A" />에는 없는 원소의 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B=\{2,10\}
`}
                                />

                            </div>


                            <p className="leading-8">
                                따라서 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
2+10=12
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    합집합 전체에 여집합을 취하면
                                    합집합에 포함되지 않는 반대쪽 영역만 남습니다.
                                    드모르간의 법칙을 이용하면 그 영역을
                                    하나의 방으로 바로 나타낼 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B^C)^C
=
A^C\cap B
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{합집합의 여집합}
\rightarrow
\text{반대쪽 1개의 방}
}
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
                            전체집합{" "}
                            <InlineMath
                                math={String.raw`
U=\{x\mid x\text{는 }10\text{ 이하의 자연수}\}
`}
                            />의 두 부분집합 <InlineMath math="A,\ B" />에 대하여<br />
                            <InlineMath math="A=\{1,3,5,7\}" />,{" "}
                            <InlineMath math="B-A=\{2,4,10\}" />일 때,
                            집합 <InlineMath math="A^C\cap B^C" />의 모든 원소의 합을
                            구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 방을 이용한 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는
                                    다음 두 개의 방으로 이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=(A-B)\cup(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="A" /> 자체가 이미
                                    <b> 2개의 방</b>을 나타냅니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또 <InlineMath math="B-A" />는
                                    <b> 1개의 방</b>입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러므로 <InlineMath math="A" />의 2개의 방과{" "}
                                    <InlineMath math="B-A" />의 1개의 방을 합치면
                                    합집합 <InlineMath math="A\cup B" />의
                                    3개의 방이 완성됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A\cup B=A\cup(B-A)
}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{
2\text{개의 방}
+
1\text{개의 방}
\rightarrow
3\text{개의 방}
}
`}
                                />

                            </div>


                            {/* 합집합 구하기 */}
                            <p className="leading-8">
                                주어진 집합을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,3,5,7\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B-A=\{2,4,10\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
A\cup B
&=A\cup(B-A)\\
&=\{1,3,5,7\}\cup\{2,4,10\}\\
&=\{1,2,3,4,5,7,10\}
\end{aligned}
`}
                            />


                            {/* 여집합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    나머지 1개의 방 구하기
                                </p>

                                <p className="leading-8">
                                    구하려는 집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    드모르간의 법칙에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
=
(A\cup B)^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A\cup B" />가 3개의 방이므로
                                    그 여집합은 전체 4개의 방 중
                                    <b> 나머지 1개의 방</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
3\text{개의 방}
\quad\xrightarrow{\text{여집합}}\quad
1\text{개의 방}
}
`}
                                />

                            </div>


                            <p className="leading-8">
                                전체집합은
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{1,2,3,4,5,6,7,8,9,10\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
A^C\cap B^C
&=(A\cup B)^C\\
&=U-(A\cup B)\\
&=\{6,8,9\}
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
6+8+9=23
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{23}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A" />는 이미 2개의 방이고,
                                    집합 <InlineMath math="B-A" />는 1개의 방입니다.
                                    따라서 두 영역을 합치면{" "}
                                    <InlineMath math="A\cup B" />의 3개의 방을
                                    바로 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\;(2\text{개의 방})
+
(B-A)\;(1\text{개의 방})
\rightarrow
A\cup B\;(3\text{개의 방})
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 여집합을 취하면
                                    전체에서 남은 1개의 방을 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
=
(A\cup B)^C
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{
3\text{개의 방}
\rightarrow
\text{여집합}
\rightarrow
1\text{개의 방}
}
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
                            두 집합{" "}
                            <InlineMath math="A=\{2,4,a^2+1\}" />,{" "}
                            <InlineMath math="B=\{6,a-1,a+2\}" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B=\{1,2,4,5,6\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고 집합 <InlineMath math="A\cap B" />의 원소를{" "}
                            <InlineMath math="b" />라 할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                            (단, <InlineMath math="a,\ b" />는 상수이다.)
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />의 모든 원소는
                                합집합 <InlineMath math="A\cup B" />의 원소이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B=\{1,2,4,5,6\}
`}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="a^2+1" />도
                                이 집합의 원소이어야 합니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="a" />의 값 찾기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />에는 이미{" "}
                                    <InlineMath math="2,\ 4" />가 있고,
                                    합집합에는 원소 <InlineMath math="5" />가 있어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 가능한 경우를 확인하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+1=5
`}
                                />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2=4
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=2\quad\text{또는}\quad a=-2
`}
                                />

                            </div>


                            {/* 후보 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 값을 확인해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=2" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,4,5\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{6,1,4\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=\{1,2,4,5,6\}
`}
                                />

                                <p className="leading-8">
                                    를 만족합니다.
                                </p>


                                <p className="mt-5 leading-8">
                                    반면 <InlineMath math="a=-2" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{6,-3,0\}
`}
                                />

                                <p className="leading-8">
                                    이 되어 주어진 합집합의 조건을 만족하지 않습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 교집합 */}
                            <p className="leading-8">
                                <InlineMath math="a=2" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{2,4,5\},\qquad
B=\{1,4,6\}
`}
                            />

                            <p className="leading-8">
                                이므로 두 집합에 공통으로 들어 있는 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\{4\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="A\cap B" />의 원소를{" "}
                                <InlineMath math="b" />라고 하였으므로
                            </p>

                            <BlockMath
                                math={String.raw`
b=4
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b=2+4=6
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 집합의 합집합이 주어지면
                                    각 집합의 모든 원소는 반드시 그 합집합 안에 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset A\cup B,\qquad
B\subset A\cup B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이를 이용하여 <InlineMath math="a" />의 후보를 찾고,
                                    실제로 합집합이 주어진 집합과 같은지 확인한 뒤
                                    교집합의 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{합집합의 원소 확인}
\rightarrow
a\text{ 결정}
\rightarrow
A\cap B\text{ 확인}
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
                            전체집합 <InlineMath math="U=\{1,2,3,4,5,6\}" />의
                            두 부분집합 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,a^2-3a\},\qquad
B=\{a+3,4a^2-2a,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고
                        </p>

                        <BlockMath
                            math={String.raw`
A^C\cup B^C=\{1,3,5,6\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="A\cup B" />의 모든 원소의 합을
                            구하시오. (단, <InlineMath math="a" />는 상수이다.)
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 방을 이용한 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A^C" />와{" "}
                                    <InlineMath math="B^C" />는 각각
                                    2개의 방으로 이루어져 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="A^C\cup B^C" />는
                                    전체 4개의 방 중에서 <b>3개의 방</b>을 나타냅니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러므로 그 3개의 방에 포함되지 않는
                                    나머지 <b>1개의 방</b>은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A^C\cup B^C
\;:\;
3\text{개의 방}
\quad\longrightarrow\quad
A\cap B
\;:\;
1\text{개의 방}
}
`}
                                />

                            </div>


                            <p className="leading-8">
                                전체집합이
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{1,2,3,4,5,6\}
`}
                            />

                            <p className="leading-8">
                                이고
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cup B^C=\{1,3,5,6\}
`}
                            />

                            <p className="leading-8">
                                이므로 나머지 한 방의 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B
=
\{2,4\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 드모르간 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    드모르간의 법칙으로 확인
                                </p>

                                <p className="leading-8">
                                    위의 결과는 드모르간의 법칙으로도 확인할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(A^C\cup B^C)^C
&=(A^C)^C\cap(B^C)^C\\
&=A\cap B
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    즉, <InlineMath math="A^C\cup B^C" />의 여집합이
                                    바로 <InlineMath math="A\cap B" />입니다.
                                </p>

                            </div>


                            {/* a 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="a" />의 값 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\cap B=\{2,4\}" />이므로{" "}
                                    <InlineMath math="4" />는 집합 <InlineMath math="A" />의
                                    원소이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="A" />에서 이미{" "}
                                    <InlineMath math="1,\ 2" />가 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2-3a=4
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
a^2-3a-4&=0\\
(a-4)(a+1)&=0
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=4
\quad\text{또는}\quad
a=-1
`}
                                />

                            </div>


                            {/* 후보 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 값을 확인해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=4" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{7,56,4\}
`}
                                />

                                <p className="leading-8">
                                    이 되어 집합 <InlineMath math="B" />가
                                    전체집합 <InlineMath math="U" />의 부분집합이 될 수 없습니다.
                                </p>

                                <p className="mt-5 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* A, B 구하기 */}
                            <p className="leading-8">
                                <InlineMath math="a=-1" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
A
=
\{1,2,(-1)^2-3(-1)\}
=
\{1,2,4\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B
=
\{-1+3,\ 4(-1)^2-2(-1),\ 4\}
=
\{2,6,4\}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
=
\{1,2,4,6\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+2+4+6=13
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{13}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^C\cup B^C" />는
                                    전체 4개의 방 중 3개의 방입니다.
                                    따라서 그 반대쪽에 남는 1개의 방은{" "}
                                    <InlineMath math="A\cap B" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C
\;:\;
3\text{개의 방}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\Downarrow
`}
                                />

                                <BlockMath
                                    math={String.raw`
A\cap B
\;:\;
1\text{개의 방}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 관계는 드모르간의 법칙
                                </p>

                                <BlockMath
                                    math={String.raw`
(A^C\cup B^C)^C=A\cap B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    과 같은 내용입니다.
                                    먼저 방으로 필요한 교집합을 찾은 뒤,
                                    그 원소를 이용하여 미지수 <InlineMath math="a" />를
                                    결정합니다.
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
                            두 집합{" "}
                            <InlineMath math="A=\{1,3,6,a^2+1\}" />,{" "}
                            <InlineMath math="B=\{a-1,a^2,a+7\}" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B^C=\{2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="B" />의 모든 원소의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 차집합으로 바꾸기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    차집합으로 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\cap B^C" />는
                                    집합 <InlineMath math="A" />에는 있고{" "}
                                    <InlineMath math="B" />에는 없는 원소의 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B^C=A-B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 주어진 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,3\}
`}
                                />

                                <p className="leading-8">
                                    으로 생각할 수 있습니다.
                                </p>

                            </div>


                            {/* a의 후보 */}
                            <p className="leading-8">
                                <InlineMath math="2\in A-B" />이므로
                                반드시 <InlineMath math="2\in A" />입니다.
                            </p>

                            <p className="leading-8">
                                그런데
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,3,6,a^2+1\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+1=2
`}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a^2+1&=2\\
a^2&=1
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a=1\quad\text{또는}\quad a=-1
`}
                            />


                            {/* 확인 과정 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-4 font-bold text-yellow-300">
                                    후보는 반드시 주어진 조건으로 확인
                                </p>

                                <p className="leading-8">
                                    지금 구한 <InlineMath math="a=1,-1" />은
                                    아직 <b>후보</b>일 뿐입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    주어진 조건은 단순히{" "}
                                    <InlineMath math="2,3\in A-B" />가 아니라
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,3\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                    따라서 각각의 후보를 대입하여{" "}
                                    <InlineMath math="A-B" />를 직접 구하고,
                                    그 결과가 <InlineMath math="\{2,3\}" />과
                                    정확히 같은지 확인해야 합니다.
                                </p>

                            </div>


                            {/* a=1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① <InlineMath math="a=1" />인 경우
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,3,6,2\}
=\{1,2,3,6\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{0,1,8\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,3,6\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이것은 주어진 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,3\}
`}
                                />

                                <p className="leading-8">
                                    과 다르므로 <InlineMath math="a=1" />은
                                    조건을 만족하지 않습니다.
                                </p>

                            </div>


                            {/* a=-1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② <InlineMath math="a=-1" />인 경우
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,3,6,2\}
=\{1,2,3,6\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{-2,1,6\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,3\}
`}
                                />

                                <p className="leading-8">
                                    으로 주어진 조건을 정확히 만족합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{a=-1}
`}
                                />

                            </div>


                            {/* B의 원소의 합 */}
                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{-2,1,6\}
`}
                            />

                            <p className="leading-8">
                                이므로 집합 <InlineMath math="B" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-2+1+6=5
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A\cap B^C" />는 한 개의 방으로{" "}
                                    <InlineMath math="A-B" />와 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B^C=A-B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    주어진 집합의 원소를 이용하여 미지수의 후보를
                                    구했더라도 그것만으로 끝내면 안 됩니다.
                                    각 후보를 원래의 집합에 대입하여
                                    주어진 집합의 조건이 정확히 성립하는지
                                    반드시 확인해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{후보 구하기}
\rightarrow
\text{원래 조건에 대입}
\rightarrow
\text{집합 전체가 같은지 확인}
}
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
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B^C=\{1,2,3,4,5,6\},
\qquad
B\cup A^C=\{1,2,5,6,7,8\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 옳은 것만을 [보기]에서 있는 대로 고른 것은?
                        </p>

                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                ㄱ. <InlineMath math="U=\{1,2,3,4,5,6,7,8\}" />
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄴ. <InlineMath math="A\cap B^C=\{7,8\}" />
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ㄷ.{" "}
                                <InlineMath math="(A-B)\cup(B-A)=\{3,4,7,8\}" />
                            </p>

                        </div>

                        <div className="mt-5 grid grid-cols-2 gap-3 text-gray-300 sm:grid-cols-3">

                            <p>
                                ① ㄱ
                            </p>

                            <p>
                                ② ㄱ, ㄴ
                            </p>

                            <p>
                                ③ ㄱ, ㄷ
                            </p>

                            <p>
                                ④ ㄴ, ㄷ
                            </p>

                            <p>
                                ⑤ ㄱ, ㄴ, ㄷ
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 방을 이용한 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />와{" "}
                                    <InlineMath math="B^C" />는 각각 2개의 방이므로
                                    그 합집합
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B^C
`}
                                />

                                <p className="leading-8">
                                    는 <b>3개의 방</b>입니다.
                                    이 3개의 방에 포함되지 않는 나머지 1개의 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B=B-A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    마찬가지로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup A^C
`}
                                />

                                <p className="leading-8">
                                    도 3개의 방이고, 빠진 1개의 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B^C=A-B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 전체집합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    전체집합 <InlineMath math="U" /> 구하기
                                </p>

                                <p className="leading-8">
                                    두 집합 <InlineMath math="A\cup B^C" />와{" "}
                                    <InlineMath math="B\cup A^C" />를 합하면
                                    전체 4개의 방을 모두 포함하게 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B^C)\cup(B\cup A^C)=U
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
U
&=\{1,2,3,4,5,6\}
  \cup
  \{1,2,5,6,7,8\}\\
&=\{1,2,3,4,5,6,7,8\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로 ㄱ은 <b className="text-white">옳습니다.</b>
                                </p>

                            </div>


                            {/* 빠진 한 방 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    각 3개의 방에서 빠진 1개의 방
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="A\cup B^C" />에
                                    포함되지 않는 한 방은 <InlineMath math="B-A" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
B-A
&=U-(A\cup B^C)\\
&=\{7,8\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-5 leading-8">
                                    또 <InlineMath math="B\cup A^C" />에
                                    포함되지 않는 한 방은 <InlineMath math="A-B" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A-B
&=U-(B\cup A^C)\\
&=\{3,4\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 보기 판단 */}
                            <p className="leading-8">
                                이제 보기를 확인합니다.
                            </p>

                            <p className="leading-8">
                                ㄴ에서
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B^C=A-B=\{3,4\}
`}
                            />

                            <p className="leading-8">
                                이므로 ㄴ은 <b className="text-white">옳지 않습니다.</b>
                            </p>

                            <p className="leading-8">
                                ㄷ에서
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
(A-B)\cup(B-A)
&=\{3,4\}\cup\{7,8\}\\
&=\{3,4,7,8\}
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                이므로 ㄷ은 <b className="text-white">옳습니다.</b>
                            </p>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 옳은 것은 ㄱ, ㄷ이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
{\text{③}}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A\cup B^C" />와{" "}
                                    <InlineMath math="B\cup A^C" />는 각각
                                    전체 4개의 방 중 3개의 방입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B^C
\quad\Rightarrow\quad
\text{빠진 방 }B-A
`}
                                />

                                <BlockMath
                                    math={String.raw`
B\cup A^C
\quad\Rightarrow\quad
\text{빠진 방 }A-B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 두 개의 3개 방을 합치면 전체 4개의 방이
                                    모두 나타나므로 전체집합도 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{3개의 방}
\rightarrow
\text{빠진 1개의 방을 찾기}
}
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
                            전체집합 <InlineMath math="U" />의 공집합이 아닌
                            두 부분집합 <InlineMath math="A,\ B" />에 대하여
                            다음 중 나머지 넷과 다른 하나는?
                        </p>

                        <div className="mt-5 grid grid-cols-1 gap-4 text-gray-300 sm:grid-cols-2 lg:grid-cols-3">

                            <p>
                                ① <InlineMath math="A\cup(A-B^C)" />
                            </p>

                            <p>
                                ② <InlineMath math="A\cap(B\cup B^C)" />
                            </p>

                            <p>
                                ③ <InlineMath math="(A\cup B)\cap A" />
                            </p>

                            <p>
                                ④ <InlineMath math="(U-B^C)-A^C" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="(A-B)\cup(A\cap B)" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                각 집합식을 간단히 정리해 봅시다.
                                방의 구조를 바로 이용할 수 있는 경우에는
                                그 방법을 사용하는 것이 빠릅니다.
                            </p>


                            {/* ① */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① <InlineMath math="A\cup(A-B^C)" />
                                </p>

                                <p className="leading-8">
                                    차집합을 교집합으로 바꾸면
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B^C
=
A\cap(B^C)^C
=
A\cap B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                    <InlineMath math="A\cap B" />는 집합{" "}
                                    <InlineMath math="A" /> 안에 포함된 한 방이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup(A\cap B)=A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* ② */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② <InlineMath math="A\cap(B\cup B^C)" />
                                </p>

                                <p className="leading-8">
                                    집합과 그 여집합의 합집합은 전체집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup B^C=U
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap(B\cup B^C)
=
A\cap U
=
A
`}
                                />

                            </div>


                            {/* ③ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ <InlineMath math="(A\cup B)\cap A" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />는 이미{" "}
                                    <InlineMath math="A\cup B" /> 안에 포함되어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap A=A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* ④ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ④ <InlineMath math="(U-B^C)-A^C" />
                                </p>

                                <p className="leading-8">
                                    먼저 전체집합에서 <InlineMath math="B^C" />를 빼면
                                    집합 <InlineMath math="B" />가 남습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
U-B^C=B
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(U-B^C)-A^C
&=B-A^C\\
&=B\cap(A^C)^C\\
&=A\cap B
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* ⑤ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ⑤ <InlineMath math="(A-B)\cup(A\cap B)" />
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는
                                    다음 두 개의 방으로 이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B,\qquad A\cap B
`}
                                />

                                <p className="leading-8">
                                    따라서 두 방을 합하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B)\cup(A\cap B)=A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 비교 */}
                            <p className="leading-8">
                                따라서 각 보기의 결과를 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
①&=A\\
②&=A\\
③&=A\\
④&=A\cap B\\
⑤&=A
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                이므로 나머지 넷과 다른 것은 ④입니다.
                            </p>


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합식을 정리할 때는 모든 식을 같은 방법으로
                                    길게 전개할 필요가 없습니다.
                                    각 식에서 가장 간단하게 사용할 수 있는
                                    집합의 성질이나 방의 구조를 먼저 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=(A-B)\cup(A\cap B)
`}
                                />

                                <BlockMath
                                    math={String.raw`
B\cup B^C=U
`}
                                />

                                <BlockMath
                                    math={String.raw`
A-B=A\cap B^C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    특히 어떤 집합 안에 이미 포함되어 있는 방을
                                    합치거나 교집합하면 결과를 빠르게 판단할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{연산의 성질}
+
\text{방의 구조}
\rightarrow
\text{집합식 간단히 하기}
}
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
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A,\ B" />가 다음 조건을 만족시킬 때,
                            집합 <InlineMath math="B" />의 모든 원소의 합을 구하시오.
                        </p>

                        <div className="mt-5 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-5">

                            <p className="leading-8 text-gray-300">
                                (가){" "}
                                <InlineMath math="A=\{1,3,5\}" />,{" "}
                                <InlineMath math="A^C\cup B^C=\{5,7,9\}" />
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                (나) <InlineMath math="X\subset U" />이고{" "}
                                <InlineMath math="n(X)=1" />인 모든 집합{" "}
                                <InlineMath math="X" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
n((A\cup X)-B)=1
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이다.
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* (가) 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    (가)에서 방을 이용하여 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A^C\cup B^C" />는
                                    전체 4개의 방 중 <b>3개의 방</b>입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 이 3개의 방의 반대쪽에 있는
                                    나머지 1개의 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이것은 드모르간의 법칙으로도
                                </p>

                                <BlockMath
                                    math={String.raw`
(A^C\cup B^C)^C=A\cap B
`}
                                />

                                <p className="leading-8">
                                    와 같이 확인할 수 있습니다.
                                </p>

                            </div>


                            {/* U와 교집합 */}
                            <p className="leading-8">
                                주어진 조건에서
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cup B^C=\{5,7,9\}
`}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="5,7,9" />는{" "}
                                <InlineMath math="A\cap B" />에 들어가지 않습니다.
                            </p>

                            <p className="leading-8">
                                그런데
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,3,5\}
`}
                            />

                            <p className="leading-8">
                                이므로 집합 <InlineMath math="A" />에서{" "}
                                <InlineMath math="A\cap B" />에 들어갈 수 있는 원소는{" "}
                                <InlineMath math="1,3" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\{1,3\}
`}
                            />

                            <p className="leading-8">
                                따라서 전체집합은
                            </p>

                            <BlockMath
                                math={String.raw`
U
=
(A\cap B)\cup(A^C\cup B^C)
=
\{1,3,5,7,9\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* A-B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    먼저 한 개의 방을 결정
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A=\{1,3,5\}" />이고{" "}
                                    <InlineMath math="A\cap B=\{1,3\}" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉, 현재 <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />에 들어가지 않는 원소는
                                    이미 <InlineMath math="5" /> 하나입니다.
                                </p>

                            </div>


                            {/* (나) 해석 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-4 font-bold text-yellow-300">
                                    (나)의 모든 집합 <InlineMath math="X" /> 조건
                                </p>

                                <p className="leading-8">
                                    조건 (나)는 <InlineMath math="n(X)=1" />인
                                    일부 집합 <InlineMath math="X" />가 아니라,
                                    <b> 모든 한 원소 집합 </b>
                                    <InlineMath math="X" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
n((A\cup X)-B)=1
`}
                                />

                                <p className="leading-8">
                                    이 성립해야 한다는 뜻입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이미
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{5\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="A\cup X" />에서{" "}
                                    <InlineMath math="B" />에 들어가지 않는 원소가
                                    새로 생기면 원소의 개수가 2가 되어 조건을
                                    만족하지 못합니다.
                                </p>

                            </div>


                            {/* X={7} */}
                            <p className="leading-8">
                                먼저
                            </p>

                            <BlockMath
                                math={String.raw`
X=\{7\}
`}
                            />

                            <p className="leading-8">
                                로 놓아 봅시다.
                            </p>

                            <p className="leading-8">
                                만약 <InlineMath math="7\notin B" />라면
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cup\{7\})-B=\{5,7\}
`}
                            />

                            <p className="leading-8">
                                이 되어
                            </p>

                            <BlockMath
                                math={String.raw`
n((A\cup\{7\})-B)=2
`}
                            />

                            <p className="leading-8">
                                이므로 조건 (나)에 어긋납니다.
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
7\in B
`}
                            />


                            {/* X={9} */}
                            <p className="leading-8">
                                마찬가지로
                            </p>

                            <BlockMath
                                math={String.raw`
X=\{9\}
`}
                            />

                            <p className="leading-8">
                                로 놓았을 때도 조건 (나)를 만족하려면
                            </p>

                            <BlockMath
                                math={String.raw`
9\in B
`}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>


                            {/* B 결정 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="B" /> 결정하기
                                </p>

                                <p className="leading-8">
                                    앞에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{1,3\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="1,3\in B" />이고,
                                    조건 (나)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
7,9\in B
`}
                                />

                                <p className="leading-8">
                                    임을 알았습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 <InlineMath math="A-B=\{5\}" />이므로{" "}
                                    <InlineMath math="5\notin B" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{1,3,7,9\}
`}
                                />

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                그러므로 집합 <InlineMath math="B" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+3+7+9=20
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{20}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 <InlineMath math="A^C\cup B^C" />가
                                    3개의 방이라는 것을 이용하여 반대쪽 1개의 방인{" "}
                                    <InlineMath math="A\cap B" />를 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C
\;:\;
3\text{개의 방}
\quad\longrightarrow\quad
A\cap B
\;:\;
1\text{개의 방}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그 결과 <InlineMath math="A-B=\{5\}" />가
                                    이미 정해져 있습니다.
                                    따라서 한 원소 집합 <InlineMath math="X" />를
                                    추가했을 때 차집합의 원소가 더 늘어나지 않으려면,
                                    새로 추가되는 원소는 반드시{" "}
                                    <InlineMath math="B" />에 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A-B=\{5\}
\quad\Rightarrow\quad
7,9\in B
}
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
                            두 자연수 <InlineMath math="k,\ m\ (k\ge m)" />에 대하여
                            전체집합
                        </p>

                        <BlockMath
                            math={String.raw`
U=\{x\mid x\text{는 }k\text{ 이하의 자연수}\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 부분집합{" "}
                            <InlineMath math="A=\{x\mid x\text{는 }m\text{의 약수}\}" />,{" "}
                            <InlineMath math="B" />가 다음 조건을 만족시킨다.
                        </p>

                        <div className="mt-5 rounded-xl border border-cyan-500/40 bg-cyan-500/5 p-5">

                            <p className="leading-8 text-gray-300">
                                (가){" "}
                                <InlineMath math="B-A=\{3,5,6\}" />,{" "}
                                <InlineMath math="n(A\cup B^C)=7" />
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                (나) 집합 <InlineMath math="A" />의 모든 원소의 합과
                                집합 <InlineMath math="B" />의 모든 원소의 합은
                                서로 같다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            집합 <InlineMath math="A^C\cap B^C" />의 모든 원소의 합을
                            구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* k 결정 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    방을 이용하여 전체집합의 원소의 개수 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\cup B^C" />는 전체 4개의 방 중
                                    <b> 3개의 방</b>입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 3개의 방에 포함되지 않는 나머지 1개의 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B=B-A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    조건 (가)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\{3,5,6\}
`}
                                />

                                <p className="leading-8">
                                    이므로 이 한 개의 방의 원소의 개수는 3입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B^C)=7
`}
                                />

                                <p className="leading-8">
                                    이므로 나머지 3개의 방의 원소의 개수는 7입니다.
                                    따라서 전체집합의 원소의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
7+3=10
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    전체집합은 <InlineMath math="k" /> 이하의 자연수로
                                    이루어져 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k=10
`}
                                />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8,9,10\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* m 결정 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A" /> 결정하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는{" "}
                                    <InlineMath math="m" />의 약수의 집합입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\{3,5,6\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="3,\ 5,\ 6" />은
                                    집합 <InlineMath math="A" />의 원소가 아닙니다.
                                    따라서 <InlineMath math="3,\ 5,\ 6" />은{" "}
                                    <InlineMath math="m" />의 약수가 될 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 <InlineMath math="m\le k=10" />이므로
                                    조건을 만족할 수 있는 <InlineMath math="m" />을
                                    확인하면
                                </p>

                                <BlockMath
                                    math={String.raw`
m=8
`}
                                />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,4,8\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    조건 (나)를 이용하여 <InlineMath math="A\cap B" /> 구하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
1+2+4+8=15
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\{3,5,6\}
`}
                                />

                                <p className="leading-8">
                                    이므로 이 방의 모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
3+5+6=14
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="B" />는
                                    다음 두 개의 방으로 이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=(B-A)\cup(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    조건 (나)에서 집합 <InlineMath math="A" />와
                                    집합 <InlineMath math="B" />의 모든 원소의 합이
                                    서로 같으므로, 집합 <InlineMath math="A\cap B" />의
                                    모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
15-14=1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{1\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* B 결정 */}
                            <p className="leading-8">
                                이제
                            </p>

                            <BlockMath
                                math={String.raw`
B-A=\{3,5,6\},
\qquad
A\cap B=\{1\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{1,3,5,6\}
`}
                            />


                            {/* 마지막 방 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    마지막 한 개의 방 구하기
                                </p>

                                <p className="leading-8">
                                    구하려는 <InlineMath math="A^C\cap B^C" />는
                                    집합 <InlineMath math="A" />에도 없고
                                    집합 <InlineMath math="B" />에도 없는
                                    <b> 한 개의 방</b>입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    드모르간의 법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C=(A\cup B)^C
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A\cup B
&=\{1,2,4,8\}\cup\{1,3,5,6\}\\
&=\{1,2,3,4,5,6,8\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로 전체집합에서 이 원소들을 제외하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C=\{7,9,10\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A^C\cap B^C" />의
                                모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
7+9+10=26
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{26}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A\cup B^C" />는 3개의 방이고,
                                    그 반대쪽 한 개의 방은{" "}
                                    <InlineMath math="B-A" />입니다.
                                    따라서 두 방의 원소의 개수를 더하면
                                    전체집합의 원소의 개수를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(U)
=
n(A\cup B^C)+n(B-A)
=
7+3
=
10
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음에는 한 개의 방부터 차례대로 결정합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A
\rightarrow
A\cap B
\rightarrow
A^C\cap B^C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    벤다이어그램의 조건을 이용할 때는
                                    이미 알고 있는 한 개의 방부터 채워 나가면
                                    복잡한 조건도 쉽게 정리할 수 있습니다.
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
                            전체집합{" "}
                            <InlineMath math="U=\{1,2,3,4,5,6,7\}" />의 세 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,3,5,7\},\qquad
B=\{2,3,5\},\qquad
C=\{1,6,7\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합{" "}
                            <InlineMath math="(A\cup B)\cap C^C" />의 모든 원소의 합을
                            구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 풀이 방법 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    괄호 안쪽부터 차례대로 구하기
                                </p>

                                <p className="leading-8">
                                    여러 집합의 연산이 함께 있는 경우에는
                                    식 전체를 한꺼번에 처리하지 않고,
                                    <b> 괄호 안쪽의 집합부터 차례대로 구하면 됩니다.</b>
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap C^C
`}
                                />

                                <p className="leading-8">
                                    에서는 먼저 <InlineMath math="A\cup B" />와{" "}
                                    <InlineMath math="C^C" />를 각각 구한 뒤
                                    마지막으로 두 집합의 교집합을 구합니다.
                                </p>

                            </div>


                            {/* A∪B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① <InlineMath math="A\cup B" /> 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" /> 또는{" "}
                                    <InlineMath math="B" />에 있는 원소를 모두 모으면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A\cup B
&=\{1,3,5,7\}\cup\{2,3,5\}\\
&=\{1,2,3,5,7\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* C의 여집합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② <InlineMath math="C^C" /> 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="C^C" />는 전체집합{" "}
                                    <InlineMath math="U" />에서 집합{" "}
                                    <InlineMath math="C" />의 원소를 제외한 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
C=\{1,6,7\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
C^C=\{2,3,4,5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 교집합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 마지막으로 교집합 구하기
                                </p>

                                <p className="leading-8">
                                    앞에서 구한 두 집합
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=\{1,2,3,5,7\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
C^C=\{2,3,4,5\}
`}
                                />

                                <p className="leading-8">
                                    에 공통으로 들어 있는 원소를 찾으면
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap C^C=\{2,3,5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 집합{" "}
                                <InlineMath math="(A\cup B)\cap C^C" />의
                                모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
2+3+5=10
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{10}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 집합의 연산이 함께 나오더라도
                                    한 번에 처리하려고 하지 않습니다.
                                    괄호 안쪽부터 필요한 집합을 하나씩 구한 뒤
                                    마지막 연산을 하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A\cup B
\;\rightarrow\;
C^C
\;\rightarrow\;
(A\cup B)\cap C^C
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    합집합은 원소를 모으고,
                                    여집합은 전체집합에서 해당 집합의 원소를 제외하고,
                                    교집합은 공통인 원소를 찾습니다.
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
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 }10\text{ 이하의 자연수}\}" />의
                            세 부분집합 <InlineMath math="A,\ B,\ C" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B=\{x\mid x\text{는 }3\text{의 배수}\}
`}
                        />

                        <BlockMath
                            math={String.raw`
A\cup C=\{x\mid x\text{는 }9\text{의 약수}\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="A\cup(B\cap C)" />의
                            모든 원소의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 주어진 집합 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    주어진 두 집합부터 구하기
                                </p>

                                <p className="leading-8">
                                    전체집합은 10 이하의 자연수의 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8,9,10\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    10 이하의 3의 배수는{" "}
                                    <InlineMath math="3,\ 6,\ 9" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=\{3,6,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또 9의 약수는{" "}
                                    <InlineMath math="1,\ 3,\ 9" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup C=\{1,3,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 공통 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 집합의 공통 원소 생각하기
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="A\cup B" />와{" "}
                                    <InlineMath math="A\cup C" />에
                                    공통으로 들어 있는 원소를 생각해 봅시다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap(A\cup C)=\{3,9\}
`}
                                />

                                <p className="leading-8">
                                    어떤 원소가 두 집합에 모두 들어 있으려면
                                    먼저 그 원소가 <InlineMath math="A" />에
                                    들어 있는 경우가 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A" />의 원소는{" "}
                                    <InlineMath math="A\cup B" />에도 들어 있고{" "}
                                    <InlineMath math="A\cup C" />에도 들어 있으므로
                                    모두 공통 원소가 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또는 그 원소가 <InlineMath math="A" />에
                                    들어 있지 않는다면, 두 집합에 모두 들어 있기 위해서는{" "}
                                    <InlineMath math="B" />와 <InlineMath math="C" />에
                                    동시에 들어 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap C
`}
                                />

                                <p className="leading-8">
                                    따라서 두 집합의 공통 원소는
                                    <InlineMath math="A" />에 있는 원소와{" "}
                                    <InlineMath math="B\cap C" />에 있는 원소를
                                    합한 것과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup(B\cap C)
=
(A\cup B)\cap(A\cup C)
`}
                                />

                            </div>


                            {/* 원하는 집합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원하는 집합 구하기
                                </p>

                                <p className="leading-8">
                                    앞에서 구한 두 집합을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A\cup(B\cap C)
&=(A\cup B)\cap(A\cup C)\\
&=\{3,6,9\}\cap\{1,3,9\}\\
&=\{3,9\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 <InlineMath math="A\cup(B\cap C)" />의
                                모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
3+9=12
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 문제에서는 집합 <InlineMath math="A,\ B,\ C" />를
                                    각각 구할 필요가 없습니다.
                                    문제에서 <InlineMath math="A\cup B" />와{" "}
                                    <InlineMath math="A\cup C" />가 주어졌으므로
                                    두 집합에 공통으로 들어 있는 원소를 생각합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 집합에 공통으로 들어 있는 원소는
                                    <InlineMath math="A" />에 있거나,{" "}
                                    <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />에 동시에 있는 원소입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(A\cup B)\cap(A\cup C)
=
A\cup(B\cap C)
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 문제에서 주어진 집합을 먼저 구한 뒤
                                    두 집합의 공통 원소를 찾으면 됩니다.
                                </p>

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
                            전체집합 <InlineMath math="U=\{1,2,3,4,5,6,7,8\}" />의
                            두 부분집합 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A^C\cup B^C=\{1,2,3,4,5,6\}
`}
                        />

                        <BlockMath
                            math={String.raw`
(B-A)^C\cap\{A\cap(A\cap B)^C\}
=
\{1,4,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="A" />의 모든 원소의 합을
                            구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 첫 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    첫 번째 조건에서 한 개의 방 찾기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A^C\cup B^C" />는
                                    전체 4개의 방 중 <b>3개의 방</b>입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 그 3개의 방에 포함되지 않는
                                    나머지 1개의 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    전체집합이
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8\}
`}
                                />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C=\{1,2,3,4,5,6\}
`}
                                />

                                <p className="leading-8">
                                    이므로 나머지 한 방은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{7,8\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 두 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 번째 조건의 안쪽부터 정리하기
                                </p>

                                <p className="leading-8">
                                    먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap(A\cap B)^C
`}
                                />

                                <p className="leading-8">
                                    를 생각해 봅시다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A\cap B" />는
                                    집합 <InlineMath math="A" /> 안의 한 방입니다.
                                    따라서 집합 <InlineMath math="A" />에서
                                    그 방을 제외하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap(A\cap B)^C=A-B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 바깥 연산 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    남은 연산 정리하기
                                </p>

                                <p className="leading-8">
                                    두 번째 조건은 이제
                                </p>

                                <BlockMath
                                    math={String.raw`
(B-A)^C\cap(A-B)
`}
                                />

                                <p className="leading-8">
                                    로 바뀝니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A-B" />와{" "}
                                    <InlineMath math="B-A" />는 서로 다른 방이므로{" "}
                                    <InlineMath math="A-B" />의 모든 원소는{" "}
                                    <InlineMath math="B-A" />에는 들어 있지 않습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="A-B" />는 모두{" "}
                                    <InlineMath math="(B-A)^C" />에 포함되어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(B-A)^C\cap(A-B)=A-B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    주어진 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
(B-A)^C\cap\{A\cap(A\cap B)^C\}
=
\{1,4,5\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{1,4,5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* A 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A" /> 완성하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는 다음 두 개의 방으로
                                    이루어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=(A-B)\cup(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    앞에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{1,4,5\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
A\cap B=\{7,8\}
`}
                                />

                                <p className="leading-8">
                                    을 구했으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A
&=(A-B)\cup(A\cap B)\\
&=\{1,4,5\}\cup\{7,8\}\\
&=\{1,4,5,7,8\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+4+5+7+8=25
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{25}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    복잡한 집합식도 한 번에 처리하지 않고
                                    안쪽부터 어떤 방을 나타내는지 차례대로 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C
\rightarrow
A\cap B
`}
                                />

                                <BlockMath
                                    math={String.raw`
A\cap(A\cap B)^C
\rightarrow
A-B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    결국 집합 <InlineMath math="A" />를 이루는
                                    두 개의 방
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B,\qquad A\cap B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 각각 구한 뒤 합치면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A=(A-B)\cup(A\cap B)
}
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
                            전체집합{" "}
                            <InlineMath
                                math={String.raw`
U=\{x\mid x\text{는 }9\text{ 이하의 자연수}\}
`}
                            />의 세 부분집합 <InlineMath math="A,\ B,\ C" />에 대하여{" "}
                            <InlineMath math="B\subset A" />이고
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup C=\{1,2,3,4,5,6,7,9\}
`}
                        />

                        <BlockMath
                            math={String.raw`
A-B=\{9\},\qquad
B-C=\{2,4\},\qquad
C-A=\{1,3,5,7\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="A\cap(B-C)^C" />의
                            모든 원소의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* A의 원소 찾기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A" />의 원소부터 찾기
                                </p>

                                <p className="leading-8">
                                    조건
                                </p>

                                <BlockMath
                                    math={String.raw`
B-C=\{2,4\}
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="2,\ 4" />는
                                    집합 <InlineMath math="B" />의 원소입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 <InlineMath math="B\subset A" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2,4\in A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 9 */}
                            <p className="leading-8">
                                또
                            </p>

                            <BlockMath
                                math={String.raw`
A-B=\{9\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
9\in A
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* A에 없는 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 <InlineMath math="A" />에 없는 원소 찾기
                                </p>

                                <p className="leading-8">
                                    조건
                                </p>

                                <BlockMath
                                    math={String.raw`
C-A=\{1,3,5,7\}
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="1,\ 3,\ 5,\ 7" />은
                                    집합 <InlineMath math="C" />에는 있지만
                                    집합 <InlineMath math="A" />에는 없는 원소입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1,3,5,7\notin A
`}
                                />

                            </div>


                            {/* 6 판단 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원소 <InlineMath math="6" />의 위치 판단하기
                                </p>

                                <p className="leading-8">
                                    현재
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup C=\{1,2,3,4,5,6,7,9\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="6" />은
                                    집합 <InlineMath math="A" /> 또는{" "}
                                    <InlineMath math="C" />에 들어 있어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    만약 <InlineMath math="6\notin A" />라면{" "}
                                    <InlineMath math="6\in C-A" />이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러나
                                </p>

                                <BlockMath
                                    math={String.raw`
C-A=\{1,3,5,7\}
`}
                                />

                                <p className="leading-8">
                                    에는 <InlineMath math="6" />이 없으므로 모순입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
6\in A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* A 결정 */}
                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />는
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{2,4,6,9\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 마지막 연산 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    필요한 연산만 이용하기
                                </p>

                                <p className="leading-8">
                                    문제에서 <InlineMath math="B-C" />는 이미
                                    주어져 있으므로 집합 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />를 각각 구할 필요는 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-C=\{2,4\}
`}
                                />

                                <p className="leading-8">
                                    이므로 전체집합에서 그 여집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
(B-C)^C=\{1,3,5,6,7,8,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A\cap(B-C)^C
&=\{2,4,6,9\}
\cap
\{1,3,5,6,7,8,9\}\\
&=\{6,9\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
6+9=15
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 집합에 대한 조건이 많이 주어져도
                                    모든 집합을 전부 구할 필요는 없습니다.
                                    먼저 구하려는 식에 필요한 집합을 결정합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-C=\{2,4\},
\quad
B\subset A
\quad\Rightarrow\quad
2,4\in A
`}
                                />

                                <BlockMath
                                    math={String.raw`
A-B=\{9\}
\quad\Rightarrow\quad
9\in A
`}
                                />

                                <BlockMath
                                    math={String.raw`
C-A=\{1,3,5,7\}
\quad\Rightarrow\quad
1,3,5,7\notin A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 조건들과 <InlineMath math="A\cup C" />를 이용하여
                                    집합 <InlineMath math="A" />를 먼저 결정한 뒤,
                                    이미 주어진 <InlineMath math="B-C" />를 그대로
                                    이용하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{필요한 집합만 결정}
\rightarrow
\text{주어진 연산 결과를 그대로 이용}
}
`}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 17 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 17
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{a,b,c,d,e,f\},\qquad
B=\{x+k\mid x\in A\}
`}
                        />

                        <p className="leading-8">
                            에 대하여 다음 조건을 만족시킨다.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                            <div>
                                <InlineMath
                                    math="\text{(가) }\ A\cap B=\{8,11,13\}"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{(나) 집합 }A\text{의 모든 원소의 합이 }52\text{이다.}"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{(다) }A\cup B\text{의 모든 원소의 합이 }96\text{이다.}"
                                />
                            </div>
                        </div>

                        <p className="mt-5 leading-8">
                            집합 <InlineMath math="B" />의 모든 원소의 합을
                            구하시오. 단, <InlineMath math="n(A)=6" />이고{" "}
                            <InlineMath math="k" />는 상수이다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 교집합의 모든 원소의 합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{8,11,13\}
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로 교집합의 모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
8+11+13=32
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 합집합의 원소의 합을 이용합니다.
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />의 모든 원소를 각각 더하면
                                    교집합 <InlineMath math="A\cap B" />의 원소는
                                    두 번 더해집니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 합집합의 모든 원소의 합을 구할 때는
                                    교집합의 원소의 합을 한 번 빼주어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
&A\cup B\text{의 모든 원소의 합}\\
&=
A\text{의 모든 원소의 합}
+
B\text{의 모든 원소의 합}\\
&\qquad
-(A\cap B)\text{의 모든 원소의 합}
\end{aligned}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 주어진 값을 대입합니다.
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />의 모든 원소의 합을{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
96=52+S-32
`}
                                />

                                <BlockMath
                                    math={String.raw`
S=96-52+32=76
`}
                                />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="76" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    원소의 합에서도 합집합의 원소의 개수를 구할 때와
                                    마찬가지로{" "}
                                    <span className="font-bold text-white">
                                        교집합의 원소가 두 번 계산된다는 것
                                    </span>
                                    에 주의합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\text{합집합의 원소의 합}
={}&\text{A의 원소의 합}\\
&+\text{B의 원소의 합}\\
&-\text{교집합의 원소의 합}
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 이 문제에서는{" "}
                                    <InlineMath math="B=\{x+k\mid x\in A\}" />의
                                    각 원소를 직접 구할 필요가 없습니다.
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

                        <p>
                            • 두 집합이 만드는 기본적인 4개의 방을 기준으로
                            집합의 연산을 생각한다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B^C,\qquad
A\cap B,\qquad
A^C\cap B,\qquad
A^C\cap B^C
`}
                        />

                        <p>
                            • 여집합은 해당 집합이 아닌 영역을 나타낸다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap A^C=\varnothing,\qquad
A\cup A^C=U,\qquad
(A^C)^C=A
`}
                        />

                        <p>
                            • 드모르간의 법칙에서는 각각의 집합에 여집합을
                            취하고 교집합과 합집합을 서로 바꾼다.
                        </p>

                        <BlockMath
                            math={String.raw`
(A\cup B)^C=A^C\cap B^C
`}
                        />

                        <BlockMath
                            math={String.raw`
(A\cap B)^C=A^C\cup B^C
`}
                        />

                        <p>
                            • 교집합과 합집합에는 교환법칙, 결합법칙,
                            분배법칙이 성립한다.
                        </p>

                        <p>
                            • 차집합을 교집합으로 바꾸면 뒤의 집합에
                            여집합을 취한다.
                        </p>

                        <BlockMath
                            math={String.raw`
A-B=A\cap B^C
`}
                        />

                        <p>
                            • 벤다이어그램에서 여러 조건을 처리할 때는
                            방의 개수가 적은 조건부터 처리하면 편리하다.
                        </p>

                        <BlockMath
                            math={String.raw`
1\text{개의 방}
\rightarrow
2\text{개의 방}
\rightarrow
3\text{개의 방}
`}
                        />

                    </div>

                </div>

            </section>

            {/* 2.8 집합의 연산과 부분집합 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.8 집합의 연산과 부분집합
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합이 서로 포함관계에 있으면
                    합집합, 교집합, 차집합의 결과를 간단하게 판단할 수 있습니다.
                    <br />
                    반대로 집합의 연산 결과를 보고 두 집합의 포함관계를 알아낼 수도 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 포함관계와 집합의 연산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 포함관계와 집합의 연산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />가 집합 <InlineMath math="B" />의
                            부분집합이라고 해 봅시다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이때 집합 <InlineMath math="A" />는 <b>작은 집합</b>,
                            집합 <InlineMath math="B" />는 <b>큰 집합</b>이라고
                            생각할 수 있습니다.
                        </p>


                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <VennDiagram type="a-subset-b" />

                            <p className="mt-4 text-center leading-8 text-gray-300">
                                작은 집합 <InlineMath math="A" />가
                                큰 집합 <InlineMath math="B" /> 안에 들어 있습니다.
                            </p>

                        </div>


                        <div className="mt-6 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    합집합
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 포함관계가 있는 두 집합을 합집합하면
                                    <b> 큰 집합</b>이 나옵니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=B
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    교집합
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 포함관계가 있는 두 집합을 교집합하면
                                    <b> 작은 집합</b>이 나옵니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=A
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    차집합
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <b>작은 집합에서 큰 집합을 빼면</b>
                                    아무것도 남지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing
`}
                                />

                            </div>

                        </div>


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                포함관계가 있으면
                            </p>

                            <div className="mt-4 space-y-3 text-gray-300">

                                <p>
                                    • 합집합 → <b>큰 집합</b>
                                </p>

                                <p>
                                    • 교집합 → <b>작은 집합</b>
                                </p>

                                <p>
                                    • 작은 집합 - 큰 집합 → <b>공집합</b>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 2. 연산 결과에서 포함관계 찾기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 연산 결과에서 포함관계 찾기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            앞의 관계를 반대로 이용하면
                            집합의 연산 결과만 보고 어느 집합이 큰 집합이고
                            어느 집합이 작은 집합인지 판단할 수 있습니다.
                        </p>


                        {/* 합집합 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                합집합의 결과가 두 집합 중 하나일 때
                            </p>

                            <BlockMath
                                math={String.raw`
X\cup Y=Y
`}
                            />

                            <p className="leading-8 text-gray-300">
                                합집합하면 <b>큰 집합</b>이 나오므로
                                나온 집합 <InlineMath math="Y" />가 큰 집합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{X\subset Y}
`}
                            />

                        </div>


                        {/* 교집합 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                교집합의 결과가 두 집합 중 하나일 때
                            </p>

                            <BlockMath
                                math={String.raw`
(X-Y)\cap Z=Z
`}
                            />

                            <p className="leading-8 text-gray-300">
                                교집합하면 <b>작은 집합</b>이 나오므로
                                나온 집합 <InlineMath math="Z" />가 작은 집합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{Z\subset(X-Y)}
`}
                            />

                        </div>


                        {/* 차집합 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                차집합의 결과가 공집합일 때
                            </p>

                            <BlockMath
                                math={String.raw`
(X\cap Y)-(Y\cap Z)=\varnothing
`}
                            />

                            <p className="leading-8 text-gray-300">
                                차집합의 결과가 공집합이면
                                <b> 앞의 집합이 작은 집합</b>입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(X\cap Y)\subset(Y\cap Z)
}
`}
                            />

                        </div>


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                식을 해석하는 방법
                            </p>

                            <div className="mt-4 space-y-3 text-gray-300">

                                <p>
                                    • 합집합 연산 후 두 집합 중 하나가 나오면
                                    → <b>나온 집합이 큰 집합</b>
                                </p>

                                <p>
                                    • 교집합 연산 후 두 집합 중 하나가 나오면
                                    → <b>나온 집합이 작은 집합</b>
                                </p>

                                <p>
                                    • 차집합의 결과가 공집합이면
                                    → <b>앞의 집합이 작은 집합</b>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 3. 여집합과 포함관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 여집합과 포함관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />가 집합 <InlineMath math="B" />의
                            부분집합인 경우를 영역으로 생각해 봅시다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
`}
                        />


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <VennDiagram type="a-subset-b" />

                            <p className="mt-4 leading-8 text-gray-300">
                                전체집합 <InlineMath math="U" />는 다음 3개의 서로 겹치지 않는
                                방으로 나누어 생각할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A,\qquad B-A,\qquad B^C
`}
                            />

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />는 가장 안쪽의 <b>1개의 방</b>이고,
                            집합 <InlineMath math="B" />는{" "}
                            <InlineMath math="A" />와 <InlineMath math="B-A" />를 합한
                            <b> 2개의 방</b>입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A:\ 1\text{개의 방}
\qquad
B:\ 2\text{개의 방}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            이제 여집합을 생각하면{" "}
                            <InlineMath math="A^C" />는 집합 <InlineMath math="A" />를
                            제외한 <b>2개의 방</b>이고,{" "}
                            <InlineMath math="B^C" />는 집합 <InlineMath math="B" />를
                            제외한 <b>1개의 방</b>입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A^C:\ 2\text{개의 방}
\qquad
B^C:\ 1\text{개의 방}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 처음에는 <InlineMath math="A" />가 작은 집합이었지만
                            여집합을 취하면 <InlineMath math="B^C" />가 작은 집합이 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A\subset B
\quad\Longrightarrow\quad
B^C\subset A^C
}
`}
                        />


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                여집합을 취하면
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                여집합을 취하면 <b>포함관계가 반대로 바뀝니다.</b>
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A\subset B
\iff
B^C\subset A^C
}
`}
                            />

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
                            전체집합 <InlineMath math="U" />의 서로 다른 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여{" "}
                            <InlineMath math="B-A=\varnothing" />일 때,
                            다음 중 옳지 않은 것은?
                        </p>

                        <div className="mt-5 space-y-3 text-gray-300">
                            <p>① <InlineMath math="B^C\subset A^C" /></p>
                            <p>② <InlineMath math="A\cap B=B" /></p>
                            <p>③ <InlineMath math="A\cup B=A" /></p>
                            <p>④ <InlineMath math="A\cup B^C=U" /></p>
                            <p>⑤ <InlineMath math="A^C-B^C=\varnothing" /></p>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 주어진 조건
                            </p>

                            <BlockMath
                                math={String.raw`
B-A=\varnothing
`}
                            />

                            <p className="leading-8">
                                을 해석해 봅시다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    차집합이 공집합
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\varnothing
\quad\Longrightarrow\quad
B\subset A
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="B" />가 작은 집합,{" "}
                                    <InlineMath math="A" />가 큰 집합입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 각 보기를 확인해 봅시다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ① <InlineMath math="B^C\subset A^C" />
                                </p>

                                <p className="mt-3 leading-8">
                                    여집합을 취하면 포함관계가 반대로 바뀝니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\subset A
\quad\Longrightarrow\quad
A^C\subset B^C
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="B^C\subset A^C" />는
                                    옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ② <InlineMath math="A\cap B=B" />
                                </p>

                                <p className="mt-3 leading-8">
                                    교집합하면 작은 집합이 나오므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=B
`}
                                />

                                <p className="leading-8">
                                    로 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ③ <InlineMath math="A\cup B=A" />
                                </p>

                                <p className="mt-3 leading-8">
                                    합집합하면 큰 집합이 나오므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=A
`}
                                />

                                <p className="leading-8">
                                    로 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ④ <InlineMath math="A\cup B^C=U" />
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="B\subset A" />이므로
                                    여집합에서는 <InlineMath math="A^C\subset B^C" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="B^C" />에는{" "}
                                    <InlineMath math="A" />의 바깥 영역이 모두 포함되어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B^C=U
`}
                                />

                                <p className="leading-8">
                                    로 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ⑤ <InlineMath math="A^C-B^C=\varnothing" />
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A^C\subset B^C" />이므로
                                    작은 집합 <InlineMath math="A^C" />에서
                                    큰 집합 <InlineMath math="B^C" />를 빼면
                                    아무것도 남지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C-B^C=\varnothing
`}
                                />

                                <p className="leading-8">
                                    따라서 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{①}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\varnothing
\quad\Longrightarrow\quad
B\subset A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    먼저 큰 집합과 작은 집합을 결정한 뒤
                                    합집합은 큰 집합, 교집합은 작은 집합이라는 관계를
                                    이용합니다. 여집합을 취하면 포함관계가 반대로 바뀝니다.
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
                            전체집합 <InlineMath math="U" />의 서로 다른 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여{" "}
                            <InlineMath math="A-B=\varnothing" />일 때, 다음 중 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap
\left\{
(A^C\cup B^C)^C
\cup
(B\cap A^C)
\right\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            와 항상 같은 집합은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>① <InlineMath math="A" /></p>
                            <p>② <InlineMath math="B" /></p>
                            <p>③ <InlineMath math="\varnothing" /></p>
                            <p>④ <InlineMath math="A^C\cup B" /></p>
                            <p>⑤ <InlineMath math="A\cap B^C" /></p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 주어진 조건
                            </p>

                            <BlockMath
                                math={String.raw`
A-B=\varnothing
`}
                            />

                            <p className="leading-8">
                                을 해석해 봅시다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    큰 집합과 작은 집합 찾기
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing
\quad\Longrightarrow\quad
A\subset B
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="A" />가 작은 집합이고,{" "}
                                    <InlineMath math="B" />가 큰 집합입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 괄호 안의 집합부터 차례로 구해 봅시다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    첫 번째 집합
                                </p>

                                <p className="leading-8">
                                    드모르간의 법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(A^C\cup B^C)^C
=
A\cap B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 <InlineMath math="A\subset B" />이므로
                                    교집합하면 작은 집합이 나옵니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=A
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
(A^C\cup B^C)^C=A
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 번째 집합
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap A^C=B-A
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="B" />에서
                                    작은 집합 <InlineMath math="A" />를 제외한 부분입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 중괄호 안은
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
(A^C\cup B^C)^C
\cup
(B\cap A^C)
&=A\cup(B-A)\\
&=B
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                입니다. 작은 집합 <InlineMath math="A" />와
                                그 밖의 <InlineMath math="B-A" />를 합하면
                                큰 집합 <InlineMath math="B" /> 전체가 됩니다.
                            </p>


                            <p className="leading-8">
                                원래 식은
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B
`}
                            />

                            <p className="leading-8">
                                가 되고, <InlineMath math="A\subset B" />이므로
                                교집합하면 작은 집합인 <InlineMath math="A" />가 나옵니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=A
`}
                            />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{①}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 차집합이 공집합이라는 조건에서
                                    <b> 큰 집합과 작은 집합을 결정</b>합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing
\quad\Longrightarrow\quad
A\subset B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그 뒤 복잡한 식은 괄호 안쪽부터 단순화하고,
                                    포함관계가 나타나면
                                    <b> 합집합은 큰 집합, 교집합은 작은 집합</b>이라는
                                    성질을 이용합니다.
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

                        <p className="leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여{" "}
                            <InlineMath math="A\cap B=\varnothing" />일 때,
                            다음 중 항상 옳은 것은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>
                                ① <InlineMath math="A\cup B=U" />
                            </p>
                            <p>
                                ② <InlineMath math="A-B=\varnothing" />
                            </p>
                            <p>
                                ③ <InlineMath math="B-A=\varnothing" />
                            </p>
                            <p>
                                ④ <InlineMath math="B\cap A^C=B" />
                            </p>
                            <p>
                                ⑤ <InlineMath math="A-B^C=U" />
                            </p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                주어진 조건
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\varnothing
`}
                            />

                            <p className="leading-8">
                                은 두 집합 <InlineMath math="A,\ B" />에
                                공통인 원소가 하나도 없다는 뜻입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />의 위치
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />의 원소는
                                    하나도 <InlineMath math="A" />에 들어 있지 않습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 집합 <InlineMath math="B" />의 모든 원소는
                                    집합 <InlineMath math="A" />의 바깥,
                                    즉 <InlineMath math="A^C" />에 들어 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\subset A^C
`}
                                />

                            </div>


                            <p className="leading-8">
                                이제 각 보기를 확인해 봅시다.
                            </p>


                            {/* ① */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ① <InlineMath math="A\cup B=U" />
                                </p>

                                <p className="mt-3 leading-8">
                                    두 집합이 서로소라고 해서
                                    두 집합을 합한 것이 반드시 전체집합이 되는 것은 아닙니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 항상 옳지는 않습니다.
                                </p>

                            </div>


                            {/* ② */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ② <InlineMath math="A-B=\varnothing" />
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="B" />는
                                    서로 겹치지 않으므로{" "}
                                    <InlineMath math="A" />에서 <InlineMath math="B" />를 빼도
                                    집합 <InlineMath math="A" />가 그대로 남습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=A
`}
                                />

                                <p className="leading-8">
                                    따라서 항상 옳지는 않습니다.
                                </p>

                            </div>


                            {/* ③ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ③ <InlineMath math="B-A=\varnothing" />
                                </p>

                                <p className="mt-3 leading-8">
                                    마찬가지로 두 집합이 서로 겹치지 않으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=B
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 항상 옳지는 않습니다.
                                </p>

                            </div>


                            {/* ④ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ④ <InlineMath math="B\cap A^C=B" />
                                </p>

                                <p className="mt-3 leading-8">
                                    앞에서
                                </p>

                                <BlockMath
                                    math={String.raw`
B\subset A^C
`}
                                />

                                <p className="leading-8">
                                    임을 알았습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    서로 포함관계가 있는 두 집합을 교집합하면
                                    <b> 작은 집합</b>이 나오므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap A^C=B
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 항상 옳습니다.
                                </p>

                            </div>


                            {/* ⑤ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ⑤ <InlineMath math="A-B^C=U" />
                                </p>

                                <p className="mt-3 leading-8">
                                    차집합을 교집합으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B^C
=
A\cap(B^C)^C
=
A\cap B
`}
                                />

                                <p className="leading-8">
                                    이고, 주어진 조건에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B^C=\varnothing
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 옳지 않습니다.
                                </p>

                            </div>


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
                                    두 집합 <InlineMath math="A,\ B" />가 서로소이면
                                    집합 <InlineMath math="B" />의 원소는 모두
                                    집합 <InlineMath math="A" />의 바깥에 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
\quad\Longrightarrow\quad
B\subset A^C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 <InlineMath math="B" />와{" "}
                                    <InlineMath math="A^C" />를 교집합하면
                                    작은 집합인 <InlineMath math="B" />가 나옵니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap A^C=B
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
                            전체집합 <InlineMath math="U" />의 공집합이 아닌 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여{" "}
                            <InlineMath math="A^C,\ B^C" />이 서로소일 때,
                            보기에서 옳은 것만을 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-4 text-gray-300">
                                <p>
                                    ㄱ. <InlineMath math="A\cup B=U" />
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="(A\cup B)^C\cup A=A" />
                                </p>

                                <p>
                                    ㄷ. <InlineMath math="(A^C\cap B)\cup A=A" />
                                </p>
                            </div>

                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>① ㄱ</p>
                            <p>② ㄷ</p>
                            <p>③ ㄱ, ㄴ</p>
                            <p>④ ㄴ, ㄷ</p>
                            <p>⑤ ㄱ, ㄴ, ㄷ</p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="A^C,\ B^C" />이 서로소라는
                                조건을 해석해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cap B^C=\varnothing
`}
                            />

                            <p className="leading-8">
                                드모르간의 법칙을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cap B^C
=
(A\cup B)^C
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cup B)^C=\varnothing
`}
                            />

                            <p className="leading-8">
                                입니다. 여집합이 공집합이라는 것은
                                원래 집합이 전체집합이라는 뜻이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{A\cup B=U}
`}
                            />


                            {/* ㄱ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄱ. <InlineMath math="A\cup B=U" />
                                </p>

                                <p className="leading-8">
                                    앞에서 구한 결과와 같으므로 옳습니다.
                                </p>

                            </div>


                            {/* ㄴ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄴ. <InlineMath math="(A\cup B)^C\cup A=A" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\cup B=U" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)^C
=
U^C
=
\varnothing
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)^C\cup A
=
\varnothing\cup A
=
A
`}
                                />

                                <p className="leading-8">
                                    이므로 옳습니다.
                                </p>

                            </div>


                            {/* ㄷ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄷ. <InlineMath math="(A^C\cap B)\cup A=A" />
                                </p>

                                <p className="leading-8">
                                    합집합의 결과가 <InlineMath math="A" />이므로
                                    이 식이 성립하려면 <InlineMath math="A" />가 큰 집합이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B\subset A
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러나 <InlineMath math="A^C\cap B" />는{" "}
                                    <InlineMath math="A^C" />에 속하는 집합이므로
                                    집합 <InlineMath math="A" />의 바깥에 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 일반적으로{" "}
                                    <InlineMath math="A^C\cap B\subset A" />가 성립하지 않으므로
                                    ㄷ은 옳지 않습니다.
                                </p>

                            </div>


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
                                    여집합인 두 집합이 서로소라는 조건은
                                    드모르간의 법칙을 이용하면 원래 두 집합의
                                    합집합에 대한 조건으로 바꿀 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C=\varnothing
\quad\Longrightarrow\quad
(A\cup B)^C=\varnothing
\quad\Longrightarrow\quad
A\cup B=U
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 <InlineMath math="X\cup A=A" />와 같은 식이 나오면
                                    합집합의 결과인 <InlineMath math="A" />가 큰 집합이므로{" "}
                                    <InlineMath math="X\subset A" />인지 확인하면 됩니다.
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
                            전체집합 <InlineMath math="U" />의 세 부분집합{" "}
                            <InlineMath math="A,\ B,\ C" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(A\cap B)\cup(B-C)=\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 다음 중 항상 옳은 것은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>① <InlineMath math="A\cup B=U" /></p>
                            <p>② <InlineMath math="A\cap B=U" /></p>
                            <p>③ <InlineMath math="A\cup C=U" /></p>
                            <p>④ <InlineMath math="B\cap C=B" /></p>
                            <p>⑤ <InlineMath math="A\cap C=\varnothing" /></p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                주어진 조건을 살펴봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cap B)\cup(B-C)=\varnothing
`}
                            />

                            <p className="leading-8">
                                두 집합을 합집합한 결과가 공집합이므로
                                두 집합에는 원소가 하나도 없어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\varnothing,
\qquad
B-C=\varnothing
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    포함관계 찾기
                                </p>

                                <p className="leading-8">
                                    여기서
                                </p>

                                <BlockMath
                                    math={String.raw`
B-C=\varnothing
`}
                                />

                                <p className="leading-8">
                                    이므로 차집합의 결과가 공집합입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{B\subset C}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 <InlineMath math="B" />가 작은 집합,{" "}
                                <InlineMath math="C" />가 큰 집합이라는 것을 알았습니다.
                            </p>

                            <p className="leading-8">
                                서로 포함관계가 있는 두 집합을 교집합하면
                                <b> 작은 집합</b>이 나오므로
                            </p>

                            <BlockMath
                                math={String.raw`
B\cap C=B
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
{④}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    합집합의 결과가 공집합이면
                                    합집합을 이루는 각각의 집합도 공집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
X\cup Y=\varnothing
\quad\Longrightarrow\quad
X=\varnothing,\ Y=\varnothing
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 이 문제에서는 먼저{" "}
                                    <InlineMath math="B-C=\varnothing" />을 얻고,
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>이라는 성질을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-C=\varnothing
\quad\Longrightarrow\quad
B\subset C
\quad\Longrightarrow\quad
B\cap C=B
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
                            두 집합{" "}
                            <InlineMath math="A=\{1,5\}" />,{" "}
                            <InlineMath math="B=\{x\mid 5x-3=kx+7\}" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A^C\cap B=\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 모든 실수 <InlineMath math="k" />의 값의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 주어진 집합의 조건을 해석해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cap B=\varnothing
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="A^C\cap B" />는
                                집합 <InlineMath math="B" />에는 있지만
                                집합 <InlineMath math="A" />에는 없는 부분이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cap B=B-A
`}
                            />

                            <p className="leading-8">
                                입니다. 따라서 주어진 조건은
                            </p>

                            <BlockMath
                                math={String.raw`
B-A=\varnothing
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    포함관계로 해석하기
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\varnothing
\quad\Longrightarrow\quad
B\subset A
`}
                                />

                                <p className="leading-8">
                                    즉, 방정식 <InlineMath math="5x-3=kx+7" />의
                                    해는 모두
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,5\}
`}
                                />

                                <p className="leading-8">
                                    안에 있어야 합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                방정식을 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
(5-k)x=10
`}
                            />

                            <p className="leading-8">
                                입니다. <InlineMath math="k" />의 값에 따라 나누어
                                생각해 봅시다.
                            </p>


                            {/* k = 5 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ① <InlineMath math="k=5" />인 경우
                                </p>

                                <p className="leading-8">
                                    방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
0\cdot x=10
`}
                                />

                                <p className="leading-8">
                                    이 되어 해가 없습니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\varnothing
`}
                                />

                                <p className="leading-8">
                                    이고, 공집합은 집합 <InlineMath math="A" />의
                                    부분집합이므로 조건을 만족합니다.
                                </p>

                            </div>


                            {/* k != 5 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ② <InlineMath math="k\ne5" />인 경우
                                </p>

                                <p className="leading-8">
                                    방정식의 해가 하나 존재합니다.{" "}
                                    <InlineMath math="B\subset A" />이므로
                                    이 해는 <InlineMath math="1" /> 또는{" "}
                                    <InlineMath math="5" />이어야 합니다.
                                </p>


                                <p className="mt-5 leading-8">
                                    먼저 <InlineMath math="x=1" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
5(1)-3=k(1)+7
`}
                                />

                                <BlockMath
                                    math={String.raw`
2=k+7
\quad\Longrightarrow\quad
k=-5
`}
                                />


                                <p className="mt-5 leading-8">
                                    다음으로 <InlineMath math="x=5" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
5(5)-3=5k+7
`}
                                />

                                <BlockMath
                                    math={String.raw`
22=5k+7
\quad\Longrightarrow\quad
k=3
`}
                                />

                            </div>


                            <p className="leading-8">
                                따라서 조건을 만족시키는 모든 <InlineMath math="k" />의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
-5,\ 3,\ 5
`}
                            />

                            <p className="leading-8">
                                이고, 그 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-5+3+5=3
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
                                    먼저 집합의 연산을 포함관계로 바꾸어 해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B=\varnothing
\quad\Longrightarrow\quad
B-A=\varnothing
\quad\Longrightarrow\quad
B\subset A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 방정식의 해가 존재한다면
                                    그 해는 집합 <InlineMath math="A=\{1,5\}" />의
                                    원소이어야 합니다.
                                    또한 방정식의 해가 없는 경우에는{" "}
                                    <InlineMath math="B=\varnothing" />이 되므로
                                    이 경우도 반드시 확인해야 합니다.
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
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,3,5,6\},\qquad
B=\{2,3,4,6\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(A-B)\cup X=X,\qquad
(A\cup B)\cap X=X
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 집합 <InlineMath math="X" />의 개수는?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 식을 각각 포함관계로 해석해 봅시다.
                            </p>


                            {/* 첫 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    첫 번째 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B)\cup X=X
`}
                                />

                                <p className="leading-8">
                                    합집합의 결과가 <InlineMath math="X" />이므로
                                    <b> 나온 집합인 X가 큰 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{A-B\subset X}
`}
                                />

                            </div>


                            {/* 두 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 번째 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap X=X
`}
                                />

                                <p className="leading-8">
                                    교집합의 결과가 <InlineMath math="X" />이므로
                                    <b> 나온 집합인 X가 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{X\subset A\cup B}
`}
                                />

                            </div>


                            <p className="leading-8">
                                두 조건을 합하면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
A-B\subset X\subset A\cup B
}
`}
                            />


                            <p className="leading-8">
                                이제 양쪽의 집합을 구해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A-B=\{1,5\}
`}
                            />

                            <BlockMath
                                math={String.raw`
A\cup B=\{1,2,3,4,5,6\}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\{1,5\}\subset X
\subset
\{1,2,3,4,5,6\}
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="X" />의 원소 선택
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1,\ 5" />는 집합{" "}
                                    <InlineMath math="X" />에 <b>반드시 포함</b>되어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    나머지 원소
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 3,\ 4,\ 6
`}
                                />

                                <p className="leading-8">
                                    은 각각 포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2\times2=16
`}
                                />

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{16}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    합집합의 결과가 두 집합 중 하나이면
                                    <b> 나온 집합이 큰 집합</b>이고,
                                    교집합의 결과가 두 집합 중 하나이면
                                    <b> 나온 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B)\cup X=X
\quad\Longrightarrow\quad
A-B\subset X
`}
                                />

                                <BlockMath
                                    math={String.raw`
(A\cup B)\cap X=X
\quad\Longrightarrow\quad
X\subset A\cup B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 두 조건을 하나의 포함관계로 연결한 뒤,
                                    반드시 포함해야 하는 원소와
                                    선택할 수 있는 원소를 구분하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B\subset X\subset A\cup B
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
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{3,4,7\},
\qquad
B=
\left\{
\frac{x+k}{3}
\mid x\in A
\right\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(A\cap B)\subset X\subset A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 집합 <InlineMath math="X" />의 개수가{" "}
                            <InlineMath math="2" />일 때,
                            상수 <InlineMath math="k" />의 값은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="X" />의 포함관계를 살펴봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cap B)\subset X\subset A
`}
                            />

                            <p className="leading-8">
                                집합 <InlineMath math="X" />에는{" "}
                                <InlineMath math="A\cap B" />의 원소가 모두 들어가야 하고,
                                집합 <InlineMath math="A" />에 없는 원소는 들어갈 수 없습니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    <InlineMath math="A\cap B" />의 원소 개수
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A=\{3,4,7\}" />의 원소는
                                    모두 3개입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    만약 <InlineMath math="A\cap B" />의 원소가 2개라면
                                    나머지 1개의 원소는 집합 <InlineMath math="X" />에
                                    포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\text{가지}
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="X" />의 개수가 2이려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{n(A\cap B)=2}
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 집합 <InlineMath math="B" />를 구체적으로 나타내 봅시다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x" />는{" "}
                                <InlineMath math="3,\ 4,\ 7" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
B=
\left\{
\frac{k+3}{3},
\frac{k+4}{3},
\frac{k+7}{3}
\right\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />와 공통인 원소가 되기 위한 조건
                                </p>

                                <p className="leading-8">
                                    먼저{" "}
                                    <InlineMath math="\dfrac{k+3}{3}" />이
                                    집합 <InlineMath math="A=\{3,4,7\}" />의 원소가 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{k+3}{3}=3,\ 4,\ 7
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k=6,\ 9,\ 18
`}
                                />


                                <p className="mt-5 leading-8">
                                    다음으로{" "}
                                    <InlineMath math="\dfrac{k+4}{3}" />이
                                    집합 <InlineMath math="A" />의 원소가 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{k+4}{3}=3,\ 4,\ 7
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k=5,\ 8,\ 17
`}
                                />


                                <p className="mt-5 leading-8">
                                    마지막으로{" "}
                                    <InlineMath math="\dfrac{k+7}{3}" />이
                                    집합 <InlineMath math="A" />의 원소가 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{k+7}{3}=3,\ 4,\ 7
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k=2,\ 5,\ 14
`}
                                />

                            </div>


                            <p className="leading-8">
                                <InlineMath math="A\cap B" />의 원소가 2개가 되려면
                                위 세 경우 중 같은 <InlineMath math="k" />가
                                두 번 나타나야 합니다.
                            </p>

                            <p className="leading-8">
                                공통으로 나타나는 값은
                            </p>

                            <BlockMath
                                math={String.raw`
k=5
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    조건 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=5" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
B=
\left\{
\frac83,\ 3,\ 4
\right\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{3,4\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\{3,4\}\subset X\subset\{3,4,7\}
`}
                                />

                                <p className="leading-8">
                                    을 만족시키는 집합 <InlineMath math="X" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
\{3,4\},
\qquad
\{3,4,7\}
`}
                                />

                                <p className="leading-8">
                                    의 2개로 문제의 조건을 만족합니다.
                                </p>

                            </div>


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
                                    먼저
                                    <InlineMath math="(A\cap B)\subset X\subset A" />라는
                                    포함관계와 집합 <InlineMath math="X" />의 개수를 이용하여{" "}
                                    <InlineMath math="A\cap B" />의 원소 개수를 결정합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=3,\quad
X\text{의 개수}=2
\quad\Longrightarrow\quad
n(A\cap B)=2
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 집합 <InlineMath math="B" />의 세 원소 중
                                    정확히 두 원소가 집합 <InlineMath math="A" />에
                                    들어가도록 하는 <InlineMath math="k" />를 찾으면 됩니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            자연수 전체의 집합의 세 부분집합{" "}
                            <InlineMath math="A,\ B,\ X" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5,6\},
\qquad
B=\{1,2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="X-(A-B)=\varnothing" />을
                            만족시키는 집합 <InlineMath math="X" />의 개수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 주어진 조건을 포함관계로 해석해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
X-(A-B)=\varnothing
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    차집합이 공집합
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
X-(A-B)=\varnothing
\quad\Longrightarrow\quad
\boxed{X\subset A-B}
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="X" />는{" "}
                                    <InlineMath math="A-B" />의 부분집합입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 집합 <InlineMath math="A-B" />를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
A-B
&=\{1,2,3,4,5,6\}-\{1,2,3\}\\
&=\{4,5,6\}
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="X" />의 개수
                                </p>

                                <p className="leading-8">
                                    조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset\{4,5,6\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="X" />는
                                    집합 <InlineMath math="\{4,5,6\}" />의
                                    부분집합이면 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    원소 <InlineMath math="4,\ 5,\ 6" />은 각각
                                    집합 <InlineMath math="X" />에
                                    포함하거나 포함하지 않을 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2=8
`}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이때 아무 원소도 선택하지 않는{" "}
                                <InlineMath math="\varnothing" />도{" "}
                                <InlineMath math="\{4,5,6\}" />의 부분집합이므로
                                포함됩니다.
                            </p>


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
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
X-(A-B)=\varnothing
\quad\Longrightarrow\quad
X\subset A-B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 먼저 <InlineMath math="A-B" />를 구한 뒤,
                                    그 집합의 부분집합의 개수를 구하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{4,5,6\}
\quad\Longrightarrow\quad
2^3=8
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
                            전체집합
                        </p>

                        <BlockMath
                            math={String.raw`
U=\{x\mid x\text{는 }12\text{ 이하의 자연수}\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 부분집합{" "}
                            <InlineMath math="A=\{x\mid x\text{는 }12\text{의 약수}\}" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(A-X)\subset(X-A)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 <InlineMath math="U" />의 모든 부분집합{" "}
                            <InlineMath math="X" />의 개수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 차집합이 나타내는 영역을 생각해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A-X
\qquad\text{와}\qquad
X-A
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 차집합의 관계
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A-X" />는{" "}
                                    <InlineMath math="A" />에는 있지만{" "}
                                    <InlineMath math="X" />에는 없는 영역이고,
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="X-A" />는{" "}
                                    <InlineMath math="X" />에는 있지만{" "}
                                    <InlineMath math="A" />에는 없는 영역입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 두 집합은 서로 겹칠 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-X)\cap(X-A)=\varnothing
`}
                                />

                            </div>


                            <p className="leading-8">
                                그런데 문제에서
                            </p>

                            <BlockMath
                                math={String.raw`
(A-X)\subset(X-A)
`}
                            />

                            <p className="leading-8">
                                라고 하였습니다.
                            </p>

                            <p className="leading-8">
                                서로 겹치지 않는 두 집합에서{" "}
                                <InlineMath math="A-X" />가{" "}
                                <InlineMath math="X-A" />의 부분집합이 되려면{" "}
                                <InlineMath math="A-X" />에는 원소가 하나도 없어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A-X=\varnothing
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    포함관계로 해석하기
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A-X=\varnothing
\quad\Longrightarrow\quad
\boxed{A\subset X}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 집합 <InlineMath math="A" />의 원소를 구하면{" "}
                                <InlineMath math="12" />의 약수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,3,4,6,12\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                한편 전체집합은
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{1,2,3,4,5,6,7,8,9,10,11,12\}
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="X" />의 원소 선택
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\subset X" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 2,\ 3,\ 4,\ 6,\ 12
`}
                                />

                                <p className="leading-8">
                                    는 <InlineMath math="X" />에 <b>반드시 포함</b>되어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    나머지 원소
                                </p>

                                <BlockMath
                                    math={String.raw`
5,\ 7,\ 8,\ 9,\ 10,\ 11
`}
                                />

                                <p className="leading-8">
                                    은 각각 포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^6=64
`}
                                />

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{64}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A-X" />와{" "}
                                    <InlineMath math="X-A" />는 서로 겹치지 않는 영역입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 서로 겹치지 않는 두 집합 사이에 포함관계가 있다면
                                    작은 집합은 공집합이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-X)\subset(X-A)
\quad\Longrightarrow\quad
A-X=\varnothing
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 차집합이 공집합이라는 조건을
                                    포함관계로 바꾸어 해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-X=\varnothing
\quad\Longrightarrow\quad
A\subset X
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
                            전체집합{" "}
                            <InlineMath math="U=\{1,2,3,\cdots,10\}" />의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5\},
\qquad
B=\{1,3,5,7,9\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="A\cup C=B\cup C" />를 만족시키는{" "}
                            <InlineMath math="U" />의 부분집합{" "}
                            <InlineMath math="C" />의 개수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 집합 <InlineMath math="A,\ B" />의 원소를
                                비교해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,3,4,5\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{1,3,5,7,9\}
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 집합에서 서로 다른 원소 찾기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />에는 있지만{" "}
                                    <InlineMath math="B" />에는 없는 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,4\}
`}
                                />

                                <p className="leading-8">
                                    이고, <InlineMath math="B" />에는 있지만{" "}
                                    <InlineMath math="A" />에는 없는 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\{7,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이제 조건
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup C=B\cup C
`}
                            />

                            <p className="leading-8">
                                를 생각해 봅시다.
                            </p>

                            <p className="leading-8">
                                원소 <InlineMath math="2,\ 4" />는{" "}
                                <InlineMath math="A" />에는 있지만{" "}
                                <InlineMath math="B" />에는 없습니다.
                                따라서 양쪽의 합집합이 같아지려면{" "}
                                <InlineMath math="2,\ 4" />가 모두{" "}
                                <InlineMath math="C" />에 들어 있어야 합니다.
                            </p>

                            <p className="leading-8">
                                마찬가지로 원소 <InlineMath math="7,\ 9" />는{" "}
                                <InlineMath math="B" />에는 있지만{" "}
                                <InlineMath math="A" />에는 없으므로
                                모두 <InlineMath math="C" />에 들어 있어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{\{2,4,7,9\}\subset C}
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="C" />의 원소 선택
                                </p>

                                <p className="leading-8">
                                    원소
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 4,\ 7,\ 9
`}
                                />

                                <p className="leading-8">
                                    는 집합 <InlineMath math="C" />에
                                    <b> 반드시 포함</b>되어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    전체집합 <InlineMath math="U" />에서
                                    나머지 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 3,\ 5,\ 6,\ 8,\ 10
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 6개의 원소는 각각{" "}
                                    <InlineMath math="C" />에 포함하거나
                                    포함하지 않아도 두 합집합은 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^6=64
`}
                                />

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{64}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 합집합{" "}
                                    <InlineMath math="A\cup C" />와{" "}
                                    <InlineMath math="B\cup C" />가 같아지려면{" "}
                                    <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />에서
                                    <b> 서로 다른 원소를 C가 모두 채워 주어야 합니다.</b>
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{2,4\},
\qquad
B-A=\{7,9\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\{2,4,7,9\}\subset C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    반드시 포함해야 하는 원소를 먼저 정한 뒤,
                                    나머지 원소를 각각 포함하거나 포함하지 않는 경우를
                                    세면 됩니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            전체집합{" "}
                            <InlineMath math="U=\{1,2,3,4,5,6,7,8,9,10\}" />의
                            세 부분집합 <InlineMath math="A,\ B,\ X" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{2,4\},
\qquad
B=\{1,2,5,7,9\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
A-X=\varnothing,
\qquad
(B-A)\cap X=\{1,7,9\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 집합 <InlineMath math="X" />의 개수는?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                첫 번째 조건부터 해석해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A-X=\varnothing
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    첫 번째 조건
                                </p>

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-X=\varnothing
\quad\Longrightarrow\quad
A\subset X
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="A=\{2,4\}" />의 원소는
                                    모두 집합 <InlineMath math="X" />에 들어가야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 4
\quad:\quad
\text{반드시 포함}
`}
                                />

                            </div>


                            <p className="leading-8">
                                이제 두 번째 조건을 살펴봅시다.
                            </p>

                            <p className="leading-8">
                                먼저 <InlineMath math="B-A" />를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
B-A
&=\{1,2,5,7,9\}-\{2,4\}\\
&=\{1,5,7,9\}
\end{aligned}
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 번째 조건
                                </p>

                                <p className="leading-8">
                                    문제의 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1,5,7,9\}\cap X
=
\{1,7,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 원소 <InlineMath math="1,\ 7,\ 9" />는
                                    집합 <InlineMath math="X" />에 반드시 들어가야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 7,\ 9
\quad:\quad
\text{반드시 포함}
`}
                                />

                                <p className="mt-3 leading-8">
                                    반면 원소 <InlineMath math="5" />가{" "}
                                    <InlineMath math="X" />에 들어가면 교집합에도{" "}
                                    <InlineMath math="5" />가 나타나므로{" "}
                                    <InlineMath math="5" />는 들어갈 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
5
\quad:\quad
\text{포함되지 않음}
`}
                                />

                            </div>


                            <p className="leading-8">
                                지금까지의 조건을 정리하면
                                집합 <InlineMath math="X" />에는
                            </p>

                            <BlockMath
                                math={String.raw`
1,\ 2,\ 4,\ 7,\ 9
`}
                            />

                            <p className="leading-8">
                                가 반드시 포함되고,{" "}
                                <InlineMath math="5" />는 포함되지 않아야 합니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    자유롭게 선택할 수 있는 원소
                                </p>

                                <p className="leading-8">
                                    전체집합 <InlineMath math="U" />에서 아직 결정되지 않은 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
3,\ 6,\ 8,\ 10
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 4개의 원소는 각각 집합 <InlineMath math="X" />에
                                    포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2\times2
=
2^4
=
16
`}
                                />

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{16}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 차집합이 공집합인 조건에서
                                    포함관계를 읽습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-X=\varnothing
\quad\Longrightarrow\quad
A\subset X
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 교집합의 결과를 이용하여
                                    <b> 반드시 포함할 원소와 반드시 제외할 원소</b>를
                                    구분합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
&1,\ 2,\ 4,\ 7,\ 9
&&:\text{ 반드시 포함}\\
&5
&&:\text{ 반드시 제외}\\
&3,\ 6,\ 8,\ 10
&&:\text{ 자유롭게 선택}
\end{aligned}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막으로 자유롭게 선택할 수 있는 원소의 수만 세면 됩니다.
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
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 }8\text{ 이하의 자연수}\}" />의
                            두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2\},
\qquad
B=\{2,4,6,8\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
X\cap A\ne\varnothing,
\qquad
X\cap B\ne\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 <InlineMath math="U" />의 부분집합{" "}
                            <InlineMath math="X" />의 개수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                조건은 두 교집합이 모두 공집합이 아니어야 한다는 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
X\cap A\ne\varnothing,
\qquad
X\cap B\ne\varnothing
`}
                            />

                            <p className="leading-8">
                                이런 경우에는 조건을 만족하는 집합을 직접 세는 것보다
                                <b> 조건을 만족하지 않는 경우를 전체에서 빼는 것</b>이
                                간단합니다.
                            </p>


                            {/* 전체 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    전체 집합 <InlineMath math="X" />의 개수
                                </p>

                                <p className="leading-8">
                                    전체집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8\}
`}
                                />

                                <p className="leading-8">
                                    로 원소가 8개이므로 부분집합{" "}
                                    <InlineMath math="X" />의 전체 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2^8=256
`}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                            </div>


                            {/* A와 만나지 않는 경우 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ① <InlineMath math="X\cap A=\varnothing" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A=\{1,2\}" />이므로{" "}
                                    <InlineMath math="X" />에는{" "}
                                    <InlineMath math="1,\ 2" />가 모두 들어갈 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 나머지 6개의 원소만 자유롭게 선택할 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2^6=64
`}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                            </div>


                            {/* B와 만나지 않는 경우 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ② <InlineMath math="X\cap B=\varnothing" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="B=\{2,4,6,8\}" />이므로{" "}
                                    <InlineMath math="X" />에는
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 4,\ 6,\ 8
`}
                                />

                                <p className="leading-8">
                                    이 모두 들어갈 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 나머지 4개의 원소만 자유롭게 선택할 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2^4=16
`}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                            </div>


                            {/* 두 경우의 중복 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 경우에 모두 포함되는 경우
                                </p>

                                <p className="leading-8">
                                    앞의 두 경우를 빼면{" "}
                                    <InlineMath math="X\cap A=\varnothing" />이면서 동시에{" "}
                                    <InlineMath math="X\cap B=\varnothing" />인 경우를
                                    두 번 빼게 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 경우 <InlineMath math="A\cup B" />의 원소가
                                    모두 <InlineMath math="X" />에 들어갈 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B=\{1,2,4,6,8\}
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="X" />에서 선택할 수 있는 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
3,\ 5,\ 7
`}
                                />

                                <p className="leading-8">
                                    의 3개이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2^3=8
`}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 8개는 두 번 빠졌으므로 다시 한 번 더해 주어야 합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 두 조건을 모두 만족하는 집합{" "}
                                <InlineMath math="X" />의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
256-64-16+8=184
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{184}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="X\cap A\ne\varnothing" />과 같이
                                    <b> 교집합이 공집합이 아닌 조건</b>은 직접 세기보다
                                    반대로 교집합이 공집합인 경우를 전체에서 빼는 것이
                                    편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
&X\cap A=\varnothing
&&:\quad 2^6\\
&X\cap B=\varnothing
&&:\quad 2^4\\
&X\cap A=\varnothing,\ X\cap B=\varnothing
&&:\quad 2^3
\end{aligned}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막 경우는 앞의 두 경우에 모두 들어 있어
                                    두 번 빠지므로 한 번 다시 더해 줍니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^8-2^6-2^4+2^3
=
184
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=
\left\{
x\mid x=\frac{4}{n},\ x\text{와 }n\text{은 자연수}
\right\},
`}
                        />

                        <BlockMath
                            math={String.raw`
B=
\left\{
x\mid x=\frac{12}{n},\ x\text{와 }n\text{은 자연수}
\right\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="A\cap X=\varnothing" />,{" "}
                            <InlineMath math="B\cup X=B" />를 만족시키는 집합{" "}
                            <InlineMath math="X" />의 개수는?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A,\ B" />를 구해 봅시다.
                            </p>


                            {/* A, B 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A,\ B" /> 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=\dfrac4n" />에서{" "}
                                    <InlineMath math="x,\ n" />이 모두 자연수가 되려면{" "}
                                    <InlineMath math="n" />은 4의 약수이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,4\}
`}
                                />

                                <p className="mt-4 leading-8">
                                    마찬가지로 <InlineMath math="x=\dfrac{12}{n}" />에서{" "}
                                    <InlineMath math="x,\ n" />이 모두 자연수가 되려면{" "}
                                    <InlineMath math="n" />은 12의 약수이어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{1,2,3,4,6,12\}
`}
                                />

                            </div>


                            <p className="leading-8">
                                이제 두 조건을 하나씩 해석해 봅시다.
                            </p>


                            {/* 첫 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    첫 번째 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap X=\varnothing
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />와{" "}
                                    <InlineMath math="X" />에는 공통인 원소가 없어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 집합 <InlineMath math="X" />에는{" "}
                                    <InlineMath math="A" />의 원소
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 2,\ 4
`}
                                />

                                <p className="leading-8">
                                    가 들어갈 수 없습니다.
                                </p>

                            </div>


                            {/* 두 번째 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 번째 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup X=B
`}
                                />

                                <p className="leading-8">
                                    합집합의 결과가 <InlineMath math="B" />이므로
                                    <b> 나온 집합인 B가 큰 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{X\subset B}
`}
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="X" />의 원소는 모두{" "}
                                    <InlineMath math="B" /> 안에서 선택해야 합니다.
                                </p>

                            </div>


                            {/* 두 조건 결합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 조건을 함께 생각하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="X" />의 원소는{" "}
                                    <InlineMath math="B" /> 안에서 선택해야 하지만,{" "}
                                    <InlineMath math="A" />의 원소는 선택할 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 선택할 수 있는 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
B-A
&=\{1,2,3,4,6,12\}-\{1,2,4\}\\
&=\{3,6,12\}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{X\subset\{3,6,12\}}
`}
                                />

                            </div>


                            {/* 개수 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="X" />의 개수
                                </p>

                                <p className="leading-8">
                                    원소 <InlineMath math="3,\ 6,\ 12" />는 각각{" "}
                                    <InlineMath math="X" />에 포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2
=
2^3
=
8
`}
                                />

                                <p className="leading-8">
                                    이때 아무 원소도 선택하지 않는 공집합도 포함됩니다.
                                </p>

                            </div>


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="B\cup X=B" />에서
                                    합집합의 결과인 <InlineMath math="B" />가 큰 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 또한{" "}
                                    <InlineMath math="A\cap X=\varnothing" />이므로{" "}
                                    <InlineMath math="A" />의 원소는{" "}
                                    <InlineMath math="X" />에 들어갈 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 두 조건을 합치면
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset B-A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 한 번에 정리할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\{3,6,12\}
\quad\Longrightarrow\quad
2^3=8
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
                            전체집합{" "}
                            <InlineMath math="U=\{1,2,3,4,5,6,7\}" />에 대하여
                            다음 조건을 만족시키는 <InlineMath math="U" />의 부분집합{" "}
                            <InlineMath math="A" />의 개수는?
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-4 text-gray-300">

                                <p>
                                    (가){" "}
                                    <InlineMath math="\{1,2\}\cap A\ne\varnothing" />
                                </p>

                                <p>
                                    (나){" "}
                                    <InlineMath math="\{3,4,5\}\cap A=\varnothing" />
                                </p>

                            </div>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                각 조건이 집합 <InlineMath math="A" />의 원소를
                                어떻게 제한하는지 살펴봅시다.
                            </p>


                            {/* 조건 가 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    조건 (가)
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1,2\}\cap A\ne\varnothing
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />에는{" "}
                                    <InlineMath math="1,\ 2" /> 중
                                    <b> 적어도 하나가 포함</b>되어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    가능한 경우는
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1\},\qquad
\{2\},\qquad
\{1,2\}
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="3" />가지입니다.
                                </p>

                            </div>


                            {/* 조건 나 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    조건 (나)
                                </p>

                                <BlockMath
                                    math={String.raw`
\{3,4,5\}\cap A=\varnothing
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />와{" "}
                                    <InlineMath math="\{3,4,5\}" />에는
                                    공통인 원소가 없어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
3,\ 4,\ 5
`}
                                />

                                <p className="leading-8">
                                    는 모두 집합 <InlineMath math="A" />에
                                    <b> 포함될 수 없습니다.</b>
                                </p>

                            </div>


                            {/* 나머지 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    나머지 원소
                                </p>

                                <p className="leading-8">
                                    전체집합의 원소 중 아직 아무 조건도 받지 않은 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
6,\ 7
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    두 원소는 각각 집합 <InlineMath math="A" />에
                                    포함하거나 포함하지 않을 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2=4
`}
                                />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>


                            {/* 경우의 수 */}
                            <p className="leading-8">
                                따라서 세 부분에서 가능한 경우의 수를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
3\times1\times4=12
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    교집합이 공집합이 아니면
                                    <b> 공통인 원소가 적어도 하나 있어야 하고</b>,
                                    교집합이 공집합이면
                                    <b> 공통인 원소가 하나도 없어야 합니다.</b>
                                </p>

                                <div className="mt-4 space-y-3">

                                    <p className="leading-8 text-gray-300">
                                        • <InlineMath math="1,\ 2" /> → 적어도 하나 포함{" "}
                                        → <InlineMath math="3" />가지
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        • <InlineMath math="3,\ 4,\ 5" /> → 모두 제외{" "}
                                        → <InlineMath math="1" />가지
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        • <InlineMath math="6,\ 7" /> → 자유롭게 선택{" "}
                                        → <InlineMath math="4" />가지
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
3\times1\times4=12
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
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
(A\cap B^C)\cup(A^C\cap B)=\varnothing
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, 다음 중 항상 옳은 것은?
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>
                                ① <InlineMath math="A\cap B=\varnothing" />
                            </p>
                            <p>
                                ② <InlineMath math="A\cup B=\varnothing" />
                            </p>
                            <p>
                                ③ <InlineMath math="A=B" />
                            </p>
                            <p>
                                ④ <InlineMath math="A\subset B,\ A\ne B" />
                            </p>
                            <p>
                                ⑤ <InlineMath math="B\subset A,\ A\ne B" />
                            </p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                주어진 식에서 두 교집합이 나타내는 영역을
                                차집합으로 바꾸어 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B^C=A-B
`}
                            />

                            <BlockMath
                                math={String.raw`
A^C\cap B=B-A
`}
                            />

                            <p className="leading-8">
                                따라서 주어진 조건은
                            </p>

                            <BlockMath
                                math={String.raw`
(A-B)\cup(B-A)=\varnothing
`}
                            />

                            <p className="leading-8">
                                이 됩니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    합집합이 공집합
                                </p>

                                <p className="leading-8">
                                    두 집합을 합했는데 공집합이 되려면
                                    두 집합 모두 원소가 없어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing,
\qquad
B-A=\varnothing
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    첫 번째 차집합
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing
`}
                                />

                                <p className="leading-8">
                                    차집합의 결과가 공집합이면
                                    <b> 앞의 집합이 작은 집합</b>이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 번째 차집합
                                </p>

                                <BlockMath
                                    math={String.raw`
B-A=\varnothing
`}
                                />

                                <p className="leading-8">
                                    마찬가지로 앞의 집합이 작은 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\subset A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 두 집합은 서로가 서로의 부분집합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\subset B,
\qquad
B\subset A
`}
                            />

                            <p className="leading-8">
                                두 집합이 서로 같은 원소를 가지므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{A=B}
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{③}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A\cap B^C" />는{" "}
                                    <InlineMath math="A-B" />,{" "}
                                    <InlineMath math="A^C\cap B" />는{" "}
                                    <InlineMath math="B-A" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B)\cup(B-A)=\varnothing
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 두 차집합이 모두 공집합입니다.
                                    각각을 포함관계로 해석하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\varnothing
\quad\Longrightarrow\quad
A\subset B
`}
                                />

                                <BlockMath
                                    math={String.raw`
B-A=\varnothing
\quad\Longrightarrow\quad
B\subset A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되어 두 집합은 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B,\ B\subset A
\quad\Longrightarrow\quad
A=B
`}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 17 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 17
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
\{(A\cap B)\cup(A-B)\}\cap B=A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, 보기에서 옳은 것만을 있는 대로 고른 것은?
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-4 text-gray-300">

                                <p>
                                    ㄱ. <InlineMath math="B\subset A" />
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="B^C-A^C=\varnothing" />
                                </p>

                                <p>
                                    ㄷ. <InlineMath math="B\cup A^C=U" />
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">
                            <p>① ㄱ</p>
                            <p>② ㄴ</p>
                            <p>③ ㄱ, ㄷ</p>
                            <p>④ ㄴ, ㄷ</p>
                            <p>⑤ ㄱ, ㄴ, ㄷ</p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 중괄호 안의 집합을 생각해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cap B)\cup(A-B)
`}
                            />

                            <p className="leading-8">
                                집합 <InlineMath math="A" />는{" "}
                                <InlineMath math="A\cap B" />인 부분과{" "}
                                <InlineMath math="A-B" />인 부분으로 나누어지므로
                            </p>

                            <BlockMath
                                math={String.raw`
(A\cap B)\cup(A-B)=A
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    포함관계 찾기
                                </p>

                                <p className="leading-8">
                                    따라서 주어진 식은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=A
`}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    교집합의 결과가 <InlineMath math="A" />이므로
                                    <b> 나온 집합 A가 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{A\subset B}
`}
                                />

                            </div>


                            <p className="leading-8">
                                이제 각 보기를 확인해 봅시다.
                            </p>


                            {/* ㄱ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄱ. <InlineMath math="B\subset A" />
                                </p>

                                <p className="leading-8">
                                    주어진 식에서 알 수 있는 포함관계는
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="B\subset A" />가
                                    항상 성립한다고 할 수 없으므로 ㄱ은 옳지 않습니다.
                                </p>

                            </div>


                            {/* ㄴ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄴ. <InlineMath math="B^C-A^C=\varnothing" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\subset B" />에서
                                    여집합을 취하면 포함관계가 반대로 바뀝니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B
\quad\Longrightarrow\quad
B^C\subset A^C
`}
                                />

                                <p className="leading-8">
                                    따라서 작은 집합 <InlineMath math="B^C" />에서
                                    큰 집합 <InlineMath math="A^C" />를 빼면
                                    아무것도 남지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B^C-A^C=\varnothing
`}
                                />

                                <p className="leading-8">
                                    따라서 ㄴ은 옳습니다.
                                </p>

                            </div>


                            {/* ㄷ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ㄷ. <InlineMath math="B\cup A^C=U" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\subset B" />이면
                                    집합 <InlineMath math="A" />의 바깥에 있는 부분은{" "}
                                    <InlineMath math="A^C" />에 들어 있고,
                                    집합 <InlineMath math="A" />의 원소는 모두{" "}
                                    <InlineMath math="B" />에 들어 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="B" />와{" "}
                                    <InlineMath math="A^C" />를 합하면
                                    전체집합이 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup A^C=U
`}
                                />

                                <p className="leading-8">
                                    따라서 ㄷ은 옳습니다.
                                </p>

                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{④}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 복잡해 보이는 집합을 하나의 집합으로 정리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cap B)\cup(A-B)=A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 주어진 식은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되고, 교집합의 결과가{" "}
                                    <InlineMath math="A" />이므로
                                    <b> A가 작은 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=A
\quad\Longrightarrow\quad
A\subset B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    포함관계를 찾은 뒤에는 여집합을 취하면
                                    포함관계가 반대로 바뀐다는 성질을 이용하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B
\quad\Longrightarrow\quad
B^C\subset A^C
`}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 18 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 18
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 자연수}\}" />의 부분집합{" "}
                            <InlineMath math="A" />는 원소의 개수가 4이고
                            모든 원소의 합이 <InlineMath math="21" />이다.
                            상수 <InlineMath math="k" />에 대하여 집합
                        </p>

                        <BlockMath
                            math={String.raw`
B=\{x+k\mid x\in A\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 다음 조건을 만족시킨다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-4 text-gray-300">

                                <p>
                                    (가){" "}
                                    <InlineMath math="A\cap B=\{4,6\}" />
                                </p>

                                <p>
                                    (나){" "}
                                    <InlineMath math="A\cup B" />의 모든 원소의 합이{" "}
                                    <InlineMath math="40" />이다.
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />의 모든 원소의 곱은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 조건 (나)를 이용하여{" "}
                                <InlineMath math="k" />의 값을 구해 봅시다.
                            </p>


                            {/* B의 모든 원소의 합 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />의 모든 원소의 합
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 원소는 4개이고
                                    모든 원소의 합은 <InlineMath math="21" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="B" />는{" "}
                                    <InlineMath math="A" />의 각 원소에{" "}
                                    <InlineMath math="k" />를 더해서 만든 집합이므로,
                                    4개의 원소에 각각 <InlineMath math="k" />가 더해집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B\text{의 모든 원소의 합}
=
21+4k
`}
                                />

                            </div>


                            {/* 합집합의 모든 원소의 합 */}
                            <p className="leading-8">
                                한편
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\{4,6\}
`}
                            />

                            <p className="leading-8">
                                이므로 집합 <InlineMath math="A" />의 모든 원소와
                                집합 <InlineMath math="B" />의 모든 원소를 더하면,
                                공통인 원소 <InlineMath math="4,\ 6" />이
                                각각 두 번씩 더해집니다.
                            </p>

                            <p className="leading-8">
                                따라서 합집합 <InlineMath math="A\cup B" />의
                                모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
21+(21+4k)-(4+6)=40
`}
                            />

                            <BlockMath
                                math={String.raw`
32+4k=40
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{k=2}
`}
                            />


                            {/* B의 의미 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />의 의미
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x+2\mid x\in A\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉, 집합 <InlineMath math="A" />의 각 원소에{" "}
                                    <InlineMath math="2" />를 더한 값들이
                                    집합 <InlineMath math="B" />의 원소가 됩니다.
                                </p>

                            </div>


                            {/* 교집합으로 A의 원소 찾기 */}
                            <p className="leading-8">
                                이제 조건
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\{4,6\}
`}
                            />

                            <p className="leading-8">
                                을 이용하여 집합 <InlineMath math="A" />의 원소를 찾아봅시다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    원소 <InlineMath math="4" />를 이용하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="4\in A\cap B" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in A,
\qquad
4\in B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 <InlineMath math="B" />의 원소는{" "}
                                    <InlineMath math="A" />의 원소에 2를 더한 것이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in B
\quad\Longrightarrow\quad
2\in A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    원소 <InlineMath math="6" />을 이용하기
                                </p>

                                <p className="leading-8">
                                    마찬가지로{" "}
                                    <InlineMath math="6\in A\cap B" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
6\in A,
\qquad
6\in B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="6\in B" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
6\in B
\quad\Longrightarrow\quad
4\in A
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />에는
                            </p>

                            <BlockMath
                                math={String.raw`
2,\ 4,\ 6
`}
                            />

                            <p className="leading-8">
                                이 반드시 포함됩니다.
                            </p>


                            {/* 나머지 한 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    나머지 한 원소
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 원소는 모두 4개이고
                                    모든 원소의 합이 <InlineMath math="21" />이므로
                                    나머지 한 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
21-(2+4+6)=9
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A=\{2,4,6,9\}
}
`}
                                />

                            </div>


                            {/* 조건 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    조건 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{4,6,8,11\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
=
\{2,4,6,9\}\cap\{4,6,8,11\}
=
\{4,6\}
`}
                                />

                                <p className="leading-8">
                                    으로 조건 (가)를 만족합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 합집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B
=
\{2,4,6,8,9,11\}
`}
                                />

                                <p className="leading-8">
                                    이므로 모든 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
2+4+6+8+9+11=40
`}
                                />

                                <p className="leading-8">
                                    으로 조건 (나)도 만족합니다.
                                </p>

                            </div>


                            {/* 모든 원소의 곱 */}
                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />의 모든 원소의 곱은
                            </p>

                            <BlockMath
                                math={String.raw`
2\times4\times6\times9
=
432
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{432}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 집합 <InlineMath math="B" />는
                                    집합 <InlineMath math="A" />의 4개의 원소에
                                    각각 <InlineMath math="k" />를 더하여 만든 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\text{의 모든 원소의 합}=21+4k
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                    합집합의 모든 원소의 합을 구할 때에는{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />의
                                    모든 원소의 합을 더한 뒤,
                                    교집합의 원소가 두 번 더해진 만큼 한 번 빼 줍니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
21+(21+4k)-(4+6)=40
\quad\Longrightarrow\quad
k=2
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 <InlineMath math="4,\ 6" />이
                                    교집합의 원소라는 것은 두 원소가 모두{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />에
                                    들어 있다는 뜻입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in B\Rightarrow2\in A,
\qquad
6\in B\Rightarrow4\in A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 <InlineMath math="A" />의 원소를 차례로 결정한 뒤,
                                    마지막에는 구한 집합이 원래 두 조건을 모두 만족하는지
                                    확인합니다.
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

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 서로 포함관계가 있는 두 집합을 합집합하면
                            <b> 큰 집합</b>이 나온다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
\quad\Longrightarrow\quad
A\cup B=B
`}
                        />

                        <p>
                            • 서로 포함관계가 있는 두 집합을 교집합하면
                            <b> 작은 집합</b>이 나온다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
\quad\Longrightarrow\quad
A\cap B=A
`}
                        />

                        <p>
                            • 작은 집합에서 큰 집합을 빼면
                            <b> 공집합</b>이 된다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
\quad\Longrightarrow\quad
A-B=\varnothing
`}
                        />

                        <p>
                            • 합집합의 결과가 두 집합 중 하나이면
                            <b> 나온 집합이 큰 집합</b>이다.
                        </p>

                        <p>
                            • 교집합의 결과가 두 집합 중 하나이면
                            <b> 나온 집합이 작은 집합</b>이다.
                        </p>

                        <p>
                            • 차집합의 결과가 공집합이면
                            <b> 앞의 집합이 작은 집합</b>이다.
                        </p>

                        <p>
                            • 여집합을 취하면 <b>포함관계가 반대로 바뀐다.</b>
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
\quad\Longrightarrow\quad
B^C\subset A^C
`}
                        />

                    </div>

                </div>

            </section>

            {/* 2.9 방정식, 부등식의 해의 집합의 연산 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                {/* 제목 */}
                <h2 className="mb-6 text-3xl font-bold text-white">
                    2.9 방정식, 부등식의 해의 집합의 연산
                </h2>


                {/* 도입 */}
                <div className="space-y-4 text-gray-300">

                    <p className="leading-8">
                        방정식이나 부등식의 해도 하나의
                        <b className="text-white"> 집합</b>으로 생각할 수 있습니다.
                    </p>

                    <p className="leading-8">
                        따라서 두 방정식이나 부등식의 해의 집합이 주어지면
                        앞에서 배운 <InlineMath math="\cap,\ \cup,\ ^C" /> 등의
                        집합의 연산을 그대로 이용할 수 있습니다.
                    </p>

                </div>


                {/* 1. 방정식 */}
                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        1. 방정식의 해의 집합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        방정식의 해가 몇 개의 값으로 주어지는 경우에는
                        각 방정식의 해를 먼저 집합으로 나타낸 뒤
                        앞에서 배운 집합의 연산을 그대로 이용합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어 두 방정식의 해의 집합이
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,3,5\},
\qquad
B=\{3,5,7\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 합시다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 방정식을 <b className="text-white">모두 만족시키는 해</b>는
                            두 집합의 교집합이므로
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B=\{3,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 방정식 중 <b className="text-white">적어도 하나를 만족시키는 해</b>는
                            두 집합의 합집합이므로
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B=\{1,3,5,7\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                </div>

                {/* 2. 부등식 */}
                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        2. 부등식의 해의 집합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식의 해는 몇 개의 원소가 아니라
                        <b className="text-white"> 수직선 위의 범위</b>로 나타나는 경우가 많습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 부등식의 해의 집합을 연산할 때에는
                        수직선에서 각 범위가 어떻게 겹치는지를 생각하면 됩니다.
                    </p>


                    {/* 교집합 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-3 font-bold text-white">
                            교집합은 겹치는 부분
                        </p>

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x>-2\},
\qquad
B=\{x\mid x<3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이라면 두 범위가 동시에 성립하는 부분은{" "}
                            <InlineMath math="-2<x<3" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A\cap B
=
\{x\mid -2<x<3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            즉, 교집합은 두 부등식의 해에서
                            <b className="text-white"> 서로 겹치는 범위</b>입니다.
                        </p>

                    </div>


                    {/* 합집합 */}
                    <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-3 font-bold text-white">
                            합집합은 두 범위를 합한 것
                        </p>

                        <p className="leading-8 text-gray-300">
                            같은 두 집합에서{" "}
                            <InlineMath math="A\cup B" />는
                            두 범위를 모두 합한 것입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="x>-2" />인 범위와{" "}
                            <InlineMath math="x<3" />인 범위를 합하면
                            모든 실수가 포함되므로
                        </p>

                        <BlockMath
                            math={String.raw`
A\cup B=\mathbb{R}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                </div>


                {/* 3. 여집합 */}
                <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        3. 부등식의 해의 집합과 여집합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부등식의 해의 집합에서 여집합은
                        <b className="text-white"> 주어진 부등식을 만족하지 않는 범위</b>입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        즉, 부등식의 여집합을 구하는 것은
                        그 부등식의 <b className="text-white">부정</b>을 생각하는 것과 같습니다.
                    </p>


                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x>3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이라면 <InlineMath math="A^C" />는{" "}
                            <InlineMath math="x>3" />이 아닌 모든 실수의 집합입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
A^C
=
\{x\mid x\le3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            여기서 중요한 것은{" "}
                            <InlineMath math="x>3" />의 부정이{" "}
                            <InlineMath math="x<3" />이 아니라{" "}
                            <InlineMath math="x\le3" />이라는 것입니다.
                        </p>

                    </div>

                </div>


                {/* 부등식의 부정 */}
                <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <p className="mb-4 font-bold text-yellow-300">
                        부등식의 부정
                    </p>

                    <div className="grid gap-3 md:grid-cols-2">

                        <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">

                            <p className="mb-2 text-gray-400">
                                크다의 부정
                            </p>

                            <BlockMath
                                math={String.raw`
x>a
\quad\longrightarrow\quad
x\le a
`}
                            />

                            <p className="text-gray-300">
                                작거나 같다
                            </p>

                        </div>


                        <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">

                            <p className="mb-2 text-gray-400">
                                작다의 부정
                            </p>

                            <BlockMath
                                math={String.raw`
x<a
\quad\longrightarrow\quad
x\ge a
`}
                            />

                            <p className="text-gray-300">
                                크거나 같다
                            </p>

                        </div>


                        <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">

                            <p className="mb-2 text-gray-400">
                                크거나 같다의 부정
                            </p>

                            <BlockMath
                                math={String.raw`
x\ge a
\quad\longrightarrow\quad
x<a
`}
                            />

                            <p className="text-gray-300">
                                작다
                            </p>

                        </div>


                        <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">

                            <p className="mb-2 text-gray-400">
                                작거나 같다의 부정
                            </p>

                            <BlockMath
                                math={String.raw`
x\le a
\quad\longrightarrow\quad
x>a
`}
                            />

                            <p className="text-gray-300">
                                크다
                            </p>

                        </div>

                    </div>

                </div>

                {/* 직접 확인 */}
                <div className="mt-8">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        4. 수직선에서 집합의 연산 확인하기
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        아래에서 집합 <InlineMath math="A,\ B" />의 부등호를 바꾸고
                        원하는 집합의 연산을 선택해 보세요.
                        두 집합의 범위와 연산의 결과를 수직선에서 비교할 수 있습니다.
                    </p>

                    <InequalitySetExplorer />

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2\ge k^2\},
\qquad
B=\{x\mid |x-3|<5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합 <InlineMath math="A,\ B" />가 서로소가 되도록 하는
                            자연수 <InlineMath math="k" />의 최솟값은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 집합을 부등식의 해의 범위로 나타내 봅시다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2\ge k^2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le-k
\quad\text{또는}\quad
x\ge k
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=
\{x\mid x\le-k\text{ 또는 }x\ge k\}
`}
                                />

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />
                                </p>

                                <BlockMath
                                    math={String.raw`
|x-3|<5
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<x-3<5
`}
                                />

                                <BlockMath
                                    math={String.raw`
-2<x<8
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x\mid -2<x<8\}
`}
                                />

                            </div>


                            {/* 서로소 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    서로소가 되기 위한 조건
                                </p>

                                <p className="leading-8">
                                    두 집합이 서로소이려면 두 해의 범위가
                                    <b> 서로 겹치지 않아야 합니다.</b>
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />의 범위는
                                </p>

                                <BlockMath
                                    math={String.raw`
-2<x<8
`}
                                />

                                <p className="leading-8">
                                    이므로 집합 <InlineMath math="A" />의 오른쪽 범위{" "}
                                    <InlineMath math="x\ge k" />가{" "}
                                    <InlineMath math="B" />와 겹치지 않으려면
                                </p>

                                <BlockMath
                                    math={String.raw`
k\ge8
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이때 <InlineMath math="k\ge8" />이면
                                    왼쪽 범위 <InlineMath math="x\le-k" />도{" "}
                                    <InlineMath math="-2<x<8" />과 겹치지 않습니다.
                                </p>

                            </div>


                            {/* 경계 확인 */}
                            <p className="leading-8">
                                특히 <InlineMath math="k=8" />일 때
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid x\le-8\text{ 또는 }x\ge8\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{x\mid -2<x<8\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                                집합 <InlineMath math="B" />에는{" "}
                                <InlineMath math="8" />이 포함되지 않으므로 두 집합은
                                서로 겹치지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\varnothing
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    방정식이나 부등식으로 주어진 집합은 먼저
                                    <b> 해의 범위</b>를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A&:\quad x\le-k\text{ 또는 }x\ge k\\
B&:\quad -2<x<8
\end{aligned}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 집합이 서로소라는 것은
                                    <b> 두 범위가 겹치는 부분이 없다는 뜻</b>입니다.
                                    경계값의 등호 포함 여부까지 확인해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
\quad\Longrightarrow\quad
k\ge8
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
                            전체집합{" "}
                            <InlineMath math="U=\{x\mid x\text{는 }10\text{ 이하의 자연수}\}" />의
                            두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^3-8x^2+20x-16=0\},
\qquad
B=\{x\mid x^2-5x+4=0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합 <InlineMath math="A^C\cap B^C" />의
                            모든 원소의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                방정식의 해가 유한 개인 경우에는
                                먼저 각 방정식의 해를 구하여 집합의 원소로 나타냅니다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />
                                </p>

                                <p className="leading-8">
                                    방정식을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-8x^2+20x-16
=
(x-2)^2(x-4)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=2,\ 4
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,4\}
`}
                                />

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />
                                </p>

                                <p className="leading-8">
                                    방정식을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-5x+4
=
(x-1)(x-4)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=1,\ 4
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{1,4\}
`}
                                />

                            </div>


                            {/* 집합의 연산 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합의 연산
                                </p>

                                <p className="leading-8">
                                    구하려는 집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
`}
                                />

                                <p className="leading-8">
                                    입니다. 드모르간의 법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
=
(A\cup B)^C
`}
                                />

                                <p className="leading-8">
                                    이므로 먼저 <InlineMath math="A\cup B" />를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cup B
=
\{1,2,4\}
`}
                                />

                            </div>


                            <p className="leading-8">
                                전체집합은
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{1,2,3,4,5,6,7,8,9,10\}
`}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="\{1,2,4\}" />를 제외하면
                            </p>

                            <BlockMath
                                math={String.raw`
A^C\cap B^C
=
\{3,5,6,7,8,9,10\}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 원소의 합 */}
                            <p className="leading-8">
                                따라서 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
3+5+6+7+8+9+10=48
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{48}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    방정식의 해가 유한 개인 경우에는
                                    각 방정식을 먼저 풀어 <b>해를 집합의 원소로 나타낸 뒤</b>
                                    앞에서 배운 집합의 연산을 그대로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,4\},
\qquad
B=\{1,4\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 여집합의 교집합은 드모르간의 법칙을 이용하면
                                    합집합의 여집합으로 바꿀 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cap B^C
=
(A\cup B)^C
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
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2-x-6\le0\},
\qquad
B=\{x\mid x^2-(2a+1)x+a^2+a\le0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A\cap B=\varnothing" />이
                            성립하도록 하는 자연수 <InlineMath math="a" />의 최솟값은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 이차부등식의 해를 구하여
                                집합 <InlineMath math="A,\ B" />의 범위를 나타냅니다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-x-6\le0
`}
                                />

                                <p className="leading-8">
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x+2)(x-3)\le0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-2\le x\le3
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{x\mid -2\le x\le3\}
`}
                                />

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />
                                </p>

                                <p className="leading-8">
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
&x^2-(2a+1)x+a^2+a\\
&=(x-a)(x-a-1)
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-a)(x-a-1)\le0
`}
                                />

                                <p className="leading-8">
                                    두 근은 <InlineMath math="a,\ a+1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le x\le a+1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x\mid a\le x\le a+1\}
`}
                                />

                            </div>


                            {/* 서로소 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    두 집합이 서로소가 되도록 하기
                                </p>

                                <p className="leading-8">
                                    두 집합이 서로소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\varnothing
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    두 집합의 범위는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A&:\quad -2\le x\le3\\
B&:\quad a\le x\le a+1
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="a" />는 자연수이므로
                                    집합 <InlineMath math="B" />는{" "}
                                    <InlineMath math="A" />의 오른쪽에 위치해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    두 범위가 한 점에서도 겹치지 않으려면{" "}
                                    <InlineMath math="B" />의 왼쪽 끝점{" "}
                                    <InlineMath math="a" />가{" "}
                                    <InlineMath math="A" />의 오른쪽 끝점{" "}
                                    <InlineMath math="3" />보다 커야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a>3
`}
                                />

                            </div>


                            {/* 자연수 조건 */}
                            <p className="leading-8">
                                <InlineMath math="a" />는 자연수이므로{" "}
                                <InlineMath math="a>3" />을 만족하는 가장 작은 값은
                            </p>

                            <BlockMath
                                math={String.raw`
a=4
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 경계 확인 */}
                            <p className="leading-8">
                                실제로 <InlineMath math="a=4" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid -2\le x\le3\},
\qquad
B=\{x\mid 4\le x\le5\}
`}
                            />

                            <p className="leading-8">
                                이므로 두 범위는 서로 겹치지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\varnothing
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    부등식으로 주어진 두 집합이 서로소라는 것은
                                    <b> 두 부등식의 해의 범위가 서로 겹치지 않는다는 뜻</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A:\ [-2,3],
\qquad
B:\ [a,a+1]
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 문제에서는 <InlineMath math="a" />가 자연수이므로{" "}
                                    <InlineMath math="B" />가 <InlineMath math="A" />의
                                    오른쪽에 놓이는 경우만 생각하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a>3
\quad\Longrightarrow\quad
\boxed{a_{\min}=4}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    특히 양쪽 끝점에 모두 등호가 있으므로{" "}
                                    <InlineMath math="a=3" />이면 두 집합이{" "}
                                    <InlineMath math="3" />에서 만나 서로소가 아닙니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            실수 전체의 집합의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2-8x+15\le0\},
\qquad
B=\{x\mid x^2+(a-4)x-4a\le0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A-B=\{x\mid4<x\le5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 실수 <InlineMath math="a" />의 값의 범위는?
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                                <InlineMath math="\text{①}\quad a<-3" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                                <InlineMath math="\text{②}\quad a\le-3" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                                <InlineMath math="\text{③}\quad a>-3" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                                <InlineMath math="\text{④}\quad a\ge-3" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-3">
                                <InlineMath math="\text{⑤}\quad -3\le a\le4" />
                            </div>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 범위를 구합니다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-8x+15\le0
`}
                                />

                                <p className="leading-8">
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)(x-5)\le0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le x\le5
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{x\mid3\le x\le5\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* A-B 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    차집합의 의미를 이용하기
                                </p>

                                <p className="leading-8">
                                    문제에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B=\{x\mid4<x\le5\}
`}
                                />

                                <p className="leading-8">
                                    라고 하였습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="A" />는{" "}
                                    <InlineMath math="3\le x\le5" />인 모든 실수이고,
                                    여기에서 집합 <InlineMath math="B" />를 빼고 남은 부분이{" "}
                                    <InlineMath math="4<x\le5" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 집합 <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />에 포함되어 빠진 부분은
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le x\le4
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
=
\{x\mid3\le x\le4\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />를 나타내는 부등식의
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^2+(a-4)x-4a
&=(x-4)(x+a)
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로 경계가 되는 두 값은
                                </p>

                                <BlockMath
                                    math={String.raw`
4,\quad -a
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 조건 결정 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    겹치는 범위 맞추기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />가 겹치는 부분은 정확히
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le x\le4
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="B" />의 한 경계는{" "}
                                    <InlineMath math="4" />이므로,
                                    다른 경계인 <InlineMath math="-a" />가{" "}
                                    <InlineMath math="3" />보다 작거나 같으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-a\le3
`}
                                />

                                <p className="leading-8">
                                    양변에 <InlineMath math="-1" />을 곱하면
                                    부등호의 방향이 바뀌므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a\ge-3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 경계값 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    경계값 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=-3" />일 때
                                </p>

                                <BlockMath
                                    math={String.raw`
B
=
\{x\mid3\le x\le4\}
`}
                                />

                                <p className="leading-8">
                                    이므로{" "}
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />를 빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B
=
\{x\mid4<x\le5\}
`}
                                />

                                <p className="leading-8">
                                    가 되어 주어진 조건을 만족합니다.
                                    따라서 <InlineMath math="a=-3" />도 포함됩니다.
                                </p>

                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\text{④}\quad a\ge-3}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    차집합의 범위가 주어졌다면
                                    <b> 무엇이 남았는지</b>만 보지 말고,
                                    원래 집합에서 <b>어느 범위가 빠졌는지</b>를 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{x\mid3\le x\le5\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
A-B=\{x\mid4<x\le5\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="B" />와 겹쳐서 빠진 부분은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B
=
\{x\mid3\le x\le4\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 이후 <InlineMath math="B" />의 두 경계{" "}
                                    <InlineMath math="-a,\ 4" />를 이 범위와 비교합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-a\le3
\quad\Longrightarrow\quad
a\ge-3
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
                            세 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2-10x+25\ge0\},
`}
                        />

                        <BlockMath
                            math={String.raw`
B=\{x\mid x^2+ax+b<0\},
`}
                        />

                        <BlockMath
                            math={String.raw`
C=\{x\mid x^2-6x\ge0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
B\cup C=A,
\qquad
B\cap C=\{x\mid -3<x\le0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="a-b" />의 값을 구하시오.
                            (단, <InlineMath math="a,\ b" />는 상수이다.)
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 범위를 구해 봅시다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" />
                                </p>

                                <p className="leading-8">
                                    식을 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-10x+25
=
(x-5)^2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    모든 실수 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-5)^2\ge0
`}
                                />

                                <p className="leading-8">
                                    이므로 집합 <InlineMath math="A" />는
                                    실수 전체의 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{A=\mathbb R}
`}
                                />

                            </div>


                            {/* B ∪ C */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    합집합 조건
                                </p>

                                <p className="leading-8">
                                    문제에서
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup C=A
`}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="A=\mathbb R" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{B\cup C=\mathbb R}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉, 집합 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />의 범위를 합하면
                                    모든 실수를 빠짐없이 포함해야 합니다.
                                </p>

                            </div>


                            {/* 집합 C */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="C" />
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-6x\ge0
`}
                                />

                                <p className="leading-8">
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x(x-6)\ge0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le0
\quad\text{또는}\quad
x\ge6
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
C=
\{x\mid x\le0\text{ 또는 }x\ge6\}
`}
                                />

                            </div>


                            {/* B의 범위 찾기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" />의 범위 찾기
                                </p>

                                <p className="leading-8">
                                    교집합 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap C
=
\{x\mid -3<x\le0\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    집합 <InlineMath math="C" />에는{" "}
                                    <InlineMath math="x\le0" />인 범위가 들어 있으므로,
                                    집합 <InlineMath math="B" />의 왼쪽 경계는{" "}
                                    <InlineMath math="-3" />이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<x
`}
                                />

                                <p className="mt-3 leading-8">
                                    한편 <InlineMath math="B\cup C=\mathbb R" />이므로
                                    집합 <InlineMath math="C" />에 들어 있지 않은 범위
                                </p>

                                <BlockMath
                                    math={String.raw`
0<x<6
`}
                                />

                                <p className="leading-8">
                                    는 모두 집합 <InlineMath math="B" />에 들어 있어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 <InlineMath math="x\ge6" />은
                                    집합 <InlineMath math="C" />에 들어 있고,
                                    교집합에는 나타나지 않으므로
                                    집합 <InlineMath math="B" />의 오른쪽 경계는{" "}
                                    <InlineMath math="6" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
B=\{x\mid -3<x<6\}
}
`}
                                />

                            </div>


                            {/* 이차식 결정 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    <InlineMath math="a,\ b" />의 값 구하기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x\mid x^2+ax+b<0\}
`}
                                />

                                <p className="leading-8">
                                    이고 그 해의 범위가{" "}
                                    <InlineMath math="-3<x<6" />이므로,
                                    이차방정식의 두 근은
                                </p>

                                <BlockMath
                                    math={String.raw`
-3,\qquad6
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    최고차항의 계수가 <InlineMath math="1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^2+ax+b
&=(x+3)(x-6)\\
&=x^2-3x-18
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-3,
\qquad
b=-18
`}
                                />

                            </div>


                            {/* a-b */}
                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
a-b
=
-3-(-18)
=
15
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 <InlineMath math="A" />가 실수 전체의 집합임을
                                    확인하면 합집합 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cup C=\mathbb R
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 <InlineMath math="B\cap C" />로
                                    <b> 두 집합이 겹치는 범위</b>를 정하고,{" "}
                                    <InlineMath math="B\cup C=\mathbb R" />로
                                    <b> 빠지는 범위가 없도록 B의 나머지 범위</b>를 결정합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x\mid -3<x<6\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막으로 해의 양쪽 경계{" "}
                                    <InlineMath math="-3,\ 6" />을 이차방정식의 두 근으로
                                    이용하면 됩니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2-ax+8=0\},
\qquad
B=\{x\mid x^3-(b+1)x+b=0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="A\cap B=\{2\}" />일 때,
                            집합 <InlineMath math="A\cup B" />의 모든 원소의 합은?
                            <br />
                            (단, <InlineMath math="a,\ b" />는 상수이다.)
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                주어진 조건
                            </p>

                            <BlockMath
                                math={String.raw`
A\cap B=\{2\}
`}
                            />

                            <p className="leading-8">
                                에서 <InlineMath math="2" />는
                                집합 <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />에 모두 속합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
2\in A,
\qquad
2\in B
`}
                            />


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="A" /> 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="2\in A" />이므로{" "}
                                    <InlineMath math="x=2" />는 방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-ax+8=0
`}
                                />

                                <p className="leading-8">
                                    의 해입니다. <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2^2-2a+8=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
12-2a=0
\quad\Longrightarrow\quad
a=6
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="A" />를 정하는 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-6x+8=0
`}
                                />

                                <p className="leading-8">
                                    이고, 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-2)(x-4)=0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{A=\{2,4\}}
`}
                                />

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    집합 <InlineMath math="B" /> 구하기
                                </p>

                                <p className="leading-8">
                                    마찬가지로 <InlineMath math="2\in B" />이므로{" "}
                                    <InlineMath math="x=2" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-(b+1)x+b=0
`}
                                />

                                <p className="leading-8">
                                    에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2^3-2(b+1)+b=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
8-2b-2+b=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
6-b=0
\quad\Longrightarrow\quad
b=6
`}
                                />

                                <p className="leading-8">
                                    따라서 집합 <InlineMath math="B" />를 정하는 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-7x+6=0
`}
                                />

                                <p className="leading-8">
                                    입니다. 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^3-7x+6
=
(x-1)(x-2)(x+3)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{B=\{-3,1,2\}}
`}
                                />

                            </div>


                            {/* 조건 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    교집합 확인
                                </p>

                                <p className="leading-8">
                                    구한 두 집합은
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,4\},
\qquad
B=\{-3,1,2\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{2\}
`}
                                />

                                <p className="leading-8">
                                    가 되어 문제의 조건을 정확히 만족합니다.
                                </p>

                            </div>


                            {/* 합집합 */}
                            <p className="leading-8">
                                따라서 합집합은
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
=
\{-3,1,2,4\}
`}
                            />

                            <p className="leading-8">
                                이고, 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-3+1+2+4=4
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    교집합의 원소는 두 집합에
                                    <b> 모두 속하는 원소</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\{2\}
\quad\Longrightarrow\quad
2\in A,\ 2\in B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 <InlineMath math="x=2" />를 두 방정식에 각각 대입하여{" "}
                                    <InlineMath math="a,\ b" />를 먼저 결정한 뒤,
                                    각 방정식의 모든 해를 구하여
                                    집합 <InlineMath math="A,\ B" />를 완성합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,4\},
\qquad
B=\{-3,1,2\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막으로 실제 교집합이 정확히{" "}
                                    <InlineMath math="\{2\}" />인지 확인한 뒤
                                    합집합의 원소를 구합니다.
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
                        <p className="leading-8">
                            실수 전체의 집합의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2+2ax+a^2-a-5<0\},
`}
                        />

                        <BlockMath
                            math={String.raw`
B=\{x\mid x^2-2ax+2a^2+a-6<0\}
`}
                        />

                        <p className="leading-8">
                            에 대하여 옳은 것만을 다음에서 있는 대로 고른 것은?
                            단, <InlineMath math="a" />는 실수이다.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                            <div>
                                <InlineMath
                                    math="\text{ㄱ. }A=\emptyset,\ B\ne\emptyset\text{인 }a\text{가 존재한다.}"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{ㄴ. }A\ne\emptyset,\ B=\emptyset\text{인 }a\text{가 존재한다.}"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{ㄷ. }A\ne\emptyset,\ B\ne\emptyset\text{인 }a\text{가 존재한다.}"
                                />
                            </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ② ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ③ ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                ⑤ ㄱ, ㄴ, ㄷ
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* A */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 집합 <InlineMath math="A" />가 공집합이 아닌 조건을 구합니다.
                                </p>

                                <p className="leading-8">
                                    부등식의 왼쪽을 완전제곱식으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^2+2ax+a^2-a-5
&=(x+a)^2-a-5
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="(x+a)^2" />의 최솟값은 0이므로
                                    이 이차식의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
-a-5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    부등식의 해가 존재하려면 이 최솟값이 0보다
                                    작아야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-a-5<0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a>-5
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\ne\emptyset
\iff
a>-5
`}
                                />

                                <BlockMath
                                    math={String.raw`
A=\emptyset
\iff
a\le-5
`}
                                />
                            </div>


                            {/* B */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 집합 <InlineMath math="B" />가 공집합이 아닌 조건을 구합니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로 완전제곱식으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x^2-2ax+2a^2+a-6
&=(x-a)^2+a^2+a-6
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    이 이차식의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+a-6
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 부등식의 해가 존재하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+a-6<0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a+3)(a-2)<0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<a<2
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
B\ne\emptyset
\iff
-3<a<2
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\emptyset
\iff
a\le-3\text{ 또는 }a\ge2
`}
                                />
                            </div>


                            {/* ㄱ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ ㄱ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A=\emptyset" />이려면
                                </p>

                                <BlockMath math="a\le-5" />

                                <p className="leading-8">
                                    이어야 하고, <InlineMath math="B\ne\emptyset" />이려면
                                </p>

                                <BlockMath math="-3<a<2" />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    두 조건을 동시에 만족시키는{" "}
                                    <InlineMath math="a" />는 존재하지 않습니다.
                                </p>

                                <p className="mt-3 font-bold text-red-300">
                                    따라서 ㄱ은 옳지 않습니다.
                                </p>
                            </div>


                            {/* ㄴ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ ㄴ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\ne\emptyset" />이면서{" "}
                                    <InlineMath math="B=\emptyset" />이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
a>-5
`}
                                />

                                <p className="leading-8">
                                    이고 동시에
                                </p>

                                <BlockMath
                                    math={String.raw`
a\le-3\text{ 또는 }a\ge2
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    예를 들어 <InlineMath math="a=-4" />이면
                                    두 조건을 모두 만족합니다.
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄴ은 옳습니다.
                                </p>
                            </div>


                            {/* ㄷ */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ ㄷ을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A\ne\emptyset" />이면서{" "}
                                    <InlineMath math="B\ne\emptyset" />이 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
a>-5,\qquad -3<a<2
`}
                                />

                                <p className="leading-8">
                                    이어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-3<a<2
`}
                                />

                                <p className="leading-8">
                                    를 만족하는 <InlineMath math="a" />가 존재합니다.
                                </p>

                                <p className="mt-3 font-bold text-green-300">
                                    따라서 ㄷ은 옳습니다.
                                </p>
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-3 font-bold text-green-300">
                                    정답
                                </p>

                                <p className="text-center text-lg font-bold text-white">
                                    ④ ㄴ, ㄷ
                                </p>
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />, <InlineMath math="B" />가
                                    공집합인지 아닌지는 각각의 이차부등식이{" "}
                                    <span className="font-bold text-white">
                                        실수해를 가지는지
                                    </span>
                                    를 확인하면 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    최고차항의 계수가 양수인 이차식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x)<0
`}
                                />

                                <p className="leading-8">
                                    의 해가 존재하려면{" "}
                                    <span className="font-bold text-yellow-300">
                                        이차식의 최솟값이 0보다 작아야 합니다.
                                    </span>
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
A\ne\emptyset
&\iff a>-5\\
B\ne\emptyset
&\iff -3<a<2
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    마지막에는 각 조건의 범위가 서로 겹치는지
                                    확인하면 됩니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>

                {/* 핵심 정리 */}
                <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <p className="mb-3 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </p>

                    <div className="space-y-3 text-gray-300">

                        <p className="leading-8">
                            방정식의 해가 유한 개인 경우에는
                            <b className="text-white"> 해를 집합으로 나타낸 뒤 집합의 연산을 그대로 적용</b>합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
A\cap B
&:\ \text{두 조건을 모두 만족하는 해}\\[4pt]
A\cup B
&:\ \text{두 조건 중 적어도 하나를 만족하는 해}
\end{aligned}
`}
                        />

                    </div>

                    <p className="mt-3 leading-8 text-gray-300">
                        부등식에서는 식만 보고 계산하기보다
                        <b className="text-white"> 수직선에 각 범위를 나타내어 생각</b>하면
                        쉽게 판단할 수 있습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
\boxed{
\begin{aligned}
\text{교집합} &:\ \text{겹치는 범위}\\[4pt]
\text{합집합} &:\ \text{두 범위를 합한 범위}
\end{aligned}
}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        <b className="text-white">부등식의 여집합</b>은 원래 조건을 만족하지 않는 범위이므로
                        <b className="text-white"> 부등호의 방향뿐 아니라 등호의 포함 여부도 함께 바뀝니다.</b>
                    </p>

                    <BlockMath
                        math={String.raw`
\boxed{
\begin{aligned}
> &\quad\longleftrightarrow\quad \le\\[4pt]
< &\quad\longleftrightarrow\quad \ge
\end{aligned}
}
`}
                    />

                    <p className="leading-8 text-gray-300">
                        따라서{" "}
                        <InlineMath math=">" />의 부정은 <InlineMath math="\le" />,{" "}
                        <InlineMath math="<" />의 부정은 <InlineMath math="\ge" />이고,
                        반대로 <InlineMath math="\ge" />의 부정은 <InlineMath math="<" />,{" "}
                        <InlineMath math="\le" />의 부정은 <InlineMath math=">" />입니다.
                    </p>

                </div>

            </section>

            {/* 2.10 약수와 배수의 집합의 연산 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-2xl font-bold text-white">
                    2.10 약수와 배수의 집합의 연산
                </h2>

                <div className="space-y-8 text-gray-300">

                    {/* 1. 약수의 집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            약수의 집합
                        </h3>

                        <p className="leading-8">
                            자연수 <InlineMath math="a" />의 약수 전체를 원소로 하는
                            집합을 생각할 수 있습니다.
                        </p>

                        <p className="mt-3 leading-8">
                            예를 들어 12의 약수의 집합을{" "}
                            <InlineMath math="A" />, 18의 약수의 집합을{" "}
                            <InlineMath math="B" />라 하면
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
A=\{1,2,3,4,6,12\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{1,2,3,6,9,18\}
`}
                            />
                        </div>
                    </div>


                    {/* 2. 약수집합의 교집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            약수집합의 교집합
                        </h3>

                        <p className="leading-8">
                            두 약수집합의 교집합은 두 수의{" "}
                            <span className="font-bold text-yellow-300">
                                공약수
                            </span>
                            들의 집합입니다.
                        </p>

                        <p className="mt-3 leading-8">
                            12와 18의 공약수는 1, 2, 3, 6이므로
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
A\cap B=\{1,2,3,6\}
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            그런데 12와 18의 최대공약수는 6이고,
                            1, 2, 3, 6은 모두 6의 약수입니다.
                        </p>

                        <p className="mt-3 leading-8">
                            따라서 두 수의 약수집합의 교집합은{" "}
                            <span className="font-bold text-blue-300">
                                두 수의 최대공약수의 약수집합
                            </span>
                            과 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-4 text-center font-bold text-yellow-300">
                                약수집합의 교집합
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{두 수의 약수집합의 교집합}
=
\text{최대공약수의 약수집합}
}
`}
                            />
                        </div>
                    </div>


                    {/* 3. 약수집합의 합집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            약수집합의 합집합
                        </h3>

                        <p className="leading-8">
                            두 약수집합의 합집합을 구할 때는 먼저{" "}
                            <span className="font-bold text-yellow-300">
                                두 수가 약수관계인지
                            </span>
                            확인합니다.
                        </p>

                        <p className="mt-5 leading-8">
                            예를 들어 6의 약수의 집합을{" "}
                            <InlineMath math="A" />, 12의 약수의 집합을{" "}
                            <InlineMath math="B" />라 하면
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
A=\{1,2,3,6\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{1,2,3,4,6,12\}
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            6은 12의 약수이므로 6의 모든 약수는
                            12의 약수이기도 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
A\subset B
`}
                            />

                            <BlockMath
                                math={String.raw`
A\cup B=B
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            따라서 두 수가 약수관계에 있으면 한 약수집합이
                            다른 약수집합에 포함되므로 합집합도 하나의
                            약수집합으로 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="text-center font-bold text-yellow-300">
                                두 수가 약수관계이면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{약수집합의 합집합}
=
\text{두 집합 중 큰 약수집합}
}
`}
                            />
                        </div>


                        {/* 약수관계가 없는 경우 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="mb-4 font-bold text-white">
                                두 수가 약수관계가 아닌 경우
                            </p>

                            <p className="leading-8">
                                12와 18처럼 어느 한 수가 다른 수의 약수가
                                아니라면 두 약수집합은 서로 포함되지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,3,4,6,12\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{1,2,3,6,9,18\}
`}
                            />

                            <p className="mt-4 leading-8">
                                이 경우에는 각 집합의 원소를 나열하여
                                합집합을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A\cup B
=
\{1,2,3,4,6,9,12,18\}
`}
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                약수집합의 합집합을 구할 때
                            </p>

                            <p className="leading-8">
                                먼저 두 수의{" "}
                                <span className="font-bold text-white">
                                    약수관계
                                </span>
                                를 확인합니다. 약수관계이면 포함관계를 이용하고,
                                약수관계가 아니면 원소를 나열하여 구합니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 배수의 집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            배수의 집합
                        </h3>

                        <p className="leading-8">
                            자연수 <InlineMath math="a" />의 배수 전체를 원소로 하는
                            집합도 생각할 수 있습니다.
                        </p>

                        <p className="mt-3 leading-8">
                            예를 들어 3의 배수의 집합을{" "}
                            <InlineMath math="A" />, 4의 배수의 집합을{" "}
                            <InlineMath math="B" />라 하면
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
A=\{3,6,9,12,15,18,\ldots\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{4,8,12,16,20,24,\ldots\}
`}
                            />
                        </div>
                    </div>


                    {/* 5. 배수집합의 교집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            배수집합의 교집합
                        </h3>

                        <p className="leading-8">
                            두 배수집합의 교집합은 두 수의{" "}
                            <span className="font-bold text-yellow-300">
                                공배수
                            </span>
                            들의 집합입니다.
                        </p>

                        <p className="mt-3 leading-8">
                            3과 4의 공배수는 12, 24, 36, ... 이므로
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
A\cap B
=
\{12,24,36,48,\ldots\}
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            3과 4의 최소공배수는 12이고,
                            모든 공배수는 12의 배수입니다.
                        </p>

                        <p className="mt-3 leading-8">
                            따라서 두 수의 배수집합의 교집합은{" "}
                            <span className="font-bold text-blue-300">
                                두 수의 최소공배수의 배수집합
                            </span>
                            과 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-4 text-center font-bold text-yellow-300">
                                배수집합의 교집합
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{두 수의 배수집합의 교집합}
=
\text{최소공배수의 배수집합}
}
`}
                            />
                        </div>
                    </div>


                    {/* 6. 배수집합의 합집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            배수집합의 합집합
                        </h3>

                        <p className="leading-8">
                            두 배수집합의 합집합에서도 먼저{" "}
                            <span className="font-bold text-yellow-300">
                                두 수가 배수관계인지
                            </span>
                            확인합니다.
                        </p>

                        <p className="mt-5 leading-8">
                            예를 들어 3의 배수의 집합을{" "}
                            <InlineMath math="A" />, 6의 배수의 집합을{" "}
                            <InlineMath math="B" />라 하면
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
A=\{3,6,9,12,15,18,\ldots\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{6,12,18,24,30,36,\ldots\}
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            6은 3의 배수이므로 6의 모든 배수는
                            3의 배수이기도 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
B\subset A
`}
                            />

                            <BlockMath
                                math={String.raw`
A\cup B=A
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            따라서 두 수가 배수관계에 있으면 한 배수집합이
                            다른 배수집합에 포함되므로 합집합도 하나의
                            배수집합으로 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="text-center font-bold text-yellow-300">
                                두 수가 배수관계이면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{배수집합의 합집합}
=
\text{두 집합 중 큰 배수집합}
}
`}
                            />
                        </div>


                        {/* 배수관계가 없는 경우 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="mb-4 font-bold text-white">
                                두 수가 배수관계가 아닌 경우
                            </p>

                            <p className="leading-8">
                                3과 4처럼 어느 한 수가 다른 수의 배수가
                                아니라면 두 배수집합은 서로 포함되지 않습니다.
                            </p>

                            <p className="mt-3 leading-8">
                                이 경우 합집합을 하나의 자연수의 배수집합으로
                                나타낼 수 없습니다.
                            </p>

                            <p className="mt-3 leading-8">
                                따라서 문제에서 주어진 범위 안의 배수를
                                나열하여 합집합을 구합니다.
                            </p>

                            <div className="mt-5 rounded-lg bg-black/20 p-4">
                                <p className="mb-3 text-center text-gray-400">
                                    예를 들어 20 이하의 자연수에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{3,6,9,12,15,18\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{4,8,12,16,20\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
A\cup B
=
\{3,4,6,8,9,12,15,16,18,20\}
`}
                                />
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                배수집합의 합집합을 구할 때
                            </p>

                            <p className="leading-8">
                                먼저 두 수의{" "}
                                <span className="font-bold text-white">
                                    배수관계
                                </span>
                                를 확인합니다. 배수관계이면 포함관계를 이용하고,
                                배수관계가 아니면 주어진 범위에서 원소를
                                나열하여 구합니다.
                            </p>
                        </div>
                    </div>


                    {/* 7. 약수집합과 배수집합의 포함관계 비교 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            약수집합과 배수집합의 포함관계
                        </h3>

                        <p className="leading-8">
                            약수관계에 있는 두 자연수의 약수집합과 배수집합은
                            포함되는 방향이 서로 반대입니다.
                        </p>

                        <p className="mt-4 leading-8">
                            예를 들어 6은 12의 약수입니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 text-center font-bold text-green-300">
                                    약수집합
                                </p>

                                <BlockMath
                                    math={String.raw`
D_6=\{1,2,3,6\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
D_{12}=\{1,2,3,4,6,12\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
D_6\subset D_{12}
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    큰 수의 약수집합이 더 크다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-4 text-center font-bold text-blue-300">
                                    배수집합
                                </p>

                                <BlockMath
                                    math={String.raw`
M_6=\{6,12,18,24,\ldots\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
M_{12}=\{12,24,36,48,\ldots\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
M_{12}\subset M_6
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    작은 수의 배수집합이 더 크다.
                                </p>
                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
6\text{은 }12\text{의 약수}
`}
                            />

                            <BlockMath
                                math={String.raw`
D_6\subset D_{12}
\qquad
M_{12}\subset M_6
`}
                            />

                            <p className="mt-4 text-center font-bold text-yellow-300">
                                약수집합과 배수집합은 포함관계의 방향이 반대이다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8">
                                집합{" "}
                                <InlineMath math="A_m=\{x\mid x\text{는 자연수 }m\text{의 약수}\}" />
                                에 대하여 집합
                            </p>

                            <BlockMath
                                math={String.raw`
A_{12}\cap A_{24}\cap A_{30}
`}
                            />

                            <p className="leading-8">
                                의 모든 원소의 합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 교집합을 해석합니다.
                                    </p>

                                    <p className="leading-8">
                                        약수집합의 교집합은 주어진 수들의{" "}
                                        <span className="font-bold text-yellow-300">
                                            최대공약수의 약수집합
                                        </span>
                                        입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
12,\ 24,\ 30\text{의 최대공약수}=6
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 최대공약수 6의 약수를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{12}\cap A_{24}\cap A_{30}
=
A_6
=
\{1,2,3,6\}
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 모든 원소를 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1+2+3+6=12
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="12" />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{약수집합의 교집합}
=
\text{최대공약수의 약수집합}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        각 집합의 원소를 모두 나열한 뒤 교집합을
                                        찾는 것보다 먼저 최대공약수를 구하면
                                        빠르게 해결할 수 있습니다.
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
                            <p className="leading-8">
                                전체집합{" "}
                                <InlineMath math="U=\{x\mid x\text{는 }100\text{ 이하의 자연수}\}" />
                                의 부분집합 <InlineMath math="A_k" />를
                            </p>

                            <BlockMath
                                math={String.raw`
A_k=\{x\mid x\text{는 자연수 }k\text{의 배수}\}
`}
                            />

                            <p className="leading-8">
                                라 할 때, 집합
                            </p>

                            <BlockMath
                                math={String.raw`
(A_3\cap A_2)\cap(A_8\cup A_{16})
`}
                            />

                            <p className="leading-8">
                                의 원소의 개수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="A_3\cap A_2" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        배수집합의 교집합은 두 수의{" "}
                                        <span className="font-bold text-yellow-300">
                                            최소공배수의 배수집합
                                        </span>
                                        입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3,\ 2\text{의 최소공배수}=6
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A_3\cap A_2=A_6
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="A_8\cup A_{16}" />을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        16은 8의 배수이므로 16의 모든 배수는
                                        8의 배수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{16}\subset A_8
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 합집합은 더 큰 배수집합인{" "}
                                        <InlineMath math="A_8" />이 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_8\cup A_{16}=A_8
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 남은 교집합을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A_3\cap A_2)\cap(A_8\cup A_{16})
=
A_6\cap A_8
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        6과 8의 최소공배수는 24이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_6\cap A_8=A_{24}
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 100 이하의 24의 배수를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{24}=\{24,48,72,96\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 원소의 개수는 4입니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="4" />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
A_3\cap A_2&=A_6\\
A_8\cup A_{16}&=A_8\\
A_6\cap A_8&=A_{24}
\end{aligned}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        배수집합의{" "}
                                        <span className="font-bold text-white">
                                            교집합에서는 최소공배수
                                        </span>
                                        를 이용하고,{" "}
                                        <span className="font-bold text-white">
                                            합집합에서는 먼저 두 수의 배수관계
                                        </span>
                                        를 확인합니다.
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
                            <p className="leading-8">
                                전체집합{" "}
                                <InlineMath math="U=\{x\mid x\text{는 }60\text{ 이하의 자연수}\}" />
                                의 부분집합
                            </p>

                            <BlockMath
                                math={String.raw`
A_k=\{x\mid x\text{는 }k\text{의 배수},\ k\text{는 자연수}\}
`}
                            />

                            <p className="leading-8">
                                에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
A_6\cap X=X,\qquad
(A_3\cap A_4)\cup X=X
`}
                            />

                            <p className="leading-8">
                                를 만족시키는 집합 <InlineMath math="X" />의 개수를
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 첫 번째 조건을 부분집합 관계로 바꿉니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_6\cap X=X
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        교집합의 결과가 <InlineMath math="X" />이므로{" "}
                                        <InlineMath math="X" />가 더 작은 집합입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
X\subset A_6
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="A_3\cap A_4" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        배수집합의 교집합은 두 수의{" "}
                                        <span className="font-bold text-yellow-300">
                                            최소공배수의 배수집합
                                        </span>
                                        입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3,\ 4\text{의 최소공배수}=12
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A_3\cap A_4=A_{12}
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 두 번째 조건을 부분집합 관계로 바꿉니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A_3\cap A_4)\cup X=X
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        합집합의 결과가 <InlineMath math="X" />이므로{" "}
                                        <InlineMath math="A_3\cap A_4" />는{" "}
                                        <InlineMath math="X" />의 부분집합입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{12}\subset X
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 두 조건을 함께 정리합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{12}\subset X\subset A_6
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        60 이하의 6의 배수와 12의 배수를 나열하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_6=
\{6,12,18,24,30,36,42,48,54,60\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A_{12}=
\{12,24,36,48,60\}
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ 가능한 집합 <InlineMath math="X" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A_{12}" />의 원소는 반드시{" "}
                                        <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        나머지
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_6-A_{12}
=
\{6,18,30,42,54\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        의 5개 원소는 각각{" "}
                                        <span className="font-bold text-yellow-300">
                                            포함하거나 포함하지 않을 수 있습니다.
                                        </span>
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^5=32
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="32" />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap X=X
\quad\Longrightarrow\quad
X\subset A
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A\cup X=X
\quad\Longrightarrow\quad
A\subset X
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        먼저 집합의 연산을{" "}
                                        <span className="font-bold text-white">
                                            부분집합 관계
                                        </span>
                                        로 바꾼 뒤,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{12}\subset X\subset A_6
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        에서 반드시 포함되는 원소와 선택할 수 있는
                                        원소를 구분하면 됩니다.
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
                            <p className="leading-8">
                                자연수 <InlineMath math="n" />에 대하여 집합{" "}
                                <InlineMath math="\{x\mid x\text{는 }100\text{ 이하의 자연수}\}" />의
                                두 부분집합 <InlineMath math="A_n" />,{" "}
                                <InlineMath math="B_n" />이
                            </p>

                            <BlockMath
                                math={String.raw`
A_n=\{x\mid x\text{는 }n\text{과 서로소인 자연수}\},
`}
                            />

                            <BlockMath
                                math={String.raw`
B_n=\{x\mid x\text{는 }n\text{의 배수인 자연수}\}
`}
                            />

                            <p className="leading-8">
                                일 때, 다음 중 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div>
                                    <InlineMath math="\text{ㄱ. }\ A_3\cap A_4=A_6" />
                                </div>

                                <div>
                                    <InlineMath math="\text{ㄴ. }\ B_4\cap(B_3\cup B_6)=B_{12}" />
                                </div>

                                <div>
                                    <InlineMath math="\text{ㄷ. }\ n(B_3\cup B_4)=50" />
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ① ㄱ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ② ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ③ ㄱ, ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ④ ㄴ, ㄷ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
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
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ. <InlineMath math="A_3\cap A_4=A_6" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A_3" />의 원소는 3과 서로소이고,{" "}
                                        <InlineMath math="A_4" />의 원소는 4와 서로소인
                                        자연수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="A_3\cap A_4" />의 원소는
                                        3의 배수도 아니고 2의 배수도 아닌 자연수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이는 6과 서로소인 자연수의 조건과 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_3\cap A_4=A_6
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄱ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ. <InlineMath math="B_4\cap(B_3\cup B_6)=B_{12}" />
                                    </p>

                                    <p className="leading-8">
                                        6은 3의 배수이므로 6의 모든 배수는
                                        3의 배수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B_6\subset B_3
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B_3\cup B_6=B_3
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그러므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B_4\cap(B_3\cup B_6)
=
B_4\cap B_3
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        배수집합의 교집합은 두 수의 최소공배수의
                                        배수집합이고,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3,\ 4\text{의 최소공배수}=12
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B_4\cap B_3=B_{12}
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄴ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ. <InlineMath math="n(B_3\cup B_4)=50" />
                                    </p>

                                    <p className="leading-8">
                                        100 이하의 3의 배수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3,6,9,\ldots,99
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로 33개이고, 4의 배수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,8,12,\ldots,100
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로 25개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이때 3의 배수이면서 4의 배수인 수는
                                        12의 배수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
12,24,36,\ldots,96
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        는 8개이므로 두 집합의 원소를 단순히 더하면
                                        이 8개를 두 번 세게 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B_3\cup B_4)
=
33+25-8
=
50
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄷ은 옳습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ⑤ ㄱ, ㄴ, ㄷ
                                    </p>
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <div className="space-y-3 leading-8">
                                        <p>
                                            ㄱ은{" "}
                                            <span className="font-bold text-white">
                                                서로소의 조건
                                            </span>
                                            을 해석합니다.
                                        </p>

                                        <p>
                                            ㄴ은 배수집합의{" "}
                                            <span className="font-bold text-white">
                                                포함관계와 교집합
                                            </span>
                                            을 이용합니다.
                                        </p>

                                        <p>
                                            ㄷ은 합집합에서 공통으로 세어진{" "}
                                            <span className="font-bold text-white">
                                                공배수를 한 번 빼줍니다.
                                            </span>
                                        </p>
                                    </div>

                                    <BlockMath
                                        math={String.raw`
33+25-8=50
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8">
                                두 집합 <InlineMath math="A_m" />,{" "}
                                <InlineMath math="B_n" />을
                            </p>

                            <BlockMath
                                math={String.raw`
A_m=\{x\mid x\text{는 }m\text{의 배수},\ m\text{은 자연수}\},
`}
                            />

                            <BlockMath
                                math={String.raw`
B_n=\{x\mid x\text{는 }n\text{의 약수},\ n\text{은 자연수}\}
`}
                            />

                            <p className="leading-8">
                                라 할 때,{" "}
                                <InlineMath math="A_p\subset(A_4\cap A_6)" />을
                                만족시키는 자연수 <InlineMath math="p" />의 최솟값과
                            </p>

                            <BlockMath
                                math={String.raw`
B_q\subset(B_{16}\cap B_{24})
`}
                            />

                            <p className="leading-8">
                                을 만족시키는 자연수 <InlineMath math="q" />의 최댓값의
                                합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* p */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="A_4\cap A_6" />을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A_m" />은{" "}
                                        <span className="font-bold text-yellow-300">
                                            배수의 집합
                                        </span>
                                        이므로 교집합은 두 수의 최소공배수의
                                        배수집합입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 6\text{의 최소공배수}=12
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A_4\cap A_6=A_{12}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 주어진 조건은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_p\subset A_{12}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        입니다.
                                    </p>
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 자연수 <InlineMath math="p" />의 최솟값을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        배수집합에서는{" "}
                                        <span className="font-bold text-yellow-300">
                                            수가 클수록 배수집합은 작아질 수 있습니다.
                                        </span>
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="A_p" />의 모든 원소가{" "}
                                        <InlineMath math="A_{12}" />에 들어가려면{" "}
                                        <InlineMath math="p" />가 12의 배수이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p=12,24,36,\ldots
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="p" />의 최솟값은
                                    </p>

                                    <BlockMath math="12" />
                                </div>


                                {/* q */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ <InlineMath math="B_{16}\cap B_{24}" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="B_n" />은{" "}
                                        <span className="font-bold text-yellow-300">
                                            약수의 집합
                                        </span>
                                        이므로 교집합은 두 수의 최대공약수의
                                        약수집합입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
16,\ 24\text{의 최대공약수}=8
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
B_{16}\cap B_{24}=B_8
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 주어진 조건은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B_q\subset B_8
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        입니다.
                                    </p>
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 자연수 <InlineMath math="q" />의 최댓값을 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="B_q" />의 모든 원소가{" "}
                                        <InlineMath math="B_8" />에 들어가려면{" "}
                                        <InlineMath math="q" />는 8의 약수이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q=1,2,4,8
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="q" />의 최댓값은
                                    </p>

                                    <BlockMath math="8" />
                                </div>


                                {/* 계산 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ 두 값을 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
12+8=20
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="20" />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <div className="space-y-3">
                                        <BlockMath
                                            math={String.raw`
A_4\cap A_6=A_{12}
`}
                                        />

                                        <BlockMath
                                            math={String.raw`
A_p\subset A_{12}
\quad\Longrightarrow\quad
p\text{는 }12\text{의 배수}
`}
                                        />

                                        <BlockMath
                                            math={String.raw`
B_{16}\cap B_{24}=B_8
`}
                                        />

                                        <BlockMath
                                            math={String.raw`
B_q\subset B_8
\quad\Longrightarrow\quad
q\text{는 }8\text{의 약수}
`}
                                        />
                                    </div>

                                    <p className="mt-4 leading-8">
                                        <span className="font-bold text-white">
                                            배수집합과 약수집합은 포함관계의 방향이 반대
                                        </span>
                                        라는 점에 주의합니다.
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
                            <p className="leading-8">
                                100 이하의 자연수 <InlineMath math="k" />에 대하여 집합{" "}
                                <InlineMath math="\{x\mid x\text{는 }100\text{ 이하의 자연수}\}" />의
                                부분집합 <InlineMath math="A_k" />가
                            </p>

                            <BlockMath
                                math={String.raw`
A_k=\{x\mid x\text{는 }k\text{의 배수}\}
`}
                            />

                            <p className="leading-8">
                                일 때, 옳은 것만을 다음에서 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div>
                                    <InlineMath math="\text{ㄱ. }\ n(A_3\cup A_5)=45" />
                                </div>

                                <div>
                                    <InlineMath math="\text{ㄴ. }\ A_4\cap(A_6\cup A_{12})=A_{12}" />
                                </div>

                                <div>
                                    <InlineMath math="\text{ㄷ. }\ A_2\cap A_n=A_{2n}\text{을 만족시키는 100 이하의 자연수 }n\text{의 개수는 }50\text{이다.}" />
                                </div>
                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ① ㄱ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ② ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ③ ㄷ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ④ ㄱ, ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center">
                                    ⑤ ㄴ, ㄷ
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* ㄱ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ. <InlineMath math="n(A_3\cup A_5)=45" />
                                    </p>

                                    <p className="leading-8">
                                        100 이하의 3의 배수는 33개이고,
                                        5의 배수는 20개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이때 두 집합에 모두 들어 있는 수는
                                        3과 5의 최소공배수인 15의 배수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
15,30,45,60,75,90
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        공통으로 들어 있는 6개를 두 번 세었으므로
                                        한 번 빼주면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A_3\cup A_5)
=
33+20-6
=
47
`}
                                    />

                                    <p className="mt-3 font-bold text-red-300">
                                        따라서 ㄱ은 옳지 않습니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.{" "}
                                        <InlineMath math="A_4\cap(A_6\cup A_{12})=A_{12}" />
                                    </p>

                                    <p className="leading-8">
                                        12는 6의 배수이므로 12의 배수는 모두
                                        6의 배수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{12}\subset A_6
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_6\cup A_{12}=A_6
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_4\cap(A_6\cup A_{12})
=
A_4\cap A_6
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        배수집합의 교집합은 최소공배수의 배수집합이고,
                                        4와 6의 최소공배수는 12이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_4\cap A_6=A_{12}
`}
                                    />

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄴ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.{" "}
                                        <InlineMath math="A_2\cap A_n=A_{2n}" />
                                    </p>

                                    <p className="leading-8">
                                        배수집합의 교집합은 두 수의 최소공배수의
                                        배수집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_2\cap A_n
=
A_{\text{2와 }n\text{의 최소공배수}}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="n" />이 홀수이면 2와{" "}
                                        <InlineMath math="n" />은 서로소이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{2와 }n\text{의 최소공배수}=2n
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_2\cap A_n=A_{2n}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이 성립합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        반대로 <InlineMath math="n" />이 짝수이면{" "}
                                        <InlineMath math="n" /> 자체가 2의 배수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_n\subset A_2
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_2\cap A_n=A_n
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이 되어 <InlineMath math="A_{2n}" />과 같지 않습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        결국 조건을 만족시키는 <InlineMath math="n" />은
                                        100 이하의 홀수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,3,5,\ldots,99
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그 개수는 50개입니다.
                                    </p>

                                    <p className="mt-3 font-bold text-green-300">
                                        따라서 ㄷ은 옳습니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-3 font-bold text-green-300">
                                        정답
                                    </p>

                                    <p className="text-center text-lg font-bold text-white">
                                        ⑤ ㄴ, ㄷ
                                    </p>
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        배수집합의 연산에서는 먼저{" "}
                                        <span className="font-bold text-white">
                                            배수관계와 최소공배수
                                        </span>
                                        를 확인합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_a\cap A_b
=
A_{\text{a와 b의 최소공배수}}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        특히 <InlineMath math="A_2\cap A_n=A_{2n}" />이
                                        되려면 2와 <InlineMath math="n" />의 최소공배수가{" "}
                                        <InlineMath math="2n" />이어야 하므로{" "}
                                        <InlineMath math="n" />이 홀수여야 합니다.
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
                            <p className="leading-8">
                                두 자연수 <InlineMath math="a,\ b" />{" "}
                                <InlineMath math="(b\le40)" />에 대하여 전체집합
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{x\mid x\text{는 }40\text{ 이하의 자연수}\}
`}
                            />

                            <p className="leading-8">
                                의 두 부분집합 <InlineMath math="A" />,{" "}
                                <InlineMath math="B" />를
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid x\text{는 }a\text{의 배수},\ x\in U\},
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{x\mid x\text{는 }b\text{의 약수},\ x\in U\}
`}
                            />

                            <p className="leading-8">
                                라 할 때, 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div>
                                    <InlineMath math="\text{(가) }\{5,10\}\subset A\cap B" />
                                </div>

                                <div>
                                    <InlineMath math="\text{(나) }n(B-A)=3" />
                                </div>
                            </div>

                            <p className="mt-5 leading-8">
                                집합 <InlineMath math="A-B" />의 모든 원소의 합을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 조건 (가)에서 <InlineMath math="a" />를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{5,10\}\subset A\cap B
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        5와 10은 모두 <InlineMath math="A" />의
                                        원소입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="A" />는{" "}
                                        <InlineMath math="a" />의 배수의 집합이므로
                                        5와 10이 모두 <InlineMath math="a" />의
                                        배수이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="a" />는 5와 10의
                                        공약수입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=1\text{ 또는 }5
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 조건 (가)에서 <InlineMath math="b" />의
                                        후보를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        5와 10은 모두 <InlineMath math="B" />의
                                        원소입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="B" />는{" "}
                                        <InlineMath math="b" />의 약수의 집합이므로
                                        5와 10이 모두 <InlineMath math="b" />의
                                        약수이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="b" />는 5와 10의
                                        공배수, 즉 10의 배수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="b\le40" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
b=10,\ 20,\ 30,\ 40
`}
                                    />
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 조건 (나)를 이용하여 <InlineMath math="a" />를
                                        결정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B-A)=3
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        만약 <InlineMath math="a=1" />이면 모든 자연수는
                                        1의 배수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=U
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        가 됩니다. 따라서 <InlineMath math="B\subset A" />이고
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B-A=\emptyset
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로 조건 (나)를 만족하지 않습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math="a=5" />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="b" />를 결정합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a=5" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{5,10,15,20,25,30,35,40\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이제 <InlineMath math="b=10,20,30,40" />을
                                        차례로 확인합니다.
                                    </p>

                                    <div className="mt-5 overflow-x-auto">
                                        <table className="w-full min-w-[620px] border-collapse text-center">
                                            <thead>
                                                <tr className="border-b border-white/15 text-white">
                                                    <th className="p-3">
                                                        <InlineMath math="b" />
                                                    </th>
                                                    <th className="p-3">
                                                        <InlineMath math="B" />
                                                    </th>
                                                    <th className="p-3">
                                                        <InlineMath math="B-A" />
                                                    </th>
                                                    <th className="p-3">
                                                        <InlineMath math="n(B-A)" />
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody className="text-gray-300">
                                                <tr className="border-b border-white/10">
                                                    <td className="p-3">10</td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,5,10\}" />
                                                    </td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2\}" />
                                                    </td>
                                                    <td className="p-3">2</td>
                                                </tr>

                                                <tr className="border-b border-white/10 bg-green-500/5">
                                                    <td className="p-3 font-bold text-green-300">
                                                        20
                                                    </td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,4,5,10,20\}" />
                                                    </td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,4\}" />
                                                    </td>
                                                    <td className="p-3 font-bold text-green-300">
                                                        3
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-white/10">
                                                    <td className="p-3">30</td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,3,5,6,10,15,30\}" />
                                                    </td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,3,6\}" />
                                                    </td>
                                                    <td className="p-3">4</td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">40</td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,4,5,8,10,20,40\}" />
                                                    </td>
                                                    <td className="p-3">
                                                        <InlineMath math="\{1,2,4,8\}" />
                                                    </td>
                                                    <td className="p-3">4</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="mt-5 leading-8">
                                        <InlineMath math="n(B-A)=3" />을 만족시키는 것은
                                    </p>

                                    <BlockMath math="b=20" />
                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ <InlineMath math="A-B" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="b=20" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{1,2,4,5,10,20\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
A-B
&=\{5,10,15,20,25,30,35,40\}\\
&\quad-\{1,2,4,5,10,20\}\\
&=\{15,25,30,35,40\}
\end{aligned}
`}
                                    />
                                </div>


                                {/* 6 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑥ 모든 원소를 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
15+25+30+35+40=145
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="145" />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{5,10\}\subset A\cap B" />에서
                                        5와 10은{" "}
                                        <span className="font-bold text-white">
                                            동시에 <InlineMath math="A" />와{" "}
                                            <InlineMath math="B" />에 속합니다.
                                        </span>
                                    </p>

                                    <div className="mt-4 space-y-3">
                                        <BlockMath
                                            math={String.raw`
5,10\in A
\quad\Longrightarrow\quad
a\text{는 }5,10\text{의 공약수}
`}
                                        />

                                        <BlockMath
                                            math={String.raw`
5,10\in B
\quad\Longrightarrow\quad
b\text{는 }5,10\text{의 공배수}
`}
                                        />
                                    </div>

                                    <p className="mt-4 leading-8">
                                        그다음 <InlineMath math="n(B-A)=3" />을 이용하여
                                        후보를 하나씩 확인하면 <InlineMath math="a=5" />,{" "}
                                        <InlineMath math="b=20" />을 결정할 수 있습니다.
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
                            <p className="leading-8">
                                1보다 큰 자연수 <InlineMath math="k" />에 대하여 전체집합
                            </p>

                            <BlockMath
                                math={String.raw`
U=\{x\mid x\text{는 }2k\text{ 이하의 자연수}\}
`}
                            />

                            <p className="leading-8">
                                의 두 부분집합 <InlineMath math="A" />,{" "}
                                <InlineMath math="B" />를
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid x\text{는 }2k\text{ 이하의 짝수}\},
\qquad
B=\{x\mid x\text{는 }2k\text{의 약수}\}
`}
                            />

                            <p className="leading-8">
                                라 할 때,
                            </p>

                            <BlockMath
                                math={String.raw`
n(A)\times n((A\cup B)^C)=24
`}
                            />

                            <p className="leading-8">
                                를 만족시킨다. 이때
                            </p>

                            <BlockMath
                                math={String.raw`
k+n((A\cup B)^C)
`}
                            />

                            <p className="leading-8">
                                의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="n(A)" />를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A" />는 <InlineMath math="2k" />{" "}
                                        이하의 짝수의 집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{2,4,6,\ldots,2k\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath math="n(A)=k" />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="(A\cup B)^C" />를 해석합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A" />에는 모든 짝수가 들어 있으므로{" "}
                                        <InlineMath math="A\cup B" />에 속하지 않는 원소는
                                        반드시 홀수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그중 <InlineMath math="B" />에 들어 있는{" "}
                                        <InlineMath math="2k" />의 약수는 제외해야 하므로
                                    </p>

                                    <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-center">
                                        <InlineMath
                                            math="(A\cup B)^C"
                                        />
                                        <span className="mx-2">는</span>
                                        <span className="font-bold text-yellow-300">
                                            2k 이하의 홀수 중 2k의 약수가 아닌 수의 집합
                                        </span>
                                    </div>
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 주어진 조건에서 <InlineMath math="k" />의 후보를
                                        구합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="n(A)=k" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k\times n((A\cup B)^C)=24
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="k" />는 24의 약수입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="A^C" />는{" "}
                                        <InlineMath math="2k" /> 이하의 홀수 전체의 집합이므로
                                    </p>

                                    <BlockMath math="n(A^C)=k" />

                                    <p className="mt-3 leading-8">
                                        이고,
                                        <InlineMath math="(A\cup B)^C\subset A^C" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n((A\cup B)^C)\le k
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{24}{k}\le k
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        입니다. 1보다 큰 24의 약수 중 이 조건을 만족하는
                                        후보는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k=6,\ 8,\ 12,\ 24
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 후보를 확인합니다.
                                    </p>

                                    <p className="leading-8">
                                        먼저 <InlineMath math="k=6" />이면{" "}
                                        <InlineMath math="2k=12" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
U=\{1,2,3,\ldots,12\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A=\{2,4,6,8,10,12\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
B=\{1,2,3,4,6,12\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A\cup B)^C=\{5,7,9,11\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A)\times n((A\cup B)^C)
=
6\times4
=
24
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        주어진 조건을 만족합니다.
                                    </p>

                                    <div className="mt-5 overflow-x-auto">
                                        <table className="w-full min-w-[520px] border-collapse text-center">
                                            <thead>
                                                <tr className="border-b border-white/15 text-white">
                                                    <th className="p-3">
                                                        <InlineMath math="k" />
                                                    </th>
                                                    <th className="p-3">
                                                        <InlineMath math="n((A\cup B)^C)" />
                                                    </th>
                                                    <th className="p-3">
                                                        곱
                                                    </th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                <tr className="border-b border-white/10 bg-green-500/5">
                                                    <td className="p-3 font-bold text-green-300">
                                                        6
                                                    </td>
                                                    <td className="p-3">4</td>
                                                    <td className="p-3 font-bold text-green-300">
                                                        24
                                                    </td>
                                                </tr>

                                                <tr className="border-b border-white/10">
                                                    <td className="p-3">8</td>
                                                    <td className="p-3">7</td>
                                                    <td className="p-3">56</td>
                                                </tr>

                                                <tr className="border-b border-white/10">
                                                    <td className="p-3">12</td>
                                                    <td className="p-3">10</td>
                                                    <td className="p-3">120</td>
                                                </tr>

                                                <tr>
                                                    <td className="p-3">24</td>
                                                    <td className="p-3">22</td>
                                                    <td className="p-3">528</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <p className="mt-5 leading-8">
                                        따라서 조건을 만족시키는 값은
                                    </p>

                                    <BlockMath math="k=6" />
                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ 구하는 값을 계산합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
k+n((A\cup B)^C)
=
6+4
=
10
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="10" />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A" />가 모든 짝수의 집합이므로{" "}
                                        <InlineMath math="(A\cup B)^C" />의 원소는 먼저{" "}
                                        <span className="font-bold text-white">
                                            홀수
                                        </span>
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그중 <InlineMath math="2k" />의 약수인 홀수를
                                        제외하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A\cup B)^C
=
\{\text{홀수}\}
-
\{\text{2k의 홀수인 약수}\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="n(A)=k" />이므로 주어진
                                        곱이 24라는 조건을 이용하여{" "}
                                        <InlineMath math="k" />의 후보를 먼저 줄이는 것이
                                        중요합니다.
                                    </p>
                                </div>

                            </div>
                        </details>
                    </div>


                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                        <h3 className="mb-5 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-5">

                            <div className="rounded-lg bg-black/20 p-4">
                                <p className="mb-2 font-bold text-white">
                                    약수집합의 교집합
                                </p>

                                <p className="leading-8">
                                    두 수의{" "}
                                    <span className="font-bold text-yellow-200">
                                        최대공약수의 약수집합
                                    </span>
                                </p>
                            </div>

                            <div className="rounded-lg bg-black/20 p-4">
                                <p className="mb-2 font-bold text-white">
                                    약수집합의 합집합
                                </p>

                                <p className="leading-8">
                                    두 수가{" "}
                                    <span className="font-bold text-yellow-200">
                                        약수관계인지 먼저 확인
                                    </span>
                                    하고, 약수관계가 아니면 원소를 나열한다.
                                </p>
                            </div>

                            <div className="rounded-lg bg-black/20 p-4">
                                <p className="mb-2 font-bold text-white">
                                    배수집합의 교집합
                                </p>

                                <p className="leading-8">
                                    두 수의{" "}
                                    <span className="font-bold text-yellow-200">
                                        최소공배수의 배수집합
                                    </span>
                                </p>
                            </div>

                            <div className="rounded-lg bg-black/20 p-4">
                                <p className="mb-2 font-bold text-white">
                                    배수집합의 합집합
                                </p>

                                <p className="leading-8">
                                    두 수가{" "}
                                    <span className="font-bold text-yellow-200">
                                        배수관계인지 먼저 확인
                                    </span>
                                    하고, 배수관계가 아니면 주어진 범위에서
                                    원소를 나열한다.
                                </p>
                            </div>

                        </div>

                        <div className="mt-6 rounded-lg border border-yellow-400/20 bg-black/20 p-5 text-center">
                            <p className="font-bold text-yellow-200">
                                교집합은 최대공약수·최소공배수와 연결하고,
                                합집합은 먼저 포함관계를 확인한다.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2.11 집합의 연산과 원소의 개수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-2xl font-bold text-white">
                    2.11 집합의 연산과 원소의 개수
                </h2>

                <div className="space-y-8 text-gray-300">

                    {/* 1. 두 집합과 4개의 영역 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            두 집합과 원소의 개수
                        </h3>

                        <p className="leading-8">
                            전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                            <InlineMath math="A" />, <InlineMath math="B" />를
                            벤다이어그램으로 나타내면 전체집합은 다음{" "}
                            <span className="font-bold text-yellow-300">
                                4개의 영역
                            </span>
                            으로 나누어집니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded-lg bg-black/20 p-4 text-center">
                                    <InlineMath math="A\cap B^C=A-B" />
                                </div>

                                <div className="rounded-lg bg-black/20 p-4 text-center">
                                    <InlineMath math="A\cap B" />
                                </div>

                                <div className="rounded-lg bg-black/20 p-4 text-center">
                                    <InlineMath math="A^C\cap B=B-A" />
                                </div>

                                <div className="rounded-lg bg-black/20 p-4 text-center">
                                    <InlineMath math="A^C\cap B^C" />
                                </div>
                            </div>
                        </div>

                        <p className="mt-5 leading-8">
                            집합의 원소의 개수를 구하는 문제에서는
                            구하려는 집합이 벤다이어그램의{" "}
                            <span className="font-bold text-yellow-300">
                                몇 개의 영역으로 이루어져 있는지
                            </span>
                            를 생각하면 편리합니다.
                        </p>
                    </div>


                    {/* 2. 여집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            여집합의 원소의 개수
                        </h3>

                        <p className="leading-8">
                            <InlineMath math="A^C" />는 전체집합{" "}
                            <InlineMath math="U" />에서 집합{" "}
                            <InlineMath math="A" />를 제외한 부분입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
n(A^C)=n(U)-n(A)
`}
                            />
                        </div>

                        <p className="mt-4 text-center font-semibold text-blue-300">
                            여집합의 개수 = 전체의 개수 - 해당 집합의 개수
                        </p>
                    </div>


                    {/* 3. 합집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            합집합의 원소의 개수
                        </h3>

                        <p className="leading-8">
                            <InlineMath math="n(A)+n(B)" />를 계산하면{" "}
                            <InlineMath math="A\cap B" />에 속하는 원소는
                            두 번 세어집니다.
                        </p>

                        <p className="mt-3 leading-8">
                            따라서 두 번 센 교집합의 원소의 개수를 한 번
                            빼주어야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <BlockMath
                                math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                방으로 생각하면
                            </p>

                            <p className="text-center leading-8">
                                <span className="font-bold text-green-300">
                                    방 3개
                                </span>
                                {" = "}
                                방 2개 + 방 2개 - 겹치는 방 1개
                            </p>
                        </div>

                        <p className="mt-5 leading-8">
                            합집합은 다음과 같이 구할 수도 있습니다.
                        </p>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
n(A)+n(B-A)
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    방 3개 = 방 2개 + 방 1개
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
n(B)+n(A-B)
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    방 3개 = 방 2개 + 방 1개
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* 4. 교집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            교집합의 원소의 개수
                        </h3>

                        <p className="leading-8">
                            합집합의 원소의 개수에 대한 식을 이용하면
                            교집합의 원소의 개수도 구할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
n(A\cap B)
=
n(A)+n(B)-n(A\cup B)
`}
                            />
                        </div>

                        <p className="mt-4 text-center font-semibold text-yellow-300">
                            겹치는 방 1개 = 방 2개 + 방 2개 - 방 3개
                        </p>
                    </div>


                    {/* 5. 차집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            차집합의 원소의 개수
                        </h3>

                        <p className="leading-8">
                            차집합 <InlineMath math="A-B" />는{" "}
                            <InlineMath math="A" />에는 속하지만{" "}
                            <InlineMath math="B" />에는 속하지 않는 원소들의
                            집합입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <BlockMath
                                math={String.raw`
A-B=A\cap B^C
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A-B)=n(A\cap B^C)
`}
                            />
                        </div>

                        <p className="mt-5 leading-8">
                            차집합의 원소의 개수는 이미 알고 있는 영역을
                            이용하여 다음과 같이 구할 수 있습니다.
                        </p>

                        <div className="mt-4 grid gap-4 md:grid-cols-2">
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
n(A-B)
=
n(A)-n(A\cap B)
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    방 1개 = 방 2개 - 겹치는 방 1개
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                                <BlockMath
                                    math={String.raw`
n(A-B)
=
n(A\cup B)-n(B)
`}
                                />

                                <p className="mt-3 text-center text-sm text-gray-400">
                                    방 1개 = 방 3개 - 방 2개
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* 6. 두 집합 모두에 속하지 않는 원소 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            두 집합 모두에 속하지 않는 원소의 개수
                        </h3>

                        <p className="leading-8">
                            <InlineMath math="A^C\cap B^C" />는{" "}
                            <InlineMath math="A" />에도 속하지 않고{" "}
                            <InlineMath math="B" />에도 속하지 않는 원소들의
                            집합입니다.
                        </p>

                        <p className="mt-3 leading-8">
                            이는 합집합 <InlineMath math="A\cup B" />의
                            여집합과 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                            <BlockMath
                                math={String.raw`
A^C\cap B^C=(A\cup B)^C
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A^C\cap B^C)
=
n(U)-n(A\cup B)
`}
                            />
                        </div>

                        <p className="mt-4 text-center font-semibold text-purple-300">
                            방 1개 = 방 4개 - 방 3개
                        </p>
                    </div>

                    {/* 7. 세 집합 */}
                    <div>
                        <h3 className="mb-4 text-xl font-bold text-white">
                            집합이 세 개일 때
                        </h3>

                        <p className="leading-8">
                            집합이 세 개가 되면 겹치는 부분이 더 많아집니다.
                            이때는{" "}
                            <span className="font-bold text-yellow-300">
                                포함과 배제의 원리
                            </span>
                            를 이용합니다.
                        </p>

                        <p className="mt-4 leading-8">
                            먼저 <InlineMath math="n(A)+n(B)+n(C)" />를
                            계산하면 두 집합이 겹치는 부분은 두 번,
                            세 집합이 모두 겹치는 부분은 세 번 세어집니다.
                        </p>

                        <p className="mt-4 leading-8">
                            따라서 두 집합씩 겹치는 부분을 빼줍니다.
                            그런데 이 과정에서 세 집합이 모두 겹치는 부분은
                            모두 빠져버리므로 마지막에 한 번 다시 더해줍니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="space-y-4">
                                <div className="rounded-lg border border-green-500/30 bg-green-500/5 p-4">
                                    <p className="mb-2 font-bold text-green-300">
                                        ① 각각의 집합을 더한다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
+n(A)+n(B)+n(C)
`}
                                    />
                                </div>

                                <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4">
                                    <p className="mb-2 font-bold text-yellow-300">
                                        ② 두 집합씩 겹치는 부분을 뺀다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-n(A\cap B)-n(B\cap C)-n(C\cap A)
`}
                                    />
                                </div>

                                <div className="rounded-lg border border-red-500/30 bg-red-500/5 p-4">
                                    <p className="mb-2 font-bold text-red-300">
                                        ③ 세 집합이 모두 겹치는 부분을 다시 더한다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
+n(A\cap B\cap C)
`}
                                    />
                                </div>
                            </div>
                        </div>


                        {/* 포함과 배제 인터랙티브 컴포넌트 */}
                        <InclusionExclusionExplorer />


                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\begin{aligned}
n(A\cup B\cup C)
={}&n(A)+n(B)+n(C)\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)\\
&+n(A\cap B\cap C)
\end{aligned}
`}
                            />
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="mb-4 font-bold text-yellow-300">
                                포함과 배제의 원리
                            </p>

                            <div className="space-y-3 text-center">
                                <p>
                                    한 집합의 개수 →{" "}
                                    <span className="font-bold text-green-300">
                                        더하기
                                    </span>
                                </p>

                                <p>
                                    두 집합의 교집합의 개수 →{" "}
                                    <span className="font-bold text-yellow-300">
                                        빼기
                                    </span>
                                </p>

                                <p>
                                    세 집합의 교집합의 개수 →{" "}
                                    <span className="font-bold text-red-300">
                                        다시 더하기
                                    </span>
                                </p>
                            </div>

                            <BlockMath
                                math={String.raw`
+\quad-\quad+\quad-\quad\cdots
`}
                            />

                            <p className="mt-4 text-center leading-8 text-gray-300">
                                집합의 개수가 늘어나도{" "}
                                <span className="font-bold text-yellow-300">
                                    더하고, 빼고, 다시 더하는 과정
                                </span>
                                을 반복합니다.
                            </p>
                        </div>
                    </div>


                    {/* 최종 핵심 */}
                    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                        <h3 className="mb-4 text-xl font-bold text-green-300">
                            문제를 풀 때
                        </h3>

                        <p className="leading-8">
                            원소의 개수를 구하는 공식을 무조건 외우기보다
                            벤다이어그램에서{" "}
                            <span className="font-bold text-white">
                                구하려는 부분이 몇 개의 방인지
                            </span>
                            를 먼저 확인합니다.
                        </p>

                        <p className="mt-3 leading-8">
                            그다음 이미 원소의 개수를 알고 있는 집합들을
                            더하거나 빼서 그 방을 만들면 됩니다.
                        </p>

                        <div className="mt-5 rounded-lg bg-black/20 p-5 text-center">
                            <p className="text-lg font-bold text-green-200">
                                집합의 원소의 개수
                                <span className="mx-3 text-gray-500">→</span>
                                방의 개수
                                <span className="mx-3 text-gray-500">→</span>
                                더하기와 빼기
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8">
                                전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                                <InlineMath math="A" />, <InlineMath math="B" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
n(A^C\cap B)=10,\qquad
n(A\cap B)=3,\qquad
n(A\cup B)=20
`}
                            />

                            <p className="leading-8">
                                일 때, <InlineMath math="n(A-B)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 주어진 집합을 벤다이어그램의 영역으로 해석합니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A^C\cap B" />는{" "}
                                        <InlineMath math="A" />에는 속하지 않고{" "}
                                        <InlineMath math="B" />에만 속하는 영역이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A^C\cap B=B-A
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B-A)=10
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 합집합을 세 개의 방으로 나눕니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A\cup B" />는 다음 세 영역으로
                                        이루어져 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A-B,\qquad A\cap B,\qquad B-A
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 원소의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A-B)+n(A\cap B)+n(B-A)
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 주어진 값을 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
20=n(A-B)+3+10
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
n(A-B)=7
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="7" />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 집합의 합집합은{" "}
                                        <span className="font-bold text-white">
                                            세 개의 방
                                        </span>
                                        으로 이루어져 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cup B
=
(A-B)\cup(A\cap B)\cup(B-A)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서{" "}
                                        <span className="font-bold text-yellow-300">
                                            구하려는 방의 개수 = 전체 세 방의 개수 - 이미 알고 있는 두 방의 개수
                                        </span>
                                        로 생각하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A-B)=20-3-10=7
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
                            <p className="leading-8">
                                전체집합{" "}
                                <InlineMath math="U=\{x\mid x\text{는 }99\text{ 이하의 자연수}\}" />의
                                두 부분집합
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid x\text{는 }7\text{의 배수}\},
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{x\mid x\text{를 }5\text{로 나누었을 때의 나머지가 }3\text{인 자연수}\}
`}
                            />

                            <p className="leading-8">
                                에 대하여 <InlineMath math="n(A^C\cup B^C)" />의 값을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 드모르간 법칙을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A^C\cup B^C=(A\cap B)^C
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="A^C\cup B^C" />의
                                        원소의 개수를 직접 구하는 대신{" "}
                                        <InlineMath math="A\cap B" />의 원소의 개수를
                                        구하면 됩니다.
                                    </p>
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="A\cap B" />의 원소를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        먼저 99 이하의 7의 배수를 나열하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
7,14,21,28,35,42,49,56,63,70,77,84,91,98
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이 중 5로 나누었을 때 나머지가 3인 수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
28,\ 63,\ 98
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap B=\{28,63,98\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=3
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 여집합의 원소의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        전체집합 <InlineMath math="U" />에는 1부터 99까지
                                        모두 99개의 자연수가 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(U)=99
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n(A^C\cup B^C)
&=n((A\cap B)^C)\\
&=n(U)-n(A\cap B)\\
&=99-3\\
&=96
\end{aligned}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="96" />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        여집합의 합집합이 보이면 먼저{" "}
                                        <span className="font-bold text-white">
                                            드모르간 법칙
                                        </span>
                                        을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A^C\cup B^C=(A\cap B)^C
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 전체 99개에서{" "}
                                        <InlineMath math="A\cap B" />에 속하는 3개만
                                        빼면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
99-3=96
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
                            <p className="leading-8">
                                두 집합 <InlineMath math="A" />, <InlineMath math="B" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
n(A)=6,\qquad n(A-B)=4,\qquad n(B)=7
`}
                            />

                            <p className="leading-8">
                                일 때,
                            </p>

                            <BlockMath
                                math={String.raw`
(B-A)\subset X\subset B
`}
                            />

                            <p className="leading-8">
                                를 만족하는 집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="A\cap B" />의 원소의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A-B,\qquad A\cap B
`}
                                    />

                                    <p className="leading-8">
                                        의 두 영역으로 이루어져 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A)=n(A-B)+n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        주어진 값을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
6=4+n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=2
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 집합 <InlineMath math="B" />를 두 개의 방으로 나눕니다.
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="B" />는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=(B-A)\cup(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        로 이루어져 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="n(B)=7" />이고{" "}
                                        <InlineMath math="n(A\cap B)=2" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B-A)=7-2=5
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 집합 <InlineMath math="X" />의 조건을 해석합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(B-A)\subset X\subset B
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="B-A" />의 5개 원소는
                                        반드시 <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        나머지 <InlineMath math="A\cap B" />의 2개 원소는
                                        각각{" "}
                                        <span className="font-bold text-yellow-300">
                                            포함하거나 포함하지 않을 수 있습니다.
                                        </span>
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\underbrace{B-A}_{\text{반드시 포함}}
\qquad+\qquad
\underbrace{A\cap B}_{\text{선택}}
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 가능한 집합 <InlineMath math="X" />의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        선택할 수 있는 원소가 2개이므로 각각의 원소마다
                                        포함하는 경우와 포함하지 않는 경우가 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2=4
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="4" />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(B-A)\subset X\subset B
`}
                                    />

                                    <p className="leading-8">
                                        에서 <InlineMath math="B-A" />의 원소는{" "}
                                        <span className="font-bold text-white">
                                            반드시 포함
                                        </span>
                                        하고, 그 밖의 <InlineMath math="B" />의 원소만
                                        선택하면 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        선택할 수 있는 부분은 바로{" "}
                                        <InlineMath math="A\cap B" />이고 그 원소가 2개이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2=4
`}
                                    />

                                    <p className="mt-3 text-center font-bold text-blue-200">
                                        반드시 포함되는 원소는 경우의 수에 영향을 주지 않고,
                                        선택할 수 있는 원소의 개수만 확인합니다.
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
                            <p className="leading-8">
                                세 집합 <InlineMath math="A" />, <InlineMath math="B" />,{" "}
                                <InlineMath math="C" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div>
                                    <InlineMath
                                        math="\text{(가) }\ n(A\cup B)=n(A)+n(B)"
                                    />
                                </div>

                                <div>
                                    <InlineMath
                                        math="\text{(나) }\ n((A\cup C)\cap(B\cup C))=3n(B\cap C^C)"
                                    />
                                </div>
                            </div>

                            <p className="mt-5 leading-8">
                                <InlineMath math="n(B\cup C)=20" />일 때,{" "}
                                <InlineMath math="n(C)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 조건 (가)를 해석합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 집합의 합집합의 원소의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        입니다. 그런데
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=n(A)+n(B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=0
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap B=\emptyset
`}
                                    />
                                </div>


                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 조건 (나)의 왼쪽 집합을 정리합니다.
                                    </p>

                                    <p className="leading-8">
                                        분배법칙을 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A\cup C)\cap(B\cup C)
=
(A\cap B)\cup C
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이고, <InlineMath math="A\cap B=\emptyset" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A\cup C)\cap(B\cup C)
=
\emptyset\cup C
=
C
`}
                                    />
                                </div>


                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 조건 (나)를 원소의 개수로 정리합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(C)=3n(B\cap C^C)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="B\cap C^C" />는{" "}
                                        <InlineMath math="B-C" />와 같으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(C)=3n(B-C)
`}
                                    />
                                </div>


                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="B\cup C" />를 두 개의 방으로
                                        나눕니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="B\cup C" />는 서로 겹치지 않는
                                        두 부분
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B-C,\qquad C
`}
                                    />

                                    <p className="leading-8">
                                        로 나눌 수 있습니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B\cup C)
=
n(B-C)+n(C)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="n(B-C)=x" />라 하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(C)=3x
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이고, <InlineMath math="n(B\cup C)=20" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x+3x=20
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
4x=20
`}
                                    />

                                    <BlockMath math="x=5" />
                                </div>


                                {/* 5 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ⑤ <InlineMath math="n(C)" />를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(C)=3x=3\times5=15
`}
                                    />
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="15" />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=n(A)+n(B)
`}
                                    />

                                    <p className="leading-8">
                                        에서 <InlineMath math="A" />와{" "}
                                        <InlineMath math="B" />가 서로 겹치지 않는다는 것을
                                        알아내는 것이 중요합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\cap B=\emptyset
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그러면 복잡해 보이는 집합도
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(A\cup C)\cap(B\cup C)=C
`}
                                    />

                                    <p className="leading-8">
                                        로 단순해집니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        마지막에는 <InlineMath math="B\cup C" />를{" "}
                                        <span className="font-bold text-yellow-300">
                                            겹치지 않는 두 방
                                        </span>
                                        으로 나누어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
20=n(B-C)+n(C)
`}
                                    />

                                    <p className="leading-8">
                                        를 이용하면 됩니다.
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
                            <p className="leading-8">
                                어느 학급 학생 20명을 대상으로 봉사 활동{" "}
                                <InlineMath math="A" />, <InlineMath math="B" />에 대한
                                참여 여부를 조사하였더니 봉사 활동{" "}
                                <InlineMath math="A" />, <InlineMath math="B" />에 모두
                                참여한 학생의 수는 9명, 어느 봉사 활동도 참여하지 않은
                                학생의 수는 3명이었다.
                            </p>

                            <p className="mt-4 leading-8">
                                봉사 활동 <InlineMath math="A" />에 참여한 학생의 수가
                                봉사 활동 <InlineMath math="B" />에 참여한 학생의 수와
                                같을 때, 봉사 활동 <InlineMath math="A" />에 참여한
                                학생의 수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 적어도 하나의 봉사 활동에 참여한 학생의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        전체 학생은 20명이고, 어느 봉사 활동에도 참여하지
                                        않은 학생이 3명이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=20-3=17
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 두 봉사 활동에 참여한 학생의 수를 같은 문자로 둡니다.
                                    </p>

                                    <p className="leading-8">
                                        봉사 활동 <InlineMath math="A" />와{" "}
                                        <InlineMath math="B" />에 참여한 학생의 수가 같으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A)=n(B)=x
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        라고 두겠습니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 합집합의 원소의 개수를 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        주어진 값을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
17=x+x-9
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2x=26
`}
                                    />

                                    <BlockMath math="x=13" />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="13" />

                                    <p className="mt-3 text-center text-green-200">
                                        봉사 활동 A에 참여한 학생은 13명입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저{" "}
                                        <span className="font-bold text-white">
                                            어느 집합에도 속하지 않는 학생
                                        </span>
                                        을 전체에서 빼면 합집합의 원소의 개수를 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=20-3=17
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그다음 두 집합의 원소의 개수가 같다는 조건과
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="leading-8">
                                        를 함께 이용하면 됩니다.
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
                            <p className="leading-8">
                                디지털 수학 수업에 참여하는 학생 100명 중에서
                                노트북으로 수업에 참여하는 학생은 62명,
                                스마트폰으로 수업에 참여하는 학생은 42명이다.
                            </p>

                            <p className="mt-4 leading-8">
                                또, 노트북과 스마트폰 이외의 전자기기로 수업에
                                참여하는 학생은 10명일 때, 노트북으로만 수업에
                                참여하는 학생의 수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* 1 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 집합을 정합니다.
                                    </p>

                                    <p className="leading-8">
                                        노트북으로 참여하는 학생의 집합을{" "}
                                        <InlineMath math="A" />, 스마트폰으로 참여하는
                                        학생의 집합을 <InlineMath math="B" />라 하겠습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A)=62,\qquad n(B)=42
`}
                                    />
                                </div>

                                {/* 2 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="A\cup B" />의 원소의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        전체 100명 중 노트북과 스마트폰 이외의
                                        전자기기로 참여하는 학생이 10명이므로,
                                        노트북이나 스마트폰으로 참여하는 학생은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=100-10=90
`}
                                    />
                                </div>

                                {/* 3 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 두 기기를 모두 이용하는 학생의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        합집합의 원소의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
90=62+42-n(A\cap B)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=14
`}
                                    />
                                </div>

                                {/* 4 */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 노트북으로만 참여하는 학생의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        노트북으로 참여하는 62명 중에서
                                        노트북과 스마트폰을 모두 이용하는 14명을 빼면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A-B)
=
n(A)-n(A\cap B)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
62-14=48
`}
                                    />
                                </div>

                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="48" />

                                    <p className="mt-3 text-center text-green-200">
                                        노트북으로만 수업에 참여하는 학생은 48명입니다.
                                    </p>
                                </div>

                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 전체에서 두 집합 모두에 속하지 않는 학생의
                                        수를 빼서{" "}
                                        <span className="font-bold text-white">
                                            합집합의 원소의 개수
                                        </span>
                                        를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
100-10=90
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그다음 두 번 세어진 교집합을 구하고,
                                        마지막으로 그 값을 노트북 참여 학생의 수에서 빼면
                                        노트북으로만 참여한 학생의 수를 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n(A\cap B)&=62+42-90=14\\
n(A-B)&=62-14=48
\end{aligned}
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
                            <p className="leading-8">
                                어느 음식점에서 고객을 대상으로 두 메뉴{" "}
                                <InlineMath math="A" />, <InlineMath math="B" />에 대한
                                선호도를 조사하였더니 <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />를 선호하는 고객은 각각 20명,
                                24명이고, 두 메뉴 중 어느 것도 선호하지 않는 고객이
                                15명이었다.
                            </p>

                            <p className="mt-4 leading-8">
                                두 메뉴 <InlineMath math="A" />, <InlineMath math="B" /> 중
                                한 메뉴만 선호하는 고객이 10명이었을 때,
                                이 음식점의 전체 고객 수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 두 메뉴를 모두 선호하는 고객의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 메뉴를 모두 선호하는 고객의 수를{" "}
                                        <InlineMath math="x" />명이라 하겠습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러면 메뉴 <InlineMath math="A" />만 선호하는
                                        고객은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
20-x
`}
                                    />

                                    <p className="leading-8">
                                        명이고, 메뉴 <InlineMath math="B" />만 선호하는
                                        고객은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
24-x
`}
                                    />

                                    <p className="leading-8">
                                        명입니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 한 메뉴만 선호하는 고객이 10명이라는 조건을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(20-x)+(24-x)=10
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
44-2x=10
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2x=34
`}
                                    />

                                    <BlockMath math="x=17" />

                                    <p className="mt-3 leading-8">
                                        따라서 두 메뉴를 모두 선호하는 고객은 17명입니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 적어도 하나의 메뉴를 선호하는 고객의 수를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n(A\cup B)
&=n(A)+n(B)-n(A\cap B)\\
&=20+24-17\\
&=27
\end{aligned}
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 전체 고객 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        적어도 하나의 메뉴를 선호하는 고객이 27명이고,
                                        어느 메뉴도 선호하지 않는 고객이 15명이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
27+15=42
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="42" />

                                    <p className="mt-3 text-center text-green-200">
                                        전체 고객 수는 42명입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <span className="font-bold text-white">
                                            한 메뉴만 선호한다
                                        </span>
                                        는 것은 두 집합의 교집합을 제외한 두 방을
                                        합한 것입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A-B)+n(B-A)=10
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        두 메뉴를 모두 선호하는 고객의 수를{" "}
                                        <InlineMath math="x" />라 두면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(20-x)+(24-x)=10
`}
                                    />

                                    <p className="leading-8">
                                        으로 교집합의 원소의 개수를 먼저 구할 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        마지막에는{" "}
                                        <span className="font-bold text-yellow-300">
                                            합집합의 고객 + 어느 메뉴도 선호하지 않는 고객
                                        </span>
                                        을 더하면 전체 고객 수가 됩니다.
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
                            <p className="leading-8">
                                어느 학급 24명을 대상으로 문학 시간에 시 쓰기와
                                책갈피 만들기를 실시하였다. 시 쓰기와 책갈피 만들기에
                                모두 참여한 학생은 4명이고, 시 쓰기에 참여한 학생 수는
                                책갈피 만들기에 참여한 학생 수의 3배이다.
                            </p>

                            <p className="mt-4 leading-8">
                                이 학급 학생이 모두 시 쓰기 또는 책갈피 만들기에
                                참여하였다고 할 때, 시 쓰기에만 참여한 학생의 수를
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 두 활동에 참여한 학생의 집합을 정합니다.
                                    </p>

                                    <p className="leading-8">
                                        시 쓰기에 참여한 학생의 집합을{" "}
                                        <InlineMath math="A" />, 책갈피 만들기에 참여한
                                        학생의 집합을 <InlineMath math="B" />라 하겠습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=4
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        또한 시 쓰기에 참여한 학생 수는 책갈피 만들기에
                                        참여한 학생 수의 3배이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A)=3n(B)
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 합집합의 원소의 개수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        모든 학생이 시 쓰기 또는 책갈피 만들기에
                                        참여하였으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=24
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 각 활동에 참여한 학생의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        책갈피 만들기에 참여한 학생의 수를{" "}
                                        <InlineMath math="x" />명이라 하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B)=x,\qquad n(A)=3x
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        합집합의 원소의 개수를 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
24=3x+x-4
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
4x=28
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x=7
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(B)=7,\qquad n(A)=21
`}
                                    />
                                </div>


                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 시 쓰기에만 참여한 학생의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        시 쓰기에 참여한 21명 중 두 활동에 모두 참여한
                                        4명을 제외하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n(A-B)
&=n(A)-n(A\cap B)\\
&=21-4\\
&=17
\end{aligned}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="17" />

                                    <p className="mt-3 text-center text-green-200">
                                        시 쓰기에만 참여한 학생은 17명입니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        모든 학생이 두 활동 중 적어도 하나에 참여했다는
                                        조건에서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=24
`}
                                    />

                                    <p className="leading-8">
                                        를 얻습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        두 집합의 원소의 개수가{" "}
                                        <span className="font-bold text-white">
                                            3배 관계
                                        </span>
                                        이므로 한쪽을 <InlineMath math="x" />로 두고
                                    </p>

                                    <BlockMath
                                        math={String.raw`
24=3x+x-4
`}
                                    />

                                    <p className="leading-8">
                                        를 이용하면 두 집합의 원소의 개수를 구할 수
                                        있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        마지막에는 교집합을 빼서{" "}
                                        <span className="font-bold text-yellow-300">
                                            시 쓰기에만 참여한 학생
                                        </span>
                                        을 구합니다.
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
                            <p className="leading-8">
                                어느 회사의 전체 신입사원 200명 중에서
                                소방안전 교육을 받은 사원은 120명,
                                심폐소생술 교육을 받은 사원은 115명이고,
                                두 교육을 모두 받지 않은 사원은 17명이다.
                            </p>

                            <p className="mt-4 leading-8">
                                이 회사의 전체 신입사원 200명 중에서
                                심폐소생술 교육만을 받은 사원의 수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 두 교육 중 적어도 하나를 받은 사원의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        소방안전 교육을 받은 사원의 집합을{" "}
                                        <InlineMath math="A" />, 심폐소생술 교육을 받은
                                        사원의 집합을 <InlineMath math="B" />라 하겠습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        두 교육을 모두 받지 않은 사원이 17명이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=200-17=183
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 두 교육을 모두 받은 사원의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        합집합의 원소의 개수를 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
183
=
120+115-n(A\cap B)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
n(A\cap B)=52
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 심폐소생술 교육만 받은 사원의 수를 구합니다.
                                    </p>

                                    <p className="leading-8">
                                        심폐소생술 교육을 받은 115명 중에서
                                        두 교육을 모두 받은 52명을 제외하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n(B-A)
&=n(B)-n(A\cap B)\\
&=115-52\\
&=63
\end{aligned}
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="63" />

                                    <p className="mt-3 text-center text-green-200">
                                        심폐소생술 교육만 받은 사원은 63명입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 전체에서{" "}
                                        <span className="font-bold text-white">
                                            두 교육을 모두 받지 않은 사원
                                        </span>
                                        을 빼서 합집합의 원소의 개수를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n(A\cup B)=200-17=183
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        그다음 합집합의 원소의 개수를 이용하여
                                        두 교육을 모두 받은 사원의 수를 구한 뒤,
                                        심폐소생술 교육을 받은 전체 인원에서 교집합을
                                        빼면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
115-(120+115-183)=63
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8">
                                동아리 <InlineMath math="A" /> 또는 동아리{" "}
                                <InlineMath math="B" />에 가입한 남학생 28명과
                                여학생 22명을 조사한 결과가 다음과 같다.
                            </p>

                            <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8">
                                    (가) 동아리 <InlineMath math="A" />에 가입한 학생 수와
                                    동아리 <InlineMath math="B" />에 가입한 학생 수의
                                    합은 60이다.
                                </p>

                                <p className="leading-8">
                                    (나) 두 동아리 <InlineMath math="A" />,{" "}
                                    <InlineMath math="B" /> 중 한 동아리에만 가입한
                                    남학생 수와 여학생 수는 같다.
                                </p>
                            </div>

                            <p className="mt-5 leading-8">
                                이때 두 동아리 <InlineMath math="A" />,{" "}
                                <InlineMath math="B" />에 모두 가입한 여학생 수를
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ① 두 동아리에 모두 가입한 학생의 수를 정합니다.
                                    </p>

                                    <p className="leading-8">
                                        두 동아리에 모두 가입한 남학생 수를{" "}
                                        <InlineMath math="x" />명, 여학생 수를{" "}
                                        <InlineMath math="y" />명이라 하겠습니다.
                                    </p>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ② 조건 (가)를 이용합니다.
                                    </p>

                                    <p className="leading-8">
                                        남학생 28명은 모두 동아리{" "}
                                        <InlineMath math="A" /> 또는 <InlineMath math="B" />에
                                        가입하였으므로, 남학생 중 두 동아리에 가입한
                                        학생 수의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
28+x
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        두 동아리에 모두 가입한 남학생{" "}
                                        <InlineMath math="x" />명은 동아리{" "}
                                        <InlineMath math="A" />와 <InlineMath math="B" />의
                                        학생 수를 더할 때 두 번 세어지기 때문입니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        같은 방법으로 여학생의 경우에는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
22+y
`}
                                    />

                                    <p className="leading-8">
                                        명으로 세어집니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        조건 (가)에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(28+x)+(22+y)=60
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x+y=10
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ③ 조건 (나)를 이용합니다.
                                    </p>

                                    <p className="leading-8">
                                        남학생 28명 중 두 동아리에 모두 가입한 학생이{" "}
                                        <InlineMath math="x" />명이면, 한 동아리에만
                                        가입한 남학생은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
28-x
`}
                                    />

                                    <p className="leading-8">
                                        명입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        마찬가지로 한 동아리에만 가입한 여학생은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
22-y
`}
                                    />

                                    <p className="leading-8">
                                        명입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 두 수가 같으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
28-x=22-y
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x-y=6
`}
                                    />
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ④ 두 식을 함께 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{cases}
x+y=10\\
x-y=6
\end{cases}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        두 식을 더하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2x=16
`}
                                    />

                                    <BlockMath math="x=8" />

                                    <p className="mt-3 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y=10-8=2
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="mb-2 font-bold text-green-300">
                                        정답
                                    </p>

                                    <BlockMath math="2" />

                                    <p className="mt-3 text-center text-green-200">
                                        두 동아리에 모두 가입한 여학생은 2명입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 동아리에 모두 가입한 학생은 각 동아리의
                                        학생 수를 더할 때{" "}
                                        <span className="font-bold text-white">
                                            두 번 세어집니다.
                                        </span>
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
\text{남학생: }&28+x\\
\text{여학생: }&22+y
\end{aligned}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        반면 한 동아리에만 가입한 학생을 셀 때는
                                        전체 합집합에서 두 동아리에 모두 가입한 학생을
                                        빼면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
\text{남학생: }&28-x\\
\text{여학생: }&22-y
\end{aligned}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        따라서 두 조건으로부터
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x+y=10,\qquad x-y=6
`}
                                    />

                                    <p className="leading-8">
                                        을 얻는 것이 핵심입니다.
                                    </p>
                                </div>

                            </div>
                        </details>
                    </div>
                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                        <h3 className="mb-5 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-4">
                            <BlockMath
                                math={String.raw`
n(A^C)=n(U)-n(A)
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A\cap B)
=
n(A)+n(B)-n(A\cup B)
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A-B)
=
n(A)-n(A\cap B)
`}
                            />

                            <BlockMath
                                math={String.raw`
n(A^C\cap B^C)
=
n(U)-n(A\cup B)
`}
                            />
                        </div>

                        <div className="mt-6 rounded-lg border border-yellow-400/20 bg-black/20 p-5 text-center">
                            <p className="font-bold text-yellow-200">
                                구하려는 방의 개수를 이미 아는 방들의 개수로 만든다.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* 2.12 집합의 원소의 개수의 최댓값과 최솟값 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold text-white">
                    2.12 집합의 원소의 개수의 최댓값과 최솟값
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합의 원소의 개수가 주어져 있어도{" "}
                    <InlineMath math="A\cap B" />의 원소의 개수에 따라
                    각 영역의 원소의 개수는 달라질 수 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    따라서 집합의 원소의 개수의 최댓값과 최솟값을 구할 때는
                    가능한 원소의 개수의{" "}
                    <span className="font-bold text-yellow-300">
                        범위
                    </span>
                    를 구해야 합니다.
                </p>


                {/* 핵심 아이디어 */}
                <div className="mt-7 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <p className="mb-4 font-bold text-yellow-300">
                        핵심 아이디어
                    </p>

                    <p className="leading-8 text-gray-300">
                        집합의 원소의 개수의 최댓값과 최솟값은 크게 두 가지
                        방법으로 구할 수 있습니다.
                    </p>

                    <div className="mt-5 space-y-4">
                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="font-bold text-white">
                                방법 1. 집합의 포함관계를 이용한다.
                            </p>

                            <p className="mt-2 leading-7 text-gray-300">
                                작은 집합의 원소의 개수는 큰 집합의 원소의 개수보다
                                클 수 없다는 것을 이용합니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-4">
                            <p className="font-bold text-white">
                                방법 2. 각 방의 원소의 개수는 0 이상임을 이용한다.
                            </p>

                            <p className="mt-2 leading-7 text-gray-300">
                                교집합의 원소의 개수를{" "}
                                <InlineMath math="x" />로 두고 다른 방의 원소의
                                개수를 <InlineMath math="x" />로 표현합니다.
                            </p>
                        </div>
                    </div>
                </div>


                {/* 방법 1 */}
                <div className="mt-8">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        1. 집합의 포함관계를 이용하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 집합 <InlineMath math="A" />, <InlineMath math="B" />는
                        모두 <InlineMath math="A\cup B" />의 부분집합이고,{" "}
                        <InlineMath math="A\cup B" />는 전체집합{" "}
                        <InlineMath math="U" />의 부분집합입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
A\subset A\cup B\subset U
`}
                    />

                    <BlockMath
                        math={String.raw`
B\subset A\cup B\subset U
`}
                    />

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 원소의 개수에도 다음과 같은 관계가 성립합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
n(A)\le n(A\cup B)\le n(U)
`}
                    />

                    <BlockMath
                        math={String.raw`
n(B)\le n(A\cup B)\le n(U)
`}
                    />

                    <p className="mt-3 leading-8 text-gray-300">
                        즉, <InlineMath math="A" />와 <InlineMath math="B" /> 중
                        원소의 개수가 더 많은 집합을 이용하여 합집합의 범위를
                        구할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <p className="mb-3 font-bold text-blue-300">
                            합집합의 원소의 개수의 범위
                        </p>

                        <BlockMath
                            math={String.raw`
\max\{n(A),n(B)\}
\le
n(A\cup B)
\le
n(U)
`}
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        여기에 합집합의 원소의 개수
                    </p>

                    <BlockMath
                        math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                    />

                    <p className="leading-8 text-gray-300">
                        를 대입하면 <InlineMath math="n(A\cap B)" />의 가능한
                        범위를 구할 수 있습니다.
                    </p>
                </div>


                {/* 방법 2 */}
                <div className="mt-10">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        2. 각 방의 원소의 개수를 이용하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 집합 <InlineMath math="A" />, <InlineMath math="B" />가
                        만드는 네 개의 방을 생각합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
A-B,\qquad
A\cap B,\qquad
B-A,\qquad
A^C\cap B^C
`}
                    />

                    <p className="mt-3 leading-8 text-gray-300">
                        교집합의 원소의 개수를{" "}
                        <InlineMath math="x" />로 둡니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath
                        math={String.raw`
n(A\cap B)=x
`}
                    />

                    <p className="leading-8 text-gray-300">
                        로 두면
                    </p>

                    <BlockMath
                        math={String.raw`
n(A-B)=n(A)-x
`}
                    />

                    <BlockMath
                        math={String.raw`
n(B-A)=n(B)-x
`}
                    />

                    <p className="mt-3 leading-8 text-gray-300">
                        와 같이 다른 방의 원소의 개수를{" "}
                        <InlineMath math="x" />로 표현할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="mb-3 font-bold text-yellow-300">
                            가장 중요한 조건
                        </p>

                        <p className="leading-8 text-gray-300">
                            집합의 원소의 개수는 음수가 될 수 없으므로
                            모든 방의 원소의 개수는 반드시{" "}
                            <InlineMath math="0" /> 이상이어야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{\text{각 방의 원소의 개수}\ge0}
`}
                        />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 각 방에서 만들어지는 부등식을 모두 만족시키는{" "}
                        <InlineMath math="x" />의 범위를 구하면 최댓값과
                        최솟값을 구할 수 있습니다.
                    </p>
                </div>


                {/* 예시 */}
                <div className="mt-10 rounded-xl border border-white/10 bg-white/5 p-5">
                    <h3 className="mb-4 text-2xl font-bold text-white">
                        두 방법의 비교
                    </h3>

                    <p className="leading-8 text-gray-300">
                        전체집합 <InlineMath math="U" />의 두 부분집합{" "}
                        <InlineMath math="X" />, <InlineMath math="Y" />에 대하여
                    </p>

                    <BlockMath
                        math={String.raw`
n(U)=36,\qquad n(X)=23,\qquad n(Y)=19
`}
                    />

                    <p className="leading-8 text-gray-300">
                        일 때, <InlineMath math="n(X\cap Y)" />의 최댓값과
                        최솟값을 구해 봅시다.
                    </p>


                    {/* 풀이 1 */}
                    <div className="mt-7 rounded-xl border border-blue-500/20 bg-blue-500/5 p-5">
                        <p className="mb-4 font-bold text-blue-300">
                            방법 1. 포함관계를 이용
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="n(X)=23" />,{" "}
                            <InlineMath math="n(Y)=19" />이므로 원소의 개수가
                            더 많은 <InlineMath math="X" />를 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
n(X)\le n(X\cup Y)\le n(U)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
23
\le
n(X\cup Y)
\le
36
`}
                        />

                        <p className="leading-8 text-gray-300">
                            그런데
                        </p>

                        <BlockMath
                            math={String.raw`
n(X\cup Y)
=
n(X)+n(Y)-n(X\cap Y)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
23
\le
23+19-n(X\cap Y)
\le
36
`}
                        />

                        <BlockMath
                            math={String.raw`
23
\le
42-n(X\cap Y)
\le
36
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
6\le n(X\cap Y)\le19
`}
                        />
                    </div>


                    {/* 풀이 2 */}
                    <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-5">
                        <p className="mb-4 font-bold text-green-300">
                            방법 2. 각 방의 원소의 개수를 이용
                        </p>

                        <p className="leading-8 text-gray-300">
                            교집합의 원소의 개수를
                        </p>

                        <BlockMath
                            math={String.raw`
n(X\cap Y)=x
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 두겠습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            그러면 <InlineMath math="X" />에만 속하는 방은
                        </p>

                        <BlockMath
                            math={String.raw`
n(X-Y)=23-x
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, <InlineMath math="Y" />에만 속하는 방은
                        </p>

                        <BlockMath
                            math={String.raw`
n(Y-X)=19-x
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            두 집합의 어느 쪽에도 속하지 않는 방은 전체에서
                            나머지 세 방을 빼면 되므로
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
n(X^C\cap Y^C)
&=36-(23-x)-x-(19-x)\\
&=x-6
\end{aligned}
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 네 방의 원소의 개수는
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">
                                <InlineMath math="n(X-Y)=23-x" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">
                                <InlineMath math="n(X\cap Y)=x" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">
                                <InlineMath math="n(Y-X)=19-x" />
                            </div>

                            <div className="rounded-lg border border-white/10 bg-black/20 p-4 text-center">
                                <InlineMath math="n(X^C\cap Y^C)=x-6" />
                            </div>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            각 방의 원소의 개수는 모두 0 이상이어야 하므로
                        </p>

                        <BlockMath
                            math={String.raw`
23-x\ge0,\qquad
19-x\ge0,\qquad
x-6\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
x\le23,\qquad
x\le19,\qquad
x\ge6
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
6\le x\le19
`}
                        />
                    </div>


                    {/* 결과 */}
                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <p className="mb-3 font-bold text-yellow-300">
                            두 방법의 결과
                        </p>

                        <BlockMath
                            math={String.raw`
6\le n(X\cap Y)\le19
`}
                        />

                        <p className="mt-3 leading-8 text-center text-gray-300">
                            따라서 <InlineMath math="n(X\cap Y)" />의 최솟값은{" "}
                            <InlineMath math="6" />, 최댓값은{" "}
                            <InlineMath math="19" />입니다.
                        </p>
                    </div>
                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            두 집합 <InlineMath math="A" />, <InlineMath math="B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
n(A)=9,\qquad n(B)=14,\qquad n(A\cap B)\ge5
`}
                        />

                        <p className="leading-8">
                            일 때, <InlineMath math="n(A\cup B)" />의 최댓값을{" "}
                            <InlineMath math="a" />, 최솟값을 <InlineMath math="b" />라 할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 1. 합집합의 범위를 이용
                                </p>

                                <p className="leading-8">
                                    두 집합 중 <InlineMath math="B" />의 원소의 개수가 더 많으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B)\le n(A\cup B)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
14\le n(A\cup B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="n(A\cap B)\ge5" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
9+14-n(A\cap B)
\le
23-5
=
18
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
14\le n(A\cup B)\le18
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=18,\qquad b=14
`}
                                />
                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 font-bold text-green-300">
                                    풀이 2. 변하는 교집합을 <InlineMath math="x" />로 둠
                                </p>

                                <p className="leading-8">
                                    교집합의 원소의 개수를
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=x
`}
                                />

                                <p className="leading-8">
                                    라 두겠습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    주어진 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
x\ge5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또 <InlineMath math="A\cap B" />는{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />의
                                    공통부분이므로 그 원소의 개수는 두 집합 중
                                    원소의 개수가 더 적은 집합의 원소의 개수를
                                    넘을 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le9
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
5\le x\le9
`}
                                />

                                <p className="mt-3 leading-8">
                                    합집합의 원소의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
9+14-x
=
23-x
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="x" />가 가장 작을 때
                                    합집합은 가장 크고, <InlineMath math="x" />가 가장 클 때
                                    합집합은 가장 작습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x=5&\Rightarrow n(A\cup B)=18\\
x=9&\Rightarrow n(A\cup B)=14
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=18,\qquad b=14
`}
                                />
                            </div>


                            {/* 계산 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    두 값을 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=18+14=32
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="32" />
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    합집합의 원소의 개수는{" "}
                                    <span className="font-bold text-white">
                                        교집합이 작을수록 커지고, 교집합이 클수록 작아집니다.
                                    </span>
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)=23-n(A\cap B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 이 문제는
                                </p>

                                <BlockMath
                                    math={String.raw`
5\le n(A\cap B)\le9
`}
                                />

                                <p className="leading-8">
                                    를 찾는 것이 핵심입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    풀이 1은{" "}
                                    <span className="font-bold text-yellow-300">
                                        합집합의 범위
                                    </span>
                                    를 직접 구하고, 풀이 2는{" "}
                                    <span className="font-bold text-yellow-300">
                                        변하는 교집합을 문자로 두어
                                    </span>
                                    범위를 구하는 방법입니다.
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
                        <p className="leading-8">
                            어느 회사 직원 100명을 대상으로 출근할 때 이용하는
                            대중교통 수단을 조사하였더니 버스를 이용하는 직원은
                            45명, 지하철을 이용하는 직원은 35명이었다.
                        </p>

                        <p className="mt-4 leading-8">
                            버스와 지하철을 모두 이용하지 않는 직원 수의 최댓값을{" "}
                            <InlineMath math="M" />, 최솟값을{" "}
                            <InlineMath math="m" />이라 할 때,{" "}
                            <InlineMath math="M+m" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 1. 합집합의 범위를 이용
                                </p>

                                <p className="leading-8">
                                    버스를 이용하는 직원의 집합을{" "}
                                    <InlineMath math="A" />, 지하철을 이용하는 직원의
                                    집합을 <InlineMath math="B" />라 하겠습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=45,\qquad n(B)=35,\qquad n(U)=100
`}
                                />

                                <p className="mt-3 leading-8">
                                    두 집합 중 원소의 개수가 더 많은{" "}
                                    <InlineMath math="A" />는{" "}
                                    <InlineMath math="A\cup B" />의 부분집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
45\le n(A\cup B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    한편 합집합의 원소의 개수는 두 집합의 원소의
                                    개수를 더한 것보다 클 수 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)\le45+35=80
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
45\le n(A\cup B)\le80
`}
                                />

                                <p className="mt-3 leading-8">
                                    버스와 지하철을 모두 이용하지 않는 직원은{" "}
                                    <InlineMath math="(A\cup B)^C" />에 속하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n((A\cup B)^C)
=
100-n(A\cup B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="n(A\cup B)" />가 가장 작을 때
                                    여집합은 가장 크므로
                                </p>

                                <BlockMath
                                    math={String.raw`
M=100-45=55
`}
                                />

                                <p className="mt-3 leading-8">
                                    <InlineMath math="n(A\cup B)" />가 가장 클 때
                                    여집합은 가장 작으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m=100-80=20
`}
                                />
                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 font-bold text-green-300">
                                    풀이 2. 변하는 교집합을{" "}
                                    <InlineMath math="x" />로 둠
                                </p>

                                <p className="leading-8">
                                    버스와 지하철을 모두 이용하는 직원 수를
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=x
`}
                                />

                                <p className="leading-8">
                                    라 두겠습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러면 버스만 이용하는 직원은
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A-B)=45-x
`}
                                />

                                <p className="leading-8">
                                    이고, 지하철만 이용하는 직원은
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B-A)=35-x
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    버스와 지하철을 모두 이용하지 않는 직원 수는
                                    전체에서 나머지 세 방을 빼면 되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n((A\cup B)^C)
&=100-(45-x)-x-(35-x)\\
&=20+x
\end{aligned}
`}
                                />

                                <p className="mt-4 leading-8">
                                    이제 각 방의 원소의 개수는 0 이상이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
45-x\ge0,\qquad
35-x\ge0,\qquad
x\ge0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
0\le x\le35
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n((A\cup B)^C)=20+x
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="x" />가 가장 작을 때
                                    최솟값, 가장 클 때 최댓값을 가집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x=0
&\Rightarrow n((A\cup B)^C)=20\\
x=35
&\Rightarrow n((A\cup B)^C)=55
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
M=55,\qquad m=20
`}
                                />
                            </div>


                            {/* 계산 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    두 값을 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
M+m=55+20=75
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="75" />
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    풀이 1에서는 먼저 합집합의 가능한 범위를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
45\le n(A\cup B)\le80
`}
                                />

                                <p className="mt-3 leading-8">
                                    그리고 구하려는 것은 합집합의 여집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n((A\cup B)^C)=100-n(A\cup B)
`}
                                />

                                <p className="leading-8">
                                    를 이용합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    풀이 2에서는 변하는 교집합을{" "}
                                    <InlineMath math="x" />로 두면
                                </p>

                                <BlockMath
                                    math={String.raw`
n((A\cup B)^C)=20+x
`}
                                />

                                <p className="leading-8">
                                    가 되고, 각 방의 원소의 개수가 0 이상이라는
                                    조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
0\le x\le35
`}
                                />

                                <p className="leading-8">
                                    를 구하면 됩니다.
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
                        <p className="leading-8">
                            어느 여행사에서 관광객 50명을 대상으로 두 여행 프로그램{" "}
                            <InlineMath math="A" />, <InlineMath math="B" />에 대한
                            신청을 받았다.
                        </p>

                        <p className="mt-4 leading-8">
                            프로그램 <InlineMath math="A" />를 신청한 관광객 수와
                            프로그램 <InlineMath math="B" />를 신청한 관광객 수의 합이
                            58일 때, 프로그램 <InlineMath math="A" />,{" "}
                            <InlineMath math="B" />를 모두 신청한 관광객 수의 최댓값을{" "}
                            <InlineMath math="M" />, 최솟값을{" "}
                            <InlineMath math="m" />이라 하자.
                        </p>

                        <p className="mt-4 leading-8">
                            <InlineMath math="M+m" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 1. 합집합의 범위를 이용
                                </p>

                                <p className="leading-8">
                                    프로그램 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />를 신청한 관광객 수의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)+n(B)=58
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 두 집합 중 원소의 개수가 더 많은 집합은
                                    적어도 29개의 원소를 가집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\max\{n(A),n(B)\}\ge29
`}
                                />

                                <p className="mt-3 leading-8">
                                    큰 집합은 합집합의 부분집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)\ge29
`}
                                />

                                <p className="mt-3 leading-8">
                                    한편 관광객은 모두 50명이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)\le50
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
29\le n(A\cup B)\le50
`}
                                />

                                <p className="mt-4 leading-8">
                                    합집합의 원소의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)
=
58-n(A\cup B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    합집합이 가장 작을 때 교집합이 가장 크므로
                                </p>

                                <BlockMath
                                    math={String.raw`
M=58-29=29
`}
                                />

                                <p className="mt-3 leading-8">
                                    합집합이 가장 클 때 교집합이 가장 작으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m=58-50=8
`}
                                />
                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 font-bold text-green-300">
                                    풀이 2. 교집합을 <InlineMath math="x" />로 둠
                                </p>

                                <p className="leading-8">
                                    두 프로그램을 모두 신청한 관광객 수를
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=x
`}
                                />

                                <p className="leading-8">
                                    라 두겠습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러면 합집합의 원소의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B)
&=n(A)+n(B)-n(A\cap B)\\
&=58-x
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    관광객은 모두 50명이므로 합집합의 원소의 개수는
                                    50을 넘을 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
58-x\le50
`}
                                />

                                <BlockMath
                                    math={String.raw`
x\ge8
`}
                                />

                                <p className="mt-4 leading-8">
                                    또 <InlineMath math="A\cap B" />는{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />에
                                    모두 포함되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le n(A),\qquad x\le n(B)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    두 부등식을 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2x\le n(A)+n(B)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2x\le58
`}
                                />

                                <BlockMath
                                    math={String.raw`
x\le29
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
8\le x\le29
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
M=29,\qquad m=8
`}
                                />
                            </div>


                            {/* 계산 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    두 값을 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
M+m=29+8=37
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="37" />
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    풀이 1에서는 합집합의 범위를 먼저 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
29\le n(A\cup B)\le50
`}
                                />

                                <p className="mt-3 leading-8">
                                    그리고
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=58-n(A\cup B)
`}
                                />

                                <p className="leading-8">
                                    를 이용하여 교집합의 최댓값과 최솟값을 구합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    풀이 2에서는 변하는 교집합을{" "}
                                    <InlineMath math="x" />로 두고,
                                </p>

                                <BlockMath
                                    math={String.raw`
58-x\le50
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="x\ge8" />을 구하고,
                                </p>

                                <BlockMath
                                    math={String.raw`
x\le n(A),\qquad x\le n(B)
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="x\le29" />를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
8\le x\le29
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8">
                            어느 핸드폰 가게를 방문한 고객 36명 중 통신사{" "}
                            <InlineMath math="A" />를 이용하는 고객이 19명,
                            통신사 <InlineMath math="B" />를 이용하는 고객이
                            17명이었다.
                        </p>

                        <p className="mt-4 leading-8">
                            이 핸드폰 가게의 고객 중에서 통신사{" "}
                            <InlineMath math="A" />와 통신사{" "}
                            <InlineMath math="B" /> 중 어느 하나만 이용하는
                            고객의 수의 최댓값을 <InlineMath math="M" />,
                            최솟값을 <InlineMath math="m" />이라 할 때,{" "}
                            <InlineMath math="Mm" />의 값을 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 1. 합집합의 범위를 이용
                                </p>

                                <p className="leading-8">
                                    두 집합 중 원소의 개수가 더 많은{" "}
                                    <InlineMath math="A" />는{" "}
                                    <InlineMath math="A\cup B" />의 부분집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
19\le n(A\cup B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또 합집합의 원소의 개수는 두 집합의 원소의
                                    개수를 더한 것보다 클 수 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)\le19+17=36
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
19\le n(A\cup B)\le36
`}
                                />

                                <p className="mt-4 leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
19+17-n(A\cap B)
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=36-n(A\cup B)
`}
                                />

                                <p className="mt-4 leading-8">
                                    어느 하나만 이용하는 고객의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A-B)+n(B-A)
`}
                                />

                                <p className="leading-8">
                                    이고, 합집합에서 교집합을 제외하면 되므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A-B)+n(B-A)
&=n(A\cup B)-n(A\cap B)\\
&=n(A\cup B)-\{36-n(A\cup B)\}\\
&=2n(A\cup B)-36
\end{aligned}
`}
                                />

                                <p className="mt-4 leading-8">
                                    따라서 <InlineMath math="n(A\cup B)" />가
                                    가장 클 때 어느 하나만 이용하는 고객 수도
                                    가장 큽니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
M=2\times36-36=36
`}
                                />

                                <p className="mt-3 leading-8">
                                    반대로 <InlineMath math="n(A\cup B)" />가
                                    가장 작을 때 최솟값을 가지므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m=2\times19-36=2
`}
                                />
                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 font-bold text-green-300">
                                    풀이 2. 교집합을 <InlineMath math="x" />로 둠
                                </p>

                                <p className="leading-8">
                                    두 통신사를 모두 이용하는 고객의 수를
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=x
`}
                                />

                                <p className="leading-8">
                                    라 두겠습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그러면 통신사 <InlineMath math="A" />만
                                    이용하는 고객은
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A-B)=19-x
`}
                                />

                                <p className="leading-8">
                                    이고, 통신사 <InlineMath math="B" />만
                                    이용하는 고객은
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B-A)=17-x
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    각 방의 원소의 개수는 0 이상이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
19-x\ge0,\qquad17-x\ge0,\qquad x\ge0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
0\le x\le17
`}
                                />

                                <p className="mt-4 leading-8">
                                    어느 하나만 이용하는 고객의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A-B)+n(B-A)
&=(19-x)+(17-x)\\
&=36-2x
\end{aligned}
`}
                                />

                                <p className="mt-4 leading-8">
                                    따라서 <InlineMath math="x" />가 가장 작을 때
                                    최댓값을 가지므로
                                </p>

                                <BlockMath
                                    math={String.raw`
M=36-2\times0=36
`}
                                />

                                <p className="mt-3 leading-8">
                                    <InlineMath math="x" />가 가장 클 때
                                    최솟값을 가지므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m=36-2\times17=2
`}
                                />
                            </div>


                            {/* 계산 */}
                            <div>
                                <p className="mb-3 font-bold text-white">
                                    두 값을 곱합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
Mm=36\times2=72
`}
                                />
                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="72" />
                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    <span className="font-bold text-white">
                                        어느 하나만 이용한다
                                    </span>
                                    는 것은 교집합을 제외한 두 방을 뜻합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A-B)+n(B-A)
`}
                                />

                                <p className="mt-4 leading-8">
                                    풀이 1에서는 합집합의 범위를
                                </p>

                                <BlockMath
                                    math={String.raw`
19\le n(A\cup B)\le36
`}
                                />

                                <p className="leading-8">
                                    으로 구한 뒤, 어느 하나만 이용하는 고객의 수를
                                </p>

                                <BlockMath
                                    math={String.raw`
2n(A\cup B)-36
`}
                                />

                                <p className="leading-8">
                                    으로 나타냅니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    풀이 2에서는 교집합을{" "}
                                    <InlineMath math="x" />로 두면 두 바깥쪽 방이
                                </p>

                                <BlockMath
                                    math={String.raw`
19-x,\qquad17-x
`}
                                />

                                <p className="leading-8">
                                    가 되어
                                </p>

                                <BlockMath
                                    math={String.raw`
36-2x
`}
                                />

                                <p className="leading-8">
                                    의 최댓값과 최솟값을 바로 구할 수 있습니다.
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
                        <p className="leading-8">
                            다음 조건을 만족시키는 전체집합{" "}
                            <InlineMath math="U" />의 공집합이 아닌 두 부분집합{" "}
                            <InlineMath math="A" />, <InlineMath math="B" />에 대하여{" "}
                            <InlineMath math="n(A\cup B)" />의 최솟값을 구하시오.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                            <div>
                                <InlineMath
                                    math="\text{(가) }\ (A\cup B^C)\cap B=\emptyset"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{(나) }\ n(A^C\cup B^C)=20"
                                />
                            </div>

                            <div>
                                <InlineMath
                                    math="\text{(다) }\ n(A^C)=8"
                                />
                            </div>
                        </div>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 조건 (가)를 정리합니다.
                                </p>

                                <p className="leading-8">
                                    분배법칙을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
(A\cup B^C)\cap B
&=(A\cap B)\cup(B^C\cap B)\\
&=(A\cap B)\cup\emptyset\\
&=A\cap B
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서 조건 (가)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B=\emptyset
`}
                                />

                                <p className="leading-8">
                                    을 얻습니다.
                                </p>
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 조건 (나)에서 전체집합의 원소의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    드모르간 법칙에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C=(A\cap B)^C
`}
                                />

                                <p className="mt-3 leading-8">
                                    이고 <InlineMath math="A\cap B=\emptyset" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A^C\cup B^C
=
\emptyset^C
=
U
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(U)=20
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ <InlineMath math="n(A)" />를 구합니다.
                                </p>

                                <p className="leading-8">
                                    조건 (다)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A^C)=8
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A)
&=n(U)-n(A^C)\\
&=20-8\\
&=12
\end{aligned}
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="n(A\cup B)" />의 최솟값을 구합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="B" />는
                                    서로소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)=n(A)+n(B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 <InlineMath math="B" />는{" "}
                                    <span className="font-bold text-yellow-300">
                                        공집합이 아니므로
                                    </span>
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B)\ge1
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B)
&=12+n(B)\\
&\ge12+1\\
&=13
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    그러므로 <InlineMath math="n(A\cup B)" />의
                                    최솟값은 13입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="13" />
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 조건 (가)를 단순화하여{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />가
                                    서로소임을 알아냅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A\cup B^C)\cap B=\emptyset
\quad\Longrightarrow\quad
A\cap B=\emptyset
`}
                                />

                                <p className="mt-3 leading-8">
                                    그러면 조건 (나)에서 전체집합의 원소의 개수를
                                    구할 수 있고,
                                </p>

                                <BlockMath
                                    math={String.raw`
n(U)=20,\qquad n(A)=20-8=12
`}
                                />

                                <p className="mt-3 leading-8">
                                    마지막으로 <InlineMath math="B" />가 공집합이
                                    아니라는 조건을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B)\ge1
`}
                                />

                                <BlockMath
                                    math={String.raw`
n(A\cup B)=12+n(B)\ge13
`}
                                />

                                <p className="mt-3 text-center font-bold text-blue-200">
                                    최댓값·최솟값 문제에서는
                                    공집합이 아닌 조건도 범위를 결정하는 중요한 조건입니다.
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
                        <p className="leading-8">
                            진주네 반 학생을 대상으로 학교 도서관에서 소설책,
                            자기계발서, 시집을 대출한 학생 수를 조사하였더니
                            각각 17명, 13명, 10명이었다.
                        </p>

                        <p className="mt-4 leading-8">
                            소설책 또는 자기계발서를 대출한 학생 수는 23명,
                            소설책 또는 시집을 대출한 학생 수는 20명이었고
                            자기계발서와 시집을 동시에 대출한 학생은 없다고 할 때,
                            진주네 반 학생 수를 구하시오.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, 어느 책도 대출하지 않은 학생은 없다.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 세 집합을 정합니다.
                                </p>

                                <p className="leading-8">
                                    소설책을 대출한 학생의 집합을{" "}
                                    <InlineMath math="A" />, 자기계발서를 대출한
                                    학생의 집합을 <InlineMath math="B" />, 시집을
                                    대출한 학생의 집합을{" "}
                                    <InlineMath math="C" />라 하겠습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=17,\qquad
n(B)=13,\qquad
n(C)=10
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 소설책과 자기계발서를 모두 대출한 학생 수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    주어진 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)=23
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B)
=
n(A)+n(B)-n(A\cap B)
`}
                                />

                                <p className="mt-3 leading-8">
                                    에 값을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
23=17+13-n(A\cap B)
`}
                                />

                                <BlockMath
                                    math={String.raw`
n(A\cap B)=7
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 소설책과 시집을 모두 대출한 학생 수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup C)=20
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
20=17+10-n(A\cap C)
`}
                                />

                                <BlockMath
                                    math={String.raw`
n(A\cap C)=7
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 자기계발서와 시집의 교집합을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    자기계발서와 시집을 동시에 대출한 학생은
                                    없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B\cap C=\emptyset
`}
                                />

                                <BlockMath
                                    math={String.raw`
n(B\cap C)=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    세 책을 모두 대출한 학생은{" "}
                                    <InlineMath math="B\cap C" />에도 속해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B\cap C=\emptyset
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑤ 세 집합의 합집합의 원소의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    포함과 배제의 원리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B\cup C)
={}&n(A)+n(B)+n(C)\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)\\
&+n(A\cap B\cap C)
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B\cup C)
&=17+13+10-7-0-7+0\\
&=26
\end{aligned}
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ⑥ 전체 학생 수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    어느 책도 대출하지 않은 학생은 없으므로
                                    모든 학생은 <InlineMath math="A\cup B\cup C" />에
                                    속합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 진주네 반 학생 수는
                                </p>

                                <BlockMath math="26" />
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="26" />

                                <p className="mt-3 text-center text-green-200">
                                    진주네 반 학생 수는 26명입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 두 집합의 합집합의 원소의 개수에서
                                    각각의 교집합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cap B)&=17+13-23=7\\
n(A\cap C)&=17+10-20=7
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    또한 <InlineMath math="B\cap C=\emptyset" />이므로
                                    세 집합의 공통부분도 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B\cap C=\emptyset
`}
                                />

                                <p className="mt-3 leading-8">
                                    마지막에는 세 집합에 대한{" "}
                                    <span className="font-bold text-yellow-300">
                                        포함과 배제의 원리
                                    </span>
                                    를 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
17+13+10-7-7=26
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
                        <p className="leading-8">
                            산악 동호회 회원 40명 중 지리산에 가 본 회원은 12명,
                            한라산에 가 본 회원은 18명, 설악산에 가 본 회원은
                            32명이고, 세 산 모두 가 본 회원은 6명이다.
                        </p>

                        <p className="mt-4 leading-8">
                            지리산, 한라산, 설악산 중 한 곳도 가 보지 않은 회원은
                            없다고 할 때, 세 산 중 두 산만 가 본 회원 수를
                            구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 세 산을 각각 집합으로 나타냅니다.
                                </p>

                                <p className="leading-8">
                                    지리산에 가 본 회원의 집합을{" "}
                                    <InlineMath math="A" />, 한라산에 가 본 회원의
                                    집합을 <InlineMath math="B" />, 설악산에 가 본
                                    회원의 집합을 <InlineMath math="C" />라 하겠습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=12,\qquad
n(B)=18,\qquad
n(C)=32
`}
                                />

                                <BlockMath
                                    math={String.raw`
n(A\cap B\cap C)=6
`}
                                />

                                <p className="mt-3 leading-8">
                                    어느 산도 가 보지 않은 회원이 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B\cup C)=40
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 두 집합씩의 교집합의 원소의 개수의 합을 구합니다.
                                </p>

                                <p className="leading-8">
                                    세 집합에 대한 포함과 배제의 원리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B\cup C)
={}&n(A)+n(B)+n(C)\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)\\
&+n(A\cap B\cap C)
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다. 주어진 값을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
40
={}&12+18+32\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)+6
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)+n(B\cap C)+n(C\cap A)=28
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 세 산을 모두 가 본 회원이 몇 번 세어졌는지 확인합니다.
                                </p>

                                <p className="leading-8">
                                    세 산을 모두 가 본 회원은
                                </p>

                                <BlockMath
                                    math={String.raw`
A\cap B,\qquad
B\cap C,\qquad
C\cap A
`}
                                />

                                <p className="leading-8">
                                    에 모두 속합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 세 산을 모두 가 본 6명은
                                    두 집합씩의 교집합의 원소의 개수를 더한 28명에{" "}
                                    <span className="font-bold text-yellow-300">
                                        각각 3번씩
                                    </span>
                                    세어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
3\times6=18
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ④ 두 산만 가 본 회원 수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    두 집합씩의 교집합의 원소의 개수의 합에서
                                    세 산을 모두 가 본 회원이 세 번씩 세어진 부분을
                                    제외하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
28-3\times6=10
`}
                                />
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="10" />

                                <p className="mt-3 text-center text-green-200">
                                    세 산 중 두 산만 가 본 회원은 10명입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 포함과 배제의 원리로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)+n(B\cap C)+n(C\cap A)=28
`}
                                />

                                <p className="leading-8">
                                    을 구합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    그런데 이 28에는 세 집합의 공통부분이{" "}
                                    <span className="font-bold text-white">
                                        세 번
                                    </span>
                                    들어 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\underbrace{A\cap B}_{1\text{번}}
\qquad
\underbrace{B\cap C}_{1\text{번}}
\qquad
\underbrace{C\cap A}_{1\text{번}}
`}
                                />

                                <p className="mt-3 leading-8">
                                    따라서{" "}
                                    <span className="font-bold text-yellow-300">
                                        정확히 두 집합에만 속하는 원소
                                    </span>
                                    를 구하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
28-3\times6=10
`}
                                />

                                <p className="leading-8">
                                    으로 계산하면 됩니다.
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
                        <p className="leading-8">
                            어느 학교에서 토론, 글쓰기, 탐구 발표 대회가 열렸다.
                            다음은 3가지 대회 중 적어도 한 대회에 참가한 학생
                            100명에 대한 설명이다.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="leading-8">
                                (가) 토론 대회에 참가한 학생 중 글쓰기 대회에
                                참가하지 않은 학생은 23명이다.
                            </p>

                            <p className="leading-8">
                                (나) 글쓰기 대회에 참가한 학생 중 탐구 발표 대회에
                                참가하지 않은 학생은 29명이다.
                            </p>

                            <p className="leading-8">
                                (다) 3가지 대회에 모두 참가한 학생은 17명이다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8">
                            탐구 발표 대회에 참가한 학생 중 토론 대회에
                            참가하지 않은 학생 수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 세 대회를 각각 집합으로 나타냅니다.
                                </p>

                                <p className="leading-8">
                                    토론 대회에 참가한 학생의 집합을{" "}
                                    <InlineMath math="A" />, 글쓰기 대회에 참가한
                                    학생의 집합을 <InlineMath math="B" />, 탐구 발표
                                    대회에 참가한 학생의 집합을{" "}
                                    <InlineMath math="C" />라 하겠습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    조건 (가)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A-B)=23
`}
                                />

                                <p className="leading-8">
                                    이고, 조건 (나)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B-C)=29
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또 조건 (다)에서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B\cap C)=17
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 전체 100명을 네 부분으로 나눕니다.
                                </p>

                                <p className="leading-8">
                                    세 집합의 벤다이어그램에서 전체 학생은 다음
                                    네 부분으로 나누어 생각할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A-B,\qquad
B-C,\qquad
C-A,\qquad
A\cap B\cap C
`}
                                />

                                <p className="mt-3 leading-8">
                                    이 네 부분은 서로 겹치지 않으면서{" "}
                                    <InlineMath math="A\cup B\cup C" /> 전체를
                                    이룹니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    모든 학생이 적어도 한 대회에 참가하였으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B\cup C)=100
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 구하려는 부분의 원소의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    탐구 발표 대회에는 참가했지만 토론 대회에는
                                    참가하지 않은 학생은{" "}
                                    <InlineMath math="C-A" />에 속합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
23+29+n(C-A)+17=100
`}
                                />

                                <p className="mt-3 leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(C-A)
=
100-23-29-17
=
31
`}
                                />
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="31" />

                                <p className="mt-3 text-center text-green-200">
                                    탐구 발표 대회에 참가하면서 토론 대회에는
                                    참가하지 않은 학생은 31명입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    이 문제에서는 세 집합의 7개 방을 하나씩
                                    구할 필요가 없습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    주어진 세 부분과 구하려는 부분이 서로 겹치지
                                    않으면서 전체 100명을 정확히 나눈다는 것을
                                    찾는 것이 핵심입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(A-B),\quad
(B-C),\quad
(C-A),\quad
(A\cap B\cap C)
`}
                                />

                                <BlockMath
                                    math={String.raw`
23+29+\boxed{n(C-A)}+17=100
`}
                                />

                                <p className="mt-3 text-center font-bold text-blue-200">
                                    복잡한 세 집합 문제에서도 이미 알고 있는 방들을
                                    묶어 전체를 만드는 방법을 먼저 생각합니다.
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
                        <p className="leading-8">
                            수강생이 40명인 어느 학원에서 모든 수강생을 대상으로
                            세 종류의 자격증 <InlineMath math="A" />,{" "}
                            <InlineMath math="B" />, <InlineMath math="C" />의
                            취득 여부를 조사하였다.
                        </p>

                        <p className="mt-4 leading-8">
                            자격증 <InlineMath math="A" />, <InlineMath math="B" />,{" "}
                            <InlineMath math="C" />를 취득한 수강생이 각각
                            26명, 20명, 15명이고, 어느 자격증도 취득하지 못한
                            수강생이 7명이다.
                        </p>

                        <p className="mt-4 leading-8">
                            이 학원의 수강생 중에서 세 자격증{" "}
                            <InlineMath math="A" />, <InlineMath math="B" />,{" "}
                            <InlineMath math="C" />를 모두 취득한 수강생이 없을 때,
                            자격증 <InlineMath math="A" />, <InlineMath math="B" />,{" "}
                            <InlineMath math="C" /> 중 두 종류의 자격증만 취득한
                            수강생의 수를 구하시오.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ① 적어도 하나의 자격증을 취득한 수강생의 수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    전체 수강생은 40명이고, 어느 자격증도 취득하지
                                    못한 수강생이 7명이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B\cup C)=40-7=33
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ② 세 집합의 포함과 배제의 원리를 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
n(A\cup B\cup C)
={}&n(A)+n(B)+n(C)\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)\\
&+n(A\cap B\cap C)
\end{aligned}
`}
                                />

                                <p className="mt-3 leading-8">
                                    세 자격증을 모두 취득한 수강생은 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B\cap C)=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    입니다. 주어진 값을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
33
={}&26+20+15\\
&-n(A\cap B)-n(B\cap C)-n(C\cap A)
\end{aligned}
`}
                                />
                            </div>


                            <div>
                                <p className="mb-3 font-bold text-white">
                                    ③ 두 집합씩의 교집합의 원소의 개수의 합을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)+n(B\cap C)+n(C\cap A)
=
61-33
=
28
`}
                                />

                                <p className="mt-3 leading-8">
                                    세 자격증을 모두 취득한 수강생이 없으므로
                                    각 두 집합의 교집합에는{" "}
                                    <span className="font-bold text-yellow-300">
                                        정확히 두 종류의 자격증만 취득한 수강생
                                    </span>
                                    만 들어 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 두 종류의 자격증만 취득한 수강생의 수는
                                </p>

                                <BlockMath math="28" />
                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-2 font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="28" />

                                <p className="mt-3 text-center text-green-200">
                                    두 종류의 자격증만 취득한 수강생은 28명입니다.
                                </p>
                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    먼저 어느 자격증도 취득하지 않은 7명을 전체에서
                                    빼서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cup B\cup C)=33
`}
                                />

                                <p className="leading-8">
                                    을 구합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    포함과 배제의 원리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A\cap B)+n(B\cap C)+n(C\cap A)=28
`}
                                />

                                <p className="mt-3 leading-8">
                                    을 얻습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이때{" "}
                                    <InlineMath math="A\cap B\cap C=\emptyset" />이므로
                                    이 28명에는 세 집합의 공통부분이 포함되어 있지
                                    않습니다.
                                </p>

                                <p className="mt-3 text-center font-bold text-blue-200">
                                    따라서 두 집합씩의 교집합의 원소의 개수의 합이
                                    곧 정확히 두 종류의 자격증만 취득한 수강생의 수입니다.
                                </p>
                            </div>

                        </div>
                    </details>
                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <p className="mb-4 text-2xl font-bold text-yellow-300">
                        핵심 정리
                    </p>

                    <div className="space-y-5 text-gray-300">
                        <div>
                            <p className="mb-2 font-bold text-white">
                                방법 1
                            </p>

                            <BlockMath
                                math={String.raw`
\text{집합의 포함관계}
\quad\Longrightarrow\quad
\text{원소의 개수의 부등식}
`}
                            />
                        </div>

                        <div>
                            <p className="mb-2 font-bold text-white">
                                방법 2
                            </p>

                            <BlockMath
                                math={String.raw`
\text{교집합의 원소의 개수를 }x\text{로 둔다}
`}
                            />

                            <BlockMath
                                math={String.raw`
\Downarrow
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{다른 방의 원소의 개수를 }x\text{로 표현한다}
`}
                            />

                            <BlockMath
                                math={String.raw`
\Downarrow
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{각 방의 원소의 개수}\ge0
`}
                            />
                        </div>
                        {/* 마지막 강조 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-5 text-center">
                            <p className="leading-8 text-gray-300">
                                최댓값과 최솟값 문제에서는 하나의 값만 구하는 것이 아니라
                            </p>

                            <p className="mt-2 text-lg font-bold text-yellow-300">
                                가능한 값의 범위를 구한다.
                            </p>
                        </div>
                    </div>
                </div>



            </section>

        </>
    );
}