"use client";

import { InlineMath, BlockMath } from "react-katex";
import { useState } from "react";

function AbsoluteValueGraph() {
    const [x, setX] = useState(5);

    const y = Math.abs(x - 3);

    const minX = -2;
    const maxX = 8;

    const graphLeft = 80;
    const graphRight = 680;
    const graphBottom = 260;
    const graphTop = 60;

    const toSvgX = (value: number) =>
        graphLeft + ((value - minX) / (maxX - minX)) * (graphRight - graphLeft);

    const toSvgY = (value: number) =>
        graphBottom - (value / 5) * (graphBottom - graphTop);

    const pointX = toSvgX(x);
    const pointY = toSvgY(y);

    const vertexX = toSvgX(3);
    const vertexY = toSvgY(0);

    return (
        <div className="mt-8 rounded-xl border border-white/20 bg-black/40 p-6">
            <h3 className="mb-4 text-2xl font-bold text-white">
                절댓값 함수의 그래프
            </h3>

            <div className="mb-4 text-xl font-bold text-white">
                <BlockMath math={`y=|x-3|`}
                />
            </div>

            <svg viewBox="0 0 760 320" className="w-full">
                {/* x축 */}
                <line
                    x1={graphLeft}
                    y1={graphBottom}
                    x2={graphRight}
                    y2={graphBottom}
                    stroke="currentColor"
                    strokeWidth="2"
                />

                {/* V 그래프 */}
                <line
                    x1={toSvgX(minX)}
                    y1={toSvgY(Math.abs(minX - 3))}
                    x2={vertexX}
                    y2={vertexY}
                    stroke="#facc15"
                    strokeWidth="4"
                />
                <line
                    x1={vertexX}
                    y1={vertexY}
                    x2={toSvgX(maxX)}
                    y2={toSvgY(Math.abs(maxX - 3))}
                    stroke="#facc15"
                    strokeWidth="4"
                />

                {/* 움직이는 점 */}
                <circle cx={pointX} cy={pointY} r="8" fill="#60a5fa" />

                {/* 보조선 */}
                <line
                    x1={pointX}
                    y1={pointY}
                    x2={pointX}
                    y2={graphBottom}
                    stroke="#60a5fa"
                    strokeDasharray="6 6"
                    strokeWidth="2"
                />

                {/* x축 눈금 */}
                {[-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <g key={n}>
                        <line
                            x1={toSvgX(n)}
                            y1={graphBottom - 6}
                            x2={toSvgX(n)}
                            y2={graphBottom + 6}
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                        <text
                            x={toSvgX(n)}
                            y={graphBottom + 28}
                            textAnchor="middle"
                            className="fill-current text-sm"
                        >
                            {n}
                        </text>
                    </g>
                ))}

                <text
                    x={pointX}
                    y={pointY - 15}
                    textAnchor="middle"
                    className="fill-blue-400 text-lg font-bold"
                >
                    ({x}, {y})
                </text>
            </svg>

            <input
                type="range"
                min={minX}
                max={maxX}
                step="1"
                value={x}
                onChange={(e) => setX(Number(e.target.value))}
                className="mt-4 w-full"
            />

            <div className="mt-5 rounded-xl bg-white/10 p-5 text-center">
                <BlockMath
                    math={`y=\\left|x-3\\right|=\\left|${x}-3\\right|=\\left|${x - 3}\\right|=${y}`}
                />
            </div>
        </div>
    );
}

function DistanceSumDemo() {
    const [x, setX] = useState(3);

    const minX = -4;
    const maxX = 10;

    const lineY = 150;
    const redY = 90;
    const blueY = 112;

    const left = 60;
    const right = 700;

    const toSvgX = (value: number) =>
        left + ((value - minX) / (maxX - minX)) * (right - left);

    const d1 = Math.abs(x - 1);
    const d5 = Math.abs(x - 5);
    const sum = d1 + d5;

    const format = (n: number) =>
        Number.isInteger(n) ? String(n) : n.toFixed(1);

    const region =
        x < 1 ? "x < 1" : x <= 5 ? "1\\le x\\le5" : "x > 5";

    return (
        <div className="mt-6 rounded-xl border border-white/15 bg-black/40 p-5">
            <p className="mb-4 text-center leading-8 text-gray-300">
                슬라이더를 움직여 <InlineMath math="x" />의 위치와 거리의 합을 확인해 보세요.
            </p>

            <svg viewBox="0 0 760 250" className="w-full">
                {/* number line */}
                <line x1={left} y1={lineY} x2={right} y2={lineY} stroke="currentColor" strokeWidth="2" />
                <polygon points={`${right},${lineY} ${right - 14},${lineY - 7} ${right - 14},${lineY + 7}`} fill="currentColor" />

                {/* ticks */}
                {Array.from({ length: maxX - minX + 1 }, (_, i) => minX + i).map((n) => (
                    <g key={n}>
                        <line
                            x1={toSvgX(n)}
                            y1={lineY - 7}
                            x2={toSvgX(n)}
                            y2={lineY + 7}
                            stroke="currentColor"
                            strokeWidth="1.5"
                        />
                        <text
                            x={toSvgX(n)}
                            y={lineY + 32}
                            textAnchor="middle"
                            className={n === x ? "fill-blue-400 text-sm font-bold" : "fill-current text-sm"}
                        >
                            {n}
                        </text>
                    </g>
                ))}

                {/* fixed points */}
                <circle cx={toSvgX(1)} cy={lineY} r="6" fill="white" />
                <circle cx={toSvgX(5)} cy={lineY} r="6" fill="white" />

                <text x={toSvgX(1)} y={lineY + 55} textAnchor="middle" className="fill-current text-lg font-bold">
                    1
                </text>
                <text x={toSvgX(5)} y={lineY + 55} textAnchor="middle" className="fill-current text-lg font-bold">
                    5
                </text>

                {/* moving x point */}
                <circle cx={toSvgX(x)} cy={lineY} r="7" fill="#3b82f6" />

                <text x={toSvgX(x)} y={lineY - 18} textAnchor="middle" className="fill-blue-400 text-lg font-bold">
                    x
                </text>

                {/* guide lines */}
                <line x1={toSvgX(x)} y1={lineY} x2={toSvgX(x)} y2={blueY} stroke="#3b82f6" strokeDasharray="5 5" />
                <line x1={toSvgX(1)} y1={lineY} x2={toSvgX(1)} y2={redY} stroke="#ef4444" strokeDasharray="5 5" />
                <line x1={toSvgX(5)} y1={lineY} x2={toSvgX(5)} y2={blueY} stroke="#3b82f6" strokeDasharray="5 5" />

                {/* red distance |x-1| */}
                <line
                    x1={toSvgX(1)}
                    y1={redY}
                    x2={toSvgX(x)}
                    y2={redY}
                    stroke="#ef4444"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                {/* blue distance |x-5| */}
                <line
                    x1={toSvgX(5)}
                    y1={blueY}
                    x2={toSvgX(x)}
                    y2={blueY}
                    stroke="#2563eb"
                    strokeWidth="6"
                    strokeLinecap="round"
                />

                <text
                    x={(toSvgX(1) + toSvgX(x)) / 2}
                    y={redY - 12}
                    textAnchor="middle"
                    className="fill-red-400 text-lg font-bold"
                >
                    {format(d1)}
                </text>

                <text
                    x={(toSvgX(5) + toSvgX(x)) / 2}
                    y={blueY - 12}
                    textAnchor="middle"
                    className="fill-blue-400 text-lg font-bold"
                >
                    {format(d5)}
                </text>
            </svg>

            <input
                type="range"
                min={minX}
                max={maxX}
                step="1"
                value={x}
                onChange={(e) => setX(Number(e.target.value))}
                className="mt-4 w-full"
            />

            <div className="mt-5 grid gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-4 text-center">
                    <p className="text-red-300">1에서 <InlineMath math="x" />까지의 거리</p>
                    <BlockMath math={`|x-1|=${format(d1)}`} />
                </div>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4 text-center">
                    <p className="text-blue-300">5에서 <InlineMath math="x" />까지의 거리</p>
                    <BlockMath math={`|x-5|=${format(d5)}`} />
                </div>

                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4 text-center">
                    <p className="text-yellow-300">거리의 합</p>
                    <BlockMath math={`${format(d1)}+${format(d5)}=${format(sum)}`} />
                </div>
            </div>

            <div className="mt-5 rounded-xl bg-white/10 p-5 text-center">
                <BlockMath math={`|x-1|+|x-5|=${format(sum)}`} />
                <p className="mt-2 text-gray-300">
                    현재 구간 : <InlineMath math={region} />
                </p>
            </div>
        </div>
    );
}

