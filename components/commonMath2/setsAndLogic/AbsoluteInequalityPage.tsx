"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AbsoluteInequalityPage() {
    return (
        <>
            {/* 2.20 절대부등식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.20 절대부등식
                </h2>

                <p className="leading-8 text-gray-300">
                    변수의 값에 관계없이 항상 성립하는 부등식을 절대부등식이라고 합니다.
                    절대부등식에서는 부등식이 성립하는 것뿐만 아니라
                    등호가 언제 성립하는지도 함께 확인하는 것이 중요합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 절대부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            변수에 어떤 실수를 대입하더라도 항상 성립하는 부등식을
                            <span className="font-bold text-yellow-300"> 절대부등식</span>이라고
                            합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            실수의 제곱은 항상 <InlineMath math="0" /> 이상이므로
                        </p>

                        <BlockMath
                            math={String.raw`
a^2\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            은 실수 <InlineMath math="a" />의 값에 관계없이 항상 성립합니다.
                            따라서 절대부등식입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                등호 성립 조건
                            </p>

                            <BlockMath
                                math={String.raw`
a^2\ge0
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                에서 등호는
                            </p>

                            <BlockMath
                                math={String.raw`
a=0
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                일 때 성립합니다.
                            </p>
                        </div>
                    </div>


                    {/* 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 제곱의 합으로 나타나는 절대부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            각각의 제곱은 항상 <InlineMath math="0" /> 이상이므로
                            여러 제곱의 합도 항상 <InlineMath math="0" /> 이상입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+b^2\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            등호가 성립하려면 두 제곱이 모두{" "}
                            <InlineMath math="0" />이어야 하므로
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+b^2=0
\quad\Longleftrightarrow\quad
a=b=0
`}
                        />

                        <p className="mt-5 leading-8 text-gray-300">
                            같은 원리로
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+b^2+c^2\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, 등호는 <InlineMath math="a=b=c=0" />일 때 성립합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="leading-8 text-gray-300">
                                제곱의 합이 <InlineMath math="0" />이면
                                각각의 제곱이 모두 <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+b^2=0
\quad\Longleftrightarrow\quad
a=b=0
`}
                            />
                        </div>
                    </div>


                    {/* 3 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 완전제곱식으로 나타나는 절대부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            완전제곱식은 항상 <InlineMath math="0" /> 이상이므로
                            다음 부등식은 항상 성립합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+2ab+b^2
=(a+b)^2
\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            등호는
                        </p>

                        <BlockMath
                            math={String.raw`
a+b=0
\quad\Longleftrightarrow\quad
a=-b
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때 성립합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
a^2-2ab+b^2
=(a-b)^2
\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에서는 등호가
                        </p>

                        <BlockMath
                            math={String.raw`
a-b=0
\quad\Longleftrightarrow\quad
a=b
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때 성립합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\boxed{
\begin{aligned}
a^2+2ab+b^2&\ge0
&&\text{등호: }a=-b\\[4pt]
a^2-2ab+b^2&\ge0
&&\text{등호: }a=b
\end{aligned}
}
`}
                            />
                        </div>
                    </div>


                    {/* 4 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. <InlineMath math="a^2+ab+b^2" />의 절대부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="a^2+ab+b^2" />는 완전제곱식으로 변형하여
                            항상 <InlineMath math="0" /> 이상임을 확인할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
a^2+ab+b^2
&=\left(a+\frac{b}{2}\right)^2+\frac34b^2\\
&\ge0
\end{aligned}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            등호가 성립하려면
                        </p>

                        <BlockMath
                            math={String.raw`
\left(a+\frac{b}{2}\right)^2=0,
\qquad
\frac34b^2=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이어야 하므로 <InlineMath math="b=0" />이고,
                            이에 따라 <InlineMath math="a=0" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
a^2+ab+b^2\ge0
\qquad
\text{등호는 }a=b=0\text{일 때 성립}
}
`}
                        />
                    </div>


                    {/* 5 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 세 변수의 절대부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            실수 <InlineMath math="a,\ b,\ c" />에 대하여 다음 식을
                            제곱의 합으로 변형해 봅시다.
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+b^2+c^2-ab-bc-ca
`}
                        />

                        <p className="leading-8 text-gray-300">
                            각 항의 차를 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
&(a-b)^2+(b-c)^2+(c-a)^2\\
&=2(a^2+b^2+c^2-ab-bc-ca)
\end{aligned}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
a^2+b^2+c^2-ab-bc-ca
=
\frac12\left\{
(a-b)^2+(b-c)^2+(c-a)^2
\right\}
\ge0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            등호가 성립하려면 세 제곱이 모두{" "}
                            <InlineMath math="0" />이어야 하므로
                        </p>

                        <BlockMath
                            math={String.raw`
a-b=0,\qquad
b-c=0,\qquad
c-a=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            즉,
                        </p>

                        <BlockMath
                            math={String.raw`
a=b=c
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때 등호가 성립합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <BlockMath
                                math={String.raw`
\boxed{
a^2+b^2+c^2-ab-bc-ca\ge0
\qquad
\text{등호는 }a=b=c\text{일 때 성립}
}
`}
                            />
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-300">
                                음이 아닌 두 실수 <InlineMath math="a,\ b" />에 대하여
                                보기에서 항상 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-6 space-y-5 pl-4 text-gray-300">
                                <div>
                                    ㄱ.{" "}
                                    <InlineMath math="\sqrt{a}-\sqrt{b}\le\sqrt{a+b}" />
                                </div>

                                <div>
                                    ㄴ.{" "}
                                    <InlineMath math="\sqrt{a+b}\le\sqrt{a}+\sqrt{b}" />
                                </div>

                                <div>
                                    ㄷ.{" "}
                                    <InlineMath math="\sqrt{a}+\sqrt{b}\le\sqrt{2(a+b)}" />
                                </div>

                                <div>
                                    ㄹ.{" "}
                                    <InlineMath math="\dfrac1a+\dfrac1b>\dfrac2{a+b}" />
                                    {" "}
                                    <InlineMath math="(ab\ne0)" />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ, ㄴ</div>
                                <div>② ㄴ, ㄷ</div>
                                <div>③ ㄱ, ㄹ</div>
                                <div>④ ㄴ, ㄷ, ㄹ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ, ㄹ</div>
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
                                        ㄱ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="b\ge0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt a-\sqrt b\le\sqrt a
`}
                                    />

                                    <p className="leading-8">
                                        이고, <InlineMath math="a+b\ge a" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt a\le\sqrt{a+b}
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt a-\sqrt b
\le
\sqrt{a+b}
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 항상 참입니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.
                                    </p>

                                    <p className="leading-8">
                                        양변은 모두 <InlineMath math="0" /> 이상이므로
                                        제곱하여 비교할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
(\sqrt a+\sqrt b)^2
&=a+b+2\sqrt{ab}\\
&\ge a+b
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt{a+b}\le\sqrt a+\sqrt b
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 항상 참입니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.
                                    </p>

                                    <p className="leading-8">
                                        양변을 제곱하여 비교하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2(a+b)-(\sqrt a+\sqrt b)^2
&=2a+2b-a-b-2\sqrt{ab}\\
&=a+b-2\sqrt{ab}\\
&=(\sqrt a-\sqrt b)^2\\
&\ge0
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt a+\sqrt b
\le
\sqrt{2(a+b)}
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 항상 참입니다.
                                    </p>
                                </div>


                                {/* ㄹ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄹ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a,\ b" />는 음이 아닌 실수이고{" "}
                                        <InlineMath math="ab\ne0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a>0,\qquad b>0
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 두 식의 차를 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
\frac1a+\frac1b-\frac2{a+b}
&=\frac{a+b}{ab}-\frac2{a+b}\\
&=\frac{(a+b)^2-2ab}{ab(a+b)}\\
&=\frac{a^2+b^2}{ab(a+b)}
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        여기서 <InlineMath math="a>0,\ b>0" />이므로
                                        분자와 분모가 모두 양수입니다. 따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac1a+\frac1b>\frac2{a+b}
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 항상 참입니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ ㄱ, ㄴ, ㄷ, ㄹ}}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        절대부등식은 한쪽에서 다른 쪽을 빼거나,
                                        양변이 <InlineMath math="0" /> 이상일 때 제곱하여
                                        그 차를 제곱의 형태로 나타내면 쉽게 확인할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(\sqrt a-\sqrt b)^2\ge0
`}
                                    />

                                    <p className="leading-8">
                                        와 같은 기본적인 제곱의 성질이 여러 절대부등식의
                                        출발점이 됩니다.
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
                                <InlineMath math="a,\ b" />가 실수일 때, 부등식이 참이 되게 하는
                                진리집합이 전체집합인 것만을 보기에서 있는 대로 고른 것은?
                            </p>

                            <div className="mt-6 space-y-5 pl-4 text-gray-300">
                                <div>
                                    ㄱ. <InlineMath math="a^2-ab+b^2\ge0" />
                                </div>

                                <div>
                                    ㄴ. <InlineMath math="|a|-|b|\le|a+b|" />
                                </div>

                                <div>
                                    ㄷ. <InlineMath math="a^2+2ab+2b^2\ge0" />
                                </div>

                                <div>
                                    ㄹ. <InlineMath math="a^2+b^2+1\ge ab+a+b" />
                                </div>
                            </div>

                            <div className="mt-6 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄱ</div>
                                <div>② ㄴ, ㄷ</div>
                                <div>③ ㄷ, ㄹ</div>
                                <div>④ ㄱ, ㄴ, ㄹ</div>
                                <div>⑤ ㄱ, ㄴ, ㄷ, ㄹ</div>
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
                                        ㄱ.
                                    </p>

                                    <p className="leading-8">
                                        식을 제곱의 합으로 나타내면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
a^2-ab+b^2
&=\left(a-\frac{b}{2}\right)^2+\frac34b^2\\
&\ge0
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 모든 실수 <InlineMath math="a,\ b" />에 대하여
                                        항상 참입니다.
                                    </p>

                                    <p className="mt-2 font-bold text-green-300">
                                        따라서 ㄱ은 참입니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.
                                    </p>

                                    <p className="leading-8">
                                        삼각부등식에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|a|
=|(a+b)-b|
\le |a+b|+|b|
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|a|-|b|\le|a+b|
`}
                                    />

                                    <p className="leading-8">
                                        가 모든 실수 <InlineMath math="a,\ b" />에 대하여
                                        항상 성립합니다.
                                    </p>

                                    <p className="mt-2 font-bold text-green-300">
                                        따라서 ㄴ은 참입니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.
                                    </p>

                                    <p className="leading-8">
                                        주어진 식을 완전제곱식의 합으로 변형하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
a^2+2ab+2b^2
&=(a+b)^2+b^2\\
&\ge0
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 모든 실수 <InlineMath math="a,\ b" />에 대하여
                                        항상 참입니다.
                                    </p>

                                    <p className="mt-2 font-bold text-green-300">
                                        따라서 ㄷ은 참입니다.
                                    </p>
                                </div>


                                {/* ㄹ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄹ.
                                    </p>

                                    <p className="leading-8">
                                        오른쪽을 왼쪽으로 이항하여 그 차를 살펴보면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+b^2+1-ab-a-b
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 이 식을 제곱의 합으로 변형하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
&a^2+b^2+1-ab-a-b\\
&=\frac12\left\{
(a-b)^2+(a-1)^2+(b-1)^2
\right\}\\
&\ge0
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^2+b^2+1\ge ab+a+b
`}
                                    />

                                    <p className="leading-8">
                                        는 모든 실수 <InlineMath math="a,\ b" />에 대하여
                                        항상 성립합니다.
                                    </p>

                                    <p className="mt-2 font-bold text-green-300">
                                        따라서 ㄹ은 참입니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ ㄱ, ㄴ, ㄷ, ㄹ}}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        모든 실수에 대하여 성립하는지 확인할 때는 식을
                                        <span className="font-bold text-white">
                                            {" "}제곱 또는 제곱의 합
                                        </span>
                                        으로 변형하는 것이 중요합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(a+b)^2\ge0,\qquad
(a-b)^2\ge0
`}
                                    />

                                    <p className="leading-8">
                                        처럼 항상 <InlineMath math="0" /> 이상인 식으로 나타낼 수
                                        있으면 절대부등식임을 확인할 수 있습니다.
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
                                실수 <InlineMath math="a,\ b,\ c" />에 대하여 보기에서
                                옳은 것만을 있는 대로 고르시오.
                            </p>

                            <div className="mt-6 space-y-5 pl-4 text-gray-300">
                                <div>
                                    ㄱ.{" "}
                                    <InlineMath
                                        math="\sqrt a-\sqrt b>\sqrt{a-b}"
                                    />{" "}
                                    <InlineMath math="(a>b>0)" />
                                </div>

                                <div>
                                    ㄴ.{" "}
                                    <InlineMath
                                        math="a^3+b^3+c^3\ge3abc"
                                    />{" "}
                                    <InlineMath math="(a,\ b,\ c\text{는 양수})" />
                                </div>

                                <div>
                                    ㄷ.{" "}
                                    <InlineMath math="|a|+|b|\ge|a-b|" />
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
                                        ㄱ.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a>b>0" />이므로
                                        두 변은 모두 양수입니다. 제곱하여 비교하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
(\sqrt a-\sqrt b)^2
&=a+b-2\sqrt{ab}
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 이때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
(a-b)-(\sqrt a-\sqrt b)^2
&=a-b-(a+b-2\sqrt{ab})\\
&=2\sqrt{ab}-2b\\
&=2\sqrt b(\sqrt a-\sqrt b)\\
&>0
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(\sqrt a-\sqrt b)^2<a-b
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt a-\sqrt b<\sqrt{a-b}
`}
                                    />

                                    <p className="font-bold text-red-300">
                                        이므로 ㄱ은 옳지 않습니다.
                                    </p>
                                </div>


                                {/* ㄴ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ.
                                    </p>

                                    <p className="leading-8">
                                        왼쪽에서 오른쪽을 빼고 인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
&a^3+b^3+c^3-3abc\\
&=\frac12(a+b+c)
\left\{
(a-b)^2+(b-c)^2+(c-a)^2
\right\}
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        입니다. <InlineMath math="a,\ b,\ c" />가 양수이므로{" "}
                                        <InlineMath math="a+b+c>0" />이고,
                                        제곱의 합은 항상 <InlineMath math="0" /> 이상입니다.
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^3+b^3+c^3-3abc\ge0
`}
                                    />

                                    <p className="leading-8">
                                        즉,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^3+b^3+c^3\ge3abc
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 ㄴ은 옳습니다.
                                    </p>
                                </div>


                                {/* ㄷ */}
                                <div>
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.
                                    </p>

                                    <p className="leading-8">
                                        양변은 모두 <InlineMath math="0" /> 이상이므로
                                        제곱하여 비교합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
(|a|+|b|)^2-|a-b|^2
&=a^2+2|ab|+b^2-(a-b)^2\\
&=2|ab|+2ab\\
&=2(|ab|+ab)
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        여기서 모든 실수 <InlineMath math="ab" />에 대하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|ab|+ab\ge0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(|a|+|b|)^2\ge|a-b|^2
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|a|+|b|\ge|a-b|
`}
                                    />

                                    <p className="font-bold text-green-300">
                                        이므로 ㄷ은 옳습니다.
                                    </p>
                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{ㄴ, ㄷ}}
`}
                                    />
                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        절대부등식은 식의 차를 구한 뒤
                                        제곱의 합이나 항상 <InlineMath math="0" /> 이상인
                                        형태로 변형하여 판단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a^3+b^3+c^3-3abc
=
\frac12(a+b+c)
\left\{
(a-b)^2+(b-c)^2+(c-a)^2
\right\}
`}
                                    />

                                    <p className="leading-8">
                                        와 같은 변형은 세 변수의 절대부등식을 증명할 때
                                        자주 이용됩니다.
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
                                다음은 <InlineMath math="a>0,\ b>0" />일 때, 부등식
                            </p>

                            <BlockMath
                                math={String.raw`
\sqrt{ab}\ge\frac{2ab}{a+b}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가 성립함을 증명하는 과정이다.
                            </p>

                            <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">
                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\sqrt{ab}-\frac{2ab}{a+b}
&=\frac{\sqrt{ab}(a+b)-2ab}{a+b}\\
&=\frac{\sqrt{ab}}{a+b}\times\boxed{\text{(가)}}
\end{aligned}
`}
                                />

                                <p className="mt-5 leading-8 text-gray-300">
                                    그런데 <InlineMath math="a+b>0" />,{" "}
                                    <InlineMath math="\sqrt{ab}>0" />,{" "}
                                    <InlineMath math="\boxed{\text{(가)}}\ge0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{ab}-\frac{2ab}{a+b}
\ \boxed{\text{(나)}}\ 0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{ab}
\ \boxed{\text{(나)}}\
\frac{2ab}{a+b}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이다. 이때 등호는 <InlineMath math="\boxed{\text{(다)}}" />일 때
                                    성립한다.
                                </p>
                            </div>

                            <p className="mt-6 leading-8 text-gray-300">
                                위의 과정에서 (가), (나), (다)에 알맞은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-8 gap-y-4 md:grid-cols-[auto_1fr_1fr_1fr]">
                                <div></div>
                                <div className="font-semibold text-gray-400">(가)</div>
                                <div className="font-semibold text-gray-400">(나)</div>
                                <div className="font-semibold text-gray-400">(다)</div>

                                <div>①</div>
                                <div><InlineMath math="(\sqrt a-\sqrt b)^2" /></div>
                                <div><InlineMath math="\ge" /></div>
                                <div><InlineMath math="a=b" /></div>

                                <div>②</div>
                                <div><InlineMath math="(\sqrt a-\sqrt b)^2" /></div>
                                <div><InlineMath math="\ge" /></div>
                                <div><InlineMath math="ab=0" /></div>

                                <div>③</div>
                                <div><InlineMath math="(\sqrt a-\sqrt b)^2" /></div>
                                <div><InlineMath math="\le" /></div>
                                <div><InlineMath math="ab=0" /></div>

                                <div>④</div>
                                <div><InlineMath math="(\sqrt a+\sqrt b)^2" /></div>
                                <div><InlineMath math="\le" /></div>
                                <div><InlineMath math="a=b" /></div>

                                <div>⑤</div>
                                <div><InlineMath math="(\sqrt a+\sqrt b)^2" /></div>
                                <div><InlineMath math="\le" /></div>
                                <div><InlineMath math="a=b" /></div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 식의 차를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\sqrt{ab}-\frac{2ab}{a+b}
&=\frac{\sqrt{ab}(a+b)-2ab}{a+b}\\
&=\frac{\sqrt{ab}}{a+b}
\left(a+b-2\sqrt{ab}\right)\\
&=\frac{\sqrt{ab}}{a+b}
(\sqrt a-\sqrt b)^2
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\text{(가)}=(\sqrt a-\sqrt b)^2}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b>0,\qquad
\sqrt{ab}>0,\qquad
(\sqrt a-\sqrt b)^2\ge0
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{ab}-\frac{2ab}{a+b}\ge0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\text{(나)}=\ge}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    등호가 성립하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
(\sqrt a-\sqrt b)^2=0
`}
                                />

                                <p className="leading-8">
                                    이어야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt a=\sqrt b
