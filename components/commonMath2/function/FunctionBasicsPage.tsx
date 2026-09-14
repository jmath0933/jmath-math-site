"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AbsoluteValueBijectionExplorer() {
    const [a, setA] = useState(0);

    const leftSlope = 2 - a;
    const rightSlope = a + 2;

    const isBijection = leftSlope * rightSlope > 0;

    const xMin = -6;
    const xMax = 10;
    const yMin = -12;
    const yMax = 18;

    const width = 720;
    const height = 360;

    const paddingLeft = 55;
    const paddingRight = 30;
    const paddingTop = 30;
    const paddingBottom = 45;

    const graphWidth = width - paddingLeft - paddingRight;
    const graphHeight = height - paddingTop - paddingBottom;

    const toSvgX = (x: number) =>
        paddingLeft + ((x - xMin) / (xMax - xMin)) * graphWidth;

    const toSvgY = (y: number) =>
        paddingTop + ((yMax - y) / (yMax - yMin)) * graphHeight;

    const f = (x: number) => a * Math.abs(x - 2) + 2 * x + 3;

    const leftPoints: string[] = [];
    const rightPoints: string[] = [];

    for (let x = xMin; x <= 2; x += 0.1) {
        leftPoints.push(`${toSvgX(x)},${toSvgY(f(x))}`);
    }

    for (let x = 2; x <= xMax; x += 0.1) {
        rightPoints.push(`${toSvgX(x)},${toSvgY(f(x))}`);
    }

    const xAxisY = toSvgY(0);
    const yAxisX = toSvgX(0);

    return (
        <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 p-5">
            {/* 상단 함수 */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="mb-2 text-center text-sm text-gray-400">
                    절댓값이 포함된 함수
                </p>

                <BlockMath math={String.raw`
                    f(x)=a|x-2|+2x+3
                `} />
            </div>

            {/* 왼쪽 / 오른쪽 함수 */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-3 text-center font-bold text-white">
                        왼쪽 함수 <InlineMath math="(x<2)" />
                    </p>

                    <BlockMath math={String.raw`
                        f(x)=(2-a)x+2a+3
                    `} />

                    <div className="mt-4 rounded-lg bg-black/20 p-3 text-center">
                        <span className="text-sm text-gray-400">기울기 </span>   <InlineMath math="m_1=2-a" />
                    </div>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-3 text-center font-bold text-white">
                        오른쪽 함수 <InlineMath math="(x\ge2)" />
                    </p>

                    <BlockMath math={String.raw`
                        f(x)=(a+2)x-2a+3
                    `} />

                    <div className="mt-4 rounded-lg bg-black/20 p-3 text-center">
                        <span className="text-sm text-gray-400">기울기 </span>   <InlineMath math="m_2=a+2" />

                    </div>
                </div>
            </div>

            {/* 그래프 */}
            <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <svg
                    viewBox={`0 0 ${width} ${height}`}
                    className="w-full"
                >
                    {/* x축 */}
                    <line
                        x1={paddingLeft}
                        y1={xAxisY}
                        x2={width - paddingRight}
                        y2={xAxisY}
                        stroke="currentColor"
                        className="text-gray-500"
                        strokeWidth="1.5"
                    />

                    {/* y축 */}
                    <line
                        x1={yAxisX}
                        y1={paddingTop}
                        x2={yAxisX}
                        y2={height - paddingBottom}
                        stroke="currentColor"
                        className="text-gray-500"
                        strokeWidth="1.5"
                    />

                    {/* x=2 기준선 */}
                    <line
                        x1={toSvgX(2)}
                        y1={paddingTop}
                        x2={toSvgX(2)}
                        y2={height - paddingBottom}
                        stroke="currentColor"
                        className="text-gray-600"
                        strokeWidth="1"
                        strokeDasharray="6 6"
                    />

                    {/* 왼쪽 그래프 */}
                    <polyline
                        points={leftPoints.join(" ")}
                        fill="none"
                        stroke="currentColor"
                        className="text-cyan-300"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* 오른쪽 그래프 */}
                    <polyline
                        points={rightPoints.join(" ")}
                        fill="none"
                        stroke="currentColor"
                        className="text-violet-300"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />

                    {/* 꺾이는 점 */}
                    <circle
                        cx={toSvgX(2)}
                        cy={toSvgY(7)}
                        r="5"
                        fill="currentColor"
                        className="text-yellow-300"
                    />

                    <text
                        x={toSvgX(2) + 8}
                        y={toSvgY(7) - 10}
                        fill="currentColor"
                        className="text-yellow-300"
                        fontSize="16"
                    >
                        (2, 7)
                    </text>

                    {/* x축 라벨 */}
                    <text
                        x={width - paddingRight - 5}
                        y={xAxisY - 8}
                        fill="currentColor"
                        className="text-gray-300"
                        fontSize="16"
                    >
                        x
                    </text>

                    {/* y축 라벨 */}
                    <text
                        x={yAxisX + 8}
                        y={paddingTop + 15}
                        fill="currentColor"
                        className="text-gray-300"
                        fontSize="16"
                    >
                        y
                    </text>

                    {/* x=2 라벨 */}
                    <text
                        x={toSvgX(2) - 5}
                        y={xAxisY + 22}
                        fill="currentColor"
                        className="text-gray-400"
                        fontSize="14"
                    >
                        2
                    </text>
                </svg>
            </div>

            {/* 슬라이더 + 설명 */}
            <div className="mt-4 grid gap-4 md:grid-cols-2">
                {/* a 슬라이더 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <div className="mb-4 flex items-center justify-between">
                        <p className="font-bold text-white">
                            <InlineMath math="a" /> 값
                        </p>

                        <div className="rounded-lg bg-black/30 px-4 py-2 font-bold text-yellow-300">
                            <InlineMath math={`a=${a.toFixed(1)}`} />
                        </div>
                    </div>

                    <input
                        type="range"
                        min="-5"
                        max="5"
                        step="0.1"
                        value={a}
                        onChange={(e) => setA(Number(e.target.value))}
                        className="w-full"
                    />

                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                        <span>-5</span>
                        <span>0</span>
                        <span>5</span>
                    </div>

                    <div className="border-t border-white/10 pt-3">
                        <BlockMath math={String.raw`
                                (2-a)(a+2)
                            `} />

                        <p className="text-center text-gray-300">
                            ={" "}
                            <span className="font-bold text-white">
                                {(leftSlope * rightSlope).toFixed(2)}
                            </span>
                        </p>
                    </div>
                </div>

                {/* 설명 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                    <p className="mb-4 font-bold text-white">
                        일대일대응 판정
                    </p>

                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">
                                왼쪽 기울기
                            </span>

                            <span className="font-bold text-cyan-300">
                                {leftSlope.toFixed(1)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-gray-400">
                                오른쪽 기울기
                            </span>

                            <span className="font-bold text-violet-300">
                                {rightSlope.toFixed(1)}
                            </span>
                        </div>


                    </div>

                    <div
                        className={`mt-4 rounded-xl border p-4 ${isBijection
                            ? "border-green-500/30 bg-green-500/5"
                            : "border-red-500/30 bg-red-500/5"
                            }`}
                    >
                        <p
                            className={`text-center text-lg font-bold ${isBijection
                                ? "text-green-300"
                                : "text-red-300"
                                }`}
                        >
                            {isBijection
                                ? "일대일대응 ○"
                                : "일대일대응 ×"}
                        </p>

                        <p className="mt-2 text-center leading-7 text-gray-300">
                            {isBijection
                                ? "두 구간의 기울기 부호가 같아 그래프의 진행 방향이 바뀌지 않습니다."
                                : "두 구간의 기울기 부호가 다르거나 한쪽 기울기가 0이므로 일대일대응이 아닙니다."}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuadraticBijectionExplorer() {
    const [a, setA] = useState(3);
    const [showGuide, setShowGuide] = useState(true);

    // f(x) = x^2 - 3x
    const f = (x: number) => x * x - 3 * x;

    const vertexX = 1.5;
    const vertexY = -2.25;

    // 정의역 x >= a 에서 실제 치역의 시작값
    // a >= 3/2이면 f(a)가 최솟값,
    // a < 3/2이면 꼭짓점의 y좌표가 최솟값
    const rangeMin =
        a >= vertexX
            ? f(a)
            : vertexY;

    const codomainMin = a - 3;

    const isOneToOne = a >= vertexX;

    const isRangeEqual =
        isOneToOne &&
        Math.abs(f(a) - codomainMin) < 0.001;

    const isBijection = isOneToOne && isRangeEqual;

    // 그래프 범위
    const xMin = -2;
    const xMax = 6;
    const yMin = -4;
    const yMax = 12;

    const width = 760;
    const height = 860;

    const paddingLeft = 65;
    const paddingRight = 35;
    const paddingTop = 35;
    const paddingBottom = 55;

    const graphWidth =
        width - paddingLeft - paddingRight;

    const graphHeight =
        height - paddingTop - paddingBottom;

    const toSvgX = (x: number) =>
        paddingLeft +
        ((x - xMin) / (xMax - xMin)) * graphWidth;

    const toSvgY = (y: number) =>
        paddingTop +
        ((yMax - y) / (yMax - yMin)) * graphHeight;

    // SVG 영역 밖으로 나가지 않도록 보정
    const clampX = (x: number) =>
        Math.max(
            paddingLeft,
            Math.min(width - paddingRight, toSvgX(x))
        );

    const clampY = (y: number) =>
        Math.max(
            paddingTop,
            Math.min(height - paddingBottom, toSvgY(y))
        );

    // 전체 포물선
    const parabolaPoints: string[] = [];

    for (let x = xMin; x <= xMax; x += 0.03) {
        const y = f(x);

        if (y >= yMin && y <= yMax) {
            parabolaPoints.push(
                `${toSvgX(x)},${toSvgY(y)}`
            );
        }
    }

    // 실제 정의역 x >= a 에 해당하는 포물선
    const activePoints: string[] = [];

    const activeStart = Math.max(a, xMin);

    for (
        let x = activeStart;
        x <= xMax;
        x += 0.03
    ) {
        const y = f(x);

        if (y >= yMin && y <= yMax) {
            activePoints.push(
                `${toSvgX(x)},${toSvgY(y)}`
            );
        }
    }

    // y = x - 3
    const guidePoints: string[] = [];

    for (let x = xMin; x <= xMax; x += 0.05) {
        const y = x - 3;

        if (y >= yMin && y <= yMax) {
            guidePoints.push(
                `${toSvgX(x)},${toSvgY(y)}`
            );
        }
    }

    const xAxisY = toSvgY(0);
    const yAxisX = toSvgX(0);

    // 정의역 음영
    const domainStartX = clampX(a);

    // 공역 음영 y >= a - 3
    const codomainBoundaryY =
        clampY(codomainMin);

    // 실제 치역 경계
    const rangeBoundaryY =
        clampY(rangeMin);

    return (
        <div className="mt-6 rounded-2xl border border-white/15 bg-black/30 p-5">

            <div className="grid gap-5 lg:grid-cols-[240px_1fr]">

                {/* 왼쪽 조작 영역 */}
                <div className="space-y-4">

                    {/* 이차함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="mb-3 text-center font-bold text-white">
                            이차함수
                        </p>

                        <BlockMath
                            math={String.raw`
                                f(x)=x^2-3x
                            `}
                        />
                    </div>

                    {/* 정의역 */}
                    <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-5">
                        <p className="mb-3 text-center font-bold text-cyan-300">
                            정의역
                        </p>

                        <BlockMath
                            math={String.raw`
                                X=\{x\mid x\ge a\}
                            `}
                        />
                    </div>

                    {/* 공역 */}
                    <div className="rounded-xl border border-violet-500/20 bg-violet-500/5 p-5">
                        <p className="mb-3 text-center font-bold text-violet-300">
                            공역
                        </p>

                        <BlockMath
                            math={String.raw`
                                Y=\{y\mid y\ge a-3\}
                            `}
                        />
                    </div>

                    {/* y=x-3 토글 */}
                    <button
                        type="button"
                        onClick={() =>
                            setShowGuide((prev) => !prev)
                        }
                        className={`w-full rounded-xl border p-4 text-center font-bold transition ${showGuide
                            ? "border-yellow-400/40 bg-yellow-400/10 text-yellow-300"
                            : "border-white/10 bg-white/5 text-gray-400"
                            }`}
                    >
                        <InlineMath math="y=x-3" />{" "}
                        {showGuide ? "숨기기" : "보이기"}
                    </button>

                    {/* a 슬라이더 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="mb-4 flex items-center justify-between">
                            <span className="font-bold text-white">
                                <InlineMath math="a" /> 값
                            </span>

                            <span className="rounded-lg bg-black/40 px-3 py-2 font-bold text-yellow-300">
                                <InlineMath
                                    math={`a=${a.toFixed(1)}`}
                                />
                            </span>
                        </div>

                        <input
                            type="range"
                            min="-1"
                            max="5"
                            step="0.1"
                            value={a}
                            onChange={(e) =>
                                setA(
                                    Number(e.target.value)
                                )
                            }
                            className="w-full"
                        />

                        <div className="mt-2 flex justify-between text-sm text-gray-500">
                            <span>-1</span>
                            <span>1.5</span>
                            <span>3</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>


                {/* 오른쪽 그래프 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <svg
                        viewBox={`0 0 ${width} ${height}`}
                        className="w-full"
                    >
                        {/* 공역 영역 y >= a-3 */}
                        <rect
                            x={paddingLeft}
                            y={paddingTop}
                            width={graphWidth}
                            height={Math.max(
                                0,
                                codomainBoundaryY -
                                paddingTop
                            )}
                            className="fill-violet-400/5"
                        />

                        {/* 정의역 영역 x >= a */}
                        <rect
                            x={domainStartX}
                            y={paddingTop}
                            width={Math.max(
                                0,
                                width -
                                paddingRight -
                                domainStartX
                            )}
                            height={graphHeight}
                            className="fill-cyan-400/5"
                        />

                        {/* x축 */}
                        <line
                            x1={paddingLeft}
                            y1={xAxisY}
                            x2={
                                width -
                                paddingRight
                            }
                            y2={xAxisY}
                            stroke="currentColor"
                            className="text-gray-500"
                            strokeWidth="1.5"
                        />

                        {/* y축 */}
                        <line
                            x1={yAxisX}
                            y1={paddingTop}
                            x2={yAxisX}
                            y2={
                                height -
                                paddingBottom
                            }
                            stroke="currentColor"
                            className="text-gray-500"
                            strokeWidth="1.5"
                        />

                        {/* 정의역 경계 x=a */}
                        {a >= xMin &&
                            a <= xMax && (
                                <>
                                    <line
                                        x1={toSvgX(a)}
                                        y1={
                                            paddingTop
                                        }
                                        x2={toSvgX(a)}
                                        y2={
                                            height -
                                            paddingBottom
                                        }
                                        stroke="currentColor"
                                        className="text-cyan-300/70"
                                        strokeWidth="1.5"
                                        strokeDasharray="6 6"
                                    />

                                    {/* 정의역 경계 라벨 x=a */}
                                    <foreignObject
                                        x={toSvgX(a)}
                                        y={height - paddingBottom - 30}
                                        width="110"
                                        height="32"
                                        style={{ overflow: "visible" }}
                                    >
                                        <div className="flex h-full items-center text-3xl font-semibold text-cyan-300">
                                            <InlineMath math="x=a" />
                                        </div>
                                    </foreignObject>
                                </>
                            )}

                        {/* 공역 경계 y=a-3 */}
                        {codomainMin >= yMin &&
                            codomainMin <=
                            yMax && (
                                <>
                                    <line
                                        x1={
                                            paddingLeft
                                        }
                                        y1={toSvgY(
                                            codomainMin
                                        )}
                                        x2={
                                            width -
                                            paddingRight
                                        }
                                        y2={toSvgY(
                                            codomainMin
                                        )}
                                        stroke="currentColor"
                                        className="text-violet-300/70"
                                        strokeWidth="1.5"
                                        strokeDasharray="6 6"
                                    />

                                    {/* 공역 경계 라벨 y=a-3 */}
                                    <foreignObject
                                        x={paddingLeft}
                                        y={toSvgY(codomainMin) - 32}
                                        width="150"
                                        height="32"
                                        style={{ overflow: "visible" }}
                                    >
                                        <div className="flex h-full items-center text-3xl font-semibold text-violet-300">
                                            <InlineMath math="y=a-3" />
                                        </div>
                                    </foreignObject>
                                </>
                            )}

                        {/* 실제 치역의 경계 */}
                        {rangeMin >= yMin &&
                            rangeMin <= yMax && (
                                <line
                                    x1={
                                        width -
                                        paddingRight -
                                        95
                                    }
                                    y1={rangeBoundaryY}
                                    x2={
                                        width -
                                        paddingRight
                                    }
                                    y2={rangeBoundaryY}
                                    stroke="currentColor"
                                    className="text-green-300/70"
                                    strokeWidth="2"
                                />
                            )}

                        {/* 보조선 y=x-3 */}
                        {showGuide && (
                            <polyline
                                points={guidePoints.join(
                                    " "
                                )}
                                fill="none"
                                stroke="currentColor"
                                className="text-yellow-300/70"
                                strokeWidth="2"
                                strokeDasharray="7 6"
                            />
                        )}

                        {/* 포물선 전체 */}
                        <polyline
                            points={parabolaPoints.join(
                                " "
                            )}
                            fill="none"
                            stroke="currentColor"
                            className="text-gray-600"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* 정의역에 해당하는 포물선 */}
                        <polyline
                            points={activePoints.join(
                                " "
                            )}
                            fill="none"
                            stroke="currentColor"
                            className="text-cyan-300"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />

                        {/* 꼭짓점 */}
                        <circle
                            cx={toSvgX(vertexX)}
                            cy={toSvgY(vertexY)}
                            r="4"
                            fill="currentColor"
                            className="text-gray-400"
                        />

                        <text
                            x={
                                toSvgX(vertexX) + 8
                            }
                            y={
                                toSvgY(vertexY) + 20
                            }
                            fill="currentColor"
                            className="text-gray-400"
                            fontSize="24"
                        >
                            꼭짓점
                        </text>

                        {/* 정의역 시작점 */}
                        {a >= xMin &&
                            a <= xMax &&
                            f(a) >= yMin &&
                            f(a) <= yMax && (
                                <>
                                    <circle
                                        cx={toSvgX(a)}
                                        cy={toSvgY(
                                            f(a)
                                        )}
                                        r="6"
                                        fill="currentColor"
                                        className="text-yellow-300"
                                    />

                                    <text
                                        x={
                                            toSvgX(a) +
                                            10
                                        }
                                        y={
                                            toSvgY(
                                                f(a)
                                            ) - 10
                                        }
                                        fill="currentColor"
                                        className="text-yellow-300"
                                        fontSize="35"
                                    >
                                        A
                                    </text>
                                </>
                            )}

                        {/* 축 라벨 */}
                        <text
                            x={
                                width -
                                paddingRight -
                                5
                            }
                            y={xAxisY - 8}
                            fill="currentColor"
                            className="text-gray-300"
                            fontSize="26"
                        >
                            x
                        </text>

                        <text
                            x={yAxisX + 8}
                            y={paddingTop + 15}
                            fill="currentColor"
                            className="text-gray-300"
                            fontSize="26"
                        >
                            y
                        </text>
                    </svg>

                    {/* 범례 */}
                    <div className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
                        <span className="text-cyan-300">
                            ■ 정의역{" "}
                            <InlineMath math="x\ge a" />
                        </span>

                        <span className="text-violet-300">
                            ■ 공역{" "}
                            <InlineMath math="y\ge a-3" />
                        </span>

                        <span className="text-green-300">
                            ━ 실제 치역의 시작
                        </span>
                    </div>
                </div>
            </div>


            {/* 설명 / 판정 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-6">
                <div className="grid gap-5 md:grid-cols-3">

                    {/* 일대일 판정 */}
                    <div>
                        <p className="mb-3 font-bold text-white">
                            ① 일대일함수
                        </p>

                        <BlockMath
                            math={String.raw`
                                a\ge\frac32
                            `}
                        />

                        <p
                            className={`text-center font-bold ${isOneToOne
                                ? "text-green-300"
                                : "text-red-300"
                                }`}
                        >
                            {isOneToOne
                                ? "조건 만족 ○"
                                : "조건 불만족 ×"}
                        </p>
                    </div>

                    {/* 치역과 공역 */}
                    <div>
                        <p className="mb-3 font-bold text-white">
                            ② 치역과 공역
                        </p>

                        <div className="space-y-2 text-center text-gray-300">
                            <p>
                                치역 시작값{" "}
                                <InlineMath
                                    math={rangeMin.toFixed(
                                        2
                                    )}
                                />
                            </p>

                            <p>
                                공역 시작값{" "}
                                <InlineMath
                                    math={codomainMin.toFixed(
                                        2
                                    )}
                                />
                            </p>
                        </div>

                        <p
                            className={`mt-3 text-center font-bold ${isRangeEqual
                                ? "text-green-300"
                                : "text-red-300"
                                }`}
                        >
                            {isRangeEqual
                                ? "치역 = 공역 ○"
                                : "치역 ≠ 공역 ×"}
                        </p>
                    </div>

                    {/* 최종 판정 */}
                    <div>
                        <p className="mb-3 font-bold text-white">
                            ③ 일대일대응
                        </p>

                        <div
                            className={`rounded-xl border p-4 ${isBijection
                                ? "border-green-500/30 bg-green-500/5"
                                : "border-red-500/30 bg-red-500/5"
                                }`}
                        >
                            <p
                                className={`text-center text-lg font-bold ${isBijection
                                    ? "text-green-300"
                                    : "text-red-300"
                                    }`}
                            >
                                {isBijection
                                    ? "일대일대응 ○"
                                    : "일대일대응 ×"}
                            </p>
                        </div>
                    </div>
                </div>

                {/* 현재 상태 설명 */}
                <div className="mt-5 border-t border-white/10 pt-5">
                    {a < vertexX && (
                        <p className="text-center leading-8 text-gray-300">
                            <InlineMath math="\displaystyle a<\frac32" />이므로
                            정의역이 포물선의 꼭짓점 양쪽을 포함합니다.
                            같은 함숫값을 갖는 서로 다른{" "}
                            <InlineMath math="x" />가 존재하므로
                            일대일함수가 아닙니다.
                        </p>
                    )}

                    {a >= vertexX &&
                        !isRangeEqual && (
                            <p className="text-center leading-8 text-gray-300">
                                정의역은 꼭짓점의 오른쪽에 있어
                                일대일함수이지만, 정의역의 시작점에서의
                                함숫값{" "}
                                <InlineMath
                                    math={`f(a)=${f(
                                        a
                                    ).toFixed(2)}`}
                                />{" "}
                                과 공역의 시작값{" "}
                                <InlineMath
                                    math={`a-3=${codomainMin.toFixed(
                                        2
                                    )}`}
                                />{" "}
                                이 서로 다르므로 치역과 공역이
                                같지 않습니다.
                            </p>
                        )}

                    {isBijection && (
                        <p className="text-center leading-8 text-green-300">
                            정의역에서 함수가 한 방향으로 증가하고,{" "}
                            <InlineMath math="f(a)=a-3" />이므로
                            치역과 공역의 시작점이 일치합니다.
                            따라서 일대일대응입니다.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function FunctionBasicsPage() {
    return (
        <>
            {/* 3.1 함수의 뜻 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    3.1 함수의 뜻
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합의 원소 사이의 대응을 알아보고,
                    함수의 뜻과 정의역, 공역, 치역을 이해합니다.
                    또한 함수를 기호와 그래프로 나타내는 방법을 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합의 원소를 서로 짝지어 주는 것을
                            <span className="font-bold text-yellow-300"> 대응</span>이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            집합 <InlineMath math="X" />의 원소 <InlineMath math="x" />를
                            집합 <InlineMath math="Y" />의 원소 <InlineMath math="y" />와
                            짝지어 주는 경우,{" "}
                            <InlineMath math="x" />가 <InlineMath math="y" />에
                            대응한다고 하고
                        </p>

                        <BlockMath math={String.raw`
                x\longrightarrow y
            `} />

                        <p className="leading-8 text-gray-300">
                            와 같이 나타냅니다.
                        </p>
                    </div>


                    {/* 2. 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합 <InlineMath math="X,\ Y" /> 사이의 대응에서
                            집합 <InlineMath math="X" />의
                            <span className="font-bold text-yellow-300"> 모든 원소</span>가
                            빠짐없이 집합 <InlineMath math="Y" />의 원소
                            <span className="font-bold text-yellow-300"> 하나씩</span>에
                            대응할 때, 이 대응을
                            <span className="font-bold text-yellow-300"> 함수</span>라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        \text{정의역의 각 원소가 빠짐없이 하나의 원소에 대응}
                    }
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 함수가 되기 위해서는 다음 두 조건이 모두 필요합니다.
                        </p>

                        <div className="mt-4 space-y-2 text-gray-300">
                            <p className="leading-8">
                                ① 정의역의 모든 원소가 <span className="font-bold text-white">빠짐없이</span> 대응해야 합니다.
                            </p>

                            <p className="leading-8">
                                ② 정의역의 각 원소에는 <span className="font-bold text-white">하나의 값만</span> 대응해야 합니다.
                            </p>
                        </div>
                    </div>


                    {/* 3. 함수인 대응과 함수가 아닌 대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 함수인 대응과 함수가 아닌 대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            대응 그림에서 집합 <InlineMath math="X" />의 각 원소가
                            어떻게 대응하는지를 확인하면 함수인지 판별할 수 있습니다.
                        </p>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">

                            {/* 함수 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 text-center text-lg font-bold text-green-300">
                                    함수 ○
                                </p>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.1_02.png"
                                        alt="각 원소가 하나씩 대응하는 함수"
                                        className="w-full max-w-[300px] rounded-lg"
                                    />
                                </div>

                                <p className="mt-4 leading-8 text-gray-300">
                                    집합 <InlineMath math="X" />의 모든 원소가
                                    각각 하나의 원소에 대응하므로 함수입니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    공역에 대응받지 않는 원소가 있어도 함수가 될 수 있습니다.
                                </p>
                            </div>


                            {/* 여러 원소가 같은 값에 대응 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="mb-4 text-center text-lg font-bold text-green-300">
                                    함수 ○
                                </p>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.1_03.png"
                                        alt="서로 다른 원소가 같은 원소에 대응하는 함수"
                                        className="w-full max-w-[300px] rounded-lg"
                                    />
                                </div>

                                <p className="mt-4 leading-8 text-gray-300">
                                    서로 다른 원소가 같은 원소에 대응해도 함수가 될 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                        1\longrightarrow a,
                        \qquad
                        2\longrightarrow a
                    `} />

                                <p className="leading-8 text-gray-300">
                                    중요한 것은 각각의 원소에 대응하는 값이
                                    하나씩이라는 것입니다.
                                </p>
                            </div>


                            {/* 하나가 두 값에 대응 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <p className="mb-4 text-center text-lg font-bold text-red-300">
                                    함수가 아님 ×
                                </p>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.1_04.png"
                                        alt="하나의 원소가 두 원소에 대응하여 함수가 아닌 경우"
                                        className="w-full max-w-[300px] rounded-lg"
                                    />
                                </div>

                                <p className="mt-4 leading-8 text-gray-300">
                                    하나의 원소 <InlineMath math="2" />가
                                    두 원소 <InlineMath math="b,\ c" />에 대응합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    하나의 원소에는 하나의 값만 대응해야 하므로
                                    함수가 아닙니다.
                                </p>
                            </div>


                            {/* 대응하지 않는 원소 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <p className="mb-4 text-center text-lg font-bold text-red-300">
                                    함수가 아님 ×
                                </p>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/3.1_05.png"
                                        alt="정의역의 원소가 빠져 있어 함수가 아닌 경우"
                                        className="w-full max-w-[300px] rounded-lg"
                                    />
                                </div>

                                <p className="mt-4 leading-8 text-gray-300">
                                    집합 <InlineMath math="X" />의 원소{" "}
                                    <InlineMath math="3" />에 대응하는 원소가 없습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    정의역의 모든 원소가 빠짐없이 대응해야 하므로
                                    함수가 아닙니다.
                                </p>
                            </div>

                        </div>
                    </div>


                    {/* 4. 정의역, 공역, 치역 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 정의역, 공역, 치역
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수에는 출발하는 원소의 집합과 도착하는 원소의 집합이 있습니다.
                        </p>

                        <div className="mt-5 space-y-4 text-gray-300">
                            <p className="leading-8">
                                <span className="font-bold text-yellow-300">정의역</span> :
                                함수에서 <span className="font-bold text-white">~에서</span>에
                                해당하는 집합으로, 출발하는 원소의 집합입니다.
                            </p>

                            <p className="leading-8">
                                <span className="font-bold text-yellow-300">공역</span> :
                                함수에서 <span className="font-bold text-white">~로의</span>에
                                해당하는 집합으로, 도착하는 원소의 집합입니다.
                            </p>

                            <p className="leading-8">
                                <span className="font-bold text-yellow-300">치역</span> :
                                정의역의 원소와 실제로 짝지어진 원소들의 집합,
                                즉 함숫값의 집합입니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{\text{치역}\subset\text{공역}}
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            공역의 모든 원소가 반드시 정의역의 원소와
                            대응할 필요는 없으므로 치역과 공역은 서로 다를 수 있습니다.
                        </p>
                    </div>


                    {/* 5. 함수의 표현과 해석 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 함수의 표현과 해석
                        </h3>

                        <div className="grid gap-6 md:grid-cols-[1fr_340px] md:items-center">

                            <div>
                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="X" />에서 집합{" "}
                                    <InlineMath math="Y" />로의 함수를{" "}
                                    <InlineMath math="f" />라고 할 때
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{f:X\longrightarrow Y}
                    `} />

                                <p className="leading-8 text-gray-300">
                                    와 같이 나타냅니다.
                                </p>

                                <div className="mt-5 space-y-4">
                                    <div>
                                        <BlockMath math={String.raw`
                                f:X\longrightarrow Y
                            `} />
                                        <p className="text-center leading-8 text-gray-300">
                                            <InlineMath math="X" />에서{" "}
                                            <InlineMath math="Y" />로의 함수{" "}
                                            <InlineMath math="f" />
                                        </p>
                                    </div>

                                    <div>
                                        <BlockMath math={String.raw`
                                g:A\longrightarrow A
                            `} />
                                        <p className="text-center leading-8 text-gray-300">
                                            <InlineMath math="A" />에서{" "}
                                            <InlineMath math="A" />로의 함수{" "}
                                            <InlineMath math="g" />
                                        </p>
                                    </div>

                                    <div>
                                        <BlockMath math={String.raw`
                                h:\mathbb{N}\longrightarrow\mathbb{R}
                            `} />
                                        <p className="text-center leading-8 text-gray-300">
                                            자연수의 집합에서 실수의 집합으로의 함수{" "}
                                            <InlineMath math="h" />
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center">
                                <img
                                    src="/images/commonMath2/3.1_01.png"
                                    alt="함수 f에 의한 대응"
                                    className="w-full max-w-[320px] rounded-lg"
                                />
                            </div>

                        </div>
                    </div>


                    {/* 6. 함숫값 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            6. 함숫값
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수 <InlineMath math="f" />에 의하여
                            정의역의 원소 <InlineMath math="x" />에 대응하는 값을{" "}
                            <InlineMath math="f(x)" />로 나타내고,
                            이를 <InlineMath math="x" />에서의
                            <span className="font-bold text-yellow-300"> 함숫값</span>이라고 합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{x\longrightarrow f(x)}
            `} />

                        <p className="leading-8 text-gray-300">
                            예를 들어 함수 <InlineMath math="f" />에 의하여{" "}
                            <InlineMath math="3" />이 <InlineMath math="5" />에
                            대응한다면
                        </p>

                        <BlockMath math={String.raw`
                3\longrightarrow5
                \qquad\Longleftrightarrow\qquad
                f(3)=5
            `} />

                        <p className="leading-8 text-gray-300">
                            로 나타냅니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            즉, <InlineMath math="f(3)=5" />는{" "}
                            <InlineMath math="3" />이 함수 <InlineMath math="f" />에
                            의하여 <InlineMath math="5" />에 대응한다는 뜻입니다.
                        </p>
                    </div>


                    {/* 7. 정의역, 공역, 치역의 예 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            7. 정의역, 공역, 치역의 예
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath math={String.raw`
                X=\{1,2,3\},
                \qquad
                Y=\{1,2,3,4,5\}
            `} />

                        <p className="leading-8 text-gray-300">
                            에 대하여 함수
                        </p>

                        <BlockMath math={String.raw`
                f:X\longrightarrow Y,
                \qquad
                f(x)=2x-1
            `} />

                        <p className="leading-8 text-gray-300">
                            이 주어졌다고 하겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            정의역의 각 원소에 대한 함숫값을 구하면
                        </p>

                        <BlockMath math={String.raw`
                f(1)=1,\qquad
                f(2)=3,\qquad
                f(3)=5
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <div className="mt-5 space-y-3 text-gray-300">
                            <p className="leading-8">
                                정의역 :{" "}
                                <InlineMath math="\{1,2,3\}" />
                            </p>

                            <p className="leading-8">
                                공역 :{" "}
                                <InlineMath math="\{1,2,3,4,5\}" />
                            </p>

                            <p className="leading-8">
                                치역 :{" "}
                                <InlineMath math="\{1,3,5\}" />
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            일반적으로 함수 <InlineMath math="f:X\to Y" />의 치역은
                        </p>

                        <BlockMath math={String.raw`
                \boxed{\{f(x)\mid x\in X\}}
            `} />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있습니다.
                        </p>
                    </div>


                    {/* 8. 함수의 그래프 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            8. 함수의 그래프
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수
                        </p>

                        <BlockMath math={String.raw`
                y=f(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            에서 정의역의 원소 <InlineMath math="x" />에
                            대응하는 함숫값은 <InlineMath math="f(x)" />입니다.
                        </p>

                        <BlockMath math={String.raw`
                x\longrightarrow f(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            좌표평면의 점은 <InlineMath math="(x,y)" />로 나타내므로
                            이 대응은 좌표평면에서
                        </p>

                        <BlockMath math={String.raw`
                \boxed{(x,f(x))}
            `} />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 함수 <InlineMath math="y=f(x)" />의 그래프는
                            정의역의 각 원소 <InlineMath math="x" />에 대하여
                            점 <InlineMath math="(x,f(x))" />를 좌표평면 위에
                            나타낸 것입니다.
                        </p>
                    </div>


                    {/* 9. 식의 형태와 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            9. 식의 형태와 함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수가 되려면 하나의 <InlineMath math="x" />에
                            하나의 <InlineMath math="y" />가 대응해야 합니다.
                        </p>

                        <div className="mt-6 space-y-5">

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <BlockMath math={String.raw`
                        \boxed{y=f(x)}
                    `} />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />의 값이 하나 정해지면{" "}
                                    <InlineMath math="y=f(x)" />의 값도 하나로 정해지므로
                                    <span className="font-bold text-green-300"> 함수</span>입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <BlockMath math={String.raw`
                        y^2=f(x)
                    `} />

                                <p className="leading-8 text-gray-300">
                                    하나의 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="y" />의 값이 두 개가 될 수 있으므로
                                    일반적으로 <span className="font-bold text-red-300">함수가 아닙니다.</span>
                                </p>

                                <BlockMath math={String.raw`
                        y=\pm\sqrt{f(x)}
                    `} />
                            </div>

                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <BlockMath math={String.raw`
                        |y|=f(x)
                    `} />

                                <p className="leading-8 text-gray-300">
                                    하나의 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="y" />의 값이 두 개가 될 수 있으므로
                                    일반적으로 <span className="font-bold text-red-300">함수가 아닙니다.</span>
                                </p>

                                <BlockMath math={String.raw`
                        y=\pm f(x)
                    `} />
                            </div>

                        </div>
                    </div>


                    {/* 10. 그래프에서 함수의 판별 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            10. 그래프에서 함수의 판별
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수에서는 정의역의 모든 <InlineMath math="x" />에 대하여
                            하나의 <InlineMath math="y" />가 빠짐없이 대응해야 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 좌표평면에서 정의역에 속하는 하나의{" "}
                            <InlineMath math="x" />값을 정하고 세로선을 그었을 때,
                            그 세로선은 함수의 그래프와
                            <span className="font-bold text-yellow-300"> 정확히 한 점</span>에서
                            만나야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{정의역의 각 }x\text{에서 그은 세로선이 그래프와 정확히 한 점에서 만난다.}
                }
            `} />

                        <div className="mt-6 space-y-3 text-gray-300">
                            <p className="leading-8">
                                • 세로선과 <span className="font-bold text-green-300">한 점</span>에서 만남
                                → 하나의 <InlineMath math="x" />에 하나의 <InlineMath math="y" />
                                → 함수
                            </p>

                            <p className="leading-8">
                                • 세로선과 <span className="font-bold text-red-300">두 점 이상</span>에서 만남
                                → 하나의 <InlineMath math="x" />에 여러 개의 <InlineMath math="y" />
                                → 함수가 아님
                            </p>

                            <p className="leading-8">
                                • 정의역에 속하는 <InlineMath math="x" />에서 세로선이 그래프와
                                <span className="font-bold text-red-300"> 만나지 않음</span>
                                → 대응하는 <InlineMath math="y" />가 없음
                                → 함수가 아님
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                세로선 판별
                            </p>

                            <p className="leading-8 text-gray-300">
                                그래프가 함수인지 판단할 때는 세로선을 그어
                                하나의 <InlineMath math="x" />에 몇 개의{" "}
                                <InlineMath math="y" />가 대응하는지 확인합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        x\text{ 하나}\longleftrightarrow y\text{ 하나}
                    }
                `} />
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 집합{" "}
                                <InlineMath math="X=\{0,1,2\}" />,{" "}
                                <InlineMath math="Y=\{0,1,2,3\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                함수인 것만을 보기에서 있는 대로 고르시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-4 font-bold text-gray-200">보기</p>

                                <div className="grid gap-4 md:grid-cols-3">
                                    <div>
                                        ㄱ. <InlineMath math="f(x)=3-x" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="g(x)=|x-1|" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="h(x)=x^2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                    함수가 되려면 정의역 <InlineMath math="X" />의 모든 원소에
                                    대한 함숫값이 하나씩 정해지고, 그 값이 모두 공역{" "}
                                    <InlineMath math="Y" />에 속해야 합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄱ. <InlineMath math="f(x)=3-x" />
                                </p>

                                <BlockMath math={String.raw`
                f(0)=3,\qquad
                f(1)=2,\qquad
                f(2)=1
            `} />

                                <p className="leading-8">
                                    함숫값 <InlineMath math="3,\ 2,\ 1" />이 모두{" "}
                                    <InlineMath math="Y" />의 원소이므로{" "}
                                    <span className="font-bold text-green-300">함수입니다.</span>
                                </p>

                                <p className="font-bold text-white">
                                    ㄴ. <InlineMath math="g(x)=|x-1|" />
                                </p>

                                <BlockMath math={String.raw`
                g(0)=1,\qquad
                g(1)=0,\qquad
                g(2)=1
            `} />

                                <p className="leading-8">
                                    함숫값 <InlineMath math="1,\ 0,\ 1" />이 모두{" "}
                                    <InlineMath math="Y" />의 원소이므로{" "}
                                    <span className="font-bold text-green-300">함수입니다.</span>
                                </p>

                                <p className="leading-8">
                                    이때 서로 다른 두 원소 <InlineMath math="0,\ 2" />가
                                    같은 원소 <InlineMath math="1" />에 대응하지만,
                                    각각의 원소에 대응하는 값은 하나이므로 함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄷ. <InlineMath math="h(x)=x^2" />
                                </p>

                                <BlockMath math={String.raw`
                h(0)=0,\qquad
                h(1)=1,\qquad
                h(2)=4
            `} />

                                <p className="leading-8">
                                    <InlineMath math="h(2)=4" />인데{" "}
                                    <InlineMath math="4\notin Y" />이므로{" "}
                                    <InlineMath math="2" />에 대응하는 공역{" "}
                                    <InlineMath math="Y" />의 원소가 없습니다.
                                    따라서 <span className="font-bold text-red-300">함수가 아닙니다.</span>
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    {\text{ㄱ, ㄴ}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                        함수인지 확인할 때는 정의역의 모든 원소를 식에 대입하여
                                        각각의 함숫값이 하나씩 정해지고 그 값이 모두 공역에
                                        속하는지 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        x\in X
                        \quad\Longrightarrow\quad
                        f(x)\in Y
                    }
                `} />

                                    <p className="leading-8">
                                        서로 다른 정의역의 원소가 같은 공역의 원소에
                                        대응하는 것은 함수의 조건에 어긋나지 않습니다.
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
                                집합 <InlineMath math="X=\{-1,0,1\}" />에 대하여
                                다음 대응 중 <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                함수가 아닌 것은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="x\longmapsto x" />
                                </div>
                                <div>
                                    ② <InlineMath math="x\longmapsto |x|+1" />
                                </div>
                                <div>
                                    ③ <InlineMath math="x\longmapsto x^2-|x|+1" />
                                </div>
                                <div>
                                    ④ <InlineMath math="x\longmapsto -x^2+1" />
                                </div>
                                <div>
                                    ⑤ <InlineMath math="x\longmapsto x^3" />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수가 되려면 <InlineMath math="X" />의 모든 원소를
                                    대응시켰을 때 그 값이 모두 다시 <InlineMath math="X" />에
                                    속해야 합니다.
                                </p>

                                <p className="leading-8">
                                    ① <InlineMath math="x\longmapsto x" />
                                </p>

                                <BlockMath math={String.raw`
                -1\longmapsto-1,\qquad
                0\longmapsto0,\qquad
                1\longmapsto1
            `} />

                                <p className="leading-8">
                                    대응하는 값이 모두 <InlineMath math="X" />에 속하므로
                                    함수입니다.
                                </p>

                                <p className="leading-8">
                                    ② <InlineMath math="x\longmapsto |x|+1" />
                                </p>

                                <BlockMath math={String.raw`
                -1\longmapsto2,\qquad
                0\longmapsto1,\qquad
                1\longmapsto2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="2\notin X" />이므로
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수가 아닙니다.
                                </p>

                                <p className="leading-8">
                                    ③ <InlineMath math="x\longmapsto x^2-|x|+1" />
                                </p>

                                <BlockMath math={String.raw`
                -1\longmapsto1,\qquad
                0\longmapsto1,\qquad
                1\longmapsto1
            `} />

                                <p className="leading-8">
                                    대응하는 값이 모두 <InlineMath math="X" />에 속하므로
                                    함수입니다.
                                </p>

                                <p className="leading-8">
                                    ④ <InlineMath math="x\longmapsto -x^2+1" />
                                </p>

                                <BlockMath math={String.raw`
                -1\longmapsto0,\qquad
                0\longmapsto1,\qquad
                1\longmapsto0
            `} />

                                <p className="leading-8">
                                    대응하는 값이 모두 <InlineMath math="X" />에 속하므로
                                    함수입니다.
                                </p>

                                <p className="leading-8">
                                    ⑤ <InlineMath math="x\longmapsto x^3" />
                                </p>

                                <BlockMath math={String.raw`
                -1\longmapsto-1,\qquad
                0\longmapsto0,\qquad
                1\longmapsto1
            `} />

                                <p className="leading-8">
                                    대응하는 값이 모두 <InlineMath math="X" />에 속하므로
                                    함수입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    {②}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                        함수에서는 정의역과 공역이 모두 <InlineMath math="X" />입니다.
                                        따라서 모든 <InlineMath math="x\in X" />에 대하여
                                        대응하는 값도 반드시 <InlineMath math="X" />의 원소이어야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{x\in X\quad\Longrightarrow\quad f(x)\in X}
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
                                실수 전체의 집합에서 정의된 함수 <InlineMath math="f" />가
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            -2x & (x\text{는 유리수})\\
            x-3 & (x\text{는 무리수})
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때,{" "}
                                <InlineMath math="f(2)+\sqrt{3}\,f(\sqrt{3}+2)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="2" />는 유리수이므로
                                    첫 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                f(2)=-2\cdot2=-4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{3}+2" />는 무리수이므로
                                    두 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(\sqrt{3}+2)
                &=(\sqrt{3}+2)-3\\
                &=\sqrt{3}-1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2)+\sqrt{3}\,f(\sqrt{3}+2)
                &=-4+\sqrt{3}(\sqrt{3}-1)\\
                &=-4+3-\sqrt{3}\\
                &=-1-\sqrt{3}
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-1-\sqrt{3}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        대응규칙이 입력값의 종류에 따라 다르게 주어졌으므로,
                                        먼저 입력값이 유리수인지 무리수인지 판단한 뒤
                                        알맞은 대응규칙을 적용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        2\text{는 유리수},
                        \qquad
                        \sqrt{3}+2\text{는 무리수}
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
                                두 집합{" "}
                                <InlineMath math="X=\{15,16,17,18,19\}" />,{" "}
                                <InlineMath math="Y=\{y\mid y\text{는 자연수}\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="Y" />로의 함수{" "}
                                <InlineMath math="f" />를
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x\text{의 양의 약수의 개수}
        `} />

                            <p className="leading-8 text-gray-200">
                                로 정의할 때, 함수 <InlineMath math="f" />의 치역의 모든 원소의
                                합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    정의역의 각 원소에 대하여 양의 약수의 개수를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                15=3\cdot5
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(15)=(1+1)(1+1)=4
            `} />

                                <BlockMath math={String.raw`
                16=2^4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(16)=4+1=5
            `} />

                                <p className="leading-8">
                                    <InlineMath math="17" />은 소수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(17)=2
            `} />

                                <BlockMath math={String.raw`
                18=2\cdot3^2
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(18)=(1+1)(2+1)=6
            `} />

                                <p className="leading-8">
                                    <InlineMath math="19" />도 소수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(19)=2
            `} />

                                <p className="leading-8">
                                    따라서 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                4,\ 5,\ 2,\ 6,\ 2
            `} />

                                <p className="leading-8">
                                    이고, 치역에서는 같은 원소를 한 번만 쓰므로
                                </p>

                                <BlockMath math={String.raw`
                \text{치역}=\{2,4,5,6\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 치역의 모든 원소의 합은
                                </p>

                                <BlockMath math={String.raw`
                2+4+5+6=17
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{17}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        치역은 정의역의 원소에 실제로 대응하는 함숫값의 집합입니다.
                                        따라서 먼저 모든 함숫값을 구한 뒤,
                                        같은 값이 여러 번 나오더라도 치역에서는 한 번만 적습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(15)=4,\quad
                    f(16)=5,\quad
                    f(17)=2,\quad
                    f(18)=6,\quad
                    f(19)=2
                `} />

                                    <BlockMath math={String.raw`
                    \boxed{\text{치역}=\{2,4,5,6\}}
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
                                다음 중 실수 전체의 집합 <InlineMath math="\mathbb{R}" />에 대하여{" "}
                                <InlineMath math="\mathbb{R}" />에서 <InlineMath math="\mathbb{R}" />로의
                                함수의 그래프가 아닌 것은?
                            </p>

                            <div className="mt-6 grid gap-6 md:grid-cols-3">
                                <div>
                                    <p className="mb-3 font-bold text-gray-200">①</p>
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/commonMath2/3.1_5_01.png"
                                            alt="예제 5의 그래프 1"
                                            className="w-full max-w-[300px] rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-gray-200">②</p>
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/commonMath2/3.1_5_02.png"
                                            alt="예제 5의 그래프 2"
                                            className="w-full max-w-[300px] rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-gray-200">③</p>
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/commonMath2/3.1_5_03.png"
                                            alt="예제 5의 그래프 3"
                                            className="w-full max-w-[300px] rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-gray-200">④</p>
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/commonMath2/3.1_5_04.png"
                                            alt="예제 5의 그래프 4"
                                            className="w-full max-w-[300px] rounded-lg"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <p className="mb-3 font-bold text-gray-200">⑤</p>
                                    <div className="flex justify-center">
                                        <img
                                            src="/images/commonMath2/3.1_5_05.png"
                                            alt="예제 5의 그래프 5"
                                            className="w-full max-w-[300px] rounded-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수의 그래프에서는 하나의 <InlineMath math="x" />에
                                    하나의 <InlineMath math="y" />만 대응해야 합니다.
                                    따라서 각 그래프에 세로선을 그어 함수인지 확인합니다.
                                </p>

                                <p className="leading-8">
                                    ①~④의 그래프는 정의역의 각 <InlineMath math="x" />에서
                                    그은 세로선과 그래프가 한 점에서만 만나므로
                                    함수의 그래프입니다.
                                </p>

                                <p className="leading-8">
                                    그러나 ⑤의 그래프에서는 예를 들어{" "}
                                    <InlineMath math="x=0" />일 때 세로선이 그래프와
                                    두 점에서 만납니다.
                                </p>

                                <BlockMath math={String.raw`
                (0,-1),\qquad(0,0)
            `} />

                                <p className="leading-8">
                                    즉, 하나의 <InlineMath math="x=0" />에 대하여{" "}
                                    <InlineMath math="y=-1" />과 <InlineMath math="y=0" />의
                                    두 값이 대응하므로 함수의 그래프가 아닙니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    {⑤}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        그래프가 함수인지 판별할 때는
                                        <span className="font-bold text-white"> 세로선 판별</span>을
                                        이용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{하나의 }x
                        \text{에서 그은 세로선이 그래프와 한 점에서만 만나야 한다.}
                    }
                `} />

                                    <p className="leading-8">
                                        세로선이 그래프와 두 점 이상에서 만나면 하나의{" "}
                                        <InlineMath math="x" />에 여러 개의{" "}
                                        <InlineMath math="y" />가 대응하므로 함수가 아닙니다.
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
                                함수 <InlineMath math="f" />가 실수 전체의 집합에서
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            2x+a & (x\le3)\\
            -x+2 & (x\ge3)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                로 정의될 때,{" "}
                                <InlineMath math="f(4-2\sqrt3)-f(2\sqrt3)" />의 값이{" "}
                                <InlineMath math="p+q\sqrt3" />일 때,{" "}
                                <InlineMath math="p+q" />의 값은?
                                (단, <InlineMath math="a,\ p,\ q" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x=3" />은{" "}
                                    <InlineMath math="x\le3" />과{" "}
                                    <InlineMath math="x\ge3" />에 모두 포함됩니다.
                                    함수 <InlineMath math="f" />가 하나의 함수로 정의되려면{" "}
                                    <InlineMath math="x=3" />에서 두 식의 값이 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                2\cdot3+a=-3+2
            `} />

                                <BlockMath math={String.raw`
                6+a=-1
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=-7
            `} />

                                <p className="leading-8">
                                    입니다. 그러므로 함수는
                                </p>

                                <BlockMath math={String.raw`
                f(x)=
                \begin{cases}
                2x-7 & (x\le3)\\
                -x+2 & (x\ge3)
                \end{cases}
            `} />

                                <p className="leading-8">
                                    로 나타낼 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    이제 두 입력값이 어느 조건에 해당하는지 확인합니다.
                                </p>

                                <BlockMath math={String.raw`
                4-2\sqrt3<3,
                \qquad
                2\sqrt3>3
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="4-2\sqrt3" />에는 첫 번째 식을 적용하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(4-2\sqrt3)
                &=2(4-2\sqrt3)-7\\
                &=8-4\sqrt3-7\\
                &=1-4\sqrt3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="2\sqrt3" />에는 두 번째 식을 적용하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2\sqrt3)
                &=-2\sqrt3+2\\
                &=2-2\sqrt3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(4-2\sqrt3)-f(2\sqrt3)
                &=(1-4\sqrt3)-(2-2\sqrt3)\\
                &=-1-2\sqrt3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                p=-1,\qquad q=-2
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{p+q=-3}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        조각함수에서 두 조건이 같은 값에서 겹치면,
                                        그 값에서 두 대응규칙의 결과가 같아야 하나의 함수가 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x=3
                    \quad\Longrightarrow\quad
                    2\cdot3+a=-3+2
                `} />

                                    <p className="leading-8">
                                        그다음 함숫값을 구할 때는 각각의 입력값이
                                        어느 조건에 속하는지 먼저 확인하여 알맞은 대응규칙을
                                        선택합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 집합{" "}
                                <InlineMath math="X=\{0,1,2,3,4\}" />,{" "}
                                <InlineMath math="Y=\{y\mid y\text{는 정수}\}" />에 대하여 함수
                            </p>

                            <BlockMath math={String.raw`
            f:X\longrightarrow Y
        `} />

                            <p className="leading-8 text-gray-200">
                                를
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2+1\text{을 }4\text{로 나눈 나머지}
        `} />

                            <p className="leading-8 text-gray-200">
                                로 정의할 때, 함수 <InlineMath math="f" />의 치역에 있는
                                모든 원소의 합은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    정의역 <InlineMath math="X" />의 각 원소에 대하여{" "}
                                    <InlineMath math="x^2+1" />을 계산한 뒤,
                                    이를 <InlineMath math="4" />로 나눈 나머지를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x=0&:\quad 0^2+1=1
                &&\Longrightarrow f(0)=1\\
                x=1&:\quad 1^2+1=2
                &&\Longrightarrow f(1)=2\\
                x=2&:\quad 2^2+1=5
                &&\Longrightarrow f(2)=1\\
                x=3&:\quad 3^2+1=10
                &&\Longrightarrow f(3)=2\\
                x=4&:\quad 4^2+1=17
                &&\Longrightarrow f(4)=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                1,\ 2,\ 1,\ 2,\ 1
            `} />

                                <p className="leading-8">
                                    입니다. 치역은 실제로 나오는 함숫값의 집합이므로,
                                    같은 값은 한 번만 나타냅니다.
                                </p>

                                <BlockMath math={String.raw`
                \text{치역}=\{1,2\}
            `} />

                                <p className="leading-8">
                                    따라서 치역에 있는 모든 원소의 합은
                                </p>

                                <BlockMath math={String.raw`
                1+2=3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{3}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        대응규칙이 나머지로 주어진 경우에도 정의역의 각 원소에
                                        대한 함숫값을 구하는 방법은 같습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x
                    \longrightarrow
                    x^2+1
                    \longrightarrow
                    4\text{로 나눈 나머지}
                `} />

                                    <p className="leading-8">
                                        이렇게 얻은 함숫값 중 서로 다른 값만 모으면 치역이 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{\text{치역}=\{1,2\}}
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 8 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 집합{" "}
                                <InlineMath math="X=\{-1,0,1\}" />,{" "}
                                <InlineMath math="Y=\{1,2,3\}" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f(x)=ax^2+(a+1)x+2
        `} />

                            <p className="leading-8 text-gray-200">
                                가 <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                함수가 되도록 하는 모든 상수 <InlineMath math="a" />의 값의
                                합을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                    함수가 되려면 <InlineMath math="X" />의 모든 원소에 대한
                                    함숫값이 <InlineMath math="Y" />에 속해야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="x=-1,\ 0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)
                &=a-(a+1)+2\\
                &=1,\\[4pt]
                f(0)&=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(-1)" />과{" "}
                                    <InlineMath math="f(0)" />은 <InlineMath math="a" />의 값에
                                    관계없이 모두 <InlineMath math="Y" />의 원소입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(1)
                &=a+(a+1)+2\\
                &=2a+3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. <InlineMath math="f(1)" />도{" "}
                                    <InlineMath math="Y=\{1,2,3\}" />의 원소이어야 하므로
                                </p>

                                <BlockMath math={String.raw`
                2a+3=1,\quad 2,\quad 3
            `} />

                                <p className="leading-8">
                                    각각 풀면
                                </p>

                                <BlockMath math={String.raw`
                a=-1,\qquad
                a=-\frac12,\qquad
                a=0
            `} />

                                <p className="leading-8">
                                    따라서 모든 <InlineMath math="a" />의 값의 합은
                                </p>

                                <BlockMath math={String.raw`
                -1-\frac12+0=-\frac32
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-\frac32}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X" />에서 <InlineMath math="Y" />로의
                                        함수라는 것은 정의역의 모든 원소에 대한 함숫값이
                                        반드시 공역 <InlineMath math="Y" /> 안에 있어야 한다는
                                        뜻입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        x\in X
                        \quad\Longrightarrow\quad
                        f(x)\in Y
                    }
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="f(-1)=1" />,{" "}
                                        <InlineMath math="f(0)=2" />가 항상 성립하므로
                                        결국 <InlineMath math="f(1)=2a+3" />이{" "}
                                        <InlineMath math="Y" />의 원소가 되는 조건만 찾으면 됩니다.
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
                                실수 전체의 집합에서 정의된 함수 <InlineMath math="f" />가
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            |x|+2 & (x<0)\\
            x^2-3x-2 & (x\ge0)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="f(a)=8" />을 만족시키는
                                모든 실수 <InlineMath math="a" />의 값의 곱을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="a" />의 값이 어느 범위에 속하는지에 따라
                                    대응규칙이 다르므로 두 경우로 나누어 구합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="a<0" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a<0" />이면{" "}
                                    <InlineMath math="|a|=-a" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(a)&=8\\
                |a|+2&=8\\
                -a+2&=8\\
                a&=-6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="-6<0" />이므로 조건을 만족합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="a\ge0" />인 경우
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(a)&=8\\
                a^2-3a-2&=8\\
                a^2-3a-10&=0\\
                (a-5)(a+2)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=5\quad\text{또는}\quad a=-2
            `} />

                                <p className="leading-8">
                                    이때 <InlineMath math="a\ge0" />이어야 하므로{" "}
                                    <InlineMath math="a=-2" />는 조건에 맞지 않고,{" "}
                                    <InlineMath math="a=5" />만 가능합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(a)=8" />을 만족하는 모든 실수{" "}
                                    <InlineMath math="a" />는
                                </p>

                                <BlockMath math={String.raw`
                -6,\qquad5
            `} />

                                <p className="leading-8">
                                    이므로 그 곱은
                                </p>

                                <BlockMath math={String.raw`
                (-6)\cdot5=-30
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-30}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        조각함수에서 특정 함숫값을 만드는 입력값을 찾을 때는
                                        각 대응규칙에 대하여 방정식을 풀고,
                                        구한 값이 그 대응규칙의 조건을 실제로 만족하는지
                                        반드시 확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{방정식의 해}
                        \;\longrightarrow\;
                        \text{각 구간의 조건 확인}
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 10 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                임의의 실수 <InlineMath math="a,\ b" />에 대하여 함수{" "}
                                <InlineMath math="f" />가
                            </p>

                            <BlockMath math={String.raw`
            f(a+b)=f(a)+f(b)+4
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족시킬 때,{" "}
                                <InlineMath math="f(4)+f(-4)" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 관계식이 임의의 실수 <InlineMath math="a,\ b" />에
                                    대하여 성립하므로 필요한 값을 얻을 수 있도록{" "}
                                    <InlineMath math="a,\ b" />의 값을 정합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(0)" />을 구하기 위하여{" "}
                                    <InlineMath math="a=b=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(0)=f(0)+f(0)+4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(0)=-4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 구하려는{" "}
                                    <InlineMath math="f(4)+f(-4)" />가 나타나도록{" "}
                                    <InlineMath math="a=4,\ b=-4" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(4+(-4))
                &=f(4)+f(-4)+4\\
                f(0)
                &=f(4)+f(-4)+4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="f(0)=-4" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -4&=f(4)+f(-4)+4\\
                f(4)+f(-4)&=-8
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-8}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        함수의 관계식이 임의의 실수에 대하여 성립할 때는
                                        특별한 값을 대입하여 필요한 함숫값을 먼저 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    a=b=0
                    \quad\Longrightarrow\quad
                    f(0)=-4
                `} />

                                    <p className="leading-8">
                                        또한 <InlineMath math="4+(-4)=0" />이므로{" "}
                                        <InlineMath math="a=4,\ b=-4" />를 대입하면
                                        구하려는 <InlineMath math="f(4)+f(-4)" />를
                                        바로 만들 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합{" "}
                                <InlineMath math="A=\{x\mid x\text{는 }30\text{ 이하의 자연수}\}" />와
                                부분집합 <InlineMath math="X" />를 정의역으로 하는 함수{" "}
                                <InlineMath math="f" />를
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x\text{를 }4\text{로 나누었을 때의 나머지}
        `} />

                            <p className="leading-8 text-gray-200">
                                로 정의하자. 함수 <InlineMath math="f" />의 치역이{" "}
                                <InlineMath math="\{3\}" />이 되도록 하는 정의역{" "}
                                <InlineMath math="X" />의 개수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />의 치역이{" "}
                                    <InlineMath math="\{3\}" />이 되려면 정의역{" "}
                                    <InlineMath math="X" />의 모든 원소를{" "}
                                    <InlineMath math="4" />로 나눈 나머지가{" "}
                                    <InlineMath math="3" />이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="30" /> 이하의 자연수 중{" "}
                                    <InlineMath math="4" />로 나눈 나머지가{" "}
                                    <InlineMath math="3" />인 수는
                                </p>

                                <BlockMath math={String.raw`
                3,\ 7,\ 11,\ 15,\ 19,\ 23,\ 27
            `} />

                                <p className="leading-8">
                                    로 모두 <InlineMath math="7" />개입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="X" />는
                                </p>

                                <BlockMath math={String.raw`
                \{3,7,11,15,19,23,27\}
            `} />

                                <p className="leading-8">
                                    의 부분집합이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    이 집합의 부분집합의 개수는
                                </p>

                                <BlockMath math={String.raw`
                2^7
            `} />

                                <p className="leading-8">
                                    이지만, <InlineMath math="X=\varnothing" />이면
                                    함숫값이 하나도 없으므로 치역이{" "}
                                    <InlineMath math="\{3\}" />이 될 수 없습니다.
                                    따라서 공집합은 제외해야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                2^7-1=127
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{127}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        치역이 <InlineMath math="\{3\}" />이라는 것은
                                        정의역의 모든 원소가 함수에 의해{" "}
                                        <InlineMath math="3" />으로 대응해야 한다는 뜻입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x\in X
                    \quad\Longrightarrow\quad
                    f(x)=3
                `} />

                                    <p className="leading-8">
                                        따라서 먼저 <InlineMath math="f(x)=3" />이 되는 원소들을
                                        모두 찾고, 그 원소들로 만들 수 있는
                                        <span className="font-bold text-white"> 공집합이 아닌 부분집합</span>의
                                        개수를 구하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{2^7-1}
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
                                집합 <InlineMath math="X=\{-1,1,a\}" />에서 실수 전체의 집합으로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=bx^2-2bx+3
        `} />

                            <p className="leading-8 text-gray-200">
                                의 치역이 <InlineMath math="\{-3,5\}" />일 때,
                                두 실수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="ab" />의 값은?
                                (단, <InlineMath math="a\ne-1,\ a\ne1" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    정의역의 원소 <InlineMath math="-1,\ 1" />에 대한 함숫값을 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)
                &=b(-1)^2-2b(-1)+3\\
                &=3b+3,\\[4pt]
                f(1)
                &=b-2b+3\\
                &=3-b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />의 치역이{" "}
                                    <InlineMath math="\{-3,5\}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(-1),\ f(1)\in\{-3,5\}
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(-1)=3b+3" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                3b+3=-3
                \quad\text{또는}\quad
                3b+3=5
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                b=-2
                \quad\text{또는}\quad
                b=\frac23
            `} />

                                <p className="leading-8">
                                    입니다. 또 <InlineMath math="f(1)=3-b" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                3-b=-3
                \quad\text{또는}\quad
                3-b=5
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                b=6
                \quad\text{또는}\quad
                b=-2
            `} />

                                <p className="leading-8">
                                    입니다. 두 조건을 모두 만족해야 하므로
                                </p>

                                <BlockMath math={String.raw`
                b=-2
            `} />

                                <p className="leading-8">
                                    입니다. 실제로
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-3,\qquad f(1)=5
            `} />

                                <p className="leading-8">
                                    이므로 이미 두 함숫값 <InlineMath math="-3,\ 5" />가 모두 나타납니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="b=-2" />를 함수식에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(x)=-2x^2+4x+3
            `} />

                                <p className="leading-8">
                                    입니다. 치역에 다른 값이 추가되면 안 되므로{" "}
                                    <InlineMath math="f(a)" />도 <InlineMath math="-3" /> 또는{" "}
                                    <InlineMath math="5" />이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(a)=-3" />이면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -2a^2+4a+3&=-3\\
                a^2-2a-3&=0\\
                (a-3)(a+1)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=3\quad\text{또는}\quad a=-1
            `} />

                                <p className="leading-8">
                                    입니다. 그런데 <InlineMath math="a\ne-1" />이므로{" "}
                                    <InlineMath math="a=3" />입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="f(a)=5" />이면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -2a^2+4a+3&=5\\
                a^2-2a+1&=0\\
                (a-1)^2&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    에서 <InlineMath math="a=1" />이지만,
                                    조건 <InlineMath math="a\ne1" />에 맞지 않습니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=3,\qquad b=-2
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{ab=-6}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        치역이 <InlineMath math="\{-3,5\}" />라는 것은
                                        정의역의 모든 원소에 대한 함숫값이{" "}
                                        <InlineMath math="-3" /> 또는 <InlineMath math="5" />이고,
                                        두 값이 모두 실제로 나타나야 한다는 뜻입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        먼저 이미 정해져 있는 정의역의 원소{" "}
                                        <InlineMath math="-1,\ 1" />을 이용하여{" "}
                                        <InlineMath math="b" />를 결정하고, 그다음{" "}
                                        <InlineMath math="f(a)\in\{-3,5\}" />를 이용하여{" "}
                                        <InlineMath math="a" />를 결정합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 13</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                정의역이 자연수 전체의 집합이고 공역이 실수 전체의 집합인
                                함수 <InlineMath math="f" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="p" />가 소수이면{" "}
                                    <InlineMath math="f(p)=2p" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) 임의의 두 자연수 <InlineMath math="a,\ b" />에 대하여{" "}
                                    <InlineMath math="f(ab)=f(a)+f(b)" />
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-200">
                                <InlineMath math="f(216)" />의 값은?
                                (단, <InlineMath math="f(1)=0" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)는 자연수를 곱으로 나타내면 그 함숫값을
                                    각각의 함숫값의 합으로 바꿀 수 있다는 뜻입니다.
                                    따라서 <InlineMath math="216" />을 소인수분해합니다.
                                </p>

                                <BlockMath math={String.raw`
                216=2^3\cdot3^3
            `} />

                                <p className="leading-8">
                                    조건 (나)를 반복하여 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(216)
                &=f(2^3\cdot3^3)\\
                &=f(2^3)+f(3^3)\\
                &=3f(2)+3f(3)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="2,\ 3" />은 소수이므로 조건 (가)에 의해
                                </p>

                                <BlockMath math={String.raw`
                f(2)=2\cdot2=4,
                \qquad
                f(3)=2\cdot3=6
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(216)
                &=3f(2)+3f(3)\\
                &=3\cdot4+3\cdot6\\
                &=12+18\\
                &=30
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{30}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="f(ab)=f(a)+f(b)" />이므로
                                        자연수를 소인수분해하면 함숫값도 소인수들의
                                        함숫값의 합으로 바꿀 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(p^n)=nf(p)
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    216=2^3\cdot3^3
                    \quad\Longrightarrow\quad
                    f(216)=3f(2)+3f(3)
                `} />

                                    <p className="leading-8">
                                        로 바꾼 뒤, 소수에 대한 조건{" "}
                                        <InlineMath math="f(p)=2p" />를 적용하는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 14</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                양의 실수 전체의 집합에서 정의된 함수{" "}
                                <InlineMath math="f(x)" />가 다음 조건을 만족시킬 때,{" "}
                                <InlineMath math="f(2025)" />의 값을 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) 모든 양의 실수 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="f(4x)=4f(x)" />이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나){" "}
                                    <InlineMath math="f(x)=|3-x|-1\quad(1\le x<4)" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)의 식을 이용하려면 입력값을{" "}
                                    <InlineMath math="1\le x<4" />의 범위로 만들어야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="4^5=1024" />이므로
                                </p>

                                <BlockMath math={String.raw`
                2025
                =
                4^5\cdot\frac{2025}{1024}
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                1
                \le
                \frac{2025}{1024}
                <3
                <4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (가)를 반복하여 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2025)
                &=
                f\left(
                    4^5\cdot\frac{2025}{1024}
                \right)\\
                &=
                4^5
                f\left(
                    \frac{2025}{1024}
                \right)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제{" "}
                                    <InlineMath math="1\le\frac{2025}{1024}<3" />이므로
                                    조건 (나)를 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f\left(\frac{2025}{1024}\right)
                &=
                \left|
                    3-\frac{2025}{1024}
                \right|-1\\
                &=
                3-\frac{2025}{1024}-1\\
                &=
                2-\frac{2025}{1024}\\
                &=
                \frac{23}{1024}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2025)
                &=
                4^5\cdot\frac{23}{1024}\\
                &=
                1024\cdot\frac{23}{1024}\\
                &=
                23
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{23}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        함수식이 특정 범위에서만 주어졌으므로 먼저{" "}
                                        <InlineMath math="f(4x)=4f(x)" />를 반복해서 이용하여
                                        입력값을 그 범위 안으로 옮깁니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    2025
                    \longrightarrow
                    \frac{2025}{4}
                    \longrightarrow
                    \frac{2025}{4^2}
                    \longrightarrow\cdots\longrightarrow
                    \frac{2025}{4^5}
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="\frac{2025}{4^5}" />가{" "}
                                        <InlineMath math="1\le x<4" />에 들어오면
                                        그때 조건 (나)의 함수식을 적용합니다.
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
                                세 변의 길이가 <InlineMath math="a,\ 6,\ 10" />인 삼각형의
                                둘레의 길이를 <InlineMath math="f(a)" />라 할 때, 함수{" "}
                                <InlineMath math="y=f(a)" />의 치역은<br />
                                <InlineMath math="\{y\mid p<y<q\}" />이다.
                                이때 <InlineMath math="pq" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 세 변의 길이 <InlineMath math="a,\ 6,\ 10" />으로
                                    삼각형을 만들 수 있는 <InlineMath math="a" />의 범위를
                                    구합니다.
                                </p>

                                <p className="leading-8">
                                    삼각형의 한 변의 길이는 나머지 두 변의 길이의 차보다 크고,
                                    합보다 작아야 하므로
                                </p>

                                <BlockMath math={String.raw`
                |10-6|<a<10+6
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                4<a<16
            `} />

                                <p className="leading-8">
                                    입니다. 이것이 함수 <InlineMath math="f" />의 정의역이 됩니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="f(a)" />는 삼각형의 둘레의 길이이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(a)
                &=a+6+10\\
                &=a+16
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    정의역이 <InlineMath math="4<a<16" />이므로 양변에{" "}
                                    <InlineMath math="16" />을 더하면
                                </p>

                                <BlockMath math={String.raw`
                20<a+16<32
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                20<f(a)<32
            `} />

                                <p className="leading-8">
                                    이므로 함수 <InlineMath math="y=f(a)" />의 치역은
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid20<y<32\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                p=20,\qquad q=32
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                pq=20\cdot32=640
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{640}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        함수의 정의역이 문제에 직접 주어지지 않은 경우에는
                                        먼저 문제의 조건에서 입력값이 가질 수 있는 범위를
                                        찾아야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \text{삼각형의 조건}
                    \quad\Longrightarrow\quad
                    4<a<16
                `} />

                                    <p className="leading-8">
                                        그다음 함수식 <InlineMath math="f(a)=a+16" />에
                                        정의역의 범위를 적용하여 치역을 구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    4<a<16
                    \quad\Longrightarrow\quad
                    20<f(a)<32
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 16 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 16</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{2,4,6,8,10\}" />에 대하여 함수{" "}
                                <InlineMath math="f:X\to X" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) 함수 <InlineMath math="f" />의 치역의 원소의 개수는{" "}
                                    <InlineMath math="4" />이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나){" "}
                                    <InlineMath math="f(2)+f(4)+f(6)+f(8)+f(10)=34" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (다) 함수 <InlineMath math="f" />의 치역의 원소 중
                                    최댓값과 최솟값의 차는 <InlineMath math="6" />이다.
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-200">
                                집합 <InlineMath math="X" />의 어떤 두 원소{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="f(a)=f(b)=n" />을 만족시키는 자연수{" "}
                                <InlineMath math="n" />의 값을 구하시오.
                                (단, <InlineMath math="a\ne b" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f:X\to X" />이므로 치역의 원소는
                                    모두 <InlineMath math="X" />의 원소입니다.
                                </p>

                                <p className="leading-8">
                                    치역의 원소가 <InlineMath math="4" />개이고,
                                    그 최댓값과 최솟값의 차가 <InlineMath math="6" />이므로
                                    가능한 치역은
                                </p>

                                <BlockMath math={String.raw`
                \{2,4,6,8\}
                \qquad\text{또는}\qquad
                \{4,6,8,10\}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 정의역의 원소는 <InlineMath math="5" />개이고
                                    치역의 원소는 <InlineMath math="4" />개입니다.
                                    따라서 네 개의 치역의 원소 중 한 값은 두 번 함숫값으로
                                    나타나고, 나머지 세 값은 각각 한 번씩 나타납니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(a)=f(b)=n" />이므로
                                    이 두 번 나타나는 함숫값이 <InlineMath math="n" />입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① 치역이 <InlineMath math="\{2,4,6,8\}" />인 경우
                                </p>

                                <p className="leading-8">
                                    조건 (나)에 의하여
                                </p>

                                <BlockMath math={String.raw`
                2+4+6+8+n=34
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                n=14
            `} />

                                <p className="leading-8">
                                    입니다. 그러나 <InlineMath math="14" />는 치역의 원소가
                                    아니므로 불가능합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② 치역이 <InlineMath math="\{4,6,8,10\}" />인 경우
                                </p>

                                <p className="leading-8">
                                    조건 (나)에 의하여
                                </p>

                                <BlockMath math={String.raw`
                4+6+8+10+n=34
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                n=6
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="6" />은 실제로 치역의 원소이므로
                                    조건을 만족합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{6}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        정의역의 원소가 <InlineMath math="5" />개이고
                                        치역의 원소가 <InlineMath math="4" />개이므로,
                                        함숫값 다섯 개 중 정확히 한 값이 한 번 더 나타납니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \text{함숫값의 합}
                    =
                    \text{치역의 원소의 합}
                    +
                    \text{한 번 더 나타나는 값}
                `} />

                                    <p className="leading-8">
                                        먼저 최댓값과 최솟값의 차가 <InlineMath math="6" />이라는
                                        조건으로 가능한 치역을 찾고, 각 치역에 대하여
                                        조건 (나)를 적용하면 됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 17 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 17</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합{" "}
                                <InlineMath math="X=\{x\mid -1\le x\le3\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=ax+b
        `} />

                            <p className="leading-8 text-gray-200">
                                의 공역과 치역이 서로 같을 때, 상수{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="b-a" />의 값은?
                                (단, <InlineMath math="ab\ne0" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수의 공역은 <InlineMath math="X" />이고,
                                    공역과 치역이 서로 같으므로 치역도
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid -1\le y\le3\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="-1\le x\le3" />에서{" "}
                                    <InlineMath math="f(x)" />의 최솟값은{" "}
                                    <InlineMath math="-1" />, 최댓값은{" "}
                                    <InlineMath math="3" />이어야 합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="a>0" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=ax+b" />는 <InlineMath math="x" />가
                                    커질수록 함숫값도 커지므로
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-1,\qquad f(3)=3
            `} />

                                <p className="leading-8">
                                    이어야 합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{cases}
                -a+b=-1\\
                3a+b=3
                \end{cases}
            `} />

                                <p className="leading-8">
                                    두 식을 빼면
                                </p>

                                <BlockMath math={String.raw`
                4a=4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=1,\qquad b=0
            `} />

                                <p className="leading-8">
                                    입니다. 그러나 <InlineMath math="ab\ne0" />이라는 조건에
                                    어긋나므로 이 경우는 불가능합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="a<0" />인 경우
                                </p>

                                <p className="leading-8">
                                    이번에는 <InlineMath math="x" />가 커질수록 함숫값이
                                    작아지므로
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=3,\qquad f(3)=-1
            `} />

                                <p className="leading-8">
                                    이어야 합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{cases}
                -a+b=3\\
                3a+b=-1
                \end{cases}
            `} />

                                <p className="leading-8">
                                    두 식을 빼면
                                </p>

                                <BlockMath math={String.raw`
                4a=-4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=-1,\qquad b=2
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                b-a=2-(-1)=3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{3}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        공역과 치역이 같다는 것은 정의역{" "}
                                        <InlineMath math="-1\le x\le3" />에서 나오는 함숫값이
                                        정확히 <InlineMath math="-1\le y\le3" />이라는 뜻입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        일차함수는 <InlineMath math="a" />의 부호에 따라
                                        양 끝점에서 최댓값과 최솟값이 서로 바뀌므로{" "}
                                        <InlineMath math="a>0" />과 <InlineMath math="a<0" />을
                                        나누어 확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    a>0:\ -1\to-1,\ 3\to3
                    \qquad
                    a<0:\ -1\to3,\ 3\to-1
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 18 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 18</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{x\mid 0\le x\le4\}" />에 대하여
                            </p>

                            <BlockMath math={String.raw`
            f(x)=mx+m+1
        `} />

                            <p className="leading-8 text-gray-200">
                                이 <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                함수가 될 때, <InlineMath math="m" />의 값의 범위가{" "}
                                <InlineMath math="a\le m\le b" />일 때,{" "}
                                <InlineMath math="5(b-a)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f" />가 <InlineMath math="X" />에서{" "}
                                    <InlineMath math="X" />로의 함수이므로{" "}
                                    <InlineMath math="0\le x\le4" />인 모든{" "}
                                    <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                0\le f(x)\le4
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=mx+m+1" />은 일차함수이므로
                                    정의역의 양 끝점 <InlineMath math="x=0,\ 4" />에서의
                                    함숫값이 모두 <InlineMath math="X" />에 속하도록 하면 됩니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="x=0" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(0)=m+1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                0&\le m+1\le4\\
                -1&\le m\le3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="x=4" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(4)=5m+1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                0&\le5m+1\le4\\
                -1&\le5m\le3\\
                -\frac15&\le m\le\frac35
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 조건을 동시에 만족해야 하므로
                                </p>

                                <BlockMath math={String.raw`
                -\frac15\le m\le\frac35
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                a=-\frac15,\qquad b=\frac35
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                5(b-a)
                &=5\left(
                    \frac35-\left(-\frac15\right)
                \right)\\
                &=5\cdot\frac45\\
                &=4
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{4}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                        함수라는 것은 정의역 <InlineMath math="X" />의 모든 원소에
                                        대한 함숫값이 다시 <InlineMath math="X" />에 속해야 한다는
                                        뜻입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    0\le x\le4
                    \quad\Longrightarrow\quad
                    0\le f(x)\le4
                `} />

                                    <p className="leading-8">
                                        이 문제의 <InlineMath math="f(x)" />는 일차함수이므로
                                        정의역의 양 끝점에서의 함숫값을 확인하면 전체 치역이{" "}
                                        <InlineMath math="X" />에 포함되는지를 판단할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        0\le f(0)\le4,
                        \qquad
                        0\le f(4)\le4
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 19 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 19</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                임의의 실수 <InlineMath math="x,\ y" />에 대하여 함수{" "}
                                <InlineMath math="f(x)" />가
                            </p>

                            <BlockMath math={String.raw`
            f(x+y)=f(x)+f(y)
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족하고 <InlineMath math="f(3)=6" />일 때,
                                옳은 것만을 [보기]에서 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    ㄱ. <InlineMath math="f(0)=0" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    ㄴ. <InlineMath math="f(-3)=-6" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    ㄷ. <InlineMath math="f(kx)=kf(x)" />
                                    {" "}(단, <InlineMath math="k" />는 자연수이다.)
                                </p>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄷ</div>
                                <div>③ ㄱ, ㄷ</div>
                                <div>④ ㄴ, ㄷ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="font-bold text-white">
                                    ㄱ. <InlineMath math="f(0)=0" />
                                </p>

                                <p className="leading-8">
                                    주어진 관계식에 <InlineMath math="x=0,\ y=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(0)=f(0)+f(0)
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(0)=0
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 ㄱ은 참입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄴ. <InlineMath math="f(-3)=-6" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="3+(-3)=0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)
                &=f(3)+f(-3)\\
                0
                &=6+f(-3)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(-3)=-6
            `} />

                                <p className="leading-8">
                                    이므로 ㄴ도 참입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄷ. <InlineMath math="f(kx)=kf(x)" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k" />가 자연수이면{" "}
                                    <InlineMath math="kx" />는 <InlineMath math="x" />를{" "}
                                    <InlineMath math="k" />번 더한 것이므로
                                </p>

                                <BlockMath math={String.raw`
                kx=
                \underbrace{x+x+\cdots+x}_{k\text{개}}
            `} />

                                <p className="leading-8">
                                    입니다. 주어진 관계식을 반복해서 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(kx)
                &=
                f(
                    \underbrace{x+x+\cdots+x}_{k\text{개}}
                )\\
                &=
                \underbrace{
                    f(x)+f(x)+\cdots+f(x)
                }_{k\text{개}}\\
                &=
                kf(x)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 ㄷ도 참입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    {⑤}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        함수의 관계식이 임의의 실수에 대하여 성립하면
                                        특별한 값을 대입하여 새로운 성질을 만들어 낼 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    x=y=0
                    &\quad\Longrightarrow\quad f(0)=0,\\
                    y=-x
                    &\quad\Longrightarrow\quad f(-x)=-f(x),\\
                    kx=x+x+\cdots+x
                    &\quad\Longrightarrow\quad f(kx)=kf(x)
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        즉, 함수식이 직접 주어지지 않아도 주어진 대응규칙에
                                        알맞은 값을 대입하여 필요한 함숫값의 성질을 찾는 것이
                                        핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 20 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 20</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                임의의 두 실수 <InlineMath math="a,\ b" />에 대하여 함수{" "}
                                <InlineMath math="f(x)" />가
                            </p>

                            <BlockMath math={String.raw`
            f(a+b)=f(a)f(b)
        `} />

                            <p className="leading-8 text-gray-200">
                                를 만족하고 <InlineMath math="f(1)=3" />일 때,{" "}
                                <InlineMath math="f(-2)+f(0)" />의 값은?
                                (단, 모든 실수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="f(x)>0" />이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 주어진 관계식에서{" "}
                                    <InlineMath math="a=0,\ b=0" />으로 놓으면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)
                &=f(0)f(0)\\
                &=\{f(0)\}^2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(0)\{f(0)-1\}=0
            `} />

                                <p className="leading-8">
                                    입니다. 그런데 모든 실수 <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="f(x)>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(0)>0
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f(0)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="1+(-1)=0" />을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)
                &=f(1+(-1))\\
                &=f(1)f(-1)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(0)=1" />,{" "}
                                    <InlineMath math="f(1)=3" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                1&=3f(-1)\\
                f(-1)&=\frac13
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="-2=(-1)+(-1)" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-2)
                &=f((-1)+(-1))\\
                &=f(-1)f(-1)\\
                &=\left(\frac13\right)^2\\
                &=\frac19
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-2)+f(0)
                &=\frac19+1\\
                &=\frac{10}{9}
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{\frac{10}{9}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        함수의 관계식이 모든 실수에 대하여 성립하므로
                                        필요한 값을 만들 수 있도록 입력값을 선택합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    0&=0+0
                    &&\Longrightarrow&
                    f(0)&=1,\\
                    0&=x+(-x)
                    &&\Longrightarrow&
                    f(x)f(-x)&=1
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서 <InlineMath math="f(x)>0" />인 이 문제에서는
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f(0)=1,\qquad
                        f(-x)=\frac{1}{f(x)}
                    }
                `} />

                                    <p className="leading-8">
                                        이라는 관계를 얻을 수 있습니다. 이를 이용하면{" "}
                                        <InlineMath math="f(1)=3" />에서 음수의 함숫값도
                                        차례로 구할 수 있습니다.
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

                        <div className="space-y-4 text-gray-200">
                            <p className="leading-8">
                                ① 함수는 정의역의 각 원소가 빠짐없이 공역의 원소
                                하나씩에 대응하는 관계입니다.
                            </p>

                            <BlockMath math={String.raw`
                    f:X\longrightarrow Y
                `} />

                            <p className="leading-8">
                                ② <InlineMath math="X" />는 정의역,{" "}
                                <InlineMath math="Y" />는 공역이며,
                                실제로 대응된 함숫값의 집합이 치역입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{\text{치역}\subset\text{공역}}
                `} />

                            <p className="leading-8">
                                ③ <InlineMath math="x" />에 대응하는 함숫값을{" "}
                                <InlineMath math="f(x)" />로 나타냅니다.
                            </p>

                            <BlockMath math={String.raw`
                    x\longrightarrow f(x)
                `} />

                            <p className="leading-8">
                                ④ 함수의 그래프는 점{" "}
                                <InlineMath math="(x,f(x))" />의 모임입니다.
                            </p>

                            <p className="leading-8">
                                ⑤ 정의역의 각 <InlineMath math="x" />에서 그은 세로선은
                                함수의 그래프와 정확히 한 점에서 만나야 합니다.
                            </p>
                        </div>
                    </div>

                </div>

            </section>

            {/* 3.2 서로 같은 함수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.2 서로 같은 함수
                </h2>

                <p className="leading-8 text-gray-300">
                    두 함수가 서로 같은 함수인지는 함수식의 모양만으로 판단하지 않습니다.
                    정의역과 공역이 각각 같고, 정의역의 모든 원소에 대한 함숫값이
                    서로 같아야 합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 서로 같은 함수의 뜻 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 서로 같은 함수의 뜻
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수
                        </p>

                        <BlockMath math={String.raw`
                f:X\longrightarrow Y,
                \qquad
                g:A\longrightarrow B
            `} />

                        <p className="leading-8 text-gray-300">
                            가 서로 같은 함수가 되려면 다음 두 조건을 모두 만족해야 합니다.
                        </p>

                        <div className="mt-5 space-y-4">
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-3 font-bold text-white">
                                    ① 정의역과 공역이 각각 서로 같다.
                                </p>

                                <BlockMath math={String.raw`
                        X=A,\qquad Y=B
                    `} />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-3 font-bold text-white">
                                    ② 정의역의 모든 원소에 대하여 함숫값이 서로 같다.
                                </p>

                                <BlockMath math={String.raw`
                        f(x)=g(x)
                    `} />

                                <p className="leading-8 text-gray-300">
                                    즉, 정의역의 모든 원소 <InlineMath math="x" />에 대하여
                                    두 함수가 같은 값에 대응시켜야 합니다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                서로 같은 함수
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                    f=g
                    \iff
                    \begin{cases}
                    \text{정의역과 공역이 각각 같다.}\\
                    \text{정의역의 모든 원소 }x\text{에 대하여 }f(x)=g(x)
                    \end{cases}
                    }
                `} />
                        </div>
                    </div>

                    {/* 2. 함수식의 모양이 달라도 같은 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 함수식의 모양이 달라도 같은 함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            서로 같은 함수가 되기 위해 함수식의 모양까지 같을 필요는 없습니다.
                            정의역과 공역이 각각 같고, 정의역의 모든 원소에서 함숫값이
                            같으면 서로 같은 함수입니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            예를 들어 정의역과 공역이 각각 같은 두 함수
                        </p>

                        <BlockMath math={String.raw`
                f(x)=(x+1)^2,
                \qquad
                g(x)=x^2+2x+1
            `} />

                        <p className="leading-8 text-gray-300">
                            을 생각해 봅시다. <InlineMath math="f(x)" />를 전개하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=(x+1)^2\\
                &=x^2+2x+1\\
                &=g(x)
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로 정의역의 모든 원소 <InlineMath math="x" />에 대하여
                            두 함수의 함숫값이 같습니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{f=g}
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                함수식의 모양이 달라도 모든 입력에서 같은 함숫값을 가지면
                                서로 같은 함수가 될 수 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* 3. 함수식이 같아도 서로 다른 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 함수식이 같아도 서로 다른 함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수식의 모양이 같다는 것만으로 서로 같은 함수라고 할 수는
                            없습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath math={String.raw`
                f:X\longrightarrow Y,
                \qquad
                g:A\longrightarrow B
            `} />

                        <p className="leading-8 text-gray-300">
                            에 대하여 두 함수의 함수식이 모두
                        </p>

                        <BlockMath math={String.raw`
                f(x)=x^2,
                \qquad
                g(x)=x^2
            `} />

                        <p className="leading-8 text-gray-300">
                            라고 하더라도 정의역 또는 공역이 서로 다르면
                            서로 같은 함수가 아닙니다.
                        </p>

                        <BlockMath math={String.raw`
                X\ne A
                \quad\text{또는}\quad
                Y\ne B
                \quad\Longrightarrow\quad
                f\ne g
            `} />

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <p className="font-bold text-red-300">
                                함수식만 보고 두 함수가 같은지 판단하면 안 됩니다.
                            </p>
                        </div>
                    </div>

                    {/* 4. 치역은 따로 비교하지 않아도 된다 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 치역은 따로 비교하지 않아도 된다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            서로 같은 함수를 판단하는 조건에서 치역을 별도로 비교할
                            필요는 없습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            정의역이 같고 정의역의 모든 원소 <InlineMath math="x" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                f(x)=g(x)
            `} />

                        <p className="leading-8 text-gray-300">
                            이면 실제로 나오는 함숫값도 모두 같으므로 두 함수의 치역은
                            자연스럽게 같아집니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{정의역이 같고 모든 }x\text{에서 }f(x)=g(x)
                    \Longrightarrow
                    \text{치역도 같다}
                }
            `} />
                    </div>

                    {/* 5. 서로 같은 함수의 판별 순서 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 서로 같은 함수의 판별
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 함수가 서로 같은 함수인지 판단할 때는 다음 순서로
                            확인하면 됩니다.
                        </p>

                        <div className="mt-5 space-y-3 text-gray-300">
                            <p className="leading-8">
                                <span className="font-bold text-white">① 정의역</span>이
                                서로 같은지 확인합니다.
                            </p>

                            <p className="leading-8">
                                <span className="font-bold text-white">② 공역</span>이
                                서로 같은지 확인합니다.
                            </p>

                            <p className="leading-8">
                                <span className="font-bold text-white">
                                    ③ 정의역의 모든 원소에 대한 함숫값
                                </span>
                                이 서로 같은지 확인합니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        \text{정의역}
                        \;\longrightarrow\;
                        \text{공역}
                        \;\longrightarrow\;
                        \text{함숫값}
                    }
                `} />
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{-1,0,1\}" />을 정의역으로 하는 함수{" "}
                                <InlineMath math="f" />가 <InlineMath math="f(x)=x" />일 때,
                                함수 <InlineMath math="f" />와 서로 같은 함수인 것만을 보기에서
                                있는 대로 고르시오.
                                (단, 함수 <InlineMath math="g,\ h,\ p" />의 정의역은{" "}
                                <InlineMath math="X" />이다.)
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div className="grid gap-4 md:grid-cols-3">
                                    <div>
                                        ㄱ. <InlineMath math="g(x)=x^3" />
                                    </div>

                                    <div>
                                        ㄴ. <InlineMath math="h(x)=x^2" />
                                    </div>

                                    <div>
                                        ㄷ. <InlineMath math="p(x)=\sqrt{x^2}" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f,\ g,\ h,\ p" />의 정의역이 모두{" "}
                                    <InlineMath math="X=\{-1,0,1\}" />이므로 정의역의 각 원소에서
                                    함숫값을 비교합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄱ. <InlineMath math="g(x)=x^3" />
                                </p>

                                <BlockMath math={String.raw`
                \begin{array}{c|ccc}
                x&-1&0&1\\ \hline
                f(x)&-1&0&1\\
                g(x)&-1&0&1
                \end{array}
            `} />

                                <p className="leading-8">
                                    정의역의 모든 원소에 대하여{" "}
                                    <InlineMath math="f(x)=g(x)" />이므로{" "}
                                    <InlineMath math="f" />와 <InlineMath math="g" />는
                                    서로 같은 함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄴ. <InlineMath math="h(x)=x^2" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=-1" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-1,\qquad h(-1)=1
            `} />

                                <p className="leading-8">
                                    이므로 함숫값이 서로 다릅니다. 따라서{" "}
                                    <InlineMath math="f" />와 <InlineMath math="h" />는
                                    서로 다른 함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄷ. <InlineMath math="p(x)=\sqrt{x^2}" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\sqrt{x^2}=|x|" />이므로{" "}
                                    <InlineMath math="x=-1" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-1,\qquad
                p(-1)=\sqrt{(-1)^2}=1
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f" />와{" "}
                                    <InlineMath math="p" />도 서로 다른 함수입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                   {\text{ㄱ}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 함수가 같은지 판단할 때는 함수식의 모양이 아니라
                                        주어진 <span className="font-bold text-white">정의역의 모든 원소</span>에서
                                        함숫값이 같은지를 확인해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        특히 이 문제에서는 정의역이 실수 전체가 아니라{" "}
                                        <InlineMath math="\{-1,0,1\}" />로 제한되어 있으므로
                                    </p>

                                    <BlockMath math={String.raw`
                    x^3=x
                    \qquad
                    (x=-1,0,1)
                `} />

                                    <p className="leading-8">
                                        이 성립하여 함수식 <InlineMath math="x" />와{" "}
                                        <InlineMath math="x^3" />의 모양이 달라도 서로 같은
                                        함수가 됩니다.
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
                                집합 <InlineMath math="X=\{0,1,2\}" />에서 실수 전체의 집합{" "}
                                <InlineMath math="\mathbb{R}" />로의 함수{" "}
                                <InlineMath math="f" />와 <InlineMath math="g" />를 각각
                                다음과 같이 정의하자.
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x+a,\qquad g(x)=ax+b
        `} />

                            <p className="leading-8 text-gray-200">
                                이때 두 함수 <InlineMath math="f,\ g" />가 서로 같도록 하는
                                상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="ab" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 함수 <InlineMath math="f,\ g" />는 정의역이{" "}
                                    <InlineMath math="X" />로 같고 공역도{" "}
                                    <InlineMath math="\mathbb{R}" />로 같습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 서로 같은 함수가 되려면 정의역의 모든 원소에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=g(x)
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="x=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)&=g(0)\\
                a&=b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&=g(1)\\
                1+a&=a+b\\
                b&=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    앞에서 <InlineMath math="a=b" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=1,\qquad b=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    실제로 <InlineMath math="a=b=1" />이면
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x+1,\qquad g(x)=x+1
            `} />

                                <p className="leading-8">
                                    이므로 정의역의 모든 원소에서 함숫값이 같아 두 함수는
                                    서로 같습니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{ab=1}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        정의역과 공역이 이미 같은 두 함수가 서로 같으려면
                                        정의역의 모든 원소에 대한 함숫값이 같아야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f=g
                    \quad\Longrightarrow\quad
                    f(x)=g(x)
                    \quad(x\in X)
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="x=0,\ 1" />을 대입하여{" "}
                                        <InlineMath math="a,\ b" />를 결정한 뒤, 얻은 함수가
                                        실제로 정의역의 모든 원소에서 같은지도 확인할 수 있습니다.
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
                                집합 <InlineMath math="X=\{1,3\}" />을 정의역으로 하는 두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2+7ax+2b,\qquad
            g(x)=3ax+b
        `} />

                            <p className="leading-8 text-gray-200">
                                가 서로 같을 때, 함수 <InlineMath math="g" />의 치역을 구하시오.
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 함수 <InlineMath math="f,\ g" />가 서로 같으므로
                                    정의역의 모든 원소에서 함숫값이 서로 같습니다.
                                </p>

                                <p className="leading-8">
                                    정의역이 <InlineMath math="X=\{1,3\}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)=g(1),\qquad f(3)=g(3)
            `} />

                                <p className="leading-8">
                                    을 이용합니다.
                                </p>

                                <p className="font-bold text-white">
                                    <InlineMath math="x=1" />일 때
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&=1+7a+2b,\\
                g(1)&=3a+b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 함숫값이 같으므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                1+7a+2b&=3a+b\\
                4a+b&=-1
                \end{aligned}
            `} />

                                <p className="font-bold text-white">
                                    <InlineMath math="x=3" />일 때
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)&=9+21a+2b,\\
                g(3)&=9a+b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 함숫값이 같으므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                9+21a+2b&=9a+b\\
                12a+b&=-9
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 식
                                </p>

                                <BlockMath math={String.raw`
                4a+b=-1,\qquad 12a+b=-9
            `} />

                                <p className="leading-8">
                                    을 연립하면
                                </p>

                                <BlockMath math={String.raw`
                a=-1,\qquad b=3
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 함수 <InlineMath math="g" />는
                                </p>

                                <BlockMath math={String.raw`
                g(x)=-3x+3
            `} />

                                <p className="leading-8">
                                    이고, 정의역의 각 원소에 대한 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                g(1)=0,\qquad g(3)=-6
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 함수 <InlineMath math="g" />의 치역은
                                </p>

                                <BlockMath math={String.raw`
                \{-6,0\}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{\{-6,0\}}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        두 함수의 함수식이 서로 달라도 정의역이 유한집합이면
                                        정의역의 각 원소에서 함숫값을 비교하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    X=\{1,3\}
                    \quad\Longrightarrow\quad
                    f(1)=g(1),\quad f(3)=g(3)
                `} />

                                    <p className="leading-8">
                                        이 조건으로 상수 <InlineMath math="a,\ b" />를 결정한 뒤,
                                        정의역의 각 원소에 대한 <InlineMath math="g" />의
                                        함숫값을 구하면 치역을 얻을 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 집합{" "}
                                <InlineMath math="X=\{-2,0,2\}" />,{" "}
                                <InlineMath math="Y=\{-3,1,5\}" />에 대하여 두 함수
                            </p>

                            <BlockMath math={String.raw`
            f:X\longrightarrow Y,\qquad
            g:X\longrightarrow Y
        `} />

                            <p className="leading-8 text-gray-200">
                                를{" "}
                                <InlineMath math="f(x)=x^2-3" />,{" "}
                                <InlineMath math="g(x)=a|x|-b" />라 하자.
                                두 함수 <InlineMath math="f,\ g" />가 서로 같을 때,{" "}
                                <InlineMath math="a+b" />의 값은?
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 함수 <InlineMath math="f,\ g" />는 정의역과 공역이
                                    각각 같으므로, 서로 같은 함수가 되려면 정의역의 모든
                                    원소에서 함숫값이 같아야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />의 함숫값을 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-2)&=(-2)^2-3=1,\\
                f(0)&=0^2-3=-3,\\
                f(2)&=2^2-3=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=0" />에서{" "}
                                    <InlineMath math="f(0)=g(0)" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -3&=a|0|-b\\
                -3&=-b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                b=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 <InlineMath math="x=2" />에서{" "}
                                    <InlineMath math="f(2)=g(2)" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                1&=a|2|-3\\
                1&=2a-3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이때 <InlineMath math="x=-2" />에서도
                                </p>

                                <BlockMath math={String.raw`
                g(-2)
                =2|-2|-3
                =1
                =f(-2)
            `} />

                                <p className="leading-8">
                                    이므로 정의역의 모든 원소에서 두 함수의 함숫값이 같습니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b=2+3=5
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{5}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        정의역이 유한집합일 때 두 함수가 서로 같다는 조건은
                                        정의역의 각 원소에 대한 함숫값을 직접 비교하여
                                        이용할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=g(x)
                    \qquad (x=-2,0,2)
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="x=0" />을 먼저 대입하면{" "}
                                        <InlineMath math="b" />가 바로 결정되고,{" "}
                                        <InlineMath math="x=2" />를 대입하면{" "}
                                        <InlineMath math="a" />를 쉽게 결정할 수 있습니다.
                                        마지막으로 <InlineMath math="x=-2" />에서도 함숫값이
                                        같은지 확인합니다.
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
                                집합 <InlineMath math="X" />를 정의역으로 하는 두 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^3-2x^2+4,
            \qquad
            g(x)=5x-2
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 <InlineMath math="f=g" />가 되도록 하는
                                집합 <InlineMath math="X" />의 개수는?
                                (단, <InlineMath math="X\ne\varnothing" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 함수 <InlineMath math="f,\ g" />가 서로 같으려면
                                    정의역 <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=g(x)
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 두 함숫값이 같아지는 <InlineMath math="x" />의
                                    값을 먼저 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                x^3-2x^2+4=5x-2
            `} />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath math={String.raw`
                x^3-2x^2-5x+6=0
            `} />

                                <p className="leading-8">
                                    이고 인수분해하면
                                </p>

                                <BlockMath math={String.raw`
                (x-1)(x-3)(x+2)=0
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x=-2,\qquad1,\qquad3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    즉, 두 함수의 함숫값이 같은 원소들의 집합은
                                </p>

                                <BlockMath math={String.raw`
                \{-2,1,3\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f=g" />가 되려면
                                    정의역 <InlineMath math="X" />의 모든 원소가 이 집합에서
                                    선택되어야 하므로
                                </p>

                                <BlockMath math={String.raw`
                X\subset\{-2,1,3\}
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    원소가 <InlineMath math="3" />개인 집합의 부분집합은
                                    모두 <InlineMath math="2^3" />개이지만,
                                    문제에서 <InlineMath math="X\ne\varnothing" />이므로
                                    공집합을 제외합니다.
                                </p>

                                <BlockMath math={String.raw`
                2^3-1=7
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
                                        정의역이 정해져 있지 않은 상태에서 두 함수가 서로 같도록
                                        하려면 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=g(x)
                `} />

                                    <p className="leading-8">
                                        를 만족하는 모든 <InlineMath math="x" />를 찾습니다.
                                        정의역은 그 원소들 중 일부를 골라 만든 집합이면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=g(x)
                    \Longleftrightarrow
                    x\in\{-2,1,3\}
                `} />

                                    <p className="leading-8">
                                        따라서 가능한 정의역은{" "}
                                        <InlineMath math="\{-2,1,3\}" />의
                                        공집합이 아닌 부분집합입니다.
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

                        <p className="leading-8 text-gray-200">
                            두 함수가 서로 같으려면
                            <span className="font-bold text-white">
                                {" "}정의역과 공역이 각각 같고
                            </span>
                            , 정의역의
                            <span className="font-bold text-white">
                                {" "}모든 원소에 대한 함숫값이 같아야
                            </span>
                            합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                f=g
                \iff
                \begin{cases}
                \text{정의역이 같다.}\\
                \text{공역이 같다.}\\
                \text{모든 }x\text{에 대하여 }f(x)=g(x)
                \end{cases}
                }
            `} />

                        <p className="mt-4 leading-8 text-gray-200">
                            따라서 함수식의 모양만 비교해서는 안 됩니다.
                            함수식이 달라도 서로 같은 함수일 수 있고,
                            함수식이 같아도 정의역이나 공역이 다르면 서로 다른 함수입니다.
                        </p>
                    </div>

                </div>
            </section>

            {/* 3.3 여러 가지 함수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.3 여러 가지 함수
                </h2>

                <p className="leading-8 text-gray-300">
                    함수는 정의역의 원소들이 어떻게 대응되는지에 따라
                    일대일함수, 일대일대응, 항등함수, 상수함수 등으로 구분할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 일대일함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 일대일함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            정의역의 서로 다른 원소가 서로 다른 함숫값을 갖는 함수를
                            <span className="font-bold text-white"> 일대일함수</span>라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        x_1\ne x_2
                        \quad\Longrightarrow\quad
                        f(x_1)\ne f(x_2)
                    }
                `} />

                            <p className="mt-3 text-center font-bold text-yellow-200">
                                정의역의 서로 다른 원소는 서로 다른 함숫값을 갖는다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            이 명제의 대우를 이용하면 일대일함수를 다음과 같이
                            표현할 수도 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        f(x_1)=f(x_2)
                        \quad\Longrightarrow\quad
                        x_1=x_2
                    }
                `} />

                            <p className="mt-3 text-center font-bold text-blue-200">
                                같은 함숫값을 갖는 정의역의 원소는 하나뿐이다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 표현은 서로 대우 관계이므로 같은 뜻입니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                x_1\ne x_2
                \Rightarrow
                f(x_1)\ne f(x_2)
                \quad\Longleftrightarrow\quad
                f(x_1)=f(x_2)
                \Rightarrow
                x_1=x_2
                }
            `} />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                수식의 해석
                            </p>

                            <p className="leading-8 text-gray-300">
                                일대일함수에서는 하나의 함숫값에 정의역의 두 원소가
                                동시에 대응될 수 없습니다.
                            </p>

                            <BlockMath math={String.raw`
                    f(a)=f(b)
                    \quad\Longrightarrow\quad
                    a=b
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서 같은 함숫값이 나왔다면 입력한 값도 같아야 합니다.
                            </p>
                        </div>
                    </div>

                    {/* 2. 일대일함수의 그래프 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 일대일함수의 그래프
                        </h3>

                        <p className="leading-8 text-gray-300">
                            함수의 그래프에서 같은 함숫값을 갖는 점들은 같은 높이에
                            있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 그래프에 가로선을 그었을 때 두 점 이상에서 만난다면
                            서로 다른 두 <InlineMath math="x" />값에서 같은 함숫값이
                            나온다는 뜻이므로 일대일함수가 아닙니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 text-center font-bold text-yellow-300">
                                가로선 판정
                            </p>

                            <p className="text-center leading-8 text-gray-200">
                                일대일함수의 그래프는 모든 가로선과
                                많아야 한 점에서 만납니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{모든 가로선과의 교점의 개수}\le1
                    }
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-4 font-bold text-blue-300">
                                세로선 판정과 가로선 판정
                            </p>

                            <div className="space-y-3 text-gray-200">
                                <p className="leading-8">
                                    <span className="font-bold text-white">
                                        함수인가?
                                    </span>
                                    {" "}→ 정의역이 정의된 부분에서 모든 세로선과
                                    한 점에서 만나는지 확인합니다.
                                </p>

                                <p className="leading-8">
                                    <span className="font-bold text-white">
                                        일대일함수인가?
                                    </span>
                                    {" "}→ 모든 가로선과 많아야 한 점에서 만나는지
                                    확인합니다.
                                </p>
                            </div>

                            <BlockMath math={String.raw`
                    \boxed{
                    \begin{array}{c}
                    \text{함수 판정}\;:\;\text{세로선}\\[4pt]
                    \text{일대일함수 판정}\;:\;\text{가로선}
                    \end{array}
                    }
                `} />
                        </div>
                    </div>

                    {/* 3. 일대일대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 일대일대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일대일함수이면서 치역과 공역이 서로 같은 함수를
                            <span className="font-bold text-white"> 일대일대응</span>이라고
                            합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{일대일대응}
                    =
                    \text{일대일함수}
                    +
                    \text{치역}=\text{공역}
                }
            `} />

                        <div className="mt-5 space-y-4">
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-3 font-bold text-white">
                                    ① 일대일함수
                                </p>

                                <BlockMath math={String.raw`
                        x_1\ne x_2
                        \quad\Longrightarrow\quad
                        f(x_1)\ne f(x_2)
                    `} />

                                <p className="leading-8 text-gray-300">
                                    정의역의 서로 다른 원소는 서로 다른 함숫값을 갖습니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="mb-3 font-bold text-white">
                                    ② 치역 = 공역
                                </p>

                                <p className="leading-8 text-gray-300">
                                    공역의 모든 원소가 실제로 함숫값으로 나옵니다.
                                    즉, 공역에 대응되지 않고 남는 원소가 없습니다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                일대일대응에서는 정의역의 원소와 공역의 원소가
                                하나씩 빠짐없이 짝을 이룹니다.
                            </p>
                        </div>
                    </div>

                    {/* 4. 유한집합에서 원소의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 유한집합에서 원소의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 유한집합 <InlineMath math="X,\ Y" />에 대하여 함수
                        </p>

                        <BlockMath math={String.raw`
                f:X\longrightarrow Y
            `} />

                        <p className="leading-8 text-gray-300">
                            를 생각해 봅시다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                일대일함수가 존재하려면
                            </p>

                            <p className="leading-8 text-gray-300">
                                정의역의 서로 다른 원소들이 공역의 서로 다른 원소에
                                대응되어야 하므로 공역의 원소의 개수가 정의역의
                                원소의 개수보다 적을 수 없습니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        n(X)\le n(Y)
                    }
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                일대일대응이 존재하려면
                            </p>

                            <p className="leading-8 text-gray-300">
                                정의역과 공역의 원소가 하나씩 빠짐없이 짝을 이루어야
                                하므로 두 집합의 원소의 개수가 같아야 합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        n(X)=n(Y)
                    }
                `} />
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                특히 <InlineMath math="f:X\to X" />인 경우
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="X" />가 유한집합이면 정의역과 공역의
                                원소의 개수가 처음부터 같습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                따라서 <InlineMath math="f" />가 일대일함수이면
                                정의역의 모든 원소가 서로 다른 함숫값을 가지므로
                                공역의 모든 원소가 빠짐없이 함숫값으로 나타납니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        f:X\to X,\quad X\text{가 유한집합}
                        \quad\Longrightarrow\quad
                        \text{일대일함수}
                        \iff
                        \text{일대일대응}
                    }
                `} />
                        </div>
                    </div>

                    {/* 5. 항등함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 항등함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            정의역의 모든 원소가 자기 자신과 대응하는 함수를
                            <span className="font-bold text-white"> 항등함수</span>라고
                            합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    f(x)=x
                }
            `} />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                수식의 해석
                            </p>

                            <BlockMath math={String.raw`
                    x\longrightarrow x
                `} />

                            <p className="leading-8 text-gray-300">
                                정의역의 원소를 함수에 넣으면 그 원소와 같은 값이
                                그대로 함숫값으로 나옵니다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            예를 들어 실수 전체의 집합에서 실수 전체의 집합으로의
                            항등함수는
                        </p>

                        <BlockMath math={String.raw`
                f(x)=x
            `} />

                        <p className="leading-8 text-gray-300">
                            이고, 그 그래프는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{y=x}
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="leading-8 text-blue-200">
                                항등함수는 정의역의 서로 다른 원소가 그대로 서로 다른
                                함숫값이 되므로 일대일함수이고, 치역과 공역도 같으므로
                                일대일대응입니다.
                            </p>
                        </div>
                    </div>

                    {/* 6. 상수함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            6. 상수함수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            정의역의 모든 원소가 하나의 같은 함숫값을 갖는 함수를
                            <span className="font-bold text-white"> 상수함수</span>라고
                            합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    f(x)=c
                }
            `} />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                수식의 해석
                            </p>

                            <BlockMath math={String.raw`
                    f(x_1)=f(x_2)=\cdots=c
                `} />

                            <p className="leading-8 text-gray-300">
                                정의역에서 어떤 원소를 선택하더라도 함숫값은 항상
                                같은 값 <InlineMath math="c" />가 나옵니다.
                            </p>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            실수 전체의 집합에서 정의된 상수함수의 그래프는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{y=c}
            `} />

                        <p className="leading-8 text-gray-300">
                            와 같은 수평선입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <p className="leading-8 text-red-200">
                                정의역의 원소가 두 개 이상이면 서로 다른 원소가 같은
                                함숫값 <InlineMath math="c" />를 가지므로 상수함수는
                                일대일함수가 아닙니다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                보기의 함수의 그래프 중 다음에 해당하는 것만을 있는 대로 고르시오.
                                (단, 정의역과 공역은 모두 실수 전체의 집합이다.)
                            </p>

                            <div className="mt-6 grid gap-5 md:grid-cols-3">
                                <div>
                                    <p className="mb-2 font-bold text-white">ㄱ.</p>
                                    <img
                                        src="/images/commonMath2/3.3_1_01.png"
                                        alt="그래프 ㄱ"
                                        className="mx-auto w-full max-w-[260px] rounded-lg"
                                    />
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">ㄴ.</p>
                                    <img
                                        src="/images/commonMath2/3.3_1_02.png"
                                        alt="그래프 ㄴ"
                                        className="mx-auto w-full max-w-[260px] rounded-lg"
                                    />
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">ㄷ.</p>
                                    <img
                                        src="/images/commonMath2/3.3_1_03.png"
                                        alt="그래프 ㄷ"
                                        className="mx-auto w-full max-w-[260px] rounded-lg"
                                    />
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">ㄹ.</p>
                                    <img
                                        src="/images/commonMath2/3.3_1_04.png"
                                        alt="그래프 ㄹ"
                                        className="mx-auto w-full max-w-[260px] rounded-lg"
                                    />
                                </div>

                                <div>
                                    <p className="mb-2 font-bold text-white">ㅁ.</p>
                                    <img
                                        src="/images/commonMath2/3.3_1_05.png"
                                        alt="그래프 ㅁ"
                                        className="mx-auto w-full max-w-[260px] rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2">
                                <div>(1) 일대일함수</div>
                                <div>(2) 일대일대응</div>
                                <div>(3) 상수함수</div>
                                <div>(4) 항등함수</div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    정의역과 공역은 모두 실수 전체의 집합입니다.
                                    먼저 가로선 판정을 이용하여 일대일함수인지 확인하고,
                                    일대일함수 중에서 치역이 공역과 같은 것은
                                    일대일대응으로 판단합니다.
                                </p>

                                <p className="font-bold text-white">ㄱ.</p>

                                <p className="leading-8">
                                    모든 가로선과 한 점에서 만나므로 일대일함수입니다.
                                    또한 그래프가 모든 실수의 <InlineMath math="y" />값을 가지므로
                                    치역이 실수 전체의 집합입니다.
                                </p>

                                <BlockMath math={String.raw`
                \text{치역}=\text{공역}=\mathbb{R}
            `} />

                                <p className="leading-8">
                                    따라서 <span className="font-bold text-white">일대일대응</span>
                                    이기도 합니다.
                                </p>

                                <p className="font-bold text-white">ㄴ.</p>

                                <p className="leading-8">
                                    정의역의 모든 원소에서 함숫값이 하나의 같은 값으로
                                    나오므로 <span className="font-bold text-white">상수함수</span>
                                    입니다.
                                </p>

                                <BlockMath math={String.raw`
                f(x)=c
            `} />

                                <p className="font-bold text-white">ㄷ.</p>

                                <p className="leading-8">
                                    함수이지만 일부 가로선과 두 점에서 만나므로
                                    일대일함수가 아닙니다. 또한 상수함수나 항등함수도 아닙니다.
                                </p>

                                <BlockMath math={String.raw`
                x_1\ne x_2
                \quad\text{이면서}\quad
                f(x_1)=f(x_2)
            `} />

                                <p className="font-bold text-white">ㄹ.</p>

                                <p className="leading-8">
                                    모든 가로선과 많아야 한 점에서 만나므로
                                    <span className="font-bold text-white"> 일대일함수</span>입니다.
                                </p>

                                <p className="leading-8">
                                    그러나 그래프에서 함숫값이 될 수 없는 실수가 있으므로
                                    치역은 공역인 실수 전체의 집합과 같지 않습니다.
                                    따라서 일대일대응은 아닙니다.
                                </p>

                                <BlockMath math={String.raw`
                \text{치역}\ne\text{공역}
            `} />

                                <p className="font-bold text-white">ㅁ.</p>

                                <p className="leading-8">
                                    그래프가 <InlineMath math="y=x" />이므로
                                    정의역의 모든 원소가 자기 자신과 대응합니다.
                                    따라서 <span className="font-bold text-white">항등함수</span>
                                    입니다.
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    또한 모든 가로선과 한 점에서 만나므로 일대일함수이고,
                                    치역도 실수 전체의 집합이므로 일대일대응입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    (1)\;&\text{일대일함수}: &&{\text{ㄱ, ㄹ, ㅁ}}\\
                    (2)\;&\text{일대일대응}: &&{\text{ㄱ, ㅁ}}\\
                    (3)\;&\text{상수함수}: &&{\text{ㄴ}}\\
                    (4)\;&\text{항등함수}: &&{\text{ㅁ}}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        그래프에서 일대일함수는{" "}
                                        <span className="font-bold text-white">가로선 판정</span>으로
                                        확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \text{일대일함수}
                    \quad\Longleftrightarrow\quad
                    \text{모든 가로선과 많아야 한 점에서 만난다}
                `} />

                                    <p className="leading-8">
                                        일대일대응은 여기서 한 가지를 더 확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \text{일대일대응}
                    =
                    \text{일대일함수}
                    +
                    \text{치역}=\text{공역}
                `} />

                                    <p className="leading-8">
                                        따라서 ㄹ처럼 가로선 판정을 통과하더라도 치역이
                                        공역 전체를 채우지 못하면 일대일함수일 뿐
                                        일대일대응은 아닙니다.
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
                                집합 <InlineMath math="X=\{-1,0,1\}" />에 대하여 [보기] 중
                                집합 <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                함수인 것의 개수를 <InlineMath math="a" />, 일대일대응인 것의
                                개수를 <InlineMath math="b" />라고 할 때,{" "}
                                <InlineMath math="a+b" />의 값은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <div className="grid gap-x-10 gap-y-4 md:grid-cols-2">
                                    <div>
                                        ㄱ. <InlineMath math="f(x)=x" />
                                    </div>
                                    <div>
                                        ㄴ. <InlineMath math="f(x)=x-1" />
                                    </div>
                                    <div>
                                        ㄷ. <InlineMath math="f(x)=x^2-1" />
                                    </div>
                                    <div>
                                        ㄹ. <InlineMath math="f(x)=|x-2|-2" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 각 식이 <InlineMath math="X" />에서{" "}
                                    <InlineMath math="X" />로의 함수가 되는지 확인합니다.
                                    정의역의 모든 원소에 대한 함숫값이{" "}
                                    <InlineMath math="X" />에 속해야 합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄱ. <InlineMath math="f(x)=x" />
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-1,\qquad
                f(0)=0,\qquad
                f(1)=1
            `} />

                                <p className="leading-8">
                                    모든 함숫값이 <InlineMath math="X" />에 속하므로{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 세 함숫값이 모두 서로 다르고 치역이{" "}
                                    <InlineMath math="X" />와 같으므로 일대일대응입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄴ. <InlineMath math="f(x)=x-1" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=-1" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=-2\notin X
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="X" />에서{" "}
                                    <InlineMath math="X" />로의 함수가 아닙니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄷ. <InlineMath math="f(x)=x^2-1" />
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=0,\qquad
                f(0)=-1,\qquad
                f(1)=0
            `} />

                                <p className="leading-8">
                                    모든 함숫값이 <InlineMath math="X" />에 속하므로{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수입니다.
                                </p>

                                <p className="leading-8">
                                    그러나
                                </p>

                                <BlockMath math={String.raw`
                -1\ne1
                \qquad\text{이지만}\qquad
                f(-1)=f(1)=0
            `} />

                                <p className="leading-8">
                                    이므로 일대일함수가 아니고, 따라서 일대일대응도 아닙니다.
                                </p>

                                <p className="font-bold text-white">
                                    ㄹ. <InlineMath math="f(x)=|x-2|-2" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=-1,0,1" />에서는 모두{" "}
                                    <InlineMath math="x-2<0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=-(x-2)-2\\
                &=-x
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=1,\qquad
                f(0)=0,\qquad
                f(1)=-1
            `} />

                                <p className="leading-8">
                                    모든 함숫값이 <InlineMath math="X" />에 속하므로 함수이고,
                                    함숫값이 모두 서로 다르며 치역도{" "}
                                    <InlineMath math="X" />와 같습니다. 따라서
                                    일대일대응입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로 <InlineMath math="X" />에서{" "}
                                    <InlineMath math="X" />로의 함수는
                                </p>

                                <BlockMath math={String.raw`
                \text{ㄱ,\ ㄷ,\ ㄹ}
            `} />

                                <p className="leading-8">
                                    의 <InlineMath math="3" />개이므로
                                </p>

                                <BlockMath math={String.raw`
                a=3
            `} />

                                <p className="leading-8">
                                    이고, 그중 일대일대응은
                                </p>

                                <BlockMath math={String.raw`
                \text{ㄱ,\ ㄹ}
            `} />

                                <p className="leading-8">
                                    의 <InlineMath math="2" />개이므로
                                </p>

                                <BlockMath math={String.raw`
                b=2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b=3+2=5
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{5}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        이 문제에서는 바로 일대일대응인지 판단하기 전에 먼저{" "}
                                        <span className="font-bold text-white">
                                            X에서 X로의 함수인지
                                        </span>
                                        를 확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \begin{array}{c}
                    \text{모든 }x\in X\text{에 대하여 }f(x)\in X\\
                    \Downarrow\\
                    X\text{에서 }X\text{로의 함수}\\
                    \Downarrow\\
                    \text{함숫값이 모두 서로 다른지 확인}
                    \end{array}
                    }
                `} />

                                    <p className="leading-8">
                                        특히 이 문제는 정의역과 공역이 같은 유한집합{" "}
                                        <InlineMath math="X" />이므로, 함수가 된다는 것을 확인한
                                        뒤 함숫값이 모두 서로 다르면 자동으로 치역이{" "}
                                        <InlineMath math="X" /> 전체가 되어 일대일대응입니다.
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
                                집합 <InlineMath math="A=\{-1,0,1\}" />에 대하여{" "}
                                <InlineMath math="A" />에서 <InlineMath math="A" />로의 함수{" "}
                                <InlineMath math="f" />가 다음과 같을 때, 항등함수가 아닌 것은?
                            </p>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>
                                    ① <InlineMath math="f(x)=x" />
                                </div>
                                <div>
                                    ② <InlineMath math="f(x)=x^3" />
                                </div>
                                <div>
                                    ③ <InlineMath math="f(x)=x^5" />
                                </div>
                                <div>
                                    ④ <InlineMath math="f(x)=|x|" />
                                </div>
                                <div>
                                    ⑤ <InlineMath math="f(x)=x|x|" />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    항등함수는 정의역의 모든 원소에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    가 성립하는 함수입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 함수식의 모양만 보는 것이 아니라 주어진 정의역{" "}
                                    <InlineMath math="A=\{-1,0,1\}" />의 각 원소에서{" "}
                                    <InlineMath math="f(x)=x" />가 성립하는지 확인합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="f(x)=x" />
                                </p>

                                <p className="leading-8">
                                    정의역의 모든 원소에서 그대로 자기 자신이 나오므로
                                    항등함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="f(x)=x^3" />
                                </p>

                                <BlockMath math={String.raw`
                (-1)^3=-1,\qquad
                0^3=0,\qquad
                1^3=1
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="A" />의 모든 원소에서{" "}
                                    <InlineMath math="f(x)=x" />이므로 항등함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ③ <InlineMath math="f(x)=x^5" />
                                </p>

                                <BlockMath math={String.raw`
                (-1)^5=-1,\qquad
                0^5=0,\qquad
                1^5=1
            `} />

                                <p className="leading-8">
                                    따라서 항등함수입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ④ <InlineMath math="f(x)=|x|" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=-1" />일 때
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=|-1|=1\ne-1
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(x)=x" />가 성립하지 않습니다.
                                    따라서 항등함수가 아닙니다.
                                </p>

                                <p className="font-bold text-white">
                                    ⑤ <InlineMath math="f(x)=x|x|" />
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)&=(-1)|-1|=-1,\\
                f(0)&=0|0|=0,\\
                f(1)&=1|1|=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="A" />의 모든 원소에서{" "}
                                    <InlineMath math="f(x)=x" />이므로 항등함수입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{④}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        항등함수라고 해서 반드시 함수식 자체가{" "}
                                        <InlineMath math="f(x)=x" />의 모양이어야 하는 것은
                                        아닙니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        주어진 정의역의 모든 원소에서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{f(x)=x}
                `} />

                                    <p className="leading-8">
                                        가 성립하면 항등함수입니다. 따라서 정의역이 제한된
                                        경우에는 함수식의 모양보다{" "}
                                        <span className="font-bold text-white">
                                            정의역의 각 원소에 대한 실제 함숫값
                                        </span>
                                        을 확인해야 합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X" />를 정의역으로 하는 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^3+x^2-x
        `} />

                            <p className="leading-8 text-gray-200">
                                가 항등함수가 되도록 하는 집합 <InlineMath math="X" />의
                                개수를 구하시오.
                                (단, <InlineMath math="X\ne\varnothing" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 항등함수가 되려면
                                    정의역의 모든 원소 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    가 성립해야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x^3+x^2-x=x
            `} />

                                <p className="leading-8">
                                    를 만족하는 <InlineMath math="x" />의 값을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x^3+x^2-2x&=0\\
                x(x^2+x-2)&=0\\
                x(x+2)(x-1)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x=-2,\qquad0,\qquad1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    즉, 함수 <InlineMath math="f" />에 넣었을 때
                                    자기 자신이 그대로 나오는 원소들의 집합은
                                </p>

                                <BlockMath math={String.raw`
                \{-2,0,1\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f" />가 항등함수가 되려면
                                    정의역 <InlineMath math="X" />의 모든 원소가 이 집합에서
                                    선택되어야 하므로
                                </p>

                                <BlockMath math={String.raw`
                X\subset\{-2,0,1\}
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    원소가 <InlineMath math="3" />개인 집합의 부분집합은
                                    모두 <InlineMath math="2^3" />개이지만,
                                    문제에서 <InlineMath math="X\ne\varnothing" />이므로
                                    공집합을 제외합니다.
                                </p>

                                <BlockMath math={String.raw`
                2^3-1=7
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
                                        항등함수에서는 정의역의 모든 원소가 자기 자신과
                                        대응해야 하므로 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{f(x)=x}
                `} />

                                    <p className="leading-8">
                                        를 만족하는 원소를 모두 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x
                    \Longleftrightarrow
                    x\in\{-2,0,1\}
                `} />

                                    <p className="leading-8">
                                        따라서 가능한 정의역은{" "}
                                        <InlineMath math="\{-2,0,1\}" />의
                                        공집합이 아닌 부분집합입니다.
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
                                집합 <InlineMath math="X=\{-1,0,1\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 세 함수{" "}
                                <InlineMath math="f,\ g,\ h" />는 각각 일대일대응, 항등함수,
                                상수함수이다. 세 함수가 다음 조건을 만족시킬 때,{" "}
                                <InlineMath math="f(-1)-g(1)+h(0)" />의 값을 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가){" "}
                                    <InlineMath math="f(0)=g(-1)=h(1)" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나){" "}
                                    <InlineMath math="h(0)+g(1)=f(1)" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="g" />는 항등함수이므로
                                    정의역의 모든 원소가 자기 자신과 대응합니다.
                                </p>

                                <BlockMath math={String.raw`
                g(-1)=-1,\qquad g(1)=1
            `} />

                                <p className="leading-8">
                                    조건 (가)에서
                                </p>

                                <BlockMath math={String.raw`
                f(0)=g(-1)=h(1)
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="g(-1)=-1" />을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                f(0)=-1,\qquad h(1)=-1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="h" />는 상수함수이므로
                                    정의역의 모든 원소에 대한 함숫값이 같습니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                h(-1)=h(0)=h(1)=-1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                h(0)=-1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 조건 (나)를 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(1)
                &=h(0)+g(1)\\
                &=-1+1\\
                &=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 지금까지 함수 <InlineMath math="f" />의 대응은
                                </p>

                                <BlockMath math={String.raw`
                f(0)=-1,\qquad f(1)=0
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응입니다. 따라서 서로 다른 정의역의 원소는
                                    서로 다른 함숫값을 가지며, 치역은{" "}
                                    <InlineMath math="X=\{-1,0,1\}" /> 전체가 되어야 합니다.
                                </p>

                                <p className="leading-8">
                                    이미 함숫값으로 <InlineMath math="-1,\ 0" />이 나왔으므로
                                    남은 <InlineMath math="x=-1" />의 함숫값은{" "}
                                    <InlineMath math="1" />이어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(-1)=1
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)-g(1)+h(0)
                &=1-1+(-1)\\
                &=-1
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-1}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        세 함수의 종류에 따른 성질을 각각 해석하는 것이
                                        핵심입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{array}{ccl}
                    \text{항등함수 }g &:& g(x)=x\\[4pt]
                    \text{상수함수 }h &:& \text{모든 함숫값이 같다}\\[4pt]
                    \text{일대일대응 }f &:&
                    \text{서로 다른 원소가 서로 다른 원소와 빠짐없이 대응}
                    \end{array}
                `} />

                                    <p className="leading-8">
                                        특히 유한집합 <InlineMath math="X=\{-1,0,1\}" />에서
                                        일대일대응인 <InlineMath math="f" />의 함숫값은{" "}
                                        <InlineMath math="-1,\ 0,\ 1" />이 각각 한 번씩
                                        나타나야 합니다.
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
                                집합 <InlineMath math="X=\{a,b,c\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            -4 & (x<-2)\\
            2x+1 & (-2\le x\le1)\\
            3 & (x>1)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                이 항등함수일 때, <InlineMath math="a+b+c" />의 값을 구하시오.
                                (단, <InlineMath math="a,\ b,\ c" />는 서로 다른 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 항등함수이므로 정의역{" "}
                                    <InlineMath math="X" />의 모든 원소 <InlineMath math="x" />에
                                    대하여
                                </p>

                                <BlockMath math={String.raw`
                \boxed{f(x)=x}
            `} />

                                <p className="leading-8">
                                    가 성립해야 합니다. 주어진 함수는 구간에 따라 식이 다르므로
                                    각 구간에서 <InlineMath math="f(x)=x" />를 만족하는 값을
                                    구합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="x<-2" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=-4" />이므로
                                </p>

                                <BlockMath math={String.raw`
                -4=x
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="x=-4" />이고,{" "}
                                    <InlineMath math="-4<-2" />이므로 주어진 구간을 만족합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="-2\le x\le1" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=2x+1" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2x+1&=x\\
                x&=-1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="-2\le-1\le1" />이므로 주어진 구간을
                                    만족합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ③ <InlineMath math="x>1" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                3=x
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="x=3" />이고,{" "}
                                    <InlineMath math="3>1" />이므로 주어진 구간을 만족합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(x)=x" />를 만족하는 값은
                                </p>

                                <BlockMath math={String.raw`
                -4,\qquad -1,\qquad 3
            `} />

                                <p className="leading-8">
                                    입니다. <InlineMath math="a,\ b,\ c" />는 서로 다른 세
                                    상수이고 <InlineMath math="X=\{a,b,c\}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                X=\{-4,-1,3\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b+c=-4-1+3=-2
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-2}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        항등함수의 핵심 조건은 정의역의 모든 원소에 대하여
                                        함숫값과 입력값이 같다는 것입니다.
                                        따라서 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                f(x)=x
            `} />

                                    <p className="leading-8">
                                        를 만족하는 값을 찾습니다. 함수가 구간별로 정의되어
                                        있으면 각 구간에서 방정식을 풀고, 구한 값이 해당 구간의
                                        조건을 만족하는지도 반드시 확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x
                    \quad\Longleftrightarrow\quad
                    x=-4,-1,3
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,2,3,4\}" />,{" "}
                                <InlineMath math="Y=\{1,3,5,7\}" />에 대하여 함수{" "}
                                <InlineMath math="f" />는 <InlineMath math="X" />에서{" "}
                                <InlineMath math="Y" />로의 일대일대응이고
                            </p>

                            <BlockMath math={String.raw`
            f(2)=1,\qquad f(1)-f(3)=4
        `} />

                            <p className="leading-8 text-gray-200">
                                일 때, <InlineMath math="f(3)+f(4)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는 일대일대응이므로
                                    공역 <InlineMath math="Y=\{1,3,5,7\}" />의 각 원소가
                                    함숫값으로 하나씩 빠짐없이 나와야 합니다.
                                </p>

                                <p className="leading-8">
                                    그런데
                                </p>

                                <BlockMath math={String.raw`
                f(2)=1
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="1" />은 이미{" "}
                                    <InlineMath math="x=2" />의 함숫값으로 사용되었습니다.
                                    따라서 일대일대응에서 다른 원소의 함숫값은{" "}
                                    <InlineMath math="1" />이 될 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    이제
                                </p>

                                <BlockMath math={String.raw`
                f(1)-f(3)=4
            `} />

                                <p className="leading-8">
                                    를 만족하도록 공역의 원소를 살펴봅니다.
                                    <InlineMath math="Y" />의 원소 중 차가{" "}
                                    <InlineMath math="4" />인 경우는
                                </p>

                                <BlockMath math={String.raw`
                5-1=4,\qquad 7-3=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러나 <InlineMath math="1" />은 이미{" "}
                                    <InlineMath math="f(2)" />의 값이므로{" "}
                                    <InlineMath math="f(3)=1" />이 될 수 없습니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(1)=7,\qquad f(3)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    지금까지 함숫값으로
                                </p>

                                <BlockMath math={String.raw`
                1,\qquad 3,\qquad 7
            `} />

                                <p className="leading-8">
                                    이 사용되었습니다. 함수 <InlineMath math="f" />는
                                    일대일대응이므로 공역의 남은 원소{" "}
                                    <InlineMath math="5" />가 <InlineMath math="f(4)" />의
                                    값이 되어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(4)=5
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)+f(4)
                &=3+5\\
                &=8
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{8}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        유한집합 사이의 일대일대응에서는 정의역의 원소와
                                        공역의 원소가 하나씩 빠짐없이 짝을 이룹니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{공역의 각 원소가 함숫값으로 정확히 한 번씩 나온다}
                    }
                `} />

                                    <p className="leading-8">
                                        따라서 <InlineMath math="f(2)=1" />이면 다른 정의역의
                                        원소에서는 함숫값 <InlineMath math="1" />을 다시 사용할
                                        수 없습니다. 주어진 조건으로 대응을 하나씩 결정하고,
                                        마지막에는 공역에서 남은 원소를 이용하면 됩니다.
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,2,3\}" />,{" "}
                                <InlineMath math="Y=\{1,2,3,4\}" />에 대하여 집합{" "}
                                <InlineMath math="X" />에서 집합 <InlineMath math="Y" />로의
                                일대일함수를 <InlineMath math="f(x)" />라 하자.{" "}
                                <InlineMath math="f(2)=4" />일 때,{" "}
                                <InlineMath math="f(1)+f(3)" />의 최댓값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는 일대일함수이므로
                                    정의역의 서로 다른 원소는 서로 다른 함숫값을 가져야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                x_1\ne x_2
                \quad\Longrightarrow\quad
                f(x_1)\ne f(x_2)
            `} />

                                <p className="leading-8">
                                    그런데
                                </p>

                                <BlockMath math={String.raw`
                f(2)=4
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="4" />는 이미{" "}
                                    <InlineMath math="x=2" />의 함숫값으로 사용되었습니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(1)\ne4,\qquad f(3)\ne4
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="1\ne3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)\ne f(3)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(1),\ f(3)" />은
                                    공역의 남은 원소
                                </p>

                                <BlockMath math={String.raw`
                1,\qquad2,\qquad3
            `} />

                                <p className="leading-8">
                                    중 서로 다른 두 수입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)+f(3)" />을 가장 크게 하려면
                                    이 중 가장 큰 두 수 <InlineMath math="3,\ 2" />를
                                    함숫값으로 선택하면 됩니다.
                                </p>

                                <BlockMath math={String.raw`
                f(1)+f(3)\le3+2=5
            `} />

                                <p className="leading-8">
                                    실제로
                                </p>

                                <BlockMath math={String.raw`
                f(1)=3,\qquad f(2)=4,\qquad f(3)=2
            `} />

                                <p className="leading-8">
                                    와 같이 정하면 일대일함수가 되므로 최댓값{" "}
                                    <InlineMath math="5" />는 실제로 가능합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{5}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        일대일함수에서는 서로 다른 정의역의 원소가 같은 함숫값을
                                        가질 수 없습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \text{정의역의 서로 다른 원소}
                        \longrightarrow
                        \text{서로 다른 함숫값}
                    }
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="f(2)=4" />이므로{" "}
                                        <InlineMath math="4" />는 다시 사용할 수 없고,
                                        남은 <InlineMath math="1,2,3" /> 중 서로 다른 두 값을
                                        선택해야 합니다. 합의 최댓값을 구하려면 가장 큰 두 값을
                                        선택하면 됩니다.
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
                                집합 <InlineMath math="X=\{2,4,6,8,10\}" />에 대하여
                                일대일대응인 함수
                            </p>

                            <BlockMath math={String.raw`
            f:X\longrightarrow X
        `} />

                            <p className="leading-8 text-gray-200">
                                가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가){" "}
                                    <InlineMath math="f(4)-f(6)=f(8)-f(2)=f(10)" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나){" "}
                                    <InlineMath math="f(2)<f(4)<f(8)" />
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-200">
                                <InlineMath math="f(2)+f(8)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응이므로 다섯 함숫값
                                </p>

                                <BlockMath math={String.raw`
                f(2),\ f(4),\ f(6),\ f(8),\ f(10)
            `} />

                                <p className="leading-8">
                                    은 <InlineMath math="2,4,6,8,10" />을 하나씩 모두
                                    사용합니다.
                                </p>

                                <p className="leading-8">
                                    조건 (가)에서
                                </p>

                                <BlockMath math={String.raw`
                f(4)-f(6)=f(8)-f(2)=f(10)
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="f(10)" />은{" "}
                                    <InlineMath math="X" />의 원소이므로 양수입니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(4)>f(6),\qquad f(8)>f(2)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 조건 (나)에서
                                </p>

                                <BlockMath math={String.raw`
                f(2)<f(4)<f(8)
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(8)" />은 비교되는 세 함숫값 중
                                    가장 큽니다.
                                </p>

                                <p className="leading-8">
                                    조건 (가)의 두 차가 같은 양의 수가 되어야 하고,
                                    다섯 함숫값이 <InlineMath math="2,4,6,8,10" />을
                                    하나씩 사용해야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(10)=6" />으로 두면
                                </p>

                                <BlockMath math={String.raw`
                f(4)-f(6)=6,\qquad
                f(8)-f(2)=6
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="X" />에서 차가{" "}
                                    <InlineMath math="6" />인 두 수의 쌍은
                                </p>

                                <BlockMath math={String.raw`
                8-2=6,\qquad 10-4=6
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 <InlineMath math="f(2)<f(4)<f(8)" />을 만족하도록
                                    배치하면
                                </p>

                                <BlockMath math={String.raw`
                f(2)=4,\qquad
                f(4)=8,\qquad
                f(6)=2,\qquad
                f(8)=10
            `} />

                                <p className="leading-8">
                                    이 됩니다. 따라서 전체 대응은
                                </p>

                                <BlockMath math={String.raw`
                \begin{array}{c|ccccc}
                x&2&4&6&8&10\\ \hline
                f(x)&4&8&2&10&6
                \end{array}
            `} />

                                <p className="leading-8">
                                    이고 실제로
                                </p>

                                <BlockMath math={String.raw`
                8-2=10-4=6
            `} />

                                <p className="leading-8">
                                    이므로 모든 조건을 만족합니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                f(2)+f(8)=4+10=14
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{14}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X" />에서{" "}
                                        <InlineMath math="X" />로의 일대일대응에서는
                                        함숫값이 <InlineMath math="X" />의 원소를 하나씩
                                        빠짐없이 사용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \{f(2),f(4),f(6),f(8),f(10)\}
                    =
                    \{2,4,6,8,10\}
                `} />

                                    <p className="leading-8">
                                        따라서 조건 (가)의{" "}
                                        <span className="font-bold text-white">같은 차</span>와
                                        조건 (나)의{" "}
                                        <span className="font-bold text-white">대소관계</span>를
                                        함께 이용하여 함숫값의 배치를 결정하는 것이 핵심입니다.
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
                                집합 <InlineMath math="X=\{-1,0,1\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=ax^2+bx+c
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응일 때, <InlineMath math="abc" />의 최댓값은?
                                (단, <InlineMath math="a,\ b,\ c" />는 실수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응이므로 세 함숫값{" "}
                                    <InlineMath math="f(-1),\ f(0),\ f(1)" />은{" "}
                                    <InlineMath math="-1,\ 0,\ 1" />을 하나씩 가져야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \{f(-1),f(0),f(1)\}=\{-1,0,1\}
            `} />

                                <p className="leading-8">
                                    한편
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-1)&=a-b+c,\\
                f(0)&=c,\\
                f(1)&=a+b+c
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="f(0)=c" />에서
                                </p>

                                <BlockMath math={String.raw`
                c=-1,\ 0,\ 1
            `} />

                                <p className="leading-8">
                                    로 나누어 생각합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="c=0" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="abc=0" />입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="c=1" />일 때
                                </p>

                                <p className="leading-8">
                                    이미 <InlineMath math="f(0)=1" />이므로 일대일대응이
                                    되려면 <InlineMath math="f(-1),f(1)" />은{" "}
                                    <InlineMath math="-1,\ 0" />을 하나씩 가져야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(-1)=-1,\ f(1)=0" />이면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a-b+1&=-1,\\
                a+b+1&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 식을 풀면
                                </p>

                                <BlockMath math={String.raw`
                a=-\frac32,\qquad b=\frac12
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                abc=-\frac34
            `} />

                                <p className="leading-8">
                                    반대로 <InlineMath math="f(-1)=0,\ f(1)=-1" />이면
                                </p>

                                <BlockMath math={String.raw`
                a=-\frac32,\qquad b=-\frac12
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                abc=\frac34
            `} />

                                <p className="font-bold text-white">
                                    ③ <InlineMath math="c=-1" />일 때
                                </p>

                                <p className="leading-8">
                                    같은 방법으로 <InlineMath math="f(-1),f(1)" />은{" "}
                                    <InlineMath math="0,\ 1" />을 하나씩 가져야 합니다.
                                    가능한 두 경우를 계산하면
                                </p>

                                <BlockMath math={String.raw`
                abc=-\frac34
                \quad\text{또는}\quad
                abc=\frac34
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 가능한 <InlineMath math="abc" />의 값은
                                </p>

                                <BlockMath math={String.raw`
                -\frac34,\qquad 0,\qquad \frac34
            `} />

                                <p className="leading-8">
                                    이므로 최댓값은 <InlineMath math="\frac34" />입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{\frac34}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        정의역과 공역이 모두{" "}
                                        <InlineMath math="X=\{-1,0,1\}" />이고 일대일대응이므로
                                        세 함숫값은 <InlineMath math="-1,\ 0,\ 1" />을
                                        하나씩 가져야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \{f(-1),f(0),f(1)\}
                    =
                    \{-1,0,1\}
                    }
                `} />

                                    <p className="leading-8">
                                        특히 <InlineMath math="f(0)=c" />이므로{" "}
                                        <InlineMath math="c" />의 값부터 정하면 경우를
                                        간단하게 나눌 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                공집합이 아닌 집합 <InlineMath math="X" />를 정의역으로 하는 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=(x-2)^3+2
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 함수 <InlineMath math="f" />가{" "}
                                <InlineMath math="X" />에서의 항등함수가 되도록 하는
                                집합 <InlineMath math="X" />의 개수는?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가{" "}
                                    <InlineMath math="X" />에서의 항등함수가 되려면
                                    정의역 <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    가 성립해야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                (x-2)^3+2=x
            `} />

                                <p className="leading-8">
                                    를 만족하는 <InlineMath math="x" />의 값을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (x-2)^3+2&=x\\
                (x-2)^3&=x-2\\
                (x-2)^3-(x-2)&=0\\
                (x-2)\{(x-2)^2-1\}&=0\\
                (x-2)(x-1)(x-3)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x=1,\qquad2,\qquad3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    즉, 함수에 넣었을 때 자기 자신이 그대로 나오는 원소들의
                                    집합은
                                </p>

                                <BlockMath math={String.raw`
                \{1,2,3\}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 함수 <InlineMath math="f" />가{" "}
                                    <InlineMath math="X" />에서 항등함수가 되려면
                                </p>

                                <BlockMath math={String.raw`
                X\subset\{1,2,3\}
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    원소가 <InlineMath math="3" />개인 집합의 부분집합은
                                    모두 <InlineMath math="2^3" />개이고,
                                    문제에서 <InlineMath math="X" />는 공집합이 아니므로
                                    공집합을 제외합니다.
                                </p>

                                <BlockMath math={String.raw`
                2^3-1=7
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
                                        항등함수가 되기 위한 정의역을 구할 때는 먼저
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{f(x)=x}
                `} />

                                    <p className="leading-8">
                                        를 만족하는 모든 원소를 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x
                    \quad\Longleftrightarrow\quad
                    x\in\{1,2,3\}
                `} />

                                    <p className="leading-8">
                                        정의역 <InlineMath math="X" />는 이 원소들 중 일부를
                                        선택하여 만들면 되므로 가능한 정의역은{" "}
                                        <InlineMath math="\{1,2,3\}" />의 공집합이 아닌
                                        부분집합입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 12 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 12</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                실수 전체의 집합에서 정의된 두 함수{" "}
                                <InlineMath math="f,\ g" />에 대하여{" "}
                                <InlineMath math="f" />는 항등함수이고{" "}
                                <InlineMath math="g" />는 상수함수이다.<br />
                                <InlineMath math="f(0)+g(5)=-2" />일 때,{" "}
                                <InlineMath math="f(10)+g(10)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는 항등함수이므로
                                    모든 실수 <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f(0)=0,\qquad f(10)=10
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    주어진 조건
                                </p>

                                <BlockMath math={String.raw`
                f(0)+g(5)=-2
            `} />

                                <p className="leading-8">
                                    에 <InlineMath math="f(0)=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                0+g(5)&=-2\\
                g(5)&=-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="g" />는 상수함수이므로
                                    모든 실수에서 함숫값이 같습니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                g(10)=g(5)=-2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(10)+g(10)
                &=10+(-2)\\
                &=8
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{8}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        항등함수와 상수함수는 각각 다음과 같이 해석하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \text{항등함수 }f &: \quad f(x)=x\\
                    \text{상수함수 }g &: \quad
                    \text{모든 }x\text{에서 함숫값이 같다}
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서 항등함수에서는 입력값을 그대로 함숫값으로 쓰고,
                                        상수함수에서는 한 곳의 함숫값을 알면 다른 모든 곳의
                                        함숫값도 바로 알 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 13</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여 집합{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                일대일대응인 함수를 <InlineMath math="f(x)" />,
                                항등함수를 <InlineMath math="g(x)" />,
                                상수함수를 <InlineMath math="h(x)" />라 할 때,
                                다음 조건을 만족시킬 때,{" "}
                                <InlineMath math="f(3)+g(1)+h(4)" />의 값은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="f(1)=g(3)+h(2)" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="f(4)=f(2)+2" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="g" />는 항등함수이므로
                                </p>

                                <BlockMath math={String.raw`
                g(3)=3,\qquad g(1)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (가)에 <InlineMath math="g(3)=3" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(1)=3+h(2)
            `} />

                                <p className="leading-8">
                                    입니다. 함수 <InlineMath math="h" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    상수함수이므로
                                </p>

                                <BlockMath math={String.raw`
                h(2)\in\{1,2,3,4\}
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="f(1)" />도{" "}
                                    <InlineMath math="X" />의 원소이어야 합니다.
                                    따라서 <InlineMath math="3+h(2)" />가{" "}
                                    <InlineMath math="X" />의 원소가 되려면
                                </p>

                                <BlockMath math={String.raw`
                h(2)=1
            `} />

                                <p className="leading-8">
                                    이어야 합니다. 그러므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="h" />는 상수함수이므로 모든
                                    함숫값이 같습니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                h(4)=h(2)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응이고 이미 <InlineMath math="f(1)=4" />이므로
                                    나머지 세 함숫값은
                                </p>

                                <BlockMath math={String.raw`
                1,\qquad2,\qquad3
            `} />

                                <p className="leading-8">
                                    을 하나씩 가져야 합니다.
                                </p>

                                <p className="leading-8">
                                    조건 (나)
                                </p>

                                <BlockMath math={String.raw`
                f(4)=f(2)+2
            `} />

                                <p className="leading-8">
                                    에서 <InlineMath math="1,2,3" /> 중 차가{" "}
                                    <InlineMath math="2" />인 두 값은{" "}
                                    <InlineMath math="1,\ 3" />뿐이므로
                                </p>

                                <BlockMath math={String.raw`
                f(2)=1,\qquad f(4)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 일대일대응에서 아직 사용되지 않은 함숫값은{" "}
                                    <InlineMath math="2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(3)+g(1)+h(4)
                &=2+1+1\\
                &=4
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{4}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        세 함수의 성질을 순서대로 이용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{array}{ccl}
                    \text{항등함수 }g &:& g(x)=x\\[4pt]
                    \text{상수함수 }h &:& \text{모든 함숫값이 같다}\\[4pt]
                    \text{일대일대응 }f &:&
                    \text{공역의 원소를 하나씩 빠짐없이 사용한다}
                    \end{array}
                `} />

                                    <p className="leading-8">
                                        특히 <InlineMath math="f,\ g,\ h" /> 모두{" "}
                                        <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                        함수이므로 모든 함숫값은 반드시{" "}
                                        <InlineMath math="X=\{1,2,3,4\}" /> 안에 있어야 한다는
                                        점도 중요합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 14</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4,5,6\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                세 함수 <InlineMath math="f,\ g,\ h" />가 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="f" />는 항등함수이고{" "}
                                    <InlineMath math="g" />는 상수함수이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) 집합 <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)+g(x)+h(x)=8
            `} />

                                <p className="leading-8 text-gray-200">
                                    이다.
                                </p>
                            </div>

                            <p className="mt-5 leading-8 text-gray-200">
                                <InlineMath math="g(5)+h(1)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는 항등함수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="g" />는 상수함수이므로
                                    모든 함숫값이 같은 상수 <InlineMath math="c" />라고 놓으면
                                </p>

                                <BlockMath math={String.raw`
                g(x)=c
            `} />

                                <p className="leading-8">
                                    입니다. 또한 <InlineMath math="g:X\to X" />이므로
                                    함숫값 <InlineMath math="c" />는 반드시{" "}
                                    <InlineMath math="X" />의 원소입니다.
                                </p>

                                <BlockMath math={String.raw`
                c\in\{1,2,3,4,5,6\}
            `} />

                                <p className="leading-8">
                                    조건 (나)에 <InlineMath math="f(x)=x" />와{" "}
                                    <InlineMath math="g(x)=c" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                x+c+h(x)=8
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                h(x)=8-x-c
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="h" />도{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수이므로 모든 함숫값이{" "}
                                    <InlineMath math="X=\{1,2,3,4,5,6\}" />에 속해야 합니다.
                                </p>

                                <p className="leading-8">
                                    특히 <InlineMath math="x=6" />일 때
                                </p>

                                <BlockMath math={String.raw`
                h(6)=8-6-c=2-c
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="h(6)\in X" />이므로
                                </p>

                                <BlockMath math={String.raw`
                1\le2-c
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                c\le1
            `} />

                                <p className="leading-8">
                                    입니다. 그런데 <InlineMath math="c\in X" />이므로
                                </p>

                                <BlockMath math={String.raw`
                c=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 상수함수 <InlineMath math="g" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                g(5)=1
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                h(1)
                &=8-1-1\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 그러므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                g(5)+h(1)
                &=1+6\\
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
                                        항등함수와 상수함수의 성질을 먼저 식으로 나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x,\qquad g(x)=c
                `} />

                                    <p className="leading-8">
                                        그리고 세 함수가 모두{" "}
                                        <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                        함수라는 점을 이용해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    g(x)\in X,\qquad h(x)\in X
                `} />

                                    <p className="leading-8">
                                        특히 <InlineMath math="h(6)=2-c" />도{" "}
                                        <InlineMath math="X" />의 원소이어야 하므로
                                        상수함수 <InlineMath math="g" />의 함숫값{" "}
                                        <InlineMath math="c" />를 결정할 수 있습니다.
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
                                집합 <InlineMath math="X=\{-4,2\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            3x+a & (x<0)\\
            x^2-3x+b & (x\ge0)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                이 항등함수일 때, <InlineMath math="a\times b" />의 값은?
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는 항등함수이므로
                                    정의역의 모든 원소에 대하여
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x
            `} />

                                <p className="leading-8">
                                    가 성립해야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="-4<0" />이므로 첫 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-4)&=-4\\
                3(-4)+a&=-4\\
                -12+a&=-4\\
                a&=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="2\ge0" />이므로 두 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2)&=2\\
                2^2-3\cdot2+b&=2\\
                -2+b&=2\\
                b&=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=8,\qquad b=4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                ab=8\cdot4=32
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{32}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        항등함수에서는 정의역의 각 원소가 자기 자신과 대응합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f(-4)=-4,\qquad f(2)=2
                    }
                `} />

                                    <p className="leading-8">
                                        주어진 함수가 구간별로 정의되어 있으므로 각 원소가 어느
                                        조건에 해당하는지 먼저 확인한 뒤, 각각{" "}
                                        <InlineMath math="f(x)=x" />를 적용하면 됩니다.
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
                                집합 <InlineMath math="X=\{1,3,5\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            x+2 & (x<2)\\
            x^2+ax+b & (x\ge2)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                가 상수함수일 때, <InlineMath math="a+b" />의 값은?
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 상수함수이므로
                                    정의역의 모든 원소에서 함숫값이 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(1)=f(3)=f(5)
            `} />

                                <p className="leading-8">
                                    먼저 <InlineMath math="1<2" />이므로 첫 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                f(1)=1+2=3
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 상수함수의 모든 함숫값은{" "}
                                    <InlineMath math="3" />이어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(3)=3,\qquad f(5)=3
            `} />

                                <p className="leading-8">
                                    <InlineMath math="3,\ 5" />는 모두{" "}
                                    <InlineMath math="2" /> 이상이므로 두 번째 대응규칙을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                3^2+3a+b&=3\\
                5^2+5a+b&=3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                3a+b&=-6\\
                5a+b&=-22
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 두 식을 빼면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2a&=-16\\
                a&=-8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이를 <InlineMath math="3a+b=-6" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                3(-8)+b&=-6\\
                b&=18
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b=-8+18=10
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{10}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        상수함수에서는 정의역의 모든 원소의 함숫값이 같습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{f(1)=f(3)=f(5)}
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="f(1)=3" />이 바로
                                        결정되므로 상수함수의 함숫값이{" "}
                                        <InlineMath math="3" />임을 먼저 알아낸 뒤
                                    </p>

                                    <BlockMath math={String.raw`
                    f(3)=3,\qquad f(5)=3
                `} />

                                    <p className="leading-8">
                                        을 이용하여 <InlineMath math="a,\ b" />를 결정하면 됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 17 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 17</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 두 함수
                            </p>

                            <BlockMath math={String.raw`
            f:X\longrightarrow X,
            \qquad
            g:X\longrightarrow X
        `} />

                            <p className="leading-8 text-gray-200">
                                가 있다. 함수 <InlineMath math="y=f(x)" />는{" "}
                                <InlineMath math="f(3)=1" />을 만족시키고,
                                함수 <InlineMath math="y=g(x)" />의 그래프는 그림과 같다.
                            </p>

                            <div className="mt-5 flex justify-center">
                                <img
                                    src="/images/commonMath2/3.3_17.png"
                                    alt="함수 g의 그래프"
                                    className="w-full max-w-[200px] rounded-lg"
                                />
                            </div>

                            <p className="mt-5 leading-8 text-gray-200">
                                함수 <InlineMath math="h:X\to X" />를
                            </p>

                            <BlockMath math={String.raw`
            h(x)=
            \begin{cases}
            f(x) & (f(x)\ge g(x))\\
            g(x) & (g(x)>f(x))
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                라 하면 함수 <InlineMath math="h(x)" />가 일대일대응일 때,{" "}
                                <InlineMath math="3f(4)+h(1)" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="h" />의 정의를 보면{" "}
                                    <InlineMath math="f(x)" />와 <InlineMath math="g(x)" /> 중
                                    더 큰 값을 함숫값으로 갖습니다.
                                </p>

                                <BlockMath math={String.raw`
                h(x)=\max\{f(x),g(x)\}
            `} />

                                <p className="leading-8">
                                    먼저 그래프에서 함수 <InlineMath math="g" />의 함숫값을 읽으면
                                </p>

                                <BlockMath math={String.raw`
                g(1)=3,\qquad
                g(2)=2,\qquad
                g(3)=3,\qquad
                g(4)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    주어진 조건에서 <InlineMath math="f(3)=1" />이고{" "}
                                    <InlineMath math="g(3)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                h(3)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="g(1)=3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                h(1)\ge3
            `} />

                                <p className="leading-8">
                                    입니다. 함수 <InlineMath math="h" />는 일대일대응이고
                                    이미 <InlineMath math="h(3)=3" />이므로{" "}
                                    <InlineMath math="h(1)" />은 <InlineMath math="3" />이
                                    될 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="h(1)\in X" />이므로
                                </p>

                                <BlockMath math={String.raw`
                h(1)=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    일대일대응에서 함숫값{" "}
                                    <InlineMath math="1,2,3,4" />는 각각 한 번씩 나와야 합니다.
                                    이미
                                </p>

                                <BlockMath math={String.raw`
                h(1)=4,\qquad h(3)=3
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="h(2),h(4)" />는{" "}
                                    <InlineMath math="1,\ 2" />를 하나씩 가져야 합니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="g(2)=2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                h(2)\ge2
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                h(2)=2,\qquad h(4)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="g(4)=1" />이고{" "}
                                    <InlineMath math="h(4)=1" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \max\{f(4),1\}=1
            `} />

                                <p className="leading-8">
                                    입니다. 또한 <InlineMath math="f(4)\in X=\{1,2,3,4\}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(4)=1
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                3f(4)+h(1)
                &=3\cdot1+4\\
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
                                        먼저 함수 <InlineMath math="h" />가 두 함숫값 중
                                        큰 값을 선택한다는 것을 해석합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    h(x)=\max\{f(x),g(x)\}
                `} />

                                    <p className="leading-8">
                                        그리고 <InlineMath math="h:X\to X" />가 일대일대응이므로
                                        함숫값 <InlineMath math="1,2,3,4" />가 각각 정확히
                                        한 번씩 나와야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \{h(1),h(2),h(3),h(4)\}
                        =
                        \{1,2,3,4\}
                    }
                `} />

                                    <p className="leading-8">
                                        이미 결정된 함숫값과{" "}
                                        <InlineMath math="h(x)\ge g(x)" />를 함께 이용하면
                                        나머지 대응을 차례대로 결정할 수 있습니다.
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

                        <div className="space-y-5 text-gray-200">
                            <div>
                                <p className="mb-2 font-bold text-white">
                                    일대일함수
                                </p>

                                <BlockMath math={String.raw`
                        x_1\ne x_2
                        \Rightarrow
                        f(x_1)\ne f(x_2)
                    `} />

                                <p className="text-center leading-8">
                                    정의역의 서로 다른 원소는 서로 다른 함숫값을 갖는다.
                                </p>

                                <BlockMath math={String.raw`
                        f(x_1)=f(x_2)
                        \Rightarrow
                        x_1=x_2
                    `} />

                                <p className="text-center leading-8">
                                    같은 함숫값을 갖는 정의역의 원소는 하나뿐이다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    일대일대응
                                </p>

                                <BlockMath math={String.raw`
                        \text{일대일함수}
                        +
                        \text{치역}=\text{공역}
                    `} />
                            </div>

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    항등함수
                                </p>

                                <BlockMath math={String.raw`
                        f(x)=x
                    `} />

                                <p className="text-center leading-8">
                                    입력한 원소가 그대로 함숫값으로 나온다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 font-bold text-white">
                                    상수함수
                                </p>

                                <BlockMath math={String.raw`
                        f(x)=c
                    `} />

                                <p className="text-center leading-8">
                                    정의역의 모든 원소가 하나의 같은 함숫값을 갖는다.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                    \begin{array}{c}
                    \text{함수 판정}\rightarrow\text{세로선}\\[4pt]
                    \text{일대일함수 판정}\rightarrow\text{가로선}\\[6pt]
                    \text{유한집합에서 일대일함수}:\
                    n(X)\le n(Y)\\[4pt]
                    \text{유한집합에서 일대일대응}:\
                    n(X)=n(Y)
                    \end{array}
                    }
                `} />
                        </div>
                    </div>

                </div>

            </section>

            {/* 3.4 일대일대응과 그래프 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.4 일대일대응과 그래프
                </h2>

                <p className="leading-8 text-gray-300">
                    함수가 일대일대응이 되려면 서로 다른 입력값이 서로 다른 함숫값을
                    가져야 하고, 공역의 모든 원소가 빠짐없이 함숫값으로 나타나야 합니다.
                    그래프에서는 함수의 모양과 정의역·치역·공역을 함께 살펴보면
                    일대일대응이 되는 조건을 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 그래프와 일대일대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 그래프와 일대일대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일대일함수의 그래프는 모든 가로선과 많아야 한 점에서 만납니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{일대일함수}
                    \quad\Longleftrightarrow\quad
                    \text{모든 가로선과 많아야 한 점에서 만난다}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            여기에 치역과 공역이 같아야 일대일대응이 됩니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{일대일대응}
                    =
                    \text{일대일함수}
                    +
                    \text{치역}=\text{공역}
                }
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                그래프에서 확인할 것
                            </p>

                            <p className="leading-8 text-gray-200">
                                먼저 그래프의 진행 방향이 바뀌지 않아
                                서로 다른 <InlineMath math="x" />값에서 같은 함숫값이
                                나오지 않는지 확인합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                그다음 실제로 나오는 함숫값의 범위인{" "}
                                <span className="font-bold text-white">치역</span>이
                                주어진 <span className="font-bold text-white">공역</span>과
                                같은지 확인합니다.
                            </p>
                        </div>
                    </div>

                    {/* 2. 절댓값이 포함된 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 절댓값이 포함된 함수의 일대일대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            절댓값이 포함된 함수는 절댓값 안의 식의 부호가 바뀌는 값을
                            기준으로 구간을 나누어 생각합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            각 구간에서는 일차함수가 되므로{" "}
                            <span className="font-bold text-white">
                                각 구간의 기울기
                            </span>
                            를 비교하면 그래프의 진행 방향을 판단할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                        \text{절댓값 제거}
                        \;\longrightarrow\;
                        \text{구간별 함수}
                        \;\longrightarrow\;
                        \text{기울기의 방향 비교}
                    }
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            그래프가 한 구간에서는 증가하고 다른 구간에서는 감소하면
                            같은 함숫값을 갖는 서로 다른 <InlineMath math="x" />가
                            생길 수 있으므로 일대일함수가 될 수 없습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 연결된 두 일차함수가 전체적으로 한 방향으로 움직이려면
                            두 기울기의 부호가 같아야 합니다.
                        </p>
                    </div>

                    {/* 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            예시 
                        </h3>

                        <p className="leading-8 text-gray-200">
                            실수 전체의 집합에서 실수 전체의 집합으로의 함수
                        </p>

                        <BlockMath math={String.raw`
                f(x)=a|x-2|+2x+3
            `} />

                        <p className="leading-8 text-gray-200">
                            가 일대일대응이 되도록 하는 실수{" "}
                            <InlineMath math="a" />의 값의 범위를 구해 봅시다.
                        </p>

                        <div className="mt-6 space-y-5 text-gray-300">
                            <p className="leading-8">
                                절댓값 안의 <InlineMath math="x-2" />의 부호가
                                바뀌는 <InlineMath math="x=2" />를 기준으로 나눕니다.
                            </p>

                            <p className="font-bold text-white">
                                <InlineMath math="x<2" />일 때
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    f(x)
                    &=a(2-x)+2x+3\\
                    &=(2-a)x+2a+3
                    \end{aligned}
                `} />

                            <p className="font-bold text-white">
                                <InlineMath math="x\ge2" />일 때
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    f(x)
                    &=a(x-2)+2x+3\\
                    &=(a+2)x-2a+3
                    \end{aligned}
                `} />

                            <p className="leading-8">
                                따라서 두 구간에서의 기울기는 각각
                            </p>

                            <BlockMath math={String.raw`
                    2-a,\qquad a+2
                `} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                일대일대응이 되려면 그래프가 두 구간에서 같은 방향으로
                                움직여야 하므로 두 기울기의 부호가 같아야 합니다.
                            </p>

                            <BlockMath math={String.raw`
                    (2-a)(a+2)>0
                `} />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    4-a^2&>0\\
                    a^2&<4
                    \end{aligned}
                `} />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    -2<a<2
                `} />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{-2<a<2}
                    `} />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{두 구간의 기울기의 부호가 같아야 한다}
                        }
                    `} />

                                <p className="leading-8 text-gray-200">
                                    <InlineMath math="a=-2" /> 또는{" "}
                                    <InlineMath math="a=2" />이면 한쪽 구간의 기울기가{" "}
                                    <InlineMath math="0" />이 되어 같은 함숫값을 갖는
                                    여러 <InlineMath math="x" />가 생기므로
                                    일대일함수가 아닙니다.
                                </p>
                            </div>
                        </div>

                        {/* 인터랙티브 그래프 */}
                        <AbsoluteValueBijectionExplorer />
                    </div>

                    {/* 3. 이차함수와 일대일대응 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 이차함수와 일대일대응
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이차함수의 그래프는 축을 기준으로 양쪽에서 같은 함숫값을
                            갖는 서로 다른 <InlineMath math="x" />가 존재할 수 있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 정의역으로 포물선의 양쪽을 모두 사용하면
                            일대일함수가 될 수 없습니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{이차함수는 정의역을 축의 한쪽으로 제한해야}
                    \atop
                    \text{일대일함수가 될 수 있다}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            그러나 정의역을 제한하여 일대일함수가 되었다고 해서
                            바로 일대일대응이 되는 것은 아닙니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            일대일대응이 되려면 정의역에서 만들어지는{" "}
                            <span className="font-bold text-white">치역</span>이
                            주어진 <span className="font-bold text-white">공역</span>과
                            정확히 같아야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath math={String.raw`
                    \boxed{
                    \begin{array}{c}
                    \text{정의역을 축의 한쪽으로 제한}\\[4pt]
                    \Downarrow\\[4pt]
                    \text{일대일함수인지 확인}\\[6pt]
                    \Downarrow\\[4pt]
                    \text{치역}=\text{공역인지 확인}
                    \end{array}
                    }
                `} />
                        </div>
                    </div>

                    {/* 4. 정의역과 공역의 경계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 정의역과 공역의 경계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이차함수에서 정의역이 한쪽으로 제한되어 있고 그 구간에서
                            함수가 한 방향으로 변한다면, 정의역의 시작점에서의 함숫값이
                            치역의 시작점이 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 일대일대응이 되려면 정의역의 경계에서 나오는
                            함숫값이 공역의 경계와 일치해야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{정의역의 경계}
                    \longrightarrow
                    \text{치역의 경계}
                    =
                    \text{공역의 경계}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            이 관계를 이용하면 정의역과 공역에 매개변수가 포함된
                            일대일대응 문제를 그래프와 식을 함께 이용하여 해결할 수 있습니다.
                        </p>
                    </div>

                    {/* 예시 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            예시 2
                        </h3>

                        <p className="leading-8 text-gray-200">
                            두 집합
                        </p>

                        <BlockMath math={String.raw`
                X=\{x\mid x\ge a\},
                \qquad
                Y=\{y\mid y\ge a-3\}
            `} />

                        <p className="leading-8 text-gray-200">
                            에 대하여 <InlineMath math="X" />에서{" "}
                            <InlineMath math="Y" />로의 함수
                        </p>

                        <BlockMath math={String.raw`
                f(x)=x^2-3x
            `} />

                        <p className="leading-8 text-gray-200">
                            가 일대일대응이 될 때,{" "}
                            <InlineMath math="a" />의 값을 구해 봅시다.
                        </p>

                        <div className="mt-6 space-y-5 text-gray-300">
                            <p className="leading-8">
                                함수 <InlineMath math="f(x)=x^2-3x" />의 그래프의 축은
                            </p>

                            <BlockMath math={String.raw`
                    x=\frac32
                `} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                정의역 <InlineMath math="x\ge a" />에서
                                일대일함수가 되려면 정의역이 축의 오른쪽 부분만
                                사용하도록
                            </p>

                            <BlockMath math={String.raw`
                    a\ge\frac32
                `} />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <p className="leading-8">
                                이때 함수는 정의역에서 증가하므로 정의역의 시작점{" "}
                                <InlineMath math="x=a" />에서의 함숫값{" "}
                                <InlineMath math="f(a)" />가 치역의 최솟값입니다.
                            </p>

                            <p className="leading-8">
                                공역의 최솟값은 <InlineMath math="a-3" />이므로
                                일대일대응이 되려면
                            </p>

                            <BlockMath math={String.raw`
                    f(a)=a-3
                `} />

                            <p className="leading-8">
                                이어야 합니다. 따라서
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    a^2-3a&=a-3\\
                    a^2-4a+3&=0\\
                    (a-1)(a-3)&=0
                    \end{aligned}
                `} />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    a=1
                    \qquad\text{또는}\qquad
                    a=3
                `} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                그런데 일대일함수가 되기 위해서는{" "}
                                <InlineMath math="a\ge\frac32" />이어야 하므로{" "}
                                <InlineMath math="a=1" />은 제외됩니다.
                            </p>

                            <BlockMath math={String.raw`
                    a=3
                `} />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{a=3}
                    `} />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <p className="mb-3 font-bold text-blue-300">
                                    그래프로 해석하면
                                </p>

                                <p className="leading-8 text-gray-200">
                                    정의역과 공역의 시작점을 대응시키면
                                    포물선 위의 점은
                                </p>

                                <BlockMath math={String.raw`
                        (a,a-3)
                    `} />

                                <p className="leading-8 text-gray-200">
                                    입니다. 이 점은 직선
                                </p>

                                <BlockMath math={String.raw`
                        y=x-3
                    `} />

                                <p className="leading-8 text-gray-200">
                                    위에도 있으므로 포물선{" "}
                                    <InlineMath math="y=x^2-3x" />과 직선{" "}
                                    <InlineMath math="y=x-3" />의 교점을 생각할 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                        x^2-3x=x-3
                        \quad\Longrightarrow\quad
                        x=1,\ 3
                    `} />

                                <p className="leading-8 text-gray-200">
                                    두 교점 중 <InlineMath math="x=1" />을 시작점으로 하면
                                    정의역이 포물선의 꼭짓점 양쪽을 포함하므로
                                    일대일함수가 아닙니다.
                                    따라서 가능한 값은 <InlineMath math="a=3" />입니다.
                                </p>
                            </div>
                        </div>

                        {/* 인터랙티브 그래프 */}
                        <QuadraticBijectionExplorer />
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                실수 전체의 집합에서 정의된 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            a(x-2)+4x-1 & (x<2)\\
            -a(x-2)+x+5 & (x\ge2)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                이 일대일대응이 되도록 하는 모든 정수{" "}
                                <InlineMath math="a" />의 값의 합은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    각 구간의 함수를 일차함수의 형태로 정리합니다.
                                </p>

                                <p className="font-bold text-white">
                                    <InlineMath math="x<2" />일 때
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=a(x-2)+4x-1\\
                &=(a+4)x-2a-1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 기울기는
                                </p>

                                <BlockMath math={String.raw`
                a+4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="font-bold text-white">
                                    <InlineMath math="x\ge2" />일 때
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=-a(x-2)+x+5\\
                &=(1-a)x+2a+5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 기울기는
                                </p>

                                <BlockMath math={String.raw`
                1-a
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="x=2" />에서 두 식의 값은 모두
                                </p>

                                <BlockMath math={String.raw`
                7
            `} />

                                <p className="leading-8">
                                    이므로 두 그래프는 <InlineMath math="(2,7)" />에서
                                    이어집니다.
                                </p>

                                <p className="leading-8">
                                    함수가 실수 전체에서 실수 전체로의 일대일대응이 되려면
                                    그래프가 전체 구간에서 한 방향으로 움직여야 합니다.
                                    따라서 두 구간의 기울기의 부호가 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                (a+4)(1-a)>0
            `} />

                                <p className="leading-8">
                                    이를 풀면
                                </p>

                                <BlockMath math={String.raw`
                -4<a<1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 이를 만족하는 정수 <InlineMath math="a" />는
                                </p>

                                <BlockMath math={String.raw`
                -3,\qquad -2,\qquad -1,\qquad 0
            `} />

                                <p className="leading-8">
                                    이고, 그 합은
                                </p>

                                <BlockMath math={String.raw`
                -3-2-1+0=-6
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-6}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        구간별로 정의된 일차함수가 한 점에서 이어질 때
                                        일대일대응이 되려면 두 구간에서 그래프의 진행 방향이
                                        같아야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (\text{왼쪽 기울기})
                        (\text{오른쪽 기울기})>0
                    }
                `} />

                                    <p className="leading-8">
                                        이 문제에서는 두 기울기가{" "}
                                        <InlineMath math="a+4" />,{" "}
                                        <InlineMath math="1-a" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    (a+4)(1-a)>0
                `} />

                                    <p className="leading-8">
                                        을 이용하면 됩니다. 기울기가{" "}
                                        <InlineMath math="0" />이 되는{" "}
                                        <InlineMath math="a=-4,\ 1" />은 한 구간이 상수함수가
                                        되므로 일대일함수가 될 수 없어 포함되지 않습니다.
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
                                실수 전체의 집합에서 정의된 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=2ax+|6x+1|-3
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응이 되도록 하는 실수{" "}
                                <InlineMath math="a" />의 값의 범위는?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    절댓값 안의 식
                                </p>

                                <BlockMath math={String.raw`
                6x+1
            `} />

                                <p className="leading-8">
                                    의 부호가 바뀌는 값을 구하면
                                </p>

                                <BlockMath math={String.raw`
                6x+1=0
                \quad\Longrightarrow\quad
                x=-\frac16
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="x=-\frac16" />을
                                    기준으로 함수식을 나눕니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="\displaystyle x<-\frac16" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="6x+1<0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                |6x+1|=-(6x+1)
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=2ax-(6x+1)-3\\
                &=(2a-6)x-4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 왼쪽 함수의 기울기는
                                </p>

                                <BlockMath math={String.raw`
                2a-6
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="font-bold text-white">
                                    ② <InlineMath math="\displaystyle x\ge-\frac16" />일 때
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="6x+1\ge0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                |6x+1|=6x+1
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(x)
                &=2ax+(6x+1)-3\\
                &=(2a+6)x-2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로 오른쪽 함수의 기울기는
                                </p>

                                <BlockMath math={String.raw`
                2a+6
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    원래 함수는 절댓값이 포함된 하나의 함수이므로
                                    두 그래프는 <InlineMath math="\displaystyle x=-\frac16" />에서
                                    서로 이어집니다.
                                </p>

                                <p className="leading-8">
                                    일대일대응이 되려면 그래프가 두 구간에서 같은 방향으로
                                    움직여야 하므로 두 기울기의 부호가 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                (2a-6)(2a+6)>0
            `} />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                4a^2-36&>0\\
                a^2-9&>0\\
                (a-3)(a+3)&>0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a<-3
                \qquad\text{또는}\qquad
                a>3
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{a<-3\text{ 또는 }a>3}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        절댓값이 포함된 함수는 절댓값 안의 식이{" "}
                                        <InlineMath math="0" />이 되는 값을 기준으로 구간을
                                        나눈 뒤, 각 구간의 기울기를 비교합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (\text{왼쪽 기울기})
                        (\text{오른쪽 기울기})>0
                    }
                `} />

                                    <p className="leading-8">
                                        이 문제에서는
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (2a-6)(2a+6)>0
                    }
                `} />

                                    <p className="leading-8">
                                        이 일대일대응의 조건입니다.{" "}
                                        <InlineMath math="a=\pm3" />이면 한쪽 기울기가{" "}
                                        <InlineMath math="0" />이 되어 일대일함수가 아니므로
                                        등호는 포함되지 않습니다.
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
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{x\mid -2\le x\le4\},
            \qquad
            Y=\{y\mid |y|\le a\}
            \quad(a>0)
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 <InlineMath math="X" />에서{" "}
                                <InlineMath math="Y" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=3x+b
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응이다. 두 상수{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="ab" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    함수 <InlineMath math="f(x)=3x+b" />는 기울기가{" "}
                                    <InlineMath math="3>0" />인 일차함수이므로
                                    정의역에서 증가합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 정의역의 왼쪽 끝점과 오른쪽 끝점에서의 함숫값이
                                    각각 치역의 최솟값과 최댓값이 됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(-2)&=-6+b,\\
                f(4)&=12+b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    한편 공역
                                </p>

                                <BlockMath math={String.raw`
                Y=\{y\mid |y|\le a\}
            `} />

                                <p className="leading-8">
                                    는
                                </p>

                                <BlockMath math={String.raw`
                Y=\{y\mid -a\le y\le a\}
            `} />

                                <p className="leading-8">
                                    로 나타낼 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 일대일대응이므로
                                    치역과 공역이 같아야 합니다. 따라서 양 끝값이 각각
                                    일치해야 하므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                -6+b&=-a,\\
                12+b&=a
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 식을 더하면
                                </p>

                                <BlockMath math={String.raw`
                2b+6=0
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                b=-3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이를 <InlineMath math="12+b=a" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                a=9
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                ab=9(-3)=-27
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-27}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        일대일대응에서는 실제 치역이 공역과 정확히 같아야 합니다.
                                        일차함수가 증가하므로 정의역의 양 끝점에 대한 함숫값이
                                        치역의 양 끝값이 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        f(-2)=-a,
                        \qquad
                        f(4)=a
                    }
                `} />

                                    <p className="leading-8">
                                        즉, 정의역의 양 끝점과 공역의 양 끝점을 서로 대응시키는
                                        것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{x\mid0\le x\le4\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=
            \begin{cases}
            ax^2+b & (0\le x<2)\\
            x-2 & (2\le x\le4)
            \end{cases}
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응일 때, <InlineMath math="f(1)" />의 값은?
                                (단, <InlineMath math="a,\ b" />는 상수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 두 번째 구간의 치역을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x-2
                \qquad(2\le x\le4)
            `} />

                                <p className="leading-8">
                                    이 함수는 증가하므로
                                </p>

                                <BlockMath math={String.raw`
                f(2)=0,\qquad f(4)=2
            `} />

                                <p className="leading-8">
                                    이고, 두 번째 구간에서의 치역은
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid0\le y\le2\}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응이므로 전체 치역은 공역
                                </p>

                                <BlockMath math={String.raw`
                \{y\mid0\le y\le4\}
            `} />

                                <p className="leading-8">
                                    와 같아야 합니다.
                                </p>

                                <p className="leading-8">
                                    이미 두 번째 구간에서{" "}
                                    <InlineMath math="0\le y\le2" />가 모두 나오므로,
                                    첫 번째 구간에서는 겹치지 않게 나머지 값
                                </p>

                                <BlockMath math={String.raw`
                2<y\le4
            `} />

                                <p className="leading-8">
                                    가 모두 나와야 합니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 구간은
                                </p>

                                <BlockMath math={String.raw`
                f(x)=ax^2+b
                \qquad(0\le x<2)
            `} />

                                <p className="leading-8">
                                    입니다. <InlineMath math="x=0" />은 정의역에 포함되지만{" "}
                                    <InlineMath math="x=2" />는 포함되지 않습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 치역이 <InlineMath math="2<y\le4" />가 되려면
                                    함수는 이 구간에서 감소하면서
                                </p>

                                <BlockMath math={String.raw`
                f(0)=4
            `} />

                                <p className="leading-8">
                                    이어야 하고, <InlineMath math="x" />가{" "}
                                    <InlineMath math="2" />에 가까워질 때 함숫값은{" "}
                                    <InlineMath math="2" />에 가까워져야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(0)&=4,\\
                a\cdot2^2+b&=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                b=4,\qquad4a+b=2
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=-\frac12,\qquad b=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(1)
                &=a+b\\
                &=-\frac12+4\\
                &=\frac72
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{\frac72}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        일대일대응에서는 각 구간에서 나오는 함숫값이 서로
                                        겹치지 않으면서 전체 공역을 빠짐없이 채워야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \begin{array}{c}
                    2\le x\le4
                    \quad\longrightarrow\quad
                    0\le f(x)\le2\\[5pt]
                    0\le x<2
                    \quad\longrightarrow\quad
                    2<f(x)\le4
                    \end{array}
                    }
                `} />

                                    <p className="leading-8">
                                        특히 <InlineMath math="0\le x<2" />에서{" "}
                                        <InlineMath math="x=0" />은 포함되고{" "}
                                        <InlineMath math="x=2" />는 포함되지 않으므로,
                                        치역의 끝점이 <InlineMath math="2<y\le4" />처럼
                                        어느 쪽이 포함되는지도 함께 확인하는 것이 중요합니다.
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
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{x\mid1\le x\le3\},
            \qquad
            Y=\{y\mid-1\le y\le7\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 <InlineMath math="X" />에서{" "}
                                <InlineMath math="Y" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=ax^2+b
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응일 때, <InlineMath math="2a+b" />의 값은?
                                (단, <InlineMath math="a,\ b" />는 상수이고{" "}
                                <InlineMath math="a>0" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="a>0" />이고 정의역에서{" "}
                                    <InlineMath math="x>0" />이므로 함수
                                </p>

                                <BlockMath math={String.raw`
                f(x)=ax^2+b
            `} />

                                <p className="leading-8">
                                    는 <InlineMath math="1\le x\le3" />에서 증가합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 정의역의 양 끝점에서의 함숫값이 각각
                                    치역의 최솟값과 최댓값이 됩니다.
                                </p>

                                <BlockMath math={String.raw`
                \text{최솟값}=f(1),
                \qquad
                \text{최댓값}=f(3)
            `} />

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 일대일대응이므로
                                    치역은 공역
                                </p>

                                <BlockMath math={String.raw`
                Y=\{y\mid-1\le y\le7\}
            `} />

                                <p className="leading-8">
                                    과 같아야 합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f(1)=-1,
                \qquad
                f(3)=7
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수식에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a+b&=-1,\\
                9a+b&=7
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    두 식을 빼면
                                </p>

                                <BlockMath math={String.raw`
                8a=8
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a=1
            `} />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="a+b=-1" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                b=-2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                2a+b
                =2\cdot1-2
                =0
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{0}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        이차함수는 실수 전체에서는 일대일함수가 아니지만,
                                        정의역을 꼭짓점의 한쪽으로 제한하면 일대일함수가
                                        될 수 있습니다.
                                    </p>

                                    <p className="leading-8">
                                        이 문제에서는 <InlineMath math="1\le x\le3" />에서
                                        함수가 증가하므로, 일대일대응이 되기 위해서는
                                        정의역과 공역의 양 끝점이 순서대로 대응해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        1\longrightarrow-1,
                        \qquad
                        3\longrightarrow7
                    }
                `} />

                                    <p className="leading-8">
                                        즉, 이차함수의 일대일대응 문제에서는 먼저{" "}
                                        <strong className="text-white">
                                            정의역에서 증가하는지 감소하는지
                                        </strong>
                                        를 확인한 뒤 치역의 양 끝값을 공역의 양 끝값과
                                        맞추는 것이 핵심입니다.
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
                                집합 <InlineMath math="X=\{x\mid x\ge a\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2+ax-15
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응일 때, <InlineMath math="f(2)" />의 값은?
                                (단, <InlineMath math="a" />는 실수이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    이차함수
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x^2+ax-15
            `} />

                                <p className="leading-8">
                                    의 축은
                                </p>

                                <BlockMath math={String.raw`
                x=-\frac a2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    함수가 정의역 <InlineMath math="x\ge a" />에서
                                    일대일함수가 되려면 정의역이 포물선의 꼭짓점 양쪽을
                                    포함해서는 안 됩니다.
                                </p>

                                <p className="leading-8">
                                    정의역이 오른쪽으로 계속 이어지므로 정의역의 시작점{" "}
                                    <InlineMath math="x=a" />가 축보다 오른쪽에 있거나
                                    축과 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                a\ge-\frac a2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a\ge0
            `} />

                                <p className="leading-8">
                                    이고, 이때 함수는 정의역에서 증가합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 치역의 시작값은 정의역의 시작점{" "}
                                    <InlineMath math="x=a" />에서의 함숫값{" "}
                                    <InlineMath math="f(a)" />입니다.
                                </p>

                                <p className="leading-8">
                                    함수가 <InlineMath math="X" />에서{" "}
                                    <InlineMath math="X" />로의 일대일대응이므로
                                    치역과 공역의 시작값이 같아야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                f(a)=a
            `} />

                                <p className="leading-8">
                                    함수식에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a^2+a^2-15&=a\\
                2a^2-a-15&=0\\
                (2a+5)(a-3)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=-\frac52
                \qquad\text{또는}\qquad
                a=3
            `} />

                                <p className="leading-8">
                                    그런데 일대일함수가 되기 위한 조건이{" "}
                                    <InlineMath math="a\ge0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(2)
                &=2^2+3\cdot2-15\\
                &=4+6-15\\
                &=-5
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{-5}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        이차함수가 일대일대응이 되려면 두 가지를 모두
                                        확인해야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \begin{aligned}
                    &①\ \text{정의역에서 일대일함수}\\
                    &②\ \text{치역}=\text{공역}
                    \end{aligned}}
                `} />

                                    <p className="leading-8">
                                        먼저 정의역의 시작점이 축의 오른쪽에 있는지 확인하여
                                        일대일함수가 되는 조건을 구하고, 그다음 정의역과
                                        공역의 시작점이 모두 <InlineMath math="a" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{f(a)=a}
                `} />

                                    <p className="leading-8">
                                        를 이용하는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{x\mid x\ge a\},
            \qquad
            Y=\{y\mid y\ge a-4\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 <InlineMath math="X" />에서{" "}
                                <InlineMath math="Y" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2-4x
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응일 때, 실수 <InlineMath math="a" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수 <InlineMath math="f" />가 정의역에서
                                    일대일함수가 되는 조건을 확인합니다.
                                </p>

                                <p className="leading-8">
                                    이차함수
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x^2-4x
            `} />

                                <p className="leading-8">
                                    의 축은
                                </p>

                                <BlockMath math={String.raw`
                x=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    정의역은 <InlineMath math="x\ge a" />이고 오른쪽으로
                                    계속 이어지므로, 정의역이 포물선의 꼭짓점 양쪽을
                                    포함하지 않으려면
                                </p>

                                <BlockMath math={String.raw`
                a\ge2
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    이때 함수는 정의역에서 증가하므로 정의역의 시작점{" "}
                                    <InlineMath math="x=a" />에서의 함숫값{" "}
                                    <InlineMath math="f(a)" />가 치역의 시작값이 됩니다.
                                </p>

                                <p className="leading-8">
                                    한편 공역
                                </p>

                                <BlockMath math={String.raw`
                Y=\{y\mid y\ge a-4\}
            `} />

                                <p className="leading-8">
                                    의 시작값은 <InlineMath math="a-4" />입니다.
                                </p>

                                <p className="leading-8">
                                    일대일대응이 되려면 치역과 공역이 같아야 하므로
                                </p>

                                <BlockMath math={String.raw`
                f(a)=a-4
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    함수식에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a^2-4a&=a-4\\
                a^2-5a+4&=0\\
                (a-1)(a-4)&=0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=1
                \qquad\text{또는}\qquad
                a=4
            `} />

                                <p className="leading-8">
                                    그런데 정의역에서 일대일함수가 되기 위한 조건이{" "}
                                    <InlineMath math="a\ge2" />이므로{" "}
                                    <InlineMath math="a=1" />은 제외됩니다.
                                </p>

                                <BlockMath math={String.raw`
                a=4
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{4}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        이차함수의 일대일대응 문제에서는 먼저 정의역이
                                        꼭짓점의 한쪽에만 있는지 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \begin{aligned}
                    &①\ \text{일대일함수 조건}: &&a\ge2\\
                    &②\ \text{치역}=\text{공역}: &&f(a)=a-4
                    \end{aligned}
                    }
                `} />

                                    <p className="leading-8">
                                        두 번째 조건만 이용하면{" "}
                                        <InlineMath math="a=1,\ 4" />가 나오지만,
                                        반드시 첫 번째 일대일함수 조건까지 확인해야 하므로{" "}
                                        <InlineMath math="a=4" />만 가능합니다.
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
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{x\mid x\ge a\},
            \qquad
            Y=\{y\mid y\ge b\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 <InlineMath math="X" />에서{" "}
                                <InlineMath math="Y" />로의 함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=x^2+5x-5
        `} />

                            <p className="leading-8 text-gray-200">
                                가 일대일대응이다. 두 상수{" "}
                                <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a-b" />의 최댓값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 함수가 정의역에서 일대일함수가 되기 위한 조건을
                                    구합니다.
                                </p>

                                <p className="leading-8">
                                    이차함수
                                </p>

                                <BlockMath math={String.raw`
                f(x)=x^2+5x-5
            `} />

                                <p className="leading-8">
                                    의 축은
                                </p>

                                <BlockMath math={String.raw`
                x=-\frac52
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    정의역은 <InlineMath math="x\ge a" />이고 오른쪽으로
                                    계속 이어지므로, 정의역이 포물선의 꼭짓점 양쪽을
                                    포함하지 않으려면
                                </p>

                                <BlockMath math={String.raw`
                a\ge-\frac52
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    이때 함수는 정의역에서 증가하므로 정의역의 시작점{" "}
                                    <InlineMath math="x=a" />에서의 함숫값이
                                    치역의 시작값입니다.
                                </p>

                                <BlockMath math={String.raw`
                f(a)=a^2+5a-5
            `} />

                                <p className="leading-8">
                                    한편 공역 <InlineMath math="Y" />의 시작값은{" "}
                                    <InlineMath math="b" />입니다.
                                </p>

                                <p className="leading-8">
                                    함수가 일대일대응이므로 치역과 공역이 같아야 하므로
                                </p>

                                <BlockMath math={String.raw`
                b=f(a)=a^2+5a-5
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a-b
                &=a-(a^2+5a-5)\\
                &=-a^2-4a+5\\
                &=9-(a+2)^2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                a-b\le9
            `} />

                                <p className="leading-8">
                                    입니다. 등호는
                                </p>

                                <BlockMath math={String.raw`
                a=-2
            `} />

                                <p className="leading-8">
                                    일 때 성립하고,{" "}
                                    <InlineMath math="\displaystyle -2\ge-\frac52" />이므로
                                    일대일함수가 되기 위한 조건도 만족합니다.
                                </p>

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
                                        이 문제에서도 먼저 이차함수가 정의역에서 일대일함수가
                                        되는 조건을 구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    a\ge-\frac52
                `} />

                                    <p className="leading-8">
                                        그다음 일대일대응이므로 정의역의 시작점에서의
                                        함숫값과 공역의 시작값을 같게 놓습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{b=f(a)}
                `} />

                                    <p className="leading-8">
                                        이렇게 <InlineMath math="b" />를{" "}
                                        <InlineMath math="a" />에 대한 식으로 바꾸면
                                        구하려는 <InlineMath math="a-b" />를 하나의
                                        이차식으로 정리하여 최댓값을 구할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    a-b=9-(a+2)^2\le9
                `} />

                                    <p className="leading-8">
                                        마지막으로 최댓값을 만드는{" "}
                                        <InlineMath math="a=-2" />가 일대일함수 조건{" "}
                                        <InlineMath math="\displaystyle a\ge-\frac52" />을 만족하는지도
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
                                    1. 일대일대응의 기본
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{일대일대응}
                            =
                            \text{일대일함수}
                            +
                            \text{치역}=\text{공역}
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    2. 절댓값이 포함된 함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{절댓값을 기준으로 구간을 나누고}
                            \atop
                            \text{각 구간의 기울기의 방향을 비교한다}
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    3. 이차함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{정의역을 축의 한쪽으로 제한해야}
                            \atop
                            \text{일대일함수가 될 수 있다}
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    4. 치역과 공역
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{정의역의 경계에서의 함숫값}
                            =
                            \text{공역의 경계}
                        }
                    `} />

                                <p className="mt-3 text-center leading-8">
                                    일대일함수라는 조건과 함께 이 경계가 맞아야
                                    일대일대응이 됩니다.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

            </section>

            {/* 3.5 함수의 개수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    3.5 함수의 개수
                </h2>

                <p className="leading-8 text-gray-300">
                    유한집합 사이의 함수의 개수는 정의역의 각 원소에
                    함숫값을 대응시키는 방법의 수를 이용하여 구할 수 있습니다.
                    함수에 일대일, 증가, 감소 등의 조건이 추가되면
                    함숫값을 선택하는 방법도 달라집니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 함수의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath math={String.raw`
                X=\{1,2,3,4,5\},
                \qquad
                Y=\{1,2,3,4,5,6,7\}
            `} />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="X" />에서{" "}
                            <InlineMath math="Y" />로의 함수를 생각해 봅시다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            정의역의 각 원소에는 공역의 7개 원소 중 하나를
                            함숫값으로 대응시킬 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&:\ 7\text{가지}\\
                f(2)&:\ 7\text{가지}\\
                f(3)&:\ 7\text{가지}\\
                f(4)&:\ 7\text{가지}\\
                f(5)&:\ 7\text{가지}
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            함수에서는 서로 다른 정의역의 원소가 같은 함숫값을
                            가져도 되므로 각각 독립적으로 7가지씩 선택할 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                7\times7\times7\times7\times7
                =7^5
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                일반화
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="n(X)=m" />,{" "}
                                <InlineMath math="n(Y)=n" />이면 정의역의 각 원소마다
                                공역의 <InlineMath math="n" />개 원소 중 하나를
                                선택할 수 있으므로
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{함수의 개수}=n^m
                    }
                `} />

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{함수의 개수}
                        =
                        n(Y)^{\,n(X)}
                    }
                `} />
                        </div>
                    </div>


                    {/* 2. 일대일함수의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 일대일함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일대일함수에서는 서로 다른 정의역의 원소가
                            서로 다른 함숫값을 가져야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                x_1\ne x_2
                \quad\Longrightarrow\quad
                f(x_1)\ne f(x_2)
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 한 번 함숫값으로 사용한 공역의 원소는
                            다시 사용할 수 없습니다.
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&:\ 7\text{가지}\\
                f(2)&:\ 6\text{가지}\\
                f(3)&:\ 5\text{가지}\\
                f(4)&:\ 4\text{가지}\\
                f(5)&:\ 3\text{가지}
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 일대일함수의 개수는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    7\times6\times5\times4\times3
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                순열 기호로 나타내면
                            </p>

                            <BlockMath math={String.raw`
                    7\times6\times5\times4\times3
                    ={}_7P_5
                `} />

                            <p className="leading-8 text-gray-300">
                                즉, 일대일함수의 개수는 순열 기호{" "}
                                <InlineMath math="P" />를 사용하여 나타낼 수도 있습니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                계산할 때의 팁
                            </p>

                            <p className="leading-8 text-gray-200">
                                일대일함수의 개수를{" "}
                                <InlineMath math="{}_7P_5" />와 같이 나타낼 수 있지만,
                                실제 문제에서는
                            </p>

                            <BlockMath math={String.raw`
                    7\times6\times5\times4\times3
                `} />

                            <p className="leading-8 text-gray-200">
                                과 같이 선택할 수 있는 함숫값의 개수를 하나씩 줄여 가며
                                직접 쓰는 것이 정의역과 공역의 원소의 개수를
                                바꾸어 쓰는 실수를 줄이는 데 도움이 됩니다.
                            </p>
                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                일반화
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="n(X)=m" />,{" "}
                                <InlineMath math="n(Y)=n" />이고{" "}
                                <InlineMath math="m\le n" />이면
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{일대일함수의 개수}
                        =
                        n(n-1)(n-2)\cdots(n-m+1)
                    }
                `} />

                            <p className="leading-8 text-gray-200">
                                이고, 순열 기호로는
                            </p>

                            <BlockMath math={String.raw`
                    {}_nP_m
                `} />

                            <p className="leading-8 text-gray-200">
                                으로 나타낼 수 있습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                특히 <InlineMath math="m>n" />이면 정의역의 서로 다른
                                원소에 서로 다른 함숫값을 대응시킬 수 없으므로
                                일대일함수는 존재하지 않습니다.
                            </p>
                        </div>
                    </div>


                    {/* 3. 증가함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 증가함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            증가함수는 정의역에서 오른쪽으로 갈수록
                            함숫값이 더 커지는 함수입니다.
                        </p>

                        <BlockMath math={String.raw`
                x_1<x_2
                \quad\Longrightarrow\quad
                f(x_1)<f(x_2)
            `} />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                수식을 우리말로 해석하면
                            </p>

                            <p className="leading-8 text-gray-200">
                                정의역에서 <strong className="text-white">오른쪽에 있는 원소의
                                    함숫값이 더 크다</strong>는 뜻입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                그래프로 생각하면 오른쪽으로 갈수록 위로 올라가는
                                방향입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{\text{증가함수 : 오른쪽 위}}
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            앞의 두 집합
                        </p>

                        <BlockMath math={String.raw`
                X=\{1,2,3,4,5\},
                \qquad
                Y=\{1,2,3,4,5,6,7\}
            `} />

                        <p className="leading-8 text-gray-300">
                            에서 증가함수라면
                        </p>

                        <BlockMath math={String.raw`
                f(1)<f(2)<f(3)<f(4)<f(5)
            `} />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            먼저 공역의 7개 원소 중 실제로 사용할 함숫값 5개를
                            선택합니다.
                        </p>

                        <BlockMath math={String.raw`
                {}_7C_5
            `} />

                        <p className="leading-8 text-gray-300">
                            선택한 5개의 값을 작은 것부터 차례대로
                            <InlineMath math="1,2,3,4,5" />에 대응시켜야 하므로
                            연결하는 방법은 한 가지뿐입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            예를 들어 함숫값으로
                        </p>

                        <BlockMath math={String.raw`
                1,\ 3,\ 4,\ 6,\ 7
            `} />

                        <p className="leading-8 text-gray-300">
                            을 선택했다면 증가함수가 되기 위한 대응은 반드시
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&=1,\\
                f(2)&=3,\\
                f(3)&=4,\\
                f(4)&=6,\\
                f(5)&=7
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{증가함수의 개수}
                    ={}_7C_5
                }
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                일반화
                            </p>

                            <p className="leading-8 text-gray-200">
                                <InlineMath math="n(X)=m" />,{" "}
                                <InlineMath math="n(Y)=n" />이고{" "}
                                <InlineMath math="m\le n" />이면
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{증가함수의 개수}
                        ={}_nC_m
                    }
                `} />

                            <p className="leading-8 text-gray-200">
                                공역에서 사용할 <InlineMath math="m" />개의 함숫값만
                                선택하면 작은 값부터 대응시키는 방법은 자동으로
                                결정됩니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 감소함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 감소함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            감소함수는 정의역에서 오른쪽으로 갈수록
                            함숫값이 더 작아지는 함수입니다.
                        </p>

                        <BlockMath math={String.raw`
                x_1<x_2
                \quad\Longrightarrow\quad
                f(x_1)>f(x_2)
            `} />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 font-bold text-white">
                                수식을 우리말로 해석하면
                            </p>

                            <p className="leading-8 text-gray-200">
                                정의역에서 <strong className="text-white">오른쪽에 있는 원소의
                                    함숫값이 더 작다</strong>는 뜻입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                그래프로 생각하면 오른쪽으로 갈수록 아래로 내려가는
                                방향입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{\text{감소함수 : 오른쪽 아래}}
                `} />
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            감소함수라면
                        </p>

                        <BlockMath math={String.raw`
                f(1)>f(2)>f(3)>f(4)>f(5)
            `} />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            증가함수와 마찬가지로 공역의 7개 원소 중
                            사용할 함숫값 5개를 선택하면 됩니다.
                        </p>

                        <BlockMath math={String.raw`
                {}_7C_5
            `} />

                        <p className="leading-8 text-gray-300">
                            선택한 값을 큰 것부터 차례대로 대응시키는 방법은
                            한 가지뿐입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath math={String.raw`
                1,\ 3,\ 4,\ 6,\ 7
            `} />

                        <p className="leading-8 text-gray-300">
                            을 선택했다면 감소함수가 되기 위한 대응은 반드시
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                f(1)&=7,\\
                f(2)&=6,\\
                f(3)&=4,\\
                f(4)&=3,\\
                f(5)&=1
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{감소함수의 개수}
                    ={}_7C_5
                }
            `} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                일반화
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                        \text{감소함수의 개수}
                        ={}_nC_m
                    }
                `} />

                            <p className="leading-8 text-gray-200">
                                증가함수와 감소함수 모두 사용할 함숫값만 선택하면
                                대응 순서가 하나로 결정되므로 개수가 같습니다.
                            </p>
                        </div>
                    </div>


                    {/* 5. 일대일대응의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 일대일대응의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            유한집합에서 일대일대응이 존재하려면 정의역과 공역의
                            원소의 개수가 같아야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                n(X)=n(Y)=n
            `} />

                        <p className="leading-8 text-gray-300">
                            일대일대응은 일대일함수이므로 첫 번째 원소의 함숫값은{" "}
                            <InlineMath math="n" />가지, 그다음은{" "}
                            <InlineMath math="n-1" />가지와 같이 하나씩 줄어듭니다.
                        </p>

                        <BlockMath math={String.raw`
                n(n-1)(n-2)\cdots2\cdot1
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{일대일대응의 개수}
                    =n!
                }
            `} />
                    </div>


                    {/* 6. 상수함수의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            6. 상수함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            상수함수는 정의역의 모든 원소가 하나의 같은 함숫값을
                            갖는 함수입니다.
                        </p>

                        <BlockMath math={String.raw`
                f(x)=c
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 어떤 값을 공통된 함숫값으로 사용할지만
                            결정하면 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath math={String.raw`
                X=\{1,2,3,4,5\},
                \qquad
                Y=\{1,2,3,4,5,6,7\}
            `} />

                        <p className="leading-8 text-gray-300">
                            에서는 공통된 함숫값으로 공역의 7개 원소 중
                            하나를 선택할 수 있으므로 상수함수는 7개입니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{상수함수의 개수}
                    =n(Y)
                }
            `} />
                    </div>


                    {/* 7. 치역과 공역이 같은 함수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            7. 치역과 공역이 같은 함수의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            치역과 공역이 같다는 것은 공역의 모든 원소가
                            적어도 한 번씩 함숫값으로 사용된다는 뜻입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이런 함수의 개수는 전체 함수의 개수에서
                            공역의 원소를 모두 사용하지 못한 경우를 빼서 구할 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{치역과 공역이 같은 함수}
                    =
                    \text{전체 함수}
                    -
                    \text{안 되는 경우}
                }
            `} />

                        <p className="mt-5 leading-8 text-gray-300">
                            정의역을
                        </p>

                        <BlockMath math={String.raw`
                X=\{1,2,3,4,5\}
            `} />

                        <p className="leading-8 text-gray-300">
                            로 고정하고 공역의 원소의 개수를 하나씩 늘려 보겠습니다.
                        </p>


                        {/* 공역 원소 1개 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 text-xl font-bold text-white">
                                공역의 원소가 1개일 때
                            </p>

                            <BlockMath math={String.raw`
                    Y=\{1\}
                `} />

                            <p className="leading-8 text-gray-300">
                                정의역의 모든 원소는 반드시 1에 대응해야 합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{1\text{가지}}
                `} />
                        </div>


                        {/* 공역 원소 2개 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 text-xl font-bold text-white">
                                공역의 원소가 2개일 때
                            </p>

                            <BlockMath math={String.raw`
                    Y=\{1,2\}
                `} />

                            <p className="leading-8 text-gray-300">
                                전체 함수의 개수는
                            </p>

                            <BlockMath math={String.raw`
                    2^5
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                치역과 공역이 같지 않은 경우는 치역의 원소가
                                하나뿐인 경우입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                모든 원소가 1에 대응하거나 모든 원소가 2에
                                대응하는 두 가지 경우이므로
                            </p>

                            <BlockMath math={String.raw`
                    2^5-2
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{2^5-2=30}
                `} />
                        </div>


                        {/* 공역 원소 3개 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                            <p className="mb-3 text-xl font-bold text-white">
                                공역의 원소가 3개일 때
                            </p>

                            <BlockMath math={String.raw`
                    Y=\{1,2,3\}
                `} />

                            <p className="leading-8 text-gray-300">
                                전체 함수의 개수는
                            </p>

                            <BlockMath math={String.raw`
                    3^5
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                여기서 치역과 공역이 같지 않은 경우를
                                치역의 원소의 개수에 따라 나누어 생각합니다.
                            </p>

                            <p className="mt-5 font-bold text-white">
                                ① 치역의 원소가 2개인 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                먼저 공역의 3개 원소 중 실제 치역으로 사용할
                                2개를 선택합니다.
                            </p>

                            <BlockMath math={String.raw`
                    {}_3C_2
                `} />

                            <p className="leading-8 text-gray-300">
                                선택한 두 원소를 공역으로 생각하면 전체 함수는{" "}
                                <InlineMath math="2^5" />개입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                그러나 선택한 두 원소가 모두 실제로 사용되어야
                                치역의 원소가 정확히 2개가 되므로 상수함수 2개를
                                제외합니다.
                            </p>

                            <BlockMath math={String.raw`
                    2^5-2
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서 치역의 원소가 2개인 함수는
                            </p>

                            <BlockMath math={String.raw`
                    {}_3C_2(2^5-2)
                `} />

                            <p className="leading-8 text-gray-300">
                                개입니다.
                            </p>

                            <p className="mt-5 font-bold text-white">
                                ② 치역의 원소가 1개인 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                상수함수이므로 공통된 함숫값을 3개 중 하나
                                선택하면 됩니다.
                            </p>

                            <BlockMath math={String.raw`
                    3
                `} />

                            <p className="leading-8 text-gray-300">
                                가지입니다.
                            </p>

                            <p className="mt-5 leading-8 text-gray-300">
                                따라서 치역과 공역이 같은 함수의 개수는
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    3^5-{}_3C_2(2^5-2)-3
                    &=243-3\cdot30-3\\
                    &=150
                    \end{aligned}
                `} />

                            <BlockMath math={String.raw`
                    \boxed{150}
                `} />
                        </div>


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                경우를 나누는 기준
                            </p>

                            <p className="leading-8 text-gray-200">
                                치역과 공역이 같은 함수의 개수를 구할 때는
                                공역의 원소를 모두 사용하지 못한 경우를
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{\text{치역의 원소의 개수}}
                `} />

                            <p className="leading-8 text-gray-200">
                                에 따라 분류하면 됩니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-200">
                                특히 공역의 원소의 개수가 많아질수록
                                치역의 원소가 몇 개인지를 먼저 분류하는 것이 중요합니다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{-1,0,1\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                함수의 개수를 <InlineMath math="a" />, 일대일대응의 개수를{" "}
                                <InlineMath math="b" />, 상수함수의 개수를{" "}
                                <InlineMath math="c" />라 할 때,{" "}
                                <InlineMath math="a+b+c" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    집합 <InlineMath math="X" />의 원소는 3개입니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수에서는 정의역의 각 원소마다 3개의 함숫값 중
                                    하나를 선택할 수 있으므로
                                </p>

                                <BlockMath math={String.raw`
                a=3\times3\times3=3^3=27
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    일대일대응에서는 서로 다른 정의역의 원소가
                                    서로 다른 함숫값을 가져야 합니다.
                                    첫 번째 원소의 함숫값은 3가지, 두 번째는 2가지,
                                    세 번째는 1가지이므로
                                </p>

                                <BlockMath math={String.raw`
                b=3\times2\times1=6
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    상수함수에서는 정의역의 모든 원소가 같은 함숫값을
                                    가져야 합니다. 공역 <InlineMath math="X" />의
                                    3개 원소 중 하나를 공통된 함숫값으로 선택하면 되므로
                                </p>

                                <BlockMath math={String.raw`
                c=3
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b+c
                =27+6+3
                =36
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{36}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        함수는 정의역의 각 원소마다 함숫값을 자유롭게
                                        선택하고, 일대일대응은 한 번 사용한 함숫값을
                                        다시 사용할 수 없습니다.
                                        상수함수는 공역에서 하나의 함숫값만 선택하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \text{함수} &: 3^3\\
                    \text{일대일대응} &: 3\times2\times1\\
                    \text{상수함수} &: 3
                    \end{aligned}
                `} />
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,3,5,7,9,11\}" />,{" "}
                                <InlineMath math="Y=\{2,4,6,8,10,12\}" />에 대하여{" "}
                                <InlineMath math="X" />에서 <InlineMath math="Y" />로의 함수{" "}
                                <InlineMath math="f" />가 다음 조건을 만족시킬 때,
                                함수 <InlineMath math="f" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="X" />의 임의의 두 원소{" "}
                                    <InlineMath math="x_1,x_2" />에 대하여{" "}
                                    <InlineMath math="x_1\ne x_2" />이면{" "}
                                    <InlineMath math="f(x_1)\ne f(x_2)" />이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="f(1)=6" />이고{" "}
                                    <InlineMath math="f(5)=10" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (가)에 의하여 서로 다른 정의역의 원소는
                                    서로 다른 함숫값을 가지므로 <InlineMath math="f" />는
                                    일대일함수입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (나)에서
                                </p>

                                <BlockMath math={String.raw`
                f(1)=6,\qquad f(5)=10
            `} />

                                <p className="leading-8">
                                    이므로 공역의 원소 6과 10은 이미 함숫값으로
                                    사용되었습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 정의역의 나머지 원소
                                </p>

                                <BlockMath math={String.raw`
                3,\ 7,\ 9,\ 11
            `} />

                                <p className="leading-8">
                                    에는 공역에서 남은 원소
                                </p>

                                <BlockMath math={String.raw`
                2,\ 4,\ 8,\ 12
            `} />

                                <p className="leading-8">
                                    를 서로 다르게 대응시켜야 합니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 원소의 함숫값은 4가지, 그다음은 3가지,
                                    그다음은 2가지, 마지막은 1가지이므로
                                </p>

                                <BlockMath math={String.raw`
                4\times3\times2\times1=24
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{24}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        일대일함수에서는 한 번 사용한 함숫값을 다시
                                        사용할 수 없습니다. 이미 정해진 두 대응을 제외한 뒤,
                                        남은 4개의 함숫값을 하나씩 줄여 가며 선택합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{4\times3\times2\times1}
                `} />
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
                                집합 <InlineMath math="X=\{1,2,3,4,5\}" />에 대하여
                                함수 <InlineMath math="f:X\longrightarrow X" />로 정의할 때,{" "}
                                <InlineMath math="f(2)\ne1" />,{" "}
                                <InlineMath math="f(3)\ne4" />이고 일대일대응인
                                함수 <InlineMath math="f" />의 개수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    일대일대응의 전체 개수를 구하면
                                </p>

                                <BlockMath math={String.raw`
                5\times4\times3\times2\times1=120
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    이제 조건을 만족하지 않는 경우를 제외합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(2)=1" />인 경우에는 하나의 대응이
                                    이미 정해져 있으므로 나머지 4개의 원소를 대응시키는 방법은
                                </p>

                                <BlockMath math={String.raw`
                4\times3\times2\times1=24
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로 <InlineMath math="f(3)=4" />인 경우도
                                </p>

                                <BlockMath math={String.raw`
                4\times3\times2\times1=24
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="f(2)=1" />이고{" "}
                                    <InlineMath math="f(3)=4" />인 경우는 앞에서 두 번
                                    제외되었습니다.
                                </p>

                                <p className="leading-8">
                                    두 대응이 모두 정해져 있으면 나머지 3개의 원소를
                                    대응시키는 방법은
                                </p>

                                <BlockMath math={String.raw`
                3\times2\times1=6
            `} />

                                <p className="leading-8">
                                    가지이므로 이를 다시 더해 줍니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                120-24-24+6
                &=78
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{78}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        「같지 않다」와 같은 조건이 있는 일대일대응은
                                        전체 일대일대응에서 조건을 만족하지 않는 경우를
                                        제외하여 구할 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-200">
                                        이때 두 조건을 동시에 만족하지 않는 경우는
                                        두 번 제외되므로 한 번 다시 더해 주어야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        120-24-24+6=78
                    }
                `} />
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,2,3,4\}" />,{" "}
                                <InlineMath math="Y=\{1,2,3,4,5\}" />에 대하여
                                다음 두 조건을 모두 만족하는 함수{" "}
                                <InlineMath math="f:X\longrightarrow Y" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="X" />의 임의의 두 원소{" "}
                                    <InlineMath math="x_1,x_2" />에 대하여{" "}
                                    <InlineMath math="x_1\ne x_2" />이면{" "}
                                    <InlineMath math="f(x_1)\ne f(x_2)" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="f(1)\ne2" />,{" "}
                                    <InlineMath math="f(3)=3" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (가)에 의하여 서로 다른 정의역의 원소는
                                    서로 다른 함숫값을 가지므로{" "}
                                    <InlineMath math="f" />는 일대일함수입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (나)에서
                                </p>

                                <BlockMath math={String.raw`
                f(3)=3
            `} />

                                <p className="leading-8">
                                    이므로 공역의 원소 3은 이미 함숫값으로 사용되었습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 나머지 정의역의 원소{" "}
                                    <InlineMath math="1,2,4" />에는
                                </p>

                                <BlockMath math={String.raw`
                1,\ 2,\ 4,\ 5
            `} />

                                <p className="leading-8">
                                    중 서로 다른 값을 대응시켜야 합니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="f(1)\ne2" />이므로{" "}
                                    <InlineMath math="f(1)" />은
                                </p>

                                <BlockMath math={String.raw`
                1,\ 4,\ 5
            `} />

                                <p className="leading-8">
                                    중 하나가 되어 3가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)" />을 정하면 남은 3개의 값 중
                                    하나를 <InlineMath math="f(2)" />로 선택할 수 있고,
                                    그다음 <InlineMath math="f(4)" />는 남은 2개의 값 중
                                    하나를 선택할 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                3\times3\times2=18
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{18}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        일대일함수에서 특정 함숫값이 이미 정해져 있으면
                                        그 값을 먼저 제외합니다. 그다음 금지된 대응을
                                        고려하여 선택할 수 있는 함숫값의 개수를 차례대로
                                        곱하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{3\times3\times2=18}
                `} />
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
                                집합 <InlineMath math="X=\{-5,-3,0,3,5\}" />에 대하여
                                다음 두 조건을 만족하는 함수 <InlineMath math="f" />의
                                개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) 함수 <InlineMath math="f" />는{" "}
                                    <InlineMath math="X" />에서 <InlineMath math="X" />로의
                                    함수이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="X" />의 모든 원소{" "}
                                    <InlineMath math="x" />에 대하여{" "}
                                    <InlineMath math="f(x)=-f(-x)" />이다.
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)에 <InlineMath math="x=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                f(0)=-f(0)
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(0)=0
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="x=3" />과{" "}
                                    <InlineMath math="x=5" />에 대하여 조건 (나)를 적용하면
                                </p>

                                <BlockMath math={String.raw`
                f(-3)=-f(3),\qquad
                f(-5)=-f(5)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="f(3)" />을 정하면{" "}
                                    <InlineMath math="f(-3)" />이 자동으로 결정되고,{" "}
                                    <InlineMath math="f(5)" />를 정하면{" "}
                                    <InlineMath math="f(-5)" />도 자동으로 결정됩니다.
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="X" />는 원소의 부호를 바꾸어도
                                    다시 <InlineMath math="X" />의 원소가 되므로{" "}
                                    <InlineMath math="f(3)" />은 <InlineMath math="X" />의
                                    5개 원소 중 어느 것이든 선택할 수 있습니다.
                                    따라서 5가지입니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로 <InlineMath math="f(5)" />도{" "}
                                    <InlineMath math="X" />의 5개 원소 중 어느 것이든
                                    선택할 수 있으므로 5가지입니다.
                                </p>

                                <BlockMath math={String.raw`
                5\times5=25
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{25}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        조건 <InlineMath math="f(x)=-f(-x)" />에 의해
                                        양수와 음수인 원소의 함숫값은 서로 독립적으로
                                        정해지는 것이 아닙니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f(0)&=0,\\
                    f(-3)&=-f(3),\\
                    f(-5)&=-f(5)
                    \end{aligned}
                `} />

                                    <p className="leading-8 text-gray-200">
                                        따라서 <InlineMath math="f(3)" />과{" "}
                                        <InlineMath math="f(5)" />만 정하면 함수 전체가
                                        하나로 결정됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{5\times5=25}
                `} />
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,2,3,4,5\}" />,{" "}
                                <InlineMath math="Y=\{1,2,3,4,5,6,7,8,9\}" />에 대하여
                                다음 조건을 모두 만족하는 함수{" "}
                                <InlineMath math="f:X\longrightarrow Y" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="f(3)=4" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) 집합 <InlineMath math="X" />의 임의의 두 원소{" "}
                                    <InlineMath math="x_1,x_2" />에 대하여{" "}
                                    <InlineMath math="x_1<x_2" />이면{" "}
                                    <InlineMath math="f(x_1)>f(x_2)" />이다.
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)에 의하여 <InlineMath math="f" />는 감소함수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)>f(2)>f(3)>f(4)>f(5)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="f(3)=4" />이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)>f(2)>4>f(4)>f(5)
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(1),f(2)" />는 4보다 큰
                                    공역의 원소
                                </p>

                                <BlockMath math={String.raw`
                5,\ 6,\ 7,\ 8,\ 9
            `} />

                                <p className="leading-8">
                                    중 2개를 선택하면 됩니다.
                                </p>

                                <p className="leading-8">
                                    선택한 두 값을 큰 값부터{" "}
                                    <InlineMath math="f(1),f(2)" />에 대응시키는 방법은
                                    한 가지뿐이므로
                                </p>

                                <BlockMath math={String.raw`
                {}_5C_2
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="f(4),f(5)" />는 4보다 작은
                                    공역의 원소
                                </p>

                                <BlockMath math={String.raw`
                1,\ 2,\ 3
            `} />

                                <p className="leading-8">
                                    중 2개를 선택하면 됩니다.
                                    이때도 큰 값부터 대응시키는 방법은 한 가지이므로
                                </p>

                                <BlockMath math={String.raw`
                {}_3C_2
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 구하는 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                {}_5C_2\times{}_3C_2
                &=10\times3\\
                &=30
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{30}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        감소함수에서 하나의 함숫값이 정해져 있으면
                                        그 값을 기준으로 왼쪽에는 더 큰 함숫값,
                                        오른쪽에는 더 작은 함숫값이 와야 합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    f(1)>f(2)>4>f(4)>f(5)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        각각 사용할 함숫값만 선택하면 감소하는 순서로
                                        대응하는 방법은 한 가지로 결정됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{{}_5C_2\times{}_3C_2}
                `} />
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
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{1,2,3,4\},\qquad
            Y=\{2,3,4,5,6,7,8,9\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 다음 두 조건을 모두 만족하는 함수{" "}
                                <InlineMath math="f:X\longrightarrow Y" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="f(2)" />는 짝수이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="a\in X" />,{" "}
                                    <InlineMath math="b\in X" />일 때,{" "}
                                    <InlineMath math="a<b" />이면{" "}
                                    <InlineMath math="f(a)<f(b)" />이다.
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)에 의하여 <InlineMath math="f" />는 증가함수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)<f(2)<f(3)<f(4)
            `} />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    조건 (가)에 의하여 <InlineMath math="f(2)" />는
                                    짝수이므로 가능한 값을 살펴보면
                                </p>

                                <BlockMath math={String.raw`
                2,\ 4,\ 6,\ 8
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 <InlineMath math="f(2)=2" />이면{" "}
                                    <InlineMath math="f(1)<2" />인 함숫값이 없으므로
                                    불가능합니다.
                                </p>

                                <p className="leading-8">
                                    또 <InlineMath math="f(2)=8" />이면 8보다 큰
                                    공역의 원소가 9 하나뿐이므로{" "}
                                    <InlineMath math="f(3)<f(4)" />를 만족시킬 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 가능한 경우는
                                </p>

                                <BlockMath math={String.raw`
                f(2)=4\quad\text{또는}\quad f(2)=6
            `} />

                                <p className="font-bold text-white">
                                    ① <InlineMath math="f(2)=4" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)" />은 4보다 작은{" "}
                                    <InlineMath math="2,3" /> 중 하나이므로 2가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(3),f(4)" />는 4보다 큰
                                </p>

                                <BlockMath math={String.raw`
                5,\ 6,\ 7,\ 8,\ 9
            `} />

                                <p className="leading-8">
                                    중 2개를 선택하면 증가하는 순서로 대응하는 방법은
                                    한 가지로 결정됩니다.
                                </p>

                                <BlockMath math={String.raw`
                2\times{}_5C_2
                =2\times10
                =20
            `} />

                                <p className="font-bold text-white">
                                    ② <InlineMath math="f(2)=6" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)" />은 6보다 작은
                                </p>

                                <BlockMath math={String.raw`
                2,\ 3,\ 4,\ 5
            `} />

                                <p className="leading-8">
                                    중 하나이므로 4가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(3),f(4)" />는 6보다 큰{" "}
                                    <InlineMath math="7,8,9" /> 중 2개를 선택하면 되므로
                                </p>

                                <BlockMath math={String.raw`
                4\times{}_3C_2
                =4\times3
                =12
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 구하는 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                20+12=32
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{32}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        증가함수에서는
                                    </p>

                                    <BlockMath math={String.raw`
                    f(1)<f(2)<f(3)<f(4)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        이어야 합니다. 따라서 먼저 조건을 만족하는{" "}
                                        <InlineMath math="f(2)" />의 값을 정한 뒤,
                                        그보다 작은 함숫값과 큰 함숫값을 각각 선택합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f(2)=4 &:\
                    2\times{}_5C_2=20\\
                    f(2)=6 &:\
                    4\times{}_3C_2=12
                    \end{aligned}
                `} />

                                    <p className="leading-8 text-gray-200">
                                        선택한 함숫값을 증가하는 순서로 대응시키는 방법은
                                        각각 한 가지뿐입니다.
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
                                집합 <InlineMath math="X=\{3,6,9,12,15\}" />일 때
                                함수 <InlineMath math="f:X\longrightarrow X" /> 중에서
                                집합 <InlineMath math="X" />의 모든 원소{" "}
                                <InlineMath math="x" />에 대하여<br />
                                <InlineMath math="x+f(x)>15" />를 만족시키는
                                함수 <InlineMath math="f" />의 개수를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 조건을 <InlineMath math="f(x)" />에 대하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                f(x)>15-x
            `} />

                                <p className="leading-8">
                                    입니다. 각 <InlineMath math="x" />에 대하여 가능한
                                    함숫값의 개수를 구해 봅시다.
                                </p>

                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse text-center">
                                        <thead>
                                            <tr className="border-b border-white/20 text-white">
                                                <th className="p-3">
                                                    <InlineMath math="x" />
                                                </th>
                                                <th className="p-3">조건</th>
                                                <th className="p-3">
                                                    가능한 <InlineMath math="f(x)" />
                                                </th>
                                                <th className="p-3">개수</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-gray-300">
                                            <tr className="border-b border-white/10">
                                                <td className="p-3">3</td>
                                                <td className="p-3">
                                                    <InlineMath math="f(3)>12" />
                                                </td>
                                                <td className="p-3">
                                                    <InlineMath math="15" />
                                                </td>
                                                <td className="p-3">1</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">6</td>
                                                <td className="p-3">
                                                    <InlineMath math="f(6)>9" />
                                                </td>
                                                <td className="p-3">
                                                    <InlineMath math="12,\ 15" />
                                                </td>
                                                <td className="p-3">2</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">9</td>
                                                <td className="p-3">
                                                    <InlineMath math="f(9)>6" />
                                                </td>
                                                <td className="p-3">
                                                    <InlineMath math="9,\ 12,\ 15" />
                                                </td>
                                                <td className="p-3">3</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">12</td>
                                                <td className="p-3">
                                                    <InlineMath math="f(12)>3" />
                                                </td>
                                                <td className="p-3">
                                                    <InlineMath math="6,\ 9,\ 12,\ 15" />
                                                </td>
                                                <td className="p-3">4</td>
                                            </tr>

                                            <tr>
                                                <td className="p-3">15</td>
                                                <td className="p-3">
                                                    <InlineMath math="f(15)>0" />
                                                </td>
                                                <td className="p-3">
                                                    <InlineMath math="3,\ 6,\ 9,\ 12,\ 15" />
                                                </td>
                                                <td className="p-3">5</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <p className="leading-8">
                                    각각의 함숫값은 서로 독립적으로 선택할 수 있으므로
                                    곱의 법칙에 의하여
                                </p>

                                <BlockMath math={String.raw`
                1\times2\times3\times4\times5=120
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{120}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        함수의 모든 함숫값이 서로 달라야 한다는 조건은 없습니다.
                                        따라서 각 <InlineMath math="x" />마다 조건을 만족하는{" "}
                                        <InlineMath math="f(x)" />의 개수를 따로 구한 뒤
                                        곱하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    f(3)&:\ 1\text{가지}\\
                    f(6)&:\ 2\text{가지}\\
                    f(9)&:\ 3\text{가지}\\
                    f(12)&:\ 4\text{가지}\\
                    f(15)&:\ 5\text{가지}
                    \end{aligned}
                `} />

                                    <BlockMath math={String.raw`
                    \boxed{1\times2\times3\times4\times5}
                `} />
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
                                두 집합
                            </p>

                            <BlockMath math={String.raw`
            X=\{1,2,3,4,5\},\qquad
            Y=\{1,2,3,4,5,6\}
        `} />

                            <p className="leading-8 text-gray-200">
                                에 대하여 함수 <InlineMath math="f:X\longrightarrow Y" />가
                                다음 조건을 만족하는 함수 <InlineMath math="f" />의
                                개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) 함수 <InlineMath math="f" />는 일대일함수이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나){" "}
                                    <InlineMath math="f(2)<f(3)<f(4)" />
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (가)에 의하여 서로 다른 정의역의 원소는
                                    서로 다른 함숫값을 가져야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="f(2),f(3),f(4)" />에
                                    대응시킬 함숫값을 정해 봅시다.
                                </p>

                                <p className="leading-8">
                                    공역의 6개 원소 중 서로 다른 3개를 선택하면
                                </p>

                                <BlockMath math={String.raw`
                {}_6C_3
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (나)에 의해
                                </p>

                                <BlockMath math={String.raw`
                f(2)<f(3)<f(4)
            `} />

                                <p className="leading-8">
                                    이어야 하므로 선택한 3개의 값을 작은 것부터
                                    차례대로 <InlineMath math="f(2),f(3),f(4)" />에
                                    대응시키는 방법은 한 가지뿐입니다.
                                </p>

                                <p className="leading-8">
                                    이제 공역에는 사용하지 않은 원소가 3개 남습니다.
                                    <InlineMath math="f" />가 일대일함수이므로{" "}
                                    <InlineMath math="f(1)" />은 3가지 중 하나를 선택할 수 있고,{" "}
                                    <InlineMath math="f(5)" />는 남은 2가지 중 하나를
                                    선택할 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                3\times2
            `} />

                                <p className="leading-8">
                                    따라서 구하는 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                {}_6C_3\times3\times2
                &=20\times6\\
                &=120
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{120}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        <InlineMath math="f(2)<f(3)<f(4)" />와 같이
                                        함숫값의 크기 순서가 정해져 있을 때는,
                                        사용할 함숫값을 먼저 선택하면 대응 방법은
                                        한 가지로 결정됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \underbrace{{}_6C_3}_{f(2),f(3),f(4)}
                    \times
                    \underbrace{3\times2}_{f(1),f(5)}
                `} />

                                    <p className="leading-8 text-gray-200">
                                        나머지 함숫값은 일대일함수의 조건에 따라
                                        이미 사용한 값을 제외하고 하나씩 선택하면 됩니다.
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
                                두 집합{" "}
                                <InlineMath math="X=\{1,2,3,4\}" />,{" "}
                                <InlineMath math="Y=\{1,2,3,4,5\}" />에 대하여
                                다음 조건을 만족시키는 함수{" "}
                                <InlineMath math="f:X\longrightarrow Y" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) 함수 <InlineMath math="f" />의 치역의 원소의 개수는
                                    3이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="f(1)\times f(3)" />은 홀수이다.
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="f(1)\times f(3)" />이 홀수이므로{" "}
                                    <InlineMath math="f(1)" />과 <InlineMath math="f(3)" />은
                                    모두 홀수이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    공역 <InlineMath math="Y" />의 홀수인 원소는
                                </p>

                                <BlockMath math={String.raw`
                1,\ 3,\ 5
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1),f(3)\in\{1,3,5\}
            `} />

                                <p className="leading-8">
                                    입니다. 이제 <InlineMath math="f(1)" />과{" "}
                                    <InlineMath math="f(3)" />이 같은 경우와 다른 경우로
                                    나누어 생각합니다.
                                </p>

                                <p className="font-bold text-white">
                                    ① <InlineMath math="f(1)=f(3)" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)=f(3)" />의 값은{" "}
                                    <InlineMath math="1,3,5" /> 중 하나이므로 3가지입니다.
                                </p>

                                <p className="leading-8">
                                    현재 치역의 원소가 1개 정해져 있습니다.
                                    치역의 원소의 개수가 정확히 3개가 되려면
                                    나머지 공역의 4개 원소 중 2개를 더 선택해야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                {}_4C_2
            `} />

                                <p className="leading-8">
                                    선택한 두 값은 <InlineMath math="f(2),f(4)" />에
                                    각각 한 번씩 사용되어야 하므로 대응시키는 방법은
                                </p>

                                <BlockMath math={String.raw`
                2\times1
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 이 경우의 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                3\times{}_4C_2\times2
                =3\times6\times2
                =36
            `} />

                                <p className="font-bold text-white">
                                    ② <InlineMath math="f(1)\ne f(3)" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(1)" />은 홀수 3개 중 하나를
                                    선택할 수 있고, <InlineMath math="f(3)" />은
                                    그와 다른 홀수 2개 중 하나를 선택할 수 있으므로
                                </p>

                                <BlockMath math={String.raw`
                3\times2
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    이때 이미 서로 다른 두 값이 치역에 포함되어 있습니다.
                                    치역의 원소가 정확히 3개가 되려면 나머지 공역의
                                    3개 원소 중 하나만 새로운 함숫값으로 추가되어야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                3
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    새로 선택한 값을 <InlineMath math="c" />라 하면{" "}
                                    <InlineMath math="f(2),f(4)" />는
                                    이미 사용한 두 값과 <InlineMath math="c" />의
                                    세 값 중에서 선택할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    전체 선택은
                                </p>

                                <BlockMath math={String.raw`
                3\times3=9
            `} />

                                <p className="leading-8">
                                    가지이고, 이 중 새로 선택한{" "}
                                    <InlineMath math="c" />를 한 번도 사용하지 않는 경우는
                                </p>

                                <BlockMath math={String.raw`
                2\times2=4
            `} />

                                <p className="leading-8">
                                    가지입니다. 따라서 <InlineMath math="c" />가
                                    적어도 한 번 사용되는 경우는
                                </p>

                                <BlockMath math={String.raw`
                3^2-2^2=5
            `} />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 이 경우의 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                3\times2\times3\times5
                =90
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 경우를 더하면
                                </p>

                                <BlockMath math={String.raw`
                36+90=126
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{126}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-200">
                                        치역의 원소의 개수가 정해진 문제에서는
                                        이미 사용된 서로 다른 함숫값이 몇 개인지를
                                        먼저 확인하는 것이 중요합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-200">
                                        이 문제에서는{" "}
                                        <InlineMath math="f(1),f(3)" />이 모두 홀수라는
                                        조건이 있지만 두 값이 반드시 서로 다른 것은 아닙니다.
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    f(1)=f(3)
                    \qquad\text{또는}\qquad
                    f(1)\ne f(3)
                `} />

                                    <p className="leading-8 text-gray-200">
                                        로 나누어 치역에 이미 포함된 원소의 개수를
                                        각각 1개와 2개로 구분하여 계산합니다.
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
                            <p className="leading-8 text-gray-200">
                                집합 <InlineMath math="X=\{1,2,3,4,5,6\}" />에 대하여
                                일대일대응인 함수{" "}
                                <InlineMath math="f:X\longrightarrow X" />가 다음 조건을
                                만족시킬 때, 함수 <InlineMath math="f" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">
                                <p className="leading-8 text-gray-200">
                                    (가) <InlineMath math="p" />가 소수일 때,{" "}
                                    <InlineMath math="f(p)\le p" />이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-200">
                                    (나) <InlineMath math="a<b" />이고{" "}
                                    <InlineMath math="a" />가 <InlineMath math="b" />의
                                    약수이면 <InlineMath math="f(a)<f(b)" />이다.
                                </p>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    조건 (나)를 이용하여 함숫값 사이의 대소 관계를
                                    찾아봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1" />은{" "}
                                    <InlineMath math="2,3,4,5,6" />의 약수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(1)<f(2),\quad
                f(1)<f(3),\quad
                f(1)<f(4),\quad
                f(1)<f(5),\quad
                f(1)<f(6)
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="f(1)" />은
                                    모든 함숫값 중 가장 작습니다.
                                </p>

                                <p className="leading-8">
                                    함수 <InlineMath math="f" />가 일대일대응이므로
                                    함숫값 <InlineMath math="1,2,3,4,5,6" />을
                                    각각 한 번씩 사용해야 합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                f(1)=1
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 조건 (가)를 이용합니다.
                                    집합 <InlineMath math="X" />의 소수는{" "}
                                    <InlineMath math="2,3,5" />입니다.
                                </p>

                                <BlockMath math={String.raw`
                f(2)\le2,\qquad
                f(3)\le3,\qquad
                f(5)\le5
            `} />

                                <p className="leading-8">
                                    <InlineMath math="f(1)=1" />이 이미 정해져 있고
                                    함숫값은 서로 달라야 하므로{" "}
                                    <InlineMath math="f(2)\le2" />에서
                                </p>

                                <BlockMath math={String.raw`
                f(2)=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로 <InlineMath math="f(3)\le3" />이고
                                    1과 2가 이미 사용되었으므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)=3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    조건 (나)에서 2는 4의 약수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(2)<f(4)
            `} />

                                <p className="leading-8">
                                    이고, 3은 6의 약수이므로
                                </p>

                                <BlockMath math={String.raw`
                f(3)<f(6)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    남은 함숫값은 <InlineMath math="4,5,6" />입니다.
                                    또한 조건 (가)에서 <InlineMath math="f(5)\le5" />이므로{" "}
                                    <InlineMath math="f(5)" />는 4 또는 5입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 다음 두 경우로 나눌 수 있습니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                f(5)=4 &:\
                (f(4),f(6))=(5,6),(6,5)\\
                f(5)=5 &:\
                (f(4),f(6))=(4,6),(6,4)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    각각 2가지씩이므로 구하는 함수의 개수는
                                </p>

                                <BlockMath math={String.raw`
                2+2=4
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

                                    <p className="leading-8 text-gray-200">
                                        일대일대응에서는 함숫값{" "}
                                        <InlineMath math="1,2,3,4,5,6" />을 각각 한 번씩
                                        사용합니다. 먼저 약수 관계를 이용하여{" "}
                                        <InlineMath math="f(1)=1" />을 결정하고,
                                        소수에 대한 조건을 차례대로 적용하면
                                    </p>

                                    <BlockMath math={String.raw`
                    f(1)=1,\qquad f(2)=2,\qquad f(3)=3
                `} />

                                    <p className="leading-8 text-gray-200">
                                        이 결정됩니다. 그다음 남은 함숫값에 대하여
                                        조건을 만족하도록 경우를 나누어 세면 됩니다.
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
                                    1. 함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{함수의 개수}
                            =
                            n(Y)^{\,n(X)}
                        }
                    `} />

                                <p className="text-center leading-8">
                                    정의역의 각 원소마다 공역의 원소를 자유롭게
                                    하나씩 선택합니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    2. 일대일함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            n(n-1)(n-2)\cdots(n-m+1)
                            ={}_nP_m
                        }
                    `} />

                                <p className="text-center leading-8">
                                    한 번 사용한 함숫값은 다시 사용할 수 없으므로
                                    선택할 수 있는 개수가 하나씩 줄어듭니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    3. 증가함수와 감소함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{증가함수의 개수}
                            =
                            \text{감소함수의 개수}
                            =
                            {}_nC_m
                        }
                    `} />

                                <p className="text-center leading-8">
                                    사용할 함숫값만 선택하면 대응하는 순서는
                                    한 가지로 결정됩니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    4. 일대일대응
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            n(X)=n(Y)=n
                            \quad\Longrightarrow\quad
                            n!
                        }
                    `} />
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    5. 상수함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{상수함수의 개수}=n(Y)
                        }
                    `} />

                                <p className="text-center leading-8">
                                    하나의 공통된 함숫값만 선택합니다.
                                </p>
                            </div>

                            <div>
                                <p className="mb-3 font-bold text-white">
                                    6. 치역과 공역이 같은 함수
                                </p>

                                <BlockMath math={String.raw`
                        \boxed{
                            \text{전체 함수}
                            -
                            \text{공역의 원소를 모두 사용하지 못한 함수}
                        }
                    `} />

                                <p className="text-center leading-8">
                                    안 되는 경우는 치역의 원소의 개수에 따라
                                    나누어 계산합니다.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}