export default function QuadraticEquationPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.11 방정식과 다항방정식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    지금까지는 수의 범위를 확장하면서 복소수까지 배웠다.
                    이제부터는 이러한 수를 이용하여 방정식의 해를 구하는 방법을 알아본다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        값에 따라 참이 되기도 하고 거짓이 되기도 하는 등식을
                        <strong> 방정식</strong>이라고 한다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath math="4x-3=33" />

                    <p className="leading-8 text-gray-300">
                        은 <InlineMath math="x=9" />일 때만 참이므로 방정식이다.
                    </p>

                    <BlockMath math="4\times9-3=33" />

                    <p className="leading-8 text-gray-300">
                        방정식을 푼다는 것은 방정식을 참이 되게 하는 값을 구하는 것이며,
                        이러한 값을 <strong>해</strong>라고 한다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        다항방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다항식으로 이루어진 방정식을 <strong>다항방정식</strong>이라고 한다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath math="x^2-7x+12=0" />

                    <BlockMath math="x^3+3x=0" />

                    <p className="leading-8 text-gray-300">
                        등은 모두 다항방정식이다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        방정식은 한쪽으로 모두 이항하면 일반적으로
                    </p>

                    <BlockMath math="f(x)=0" />

                    <p className="leading-8 text-gray-300">
                        의 형태로 나타낼 수 있다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        문자의 개수와 식의 개수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일반적으로 방정식의 해를 구하려면
                        <strong> 문자의 개수만큼 식이 필요하다.</strong>
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath math="x+y=5" />

                    <p className="leading-8 text-gray-300">
                        만으로는
                    </p>

                    <BlockMath math="(x,y)=(1,4),(2,3),(0,5)\cdots" />

                    <p className="leading-8 text-gray-300">
                        처럼 해가 여러 개 존재한다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 문자 2개의 값을 모두 구하려면 보통 식도 2개가 필요하다.
                    </p>

                    <BlockMath math="\begin{cases}x+y=5\\x-y=1\end{cases}" />

                    <p className="leading-8 text-gray-300">
                        와 같이 식이 2개 주어지면
                    </p>

                    <BlockMath math="x=3,\quad y=2" />

                    <p className="leading-8 text-gray-300">
                        를 구할 수 있다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        마찬가지로 문자 3개의 값을 모두 구하려면 일반적으로 식도 3개가 필요하다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <ul className="space-y-3 leading-8 text-gray-300">
                        <li>
                            • 방정식 : 참이 되는 값을 찾는 식
                        </li>
                        <li>
                            • 해 : 방정식을 참이 되게 하는 값
                        </li>
                        <li>
                            • 다항방정식 : 다항식으로 이루어진 방정식
                        </li>
                        <li>
                            • 문자가 <InlineMath math="n" />개이면 일반적으로 식도 <InlineMath math="n" />개가 필요하다.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.12 일차방정식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    가장 간단한 다항방정식은 일차방정식이다.
                    일차방정식은 문자의 최고차항의 차수가 1인 방정식이다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일차방정식은 일반적으로
                    </p>

                    <BlockMath math="ax+b=0" />

                    <p className="leading-8 text-gray-300">
                        의 형태로 나타낼 수 있다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        여기서 <InlineMath math="a,b" />는 상수이다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        해의 개수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a" />의 값에 따라 해의 개수가 달라진다.
                    </p>

                    <div className="mt-5 space-y-6">

                        <div>
                            <BlockMath math="a\ne0" />

                            <p className="leading-8 text-gray-300">
                                양변을 <InlineMath math="a" />로 나누면
                            </p>

                            <BlockMath math="x=-\frac ba" />

                            <p className="leading-8 text-gray-300">
                                따라서 해는 항상 1개이다.
                            </p>
                        </div>

                        <div>
                            <BlockMath math="a=0,\quad b=0" />

                            <p className="leading-8 text-gray-300">
                                방정식은
                            </p>

                            <BlockMath math="0=0" />

                            <p className="leading-8 text-gray-300">
                                이 되어 항상 참이 된다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 모든 실수가 해이며 해가 무수히 많다.
                            </p>
                        </div>

                        <div>
                            <BlockMath math="a=0,\quad b\ne0" />

                            <p className="leading-8 text-gray-300">
                                방정식은
                            </p>

                            <BlockMath math="b=0" />

                            <p className="leading-8 text-gray-300">
                                이 되어 항상 거짓이 된다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                따라서 해가 존재하지 않는다.
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 방정식의 해를 구하여라.
                    </p>

                    <BlockMath math="3x-12=0" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <BlockMath math="3x=12" />

                            <BlockMath math="x=4" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=4" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 방정식의 해의 개수를 구하여라.
                    </p>

                    <BlockMath math="(a-1)x+2=0" />

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="a-1\ne0" />이면
                            </p>

                            <BlockMath math="x=-\frac2{a-1}" />

                            <p>
                                이므로 해는 1개이다.
                            </p>

                            <p>
                                <InlineMath math="a=1" />이면
                            </p>

                            <BlockMath math="2=0" />

                            <p>
                                이 되어 해가 존재하지 않는다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="a=1" />일 때 해가 없고,
                                그 외에는 해가 1개이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 방정식
                    </p>

                    <BlockMath math="a^2x+3=9x+a" />

                    <p className="mb-4 leading-8 text-gray-300">
                        가 모든 실수를 해로 가질 때,
                        실수 <InlineMath math="a" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                모든 항을 한쪽으로 이항하면
                            </p>

                            <BlockMath math="(a^2-9)x+(3-a)=0" />

                            <p>
                                이 된다.
                            </p>

                            <p>
                                방정식이 모든 실수를 해로 가지려면 항등식이어야 한다.
                            </p>

                            <BlockMath math="0=0" />

                            <p>
                                이 되어야 하므로
                                <InlineMath math="x" />의 계수와 상수항이 모두 0이어야 한다.
                            </p>

                            <BlockMath math="a^2-9=0" />

                            <BlockMath math="3-a=0" />

                            <p>
                                두 식을 풀면
                            </p>

                            <BlockMath math="a=\pm3" />

                            <BlockMath math="a=3" />

                            <p>
                                공통으로 만족하는 값은
                            </p>

                            <BlockMath math="a=3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="z" />에 대한 방정식
                    </p>

                    <BlockMath math="(a^2-6)z+3=a(z+1)" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 해를 갖지 않을 때,
                        실수 <InlineMath math="a" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                모든 항을 한쪽으로 이항하면
                            </p>

                            <BlockMath math="(a^2-a-6)z+(3-a)=0" />

                            <p>
                                이 된다.
                            </p>

                            <p>
                                일차방정식
                            </p>

                            <BlockMath math="Az+B=0" />

                            <p>
                                이 해를 갖지 않으려면
                            </p>

                            <BlockMath math="A=0,\quad B\ne0" />

                            <p>
                                이어야 한다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="a^2-a-6=0" />

                            <BlockMath math="(a-3)(a+2)=0" />

                            <BlockMath math="a=3,\quad -2" />

                            <p>
                                이제 상수항을 확인하면
                            </p>

                            <BlockMath math="3-a\ne0" />

                            <p>
                                <InlineMath math="a=3" />이면
                            </p>

                            <BlockMath math="3-a=0" />

                            <p>
                                이므로 해가 무수히 많다.
                            </p>

                            <p>
                                <InlineMath math="a=-2" />이면
                            </p>

                            <BlockMath math="3-a=5\ne0" />

                            <p>
                                이므로 해가 존재하지 않는다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="a=-2" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음은 방정식
                    </p>

                    <BlockMath math="(a+2)^2x=9x+2(a-1)" />

                    <p className="leading-8 text-gray-300">
                        의 해에 대한 설명이다.
                        옳은 것을 모두 고르시오.
                    </p>

                    <div className="my-5 rounded-xl border border-white/15 p-5 text-gray-300">
                        <p>ㄱ. <InlineMath math="a=1" />일 때, 해는 없다.</p>
                        <p>ㄴ. <InlineMath math="a=-5" />일 때, 해는 무수히 많다.</p>
                        <p>ㄷ. <InlineMath math="a\ne1,\ a\ne-5" />일 때, 오직 하나의 해가 존재한다.</p>
                    </div>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                모든 항을 한쪽으로 이항하면
                            </p>

                            <BlockMath math="\big((a+2)^2-9\big)x-2(a-1)=0" />

                            <p>
                                인수분해하면
                            </p>

                            <BlockMath math="(a-1)(a+5)x-2(a-1)=0" />

                            <BlockMath math="(a-1)\Big((a+5)x-2\Big)=0" />

                            <p className="font-semibold text-white">
                                ㄱ 확인
                            </p>

                            <p>
                                <InlineMath math="a=1" />이면
                            </p>

                            <BlockMath math="0=0" />

                            <p>
                                이 되므로 해는 무수히 많다.
                            </p>

                            <p>
                                따라서 ㄱ은 거짓이다.
                            </p>

                            <p className="font-semibold text-white">
                                ㄴ 확인
                            </p>

                            <p>
                                <InlineMath math="a=-5" />이면
                            </p>

                            <BlockMath math="-12=0" />

                            <p>
                                이 되므로 해가 존재하지 않는다.
                            </p>

                            <p>
                                따라서 ㄴ은 거짓이다.
                            </p>

                            <p className="font-semibold text-white">
                                ㄷ 확인
                            </p>

                            <p>
                                <InlineMath math="a\ne1,\ a\ne-5" />이면
                            </p>

                            <BlockMath math="(a+5)x-2=0" />

                            <BlockMath math="x=\frac{2}{a+5}" />

                            <p>
                                이므로 해는 정확히 1개 존재한다.
                            </p>

                            <p>
                                따라서 ㄷ은 참이다.
                            </p>

                            <p className="font-semibold text-white">
                                정답 : ㄷ
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="ax+b=0" />

                    <BlockMath math="a\ne0 \Longrightarrow x=-\frac ba" />

                    <BlockMath math="a=0,\ b=0 \Longrightarrow \text{해가 무수히 많다}" />

                    <BlockMath math="a=0,\ b\ne0 \Longrightarrow \text{해가 없다}" />
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.13 절댓값의 정의와 절댓값 기호가 포함된 방정식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    절댓값은 수직선 위에서 두 점 사이의 거리를 나타내는 기호입니다.
                    거리이므로 절댓값은 항상 0 이상입니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        두 점 사이의 거리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        수직선 위의 두 점 <InlineMath math="A(a)" />, <InlineMath math="B(b)" /> 사이의 거리는
                        두 수의 차의 절댓값으로 나타냅니다.
                    </p>

                    <div className="mt-6 rounded-xl border border-white/15 bg-black/30 p-5">
                        <svg viewBox="0 0 720 220" className="my-2 w-full">
                            <line x1="60" y1="90" x2="660" y2="90" stroke="currentColor" strokeWidth="2" />
                            <polygon points="660,90 645,82 645,98" fill="currentColor" />
                            <polygon points="60,90 75,82 75,98" fill="currentColor" />

                            <line x1="220" y1="75" x2="220" y2="105" stroke="currentColor" strokeWidth="2" />
                            <line x1="500" y1="75" x2="500" y2="105" stroke="currentColor" strokeWidth="2" />

                            <circle cx="220" cy="90" r="6" fill="currentColor" />
                            <circle cx="500" cy="90" r="6" fill="currentColor" />

                            <line x1="220" y1="55" x2="500" y2="55" stroke="red" strokeWidth="4" />
                            <line x1="220" y1="55" x2="220" y2="70" stroke="red" strokeWidth="3" />
                            <line x1="500" y1="55" x2="500" y2="70" stroke="red" strokeWidth="3" />

                            <text x="220" y="130" textAnchor="middle" className="fill-blue-400 text-2xl font-bold">
                                a
                            </text>
                            <text x="500" y="130" textAnchor="middle" className="fill-blue-400 text-2xl font-bold">
                                b
                            </text>

                            <text x="360" y="40" textAnchor="middle" className="fill-red-400 text-xl font-bold">
                                거리
                            </text>

                            <text x="360" y="185" textAnchor="middle" className="fill-current text-2xl font-bold">
                                두 점 A(a), B(b) 사이의 거리
                            </text>
                        </svg>
                    </div>

                    <BlockMath math="\text{두 점 } A(a), B(b)\text{ 사이의 거리}=|a-b|" />

                    <p className="mt-5 leading-8 text-gray-300">
                        또한 거리는 방향이 없으므로
                    </p>

                    <BlockMath math="|a-b|=|b-a|" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        절댓값의 뜻
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|a-b|" />는 <InlineMath math="a" />와 <InlineMath math="b" /> 사이의 거리입니다.
                    </p>

                    <BlockMath math="|a-b|=\begin{cases}a-b & (a>b)\\ b-a & (a<b)\end{cases}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        특히 <InlineMath math="|x|" />는 <InlineMath math="x" />와 원점 <InlineMath math="0" /> 사이의 거리입니다.
                    </p>

                    <BlockMath math="|x|=|x-0|" />
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        거리로 해석하기
                    </h3>

                    <BlockMath math="|x-3|=|3-x|" />

                    <p className="text-center leading-8 text-gray-300">
                        <InlineMath math="x" />와 <InlineMath math="3" /> 사이의 거리
                    </p>

                    <BlockMath math="|x+5|=|x-(-5)|=|-5-x|" />

                    <p className="text-center leading-8 text-gray-300">
                        <InlineMath math="x" />와 <InlineMath math="-5" /> 사이의 거리
                    </p>
                </div>

                <AbsoluteValueGraph />

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        절댓값 방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        절댓값 방정식은 거리로 해석하면 쉽게 풀 수 있습니다.
                    </p>

                    <BlockMath math="|x-a|=b\quad(b>0)" />

                    <p className="leading-8 text-gray-300">
                        는 <InlineMath math="x" />와 <InlineMath math="a" /> 사이의 거리가 <InlineMath math="b" />라는 뜻입니다.
                    </p>

                    <BlockMath math="x=a-b\quad \text{또는}\quad x=a+b" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="|x-3|=2" />를 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="|x-3|=2" />는 <InlineMath math="x" />와 <InlineMath math="3" /> 사이의 거리가 <InlineMath math="2" />라는 뜻입니다.
                            </p>

                            <BlockMath math="x=3-2\quad \text{또는}\quad x=3+2" />

                            <BlockMath math="x=1,\quad 5" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=1,\ 5" />입니다.
                            </p>
                        </div>
                        <AbsoluteValueGraph />
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="|x+5|=3" />을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="|x+5|" />는 <InlineMath math="|x-(-5)|" />이므로 <InlineMath math="x" />와 <InlineMath math="-5" /> 사이의 거리입니다.
                            </p>

                            <BlockMath math="x=-5-3\quad \text{또는}\quad x=-5+3" />

                            <BlockMath math="x=-8,\quad -2" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=-8,\ -2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="|x-1|+|x-5|=8" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 구간을 나누어서
                                </h4>

                                <p>
                                    절댓값의 기준점은
                                    <InlineMath math="1" />, <InlineMath math="5" />
                                    이므로
                                </p>

                                <BlockMath math="x<1,\quad 1\le x<5,\quad x\ge5" />

                                <p>
                                    의 세 구간으로 나누어 생각한다.
                                </p>

                                <p className="font-semibold text-white">
                                    ① <InlineMath math="x<1" />
                                </p>

                                <BlockMath math="-(x-1)-(x-5)=8" />

                                <BlockMath math="-2x+6=8" />

                                <BlockMath math="x=-1" />

                                <p>
                                    <InlineMath math="-1<1" /> 이므로 성립한다.
                                </p>

                                <p className="font-semibold text-white">
                                    ② <InlineMath math="1\le x<5" />
                                </p>

                                <BlockMath math="(x-1)-(x-5)=8" />

                                <BlockMath math="4=8" />

                                <p>
                                    모순이므로 해가 없다.
                                </p>

                                <p className="font-semibold text-white">
                                    ③ <InlineMath math="x\ge5" />
                                </p>

                                <BlockMath math="(x-1)+(x-5)=8" />

                                <BlockMath math="2x-6=8" />

                                <BlockMath math="x=7" />

                                <p>
                                    <InlineMath math="7\ge5" /> 이므로 성립한다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x=-1,\ 7" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 2 : 거리의 정의 이용
                                </h4>

                                <p>
                                    <InlineMath math="|x-1|" /> 은 <InlineMath math="x" /> 와 <InlineMath math="1" /> 사이의 거리이고,
                                </p>

                                <p>
                                    <InlineMath math="|x-5|" /> 은 <InlineMath math="x" /> 와 <InlineMath math="5" /> 사이의 거리이다.
                                </p>

                                <p>
                                    따라서 식은
                                </p>

                                <BlockMath math="(1\text{에서 } x\text{까지의 거리})+ (5\text{에서 } x\text{까지의 거리})=8" />

                                <p>
                                    을 의미한다.
                                </p>

                                <p>
                                    그런데
                                </p>

                                <BlockMath math="|5-1|=4" />

                                <p>
                                    이므로 <InlineMath math="1" /> 과 <InlineMath math="5" /> 사이에 있는 점에서는
                                    거리의 합이 항상 4이다.
                                </p>

                                <p>
                                    거리의 합이 8이 되려면
                                    원래 거리 4보다 4만큼 더 커져야 한다.
                                </p>

                                <p>
                                    따라서 기준 구간 밖으로
                                    2만큼 더 나가야 한다.
                                </p>

                                <BlockMath math="1-2=-1" />

                                <BlockMath math="5+2=7" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x=-1,\ 7" />

                                <p className="font-semibold text-white">
                                    따라서 해는 <InlineMath math="x=-1,\ 7" />
                                    이다.
                                </p>
                                <DistanceSumDemo />

                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="|x+5|" />를 단순히 <InlineMath math="x+5" />로 없애면 안 됩니다.
                        절댓값은 거리이므로 항상 0 이상이고,
                        기준점이 어디인지 먼저 확인해야 합니다.
                    </p>

                    <BlockMath math="|x+5|=|x-(-5)|" />

                    <p className="text-center leading-8 text-gray-300">
                        즉, 기준점은 <InlineMath math="-5" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="|a-b|=a\text{와 } b\text{사이의 거리}" />

                    <BlockMath math="|x|=x\text{와 원점 사이의 거리}" />

                    <BlockMath math="|x-3|=x\text{와 3 사이의 거리}" />

                    <BlockMath math="|x+5|=x\text{와 -5 사이의 거리}" />

                    <BlockMath math="|x-a|=b\quad(b>0)\Longleftrightarrow x=a-b,\ a+b" />
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.14 절댓값 기호와 사칙연산
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    절댓값은 거리이므로 항상 0 이상입니다.
                    따라서 일반적인 괄호처럼 마음대로 없앨 수 없고,
                    사칙연산에서는 정해진 성질을 이용해야 합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        덧셈과 절댓값
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 수의 절댓값의 합은 합의 절댓값보다 크거나 같습니다.
                    </p>

                    <BlockMath math="|a|+|b|\ge |a+b|" />

                    <p className="mt-5 leading-8 text-gray-300">
                        또한 합의 절댓값은 두 절댓값의 차보다 크거나 같습니다.
                    </p>

                    <BlockMath math="|a+b|\ge \big||a|-|b|\big|" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-yellow-300">
                            절대부등식
                        </h4>

                        <BlockMath math="|a|+|b|\ge |a+b|\ge \big||a|-|b|\big|" />

                        <p className="mt-4 leading-8 text-gray-300">
                            이 식은 절댓값에서 자주 사용되는 기본 부등식입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        곱셈과 절댓값
                    </h3>

                    <p className="leading-8 text-gray-300">
                        곱의 절댓값은 절댓값의 곱과 같습니다.
                    </p>

                    <BlockMath math="|a||b|=|ab|" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="|-2||3|=2\cdot3=6" />
                        <BlockMath math="|(-2)\cdot3|=|-6|=6" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        나눗셈과 절댓값
                    </h3>

                    <p className="leading-8 text-gray-300">
                        나눗셈에서도 절댓값은 분자와 분모에 각각 적용할 수 있습니다.
                    </p>

                    <BlockMath math="\frac{|a|}{|b|}=\left|\frac ab\right|\quad(b\ne0)" />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <BlockMath math="\frac{|-6|}{|3|}=\frac63=2" />
                        <BlockMath math="\left|\frac{-6}{3}\right|=|-2|=2" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        제곱과 절댓값
                    </h3>

                    <p className="leading-8 text-gray-300">
                        제곱은 항상 0 이상이므로 절댓값을 씌워도 값이 변하지 않습니다.
                    </p>

                    <BlockMath math="|x|^2=x^2" />

                    <BlockMath math="|x^2|=x^2" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="|x|^2=|x^2|=x^2" />

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-red-300">
                            자주 하는 실수
                        </h4>

                        <BlockMath math="|x|^2=x^2" />

                        <p className="leading-8 text-gray-300">
                            이 식은 맞지만, <InlineMath math="|x|=x" />가 항상 맞다는 뜻은 아닙니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            예를 들어 <InlineMath math="x=-3" />이면 <InlineMath math="|x|=3" />입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2-5|x|+6=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 구간을 나누어서
                                </h4>

                                <p>
                                    절댓값 기호 안의 식은 <InlineMath math="x" />이므로,
                                    기준점은 <InlineMath math="0" />입니다.
                                </p>

                                <p>
                                    따라서 <InlineMath math="x\ge0" />과 <InlineMath math="x<0" />으로 나누어 풉니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ① <InlineMath math="x\ge0" />
                                </p>

                                <p>
                                    이때 <InlineMath math="|x|=x" />이므로
                                </p>

                                <BlockMath math="x^2-5x+6=0" />

                                <BlockMath math="(x-2)(x-3)=0" />

                                <BlockMath math="x=2,\quad 3" />

                                <p>
                                    두 값은 모두 <InlineMath math="x\ge0" />을 만족합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ② <InlineMath math="x<0" />
                                </p>

                                <p>
                                    이때 <InlineMath math="|x|=-x" />이므로
                                </p>

                                <BlockMath math="x^2+5x+6=0" />

                                <BlockMath math="(x+2)(x+3)=0" />

                                <BlockMath math="x=-2,\quad -3" />

                                <p>
                                    두 값은 모두 <InlineMath math="x<0" />을 만족합니다.
                                </p>

                                <p>
                                    따라서 해는
                                </p>

                                <BlockMath math="x=-3,\ -2,\ 2,\ 3" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 2 : <InlineMath math="x^2=|x|^2" /> 이용
                                </h4>

                                <p>
                                    절댓값의 제곱은 원래 수의 제곱과 같습니다.
                                </p>

                                <BlockMath math="x^2=|x|^2" />

                                <p>
                                    따라서 주어진 방정식은
                                </p>

                                <BlockMath math="|x|^2-5|x|+6=0" />

                                <p>
                                    으로 바꿀 수 있습니다.
                                </p>

                                <p>
                                    <InlineMath math="t=|x|" />라고 두면
                                </p>

                                <BlockMath math="t^2-5t+6=0" />

                                <BlockMath math="(t-2)(t-3)=0" />

                                <BlockMath math="t=2,\quad 3" />

                                <p>
                                    즉,
                                </p>

                                <BlockMath math="|x|=2\quad \text{또는}\quad |x|=3" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x=\pm2,\quad \pm3" />

                                <p>
                                    따라서 해는
                                </p>

                                <BlockMath math="x=-3,\ -2,\ 2,\ 3" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="-3,\ -2,\ 2,\ 3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2-5\sqrt{(x-1)^2}-2x+7=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <p>
                                먼저
                                <InlineMath math="\sqrt{(x-1)^2}=|x-1|" />
                                이므로 주어진 방정식은
                            </p>

                            <BlockMath math="x^2-5|x-1|-2x+7=0" />

                            <p>
                                이다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 구간을 나누어서
                                </h4>

                                <p>
                                    절댓값 기호 안의 식은 <InlineMath math="x-1" />이므로,
                                    기준점은 <InlineMath math="1" />입니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ① <InlineMath math="x\ge1" />
                                </p>

                                <p>
                                    이때 <InlineMath math="|x-1|=x-1" />이므로
                                </p>

                                <BlockMath math="x^2-5(x-1)-2x+7=0" />

                                <BlockMath math="x^2-7x+12=0" />

                                <BlockMath math="(x-3)(x-4)=0" />

                                <BlockMath math="x=3,\quad 4" />

                                <p>
                                    두 값은 모두 <InlineMath math="x\ge1" />을 만족합니다.
                                </p>

                                <p className="font-semibold text-white">
                                    ② <InlineMath math="x<1" />
                                </p>

                                <p>
                                    이때 <InlineMath math="|x-1|=-(x-1)=-x+1" />이므로
                                </p>

                                <BlockMath math="x^2-5(-x+1)-2x+7=0" />

                                <BlockMath math="x^2+3x+2=0" />

                                <BlockMath math="(x+1)(x+2)=0" />

                                <BlockMath math="x=-1,\quad -2" />

                                <p>
                                    두 값은 모두 <InlineMath math="x<1" />을 만족합니다.
                                </p>

                                <p>
                                    따라서 해는
                                </p>

                                <BlockMath math="x=-2,\ -1,\ 3,\ 4" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 2 : <InlineMath math="(x-1)^2=|x-1|^2" /> 이용
                                </h4>

                                <p>
                                    먼저 식을 다음처럼 묶어 봅니다.
                                </p>

                                <BlockMath math="x^2-2x+7" />

                                <p>
                                    여기서
                                </p>

                                <BlockMath math="x^2-2x+1=(x-1)^2=|x-1|^2" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x^2-2x+7=(x^2-2x+1)+6" />

                                <BlockMath math="=|x-1|^2+6" />

                                <p>
                                    따라서 주어진 방정식은
                                </p>

                                <BlockMath math="|x-1|^2-5|x-1|+6=0" />

                                <p>
                                    <InlineMath math="t=|x-1|" />라고 두면
                                </p>

                                <BlockMath math="t^2-5t+6=0" />

                                <BlockMath math="(t-2)(t-3)=0" />

                                <BlockMath math="t=2,\quad 3" />

                                <p>
                                    즉,
                                </p>

                                <BlockMath math="|x-1|=2\quad \text{또는}\quad |x-1|=3" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x=1\pm2,\quad 1\pm3" />

                                <BlockMath math="x=-1,\ 3,\ -2,\ 4" />

                                <p>
                                    따라서 해는
                                </p>

                                <BlockMath math="x=-2,\ -1,\ 3,\ 4" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="-2,\ -1,\ 3,\ 4" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2+2|x|-7=2\sqrt{(x+1)^2}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                                <h4 className="mb-3 font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p>
                                    이 문제는 <InlineMath math="|x|" />와
                                    <InlineMath math="\sqrt{(x+1)^2}=|x+1|" />가 함께 있으므로
                                    기준점이 두 개입니다.
                                </p>

                                <BlockMath math="|x|\quad \Rightarrow\quad x=0" />
                                <BlockMath math="|x+1|\quad \Rightarrow\quad x=-1" />

                                <p>
                                    따라서 하나로 묶어서 풀기 어렵고,
                                    기준점 <InlineMath math="-1" />과 <InlineMath math="0" />을 기준으로
                                    구간을 나누어 풀어야 합니다.
                                </p>
                            </div>

                            <p>
                                먼저
                            </p>

                            <BlockMath math="\sqrt{(x+1)^2}=|x+1|" />

                            <p>
                                이므로 주어진 방정식은
                            </p>

                            <BlockMath math="x^2+2|x|-7=2|x+1|" />

                            <p>
                                이다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    구간 1 : <InlineMath math="x<-1" />
                                </h4>

                                <p>
                                    이때 <InlineMath math="|x|=-x" />, <InlineMath math="|x+1|=-(x+1)" />입니다.
                                </p>

                                <BlockMath math="x^2+2(-x)-7=2\{-(x+1)\}" />

                                <BlockMath math="x^2-2x-7=-2x-2" />

                                <BlockMath math="x^2-5=0" />

                                <BlockMath math="x=\pm\sqrt5" />

                                <p>
                                    구간 <InlineMath math="x<-1" />을 만족하는 것은
                                </p>

                                <BlockMath math="x=-\sqrt5" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    구간 2 : <InlineMath math="-1\le x<0" />
                                </h4>

                                <p>
                                    이때 <InlineMath math="|x|=-x" />, <InlineMath math="|x+1|=x+1" />입니다.
                                </p>

                                <BlockMath math="x^2+2(-x)-7=2(x+1)" />

                                <BlockMath math="x^2-2x-7=2x+2" />

                                <BlockMath math="x^2-4x-9=0" />

                                <BlockMath math="x=2\pm\sqrt{13}" />

                                <p>
                                    구간 <InlineMath math="-1\le x<0" />을 만족하는 것은
                                </p>

                                <BlockMath math="x=2-\sqrt{13}" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    구간 3 : <InlineMath math="x\ge0" />
                                </h4>

                                <p>
                                    이때 <InlineMath math="|x|=x" />, <InlineMath math="|x+1|=x+1" />입니다.
                                </p>

                                <BlockMath math="x^2+2x-7=2(x+1)" />

                                <BlockMath math="x^2+2x-7=2x+2" />

                                <BlockMath math="x^2-9=0" />

                                <BlockMath math="x=\pm3" />

                                <p>
                                    구간 <InlineMath math="x\ge0" />을 만족하는 것은
                                </p>

                                <BlockMath math="x=3" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <p>
                                따라서 전체 해는
                            </p>

                            <BlockMath math="x=-\sqrt5,\quad 2-\sqrt{13},\quad 3" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="-\sqrt5,\ 2-\sqrt{13},\ 3" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="|a|+|b|\ge |a+b|\ge \big||a|-|b|\big|" />

                    <BlockMath math="|a||b|=|ab|" />

                    <BlockMath math="\frac{|a|}{|b|}=\left|\frac ab\right|\quad(b\ne0)" />

                    <BlockMath math="|x|^2=|x^2|=x^2" />
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.15 이차방정식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차방정식은 최고차항의 차수가 2인 다항방정식입니다.
                    중학교 과정에서는 인수분해, 완전제곱식, 근의 공식을 이용하여
                    이차방정식을 풀었습니다.
                    이제는 복소수까지 배운 상태이므로 이차방정식의 근을
                    더 넓은 범위에서 생각할 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식의 기본 꼴
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식은 일반적으로 다음과 같이 나타냅니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="mt-5 leading-8 text-gray-300">
                        여기서 <InlineMath math="a,b,c" />는 실수이고, <InlineMath math="a\ne0" />입니다.
                        만약 <InlineMath math="a=0" />이면 이차항이 없어져서 이차방정식이 아닙니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        실계수 이차방정식의 두 근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        실계수 이차방정식
                    </p>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        은 복소수 범위에서 항상 두 개의 근을 가집니다.
                        그 두 근은 다음 세 경우 중 하나입니다.
                    </p>

                    <div className="mt-5 space-y-4 rounded-xl bg-black/40 p-5 text-gray-300">
                        <p>
                            ① 서로 다른 두 실근
                        </p>
                        <p>
                            ② 중복된 두 실근, 즉 중근
                        </p>
                        <p>
                            ③ 서로 켤레인 두 복소근
                        </p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 고등수학에서는 이차방정식이
                        <strong> 항상 두 근을 가진다</strong>고 생각합니다.
                        단, 두 근이 서로 같을 때는 중복된 두 근으로 봅니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식의 해법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식의 해법은 크게 다음과 같습니다.
                    </p>

                    <div className="mt-5 space-y-3 rounded-xl bg-black/40 p-5 text-gray-300">
                        <p>① 인수분해를 이용한 풀이</p>
                        <p>② 완전제곱식을 이용한 풀이</p>
                        <p>③ 근의 공식</p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        특히 근의 공식은 완전제곱식을 이용한 풀이를
                        일반적인 이차방정식에 적용하여 얻은 공식입니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-yellow-300">
                            근의 공식
                        </h4>

                        <BlockMath math="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

                        <p className="mt-4 leading-8 text-gray-300">
                            이 공식은 모든 이차방정식 <InlineMath math="ax^2+bx+c=0\ (a\ne0)" />에 사용할 수 있습니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        근의 형태 예시
                    </h3>

                    <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-green-300">
                            ① 서로 다른 두 실근
                        </h4>

                        <BlockMath math="x^2-5x+6=0" />
                        <BlockMath math="(x-2)(x-3)=0" />
                        <BlockMath math="x=2,\quad 3" />
                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-green-300">
                            ② 중복된 두 실근, 중근
                        </h4>

                        <BlockMath math="x^2-4x+4=0" />
                        <BlockMath math="(x-2)^2=0" />
                        <BlockMath math="x=2,\quad 2" />

                        <p className="mt-4 leading-8 text-gray-300">
                            보통은 <InlineMath math="x=2" />라고 쓰지만,
                            이차방정식의 두 근으로 볼 때는 <InlineMath math="2,\ 2" />처럼 중복된 두 근으로 생각합니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                        <h4 className="mb-3 font-semibold text-green-300">
                            ③ 서로 켤레인 두 복소근
                        </h4>

                        <BlockMath math="x^2-2x+5=0" />

                        <p className="leading-8 text-gray-300">
                            근의 공식을 이용하면
                        </p>

                        <BlockMath math="x=\frac{2\pm\sqrt{(-2)^2-4\cdot1\cdot5}}{2}" />

                        <BlockMath math="=\frac{2\pm\sqrt{-16}}{2}" />

                        <BlockMath math="=\frac{2\pm4i}{2}" />

                        <BlockMath math="=1\pm2i" />

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 두 근은 <InlineMath math="1+2i" />, <InlineMath math="1-2i" />로 서로 켤레복소수입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        자주 하는 실수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        복소수 범위에서는 <InlineMath math="x^2+1=0" /> 같은 방정식도 해가 있습니다.
                    </p>

                    <BlockMath math="x^2+1=0" />
                    <BlockMath math="x^2=-1" />
                    <BlockMath math="x=\pm i" />

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 고등수학에서는 이차방정식에 대해
                        <strong> 해가 없다</strong>고 표현하기보다,
                        <strong> 복소근을 가진다</strong>고 생각하는 것이 더 정확합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="text-center leading-8 text-gray-300">
                        실계수 이차방정식은 복소수 범위에서 항상 두 근을 가진다.
                    </p>

                    <div className="mt-5 space-y-3 rounded-xl bg-black/40 p-5 text-gray-300">
                        <p>① 서로 다른 두 실근</p>
                        <p>② 중복된 두 실근, 중근</p>
                        <p>③ 서로 켤레인 두 복소근</p>
                    </div>

                    <BlockMath math="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        근의 공식은 완전제곱식 풀이를 일반화한 공식입니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.16 이차방정식의 해법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차방정식을 풀 때는 먼저 인수분해가 되는지 확인합니다.
                    인수분해가 되면 인수분해로 푸는 것이 가장 빠르고,
                    인수분해가 어렵다면 근의 공식을 이용합니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식 풀이 순서
                    </h3>

                    <div className="space-y-5 text-gray-300">
                        <div className="flex items-start gap-3">
                            <span className="shrink-0">①</span>
                            <p>인수분해가 되면 인수분해로 풉니다.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="shrink-0">②</span>
                            <p>
                                최고차항의 계수가 무리식이면 양변에 켤레무리수를 곱하고,
                                복소수이면 양변에 켤레복소수를 곱해 최고차항의 계수를
                                유리수로 만든 뒤 정리합니다.
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="shrink-0">③</span>
                            <p>인수분해가 되지 않으면 근의 공식을 이용합니다.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        근의 공식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        근의 공식은 이차방정식의 해를 계수를 이용하여 바로 구하는 방법입니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <BlockMath math="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        말로 읽으면 다음과 같습니다.
                    </p>

                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <BlockMath math="x=\frac{-(일차계수)\pm\sqrt{(일차계수)^2-4\cdot(이차계수)\cdot(상수항)}}{2\cdot(이차계수)}" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차항의 계수가 짝수일 때
                    </h3>

                    <p className="leading-8 text-gray-300">
                        일차항의 계수가 짝수이면 계산을 줄인 형태의 근의 공식을 사용할 수 있습니다.
                    </p>

                    <BlockMath math="ax^2+2b'x+c=0" />

                    <BlockMath math="x=\frac{-b'\pm\sqrt{(b')^2-ac}}{a}" />

                    <p className="mt-5 leading-8 text-gray-300">
                        말로 읽으면 다음과 같습니다.
                    </p>

                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <BlockMath math="x=\frac{-(일차계수의\ 반)\pm\sqrt{(일차계수의\ 반)^2-(이차계수)\cdot(상수항)}}{이차계수}" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 공식은 같은 공식입니다.
                        다만 식의 형태에 따라 계산이 편한 쪽을 선택하면 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 1
                    </h3>

                    <BlockMath math="x^2-3x+1=0" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-bold text-yellow-300">
                            방법 1 : 일반 근의 공식
                        </h4>

                        <BlockMath math="a=1,\quad b=-3,\quad c=1" />
                        <BlockMath math="x=\frac{-(-3)\pm\sqrt{(-3)^2-4\cdot1\cdot1}}{2\cdot1}" />
                        <BlockMath math="x=\frac{3\pm\sqrt5}{2}" />
                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <h4 className="mb-3 font-bold text-blue-300">
                            방법 2 : 일차계수의 반을 이용한 공식
                        </h4>

                        <p className="leading-8 text-gray-300">
                            일차계수 <InlineMath math="-3" />의 반은 <InlineMath math="-\frac32" />입니다.
                        </p>

                        <BlockMath math="a=1,\quad b'=-\frac32,\quad c=1" />

                        <BlockMath math="x=\frac{-\left(-\frac32\right)\pm\sqrt{\left(-\frac32\right)^2-1\cdot1}}{1}" />

                        <BlockMath math="x=\frac32\pm\sqrt{\frac94-1}" />

                        <BlockMath math="x=\frac32\pm\sqrt{\frac54}" />

                        <BlockMath math="x=\frac32\pm\frac{\sqrt5}{2}" />

                        <BlockMath math="x=\frac{3\pm\sqrt5}{2}" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 방법 모두 같은 답이 나오지만,
                        이 식은 일차계수가 홀수이므로 일반 근의 공식이 더 편합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 2
                    </h3>

                    <BlockMath math="x^2-4x+2=0" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-bold text-yellow-300">
                            방법 1 : 일반 근의 공식
                        </h4>

                        <BlockMath math="a=1,\quad b=-4,\quad c=2" />

                        <BlockMath math="x=\frac{-(-4)\pm\sqrt{(-4)^2-4\cdot1\cdot2}}{2\cdot1}" />

                        <BlockMath math="x=\frac{4\pm\sqrt8}{2}" />

                        <BlockMath math="x=\frac{4\pm2\sqrt2}{2}" />

                        <BlockMath math="x=2\pm\sqrt2" />
                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <h4 className="mb-3 font-bold text-blue-300">
                            방법 2 : 일차계수의 반을 이용한 공식
                        </h4>

                        <p className="leading-8 text-gray-300">
                            일차계수 <InlineMath math="-4" />의 반은 <InlineMath math="-2" />입니다.
                        </p>

                        <BlockMath math="a=1,\quad b'=-2,\quad c=2" />

                        <BlockMath math="x=\frac{-(-2)\pm\sqrt{(-2)^2-1\cdot2}}{1}" />

                        <BlockMath math="x=2\pm\sqrt2" />
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 방법 모두 같은 답이 나오지만,
                        이 식은 일차계수가 짝수이므로 일차계수의 반을 이용한 공식이 더 편합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식은 먼저 인수분해를 시도하고,
                        인수분해가 어렵다면 근의 공식을 사용합니다.
                    </p>

                    <BlockMath math="ax^2+bx+c=0" />
                    <BlockMath math="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

                    <BlockMath math="ax^2+2b'x+c=0" />
                    <BlockMath math="x=\frac{-b'\pm\sqrt{(b')^2-ac}}{a}" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        두 공식은 같은 공식이며, 식의 형태에 따라 계산이 편한 것을 선택합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="(x-3)^2=a" />의 한 근이 <InlineMath math="0" />일 때, <InlineMath math="a" />의 값과 다른 한 근을 옳게 짝지은 것을 고르시오.
                    </p>

                    <div className="grid gap-3 text-gray-300 md:grid-cols-2">
                        <p>① <InlineMath math="a=1,\ x=4" /></p>
                        <p>② <InlineMath math="a=9,\ x=-9" /></p>
                        <p>③ <InlineMath math="a=1,\ x=2" /></p>
                        <p>④ <InlineMath math="a=9,\ x=-6" /></p>
                        <p>⑤ <InlineMath math="a=9,\ x=6" /></p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                한 근이 <InlineMath math="0" />이므로 <InlineMath math="x=0" />을 대입한다.
                            </p>

                            <BlockMath math="(0-3)^2=a" />
                            <BlockMath math="a=9" />

                            <p>
                                따라서 방정식은
                            </p>

                            <BlockMath math="(x-3)^2=9" />

                            <p>
                                이다.
                            </p>

                            <BlockMath math="x-3=\pm3" />

                            <BlockMath math="x=0,\quad 6" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="a=9" />이고 다른 한 근은 <InlineMath math="x=6" />이므로 정답은 ⑤이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="3x^2-4\sqrt2x+2=0" />의 해를 구하면?
                    </p>

                    <div className="grid gap-3 text-gray-300 md:grid-cols-2">
                        <p>① <InlineMath math="\sqrt2,\ 3" /></p>
                        <p>② <InlineMath math="\frac{2\sqrt2}{3},\ \sqrt2" /></p>
                        <p>③ <InlineMath math="\sqrt2,\ \frac{\sqrt2}{3}" /></p>
                        <p>④ <InlineMath math="2\sqrt2,\ \sqrt2" /></p>
                        <p>⑤ <InlineMath math="2,\ \sqrt2" /></p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                인수분해를 먼저 생각한다.
                            </p>

                            <BlockMath math="3x^2-4\sqrt2x+2=0" />

                            <p>
                                곱해서 <InlineMath math="6" />이 되고,
                                합쳐서 <InlineMath math="-4\sqrt2" />가 되는 항을 찾으면
                            </p>

                            <BlockMath math="3x^2-3\sqrt2x-\sqrt2x+2=0" />

                            <BlockMath math="3x(x-\sqrt2)-\sqrt2(x-\sqrt2)=0" />

                            <BlockMath math="(x-\sqrt2)(3x-\sqrt2)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x=\sqrt2,\quad x=\frac{\sqrt2}{3}" />

                            <p className="font-semibold text-white">
                                정답은 ③이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="(\sqrt2-1)x^2+x+(2-\sqrt2)=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                최고차항의 계수가 무리식이므로 양변에 켤레무리수 <InlineMath math="\sqrt2+1" />을 곱한다.
                            </p>

                            <BlockMath math="(\sqrt2+1)\{(\sqrt2-1)x^2+x+(2-\sqrt2)\}=0" />

                            <BlockMath math="x^2+(\sqrt2+1)x+\sqrt2=0" />

                            <p>
                                이제 인수분해하면
                            </p>

                            <BlockMath math="x^2+(\sqrt2+1)x+\sqrt2=(x+1)(x+\sqrt2)" />

                            <BlockMath math="(x+1)(x+\sqrt2)=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x=-1,\quad x=-\sqrt2" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=-1,\ -\sqrt2" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="(\sqrt2-1)x^2+(\sqrt2+1)x+2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                최고차항의 계수가 무리식이므로 양변에 켤레무리수 <InlineMath math="\sqrt2+1" />을 곱한다.
                            </p>

                            <BlockMath math="(\sqrt2+1)\{(\sqrt2-1)x^2+(\sqrt2+1)x+2\}=0" />

                            <BlockMath math="x^2+(3+2\sqrt2)x+(2+2\sqrt2)=0" />

                            <p>
                                인수분해하면
                            </p>

                            <BlockMath math="x^2+(3+2\sqrt2)x+(2+2\sqrt2)" />

                            <BlockMath math="=(x+1)(x+2+2\sqrt2)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(x+1)(x+2+2\sqrt2)=0" />

                            <BlockMath math="x=-1,\quad x=-2-2\sqrt2" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=-1,\ -2-2\sqrt2" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="(1+i)x^2-2(1-i)x-(1+i)=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                최고차항의 계수가 복소수이므로 양변에 켤레복소수 <InlineMath math="1-i" />를 곱한다.
                            </p>

                            <BlockMath math="(1-i)\{(1+i)x^2-2(1-i)x-(1+i)\}=0" />

                            <BlockMath math="2x^2+4ix-2=0" />

                            <BlockMath math="x^2+2ix-1=0" />

                            <p>
                                인수분해하면
                            </p>

                            <BlockMath math="x^2+2ix-1=(x+i)^2" />

                            <BlockMath math="(x+i)^2=0" />

                            <BlockMath math="x=-i" />

                            <p>
                                중근이므로 두 근은
                            </p>

                            <BlockMath math="x=-i,\quad -i" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=-i" /> (중근)이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="ix^2-(3i-2)x-3-i=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 풀어라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                최고차항의 계수가 복소수이므로 양변에 <InlineMath math="-i" />를 곱한다.
                            </p>

                            <BlockMath math="-i\{ix^2-(3i-2)x-3-i\}=0" />

                            <BlockMath math="x^2+(3+2i)x-(1-3i)=0" />

                            <p>
                                인수분해를 시도해 보면
                            </p>

                            <BlockMath math="x^2+(3+2i)x-(1-3i)" />

                            <BlockMath math="=(x-1+i)(x+4+i)" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="(x-1+i)(x+4+i)=0" />

                            <BlockMath math="x=1-i,\quad x=-4-i" />

                            <p className="font-semibold text-white">
                                따라서 해는 <InlineMath math="x=1-i,\ -4-i" />
                                이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        직사각형의 두 변 <InlineMath math="a,b" />에 대하여 <InlineMath math="0<b<a" />일 때,
                    </p>

                    <BlockMath math="\frac ba=\frac a{a+b}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족하는 <InlineMath math="a:b" />의 값을 황금비라 한다. <InlineMath math="a:b=x:1" />이라 할 때, <InlineMath math="x" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="a:b=x:1" />이므로
                            </p>

                            <BlockMath math="\frac ab=x" />

                            <p>
                                따라서 <InlineMath math="a=xb" />라고 둘 수 있다.
                            </p>

                            <p>
                                주어진 식
                            </p>

                            <BlockMath math="\frac ba=\frac a{a+b}" />

                            <p>
                                에 <InlineMath math="a=xb" />를 대입하면
                            </p>

                            <BlockMath math="\frac b{xb}=\frac{xb}{xb+b}" />

                            <BlockMath math="\frac1x=\frac x{x+1}" />

                            <p>
                                양변에 <InlineMath math="x(x+1)" />을 곱하면
                            </p>

                            <BlockMath math="x+1=x^2" />

                            <BlockMath math="x^2-x-1=0" />

                            <p>
                                근의 공식을 이용하면
                            </p>

                            <BlockMath math="x=\frac{1\pm\sqrt{1+4}}2" />

                            <BlockMath math="x=\frac{1\pm\sqrt5}2" />

                            <p>
                                그런데 <InlineMath math="a>b>0" />이므로 <InlineMath math="x=\frac ab>1" />이다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x=\frac{1+\sqrt5}2" />

                            <p className="font-semibold text-white">
                                따라서 황금비는 <InlineMath math="a:b=\frac{1+\sqrt5}2:1" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 식을 복소수 범위에서 인수분해하여라.
                    </p>

                    <div className="grid gap-3 text-gray-300 md:grid-cols-2">
                        <p>1. <InlineMath math="x^2+3x-3" /></p>
                        <p>2. <InlineMath math="x^2-2x-4" /></p>
                        <p>3. <InlineMath math="x^2-3x+6" /></p>
                        <p>4. <InlineMath math="x^2-2x+3" /></p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <p>
                                이차식의 두 근을 <InlineMath math="\alpha,\beta" />라고 하면
                            </p>

                            <BlockMath math="x^2+bx+c=(x-\alpha)(x-\beta)" />

                            <p>
                                이므로 먼저 근의 공식으로 두 근을 구한 뒤 인수분해한다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    1. <InlineMath math="x^2+3x-3" />
                                </h4>

                                <BlockMath math="x=\frac{-3\pm\sqrt{3^2-4(1)(-3)}}{2}" />

                                <BlockMath math="=\frac{-3\pm\sqrt{21}}2" />

                                <p>따라서</p>

                                <BlockMath math="x^2+3x-3" />

                                <BlockMath math="=\left(x-\frac{-3+\sqrt{21}}2\right)\left(x-\frac{-3-\sqrt{21}}2\right)" />

                                <BlockMath math="=\left(x+\frac{3-\sqrt{21}}2\right)\left(x+\frac{3+\sqrt{21}}2\right)" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    2. <InlineMath math="x^2-2x-4" />
                                </h4>

                                <p>
                                    일차계수의 반을 이용하면
                                </p>

                                <BlockMath math="x=\frac{1\pm\sqrt{1^2-1(-4)}}1" />

                                <BlockMath math="=1\pm\sqrt5" />

                                <p>따라서</p>

                                <BlockMath math="x^2-2x-4=(x-1-\sqrt5)(x-1+\sqrt5)" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    3. <InlineMath math="x^2-3x+6" />
                                </h4>

                                <BlockMath math="x=\frac{3\pm\sqrt{(-3)^2-4(1)(6)}}2" />

                                <BlockMath math="=\frac{3\pm\sqrt{-15}}2" />

                                <BlockMath math="=\frac{3\pm\sqrt{15}i}2" />

                                <p>따라서</p>

                                <BlockMath math="x^2-3x+6" />

                                <BlockMath math="=\left(x-\frac{3+\sqrt{15}i}{2}\right)\left(x-\frac{3-\sqrt{15}i}{2}\right)" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    4. <InlineMath math="x^2-2x+3" />
                                </h4>

                                <p>
                                    일차계수의 반을 이용하면
                                </p>

                                <BlockMath math="x=\frac{1\pm\sqrt{1^2-1(3)}}1" />

                                <BlockMath math="=\frac{1\pm\sqrt{-2}}1" />

                                <BlockMath math="=1\pm\sqrt2 i" />

                                <p>따라서</p>

                                <BlockMath math="x^2-2x+3=(x-1-\sqrt2 i)(x-1+\sqrt2 i)" />
                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <p className="leading-8">
                                    실근이든 복소근이든 두 근을 구할 수만 있다면 <InlineMath math="(x-\alpha)(x-\beta)" />
                                    의 형태로 인수분해할 수 있다.
                                </p>

                                <p className="mt-3 leading-8">
                                    특히 판별식이 음수인 경우에도 복소수 범위에서는
                                    켤레복소수인 두 근을 이용하여 인수분해할 수 있다.
                                </p>
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        어떤 물건의 가격을 <InlineMath math="x\%" /> 인상한 후,
                        다시 <InlineMath math="x\%" /> 인하하였더니
                        처음 가격보다 <InlineMath math="16\%" /> 낮아졌다.
                        이때 <InlineMath math="x" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                원래 가격을 <InlineMath math="100" />이라고 하자.
                            </p>

                            <p>
                                <InlineMath math="x\%" /> 인상하면
                            </p>

                            <BlockMath math="100\left(1+\frac{x}{100}\right)" />

                            <p>
                                이 되고, 다시 <InlineMath math="x\%" /> 인하하면
                            </p>

                            <BlockMath math="100\left(1+\frac{x}{100}\right)\left(1-\frac{x}{100}\right)" />

                            <p>
                                이 된다.
                            </p>

                            <p>
                                처음 가격보다 <InlineMath math="16\%" /> 낮아졌으므로
                                최종 가격은 <InlineMath math="84" />이다.
                            </p>

                            <BlockMath math="100\left(1+\frac{x}{100}\right)\left(1-\frac{x}{100}\right)=84" />

                            <BlockMath math="\left(1+\frac{x}{100}\right)\left(1-\frac{x}{100}\right)=0.84" />

                            <BlockMath math="1-\frac{x^2}{10000}=0.84" />

                            <BlockMath math="x^2=1600" />

                            <BlockMath math="x=\pm40" />

                            <p>
                                <InlineMath math="x" />는 인상률이므로 양수이다.
                            </p>

                            <BlockMath math="x=40" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="x=40" />이다.
                            </p>
                        </div>
                        <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <h3 className="mb-4 text-xl font-bold text-yellow-300">
                                인상과 인하 정리
                            </h3>

                            <p className="leading-8 text-gray-300">
                                퍼센트 변화는 더하고 빼는 것이 아니라
                                원래 값에 일정한 비율을 곱하는 것이다.
                            </p>

                            <div className="mt-5 space-y-4 text-gray-300">
                                <div>
                                    <p className="font-semibold">
                                        10% 인상
                                    </p>

                                    <BlockMath math="100 \rightarrow 110" />

                                    <BlockMath math="\times1.1" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        p% 인상
                                    </p>

                                    <BlockMath math="\times\left(1+\frac{p}{100}\right)" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        10% 인하
                                    </p>

                                    <BlockMath math="100 \rightarrow 90" />

                                    <BlockMath math="\times0.9" />
                                </div>

                                <div>
                                    <p className="font-semibold">
                                        q% 인하
                                    </p>

                                    <BlockMath math="\times\left(1-\frac{q}{100}\right)" />
                                </div>
                            </div>

                            <div className="mt-5 rounded-xl bg-black/30 p-4">
                                <p className="leading-8 text-gray-300">
                                    따라서 연속적인 인상과 인하는
                                    각각의 배율을 곱하여 계산한다.
                                </p>

                                <BlockMath math="\left(1+\frac{p}{100}\right)\left(1-\frac{q}{100}\right)" />
                            </div>
                        </div>
                    </details>

                </div>


            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.17 근과 계수와의 관계
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차방정식의 두 근을 직접 구하지 않아도,
                    두 근의 합과 곱은 계수만으로 바로 구할 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        근과 계수와의 관계
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라고 하자.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        그러면 이 이차방정식은 다음과 같이 나타낼 수 있습니다.
                    </p>

                    <BlockMath math="a(x-\alpha)(x-\beta)=0" />

                    <p className="leading-8 text-gray-300">
                        전개하면
                    </p>

                    <BlockMath math="a\{x^2-(\alpha+\beta)x+\alpha\beta\}=0" />

                    <BlockMath math="ax^2-a(\alpha+\beta)x+a\alpha\beta=0" />

                    <p className="leading-8 text-gray-300">
                        이것이 <InlineMath math="ax^2+bx+c=0" />와 같으므로 계수를 비교하면
                    </p>

                    <BlockMath math="-a(\alpha+\beta)=b" />
                    <BlockMath math="a\alpha\beta=c" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\alpha+\beta=-\frac ba" />
                    <BlockMath math="\alpha\beta=\frac ca" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="text-center leading-8 text-gray-300">
                        의 두 근이 <InlineMath math="\alpha,\ \beta" />일 때
                    </p>

                    <BlockMath math="\alpha+\beta=-\frac ba \qquad \text{두 근의 합}=-\frac{\text{일차계수}}{\text{이차계수}}" />

                    <BlockMath math="\alpha\beta=\frac ca \qquad \text{두 근의 곱}=\frac{\text{상수항}}{\text{이차계수}}" />  </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        예시
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2-4x+1=0" />

                    <p className="leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라고 하자.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        근과 계수와의 관계에 의하여
                    </p>

                    <BlockMath math="\alpha+\beta=4" />
                    <BlockMath math="\alpha\beta=1" />

                    <p className="mt-4 leading-8 text-gray-300">
                        또한 <InlineMath math="\alpha,\ \beta" />는 방정식의 근이므로
                        대입하면 항상 성립합니다.
                    </p>

                    <BlockMath math="\alpha^2-4\alpha+1=0,\quad \beta^2-4\beta+1=0" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\alpha^2=4\alpha-1,\quad \beta^2=4\beta-1" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식 <InlineMath math="x^2-4x+1=0" />의 두 근을 <InlineMath math="\alpha,\ \beta" />라고 할 때, 다음 값을 구하여라.
                    </p>

                    <BlockMath math="(\alpha^3-3\alpha^2+4\alpha+3)(\beta^3-3\beta^2+4\beta+3)" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 <InlineMath math="\alpha" />는 방정식의 근이므로
                            </p>

                            <BlockMath math="\alpha^2-4\alpha+1=0" />
                            <BlockMath math="\alpha^2=4\alpha-1" />

                            <p>
                                이를 이용하여 차수를 낮춘다.
                            </p>

                            <BlockMath math="\alpha^3=\alpha\alpha^2=\alpha(4\alpha-1)" />
                            <BlockMath math="=4\alpha^2-\alpha" />
                            <BlockMath math="=4(4\alpha-1)-\alpha" />
                            <BlockMath math="=15\alpha-4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha^3-3\alpha^2+4\alpha+3" />
                            <BlockMath math="=(15\alpha-4)-3(4\alpha-1)+4\alpha+3" />
                            <BlockMath math="=7\alpha+2" />

                            <p>
                                같은 방법으로
                            </p>

                            <BlockMath math="\beta^3-3\beta^2+4\beta+3=7\beta+2" />

                            <p>
                                따라서 구하는 값은
                            </p>

                            <BlockMath math="(7\alpha+2)(7\beta+2)" />

                            <BlockMath math="=49\alpha\beta+14(\alpha+\beta)+4" />

                            <p>
                                여기서 <InlineMath math="\alpha+\beta=4" />, <InlineMath math="\alpha\beta=1" />이므로
                            </p>

                            <BlockMath math="49\cdot1+14\cdot4+4=109" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="109" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식 <InlineMath math="x^2-4x+1=0" />의 두 근을 <InlineMath math="\alpha,\ \beta" />라고 할 때, <InlineMath math="\alpha^3+\beta^3" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4,\quad \alpha\beta=1" />

                            <p>
                                곱셈공식
                            </p>

                            <BlockMath math="(\alpha+\beta)^3=\alpha^3+\beta^3+3\alpha\beta(\alpha+\beta)" />

                            <p>
                                을 이용한다.
                            </p>

                            <BlockMath math="4^3=\alpha^3+\beta^3+3\cdot1\cdot4" />

                            <BlockMath math="64=\alpha^3+\beta^3+12" />

                            <BlockMath math="\alpha^3+\beta^3=52" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="52" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식 <InlineMath math="x^2-4x+1=0" />의 두 근을 <InlineMath math="\alpha,\ \beta" />라고 할 때, <InlineMath math="\alpha>\beta" />라 하자. <InlineMath math="\alpha^2-\beta^2" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                이 문제는 곱셈공식 문제가 아니라
                                <strong> 인수분해 문제</strong>이다.
                            </p>

                            <BlockMath math="\alpha^2-\beta^2=(\alpha+\beta)(\alpha-\beta)" />

                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4,\quad \alpha\beta=1" />

                            <p>
                                이제 <InlineMath math="\alpha-\beta" />를 구한다.
                            </p>

                            <BlockMath math="(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta" />

                            <BlockMath math="=4^2-4\cdot1" />

                            <BlockMath math="=12" />

                            <p>
                                <InlineMath math="\alpha>\beta" />이므로
                            </p>

                            <BlockMath math="\alpha-\beta=2\sqrt3" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha^2-\beta^2=(\alpha+\beta)(\alpha-\beta)" />

                            <BlockMath math="=4\cdot2\sqrt3" />

                            <BlockMath math="=8\sqrt3" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="8\sqrt3" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="x^2-2mx+8-m^2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근이 <InlineMath math="\alpha,\ \beta" />이고,
                    </p>

                    <BlockMath math="\alpha^2+\alpha\beta+\beta^2=32" />

                    <p className="mb-4 leading-8 text-gray-300">
                        일 때, <InlineMath math="m" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=2m" />

                            <BlockMath math="\alpha\beta=8-m^2" />

                            <p>
                                한편
                            </p>

                            <BlockMath math="\alpha^2+\alpha\beta+\beta^2" />

                            <p>
                                는
                            </p>

                            <BlockMath math="(\alpha+\beta)^2=\alpha^2+2\alpha\beta+\beta^2" />

                            <p>
                                를 이용하면
                            </p>

                            <BlockMath math="\alpha^2+\alpha\beta+\beta^2=(\alpha+\beta)^2-\alpha\beta" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="(2m)^2-(8-m^2)=32" />

                            <BlockMath math="4m^2-8+m^2=32" />

                            <BlockMath math="5m^2=40" />

                            <BlockMath math="m^2=8" />

                            <BlockMath math="m=\pm2\sqrt2" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="m=\pm2\sqrt2" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="x^2-ax-a+2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 서로 다른 두 실근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                    </p>

                    <BlockMath math="\alpha^2+\beta^2=11" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족하는 상수 <InlineMath math="a" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=a" />

                            <BlockMath math="\alpha\beta=2-a" />

                            <p>
                                한편
                            </p>

                            <BlockMath math="(\alpha+\beta)^2=\alpha^2+2\alpha\beta+\beta^2" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta" />

                            <p>
                                주어진 조건을 대입하면
                            </p>

                            <BlockMath math="11=a^2-2(2-a)" />

                            <BlockMath math="11=a^2+2a-4" />

                            <BlockMath math="a^2+2a-15=0" />

                            <BlockMath math="(a+5)(a-3)=0" />

                            <BlockMath math="a=-5,\quad 3" />

                            <p>
                                그런데 문제에서 서로 다른 두 실근이라고 하였으므로
                                판별식이 양수이어야 한다.
                            </p>

                            <BlockMath math="D=(-a)^2-4(1)(2-a)" />

                            <BlockMath math="=a^2+4a-8" />

                            <p>
                                <InlineMath math="a=-5" />를 대입하면
                            </p>

                            <BlockMath math="D=25-20-8=-3<0" />

                            <p>
                                따라서 <InlineMath math="a=-5" />는 불가능하다.
                            </p>

                            <p>
                                <InlineMath math="a=3" />를 대입하면
                            </p>

                            <BlockMath math="D=9+12-8=13>0" />

                            <p>
                                따라서 조건을 만족한다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="a=3" />이다.
                            </p>
                        </div>
                    </details>
                </div>


                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="x^2-4x+k=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 실근 <InlineMath math="\alpha,\ \beta" />가
                    </p>

                    <BlockMath math="|\alpha|+|\beta|=6" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족할 때, 상수 <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4" />

                            <BlockMath math="\alpha\beta=k" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                                <h4 className="mb-3 font-bold text-yellow-300">
                                    풀이 1 : 부호를 나누어서
                                </h4>

                                <p>
                                    두 근의 합이 <InlineMath math="4" />이므로 두 근이 모두 음수일 수는 없다.
                                </p>

                                <p className="font-semibold text-white">
                                    ① 두 근이 모두 양수일 때
                                </p>

                                <BlockMath math="|\alpha|+|\beta|=\alpha+\beta=4" />

                                <p>
                                    그런데 조건은 <InlineMath math="|\alpha|+|\beta|=6" />이므로 모순이다.
                                </p>

                                <p className="font-semibold text-white">
                                    ② 한 근은 양수, 다른 한 근은 음수일 때
                                </p>

                                <p>
                                    <InlineMath math="\alpha>\beta" />라고 하면
                                </p>

                                <BlockMath math="|\alpha|+|\beta|=\alpha-\beta=6" />

                                <p>
                                    또한
                                </p>

                                <BlockMath math="\alpha+\beta=4" />

                                <p>
                                    이므로 두 식을 더하면
                                </p>

                                <BlockMath math="2\alpha=10" />

                                <BlockMath math="\alpha=5,\quad \beta=-1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="k=\alpha\beta=5(-1)=-5" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 2 : 절댓값 방정식으로
                                </h4>

                                <p>
                                    두 근의 합이 <InlineMath math="4" />이므로
                                </p>

                                <BlockMath math="\alpha+\beta=4" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\beta=4-\alpha" />

                                <p>
                                    조건 <InlineMath math="|\alpha|+|\beta|=6" />에 대입하면
                                </p>

                                <BlockMath math="|\alpha|+|4-\alpha|=6" />

                                <p>
                                    여기서 <InlineMath math="|4-\alpha|=|\alpha-4|" />이므로
                                </p>

                                <BlockMath math="|\alpha|+|\alpha-4|=6" />

                                <p>
                                    이는 수직선에서 <InlineMath math="\alpha" />와 <InlineMath math="0" /> 사이의 거리, <InlineMath math="\alpha" />와 <InlineMath math="4" /> 사이의 거리의 합이 <InlineMath math="6" />이라는 뜻이다.
                                </p>

                                <p>
                                    그런데 <InlineMath math="0" />과 <InlineMath math="4" /> 사이의 거리는 <InlineMath math="4" />이므로, 거리의 합이 <InlineMath math="6" />이 되려면 양쪽 바깥으로 <InlineMath math="1" />만큼 나가야 한다.
                                </p>

                                <BlockMath math="\alpha=-1\quad \text{또는}\quad \alpha=5" />

                                <p>
                                    따라서 두 근은
                                </p>

                                <BlockMath math="-1,\quad 5" />

                                <p>
                                    이고
                                </p>

                                <BlockMath math="k=\alpha\beta=(-1)\cdot5=-5" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="k=-5" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2-4x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                    </p>

                    <BlockMath math="\sqrt{\alpha^2+1}+\sqrt{\beta^2+1}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\alpha,\ \beta" />는 방정식의 근이므로
                            </p>

                            <BlockMath math="\alpha^2-4\alpha+1=0" />

                            <BlockMath math="\beta^2-4\beta+1=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha^2+1=4\alpha" />

                            <BlockMath math="\beta^2+1=4\beta" />

                            <p>
                                이다.
                            </p>

                            <p>
                                한편 근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4" />

                            <BlockMath math="\alpha\beta=1" />

                            <p>
                                이므로 두 근은 모두 양수이다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\sqrt{\alpha^2+1}+\sqrt{\beta^2+1}" />

                            <BlockMath math="=\sqrt{4\alpha}+\sqrt{4\beta}" />

                            <BlockMath math="=2\sqrt{\alpha}+2\sqrt{\beta}" />

                            <BlockMath math="=2(\sqrt{\alpha}+\sqrt{\beta})" />

                            <p>
                                이제
                            </p>

                            <BlockMath math="(\sqrt{\alpha}+\sqrt{\beta})^2" />

                            <BlockMath math="=\alpha+\beta+2\sqrt{\alpha\beta}" />

                            <BlockMath math="=4+2\sqrt1" />

                            <BlockMath math="=6" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\sqrt{\alpha}+\sqrt{\beta}=\sqrt6" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="2(\sqrt{\alpha}+\sqrt{\beta})" />

                            <BlockMath math="=2\sqrt6" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2\sqrt6" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+9x+4=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                    </p>

                    <BlockMath math="\sqrt{\alpha^2+4}+\sqrt{\beta^2+4}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="\alpha,\ \beta" />는 방정식의 근이므로
                            </p>

                            <BlockMath math="\alpha^2+9\alpha+4=0" />

                            <BlockMath math="\beta^2+9\beta+4=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha^2+4=-9\alpha" />

                            <BlockMath math="\beta^2+4=-9\beta" />

                            <p>
                                이다.
                            </p>

                            <p>
                                한편 근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=-9" />

                            <BlockMath math="\alpha\beta=4" />

                            <p>
                                두 근의 곱이 양수이고 두 근의 합이 음수이므로
                                두 근은 모두 음수이다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\sqrt{\alpha^2+4}+\sqrt{\beta^2+4}" />

                            <BlockMath math="=\sqrt{-9\alpha}+\sqrt{-9\beta}" />

                            <BlockMath math="=3\sqrt{-\alpha}+3\sqrt{-\beta}" />

                            <BlockMath math="=3(\sqrt{-\alpha}+\sqrt{-\beta})" />

                            <p>
                                이제
                            </p>

                            <BlockMath math="(\sqrt{-\alpha}+\sqrt{-\beta})^2" />

                            <BlockMath math="=-\alpha-\beta+2\sqrt{\alpha\beta}" />

                            <BlockMath math="=9+2\sqrt4" />

                            <BlockMath math="=13" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="\sqrt{-\alpha}+\sqrt{-\beta}=\sqrt{13}" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="3(\sqrt{-\alpha}+\sqrt{-\beta})" />

                            <BlockMath math="=3\sqrt{13}" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3\sqrt{13}" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+4x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                    </p>

                    <BlockMath math="(\sqrt{\alpha}+\sqrt{\beta})^2" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                먼저 식을 전개하면
                            </p>

                            <BlockMath math="(\sqrt{\alpha}+\sqrt{\beta})^2" />

                            <BlockMath math="=\alpha+\beta+2\sqrt{\alpha}\sqrt{\beta}" />

                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=-4" />

                            <BlockMath math="\alpha\beta=1" />

                            <p>
                                이다.
                            </p>

                            <p>
                                또한
                            </p>

                            <BlockMath math="\alpha+\beta<0,\qquad \alpha\beta>0" />

                            <p>
                                이므로 <InlineMath math="\alpha,\ \beta" />는 모두 음수이다.
                            </p>

                            <p>
                                따라서 복소수 단원에서 배운 성질
                            </p>

                            <BlockMath math="\sqrt{\alpha}\sqrt{\beta}=-\sqrt{\alpha\beta}" />

                            <p>
                                를 사용할 수 있다.
                            </p>

                            <BlockMath math="\sqrt{\alpha}\sqrt{\beta}" />

                            <BlockMath math="=-\sqrt{1}" />

                            <BlockMath math="=-1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha+\beta+2\sqrt{\alpha}\sqrt{\beta}" />

                            <BlockMath math="=-4+2(-1)" />

                            <BlockMath math="=-6" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 관한 이차방정식
                    </p>

                    <BlockMath math="x^2-kx+k+7=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근의 차가 <InlineMath math="2" />일 때, <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                두 근을 <InlineMath math="\alpha,\ \beta" />
                                (<InlineMath math="\alpha>\beta" />)라 하자.
                            </p>

                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=k" />

                            <BlockMath math="\alpha\beta=k+7" />

                            <p>
                                또한 두 근의 차가 2이므로
                            </p>

                            <BlockMath math="\alpha-\beta=2" />

                            <p>
                                양변을 제곱하면
                            </p>

                            <BlockMath math="(\alpha-\beta)^2=4" />

                            <p>
                                한편
                            </p>

                            <BlockMath math="(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="4=k^2-4(k+7)" />

                            <BlockMath math="k^2-4k-32=0" />

                            <BlockMath math="(k-8)(k+4)=0" />

                            <BlockMath math="k=8,\quad -4" />

                            <p>
                                두 경우 모두 실제로 <InlineMath math="\alpha-\beta=2" />
                                를 만족한다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="k=8,\quad -4" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 관한 이차방정식
                    </p>

                    <BlockMath math="x^2+(h-1)x-h=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 한 근이 다른 근의 3배일 때,
                        상수 <InlineMath math="h" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                두 근을
                                <InlineMath math="\alpha,\ \beta" />
                                라 하자.
                            </p>

                            <p>
                                한 근이 다른 근의 3배이므로
                            </p>

                            <BlockMath math="\alpha=3\beta" />

                            <p>
                                라고 둘 수 있다.
                            </p>

                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=1-h" />

                            <BlockMath math="\alpha\beta=-h" />

                            <p>
                                <InlineMath math="\alpha=3\beta" />를 대입하면
                            </p>

                            <BlockMath math="4\beta=1-h" />

                            <BlockMath math="3\beta^2=-h" />

                            <p>
                                첫 번째 식에서
                            </p>

                            <BlockMath math="\beta=\frac{1-h}{4}" />

                            <p>
                                이므로 두 번째 식에 대입하면
                            </p>

                            <BlockMath math="3\left(\frac{1-h}{4}\right)^2=-h" />

                            <BlockMath math="3(1-h)^2=-16h" />

                            <BlockMath math="3h^2+10h+3=0" />

                            <BlockMath math="(3h+1)(h+3)=0" />

                            <BlockMath math="h=-\frac13,\quad -3" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="h=-\frac13,\quad -3" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="text-center leading-8 text-gray-300">
                        의 두 근이 <InlineMath math="\alpha,\ \beta" />일 때
                    </p>

                    <BlockMath math="\alpha+\beta=-\frac ba \qquad \text{두 근의 합}=-\frac{\text{일차계수}}{\text{이차계수}}" />
                    <BlockMath math="\alpha\beta=\frac ca \qquad \text{두 근의 곱}=\frac{\text{상수항}}{\text{이차계수}}" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        두 근을 직접 구하지 않아도 합과 곱을 이용하여 여러 식의 값을 계산할 수 있다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.18 이차방정식의 작성과 켤레근
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    두 근을 알면 이차방정식을 만들 수 있습니다.
                    또한 계수의 범위에 따라 한 근이 주어졌을 때 다른 근이 자동으로 정해지는 경우가 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식의 작성
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 근이 <InlineMath math="\alpha,\ \beta" />인 이차방정식은
                    </p>

                    <BlockMath math="(x-\alpha)(x-\beta)=0" />

                    <p className="leading-8 text-gray-300">
                        에서 만들 수 있습니다.
                    </p>

                    <BlockMath math="(x-\alpha)(x-\beta)=x^2-(\alpha+\beta)x+\alpha\beta" />

                    <p className="leading-8 text-gray-300">
                        따라서 두 근이 <InlineMath math="\alpha,\ \beta" />이고
                        이차항의 계수가 <InlineMath math="1" />인 이차방정식은
                    </p>

                    <BlockMath math="x^2-(\alpha+\beta)x+\alpha\beta=0" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-bold text-yellow-300">
                            정리
                        </h4>

                        <BlockMath math="x^2-(\text{두 근의 합})x+(\text{두 근의 곱})=0" />

                        <p className="mt-4 leading-8 text-gray-300">
                            이 식은 나중에 고차방정식 문제를 풀 때도 자주 사용되므로
                            익숙하게 만들어 두는 것이 좋습니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차항의 계수가 주어진 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 근이 <InlineMath math="\alpha,\ \beta" />이고
                        이차항의 계수가 <InlineMath math="a" />인 이차방정식은
                    </p>

                    <BlockMath math="a(x-\alpha)(x-\beta)=0" />

                    <p className="leading-8 text-gray-300">
                        으로 작성합니다.
                    </p>

                    <BlockMath math="a\{x^2-(\alpha+\beta)x+\alpha\beta\}=0" />

                    <BlockMath math="ax^2-a(\alpha+\beta)x+a\alpha\beta=0" />
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        켤레무리근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        계수가 모두 유리수인 이차방정식의 한 근이 <InlineMath math="p+q\sqrt m" />이면,
                        다른 한 근은 <InlineMath math="p-q\sqrt m" />입니다.
                    </p>

                    <BlockMath math="p+q\sqrt m \quad\Longrightarrow\quad p-q\sqrt m" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이때 <InlineMath math="p,\ q" />는 유리수, <InlineMath math="q\ne0" />, <InlineMath math="\sqrt m" />은 무리수입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            예를 들어 유리계수 이차방정식의 한 근이 <InlineMath math="3+\sqrt2" />이면 다른 한 근은 <InlineMath math="3-\sqrt2" />입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        켤레복소근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        계수가 모두 실수인 이차방정식의 한 근이 <InlineMath math="p+qi" />이면,
                        다른 한 근은 <InlineMath math="p-qi" />입니다.
                    </p>

                    <BlockMath math="p+qi \quad\Longrightarrow\quad p-qi" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이때 <InlineMath math="p,\ q" />는 실수이고, <InlineMath math="q\ne0" />입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            예를 들어 실계수 이차방정식의 한 근이 <InlineMath math="2+i" />이면 다른 한 근은 <InlineMath math="2-i" />입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2-3x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                        다음 두 수를 근으로 가지는
                        <InlineMath math="x" />에 대한 이차방정식을 구하여라.
                    </p>

                    <div className="space-y-3 rounded-xl border border-white/15 p-5">
                        <p>① <InlineMath math="\alpha+\beta,\ \alpha\beta" /></p>
                        <p>② <InlineMath math="\frac1\alpha,\ \frac1\beta" /></p>
                        <p>③ <InlineMath math="3\alpha-\beta,\ 3\beta-\alpha" /></p>
                        <p>④ <InlineMath math="\alpha^3,\ \beta^3" /></p>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=3,\qquad \alpha\beta=1" />

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ① 근이 <InlineMath math="\alpha+\beta,\ \alpha\beta" />
                                </h4>

                                <p>
                                    새로운 두 근은
                                </p>

                                <BlockMath math="3,\ 1" />

                                <p>
                                    이므로 구하는 이차방정식은
                                </p>

                                <BlockMath math="(x-3)(x-1)=0" />

                                <BlockMath math="x^2-4x+3=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ② 근이 <InlineMath math="\frac1\alpha,\ \frac1\beta" />
                                </h4>

                                <p>
                                    두 근의 합은
                                </p>

                                <BlockMath math="\frac1\alpha+\frac1\beta=\frac{\alpha+\beta}{\alpha\beta}=3" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="\frac1\alpha\cdot\frac1\beta=\frac1{\alpha\beta}=1" />

                                <p>
                                    따라서 구하는 이차방정식은
                                </p>

                                <BlockMath math="x^2-3x+1=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ③ 근이 <InlineMath math="3\alpha-\beta,\ 3\beta-\alpha" />
                                </h4>

                                <p>
                                    두 근의 합은
                                </p>

                                <BlockMath math="(3\alpha-\beta)+(3\beta-\alpha)" />

                                <BlockMath math="=2(\alpha+\beta)" />

                                <BlockMath math="=6" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="(3\alpha-\beta)(3\beta-\alpha)" />

                                <BlockMath math="=10\alpha\beta-3(\alpha^2+\beta^2)" />

                                <p>
                                    그런데
                                </p>

                                <BlockMath math="\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta" />

                                <BlockMath math="=9-2=7" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="10(1)-3(7)" />

                                <BlockMath math="-11" />

                                <p>
                                    따라서 구하는 이차방정식은
                                </p>

                                <BlockMath math="x^2-6x-11=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ④ 근이 <InlineMath math="\alpha^3,\ \beta^3" />
                                </h4>

                                <p>
                                    두 근의 합은
                                </p>

                                <BlockMath math="\alpha^3+\beta^3" />

                                <BlockMath math="=(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)" />

                                <BlockMath math="=27-9" />

                                <BlockMath math="=18" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="\alpha^3\beta^3=(\alpha\beta)^3=1" />

                                <p>
                                    따라서 구하는 이차방정식은
                                </p>

                                <BlockMath math="x^2-18x+1=0" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="x^2+ax+b=0" />에 대하여 다음 조건에 따라
                        상수 <InlineMath math="a,\ b" />의 값을 구하여라.
                    </p>

                    <div className="space-y-5 rounded-xl border border-white/15 p-5 text-gray-300">
                        <p>
                            ① <InlineMath math="a,\ b" />가 유리수이고 이차방정식의 한 근이 <InlineMath math="3+\sqrt2" />
                        </p>

                        <p>
                            ② <InlineMath math="a,\ b" />가 유리수이고 이차방정식의 한 근이 <InlineMath math="\sqrt3-1" />
                        </p>

                        <p>
                            ③ <InlineMath math="a,\ b" />가 실수이고 이차방정식의 한 근이 <InlineMath math="2+i" />
                        </p>

                        <p>
                            ④ <InlineMath math="a,\ b" />가 실수이고 이차방정식의 한 근이 <InlineMath math="-2-i" />
                        </p>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ① 한 근이 <InlineMath math="3+\sqrt2" />
                                </h4>

                                <p>
                                    <InlineMath math="a,\ b" />가 유리수이므로 다른 한 근은
                                    켤레무리근인 <InlineMath math="3-\sqrt2" />이다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=6" />
                                <BlockMath math="\text{두 근의 곱}=(3+\sqrt2)(3-\sqrt2)=9-2=7" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2-6x+7=0" />

                                <p>
                                    주어진 식 <InlineMath math="x^2+ax+b=0" />과 비교하면
                                </p>

                                <BlockMath math="a=-6,\quad b=7" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ② 한 근이 <InlineMath math="\sqrt3-1" />
                                </h4>

                                <p>
                                    <InlineMath math="a,\ b" />가 유리수이므로 다른 한 근은
                                    켤레무리근인 <InlineMath math="-\sqrt3-1" />이다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=(\sqrt3-1)+(-\sqrt3-1)=-2" />

                                <BlockMath math="\text{두 근의 곱}=(\sqrt3-1)(-\sqrt3-1)" />

                                <BlockMath math="=(\sqrt3-1)(-(\sqrt3+1))" />

                                <BlockMath math="=-(3-1)=-2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2-(-2)x+(-2)=0" />

                                <BlockMath math="x^2+2x-2=0" />

                                <p>
                                    주어진 식 <InlineMath math="x^2+ax+b=0" />과 비교하면
                                </p>

                                <BlockMath math="a=2,\quad b=-2" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ③ 한 근이 <InlineMath math="2+i" />
                                </h4>

                                <p>
                                    <InlineMath math="a,\ b" />가 실수이므로 다른 한 근은
                                    켤레복소근인 <InlineMath math="2-i" />이다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=(2+i)+(2-i)=4" />

                                <BlockMath math="\text{두 근의 곱}=(2+i)(2-i)=4+1=5" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2-4x+5=0" />

                                <p>
                                    주어진 식 <InlineMath math="x^2+ax+b=0" />과 비교하면
                                </p>

                                <BlockMath math="a=-4,\quad b=5" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ④ 한 근이 <InlineMath math="-2-i" />
                                </h4>

                                <p>
                                    <InlineMath math="a,\ b" />가 실수이므로 다른 한 근은
                                    켤레복소근인 <InlineMath math="-2+i" />이다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=(-2-i)+(-2+i)=-4" />

                                <BlockMath math="\text{두 근의 곱}=(-2-i)(-2+i)=4+1=5" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2-(-4)x+5=0" />

                                <BlockMath math="x^2+4x+5=0" />

                                <p>
                                    주어진 식 <InlineMath math="x^2+ax+b=0" />과 비교하면
                                </p>

                                <BlockMath math="a=4,\quad b=5" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        갑, 을 두 사람이 어떤 이차방정식을 푸는데,
                        갑은 일차항의 계수를 잘못 보고,
                        을은 상수항을 잘못 보고 풀었다.
                        이때 갑은 <InlineMath math="-1,\ 4" />를 근으로 하고,
                        을은 <InlineMath math="3\pm2\sqrt2 i" />를 근으로 얻었다.
                        처음 방정식의 옳은 두 근의 합을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                갑은 일차항의 계수를 잘못 보았으므로
                                <strong> 상수항은 맞게 본 것</strong>이다.
                            </p>

                            <p>
                                갑이 얻은 두 근이 <InlineMath math="-1,\ 4" />이므로
                                상수항은 두 근의 곱이다.
                            </p>

                            <BlockMath math="(-1)\cdot4=-4" />

                            <p>
                                따라서 처음 방정식의 상수항은 <InlineMath math="-4" />이다.
                            </p>

                            <p>
                                을은 상수항을 잘못 보았으므로
                                <strong> 일차항의 계수는 맞게 본 것</strong>이다.
                            </p>

                            <p>
                                을이 얻은 두 근이 <InlineMath math="3+2\sqrt2 i,\ 3-2\sqrt2 i" />이므로
                                두 근의 합은
                            </p>

                            <BlockMath math="(3+2\sqrt2 i)+(3-2\sqrt2 i)=6" />

                            <p>
                                이차방정식
                                <InlineMath math="x^2+ax+b=0" />에서 두 근의 합은
                                <InlineMath math="-a" />이므로,
                                처음 방정식의 두 근의 합도 <InlineMath math="6" />이다.
                            </p>

                            <p className="font-semibold text-white">
                                따라서 정답은 <InlineMath math="6" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        A, B 두 사람이
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="ax^2+bx+c=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 푸는데,
                        A는 <InlineMath math="b" />를 잘못 읽어 <InlineMath math="-1,\ 3" />을 근으로 얻었고,
                        B는 <InlineMath math="c" />를 잘못 읽어 <InlineMath math="-1\pm\sqrt2 i" />를 근으로 얻었다.
                        원래 이차방정식의 두 근의 차를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                A는 일차항의 계수 <InlineMath math="b" />를 잘못 읽었으므로 <InlineMath math="a,\ c" />는 올바르게 보았다.
                            </p>

                            <p>
                                따라서 원래 방정식의
                            </p>

                            <BlockMath math="\frac ca" />

                            <p>
                                는 A가 얻은 두 근의 곱과 같다.
                            </p>

                            <BlockMath math="\frac ca=(-1)(3)=-3" />

                            <p>
                                즉
                            </p>

                            <BlockMath math="\frac ca=-3" />

                            <hr className="border-white/10" />

                            <p>
                                B는 상수항 <InlineMath math="c" />를 잘못 읽었으므로 <InlineMath math="a,\ b" />는 올바르게 보았다.
                            </p>

                            <p>
                                따라서 원래 방정식의
                            </p>

                            <BlockMath math="-\frac ba" />

                            <p>
                                는 B가 얻은 두 근의 합과 같다.
                            </p>

                            <BlockMath math="-\frac ba=(-1+\sqrt2 i)+(-1-\sqrt2 i)" />

                            <BlockMath math="-\frac ba=-2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac ba=2" />

                            <hr className="border-white/10" />

                            <p>
                                원래 방정식의 두 근을
                                <InlineMath math="\alpha,\ \beta" />
                                라 하면
                            </p>

                            <BlockMath math="\alpha+\beta=-\frac ba=-2" />

                            <BlockMath math="\alpha\beta=\frac ca=-3" />

                            <p>
                                이제
                            </p>

                            <BlockMath math="(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta" />

                            <BlockMath math="=(-2)^2-4(-3)" />

                            <BlockMath math="=16" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="|\alpha-\beta|=4" />

                            <p className="font-semibold text-white">
                                따라서 원래 이차방정식의 두 근의 차는
                            </p>

                            <BlockMath math="4" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x=\sqrt3-2" />일 때,
                    </p>

                    <BlockMath math="x^3+3x^2+5x+7" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                <InlineMath math="x=\sqrt3-2" />는 무리수이므로
                                켤레무리근 <InlineMath math="-\sqrt3-2" />와 함께 생각한다.
                            </p>

                            <p>
                                두 근이
                            </p>

                            <BlockMath math="\sqrt3-2,\quad -\sqrt3-2" />

                            <p>
                                인 이차방정식을 작성한다.
                            </p>

                            <p>
                                두 근의 합은
                            </p>

                            <BlockMath math="(\sqrt3-2)+(-\sqrt3-2)=-4" />

                            <p>
                                두 근의 곱은
                            </p>

                            <BlockMath math="(\sqrt3-2)(-\sqrt3-2)" />

                            <BlockMath math="=-(\sqrt3-2)(\sqrt3+2)" />

                            <BlockMath math="=-(3-4)=1" />

                            <p>
                                따라서 두 근을 가지는 이차방정식은
                            </p>

                            <BlockMath math="x^2-(-4)x+1=0" />

                            <BlockMath math="x^2+4x+1=0" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="x^2=-4x-1" />

                            <p>
                                이제 차수를 낮춘다.
                            </p>

                            <BlockMath math="x^3=x\cdot x^2" />

                            <BlockMath math="=x(-4x-1)" />

                            <BlockMath math="-4x^2-x" />

                            <BlockMath math="-4(-4x-1)-x" />

                            <BlockMath math="=15x+4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^3+3x^2+5x+7" />

                            <BlockMath math="=(15x+4)+3(-4x-1)+5x+7" />

                            <BlockMath math="=8x+8" />

                            <BlockMath math="=8(x+1)" />

                            <p>
                                <InlineMath math="x=\sqrt3-2" />이므로
                            </p>

                            <BlockMath math="8(x+1)=8(\sqrt3-1)" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="8(\sqrt3-1)" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x=2-i" />일 때,
                    </p>

                    <BlockMath math="x^3-x^2+x+1" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="x=2-i" />는 실계수 이차방정식의 근이므로
                                켤레복소근은
                            </p>

                            <BlockMath math="2+i" />

                            <p>
                                이다.
                            </p>

                            <p>
                                따라서 두 근이
                            </p>

                            <BlockMath math="2-i,\quad 2+i" />

                            <p>
                                인 이차방정식을 작성하면
                            </p>

                            <BlockMath math="\text{두 근의 합}=4" />

                            <BlockMath math="\text{두 근의 곱}=(2-i)(2+i)=5" />

                            <BlockMath math="x^2-4x+5=0" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="x^2=4x-5" />

                            <p>
                                양변에 <InlineMath math="x" />를 곱하면
                            </p>

                            <BlockMath math="x^3=4x^2-5x" />

                            <BlockMath math="=4(4x-5)-5x" />

                            <BlockMath math="=11x-20" />

                            <p>
                                이제 원래 식에 대입하면
                            </p>

                            <BlockMath math="x^3-x^2+x+1" />

                            <BlockMath math="=(11x-20)-(4x-5)+x+1" />

                            <BlockMath math="=8x-14" />

                            <p>
                                <InlineMath math="x=2-i" />이므로
                            </p>

                            <BlockMath math="8(2-i)-14" />

                            <BlockMath math="=16-8i-14" />

                            <BlockMath math="=2-8i" />

                            <p className="font-semibold text-white">
                                따라서 답은
                            </p>

                            <BlockMath math="2-8i" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="x^2-4x+1=0" />의 두 근이 <InlineMath math="\alpha,\ \beta" />이고, 이차식 <InlineMath math="f(x)" />가
                    </p>

                    <BlockMath math="f(\alpha)=\beta,\quad f(\beta)=\alpha" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족한다. 또 <InlineMath math="f(x)" />를 <InlineMath math="x-1" />로 나눈 나머지가 <InlineMath math="1" />일 때, <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\beta=4-\alpha,\quad \alpha=4-\beta" />

                            <BlockMath math="f(\alpha)=4-\alpha,\quad f(\beta)=4-\beta" />

                            <p>
                                이는 <InlineMath math="f(x)" />를 <InlineMath math="(x-\alpha)(x-\beta)" />로 나누었을 때의 나머지가 <InlineMath math="4-x" />라는 뜻이다.
                            </p>

                            <BlockMath math="f(x)=k(x^2-4x+1)+4-x" />

                            <p>
                                한편 <InlineMath math="x-1" />로 나눈 나머지가 <InlineMath math="1" />이므로
                            </p>

                            <BlockMath math="f(1)=1" />

                            <BlockMath math="4-1+k(1^2-4\cdot1+1)=1" />

                            <BlockMath math="3-2k=1" />

                            <BlockMath math="k=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=4-x+(x^2-4x+1)" />

                            <BlockMath math="=x^2-5x+5" />

                            <p>
                                구하는 나머지는 <InlineMath math="f(2)" />이다.
                            </p>

                            <BlockMath math="f(2)=2^2-5\cdot2+5" />

                            <BlockMath math="=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="x^2-4x+2=0" />의 두 근이 <InlineMath math="\alpha,\ \beta" />이고, 이차식 <InlineMath math="f(x)" />가
                    </p>

                    <BlockMath math="f(\alpha)=\frac1\beta,\quad f(\beta)=\frac1\alpha" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족한다. 또 <InlineMath math="f(x)" />가 <InlineMath math="x-1" />로 나누어떨어질 때, <InlineMath math="f(x)" />를 <InlineMath math="x-2" />로 나눈 나머지를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta=4,\quad \alpha\beta=2" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\frac1\beta=\frac{\alpha}{\alpha\beta}=\frac{\alpha}{2}" />

                            <BlockMath math="\frac1\alpha=\frac{\beta}{\alpha\beta}=\frac{\beta}{2}" />

                            <p>
                                즉,
                            </p>

                            <BlockMath math="f(\alpha)=\frac{\alpha}{2},\quad f(\beta)=\frac{\beta}{2}" />

                            <p>
                                이는 <InlineMath math="f(x)" />를 <InlineMath math="(x-\alpha)(x-\beta)" />로 나누었을 때의 나머지가 <InlineMath math="\frac{x}{2}" />라는 뜻이다.
                            </p>

                            <p>
                                그런데
                            </p>

                            <BlockMath math="(x-\alpha)(x-\beta)=x^2-4x+2" />

                            <p>
                                이므로
                            </p>

                            <BlockMath math="f(x)=k(x^2-4x+2)+\frac{x}{2}" />

                            <p>
                                <InlineMath math="f(x)" />가 <InlineMath math="x-1" />로 나누어떨어지므로 <InlineMath math="f(1)=0" />이다.
                            </p>

                            <BlockMath math="f(1)=k(1-4+2)+\frac12=0" />

                            <BlockMath math="-k+\frac12=0" />

                            <BlockMath math="k=\frac12" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="f(x)=\frac12(x^2-4x+2)+\frac{x}{2}" />

                            <p>
                                구하는 나머지는 <InlineMath math="f(2)" />이다.
                            </p>

                            <BlockMath math="f(2)=\frac12(4-8+2)+1" />

                            <BlockMath math="=-1+1" />

                            <BlockMath math="=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />이다.
                            </p>
                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="x^2-(\text{두 근의 합})x+(\text{두 근의 곱})=0" />

                    <BlockMath math="p+q\sqrt m \Rightarrow p-q\sqrt m" />

                    <BlockMath math="p+qi \Rightarrow p-qi" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        유리계수에서는 켤레무리근, 실계수에서는 켤레복소근을 함께 생각합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.19 근의 변형에 따른 계수의 변화
                </h2>

                <p className="leading-8 text-gray-300">
                    이차방정식의 두 근을 알고 있을 때, 새로운 근을 가지는
                    이차방정식을 만드는 문제가 자주 출제됩니다.
                </p>

                <p className="mt-4 leading-8 text-gray-300">
                    이러한 문제는 공식을 외우기보다
                    <strong> 초등수학에서 배운 거꾸로 풀기</strong>를 이용하면
                    쉽게 해결할 수 있습니다.
                </p>

                <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-3 text-xl font-bold text-blue-300">
                        생각의 출발
                    </h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수에 5를 더하였다면 원래 수를 구할 때는 5를 뺍니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        어떤 수를 3배하였다면 원래 수를 구할 때는 3으로 나눕니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        즉,
                    </p>

                    <div className="rounded-lg bg-black/30 p-4">
                        <p className="text-center text-gray-200">
                            새 근 → 거꾸로 풀기 → 원래 근
                        </p>
                    </div>

                    <p className="mt-4 leading-8 text-gray-300">
                        를 생각한 뒤 원래 방정식에 대입하면 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        기본식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="aX^2+bX+c=0" />

                    <p className="leading-8 text-gray-300">
                        의 두 근이
                    </p>

                    <BlockMath math="\alpha,\ \beta" />

                    <p className="leading-8 text-gray-300">
                        라고 하면
                    </p>

                    <p className="leading-8 text-gray-300">
                        새로운 근을 <InlineMath math="x" />라고 두고,
                        거꾸로 풀어서 원래 근 <InlineMath math="X" />를
                        <InlineMath math="x" />로 나타낸 뒤
                        원래 방정식에 대입합니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        ① 부호를 바꾼 경우
                    </h3>

                    <BlockMath math="-\alpha,\ -\beta" />

                    <p className="leading-8 text-gray-300">
                        를 두 근으로 하는 이차방정식을 구해 봅시다.
                    </p>

                    <BlockMath math="x=-\alpha" />

                    <BlockMath math="\alpha=-x" />

                    <p className="leading-8 text-gray-300">
                        이므로 원래 식에 대입하면
                    </p>

                    <BlockMath math="a(-x)^2+b(-x)+c=0" />

                    <BlockMath math="ax^2-bx+c=0" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        ② 5를 더한 경우
                    </h3>

                    <BlockMath math="\alpha+5,\ \beta+5" />

                    <p className="leading-8 text-gray-300">
                        를 두 근으로 하는 이차방정식을 구해 봅시다.
                    </p>

                    <BlockMath math="x=\alpha+5" />

                    <BlockMath math="\alpha=x-5" />

                    <p className="leading-8 text-gray-300">
                        이므로 원래 식에 대입하면
                    </p>

                    <BlockMath math="a(x-5)^2+b(x-5)+c=0" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        ③ 3배한 경우
                    </h3>

                    <BlockMath math="3\alpha,\ 3\beta" />

                    <p className="leading-8 text-gray-300">
                        를 두 근으로 하는 이차방정식을 구해 봅시다.
                    </p>

                    <BlockMath math="x=3\alpha" />

                    <BlockMath math="\alpha=\frac{x}{3}" />

                    <p className="leading-8 text-gray-300">
                        이므로 원래 식에 대입하면
                    </p>

                    <BlockMath math="a\left(\frac{x}{3}\right)^2+b\left(\frac{x}{3}\right)+c=0" />

                    <p className="leading-8 text-gray-300">
                        양변에 9를 곱하면
                    </p>

                    <BlockMath math="ax^2+3bx+9c=0" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        ④ 역수인 경우
                    </h3>

                    <BlockMath math="\frac1\alpha,\ \frac1\beta" />

                    <p className="leading-8 text-gray-300">
                        를 두 근으로 하는 이차방정식을 구해 봅시다.
                    </p>

                    <BlockMath math="x=\frac1\alpha" />

                    <BlockMath math="\alpha=\frac1x" />

                    <p className="leading-8 text-gray-300">
                        이므로 원래 식에 대입하면
                    </p>

                    <BlockMath math="a\left(\frac1x\right)^2+b\left(\frac1x\right)+c=0" />

                    <p className="leading-8 text-gray-300">
                        양변에 <InlineMath math="x^2" />를 곱하면
                    </p>

                    <BlockMath math="a+bx+cx^2=0" />

                    <BlockMath math="cx^2+bx+a=0" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="2x^2-5x+3=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때,
                        다음 두 수를 두 근으로 하는 정수계수 이차방정식을 구하여라.
                    </p>

                    <div className="space-y-3 rounded-xl border border-white/15 p-5">
                        <p>① <InlineMath math="-\alpha,\ -\beta" /></p>

                        <p>② <InlineMath math="\alpha+3,\ \beta+3" /></p>

                        <p>③ <InlineMath math="2\alpha-3,\ 2\beta-3" /></p>

                        <p>④ <InlineMath math="\frac1\alpha,\ \frac1\beta" /></p>

                        <p>⑤ <InlineMath math="\frac{\alpha+1}{2},\ \frac{\beta+1}{2}" /></p>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ① <InlineMath math="-\alpha,\ -\beta" />
                                </h4>

                                <BlockMath math="x=-\alpha" />

                                <BlockMath math="\alpha=-x" />

                                <BlockMath math="2(-x)^2-5(-x)+3=0" />

                                <BlockMath math="2x^2+5x+3=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ② <InlineMath math="\alpha+3,\ \beta+3" />
                                </h4>

                                <BlockMath math="x=\alpha+3" />

                                <BlockMath math="\alpha=x-3" />

                                <BlockMath math="2(x-3)^2-5(x-3)+3=0" />

                                <BlockMath math="2x^2-17x+36=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ③ <InlineMath math="2\alpha-3,\ 2\beta-3" />
                                </h4>

                                <BlockMath math="x=2\alpha-3" />

                                <BlockMath math="\alpha=\frac{x+3}{2}" />

                                <BlockMath math="2\left(\frac{x+3}{2}\right)^2-5\left(\frac{x+3}{2}\right)+3=0" />

                                <BlockMath math="(x+3)^2-5(x+3)+6=0" />

                                <BlockMath math="x^2+x=0" />

                                <BlockMath math="x(x+1)=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ④ <InlineMath math="\frac1\alpha,\ \frac1\beta" />
                                </h4>

                                <BlockMath math="x=\frac1\alpha" />

                                <BlockMath math="\alpha=\frac1x" />

                                <BlockMath math="2\left(\frac1x\right)^2-5\left(\frac1x\right)+3=0" />

                                <BlockMath math="2-5x+3x^2=0" />

                                <BlockMath math="3x^2-5x+2=0" />
                            </div>

                            <div>
                                <h4 className="mb-3 font-bold text-white">
                                    ⑤ <InlineMath math="\frac{\alpha+1}{2},\ \frac{\beta+1}{2}" />
                                </h4>

                                <BlockMath math="x=\frac{\alpha+1}{2}" />

                                <BlockMath math="\alpha=2x-1" />

                                <BlockMath math="2(2x-1)^2-5(2x-1)+3=0" />

                                <BlockMath math="8x^2-18x+10=0" />

                                <BlockMath math="4x^2-9x+5=0" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차식
                    </p>

                    <BlockMath math="f(x)=x^2-4x+k" />

                    <p className="mb-4 leading-8 text-gray-300">
                        에 대하여 <InlineMath math="f(\alpha)=0,\ f(\beta)=0" />
                        를 만족할 때, <InlineMath math="f(2x-3)=0" />의 두 근의 합을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 근의 변형으로 보기
                                </h4>

                                <p>
                                    <InlineMath math="f(\alpha)=0,\ f(\beta)=0" />이므로 <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="f(x)=0" />의 두 근이다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha+\beta=4" />

                                <p>
                                    <InlineMath math="f(2x-3)=0" />의 두 근을 <InlineMath math="\alpha',\ \beta'" />라 하자.
                                </p>

                                <p>
                                    그러면
                                </p>

                                <BlockMath math="2\alpha'-3=\alpha" />

                                <BlockMath math="2\beta'-3=\beta" />

                                <p>
                                    즉,
                                </p>

                                <BlockMath math="\alpha'=\frac{\alpha+3}{2},\qquad \beta'=\frac{\beta+3}{2}" />

                                <p>
                                    따라서 두 근의 합은
                                </p>

                                <BlockMath math="\alpha'+\beta'=\frac{\alpha+3}{2}+\frac{\beta+3}{2}" />

                                <BlockMath math="=\frac{\alpha+\beta+6}{2}" />

                                <BlockMath math="=\frac{4+6}{2}" />

                                <BlockMath math="=5" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 직접 전개해서 확인
                                </h4>

                                <p>
                                    직접 <InlineMath math="f(2x-3)" />을 구하면
                                </p>

                                <BlockMath math="f(2x-3)=(2x-3)^2-4(2x-3)+k" />

                                <BlockMath math="=4x^2-12x+9-8x+12+k" />

                                <BlockMath math="=4x^2-20x+21+k" />

                                <p>
                                    따라서 <InlineMath math="f(2x-3)=0" />은
                                </p>

                                <BlockMath math="4x^2-20x+21+k=0" />

                                <p>
                                    이다.
                                </p>

                                <p>
                                    이 이차방정식의 두 근의 합은 근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="-\frac{-20}{4}=5" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="5" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="f(x)=x^2-4x-2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />라 할 때, <InlineMath math="f(2x-1)=0" />의 두 근의 합을 <InlineMath math="p" />, 근의 곱을 <InlineMath math="q" />라고 한다.
                        이때 <InlineMath math="p+q" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 근의 변형으로 보기
                                </h4>

                                <p>
                                    <InlineMath math="f(\alpha)=0,\ f(\beta)=0" />라고 하면 <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="f(x)=0" />의 두 근이다.
                                </p>

                                <p>
                                    따라서 근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta=4" />

                                <BlockMath math="\alpha\beta=-2" />

                                <p>
                                    <InlineMath math="f(2x-1)=0" />의 두 근을 <InlineMath math="\alpha',\ \beta'" />라 하면
                                </p>

                                <BlockMath math="2\alpha'-1=\alpha" />

                                <BlockMath math="2\beta'-1=\beta" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha'=\frac{\alpha+1}{2},\qquad \beta'=\frac{\beta+1}{2}" />

                                <p>
                                    두 근의 합은
                                </p>

                                <BlockMath math="p=\alpha'+\beta'=\frac{\alpha+1}{2}+\frac{\beta+1}{2}" />

                                <BlockMath math="=\frac{\alpha+\beta+2}{2}" />

                                <BlockMath math="=3" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="q=\alpha'\beta'=\frac{\alpha+1}{2}\cdot\frac{\beta+1}{2}" />

                                <BlockMath math="=\frac{\alpha\beta+\alpha+\beta+1}{4}" />

                                <BlockMath math="=\frac{-2+4+1}{4}" />

                                <BlockMath math="=\frac34" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="p+q=3+\frac34=\frac{15}{4}" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 직접 전개해서 확인
                                </h4>

                                <p>
                                    직접 <InlineMath math="f(2x-1)" />을 구하면
                                </p>

                                <BlockMath math="f(2x-1)=(2x-1)^2-4(2x-1)-2" />

                                <BlockMath math="=4x^2-4x+1-8x+4-2" />

                                <BlockMath math="=4x^2-12x+3" />

                                <p>
                                    따라서 <InlineMath math="f(2x-1)=0" />은
                                </p>

                                <BlockMath math="4x^2-12x+3=0" />

                                <p>
                                    이 이차방정식의 두 근의 합과 곱은
                                </p>

                                <BlockMath math="p=-\frac{-12}{4}=3" />

                                <BlockMath math="q=\frac{3}{4}" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="p+q=3+\frac34=\frac{15}{4}" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="\frac{15}{4}" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="f(2x+3)=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근의 합이 <InlineMath math="5" />, 두 근의 곱이 <InlineMath math="3" />일 때, <InlineMath math="f(x)=0" />의 두 근의 합과 곱을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 거꾸로 풀기
                                </h4>

                                <p>
                                    <InlineMath math="f(2x+3)=0" />의 두 근을 <InlineMath math="\alpha,\ \beta" />라 하자.
                                </p>

                                <p>
                                    그러면
                                </p>

                                <BlockMath math="\alpha+\beta=5,\qquad \alpha\beta=3" />

                                <p>
                                    <InlineMath math="f(x)=0" />의 두 근을 <InlineMath math="\alpha',\ \beta'" />라 하면
                                </p>

                                <BlockMath math="2\alpha+3=\alpha'" />

                                <BlockMath math="2\beta+3=\beta'" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha'=2\alpha+3,\qquad \beta'=2\beta+3" />

                                <p>
                                    두 근의 합은
                                </p>

                                <BlockMath math="\alpha'+\beta'=2(\alpha+\beta)+6" />

                                <BlockMath math="=2\cdot5+6=16" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="\alpha'\beta'=(2\alpha+3)(2\beta+3)" />

                                <BlockMath math="=4\alpha\beta+6(\alpha+\beta)+9" />

                                <BlockMath math="=4\cdot3+6\cdot5+9" />

                                <BlockMath math="=51" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 방정식을 직접 작성
                                </h4>

                                <p>
                                    <InlineMath math="f(2x+3)=0" />의 두 근의 합과 곱이
                                    각각 5, 3이므로
                                </p>

                                <BlockMath math="x^2-5x+3=0" />

                                <p>
                                    이다.
                                </p>

                                <p>
                                    <InlineMath math="x=2X+3" />라고 두면
                                </p>

                                <BlockMath math="X=\frac{x-3}{2}" />

                                <p>
                                    이를 대입하면
                                </p>

                                <BlockMath math="\left(\frac{x-3}{2}\right)^2-5\left(\frac{x-3}{2}\right)+3=0" />

                                <BlockMath math="(x-3)^2-10(x-3)+12=0" />

                                <BlockMath math="x^2-16x+51=0" />

                                <p>
                                    따라서 <InlineMath math="f(x)=0" />의
                                    두 근의 합과 곱은
                                </p>

                                <BlockMath math="16,\qquad51" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서
                            </p>

                            <BlockMath math="\text{두 근의 합}=16,\qquad \text{두 근의 곱}=51" />

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차식 <InlineMath math="f(x)" />에 대하여
                    </p>

                    <BlockMath math="f(x)=x^2-4x+k" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이고, <InlineMath math="f(\alpha)=0,\ f(\beta)=0" />이다.
                        또 <InlineMath math="f(2x+3)=0" />의 두 근의 곱이 <InlineMath math="2" />일 때, <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 근의 변형으로 보기
                                </h4>

                                <p>
                                    <InlineMath math="f(\alpha)=0,\ f(\beta)=0" />이므로 <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="f(x)=0" />의 두 근이다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha+\beta=4,\qquad \alpha\beta=k" />

                                <p>
                                    <InlineMath math="f(2x+3)=0" />의 두 근을 <InlineMath math="p,\ q" />라 하자.
                                </p>

                                <p>
                                    그러면
                                </p>

                                <BlockMath math="2p+3=\alpha,\qquad 2q+3=\beta" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="p=\frac{\alpha-3}{2},\qquad q=\frac{\beta-3}{2}" />

                                <p>
                                    두 근의 곱이 <InlineMath math="2" />이므로
                                </p>

                                <BlockMath math="pq=2" />

                                <BlockMath math="\frac{(\alpha-3)(\beta-3)}{4}=2" />

                                <BlockMath math="(\alpha-3)(\beta-3)=8" />

                                <p>
                                    전개하면
                                </p>

                                <BlockMath math="\alpha\beta-3(\alpha+\beta)+9=8" />

                                <p>
                                    <InlineMath math="\alpha+\beta=4,\ \alpha\beta=k" />를 대입하면
                                </p>

                                <BlockMath math="k-3\cdot4+9=8" />

                                <BlockMath math="k-3=8" />

                                <BlockMath math="k=11" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 직접 전개해서 확인
                                </h4>

                                <p>
                                    직접 <InlineMath math="f(2x+3)" />을 구하면
                                </p>

                                <BlockMath math="f(2x+3)=(2x+3)^2-4(2x+3)+k" />

                                <BlockMath math="=4x^2+12x+9-8x-12+k" />

                                <BlockMath math="=4x^2+4x+k-3" />

                                <p>
                                    따라서 <InlineMath math="f(2x+3)=0" />은
                                </p>

                                <BlockMath math="4x^2+4x+k-3=0" />

                                <p>
                                    이 이차방정식의 두 근의 곱은
                                </p>

                                <BlockMath math="\frac{k-3}{4}" />

                                <p>
                                    그런데 두 근의 곱이 <InlineMath math="2" />이므로
                                </p>

                                <BlockMath math="\frac{k-3}{4}=2" />

                                <BlockMath math="k-3=8" />

                                <BlockMath math="k=11" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="11" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 6
    </h3>

    <p className="mb-4 leading-8 text-gray-300">
        이차방정식 <InlineMath math="f(x+1)=0" />
        의 두 근을 <InlineMath math="\alpha,\ \beta" />
        라 하면 <InlineMath math="\alpha+\beta=3,\ \alpha\beta=5" />
        이다.<br/>
        이때 이차방정식 <InlineMath math="f(x-2)=0" />
        의 두 근의 곱을 구하여라.
    </p>

    <details className="rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-8 text-gray-300">

            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <h4 className="mb-3 font-bold text-blue-300">
                    풀이 : 근의 변형 이용하기
                </h4>

                <p>
                    <InlineMath math="f(x+1)=0" />의 두 근이 <InlineMath math="\alpha,\ \beta" />이므로
                </p>

                <BlockMath math="f(\alpha+1)=0,\qquad f(\beta+1)=0" />

                <p>
                    입니다.
                </p>

                <p>
                    이제 <InlineMath math="f(x-2)=0" />
                    의 두 근을 <InlineMath math="\alpha',\ \beta'" />
                    라 하면
                </p>

                <BlockMath math="\alpha'-2=\alpha+1" />

                <BlockMath math="\beta'-2=\beta+1" />

                <p>
                    이므로
                </p>

                <BlockMath math="\alpha'=\alpha+3,\qquad \beta'=\beta+3" />

            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <h4 className="mb-3 font-bold text-green-300">
                    두 근의 곱 구하기
                </h4>

                <BlockMath math="\alpha'\beta'=(\alpha+3)(\beta+3)" />

                <BlockMath math="=\alpha\beta+3(\alpha+\beta)+9" />

                <BlockMath math="=5+3\times3+9" />

                <BlockMath math="=23" />

            </div>

            <p className="font-semibold text-white">
                따라서 답은 <InlineMath math="23" />입니다.
            </p>

        </div>

    </details>