\quad\Longleftrightarrow\quad
a=b
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\text{(다)}=a=b}
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{①}}
`}
                                    />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        부등식을 증명할 때는 두 변의 차를 구하여
                                        항상 <InlineMath math="0" /> 이상인 식으로 변형합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt{ab}-\frac{2ab}{a+b}
=
\frac{\sqrt{ab}}{a+b}
(\sqrt a-\sqrt b)^2
\ge0
`}
                                    />

                                    <p className="leading-8">
                                        또한 등호는 마지막 제곱식이{" "}
                                        <InlineMath math="0" />이 되는 조건을 확인하여 구합니다.
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
                            절대부등식은 식을 제곱 또는 제곱의 합으로 변형하여
                            항상 <InlineMath math="0" /> 이상임을 확인하는 경우가 많습니다.
                            이때 <span className="font-bold text-yellow-300">등호가 성립하는 조건</span>도
                            반드시 함께 확인합니다.
                        </p>

                        <div className="mt-6 space-y-5">

                            <BlockMath
                                math={String.raw`
a^2\ge0
\qquad
\text{등호: }a=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2+b^2\ge0
\qquad
\text{등호: }a=b=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2+ab+b^2\ge0
\qquad
\text{등호: }a=b=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2+2ab+b^2\ge0
\qquad
\text{등호: }a=-b
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2-2ab+b^2\ge0
\qquad
\text{등호: }a=b
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2+b^2+c^2-ab-bc-ca\ge0
\qquad
\text{등호: }a=b=c
`}
                            />

                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                절대부등식의 핵심
                            </p>

                            <BlockMath
                                math={String.raw`
\text{식을 제곱의 합으로 변형}
\quad\Longrightarrow\quad
\text{항상 }0\text{ 이상}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{등호 성립}
\quad\Longleftrightarrow\quad
\text{각 제곱이 모두 }0
`}
                            />
                        </div>
                    </div>

                </div>

            </section>

            {/* 2.21 산술평균과 기하평균 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.21 산술평균과 기하평균
                </h2>

                <p className="leading-8 text-gray-300">
                    양수인 두 수의 산술평균과 기하평균의 관계를 이용하면
                    여러 식의 최댓값과 최솟값을 구할 수 있습니다.
                    중요한 것은 단순히 공식을 적용하는 것이 아니라,
                    산술기하를 적용할 두 항을 알맞게 만드는 것입니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 산술평균과 기하평균 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 산술평균과 기하평균
                        </h3>

                        <p className="leading-8 text-gray-300">
                            산술평균은 각각의 값을 더한 후 그 개수로 나눈 평균이고,
                            기하평균은 각각의 값을 곱한 후 그 곱을 거듭제곱근으로
                            나타낸 평균입니다.
                        </p>

                        <div className="mt-5 space-y-4">
                            <div>
                                <p className="font-semibold text-white">
                                    두 양수 <InlineMath math="a,\ b" />의 산술평균
                                </p>

                                <BlockMath math={String.raw`
                        \frac{a+b}{2}
                    `} />
                            </div>

                            <div>
                                <p className="font-semibold text-white">
                                    두 양수 <InlineMath math="a,\ b" />의 기하평균
                                </p>

                                <BlockMath math={String.raw`
                        \sqrt{ab}
                    `} />
                            </div>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 양수의 산술평균은 항상 기하평균보다 크거나 같습니다.
                        </p>

                        <BlockMath math={String.raw`
                \frac{a+b}{2}\ge\sqrt{ab}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 다음과 같이 나타낼 수 있습니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{a+b\ge2\sqrt{ab}}
            `} />

                        <p className="leading-8 text-gray-300">
                            등호는 두 수가 같을 때, 즉{" "}
                            <InlineMath math="a=b" />일 때 성립합니다.
                        </p>
                    </div>


                    {/* 2. 산술기하를 사용하는 방법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 산술기하를 사용하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            산술평균과 기하평균의 관계를 사용할 때는
                            먼저 산술기하를 적용할 두 항이 양수인지 확인해야 합니다.
                        </p>

                        <BlockMath math={String.raw`
                A>0,\quad B>0
            `} />

                        <BlockMath math={String.raw`
                A+B\ge2\sqrt{AB}
            `} />

                        <p className="leading-8 text-gray-300">
                            최댓값이나 최솟값을 구하려면 이 관계식을 정리했을 때
                            한쪽 변에서 문자가 없어져 상수가 되어야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                산술기하의 핵심
                            </p>

                            <div className="mt-3 space-y-2 leading-8 text-gray-300">
                                <p>① 산술기하를 적용할 두 항이 양수인지 확인합니다.</p>
                                <p>② 산술기하를 적용할 두 항을 정합니다.</p>
                                <p>③ 주어진 조건이나 식의 변형을 이용하여 한쪽 변을 상수로 만듭니다.</p>
                                <p>④ 두 항이 같아지는 등호 조건을 확인합니다.</p>
                            </div>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 산술기하를 적용했더라도 한쪽 변에 문자가 남아 있다면
                            그것만으로는 최댓값이나 최솟값을 결정할 수 없습니다.
                        </p>
                    </div>


                    {/* 3. 주어진 조건을 이용하면 상수가 되는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 주어진 조건을 이용하면 상수가 되는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            주어진 조건을 산술기하의 관계식에 대입하여
                            한쪽 변을 상수로 만들 수 있습니다.
                        </p>

                        {/* 예시 1 */}
                        <div className="mt-6">
                            <p className="font-bold text-white">
                                예시 1
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="a>0,\ b>0" />이고{" "}
                                <InlineMath math="a+b=20" />일 때,{" "}
                                <InlineMath math="ab" />의 최댓값을 구해 봅시다.
                            </p>

                            <BlockMath math={String.raw`
                    a+b\ge2\sqrt{ab}
                `} />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="a+b=20" />이므로
                            </p>

                            <BlockMath math={String.raw`
                    20\ge2\sqrt{ab}
                `} />

                            <BlockMath math={String.raw`
                    ab\le100
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는 <InlineMath math="a=b" />일 때 성립하므로{" "}
                                <InlineMath math="a=b=10" />일 때{" "}
                                <InlineMath math="ab" />의 최댓값은{" "}
                                <InlineMath math="100" />입니다.
                            </p>
                        </div>

                        {/* 예시 2 */}
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="font-bold text-white">
                                예시 2
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="x>0,\ y>0" />이고{" "}
                                <InlineMath math="xy=8" />일 때,{" "}
                                <InlineMath math="x+2y" />의 최솟값을 구해 봅시다.
                            </p>

                            <BlockMath math={String.raw`
                    x+2y\ge2\sqrt{2xy}
                `} />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="xy=8" />이므로
                            </p>

                            <BlockMath math={String.raw`
                    x+2y\ge2\sqrt{16}=8
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는{" "}
                                <InlineMath math="x=2y" />일 때 성립합니다.
                                이를 <InlineMath math="xy=8" />과 함께 만족시키면
                            </p>

                            <BlockMath math={String.raw`
                    x=4,\qquad y=2
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서 <InlineMath math="x+2y" />의 최솟값은{" "}
                                <InlineMath math="8" />입니다.
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                합이 일정하면 곱의 최댓값을,
                                곱이 일정하면 합의 최솟값을 구할 수 있습니다.
                                이때 주어진 조건을 이용하여 관계식의 한쪽 변을
                                상수로 만듭니다.
                            </p>
                        </div>
                    </div>


                    {/* 4. 곱이 상수가 되도록 식을 변형하는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 곱이 상수가 되도록 식을 변형하는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 항을 곱했을 때 문자가 남는다면,
                            같은 수를 더하고 빼서 곱이 상수가 되는 두 항을 만듭니다.
                        </p>

                        {/* 예시 1 */}
                        <div className="mt-6">
                            <p className="font-bold text-white">
                                예시 1
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="x>0" />일 때{" "}
                                <InlineMath math="\displaystyle x+\frac4x" />의 최솟값을 구해 봅시다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                두 항의 곱에서 바로 문자가 없어집니다.
                            </p>

                            <BlockMath math={String.raw`
                    x\cdot\frac4x=4
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath math={String.raw`
                    x+\frac4x
                    \ge
                    2\sqrt{x\cdot\frac4x}
                    =4
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는{" "}
                                <InlineMath math="\displaystyle x=\frac4x" />일 때 성립하므로{" "}
                                <InlineMath math="x=2" />일 때 최솟값은{" "}
                                <InlineMath math="4" />입니다.
                            </p>
                        </div>

                        {/* 예시 2 */}
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="font-bold text-white">
                                예시 2
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="x>0" />일 때{" "}
                                <InlineMath math="\displaystyle x+\frac4{x+1}" />의 최솟값을
                                구해 봅시다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="x" />와{" "}
                                <InlineMath math="\displaystyle \frac4{x+1}" />을 그대로 곱하면
                                문자가 없어지지 않습니다.
                            </p>

                            <BlockMath math={String.raw`
                    x\cdot\frac4{x+1}
                    =
                    \frac{4x}{x+1}
                `} />

                            <p className="leading-8 text-gray-300">
                                따라서 분모의{" "}
                                <InlineMath math="x+1" />에 맞추어{" "}
                                <InlineMath math="x=(x+1)-1" />로 변형합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    x+\frac4{x+1}
                    &=(x+1)+\frac4{x+1}-1\\
                    &\ge
                    2\sqrt{(x+1)\cdot\frac4{x+1}}-1\\
                    &=4-1\\
                    &=3
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는{" "}
                                <InlineMath math="\displaystyle x+1=\frac4{x+1}" />일 때 성립하므로{" "}
                                <InlineMath math="x=1" />일 때 최솟값은{" "}
                                <InlineMath math="3" />입니다.
                            </p>
                        </div>

                        {/* 예시 3 */}
                        <div className="mt-8 border-t border-white/10 pt-6">
                            <p className="font-bold text-white">
                                예시 3
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="x>1" />일 때{" "}
                                <InlineMath math="\displaystyle x+\frac4{x-1}" />의 최솟값을
                                구해 봅시다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                분모의{" "}
                                <InlineMath math="x-1" />에 맞추어{" "}
                                <InlineMath math="x=(x-1)+1" />로 변형합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    x+\frac4{x-1}
                    &=(x-1)+\frac4{x-1}+1\\
                    &\ge
                    2\sqrt{(x-1)\cdot\frac4{x-1}}+1\\
                    &=4+1\\
                    &=5
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는{" "}
                                <InlineMath math="\displaystyle x-1=\frac4{x-1}" />일 때 성립하므로{" "}
                                <InlineMath math="x=3" />일 때 최솟값은{" "}
                                <InlineMath math="5" />입니다.
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                분수식에서는 분모에 있는 식과 같은 식을 다른 항에서도
                                만들어 주면 두 항의 곱에서 문자를 없앨 수 있습니다.
                            </p>
                        </div>
                    </div>


                    {/* 5. 전개해서 식을 정리하는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 전개해서 식을 정리하는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            곱으로 이루어진 식에서는 각 괄호에 산술기하를
                            따로 적용하기보다 먼저 전개하여
                            곱이 상수가 되는 두 항을 찾습니다.
                        </p>

                        <div className="mt-6">
                            <p className="font-bold text-white">
                                예시
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="a>0,\ b>0" />일 때
                                다음 식의 최솟값을 구해 봅시다.
                            </p>

                            <BlockMath math={String.raw`
                    (a+b)\left(\frac1a+\frac4b\right)
                `} />

                            <p className="leading-8 text-gray-300">
                                먼저 식을 전개합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    (a+b)\left(\frac1a+\frac4b\right)
                    &=
                    1+\frac{4a}{b}+\frac ba+4\\
                    &=
                    5+\frac{4a}{b}+\frac ba
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                이때 두 항의 곱은
                            </p>

                            <BlockMath math={String.raw`
                    \frac{4a}{b}\cdot\frac ba=4
                `} />

                            <p className="leading-8 text-gray-300">
                                로 일정하므로 산술기하를 적용하면
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    5+\frac{4a}{b}+\frac ba
                    &\ge
                    5+2\sqrt{\frac{4a}{b}\cdot\frac ba}\\
                    &=5+4\\
                    &=9
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는
                            </p>

                            <BlockMath math={String.raw`
                    \frac{4a}{b}=\frac ba
                `} />

                            <p className="leading-8 text-gray-300">
                                일 때 성립합니다.{" "}
                                <InlineMath math="a>0,\ b>0" />이므로
                            </p>

                            <BlockMath math={String.raw`
                    b=2a
                `} />

                            <p className="leading-8 text-gray-300">
                                일 때 최솟값은 <InlineMath math="9" />입니다.
                            </p>
                        </div>

                        {/* 잘못된 풀이 */}
                        <div className="mt-7 rounded-xl border border-red-500/30 bg-red-500/5 p-5">
                            <p className="font-bold text-red-300">
                                주의 — 전개하지 않고 각각 적용하면 안 됩니다
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                다음과 같이 각 괄호에 산술기하를 따로 적용하면
                            </p>

                            <BlockMath math={String.raw`
                    a+b\ge2\sqrt{ab}
                `} />

                            <BlockMath math={String.raw`
                    \frac1a+\frac4b
                    \ge
                    2\sqrt{\frac4{ab}}
                `} />

                            <p className="leading-8 text-gray-300">
                                두 부등식을 곱하여
                            </p>

                            <BlockMath math={String.raw`
                    (a+b)\left(\frac1a+\frac4b\right)\ge8
                `} />

                            <p className="leading-8 text-gray-300">
                                을 얻을 수 있습니다.
                                그러나 이것만으로 최솟값을
                                <InlineMath math="8" />이라고 할 수는 없습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                첫 번째 부등식의 등호 조건은
                            </p>

                            <BlockMath math={String.raw`
                    a=b
                `} />

                            <p className="leading-8 text-gray-300">
                                이고, 두 번째 부등식의 등호 조건은
                            </p>

                            <BlockMath math={String.raw`
                    \frac1a=\frac4b
                    \quad\Longleftrightarrow\quad
                    b=4a
                `} />

                            <p className="leading-8 text-gray-300">
                                입니다. 두 등호 조건은
                                <InlineMath math="a>0,\ b>0" />에서 동시에
                                성립할 수 없습니다.
                            </p>

                            <p className="mt-4 font-semibold leading-8 text-red-200">
                                따라서 부등식 자체는 참이지만,
                                8은 실제로 얻을 수 있는 최솟값이 아닙니다.
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                곱으로 된 식에서는 먼저 전개하여 곱이 상수가 되는
                                두 항을 찾습니다. 또한 산술기하를 여러 번 사용했다면
                                각각의 등호 조건이 동시에 성립하는지도 확인해야 합니다.
                            </p>
                        </div>
                    </div>


                    {/* 6. 여러 문자를 하나의 덩어리로 보는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            6. 여러 문자를 하나의 덩어리로 보는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            여러 문자가 들어 있어도 같은 식이 반복된다면
                            그 식 전체를 하나의 항으로 생각할 수 있습니다.
                        </p>

                        <div className="mt-6">
                            <p className="font-bold text-white">
                                예시
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="a>0,\ b>0,\ c>0" />일 때
                                다음 식의 최솟값을 구해 봅시다.
                            </p>

                            <BlockMath math={String.raw`
                    (a+b+c)
                    \left(
                    \frac1a+\frac4{b+c}
                    \right)
                `} />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="b+c" />를 하나의 덩어리로 생각하고
                                식을 전개하면
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    &(a+b+c)
                    \left(
                    \frac1a+\frac4{b+c}
                    \right)\\
                    &=
                    1+\frac{b+c}{a}
                    +\frac{4a}{b+c}+4\\
                    &=
                    5+\frac{b+c}{a}
                    +\frac{4a}{b+c}
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                두 항의 곱은
                            </p>

                            <BlockMath math={String.raw`
                    \frac{b+c}{a}\cdot
                    \frac{4a}{b+c}
                    =4
                `} />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math={String.raw`
                    \begin{aligned}
                    5+\frac{b+c}{a}
                    +\frac{4a}{b+c}
                    &\ge
                    5+
                    2\sqrt{
                    \frac{b+c}{a}\cdot
                    \frac{4a}{b+c}
                    }\\
                    &=9
                    \end{aligned}
                `} />

                            <p className="leading-8 text-gray-300">
                                등호는
                            </p>

                            <BlockMath math={String.raw`
                    \frac{b+c}{a}
                    =
                    \frac{4a}{b+c}
                `} />

                            <p className="leading-8 text-gray-300">
                                일 때 성립하고
                                <InlineMath math="a>0,\ b>0,\ c>0" />이므로
                            </p>

                            <BlockMath math={String.raw`
                    b+c=2a
                `} />

                            <p className="leading-8 text-gray-300">
                                일 때 최솟값은 <InlineMath math="9" />입니다.
                            </p>
                        </div>

                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="font-bold text-blue-300">
                                핵심
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                문자의 개수가 많아져도 같은 식이 반복되면
                                그 식 전체를 하나의 항으로 생각합니다.
                                결국 곱이 상수가 되는 두 항을 찾는다는 원리는 같습니다.
                            </p>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                두 양수 <InlineMath math="x,\ y" />에 대하여{" "}
                                <InlineMath math="\displaystyle x+y=\frac14" />일 때,{" "}
                                <InlineMath math="\displaystyle \frac1x+\frac1y" />의 최솟값을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x>0,\ y>0" />이므로 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                x+y\ge2\sqrt{xy}
            `} />

                                <p className="leading-10">
                                    이때 <InlineMath math="\displaystyle x+y=\frac14" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \frac14\ge2\sqrt{xy}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                xy\le\frac1{64}
            `} />

                                <p className="leading-10">
                                    한편, <InlineMath math="\displaystyle x+y=\frac14" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac1x+\frac1y
                &=
                \frac{x+y}{xy}\\
                &=
                \frac{1}{4xy}\\
                &\ge16
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 <InlineMath math="x=y" />일 때 성립합니다.
                                    주어진 조건과 함께 생각하면
                                </p>

                                <BlockMath math={String.raw`
                x=y=\frac18
            `} />

                                <p className="leading-8">
                                    이므로 등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{16}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        주어진 조건{" "}
                                        <InlineMath math="\displaystyle x+y=\frac14" />을 이용하여
                                        먼저 <InlineMath math="xy" />의 최댓값을 구합니다.
                                        합이 일정할 때 두 양수의 곱은 두 수가 같을 때
                                        최대가 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x+y=\frac14
                    \quad\Longrightarrow\quad
                    xy\le\frac1{64}
                `} />

                                    <p className="leading-10">
                                        그리고{" "}
                                        <InlineMath math="\displaystyle
                        \frac1x+\frac1y=\frac{x+y}{xy}
                    " />
                                        이므로 <InlineMath math="xy" />가 최대일 때
                                        주어진 식이 최소가 됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x>0" />인 실수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="\displaystyle 9x+\frac ax" />{" "}
                                <InlineMath math="(a>0)" />의 최솟값이{" "}
                                <InlineMath math="18" />일 때, 상수 <InlineMath math="a" />의
                                값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x>0,\ a>0" />이므로{" "}
                                    <InlineMath math="9x" />와{" "}
                                    <InlineMath math="\displaystyle \frac ax" />는 모두 양수입니다.
                                    따라서 산술평균과 기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                9x+\frac ax
                &\ge
                2\sqrt{9x\cdot\frac ax}\\
                &=2\sqrt{9a}\\
                &=6\sqrt a
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                9x=\frac ax
            `} />

                                <p className="leading-8">
                                    일 때 성립하므로 주어진 식의 최솟값은{" "}
                                    <InlineMath math="6\sqrt a" />입니다.
                                </p>

                                <p className="leading-8">
                                    그런데 문제에서 최솟값이 <InlineMath math="18" />이라고
                                    하였으므로
                                </p>

                                <BlockMath math={String.raw`
                6\sqrt a=18
            `} />

                                <BlockMath math={String.raw`
                \sqrt a=3
            `} />

                                <BlockMath math={String.raw`
                a=9
            `} />

                                <p className="leading-8">
                                    실제로 <InlineMath math="a=9" />일 때 등호 조건은
                                </p>

                                <BlockMath math={String.raw`
                9x=\frac9x
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="x=1" />에서 등호가 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{a=9}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="9x" />와{" "}
                                        <InlineMath math="\displaystyle \frac ax" />를 곱하면
                                        문자가 없어져
                                    </p>

                                    <BlockMath math={String.raw`
                    9x\cdot\frac ax=9a
                `} />

                                    <p className="leading-8">
                                        가 됩니다. 따라서 산술기하를 이용하면 최솟값을{" "}
                                        <InlineMath math="a" />에 대한 식으로 나타낼 수 있고,
                                        주어진 최솟값과 비교하여 <InlineMath math="a" />를
                                        구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0,\ b>0,\ c>0" />일 때,{" "}
                                <InlineMath
                                    math="\displaystyle
                    \left(\frac ba+\frac cb\right)
                    \left(\frac cb+\frac ac\right)
                    \left(\frac ac+\frac ba\right)
                "
                                />
                                의 최솟값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0,\ c>0" />이므로
                                    각 괄호 안의 두 항은 모두 양수입니다.
                                    따라서 각각 산술평균과 기하평균의 관계를 적용하면
                                </p>

                                <BlockMath math={String.raw`
                \frac ba+\frac cb
                \ge
                2\sqrt{\frac ba\cdot\frac cb}
                =
                2\sqrt{\frac ca}
            `} />

                                <BlockMath math={String.raw`
                \frac cb+\frac ac
                \ge
                2\sqrt{\frac cb\cdot\frac ac}
                =
                2\sqrt{\frac ab}
            `} />

                                <BlockMath math={String.raw`
                \frac ac+\frac ba
                \ge
                2\sqrt{\frac ac\cdot\frac ba}
                =
                2\sqrt{\frac bc}
            `} />

                                <p className="leading-8">
                                    세 부등식을 곱하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &
                \left(\frac ba+\frac cb\right)
                \left(\frac cb+\frac ac\right)
                \left(\frac ac+\frac ba\right)\\
                &\ge
                8\sqrt{
                    \frac ca\cdot
                    \frac ab\cdot
                    \frac bc
                }\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이때 각각의 등호 조건은
                                </p>

                                <BlockMath math={String.raw`
                \frac ba=\frac cb,\qquad
                \frac cb=\frac ac,\qquad
                \frac ac=\frac ba
            `} />

                                <p className="leading-8">
                                    입니다. <InlineMath math="a=b=c" />일 때
                                    세 등호 조건이 모두 동시에 성립하므로
                                    실제로 등호가 성립할 수 있습니다.
                                </p>

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
                                        곱으로 이루어진 식에 각각 산술기하를 적용할 때는
                                        얻어진 부등식만 확인해서는 안 되고,
                                        각 부등식의 등호 조건이 동시에 성립하는지
                                        반드시 확인해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 문제에서는 세 괄호에 각각 산술기하를 적용하면
                                        제곱근 안의 곱이
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac ca\cdot\frac ab\cdot\frac bc=1
                `} />

                                    <p className="leading-8">
                                        이 되어 문자가 모두 없어지고,{" "}
                                        <InlineMath math="a=b=c" />에서 모든 등호 조건도
                                        동시에 성립하므로 최솟값을 바로 구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0,\ b>0" />일 때,{" "}
                                <InlineMath
                                    math="\displaystyle
                    \left(3a+\frac2b\right)
                    \left(\frac3a+2b\right)
                "
                                />
                                의 최솟값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    곱으로 이루어진 식이므로 먼저 전개하여
                                    곱이 상수가 되는 두 항을 찾습니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \left(3a+\frac2b\right)
                \left(\frac3a+2b\right)
                &=
                9+6ab+\frac6{ab}+4\\
                &=
                13+6ab+\frac6{ab}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="6ab" />와{" "}
                                    <InlineMath math="\displaystyle \frac6{ab}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                6ab\cdot\frac6{ab}=36
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                6ab+\frac6{ab}
                &\ge
                2\sqrt{
                    6ab\cdot\frac6{ab}
                }\\
                &=12
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \left(3a+\frac2b\right)
                \left(\frac3a+2b\right)
                \ge
                13+12
                =
                25
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                6ab=\frac6{ab}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                (ab)^2=1
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="ab>0" />이고, 따라서
                                </p>

                                <BlockMath math={String.raw`
                ab=1
            `} />

                                <p className="leading-8">
                                    일 때 등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{25}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        곱으로 된 식을 먼저 전개하면
                                    </p>

                                    <BlockMath math={String.raw`
                    13+6ab+\frac6{ab}
                `} />

                                    <p className="leading-8">
                                        이 되고, 이때
                                        <InlineMath math="6ab" />와{" "}
                                        <InlineMath math="\displaystyle \frac6{ab}" />의
                                        곱이 상수 <InlineMath math="36" />이 됩니다.
                                        따라서 이 두 항에 산술기하를 적용하면
                                        한쪽 변에서 문자가 모두 없어져 최솟값을 구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0" />일 때,{" "}
                                <InlineMath
                                    math="\displaystyle
                    \left(2a-\frac6a\right)
                    \left(a-\frac3a\right)
                "
                                />
                                의 최솟값을 <InlineMath math="m" />, 그때의{" "}
                                <InlineMath math="a" />의 값을 <InlineMath math="k" />라 하자.
                                이때 <InlineMath math="m^2+k^2" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 식을 먼저 전개하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \left(2a-\frac6a\right)
                \left(a-\frac3a\right)
                &=
                2a^2-6-6+\frac{18}{a^2}\\
                &=
                2a^2+\frac{18}{a^2}-12
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a>0" />이므로{" "}
                                    <InlineMath math="2a^2" />과{" "}
                                    <InlineMath math="\displaystyle \frac{18}{a^2}" />은
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                2a^2\cdot\frac{18}{a^2}=36
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2a^2+\frac{18}{a^2}
                &\ge
                2\sqrt{
                    2a^2\cdot\frac{18}{a^2}
                }\\
                &=2\sqrt{36}\\
                &=12
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \left(2a-\frac6a\right)
                \left(a-\frac3a\right)
                =
                2a^2+\frac{18}{a^2}-12
                \ge0
            `} />

                                <p className="leading-8">
                                    이므로 최솟값은
                                </p>

                                <BlockMath math={String.raw`
                m=0
            `} />

                                <p className="leading-8">
                                    입니다. 등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                2a^2=\frac{18}{a^2}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                a^4=9
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=\sqrt3
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 <InlineMath math="k=\sqrt3" />이고
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                m^2+k^2
                &=0^2+(\sqrt3)^2\\
                &=3
                \end{aligned}
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
                                        주어진 두 괄호에는 뺄셈이 있으므로
                                        각 괄호에 바로 산술기하를 적용하는 것이 아니라
                                        먼저 곱을 전개합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \left(2a-\frac6a\right)
                    \left(a-\frac3a\right)
                    =
                    2a^2+\frac{18}{a^2}-12
                `} />

                                    <p className="leading-10">
                                        전개한 뒤 양수인 두 항{" "}
                                        <InlineMath math="2a^2" />과{" "}
                                        <InlineMath math="\displaystyle \frac{18}{a^2}" />을
                                        선택하면 두 항의 곱이{" "}
                                        <InlineMath math="36" />으로 일정해집니다.
                                        산술기하를 적용한 뒤에는 등호 조건을 이용하여
                                        최솟값을 갖게 하는 <InlineMath math="a" />의 값까지
                                        구합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x>0,\ y>0" />일 때,
                            </p>

                            <BlockMath math={String.raw`
            A=(9x+y)\left(\frac9x+\frac1y\right),\qquad
            B=\left(x+\frac2y\right)\left(y+\frac8x\right)
        `} />

                            <BlockMath math={String.raw`
            C=(x^2+2)\left(\frac1{x^2}+\frac12\right),\qquad
            D=\left(2x-\frac1x\right)\left(x-\frac{32}{x}\right)
        `} />

                            <p className="leading-10 text-gray-200">
                                의 최솟값을 각각 <InlineMath math="a,\ b,\ c,\ d" />라 할 때,{" "}
                                <InlineMath math="a+b+c+d" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* A */}
                                <p className="font-bold text-white">
                                    ① <InlineMath math="A" />의 최솟값
                                </p>

                                <p className="leading-8">
                                    먼저 식을 전개하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                A
                &=(9x+y)\left(\frac9x+\frac1y\right)\\
                &=81+\frac{9x}{y}+\frac{9y}{x}+1\\
                &=82+\frac{9x}{y}+\frac{9y}{x}
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="\displaystyle \frac{9x}{y}" />와{" "}
                                    <InlineMath math="\displaystyle \frac{9y}{x}" />는
                                    모두 양수이고,
                                </p>

                                <BlockMath math={String.raw`
                \frac{9x}{y}\cdot\frac{9y}{x}=81
            `} />

                                <p className="leading-8">
                                    이므로 산술평균과 기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                A
                &\ge82+
                2\sqrt{
                    \frac{9x}{y}\cdot\frac{9y}{x}
                }\\
                &=82+18\\
                &=100
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는{" "}
                                    <InlineMath math="\displaystyle \frac{9x}{y}=\frac{9y}{x}" />
                                    일 때 성립합니다.{" "}
                                    <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="x=y" />일 때 실제로 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                a=100
            `} />


                                {/* B */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ② <InlineMath math="B" />의 최솟값
                                    </p>
                                </div>

                                <BlockMath math={String.raw`
                \begin{aligned}
                B
                &=\left(x+\frac2y\right)
                  \left(y+\frac8x\right)\\
                &=xy+8+2+\frac{16}{xy}\\
                &=10+xy+\frac{16}{xy}
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="xy" />와{" "}
                                    <InlineMath math="\displaystyle \frac{16}{xy}" />는
                                    모두 양수이고,
                                </p>

                                <BlockMath math={String.raw`
                xy\cdot\frac{16}{xy}=16
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                B
                &\ge10+
                2\sqrt{
                    xy\cdot\frac{16}{xy}
                }\\
                &=10+8\\
                &=18
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는{" "}
                                    <InlineMath math="\displaystyle xy=\frac{16}{xy}" />
                                    일 때, 즉 <InlineMath math="xy=4" />일 때
                                    실제로 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                b=18
            `} />


                                {/* C */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ③ <InlineMath math="C" />의 최솟값
                                    </p>
                                </div>

                                <BlockMath math={String.raw`
                \begin{aligned}
                C
                &=(x^2+2)
                  \left(\frac1{x^2}+\frac12\right)\\
                &=1+\frac{x^2}{2}
                  +\frac{2}{x^2}+1\\
                &=2+\frac{x^2}{2}
                  +\frac{2}{x^2}
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="\displaystyle \frac{x^2}{2}" />와{" "}
                                    <InlineMath math="\displaystyle \frac2{x^2}" />는
                                    모두 양수이고,
                                </p>

                                <BlockMath math={String.raw`
                \frac{x^2}{2}\cdot\frac2{x^2}=1
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                C
                &\ge2+
                2\sqrt{
                    \frac{x^2}{2}\cdot\frac2{x^2}
                }\\
                &=2+2\\
                &=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는{" "}
                                    <InlineMath math="\displaystyle \frac{x^2}{2}=\frac2{x^2}" />
                                    일 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                x^4=4
            `} />

                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="x=\sqrt2" />에서 실제로 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                c=4
            `} />


                                {/* D */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ④ <InlineMath math="D" />의 최솟값
                                    </p>
                                </div>

                                <p className="leading-8">
                                    각 괄호에는 음의 항이 포함되어 있으므로
                                    바로 산술기하를 적용하지 않고 먼저 전개합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                D
                &=
                \left(2x-\frac1x\right)
                \left(x-\frac{32}{x}\right)\\
                &=2x^2-64-1+\frac{32}{x^2}\\
                &=2x^2+\frac{32}{x^2}-65
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="2x^2" />와{" "}
                                    <InlineMath math="\displaystyle \frac{32}{x^2}" />는
                                    모두 양수이고,
                                </p>

                                <BlockMath math={String.raw`
                2x^2\cdot\frac{32}{x^2}=64
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                D
                &\ge
                2\sqrt{
                    2x^2\cdot\frac{32}{x^2}
                }-65\\
                &=16-65\\
                &=-49
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는{" "}
                                    <InlineMath math="\displaystyle 2x^2=\frac{32}{x^2}" />
                                    일 때 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                x^4=16
            `} />

                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="x=2" />에서 실제로 성립합니다.
                                </p>

                                <BlockMath math={String.raw`
                d=-49
            `} />


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    a+b+c+d
                    &=100+18+4-49\\
                    &=\boxed{73}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        네 식의 모양은 서로 달라 보이지만 풀이 방법은 같습니다.
                                        먼저 식을 전개한 뒤 양수인 두 항을 찾고,
                                        그 두 항의 곱에서 문자가 없어지는지 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \text{전개}
                    \rightarrow
                    \text{양수인 두 항 선택}
                    \rightarrow
                    \text{곱을 상수로 만들기}
                    \rightarrow
                    \text{등호 조건 확인}
                    }
                `} />

                                    <p className="leading-8">
                                        특히 <InlineMath math="D" />처럼 원래 식에
                                        음의 항이 포함되어 있어도 전개한 뒤
                                        양수인 두 항을 찾아 산술기하를 적용할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0,\ b>0,\ c>0" />일 때,{" "}
                                <InlineMath
                                    math="\displaystyle
                    \left(1+\frac{2b}{a}\right)
                    \left(1+\frac cb\right)
                    \left(1+\frac{a}{2c}\right)
                "
                                />
                                의 최솟값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0,\ c>0" />이므로{" "}
                                    <InlineMath math="\displaystyle \frac{2b}{a}" />,{" "}
                                    <InlineMath math="\displaystyle \frac cb" />,{" "}
                                    <InlineMath math="\displaystyle \frac{a}{2c}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 각 괄호에 산술평균과 기하평균의 관계를 적용하면
                                </p>

                                <BlockMath math={String.raw`
                1+\frac{2b}{a}
                \ge
                2\sqrt{\frac{2b}{a}}
            `} />

                                <BlockMath math={String.raw`
                1+\frac cb
                \ge
                2\sqrt{\frac cb}
            `} />

                                <BlockMath math={String.raw`
                1+\frac{a}{2c}
                \ge
                2\sqrt{\frac{a}{2c}}
            `} />

                                <p className="leading-8">
                                    세 부등식을 곱하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &
                \left(1+\frac{2b}{a}\right)
                \left(1+\frac cb\right)
                \left(1+\frac{a}{2c}\right)\\
                &\ge
                8\sqrt{
                    \frac{2b}{a}\cdot
                    \frac cb\cdot
                    \frac{a}{2c}
                }\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이때 각각의 등호 조건은
                                </p>

                                <BlockMath math={String.raw`
                1=\frac{2b}{a},\qquad
                1=\frac cb,\qquad
                1=\frac{a}{2c}
            `} />

                                <p className="leading-8">
                                    입니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                a=2b,\qquad b=c,\qquad a=2c
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="b=c" />이고{" "}
                                    <InlineMath math="a=2b" />일 때 세 조건이
                                    동시에 성립합니다. 따라서 실제로 등호가 성립할 수 있습니다.
                                </p>

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
                                        각 괄호에 산술기하를 적용한 뒤 곱하면
                                        제곱근 안에서
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{2b}{a}\cdot
                    \frac cb\cdot
                    \frac{a}{2c}
                    =1
                `} />

                                    <p className="leading-8">
                                        이 되어 문자가 모두 없어집니다.
                                        또한 각 부등식의 등호 조건이 동시에 성립하므로
                                        얻은 값 <InlineMath math="8" />이 실제 최솟값입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 8 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                두 양의 실수 <InlineMath math="a,\ b" />에 대하여 두 일차함수
                            </p>

                            <BlockMath math={String.raw`
            f(x)=\frac a2x-\frac12,\qquad
            g(x)=\frac2b x+\frac32
        `} />

                            <p className="leading-10 text-gray-200">
                                이 있다. 직선 <InlineMath math="y=f(x)" />와 직선{" "}
                                <InlineMath math="y=g(x)" />가 서로 평행할 때,{" "}
                                <InlineMath math="(a+1)(b+9)" />의 최솟값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    두 직선이 서로 평행하므로 두 직선의 기울기는 같습니다.
                                </p>

                                <BlockMath math={String.raw`
                \frac a2=\frac2b
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                ab=4
            `} />

                                <p className="leading-8">
                                    입니다. 이제 구하려는 식을 전개하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (a+1)(b+9)
                &=ab+9a+b+9\\
                &=13+9a+b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="9a" />와 <InlineMath math="b" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 주어진 조건 <InlineMath math="ab=4" />를 이용하면
                                    두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                9a\cdot b
                =9ab
                =36
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                9a+b
                &\ge
                2\sqrt{9a\cdot b}\\
                &=2\sqrt{36}\\
                &=12
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                (a+1)(b+9)
                =13+9a+b
                \ge25
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                9a=b
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를{" "}
                                    <InlineMath math="ab=4" />와 함께 만족시키면
                                </p>

                                <BlockMath math={String.raw`
                9a^2=4
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=\frac23,\qquad b=6
            `} />

                                <p className="leading-8">
                                    이고, 이때 등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{25}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 두 직선이 평행하다는 조건을 이용하여{" "}
                                        <InlineMath math="ab=4" />라는 관계식을 만듭니다.
                                        그다음 구하려는 식을 전개하면
                                    </p>

                                    <BlockMath math={String.raw`
                    (a+1)(b+9)=13+9a+b
                `} />

                                    <p className="leading-8">
                                        이 되고, <InlineMath math="9a" />와{" "}
                                        <InlineMath math="b" />의 곱에{" "}
                                        <InlineMath math="ab=4" />를 이용하면
                                    </p>

                                    <BlockMath math={String.raw`
                    9a\cdot b=36
                `} />

                                    <p className="leading-8">
                                        으로 문자가 없어집니다.
                                        즉, 문제의 조건을 먼저 산술기하에 사용할 수 있는
                                        관계식으로 바꾸는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 9 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                이차방정식{" "}
                                <InlineMath math="x^2-4x+a=0" />{" "}
                                (<InlineMath math="a" />는 실수)이 허근을 가질 때,{" "}
                                <InlineMath
                                    math="\displaystyle a+\frac9{a-4}+2"
                                />
                                의 최솟값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    이차방정식이 허근을 가지므로 판별식은 음수입니다.
                                </p>

                                <BlockMath math={String.raw`
                \frac D4=(-2)^2-a<0
            `} />

                                <BlockMath math={String.raw`
                4-a<0
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a>4
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="a-4>0" />입니다.
                                    따라서 산술기하를 적용할 수 있도록
                                    분모의 <InlineMath math="a-4" />에 맞추어{" "}
                                    <InlineMath math="a=(a-4)+4" />로 변형합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                a+\frac9{a-4}+2
                &=(a-4)+4+\frac9{a-4}+2\\
                &=(a-4)+\frac9{a-4}+6
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a-4>0" />이므로{" "}
                                    <InlineMath math="a-4" />와{" "}
                                    <InlineMath math="\displaystyle \frac9{a-4}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                (a-4)\cdot\frac9{a-4}=9
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (a-4)+\frac9{a-4}
                &\ge
                2\sqrt{
                    (a-4)\cdot\frac9{a-4}
                }\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                a+\frac9{a-4}+2
                \ge
                6+6
                =
                12
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                a-4=\frac9{a-4}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="a-4>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a-4=3
            `} />

                                <BlockMath math={String.raw`
                a=7
            `} />

                                <p className="leading-8">
                                    이고, <InlineMath math="a=7" />은{" "}
                                    <InlineMath math="a>4" />를 만족하므로
                                    실제로 등호가 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{12}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 이차방정식이 허근을 갖는다는 조건을 이용하여{" "}
                                        <InlineMath math="a>4" />를 구합니다.
                                        이것은 단순히 <InlineMath math="a" />의 범위를
                                        구하는 것뿐만 아니라
                                    </p>

                                    <BlockMath math={String.raw`
                    a-4>0
                `} />

                                    <p className="leading-8">
                                        임을 확인하여 산술기하를 적용할 수 있는
                                        양수 조건을 만드는 역할도 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그다음 분모의 <InlineMath math="a-4" />에 맞추어{" "}
                                        <InlineMath math="a=(a-4)+4" />로 변형하면
                                    </p>

                                    <BlockMath math={String.raw`
                    (a-4)\cdot\frac9{a-4}=9
                `} />

                                    <p className="leading-8">
                                        로 문자가 없어집니다.
                                        즉, <strong className="text-white">
                                            조건에서 양수인 식을 찾고, 그 식에 맞추어
                                            원래 식을 변형하는 것
                                        </strong>이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 10 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x>2" />인 실수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath
                                    math="\displaystyle \frac{x^2-4x+13}{x-2}"
                                />
                                은 <InlineMath math="x=a" />일 때 최솟값{" "}
                                <InlineMath math="m" />을 갖는다.{" "}
                                <InlineMath math="a+m" />의 값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    분모가 <InlineMath math="x-2" />이므로
                                    분자의 식도 <InlineMath math="x-2" />에 맞추어 정리합니다.
                                </p>

                                <BlockMath math={String.raw`
                x^2-4x+13
                =(x-2)^2+9
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{x^2-4x+13}{x-2}
                &=
                \frac{(x-2)^2+9}{x-2}\\
                &=
                (x-2)+\frac9{x-2}
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="x>2" />이므로{" "}
                                    <InlineMath math="x-2>0" />이고, 따라서{" "}
                                    <InlineMath math="x-2" />와{" "}
                                    <InlineMath math="\displaystyle \frac9{x-2}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                (x-2)\cdot\frac9{x-2}=9
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (x-2)+\frac9{x-2}
                &\ge
                2\sqrt{
                    (x-2)\cdot\frac9{x-2}
                }\\
                &=2\sqrt9\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로 주어진 식의 최솟값은
                                </p>

                                <BlockMath math={String.raw`
                m=6
            `} />

                                <p className="leading-8">
                                    입니다. 등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                x-2=\frac9{x-2}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                (x-2)^2=9
            `} />

                                <p className="leading-8">
                                    <InlineMath math="x>2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x-2=3
            `} />

                                <BlockMath math={String.raw`
                x=5
            `} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="a=5" />입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    a+m
                    &=5+6\\
                    &=\boxed{11}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        분수식에서는 분모의 식에 맞추어 분자를 정리하면
                                        산술기하를 적용할 두 항을 만들 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x^2-4x+13
                    =(x-2)^2+9
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{x^2-4x+13}{x-2}
                    =
                    (x-2)+\frac9{x-2}
                `} />

                                    <p className="leading-8">
                                        이 되고, 두 항의 곱이 상수{" "}
                                        <InlineMath math="9" />가 됩니다.
                                        또한 <InlineMath math="x>2" />에서{" "}
                                        <InlineMath math="x-2>0" />이므로
                                        양수 조건도 만족합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0,\ b>0" />일 때,{" "}
                                <InlineMath
                                    math="\displaystyle
                    \left(4-\frac{9b}{a}\right)
                    \left(1-\frac ab\right)
                    \le m
                "
                                />
                                이 항상 성립하도록 하는 실수 <InlineMath math="m" />의
                                값의 범위를 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 식을 먼저 전개하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \left(4-\frac{9b}{a}\right)
                \left(1-\frac ab\right)
                &=
                4-\frac{4a}{b}-\frac{9b}{a}+9\\
                &=
                13-\left(
                    \frac{4a}{b}+\frac{9b}{a}
                \right)
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="\displaystyle \frac{4a}{b}" />와{" "}
                                    <InlineMath math="\displaystyle \frac{9b}{a}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                \frac{4a}{b}\cdot\frac{9b}{a}
                =36
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{4a}{b}+\frac{9b}{a}
                &\ge
                2\sqrt{
                    \frac{4a}{b}\cdot\frac{9b}{a}
                }\\
                &=2\sqrt{36}\\
                &=12
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \left(4-\frac{9b}{a}\right)
                \left(1-\frac ab\right)
                &=
                13-\left(
                    \frac{4a}{b}+\frac{9b}{a}
                \right)\\
                &\le
                13-12\\
                &=1
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                \frac{4a}{b}
                =
                \frac{9b}{a}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                4a^2=9b^2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                2a=3b
            `} />

                                <p className="leading-8">
                                    일 때 실제로 등호가 성립합니다.
                                    따라서 주어진 식의 최댓값은{" "}
                                    <InlineMath math="1" />입니다.
                                </p>

                                <p className="leading-8">
                                    그러므로 주어진 부등식이 모든 양수{" "}
                                    <InlineMath math="a,\ b" />에 대하여 항상 성립하려면{" "}
                                    <InlineMath math="m" />은 이 최댓값보다 크거나 같아야 합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{m\ge1}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        식을 전개하면 양수인 두 항의 합을 빼는 형태가 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    13-\left(
                        \frac{4a}{b}+\frac{9b}{a}
                    \right)
                `} />

                                    <p className="leading-8">
                                        이때 괄호 안의 두 항에 산술기하를 적용하여
                                        합의 최솟값을 구하면, 원래 식의 최댓값을 구할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{4a}{b}+\frac{9b}{a}\ge12
                    \quad\Longrightarrow\quad
                    13-\left(
                        \frac{4a}{b}+\frac{9b}{a}
                    \right)\le1
                `} />

                                    <p className="leading-8">
                                        또한{" "}
                                        <InlineMath
                                            math="\displaystyle
                            \left(4-\frac{9b}{a}\right)
                            \left(1-\frac ab\right)\le m
                        "
                                        />{" "}
                                        이 <strong className="text-white">항상 성립</strong>하려면{" "}
                                        <InlineMath math="m" />은 왼쪽 식의 최댓값보다
                                        크거나 같아야 합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 12 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 12</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                두 실수 <InlineMath math="x,\ y" />에 대하여{" "}
                                <InlineMath
                                    math="\displaystyle
                    2x^2+y^2-4x+
                    \frac{25}{x^2+y^2+1}
                "
                                />
                                는 <InlineMath math="x=\alpha,\ y=\beta" />일 때,
                                최솟값 <InlineMath math="m" />을 갖는다. <br /> 이때,{" "}
                                <InlineMath math="\alpha+\beta+m" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    분모에 있는{" "}
                                    <InlineMath math="x^2+y^2+1" />과 같은 식을 만들 수 있도록
                                    앞부분을 정리합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2x^2+y^2-4x
                &=
                (x^2+y^2+1)
                +(x^2-4x)-1\\
                &=
                (x^2+y^2+1)
                +(x-2)^2-5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서 주어진 식은
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &2x^2+y^2-4x+
                \frac{25}{x^2+y^2+1}\\
                &=
                (x^2+y^2+1)
                +\frac{25}{x^2+y^2+1}
                +(x-2)^2-5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    로 나타낼 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    모든 실수 <InlineMath math="x,\ y" />에 대하여
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2+1>0
            `} />

                                <p className="leading-8">
                                    이므로{" "}
                                    <InlineMath math="x^2+y^2+1" />과{" "}
                                    <InlineMath
                                        math="\displaystyle
                        \frac{25}{x^2+y^2+1}
                    "
                                    />
                                    은 모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                (x^2+y^2+1)
                \cdot
                \frac{25}{x^2+y^2+1}
                =25
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &(x^2+y^2+1)
                +\frac{25}{x^2+y^2+1}\\
                &\ge
                2\sqrt{
                    (x^2+y^2+1)
                    \cdot
                    \frac{25}{x^2+y^2+1}
                }\\
                &=10
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    또
                                </p>

                                <BlockMath math={String.raw`
                (x-2)^2\ge0
            `} />

                                <p className="leading-8">
                                    이므로 주어진 식은
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &2x^2+y^2-4x+
                \frac{25}{x^2+y^2+1}\\
                &\ge
                10+0-5\\
                &=5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    최솟값 <InlineMath math="5" />가 실제로 성립하려면
                                    두 등호 조건이 동시에 성립해야 합니다.
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2+1
                =
                \frac{25}{x^2+y^2+1},
                \qquad
                (x-2)^2=0
            `} />

                                <p className="leading-8">
                                    첫 번째 식에서{" "}
                                    <InlineMath math="x^2+y^2+1>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2+1=5
            `} />

                                <p className="leading-8">
                                    이고, 두 번째 식에서
                                </p>

                                <BlockMath math={String.raw`
                x=2
            `} />

                                <p className="leading-8">
                                    입니다. 이를 첫 번째 식에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                2^2+y^2+1=5
            `} />

                                <BlockMath math={String.raw`
                y=0
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \alpha=2,\qquad
                \beta=0,\qquad
                m=5
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \alpha+\beta+m
                    &=2+0+5\\
                    &=\boxed{7}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        분모의{" "}
                                        <InlineMath math="x^2+y^2+1" />과 곱했을 때
                                        상수가 되는 항을 만들도록 식을 변형하는 것이 핵심입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &2x^2+y^2-4x+
                    \frac{25}{x^2+y^2+1}\\
                    &=
                    (x^2+y^2+1)
                    +\frac{25}{x^2+y^2+1}
                    +(x-2)^2-5
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        이렇게 정리하면 앞의 두 항에는 산술기하를 적용하고,{" "}
                                        <InlineMath math="(x-2)^2" />에는
                                        제곱은 항상 <InlineMath math="0" /> 이상이라는
                                        성질을 적용할 수 있습니다.
                                        마지막에는 두 등호 조건이 동시에 성립하는지도
                                        반드시 확인합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 13</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        오른쪽 그림과 같이 점 <InlineMath math="(4,\ 5)" />를
                                        지나는 직선이 <InlineMath math="x" />축,{" "}
                                        <InlineMath math="y" />축과 만나는 점을 각각{" "}
                                        <InlineMath math="A,\ B" />라 할 때, 삼각형{" "}
                                        <InlineMath math="OAB" />의 넓이의 최솟값은?
                                        (단, <InlineMath math="O" />는 원점이다.)
                                    </p>

                                    <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                        <div>① <InlineMath math="16" /></div>
                                        <div>② <InlineMath math="28" /></div>
                                        <div>③ <InlineMath math="32" /></div>
                                        <div>④ <InlineMath math="36" /></div>
                                        <div>⑤ <InlineMath math="40" /></div>
                                    </div>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_13.png"
                                        alt="점 (4, 5)를 지나고 양의 x축과 y축을 만나는 직선과 삼각형 OAB"
                                        className="w-full max-w-[360px] rounded-lg"
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
                                    점 <InlineMath math="A" />의 <InlineMath math="x" />좌표를{" "}
                                    <InlineMath math="a" />, 점 <InlineMath math="B" />의{" "}
                                    <InlineMath math="y" />좌표를 <InlineMath math="b" />라 하겠습니다.
                                    그림에서
                                </p>

                                <BlockMath math={String.raw`
                a>4,\qquad b>5
            `} />

                                <p className="leading-8">
                                    이고, 두 절편이 <InlineMath math="a,\ b" />인 직선의 방정식은
                                </p>

                                <BlockMath math={String.raw`
                \frac{x}{a}+\frac{y}{b}=1
            `} />

                                <p className="leading-8">
                                    입니다. 이 직선이 점 <InlineMath math="(4,\ 5)" />를
                                    지나므로
                                </p>

                                <BlockMath math={String.raw`
                \frac4a+\frac5b=1
            `} />

                                <p className="leading-8">
                                    양변에 <InlineMath math="ab" />를 곱하면
                                </p>

                                <BlockMath math={String.raw`
                4b+5a=ab
            `} />

                                <p className="leading-8">
                                    이고, 이를 <InlineMath math="b" />에 대하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                b=\frac{5a}{a-4}
            `} />

                                <p className="leading-8">
                                    입니다. 삼각형 <InlineMath math="OAB" />의 넓이를{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=\frac12ab\\
                &=\frac12a\cdot\frac{5a}{a-4}\\
                &=\frac52\frac{a^2}{a-4}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>4" />이므로{" "}
                                    <InlineMath math="a-4>0" />입니다.
                                    분모의 <InlineMath math="a-4" />에 맞추어 식을 변형하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{a^2}{a-4}
                &=
                \frac{\{(a-4)+4\}^2}{a-4}\\
                &=
                (a-4)+8+\frac{16}{a-4}
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a-4>0" />이므로{" "}
                                    <InlineMath math="a-4" />와{" "}
                                    <InlineMath math="\displaystyle \frac{16}{a-4}" />는
                                    모두 양수입니다. 또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                (a-4)\cdot\frac{16}{a-4}=16
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (a-4)+\frac{16}{a-4}
                &\ge
                2\sqrt{
                    (a-4)\cdot\frac{16}{a-4}
                }\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{a^2}{a-4}\ge16
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                S
                =\frac52\frac{a^2}{a-4}
                \ge
                \frac52\cdot16
                =40
            `} />

                                <p className="leading-8">
                                    등호는
                                </p>

                                <BlockMath math={String.raw`
                a-4=\frac{16}{a-4}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="a-4>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a-4=4,\qquad a=8
            `} />

                                <p className="leading-8">
                                    이때
                                </p>

                                <BlockMath math={String.raw`
                b=\frac{5\cdot8}{8-4}=10
            `} />

                                <p className="leading-8">
                                    이므로 등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{40}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 두 절편을 <InlineMath math="a,\ b" />로 두고
                                        점 <InlineMath math="(4,\ 5)" />를 지난다는 조건을
                                        이용하여 두 변수 사이의 관계식을 만듭니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac4a+\frac5b=1
                    \quad\Longrightarrow\quad
                    b=\frac{5a}{a-4}
                `} />

                                    <p className="leading-8">
                                        그다음 삼각형의 넓이를 한 문자에 대한 식으로 나타내고,
                                        분모 <InlineMath math="a-4" />에 맞추어 변형하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{a^2}{a-4}
                    =
                    (a-4)+8+\frac{16}{a-4}
                `} />

                                    <p className="leading-8">
                                        이 되어 산술기하를 적용할 두 양수 항의 곱이
                                        상수가 됩니다. 즉, 도형 문제에서도{" "}
                                        <strong className="text-white">
                                            조건을 관계식으로 바꾸고, 곱이 상수가 되는
                                            두 항을 만드는 원리는 같습니다.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 14</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                양수 <InlineMath math="m" />에 대하여 직선{" "}
                                <InlineMath math="y=mx+m+4" />가{" "}
                                <InlineMath math="x" />축, <InlineMath math="y" />축과 만나는 점을
                                각각 <InlineMath math="A,\ B" />라 하자.
                                삼각형 <InlineMath math="OAB" />의 넓이의 최솟값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 직선이 <InlineMath math="y" />축과 만나는 점을 구합니다.{" "}
                                    <InlineMath math="x=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                y=m+4
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                B=(0,\ m+4)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 <InlineMath math="x" />축과 만나는 점을 구하기 위해{" "}
                                    <InlineMath math="y=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                0=mx+m+4
            `} />

                                <BlockMath math={String.raw`
                x=-\frac{m+4}{m}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                A=\left(-\frac{m+4}{m},\ 0\right)
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="m>0" />이므로{" "}
                                    <InlineMath math="A" />는 <InlineMath math="x" />축의 음의 방향에,{" "}
                                    <InlineMath math="B" />는 <InlineMath math="y" />축의 양의 방향에 있습니다.
                                </p>

                                <p className="leading-8">
                                    삼각형 <InlineMath math="OAB" />의 넓이를{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=
                \frac12
                \cdot
                \frac{m+4}{m}
                \cdot
                (m+4)\\
                &=
                \frac{(m+4)^2}{2m}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이를 전개하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=
                \frac{m^2+8m+16}{2m}\\
                &=
                \frac12
                \left(
                    m+8+\frac{16}{m}
                \right)
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="m>0" />이므로{" "}
                                    <InlineMath math="m" />과{" "}
                                    <InlineMath math="\displaystyle \frac{16}{m}" />은
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                m\cdot\frac{16}{m}=16
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                m+\frac{16}{m}
                &\ge
                2\sqrt{
                    m\cdot\frac{16}{m}
                }\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=
                \frac12
                \left(
                    m+8+\frac{16}{m}
                \right)\\
                &\ge
                \frac12(8+8)\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는
                                </p>

                                <BlockMath math={String.raw`
                m=\frac{16}{m}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="m>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                m=4
            `} />

                                <p className="leading-8">
                                    에서 등호가 실제로 성립합니다.
                                </p>

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
                                        먼저 직선의 <InlineMath math="x" />절편과{" "}
                                        <InlineMath math="y" />절편을 구하여 삼각형의 넓이를{" "}
                                        <InlineMath math="m" />에 대한 식으로 나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    S=\frac{(m+4)^2}{2m}
                `} />

                                    <p className="leading-8">
                                        그다음 식을 전개하면
                                    </p>

                                    <BlockMath math={String.raw`
                    S=
                    \frac12
                    \left(
                        m+8+\frac{16}{m}
                    \right)
                `} />

                                    <p className="leading-8">
                                        이 되고, <InlineMath math="m" />과{" "}
                                        <InlineMath math="\displaystyle \frac{16}{m}" />의 곱이
                                        상수 <InlineMath math="16" />이 되므로
                                        산술기하를 적용할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 15 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 15</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        오른쪽 그림과 같이 좌표평면에서 직선{" "}
                                        <InlineMath math="y=-2x+6" /> 위의 점{" "}
                                        <InlineMath math="P(a,\ b)" />와{" "}
                                        <InlineMath math="x" />축 위의 두 점{" "}
                                        <InlineMath math="A(2,\ 0),\ B(4,\ 0)" /> 및{" "}
                                        <InlineMath math="y" />축 위의 두 점{" "}
                                        <InlineMath math="C(0,\ 3),\ D(0,\ 7)" />을
                                        꼭짓점으로 하는 두 삼각형{" "}
                                        <InlineMath math="APB,\ CPD" />의 넓이를 각각{" "}
                                        <InlineMath math="S_1,\ S_2" />라고 하자.
                                    </p>

                                    <p className="mt-4 leading-10 text-gray-200">
                                        <InlineMath math="S_1\times S_2" />의 최댓값을
                                        구하는 과정을 다음 단계로 서술하시오.{" "}
                                        (단, <InlineMath math="a>0,\ b>0" />)
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_15.png"
                                        alt="직선 y=-2x+6 위의 점 P와 삼각형 APB, CPD"
                                        className="w-full max-w-[380px] rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="font-bold text-white">
                                    ① 점 <InlineMath math="P" />가 직선 위에 있다는 조건을 이용합니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P(a,\ b)" />가 직선{" "}
                                    <InlineMath math="y=-2x+6" /> 위에 있으므로
                                </p>

                                <BlockMath math={String.raw`
                b=-2a+6
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \boxed{2a+b=6}
            `} />

                                <p className="leading-8">
                                    이라는 관계식을 얻습니다.
                                </p>


                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ② 두 삼각형의 넓이를 구합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    삼각형 <InlineMath math="APB" />에서
                                    밑변의 길이는
                                </p>

                                <BlockMath math={String.raw`
                AB=4-2=2
            `} />

                                <p className="leading-8">
                                    이고 높이는 점 <InlineMath math="P(a,\ b)" />의{" "}
                                    <InlineMath math="y" />좌표인 <InlineMath math="b" />입니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S_1
                &=\frac12\cdot AB\cdot b\\
                &=\frac12\cdot2\cdot b\\
                &=b
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    삼각형 <InlineMath math="CPD" />에서
                                    밑변의 길이는
                                </p>

                                <BlockMath math={String.raw`
                CD=7-3=4
            `} />

                                <p className="leading-8">
                                    이고 높이는 점 <InlineMath math="P(a,\ b)" />에서{" "}
                                    <InlineMath math="y" />축까지의 거리인{" "}
                                    <InlineMath math="a" />입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S_2
                &=\frac12\cdot CD\cdot a\\
                &=\frac12\cdot4\cdot a\\
                &=2a
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                S_1S_2
                =b\cdot2a
                =2ab
            `} />


                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ③ 산술평균과 기하평균의 관계를 이용합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="2a>0,\ b>0" />입니다.
                                    또한 앞에서
                                </p>

                                <BlockMath math={String.raw`
                2a+b=6
            `} />

                                <p className="leading-8">
                                    을 얻었으므로, 두 양수{" "}
                                    <InlineMath math="2a" />와 <InlineMath math="b" />의
                                    합이 일정합니다.
                                </p>

                                <BlockMath math={String.raw`
                2a+b
                \ge
                2\sqrt{2ab}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="2a+b=6" />이므로
                                </p>

                                <BlockMath math={String.raw`
                6\ge2\sqrt{2ab}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                2ab\le9
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                S_1S_2\le9
            `} />


                                <div className="border-t border-white/10 pt-5">
                                    <p className="font-bold text-white">
                                        ④ 등호 조건을 확인합니다.
                                    </p>
                                </div>

                                <p className="leading-8">
                                    산술기하에서 등호는 두 양수가 같을 때이므로
                                </p>

                                <BlockMath math={String.raw`
                2a=b
            `} />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="2a+b=6" />과 함께 풀면
                                </p>

                                <BlockMath math={String.raw`
                2a=b=3
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a=\frac32,\qquad b=3
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="a>0,\ b>0" />을 만족하므로
                                    등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{S_1S_2=9}
                `} />

                                    <p className="text-center leading-8 text-gray-300">
                                        이므로 최댓값은 <InlineMath math="9" />입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        도형 문제에서도 먼저 넓이를 문자에 대한 식으로
                                        나타내고, 주어진 조건을 산술기하에 사용할 수 있는
                                        관계식으로 바꿉니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    S_1=b,\qquad
                    S_2=2a
                `} />

                                    <BlockMath math={String.raw`
                    S_1S_2=2ab
                `} />

                                    <p className="leading-8">
                                        한편 점 <InlineMath math="P" />가 직선 위에 있으므로
                                    </p>

                                    <BlockMath math={String.raw`
                    2a+b=6
                `} />

                                    <p className="leading-8">
                                        입니다. 따라서{" "}
                                        <InlineMath math="S_1S_2=2ab=(2a)b" />를
                                        두 양수 <InlineMath math="2a,\ b" />의 곱으로 보고,
                                        <strong className="text-white">
                                            {" "}합이 일정할 때 곱은 두 수가 같을 때 최대
                                        </strong>
                                        라는 원리를 적용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    2a+b=6
                    \quad\Longrightarrow\quad
                    (2a)b\le9
                    }
                `} />
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 16 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 16</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                두 양수 <InlineMath math="a,\ b" />에 대하여 좌표평면 위의 점{" "}
                                <InlineMath math="P(a,\ b)" />를 지나고 직선{" "}
                                <InlineMath math="OP" />에 수직인 직선이{" "}
                                <InlineMath math="y" />축과 만나는 점을{" "}
                                <InlineMath math="Q" />라 하자.
                            </p>

                            <p className="mt-3 leading-10 text-gray-200">
                                점{" "}
                                <InlineMath math="\displaystyle R\left(-\frac3a,\ 0\right)" />에
                                대하여 삼각형 <InlineMath math="OQR" />의 넓이의 최솟값은?
                                (단, <InlineMath math="O" />는 원점이다.)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    먼저 직선 <InlineMath math="OP" />의 기울기는
                                </p>

                                <BlockMath math={String.raw`
                \frac ba
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 직선 <InlineMath math="OP" />에
                                    수직인 직선의 기울기는
                                </p>

                                <BlockMath math={String.raw`
                -\frac ab
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 직선은 점 <InlineMath math="P(a,\ b)" />를 지나므로
                                </p>

                                <BlockMath math={String.raw`
                y-b=-\frac ab(x-a)
            `} />

                                <p className="leading-8">
                                    입니다. 점 <InlineMath math="Q" />는{" "}
                                    <InlineMath math="y" />축 위의 점이므로{" "}
                                    <InlineMath math="x=0" />을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                y-b
                &=-\frac ab(0-a)\\
                &=\frac{a^2}{b}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                OQ
                =b+\frac{a^2}{b}
                =\frac{a^2+b^2}{b}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-10">
                                    한편{" "}
                                    <InlineMath math="\displaystyle R\left(-\frac3a,\ 0\right)" />
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                OR=\frac3a
            `} />

                                <p className="leading-8">
                                    입니다. 삼각형 <InlineMath math="OQR" />의 넓이를{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=\frac12\cdot OR\cdot OQ\\
                &=\frac12\cdot\frac3a
                  \left(b+\frac{a^2}{b}\right)\\
                &=\frac32
                  \left(\frac ba+\frac ab\right)
                \end{aligned}
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a>0,\ b>0" />이므로{" "}
                                    <InlineMath math="\displaystyle \frac ba" />와{" "}
                                    <InlineMath math="\displaystyle \frac ab" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                \frac ba\cdot\frac ab=1
            `} />

                                <p className="leading-8">
                                    로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac ba+\frac ab
                &\ge
                2\sqrt{
                    \frac ba\cdot\frac ab
                }\\
                &=2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                S
                &=\frac32
                  \left(\frac ba+\frac ab\right)\\
                &\ge
                \frac32\cdot2\\
                &=3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는
                                </p>

                                <BlockMath math={String.raw`
                \frac ba=\frac ab
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="a>0,\ b>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=b
            `} />

                                <p className="leading-8">
                                    일 때 실제로 등호가 성립합니다.
                                </p>

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
                                        먼저 수직 조건을 이용하여 점{" "}
                                        <InlineMath math="Q" />의 위치를 구하고,
                                        삼각형의 넓이를 <InlineMath math="a,\ b" />에 대한
                                        식으로 나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    S=
                    \frac32
                    \left(
                        \frac ba+\frac ab
                    \right)
                `} />

                                    <p className="leading-8">
                                        이때 두 양수{" "}
                                        <InlineMath math="\displaystyle \frac ba" />와{" "}
                                        <InlineMath math="\displaystyle \frac ab" />의 곱은
                                        항상 <InlineMath math="1" />이므로 산술기하를
                                        바로 적용할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \frac ba\cdot\frac ab=1
                    \quad\Longrightarrow\quad
                    \frac ba+\frac ab\ge2
                    }
                `} />

                                    <p className="leading-8">
                                        즉, 좌표와 직선의 조건이 복잡해 보여도
                                        최종적으로는{" "}
                                        <strong className="text-white">
                                            곱이 상수가 되는 두 양수의 합
                                        </strong>
                                        을 찾는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 17 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 17</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        점 <InlineMath math="A(-2,\ 0)" />과 함수
                                    </p>

                                    <BlockMath math={String.raw`
                    f(x)=x^2+2x+9\qquad(x\ge0)
                `} />

                                    <p className="leading-10 text-gray-200">
                                        가 있다. 함수 <InlineMath math="y=f(x)" />의 그래프 위의
                                        점 <InlineMath math="P" />에서 <InlineMath math="x" />축에
                                        내린 수선의 발을 <InlineMath math="H" />라 하자.
                                    </p>

                                    <p className="mt-3 leading-10 text-gray-200">
                                        <InlineMath math="\displaystyle \frac{\overline{PH}}{\overline{AH}}" />는{" "}
                                        <InlineMath math="x=a" />에서 최솟값{" "}
                                        <InlineMath math="b" />를 갖는다.{" "}
                                        <InlineMath math="a+b" />의 값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_17.png"
                                        alt="함수 y=f(x)의 그래프 위의 점 P와 수선의 발 H"
                                        className="w-full max-w-[380px] rounded-lg"
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
                                    점 <InlineMath math="P" />의 <InlineMath math="x" />좌표를{" "}
                                    <InlineMath math="a" />라 하면{" "}
                                    <InlineMath math="a\ge0" />이고
                                </p>

                                <BlockMath math={String.raw`
                P=(a,\ f(a))
            `} />

                                <p className="leading-8">
                                    입니다. 점 <InlineMath math="H" />는 점{" "}
                                    <InlineMath math="P" />에서 <InlineMath math="x" />축에
                                    내린 수선의 발이므로
                                </p>

                                <BlockMath math={String.raw`
                H=(a,\ 0)
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \overline{PH}
                =f(a)
                =a^2+2a+9
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                \overline{AH}
                =a-(-2)
                =a+2
            `} />

                                <p className="leading-8">
                                    입니다. 그러므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{\overline{PH}}{\overline{AH}}
                =
                \frac{a^2+2a+9}{a+2}
            `} />

                                <p className="leading-8">
                                    분모의 <InlineMath math="a+2" />에 맞추어 분자를
                                    정리하면
                                </p>

                                <BlockMath math={String.raw`
                a^2+2a+9
                =
                a(a+2)+9
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{\overline{PH}}{\overline{AH}}
                =
                a+\frac9{a+2}
            `} />

                                <p className="leading-8">
                                    입니다. 두 항을 곱했을 때 문자가 없어지도록{" "}
                                    <InlineMath math="a=(a+2)-2" />로 변형하면
                                </p>

                                <BlockMath math={String.raw`
                \frac{\overline{PH}}{\overline{AH}}
                =
                (a+2)+\frac9{a+2}-2
            `} />

                                <p className="leading-10">
                                    <InlineMath math="a\ge0" />이므로{" "}
                                    <InlineMath math="a+2>0" />이고, 따라서{" "}
                                    <InlineMath math="a+2" />와{" "}
                                    <InlineMath math="\displaystyle \frac9{a+2}" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                (a+2)\cdot\frac9{a+2}=9
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                (a+2)+\frac9{a+2}
                &\ge
                2\sqrt{
                    (a+2)\cdot\frac9{a+2}
                }\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{\overline{PH}}{\overline{AH}}
                \ge
                6-2
                =4
            `} />

                                <p className="leading-8">
                                    따라서 최솟값은
                                </p>

                                <BlockMath math={String.raw`
                b=4
            `} />

                                <p className="leading-8">
                                    입니다. 등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                a+2=\frac9{a+2}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                (a+2)^2=9
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a+2>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a+2=3
            `} />

                                <BlockMath math={String.raw`
                a=1
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="a=1" />은{" "}
                                    <InlineMath math="a\ge0" />을 만족하므로
                                    실제로 등호가 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    a+b
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
                                        먼저 그래프와 좌표를 이용하여 두 선분의 길이를
                                        문자 <InlineMath math="a" />에 대한 식으로 나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \overline{PH}=a^2+2a+9,\qquad
                    \overline{AH}=a+2
                `} />

                                    <p className="leading-8">
                                        그다음 비를 정리하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{\overline{PH}}{\overline{AH}}
                    =
                    (a+2)+\frac9{a+2}-2
                `} />

                                    <p className="leading-8">
                                        이 되어 산술기하를 적용할 두 양수{" "}
                                        <InlineMath math="a+2" />와{" "}
                                        <InlineMath math="\displaystyle \frac9{a+2}" />의
                                        곱이 상수 <InlineMath math="9" />가 됩니다.
                                        즉, 그래프 문제에서도{" "}
                                        <strong className="text-white">
                                            분모에 맞추어 식을 변형하여 곱이 상수가 되는
                                            두 항을 만드는 원리
                                        </strong>
                                        는 같습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 18 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 18</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        그림과 같이 양수 <InlineMath math="a" />에 대하여
                                        이차함수{" "}
                                        <InlineMath math="f(x)=x^2-4ax" />의 그래프와 직선{" "}
                                        <InlineMath math="\displaystyle g(x)=\frac2a x" />가
                                        두 점 <InlineMath math="O,\ A" />에서 만난다.
                                        (단, <InlineMath math="O" />는 원점이다.)
                                    </p>

                                    <p className="mt-4 leading-10 text-gray-200">
                                        이차함수 <InlineMath math="y=f(x)" />의 그래프의
                                        꼭짓점을 <InlineMath math="B" />라 하고
                                        선분 <InlineMath math="AB" />의 중점을{" "}
                                        <InlineMath math="C" />라 하자.
                                        점 <InlineMath math="C" />에서{" "}
                                        <InlineMath math="y" />축에 내린 수선의 발을{" "}
                                        <InlineMath math="H" />라 할 때,
                                        선분 <InlineMath math="CH" />의 길이의 최솟값은?
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_18.png"
                                        alt="이차함수와 직선의 교점 A, 꼭짓점 B, 선분 AB의 중점 C"
                                        className="w-full max-w-[380px] rounded-lg"
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
                                    먼저 이차함수의 그래프와 직선의 원점이 아닌 교점{" "}
                                    <InlineMath math="A" />의 좌표를 구합니다.
                                </p>

                                <BlockMath math={String.raw`
                x^2-4ax=\frac2a x
            `} />

                                <p className="leading-8">
                                    한쪽으로 정리하면
                                </p>

                                <BlockMath math={String.raw`
                x^2-\left(4a+\frac2a\right)x=0
            `} />

                                <BlockMath math={String.raw`
                x\left(
                    x-4a-\frac2a
                \right)=0
            `} />

                                <p className="leading-8">
                                    두 교점 중 하나는 원점{" "}
                                    <InlineMath math="O" />이므로, 점{" "}
                                    <InlineMath math="A" />의 <InlineMath math="x" />좌표는
                                </p>

                                <BlockMath math={String.raw`
                x_A=4a+\frac2a
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    다음으로 이차함수
                                </p>

                                <BlockMath math={String.raw`
                y=x^2-4ax
            `} />

                                <p className="leading-8">
                                    의 꼭짓점 <InlineMath math="B" />의{" "}
                                    <InlineMath math="x" />좌표는 두 근{" "}
                                    <InlineMath math="0,\ 4a" />의 중점이므로
                                </p>

                                <BlockMath math={String.raw`
                x_B=2a
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="C" />는 선분{" "}
                                    <InlineMath math="AB" />의 중점이므로{" "}
                                    <InlineMath math="C" />의 <InlineMath math="x" />좌표는
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x_C
                &=
                \frac{x_A+x_B}{2}\\
                &=
                \frac{
                    \left(4a+\frac2a\right)+2a
                }{2}\\
                &=
                3a+\frac1a
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로{" "}
                                    <InlineMath math="\displaystyle 3a+\frac1a>0" />입니다.
                                    따라서 점 <InlineMath math="C" />는{" "}
                                    <InlineMath math="y" />축의 오른쪽에 있고,
                                    점 <InlineMath math="C" />에서{" "}
                                    <InlineMath math="y" />축까지의 거리는
                                </p>

                                <BlockMath math={String.raw`
                CH=3a+\frac1a
            `} />

                                <p className="leading-10">
                                    입니다. <InlineMath math="a>0" />이므로{" "}
                                    <InlineMath math="3a" />와{" "}
                                    <InlineMath math="\displaystyle \frac1a" />는
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    또한 두 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                3a\cdot\frac1a=3
            `} />

                                <p className="leading-8">
                                    으로 문자가 없어집니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                CH
                &=3a+\frac1a\\
                &\ge
                2\sqrt{
                    3a\cdot\frac1a
                }\\
                &=2\sqrt3
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 두 항이 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                3a=\frac1a
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                3a^2=1
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                a=\frac1{\sqrt3}
            `} />

                                <p className="leading-8">
                                    에서 실제로 등호가 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{2\sqrt3}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 교점 <InlineMath math="A" />와 꼭짓점{" "}
                                        <InlineMath math="B" />의{" "}
                                        <InlineMath math="x" />좌표를 구합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    x_A=4a+\frac2a,\qquad
                    x_B=2a
                `} />

                                    <p className="leading-8">
                                        중점 <InlineMath math="C" />의{" "}
                                        <InlineMath math="x" />좌표가 바로{" "}
                                        <InlineMath math="y" />축까지의 거리이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    CH
                    =
                    \frac{x_A+x_B}{2}
                    =
                    3a+\frac1a
                `} />

                                    <p className="leading-8">
                                        가 됩니다. 결국 도형과 함수의 조건을 정리한 뒤
                                        <strong className="text-white">
                                            {" "}곱이 상수가 되는 두 양수
                                        </strong>
                                        인 <InlineMath math="3a" />와{" "}
                                        <InlineMath math="\displaystyle \frac1a" />를 찾아
                                        산술기하를 적용하는 문제입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 19 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 19</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        길이가 <InlineMath math="40\text{ cm}" />인 철사를 모두
                                        사용하여 오른쪽 그림과 같이 합동인 네 개의 작은
                                        직사각형으로 이루어진 구역을 만들려고 한다.
                                    </p>

                                    <p className="mt-4 leading-10 text-gray-200">
                                        이때 구역 전체 테두리인 바깥쪽 직사각형의
                                        넓이의 최댓값과 그때의 가로의 길이를 구하시오.
                                        (단, 철사의 굵기는 무시한다.)
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_19.png"
                                        alt="합동인 네 개의 작은 직사각형으로 이루어진 직사각형 구역"
                                        className="w-full max-w-[360px] rounded-lg"
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
                                    작은 직사각형 하나의 가로 길이를{" "}
                                    <InlineMath math="x" />, 세로 길이를{" "}
                                    <InlineMath math="y" />라 하겠습니다.
                                </p>

                                <BlockMath math={String.raw`
                x>0,\qquad y>0
            `} />

                                <p className="leading-8">
                                    가로 방향의 철사는 위쪽과 아래쪽에 각각{" "}
                                    <InlineMath math="4x" />씩 사용되므로 모두{" "}
                                    <InlineMath math="8x" />입니다.
                                </p>

                                <p className="leading-8">
                                    세로 방향의 철사는 바깥쪽의 두 변과
                                    내부의 세 구분선에 사용되므로 모두{" "}
                                    <InlineMath math="5y" />입니다.
                                </p>

                                <p className="leading-8">
                                    철사의 전체 길이가 <InlineMath math="40" />이므로
                                </p>

                                <BlockMath math={String.raw`
                8x+5y=40
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    바깥쪽 직사각형의 가로 길이는{" "}
                                    <InlineMath math="4x" />, 세로 길이는{" "}
                                    <InlineMath math="y" />이므로 넓이를{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                S=4xy
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="8x" />와 <InlineMath math="5y" />는
                                    모두 양수입니다. 또한 두 수의 합은
                                </p>

                                <BlockMath math={String.raw`
                8x+5y=40
            `} />

                                <p className="leading-8">
                                    으로 일정합니다. 따라서 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                8x+5y
                &\ge
                2\sqrt{8x\cdot5y}\\
                &=2\sqrt{40xy}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    주어진 조건을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                40\ge2\sqrt{40xy}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                xy\le10
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                S=4xy\le40
            `} />

                                <p className="leading-8">
                                    이므로 바깥쪽 직사각형의 넓이의 최댓값은{" "}
                                    <InlineMath math="40" />입니다.
                                </p>

                                <p className="leading-8">
                                    등호는 두 양수가 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                8x=5y
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를{" "}
                                    <InlineMath math="8x+5y=40" />과 함께 만족시키면
                                </p>

                                <BlockMath math={String.raw`
                8x=5y=20
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                x=\frac52,\qquad y=4
            `} />

                                <p className="leading-8">
                                    입니다. 이때 바깥쪽 직사각형의 가로 길이는
                                </p>

                                <BlockMath math={String.raw`
                4x
                =
                4\cdot\frac52
                =
                10
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    \text{넓이의 최댓값 }40\text{ cm}^2,\qquad
                    \text{가로의 길이 }10\text{ cm}
                    }
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        철사가 바깥쪽 테두리에만 사용되는 것이 아니라
                                        세 개의 내부 구분선에도 사용된다는 점에 주의합니다.
                                        따라서 철사의 길이 조건은
                                    </p>

                                    <BlockMath math={String.raw`
                    8x+5y=40
                `} />

                                    <p className="leading-8">
                                        입니다. 구하려는 넓이는{" "}
                                        <InlineMath math="S=4xy" />이므로
                                        두 양수 <InlineMath math="8x" />와{" "}
                                        <InlineMath math="5y" />의 합이 일정하다는 것을
                                        이용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    8x+5y=40
                    \quad\Longrightarrow\quad
                    (8x)(5y)\le20^2
                    }
                `} />

                                    <p className="leading-8">
                                        즉, 도형 문제에서도{" "}
                                        <strong className="text-white">
                                            길이 조건을 관계식으로 만들고,
                                            합이 일정한 두 양수의 곱을 최대화
                                        </strong>
                                        하는 방식으로 일관되게 해결할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 20 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 20</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        오른쪽 그림과 같이 반지름의 길이가{" "}
                                        <InlineMath math="2\sqrt3" />인 반원{" "}
                                        <InlineMath math="O" />에 내접하는 직사각형{" "}
                                        <InlineMath math="ABCD" />의 넓이가 최대일 때,
                                        이 직사각형의 둘레의 길이를 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.21_20.png"
                                        alt="반원에 내접하는 직사각형 ABCD"
                                        className="w-full max-w-[360px] rounded-lg"
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
                                    직사각형의 가로의 절반을{" "}
                                    <InlineMath math="x" />, 세로의 길이를{" "}
                                    <InlineMath math="y" />라 하겠습니다.
                                </p>

                                <BlockMath math={String.raw`
                x>0,\qquad y>0
            `} />

                                <p className="leading-8">
                                    반원의 중심 <InlineMath math="O" />에서 직사각형의
                                    오른쪽 위 꼭짓점 <InlineMath math="D" />까지의 거리는
                                    반원의 반지름과 같으므로 피타고라스 정리에 의하여
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2=(2\sqrt3)^2
            `} />

                                <BlockMath math={String.raw`
                x^2+y^2=12
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    직사각형의 가로의 길이는{" "}
                                    <InlineMath math="2x" />, 세로의 길이는{" "}
                                    <InlineMath math="y" />이므로 넓이를{" "}
                                    <InlineMath math="S" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                S=2xy
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="x^2" />과 <InlineMath math="y^2" />은
                                    모두 양수입니다. 따라서 산술평균과 기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x^2+y^2
                &\ge
                2\sqrt{x^2y^2}\\
                &=2xy
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그런데 <InlineMath math="x^2+y^2=12" />이므로
                                </p>

                                <BlockMath math={String.raw`
                12\ge2xy
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                S=2xy\le12
            `} />

                                <p className="leading-8">
                                    이므로 직사각형의 넓이의 최댓값은{" "}
                                    <InlineMath math="12" />입니다.
                                </p>

                                <p className="leading-8">
                                    등호는 두 양수가 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                x^2=y^2
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="x>0,\ y>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x=y
            `} />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="x^2+y^2=12" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                2x^2=12
            `} />

                                <BlockMath math={String.raw`
                x=y=\sqrt6
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 넓이가 최대일 때 직사각형의 가로의 길이는
                                </p>

                                <BlockMath math={String.raw`
                2x=2\sqrt6
            `} />

                                <p className="leading-8">
                                    이고 세로의 길이는 <InlineMath math="\sqrt6" />이므로,
                                    둘레의 길이는
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2(2x+y)
                &=2(2\sqrt6+\sqrt6)\\
                &=6\sqrt6
                \end{aligned}
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{6\sqrt6}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        직사각형의 가로의 절반을{" "}
                                        <InlineMath math="x" />, 세로를{" "}
                                        <InlineMath math="y" />로 두면 반지름을 이용하여
                                    </p>

                                    <BlockMath math={String.raw`
                    x^2+y^2=12
                `} />

                                    <p className="leading-8">
                                        라는 관계식을 얻습니다. 넓이는
                                    </p>

                                    <BlockMath math={String.raw`
                    S=2xy
                `} />

                                    <p className="leading-8">
                                        이므로 양수 <InlineMath math="x^2" />과{" "}
                                        <InlineMath math="y^2" />의 합이 일정할 때
                                        그 곱이 최대가 되는 경우를 이용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                    x^2+y^2=12
                    \quad\Longrightarrow\quad
                    2xy\le12
                    }
                `} />

                                    <p className="leading-8">
                                        등호 조건 <InlineMath math="x^2=y^2" />에서{" "}
                                        <InlineMath math="x=y" />가 되고,
                                        이때의 가로와 세로를 이용하여 둘레를 구합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 21 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 21</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a>0,\ b>0,\ c>0" />일 때,
                            </p>

                            <BlockMath math={String.raw`
            (a+2b+c)
            \left(
                \frac1a+\frac4{2b+c}
            \right)
        `} />

                            <p className="leading-10 text-gray-200">
                                의 최솟값을 구하여라.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    주어진 식은 그대로는 산술평균과 기하평균의 관계를
                                    적용하기 어렵습니다. 먼저 식을 전개합니다.
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &(a+2b+c)
                \left(
                    \frac1a+\frac4{2b+c}
                \right)\\[4pt]
                &=
                1+\frac{2b+c}{a}
                +\frac{4a}{2b+c}+4\\[4pt]
                &=
                5+\frac{2b+c}{a}
                +\frac{4a}{2b+c}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0,\ c>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{2b+c}{a}>0,
                \qquad
                \frac{4a}{2b+c}>0
            `} />

                                <p className="leading-8">
                                    입니다. 이제 두 항의 곱을 확인하면
                                </p>

                                <BlockMath math={String.raw`
                \frac{2b+c}{a}
                \cdot
                \frac{4a}{2b+c}
                =4
            `} />

                                <p className="leading-8">
                                    로 문자가 없어집니다.
                                </p>

                                <p className="leading-8">
                                    따라서 두 양수{" "}
                                    <InlineMath math="\displaystyle \frac{2b+c}{a}" />와{" "}
                                    <InlineMath math="\displaystyle \frac{4a}{2b+c}" />에
                                    산술평균과 기하평균의 관계를 적용하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \frac{2b+c}{a}
                +
                \frac{4a}{2b+c}
                &\ge
                2\sqrt{
                    \frac{2b+c}{a}
                    \cdot
                    \frac{4a}{2b+c}
                }\\[4pt]
                &=2\sqrt4\\
                &=4
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    그러므로
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &(a+2b+c)
                \left(
                    \frac1a+\frac4{2b+c}
                \right)\\[4pt]
                &=
                5+\frac{2b+c}{a}
                +\frac{4a}{2b+c}\\[4pt]
                &\ge 5+4\\
                &=9
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 산술기하를 적용한 두 양수가 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                \frac{2b+c}{a}
                =
                \frac{4a}{2b+c}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 양변을 정리하면
                                </p>

                                <BlockMath math={String.raw`
                (2b+c)^2=4a^2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="a>0,\ b>0,\ c>0" />이므로{" "}
                                    <InlineMath math="2b+c>0" />입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                2b+c=2a
            `} />

                                <p className="leading-8">
                                    일 때 등호가 성립합니다. 이 조건을 만족하는 양수{" "}
                                    <InlineMath math="a,\ b,\ c" />가 존재하므로 최솟값을
                                    실제로 가질 수 있습니다.
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
                                        여러 문자가 들어 있는 곱의 형태에서는
                                        주어진 식에 바로 산술기하를 적용하지 않고
                                        <strong className="text-white">
                                            {" "}먼저 전개하여 식을 정리
                                        </strong>
                                        합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    (a+2b+c)
                    \left(
                        \frac1a+\frac4{2b+c}
                    \right)
                    =
                    5+\frac{2b+c}{a}
                    +\frac{4a}{2b+c}
                `} />

                                    <p className="leading-8">
                                        그런 다음 양수인 두 항을 찾아 곱했을 때 문자가
                                        없어지는지 확인합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \frac{2b+c}{a}
                        \cdot
                        \frac{4a}{2b+c}
                        =4
                    }
                `} />

                                    <p className="leading-8">
                                        즉,
                                        <strong className="text-white">
                                            {" "}전개 → 양수인 두 항 선택 → 곱이 상수인지 확인
                                            → 산술기하 → 등호 조건 확인
                                        </strong>
                                        의 순서로 해결합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">
                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <BlockMath math={String.raw`
                \boxed{
                A>0,\ B>0
                \quad\Longrightarrow\quad
                A+B\ge2\sqrt{AB}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            등호는 <InlineMath math="A=B" />일 때 성립합니다.
                        </p>

                        <div className="mt-5 space-y-3 leading-8 text-gray-300">
                            <p>
                                <span className="font-bold text-white">① 양수 확인 :</span>{" "}
                                산술기하를 적용할 두 항이 양수인지 확인합니다.
                            </p>

                            <p>
                                <span className="font-bold text-white">② 두 항 선택 :</span>{" "}
                                곱했을 때 문자를 없앨 수 있는 두 항을 찾습니다.
                            </p>

                            <p>
                                <span className="font-bold text-white">③ 상수 만들기 :</span>{" "}
                                주어진 조건, 식의 변형, 전개를 이용하여
                                관계식의 한쪽 변을 상수로 만듭니다.
                            </p>

                            <p>
                                <span className="font-bold text-white">④ 등호 확인 :</span>{" "}
                                두 항이 같아지는 조건이 실제로 성립하는지 확인합니다.
                            </p>
                        </div>

                        <BlockMath math={String.raw`
                \boxed{
                \text{양수 확인}
                \rightarrow
                \text{두 항 선택}
                \rightarrow
                \text{한쪽 변을 상수로 만들기}
                \rightarrow
                \text{등호 조건 확인}
                }
            `} />
                    </div>

                </div>

            </section>

            {/* 2.22 세 수의 산술평균과 기하평균 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 flex items-center gap-3 text-3xl font-bold">
                    <span>2.22 세 수의 산술평균과 기하평균</span>
                    <span className="rounded-md border border-yellow-500/30 bg-yellow-500/10 px-2 py-1 text-sm font-semibold text-yellow-300">
                        교과과정 외
                    </span>
                </h2>
                <p className="leading-8 text-gray-300">
                    두 수의 산술평균과 기하평균의 관계를 세 수 이상으로 확장해 봅니다.
                    이 내용은 교과과정 밖의 내용이지만, 산술평균과 기하평균의 원리를
                    이해하고 다양한 문제를 해결하는 데 활용할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 두 수의 산술기하 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 두 수의 산술기하
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 양수 <InlineMath math="a,\ b" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                \frac{a+b}{2}\ge\sqrt{ab}
            `} />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                        <BlockMath math={String.raw`
                a+b\ge2\sqrt{ab}
            `} />

                        <p className="leading-8 text-gray-300">
                            등호는 두 수가 같은
                            <InlineMath math="a=b" />일 때 성립합니다.
                        </p>
                    </div>


                    {/* 2. 네 수의 산술기하 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 네 수의 산술기하
                        </h3>

                        <p className="leading-8 text-gray-300">
                            먼저 두 수의 산술기하를 이용하여 네 수의 경우를
                            만들어 봅시다. 양수{" "}
                            <InlineMath math="a,\ b,\ c,\ d" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                \frac{a+b}{2}\ge\sqrt{ab},
                \qquad
                \frac{c+d}{2}\ge\sqrt{cd}
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                \frac{a+b+c+d}{4}
                &=
                \frac{
                    \frac{a+b}{2}
                    +
                    \frac{c+d}{2}
                }{2}\\[4pt]
                &\ge
                \frac{\sqrt{ab}+\sqrt{cd}}{2}\\[4pt]
                &\ge
                \sqrt{\sqrt{ab}\sqrt{cd}}\\[4pt]
                &=
                \sqrt[4]{abcd}
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서 네 양수에 대하여
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \frac{a+b+c+d}{4}
                    \ge
                    \sqrt[4]{abcd}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            등호가 성립하려면 위에서 사용한 모든 산술기하의
                            등호 조건이 동시에 성립해야 하므로
                        </p>

                        <BlockMath math={String.raw`
                \boxed{a=b=c=d}
            `} />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>
                    </div>


                    {/* 3. 세 수의 산술기하 증명 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 세 수의 산술기하를 증명해 봅시다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이제 양수 <InlineMath math="a,\ b,\ c" />에 대하여
                            세 수의 산술평균을 새로운 문자{" "}
                            <InlineMath math="X" />로 놓겠습니다.
                        </p>

                        <BlockMath math={String.raw`
                X=\frac{a+b+c}{3}
            `} />

                        <p className="leading-8 text-gray-300">
                            그러면
                        </p>

                        <BlockMath math={String.raw`
                a+b+c=3X
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath math={String.raw`
                \frac{a+b+c+X}{4}
                =
                \frac{3X+X}{4}
                =
                X
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다. 즉, <InlineMath math="a,\ b,\ c" />에{" "}
                            <InlineMath math="X" />를 하나 추가하면 네 수의
                            산술평균도 여전히 <InlineMath math="X" />가 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            앞에서 증명한 네 수의 산술기하를 적용하면
                        </p>

                        <BlockMath math={String.raw`
                X
                =
                \frac{a+b+c+X}{4}
                \ge
                \sqrt[4]{abcX}
            `} />

                        <p className="leading-8 text-gray-300">
                            양변이 양수이므로 네제곱하면
                        </p>

                        <BlockMath math={String.raw`
                X^4\ge abcX
            `} />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="X>0" />이므로 양변을{" "}
                            <InlineMath math="X" />로 나누어
                        </p>

                        <BlockMath math={String.raw`
                X^3\ge abc
            `} />

                        <p className="leading-8 text-gray-300">
                            을 얻습니다. 양변의 세제곱근을 구하면
                        </p>

                        <BlockMath math={String.raw`
                X\ge\sqrt[3]{abc}
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다. 마지막으로{" "}
                            <InlineMath math="\displaystyle X=\frac{a+b+c}{3}" />을
                            다시 대입하면
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \frac{a+b+c}{3}
                    \ge
                    \sqrt[3]{abc}
                }
            `} />
                    </div>


                    {/* 4. 세 수의 산술기하 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 세 수의 산술평균과 기하평균의 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            따라서 양수 <InlineMath math="a,\ b,\ c" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                \frac{a+b+c}{3}
                \ge
                \sqrt[3]{abc}
            `} />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다. 양변에 <InlineMath math="3" />을
                            곱하면 문제 풀이에서는 다음 형태를 주로 사용합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    a+b+c
                    \ge
                    3\sqrt[3]{abc}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            등호는 세 수가 모두 같을 때 성립합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{a=b=c}
            `} />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                문제 풀이에서 반드시 확인할 것
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                세 수의 산술기하를 사용할 때에도 두 수의 경우와
                                마찬가지로 먼저 세 항이 모두 양수인지 확인해야 합니다.
                                또한 관계식을 만든 뒤 한쪽 변에서 문자가 없어지는지
                                확인합니다.
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{
                    \text{양수 조건}
                    \rightarrow
                    \text{세 항 선택}
                    \rightarrow
                    \text{한쪽 변을 상수로 만들기}
                    \rightarrow
                    \text{등호 조건 확인}
                    }
                `} />
                        </div>
                    </div>


                    {/* 5. 다섯 수의 산술기하 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 다섯 수에서도 같은 관계가 성립합니다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            같은 생각을 이용하면 다섯 수의 경우도 증명할 수 있습니다.
                            양수 <InlineMath math="a,\ b,\ c,\ d,\ e" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                X=\frac{a+b+c+d+e}{5}
            `} />

                        <p className="leading-8 text-gray-300">
                            라고 놓겠습니다. 그러면
                        </p>

                        <BlockMath math={String.raw`
                a+b+c+d+e=5X
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로 <InlineMath math="X" />를 세 개 더 추가하면
                        </p>

                        <BlockMath math={String.raw`
                \frac{
                    a+b+c+d+e+X+X+X
                }{8}
                =
                \frac{5X+3X}{8}
                =
                X
            `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            네 수의 산술기하를 두 번 이용하면 여덟 수에 대해서도
                        </p>

                        <BlockMath math={String.raw`
                \frac{
                    a+b+c+d+e+f+g+h
                }{8}
                \ge
                \sqrt[8]{abcdefgh}
            `} />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다. 따라서{" "}
                            <InlineMath math="a,\ b,\ c,\ d,\ e,\ X,\ X,\ X" />에
                            적용하면
                        </p>

                        <BlockMath math={String.raw`
                X
                =
                \frac{
                    a+b+c+d+e+X+X+X
                }{8}
                \ge
                \sqrt[8]{abcdeX^3}
            `} />

                        <p className="leading-8 text-gray-300">
                            양변을 여덟제곱하면
                        </p>

                        <BlockMath math={String.raw`
                X^8\ge abcdeX^3
            `} />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="X>0" />이므로 양변을{" "}
                            <InlineMath math="X^3" />으로 나누면
                        </p>

                        <BlockMath math={String.raw`
                X^5\ge abcde
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                X\ge\sqrt[5]{abcde}
            `} />

                        <p className="leading-8 text-gray-300">
                            이고 <InlineMath math="X" />를 원래 식으로 되돌리면
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \frac{a+b+c+d+e}{5}
                    \ge
                    \sqrt[5]{abcde}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            를 얻습니다.
                        </p>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-8 text-gray-200">
                                모서리의 길이의 합이 <InlineMath math="24" />인
                                직육면체의 부피의 최댓값을 구하여라.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    직육면체의 가로, 세로, 높이를 각각{" "}
                                    <InlineMath math="a,\ b,\ c" />라 하겠습니다.
                                </p>

                                <BlockMath math={String.raw`
                a>0,\qquad b>0,\qquad c>0
            `} />

                                <p className="leading-8">
                                    직육면체에는 길이가{" "}
                                    <InlineMath math="a,\ b,\ c" />인 모서리가
                                    각각 <InlineMath math="4" />개씩 있으므로
                                </p>

                                <BlockMath math={String.raw`
                4a+4b+4c=24
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a+b+c=6
            `} />

                                <p className="leading-8">
                                    입니다. 직육면체의 부피는
                                </p>

                                <BlockMath math={String.raw`
                abc
            `} />

                                <p className="leading-8">
                                    이므로 세 양수 <InlineMath math="a,\ b,\ c" />에
                                    산술평균과 기하평균의 관계를 적용하면
                                </p>

                                <BlockMath math={String.raw`
                a+b+c\ge3\sqrt[3]{abc}
            `} />

                                <p className="leading-8">
                                    주어진 조건 <InlineMath math="a+b+c=6" />을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                6\ge3\sqrt[3]{abc}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \sqrt[3]{abc}\le2
            `} />

                                <BlockMath math={String.raw`
                abc\le8
            `} />

                                <p className="leading-8">
                                    등호는 세 양수가 모두 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                a=b=c
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 이를{" "}
                                    <InlineMath math="a+b+c=6" />과 함께 만족시키면
                                </p>

                                <BlockMath math={String.raw`
                a=b=c=2
            `} />

                                <p className="leading-8">
                                    이므로 등호가 실제로 성립합니다.
                                </p>

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
                                        모서리의 길이 조건을 먼저
                                        세 양수의 합에 대한 조건으로 바꿉니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    4a+4b+4c=24
                    \quad\Longrightarrow\quad
                    a+b+c=6
                `} />

                                    <p className="leading-8">
                                        구하려는 부피가 <InlineMath math="abc" />이므로
                                        세 양수의 합이 일정할 때 곱의 최댓값을 구하는
                                        세 수의 산술기하를 적용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        a+b+c=6
                        \quad\Longrightarrow\quad
                        abc\le8
                    }
                `} />

                                    <p className="leading-8">
                                        등호는 <InlineMath math="a=b=c" />일 때 성립하므로
                                        부피가 최대인 직육면체는 한 변의 길이가
                                        모두 <InlineMath math="2" />인 정육면체입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                양수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="\displaystyle 8x^2+\frac2x" />의
                                최솟값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="8x^2" />과{" "}
                                    <InlineMath math="\displaystyle \frac1x" />은
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    세 수의 산술평균과 기하평균의 관계를 적용할 수 있도록
                                    주어진 식을 세 항으로 나타냅니다.
                                </p>

                                <BlockMath math={String.raw`
                8x^2+\frac2x
                =
                8x^2+\frac1x+\frac1x
            `} />

                                <p className="leading-8">
                                    이때 세 항을 곱하면
                                </p>

                                <BlockMath math={String.raw`
                8x^2
                \cdot\frac1x
                \cdot\frac1x
                =8
            `} />

                                <p className="leading-8">
                                    로 문자가 없어집니다. 따라서 세 수의 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                8x^2+\frac2x
                &=
                8x^2+\frac1x+\frac1x\\[4pt]
                &\ge
                3\sqrt[3]{
                    8x^2\cdot
                    \frac1x\cdot
                    \frac1x
                }\\[4pt]
                &=3\sqrt[3]{8}\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 세 항이 모두 같을 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                8x^2=\frac1x=\frac1x
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                8x^3=1
            `} />

                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x=\frac12
            `} />

                                <p className="leading-8">
                                    일 때 실제로 등호가 성립합니다.
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
                                        세 수의 산술기하에서는 주어진 식이 처음부터
                                        세 항으로 되어 있을 필요는 없습니다.
                                        항을 적절히 나누어{" "}
                                        <strong className="text-white">
                                            세 양수의 곱에서 문자가 없어지도록
                                        </strong>{" "}
                                        만들 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac2x
                    =
                    \frac1x+\frac1x
                `} />

                                    <BlockMath math={String.raw`
                    \boxed{
                        8x^2\cdot
                        \frac1x\cdot
                        \frac1x
                        =8
                    }
                `} />

                                    <p className="leading-8">
                                        즉, 이 문제에서도 2.21과 마찬가지로
                                        <strong className="text-white">
                                            {" "}양수 조건 확인 → 항을 적절히 나누기 →
                                            곱에서 문자가 없어지는지 확인 → 산술기하 →
                                            등호 조건 확인
                                        </strong>
                                        의 순서로 해결합니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                양수 <InlineMath math="x" />에 대하여{" "}
                                <InlineMath math="\displaystyle 2x+\frac8{x^2}" />의
                                최솟값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로{" "}
                                    <InlineMath math="x" />와{" "}
                                    <InlineMath math="\displaystyle \frac8{x^2}" />은
                                    모두 양수입니다.
                                </p>

                                <p className="leading-8">
                                    세 수의 산술평균과 기하평균의 관계를 적용할 수 있도록{" "}
                                    <InlineMath math="2x" />를 두 항으로 나눕니다.
                                </p>

                                <BlockMath math={String.raw`
                2x+\frac8{x^2}
                =
                x+x+\frac8{x^2}
            `} />

                                <p className="leading-8">
                                    이때 세 항을 곱하면
                                </p>

                                <BlockMath math={String.raw`
                x\cdot x\cdot\frac8{x^2}=8
            `} />

                                <p className="leading-8">
                                    로 문자가 없어집니다. 따라서 세 수의 산술평균과
                                    기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                2x+\frac8{x^2}
                &=
                x+x+\frac8{x^2}\\[4pt]
                &\ge
                3\sqrt[3]{
                    x\cdot x\cdot\frac8{x^2}
                }\\[4pt]
                &=3\sqrt[3]{8}\\
                &=6
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    등호는 세 항이 모두 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                x=x=\frac8{x^2}
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                x^3=8
            `} />

                                <p className="leading-8">
                                    <InlineMath math="x>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x=2
            `} />

                                <p className="leading-8">
                                    일 때 실제로 등호가 성립합니다.
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
                                        세 수의 산술기하를 적용하기 위해{" "}
                                        <InlineMath math="2x" />를{" "}
                                        <InlineMath math="x+x" />로 나누어 세 항을 만듭니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    2x+\frac8{x^2}
                    =
                    x+x+\frac8{x^2}
                `} />

                                    <p className="leading-8">
                                        그러면 세 양수의 곱이
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        x\cdot x\cdot\frac8{x^2}=8
                    }
                `} />

                                    <p className="leading-8">
                                        로 일정해집니다. 즉, 세 수의 산술기하에서도
                                        <strong className="text-white">
                                            {" "}항을 적절히 나누어 곱에서 문자가 없어지도록
                                            만드는 것
                                        </strong>
                                        이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                밑면의 모서리의 길이가 <InlineMath math="x" />이고
                                높이가 <InlineMath math="y" />인 정사각기둥의 겉넓이가{" "}
                                <InlineMath math="24" />일 때, 부피의 최댓값을 구하여라.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    정사각기둥의 밑면의 한 변의 길이가{" "}
                                    <InlineMath math="x" />, 높이가{" "}
                                    <InlineMath math="y" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x>0,\qquad y>0
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    밑면의 넓이는 <InlineMath math="x^2" />이고
                                    밑면은 두 개이므로 그 넓이의 합은{" "}
                                    <InlineMath math="2x^2" />입니다.
                                    또한 옆면은 가로가 <InlineMath math="x" />,
                                    세로가 <InlineMath math="y" />인 직사각형 네 개이므로
                                    옆넓이는 <InlineMath math="4xy" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 겉넓이 조건은
                                </p>

                                <BlockMath math={String.raw`
                2x^2+4xy=24
            `} />

                                <p className="leading-8">
                                    이고, 양변을 <InlineMath math="2" />로 나누면
                                </p>

                                <BlockMath math={String.raw`
                x^2+2xy=12
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    세 수의 산술평균과 기하평균의 관계를 적용할 수 있도록
                                    이를 세 항으로 나타내면
                                </p>

                                <BlockMath math={String.raw`
                x^2+xy+xy=12
            `} />

                                <p className="leading-8">
                                    입니다. <InlineMath math="x>0,\ y>0" />이므로{" "}
                                    <InlineMath math="x^2,\ xy,\ xy" />는 모두 양수이고,
                                    세 항의 곱은
                                </p>

                                <BlockMath math={String.raw`
                x^2\cdot xy\cdot xy
                =
                x^4y^2
            `} />

                                <p className="leading-8">
                                    입니다. 따라서 세 수의 산술평균과 기하평균의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x^2+xy+xy
                &\ge
                3\sqrt[3]{x^2\cdot xy\cdot xy}\\
                &=3\sqrt[3]{x^4y^2}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    주어진 조건을 이용하면
                                </p>

                                <BlockMath math={String.raw`
                12\ge3\sqrt[3]{x^4y^2}
            `} />

                                <p className="leading-8">
                                    정사각기둥의 부피를 <InlineMath math="V" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                V=x^2y
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                x^4y^2=V^2
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                12\ge3\sqrt[3]{V^2}
            `} />

                                <BlockMath math={String.raw`
                4\ge V^{2/3}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                V\le8
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    등호는 세 항이 모두 같을 때, 즉
                                </p>

                                <BlockMath math={String.raw`
                x^2=xy
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. <InlineMath math="x>0" />이므로
                                </p>

                                <BlockMath math={String.raw`
                x=y
            `} />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="x^2+2xy=12" />에 대입하면
                                </p>

                                <BlockMath math={String.raw`
                3x^2=12
            `} />

                                <BlockMath math={String.raw`
                x=y=2
            `} />

                                <p className="leading-8">
                                    이므로 실제로 등호가 성립합니다.
                                </p>

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
                                        겉넓이 조건을 세 양수의 합으로 나타내는 것이 핵심입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    2x^2+4xy=24
                    \quad\Longrightarrow\quad
                    x^2+xy+xy=12
                `} />

                                    <p className="leading-8">
                                        이렇게 하면 세 항의 곱이
                                    </p>

                                    <BlockMath math={String.raw`
                    x^2\cdot xy\cdot xy
                    =
                    (x^2y)^2
                `} />

                                    <p className="leading-8">
                                        이 되어 구하려는 부피{" "}
                                        <InlineMath math="x^2y" />와 직접 연결됩니다.
                                        즉, 세 수의 산술기하에서도{" "}
                                        <strong className="text-white">
                                            주어진 조건을 적절한 세 항으로 나누어
                                            구하려는 식의 곱이 나타나도록 만드는 것
                                        </strong>
                                        이 중요합니다.
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
                            양수의 개수가 늘어나도 산술평균은 기하평균보다
                            크거나 같습니다.
                        </p>

                        <div className="mt-5 space-y-5">
                            <div>
                                <p className="font-bold text-white">두 수</p>

                                <BlockMath math={String.raw`
                        \frac{a+b}{2}
                        \ge
                        \sqrt{ab}
                    `} />
                            </div>

                            <div>
                                <p className="font-bold text-white">세 수</p>

                                <BlockMath math={String.raw`
                        \frac{a+b+c}{3}
                        \ge
                        \sqrt[3]{abc}
                    `} />
                            </div>

                            <div>
                                <p className="font-bold text-white">네 수</p>

                                <BlockMath math={String.raw`
                        \frac{a+b+c+d}{4}
                        \ge
                        \sqrt[4]{abcd}
                    `} />
                            </div>

                            <div>
                                <p className="font-bold text-white">다섯 수</p>

                                <BlockMath math={String.raw`
                        \frac{a+b+c+d+e}{5}
                        \ge
                        \sqrt[5]{abcde}
                    `} />
                            </div>
                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            특히 이 단원에서는 세 수의 관계
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    a+b+c
                    \ge
                    3\sqrt[3]{abc}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            를 중심으로 문제를 해결합니다. 등호는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{a=b=c}
            `} />

                        <p className="leading-8 text-gray-300">
                            일 때 성립합니다.
                        </p>
                    </div>

                </div>
            </section>

            {/* 2.23 코시-슈바르츠 부등식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    2.23 코시-슈바르츠 부등식
                </h2>

                <p className="leading-8 text-gray-300">
                    코시-슈바르츠 부등식은 실수 범위에서 성립하는 부등식입니다.
                    산술평균과 기하평균의 관계와 달리 양수 조건이 필요하지 않으며,
                    문제에서 필요한 식이 만들어지도록 각 항을 조립하여 사용합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 코시-슈바르츠 부등식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 코시-슈바르츠 부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            실수 <InlineMath math="a,\ b,\ x,\ y" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (a^2+b^2)(x^2+y^2)
                    \ge
                    (ax+by)^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            가 항상 성립합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            식의 형태를 보면
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (\text{제곱의 합})(\text{제곱의 합})
                    \ge
                    (\text{밑끼리 곱의 합})^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            으로 기억할 수 있습니다.
                        </p>
                    </div>


                    {/* 2. 코시-슈바르츠 부등식의 증명 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 코시-슈바르츠 부등식의 증명
                        </h3>

                        <p className="leading-8 text-gray-300">
                            왼쪽에서 오른쪽을 빼어 항상{" "}
                            <InlineMath math="0" /> 이상임을 확인해 봅시다.
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                &(a^2+b^2)(x^2+y^2)-(ax+by)^2\\[4pt]
                &=a^2x^2+a^2y^2+b^2x^2+b^2y^2\\
                &\qquad -(a^2x^2+2abxy+b^2y^2)\\[4pt]
                &=b^2x^2-2abxy+a^2y^2\\[4pt]
                &=(bx-ay)^2\\[4pt]
                &\ge0
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                (a^2+b^2)(x^2+y^2)
                \ge
                (ax+by)^2
            `} />

                        <p className="leading-8 text-gray-300">
                            가 모든 실수 <InlineMath math="a,\ b,\ x,\ y" />에
                            대하여 성립합니다.
                        </p>
                    </div>


                    {/* 3. 등호가 성립하는 조건 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. 등호가 성립하는 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            위의 증명에서 두 변의 차는
                        </p>

                        <BlockMath math={String.raw`
                (bx-ay)^2
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로 등호가 성립하려면
                        </p>

                        <BlockMath math={String.raw`
                bx-ay=0
            `} />

                        <p className="leading-8 text-gray-300">
                            즉,
                        </p>

                        <BlockMath math={String.raw`
                bx=ay
            `} />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다. 각 수가 비를 나타낼 수 있는 경우에는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{a:b=x:y}
            `} />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="font-bold text-yellow-300">
                                등호 조건
                            </p>

                            <BlockMath math={String.raw`
                    \boxed{bx=ay}
                `} />

                            <p className="leading-8 text-gray-300">
                                문제에서는 코시-슈바르츠 부등식으로 최댓값이나
                                최솟값을 구한 뒤, 이 등호 조건이 실제로
                                성립할 수 있는지도 반드시 확인합니다.
                            </p>
                        </div>
                    </div>

                    {/* 4. 세 항의 코시-슈바르츠 부등식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 세 항의 코시-슈바르츠 부등식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            코시-슈바르츠 부등식은 두 항뿐만 아니라 세 항에서도
                            같은 형태로 성립합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            실수 <InlineMath math="a,\ b,\ c,\ x,\ y,\ z" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
        \boxed{
            (a^2+b^2+c^2)(x^2+y^2+z^2)
            \ge
            (ax+by+cz)^2
        }
    `} />

                        <p className="leading-8 text-gray-300">
                            가 성립합니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 항의 경우와 마찬가지로 우리말로 나타내면
                        </p>

                        <BlockMath math={String.raw`
        \boxed{
            (\text{제곱의 합})(\text{제곱의 합})
            \ge
            (\text{밑끼리 곱의 합})^2
        }
    `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            첫 번째 괄호의 제곱의 밑
                        </p>

                        <BlockMath math={String.raw`
        a,\quad b,\quad c
    `} />

                        <p className="leading-8 text-gray-300">
                            와 두 번째 괄호의 제곱의 밑
                        </p>

                        <BlockMath math={String.raw`
        x,\quad y,\quad z
    `} />

                        <p className="leading-8 text-gray-300">
                            를 같은 위치끼리 곱하여 더하면
                        </p>

                        <BlockMath math={String.raw`
        ax+by+cz
    `} />

                        <p className="leading-8 text-gray-300">
                            가 만들어집니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                            <p className="mb-3 font-bold text-blue-300">
                                식을 조립하는 방법
                            </p>

                            <BlockMath math={String.raw`
            \begin{array}{ccc}
            a^2 & + & b^2 & + & c^2\\
            \updownarrow && \updownarrow && \updownarrow\\
            x^2 & + & y^2 & + & z^2
            \end{array}
        `} />

                            <p className="leading-8 text-gray-300">
                                실제로는 각 제곱의 밑을 같은 위치끼리 대응시켜
                            </p>

                            <BlockMath math={String.raw`
            a\cdot x+b\cdot y+c\cdot z
        `} />

                            <p className="leading-8 text-gray-300">
                                를 만드는 것이 핵심입니다.
                            </p>
                        </div>
                    </div>


                    {/* 5. 식의 형태를 조립하는 방법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 식의 형태를 조립하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            코시-슈바르츠 부등식에서는 공식을 그대로 대입하기보다
                            문제에서 필요한 식이 나오도록 제곱의 밑을 조립하는 것이
                            중요합니다.
                        </p>

                        <BlockMath math={String.raw`
        (a^2+b^2)(x^2+y^2)
        \ge
        (ax+by)^2
    `} />

                        <p className="leading-8 text-gray-300">
                            첫 번째 괄호의 제곱의 밑은{" "}
                            <InlineMath math="a,\ b" />, 두 번째 괄호의 제곱의 밑은{" "}
                            <InlineMath math="x,\ y" />입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            같은 위치에 있는 밑끼리 곱하여 더하면
                        </p>

                        <BlockMath math={String.raw`
        a\cdot x+b\cdot y=ax+by
    `} />

                        <p className="leading-8 text-gray-300">
                            가 만들어지고, 이것을 제곱한 것이 오른쪽에 나타납니다.
                        </p>

                        <BlockMath math={String.raw`
        \boxed{
            a^2+b^2
            \quad,\quad
            x^2+y^2
            \quad\Longrightarrow\quad
            (ax+by)^2
        }
    `} />

                        <p className="mt-6 leading-8 text-gray-300">
                            세 항의 경우에도 방법은 같습니다.
                        </p>

                        <BlockMath math={String.raw`
        (a^2+b^2+c^2)(x^2+y^2+z^2)
        \ge
        (ax+by+cz)^2
    `} />

                        <p className="leading-8 text-gray-300">
                            각 괄호의 제곱의 밑을 같은 위치끼리 대응시키면
                        </p>

                        <BlockMath math={String.raw`
        \begin{aligned}
        a&\leftrightarrow x\\
        b&\leftrightarrow y\\
        c&\leftrightarrow z
        \end{aligned}
    `} />

                        <p className="leading-8 text-gray-300">
                            밑끼리 곱의 합은
                        </p>

                        <BlockMath math={String.raw`
        a\cdot x+b\cdot y+c\cdot z
        =
        ax+by+cz
    `} />

                        <p className="leading-8 text-gray-300">
                            가 됩니다. 따라서
                        </p>

                        <BlockMath math={String.raw`
        \boxed{
            a^2+b^2+c^2
            \quad,\quad
            x^2+y^2+z^2
            \quad\Longrightarrow\quad
            (ax+by+cz)^2
        }
    `} />

                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                            <p className="mb-3 font-bold text-yellow-300">
                                조립의 핵심
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 항이든 세 항이든 같은 원리입니다.
                            </p>

                            <BlockMath math={String.raw`
            \boxed{
                (\text{제곱의 합})(\text{제곱의 합})
                \ge
                (\text{밑끼리 곱의 합})^2
            }
        `} />

                            <p className="leading-8 text-gray-300">
                                문제를 풀 때는 먼저{" "}
                                <strong className="text-white">
                                    어떤 식을 만들고 싶은지
                                </strong>
                                를 확인하고, 그 식이 밑끼리 곱의 합으로 나오도록
                                각각의 제곱의 밑을 조립합니다.
                            </p>
                        </div>
                    </div>


                    {/* 6. 산술기하와의 차이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            6. 산술기하와 코시-슈바르츠의 차이
                        </h3>

                        <div className="space-y-5">
                            <div>
                                <p className="font-bold text-white">
                                    산술평균과 기하평균
                                </p>

                                <BlockMath math={String.raw`
                        a+b\ge2\sqrt{ab}
                        \qquad (a>0,\ b>0)
                    `} />

                                <p className="leading-8 text-gray-300">
                                    양수 조건을 먼저 확인하고, 두 항의 곱에서
                                    문자가 없어지도록 식을 구성하는 것이 중요합니다.
                                </p>
                            </div>

                            <div>
                                <p className="font-bold text-white">
                                    코시-슈바르츠 부등식
                                </p>

                                <BlockMath math={String.raw`
                        (a^2+b^2)(x^2+y^2)
                        \ge
                        (ax+by)^2
                    `} />

                                <p className="leading-8 text-gray-300">
                                    실수 범위에서 성립하며, 원하는 식이 만들어지도록
                                    제곱의 밑을 대응시켜 조립하는 것이 중요합니다.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        다음은 부등식
                                    </p>

                                    <BlockMath math={String.raw`
                    (a^2+b^2)(x_1^2+y_1^2)
                    \ge
                    (ax_1+by_1)^2
                `} />

                                    <p className="leading-10 text-gray-200">
                                        이 성립함을 증명하는 과정이다.
                                    </p>

                                    <p className="mt-5 leading-10 text-gray-200">
                                        좌표평면에서 원점 <InlineMath math="O(0,0)" />과
                                        직선{" "}
                                        <InlineMath math="l:ax+by+c=0" />에 대하여
                                        원점 <InlineMath math="O" />에서 직선{" "}
                                        <InlineMath math="l" />에 내린 수선의 발을{" "}
                                        <InlineMath math="H" />라 하고 직선{" "}
                                        <InlineMath math="l" /> 위의 임의의 점을{" "}
                                        <InlineMath math="P(x_1,y_1)" />이라 하자.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.23_1.png"
                                        alt="원점 O와 직선 l, 수선의 발 H와 점 P"
                                        className="w-full max-w-[360px] rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 space-y-4 text-gray-200">
                                <BlockMath math={String.raw`
                \overline{OH}
                =
                \frac{|c|}{\sqrt{a^2+b^2}}
            `} />

                                <p className="leading-8">
                                    <InlineMath math="ax_1+by_1+c=0" />이고
                                </p>

                                <BlockMath math={String.raw`
                \overline{OP}\ge\overline{OH}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                \sqrt{x_1^2+y_1^2}
                \ge
                \boxed{\text{(가)}}
            `} />

                                <p className="leading-8">
                                    양변을 제곱하여 정리하면
                                </p>

                                <BlockMath math={String.raw`
                (a^2+b^2)(x_1^2+y_1^2)
                \ \boxed{\text{(나)}}\
                (ax_1+by_1)^2
            `} />

                                <p className="leading-8">
                                    이때 등호는 <InlineMath math="\boxed{\text{(다)}}" />일 때
                                    성립한다.
                                </p>

                                <p className="mt-5 leading-8">
                                    위의 과정에서 (가), (나), (다)에 알맞은 것은?
                                </p>

                                <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-2">
                                    <div>
                                        ①{" "}
                                        <InlineMath math="\displaystyle \frac{|ab|}{\sqrt{x_1^2+y_1^2}}" />
                                        {" , "}
                                        <InlineMath math="\ge" />
                                        {" , "}
                                        <InlineMath math="ay_1=bx_1" />
                                    </div>

                                    <div>
                                        ②{" "}
                                        <InlineMath math="\displaystyle \frac{|ax_1+by_1|}{\sqrt{a^2+b^2}}" />
                                        {" , "}
                                        <InlineMath math="\ge" />
                                        {" , "}
                                        <InlineMath math="ay_1=bx_1" />
                                    </div>

                                    <div>
                                        ③{" "}
                                        <InlineMath math="\displaystyle \frac{|ab|}{\sqrt{x_1^2+y_1^2}}" />
                                        {" , "}
                                        <InlineMath math="\ge" />
                                        {" , "}
                                        <InlineMath math="ay_1=-bx_1" />
                                    </div>

                                    <div>
                                        ④{" "}
                                        <InlineMath math="\displaystyle \frac{|ax_1+by_1|}{\sqrt{a^2+b^2}}" />
                                        {" , "}
                                        <InlineMath math="\le" />
                                        {" , "}
                                        <InlineMath math="ay_1=bx_1" />
                                    </div>

                                    <div>
                                        ⑤{" "}
                                        <InlineMath math="\displaystyle \frac{|ax_1+by_1|}{\sqrt{a^2+b^2}}" />
                                        {" , "}
                                        <InlineMath math="\le" />
                                        {" , "}
                                        <InlineMath math="ay_1=-bx_1" />
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
                                    점 <InlineMath math="P(x_1,y_1)" />은 직선{" "}
                                    <InlineMath math="l" /> 위의 점이므로
                                </p>

                                <BlockMath math={String.raw`
                ax_1+by_1+c=0
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                c=-(ax_1+by_1)
            `} />

                                <p className="leading-8">
                                    이므로 원점에서 직선까지의 거리는
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                \overline{OH}
                &=
                \frac{|c|}{\sqrt{a^2+b^2}}\\[4pt]
                &=
                \frac{|ax_1+by_1|}
                {\sqrt{a^2+b^2}}
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다. 한편 원점과 점{" "}
                                    <InlineMath math="P(x_1,y_1)" /> 사이의 거리는
                                </p>

                                <BlockMath math={String.raw`
                \overline{OP}
                =
                \sqrt{x_1^2+y_1^2}
            `} />

                                <p className="leading-8">
                                    이고, 점과 직선 사이의 거리는 수선의 길이가
                                    가장 짧으므로
                                </p>

                                <BlockMath math={String.raw`
                \overline{OP}\ge\overline{OH}
            `} />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                \sqrt{x_1^2+y_1^2}
                \ge
                \frac{|ax_1+by_1|}
                {\sqrt{a^2+b^2}}
            `} />

                                <p className="leading-8">
                                    이므로 (가)는
                                </p>

                                <BlockMath math={String.raw`
                \boxed{
                    \frac{|ax_1+by_1|}
                    {\sqrt{a^2+b^2}}
                }
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    양변은 모두 <InlineMath math="0" /> 이상이므로
                                    양변을 제곱하면
                                </p>

                                <BlockMath math={String.raw`
                x_1^2+y_1^2
                \ge
                \frac{(ax_1+by_1)^2}{a^2+b^2}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                (a^2+b^2)(x_1^2+y_1^2)
                \ge
                (ax_1+by_1)^2
            `} />

                                <p className="leading-8">
                                    이므로 (나)는 <InlineMath math="\ge" />입니다.
                                </p>

                                <p className="leading-8">
                                    등호가 성립하려면{" "}
                                    <InlineMath math="\overline{OP}=\overline{OH}" />이어야
                                    하므로 점 <InlineMath math="P" />가 수선의 발{" "}
                                    <InlineMath math="H" />와 일치해야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 직선 <InlineMath math="OP" />는 직선{" "}
                                    <InlineMath math="l" />에 수직입니다.
                                    직선 <InlineMath math="l:ax+by+c=0" />의 기울기는{" "}
                                    <InlineMath math="\displaystyle -\frac ab" />이고,
                                    직선 <InlineMath math="OP" />의 기울기는{" "}
                                    <InlineMath math="\displaystyle \frac{y_1}{x_1}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                \left(-\frac ab\right)
                \left(\frac{y_1}{x_1}\right)
                =-1
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                ay_1=bx_1
            `} />

                                <p className="leading-8">
                                    이므로 (다)는{" "}
                                    <InlineMath math="ay_1=bx_1" />입니다.
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
                                        원점에서 직선 위의 점까지의 거리 중 가장 짧은 것은
                                        수선의 길이입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \overline{OP}\ge\overline{OH}
                `} />

                                    <p className="leading-8">
                                        여기에 두 점 사이의 거리와 점과 직선 사이의
                                        거리 공식을 적용하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{x_1^2+y_1^2}
                    \ge
                    \frac{|ax_1+by_1|}
                    {\sqrt{a^2+b^2}}
                `} />

                                    <p className="leading-8">
                                        을 얻고, 이를 제곱하면 바로 코시-슈바르츠 부등식
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (a^2+b^2)(x_1^2+y_1^2)
                        \ge
                        (ax_1+by_1)^2
                    }
                `} />

                                    <p className="leading-8">
                                        이 만들어집니다. 등호는{" "}
                                        <InlineMath math="P=H" />, 즉{" "}
                                        <InlineMath math="OP\perp l" />일 때 성립하며
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{ay_1=bx_1}
                `} />

                                    <p className="leading-8">
                                        이 코시-슈바르츠 부등식의 등호 조건과 연결됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 2 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 2</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x>0,\ y>0" />이고{" "}
                                <InlineMath math="3x+2y=16" />일 때,{" "}
                                <InlineMath math="\sqrt{3x}+\sqrt{2y}" />의 최댓값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-7 text-gray-300">

                                {/* 풀이 1 */}
                                <div>
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 1. 코시-슈바르츠 부등식
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식이{" "}
                                        <InlineMath math="\sqrt{3x}+\sqrt{2y}" />이므로
                                        이를 코시-슈바르츠 부등식의
                                        밑끼리 곱의 합으로 만들겠습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \left(
                        \sqrt{3x}\cdot1+
                        \sqrt{2y}\cdot1
                    \right)^2
                    \le
                    \left(
                        (\sqrt{3x})^2+
                        (\sqrt{2y})^2
                    \right)
                    (1^2+1^2)
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \left(
                        \sqrt{3x}+\sqrt{2y}
                    \right)^2
                    &\le
                    (3x+2y)\cdot2\\
                    &=16\cdot2\\
                    &=32
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="\sqrt{3x}+\sqrt{2y}>0" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{3x}+\sqrt{2y}
                    \le
                    4\sqrt2
                `} />

                                    <p className="leading-8">
                                        등호는 대응하는 두 쌍의 비가 같을 때, 즉
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{3x}:\sqrt{2y}=1:1
                `} />

                                    <p className="leading-8">
                                        일 때 성립하므로
                                    </p>

                                    <BlockMath math={String.raw`
                    3x=2y
                `} />

                                    <p className="leading-8">
                                        입니다. 이를 <InlineMath math="3x+2y=16" />과
                                        함께 만족시키면
                                    </p>

                                    <BlockMath math={String.raw`
                    3x=2y=8
                `} />

                                    <BlockMath math={String.raw`
                    x=\frac83,\qquad y=4
                `} />

                                    <p className="leading-8">
                                        이므로 등호가 실제로 성립합니다.
                                    </p>
                                </div>


                                {/* 풀이 2 */}
                                <div className="border-t border-white/10 pt-6">
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 2. 산술평균과 기하평균
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식을 제곱하여 주어진 조건과 연결합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \left(
                        \sqrt{3x}+\sqrt{2y}
                    \right)^2
                    &=
                    3x+2y+2\sqrt{6xy}\\
                    &=
                    16+2\sqrt{6xy}
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="x>0,\ y>0" />이므로{" "}
                                        <InlineMath math="3x" />와 <InlineMath math="2y" />는
                                        모두 양수입니다. 산술평균과 기하평균의 관계에 의하여
                                    </p>

                                    <BlockMath math={String.raw`
                    3x+2y
                    \ge
                    2\sqrt{3x\cdot2y}
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="3x+2y=16" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    16\ge2\sqrt{6xy}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{6xy}\le8
                `} />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \left(
                        \sqrt{3x}+\sqrt{2y}
                    \right)^2
                    &=
                    16+2\sqrt{6xy}\\
                    &\le
                    16+16\\
                    &=32
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{3x}+\sqrt{2y}
                    \le
                    4\sqrt2
                `} />

                                    <p className="leading-8">
                                        산술기하의 등호는 두 양수가 같을 때이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    3x=2y
                `} />

                                    <p className="leading-8">
                                        입니다. 이를 <InlineMath math="3x+2y=16" />과
                                        함께 만족시키면
                                    </p>

                                    <BlockMath math={String.raw`
                    3x=2y=8
                `} />

                                    <p className="leading-8">
                                        이므로 등호가 실제로 성립합니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{4\sqrt2}
                `} />
                                </div>

                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        코시-슈바르츠 부등식을 이용하면 구하려는 식{" "}
                                        <InlineMath math="\sqrt{3x}+\sqrt{2y}" />가 바로
                                        밑끼리 곱의 합이 되도록
                                    </p>

                                    <BlockMath math={String.raw`
                    \sqrt{3x}\cdot1+\sqrt{2y}\cdot1
                `} />

                                    <p className="leading-8">
                                        로 조립할 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (\sqrt{3x}+\sqrt{2y})^2
                        \le
                        (3x+2y)(1+1)
                    }
                `} />

                                    <p className="mt-4 leading-8">
                                        산술기하로도 풀 수 있지만,
                                        구하려는 식을 먼저 제곱한 뒤{" "}
                                        <InlineMath math="\sqrt{6xy}" />의 최댓값을
                                        다시 구해야 합니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        따라서 이 문제에서는{" "}
                                        <strong className="text-white">
                                            원하는 식을 직접 조립할 수 있는 코시-슈바르츠
                                            부등식이 더 간단합니다.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 3 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 3</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                두 양수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="3a+4b=4" />일 때,{" "}
                                <InlineMath math="\displaystyle \frac4a+\frac3b" />의
                                최솟값은?
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-7 text-gray-300">

                                {/* 풀이 1 */}
                                <div>
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 1. 코시-슈바르츠 부등식
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식과 주어진 조건을 각각 제곱의 합으로
                                        나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac4a+\frac3b
                    =
                    \left(\frac2{\sqrt a}\right)^2
                    +
                    \left(\frac{\sqrt3}{\sqrt b}\right)^2
                `} />

                                    <BlockMath math={String.raw`
                    3a+4b
                    =
                    (\sqrt{3a})^2
                    +
                    (2\sqrt b)^2
                `} />

                                    <p className="leading-8">
                                        코시-슈바르츠 부등식에 의하여
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &\left(
                        \frac4a+\frac3b
                    \right)
                    (3a+4b)\\
                    &\ge
                    \left(
                        \frac2{\sqrt a}\cdot\sqrt{3a}
                        +
                        \frac{\sqrt3}{\sqrt b}\cdot2\sqrt b
                    \right)^2
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        밑끼리 곱하면 각각 문자가 없어져
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &\left(
                        \frac4a+\frac3b
                    \right)
                    (3a+4b)\\
                    &\ge
                    (2\sqrt3+2\sqrt3)^2\\
                    &=48
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        그런데 <InlineMath math="3a+4b=4" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    4\left(
                        \frac4a+\frac3b
                    \right)
                    \ge48
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac4a+\frac3b\ge12
                `} />

                                    <p className="leading-8">
                                        등호는 두 제곱의 밑이 같은 비를 이룰 때 성립하므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac2{\sqrt a}:\frac{\sqrt3}{\sqrt b}
                    =
                    \sqrt{3a}:2\sqrt b
                `} />

                                    <p className="leading-8">
                                        이를 정리하면
                                    </p>

                                    <BlockMath math={String.raw`
                    3a=4b
                `} />

                                    <p className="leading-8">
                                        입니다. 이를 <InlineMath math="3a+4b=4" />와
                                        함께 만족시키면
                                    </p>

                                    <BlockMath math={String.raw`
                    3a=4b=2
                `} />

                                    <BlockMath math={String.raw`
                    a=\frac23,\qquad b=\frac12
                `} />

                                    <p className="leading-8">
                                        이므로 등호가 실제로 성립합니다.
                                    </p>
                                </div>


                                {/* 풀이 2 */}
                                <div className="border-t border-white/10 pt-6">
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 2. 산술평균과 기하평균
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식에 주어진 조건을 곱하여 전개합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &\left(
                        \frac4a+\frac3b
                    \right)(3a+4b)\\
                    &=
                    12+\frac{16b}{a}
                    +\frac{9a}{b}+12\\
                    &=
                    24+\frac{16b}{a}
                    +\frac{9a}{b}
                    \end{aligned}
                `} />

                                    <p className="leading-10">
                                        <InlineMath math="a>0,\ b>0" />이므로{" "}
                                        <InlineMath math="\displaystyle \frac{16b}{a}" />와{" "}
                                        <InlineMath math="\displaystyle \frac{9a}{b}" />는
                                        모두 양수입니다.
                                    </p>

                                    <p className="leading-8">
                                        또한 두 항의 곱은
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{16b}{a}\cdot
                    \frac{9a}{b}
                    =144
                `} />

                                    <p className="leading-8">
                                        로 문자가 없어집니다. 따라서 산술평균과
                                        기하평균의 관계에 의하여
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \frac{16b}{a}
                    +
                    \frac{9a}{b}
                    &\ge
                    2\sqrt{
                        \frac{16b}{a}
                        \cdot
                        \frac{9a}{b}
                    }\\
                    &=2\sqrt{144}\\
                    &=24
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        그러므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \left(
                        \frac4a+\frac3b
                    \right)(3a+4b)
                    \ge48
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="3a+4b=4" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    4\left(
                        \frac4a+\frac3b
                    \right)
                    \ge48
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac4a+\frac3b\ge12
                `} />

                                    <p className="leading-8">
                                        산술기하의 등호는 두 양수가 같을 때, 즉
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{16b}{a}
                    =
                    \frac{9a}{b}
                `} />

                                    <p className="leading-8">
                                        일 때 성립합니다. 이를 정리하면
                                    </p>

                                    <BlockMath math={String.raw`
                    16b^2=9a^2
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="a>0,\ b>0" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    4b=3a
                `} />

                                    <p className="leading-8">
                                        입니다. 이는 코시-슈바르츠 부등식에서 얻은
                                        등호 조건과 같습니다.
                                    </p>
                                </div>

                                {/* 풀이 3 */}
                                <div className="border-t border-white/10 pt-6">
                                    <p className="mb-4 text-lg font-bold text-white">
                                        풀이 3. 통분하여 산술기하 이용
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식을 먼저 통분하면
                                    </p>

                                    <BlockMath math={String.raw`
        \begin{aligned}
        \frac4a+\frac3b
        &=
        \frac{4b+3a}{ab}\\
        &=
        \frac{3a+4b}{ab}
        \end{aligned}
    `} />

                                    <p className="leading-8">
                                        주어진 조건 <InlineMath math="3a+4b=4" />를 이용하면
                                    </p>

                                    <BlockMath math={String.raw`
        \frac4a+\frac3b
        =
        \frac4{ab}
    `} />

                                    <p className="leading-8">
                                        입니다. 따라서 주어진 식의 최솟값을 구하려면{" "}
                                        <InlineMath math="ab" />의 최댓값을 구하면 됩니다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a>0,\ b>0" />이므로{" "}
                                        <InlineMath math="3a,\ 4b" />는 모두 양수입니다.
                                        산술평균과 기하평균의 관계에 의하여
                                    </p>

                                    <BlockMath math={String.raw`
        3a+4b
        \ge
        2\sqrt{3a\cdot4b}
    `} />

                                    <p className="leading-8">
                                        <InlineMath math="3a+4b=4" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
        4\ge2\sqrt{12ab}
    `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
        ab\le\frac13
    `} />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath math={String.raw`
        \begin{aligned}
        \frac4a+\frac3b
        &=
        \frac4{ab}\\
        &\ge
        \frac4{1/3}\\
        &=12
        \end{aligned}
    `} />

                                    <p className="leading-8">
                                        등호는
                                    </p>

                                    <BlockMath math={String.raw`
        3a=4b
    `} />

                                    <p className="leading-8">
                                        일 때 성립합니다. 이를{" "}
                                        <InlineMath math="3a+4b=4" />와 함께 만족시키면
                                    </p>

                                    <BlockMath math={String.raw`
        3a=4b=2
    `} />

                                    <p className="leading-8">
                                        이므로 실제로 등호가 성립합니다.
                                    </p>
                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{12}
                `} />
                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        코시-슈바르츠 부등식에서는 구하려는 식과
                                        주어진 조건을 각각 제곱의 합으로 만들어
                                        밑끼리 곱했을 때 상수가 나오도록 조립합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \left(
                        \frac2{\sqrt a}
                    \right)
                    \left(
                        \sqrt{3a}
                    \right)
                    +
                    \left(
                        \frac{\sqrt3}{\sqrt b}
                    \right)
                    (2\sqrt b)
                    =
                    4\sqrt3
                `} />

                                    <p className="mt-4 leading-8">
                                        산술기하에서는 두 식을 먼저 곱하여 전개한 뒤
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac{16b}{a}
                    +
                    \frac{9a}{b}
                `} />

                                    <p className="leading-8">
                                        에 산술기하를 적용합니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        두 방법 모두 가능하지만 이 문제에서는{" "}
                                        <strong className="text-white">
                                            주어진 조건과 구하려는 식을 바로 조립할 수 있는
                                            코시-슈바르츠 부등식이 더 간결합니다.
                                        </strong>
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 4 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 4</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        오른쪽 그림과 같이 한 변의 길이가{" "}
                                        <InlineMath math="4" />인 정삼각형{" "}
                                        <InlineMath math="ABC" />의 내부의 점{" "}
                                        <InlineMath math="P" />에서 각 변까지의 거리가 각각{" "}
                                        <InlineMath math="a,\ b,\ 2a" />일 때,{" "}
                                        <InlineMath math="a^2+b^2" />의 최솟값은?
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.23_4.png"
                                        alt="정삼각형 ABC 내부의 점 P에서 세 변까지의 거리가 a, b, 2a인 그림"
                                        className="w-full max-w-[380px] rounded-lg"
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
                                    정삼각형 <InlineMath math="ABC" />의 넓이는
                                </p>

                                <BlockMath math={String.raw`
                \frac{\sqrt3}{4}\cdot4^2
                =
                4\sqrt3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />와 세 꼭짓점을 연결하면
                                    정삼각형은 세 개의 삼각형으로 나누어집니다.
                                    세 삼각형은 모두 밑변의 길이가{" "}
                                    <InlineMath math="4" />이고, 각각의 높이는{" "}
                                    <InlineMath math="a,\ b,\ 2a" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 세 삼각형의 넓이의 합은
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &\frac12\cdot4\cdot a
                +\frac12\cdot4\cdot b
                +\frac12\cdot4\cdot2a\\
                &=2a+2b+4a\\
                &=2(3a+b)
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이 값은 정삼각형 전체의 넓이와 같으므로
                                </p>

                                <BlockMath math={String.raw`
                2(3a+b)=4\sqrt3
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \boxed{3a+b=2\sqrt3}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="a^2+b^2" />와{" "}
                                    <InlineMath math="3a+b" />가 연결되도록
                                    코시-슈바르츠 부등식을 적용합니다.
                                </p>

                                <BlockMath math={String.raw`
                (a^2+b^2)(3^2+1^2)
                \ge
                (3a+b)^2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="3a+b=2\sqrt3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                10(a^2+b^2)
                \ge
                (2\sqrt3)^2
            `} />

                                <BlockMath math={String.raw`
                10(a^2+b^2)\ge12
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                a^2+b^2\ge\frac65
            `} />

                                <p className="leading-8">
                                    코시-슈바르츠 부등식의 등호는 두 제곱의 밑이
                                    같은 비를 이룰 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                a:b=3:1
            `} />

                                <p className="leading-8">
                                    입니다. 실제로{" "}
                                    <InlineMath math="a=3k,\ b=k" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                3a+b
                =
                10k
                =
                2\sqrt3
            `} />

                                <p className="leading-8">
                                    에서 양수 <InlineMath math="k" />가 존재하므로
                                    등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{\frac65}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 점 <InlineMath math="P" />에서 세 변까지의
                                        거리를 각 삼각형의 높이로 이용하여
                                        정삼각형의 넓이를 나타냅니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    3a+b=2\sqrt3
                `} />

                                    <p className="leading-8">
                                        그다음 구하려는 식이{" "}
                                        <InlineMath math="a^2+b^2" />이므로{" "}
                                        <InlineMath math="3a+b" />가 밑끼리 곱의 합으로
                                        나오도록
                                    </p>

                                    <BlockMath math={String.raw`
                    (a^2+b^2)(3^2+1^2)
                    \ge
                    (3a+b)^2
                `} />

                                    <p className="leading-8">
                                        로 조립합니다. 즉,{" "}
                                        <strong className="text-white">
                                            도형의 조건에서 일정한 식을 먼저 만들고,
                                            그 식이 코시 부등식의 오른쪽에 나타나도록
                                            제곱의 합을 조립하는 것
                                        </strong>
                                        이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 5 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 5</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        중심이 원점이고 반지름의 길이가{" "}
                                        <InlineMath math="2" />인 원 위의 임의의 점{" "}
                                        <InlineMath math="(a,\ b)" />와 중심이 원점이고
                                        반지름의 길이가 <InlineMath math="4" />인 원 위의
                                        임의의 점 <InlineMath math="(x,\ y)" />에 대하여{" "}
                                        <InlineMath math="ax+by" />의 최댓값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.23_5.png"
                                        alt="중심이 원점이고 반지름이 2와 4인 두 원 위의 점"
                                        className="w-full max-w-[380px] rounded-lg"
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
                                    점 <InlineMath math="(a,\ b)" />는 중심이 원점이고
                                    반지름의 길이가 <InlineMath math="2" />인 원 위의
                                    점이므로
                                </p>

                                <BlockMath math={String.raw`
                a^2+b^2=4
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    마찬가지로 점 <InlineMath math="(x,\ y)" />는
                                    반지름의 길이가 <InlineMath math="4" />인 원 위의
                                    점이므로
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2=16
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    구하려는 식 <InlineMath math="ax+by" />가
                                    밑끼리 곱의 합으로 나타나도록
                                    코시-슈바르츠 부등식을 적용하면
                                </p>

                                <BlockMath math={String.raw`
                (a^2+b^2)(x^2+y^2)
                \ge
                (ax+by)^2
            `} />

                                <p className="leading-8">
                                    입니다. 두 원의 조건을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                4\cdot16
                \ge
                (ax+by)^2
            `} />

                                <BlockMath math={String.raw`
                (ax+by)^2\le64
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                -8\le ax+by\le8
            `} />

                                <p className="leading-8">
                                    이므로 <InlineMath math="ax+by" />의 최댓값은
                                    <InlineMath math="8" /> 이하입니다.
                                </p>

                                <p className="leading-8">
                                    코시-슈바르츠 부등식의 등호는 두 제곱의 밑이
                                    같은 비를 이룰 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                a:b=x:y
            `} />

                                <p className="leading-8">
                                    입니다. 두 점이 원점에서 같은 방향에 있도록
                                </p>

                                <BlockMath math={String.raw`
                x=2a,\qquad y=2b
            `} />

                                <p className="leading-8">
                                    로 잡으면
                                </p>

                                <BlockMath math={String.raw`
                x^2+y^2
                =
                4(a^2+b^2)
                =
                16
            `} />

                                <p className="leading-8">
                                    이므로 바깥쪽 원 위의 점이 되고,
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                ax+by
                &=a(2a)+b(2b)\\
                &=2(a^2+b^2)\\
                &=8
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이 되어 실제로 등호가 성립합니다.
                                </p>

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
                                        두 원 위의 점이라는 조건에서 각각
                                        제곱의 합을 얻을 수 있습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    a^2+b^2=4,
                    \qquad
                    x^2+y^2=16
                `} />

                                    <p className="leading-8">
                                        그리고 구하려는 식이{" "}
                                        <InlineMath math="ax+by" />이므로 두 제곱의 합을
                                        그대로 코시-슈바르츠 부등식으로 조립하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (a^2+b^2)(x^2+y^2)
                        \ge
                        (ax+by)^2
                    }
                `} />

                                    <p className="leading-8">
                                        이 됩니다. 즉, 이 문제는{" "}
                                        <strong className="text-white">
                                            원의 방정식에서 제곱의 합을 찾고,
                                            원하는 식이 밑끼리 곱의 합이 되도록 조립
                                        </strong>
                                        하는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 6 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 6</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                실수 <InlineMath math="x,\ y,\ z" />에 대하여{" "}
                                <InlineMath math="x^2+y^2+z^2=24" />일 때,{" "}
                                <InlineMath math="x+y+2z" />의 최댓값은{" "}
                                <InlineMath math="M" />이고 최솟값은{" "}
                                <InlineMath math="m" />이다.{" "}
                                <InlineMath math="M-m" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    구하려는 식{" "}
                                    <InlineMath math="x+y+2z" />가 밑끼리 곱의 합으로
                                    나오도록 계수 <InlineMath math="1,\ 1,\ 2" />를
                                    이용하여 코시-슈바르츠 부등식을 조립합니다.
                                </p>

                                <BlockMath math={String.raw`
                (x^2+y^2+z^2)
                (1^2+1^2+2^2)
                \ge
                (x+y+2z)^2
            `} />

                                <p className="leading-8">
                                    주어진 조건{" "}
                                    <InlineMath math="x^2+y^2+z^2=24" />를 대입하면
                                </p>

                                <BlockMath math={String.raw`
                24\cdot6
                \ge
                (x+y+2z)^2
            `} />

                                <BlockMath math={String.raw`
                (x+y+2z)^2\le144
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                -12\le x+y+2z\le12
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    최댓값 <InlineMath math="12" />가 실제로 성립하는지
                                    등호 조건을 확인하겠습니다.
                                    코시-슈바르츠 부등식의 등호는 두 묶음이
                                    같은 비를 이룰 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                x:y:z=1:1:2
            `} />

                                <p className="leading-8">
                                    로 놓을 수 있습니다.{" "}
                                    <InlineMath math="x=k,\ y=k,\ z=2k" />라 하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                x^2+y^2+z^2
                &=k^2+k^2+4k^2\\
                &=6k^2
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    이고 <InlineMath math="6k^2=24" />이므로
                                </p>

                                <BlockMath math={String.raw`
                k=\pm2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=2" />이면
                                </p>

                                <BlockMath math={String.raw`
                (x,\ y,\ z)=(2,\ 2,\ 4)
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                x+y+2z
                =2+2+8
                =12
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                M=12
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    반대로 <InlineMath math="k=-2" />이면
                                </p>

                                <BlockMath math={String.raw`
                (x,\ y,\ z)=(-2,\ -2,\ -4)
            `} />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath math={String.raw`
                x+y+2z
                =-2-2-8
                =-12
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                m=-12
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    M-m
                    &=12-(-12)\\
                    &=\boxed{24}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        구하려는 식{" "}
                                        <InlineMath math="x+y+2z" />의 계수{" "}
                                        <InlineMath math="1,\ 1,\ 2" />를 이용하여
                                        두 번째 제곱의 합을
                                    </p>

                                    <BlockMath math={String.raw`
                    1^2+1^2+2^2
                `} />

                                    <p className="leading-8">
                                        로 조립합니다. 그러면 세 항의
                                        코시-슈바르츠 부등식에 의해
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (x^2+y^2+z^2)
                        (1^2+1^2+2^2)
                        \ge
                        (x+y+2z)^2
                    }
                `} />

                                    <p className="leading-8">
                                        이 만들어집니다. 특히 오른쪽이 제곱이므로
                                        최댓값뿐만 아니라 최솟값까지
                                    </p>

                                    <BlockMath math={String.raw`
                    -12\le x+y+2z\le12
                `} />

                                    <p className="leading-8">
                                        로 한 번에 구할 수 있다는 점이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 7 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 7</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                자연수 <InlineMath math="p,\ q" />가 두 부등식
                            </p>

                            <BlockMath math={String.raw`
            p(4x^2+9y^2+16z^2)
            \ge
            (2x+3y+4z)^2
        `} />

                            <BlockMath math={String.raw`
            q\left(
                x^2+\frac{y^2}{2}+\frac{z^2}{3}
            \right)
            \ge
            (x+y+z)^2
        `} />

                            <p className="leading-10 text-gray-200">
                                을 만족할 때, <InlineMath math="pq" />의 최솟값을 구하시오.
                                (단, <InlineMath math="x,\ y,\ z" />는 실수)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-6 text-gray-300">

                                {/* p */}
                                <div>
                                    <p className="mb-3 text-lg font-bold text-white">
                                        ① <InlineMath math="p" />의 최솟값
                                    </p>

                                    <p className="leading-8">
                                        첫 번째 부등식에서 제곱의 밑은
                                    </p>

                                    <BlockMath math={String.raw`
                    2x,\qquad 3y,\qquad 4z
                `} />

                                    <p className="leading-8">
                                        입니다. 오른쪽의{" "}
                                        <InlineMath math="2x+3y+4z" />가 밑끼리 곱의 합으로
                                        나오도록 <InlineMath math="1,\ 1,\ 1" />과
                                        대응시킵니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &(4x^2+9y^2+16z^2)
                    (1^2+1^2+1^2)\\
                    &\ge
                    (2x+3y+4z)^2
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    3(4x^2+9y^2+16z^2)
                    \ge
                    (2x+3y+4z)^2
                `} />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    p\ge3
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        코시-슈바르츠 부등식의 등호는
                                    </p>

                                    <BlockMath math={String.raw`
                    2x:3y:4z=1:1:1
                `} />

                                    <p className="leading-8">
                                        일 때 실제로 성립하므로{" "}
                                        <InlineMath math="p=3" />보다 작은 값으로는
                                        모든 실수 <InlineMath math="x,\ y,\ z" />에 대하여
                                        부등식이 성립할 수 없습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{p=3}
                `} />
                                </div>

                                {/* q */}
                                <div className="border-t border-white/10 pt-6">
                                    <p className="mb-3 text-lg font-bold text-white">
                                        ② <InlineMath math="q" />의 최솟값
                                    </p>

                                    <p className="leading-8">
                                        두 번째 부등식의 첫 번째 괄호를 제곱의 합으로 나타내면
                                    </p>

                                    <BlockMath math={String.raw`
                    x^2+\frac{y^2}{2}+\frac{z^2}{3}
                    =
                    x^2+
                    \left(\frac{y}{\sqrt2}\right)^2+
                    \left(\frac{z}{\sqrt3}\right)^2
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        오른쪽의 <InlineMath math="x+y+z" />가
                                        밑끼리 곱의 합으로 나오도록
                                    </p>

                                    <BlockMath math={String.raw`
                    1,\qquad \sqrt2,\qquad \sqrt3
                `} />

                                    <p className="leading-8">
                                        을 대응시킵니다. 그러면
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    &\left(
                        x^2+\frac{y^2}{2}+\frac{z^2}{3}
                    \right)
                    (1^2+(\sqrt2)^2+(\sqrt3)^2)\\
                    &\ge
                    \left(
                        x\cdot1+
                        \frac{y}{\sqrt2}\cdot\sqrt2+
                        \frac{z}{\sqrt3}\cdot\sqrt3
                    \right)^2
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    6\left(
                        x^2+\frac{y^2}{2}+\frac{z^2}{3}
                    \right)
                    \ge
                    (x+y+z)^2
                `} />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    q\ge6
                `} />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        등호는
                                    </p>

                                    <BlockMath math={String.raw`
                    x:\frac{y}{\sqrt2}:\frac{z}{\sqrt3}
                    =
                    1:\sqrt2:\sqrt3
                `} />

                                    <p className="leading-8">
                                        일 때 실제로 성립하므로{" "}
                                        <InlineMath math="q=6" />이 최소입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{q=6}
                `} />
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    pq
                    &=3\cdot6\\
                    &=\boxed{18}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        코시-슈바르츠 부등식에서 필요한 계수는
                                        오른쪽의 식이{" "}
                                        <strong className="text-white">
                                            밑끼리 곱의 합
                                        </strong>
                                        으로 만들어지도록 두 번째 제곱의 합을
                                        역으로 조립하여 찾습니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    2x+3y+4z
                    &=
                    (2x)\cdot1+(3y)\cdot1+(4z)\cdot1,\\[4pt]
                    x+y+z
                    &=
                    x\cdot1+
                    \frac{y}{\sqrt2}\cdot\sqrt2+
                    \frac{z}{\sqrt3}\cdot\sqrt3
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        따라서 필요한 계수는 각각
                                    </p>

                                    <BlockMath math={String.raw`
                    1^2+1^2+1^2=3,
                    \qquad
                    1^2+(\sqrt2)^2+(\sqrt3)^2=6
                `} />

                                    <p className="leading-8">
                                        이 됩니다. 단순히 부등식이 성립하는 값만 찾는 것이
                                        아니라, <strong className="text-white">
                                            등호가 실제로 성립하므로 그 값보다 작게 할 수 없다는
                                            것까지 확인
                                        </strong>
                                        해야 최소의 자연수임을 알 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 8 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 8</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                실수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath
                                    math="\displaystyle
                    \frac{a^2+2ab+b^2}{a^2+b^2}
                "
                                />
                                의 최댓값을 구하시오.
                                (단, <InlineMath math="a^2+b^2\ne0" />)
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    분자를 완전제곱식으로 나타내면
                                </p>

                                <BlockMath math={String.raw`
                a^2+2ab+b^2=(a+b)^2
            `} />

                                <p className="leading-8">
                                    입니다. 구하려는{" "}
                                    <InlineMath math="a+b" />가 밑끼리 곱의 합으로 나오도록
                                    코시-슈바르츠 부등식을 적용하면
                                </p>

                                <BlockMath math={String.raw`
                (a^2+b^2)(1^2+1^2)
                \ge
                (a\cdot1+b\cdot1)^2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                2(a^2+b^2)\ge(a+b)^2
            `} />

                                <p className="leading-8">
                                    입니다.{" "}
                                    <InlineMath math="a^2+b^2\ne0" />이므로{" "}
                                    <InlineMath math="a^2+b^2>0" />이고, 양변을{" "}
                                    <InlineMath math="a^2+b^2" />로 나누면
                                </p>

                                <BlockMath math={String.raw`
                \frac{(a+b)^2}{a^2+b^2}
                \le2
            `} />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math={String.raw`
                \frac{a^2+2ab+b^2}{a^2+b^2}
                \le2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    코시-슈바르츠 부등식의 등호는 두 제곱의 밑이
                                    같은 비를 이룰 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                a:b=1:1
            `} />

                                <p className="leading-8">
                                    즉,{" "}
                                    <InlineMath math="a=b" />일 때 성립합니다.{" "}
                                    <InlineMath math="a=b\ne0" />으로 잡으면{" "}
                                    <InlineMath math="a^2+b^2\ne0" />도 만족하므로
                                    등호가 실제로 성립합니다.
                                </p>

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
                                        분자를{" "}
                                        <InlineMath math="(a+b)^2" />으로 보고,{" "}
                                        <InlineMath math="a+b" />가 밑끼리 곱의 합으로
                                        나오도록 두 번째 제곱의 합을{" "}
                                        <InlineMath math="1^2+1^2" />로 조립합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (a^2+b^2)(1^2+1^2)
                        \ge
                        (a+b)^2
                    }
                `} />

                                    <p className="leading-8">
                                        이처럼 분수식에서는 분자와 분모를 따로 보기보다,
                                        분자가 코시 부등식의 오른쪽에 나타나도록
                                        식을 조립하면 최댓값을 바로 구할 수 있습니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 9 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 9</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        오른쪽 그림과 같이 한 변의 길이가{" "}
                                        <InlineMath math="4" />인 정삼각형{" "}
                                        <InlineMath math="ABC" />의 내부에 한 점{" "}
                                        <InlineMath math="P" />가 있다.
                                    </p>

                                    <p className="mt-4 leading-10 text-gray-200">
                                        <InlineMath math="\triangle ABP" />의 넓이를{" "}
                                        <InlineMath math="A_1" />,{" "}
                                        <InlineMath math="\triangle BCP" />의 넓이를{" "}
                                        <InlineMath math="A_2" />,{" "}
                                        <InlineMath math="\triangle APC" />의 넓이를{" "}
                                        <InlineMath math="A_3" />이라 할 때,{" "}
                                        <InlineMath math="A_1^2+A_2^2+A_3^2" />의
                                        최솟값을 구하시오.
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.23_9.png"
                                        alt="정삼각형 ABC의 내부의 점 P와 세 삼각형 ABP, BCP, APC"
                                        className="w-full max-w-[360px] rounded-lg"
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
                                    한 변의 길이가 <InlineMath math="4" />인
                                    정삼각형 <InlineMath math="ABC" />의 넓이는
                                </p>

                                <BlockMath math={String.raw`
                \frac{\sqrt3}{4}\cdot4^2
                =
                4\sqrt3
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />가 정삼각형의 내부에 있으므로
                                    세 삼각형의 넓이의 합은 정삼각형 전체의 넓이와 같습니다.
                                </p>

                                <BlockMath math={String.raw`
                A_1+A_2+A_3=4\sqrt3
            `} />

                                <p className="leading-8">
                                    이제 구하려는 식{" "}
                                    <InlineMath math="A_1^2+A_2^2+A_3^2" />와
                                    넓이의 합 <InlineMath math="A_1+A_2+A_3" />가
                                    연결되도록 세 항의 코시-슈바르츠 부등식을 적용합니다.
                                </p>

                                <BlockMath math={String.raw`
                (A_1^2+A_2^2+A_3^2)
                (1^2+1^2+1^2)
                \ge
                (A_1+A_2+A_3)^2
            `} />

                                <p className="leading-8">
                                    <InlineMath math="A_1+A_2+A_3=4\sqrt3" />이므로
                                </p>

                                <BlockMath math={String.raw`
                3(A_1^2+A_2^2+A_3^2)
                \ge
                (4\sqrt3)^2
            `} />

                                <BlockMath math={String.raw`
                3(A_1^2+A_2^2+A_3^2)
                \ge48
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                A_1^2+A_2^2+A_3^2
                \ge16
            `} />

                                <p className="leading-8">
                                    등호는 두 묶음의 제곱의 밑이 같은 비를 이룰 때,
                                    즉
                                </p>

                                <BlockMath math={String.raw`
                A_1:A_2:A_3=1:1:1
            `} />

                                <p className="leading-8">
                                    일 때 성립합니다. 따라서
                                </p>

                                <BlockMath math={String.raw`
                A_1=A_2=A_3
            `} />

                                <p className="leading-8">
                                    이어야 합니다. 점 <InlineMath math="P" />가
                                    정삼각형의 중심일 때 세 삼각형의 넓이가 같아지므로
                                    등호가 실제로 성립합니다.
                                </p>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \boxed{16}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 세 작은 삼각형의 넓이의 합이
                                        정삼각형 전체의 넓이와 같다는 관계를 만듭니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    A_1+A_2+A_3=4\sqrt3
                `} />

                                    <p className="leading-8">
                                        그리고 구하려는 식이 세 넓이의 제곱의 합이므로,{" "}
                                        <InlineMath math="1^2+1^2+1^2" />을 조립하여
                                        세 항의 코시-슈바르츠 부등식을 적용합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (A_1^2+A_2^2+A_3^2)
                        (1^2+1^2+1^2)
                        \ge
                        (A_1+A_2+A_3)^2
                    }
                `} />

                                    <p className="leading-8">
                                        즉,{" "}
                                        <strong className="text-white">
                                            합이 일정한 세 수의 제곱의 합은
                                            세 수가 모두 같을 때 최소
                                        </strong>
                                        가 됩니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 10 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 10</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
                                <div>
                                    <p className="leading-10 text-gray-200">
                                        다음 그림과 같이{" "}
                                        <InlineMath math="\overline{AB}=4" />,{" "}
                                        <InlineMath math="\overline{AC}=5" />,{" "}
                                        <InlineMath math="\angle A=30^\circ" />인 삼각형{" "}
                                        <InlineMath math="ABC" />의 변{" "}
                                        <InlineMath math="BC" /> 위의 점{" "}
                                        <InlineMath math="P" />에서 두 직선{" "}
                                        <InlineMath math="AB,\ AC" /> 위에 내린 수선의 발을
                                        각각 <InlineMath math="M,\ N" />이라 하자.
                                    </p>

                                    <p className="mt-4 leading-10 text-gray-200">
                                        <InlineMath
                                            math="\displaystyle
                            \frac{\overline{AB}}{\overline{PM}}
                            +
                            \frac{\overline{AC}}{\overline{PN}}
                        "
                                        />
                                        의 최솟값이{" "}
                                        <InlineMath math="\displaystyle \frac qp" />일 때,{" "}
                                        <InlineMath math="p+q" />의 값을 구하시오.
                                        (단, <InlineMath math="p,\ q" />는 서로소인 자연수이다.)
                                    </p>
                                </div>

                                <div className="flex justify-center">
                                    <img
                                        src="/images/commonMath2/2.23_10.png"
                                        alt="삼각형 ABC의 변 BC 위의 점 P에서 AB와 AC에 내린 수선의 발 M, N"
                                        className="w-full max-w-[380px] rounded-lg"
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
                                    먼저 삼각형 <InlineMath math="ABC" />의 넓이를 구하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                [ABC]
                &=
                \frac12
                \cdot4\cdot5
                \cdot\sin30^\circ\\
                &=5
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />가 변{" "}
                                    <InlineMath math="BC" /> 위에 있으므로
                                </p>

                                <BlockMath math={String.raw`
                [ABP]+[APC]=[ABC]
            `} />

                                <p className="leading-8">
                                    입니다. 이때 <InlineMath math="PM" />과{" "}
                                    <InlineMath math="PN" />은 각각 두 삼각형의 높이이므로
                                </p>

                                <BlockMath math={String.raw`
                \frac12\cdot4\cdot PM
                +
                \frac12\cdot5\cdot PN
                =
                5
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \boxed{4PM+5PN=10}
            `} />

                                <p className="leading-8">
                                    이라는 관계식을 얻습니다.
                                </p>

                                <p className="leading-8">
                                    이제 구하려는 식은
                                </p>

                                <BlockMath math={String.raw`
                \frac{\overline{AB}}{\overline{PM}}
                +
                \frac{\overline{AC}}{\overline{PN}}
                =
                \frac4{PM}+\frac5{PN}
            `} />

                                <p className="leading-8">
                                    입니다. 코시-슈바르츠 부등식에서 밑끼리 곱의 합이
                                    상수가 되도록
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                &\left(
                    \frac4{PM}+\frac5{PN}
                \right)
                (4PM+5PN)\\
                &=
                \left\{
                    \left(\frac2{\sqrt{PM}}\right)^2
                    +
                    \left(\frac{\sqrt5}{\sqrt{PN}}\right)^2
                \right\}\\
                &\qquad\times
                \left\{
                    (2\sqrt{PM})^2
                    +
                    (\sqrt5\sqrt{PN})^2
                \right\}\\
                &\ge
                (4+5)^2\\
                &=81
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    앞에서 <InlineMath math="4PM+5PN=10" />을 얻었으므로
                                </p>

                                <BlockMath math={String.raw`
                10\left(
                    \frac4{PM}+\frac5{PN}
                \right)
                \ge81
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \frac4{PM}+\frac5{PN}
                \ge
                \frac{81}{10}
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    등호는 두 제곱의 밑이 같은 비를 이룰 때 성립하므로
                                </p>

                                <BlockMath math={String.raw`
                \frac{2}{\sqrt{PM}}
                :
                \frac{\sqrt5}{\sqrt{PN}}
                =
                2\sqrt{PM}
                :
                \sqrt5\sqrt{PN}
            `} />

                                <p className="leading-8">
                                    이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                PM=PN
            `} />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="4PM+5PN=10" />과
                                    함께 만족시키면
                                </p>

                                <BlockMath math={String.raw`
                PM=PN=\frac{10}{9}
            `} />

                                <p className="leading-8">
                                    이고, 삼각형의 내부에서 두 변까지의 거리가 같은 점이
                                    변 <InlineMath math="BC" /> 위에 존재하므로
                                    등호가 실제로 성립합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 최솟값은
                                </p>

                                <BlockMath math={String.raw`
                \frac{81}{10}
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                p=10,\qquad q=81
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    p+q
                    &=10+81\\
                    &=\boxed{91}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        먼저 삼각형의 넓이를 이용하여 두 수선의 길이 사이의
                                        관계식을 만듭니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{4PM+5PN=10}
                `} />

                                    <p className="leading-8">
                                        그리고 구하려는 식
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac4{PM}+\frac5{PN}
                `} />

                                    <p className="leading-8">
                                        과 이 관계식을 코시-슈바르츠 부등식으로 조립하면
                                        밑끼리 곱의 합이
                                    </p>

                                    <BlockMath math={String.raw`
                    4+5=9
                `} />

                                    <p className="leading-8">
                                        가 되어 문자가 없어집니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        \left(
                            \frac4{PM}+\frac5{PN}
                        \right)
                        (4PM+5PN)
                        \ge
                        (4+5)^2
                    }
                `} />

                                    <p className="leading-8">
                                        즉,{" "}
                                        <strong className="text-white">
                                            도형에서 관계식을 만든 뒤 그 관계식과
                                            구하려는 분수식을 서로 짝지어 조립
                                        </strong>
                                        하는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 11 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 11</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x+y+z=4" />,{" "}
                                <InlineMath math="x^2+y^2+z^2=6" />을 만족하는 실수{" "}
                                <InlineMath math="x,\ y,\ z" />에 대하여{" "}
                                <InlineMath math="x" />가 취할 수 있는 최댓값을{" "}
                                <InlineMath math="M" />, 최솟값을{" "}
                                <InlineMath math="m" />이라 할 때,{" "}
                                <InlineMath math="\displaystyle \frac{M}{m}" />의 값을
                                구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="x" />의 범위를 구해야 하므로
                                    주어진 두 조건에서 <InlineMath math="y,\ z" />에
                                    관한 식을 각각 만들면
                                </p>

                                <BlockMath math={String.raw`
                y+z=4-x
            `} />

                                <BlockMath math={String.raw`
                y^2+z^2=6-x^2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="y+z" />가 밑끼리 곱의 합으로
                                    나오도록 코시-슈바르츠 부등식을 적용하면
                                </p>

                                <BlockMath math={String.raw`
                (y^2+z^2)(1^2+1^2)
                \ge
                (y+z)^2
            `} />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath math={String.raw`
                2(y^2+z^2)\ge(y+z)^2
            `} />

                                <p className="leading-8">
                                    입니다. 앞에서 구한 두 식을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                2(6-x^2)\ge(4-x)^2
            `} />

                                <p className="leading-8">
                                    이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
                \begin{aligned}
                12-2x^2
                &\ge
                x^2-8x+16\\
                3x^2-8x+4
                &\le0\\
                (3x-2)(x-2)
                &\le0
                \end{aligned}
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                \frac23\le x\le2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    범위의 양 끝값에서 코시-슈바르츠 부등식의
                                    등호가 실제로 성립하는지 확인하겠습니다.
                                    등호는
                                </p>

                                <BlockMath math={String.raw`
                y:z=1:1
            `} />

                                <p className="leading-8">
                                    즉, <InlineMath math="y=z" />일 때 성립합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x=2" />일 때{" "}
                                    <InlineMath math="y+z=2" />이므로
                                </p>

                                <BlockMath math={String.raw`
                y=z=1
            `} />

                                <p className="leading-8">
                                    로 잡으면 두 조건을 모두 만족합니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                M=2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="\displaystyle x=\frac23" />일 때{" "}
                                    <InlineMath math="\displaystyle y+z=\frac{10}{3}" />이므로
                                </p>

                                <BlockMath math={String.raw`
                y=z=\frac53
            `} />

                                <p className="leading-8">
                                    로 잡으면 두 조건을 모두 만족합니다.
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                m=\frac23
            `} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \frac{M}{m}
                    &=
                    \frac{2}{2/3}\\
                    &=\boxed{3}
                    \end{aligned}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x" />의 범위를 구해야 하므로
                                        주어진 조건에서 <InlineMath math="x" />를
                                        제외한 두 변수에 대하여
                                    </p>

                                    <BlockMath math={String.raw`
                    y+z=4-x,
                    \qquad
                    y^2+z^2=6-x^2
                `} />

                                    <p className="leading-8">
                                        를 먼저 만듭니다. 그다음 두 식을 연결하도록
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (y^2+z^2)(1^2+1^2)
                        \ge
                        (y+z)^2
                    }
                `} />

                                    <p className="leading-8">
                                        를 적용하면 <InlineMath math="x" />만의
                                        부등식을 얻을 수 있습니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        즉,{" "}
                                        <strong className="text-white">
                                            한 변수의 범위를 구할 때 그 변수를 제외한
                                            나머지 변수들의 합과 제곱의 합을 만든 뒤
                                            코시-슈바르츠 부등식으로 연결
                                        </strong>
                                        하는 것이 핵심입니다.
                                    </p>
                                </div>
                            </div>
                        </details>
                    </div>

                    {/* 예제 12 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 12</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="x+y=2" />를 만족시키는 두 양수{" "}
                                <InlineMath math="x,\ y" />에 대하여 옳은 내용을
                                &lt;보기&gt;에서 모두 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-white/10 p-5">
                                <p className="mb-5 text-center font-bold text-white">
                                    &lt;보 기&gt;
                                </p>

                                <div className="space-y-4 text-gray-200">
                                    <p>
                                        ㄱ. <InlineMath math="xy\le1" />
                                    </p>

                                    <p>
                                        ㄴ. <InlineMath math="x^2+y^2\ge2" />
                                    </p>

                                    <p>
                                        ㄷ.{" "}
                                        <InlineMath math="\displaystyle \frac1x+\frac1y\le1" />
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 grid gap-x-10 gap-y-4 md:grid-cols-3">
                                <div>① ㄴ</div>
                                <div>② ㄷ</div>
                                <div>③ ㄱ, ㄴ</div>
                                <div>④ ㄱ, ㄷ</div>
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
                                    <p className="mb-3 font-bold text-white">
                                        ㄱ. <InlineMath math="xy\le1" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x>0,\ y>0" />이므로
                                        산술평균과 기하평균의 관계에 의하여
                                    </p>

                                    <BlockMath math={String.raw`
                    x+y\ge2\sqrt{xy}
                `} />

                                    <p className="leading-8">
                                        입니다. <InlineMath math="x+y=2" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    2\ge2\sqrt{xy}
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    xy\le1
                `} />

                                    <p className="leading-8">
                                        이므로 ㄱ은 <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                {/* ㄴ */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄴ. <InlineMath math="x^2+y^2\ge2" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x+y" />가 밑끼리 곱의 합으로
                                        나오도록 코시-슈바르츠 부등식을 적용하면
                                    </p>

                                    <BlockMath math={String.raw`
                    (x^2+y^2)(1^2+1^2)
                    \ge
                    (x+y)^2
                `} />

                                    <p className="leading-8">
                                        <InlineMath math="x+y=2" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    2(x^2+y^2)\ge4
                `} />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    x^2+y^2\ge2
                `} />

                                    <p className="leading-8">
                                        이므로 ㄴ은 <strong className="text-white">참</strong>입니다.
                                    </p>
                                </div>

                                {/* ㄷ */}
                                <div className="border-t border-white/10 pt-5">
                                    <p className="mb-3 font-bold text-white">
                                        ㄷ.{" "}
                                        <InlineMath math="\displaystyle \frac1x+\frac1y\le1" />
                                    </p>

                                    <p className="leading-8">
                                        왼쪽 식을 통분하면
                                    </p>

                                    <BlockMath math={String.raw`
                    \begin{aligned}
                    \frac1x+\frac1y
                    &=
                    \frac{x+y}{xy}\\
                    &=
                    \frac2{xy}
                    \end{aligned}
                `} />

                                    <p className="leading-8">
                                        입니다. ㄱ에서 <InlineMath math="xy\le1" />이고{" "}
                                        <InlineMath math="xy>0" />이므로
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac2{xy}\ge2
                `} />

                                    <p className="leading-8">
                                        입니다. 따라서
                                    </p>

                                    <BlockMath math={String.raw`
                    \frac1x+\frac1y\ge2
                `} />

                                    <p className="leading-8">
                                        이므로 ㄷ은 <strong className="text-white">거짓</strong>입니다.
                                    </p>
                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        옳은 것은 ㄱ, ㄴ입니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    {③}
                `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        같은 조건 <InlineMath math="x+y=2" />에서
                                        구하려는 식의 형태에 따라 적절한 부등식을 선택합니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    xy
                    \quad\Longrightarrow\quad
                    x+y\ge2\sqrt{xy}
                `} />

                                    <BlockMath math={String.raw`
                    x^2+y^2
                    \quad\Longrightarrow\quad
                    (x^2+y^2)(1^2+1^2)\ge(x+y)^2
                `} />

                                    <p className="leading-8">
                                        즉, <InlineMath math="xy" />는 산술기하로,{" "}
                                        <InlineMath math="x^2+y^2" />는 코시-슈바르츠로
                                        연결하면 각각의 범위를 쉽게 판단할 수 있습니다.
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

                        <BlockMath math={String.raw`
                \boxed{
                    (a^2+b^2)(x^2+y^2)
                    \ge
                    (ax+by)^2
                }
            `} />

                        <BlockMath math={String.raw`
                \boxed{
                    (a^2+b^2+c^2)(x^2+y^2+z^2)
                    \ge
                    (ax+by+cz)^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            코시-슈바르츠 부등식은 실수 범위에서 성립합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (\text{제곱의 합})(\text{제곱의 합})
                    \ge
                    (\text{밑끼리 곱의 합})^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            문제에서는 다음 순서로 생각하면 됩니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    \text{제곱의 밑 확인}
                    \rightarrow
                    \text{필요한 식이 나오도록 조립}
                    \rightarrow
                    \text{코시-슈바르츠 적용}
                    \rightarrow
                    \text{등호 조건 확인}
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            등호는
                        </p>

                        <BlockMath math={String.raw`
                \boxed{bx=ay}
            `} />

                        <p className="leading-8 text-gray-300">
                            일 때 성립합니다.
                        </p>
                    </div>

                </div>
            </section>

            {/* 2.24 코시-슈바르츠 부등식의 확장 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h2 className="text-3xl font-bold">
                        2.24 코시-슈바르츠 부등식의 확장
                    </h2>

                    <span className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-3 py-1 text-sm font-semibold text-yellow-300">
                        교과과정 외
                    </span>
                </div>

                <p className="leading-8 text-gray-300">
                    앞에서 배운 코시-슈바르츠 부등식은 두 수나 세 수뿐만 아니라
                    임의의 개수의 실수에 대해서도 성립합니다.
                    여기서는 코시-슈바르츠 부등식을 일반적인 형태로 확장하고
                    그 성립 이유를 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 코시-슈바르츠 부등식의 확장 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            1. 코시-슈바르츠 부등식의 확장
                        </h3>

                        <p className="leading-8 text-gray-300">
                            실수{" "}
                            <InlineMath math="a_1,\ a_2,\ \cdots,\ a_n" />과{" "}
                            <InlineMath math="b_1,\ b_2,\ \cdots,\ b_n" />에 대하여
                            다음 부등식이 성립합니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (a_1^2+a_2^2+\cdots+a_n^2)
                    (b_1^2+b_2^2+\cdots+b_n^2)
                    \ge
                    (a_1b_1+a_2b_2+\cdots+a_nb_n)^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            두 항이나 세 항에서 사용했던 것과 구조는 같습니다.
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (\text{제곱의 합})(\text{제곱의 합})
                    \ge
                    (\text{밑끼리 곱의 합})^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            즉, 항의 개수가 늘어나더라도 같은 방법으로
                            식을 조립할 수 있습니다.
                        </p>
                    </div>

                    {/* 2. 증명의 시작 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            2. 항상 0 이상인 식 만들기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            임의의 실수 <InlineMath math="t" />에 대하여
                        </p>

                        <BlockMath math={String.raw`
                a_1t+b_1,\quad
                a_2t+b_2,\quad
                \cdots,\quad
                a_nt+b_n
            `} />

                        <p className="leading-8 text-gray-300">
                            은 모두 실수입니다. 실수의 제곱은 항상 0 이상이므로
                        </p>

                        <BlockMath math={String.raw`
                (a_1t+b_1)^2
                +(a_2t+b_2)^2
                +\cdots+
                (a_nt+b_n)^2
                \ge0
            `} />

                        <p className="leading-8 text-gray-300">
                            이 모든 실수 <InlineMath math="t" />에 대하여 성립합니다.
                        </p>
                    </div>

                    {/* 3. t에 대한 이차식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            3. <InlineMath math="t" />에 대한 이차식으로 정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            위 식을 전개하여 <InlineMath math="t" />에 대하여
                            정리하면
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                &(a_1^2+a_2^2+\cdots+a_n^2)t^2\\
                &\quad
                +2(a_1b_1+a_2b_2+\cdots+a_nb_n)t\\
                &\quad
                +(b_1^2+b_2^2+\cdots+b_n^2)
                \ge0
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            을 얻습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 부등식은{" "}
                            <strong className="text-white">
                                모든 실수 <InlineMath math="t" />에 대하여
                            </strong>{" "}
                            성립합니다.
                        </p>
                    </div>

                    {/* 4. 판별식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            4. 판별식을 이용한 증명
                        </h3>

                        <p className="leading-8 text-gray-300">
                            앞의 식은 모든 실수 <InlineMath math="t" />에 대하여
                            0 이상이므로 <InlineMath math="t" />에 대한
                            이차식의 판별식은 0 이하입니다.
                        </p>

                        <BlockMath math={String.raw`
                \frac{D}{4}\le0
            `} />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math={String.raw`
                \begin{aligned}
                &(a_1b_1+a_2b_2+\cdots+a_nb_n)^2\\
                &\quad-
                (a_1^2+a_2^2+\cdots+a_n^2)
                (b_1^2+b_2^2+\cdots+b_n^2)
                \le0
                \end{aligned}
            `} />

                        <p className="leading-8 text-gray-300">
                            이므로 이를 정리하면
                        </p>

                        <BlockMath math={String.raw`
                \boxed{
                    (a_1^2+a_2^2+\cdots+a_n^2)
                    (b_1^2+b_2^2+\cdots+b_n^2)
                    \ge
                    (a_1b_1+a_2b_2+\cdots+a_nb_n)^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            이 되어 코시-슈바르츠 부등식이 성립함을 알 수 있습니다.
                        </p>
                    </div>

                    {/* 5. 두 항과 세 항은 특별한 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">
                        <h3 className="mb-4 text-2xl font-bold">
                            5. 두 항과 세 항은 확장된 식의 특별한 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="n=2" />이면
                        </p>

                        <BlockMath math={String.raw`
                (a^2+b^2)(x^2+y^2)
                \ge
                (ax+by)^2
            `} />

                        <p className="leading-8 text-gray-300">
                            이고, <InlineMath math="n=3" />이면
                        </p>

                        <BlockMath math={String.raw`
                (a^2+b^2+c^2)(x^2+y^2+z^2)
                \ge
                (ax+by+cz)^2
            `} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 앞 단원에서 배운 두 항과 세 항의
                            코시-슈바르츠 부등식은 모두 하나의 일반적인 부등식에서
                            나온 것임을 알 수 있습니다.
                        </p>
                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">
                        <h3 className="mb-4 text-xl font-bold text-white">예제 1</h3>

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                            <p className="leading-10 text-gray-200">
                                <InlineMath math="a+b+c+d=4" />,{" "}
                                <InlineMath math="a^2+b^2+c^2+d^2=6" />을 만족하는 실수{" "}
                                <InlineMath math="a,\ b,\ c,\ d" />에 대하여{" "}
                                <InlineMath math="a" />의 범위가
                            </p>

                            <BlockMath math={String.raw`
            \alpha\le a\le\beta
        `} />

                            <p className="leading-10 text-gray-200">
                                일 때, <InlineMath math="\alpha\beta" />의 값을 구하시오.
                            </p>
                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">
                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">
                                <p className="leading-8">
                                    <InlineMath math="a" />의 범위를 구해야 하므로
                                    주어진 두 조건에서 <InlineMath math="b,\ c,\ d" />에
                                    관한 식을 각각 만들면
                                </p>

                                <BlockMath math={String.raw`
                b+c+d=4-a
            `} />

                                <BlockMath math={String.raw`
                b^2+c^2+d^2=6-a^2
            `} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="b+c+d" />가
                                    밑끼리 곱의 합으로 나오도록
                                    세 항의 코시-슈바르츠 부등식을 적용하면
                                </p>

                                <BlockMath math={String.raw`
                (b^2+c^2+d^2)(1^2+1^2+1^2)
                \ge
                (b+c+d)^2
            `} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
                3(b^2+c^2+d^2)\ge(b+c+d)^2
            `} />

                                <p className="leading-8">
                                    입니다. 앞에서 구한 식을 대입하면
                                </p>

                                <BlockMath math={String.raw`
                3(6-a^2)\ge(4-a)^2
            `} />

                                <p className="leading-8">
                                    이를 정리하면
                                </p>

                                <BlockMath math={String.raw`
    \begin{aligned}
    3(6-a^2)
    &\ge
    (4-a)^2\\
    18-3a^2
    &\ge
    a^2-8a+16\\
    2a^2-4a-1
    &\le0
    \end{aligned}
`} />

                                <p className="leading-8">
                                    따라서 <InlineMath math="a" />의 범위의 양 끝값{" "}
                                    <InlineMath math="\alpha,\ \beta" />는 이차방정식
                                </p>

                                <BlockMath math={String.raw`
    2a^2-4a-1=0
`} />

                                <p className="leading-8">
                                    의 두 근입니다.
                                </p>

                                <p className="leading-8">
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath math={String.raw`
    \alpha\beta
    =
    -\frac{1}{2}
`} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">
                                    <p className="font-bold text-green-300">따라서</p>

                                    <BlockMath math={String.raw`
        \boxed{-\frac12}
    `} />
                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8">
                                        한 변수 <InlineMath math="a" />의 범위를 구할 때
                                        그 변수를 제외한 나머지 세 변수의 합과
                                        제곱의 합을 만듭니다.
                                    </p>

                                    <BlockMath math={String.raw`
                    b+c+d=4-a,
                    \qquad
                    b^2+c^2+d^2=6-a^2
                `} />

                                    <p className="leading-8">
                                        그리고 세 항의 코시-슈바르츠 부등식
                                    </p>

                                    <BlockMath math={String.raw`
                    \boxed{
                        (b^2+c^2+d^2)
                        (1^2+1^2+1^2)
                        \ge
                        (b+c+d)^2
                    }
                `} />

                                    <p className="leading-8">
                                        을 적용하면 <InlineMath math="a" />만의
                                        부등식을 만들어 범위를 구할 수 있습니다.
                                        이는 앞 단원의 세 변수 문제를
                                        네 변수로 확장한 형태입니다.
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

                        <BlockMath math={String.raw`
                \boxed{
                    (\text{제곱의 합})(\text{제곱의 합})
                    \ge
                    (\text{밑끼리 곱의 합})^2
                }
            `} />

                        <p className="leading-8 text-gray-300">
                            코시-슈바르츠 부등식은 항의 개수와 관계없이
                            같은 구조를 가집니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            또한{" "}
                            <InlineMath math="(a_1t+b_1)^2+\cdots+(a_nt+b_n)^2" />가
                            모든 실수 <InlineMath math="t" />에 대하여
                            0 이상이라는 사실에서 출발하여,{" "}
                            <strong className="text-white">
                                이차식의 판별식 <InlineMath math="D/4\le0" />
                            </strong>
                            을 이용하면 일반적인 코시-슈바르츠 부등식을
                            증명할 수 있습니다.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}