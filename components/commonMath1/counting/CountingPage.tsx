"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function CountingPage() {
    return (
        <>
            {/* 4.1 사건과 경우의 수 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    4.1 사건과 경우의 수
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    어떤 일이 일어나는 모든 방법을 빠짐없이 세려면 먼저
                    무엇을 하는지, 어떤 결과에 관심이 있는지, 가능한 경우가 무엇인지
                    구분해야 합니다.
                </p>

                {/* 시행 */}
                <div className="rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        시행
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <b className="text-white">시행</b>은 사건이 일어나도록 하는
                        행위입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            주사위를 한 번 던진다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            동전을 한 번 던진다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            여러 사람 중 한 명을 뽑는다.
                        </p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        이처럼 어떤 결과가 나오도록 실제로 하는 행동을 시행이라고 합니다.
                    </p>
                </div>

                {/* 사건 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        사건
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <b className="text-white">사건</b>은 시행에서 나올 수 있는 결과
                        중 관심 있는 결과입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">
                        <p className="leading-8 text-gray-300">
                            주사위를 던져 짝수의 눈이 나온다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            동전을 던져 앞면이 나온다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            학생 중에서 남학생이 뽑힌다.
                        </p>
                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        시행은 무엇을 하는지를 나타내고, 사건은 그 시행에서 어떤 결과에
                        관심이 있는지를 나타냅니다.
                    </p>
                </div>

                {/* 경우와 경우의 수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        경우와 경우의 수
                    </h3>

                    <div className="space-y-5 leading-8 text-gray-300">
                        <p>
                            <b className="text-white">전체 경우</b>는 시행에서 발생할 수
                            있는 모든 경우입니다.
                        </p>

                        <p>
                            <b className="text-white">전체 경우의 수</b>는 전체 경우가
                            몇 가지인지 나타낸 수입니다.
                        </p>

                        <p>
                            <b className="text-white">사건의 경우</b>는 전체 경우 중에서
                            사건에 해당하는 경우입니다.
                        </p>

                        <p>
                            <b className="text-white">경우의 수</b>는 사건에 해당하는
                            경우가 몇 가지인지 나타낸 수입니다.
                        </p>
                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">
                        <p className="leading-8 text-gray-300">
                            경우는 실제로 나올 수 있는 결과를 말합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            경우의 수는 그 결과가 모두 몇 가지인지 나타내는 수입니다.
                        </p>
                    </div>
                </div>

                {/* 주사위 예시 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">
                    <h3 className="mb-4 text-2xl font-bold">
                        주사위를 한 번 던지는 경우
                    </h3>

                    <p className="mb-5 leading-8 text-gray-300">
                        주사위를 한 번 던질 때 짝수의 눈이 나오는 경우의 수를
                        구해 보겠습니다.
                    </p>

                    <div className="space-y-5">
                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                시행
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                주사위를 한 번 던집니다.
                            </p>
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                사건
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                짝수의 눈이 나옵니다.
                            </p>
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                전체 경우
                            </p>

                            <BlockMath math="1,\ 2,\ 3,\ 4,\ 5,\ 6" />

                            <p className="leading-8 text-gray-300">
                                따라서 전체 경우의 수는 <b className="text-white">6</b>
                                입니다.
                            </p>
                        </div>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="font-semibold text-white">
                                사건의 경우
                            </p>

                            <BlockMath math="2,\ 4,\ 6" />

                            <p className="leading-8 text-gray-300">
                                따라서 짝수의 눈이 나오는 경우의 수는
                                <b className="text-white"> 3</b>입니다.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">
                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">
                        <p>
                            <b className="text-white">경우</b>와
                            <b className="text-white"> 경우의 수</b>는 서로 다릅니다.
                        </p>

                        <div className="rounded-xl bg-black/40 p-5">
                            <p className="leading-8 text-gray-300">
                                사건의 경우 : <InlineMath math="2,\ 4,\ 6" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                사건의 경우의 수 : <InlineMath math="3" />
                            </p>
                        </div>

                        <p>
                            가능한 결과를 직접 써 놓은 것은 경우이고, 그 결과의 개수를
                            센 것이 경우의 수입니다.
                        </p>
                    </div>
                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            동전을 두 번 던질 때,
                            <b className="text-white"> 앞면이 정확히 한 번 나오는 경우의 수</b>를
                            구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                시행은 동전을 두 번 던지는 것입니다.
                            </p>

                            <p>
                                전체 경우를 모두 써 보면
                            </p>

                            <BlockMath
                                math="(앞,앞),\ (앞,뒤),\ (뒤,앞),\ (뒤,뒤)"
                            />

                            <p>
                                모두 <b className="text-white">4가지</b>입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                앞면이 정확히 한 번 나오는 경우는
                            </p>

                            <BlockMath
                                math="(앞,뒤),\ (뒤,앞)"
                            />

                            <p>
                                모두 <b className="text-white">2가지</b>입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="2" />

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
                            주사위를 한 번 던질 때,
                            <b className="text-white"> 3 이상의 눈이 나오는 경우의 수</b>를
                            구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                시행은 주사위를 한 번 던지는 것입니다.
                            </p>

                            <p>
                                전체 경우를 모두 써 보면
                            </p>

                            <BlockMath
                                math="1,\ 2,\ 3,\ 4,\ 5,\ 6"
                            />

                            <p>
                                모두 <b className="text-white">6가지</b>입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p>
                                3 이상의 눈이 나오는 경우는
                            </p>

                            <BlockMath
                                math="3,\ 4,\ 5,\ 6"
                            />

                            <p>
                                모두 <b className="text-white">4가지</b>입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="4" />

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
                            시행 : 사건이 일어나도록 하는 행위
                        </p>

                        <p className="leading-8 text-gray-300">
                            사건 : 시행에서 나올 수 있는 관심 있는 결과
                        </p>

                        <p className="leading-8 text-gray-300">
                            전체 경우 : 시행에서 발생할 수 있는 모든 경우
                        </p>

                        <p className="leading-8 text-gray-300">
                            전체 경우의 수 : 전체 경우가 몇 가지인지 나타낸 수
                        </p>

                        <p className="leading-8 text-gray-300">
                            사건의 경우 : 전체 경우 중 사건에 해당하는 경우
                        </p>

                        <p className="leading-8 text-gray-300">
                            경우의 수 : 사건에 해당하는 경우의 가짓수
                        </p>
                    </div>
                </div>
            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.2 경우의 수에 사용하는 배수 판정법
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    경우의 수 문제에서는 어떤 수가 특정한 수의 배수인지 판별하거나,
                    일정한 범위에 있는 배수의 개수를 세는 경우가 많습니다.
                    자주 사용하는 배수 판정법과 배수의 개수를 세는 방법을 알아보겠습니다.
                </p>

                {/* 기본 배수 판정법 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        기본 배수 판정법
                    </h3>

                    <div className="space-y-5">

                        {/* 2의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                2의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                끝자리 숫자가 <InlineMath math="0,\ 2,\ 4,\ 6,\ 8" /> 중
                                하나이면 <InlineMath math="2" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    예를 들어 <InlineMath math="136" />은 끝자리 숫자가 <InlineMath math="6" />이므로 <InlineMath math="2" />의
                                    배수입니다.
                                </p>

                            </div>

                        </div>

                        {/* 4의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                4의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                끝의 두 자리 수가 <InlineMath math="00" />이거나 <InlineMath math="4" />의 배수이면
                                그 수는 <InlineMath math="4" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    예를 들어 <InlineMath math="2316" />의 끝의 두 자리 수는 <InlineMath math="16" />이고, <InlineMath math="16" />은 <InlineMath math="4" />의 배수이므로 <InlineMath math="2316" />은 <InlineMath math="4" />의
                                    배수입니다.
                                </p>

                            </div>

                        </div>

                        {/* 8의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                8의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                끝의 세 자리 수가 <InlineMath math="000" />이거나 <InlineMath math="8" />의 배수이면
                                그 수는 <InlineMath math="8" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    예를 들어 <InlineMath math="5248" />의 끝의 세 자리 수는 <InlineMath math="248" />이고,
                                </p>

                                <BlockMath math="248=8\times31" />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="5248" />은 <InlineMath math="8" />의 배수입니다.
                                </p>

                            </div>

                        </div>

                        {/* 3의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                3의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                각 자리 숫자의 합이 <InlineMath math="3" />의 배수이면
                                그 수는 <InlineMath math="3" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <BlockMath math="231\rightarrow2+3+1=6" />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="6" />은 <InlineMath math="3" />의
                                    배수이므로 <InlineMath math="231" />은 <InlineMath math="3" />의 배수입니다.
                                </p>

                            </div>

                        </div>

                        {/* 9의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                9의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                각 자리 숫자의 합이 <InlineMath math="9" />의 배수이면
                                그 수는 <InlineMath math="9" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <BlockMath math="729\rightarrow7+2+9=18" />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="18" />은 <InlineMath math="9" />의
                                    배수이므로 <InlineMath math="729" />는 <InlineMath math="9" />의 배수입니다.
                                </p>

                            </div>

                        </div>

                        {/* 5의 배수 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                5의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                끝자리 숫자가 <InlineMath math="0" /> 또는 <InlineMath math="5" />이면
                                그 수는 <InlineMath math="5" />의 배수입니다.
                            </p>

                            <div className="mt-3 rounded-lg bg-white/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    예를 들어 <InlineMath math="435" />는 끝자리 숫자가 <InlineMath math="5" />이므로 <InlineMath math="5" />의 배수입니다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 여러 조건을 함께 사용하는 배수 판정법 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        여러 조건을 함께 사용하는 배수 판정법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수의 배수인지를 판별할 때 두 가지 배수 조건을 함께 확인할 수도
                        있습니다.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                6의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="2" />의 배수이면서 <InlineMath math="3" />의 배수
                            </p>

                            <BlockMath math="6=2\times3" />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                12의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="4" />의 배수이면서 <InlineMath math="3" />의 배수
                            </p>

                            <BlockMath math="12=4\times3" />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                15의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="3" />의 배수이면서 <InlineMath math="5" />의 배수
                            </p>

                            <BlockMath math="15=3\times5" />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                18의 배수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                <InlineMath math="9" />의 배수이면서 <InlineMath math="2" />의 배수
                            </p>

                            <BlockMath math="18=9\times2" />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 조건을 함께 사용할 때는
                            <b className="text-white"> 두 조건을 모두 만족하는지</b>
                            확인해야 합니다.
                        </p>

                    </div>

                </div>

                {/* 배수의 개수 세기 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        배수의 개수 세기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        배수는 일정한 간격으로 나타나므로 등차수열의 항의 개수를 세는
                        방법을 사용할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{배수의 개수}
                =
                \frac{\text{마지막 배수}-\text{처음 배수}}
                {\text{간격}}
                +1"
                        />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            100 이하의 11의 배수
                        </p>

                        <BlockMath math="11,\ 22,\ 33,\ \cdots,\ 99" />

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                처음 배수는 <InlineMath math="11" />입니다.
                            </p>

                            <p>
                                마지막 배수는 <InlineMath math="99" />입니다.
                            </p>

                            <p>
                                배수 사이의 간격은 <InlineMath math="11" />입니다.
                            </p>

                        </div>

                        <BlockMath math="\frac{99-11}{11}+1=8+1=9" />

                        <p className="leading-8 text-gray-300">
                            따라서 <InlineMath math="100" /> 이하의 <InlineMath math="11" />의 배수는 모두
                            <b className="text-white"> 9개</b>입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            범위의 끝이 배수가 아닐 때는 먼저 그 범위 안에 있는
                            <b className="text-white"> 마지막 배수</b>를 찾아야 합니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            배수 판정법은 어떤 수가 특정한 수의 배수인지 빠르게 확인하는
                            방법입니다.
                        </p>

                        <p>
                            배수의 개수를 셀 때는 처음 배수, 마지막 배수, 배수 사이의
                            간격을 확인합니다.
                        </p>

                        <p>
                            특히 범위의 끝이 배수가 아닐 때는 그 범위 안에서 가장 큰
                            배수를 먼저 찾아야 합니다.
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
                            다음 수가 주어진 수의 배수인지 각각 판별하여라.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                (1) <InlineMath math="1236" />이 <InlineMath math="4,\ 6,\ 8,\ 12" />의 배수인지 판별하여라.
                            </p>

                            <p>
                                (2) <InlineMath math="4725" />가 <InlineMath math="3,\ 5,\ 9,\ 15" />의 배수인지 판별하여라.
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="1236" />
                                </p>

                                <p className="mt-4 leading-8">
                                    끝의 두 자리 수는 <InlineMath math="36" />입니다.
                                </p>

                                <BlockMath math="36=4\times9" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="1236" />은 <InlineMath math="4" />의 배수입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    끝의 세 자리 수는 <InlineMath math="236" />입니다.
                                </p>

                                <BlockMath math="236=8\times29+4" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="236" />은 <InlineMath math="8" />의 배수가 아니므로 <InlineMath math="1236" />도 <InlineMath math="8" />의 배수가 아닙니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    각 자리 숫자의 합은
                                </p>

                                <BlockMath math="1+2+3+6=12" />

                                <p className="leading-8">
                                    <InlineMath math="12" />는 <InlineMath math="3" />의 배수이므로 <InlineMath math="1236" />은 <InlineMath math="3" />의 배수입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    또한 끝자리 숫자가 <InlineMath math="6" />이므로 <InlineMath math="2" />의 배수입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="2" />의 배수이면서 <InlineMath math="3" />의 배수이므로 <InlineMath math="6" />의 배수입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    또 <InlineMath math="4" />의 배수이면서 <InlineMath math="3" />의 배수이므로 <InlineMath math="12" />의 배수입니다.
                                </p>

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math="1236\text{은 }4,\ 6,\ 12\text{의 배수이고, }8\text{의 배수는 아니다.}"
                                    />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="4725" />
                                </p>

                                <p className="mt-4 leading-8">
                                    끝자리 숫자가 <InlineMath math="5" />이므로 <InlineMath math="5" />의 배수입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    각 자리 숫자의 합은
                                </p>

                                <BlockMath math="4+7+2+5=18" />

                                <p className="leading-8">
                                    <InlineMath math="18" />은 <InlineMath math="9" />의 배수이므로 <InlineMath math="4725" />는 <InlineMath math="9" />의 배수입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="9" />의 배수는 <InlineMath math="3" />의 배수이므로 <InlineMath math="4725" />는 <InlineMath math="3" />의 배수이기도 합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    따라서 <InlineMath math="3" />의 배수이면서 <InlineMath math="5" />의 배수이므로 <InlineMath math="15" />의 배수입니다.
                                </p>

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math="4725\text{는 }3,\ 5,\ 9,\ 15\text{의 배수이다.}"
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
                            세 자리 자연수 <InlineMath math="42\Box" />가 다음 조건을
                            만족하도록 하는 <InlineMath math="\Box" /> 안의 숫자를 모두 구하여라.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                (1) <InlineMath math="3" />의 배수
                            </p>

                            <p>
                                (2) <InlineMath math="4" />의 배수
                            </p>

                            <p>
                                (3) <InlineMath math="6" />의 배수
                            </p>

                            <p>
                                (4) <InlineMath math="12" />의 배수
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="3" />의 배수
                                </p>

                                <p className="mt-4 leading-8">
                                    각 자리 숫자의 합은
                                </p>

                                <BlockMath math="4+2+\Box=6+\Box" />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="6+\Box" />가 <InlineMath math="3" />의 배수가 되어야 하므로
                                </p>

                                <BlockMath math="\Box=0,\ 3,\ 6,\ 9" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="\Box=0,\ 3,\ 6,\ 9" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="4" />의 배수
                                </p>

                                <p className="mt-4 leading-8">
                                    끝의 두 자리 수 <InlineMath math="2\Box" />가 <InlineMath math="4" />의 배수이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="20" /> 이상 <InlineMath math="29" /> 이하의 수 중 <InlineMath math="4" />의 배수는
                                </p>

                                <BlockMath math="20,\ 24,\ 28" />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="\Box=0,\ 4,\ 8" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="6" />의 배수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="6" />의 배수는 <InlineMath math="2" />의 배수이면서 <InlineMath math="3" />의 배수입니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="2" />의 배수가 되려면 <InlineMath math="\Box" /> 안의 숫자가 짝수이어야 하므로
                                </p>

                                <BlockMath math="\Box=0,\ 2,\ 4,\ 6,\ 8" />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 중에서 <InlineMath math="6+\Box" />가 <InlineMath math="3" />의 배수가 되는 숫자는
                                </p>

                                <BlockMath math="\Box=0,\ 6" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="\Box=0,\ 6" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (4) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (4) <InlineMath math="12" />의 배수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="12" />의 배수는 <InlineMath math="4" />의 배수이면서 <InlineMath math="3" />의 배수입니다.
                                </p>

                                <p className="leading-8">
                                    (2)에서 <InlineMath math="4" />의 배수가 되게 하는 숫자는
                                </p>

                                <BlockMath math="\Box=0,\ 4,\ 8" />

                                <p className="leading-8">
                                    이고, (1)에서 <InlineMath math="3" />의 배수가 되게 하는 숫자는
                                </p>

                                <BlockMath math="\Box=0,\ 3,\ 6,\ 9" />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 조건을 모두 만족하는 숫자는 <InlineMath math="0" />뿐입니다.
                                </p>

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="\Box=0" />

                                </div>

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
                            <InlineMath math="50" /> 이상 <InlineMath math="300" /> 이하의 자연수 중 <InlineMath math="12" />의 배수의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="50" /> 이상인
                                <InlineMath math="12" />의 배수 중 가장 작은 수를 찾습니다.
                            </p>

                            <BlockMath math="12\times4=48<50,\qquad12\times5=60" />

                            <p className="leading-8">
                                따라서 처음 배수는 <InlineMath math="60" />입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="300" /> 이하인
                                <InlineMath math="12" />의 배수 중 가장 큰 수를 찾습니다.
                            </p>

                            <BlockMath math="12\times25=300" />

                            <p className="leading-8">
                                따라서 마지막 배수는 <InlineMath math="300" />입니다.
                            </p>

                            <p className="leading-8">
                                범위에 들어 있는 배수를 나타내면
                            </p>

                            <BlockMath math="60,\ 72,\ 84,\ \cdots,\ 300" />

                            <p className="leading-8">
                                처음 배수는 <InlineMath math="60" />,
                                마지막 배수는 <InlineMath math="300" />,
                                간격은 <InlineMath math="12" />이므로
                            </p>

                            <BlockMath
                                math="\frac{300-60}{12}+1
                =\frac{240}{12}+1
                =20+1
                =21"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="21" />

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

                        <div className="space-y-3 leading-8 text-gray-300">

                            <p>
                                <InlineMath math="2" />의 배수 :
                                끝자리 숫자가 <InlineMath math="0,\ 2,\ 4,\ 6,\ 8" />
                            </p>

                            <p>
                                <InlineMath math="4" />의 배수 :
                                끝의 두 자리 수가 <InlineMath math="00" /> 또는 <InlineMath math="4" />의 배수
                            </p>

                            <p>
                                <InlineMath math="8" />의 배수 :
                                끝의 세 자리 수가 <InlineMath math="000" /> 또는 <InlineMath math="8" />의 배수
                            </p>

                            <p>
                                <InlineMath math="3" />의 배수 :
                                각 자리 숫자의 합이 <InlineMath math="3" />의 배수
                            </p>

                            <p>
                                <InlineMath math="9" />의 배수 :
                                각 자리 숫자의 합이 <InlineMath math="9" />의 배수
                            </p>

                            <p>
                                <InlineMath math="5" />의 배수 : 끝자리 숫자가 <InlineMath math="0" /> 또는 <InlineMath math="5" />
                            </p>

                            <p>
                                <InlineMath math="6" />의 배수 : <InlineMath math="2" />의 배수이면서 <InlineMath math="3" />의 배수
                            </p>

                            <p>
                                <InlineMath math="12" />의 배수 : <InlineMath math="4" />의 배수이면서 <InlineMath math="3" />의 배수
                            </p>

                            <p>
                                <InlineMath math="15" />의 배수 : <InlineMath math="3" />의 배수이면서 <InlineMath math="5" />의 배수
                            </p>

                            <p>
                                <InlineMath math="18" />의 배수 : <InlineMath math="9" />의 배수이면서 <InlineMath math="2" />의 배수
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{배수의 개수}
                =
                \frac{\text{마지막 배수}-\text{처음 배수}}
                {\text{간격}}
                +1"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.3 나머지가 같은 정수
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    정수를 어떤 자연수로 나누면 나머지는 정해진 몇 가지 중 하나입니다.
                    나머지를 기준으로 정수를 분류하면 모든 정수를 빠짐없이 겹치지 않게
                    나눌 수 있고, 여러 나머지 조건을 만족하는 수도 쉽게 찾을 수 있습니다.
                </p>

                {/* 나머지에 따른 정수의 분류 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        나머지에 따른 정수의 분류
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정수를 <InlineMath math="2" />로 나누면 나머지는
                    </p>

                    <BlockMath math="0,\ 1" />

                    <p className="leading-8 text-gray-300">
                        중 하나입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            나머지가 <InlineMath math="0" />인 정수는 짝수이고,
                            나머지가 <InlineMath math="1" />인 정수는 홀수입니다.
                        </p>

                        <BlockMath
                            math="\begin{aligned}
                &0,\ 2,\ 4,\ 6,\ 8,\ \cdots\\
                &1,\ 3,\ 5,\ 7,\ 9,\ \cdots
                \end{aligned}"
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        정수를 <InlineMath math="3" />으로 나누면 나머지는
                    </p>

                    <BlockMath math="0,\ 1,\ 2" />

                    <p className="leading-8 text-gray-300">
                        중 하나입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="\begin{aligned}
                &0,\ 3,\ 6,\ 9,\ 12,\ \cdots\\
                &1,\ 4,\ 7,\ 10,\ 13,\ \cdots\\
                &2,\ 5,\ 8,\ 11,\ 14,\ \cdots
                \end{aligned}"
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        일반적으로 정수를 <InlineMath math="n" />으로 나누면 나머지는
                    </p>

                    <BlockMath math="0,\ 1,\ 2,\ \cdots,\ n-1" />

                    <p className="leading-8 text-gray-300">
                        중 하나입니다. 따라서 모든 정수를 나머지에 따라
                        <InlineMath math="n" />개의 무리로 분류할 수 있습니다.
                    </p>

                </div>

                {/* 나머지가 같은 수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        나머지가 같은 수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        어떤 수로 나눈 나머지가 같은 수들은 일정한 간격으로 나타납니다.
                    </p>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />인 수
                            </p>

                            <BlockMath math="2,\ 5,\ 8,\ 11,\ 14,\ \cdots" />

                            <p className="leading-8 text-gray-300">
                                각 수의 간격은 <InlineMath math="3" />입니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="4" />로 나눈 나머지가 <InlineMath math="1" />인 수
                            </p>

                            <BlockMath math="1,\ 5,\ 9,\ 13,\ 17,\ \cdots" />

                            <p className="leading-8 text-gray-300">
                                각 수의 간격은 <InlineMath math="4" />입니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            어떤 수를 <InlineMath math="n" />으로 나눈 나머지가 같은 수들은 <InlineMath math="n" />의 간격으로 나타납니다.
                        </p>

                    </div>

                </div>

                {/* 범위 안에서 나머지가 같은 수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        범위 안에서 나머지가 같은 수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="1" />부터 <InlineMath math="100" />까지의
                        자연수 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />인 수는
                    </p>

                    <BlockMath math="2,\ 5,\ 8,\ \cdots,\ 98" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        또 <InlineMath math="4" />로 나눈 나머지가 <InlineMath math="1" />인 수는
                    </p>

                    <BlockMath math="1,\ 5,\ 9,\ \cdots,\ 97" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                </div>

                {/* 두 조건을 모두 만족하는 수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 조건을 모두 만족하는 수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 두 조건을 모두 만족하는 수를 찾아보겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />이다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="4" />로 나눈 나머지가 <InlineMath math="1" />이다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 조건이 함께 반복되는 간격은
                        <InlineMath math="3" />과 <InlineMath math="4" />의
                        최소공배수인 <InlineMath math="12" />입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 연속한 <InlineMath math="12" />개의 수 안에서
                        두 조건을 모두 만족하는 수를 하나 찾으면 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />인 수를 기준으로 찾는 경우
                        </p>

                        <BlockMath math="2,\ 5,\ 8,\ 11" />

                        <p className="leading-8 text-gray-300">
                            이 중 <InlineMath math="4" />로 나눈 나머지가 <InlineMath math="1" />인 수는 <InlineMath math="5" />입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            <InlineMath math="4" />로 나눈 나머지가 <InlineMath math="1" />인 수를 기준으로 찾는 경우
                        </p>

                        <BlockMath math="1,\ 5,\ 9" />

                        <p className="leading-8 text-gray-300">
                            이 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />인 수는 <InlineMath math="5" />입니다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 두 조건을 모두 만족하는 수는 <InlineMath math="12" />의 간격으로 나타납니다.
                    </p>

                    <BlockMath math="5,\ 17,\ 29,\ 41,\ 53,\ \cdots" />

                </div>

                {/* 탐색을 줄이는 방법 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        탐색을 줄이는 방법
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            <InlineMath math="3" />의 조건부터 찾으면 <InlineMath math="2,\ 5,\ 8,\ 11" />의
                            <b className="text-white"> 4개</b>를 확인해야 합니다.
                        </p>

                        <p>
                            <InlineMath math="4" />의 조건부터 찾으면 <InlineMath math="1,\ 5,\ 9" />의
                            <b className="text-white"> 3개</b>만 확인하면 됩니다.
                        </p>

                        <p>
                            따라서 여러 나머지 조건을 만족하는 수를 찾을 때는
                            <b className="text-white">
                                나누는 수가 큰 조건부터 조사하면 확인할 수가 적어집니다.
                            </b>
                        </p>

                    </div>

                </div>

                {/* 나머지가 같은 수의 개수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        나머지가 같은 수의 개수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        나머지가 같은 수들도 일정한 간격으로 나타나므로,
                        배수의 개수를 셀 때 사용한 방법을 그대로 사용할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{개수}
                =
                \frac{\text{마지막 수}-\text{처음 수}}
                {\text{간격}}
                +1"
                        />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            <InlineMath math="1" />부터 <InlineMath math="100" />까지에서
                            두 조건을 모두 만족하는 수
                        </p>

                        <BlockMath math="5,\ 17,\ 29,\ 41,\ 53,\ 65,\ 77,\ 89" />

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                처음 수는 <InlineMath math="5" />입니다.
                            </p>

                            <p>
                                마지막 수는 <InlineMath math="89" />입니다.
                            </p>

                            <p>
                                간격은 <InlineMath math="12" />입니다.
                            </p>

                        </div>

                        <BlockMath
                            math="\frac{89-5}{12}+1
                =\frac{84}{12}+1
                =7+1
                =8"
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 모두 <b className="text-white">8개</b>입니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            정수를 <InlineMath math="n" />으로 나누면 나머지는 <InlineMath math="0,\ 1,\ 2,\ \cdots,\ n-1" /> 중 하나입니다.
                        </p>

                        <p>
                            나머지가 같은 수들은 나누는 수만큼의 일정한 간격으로 나타납니다.
                        </p>

                        <p>
                            두 나머지 조건을 모두 만족하는 수는 두 나누는 수의
                            최소공배수만큼의 간격으로 반복됩니다.
                        </p>

                        <p>
                            나누는 수가 큰 조건부터 조사하면 확인해야 하는 수를 줄일 수 있습니다.
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
                            <InlineMath math="1" />부터 <InlineMath math="100" />까지의
                            자연수 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />이고, <InlineMath math="5" />로 나눈
                            나머지가 <InlineMath math="3" />인 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="3" />과 <InlineMath math="5" />의
                                최소공배수는 <InlineMath math="15" />이므로, 두 나머지 조건은 <InlineMath math="15" />개의 수마다 같은 형태로 반복됩니다.
                            </p>

                            <p className="leading-8">
                                나누는 수가 더 큰 <InlineMath math="5" />의 조건을 기준으로
                                먼저 찾습니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="1" />부터 <InlineMath math="15" />까지에서 <InlineMath math="5" />로 나눈 나머지가 <InlineMath math="3" />인 수는
                            </p>

                            <BlockMath math="3,\ 8,\ 13" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="2" />인 수를 찾으면
                            </p>

                            <BlockMath math="8" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 조건을 모두 만족하는 자연수는 <InlineMath math="15" />의 간격으로 나타납니다.
                            </p>

                            <BlockMath math="8,\ 23,\ 38,\ 53,\ 68,\ 83,\ 98" />

                            <p className="leading-8">
                                처음 수는 <InlineMath math="8" />, 마지막 수는
                                <InlineMath math="98" />, 간격은 <InlineMath math="15" />이므로
                            </p>

                            <BlockMath
                                math="\frac{98-8}{15}+1
                =\frac{90}{15}+1
                =6+1
                =7"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="7" />

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
                            <InlineMath math="1" />부터 <InlineMath math="100" />까지의
                            자연수 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="1" />이거나, <InlineMath math="5" />로 나눈 나머지가 <InlineMath math="3" />인 자연수의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="1" />인 자연수는
                            </p>

                            <BlockMath math="1,\ 4,\ 7,\ \cdots,\ 100" />

                            <p className="leading-8">
                                처음 수는 <InlineMath math="1" />,
                                마지막 수는 <InlineMath math="100" />,
                                간격은 <InlineMath math="3" />이므로
                            </p>

                            <BlockMath
                                math="\frac{100-1}{3}+1
                =33+1
                =34"
                            />

                            <p className="leading-8">
                                따라서 모두 <InlineMath math="34" />개입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                다음으로 <InlineMath math="5" />로 나눈 나머지가 <InlineMath math="3" />인 자연수는
                            </p>

                            <BlockMath math="3,\ 8,\ 13,\ \cdots,\ 98" />

                            <p className="leading-8">
                                처음 수는 <InlineMath math="3" />,
                                마지막 수는 <InlineMath math="98" />,
                                간격은 <InlineMath math="5" />이므로
                            </p>

                            <BlockMath
                                math="\frac{98-3}{5}+1
                =19+1
                =20"
                            />

                            <p className="leading-8">
                                따라서 모두 <InlineMath math="20" />개입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                두 조건을 모두 만족하는 자연수는
                            </p>

                            <BlockMath math="13,\ 28,\ 43,\ 58,\ 73,\ 88" />

                            <p className="leading-8">
                                처음 수는 <InlineMath math="13" />,
                                마지막 수는 <InlineMath math="88" />,
                                간격은 <InlineMath math="15" />이므로
                            </p>

                            <BlockMath
                                math="\frac{88-13}{15}+1
                =5+1
                =6"
                            />

                            <p className="leading-8">
                                두 조건을 모두 만족하는 수는 두 번 세었으므로 한 번 빼 줍니다.
                            </p>

                            <BlockMath math="34+20-6=48" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="48" />

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
                            <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="1" />이고, <InlineMath math="5" />로 나눈 나머지가
                            {" "}<InlineMath math="2" />이며,{" "}
                            <InlineMath math="7" />로 나눈 나머지가{" "}
                            <InlineMath math="4" />인 가장 작은 세 자리 자연수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                나누는 수가 가장 큰 <InlineMath math="7" />의 조건부터
                                조사합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="7" />로 나눈 나머지가 <InlineMath math="4" />인 수 중에서, <InlineMath math="5" />로 나눈 나머지가 <InlineMath math="2" />인 수를 찾습니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="7" />과 <InlineMath math="5" />의
                                최소공배수는 <InlineMath math="35" />이므로 <InlineMath math="7" />의 조건을 만족하는 수를 <InlineMath math="5" />개만 조사하면 됩니다.
                            </p>

                            <BlockMath math="4,\ 11,\ 18,\ 25,\ 32" />

                            <p className="leading-8">
                                이 중 <InlineMath math="5" />로 나눈 나머지가 <InlineMath math="2" />인 수는
                            </p>

                            <BlockMath math="32" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서 앞의 두 조건을 모두 만족하는 수는 <InlineMath math="35" />의 간격으로 나타납니다.
                            </p>

                            <p className="leading-8">
                                이제 이 중에서 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="1" />인 수를 찾습니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="35" />와 <InlineMath math="3" />의
                                최소공배수는 <InlineMath math="105" />이므로 <InlineMath math="35" />의 간격으로 나타나는 수를 <InlineMath math="3" />개만 조사하면 됩니다.
                            </p>

                            <BlockMath math="32,\ 67,\ 102" />

                            <p className="leading-8">
                                이 중 <InlineMath math="3" />으로 나눈 나머지가 <InlineMath math="1" />인 수는
                            </p>

                            <BlockMath math="67" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 조건을 모두 만족하는 수는
                                <InlineMath math="105" />의 간격으로 나타납니다.
                            </p>

                            <BlockMath math="67,\ 172,\ 277,\ \cdots" />

                            <p className="leading-8">
                                이 중 가장 작은 세 자리 자연수는 <InlineMath math="172" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="172" />

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

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                정수를 <InlineMath math="n" />으로 나누면 나머지는 <InlineMath math="0,\ 1,\ 2,\ \cdots,\ n-1" /> 중 하나이다.
                            </p>

                            <p>
                                어떤 수를 <InlineMath math="n" />으로 나눈 나머지가 같은 수들은 <InlineMath math="n" />의 간격으로 나타난다.
                            </p>

                            <p>
                                두 나머지 조건을 모두 만족하는 수는 두 나누는 수의
                                최소공배수만큼의 간격으로 반복된다.
                            </p>

                            <p>
                                여러 조건이 있을 때는 나누는 수가 큰 조건부터 조사하면
                                확인해야 하는 수가 적어진다.
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{개수}
                =
                \frac{\text{마지막 수}-\text{처음 수}}
                {\text{간격}}
                +1"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.4 약수에 대하여
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    자연수의 양의 약수를 빠짐없이 찾으려면 먼저 그 수를
                    <b className="text-white"> 소인수분해</b>해야 합니다.
                    소인수분해한 각 소수의 지수를 이용하면 양의 약수의 개수를
                    간단하게 구할 수 있습니다.
                </p>

                {/* 소수의 거듭제곱의 약수 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        소수의 거듭제곱의 약수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        먼저 하나의 소수만으로 이루어진 수의 양의 약수를 살펴보겠습니다.
                    </p>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="3^4" />의 양의 약수
                            </p>

                            <BlockMath math="1,\ 3,\ 3^2,\ 3^3,\ 3^4" />

                            <p className="leading-8 text-gray-300">
                                지수로는 <InlineMath math="0,\ 1,\ 2,\ 3,\ 4" />를
                                선택할 수 있으므로 모두
                                <b className="text-white"> 5개</b>입니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="13^5" />의 양의 약수
                            </p>

                            <BlockMath math="1,\ 13,\ 13^2,\ 13^3,\ 13^4,\ 13^5" />

                            <p className="leading-8 text-gray-300">
                                지수로는 <InlineMath math="0,\ 1,\ 2,\ 3,\ 4,\ 5" />를
                                선택할 수 있으므로 모두
                                <b className="text-white"> 6개</b>입니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="19^6" />의 양의 약수
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                지수로 <InlineMath math="0" />부터{" "}
                                <InlineMath math="6" />까지 선택할 수 있으므로
                            </p>

                            <BlockMath math="6+1=7" />

                            <p className="leading-8 text-gray-300">
                                양의 약수는 모두
                                <b className="text-white"> 7개</b>입니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="a" />가 소수이고{" "}
                            <InlineMath math="p" />가 자연수일 때,{" "}
                            <InlineMath math="a^p" />의 양의 약수는
                        </p>

                        <BlockMath math="1,\ a,\ a^2,\ \cdots,\ a^p" />

                        <p className="leading-8 text-gray-300">
                            이므로 모두 <InlineMath math="p+1" />개입니다.
                        </p>

                    </div>

                </div>

                {/* 여러 소수로 이루어진 수의 약수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        여러 소수로 이루어진 수의 약수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        여러 소수의 거듭제곱을 곱한 수의 약수는 각 소수의 지수를
                        하나씩 선택하여 만듭니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            <InlineMath math="3^4\times13^5" />의 양의 약수
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            약수 하나는 다음과 같은 꼴입니다.
                        </p>

                        <BlockMath math="3^m\times13^n" />

                        <p className="leading-8 text-gray-300">
                            이때 <InlineMath math="3" />의 지수{" "}
                            <InlineMath math="m" />은
                        </p>

                        <BlockMath math="0,\ 1,\ 2,\ 3,\ 4" />

                        <p className="leading-8 text-gray-300">
                            중 하나이므로 <InlineMath math="5" />가지입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            또 <InlineMath math="13" />의 지수{" "}
                            <InlineMath math="n" />은
                        </p>

                        <BlockMath math="0,\ 1,\ 2,\ 3,\ 4,\ 5" />

                        <p className="leading-8 text-gray-300">
                            중 하나이므로 <InlineMath math="6" />가지입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            두 지수를 각각 선택하므로 양의 약수의 개수는
                        </p>

                        <BlockMath math="5\times6=30" />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            <InlineMath math="3^4\times13^5\times19^6" />의 양의 약수
                        </p>

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                <InlineMath math="3" />의 지수 선택:{" "}
                                <InlineMath math="0" />부터 <InlineMath math="4" />까지
                                <b className="text-white"> 5가지</b>
                            </p>

                            <p>
                                <InlineMath math="13" />의 지수 선택:{" "}
                                <InlineMath math="0" />부터 <InlineMath math="5" />까지
                                <b className="text-white"> 6가지</b>
                            </p>

                            <p>
                                <InlineMath math="19" />의 지수 선택:{" "}
                                <InlineMath math="0" />부터 <InlineMath math="6" />까지
                                <b className="text-white"> 7가지</b>
                            </p>

                        </div>

                        <BlockMath math="5\times6\times7=210" />

                        <p className="leading-8 text-gray-300">
                            따라서 양의 약수는 모두
                            <b className="text-white"> 210개</b>입니다.
                        </p>

                    </div>

                </div>

                {/* 일반적인 약수의 개수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        일반적인 양의 약수의 개수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        자연수 <InlineMath math="N" />을 소인수분해한 결과가
                    </p>

                    <BlockMath math="N=a^p b^q c^r" />

                    <p className="leading-8 text-gray-300">
                        라고 하겠습니다. 여기서{" "}
                        <InlineMath math="a,\ b,\ c" />는 서로 다른 소수이고,{" "}
                        <InlineMath math="p,\ q,\ r" />은 자연수입니다.
                    </p>

                    <p className="mt-5 leading-8 text-gray-300">
                        <InlineMath math="N" />의 양의 약수 하나는
                    </p>

                    <BlockMath math="a^x b^y c^z" />

                    <p className="leading-8 text-gray-300">
                        의 꼴이며 각 지수는 다음 범위에서 선택합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="\begin{aligned}
                x&=0,\ 1,\ 2,\ \cdots,\ p\\
                y&=0,\ 1,\ 2,\ \cdots,\ q\\
                z&=0,\ 1,\ 2,\ \cdots,\ r
                \end{aligned}"
                        />

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                <InlineMath math="x" />를 선택하는 방법:{" "}
                                <InlineMath math="p+1" />가지
                            </p>

                            <p>
                                <InlineMath math="y" />를 선택하는 방법:{" "}
                                <InlineMath math="q+1" />가지
                            </p>

                            <p>
                                <InlineMath math="z" />를 선택하는 방법:{" "}
                                <InlineMath math="r+1" />가지
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{양의 약수의 개수}
                =(p+1)(q+1)(r+1)"
                        />

                    </div>

                </div>

                {/* 가장 중요한 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        가장 중요한 주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        양의 약수의 개수 공식은
                        <b className="text-white"> 반드시 소인수분해를 한 후</b>
                        사용해야 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            잘못된 계산
                        </p>

                        <BlockMath math="6^3\rightarrow3+1=4" />

                        <p className="leading-8 text-gray-300">
                            밑인 <InlineMath math="6" />은 소수가 아니므로
                            이와 같이 계산하면 안 됩니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            올바른 계산
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            먼저 <InlineMath math="6" />을 소인수분해합니다.
                        </p>

                        <BlockMath math="6=2\times3" />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath math="6^3=(2\times3)^3=2^3\times3^3" />

                        <p className="leading-8 text-gray-300">
                            이므로 양의 약수의 개수는
                        </p>

                        <BlockMath math="(3+1)(3+1)=16" />

                    </div>

                    <p className="mt-5 font-semibold leading-8 text-red-200">
                        밑이 소수인지 확인하지 않고 지수에 바로 1을 더하지 않도록
                        주의해야 합니다.
                    </p>

                </div>

                {/* 약수의 개수를 구하는 순서 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        양의 약수의 개수를 구하는 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            <b className="text-white">① 자연수를 소인수분해한다.</b>
                        </p>

                        <p>
                            ② 각 소수의 지수에 <InlineMath math="1" />을 더한다.
                        </p>

                        <p>
                            ③ 구한 수를 모두 곱한다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="N=a^p b^q c^r
                \quad\Longrightarrow\quad
                (p+1)(q+1)(r+1)"
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

                        <p className="leading-8 text-gray-300">
                            자연수 <InlineMath math="540" />에 대하여 다음을 구하여라.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                (1) 양의 약수의 개수
                            </p>

                            <p>
                                (2) 양의 약수 중 <InlineMath math="3" />의 배수인 수의 개수
                            </p>

                            <p>
                                (3) 양의 약수 중 <InlineMath math="6" />과 서로 소인 수의 개수
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                양의 약수의 개수를 구하기 위해 먼저{" "}
                                <InlineMath math="540" />을 소인수분해합니다.
                            </p>

                            <BlockMath
                                math="540
                =54\times10
                =2^2\times3^3\times5"
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="540" />의 양의 약수는
                            </p>

                            <BlockMath math="2^a3^b5^c" />

                            <p className="leading-8">
                                의 꼴이며, 각 지수는
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                a&=0,\ 1,\ 2\\
                b&=0,\ 1,\ 2,\ 3\\
                c&=0,\ 1
                \end{aligned}"
                            />

                            <p className="leading-8">
                                중에서 선택할 수 있습니다.
                            </p>

                            <hr className="border-white/10" />

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) 양의 약수의 개수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="2" />의 지수를 선택하는 방법은{" "}
                                    <InlineMath math="3" />가지,{" "}
                                    <InlineMath math="3" />의 지수를 선택하는 방법은{" "}
                                    <InlineMath math="4" />가지,{" "}
                                    <InlineMath math="5" />의 지수를 선택하는 방법은{" "}
                                    <InlineMath math="2" />가지입니다.
                                </p>

                                <BlockMath math="3\times4\times2=24" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="24" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) 양의 약수 중 <InlineMath math="3" />의 배수인 수의 개수
                                </p>

                                <p className="mt-4 leading-8">
                                    약수가 <InlineMath math="3" />의 배수가 되려면
                                    소인수 <InlineMath math="3" />을 적어도 하나 포함해야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="3" />의 지수는
                                </p>

                                <BlockMath math="1,\ 2,\ 3" />

                                <p className="leading-8">
                                    중에서 선택해야 하므로 <InlineMath math="3" />가지입니다.
                                </p>

                                <p className="leading-8">
                                    한편 <InlineMath math="2" />의 지수는{" "}
                                    <InlineMath math="0,\ 1,\ 2" />의{" "}
                                    <InlineMath math="3" />가지이고,{" "}
                                    <InlineMath math="5" />의 지수는{" "}
                                    <InlineMath math="0,\ 1" />의{" "}
                                    <InlineMath math="2" />가지입니다.
                                </p>

                                <BlockMath math="3\times3\times2=18" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="18" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) 양의 약수 중 <InlineMath math="6" />과 서로 소인 수의 개수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="6" />을 소인수분해하면
                                </p>

                                <BlockMath math="6=2\times3" />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="6" />과 서로 소가 되려면
                                    소인수 <InlineMath math="2" />와{" "}
                                    <InlineMath math="3" />을 모두 포함하지 않아야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="2" />와{" "}
                                    <InlineMath math="3" />의 지수는 모두{" "}
                                    <InlineMath math="0" />이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    그러므로 가능한 약수는{" "}
                                    <InlineMath math="5" />의 지수만 선택하여
                                </p>

                                <BlockMath math="5^0,\ 5^1" />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath math="1,\ 5" />

                                <p className="leading-8">
                                    의 두 수입니다.
                                </p>

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="2" />

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
                            <InlineMath math="270" />의 양의 약수 중 홀수의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="270" />을 소인수분해합니다.
                            </p>

                            <BlockMath math="270=2\times3^3\times5" />

                            <p className="leading-8">
                                양의 약수 하나는
                            </p>

                            <BlockMath math="2^a3^b5^c" />

                            <p className="leading-8">
                                의 꼴입니다.
                            </p>

                            <p className="leading-8">
                                홀수는 <InlineMath math="2" />를 인수로 가지지 않으므로{" "}
                                <InlineMath math="2" />의 지수는 반드시{" "}
                                <InlineMath math="0" />이어야 합니다.
                            </p>

                            <BlockMath math="a=0" />

                            <p className="leading-8">
                                한편
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                b&=0,\ 1,\ 2,\ 3\\
                c&=0,\ 1
                \end{aligned}"
                            />

                            <p className="leading-8">
                                이므로
                                <InlineMath math="b" />는{" "}
                                <InlineMath math="4" />가지,{" "}
                                <InlineMath math="c" />는{" "}
                                <InlineMath math="2" />가지 선택할 수 있습니다.
                            </p>

                            <BlockMath math="4\times2=8" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="8" />

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
                            <InlineMath math="360" />과{" "}
                            <InlineMath math="540" />의 양의 공약수 중
                            홀수의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 수를 소인수분해합니다.
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                360&=2^3\times3^2\times5\\
                540&=2^2\times3^3\times5
                \end{aligned}"
                            />

                            <p className="leading-8">
                                공약수는 공통으로 있는 소인수만 사용할 수 있으며,
                                각 소수의 지수는 두 수의 지수 중 작은 값까지만 선택할 수 있습니다.
                            </p>

                            <BlockMath math="2^a3^b5^c" />

                            <p className="leading-8">
                                여기서
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                a&=0,\ 1,\ 2\\
                b&=0,\ 1,\ 2\\
                c&=0,\ 1
                \end{aligned}"
                            />

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                홀수는 <InlineMath math="2" />를 인수로 가지지 않으므로{" "}
                                <InlineMath math="a=0" />이어야 합니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                b&=0,\ 1,\ 2\qquad(3\text{가지})\\
                c&=0,\ 1\qquad\qquad(2\text{가지})
                \end{aligned}"
                            />

                            <BlockMath math="3\times2=6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="6" />

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
                            양의 약수의 개수가 <InlineMath math="12" />개인 자연수 중
                            가장 작은 자연수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                자연수를
                            </p>

                            <BlockMath math="N=a^pb^qc^r\cdots" />

                            <p className="leading-8">
                                라고 하면 양의 약수의 개수는
                            </p>

                            <BlockMath math="(p+1)(q+1)(r+1)\cdots" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath math="12=12,\ 6\times2,\ 4\times3,\ 3\times2\times2" />

                            <p className="leading-8">
                                로 나누어 생각할 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                <p className="font-bold text-yellow-300">
                                    가장 작은 자연수를 만드는 방법
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    가장 작은 자연수를 만들려면
                                    <b className="text-white"> 지수가 큰 소인수일수록 작은 소수에 대응</b>시켜야 합니다.
                                </p>

                                <BlockMath math="2<3<5<\cdots" />

                                <p className="leading-8 text-gray-300">
                                    따라서 큰 지수는 <InlineMath math="2" />에,
                                    그 다음 지수는 <InlineMath math="3" />에,
                                    그 다음 지수는 <InlineMath math="5" />에 대응시키면
                                    가장 작은 자연수가 됩니다.
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <BlockMath
                                    math="\begin{aligned}
                    12&\rightarrow2^{11}\\[2mm]
                    6\times2&\rightarrow2^5\times3\\[2mm]
                    4\times3&\rightarrow2^3\times3^2\\[2mm]
                    3\times2\times2&\rightarrow2^2\times3\times5
                    \end{aligned}"
                                />

                            </div>

                            <p className="leading-8">
                                각각의 값을 계산하면
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                2^{11}&=2048\\
                2^5\times3&=96\\
                2^3\times3^2&=72\\
                2^2\times3\times5&=60
                \end{aligned}"
                            />

                            <p className="leading-8">
                                이므로 가장 작은 자연수는
                            </p>

                            <BlockMath math="60" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="60" />

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

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                소수 <InlineMath math="a" />에 대하여{" "}
                                <InlineMath math="a^p" />의 양의 약수의 개수는{" "}
                                <InlineMath math="p+1" />개이다.
                            </p>

                            <p>
                                자연수의 양의 약수의 개수를 구하려면
                                반드시 먼저 소인수분해해야 한다.
                            </p>

                            <p>
                                소인수분해한 각 소수의 지수에{" "}
                                <InlineMath math="1" />을 더한 뒤 모두 곱한다.
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="N=a^p b^q c^r
                \quad\Longrightarrow\quad
                \text{양의 약수의 개수}
                =(p+1)(q+1)(r+1)"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.5 지불 방법과 지불 금액
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    가지고 있는 화폐를 사용하여 돈을 지불할 때는
                    <b className="text-white"> 지불하는 방법의 수</b>와
                    <b className="text-white"> 서로 다른 지불 금액의 수</b>를
                    구분해야 합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    서로 다른 지불 방법으로 같은 금액을 만들 수도 있으므로,
                    일반적으로 지불 방법의 수는 지불 금액의 수보다 크거나 같습니다.
                </p>

                {/* 지불 방법 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        지불 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        각 종류의 화폐를 몇 개 사용할 것인지 각각 선택하면
                        하나의 지불 방법이 정해집니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            예를 들어 <InlineMath math="10" />원짜리
                            <InlineMath math="4" />개,{" "}
                            <InlineMath math="50" />원짜리{" "}
                            <InlineMath math="1" />개,{" "}
                            <InlineMath math="100" />원짜리{" "}
                            <InlineMath math="2" />개가 있다고 하겠습니다.
                        </p>

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                <InlineMath math="10" />원짜리의 사용 개수 :{" "}
                                <InlineMath math="0,\ 1,\ 2,\ 3,\ 4" />
                                <b className="text-white"> — 5가지</b>
                            </p>

                            <p>
                                <InlineMath math="50" />원짜리의 사용 개수 :{" "}
                                <InlineMath math="0,\ 1" />
                                <b className="text-white"> — 2가지</b>
                            </p>

                            <p>
                                <InlineMath math="100" />원짜리의 사용 개수 :{" "}
                                <InlineMath math="0,\ 1,\ 2" />
                                <b className="text-white"> — 3가지</b>
                            </p>

                        </div>

                        <p className="mt-4 leading-8 text-gray-300">
                            각 사용 개수를 하나씩 선택하므로 지불 방법은
                        </p>

                        <BlockMath math="5\times2\times3=30" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 중 모든 화폐를 <InlineMath math="0" />개 사용하여{" "}
                            <InlineMath math="0" />원을 지불하는 경우를 제외하면
                        </p>

                        <BlockMath math="30-1=29" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            각 화폐의 개수가 각각{" "}
                            <InlineMath math="a,\ b,\ c" />개라면 지불 방법의 수는
                        </p>

                        <BlockMath
                            math="(a+1)(b+1)(c+1)-1"
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 마지막의 <InlineMath math="-1" />은{" "}
                            <InlineMath math="0" />원을 지불하는 경우를 제외한 것입니다.
                        </p>

                    </div>

                </div>

                {/* 지불 방법과 지불 금액의 차이 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        지불 방법과 지불 금액의 차이
                    </h3>

                    <p className="leading-8 text-gray-300">
                        지불 방법이 서로 다르더라도 지불한 금액은 같을 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math="\begin{aligned}
                &1000\text{원권 }1\text{장}\\
                &500\text{원권 }2\text{장}
                \end{aligned}"
                        />

                        <p className="leading-8 text-gray-300">
                            두 경우는 지불 방법은 다르지만 지불 금액은 모두{" "}
                            <InlineMath math="1000" />원입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <BlockMath
                            math="\text{지불 방법의 수}
                \ge
                \text{지불 금액의 수}"
                        />

                        <p className="leading-8 text-gray-300">
                            하나의 지불 금액을 여러 가지 방법으로 만들 수 있기 때문입니다.
                        </p>

                    </div>

                </div>

                {/* 예시 1 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        예시 1
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="10" />원짜리 <InlineMath math="4" />개,{" "}
                        <InlineMath math="50" />원짜리 <InlineMath math="1" />개,{" "}
                        <InlineMath math="100" />원짜리 <InlineMath math="2" />개가
                        있다고 하겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 방법의 수
                        </p>

                        <BlockMath
                            math="(4+1)(1+1)(2+1)-1"
                        />

                        <BlockMath math="5\times2\times3-1=29" />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 금액의 수
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="10" />원짜리를 모두 사용하여도
                        </p>

                        <BlockMath math="10\times4=40<50" />

                        <p className="leading-8 text-gray-300">
                            이므로 <InlineMath math="50" />원짜리 한 개의 금액을
                            만들 수 없습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            또 <InlineMath math="10" />원짜리와{" "}
                            <InlineMath math="50" />원짜리를 모두 사용하여도
                        </p>

                        <BlockMath math="10\times4+50\times1=90<100" />

                        <p className="leading-8 text-gray-300">
                            이므로 <InlineMath math="100" />원짜리 한 개의 금액을
                            만들 수 없습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 서로 다른 지불 방법이 서로 다른 금액을 만듭니다.
                        </p>

                        <BlockMath
                            math="\text{지불 금액의 수}
                =
                \text{지불 방법의 수}
                =
                29"
                        />

                    </div>

                </div>

                {/* 예시 2 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        예시 2
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="10" />원짜리 <InlineMath math="4" />개,{" "}
                        <InlineMath math="50" />원짜리 <InlineMath math="3" />개,{" "}
                        <InlineMath math="100" />원짜리 <InlineMath math="2" />개가
                        있다고 하겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 방법의 수
                        </p>

                        <BlockMath
                            math="(4+1)(3+1)(2+1)-1"
                        />

                        <BlockMath math="5\times4\times3-1=59" />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 금액의 수
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="100" />원짜리 한 개는{" "}
                            <InlineMath math="50" />원짜리 두 개와 같은 금액입니다.
                        </p>

                        <BlockMath math="100=50\times2" />

                        <p className="leading-8 text-gray-300">
                            따라서 <InlineMath math="100" />원짜리{" "}
                            <InlineMath math="2" />개를{" "}
                            <InlineMath math="50" />원짜리{" "}
                            <InlineMath math="4" />개로 바꾸어 생각할 수 있습니다.
                        </p>

                        <BlockMath math="3+4=7" />

                        <p className="leading-8 text-gray-300">
                            금액만 생각하면
                            <InlineMath math="10" />원짜리 <InlineMath math="4" />개와{" "}
                            <InlineMath math="50" />원짜리 <InlineMath math="7" />개를
                            가진 것과 같습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            또한
                        </p>

                        <BlockMath math="10\times4=40<50" />

                        <p className="leading-8 text-gray-300">
                            이므로 서로 다른 사용 개수가 같은 금액을 만들지 않습니다.
                        </p>

                        <BlockMath
                            math="(4+1)(7+1)-1"
                        />

                        <BlockMath math="5\times8-1=39" />

                        <p className="leading-8 text-gray-300">
                            따라서 지불 방법은 <InlineMath math="59" />가지이지만,
                            서로 다른 지불 금액은 <InlineMath math="39" />가지입니다.
                        </p>

                    </div>

                </div>

                {/* 예시 3 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        예시 3
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="10" />원짜리 <InlineMath math="5" />개,{" "}
                        <InlineMath math="50" />원짜리 <InlineMath math="3" />개,{" "}
                        <InlineMath math="100" />원짜리 <InlineMath math="2" />개가
                        있다고 하겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 방법의 수
                        </p>

                        <BlockMath
                            math="(5+1)(3+1)(2+1)-1"
                        />

                        <BlockMath math="6\times4\times3-1=71" />

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            지불 금액의 수
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="50" />원짜리 한 개는{" "}
                            <InlineMath math="10" />원짜리 다섯 개와 같은 금액입니다.
                        </p>

                        <BlockMath math="50=10\times5" />

                        <p className="leading-8 text-gray-300">
                            또 <InlineMath math="100" />원짜리 한 개는{" "}
                            <InlineMath math="10" />원짜리 열 개와 같은 금액입니다.
                        </p>

                        <BlockMath math="100=10\times10" />

                        <p className="leading-8 text-gray-300">
                            따라서 모든 화폐를 <InlineMath math="10" />원짜리로
                            바꾸어 생각하면
                        </p>

                        <BlockMath
                            math="5+5\times3+10\times2=40"
                        />

                        <p className="leading-8 text-gray-300">
                            즉, <InlineMath math="10" />원짜리{" "}
                            <InlineMath math="40" />개를 가진 것과 같습니다.
                        </p>

                        <BlockMath math="(40+1)-1=40" />

                        <p className="leading-8 text-gray-300">
                            실제로 만들 수 있는 지불 금액은
                        </p>

                        <BlockMath math="10,\ 20,\ 30,\ \cdots,\ 400" />

                        <p className="leading-8 text-gray-300">
                            이므로 서로 다른 지불 금액은 모두{" "}
                            <InlineMath math="40" />가지입니다.
                        </p>

                    </div>

                </div>

                {/* 지불 금액을 구하는 방법 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        지불 금액을 구하는 방법
                    </h3>

                    <div className="space-y-5 leading-8 text-gray-300">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                소액권의 합으로 고액권을 만들 수 없는 경우
                            </p>

                            <p className="mt-3">
                                서로 다른 지불 방법이 서로 다른 금액을 만드므로
                            </p>

                            <BlockMath
                                math="\text{지불 금액의 수}
                    =
                    \text{지불 방법의 수}"
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                소액권의 합으로 고액권을 만들 수 있는 경우
                            </p>

                            <p className="mt-3">
                                고액권을 소액권으로 바꾸어 생각한 뒤,
                                바뀐 화폐의 지불 방법을 계산합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            지불 방법은 각 화폐를 몇 개 사용할지 선택하는 것입니다.
                        </p>

                        <p>
                            지불 금액은 서로 다른 방법이 같은 금액을 만드는지 확인해야 합니다.
                        </p>

                        <p>
                            소액권의 합으로 고액권을 만들 수 있으면
                            서로 다른 지불 방법 사이에 금액의 중복이 생길 수 있습니다.
                        </p>

                        <p>
                            이때 고액권을 소액권으로 바꾸어 생각하면
                            서로 다른 지불 금액의 수를 쉽게 구할 수 있습니다.
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
                            <InlineMath math="100" />원짜리 동전 <InlineMath math="1" />개,{" "}
                            <InlineMath math="50" />원짜리 동전 <InlineMath math="2" />개,{" "}
                            <InlineMath math="10" />원짜리 동전 <InlineMath math="3" />개의
                            일부 또는 전부를 사용하여 지불할 때, 다음을 구하여라.
                            단, <InlineMath math="0" />원을 지불하는 경우는 제외한다.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                (1) 지불하는 방법의 수
                            </p>

                            <p>
                                (2) 지불할 수 있는 금액의 수
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) 지불하는 방법의 수
                                </p>

                                <p className="mt-4 leading-8">
                                    각 동전을 몇 개 사용할지 정합니다.
                                </p>

                                <div className="mt-4 rounded-xl bg-black/40 p-5">

                                    <div className="space-y-3 leading-8 text-gray-300">

                                        <p>
                                            <InlineMath math="100" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1" />개
                                            <b className="text-white"> — 2가지</b>
                                        </p>

                                        <p>
                                            <InlineMath math="50" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1,\ 2" />개
                                            <b className="text-white"> — 3가지</b>
                                        </p>

                                        <p>
                                            <InlineMath math="10" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1,\ 2,\ 3" />개
                                            <b className="text-white"> — 4가지</b>
                                        </p>

                                    </div>

                                </div>

                                <p className="mt-4 leading-8">
                                    따라서 모든 선택 방법은
                                </p>

                                <BlockMath math="2\times3\times4=24" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    이 중 모든 동전을 <InlineMath math="0" />개 사용하여{" "}
                                    <InlineMath math="0" />원을 지불하는 경우를 제외하면
                                </p>

                                <BlockMath math="24-1=23" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="23" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) 지불할 수 있는 금액의 수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="100" />원짜리 동전{" "}
                                    <InlineMath math="1" />개는{" "}
                                    <InlineMath math="50" />원짜리 동전{" "}
                                    <InlineMath math="2" />개와 같은 금액입니다.
                                </p>

                                <BlockMath math="100=50\times2" />

                                <p className="leading-8">
                                    따라서 금액만 생각하면
                                    <InlineMath math="100" />원짜리 동전{" "}
                                    <InlineMath math="1" />개를{" "}
                                    <InlineMath math="50" />원짜리 동전{" "}
                                    <InlineMath math="2" />개로 바꾸어 생각할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    원래 가지고 있던 <InlineMath math="50" />원짜리{" "}
                                    <InlineMath math="2" />개와 합하면
                                </p>

                                <BlockMath math="2+2=4" />

                                <p className="leading-8">
                                    이므로, 금액만 생각하면
                                    <InlineMath math="50" />원짜리 동전{" "}
                                    <InlineMath math="4" />개와{" "}
                                    <InlineMath math="10" />원짜리 동전{" "}
                                    <InlineMath math="3" />개를 가진 것과 같습니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    또한
                                </p>

                                <BlockMath math="10\times3=30<50" />

                                <p className="leading-8">
                                    이므로 <InlineMath math="10" />원짜리 동전만으로{" "}
                                    <InlineMath math="50" />원을 만들 수 없습니다.
                                    따라서 서로 다른 사용 개수는 서로 다른 금액을 만듭니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    그러므로 지불할 수 있는 금액의 수는
                                </p>

                                <BlockMath math="(4+1)(3+1)-1" />

                                <BlockMath math="5\times4-1=19" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="19" />

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
                            <InlineMath math="500" />원짜리 동전 <InlineMath math="1" />개,{" "}
                            <InlineMath math="100" />원짜리 동전 <InlineMath math="7" />개,{" "}
                            <InlineMath math="10" />원짜리 동전 <InlineMath math="4" />개의
                            일부 또는 전부를 사용하여 지불하는 방법의 수를
                            <InlineMath math="a" />, 지불할 수 있는 금액의 수를{" "}
                            <InlineMath math="b" />라 할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하여라.{" "}
                            단, <InlineMath math="0" />원을 지불하는 경우는 제외한다.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 지불 방법 */}
                            <div>

                                <p className="font-semibold text-white">
                                    지불하는 방법의 수 <InlineMath math="a" />
                                </p>

                                <p className="mt-4 leading-8">
                                    각 동전을 몇 개 사용할지 정합니다.
                                </p>

                                <div className="mt-4 rounded-xl bg-black/40 p-5">

                                    <div className="space-y-3 leading-8 text-gray-300">

                                        <p>
                                            <InlineMath math="500" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1" />개
                                            <b className="text-white"> — 2가지</b>
                                        </p>

                                        <p>
                                            <InlineMath math="100" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1,\ 2,\ \cdots,\ 7" />개
                                            <b className="text-white"> — 8가지</b>
                                        </p>

                                        <p>
                                            <InlineMath math="10" />원짜리 동전:{" "}
                                            <InlineMath math="0,\ 1,\ 2,\ 3,\ 4" />개
                                            <b className="text-white"> — 5가지</b>
                                        </p>

                                    </div>

                                </div>

                                <p className="mt-4 leading-8">
                                    따라서 모든 선택 방법은
                                </p>

                                <BlockMath math="2\times8\times5=80" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="leading-8">
                                    이 중 모든 동전을 사용하지 않아{" "}
                                    <InlineMath math="0" />원을 지불하는 경우를 제외하면
                                </p>

                                <BlockMath math="a=80-1=79" />

                            </div>

                            <hr className="border-white/10" />

                            {/* 지불 금액 */}
                            <div>

                                <p className="font-semibold text-white">
                                    지불할 수 있는 금액의 수 <InlineMath math="b" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="500" />원짜리 동전 한 개는{" "}
                                    <InlineMath math="100" />원짜리 동전 다섯 개와
                                    같은 금액입니다.
                                </p>

                                <BlockMath math="500=100\times5" />

                                <p className="leading-8">
                                    따라서 금액만 생각하면
                                    <InlineMath math="500" />원짜리 동전{" "}
                                    <InlineMath math="1" />개를{" "}
                                    <InlineMath math="100" />원짜리 동전{" "}
                                    <InlineMath math="5" />개로 바꾸어 생각할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    원래 가지고 있던 <InlineMath math="100" />원짜리
                                    동전 <InlineMath math="7" />개와 합하면
                                </p>

                                <BlockMath math="7+5=12" />

                                <p className="leading-8">
                                    이므로, 금액만 생각하면
                                    <InlineMath math="100" />원짜리 동전{" "}
                                    <InlineMath math="12" />개와{" "}
                                    <InlineMath math="10" />원짜리 동전{" "}
                                    <InlineMath math="4" />개를 가진 것과 같습니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    또한
                                </p>

                                <BlockMath math="10\times4=40<100" />

                                <p className="leading-8">
                                    이므로 <InlineMath math="10" />원짜리 동전으로 만든 금액이
                                    서로 다른 <InlineMath math="100" />원 단위의 금액과
                                    겹치지 않습니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    따라서 지불할 수 있는 금액의 수는
                                </p>

                                <BlockMath math="(12+1)(4+1)-1" />

                                <BlockMath math="b=13\times5-1=64" />

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath math="a+b=79+64=143" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="143" />

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
                            <InlineMath math="1000" />원짜리 지폐{" "}
                            <InlineMath math="5" />장,{" "}
                            <InlineMath math="5000" />원짜리 지폐{" "}
                            <InlineMath math="3" />장,{" "}
                            <InlineMath math="10000" />원짜리 지폐{" "}
                            <InlineMath math="2" />장의 일부 또는 전부를 사용하여
                            거스름돈 없이 지불할 때, 지불할 수 있는 방법의 수를{" "}
                            <InlineMath math="a" />, 지불할 수 있는 금액의 수를{" "}
                            <InlineMath math="b" />라 하자.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            <InlineMath math="a+b" />의 값을 구하여라.
                            단, <InlineMath math="0" />원을 지불하는 경우는 제외한다.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 지불 방법 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    1. 지불하는 방법의 수
                                </p>

                                <p className="mt-4 leading-8">
                                    각 종류의 지폐를 몇 장 사용할 것인지 정합니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="1000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0,\ 1,\ 2,\ 3,\ 4,\ 5" />장
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="5000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0,\ 1,\ 2,\ 3" />장
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="10000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0,\ 1,\ 2" />장
                                    </p>

                                </div>

                                <p className="mt-5 leading-8">
                                    각각의 선택은 동시에 이루어지므로 곱의 법칙에 의하여
                                </p>

                                <BlockMath math="(5+1)(3+1)(2+1)=72" />

                                <p className="leading-8">
                                    이 중에서 모든 지폐를{" "}
                                    <InlineMath math="0" />장 사용하는 경우는{" "}
                                    <InlineMath math="0" />원을 지불하는 경우이므로 제외합니다.
                                </p>

                                <BlockMath math="a=72-1=71" />

                            </div>

                            <hr className="border-white/10" />

                            {/* 지불 금액 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    2. 지불할 수 있는 금액의 수
                                </p>

                                <p className="mt-4 leading-8">
                                    지불할 수 있는 금액의 수를 구할 때는
                                    고액권을 가장 작은 단위의 지폐로 바꾸어 생각합니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="1000" />원짜리 지폐{" "}
                                        <InlineMath math="5" />장은 그대로{" "}
                                        <InlineMath math="5" />장입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="5000" />원짜리 지폐{" "}
                                        <InlineMath math="3" />장은{" "}
                                        <InlineMath math="1000" />원짜리{" "}
                                        <InlineMath math="15" />장으로 바꿀 수 있습니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="10000" />원짜리 지폐{" "}
                                        <InlineMath math="2" />장은{" "}
                                        <InlineMath math="1000" />원짜리{" "}
                                        <InlineMath math="20" />장으로 바꿀 수 있습니다.
                                    </p>

                                </div>

                                <p className="mt-5 leading-8">
                                    따라서 모든 지폐를{" "}
                                    <InlineMath math="1000" />원짜리로 바꾸면
                                </p>

                                <BlockMath math="5+15+20=40" />

                                <p className="leading-8">
                                    장입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1000" />원짜리 지폐를{" "}
                                    <InlineMath math="1" />장부터{" "}
                                    <InlineMath math="40" />장까지 사용할 수 있으므로,
                                    지불할 수 있는 금액의 수는
                                </p>

                                <BlockMath math="b=40" />

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath math="a+b=71+40=111" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="111" />

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
                            <InlineMath math="1000" />원짜리 지폐{" "}
                            <InlineMath math="4" />장,{" "}
                            <InlineMath math="5000" />원짜리 지폐{" "}
                            <InlineMath math="x" />장,{" "}
                            <InlineMath math="10000" />원짜리 지폐{" "}
                            <InlineMath math="3" />장의 전부 또는 일부를 사용하여
                            지불할 수 있는 방법의 수가{" "}
                            <InlineMath math="79" />일 때, 지불할 수 있는 금액의 수를
                            구하여라.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            단, <InlineMath math="0" />원을 지불하는 경우는 제외한다.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* x 구하기 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    1. <InlineMath math="5000" />원짜리 지폐의 개수 구하기
                                </p>

                                <p className="mt-4 leading-8">
                                    각 종류의 지폐를 사용할 수 있는 장수는 다음과 같습니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="1000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0" />장부터{" "}
                                        <InlineMath math="4" />장까지{" "}
                                        <InlineMath math="5" />가지
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="5000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0" />장부터{" "}
                                        <InlineMath math="x" />장까지{" "}
                                        <InlineMath math="x+1" />가지
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="10000" />원짜리 지폐 :{" "}
                                        <InlineMath math="0" />장부터{" "}
                                        <InlineMath math="3" />장까지{" "}
                                        <InlineMath math="4" />가지
                                    </p>

                                </div>

                                <p className="mt-5 leading-8">
                                    곱의 법칙을 사용하고, 모든 지폐를{" "}
                                    <InlineMath math="0" />장 사용하는 경우를 제외하면
                                </p>

                                <BlockMath math="5(x+1)\times4-1=79" />

                                <BlockMath
                                    math="\begin{aligned}
                    20(x+1)-1&=79\\
                    20(x+1)&=80\\
                    x+1&=4\\
                    x&=3
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    따라서 <InlineMath math="5000" />원짜리 지폐는{" "}
                                    <InlineMath math="3" />장입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* 지불 금액 */}
                            <div>

                                <p className="text-lg font-semibold text-white">
                                    2. 지불할 수 있는 금액의 수
                                </p>

                                <p className="mt-4 leading-8">
                                    지불할 수 있는 금액의 수를 구하기 위해
                                    고액권을 모두 <InlineMath math="1000" />원짜리 지폐로
                                    바꾸어 생각합니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="1000" />원짜리 지폐{" "}
                                        <InlineMath math="4" />장
                                    </p>

                                    <BlockMath math="4" />

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="5000" />원짜리 지폐{" "}
                                        <InlineMath math="3" />장
                                    </p>

                                    <BlockMath math="5\times3=15" />

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="10000" />원짜리 지폐{" "}
                                        <InlineMath math="3" />장
                                    </p>

                                    <BlockMath math="10\times3=30" />

                                </div>

                                <p className="mt-5 leading-8">
                                    따라서 모두 <InlineMath math="1000" />원짜리 지폐로
                                    바꾸면
                                </p>

                                <BlockMath math="4+15+30=49" />

                                <p className="leading-8">
                                    장입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1000" />원짜리 지폐를{" "}
                                    <InlineMath math="1" />장부터{" "}
                                    <InlineMath math="49" />장까지 사용하는 것으로
                                    생각할 수 있으므로, 지불할 수 있는 금액의 수는
                                </p>

                                <BlockMath math="49" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="49" />

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
                            각 화폐의 개수가{" "}
                            <InlineMath math="a,\ b,\ c" />개일 때 지불 방법의 수는
                        </p>

                        <BlockMath
                            math="(a+1)(b+1)(c+1)-1"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            소액권의 합으로 고액권을 만들 수 없으면
                        </p>

                        <BlockMath
                            math="\text{지불 금액의 수}
                =
                \text{지불 방법의 수}"
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            소액권의 합으로 고액권을 만들 수 있으면
                            고액권을 소액권으로 바꾸어 계산합니다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{지불 방법의 수}
                \ge
                \text{지불 금액의 수}"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.6 합의 법칙
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    경우의 수를 구할 때는 경우를 더해야 하는지,
                    곱해야 하는지를 먼저 판단해야 합니다.
                    먼저 경우를 더하는 <b className="text-white">합의 법칙</b>을 알아보겠습니다.
                </p>

                {/* 언제 더하는가 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        언제 더하는가
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 개 이상의 사건이
                        <b className="text-white"> 동시에 일어나지 않을 때</b>
                        경우의 수를 더합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            사과를 고른다 또는 배를 고른다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            버스를 탄다 또는 지하철을 탄다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            주사위를 던져 홀수의 눈이 나온다 또는 짝수의 눈이 나온다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        하나의 경우에서는 두 사건이 함께 일어날 수 없으므로
                        경우의 수를 더합니다.
                    </p>

                </div>

                {/* 동시에의 의미 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        '동시에'의 의미
                    </h3>

                    <p className="leading-8 text-gray-300">
                        여기에서 <b className="text-white">동시에</b>는
                        같은 시각이라는 뜻이 아닙니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            주사위를 두 번 던지는 경우
                        </p>

                        <ul className="mt-3 list-disc space-y-2 pl-6 text-gray-300">
                            <li>주사위 두 개를 한 번에 던진다.</li>
                            <li>하나를 던지고 1시간 뒤에 다른 하나를 던진다.</li>
                            <li>하나를 던진 뒤 눈을 확인하고 다시 던진다.</li>
                        </ul>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        모두 같은 시행이며,<b className="text-white"> 동시에란 같은 경우에서 함께 일어날 수 있는지를 의미
                        </b>합니다.
                    </p>

                </div>

                {/* 합의 법칙 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        합의 법칙
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 사건이 A와 B가 동시에 일어나지 않으면
                        경우의 수는 각각의 경우의 수를 더하여 구합니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{전체 경우의 수}=A의\ 경우의\ 수+B의\ 경우의\ 수"
                        />

                    </div>

                </div>

                {/* 겹치는 경우 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        겹치는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 사건이 동시에 일어날 수 있다면
                        겹치는 경우를 두 번 세게 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            짝수의 눈이 나온다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            3의 배수의 눈이 나온다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            6은 두 사건에 모두 포함됩니다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 겹치는 경우는 한 번 빼 주어
                        중복하여 세지 않도록 합니다.
                    </p>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            합의 법칙은
                            <b className="text-white"> 동시에 일어나지 않는 경우</b>를
                            더하는 것입니다.
                        </p>

                        <p>
                            겹치는 경우가 있다면
                            한 번 빼 주어야 합니다.
                        </p>

                    </div>

                </div>

                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="1" />부터 <InlineMath math="100" />까지의
                            자연수가 하나씩 적힌 <InlineMath math="100" />장의 카드 중에서
                            한 장을 뽑을 때, 다음 경우의 수를 구하여라.
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">

                            <p>
                                (1) <InlineMath math="11" />의 배수 또는 <InlineMath math="13" />의 배수가 적힌 카드가 나오는 경우
                            </p>

                            <p>
                                (2) <InlineMath math="2" />의 배수 또는 <InlineMath math="5" />의 배수가 적힌 카드가 나오는 경우
                            </p>

                            <p>
                                (3) <InlineMath math="100" />과 서로 소인 수가 적힌 카드가 나오는 경우
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="11" />의 배수 또는 <InlineMath math="13" />의 배수
                                </p>

                                <p className="leading-8">
                                    100 이하의 11의 배수는
                                </p>

                                <BlockMath math="11,\ 22,\ 33,\ \cdots,\ 99" />

                                <p className="leading-8">
                                    모두 <b className="text-white">9가지</b>입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    100 이하의 13의 배수는
                                </p>

                                <BlockMath math="13,\ 26,\ 39,\ \cdots,\ 91" />

                                <p className="leading-8">
                                    모두 <b className="text-white">7가지</b>입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="11" />과 <InlineMath math="13" />의
                                    공배수는 <InlineMath math="143" />의 배수인데, <InlineMath math="100" /> 이하에는 없습니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    따라서 두 경우는 겹치지 않으므로
                                </p>

                                <BlockMath math="9+7=16" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="16" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="2" />의 배수 또는 <InlineMath math="5" />의 배수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="100" /> 이하의 <InlineMath math="2" />의 배수는
                                </p>

                                <BlockMath math="\frac{100}{2}=50" />

                                <p className="leading-8">
                                    이므로 <b className="text-white">50가지</b>입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="100" /> 이하의 <InlineMath math="5" />의 배수는
                                </p>

                                <BlockMath math="\frac{100}{5}=20" />

                                <p className="leading-8">
                                    이므로 <b className="text-white">20가지</b>입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    이때 <InlineMath math="2" />의 배수이면서 <InlineMath math="5" />의 배수인 수는 <InlineMath math="10" />의 배수입니다.
                                </p>

                                <BlockMath math="\frac{100}{10}=10" />

                                <p className="leading-8">
                                    <InlineMath math="10" />의 배수는 앞에서 두 번 세었으므로
                                    한 번 빼 줍니다.
                                </p>

                                <BlockMath math="50+20-10=60" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="60" />

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="100" />과 서로 소인 수
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="100" />을 소인수분해하면
                                </p>

                                <BlockMath math="100=2^2\times5^2" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="100" />과 서로 소가 아닌 수는 <InlineMath math="2" />의 배수 또는 <InlineMath math="5" />의 배수입니다.
                                </p>

                                <p className="leading-8">
                                    (2)에서 이러한 수의 개수는 <InlineMath math="60" />임을 구했습니다.
                                </p>

                                <p className="leading-8">
                                    전체 <InlineMath math="100" />개의 수에서 이를 빼면
                                </p>

                                <BlockMath math="100-60=40" />

                                <div className="mt-4 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math="40" />

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
                            방정식{" "}
                            <InlineMath math="x+2y+3z=11" />
                            을 만족시키는 자연수{" "}
                            <InlineMath math="x,\ y,\ z" />
                            의 순서쌍{" "}
                            <InlineMath math="(x,y,z)" />
                            의 개수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                자연수이므로
                            </p>

                            <BlockMath math="x\ge1,\ y\ge1,\ z\ge1" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 <InlineMath math="z" />의 값을 정하여 경우를 나눕니다.
                            </p>

                            <BlockMath math="3z\le11-1-2=8" />

                            <BlockMath math="z=1,\ 2" />

                            <hr className="border-white/10" />

                            {/* z=1 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="z=1" />
                                </p>

                                <BlockMath math="x+2y=8" />

                                <p className="leading-8">
                                    <InlineMath math="y" />의 값을 조사하면
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    y=1&\Rightarrow x=6\\
                    y=2&\Rightarrow x=4\\
                    y=3&\Rightarrow x=2
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    모두 <InlineMath math="3" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* z=2 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="z=2" />
                                </p>

                                <BlockMath math="x+2y=5" />

                                <p className="leading-8">
                                    <InlineMath math="y" />의 값을 조사하면
                                </p>

                                <BlockMath
                                    math="\begin{aligned}
                    y=1&\Rightarrow x=3\\
                    y=2&\Rightarrow x=1
                    \end{aligned}"
                                />

                                <p className="leading-8">
                                    모두 <InlineMath math="2" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                합의 법칙에 의하여
                            </p>

                            <BlockMath math="3+2=5" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="5" />

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
                            <InlineMath math="500" />원,{" "}
                            <InlineMath math="1000" />원,{" "}
                            <InlineMath math="2000" />원짜리 세 종류의 우표를 합하여{" "}
                            <InlineMath math="10000" />원어치 사는 방법의 수를 구하여라.
                            단, 세 종류의 우표가 적어도 한 장씩은 포함되어야 한다.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="500" />원,{" "}
                                <InlineMath math="1000" />원,{" "}
                                <InlineMath math="2000" />원짜리 우표의 개수를 각각{" "}
                                <InlineMath math="x,\ y,\ z" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                세 종류의 우표를 적어도 한 장씩 사야 하므로
                            </p>

                            <BlockMath math="x\ge1,\qquad y\ge1,\qquad z\ge1" />

                            <p className="leading-8">
                                이고, 우표 가격의 합에서
                            </p>

                            <BlockMath math="500x+1000y+2000z=10000" />

                            <p className="leading-8">
                                입니다. 양변을 <InlineMath math="500" />으로 나누면
                            </p>

                            <BlockMath math="x+2y+4z=20" />

                            <p className="leading-8">
                                을 얻습니다.
                            </p>

                            <p className="leading-8">
                                계수가 가장 큰 <InlineMath math="z" />의 값에 따라
                                경우를 나누어 조사합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="x,\ y" />가 자연수이므로{" "}
                                <InlineMath math="x+2y\ge3" />입니다. 따라서
                            </p>

                            <BlockMath math="20-4z\ge3" />

                            <p className="leading-8">
                                이므로 가능한 <InlineMath math="z" />의 값은
                            </p>

                            <BlockMath math="z=1,\ 2,\ 3,\ 4" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <hr className="border-white/10" />

                            {/* z=1 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="z=1" />인 경우
                                </p>

                                <BlockMath math="x+2y=16" />

                                <p className="leading-8">
                                    <InlineMath math="y" />에{" "}
                                    <InlineMath math="1,\ 2,\ 3,\ \cdots,\ 7" />을
                                    대입하면 <InlineMath math="x" />가 자연수가 됩니다.
                                </p>

                                <BlockMath
                                    math="(x,y)=(14,1),\ (12,2),\ \cdots,\ (2,7)"
                                />

                                <p className="leading-8">
                                    따라서 모두 <InlineMath math="7" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* z=2 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="z=2" />인 경우
                                </p>

                                <BlockMath math="x+2y=12" />

                                <p className="leading-8">
                                    <InlineMath math="y=1,\ 2,\ 3,\ 4,\ 5" />이므로
                                    모두 <InlineMath math="5" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* z=3 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="z=3" />인 경우
                                </p>

                                <BlockMath math="x+2y=8" />

                                <p className="leading-8">
                                    <InlineMath math="y=1,\ 2,\ 3" />이므로
                                    모두 <InlineMath math="3" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* z=4 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (4) <InlineMath math="z=4" />인 경우
                                </p>

                                <BlockMath math="x+2y=4" />

                                <p className="leading-8">
                                    자연수해는
                                </p>

                                <BlockMath math="(x,y)=(2,1)" />

                                <p className="leading-8">
                                    뿐이므로 <InlineMath math="1" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                네 경우는 동시에 일어날 수 없으므로 합의 법칙에 의하여
                            </p>

                            <BlockMath math="7+5+3+1=16" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="16" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            두 사건이 동시에 일어나지 않으면 경우의 수를 더한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            동시에란 같은 시각이 아니라 같은 경우에서 함께 일어날 수 있는지를 의미한다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            겹치는 경우가 있으면 한 번 빼 준다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.7 곱의 법칙
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    경우의 수를 구할 때
                    <b className="text-white"> 동시에 일어나는 경우</b>에는
                    각각의 경우의 수를 곱하여 구합니다.
                </p>

                {/* 동시에 일어나는 경우 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        동시에 일어나는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        여기서 <b className="text-white">동시에</b>는
                        같은 시각이라는 뜻이 아닙니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        필요한 과정을 모두 마친 뒤 그 결과가 함께 이루어져 있으면
                        동시에 일어난 것으로 생각합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            티셔츠를 고른다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ↓
                        </p>

                        <p className="leading-8 text-gray-300">
                            바지를 고른다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            ↓
                        </p>

                        <p className="leading-8 text-gray-300">
                            옷을 모두 입는다.
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        실제로 티셔츠와 바지를 같은 순간에 입는 것은 아니지만,
                        옷을 모두 입고 나면{" "}
                        <b className="text-white">
                            티셔츠와 바지를 동시에 입은 상태
                        </b>
                        가 됩니다.
                    </p>

                </div>

                {/* 티셔츠 예시 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        티셔츠와 바지의 선택
                    </h3>

                    <p className="leading-8 text-gray-300">
                        티셔츠가 <InlineMath math="3" />벌,
                        바지가 <InlineMath math="4" />벌 있다고 하겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            티셔츠를 고르는 경우
                        </p>

                        <BlockMath math="3" />

                        <p className="mt-4 font-semibold text-white">
                            바지를 고르는 경우
                        </p>

                        <BlockMath math="4" />

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 옷을 입는 방법은
                        </p>

                        <BlockMath math="3\times4=12" />

                        <p className="leading-8 text-gray-300">
                            가지입니다.
                        </p>

                    </div>

                </div>

                {/* 순서는 중요하지 않다 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        선택하는 순서는 중요하지 않다
                    </h3>

                    <p className="leading-8 text-gray-300">
                        곱의 법칙에서는 필요한 순서대로 하나씩 선택하면 됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            티셔츠 → 바지
                        </p>

                        <p className="leading-8 text-gray-300">
                            또는
                        </p>

                        <p className="leading-8 text-gray-300">
                            바지 → 티셔츠
                        </p>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        어느 순서로 선택하여도 완성된 옷차림은 같습니다.
                    </p>

                    <p className="leading-8 text-gray-300">
                        따라서 선택하는 순서를 서로 다른 경우로 세지 않고,
                        계산하기 편한 순서대로 하나씩 선택하면 됩니다.
                    </p>

                </div>

                {/* 곱의 법칙 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        곱의 법칙
                    </h3>

                    <p className="leading-8 text-gray-300">
                        첫 번째 선택의 경우의 수가{" "}
                        <InlineMath math="m" />가지이고,
                        두 번째 선택의 경우의 수가{" "}
                        <InlineMath math="n" />가지이면
                        전체 경우의 수는
                    </p>

                    <BlockMath math="m\times n" />

                    <p className="leading-8 text-gray-300">
                        가지입니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            첫 번째 선택마다 두 번째 선택이{" "}
                            <InlineMath math="n" />가지씩 있으므로
                        </p>

                        <BlockMath math="m\times n" />

                        <p className="leading-8 text-gray-300">
                            가지가 됩니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            곱의 법칙의 <b className="text-white">동시에</b>는
                            같은 시각이라는 뜻이 아닙니다.
                        </p>

                        <p>
                            필요한 과정을 모두 끝냈을 때
                            결과가 함께 이루어져 있으면 동시에 일어난 것으로 생각합니다.
                        </p>

                        <p>
                            계산은 하나씩 순서대로 진행하지만,
                            선택하는 순서를 서로 다른 경우로 세지는 않습니다.
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
                            다음 다항식의 전개식에서 항의 개수를 구하여라.
                        </p>

                        <div className="mt-4 space-y-3">

                            <BlockMath
                                math="\begin{aligned}
  (1)\;&(a+b+c)(x+y+z)\\[6pt]
  (2)\;&(a+b)(c+d)-(x+y+z)(p-q)
  \end{aligned}"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1)
                                </p>

                                <p className="mt-4 leading-8">
                                    첫 번째 괄호에서는{" "}
                                    <InlineMath math="3" />개의 항 중 하나를 선택하고,
                                    두 번째 괄호에서도{" "}
                                    <InlineMath math="3" />개의 항 중 하나를 선택합니다.
                                </p>

                                <BlockMath math="3\times3=9" />

                                <p className="leading-8">
                                    따라서 전개식의 항의 개수는{" "}
                                    <InlineMath math="9" />개입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2)
                                </p>

                                <p className="mt-4 leading-8">
                                    첫 번째 곱은
                                </p>

                                <BlockMath math="2\times2=4" />

                                <p className="leading-8">
                                    개의 항이 생깁니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    두 번째 곱은
                                </p>

                                <BlockMath math="3\times2=6" />

                                <p className="leading-8">
                                    개의 항이 생깁니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    두 전개식에는 같은 문자가 포함되어 있지 않으므로
                                    서로 동류항이 생기지 않습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 항의 개수는
                                </p>

                                <BlockMath math="4+6=10" />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math="\begin{aligned}
                        (1)&\;9\\
                        (2)&\;10
                        \end{aligned}"
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
                            서로 다른 주사위 <InlineMath math="3" />개를 동시에 던졌을 때,
                            나오는 세 눈의 수의 곱이 홀수인 경우의 수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 눈의 수의 곱이 홀수가 되려면
                                세 주사위에서 나온 눈이 모두 홀수이어야 합니다.
                            </p>

                            <BlockMath math="1,\ 3,\ 5" />

                            <p className="leading-8">
                                즉, 한 주사위에서 가능한 경우는{" "}
                                <InlineMath math="3" />가지입니다.
                            </p>

                            <p className="leading-8">
                                서로 다른 주사위이므로
                                첫 번째, 두 번째, 세 번째 주사위는 각각
                                독립적으로 선택할 수 있습니다.
                            </p>

                            <BlockMath math="3\times3\times3" />

                            <BlockMath math="=27" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="27" />

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
                            서로 다른 주사위 <InlineMath math="3" />개를 동시에 던졌을 때,
                            나오는 세 눈의 수의 곱이 짝수인 경우의 수를 구하여라.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 전체 경우의 수를 구합니다.
                            </p>

                            <BlockMath math="6\times6\times6=216" />

                            <p className="leading-8">
                                세 눈의 수의 곱이 짝수인 경우는
                                곱이 홀수인 경우의 여사건입니다.
                            </p>

                            <p className="leading-8">
                                곱이 홀수이려면 세 주사위의 눈이 모두 홀수이어야 하므로
                            </p>

                            <BlockMath math="3\times3\times3=27" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                따라서 곱이 짝수인 경우의 수는
                            </p>

                            <BlockMath math="216-27=189" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="189" />

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
                            동시에 일어나는 경우에는 각각의 경우의 수를 곱한다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath math="m\times n" />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            곱의 법칙에서 동시에는 같은 시각이라는 뜻이 아니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            필요한 순서대로 하나씩 선택하면 되며,
                            선택하는 순서를 서로 다른 경우로 세지 않는다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.8 합의 법칙과 곱의 법칙
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    경우의 수 문제가 복잡해지면 합의 법칙과 곱의 법칙을 함께
                    사용하는 경우가 많습니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    이때 바로 계산하려 하기보다 전체 경우를
                    <b className="text-white"> 빠짐없이 겹치지 않게 분류</b>하는 것이
                    중요합니다.
                </p>

                {/* 합의 법칙과 곱의 법칙의 역할 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        합의 법칙과 곱의 법칙의 역할
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        {/* 합의 법칙 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                합의 법칙
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                서로 동시에 일어날 수 없는 여러 경우로
                                <b className="text-white"> 분류</b>한 뒤,
                                각 경우의 수를 더합니다.
                            </p>

                            <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    주로 하나의 경우가 완성된 뒤,
                                    그 결과를 서로 다른 종류로 나눌 때 사용합니다.
                                </p>

                            </div>

                            <BlockMath math="m+n" />

                        </div>

                        {/* 곱의 법칙 */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                곱의 법칙
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                하나의 결과를 완성하기 위해 여러 선택이
                                <b className="text-white"> 계속 진행</b>되면,
                                각 선택의 경우의 수를 곱합니다.
                            </p>

                            <div className="mt-4 rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    주로 아직 결과가 완성되지 않았고,
                                    필요한 선택이 계속 이어질 때 사용합니다.
                                </p>

                            </div>

                            <BlockMath math="m\times n" />

                        </div>

                    </div>

                </div>

                {/* 분류가 중요한 이유 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        어려운 경우의 수 문제를 푸는 핵심
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            경우의 수 문제가 복잡할수록 먼저 전체 경우를
                            <b className="text-white"> 빠짐없이 겹치지 않게 분류</b>
                            해야 합니다.
                        </p>

                        <p>
                            분류한 하나의 경우 안에서 여러 선택이 계속되면
                            <b className="text-white"> 곱의 법칙</b>을 사용합니다.
                        </p>

                        <p>
                            서로 동시에 일어날 수 없는 여러 분류의 경우를 합할 때는
                            <b className="text-white"> 합의 법칙</b>을 사용합니다.
                        </p>

                        <BlockMath
                            math="\text{전체 경우의 수}
                =
                \text{각 분류의 경우의 수를 구한 뒤 모두 더한 것}"
                        />

                    </div>

                </div>



                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예시 문제
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.5fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림에서 각 선을 따라 왼쪽 끝의 점{" "}
                                    <InlineMath math="A" />에서 오른쪽 끝의 점{" "}
                                    <InlineMath math="D" />까지 가는 경로의 수를 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        각 선을 따라 왼쪽에서 오른쪽으로만 이동합니다.
                                    </p>

                                </div>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.8_route_problem.png"
                                    alt="점 A에서 점 D까지 가는 경로"
                                    className="w-full max-w-3xl object-contain"
                                />

                            </div>

                        </div>

                    </div>

                    {/* 기본 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="A" />에서{" "}
                                <InlineMath math="D" />까지 가는 경로를
                                지나가는 점에 따라 분류합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <BlockMath
                                    math="\begin{aligned}
                        &(1)\quad A\rightarrow B\rightarrow C\rightarrow D\\[2mm]
                        &(2)\quad A\rightarrow B\rightarrow D\\[2mm]
                        &(3)\quad A\rightarrow C\rightarrow D
                        \end{aligned}"
                                />

                            </div>

                            <hr className="border-white/10" />

                            {/* 첫 번째 분류 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="A\rightarrow B\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />로 가는 길은{" "}
                                    <InlineMath math="3" />가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="B" />에서{" "}
                                    <InlineMath math="C" />로 가는 길도{" "}
                                    <InlineMath math="3" />가지입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="C" />에서{" "}
                                    <InlineMath math="D" />로 가는 길도{" "}
                                    <InlineMath math="3" />가지입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    세 구간을 모두 지나야 하므로 곱의 법칙에 의하여
                                </p>

                                <BlockMath math="3\times3\times3=27" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* 두 번째 분류 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="A\rightarrow B\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />로 가는 길은{" "}
                                    <InlineMath math="3" />가지이고,{" "}
                                    <InlineMath math="B" />에서{" "}
                                    <InlineMath math="D" />로 바로 가는 길은{" "}
                                    <InlineMath math="1" />가지입니다.
                                </p>

                                <BlockMath math="3\times1=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* 세 번째 분류 */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="A\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="C" />로 바로 가는 길은{" "}
                                    <InlineMath math="1" />가지이고,{" "}
                                    <InlineMath math="C" />에서{" "}
                                    <InlineMath math="D" />로 가는 길은{" "}
                                    <InlineMath math="3" />가지입니다.
                                </p>

                                <BlockMath math="1\times3=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                세 가지 분류는 서로 동시에 일어날 수 없으므로
                                합의 법칙에 의하여
                            </p>

                            <BlockMath math="27+3+3=33" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="33" />

                            </div>

                            {/* 경로 문제의 관점 */}
                            <div className="mt-8 rounded-xl bg-white/10 p-6">

                                <h3 className="mb-4 text-2xl font-bold">
                                    경로 문제에서의 합과 곱
                                </h3>

                                <p className="leading-8 text-gray-300">
                                    출발점에서 도착점까지 가는 경로 문제에서는 먼저 완성된 경로의
                                    형태에 따라 경우를 분류할 수 있습니다.
                                </p>

                                <div className="mt-5 rounded-xl bg-black/40 p-5">

                                    <BlockMath
                                        math="\begin{aligned}
                &A\rightarrow B\rightarrow C\rightarrow D\\
                &A\rightarrow B\rightarrow D\\
                &A\rightarrow C\rightarrow D
                \end{aligned}"
                                    />

                                </div>

                                <p className="mt-5 leading-8 text-gray-300">
                                    하나의 경로 안에서는 여러 구간을 모두 지나야 하므로
                                    <b className="text-white"> 곱의 법칙</b>을 사용합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    서로 다른 세 경로는 동시에 일어날 수 없으므로 마지막에는
                                    <b className="text-white"> 합의 법칙</b>을 사용합니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="leading-8 text-gray-300">
                                        경로 안의 선택은 <b className="text-white">곱하고</b>,
                                        서로 다른 완성된 경로는 <b className="text-white">더합니다.</b>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                    {/* 다른 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-blue-300">
                            다른 풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                각 점까지 도달하는 경로의 수를 왼쪽에서 오른쪽으로
                                차례대로 적어 계산할 수도 있습니다.
                            </p>

                            <p className="leading-8">
                                출발점 <InlineMath math="A" />까지 오는 경로의 수를{" "}
                                <InlineMath math="1" />로 놓습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.8_route_solution.png"
                                    alt="각 점까지 오는 경로의 수를 적은 경로 그림"
                                    className="mx-auto w-full max-w-4xl object-contain"
                                />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    점 <InlineMath math="B" />까지
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="B" />로 가는 길이{" "}
                                    <InlineMath math="3" />개이므로
                                </p>

                                <BlockMath math="1+1+1=3" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    점 <InlineMath math="C" />까지
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="A" />에서{" "}
                                    <InlineMath math="C" />로 바로 오는 경로가{" "}
                                    <InlineMath math="1" />가지입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    또 <InlineMath math="B" />까지 오는{" "}
                                    <InlineMath math="3" />가지 경로에서,{" "}
                                    <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />를 잇는 세 길 중 하나를
                                    선택할 수 있습니다.
                                </p>

                                <BlockMath math="1+3+3+3=10" />

                            </div>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="font-semibold text-white">
                                    점 <InlineMath math="D" />까지
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="C" />까지 오는 경로는{" "}
                                    <InlineMath math="10" />가지이고,{" "}
                                    <InlineMath math="C" />에서{" "}
                                    <InlineMath math="D" />로 가는 길은{" "}
                                    <InlineMath math="3" />개입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    또 <InlineMath math="B" />에서{" "}
                                    <InlineMath math="D" />로 바로 오는 경로가{" "}
                                    <InlineMath math="3" />가지 있습니다.
                                </p>

                                <BlockMath math="10+10+10+3=33" />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    각 점에는 그 점으로
                                    <b className="text-white">
                                        들어오는 모든 경로의 수를 더하여
                                    </b>
                                    적습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    마지막 점에 적힌 수가 출발점에서 도착점까지 가는
                                    전체 경로의 수입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="33" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 두 풀이의 비교 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 풀이의 비교
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                경로를 분류하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                완성된 경로의 형태를 먼저 분류하고,
                                각 분류 안에서는 곱의 법칙을 사용한 뒤
                                마지막에 합의 법칙으로 더합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                합의 법칙과 곱의 법칙이 어떻게 함께 사용되는지
                                이해하기에 좋은 방법입니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                각 점의 경로 수를 적는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                각 점으로 들어오는 경로의 수를 차례대로 더합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                경로가 많아 직접 분류하기 어려울 때 빠르고 편리하게
                                계산할 수 있습니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            경우의 수 문제가 어려워질수록 계산보다 먼저
                            <b className="text-white"> 어떤 기준으로 분류할지</b>를
                            생각해야 합니다.
                        </p>

                        <p>
                            하나의 분류 안에서 필요한 선택이 계속되면
                            곱의 법칙을 사용합니다.
                        </p>

                        <p>
                            서로 동시에 일어날 수 없는 여러 분류를 합할 때는
                            합의 법칙을 사용합니다.
                        </p>

                        <p>
                            경로가 적으면 완성된 경로를 직접 분류할 수 있고,
                            경로가 많으면 각 점까지 오는 경로의 수를 차례대로 적는 것이
                            편리합니다.
                        </p>

                    </div>

                </div>

                {/* 예제 2 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1fr_1.4fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 네 도시
                                    <InlineMath math="A,\ B,\ C,\ D" />를 연결하는 도로가 있다.
                                    모든 도로는 양방향으로 통행할 수 있다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    한 번 지나간 도시는 다시 지나지 않을 때,
                                    도시 <InlineMath math="A" />에서 출발하여
                                    도시 <InlineMath math="D" />까지 가는 경로의 수를
                                    구하여라.
                                </p>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.8_example2_route.png"
                                    alt="네 도시 A, B, C, D를 연결하는 도로"
                                    className="w-full max-w-3xl object-contain"
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
                                도시 <InlineMath math="A" />에서
                                도시 <InlineMath math="D" />까지 가는 경로를
                                지나가는 도시에 따라 빠짐없이 분류합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <BlockMath
                                    math="\begin{aligned}
                    &(1)\quad A\rightarrow B\rightarrow D\\[2mm]
                    &(2)\quad A\rightarrow C\rightarrow D\\[2mm]
                    &(3)\quad A\rightarrow B\rightarrow C\rightarrow D\\[2mm]
                    &(4)\quad A\rightarrow C\rightarrow B\rightarrow D
                    \end{aligned}"
                                />

                            </div>

                            <p className="leading-8">
                                모든 도로가 양방향이므로
                                <InlineMath math="B\rightarrow C" />뿐만 아니라{" "}
                                <InlineMath math="C\rightarrow B" />로 이동하는 경로도
                                포함해야 합니다.
                            </p>

                            <hr className="border-white/10" />

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="A\rightarrow B\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="B" />를
                                    연결하는 도로는 <InlineMath math="2" />개이고,{" "}
                                    <InlineMath math="B" />와 <InlineMath math="D" />를
                                    연결하는 도로도 <InlineMath math="2" />개입니다.
                                </p>

                                <p className="leading-8">
                                    두 구간을 모두 선택해야 하므로 곱의 법칙에 의하여
                                </p>

                                <BlockMath math="2\times2=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="A\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="C" />를
                                    연결하는 도로는 <InlineMath math="3" />개이고,{" "}
                                    <InlineMath math="C" />와 <InlineMath math="D" />를
                                    연결하는 도로도 <InlineMath math="3" />개입니다.
                                </p>

                                <BlockMath math="3\times3=9" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="A\rightarrow B\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    각 구간의 도로 수는 차례대로{" "}
                                    <InlineMath math="2,\ 2,\ 3" />입니다.
                                </p>

                                <BlockMath math="2\times2\times3=12" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (4) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (4) <InlineMath math="A\rightarrow C\rightarrow B\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    각 구간의 도로 수는 차례대로{" "}
                                    <InlineMath math="3,\ 2,\ 2" />입니다.
                                </p>

                                <BlockMath math="3\times2\times2=12" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                네 종류의 경로는 서로 동시에 일어날 수 없으므로
                                합의 법칙에 의하여
                            </p>

                            <BlockMath math="4+9+12+12=37" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="37" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_1fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 네 지점{" "}
                                    <InlineMath math="A,\ B,\ C,\ D" />를 연결하는
                                    도로망이 있다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    지점 <InlineMath math="B" />와 지점{" "}
                                    <InlineMath math="C" /> 사이에 도로를 추가하여,
                                    지점 <InlineMath math="A" />에서 지점{" "}
                                    <InlineMath math="D" />로 가는 방법의 수가{" "}
                                    <InlineMath math="60" />이 되도록 할 때,
                                    추가해야 할 도로의 개수를 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        단, 모든 도로는 양방향으로 통행할 수 있고,
                                        한 번 지난 지점은 다시 지나지 않으며
                                        도로끼리는 서로 만나지 않는다.
                                    </p>

                                </div>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.8_example2.png"
                                    alt="네 지점 A, B, C, D를 연결하는 도로망"
                                    className="w-full max-w-2xl object-contain"
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
                                지점 <InlineMath math="B" />와 지점{" "}
                                <InlineMath math="C" /> 사이에 추가하는 도로의 개수를{" "}
                                <InlineMath math="x" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                지점 <InlineMath math="A" />에서 지점{" "}
                                <InlineMath math="D" />로 가는 경로를
                                지나가는 지점에 따라 분류합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <BlockMath
                                    math="\begin{aligned}
                    &(1)\quad A\rightarrow B\rightarrow D\\[2mm]
                    &(2)\quad A\rightarrow C\rightarrow D\\[2mm]
                    &(3)\quad A\rightarrow B\rightarrow C\rightarrow D\\[2mm]
                    &(4)\quad A\rightarrow C\rightarrow B\rightarrow D
                    \end{aligned}"
                                />

                            </div>

                            <hr className="border-white/10" />

                            {/* (1) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (1) <InlineMath math="A\rightarrow B\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="B" /> 사이의
                                    도로는 <InlineMath math="2" />개이고,{" "}
                                    <InlineMath math="B" />와 <InlineMath math="D" /> 사이의
                                    도로도 <InlineMath math="2" />개입니다.
                                </p>

                                <BlockMath math="2\times2=4" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="4" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (2) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (2) <InlineMath math="A\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    <InlineMath math="A" />와 <InlineMath math="C" /> 사이의
                                    도로는 <InlineMath math="3" />개이고,{" "}
                                    <InlineMath math="C" />와 <InlineMath math="D" /> 사이의
                                    도로는 <InlineMath math="2" />개입니다.
                                </p>

                                <BlockMath math="3\times2=6" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="6" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (3) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (3) <InlineMath math="A\rightarrow B\rightarrow C\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    각 구간의 도로 수는 차례대로{" "}
                                    <InlineMath math="2,\ x,\ 2" />입니다.
                                </p>

                                <BlockMath math="2\times x\times2=4x" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="4x" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* (4) */}
                            <div>

                                <p className="font-semibold text-white">
                                    (4) <InlineMath math="A\rightarrow C\rightarrow B\rightarrow D" />
                                </p>

                                <p className="mt-4 leading-8">
                                    모든 도로는 양방향으로 통행할 수 있으므로{" "}
                                    <InlineMath math="C" />에서 <InlineMath math="B" />로
                                    이동하는 경우도 포함해야 합니다.
                                </p>

                                <p className="leading-8">
                                    각 구간의 도로 수는 차례대로{" "}
                                    <InlineMath math="3,\ x,\ 2" />입니다.
                                </p>

                                <BlockMath math="3\times x\times2=6x" />

                                <p className="leading-8">
                                    따라서 <InlineMath math="6x" />가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                네 종류의 경로는 서로 동시에 일어날 수 없으므로
                                합의 법칙에 의하여 전체 경로의 수는
                            </p>

                            <BlockMath math="4+6+4x+6x=10+10x" />

                            <p className="leading-8">
                                이 값이 <InlineMath math="60" />이 되어야 하므로
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                10+10x&=60\\
                10x&=50\\
                x&=5
                \end{aligned}"
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 추가해야 할 도로의 개수는
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

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                복잡한 경우의 수 문제는 전체 경우를
                                빠짐없이 겹치지 않게 분류한다.
                            </p>

                            <p>
                                분류한 하나의 경우 안에서 여러 선택이 계속되면
                                곱의 법칙을 사용한다.
                            </p>

                            <p>
                                서로 동시에 일어날 수 없는 여러 분류의 경우의 수는
                                합의 법칙을 사용하여 더한다.
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{각 분류 안에서는 곱하고}
                \qquad
                \text{서로 다른 분류끼리는 더한다}"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.9 색칠하는 경우의 수
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    여러 영역을 색칠할 때 인접한 영역을 서로 다른 색으로 구분하려면,
                    한 영역씩 순서대로 색을 정하여 경우의 수를 구합니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    색칠하는 경우의 수는 주로
                    <b className="text-white"> 곱의 법칙</b>을 이용하지만,
                    이미 사용한 색을 다시 사용할 수 있는 순간에는 경우를 나누어
                    <b className="text-white"> 합의 법칙</b>을 함께 사용합니다.
                </p>

                {/* 색칠하는 순서 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        색칠하는 순서
                    </h3>

                    <p className="leading-8 text-gray-300">
                        색칠하는 경우의 수를 구할 때는
                        <b className="text-white">
                            {" "}다른 영역과 맞닿은 경계가 가장 많은 영역부터
                        </b>
                        색칠하는 것이 좋습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        경계가 많은 영역을 먼저 색칠하면 다음 영역에서 사용할 수 있는
                        색의 개수를 쉽게 판단할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                ① 경계가 가장 많은 영역을 먼저 정합니다.
                            </p>

                            <p>
                                ② 한 번 정한 순서에 따라 한 영역씩 색칠합니다.
                            </p>

                            <p>
                                ③ 이미 칠한 인접 영역의 색을 제외하고 사용할 수 있는
                                색의 개수를 셉니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 분류를 시작하는 순간 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        언제 경우를 나누는가?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        색칠하는 도중, 새로 칠할 영역이 이미 칠한 어떤 영역과
                        인접하지 않으면 그 영역과
                        <b className="text-white"> 같은 색을 사용할 수 있습니다.</b>
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        이처럼 이미 사용한 색을 다시 사용할 수 있는 순간에는
                        다음 두 경우로 분류합니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                같은 색을 사용하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                앞에서 칠한 영역과 같은 색을 선택합니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                다른 색을 사용하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                앞에서 칠한 영역과 다른 색을 선택합니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            분류한 각각의 경우 안에서는{" "}
                            <b className="text-white"> 곱의 법칙</b>을 사용하고,
                            분류한 경우들을 합할 때는{" "}
                            <b className="text-white"> 합의 법칙</b>을 사용합니다.
                        </p>

                        <BlockMath
                            math="\text{각 경우 안에서는 곱하고}
                \qquad
                \text{분류한 경우끼리는 더한다}"
                        />

                    </div>

                </div>

                {/* 풀이 전략 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        색칠 문제의 풀이 전략
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 경계가 가장 많은 영역부터 색칠합니다.
                        </p>

                        <p>
                            ② 사용할 수 있는 색의 개수를 차례대로 구합니다.
                        </p>

                        <p>
                            ③ 앞에서 사용한 색을 다시 사용할 수 있는 순간이 나타나면,
                            같은 색인 경우와 다른 색인 경우로 분류합니다.
                        </p>

                        <p>
                            ④ 각 분류 안에서는 곱의 법칙을 사용하고,
                            마지막에는 합의 법칙으로 더합니다.
                        </p>

                    </div>

                </div>

                {/* 예시 1 문제 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 설명 */}
                        <div className="flex flex-col justify-center">

                            <p className="leading-8 text-gray-300">
                                오른쪽 도형의 다섯 영역
                                <InlineMath math="A,\ B,\ C,\ D,\ E" />를 서로 다른
                                <InlineMath math="5" />개의 색 중 일부 또는 전부를 사용하여
                                색칠하려고 한다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                경계를 공유하는 두 영역을 서로 다른 색으로 칠하는
                                경우의 수를 구하여라.
                            </p>

                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    한 점에서만 만나는 두 영역은 인접한 것으로 보지 않는다.
                                </p>

                            </div>

                        </div>

                        {/* 문제 이미지 */}
                        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/4.9_example1_problem.png"
                                alt="다섯 영역 A, B, C, D, E로 나누어진 첫 번째 도형"
                                className="w-full max-w-xl object-contain"
                            />

                        </div>

                    </div>

                    {/* 풀이 보기 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                다음 순서로 색칠합니다.
                            </p>

                            <BlockMath math="E\rightarrow A\rightarrow B\rightarrow C\rightarrow D" />

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="E" />
                                </p>

                                <p className="mt-3 leading-8">
                                    다섯 가지 색 중 하나를 선택할 수 있으므로
                                </p>

                                <BlockMath math="5" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="A" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="E" />와 인접하므로{" "}
                                    <InlineMath math="E" />에 사용한 색을 제외합니다.
                                </p>

                                <BlockMath math="5-1=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="B" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="B" />는{" "}
                                    <InlineMath math="E" />와{" "}
                                    <InlineMath math="A" />에 인접합니다.
                                </p>

                                <p className="leading-8">
                                    두 영역에 사용한 서로 다른 두 색을 제외하므로
                                </p>

                                <BlockMath math="5-2=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="C" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="C" />는{" "}
                                    <InlineMath math="E" />와{" "}
                                    <InlineMath math="B" />에 인접하므로,
                                    두 영역에 사용한 색을 제외하면{" "}
                                    <InlineMath math="3" />가지 색을 사용할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    그러나 영역 <InlineMath math="C" />는{" "}
                                    <InlineMath math="A" />와 인접하지 않으므로{" "}
                                    <InlineMath math="A" />와 같은 색을 사용할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 여기서 두 경우로 분류합니다.
                                </p>

                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (1) <InlineMath math="C" />와{" "}
                                        <InlineMath math="A" />가 같은 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="C" />의 색은{" "}
                                        <InlineMath math="A" />와 같은 색으로 정해지므로{" "}
                                        <InlineMath math="1" />가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이때 영역 <InlineMath math="D" />에서 제외해야 하는
                                        색은 세 가지이므로
                                    </p>

                                    <BlockMath math="5-2=3" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <BlockMath math="1\times3" />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (2) <InlineMath math="C" />와{" "}
                                        <InlineMath math="A" />가 다른 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="C" />가 사용할 수 있는 세 색 중{" "}
                                        <InlineMath math="A" />의 색을 제외하면{" "}
                                        <InlineMath math="2" />가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이 경우에도 영역 <InlineMath math="D" />에서
                                        사용할 수 있는 색은 <InlineMath math="3" />가지입니다.
                                    </p>

                                    <BlockMath math="2\times3" />

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙과 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math="5\times4\times3
                    \left(1\times3+2\times3\right)"
                            />

                            <BlockMath math="=5\times4\times3\times9=540" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="540" />

                            </div>

                        </div>

                    </details>

                    {/* 그림으로 보기 */}
                    <details className="mt-3 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-blue-300">
                            그림으로 보기
                        </summary>

                        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white p-3">

                            <img
                                src="/images/4.9_example1_solution.png"
                                alt="첫 번째 도형을 순서대로 색칠하는 과정"
                                className="mx-auto w-full max-w-5xl object-contain"
                            />

                        </div>

                    </details>

                </div>

                {/* 예시 2 문제 */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                    <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 설명 */}
                        <div className="flex flex-col justify-center">

                            <p className="leading-8 text-gray-300">
                                오른쪽 도형의 다섯 영역
                                <InlineMath math="A,\ B,\ C,\ D,\ E" />를 서로 다른
                                <InlineMath math="5" />개의 색 중 일부 또는 전부를 사용하여
                                색칠하려고 한다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                경계를 공유하는 두 영역을 서로 다른 색으로 칠하는
                                경우의 수를 구하여라.
                            </p>

                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    한 점에서만 만나는 두 영역은 인접한 것으로 보지 않는다.
                                </p>

                            </div>

                        </div>

                        {/* 문제 이미지 */}
                        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/4.9_example2_problem.png"
                                alt="다섯 영역 A, B, C, D, E로 나누어진 두 번째 도형"
                                className="w-full max-w-xl object-contain"
                            />

                        </div>

                    </div>

                    {/* 풀이 보기 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                다음 순서로 색칠합니다.
                            </p>

                            <BlockMath math="C\rightarrow A\rightarrow B\rightarrow D\rightarrow E" />

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="C" />
                                </p>

                                <p className="mt-3 leading-8">
                                    다섯 가지 색 중 하나를 선택하므로
                                </p>

                                <BlockMath math="5" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="A" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="C" />와 인접하므로
                                </p>

                                <BlockMath math="5-1=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="B" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="B" />는{" "}
                                    <InlineMath math="C" />와{" "}
                                    <InlineMath math="A" />에 인접하므로
                                </p>

                                <BlockMath math="5-2=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="D" />
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="D" />는{" "}
                                    <InlineMath math="C" />와{" "}
                                    <InlineMath math="B" />에 인접하므로{" "}
                                    <InlineMath math="3" />가지 색을 사용할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="D" />는{" "}
                                    <InlineMath math="A" />와 인접하지 않으므로{" "}
                                    <InlineMath math="A" />와 같은 색을 사용할 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 여기서 두 경우로 분류합니다.
                                </p>

                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (1) <InlineMath math="D" />와{" "}
                                        <InlineMath math="A" />가 같은 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="D" />의 색은{" "}
                                        <InlineMath math="A" />와 같으므로{" "}
                                        <InlineMath math="1" />가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        영역 <InlineMath math="E" />와 인접한 영역은
                                        <InlineMath math="C,\ A,\ D" />이지만,{" "}
                                        <InlineMath math="A" />와{" "}
                                        <InlineMath math="D" />의 색이 같습니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        따라서 실제로 제외해야 하는 색은 두 가지이므로
                                    </p>

                                    <BlockMath math="5-2=3" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <BlockMath math="1\times3" />

                                </div>

                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (2) <InlineMath math="D" />와{" "}
                                        <InlineMath math="A" />가 다른 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="D" />가 사용할 수 있는 세 색 중{" "}
                                        <InlineMath math="A" />의 색을 제외하면{" "}
                                        <InlineMath math="2" />가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이때 <InlineMath math="C,\ A,\ D" />의 색이
                                        모두 다르므로 영역 <InlineMath math="E" />는
                                        세 색을 제외해야 합니다.
                                    </p>

                                    <BlockMath math="5-3=2" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <BlockMath math="2\times2" />

                                </div>

                            </div>

                            <p className="leading-8">
                                따라서 곱의 법칙과 합의 법칙에 의하여
                            </p>

                            <BlockMath
                                math="5\times4\times3
                    \left(1\times3+2\times2\right)"
                            />

                            <BlockMath math="=5\times4\times3\times7=420" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="420" />

                            </div>

                        </div>

                    </details>

                    {/* 그림으로 보기 */}
                    <details className="mt-3 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-blue-300">
                            그림으로 보기
                        </summary>

                        <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-white p-3">

                            <img
                                src="/images/4.9_example2_solution.png"
                                alt="두 번째 도형을 순서대로 색칠하는 과정"
                                className="mx-auto w-full max-w-5xl object-contain"
                            />

                        </div>

                    </details>

                </div>

                {/* 두 예시의 비교 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        두 예시의 비교
                    </h3>

                    <div className="grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                예시 1
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 색인 경우와 다른 색인 경우로 분류하지만,
                                두 경우 모두 마지막 영역에서 사용할 수 있는 색은{" "}
                                <InlineMath math="3" />가지입니다.
                            </p>

                            <BlockMath math="1\times3+2\times3" />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                예시 2
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 색인지 다른 색인지에 따라 마지막 영역에서
                                사용할 수 있는 색의 수가 달라집니다.
                            </p>

                            <BlockMath math="1\times3+2\times2" />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 문제 모두 같은 풀이 절차를 사용합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            앞에서 사용한 색을 다시 사용할 수 있는 순간이 나타나면,
                            결과가 같아 보이더라도 항상
                            <b className="text-white">
                                {" "}같은 색인 경우와 다른 색인 경우로 분류
                            </b>
                            합니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            색칠 문제에서는 무조건 영역의 나열 순서대로 색칠하지 않고,
                            경계가 많은 영역부터 색칠하는 것이 좋습니다.
                        </p>

                        <p>
                            이미 칠한 영역과 같은 색을 사용할 수 있는 순간이 나타나면
                            같은 색인 경우와 다른 색인 경우로 분류합니다.
                        </p>

                        <p>
                            분류한 각각의 경우에서는 곱의 법칙을 사용하고,
                            마지막에는 합의 법칙으로 더합니다.
                        </p>

                        <p>
                            첫 번째 문제처럼 분류한 뒤의 경우의 수가 같더라도,
                            일관된 풀이를 위해 분류를 생략하지 않습니다.
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이{" "}
                                    <InlineMath math="5" />개의 영역{" "}
                                    <InlineMath math="A,\ B,\ C,\ D,\ E" />를 서로 다른{" "}
                                    <InlineMath math="6" />가지 색으로 칠하려고 한다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    한 가지 색을 여러 번 사용해도 좋으나 이웃한 영역은
                                    서로 다른 색으로 구분하려고 할 때, 색을 칠하는 경우의 수를
                                    구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        단, 각 영역에는 한 가지 색만 칠한다.
                                    </p>

                                </div>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.9_example1.png"
                                    alt="다섯 영역 A, B, C, D, E로 나누어진 도형"
                                    className="w-full max-w-xl object-contain"
                                />

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
                                다른 영역과 가장 많이 인접한 영역{" "}
                                <InlineMath math="E" />부터 색칠합니다.
                            </p>

                            <BlockMath math="E\rightarrow A\rightarrow B\rightarrow C\rightarrow D" />

                            <hr className="border-white/10" />

                            {/* E */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="E" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    처음 색칠하는 영역이므로{" "}
                                    <InlineMath math="6" />가지 색 중 하나를 선택할 수 있습니다.
                                </p>

                                <BlockMath math="6" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* A */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="A" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="A" />는{" "}
                                    <InlineMath math="E" />와 인접하므로{" "}
                                    <InlineMath math="E" />에 사용한 색을 제외합니다.
                                </p>

                                <BlockMath math="6-1=5" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* B */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="B" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="B" />는{" "}
                                    <InlineMath math="E" />와{" "}
                                    <InlineMath math="A" />에 인접합니다.
                                </p>

                                <p className="leading-8">
                                    두 영역에 사용한 서로 다른 두 색을 제외하므로
                                </p>

                                <BlockMath math="6-2=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* C */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="C" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="C" />는{" "}
                                    <InlineMath math="E" />와{" "}
                                    <InlineMath math="B" />에 인접합니다.
                                </p>

                                <p className="leading-8">
                                    두 영역에 사용한 색을 제외하므로
                                </p>

                                <BlockMath math="6-2=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이때 영역 <InlineMath math="C" />는{" "}
                                    <InlineMath math="A" />와 인접하지 않으므로{" "}
                                    <InlineMath math="A" />와 같은 색을 사용해도 됩니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* D */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="D" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="D" />는{" "}
                                    <InlineMath math="E" />와{" "}
                                    <InlineMath math="C" />에 인접합니다.
                                </p>

                                <p className="leading-8">
                                    두 영역에 사용한 색을 제외하므로
                                </p>

                                <BlockMath math="6-2=4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                따라서 곱의 법칙에 의하여 전체 경우의 수는
                            </p>

                            <BlockMath math="6\times5\times4\times4\times4" />

                            <BlockMath math="=1920" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="1920" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림의{" "}
                                    <InlineMath math="A,\ B,\ C,\ D" /> 네 영역을 서로 다른{" "}
                                    <InlineMath math="4" />가지 색으로 칠하려고 한다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    같은 색을 중복하여 사용해도 좋으나 인접한 영역은 서로 다른
                                    색으로 칠할 때, 색칠하는 방법의 수를 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        단, 한 점만을 공유하는 두 영역은 인접하지 않는 것으로 본다.
                                    </p>

                                </div>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.9_example2.png"
                                    alt="네 영역 A, B, C, D로 나누어진 도형"
                                    className="w-full max-w-xl object-contain"
                                />

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
                                다음 순서로 색칠합니다.
                            </p>

                            <BlockMath math="A\rightarrow B\rightarrow C\rightarrow D" />

                            <hr className="border-white/10" />

                            {/* A */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="A" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    처음 색칠하는 영역이므로{" "}
                                    <InlineMath math="4" />가지 색 중 하나를 선택할 수 있습니다.
                                </p>

                                <BlockMath math="4" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* B */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="B" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="B" />는{" "}
                                    <InlineMath math="A" />와 인접하므로{" "}
                                    <InlineMath math="A" />에 사용한 색을 제외합니다.
                                </p>

                                <BlockMath math="4-1=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            {/* C */}
                            <div>

                                <p className="font-semibold text-white">
                                    영역 <InlineMath math="C" /> 색칠
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="C" />도{" "}
                                    <InlineMath math="A" />와 인접하므로{" "}
                                    <InlineMath math="A" />에 사용한 색을 제외합니다.
                                </p>

                                <BlockMath math="4-1=3" />

                                <p className="leading-8">
                                    가지입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    영역 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />는 한 점에서만 만나므로
                                    인접하지 않습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="C" />에는{" "}
                                    <InlineMath math="B" />와 같은 색을 칠할 수도 있고,
                                    다른 색을 칠할 수도 있습니다.
                                </p>

                                <p className="leading-8">
                                    여기서 두 경우로 분류합니다.
                                </p>

                            </div>

                            <div className="grid gap-5 md:grid-cols-2">

                                {/* B와 C가 같은 색 */}
                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (1) <InlineMath math="B" />와{" "}
                                        <InlineMath math="C" />가 같은 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="C" />를{" "}
                                        <InlineMath math="B" />와 같은 색으로 칠하는 방법은{" "}
                                        <InlineMath math="1" />가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이때 <InlineMath math="D" />는{" "}
                                        <InlineMath math="B" />와{" "}
                                        <InlineMath math="C" />에 인접하지만 두 영역의 색이
                                        같으므로 한 가지 색만 제외하면 됩니다.
                                    </p>

                                    <BlockMath math="4-1=3" />

                                    <p className="leading-8 text-gray-300">
                                        따라서 이 경우는
                                    </p>

                                    <BlockMath math="1\times3" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                </div>

                                {/* B와 C가 다른 색 */}
                                <div className="rounded-xl bg-black/40 p-5">

                                    <p className="font-semibold text-white">
                                        (2) <InlineMath math="B" />와{" "}
                                        <InlineMath math="C" />가 다른 색
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="C" />가 사용할 수 있는 세 색 중에서{" "}
                                        <InlineMath math="B" />의 색을 제외하므로
                                    </p>

                                    <BlockMath math="3-1=2" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        이때 <InlineMath math="D" />는 서로 다른{" "}
                                        <InlineMath math="B" />와{" "}
                                        <InlineMath math="C" />의 색을 모두 제외해야 하므로
                                    </p>

                                    <BlockMath math="4-2=2" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        따라서 이 경우는
                                    </p>

                                    <BlockMath math="2\times2" />

                                    <p className="leading-8 text-gray-300">
                                        가지입니다.
                                    </p>

                                </div>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                각 경우 안에서는 곱의 법칙을 사용하고,
                                두 경우는 합의 법칙으로 더합니다.
                            </p>

                            <BlockMath
                                math="4\times3
                \left(1\times3+2\times2\right)"
                            />

                            <BlockMath math="=4\times3\times7=84" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이{" "}
                                    <InlineMath math="1,\ 2,\ 3,\ 4,\ 5,\ 6" />이 적힌{" "}
                                    <InlineMath math="6" />개의 직사각형을 서로 다른{" "}
                                    <InlineMath math="3" />가지 색의 일부 또는 전부를
                                    사용하여 색칠하려고 한다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    이웃한 직사각형에는 서로 다른 색을 칠하고,{" "}
                                    <InlineMath math="1" />이 적힌 직사각형과{" "}
                                    <InlineMath math="6" />이 적힌 직사각형에도 서로 다른
                                    색을 칠할 때, 색칠하는 방법의 수를 구하여라.
                                </p>

                                <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        단, 각 영역에는 한 가지 색만 칠한다.
                                    </p>

                                </div>

                            </div>

                            {/* 문제 이미지 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/4.9_example3.png"
                                    alt="1부터 6까지 적힌 여섯 개의 직사각형"
                                    className="w-full max-w-xl object-contain"
                                />

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
                                먼저 <InlineMath math="1" />번 직사각형의 색을 하나
                                고정하여 생각하겠습니다.
                            </p>

                            <p className="leading-8">
                                각 단계에서 마지막 직사각형의 색이{" "}
                                <InlineMath math="1" />번 직사각형과
                                같은지 다른지에 따라 분류합니다.
                            </p>

                            <div className="rounded-xl bg-black/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="a_n" /> :{" "}
                                    <InlineMath math="n" />번 직사각형이{" "}
                                    <InlineMath math="1" />번과 같은 색인 경우의 수
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="b_n" /> :{" "}
                                    <InlineMath math="n" />번 직사각형이{" "}
                                    <InlineMath math="1" />번과 다른 색인 경우의 수
                                </p>

                            </div>

                            <hr className="border-white/10" />

                            <p className="leading-8">
                                <InlineMath math="1" />번 직사각형의 색은 이미 고정했으므로
                            </p>

                            <BlockMath math="a_1=1,\qquad b_1=0" />

                            <p className="leading-8">
                                다음 직사각형은 바로 앞의 직사각형과 다른 색으로
                                칠해야 합니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    앞 직사각형이 <InlineMath math="1" />번과 같은 색이면,
                                    다음 직사각형은 나머지 두 색 중 하나를 사용하므로{" "}
                                    <InlineMath math="1" />번과 다른 색이 됩니다.
                                </p>

                                <BlockMath math="a_n\longrightarrow 2b_{n+1}" />

                                <p className="leading-8 text-gray-300">
                                    앞 직사각형이 <InlineMath math="1" />번과 다른 색이면,
                                    다음 직사각형은 <InlineMath math="1" />번과 같은 색
                                    또는 세 번째 색을 사용할 수 있습니다.
                                </p>

                                <BlockMath math="b_n\longrightarrow a_{n+1}+b_{n+1}" />

                            </div>

                            <p className="leading-8">
                                이를 차례대로 계산하면 다음과 같습니다.
                            </p>

                            <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                                <table className="w-full min-w-[560px] border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr className="border-b border-white/15">
                                            <th className="p-3 font-semibold text-white">
                                                마지막 직사각형
                                            </th>
                                            <th className="p-3 font-semibold text-white">1</th>
                                            <th className="p-3 font-semibold text-white">2</th>
                                            <th className="p-3 font-semibold text-white">3</th>
                                            <th className="p-3 font-semibold text-white">4</th>
                                            <th className="p-3 font-semibold text-white">5</th>
                                            <th className="p-3 font-semibold text-white">6</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="border-b border-white/10">
                                            <th className="p-3 font-semibold text-white">
                                                1번과 같은 색
                                            </th>
                                            <td className="p-3">1</td>
                                            <td className="p-3">0</td>
                                            <td className="p-3">2</td>
                                            <td className="p-3">2</td>
                                            <td className="p-3">6</td>
                                            <td className="p-3">10</td>
                                        </tr>

                                        <tr>
                                            <th className="p-3 font-semibold text-white">
                                                1번과 다른 색
                                            </th>
                                            <td className="p-3">0</td>
                                            <td className="p-3">2</td>
                                            <td className="p-3">2</td>
                                            <td className="p-3">6</td>
                                            <td className="p-3">10</td>
                                            <td className="p-3">22</td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                            <p className="leading-8">
                                따라서 <InlineMath math="1" />번 직사각형의 색을 고정했을 때,{" "}
                                <InlineMath math="6" />번 직사각형이{" "}
                                <InlineMath math="1" />번과 다른 색인 경우는{" "}
                                <InlineMath math="22" />가지입니다.
                            </p>

                            <p className="leading-8">
                                처음 <InlineMath math="1" />번 직사각형의 색은
                                세 가지 중 하나를 선택할 수 있으므로 곱의 법칙에 의하여
                            </p>

                            <BlockMath math="3\times22=66" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="66" />

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

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                경계가 가장 많은 영역부터 순서대로 색칠한다.
                            </p>

                            <p>
                                인접한 영역에 사용한 색을 제외하고
                                사용할 수 있는 색의 수를 센다.
                            </p>

                            <p>
                                앞에서 사용한 색을 다시 사용할 수 있는 순간에는
                                같은 색인 경우와 다른 색인 경우로 분류한다.
                            </p>

                            <p>
                                각 분류 안에서는 곱의 법칙을 사용하고,
                                분류한 경우들을 합할 때는 합의 법칙을 사용한다.
                            </p>

                        </div>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="\text{같은 색을 다시 사용할 수 있는 순간}
                \quad\Longrightarrow\quad
                \text{경우를 분류한다}"
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    4.10 완전순열
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    여러 대상을 서로 다른 위치에 배열할 때, 모든 대상이
                    <b className="text-white"> 원래 자신의 위치를 피하도록</b>
                    배열하는 경우를 완전순열이라고 합니다.
                </p>

                {/* 완전순열의 뜻 */}
                <div className="rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        완전순열
                    </h3>

                    <p className="leading-8 text-gray-300">
                        서로 다른 <InlineMath math="n" />개의 대상을 배열할 때,
                        어느 대상도 원래 자신의 위치에 놓이지 않는 순열을
                        <b className="text-white"> 완전순열</b>이라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            가장 대표적인 상황은 편지를 봉투에 넣는 경우입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            각 사람에게 보낼 편지와 그 사람의 주소가 적힌 봉투가
                            하나씩 있을 때, 모든 편지를
                            <b className="text-white">
                                {" "}자신의 봉투가 아닌 다른 봉투
                            </b>
                            에 넣는 경우의 수를 구합니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="\text{모든 대상이 원래 위치를 피하는 순열}
                =
                \text{완전순열}"
                        />

                    </div>

                </div>

                {/* 세 대상의 완전순열 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        세 대상의 완전순열
                    </h3>

                    <p className="leading-8 text-gray-300">
                        세 사람 <InlineMath math="A,\ B,\ C" />의 편지를
                        세 봉투 <InlineMath math="A,\ B,\ C" />에 넣는다고 하겠습니다.
                    </p>

                    <p className="mt-4 leading-8 text-gray-300">
                        어느 편지도 자신의 봉투에 들어가지 않도록 넣는 경우를
                        직접 찾아보면 다음 두 가지입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <div className="overflow-x-auto">

                            <table className="w-full min-w-[520px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/15">
                                        <th className="p-3 font-semibold text-white">
                                            봉투
                                        </th>
                                        <th className="p-3 font-semibold text-white">
                                            A 봉투
                                        </th>
                                        <th className="p-3 font-semibold text-white">
                                            B 봉투
                                        </th>
                                        <th className="p-3 font-semibold text-white">
                                            C 봉투
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <th className="p-3 font-semibold text-white">
                                            경우 1
                                        </th>
                                        <td className="p-3">B의 편지</td>
                                        <td className="p-3">C의 편지</td>
                                        <td className="p-3">A의 편지</td>
                                    </tr>

                                    <tr>
                                        <th className="p-3 font-semibold text-white">
                                            경우 2
                                        </th>
                                        <td className="p-3">C의 편지</td>
                                        <td className="p-3">A의 편지</td>
                                        <td className="p-3">B의 편지</td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 세 대상의 완전순열의 수는
                    </p>

                    <BlockMath math="2" />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                </div>

                {/* 풀이 방법 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        완전순열을 구하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        완전순열의 수를 구하는 방법은 여러 가지가 있지만,
                        대상의 수가 적을 때는
                        <b className="text-white"> 수형도를 그려 직접 분류</b>하는
                        방법이 가장 이해하기 쉽습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <div className="space-y-4 leading-8 text-gray-300">

                            <p>
                                ① 첫 번째 대상이 이동할 수 있는 위치를 정합니다.
                            </p>

                            <p>
                                ② 이미 사용한 위치를 제외하고 다음 대상의 위치를 정합니다.
                            </p>

                            <p>
                                ③ 각 대상이 자신의 원래 위치에 놓이지 않았는지 확인합니다.
                            </p>

                            <p>
                                ④ 조건을 만족하지 않는 가지는 수형도에서 제거합니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            완전순열은 모든 대상을 순서대로 배열한 뒤 잘못된 경우를
                            제거하려 하면 복잡해질 수 있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 처음부터 각 대상이 자신의 위치에 놓이지 않도록
                            수형도를 그리는 것이 좋습니다.
                        </p>

                    </div>

                </div>

                {/* 자주 나오는 표현 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        완전순열로 해석하는 표현
                    </h3>

                    <p className="leading-8 text-gray-300">
                        문제에 완전순열이라는 말이 직접 나오지 않아도,
                        다음과 같은 상황은 모두 완전순열로 해석할 수 있습니다.
                    </p>

                    <div className="mt-5 space-y-4">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                편지와 봉투
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                모든 편지를 주소가 일치하지 않는 봉투에 하나씩 넣습니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                선물 교환
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                파티 참석자들이 선물을 하나씩 가져온 뒤,
                                어느 누구도 자신이 가져온 선물을 받지 않도록
                                하나씩 나누어 가집니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                시험지 채점
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                시험지를 섞어 나누어 준 뒤,
                                모든 학생이 자신의 시험지가 아닌 다른 학생의 시험지를
                                하나씩 채점합니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                자리 바꾸기
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                사람들이 자리를 떠났다가 돌아와서,
                                모든 사람이 원래 앉았던 자리와 다른 자리에 앉습니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 식으로 주어진 완전순열 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        식으로 표현된 완전순열
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="a,\ b,\ c,\ d" />가{" "}
                        <InlineMath math="1,\ 2,\ 3,\ 4" />를 한 번씩 사용하여 만든
                        순열이라고 하겠습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath math="(a-1)(b-2)(c-3)(d-4)\ne0" />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        곱이 <InlineMath math="0" />이 아니므로 각 인수는 모두{" "}
                        <InlineMath math="0" />이 아닙니다.
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            a&\ne1\\
            b&\ne2\\
            c&\ne3\\
            d&\ne4
            \end{aligned}"
                    />

                    <p className="leading-8 text-gray-300">
                        즉, 첫 번째 자리에는 <InlineMath math="1" />이 올 수 없고,
                        두 번째 자리에는 <InlineMath math="2" />가 올 수 없으며,
                        나머지 자리도 같은 방법으로 자신의 번호가 올 수 없습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            따라서 이 식은{" "}
                            <InlineMath math="1,\ 2,\ 3,\ 4" />의 완전순열을
                            나타냅니다.
                        </p>

                    </div>

                </div>

                {/* 완전순열의 수 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        완전순열의 수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="n" />개의 대상에 대한 완전순열의 수를{" "}
                        <InlineMath math="D_n" />이라 하겠습니다.
                    </p>

                    <div className="mt-5 overflow-x-auto rounded-xl bg-black/40 p-5">

                        <table className="w-full min-w-[520px] border-collapse text-center text-gray-300">

                            <thead>
                                <tr className="border-b border-white/15">
                                    <th className="p-3 font-semibold text-white">
                                        대상의 수
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        1
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        2
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        3
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        4
                                    </th>
                                    <th className="p-3 font-semibold text-white">
                                        5
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <th className="p-3 font-semibold text-white">
                                        완전순열의 수
                                    </th>
                                    <td className="p-3">0</td>
                                    <td className="p-3">1</td>
                                    <td className="p-3">2</td>
                                    <td className="p-3">9</td>
                                    <td className="p-3">44</td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <BlockMath
                        math="D_1=0,\quad D_2=1,\quad D_3=2,\quad
            D_4=9,\quad D_5=44"
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h4 className="mb-3 text-lg font-bold text-yellow-300">
                            실전에서 알아 둘 값
                        </h4>

                        <p className="leading-8 text-gray-300">
                            완전순열은 대상의 수가 적더라도 직접 세는 과정이 복잡할 수
                            있습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 실전에서는 다음 값을 기술적으로 기억해 두는 것이
                            유리합니다.
                        </p>

                        <BlockMath math="0,\ 1,\ 2,\ 9,\ 44" />

                    </div>

                </div>

                {/* 점화식 */}
                <div className="mt-8 rounded-xl bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        완전순열의 점화식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        완전순열의 수는 다음 점화식으로 계산할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <BlockMath
                            math="D_n=(n-1)\left(D_{n-1}+D_{n-2}\right)"
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        예를 들어 <InlineMath math="D_2=1" />,{" "}
                        <InlineMath math="D_3=2" />를 이용하면
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            D_4
            &=3(D_3+D_2)\\
            &=3(2+1)\\
            &=9
            \end{aligned}"
                    />

                    <p className="leading-8 text-gray-300">
                        이고,
                    </p>

                    <BlockMath
                        math="\begin{aligned}
            D_5
            &=4(D_4+D_3)\\
            &=4(9+2)\\
            &=44
            \end{aligned}"
                    />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            점화식을 이용하면 앞에서 구한 두 값을 이용하여 다음
                            완전순열의 수를 차례대로 계산할 수 있습니다.
                        </p>

                    </div>

                </div>

                {/* 중요한 관점 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        중요한 관점
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            완전순열은 모든 대상이 자신의 원래 위치를 피하는
                            순열입니다.
                        </p>

                        <p>
                            편지와 봉투, 선물 교환, 시험지 채점, 자리 바꾸기처럼
                            모든 사람이 자신의 것을 선택하지 않는 상황을
                            완전순열로 해석합니다.
                        </p>

                        <p>
                            대상의 수가 적을 때는 수형도를 이용하여 직접 분류할 수
                            있습니다.
                        </p>

                        <p>
                            실전에서는{" "}
                            <InlineMath math="D_1,\ D_2,\ D_3,\ D_4,\ D_5" />의 값을
                            기억해 두면 계산 시간을 줄일 수 있습니다.
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
                            <InlineMath math="1,\ 2,\ 3,\ 4,\ 5" />를 일렬로 나열할 때,{" "}
                            <InlineMath math="i" />번째 숫자를{" "}
                            <InlineMath math="a_i\ (1\le i\le5)" />라고 하자.
                        </p>

                        <BlockMath
                            math="(a_1-1)(a_2-2)(a_3-3)(a_4-4)(a_5-5)\ne0"
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족하는 순서쌍{" "}
                            <InlineMath math="(a_1,a_2,a_3,a_4,a_5)" />의 개수를
                            구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                식의 곱이 <InlineMath math="0" />이 아니므로
                                각 인수는 모두 <InlineMath math="0" />이 아닙니다.
                            </p>

                            <BlockMath
                                math="\begin{aligned}
                a_1&\ne1\\
                a_2&\ne2\\
                a_3&\ne3\\
                a_4&\ne4\\
                a_5&\ne5
                \end{aligned}"
                            />

                            <p>
                                즉, 어느 수도 원래의 위치에 올 수 없습니다.
                            </p>

                            <p>
                                따라서 이 문제는{" "}
                                <b className="text-white">5개의 원소에 대한 완전순열</b>을
                                구하는 문제입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="5" />개의 원소에 대한 완전순열의 수는
                                </p>

                                <BlockMath math="D_5=44" />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="44" />

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
                            <InlineMath math="5" />명의 아이돌{" "}
                            <InlineMath math="A,\ B,\ C,\ D,\ E" />가 각각의 이름이
                            새겨진 의자에 앉아 무대 인사를 하려고 한다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            한 명의 멤버만 자신의 이름이 적힌 의자에 앉는 경우의 수를
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
                                먼저 자신의 이름이 적힌 의자에 앉는 한 명을 선택합니다.
                            </p>

                            <BlockMath math="5" />

                            <p className="leading-8">
                                가지입니다.
                            </p>

                            <p className="leading-8">
                                선택된 한 명을 제외한 나머지{" "}
                                <InlineMath math="4" />명은 모두 자신의 이름이 적힌 의자에
                                앉으면 안 됩니다.
                            </p>

                            <p className="leading-8">
                                따라서 나머지 네 명은{" "}
                                <b className="text-white">4개의 원소에 대한 완전순열</b>로
                                배치됩니다.
                            </p>

                            <BlockMath math="D_4=9" />

                            <p className="leading-8">
                                처음 선택한 한 명과 나머지 네 명의 배치를 함께 정해야 하므로
                                곱의 법칙에 의하여
                            </p>

                            <BlockMath math="5\times9=45" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath math="45" />

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
                            모든 대상이 원래 자신의 위치에 놓이지 않는 순열을
                            완전순열이라고 한다.
                        </p>

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="D_1=0,\quad D_2=1,\quad D_3=2,\quad
                D_4=9,\quad D_5=44"
                        />

                        <hr className="my-5 border-white/10" />

                        <BlockMath
                            math="D_n=(n-1)\left(D_{n-1}+D_{n-2}\right)"
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="leading-8 text-gray-300">
                            완전순열 문제는 수형도를 이용하여 직접 분류하거나,
                            이미 알고 있는 완전순열의 수를 이용하여 해결한다.
                        </p>

                    </div>

                </div>

            </section>

        </>
    )
};