</div>

<div className="mt-8 rounded-xl bg-black/40 p-5">
    <h3 className="mb-4 text-xl font-bold text-white">
        예제 7
    </h3>

    <p className="mb-4 leading-8 text-gray-300">
        <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="ax^2+bx+c=0" />
        의 두 근을 <InlineMath math="\alpha,\ \beta" />
        라 할 때, 다음 중 <InlineMath math="x" />에 대한 이차방정식
    </p>

    <BlockMath math="c(x-1)^2+b(x-1)+a=0" />

    <p className="mb-4 leading-8 text-gray-300">
        의 근인 것은?
    </p>

    <div className="space-y-3 rounded-xl border border-white/15 p-5 text-gray-300">
        <p>① <InlineMath math="\alpha+\beta-2" /></p>
        <p>② <InlineMath math="\alpha-1" /></p>
        <p>③ <InlineMath math="\beta+1" /></p>
        <p>④ <InlineMath math="\frac1\alpha-1" /></p>
        <p>⑤ <InlineMath math="\frac1\beta+1" /></p>
    </div>

    <details className="mt-6 rounded-xl border border-white/15 p-5">
        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-8 text-gray-300">
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                <h4 className="mb-3 font-bold text-blue-300">
                    풀이 : 근의 역수 이용하기
                </h4>

                <p>
                    주어진 방정식 <InlineMath math="ax^2+bx+c=0" />
                    의 두 근이 <InlineMath math="\alpha,\ \beta" />
                    이므로
                </p>

                <BlockMath math="a\alpha^2+b\alpha+c=0" />

                <BlockMath math="a\beta^2+b\beta+c=0" />

                <p>
                    입니다.
                </p>

                <p>
                    이제 각 식을 각각 <InlineMath math="\alpha^2,\ \beta^2" />
                    으로 나누면
                </p>

                <BlockMath math="a+\frac{b}{\alpha}+\frac{c}{\alpha^2}=0" />

                <BlockMath math="a+\frac{b}{\beta}+\frac{c}{\beta^2}=0" />

                <p>
                    이므로 <InlineMath math="cy^2+by+a=0" />
                    의 두 근은
                </p>

                <BlockMath math="y=\frac1\alpha,\qquad \frac1\beta" />

                <p>
                    입니다.
                </p>
            </div>

            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                <h4 className="mb-3 font-bold text-green-300">
                    주어진 방정식에 적용하기
                </h4>

                <p>
                    주어진 방정식에서
                </p>

                <BlockMath math="y=x-1" />

                <p>
                    라고 놓으면
                </p>

                <BlockMath math="cy^2+by+a=0" />

                <p>
                    입니다.
                    따라서
                </p>

                <BlockMath math="x-1=\frac1\alpha \quad\text{또는}\quad x-1=\frac1\beta" />

                <p>
                    이므로
                </p>

                <BlockMath math="x=\frac1\alpha+1 \quad\text{또는}\quad x=\frac1\beta+1" />
            </div>

            <p className="font-semibold text-white">
                따라서 정답은 ⑤ <InlineMath math="\displaystyle \frac1\beta+1" />
                입니다.
            </p>
        </div>
    </details>
