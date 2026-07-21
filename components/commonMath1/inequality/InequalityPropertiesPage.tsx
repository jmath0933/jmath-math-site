"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";



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

                <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

                    <details className="rounded-xl border border-white/15 p-5">
                        <summary className="cursor-pointer font-semibold text-yellow-300">
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

            



        </>
    )
};