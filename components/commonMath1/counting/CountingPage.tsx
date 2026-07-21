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
        
        </>
    )
};