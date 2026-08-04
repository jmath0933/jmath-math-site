"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CoordinatePlanePage() {
    return (
        <>
            {/* 1.1 좌표평면 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.1 좌표평면
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면은 점의 위치를 수로 나타내기 위한 기본 도구입니다.
                    <br />
                    중학교에서 배운 내용을 간단히 복습하고,
                    이후 배우는 직선과 원의 방정식의 기초를 다져 봅시다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 좌표축 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 좌표축과 원점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            좌표평면은 서로 수직인 두 직선인 <b>x축</b>과 <b>y축</b>으로 이루어져 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                • <InlineMath math="x" />축 :{" "}
                                <InlineMath math="y=0" />인 점들의 모임 (가로선)
                            </p>

                            <p className="leading-8 text-gray-300">
                                • <InlineMath math="y" />축 :{" "}
                                <InlineMath math="x=0" />인 점들의 모임 (세로선)
                            </p>

                            <p className="leading-8 text-gray-300">
                                • 원점 :{" "}
                                <InlineMath math="O(0,0)" />
                            </p>

                        </div>

                    </div>

                    {/* 사분면 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 사분면
                        </h3>

                        <p className="leading-8 text-gray-300">
                            x축과 y축은 좌표평면을 네 부분으로 나누며,
                            이를 제1사분면부터 제4사분면까지 반시계 방향으로 부릅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                좌표축 위의 점
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                x축과 y축 위의 점, 그리고 원점은
                                어느 사분면에도 속하지 않습니다.
                            </p>

                        </div>

                    </div>

                    {/* 점의 좌표 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 점의 좌표
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세로선 <InlineMath math="x=a" />와
                            가로선 <InlineMath math="y=b" />가 만나는 점을
                        </p>

                        <BlockMath math="(a,b)" />

                        <p className="leading-8 text-gray-300">
                            와 같이 나타내며,
                            항상
                        </p>

                        <BlockMath math="(x좌표,\;y좌표)" />

                        <p className="leading-8 text-gray-300">
                            의 순서로 씁니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                예시
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                세로선{" "}
                                <InlineMath math="x=3" />
                                과 가로선{" "}
                                <InlineMath math="y=2" />
                                의 교점은
                            </p>

                            <BlockMath math="(3,2)" />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <BlockMath math="(2,3)\ne(3,2)" />

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            다음 점이 속하는 사분면을 구하시오.
                        </p>

                        <BlockMath math="A(3,2),\;B(-2,4),\;C(-3,-1),\;D(4,-2),\;E(0,5)" />

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                좌표의 부호를 이용하여 사분면을 판단합니다.
                            </p>

                            <BlockMath math="A:\text{제1사분면}" />
                            <BlockMath math="B:\text{제2사분면}" />
                            <BlockMath math="C:\text{제3사분면}" />
                            <BlockMath math="D:\text{제4사분면}" />
                            <BlockMath math="E:\text{y축 위}" />

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • x축은 <InlineMath math="y=0" />, y축은 <InlineMath math="x=0" />이다.
                        </p>

                        <p>
                            • 원점은 <InlineMath math="O(0,0)" />이다.
                        </p>

                        <p>
                            • 좌표는 항상 <InlineMath math="(x좌표,\;y좌표)" />의 순서로 나타낸다.
                        </p>

                        <p>
                            • 좌표축 위의 점과 원점은 어느 사분면에도 속하지 않는다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.2 좌표평면에서 미지수가 포함된 좌표의 표현 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.2 좌표평면에서 미지수가 포함된 좌표의 표현
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면 위의 점은 그 점이 만족하는 조건을 이용하여 미지수가 포함된 좌표로 나타낼 수 있습니다.
                    <br />
                    또한 출발점과 초당 변화량을 알면 움직이는 점의 좌표도 시간에 대한 식으로 표현할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 임의의 점과 좌표축 위의 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 임의의 점과 좌표축 위의 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 임의의 점은 두 개의 미지수를 이용하여 나타낼 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-5 text-gray-300">

                                <div>
                                    <p className="font-bold text-white">
                                        좌표평면 위의 임의의 점
                                    </p>

                                    <BlockMath math="P(a,b)" />
                                </div>

                                <div>
                                    <p className="font-bold text-white">
                                        <InlineMath math="x" />축 위의 점
                                    </p>

                                    <p className="mt-2 leading-8">
                                        <InlineMath math="x" />축 위에서는{" "}
                                        <InlineMath math="y=0" />이므로
                                    </p>

                                    <BlockMath math="P(a,0)" />
                                </div>

                                <div>
                                    <p className="font-bold text-white">
                                        <InlineMath math="y" />축 위의 점
                                    </p>

                                    <p className="mt-2 leading-8">
                                        <InlineMath math="y" />축 위에서는{" "}
                                        <InlineMath math="x=0" />이므로
                                    </p>

                                    <BlockMath math="P(0,a)" />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 직선 위의 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 직선 위의 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선 위의 점은 <InlineMath math="x" />좌표를{" "}
                            <InlineMath math="a" />로 놓고, 직선의 식에{" "}
                            <InlineMath math="x=a" />를 대입하여 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-5 text-gray-300">

                                <div>
                                    <p className="font-bold text-white">
                                        직선 <InlineMath math="y=x" /> 위의 점
                                    </p>

                                    <BlockMath math="P(a,a)" />
                                </div>

                                <div>
                                    <p className="font-bold text-white">
                                        직선 <InlineMath math="y=2x+3" /> 위의 점
                                    </p>

                                    <p className="mt-2 leading-8">
                                        <InlineMath math="x=a" />를 대입하면{" "}
                                        <InlineMath math="y=2a+3" />이므로
                                    </p>

                                    <BlockMath math="P(a,2a+3)" />
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 곡선 위의 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 곡선 위의 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            곡선 위의 점도 직선 위의 점과 같은 방법으로 나타낼 수 있습니다.
                            <br />
                            <InlineMath math="x" />좌표를 <InlineMath math="a" />로 놓고,
                            주어진 식을 이용하여 <InlineMath math="y" />좌표를 구합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-5 text-gray-300">

                                <div>
                                    <p className="font-bold text-white">
                                        곡선 <InlineMath math="y=x^2" /> 위의 점
                                    </p>

                                    <BlockMath math="P(a,a^2)" />
                                </div>

                                <div>
                                    <p className="font-bold text-white">
                                        곡선 <InlineMath math="y=2x^2-3x+5" /> 위의 점
                                    </p>

                                    <BlockMath math="P(a,2a^2-3a+5)" />
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                곡선 위의 점을 나타내는 방법
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="y=f(x)" /> 위의 점은{" "}
                                <InlineMath math="x=a" />로 놓으면 다음과 같이 나타낼 수 있습니다.
                            </p>

                            <BlockMath math="P(a,f(a))" />

                        </div>

                    </div>

                    {/* 좌표축 방향으로 움직이는 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 좌표축 방향으로 움직이는 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            움직이는 점의 좌표는 출발점의 좌표에 시간에 따른 변화량을 더하여 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(2,3)" />에서 출발하여 매초{" "}
                                <InlineMath math="x" />축 방향으로 <InlineMath math="5" />만큼,{" "}
                                <InlineMath math="y" />축 방향으로 <InlineMath math="-7" />만큼 움직이는 점을 생각해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="t" />초 동안{" "}
                                <InlineMath math="x" />좌표는 <InlineMath math="5t" />만큼 증가하고,{" "}
                                <InlineMath math="y" />좌표는 <InlineMath math="7t" />만큼 감소하므로
                            </p>

                            <BlockMath math="P(2+5t,3-7t)" />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                움직이는 점의 좌표
                            </p>

                            <BlockMath math="\text{현재 위치}=\text{출발 위치}+\text{초당 변화량}\times t" />

                        </div>

                    </div>

                    {/* 직선 위를 일정한 속력으로 움직이는 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 직선 위를 일정한 속력으로 움직이는 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선 위를 매초 일정한 거리만큼 움직일 때에는 직선의 방향과
                            실제 이동 거리를 함께 고려해야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                직선 <InlineMath math="y=x" /> 위를 움직이는 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                원점에서 출발하여 <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표가 모두 증가하는 방향으로 매초{" "}
                                <InlineMath math="1" />씩 움직인다고 하겠습니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                직선의 방향을 나타내는 <InlineMath math="(1,1)" />의 길이는
                            </p>

                            <BlockMath math="\sqrt{1^2+1^2}=\sqrt{2}" />

                            <p className="leading-8 text-gray-300">
                                이므로 길이가 <InlineMath math="1" />인 방향은
                            </p>

                            <BlockMath math="\left(\frac{1}{\sqrt{2}},\frac{1}{\sqrt{2}}\right)" />

                            <p className="leading-8 text-gray-300">
                                입니다. 따라서 <InlineMath math="t" />초 후의 좌표는
                            </p>

                            <BlockMath math="P\left(\frac{t}{\sqrt{2}},\frac{t}{\sqrt{2}}\right)" />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                직선 <InlineMath math="y=2x" /> 위를 움직이는 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                직선의 방향을 나타내는 <InlineMath math="(1,2)" />의 길이는
                            </p>

                            <BlockMath math="\sqrt{1^2+2^2}=\sqrt{5}" />

                            <p className="leading-8 text-gray-300">
                                이므로 길이가 <InlineMath math="1" />인 방향은
                            </p>

                            <BlockMath math="\left(\frac{1}{\sqrt{5}},\frac{2}{\sqrt{5}}\right)" />

                            <p className="leading-8 text-gray-300">
                                입니다. 원점에서 출발하면 <InlineMath math="t" />초 후의 좌표는
                            </p>

                            <BlockMath math="P\left(\frac{t}{\sqrt{5}},\frac{2t}{\sqrt{5}}\right)" />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                직선 <InlineMath math="y=2x" /> 위의 점{" "}
                                <InlineMath math="(1,2)" />에서 출발하는 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(1,2)" />에서 출발하여{" "}
                                <InlineMath math="x" />좌표와 <InlineMath math="y" />좌표가 모두 증가하는 방향으로
                                매초 <InlineMath math="1" />씩 움직이면
                            </p>

                            <BlockMath math="P\left(1+\frac{t}{\sqrt{5}},2+\frac{2t}{\sqrt{5}}\right)" />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                진행 방향
                            </p>

                            <p className="leading-8 text-gray-300">
                                같은 직선 위에서도 반대 방향으로 움직일 수 있으므로
                                문제에서 움직이는 방향을 확인해야 합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                점 <InlineMath math="(1,2)" />에서 반대 방향으로 움직이면
                            </p>

                            <BlockMath math="P\left(1-\frac{t}{\sqrt{5}},2-\frac{2t}{\sqrt{5}}\right)" />

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            다음 조건을 만족하는 점 <InlineMath math="P" />의 좌표를
                            미지수 <InlineMath math="a" />를 이용하여 나타내시오.
                        </p>

                        <div className="mt-5 space-y-3 text-gray-300">
                            <p>
                                (1) 점 <InlineMath math="P" />가{" "}
                                <InlineMath math="x" />축 위에 있다.
                            </p>

                            <p>
                                (2) 점 <InlineMath math="P" />가 직선{" "}
                                <InlineMath math="y=3x-2" /> 위에 있다.
                            </p>

                            <p>
                                (3) 점 <InlineMath math="P" />가 곡선{" "}
                                <InlineMath math="y=x^2+2x-1" /> 위에 있다.
                            </p>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                (1) <InlineMath math="x" />축 위에서는{" "}
                                <InlineMath math="y=0" />입니다.
                            </p>

                            <BlockMath math="P(a,0)" />

                            <p>
                                (2) <InlineMath math="x=a" />를{" "}
                                <InlineMath math="y=3x-2" />에 대입합니다.
                            </p>

                            <BlockMath math="y=3a-2" />

                            <BlockMath math="P(a,3a-2)" />

                            <p>
                                (3) <InlineMath math="x=a" />를{" "}
                                <InlineMath math="y=x^2+2x-1" />에 대입합니다.
                            </p>

                            <BlockMath math="y=a^2+2a-1" />

                            <BlockMath math="P(a,a^2+2a-1)" />

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
                            점 <InlineMath math="P" />가 점 <InlineMath math="(-3,4)" />에서 출발하여
                            매초 <InlineMath math="x" />축 방향으로 <InlineMath math="2" />만큼,{" "}
                            <InlineMath math="y" />축 방향으로 <InlineMath math="-5" />만큼 움직인다.
                            <br />
                            <InlineMath math="t" />초 후 점 <InlineMath math="P" />의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="t" />초 동안{" "}
                                <InlineMath math="x" />좌표는 <InlineMath math="2t" />만큼 증가하고,{" "}
                                <InlineMath math="y" />좌표는 <InlineMath math="5t" />만큼 감소합니다.
                            </p>

                            <BlockMath math="x=-3+2t" />

                            <BlockMath math="y=4-5t" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="P(-3+2t,4-5t)" />

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
                            점 <InlineMath math="P" />가 직선 <InlineMath math="y=3x" /> 위의 원점에서 출발하여,{" "}
                            <InlineMath math="x" />좌표와 <InlineMath math="y" />좌표가 모두 증가하는 방향으로
                            매초 <InlineMath math="2" />씩 움직인다.
                            <br />
                            <InlineMath math="t" />초 후 점 <InlineMath math="P" />의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                직선 <InlineMath math="y=3x" />의 방향을 나타내는 기울기는{" "}
                                <InlineMath math="3" />이고, 그 길이는
                            </p>

                            <BlockMath math="\sqrt{1^2+3^2}=\sqrt{10}" />

                            <p>
                                입니다. 따라서 길이가 <InlineMath math="1" />인 방향은
                            </p>

                            <BlockMath math="\left(\frac{1}{\sqrt{10}},\frac{3}{\sqrt{10}}\right)" />

                            <p>
                                매초 <InlineMath math="2" />씩 움직이므로 초당 변화량은
                            </p>

                            <BlockMath math="\left(\frac{2}{\sqrt{10}},\frac{6}{\sqrt{10}}\right)" />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="P\left(\frac{2t}{\sqrt{10}},\frac{6t}{\sqrt{10}}\right)" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 좌표평면 위의 임의의 점은{" "}
                            <InlineMath math="P(a,b)" />로 나타낸다.
                        </p>

                        <p>
                            • <InlineMath math="x" />축 위의 점은{" "}
                            <InlineMath math="P(a,0)" />,{" "}
                            <InlineMath math="y" />축 위의 점은{" "}
                            <InlineMath math="P(0,a)" />로 나타낸다.
                        </p>

                        <p>
                            • 곡선 <InlineMath math="y=f(x)" /> 위의 점은{" "}
                            <InlineMath math="P(a,f(a))" />로 나타낼 수 있다.
                        </p>

                        <p>
                            • 움직이는 점의 좌표는 출발점에
                            초당 변화량과 시간의 곱을 더하여 구한다.
                        </p>

                        <p>
                            • 직선 위를 일정한 속력으로 움직일 때에는
                            직선의 방향을 나타내는 빗변의 길이를{" "}
                            <InlineMath math="1" />로 맞추어야 한다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.3 두 점 사이의 거리 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.3 두 점 사이의 거리
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면에서 두 점 사이의 거리는 두 점을 잇는 선분의 길이입니다.
                    <br />
                    가로 길이와 세로 길이를 이용하여 직각삼각형을 만들면 피타고라스의 정리로 거리를 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 피타고라스의 정리와 거리 공식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 피타고라스의 정리와 거리 공식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(x_1,y_1)" />,{" "}
                            <InlineMath math="B(x_2,y_2)" />
                            를 좌표평면에 나타내고 가로선과 세로선을 그으면 직각삼각형이 만들어집니다.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white">

                            <img
                                src="/images/commonMath2/1.3.png"
                                alt="두 점 사이의 거리 공식을 설명하는 좌표평면"
                                className="mx-auto block h-auto w-[640px]"
                            />

                        </div>

                        <p className="mt-6 leading-8 text-gray-300">
                            직각삼각형의 가로 길이는 두 점의{" "}
                            <InlineMath math="x" />좌표의 차이고,
                            세로 길이는 두 점의{" "}
                            <InlineMath math="y" />좌표의 차입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \text{가로 길이}
                    =
                    |x_1-x_2|
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \text{세로 길이}
                    =
                    |y_1-y_2|
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            선분 <InlineMath math="\overline{AB}" />는 직각삼각형의 빗변이므로
                            피타고라스의 정리에 의하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AB}^2
                    =
                    |x_1-x_2|^2
                    +
                    |y_1-y_2|^2
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 절댓값을 제곱하면 괄호의 제곱과 같으므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    |x_1-x_2|^2=(x_1-x_2)^2
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    |y_1-y_2|^2=(y_1-y_2)^2
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 따라서 두 점 사이의 거리는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \overline{AB}
                    =
                    \sqrt{
                    (x_1-x_2)^2
                    +
                    (y_1-y_2)^2
                    }
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                두 점 사이의 거리
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{두 점 사이의 거리}
                        =
                        \sqrt{
                        (\text{\(x\)좌표의 차})^2
                        +
                        (\text{\(y\)좌표의 차})^2
                        }
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 좌표의 차를 구하는 순서 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 좌표의 차를 구하는 순서
                        </h3>

                        <p className="leading-8 text-gray-300">
                            좌표의 차는 어느 점의 좌표를 먼저 빼도 됩니다.
                            제곱하면 부호가 사라지기 때문입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    (x_1-x_2)^2=(x_2-x_1)^2
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (y_1-y_2)^2=(y_2-y_1)^2
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            예를 들어 두 점{" "}
                            <InlineMath math="A(2,3)" />,{" "}
                            <InlineMath math="B(7,9)" />
                            사이의 거리는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{AB}
                    &=
                    \sqrt{(2-7)^2+(3-9)^2}\\[6pt]
                    &=
                    \sqrt{(-5)^2+(-6)^2}\\[6pt]
                    &=
                    \sqrt{61}
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 반대 순서로 빼도 같은 결과를 얻습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \sqrt{(7-2)^2+(9-3)^2}
                    =
                    \sqrt{61}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                계산할 때의 주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="x" />좌표끼리 빼고,{" "}
                                <InlineMath math="y" />좌표끼리 빼야 합니다.
                                <br />
                                한 좌표는 앞의 점에서 뒤의 점을 빼고,
                                다른 좌표는 반대 순서로 빼도 제곱 때문에 결과는 같지만,
                                계산 실수를 줄이기 위해 두 좌표의 순서를 맞추는 것이 좋습니다.
                            </p>

                        </div>

                    </div>

                    {/* 원점과 한 점 사이의 거리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 원점과 한 점 사이의 거리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원점 <InlineMath math="O(0,0)" />과
                            점 <InlineMath math="A(a,b)" /> 사이의 거리는
                            거리 공식에 두 점의 좌표를 대입하여 구합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{OA}
                    &=
                    \sqrt{(a-0)^2+(b-0)^2}\\[6pt]
                    &=
                    \sqrt{a^2+b^2}
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \overline{OA}=\sqrt{a^2+b^2}
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                원점 <InlineMath math="O(0,0)" />과
                                점 <InlineMath math="A(3,4)" /> 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \overline{OA}
                        &=
                        \sqrt{3^2+4^2}\\[6pt]
                        &=
                        \sqrt{9+16}\\[6pt]
                        &=
                        5
                        \end{aligned}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                    </div>

                    {/* 고정된 점과 움직이는 점 사이의 거리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 고정된 점과 움직이는 점 사이의 거리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            고정된 점{" "}
                            <InlineMath math="A(a,b)" />와
                            움직이는 점{" "}
                            <InlineMath math="P(x,y)" /> 사이의 거리도 같은 공식을 이용합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \overline{AP}
                    =
                    \sqrt{
                    (x-a)^2
                    +
                    (y-b)^2
                    }
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 식은 이후 원의 방정식을 만들 때 매우 자주 사용됩니다.
                            <br />
                            점 <InlineMath math="P(x,y)" />가 움직이므로
                            거리식에도 미지수 <InlineMath math="x,y" />가 포함됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="A(2,-1)" />과
                                점 <InlineMath math="P(x,y)" /> 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \overline{AP}
                        &=
                        \sqrt{
                        (x-2)^2
                        +
                        \{y-(-1)\}^2
                        }\\[6pt]
                        &=
                        \sqrt{
                        (x-2)^2
                        +
                        (y+1)^2
                        }
                        \end{aligned}
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                부호에 주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                기준점의 좌표가 음수이면 거리식에서는 부호가 바뀝니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        y-(-1)=y+1
                    `}
                            />

                        </div>

                    </div>

                </div>

                {/* 거리식을 역으로 해석 */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        5. 거리식을 역으로 해석하기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        거리 공식은 두 점 사이의 거리를 계산할 때뿐만 아니라,
                        주어진 식이 어떤 두 점 사이의 거리를 나타내는지 해석할 때에도 사용합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                    \sqrt{(x-a)^2+(y-b)^2}
                `}
                    />

                    <p className="leading-8 text-gray-300">
                        는 점 <InlineMath math="P(x,y)" />와
                        점 <InlineMath math="A(a,b)" /> 사이의 거리를 나타냅니다.
                    </p>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-3 font-bold text-white">
                            예시 1
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{(x-2)^2+y^2}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            여기서 <InlineMath math="y^2=(y-0)^2" />이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{(x-2)^2+(y-0)^2}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 볼 수 있습니다. 따라서 이 식은
                            점 <InlineMath math="P(x,y)" />와
                            점 <InlineMath math="(2,0)" /> 사이의 거리입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-3 font-bold text-white">
                            예시 2
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{(x+3)^2+(y-5)^2}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x+3=x-(-3)" />이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{\{x-(-3)\}^2+(y-5)^2}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 볼 수 있습니다. 따라서 이 식은
                            점 <InlineMath math="P(x,y)" />와
                            점 <InlineMath math="(-3,5)" /> 사이의 거리입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="mb-3 font-bold text-blue-300">
                            기준점의 좌표 찾기
                        </p>

                        <p className="leading-8 text-gray-300">
                            거리식을 다음 기본형과 비교합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{(x-a)^2+(y-b)^2}
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            괄호 안이 덧셈으로 보이면 음수를 뺀 것으로 해석해야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                        x+3=x-(-3)
                    `}
                        />

                    </div>

                </div>

                {/* 피타고라스의 수 */}
                <div className="mt-6 rounded-xl border border-white/10 bg-white/10 p-6">

                    <h3 className="mb-4 text-2xl font-bold">
                        6. 계산에 자주 사용되는 피타고라스의 수
                    </h3>

                    <p className="leading-8 text-gray-300">
                        직각삼각형의 세 변의 길이가 자연수인 경우를 알아 두면
                        거리 계산을 빠르게 할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">

                            <p className="mb-3 font-bold text-white">
                                기본형
                            </p>

                            <BlockMath math="(3,4,5)" />

                            <BlockMath math="3^2+4^2=5^2" />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">

                            <p className="mb-3 font-bold text-white">
                                기본형
                            </p>

                            <BlockMath math="(5,12,13)" />

                            <BlockMath math="5^2+12^2=13^2" />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5 text-center">

                            <p className="mb-3 font-bold text-white">
                                기본형
                            </p>

                            <BlockMath math="(8,15,17)" />

                            <BlockMath math="8^2+15^2=17^2" />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                        <p className="mb-3 font-bold text-white">
                            같은 수를 곱한 경우
                        </p>

                        <p className="leading-8 text-gray-300">
                            피타고라스의 수에 같은 수를 곱한 세 수도
                            직각삼각형의 세 변의 길이가 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                        (3,4,5)
                        \quad\Longrightarrow\quad
                        (6,8,10),\ (9,12,15)
                    `}
                        />

                        <BlockMath
                            math={String.raw`
                        (5,12,13)
                        \quad\Longrightarrow\quad
                        (10,24,26)
                    `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="mb-3 font-bold text-yellow-300">
                            빠른 계산
                        </p>

                        <p className="leading-8 text-gray-300">
                            두 점의 <InlineMath math="x" />좌표의 차가{" "}
                            <InlineMath math="6" />이고{" "}
                            <InlineMath math="y" />좌표의 차가{" "}
                            <InlineMath math="8" />이면
                        </p>

                        <BlockMath
                            math={String.raw`
                        \sqrt{6^2+8^2}=10
                    `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 바로 계산할 수 있습니다.
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
                            두 점 <InlineMath math="A(-2,3)" />,{" "}
                            <InlineMath math="B(4,-5)" /> 사이의 거리를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                두 점 사이의 거리 공식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        \overline{AB}
                        &=
                        \sqrt{\{4-(-2)\}^2+(-5-3)^2}\\[6pt]
                        &=
                        \sqrt{6^2+(-8)^2}\\[6pt]
                        &=
                        \sqrt{36+64}\\[6pt]
                        &=
                        \sqrt{100}\\[6pt]
                        &=
                        10
                        \end{aligned}
                    `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\overline{AB}=10" />

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
                            두 점 <InlineMath math="A(1,2)" />,{" "}
                            <InlineMath math="B(a,8)" /> 사이의 거리가{" "}
                            <InlineMath math="10" />일 때, 실수{" "}
                            <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                두 점 사이의 거리가 <InlineMath math="10" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                        \sqrt{(a-1)^2+(8-2)^2}=10
                    `}
                            />

                            <p>
                                양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        (a-1)^2+36=100
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        (a-1)^2=64
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        a-1=8
                        \quad\text{또는}\quad
                        a-1=-8
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        a=9
                        \quad\text{또는}\quad
                        a=-7
                    `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                            a=-7,\ 9
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

                        <p className="leading-8 text-gray-300">
                            다음 식이 점 <InlineMath math="P(x,y)" />와
                            어떤 고정된 점 사이의 거리를 나타내는지 구하시오.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \sqrt{(x+4)^2+(y-3)^2}
                `}
                        />

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                거리식의 기본형은
                            </p>

                            <BlockMath
                                math={String.raw`
                        \sqrt{(x-a)^2+(y-b)^2}
                    `}
                            />

                            <p>
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        x+4=x-(-4)
                    `}
                            />

                            <p>
                                이므로 주어진 식은
                            </p>

                            <BlockMath
                                math={String.raw`
                        \sqrt{\{x-(-4)\}^2+(y-3)^2}
                    `}
                            />

                            <p>
                                로 해석할 수 있습니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    점 <InlineMath math="P(x,y)" />와
                                    점 <InlineMath math="(-4,3)" /> 사이의 거리입니다.
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위에 세 개의 정사각형이 서로
                                겹치지 않게 놓여 있다.
                                <br />
                                <InlineMath math="A(0,4)" />,{" "}
                                <InlineMath math="D(21,12)" />일 때,
                                두 점 <InlineMath math="B,\ C" /> 사이의 거리를 구하시오.
                                <br />
                                (단, 세 정사각형의 한 변은 모두{" "}
                                <InlineMath math="x" />축 위에 있다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.3_4.png"
                                alt="세 개의 정사각형과 두 점 사이의 거리"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                첫 번째 정사각형의 한 변의 길이는{" "}
                                <InlineMath math="4" />,
                                세 번째 정사각형의 한 변의 길이는{" "}
                                <InlineMath math="12" />입니다.
                            </p>

                            <p>
                                가운데 정사각형의 한 변의 길이를{" "}
                                <InlineMath math="a" />라 하면,
                            </p>

                            <BlockMath
                                math={String.raw`
                    4+a+12=21
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=5
                `}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    B=(4,4),\qquad
                    C=(9,12)
                `}
                            />

                            <p>
                                이므로 두 점 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BC}
                    &=
                    \sqrt{(9-4)^2+(12-4)^2} \\[6pt]
                    &=
                    \sqrt{5^2+8^2} \\[6pt]
                    &=
                    \sqrt{25+64} \\[6pt]
                    &=
                    \sqrt{89}
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{BC}=\sqrt{89}
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 직선{" "}
                                <InlineMath math="y=-x+3" />과
                                두 점{" "}
                                <InlineMath math="A(2,0),\ B(0,1)" />
                                이 있다.
                                <br />
                                <InlineMath math="\overline{AP}=\overline{BP}" />가 되도록
                                직선 위의 점{" "}
                                <InlineMath math="P(a,b)" />
                                라고 할 때,{" "}
                                <InlineMath math="ab" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.3_6.png"
                                alt="거리 공식 활용"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                점{" "}
                                <InlineMath math="P(a,b)" />
                                는 직선{" "}
                                <InlineMath math="y=-x+3" />
                                위의 점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    b=-a+3
                `}
                            />

                            <p>
                                또한{" "}
                                <InlineMath math="\overline{AP}=\overline{BP}" />
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt{(a-2)^2+b^2}
                    =
                    \sqrt{a^2+(b-1)^2}
                `}
                            />

                            <p>
                                양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a-2)^2+b^2
                    =
                    a^2+(b-1)^2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    -4a+4=-2b+1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    2a-b=\frac32
                `}
                            />

                            <p>
                                여기에{" "}
                                <InlineMath math="b=-a+3" />
                                을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    2a-(-a+3)=\frac32
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    3a=\frac92
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=\frac32
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    b=-\frac32+3=\frac32
                `}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    ab
                    =
                    \frac32\cdot\frac32
                    =
                    \frac94
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac94}
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 지점 <InlineMath math="O" />에서
                                수직으로 만나는 두 직선 도로가 있다.{" "}
                                <InlineMath math="A" />와 <InlineMath math="B" />가
                                지점 <InlineMath math="O" />로부터 각각 북쪽으로{" "}
                                <InlineMath math="10\text{km}" />, 서쪽으로{" "}
                                <InlineMath math="5\text{km}" /> 떨어진 지점에서 동시에 출발하여,{" "}
                                <InlineMath math="A" />는 남쪽으로 시속{" "}
                                <InlineMath math="3\text{km}" />,{" "}
                                <InlineMath math="B" />는 동쪽으로 시속{" "}
                                <InlineMath math="4\text{km}" />의 일정한 속력으로 걸어간다.
                                이때 <InlineMath math="A" />와 <InlineMath math="B" /> 사이의
                                거리의 최솟값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.3_7.png"
                                alt="수직으로 만나는 두 도로 위를 이동하는 두 점 A와 B"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                지점 <InlineMath math="O" />를 원점으로 하고,
                                동쪽을 <InlineMath math="x" />축의 양의 방향,
                                북쪽을 <InlineMath math="y" />축의 양의 방향으로 정합니다.
                            </p>

                            <p className="leading-8">
                                출발한 지 <InlineMath math="t" />시간 후{" "}
                                <InlineMath math="A" />는 남쪽으로{" "}
                                <InlineMath math="3t\text{ km}" /> 이동하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(0,\,10-3t)
                `}
                            />

                            <p className="leading-8">
                                입니다. 또한 <InlineMath math="B" />는 동쪽으로{" "}
                                <InlineMath math="4t\text{ km}" /> 이동하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    B(-5+4t,\,0)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                두 점 사이의 거리 자체에는 제곱근이 포함되므로,
                                거리의 제곱을 먼저 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^{\,2}
                    &=
                    \{0-(-5+4t)\}^2+(10-3t-0)^2\\[6pt]
                    &=
                    (5-4t)^2+(10-3t)^2\\[6pt]
                    &=
                    16t^2-40t+25
                    +9t^2-60t+100\\[6pt]
                    &=
                    25t^2-100t+125
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                완전제곱식으로 변형하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^{\,2}
                    &=
                    25(t^2-4t+5)\\[6pt]
                    &=
                    25\{(t-2)^2+1\}\\[6pt]
                    &=
                    25(t-2)^2+25
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 <InlineMath math="t=2" />일 때{" "}
                                <InlineMath math="\overline{AB}^{\,2}" />의 최솟값은{" "}
                                <InlineMath math="25" />입니다.
                            </p>

                            <p className="leading-8">
                                거리는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}=\sqrt{25}=5
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 점 <InlineMath math="A,\ B" /> 사이의 거리의 최솟값은{" "}
                                    <InlineMath math="5\text{ km}" />이다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-3 font-bold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 점이 움직이는 문제에서는 시간{" "}
                                    <InlineMath math="t" />에 따른 각 점의 좌표를 먼저 나타냅니다.
                                    거리의 최솟값은 거리의 제곱의 최솟값과 같은 시각에 나타나므로,
                                    제곱근이 없는{" "}
                                    <InlineMath math="\overline{AB}^{\,2}" />를 이차식으로 만들어
                                    계산하는 것이 편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{움직이는 점의 좌표}
                        \quad\longrightarrow\quad
                        \text{거리의 제곱}
                        \quad\longrightarrow\quad
                        \text{이차함수의 최솟값}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="x,\ y" />가 실수일 때,
                            다음 식의 최솟값을 구하시오.
                        </p>

                        <BlockMath
                            math={String.raw`
            \sqrt{(x-5)^2+(y+2)^2}
            +
            \sqrt{(x+3)^2+(y-4)^2}
        `}
                        />

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                첫 번째 근호는 점{" "}
                                <InlineMath math="P(x,y)" />
                                와 점{" "}
                                <InlineMath math="A(5,-2)" />
                                사이의 거리입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PA}=\sqrt{(x-5)^2+(y+2)^2}
                `}
                            />

                            <p>
                                두 번째 근호는 점{" "}
                                <InlineMath math="P(x,y)" />
                                와 점{" "}
                                <InlineMath math="B(-3,4)" />
                                사이의 거리입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PB}=\sqrt{(x+3)^2+(y-4)^2}
                `}
                            />

                            <p>
                                따라서 주어진 식은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PA}+\overline{PB}
                `}
                            />

                            <p>
                                를 의미합니다.
                            </p>

                            <p>
                                삼각형의 성질에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PA}+\overline{PB}\ge \overline{AB}
                `}
                            />

                            <p>
                                이므로 최솟값은{" "}
                                <InlineMath math="\overline{AB}" />
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}
                    &=
                    \sqrt{(5-(-3))^2+(-2-4)^2}\\
                    &=
                    \sqrt{8^2+(-6)^2}\\
                    &=
                    \sqrt{64+36}\\
                    &=
                    10
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{10}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(2,1),\ B(2,7),\ C(4,3)" />
                            을 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />의 외심의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형의 외심은 세 꼭짓점에서 같은 거리에 있는 점입니다.
                            </p>

                            <p className="leading-8">
                                외심을{" "}
                                <InlineMath math="O(x,y)" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{OA}
                    =
                    \overline{OB}
                    =
                    \overline{OC}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 점{" "}
                                <InlineMath math="A(2,1)" />와 점{" "}
                                <InlineMath math="B(2,7)" />는{" "}
                                <InlineMath math="x" />좌표가 같으므로,
                                선분{" "}
                                <InlineMath math="\overline{AB}" />는 세로선입니다.
                            </p>

                            <p className="leading-8">
                                따라서 선분{" "}
                                <InlineMath math="\overline{AB}" />의 수직이등분선은
                                두 점의{" "}
                                <InlineMath math="y" />좌표의 평균을 지나는 가로선입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=\frac{1+7}{2}=4
                `}
                            />

                            <p className="leading-8">
                                그러므로 외심을
                            </p>

                            <BlockMath
                                math={String.raw`
                    O(x,4)
                `}
                            />

                            <p className="leading-8">
                                로 놓을 수 있습니다.
                            </p>

                            <p className="leading-8">
                                이제{" "}
                                <InlineMath math="\overline{OA}=\overline{OC}" />를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x-2)^2+(4-1)^2
                    =
                    (x-4)^2+(4-3)^2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (x-2)^2+9
                    =
                    (x-4)^2+1
                `}
                            />

                            <p className="leading-8">
                                전개하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    x^2-4x+13
                    =
                    x^2-8x+17
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    4x=4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=1
                `}
                            />

                            <p className="leading-8">
                                따라서 외심의 좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
                    O(1,4)
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{(1,4)}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    외심은 세 꼭짓점에서 같은 거리에 있는 점이므로
                                    두 점 사이의 거리 공식을 이용합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에서는 선분{" "}
                                    <InlineMath math="\overline{AB}" />가 세로선이므로,
                                    그 수직이등분선{" "}
                                    <InlineMath math="y=4" />를 먼저 찾으면
                                    미지수를 하나만 사용하여 간단히 계산할 수 있습니다.
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(-2,1),\ B(1,4),\ C(3,-2)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />의 외접원의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형의 외심은 세 꼭짓점에서 같은 거리에 있는 점입니다.
                            </p>

                            <p className="leading-8">
                                외심을 <InlineMath math="O(x,y)" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{OA}
                    =
                    \overline{OB}
                    =
                    \overline{OC}
                `}
                            />

                            <p className="leading-8">
                                입니다. 제곱근을 없애기 위해 거리의 제곱을 비교하겠습니다.
                            </p>

                            <p className="leading-8">
                                먼저{" "}
                                <InlineMath math="\overline{OA}^{\,2}=\overline{OB}^{\,2}" />
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x+2)^2+(y-1)^2
                    =
                    (x-1)^2+(y-4)^2
                `}
                            />

                            <p className="leading-8">
                                전개하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    x^2+4x+4+y^2-2y+1
                    &=
                    x^2-2x+1+y^2-8y+16\\[4pt]
                    6x+6y&=12
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x+y=2
                `}
                            />

                            <p className="leading-8">
                                또,{" "}
                                <InlineMath math="\overline{OA}^{\,2}=\overline{OC}^{\,2}" />
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x+2)^2+(y-1)^2
                    =
                    (x-3)^2+(y+2)^2
                `}
                            />

                            <p className="leading-8">
                                전개하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    x^2+4x+4+y^2-2y+1
                    &=
                    x^2-6x+9+y^2+4y+4\\[4pt]
                    10x-6y&=8
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    5x-3y=4
                `}
                            />

                            <p className="leading-8">
                                두 식을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{cases}
                    x+y=2\\
                    5x-3y=4
                    \end{cases}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=\frac54,\qquad y=\frac34
                `}
                            />

                            <p className="leading-8">
                                따라서 외심의 좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
                    O\left(\frac54,\frac34\right)
                `}
                            />

                            <p className="leading-8">
                                외접원의 반지름을{" "}
                                <InlineMath math="R" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    R^2
                    &=
                    \overline{OA}^{\,2}\\[4pt]
                    &=
                    \left(\frac54+2\right)^2
                    +
                    \left(\frac34-1\right)^2\\[4pt]
                    &=
                    \left(\frac{13}{4}\right)^2
                    +
                    \left(-\frac14\right)^2\\[4pt]
                    &=
                    \frac{169}{16}+\frac1{16}\\[4pt]
                    &=
                    \frac{85}{8}
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 외접원의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \pi R^2
                    =
                    \frac{85\pi}{8}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac{85\pi}{8}}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    외심은 세 꼭짓점에서 같은 거리에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{OA}
                        =
                        \overline{OB}
                        =
                        \overline{OC}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 이용합니다. 거리에는 제곱근이 있으므로
                                    거리의 제곱을 같게 놓으면 제곱근 없이 일차방정식을
                                    만들 수 있습니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 두 점 <InlineMath math="A(x_1,y_1)" />,{" "}
                            <InlineMath math="B(x_2,y_2)" /> 사이의 거리는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AB}
                    =
                    \sqrt{(x_1-x_2)^2+(y_1-y_2)^2}
                `}
                        />

                        <p>
                            • 원점 <InlineMath math="O(0,0)" />과
                            점 <InlineMath math="A(a,b)" /> 사이의 거리는{" "}
                            <InlineMath math="\overline{OA}=\sqrt{a^2+b^2}" />이다.
                        </p>

                        <p>
                            • 점 <InlineMath math="A(a,b)" />와
                            점 <InlineMath math="P(x,y)" /> 사이의 거리는{" "}
                            <InlineMath math="\overline{AP}=\sqrt{(x-a)^2+(y-b)^2}" />이다.
                        </p>

                        <p>
                            • <InlineMath math="\sqrt{(x-a)^2+(y-b)^2}" />는{" "}
                            점 <InlineMath math="P(x,y)" />와{" "}
                            점 <InlineMath math="(a,b)" /> 사이의 거리로 해석한다.
                        </p>

                        <p>
                            • 자주 사용되는 피타고라스의 수
                        </p>

                        <BlockMath
                            math={String.raw`
                    (3,4,5),\qquad
                    (5,12,13),\qquad
                    (8,15,17)
                `}
                        />

                    </div>

                </div>

            </section>

            {/* 1.4 세 좌표가 주어졌을 때 삼각형의 모양과 넓이 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.4 세 좌표가 주어졌을 때 삼각형의 모양과 넓이
                </h2>

                <p className="leading-8 text-gray-300">
                    세 점의 좌표가 주어지면 두 점 사이의 거리 공식을 이용하여
                    삼각형의 세 변의 길이를 구할 수 있습니다.
                    <br />
                    세 변의 길이를 비교하면 삼각형의 모양을 판단할 수 있고,
                    좌표를 이용하면 삼각형의 넓이도 계산할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 삼각형이 만들어지는 조건 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 세 점으로 삼각형이 만들어지는 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 모양은 세 변의 길이에 의해 결정됩니다.
                            따라서 먼저 세 점 사이의 거리를 구하여 삼각형의 세 변의 길이를 확인합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            세 변의 길이를 <InlineMath math="a,\ b,\ c" />라 하고,
                            가장 긴 변의 길이를 <InlineMath math="c" />라 하면
                            삼각형이 만들어지기 위한 조건은
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{c<a+b}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-4 text-gray-300">

                                <p>
                                    • <InlineMath math="c<a+b" />이면 세 점은 삼각형을 만듭니다.
                                </p>

                                <p>
                                    • <InlineMath math="c=a+b" />이면 세 점은 한 직선 위에 있습니다.
                                </p>

                                <p>
                                    • <InlineMath math="c>a+b" />이면 세 선분으로 삼각형을 만들 수 없습니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                좌표가 주어진 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                서로 다른 세 점이 주어졌더라도 세 점이 한 직선 위에 있으면
                                삼각형이 만들어지지 않습니다.
                            </p>

                        </div>

                    </div>

                    {/* 변의 길이에 따른 분류 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 변의 길이에 따른 삼각형의 분류
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세 변의 길이를 비교하면 이등변삼각형과 정삼각형을 판단할 수 있습니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    이등변삼각형
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 변의 길이가 같은 삼각형입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                            a=b
                            \quad\text{또는}\quad
                            b=c
                            \quad\text{또는}\quad
                            c=a
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    정삼각형
                                </p>

                                <p className="leading-8 text-gray-300">
                                    세 변의 길이가 모두 같은 삼각형입니다.
                                </p>

                                <BlockMath math="a=b=c" />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                제곱한 길이를 비교해도 된다
                            </p>

                            <p className="leading-8 text-gray-300">
                                변의 길이는 모두 양수이므로 두 변의 길이가 같은지는
                                거리의 제곱만 비교해도 판단할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \overline{AB}=\overline{AC}
                        \quad\Longleftrightarrow\quad
                        \overline{AB}^2=\overline{AC}^2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 삼각형의 모양만 판단할 때에는 근호를 계산하지 않고
                                거리의 제곱을 비교하는 것이 편리합니다.
                            </p>

                        </div>

                    </div>

                    {/* 각의 크기에 따른 분류 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 각의 크기에 따른 삼각형의 분류
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세 변 중 가장 긴 변의 길이를 <InlineMath math="c" />라 하고,
                            나머지 두 변의 길이를 <InlineMath math="a,\ b" />라 하겠습니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 text-center font-bold text-white">
                                    예각삼각형
                                </p>

                                <BlockMath math="c^2<a^2+b^2" />

                                <p className="text-center leading-8 text-gray-300">
                                    세 각이 모두 예각입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 text-center font-bold text-white">
                                    직각삼각형
                                </p>

                                <BlockMath math="c^2=a^2+b^2" />

                                <p className="text-center leading-8 text-gray-300">
                                    가장 긴 변의 맞은편 각이 직각입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 text-center font-bold text-white">
                                    둔각삼각형
                                </p>

                                <BlockMath math="c^2>a^2+b^2" />

                                <p className="text-center leading-8 text-gray-300">
                                    가장 긴 변의 맞은편 각이 둔각입니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                판단 순서
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    1. 세 변의 길이 또는 길이의 제곱을 구합니다.
                                </p>

                                <p>
                                    2. 가장 긴 변을 찾습니다.
                                </p>

                                <p>
                                    3. 가장 긴 변의 제곱과 나머지 두 변의 제곱의 합을 비교합니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 직각이등변삼각형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 직각이등변삼각형
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직각이등변삼각형은 이등변삼각형인 동시에 직각삼각형입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{직각이등변삼각형}
                    =
                    \text{이등변삼각형}
                    +
                    \text{직각삼각형}
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 두 변의 길이가 같은지 확인하고,
                            피타고라스의 정리가 성립하는지도 함께 확인해야 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                같은 두 변의 길이를 <InlineMath math="a" />,
                                가장 긴 변의 길이를 <InlineMath math="c" />라 하면
                            </p>

                            <BlockMath math="a^2+a^2=c^2" />

                            <BlockMath math="c^2=2a^2" />

                        </div>

                    </div>

                    {/* 좌표를 이용한 넓이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 좌표를 이용한 삼각형의 넓이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(x_1,y_1)" />,{" "}
                            <InlineMath math="B(x_2,y_2)" />,{" "}
                            <InlineMath math="C(x_3,y_3)" />
                            를 삼각형의 변을 따라 한 방향으로 나열합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A\rightarrow B\rightarrow C\rightarrow A
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            처음 점의 좌표를 마지막에 한 번 더 적은 뒤,
                            대각선 방향으로 곱하여 계산합니다.
                        </p>

                        <div className="mt-6 overflow-hidden rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.4.png"
                                alt="좌표를 이용한 삼각형의 넓이 계산 방법"
                                className="mx-auto block h-auto w-[400px]"
                            />

                        </div>

                        <BlockMath
                            math={String.raw`
                    S=
                    \frac12
                    \left|
                    x_1y_2+x_2y_3+x_3y_1
                    -
                    y_1x_2-y_2x_3-y_3x_1
                    \right|
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                계산 방법
                            </p>

                            <div className="space-y-3 leading-8 text-gray-300">

                                <p>
                                    • 오른쪽 아래 방향의 곱은 모두 더합니다.
                                </p>

                                <p>
                                    • 왼쪽 아래 방향의 곱은 모두 뺍니다.
                                </p>

                                <p>
                                    • 계산 결과에 절댓값을 취하고{" "}
                                    <InlineMath math="\frac12" />을 곱합니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                좌표를 나열하는 순서
                            </p>

                            <p className="leading-8 text-gray-300">
                                세 점은 삼각형의 둘레를 따라 시계 방향 또는 반시계 방향으로
                                순서대로 나열해야 합니다.
                                <br />
                                반대 방향으로 나열하면 계산 결과의 부호만 바뀌며,
                                마지막에 절댓값을 취하므로 넓이는 같습니다.
                            </p>

                        </div>

                    </div>

                    {/* 다각형으로의 확장 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 다각형의 넓이로 확장
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이 계산법은 삼각형에서만 사용할 수 있는 공식이 아닙니다.
                            다각형의 꼭짓점을 한붓그리기처럼 둘레를 따라 순서대로 나열하면
                            같은 방법으로 다각형의 넓이를 구할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A\rightarrow B\rightarrow C\rightarrow D
                    \rightarrow\cdots\rightarrow A
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            예를 들어 사각형의 꼭짓점이
                        </p>

                        <BlockMath
                            math={String.raw`
                    A(x_1,y_1),\quad
                    B(x_2,y_2),\quad
                    C(x_3,y_3),\quad
                    D(x_4,y_4)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이면 다음과 같이 처음 점을 마지막에 다시 적습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{matrix}
                    x_1&x_2&x_3&x_4&x_1\\
                    y_1&y_2&y_3&y_4&y_1
                    \end{matrix}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이후 삼각형과 똑같이 대각선 방향의 곱을 더하고 빼면 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="mb-3 font-bold text-red-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                꼭짓점을 둘레를 따라 순서대로 나열하지 않고
                                서로 건너뛰며 연결하면 다른 도형이 만들어지므로
                                올바른 넓이를 구할 수 없습니다.
                            </p>

                        </div>

                    </div>

                    {/* 한 점이 원점인 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 한 점이 원점인 삼각형의 넓이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 세 점이
                        </p>

                        <BlockMath
                            math={String.raw`
                    O(0,0),\qquad A(a,b),\qquad B(c,d)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때 일반 넓이 공식에 좌표를 대입하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    S
                    &=
                    \frac12
                    \left|
                    0\cdot b+ad+c\cdot0
                    -
                    0\cdot a-bc-d\cdot0
                    \right|\\[6pt]
                    &=
                    \frac12|ad-bc|
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    S=\frac12|ad-bc|
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                기억할 식
                            </p>

                            <BlockMath
                                math={String.raw`
                        O(0,0),\quad A(a,b),\quad B(c,d)
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        S=\frac12|ad-bc|
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 평행이동을 이용한 실전 계산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 평행이동을 이용한 실전 계산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 모든 점을 같은 방향으로 같은 거리만큼 평행이동해도
                            삼각형의 모양과 넓이는 변하지 않습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            따라서 실전에서는 세 점 중 하나가 원점이 되도록
                            모든 점을 평행이동한 뒤
                        </p>

                        <BlockMath
                            math={String.raw`
                    S=\frac12|ad-bc|
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 사용하는 것이 계산에 유리합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                평행이동하는 방법
                            </p>

                            <p className="leading-8 text-gray-300">
                                세 점{" "}
                                <InlineMath math="A(x_1,y_1)" />,{" "}
                                <InlineMath math="B(x_2,y_2)" />,{" "}
                                <InlineMath math="C(x_3,y_3)" />
                                에서 점 <InlineMath math="A" />를 원점으로 옮기려면
                                모든 점의 좌표에서{" "}
                                <InlineMath math="A(x_1,y_1)" />의 좌표를 뺍니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        A\rightarrow O(0,0)
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        B\rightarrow
                        B'(x_2-x_1,\ y_2-y_1)
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        C\rightarrow
                        C'(x_3-x_1,\ y_3-y_1)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 삼각형 <InlineMath math="ABC" />의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        S=
                        \frac12
                        \left|
                        (x_2-x_1)(y_3-y_1)
                        -
                        (y_2-y_1)(x_3-x_1)
                        \right|
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시: 두 방법의 계산 비교
                            </p>

                            <p className="leading-8 text-gray-300">
                                세 점{" "}
                                <InlineMath math="A(2,3)" />,{" "}
                                <InlineMath math="B(5,6)" />,{" "}
                                <InlineMath math="C(8,1)" />
                                을 꼭짓점으로 하는 삼각형의 넓이를 구해 봅시다.
                            </p>

                            {/* 일반 넓이 공식 */}
                            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="mb-3 font-bold text-white">
                                    방법 1. 일반 넓이 공식 사용
                                </p>

                                <BlockMath
                                    math={String.raw`
                \begin{matrix}
                2&5&8&2\\
                3&6&1&3
                \end{matrix}
            `}
                                />

                                <BlockMath
                                    math={String.raw`
                \begin{aligned}
                S
                &=
                \frac12
                \left|
                2\cdot6+5\cdot1+8\cdot3
                -
                3\cdot5-6\cdot8-1\cdot2
                \right|\\[6pt]
                &=
                \frac12
                |12+5+24-15-48-2|\\[6pt]
                &=
                \frac12|-24|\\[6pt]
                &=
                12
                \end{aligned}
            `}
                                />

                            </div>

                            {/* 평행이동 */}
                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    방법 2. 한 점을 원점으로 평행이동
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="A(2,3)" />가 원점이 되도록
                                    모든 점의 좌표에서 <InlineMath math="(2,3)" />을 뺍니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                A(2,3)\rightarrow O(0,0)
            `}
                                />

                                <BlockMath
                                    math={String.raw`
                B(5,6)\rightarrow B'(3,3)
            `}
                                />

                                <BlockMath
                                    math={String.raw`
                C(8,1)\rightarrow C'(6,-2)
            `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                \begin{aligned}
                S
                &=
                \frac12
                |3\cdot(-2)-3\cdot6|\\[6pt]
                &=
                \frac12|-6-18|\\[6pt]
                &=
                \frac12|-24|\\[6pt]
                &=
                12
                \end{aligned}
            `}
                                />

                            </div>

                            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    두 방법의 결과는 같지만,
                                    평행이동한 뒤 계산하면 항의 수가 줄어 계산이 간단해집니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                실전에서의 선택
                            </p>

                            <div className="space-y-4 leading-8 text-gray-300">

                                <p>
                                    • 일반 넓이 공식은 계산 원리를 이해하고
                                    다각형의 넓이로 확장할 때 유용합니다.
                                </p>

                                <p>
                                    • 삼각형의 넓이만 구할 때에는 한 점을 원점으로 평행이동한 뒤{" "}
                                    <InlineMath math="\frac12|ad-bc|" />를 사용하는 것이 빠릅니다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(9,7),\ B(2,3),\ C(8,-1)" />
                            을 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            는 어떤 삼각형인지 말하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 세 변의 길이의 제곱을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^2
                    &=
                    (9-2)^2+(7-3)^2\\
                    &=49+16=65
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BC}^2
                    &=
                    (8-2)^2+(-1-3)^2\\
                    &=36+16=52
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AC}^2
                    &=
                    (9-8)^2+(7-(-1))^2\\
                    &=1+64=65
                    \end{aligned}
                `}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}^2=\overline{AC}^2
                `}
                            />

                            <p>
                                이므로{" "}
                                <InlineMath math="\overline{AB}=\overline{AC}" />이고,
                                삼각형 <InlineMath math="ABC" />는
                                이등변삼각형입니다.
                            </p>

                            <p>
                                또한 가장 긴 변의 제곱은{" "}
                                <InlineMath math="65" />이고,
                            </p>

                            <BlockMath
                                math={String.raw`
                    65
                    <
                    65+52
                `}
                            />

                            <p>
                                이므로 예각삼각형입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\overline{AB}=\overline{AC}\text{인 이등변삼각형}}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(-2,9),\ B(6,7),\ C(5,3)" />
                            을 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            는 어떤 삼각형인가?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 세 변의 길이의 제곱을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^2
                    &=
                    (6-(-2))^2+(7-9)^2\\
                    &=8^2+(-2)^2\\
                    &=64+4\\
                    &=68
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BC}^2
                    &=
                    (5-6)^2+(3-7)^2\\
                    &=(-1)^2+(-4)^2\\
                    &=1+16\\
                    &=17
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AC}^2
                    &=
                    (5-(-2))^2+(3-9)^2\\
                    &=7^2+(-6)^2\\
                    &=49+36\\
                    &=85
                    \end{aligned}
                `}
                            />

                            <p>
                                가장 긴 변은{" "}
                                <InlineMath math="\overline{AC}" />
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AC}^2=85,\qquad
                    \overline{AB}^2+\overline{BC}^2=68+17=85
                `}
                            />

                            <p>
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AC}^2=\overline{AB}^2+\overline{BC}^2
                `}
                            />

                            <p>
                                이므로 피타고라스의 정리가 성립합니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\angle B=90\degree \text{인 직각삼각형}}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(-1,1),\ B(3,4),\ C(a,5)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            가{" "}
                            <InlineMath math="\angle C=90^\circ" />
                            인 직각삼각형일 때,{" "}
                            <InlineMath math="a" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                <InlineMath math="\angle C=90^\circ" />
                                이므로{" "}
                                <InlineMath math="AB" />
                                가 빗변입니다.
                            </p>

                            <p>
                                따라서 피타고라스의 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AC}^2+\overline{BC}^2=\overline{AB}^2
                `}
                            />

                            <p>
                                각 변의 길이의 제곱을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AC}^2
                    &=
                    (a+1)^2+(5-1)^2\\
                    &=
                    (a+1)^2+16
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BC}^2
                    &=
                    (a-3)^2+(5-4)^2\\
                    &=
                    (a-3)^2+1
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^2
                    &=
                    (3-(-1))^2+(4-1)^2\\
                    &=4^2+3^2\\
                    &=25
                    \end{aligned}
                `}
                            />

                            <p>
                                이를{" "}
                                <InlineMath math="\overline{AC}^2+\overline{BC}^2=\overline{AB}^2" />
                                에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a+1)^2+16+(a-3)^2+1=25
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a+1)^2+(a-3)^2=8
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    2a^2-4a+10=8
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a^2-2a+1=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a-1)^2=0
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{a=1}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(a,0),\ B(2,1),\ C(4,3)" />
                            을 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            가 이등변삼각형일 때,
                            정수{" "}
                            <InlineMath math="a" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                먼저 세 변의 길이의 제곱을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^2
                    &=
                    (a-2)^2+(0-1)^2\\
                    &=
                    (a-2)^2+1
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AC}^2
                    &=
                    (a-4)^2+(0-3)^2\\
                    &=
                    (a-4)^2+9
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BC}^2
                    &=
                    (4-2)^2+(3-1)^2\\
                    &=4+4\\
                    &=8
                    \end{aligned}
                `}
                            />

                            <p>
                                이등변삼각형이므로 다음 세 경우를 생각합니다.
                            </p>

                            <BlockMath
                                math="\overline{AB}^2=\overline{AC}^2,\qquad \overline{AB}^2=\overline{BC}^2,\qquad \overline{AC}^2=\overline{BC}^2"
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ① <InlineMath math="\overline{AB}^2=\overline{AC}^2" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (a-2)^2+1=(a-4)^2+9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a=4
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ② <InlineMath math="\overline{AB}^2=\overline{BC}^2" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (a-2)^2+1=8
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (a-2)^2=7
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    정수해가 없습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ③ <InlineMath math="\overline{AC}^2=\overline{BC}^2" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (a-4)^2+9=8
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (a-4)^2=-1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    실수해가 없습니다.
                                </p>

                            </div>

                            <p>
                                따라서 조건을 만족하는 정수{" "}
                                <InlineMath math="a" />
                                는
                            </p>

                            <BlockMath
                                math="a=4"
                            />

                            <p>
                                이때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}^2=\overline{AC}^{\,2=}5,\qquad \overline{BC}^{\,2}=8
                `}
                            />

                            <p>
                                이므로 실제로 이등변삼각형이 됩니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{a=4}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(0,1),\ B(1,-2),\ C(3,2)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                점 <InlineMath math="A(0,1)" />을 원점으로 평행이동합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(0,1)\rightarrow O(0,0)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    B(1,-2)\rightarrow B'(1,-3)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    C(3,2)\rightarrow C'(3,1)
                `}
                            />

                            <p>
                                따라서 원점 공식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    S
                    &=
                    \frac12
                    \left|
                    1\cdot1-(-3)\cdot3
                    \right|\\[6pt]
                    &=
                    \frac12|1+9|\\[6pt]
                    &=
                    \frac12\cdot10\\[6pt]
                    &=5
                    \end{aligned}
                `}
                            />

                            <p>
                                일반 넓이 공식을 사용해도 같은 결과를 얻습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12
                    \left|
                    0(-2)+1\cdot2+3\cdot1
                    -
                    1\cdot1-(-2)\cdot3-2\cdot0
                    \right|
                    =5
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{5}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(3,8),\ B(1,0),\ C(-1,9)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                좌표를 둘레를 따라 한 방향으로 나열하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{matrix}
                    3&1&-1&3\\
                    8&0&9&8
                    \end{matrix}
                `}
                            />

                            <p>
                                삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    S
                    &=
                    \frac12
                    \left|
                    3\cdot0+1\cdot9+(-1)\cdot8
                    -
                    8\cdot1-0\cdot(-1)-9\cdot3
                    \right|\\[6pt]
                    &=
                    \frac12
                    |0+9-8-8-0-27|\\[6pt]
                    &=
                    \frac12|-34|\\[6pt]
                    &=17
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">

                                <p className="mb-3 font-bold text-blue-300">
                                    다른 풀이
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="B(1,0)" />을 원점으로 평행이동합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
            B(1,0)\rightarrow O(0,0)
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            A(3,8)\rightarrow A'(2,8)
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            C(-1,9)\rightarrow C'(-2,9)
        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    원점 공식을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
            \begin{aligned}
            S
            &=
            \frac12
            \left|
            2\cdot9-8\cdot(-2)
            \right|\\[6pt]
            &=
            \frac12
            |18+16|\\[6pt]
            &=
            \frac12\cdot34\\[6pt]
            &=17
            \end{aligned}
        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 일반 넓이 공식을 사용해도, 한 점을 원점으로 평행이동하여 계산해도
                                    넓이는 같습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{17}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(-1,2),\ B(1,-2),\ C(a,b)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />가 정삼각형일 때,{" "}
                            <InlineMath math="ab" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형 <InlineMath math="ABC" />가 정삼각형이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \overline{AC}
                    =
                    \overline{BC}
                `}
                            />

                            <p className="leading-8">
                                입니다. 거리의 제곱을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}^{\,2}
                    &=
                    \{1-(-1)\}^2+(-2-2)^2\\
                    &=
                    2^2+(-4)^2\\
                    &=
                    20
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서{" "}
                                <InlineMath math="\overline{AC}^{\,2}=20" />이고
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a+1)^2+(b-2)^2=20
                    \qquad \cdots\text{①}
                `}
                            />

                            <p className="leading-8">
                                또한{" "}
                                <InlineMath math="\overline{BC}^{\,2}=20" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a-1)^2+(b+2)^2=20
                    \qquad \cdots\text{②}
                `}
                            />

                            <p className="leading-8">
                                ①에서 ②를 빼면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    &(a+1)^2-(a-1)^2
                    +(b-2)^2-(b+2)^2=0\\[6pt]
                    &4a-8b=0
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=2b
                `}
                            />

                            <p className="leading-8">
                                이를 ①에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (2b+1)^2+(b-2)^2=20
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    4b^2+4b+1+b^2-4b+4&=20\\
                    5b^2&=15\\
                    b^2&=3
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="a=2b" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    ab=(2b)b=2b^2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    ab=2\cdot3=6
                `}
                            />

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    두 개의 가능한 점
                                </p>

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="\overline{AB}" />의 양쪽에
                                    정삼각형을 만들 수 있으므로 점{" "}
                                    <InlineMath math="C" />는 두 개 존재합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        C(2\sqrt3,\sqrt3)
                        \quad\text{또는}\quad
                        C(-2\sqrt3,-\sqrt3)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    어느 경우에도 <InlineMath math="ab=6" />입니다.
                                </p>

                            </div>

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

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    정삼각형에서는 세 변의 길이가 같으므로
                                    두 거리의 제곱을 각각 주어진 한 변의 길이의 제곱과 같게 놓습니다.
                                    두 식을 빼면 이차항이 없어져{" "}
                                    <InlineMath math="a,\ b" /> 사이의 간단한 관계를 얻을 수 있습니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 세 점 사이의 거리의 제곱을 비교하면
                            삼각형의 모양을 판단할 수 있다.
                        </p>

                        <p>
                            • 가장 긴 변의 제곱과 나머지 두 변의 제곱의 합을 비교하여
                            예각삼각형, 직각삼각형, 둔각삼각형을 판단한다.
                        </p>

                        <p>
                            • 좌표를 도형의 둘레를 따라 한 방향으로 나열하는 넓이 공식은
                            삼각형뿐만 아니라 모든 다각형으로 확장할 수 있다.
                        </p>

                        <p>
                            • 한 점이 원점인 삼각형{" "}
                            <InlineMath math="O(0,0)" />,{" "}
                            <InlineMath math="A(a,b)" />,{" "}
                            <InlineMath math="B(c,d)" />의 넓이는
                        </p>

                        <BlockMath
                            math={String.raw`
                    S=\frac12|ad-bc|
                `}
                        />

                        <p>
                            • 실전에서는 한 점을 원점으로 평행이동한 뒤{" "}
                            <InlineMath math="\frac12|ad-bc|" />를 사용하는 것이 편리하다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.5 AP+PB와 AP²+PB²의 차이 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.5{" "}
                    <InlineMath math="\overline{AP}+\overline{PB}" />와{" "}
                    <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />의 차이
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면에서 두 점 사이의 거리는 제곱근을 포함합니다.
                    <br />
                    따라서 두 거리의 합과 두 거리의 제곱의 합은 모양이 비슷해 보여도
                    풀이 방법이 서로 다릅니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 두 식의 차이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 두 식의 차이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P" />가 움직이는 점일 때,
                            거리 <InlineMath math="\overline{AP}" />는 일반적으로
                            다음과 같이 제곱근을 포함합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AP}
                    =
                    \sqrt{(x-a)^2+(y-b)^2}
                `}
                        />

                        <div className="mt-5 grid gap-4 lg:grid-cols-2">

                            {/* 거리의 합 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    두 거리의 합
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \overline{AP}+\overline{PB}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 제곱근의 합이 되므로 식을 직접 전개하여
                                    최솟값을 구하기 어렵습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 경우에는 대칭이동을 이용하여 꺾인 두 선분을
                                    하나의 선분으로 바꾸어 풉니다.
                                </p>

                            </div>

                            {/* 거리의 제곱의 합 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-3 font-bold text-purple-300">
                                    두 거리의 제곱의 합
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \overline{AP}^{\,2}
                            +
                            \overline{PB}^{\,2}
                        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    거리를 제곱하면 제곱근이 없어지므로
                                    움직이는 점의 좌표에 대한 이차식으로 나타낼 수 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 경우에는 앞에서 배운 이차함수의 최댓값과 최솟값을
                                    이용합니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                풀이 방법의 구분
                            </p>

                            <div className="space-y-4 text-gray-300">

                                <p>
                                    • <InlineMath math="\overline{AP}+\overline{PB}" />
                                    {" "}→ 대칭이동하여 하나의 선분으로 바꿉니다.
                                </p>

                                <p>
                                    •{" "}
                                    <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />
                                    {" "}→ 점의 좌표를 미지수로 놓고 이차식으로 계산합니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 공통 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 같은 조건에서 두 식 비교하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-2,5)" />,{" "}
                            <InlineMath math="B(6,1)" />과{" "}
                            <InlineMath math="x" />축 위를 움직이는 점{" "}
                            <InlineMath math="P" />를 생각해 봅시다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            같은 점 <InlineMath math="A,\ B,\ P" />를 사용하더라도
                            구하는 식에 따라 풀이 방법이 달라집니다.
                        </p>

                    </div>

                    {/* 거리의 합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. <InlineMath math="\overline{AP}+\overline{PB}" />의 최솟값
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="\overline{AP}+\overline{PB}" />를
                            좌표로 직접 나타내면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \sqrt{(a+2)^2+25}
                    +
                    \sqrt{(a-6)^2+1}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            과 같이 두 제곱근의 합이 되어 직접 계산하기 어렵습니다.
                            따라서 점 <InlineMath math="B" />를{" "}
                            <InlineMath math="x" />축에 대하여 대칭이동합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    B(6,1)
                    \quad\longrightarrow\quad
                    B'(6,-1)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P" />는{" "}
                            <InlineMath math="x" />축 위에 있으므로
                            대칭이동 전후의 거리가 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{PB}=\overline{PB'}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AP}+\overline{PB}
                    =
                    \overline{AP}+\overline{PB'}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 삼각형에서 두 변의 길이의 합은
                            나머지 한 변의 길이 이상이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AP}+\overline{PB'}
                    \ge
                    \overline{AB'}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 등호는 세 점{" "}
                            <InlineMath math="A,\ P,\ B'" />가
                            한 직선 위에 있을 때 성립합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{AB'}
                    &=
                    \sqrt{\{6-(-2)\}^2+(-1-5)^2}\\[6pt]
                    &=
                    \sqrt{8^2+(-6)^2}\\[6pt]
                    &=
                    \sqrt{64+36}\\[6pt]
                    &=
                    10
                    \end{aligned}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="leading-8 font-bold text-green-300">
                                따라서{" "}
                                <InlineMath math="\overline{AP}+\overline{PB}" />의
                                최솟값은 <InlineMath math="10" />입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                핵심 원리
                            </p>

                            <p className="leading-8 text-gray-300">
                                한 점을 대칭이동하여{" "}
                                <InlineMath math="\overline{AP}+\overline{PB}" />를
                                하나의 선분 길이로 바꿉니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{꺾인 두 선분}
                        \quad\longrightarrow\quad
                        \text{하나의 직선}
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 거리의 제곱의 합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4.{" "}
                            <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />
                            의 최솟값
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P" />는{" "}
                            <InlineMath math="x" />축 위의 점이므로
                        </p>

                        <BlockMath math="P(a,0)" />

                        <p className="leading-8 text-gray-300">
                            으로 놓습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{AP}^{\,2}
                    &=
                    \{a-(-2)\}^2+(0-5)^2\\[6pt]
                    &=
                    (a+2)^2+25
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{PB}^{\,2}
                    &=
                    (a-6)^2+(0-1)^2\\[6pt]
                    &=
                    (a-6)^2+1
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \overline{AP}^{\,2}
                    +
                    \overline{PB}^{\,2}
                    &=
                    (a+2)^2+25+(a-6)^2+1\\[6pt]
                    &=
                    2a^2-8a+66
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이차함수의 최솟값은 꼭짓점에서 나옵니다.
                            완전제곱식으로 변형하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    2a^2-8a+66
                    &=
                    2(a^2-4a)+66\\[6pt]
                    &=
                    2(a-2)^2+58
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로{" "}
                            <InlineMath math="a=2" />일 때 가장 작은 값을 갖습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    P(2,0)
                `}
                        />

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="leading-8 font-bold text-green-300">
                                따라서{" "}
                                <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />의
                                최솟값은 <InlineMath math="58" />입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="mb-3 font-bold text-purple-300">
                                핵심 원리
                            </p>

                            <p className="leading-8 text-gray-300">
                                거리의 제곱에서는 제곱근이 없어지므로
                                움직이는 점의 좌표에 대한 이차식으로 계산합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \text{거리의 제곱의 합}
                        \quad\longrightarrow\quad
                        \text{이차함수의 최솟값}
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 최솟값을 갖게 하는 점 비교 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 최솟값을 갖게 하는 점의 비교
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 식은 서로 다른 식이므로
                            최솟값뿐만 아니라 최솟값을 갖게 하는 점{" "}
                            <InlineMath math="P" />의 위치도 일반적으로 다릅니다.
                        </p>

                        <div className="mt-5 grid gap-4 lg:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    <InlineMath math="\overline{AP}+\overline{PB}" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="P" />는
                                    직선 <InlineMath math="AB'" />와{" "}
                                    <InlineMath math="x" />축의 교점입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    즉, 대칭이동한 두 점을 잇는 선분이
                                    좌표축과 만나는 위치에서 최솟값을 갖습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-3 font-bold text-purple-300">
                                    <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이차식{" "}
                                    <InlineMath math="2(a-2)^2+58" />의
                                    꼭짓점에서 최솟값을 가지므로
                                </p>

                                <BlockMath math="P(2,0)" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="mb-3 font-bold text-red-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 식의 최솟값을 갖게 하는 점이 같다고 생각하면 안 됩니다.
                                문제에서 구하는 식이 거리의 합인지,
                                거리의 제곱의 합인지 먼저 확인해야 합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-3,2),\ B(9,-3)" />
                            이 있다. 두 점 <InlineMath math="P,\ Q" />가 각각{" "}
                            <InlineMath math="x" />축과 <InlineMath math="y" />축 위를 움직일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AQ}
                +
                \overline{QP}
                +
                \overline{PB}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 점 <InlineMath math="Q,\ P" />를 차례로 지나{" "}
                                <InlineMath math="A" />에서 <InlineMath math="B" />까지 이동하므로,
                                삼각형의 두 변의 길이의 합은 나머지 한 변의 길이 이상이라는
                                성질을 반복하여 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AQ}
                    +
                    \overline{QP}
                    \ge
                    \overline{AP}
                `}
                            />

                            <p className="leading-8">
                                이고,
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AP}
                    +
                    \overline{PB}
                    \ge
                    \overline{AB}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AQ}
                    +
                    \overline{QP}
                    +
                    \overline{PB}
                    \ge
                    \overline{AB}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                두 점 <InlineMath math="A(-3,2)" />,{" "}
                                <InlineMath math="B(9,-3)" />를 잇는 선분은
                                먼저 <InlineMath math="y" />축을 지나고,
                                그다음 <InlineMath math="x" />축을 지납니다.
                            </p>

                            <p className="leading-8">
                                따라서 점 <InlineMath math="Q" />를 선분{" "}
                                <InlineMath math="\overline{AB}" />와{" "}
                                <InlineMath math="y" />축의 교점으로 잡고,
                                점 <InlineMath math="P" />를 선분{" "}
                                <InlineMath math="\overline{AB}" />와{" "}
                                <InlineMath math="x" />축의 교점으로 잡으면
                            </p>

                            <BlockMath
                                math={String.raw`
                    A,\ Q,\ P,\ B
                `}
                            />

                            <p className="leading-8">
                                가 이 순서대로 한 직선 위에 놓입니다. 이때
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AQ}
                    +
                    \overline{QP}
                    +
                    \overline{PB}
                    =
                    \overline{AB}
                `}
                            />

                            <p className="leading-8">
                                이므로 등호가 실제로 성립합니다.
                            </p>

                            <p className="leading-8">
                                이제 <InlineMath math="\overline{AB}" />의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AB}
                    &=
                    \sqrt{\{9-(-3)\}^2+(-3-2)^2}\\[6pt]
                    &=
                    \sqrt{12^2+(-5)^2}\\[6pt]
                    &=
                    \sqrt{144+25}\\[6pt]
                    &=
                    \sqrt{169}\\[6pt]
                    &=
                    13
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="leading-8 font-bold text-green-300">
                                    따라서{" "}
                                    <InlineMath
                                        math={String.raw`
                            \overline{AQ}
                            +
                            \overline{QP}
                            +
                            \overline{PB}
                        `}
                                    />
                                    의 최솟값은 <InlineMath math="13" />이다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 선분의 길이의 합은 출발점과 도착점을 직접 이은
                                    선분의 길이 이상입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AQ}
                        +
                        \overline{QP}
                        +
                        \overline{PB}
                        \ge
                        \overline{AB}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    중간의 점들이 선분 <InlineMath math="\overline{AB}" /> 위에
                                    이동 순서대로 놓일 수 있으면 최솟값은{" "}
                                    <InlineMath math="\overline{AB}" />가 됩니다.
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
                            네 점{" "}
                            <InlineMath math="O(0,0),\ A(5,0),\ B(3,4),\ C(0,2\sqrt6)" />
                            과 임의의 점 <InlineMath math="P" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{PO}
                +
                \overline{PA}
                +
                \overline{PB}
                +
                \overline{PC}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                네 선분을 다음과 같이 두 쌍으로 묶습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \left(
                    \overline{PO}+\overline{PB}
                    \right)
                    +
                    \left(
                    \overline{PA}+\overline{PC}
                    \right)
                `}
                            />

                            <p className="leading-8">
                                삼각형에서 두 변의 길이의 합은 나머지 한 변의 길이 이상이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PO}+\overline{PB}
                    \ge
                    \overline{OB}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \overline{PA}+\overline{PC}
                    \ge
                    \overline{AC}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PO}
                    +
                    \overline{PA}
                    +
                    \overline{PB}
                    +
                    \overline{PC}
                    \ge
                    \overline{OB}+\overline{AC}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 <InlineMath math="\overline{OB}" />의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{OB}
                    &=
                    \sqrt{(3-0)^2+(4-0)^2}\\[6pt]
                    &=
                    \sqrt{3^2+4^2}\\[6pt]
                    &=5
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                이고, <InlineMath math="\overline{AC}" />의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AC}
                    &=
                    \sqrt{(5-0)^2+(0-2\sqrt6)^2}\\[6pt]
                    &=
                    \sqrt{25+24}\\[6pt]
                    &=7
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{OB}+\overline{AC}
                    =
                    5+7
                    =
                    12
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    등호가 성립하는 조건
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="O,\ P,\ B" />가 한 직선 위에 있고,
                                    동시에 <InlineMath math="A,\ P,\ C" />가 한 직선 위에 있으면
                                    두 부등식에서 등호가 성립합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    즉, 점 <InlineMath math="P" />를 두 선분{" "}
                                    <InlineMath math="\overline{OB}" />와{" "}
                                    <InlineMath math="\overline{AC}" />의 교점으로 잡으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{PO}+\overline{PB}
                        =
                        \overline{OB}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \overline{PA}+\overline{PC}
                        =
                        \overline{AC}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되어 등호가 실제로 성립합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="leading-8 font-bold text-green-300">
                                    따라서{" "}
                                    <InlineMath
                                        math={String.raw`
                            \overline{PO}
                            +
                            \overline{PA}
                            +
                            \overline{PB}
                            +
                            \overline{PC}
                        `}
                                    />
                                    의 최솟값은 <InlineMath math="12" />이다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    네 거리의 합은 적절한 두 쌍으로 묶어 각각 하나의 선분으로
                                    바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \left(
                        \overline{PO}+\overline{PB}
                        \right)
                        +
                        \left(
                        \overline{PA}+\overline{PC}
                        \right)
                        \ge
                        \overline{OB}+\overline{AC}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 선분이 한 점에서 만나도록 묶어야 두 등호가 동시에
                                    성립할 수 있습니다.
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
                            두 점{" "}
                            <InlineMath math="A(-2,0),\ B(2,0)" />
                            과 직선{" "}
                            <InlineMath math="y=x+3" />
                            위의 점{" "}
                            <InlineMath math="P" />
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AP}^{\,2}
                +
                \overline{BP}^{\,2}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p>
                                직선{" "}
                                <InlineMath math="y=x+3" />
                                위의 점을
                            </p>

                            <BlockMath
                                math={String.raw`
                    P(a,a+3)
                `}
                            />

                            <p>
                                라고 둡니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AP}^{\,2}
                    &=
                    (a+2)^2+(a+3)^2
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BP}^{\,2}
                    &=
                    (a-2)^2+(a+3)^2
                    \end{aligned}
                `}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AP}^{\,2}
                    +
                    \overline{BP}^{\,2}
                    &=
                    (a+2)^2
                    +(a+3)^2
                    +(a-2)^2
                    +(a+3)^2\\[6pt]
                    &=
                    4a^2+12a+26\\[6pt]
                    &=
                    4\left(a+\frac32\right)^2+17
                    \end{aligned}
                `}
                            />

                            <p>
                                따라서{" "}
                                <InlineMath math="a=-\dfrac32" />
                                일 때 최솟값을 가집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    P\left(
                    -\frac32,
                    \frac32
                    \right)
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <p className="mt-3">
                                    <InlineMath
                                        math={String.raw`
                            \overline{AP}^{\,2}
                            +
                            \overline{BP}^{\,2}
                        `}
                                    />
                                    의 최솟값은{" "}
                                    <InlineMath math="17" />
                                    이다.
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
                            세 점{" "}
                            <InlineMath math="A(1,-4),\ B(3,2),\ C(-1,-1)" />과
                            직선 <InlineMath math="y=-x+2" /> 위의 점{" "}
                            <InlineMath math="P" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AP}^{\,2}
                +
                \overline{BP}^{\,2}
                +
                \overline{CP}^{\,2}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="P" />는 직선{" "}
                                <InlineMath math="y=-x+2" /> 위의 점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    P(a,-a+2)
                `}
                            />

                            <p className="leading-8">
                                로 놓습니다.
                            </p>

                            <p className="leading-8">
                                각 거리의 제곱을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AP}^{\,2}
                    &=
                    (a-1)^2+\{(-a+2)-(-4)\}^2\\[6pt]
                    &=
                    (a-1)^2+(a-6)^2
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{BP}^{\,2}
                    &=
                    (a-3)^2+\{(-a+2)-2\}^2\\[6pt]
                    &=
                    (a-3)^2+a^2
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{CP}^{\,2}
                    &=
                    \{a-(-1)\}^2+\{(-a+2)-(-1)\}^2\\[6pt]
                    &=
                    (a+1)^2+(a-3)^2
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    &\overline{AP}^{\,2}
                    +\overline{BP}^{\,2}
                    +\overline{CP}^{\,2}\\[4pt]
                    &=(a-1)^2+(a-6)^2
                    +(a-3)^2+a^2
                    +(a+1)^2+(a-3)^2\\[6pt]
                    &=6a^2-24a+56
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                완전제곱식으로 변형하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    6a^2-24a+56
                    &=
                    6(a^2-4a)+56\\[6pt]
                    &=
                    6(a-2)^2+32
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서 <InlineMath math="a=2" />일 때
                                가장 작은 값을 갖습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    P(2,0)
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="leading-8 font-bold text-green-300">
                                    따라서{" "}
                                    <InlineMath
                                        math={String.raw`
                            \overline{AP}^{\,2}
                            +
                            \overline{BP}^{\,2}
                            +
                            \overline{CP}^{\,2}
                        `}
                                    />
                                    의 최솟값은 <InlineMath math="32" />이다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="mb-3 font-bold text-purple-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    거리의 제곱의 합에서는 제곱근이 없어지므로,
                                    직선 위의 점을 미지수가 포함된 좌표로 나타낸 뒤
                                    이차함수의 최솟값을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P(a,-a+2)
                        \quad\longrightarrow\quad
                        6(a-2)^2+32
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <div>
                            <p className="leading-8">
                                • <InlineMath math="\overline{AP}+\overline{PB}" />는
                                두 제곱근의 합이므로 대칭이동을 이용한다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \overline{AP}+\overline{PB}
                        =
                        \overline{AP}+\overline{PB'}
                        \ge
                        \overline{AB'}
                    `}
                            />

                        </div>

                        <div>
                            <p className="leading-8">
                                •{" "}
                                <InlineMath math="\overline{AP}^{\,2}+\overline{PB}^{\,2}" />는
                                제곱근이 사라지므로 움직이는 점의 좌표를 미지수로 놓고
                                이차함수의 최솟값을 이용한다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \overline{AP}^{\,2}+\overline{PB}^{\,2}
                        =
                        2(a-2)^2+58
                    `}
                            />

                        </div>

                        <p className="leading-8">
                            • 두 식은 비슷해 보이지만 풀이 방법과
                            최솟값을 갖게 하는 점의 위치가 서로 다를 수 있다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.6 선분의 내분점 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.6 선분의 내분점
                </h2>

                <p className="leading-8 text-gray-300">
                    분점은 선분을 일정한 비율로 나누는 점입니다.
                    분점에는 선분의 내부에서 나누는 내분점과
                    선분의 연장선에서 나누는 외분점이 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    공통수학2에서는 선분의 내부에 있는 내분점을 다룹니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 분점과 내분점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 분점과 내분점
                        </h3>

                        <div className="grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    내분점
                                </p>

                                <p className="leading-8 text-gray-300">
                                    선분의 내부에서 선분을 일정한 비율로 나누는 점입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    외분점
                                </p>

                                <p className="leading-8 text-gray-300">
                                    선분의 연장선 위에서 두 점까지의 거리를
                                    일정한 비율로 나누는 점입니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                공통수학2에서는 내분점만 다룹니다.
                            </p>

                        </div>

                    </div>

                    {/* 내분의 방향 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 내분의 방향
                        </h3>

                        <p className="leading-8 text-gray-300">
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="3:2" />로 내분하는 점{" "}
                            <InlineMath math="P" />는 점{" "}
                            <InlineMath math="A" />에서 점{" "}
                            <InlineMath math="B" />를 향하여 갈 때
                            선분을 <InlineMath math="3:2" />로 나누는 점입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A
                    \quad\underbrace{\longrightarrow\longrightarrow\longrightarrow}_{3}
                    \quad P\quad
                    \underbrace{\longrightarrow\longrightarrow}_{2}
                    \quad B
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \overline{AP}:\overline{PB}=3:2
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            반대 방향에서 보면 선분{" "}
                            <InlineMath math="\overline{BA}" />를{" "}
                            <InlineMath math="2:3" />으로 내분하는 점과 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    B
                    \quad\underbrace{\longrightarrow\longrightarrow}_{2}
                    \quad P\quad
                    \underbrace{\longrightarrow\longrightarrow\longrightarrow}_{3}
                    \quad A
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \overline{AB}\text{를 }3:2\text{로 내분하는 점}
                        =
                        \overline{BA}\text{를 }2:3\text{으로 내분하는 점}
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 내분점 공식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 내분점 공식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="m:n" />으로 내분하는 점을{" "}
                            <InlineMath math="P" />라 하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AP}:\overline{PB}=m:n
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, 내분점은 다음과 같이 표현할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    P=\frac{mB+nA}{m+n}
                    }
                `}
                        />

                        <div className="mt-6 flex justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.6.png"
                                alt="내분점 공식을 만드는 안쪽의 곱과 바깥쪽의 곱"
                                className="block h-auto w-[420px]"
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                문제에서 식을 만드는 요령
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 점과 내분비를 문제에 보이는 순서대로 놓은 뒤,
                                안쪽의 곱과 바깥쪽의 곱을 더하여 비율의 합으로 나눕니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \frac{
                        \text{안쪽의 곱}+\text{바깥쪽의 곱}
                        }{
                        \text{비율의 합}
                        }
                        }
                    `}
                            />

                        </div>

                    </div>

                    {/* 식 만들기 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 내분점 식 만들기
                        </h3>

                        <div className="space-y-4">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="m:n" />으로 내분하는 점{" "}
                                    <InlineMath math="P" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                            P=\frac{mB+nA}{m+n}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="\overline{CD}" />를{" "}
                                    <InlineMath math="3:5" />로 내분하는 점{" "}
                                    <InlineMath math="R" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                            R=\frac{3D+5C}{3+5}
                            =\frac{3D+5C}{8}
                        `}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="\overline{PQ}" />를{" "}
                                    <InlineMath math="t:(1-t)" />로 내분하는 점{" "}
                                    <InlineMath math="R" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                            \begin{aligned}
                            R
                            &=
                            \frac{tQ+(1-t)P}{t+(1-t)}\\[6pt]
                            &=
                            tQ+(1-t)P
                            \end{aligned}
                        `}
                                />

                            </div>

                        </div>

                    </div>

                    {/* 등분으로 이해하기 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 등분으로 내분점 이해하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="3:2" />로 내분하는 점{" "}
                            <InlineMath math="P" />는{" "}
                            <InlineMath math="A,\ P,\ B" />가 이 순서대로 한 직선 위에 있고,
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="5" />등분했을 때{" "}
                            <InlineMath math="A" />에서 세 번째에 있는 점입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A
                    \;-\;1\;-\;2\;-\;P\;-\;4\;-\;B
                `}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시
                            </p>

                            <BlockMath
                                math={String.raw`
                        A(-5,3),\qquad B(5,-2)
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="3:2" />로 내분하는 점{" "}
                                <InlineMath math="P" />를 구해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="x" />좌표는{" "}
                                <InlineMath math="-5" />에서{" "}
                                <InlineMath math="5" />까지{" "}
                                <InlineMath math="10" />만큼 변하므로,
                                이를 <InlineMath math="5" />등분하면 한 칸에{" "}
                                <InlineMath math="2" />씩 증가합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        -5+2\cdot3=1
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="y" />좌표는{" "}
                                <InlineMath math="3" />에서{" "}
                                <InlineMath math="-2" />까지{" "}
                                <InlineMath math="-5" />만큼 변하므로,
                                이를 <InlineMath math="5" />등분하면 한 칸에{" "}
                                <InlineMath math="-1" />씩 변합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        3+(-1)\cdot3=0
                    `}
                            />

                            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-4">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="P(1,0)" />

                            </div>

                        </div>

                    </div>

                    {/* 좌표 공식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 좌표평면에서의 내분점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점의 좌표가
                        </p>

                        <BlockMath
                            math={String.raw`
                    A(x_1,y_1),\qquad B(x_2,y_2)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 선분{" "}
                            <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="m:n" />으로 내분하는 점{" "}
                            <InlineMath math="P" />는
                        </p>

                        <BlockMath
                            math={String.raw`
                    P=\frac{mB+nA}{m+n}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 각 좌표를 성분별로 계산하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    P\left(
                    \frac{mx_2+nx_1}{m+n},
                    \frac{my_2+ny_1}{m+n}
                    \right)
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                공식의 의미
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="P=\dfrac{mB+nA}{m+n}" />에
                                점 <InlineMath math="A,\ B" />의 좌표를 그대로 대입하여{" "}
                                <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표를 각각 계산한 것입니다.
                            </p>

                        </div>

                    </div>

                    {/* 가로와 세로의 내분비 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 가로와 세로도 같은 비율로 나뉜다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            기울어진 선분을 일정한 비율로 나누면
                            전체 선분뿐만 아니라 가로 방향과 세로 방향의 변화량도
                            같은 비율로 나뉩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AP}:\overline{PB}=m:n
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (x_P-x_A):(x_B-x_P)=m:n
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (y_P-y_A):(y_B-y_P)=m:n
                `}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                기울어진 선분도 가로 변화량과 세로 변화량을 각각 나누어
                                생각할 수 있습니다.
                            </p>

                        </div>

                    </div>

                    {/* 중점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            8. 선분의 중점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            중점은 선분을 <InlineMath math="1:1" />로 내분하는 점입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AM}:\overline{MB}=1:1
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    M=\frac{A+B}{2}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서{" "}
                            <InlineMath math="A(x_1,y_1)" />,{" "}
                            <InlineMath math="B(x_2,y_2)" />일 때 중점{" "}
                            <InlineMath math="M" />의 좌표는
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    M\left(
                    \frac{x_1+x_2}{2},
                    \frac{y_1+y_2}{2}
                    \right)
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <BlockMath
                                math={String.raw`
                        \overline{AB}\text{의 중점}
                        =
                        \overline{BA}\text{의 중점}
                    `}
                            />

                        </div>

                    </div>

                    {/* 분수식 해석 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            9. 분수식을 내분점으로 해석하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            내분점 공식은 점의 좌표뿐만 아니라
                            수나 식의 가중된 평균을 해석할 때도 사용할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \frac{m\square+n\triangle}{m+n}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            은 다음 두 가지 방법으로 해석할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \square\text{에서 }\triangle\text{를 }n:m\text{으로 내분한 값}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \triangle\text{에서 }\square\text{를 }m:n\text{으로 내분한 값}
                `}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 1
                            </p>

                            <BlockMath
                                math={String.raw`
                        \frac{3\sqrt{13}+5\sqrt2}{8}
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                는 <InlineMath math="\sqrt2" />에서{" "}
                                <InlineMath math="\sqrt{13}" />을{" "}
                                <InlineMath math="3:5" />로 내분한 값입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예시 2
                            </p>

                            <BlockMath
                                math={String.raw`
                        y=f(x)+2g(x)
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                이를 다음과 같이 나타낼 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        y
                        &=
                        3\left(
                        \frac{f(x)+2g(x)}{3}
                        \right)
                        \end{aligned}
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                괄호 안의 식은{" "}
                                <InlineMath math="f(x)" />에서{" "}
                                <InlineMath math="g(x)" />를{" "}
                                <InlineMath math="2:1" />로 내분한 값이므로,
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="y" />는{" "}
                                <InlineMath math="f(x)" />에서{" "}
                                <InlineMath math="g(x)" />를{" "}
                                <InlineMath math="2:1" />로 내분한 값의{" "}
                                <InlineMath math="3" />배입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="mb-3 font-bold text-purple-300">
                                확장된 의미
                            </p>

                            <p className="leading-8 text-gray-300">
                                내분점 공식은 두 점의 위치를 구하는 공식인 동시에,
                                두 수나 두 식에 서로 다른 비중을 주어 평균을 만드는
                                가중평균의 형태이기도 합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(3,1),\ B(-2,-4),\ C(8,6)" />
                            에 대하여 선분{" "}
                            <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="2:3" />으로 내분하는 점을{" "}
                            <InlineMath math="P" />, 선분{" "}
                            <InlineMath math="\overline{BC}" />를{" "}
                            <InlineMath math="3:2" />로 내분하는 점을{" "}
                            <InlineMath math="Q" />라 할 때, 선분{" "}
                            <InlineMath math="\overline{PQ}" />의 길이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="2:3" />으로 내분하는 점{" "}
                                <InlineMath math="P" />는 안쪽의 곱과 바깥쪽의 곱을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    P=\frac{2B+3A}{2+3}
                `}
                            />

                            <p className="leading-8">
                                입니다. 점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    \frac{
                    2(-2,-4)+3(3,1)
                    }{5}\\[6pt]
                    &=
                    \frac{
                    (-4,-8)+(9,3)
                    }{5}\\[6pt]
                    &=
                    \frac{(5,-5)}5\\[6pt]
                    &=(1,-1)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{BC}" />를{" "}
                                <InlineMath math="3:2" />로 내분하는 점{" "}
                                <InlineMath math="Q" />는
                            </p>

                            <BlockMath
                                math={String.raw`
                    Q=\frac{3C+2B}{3+2}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    Q
                    &=
                    \frac{
                    3(8,6)+2(-2,-4)
                    }5\\[6pt]
                    &=
                    \frac{
                    (24,18)+(-4,-8)
                    }5\\[6pt]
                    &=
                    \frac{(20,10)}5\\[6pt]
                    &=(4,2)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 두 점{" "}
                                <InlineMath math="P(1,-1),\ Q(4,2)" /> 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{PQ}
                    &=
                    \sqrt{(4-1)^2+\{2-(-1)\}^2}\\[6pt]
                    &=
                    \sqrt{3^2+3^2}\\[6pt]
                    &=
                    \sqrt{18}\\[6pt]
                    &=
                    3\sqrt2
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\overline{PQ}=3\sqrt2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    식을 만드는 요령
                                </p>

                                <div className="space-y-3 leading-8 text-gray-300">

                                    <p>
                                        • <InlineMath math="\overline{AB}" />를{" "}
                                        <InlineMath math="2:3" />으로 내분{" "}
                                        <InlineMath math="\;\longrightarrow\;2B+3A" />
                                    </p>

                                    <p>
                                        • <InlineMath math="\overline{BC}" />를{" "}
                                        <InlineMath math="3:2" />로 내분{" "}
                                        <InlineMath math="\;\longrightarrow\;3C+2B" />
                                    </p>

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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-1,-2),\ B(x,y)" />에 대하여 선분{" "}
                            <InlineMath math="\overline{AB}" /> 위의 점{" "}
                            <InlineMath math="P(5,-5)" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AP}=3\overline{PB}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시킬 때, <InlineMath math="xy" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                조건{" "}
                                <InlineMath math="\overline{AP}=3\overline{PB}" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AP}:\overline{PB}=3:1
                `}
                            />

                            <p className="leading-8">
                                이므로 점 <InlineMath math="P" />는 선분{" "}
                                <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="3:1" />로 내분하는 점입니다.
                            </p>

                            <p className="leading-8">
                                안쪽의 곱과 바깥쪽의 곱을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    P=\frac{3B+A}{3+1}
                `}
                            />

                            <p className="leading-8">
                                입니다. 주어진 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (5,-5)
                    =
                    \frac{3(x,y)+(-1,-2)}{4}
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="4" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (20,-20)
                    =
                    (3x-1,\ 3y-2)
                `}
                            />

                            <p className="leading-8">
                                순서쌍의 각 성분이 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    3x-1=20,\qquad 3y-2=-20
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=7,\qquad y=-6
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    xy=7\cdot(-6)=-42
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-42}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    식을 만드는 요령
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="\overline{AP}:\overline{PB}=3:1" />이므로
                                    선분 <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="3:1" />로 내분합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AB}\text{를 }3:1\text{로 내분}
                        \quad\longrightarrow\quad
                        P=\frac{3B+A}{4}
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(1,-5),\ B(6,a)" />에 대하여
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="2:b" />로 내분하는 점의 좌표가{" "}
                            <InlineMath math="(3,-1)" />일 때,
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="b:1" />로 내분하는 점의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="2:b" />로 내분하는 점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{2B+bA}{2+b}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (3,-1)
                    =
                    \frac{
                    2(6,a)+b(1,-5)
                    }{2+b}
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />좌표를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    3=\frac{12+b}{2+b}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    6+3b=12+b
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    b=3
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="y" />좌표를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    -1
                    =
                    \frac{2a-15}{5}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    -5=2a-15
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=5
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(1,-5),\qquad B(6,5)
                `}
                            />

                            <p className="leading-8">
                                이제 선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="3:1" />로 내분하는 점을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    \frac{3B+A}{3+1}\\[6pt]
                    &=
                    \frac{
                    3(6,5)+(1,-5)
                    }4\\[6pt]
                    &=
                    \frac{(19,10)}4\\[6pt]
                    &=
                    \left(
                    \frac{19}{4},
                    \frac52
                    \right)
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \left(
                        \frac{19}{4},
                        \frac52
                        \right)
                        }
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 첫 번째 내분 조건으로{" "}
                                    <InlineMath math="b" />와{" "}
                                    <InlineMath math="a" />를 구한 뒤,
                                    구한 값을 이용하여 새로운 내분점을 계산합니다.
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
                            두 점{" "}
                            <InlineMath math="P(0,-4),\ Q(6,0)" />
                            에 대하여 선분{" "}
                            <InlineMath math="\overline{PQ}" />를{" "}
                            <InlineMath math="k:1" />로 내분하는 점이
                            직선{" "}
                            <InlineMath math="x+y-2=0" />
                            위에 있을 때,
                            양수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{PQ}" />를{" "}
                                <InlineMath math="k:1" />로 내분하는 점을{" "}
                                <InlineMath math="R" />이라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    R=\frac{kQ+P}{k+1}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    R
                    &=
                    \frac{
                    k(6,0)+(0,-4)
                    }{k+1}\\[6pt]
                    &=
                    \left(
                    \frac{6k}{k+1},
                    \frac{-4}{k+1}
                    \right)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="R" />가 직선{" "}
                                <InlineMath math="x+y-2=0" />
                                위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{6k}{k+1}
                    +
                    \frac{-4}{k+1}
                    -2=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    6k-4-2(k+1)=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    4k-6=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    k=\frac32
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{k=\frac32}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 내분점의 좌표를{" "}
                                    <InlineMath math="R=\dfrac{kQ+P}{k+1}" />
                                    로 구한 뒤,
                                    직선의 방정식에 대입하여{" "}
                                    <InlineMath math="k" />를 구합니다.
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-2,4),\ B(1,-1)" />에 대하여
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="(1-t):t" />로 내분하는 점이
                            제1사분면 위에 있도록 하는 실수{" "}
                            <InlineMath math="t" />의 값의 범위가{" "}
                            <InlineMath math="\alpha<t<\beta" />일 때,{" "}
                            <InlineMath math="\dfrac1\alpha+\dfrac1\beta" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="(1-t):t" />로 내분하는 점을{" "}
                                <InlineMath math="P" />라 하면, 안쪽의 곱과 바깥쪽의 곱을 이용하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    P
                    =
                    \frac{(1-t)B+tA}{(1-t)+t}
                `}
                            />

                            <p className="leading-8">
                                입니다. 분모는{" "}
                                <InlineMath math="(1-t)+t=1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    P=(1-t)B+tA
                `}
                            />

                            <p className="leading-8">
                                입니다. 두 점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    (1-t)(1,-1)+t(-2,4)\\[6pt]
                    &=
                    (1-t,-1+t)+(-2t,4t)\\[6pt]
                    &=
                    (1-3t,-1+5t)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="P" />가 제1사분면 위에 있으려면{" "}
                                <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표가 모두 양수이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    1-3t>0,\qquad -1+5t>0
                `}
                            />

                            <p className="leading-8">
                                각각의 부등식을 풀면
                            </p>

                            <BlockMath
                                math={String.raw`
                    t<\frac13,\qquad t>\frac15
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac15<t<\frac13
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \alpha=\frac15,\qquad
                    \beta=\frac13
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \frac1\alpha+\frac1\beta
                    &=
                    \frac{1}{\frac15}
                    +
                    \frac{1}{\frac13}\\[6pt]
                    &=5+3\\[6pt]
                    &=8
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{8}" />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    식을 만드는 요령
                                </p>

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="(1-t):t" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P
                        =
                        \frac{(1-t)B+tA}{(1-t)+t}
                        =
                        (1-t)B+tA
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 두 비율의 합이{" "}
                                    <InlineMath math="1" />이어서 내분점의 좌표가 간단하게
                                    나타납니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    제1사분면의 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x>0,\qquad y>0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    좌표축 위의 점은 어느 사분면에도 속하지 않으므로
                                    등호를 포함하지 않습니다.
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(2,3),\ B(-1,6)" />
                            을 이은 선분{" "}
                            <InlineMath math="\overline{AB}" />의 연장선 위의 점{" "}
                            <InlineMath math="C" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AB}=3\overline{BC}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 점 <InlineMath math="C" />의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                조건에서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}=3\overline{BC}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}:\overline{BC}=3:1
                `}
                            />

                            <p className="leading-8">
                                또한
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AC}
                    =
                    \overline{AB}
                    +
                    \overline{BC}
                    =
                    4\overline{BC}
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}:\overline{AC}=3:4
                `}
                            />

                            <p className="leading-8">
                                따라서 점 <InlineMath math="B" />는
                                선분 <InlineMath math="\overline{AC}" />를{" "}
                                <InlineMath math="3:1" />로 내분하는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    B=\frac{3C+A}{4}
                `}
                            />

                            <p className="leading-8">
                                점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-1,6)
                    =
                    \frac{3(x,y)+(2,3)}4
                `}
                            />

                            <p className="leading-8">
                                양변에 4를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-4,24)
                    =
                    (3x+2,\ 3y+3)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    3x=-6,\qquad
                    3y=21
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x=-2,\qquad
                    y=7
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{C(-2,7)}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    외분점을 사용하지 않고,{" "}
                                    <InlineMath math="\overline{AC}=\overline{AB}+\overline{BC}" />
                                    를 이용하여
                                    점 <InlineMath math="B" />를
                                    선분 <InlineMath math="\overline{AC}" />의 내분점으로
                                    바꾸면 내분점 공식만으로 해결할 수 있습니다.
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-3,-2)" />,{" "}
                            <InlineMath math="B" />와
                            선분 <InlineMath math="\overline{AB}" />의 연장선 위의 점{" "}
                            <InlineMath math="C(18,7)" />에 대하여
                        </p>

                        <BlockMath math={String.raw`2\overline{AB}=\overline{BC}`} />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 점{" "}
                            <InlineMath math="B" />의 좌표를 모두 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="B" />의 위치는 두 가지가 가능합니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    경우 ①  A-B-C
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="2\overline{AB}=\overline{BC}" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AB}:\overline{BC}=1:2
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AC}
                        =
                        3\overline{AB}
                    `}
                                />

                                <p className="leading-8">
                                    즉,{" "}
                                    <InlineMath math="B" />는 선분{" "}
                                    <InlineMath math="\overline{AC}" />를{" "}
                                    <InlineMath math="1:2" />로 내분합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        B=\frac{C+2A}{3}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        B
                        &=
                        \frac{(18,7)+2(-3,-2)}3\\[6pt]
                        &=
                        \frac{(12,3)}3\\[6pt]
                        &=(4,1)
                        \end{aligned}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    경우 ②  B-A-C
                                </p>

                                <p className="leading-8">
                                    이번에는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{BC}
                        =
                        \overline{BA}
                        +
                        \overline{AC}
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2\overline{BA}
                        =
                        \overline{BA}
                        +
                        \overline{AC}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \overline{BA}
                        =
                        \overline{AC}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=\frac{B+C}{2}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (-3,-2)
                        &=
                        \frac{(x,y)+(18,7)}2
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (x,y)=(-24,-11)
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        B=(4,1),\ (-24,-11)
                        }
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    외분점을 사용하지 않고,
                                    점의 위치를 두 가지 경우로 나누면
                                    모두 내분점 공식만으로 해결할 수 있습니다.
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위의 세 점{" "}
                                <InlineMath math="A(-3,8),\ B(-5,-6),\ C(7,6)" />
                                을 꼭짓점으로 하는 삼각형{" "}
                                <InlineMath math="ABC" />의 변{" "}
                                <InlineMath math="\overline{BC}" /> 위의 점{" "}
                                <InlineMath math="P" />에 대하여 삼각형{" "}
                                <InlineMath math="APC" />의 넓이가 삼각형{" "}
                                <InlineMath math="ABP" />의 넓이의{" "}
                                <InlineMath math="3" />배일 때, 점{" "}
                                <InlineMath math="P" />의 좌표가{" "}
                                <InlineMath math="(a,b)" />이다.
                                <br />
                                상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.6_8.png"
                                alt="삼각형 ABC의 변 BC 위에 있는 점 P"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형 <InlineMath math="APC" />와 삼각형{" "}
                                <InlineMath math="ABP" />는 꼭짓점{" "}
                                <InlineMath math="A" />에서 직선{" "}
                                <InlineMath math="BC" />에 내린 높이가 같습니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 삼각형의 넓이의 비는 각각의 밑변인{" "}
                                <InlineMath math="\overline{PC}" />와{" "}
                                <InlineMath math="\overline{BP}" />의 길이의 비와 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \triangle APC:\triangle ABP
                    =
                    \overline{PC}:\overline{BP}
                `}
                            />

                            <p className="leading-8">
                                삼각형 <InlineMath math="APC" />의 넓이가 삼각형{" "}
                                <InlineMath math="ABP" />의 넓이의{" "}
                                <InlineMath math="3" />배이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{PC}:\overline{BP}=3:1
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{BP}:\overline{PC}=1:3
                `}
                            />

                            <p className="leading-8">
                                이므로 점 <InlineMath math="P" />는 선분{" "}
                                <InlineMath math="\overline{BC}" />를{" "}
                                <InlineMath math="1:3" />으로 내분하는 점입니다.
                            </p>

                            <p className="leading-8">
                                안쪽의 곱과 바깥쪽의 곱을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    P=\frac{C+3B}{1+3}
                `}
                            />

                            <p className="leading-8">
                                점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    \frac{(7,6)+3(-5,-6)}4\\[6pt]
                    &=
                    \frac{(7,6)+(-15,-18)}4\\[6pt]
                    &=
                    \frac{(-8,-12)}4\\[6pt]
                    &=
                    (-2,-3)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-2,\qquad b=-3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a+b=-2+(-3)=-5
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{-5}" />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 직선 위에 밑변을 두고 높이가 같은 두 삼각형의
                                    넓이의 비는 밑변의 길이의 비와 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \triangle APC:\triangle ABP
                        =
                        \overline{PC}:\overline{BP}
                        =
                        3:1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    내분점 공식에는 이동 방향에 맞게{" "}
                                    <InlineMath math="\overline{BP}:\overline{PC}=1:3" />
                                    을 사용해야 합니다.
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-2,4),\ B(5,-2)" />
                            를 이은 선분{" "}
                            <InlineMath math="\overline{AB}" />를
                            <InlineMath math="t:(1-t)" />로 내분하는 점이
                            제1사분면에 속하도록 하는 실수{" "}
                            <InlineMath math="t" />의 값의 범위가{" "}
                            <InlineMath math="a<t<b" />일 때,{" "}
                            <InlineMath math="7a+3b" />의 값을 구하시오.
                            <br />
                            <span className="text-sm text-gray-400">
                                (단,{" "}
                                <InlineMath math="0<t<1" />
                                )
                            </span>
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분{" "}
                                <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="t:(1-t)" />로 내분하는 점을{" "}
                                <InlineMath math="P" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    P
                    =
                    \frac{
                    tB+(1-t)A
                    }{
                    t+(1-t)
                    }
                    =
                    tB+(1-t)A
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    P
                    &=
                    t(5,-2)
                    +(1-t)(-2,4)\\[6pt]
                    &=
                    (5t,-2t)
                    +(-2+2t,\ 4-4t)\\[6pt]
                    &=
                    (7t-2,\ 4-6t)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                점{" "}
                                <InlineMath math="P" />가 제1사분면에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{cases}
                    7t-2>0\\
                    4-6t>0
                    \end{cases}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{cases}
                    t>\dfrac27\\[6pt]
                    t<\dfrac23
                    \end{cases}
                `}
                            />

                            <p className="leading-8">
                                또한{" "}
                                <InlineMath math="0<t<1" />을 만족하므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac27<t<\frac23
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=\frac27,\qquad
                    b=\frac23
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    7a+3b
                    &=
                    7\cdot\frac27
                    +
                    3\cdot\frac23\\[6pt]
                    &=2+2\\[6pt]
                    &=4
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{4}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    비율의 합이{" "}
                                    <InlineMath math="1" />이므로 내분점의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        P=tB+(1-t)A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    처럼 간단히 나타낼 수 있습니다.
                                    이후 제1사분면의 조건{" "}
                                    <InlineMath math="x>0,\ y>0" />을 이용하여{" "}
                                    <InlineMath math="t" />의 범위를 구하면 됩니다.
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                직선
                                <InlineMath math="y=\dfrac14x" /> 위의 두 점{" "}
                                <InlineMath math="A(4,1),\ B(a,b)" />가 있다.
                                제2사분면 위의 한 점 <InlineMath math="C" />에 대하여
                                삼각형 <InlineMath math="BOC" />와 삼각형{" "}
                                <InlineMath math="OAC" />의 넓이의 비가{" "}
                                <InlineMath math="3:1" />일 때,{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                                <br />
                                <span className="text-sm text-gray-400">
                                    (단, <InlineMath math="a<0" />이고,{" "}
                                    <InlineMath math="O" />는 원점이다.)
                                </span>
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.6_10.png"
                                alt="직선 y=x/4 위의 두 점 A와 B, 제2사분면의 점 C"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 점 <InlineMath math="A,\ B" />와 원점{" "}
                                <InlineMath math="O" />는 모두 직선{" "}
                                <InlineMath math="y=\dfrac14x" /> 위에 있으므로
                                한 직선 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                삼각형 <InlineMath math="BOC" />와 삼각형{" "}
                                <InlineMath math="OAC" />는 꼭짓점{" "}
                                <InlineMath math="C" />에서 직선{" "}
                                <InlineMath math="AB" />에 내린 높이가 같습니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 삼각형의 넓이의 비는 각각의 밑변인{" "}
                                <InlineMath math="\overline{OB}" />와{" "}
                                <InlineMath math="\overline{OA}" />의 길이의 비와 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \triangle BOC:\triangle OAC
                    =
                    \overline{OB}:\overline{OA}
                    =
                    3:1
                `}
                            />

                            <p className="leading-8">
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{OB}=3\overline{OA}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="A(4,1)" />은 제1사분면에 있고,{" "}
                                <InlineMath math="a<0" />이므로 점{" "}
                                <InlineMath math="B(a,b)" />는 같은 직선 위의
                                제3사분면에 있습니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 점은
                            </p>

                            <BlockMath
                                math={String.raw`
                    B-O-A
                `}
                            />

                            <p className="leading-8">
                                순서대로 놓이고, 원점 <InlineMath math="O" />는 선분{" "}
                                <InlineMath math="\overline{BA}" />를{" "}
                                <InlineMath math="3:1" />로 내분하는 점입니다.
                            </p>

                            <p className="leading-8">
                                안쪽의 곱과 바깥쪽의 곱을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    O=\frac{3A+B}{3+1}
                `}
                            />

                            <p className="leading-8">
                                이므로 좌표를 대입하여
                            </p>

                            <BlockMath
                                math={String.raw`
                    (0,0)
                    =
                    \frac{3(4,1)+(a,b)}4
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="4" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (0,0)=(12+a,\ 3+b)
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-12,\qquad b=-3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a+b=-12+(-3)=-15
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{-15}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    같은 직선 위에 밑변을 두고 높이가 같은 두 삼각형의
                                    넓이의 비는 밑변의 길이의 비와 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \triangle BOC:\triangle OAC
                        =
                        \overline{OB}:\overline{OA}
                        =
                        3:1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이후 원점 <InlineMath math="O" />를 선분{" "}
                                    <InlineMath math="\overline{BA}" />의 내분점으로 해석하면
                                    외분점 공식을 사용하지 않고도 점{" "}
                                    <InlineMath math="B" />의 좌표를 구할 수 있습니다.
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

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 네 점{" "}
                            <InlineMath math="A(-1,0),\ B(a,1),\ C(0,3),\ D(-3,b)" />
                            에 대하여 사각형{" "}
                            <InlineMath math="ABCD" />가 평행사변형일 때,{" "}
                            <InlineMath math="ab" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                평행사변형의 두 대각선은 서로를 이등분합니다.
                            </p>

                            <p className="leading-8">
                                따라서 대각선{" "}
                                <InlineMath math="\overline{AC}" />의 중점과
                                대각선{" "}
                                <InlineMath math="\overline{BD}" />의 중점은 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{A+C}{2}
                    =
                    \frac{B+D}{2}
                `}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="2" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    A+C=B+D
                `}
                            />

                            <p className="leading-8">
                                각 점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-1,0)+(0,3)
                    =
                    (a,1)+(-3,b)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (-1,3)
                    =
                    (a-3,\ b+1)
                `}
                            />

                            <p className="leading-8">
                                순서쌍의 각 성분이 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a-3=-1,\qquad b+1=3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=2,\qquad b=2
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    ab=2\cdot2=4
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{4}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    평행사변형의 두 대각선은 서로를 이등분하므로
                                    두 대각선의 중점이 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{A+C}{2}
                        =
                        \frac{B+D}{2}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    점을 순서쌍처럼 계산하면 다음과 같이 간단히 나타낼 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{A+C=B+D}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            네 점{" "}
                            <InlineMath math="A(2,1),\ B(b,5),\ C(a,7),\ D(-2,3)" />
                            을 꼭짓점으로 하는 사각형{" "}
                            <InlineMath math="ABCD" />가 마름모일 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                            <br />
                            <span className="text-sm text-gray-400">
                                (단,{" "}
                                <InlineMath math="a&lt;0" />
                                )
                            </span>
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                마름모는 평행사변형이므로 두 대각선은 서로를 이등분합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{A+C}{2}
                    =
                    \frac{B+D}{2}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    A+C=B+D
                `}
                            />

                            <p className="leading-8">
                                좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (2,1)+(a,7)
                    =
                    (b,5)+(-2,3)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a+2,8)
                    =
                    (b-2,8)
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+2=b-2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    b=a+4
                `}
                            />

                            <p className="leading-8">
                                또한 마름모의 모든 변의 길이는 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \overline{BC}
                `}
                            />

                            <p className="leading-8">
                                양변을 제곱하여 계산하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (b-2)^2+4^2
                    =
                    (a-b)^2+2^2
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="b=a+4" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (a+2)^2+16
                    =
                    (-4)^2+4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (a+2)^2=4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=0
                    \quad\text{또는}\quad
                    a=-4
                `}
                            />

                            <p className="leading-8">
                                조건{" "}
                                <InlineMath math="a&lt;0" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=-4
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    b=a+4=0
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a+b=-4+0=-4
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{-4}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-300">
                                    <li>마름모는 평행사변형이므로 <InlineMath math="A+C=B+D" />를 먼저 이용한다.</li>
                                    <li><InlineMath math="b=a+4" />를 구한 뒤 변의 길이가 같다는 조건을 사용하면 미지수가 하나가 된다.</li>
                                    <li>마지막으로 <InlineMath math="a&lt;0" /> 조건으로 해를 선택한다.</li>
                                </ul>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 13 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 13
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            수직선 위에 두 점{" "}
                            <InlineMath math="P(\sqrt2),\ Q(\sqrt3)" />이 있다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            세 점
                        </p>

                        <BlockMath
                            math={String.raw`
                A\left(\frac{\sqrt2+\sqrt3}{2}\right),\qquad
                B\left(\frac{2\sqrt2+\sqrt3}{3}\right),\qquad
                C\left(\frac{\sqrt2+3\sqrt3}{4}\right)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 수직선 위에 나타낼 때, 위치가 왼쪽인 점부터 순서대로 나열하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 점의 좌표를{" "}
                                <InlineMath math="\sqrt2" />와{" "}
                                <InlineMath math="\sqrt3" /> 사이의 내분점으로 해석합니다.
                            </p>

                            {/* 점 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    점 <InlineMath math="A" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{\sqrt2+\sqrt3}{2}
                        =
                        \frac{1\cdot\sqrt3+1\cdot\sqrt2}{1+1}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 점 <InlineMath math="A" />는{" "}
                                    <InlineMath math="\sqrt2" />와{" "}
                                    <InlineMath math="\sqrt3" />을{" "}
                                    <InlineMath math="1:1" />로 나누는 중점입니다.
                                </p>

                            </div>

                            {/* 점 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    점 <InlineMath math="B" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{2\sqrt2+\sqrt3}{3}
                        =
                        \frac{1\cdot\sqrt3+2\cdot\sqrt2}{1+2}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이는
                                    <InlineMath math="\sqrt2" />에서{" "}
                                    <InlineMath math="\sqrt3" />을{" "}
                                    <InlineMath math="1:2" />로 내분한 값입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 점 <InlineMath math="B" />는 점{" "}
                                    <InlineMath math="A" />보다{" "}
                                    <InlineMath math="\sqrt2" />에 더 가깝습니다.
                                </p>

                            </div>

                            {/* 점 C */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    점 <InlineMath math="C" />
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{\sqrt2+3\sqrt3}{4}
                        =
                        \frac{3\cdot\sqrt3+1\cdot\sqrt2}{3+1}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이는
                                    <InlineMath math="\sqrt2" />에서{" "}
                                    <InlineMath math="\sqrt3" />을{" "}
                                    <InlineMath math="3:1" />로 내분한 값입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 점 <InlineMath math="C" />는 세 점 중{" "}
                                    <InlineMath math="\sqrt3" />에 가장 가깝습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                <InlineMath math="\sqrt2<\sqrt3" />이므로 수직선에서{" "}
                                <InlineMath math="\sqrt2" />가 왼쪽,{" "}
                                <InlineMath math="\sqrt3" />이 오른쪽에 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt2
                    <
                    \frac{2\sqrt2+\sqrt3}{3}
                    <
                    \frac{\sqrt2+\sqrt3}{2}
                    <
                    \frac{\sqrt2+3\sqrt3}{4}
                    <
                    \sqrt3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 왼쪽에 있는 점부터 나열하면
                                </p>

                                <BlockMath math={String.raw`\boxed{B,\ A,\ C}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    각 분수식을 두 수{" "}
                                    <InlineMath math="\sqrt2,\ \sqrt3" /> 사이의
                                    내분점으로 해석하면, 근삿값을 구하지 않고도 위치를 비교할 수 있습니다.
                                </p>

                                <div className="mt-4 space-y-3 text-gray-300">

                                    <p>
                                        • <InlineMath math="B" />:{" "}
                                        <InlineMath math="\sqrt2" />에 가장 가까운 점
                                    </p>

                                    <p>
                                        • <InlineMath math="A" />:
                                        두 점의 중점
                                    </p>

                                    <p>
                                        • <InlineMath math="C" />:{" "}
                                        <InlineMath math="\sqrt3" />에 가장 가까운 점
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 14 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 14
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 이차함수{" "}
                                <InlineMath math="y=ax^2\;(a>0)" />의 그래프와 직선{" "}
                                <InlineMath math="y=2x+1" />이 서로 다른 두 점{" "}
                                <InlineMath math="P,\ Q" />에서 만난다.
                                선분 <InlineMath math="\overline{PQ}" />의 중점
                                <InlineMath math="M" />에서{" "}
                                <InlineMath math="y" />축에 내린 수선의 발을{" "}
                                <InlineMath math="H" />라 하자.
                                <br />
                                <InlineMath math="\overline{MH}=2" />일 때, 선분{" "}
                                <InlineMath math="\overline{PQ}" />의 길이를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.6_14.png"
                                alt="이차함수와 직선의 두 교점 P, Q와 선분 PQ의 중점 M"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 교점 <InlineMath math="P,\ Q" />의{" "}
                                <InlineMath math="x" />좌표를 각각{" "}
                                <InlineMath math="\alpha,\ \beta" />라 하면,
                                두 점은 이차함수와 직선 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    ax^2=2x+1
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    ax^2-2x-1=0
                `}
                            />

                            <p className="leading-8">
                                의 두 근이 <InlineMath math="\alpha,\ \beta" />입니다.
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \alpha+\beta=\frac{2}{a},
                    \qquad
                    \alpha\beta=-\frac{1}{a}
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                중점 <InlineMath math="M" />의{" "}
                                <InlineMath math="x" />좌표는 두 교점의{" "}
                                <InlineMath math="x" />좌표의 평균이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    x_M
                    =
                    \frac{\alpha+\beta}{2}
                    =
                    \frac{1}{a}
                `}
                            />

                            <p className="leading-8">
                                입니다. <InlineMath math="a>0" />이고{" "}
                                <InlineMath math="\overline{MH}=2" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{1}{a}=2
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=\frac12
                `}
                            />

                            <p className="leading-8">
                                따라서 두 교점의 <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac12x^2-2x-1=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x^2-4x-2=0
                `}
                            />

                            <p className="leading-8">
                                의 두 근입니다. 두 근의 차를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    (\alpha-\beta)^2
                    &=
                    (\alpha+\beta)^2-4\alpha\beta\\[6pt]
                    &=
                    4^2-4(-2)\\[6pt]
                    &=24
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    |\alpha-\beta|=2\sqrt6
                `}
                            />

                            <p className="leading-8">
                                두 점 <InlineMath math="P,\ Q" />는 직선{" "}
                                <InlineMath math="y=2x+1" /> 위에 있으므로,{" "}
                                <InlineMath math="x" />좌표의 차가{" "}
                                <InlineMath math="2\sqrt6" />일 때{" "}
                                <InlineMath math="y" />좌표의 차는
                            </p>

                            <BlockMath
                                math={String.raw`
                    2\cdot2\sqrt6=4\sqrt6
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{PQ}
                    &=
                    \sqrt{
                    (2\sqrt6)^2+(4\sqrt6)^2
                    }\\[6pt]
                    &=
                    \sqrt{24+96}\\[6pt]
                    &=
                    \sqrt{120}\\[6pt]
                    &=
                    2\sqrt{30}
                    \end{aligned}
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{2\sqrt{30}}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 교점의 중점의{" "}
                                    <InlineMath math="x" />좌표는 교점의{" "}
                                    <InlineMath math="x" />좌표를 근으로 하는 이차방정식에서
                                    두 근의 평균입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x_M
                        =
                        \frac{\alpha+\beta}{2}
                        =
                        \frac1a
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 두 교점은 기울기가{" "}
                                    <InlineMath math="2" />인 같은 직선 위에 있으므로{" "}
                                    <InlineMath math="x" />좌표의 차를 알면{" "}
                                    <InlineMath math="y" />좌표의 차도 바로 구할 수 있습니다.
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

                        <p className="leading-8">
                            • 선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="m:n" />으로 내분하는 점{" "}
                            <InlineMath math="P" />는
                        </p>

                        <BlockMath
                            math={String.raw`
                    P=\frac{mB+nA}{m+n}
                `}
                        />

                        <p className="leading-8">
                            • 문제에 보이는 두 점과 비율을 나란히 놓고
                            안쪽의 곱과 바깥쪽의 곱을 더하여 비율의 합으로 나눈다.
                        </p>

                        <p className="leading-8">
                            • 선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="m:n" />으로 내분하는 점은
                            선분 <InlineMath math="\overline{BA}" />를{" "}
                            <InlineMath math="n:m" />으로 내분하는 점과 같다.
                        </p>

                        <p className="leading-8">
                            • 중점은 선분을 <InlineMath math="1:1" />로 내분하는 점이다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    M=\frac{A+B}{2}
                `}
                        />

                        <p className="leading-8">
                            • 기울어진 선분을 내분하면 가로 방향과 세로 방향도
                            같은 비율로 나뉜다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.7 삼각형의 내각의 이등분선 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.7 삼각형의 내각의 이등분선
                </h2>

                <p className="leading-8 text-gray-300">
                    삼각형에서 한 내각의 이등분선은 마주 보는 변을 양옆 두 변의 길이의 비로 나눕니다.
                    <br />
                    좌표 문제에서는 이 성질을 이용하여 내분점 공식으로 쉽게 해결할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 내각의 이등분선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 내각의 이등분선 정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            꼭짓점에서 그은 내각의 이등분선은 마주 보는 변을
                            양옆 두 변의 길이의 비로 나눕니다.
                        </p>

                        <div className="mt-6 flex justify-center">

                            <div className="rounded-xl bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.7.png"
                                    alt="삼각형의 내각의 이등분선"
                                    className="block h-auto w-[420px]"
                                />
                            </div>
                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-5 text-gray-300">

                                <div>

                                    <p className="font-bold text-white">
                                        변의 길이의 비
                                    </p>

                                    <BlockMath
                                        math="x:y=m:n"
                                    />

                                </div>

                                <div>

                                    <p className="font-bold text-white">
                                        넓이의 비
                                    </p>

                                    <BlockMath
                                        math="S_1:S_2=m:n"
                                    />

                                </div>

                                <div>

                                    <p className="font-bold text-white">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math="x:y=m:n=S_1:S_2"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 내분점으로 해석 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 내분점으로 해석하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P" />는
                            선분 <InlineMath math="\overline{AB}" />를{" "}
                            <InlineMath math="m:n" />으로 내분하는 점입니다.
                            <br />
                            또한{" "}
                            <InlineMath math="m:n=x:y=S_1:S_2" />
                            이므로 어떤 비를 이용해도 같은 내분점을 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div className="space-y-5 text-gray-300">

                                <div>

                                    <p className="font-bold text-white">
                                        내분점
                                    </p>

                                    <BlockMath
                                        math="P=\frac{mB+nA}{m+n}"
                                    />

                                </div>

                                <div>

                                    <p className="font-bold text-white">
                                        변의 길이로 나타내기
                                    </p>

                                    <BlockMath
                                        math="P=\frac{xB+yA}{x+y}"
                                    />

                                </div>

                                <div>

                                    <p className="font-bold text-white">
                                        넓이로 나타내기
                                    </p>

                                    <BlockMath
                                        math="P=\frac{S_1B+S_2A}{S_1+S_2}"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 활용 */}
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="mb-3 font-bold text-blue-300">
                            문제를 푸는 요령
                        </p>

                        <p className="leading-8 text-gray-300">
                            내각의 이등분선이 나오면 먼저{" "}
                            <InlineMath math="x:y=m:n=S_1:S_2" />
                            를 이용하여 비를 찾습니다.
                            <br />
                            이후 점{" "}
                            <InlineMath math="P" />
                            를 내분점으로 생각하면 대부분의 좌표 문제를 쉽게 해결할 수 있습니다.
                        </p>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이
                                세 점{" "}
                                <InlineMath math="A(1,2),\ B(-3,0),\ C(4,-4)" />
                                를 꼭짓점으로 하는 삼각형{" "}
                                <InlineMath math="ABC" />
                                에서{" "}
                                <InlineMath math="\angle A" />
                                의 이등분선이
                                변{" "}
                                <InlineMath math="\overline{BC}" />
                                와 만나는 점을{" "}
                                <InlineMath math="D(a,b)" />
                                라 할 때,{" "}
                                <InlineMath math="a-b" />
                                의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.7_1.png"
                                alt="삼각형의 내각의 이등분선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 변의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \sqrt{(-4)^2+(-2)^2}
                    =
                    2\sqrt5
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \overline{AC}
                    =
                    \sqrt{3^2+(-6)^2}
                    =
                    3\sqrt5
                `}
                            />

                            <p className="leading-8">
                                내각의 이등분선 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{BD}:\overline{DC}
                    =
                    \overline{AB}:\overline{AC}
                    =
                    2:3
                `}
                            />

                            <p className="leading-8">
                                따라서 점{" "}
                                <InlineMath math="D" />
                                는 선분{" "}
                                <InlineMath math="\overline{BC}" />
                                를{" "}
                                <InlineMath math="2:3" />
                                으로 내분하는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    D
                    =
                    \frac{2C+3B}{5}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    =
                    \frac{2(4,-4)+3(-3,0)}5
                    =
                    \left(
                    -\frac15,
                    -\frac85
                    \right)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a-b
                    =
                    -\frac15-
                    \left(
                    -\frac85
                    \right)
                    =
                    \frac75
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac75}
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

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(4,9),\ B(0,1),\ C(6,5)" />
                            를 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            에서{" "}
                            <InlineMath math="\angle A" />
                            의 이등분선이
                            변{" "}
                            <InlineMath math="\overline{BC}" />
                            와 만나는 점{" "}
                            <InlineMath math="D" />
                            의 좌표를{" "}
                            <InlineMath math="(a,b)" />
                            라 할 때,{" "}
                            <InlineMath math="a+b" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 두 변의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \sqrt{(-4)^2+(-8)^2}
                    =
                    4\sqrt5
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \overline{AC}
                    =
                    \sqrt{2^2+(-4)^2}
                    =
                    2\sqrt5
                `}
                            />

                            <p className="leading-8">
                                내각의 이등분선 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{BD}:\overline{DC}
                    =
                    \overline{AB}:\overline{AC}
                    =
                    2:1
                `}
                            />

                            <p className="leading-8">
                                따라서 점{" "}
                                <InlineMath math="D" />
                                는 선분{" "}
                                <InlineMath math="\overline{BC}" />
                                를{" "}
                                <InlineMath math="2:1" />
                                로 내분하는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    D
                    =
                    \frac{2C+B}{3}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    =
                    \frac{2(6,5)+(0,1)}3
                    =
                    \left(4,\frac{11}3\right)
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a+b
                    =
                    4+\frac{11}3
                    =
                    \frac{23}3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\frac{23}{3}}
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

                        <p className="leading-8 text-gray-300">
                            두 점{" "}
                            <InlineMath math="A(-3,0),\ B(3,4)" />
                            를 이은 선분{" "}
                            <InlineMath math="\overline{AB}" />
                            위의 점{" "}
                            <InlineMath math="P" />
                            가{" "}
                            <InlineMath math="\angle AOP=\angle BOP" />
                            를 만족시킬 때,
                            직선{" "}
                            <InlineMath math="OP" />
                            의 방정식을 구하시오.
                            <br />
                            <span className="text-sm text-gray-400">
                                (단, <InlineMath math="O" />는 원점이다.)
                            </span>
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점{" "}
                                <InlineMath math="P" />
                                는 삼각형{" "}
                                <InlineMath math="OAB" />
                                에서{" "}
                                <InlineMath math="\angle AOB" />
                                의 이등분선과
                                선분{" "}
                                <InlineMath math="\overline{AB}" />
                                의 교점입니다.
                            </p>

                            <p className="leading-8">
                                먼저 두 변의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{OA}=3,\qquad
                    \overline{OB}=5
                `}
                            />

                            <p className="leading-8">
                                내각의 이등분선 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AP}:\overline{PB}
                    =
                    \overline{OA}:\overline{OB}
                    =
                    3:5
                `}
                            />

                            <p className="leading-8">
                                따라서 점{" "}
                                <InlineMath math="P" />
                                는 선분{" "}
                                <InlineMath math="\overline{AB}" />
                                를{" "}
                                <InlineMath math="3:5" />
                                로 내분하는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    P
                    =
                    \frac{3B+5A}{8}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    =
                    \frac{
                    3(3,4)+5(-3,0)
                    }8
                    =
                    \left(
                    -\frac34,
                    \frac32
                    \right)
                `}
                            />

                            <p className="leading-8">
                                직선{" "}
                                <InlineMath math="OP" />
                                의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{\frac32}{-\frac34}
                    =-2
                `}
                            />

                            <p className="leading-8">
                                원점을 지나므로 직선{" "}
                                <InlineMath math="OP" />
                                의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=-2x
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{y=-2x}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    삼각형{" "}
                                    <InlineMath math="OAB" />
                                    에서{" "}
                                    <InlineMath math="OP" />
                                    는 내각의 이등분선입니다.
                                    따라서 먼저{" "}
                                    <InlineMath math="\overline{AP}:\overline{PB}=\overline{OA}:\overline{OB}" />
                                    를 이용하여 점{" "}
                                    <InlineMath math="P" />
                                    의 좌표를 구한 뒤,
                                    원점과 점{" "}
                                    <InlineMath math="P" />
                                    를 지나는 직선의 방정식을 구하면 됩니다.
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위의
                                세 점{" "}
                                <InlineMath math="A(0,a),\ B(-4,0),\ C(2,0)" />
                                를 꼭짓점으로 하는 삼각형{" "}
                                <InlineMath math="ABC" />
                                가 있다.
                                <br />
                                <InlineMath math="\angle ABC" />
                                의 이등분선이
                                선분{" "}
                                <InlineMath math="\overline{AC}" />
                                의 중점을 지날 때,
                                양수{" "}
                                <InlineMath math="a" />
                                의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.7_4.png"
                                alt="삼각형의 내각의 이등분선"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                선분{" "}
                                <InlineMath math="\overline{AC}" />
                                의 중점을{" "}
                                <InlineMath math="M" />
                                이라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    M
                    =
                    \left(
                    \frac{0+2}{2},
                    \frac{a+0}{2}
                    \right)
                    =
                    \left(
                    1,
                    \frac a2
                    \right)
                `}
                            />

                            <p className="leading-8">
                                점{" "}
                                <InlineMath math="M" />
                                은{" "}
                                <InlineMath math="\angle ABC" />
                                의 이등분선 위의 점이므로
                                내각의 이등분선 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AM}
                    :
                    \overline{MC}
                    =
                    \overline{AB}
                    :
                    \overline{BC}
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="M" />은 중점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AM}
                    :
                    \overline{MC}
                    =
                    1:1
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \overline{BC}
                `}
                            />

                            <p className="leading-8">
                                이제 각 변의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{AB}
                    =
                    \sqrt{4^2+a^2}
                    =
                    \sqrt{16+a^2}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \overline{BC}
                    =
                    6
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \sqrt{16+a^2}=6
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    16+a^2=36
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a^2=20
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=2\sqrt5
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2\sqrt5}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    내각의 이등분선이 선분{" "}
                                    <InlineMath math="\overline{AC}" />
                                    의 중점을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AM}
                        :
                        \overline{MC}
                        =
                        1:1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 내각의 이등분선 정리에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AB}
                        :
                        \overline{BC}
                        =
                        1:1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉,{" "}
                                    <InlineMath math="\overline{AB}=\overline{BC}" />
                                    임을 이용하면 쉽게 해결할 수 있습니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

            </section>

            {/* 1.8 삼각형의 무게중심과 중선정리 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.8 삼각형의 무게중심과 중선정리
                </h2>

                <p className="leading-8 text-gray-300">
                    삼각형의 꼭짓점과 마주 보는 변의 중점을 이은 선분을 중선이라고 합니다.
                    <br />
                    삼각형의 세 중선은 한 점에서 만나며, 이 점을 삼각형의 무게중심이라고 합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 중선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 삼각형의 중선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 한 꼭짓점과 그 꼭짓점의 대변의 중점을 이은 선분을
                            중선이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            삼각형은 세 개의 꼭짓점을 가지므로 중선도 세 개입니다.
                        </p>

                        <div className="mt-6 flex justify-center">
                            <div className="rounded-xl bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.8_1.png"
                                    alt="삼각형의 세 중선과 무게중심"
                                    className="block h-auto w-[300px]"
                                />
                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                중선의 정의
                            </p>

                            <p className="leading-8 text-gray-300">
                                삼각형 <InlineMath math="ABC" />에서 점{" "}
                                <InlineMath math="D" />이 선분{" "}
                                <InlineMath math="\overline{BC}" />의 중점이면,
                                선분 <InlineMath math="\overline{AD}" />은
                                꼭짓점 <InlineMath math="A" />에서 그은 중선입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \overline{BD}=\overline{DC}
                    `}
                            />

                        </div>

                    </div>

                    {/* 무게중심 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 삼각형의 무게중심
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 세 중선은 항상 한 점에서 만납니다.
                            이 교점을 삼각형의 무게중심이라고 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            무게중심은 각 중선을 꼭짓점에서 대변의 중점을 향하는 방향으로{" "}
                            <InlineMath math="2:1" />로 내분합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \overline{AG}:\overline{GD}=2:1
                    }
                `}
                        />

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                세 중선에서의 내분비
                            </p>

                            <BlockMath
                                math={String.raw`
                        \overline{AG}:\overline{GD}
                        =
                        \overline{BG}:\overline{GE}
                        =
                        \overline{CG}:\overline{GF}
                        =
                        2:1
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                방향에 주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                꼭짓점에서 무게중심까지의 길이와 무게중심에서
                                대변의 중점까지의 길이의 비가{" "}
                                <InlineMath math="2:1" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        \text{꼭짓점}
                        \;-\;
                        \underbrace{\hspace{3cm}}_{2}
                        \;G\;-\;
                        \underbrace{\hspace{1.5cm}}_{1}
                        \;D
                    `}
                            />

                        </div>

                    </div>

                    {/* 무게중심의 좌표 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 무게중심의 좌표
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형 <InlineMath math="ABC" />의 무게중심을{" "}
                            <InlineMath math="G" />라 하면, 무게중심은 세 꼭짓점의
                            평균점으로 나타낼 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    G=\frac{A+B+C}{3}
                    }
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            세 점의 좌표가
                        </p>

                        <BlockMath
                            math={String.raw`
                    A(x_1,y_1),\qquad
                    B(x_2,y_2),\qquad
                    C(x_3,y_3)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때에는 각 좌표를 성분별로 평균하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    G\left(
                    \frac{x_1+x_2+x_3}{3},
                    \frac{y_1+y_2+y_3}{3}
                    \right)
                    }
                `}
                        />

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    선분의 평균점
                                </p>

                                <BlockMath
                                    math={String.raw`
                            M=\frac{A+B}{2}
                        `}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    중점은 두 점의 평균점
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="mb-3 font-bold text-green-300">
                                    삼각형의 평균점
                                </p>

                                <BlockMath
                                    math={String.raw`
                            G=\frac{A+B+C}{3}
                        `}
                                />

                                <p className="text-center leading-8 text-gray-300">
                                    무게중심은 세 점의 평균점
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 중선정리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 중선정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형의 한 꼭짓점에서 대변으로 중선을 그으면,
                            두 변의 길이와 중선의 길이 사이에 일정한 관계가 성립합니다.
                        </p>

                        <div className="mt-6 flex justify-center">

                            <div className="rounded-xl bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.8_2.png"
                                    alt="중선정리"
                                    className="block h-auto w-[300px]"
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                두 변의 길이를 <InlineMath math="a,\ b" />,
                                대변의 절반의 길이를 <InlineMath math="x" />,
                                중선의 길이를 <InlineMath math="y" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        a^2+b^2=2(x^2+y^2)
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                문장으로 기억하기
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{aligned}
                        &\text{두 변의 길이의 제곱의 합}\\
                        &\qquad
                        =
                        2\left(
                        \text{중선의 제곱}
                        +
                        \text{대변의 절반의 제곱}
                        \right)
                        \end{aligned}
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                중선은 높이가 아니다
                            </p>

                            <p className="leading-8 text-gray-300">
                                중선은 대변의 중점을 지나는 선분입니다.
                                대변과 수직일 필요는 없으므로 높이와 구분해야 합니다.
                            </p>

                        </div>

                    </div>

                    {/* 거리의 제곱합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 거리의 제곱합이 최소가 되는 점
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형 <InlineMath math="ABC" />와 평면 위의 임의의 점{" "}
                            <InlineMath math="P" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
            \overline{PA}^{\,2}
            +
            \overline{PB}^{\,2}
            +
            \overline{PC}^{\,2}
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 값이 최소가 되는 점은 삼각형{" "}
                            <InlineMath math="ABC" />의 무게중심{" "}
                            <InlineMath math="G" />입니다.
                        </p>

                        <BlockMath math={String.raw`\boxed{P=G}`} />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                실전에서의 해석
                            </p>

                            <p className="leading-8 text-gray-300">
                                세 꼭짓점까지의 거리의 제곱의 합을 가장 작게 만드는 점을 묻는 문제에서는
                                삼각형의 무게중심을 생각합니다.
                            </p>

                        </div>

                    </div>

                    {/* 같은 비로 내분한 삼각형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 같은 비로 내분하여 만든 삼각형
                        </h3>

                        <p className="leading-8 text-gray-300">
                            삼각형 <InlineMath math="ABC" />에서 선분{" "}
                            <InlineMath math="\overline{AB}" />,{" "}
                            <InlineMath math="\overline{BC}" />,{" "}
                            <InlineMath math="\overline{CA}" />를 각각 같은 비{" "}
                            <InlineMath math="m:n" />으로 내분하는 점을 차례로{" "}
                            <InlineMath math="D,\ E,\ F" />라 하겠습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    D=\frac{mB+nA}{m+n}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    E=\frac{mC+nB}{m+n}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    F=\frac{mA+nC}{m+n}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            삼각형 <InlineMath math="DEF" />의 무게중심은
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \frac{D+E+F}{3}
                    &=
                    \frac{
                    mB+nA+mC+nB+mA+nC
                    }{
                    3(m+n)
                    }\\[6pt]
                    &=
                    \frac{
                    (m+n)(A+B+C)
                    }{
                    3(m+n)
                    }\\[6pt]
                    &=
                    \frac{A+B+C}{3}
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로 삼각형 <InlineMath math="ABC" />와 삼각형{" "}
                            <InlineMath math="DEF" />의 무게중심은 같습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <BlockMath
                                math={String.raw`
                        \boxed{
                        \triangle ABC\text{의 무게중심}
                        =
                        \triangle DEF\text{의 무게중심}
                        }
                    `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                성립하는 이유
                            </p>

                            <p className="leading-8 text-gray-300">
                                세 변을 같은 비로 나누어 새로운 삼각형을 만들면,
                                새로운 세 꼭짓점의 합이 원래 세 꼭짓점의 합과 같은 평균을 갖기 때문입니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            세 점{" "}
                            <InlineMath math="A(a,5),\ B(-1,b),\ C(5,1)" />
                            을 꼭짓점으로 하는 삼각형{" "}
                            <InlineMath math="ABC" />
                            의 무게중심의 좌표가{" "}
                            <InlineMath math="(2,3)" />
                            일 때,{" "}
                            <InlineMath math="a,\ b" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형의 무게중심은 세 꼭짓점의 평균점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    G=\frac{A+B+C}{3}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    \left(
                    \frac{a-1+5}{3},
                    \frac{5+b+1}{3}
                    \right)
                    =
                    (2,3)
                `}
                            />

                            <p className="leading-8">
                                각 좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{a+4}{3}=2,
                    \qquad
                    \frac{b+6}{3}=3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=2,\qquad b=3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{a=2,\qquad b=3}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    무게중심은 세 점의 평균점이므로 각 좌표를 각각 평균하여 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        G=
                        \left(
                        \frac{x_1+x_2+x_3}{3},
                        \frac{y_1+y_2+y_3}{3}
                        \right)
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

                        <p className="leading-8 text-gray-300">
                            삼각형 <InlineMath math="ABC" />에서
                            세 변{" "}
                            <InlineMath math="\overline{AB},\ \overline{BC},\ \overline{CA}" />
                            의 중점의 좌표가 각각{" "}
                            <InlineMath math="(-4,5),\ (-1,-2),\ (5,6)" />
                            일 때,
                            삼각형 <InlineMath math="ABC" />의 무게중심의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 변의 중점을 각각{" "}
                                <InlineMath math="D,\ E,\ F" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    D=\frac{A+B}{2},\qquad
                    E=\frac{B+C}{2},\qquad
                    F=\frac{C+A}{2}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    D+E+F=A+B+C
                `}
                            />

                            <p className="leading-8">
                                이므로 삼각형{" "}
                                <InlineMath math="ABC" />와
                                중점을 이어 만든 삼각형의 무게중심은 같습니다.
                            </p>

                            <p className="leading-8">
                                따라서 세 중점의 평균을 구하면 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \left(
                    \frac{-4+(-1)+5}{3},
                    \frac{5+(-2)+6}{3}
                    \right)
                    =
                    \left(0,3\right)
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{(0,3)}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    삼각형의 세 변의 중점을 이은 삼각형은 원래 삼각형과
                                    무게중심이 같습니다.
                                    따라서 세 중점의 평균을 바로 구하면 무게중심의 좌표를
                                    얻을 수 있습니다.
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
                            세 점{" "}
                            <InlineMath math="A(-5,-2),\ B(2,3),\ C(6,-7)" />
                            과 평면 위의 임의의 점{" "}
                            <InlineMath math="P" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AP}^{\,2}
                +
                \overline{BP}^{\,2}
                +
                \overline{CP}^{\,2}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값과 그때의 점{" "}
                            <InlineMath math="P" />의 좌표를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 1 · 이차식의 최솟값 이용
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P" />의 좌표를{" "}
                                    <InlineMath math="(x,y)" />라 하겠습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \overline{AP}^{\,2}
                        &=(x+5)^2+(y+2)^2,\\[4pt]
                        \overline{BP}^{\,2}
                        &=(x-2)^2+(y-3)^2,\\[4pt]
                        \overline{CP}^{\,2}
                        &=(x-6)^2+(y+7)^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 세 거리의 제곱의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &\overline{AP}^{\,2}
                        +\overline{BP}^{\,2}
                        +\overline{CP}^{\,2}\\[4pt]
                        &=(x+5)^2+(y+2)^2\\
                        &\quad +(x-2)^2+(y-3)^2\\
                        &\quad +(x-6)^2+(y+7)^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 이를 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3x^2-6x+3y^2+12y+127
                    `}
                                />

                                <p className="leading-8">
                                    이고, 완전제곱식으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &3x^2-6x+3y^2+12y+127\\[4pt]
                        &=3(x-1)^2+3(y+2)^2+112
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    제곱은 항상{" "}
                                    <InlineMath math="0" /> 이상이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=1,\qquad y=-2
                    `}
                                />

                                <p className="leading-8">
                                    일 때 최솟값을 가집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AP}^{\,2}
                        +\overline{BP}^{\,2}
                        +\overline{CP}^{\,2}
                        =112
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 2 · 무게중심의 성질 이용
                                </p>

                                <p className="leading-8 text-gray-300">
                                    삼각형의 세 꼭짓점까지의 거리의 제곱의 합이
                                    최소가 되는 점은 삼각형의 무게중심입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    삼각형 <InlineMath math="ABC" />의 무게중심을{" "}
                                    <InlineMath math="G" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        G=\frac{A+B+C}{3}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        G
                        &=
                        \frac{
                        (-5,-2)+(2,3)+(6,-7)
                        }3\\[6pt]
                        &=
                        \frac{(3,-6)}3\\[6pt]
                        &=(1,-2)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서{" "}
                                    <InlineMath math="P=G=(1,-2)" />일 때
                                    최솟값을 가집니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    점 <InlineMath math="P(1,-2)" />에서 각 꼭짓점까지의
                                    거리의 제곱을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \overline{AP}^{\,2}
                        &=(1+5)^2+\{-2-(-2)\}^2=36,\\[4pt]
                        \overline{BP}^{\,2}
                        &=(1-2)^2+(-2-3)^2=26,\\[4pt]
                        \overline{CP}^{\,2}
                        &=(1-6)^2+\{-2-(-7)\}^2=50
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        36+26+50=112
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
                        \boxed{
                        \text{최솟값은 }112,\qquad
                        P(1,-2)
                        }
                    `}
                                />

                            </div>

                            {/* 풀이 비교 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    두 풀이의 비교
                                </p>

                                <div className="space-y-3 leading-8 text-gray-300">

                                    <p>
                                        • 무게중심의 성질을 모르면 점{" "}
                                        <InlineMath math="P(x,y)" />를 놓고 이차식의
                                        최솟값을 구합니다.
                                    </p>

                                    <p>
                                        • 세 꼭짓점까지의 거리의 제곱의 합이 최소가 되는 점이
                                        무게중심임을 알면 먼저{" "}
                                        <InlineMath math="P=G" />를 구하여 빠르게 해결할 수 있습니다.
                                    </p>

                                </div>

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
                            좌표평면 위의 세 점{" "}
                            <InlineMath math="A(1,0),\ B(4,0),\ C(1,a)" />와
                            평면 위의 임의의 점 <InlineMath math="P" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                \overline{AP}^{\,2}
                +
                \overline{BP}^{\,2}
                +
                \overline{CP}^{\,2}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최솟값이 <InlineMath math="30" />일 때,
                            양수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                삼각형의 세 꼭짓점까지의 거리의 제곱의 합이 최소가 되는 점은
                                삼각형의 무게중심입니다.
                            </p>

                            <p className="leading-8">
                                삼각형 <InlineMath math="ABC" />의 무게중심을{" "}
                                <InlineMath math="G" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    G
                    &=
                    \frac{A+B+C}{3}\\[6pt]
                    &=
                    \frac{(1,0)+(4,0)+(1,a)}{3}\\[6pt]
                    &=
                    \left(2,\frac{a}{3}\right)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="P=G" />일 때 최솟값을 가지므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \overline{GA}^{\,2}
                    +
                    \overline{GB}^{\,2}
                    +
                    \overline{GC}^{\,2}
                    =
                    30
                `}
                            />

                            <p className="leading-8">
                                입니다. 각 거리의 제곱을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{GA}^{\,2}
                    &=
                    (2-1)^2+
                    \left(\frac{a}{3}-0\right)^2\\[4pt]
                    &=
                    1+\frac{a^2}{9}
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{GB}^{\,2}
                    &=
                    (2-4)^2+
                    \left(\frac{a}{3}-0\right)^2\\[4pt]
                    &=
                    4+\frac{a^2}{9}
                    \end{aligned}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{GC}^{\,2}
                    &=
                    (2-1)^2+
                    \left(\frac{a}{3}-a\right)^2\\[4pt]
                    &=
                    1+\frac{4a^2}{9}
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    1+\frac{a^2}{9}
                    +
                    4+\frac{a^2}{9}
                    +
                    1+\frac{4a^2}{9}
                    =
                    30
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    6+\frac{2a^2}{3}=30
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    \frac{2a^2}{3}=24
                `}
                            />

                            <BlockMath math="a^2=36" />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath math="a=6" />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{6}`} />

                            </div>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 세 꼭짓점의 평균을 구하여 무게중심의 좌표를 찾습니다.
                                    거리의 제곱합은 무게중심에서 최소가 되므로,
                                    무게중심에서 세 꼭짓점까지의 거리의 제곱을 더하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        G=\frac{A+B+C}{3}
                        \quad\longrightarrow\quad
                        \overline{GA}^{\,2}
                        +
                        \overline{GB}^{\,2}
                        +
                        \overline{GC}^{\,2}
                        =
                        30
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같은 정삼각형{" "}
                                <InlineMath math="ABC" />에서
                                꼭짓점 <InlineMath math="A" />의 좌표가{" "}
                                <InlineMath math="(6,3\sqrt2)" />,
                                무게중심 <InlineMath math="G" />의 좌표가{" "}
                                <InlineMath math="(4,\sqrt2)" />일 때,
                                정삼각형 <InlineMath math="ABC" />의 넓이를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.8_5.png"
                                alt="정삼각형의 무게중심"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                무게중심은 중선을{" "}
                                <InlineMath math="2:1" />로 내분하므로,
                                무게중심에서 꼭짓점까지의 거리는
                                중선의 <InlineMath math="\dfrac23" />입니다.
                            </p>

                            <p className="leading-8">
                                먼저{" "}
                                <InlineMath math="\overline{AG}" />의 길이를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    \overline{AG}
                    &=
                    \sqrt{
                    (6-4)^2+
                    (3\sqrt2-\sqrt2)^2
                    }\\[6pt]
                    &=
                    \sqrt{4+8}\\[6pt]
                    &=2\sqrt3
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서 중선의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac23l=2\sqrt3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    l=3\sqrt3
                `}
                            />

                            <p className="leading-8">
                                정삼각형의 한 변의 길이를{" "}
                                <InlineMath math="a" />라 하면
                                중선의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{\sqrt3}{2}a
                `}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{\sqrt3}{2}a
                    =
                    3\sqrt3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=6
                `}
                            />

                            <p className="leading-8">
                                따라서 정삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
                    \frac{\sqrt3}{4}a^2
                    =
                    \frac{\sqrt3}{4}\times36
                    =
                    9\sqrt3
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{9\sqrt3}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    무게중심은 중선을{" "}
                                    <InlineMath math="2:1" />로 내분하므로{" "}
                                    <InlineMath math="\overline{AG}" />를 구하면
                                    중선의 길이를 바로 구할 수 있습니다.
                                    정삼각형에서는 중선이 높이이므로
                                    한 변의 길이와 넓이를 쉽게 구할 수 있습니다.
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

                        <p className="leading-8 text-gray-300">
                            좌표평면에서 이차함수{" "}
                            <InlineMath math="y=x^2-7x+1" />의 그래프와 직선{" "}
                            <InlineMath math="y=2x+3" />이 만나는 두 점을 각각{" "}
                            <InlineMath math="A,\ B" />라 하자.
                            삼각형 <InlineMath math="OAB" />의 무게중심의 좌표를
                            <InlineMath math="(a,b)" />라 할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                            <br />
                            <span className="text-sm text-gray-400">
                                (단, <InlineMath math="O" />는 원점이다.)
                            </span>
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 교점 <InlineMath math="A,\ B" />의{" "}
                                <InlineMath math="x" />좌표를 각각{" "}
                                <InlineMath math="\alpha,\ \beta" />라 하겠습니다.
                            </p>

                            <p className="leading-8">
                                두 그래프의 교점에서는{" "}
                                <InlineMath math="y" />좌표가 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    x^2-7x+1=2x+3
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    x^2-9x-2=0
                `}
                            />

                            <p className="leading-8">
                                입니다. 따라서{" "}
                                <InlineMath math="\alpha,\ \beta" />는 이 방정식의 두 근이고,
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
                    \alpha+\beta=9
                `}
                            />

                            <p className="leading-8">
                                두 점은 직선{" "}
                                <InlineMath math="y=2x+3" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    A(\alpha,2\alpha+3),
                    \qquad
                    B(\beta,2\beta+3)
                `}
                            />

                            <p className="leading-8">
                                로 나타낼 수 있습니다.
                            </p>

                            <p className="leading-8">
                                원점은{" "}
                                <InlineMath math="O(0,0)" />이므로 삼각형{" "}
                                <InlineMath math="OAB" />의 무게중심은 세 꼭짓점의 평균점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    G
                    &=
                    \frac{O+A+B}{3}\\[6pt]
                    &=
                    \left(
                    \frac{0+\alpha+\beta}{3},
                    \frac{0+(2\alpha+3)+(2\beta+3)}{3}
                    \right)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                <InlineMath math="\alpha+\beta=9" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    G
                    &=
                    \left(
                    \frac{9}{3},
                    \frac{2(\alpha+\beta)+6}{3}
                    \right)\\[6pt]
                    &=
                    \left(
                    3,
                    \frac{18+6}{3}
                    \right)\\[6pt]
                    &=(3,8)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    a=3,\qquad b=8
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a+b=3+8=11
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{11}`} />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 교점의 좌표를 직접 구하지 않고,
                                    교점의 <InlineMath math="x" />좌표의 합만 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \alpha+\beta=9
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    무게중심은 세 점의 평균점이므로 좌표의 합만 알면
                                    무게중심의 좌표를 구할 수 있습니다.
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 좌표평면 위의 세 점{" "}
                                <InlineMath math="P(-5,10),\ Q(-8,4),\ R(-1,6)" />
                                으로부터 같은 거리에 있는 직선{" "}
                                <InlineMath math="l" />이 두 선분{" "}
                                <InlineMath math="\overline{PQ},\ \overline{PR}" />과 만나는 점을
                                각각 <InlineMath math="A,\ B" />라 하자.
                                선분 <InlineMath math="\overline{QR}" />의 중점을{" "}
                                <InlineMath math="C" />라 할 때, 삼각형{" "}
                                <InlineMath math="ABC" />의 무게중심의 좌표를{" "}
                                <InlineMath math="G(x,y)" />라 하면{" "}
                                <InlineMath math="x+y" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.8_7.png"
                                alt="세 점에서 같은 거리에 있는 직선과 삼각형 ABC"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                세 점 <InlineMath math="P,\ Q,\ R" />에서 직선{" "}
                                <InlineMath math="l" />까지의 거리가 모두 같고, 점{" "}
                                <InlineMath math="Q,\ R" />은 직선{" "}
                                <InlineMath math="l" />의 같은 쪽에 있습니다.
                            </p>

                            <p className="leading-8">
                                따라서 직선 <InlineMath math="QR" />과 직선{" "}
                                <InlineMath math="l" />은 평행하고, 직선{" "}
                                <InlineMath math="l" />은 점 <InlineMath math="P" />와
                                직선 <InlineMath math="QR" /> 사이의 거리를 이등분합니다.
                            </p>

                            <p className="leading-8">
                                그러므로 점 <InlineMath math="A" />와 점{" "}
                                <InlineMath math="B" />는 각각 선분{" "}
                                <InlineMath math="\overline{PQ}" />와{" "}
                                <InlineMath math="\overline{PR}" />의 중점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    A=\frac{P+Q}{2},
                    \qquad
                    B=\frac{P+R}{2}
                `}
                            />

                            <p className="leading-8">
                                또한 점 <InlineMath math="C" />는 선분{" "}
                                <InlineMath math="\overline{QR}" />의 중점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    C=\frac{Q+R}{2}
                `}
                            />

                            <p className="leading-8">
                                따라서 삼각형 <InlineMath math="ABC" />는 삼각형{" "}
                                <InlineMath math="PQR" />의 세 변의 중점을 이어 만든 삼각형입니다.
                            </p>

                            <p className="leading-8">
                                두 삼각형의 무게중심은 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    G=\frac{P+Q+R}{3}
                `}
                            />

                            <p className="leading-8">
                                점의 좌표를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    G
                    &=
                    \frac{
                    (-5,10)+(-8,4)+(-1,6)
                    }3\\[6pt]
                    &=
                    \frac{(-14,20)}3\\[6pt]
                    &=
                    \left(
                    -\frac{14}{3},
                    \frac{20}{3}
                    \right)
                    \end{aligned}
                `}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    x+y
                    =
                    -\frac{14}{3}
                    +
                    \frac{20}{3}
                    =
                    2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{2}`} />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="A,\ B,\ C" />는 각각 삼각형{" "}
                                    <InlineMath math="PQR" />의 세 변의 중점입니다.
                                    세 변의 중점을 이어 만든 삼각형은 원래 삼각형과
                                    무게중심이 같으므로, 점{" "}
                                    <InlineMath math="A,\ B,\ C" />의 좌표를 각각 구하지 않아도 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{A+B+C}{3}
                        =
                        \frac{P+Q+R}{3}
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이{" "}
                                <InlineMath math="\overline{AB}=6,\ \overline{BC}=9" />,{" "}
                                <InlineMath math="\angle B=90^\circ" />인 직각삼각형{" "}
                                <InlineMath math="ABC" />가 있다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                변 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="5:1" />로 내분하는 점{" "}
                                <InlineMath math="D" />와 변{" "}
                                <InlineMath math="\overline{BC}" /> 위의 점{" "}
                                <InlineMath math="E" />, 변{" "}
                                <InlineMath math="\overline{CA}" /> 위의 점{" "}
                                <InlineMath math="F" />에 대하여 삼각형{" "}
                                <InlineMath math="DEF" />의 무게중심과 삼각형{" "}
                                <InlineMath math="ABC" />의 무게중심이 일치할 때,
                                선분 <InlineMath math="\overline{EF}" />의 길이를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.8_8.png"
                                alt="무게중심이 같은 두 삼각형 ABC와 DEF"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    풀이 1 · 좌표 이용
                                </p>

                                <p className="leading-8">
                                    직각삼각형의 세 꼭짓점을
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A(0,0),\qquad
                        B(6,0),\qquad
                        C(6,9)
                    `}
                                />

                                <p className="leading-8">
                                    로 놓겠습니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="D" />는 선분{" "}
                                    <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="5:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        D=(5,0)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="E" />는 선분{" "}
                                    <InlineMath math="\overline{BC}" /> 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        E=(6,t)
                    `}
                                />

                                <p className="leading-8">
                                    로 놓을 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="CA" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=\frac32x
                    `}
                                />

                                <p className="leading-8">
                                    이므로 점 <InlineMath math="F" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
                        F=\left(s,\frac32s\right)
                    `}
                                />

                                <p className="leading-8">
                                    로 놓을 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    두 삼각형의 무게중심이 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{A+B+C}{3}
                        =
                        \frac{D+E+F}{3}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+B+C=D+E+F
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 각 점의 좌표를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (0,0)+(6,0)+(6,9)
                        =
                        (5,0)+(6,t)
                        +
                        \left(s,\frac32s\right)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (12,9)
                        =
                        \left(
                        11+s,\,
                        t+\frac32s
                        \right)
                    `}
                                />

                                <p className="leading-8">
                                    각 좌표를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        11+s=12,
                        \qquad
                        t+\frac32s=9
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        s=1,\qquad
                        t=\frac{15}{2}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        E\left(6,\frac{15}{2}\right),
                        \qquad
                        F\left(1,\frac32\right)
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \overline{EF}
                        &=
                        \sqrt{
                        (6-1)^2+
                        \left(
                        \frac{15}{2}-\frac32
                        \right)^2
                        }\\[6pt]
                        &=
                        \sqrt{5^2+6^2}\\[6pt]
                        &=
                        \sqrt{61}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 font-bold text-blue-300">
                                    풀이 2 · 같은 비로 내분한 삼각형의 성질 이용
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="D" />는 선분{" "}
                                    <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="5:1" />로 내분합니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    삼각형의 세 변을 각각 같은 비로 내분하여 만든 삼각형은
                                    원래 삼각형과 무게중심이 같습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 삼각형 <InlineMath math="ABC" />와 삼각형{" "}
                                    <InlineMath math="DEF" />의 무게중심이 같으려면 점{" "}
                                    <InlineMath math="E,\ F" />도 각 변을 같은 방향으로{" "}
                                    <InlineMath math="5:1" />로 내분해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{AD}:\overline{DB}
                        =
                        \overline{BE}:\overline{EC}
                        =
                        \overline{CF}:\overline{FA}
                        =
                        5:1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="F" />에서 선분{" "}
                                    <InlineMath math="\overline{AB}" />에 평행한 선을 그어
                                    선분 <InlineMath math="\overline{BC}" />와 만나는 점을{" "}
                                    <InlineMath math="F'" />이라 하겠습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    삼각형 <InlineMath math="CFF'" />와 삼각형{" "}
                                    <InlineMath math="CAB" />는 닮음이고
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{\overline{CF}}{\overline{CA}}
                        =
                        \frac56
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{\overline{FF'}}{\overline{AB}}
                        =
                        \frac56
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \overline{FF'}
                        =
                        \frac56\cdot6
                        =
                        5
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 기울어진 선분의 내분비는 세로 방향에서도 같습니다.
                                    점 <InlineMath math="F" />는 선분{" "}
                                    <InlineMath math="\overline{CA}" />를{" "}
                                    <InlineMath math="5:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{BF'}
                        =
                        \frac16\overline{BC}
                        =
                        \frac16\cdot9
                        =
                        \frac32
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    한편 점 <InlineMath math="E" />는 선분{" "}
                                    <InlineMath math="\overline{BC}" />를{" "}
                                    <InlineMath math="5:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \overline{BE}
                        =
                        \frac56\overline{BC}
                        =
                        \frac56\cdot9
                        =
                        \frac{15}{2}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \overline{EF'}
                        &=
                        \overline{BE}-\overline{BF'}\\[4pt]
                        &=
                        \frac{15}{2}-\frac32\\[4pt]
                        &=6
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    삼각형 <InlineMath math="EFF'" />는 점{" "}
                                    <InlineMath math="F'" />에서 직각인 삼각형이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        \overline{EF}
                        &=
                        \sqrt{
                        \overline{FF'}^{\,2}
                        +
                        \overline{EF'}^{\,2}
                        }\\[6pt]
                        &=
                        \sqrt{5^2+6^2}\\[6pt]
                        &=
                        \sqrt{61}
                        \end{aligned}
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
                        \boxed{\sqrt{61}}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-3 font-bold text-yellow-300">
                                    두 풀이의 비교
                                </p>

                                <div className="space-y-3 leading-8 text-gray-300">

                                    <p>
                                        • 풀이 1은 두 삼각형의 무게중심이 같다는 조건을{" "}
                                        <InlineMath math="A+B+C=D+E+F" />로 바꾸어
                                        좌표를 구하는 방법입니다.
                                    </p>

                                    <p>
                                        • 풀이 2는 세 변을 같은 방향으로 같은 비만큼 내분하여
                                        만든 삼각형은 원래 삼각형과 무게중심이 같다는 성질을
                                        이용하는 방법입니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 9 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 삼각형{" "}
                                <InlineMath math="ABC" />에서
                                무게중심을 <InlineMath math="G" />,
                                변 <InlineMath math="\overline{BC}" />의 중점을{" "}
                                <InlineMath math="M" />이라 하자.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                <InlineMath math="\overline{AB}=6,\ 
                \overline{BC}=8,\ 
                \overline{AG}=2\sqrt3" />일 때,
                                선분 <InlineMath math="\overline{AC}" />의 길이를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.8_9.png"
                                alt="중선정리 예제"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-6 text-gray-300">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8">
                                    무게중심은 중선을{" "}
                                    <InlineMath math="2:1" />로 내분하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AG=\frac23AM
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AM=\frac32AG
                        =\frac32\cdot2\sqrt3
                        =3\sqrt3
                    `}
                                />

                                <p className="leading-8">
                                    또한{" "}
                                    <InlineMath math="M" />은{" "}
                                    <InlineMath math="\overline{BC}" />의 중점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        BM=CM=\frac82=4
                    `}
                                />

                                <p className="leading-8">
                                    중선정리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB^2+AC^2
                        =
                        2\left(
                        AM^2+BM^2
                        \right)
                    `}
                                />

                                <p className="leading-8">
                                    값을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6^2+AC^2
                        =
                        2\left(
                        (3\sqrt3)^2+4^2
                        \right)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        36+AC^2
                        =
                        2(27+16)
                        =
                        86
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        AC^2=50
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        AC=5\sqrt2
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{5\sqrt2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 무게중심의 성질을 이용하여
                                    중선의 길이{" "}
                                    <InlineMath math="AM" />을 구한 뒤,
                                    중선정리{" "}
                                    <InlineMath math="a^2+b^2=2(x^2+y^2)" />
                                    를 적용하면 됩니다.
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

                        <p className="leading-8">
                            • 중선은 삼각형의 꼭짓점과 대변의 중점을 이은 선분이다.
                        </p>

                        <p className="leading-8">
                            • 삼각형의 세 중선은 한 점에서 만나며, 이 점을 무게중심이라 한다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \overline{AG}:\overline{GM}=2:1
                `}
                        />

                        <p className="leading-8">
                            • 중점은 두 점의 평균점이고, 무게중심은 세 점의 평균점이다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    M=\frac{A+B}{2},
                    \qquad
                    G=\frac{A+B+C}{3}
                `}
                        />

                        <p className="leading-8">
                            • 중선정리는 다음과 같다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    a^2+b^2=2(x^2+y^2)
                `}
                        />

                        <p className="leading-8">
                            • <InlineMath
                                math="\overline{PA}^{\,2}+\overline{PB}^{\,2}+\overline{PC}^{\,2}"
                            />
                            이 최소가 되는 점은 삼각형의 무게중심이다.
                        </p>

                        <p className="leading-8">
                            • 삼각형의 세 변을 각각 같은 비로 내분하여 만든 삼각형은
                            원래 삼각형과 무게중심이 같다.
                        </p>

                    </div>

                </div>

            </section>

        </>
    )
};