</div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        새로운 근을 <InlineMath math="x" />라고 두고
                    </p>

                    <div className="my-4 rounded-lg bg-black/30 p-4">
                        <p className="text-center text-gray-200">
                            새 근 → 거꾸로 풀기 → 원래 근 → 원래 방정식에 대입
                        </p>
                    </div>

                    <p className="leading-8 text-gray-300">
                        의 순서로 생각하면 됩니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        예를 들어
                    </p>

                    <BlockMath math="2\alpha-3,\ 2\beta-3" />

                    <p className="leading-8 text-gray-300">
                        를 두 근으로 하는 이차방정식을 구하고 싶다면
                    </p>

                    <BlockMath math="x=2\alpha-3" />

                    <BlockMath math="\alpha=\frac{x+3}{2}" />

                    <p className="leading-8 text-gray-300">
                        를 원래 식에 대입하면 됩니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.20 이차방정식의 근의 판별
                </h2>

                <p className="leading-8 text-gray-300">
                    모든 이차방정식은 해를 구할 수 있습니다.
                    인수분해가 되면 인수분해로 풀고, 인수분해가 되지 않으면 근의 공식을 이용하면 됩니다.
                </p>

                <p className="mt-4 leading-8 text-gray-300">
                    하지만 문제에 따라서는 구체적인 해보다
                    <strong> 근의 형태</strong>만 알고 싶은 경우가 있습니다.
                    예를 들어 서로 다른 두 실근을 가지는지, 중근을 가지는지,
                    허근을 가지는지만 알고 싶을 수 있습니다.
                </p>

                <p className="mt-4 leading-8 text-gray-300">
                    이처럼 근을 직접 구하지 않고 근의 형태를 판별하는 방법을
                    <strong> 판별식</strong>이라고 합니다.
                </p>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        판별식은 근의 공식에서 나온다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        실계수 이차방정식
                    </p>

                    <BlockMath math="ax^2+bx+c=0\quad(a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 근의 공식은
                    </p>

                    <BlockMath math="x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                        여기서 근의 형태를 결정하는 부분은
                    </p>

                    <BlockMath math="\sqrt{b^2-4ac}" />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서
                    </p>

                    <BlockMath math="D=b^2-4ac" />

                    <p className="leading-8 text-gray-300">
                        를 판별식이라고 합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        일차항의 계수가 짝수인 경우 <InlineMath math="b=2b'" />라고 두면
                    </p>

                    <BlockMath math="x=\frac{-b'\pm\sqrt{b'^2-ac}}{a}" />

                    <p className="leading-8 text-gray-300">
                        를 사용할 수 있으므로
                    </p>

                    <BlockMath math="\frac{D}{4}=b'^2-ac" />

                    <p className="leading-8 text-gray-300">
                        로 판별해도 됩니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        실계수 이차방정식의 근의 판별
                    </h3>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[520px] border-collapse text-center text-gray-300">
                            <thead>
                                <tr className="border-b border-white/20">
                                    <th className="p-3">판별식</th>
                                    <th className="p-3">근의 형태</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="D>0" />
                                    </td>
                                    <td className="p-3">서로 다른 두 실근</td>
                                </tr>
                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        <InlineMath math="D=0" />
                                    </td>
                                    <td className="p-3">중근, 즉 중복된 두 실근</td>
                                </tr>
                                <tr>
                                    <td className="p-3">
                                        <InlineMath math="D<0" />
                                    </td>
                                    <td className="p-3">서로 다른 두 허근</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        왜 판별식으로 구분할 수 있을까?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        근의 공식에서 <InlineMath math="\sqrt{D}" /> 부분을 보면 됩니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="D>0" />이면 <InlineMath math="\sqrt D" />가 양의 실수이므로 <InlineMath math="+\sqrt D" />와 <InlineMath math="-\sqrt D" />가 서로 달라집니다.
                        따라서 서로 다른 두 실근을 가집니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="D=0" />이면 <InlineMath math="\sqrt D=0" />이므로
                        두 근이 같아집니다.
                        따라서 중근을 가집니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        <InlineMath math="D<0" />이면 <InlineMath math="\sqrt D" />가 허수가 됩니다.
                        따라서 실근을 갖지 않고 서로 다른 두 허근을 가집니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        허수계수 이차방정식에서는 주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        판별식으로 근의 종류를 판별하는 방법은
                        <strong> 실계수 이차방정식</strong>에서 사용하는 방법입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        계수에 허수가 포함되면 <InlineMath math="D=b^2-4ac" /> 자체가 복소수가 될 수 있습니다.
                        복소수에는 일반적으로 <InlineMath math="D>0" />, <InlineMath math="D<0" />와 같은 대소 비교를 할 수 없으므로
                        위의 판별 방법을 그대로 사용할 수 없습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        허수계수 이차방정식에서 실근을 갖는지 확인해야 한다면,
                        실근을 <InlineMath math="\alpha" />라고 두고 방정식에 대입한 뒤
                        복소수의 상등을 이용하여 풀어야 합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        다만 두 근이 같은지 판단할 때는
                        허수계수 이차방정식에서도 <InlineMath math="D=0" />을 사용할 수 있습니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+6x+11-a=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 중근을 갖기 위한 상수 <InlineMath math="a" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>중근을 가지므로 판별식은 0이다.</p>

                            <BlockMath math="D=6^2-4(1)(11-a)=0" />

                            <BlockMath math="36-44+4a=0" />

                            <BlockMath math="4a=8" />

                            <BlockMath math="a=2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+(m+1)x+m+4=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 중근을 갖도록 하는 자연수 <InlineMath math="m" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>중근을 가지므로</p>

                            <BlockMath math="D=(m+1)^2-4(m+4)=0" />

                            <BlockMath math="m^2-2m-15=0" />

                            <BlockMath math="(m-5)(m+3)=0" />

                            <p>자연수이므로</p>

                            <BlockMath math="m=5" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="5" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+2x-(a+b)=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 중근을 가질 때,
                    </p>

                    <BlockMath math="a^3+b^3-3ab" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>중근을 가지므로</p>

                            <BlockMath math="D=2^2-4(1)(-(a+b))=0" />

                            <BlockMath math="4+4(a+b)=0" />

                            <BlockMath math="a+b=-1" />

                            <p>항등식</p>

                            <BlockMath math="a^3+b^3=(a+b)^3-3ab(a+b)" />

                            <p>을 이용하면</p>

                            <BlockMath math="a^3+b^3-3ab=(a+b)^3-3ab(a+b)-3ab" />

                            <BlockMath math="=(a+b)^3-3ab(a+b+1)" />

                            <p><InlineMath math="a+b=-1" />이므로</p>

                            <BlockMath math="=(-1)^3=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2-2(k-a)x+k^2+a^2-b+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 <InlineMath math="k" />의 값에 관계없이 항상 중근을 가질 때,
                        두 실수 <InlineMath math="a,b" />에 대하여 <InlineMath math="a+b" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>항상 중근을 가지므로 판별식은 항상 0이다.</p>

                            <BlockMath math="D=\{-2(k-a)\}^2-4(k^2+a^2-b+1)=0" />

                            <BlockMath math="4(k-a)^2-4(k^2+a^2-b+1)=0" />

                            <BlockMath math="(k-a)^2-(k^2+a^2-b+1)=0" />

                            <BlockMath math="k^2-2ak+a^2-k^2-a^2+b-1=0" />

                            <BlockMath math="-2ak+b-1=0" />

                            <p>
                                이 식이 모든 <InlineMath math="k" />에 대하여 성립해야 하므로
                            </p>

                            <BlockMath math="-2a=0,\qquad b-1=0" />

                            <BlockMath math="a=0,\qquad b=1" />

                            <BlockMath math="a+b=1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+2x+m-1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 서로 다른 두 실근을 갖도록 하는 <InlineMath math="m" />의 범위를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>서로 다른 두 실근을 가지므로</p>

                            <BlockMath math="D>0" />

                            <BlockMath math="2^2-4(m-1)>0" />

                            <BlockMath math="8-4m>0" />

                            <BlockMath math="m<2" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="m<2" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="3x^2-6x+k=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 두 실근을 갖도록 하는 <InlineMath math="k" />의 범위를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>두 실근을 가지므로</p>

                            <BlockMath math="D\ge0" />

                            <BlockMath math="{(-6)}^2-4(3)k\ge0" />

                            <BlockMath math="36-12k\ge0" />

                            <BlockMath math="k\le3" />

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="k\le3" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="x^2+ax+b=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 서로 다른 두 실근을 가질 때,
                    </p>

                    <BlockMath math="x^2+(a-2c)x+b-ac=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 근을 판별한 것으로 옳은 것을 고르시오.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>처음 이차방정식이 서로 다른 두 실근을 가지므로</p>

                            <BlockMath math="a^2-4b>0" />

                            <p>새로운 이차방정식의 판별식은</p>

                            <BlockMath math="D=(a-2c)^2-4(b-ac)" />

                            <BlockMath math="=a^2-4ac+4c^2-4b+4ac" />

                            <BlockMath math="=a^2-4b+4c^2" />

                            <BlockMath math="=(a^2-4b)+4c^2" />

                            <p>
                                <InlineMath math="a^2-4b>0" />이고 <InlineMath math="4c^2\ge0" />이므로
                            </p>

                            <BlockMath math="D>0" />

                            <p>따라서 새로운 이차방정식도 항상 서로 다른 두 실근을 가진다.</p>

                            <p className="font-semibold text-white">
                                따라서 정답은 항상 서로 다른 두 실근을 가진다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식
                    </p>

                    <BlockMath math="\{1+(a+b)^2\}x^2-2(1-a-b)x+2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 실근을 가질 때,
                    </p>

                    <BlockMath math="a^3+b^3-3ab" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라. <span className="text-sm text-gray-400">(단, <InlineMath math="a,b" />는 실수)</span>
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                <InlineMath math="s=a+b" />라고 두면
                            </p>

                            <BlockMath math="(1+s^2)x^2-2(1-s)x+2=0" />

                            <p>
                                실근을 가지므로
                            </p>

                            <BlockMath math="D\ge0" />

                            <BlockMath math="\{-2(1-s)\}^2-4(1+s^2)\cdot2\ge0" />

                            <BlockMath math="4(1-s)^2-8(1+s^2)\ge0" />

                            <BlockMath math="(1-s)^2-2(1+s^2)\ge0" />

                            <BlockMath math="-s^2-2s-1\ge0" />

                            <BlockMath math="-(s+1)^2\ge0" />

                            <p>
                                제곱은 항상 0 이상이므로
                            </p>

                            <BlockMath math="s+1=0" />

                            <BlockMath math="a+b=-1" />

                            <p>
                                항등식
                            </p>

                            <BlockMath math="a^3+b^3=(a+b)^3-3ab(a+b)" />

                            <p>
                                을 이용하면
                            </p>

                            <BlockMath math="a^3+b^3-3ab=(a+b)^3-3ab(a+b+1)" />

                            <p>
                                <InlineMath math="a+b=-1" />이므로
                            </p>

                            <BlockMath math="=(-1)^3=-1" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />이다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x,\ y" />에 대한 이차식
                    </p>

                    <BlockMath math="2x^2+xy-y^2-x+2y+k" />

                    <p className="mb-4 leading-8 text-gray-300">
                        가 <InlineMath math="x,\ y" />의 두 일차식의 곱으로
                        인수분해되는 <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 구조를 보고 인수분해
                                </h4>

                                <p>
                                    먼저 이차항 부분을 보면
                                </p>

                                <BlockMath math="2x^2+xy-y^2" />

                                <p>
                                    는 다음과 같이 인수분해된다.
                                </p>

                                <BlockMath math="2x^2+xy-y^2=(2x-y)(x+y)" />

                                <p>
                                    따라서 전체 식이 두 일차식의 곱으로 인수분해된다면
                                    다음 꼴로 둘 수 있다.
                                </p>

                                <BlockMath math="(2x-y+A)(x+y+B)" />

                                <p>
                                    이를 전개하면
                                </p>

                                <BlockMath math="(2x-y+A)(x+y+B)" />

                                <BlockMath math="=2x^2+xy-y^2+(2B+A)x+(A-B)y+AB" />

                                <p>
                                    주어진 식
                                </p>

                                <BlockMath math="2x^2+xy-y^2-x+2y+k" />

                                <p>
                                    와 계수를 비교하면
                                </p>

                                <BlockMath math="2B+A=-1" />

                                <BlockMath math="A-B=2" />

                                <BlockMath math="AB=k" />

                                <p>
                                    앞의 두 식을 풀면
                                </p>

                                <BlockMath math="A=1,\quad B=-1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="k=AB=1\cdot(-1)=-1" />

                                <p>
                                    실제로
                                </p>

                                <BlockMath math="2x^2+xy-y^2-x+2y-1=(2x-y+1)(x+y-1)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 판별식의 판별식 이용
                                </h4>

                                <p>
                                    주어진 식을 <InlineMath math="x" />에 대한 이차식으로 정리하면
                                </p>

                                <BlockMath math="2x^2+(y-1)x+(-y^2+2y+k)" />

                                <p>
                                    이 식이 두 일차식의 곱으로 인수분해되려면,
                                    <InlineMath math="x" />에 대한 판별식이
                                    <InlineMath math="y" />에 대한 완전제곱식이 되어야 한다.
                                </p>

                                <p>
                                    <InlineMath math="x" />에 대한 판별식은
                                </p>

                                <BlockMath math="D_x=(y-1)^2-4\cdot2(-y^2+2y+k)" />

                                <BlockMath math="=y^2-2y+1+8y^2-16y-8k" />

                                <BlockMath math="=9y^2-18y+1-8k" />

                                <p>
                                    이것이 <InlineMath math="y" />에 대한 완전제곱식이 되려면,
                                    다시 판별식이 <InlineMath math="0" />이어야 한다.
                                </p>

                                <BlockMath math="D_y=(-18)^2-4\cdot9(1-8k)=0" />

                                <BlockMath math="324-36+288k=0" />

                                <BlockMath math="288+288k=0" />

                                <BlockMath math="k=-1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="x^2+3(1+i)x+(p+3i)=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 실근을 가질 때, 실수 <InlineMath math="p" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                허수계수 이차방정식에서는 판별식으로 실근 여부를 판단하지 않는다.
                            </p>

                            <p>
                                실근을 <InlineMath math="\alpha" />라 두고 대입한다.
                            </p>

                            <BlockMath math="\alpha^2+3(1+i)\alpha+(p+3i)=0" />

                            <BlockMath math="\alpha^2+3\alpha+p+(3\alpha+3)i=0" />

                            <p>
                                복소수가 <InlineMath math="0" />이 되려면 실수부와 허수부가 모두 <InlineMath math="0" />이어야 한다.
                            </p>

                            <BlockMath math="3\alpha+3=0" />

                            <BlockMath math="\alpha=-1" />

                            <p>
                                실수부에 대입하면
                            </p>

                            <BlockMath math="\alpha^2+3\alpha+p=0" />

                            <BlockMath math="1-3+p=0" />

                            <BlockMath math="p=2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="x^2+(k-3+i)x-3(k+2)-2i=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 실근을 가질 때, 실수 <InlineMath math="k" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                실근을 <InlineMath math="\alpha" />라 두고 대입한다.
                            </p>

                            <BlockMath math="\alpha^2+(k-3+i)\alpha-3(k+2)-2i=0" />

                            <BlockMath math="\alpha^2+(k-3)\alpha-3(k+2)+(\alpha-2)i=0" />

                            <p>
                                허수부가 <InlineMath math="0" />이어야 하므로
                            </p>

                            <BlockMath math="\alpha-2=0" />

                            <BlockMath math="\alpha=2" />

                            <p>
                                실수부에 대입하면
                            </p>

                            <BlockMath math="\alpha^2+(k-3)\alpha-3(k+2)=0" />

                            <BlockMath math="4+2(k-3)-3(k+2)=0" />

                            <BlockMath math="4+2k-6-3k-6=0" />

                            <BlockMath math="-k-8=0" />

                            <BlockMath math="k=-8" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-8" />이다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 12
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="p\ge0" />이고, <InlineMath math="x" />에 대한 이차방정식
                    </p>

                    <BlockMath math="(1+pi)x^2+(1-i)x-2+i=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 한 실근 <InlineMath math="\alpha" />와 한 허근 <InlineMath math="\beta" />를 가질 때, <InlineMath math="\beta" />를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">
                            <p>
                                실근을 <InlineMath math="\alpha" />라 두고 대입한다.
                            </p>

                            <BlockMath math="(1+pi)\alpha^2+(1-i)\alpha-2+i=0" />

                            <BlockMath math="\alpha^2+\alpha-2+(p\alpha^2-\alpha+1)i=0" />

                            <p>
                                실수부와 허수부가 모두 <InlineMath math="0" />이어야 하므로
                            </p>

                            <BlockMath math="\alpha^2+\alpha-2=0" />

                            <BlockMath math="p\alpha^2-\alpha+1=0" />

                            <p>
                                먼저
                            </p>

                            <BlockMath math="\alpha^2+\alpha-2=0" />

                            <BlockMath math="(\alpha-1)(\alpha+2)=0" />

                            <BlockMath math="\alpha=1,\quad -2" />

                            <p>
                                <InlineMath math="\alpha=1" />이면
                            </p>

                            <BlockMath math="p-1+1=0" />

                            <BlockMath math="p=0" />

                            <p>
                                <InlineMath math="\alpha=-2" />이면
                            </p>

                            <BlockMath math="4p+2+1=0" />

                            <BlockMath math="p=-\frac34" />

                            <p>
                                그런데 <InlineMath math="p\ge0" />이므로
                            </p>

                            <BlockMath math="p=0,\qquad \alpha=1" />

                            <p>
                                따라서 원래 방정식은
                            </p>

                            <BlockMath math="x^2+(1-i)x-2+i=0" />

                            <p>
                                한 근이 <InlineMath math="1" />이고 다른 근이 <InlineMath math="\beta" />이므로 근과 계수와의 관계에 의해
                            </p>

                            <BlockMath math="1\cdot\beta=-2+i" />

                            <BlockMath math="\beta=-2+i" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2+i" />이다.
                            </p>
                        </div>
                    </details>
                </div>


                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <BlockMath math="D=b^2-4ac" />

                    <div className="mt-5 space-y-3 text-gray-300">
                        <p>
                            <InlineMath math="D>0" /> :
                            서로 다른 두 실근
                        </p>

                        <p>
                            <InlineMath math="D=0" /> :
                            중근(중복된 두 실근)
                        </p>

                        <p>
                            <InlineMath math="D<0" /> :
                            서로 다른 두 허근
                        </p>
                    </div>

                    <div className="mt-6 rounded-lg bg-black/30 p-4">
                        <p className="font-semibold text-yellow-300">
                            자주 사용하는 조건
                        </p>

                        <div className="mt-3 space-y-2 text-gray-300">
                            <p>
                                두 실근 ⇒ <InlineMath math="D\ge0" />
                            </p>

                            <p>
                                서로 다른 두 실근 ⇒ <InlineMath math="D>0" />
                            </p>

                            <p>
                                중근 ⇒ <InlineMath math="D=0" />
                            </p>

                            <p>
                                허근 ⇒ <InlineMath math="D<0" />
                            </p>
                        </div>
                    </div>
                    <p className="mt-5 leading-8 text-gray-300">
                        <strong>두 실근</strong>은 중근을 포함하는 표현이고,
                        <strong>서로 다른 두 실근</strong>은 중근을 제외한 표현이다.
                        문제에서 사용하는 용어를 정확히 구분해야 한다.
                    </p>

                    <div className="mt-6 rounded-lg bg-black/30 p-4">
                        <p className="font-semibold text-yellow-300">
                            계산 팁
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            일차항의 계수가 짝수이면
                        </p>

                        <BlockMath math="ax^2+2b'x+c=0" />

                        <p className="leading-8 text-gray-300">
                            의 형태로 놓고
                        </p>

                        <BlockMath math="\frac{D}{4}=b'^2-ac" />

                        <p className="leading-8 text-gray-300">
                            를 사용하면 계산이 훨씬 간단해집니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 문제를 풀 때는 먼저 일차항의 계수가 짝수인지 확인한 뒤, <InlineMath math="D" />와 <InlineMath math="\frac{D}{4}" /> 중 계산하기 편한 것을 선택하면 됩니다.
                        </p>
                    </div>
                </div>



            </section>

        </>
    )
};