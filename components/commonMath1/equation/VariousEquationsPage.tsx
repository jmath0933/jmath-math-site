"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";

const FlowStep = ({
    title,
    examples,
}: {
    title: string;
    examples: string[];
}) => (
    <div className="relative grid grid-cols-[260px_60px_1fr] gap-6 items-center py-6">

        {/* 왼쪽 박스 */}
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-8 text-center text-2xl font-bold">
            {title}
        </div>

        {/* YES 화살표 */}
        <div className="flex items-center justify-center">
            <div className="rounded-md border border-green-700 bg-green-950 px-4 py-2 font-bold text-green-300">
                YES
            </div>

            <div className="mx-3 text-4xl text-zinc-400">
                →
            </div>
        </div>

        {/* 대표 문제 */}
        <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-6">
            <div className="space-y-3 text-center">
                {examples.map((ex, i) => (
                    <BlockMath key={i} math={ex} />
                ))}
            </div>
        </div>

    </div>
);

export default function QuadraticEquationAndFunctionPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.36 고차방정식의 해법
                </h2>

                <p className="leading-8 text-gray-300">
                    고차방정식은 새로운 공식을 외우기보다,
                    먼저 식의 구조를 관찰하여 알맞은 방법을 선택하는 것이 중요합니다.
                </p>

                {/* 플로우차트 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-8">

                    <h3 className="mb-8 text-3xl font-bold text-blue-300">
                        고차방정식 풀이 순서
                    </h3>

                    {/* 시작 */}


                    <FlowStep
                        title="치환 (차수낮추기)"
                        examples={[
                            "(x+1)(x+2)(x+3)(x+4)-3=0",
                            "x^4-2x^2-3=0",
                        ]}
                    />

                    <div className="grid grid-cols-[260px_60px_1fr] py-2">
                        <div className="flex justify-center">
                            <span className="text-5xl text-zinc-500">↓</span>
                        </div>

                        <div />

                        <div />
                    </div>


                    <FlowStep
                        title="복이차식"
                        examples={[
                            "x^4+x^2+1=0",
                        ]}
                    />

                    <div className="grid grid-cols-[260px_60px_1fr] py-2">
                        <div className="flex justify-center">
                            <span className="text-5xl text-zinc-500">↓</span>
                        </div>

                        <div />

                        <div />
                    </div>


                    <FlowStep
                        title="계수 반복"
                        examples={[
                            "x^5+3x^4+2x^3+x^2+3x+2=0",
                        ]}
                    />

                    <div className="grid grid-cols-[260px_60px_1fr] py-2">
                        <div className="flex justify-center">
                            <span className="text-5xl text-zinc-500">↓</span>
                        </div>

                        <div />

                        <div />
                    </div>


                    <FlowStep
                        title="계수 대칭 (상반식)"
                        examples={[
                            "x^4+5x^3-4x^2+5x+1=0",
                        ]}
                    />

                    <div className="grid grid-cols-[260px_60px_1fr] py-2">
                        <div className="flex justify-center">
                            <span className="text-5xl text-zinc-500">↓</span>
                        </div>

                        <div />

                        <div />
                    </div>


                    <FlowStep
                        title="인수정리"
                        examples={[
                            "x^3-7x+6=0",
                        ]}
                    />

                </div>

                {/* 대표 문제 풀이 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-5 text-2xl font-bold">
                        대표 문제 풀이
                    </h3>

                    <div className="space-y-8">
                        {/* 대표 문제 1 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 1. 치환
                            </h4>

                            <BlockMath math="(x+1)(x+2)(x+3)(x+4)-3=0" />

                            <p className="leading-8 text-gray-300">
                                양끝을 묶으면 공통된 식이 보입니다.
                            </p>

                            <BlockMath math="(x+1)(x+4)=x^2+5x+4" />
                            <BlockMath math="(x+2)(x+3)=x^2+5x+6" />

                            <p className="leading-8 text-gray-300">
                                가운데 값을 기준으로 <InlineMath math="X=x^2+5x+5" />라 두면
                            </p>

                            <BlockMath math="(X-1)(X+1)-3=0" />
                            <BlockMath math="X^2-4=0" />
                            <BlockMath math="X=2,\ -2" />

                            <BlockMath math="x^2+5x+5=2\quad\text{또는}\quad x^2+5x+5=-2" />

                            <BlockMath math="x^2+5x+3=0\quad\text{또는}\quad x^2+5x+7=0" />

                            <BlockMath math="x=\frac{-5\pm\sqrt{13}}2,\quad x=\frac{-5\pm\sqrt3 i}{2}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=\frac{-5\pm\sqrt{13}}2,\quad \frac{-5\pm\sqrt3 i}{2}}" />
                            </div>
                        </div>

                        {/* 대표 문제 2 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 2. 복이차 치환
                            </h4>

                            <BlockMath math="x^4-2x^2-3=0" />

                            <p className="leading-8 text-gray-300">
                                짝수차만 있으므로 <InlineMath math="X=x^2" />라 둡니다.
                            </p>

                            <BlockMath math="X^2-2X-3=0" />
                            <BlockMath math="(X-3)(X+1)=0" />
                            <BlockMath math="X=3,\ -1" />

                            <p className="leading-8 text-gray-300">
                                다시 <InlineMath math="X=x^2" />를 대입하면
                            </p>

                            <BlockMath math="x^2=3\quad\text{또는}\quad x^2=-1" />

                            <BlockMath math="x=\pm\sqrt3,\quad x=\pm i" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=\pm\sqrt3,\quad \pm i}" />
                            </div>
                        </div>

                        {/* 대표 문제 3 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 3. 복이차식의 변형
                            </h4>

                            <BlockMath math="x^4+x^2+1=0" />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="X=x^2" />로 치환하면 <InlineMath math="X^2+X+1" />이 되어 인수분해가 되지 않습니다.
                                이때는 제곱의 차로 바꿉니다.
                            </p>

                            <BlockMath math="x^4+x^2+1=(x^2+1)^2-x^2" />
                            <BlockMath math="=(x^2-x+1)(x^2+x+1)" />

                            <BlockMath math="x^2-x+1=0\quad\text{또는}\quad x^2+x+1=0" />

                            <BlockMath math="x=\frac{1\pm\sqrt3 i}{2},\quad x=\frac{-1\pm\sqrt3 i}{2}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=\frac{1\pm\sqrt3 i}{2},\quad \frac{-1\pm\sqrt3 i}{2}}" />
                            </div>
                        </div>

                        {/* 대표 문제 4 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 4. 반복되는 계수
                            </h4>

                            <BlockMath math="x^5+3x^4+2x^3+x^2+3x+2=0" />

                            <p className="leading-8 text-gray-300">
                                계수 <InlineMath math="1,\ 3,\ 2" />가 반복되므로
                                같은 묶음으로 정리합니다.
                            </p>

                            <BlockMath math="x^3(x^2+3x+2)+(x^2+3x+2)=0" />
                            <BlockMath math="(x^3+1)(x^2+3x+2)=0" />

                            <BlockMath math="(x+1)(x^2-x+1)(x+1)(x+2)=0" />
                            <BlockMath math="(x+1)^2(x+2)(x^2-x+1)=0" />

                            <BlockMath math="x=-1,\quad x=-2,\quad x=\frac{1\pm\sqrt3 i}{2}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=-1,\;-2,\;\frac{1\pm\sqrt3 i}{2}}" />
                            </div>
                        </div>

                        {/* 대표 문제 5 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 5. 계수 대칭(상반식)
                            </h4>

                            <BlockMath math="x^4+5x^3-4x^2+5x+1=0" />

                            <p className="leading-8 text-gray-300">
                                양 끝이 <InlineMath math="x^4" />와 <InlineMath math="1" />이고,
                                삼차항과 일차항의 계수가 같으므로 다음과 같이 둡니다.
                            </p>

                            <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />

                            <p className="leading-8 text-gray-300">
                                전개하면
                            </p>

                            <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />
                            <BlockMath math="=x^4+(A+B)x^3+(AB+2)x^2+(A+B)x+1" />

                            <p className="leading-8 text-gray-300">
                                계수를 비교하면
                            </p>

                            <BlockMath math="A+B=5,\qquad AB+2=-4" />
                            <BlockMath math="AB=-6" />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math="A=6,\qquad B=-1" />

                            <BlockMath math="x^4+5x^3-4x^2+5x+1=(x^2+6x+1)(x^2-x+1)" />

                            <BlockMath math="x^2+6x+1=0\quad\text{또는}\quad x^2-x+1=0" />

                            <BlockMath math="x=-3\pm2\sqrt2,\quad x=\frac{1\pm\sqrt3 i}{2}" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=-3\pm2\sqrt2,\quad \frac{1\pm\sqrt3 i}{2}}" />
                            </div>

                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
                                <p className="font-bold text-blue-300">
                                    참고
                                </p>
                                <p className="mt-2 leading-8 text-gray-300">
                                    삼차항과 일차항의 부호가 반대인 상반식은 <InlineMath math="(x^2+Ax-1)(x^2+Bx-1)" />
                                    꼴로 조립할 수 있습니다.
                                </p>
                            </div>
                        </div>

                        {/* 대표 문제 6 */}
                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h4 className="mb-3 text-xl font-bold text-green-300">
                                대표 문제 6. 인수정리
                            </h4>

                            <BlockMath math="x^3-7x+6=0" />

                            <p className="leading-8 text-gray-300">
                                특별한 구조가 보이지 않으면 <InlineMath math="\displaystyle \pm\frac{\text{상수항의 약수}}{\text{최고차항의 계수의 약수}}" />
                                를 대입합니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                이 식에서는 <InlineMath math="\pm1,\ \pm2,\ \pm3,\ \pm6" />을 확인합니다.
                            </p>

                            <BlockMath math="f(1)=1-7+6=0" />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="x-1" />을 인수로 갖습니다.
                            </p>

                            <BlockMath math="x^3-7x+6=(x-1)(x^2+x-6)" />
                            <BlockMath math="=(x-1)(x+3)(x-2)" />

                            <BlockMath math="x=1,\quad -3,\quad 2" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서 모든 해는
                                </p>
                                <BlockMath math="\boxed{x=1,\;-3,\;2}" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="(x-1)(x-2)(x-4)(x-5)-40=0" />

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 치환법
                                </h4>

                                <p>
                                    양 끝의 인수끼리 묶으면
                                </p>

                                <BlockMath math="(x-1)(x-5)=x^2-6x+5" />

                                <BlockMath math="(x-2)(x-4)=x^2-6x+8" />

                                <p>
                                    두 식은 상수항만 3만큼 차이가 나므로
                                </p>

                                <BlockMath math="t=x^2-6x+5" />

                                <p>
                                    라고 두면
                                </p>

                                <BlockMath math="(x-2)(x-4)=t+3" />

                                <p>
                                    따라서 원래 방정식은
                                </p>

                                <BlockMath math="t(t+3)-40=0" />

                                <BlockMath math="t^2+3t-40=0" />

                                <BlockMath math="(t+8)(t-5)=0" />

                                <BlockMath math="t=5\quad\text{또는}\quad t=-8" />

                                <hr className="border-white/10" />

                                <p>
                                    <strong>① </strong>
                                    <InlineMath math="t=5" />
                                </p>

                                <BlockMath math="x^2-6x+5=5" />

                                <BlockMath math="x^2-6x=0" />

                                <BlockMath math="x(x-6)=0" />

                                <BlockMath math="x=0,\ 6" />

                                <hr className="border-white/10" />

                                <p>
                                    <strong>② </strong>
                                    <InlineMath math="t=-8" />
                                </p>

                                <BlockMath math="x^2-6x+5=-8" />

                                <BlockMath math="x^2-6x+13=0" />

                                <BlockMath math="(x-3)^2+4=0" />

                                <BlockMath math="x=3\pm2i" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    핵심 아이디어
                                </h4>

                                <p>
                                    이 문제는
                                </p>

                                <BlockMath math="(x-1)(x-5),\qquad (x-2)(x-4)" />

                                <p>
                                    처럼 양 끝의 인수를 묶으면 같은 이차식이 만들어진다는 점을 이용한 문제입니다.
                                </p>

                                <p>
                                    고차방정식에서는 이러한 대칭성을 먼저 찾는 것이 중요합니.
                                </p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=0,\ 6,\ 3+2i,\ 3-2i" />

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="x^4+3x^2+2=0" />

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 치환법
                                </h4>

                                <p>
                                    <InlineMath math="x^2=t" />라고 놓으면 주어진 방정식은
                                </p>

                                <BlockMath math="t^2+3t+2=0" />

                                <BlockMath math="(t+1)(t+2)=0" />

                                <BlockMath math="t=-1\quad\text{또는}\quad t=-2" />

                                <p>
                                    다시 <InlineMath math="x" />에 대하여 풀면
                                </p>

                                <BlockMath math="x^2=-1\quad\text{또는}\quad x^2=-2" />

                                <BlockMath math="x=\pm i,\qquad x=\pm\sqrt2\,i" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    확인
                                </h4>

                                <p>
                                    치환한 식 <InlineMath math="t^2+3t+2=0" />
                                    의 두 근이 각각 <InlineMath math="-1,\ -2" />
                                    이므로
                                </p>

                                <BlockMath math="x^2=-1,\qquad x^2=-2" />

                                <p>
                                    에서 각각 두 근씩 얻어 모두 네 개의 근을 구합니다.
                                </p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=\pm i,\qquad \pm\sqrt2\,i" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="(x-2)(x-6)(x-3)(x-4)-6x^2=0" />

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 치환법
                                </h4>

                                <p>
                                    먼저 각 인수를 전개합니다.
                                </p>

                                <BlockMath math="(x-2)(x-6)=x^2-8x+12" />

                                <BlockMath math="(x-3)(x-4)=x^2-7x+12" />

                                <p>
                                    두 식에 공통으로 나타나는
                                    <InlineMath math="x^2+12" />
                                    를
                                </p>

                                <BlockMath math="t=x^2+12" />

                                <p>
                                    라고 놓으면
                                </p>

                                <BlockMath math="(t-8x)(t-7x)-6x^2=0" />

                                <BlockMath math="t^2-15xt+56x^2-6x^2=0" />

                                <BlockMath math="t^2-15xt+50x^2=0" />

                                <BlockMath math="(t-5x)(t-10x)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="t=5x \quad\text{또는}\quad t=10x" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    원래 문자로 바꾸기
                                </h4>

                                <p>
                                    <InlineMath math="t=x^2+12" />를 대입하면
                                </p>

                                <p>
                                    ① <InlineMath math="t=5x" />
                                </p>

                                <BlockMath math="x^2+12=5x" />

                                <BlockMath math="x^2-5x+12=0" />

                                <BlockMath math="x=\frac{5\pm\sqrt{23}i}{2}" />

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="t=10x" />
                                </p>

                                <BlockMath math="x^2+12=10x" />

                                <BlockMath math="x^2-10x+12=0" />

                                <BlockMath math="x=5\pm\sqrt{13}" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=5\pm\sqrt{13},\qquad \frac{5\pm\sqrt{23}i}{2}" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="x^4+2x^2+9=0" />

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 완전제곱식으로 조립하기
                                </h4>

                                <p>
                                    양 끝항 <InlineMath math="x^4,\ 9" />를 보고
                                    <InlineMath math="(x^2+3)^2" />을 생각합니다.
                                </p>

                                <BlockMath math="(x^2+3)^2=x^4+6x^2+9" />

                                <p>
                                    원래 식은 <InlineMath math="x^4+2x^2+9" />이므로
                                    <InlineMath math="4x^2" />을 빼 줍니다.
                                </p>

                                <BlockMath math="x^4+2x^2+9=x^4+6x^2+9-4x^2" />

                                <BlockMath math="=(x^2+3)^2-(2x)^2" />

                                <BlockMath math="=(x^2+3-2x)(x^2+3+2x)" />

                                <BlockMath math="=(x^2-2x+3)(x^2+2x+3)" />

                                <p>
                                    따라서 주어진 방정식은
                                </p>

                                <BlockMath math="(x^2-2x+3)(x^2+2x+3)=0" />

                                <p>
                                    입니다.
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ① <InlineMath math="x^2-2x+3=0" />
                                </p>

                                <BlockMath math="x=\frac{2\pm\sqrt{4-12}}2" />

                                <BlockMath math="=\frac{2\pm\sqrt{-8}}2" />

                                <BlockMath math="=\frac{2\pm2\sqrt2\,i}2" />

                                <BlockMath math="=1\pm\sqrt2\,i" />

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="x^2+2x+3=0" />
                                </p>

                                <BlockMath math="x=\frac{-2\pm\sqrt{4-12}}2" />

                                <BlockMath math="=\frac{-2\pm\sqrt{-8}}2" />

                                <BlockMath math="=\frac{-2\pm2\sqrt2\,i}2" />

                                <BlockMath math="=-1\pm\sqrt2\,i" />

                                <p className="font-semibold text-white">
                                    따라서 방정식의 근은
                                </p>

                                <BlockMath math="x=1\pm\sqrt2\,i,\qquad -1\pm\sqrt2\,i" />

                                <p className="font-semibold text-white">
                                    입니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="x^5+6x^4+2x^3-x^2-6x-2=0" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 반복되는 계수 이용하기
                                </h4>

                                <p>
                                    계수가 <InlineMath math="1,\ 6,\ 2" />로 반복되는 구조입니다.
                                </p>

                                <BlockMath math="x^5+6x^4+2x^3-x^2-6x-2" />

                                <BlockMath math="=x^3(x^2+6x+2)-(x^2+6x+2)" />

                                <BlockMath math="=(x^3-1)(x^2+6x+2)" />

                                <p>
                                    따라서 주어진 방정식은
                                </p>

                                <BlockMath math="(x^3-1)(x^2+6x+2)=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    각 방정식 풀기
                                </h4>

                                <BlockMath math="x^3-1=0" />

                                <BlockMath math="(x-1)(x^2+x+1)=0" />

                                <BlockMath math="x=1,\quad x=\frac{-1\pm\sqrt3 i}{2}" />

                                <hr className="border-white/10" />

                                <BlockMath math="x^2+6x+2=0" />

                                <BlockMath math="x=\frac{-6\pm\sqrt{36-8}}2" />

                                <BlockMath math="x=-3\pm\sqrt7" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은 다음과 같습니다.
                            </p>

                            <BlockMath math="x=1,\quad \frac{-1\pm\sqrt3 i}{2},\quad -3\pm\sqrt7" />
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^4+5x^3-4x^2+5x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 실근을 <InlineMath math="\alpha,\ \beta" />라 할 때, <InlineMath math="\alpha+\beta" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 상반식의 인수분해
                                </h4>

                                <p>
                                    양 끝항이 <InlineMath math="x^4" />와 <InlineMath math="1" />이고,
                                    삼차항과 일차항의 계수가 같으므로 다음과 같이 둡니다.
                                </p>

                                <BlockMath math="x^4+5x^3-4x^2+5x+1=(x^2+Ax+1)(x^2+Bx+1)" />

                                <p>
                                    전개하면
                                </p>

                                <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)" />

                                <BlockMath math="=x^4+(A+B)x^3+(AB+2)x^2+(A+B)x+1" />

                                <p>
                                    계수를 비교하면
                                </p>

                                <BlockMath math="A+B=5" />

                                <BlockMath math="AB+2=-4" />

                                <BlockMath math="AB=-6" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="A=6,\qquad B=-1" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x^4+5x^3-4x^2+5x+1" />

                                <BlockMath math="=(x^2+6x+1)(x^2-x+1)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    실근이 나오는 이차방정식 찾기
                                </h4>

                                <p>
                                    두 이차방정식을 각각 확인합니다.
                                </p>

                                <BlockMath math="x^2+6x+1=0" />

                                <BlockMath math="D=6^2-4\cdot1\cdot1=32>0" />

                                <p>
                                    따라서 이 방정식은 두 실근을 가집니다.
                                </p>

                                <hr className="border-white/10" />

                                <BlockMath math="x^2-x+1=0" />

                                <BlockMath math="D=(-1)^2-4\cdot1\cdot1=-3<0" />

                                <p>
                                    따라서 이 방정식은 실근을 갖지 않습니다.
                                </p><br/>

                                <p>
                                    그러므로 두 실근 <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="x^2+6x+1=0" />의 두 근입니다.
                                </p>

                                <BlockMath math="\alpha+\beta=-6" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="2x^4-3x^3-x^2-3x+2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 <InlineMath math="\alpha" />라 할 때, <InlineMath math="\displaystyle \alpha+\frac1\alpha" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 상반식 이용하기
                                </h4>

                                <p>
                                    먼저 양변을 <InlineMath math="2" />로 나눕니다.
                                </p>

                                <BlockMath math="x^4-\frac32x^3-\frac12x^2-\frac32x+1=0" />

                                <p>
                                    양 끝항이 <InlineMath math="x^4,\ 1" />이고,
                                    삼차항과 일차항의 계수가 같으므로
                                </p>

                                <BlockMath math="(x^2+Ax+1)(x^2+Bx+1)=0" />

                                <p>
                                    꼴로 인수분해합니다.
                                </p>

                                <BlockMath math="(x^2+x+1)\left(x^2-\frac52x+1\right)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^2+x+1=0" />

                                <p>
                                    또는
                                </p>

                                <BlockMath math="x^2-\frac52x+1=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="\displaystyle \alpha+\frac1\alpha" />의 값 구하기
                                </h4>

                                <p>
                                    각 이차방정식의 상수항이 <InlineMath math="1" />이므로 <InlineMath math="x\ne0" />입니다.
                                    따라서 양변을 <InlineMath math="x" />로 나눌 수 있습니다.
                                </p><br/>

                                <p>
                                    먼저{" "}
                                    <InlineMath math="x^2+x+1=0" />에서
                                </p>

                                <BlockMath math="\frac{x^2+x+1}{x}=0" />

                                <BlockMath math="x+1+\frac1x=0" />

                                <BlockMath math="x+\frac1x=-1" />

                                <hr className="border-white/10" />

                                <p>
                                    다음으로 <InlineMath math="\displaystyle x^2-\frac52x+1=0" />에서
                                </p>

                                <BlockMath math="\displaystyle \frac{x^2-\displaystyle \frac52x+1}{x}=0" />

                                <BlockMath math="x-\frac52+\frac1x=0" />

                                <BlockMath math="x+\frac1x=\frac52" />

                                <p>
                                    그러므로 <InlineMath math="\displaystyle \alpha+\frac1\alpha" />의 값은
                                </p>

                                <BlockMath math="-1\quad\text{또는}\quad \frac52" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" /> 또는 <InlineMath math="\displaystyle \frac52" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 고차방정식을 풀어라.
                    </p>

                    <BlockMath math="2x^5-3x^4-4x^3-4x^2-3x+2=0" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 5차 상반방정식
                                </h4>

                                <p>
                                    주어진 방정식은 5차 상반방정식입니다.
                                    5차 상반방정식은 항상 <InlineMath math="x=-1" />을 근으로 갖습니다.
                                </p>

                                <BlockMath math="2(-1)^5-3(-1)^4-4(-1)^3-4(-1)^2-3(-1)+2=0" />

                                <p>
                                    따라서 <InlineMath math="x+1" />을 인수로 갖습니다.
                                </p>

                                <BlockMath math="2x^5-3x^4-4x^3-4x^2-3x+2" />

                                <BlockMath math="=(x+1)(2x^4-5x^3+x^2-5x+2)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    남은 상반식 풀기
                                </h4>

                                <p>
                                    남은 식
                                </p>

                                <BlockMath math="2x^4-5x^3+x^2-5x+2" />

                                <p>
                                    도 상반식입니다.
                                    양변을 <InlineMath math="x^2" />으로 나누면
                                </p>

                                <BlockMath math="2\left(x^2+\frac1{x^2}\right)-5\left(x+\frac1x\right)+1=0" />

                                <p>
                                    <InlineMath math="\displaystyle t=x+\frac1x" />라고 놓으면
                                </p>

                                <BlockMath math="x^2+\frac1{x^2}=t^2-2" />

                                <BlockMath math="2(t^2-2)-5t+1=0" />

                                <BlockMath math="2t^2-5t-3=0" />

                                <BlockMath math="(2t+1)(t-3)=0" />

                                <BlockMath math="t=-\frac12\quad\text{또는}\quad t=3" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    원래 문자로 바꾸기
                                </h4>

                                <p>
                                    ① <InlineMath math="t=3" />일 때
                                </p>

                                <BlockMath math="x+\frac1x=3" />

                                <BlockMath math="x^2-3x+1=0" />

                                <BlockMath math="x=\frac{3\pm\sqrt5}{2}" />

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="\displaystyle t=-\frac12" />일 때
                                </p>

                                <BlockMath math="x+\frac1x=-\frac12" />

                                <BlockMath math="2x^2+x+2=0" />

                                <BlockMath math="x=\frac{-1\pm\sqrt{1-16}}4" />

                                <BlockMath math="x=\frac{-1\pm\sqrt{15}i}{4}" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=-1,\quad \frac{3\pm\sqrt5}{2},\quad \frac{-1\pm\sqrt{15}i}{4}" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="x^4-3x^3-2x^2+12x-8=0" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 인수정리 이용하기
                                </h4>

                                <p>
                                    좌변을 <InlineMath math="f(x)" />라 하면
                                </p>

                                <BlockMath math="f(x)=x^4-3x^3-2x^2+12x-8" />

                                <p>
                                    입니다. 먼저 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="f(1)=1-3-2+12-8=0" />

                                <p>
                                    이므로 <InlineMath math="x-1" />을 인수로 갖습니다.
                                </p>

                                <BlockMath math="x^4-3x^3-2x^2+12x-8" />

                                <BlockMath math="=(x-1)(x^3-2x^2-4x+8)" />

                                <p>
                                    이제 남은 삼차식에 <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath math="2^3-2\cdot2^2-4\cdot2+8=8-8-8+8=0" />

                                <p>
                                    이므로 <InlineMath math="x-2" />를 인수로 갖습니다.
                                </p>

                                <BlockMath math="x^3-2x^2-4x+8=(x-2)(x^2-4)" />

                                <BlockMath math="=(x-2)(x-2)(x+2)" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^4-3x^3-2x^2+12x-8=(x-1)(x-2)^2(x+2)" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=1,\quad 2,\quad -2" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 방정식을 풀어라.
                    </p>

                    <BlockMath math="x^4-5x^3-7x^2+5x+6=0" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 인수정리 이용하기
                                </h4>

                                <p>
                                    좌변을 <InlineMath math="f(x)" />라 하면
                                </p>

                                <BlockMath math="f(x)=x^4-5x^3-7x^2+5x+6" />

                                <p>
                                    먼저 <InlineMath math="x=1" />을 대입합니다.
                                </p>

                                <BlockMath math="f(1)=1-5-7+5+6=0" />

                                <p>
                                    따라서 <InlineMath math="x-1" />을 인수로 갖습니다.
                                </p>

                                <BlockMath math="x^4-5x^3-7x^2+5x+6" />

                                <BlockMath math="=(x-1)(x^3-4x^2-11x-6)" />

                                <p>
                                    이제 남은 삼차식에 <InlineMath math="x=-1" />을 대입합니다.
                                </p>

                                <BlockMath math="(-1)^3-4(-1)^2-11(-1)-6=-1-4+11-6=0" />

                                <p>
                                    따라서 <InlineMath math="x+1" />을 인수로 갖습니다.
                                </p>

                                <BlockMath math="x^3-4x^2-11x-6=(x+1)(x^2-5x-6)" />

                                <BlockMath math="=(x+1)(x-6)(x+1)" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="x^4-5x^3-7x^2+5x+6=(x-1)(x+1)^2(x-6)" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 방정식의 근은
                            </p>

                            <BlockMath math="x=1,\quad -1,\quad 6" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        고차방정식은 무조건 인수정리부터 하는 것이 아닙니다.
                        먼저 식의 구조를 관찰하고,
                        치환·복이차식·반복 계수·상반식이 보이지 않을 때
                        마지막으로 인수정리를 사용합니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    2.37 삼차방정식의 근과 계수와의 관계
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    삼차방정식의 세 근을 직접 구하지 않아도, 세 근의 합과 곱은 계수만으로
                    바로 구할 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-6 text-2xl font-bold">
                        삼차방정식의 근과 계수와의 관계
                    </h3>

                    <p className="leading-8 text-gray-300">삼차방정식</p>

                    <BlockMath math="ax^3+bx^2+cx+d=0 \qquad (a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 세 근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />라고 하자.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        그러면 이 삼차방정식은 다음과 같이 나타낼 수 있습니다.
                    </p>

                    <BlockMath math="a(x-\alpha)(x-\beta)(x-\gamma)=0" />

                    <p className="mt-5 leading-8 text-gray-300">전개하면</p>

                    <BlockMath math="(x-\alpha)(x-\beta)(x-\gamma)" />

                    <BlockMath math="=x^3-(\alpha+\beta+\gamma)x^2+(\alpha\beta+\beta\gamma+\gamma\alpha)x-\alpha\beta\gamma" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="a(x-\alpha)(x-\beta)(x-\gamma)" />

                    <BlockMath math="=a\{x^3-(\alpha+\beta+\gamma)x^2+(\alpha\beta+\beta\gamma+\gamma\alpha)x-\alpha\beta\gamma\}" />

                    <BlockMath math="=ax^3-a(\alpha+\beta+\gamma)x^2+a(\alpha\beta+\beta\gamma+\gamma\alpha)x-a\alpha\beta\gamma" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이것이 <InlineMath math="ax^3+bx^2+cx+d=0" />와 같으므로 계수를
                        비교하면
                    </p>

                    <BlockMath math="-a(\alpha+\beta+\gamma)=b" />
                    <BlockMath math="a(\alpha\beta+\beta\gamma+\gamma\alpha)=c" />
                    <BlockMath math="-a\alpha\beta\gamma=d" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\alpha+\beta+\gamma=-\frac{b}{a}" />
                    <BlockMath math="\alpha\beta+\beta\gamma+\gamma\alpha=\frac{c}{a}" />
                    <BlockMath math="\alpha\beta\gamma=-\frac{d}{a}" />
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <BlockMath math="ax^3+bx^2+cx+d=0 \qquad (a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 세 근이 <InlineMath math="\alpha,\ \beta,\ \gamma" />일 때
                    </p>

                    <div className="mt-5 space-y-5">
                        <div>
                            <BlockMath math="\alpha+\beta+\gamma=-\frac{b}{a} \qquad  \text{세 근의 합} = -\frac{\text{이차계수}}{\text{삼차계수}}" />

                        </div>

                        <div>
                            <BlockMath math="\alpha\beta+\beta\gamma+\gamma\alpha=\frac{c}{a} \qquad \text{둘씩 곱의 합}=\frac{\text{일차계수}}{\text{삼차계수}}" />
                        </div>

                        <div>
                            <BlockMath math="\alpha\beta\gamma=-\frac{d}{a} \qquad  \text{세 근의 곱}=-\frac{\text{상수항}}{\text{삼차계수}}" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="x^3-6x^2+11x-6=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 실근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />
                        라 할 때, <InlineMath math="\alpha^2+\beta^2+\gamma^2" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 근과 계수와의 관계 이용하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta+\gamma=6" />

                                <BlockMath math="\alpha\beta+\beta\gamma+\gamma\alpha=11" />

                                <p>
                                    또한
                                </p>

                                <BlockMath math="(\alpha+\beta+\gamma)^2=\alpha^2+\beta^2+\gamma^2+2(\alpha\beta+\beta\gamma+\gamma\alpha)" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="6^2=\alpha^2+\beta^2+\gamma^2+2\times11" />

                                <BlockMath math="36=\alpha^2+\beta^2+\gamma^2+22" />

                                <BlockMath math="\alpha^2+\beta^2+\gamma^2=14" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    계산 공식
                                </h4>

                                <BlockMath math="\alpha^2+\beta^2+\gamma^2=(\alpha+\beta+\gamma)^2-2(\alpha\beta+\beta\gamma+\gamma\alpha)" />

                                <p>
                                    세 근의 제곱의 합은 위 공식을 이용하면 빠르게 계산할 수 있습니다.
                                </p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="14" />
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="x^3-5x-1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 실근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />
                        라 할 때, <InlineMath math="\alpha^3+\beta^3+\gamma^3" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 앞에서 배운 공식 이용하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta+\gamma=0" />

                                <BlockMath math="\alpha\beta\gamma=1" />

                                <p>
                                    앞에서 배운
                                </p>

                                <BlockMath math="a+b+c=0\Longrightarrow a^3+b^3+c^3=3abc" />

                                <p>
                                    를 이용하면
                                </p>

                                <BlockMath math="\alpha^3+\beta^3+\gamma^3=3\alpha\beta\gamma" />

                                <BlockMath math="=3\times1" />

                                <BlockMath math="=3" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3" />입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="2x^3+3x^2+ax+b=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 근의 비가 <InlineMath math="1:2:3" />
                        일 때, <InlineMath math="a+b" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 근과 계수와의 관계 이용하기
                                </h4>

                                <p>
                                    세 근을
                                </p>

                                <BlockMath math="k,\ 2k,\ 3k" />

                                <p>
                                    라고 놓습니다.
                                </p>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="k+2k+3k=-\frac32" />

                                <BlockMath math="6k=-\frac32" />

                                <BlockMath math="k=-\frac14" />

                                <p>
                                    따라서 세 근은
                                </p>

                                <BlockMath math="-\frac14,\ -\frac12,\ -\frac34" />

                                <p>
                                    입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="a,\ b" />의 값 구하기
                                </h4>

                                <p>
                                    두 근씩의 곱의 합은
                                </p>

                                <BlockMath math="\frac18+\frac3{16}+\frac38=\frac{11}{16}" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac{a}{2}=\frac{11}{16}" />

                                <BlockMath math="a=\frac{11}{8}" />

                                <hr className="border-white/10" />

                                <p>
                                    세 근의 곱은
                                </p>

                                <BlockMath math="-\frac14\cdot-\frac12\cdot-\frac34=-\frac{3}{32}" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="-\frac{b}{2}=-\frac3{32}" />

                                <BlockMath math="b=\frac3{16}" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서
                            </p>

                            <BlockMath math="a+b=\frac{11}{8}+\frac{3}{16}=\frac{25}{16}" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="\displaystyle \frac{25}{16}" />
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <details className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <summary className="cursor-pointer text-lg font-semibold text-purple-300">
                        심화 : 자주 사용하는 식
                    </summary>

                    <div className="mt-5 space-y-5 leading-8 text-gray-300">
                        <p>
                            다음 식은 삼차방정식의 근과 계수와의 관계를 이용하는 문제에서 자주
                            사용됩니다.
                        </p>

                        <BlockMath math="(\alpha+\beta)(\beta+\gamma)(\gamma+\alpha)" />

                        <BlockMath math="=(\alpha+\beta+\gamma)(\alpha\beta+\beta\gamma+\gamma\alpha)-\alpha\beta\gamma" />

                        <p>
                            즉, <InlineMath math="\alpha+\beta+\gamma" />, <InlineMath math="\alpha\beta+\beta\gamma+\gamma\alpha" />, <InlineMath math="\alpha\beta\gamma" /> 값을 알고 있으면 위 식의 값도
                            바로 구할 수 있습니다.
                        </p>
                    </div>
                </details>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    2.38 삼차방정식의 근의 변형
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    삼차방정식의 근을 변형한 새로운 방정식도, 이차방정식과 같은 방법으로
                    만들 수 있습니다. 새로운 근을 <InlineMath math="x" />라 두고, 원래 근을 <InlineMath math="x" />로 나타낸 뒤 원래 방정식에 대입합니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-5 text-xl font-bold text-blue-300">
                        생각의 출발
                    </h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수에 <InlineMath math="5" />를 더하였다면, 원래 수를 구할 때는 <InlineMath math="5" />를 뺍니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        어떤 수를 <InlineMath math="3" />배하였다면, 원래 수를 구할 때는 <InlineMath math="3" />으로 나눕니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5 text-center">
                        <InlineMath math="\text{새 근}\ \longrightarrow\ \text{거꾸로 풀기}\ \longrightarrow\ \text{원래 근}" />
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-5 text-2xl font-bold">
                        기본식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="aX^3+bX^2+cX+d=0 \qquad (a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 세 근이 <InlineMath math="\alpha,\ \beta,\ \gamma" />라고 하자.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        새로운 근을 <InlineMath math="x" />라 두고, 거꾸로 풀어서 원래 근 <InlineMath math="X" />를 <InlineMath math="x" />로 나타낸 뒤 원래
                        방정식에 대입합니다.
                    </p>
                </div>

                <div className="mt-8 space-y-8">
                    <div className="rounded-xl bg-white/10 p-6">
                        <h3 className="mb-5 text-2xl font-bold">
                            ① 부호를 바꾼 경우
                        </h3>

                        <BlockMath math="-\alpha,\ -\beta,\ -\gamma" />

                        <p className="leading-8 text-gray-300">
                            를 세 근으로 하는 삼차방정식을 구해 봅시다.
                        </p>

                        <BlockMath math="x=-\alpha" />
                        <BlockMath math="\alpha=-x" />

                        <p className="leading-8 text-gray-300">
                            원래 식에 대입하면
                        </p>

                        <BlockMath math="a(-x)^3+b(-x)^2+c(-x)+d=0" />
                        <BlockMath math="-ax^3+bx^2-cx+d=0" />

                        <p className="leading-8 text-gray-300">
                            양변에 <InlineMath math="-1" />을 곱하면
                        </p>

                        <BlockMath math="ax^3-bx^2+cx-d=0" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="mb-2 font-bold text-green-300">따라서</p>
                            <BlockMath math="\boxed{ax^3-bx^2+cx-d=0}" />
                        </div>
                    </div>

                    <div className="rounded-xl bg-white/10 p-6">
                        <h3 className="mb-5 text-2xl font-bold">
                            ② 5를 더한 경우
                        </h3>

                        <BlockMath math="\alpha+5,\ \beta+5,\ \gamma+5" />

                        <p className="leading-8 text-gray-300">
                            를 세 근으로 하는 삼차방정식을 구해 봅시다.
                        </p>

                        <BlockMath math="x=\alpha+5" />
                        <BlockMath math="\alpha=x-5" />

                        <p className="leading-8 text-gray-300">
                            원래 식에 대입하면
                        </p>

                        <BlockMath math="a(x-5)^3+b(x-5)^2+c(x-5)+d=0" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="mb-2 font-bold text-green-300">따라서</p>
                            <BlockMath math="\boxed{a(x-5)^3+b(x-5)^2+c(x-5)+d=0}" />
                        </div>

                        <p className="mt-4 leading-8 text-gray-400">
                            이 경우는 문제에 따라 전개하거나, 이 형태 그대로 두고 사용할 수 있습니다.
                        </p>
                    </div>

                    <div className="rounded-xl bg-white/10 p-6">
                        <h3 className="mb-5 text-2xl font-bold">
                            ③ 3배한 경우
                        </h3>

                        <BlockMath math="3\alpha,\ 3\beta,\ 3\gamma" />

                        <p className="leading-8 text-gray-300">
                            를 세 근으로 하는 삼차방정식을 구해 봅시다.
                        </p>

                        <BlockMath math="x=3\alpha" />
                        <BlockMath math="\alpha=\frac{x}{3}" />

                        <p className="leading-8 text-gray-300">
                            원래 식에 대입하면
                        </p>

                        <BlockMath math="a\left(\frac{x}{3}\right)^3+b\left(\frac{x}{3}\right)^2+c\left(\frac{x}{3}\right)+d=0" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="mb-2 font-bold text-green-300">따라서</p>
                            <BlockMath math="\boxed{a\left(\frac{x}{3}\right)^3+b\left(\frac{x}{3}\right)^2+c\left(\frac{x}{3}\right)+d=0}" />
                        </div>
                    </div>

                    <div className="rounded-xl bg-white/10 p-6">
                        <h3 className="mb-5 text-2xl font-bold">
                            ④ 역수인 경우
                        </h3>

                        <BlockMath math="\frac1\alpha,\ \frac1\beta,\ \frac1\gamma" />

                        <p className="leading-8 text-gray-300">
                            를 세 근으로 하는 삼차방정식을 구해 봅시다.
                        </p>

                        <BlockMath math="x=\frac1\alpha" />
                        <BlockMath math="\alpha=\frac1x" />

                        <p className="leading-8 text-gray-300">
                            원래 식에 대입하면
                        </p>

                        <BlockMath math="a\left(\frac1x\right)^3+b\left(\frac1x\right)^2+c\left(\frac1x\right)+d=0" />

                        <p className="leading-8 text-gray-300">
                            양변에 <InlineMath math="x^3" />을 곱하면
                        </p>

                        <BlockMath math="a+bx+cx^2+dx^3=0" />
                        <BlockMath math="dx^3+cx^2+bx+a=0" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="mb-2 font-bold text-green-300">따라서</p>
                            <BlockMath math="\boxed{dx^3+cx^2+bx+a=0}" />
                        </div>
                    </div>

                    <div className="rounded-xl bg-white/10 p-6">
                        <h3 className="mb-5 text-2xl font-bold">
                            ⑤ 부호를 바꾼 역수인 경우
                        </h3>

                        <BlockMath math="-\frac1\alpha,\ -\frac1\beta,\ -\frac1\gamma" />

                        <p className="leading-8 text-gray-300">
                            를 세 근으로 하는 삼차방정식을 구해 봅시다.
                        </p>

                        <BlockMath math="x=-\frac1\alpha" />
                        <BlockMath math="\alpha=-\frac1x" />

                        <p className="leading-8 text-gray-300">
                            원래 식에 대입하면
                        </p>

                        <BlockMath math="a\left(-\frac1x\right)^3+b\left(-\frac1x\right)^2+c\left(-\frac1x\right)+d=0" />

                        <p className="leading-8 text-gray-300">
                            양변에 <InlineMath math="x^3" />을 곱하면
                        </p>

                        <BlockMath math="-a+bx-cx^2+dx^3=0" />
                        <BlockMath math="dx^3-cx^2+bx-a=0" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                            <p className="mb-2 font-bold text-green-300">따라서</p>
                            <BlockMath math="\boxed{dx^3-cx^2+bx-a=0}" />
                        </div>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="x^3-5x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />
                        라 할 때, <InlineMath math="\alpha+\beta,\ \beta+\gamma,\ \gamma+\alpha" />
                        를 세 근으로 하는 삼차방정식을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 세 근의 합 이용하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta+\gamma=0" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\alpha+\beta=-\gamma" />

                                <BlockMath math="\beta+\gamma=-\alpha" />

                                <BlockMath math="\gamma+\alpha=-\beta" />

                                <p>
                                    따라서 새로운 세 근은
                                </p>

                                <BlockMath math="-\alpha,\ -\beta,\ -\gamma" />

                                <p>
                                    입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    새로운 방정식 구하기
                                </h4>

                                <p>
                                    원래 방정식이
                                </p>

                                <BlockMath math="f(x)=x^3-5x+1=0" />

                                <p>
                                    이므로 새로운 근 <InlineMath math="-\alpha,\ -\beta,\ -\gamma" />
                                    를 갖는 방정식은
                                </p>

                                <BlockMath math="f(-x)=0" />

                                <p>
                                    입니다.
                                </p>

                                <BlockMath math="(-x)^3-5(-x)+1=0" />

                                <BlockMath math="-x^3+5x+1=0" />

                                <BlockMath math="x^3-5x-1=0" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 정답은 ③ <InlineMath math="x^3-5x-1=0" />
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="x^3+3x-1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />라 할 때, <InlineMath math="\displaystyle \frac{\alpha+\beta}{\gamma^2},\ \frac{\beta+\gamma}{\alpha^2},\ \frac{\gamma+\alpha}{\beta^2}" />
                        를 세 근으로 하는 삼차방정식을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>
