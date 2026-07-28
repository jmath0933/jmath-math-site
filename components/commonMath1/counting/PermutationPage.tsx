"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function PermutationPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.11 순열
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    서로 다른 여러 대상 중 일부를 뽑아 일렬로 나열하는 경우의 수를
                    순열을 이용하여 나타낼 수 있습니다.
                </p>

                {/* 순열의 뜻 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        순열의 뜻
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 <InlineMath math="n" />개 중에서{" "}
                        <InlineMath math="r" />개를 뽑아 일렬로 나열하는 경우의 수를
                        <b className="text-white"> 순열</b>이라 하고,
                        다음과 같이 나타냅니다.
                    </p>

                    <BlockMath math="{}_nP_r" />

                    <p className="leading-8 text-gray-300">
                        이때 <InlineMath math="r" />은{" "}
                        <InlineMath math="0" /> 이상{" "}
                        <InlineMath math="n" /> 이하입니다.
                    </p>

                    <BlockMath math="0\le r\le n" />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            순열에서는 단순히 대상을 고르는 것뿐 아니라,
                            <b className="text-white">
                                {" "}뽑은 대상들을 어떤 순서로 나열하는지
                            </b>
                            까지 구분합니다.
                        </p>

                    </div>

                </div>

                {/* 곱의 법칙 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        곱의 법칙으로 구하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 <InlineMath math="n" />개 중{" "}
                        <InlineMath math="r" />개를 일렬로 나열하려면{" "}
                        <InlineMath math="r" />개의 자리가 필요합니다.
                    </p>

                    <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="font-semibold text-white">
                                첫 번째 자리
                            </p>

                            <BlockMath math="n" />

                            <p className="text-gray-300">
                                가지
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="font-semibold text-white">
                                두 번째 자리
                            </p>

                            <BlockMath math="n-1" />

                            <p className="text-gray-300">
                                가지
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="font-semibold text-white">
                                세 번째 자리
                            </p>

                            <BlockMath math="n-2" />

                            <p className="text-gray-300">
                                가지
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="font-semibold text-white">
                                <InlineMath math="r" />번째 자리
                            </p>

                            <BlockMath math="n-r+1" />

                            <p className="text-gray-300">
                                가지
                            </p>

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        각 자리를 모두 채워야 하므로 곱의 법칙에 의하여
                    </p>

                    <BlockMath
                        math="{}_nP_r
            =
            n(n-1)(n-2)\cdots(n-r+1)"
                    />

                </div>

                {/* 왜 r번 곱하는가 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        왜 곱셈을 <InlineMath math="r" />번 하는가?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="r" />개를 일렬로 나열하려면
                        자리가 모두 <InlineMath math="r" />개 필요합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        따라서 첫 번째 자리부터{" "}
                        <InlineMath math="r" />번째 자리까지 경우의 수를 차례대로 구하여
                        모두 <InlineMath math="r" />번 곱합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="(n-0)(n-1)(n-2)\cdots\left(n-(r-1)\right)"
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        괄호 안에서 빼는 수는
                        <InlineMath math="0" />부터{" "}
                        <InlineMath math="r-1" />까지입니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="0" />부터{" "}
                        <InlineMath math="r-1" />까지의 정수는 모두{" "}
                        <InlineMath math="r" />개이므로 곱해지는 수도{" "}
                        <InlineMath math="r" />개입니다.
                    </p>

                    <BlockMath
                        math="n-(r-1)=n-r+1"
                    />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath
                        math="{}_nP_r
            =
            n(n-1)(n-2)\cdots(n-r+1)"
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            곱해지는 수가 <InlineMath math="r" />개이므로
                            마지막 항은 <InlineMath math="n-r" />이 아니라{" "}
                            <InlineMath math="n-(r-1)=n-r+1" />입니다.
                        </p>

                    </div>

                </div>

                {/* 자리 바꿈 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        <InlineMath math="n" />개의 자리 바꿈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 <InlineMath math="n" />개를 모두 일렬로 나열하는 것을
                        <b className="text-white">
                            {" "}<InlineMath math="n" />개의 자리 바꿈
                        </b>
                        이라고 합니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        앞으로 서로 다른 대상을 모두 일렬로 나열하는 경우에는
                        이 표현을 사용하겠습니다.
                    </p>

                    <BlockMath
                        math="{}_nP_n
            =
            n(n-1)(n-2)\cdots3\cdot2\cdot1"
                    />

                    <p className="leading-8 text-gray-300">
                        이 곱을 <InlineMath math="n!" />로 나타냅니다.
                    </p>

                    <BlockMath math="n!=n(n-1)(n-2)\cdots3\cdot2\cdot1" />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{\(n\)개의 자리 바꿈의 수}
                =
                {}_nP_n
                =
                n!"
                        />

                    </div>

                </div>

                {/* 팩토리얼 공식 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        팩토리얼을 이용한 순열의 공식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        순열의 식
                    </p>

                    <BlockMath
                        math="{}_nP_r
            =
            n(n-1)(n-2)\cdots(n-r+1)"
                    />

                    <p className="leading-8 text-gray-300">
                        에 다음 값을 곱합니다.
                    </p>

                    <BlockMath math="\frac{(n-r)!}{(n-r)!}=1" />

                    <p className="leading-8 text-gray-300">
                        그러면 분자의 곱이{" "}
                        <InlineMath math="n!" />이 되므로
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            {}_nP_r
            &=
            n(n-1)\cdots(n-r+1)
            \times
            \frac{(n-r)!}{(n-r)!}\\[4pt]
            &=
            \frac{n!}{(n-r)!}
            \end{aligned}"
                    />

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <BlockMath
                            math="{}_nP_r=\frac{n!}{(n-r)!}"
                        />

                        <p className="mt-3 text-center font-semibold text-green-300">
                            앞의 수 팩토리얼 ÷ 두 수의 차 팩토리얼
                        </p>

                        <div className="mt-2 text-center text-gray-300">
                            <BlockMath
                                math="\frac{\text{앞}!}{\text{차}!}"
                            />
                        </div>

                    </div>

                </div>

                {/* 특별한 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        특별한 경우
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                아무것도 뽑지 않는 경우
                            </p>

                            <BlockMath
                                math="{}_nP_0
                    =
                    \frac{n!}{(n-0)!}
                    =
                    \frac{n!}{n!}
                    =
                    1"
                            />

                            <p className="leading-8 text-gray-300">
                                아무것도 뽑지 않아 아무것도 나열하지 않는 경우를
                                한 가지로 봅니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                모두 뽑아 나열하는 경우
                            </p>

                            <BlockMath
                                math="{}_nP_n
                    =
                    \frac{n!}{(n-n)!}
                    =
                    \frac{n!}{0!}
                    =
                    n!"
                            />

                            <p className="leading-8 text-gray-300">
                                이 식이 성립하도록{" "}
                                <InlineMath math="0!=1" />로 정합니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="{}_nP_0=1,\qquad{}_nP_n=n!,\qquad0!=1"
                        />

                    </div>

                </div>

                {/* P 기호의 실전 사용 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-2xl font-bold text-yellow-300">
                        실전에서 순열 기호를 사용하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        순열은 각각의 자리를 차례대로 채우는 과정이므로
                        실제 계산의 기본 원리는
                        <b className="text-white"> 곱의 법칙</b>입니다.
                    </p>

                    <BlockMath
                        math="\text{순열}
            =
            \text{곱의 법칙으로 자리를 차례대로 채우는 것}"
                    />

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="{}_nP_r" />는
                        서로 다른 <InlineMath math="n" />개 중{" "}
                        <InlineMath math="r" />개를 뽑아 나열하는 과정을
                        한 번에 나타낸 기호입니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        이 기호는 선택과 배열을 모두 포함하므로,
                        실제 경우의 수 문제에서 조건을 충분히 확인하지 않고 먼저 사용하면
                        이미 포함한 배열을 다시 나누거나 수정하기가 어려울 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="font-semibold text-green-300">
                                <InlineMath math="P" /> 기호를 사용하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                순열의 공식이나 성질을 계산하는 문제
                            </p>

                            <p className="leading-8 text-gray-300">
                                순열 기호가 포함된 식의 빈칸을 채우거나
                                등식을 증명하는 문제
                            </p>

                            <BlockMath
                                math="{}_nP_r=\frac{n!}{(n-r)!}"
                            />

                        </div>

                        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-semibold text-red-300">
                                실제 경우의 수를 세는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="P" /> 기호를 먼저 사용하지 않고,
                                각 자리에서 가능한 수를 직접 곱합니다.
                            </p>

                            <BlockMath math="5\times4\times3" />

                            <p className="leading-8 text-gray-300">
                                경우를 나누거나 중간에 조건이 달라져도
                                곱의 법칙으로 나타내면 쉽게 수정할 수 있습니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            실전 원칙
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            순열의 공식과 관련된 빈칸 문제나 식의 계산에서는{" "}
                            <InlineMath math="{}_nP_r" />를 사용합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            실제로 경우의 수를 세는 문제에서는
                            <b className="text-white">
                                {" "}곱의 법칙을 이용하여 숫자를 직접 곱합니다.
                            </b>
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            순열은 서로 다른 대상 중 일부를 뽑아
                            순서 있게 나열하는 경우의 수입니다.
                        </p>

                        <p>
                            <InlineMath math="r" />개의 자리를 채우므로
                            곱해지는 수도 정확히 <InlineMath math="r" />개입니다.
                        </p>

                        <p>
                            서로 다른 <InlineMath math="n" />개를 모두 나열하는 것을{" "}
                            <InlineMath math="n" />개의 자리 바꿈이라고 하며,
                            그 경우의 수는 <InlineMath math="n!" />입니다.
                        </p>

                        <p>
                            실제 경우의 수 문제에서는{" "}
                            <InlineMath math="P" /> 기호보다 곱의 법칙을 먼저 사용합니다.
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
                            다음은 <InlineMath math="1\le r<n" />일 때, 등식
                        </p>

                        <BlockMath
                            math="{}_nP_r={}_{n-1}P_r+r\cdot{}_{n-1}P_{r-1}"
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립함을 증명하는 과정이다.
                            빈칸 (가), (나)에 알맞은 것을 구하여라.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <BlockMath
                                math="\begin{aligned}
                {}_{n-1}P_r+r\cdot{}_{n-1}P_{r-1}
                &=
                \frac{(n-1)!}{\{(n-1)-r\}!}
                +
                r\cdot
                \frac{(n-1)!}{\{(n-1)-(r-1)\}!}\\[6pt]
                &=
                \frac{(n-r)(n-1)!+r(n-1)!}{(n-r)!}\\[6pt]
                &=
                \frac{\boxed{\text{(가)}}\,(n-1)!}{(n-r)!}\\[6pt]
                &=
                \frac{\boxed{\text{(나)}}}{(n-r)!}\\[6pt]
                &=
                {}_nP_r
                \end{aligned}"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 항을 순열의 팩토리얼 공식으로 나타냅니다.
                            </p>

                            <BlockMath
                                math="{}_{n-1}P_r
                =
                \frac{(n-1)!}{(n-r-1)!}"
                            />

                            <BlockMath
                                math="{}_{n-1}P_{r-1}
                =
                \frac{(n-1)!}{(n-r)!}"
                            />

                            <p className="leading-8">
                                첫 번째 분수의 분모를{" "}
                                <InlineMath math="(n-r)!" />로 맞추면
                            </p>

                            <BlockMath
                                math="\frac{(n-1)!}{(n-r-1)!}
                =
                \frac{(n-r)(n-1)!}{(n-r)!}"
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                {}_{n-1}P_r+r\cdot{}_{n-1}P_{r-1}
                &=
                \frac{(n-r)(n-1)!+r(n-1)!}{(n-r)!}\\[4pt]
                &=
                \frac{\{(n-r)+r\}(n-1)!}{(n-r)!}
                \end{aligned}"
                            />

                            <p className="leading-8">
                                중괄호 안을 정리하면
                            </p>

                            <BlockMath math="(n-r)+r=n" />

                            <p className="leading-8">
                                따라서 (가)는
                            </p>

                            <BlockMath math="\boxed{n}" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                다음으로
                            </p>

                            <BlockMath math="n(n-1)!=n!" />

                            <p className="leading-8">
                                이므로 (나)는
                            </p>

                            <BlockMath math="\boxed{n!}" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                {}_{n-1}P_r+r\cdot{}_{n-1}P_{r-1}
                &=
                \frac{n!}{(n-r)!}\\[4pt]
                &=
                {}_nP_r
                \end{aligned}"
                            />

                            <p className="leading-8">
                                이므로 주어진 등식이 성립합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math="\boxed{\text{(가)}=n,\qquad\text{(나)}=n!}"
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
                            다음 등식을 만족시키는 자연수{" "}
                            <InlineMath math="n" />의 값을 구하여라.
                        </p>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/30 p-4">
                                <BlockMath math="\text{(1)}\quad{}_{n+2}P_3=10\,{}_nP_2" />
                            </div>

                            <div className="rounded-xl bg-black/30 p-4">
                                <BlockMath math="\text{(2)}\quad4\,{}_nP_3=5\,{}_{n-1}P_3" />
                            </div>

                            <div className="rounded-xl bg-black/30 p-4">
                                <BlockMath math="\text{(3)}\quad{}_nP_3+3\,{}_nP_2=5\,{}_{n+1}P_2" />
                            </div>

                            <div className="rounded-xl bg-black/30 p-4">
                                <BlockMath math="\text{(4)}\quad{}_nP_3:{}_{n+2}P_3=5:12" />
                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    (1)
                                </p>

                                <p className="mt-4 leading-8">
                                    순열을 연속한 수의 곱으로 나타내면
                                </p>

                                <BlockMath
                                    math="(n+2)(n+1)n=10n(n-1)"
                                />

                                <p className="leading-8">
                                    <InlineMath math="n" />은 자연수이므로 양변을{" "}
                                    <InlineMath math="n" />으로 나눕니다.
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    (n+2)(n+1)&=10(n-1)\\
                    n^2+3n+2&=10n-10\\
                    n^2-7n+12&=0\\
                    (n-3)(n-4)&=0
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math="n=3\quad\text{또는}\quad n=4" />

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    (2)
                                </p>

                                <BlockMath
                                    math="4n(n-1)(n-2)
                    =
                    5(n-1)(n-2)(n-3)"
                                />

                                <p className="leading-8">
                                    <InlineMath math="{}_{n-1}P_3" />이 정의되려면{" "}
                                    <InlineMath math="n\ge4" />이므로,
                                    양변을{" "}
                                    <InlineMath math="(n-1)(n-2)" />로 나눌 수 있습니다.
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    4n&=5(n-3)\\
                    4n&=5n-15\\
                    n&=15
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math="n=15" />

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    (3)
                                </p>

                                <BlockMath
                                    math="n(n-1)(n-2)
                    +
                    3n(n-1)
                    =
                    5(n+1)n"
                                />

                                <p className="leading-8">
                                    왼쪽에서
                                    <InlineMath math="n(n-1)" />을 묶으면
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    n(n-1)\{(n-2)+3\}
                    &=5n(n+1)\\
                    n(n-1)(n+1)
                    &=5n(n+1)
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    양변을{" "}
                                    <InlineMath math="n(n+1)" />로 나누면
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    n-1&=5\\
                    n&=6
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math="n=6" />

                            </div>

                            <hr className="border-white/10" />

                            {/* (4) */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    (4)
                                </p>

                                <p className="mt-4 leading-8">
                                    비의 식을 분수로 나타내면
                                </p>

                                <BlockMath
                                    math="\frac{{}_nP_3}{{}_{n+2}P_3}
                    =
                    \frac{5}{12}"
                                />

                                <p className="leading-8">
                                    순열을 연속한 수의 곱으로 나타내면
                                </p>

                                <BlockMath
                                    math="\frac{n(n-1)(n-2)}
                    {(n+2)(n+1)n}
                    =
                    \frac{5}{12}"
                                />

                                <p className="leading-8">
                                    양변에서 <InlineMath math="n" />을 약분하고
                                    교차하여 곱합니다.
                                </p>

                                <BlockMath
                                    math="12(n-1)(n-2)
                    =
                    5(n+1)(n+2)"
                                />

                                <BlockMath
                                    math="\begin{aligned}
                    12(n^2-3n+2)
                    &=5(n^2+3n+2)\\
                    12n^2-36n+24
                    &=5n^2+15n+10\\
                    7n^2-51n+14
                    &=0\\
                    (7n-2)(n-7)
                    &=0
                    \end{aligned}"
                                />

                                <BlockMath
                                    math="n=\frac{2}{7}\quad\text{또는}\quad n=7"
                                />

                                <p className="leading-8">
                                    <InlineMath math="n" />은 자연수이므로
                                </p>

                                <BlockMath math="n=7" />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    \text{(1)}\;&n=3,\ 4\\
                    \text{(2)}\;&n=15\\
                    \text{(3)}\;&n=6\\
                    \text{(4)}\;&n=7
                    \end{aligned}"
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
                            회원 수가 <InlineMath math="n" />명인 모임에서 회장, 부회장,
                            총무를 각각 <InlineMath math="1" />명씩 뽑는 경우의 수가{" "}
                            <InlineMath math="210" />일 때, 자연수{" "}
                            <InlineMath math="n" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                회장, 부회장, 총무는 서로 다른 역할이므로
                                세 자리를 차례대로 채웁니다.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <p className="font-semibold text-white">
                                        회장
                                    </p>
                                    <BlockMath math="n" />
                                    <p className="text-gray-300">
                                        가지
                                    </p>
                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <p className="font-semibold text-white">
                                        부회장
                                    </p>
                                    <BlockMath math="n-1" />
                                    <p className="text-gray-300">
                                        가지
                                    </p>
                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <p className="font-semibold text-white">
                                        총무
                                    </p>
                                    <BlockMath math="n-2" />
                                    <p className="text-gray-300">
                                        가지
                                    </p>
                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여
                            </p>

                            <BlockMath math="n(n-1)(n-2)=210" />

                            <p className="leading-8">
                                이 식을 전개하여 삼차방정식으로 만들 필요는 없습니다.
                            </p>

                            <p className="leading-8">
                                왼쪽은 연속한 세 자연수의 곱이므로{" "}
                                <InlineMath math="210" />을 연속한 세 자연수의 곱으로
                                나타냅니다.
                            </p>

                            <BlockMath math="210=5\cdot6\cdot7" />

                            <p className="leading-8">
                                왼쪽의 세 수는 큰 수부터{" "}
                                <InlineMath math="n,\ n-1,\ n-2" />이므로
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                n&=7\\
                n-1&=6\\
                n-2&=5
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="n=7" />

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
                            부등식
                        </p>

                        <BlockMath math="{}_{16}P_{2r+1}\le 4\,{}_{16}P_{2r}" />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 모든 자연수{" "}
                            <InlineMath math="r" />의 값의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 순열은 뽑는 개수가{" "}
                                <InlineMath math="1" />만큼 차이 납니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="{}_{16}P_{2r+1}" />은{" "}
                                <InlineMath math="{}_{16}P_{2r}" />에서 한 자리를 더
                                채우는 경우이므로
                            </p>

                            <BlockMath
                                math="{}_{16}P_{2r+1}
                =
                {}_{16}P_{2r}\{16-2r\}"
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="2r" />개의 자리를 채운 뒤에는{" "}
                                    <InlineMath math="16-2r" />개가 남아 있으므로,
                                    한 자리를 더 채우는 방법이{" "}
                                    <InlineMath math="16-2r" />가지입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                이를 주어진 부등식에 대입하면
                            </p>

                            <BlockMath
                                math="{}_{16}P_{2r}(16-2r)
                \le
                4\,{}_{16}P_{2r}"
                            />

                            <p className="leading-8">
                                <InlineMath math="{}_{16}P_{2r}>0" />이므로 양변을{" "}
                                <InlineMath math="{}_{16}P_{2r}" />로 나누면
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                16-2r&\le4\\
                -2r&\le-12\\
                r&\ge6
                \end{aligned}"
                            />

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                한편 <InlineMath math="{}_{16}P_{2r+1}" />이 정의되려면
                            </p>

                            <BlockMath math="2r+1\le16" />

                            <p className="leading-8">
                                이어야 하므로
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                2r&\le15\\
                r&\le\frac{15}{2}
                \end{aligned}"
                            />

                            <p className="leading-8">
                                <InlineMath math="r" />은 자연수이므로
                            </p>

                            <BlockMath math="r\le7" />

                            <p className="leading-8">
                                따라서 두 조건을 모두 만족하는 자연수{" "}
                                <InlineMath math="r" />은
                            </p>

                            <BlockMath math="r=6,\ 7" />

                            <p className="leading-8">
                                이고, 그 합은
                            </p>

                            <BlockMath math="6+7=13" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="13" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="{}_nP_r
                =
                n(n-1)(n-2)\cdots(n-r+1)"
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="{}_nP_r=\frac{n!}{(n-r)!}=\frac{\text{앞}!}{\text{차}!}"
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="{}_nP_n=n!,\qquad{}_nP_0=1,\qquad0!=1"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="text-center leading-8 text-gray-300">
                            실제 경우의 수를 셀 때는 순열 기호를 먼저 사용하지 않고
                            곱의 법칙으로 직접 계산합니다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.12 이웃하거나 이웃하지 않는 순열
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    여러 대상을 일렬로 나열할 때, 특정 대상들이 서로 이웃하거나
                    이웃하지 않도록 배열하는 경우가 있습니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    이웃하는 경우와 이웃하지 않는 경우는 서로 다른 방법으로 접근합니다.
                </p>

                {/* 핵심 원칙 */}
                <div className="grid gap-5 md:grid-cols-2">

                    {/* 이웃하는 경우 */}
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                        <h3 className="mb-4 text-xl font-bold text-blue-300">
                            이웃하는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이웃해야 하는 대상들을
                            <b className="text-white"> 하나의 묶음</b>으로 처리합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            묶음을 포함한 전체 대상을 자리 바꿈한 뒤,
                            묶음 안의 대상들을 다시 자리 바꿈합니다.
                        </p>

                    </div>

                    {/* 이웃하지 않는 경우 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            이웃하지 않는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이웃하지 않아야 하는 대상의
                            <b className="text-white"> 상대를 먼저 배열</b>합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            그 배열의 앞, 사이, 뒤에 생긴 빈칸에 이웃하지 않아야 하는
                            대상들을 하나씩 넣습니다.
                        </p>

                    </div>

                </div>

                {/* 실전 원칙 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        실전 원칙
                    </h3>

                    <div className="space-y-3 leading-8 text-gray-300">

                        <p>
                            이웃하는 경우에는
                            <b className="text-white"> 묶습니다.</b>
                        </p>

                        <p>
                            이웃하지 않는 경우에는
                            <b className="text-white">
                                {" "}상대를 먼저 배열한 뒤 빈칸에 넣습니다.
                            </b>
                        </p>

                        <p>
                            이웃하지 않는 경우를{" "}
                            <InlineMath math="\text{전체}-\text{이웃하는 경우}" />로
                            계산하지 않고, 항상 빈칸을 이용하여 해결합니다.
                        </p>

                    </div>

                </div>

                {/* 예시 문제 세트 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 문제 세트
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 국어책 <InlineMath math="3" />권,
                            서로 다른 수학책 <InlineMath math="4" />권,
                            서로 다른 영어책 <InlineMath math="5" />권이 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이 책들을 책꽂이에 일렬로 꽂는 경우의 수를 다음 조건에 따라
                            각각 구해 보겠습니다.
                        </p>

                    </div>

                    {/* 1 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            1. 조건 없이 일렬로 꽂는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            모두{" "}
                            <InlineMath math="3+4+5=12" />권이고, 각 책은 서로 다릅니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 서로 다른 <InlineMath math="12" />개의 자리 바꿈입니다.
                        </p>

                        <BlockMath math="12!" />

                    </div>

                    {/* 2 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            2. 국어책 3권이 서로 이웃하도록 꽂는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            국어책 <InlineMath math="3" />권을 하나의 묶음으로 처리합니다.
                        </p>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    전체 자리 바꿈
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    국어책 묶음 <InlineMath math="1" />개와
                                    나머지 책 <InlineMath math="9" />권을 배열합니다.
                                </p>

                                <BlockMath math="10!" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    묶음 안의 자리 바꿈
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    국어책 <InlineMath math="3" />권의 순서를 정합니다.
                                </p>

                                <BlockMath math="3!" />

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="10!\times3!" />

                    </div>

                    {/* 3 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            3. 같은 과목의 책끼리 서로 이웃하도록 꽂는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            국어책, 수학책, 영어책을 각각 하나의 묶음으로 처리합니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="leading-8 text-gray-300">
                                세 과목 묶음의 자리 바꿈
                            </p>

                            <BlockMath math="3!" />

                            <p className="leading-8 text-gray-300">
                                각 묶음 안의 자리 바꿈
                            </p>

                            <BlockMath math="3!\times4!\times5!" />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="3!\times3!\times4!\times5!" />

                    </div>

                    {/* 4 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            4. 수학책 4권이 서로 이웃하지 않도록 꽂는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            수학책이 이웃하지 않아야 하므로 상대인 국어책과 영어책을
                            먼저 배열합니다.
                        </p>

                        <BlockMath math="3+5=8" />

                        <p className="leading-8 text-gray-300">
                            서로 다른 <InlineMath math="8" />권을 배열하는 경우는
                        </p>

                        <BlockMath math="8!" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            배열된 책의 앞, 사이, 뒤에는 모두{" "}
                            <InlineMath math="9" />개의 빈칸이 생깁니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                            <div className="min-w-[720px] text-center text-lg tracking-wider text-gray-300">
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                                <span className="mx-2">책</span>
                                <span className="text-yellow-300">□</span>
                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            서로 다른 수학책 <InlineMath math="4" />권을 서로 다른 빈칸에
                            하나씩 넣습니다.
                        </p>

                        <BlockMath math="9\times8\times7\times6" />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="8!\times9\times8\times7\times6" />

                    </div>

                    {/* 5 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            5. 국어책은 서로 이웃하고, 수학책은 서로 이웃하지 않도록 꽂는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            먼저 국어책 <InlineMath math="3" />권을 하나로 묶습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            수학책은 이웃하지 않아야 하므로, 국어책 묶음과 영어책을
                            상대라고 생각하여 먼저 배열합니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="leading-8 text-gray-300">
                                국어책 묶음 <InlineMath math="1" />개와 영어책
                                <InlineMath math="5" />권의 자리 바꿈
                            </p>

                            <BlockMath math="6!" />

                            <p className="leading-8 text-gray-300">
                                만들어지는 빈칸의 수
                            </p>

                            <BlockMath math="7" />

                            <p className="leading-8 text-gray-300">
                                서로 다른 수학책 <InlineMath math="4" />권을 빈칸에 넣는 방법
                            </p>

                            <BlockMath math="7\times6\times5\times4" />

                            <p className="leading-8 text-gray-300">
                                국어책 묶음 안의 자리 바꿈
                            </p>

                            <BlockMath math="3!" />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="6!\times7\times6\times5\times4\times3!" />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                            <p className="leading-8 text-gray-300">
                                국어책을 하나의 묶음으로 처리했더라도,
                                묶음 안에서 국어책의 순서를 정하는
                                <InlineMath math="3!" />을 반드시 곱해야 합니다.
                            </p>

                        </div>

                    </div>

                    {/* 6 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            6. 영어책 사이에 적어도 한 권의 책이 있도록 꽂는 경우
                        </h4>

                        <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="leading-8 text-gray-300">
                                영어책 사이에 적어도 한 권의 책이 있다는 것은
                                <b className="text-white">
                                    {" "}영어책끼리 서로 이웃하지 않는다는 뜻
                                </b>
                                입니다.
                            </p>
                        </div>

                        <BlockMath
                            math="\text{영어책 사이에 적어도 한 권}
                \quad\Longleftrightarrow\quad
                \text{영어책끼리 서로 이웃하지 않음}"
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 영어책의 상대인 국어책과 수학책을 먼저 배열합니다.
                        </p>

                        <BlockMath math="3+4=7" />

                        <p className="leading-8 text-gray-300">
                            서로 다른 <InlineMath math="7" />권을 배열하는 경우는
                        </p>

                        <BlockMath math="7!" />

                        <p className="leading-8 text-gray-300">
                            가지이고, 배열의 앞, 사이, 뒤에는
                            <InlineMath math="8" />개의 빈칸이 생깁니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            서로 다른 영어책 <InlineMath math="5" />권을 서로 다른 빈칸에
                            하나씩 넣는 방법은
                        </p>

                        <BlockMath math="8\times7\times6\times5\times4" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="7!\times8\times7\times6\times5\times4" />

                    </div>

                </div>

                {/* 조건 비교 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        여섯 조건의 비교
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[760px] border-collapse text-left text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">
                                    <th className="p-3 font-semibold text-white">
                                        조건
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        핵심 판단
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        경우의 수
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        조건 없음
                                    </td>
                                    <td className="p-3">
                                        전체 자리 바꿈
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="12!" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        국어책이 이웃
                                    </td>
                                    <td className="p-3">
                                        국어책 묶기
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="10!\times3!" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        과목별로 이웃
                                    </td>
                                    <td className="p-3">
                                        세 과목을 각각 묶기
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="3!\times3!\times4!\times5!" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        수학책이 이웃하지 않음
                                    </td>
                                    <td className="p-3">
                                        국어·영어 먼저 배열 후 빈칸
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="8!\times9\times8\times7\times6" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        국어책은 이웃, 수학책은 비이웃
                                    </td>
                                    <td className="p-3">
                                        국어 묶기 후 상대 배열, 빈칸
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="6!\times7\times6\times5\times4\times3!" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        영어책 사이에 적어도 한 권
                                    </td>
                                    <td className="p-3">
                                        영어책의 비이웃으로 해석
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="7!\times8\times7\times6\times5\times4" />
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 표현 해석 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        문장을 해석하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 표현들은 모두 같은 유형으로 해석합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <div className="space-y-3 leading-8 text-gray-300">

                            <p>
                                영어책들이 서로 이웃하지 않는다.
                            </p>

                            <p>
                                영어책 사이에 적어도 한 권의 책이 있다.
                            </p>

                            <p>
                                영어책 사이마다 한 권 이상의 다른 책이 있다.
                            </p>

                            <p>
                                영어책들이 서로 붙어 있지 않다.
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{모두 상대를 먼저 배열하고 빈칸에 넣는다}"
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

                        <div>

                            <p className="leading-8 text-gray-300">
                                야구선수 <InlineMath math="n" />명과
                                축구선수 <InlineMath math="3" />명을 일렬로 세울 때,
                                축구선수끼리 서로 이웃하도록 세우는 경우의 수가{" "}
                                <InlineMath math="720" />이다.<br />
                                이때 자연수 <InlineMath math="n" />의 값을 구하여라.
                            </p>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                축구선수 <InlineMath math="3" />명은 서로 이웃해야 하므로
                                하나의 묶음으로 생각합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    묶음을 포함한 전체 자리 바꿈
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    축구선수 묶음 <InlineMath math="1" />개와
                                    야구선수 <InlineMath math="n" />명을 배열하므로
                                </p>

                                <BlockMath math="(n+1)!" />

                                <p className="mt-5 font-semibold text-white">
                                    축구선수 묶음 안의 자리 바꿈
                                </p>

                                <BlockMath math="3!" />

                            </div>

                            <p className="leading-8">
                                따라서 경우의 수는
                            </p>

                            <BlockMath math="(n+1)!\times3!" />

                            <p className="leading-8">
                                이 값이 <InlineMath math="720" />이므로
                            </p>

                            <BlockMath
                                math="\begin{aligned}
            (n+1)!\times3!&=720\\
            (n+1)!\times6&=720\\
            (n+1)!&=120\\
            (n+1)!&=5!
            \end{aligned}"
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math="\begin{aligned}
            n+1&=5\\
            n&=4
            \end{aligned}"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="n=4" />

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
                            서로 다른 문자
                            <InlineMath math="A,\ B,\ C,\ D,\ E,\ F" />를 일렬로 나열할 때,{" "}
                            <InlineMath math="A" />와 <InlineMath math="B" />가 이웃하거나{" "}
                            <InlineMath math="B" />와 <InlineMath math="C" />가 이웃하는
                            경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 조건은 동시에 일어날 수 있으므로 각각의 경우의 수를
                                단순히 더하면 중복되는 경우가 생깁니다.
                            </p>

                            <p className="leading-8">
                                따라서 다음 세 가지를 차례대로 구합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    ① <InlineMath math="A,\ B" />가 이웃하는 경우
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ② <InlineMath math="B,\ C" />가 이웃하는 경우
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ③ 두 조건이 모두 성립하여 중복되는 경우
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* AB 이웃 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    1. <InlineMath math="A" />와 <InlineMath math="B" />가
                                    이웃하는 경우
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A,\ B" />를 하나의 묶음으로 처리하면
                                    이 묶음과 <InlineMath math="C,\ D,\ E,\ F" />를 합하여
                                    모두 <InlineMath math="5" />개의 대상이 됩니다.
                                </p>

                                <p className="leading-8">
                                    전체 자리 바꿈과 묶음 안의 자리 바꿈을 곱하면
                                </p>

                                <BlockMath math="5!\times2!" />

                            </div>

                            <hr className="border-white/10" />

                            {/* BC 이웃 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    2. <InlineMath math="B" />와 <InlineMath math="C" />가
                                    이웃하는 경우
                                </p>

                                <p className="mt-4 leading-8">
                                    같은 방법으로 <InlineMath math="B,\ C" />를 하나의
                                    묶음으로 처리합니다.
                                </p>

                                <BlockMath math="5!\times2!" />

                            </div>

                            <hr className="border-white/10" />

                            {/* 중복 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    3. 두 조건이 모두 성립하는 경우
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="B" />가
                                    이웃하면서 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />도 이웃하려면{" "}
                                    <InlineMath math="B" />가 가운데에 있어야 합니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <BlockMath math="ABC\qquad\text{또는}\qquad CBA" />

                                    <p className="text-center leading-8 text-gray-300">
                                        가능한 묶음 안의 순서는 두 가지입니다.
                                    </p>

                                </div>

                                <p className="mt-5 leading-8">
                                    세 문자를 하나의 묶음으로 처리하면
                                    이 묶음과 <InlineMath math="D,\ E,\ F" />를 합하여
                                    모두 <InlineMath math="4" />개의 대상이 됩니다.
                                </p>

                                <BlockMath math="4!\times2" />

                            </div>

                            <hr className="border-white/10" />

                            {/* 최종 계산 */}
                            <div>

                                <p className="leading-8">
                                    앞의 두 경우를 더하면 두 조건이 모두 성립하는 경우가
                                    두 번 포함됩니다.
                                </p>

                                <p className="leading-8">
                                    따라서 중복된 경우를 한 번 빼면
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    5!\times2!
                    +5!\times2!
                    -4!\times2
                    &=240+240-48\\
                    &=432
                    \end{aligned}"
                                />

                            </div>

                            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    왜 <InlineMath math="4!\times3!" />이 아닌가?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="A,\ B,\ C" />를 하나로 묶더라도
                                    묶음 안의 세 문자를 자유롭게 배열할 수 있는 것은 아닙니다.
                                </p>

                                <BlockMath
                                    math="ABC,\ ACB,\ BAC,\ BCA,\ CAB,\ CBA"
                                />

                                <p className="leading-8 text-gray-300">
                                    두 조건을 모두 만족하려면{" "}
                                    <InlineMath math="B" />가 반드시{" "}
                                    <InlineMath math="A" />와 <InlineMath math="C" />의
                                    가운데에 있어야 합니다.
                                </p>

                                <BlockMath
                                    math="ABC\qquad\text{또는}\qquad CBA"
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 묶음 안의 배열은{" "}
                                    <InlineMath math="3!" />가지가 아니라{" "}
                                    <InlineMath math="2" />가지입니다.
                                </p>

                                <BlockMath math="4!\times2" />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    중요한 해석
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    문제의 ‘또는’은 두 조건 중 하나만 성립한다는 뜻이 아니라,
                                    <b className="text-white">
                                        {" "}두 조건이 모두 성립하는 경우도 포함
                                    </b>
                                    합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 두 조건이 동시에 일어날 수 있다면 중복된 경우를
                                    확인해야 합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="432" />

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
                            같은 모양의 의자 <InlineMath math="6" />개가 일렬로 놓여 있다.
                            서로 다른 <InlineMath math="3" />명의 학생이 동시에 의자에 앉을 때,
                            어느 두 학생도 서로 이웃하지 않게 앉는 방법의 수를 구하여라.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            단, 빈 의자를 사이에 두고 앉는 경우는 이웃하지 않는 것으로
                            생각하며, 의자는 모두 같은 것으로 본다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                학생들이 의자에 앉고 나면 일렬로 놓인 여섯 자리는
                                다음 두 종류로 이루어집니다.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        학생이 앉은 의자
                                    </p>

                                    <BlockMath math="3\text{개}" />

                                    <p className="leading-8 text-gray-300">
                                        학생들이 서로 다르므로 구별됩니다.
                                    </p>

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        사람이 없는 의자
                                    </p>

                                    <BlockMath math="3\text{개}" />

                                    <p className="leading-8 text-gray-300">
                                        의자가 모두 같으므로 서로 구별하지 않습니다.
                                    </p>

                                </div>

                            </div>

                            <p className="leading-8">
                                학생들이 서로 이웃하지 않아야 하므로,
                                상대인 빈 의자 <InlineMath math="3" />개를 먼저 배열합니다.
                            </p>

                            <p className="leading-8">
                                빈 의자는 모두 같으므로 배열하는 방법은{" "}
                                <InlineMath math="1" />가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[540px] text-center text-xl tracking-widest text-gray-300">
                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">빈 의자</span>
                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">빈 의자</span>
                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">빈 의자</span>
                                    <span className="text-yellow-300">□</span>
                                </div>

                            </div>

                            <p className="leading-8">
                                빈 의자 <InlineMath math="3" />개의 앞, 사이, 뒤에는
                                모두 <InlineMath math="4" />개의 빈자리가 생깁니다.
                            </p>

                            <p className="leading-8">
                                학생끼리 이웃하지 않으려면 서로 다른{" "}
                                <InlineMath math="3" />명의 학생을 서로 다른 빈자리에
                                한 명씩 넣어야 합니다.
                            </p>

                            <BlockMath math="4\times3\times2" />

                            <p className="leading-8">
                                따라서 앉는 방법의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                1\times4\times3\times2
                &=24
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    중요한 해석
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    의자는 모두 같은 것으로 보므로 빈 의자{" "}
                                    <InlineMath math="3" />개를 배열하는 방법은{" "}
                                    <InlineMath math="3!" />이 아니라{" "}
                                    <InlineMath math="1" />가지입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    다만 학생 <InlineMath math="3" />명은 서로 다르므로,
                                    빈자리에 넣는 순서는 구별해야 합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="24" />

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
                            같은 모양의 의자 <InlineMath math="8" />개가 일렬로 놓여 있다.
                            서로 다른 배구선수 <InlineMath math="4" />명과 서로 다른 축구선수{" "}
                            <InlineMath math="3" />명이 각각 한 개의 의자에 앉을 때,
                            축구선수끼리 이웃하지 않도록 앉는 경우의 수를 구하여라.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            단, 두 선수 사이에 빈 의자가 있는 경우는 이웃하지 않는 것으로
                            생각하며, 의자는 모두 같은 것으로 본다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                모두 <InlineMath math="7" />명의 선수가{" "}
                                <InlineMath math="8" />개의 의자에 앉으므로
                                빈 의자는 <InlineMath math="1" />개입니다.
                            </p>

                            <p className="leading-8">
                                선수들이 앉고 나면 다음 대상들을 일렬로 배열하는 것과 같습니다.
                            </p>

                            <div className="grid gap-4 sm:grid-cols-3">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        배구선수
                                    </p>

                                    <BlockMath math="4\text{명}" />

                                    <p className="leading-8 text-gray-300">
                                        서로 다른 대상
                                    </p>

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        축구선수
                                    </p>

                                    <BlockMath math="3\text{명}" />

                                    <p className="leading-8 text-gray-300">
                                        서로 다른 대상
                                    </p>

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        빈 의자
                                    </p>

                                    <BlockMath math="1\text{개}" />

                                    <p className="leading-8 text-gray-300">
                                        하나의 빈자리
                                    </p>

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                축구선수끼리 이웃하지 않아야 하므로 상대인
                                배구선수 <InlineMath math="4" />명과 빈 의자{" "}
                                <InlineMath math="1" />개를 먼저 배열합니다.
                            </p>

                            <p className="leading-8">
                                배구선수 네 명은 서로 다르고 빈 의자도 하나의 대상으로
                                생각하므로, 모두 다섯 대상의 자리 바꿈입니다.
                            </p>

                            <BlockMath math="5!" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[680px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">상대</span>

                                    <span className="text-yellow-300">□</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                다섯 대상을 배열하면 앞, 사이, 뒤에 모두{" "}
                                <InlineMath math="6" />개의 빈칸이 생깁니다.
                            </p>

                            <p className="leading-8">
                                축구선수끼리 이웃하지 않으려면 서로 다른 축구선수{" "}
                                <InlineMath math="3" />명을 서로 다른 빈칸에 한 명씩 넣어야
                                합니다.
                            </p>

                            <BlockMath math="6\times5\times4" />

                            <p className="leading-8">
                                따라서 앉는 경우의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                5!\times6\times5\times4
                &=120\times120\\
                &=14400
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    중요한 해석
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    빈 의자도 축구선수 사이를 떨어뜨릴 수 있으므로,
                                    축구선수의 상대를 배열할 때
                                    <b className="text-white">
                                        {" "}배구선수 네 명과 빈 의자 한 개를 함께 배열
                                    </b>
                                    해야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    빈 의자는 하나뿐이므로 별도의 자리 바꿈을 곱하지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="14400" />

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
                            같은 모양의 의자 <InlineMath math="7" />개가 일렬로 놓여 있다.
                            서로 다른 1학년 학생 <InlineMath math="2" />명과 서로 다른
                            2학년 학생 <InlineMath math="3" />명이 앉을 때,
                            1학년 학생끼리는 서로 이웃하고 2학년 학생끼리는 서로
                            이웃하지 않도록 앉는 방법의 수를 구하여라.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            단, 두 학생 사이에 빈 의자가 있으면 이웃하지 않는 것으로
                            생각하며, 의자는 모두 같은 것으로 본다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                학생은 모두 <InlineMath math="5" />명이므로
                                빈 의자는 <InlineMath math="2" />개입니다.
                            </p>

                            <p className="leading-8">
                                먼저 서로 이웃해야 하는 1학년 학생{" "}
                                <InlineMath math="2" />명을 하나의 묶음으로 처리합니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <BlockMath
                                    math="\boxed{\text{1학년 묶음}}"
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    묶음 안의 두 학생은 서로 자리를 바꿀 수 있습니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                2학년 학생끼리는 서로 이웃하지 않아야 하므로,
                                상대인 1학년 묶음과 빈 의자 2개를 먼저 배열합니다.
                            </p>

                            <p className="leading-8">
                                1학년 묶음을 <InlineMath math="1" />,
                                빈 의자를 <InlineMath math="\text{빈}" />으로 나타내면
                                가능한 배열은 다음 3가지입니다.
                            </p>

                            <div className="mt-5 grid gap-4 md:grid-cols-3">

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <BlockMath math="1,\ \text{빈},\ \text{빈}" />
                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <BlockMath math="\text{빈},\ 1,\ \text{빈}" />
                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">
                                    <BlockMath math="\text{빈},\ \text{빈},\ 1" />
                                </div>

                            </div>

                            <p className="mt-5 leading-8">
                                따라서 상대를 먼저 배열하는 방법은{" "}
                                <InlineMath math="3" />가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[560px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-4">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-4">상대</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-4">상대</span>

                                    <span className="text-yellow-300">□</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                세 대상을 배열하면 앞, 사이, 뒤에 모두{" "}
                                <InlineMath math="4" />개의 빈칸이 생깁니다.
                            </p>

                            <p className="leading-8">
                                서로 다른 2학년 학생 <InlineMath math="3" />명을
                                서로 다른 빈칸에 한 명씩 넣는 방법은
                            </p>

                            <BlockMath math="4\times3\times2" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                마지막으로 1학년 묶음 안에서 서로 다른 두 학생의
                                자리를 정하는 방법은
                            </p>

                            <BlockMath math="2!" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                따라서 구하는 경우의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                3
                \times
                4\times3\times2
                \times
                2!
                &=3\times24\times2\\
                &=144
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이 순서
                                </p>

                                <div className="mt-3 space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 1학년 학생은 이웃하므로 하나로 묶습니다.
                                    </p>

                                    <p>
                                        ② 2학년 학생은 이웃하지 않아야 하므로
                                        1학년 묶음과 빈 의자를 먼저 배열합니다.
                                    </p>

                                    <p>
                                        ③ 만들어진 빈칸에 2학년 학생을 한 명씩 넣습니다.
                                    </p>

                                    <p>
                                        ④ 1학년 묶음 안의 자리 바꿈을 곱합니다.
                                    </p>

                                </div>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="144" />

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
                            서로 다른 문자{" "}
                            <InlineMath math="A,\ B,\ C,\ D,\ E,\ F,\ G" />를 일렬로
                            나열할 때, <InlineMath math="A" />와{" "}
                            <InlineMath math="B" />가 모두{" "}
                            <InlineMath math="C" />와 이웃하지 않도록 나열하는 경우의 수를
                            구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="A" />와 <InlineMath math="B" />가{" "}
                                <InlineMath math="C" />와 이웃하지 않아야 하므로,
                                먼저 상대인{" "}
                                <InlineMath math="C,\ D,\ E,\ F,\ G" />를 배열합니다.
                            </p>

                            <BlockMath math="5!" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                배열된 다섯 문자의 앞, 사이, 뒤에는 모두{" "}
                                <InlineMath math="6" />개의 빈칸이 생깁니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[700px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">문자</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">문자</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">문자</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">문자</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">문자</span>

                                    <span className="text-yellow-300">□</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                이 중 <InlineMath math="C" />의 바로 왼쪽과 오른쪽에 있는
                                두 빈칸에 <InlineMath math="A" /> 또는{" "}
                                <InlineMath math="B" />를 넣으면{" "}
                                <InlineMath math="C" />와 이웃하게 됩니다.
                            </p>

                            <p className="leading-8">
                                따라서 사용할 수 있는 빈칸은
                            </p>

                            <BlockMath math="6-2=4" />

                            <p className="leading-8">
                                개입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    빈칸이 양 끝에 있는 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="C" />가 맨 앞이나 맨 뒤에 있더라도{" "}
                                    <InlineMath math="C" />의 양옆에는 두 빈칸이 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그중 하나는 배열의 바깥쪽 빈칸이고, 다른 하나는
                                    다음 문자와의 사이에 있는 빈칸입니다.
                                    어느 곳에 넣어도 <InlineMath math="C" />와 이웃하므로
                                    두 빈칸을 모두 제외합니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="text-lg font-semibold text-white">
                                1. <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />를 서로 다른 빈칸에 넣는 경우
                            </p>

                            <p className="leading-8">
                                <InlineMath math="A" />가 들어갈 수 있는 빈칸은{" "}
                                <InlineMath math="4" />개이고,{" "}
                                <InlineMath math="B" />는 남은{" "}
                                <InlineMath math="3" />개의 빈칸 중 하나에 들어갑니다.
                            </p>

                            <BlockMath math="4\times3=12" />

                            <hr className="border-white/10" />

                            <p className="text-lg font-semibold text-white">
                                2. <InlineMath math="A" />와{" "}
                                <InlineMath math="B" />를 같은 빈칸에 넣는 경우
                            </p>

                            <p className="leading-8">
                                두 문자를 넣을 빈칸을 정하는 방법은{" "}
                                <InlineMath math="4" />가지이고, 같은 빈칸 안에서
                                두 문자의 순서는
                            </p>

                            <BlockMath math="AB\qquad\text{또는}\qquad BA" />

                            <p className="leading-8">
                                의 <InlineMath math="2" />가지입니다.
                            </p>

                            <BlockMath math="4\times2=8" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    같은 빈칸에도 넣을 수 있다
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    문제에서는 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />가 서로 이웃하면 안 된다는 조건은
                                    없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 <InlineMath math="A" />와{" "}
                                    <InlineMath math="B" />는 같은 빈칸에 함께 들어가도 되며,
                                    이 경우에도 둘 다 <InlineMath math="C" />와 이웃하지
                                    않습니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                두 경우는 동시에 일어나지 않으므로 합의 법칙에 의하여{" "}
                                <InlineMath math="A,\ B" />를 넣는 방법은
                            </p>

                            <BlockMath math="12+8=20" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                따라서 구하는 경우의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                5!\times20
                &=120\times20\\
                &=2400
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="2400" />

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
                            서로 다른 남학생 <InlineMath math="4" />명과 서로 다른 여학생{" "}
                            <InlineMath math="2" />명이 일렬로 서려고 한다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            남학생은 키가 작은 순서대로 서고, 여학생은 어느 위치에도 설 수
                            있다고 할 때, <InlineMath math="6" />명이 일렬로 서는 모든
                            방법의 수를 구하여라.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            단, 모든 학생의 키는 서로 다르다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                남학생은 키가 작은 순서대로 서야 하므로 남학생{" "}
                                <InlineMath math="4" />명의 배열은 이미 정해져 있습니다.
                            </p>

                            <BlockMath math="1\text{가지}" />

                            <p className="leading-8">
                                남학생 <InlineMath math="4" />명을 먼저 세우면 앞, 사이,
                                뒤에 모두 <InlineMath math="5" />개의 빈자리가 생깁니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[620px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">남</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">남</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">남</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">남</span>

                                    <span className="text-yellow-300">□</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                첫 번째 여학생은 이 <InlineMath math="5" />개의 빈자리 중
                                하나에 설 수 있습니다.
                            </p>

                            <BlockMath math="5\text{가지}" />

                            <p className="leading-8">
                                첫 번째 여학생을 세우면 일렬로 선 사람이 모두{" "}
                                <InlineMath math="5" />명이 됩니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 번째 여학생이 들어갈 수 있는 앞, 사이, 뒤의 자리는
                                모두 <InlineMath math="6" />개가 됩니다.
                            </p>

                            <BlockMath math="6\text{가지}" />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    왜 두 번째 여학생은 6가지인가?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    첫 번째 여학생이 들어간 자리의 양쪽에도 새로운 빈자리가
                                    생깁니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 두 번째 여학생은 첫 번째 여학생과 떨어져 설 수도
                                    있고, 바로 옆에 설 수도 있습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                곱의 법칙에 의하여 구하는 방법의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                1\times5\times6
                &=30
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    여학생 두 명이 이웃하는 경우와 이웃하지 않는 경우를
                                    따로 나누지 않습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    첫 번째 여학생을 빈자리에 넣고, 새롭게 생긴 빈자리까지
                                    포함하여 두 번째 여학생을 넣으면 모든 경우를 한 번씩
                                    셀 수 있습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="30" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            이웃해야 하는 대상은 하나로 묶어 처리한 뒤,
                            전체 자리 바꿈과 묶음 안의 자리 바꿈을 곱합니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{이웃}
                \quad\Longrightarrow\quad
                \text{묶기}"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            이웃하지 않아야 하는 대상은 상대를 먼저 배열하고,
                            만들어진 빈칸에 하나씩 넣습니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{이웃하지 않음}
                \quad\Longrightarrow\quad
                \text{상대 배열 후 빈칸}"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="text-center leading-8 text-gray-300">
                            ‘사이에 적어도 하나’라는 표현도
                            서로 이웃하지 않는 조건으로 해석합니다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.13 교대로 배열하는 순열
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    서로 다른 두 종류의 대상을 일렬로 나열할 때,
                    같은 종류가 서로 이웃하지 않도록 번갈아 배열하는 경우를
                    알아보겠습니다.
                </p>

                {/* 핵심 아이디어 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        교대로 배열할 수 있는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 종류의 대상을 완전히 교대로 배열할 수 있는 경우는
                        다음 두 가지뿐입니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                두 종류의 개수가 같은 경우
                            </p>

                            <BlockMath math="n,\ n" />

                            <p className="leading-8 text-gray-300">
                                어느 종류가 먼저 오는지에 따라 배열 형태가
                                두 가지입니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                두 종류의 개수가 1개 차이인 경우
                            </p>

                            <BlockMath math="n,\ n-1" />

                            <p className="leading-8 text-gray-300">
                                개수가 더 많은 종류가 양 끝에 와야 하므로
                                배열 형태는 한 가지입니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                        <p className="font-semibold text-red-300">
                            교대로 배열할 수 없는 경우
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            두 종류의 개수 차이가 <InlineMath math="2" /> 이상이면
                            개수가 많은 종류 중 적어도 두 대상이 서로 이웃하게 됩니다.
                        </p>

                        <BlockMath
                            math="\left|\text{두 종류의 개수 차이}\right|\ge2"
                        />

                        <p className="text-center leading-8 text-gray-300">
                            이면 완전히 교대로 배열할 수 없습니다.
                        </p>

                    </div>

                </div>

                {/* 개수가 같은 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 종류의 개수가 같은 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 남학생 <InlineMath math="4" />명과 서로 다른 여학생{" "}
                        <InlineMath math="4" />명을 교대로 배열한다고 하겠습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        가능한 배열 형태는 다음 두 가지입니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="mb-4 font-semibold text-white">
                                남학생부터 시작
                            </p>

                            <div className="overflow-x-auto">

                                <div className="min-w-[500px] text-lg tracking-wider text-gray-300">
                                    <span className="text-blue-300">남</span>
                                    <span className="mx-3 text-pink-300">여</span>
                                    <span className="text-blue-300">남</span>
                                    <span className="mx-3 text-pink-300">여</span>
                                    <span className="text-blue-300">남</span>
                                    <span className="mx-3 text-pink-300">여</span>
                                    <span className="text-blue-300">남</span>
                                    <span className="mx-3 text-pink-300">여</span>
                                </div>

                            </div>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5 text-center">

                            <p className="mb-4 font-semibold text-white">
                                여학생부터 시작
                            </p>

                            <div className="overflow-x-auto">

                                <div className="min-w-[500px] text-lg tracking-wider text-gray-300">
                                    <span className="text-pink-300">여</span>
                                    <span className="mx-3 text-blue-300">남</span>
                                    <span className="text-pink-300">여</span>
                                    <span className="mx-3 text-blue-300">남</span>
                                    <span className="text-pink-300">여</span>
                                    <span className="mx-3 text-blue-300">남</span>
                                    <span className="text-pink-300">여</span>
                                    <span className="mx-3 text-blue-300">남</span>
                                </div>

                            </div>

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        남학생이 들어갈 네 자리에는 서로 다른 남학생{" "}
                        <InlineMath math="4" />명을 자리 바꿈하고,
                        여학생이 들어갈 네 자리에는 서로 다른 여학생{" "}
                        <InlineMath math="4" />명을 자리 바꿈합니다.
                    </p>

                    <BlockMath math="4!\times4!" />

                    <p className="leading-8 text-gray-300">
                        배열 형태가 두 가지이므로
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            \text{경우의 수}
            &=4!\times4!\times2
            \end{aligned}"
                    />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{두 종류가 각각 \(n\)개}
                \quad\Longrightarrow\quad
                n!\times n!\times2"
                        />

                    </div>

                </div>

                {/* 개수가 1개 차이인 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 종류의 개수가 1개 차이인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 남학생 <InlineMath math="4" />명과 서로 다른 여학생{" "}
                        <InlineMath math="3" />명을 교대로 배열한다고 하겠습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        남학생이 한 명 더 많으므로 양 끝에는 반드시 남학생이 와야 합니다.
                    </p>

                    <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                        <div className="min-w-[500px] text-center text-lg tracking-wider text-gray-300">
                            <span className="text-blue-300">남</span>
                            <span className="mx-3 text-pink-300">여</span>
                            <span className="text-blue-300">남</span>
                            <span className="mx-3 text-pink-300">여</span>
                            <span className="text-blue-300">남</span>
                            <span className="mx-3 text-pink-300">여</span>
                            <span className="text-blue-300">남</span>
                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        배열 형태는 한 가지로 정해져 있습니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        남학생이 들어갈 네 자리의 자리 바꿈과
                        여학생이 들어갈 세 자리의 자리 바꿈을 곱하면
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            \text{경우의 수}
            &=4!\times3!
            \end{aligned}"
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <BlockMath
                            math="\text{두 종류가 \(n\)개와 \(n-1\)개}
                \quad\Longrightarrow\quad
                n!\times(n-1)!"
                        />

                    </div>

                </div>

                {/* 예시 비교 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 비교
                    </h3>

                    <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 p-5">

                        <table className="w-full min-w-[700px] border-collapse text-left text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">
                                    <th className="p-3 font-semibold text-white">
                                        대상의 수
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        가능한 배열 형태
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        경우의 수
                                    </th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        남학생 4명, 여학생 4명
                                    </td>
                                    <td className="p-3">
                                        남-여-남-여 또는 여-남-여-남
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="4!\times4!\times2" />
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">
                                        남학생 4명, 여학생 3명
                                    </td>
                                    <td className="p-3">
                                        남-여-남-여-남-여-남
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="4!\times3!" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="p-3">
                                        두 종류의 개수 차이가 2 이상
                                    </td>
                                    <td className="p-3">
                                        교대로 배열할 수 없음
                                    </td>
                                    <td className="p-3">
                                        <InlineMath math="0" />
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        교대로 배열하는 문제의 풀이 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 두 종류의 개수가 같거나 1개 차이인지 확인합니다.
                        </p>

                        <p>
                            ② 가능한 교대 배열의 형태를 먼저 정합니다.
                        </p>

                        <p>
                            ③ 각 종류가 들어갈 자리에서 각각 자리 바꿈합니다.
                        </p>

                        <p>
                            ④ 개수가 같다면 시작하는 종류가 두 가지이므로{" "}
                            <InlineMath math="2" />를 곱합니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        중요한 관점
                    </h3>

                    <p className="leading-8 text-gray-300">
                        교대로 배열하는 문제에서는 먼저 사람을 배열하는 것이 아니라
                        <b className="text-white">
                            {" "}두 종류가 들어갈 자리의 형태부터 결정
                        </b>
                        합니다.
                    </p>

                    <BlockMath
                        math="\text{교대 형태 결정}
            \quad\longrightarrow\quad
            \text{각 종류의 자리 바꿈}"
                    />

                    <p className="leading-8 text-gray-300">
                        교대 형태가 정해진 뒤에는 각 종류의 대상만 해당 자리에
                        자리 바꿈하면 됩니다.
                    </p>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="\mathrm{BELGIUM}" />의{" "}
                            <InlineMath math="7" />개의 문자를 일렬로 나열할 때,
                            자음과 모음이 교대로 오는 경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 자음과 모음을 구분합니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        자음
                                    </p>

                                    <BlockMath math="B,\ L,\ G,\ M" />

                                    <p className="leading-8 text-gray-300">
                                        모두 <InlineMath math="4" />개입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        모음
                                    </p>

                                    <BlockMath math="E,\ I,\ U" />

                                    <p className="leading-8 text-gray-300">
                                        모두 <InlineMath math="3" />개입니다.
                                    </p>

                                </div>

                            </div>

                            <p className="leading-8">
                                자음이 모음보다 <InlineMath math="1" />개 더 많으므로,
                                교대로 배열하려면 자음이 양 끝에 와야 합니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[520px] text-center text-lg tracking-wider text-gray-300">

                                    <span className="text-blue-300">자</span>
                                    <span className="mx-3 text-pink-300">모</span>
                                    <span className="text-blue-300">자</span>
                                    <span className="mx-3 text-pink-300">모</span>
                                    <span className="text-blue-300">자</span>
                                    <span className="mx-3 text-pink-300">모</span>
                                    <span className="text-blue-300">자</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 교대 배열의 형태는 한 가지입니다.
                            </p>

                            <p className="leading-8">
                                자음이 들어갈 네 자리에는 서로 다른 자음{" "}
                                <InlineMath math="4" />개를 자리 바꿈하고,
                                모음이 들어갈 세 자리에는 서로 다른 모음{" "}
                                <InlineMath math="3" />개를 자리 바꿈합니다.
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                \text{경우의 수}
                &=4!\times3!\\
                &=24\times6\\
                &=144
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    자음과 모음의 개수가 같지 않으므로
                                    모음부터 시작하는 배열은 만들 수 없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 이 문제에서는 배열 형태의 수인{" "}
                                    <InlineMath math="2" />를 곱하지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="144" />

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
                            <InlineMath math="1,\ 2,\ 3,\ 4,\ 5,\ 6,\ 7" />에서
                            서로 다른 <InlineMath math="5" />개의 숫자를 택하여
                            다섯 자리 자연수를 만들려고 한다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            각 자리의 숫자로 짝수와 홀수를 교대로 사용하여 만드는
                            방법의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 사용할 수 있는 홀수와 짝수를 구분합니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        홀수
                                    </p>

                                    <BlockMath math="1,\ 3,\ 5,\ 7" />

                                    <p className="leading-8 text-gray-300">
                                        모두 <InlineMath math="4" />개입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        짝수
                                    </p>

                                    <BlockMath math="2,\ 4,\ 6" />

                                    <p className="leading-8 text-gray-300">
                                        모두 <InlineMath math="3" />개입니다.
                                    </p>

                                </div>

                            </div>

                            <p className="leading-8">
                                다섯 자리에 홀수와 짝수가 교대로 오도록 하는 배열 형태는
                                다음 두 가지입니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5 text-center">

                                    <p className="mb-4 font-semibold text-blue-300">
                                        홀수로 시작
                                    </p>

                                    <BlockMath
                                        math="\text{홀}\quad\text{짝}\quad\text{홀}\quad\text{짝}\quad\text{홀}"
                                    />

                                </div>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-center">

                                    <p className="mb-4 font-semibold text-yellow-300">
                                        짝수로 시작
                                    </p>

                                    <BlockMath
                                        math="\text{짝}\quad\text{홀}\quad\text{짝}\quad\text{홀}\quad\text{짝}"
                                    />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* 홀수로 시작 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    1. 홀수로 시작하는 경우
                                </p>

                                <p className="mt-4 leading-8">
                                    홀수가 들어갈 세 자리는 서로 다른 홀수{" "}
                                    <InlineMath math="4" />개 중에서 차례대로 정합니다.
                                </p>

                                <BlockMath math="4\times3\times2" />

                                <p className="leading-8">
                                    짝수가 들어갈 두 자리는 서로 다른 짝수{" "}
                                    <InlineMath math="3" />개 중에서 차례대로 정합니다.
                                </p>

                                <BlockMath math="3\times2" />

                                <p className="leading-8">
                                    따라서 홀수로 시작하는 경우의 수는
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    4\times3\times2\times3\times2
                    &=144
                    \end{aligned}"
                                />

                            </div>

                            <hr className="border-white/10" />

                            {/* 짝수로 시작 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    2. 짝수로 시작하는 경우
                                </p>

                                <p className="mt-4 leading-8">
                                    짝수가 들어갈 세 자리는 서로 다른 짝수{" "}
                                    <InlineMath math="3" />개를 모두 사용합니다.
                                </p>

                                <BlockMath math="3\times2\times1" />

                                <p className="leading-8">
                                    홀수가 들어갈 두 자리는 서로 다른 홀수{" "}
                                    <InlineMath math="4" />개 중에서 차례대로 정합니다.
                                </p>

                                <BlockMath math="4\times3" />

                                <p className="leading-8">
                                    따라서 짝수로 시작하는 경우의 수는
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    3\times2\times1\times4\times3
                    &=72
                    \end{aligned}"
                                />

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                두 배열 형태는 동시에 일어날 수 없으므로
                                합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                144+72
                &=216
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    중요한 점
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    홀수는 <InlineMath math="4" />개이고 짝수는{" "}
                                    <InlineMath math="3" />개이지만, 다섯 자리만 채우므로
                                    두 가지 교대 형태가 모두 가능합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 홀수로 시작하는 경우와 짝수로 시작하는 경우를
                                    각각 구하여 더해야 합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="216" />

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

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    그림과 같이 동근 의자 <InlineMath math="3" />개와
                                    사각 의자 <InlineMath math="3" />개가 교대로 나열되어 있다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    서로 다른 1학년 학생 <InlineMath math="2" />명,
                                    서로 다른 2학년 학생 <InlineMath math="2" />명,
                                    서로 다른 3학년 학생 <InlineMath math="2" />명이
                                    다음 조건을 만족시키도록 이{" "}
                                    <InlineMath math="6" />개의 의자에 모두 앉는 경우의 수를
                                    구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">

                                    <div className="space-y-3 leading-8 text-gray-300">

                                        <p>
                                            (가) 3학년 학생은 동근 의자에만 앉는다.
                                        </p>

                                        <p>
                                            (나) 같은 학년 학생은 서로 이웃하여 앉지 않는다.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.13_3.png"
                                    alt="동근 의자와 사각 의자가 교대로 놓인 그림"
                                    className="w-full max-w-md"
                                />

                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                의자를 왼쪽부터 다음과 같이 나타내겠습니다.
                            </p>

                            <BlockMath
                                math="\text{동}_1\quad
                \text{사}_1\quad
                \text{동}_2\quad
                \text{사}_2\quad
                \text{동}_3\quad
                \text{사}_3"
                            />

                            <p className="leading-8">
                                3학년 학생 두 명은 세 개의 동근 의자 중 두 곳에 앉습니다.
                            </p>

                            <p className="leading-8">
                                어느 동근 의자 하나가 남는지에 따라
                                1학년과 2학년 학생을 교대로 앉히는 방법이 달라지므로
                                경우를 나누겠습니다.
                            </p>

                            <hr className="border-white/10" />

                            {/* 경우 1 */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    경우 1. 첫 번째 동근 의자가 남는 경우
                                </h4>

                                <p className="mt-4 leading-8">
                                    3학년 학생이 두 번째와 세 번째 동근 의자에 앉으면
                                    남은 네 자리는 다음과 같은 형태입니다.
                                </p>

                                <BlockMath
                                    math="\boxed{\phantom{\text{학}}}\;
                    \boxed{\phantom{\text{학}}}
                    \qquad
                    \boxed{\phantom{\text{학}}}
                    \qquad
                    \boxed{\phantom{\text{학}}}"
                                />

                                <p className="leading-8">
                                    앞의 두 자리는 서로 이웃하므로
                                    서로 다른 학년이 앉아야 합니다.
                                </p>

                                <p className="leading-8">
                                    앞의 두 자리에 1학년과 2학년을 배치하는 방법은{" "}
                                    <InlineMath math="2" />가지이고,
                                    남은 두 자리에도 남은 1학년과 2학년을 배치하는 방법이{" "}
                                    <InlineMath math="2" />가지입니다.
                                </p>

                                <BlockMath math="2\times2=4" />

                            </div>

                            <hr className="border-white/10" />

                            {/* 경우 2 */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    경우 2. 두 번째 동근 의자가 남는 경우
                                </h4>

                                <p className="mt-4 leading-8">
                                    남은 자리 중 가운데의 세 자리는 연속하여 붙어 있습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 그 세 자리에는
                                    1학년과 2학년이 반드시 교대로 앉아야 합니다.
                                </p>

                                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                                    <div className="rounded-xl bg-black/40 p-5 text-center">
                                        <BlockMath
                                            math="\text{1학년}\quad
                            \text{2학년}\quad
                            \text{1학년}"
                                        />
                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">
                                        <BlockMath
                                            math="\text{2학년}\quad
                            \text{1학년}\quad
                            \text{2학년}"
                                        />
                                    </div>

                                </div>

                                <p className="mt-5 leading-8">
                                    마지막 남은 자리의 학년도 자동으로 정해지므로
                                    학년을 배치하는 방법은
                                </p>

                                <BlockMath math="2" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* 경우 3 */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    경우 3. 세 번째 동근 의자가 남는 경우
                                </h4>

                                <p className="mt-4 leading-8">
                                    이 경우에도 연속한 세 자리에
                                    1학년과 2학년이 교대로 앉아야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 학년을 배치하는 방법은
                                </p>

                                <BlockMath math="2" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* 학년 배치 합 */}
                            <div>

                                <p className="leading-8">
                                    세 경우는 동시에 일어날 수 없으므로
                                    합의 법칙에 의하여 학년을 배치하는 방법은
                                </p>

                                <BlockMath
                                    math="4+2+2=8"
                                />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            {/* 학생 자리 바꿈 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    각 학년 안의 자리 바꿈
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    학년이 들어갈 자리가 정해진 뒤에는
                                    각 학년의 서로 다른 두 학생이 자리를 바꿀 수 있습니다.
                                </p>

                                <BlockMath
                                    math="2!\times2!\times2!"
                                />

                                <p className="leading-8 text-gray-300">
                                    각 경우에서 서로 다른 두 3학년 학생의 자리 바꿈은{" "}
                                    <InlineMath math="2!" />가지입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 구하는 경우의 수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                8\times2!\times2!\times2!
                &=8\times8\\
                &=64
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    의자의 모양은 교대로 놓여 있지만,
                                    학생들의 학년 수는{" "}
                                    <InlineMath math="2,\ 2,\ 2" />로 세 종류입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 단순히 두 종류를 교대로 배열하는 공식을
                                    바로 적용하지 않고,
                                    3학년 학생이 앉고 남은 의자의 연결 상태에 따라
                                    경우를 나누어야 합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="64" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            두 종류의 개수가 같으면 가능한 교대 배열 형태는 두 가지입니다.
                        </p>

                        <BlockMath
                            math="n!\times n!\times2"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            두 종류의 개수가 1개 차이면 개수가 많은 종류가 양 끝에 와야
                            하므로 교대 배열 형태는 한 가지입니다.
                        </p>

                        <BlockMath
                            math="n!\times(n-1)!"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            두 종류의 개수 차이가 2 이상이면 완전히 교대로 배열할 수
                            없습니다.
                        </p>

                        <BlockMath math="0" />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.14 그 밖의 조건이 있는 순열
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    일렬로 배열하는 문제에서 특정 자리에 조건이 주어지면,
                    조건이 있는 자리를 먼저 처리한 뒤 남은 대상을 남은 자리에 배열합니다.
                </p>

                {/* 핵심 원칙 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        핵심 원칙
                    </h3>

                    <p className="leading-8 text-gray-300">
                        맨 앞, 맨 뒤, 양 끝처럼 특정한 자리에 조건이 있으면
                        <b className="text-white"> 그 자리를 먼저 채웁니다.</b>
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        특정 자리를 모두 처리한 뒤에는 남은 대상을 남은 자리에
                        자리 바꿈합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{특정 자리 먼저}
                    \quad\longrightarrow\quad
                    \text{남은 대상의 자리 바꿈}
                `}
                        />

                    </div>

                </div>

                {/* 예시 문제 세트 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 문제 세트
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 남학생 <InlineMath math="4" />명과 서로 다른 여학생{" "}
                            <InlineMath math="3" />명이 일렬로 설 때, 다음 각 경우의 수를
                            구해 보겠습니다.
                        </p>

                    </div>

                    {/* 예시 1 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            1. 맨 앞에는 여학생, 맨 뒤에는 남학생이 서는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            맨 앞과 맨 뒤에 조건이 있으므로 두 자리를 먼저 채웁니다.
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    맨 앞
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    여학생 <InlineMath math="3" />명 중 한 명
                                </p>

                                <BlockMath math="3" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    맨 뒤
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    남학생 <InlineMath math="4" />명 중 한 명
                                </p>

                                <BlockMath math="4" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    가운데 다섯 자리
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    남은 <InlineMath math="5" />명의 자리 바꿈
                                </p>

                                <BlockMath math="5!" />

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 곱의 법칙에 의하여
                        </p>

                        <BlockMath math="3\times4\times5!" />

                    </div>

                    {/* 예시 2 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            2. 양 끝에 여학생이 서는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            양 끝의 두 자리에 여학생을 먼저 배치합니다.
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    왼쪽 끝
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8 text-gray-300">
                                    가지
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    오른쪽 끝
                                </p>

                                <BlockMath math="2" />

                                <p className="leading-8 text-gray-300">
                                    가지
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    남은 다섯 자리
                                </p>

                                <BlockMath math="5!" />

                                <p className="leading-8 text-gray-300">
                                    가지
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="3\times2\times5!" />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="leading-8 text-gray-300">
                                양 끝은 서로 다른 자리이므로 여학생 두 명을 고르기만 하는
                                것이 아니라, 왼쪽과 오른쪽에 설 학생을 구분해야 합니다.
                            </p>

                        </div>

                    </div>

                    {/* 예시 3 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            3. 양 끝에 적어도 한 명의 여학생이 서는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            양 끝의 성별은 다음 네 가지 형태로 나눌 수 있습니다.
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">

                            <div className="rounded-xl bg-black/40 p-4 text-center">
                                <BlockMath math="\text{남}\;-\;\text{남}" />
                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">
                                <BlockMath math="\text{남}\;-\;\text{여}" />
                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">
                                <BlockMath math="\text{여}\;-\;\text{남}" />
                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">
                                <BlockMath math="\text{여}\;-\;\text{여}" />
                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            양 끝에 적어도 한 명의 여학생이 있다는 것은
                            양 끝이 모두 남학생인 경우가 아니라는 뜻입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{양 끝에 적어도 한 명의 여자}
                    \quad\Longleftrightarrow\quad
                    \text{양 끝이 모두 남자는 아님}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            전체 배열의 수에서 양 끝이 모두 남학생인 경우를 뺍니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="leading-8 text-gray-300">
                                전체 배열
                            </p>

                            <BlockMath math="7!" />

                            <p className="leading-8 text-gray-300">
                                양 끝이 모두 남학생인 경우
                            </p>

                            <BlockMath math="4\times3\times5!" />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="7!-4\times3\times5!" />

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-blue-300">
                                경우를 나누어 계산하기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    가능한 경우를 각각 계산하여 더할 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{남}-\text{여}
                            &:4\times3\times5!\\
                            \text{여}-\text{남}
                            &:3\times4\times5!\\
                            \text{여}-\text{여}
                            &:3\times2\times5!
                            \end{aligned}
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            4\times3\times5!
                            +3\times4\times5!
                            +3\times2\times5!
                        `}
                                />

                                <p className="leading-8">
                                    이 값은{" "}
                                    <InlineMath math="7!-4\times3\times5!" />과 같습니다.
                                </p>

                            </div>

                        </details>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                ‘적어도 하나’의 해석
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ‘적어도 하나’는 가능한 경우를 모두 나누어 더할 수도 있지만,
                                반대되는 한 가지 경우가 간단하면 전체에서 그 경우를 빼는
                                것이 편리합니다.
                            </p>

                        </div>

                    </div>

                    {/* 예시 4 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            4. 두 여학생 사이에 정확히 두 명의 남학생이 서는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            조건을 만족하는 네 자리를 하나의 묶음으로 만듭니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <div className="min-w-[480px] text-center text-xl tracking-wider">

                                <span className="rounded-lg bg-pink-500/20 px-4 py-3 text-pink-300">
                                    여
                                </span>

                                <span className="mx-3 rounded-lg bg-blue-500/20 px-4 py-3 text-blue-300">
                                    남
                                </span>

                                <span className="rounded-lg bg-blue-500/20 px-4 py-3 text-blue-300">
                                    남
                                </span>

                                <span className="ml-3 rounded-lg bg-pink-500/20 px-4 py-3 text-pink-300">
                                    여
                                </span>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            묶음의 양 끝에 설 여학생을 정하는 방법은
                        </p>

                        <BlockMath math="3\times2" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            묶음의 가운데 두 자리에 설 남학생을 정하는 방법은
                        </p>

                        <BlockMath math="4\times3" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            네 명의 묶음 하나와 남은 남학생 두 명, 남은 여학생 한 명을
                            합하면 모두 <InlineMath math="4" />개의 대상입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{\text{여남남여}},
                    \quad \text{남},
                    \quad \text{남},
                    \quad \text{여}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 네 대상을 자리 바꿈하는 방법은
                        </p>

                        <BlockMath math="4!" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="3\times2\times4\times3\times4!" />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                조건을 정확하게 읽기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ‘두 여학생 사이에 두 명의 남학생이 선다’는 조건은
                                두 여학생 사이에
                                <b className="text-white"> 정확히 두 명</b>의 남학생이
                                연속하여 선다는 뜻으로 해석합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 네 가지 조건 비교 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        조건에 따른 풀이 비교
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[760px] border-collapse text-left text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">

                                    <th className="p-3 font-semibold text-white">
                                        조건
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        먼저 처리할 것
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        경우의 수
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        맨 앞 여자, 맨 뒤 남자
                                    </td>

                                    <td className="p-3">
                                        맨 앞과 맨 뒤
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math="3\times4\times5!" />
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        양 끝에 여자
                                    </td>

                                    <td className="p-3">
                                        양 끝의 두 자리
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math="3\times2\times5!" />
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        양 끝에 적어도 한 명의 여자
                                    </td>

                                    <td className="p-3">
                                        전체에서 양 끝이 모두 남자인 경우 제외
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math="7!-4\times3\times5!" />
                                    </td>

                                </tr>

                                <tr>

                                    <td className="p-3">
                                        두 여자 사이에 정확히 두 남자
                                    </td>

                                    <td className="p-3">
                                        여-남-남-여 묶음
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math="3\times2\times4\times3\times4!" />
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        조건이 있는 순열의 풀이 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 맨 앞, 맨 뒤, 양 끝과 같이 특정한 자리의 조건을 찾습니다.
                        </p>

                        <p>
                            ② 조건이 있는 자리를 먼저 채웁니다.
                        </p>

                        <p>
                            ③ 남은 대상을 남은 자리에 자리 바꿈합니다.
                        </p>

                        <p>
                            ④ ‘적어도 하나’가 있으면 반대되는 경우를 전체에서 빼는 방법도
                            확인합니다.
                        </p>

                        <p>
                            ⑤ 여러 자리가 하나의 고정된 형태를 이루면 하나의 묶음으로
                            처리합니다.
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
                            <InlineMath math="\mathrm{triangle}" />의{" "}
                            <InlineMath math="8" />개의 문자를 일렬로 나열할 때,
                            다음을 구하여라.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>(1) <InlineMath math="t" />가 맨 처음에, <InlineMath math="l" />이 맨 마지막에 오는 경우의 수</p>

                            <p>(2) <InlineMath math="t" />와 <InlineMath math="a" /> 사이에 정확히 <InlineMath math="2" />개의 문자가 오는 경우의 수</p>

                            <p>(3) 적어도 한쪽 끝에 자음이 오는 경우의 수</p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (1) */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (1)
                                </h4>

                                <p className="mt-3 leading-8">
                                    맨 처음과 맨 마지막의 조건을 먼저 처리합니다.
                                </p>

                                <BlockMath
                                    math="6!"
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4 mt-4">

                                    <BlockMath
                                        math="720"
                                    />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}

                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (2)
                                </h4>

                                <p className="mt-3 leading-8">
                                    두 문자 사이에 정확히 두 글자가 있어야 하므로
                                    다음과 같은 네 칸짜리 묶음을 만듭니다.
                                </p>

                                <BlockMath
                                    math="\boxed{t\;\square\;\square\;a}"
                                />

                                <p className="leading-8">
                                    또는
                                </p>

                                <BlockMath
                                    math="\boxed{a\;\square\;\square\;t}"
                                />

                                <p className="leading-8">
                                    두 가지입니다.
                                </p>

                                <p className="leading-8">
                                    묶음 안의 두 칸에는 남은{" "}
                                    <InlineMath math="6" />개의 문자 중
                                    두 문자를 차례대로 넣습니다.
                                </p>

                                <BlockMath
                                    math="6\times5"
                                />

                                <p className="leading-8">
                                    묶음 하나와 나머지 네 문자를 배열합니다.
                                </p>

                                <BlockMath
                                    math="5!"
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math="2\times6\times5\times5!=7200"
                                />

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}

                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (3)
                                </h4>

                                <p className="mt-3 leading-8">
                                    자음은
                                </p>

                                <BlockMath
                                    math="t,\ r,\ n,\ g,\ l"
                                />

                                <p className="leading-8">
                                    모두{" "}
                                    <InlineMath math="5" />개,
                                    모음은{" "}
                                    <InlineMath math="a,\ i,\ e" />
                                    의{" "}
                                    <InlineMath math="3" />개입니다.
                                </p>

                                <p className="leading-8">
                                    적어도 한쪽 끝에 자음이 오는 경우는
                                    전체에서 양 끝이 모두 모음인 경우를 빼면 됩니다.
                                </p>

                                <BlockMath
                                    math="8!-3\times2\times6!"
                                />

                                <BlockMath
                                    math="40320-4320=36000"
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4 mt-4">

                                    <BlockMath
                                        math="36000"
                                    />

                                </div>

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
                            서로 다른 1학년 학생 <InlineMath math="2" />명과 서로 다른
                            2학년 학생 <InlineMath math="5" />명이 있다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 <InlineMath math="7" />명의 학생이 일렬로 나열된{" "}
                            <InlineMath math="7" />개의 의자에 다음 조건을 만족시키도록
                            모두 앉는 경우의 수를 구하여라.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    (가) 1학년 학생끼리는 서로 이웃하지 않는다.
                                </p>

                                <p>
                                    (나) 양 끝에 있는 의자에는 모두 2학년 학생이 앉는다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                1학년 학생끼리 이웃하지 않아야 하므로 상대인
                                2학년 학생 <InlineMath math="5" />명을 먼저 배열합니다.
                            </p>

                            <BlockMath math="5!" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[620px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-blue-300">2</span>
                                    <span className="mx-4 text-yellow-300">□</span>

                                    <span className="text-blue-300">2</span>
                                    <span className="mx-4 text-yellow-300">□</span>

                                    <span className="text-blue-300">2</span>
                                    <span className="mx-4 text-yellow-300">□</span>

                                    <span className="text-blue-300">2</span>
                                    <span className="mx-4 text-yellow-300">□</span>

                                    <span className="text-blue-300">2</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                양 끝에는 반드시 2학년 학생이 앉아야 하므로,
                                1학년 학생은 2학년 학생 사이에 생긴{" "}
                                <InlineMath math="4" />개의 빈칸에만 들어갈 수 있습니다.
                            </p>

                            <p className="leading-8">
                                서로 다른 첫 번째 1학년 학생이 들어갈 빈칸은{" "}
                                <InlineMath math="4" />가지이고,
                                두 번째 1학년 학생은 남은{" "}
                                <InlineMath math="3" />개의 빈칸 중 하나에 들어갑니다.
                            </p>

                            <BlockMath math="4\times3" />

                            <p className="leading-8">
                                서로 다른 빈칸에 한 명씩 넣으므로
                                두 1학년 학생은 서로 이웃하지 않습니다.
                            </p>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여 구하는 경우의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    5!\times4\times3
                    &=120\times12\\
                    &=1440
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    양 끝의 조건을 함께 처리하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    2학년 학생을 먼저 배열하면 전체에는 앞과 뒤까지{" "}
                                    <InlineMath math="6" />개의 빈칸이 생깁니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 양 끝에는 2학년 학생이 앉아야 하므로
                                    양쪽 끝의 빈칸은 사용할 수 없습니다.
                                </p>

                                <BlockMath math="6-2=4" />

                                <p className="leading-8 text-gray-300">
                                    따라서 1학년 학생이 들어갈 수 있는 곳은
                                    2학년 학생 사이의 빈칸 <InlineMath math="4" />개뿐입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="1440" />

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
                            <InlineMath math="\mathrm{G,\ R,\ E,\ A,\ T}" />의{" "}
                            <InlineMath math="5" />개의 문자를 다음 조건을 만족하도록
                            일렬로 나열하려고 한다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            각각의 경우의 수를 순서대로{" "}
                            <InlineMath math="a,\ b,\ c" />라 할 때,{" "}
                            <InlineMath math="a+b+c" />의 값을 구하여라.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/30 p-5">

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    (가) 모든 모음 사이에 1개의 자음이 들어가게 한 줄로 나열하는 경우
                                </p>

                                <p>
                                    (나) 양 끝에 G, R이 오도록 5개의 문자를 한 줄로 나열하는 경우
                                </p>

                                <p>
                                    (다) R, E가 서로 이웃하지 않도록 5개의 문자를 한 줄로 나열하는 경우
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (가) */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (가)
                                </h4>

                                <p className="mt-3 leading-8">
                                    모음은{" "}
                                    <InlineMath math="E,\ A" />,
                                    자음은{" "}
                                    <InlineMath math="G,\ R,\ T" />입니다.
                                </p>

                                <p className="leading-8">
                                    두 모음 사이에 정확히 한 개의 자음이 들어가야 하므로
                                    두 모음과 자음 한 개로 다음과 같은 묶음을 만듭니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <BlockMath
                                        math={String.raw`
                \boxed{\text{모음}\quad\text{자음}\quad\text{모음}}
            `}
                                    />

                                </div>

                                <p className="mt-5 leading-8">
                                    묶음의 양 끝에 놓일 두 모음의 순서를 정하는 방법은
                                </p>

                                <BlockMath math="2" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    두 모음 사이에 들어갈 자음을{" "}
                                    <InlineMath math="G,\ R,\ T" /> 중에서 정하는 방법은
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    만들어진 묶음 하나와 남은 자음 두 개를 합하면
                                    모두 세 개의 대상이므로 자리 바꿈은
                                </p>

                                <BlockMath math="3!" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
            \begin{aligned}
            a
            &=2\times3\times3!\\
            &=36
            \end{aligned}
        `}
                                />

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-semibold text-yellow-300">
                                        중요한 해석
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        두 모음과 그 사이의 자음만 연속하면 됩니다.
                                        이 묶음은 전체 배열의 맨 앞, 가운데, 맨 뒤 어디에나 올 수 있습니다.
                                    </p>

                                    <BlockMath math="\mathrm{GRETA}" />

                                    <p className="text-center leading-8 text-gray-300">
                                        와 같은 배열도 조건을 만족합니다.
                                    </p>

                                </div>

                            </div>
                            <hr className="border-white/10" />

                            {/* (나) */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (나)
                                </h4>

                                <p className="mt-3 leading-8">
                                    양 끝에{" "}
                                    <InlineMath math="G,\ R" />이 오므로
                                    양 끝을 먼저 처리합니다.
                                </p>

                                <p className="leading-8">
                                    양 끝의 순서는{" "}
                                    <InlineMath math="2!" />가지,
                                    가운데 세 자리는{" "}
                                    <InlineMath math="3!" />가지입니다.
                                </p>

                                <BlockMath
                                    math="b=2!\times3!=12"
                                />

                            </div>

                            <hr className="border-white/10" />

                            {/* (다) */}
                            <div>

                                <h4 className="text-lg font-bold text-white">
                                    (다)
                                </h4>

                                <p className="mt-3 leading-8">
                                    먼저{" "}
                                    <InlineMath math="G,\ A,\ T" />
                                    를 배열합니다.
                                </p>

                                <BlockMath
                                    math="3!"
                                />

                                <p className="leading-8">
                                    빈칸은{" "}
                                    <InlineMath math="4" />개가 생깁니다.
                                </p>

                                <BlockMath
                                    math="\square\ G\ \square\ A\ \square\ T\ \square"
                                />

                                <p className="leading-8">
                                    서로 다른 두 빈칸에{" "}
                                    <InlineMath math="R,\ E" />를 넣으면
                                    두 문자는 서로 이웃하지 않습니다.
                                </p>

                                <BlockMath
                                    math="4\times3"
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math="c=3!\times4\times3=72"
                                />

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
        \begin{aligned}
        a+b+c
        &=36+12+72\\
        &=120
        \end{aligned}
    `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="120" />

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
                            서로 다른 한 자리 자연수{" "}
                            <InlineMath math="6" />개를 일렬로 나열할 때,
                            적어도 한쪽 끝이 홀수가 오는 경우의 수는{" "}
                            <InlineMath math="432" />이다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이때 홀수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                홀수의 개수를{" "}
                                <InlineMath math="x" />,
                                짝수의 개수를{" "}
                                <InlineMath math="6-x" />
                                라고 하겠습니다.
                            </p>

                            <p className="leading-8">
                                전체 배열의 수는
                            </p>

                            <BlockMath math="6!=720" />

                            <p className="leading-8">
                                적어도 한쪽 끝이 홀수인 경우는
                                전체에서 양 끝이 모두 짝수인 경우를 빼면 됩니다.
                            </p>

                            <BlockMath
                                math="720-(6-x)(5-x)4!=432"
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                (6-x)(5-x)\times24
                &=288\\
                (6-x)(5-x)
                &=12
                \end{aligned}"
                            />

                            <p className="leading-8">
                                자연수 조건을 만족하는 해는
                            </p>

                            <BlockMath
                                math="6-x=4,\qquad5-x=3"
                            />

                            <BlockMath
                                math="x=2"
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    확인
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    홀수가 2개이면 짝수는 4개입니다.
                                </p>

                                <BlockMath
                                    math="720-4\times3\times24=432"
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    문제의 조건과 일치합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 홀수의 개수는
                                </p>

                                <BlockMath math="2" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{특정 자리 조건}
                    \quad\Longrightarrow\quad
                    \text{특정 자리부터 처리}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \text{적어도 하나}
                    \quad\Longrightarrow\quad
                    \text{경우를 나누거나 반대 경우를 뺀다}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \text{고정된 여러 자리의 형태}
                    \quad\Longrightarrow\quad
                    \text{하나의 묶음으로 처리}
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.15 사전식 배열과 자연수 만들기
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    서로 다른 숫자를 이용하여 만든 자연수를 작은 수부터 나열하는 방법과
                    알파벳을 순서대로 나열하는 방법은 같은 원리를 이용합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    사전식 배열의 순서를 구하는 방법과 앞에서 학습한 배수 판정법을
                    이용하여 조건을 만족하는 자연수를 만드는 방법을 알아보겠습니다.
                </p>

                {/* 사전식 배열의 뜻 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        사전식 배열
                    </h3>

                    <p className="leading-8 text-gray-300">
                        여러 배열을 앞에서부터 비교하여, 처음으로 달라지는 자리의 값이
                        작은 배열부터 나열하는 것을
                        <b className="text-white"> 사전식 배열</b>이라고 합니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                숫자의 배열
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                숫자는 작은 수부터 비교합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        12345<12354<12435<\cdots
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                알파벳의 배열
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                알파벳은 알파벳 순서대로 비교합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        A<E<G<R<T
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{숫자를 작은 수부터 배열}
                    \quad\Longleftrightarrow\quad
                    \text{알파벳을 사전식으로 배열}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            숫자와 알파벳의 배열은 대상만 다를 뿐 풀이 원리는 같습니다.
                        </p>

                    </div>

                </div>

                {/* 두 가지 문제 유형 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        사전식 배열의 두 가지 문제
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                몇 번째 배열이 무엇인가?
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                앞자리부터 범위를 좁혀 가며 해당 배열을 찾습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{100번째 배열은 무엇인가?}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                주어진 배열이 몇 번째인가?
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                주어진 배열보다 앞에 있는 배열의 개수를 셉니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{주어진 배열은 몇 번째인가?}
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            앞의 몇 자리가 정해지면 나머지 자리의 배열은
                            팩토리얼만큼 하나의 묶음을 이룹니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{앞자리 하나가 정해짐}
                    \quad\Longrightarrow\quad
                    (\text{남은 자리 수})!\text{개씩 묶음}
                `}
                        />

                    </div>

                </div>

                {/* 예시 문제 세트 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 문제 세트
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            숫자의 배열과 알파벳의 배열을 대칭적으로 비교해 보겠습니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[680px] border-collapse text-left text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">

                                        <th className="p-3 font-semibold text-white">
                                            숫자의 배열
                                        </th>

                                        <th className="p-3 font-semibold text-white">
                                            알파벳의 배열
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">

                                        <td className="p-3">
                                            100번째 자연수는?
                                        </td>

                                        <td className="p-3">
                                            100번째 단어는?
                                        </td>

                                    </tr>

                                    <tr>

                                        <td className="p-3">
                                            <InlineMath math="32415" />는 몇 번째인가?
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="\mathrm{GERAT}" />는 몇 번째인가?
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    {/* 예시 1 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            1. 100번째 자연수
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="1,\ 2,\ 3,\ 4,\ 5" />를 한 번씩 사용하여
                            만든 다섯 자리 자연수를 작은 수부터 나열할 때,
                            100번째 자연수를 구해 보겠습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            첫째 자리가 정해지면 나머지 네 자리를 배열하는 방법은
                        </p>

                        <BlockMath math="4!=24" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                            <table className="w-full min-w-[500px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">

                                        <th className="p-3 font-semibold text-white">
                                            첫째 자리
                                        </th>

                                        <th className="p-3 font-semibold text-white">
                                            순서
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">1</td>
                                        <td className="p-3">1~24</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">2</td>
                                        <td className="p-3">25~48</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">3</td>
                                        <td className="p-3">49~72</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">4</td>
                                        <td className="p-3">73~96</td>
                                    </tr>

                                    <tr>
                                        <td className="p-3 font-semibold text-yellow-300">
                                            5
                                        </td>
                                        <td className="p-3 font-semibold text-yellow-300">
                                            97~120
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            100번째 수는 첫째 자리가{" "}
                            <InlineMath math="5" />인 묶음에 있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            남은 숫자는{" "}
                            <InlineMath math="1,\ 2,\ 3,\ 4" />이고,
                            둘째 자리가 하나 정해지면{" "}
                            <InlineMath math="3!=6" />개씩 묶입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{array}{c|c}
                    \text{둘째 자리}&\text{전체 순서}\\ \hline
                    1&97\sim102\\
                    2&103\sim108\\
                    3&109\sim114\\
                    4&115\sim120
                    \end{array}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 둘째 자리는 <InlineMath math="1" />입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            남은 숫자{" "}
                            <InlineMath math="2,\ 3,\ 4" />에서 셋째 자리가 정해지면{" "}
                            <InlineMath math="2!=2" />개씩 묶입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{array}{c|c}
                    \text{셋째 자리}&\text{전체 순서}\\ \hline
                    2&97\sim98\\
                    3&99\sim100\\
                    4&101\sim102
                    \end{array}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 셋째 자리는 <InlineMath math="3" />입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            남은 숫자가 <InlineMath math="2,\ 4" />이므로
                            99번째는 <InlineMath math="51324" />,
                            100번째는 <InlineMath math="51342" />입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                            <p className="font-bold text-green-300">
                                따라서 100번째 자연수는
                            </p>

                            <BlockMath math="51342" />

                        </div>

                    </div>

                    {/* 예시 2 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            2. <InlineMath math="32415" />는 몇 번째인가?
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="32415" />보다 앞에 있는 자연수의 개수를
                            앞자리부터 차례대로 셉니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                첫째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                첫째 자리의 <InlineMath math="3" />보다 작은 숫자는{" "}
                                <InlineMath math="1,\ 2" />의 두 개입니다.
                            </p>

                            <BlockMath math="2\times4!=48" />

                            <p className="mt-5 font-semibold text-white">
                                둘째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 숫자{" "}
                                <InlineMath math="1,\ 2,\ 4,\ 5" /> 중{" "}
                                <InlineMath math="2" />보다 작은 숫자는{" "}
                                <InlineMath math="1" /> 하나입니다.
                            </p>

                            <BlockMath math="1\times3!=6" />

                            <p className="mt-5 font-semibold text-white">
                                셋째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 숫자{" "}
                                <InlineMath math="1,\ 4,\ 5" /> 중{" "}
                                <InlineMath math="4" />보다 작은 숫자는{" "}
                                <InlineMath math="1" /> 하나입니다.
                            </p>

                            <BlockMath math="1\times2!=2" />

                            <p className="mt-5 font-semibold text-white">
                                넷째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 숫자{" "}
                                <InlineMath math="1,\ 5" /> 중{" "}
                                <InlineMath math="1" />보다 작은 숫자는 없습니다.
                            </p>

                            <BlockMath math="0" />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 <InlineMath math="32415" />보다 앞에 있는 자연수는
                        </p>

                        <BlockMath
                            math={String.raw`
                    48+6+2=56
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            개입니다. 자기 자신까지 포함하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    56+1=57
                `}
                        />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                            <BlockMath
                                math={String.raw`
                        32415\text{는 }57\text{번째}
                    `}
                            />

                        </div>

                    </div>

                    {/* 예시 3 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            3. 100번째 단어
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="\mathrm{G,\ R,\ E,\ A,\ T}" />를 한 번씩
                            사용하여 만든 배열을 사전식으로 나열해 보겠습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            먼저 주어진 알파벳을 알파벳 순서대로 정리합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A<E<G<R<T
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            첫 글자가 정해지면 나머지 네 글자를 배열하는 방법은{" "}
                            <InlineMath math="4!=24" />가지입니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                            <table className="w-full min-w-[500px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">

                                        <th className="p-3 font-semibold text-white">
                                            첫 글자
                                        </th>

                                        <th className="p-3 font-semibold text-white">
                                            순서
                                        </th>

                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">A</td>
                                        <td className="p-3">1~24</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">E</td>
                                        <td className="p-3">25~48</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">G</td>
                                        <td className="p-3">49~72</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">R</td>
                                        <td className="p-3">73~96</td>
                                    </tr>

                                    <tr>
                                        <td className="p-3 font-semibold text-yellow-300">
                                            T
                                        </td>
                                        <td className="p-3 font-semibold text-yellow-300">
                                            97~120
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            숫자의 100번째 배열을 구할 때와 같은 방법으로 범위를
                            차례대로 좁히면
                        </p>

                        <BlockMath
                            math={String.raw`
                    T\rightarrow A\rightarrow G\rightarrow R\rightarrow E
                `}
                        />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                            <p className="font-bold text-green-300">
                                따라서 100번째 단어는
                            </p>

                            <BlockMath math="\mathrm{TAGRE}" />

                        </div>

                    </div>

                    {/* 예시 4 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            4. <InlineMath math="\mathrm{GERAT}" />는 몇 번째인가?
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            알파벳 순서는
                        </p>

                        <BlockMath
                            math={String.raw`
                    A<E<G<R<T
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                첫째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="G" />보다 앞에 오는 글자는{" "}
                                <InlineMath math="A,\ E" />의 두 개입니다.
                            </p>

                            <BlockMath math="2\times4!=48" />

                            <p className="mt-5 font-semibold text-white">
                                둘째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 글자{" "}
                                <InlineMath math="\mathrm{A,\ E,\ R,\ T}" /> 중{" "}
                                <InlineMath math="E" />보다 앞에 오는 글자는{" "}
                                <InlineMath math="A" /> 하나입니다.
                            </p>

                            <BlockMath math="1\times3!=6" />

                            <p className="mt-5 font-semibold text-white">
                                셋째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 글자
                                <InlineMath math="\mathrm{A,\ R,\ T}" /> 중{" "}
                                <InlineMath math="R" />보다 앞에 오는 글자는{" "}
                                <InlineMath math="A" /> 하나입니다.
                            </p>

                            <BlockMath math="1\times2!=2" />

                            <p className="mt-5 font-semibold text-white">
                                넷째 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남은 글자{" "}
                                <InlineMath math="\mathrm{A,\ T}" /> 중{" "}
                                <InlineMath math="A" />보다 앞에 오는 글자는 없습니다.
                            </p>

                            <BlockMath math="0" />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 앞에 있는 단어는
                        </p>

                        <BlockMath math="48+6+2=56" />

                        <p className="leading-8 text-gray-300">
                            개이므로
                        </p>

                        <BlockMath math="56+1=57" />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                            <BlockMath
                                math={String.raw`
                        \mathrm{GERAT}\text{는 }57\text{번째}
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 사전식 배열 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        사전식 배열의 풀이 방법
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 주어진 숫자나 알파벳을 작은 순서대로 정리합니다.
                        </p>

                        <p>
                            ② 앞자리 하나가 정해질 때마다 남은 자리의 배열이
                            몇 개씩 묶이는지 확인합니다.
                        </p>

                        <p>
                            ③ 몇 번째 배열을 찾을 때는 해당 번호가 들어 있는 묶음을
                            앞자리부터 찾습니다.
                        </p>

                        <p>
                            ④ 주어진 배열의 순서를 찾을 때는 그 배열보다 앞에 있는
                            묶음의 개수를 모두 더합니다.
                        </p>

                        <p>
                            ⑤ 앞에 있는 배열의 개수를 센 뒤 자기 자신을 포함하도록
                            마지막에 <InlineMath math="1" />을 더합니다.
                        </p>

                    </div>

                </div>

                {/* 자연수 만들기 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        자연수 만들기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주어진 숫자를 이용하여 자연수를 만들 때는 각 자리를 하나씩
                        채우며 곱의 법칙을 사용합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        자연수에 조건이 있다면{" "}
                        <b className="text-white"> 조건이 있는 자리부터 먼저 처리</b>합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{조건이 있는 자리}
                    \quad\longrightarrow\quad
                    \text{나머지 자리}
                `}
                        />

                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                가장 높은 자리
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                자연수의 가장 높은 자리는{" "}
                                <InlineMath math="0" />이 될 수 없습니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                짝수와 홀수
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                짝수나 홀수를 만들 때는 일의 자리부터 정합니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                배수 조건
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                앞에서 학습한 배수 판정법을 이용하여 조건이 있는 자리를
                                먼저 정합니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                숫자의 중복
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 숫자를 반복해서 사용할 수 있는지 먼저 확인합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 배수 판정법 연결 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        배수 판정법과 자연수 만들기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        자연수를 만드는 문제에서는 4.2에서 학습한 배수 판정법을
                        이용하여 조건을 먼저 처리합니다.
                    </p>

                    <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                        <table className="w-full min-w-[720px] border-collapse text-left text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">

                                    <th className="p-3 font-semibold text-white">
                                        조건
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        먼저 확인할 것
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">2의 배수</td>
                                    <td className="p-3">일의 자리가 0, 2, 4, 6, 8</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">3의 배수</td>
                                    <td className="p-3">각 자리 숫자의 합이 3의 배수</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">4의 배수</td>
                                    <td className="p-3">끝의 두 자리 수가 4의 배수</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">5의 배수</td>
                                    <td className="p-3">일의 자리가 0 또는 5</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">6의 배수</td>
                                    <td className="p-3">2의 배수이면서 3의 배수</td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="p-3">8의 배수</td>
                                    <td className="p-3">끝의 세 자리 수가 8의 배수</td>
                                </tr>

                                <tr>
                                    <td className="p-3">9의 배수</td>
                                    <td className="p-3">각 자리 숫자의 합이 9의 배수</td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 자연수 만들기 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        자연수 만들기의 풀이 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 몇 자리 자연수를 만드는지 확인합니다.
                        </p>

                        <p>
                            ② 숫자를 반복해서 사용할 수 있는지 확인합니다.
                        </p>

                        <p>
                            ③ 가장 높은 자리에 <InlineMath math="0" />이 올 수 없다는
                            점을 확인합니다.
                        </p>

                        <p>
                            ④ 짝수, 홀수, 배수와 같이 조건이 있는 자리를 먼저 채웁니다.
                        </p>

                        <p>
                            ⑤ 남은 숫자를 남은 자리에 차례대로 넣으며 곱의 법칙으로
                            계산합니다.
                        </p>

                        <p>
                            ⑥ 조건에 따라 경우가 나뉘면 각 경우를 구한 뒤 합의 법칙으로
                            더합니다.
                        </p>

                    </div>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        자연수를 만드는 문제에서는{" "}
                        <b className="text-white"> P기호에 바로 대입하기보다</b>
                        각 자리에 들어갈 수 있는 숫자의 개수를 차례대로 곱하는 것이
                        안전합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        특히 숫자 <InlineMath math="0" />이 포함되어 있거나
                        일의 자리에 조건이 있을 때는 단순한 순열 계산으로 해결하면
                        조건을 빠뜨리기 쉽습니다.
                    </p>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            숫자{" "}
                            <InlineMath math="0,\ 1,\ 2,\ 3,\ 4" />를 한 번씩만 사용하여 만든
                            다섯 자리 자연수를 작은 수부터 차례대로 나열할 때,{" "}
                            <InlineMath math="50" />번째에 오는 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                다섯 자리 자연수의 첫째 자리는{" "}
                                <InlineMath math="0" />이 될 수 없습니다.
                            </p>

                            <p className="leading-8">
                                따라서 첫째 자리에는{" "}
                                <InlineMath math="1,\ 2,\ 3,\ 4" /> 중 하나가 들어갑니다.
                            </p>

                            <p className="leading-8">
                                첫째 자리가 하나 정해지면 남은 네 숫자를 배열하는 방법은
                            </p>

                            <BlockMath math="4!=24" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <table className="w-full min-w-[500px] border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr className="border-b border-white/15">
                                            <th className="p-3 font-semibold text-white">
                                                첫째 자리
                                            </th>
                                            <th className="p-3 font-semibold text-white">
                                                전체 순서
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr className="border-b border-white/10">
                                            <td className="p-3">1</td>
                                            <td className="p-3">1~24</td>
                                        </tr>

                                        <tr className="border-b border-white/10">
                                            <td className="p-3">2</td>
                                            <td className="p-3">25~48</td>
                                        </tr>

                                        <tr className="border-b border-white/10">
                                            <td className="p-3 font-semibold text-yellow-300">
                                                3
                                            </td>
                                            <td className="p-3 font-semibold text-yellow-300">
                                                49~72
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="p-3">4</td>
                                            <td className="p-3">73~96</td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                            <p className="leading-8">
                                따라서 <InlineMath math="50" />번째 수의 첫째 자리는{" "}
                                <InlineMath math="3" />입니다.
                            </p>

                            <p className="leading-8">
                                첫째 자리가 <InlineMath math="3" />인 수 중에서는{" "}
                                <InlineMath math="50-48=2" />번째 수를 찾으면 됩니다.
                            </p>

                            <BlockMath math="50-48=2" />

                            <p className="leading-8">
                                남은 숫자는{" "}
                                <InlineMath math="0,\ 1,\ 2,\ 4" />입니다.
                            </p>

                            <p className="leading-8">
                                둘째 자리가 가장 작은 <InlineMath math="0" />으로 정해지면
                                남은 세 숫자를 배열하는 방법은
                            </p>

                            <BlockMath math="3!=6" />

                            <p className="leading-8">
                                가지이므로, 찾는 수의 둘째 자리는{" "}
                                <InlineMath math="0" />입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    앞의 두 자리가 30인 수
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    남은 숫자{" "}
                                    <InlineMath math="1,\ 2,\ 4" />를 작은 순서대로 배열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        1\text{번째}&:\ 30124\\
                        2\text{번째}&:\ 30142
                        \end{aligned}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                첫째 자리가 <InlineMath math="3" />인 묶음에서
                                두 번째 수가 전체의 <InlineMath math="50" />번째 수입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 50번째에 오는 수는
                                </p>

                                <BlockMath math="30142" />

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
                            숫자{" "}
                            <InlineMath math="0,\ 1,\ 2,\ 3,\ 4" />를 모두 한 번씩 사용하여
                            만든 다섯 자리 자연수 중에서{" "}
                            <InlineMath math="23000" /> 이상인 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="23000" /> 이상인지 판단하려면
                                가장 높은 자리부터 비교해야 합니다.
                            </p>

                            <p className="leading-8">
                                만의 자리 숫자에 따라 경우를 나누겠습니다.
                            </p>

                            {/* 경우 1 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    1. 만의 자리가 3 또는 4인 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    만의 자리가 <InlineMath math="3" /> 또는{" "}
                                    <InlineMath math="4" />이면 나머지 자리와 관계없이
                                    항상 <InlineMath math="23000" />보다 큽니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    만의 자리를 정하는 방법은{" "}
                                    <InlineMath math="2" />가지이고,
                                    남은 네 숫자를 배열하는 방법은{" "}
                                    <InlineMath math="4!" />가지입니다.
                                </p>

                                <BlockMath math="2\times4!=48" />

                            </div>

                            {/* 경우 2 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    2. 만의 자리가 2인 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    만의 자리가 <InlineMath math="2" />이면
                                    천의 자리를 비교해야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    남은 숫자는{" "}
                                    <InlineMath math="0,\ 1,\ 3,\ 4" />이고,{" "}
                                    <InlineMath math="23000" /> 이상이 되려면
                                    천의 자리에 <InlineMath math="3" /> 또는{" "}
                                    <InlineMath math="4" />가 와야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    천의 자리를 정하는 방법은{" "}
                                    <InlineMath math="2" />가지이고,
                                    남은 세 숫자를 배열하는 방법은{" "}
                                    <InlineMath math="3!" />가지입니다.
                                </p>

                                <BlockMath math="2\times3!=12" />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    만의 자리가 1인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    만의 자리가 <InlineMath math="1" />이면
                                    어떤 배열을 만들어도 <InlineMath math="23000" />보다
                                    작으므로 포함하지 않습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    또한 만의 자리에는 <InlineMath math="0" />이 올 수 없습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                두 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    2\times4!+2\times3!
                    &=48+12\\
                    &=60
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 구하는 자연수의 개수는
                                </p>

                                <BlockMath math="60" />

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
                            숫자{" "}
                            <InlineMath math="1,\ 2,\ 3,\ 4,\ 5" />를 모두 한 번씩 사용하여
                            만든 다섯 자리 자연수를 작은 수부터 순서대로 나열할 때,{" "}
                            <InlineMath math="24351" />은 몇 번째 수인지 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="24351" />보다 앞에 있는 자연수의 개수를
                                가장 높은 자리부터 차례대로 구합니다.
                            </p>

                            {/* 첫째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    1. 첫째 자리
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    첫째 자리의 <InlineMath math="2" />보다 작은 숫자는{" "}
                                    <InlineMath math="1" /> 하나입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    첫째 자리가 <InlineMath math="1" />인 수는
                                    나머지 네 숫자를 자유롭게 배열하므로
                                </p>

                                <BlockMath math="1\times4!=24" />

                                <p className="leading-8 text-gray-300">
                                    개입니다.
                                </p>

                            </div>

                            {/* 둘째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    2. 둘째 자리
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    첫째 자리를 <InlineMath math="2" />로 정하면
                                    남은 숫자는{" "}
                                    <InlineMath math="1,\ 3,\ 4,\ 5" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    둘째 자리의 <InlineMath math="4" />보다 작은 숫자는{" "}
                                    <InlineMath math="1,\ 3" />의 두 개입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    둘째 자리를 정한 뒤 남은 세 숫자를 배열하므로
                                </p>

                                <BlockMath math="2\times3!=12" />

                                <p className="leading-8 text-gray-300">
                                    개입니다.
                                </p>

                            </div>

                            {/* 셋째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    3. 셋째 자리
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    앞의 두 자리를 <InlineMath math="24" />로 정하면
                                    남은 숫자는{" "}
                                    <InlineMath math="1,\ 3,\ 5" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    셋째 자리의 <InlineMath math="3" />보다 작은 숫자는{" "}
                                    <InlineMath math="1" /> 하나입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    셋째 자리를 정한 뒤 남은 두 숫자를 배열하므로
                                </p>

                                <BlockMath math="1\times2!=2" />

                                <p className="leading-8 text-gray-300">
                                    개입니다.
                                </p>

                            </div>

                            {/* 넷째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    4. 넷째 자리
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    앞의 세 자리를 <InlineMath math="243" />으로 정하면
                                    남은 숫자는{" "}
                                    <InlineMath math="1,\ 5" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    넷째 자리의 <InlineMath math="5" />보다 작은 숫자는{" "}
                                    <InlineMath math="1" /> 하나입니다.
                                </p>

                                <BlockMath math="1\times1!=1" />

                            </div>

                            <p className="leading-8">
                                따라서 <InlineMath math="24351" />보다 앞에 있는 자연수의
                                개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    24+12+2+1
                    &=39
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                개입니다.
                            </p>

                            <p className="leading-8">
                                자기 자신까지 포함하면
                            </p>

                            <BlockMath math="39+1=40" />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    계산 구조
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\times4!
                        +2\times3!
                        +1\times2!
                        +1\times1!
                        +1
                        =40
                    `}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    각 자리에서 현재 숫자보다 작은 남은 숫자의 개수를
                                    세어 묶음의 크기를 곱합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        24351\text{은 }40\text{번째 수}
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
                            서로 다른 문자{" "}
                            <InlineMath math="\mathrm{A,\ B,\ C,\ D,\ E}" />를 한 번씩만
                            사용하여 사전식으로 배열할 때,{" "}
                            <InlineMath math="86" />번째에 오는 문자열의 마지막 문자를
                            구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                알파벳의 순서는
                            </p>

                            <BlockMath math="A<B<C<D<E" />

                            <p className="leading-8">
                                입니다. 앞자리부터 <InlineMath math="86" />번째 배열이
                                들어 있는 묶음을 차례대로 찾겠습니다.
                            </p>

                            {/* 첫째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    1. 첫째 문자
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    첫 문자가 하나 정해지면 남은 네 문자를 배열하는 방법은
                                </p>

                                <BlockMath math="4!=24" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[500px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr className="border-b border-white/15">
                                                <th className="p-3 font-semibold text-white">
                                                    첫 문자
                                                </th>
                                                <th className="p-3 font-semibold text-white">
                                                    전체 순서
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">A</td>
                                                <td className="p-3">1~24</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">B</td>
                                                <td className="p-3">25~48</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3">C</td>
                                                <td className="p-3">49~72</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="p-3 font-semibold text-yellow-300">
                                                    D
                                                </td>
                                                <td className="p-3 font-semibold text-yellow-300">
                                                    73~96
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="p-3">E</td>
                                                <td className="p-3">97~120</td>
                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    따라서 첫 문자는 <InlineMath math="D" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    첫 문자가 <InlineMath math="D" />인 묶음 안에서는
                                </p>

                                <BlockMath math="86-72=14" />

                                <p className="leading-8 text-gray-300">
                                    번째 배열을 찾으면 됩니다.
                                </p>

                            </div>

                            {/* 둘째 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    2. 둘째 문자
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    남은 문자는{" "}
                                    <InlineMath math="\mathrm{A,\ B,\ C,\ E}" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    둘째 문자가 하나 정해지면 남은 세 문자를 배열하는 방법은
                                </p>

                                <BlockMath math="3!=6" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{array}{c|c}
                        \text{둘째 문자}&\text{묶음 안의 순서}\\ \hline
                        A&1\sim6\\
                        B&7\sim12\\
                        C&13\sim18\\
                        E&19\sim24
                        \end{array}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="14" />번째는{" "}
                                    <InlineMath math="13\sim18" />의 묶음에 있으므로
                                    둘째 문자는 <InlineMath math="C" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 묶음 안에서는
                                </p>

                                <BlockMath math="14-12=2" />

                                <p className="leading-8 text-gray-300">
                                    번째 배열을 찾으면 됩니다.
                                </p>

                            </div>

                            {/* 나머지 자리 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    3. 나머지 문자
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    남은 문자는{" "}
                                    <InlineMath math="\mathrm{A,\ B,\ E}" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    셋째 문자가 하나 정해지면 남은 두 문자의 배열은{" "}
                                    <InlineMath math="2!=2" />개씩 묶입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{array}{c|c}
                        \text{셋째 문자}&\text{묶음 안의 순서}\\ \hline
                        A&1\sim2\\
                        B&3\sim4\\
                        E&5\sim6
                        \end{array}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    찾는 배열은 두 번째이므로 셋째 문자는{" "}
                                    <InlineMath math="A" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    남은 두 문자 <InlineMath math="\mathrm{B,\ E}" />를
                                    사전식으로 배열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        1\text{번째}&:\ \mathrm{BE}\\
                        2\text{번째}&:\ \mathrm{EB}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 전체 문자열은
                                </p>

                                <BlockMath math="\mathrm{DCAEB}" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    문자열 전체를 구하는 이유
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    문제에서는 마지막 문자만 묻고 있지만,
                                    사전식 배열에서는 앞자리부터 묶음을 좁혀 가야 하므로
                                    배열 전체를 찾아가는 것이 가장 안전합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 마지막 문자는
                                </p>

                                <BlockMath math="\boxed{\mathrm{B}}" />

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
                            <InlineMath math="\mathrm{GERMANY}" />의{" "}
                            <InlineMath math="7" />개의 문자를 한 번씩만 사용하여
                            사전식으로 배열할 때,{" "}
                            <InlineMath math="\mathrm{GYRNMEA}" />와{" "}
                            <InlineMath math="\mathrm{NGEAMRY}" /> 사이에 있는
                            문자열의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                먼저 두 문자열이 각각 몇 번째인지 구한 후,
                                두 순위의 차에서 1을 빼면 됩니다.
                            </p>

                            <BlockMath math="\text{사이의 개수}=|\text{순위 차}|-1" />

                            {/* GYRNMEA */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    ① GYRNMEA의 순위
                                </h4>

                                <p className="mt-4 leading-8">
                                    사용 가능한 문자의 순서는
                                </p>

                                <BlockMath math="\mathrm{A<E<G<M<N<R<Y}" />

                                <table className="mt-5 w-full border-collapse text-center">

                                    <thead>

                                        <tr className="border-b border-white/15">

                                            <th className="p-2">자리</th>
                                            <th className="p-2">앞서는 문자 수</th>
                                            <th className="p-2">경우의 수</th>

                                        </tr>

                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="p-2">G</td>
                                            <td className="p-2">2</td>
                                            <td className="p-2"><InlineMath math="2\times6!" /></td>
                                        </tr>

                                        <tr>
                                            <td className="p-2">Y</td>
                                            <td className="p-2">5</td>
                                            <td className="p-2"><InlineMath math="5\times5!" /></td>
                                        </tr>

                                        <tr>
                                            <td className="p-2">R</td>
                                            <td className="p-2">4</td>
                                            <td className="p-2"><InlineMath math="4\times4!" /></td>
                                        </tr>

                                        <tr>
                                            <td className="p-2">N</td>
                                            <td className="p-2">3</td>
                                            <td className="p-2"><InlineMath math="3\times3!" /></td>
                                        </tr>

                                        <tr>
                                            <td className="p-2">M</td>
                                            <td className="p-2">2</td>
                                            <td className="p-2"><InlineMath math="2\times2!" /></td>
                                        </tr>

                                        <tr>
                                            <td className="p-2">E</td>
                                            <td className="p-2">1</td>
                                            <td className="p-2"><InlineMath math="1\times1!" /></td>
                                        </tr>
                                    </tbody>

                                </table>

                                <BlockMath
                                    math={String.raw`
        \begin{aligned}
        &2\times6!+5\times5!+4\times4!\\
        &\quad+3\times3!+2\times2!+1\times1!+1\\
        &=2160
        \end{aligned}
    `}
                                />

                            </div>

                            {/* NGEAMRY */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    ② NGEAMRY의 순위
                                </h4>

                                <table className="mt-5 w-full border-collapse text-center">

                                    <thead>

                                        <tr className="border-b border-white/15">

                                            <th className="p-2">자리</th>
                                            <th className="p-2">앞서는 문자 수</th>
                                            <th className="p-2">경우의 수</th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr><td>N</td><td>4</td><td><InlineMath math="4\times6!" /></td></tr>
                                        <tr><td>G</td><td>2</td><td><InlineMath math="2\times5!" /></td></tr>
                                        <tr><td>E</td><td>1</td><td><InlineMath math="1\times4!" /></td></tr>
                                        <tr><td>A</td><td>0</td><td>0</td></tr>
                                        <tr><td>M</td><td>0</td><td>0</td></tr>
                                        <tr><td>R</td><td>0</td><td>0</td></tr>

                                    </tbody>

                                </table>

                                <BlockMath
                                    math="
                    4\cdot6!
                    +2\cdot5!
                    +1\cdot4!
                    +1
                    =3145
                    "
                                />

                            </div>

                            <p className="leading-8">
                                따라서 두 문자열 사이에 있는 문자열의 개수는
                            </p>

                            <BlockMath math="3145-2160-1=984" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="\boxed{984}" />

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
                            숫자{" "}
                            <InlineMath math="0,\ 1,\ 2,\ 3,\ 4,\ 5" /> 중 서로 다른{" "}
                            <InlineMath math="4" />개를 사용하여 네 자리 자연수를 만들 때,
                            다음을 구하여라.
                        </p>

                        <ol className="mt-4 list-decimal space-y-2 pl-6 text-gray-300">
                            <li>네 자리 자연수의 개수</li>
                            <li>짝수의 개수</li>
                            <li>4의 배수의 개수</li>
                        </ol>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (1) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (1) 네 자리 자연수의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    천의 자리에는{" "}
                                    <InlineMath math="0" />이 올 수 없으므로{" "}
                                    <InlineMath math="1,\ 2,\ 3,\ 4,\ 5" />의{" "}
                                    <InlineMath math="5" />가지가 가능합니다.
                                </p>

                                <p className="leading-8">
                                    나머지 세 자리는 남은 숫자를 차례대로 배열하면 됩니다.
                                </p>

                                <BlockMath math="5\times5\times4\times3=300" />

                            </div>

                            {/* (2) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (2) 짝수의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    일의 자리는{" "}
                                    <InlineMath math="0,\ 2,\ 4" />만 가능합니다.
                                </p>

                                <p className="leading-8">
                                    경우를 나누어 계산합니다.
                                </p>

                                <div className="mt-4 rounded-lg bg-white/5 p-4">

                                    <p className="font-semibold text-white">
                                        ① 일의 자리가 0인 경우
                                    </p>

                                    <BlockMath math="5\times4\times3=60" />

                                </div>

                                <div className="mt-4 rounded-lg bg-white/5 p-4">

                                    <p className="font-semibold text-white">
                                        ② 일의 자리가 2 또는 4인 경우
                                    </p>

                                    <p className="mt-2">
                                        일의 자리는{" "}
                                        <InlineMath math="2" />가지,
                                        천의 자리는{" "}
                                        <InlineMath math="0" />을 제외해야 하므로{" "}
                                        <InlineMath math="4" />가지입니다.
                                    </p>

                                    <BlockMath math="2\times4\times4\times3=96" />

                                </div>

                                <BlockMath math="60+96=156" />

                            </div>

                            {/* (3) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (3) 4의 배수의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    4의 배수는 끝의 두 자리 수가 4의 배수이면 됩니다.
                                </p>

                                <p className="leading-8">
                                    서로 다른 숫자로 만들 수 있는 끝의 두 자리 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
            04,\ 12,\ 20,\ 24,\ 32,\ 40,\ 52
        `}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="7" />가지입니다.
                                    숫자 <InlineMath math="0" />이 끝의 두 자리에 사용되었는지에 따라
                                    경우를 나눕니다.
                                </p>

                                <div className="mt-4 rounded-lg bg-white/5 p-4">

                                    <p className="font-semibold text-white">
                                        ① 끝의 두 자리에 0이 포함된 경우
                                    </p>

                                    <BlockMath math="04,\ 20,\ 40" />

                                    <p className="leading-8">
                                        <InlineMath math="0" />을 이미 사용했으므로 남은 네 숫자는
                                        모두 <InlineMath math="0" />이 아닙니다.
                                    </p>

                                    <BlockMath math="3\times4\times3=36" />

                                </div>

                                <div className="mt-4 rounded-lg bg-white/5 p-4">

                                    <p className="font-semibold text-white">
                                        ② 끝의 두 자리에 0이 포함되지 않은 경우
                                    </p>

                                    <BlockMath math="12,\ 24,\ 32,\ 52" />

                                    <p className="leading-8">
                                        남은 네 숫자 중 하나가 <InlineMath math="0" />이므로
                                        천의 자리에는 나머지 세 숫자만 올 수 있습니다.
                                    </p>

                                    <BlockMath math="4\times3\times3=36" />

                                </div>

                                <BlockMath
                                    math={String.raw`
            36+36=72
        `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math="\boxed{\begin{aligned}
                    (1)&\ 300\\
                    (2)&\ 156\\
                    (3)&\ 72
                    \end{aligned}}"
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
                            숫자{" "}
                            <InlineMath math="1,\ 2,\ 3,\ 4,\ 5,\ 6,\ 7" /> 중에서
                            서로 다른 <InlineMath math="4" />개의 숫자를 택하여
                            네 자리 자연수를 만들 때, 천의 자리의 숫자와 일의 자리의
                            숫자가 모두 홀수인 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                천의 자리와 일의 자리에 조건이 있으므로
                                두 자리를 먼저 정합니다.
                            </p>

                            <p className="leading-8">
                                주어진 숫자 중 홀수는
                            </p>

                            <BlockMath math="1,\ 3,\ 5,\ 7" />

                            <p className="leading-8">
                                의 <InlineMath math="4" />개입니다.
                            </p>

                            <div className="grid gap-4 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        천의 자리
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        홀수 <InlineMath math="4" />개 중 하나
                                    </p>

                                    <BlockMath math="4" />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        일의 자리
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        남은 홀수 <InlineMath math="3" />개 중 하나
                                    </p>

                                    <BlockMath math="3" />

                                </div>

                            </div>

                            <p className="leading-8">
                                천의 자리와 일의 자리를 정한 뒤에는
                                사용하지 않은 숫자가 <InlineMath math="5" />개 남습니다.
                            </p>

                            <p className="leading-8">
                                백의 자리에는 남은 숫자 중 하나를 넣으므로{" "}
                                <InlineMath math="5" />가지이고,
                                십의 자리에는 다시 남은 숫자 중 하나를 넣으므로{" "}
                                <InlineMath math="4" />가지입니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[500px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="rounded-lg bg-yellow-500/20 px-4 py-3 text-yellow-300">
                                        홀
                                    </span>

                                    <span className="mx-4 rounded-lg bg-white/10 px-4 py-3 text-white">
                                        5가지
                                    </span>

                                    <span className="rounded-lg bg-white/10 px-4 py-3 text-white">
                                        4가지
                                    </span>

                                    <span className="ml-4 rounded-lg bg-yellow-500/20 px-4 py-3 text-yellow-300">
                                        홀
                                    </span>

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    4\times5\times4\times3
                    &=240
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    천의 자리와 일의 자리가 모두 홀수라는 조건이 있으므로
                                    이 두 자리를 먼저 정합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    숫자를 중복해서 사용할 수 없으므로 천의 자리에 홀수를
                                    하나 사용하면 일의 자리에는 남은 홀수{" "}
                                    <InlineMath math="3" />개만 사용할 수 있습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 구하는 자연수의 개수는
                                </p>

                                <BlockMath math="240" />

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
                            숫자{" "}
                            <InlineMath math="0,\ 1,\ 2,\ 3,\ 4,\ 5,\ 6" /> 중에서
                            서로 다른 <InlineMath math="3" />개를 택하여 세 자리 자연수를
                            만들 때, 각 자리의 수 중 어느 두 수의 합도{" "}
                            <InlineMath math="7" />이 되지 않는 세 자리 자연수의 개수를
                            구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                전체 세 자리 자연수의 개수에서, 두 숫자의 합이{" "}
                                <InlineMath math="7" />이 되는 숫자쌍이 포함된 경우를
                                빼겠습니다.
                            </p>

                            {/* 전체 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    1. 전체 세 자리 자연수의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    백의 자리에는 <InlineMath math="0" />을 제외한{" "}
                                    <InlineMath math="6" />개의 숫자 중 하나가 들어갑니다.
                                </p>

                                <p className="leading-8">
                                    십의 자리에는 남은 <InlineMath math="6" />개,
                                    일의 자리에는 다시 남은 <InlineMath math="5" />개의
                                    숫자 중 하나가 들어갑니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6\times6\times5=180
                    `}
                                />

                            </div>

                            {/* 합이 7인 쌍 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    2. 합이 7이 되는 숫자쌍
                                </h4>

                                <p className="mt-4 leading-8">
                                    주어진 숫자 중 두 수의 합이{" "}
                                    <InlineMath math="7" />이 되는 숫자쌍은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1,6),\qquad(2,5),\qquad(3,4)
                    `}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="3" />가지입니다.
                                </p>

                            </div>

                            {/* 나머지 한 숫자가 0 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    3. 하나의 숫자쌍이 포함된 경우
                                </h4>

                                <p className="mt-4 leading-8">
                                    먼저 합이 <InlineMath math="7" />인 숫자쌍 하나를
                                    정합니다.
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    선택한 숫자쌍과 함께 사용할 세 번째 숫자에{" "}
                                    <InlineMath math="0" />이 포함되는지에 따라
                                    경우를 나눕니다.
                                </p>

                                <div className="mt-5 rounded-lg bg-white/5 p-5">

                                    <p className="font-semibold text-white">
                                        ① 세 번째 숫자가 0인 경우
                                    </p>

                                    <p className="mt-3 leading-8">
                                        세 숫자를 배열하는 방법은{" "}
                                        <InlineMath math="3!" />가지이지만,{" "}
                                        <InlineMath math="0" />이 맨 앞에 오는 배열은
                                        세 자리 자연수가 아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            3!-2!=6-2=4
                        `}
                                    />

                                </div>

                                <div className="mt-4 rounded-lg bg-white/5 p-5">

                                    <p className="font-semibold text-white">
                                        ② 세 번째 숫자가 0이 아닌 경우
                                    </p>

                                    <p className="mt-3 leading-8">
                                        선택한 숫자쌍을 제외하면 숫자가{" "}
                                        <InlineMath math="5" />개 남고, 그중{" "}
                                        <InlineMath math="0" />을 제외한 숫자는{" "}
                                        <InlineMath math="4" />개입니다.
                                    </p>

                                    <p className="leading-8">
                                        세 숫자가 모두 <InlineMath math="0" />이 아니므로
                                        각 숫자 선택마다 배열은{" "}
                                        <InlineMath math="3!" />가지입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            4\times3!=24
                        `}
                                    />

                                </div>

                                <p className="mt-5 leading-8">
                                    따라서 하나의 숫자쌍이 포함된 세 자리 자연수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4+24=28
                    `}
                                />

                                <p className="leading-8">
                                    개입니다.
                                </p>

                            </div>

                            {/* 중복 확인 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    중복하여 세지 않는 이유
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    합이 <InlineMath math="7" />인 숫자쌍{" "}
                                    <InlineMath math="(1,6),\ (2,5),\ (3,4)" />는
                                    서로 겹치지 않습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 개의 숫자만 사용하는 자연수 안에는 이 숫자쌍이
                                    두 쌍 이상 동시에 들어갈 수 없으므로 각 경우는
                                    서로 겹치지 않습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                합이 <InlineMath math="7" />인 숫자쌍이 포함된 자연수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    3\times28=84
                `}
                            />

                            <p className="leading-8">
                                개입니다.
                            </p>

                            <p className="leading-8">
                                따라서 어느 두 수의 합도{" "}
                                <InlineMath math="7" />이 되지 않는 자연수의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    180-84
                    &=96
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 구하는 자연수의 개수는
                                </p>

                                <BlockMath math="96" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            숫자를 작은 수부터 나열하는 방법과 알파벳을 사전식으로
                            나열하는 방법은 같습니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            앞자리 하나가 정해지면 남은 자리의 배열은
                            남은 자리 수의 팩토리얼만큼 하나의 묶음을 이룹니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{한 묶음의 크기}
                    =
                    (\text{남은 자리 수})!
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            몇 번째 배열을 찾을 때는 해당 번호가 포함된 묶음을 찾고,
                            주어진 배열의 순서를 찾을 때는 앞에 있는 묶음의 개수를 셉니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            자연수를 만들 때는 조건이 있는 자리부터 먼저 처리하고
                            곱의 법칙을 사용합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{조건이 있는 자리 먼저}
                    \quad\longrightarrow\quad
                    \text{남은 자리 채우기}
                `}
                        />

                    </div>

                </div>

            </section>
        </>
    )
};