"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function CombinationPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.16 조합
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    서로 다른 대상 중 일부를 뽑을 때 순서를 생각하지 않는 경우의 수를
                    조합이라고 합니다. 순열과 조합의 차이와 조합의 계산 방법을
                    알아보겠습니다.
                </p>

                {/* 조합의 뜻 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        조합의 뜻
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                조합
                            </p>

                            <BlockMath math={String.raw`{}_nC_r`} />

                            <p className="leading-8 text-gray-300">
                                서로 다른 <InlineMath math="n" />개 중{" "}
                                <InlineMath math="r" />개를 뽑는 경우의 수입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                뽑힌 대상의 순서는 결과에 영향을 주지 않습니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                순열
                            </p>

                            <BlockMath math={String.raw`{}_nP_r`} />

                            <p className="leading-8 text-gray-300">
                                서로 다른 <InlineMath math="n" />개 중{" "}
                                <InlineMath math="r" />개를 뽑아 자리바꿈하는
                                경우의 수입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                뽑힌 대상의 순서가 달라지면 서로 다른 경우입니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            조합 하나가 정해지면 뽑힌{" "}
                            <InlineMath math="r" />개를 자리바꿈하는 방법은{" "}
                            <InlineMath math="r!" />가지입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_nP_r={}_nC_r\times r!
                `}
                        />

                    </div>

                </div>

                {/* 조합 공식 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        조합의 계산
                    </h3>

                    <p className="leading-8 text-gray-300">
                        순열과 조합의 관계에서{" "}
                        <InlineMath math={String.raw`{}_nC_r`} />를 구하면
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                {}_nC_r
                &=\frac{{}_nP_r}{r!}\\
                &=\frac{n!}{(n-r)!r!}
                \end{aligned}
            `}
                    />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="font-semibold text-blue-300">
                            기호를 보고 바로 조립하기
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math={String.raw`{}_nC_r`} />에서
                            앞의 수는 <InlineMath math="n" />,
                            뒤의 수는 <InlineMath math="r" />,
                            두 수의 차는 <InlineMath math="n-r" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_nC_r
                    =
                    \frac{\text{앞}!}
                    {\text{차}!\,\text{뒤}!}
                `}
                        />

                        <div className="mt-4 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    앞
                                </p>

                                <BlockMath math="n" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    차
                                </p>

                                <BlockMath math="n-r" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    뒤
                                </p>

                                <BlockMath math="r" />

                            </div>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            예
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_8C_3
                    =
                    \frac{8!}{5!\,3!}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            앞은 <InlineMath math="8" />,
                            뒤는 <InlineMath math="3" />,
                            차는 <InlineMath math="8-3=5" />입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            문자가 포함된 경우
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_{n+1}C_{n-r-2}
                    =
                    \frac{(n+1)!}
                    {(r+3)!\,(n-r-2)!}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            앞은 <InlineMath math="n+1" />,
                            뒤는 <InlineMath math="n-r-2" />이고,
                            차는
                        </p>

                        <BlockMath
                            math={String.raw`
                    (n+1)-(n-r-2)=r+3
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 기호를 보고 바로 식을 조립할 수 있습니다.
                        </p>

                    </div>

                </div>

                {/* 특수한 조합 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        하나도 뽑지 않거나 모두 뽑는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="n" />개 중 하나도 뽑지 않는 방법은
                        아무것도 뽑지 않는 한 가지뿐입니다.
                    </p>

                    <BlockMath math={String.raw`{}_nC_0=1`} />

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="n" />개 중{" "}
                        <InlineMath math="n" />개를 모두 뽑는 방법도 한 가지뿐입니다.
                    </p>

                    <BlockMath math={String.raw`{}_nC_n=1`} />

                </div>

                {/* 선택과 버리기 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        뽑는 것과 버리는 것
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="50" />개 중{" "}
                        <InlineMath math="47" />개를 뽑으면
                        뽑히지 않는 대상은 <InlineMath math="3" />개입니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        따라서 <InlineMath math="47" />개를 뽑는 방법은
                        버릴 <InlineMath math="3" />개를 정하는 방법과 같습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                {}_{50}C_{47}
                =
                {}_{50}C_3
            `}
                    />

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    {}_nC_r
                    =
                    {}_nC_{n-r}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            <InlineMath math="r" />개를 뽑는 방법과{" "}
                            <InlineMath math="n-r" />개를 버리는 방법은 같습니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="font-semibold text-green-300">
                            계산 팁
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            같은 값을 나타낸다면 뒤의 숫자가 작은 쪽으로 바꾸어
                            계산하는 것이 유리합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_{50}C_{47}
                    =
                    {}_{50}C_3
                    =
                    \frac{50!}{47!\,3!}
                `}
                        />

                    </div>

                </div>

                {/* 자리바꿈 관점 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        자리바꿈으로 바라보는 순열과 조합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 문자{" "}
                        <InlineMath math="\mathrm{A,\ B,\ C,\ D,\ E}" />를 이용하여
                        순열과 조합의 공식을 다시 생각해 보겠습니다.
                    </p>

                    {/* 다섯 자리 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            1. 다섯 자리에 모두 자리바꿈
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            다섯 문자를 다섯 자리에 모두 나열하면 모든 자리의 순서를
                            구별합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    5!
                `}
                        />

                    </div>

                    {/* 세 자리 순열 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            2. 세 자리에 나열
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            다섯 자리 중 앞의 세 자리만 사용한다고 생각합니다.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                            <div className="min-w-[520px] text-center text-xl tracking-wider">

                                <span className="rounded-lg bg-blue-500/20 px-4 py-3 text-blue-300">
                                    앞
                                </span>

                                <span className="mx-2 rounded-lg bg-blue-500/20 px-4 py-3 text-blue-300">
                                    앞
                                </span>

                                <span className="rounded-lg bg-blue-500/20 px-4 py-3 text-blue-300">
                                    앞
                                </span>

                                <span className="mx-2 rounded-lg bg-gray-500/20 px-4 py-3 text-gray-400">
                                    뒤
                                </span>

                                <span className="rounded-lg bg-gray-500/20 px-4 py-3 text-gray-400">
                                    뒤
                                </span>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            앞의 세 자리가 같다면 뒤의 두 문자를 어떻게 자리바꿈해도
                            같은 세 자리 배열입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \mathrm{ABCDE}
                    \quad\text{와}\quad
                    \mathrm{ABCED}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            는 앞의 세 자리만 보면 모두{" "}
                            <InlineMath math="\mathrm{ABC}" />입니다.
                            따라서 뒤의 두 자리의 자리바꿈{" "}
                            <InlineMath math="2!" />을 무효화합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{5!}{2!}
                    =
                    {}_5P_3
                `}
                        />

                    </div>

                    {/* 세 개 선택 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            3. 세 개를 선택
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            세 개를 선택할 때는 앞의 세 자리 안에서도 순서를
                            구별하지 않습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
                    \mathrm{ABC},\
                    \mathrm{ACB},\
                    \mathrm{BAC},\
                    \mathrm{BCA},\
                    \mathrm{CAB},\
                    \mathrm{CBA}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            는 모두{" "}
                            <InlineMath math="\mathrm{A,\ B,\ C}" />를 선택한
                            같은 조합입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 뒤의 두 자리의 자리바꿈{" "}
                            <InlineMath math="2!" />뿐만 아니라,
                            앞의 세 자리의 자리바꿈{" "}
                            <InlineMath math="3!" />도 무효화합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{5!}{2!\,3!}
                    =
                    {}_5C_3
                `}
                        />

                    </div>

                    {/* 흐름 */}
                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="font-semibold text-blue-300">
                            전체 흐름
                        </p>

                        <BlockMath
                            math={String.raw`
                    5!
                    \quad\xrightarrow{\div\,2!}\quad
                    \frac{5!}{2!}
                    \quad\xrightarrow{\div\,3!}\quad
                    \frac{5!}{2!\,3!}
                `}
                        />

                        <div className="mt-4 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    모두 자리바꿈
                                </p>

                                <BlockMath math="5!" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    세 자리에 나열
                                </p>

                                <BlockMath math={String.raw`\dfrac{5!}{2!}`} />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    세 개를 선택
                                </p>

                                <BlockMath math={String.raw`\dfrac{5!}{2!\,3!}`} />

                            </div>

                        </div>

                    </div>

                    {/* 일반화 */}
                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            일반화
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="n" />개를 모두 자리바꿈하면{" "}
                            <InlineMath math="n!" />입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            앞의 <InlineMath math="r" />자리만 사용하면
                            뒤의 <InlineMath math="n-r" />자리의 자리바꿈을
                            무효화합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_nP_r
                    =
                    \frac{n!}{(n-r)!}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            앞의 <InlineMath math="r" />자리에서도 순서를 구별하지
                            않으면 앞의 자리바꿈까지 무효화합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_nC_r
                    =
                    \frac{n!}{(n-r)!r!}
                `}
                        />

                    </div>

                    {/* 참고 */}
                    <div className="mt-5 rounded-xl border border-white/15 p-5">

                        <p className="font-semibold text-gray-200">
                            참고
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            이처럼 의미 없는 자리바꿈을 나누는 아이디어는 이후 배우는
                            같은 것이 있는 순열에서도 다시 사용됩니다.
                        </p>

                        <p className="leading-8 text-gray-400">
                            다만 조합에서는 선택한 대상의 순서를 구별하지 않기 때문에
                            나누고, 같은 것이 있는 순열에서는 같은 대상을 서로 바꾸어도
                            구별되지 않기 때문에 나눕니다.
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
                            다음 등식을 만족시키는{" "}
                            <InlineMath math="n" /> 또는{" "}
                            <InlineMath math="r" />의 값을 구하여라.
                        </p>

                        <BlockMath
                            math={String.raw`
            \begin{aligned}
            (1)\;&{}_nC_5={}_nC_4\\[2mm]
            (2)\;&{}_{10}C_r={}_{10}C_{2r+1}\\[2mm]
            (3)\;&{}_{10}C_2+{}_{10}C_7={}_{11}C_r\\[2mm]
            (4)\;&{}_{n+2}C_3=2{}_nC_2+{}_{n+1}C_{\,n-1}
            \end{aligned}
        `}
                        />

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (1) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-bold text-white">
                                    (1)
                                </h4>

                                <p className="mt-3 leading-8">
                                    조합의 성질
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nC_r={}_nC_{n-r}
                    `}
                                />

                                <p className="leading-8">
                                    에서 두 아래첨자가 서로 같거나 서로 보수 관계이면 같습니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        5=n-4
                    `}
                                />

                                <BlockMath
                                    math="n=9"
                                />

                            </div>

                            {/* (2) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-bold text-white">
                                    (2)
                                </h4>

                                <p className="mt-3 leading-8">
                                    두 조합이 같으므로 아래첨자가 같거나 보수 관계입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        r=2r+1\\
                        \text{또는}\\
                        r=10-(2r+1)
                        \end{cases}
                    `}
                                />

                                <p className="leading-8">
                                    첫 번째 식은 자연수 해가 없습니다.
                                </p>

                                <p className="leading-8">
                                    두 번째 식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3r=9
                    `}
                                />

                                <BlockMath
                                    math="r=3"
                                />

                            </div>

                            {/* (3) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-bold text-white">
                                    (3)
                                </h4>

                                <p className="mt-3 leading-8">
                                    먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{10}C_7={}_{10}C_3
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{10}C_2+{}_{10}C_3
                    `}
                                />

                                <p className="leading-8">
                                    이 됩니다.
                                </p>

                                <p className="leading-8">
                                    파스칼의 공식
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nC_r+{}_nC_{r+1}
                        =
                        {}_{n+1}C_{r+1}
                    `}
                                />

                                <p className="leading-8">
                                    을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{10}C_2+{}_{10}C_3
                        =
                        {}_{11}C_3
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math="r=3"
                                />

                            </div>

                            {/* (4) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-bold text-white">
                                    (4)
                                </h4>

                                <p className="mt-3 leading-8">
                                    먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{n+1}C_{\,n-1}
                        =
                        {}_{n+1}C_2
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
                        {}_{n+2}C_3
                        =
                        {}_{n+1}C_2
                        +
                        {}_{n+1}C_3
                    `}
                                />

                                <p className="leading-8">
                                    이므로 식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{n+1}C_2+{}_{n+1}C_3
                        =
                        2{}_nC_2+{}_{n+1}C_2
                    `}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{n+1}C_3
                        =
                        2{}_nC_2
                    `}
                                />

                                <p className="leading-8">
                                    양변을 계산하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{(n+1)n(n-1)}{6}
                        =
                        n(n-1)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        n+1=6
                    `}
                                />

                                <BlockMath
                                    math="n=5"
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (1)\;&n=9\\
                        (2)\;&r=3\\
                        (3)\;&r=3\\
                        (4)\;&n=5
                        \end{aligned}
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
                            다음 등식을 만족시키는 자연수{" "}
                            <InlineMath math="n" />의 값을 구하여라.
                        </p>

                        <BlockMath
                            math={String.raw`
                {}_nC_3
                -11\times{}_nC_2
                +2\times{}_{n-1}P_2
                =0
            `}
                        />

                        <p className="text-right leading-8 text-gray-300">
                            단, <InlineMath math="n\geq3" />이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                조합과 순열을 각각 곱셈식으로 나타냅니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_nC_3
                    =
                    \frac{n(n-1)(n-2)}{3!}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    {}_nC_2
                    =
                    \frac{n(n-1)}{2!}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    {}_{n-1}P_2
                    =
                    (n-1)(n-2)
                `}
                            />

                            <p className="leading-8">
                                주어진 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{n(n-1)(n-2)}{6}
                    -11\cdot\frac{n(n-1)}{2}
                    +2(n-1)(n-2)
                    =0
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="6" />을 곱합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    n(n-1)(n-2)
                    -33n(n-1)
                    +12(n-1)(n-2)
                    =0
                `}
                            />

                            <p className="leading-8">
                                모든 항의 공통인수{" "}
                                <InlineMath math="n-1" />을 묶으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (n-1)
                    \left\{
                    n(n-2)-33n+12(n-2)
                    \right\}
                    =0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (n-1)(n^2-23n-24)=0
                `}
                            />

                            <p className="leading-8">
                                이차식을 인수분해하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (n-1)(n-24)(n+1)=0
                `}
                            />

                            <p className="leading-8">
                                따라서 가능한 값은
                            </p>

                            <BlockMath
                                math={String.raw`
                    n=1,\quad n=24,\quad n=-1
                `}
                            />

                            <p className="leading-8">
                                그런데 <InlineMath math="n" />은{" "}
                                <InlineMath math="n\geq3" />인 자연수이므로
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="n=24" />

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
                            <InlineMath math="1\le r<n" />일 때, 등식
                        </p>

                        <BlockMath
                            math={String.raw`
                {}_{n-1}C_{r-1}+{}_{n-1}C_r={}_nC_r
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립함을 증명하는 과정이다.
                            다음 빈칸 (가), (나), (다)에 들어갈 식으로 알맞은 것을
                            고르시오.
                        </p>

                        <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                            <div className="min-w-[760px]">

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &{}_{n-1}C_{r-1}+{}_{n-1}C_r\\[2mm]
                        &=
                        \frac{(n-1)!}
                        {(r-1)!\boxed{\text{(가)}}}
                        +
                        \frac{(n-1)!}
                        {r!\{(n-1)-r\}!}\\[3mm]
                        &=
                        \frac{r(n-1)!}
                        {r!(n-r)!}
                        +
                        \frac{(n-r)(n-1)!}
                        {r!\boxed{\text{(나)}}}\\[3mm]
                        &=
                        \frac{\{(n-r)+r\}(n-1)!}
                        {r!(n-r)!}\\[3mm]
                        &=
                        \frac{\boxed{\text{(다)}}}
                        {r!(n-r)!}
                        =
                        {}_nC_r
                        \end{aligned}
                    `}
                                />

                            </div>

                        </div>

                        <div className="mt-5 grid gap-3 text-gray-300 sm:grid-cols-[60px_1fr_1fr_1fr]">

                            <div className="hidden font-semibold text-white sm:block" />

                            <div className="hidden text-center font-semibold text-white sm:block">
                                (가)
                            </div>

                            <div className="hidden text-center font-semibold text-white sm:block">
                                (나)
                            </div>

                            <div className="hidden text-center font-semibold text-white sm:block">
                                (다)
                            </div>

                            {[
                                ["①", "(n-r+1)!", "(n-r)!", "(n-r+1)!"],
                                ["②", "(n-r+1)!", "n!", "n!"],
                                ["③", "(n-r-1)!", "n!", "(n-1)!"],
                                ["④", "(n-r)!", "(n-r)!", "n!"],
                                ["⑤", "(n-r)!", "n!", "(n-1)!"],
                            ].map(([number, ga, na, da]) => (
                                <div
                                    key={number}
                                    className="contents"
                                >
                                    <div className="rounded-lg bg-white/5 p-3 text-center font-semibold text-white">
                                        {number}
                                    </div>

                                    <div className="rounded-lg bg-white/5 p-3 text-center">
                                        <InlineMath math={ga} />
                                    </div>

                                    <div className="rounded-lg bg-white/5 p-3 text-center">
                                        <InlineMath math={na} />
                                    </div>

                                    <div className="rounded-lg bg-white/5 p-3 text-center">
                                        <InlineMath math={da} />
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            {/* (가) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (가)
                                </h4>

                                <p className="mt-4 leading-8">
                                    조합 공식을 앞, 차, 뒤로 조립하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{n-1}C_{r-1}
                        =
                        \frac{(n-1)!}
                        {\{(n-1)-(r-1)\}!(r-1)!}
                    `}
                                />

                                <p className="leading-8">
                                    이때 앞과 뒤의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (n-1)-(r-1)=n-r
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{(가)}}=(n-r)!
                    `}
                                />

                            </div>

                            {/* (나) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (나)
                                </h4>

                                <p className="mt-4 leading-8">
                                    두 번째 항의 분모는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        r!\{(n-1)-r\}!
                        =
                        r!(n-r-1)!
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 첫 번째 항과 분모를 같게 만들기 위해
                                    분자와 분모에 <InlineMath math="n-r" />을 곱합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{(n-1)!}{r!(n-r-1)!}
                        =
                        \frac{(n-r)(n-1)!}
                        {r!(n-r)!}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{(나)}}=(n-r)!
                    `}
                                />

                            </div>

                            {/* (다) */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    (다)
                                </h4>

                                <p className="mt-4 leading-8">
                                    분자를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \{(n-r)+r\}(n-1)!
                        &=n(n-1)!\\
                        &=n!
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{(다)}}=n!
                    `}
                                />

                            </div>

                            {/* 전체 증명 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    전체 증명
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        {}_{n-1}C_{r-1}+{}_{n-1}C_r
                        &=
                        \frac{(n-1)!}{(r-1)!(n-r)!}
                        +
                        \frac{(n-1)!}{r!(n-r-1)!}\\[2mm]
                        &=
                        \frac{r(n-1)!+(n-r)(n-1)!}
                        {r!(n-r)!}\\[2mm]
                        &=
                        \frac{n(n-1)!}
                        {r!(n-r)!}\\[2mm]
                        &=
                        \frac{n!}
                        {r!(n-r)!}\\[2mm]
                        &={}_nC_r
                        \end{aligned}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{(가)}=(n-r)!,
                        \qquad
                        \text{(나)}=(n-r)!,
                        \qquad
                        \text{(다)}=n!
                    `}
                                />

                                <BlockMath math="{④}" />

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
                            <InlineMath math="x" />에 대한 이차방정식
                        </p>

                        <BlockMath
                            math={String.raw`
                3x^2-{}_nC_r x-3{}_nP_r=0
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 근이 <InlineMath math="-2" />와{" "}
                            <InlineMath math="3" />일 때,{" "}
                            <InlineMath math="n+r" />의 값을 구하여라.
                            단, <InlineMath math="n" />과{" "}
                            <InlineMath math="r" />은 자연수이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                두 근이 <InlineMath math="-2,\ 3" />이므로
                                두 근의 합과 곱은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \text{두 근의 합}&=-2+3=1,\\
                    \text{두 근의 곱}&=(-2)\times3=-6
                    \end{aligned}
                `}
                            />

                            {/* 근의 합 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    1. 두 근의 합
                                </h4>

                                <p className="mt-4 leading-8">
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{{}_nC_r}{3}=1
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nC_r=3
                    `}
                                />

                            </div>

                            {/* 근의 곱 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    2. 두 근의 곱
                                </h4>

                                <p className="mt-4 leading-8">
                                    근과 계수와의 관계에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{-3{}_nP_r}{3}=-6
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nP_r=6
                    `}
                                />

                            </div>

                            {/* 순열과 조합의 관계 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    순열과 조합의 관계 이용
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    순열과 조합 사이에는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nP_r={}_nC_r\times r!
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 관계가 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math={String.raw`{}_nP_r=6`} />,{" "}
                                    <InlineMath math={String.raw`{}_nC_r=3`} />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6=3\times r!
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        r!=2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath math="r=2" />

                            </div>

                            {/* n 구하기 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    3. <InlineMath math="n" />의 값
                                </h4>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="r=2" />이고{" "}
                                    <InlineMath math={String.raw`{}_nC_r=3`} />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nC_2=3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \frac{n(n-1)}{2}=3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        n(n-1)=6
                    `}
                                />

                                <p className="leading-8">
                                    연속한 두 자연수의 곱이{" "}
                                    <InlineMath math="6=3\times2" />이므로
                                </p>

                                <BlockMath math="n=3" />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    n+r=3+2=5
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    정답
                                </p>

                                <BlockMath math="5" />

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
                            순열은 뽑은 뒤의 순서를 구별하고,
                            조합은 뽑은 뒤의 순서를 구별하지 않습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_nP_r={}_nC_r\times r!
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    {}_nC_r
                    =
                    \frac{n!}{(n-r)!r!}
                    =
                    \frac{\text{앞}!}
                    {\text{차}!\,\text{뒤}!}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    {}_nC_r={}_nC_{n-r}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            계산할 때는 뒤의 숫자가 작은 쪽을 사용하는 것이 유리합니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    {}_nC_0=1,
                    \qquad
                    {}_nC_n=1
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.17 조합의 경우의 수
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    조합은 대상을 배열하지 않고 뽑는 경우의 수입니다.
                    따라서 뽑힌 대상의 순서는 생각하지 않고,
                    각 대상이 포함되는지 포함되지 않는지만 생각합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    조건에 따라 가능한 경우를 빠짐없이 분류하고,
                    각 경우에서는 곱의 법칙을, 서로 다른 경우 사이에서는
                    합의 법칙을 사용합니다.
                </p>

                {/* 조합 문제의 핵심 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        조합 문제의 핵심
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                포함과 불포함
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                반드시 포함되는 대상은 먼저 뽑아 두고,
                                반드시 포함되지 않는 대상은 후보에서 제외합니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                조건에 따른 분류
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                남녀, 학년, 종류처럼 여러 집단이 있으면
                                각 집단에서 몇 명을 뽑는지에 따라 경우를 분류합니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{조건에 따라 분류}
                    \quad\longrightarrow\quad
                    \text{각 경우는 곱하기}
                    \quad\longrightarrow\quad
                    \text{서로 다른 경우는 더하기}
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
                            서로 다른 남학생 <InlineMath math="7" />명과
                            서로 다른 여학생 <InlineMath math="5" />명이 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이 학생들 중에서 대표 <InlineMath math="5" />명을 뽑는
                            경우의 수를 다음 조건에 따라 각각 구해 보겠습니다.
                        </p>

                    </div>

                    {/* 1 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            1. 조건 없이 대표 5명을 뽑는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            전체 학생은{" "}
                            <InlineMath math="7+5=12" />명이므로,
                            이 중 대표 <InlineMath math="5" />명을 뽑는 경우의 수는
                        </p>

                        <BlockMath math={String.raw`{}_{12}C_5`} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                남녀의 인원수에 따라 분류하기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                대표 <InlineMath math="5" />명을 뽑는다는 조건만 있으므로
                                남학생과 여학생이 각각 몇 명씩 뽑히는지는 정해져 있지 않습니다.
                            </p>

                            <div className="mt-5 overflow-x-auto">

                                <table className="w-full min-w-[620px] border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr className="border-b border-white/15">

                                            <th className="p-3 font-semibold text-white">
                                                남학생
                                            </th>

                                            <th className="p-3">5명</th>
                                            <th className="p-3">4명</th>
                                            <th className="p-3">3명</th>
                                            <th className="p-3">2명</th>
                                            <th className="p-3">1명</th>
                                            <th className="p-3">0명</th>

                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>

                                            <th className="p-3 font-semibold text-white">
                                                여학생
                                            </th>

                                            <td className="p-3">0명</td>
                                            <td className="p-3">1명</td>
                                            <td className="p-3">2명</td>
                                            <td className="p-3">3명</td>
                                            <td className="p-3">4명</td>
                                            <td className="p-3">5명</td>

                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            각 분류에서 남학생과 여학생을 모두 뽑아야 하므로
                            각 조합의 수를 곱합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    &{}_7C_5{\times}_5C_0
                    +{}_7C_4{\times}_5C_1
                    +{}_7C_3{\times}_5C_2\\
                    &\quad
                    +{}_7C_2{\times}_5C_3
                    +{}_7C_1{\times}_5C_4
                    +{}_7C_0{\times}_5C_5
                \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            위의 여섯 경우는 서로 겹치지 않고
                            대표 <InlineMath math="5" />명을 뽑는 모든 경우를
                            빠짐없이 포함합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    {}_{12}C_5
                    ={}&{}_7C_5{\times}_5C_0
                    +{}_7C_4{\times}_5C_1
                    +{}_7C_3{\times}_5C_2\\
                    &+{}_7C_2{\times}_5C_3
                    +{}_7C_1{\times}_5C_4
                    +{}_7C_0{\times}_5C_5
                    \end{aligned}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                            <p className="leading-8 text-gray-300">
                                하나의 조합식{" "}
                                <InlineMath math={String.raw`{}_{12}C_5`} /> 안에는
                                남녀의 인원 구성에 따른 여러 경우가 모두 포함되어 있습니다.
                                복잡한 조합 문제에서는 이와 같이 가능한 경우를
                                빠짐없이 분류하는 것이 중요합니다.
                            </p>

                        </div>

                    </div>

                    {/* 2 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            2. 남자 대표 3명과 여자 대표 2명을 뽑는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            남학생 <InlineMath math="7" />명 중{" "}
                            <InlineMath math="3" />명을 뽑는 경우의 수는
                        </p>

                        <BlockMath math={String.raw`{}_7C_3`} />

                        <p className="leading-8 text-gray-300">
                            이고, 여학생 <InlineMath math="5" />명 중{" "}
                            <InlineMath math="2" />명을 뽑는 경우의 수는
                        </p>

                        <BlockMath math={String.raw`{}_5C_2`} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            남자 대표와 여자 대표를 모두 뽑아야 하므로
                            곱의 법칙에 의하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_7C_3\times{}_5C_2
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">

                            <p className="leading-8 text-gray-300">
                                이 경우는 앞에서 분류한{" "}
                                <InlineMath math="(\text{남 }3,\ \text{여 }2)" />에
                                해당하는 한 가지 경우입니다.
                            </p>

                        </div>

                    </div>

                    {/* 3 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            3. 남학생 A는 포함하고 여학생 B는 포함하지 않는 대표 5명을 뽑는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            남학생 <InlineMath math="\mathrm{A}" />는 반드시 포함되므로
                            대표 한 명은 이미 정해져 있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            여학생 <InlineMath math="\mathrm{B}" />는 포함하지 않으므로
                            처음부터 후보에서 제외합니다.
                        </p>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    이미 포함
                                </p>

                                <BlockMath math="\mathrm{A}" />

                                <p className="leading-8 text-gray-300">
                                    대표 1명 확정
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    후보에서 제외
                                </p>

                                <BlockMath math="\mathrm{B}" />

                                <p className="leading-8 text-gray-300">
                                    선택할 수 없음
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            전체 <InlineMath math="12" />명 중{" "}
                            <InlineMath math="\mathrm{A,\ B}" />를 제외하면
                            선택 가능한 학생은 <InlineMath math="10" />명입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            대표 <InlineMath math="5" />명 중{" "}
                            <InlineMath math="\mathrm{A}" />가 이미 뽑혔으므로,
                            남은 <InlineMath math="4" />명을 뽑습니다.
                        </p>

                        <BlockMath math={String.raw`{}_{10}C_4`} />

                    </div>

                    {/* 4 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            4. 남학생 A는 포함하고 여학생 B는 포함하지 않으며,
                            남자 대표 3명과 여자 대표 2명을 뽑는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            남학생 <InlineMath math="\mathrm{A}" />가 이미 포함되었으므로
                            남자 대표는 <InlineMath math="2" />명을 더 뽑아야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            남은 남학생은 <InlineMath math="6" />명이므로
                        </p>

                        <BlockMath math={String.raw`{}_6C_2`} />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            여학생 <InlineMath math="\mathrm{B}" />는 후보에서 제외되므로
                            남은 여학생 <InlineMath math="4" />명 중
                            여자 대표 <InlineMath math="2" />명을 뽑습니다.
                        </p>

                        <BlockMath math={String.raw`{}_4C_2`} />

                        <p className="leading-8 text-gray-300">
                            남자 대표와 여자 대표를 모두 뽑아야 하므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_6C_2\times{}_4C_2
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                            <p className="leading-8 text-gray-300">
                                3번에서는 남녀의 인원이 정해져 있지 않아
                                남은 전체 학생 중에서 뽑았지만,
                                이 문제에서는 남자와 여자의 인원이 정해져 있으므로
                                두 집단을 나누어 각각 뽑습니다.
                            </p>

                        </div>

                    </div>

                    {/* 5 */}
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <h4 className="text-lg font-bold text-white">
                            5. 여학생이 적어도 2명 포함되도록 대표 5명을 뽑는 경우
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            여학생이 적어도 <InlineMath math="2" />명이라는 것은
                            여학생이 <InlineMath math="2,\ 3,\ 4,\ 5" />명인
                            모든 경우를 포함한다는 뜻입니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[620px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">

                                        <th className="p-3 font-semibold text-white">
                                            남학생
                                        </th>

                                        <th className="p-3">3명</th>
                                        <th className="p-3">2명</th>
                                        <th className="p-3">1명</th>
                                        <th className="p-3">0명</th>

                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>

                                        <th className="p-3 font-semibold text-white">
                                            여학생
                                        </th>

                                        <td className="p-3">2명</td>
                                        <td className="p-3">3명</td>
                                        <td className="p-3">4명</td>
                                        <td className="p-3">5명</td>

                                    </tr>
                                </tbody>

                            </table>

                        </div>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \text{여학생 2명}
                        &:{}_7C_3{\times}_5C_2\\
                        \text{여학생 3명}
                        &:{}_7C_2{\times}_5C_3\\
                        \text{여학생 4명}
                        &:{}_7C_1{\times}_5C_4\\
                        \text{여학생 5명}
                        &:{}_7C_0{\times}_5C_5
                        \end{aligned}
                    `}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            네 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    {}_7C_3{\times}_5C_2
                    +{}_7C_2{\times}_5C_3
                    +{}_7C_1{\times}_5C_4
                    +{}_7C_0{\times}_5C_5
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                ‘적어도’의 해석
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                ‘적어도’, ‘이상’이라는 조건이 나오면
                                조건을 만족하는 모든 경우를 빠짐없이 분류한 뒤
                                각 경우의 수를 더합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 비교 정리 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        조건에 따른 식 비교
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[920px] border-collapse text-left text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">

                                    <th className="p-3 font-semibold text-white">
                                        조건
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        처리 방법
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        경우의 수
                                    </th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        대표 5명
                                    </td>

                                    <td className="p-3">
                                        전체에서 5명 선택
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math={String.raw`{}_{12}C_5`} />
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        남자 3명, 여자 2명
                                    </td>

                                    <td className="p-3">
                                        남녀를 나누어 각각 선택
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math={String.raw`{}_7C_3{\times}_5C_2`} />
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        A 포함, B 제외
                                    </td>

                                    <td className="p-3">
                                        A를 먼저 포함하고 B를 후보에서 제외
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math={String.raw`{}_{10}C_4`} />
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        A 포함, B 제외, 남자 3명, 여자 2명
                                    </td>

                                    <td className="p-3">
                                        포함·제외 처리 후 남녀를 나누어 선택
                                    </td>

                                    <td className="p-3">
                                        <InlineMath math={String.raw`{}_6C_2{\times}_4C_2`} />
                                    </td>

                                </tr>

                                <tr>

                                    <td className="p-3">
                                        여학생이 적어도 2명
                                    </td>

                                    <td className="p-3">
                                        여학생 수가 2, 3, 4, 5인 경우를 분류
                                    </td>

                                    <td className="p-3">
                                        <InlineMath
                                            math={String.raw`
                                    {}_7C_3{\times}_5C_2
                                    +{}_7C_2{\times}_5C_3
                                    +{}_7C_1{\times}_5C_4
                                    +{}_7C_0{\times}_5C_5
                                `}
                                        />
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        조합의 경우의 수 풀이 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 반드시 포함되는 대상은 먼저 뽑아 둡니다.
                        </p>

                        <p>
                            ② 반드시 포함되지 않는 대상은 후보에서 제외합니다.
                        </p>

                        <p>
                            ③ 남녀, 학년, 종류별 인원이 정해져 있으면
                            각 집단을 나누어 뽑습니다.
                        </p>

                        <p>
                            ④ 하나의 경우에서 여러 집단을 모두 선택하면
                            곱의 법칙을 사용합니다.
                        </p>

                        <p>
                            ⑤ ‘적어도’, ‘이상’처럼 여러 경우를 포함하는 조건은
                            가능한 경우를 빠짐없이 분류합니다.
                        </p>

                        <p>
                            ⑥ 서로 겹치지 않는 분류의 경우의 수는
                            합의 법칙으로 더합니다.
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
                            서로 다른 수학책 <InlineMath math="5" />권,
                            서로 다른 영어책 <InlineMath math="5" />권,
                            서로 다른 국어책 <InlineMath math="4" />권 중에서{" "}
                            <InlineMath math="3" />권의 책을 택할 때,
                            모두 같은 과목의 책을 택하는 방법의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                모두 같은 과목의 책을 택하는 경우는
                                다음 세 가지로 분류할 수 있습니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-3">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        수학책 3권
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        수학책 <InlineMath math="5" />권 중{" "}
                                        <InlineMath math="3" />권을 택합니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_5C_3`} />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        영어책 3권
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        영어책 <InlineMath math="5" />권 중{" "}
                                        <InlineMath math="3" />권을 택합니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_5C_3`} />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        국어책 3권
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        국어책 <InlineMath math="4" />권 중{" "}
                                        <InlineMath math="3" />권을 택합니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_4C_3`} />

                                </div>

                            </div>

                            <p className="leading-8">
                                세 경우는 동시에 일어날 수 없으므로
                                합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_5C_3+{}_5C_3+{}_4C_3
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_5C_3+{}_5C_3+{}_4C_3
                    &=10+10+4\\
                    &=24
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    ‘모두 같은 과목’이라는 조건은
                                    수학책만 택하는 경우, 영어책만 택하는 경우,
                                    국어책만 택하는 경우로 분류한다는 뜻입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{과목별로 분류}
                        \quad\longrightarrow\quad
                        \text{각 경우는 조합}
                        \quad\longrightarrow\quad
                        \text{마지막에 더하기}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 구하는 방법의 수는
                                </p>

                                <BlockMath math="24" />

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
                            남학생 <InlineMath math="5" />명과 여학생{" "}
                            <InlineMath math="n" />명으로 이루어진 농구 동아리에서
                            남학생 <InlineMath math="2" />명, 여학생{" "}
                            <InlineMath math="3" />명을 대표로 뽑는 방법의 수가{" "}
                            <InlineMath math="560" />일 때,{" "}
                            <InlineMath math="n" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                남학생과 여학생을 각각 정해진 수만큼 뽑아야 하므로
                                두 조합의 수를 곱합니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        남학생 대표
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        남학생 <InlineMath math="5" />명 중{" "}
                                        <InlineMath math="2" />명을 뽑습니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_5C_2`} />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5 text-center">

                                    <p className="font-semibold text-white">
                                        여학생 대표
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        여학생 <InlineMath math="n" />명 중{" "}
                                        <InlineMath math="3" />명을 뽑습니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_nC_3`} />

                                </div>

                            </div>

                            <p className="leading-8">
                                남학생 대표와 여학생 대표를 모두 뽑아야 하므로
                                곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_5C_2\times{}_nC_3=560
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math={String.raw`{}_5C_2=10`} />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    10\times{}_nC_3=560
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    {}_nC_3=56
                `}
                            />

                            <p className="leading-8">
                                조합식을 곱셈식으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
        \frac{n(n-1)(n-2)}{3\times2\times1}=56
    `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
        n(n-1)(n-2)=56\times6
    `}
                            />

                            <p className="leading-8">
                                우변을 연속한 세 자연수의 곱으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
        56\times6
        =6\times7\times8
    `}
                            />

                            <p className="leading-8">
                                왼쪽도 연속한 세 자연수의 곱이므로
                            </p>

                            <BlockMath
                                math={String.raw`
        n-2=6,\qquad n-1=7,\qquad n=8
    `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    삼차방정식으로 전개하지 않고,
                                    우변을 연속한 세 자연수의 곱으로 나타내어 비교합니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath math="n=8" />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 다른 두 집단에서 정해진 수만큼 대표를 뽑는 경우에는
                                    각 집단의 조합을 구한 뒤 곱의 법칙을 사용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{남학생에서 선택}
                        \times
                        \text{여학생에서 선택}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="n=8" />

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
                            <InlineMath math="8" />개의 숫자{" "}
                            <InlineMath math="0,\ 0,\ 0,\ 1,\ 1,\ 1,\ 1,\ 1" />을{" "}
                            <InlineMath math="0" />끼리는 어느 것도 이웃하지 않도록
                            일렬로 나열하여 만들 수 있는{" "}
                            <InlineMath math="8" />자리 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="0" />끼리 이웃하지 않도록 하려면
                                먼저 숫자 <InlineMath math="1" /> 다섯 개를 배열한 뒤,
                                만들어지는 빈칸에 <InlineMath math="0" />을 하나씩 넣습니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <div className="min-w-[660px] text-center text-xl tracking-wider text-gray-300">

                                    <span className="text-red-300">□</span>
                                    <span className="mx-3">1</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">1</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">1</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">1</span>

                                    <span className="text-yellow-300">□</span>
                                    <span className="mx-3">1</span>

                                    <span className="text-yellow-300">□</span>

                                </div>

                            </div>

                            <p className="leading-8">
                                다섯 개의 <InlineMath math="1" />의 앞, 사이, 뒤에는
                                모두 <InlineMath math="6" />개의 빈칸이 만들어집니다.
                            </p>

                            <p className="leading-8">
                                그러나 맨 앞의 빈칸에 <InlineMath math="0" />을 넣으면
                                첫째 자리가 <InlineMath math="0" />이 되어{" "}
                                <InlineMath math="8" />자리 자연수가 되지 않습니다.
                            </p>

                            <p className="leading-8">
                                따라서 맨 앞의 빈칸을 제외한{" "}
                                <InlineMath math="5" />개의 빈칸 중에서{" "}
                                <InlineMath math="0" />을 넣을{" "}
                                <InlineMath math="3" />개의 빈칸을 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_5C_3
                `}
                            />

                            <p className="leading-8">
                                세 개의 <InlineMath math="0" />은 서로 같으므로,
                                선택한 세 빈칸에 하나씩 넣는 방법은 각 선택마다 한 가지입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_5C_3
                    =
                    10
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    같은 숫자 <InlineMath math="0" />을 직접 배열하지 않고,{" "}
                                    <InlineMath math="0" />이 들어갈 서로 다른 빈칸을
                                    선택하는 조합 문제로 생각합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    또한 자연수의 첫째 자리에는{" "}
                                    <InlineMath math="0" />이 올 수 없으므로
                                    맨 앞의 빈칸은 선택할 수 없습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 만들 수 있는 8자리 자연수의 개수는
                                </p>

                                <BlockMath math="10" />

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
                            월드컵 축구대회에 참가한{" "}
                            <InlineMath math="n" />개의 팀이 다른 팀과 모두 한 번씩
                            경기를 하였다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이 대회의 경기 수가 <InlineMath math="120" />회였을 때,
                            자연수 <InlineMath math="n" />의 값을 구하여라.
                            단, <InlineMath math="n\geq2" />이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                한 경기는 서로 다른 두 팀을 선택하면 정해집니다.
                            </p>

                            <p className="leading-8">
                                두 팀이 경기하는 순서는 없으므로{" "}
                                <InlineMath math="n" />개의 팀 중{" "}
                                <InlineMath math="2" />개의 팀을 뽑는 조합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_nC_2=120
                `}
                            />

                            <p className="leading-8">
                                조합식을 곱셈식으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{n(n-1)}{2}=120
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    n(n-1)=240
                `}
                            />

                            <p className="leading-8">
                                왼쪽은 연속한 두 자연수의 곱입니다.
                                우변을 연속한 두 자연수의 곱으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
                    240=16\times15
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    n=16
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 다른 두 팀을 선택하면 한 경기가 정해집니다.
                                    어느 팀을 먼저 선택했는지는 경기의 구별에 영향을 주지 않으므로
                                    순열이 아니라 조합을 사용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{경기 한 번}
                        \quad\Longleftrightarrow\quad
                        \text{서로 다른 두 팀의 선택}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    계산 방법
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="n(n-1)=240" />을 이차방정식으로
                                    전개하기보다, <InlineMath math="240" />을 연속한 두 자연수의
                                    곱으로 나타내어 비교하는 것이 편리합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="n=16" />

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
                            어느 모임에 참석한 <InlineMath math="10" />쌍의 부부가 있다.
                            부인과 남편은 자신의 배우자를 제외한 모든 사람들과
                            한 번씩 악수를 할 때,
                            모임에 참석한 <InlineMath math="10" />쌍의 부부가 한 악수의
                            총 횟수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 풀이1 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    풀이 ① 조합을 이용하는 방법
                                </h4>

                                <p className="mt-4 leading-8">
                                    전체 사람은{" "}
                                    <InlineMath math="20" />명입니다.
                                </p>

                                <p className="leading-8">
                                    먼저 서로 다른 두 사람을 선택하는 경우의 수는
                                </p>

                                <BlockMath math={String.raw`{}_{20}C_2`} />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그러나 부부끼리는 악수하지 않으므로{" "}
                                    <InlineMath math="10" />쌍의 부부를 제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{20}C_2-10
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =190-10=180
                    `}
                                />

                            </div>

                            {/* 풀이2 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="text-lg font-bold text-white">
                                    풀이 ② 한 사람씩 세는 방법
                                </h4>

                                <p className="mt-4 leading-8">
                                    한 사람은 자기 자신과 자신의 배우자를 제외한
                                    나머지{" "}
                                    <InlineMath math="18" />명과 악수합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        18
                    `}
                                />

                                <p className="leading-8">
                                    이러한 사람이 모두{" "}
                                    <InlineMath math="20" />명이므로
                                    악수 횟수를 모두 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        18\times20
                    `}
                                />

                                <p className="leading-8">
                                    이 됩니다.
                                </p>

                                <p className="leading-8">
                                    그러나 한 번의 악수를
                                    두 사람이 각각 한 번씩 센 것이므로
                                    모든 악수는 두 번씩 계산되었습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{18\times20}{2}=180
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    두 풀이의 비교
                                </p>

                                <ul className="mt-3 space-y-2 leading-8 text-gray-300 list-disc list-inside">

                                    <li>
                                        풀이 ①은 두 사람을 선택하는 조합을 이용한 풀이입니다.
                                    </li>

                                    <li>
                                        풀이 ②는 한 사람씩 악수 횟수를 모두 센 뒤,
                                        한 번의 악수가 두 번씩 계산되었으므로
                                        마지막에 <InlineMath math="2" />로 나누는 방법입니다.
                                    </li>

                                </ul>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 악수의 총 횟수는
                                </p>

                                <BlockMath math="180" />

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
                            남녀 <InlineMath math="9" />명 중에서 대표{" "}
                            <InlineMath math="4" />명을 뽑을 때,
                            적어도 한 명의 남자가 포함되는 경우의 수가{" "}
                            <InlineMath math="111" />이다.{" "}
                            <InlineMath math="9" />명 중 남자의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                남자의 수를 <InlineMath math="m" />명이라고 하면
                                여자의 수는
                            </p>

                            <BlockMath math="9-m" />

                            <p className="leading-8">
                                명입니다.
                            </p>

                            <p className="leading-8">
                                ‘적어도 한 명의 남자가 포함된다’는 경우를
                                남자의 수에 따라 직접 분류할 수도 있지만,
                                반대인{" "}
                                <b className="text-white"> 남자가 한 명도 포함되지 않는 경우</b>를
                                전체에서 빼는 것이 편리합니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    여사건을 이용하기
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{남자가 적어도 한 명}
                        =
                        \text{전체}
                        -
                        \text{모두 여자}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                전체 <InlineMath math="9" />명 중 대표{" "}
                                <InlineMath math="4" />명을 뽑는 경우의 수는
                            </p>

                            <BlockMath math={String.raw`{}_9C_4`} />

                            <p className="leading-8">
                                이고, 모두 여자만 뽑는 경우의 수는
                            </p>

                            <BlockMath math={String.raw`{}_{9-m}C_4`} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_9C_4-{}_{9-m}C_4=111
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math={String.raw`{}_9C_4=126`} />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    126-{}_{9-m}C_4=111
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    {}_{9-m}C_4=15
                `}
                            />

                            <p className="leading-8">
                                조합의 성질을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_6C_4
                    =
                    {}_6C_2
                    =
                    15
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    9-m=6
                `}
                            />

                            <BlockMath math="m=3" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    ‘적어도 한 명’의 경우는 남자가{" "}
                                    <InlineMath math="1,\ 2,\ 3,\ 4" />명인 경우를
                                    모두 분류하여 더할 수도 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 이 문제에서는 반대인
                                    ‘남자가 한 명도 없는 경우’가 한 가지 분류뿐이므로
                                    전체에서 빼는 것이 더 간단합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 남자의 수는
                                </p>

                                <BlockMath math="3" />

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
                            <InlineMath math="1" />에서{" "}
                            <InlineMath math="12" />까지의 정수 중
                            서로 다른 세 수를 뽑을 때,
                            그 합이 <InlineMath math="3" />의 배수인 경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                먼저 수를{" "}
                                <InlineMath math="3" />으로 나눈 나머지에 따라 분류합니다.
                            </p>

                            <div className="grid gap-5 md:grid-cols-3">

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="text-center font-semibold text-white">
                                        나머지 0
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            3,\;6,\;9,\;12
                        `}
                                    />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="text-center font-semibold text-white">
                                        나머지 1
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            1,\;4,\;7,\;10
                        `}
                                    />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="text-center font-semibold text-white">
                                        나머지 2
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            2,\;5,\;8,\;11
                        `}
                                    />

                                </div>

                            </div>

                            <p className="leading-8">
                                세 수의 합이{" "}
                                <InlineMath math="3" />의 배수가 되는 경우는
                            </p>

                            <ul className="list-disc list-inside space-y-2">

                                <li>나머지가 모두 같은 경우</li>
                                <li>나머지가 0, 1, 2인 수를 하나씩 선택하는 경우</li>

                            </ul>

                            <h4 className="font-semibold text-white">
                                ① 나머지가 모두 같은 경우
                            </h4>

                            <BlockMath
                                math={String.raw`
                    {}_4C_3+{}_4C_3+{}_4C_3
                    =4+4+4=12
                `}
                            />

                            <h4 className="font-semibold text-white">
                                ② 나머지가 0, 1, 2인 수를 하나씩 선택하는 경우
                            </h4>

                            <BlockMath
                                math={String.raw`
                    {}_4C_1
                    \times
                    {}_4C_1
                    \times
                    {}_4C_1
                    =
                    4\times4\times4
                    =
                    64
                `}
                            />

                            <p className="leading-8">
                                따라서 구하는 경우의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    12+64=76
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    합이 <InlineMath math="3" />의 배수인지 판단할 때는
                                    먼저 수를 나머지{" "}
                                    <InlineMath math="0,\;1,\;2" />로 분류합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        0+0+0,\;
                        1+1+1,\;
                        2+2+2,\;
                        0+1+2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    만이{" "}
                                    <InlineMath math="3" />의 배수가 되므로
                                    이 네 경우만 조사하면 됩니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 경우의 수는
                                </p>

                                <BlockMath math="76" />

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
                            서로 다른 다섯 종류의 인형이 각각{" "}
                            <InlineMath math="2" />개씩 있다.
                            이 <InlineMath math="10" />개의 인형 중에서{" "}
                            <InlineMath math="5" />개를 선택하는 경우의 수를 구하여라.
                            (단, 같은 종류의 인형끼리는 서로 구별하지 않는다.)
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                같은 종류의 인형은 최대{" "}
                                <InlineMath math="2" />개까지 선택할 수 있으므로,{" "}
                                <InlineMath math="2" />개를 선택한 종류의 개수에 따라
                                경우를 나눕니다.
                            </p>

                            {/* 경우 1 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ① 한 종류도 2개 선택하지 않는 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    다섯 종류를 모두 하나씩 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_5C_5=1
                    `}
                                />

                            </div>

                            {/* 경우 2 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ② 한 종류만 2개 선택하는 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    먼저 두 개를 선택할 종류를 고르고,
                                    나머지 네 종류 중에서 세 종류를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_5C_1\times{}_4C_3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =5\times4=20
                    `}
                                />

                            </div>

                            {/* 경우 3 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ③ 두 종류를 각각 2개씩 선택하는 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    먼저 두 개씩 선택할 두 종류를 고르고,
                                    남은 세 종류 중에서 한 종류를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_5C_2\times{}_3C_1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =10\times3=30
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 전체 경우의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    1+20+30=51
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    같은 종류의 인형은 서로 구별하지 않으므로
                                    개별 인형을 선택하는 것이 아니라,{" "}
                                    <strong>두 개를 선택한 종류가 몇 개인지</strong>에 따라
                                    분류하면 쉽게 해결할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{2개 선택한 종류의 수}
                        \rightarrow
                        0,\;1,\;2
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 경우의 수는
                                </p>

                                <BlockMath math="51" />

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
                    \text{조합}
                    \quad\Longrightarrow\quad
                    \text{배열하지 않고 포함과 불포함만 생각}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \text{각 집단에서 모두 선택}
                    \quad\Longrightarrow\quad
                    \text{곱의 법칙}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \text{조건에 따른 서로 다른 분류}
                    \quad\Longrightarrow\quad
                    \text{합의 법칙}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{분류}
                    \rightarrow
                    \text{곱하기}
                    \rightarrow
                    \text{더하기}
                    }
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.18 조합과 순열의 경우의 수
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    조합과 순열을 함께 사용하는 문제는 먼저 필요한 사람이나 물건을
                    뽑은 후, 뽑은 것을 배열하는 순서로 해결합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    조건이 여러 가지이면 가능한 경우를 먼저 분류하고,
                    각 경우마다 뽑기와 배열을 차례대로 계산합니다.
                </p>

                {/* 조합과 순열의 역할 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        조합과 순열의 역할
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                조합
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                필요한 사람이나 물건을 먼저 뽑는 과정입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{누구를 뽑을 것인가?}
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                순열
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                뽑은 사람이나 물건을 자리에 배열하는 과정입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{뽑은 것을 어디에 놓을 것인가?}
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{뽑기}
                    \quad\longrightarrow\quad
                    \text{배열}
                    }
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            조합과 순열을 함께 사용하는 문제에서는
                            항상 뽑기를 먼저 하고 배열합니다.
                        </p>

                    </div>

                </div>

                {/* 기본 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        기본 풀이 순서
                    </h3>

                    <p className="leading-8 text-gray-300">
                        조합과 순열을 함께 사용하는 문제는 다음 순서로 생각합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{gathered}
                    \text{조건 확인}\\
                    \downarrow\\
                    \text{경우 분류}\\
                    \downarrow\\
                    \text{조합으로 뽑기}\\
                    \downarrow\\
                    \text{곱의 법칙으로 배열}\\
                    \downarrow\\
                    \text{각 경우의 수 더하기}
                    \end{gathered}
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        경우가 하나뿐이라면 분류하거나 마지막에 더하는 과정은
                        생략할 수 있습니다.
                    </p>

                </div>

                {/* 뽑은 후 배열하기 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        뽑은 후 배열하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        학생 <InlineMath math="8" />명 중 대표{" "}
                        <InlineMath math="3" />명을 뽑아 회장, 부회장, 총무를
                        정하는 경우를 생각해 보겠습니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                1. 대표 3명 뽑기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                학생 <InlineMath math="8" />명 중 대표{" "}
                                <InlineMath math="3" />명을 뽑습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_8C_3
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                2. 역할 정하기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                뽑은 세 명을 회장, 부회장, 총무의 세 자리에
                                배열합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        3\times2\times1
                    `}
                            />

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 곱의 법칙에 의하여
                    </p>

                    <BlockMath
                        math={String.raw`
                {}_8C_3\times3\times2\times1
            `}
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            순서가 중요합니다
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            회장, 부회장, 총무를 먼저 정한 뒤 대표를 뽑는 것이 아니라,
                            대표로 활동할 세 명을 먼저 뽑은 뒤 역할을 정합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{대표 뽑기}
                    \quad\longrightarrow\quad
                    \text{역할 정하기}
                `}
                        />

                    </div>

                </div>

                {/* P기호보다 곱의 법칙 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        P기호보다 곱의 법칙으로 생각하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        배열하는 과정에서 무리하게{" "}
                        <InlineMath math="P" />기호를 사용하기보다,
                        각 자리에 들어갈 수 있는 경우의 수를 차례대로 곱하는 것이
                        안전합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="font-semibold text-white">
                            예
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            뽑은 세 명을 회장, 부회장, 총무로 정하는 경우
                        </p>

                        <div className="mt-5 grid gap-4 sm:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    회장
                                </p>

                                <BlockMath math="3" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    부회장
                                </p>

                                <BlockMath math="2" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <p className="font-semibold text-white">
                                    총무
                                </p>

                                <BlockMath math="1" />

                            </div>

                        </div>

                        <BlockMath
                            math={String.raw`
                    3\times2\times1
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="font-semibold text-blue-300">
                            P기호를 바로 사용하지 않는 이유
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="P" />기호는 뽑기와 배열을 한 번에
                            포함하는 기호입니다.
                            조건이 여러 개인 문제에서 바로 사용하면
                            어떤 대상을 뽑았고 어떻게 배열했는지가 드러나지 않아
                            잘못 계산했을 때 되돌리기 어렵습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 조합으로 뽑는 과정을 분명히 나타낸 뒤,
                            배열은 곱의 법칙으로 계산하는 것이 좋습니다.
                        </p>

                    </div>

                </div>

                {/* 여러 경우가 있는 문제 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        경우가 여러 가지일 때
                    </h3>

                    <p className="leading-8 text-gray-300">
                        조건을 만족하는 방법이 여러 종류라면
                        먼저 가능한 경우를 빠짐없이 분류합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        각 분류 안에서는 뽑기와 배열을 차례대로 계산하고,
                        서로 다른 분류의 경우의 수를 마지막에 더합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{분류}
                    \quad\longrightarrow\quad
                    \text{뽑기}
                    \quad\longrightarrow\quad
                    \text{배열}
                    \quad\longrightarrow\quad
                    \text{더하기}
                    }
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            예
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            남학생과 여학생 중 대표를 뽑아 서로 다른 역할을 정할 때,
                            가능한 남녀의 인원 구성이 여러 가지라면
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl bg-white/5 p-4 text-center">

                                <p className="font-semibold text-white">
                                    1단계
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    남녀 인원에 따라 분류
                                </p>

                            </div>

                            <div className="rounded-xl bg-white/5 p-4 text-center">

                                <p className="font-semibold text-white">
                                    2단계
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    각 집단에서 대표 뽑기
                                </p>

                            </div>

                            <div className="rounded-xl bg-white/5 p-4 text-center">

                                <p className="font-semibold text-white">
                                    3단계
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    뽑은 대표를 역할에 배열
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 조합만 사용하는 문제와 비교 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        조합만 사용하는 문제와 비교
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                대표만 뽑는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                대표 사이의 역할이나 순서가 없습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{조합만 사용}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                대표를 뽑아 역할을 정하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                대표를 뽑은 뒤 서로 다른 역할에 배열합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{조합}
                        \quad\longrightarrow\quad
                        \text{배열}
                    `}
                            />

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        문제에서 단순히 뽑기만 하는지,
                        뽑은 뒤 자리를 정하거나 일렬로 배열하는지를 반드시 구분해야 합니다.
                    </p>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 뽑을 대상이 정해지기 전에 배열부터 계산하지 않습니다.
                        </p>

                        <p>
                            ② 경우가 여러 가지인데 하나의 식으로 무리하게 계산하지 않습니다.
                        </p>

                        <p>
                            ③ 조합으로 뽑은 뒤 순서가 생기는지 반드시 확인합니다.
                        </p>

                        <p>
                            ④ 배열은 P기호보다 각 자리를 채우는 곱의 법칙으로 계산합니다.
                        </p>

                        <p>
                            ⑤ 서로 다른 분류의 경우의 수는 마지막에 합의 법칙으로 더합니다.
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
                            효리와 이안이를 포함한 <InlineMath math="8" />명 중에서{" "}
                            <InlineMath math="5" />명을 뽑아 일렬로 세울 때,
                            효리와 이안이가 모두 포함되고 이 두 명이 서로 이웃하도록
                            세우는 경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                효리와 이안이는 반드시 포함되므로 먼저 두 사람을 뽑아 둡니다.
                            </p>

                            <p className="leading-8">
                                나머지 <InlineMath math="6" />명 중에서 함께 세울{" "}
                                <InlineMath math="3" />명을 뽑습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_6C_3
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    1. 뽑기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    효리와 이안이를 제외한 나머지{" "}
                                    <InlineMath math="6" />명 중{" "}
                                    <InlineMath math="3" />명을 뽑습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_6C_3
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    2. 배열
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    효리와 이안이가 서로 이웃해야 하므로
                                    두 사람을 하나의 묶음으로 처리합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    효리와 이안이의 묶음{" "}
                                    <InlineMath math="1" />개와 나머지{" "}
                                    <InlineMath math="3" />명을 합하면{" "}
                                    모두 <InlineMath math="4" />개의 대상입니다.
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-2">

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            전체 자리바꿈
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            묶음과 나머지 세 명을 배열합니다.
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                4\times3\times2\times1
                            `}
                                        />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            묶음 안의 자리바꿈
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            효리와 이안이가 서로 자리를 바꿉니다.
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                2
                            `}
                                        />

                                    </div>

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 조합으로 세 명을 뽑은 뒤,
                                뽑은 사람들을 조건에 맞게 배열하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_6C_3
                    \times
                    4\times3\times2\times1
                    \times2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_6C_3
                    \times4\times3\times2\times1\times2
                    &=20\times24\times2\\
                    &=960
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{나머지 3명 뽑기}
                        \quad\longrightarrow\quad
                        \text{두 사람을 묶어 배열}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    효리와 이안이는 이미 포함되어 있으므로
                                    나머지 사람만 조합으로 뽑습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그다음 두 사람이 이웃하도록 하나로 묶고,
                                    전체 자리바꿈과 묶음 안의 자리바꿈을 곱합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 경우의 수는
                                </p>

                                <BlockMath math="960" />

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
                            마라톤 동호회의 회원 중에서 특정한{" "}
                            <InlineMath math="2" />명을 포함하여{" "}
                            <InlineMath math="4" />명을 뽑아 일렬로 세우는 경우의 수가{" "}
                            <InlineMath math="504" />일 때,
                            이 동호회의 전체 회원 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                동호회의 전체 회원 수를{" "}
                                <InlineMath math="n" />명이라고 하겠습니다.
                            </p>

                            <p className="leading-8">
                                특정한 <InlineMath math="2" />명은 반드시 포함되므로
                                먼저 뽑아 둡니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    1. 뽑기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    특정한 두 명을 제외한 나머지{" "}
                                    <InlineMath math="n-2" />명 중에서
                                    함께 세울 <InlineMath math="2" />명을 더 뽑습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_{n-2}C_2
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    2. 배열
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    뽑힌 <InlineMath math="4" />명을 일렬로 세웁니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    첫째 자리부터 차례대로 세우는 방법은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4\times3\times2\times1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 뽑은 뒤 배열하는 전체 경우의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_{n-2}C_2
                    \times
                    4\times3\times2\times1
                    =504
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="4\times3\times2\times1=24" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_{n-2}C_2\times24=504
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    {}_{n-2}C_2=21
                `}
                            />

                            <p className="leading-8">
                                조합식을 곱셈식으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{(n-2)(n-3)}{2}=21
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    (n-2)(n-3)=42
                `}
                            />

                            <p className="leading-8">
                                왼쪽은 연속한 두 자연수의 곱이고
                            </p>

                            <BlockMath
                                math={String.raw`
                    42=7\times6
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    n-2=7,\qquad n-3=6
                `}
                            />

                            <BlockMath math="n=9" />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{특정한 2명 포함}
                        \quad\longrightarrow\quad
                        \text{나머지 2명 뽑기}
                        \quad\longrightarrow\quad
                        \text{4명 배열}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    반드시 포함되는 두 명을 먼저 뽑아 둔 뒤,
                                    나머지 두 명만 조합으로 선택합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그다음 뽑힌 네 명을 일렬로 배열하므로{" "}
                                    <InlineMath math="4\times3\times2\times1" />을 곱합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 전체 회원 수는
                                </p>

                                <BlockMath math="9" />

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
                            <InlineMath math="1" />부와 <InlineMath math="2" />부로 나누어
                            진행하는 어느 무용회에서 솔로 <InlineMath math="2" />팀,
                            듀엣 <InlineMath math="3" />팀, 앙상블 <InlineMath math="3" />팀이
                            모두 공연할 때, 다음 두 조건에 따라{" "}
                            <InlineMath math="8" />팀의 공연 순서를 정하려고 한다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                            <p className="leading-8 text-gray-300">
                                (가) <InlineMath math="1" />부에는 솔로, 듀엣, 듀엣,
                                앙상블 순으로 <InlineMath math="4" />팀이 공연한다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (나) <InlineMath math="2" />부에는 솔로, 듀엣, 앙상블,
                                앙상블 순으로 <InlineMath math="4" />팀이 공연한다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            이 무용회의 공연 순서를 정하는 방법의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                솔로, 듀엣, 앙상블은 서로 들어갈 수 있는 자리가 다르므로
                                종류별로 나누어 공연할 팀을 정한 뒤 배열합니다.
                            </p>

                            {/* 솔로 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    1. 솔로 팀 정하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    솔로 <InlineMath math="2" />팀 중{" "}
                                    <InlineMath math="1" />부에서 공연할 팀을 정하면,
                                    나머지 한 팀은 자동으로 <InlineMath math="2" />부에서
                                    공연합니다.
                                </p>

                                <BlockMath math="2" />

                            </div>

                            {/* 듀엣 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    2. 듀엣 팀 정하고 배열하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    듀엣 <InlineMath math="3" />팀 중{" "}
                                    <InlineMath math="1" />부에서 공연할{" "}
                                    <InlineMath math="2" />팀을 먼저 뽑습니다.
                                </p>

                                <BlockMath math={String.raw`{}_3C_2`} />

                                <p className="leading-8 text-gray-300">
                                    뽑은 두 팀을 <InlineMath math="1" />부의 두 듀엣 자리에
                                    배열하는 방법은
                                </p>

                                <BlockMath math="2\times1" />

                                <p className="leading-8 text-gray-300">
                                    가지이고, 남은 한 팀은{" "}
                                    <InlineMath math="2" />부의 듀엣 자리에 자동으로 배정됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_3C_2\times2\times1=6
                    `}
                                />

                            </div>

                            {/* 앙상블 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    3. 앙상블 팀 정하고 배열하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    앙상블 <InlineMath math="3" />팀 중{" "}
                                    <InlineMath math="1" />부에서 공연할{" "}
                                    <InlineMath math="1" />팀을 먼저 뽑습니다.
                                </p>

                                <BlockMath math={String.raw`{}_3C_1`} />

                                <p className="leading-8 text-gray-300">
                                    남은 두 팀을 <InlineMath math="2" />부의 두 앙상블 자리에
                                    배열하는 방법은
                                </p>

                                <BlockMath math="2\times1" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_3C_1\times2\times1=6
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                솔로, 듀엣, 앙상블 팀을 모두 정해야 하므로
                                곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    2
                    \times
                    \left({}_3C_2\times2\times1\right)
                    \times
                    \left({}_3C_1\times2\times1\right)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    2\times6\times6
                    &=72
                    \end{aligned}
                `}
                            />

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{종류별로 분류}
                        \quad\longrightarrow\quad
                        \text{각 부에서 공연할 팀 뽑기}
                        \quad\longrightarrow\quad
                        \text{같은 종류의 자리에 배열}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    듀엣과 앙상블처럼 같은 종류의 자리가 두 개 있으면
                                    그 자리에 들어갈 팀을 먼저 뽑은 뒤,
                                    뽑은 팀들의 공연 순서를 정해야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    배열하는 과정은 무리하게{" "}
                                    <InlineMath math="P" />기호를 사용하지 않고{" "}
                                    <InlineMath math="2\times1" />과 같이
                                    곱의 법칙으로 계산합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 공연 순서를 정하는 방법의 수는
                                </p>

                                <BlockMath math="72" />

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
                            <InlineMath math="1" />부터 <InlineMath math="9" />까지의 자연수{" "}
                            <InlineMath math="a,\ b,\ c,\ d" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                a\times10^3+b\times10^2+c\times10+d
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타낼 수 있는 네 자리 자연수 중에서{" "}
                            <InlineMath math="a<b<c\le d" />를 만족시키는
                            자연수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                조건 <InlineMath math="a<b<c\le d" />에서{" "}
                                <InlineMath math="c" />와 <InlineMath math="d" />가
                                같은지 다른지에 따라 경우를 분류합니다.
                            </p>

                            {/* 경우 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    ① <InlineMath math="c<d" />인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이때 네 숫자는 모두 서로 다르고
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a<b<c<d
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="1" />부터 <InlineMath math="9" />까지의
                                    숫자 중 서로 다른 네 숫자를 뽑으면,
                                    작은 수부터 차례대로{" "}
                                    <InlineMath math="a,\ b,\ c,\ d" />에 놓이는 방법은
                                    한 가지뿐입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_9C_4
                    `}
                                />

                            </div>

                            {/* 경우 2 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    ② <InlineMath math="c=d" />인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a<b<c=d
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    서로 다른 세 숫자를 뽑으면 가장 작은 수가{" "}
                                    <InlineMath math="a" />, 가운데 수가{" "}
                                    <InlineMath math="b" />, 가장 큰 수가{" "}
                                    <InlineMath math="c=d" />로 정해집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_9C_3
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                두 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_9C_4+{}_9C_3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_9C_4+{}_9C_3
                    &=126+84\\
                    &=210
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        c<d
                        \quad\text{또는}\quad
                        c=d
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    부등호에 등호가 포함되어 있으므로{" "}
                                    <InlineMath math="c<d" />와{" "}
                                    <InlineMath math="c=d" />의 두 경우로 먼저 분류합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    숫자를 뽑은 뒤에는 작은 순서대로 놓아야 하므로
                                    배열 방법은 각 선택마다 한 가지입니다.
                                    따라서 별도의 순열을 곱하지 않습니다.
                                </p>

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    조건이 <InlineMath math="a<b<c<d" />였다면
                                    네 숫자가 모두 달라야 하므로{" "}
                                    <InlineMath math={String.raw`{}_9C_4`} />만 계산합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 이 문제는{" "}
                                    <InlineMath math="c\le d" />이므로{" "}
                                    <InlineMath math="c=d" />인 경우를 반드시 포함해야 합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 자연수의 개수는
                                </p>

                                <BlockMath math="210" />

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
                            <InlineMath math="1" />부터 <InlineMath math="9" />까지의
                            서로 다른 자연수{" "}
                            <InlineMath math="a,\ b,\ c,\ d,\ e" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                a\times10^4+b\times10^3+c\times10^2+d\times10+e
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타내어지는 다섯 자리 자연수{" "}
                            <InlineMath math="abcde" /> 중에서{" "}
                            <InlineMath math="5" />의 배수이고{" "}
                            <InlineMath math="a<b<c" />,{" "}
                            <InlineMath math="c>d>e" />를 만족시키는
                            모든 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 일의 자리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    1. 일의 자리 정하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    주어진 숫자에는 <InlineMath math="0" />이 없으므로,
                                    다섯 자리 자연수가 <InlineMath math="5" />의 배수가 되려면
                                    일의 자리 숫자는 반드시
                                </p>

                                <BlockMath math="e=5" />

                                <p className="leading-8 text-gray-300">
                                    이어야 합니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                이제 조건
                            </p>

                            <BlockMath
                                math={String.raw`
                    a<b<c,\qquad c>d>5
                `}
                            />

                            <p className="leading-8">
                                를 만족시켜야 합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="d" />는 <InlineMath math="5" />보다 크고{" "}
                                <InlineMath math="c" />보다 작아야 하므로,{" "}
                                <InlineMath math="c" />의 값에 따라 경우를 분류합니다.
                            </p>

                            {/* c=7 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ① <InlineMath math="c=7" />인 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="5<d<7" />이므로
                                </p>

                                <BlockMath math="d=6" />

                                <p className="leading-8">
                                    으로 정해집니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a,\ b" />에는{" "}
                                    <InlineMath math="7" />보다 작은 숫자 중에서{" "}
                                    이미 사용한 <InlineMath math="5,\ 6" />을 제외한
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1,\ 2,\ 3,\ 4
                    `}
                                />

                                <p className="leading-8">
                                    중 서로 다른 두 수를 선택합니다.
                                    선택한 두 수는 작은 순서대로{" "}
                                    <InlineMath math="a,\ b" />에 놓이므로 배열 방법은
                                    한 가지입니다.
                                </p>

                                <BlockMath math={String.raw`{}_4C_2=6`} />

                            </div>

                            {/* c=8 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ② <InlineMath math="c=8" />인 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="5<d<8" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        d=6,\ 7
                    `}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="2" />가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="d" />가 하나 정해질 때마다{" "}
                                    <InlineMath math="8" />보다 작은 숫자 중{" "}
                                    <InlineMath math="5,\ d" />를 제외하면{" "}
                                    <InlineMath math="5" />개의 숫자가 남습니다.
                                </p>

                                <p className="leading-8">
                                    이 중 두 수를 선택하여 작은 순서대로{" "}
                                    <InlineMath math="a,\ b" />에 놓습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2\times{}_5C_2
                        =2\times10
                        =20
                    `}
                                />

                            </div>

                            {/* c=9 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ③ <InlineMath math="c=9" />인 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="5<d<9" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        d=6,\ 7,\ 8
                    `}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="3" />가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="d" />가 하나 정해질 때마다{" "}
                                    <InlineMath math="9" />보다 작은 숫자 중{" "}
                                    <InlineMath math="5,\ d" />를 제외하면{" "}
                                    <InlineMath math="6" />개의 숫자가 남습니다.
                                </p>

                                <p className="leading-8">
                                    이 중 두 수를 선택하여 작은 순서대로{" "}
                                    <InlineMath math="a,\ b" />에 놓습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\times{}_6C_2
                        =3\times15
                        =45
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                세 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_4C_2
                    +2\times{}_5C_2
                    +3\times{}_6C_2
                    &=6+20+45\\
                    &=71
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{일의 자리 정하기}
                        \quad\longrightarrow\quad
                        \text{\(c\)의 값에 따라 분류}
                        \quad\longrightarrow\quad
                        \text{\(d\) 정하기}
                        \quad\longrightarrow\quad
                        \text{\(a,\ b\) 선택}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="5" />의 배수 조건으로{" "}
                                    <InlineMath math="e=5" />를 먼저 정합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그다음 <InlineMath math="c>d>5" />를 만족하는{" "}
                                    <InlineMath math="c,\ d" />를 정하고,
                                    남은 숫자 중 <InlineMath math="c" />보다 작은 두 수를
                                    뽑습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    뽑은 두 수는 <InlineMath math="a<b" />의 순서로
                                    자동으로 배열되므로 별도의 자리바꿈을 곱하지 않습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 자연수의 개수는
                                </p>

                                <BlockMath math="71" />

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
                            조합과 순열을 함께 사용하는 문제는
                            조합으로 먼저 뽑고, 뽑은 것을 배열합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{뽑기}
                    \quad\longrightarrow\quad
                    \text{배열}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            경우가 여러 가지이면 먼저 분류합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{분류}
                    \quad\longrightarrow\quad
                    \text{뽑기}
                    \quad\longrightarrow\quad
                    \text{배열}
                    \quad\longrightarrow\quad
                    \text{더하기}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            배열은 무리하게 P기호를 사용하지 않고,
                            각 자리에 들어갈 수 있는 경우의 수를 차례대로 곱합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{조합으로 뽑고}
                    \quad
                    \text{곱의 법칙으로 배열}
                    }
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.19 도형의 개수 (점)
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    여러 점을 이용하여 만드는 삼각형과 직선의 개수는
                    점을 선택하는 조합을 이용하여 구할 수 있습니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    이 단원에서는 하나의 예시 문제를 통해
                    <b className="text-white"> 전체에서 만들 수 없는 경우와 중복된 경우를 빼는 방법</b>을
                    알아보겠습니다.
                </p>

                {/* 기본 원리 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        기본 원리
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                삼각형
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                일직선 위에 있지 않은 서로 다른 세 점으로 만들어집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{전체 경우}
                        -
                        \text{일직선 위의 세 점}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                직선
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                서로 다른 두 점으로 하나가 결정됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        
                        \text{전체 경우}
                        -
                        \text{같은 직선의 중복}
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            한 직선 위에 점이 <InlineMath math="n" />개 있는 경우
                        </p>

                        <div className="mt-4 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    삼각형에서 빼는 경우
                                </p>

                                <BlockMath math={String.raw`{}_nC_3`} />

                                <p className="leading-8 text-gray-300">
                                    세 점이 일직선 위에 있으므로 삼각형이 만들어지지 않습니다.
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    직선에서 빼는 중복
                                </p>

                                <BlockMath math={String.raw`{}_nC_2-1`} />

                                <p className="leading-8 text-gray-300">
                                    여러 점의 쌍이 같은 직선 하나를 나타내므로 하나는 남깁니다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예시
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 정사각형 간격으로{" "}
                                <InlineMath math="15" />개의 점이 놓여 있습니다.
                                이 점들을 꼭짓점으로 하는 삼각형의 개수와,
                                이 점들 중 두 점 이상을 지나는 서로 다른 직선의 개수를
                                각각 구해 보겠습니다.
                            </p>

                            <img
                                src="/images/4.19_1.png"
                                alt="정사각형 간격으로 배열된 3행 5열의 격자점 15개"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 1단계 */}
                    <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h4 className="text-xl font-bold text-yellow-300">
                            1단계. 세 점 이상이 일직선 위에 있는 경우 찾기
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 문제에서 가장 중요한 과정입니다.
                            가로와 세로뿐 아니라 여러 방향의 대각선도 빠짐없이 확인해야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl bg-white p-4">

                            <img
                                src="/images/4.19_1_s.png"
                                alt="3행 5열 격자점에서 세 점 이상을 지나는 직선을 방향별로 분류한 그림"
                                className="mx-auto w-full"
                            />

                        </div>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[680px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">
                                        <th className="p-3 font-semibold text-white">방향</th>
                                        <th className="p-3 font-semibold text-white">한 직선 위의 점</th>
                                        <th className="p-3 font-semibold text-white">직선의 개수</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr className="border-b border-white/10">
                                        <td className="p-3">가로</td>
                                        <td className="p-3">5개</td>
                                        <td className="p-3">3개</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">세로</td>
                                        <td className="p-3">3개</td>
                                        <td className="p-3">5개</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">기울기 <InlineMath math="1" /></td>
                                        <td className="p-3">3개</td>
                                        <td className="p-3">3개</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">기울기 <InlineMath math="-1" /></td>
                                        <td className="p-3">3개</td>
                                        <td className="p-3">3개</td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="p-3">기울기 <InlineMath math={String.raw`\frac12`} /></td>
                                        <td className="p-3">3개</td>
                                        <td className="p-3">1개</td>
                                    </tr>

                                    <tr>
                                        <td className="p-3">기울기 <InlineMath math={String.raw`-\frac12`} /></td>
                                        <td className="p-3">3개</td>
                                        <td className="p-3">1개</td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">점이 5개인 직선</p>
                                <BlockMath math="3" />
                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">점이 3개인 직선</p>
                                <BlockMath math="5+3+3+1+1=13" />
                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-semibold text-red-300">
                                놓치기 쉬운 직선
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                기울기가 <InlineMath math={String.raw`\frac12`} /> 또는{" "}
                                <InlineMath math={String.raw`-\frac12`} />인 직선은
                                가로로 두 칸, 세로로 한 칸씩 이동하는 점들을 연결합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{가로로 2칸}
                        \quad+
                        \quad
                        \text{세로로 1칸}
                    `}
                            />

                        </div>

                    </div>

                    {/* 2단계 */}
                    <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <h4 className="text-xl font-bold text-blue-300">
                            2단계. 삼각형의 개수 구하기
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            먼저 <InlineMath math="15" />개의 점 중 서로 다른 세 점을
                            자유롭게 뽑습니다.
                        </p>

                        <BlockMath math={String.raw`{}_{15}C_3`} />

                        <p className="leading-8 text-gray-300">
                            여기에는 세 점이 일직선 위에 있어 삼각형을 만들지 못하는 경우도
                            포함되어 있습니다.
                        </p>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">점이 5개인 가로 직선 3개</p>
                                <BlockMath math={String.raw`3\times{}_5C_3`} />
                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">점이 3개인 직선 13개</p>
                                <BlockMath math={String.raw`13\times{}_3C_3`} />
                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 삼각형의 개수는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    {}_{15}C_3
                    -3\times{}_5C_3
                    -13\times{}_3C_3
                    &=455-30-13\\
                    &=412
                    \end{aligned}
                `}
                        />

                    </div>

                    {/* 3단계 */}
                    <div className="mt-6 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                        <h4 className="text-xl font-bold text-purple-300">
                            3단계. 서로 다른 직선의 개수 구하기
                        </h4>

                        <p className="mt-4 leading-8 text-gray-300">
                            먼저 <InlineMath math="15" />개의 점 중 서로 다른 두 점을
                            자유롭게 뽑습니다.
                        </p>

                        <BlockMath math={String.raw`{}_{15}C_2`} />

                        <p className="leading-8 text-gray-300">
                            한 직선 위에 점이 여러 개 있으면 서로 다른 점의 쌍들이
                            같은 직선을 반복하여 나타냅니다.
                        </p>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    점이 5개인 직선 하나
                                </p>

                                <BlockMath math={String.raw`{}_5C_2`} />

                                <p className="leading-8 text-gray-300">
                                    개의 점의 쌍이 모두 같은 직선이므로
                                </p>

                                <BlockMath math={String.raw`{}_5C_2-1`} />

                                <p className="leading-8 text-gray-300">
                                    을 빼야 합니다.
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">

                                <p className="font-semibold text-white">
                                    점이 3개인 직선 하나
                                </p>

                                <BlockMath math={String.raw`{}_3C_2`} />

                                <p className="leading-8 text-gray-300">
                                    개의 점의 쌍이 모두 같은 직선이므로
                                </p>

                                <BlockMath math={String.raw`{}_3C_2-1`} />

                                <p className="leading-8 text-gray-300">
                                    을 빼야 합니다.
                                </p>

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 서로 다른 직선의 개수는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    {}_{15}C_2
                    -3\left({}_5C_2-1\right)
                    -13\left({}_3C_2-1\right)
                    &=105-3(9)-13(2)\\
                    &=52
                    \end{aligned}
                `}
                        />

                    </div>

                    {/* 예시 문제 정리 */}
                    <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <h4 className="text-xl font-bold text-green-300">
                            예시 문제 정리
                        </h4>

                        <div className="mt-5 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">삼각형의 개수</p>
                                <BlockMath math="412" />
                            </div>

                            <div className="rounded-xl bg-black/40 p-5 text-center">
                                <p className="font-semibold text-white">직선의 개수</p>
                                <BlockMath math="52" />
                            </div>

                        </div>

                    </div>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        도형의 개수 풀이 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 전체 점 중 필요한 수만큼 자유롭게 뽑습니다.
                        </p>

                        <p>
                            ② 세 점 이상이 일직선 위에 있는 경우를 방향별로 빠짐없이 찾습니다.
                        </p>

                        <p>
                            ③ 삼각형에서는 일직선 위의 세 점을 뽑는{" "}
                            <InlineMath math={String.raw`{}_nC_3`} />을 뺍니다.
                        </p>

                        <p>
                            ④ 직선에서는 같은 직선 하나를 남겨야 하므로{" "}
                            <InlineMath math={String.raw`{}_nC_2-1`} />을 뺍니다.
                        </p>

                        <p>
                            ⑤ 격자점에서는 가로, 세로, 기울기{" "}
                            <InlineMath math="1,\,-1" />뿐 아니라{" "}
                            <InlineMath math={String.raw`\frac12,\,-\frac12`} />과 같은
                            다른 간격의 대각선도 확인합니다.
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
                            대각선의 개수가 <InlineMath math="65" />인 다각형의
                            꼭짓점의 개수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                다각형의 꼭짓점의 개수를{" "}
                                <InlineMath math="n" />개라고 하겠습니다.
                            </p>

                            <p className="leading-8">
                                서로 다른 두 꼭짓점을 선택하면 두 점을 잇는 선분이 만들어지므로,
                                모든 선분의 개수는
                            </p>

                            <BlockMath math={String.raw`{}_nC_2`} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 중 다각형의 변은 모두{" "}
                                <InlineMath math="n" />개이므로,
                                대각선의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_nC_2-n
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    대각선의 개수
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{대각선}
                        =
                        \text{두 꼭짓점을 잇는 모든 선분}
                        -
                        \text{변}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        {}_nC_2-n
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                대각선의 개수가 <InlineMath math="65" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_nC_2-n=65
                `}
                            />

                            <p className="leading-8">
                                조합식을 곱셈식으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{n(n-1)}{2}-n=65
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="2" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    n(n-1)-2n=130
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    n^2-3n-130=0
                `}
                            />

                            <p className="leading-8">
                                인수분해하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (n-13)(n+10)=0
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="n" />은 다각형의 꼭짓점의 개수이므로
                                양의 자연수입니다.
                            </p>

                            <BlockMath math="n=13" />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    다른 형태의 공식
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    대각선의 개수는 다음과 같이 정리할 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_nC_2-n
                        =
                        \frac{n(n-1)}{2}-n
                        =
                        \frac{n(n-3)}{2}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 처음부터{" "}
                                    <InlineMath math={String.raw`\frac{n(n-3)}{2}=65`} />로
                                    놓고 계산해도 됩니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 다른 두 꼭짓점을 이으면 변 또는 대각선이 만들어집니다.
                                    따라서 모든 두 꼭짓점의 선택에서{" "}
                                    <InlineMath math="n" />개의 변을 빼면 대각선의 개수가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{대각선의 개수}
                        =
                        {}_nC_2-n
                        }
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 다각형의 꼭짓점의 개수는
                                </p>

                                <BlockMath math="13" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 반원 위에{" "}
                                    <InlineMath math="7" />개의 점이 있다.
                                    다음과 같이 정의된 두 상수{" "}
                                    <InlineMath math="p,\ q" />에 대하여{" "}
                                    <InlineMath math="p+q" />의 값을 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        (가) 두 점을 이어서 만들 수 있는 서로 다른 직선의 개수{" "}
                                        <InlineMath math="p" />
                                    </p>

                                    <p className="mt-2 leading-8 text-gray-300">
                                        (나) 세 점을 꼭짓점으로 하는 삼각형의 개수{" "}
                                        <InlineMath math="q" />
                                    </p>

                                </div>

                            </div>

                            <img
                                src="/images/4.19_2.png"
                                alt="반원의 호와 지름 위에 놓인 7개의 점"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                전체 <InlineMath math="7" />개의 점 중에서
                                반원의 지름 위에 있는 점은 양 끝점과 지름 안쪽의 두 점을
                                합하여 모두 <InlineMath math="4" />개입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    먼저 확인할 점
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    지름 위의 <InlineMath math="4" />개 점은 모두 한 직선 위에 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{지름 위의 점의 수}=4
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 직선에서는 같은 직선의 중복을 빼야 하고,
                                    삼각형에서는 이 네 점 중 세 점을 선택한 경우를 빼야 합니다.
                                </p>

                            </div>

                            {/* p */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 서로 다른 직선의 개수 <InlineMath math="p" />
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    전체 <InlineMath math="7" />개의 점 중 서로 다른 두 점을
                                    선택하는 경우의 수는
                                </p>

                                <BlockMath math={String.raw`{}_7C_2`} />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 지름 위의 <InlineMath math="4" />개 점 중
                                    두 점을 선택하는{" "}
                                    <InlineMath math={String.raw`{}_4C_2`} />가지 경우는
                                    모두 같은 직선인 지름을 나타냅니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    지름 한 개는 남겨야 하므로 중복하여 센
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_2-1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 빼야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        p
                        &={}_7C_2-\left({}_4C_2-1\right)\\
                        &=21-(6-1)\\
                        &=16
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* q */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 삼각형의 개수 <InlineMath math="q" />
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    전체 <InlineMath math="7" />개의 점 중 서로 다른 세 점을
                                    선택하는 경우의 수는
                                </p>

                                <BlockMath math={String.raw`{}_7C_3`} />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 지름 위의 <InlineMath math="4" />개 점 중
                                    세 점을 선택하면 세 점이 일직선 위에 있으므로
                                    삼각형을 만들 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_3
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        q
                        &={}_7C_3-{}_4C_3\\
                        &=35-4\\
                        &=31
                        \end{aligned}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    p+q
                    &=16+31\\
                    &=47
                    \end{aligned}
                `}
                            />

                            {/* 비교 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    직선과 삼각형의 차이
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-2">

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="font-semibold text-white">
                                            직선
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            한 직선 위의 두 점을 선택한 여러 경우가
                                            모두 같은 직선을 나타냅니다.
                                            직선 하나는 남겨야 하므로
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                {}_nC_2-1
                            `}
                                        />

                                        <p className="leading-8 text-gray-300">
                                            을 뺍니다.
                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="font-semibold text-white">
                                            삼각형
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            한 직선 위의 세 점을 선택하면
                                            삼각형 자체가 만들어지지 않으므로
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                {}_nC_3
                            `}
                                        />

                                        <p className="leading-8 text-gray-300">
                                            을 모두 뺍니다.
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{직선}
                        &: \text{같은 직선의 중복만 제거}\\
                        \text{삼각형}
                        &: \text{일직선 위의 세 점을 모두 제거}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    같은 네 점이 일직선 위에 있더라도,
                                    직선과 삼각형에서 빼는 방법은 서로 다릅니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="p+q=47" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 같은 간격으로 배열된{" "}
                                <InlineMath math="12" />개의 점 중에서 세 점을 꼭짓점으로
                                하는 삼각형의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.19_3.png"
                                alt="같은 간격으로 배열된 3행 4열의 격자점 12개"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="12" />개의 점 중 서로 다른 세 점을
                                자유롭게 선택한 뒤, 세 점이 일직선 위에 있어
                                삼각형을 만들지 못하는 경우를 뺍니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    세 점을 선택하는 전체 경우
                                </p>

                                <BlockMath math={String.raw`{}_{12}C_3`} />

                            </div>

                            <p className="leading-8">
                                이제 세 점 이상이 일직선 위에 놓인 경우를
                                방향에 따라 빠짐없이 찾습니다.
                            </p>

                            {/* 가로 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ① 가로 방향
                                </h4>

                                <p className="mt-3 leading-8">
                                    가로 한 줄에는 점이 <InlineMath math="4" />개 있고,
                                    이러한 가로줄은 <InlineMath math="3" />개입니다.
                                </p>

                                <p className="leading-8">
                                    한 줄의 네 점 중 세 점을 선택하는 경우는
                                    삼각형을 만들지 못하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\times{}_4C_3
                    `}
                                />

                            </div>

                            {/* 세로 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ② 세로 방향
                                </h4>

                                <p className="mt-3 leading-8">
                                    세로 한 줄에는 점이 <InlineMath math="3" />개 있고,
                                    이러한 세로줄은 <InlineMath math="4" />개입니다.
                                </p>

                                <p className="leading-8">
                                    각 세로줄의 세 점을 모두 선택하면 삼각형을 만들지 못하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4\times{}_3C_3
                    `}
                                />

                            </div>

                            {/* 대각선 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ③ 대각선 방향
                                </h4>

                                <p className="mt-3 leading-8">
                                    점 세 개가 일직선 위에 놓인 대각선은
                                    오른쪽 위로 향하는 방향에 <InlineMath math="2" />개,
                                    오른쪽 아래로 향하는 방향에 <InlineMath math="2" />개입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2+2=4
                    `}
                                />

                                <p className="leading-8">
                                    따라서 대각선 위의 세 점을 선택하는 경우는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4\times{}_3C_3
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    일직선 위의 세 점 정리
                                </p>

                                <div className="mt-4 overflow-x-auto">

                                    <table className="w-full min-w-[560px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    방향
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    직선의 개수
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    삼각형이 되지 않는 선택
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    가로
                                                </td>

                                                <td className="p-3">
                                                    3개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math={String.raw`3\times{}_4C_3`} />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    세로
                                                </td>

                                                <td className="p-3">
                                                    4개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math={String.raw`4\times{}_3C_3`} />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    대각선
                                                </td>

                                                <td className="p-3">
                                                    4개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math={String.raw`4\times{}_3C_3`} />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 구하는 삼각형의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_{12}C_3
                    -3\times{}_4C_3
                    -4\times{}_3C_3
                    -4\times{}_3C_3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_{12}C_3
                    -3\times{}_4C_3
                    -8\times{}_3C_3
                    &=220-3\times4-8\\
                    &=220-12-8\\
                    &=200
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{삼각형}
                        =
                        \text{세 점을 선택하는 전체 경우}
                        -
                        \text{일직선 위의 세 점}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    가로줄에는 점이 네 개이므로 각 줄에서{" "}
                                    <InlineMath math={String.raw`{}_4C_3`} />개의 선택을 빼야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세로와 대각선은 한 직선 위에 점이 정확히 세 개이므로
                                    직선 하나마다 <InlineMath math={String.raw`{}_3C_3=1`} />개를
                                    빼면 됩니다.
                                </p>

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 <InlineMath math="3\times4" /> 격자에서는
                                    세 점을 지나는 대각선이 기울기{" "}
                                    <InlineMath math="1,\,-1" />인 방향에만 존재합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    앞의 <InlineMath math="3\times5" /> 격자와 달리,
                                    가로로 두 칸씩 이동하는 기울기{" "}
                                    <InlineMath math={String.raw`\frac12,\,-\frac12`} />인 직선은
                                    점 세 개를 지나지 못합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 삼각형의 개수는
                                </p>

                                <BlockMath math="200" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 삼각형 위에{" "}
                                <InlineMath math="10" />개의 점이 있을 때,
                                두 점을 이어서 만들 수 있는 서로 다른 직선의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.19_4.png"
                                alt="세 변 위에 모두 10개의 점이 놓인 삼각형"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="10" />개의 점 중 서로 다른 두 점을
                                선택하는 모든 경우를 구합니다.
                            </p>

                            <BlockMath math={String.raw`{}_{10}C_2`} />

                            <p className="leading-8">
                                그러나 한 변 위에 여러 점이 있으면,
                                그 점 중 두 점을 선택한 여러 경우가 모두 같은 직선을 나타냅니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    각 변 위의 점의 수
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-3">

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            왼쪽 변
                                        </p>

                                        <BlockMath math="4" />

                                        <p className="leading-8 text-gray-300">
                                            점이 4개
                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            아래쪽 변
                                        </p>

                                        <BlockMath math="5" />

                                        <p className="leading-8 text-gray-300">
                                            점이 5개
                                        </p>

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            빗변
                                        </p>

                                        <BlockMath math="4" />

                                        <p className="leading-8 text-gray-300">
                                            점이 4개
                                        </p>

                                    </div>

                                </div>

                            </div>

                            {/* 왼쪽 변 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ① 왼쪽 변에서 중복하여 센 직선
                                </h4>

                                <p className="mt-3 leading-8">
                                    왼쪽 변 위의 점 <InlineMath math="4" />개 중 두 점을
                                    선택하는 경우는
                                </p>

                                <BlockMath math={String.raw`{}_4C_2`} />

                                <p className="leading-8">
                                    가지이지만, 모두 같은 직선 하나를 나타냅니다.
                                    직선 하나는 남겨야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_2-1
                    `}
                                />

                                <p className="leading-8">
                                    을 뺍니다.
                                </p>

                            </div>

                            {/* 아래쪽 변 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ② 아래쪽 변에서 중복하여 센 직선
                                </h4>

                                <p className="mt-3 leading-8">
                                    아래쪽 변 위에는 점이{" "}
                                    <InlineMath math="5" />개 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_5C_2-1
                    `}
                                />

                                <p className="leading-8">
                                    을 뺍니다.
                                </p>

                            </div>

                            {/* 빗변 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ③ 빗변에서 중복하여 센 직선
                                </h4>

                                <p className="mt-3 leading-8">
                                    빗변 위에는 점이{" "}
                                    <InlineMath math="4" />개 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_2-1
                    `}
                                />

                                <p className="leading-8">
                                    을 뺍니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 서로 다른 직선의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_{10}C_2
                    -\left({}_4C_2-1\right)
                    -\left({}_5C_2-1\right)
                    -\left({}_4C_2-1\right)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    &{}_{10}C_2
                    -2\left({}_4C_2-1\right)
                    -\left({}_5C_2-1\right)\\
                    &=45-2(6-1)-(10-1)\\
                    &=45-10-9\\
                    &=26
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 모든 두 점을 선택한 뒤,
                                    한 변 위에 놓인 점들이 같은 직선을 중복하여 만드는 경우를
                                    제거합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{한 직선 위에 점이 \(n\)개}
                        \quad\Longrightarrow\quad
                        {}_nC_2-1
                        \text{을 뺀다}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    삼각형의 꼭짓점은 두 변에 함께 포함되어 있지만,
                                    전체 점의 수는 문제에서 이미{" "}
                                    <InlineMath math="10" />개로 주어졌으므로
                                    꼭짓점을 다시 더하거나 뺄 필요는 없습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 서로 다른 직선의 개수는
                                </p>

                                <BlockMath math="26" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 정삼각형의 둘레에 같은 간격으로{" "}
                                <InlineMath math="9" />개의 점이 놓여 있다.
                                두 점을 연결하여 만든 직선 중에서 정삼각형을
                                두 부분으로 나누는 직선의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.19_5.png"
                                alt="둘레에 같은 간격으로 9개의 점이 놓인 정삼각형"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="9" />개의 점 중 서로 다른 두 점을
                                선택하여 연결하는 모든 경우를 생각합니다.
                            </p>

                            <BlockMath math={String.raw`{}_9C_2`} />

                            <p className="leading-8">
                                그러나 선택한 두 점이 정삼각형의 같은 변 위에 있으면,
                                두 점을 연결한 선분은 삼각형의 둘레에 놓이므로
                                정삼각형을 두 부분으로 나누지 못합니다.
                            </p>

                            {/* 같은 변 위의 점 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    같은 변 위의 두 점
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    정삼각형의 각 변에는 양 끝의 꼭짓점을 포함하여{" "}
                                    <InlineMath math="4" />개의 점이 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    한 변 위의 네 점 중 서로 다른 두 점을 선택하는 경우의 수는
                                </p>

                                <BlockMath math={String.raw`{}_4C_2`} />

                                <p className="leading-8 text-gray-300">
                                    이고, 이러한 변은 모두 <InlineMath math="3" />개입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\times{}_4C_2
                    `}
                                />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    삼각형을 두 부분으로 나누는 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 점이 같은 변 위에 있지 않으면,
                                    두 점을 연결한 선분은 정삼각형의 내부를 지나므로
                                    정삼각형을 두 부분으로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{전체 두 점의 선택}
                        -
                        \text{같은 변 위의 두 점}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 구하는 직선의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_9C_2-3\times{}_4C_2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_9C_2-3\times{}_4C_2
                    &=36-3\times6\\
                    &=36-18\\
                    &=18
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 점을 연결한 선분이 삼각형의 내부를 지나야
                                    삼각형을 두 부분으로 나눌 수 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 변 위의 두 점을 연결하면 선분이 삼각형의
                                    둘레에 놓이므로 전체 경우에서 제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{두 부분으로 나누는 직선}
                        =
                        \text{전체}
                        -
                        \text{같은 변 위의 두 점}
                        }
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    한 꼭짓점은 두 변에 포함되지만,
                                    서로 다른 두 점이 동시에 같은 변 위에 놓이는 경우는
                                    정확히 한 변에서만 계산됩니다.
                                    따라서{" "}
                                    <InlineMath math={String.raw`3\times{}_4C_2`} />에서
                                    같은 점의 쌍이 중복되어 세어지지 않습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정삼각형을 두 부분으로 나누는 직선의 개수는
                                </p>

                                <BlockMath math="18" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 반원 위에{" "}
                                <InlineMath math="7" />개의 점이 있다.
                                이 중 <InlineMath math="4" />개의 점을 꼭짓점으로 하는
                                사각형의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.19_2.png"
                                alt="반원의 호와 지름 위에 놓인 7개의 점"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="7" />개의 점 중 서로 다른{" "}
                                <InlineMath math="4" />개의 점을 선택하는 모든 경우의 수는
                            </p>

                            <BlockMath math={String.raw`{}_7C_4`} />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                그러나 선택한 네 점 중 세 점 이상이 일직선 위에 있으면
                                네 점을 꼭짓점으로 하는 사각형을 만들 수 없습니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    일직선 위에 있는 점
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    지름 위에는 양 끝점과 안쪽의 두 점을 합하여
                                    모두 <InlineMath math="4" />개의 점이 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{지름 위의 점의 수}=4
                    `}
                                />

                            </div>

                            {/* 지름 위의 점 3개 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ① 지름 위의 점을 3개 선택하는 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    지름 위의 <InlineMath math="4" />개 점 중{" "}
                                    <InlineMath math="3" />개를 선택하고,
                                    반원의 호 위에 있는 <InlineMath math="3" />개 점 중{" "}
                                    <InlineMath math="1" />개를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_3\times{}_3C_1
                    `}
                                />

                                <p className="leading-8">
                                    이 경우에는 세 점이 지름 위에 일직선으로 놓이므로
                                    사각형을 만들 수 없습니다.
                                </p>

                            </div>

                            {/* 지름 위의 점 4개 */}
                            <div className="rounded-xl bg-black/40 p-5">

                                <h4 className="font-semibold text-white">
                                    ② 지름 위의 점을 4개 모두 선택하는 경우
                                </h4>

                                <p className="mt-3 leading-8">
                                    네 점이 모두 일직선 위에 있으므로 사각형을 만들 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_4
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 사각형을 만들지 못하는 경우의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_4C_3\times{}_3C_1+{}_4C_4
                `}
                            />

                            <p className="leading-8">
                                이므로, 구하는 사각형의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_7C_4
                    -{}_4C_3\times{}_3C_1
                    -{}_4C_4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_7C_4
                    -{}_4C_3\times{}_3C_1
                    -{}_4C_4
                    &=35-4\times3-1\\
                    &=35-12-1\\
                    &=22
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    네 점을 선택하는 전체 경우에서
                                    지름 위의 점을 세 개 이상 선택한 경우를 뺍니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{사각형}
                        =
                        \text{네 점을 선택하는 전체 경우}
                        -
                        \text{세 점 이상이 일직선인 경우}
                        }
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    지름 위의 점을 정확히 세 개 선택하는 경우뿐 아니라,
                                    네 개를 모두 선택하는 경우도 사각형을 만들지 못하므로
                                    함께 제외해야 합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 사각형의 개수는
                                </p>

                                <BlockMath math="22" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 원 위에{" "}
                                <InlineMath math="6" />개의 점이 같은 간격으로 놓여 있다.
                                이 중에서 <InlineMath math="3" />개의 점을 이어서 만들 수 있는
                                직각삼각형의 개수를 <InlineMath math="a" />,
                                정삼각형의 개수를 <InlineMath math="b" />라 할 때,{" "}
                                <InlineMath math="a-b" />의 값을 구하여라.
                            </p>

                            <img
                                src="/images/4.19_7.png"
                                alt="원 위에 같은 간격으로 놓인 6개의 점"
                                className="mx-auto w-full max-w-sm rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            {/* 직각삼각형 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    ① 직각삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    원에 내접하는 삼각형이 직각삼각형이 되려면
                                    빗변은 반드시 지름이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{직각삼각형}
                        \Longleftrightarrow
                        \text{한 변이 지름}
                    `}
                                />

                                <p className="leading-8">
                                    원 위의 <InlineMath math="6" />개의 점에서는
                                    서로 마주보는 점의 쌍(지름)이{" "}
                                    <InlineMath math="3" />개 있습니다.
                                </p>

                                <p className="leading-8">
                                    지름 하나를 선택하면 나머지{" "}
                                    <InlineMath math="4" />개의 점 중 어느 점을 선택하여도
                                    직각삼각형이 만들어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a
                        =
                        3\times4
                        =
                        12
                    `}
                                />

                            </div>

                            {/* 정삼각형 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    ② 정삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    정삼각형의 세 꼭짓점은 원을{" "}
                                    <InlineMath math="120^\circ" />씩 나누어야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 한 점에서 두 칸씩 건너뛴 점들을 선택해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1,3,5),
                        \quad
                        (2,4,6)
                    `}
                                />

                                <p className="leading-8">
                                    가능한 정삼각형은 모두{" "}
                                    <InlineMath math="2" />개입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b=2
                    `}
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    계산
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a-b
                        &=12-2\\
                        &=10
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-gray-300">

                                    <li>
                                        원에 내접하는 직각삼각형은 한 변이 반드시 지름이다.
                                    </li>

                                    <li>
                                        원 위에 같은 간격으로 놓인 점에서 정삼각형은
                                        세 점이 같은 간격으로 배치되어야 한다.
                                    </li>

                                </ul>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a-b=10
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 원주를{" "}
                                    <InlineMath math="8" />등분한{" "}
                                    <InlineMath math="8" />개의 점이 있다.
                                    다음 보기에서 옳은 것을 모두 고르시오.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        ㄱ. <InlineMath math="8" />개의 점 중에서 세 점을 택하여
                                        만들 수 있는 삼각형의 개수는 모두{" "}
                                        <InlineMath math="56" />개이다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        ㄴ. <InlineMath math="8" />개의 점 중에서 세 점을 택하여
                                        만들 수 있는 직각삼각형의 개수는 모두{" "}
                                        <InlineMath math="12" />개이다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        ㄷ. <InlineMath math="8" />개의 점 중에서 세 점을 택하여
                                        만들 수 있는 이등변삼각형의 개수는 모두{" "}
                                        <InlineMath math="24" />개이다.
                                    </p>

                                </div>

                            </div>

                            <img
                                src="/images/4.19_8.png"
                                alt="원주를 8등분하여 같은 간격으로 놓인 8개의 점"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    ㄱ. 모든 삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    원 위의 서로 다른 세 점은 일직선 위에 놓일 수 없으므로,
                                    어떤 세 점을 선택하여도 삼각형 하나가 만들어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_8C_3
                        =
                        \frac{8\times7\times6}{3\times2\times1}
                        =
                        56
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ㄱ은 옳습니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    ㄴ. 직각삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    원에 내접하는 삼각형이 직각삼각형이 되려면
                                    빗변이 원의 지름이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{직각삼각형}
                        \quad\Longleftrightarrow\quad
                        \text{한 변이 지름}
                    `}
                                />

                                <p className="leading-8">
                                    서로 마주 보는 두 점을 연결한 지름은
                                    모두 <InlineMath math="4" />개입니다.
                                </p>

                                <p className="leading-8">
                                    지름 하나를 정하면 나머지{" "}
                                    <InlineMath math="6" />개의 점 중 어느 한 점을 선택해도
                                    직각삼각형이 만들어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4\times6=24
                    `}
                                />

                                <p className="leading-8">
                                    직각삼각형의 개수는{" "}
                                    <InlineMath math="12" />개가 아니라{" "}
                                    <InlineMath math="24" />개이므로 ㄴ은 옳지 않습니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    ㄷ. 이등변삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8">
                                    먼저 이등변삼각형의 꼭짓점이 되는 한 점을 정합니다.
                                </p>

                                <BlockMath math="8" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    꼭짓점이 하나 정해지면, 그 점에서 원주를 따라
                                    같은 칸 수만큼 떨어진 두 점을 선택해야
                                    두 변의 길이가 같아집니다.
                                </p>

                                <div className="mt-5 grid gap-4 md:grid-cols-3">

                                    <div className="rounded-xl bg-black/40 p-4 text-center">

                                        <p className="font-semibold text-white">
                                            양쪽으로 1칸
                                        </p>

                                        <BlockMath math="1" />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-4 text-center">

                                        <p className="font-semibold text-white">
                                            양쪽으로 2칸
                                        </p>

                                        <BlockMath math="1" />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-4 text-center">

                                        <p className="font-semibold text-white">
                                            양쪽으로 3칸
                                        </p>

                                        <BlockMath math="1" />

                                    </div>

                                </div>

                                <p className="mt-5 leading-8">
                                    따라서 꼭짓점 하나마다{" "}
                                    <InlineMath math="3" />개의 이등변삼각형이 만들어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        8\times3=24
                    `}
                                />

                                <p className="leading-8">
                                    이 점들로 정삼각형은 만들 수 없으므로,
                                    하나의 이등변삼각형이 서로 다른 꼭짓점에서
                                    중복하여 세어지는 경우도 없습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 ㄷ은 옳습니다.
                                </p>

                            </div>

                            {/* 판정 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    보기의 판정
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[560px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    보기
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    실제 개수
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    판정
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">ㄱ</td>

                                                <td className="p-3">
                                                    <InlineMath math="56" />
                                                </td>

                                                <td className="p-3 font-semibold text-green-300">
                                                    옳음
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">ㄴ</td>

                                                <td className="p-3">
                                                    <InlineMath math="24" />
                                                </td>

                                                <td className="p-3 font-semibold text-red-300">
                                                    옳지 않음
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">ㄷ</td>

                                                <td className="p-3">
                                                    <InlineMath math="24" />
                                                </td>

                                                <td className="p-3 font-semibold text-green-300">
                                                    옳음
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <div className="mt-4 space-y-3 leading-8 text-gray-300">

                                    <p>
                                        모든 삼각형은 원 위의 세 점을 자유롭게 선택합니다.
                                    </p>

                                    <p>
                                        직각삼각형은 먼저 지름을 정한 뒤 나머지 한 점을 선택합니다.
                                    </p>

                                    <p>
                                        이등변삼각형은 꼭짓점을 정한 뒤,
                                        꼭짓점에서 같은 칸 수만큼 떨어진 두 점을 선택합니다.
                                    </p>

                                </div>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 옳은 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄱ,\ ㄷ}}
                    `}
                                />

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
                    \boxed{
                    \text{삼각형}
                    =
                    \text{세 점을 뽑는 전체 경우}
                    -
                    \text{일직선 위의 세 점}
                    }
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{직선}
                    =
                    \text{두 점을 뽑는 전체 경우}
                    -
                    \text{같은 직선의 중복}
                    }
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="text-center leading-8 text-gray-300">
                            도형의 개수를 구할 때는 계산보다 먼저
                            <b className="text-white"> 일직선 위에 놓인 점을 빠짐없이 찾는 것</b>이 중요합니다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.20 도형의 개수 (선분)
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    여러 방향의 평행선이 주어졌을 때, 필요한 방향의 직선을 선택하여
                    삼각형이나 사각형의 개수를 구할 수 있습니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    도형의 모양을 먼저 살펴보고, 각 방향에서 몇 개의 직선을
                    선택해야 하는지를 조합으로 나타냅니다.
                </p>

                {/* 기본 원리 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        도형을 만드는 직선의 선택
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                삼각형
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                서로 다른 세 방향에서 직선을 하나씩 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{세 방향에서 하나씩 선택}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                사다리꼴
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                한 방향에서 평행한 두 직선을 선택하고,
                                그 방향과 평행하지 않은 직선 중 두 개를 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{평행한 두 직선}
                        \quad+\quad
                        \text{나머지 두 직선}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                평행사변형
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                서로 다른 두 방향에서 평행한 직선을 각각 두 개씩 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{한 방향에서 2개}
                        \quad+\quad
                        \text{다른 방향에서 2개}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                마름모
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                평행사변형 중에서 네 변의 길이가 같은 것을 찾습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{평행한 두 쌍}
                        \quad+\quad
                        \text{네 변의 길이가 같음}
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예시
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    그림과 같이 세 방향의 평행선이 그어져 있다.
                                    이 직선들로 만들어지는 삼각형, 사다리꼴,
                                    평행사변형, 마름모의 개수, 마름모가 아닌 평행사변형의 개수를 각각 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        단, 사다리꼴에는 평행사변형을 포함한다.
                                    </p>

                                </div>

                            </div>

                            <img
                                src="/images/4.20.png"
                                alt="가로 방향 4개, 왼쪽 아래 방향 2개, 오른쪽 위 방향 3개의 평행선"
                                className="mx-auto w-full max-w-xl rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 방향 분류 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    먼저 방향별 직선의 개수를 확인합니다
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-3">

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            가로 방향
                                        </p>

                                        <BlockMath math="4" />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            왼쪽 아래 방향
                                        </p>

                                        <BlockMath math="2" />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            오른쪽 위 방향
                                        </p>

                                        <BlockMath math="3" />

                                    </div>

                                </div>

                            </div>

                            {/* 삼각형 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 삼각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    삼각형은 서로 다른 세 방향의 직선이 하나씩 만나야
                                    만들어집니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 가로 방향에서 한 직선,
                                    왼쪽 아래 방향에서 한 직선,
                                    오른쪽 위 방향에서 한 직선을 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            {}_4C_1
                            \times{}_2C_1
                            \times{}_3C_1
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            4\times2\times3=24
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 삼각형은 모두{" "}
                                    <InlineMath math="24" />개입니다.
                                </p>

                            </div>

                            {/* 사다리꼴 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 사다리꼴의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    사다리꼴은 먼저 평행한 한 쌍의 직선을 선택하고,
                                    그 방향과 평행하지 않은 나머지 직선 중 두 개를 선택하여
                                    만듭니다.
                                </p>

                                {/* 2개 방향 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        왼쪽 아래 방향의 두 직선을 평행한 변으로 선택
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        평행한 두 직선은{" "}
                                        <InlineMath math={String.raw`{}_2C_2`} />가지로 정해집니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        나머지 가로 방향 <InlineMath math="4" />개와
                                        오른쪽 위 방향 <InlineMath math="3" />개를 합한{" "}
                                        <InlineMath math="7" />개의 직선 중 두 개를 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                {}_2C_2\times{}_7C_2
                            `}
                                    />

                                </div>

                                {/* 3개 방향 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        오른쪽 위 방향에서 평행한 두 직선을 선택
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        나머지 직선은 가로 방향{" "}
                                        <InlineMath math="4" />개와 왼쪽 아래 방향{" "}
                                        <InlineMath math="2" />개를 합하여{" "}
                                        <InlineMath math="6" />개입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                {}_3C_2\times{}_6C_2
                            `}
                                    />

                                </div>

                                {/* 4개 방향 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        가로 방향에서 평행한 두 직선을 선택
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        나머지 두 방향의 직선은 모두{" "}
                                        <InlineMath math="2+3=5" />개입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                {}_4C_2\times{}_5C_2
                            `}
                                    />

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    세 경우를 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                            {}_2C_2\times{}_7C_2
                            +{}_3C_2\times{}_6C_2
                            +{}_4C_2\times{}_5C_2
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            1\times21+3\times15+6\times10=126
                        `}
                                />

                                <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                    <p className="font-semibold text-red-300">
                                        평행사변형의 중복
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        평행사변형에는 평행한 변의 쌍이 두 쌍 있으므로,
                                        위 계산에서는 하나의 평행사변형이 두 번씩 계산됩니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        사다리꼴에는 평행사변형을 포함하지만,
                                        같은 도형은 한 번만 세어야 하므로
                                        평행사변형의 개수를 한 번 빼야 합니다.
                                    </p>

                                </div>

                            </div>

                            {/* 평행사변형 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    3. 평행사변형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    평행사변형은 서로 다른 두 방향에서
                                    평행한 직선을 각각 두 개씩 선택하여 만듭니다.
                                </p>

                                <div className="mt-5 space-y-4">

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="leading-8">
                                            왼쪽 아래 방향과 오른쪽 위 방향
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                    {}_2C_2\times{}_3C_2
                                `}
                                        />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="leading-8">
                                            오른쪽 위 방향과 가로 방향
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                    {}_3C_2\times{}_4C_2
                                `}
                                        />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="leading-8">
                                            가로 방향과 왼쪽 아래 방향
                                        </p>

                                        <BlockMath
                                            math={String.raw`
                                    {}_4C_2\times{}_2C_2
                                `}
                                        />

                                    </div>

                                </div>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            &{}_2C_2\times{}_3C_2
                            +{}_3C_2\times{}_4C_2
                            +{}_4C_2\times{}_2C_2\\
                            &=1\times3+3\times6+6\times1\\
                            &=27
                            \end{aligned}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 평행사변형은 모두{" "}
                                    <InlineMath math="27" />개입니다.
                                </p>

                            </div>

                            {/* 사다리꼴 최종 계산 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    사다리꼴의 최종 계산
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    앞에서 계산한 <InlineMath math="126" />에는
                                    평행사변형 <InlineMath math="27" />개가 각각 두 번씩
                                    포함되어 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    평행사변형을 사다리꼴에 포함하여 한 번씩 남기려면
                                    평행사변형의 개수를 한 번 빼야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{사다리꼴}
                            &=126-27\\
                            &=99
                            \end{aligned}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 평행사변형을 포함한 사다리꼴은 모두{" "}
                                    <InlineMath math="99" />개입니다.
                                </p>

                            </div>

                            {/* 마름모 */}
                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                <h4 className="text-lg font-bold text-orange-300">
                                    4. 마름모의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    마름모는 평행사변형 중에서 네 변의 길이가 같은 도형입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그림의 직선 사이의 간격이 일정하므로,
                                    방향과 크기에 따라 마름모를 분류하여 직접 셉니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <BlockMath
                                        math={String.raw`
                                2+3+3\times2+2\times1
                            `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                                2+3+6+2=13
                            `}
                                    />

                                </div>

                                <p className="leading-8 text-gray-300">
                                    따라서 마름모는 모두{" "}
                                    <InlineMath math="13" />개입니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-semibold text-yellow-300">
                                        마름모는 길이 조건을 확인합니다
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        평행한 두 쌍을 선택하면 모두 평행사변형이 되지만,
                                        마름모가 되려면 네 변의 길이까지 같아야 합니다.
                                        따라서 단순히 조합만 계산하지 않고 그림에서
                                        간격과 크기를 확인해야 합니다.
                                    </p>

                                </div>

                            </div>

                            {/* 마름모가 아닌 평행사변형 */}
                            <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h3 className="mb-4 text-xl font-bold text-green-300">
                                    5. 마름모가 아닌 평행사변형
                                </h3>

                                <p className="leading-8 text-gray-300">
                                    먼저 평행사변형의 개수를 구한 뒤,
                                    그중에서 마름모의 개수를 빼면
                                    마름모가 아닌 평행사변형의 개수를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                                        \text{마름모가 아닌 평행사변형}
                                        =
                                        \text{평행사변형}
                                        -
                                        \text{마름모}
                                    `}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    예시 문제에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
                                            27-13=14
                                        `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \text{삼각형의 개수}&=24,\\
                            \text{사다리꼴의 개수}&=99,\\
                            \text{평행사변형의 개수}&=27,\\
                            \text{마름모의 개수}&=13,\\
                            \text{마름모가 아닌 평행사변형의 개수}&=14
                            \end{aligned}
                        `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 도형별 선택 방법 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        도형별 직선 선택 방법
                    </h3>

                    <div className="overflow-x-auto">

                        <table className="w-full min-w-[760px] border-collapse text-left text-gray-300">

                            <thead>

                                <tr className="border-b border-white/15">

                                    <th className="p-3 font-semibold text-white">
                                        도형
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        직선을 선택하는 방법
                                    </th>

                                    <th className="p-3 font-semibold text-white">
                                        확인할 조건
                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        삼각형
                                    </td>

                                    <td className="p-3">
                                        서로 다른 세 방향에서 하나씩 선택
                                    </td>

                                    <td className="p-3">
                                        세 직선이 서로 만나야 함
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        사다리꼴
                                    </td>

                                    <td className="p-3">
                                        한 방향에서 두 개, 나머지 직선 중 두 개 선택
                                    </td>

                                    <td className="p-3">
                                        평행사변형의 중복 제거
                                    </td>

                                </tr>

                                <tr className="border-b border-white/10">

                                    <td className="p-3">
                                        평행사변형
                                    </td>

                                    <td className="p-3">
                                        서로 다른 두 방향에서 각각 두 개 선택
                                    </td>

                                    <td className="p-3">
                                        평행한 두 쌍
                                    </td>

                                </tr>

                                <tr>

                                    <td className="p-3">
                                        마름모
                                    </td>

                                    <td className="p-3">
                                        평행사변형 중에서 직접 분류
                                    </td>

                                    <td className="p-3">
                                        네 변의 길이가 같음
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 삼각형은 같은 방향의 평행선을 두 개 이상 선택할 수 없습니다.
                        </p>

                        <p>
                            ② 사다리꼴에는 평행사변형이 포함됩니다.
                        </p>

                        <p>
                            ③ 사다리꼴을 평행한 변의 방향에 따라 분류하면,
                            평행사변형은 두 방향에서 각각 한 번씩 계산되어 두 번 세어집니다.
                        </p>

                        <p>
                            ④ 따라서 사다리꼴의 개수를 구할 때는
                            중복하여 센 평행사변형의 개수를 한 번 빼야 합니다.
                        </p>

                        <p>
                            ⑤ 마름모는 평행한 두 쌍뿐 아니라
                            네 변의 길이가 같은지도 확인해야 합니다.
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 정사각형의 각 변을
                                    <InlineMath math="4" />등분하여 얻은 도형이다.
                                    이 도형의 선을 변으로 하는 사각형 중에서 다음을 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        (1) 정사각형의 개수
                                    </p>

                                    <p className="mt-2 leading-8 text-gray-300">
                                        (2) 정사각형이 아닌 직사각형의 개수
                                    </p>

                                </div>

                            </div>

                            <img
                                src="/images/4.20_1.png"
                                alt="각 변을 4등분한 4행 4열의 정사각형 격자"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <p className="leading-8">
                                이 도형에는 가로 방향의 직선과 세로 방향의 직선이
                                각각 <InlineMath math="5" />개씩 있습니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    먼저 전체 직사각형을 생각합니다
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직사각형은 가로 방향의 직선 중 두 개와
                                    세로 방향의 직선 중 두 개를 선택하면 하나가 만들어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_5C_2\times{}_5C_2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        10\times10=100
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 정사각형을 포함한 모든 직사각형은{" "}
                                    <InlineMath math="100" />개입니다.
                                </p>

                            </div>

                            {/* 정사각형 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    (1) 정사각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    정사각형은 가로의 길이와 세로의 길이가 같아야 하므로
                                    한 변의 길이에 따라 분류하여 셉니다.
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[680px] border-collapse text-center text-gray-300">

                                        <thead>

                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    정사각형의 크기
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    가로 위치
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    세로 위치
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    개수
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="1\times1" />
                                                </td>

                                                <td className="p-3">
                                                    4가지
                                                </td>

                                                <td className="p-3">
                                                    4가지
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="4\times4=16" />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="2\times2" />
                                                </td>

                                                <td className="p-3">
                                                    3가지
                                                </td>

                                                <td className="p-3">
                                                    3가지
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="3\times3=9" />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="3\times3" />
                                                </td>

                                                <td className="p-3">
                                                    2가지
                                                </td>

                                                <td className="p-3">
                                                    2가지
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2\times2=4" />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    <InlineMath math="4\times4" />
                                                </td>

                                                <td className="p-3">
                                                    1가지
                                                </td>

                                                <td className="p-3">
                                                    1가지
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="1\times1=1" />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    따라서 정사각형의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        4^2+3^2+2^2+1^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        16+9+4+1=30
                    `}
                                />

                            </div>

                            {/* 정사각형이 아닌 직사각형 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    (2) 정사각형이 아닌 직사각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    앞에서 구한 모든 직사각형에는 정사각형도 포함되어 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 전체 직사각형에서 정사각형을 빼면
                                    정사각형이 아닌 직사각형의 개수가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{정사각형이 아닌 직사각형}
                        =
                        \text{전체 직사각형}
                        -
                        \text{정사각형}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        100-30=70
                    `}
                                />

                            </div>

                            {/* 다른 풀이 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    정사각형을 크기별로 세는 이유
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직사각형은 가로선 두 개와 세로선 두 개를 자유롭게 선택하면
                                    되지만, 정사각형은 가로와 세로의 간격이 같아야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 정사각형은 조합식 하나로 바로 계산하기보다,
                                    한 변의 길이에 따라 분류하여 세는 것이 편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\times1,\quad
                        2\times2,\quad
                        3\times3,\quad
                        4\times4
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="mt-4 space-y-4 leading-8 text-gray-300">

                                    <p>
                                        직사각형은 가로 방향에서 두 직선,
                                        세로 방향에서 두 직선을 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \text{직사각형}
                            =
                            {}_5C_2\times{}_5C_2
                        `}
                                    />

                                    <p>
                                        정사각형은 가로와 세로의 간격이 같아야 하므로
                                        크기에 따라 분류합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \text{정사각형}
                            =
                            4^2+3^2+2^2+1^2
                        `}
                                    />

                                    <p>
                                        정사각형이 아닌 직사각형은 포함 관계를 이용하여
                                        전체 직사각형에서 정사각형을 뺍니다.
                                    </p>

                                </div>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{(1) 정사각형의 개수}&=30,\\
                        \text{(2) 정사각형이 아닌 직사각형의 개수}&=70
                        \end{aligned}
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                삼각형 <InlineMath math="\mathrm{ABC}" />에서 꼭짓점{" "}
                                <InlineMath math="\mathrm{A}" />와 선분{" "}
                                <InlineMath math="\mathrm{BC}" /> 위의 다섯 점을 연결하는{" "}
                                <InlineMath math="5" />개의 선분을 그리고, 선분{" "}
                                <InlineMath math="\mathrm{AB}" /> 위의 세 점과 선분{" "}
                                <InlineMath math="\mathrm{AC}" /> 위의 세 점을 연결하는{" "}
                                <InlineMath math="3" />개의 선분을 그려 그림과 같은 도형을 만들었다.
                                이 도형의 선들로 만들 수 있는 삼각형의 개수를 구하여라.
                            </p>

                            <div className="mt-6 flex justify-center">

                                <img
                                    src="/images/4.20_2.png"
                                    alt="한 꼭짓점에서 뻗은 7개의 선과 서로 평행한 4개의 가로선으로 이루어진 삼각형 모양"
                                    className="w-full max-w-3xl rounded-xl bg-white"
                                />

                            </div>
                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                이 도형에서 삼각형은 꼭짓점{" "}
                                <InlineMath math="\mathrm{A}" />에서 만나는 두 직선과,
                                이 두 직선을 가로지르는 평행선 하나를 선택하면 만들어집니다.
                            </p>

                            {/* A에서 만나는 직선 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 꼭짓점 A에서 만나는 두 직선 선택
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    꼭짓점 <InlineMath math="\mathrm{A}" />에서
                                    선분 <InlineMath math="\mathrm{BC}" /> 쪽으로 뻗은 직선은
                                    양쪽 변 <InlineMath math="\mathrm{AB,\ AC}" />를 포함하여
                                    모두 <InlineMath math="7" />개입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 중 서로 다른 두 직선을 선택하면
                                    삼각형의 양쪽 변이 정해집니다.
                                </p>

                                <BlockMath math={String.raw`{}_7C_2`} />

                            </div>

                            {/* 평행선 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    2. 삼각형의 밑변이 되는 직선 선택
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    선택한 두 직선을 가로지르는 평행선은
                                    내부의 <InlineMath math="3" />개와 선분{" "}
                                    <InlineMath math="\mathrm{BC}" />를 합하여
                                    모두 <InlineMath math="4" />개입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 중 하나를 선택하면 삼각형의 밑변이 정해집니다.
                                </p>

                                <BlockMath math={String.raw`{}_4C_1`} />

                            </div>

                            <p className="leading-8">
                                두 직선과 밑변이 되는 평행선을 모두 선택해야 하므로
                                곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_7C_2\times{}_4C_1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_7C_2\times{}_4C_1
                    &=21\times4\\
                    &=84
                    \end{aligned}
                `}
                            />

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{A에서 만나는 두 직선}
                        \quad+\quad
                        \text{밑변이 되는 평행선 하나}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    꼭짓점 <InlineMath math="\mathrm{A}" />에서 만나는
                                    두 직선을 선택하면 삼각형의 양쪽 변이 정해집니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그다음 이 두 직선을 가로지르는{" "}
                                    <InlineMath math="4" />개의 평행선 중 하나를 선택하면
                                    삼각형 하나가 완성됩니다.
                                </p>

                            </div>

                            {/* 일반화 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    일반화
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    한 점에서 만나는 직선이{" "}
                                    <InlineMath math="m" />개이고,
                                    이를 가로지르는 평행선이{" "}
                                    <InlineMath math="n" />개라면 만들어지는 삼각형의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_mC_2\times{}_nC_1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 삼각형의 개수는
                                </p>

                                <BlockMath math="84" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                그림은 합동인 정사각형 <InlineMath math="13" />개를
                                이어 붙여 만든 도형을 나타낸 것이다.
                                이 도형에서 찾을 수 있는 사각형 중에서
                                정사각형이 아닌 직사각형의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.20_3.png"
                                alt="정사각형 13개를 이어 붙여 만든 계단 모양의 격자 도형"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <p className="leading-8">
                                정사각형이 아닌 직사각형의 개수는
                                전체 직사각형의 개수에서 정사각형의 개수를 빼서 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{정사각형이 아닌 직사각형}
                    =
                    \text{전체 직사각형}
                    -
                    \text{정사각형}
                `}
                            />

                            {/* 전체 직사각형 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 전체 직사각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    도형을 아래쪽의{" "}
                                    <InlineMath math="2\times5" /> 격자 부분과
                                    위쪽까지 사용하는 부분으로 나누어 셉니다.
                                </p>

                                {/* 아래 2×5 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        아래쪽 <InlineMath math="2\times5" /> 격자에서 만들어지는 직사각형
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        세로 방향의 직선은{" "}
                                        <InlineMath math="6" />개이고,
                                        가로 방향의 직선은{" "}
                                        <InlineMath math="3" />개입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        세로선 두 개와 가로선 두 개를 선택하면
                                        직사각형 하나가 만들어집니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            {}_6C_2\times{}_3C_2
                        `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                            15\times3=45
                        `}
                                    />

                                </div>

                                {/* 위쪽 포함 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        위쪽 가로선을 사용하는 직사각형
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        위쪽 가로선은 왼쪽{" "}
                                        <InlineMath math="3" />칸에만 있으므로,
                                        사용할 수 있는 세로선은{" "}
                                        <InlineMath math="4" />개입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        위쪽 가로선을 윗변으로 정하고,
                                        그 아래의 가로선{" "}
                                        <InlineMath math="3" />개 중 하나를 아랫변으로 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            {}_4C_2\times{}_3C_1
                        `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                            6\times3=18
                        `}
                                    />

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    따라서 전체 직사각형의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        45+18=63
                    `}
                                />

                            </div>

                            {/* 정사각형 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 정사각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    정사각형은 한 변의 길이에 따라 분류하여 셉니다.
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[680px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    크기
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    개수
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    계산
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="1\times1" />
                                                </td>

                                                <td className="p-3">
                                                    13개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="13" />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="2\times2" />
                                                </td>

                                                <td className="p-3">
                                                    5개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2+3=5" />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    <InlineMath math="3\times3" />
                                                </td>

                                                <td className="p-3">
                                                    2개
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2" />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    따라서 정사각형의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        13+5+2=20
                    `}
                                />

                            </div>

                            {/* 최종 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    3. 정사각형이 아닌 직사각형의 개수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    전체 직사각형{" "}
                                    <InlineMath math="63" />개에서 정사각형{" "}
                                    <InlineMath math="20" />개를 뺍니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{정사각형이 아닌 직사각형}
                        &=63-20\\
                        &=43
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직사각형 격자가 완전하지 않으므로,
                                    전체 도형을 한 번에 조합으로 계산할 수 없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 아래쪽의 완전한 격자를 계산하고,
                                    위쪽 가로선을 사용하는 직사각형을 따로 계산하여 더합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{아래쪽 격자}
                        \quad+\quad
                        \text{위쪽을 포함하는 직사각형}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    마지막으로 정사각형을 크기별로 센 뒤
                                    전체 직사각형에서 빼면 됩니다.
                                </p>

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    위쪽 가로선은 도형 전체를 가로지르지 않습니다.
                                    따라서 위쪽 가로선을 사용하는 직사각형은
                                    왼쪽 <InlineMath math="3" />칸 안에서만 만들 수 있습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정사각형이 아닌 직사각형의 개수는
                                </p>

                                <BlockMath math="43" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

                            <p className="leading-8 text-gray-300">
                                그림은 합동인 정사각형 <InlineMath math="14" />개를
                                이어 붙여 만든 도형이다.
                                이 도형에서 찾을 수 있는 직사각형의 개수를 구하여라.
                            </p>

                            <img
                                src="/images/4.20_4.png"
                                alt="아래에서부터 6칸, 5칸, 3칸으로 쌓인 계단 모양의 격자 도형"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <p className="leading-8">
                                직사각형의 높이에 따라 경우를 분류합니다.
                                각 높이에서 공통으로 이어져 있는 칸의 수를 확인하면,
                                그 부분의 세로선 중 두 개를 선택하여 직사각형을 만들 수 있습니다.
                            </p>

                            {/* 높이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 높이가 1인 직사각형
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    각 가로줄을 따로 살펴봅니다.
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-3">

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            아래쪽 줄
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            정사각형이 <InlineMath math="6" />개이므로
                                            세로선은 <InlineMath math="7" />개입니다.
                                        </p>

                                        <BlockMath math={String.raw`{}_7C_2=21`} />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            가운데 줄
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            정사각형이 <InlineMath math="5" />개이므로
                                            세로선은 <InlineMath math="6" />개입니다.
                                        </p>

                                        <BlockMath math={String.raw`{}_6C_2=15`} />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5 text-center">

                                        <p className="font-semibold text-white">
                                            위쪽 줄
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            정사각형이 <InlineMath math="3" />개이므로
                                            세로선은 <InlineMath math="4" />개입니다.
                                        </p>

                                        <BlockMath math={String.raw`{}_4C_2=6`} />

                                    </div>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        21+15+6=42
                    `}
                                />

                            </div>

                            {/* 높이 2 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    2. 높이가 2인 직사각형
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    서로 이웃한 두 줄에서 공통으로 이어지는 부분을 찾습니다.
                                </p>

                                <div className="mt-5 grid gap-5 md:grid-cols-2">

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="font-semibold text-white">
                                            아래쪽 두 줄
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            두 줄에 공통으로 존재하는 부분은
                                            가로로 <InlineMath math="5" />칸입니다.
                                            따라서 사용할 수 있는 세로선은{" "}
                                            <InlineMath math="6" />개입니다.
                                        </p>

                                        <BlockMath math={String.raw`{}_6C_2=15`} />

                                    </div>

                                    <div className="rounded-xl bg-black/40 p-5">

                                        <p className="font-semibold text-white">
                                            위쪽 두 줄
                                        </p>

                                        <p className="mt-3 leading-8 text-gray-300">
                                            두 줄에 공통으로 존재하는 부분은
                                            가로로 <InlineMath math="3" />칸입니다.
                                            따라서 사용할 수 있는 세로선은{" "}
                                            <InlineMath math="4" />개입니다.
                                        </p>

                                        <BlockMath math={String.raw`{}_4C_2=6`} />

                                    </div>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        15+6=21
                    `}
                                />

                            </div>

                            {/* 높이 3 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    3. 높이가 3인 직사각형
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    세 줄 모두에 공통으로 존재하는 부분은
                                    가로로 <InlineMath math="3" />칸입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 사용할 수 있는 세로선은{" "}
                                    <InlineMath math="4" />개이므로
                                </p>

                                <BlockMath math={String.raw`{}_4C_2=6`} />

                                <p className="leading-8 text-gray-300">
                                    개의 직사각형이 만들어집니다.
                                </p>

                            </div>

                            {/* 전체 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="text-lg font-bold text-green-300">
                                    전체 직사각형의 개수
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        42+21+6
                        &=69
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 표 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="font-semibold text-white">
                                    높이에 따른 정리
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[680px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    높이
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    공통으로 이어지는 칸
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    직사각형의 개수
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    1
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="6,\ 5,\ 3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath
                                                        math={String.raw`
                                            {}_7C_2+{}_6C_2+{}_4C_2=42
                                        `}
                                                    />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    2
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="5,\ 3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath
                                                        math={String.raw`
                                            {}_6C_2+{}_4C_2=21
                                        `}
                                                    />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    3
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math={String.raw`{}_4C_2=6`} />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    완전한 직사각형 모양의 격자가 아니므로
                                    전체 가로선과 세로선을 한 번에 선택할 수 없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직사각형의 높이에 따라 경우를 분류한 뒤,
                                    선택한 높이 전체에 공통으로 이어지는 가로 구간을 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{높이 결정}
                        \quad\longrightarrow\quad
                        \text{공통 구간 확인}
                        \quad\longrightarrow\quad
                        \text{세로선 두 개 선택}
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    높이가 <InlineMath math="2" /> 이상인 직사각형은
                                    선택한 모든 줄에서 가로 구간이 이어져 있어야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    한 줄에만 존재하는 칸까지 포함하여 세면
                                    직사각형의 변이 완성되지 않으므로 셀 수 없습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 직사각형의 개수는
                                </p>

                                <BlockMath math="69" />

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
                            도형의 모양을 먼저 보고, 각 방향에서 필요한 직선의 개수를
                            선택합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{도형의 조건 확인}
                    \quad\longrightarrow\quad
                    \text{방향별 직선 선택}
                    \quad\longrightarrow\quad
                    \text{중복 확인}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \text{삼각형}
                    &: \text{세 방향에서 하나씩}\\
                    \text{사다리꼴}
                    &: \text{한 방향에서 두 개와 나머지 두 개}\\
                    \text{평행사변형}
                    &: \text{두 방향에서 각각 두 개}\\
                    \text{마름모}
                    &: \text{평행사변형과 같은 길이 조건}
                    \end{aligned}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="text-center font-semibold text-yellow-300">
                                사다리꼴에는 평행사변형이 포함되지만,
                                같은 평행사변형을 두 번 세지 않도록 중복을 제거합니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.21 조 나누기 (분할)
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    여러 사람을 일정한 인원수의 조로 나눌 때에는
                    한 조씩 차례대로 구성한 뒤 곱의 법칙을 사용합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    이때 구성원의 수가 같은 조가 여러 개 있으면,
                    같은 크기의 조끼리 자리를 바꾼 경우가 중복하여 계산됩니다.
                    따라서 같은 크기의 조의 자리바꿈만큼 나누어야 합니다.
                </p>

                {/* 기본 원리 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        조를 나누는 기본 원리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            먼저 첫 번째 조의 구성원을 뽑고,
                            남은 사람 중에서 두 번째 조의 구성원을 뽑는 과정을 반복합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{첫 번째 조 뽑기}
                    \quad\longrightarrow\quad
                    \text{남은 사람 중 두 번째 조 뽑기}
                    \quad\longrightarrow\quad
                    \cdots
                `}
                        />

                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                조의 크기가 모두 다른 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                각 조는 구성원의 수로 구별되므로,
                                차례대로 뽑은 경우의 수를 그대로 곱합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{각 조를 뽑는 경우의 수를 그대로 곱한다}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                같은 크기의 조가 있는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 크기의 조끼리 자리를 바꾼 경우는
                                실제로 같은 조 나누기입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                같은 크기 조가 <InlineMath math="k" />개이면
                                마지막에 <InlineMath math="k!" />로 나눕니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{같은 크기 조가 \(k\)개}
                        \Longrightarrow
                        k!\text{로 나눈다}
                        }
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 문제
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 <InlineMath math="12" />명의 학생을
                            다음과 같은 인원수의 조로 나누는 경우의 수를 각각 구하여라.
                            단, 같은 인원수의 조끼리는 서로 구별하지 않는다.
                        </p>

                    </div>

                    <div className="mt-6 space-y-8">

                        {/* 1 */}
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <h4 className="text-lg font-bold text-blue-300">
                                1. <InlineMath math="3" />명,{" "}
                                <InlineMath math="4" />명,{" "}
                                <InlineMath math="5" />명으로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                먼저 <InlineMath math="12" />명 중{" "}
                                <InlineMath math="3" />명을 뽑고,
                                남은 <InlineMath math="9" />명 중{" "}
                                <InlineMath math="4" />명을 뽑습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                마지막 <InlineMath math="5" />명은 자동으로{" "}
                                <InlineMath math="5" />명짜리 조가 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_3
                        \times{}_9C_4
                        \times{}_5C_5
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                세 조의 구성원 수가 모두 다르므로
                                조끼리 서로 구별됩니다.
                                따라서 따로 나누어 줄 필요가 없습니다.
                            </p>

                        </div>

                        {/* 2 */}
                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <h4 className="text-lg font-bold text-yellow-300">
                                2. <InlineMath math="6" />명,{" "}
                                <InlineMath math="6" />명으로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                먼저 첫 번째 <InlineMath math="6" />명짜리 조를 뽑으면,
                                남은 <InlineMath math="6" />명은 자동으로 다른 조가 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_6\times{}_6C_6
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                그러나 두 조의 구성원 수가 같으므로,
                                두 조의 자리를 바꾼 경우가 중복하여 계산됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{{}_{12}C_6\times{}_6C_6}{2!}
                    `}
                            />

                        </div>

                        {/* 3 */}
                        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <h4 className="text-lg font-bold text-purple-300">
                                3. <InlineMath math="6" />명,{" "}
                                <InlineMath math="3" />명,{" "}
                                <InlineMath math="3" />명으로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                먼저 <InlineMath math="6" />명짜리 조를 만들고,
                                남은 <InlineMath math="6" />명 중{" "}
                                <InlineMath math="3" />명을 뽑아 첫 번째{" "}
                                <InlineMath math="3" />명짜리 조를 만듭니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_6
                        \times{}_6C_3
                        \times{}_3C_3
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="6" />명짜리 조는 인원수가 달라 구별되지만,{" "}
                                <InlineMath math="3" />명짜리 두 조는 서로 구별되지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{
                            {}_{12}C_6
                            \times{}_6C_3
                            \times{}_3C_3
                        }{2!}
                    `}
                            />

                        </div>

                        {/* 4 */}
                        <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                            <h4 className="text-lg font-bold text-orange-300">
                                4. <InlineMath math="4" />명,{" "}
                                <InlineMath math="4" />명,{" "}
                                <InlineMath math="4" />명으로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                첫 번째 조에 들어갈 <InlineMath math="4" />명을 뽑고,
                                남은 <InlineMath math="8" />명 중{" "}
                                <InlineMath math="4" />명을 두 번째 조로 뽑습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_4
                        \times{}_8C_4
                        \times{}_4C_4
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                세 조의 인원수가 모두 같으므로,
                                세 조의 자리바꿈{" "}
                                <InlineMath math="3!" />만큼 중복하여 계산됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{
                            {}_{12}C_4
                            \times{}_8C_4
                            \times{}_4C_4
                        }{3!}
                    `}
                            />

                        </div>

                        {/* 5 */}
                        <div className="rounded-xl border border-pink-500/30 bg-pink-500/5 p-5">

                            <h4 className="text-lg font-bold text-pink-300">
                                5. <InlineMath math="6" />명,{" "}
                                <InlineMath math="2" />명,{" "}
                                <InlineMath math="2" />명,{" "}
                                <InlineMath math="2" />명으로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                먼저 <InlineMath math="6" />명짜리 조를 만들고,
                                남은 <InlineMath math="6" />명을{" "}
                                <InlineMath math="2" />명씩 세 조로 나눕니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_6
                        \times{}_6C_2
                        \times{}_4C_2
                        \times{}_2C_2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="2" />명짜리 세 조끼리는 서로 구별되지 않으므로{" "}
                                <InlineMath math="3!" />로 나눕니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{
                            {}_{12}C_6
                            \times{}_6C_2
                            \times{}_4C_2
                            \times{}_2C_2
                        }{3!}
                    `}
                            />

                        </div>

                        {/* 6 */}
                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <h4 className="text-lg font-bold text-green-300">
                                6. <InlineMath math="3" />명씩{" "}
                                <InlineMath math="4" />개의 조로 나누는 경우
                            </h4>

                            <p className="mt-4 leading-8 text-gray-300">
                                차례대로 <InlineMath math="3" />명씩 뽑으면
                            </p>

                            <BlockMath
                                math={String.raw`
                        {}_{12}C_3
                        \times{}_9C_3
                        \times{}_6C_3
                        \times{}_3C_3
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                그러나 네 조의 인원수가 모두 같으므로
                                네 조의 자리바꿈{" "}
                                <InlineMath math="4!" />만큼 중복하여 계산됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{
                            {}_{12}C_3
                            \times{}_9C_3
                            \times{}_6C_3
                            \times{}_3C_3
                        }{4!}
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 왜 나누는가 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        왜 같은 조의 자리바꿈만큼 나누는가?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        예를 들어 <InlineMath math="6" />명짜리 두 조를{" "}
                        <InlineMath math="\mathrm{A}" />조와{" "}
                        <InlineMath math="\mathrm{B}" />조라고 임시로 이름 붙여
                        차례대로 만들었다고 하겠습니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                첫 번째 계산
                            </p>

                            <BlockMath
                                math={String.raw`
                        \mathrm{A}\text{조}=\{1,2,3,4,5,6\}
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \mathrm{B}\text{조}=\{7,8,9,10,11,12\}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                자리를 바꾸어 계산
                            </p>

                            <BlockMath
                                math={String.raw`
                        \mathrm{A}\text{조}=\{7,8,9,10,11,12\}
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \mathrm{B}\text{조}=\{1,2,3,4,5,6\}
                    `}
                            />

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 결과는 조의 이름만 바뀌었을 뿐,
                        실제로는 같은 두 조로 나눈 경우입니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        따라서 같은 크기의 조가 두 개이면
                        두 조의 자리바꿈인 <InlineMath math="2!" />로 나눕니다.
                    </p>

                </div>

                {/* 여러 종류의 같은 조 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        같은 크기의 조가 여러 종류 있는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        같은 크기의 조가 두 종류 이상 있으면,
                        각 크기의 조끼리 생기는 자리바꿈을 모두 나누어야 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어 여러 사람을{" "}
                            <InlineMath math="4,\ 4,\ 2,\ 2" />명으로 나눈다면,
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="4" />명짜리 두 조의 자리바꿈과{" "}
                            <InlineMath math="2" />명짜리 두 조의 자리바꿈을
                            각각 제거해야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{
                        \text{차례대로 각 조를 뽑는 경우의 수}
                    }{2!\times2!}
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{aligned}
                    &\text{같은 크기의 조가 \(a\)개이고}\\
                    &\text{또 다른 같은 크기의 조가 \(b\)개이면}\\
                    &a!\times b!\text{로 나눈다}
                    \end{aligned}
                    }
                `}
                        />

                    </div>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        조 나누기 문제의 풀이 순서
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{gathered}
                    \text{각 조의 구성원 수 확인}\\
                    \downarrow\\
                    \text{한 조씩 차례대로 구성원 뽑기}\\
                    \downarrow\\
                    \text{각 경우의 수를 곱하기}\\
                    \downarrow\\
                    \text{같은 크기의 조의 자리바꿈만큼 나누기}
                    \end{gathered}
                `}
                        />

                    </div>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 인원수가 다른 조끼리는 서로 구별되므로
                            자리바꿈으로 나누지 않습니다.
                        </p>

                        <p>
                            ② 같은 인원수의 조끼리는 조의 이름이 따로 주어지지 않았다면
                            서로 구별하지 않습니다.
                        </p>

                        <p>
                            ③ 같은 크기의 조가{" "}
                            <InlineMath math="k" />개이면{" "}
                            <InlineMath math="k!" />로 나눕니다.
                        </p>

                        <p>
                            ④ 같은 크기의 조가 여러 종류 있으면
                            각 조의 자리바꿈을 곱한 만큼 나눕니다.
                        </p>

                        <p>
                            ⑤ ‘1조, 2조, 3조’처럼 조의 이름이 정해져 있거나
                            서로 다른 역할을 맡는다면 조끼리 구별되므로
                            나누지 않습니다.
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
                            <InlineMath math="6" />명의 학생이{" "}
                            <InlineMath math="2" />명씩 짝을 이루어{" "}
                            서로 다른 세 곳으로 봉사 활동을 가는 방법의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="6" />명의 학생을{" "}
                                <InlineMath math="2" />명씩 세 조로 나눕니다.
                            </p>

                            <p className="leading-8">
                                첫 번째 조의 <InlineMath math="2" />명을 뽑고,
                                남은 <InlineMath math="4" />명 중 두 번째 조의{" "}
                                <InlineMath math="2" />명을 뽑으면,
                                마지막 두 명은 자동으로 세 번째 조가 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_6C_2
                    \times{}_4C_2
                    \times{}_2C_2
                `}
                            />

                            <p className="leading-8">
                                이때 <InlineMath math="2" />명씩 이루어진 세 조는
                                아직 서로 구별되지 않으므로,
                                세 조의 자리바꿈인 <InlineMath math="3!" />로 나누면
                                조를 나누는 방법의 수는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{
                        {}_6C_2
                        \times{}_4C_2
                        \times{}_2C_2
                    }{3!}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \frac{15\times6\times1}{6}
                    =
                    15
                `}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    서로 다른 세 곳에 배정하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    만들어진 세 조를 서로 다른 세 곳에 배정하는 방법은{" "}
                                    <InlineMath math="3!" />가지입니다.
                                </p>

                                <BlockMath math="3!" />

                                <p className="leading-8 text-gray-300">
                                    따라서 전체 방법의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{
                            {}_6C_2
                            \times{}_4C_2
                            \times{}_2C_2
                        }{3!}
                        \times3!
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                앞에서 같은 크기의 세 조 때문에 나눈{" "}
                                <InlineMath math="3!" />과,
                                서로 다른 세 장소에 배정하면서 곱한{" "}
                                <InlineMath math="3!" />이 서로 없어집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_6C_2
                    \times{}_4C_2
                    \times{}_2C_2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    15\times6\times1=90
                `}
                            />

                            {/* 다른 풀이 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    다른 풀이: 장소별로 학생 뽑기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    세 봉사 장소가 서로 다르므로,
                                    처음부터 각 장소에 갈 학생을 차례대로 뽑아도 됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    첫 번째 장소에 갈 학생{" "}
                                    <InlineMath math="2" />명을 뽑고,
                                    남은 학생 중 두 번째 장소에 갈{" "}
                                    <InlineMath math="2" />명을 뽑으면,
                                    남은 두 명은 세 번째 장소로 갑니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_6C_2
                        \times{}_4C_2
                        \times{}_2C_2
                        =
                        90
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    장소가 서로 다르므로 세 조가 이미 구별되어 있어{" "}
                                    <InlineMath math="3!" />로 나누지 않습니다.
                                </p>

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    단순히 <InlineMath math="2" />명씩 세 조로만 나눈다면
                                    같은 크기의 세 조를 서로 구별하지 않으므로{" "}
                                    <InlineMath math="3!" />로 나눕니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 이 문제에서는 세 조가 서로 다른 세 장소에 배정되므로
                                    장소에 따라 조가 구별됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{역할이나 장소가 다르면 조를 구별한다}
                        }
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    세 장소가 서로 다르므로 최종 계산에서{" "}
                                    <InlineMath math="3!" />로 나누면 안 됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 인원수의 조라도 각 조가 서로 다른 장소나 역할을 가지면
                                    서로 구별되는 조입니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 봉사 활동을 가는 방법의 수는
                                </p>

                                <BlockMath math="90" />

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
                            서로 다른 소설책 <InlineMath math="7" />권과 서로 다른 수필집{" "}
                            <InlineMath math="3" />권을 <InlineMath math="5" />권씩
                            두 묶음으로 나누려고 한다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이때 각 묶음에 적어도 한 권의 수필집이 포함되도록
                            나누는 방법의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                수필집은 모두 <InlineMath math="3" />권이고,
                                두 묶음에 각각 적어도 한 권씩 포함되어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 묶음에 들어가는 수필집의 수는 반드시
                            </p>

                            <BlockMath
                                math={String.raw`
                    1\text{권과 }2\text{권}
                `}
                            />

                            <p className="leading-8">
                                으로 나뉩니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    수필집이 1권 들어가는 묶음 만들기
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    두 묶음 중에서 수필집이 <InlineMath math="1" />권 들어가는
                                    묶음은 수필집의 수가 적으므로 다른 묶음과 구별됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 서로 다른 수필집 <InlineMath math="3" />권 중{" "}
                                    <InlineMath math="1" />권을 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_3C_1`} />

                                <p className="leading-8 text-gray-300">
                                    이 묶음은 모두 <InlineMath math="5" />권이어야 하므로,
                                    소설책 <InlineMath math="7" />권 중{" "}
                                    <InlineMath math="4" />권을 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_7C_4`} />

                                <p className="leading-8 text-gray-300">
                                    나머지 소설책 <InlineMath math="3" />권과 수필집{" "}
                                    <InlineMath math="2" />권은 자동으로 다른 묶음이 됩니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_3C_1\times{}_7C_4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_3C_1\times{}_7C_4
                    &=3\times35\\
                    &=105
                    \end{aligned}
                `}
                            />

                            {/* 왜 2!로 나누지 않는가 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    왜 <InlineMath math="2!" />로 나누지 않는가?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 묶음의 책 수는 모두 <InlineMath math="5" />권이지만,
                                    한 묶음에는 수필집이 <InlineMath math="1" />권,
                                    다른 묶음에는 수필집이 <InlineMath math="2" />권 들어갑니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 두 묶음은 수필집의 수에 의해 구별되므로
                                    묶음의 자리바꿈으로 나누지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{수필집 1권인 묶음과 수필집 2권인 묶음은 구별된다}
                        }
                    `}
                                />

                            </div>

                            {/* 다른 풀이 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    다른 풀이: 전체에서 조건에 맞지 않는 경우 빼기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 서로 다른 <InlineMath math="10" />권의 책을{" "}
                                    <InlineMath math="5" />권씩 서로 구별하지 않는 두 묶음으로
                                    나누는 전체 방법의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{{}_{10}C_5\times{}_5C_5}{2!}
                        =
                        \frac{{}_{10}C_5}{2}
                    `}
                                />

                                <BlockMath math="126" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건에 맞지 않는 경우는 한 묶음에 수필집이 한 권도 없는
                                    경우입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 묶음은 소설책 <InlineMath math="7" />권 중{" "}
                                    <InlineMath math="5" />권으로 이루어지므로
                                </p>

                                <BlockMath math={String.raw`{}_7C_5=21`} />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        126-21=105
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    수필집 <InlineMath math="3" />권을 두 묶음에 적어도 한 권씩
                                    넣으려면 수필집의 분배는{" "}
                                    <InlineMath math="1+2" />로 정해집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{수필집 1권 선택}
                        \quad\longrightarrow\quad
                        \text{함께 넣을 소설책 4권 선택}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        {}_3C_1\times{}_7C_4
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 묶음의 전체 책 수가 같다는 이유만으로
                                    무조건 <InlineMath math="2!" />로 나누면 안 됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이 문제에서는 수필집이 <InlineMath math="1" />권인 묶음과{" "}
                                    <InlineMath math="2" />권인 묶음이 서로 구별됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 책을 나누는 방법의 수는
                                </p>

                                <BlockMath math="105" />

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
                            서로 다른 <InlineMath math="7" />개의 과일을 똑같은 바구니{" "}
                            <InlineMath math="3" />개에 나누어 담을 때, 다음 조건을
                            만족시키도록 넣는 경우의 수를 구하여라.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                            <p className="leading-8 text-gray-300">
                                (가) 빈 바구니가 없도록 담는다.
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (나) 바구니 <InlineMath math="3" />개에 넣은 과일의 개수는
                                서로 다르다.
                            </p>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                세 바구니가 모두 비어 있지 않고, 각 바구니에 들어가는
                                과일의 개수가 서로 달라야 합니다.
                            </p>

                            <p className="leading-8">
                                서로 다른 세 자연수의 합이{" "}
                                <InlineMath math="7" />이 되는 경우를 찾으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    1+2+4=7
                `}
                            />

                            <p className="leading-8">
                                뿐입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    바구니별 과일의 개수
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\text{개},\quad
                        2\text{개},\quad
                        4\text{개}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    바구니는 서로 똑같지만, 들어 있는 과일의 개수가{" "}
                                    <InlineMath math="1,\ 2,\ 4" />개로 서로 다르므로
                                    세 묶음은 크기에 따라 구별됩니다.
                                </p>

                            </div>

                            {/* 1개 묶음 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 과일이 1개인 바구니 정하기
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    서로 다른 <InlineMath math="7" />개의 과일 중
                                    과일이 <InlineMath math="1" />개 들어가는 바구니에 넣을
                                    과일을 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_7C_1`} />

                            </div>

                            {/* 2개 묶음 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 과일이 2개인 바구니 정하기
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    남은 <InlineMath math="6" />개의 과일 중
                                    과일이 <InlineMath math="2" />개 들어가는 바구니에 넣을
                                    과일을 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_6C_2`} />

                                <p className="leading-8 text-gray-300">
                                    남은 <InlineMath math="4" />개의 과일은 자동으로
                                    마지막 바구니에 들어갑니다.
                                </p>

                                <BlockMath math={String.raw`{}_4C_4`} />

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_7C_1
                    \times{}_6C_2
                    \times{}_4C_4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_7C_1
                    \times{}_6C_2
                    \times{}_4C_4
                    &=7\times15\times1\\
                    &=105
                    \end{aligned}
                `}
                            />

                            {/* 왜 3!로 나누지 않는가 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    왜 <InlineMath math="3!" />로 나누지 않는가?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    바구니 자체는 서로 똑같지만, 세 바구니에 들어 있는
                                    과일의 개수는 각각{" "}
                                    <InlineMath math="1,\ 2,\ 4" />개입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 과일이 <InlineMath math="1" />개인 묶음,{" "}
                                    <InlineMath math="2" />개인 묶음,{" "}
                                    <InlineMath math="4" />개인 묶음은 크기에 의해
                                    서로 구별됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{묶음의 크기가 서로 다르면 자리바꿈으로 나누지 않는다}
                        }
                    `}
                                />

                            </div>

                            {/* 다른 풀이 표현 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    한 번에 나타내기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    과일 <InlineMath math="7" />개를{" "}
                                    <InlineMath math="1,\ 2,\ 4" />개로 나누는 경우이므로
                                    다음과 같이 나타낼 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{7!}{1!\,2!\,4!}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \frac{7!}{1!\,2!\,4!}
                        =
                        105
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    세 묶음의 크기가 모두 다르므로 추가로 나누는
                                    자리바꿈은 없습니다.
                                </p>

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{서로 다른 세 자연수의 합이 7}
                        \quad\Longrightarrow\quad
                        1+2+4
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 각 바구니에 들어가는 과일의 개수를 정하고,
                                    그 개수에 맞게 과일을 차례대로 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{1개 선택}
                        \quad\longrightarrow\quad
                        \text{2개 선택}
                        \quad\longrightarrow\quad
                        \text{나머지 4개}
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    바구니가 서로 똑같다는 이유만으로 무조건{" "}
                                    <InlineMath math="3!" />로 나누면 안 됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 크기의 묶음이 여러 개 있을 때만 그 묶음들의
                                    자리바꿈만큼 나눕니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 과일을 나누어 담는 경우의 수는
                                </p>

                                <BlockMath math="105" />

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
                            어떤 회사에서 신규 직원 <InlineMath math="6" />명을{" "}
                            <InlineMath math="3" />개의 팀으로 나눈 후 인천, 대전, 부산의
                            세 지점에 각각 한 팀씩 배치하려고 한다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            각 지점에 적어도 <InlineMath math="1" />명 이상 배치되는
                            경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                세 지점에 배치되는 직원의 수는 모두 자연수이고,
                                그 합은 <InlineMath math="6" />입니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 지점의 직원 수를 작은 순서대로 나타내면
                                다음 세 경우로 분류할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    (1,1,4),\qquad
                    (1,2,3),\qquad
                    (2,2,2)
                `}
                            />

                            {/* 1,1,4 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    ① <InlineMath math="1,\ 1,\ 4" />명으로 배치하는 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    먼저 <InlineMath math="4" />명이 배치될 지점을
                                    세 지점 중에서 선택합니다.
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8 text-gray-300">
                                    그 지점에 배치할 직원{" "}
                                    <InlineMath math="4" />명을{" "}
                                    <InlineMath math="6" />명 중에서 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_6C_4`} />

                                <p className="leading-8 text-gray-300">
                                    남은 두 직원은 서로 다른 두 지점에 한 명씩 배치하므로
                                    배치 방법은 <InlineMath math="2!" />가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\times{}_6C_4\times2!
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3\times15\times2=90
                    `}
                                />

                            </div>

                            {/* 1,2,3 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    ② <InlineMath math="1,\ 2,\ 3" />명으로 배치하는 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    직원 수가 <InlineMath math="1,\ 2,\ 3" />명으로 모두 다르므로,
                                    어느 지점에 몇 명이 배치되는지를 정하는 방법은
                                </p>

                                <BlockMath math="3!" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직원이 <InlineMath math="1" />명인 지점에 배치할 사람을{" "}
                                    <InlineMath math="6" />명 중에서 선택하고,
                                    남은 <InlineMath math="5" />명 중
                                    직원이 <InlineMath math="2" />명인 지점에 배치할 사람을
                                    선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3!\times{}_6C_1\times{}_5C_2\times{}_3C_3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        6\times6\times10=360
                    `}
                                />

                            </div>

                            {/* 2,2,2 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    ③ <InlineMath math="2,\ 2,\ 2" />명으로 배치하는 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    인천에 배치할 <InlineMath math="2" />명을 먼저 뽑고,
                                    남은 직원 중 대전에 배치할{" "}
                                    <InlineMath math="2" />명을 뽑습니다.
                                    남은 두 직원은 부산에 배치됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_6C_2\times{}_4C_2\times{}_2C_2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        15\times6\times1=90
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    세 팀의 인원수는 같지만 인천, 대전, 부산이라는
                                    서로 다른 지점에 배치되므로 세 팀은 구별됩니다.
                                    따라서 <InlineMath math="3!" />로 나누지 않습니다.
                                </p>

                            </div>

                            {/* 전체 */}
                            <p className="leading-8">
                                세 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    90+360+90
                    &=540
                    \end{aligned}
                `}
                            />

                            {/* 다른 풀이 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    다른 풀이: 전체에서 빈 지점이 생기는 경우 빼기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직원 한 명마다 인천, 대전, 부산 중 한 지점을 선택할 수 있으므로
                                    아무 조건 없이 배치하는 방법의 수는
                                </p>

                                <BlockMath math="3^6" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    특정한 한 지점이 비어 있는 경우에는
                                    각 직원이 나머지 두 지점 중 하나를 선택하므로{" "}
                                    <InlineMath math="2^6" />가지이고,
                                    비어 있는 지점의 선택은 <InlineMath math="3" />가지입니다.
                                </p>

                                <BlockMath math={String.raw`3\times2^6`} />

                                <p className="leading-8 text-gray-300">
                                    그러나 두 지점이 동시에 비어 있는 경우,
                                    즉 모든 직원이 한 지점에만 배치되는 경우를
                                    앞에서 두 번씩 뺐으므로 다시 더합니다.
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        3^6-3\times2^6+3
                        &=729-192+3\\
                        &=540
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 세 팀의 인원수를 자연수의 분할로 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6=1+1+4=1+2+3=2+2+2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 각 팀을 서로 다른 세 지점에 배치한다는 조건을
                                    반영합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 인원수의 팀이라도 서로 다른 지점에 배치되면
                                    지점에 따라 구별되므로 자리바꿈으로 나누지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{서로 다른 지점에 배치되는 팀은 구별된다}
                        }
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    단순히 <InlineMath math="6" />명을 세 팀으로 나누는 경우와
                                    서로 다른 세 지점에 배치하는 경우를 구별해야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    인천, 대전, 부산은 서로 다른 역할을 하므로
                                    각 지점에 배치된 팀은 서로 구별됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 직원을 배치하는 경우의 수는
                                </p>

                                <BlockMath math="540" />

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
                            남학생 <InlineMath math="3" />명과 여학생{" "}
                            <InlineMath math="6" />명을 세 개의 모둠으로 나누려고 한다.
                            모든 모둠에 남학생과 여학생이 각각{" "}
                            <InlineMath math="1" />명 이상 포함되도록 하는 경우의 수를 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                남학생은 <InlineMath math="3" />명이고 모둠도{" "}
                                <InlineMath math="3" />개입니다.
                            </p>

                            <p className="leading-8">
                                모든 모둠에 남학생이 적어도 한 명씩 포함되어야 하므로,
                                각 모둠에는 남학생이 정확히 한 명씩 들어갑니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \text{각 모둠의 남학생 수}
                    =
                    1,\ 1,\ 1
                `}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    남학생이 각 모둠을 구별한다
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    세 모둠에 들어 있는 남학생이 서로 다르므로,
                                    각 모둠은 그 모둠에 들어 있는 남학생에 따라 구별됩니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 남학생 한 명씩을 기준으로
                                    여학생 <InlineMath math="6" />명을 세 모둠에 배치하면 됩니다.
                                </p>

                            </div>

                            {/* 전체 배치 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 여학생을 자유롭게 배치하는 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    여학생 한 명은 남학생{" "}
                                    <InlineMath math="3" />명 중 어느 한 명의 모둠에
                                    들어갈 수 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    서로 다른 여학생이 <InlineMath math="6" />명이므로
                                    아무 조건 없이 배치하는 경우의 수는
                                </p>

                                <BlockMath math="3^6" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 빈 모둠 제외 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 여학생이 없는 모둠이 생기는 경우 제외
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    특정한 한 모둠에 여학생이 한 명도 들어가지 않는다면,
                                    각 여학생은 나머지 두 모둠 중 하나를 선택합니다.
                                </p>

                                <BlockMath math="2^6" />

                                <p className="leading-8 text-gray-300">
                                    비어 있는 모둠을 정하는 방법은{" "}
                                    <InlineMath math="3" />가지이므로
                                </p>

                                <BlockMath math={String.raw`3\times2^6`} />

                                <p className="leading-8 text-gray-300">
                                    을 뺍니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 두 모둠에 여학생이 모두 없는 경우,
                                    즉 여학생 전원이 한 모둠에 들어가는 경우는
                                    앞에서 두 번씩 빠졌으므로 다시 더해야 합니다.
                                </p>

                                <BlockMath math="3" />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    계산
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        3^6-3\times2^6+3
                        &=729-192+3\\
                        &=540
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 조 나누기로 풀이 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    다른 풀이: 여학생 수에 따라 분류
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    세 모둠에 들어가는 여학생의 수는 모두 자연수이고,
                                    그 합은 <InlineMath math="6" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    작은 순서대로 분류하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1,1,4),\qquad
                        (1,2,3),\qquad
                        (2,2,2)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 세 가지입니다.
                                </p>

                                {/* 1,1,4 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        여학생 수가 <InlineMath math="1,\ 1,\ 4" />인 경우
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        여학생이 <InlineMath math="4" />명인 모둠의 남학생을{" "}
                                        <InlineMath math="3" />명 중에서 정하고,
                                        그 모둠에 들어갈 여학생{" "}
                                        <InlineMath math="4" />명을 선택합니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        남은 여학생 두 명을 남은 두 남학생의 모둠에
                                        한 명씩 배치합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            3\times{}_6C_4\times2!
                            =
                            90
                        `}
                                    />

                                </div>

                                {/* 1,2,3 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        여학생 수가 <InlineMath math="1,\ 2,\ 3" />인 경우
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        세 수가 모두 다르므로 어느 남학생의 모둠에
                                        각각 몇 명이 들어갈지를 정하는 방법은{" "}
                                        <InlineMath math="3!" />가지입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            3!\times{}_6C_1\times{}_5C_2\times{}_3C_3
                            =
                            360
                        `}
                                    />

                                </div>

                                {/* 2,2,2 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        여학생 수가 <InlineMath math="2,\ 2,\ 2" />인 경우
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        각 모둠은 서로 다른 남학생에 의해 구별되므로
                                        세 모둠에 여학생을 두 명씩 차례대로 배치합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            {}_6C_2\times{}_4C_2\times{}_2C_2
                            =
                            90
                        `}
                                    />

                                </div>

                                <BlockMath
                                    math={String.raw`
                        90+360+90=540
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    남학생이 세 명이고 모둠도 세 개이므로
                                    각 모둠에 남학생이 한 명씩 들어갑니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이때 서로 다른 남학생이 각 모둠을 구별하므로,
                                    같은 수의 여학생이 들어간 모둠이 있어도
                                    모둠의 자리바꿈으로 나누지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{각 모둠의 남학생이 다르므로 모둠은 서로 구별된다}
                        }
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    단순히 아홉 명을 세 모둠으로 나누는 문제가 아닙니다.
                                    각 모둠에 남학생과 여학생이 모두 포함되어야 한다는 조건을
                                    먼저 반영해야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    남학생 한 명씩이 들어간 뒤에는 각 남학생이 모둠을
                                    구별하는 기준이 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 모둠을 나누는 경우의 수는
                                </p>

                                <BlockMath math="540" />

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
                            <InlineMath math="1" />층에서{" "}
                            <InlineMath math="6" />명이 함께 엘리베이터를 타고 올라가는 동안{" "}
                            <InlineMath math="2" />층, <InlineMath math="3" />층,{" "}
                            <InlineMath math="4" />층, <InlineMath math="5" />층의{" "}
                            <InlineMath math="4" />개 층 중{" "}
                            <InlineMath math="2" />개의 층에서 각각{" "}
                            <InlineMath math="3" />명씩 내리는 방법의 수를 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            단, 엘리베이터에 새로 타는 사람은 없다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                먼저 여섯 명이 내릴 두 층을 정한 뒤,
                                각 층에서 내릴 사람을 정합니다.
                            </p>

                            {/* 층 선택 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    1. 내리는 두 층 선택
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    <InlineMath math="2" />층부터{" "}
                                    <InlineMath math="5" />층까지의{" "}
                                    <InlineMath math="4" />개 층 중에서
                                    사람들이 내릴 두 층을 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_4C_2`} />

                            </div>

                            {/* 사람 선택 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    2. 각 층에서 내릴 사람 선택
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    선택한 두 층 중 낮은 층에서 내릴{" "}
                                    <InlineMath math="3" />명을{" "}
                                    <InlineMath math="6" />명 중에서 선택합니다.
                                </p>

                                <BlockMath math={String.raw`{}_6C_3`} />

                                <p className="leading-8 text-gray-300">
                                    남은 <InlineMath math="3" />명은 자동으로
                                    높은 층에서 내립니다.
                                </p>

                                <BlockMath math={String.raw`{}_3C_3`} />

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    {}_4C_2
                    \times{}_6C_3
                    \times{}_3C_3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    {}_4C_2
                    \times{}_6C_3
                    \times{}_3C_3
                    &=6\times20\times1\\
                    &=120
                    \end{aligned}
                `}
                            />

                            {/* 왜 2!로 나누지 않는가 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    왜 <InlineMath math="2!" />로 나누지 않는가?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 조의 인원수는 모두{" "}
                                    <InlineMath math="3" />명으로 같지만,
                                    두 조가 내리는 층은 서로 다릅니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    낮은 층에서 내리는 조와 높은 층에서 내리는 조는
                                    내리는 층에 따라 구별되므로
                                    두 조의 자리바꿈으로 나누지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{서로 다른 층에서 내리는 조는 구별된다}
                        }
                    `}
                                />

                            </div>

                            {/* 다른 풀이 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    다른 풀이: 먼저 두 조로 나누기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 <InlineMath math="6" />명을{" "}
                                    <InlineMath math="3" />명씩 서로 구별하지 않는 두 조로
                                    나누는 방법의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{
                            {}_6C_3\times{}_3C_3
                        }{2!}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    다음으로 두 조가 내릴 서로 다른 두 층을 정하고,
                                    두 조를 그 두 층에 배치합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {}_4C_2\times2!
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{
                            {}_6C_3\times{}_3C_3
                        }{2!}
                        \times{}_4C_2\times2!
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        {}_6C_3\times{}_4C_2
                        =
                        20\times6
                        =
                        120
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    조를 나눌 때 제거한{" "}
                                    <InlineMath math="2!" />과,
                                    서로 다른 두 층에 배치할 때 생기는{" "}
                                    <InlineMath math="2!" />이 서로 없어집니다.
                                </p>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{내릴 두 층 선택}
                        \quad\longrightarrow\quad
                        \text{낮은 층에서 내릴 3명 선택}
                    `}
                                />

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 층을 선택하면 낮은 층과 높은 층이 자연스럽게 구별됩니다.
                                    따라서 낮은 층에서 내릴 세 명만 정하면
                                    나머지 세 명이 높은 층에서 내리는 것으로 자동 결정됩니다.
                                </p>

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="6" />명을{" "}
                                    <InlineMath math="3" />명씩 두 조로만 나누는 문제라면
                                    같은 크기의 두 조를 구별하지 않으므로{" "}
                                    <InlineMath math="2!" />로 나누어야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러나 이 문제에서는 서로 다른 두 층에 배치되므로
                                    최종적으로 두 조가 구별됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 사람들이 내리는 방법의 수는
                                </p>

                                <BlockMath math="120" />

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
                            조 나누기는 한 조씩 차례대로 구성원을 뽑아 계산합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{조 나누기}
                    =
                    \text{각 조를 차례대로 뽑는 경우의 수}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            조의 크기가 모두 다르면 그대로 곱합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    3,\ 4,\ 5
                    \quad\Longrightarrow\quad
                    {}_{12}C_3\times{}_9C_4\times{}_5C_5
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            같은 크기의 조가 있으면,
                            같은 크기의 조의 자리바꿈만큼 나눕니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{같은 크기의 조가 \(k\)개}
                    \quad\Longrightarrow\quad
                    k!\text{로 나눈다}
                    }
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    6,\ 6
                    &: \div2!\\
                    6,\ 3,\ 3
                    &: \div2!\\
                    4,\ 4,\ 4
                    &: \div3!\\
                    6,\ 2,\ 2,\ 2
                    &: \div3!\\
                    3,\ 3,\ 3,\ 3
                    &: \div4!
                    \end{aligned}
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.22 대진표의 경우의 수
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    토너먼트 대진표는 두 팀씩 경기하고, 각 경기의 승자가 다음 단계로
                    올라가는 구조입니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    대진표의 경우의 수는 결승전부터 거꾸로 조를 나누어 구할 수도 있고,
                    모든 팀을 자리에 배열한 뒤 좌우 대칭으로 중복된 경우를 제거하여
                    구할 수도 있습니다.
                </p>

                {/* 기본 원리 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        대진표를 세는 두 가지 방법
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                방법 1. 결승전부터 조 나누기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                결승전의 양쪽 진영을 먼저 나누고,
                                각 진영을 다시 두 조로 나누는 과정을 반복합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{결승 진영}
                        \longrightarrow
                        \text{4강 진영}
                        \longrightarrow
                        \text{8강 경기}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                방법 2. 전체 자리바꿈에서 대칭 제거
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                모든 팀을 대진표의 자리에 배열한 뒤,
                                좌우를 바꾸어도 같은 대진표가 되는 경우를 나눕니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{
                            \text{전체 자리바꿈}
                        }{
                            \text{좌우 대칭으로 생기는 중복}
                        }
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 대진표에서 같은 경우 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        대진표에서 같은 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        한 경기에서 두 팀의 좌우 위치만 바뀐 경우는 같은 대진으로 봅니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        또한 두 경기 또는 두 진영 전체의 좌우 위치를 서로 바꾼 경우도
                        같은 대진표로 봅니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \text{왼쪽과 오른쪽의 교환}
                    \quad\Longrightarrow\quad
                    \text{같은 대진표}
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 좌우를 바꿀 수 있는 지점마다{" "}
                        <InlineMath math="2" />배씩 중복하여 계산됩니다.
                    </p>

                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예시
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    서로 다른 <InlineMath math="8" />개의 팀이
                                    그림과 같은 토너먼트 경기를 한다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    경기의 좌우 위치만 바뀐 대진표는 같은 대진표로 볼 때,
                                    가능한 대진표의 수를 구하여라.
                                </p>

                            </div>

                            <img
                                src="/images/4.22.png"
                                alt="8개 팀이 참가하는 토너먼트 대진표"
                                className="mx-auto w-full max-w-md rounded-xl bg-white"
                            />

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 방법 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    방법 1. 결승전부터 거꾸로 조 나누기
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    먼저 결승전의 양쪽 진영에 들어갈 팀을{" "}
                                    <InlineMath math="4" />개씩 두 조로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            {}_8C_4\times{}_4C_4
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그러나 결승전의 왼쪽 진영과 오른쪽 진영을 서로 바꾼 것은
                                    같은 대진표입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 <InlineMath math="4" />개 팀씩 이루어진
                                    두 조의 자리바꿈인 <InlineMath math="2!" />로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{{}_8C_4\times{}_4C_4}{2!}
                        `}
                                />

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        결승전의 양쪽 진영 나누기
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                \frac{{}_8C_4\times{}_4C_4}{2!}
                                =
                                \frac{70}{2}
                                =
                                35
                            `}
                                    />

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    이제 한쪽 진영의 <InlineMath math="4" />개 팀을{" "}
                                    <InlineMath math="2" />개 팀씩 두 경기로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 경기의 위치를 서로 바꾼 것은 같은 4강 진영이므로{" "}
                                    <InlineMath math="2!" />로 나눕니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                            =
                            \frac{6}{2}
                            =
                            3
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 과정은 결승전의 양쪽 진영에서 각각 한 번씩
                                    이루어집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{{}_8C_4\times{}_4C_4}{2!}
                            \times
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                            \times
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            35\times3\times3
                            &=315
                            \end{aligned}
                        `}
                                />

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-semibold text-yellow-300">
                                        조 나누기의 흐름
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                                8
                                \quad\longrightarrow\quad
                                4+4
                                \quad\longrightarrow\quad
                                (2+2)+(2+2)
                            `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        같은 크기의 두 조는 서로 구별하지 않으므로,
                                        조를 나눌 때마다 <InlineMath math="2!" />로 나눕니다.
                                    </p>

                                </div>

                            </div>

                            {/* 방법 2 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    방법 2. 전체 자리바꿈에서 대칭 제거
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    먼저 서로 다른 <InlineMath math="8" />개의 팀을
                                    대진표의 여덟 자리에 배열합니다.
                                </p>

                                <BlockMath math="8!" />

                                <p className="leading-8 text-gray-300">
                                    그러나 대진표에는 좌우를 바꾸어도 같은 대진표가 되는
                                    대칭이 있습니다.
                                </p>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[680px] border-collapse text-center text-gray-300">

                                        <thead>

                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    단계
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    좌우를 바꿀 수 있는 곳
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    중복
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    8강
                                                </td>

                                                <td className="p-3">
                                                    4경기
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2^4" />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    4강
                                                </td>

                                                <td className="p-3">
                                                    2개의 진영
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2^2" />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    결승
                                                </td>

                                                <td className="p-3">
                                                    1개의 양쪽 진영
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2^1" />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    따라서 전체 대칭으로 생기는 중복은
                                </p>

                                <BlockMath
                                    math={String.raw`
                            2^4\times2^2\times2^1
                            =
                            2^7
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    그러므로 대진표의 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{8!}{2^7}
                        `}
                                />

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            \frac{8!}{2^7}
                            &=
                            \frac{40320}{128}\\
                            &=315
                            \end{aligned}
                        `}
                                />

                            </div>

                            {/* 두 풀이 비교 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="text-lg font-bold text-yellow-300">
                                    두 풀이의 비교
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    첫 번째 방법은 대진표를 단계별로 조 나누기 하면서
                                    각 단계에서 생기는 중복을 바로 제거합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 번째 방법은 모든 팀을 먼저 배열한 뒤,
                                    대진표 전체에서 생기는 대칭을 한꺼번에 제거합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \frac{{}_8C_4\times{}_4C_4}{2!}
                            \left(
                                \frac{{}_4C_2\times{}_2C_2}{2!}
                            \right)^2
                            =
                            \frac{8!}{2^7}
                            =
                            315
                        `}
                                />

                            </div>

                            {/* Reflection */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="font-semibold text-white">
                                    참고: 반사 대칭
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    대진표의 좌우를 바꾸어도 같은 경우로 보는 것은
                                    반사 대칭을 이용하여 중복을 제거하는 것입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이러한 관점을 영어로
                                    <span className="font-semibold text-white">
                                        {" "}reflection
                                    </span>
                                    이라고 합니다.
                                    교과 과정에서 반드시 사용하는 용어는 아니지만,
                                    대진표의 대칭 구조를 이해하는 데 도움이 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 가능한 대진표의 수는
                                </p>

                                <BlockMath math="315" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 일반적인 토너먼트 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        팀의 수가 <InlineMath math="2^n" />개인 토너먼트
                    </h3>

                    <p className="leading-8 text-gray-300">
                        팀의 수가 <InlineMath math="2^n" />개이면,
                        우승팀을 결정하기 위해 필요한 전체 경기 수는
                    </p>

                    <BlockMath
                        math={String.raw`
                2^n-1
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        각 경기 또는 진영의 좌우를 바꾸어도 같은 대진표이므로,
                        대칭으로 생기는 중복은
                    </p>

                    <BlockMath
                        math={String.raw`
                2^{\,2^n-1}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{\(2^n\)개 팀의 대진표}
                    =
                    \frac{(2^n)!}{2^{\,2^n-1}}
                    }
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="8=2^3" />이므로
                    </p>

                    <BlockMath
                        math={String.raw`
                \frac{8!}{2^{8-1}}
                =
                \frac{8!}{2^7}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이 됩니다.
                    </p>

                </div>

                {/* 풀이 순서 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        대진표 문제의 풀이 순서
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                조 나누기로 푸는 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{gathered}
                        \text{결승 진영 나누기}\\
                        \downarrow\\
                        \text{각 진영을 다시 두 조로 나누기}\\
                        \downarrow\\
                        \text{같은 크기의 조의 자리바꿈 제거}
                        \end{gathered}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                대칭으로 푸는 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{gathered}
                        \text{전체 자리에 팀 배열}\\
                        \downarrow\\
                        \text{좌우를 바꿀 수 있는 곳 세기}\\
                        \downarrow\\
                        \text{대칭의 수만큼 나누기}
                        \end{gathered}
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        주의
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 이 단원에서는 경기의 좌우 위치만 바뀐 대진표를
                            같은 대진표로 봅니다.
                        </p>

                        <p>
                            ② 경기의 장소, 시간 또는 번호가 정해져 있어
                            각 위치를 서로 구별한다면 대칭으로 나누는 방법이 달라집니다.
                        </p>

                        <p>
                            ③ 조 나누기 방법에서는 같은 크기의 두 진영을 나눌 때마다{" "}
                            <InlineMath math="2!" />로 나눕니다.
                        </p>

                        <p>
                            ④ 전체 자리바꿈 방법에서는 8강 경기뿐 아니라
                            4강과 결승에서 생기는 좌우 대칭도 모두 포함해야 합니다.
                        </p>

                        <p>
                            ⑤ <InlineMath math="8!" />을{" "}
                            <InlineMath math="2^4" />로만 나누면
                            8강 경기 안의 좌우 교환만 제거한 것이므로 충분하지 않습니다.
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">

                            <p className="leading-8 text-gray-300">
                                어느 고등학교에서 축구 시합을 하는데
                                <InlineMath math="1" />학년{" "}
                                <InlineMath math="3" />팀과{" "}
                                <InlineMath math="2" />학년{" "}
                                <InlineMath math="4" />팀의 총{" "}
                                <InlineMath math="7" />팀이 출전하였다.
                                그림과 같은 토너먼트 방식으로 경기를 하여 우승팀을 정할 때,
                                다음을 구하여라.
                            </p>

                            <img
                                src="/images/4.22_1.png"
                                alt="7개 팀이 참가하여 한 팀이 1회전을 부전승으로 통과하는 토너먼트 대진표"
                                className="w-full max-w-3xl rounded-xl bg-white"
                            />

                            </div>

                            <p className="leading-8 text-gray-300">
                                (1) 대진표를 작성하는 방법의 수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                (2) <InlineMath math="1" />회전에서는 같은 학년끼리
                                경기하도록 대진표를 작성하는 방법의 수
                            </p>

                            <p className="mt-2 leading-8 text-gray-400">
                                단, <InlineMath math="2" />회전과{" "}
                                <InlineMath math="3" />회전은 학년에 관계없이 경기하며,
                                대진표의 좌우 위치만 바뀐 경우는 같은 것으로 본다.
                            </p>



                            

                        

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* (1) */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    (1) 대진표를 작성하는 방법의 수
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    그림의 대진표는 한쪽 진영에{" "}
                                    <InlineMath math="4" />팀이 들어가고,
                                    다른 쪽 진영에는{" "}
                                    <InlineMath math="3" />팀이 들어갑니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="3" />팀이 들어가는 진영에서는
                                    한 팀이 <InlineMath math="1" />회전을 치르지 않고{" "}
                                    <InlineMath math="2" />회전으로 올라갑니다.
                                </p>

                                {/* 조 나누기 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        방법 1. 결승전부터 조 나누기
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        먼저 <InlineMath math="7" />팀 중{" "}
                                        <InlineMath math="4" />팀을 선택하여{" "}
                                        <InlineMath math="4" />팀 진영을 정합니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_7C_4`} />

                                    <p className="leading-8 text-gray-300">
                                        이 <InlineMath math="4" />팀을{" "}
                                        <InlineMath math="2" />팀씩 두 경기로 나눕니다.
                                        두 경기의 좌우 위치는 구별하지 않으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        나머지 <InlineMath math="3" />팀 중{" "}
                                        <InlineMath math="1" />회전에서 경기할{" "}
                                        <InlineMath math="2" />팀을 선택하면,
                                        남은 한 팀은 자동으로 부전승 팀이 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`{}_3C_2`} />

                                    <p className="leading-8 text-gray-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            {}_7C_4
                            \times
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                            \times{}_3C_2
                        `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                            \begin{aligned}
                            {}_7C_4
                            \times
                            \frac{{}_4C_2\times{}_2C_2}{2!}
                            \times{}_3C_2
                            &=35\times3\times3\\
                            &=315
                            \end{aligned}
                        `}
                                    />

                                </div>

                                {/* 대칭 */}
                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        방법 2. 전체 자리바꿈에서 대칭 제거
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        서로 다른 <InlineMath math="7" />팀을
                                        대진표의 일곱 자리에 배열하는 방법은
                                    </p>

                                    <BlockMath math="7!" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이 대진표에서 좌우를 바꾸어도 같은 경우가 되는 곳은
                                        다음과 같습니다.
                                    </p>

                                    <div className="mt-5 overflow-x-auto">

                                        <table className="w-full min-w-[640px] border-collapse text-center text-gray-300">

                                            <thead>
                                                <tr className="border-b border-white/15">

                                                    <th className="p-3 font-semibold text-white">
                                                        위치
                                                    </th>

                                                    <th className="p-3 font-semibold text-white">
                                                        대칭의 개수
                                                    </th>

                                                </tr>
                                            </thead>

                                            <tbody>

                                                <tr className="border-b border-white/10">

                                                    <td className="p-3">
                                                        <InlineMath math="1" />회전의 세 경기
                                                    </td>

                                                    <td className="p-3">
                                                        <InlineMath math="2^3" />
                                                    </td>

                                                </tr>

                                                <tr>

                                                    <td className="p-3">
                                                        <InlineMath math="4" />팀 진영의 두 경기 교환
                                                    </td>

                                                    <td className="p-3">
                                                        <InlineMath math="2" />
                                                    </td>

                                                </tr>

                                            </tbody>

                                        </table>

                                    </div>

                                    <p className="mt-5 leading-8 text-gray-300">
                                        결승전의 두 진영은 각각{" "}
                                        <InlineMath math="4" />팀과{" "}
                                        <InlineMath math="3" />팀으로 구조가 다르므로
                                        서로 바꿀 수 없습니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        따라서 대칭으로 생기는 전체 중복은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            2^3\times2=2^4
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \begin{aligned}
                            \frac{7!}{2^4}
                            &=
                            \frac{5040}{16}\\
                            &=315
                            \end{aligned}
                        `}
                                    />

                                </div>

                            </div>

                            {/* (2) */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="text-lg font-bold text-purple-300">
                                    (2) 1회전에서 같은 학년끼리 경기하는 경우
                                </h4>

                                <p className="mt-4 leading-8 text-gray-300">
                                    <InlineMath math="1" />회전에서는 세 경기가 열리고,
                                    한 팀은 부전승으로{" "}
                                    <InlineMath math="2" />회전에 진출합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 학년끼리 경기하려면{" "}
                                    <InlineMath math="1" />회전에 출전하는 각 학년의 팀 수가
                                    모두 짝수여야 합니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-semibold text-yellow-300">
                                        부전승 팀의 학년
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="1" />학년 팀은{" "}
                                        <InlineMath math="3" />팀으로 홀수입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        따라서 <InlineMath math="1" />학년 한 팀이
                                        부전승을 받아야 남은{" "}
                                        <InlineMath math="2" />팀이 서로 경기할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \text{부전승 팀}
                            =
                            \text{1학년 팀}
                        `}
                                    />

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    부전승을 받을 <InlineMath math="1" />학년 팀을
                                    선택하는 방법은
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    나머지 두 <InlineMath math="1" />학년 팀은
                                    자동으로 한 경기를 이루고,
                                    네 <InlineMath math="2" />학년 팀을
                                    두 경기로 나누는 방법은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                        =
                        3
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이제 만들어진 세 경기를 대진표의 세{" "}
                                    <InlineMath math="1" />회전 위치에 놓습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 경기 중 하나는 부전승 팀과 같은 진영에 놓이고,
                                    나머지 두 경기는 반대쪽 진영에 놓이므로,
                                    부전승 팀과 같은 진영에 놓일 경기를 정하는 방법은
                                </p>

                                <BlockMath math="3" />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        3\times3\times3
                        &=27
                        \end{aligned}
                    `}
                                />

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        한 번에 계산하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \underbrace{3}_{\text{부전승 1학년 팀}}
                            \times
                            \underbrace{3}_{\text{2학년 두 경기 나누기}}
                            \times
                            \underbrace{3}_{\text{부전승 쪽 경기 선택}}
                            =
                            27
                        `}
                                    />

                                </div>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    팀 수가 홀수인 학년에서 한 팀이 부전승을 받아야,
                                    나머지 팀을 같은 학년끼리 두 팀씩 짝지을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\text{학년 }3\text{팀}
                        \quad\longrightarrow\quad
                        1\text{팀 부전승}+2\text{팀 경기}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 만들어진 세 경기를 대진표의 구조에 맞게 배치합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \text{(1) 대진표의 수}&=315,\\
                        \text{(2) 같은 학년끼리 경기하는 대진표의 수}&=27
                        \end{aligned}
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

   <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.2fr_0.8fr]">


        <p className="leading-8 text-gray-300">
            운동 경기의 대전 방식 중 승자 진출전에서는 경기를 할 때마다
            진 팀은 제외하고, 이긴 팀끼리 겨루어 마지막에 남은 두 팀이
            우승을 가린다.
            서로 다른 여섯 팀{" "}
            <InlineMath math="\mathrm{A,\ B,\ C,\ D,\ E,\ F}" />가
            그림과 같은 승자 진출전으로 경기할 때,
            서로 다른 대진표의 개수를 구하여라.
        </p>
        <img
                src="/images/4.22_2.png"
                alt="한쪽에는 네 팀, 다른 쪽에는 두 팀이 배치되는 여섯 팀 토너먼트 대진표"
                className="w-full max-w-3xl rounded-xl bg-white"
            />
        <p className="mt-3 leading-8 text-gray-400">
            단, 대진표의 좌우 위치만 바뀐 경우는 같은 대진표로 본다.
        </p>

            

        </div>

    </div>

    {/* 풀이 */}
    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-8 text-gray-300">

            <p className="leading-8">
                이 대진표는 결승전의 한쪽 진영에{" "}
                <InlineMath math="4" />팀이 들어가고,
                다른 쪽 진영에 <InlineMath math="2" />팀이 들어가는 구조입니다.
            </p>

            <p className="leading-8">
                두 진영의 구조가 서로 다르므로 결승전의 양쪽을 바꾼 것은
                같은 구조 안에서의 대칭으로 볼 수 없습니다.
            </p>

            {/* 방법 1 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <h4 className="text-lg font-bold text-blue-300">
                    방법 1. 결승전부터 조 나누기
                </h4>

                <p className="mt-4 leading-8 text-gray-300">
                    먼저 여섯 팀 중에서{" "}
                    <InlineMath math="4" />팀이 들어갈 진영을 선택합니다.
                </p>

                <BlockMath math={String.raw`{}_6C_4`} />

                <p className="leading-8 text-gray-300">
                    나머지 <InlineMath math="2" />팀은 자동으로
                    반대쪽 진영의 한 경기를 이룹니다.
                </p>

                <p className="leading-8 text-gray-300">
                    선택한 <InlineMath math="4" />팀은{" "}
                    <InlineMath math="2" />팀씩 두 경기로 나눕니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    두 경기의 좌우 위치만 바꾼 경우는 같으므로{" "}
                    <InlineMath math="2!" />로 나눕니다.
                </p>

                <p className="leading-8 text-gray-300">
                    따라서 대진표의 수는
                </p>

                <BlockMath
                    math={String.raw`
                        {}_6C_4
                        \times
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                    `}
                />

                <BlockMath
                    math={String.raw`
                        \begin{aligned}
                        {}_6C_4
                        \times
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                        &=15\times3\\
                        &=45
                        \end{aligned}
                    `}
                />

            </div>

            {/* 방법 2 */}
            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                <h4 className="text-lg font-bold text-purple-300">
                    방법 2. 전체 자리바꿈에서 대칭 제거
                </h4>

                <p className="mt-4 leading-8 text-gray-300">
                    서로 다른 여섯 팀을 대진표의 여섯 자리에 배열하는 방법은
                </p>

                <BlockMath math="6!" />

                <p className="leading-8 text-gray-300">
                    가지입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    이제 좌우를 바꾸어도 같은 대진표가 되는 대칭을 찾습니다.
                </p>

                <div className="mt-5 overflow-x-auto">

                    <table className="w-full min-w-[620px] border-collapse text-center text-gray-300">

                        <thead>
                            <tr className="border-b border-white/15">

                                <th className="p-3 font-semibold text-white">
                                    대칭
                                </th>

                                <th className="p-3 font-semibold text-white">
                                    중복
                                </th>

                            </tr>
                        </thead>

                        <tbody>

                            <tr className="border-b border-white/10">

                                <td className="p-3">
                                    첫 경기 세 곳에서 두 팀의 좌우 교환
                                </td>

                                <td className="p-3">
                                    <InlineMath math="2^3" />
                                </td>

                            </tr>

                            <tr>

                                <td className="p-3">
                                    네 팀 진영에서 두 경기의 좌우 교환
                                </td>

                                <td className="p-3">
                                    <InlineMath math="2" />
                                </td>

                            </tr>

                        </tbody>

                    </table>

                </div>

                <p className="mt-5 leading-8 text-gray-300">
                    따라서 대칭으로 생기는 전체 중복은
                </p>

                <BlockMath
                    math={String.raw`
                        2^3\times2=2^4
                    `}
                />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="leading-8 text-gray-300">
                    결승전의 양쪽 진영은 각각{" "}
                    <InlineMath math="4" />팀과{" "}
                    <InlineMath math="2" />팀으로 구조가 다르므로,
                    결승전에서 양쪽 진영을 바꾸는 대칭은 없습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \begin{aligned}
                        \frac{6!}{2^4}
                        &=
                        \frac{720}{16}\\
                        &=45
                        \end{aligned}
                    `}
                />

            </div>

            {/* 비교 */}
            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="font-semibold text-yellow-300">
                    두 풀이의 비교
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    조 나누기에서는 먼저{" "}
                    <InlineMath math="4" />팀 진영과{" "}
                    <InlineMath math="2" />팀 진영을 구별한 뒤,
                    네 팀을 두 경기로 나눕니다.
                </p>

                <p className="leading-8 text-gray-300">
                    대칭을 이용한 풀이에서는 여섯 팀을 모두 배열한 뒤,
                    실제로 같은 대진표를 만드는 좌우 교환만 제거합니다.
                </p>

                <BlockMath
                    math={String.raw`
                        {}_6C_4
                        \times
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                        =
                        \frac{6!}{2^4}
                        =
                        45
                    `}
                />

            </div>

            {/* 핵심 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="font-semibold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    결승전의 두 진영에 들어가는 팀의 수가{" "}
                    <InlineMath math="4" />팀과{" "}
                    <InlineMath math="2" />팀으로 서로 다릅니다.
                </p>

                <p className="leading-8 text-gray-300">
                    따라서 두 진영은 서로 구별되며,
                    결승전의 양쪽 진영을 바꾸는 것에 대해
                    추가로 <InlineMath math="2" />로 나누지 않습니다.
                </p>

                <BlockMath
                    math={String.raw`
                        \boxed{
                        \text{구조가 다른 두 진영은 서로 구별된다}
                        }
                    `}
                />

            </div>

            {/* 정답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서 서로 다른 대진표의 개수는
                </p>

                <BlockMath math="45" />

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

        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.35fr_0.65fr]">

            <div>

                <p className="leading-8 text-gray-300">
                    다음 그림과 같은 비상 연락망에 서로 다른{" "}
                    <InlineMath math="20" />명의 이름을 채워 넣으려고 한다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    연결 상태가 같으면 같은 경우로 볼 때,
                    비상 연락망의 종류는
                </p>

                <BlockMath
                    math={String.raw`
                        20!\times\frac{1}{n}
                    `}
                />

                <p className="leading-8 text-gray-300">
                    개이다. 이때 자연수{" "}
                    <InlineMath math="n" />의 값을 구하여라.
                </p>

            </div>

            <img
                src="/images/4.22_3.png"
                alt="여섯 곳의 좌우 대칭이 표시된 20명 비상 연락망"
                className="mx-auto w-full max-w-md rounded-xl bg-white"
            />

        </div>

    </div>

    {/* 풀이 */}
<details className="mt-5 rounded-xl border border-white/15 p-5">

    <summary className="cursor-pointer font-semibold text-yellow-300">
        풀이 보기
    </summary>

    <div className="mt-5 space-y-8 text-gray-300">

        <p className="leading-8">
            서로 다른 <InlineMath math="20" />명의 이름을{" "}
            <InlineMath math="20" />개의 자리에 배열하는 방법은
        </p>

        <BlockMath math="20!" />

        <p className="leading-8">
            가지입니다.
        </p>

        <p className="leading-8">
            연결 상태가 같은 경우는 하나로 보므로,
            먼저 좌우를 서로 바꾸어도 같은 연락망이 되는
            대칭을 찾아봅니다.
        </p>

        {/* 풀이 그림 */}

        <div className="flex justify-center">

            <img
                src="/images/4.22_4.png"
                alt="비상 연락망의 대칭 구조"
                className="w-full max-w-xl rounded-xl border border-white/10 bg-white"
            />

        </div>

        {/* 파란색 */}

        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

            <h4 className="text-lg font-bold text-blue-300">
                1. 파란색 부분의 대칭
            </h4>

            <p className="mt-4 leading-8 text-gray-300">
                파란색으로 표시한 부분에서는
                좌우를 바꾸어도 연결 구조가 같습니다.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">

                <li>왼쪽 가지 내부</li>

                <li>가운데 가지 내부</li>

                <li>두 파란색 가지 전체</li>

            </ul>

            <BlockMath
                math={String.raw`
                    2\times2\times2=2^3
                `}
            />

        </div>

        {/* 빨간색 */}

        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

            <h4 className="text-lg font-bold text-red-300">
                2. 빨간색 부분의 대칭
            </h4>

            <p className="mt-4 leading-8 text-gray-300">
                빨간색 부분도 같은 구조이므로
                좌우를 바꾸어도 같은 연락망입니다.
            </p>

            <ul className="mt-3 list-disc space-y-2 pl-6">

                <li>첫 번째 빨간 가지 내부</li>

                <li>두 번째 빨간 가지 내부</li>

                <li>두 빨간 가지 전체</li>

            </ul>

            <BlockMath
                math={String.raw`
                    2\times2\times2=2^3
                `}
            />

        </div>

        {/* 전체 */}

        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

            <h4 className="text-lg font-bold text-purple-300">
                3. 전체 대칭의 수
            </h4>

            <p className="mt-4 leading-8 text-gray-300">
                파란색 부분과 빨간색 부분의 대칭은
                서로 독립적으로 일어나므로
                곱의 법칙을 적용합니다.
            </p>

            <BlockMath
                math={String.raw`
                    2^3\times2^3=2^6
                `}
            />

            <BlockMath
                math={String.raw`
                    2^6=64
                `}
            />

        </div>

        {/* 마무리 */}

        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

            <p className="font-bold text-green-300">
                따라서 비상 연락망의 종류는
            </p>

            <BlockMath
                math={String.raw`
                    \frac{20!}{2^6}
                `}
            />

            <p className="leading-8 text-gray-300">
                문제의 식과 비교하면
            </p>

            <BlockMath
                math={String.raw`
                    n=64
                `}
            />

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
                            대진표는 결승전부터 거꾸로 같은 크기의 조를 나누어
                            구할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{{}_8C_4\times{}_4C_4}{2!}
                    \times
                    \left(
                        \frac{{}_4C_2\times{}_2C_2}{2!}
                    \right)^2
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            또는 전체 팀을 자리에 배열한 뒤,
                            각 단계에서 생기는 좌우 대칭의 수만큼 나눌 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{8!}{2^4\times2^2\times2}
                    =
                    \frac{8!}{2^7}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{조 나누기}
                    =
                    \text{전체 자리바꿈에서 대칭 제거}
                    }
                `}
                        />

                    </div>

                </div>

            </section>


        </>
    )
};