<br/>
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <h4 className="mb-3 font-bold text-blue-300">
                                풀이 1 : 각각의 계수를 구하기
                            </h4>

                            <p>
                                근과 계수와의 관계에 의하여
                            </p>

                            <BlockMath math="\alpha+\beta+\gamma=0" />
                            <BlockMath math="\alpha\beta+\beta\gamma+\gamma\alpha=3" />
                            <BlockMath math="\alpha\beta\gamma=1" />

                            <p>
                                따라서
                            </p>

                            <BlockMath math="\alpha+\beta=-\gamma,\quad \beta+\gamma=-\alpha,\quad \gamma+\alpha=-\beta" />

                            <p>
                                새로운 세 근은
                            </p>

                            <BlockMath math="-\frac1\gamma,\quad -\frac1\alpha,\quad -\frac1\beta" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                새로운 세 근의 합은
                            </p>

                            <BlockMath math="-\left(\frac1\alpha+\frac1\beta+\frac1\gamma\right)" />
                            <BlockMath math="-\frac{\alpha\beta+\beta\gamma+\gamma\alpha}{\alpha\beta\gamma}" />
                            <BlockMath math="-3" />

                            <p>
                                새로운 두 근씩의 곱의 합은
                            </p>

                            <BlockMath math="\frac1{\alpha\beta}+\frac1{\beta\gamma}+\frac1{\gamma\alpha}" />
                            <BlockMath math="\frac{\alpha+\beta+\gamma}{\alpha\beta\gamma}" />
                            <BlockMath math="0" />

                            <p>
                                새로운 세 근의 곱은
                            </p>

                            <BlockMath math="\left(-\frac1\alpha\right)\left(-\frac1\beta\right)\left(-\frac1\gamma\right)" />
                            <BlockMath math="-1" />

                            <p>
                                따라서 구하는 삼차방정식은
                            </p>

                            <BlockMath math="x^3-(-3)x^2+0x-(-1)=0" />
                            <BlockMath math="x^3+3x^2+1=0" />
                        </div><br/>

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                            <h4 className="mb-3 font-bold text-green-300">
                                풀이 2 : 계수의 성질 이용하기
                            </h4>

                            <p>
                                앞에서 구한 새로운 세 근은
                            </p>

                            <BlockMath math="-\frac1\alpha,\quad -\frac1\beta,\quad -\frac1\gamma" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                삼차방정식
                            </p>

                            <BlockMath math="ax^3+bx^2+cx+d=0" />

                            <p>
                                의 세 근이 <InlineMath math="\alpha,\ \beta,\ \gamma" />
                                일 때, <InlineMath math="\displaystyle -\frac1\alpha,\ -\frac1\beta,\ -\frac1\gamma" />
                                를 세 근으로 하는 삼차방정식은
                            </p>

                            <BlockMath math="dx^3-cx^2+bx-a=0" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                원래 방정식은
                            </p>

                            <BlockMath math="x^3+3x-1=0" />

                            <p>
                                이므로 <InlineMath math="a=1,\ b=0,\ c=3,\ d=-1" />
                                입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath math="-x^3-3x^2-1=0" />

                            <p>
                                양변에 <InlineMath math="-1" />을 곱하면
                            </p>

                            <BlockMath math="x^3+3x^2+1=0" />
                        </div><br/>

                        <p className="font-semibold text-white">
                            따라서 정답은 ② <InlineMath math="x^3+3x^2+1=0" />
                            입니다.
                        </p>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식
                    </p>

                    <BlockMath math="x^3+x^2-1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 세 근을 <InlineMath math="\alpha,\ \beta,\ \gamma" />라 할 때, <InlineMath math="\alpha+\beta,\ \beta+\gamma,\ \gamma+\alpha" />
                        를 세 근으로 하는 삼차방정식을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 세 근의 합 이용하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta+\gamma=-1" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\alpha+\beta=-1-\gamma" />
                                <BlockMath math="\beta+\gamma=-1-\alpha" />
                                <BlockMath math="\gamma+\alpha=-1-\beta" />

                                <p>
                                    따라서 새로운 세 근은
                                </p>

                                <BlockMath math="-1-\alpha,\quad -1-\beta,\quad -1-\gamma" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    원래 방정식이
                                </p>

                                <BlockMath math="f(x)=x^3+x^2-1=0" />

                                <p>
                                    이므로 새로운 근을 갖는 방정식은
                                </p>

                                <BlockMath math="f(-x-1)=0" />

                                <p>
                                    입니다.
                                </p>

                                <BlockMath math="(-x-1)^3+(-x-1)^2-1=0" />

                                <BlockMath math="-(x+1)^3+(x+1)^2-1=0" />

                                <BlockMath math="-x^3-2x^2-x-1=0" />

                                <BlockMath math="x^3+2x^2+x+1=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 직접 계수를 구하기
                                </h4>

                                <p>
                                    새로운 세 근을
                                </p>

                                <BlockMath math="p=\alpha+\beta,\quad q=\beta+\gamma,\quad r=\gamma+\alpha" />

                                <p>
                                    라고 놓습니다.
                                </p>

                                <p>
                                    근과 계수와의 관계에서
                                </p>

                                <BlockMath math="\alpha+\beta+\gamma=-1" />
                                <BlockMath math="\alpha\beta+\beta\gamma+\gamma\alpha=0" />
                                <BlockMath math="\alpha\beta\gamma=1" />

                                <p>
                                    먼저 세 근의 합은
                                </p>

                                <BlockMath math="p+q+r=2(\alpha+\beta+\gamma)" />
                                <BlockMath math="=2(-1)=-2" />

                                <p>
                                    두 근씩의 곱의 합은
                                </p>

                                <BlockMath math="pq+qr+rp" />

                                <BlockMath math="=(\alpha+\beta)(\beta+\gamma)+(\beta+\gamma)(\gamma+\alpha)+(\gamma+\alpha)(\alpha+\beta)" />

                                <BlockMath math="=\alpha^2+\beta^2+\gamma^2+3(\alpha\beta+\beta\gamma+\gamma\alpha)" />

                                <p>
                                    여기서
                                </p>

                                <BlockMath math="\alpha^2+\beta^2+\gamma^2=(\alpha+\beta+\gamma)^2-2(\alpha\beta+\beta\gamma+\gamma\alpha)" />

                                <BlockMath math="=(-1)^2-2\cdot0=1" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="pq+qr+rp=1+3\cdot0=1" />

                                <p>
                                    세 근의 곱은
                                </p>

                                <BlockMath math="pqr=(\alpha+\beta)(\beta+\gamma)(\gamma+\alpha)" />

                                <p>
                                    이고, <InlineMath math="\alpha+\beta+\gamma=-1" />이므로
                                </p>

                                <BlockMath math="p=-1-\gamma,\quad q=-1-\alpha,\quad r=-1-\beta" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="pqr=(-1-\alpha)(-1-\beta)(-1-\gamma)" />

                                <BlockMath math="-(\alpha+1)(\beta+1)(\gamma+1)" />

                                <BlockMath math="-\{1+(\alpha+\beta+\gamma)+(\alpha\beta+\beta\gamma+\gamma\alpha)+\alpha\beta\gamma\}" />

                                <BlockMath math="-\{1+(-1)+0+1\}" />

                                <BlockMath math="-1" />

                                <p>
                                    따라서 구하는 삼차방정식은
                                </p>

                                <BlockMath math="x^3-(p+q+r)x^2+(pq+qr+rp)x-pqr=0" />

                                <BlockMath math="x^3-(-2)x^2+1x-(-1)=0" />

                                <BlockMath math="x^3+2x^2+x+1=0" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 정답은 ⑤ <InlineMath math="x^3+2x^2+x+1=0" />
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        삼차방정식 <InlineMath math="aX^3+bX^2+cX+d=0" />의 세 근이 <InlineMath math="\alpha,\ \beta,\ \gamma" />일 때
                    </p>

                    <div className="space-y-5">
                        <div className="rounded-xl bg-black/30 p-4">
                            <p className="mb-2 font-semibold text-gray-200">
                                세 근이 <InlineMath math="-\alpha,\ -\beta,\ -\gamma" />인 경우
                            </p>
                            <BlockMath math="ax^3-bx^2+cx-d=0" />
                        </div>

                        <div className="rounded-xl bg-black/30 p-4">
                            <p className="mb-2 font-semibold text-gray-200">
                                세 근이 <InlineMath math="\alpha+k,\ \beta+k,\ \gamma+k" />인 경우
                            </p>
                            <BlockMath math="a(x-k)^3+b(x-k)^2+c(x-k)+d=0" />
                        </div>

                        <div className="rounded-xl bg-black/30 p-4">
                            <p className="mb-2 font-semibold text-gray-200">
                                세 근이 <InlineMath math="k\alpha,\ k\beta,\ k\gamma" />인 경우
                            </p>
                            <BlockMath math="a\left(\frac{x}{k}\right)^3+b\left(\frac{x}{k}\right)^2+c\left(\frac{x}{k}\right)+d=0" />
                        </div>

                        <div className="rounded-xl bg-black/30 p-4">
                            <p className="mb-2 font-semibold text-gray-200">
                                세 근이 <InlineMath math="\displaystyle \frac1\alpha,\ \frac1\beta,\ \frac1\gamma" />인 경우
                            </p>
                            <BlockMath math="dx^3+cx^2+bx+a=0" />
                        </div>

                        <div className="rounded-xl bg-black/30 p-4">
                            <p className="mb-2 font-semibold text-gray-200">
                                세 근이 <InlineMath math="\displaystyle -\frac1\alpha,\ -\frac1\beta,\ -\frac1\gamma" />인 경우
                            </p>
                            <BlockMath math="dx^3-cx^2+bx-a=0" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.39 삼차방정식의 작성과 켤레근
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    세 근을 알면 삼차방정식을 만들 수 있습니다.
                    또한 실수계수 삼차방정식에서는 허근이 하나 존재하면 반드시 그 켤레복소수도 함께 근이 됩니다.
                </p>

                {/*------------------------------------------------*/}
                {/* 삼차방정식의 작성 */}
                {/*------------------------------------------------*/}

                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        삼차방정식의 작성
                    </h3>

                    <p className="leading-8 text-gray-300">
                        세 근이 <InlineMath math="\alpha,\ \beta,\ \gamma" />인 삼차방정식은
                    </p>

                    <BlockMath math="(x-\alpha)(x-\beta)(x-\gamma)=0" />

                    <p className="leading-8 text-gray-300">
                        에서 만들 수 있습니다.
                    </p>

                    <BlockMath math="(x-\alpha)(x-\beta)(x-\gamma)" />

                    <BlockMath math="=x^3-(\alpha+\beta+\gamma)x^2+(\alpha\beta+\beta\gamma+\gamma\alpha)x-\alpha\beta\gamma" />

                    <p className="leading-8 text-gray-300">
                        따라서 최고차항의 계수가 1인 삼차방정식은
                    </p>

                    <BlockMath math="x^3-(\alpha+\beta+\gamma)x^2+(\alpha\beta+\beta\gamma+\gamma\alpha)x-\alpha\beta\gamma=0" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h4 className="mb-3 font-bold text-yellow-300">
                            정리
                        </h4>

                        <BlockMath math="x^3-(\text{세 근의 합})x^2+(\text{두 근씩 곱의 합})x-(\text{세 근의 곱})=0" />

                        <p className="mt-4 leading-8 text-gray-300">
                            삼차방정식을 만드는 가장 기본적인 공식으로 반드시 기억해야 합니다.
                        </p>

                    </div>

                </div>

                {/*------------------------------------------------*/}
                {/* 최고차항의 계수가 a */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        최고차항의 계수가 주어진 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        세 근이 <InlineMath math="\alpha,\beta,\gamma" />,
                        최고차항의 계수가 <InlineMath math="a" />이면
                    </p>

                    <BlockMath math="a(x-\alpha)(x-\beta)(x-\gamma)=0" />

                    <p className="leading-8 text-gray-300">
                        으로 작성합니다.
                    </p>

                    <BlockMath math="ax^3-a(\alpha+\beta+\gamma)x^2+a(\alpha\beta+\beta\gamma+\gamma\alpha)x-a\alpha\beta\gamma=0" />

                </div>

                {/*------------------------------------------------*/}
                {/* 켤레무리근 */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        켤레무리근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        계수가 모두 유리수인 삼차방정식에서 한 근이 <InlineMath math="p+q\sqrt m" />이면
                        다른 한 근은 반드시 <InlineMath math="p-q\sqrt m" />입니다.
                    </p>

                    <BlockMath math="p+q\sqrt m\qquad\Longrightarrow\qquad p-q\sqrt m" />

                    <p className="mt-4 leading-8 text-gray-300">
                        이때 <InlineMath math="p,\ q" />는 유리수, <InlineMath math="q\ne0" />이고, <InlineMath math="\sqrt m" />은 무리수입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어 한 근이 <InlineMath math="3+\sqrt2" />이면
                            다른 한 근은 <InlineMath math="3-\sqrt2" />입니다.
                        </p>

                    </div>

                </div>
                {/*------------------------------------------------*/}
                {/* 켤레복소근 */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        켤레복소근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        계수가 모두 실수인 삼차방정식에서 한 근이 <InlineMath math="p+qi" />이면
                        다른 한 근은 반드시 <InlineMath math="p-qi" />입니다.
                    </p>

                    <BlockMath math="p+qi\qquad\Longrightarrow\qquad p-qi" />

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 실수계수 삼차방정식에서 허근은 항상 켤레를 이루어 나타납니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어 한 근이 <InlineMath math="2+i" />이면
                            다른 한 근은 <InlineMath math="2-i" />입니다.
                        </p>

                    </div>

                </div>

                {/*------------------------------------------------*/}
                {/* 예제1 */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        세 근이 <InlineMath math="1,\ 2,\ 3" />
                        인 삼차방정식을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <BlockMath math="(x-1)(x-2)(x-3)=0" />

                            <BlockMath math="=(x-1)(x^2-5x+6)=0" />

                            <BlockMath math="=x^3-6x^2+11x-6=0" />

                            <p className="font-semibold text-white">
                                따라서 구하는 삼차방정식은
                            </p>

                            <BlockMath math="x^3-6x^2+11x-6=0" />

                        </div>

                    </details>

                </div>

                {/*------------------------------------------------*/}
                {/* 예제2 */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수계수 삼차방정식의 한 근이 <InlineMath math="2+i" />,
                        다른 한 근이 <InlineMath math="1" />
                        일 때 삼차방정식을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                실수계수 삼차방정식에서 한 근이 <InlineMath math="2+i" />이므로
                                나머지 한 근은 켤레복소근인
                            </p>

                            <BlockMath math="2-i" />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 두 허근 <InlineMath math="2+i,\ 2-i" />를 근으로 하는
                                이차방정식을 먼저 작성합니다.
                            </p>

                            <BlockMath math="x^2-(\text{두 근의 합})x+(\text{두 근의 곱})=0" />

                            <BlockMath math="\text{두 근의 합}=(2+i)+(2-i)=4" />

                            <BlockMath math="\text{두 근의 곱}=(2+i)(2-i)=5" />

                            <BlockMath math="x^2-4x+5=0" />

                            <p>
                                여기에 나머지 한 근 <InlineMath math="1" />을 반영하면
                            </p>

                            <BlockMath math="(x-1)(x^2-4x+5)=0" />

                            <p>
                                이제 전개하면
                            </p>

                            <BlockMath math="x^3-4x^2+5x-x^2+4x-5=0" />

                            <BlockMath math="x^3-5x^2+9x-5=0" />

                            <p className="font-semibold text-white">
                                따라서 구하는 삼차방정식은
                            </p>

                            <BlockMath math="x^3-5x^2+9x-5=0" />

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="a,\ b" />가 실수일 때, 삼차방정식
                    </p>

                    <BlockMath math="x^3+ax^2+bx-2=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 한 근이 <InlineMath math="1+i" />이고, 나머지 두 근을 <InlineMath math="p,\ q" />라 한다.
                        이때 <InlineMath math="a+b+p+q" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 켤레근 성질 이용하기
                                </h4>

                                <p>
                                    방정식의 계수가 모두 실수이고 한 근이 <InlineMath math="1+i" />이므로
                                    다른 한 근은 켤레복소근인
                                </p>

                                <BlockMath math="1-i" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서 나머지 두 근 <InlineMath math="p,\ q" /> 중 하나는 <InlineMath math="1-i" />입니다.
                                </p>

                                <p>
                                    세 근을 <InlineMath math="1+i,\ 1-i,\ r" />
                                    이라고 놓습니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    나머지 한 근 구하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여 세 근의 곱은
                                </p>

                                <BlockMath math="-\frac{-2}{1}=2" />

                                <p>
                                    입니다.
                                </p>

                                <BlockMath math="(1+i)(1-i)r=2" />

                                <BlockMath math="2r=2" />

                                <BlockMath math="r=1" />

                                <p>
                                    따라서 세 근은
                                </p>

                                <BlockMath math="1+i,\quad 1-i,\quad 1" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    <InlineMath math="a+b+p+q" /> 구하기
                                </h4>

                                <p>
                                    세 근의 합은
                                </p>

                                <BlockMath math="(1+i)+(1-i)+1=3" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="-a=3" />

                                <BlockMath math="a=-3" />

                                <p>
                                    두 근씩의 곱의 합은
                                </p>

                                <BlockMath math="(1+i)(1-i)+(1+i)\cdot1+(1-i)\cdot1" />

                                <BlockMath math="=2+(1+i)+(1-i)" />

                                <BlockMath math="=4" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="b=4" />

                                <p>
                                    또한 나머지 두 근은 <InlineMath math="p,\ q" />이므로
                                </p>

                                <BlockMath math="p+q=(1-i)+1=2-i" />

                                <p>
                                    또는 순서에 따라 <InlineMath math="p+q=2-i" />입니다.
                                </p>

                                <BlockMath math="a+b+p+q=-3+4+(2-i)" />

                                <BlockMath math="=3-i" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="3-i" />
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />에 대한 사차방정식
                    </p>

                    <BlockMath math="x^4+ax^3+bx^2+cx+d=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 두 근이 <InlineMath math="1+\sqrt2 i,\ 3-i" />
                        일 때, 실수 <InlineMath math="a,\ b,\ c,\ d" />
                        의 합 <InlineMath math="a+b+c+d" />
                        를 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 켤레근으로 이차방정식 만들기
                                </h4>

                                <p>
                                    계수가 모두 실수이므로 <InlineMath math="1+\sqrt2 i" />가 근이면 <InlineMath math="1-\sqrt2 i" />도 근입니다.
                                </p>

                                <p>
                                    또한 <InlineMath math="3-i" />가 근이면 <InlineMath math="3+i" />도 근입니다.
                                </p>

                                <p>
                                    따라서 네 근은
                                </p>

                                <BlockMath math="1+\sqrt2 i,\quad 1-\sqrt2 i,\quad 3-i,\quad 3+i" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    먼저 <InlineMath math="1+\sqrt2 i,\ 1-\sqrt2 i" />
                                    를 두 근으로 하는 이차방정식을 만듭니다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=2" />

                                <BlockMath math="\text{두 근의 곱}=(1+\sqrt2 i)(1-\sqrt2 i)=1+2=3" />

                                <BlockMath math="x^2-2x+3=0" />

                                <hr className="border-white/10" />

                                <p>
                                    다음으로 <InlineMath math="3-i,\ 3+i" />
                                    를 두 근으로 하는 이차방정식을 만듭니다.
                                </p>

                                <BlockMath math="\text{두 근의 합}=6" />

                                <BlockMath math="\text{두 근의 곱}=(3-i)(3+i)=9+1=10" />

                                <BlockMath math="x^2-6x+10=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    사차방정식 만들기
                                </h4>

                                <p>
                                    따라서 구하는 사차방정식은
                                </p>

                                <BlockMath math="(x^2-2x+3)(x^2-6x+10)=0" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    전개하면
                                </p>

                                <BlockMath math="(x^2-2x+3)(x^2-6x+10)" />

                                <BlockMath math="=x^4-8x^3+25x^2-38x+30" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=-8,\quad b=25,\quad c=-38,\quad d=30" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="a+b+c+d=-8+25-38+30" />

                                <BlockMath math="=9" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="9" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차식 <InlineMath math="f(x)=x^3+ax^2+bx+c" />
                        가 다음 조건을 만족한다.
                    </p>

                    <div className="space-y-3 rounded-xl border border-white/15 p-5 text-gray-300">
                        <p>
                            (가) <InlineMath math="f(x)" />는 <InlineMath math="x-4" />로 나누어떨어진다.
                        </p>
                        <p>
                            (나) 삼차방정식 <InlineMath math="f(x)=0" />의 한 근이 <InlineMath math="2i" />이다.
                        </p>
                    </div>

                    <p className="mt-4 mb-4 leading-8 text-gray-300">
                        이때, 삼차방정식 <InlineMath math="f(2x)=0" />의 세 근의 곱을 구하여라.
                        <br />
                        (단, <InlineMath math="i=\sqrt{-1}" />이고, <InlineMath math="a,\ b,\ c" />는 실수이다.)
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 켤레근 성질 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="f(x)" />는 <InlineMath math="x-4" />로 나누어떨어지므로
                                    <InlineMath math="4" />는 <InlineMath math="f(x)=0" />의 근입니다.
                                </p>

                                <p>
                                    또한 <InlineMath math="a,\ b,\ c" />가 실수이고 한 근이 <InlineMath math="2i" />이므로, 켤레복소근인 <InlineMath math="-2i" />도 근입니다.
                                </p>

                                <p>
                                    따라서 <InlineMath math="f(x)=0" />의 세 근은
                                </p>

                                <BlockMath math="4,\quad 2i,\quad -2i" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="f(2x)=0" />의 근 구하기
                                </h4>

                                <p>
                                    <InlineMath math="f(2x)=0" />의 근을 각각 <InlineMath math="r" />이라 하면, <InlineMath math="2r" />은 <InlineMath math="f(x)=0" />의 근입니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="2r=4,\quad 2r=2i,\quad 2r=-2i" />

                                <p>
                                    이므로 <InlineMath math="f(2x)=0" />의 세 근은
                                </p>

                                <BlockMath math="2,\quad i,\quad -i" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    세 근의 곱은
                                </p>

                                <BlockMath math="2\cdot i\cdot(-i)" />

                                <BlockMath math="=2" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x" />의 삼차방정식
                    </p>

                    <BlockMath math="x^3-(3k+1)x+3k=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이 중근을 갖도록 하는 실수 <InlineMath math="k" />의 값을 모두 더하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 인수분해 후 중근 조건 이용하기
                                </h4>

                                <p>
                                    문자 <InlineMath math="k" />가 있는 식에서는 먼저 문자가 사라지는 값을 찾아봅니다. <InlineMath math="x=-1" />을 대입하면
                                </p>

                                <BlockMath math="(-1)^3-(3k+1)(-1)+3k" />

                                <BlockMath math="=-1+3k+1+3k" />

                                <BlockMath math="=6k" />

                                <p>
                                    이므로 항상 <InlineMath math="0" />이 되지는 않습니다.
                                    이번에는 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="1-(3k+1)+3k=0" />

                                <p>
                                    이므로 <InlineMath math="x-1" />을 인수로 갖습니다.
                                </p>

                                <BlockMath math="x^3-(3k+1)x+3k" />

                                <BlockMath math="=(x-1)(x^2+x-3k)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    중근이 생기는 경우
                                </h4>

                                <p>
                                    따라서 주어진 방정식은
                                </p>

                                <BlockMath math="(x-1)(x^2+x-3k)=0" />

                                <p>
                                    입니다. 중근이 생기는 경우는 두 가지입니다.
                                </p>

                                <p>
                                    첫째, <InlineMath math="x-1" />과 이차식이 같은 근 <InlineMath math="1" />을 가질 때입니다.
                                </p>

                                <BlockMath math="1^2+1-3k=0" />

                                <BlockMath math="2-3k=0" />

                                <BlockMath math="k=\frac23" />

                                <hr className="border-white/10" />

                                <p>
                                    둘째, 이차방정식 <InlineMath math="x^2+x-3k=0" />
                                    자체가 중근을 가질 때입니다.
                                </p>

                                <BlockMath math="D=1^2-4\cdot1\cdot(-3k)" />

                                <BlockMath math="=1+12k" />

                                <p>
                                    중근을 가지려면 <InlineMath math="D=0" />이므로
                                </p>

                                <BlockMath math="1+12k=0" />

                                <BlockMath math="k=-\frac1{12}" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 구하는 값은
                            </p>

                            <BlockMath math="\frac23+\left(-\frac1{12}\right)=\frac7{12}" />

                            <p className="font-semibold text-white">
                                입니다.
                            </p>
                        </div>
                    </details>
                </div>
                {/*------------------------------------------------*/}
                {/* 요약 */}
                {/*------------------------------------------------*/}

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="(x-\alpha)(x-\beta)(x-\gamma)=0" />

                    <BlockMath math="x^3-(\text{세 근의 합})x^2+(\text{두 근씩의 곱의 합})x-(\text{세 근의 곱})=0" />

                    <BlockMath math="p+q\sqrt m\Rightarrow p-q\sqrt m" />

                    <BlockMath math="p+qi\Rightarrow p-qi" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        유리계수에서는 켤레무리근, 실수계수에서는 켤레복소근을 함께 생각합니다.
                    </p>
                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-6 text-3xl font-bold">
                    2.40 <InlineMath math="n" />차 방정식의 근과 계수
                </h2>

                <p className="mb-8 leading-8 text-gray-300">
                    <InlineMath math="n" />차 방정식은 복소수 범위에서 중복을 포함하여 <InlineMath math="n" />개의 근을 가집니다. 이때 모든 근의 합과 모든 근의
                    곱은 계수만으로 바로 구할 수 있습니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-6 text-2xl font-bold">
                        <InlineMath math="n" />차 방정식의 근과 계수와의 관계
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="n" />차 방정식
                    </p>

                    <BlockMath math="ax^n+bx^{n-1}+\cdots+c=0 \qquad (a\ne0)" />

                    <p className="leading-8 text-gray-300">
                        의 <InlineMath math="n" />개의 근을 <InlineMath math="\alpha_1,\ \alpha_2,\ \alpha_3,\ \cdots,\ \alpha_n" />
                        이라고 하자.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        그러면 이 방정식은 다음과 같이 나타낼 수 있습니다.
                    </p>

                    <BlockMath math="a(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_n)=0" />

                    <p className="mt-5 leading-8 text-gray-300">
                        전개했을 때 <InlineMath math="x^{n-1}" />의 계수는 모든 근의 합에서
                        나오고, 상수항은 모든 근의 곱에서 나옵니다.
                    </p>

                    <BlockMath math="a(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_n)" />

                    <BlockMath math="=ax^n-a(\alpha_1+\alpha_2+\cdots+\alpha_n)x^{n-1}+\cdots+(-1)^n a\alpha_1\alpha_2\cdots\alpha_n" />

                    <p className="mt-5 leading-8 text-gray-300">
                        이것이 <InlineMath math="ax^n+bx^{n-1}+\cdots+c=0" />와 같으므로 계수를
                        비교하면
                    </p>

                    <BlockMath math="-a(\alpha_1+\alpha_2+\cdots+\alpha_n)=b" />

                    <BlockMath math="(-1)^n a\alpha_1\alpha_2\cdots\alpha_n=c" />

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\alpha_1+\alpha_2+\cdots+\alpha_n=-\frac{b}{a}" />

                    <BlockMath math="\alpha_1\alpha_2\cdots\alpha_n=(-1)^n\frac{c}{a}" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^{1999}-3x+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 <InlineMath math="x_1,x_2,\cdots,x_{1999}" />
                        라 할 때,
                    </p>

                    <BlockMath math="x_1^{1999}+x_2^{1999}+\cdots+x_{1999}^{1999}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 방정식 이용하기
                                </h4>

                                <p>
                                    모든 근은
                                </p>

                                <BlockMath math="x^{1999}-3x+1=0" />

                                <p>
                                    을 만족하므로
                                </p>

                                <BlockMath math="x^{1999}=3x-1" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x_1^{1999}=3x_1-1" />

                                <BlockMath math="x_2^{1999}=3x_2-1" />

                                <BlockMath math="\qquad\vdots" />

                                <BlockMath math="x_{1999}^{1999}=3x_{1999}-1" />

                                <p>
                                    입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    모두 더하기
                                </h4>

                                <p>
                                    위 식들을 모두 더하면
                                </p>

                                <BlockMath math="x_1^{1999}+x_2^{1999}+\cdots+x_{1999}^{1999}" />

                                <BlockMath math="=3(x_1+x_2+\cdots+x_{1999})-1999" />

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="x_1+x_2+\cdots+x_{1999}=0" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x_1^{1999}+x_2^{1999}+\cdots+x_{1999}^{1999}" />

                                <BlockMath math="=3\cdot0-1999" />

                                <BlockMath math="=-1999" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1999" />
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^{21}=-1" />
                        은 1개의 실근과 20개의 허근을 갖는다.
                        이 허근을 <InlineMath math="\omega_1,\omega_2,\omega_3,\cdots,\omega_{20}" />
                        이라 할 때,
                    </p>

                    <BlockMath math="(1-\omega_1)(1-\omega_2)(1-\omega_3)\cdots(1-\omega_{20})" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 방정식의 모든 근 이용하기
                                </h4>

                                <p>
                                    주어진 방정식은
                                </p>

                                <BlockMath math="x^{21}+1=0" />

                                <p>
                                    입니다.
                                    이 방정식의 실근은 <InlineMath math="-1" />입니다.
                                </p>

                                <p>
                                    따라서 모든 근을 이용하여 좌변을 인수분해하면
                                </p>

                                <BlockMath math="x^{21}+1=(x+1)(x-\omega_1)(x-\omega_2)\cdots(x-\omega_{20})" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="x=1" /> 대입하기
                                </h4>

                                <p>
                                    양변에 <InlineMath math="x=1" />을 대입합니다.
                                </p>

                                <BlockMath math="1^{21}+1=(1+1)(1-\omega_1)(1-\omega_2)\cdots(1-\omega_{20})" />

                                <BlockMath math="2=2(1-\omega_1)(1-\omega_2)\cdots(1-\omega_{20})" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(1-\omega_1)(1-\omega_2)\cdots(1-\omega_{20})=1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        정리
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        <InlineMath math="n" />차 방정식 <InlineMath math="ax^n+bx^{n-1}+\cdots+c=0" />의 <InlineMath math="n" />개의 근이 <InlineMath math="\alpha_1,\alpha_2,\cdots,\alpha_n" />일 때
                    </p>

                    <div className="mt-5 space-y-5">
                        <BlockMath math="\alpha_1+\alpha_2+\cdots+\alpha_n=-\frac{b}{a}  \qquad  \text{모든 근의 합}=-\frac{(n-1)\text{차 계수}}{n\text{차 계수}}" />
                    </div>

                    <div>
                        <BlockMath math="\alpha_1\alpha_2\cdots\alpha_n=(-1)^n\frac{c}{a}  \qquad  \text{모든 근의 곱}=(-1)^n\frac{\text{상수항}}{n\text{차 계수}}" />
                    </div>
                </div>


                <details className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <summary className="cursor-pointer text-lg font-semibold text-blue-300">
                        참고 : 부호가 왜 <InlineMath math="(-1)^n" />일까?
                    </summary>

                    <div className="mt-5 space-y-5 leading-8 text-gray-300">
                        <p>
                            상수항은 각 괄호에서 상수 부분만 곱할 때 만들어집니다.
                        </p>

                        <BlockMath math="(x-\alpha_1)(x-\alpha_2)\cdots(x-\alpha_n)" />

                        <p>
                            따라서 상수항은
                        </p>

                        <BlockMath math="(-\alpha_1)(-\alpha_2)\cdots(-\alpha_n)" />

                        <p>
                            이고, 음수가 <InlineMath math="n" />번 곱해지므로
                        </p>

                        <BlockMath math="(-\alpha_1)(-\alpha_2)\cdots(-\alpha_n)=(-1)^n\alpha_1\alpha_2\cdots\alpha_n" />

                        <p>
                            가 됩니다.
                        </p>
                    </div>
                </details>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.41 <InlineMath math="x^3-1=0" />의 한 허근 <InlineMath math="\omega" />
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    삼차방정식 <InlineMath math="x^3-1=0" />의 한 허근을 <InlineMath math="\omega" />라 하면, <InlineMath math="\omega" />는 여러 가지 중요한 성질을 가집니다.
                    이 성질들은 고차방정식과 복소수 문제에서 자주 사용됩니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        기본 성질
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega" />는 <InlineMath math="x^3-1=0" />의 허근이므로
                    </p>

                    <BlockMath math="\omega^3-1=0" />

                    <BlockMath math="\omega^3=1" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-bold text-yellow-300">
                            정리
                        </h4>

                        <BlockMath math="\omega^3=1" />

                        <BlockMath math="\omega^{3k}=1" />

                        <BlockMath math="\omega^{3k+1}=\omega" />

                        <BlockMath math="\omega^{3k+2}=\omega^2" />

                        <p className="mt-4 leading-8 text-gray-300">
                            즉, 지수를 3으로 나눈 나머지에 따라 값이 반복됩니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        지수의 반복
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega^3=1" />이므로 지수가 3의 배수이면 값은 <InlineMath math="1" />입니다.
                    </p>

                    <BlockMath math="\omega^{30}=(\omega^3)^{10}=1" />

                    <p className="leading-8 text-gray-300">
                        또한 역수도 지수의 반복을 이용하여 정리할 수 있습니다.
                    </p>

                    <BlockMath math="\frac1{\omega^{29}}=\frac{\omega^{30}}{\omega^{29}}=\omega" />

                    <BlockMath math="\frac1{\omega^{43}}=\frac{\omega^{45}}{\omega^{43}}=\omega^2" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식으로 보기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3-1" />을 인수분해하면
                    </p>

                    <BlockMath math="x^3-1=(x-1)(x^2+x+1)" />

                    <p className="leading-8 text-gray-300">
                        입니다. 그런데 <InlineMath math="\omega" />는 허근이므로 <InlineMath math="x=1" />이 아닙니다.
                        따라서 <InlineMath math="\omega" />는 <InlineMath math="x^2+x+1=0" />의 근입니다.
                    </p>

                    <BlockMath math="\omega^2+\omega+1=0" />

                    <BlockMath math="\omega^2=-\omega-1" />
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        켤레복소근과 역수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^2+x+1=0" />의 두 근은 <InlineMath math="\omega" />와 그 켤레복소수 <InlineMath math="\overline{\omega}" />입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        근과 계수와의 관계에 의하여
                    </p>

                    <BlockMath math="\omega+\overline{\omega}=-1" />

                    <BlockMath math="\omega\overline{\omega}=1" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\overline{\omega}=\frac1\omega" />

                    <BlockMath math="\omega+\frac1\omega=-1" />

                    <p className="leading-8 text-gray-300">
                        또한 <InlineMath math="\omega^3=1" />이므로
                    </p>

                    <BlockMath math="\frac1\omega=\omega^2" />

                    <BlockMath math="\overline{\omega}=\omega^2" />
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        연속된 세 지수의 합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega^2+\omega+1=0" />의 양변에 <InlineMath math="\omega^n" />을 곱하면
                    </p>

                    <BlockMath math="\omega^{n+2}+\omega^{n+1}+\omega^n=0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        즉, 지수가 연속된 세 항의 합은 항상 <InlineMath math="0" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차식으로 정리하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega^2=-\omega-1" />이므로 <InlineMath math="\omega" />로 이루어진 식은 항상 <InlineMath math="p\omega+q" /> 꼴로 정리할 수 있습니다.
                    </p>

                    <BlockMath math="\omega^2=-\omega-1" />

                    <BlockMath math="\omega^4=\omega\cdot\omega^3=\omega" />

                    <BlockMath math="\omega^5=\omega^2=-\omega-1" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^3=1" />의 한 허근을 <InlineMath math="\omega" />라 할 때, <InlineMath math="\omega^{100}+\omega^{50}+1" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 지수의 반복 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega" />는 <InlineMath math="x^3=1" />의 허근이므로
                                </p>

                                <BlockMath math="\omega^3=1" />

                                <p>
                                    입니다. 따라서 지수를 <InlineMath math="3" />으로 나눈 나머지를 이용합니다.
                                </p>

                                <BlockMath math="100=3\cdot33+1" />

                                <BlockMath math="\omega^{100}=\omega" />

                                <BlockMath math="50=3\cdot16+2" />

                                <BlockMath math="\omega^{50}=\omega^2" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="\omega^{100}+\omega^{50}+1=\omega+\omega^2+1" />

                                <p>
                                    그런데 <InlineMath math="\omega" />는 <InlineMath math="x^2+x+1=0" />의 근이므로
                                </p>

                                <BlockMath math="\omega^2+\omega+1=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식 <InlineMath math="x^2+x+1=0" />의 한 근을 <InlineMath math="\omega" />라 할 때,
                    </p>

                    <BlockMath math="1+\omega+\omega^2+\omega^3+\cdots+\omega^{2107}+\omega^{2108}=a+b\omega" />

                    <p className="mb-4 leading-8 text-gray-300">
                        가 된다. <InlineMath math="a+b" />의 값을 구하여라.
                        단, <InlineMath math="a,\ b" />는 실수이다.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 세 항씩 묶기
                                </h4>

                                <p>
                                    <InlineMath math="\omega" />는 <InlineMath math="x^2+x+1=0" />의 근이므로
                                </p>

                                <BlockMath math="\omega^2+\omega+1=0" />

                                <p>
                                    입니다. 따라서
                                </p>

                                <BlockMath math="1+\omega+\omega^2=0" />

                                <p>
                                    이고, 양변에 <InlineMath math="\omega^n" />을 곱하면
                                </p>

                                <BlockMath math="\omega^n+\omega^{n+1}+\omega^{n+2}=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    남는 항 계산하기
                                </h4>

                                <p>
                                    주어진 식은
                                </p>

                                <BlockMath math="1+\omega+\omega^2+\omega^3+\cdots+\omega^{2107}+\omega^{2108}" />

                                <p>
                                    입니다.
                                    지수가 <InlineMath math="0" />부터 <InlineMath math="2108" />까지 있으므로
                                    항의 개수는 <InlineMath math="2109" />개입니다.
                                </p>

                                <p>
                                    세 항씩 묶으면
                                </p>

                                <BlockMath math="(1+\omega+\omega^2)+(\omega^3+\omega^4+\omega^5)+\cdots+(\omega^{2106}+\omega^{2107}+\omega^{2108})" />

                                <BlockMath math="=0+0+\cdots+0" />

                                <BlockMath math="=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a+b\omega=0" />

                                <BlockMath math="a=0,\qquad b=0" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x^2+x+1=0" />의 한 허근을 <InlineMath math="\omega" />라 할 때,
                        다음 식의 값을 구하여라.
                    </p>

                    <BlockMath math="\frac{\omega^{101}}{1+\omega^{100}}+\frac{\omega^{100}}{1+\omega^{101}}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 지수의 반복 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^3=1" />이므로 지수를 <InlineMath math="3" />으로 나눈 나머지를 이용합니다.
                                </p>

                                <BlockMath math="101=3\cdot33+2" />
                                <BlockMath math="\omega^{101}=\omega^2" />

                                <BlockMath math="100=3\cdot33+1" />
                                <BlockMath math="\omega^{100}=\omega" />

                                <p>
                                    따라서 주어진 식은
                                </p>

                                <BlockMath math="\frac{\omega^2}{1+\omega}+\frac{\omega}{1+\omega^2}" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="\omega^2+\omega+1=0" /> 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^2+\omega+1=0" />에서
                                </p>

                                <BlockMath math="1+\omega=-\omega^2" />

                                <BlockMath math="1+\omega^2=-\omega" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac{\omega^2}{1+\omega}+\frac{\omega}{1+\omega^2}" />

                                <BlockMath math="=\frac{\omega^2}{-\omega^2}+\frac{\omega}{-\omega}" />

                                <BlockMath math="-1-1" />

                                <BlockMath math="-2" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^3=1" />의 허근의 하나를 <InlineMath math="\omega" />라 할 때,
                    </p>

                    <BlockMath math="1+2\omega+3\omega^2+4\omega^3+5\omega^4+6\omega^5+7\omega^6" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 <InlineMath math="a+b\omega" />
                        의 꼴로 나타낼 때, <InlineMath math="a+b" />의 값을 구하여라.
                        단, <InlineMath math="a,\ b" />는 실수이다.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 지수의 반복 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^3=1" />이므로 거듭제곱은 <InlineMath math="1,\ \omega,\ \omega^2" />가 반복됩니다.
                                </p>

                                <BlockMath math="\omega^3=1,\quad \omega^4=\omega,\quad \omega^5=\omega^2,\quad \omega^6=1" />

                                <p>
                                    따라서 주어진 식은
                                </p>

                                <BlockMath math="1+2\omega+3\omega^2+4+5\omega+6\omega^2+7" />

                                <BlockMath math="=12+7\omega+9\omega^2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="a+b\omega" /> 꼴로 정리하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^2+\omega+1=0" />이므로
                                </p>

                                <BlockMath math="\omega^2=-\omega-1" />

                                <p>
                                    입니다. 따라서
                                </p>

                                <BlockMath math="12+7\omega+9\omega^2" />

                                <BlockMath math="=12+7\omega+9(-\omega-1)" />

                                <BlockMath math="=3-2\omega" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="a=3,\qquad b=-2" />

                                <BlockMath math="a+b=1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        이차방정식 <InlineMath math="x^2+x+1=0" />
                        의 한 근을 <InlineMath math="\omega" />
                        라 할 때,
                    </p>

                    <BlockMath math="\frac{1}{\omega^3+3\omega^2+4\omega+3}=a\omega+b" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족시키는 실수 <InlineMath math="a,\ b" />
                        에 대하여 <InlineMath math="a+b" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 분모를 일차식으로 정리하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^3=1,\ \omega^2=-\omega-1" />
                                    이므로
                                </p>

                                <BlockMath math="\omega^3+3\omega^2+4\omega+3" />

                                <BlockMath math="=1+3(-\omega-1)+4\omega+3" />

                                <BlockMath math="\omega+1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\frac1{\omega^3+3\omega^2+4\omega+3}=\frac1{1+\omega}" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    역수 구하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^2+\omega+1=0" />
                                    에서
                                </p>

                                <BlockMath math="1+\omega=-\omega^2" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac1{1+\omega}=-\frac1{\omega^2}" />

                                <p>
                                    또한
                                </p>

                                <BlockMath math="\frac1{\omega^2}=\omega" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac1{1+\omega}=-\omega" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=-1,\qquad b=0" />

                                <BlockMath math="a+b=-1" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />
                                입니다.
                            </p>

                        </div>

                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        양의 정수 <InlineMath math="a,\ b,\ c" />가 <InlineMath math="a^3+b^3+c^3-3abc=0" />을 만족시킨다. <InlineMath math="x" />에 대한 방정식 <InlineMath math="ax^2+bx+c=0" />의 한 근을 <InlineMath math="\alpha" />라 할 때, <InlineMath math="\alpha^{100}+\alpha^{101}" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 조건식 이용하기
                                </h4>

                                <p>
                                    앞에서 배운 공식에 의하여
                                </p>

                                <BlockMath math="a^3+b^3+c^3-3abc=0" />

                                <p>
                                    이고 <InlineMath math="a,\ b,\ c" />가 양의 정수이므로
                                </p>

                                <BlockMath math="a=b=c" />

                                <p>
                                    입니다. 따라서 주어진 방정식은
                                </p>

                                <BlockMath math="ax^2+ax+a=0" />

                                <p>
                                    이고, 양변을 <InlineMath math="a" />로 나누면
                                </p>

                                <BlockMath math="x^2+x+1=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="\alpha" />의 성질 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha" />는 <InlineMath math="x^2+x+1=0" />의 근이므로
                                </p>

                                <BlockMath math="\alpha^2+\alpha+1=0" />

                                <BlockMath math="\alpha^3=1" />

                                <p>
                                    입니다.
                                </p>

                                <BlockMath math="\alpha^{100}=\alpha" />

                                <BlockMath math="\alpha^{101}=\alpha^2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha^{100}+\alpha^{101}=\alpha+\alpha^2" />

                                <BlockMath math="-1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^2+x+1=0" />의 한 근을
                        <InlineMath math="\omega" />라 하고,
                    </p>

                    <BlockMath math="z=\frac{\omega+1}{2\omega+1}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이라 할 때, <InlineMath math="z\overline z" />의 값을 구하여라.
                        단, <InlineMath math="\overline z" />는 <InlineMath math="z" />의 켤레복소수이다.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : <InlineMath math="\overline{\omega}=\omega^2" /> 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega" />는 <InlineMath math="x^2+x+1=0" />의 한 근이므로
                                </p>

                                <BlockMath math="\omega^2+\omega+1=0" />

                                <BlockMath math="\overline{\omega}=\omega^2" />

                                <p>
                                    입니다. 따라서
                                </p>

                                <BlockMath math="\overline z=\frac{\omega^2+1}{2\omega^2+1}" />

                                <p>
                                    입니다.
                                </p>

                                <BlockMath math="z\overline z=\frac{\omega+1}{2\omega+1}\cdot\frac{\omega^2+1}{2\omega^2+1}" />

                                <BlockMath math="=\frac{(\omega+1)(\omega^2+1)}{(2\omega+1)(2\omega^2+1)}" />

                                <p>
                                    분자를 계산하면
                                </p>

                                <BlockMath math="(\omega+1)(\omega^2+1)" />

                                <BlockMath math="=\omega^3+\omega^2+\omega+1" />

                                <BlockMath math="=1+(\omega^2+\omega)+1" />

                                <BlockMath math="=1-1+1=1" />

                                <p>
                                    분모를 계산하면
                                </p>

                                <BlockMath math="(2\omega+1)(2\omega^2+1)" />

                                <BlockMath math="=4\omega^3+2\omega+2\omega^2+1" />

                                <BlockMath math="=4+2(\omega+\omega^2)+1" />

                                <BlockMath math="=4+2(-1)+1=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="z\overline z=\frac13" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 근과 계수와의 관계 이용하기
                                </h4>

                                <p>
                                    켤레복소수의 성질에 의하여
                                </p>

                                <BlockMath math="\overline z=\frac{\overline{\omega}+1}{2\overline{\omega}+1}" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="z\overline z=\frac{\omega+1}{2\omega+1}\cdot\frac{\overline{\omega}+1}{2\overline{\omega}+1}" />

                                <BlockMath math="=\frac{(\omega+1)(\overline{\omega}+1)}{(2\omega+1)(2\overline{\omega}+1)}" />

                                <p>
                                    분자를 정리하면
                                </p>

                                <BlockMath math="(\omega+1)(\overline{\omega}+1)" />

                                <BlockMath math="=\omega\overline{\omega}+\omega+\overline{\omega}+1" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    <InlineMath math="\omega,\ \overline{\omega}" />는 <InlineMath math="x^2+x+1=0" />의 두 근이므로
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\omega+\overline{\omega}=-1" />

                                <BlockMath math="\omega\overline{\omega}=1" />

                                <p>
                                    따라서 분자는
                                </p>

                                <BlockMath math="1+(-1)+1=1" />

                                <hr className="border-white/10" />

                                <p>
                                    분모를 정리하면
                                </p>

                                <BlockMath math="(2\omega+1)(2\overline{\omega}+1)" />

                                <BlockMath math="=4\omega\overline{\omega}+2\omega+2\overline{\omega}+1" />

                                <BlockMath math="=4\omega\overline{\omega}+2(\omega+\overline{\omega})+1" />

                                <p>
                                    근과 계수와의 관계를 이용하면
                                </p>

                                <BlockMath math="=4\cdot1+2(-1)+1" />

                                <BlockMath math="=3" />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath math="z\overline z=\frac13" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="\displaystyle \frac13" />
                                입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 8
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x^3=1" />의 한 허근을 <InlineMath math="\omega" />라 하고,
                    </p>

                    <BlockMath math="f(x)=\frac1{1+x}" />
                    <p>
                        라 할 때, <InlineMath math="f(0)+f(\omega)+f(\omega^2)" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 각각 대입하기
                                </h4>

                                <BlockMath math="f(0)=\frac1{1+0}=1" />

                                <BlockMath math="f(\omega)=\frac1{1+\omega}" />

                                <BlockMath math="f(\omega^2)=\frac1{1+\omega^2}" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="f(0)+f(\omega)+f(\omega^2)" />

                                <BlockMath math="=1+\frac1{1+\omega}+\frac1{1+\omega^2}" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="\omega^2+\omega+1=0" /> 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^2+\omega+1=0" />에서
                                </p>

                                <BlockMath math="1+\omega=-\omega^2" />

                                <BlockMath math="1+\omega^2=-\omega" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac1{1+\omega}=-\frac1{\omega^2}" />

                                <BlockMath math="-\frac1{\omega^2}=-\omega" />

                                <BlockMath math="\frac1{1+\omega^2}=-\frac1{\omega}" />

                                <BlockMath math="-\frac1{\omega}=-\omega^2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="1+\frac1{1+\omega}+\frac1{1+\omega^2}" />

                                <BlockMath math="=1-\omega-\omega^2" />

                                <p>
                                    그런데 <InlineMath math="\omega+\omega^2=-1" />이므로
                                </p>

                                <BlockMath math="1-\omega-\omega^2=1-(\omega+\omega^2)" />

                                <BlockMath math="=1-(-1)" />

                                <BlockMath math="=2" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        삼차방정식 <InlineMath math="x^3=1" />의 한 허근을 <InlineMath math="\omega" />라 하고, 양의 정수 <InlineMath math="n" />에 대하여
                    </p>

                    <BlockMath math="f(n)=\frac{\omega^n}{1+\omega^{2n}}" />

                    <p className="mb-4 leading-8 text-gray-300">
                        이라 정의할 때, <InlineMath math="f(1)-f(2)+f(3)-f(4)+\cdots+f(13)" />
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 주기 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega^3=1" />이므로 <InlineMath math="f(n)" />의 값은 <InlineMath math="n" />을 3으로 나눈 나머지에 따라 반복됩니다.
                                </p>

                                <BlockMath math="f(1)=\frac{\omega}{1+\omega^2}" />
                                <BlockMath math="=\frac{\omega}{-\omega}" />
                                <BlockMath math="-1" />

                                <hr className="border-white/10" />

                                <BlockMath math="f(2)=\frac{\omega^2}{1+\omega^4}" />
                                <BlockMath math="=\frac{\omega^2}{1+\omega}" />
                                <BlockMath math="=\frac{\omega^2}{-\omega^2}" />
                                <BlockMath math="-1" />

                                <hr className="border-white/10" />

                                <BlockMath math="f(3)=\frac{\omega^3}{1+\omega^6}" />
                                <BlockMath math="=\frac{1}{1+1}" />
                                <BlockMath math="\frac12" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    반복되는 값 정리하기
                                </h4>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="f(1),\ f(2),\ f(3)=-1,\ -1,\ \frac12" />

                                <p>
                                    이 세 값이 반복됩니다.
                                </p>

                                <BlockMath math="f(1)-f(2)+f(3)-f(4)+f(5)-f(6)" />
                                <BlockMath math="=-1-(-1)+\frac12-(-1)+(-1)-\frac12" />
                                <BlockMath math="=0" />

                                <p>
                                    같은 방식으로
                                </p>

                                <BlockMath math="f(7)-f(8)+f(9)-f(10)+f(11)-f(12)=0" />

                                <p>
                                    이고, 마지막으로
                                </p>

                                <BlockMath math="f(13)=f(1)=-1" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^3=1" />의 두 허근을 <InlineMath math="\alpha,\ \beta" />라 한다.
                    </p>

                    <p className="mb-4 leading-8 text-gray-300">
                        이때,
                    </p>

                    <BlockMath math="2(\alpha^4+\alpha^3+\alpha^2+\alpha)+2(\beta^4+\beta^3+\beta^2+\beta)" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 거듭제곱 정리하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="x^3=1" />의 두 허근이므로
                                </p>

                                <BlockMath math="\alpha^3=\beta^3=1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha^4=\alpha,\qquad \beta^4=\beta" />

                                <p>
                                    이므로 주어진 식은
                                </p>

                                <BlockMath math="2(2\alpha+\alpha^2+1)+2(2\beta+\beta^2+1)" />

                                <BlockMath math="=4(\alpha+\beta)+2(\alpha^2+\beta^2)+4" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    근과 계수와의 관계 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="x^2+x+1=0" />의 두 근이므로
                                </p>

                                <BlockMath math="\alpha+\beta=-1,\qquad \alpha\beta=1" />

                                <p>
                                    또한
                                </p>

                                <BlockMath math="\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta" />

                                <BlockMath math="=(-1)^2-2\cdot1=-1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="4(\alpha+\beta)+2(\alpha^2+\beta^2)+4" />

                                <BlockMath math="=4(-1)+2(-1)+4" />

                                <BlockMath math="=-2" />

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^2+x+1=0" />
                        의 두 근을 <InlineMath math="\alpha,\ \beta" />
                        라 할 때,
                    </p>

                    <BlockMath math="\alpha^n+\beta^n" />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 서로 다른 값의 개수를 구하여라.
                        (<InlineMath math="n" />은 자연수)
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 지수의 반복 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="x^2+x+1=0" />의 두 근이므로
                                </p>

                                <BlockMath math="\alpha^3=\beta^3=1" />

                                <p>
                                    입니다.
                                    따라서 지수를 3으로 나눈 나머지에 따라 값이 반복됩니다.
                                </p>

                                <BlockMath math="\begin{aligned}
                                    \text{3으로 나눈 나머지가 1인 경우}&:\ \alpha^n+\beta^n=\alpha+\beta=-1\\[4pt]
                                    \text{3으로 나눈 나머지가 2인 경우}&:\ \alpha^n+\beta^n=\alpha^2+\beta^2\\[4pt]
                                    \text{3의 배수인 경우}&:\ \alpha^n+\beta^n=1+1=2
                                    \end{aligned}" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    값 구하기
                                </h4>

                                <p>
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\beta=-1,\qquad \alpha\beta=1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha^2+\beta^2=(\alpha+\beta)^2-2\alpha\beta" />

                                <BlockMath math="=(-1)^2-2=-1" />

                                <p>
                                    결국
                                </p>

                                <BlockMath math="\alpha^n+\beta^n=-1,\ -1,\ 2" />

                                <p>
                                    이 반복되므로 서로 다른 값은
                                </p>

                                <BlockMath math="-1,\ 2" />

                                <p>
                                    두 개입니다.
                                </p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />
                                입니다.
                            </p>

                        </div>

                    </details>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 12
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x^3-1=0" />의 한 허근을 <InlineMath math="\omega" />라 할 때, 다음 보기 중 옳은 것의 개수를 구하여라.
                        (단, <InlineMath math="\overline{\omega}" />는 <InlineMath math="\omega" />의 켤레복소수이다.)
                    </p>

                    <div className="rounded-xl border border-white/15 bg-black/30 p-6">
                        <p className="mb-3 text-center font-semibold text-white">
                            &lt; 보기 &gt;
                        </p>

                        <div className="space-y-3 text-gray-300">
                            <p>ㄱ. <InlineMath math="\displaystyle \omega+\frac1{\omega}=-1" /></p>

                            <p>ㄴ. <InlineMath math="\omega^2" />도 <InlineMath math="x^3-1=0" />의 근이다.</p>

                            <p>ㄷ. <InlineMath math="\omega+\overline{\omega}=-1" /></p>

                            <p>ㄹ. <InlineMath math="\omega^2=\overline{\omega}" /></p>

                            <p>ㅁ. <InlineMath math="\displaystyle \overline{\omega}=\frac1{\omega}" /></p>
                        </div>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    각 보기 판단하기
                                </h4>

                                <p>
                                    <InlineMath math="\omega" />는 <InlineMath math="x^2+x+1=0" />의 근이므로
                                </p>

                                <BlockMath math="\omega+\frac1{\omega}=-1" />

                                <BlockMath math="\overline{\omega}=\frac1{\omega}=\omega^2" />

                                <p>
                                    또한 <InlineMath math="\omega^2" />도 <InlineMath math="x^3-1=0" />의 허근입니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <p>ㄱ. ○</p>

                                <p>ㄴ. ○</p>

                                <p>ㄷ. ○</p>

                                <p>ㄹ. ○</p>

                                <p>ㅁ. ○</p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 옳은 것은 모두 <InlineMath math="5" />개입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 13
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">

                        0이 아닌 세 실수 <InlineMath math="a,\ b,\ c" />가
                    </p>
                    <BlockMath math="\frac ba=\frac cb=\frac ac" />
                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족할 때,
                        이차방정식 <InlineMath math="ax^2+bx+c=0" />의 한 근을
                        복소수 <InlineMath math="\alpha" />라 하자.
                        다음 보기 중 옳은 것을 모두 고른 것은?
                        단, <InlineMath math="a+b+c\ne0" />이고, <InlineMath math="\overline{\alpha}" />는 <InlineMath math="\alpha" />의 켤레복소수이다.
                    </p>

                    <div className="rounded-xl border border-white/15 bg-black/30 p-6">
                        <p className="mb-3 text-center font-semibold text-white">
                            &lt; 보기 &gt;
                        </p>

                        <div className="grid gap-3 text-gray-300 sm:grid-cols-2">
                            <p>ㄱ. <InlineMath math="\alpha+\overline{\alpha}=-1" /></p>
                            <p>ㄴ. <InlineMath math="\displaystyle \overline{\alpha}=\frac1\alpha" /></p>
                            <p>ㄷ. <InlineMath math="\alpha^2+\alpha+1=0" /></p>
                            <p>ㄹ. <InlineMath math="\alpha^2=\overline{\alpha}" /></p>
                        </div>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 주어진 조건 정리하기
                                </h4>

                                <p>
                                    공통비를 <InlineMath math="k" />라 하면
                                </p>

                                <BlockMath math="\frac ba=\frac cb=\frac ac=k" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="b=ak,\qquad c=bk=ak^2,\qquad a=ck=ak^3" />

                                <p>
                                    그런데 <InlineMath math="a\ne0" />이므로
                                </p>

                                <BlockMath math="k^3=1" />

                                <p>
                                    입니다. <InlineMath math="k" />는 실수이므로
                                </p>

                                <BlockMath math="k=1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=b=c" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    이차방정식 정리하기
                                </h4>

                                <p>
                                    <InlineMath math="a=b=c" />이므로 주어진 이차방정식은
                                </p>

                                <BlockMath math="ax^2+ax+a=0" />

                                <p>
                                    입니다. <InlineMath math="a\ne0" />이므로 양변을 <InlineMath math="a" />로 나누면
                                </p>

                                <BlockMath math="x^2+x+1=0" />

                                <p>
                                    따라서 <InlineMath math="\alpha" />는 <InlineMath math="x^2+x+1=0" />의 한 근입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    보기 판단하기
                                </h4>

                                <p>
                                    <InlineMath math="x^2+x+1=0" />의 두 근은 <InlineMath math="\alpha,\ \overline{\alpha}" />입니다.
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math="\alpha+\overline{\alpha}=-1" />

                                <BlockMath math="\alpha\overline{\alpha}=1" />

                                <p>
                                    따라서 ㄱ, ㄴ은 옳습니다.
                                </p>

                                <p>
                                    또한 <InlineMath math="\alpha" />는 <InlineMath math="x^2+x+1=0" />의 근이므로
                                </p>

                                <BlockMath math="\alpha^2+\alpha+1=0" />

                                <p>
                                    이 되어 ㄷ도 옳습니다.
                                </p>

                                <p>
                                    그리고
                                </p>

                                <BlockMath math="\alpha\overline{\alpha}=1" />

                                <BlockMath math="\overline{\alpha}=\frac1\alpha" />

                                <BlockMath math="\frac1\alpha=\alpha^2" />

                                <p>
                                    이므로 ㄹ도 옳습니다.
                                </p>
                            </div>

                            <p className="font-semibold text-white">
                                따라서 옳은 것은 ㄱ, ㄴ, ㄷ, ㄹ입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 14
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식 <InlineMath math="x^3=1" />의 한 허근을 <InlineMath math="\omega" />라 할 때,
                        다음 보기 중 옳은 것을 모두 고르시오.
                    </p>

                    <div className="rounded-xl border border-white/15 bg-black/30 p-6">
                        <p className="mb-3 text-center font-semibold text-white">
                            &lt; 보기 &gt;
                        </p>

                        <div className="space-y-3 text-gray-300">
                            <p>ㄱ. <InlineMath math="(1+\omega)^2=\omega" /></p>

                            <p>ㄴ. <InlineMath math="(1+\omega)^{10}=-\omega^2" /></p>

                            <p>
                                ㄷ. 모든 자연수 <InlineMath math="n" />에 대하여 <InlineMath math="(1+\omega)^{3n}=(-1)^n" />
                            </p>
                        </div>
                    </div>

                    <details className="mt-6 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-bold text-blue-300">
                                    먼저 <InlineMath math="1+\omega" />를 정리한다.
                                </h4>

                                <p>
                                    <InlineMath math="\omega^2+\omega+1=0" />이므로
                                </p>

                                <BlockMath math="1+\omega=-\omega^2" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 font-bold text-green-300">
                                    보기 판단하기
                                </h4>

                                <p>
                                    ㄱ.
                                </p>

                                <BlockMath math="(1+\omega)^2=(-\omega^2)^2=\omega^4=\omega" />

                                <p>
                                    따라서 ○
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ㄴ.
                                </p>

                                <BlockMath math="(1+\omega)^{10}=(-\omega^2)^{10}=\omega^{20}" />

                                <BlockMath math="\omega^{20}=\omega^2" />

                                <p>
                                    <InlineMath math="-\omega^2" />가 아니므로 ×
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ㄷ.
                                </p>

                                <BlockMath math="(1+\omega)^{3n}=(-\omega^2)^{3n}" />

                                <BlockMath math="=(-1)^{3n}(\omega^2)^{3n}" />

                                <BlockMath math="=(-1)^n(\omega^3)^{2n}" />

                                <BlockMath math="=(-1)^n" />

                                <p>
                                    따라서 ○
                                </p>

                            </div>

                            <p className="font-semibold text-white">
                                따라서 옳은 것은 <strong>ㄱ, ㄷ</strong>입니다.
                            </p>

                        </div>

                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="\omega^3=1" />

                    <BlockMath math="\omega^{3\text{의 배수}}=1" />

                    <BlockMath math="\omega^{3\text{의 배수가 아닌 수}}=\omega^{3\text{으로 나눈 나머지}}" />

                    <BlockMath math="\omega^2+\omega+1=0" />

                    <BlockMath math="\omega^2=-\omega-1" />

                    <BlockMath math="\overline{\omega}=\omega^2=\frac1\omega" />

                    <BlockMath math="\omega+\frac1\omega=-1" />

                    <BlockMath math="\omega^{n+2}+\omega^{n+1}+\omega^n=0" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        <InlineMath math="\omega" />의 거듭제곱은 3을 기준으로 반복되며,
                        식은 항상 <InlineMath math="p\omega+q" /> 꼴로 정리할 수 있습니다.
                    </p>
                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.42 <InlineMath math="x^3+1=0" />의 한 허근 <InlineMath math="\omega" />
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    삼차방정식 <InlineMath math="x^3+1=0" />의 한 허근을 <InlineMath math="\omega" />라 하면, <InlineMath math="\omega" />는 <InlineMath math="x^3-1=0" />의 허근과 비슷하지만 부호가 다른 성질을 가집니다.
                </p>

                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        기본 성질
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega" />는 <InlineMath math="x^3+1=0" />의 허근이므로
                    </p>

                    <BlockMath math="\omega^3+1=0" />

                    <BlockMath math="\omega^3=-1" />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서 양변을 제곱하면
                    </p>

                    <BlockMath math="\omega^6=1" />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                        <h4 className="mb-3 font-bold text-yellow-300">
                            정리
                        </h4>

                        <BlockMath math="\omega^3=-1,\qquad \omega^6=1" />

                        <BlockMath math="\omega^0=1,\quad \omega^1=\omega,\quad \omega^2=\omega^2" />

                        <BlockMath math="\omega^3=-1,\quad \omega^4=-\omega,\quad \omega^5=-\omega^2" />

                        <p className="mt-4 leading-8 text-gray-300">
                            즉, 거듭제곱은 6을 기준으로 반복됩니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        지수의 반복
                    </h3>

                    <BlockMath math="\omega^{30}=1" />

                    <BlockMath math="\frac1{\omega^{29}}=\frac{\omega^{30}}{\omega^{29}}=\omega" />

                    <BlockMath math="\omega^{42}=1" />

                    <BlockMath math="\frac1{\omega^{40}}=\frac{\omega^{42}}{\omega^{40}}=\omega^2" />

                    <BlockMath math="\omega^{60}=1" />

                    <BlockMath math="\frac1{\omega^{57}}=\frac{\omega^{60}}{\omega^{57}}=\omega^3=-1" />

                    <BlockMath math="\omega^{66}=1" />

                    <BlockMath math="\frac1{\omega^{62}}=\frac{\omega^{66}}{\omega^{62}}=\omega^4=-\omega" />

                    <BlockMath math="\omega^{90}=1" />

                    <BlockMath math="\frac1{\omega^{85}}=\frac{\omega^{90}}{\omega^{85}}=\omega^5=-\omega^2" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        이차방정식으로 보기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^3+1" />을 인수분해하면
                    </p>

                    <BlockMath math="x^3+1=(x+1)(x^2-x+1)" />

                    <p className="leading-8 text-gray-300">
                        입니다. 그런데 <InlineMath math="\omega" />는 허근이므로 <InlineMath math="x=-1" />이 아닙니다.
                        따라서 <InlineMath math="\omega" />는 <InlineMath math="x^2-x+1=0" />의 근입니다.
                    </p>

                    <BlockMath math="\omega^2-\omega+1=0" />

                    <BlockMath math="\omega^2=\omega-1" />
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        켤레복소근과 역수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x^2-x+1=0" />의 두 근은 <InlineMath math="\omega" />와 그 켤레복소수 <InlineMath math="\overline{\omega}" />입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        근과 계수와의 관계에 의하여
                    </p>

                    <BlockMath math="\omega+\overline{\omega}=1" />

                    <BlockMath math="\omega\overline{\omega}=1" />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath math="\overline{\omega}=\frac1\omega" />

                    <BlockMath math="\omega+\frac1\omega=1" />
                </div>

                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        연속된 여섯 지수의 합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega^6=1" />이고 <InlineMath math="\omega\ne1" />이므로 다음이 성립합니다.
                    </p>

                    <BlockMath math="1+\omega+\omega^2+\omega^3+\omega^4+\omega^5=0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 양변에 <InlineMath math="\omega^n" />을 곱하면
                    </p>

                    <BlockMath math="\omega^n+\omega^{n+1}+\omega^{n+2}+\omega^{n+3}+\omega^{n+4}+\omega^{n+5}=0" />

                    <p className="mt-4 leading-8 text-gray-300">
                        즉, 지수가 연속된 여섯 항의 합은 항상
                        <InlineMath math="0" />입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        일차식으로 정리하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega^2=\omega-1" />이므로 <InlineMath math="\omega" />로 이루어진 식은 항상 <InlineMath math="p\omega+q" /> 꼴로 정리할 수 있습니다.
                    </p>

                    <BlockMath math="\omega^2=\omega-1" />

                    <BlockMath math="\omega^3=-1" />

                    <BlockMath math="\omega^4=-\omega" />

                    <BlockMath math="\omega^5=-\omega^2=-\omega+1" />
                </div>

                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        직접 해 구하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="\omega" />는 <InlineMath math="x^2-x+1=0" />의 근이므로 근의 공식을 이용하면
                    </p>

                    <BlockMath math="\omega=\frac{1\pm\sqrt{1-4}}2" />

                    <BlockMath math="\omega=\frac{1\pm\sqrt3 i}{2}" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x^2-x+1=0" />일 때, 다음 식의 값을 구하여라.
                    </p>

                    <BlockMath math="\frac{x^{49}+x^{51}}{x^{50}}" />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 지수를 정리하기
                                </h4>

                                <p>
                                    먼저 주어진 식을 나누어 정리합니다.
                                </p>

                                <BlockMath math="\frac{x^{49}+x^{51}}{x^{50}}" />

                                <BlockMath math="=\frac{x^{49}}{x^{50}}+\frac{x^{51}}{x^{50}}" />

                                <BlockMath math="=\frac1x+x" />

                                <BlockMath math="=x+\frac1x" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    <InlineMath math="x^2-x+1=0" /> 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="x^2-x+1=0" />에서 <InlineMath math="x\ne0" />이므로 양변을 <InlineMath math="x" />로 나눕니다.
                                </p>

                                <BlockMath math="x-1+\frac1x=0" />

                                <BlockMath math="x+\frac1x=1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x+y=1,\ xy=1" />인 두 복소수 <InlineMath math="x,\ y" />에 대하여 <InlineMath math="x^{1000}+y^{1000}" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 두 수를 근으로 하는 이차방정식 만들기
                                </h4>

                                <p>
                                    두 수 <InlineMath math="x,\ y" />의 합이 <InlineMath math="1" />이고 곱이 <InlineMath math="1" />이므로, <InlineMath math="x,\ y" />를 두 근으로 하는 이차방정식은
                                </p>

                                <BlockMath math="t^2-t+1=0" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서 <InlineMath math="x,\ y" />는 <InlineMath math="t^2-t+1=0" />의 두 근이므로
                                </p>

                                <BlockMath math="x^3=-1,\qquad y^3=-1" />

                                <BlockMath math="x^6=1,\qquad y^6=1" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    지수의 반복 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="1000" />을 <InlineMath math="6" />으로 나누면
                                </p>

                                <BlockMath math="1000=6\cdot166+4" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="x^{1000}=x^4,\qquad y^{1000}=y^4" />

                                <p>
                                    또한 <InlineMath math="x^3=-1,\ y^3=-1" />이므로
                                </p>

                                <BlockMath math="x^4=-x,\qquad y^4=-y" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x^{1000}+y^{1000}=x^4+y^4" />

                                <BlockMath math="=-x-y" />

                                <BlockMath math="=-(x+y)" />

                                <BlockMath math="-1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-1" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        요약
                    </h3>

                    <BlockMath math="\omega^3=-1" />

                    <BlockMath math="\omega^6=1" />

                    <BlockMath math="\omega^{6\text{의 배수}}=1" />

                    <BlockMath math="\omega^{6\text{의 배수가 아닌 수}}=\omega^{6\text{으로 나눈 나머지}}" />

                    <BlockMath math="\omega^2-\omega+1=0" />

                    <BlockMath math="\omega^2=\omega-1" />

                    <BlockMath math="\overline{\omega}=\frac1\omega" />

                    <BlockMath math="\omega+\frac1\omega=1" />

                    <BlockMath math="\omega^n+\omega^{n+1}+\omega^{n+2}+\omega^{n+3}+\omega^{n+4}+\omega^{n+5}=0" />

                    <p className="mt-4 text-center leading-8 text-gray-300">
                        <InlineMath math="\omega" />의 거듭제곱은 6을 기준으로 반복되며,
                        식은 항상 <InlineMath math="p\omega+q" /> 꼴로 정리할 수 있습니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.43 연립방정식의 해법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    연립방정식은 미지수의 개수만큼 식이 주어진 방정식입니다.
                    각 식의 성질을 이용하여 식의 개수를 줄이거나 문자의 개수를 줄여
                    해를 구합니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        기본 원리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        연립방정식은 <strong>쉬운 식부터 이용하여 점점 어려운 식을 푸는 것</strong>이
                        기본입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 먼저 가장 간단한 식을 찾아
                        다른 식에 대입하거나 소거하여
                        문자의 개수나 식의 개수를 줄입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        먼저 이용하는 식
                    </h3>

                    <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-300">
                        <li>① 차수가 가장 낮은 식</li>
                        <li>② 인수분해가 되는 식</li>
                        <li>③ 문자를 쉽게 정리할 수 있는 식</li>
                    </ul>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        어려운 식은 이렇게 바꾼다
                    </h3>

                    <ul className="list-disc space-y-3 pl-6 leading-8 text-gray-300">
                        <li>대칭식을 이용하여 식을 단순하게 만든다.</li>
                        <li>최고차항이나 상수항을 없애 인수분해가 가능한 식으로 만든다.</li>
                        <li>식을 더하거나 빼서 새로운 식을 만든다.</li>
                    </ul>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        다음 연립방정식을 푸시오.
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x+2y=5\\
        2x^2+y^2=19
        \end{cases}"
                    />

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 일차식을 먼저 이용한다.
                                </h4>

                                <p>
                                    차수가 낮은 식부터 이용하면
                                </p>

                                <BlockMath math="x+2y=5" />

                                <BlockMath math="x=5-2y" />

                                <p>
                                    이를 두 번째 식에 대입하면
                                </p>

                                <BlockMath math="2(5-2y)^2+y^2=19" />

                                <BlockMath math="50-40y+9y^2=19" />

                                <BlockMath math="9y^2-40y+31=0" />

                                <BlockMath math="(9y-31)(y-1)=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    해 구하기
                                </h4>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="y=1\quad\text{또는}\quad y=\frac{31}{9}" />

                                <p>
                                    이를 <InlineMath math="x=5-2y" />에 대입하면
                                </p>

                                <p>
                                    ① <InlineMath math="y=1" />일 때
                                </p>

                                <BlockMath math="x=3" />

                                <p>
                                    ② <InlineMath math="y=\frac{31}{9}" />일 때
                                </p>

                                <BlockMath math="x=5-\frac{62}{9}=-\frac{17}{9}" />

                                <p>
                                    따라서 해는
                                </p>

                                <BlockMath math="(x,y)=(3,1),\left(-\frac{17}{9},\frac{31}{9}\right)" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="(3,1),\ \left(-\frac{17}{9},\frac{31}{9}\right)" />
                                입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        연립방정식
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x^2+y^2=5\\
        x+y=1
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 근을 <InlineMath math="x=\alpha,\ y=\beta" />라 할 때, <InlineMath math="\alpha\beta" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 일차식을 이차식에 대입
                                </h4>

                                <p>
                                    <InlineMath math="x+y=1" />에서
                                </p>

                                <BlockMath math="y=1-x" />

                                <p>
                                    이를 첫 번째 식에 대입하면
                                </p>

                                <BlockMath math="x^2+(1-x)^2=5" />

                                <BlockMath math="2x^2-2x-4=0" />

                                <BlockMath math="x^2-x-2=0" />

                                <BlockMath math="(x-2)(x+1)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x,y)=(2,-1),\ (-1,2)" />

                                <p>
                                    두 경우 모두
                                </p>

                                <BlockMath math="\alpha\beta=-2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 대칭식 이용
                                </h4>

                                <p>
                                    다음 식을 이용합니다.
                                </p>

                                <BlockMath math="x^2+y^2=(x+y)^2-2xy" />

                                <p>
                                    <InlineMath math="x+y=1,\ x^2+y^2=5" />를 대입하면
                                </p>

                                <BlockMath math="5=1^2-2xy" />

                                <BlockMath math="5=1-2xy" />

                                <BlockMath math="-2xy=4" />

                                <BlockMath math="xy=-2" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha\beta=-2" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-2" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        연립방정식
                    </p>

                    <BlockMath
                        math="\begin{cases}
        ax-y=1\\
        x+y=7
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 근이
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x-y=b\\
        x^2+y^2=25
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족시킬 때, 두 양수 <InlineMath math="a,\ b" />의 합을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 일차식을 이차식에 대입
                                </h4>

                                <p>
                                    <InlineMath math="x+y=7" />에서
                                </p>

                                <BlockMath math="y=7-x" />

                                <p>
                                    이를 <InlineMath math="x^2+y^2=25" />에 대입하면
                                </p>

                                <BlockMath math="x^2+(7-x)^2=25" />

                                <BlockMath math="2x^2-14x+24=0" />

                                <BlockMath math="x^2-7x+12=0" />

                                <BlockMath math="(x-3)(x-4)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x,y)=(3,4),\ (4,3)" />

                                <p>
                                    그런데 <InlineMath math="x-y=b" />이고 <InlineMath math="b" />는 양수이므로
                                </p>

                                <BlockMath math="(x,y)=(4,3)" />

                                <BlockMath math="b=1" />

                                <p>
                                    이제 <InlineMath math="ax-y=1" />에 대입하면
                                </p>

                                <BlockMath math="4a-3=1" />

                                <BlockMath math="a=1" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 대칭식 이용
                                </h4>

                                <p>
                                    <InlineMath math="x+y=7" />이고
                                    <InlineMath math="x^2+y^2=25" />이므로
                                </p>

                                <BlockMath math="x^2+y^2=(x+y)^2-2xy" />

                                <BlockMath math="25=7^2-2xy" />

                                <BlockMath math="25=49-2xy" />

                                <BlockMath math="xy=12" />

                                <p>
                                    따라서 <InlineMath math="x,\ y" />는 합이 <InlineMath math="7" />, 곱이 <InlineMath math="12" />인 두 수입니다.
                                </p>

                                <BlockMath math="x,\ y=3,\ 4" />

                                <p>
                                    <InlineMath math="b=x-y" />가 양수이므로
                                </p>

                                <BlockMath math="x=4,\qquad y=3" />

                                <BlockMath math="b=1" />

                                <p>
                                    또한
                                </p>

                                <BlockMath math="ax-y=1" />

                                <BlockMath math="4a-3=1" />

                                <BlockMath math="a=1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서
                            </p>

                            <BlockMath math="a+b=1+1=2" />

                            <p className="font-semibold text-white">
                                답은 <InlineMath math="2" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        연립방정식
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x^2-xy-2y^2=0\\
        x^2-xy+2y^2-4y-24=0
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족하는 <InlineMath math="x,\ y" />에 대하여 <InlineMath math="x+y" />의 최댓값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 인수분해되는 식 이용
                                </h4>

                                <p>
                                    첫 번째 식을 인수분해하면
                                </p>

                                <BlockMath math="x^2-xy-2y^2=0" />

                                <BlockMath math="(x-2y)(x+y)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x=2y\quad\text{또는}\quad x=-y" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    경우 나누어 풀기
                                </h4>

                                <p>
                                    ① <InlineMath math="x=2y" />일 때
                                </p>

                                <BlockMath math="(2y)^2-(2y)y+2y^2-4y-24=0" />

                                <BlockMath math="4y^2-4y-24=0" />

                                <BlockMath math="y^2-y-6=0" />

                                <BlockMath math="(y-3)(y+2)=0" />

                                <BlockMath math="(x,y)=(6,3),\ (-4,-2)" />

                                <p>
                                    이때 <InlineMath math="x+y" />의 값은 각각 <InlineMath math="9,\ -6" />입니다.
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="x=-y" />일 때
                                </p>

                                <BlockMath math="(-y)^2-(-y)y+2y^2-4y-24=0" />

                                <BlockMath math="4y^2-4y-24=0" />

                                <BlockMath math="y^2-y-6=0" />

                                <BlockMath math="(y-3)(y+2)=0" />

                                <BlockMath math="(x,y)=(-3,3),\ (2,-2)" />

                                <p>
                                    이때 <InlineMath math="x+y" />의 값은 모두 <InlineMath math="0" />입니다.
                                </p>
                            </div>

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="x+y" />의 최댓값은 <InlineMath math="9" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        연립방정식
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x^2-4x+2y=20\\
        x^2+x-y=10
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 해를 <InlineMath math="x=\alpha,\ y=\beta" />라 할 때, <InlineMath math="\alpha+\beta" />의 값이 될 수 있는 것을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 이차항 소거하기
                                </h4>

                                <p>
                                    두 식 모두 <InlineMath math="x^2" />을 포함하므로,
                                    두 식을 빼서 이차항을 없앱니다.
                                </p>

                                <BlockMath math="(x^2-4x+2y)-(x^2+x-y)=20-10" />

                                <BlockMath math="-5x+3y=10" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="3y=5x+10" />

                                <BlockMath math="y=\frac{5x+10}{3}" />

                                <p>
                                    이제 이 일차식을 두 번째 식에 대입합니다.
                                </p>

                                <BlockMath math="x^2+x-\frac{5x+10}{3}=10" />

                                <BlockMath math="3x^2+3x-5x-10=30" />

                                <BlockMath math="3x^2-2x-40=0" />

                                <BlockMath math="(3x+10)(x-4)=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    해 구하기
                                </h4>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x=4\quad\text{또는}\quad x=-\frac{10}{3}" />

                                <p>
                                    이를 <InlineMath math="y=\frac{5x+10}{3}" />에 대입합니다.
                                </p>

                                <p>
                                    ① <InlineMath math="x=4" />일 때
                                </p>

                                <BlockMath math="y=\frac{5\cdot4+10}{3}=10" />

                                <BlockMath math="x+y=4+10=14" />

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="x=-\frac{10}{3}" />일 때
                                </p>

                                <BlockMath math="y=\frac{5\left(-\frac{10}{3}\right)+10}{3}" />

                                <BlockMath math="=\frac{-\frac{50}{3}+\frac{30}{3}}{3}" />

                                <BlockMath math="=-\frac{20}{9}" />

                                <BlockMath math="x+y=-\frac{10}{3}-\frac{20}{9}" />

                                <BlockMath math="=-\frac{50}{9}" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 <InlineMath math="\alpha+\beta" />의 값이 될 수 있는 것은 <InlineMath math="14" /> 또는 <InlineMath math="\displaystyle -\frac{50}{9}" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        연립방정식
                    </p>

                    <BlockMath
                        math="\begin{cases}
        x^2-2xy-3y^2=5\\
        2x^2+3xy+y^2=3
        \end{cases}"
                    />

                    <p className="mb-4 leading-8 text-gray-300">
                        의 모든 <InlineMath math="x" />의 값의 합을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 상수항 소거하기
                                </h4>

                                <p>
                                    두 식의 상수항을 없애기 위해 첫 번째 식에는 <InlineMath math="3" />, 두 번째 식에는 <InlineMath math="5" />를 곱합니다.
                                </p>

                                <BlockMath math="3(x^2-2xy-3y^2)=15" />

                                <BlockMath math="5(2x^2+3xy+y^2)=15" />

                                <p>
                                    두 식을 빼면
                                </p>

                                <BlockMath math="3x^2-6xy-9y^2-(10x^2+15xy+5y^2)=0" />

                                <BlockMath math="-7x^2-21xy-14y^2=0" />

                                <BlockMath math="x^2+3xy+2y^2=0" />

                                <BlockMath math="(x+y)(x+2y)=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    경우 나누기
                                </h4>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="x=-y\quad\text{또는}\quad x=-2y" />

                                <p>
                                    ① <InlineMath math="x=-y" />일 때
                                </p>

                                <BlockMath math="(-y)^2-2(-y)y-3y^2=5" />

                                <BlockMath math="y^2+2y^2-3y^2=5" />

                                <BlockMath math="0=5" />

                                <p>
                                    이 경우는 해가 없습니다.
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="x=-2y" />일 때
                                </p>

                                <BlockMath math="(-2y)^2-2(-2y)y-3y^2=5" />

                                <BlockMath math="4y^2+4y^2-3y^2=5" />

                                <BlockMath math="5y^2=5" />

                                <BlockMath math="y=\pm1" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x,y)=(-2,1),\ (2,-1)" />
                            </div>

                            <p className="font-semibold text-white">
                                모든 <InlineMath math="x" />의 값의 합은
                            </p>

                            <BlockMath math="-2+2=0" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="0" />입니다.
                            </p>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        연립 이차방정식은 먼저 쉬운 식을 찾고, 문자의 개수나 식의 차수를 줄이는 것이 중요합니다.
                    </p>

                    <div className="mt-4 space-y-3 text-gray-300">
                        <p>① 일차식이 있으면 먼저 대입합니다.</p>
                        <p>② 대칭식이 보이면 <InlineMath math="x+y,\ xy" />를 이용합니다.</p>
                        <p>③ 인수분해되는 식이 있으면 그 식을 먼저 이용합니다.</p>
                        <p>④ 공통 이차항이 있으면 빼서 이차항을 소거합니다.</p>
                        <p>⑤ 이차항이 소거되지 않으면 상수항을 소거하여 인수분해 가능한 식을 만듭니다.</p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.44 부정방정식
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    부정방정식은 문자의 개수보다 식의 개수가 적은 방정식입니다.
                    일반적으로 해가 무수히 많지만, 정수 조건 또는 실수 조건을 이용하면
                    해를 제한하여 구할 수 있습니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        정수 조건의 부정방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정수 조건이 주어지면 차수가 낮은 문자로 정리하거나,
                        인수분해를 이용하여 약수 조건을 만듭니다.
                    </p>

                    <BlockMath math="xy-2x-4y+1=0" />

                    <p className="leading-8 text-gray-300">
                        예를 들어 위 식은 다음과 같이 인수분해할 수 있습니다.
                    </p>

                    <BlockMath math="xy-2x-4y+1=0" />
                    <BlockMath math="xy-2x-4y+8=7" />

                    <BlockMath math="(x-4)(y-2)=7" />

                    <p className="leading-8 text-gray-300">
                        따라서 <InlineMath math="x-4,\ y-2" />는 <InlineMath math="7" />의 약수입니다.
                    </p>

                    <BlockMath math="\begin{array}{c|c}
x-4 & y-2\\ \hline
1 & 7\\
7 & 1\\
-1 & -7\\
-7 & -1
\end{array}" />

                    <p className="leading-8 text-gray-300">
                        따라서 정수해는
                    </p>

                    <BlockMath math="(x,y)=(5,9),\ (11,3),\ (3,-5),\ (-3,1)" />

                    <p className="mt-4 leading-8 text-gray-300">
                        또는 한 문자에 대하여 정리할 수도 있습니다.
                    </p>

                    <BlockMath math="xy-2x-4y+1=0" />
                    <BlockMath math="x(y-2)=4y-1" />

                    <BlockMath math="x=\frac{4y-1}{y-2}" />

                    <BlockMath math="x=4+\frac7{y-2}" />

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="x" />가 정수가 되려면 <InlineMath math="y-2" />는 <InlineMath math="7" />의 약수입니다.
                    </p>

                    <BlockMath math="y-2=\pm1,\ \pm7" />

                    <BlockMath math="y=3,\ 9,\ 1,\ -5" />

                    <BlockMath math="x=11,\ 5,\ -3,\ 3" />
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        실수 조건의 부정방정식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        실수 조건이 주어지면 완전제곱식을 만들어
                        <InlineMath math="\text{실수}^2\ge0" />의 성질을 이용하거나,
                        한 문자에 대한 이차방정식으로 보고 판별식을 이용합니다.
                    </p>

                    <BlockMath math="x^2+2xy+3y^2-2x+10y+19=0" />

                    <p className="leading-8 text-gray-300">
                        먼저 완전제곱식으로 정리하면 다음과 같습니다.
                    </p>

                    <BlockMath math="x^2+2xy+3y^2-2x+10y+19=0" />
                    <BlockMath math="x^2+2(y-1)x+3y^2+10y+19=0" />
                    <BlockMath math="x^2+2(y-1)x+(y-1)^2-(y-1)^2+3y^2+10y+19=0" />
                    <BlockMath math="(x+y-1)^2-(y-1)^2+3y^2+10y+19=0" />
                    <BlockMath math="(x+y-1)^2+2y^2+12y+18=0" />
                    <BlockMath math="(x+y-1)^2+2(y+3)^2=0" />

                    <p className="leading-8 text-gray-300">
                        두 제곱식의 합이 0이므로 각각 0이어야 합니다.
                    </p>

                    <BlockMath math="x+y-1=0,\qquad y+3=0" />

                    <BlockMath math="y=-3,\qquad x=4" />
                </div>

                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        판별식을 이용하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        같은 식을 <InlineMath math="x" />에 대한 이차방정식으로 볼 수도 있습니다.
                    </p>

                    <BlockMath math="x^2+2(y-1)x+3y^2+10y+19=0" />

                    <p className="leading-8 text-gray-300">
                        실수해가 존재하려면 판별식이 0 이상이어야 하므로
                    </p>

                    <BlockMath math="\frac D4=(y-1)^2-(3y^2+10y+19)" />
                    <BlockMath math="=y^2-2y+1-3y^2-10y-19" />
                    <BlockMath math="-2y^2-12y-18" />
                    <BlockMath math="-2(y+3)^2" />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서
                    </p>

                    <BlockMath math="-2(y+3)^2\ge0" />

                    <p className="leading-8 text-gray-300">
                        이 성립해야 하므로
                    </p>

                    <BlockMath math="(y+3)^2=0" />
                    <BlockMath math="y=-3" />

                    <p className="leading-8 text-gray-300">
                        이를 원래 식에 대입하면
                    </p>

                    <BlockMath math="x=4" />
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        자연수 <InlineMath math="x,\ y" />에 대하여
                    </p>

                    <BlockMath math="xy-3x-3y+4=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족한다.
                        이때 <InlineMath math="x+y" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 인수분해 후 약수 조건 이용
                                </h4>

                                <p>
                                    양변에 <InlineMath math="9" />를 더하면
                                </p>

                                <BlockMath math="xy-3x-3y+9=5" />

                                <BlockMath math="(x-3)(y-3)=5" />

                                <p>
                                    자연수에서 <InlineMath math="5" />의 양의 약수는
                                </p>

                                <BlockMath math="1,\ 5" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x-3,\ y-3)=(1,5)\quad\text{또는}\quad(5,1)" />

                                <BlockMath math="(x,y)=(4,8),\ (8,4)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    값 구하기
                                </h4>

                                <p>
                                    두 경우 모두
                                </p>

                                <BlockMath math="x+y=12" />

                                <p>
                                    따라서 답은
                                </p>

                                <BlockMath math="12" />
                            </div>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        <InlineMath math="x,\ y" />가 서로 다른 양의 정수일 때,
                    </p>

                    <BlockMath math="xy=x+2y" />

                    <p className="mb-4 leading-8 text-gray-300">
                        를 만족하는 순서쌍 <InlineMath math="(x,y)" />에 대하여 <InlineMath math="x-y" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 한 문자로 정리하기
                                </h4>

                                <p>
                                    식을 <InlineMath math="x" />에 대하여 정리하면
                                </p>

                                <BlockMath math="x(y-1)=2y" />

                                <BlockMath math="x=\frac{2y}{y-1}" />

                                <BlockMath math="x=2+\frac{2}{y-1}" />

                                <p>
                                    <InlineMath math="x" />가 정수이므로 <InlineMath math="y-1" />은 <InlineMath math="2" />의 양의 약수입니다.
                                </p>

                                <BlockMath math="y-1=1,\ 2" />

                                <BlockMath math="y=2,\ 3" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    해 구하기
                                </h4>

                                <p>
                                    ① <InlineMath math="y=2" />일 때
                                </p>

                                <BlockMath math="x=4" />

                                <BlockMath math="(x,y)=(4,2)" />

                                <p>
                                    ② <InlineMath math="y=3" />일 때
                                </p>

                                <BlockMath math="x=3" />

                                <p>
                                    그러나 <InlineMath math="x=y" />이므로
                                    조건에 맞지 않습니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(x,y)=(4,2)" />
                            </div>

                            <p className="font-semibold text-white">
                                그러므로
                            </p>

                            <BlockMath math="x-y=4-2=2" />

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="2" />입니다.
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

                    <BlockMath math="\frac1x+\frac1y=\frac14" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족시키는 양의 정수 <InlineMath math="x,\ y" />의 순서쌍 <InlineMath math="(x,y)" />의 개수는?
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 분모를 없앤 후 인수분해
                                </h4>

                                <p>
                                    양변에 <InlineMath math="4xy" />를 곱하면
                                </p>

                                <BlockMath math="4y+4x=xy" />

                                <BlockMath math="xy-4x-4y=0" />

                                <p>
                                    양변에 <InlineMath math="16" />을 더하면
                                </p>

                                <BlockMath math="xy-4x-4y+16=16" />

                                <BlockMath math="(x-4)(y-4)=16" />

                                <p>
                                    <InlineMath math="x,\ y" />는 양의 정수이므로 <InlineMath math="x-4,\ y-4" />도 양의 정수입니다.
                                </p>

                                <p>
                                    따라서 <InlineMath math="x-4" />는 <InlineMath math="16" />의 양의 약수입니다.
                                </p>

                                <BlockMath math="1,\ 2,\ 4,\ 8,\ 16" />

                                <p>
                                    이에 대응하는 순서쌍은
                                </p>

                                <BlockMath math="(1,16),\ (2,8),\ (4,4),\ (8,2),\ (16,1)" />

                                <p>
                                    모두 5개입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    순서쌍 구하기
                                </h4>

                                <BlockMath math="(x,y)=(5,20),\ (6,12),\ (8,8),\ (12,6),\ (20,5)" />

                                <p>
                                    따라서 순서쌍의 개수는
                                </p>

                                <BlockMath math="5" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="5" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2-5xy+6y^2+1=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족하는 양의 정수 <InlineMath math="x,\ y" />의 곱 <InlineMath math="xy" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 인수분해 이용
                                </h4>

                                <p>
                                    왼쪽을 인수분해하면
                                </p>

                                <BlockMath math="(x-2y)(x-3y)+1=0" />

                                <BlockMath math="(x-2y)(x-3y)=-1" />

                                <p>
                                    <InlineMath math="x,\ y" />가 정수이므로 <InlineMath math="x-2y,\ x-3y" />도 정수입니다.
                                    곱이 <InlineMath math="-1" />이므로
                                </p>

                                <BlockMath math="\begin{cases}
    x-2y=1\\
    x-3y=-1
    \end{cases}
    \qquad\text{또는}\qquad
    \begin{cases}
    x-2y=-1\\
    x-3y=1
    \end{cases}" />

                                <p>
                                    ①
                                </p>

                                <BlockMath math="\begin{cases}
    x-2y=1\\
    x-3y=-1
    \end{cases}" />

                                <BlockMath math="y=2,\qquad x=5" />

                                <p>
                                    ②
                                </p>

                                <BlockMath math="\begin{cases}
    x-2y=-1\\
    x-3y=1
    \end{cases}" />

                                <BlockMath math="y=-2" />

                                <p>
                                    양의 정수 조건에 맞지 않으므로 버립니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="xy=5\times2=10" />
                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 2 : 판별식 이용
                                </h4>

                                <p>
                                    식을 <InlineMath math="x" />에 대한 이차방정식으로 보면
                                </p>

                                <BlockMath math="x^2-5yx+(6y^2+1)=0" />

                                <p>
                                    <InlineMath math="x" />가 정수가 되려면 판별식이
                                    완전제곱수이어야 합니다.
                                </p>

                                <BlockMath math="D=(-5y)^2-4(6y^2+1)" />

                                <BlockMath math="=25y^2-24y^2-4" />

                                <BlockMath math="=y^2-4" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="y^2-4=n^2" />

                                <BlockMath math="(y+n)(y-n)=4" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    정수해 구하기
                                </h4>

                                <p>
                                    <InlineMath math="y,\ n" />은 자연수이므로
                                </p>

                                <BlockMath math="(y+n,\ y-n)=(4,1)\quad\text{또는}\quad(2,2)" />

                                <p>
                                    두 번째 경우는 <InlineMath math="y-n=0" />이므로 불가능합니다.
                                </p>

                                <p>
                                    첫 번째 경우에서
                                </p>

                                <BlockMath math="y=\frac{4+1}{2}=\frac52" />

                                <p>
                                    자연수가 아니므로 역시 불가능합니다.
                                </p>

                                <p>
                                    따라서 <InlineMath math="n=0" />도 함께 고려해야 합니다.
                                </p>

                                <BlockMath math="y^2-4=0" />

                                <BlockMath math="y=2" />

                                <p>
                                    이를 원래 방정식에 대입하면
                                </p>

                                <BlockMath math="x^2-10x+25=0" />

                                <BlockMath math="(x-5)^2=0" />

                                <BlockMath math="x=5" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서
                            </p>

                            <BlockMath math="xy=5\times2=10" />

                            <p className="font-semibold text-white">
                                답은 <InlineMath math="10" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 5
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2+2x+1+y^2-4y+4=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족하는 두 실수 <InlineMath math="x,\ y" />의 합 <InlineMath math="x+y" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 완전제곱식 이용
                                </h4>

                                <p>
                                    식을 완전제곱식으로 정리하면
                                </p>

                                <BlockMath math="(x+1)^2+(y-2)^2=0" />

                                <p>
                                    두 제곱식은 모두 0 이상이므로,
                                    그 합이 0이 되려면 각각 0이어야 합니다.
                                </p>

                                <BlockMath math="x+1=0,\qquad y-2=0" />

                                <BlockMath math="x=-1,\qquad y=2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    값 구하기
                                </h4>

                                <BlockMath math="x+y=-1+2=1" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="1" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 6
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        방정식
                    </p>

                    <BlockMath math="x^2+y^2-4x+6y+13=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족하는 두 실수 <InlineMath math="x,\ y" />의 곱 <InlineMath math="xy" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 : 완전제곱식 이용
                                </h4>

                                <p>
                                    식을 완전제곱식으로 정리하면
                                </p>

                                <BlockMath math="x^2-4x+4+y^2+6y+9=0" />

                                <BlockMath math="(x-2)^2+(y+3)^2=0" />

                                <p>
                                    두 제곱식은 모두 0 이상이므로,
                                    그 합이 0이 되려면 각각 0이어야 합니다.
                                </p>

                                <BlockMath math="x-2=0,\qquad y+3=0" />

                                <BlockMath math="x=2,\qquad y=-3" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    값 구하기
                                </h4>

                                <BlockMath math="xy=2\times(-3)=-6" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6" />입니다.
                            </p>

                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 7
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        실수 <InlineMath math="x,\ y" />에 대하여
                    </p>

                    <BlockMath math="2x^2+y^2+2xy+2x-2y+5=0" />

                    <p className="mb-4 leading-8 text-gray-300">
                        일 때, <InlineMath math="xy" />의 값을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    풀이 1 : 완전제곱식으로 정리
                                </h4>

                                <p>
                                    주어진 식을 <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath math="y^2+2(x-1)y+2x^2+2x+5=0" />

                                <p>
                                    완전제곱식을 만들면
                                </p>

                                <BlockMath math="y^2+2(x-1)y+(x-1)^2-(x-1)^2+2x^2+2x+5=0" />

                                <BlockMath math="(y+x-1)^2+x^2+4x+4=0" />

                                <BlockMath math="(y+x-1)^2+(x+2)^2=0" />

                                <p>
                                    두 제곱식의 합이 <InlineMath math="0" />이므로 각각 <InlineMath math="0" />이어야 합니다.
                                </p>

                                <BlockMath math="y+x-1=0,\qquad x+2=0" />

                                <BlockMath math="x=-2,\qquad y=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="xy=-2\cdot3=-6" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    풀이 2 : 판별식 이용
                                </h4>

                                <p>
                                    주어진 식을 <InlineMath math="y" />에 대한 이차방정식으로 봅니다.
                                </p>

                                <BlockMath math="y^2+(2x-2)y+(2x^2+2x+5)=0" />

                                <p>
                                    실수해가 존재하려면 판별식이 0 이상이어야 합니다.
                                </p>

                                <BlockMath math="\frac D4=(x-1)^2-(2x^2+2x+5)" />

                                <BlockMath math="=-x^2-4x-4" />

                                <BlockMath math="=-(x+2)^2" />

                                <p>
                                    따라서 <InlineMath math="\frac D4\ge0" />이 되려면
                                </p>

                                <BlockMath math="x=-2" />

                                <p>
                                    입니다. 이를 <InlineMath math="y^2+(2x-2)y+(2x^2+2x+5)=0" />
                                    에 대입하면
                                </p>

                                <BlockMath math="y^2-6y+9=0" />

                                <BlockMath math="y=3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="xy=-2\cdot3=-6" />
                            </div>

                            <p className="font-semibold text-white">
                                따라서 답은 <InlineMath math="-6" />입니다.
                            </p>
                        </div>
                    </details>
                </div>
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        부정방정식은 조건에 따라 풀이 방법이 달라집니다.
                    </p>

                    <div className="mt-4 space-y-3 text-gray-300">
                        <p>
                            ① 정수 조건에서는 인수분해 또는 한 문자에 대한 정리를 이용하여 약수 조건을 만듭니다.
                        </p>

                        <p>
                            ② 실수 조건에서는 완전제곱식을 만들거나 판별식을 이용합니다.
                        </p>

                        <p>
                            ③ 제곱식의 합이 0이면 각각의 제곱식이 0이어야 합니다.
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.45 미지수가 여러 개인 문제의 해법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    방정식을 풀기 위해서는 먼저 무엇을 미지수로 둘 것인지 결정해야 합니다.
                    미지수는 구하려는 대상일 수도 있고,
                    구하려는 대상을 구하기 위해 필요한 대상일 수도 있습니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        새로운 미지수를 두는 것을 두려워하지 말자
                    </h3>

                    <p className="leading-8 text-gray-300">
                        구하려는 대상을 바로 식으로 나타낼 수 없다면
                        새로운 미지수를 두는 것이 자연스러운 방법입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        새로운 미지수를 하나 두었다면
                        그 미지수를 결정할 수 있는 조건도 하나 더 필요합니다.
                        두 개를 두었다면 두 개의 조건이 더 필요합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        즉, 미지수를 늘리는 것은 잘못된 것이 아니라,
                        필요한 조건도 함께 찾아야 한다는 뜻입니다.
                    </p>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        식의 개수를 확인하자
                    </h3>

                    <p className="leading-8 text-gray-300">
                        문제의 조건을 모두 식으로 만든 뒤에는
                        반드시 미지수의 개수와 식의 개수를 비교합니다.
                    </p>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <p className="text-center text-lg leading-9 text-white">
                            미지수의 개수 = 식의 개수
                        </p>

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            → 연립방정식으로 풀 수 있습니다.
                        </p>

                        <p className="mt-2 text-center leading-8 text-gray-300">
                            차수가 낮은 식이나 인수분해되는 식부터 이용하여
                            미지수를 하나씩 줄여 갑니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-lg bg-black/30 p-5">
                        <p className="text-center text-lg leading-9 text-white">
                            미지수의 개수 ＞ 식의 개수
                        </p>

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            먼저 빠진 조건이 없는지 확인합니다.
                        </p>

                        <p className="mt-2 text-center leading-8 text-gray-300">
                            그래도 식이 부족하다면
                            각각의 미지수를 모두 구해야 하는 문제인지 생각합니다.
                        </p>

                        <p className="mt-2 text-center leading-8 text-gray-300">
                            구하려는 대상을 바로 구할 수 없다면
                            문제에 정수, 자연수 또는 실수 조건이 있는지 확인하고
                            부정방정식의 해법을 이용합니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    그림과 같이 <InlineMath math="\overline{AB}=3" />, <InlineMath math="\overline{BC}=9" />인 직사각형 <InlineMath math="ABCD" />가 있다. 대각선 <InlineMath math="BD" /> 위에 한 점 <InlineMath math="O" />를 잡고, 점 <InlineMath math="O" />에서 네 변 <InlineMath math="AB,\ BC,\ CD,\ DA" />에 내린 수선의 발을 각각 <InlineMath math="P,\ Q,\ R,\ S" />라 하자.
                                    사각형 <InlineMath math="APOS" />와 사각형 <InlineMath math="OQCR" />의 넓이의 합이 <InlineMath math="12" />이고, <InlineMath math="\overline{AP}<\overline{PB}" />일 때,
                                    선분 <InlineMath math="AP" />의 길이를 구하여라.
                                </p>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.45_1.png"
                                    alt="직사각형과 대각선 위의 점"
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
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    미지수 정하기
                                </h4>

                                <p>
                                    구하려는 길이를 미지수로 둡니다.
                                </p>

                                <BlockMath math="\overline{AP}=x" />

                                <p>
                                    그러면
                                </p>

                                <BlockMath math="\overline{PB}=3-x" />

                                <p>
                                    점 <InlineMath math="O" />는 대각선 <InlineMath math="BD" /> 위에 있으므로 가로와 세로의 비가 <InlineMath math="9:3=3:1" />입니다.
                                </p>

                                <p>
                                    따라서 세로로 <InlineMath math="x" />만큼 내려가면,
                                    가로로는 <InlineMath math="3x" />만큼 이동합니다.
                                </p>

                                <BlockMath math="\overline{SD}=3x,\qquad \overline{DR}=x" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    넓이로 식 세우기
                                </h4>

                                <p>
                                    사각형 <InlineMath math="APOS" />의 넓이는
                                </p>

                                <BlockMath math="x(9-3x)" />

                                <p>
                                    이고, 사각형 <InlineMath math="OQCR" />의 넓이는
                                </p>

                                <BlockMath math="3x(3-x)" />

                                <p>
                                    입니다.
                                    두 넓이의 합이 <InlineMath math="12" />이므로
                                </p>

                                <BlockMath math="x(9-3x)+3x(3-x)=12" />

                                <BlockMath math="18x-6x^2=12" />

                                <BlockMath math="x^2-3x+2=0" />

                                <BlockMath math="(x-1)(x-2)=0" />

                                <BlockMath math="x=1\quad\text{또는}\quad x=2" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    조건 확인하기
                                </h4>

                                <p>
                                    문제에서 <InlineMath math="\overline{AP}<\overline{PB}" />라고 했으므로
                                </p>

                                <BlockMath math="x<3-x" />

                                <BlockMath math="x<\frac32" />

                                <p>
                                    따라서 <InlineMath math="x=2" />는 조건에 맞지 않고, <InlineMath math="x=1" />만 가능합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\overline{AP}=1" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 2
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    이차방정식 <InlineMath math="x^2-16x+4=0" />의 두 실근을 <InlineMath math="\alpha,\ \beta" />
                                    (<InlineMath math="\alpha<\beta" />)라 하자.
                                    그림과 같이 <InlineMath math="\overline{AB}=\alpha" />, <InlineMath math="\overline{BC}=\beta" />인 직각삼각형 <InlineMath math="ABC" />에 내접하는 정사각형의 넓이와 둘레의 길이를
                                    두 근으로 하는 <InlineMath math="x" />에 대한 이차방정식이 <InlineMath math="16x^2+mx+n=0" />일 때,
                                    두 상수 <InlineMath math="m,\ n" />에 대하여 <InlineMath math="m+n" />의 값을 구하여라.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    단, 정사각형의 두 변은 선분 <InlineMath math="AB" />와 선분 <InlineMath math="BC" /> 위에 있다.
                                </p>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.45_2.png"
                                    alt="직각삼각형에 내접한 정사각형"
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
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    미지수 정하기
                                </h4>

                                <p>
                                    정사각형의 한 변의 길이를 <InlineMath math="t" />라 하자.
                                </p>

                                <p>
                                    이 문제에서 구하려는 것은 정사각형의 넓이와 둘레이므로,
                                    먼저 정사각형의 한 변을 미지수로 두는 것이 자연스럽습니다.
                                </p>

                                <BlockMath math="\text{정사각형의 한 변}=t" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    닮음을 이용하여 한 변 구하기
                                </h4>

                                <p>
                                    큰 직각삼각형에서 높이는 <InlineMath math="\alpha" />, 밑변은 <InlineMath math="\beta" />입니다.
                                </p>

                                <p>
                                    정사각형의 오른쪽 위 꼭짓점은 빗변 위에 있으므로,
                                    남는 작은 직각삼각형과 큰 직각삼각형은 닮음입니다.
                                </p>

                                <p>
                                    따라서 높이와 밑변의 비를 이용하면
                                </p>

                                <BlockMath math="\frac{\alpha-t}{\beta-t}=\frac{\alpha}{\beta}" />

                                <p>
                                    입니다. 양변을 정리하면
                                </p>

                                <BlockMath math="\beta(\alpha-t)=\alpha(\beta-t)" />

                                <BlockMath math="\alpha\beta-\beta t=\alpha\beta-\alpha t" />

                                <BlockMath math="\beta t=\alpha t" />

                                <p>
                                    이 식은 잘못된 비를 세운 것이므로, 다시 길이를 직접 표현합니다.
                                </p>

                                <p>
                                    빗변은 왼쪽 위에서 오른쪽 아래로 내려가는 직선입니다.
                                    가로로 <InlineMath math="t" />만큼 이동하면,
                                    세로 길이는 전체 높이 <InlineMath math="\alpha" />에서 <InlineMath math="\frac{\alpha}{\beta}t" />만큼 줄어듭니다.
                                </p>

                                <BlockMath math="t=\alpha-\frac{\alpha}{\beta}t" />

                                <BlockMath math="\beta t=\alpha\beta-\alpha t" />

                                <BlockMath math="t(\alpha+\beta)=\alpha\beta" />

                                <BlockMath math="t=\frac{\alpha\beta}{\alpha+\beta}" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    근과 계수와의 관계 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha,\ \beta" />는 <InlineMath math="x^2-16x+4=0" />의 두 근이므로
                                </p>

                                <BlockMath math="\alpha+\beta=16" />

                                <BlockMath math="\alpha\beta=4" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="t=\frac{\alpha\beta}{\alpha+\beta}" />

                                <BlockMath math="=\frac4{16}" />

                                <BlockMath math="\frac14" />
                            </div>

                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">
                                <h4 className="mb-3 font-bold text-orange-300">
                                    넓이와 둘레 구하기
                                </h4>

                                <p>
                                    정사각형의 한 변이 <InlineMath math="\frac14" />이므로
                                </p>

                                <BlockMath math="\text{넓이}=\left(\frac14\right)^2=\frac1{16}" />

                                <BlockMath math="\text{둘레}=4\cdot\frac14=1" />

                                <p>
                                    따라서 구하는 이차방정식의 두 근은
                                    <InlineMath math="\frac1{16}" />과
                                    <InlineMath math="1" />입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-5">
                                <h4 className="mb-3 font-bold text-pink-300">
                                    이차방정식의 계수 구하기
                                </h4>

                                <p>
                                    주어진 이차방정식은
                                </p>

                                <BlockMath math="16x^2+mx+n=0" />

                                <p>
                                    입니다.
                                    두 근의 합은
                                </p>

                                <BlockMath math="1+\frac1{16}=\frac{17}{16}" />

                                <p>
                                    이므로 근과 계수와의 관계에 의해
                                </p>

                                <BlockMath math="-\frac{m}{16}=\frac{17}{16}" />

                                <BlockMath math="m=-17" />

                                <p>
                                    두 근의 곱은
                                </p>

                                <BlockMath math="1\cdot\frac1{16}=\frac1{16}" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="\frac{n}{16}=\frac1{16}" />

                                <BlockMath math="n=1" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="m+n=-17+1=-16" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 3
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.5fr_1fr]">
                            <div className="flex flex-col justify-center">
                                <p className="leading-8 text-gray-300">
                                    그림과 같이 이차함수 <InlineMath math="y=x^2-6x+6" />의 그래프와 직선 <InlineMath math="y=k" />가 만나는 두 점을 각각 <InlineMath math="A,\ B" />라 하자.
                                    삼각형 <InlineMath math="AOB" />의 넓이가 <InlineMath math="18" />일 때, 양수 <InlineMath math="k" />의 값을 구하여라.
                                    단, <InlineMath math="O" />는 원점이다.
                                </p>
                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/2.45_3.png"
                                    alt="포물선과 직선이 만드는 삼각형"
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
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    미지수 정하기
                                </h4>

                                <p>
                                    두 교점의 <InlineMath math="x" />좌표를 <InlineMath math="\alpha,\ \beta" />
                                    라 하자.
                                </p>

                                <p>
                                    두 점은 직선 <InlineMath math="y=k" /> 위에 있으므로
                                </p>

                                <BlockMath math="A(\alpha,k),\qquad B(\beta,k)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    두 교점 사이의 거리 구하기
                                </h4>

                                <p>
                                    교점의 <InlineMath math="x" />좌표는
                                </p>

                                <BlockMath math="x^2-6x+6=k" />

                                <p>
                                    의 두 근입니다.
                                </p>

                                <BlockMath math="x^2-6x+6-k=0" />

                                <p>
                                    근의 차는
                                </p>

                                <BlockMath math="\beta-\alpha=\sqrt{(-6)^2-4(6-k)}" />

                                <BlockMath math="=\sqrt{12+4k}" />

                                <BlockMath math="=2\sqrt{k+3}" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\overline{AB}=2\sqrt{k+3}" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    넓이로 식 세우기
                                </h4>

                                <p>
                                    삼각형 <InlineMath math="AOB" />의 밑변을 <InlineMath math="\overline{AB}" />로 보면,
                                    높이는 원점에서 직선 <InlineMath math="y=k" />까지의 거리이므로 <InlineMath math="k" />입니다.
                                </p>

                                <BlockMath math="\frac12\cdot 2\sqrt{k+3}\cdot k=18" />

                                <BlockMath math="k\sqrt{k+3}=18" />

                                <p>
                                    여기서
                                    <InlineMath math="\sqrt{k+3}=t" />라 두면
                                </p>

                                <BlockMath math="k=t^2-3" />

                                <p>
                                    이므로
                                </p>

                                <BlockMath math="(t^2-3)t=18" />

                                <BlockMath math="t^3-3t-18=0" />

                                <BlockMath math="(t-3)(t^2+3t+6)=0" />

                                <p>
                                    <InlineMath math="t" />는 양수이므로
                                </p>

                                <BlockMath math="t=3" />

                                <BlockMath math="\sqrt{k+3}=3" />

                                <BlockMath math="k+3=9" />

                                <BlockMath math="k=6" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k=6" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 4
                    </h3>

                    <p className="mb-4 leading-8 text-gray-300">
                        두 자연수 <InlineMath math="a,\ b" /> (<InlineMath math="a<b" />)와 모든 실수 <InlineMath math="x" />에 대하여 등식
                    </p>

                    <BlockMath math="(x^2+x)(x^2+x+2)-7(x^2+x)+k-1=(x^2+x-a)(x^2+x-b)" />

                    <p className="mb-4 leading-8 text-gray-300">
                        을 만족시키는 모든 상수 <InlineMath math="k" />의 값의 합을 구하여라.
                    </p>

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    미지수 정하기
                                </h4>

                                <p>
                                    식에 <InlineMath math="x^2+x" />가 반복되므로
                                </p>

                                <BlockMath math="t=x^2+x" />

                                <p>
                                    라고 두면 등식이 간단해집니다.
                                </p>

                                <BlockMath math="t(t+2)-7t+k-1=(t-a)(t-b)" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    계수 비교하기
                                </h4>

                                <p>
                                    양변을 정리하면
                                </p>

                                <BlockMath math="t^2-5t+k-1=t^2-(a+b)t+ab" />

                                <p>
                                    따라서 계수를 비교하면
                                </p>

                                <BlockMath math="a+b=5" />

                                <BlockMath math="ab=k-1" />

                                <BlockMath math="k=ab+1" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    자연수 조건 이용하기
                                </h4>

                                <p>
                                    <InlineMath math="a,\ b" />는 자연수이고 <InlineMath math="a<b" />, <InlineMath math="a+b=5" />이므로
                                </p>

                                <BlockMath math="(a,b)=(1,4),\ (2,3)" />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    각각의 경우에
                                </p>

                                <BlockMath math="(a,b)=(1,4)\Rightarrow k=1\cdot4+1=5" />

                                <BlockMath math="(a,b)=(2,3)\Rightarrow k=2\cdot3+1=7" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="5+7=12" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심
                    </h3>

                    <p className="leading-8 text-gray-300">
                        새로운 미지수를 두는 것은 어려운 일이 아닙니다.
                        중요한 것은 <strong>미지수 하나에는 조건도 하나가 필요하다</strong>는 점입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        문제를 풀기 전에
                        <strong>미지수의 개수와 식의 개수를 먼저 확인하는 습관</strong>을 가지면
                        풀이 방향을 쉽게 결정할 수 있습니다.
                    </p>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.46 방정식의 정수근과 공통근
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    방정식의 근에 특별한 조건이 주어지면, 그 조건을 이용하여 가능한 근을 좁혀 갈 수 있습니다.
                    이 단원에서는 정수근을 갖는 방정식과 두 방정식이 공통근을 갖는 경우의 해법을 정리합니다.
                </p>

                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        정수근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정수근은 보통 근과 계수와의 관계를 이용하여 찾습니다.
                        가능한 정수의 범위가 넓으면 판별식이나 근의 성질을 이용하여
                        가능한 값을 줄인 뒤 근과 계수와의 관계를 이용합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/30 p-5">
                        <p className="mb-3 font-semibold text-white">
                            풀이 순서
                        </p>

                        <p className="leading-8 text-gray-300">
                            ① 정수근을 문자로 둔다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ② 근과 계수와의 관계를 이용한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ③ 가능한 정수값을 확인한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ④ 범위가 넓으면 판별식이나 조건을 이용하여 경우를 줄인다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">
                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        공통근
                    </h3>

                    <p className="leading-8 text-gray-300">
                        공통근은 두 방정식을 동시에 만족하는 근입니다.
                        따라서 공통근을 <InlineMath math="\alpha" />라 두고,
                        두 방정식에 각각 대입합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        그 후 두 식을 더하거나 빼는 등 사칙연산을 하여
                        인수분해가 가능한 식을 만들고, 공통근의 후보를 찾습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/30 p-5">
                        <p className="mb-3 font-semibold text-white">
                            풀이 순서
                        </p>

                        <p className="leading-8 text-gray-300">
                            ① 공통근을 <InlineMath math="\alpha" />라 둔다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ② <InlineMath math="\alpha" />를 두 방정식에 각각 대입한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ③ 두 식을 더하거나 빼서 간단한 식을 만든다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ④ 인수분해하여 공통근의 후보를 구한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ⑤ 구한 값을 원래 방정식에 대입하여 확인한다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">
                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="x^2+(m-6)x+m=0" />의
                            두 근이 정수일 때,
                            정수 <InlineMath math="m" />의 값을 모두 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    판별식으로 범위 줄이기
                                </h4>

                                <p>
                                    두 근이 정수이므로 판별식은 음이 아닌 완전제곱수입니다.
                                </p>

                                <BlockMath math="D=(m-6)^2-4m" />

                                <BlockMath math="=m^2-16m+36" />

                                <BlockMath math="=(m-8)^2-28" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="D\ge0" />

                                <BlockMath math="(m-8)^2\ge28" />

                                <BlockMath math="m\le2\quad\text{또는}\quad m\ge14" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    근과 계수와의 관계 이용
                                </h4>

                                <p>
                                    두 정수근을 <InlineMath math="\alpha,\ \beta" />
                                    라 하면
                                </p>

                                <BlockMath math="\alpha+\beta=6-m" />

                                <BlockMath math="\alpha\beta=m" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha\beta+\alpha+\beta=6" />

                                <BlockMath math="(\alpha+1)(\beta+1)=7" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    가능한 경우 찾기
                                </h4>

                                <p>
                                    <InlineMath math="7" />의 약수를 이용하면
                                </p>

                                <BlockMath math="(\alpha+1,\ \beta+1)=(1,7),\ (7,1),\ (-1,-7),\ (-7,-1)" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="(\alpha,\beta)=(0,6),\ (6,0),\ (-2,-8),\ (-8,-2)" />

                                <p>
                                    이고,
                                </p>

                                <BlockMath math="m=\alpha\beta" />

                                <BlockMath math="m=0,\ 16" />

                                <p>
                                    두 값 모두 판별식의 조건을 만족합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="m=0,\ 16" />

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
                            <InlineMath math="x" />에 대한 이차방정식 <InlineMath math="x^2+mx+m^2-1=0" />이 정수근을 가질 때,
                            정수 <InlineMath math="m" />의 개수를 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    정수근을 문자로 두기
                                </h4>

                                <p>
                                    정수근을 <InlineMath math="\alpha" />라 하면
                                </p>

                                <BlockMath math="\alpha^2+m\alpha+m^2-1=0" />

                                <p>
                                    입니다. 이 식을 <InlineMath math="m" />에 대한 이차방정식으로 보면
                                </p>

                                <BlockMath math="m^2+\alpha m+\alpha^2-1=0" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    판별식으로 범위 줄이기
                                </h4>

                                <p>
                                    <InlineMath math="m" />이 정수로 존재하려면 판별식이 0 이상이어야 합니다.
                                </p>

                                <BlockMath math="D=\alpha^2-4(\alpha^2-1)" />

                                <BlockMath math="=4-3\alpha^2" />

                                <BlockMath math="4-3\alpha^2\ge0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha^2\le\frac43" />

                                <p>
                                    <InlineMath math="\alpha" />는 정수이므로
                                </p>

                                <BlockMath math="\alpha=-1,\ 0,\ 1" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    가능한 <InlineMath math="m" /> 구하기
                                </h4>

                                <p>
                                    각각 대입하면
                                </p>

                                <BlockMath math="\alpha=0\Rightarrow m^2-1=0" />

                                <BlockMath math="m=-1,\ 1" />

                                <hr className="border-white/10" />

                                <BlockMath math="\alpha=1\Rightarrow m^2+m=0" />

                                <BlockMath math="m=-1,\ 0" />

                                <hr className="border-white/10" />

                                <BlockMath math="\alpha=-1\Rightarrow m^2-m=0" />

                                <BlockMath math="m=0,\ 1" />

                                <p>
                                    따라서 가능한 정수 <InlineMath math="m" />은
                                </p>

                                <BlockMath math="-1,\ 0,\ 1" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\text{정수 }m\text{의 개수}=3" />
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
                            두 이차방정식
                        </p>

                        <BlockMath
                            math="\begin{cases}
            x^2-(k-3)x+5k=0\\
            x^2+(k+2)x-5k=0
            \end{cases}"
                        />

                        <p className="leading-8 text-gray-300">
                            이 공통근을 갖도록 <InlineMath math="k" />의 값을 정하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    공통근을 문자로 두기
                                </h4>

                                <p>
                                    두 방정식의 공통근을 <InlineMath math="\alpha" />라 하자.
                                    그러면
                                </p>

                                <BlockMath math="\alpha^2-(k-3)\alpha+5k=0" />

                                <BlockMath math="\alpha^2+(k+2)\alpha-5k=0" />

                                <p>
                                    를 동시에 만족합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    두 식을 빼서 간단한 식 만들기
                                </h4>

                                <p>
                                    두 식을 빼면 <InlineMath math="\alpha^2" />항이 없어집니다.
                                </p>

                                <BlockMath math="\{- (k-3)\alpha+5k\}-\{(k+2)\alpha-5k\}=0" />

                                <BlockMath math="-(2k-1)\alpha+10k=0" />

                                <BlockMath math="(2k-1)\alpha=10k" />

                                <p>
                                    즉,
                                </p>

                                <BlockMath math="\alpha=\frac{10k}{2k-1}" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    두 식을 더해서 다시 정리하기
                                </h4>

                                <p>
                                    이번에는 두 식을 더하면
                                </p>

                                <BlockMath math="2\alpha^2+5\alpha=0" />

                                <BlockMath math="\alpha(2\alpha+5)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha=0\quad\text{또는}\quad \alpha=-\frac52" />

                                <p>
                                    그런데 <InlineMath math="\alpha=0" />을 원래 식에 대입하면
                                </p>

                                <BlockMath math="5k=0,\qquad -5k=0" />

                                <p>
                                    이므로 <InlineMath math="k=0" />입니다.
                                </p>

                                <p>
                                    또 <InlineMath math="\alpha=-\frac52" />를 <InlineMath math="(2k-1)\alpha=10k" />에 대입하면
                                </p>

                                <BlockMath math="(2k-1)\left(-\frac52\right)=10k" />

                                <BlockMath math="-5k+\frac52=10k" />

                                <BlockMath math="15k=\frac52" />

                                <BlockMath math="k=\frac16" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="k=0,\ \frac16" />
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
                            <InlineMath math="x" />에 관한 두 이차방정식 <InlineMath math="x^2-ax+4a=0" />, <InlineMath math="x^2-4x+a^2=0" />이
                            공통근을 갖기 위한 <InlineMath math="a" />값 중에서
                            최댓값과 최솟값의 곱을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    공통근을 문자로 두기
                                </h4>

                                <p>
                                    두 방정식의 공통근을 <InlineMath math="\alpha" />라 하자.
                                    그러면
                                </p>

                                <BlockMath math="\alpha^2-a\alpha+4a=0" />

                                <BlockMath math="\alpha^2-4\alpha+a^2=0" />

                                <p>
                                    를 동시에 만족합니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    두 식을 빼기
                                </h4>

                                <p>
                                    두 식을 빼면 <InlineMath math="\alpha^2" />항이 없어집니다.
                                </p>

                                <BlockMath math="(-a\alpha+4a)-(-4\alpha+a^2)=0" />

                                <BlockMath math="(4-a)\alpha+4a-a^2=0" />

                                <BlockMath math="(4-a)\alpha+a(4-a)=0" />

                                <BlockMath math="(4-a)(\alpha+a)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=4\quad\text{또는}\quad \alpha=-a" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    경우 나누기
                                </h4>

                                <p>
                                    ① <InlineMath math="a=4" />일 때
                                </p>

                                <BlockMath math="x^2-4x+16=0" />

                                <p>
                                    두 방정식이 같아지므로 공통근을 갖습니다.
                                </p>

                                <hr className="border-white/10" />

                                <p>
                                    ② <InlineMath math="\alpha=-a" />일 때
                                </p>

                                <p>
                                    이를 <InlineMath math="\alpha^2-4\alpha+a^2=0" />에 대입하면
                                </p>

                                <BlockMath math="(-a)^2-4(-a)+a^2=0" />

                                <BlockMath math="2a^2+4a=0" />

                                <BlockMath math="2a(a+2)=0" />

                                <BlockMath math="a=0,\ -2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a=-2,\ 0,\ 4" />

                                <p className="mt-4 text-gray-300">
                                    최댓값은 <InlineMath math="4" />, 최솟값은 <InlineMath math="-2" />이므로
                                </p>

                                <BlockMath math="4\cdot(-2)=-8" />
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
                            두 방정식 <InlineMath math="x^2+kx+2=0" />과 <InlineMath math="x^2+2x+k=0" />의 공통근 <InlineMath math="\alpha" />가 단 한 개 존재할 때, <InlineMath math="k+\alpha" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    공통근을 문자로 두기
                                </h4>

                                <p>
                                    공통근을 <InlineMath math="\alpha" />라 하면
                                </p>

                                <BlockMath math="\alpha^2+k\alpha+2=0" />

                                <BlockMath math="\alpha^2+2\alpha+k=0" />

                                <p>
                                    입니다.
                                </p>
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    두 식을 빼기
                                </h4>

                                <p>
                                    두 식을 빼면
                                </p>

                                <BlockMath math="k\alpha+2-(2\alpha+k)=0" />

                                <BlockMath math="(k-2)\alpha-(k-2)=0" />

                                <BlockMath math="(k-2)(\alpha-1)=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="k=2\quad\text{또는}\quad \alpha=1" />

                                <p>
                                    그런데 <InlineMath math="k=2" />이면 두 방정식이 같아져서
                                    공통근이 단 한 개가 아니므로 제외합니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="\alpha=1" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    <InlineMath math="k" /> 구하기
                                </h4>

                                <p>
                                    <InlineMath math="\alpha=1" />을 <InlineMath math="x^2+kx+2=0" />에 대입하면
                                </p>

                                <BlockMath math="1+k+2=0" />

                                <BlockMath math="k=-3" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="k+\alpha=-3+1=-2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="-2" />
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
                            두 삼차방정식
                        </p>

                        <BlockMath
                            math="\begin{cases}
                            x^3+ax^2+bx+1=0 \quad \cdots\text{㉠}\\
                            x^3+bx^2+ax+1=0 \quad \cdots\text{㉡}
                            \end{cases}"
                        />

                        <p className="leading-8 text-gray-300">
                            이 하나의 공통근을 가지고, ㉠의 나머지 두 근의 합이 <InlineMath math="ab" />일 때, <InlineMath math="a" />의 값을 구하여라.
                        </p>
                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                <h4 className="mb-3 font-bold text-blue-300">
                                    공통근 찾기
                                </h4>

                                <p>
                                    공통근을 <InlineMath math="\alpha" />라 하면,
                                    ㉠과 ㉡에 모두 대입할 수 있습니다.
                                </p>

                                <p>
                                    두 식을 빼면
                                </p>

                                <BlockMath math="(a-b)\alpha^2+(b-a)\alpha=0" />

                                <BlockMath math="(a-b)\alpha(\alpha-1)=0" />

                                <p>
                                    두 방정식이 하나의 공통근만 가지므로 <InlineMath math="a\ne b" />입니다.
                                    또한 상수항이 <InlineMath math="1" />이므로 <InlineMath math="\alpha=0" />은 근이 될 수 없습니다.
                                </p>

                                <BlockMath math="\alpha=1" />

                                <p>
                                    따라서 ㉠에 <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath math="1+a+b+1=0" />

                                <BlockMath math="a+b=-2" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                <h4 className="mb-3 font-bold text-green-300">
                                    나머지 두 근의 합 이용하기
                                </h4>

                                <p>
                                    ㉠의 세 근을 <InlineMath math="1,\ r,\ s" />라 하면,
                                    근과 계수와의 관계에 의해
                                </p>

                                <BlockMath math="1+r+s=-a" />

                                <BlockMath math="r+s=-a-1" />

                                <p>
                                    그런데 문제에서 나머지 두 근의 합이 <InlineMath math="ab" />라고 했으므로
                                </p>

                                <BlockMath math="ab=-a-1" />
                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">
                                <h4 className="mb-3 font-bold text-purple-300">
                                    <InlineMath math="a" /> 구하기
                                </h4>

                                <p>
                                    <InlineMath math="a+b=-2" />에서
                                </p>

                                <BlockMath math="b=-a-2" />

                                <p>
                                    이를 <InlineMath math="ab=-a-1" />에 대입하면
                                </p>

                                <BlockMath math="a(-a-2)=-a-1" />

                                <BlockMath math="-a^2-2a=-a-1" />

                                <BlockMath math="a^2+a-1=0" />

                                <p>
                                    따라서
                                </p>

                                <BlockMath math="a=\frac{-1\pm\sqrt5}{2}" />
                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">
                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="a=\frac{-1+\sqrt5}{2}\quad\text{또는}\quad a=\frac{-1-\sqrt5}{2}" />
                            </div>
                        </div>
                    </details>
                </div>

                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정수근 문제에서는 가능한 정수값을 줄이는 것이 중요하고,
                        공통근 문제에서는 두 방정식을 동시에 만족하는 근을 하나의 문자로 두는 것이 중요합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        두 경우 모두 근을 직접 구하려고 하기보다,
                        주어진 조건을 이용하여 가능한 근의 범위를 좁혀 가는 것이 핵심입니다.
                    </p>
                </div>
            </section>

        </>
    )
};