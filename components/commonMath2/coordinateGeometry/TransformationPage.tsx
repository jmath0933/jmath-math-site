"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function TransformationPage() {
    return (
        <>
            {/* 1.24 도형의 이동 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.24 도형의 이동
                </h2>

                <p className="leading-8 text-gray-300">
                    도형의 이동은 도형의 모양을 변화시키지 않고
                    위치만 옮기는 것입니다.
                    <br />
                    이동의 대상은 점이 될 수도 있고,
                    도형을 나타내는 식이 될 수도 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 도형의 이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 도형의 이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            도형의 모양을 변화시키지 않고
                            위치만 옮기는 것을
                            <b> 도형의 이동</b>이라고 합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                움직이는 대상
                            </p>

                            <div className="mt-3 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    • 점 :{" "}
                                    <InlineMath math="(x,y)" />
                                </p>

                                <p className="leading-8">
                                    • 도형의 방정식 :{" "}
                                    <InlineMath math="f(x,y)=0" />
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 2. 이동의 종류 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 이동의 종류
                        </h3>

                        <div className="grid gap-5 lg:grid-cols-2">

                            {/* 평행이동 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    평행이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    도형을 일정한 방향으로
                                    일정한 거리만큼 이동시키는 것입니다.
                                </p>

                            </div>

                            {/* 대칭이동 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    대칭이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    점 또는 직선에 대하여
                                    대칭인 모양이 되도록 도형을 이동시키는 것입니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 3. 이동 전과 이동 후의 좌표 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 이동 전과 이동 후의 좌표
                        </h3>

                        <p className="leading-8 text-gray-300">
                            도형을 이동하는 과정에서는
                            이동 전의 점과 이동 후의 점을 동시에 다루어야 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 두 좌표를 구분하여
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(x',y')
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타냅니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                • 이동 전의 좌표 :{" "}
                                <InlineMath math="(x,y)" />
                            </p>

                            <p className="leading-8 text-gray-300">
                                • 이동 후의 좌표 :{" "}
                                <InlineMath math="(x',y')" />
                            </p>

                        </div>

                    </div>


                    {/* 4. 왜 x', y'를 사용하는가 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 왜 이동 후의 좌표에 <InlineMath math="'" />를 붙일까?
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="(2,3)" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="1" />만큼 평행이동한다고 하겠습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이동 후의 좌표는
                        </p>

                        <BlockMath
                            math={String.raw`
(2+1,3)=(3,3)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            이제 이를 문자로 바꾸어
                            점 <InlineMath math="(x,y)" />를{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="1" />만큼 평행이동하면
                        </p>

                        <BlockMath
                            math={String.raw`
(x,y)\rightarrow(x+1,y)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            가 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-bold text-red-300">
                                이동 전과 이동 후에 같은 문자를 사용한다면
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이동 후의 <InlineMath math="x" />좌표도
                                다시 <InlineMath math="x" />라고 나타내게 되어
                            </p>

                            <BlockMath
                                math={String.raw`
x=x+1
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이라는 모순된 식이 생깁니다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 이동 전과 이동 후의 좌표를 구분하기 위해
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
x'=x+1,\qquad y'=y
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            와 같이 나타냅니다.
                        </p>

                    </div>


                    {/* 5. 이동이 끝난 뒤의 표기 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            이동이 끝난 후
                        </h3>

                        <p className="leading-8 text-gray-300">
                            도형을 이동하는 과정에서는
                            이동 전과 이동 후의 좌표를 구분해야 하므로{" "}
                            <InlineMath math="(x,y)" />와{" "}
                            <InlineMath math="(x',y')" />를 사용합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            하지만 이동이 끝난 후에는
                            더 이상 두 좌표를 구분할 필요가 없으므로
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
x'\rightarrow x,\qquad
y'\rightarrow y
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 바꾸어 일반적인{" "}
                            <InlineMath math="x,\ y" />를 사용하여
                            이동한 도형의 방정식을 나타냅니다.
                        </p>

                    </div>

                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 도형의 이동은 도형의 모양을 변화시키지 않고
                            위치만 옮기는 것이다.
                        </p>

                        <p>
                            • 이동의 대상은 점{" "}
                            <InlineMath math="(x,y)" /> 또는
                            도형의 방정식{" "}
                            <InlineMath math="f(x,y)=0" />이다.
                        </p>

                        <p>
                            • 평행이동은 일정한 방향으로 일정한 거리만큼 이동하는 것이다.
                        </p>

                        <p>
                            • 대칭이동은 점 또는 직선에 대하여
                            대칭인 위치로 이동하는 것이다.
                        </p>

                        <p>
                            • 이동 과정에서는 이동 전과 이동 후의 좌표를 구분한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(x',y')
}
`}
                        />

                        <p>
                            • 이동이 끝난 후에는{" "}
                            <InlineMath math="x',y'" />를 다시{" "}
                            <InlineMath math="x,y" />로 나타낸다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
x'\rightarrow x,\qquad
y'\rightarrow y
}
`}
                        />

                    </div>

                </div>

            </section>

            {/* 1.25 평행이동 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.25 평행이동
                </h2>

                <p className="leading-8 text-gray-300">
                    평행이동은 도형을 일정한 방향으로 일정한 거리만큼 이동시키는 것입니다.
                    <br />
                    점의 이동과 식의 이동을 구분하여 생각합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 점의 평행이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 점의 평행이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="A(x,y)" />를{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="m" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="n" />만큼 평행이동한 점을[' ']
                            <InlineMath math="A'(x',y')" />라 하겠습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이동 후의 좌표는
                        </p>

                        <BlockMath
                            math={String.raw`
(x+m,\;y+n)=(x',y')
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
x'=x+m,\qquad
y'=y+n
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                점의 평행이동
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(x,y)\rightarrow(x+m,\;y+n)
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                순서쌍에서{" "}
                                <InlineMath math="x" />좌표에{" "}
                                <InlineMath math="+m" />,{" "}
                                <InlineMath math="y" />좌표에{" "}
                                <InlineMath math="+n" />을 합니다.
                            </p>

                        </div>

                    </div>


                    {/* 2. 식의 평행이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 식의 평행이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            도형의 방정식{" "}
                            <InlineMath math="f(x,y)=0" />을{" "}
                            <InlineMath math="x" />축의 방향으로{' '}
                            <InlineMath math="m" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="n" />만큼 평행이동한다고 하겠습니다.
                        </p>


                        <div className="mt-5 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    점의 이동 관계에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
x'=x+m,\qquad
y'=y+n
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 이동 전의 좌표를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x=x'-m,\qquad
y=y'-n
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    평행이동하기 전의 식{" "}
                                    <InlineMath math="f(x,y)=0" />은{" "}
                                    <InlineMath math="x,y" />에 대한 관계식이므로
                                    여기에
                                </p>

                                <BlockMath
                                    math={String.raw`
x=x'-m,\qquad
y=y'-n
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 대입합니다.
                                </p>

                            </div>


                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.25_1.png"
                                    alt="점과 도형의 평행이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 이동 후의 좌표{" "}
                            <InlineMath math="x',y'" />에 대한 식은
                        </p>

                        <BlockMath
                            math={String.raw`
f(x'-m,\;y'-n)=0
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                이동이 끝난 후
                            </p>

                            <p className="leading-8 text-gray-300">
                                더 이상 이동 전과 이동 후의 좌표를
                                구분할 필요가 없으므로{" "}
                                <InlineMath math="x',y'" />를 다시{" "}
                                <InlineMath math="x,y" />로 나타냅니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
f(x-m,\;y-n)=0
}
`}
                            />

                        </div>

                    </div>


                    {/* 3. 점의 이동과 식의 이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 점의 이동과 식의 이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점의 이동과 식의 이동은 기준을 구분해서 생각합니다.
                        </p>


                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* 점 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    점의 이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    순서쌍에서
                                    <strong className="text-white">
                                        {" "}<InlineMath math="x" />좌표와 <InlineMath math="y" />좌표
                                    </strong>
                                    를 기준으로 변형합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x,y)
\rightarrow
(x+m,\;y+n)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />좌표에{" "}
                                    <InlineMath math="+m" />,{" "}
                                    <InlineMath math="y" />좌표에{" "}
                                    <InlineMath math="+n" />
                                </p>

                            </div>


                            {/* 식 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    식의 이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    식에 사용된
                                    <strong className="text-white">
                                        {" "}문자 <InlineMath math="x, y" />
                                    </strong>
                                    를 기준으로 변형합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(x-m,\;y-n)=0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="x-m" />,
                                    문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="y-n" />
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 4. 평행이동과 도형의 모양 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 평행이동과 도형의 모양
                        </h3>

                        <p className="leading-8 text-gray-300">
                            평행이동은 도형의 위치만 바꾸는 이동이므로
                            <strong className="text-white">
                                {" "}도형의 모양과 크기는 변하지 않습니다.
                            </strong>
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 도형의 방정식 전체를 직접 평행이동할 수도 있지만,
                            도형의 위치를 결정하는 특징적인 점을 먼저 이동하여
                            새로운 식을 구할 수도 있습니다.
                        </p>


                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* 이차함수 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    이차함수
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그래프의 모양은 변하지 않으므로
                                    <strong className="text-white">
                                        {" "}꼭짓점을 점으로 생각하여 평행이동
                                    </strong>
                                    시킬 수 있습니다.
                                </p>

                            </div>


                            {/* 원 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    원
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원의 모양과 크기는 변하지 않으므로
                                    <strong className="text-white">
                                        {" "}중심을 점으로 생각하여 평행이동
                                    </strong>
                                    시킬 수 있습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    반지름은 변하지 않습니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 5. 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-xl font-bold">
                            예시 1. 이차함수의 평행이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이차함수{" "}
                            <InlineMath math="y=x^2-2x+3" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="2" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-3" />만큼 평행이동해 보겠습니다.
                        </p>


                        {/* 방법 1 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                방법 1. 식을 평행이동
                            </p>

                            <p className="leading-8 text-gray-300">
                                문자 <InlineMath math="x" /> 대신{' '}
                                <InlineMath math="x-2" />,
                                문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="y+3" />을 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
y+3
=
(x-2)^2-2(x-2)+3
`}
                            />

                            <BlockMath
                                math={String.raw`
y=x^2-6x+8
`}
                            />

                        </div>


                        {/* 방법 2 */}
                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                방법 2. 꼭짓점을 평행이동
                            </p>

                            <p className="leading-8 text-gray-300">
                                원래 이차함수를 꼭짓점 형태로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
y=(x-1)^2+2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 꼭짓점은
                                <InlineMath math="(1,2)" />입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                꼭짓점을 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
(1,2)
\rightarrow
(1+2,\;2-3)
=
(3,-1)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                그래프의 모양은 변하지 않으므로
                                이동 후의 이차함수는
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
y=(x-3)^2-1
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이를 전개하면
                            </p>

                            <BlockMath
                                math={String.raw`
y=x^2-6x+8
`}
                            />

                            <p className="leading-8 text-gray-300">
                                로 방법 1과 같은 결과를 얻습니다.
                            </p>

                        </div>

                    </div>


                    {/* 6. 예시 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-xl font-bold">
                            예시 2. 원의 평행이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="x^2+y^2-2x+4y=0" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="2" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-3" />만큼 평행이동해 보겠습니다.
                        </p>


                        <p className="mt-5 leading-8 text-gray-300">
                            원의 중심은 일차항의 계수를 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
(1,-2)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, 반지름의 제곱은
                        </p>

                        <BlockMath
                            math={String.raw`
r^2
=
1^2+(-2)^2
=
5
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            중심을 평행이동하면
                        </p>

                        <BlockMath
                            math={String.raw`
(1,-2)
\rightarrow
(1+2,\;-2-3)
=
(3,-5)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            평행이동을 해도 반지름은 변하지 않으므로
                            이동 후의 원의 방정식은
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x-3)^2+(y+5)^2=5
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                식으로 직접 이동해도 같은 결과
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="x-2" />,
                                문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="y+3" />을 대입하여
                                직접 구할 수도 있습니다.
                            </p>

                        </div>

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
                            두 점 <InlineMath math="A(-2,a),\ B(b,3)" />가
                            어떤 평행이동에 의하여 각각 두 점{" "}
                            <InlineMath math="A'(3,-2),\ B'(1,-2)" />로 옮겨질 때,<br />
                            이 평행이동에 의하여 점 <InlineMath math="(a,b)" />가
                            옮겨지는 점의 좌표가 <InlineMath math="(p,q)" />라 하자.{" "}
                            <InlineMath math="p+q" />의 값은?
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            (단, <InlineMath math="p,\ q" />는 상수이다.)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="A(-2,a)" />가{" "}
                                <InlineMath math="A'(3,-2)" />로 평행이동하므로
                                평행이동량은
                            </p>

                            <BlockMath
                                math={String.raw`
(3-(-2),\;-2-a)=(5,\;-2-a)
`}
                            />

                            <p className="leading-8">
                                한편 <InlineMath math="B(b,3)" />가{" "}
                                <InlineMath math="B'(1,-2)" />로 평행이동하므로
                                평행이동량은
                            </p>

                            <BlockMath
                                math={String.raw`
(1-b,\;-2-3)=(1-b,\;-5)
`}
                            />

                            <p className="leading-8">
                                두 점은 같은 평행이동에 의해 옮겨졌으므로
                                각각의 이동량이 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
5=1-b,\qquad -2-a=-5
`}
                            />

                            <BlockMath
                                math={String.raw`
a=3,\qquad b=-4
`}
                            />

                            <p className="leading-8">
                                따라서 이 평행이동은
                            </p>

                            <BlockMath
                                math={String.raw`
(x,y)\rightarrow(x+5,\;y-5)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제{" "}
                                <InlineMath math="(a,b)=(3,-4)" />를
                                같은 방법으로 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
(3,-4)\rightarrow(3+5,\;-4-5)=(8,-9)
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
p=8,\qquad q=-9
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{p+q=-1}
`}
                            />

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
                            세 점{" "}
                            <InlineMath math="A(-2,1),\ B(4,-3),\ C(a,-4)" />를{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="-3" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="b" />만큼 평행이동한 점을 각각{" "}
                            <InlineMath math="A',\ B',\ C'" />이라 하자.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            삼각형 <InlineMath math="A'B'C'" />의 무게중심의 좌표가{" "}
                            <InlineMath math="(-4,3)" />일 때,{" "}
                            <InlineMath math="ab" />의 값을 구하시오.{" "}
                            (단, <InlineMath math="a,\ b" />는 상수이다.)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                각 점을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="-3" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="b" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
A(-2,1)
\rightarrow
A'(-5,\;1+b)
`}
                            />

                            <BlockMath
                                math={String.raw`
B(4,-3)
\rightarrow
B'(1,\;b-3)
`}
                            />

                            <BlockMath
                                math={String.raw`
C(a,-4)
\rightarrow
C'(a-3,\;b-4)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                삼각형의 무게중심의 좌표는
                                세 꼭짓점의 각 좌표의 평균이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{-5+1+(a-3)}{3},
\frac{(1+b)+(b-3)+(b-4)}{3}
\right)
=
(-4,3)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 <InlineMath math="x" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{a-7}{3}=-4
`}
                            />

                            <BlockMath
                                math={String.raw`
a=-5
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="y" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{3b-6}{3}=3
`}
                            />

                            <BlockMath
                                math={String.raw`
b=5
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
ab=(-5)(5)=\boxed{-25}
`}
                            />

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
                            직선 <InlineMath math="x+y-4=0" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="a" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="2" />만큼 평행이동한 직선과{" "}
                            <InlineMath math="x" />축,{" "}
                            <InlineMath math="y" />축으로 둘러싸인 부분의 넓이가{" "}
                            <InlineMath math="32" />일 때, 양수{" "}
                            <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                식을 <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="2" />만큼 평행이동하므로
                            </p>

                            <BlockMath
                                math={String.raw`
x\text{ 대신 }x-a,\qquad
y\text{ 대신 }y-2
`}
                            />

                            <p className="leading-8">
                                를 원래 식에 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(x-a)+(y-2)-4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
x+y-a-6=0
`}
                            />

                            <p className="leading-8">
                                따라서 평행이동한 직선의{" "}
                                <InlineMath math="x" />절편과{" "}
                                <InlineMath math="y" />절편은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
a+6,\qquad a+6
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                직선과 두 좌표축으로 둘러싸인 부분은
                                직각삼각형이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac12(a+6)^2=32
`}
                            />

                            <BlockMath
                                math={String.raw`
(a+6)^2=64
`}
                            />

                            <BlockMath
                                math={String.raw`
a+6=\pm8
`}
                            />

                            <BlockMath
                                math={String.raw`
a=2\quad\text{또는}\quad a=-14
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{a=2}
`}
                            />

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
                            직선 <InlineMath math="y=ax+b" />를{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="3" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-1" />만큼 평행이동하면
                            직선 <InlineMath math="y=-\frac13x+2" />와<br />
                            <InlineMath math="x" />축 위의 한 점에서 수직으로 만날 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a-b" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="y=ax+b" />를{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="3" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="-1" />만큼 평행이동하므로
                            </p>

                            <BlockMath
                                math={String.raw`
y+1=a(x-3)+b
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                평행이동을 해도 직선의 기울기는 변하지 않으므로
                                평행이동한 직선의 기울기는{" "}
                                <InlineMath math="a" />입니다.
                            </p>

                            <p className="leading-8">
                                이 직선이 기울기가{" "}
                                <InlineMath math="-\frac13" />인 직선과
                                수직이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a\left(-\frac13\right)=-1
`}
                            />

                            <BlockMath
                                math={String.raw`
a=3
`}
                            />

                            <p className="leading-8">
                                두 직선이 만나는 점은{" "}
                                <InlineMath math="x" />축 위에 있습니다.
                            </p>

                            <p className="leading-8">
                                직선{" "}
                                <InlineMath math="y=-\frac13x+2" />에서{" "}
                                <InlineMath math="y=0" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
0=-\frac13x+2
`}
                            />

                            <BlockMath
                                math={String.raw`
x=6
`}
                            />

                            <p className="leading-8">
                                따라서 두 직선의 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
(6,0)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 점은 평행이동한 직선
                            </p>

                            <BlockMath
                                math={String.raw`
y+1=3(x-3)+b
`}
                            />

                            <p className="leading-8">
                                위의 점이므로{" "}
                                <InlineMath math="(6,0)" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
1=3(6-3)+b
`}
                            />

                            <BlockMath
                                math={String.raw`
b=-8
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a-b
=
3-(-8)
=
\boxed{11}
`}
                            />

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
                            직선 <InlineMath math="6x+y-3=0" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="a" />만큼 평행이동한 직선과
                            두 직선{" "}
                            <InlineMath math="3x-4y+6=0" />,<br />
                            <InlineMath math="2x+3y-13=0" />이
                            삼각형을 이루지 않도록 하는 상수{" "}
                            <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="6x+y-3=0" />을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동하므로
                                문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="x-a" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
6(x-a)+y-3=0
`}
                            />

                            <BlockMath
                                math={String.raw`
6x+y-6a-3=0
`}
                            />

                            <p className="leading-8">
                                세 직선의 기울기는 각각
                            </p>

                            <BlockMath
                                math={String.raw`
-6,\qquad
\frac34,\qquad
-\frac23
`}
                            />

                            <p className="leading-8">
                                으로 모두 다릅니다.
                                따라서 세 직선이 삼각형을 이루지 않으려면
                                <strong className="text-white">
                                    {" "}세 직선이 한 점에서 만나야 합니다.
                                </strong>
                            </p>

                            <p className="leading-8">
                                먼저 두 직선
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
3x-4y+6=0\\
2x+3y-13=0
\end{cases}
`}
                            />

                            <p className="leading-8">
                                을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
x=2,\qquad y=3
`}
                            />

                            <p className="leading-8">
                                이므로 두 직선의 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
(2,3)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                평행이동한 직선도 이 점을 지나야 하므로{" "}
                                <InlineMath math="(2,3)" />을
                                평행이동한 직선에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
6(2)+3-6a-3=0
`}
                            />

                            <BlockMath
                                math={String.raw`
12-6a=0
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{a=2}
`}
                            />

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
                            좌표평면에서 두 양수{" "}
                            <InlineMath math="a,\ b" />에 대하여 원{" "}
                            <InlineMath math="(x-a)^2+(y-b)^2=b^2" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="4" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-10" />만큼 평행이동한 원을{" "}
                            <InlineMath math="C" />라 하자.
                            원 <InlineMath math="C" />가{" "}
                            <InlineMath math="x" />축과{" "}
                            <InlineMath math="y" />축에 동시에 접할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                원{" "}
                                <InlineMath math="(x-a)^2+(y-b)^2=b^2" />의
                                중심은{" "}
                                <InlineMath math="(a,b)" />이고,
                                반지름은{" "}
                                <InlineMath math="b" />입니다.
                            </p>

                            <p className="leading-8">
                                중심을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="4" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="-10" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
(a,b)
\rightarrow
(a+4,\;b-10)
`}
                            />

                            <p className="leading-8">
                                입니다.
                                평행이동을 해도 반지름은 변하지 않으므로
                                원 <InlineMath math="C" />의 반지름은{" "}
                                <InlineMath math="b" />입니다.
                            </p>


                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    두 좌표축에 동시에 접하는 원
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원이 <InlineMath math="x" />축과{" "}
                                    <InlineMath math="y" />축에 동시에 접하므로
                                    중심에서 두 좌표축까지의 거리는 모두
                                    반지름과 같습니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                먼저 중심에서{" "}
                                <InlineMath math="x" />축까지의 거리가
                                반지름 <InlineMath math="b" />와 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
|b-10|=b
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="b" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
10-b=b
`}
                            />

                            <BlockMath
                                math={String.raw`
b=5
`}
                            />

                            <p className="leading-8">
                                따라서 이동 후의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(a+4,-5)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                중심에서{" "}
                                <InlineMath math="y" />축까지의 거리도
                                반지름 <InlineMath math="5" />와 같으므로
                            </p>

                            <BlockMath
                                math={String.raw`
|a+4|=5
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로{" "}
                                <InlineMath math="a+4>0" />이고,
                            </p>

                            <BlockMath
                                math={String.raw`
a+4=5
`}
                            />

                            <BlockMath
                                math={String.raw`
a=1
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b
=
1+5
=
\boxed{6}
`}
                            />

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
                            원{" "}
                            <InlineMath math="(x-a)^2+(y-a)^2=b^2" />을{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-4" />만큼 평행이동한 도형이
                            직선 <InlineMath math="y=x" />와{" "}
                            <InlineMath math="x" />축에 동시에 접할 때,{" "}
                            <InlineMath math="a^2-8b" />의 값을 구하시오.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            (단, <InlineMath math="a>4,\ b>0" />)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                원{" "}
                                <InlineMath math="(x-a)^2+(y-a)^2=b^2" />의
                                중심은 <InlineMath math="(a,a)" />,
                                반지름은 <InlineMath math="b" />입니다.
                            </p>

                            <p className="leading-8">
                                이 원을 <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="-4" />만큼 평행이동하면
                                중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(a,a)\rightarrow(a,a-4)
`}
                            />

                            <p className="leading-8">
                                이고, 반지름은 그대로{" "}
                                <InlineMath math="b" />입니다.
                            </p>


                            <p className="leading-8">
                                평행이동한 원이{" "}
                                <InlineMath math="x" />축에 접하므로
                                중심에서 <InlineMath math="x" />축까지의 거리는
                                반지름과 같습니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="a>4" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
b=a-4
`}
                            />


                            <p className="leading-8">
                                한편 원이 직선{" "}
                                <InlineMath math="y=x" />에 접하므로
                                중심 <InlineMath math="(a,a-4)" />에서
                                직선까지의 거리도 반지름{" "}
                                <InlineMath math="b" />와 같습니다.
                            </p>

                            <p className="leading-8">
                                직선 <InlineMath math="y=x" />를
                                일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
x-y=0
`}
                            />

                            <p className="leading-8">
                                이므로 점과 직선 사이의 거리를 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
b
=
\frac{|a-(a-4)|}{\sqrt{1^2+(-1)^2}}
`}
                            />

                            <BlockMath
                                math={String.raw`
b
=
\frac{4}{\sqrt2}
=
2\sqrt2
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a-4=2\sqrt2
`}
                            />

                            <BlockMath
                                math={String.raw`
a=4+2\sqrt2
`}
                            />

                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a^2-8b
&=(4+2\sqrt2)^2-8(2\sqrt2)\\
&=24+16\sqrt2-16\sqrt2\\
&=\boxed{24}
\end{aligned}
`}
                            />

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
                            원{" "}
                            <InlineMath math="(x+3)^2+(y-2)^2=25" />와
                            이 원을 <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="2" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="a" />만큼 평행이동한 원이<br />
                            만나는 두 점을 각각 <InlineMath math="A,\ B" />라 하면{" "}
                            <InlineMath math="\overline{AB}=6" />이다.
                            이때 양수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                원{" "}
                                <InlineMath math="(x+3)^2+(y-2)^2=25" />의
                                중심은 <InlineMath math="(-3,2)" />,
                                반지름은 <InlineMath math="5" />입니다.
                            </p>

                            <p className="leading-8">
                                중심을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="2" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
(-3,2)
\rightarrow
(-1,\;a+2)
`}
                            />

                            <p className="leading-8">
                                입니다.
                                평행이동을 해도 반지름은 변하지 않으므로
                                두 원의 반지름은 모두 <InlineMath math="5" />입니다.
                            </p>


                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    공통현의 길이 이용하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 원의 반지름이 같으므로 공통현은
                                    두 중심을 잇는 선분을 수직이등분합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                공통현의 길이가{" "}
                                <InlineMath math="6" />이므로
                                현의 절반의 길이는{" "}
                                <InlineMath math="3" />입니다.
                            </p>

                            <p className="leading-8">
                                중심에서 공통현까지의 거리를{" "}
                                <InlineMath math="d" />라 하면
                                피타고라스의 정리에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
d^2+3^2=5^2
`}
                            />

                            <BlockMath
                                math={String.raw`
d=4
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 중심 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
4+4=8
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                두 중심{" "}
                                <InlineMath math="(-3,2)" />와{" "}
                                <InlineMath math="(-1,a+2)" /> 사이의 거리가{" "}
                                <InlineMath math="8" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\sqrt{
\{(-1)-(-3)\}^2+
\{(a+2)-2\}^2
}
=8
`}
                            />

                            <BlockMath
                                math={String.raw`
\sqrt{4+a^2}=8
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2=60
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{a=2\sqrt{15}}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 9 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="(1,a)" />를
                            점 <InlineMath math="(2,2a)" />로 옮기는 평행이동에 의하여
                            포물선 <InlineMath math="y=-x^2+2x" />를 평행이동하면<br />
                            직선 <InlineMath math="y=2x+2" />와 접할 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(1,a)" />가
                                점 <InlineMath math="(2,2a)" />로 이동하므로
                                평행이동량은
                            </p>

                            <BlockMath
                                math={String.raw`
(2-1,\;2a-a)=(1,a)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                포물선{" "}
                                <InlineMath math="y=-x^2+2x" />를
                                꼭짓점 형태로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
y=-(x-1)^2+1
`}
                            />

                            <p className="leading-8">
                                이므로 꼭짓점은{" "}
                                <InlineMath math="(1,1)" />입니다.
                            </p>

                            <p className="leading-8">
                                꼭짓점을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="1" />만큼,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
(1,1)
\rightarrow
(2,a+1)
`}
                            />

                            <p className="leading-8">
                                입니다.
                                평행이동을 해도 포물선의 모양은 변하지 않으므로
                                이동한 포물선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
y=-(x-2)^2+a+1
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 포물선이 직선{" "}
                                <InlineMath math="y=2x+2" />와 접하므로
                                두 식을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
-(x-2)^2+a+1=2x+2
`}
                            />

                            <BlockMath
                                math={String.raw`
x^2-2x-a+5=0
`}
                            />

                            <p className="leading-8">
                                이 이차방정식이 중근을 가져야 하므로{" "}
                                <InlineMath math="\dfrac{D}{4}=0" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{D}{4}
=
(-1)^2-1(-a+5)
=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a-4=0
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{a=4}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 10 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            포물선 <InlineMath math="y=x^2-4x" />를
                            포물선 <InlineMath math="y=x^2-12x+27" />로 옮기는
                            평행이동에 의하여 <br />직선{" "}
                            <InlineMath math="l:2x+y-1=0" />이
                            직선 <InlineMath math="l'" />로 옮겨진다.
                            이때 두 직선 <InlineMath math="l" />과{" "}
                            <InlineMath math="l'" /> 사이의 거리를{" "}
                            <InlineMath math="d" />라 할 때,<br />
                            <InlineMath math="5d^2" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4">

                        <summary className="cursor-pointer font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p className="leading-8">
                                두 포물선을 꼭짓점 형태로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
y=(x-2)^2-4
`}
                            />

                            <BlockMath
                                math={String.raw`
y=(x-6)^2-9
`}
                            />

                            <p className="leading-8">
                                이므로 두 포물선의 꼭짓점은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
(2,-4),\qquad (6,-9)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 이 평행이동은
                            </p>

                            <BlockMath
                                math={String.raw`
(2,-4)\rightarrow(6,-9)
`}
                            />

                            <p className="leading-8">
                                이므로{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="4" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="-5" />만큼의 평행이동입니다.
                            </p>


                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    같은 평행이동을 직선에 적용
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직선의 식을 평행이동하므로
                                    문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="x-4" />,
                                    문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="y+5" />를 대입합니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                따라서 직선 <InlineMath math="l" />의
                                평행이동한 직선 <InlineMath math="l'" />은
                            </p>

                            <BlockMath
                                math={String.raw`
2(x-4)+(y+5)-1=0
`}
                            />

                            <BlockMath
                                math={String.raw`
l':2x+y-4=0
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                두 직선
                            </p>

                            <BlockMath
                                math={String.raw`
l:2x+y-1=0,\qquad
l':2x+y-4=0
`}
                            />

                            <p className="leading-8">
                                은 서로 평행하므로 두 직선 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d
=
\frac{|(-1)-(-4)|}{\sqrt{2^2+1^2}}
=
\frac{3}{\sqrt5}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
5d^2
=
5\left(\frac{3}{\sqrt5}\right)^2
=
\boxed{9}
`}
                            />

                        </div>

                    </details>

                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-6 text-gray-300">

                        {/* 점 */}
                        <div>

                            <p className="font-bold text-white">
                                1. 점의 평행이동
                            </p>

                            <p className="mt-2 leading-8">
                                점의 이동은 순서쌍에서{" "}
                                <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표를 기준으로 변형합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(x,y)
\rightarrow
(x+m,\;y+n)
}
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />좌표에{" "}
                                <InlineMath math="+m" />,{" "}
                                <InlineMath math="y" />좌표에{" "}
                                <InlineMath math="+n" />을 합니다.
                            </p>

                        </div>


                        {/* 식 */}
                        <div>

                            <p className="font-bold text-white">
                                2. 식의 평행이동
                            </p>

                            <p className="mt-2 leading-8">
                                식의 이동은 식에 사용된 문자{" "}
                                <InlineMath math="x,y" />를 기준으로 변형합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(x-m,\;y-n)=0
}
`}
                            />

                            <p className="leading-8">
                                문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="x-m" />,
                                문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="y-n" />을 대입합니다.
                            </p>

                        </div>


                        {/* 모양 */}
                        <div>

                            <p className="font-bold text-white">
                                3. 평행이동과 도형의 모양
                            </p>

                            <p className="mt-2 leading-8">
                                평행이동을 해도 도형의 모양과 크기는 변하지 않습니다.
                            </p>

                            <div className="mt-3 space-y-2 leading-8">

                                <p>
                                    • 이차함수 :{" "}
                                    <strong className="text-white">
                                        {" "}꼭짓점을 평행이동
                                    </strong>
                                    하고 이차계수는 그대로 유지
                                </p>

                                <p>
                                    • 원 :{" "}
                                    <strong className="text-white">
                                        {" "}중심을 평행이동
                                    </strong>
                                    하고 반지름은 그대로 유지
                                </p>

                            </div>

                        </div>


                        {/* 좌표 표기 */}
                        <div>

                            <p className="font-bold text-white">
                                4. 이동 전과 이동 후의 좌표
                            </p>

                            <p className="mt-2 leading-8">
                                이동 과정에서는
                            </p>

                            <BlockMath
                                math={String.raw`
(x,y)\rightarrow(x',y')
`}
                            />

                            <p className="leading-8">
                                로 구분하고,
                                이동이 끝난 후에는{" "}
                                <InlineMath math="x',y'" />를 다시{" "}
                                <InlineMath math="x,y" />로 나타냅니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.26 대칭이동 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.26 대칭이동
                </h2>

                <p className="leading-8 text-gray-300">
                    대칭이동은 점 또는 직선을 기준으로
                    대칭인 위치로 도형을 이동시키는 것입니다.
                    <br />
                    평행이동과 마찬가지로 도형의 모양과 크기는 변하지 않습니다.
                </p>


                <div className="mt-8 space-y-8">

                    {/* 1. 선대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 선대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.26_1.png"
                                    alt="직선 l에 대한 선대칭"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>


                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="A(x,y)" />를
                                    직선 <InlineMath math="l" />에 대하여
                                    대칭이동한 점을{" "}
                                    <InlineMath math="A'(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    선대칭에서는 다음 두 조건이 성립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\overline{AA'}\perp l
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉, 원래의 점과 대칭이동한 점을 이은 선분은
                                    대칭축과 수직입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 선분{" "}
                                    <InlineMath math="\overline{AA'}" />의
                                    중점은 대칭축 <InlineMath math="l" /> 위에 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\left(
\frac{x+x'}{2},
\frac{y+y'}{2}
\right)
\text{가 직선 }l\text{ 위에 있다}
}
`}
                                />

                            </div>

                        </div>


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                선대칭의 핵심
                            </p>

                            <div className="mt-3 space-y-2 text-gray-300">

                                <p className="leading-8">
                                    • <InlineMath math="\overline{AA'}" />는
                                    대칭축과 수직
                                </p>

                                <p className="leading-8">
                                    • <InlineMath math="\overline{AA'}" />의
                                    중점은 대칭축 위에 있음
                                </p>

                            </div>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{선대칭}
=
\text{수직}
+
\text{중점}
}
`}
                            />

                        </div>

                    </div>


                    {/* 2. 점대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 점대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.26_2.png"
                                    alt="점 P에 대한 점대칭"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>


                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="A(x,y)" />를
                                    점 <InlineMath math="P" />에 대하여
                                    대칭이동한 점을
                                    <InlineMath math="A'(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    점대칭에서는 대칭점{" "}
                                    <InlineMath math="P" />가
                                    선분 <InlineMath math="\overline{AA'}" />의
                                    중점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
P=
\left(
\frac{x+x'}{2},
\frac{y+y'}{2}
\right)
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉,{" "}
                                    <InlineMath math="A" />와{" "}
                                    <InlineMath math="A'" />는
                                    점 <InlineMath math="P" />를 기준으로
                                    서로 반대쪽에 같은 거리만큼 떨어져 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
AP=PA'
}
`}
                                />

                            </div>

                        </div>


                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                점대칭의 핵심
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                대칭점이 원래의 점과 대칭이동한 점의
                                <strong className="text-white">
                                    {" "}중점
                                </strong>
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
P=\frac{A+A'}{2}
}
`}
                            />

                        </div>

                    </div>


                    {/* 3. 점과 식의 대칭이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 점과 식의 대칭이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            평행이동과 마찬가지로
                            점의 이동과 식의 이동은 기준을 구분하여 생각합니다.
                        </p>

                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* 점 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    점의 대칭이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    순서쌍에서
                                    <strong className="text-white">
                                        {" "}<InlineMath math="x" />좌표와 <InlineMath math="y" />좌표
                                    </strong>
                                    를 기준으로 변형합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x,y)
\rightarrow
(x',y')
`}
                                />

                            </div>


                            {/* 식 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    식의 대칭이동
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    식에 사용된
                                    <strong className="text-white">
                                        {" "}문자 <InlineMath math="x" />, <InlineMath math="y" />
                                    </strong>
                                    가 어떻게 변하는지를 기준으로 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(x',y')=0
`}
                                />

                            </div>

                        </div>

                    </div>

                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <div>

                            <p className="font-bold text-white">
                                1. 선대칭
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\overline{AA'}\perp l
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
\left(
\frac{x+x'}2,
\frac{y+y'}2
\right)
\text{가 대칭축 }l\text{ 위에 있다}
}
`}
                            />

                        </div>


                        <div>

                            <p className="font-bold text-white">
                                2. 점대칭
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
P=
\left(
\frac{x+x'}2,
\frac{y+y'}2
\right)
}
`}
                            />

                            <p className="leading-8">
                                대칭점 <InlineMath math="P" />는
                                선분 <InlineMath math="\overline{AA'}" />의
                                중점입니다.
                            </p>

                        </div>


                        <div>

                            <p className="font-bold text-white">
                                3. 대칭이동에서도 기준을 구분
                            </p>

                            <p className="mt-2 leading-8">
                                • 점의 이동 :
                                순서쌍에서 <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표를 기준으로 변형
                            </p>

                            <p className="leading-8">
                                • 식의 이동 :
                                식에 사용된 문자{" "}
                                <InlineMath math="x,\ y" />를 기준으로 변형
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.27 기본적인 선대칭과 점대칭 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.27 기본적인 선대칭과 점대칭
                </h2>

                <p className="leading-8 text-gray-300">
                    좌표평면에서 자주 사용하는 기본적인 대칭이동을 알아봅시다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    점의 이동은 순서쌍에서{" "}
                    <strong className="text-white"> <InlineMath math="x" />좌표와 <InlineMath math="y" />좌표</strong>가
                    어떻게 변하는지를 생각하고,
                    식의 이동은 식에 사용된{" "}
                    <strong className="text-white"> 문자 <InlineMath math="x" />, <InlineMath math="y" /></strong>를
                    어떻게 바꾸어야 하는지를 생각합니다.
                </p>


                <div className="mt-8 space-y-8">

                    {/* 1. x축 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. <InlineMath math="x" />축에 대한 대칭이동
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.27_1.png"
                                    alt="x축에 대한 대칭이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="font-bold text-white">
                                    점의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="x" />좌표는 그대로이고,{" "}
                                    <InlineMath math="y" />좌표의 부호를 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{(x,y)\rightarrow(x,-y)}
`}
                                />

                                <p className="mt-4 font-bold text-white">
                                    식의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    식에서 문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="-y" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(x,-y)=0
}
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 2. y축 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. <InlineMath math="y" />축에 대한 대칭이동
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.27_2.png"
                                    alt="y축에 대한 대칭이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="font-bold text-white">
                                    점의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="y" />좌표는 그대로이고,{" "}
                                    <InlineMath math="x" />좌표의 부호를 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{(x,y)\rightarrow(-x,y)}
`}
                                />

                                <p className="mt-4 font-bold text-white">
                                    식의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    식에서 문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="-x" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(-x,y)=0
}
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 3. y=x 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            3. 직선 <InlineMath math="y=x" />에 대한 대칭이동
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.27_3.png"
                                    alt="직선 y=x에 대한 대칭이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="font-bold text-white">
                                    점의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="x" />좌표와{" "}
                                    <InlineMath math="y" />좌표를 서로 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{(x,y)\rightarrow(y,x)}
`}
                                />

                                <p className="mt-4 font-bold text-white">
                                    식의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    식에서 문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="y" />를,
                                    문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="x" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(y,x)=0
}
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 4. y=-x 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            4. 직선 <InlineMath math="y=-x" />에 대한 대칭이동
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.27_4.png"
                                    alt="직선 y=-x에 대한 대칭이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="font-bold text-white">
                                    점의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="x" />좌표와{" "}
                                    <InlineMath math="y" />좌표를 서로 바꾸고
                                    각각의 부호를 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x,y)\rightarrow(-y,-x)
}
`}
                                />

                                <p className="mt-4 font-bold text-white">
                                    식의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    식에서 문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="-y" />를,
                                    문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="-x" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(-y,-x)=0
}
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 5. 원점 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            5. 원점에 대한 대칭이동
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">
                                <img
                                    src="/images/commonMath2/1.27_5.png"
                                    alt="원점에 대한 대칭이동"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />
                            </div>

                            {/* 설명 */}
                            <div className="flex flex-col justify-center">

                                <p className="font-bold text-white">
                                    점의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="x" />좌표와{" "}
                                    <InlineMath math="y" />좌표의 부호를
                                    모두 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x,y)\rightarrow(-x,-y)
}
`}
                                />

                                <p className="mt-4 font-bold text-white">
                                    식의 이동
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    식에서 문자 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="-x" />를,
                                    문자 <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="-y" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(-x,-y)=0
}
`}
                                />

                            </div>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="font-bold text-blue-300">
                            원점 대칭을 다른 방법으로 생각하면
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            원점에 대한 대칭이동은 원점을 중심으로{" "}
                            <InlineMath math="180^\circ" /> 회전하는 것과 같습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{원점 대칭}
=
180^\circ\text{ 회전}
}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            또한 <InlineMath math="x" />축 대칭과{" "}
                            <InlineMath math="y" />축 대칭을 차례로 해도
                            같은 결과가 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
(x,y)
\rightarrow
(x,-y)
\rightarrow
(-x,-y)
`}
                        />

                        <BlockMath
                            math={String.raw`
(x,y)
\rightarrow
(-x,y)
\rightarrow
(-x,-y)
`}
                        />

                        <p className="mt-3 text-center leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{원점 대칭}
=
x\text{축 대칭 후 }y\text{축 대칭}
=
y\text{축 대칭 후 }x\text{축 대칭}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 점{" "}
                            <InlineMath math="(a,-b)" />를{" "}
                            <InlineMath math="y" />축에 대하여 대칭이동시켰더니
                            제4사분면 위의 점이 되었을 때, 점{" "}
                            <InlineMath math="(ab,a-b)" />가 위치하는 사분면은?
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="y" />축에 대하여 대칭이동하면{" "}
                                <InlineMath math="x" />좌표의 부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
(a,-b)\rightarrow(-a,-b)
`}
                            />

                            <p className="leading-8">
                                대칭이동한 점이 제4사분면 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
-a>0,\qquad -b<0
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a<0,\qquad b>0
`}
                            />

                            <p className="leading-8">
                                이제 점 <InlineMath math="(ab,a-b)" />의
                                두 좌표의 부호를 각각 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
ab<0,\qquad a-b<0
`}
                            />

                            <p className="leading-8">
                                두 좌표가 모두 음수이므로 점{" "}
                                <InlineMath math="(ab,a-b)" />는
                                제3사분면 위에 있습니다.
                            </p>

                            <div className="mt-5 rounded-lg border border-yellow-500/30 bg-yellow-500/5 p-4 text-center">

                                <InlineMath math="\boxed{\text{제3사분면}}" />

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
                            점 <InlineMath math="A(2,1)" />을
                            원점에 대하여 대칭이동한 점을{" "}
                            <InlineMath math="B" />,
                            직선 <InlineMath math="y=x" />에 대하여
                            대칭이동한 점을 <InlineMath math="C" />라 할 때,<br />
                            세 점 <InlineMath math="A,\ B,\ C" />를 꼭짓점으로 하는
                            삼각형 <InlineMath math="ABC" />의 넓이를 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="A(2,1)" />을
                                원점에 대하여 대칭이동하면
                                두 좌표의 부호가 모두 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
B=(-2,-1)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                또 직선 <InlineMath math="y=x" />에 대하여
                                대칭이동하면{" "}
                                <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표가 서로 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
C=(1,2)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                삼각형의 넓이는 평행이동해도 변하지 않으므로,
                                점 <InlineMath math="A(2,1)" />이 원점으로 오도록
                                세 점을 모두 평행이동합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A(2,1)\rightarrow(0,0)
`}
                            />

                            <BlockMath
                                math={String.raw`
B(-2,-1)\rightarrow(-4,-2)
`}
                            />

                            <BlockMath
                                math={String.raw`
C(1,2)\rightarrow(-1,1)
`}
                            />

                            <p className="leading-8">
                                따라서 삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac12
\left|
(-4)(1)-(-2)(-1)
\right|
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac12|-6|
=
\boxed{3}
`}
                            />

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
                            직선 <InlineMath math="4x+3y-12=0" />이{" "}
                            <InlineMath math="x" />축,{" "}
                            <InlineMath math="y" />축과 만나는 점을 각각{" "}
                            <InlineMath math="A,\ B" />라 하자.
                            선분 <InlineMath math="AB" />를{" "}
                            <InlineMath math="2:1" />로 내분하는 점을{" "}
                            <InlineMath math="P" />라 할 때,
                            점 <InlineMath math="P" />를{" "}
                            <InlineMath math="x" />축,{" "}
                            <InlineMath math="y" />축에 대하여 대칭이동한 점을 각각{" "}
                            <InlineMath math="Q,\ R" />이라 하자.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            삼각형 <InlineMath math="RQP" />의 무게중심의 좌표를{" "}
                            <InlineMath math="(a,b)" />라 할 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="4x+3y-12=0" />의{" "}
                                <InlineMath math="x" />절편과{" "}
                                <InlineMath math="y" />절편을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
A=(3,0),\qquad B=(0,4)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                점 <InlineMath math="P" />는 선분{" "}
                                <InlineMath math="AB" />를{" "}
                                <InlineMath math="2:1" />로 내분하므로
                            </p>

                            <BlockMath
                                math={String.raw`
P=
\left(
\frac{1\cdot3+2\cdot0}{3},
\frac{1\cdot0+2\cdot4}{3}
\right)
`}
                            />

                            <BlockMath
                                math={String.raw`
P=
\left(
1,\frac83
\right)
`}
                            />

                            <p className="mt-3 leading-8">
                                점 <InlineMath math="P" />를{" "}
                                <InlineMath math="x" />축에 대하여 대칭이동하면{" "}
                                <InlineMath math="y" />좌표의 부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
Q=
\left(
1,-\frac83
\right)
`}
                            />

                            <p className="leading-8">
                                점 <InlineMath math="P" />를{" "}
                                <InlineMath math="y" />축에 대하여 대칭이동하면{" "}
                                <InlineMath math="x" />좌표의 부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
R=
\left(
-1,\frac83
\right)
`}
                            />

                            <p className="mt-3 leading-8">
                                따라서 삼각형 <InlineMath math="RQP" />의
                                무게중심의 좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{-1+1+1}{3},
\frac{\frac83-\frac83+\frac83}{3}
\right)
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\left(
\frac13,\frac89
\right)
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a=\frac13,\qquad b=\frac89
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b
=
\frac13+\frac89
=
\boxed{\frac{11}{9}}
`}
                            />

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
                                그림과 같이 원{" "}
                                <InlineMath math="x^2+y^2=75" /> 위에{" "}
                                <InlineMath math="x" />좌표가 각각{" "}
                                <InlineMath math="2,\ 5" />인 두 점{" "}
                                <InlineMath math="A_1,\ A_2" />가 있다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                점 <InlineMath math="B(-5\sqrt3,0)" />을 지나고
                                두 직선 <InlineMath math="A_1B,\ A_2B" />에 각각
                                수직인 두 직선이 원과 만나는 점 중
                                점 <InlineMath math="B" />가 아닌 두 점을 각각{" "}
                                <InlineMath math="C_1,\ C_2" />라 하자.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                점 <InlineMath math="C_1" />의{" "}
                                <InlineMath math="x" />좌표를 <InlineMath math="a" />,
                                점 <InlineMath math="C_2" />의{" "}
                                <InlineMath math="y" />좌표를 <InlineMath math="b" />라 할 때,{" "}
                                <InlineMath math="a^2+b^2" />의 값을 구하시오.
                                (단, 두 점 <InlineMath math="A_1,\ A_2" />는
                                제1사분면 위에 있다.)
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.27_04.png"
                                alt="원 위의 점과 원점 대칭을 이용하는 문제"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="A_1B" />와{" "}
                                <InlineMath math="BC_1" />은 서로 수직이고,{" "}
                                <InlineMath math="A_2B" />와{" "}
                                <InlineMath math="BC_2" />도 서로 수직이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\angle A_1BC_1
=
\angle A_2BC_2
=
90^\circ
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                원주각의 크기가{" "}
                                <InlineMath math="90^\circ" />이므로
                                선분 <InlineMath math="A_1C_1" />과
                                선분 <InlineMath math="A_2C_2" />는
                                모두 원의 지름입니다.
                            </p>

                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    원점 대칭 이용
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원의 중심은 원점이므로
                                    지름의 양 끝점은 서로 원점에 대한 대칭점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A_1\longleftrightarrow C_1,
\qquad
A_2\longleftrightarrow C_2
`}
                                />

                            </div>

                            <p className="mt-5 leading-8">
                                점 <InlineMath math="A_1" />의{" "}
                                <InlineMath math="x" />좌표가{" "}
                                <InlineMath math="2" />이므로,
                                원점에 대하여 대칭인 점{" "}
                                <InlineMath math="C_1" />의{" "}
                                <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
a=-2
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                점 <InlineMath math="A_2" />의{" "}
                                <InlineMath math="x" />좌표는{" "}
                                <InlineMath math="5" />이고
                                제1사분면 위의 점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
5^2+y^2=75
`}
                            />

                            <BlockMath
                                math={String.raw`
y^2=50
`}
                            />

                            <BlockMath
                                math={String.raw`
y=5\sqrt2
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                따라서 점 <InlineMath math="C_2" />는
                                점 <InlineMath math="A_2" />의 원점 대칭점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
b=-5\sqrt2
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+b^2
=
(-2)^2+(-5\sqrt2)^2
`}
                            />

                            <BlockMath
                                math={String.raw`
=
4+50
=
\boxed{54}
`}
                            />

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
                            직선 <InlineMath math="x+3y-4=0" />을
                            직선 <InlineMath math="y=x" />에 대하여
                            대칭이동한 직선을 <InlineMath math="l" />이라 할 때,
                            원 <InlineMath math="(x-1)^2+y^2=4" />와
                            직선 <InlineMath math="l" />의 교점의 개수를 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                식을 직선 <InlineMath math="y=x" />에 대하여
                                대칭이동할 때는 식에 사용된 문자{" "}
                                <InlineMath math="x,\ y" />를 서로 바꿉니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x+3y-4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
y+3x-4=0
`}
                            />

                            <p className="leading-8">
                                따라서 직선 <InlineMath math="l" />의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
l:3x+y-4=0
`}
                            />

                            <p className="mt-3 leading-8">
                                원{" "}
                                <InlineMath math="(x-1)^2+y^2=4" />의
                                중심은 <InlineMath math="(1,0)" />,
                                반지름은 <InlineMath math="2" />입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                원의 중심에서 직선 <InlineMath math="l" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|3(1)+0-4|}
{\sqrt{3^2+1^2}}
=
\frac{1}{\sqrt{10}}
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                중심에서 직선까지의 거리가 반지름보다 작으므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac1{\sqrt{10}}<2
`}
                            />

                            <p className="leading-8">
                                직선은 원을 서로 다른 두 점에서 만납니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{2}
`}
                            />

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
                            직선 <InlineMath math="x+y-4=0" />을
                            원점에 대하여 대칭이동한 직선이
                            원 <InlineMath math="x^2+y^2+ax-4y-6=0" />의
                            넓이를 이등분할 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                식을 원점에 대하여 대칭이동할 때는
                                문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-x" />,
                                문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="-y" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(-x)+(-y)-4=0
`}
                            />

                            <p className="leading-8">
                                따라서 대칭이동한 직선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
x+y+4=0
`}
                            />


                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    원의 넓이를 이등분하는 직선
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직선이 원의 넓이를 이등분하려면
                                    원의 중심을 지나야 합니다.
                                </p>

                            </div>


                            <p className="mt-5 leading-8">
                                원{" "}
                                <InlineMath math="x^2+y^2+ax-4y-6=0" />의
                                중심은
                            </p>

                            <BlockMath
                                math={String.raw`
\left(-\frac a2,\;2\right)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                이 중심이 대칭이동한 직선{" "}
                                <InlineMath math="x+y+4=0" /> 위에 있으므로
                                바로 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
-\frac a2+2+4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
-\frac a2+6=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a=12
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{12}
`}
                            />

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
                            직선{" "}
                            <InlineMath math="(3k+2)x+(2k+1)y-4k-1=0" />을
                            직선 <InlineMath math="y=x" />에 대칭이동한 직선이
                            실수 <InlineMath math="k" />의 값에 관계없이 항상
                            점 <InlineMath math="(a,b)" />를 지날 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="y=x" />에 대하여
                                대칭이동할 때는 식에 사용된 문자{" "}
                                <InlineMath math="x,\ y" />를 서로 바꿉니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(3k+2)y+(2k+1)x-4k-1=0
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="k" />에 대하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
k(2x+3y-4)+(x+2y-1)=0
`}
                            />

                            <p className="mt-3 leading-8">
                                이 직선이 실수 <InlineMath math="k" />의 값에 관계없이
                                항상 점 <InlineMath math="(a,b)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
2a+3b-4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a+2b-1=0
`}
                            />

                            <p className="leading-8">
                                두 식을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
a=5,\qquad b=-2
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b=5-2=\boxed{3}
`}
                            />

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
                            직선 <InlineMath math="x-2y+6=0" />을{" "}
                            <InlineMath math="y" />축에 대하여 대칭이동한 직선에
                            수직이고 점 <InlineMath math="(-3,-1)" />을 지나는
                            직선의 방정식이 <InlineMath math="y=ax+b" />일 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="y" />축에 대하여 대칭이동할 때는
                                식의 문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-x" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
-x-2y+6=0
`}
                            />

                            <p className="mt-3 leading-8">
                                직선{" "}
                                <InlineMath math="Ax+By+C=0" />에 수직인 직선은{" "}
                                <InlineMath math="x" />와 <InlineMath math="y" />의
                                계수를 서로 바꾸고 한쪽의 부호를 바꾸어 나타낼 수 있습니다.
                            </p>

                            <p className="mt-3 leading-8">
                                따라서{" "}
                                <InlineMath math="-x-2y+6=0" />에 수직인 직선을
                            </p>

                            <BlockMath
                                math={String.raw`
-2x+y+c=0
`}
                            />

                            <p className="leading-8">
                                으로 둘 수 있습니다.
                            </p>

                            <p className="mt-3 leading-8">
                                이 직선이 점{" "}
                                <InlineMath math="(-3,-1)" />을 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
-2(-3)+(-1)+c=0
`}
                            />

                            <BlockMath
                                math={String.raw`
c=-5
`}
                            />

                            <p className="leading-8">
                                따라서 직선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
-2x+y-5=0
`}
                            />

                            <p className="leading-8">
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
y=2x+5
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a=2,\qquad b=5
`}
                            />

                            <p className="mt-3 leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b=2+5=\boxed{7}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 9 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 9
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="x^2+y^2+8x-10y+28=0" />을{" "}
                            <InlineMath math="x" />축에 대하여 대칭이동한 원이
                            직선 <InlineMath math="y=mx" />에 접하도록 하는
                            모든 실수 <InlineMath math="m" />의 값의 곱을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="x" />축에 대하여 대칭이동할 때는
                                식의 문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="-y" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+(-y)^2+8x-10(-y)+28=0
`}
                            />

                            <p className="leading-8">
                                따라서 대칭이동한 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2+8x+10y+28=0
`}
                            />

                            <p className="mt-3 leading-8">
                                이 원의 중심은{" "}
                                <InlineMath math="(-4,-5)" />이고,
                                반지름을 <InlineMath math="r" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
r^2
=
(-4)^2+(-5)^2-28
=
16+25-28
=
13
`}
                            />

                            <BlockMath
                                math={String.raw`
r=\sqrt{13}
`}
                            />

                            <p className="mt-3 leading-8">
                                직선 <InlineMath math="y=mx" />를
                                일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
mx-y=0
`}
                            />

                            <p className="mt-3 leading-8">
                                직선이 원에 접하므로
                                <strong className="text-white">
                                    {" "}원의 중심과 직선 사이의 거리는 반지름과 같습니다.
                                </strong>
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|m(-4)-(-5)|}{\sqrt{m^2+1}}
=
\sqrt{13}
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac{|-4m+5|}{\sqrt{m^2+1}}
=
\sqrt{13}
`}
                            />

                            <p className="leading-8">
                                양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
(-4m+5)^2
=
13(m^2+1)
`}
                            />

                            <BlockMath
                                math={String.raw`
16m^2-40m+25
=
13m^2+13
`}
                            />

                            <BlockMath
                                math={String.raw`
3m^2-40m+12=0
`}
                            />

                            <p className="mt-3 leading-8">
                                따라서 모든 <InlineMath math="m" />의 값의 곱은
                                근과 계수의 관계에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{12}{3}
=
\boxed{4}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 10 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 10
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="C_1:x^2+y^2+6x-2y+6=0" />을{" "}
                            <InlineMath math="y" />축에 대하여 대칭이동한 원을{" "}
                            <InlineMath math="C_2" />라 하자.
                            원 <InlineMath math="C_1" /> 위의 임의의 점{" "}
                            <InlineMath math="P" />와
                            원 <InlineMath math="C_2" /> 위의 임의의 점{" "}
                            <InlineMath math="Q" />에 대하여
                            두 점 <InlineMath math="P,\ Q" /> 사이의 거리의
                            최솟값을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="C_1" />의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(-3,1)
`}
                            />

                            <p className="leading-8">
                                이고, 반지름의 제곱은
                            </p>

                            <BlockMath
                                math={String.raw`
r^2
=
(-3)^2+1^2-6
=
4
`}
                            />

                            <p className="leading-8">
                                이므로 반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
r=2
`}
                            />

                            <p className="mt-3 leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                원 <InlineMath math="C_1" />을{" "}
                                <InlineMath math="y" />축에 대하여 대칭이동하면
                                중심의 <InlineMath math="x" />좌표의 부호가 바뀌므로
                                원 <InlineMath math="C_2" />의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(3,1)
`}
                            />

                            <p className="leading-8">
                                입니다.
                                대칭이동을 해도 원의 크기는 변하지 않으므로
                                원 <InlineMath math="C_2" />의 반지름도{" "}
                                <InlineMath math="2" />입니다.
                            </p>

                            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    두 원 위의 점 사이의 최솟값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 원이 서로 떨어져 있을 때,
                                    두 원 위의 점 사이의 거리가 최소가 되는 두 점은
                                    두 중심을 잇는 직선 위에 있습니다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8">
                                두 원의 중심 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
3-(-3)=6
`}
                            />

                            <p className="leading-8">
                                이므로 두 원 위의 점 사이 거리의 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
6-2-2
=
\boxed{2}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 11 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 11
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            포물선{" "}
                            <InlineMath math="y=2x^2+12x+5" />를
                            원점에 대하여 대칭이동한 후 다시{" "}
                            <InlineMath math="x" />축에 대하여 대칭이동한
                            포물선의 꼭짓점의 좌표가 직선{" "}
                            <InlineMath math="y=kx+2" /> 위에 있을 때,
                            상수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                포물선은 대칭이동하여도 모양이 변하지 않으므로
                                꼭짓점을 점으로 생각하여 대칭이동하면 됩니다.
                            </p>

                            <p className="mt-3 leading-8">
                                주어진 포물선을 꼭짓점 형태로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
y
=
2(x+3)^2-13
`}
                            />

                            <p className="leading-8">
                                이므로 꼭짓점은
                            </p>

                            <BlockMath
                                math={String.raw`
(-3,-13)
`}
                            />

                            <p className="mt-3 leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                먼저 원점에 대하여 대칭이동하면
                                두 좌표의 부호가 모두 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
(-3,-13)
\rightarrow
(3,13)
`}
                            />

                            <p className="leading-8">
                                다시 <InlineMath math="x" />축에 대하여
                                대칭이동하면 <InlineMath math="y" />좌표의
                                부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
(3,13)
\rightarrow
(3,-13)
`}
                            />

                            <p className="mt-3 leading-8">
                                따라서 최종 포물선의 꼭짓점은
                            </p>

                            <BlockMath
                                math={String.raw`
(3,-13)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                이 점이 직선{" "}
                                <InlineMath math="y=kx+2" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
-13=3k+2
`}
                            />

                            <BlockMath
                                math={String.raw`
3k=-15
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{k=-5}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 예제 12 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 12
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            포물선{" "}
                            <InlineMath math="y=-x^2+3x+1" />을
                            원점에 대하여 대칭이동하면 직선{" "}
                            <InlineMath math="y=ax-5" />와 접한다고 할 때,
                            양수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-4 rounded-xl border border-white/10 bg-black/30">

                        <summary className="cursor-pointer p-4 font-bold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="border-t border-white/10 p-5 text-gray-300">

                            <p className="leading-8">
                                원점에 대하여 대칭이동할 때는
                                식의 문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-x" />,{" "}
                                <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="-y" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
-y=-(-x)^2+3(-x)+1
`}
                            />

                            <BlockMath
                                math={String.raw`
y=x^2+3x-1
`}
                            />

                            <p className="mt-3 leading-8">
                                따라서 대칭이동한 포물선과 직선{" "}
                                <InlineMath math="y=ax-5" />의 교점의{" "}
                                <InlineMath math="x" />좌표는
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+3x-1=ax-5
`}
                            />

                            <BlockMath
                                math={String.raw`
x^2+(3-a)x+4=0
`}
                            />

                            <p className="mt-3 leading-8">
                                두 그래프가 접하므로 이 이차방정식은
                                중근을 갖습니다.
                                따라서 판별식 <InlineMath math="D=0" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
D=(3-a)^2-4\cdot1\cdot4=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(3-a)^2-16=0
`}
                            />

                            <BlockMath
                                math={String.raw`
3-a=\pm4
`}
                            />

                            <BlockMath
                                math={String.raw`
a=-1,\ 7
`}
                            />

                            <p className="mt-3 leading-8">
                                <InlineMath math="a" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{a=7}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-5 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="overflow-x-auto">

                        <div className="min-w-[720px]">

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] border-b border-white/20 pb-3 font-bold text-white">
                                <div>대칭의 기준</div>
                                <div>점의 이동</div>
                                <div>식의 이동</div>
                            </div>

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] items-center border-b border-white/10 py-4 text-gray-300">
                                <div><InlineMath math="x" />축</div>
                                <div><InlineMath math="(x,y)\to(x,-y)" /></div>
                                <div><InlineMath math="f(x,y)\to f(x,-y)" /></div>
                            </div>

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] items-center border-b border-white/10 py-4 text-gray-300">
                                <div><InlineMath math="y" />축</div>
                                <div><InlineMath math="(x,y)\to(-x,y)" /></div>
                                <div><InlineMath math="f(x,y)\to f(-x,y)" /></div>
                            </div>

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] items-center border-b border-white/10 py-4 text-gray-300">
                                <div><InlineMath math="y=x" /></div>
                                <div><InlineMath math="(x,y)\to(y,x)" /></div>
                                <div><InlineMath math="f(x,y)\to f(y,x)" /></div>
                            </div>

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] items-center border-b border-white/10 py-4 text-gray-300">
                                <div><InlineMath math="y=-x" /></div>
                                <div><InlineMath math="(x,y)\to(-y,-x)" /></div>
                                <div><InlineMath math="f(x,y)\to f(-y,-x)" /></div>
                            </div>

                            <div className="grid grid-cols-[1fr_1.3fr_1.7fr] items-center pt-4 text-gray-300">
                                <div>원점</div>
                                <div><InlineMath math="(x,y)\to(-x,-y)" /></div>
                                <div><InlineMath math="f(x,y)\to f(-x,-y)" /></div>
                            </div>

                        </div>

                    </div>

                    <div className="mt-6 rounded-lg border border-yellow-500/20 bg-black/20 p-4">

                        <p className="leading-8 text-gray-300">
                            <strong className="text-yellow-300">점의 이동</strong>은
                            순서쌍에서 <InlineMath math="x" />좌표와{" "}
                            <InlineMath math="y" />좌표를 변형하고,{" "}
                            <strong className="text-yellow-300"> 식의 이동</strong>은
                            식에 사용된 문자{" "}
                            <InlineMath math="x,\ y" />를 변형합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <strong className="text-yellow-300">
                                대칭이동에서는
                            </strong>{" "}
                            점의 이동과 식의 이동에 적용되는
                            <strong className="text-white"> 변환이 같습니다.</strong>
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.28 y=±x+k에 대한 선대칭 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.28 <InlineMath math="y=\pm x+k" />에 대한 선대칭
                </h2>

                <p className="leading-8 text-gray-300">
                    직선 <InlineMath math="y=x+k" /> 또는{" "}
                    <InlineMath math="y=-x+k" />에 대한 대칭이동은
                    정사각형의 대각선 좌표를 구하는 것과 같은 원리로
                    생각할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. y=x+k에 대한 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. <InlineMath math="y=x+k" />에 대한 대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.28_1.png"
                                    alt="y=x+k에 대한 대칭이동"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    대칭축{" "}
                                    <InlineMath math="y=x+k" />를{" "}
                                    <InlineMath math="x" />와{" "}
                                    <InlineMath math="y" />에 대하여 각각 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x=y-k,\qquad y=x+k
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        점의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="x" />좌표는
                                        대칭축을 <InlineMath math="x" />에 대하여
                                        정리한 식으로,{" "}
                                        <InlineMath math="y" />좌표는
                                        대칭축을 <InlineMath math="y" />에 대하여
                                        정리한 식으로 변형합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
(x,y)\rightarrow(y-k,\ x+k)
}
`}
                                    />

                                </div>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        식의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        식에 사용된 문자{" "}
                                        <InlineMath math="x" /> 대신{" "}
                                        <InlineMath math="y-k" />,{" "}
                                        <InlineMath math="y" /> 대신{" "}
                                        <InlineMath math="x+k" />를 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(y-k,\ x+k)=0
}
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 2. y=-x+k에 대한 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="y=-x+k" />에 대한 대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.28_2.png"
                                    alt="y=-x+k에 대한 대칭이동"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    대칭축{" "}
                                    <InlineMath math="y=-x+k" />를{" "}
                                    <InlineMath math="x" />와{" "}
                                    <InlineMath math="y" />에 대하여 각각 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x=-y+k,\qquad y=-x+k
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        점의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="x" />좌표는
                                        대칭축을 <InlineMath math="x" />에 대하여
                                        정리한 식으로,{" "}
                                        <InlineMath math="y" />좌표는
                                        대칭축을 <InlineMath math="y" />에 대하여
                                        정리한 식으로 변형합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
(x,y)\rightarrow(-y+k,\ -x+k)
}
`}
                                    />

                                </div>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        식의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        식에 사용된 문자{" "}
                                        <InlineMath math="x" /> 대신{" "}
                                        <InlineMath math="-y+k" />,{" "}
                                        <InlineMath math="y" /> 대신{" "}
                                        <InlineMath math="-x+k" />를 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(-y+k,\ -x+k)=0
}
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 3. 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 점의 대칭이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="(5,7)" />을
                            직선 <InlineMath math="y=x+3" />에 대하여
                            대칭이동한 점의 좌표를 구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            대칭축을 <InlineMath math="x" />와{" "}
                            <InlineMath math="y" />에 대하여 각각 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
x=y-3,\qquad y=x+3
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
(5,7)
\rightarrow
(7-3,\ 5+3)
=
(4,8)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 대칭이동한 점의 좌표는
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{(4,8)}
`}
                        />

                    </div>


                    {/* 4. 예시 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 식의 대칭이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="2x+3y+5=0" />을
                            직선 <InlineMath math="y=-x+1" />에 대하여
                            대칭이동한 직선의 방정식을 구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            대칭축을 <InlineMath math="x" />와{" "}
                            <InlineMath math="y" />에 대하여 각각 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
x=-y+1,\qquad y=-x+1
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 식의 문자 <InlineMath math="x" /> 대신{" "}
                            <InlineMath math="-y+1" />,{" "}
                            <InlineMath math="y" /> 대신{" "}
                            <InlineMath math="-x+1" />을 대입하면
                        </p>

                        <BlockMath
                            math={String.raw`
2(-y+1)+3(-x+1)+5=0
`}
                        />

                        <BlockMath
                            math={String.raw`
-3x-2y+10=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 대칭이동한 직선의 방정식은
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{3x+2y-10=0}
`}
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
                            원 <InlineMath math="x^2+(y-5)^2=4" />를
                            직선 <InlineMath math="y=-x-2" />에 대하여 대칭이동한
                            원 위의 점 <InlineMath math="P" />에서{" "}
                            <InlineMath math="x" />축까지의 거리의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="x^2+(y-5)^2=4" />의 중심은{" "}
                                <InlineMath math="(0,5)" />이고 반지름은{" "}
                                <InlineMath math="2" />입니다.
                            </p>

                            <p className="leading-8">
                                대칭축 <InlineMath math="y=-x-2" />를{" "}
                                <InlineMath math="x" />와 <InlineMath math="y" />에
                                대하여 각각 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=-y-2,\qquad y=-x-2
                `}
                            />

                            <p className="leading-8">
                                이므로 점의 대칭이동은
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x,y)
                    \rightarrow
                    (-y-2,-x-2)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원의 중심을 대칭이동
                                </p>

                                <p className="leading-8">
                                    원의 중심 <InlineMath math="(0,5)" />를
                                    대칭이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (0,5)
                        \rightarrow
                        (-5-2,-0-2)
                        =
                        (-7,-2)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    대칭이동을 해도 원의 모양과 크기는 변하지 않으므로
                                    반지름은 그대로 <InlineMath math="2" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 대칭이동한 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (x+7)^2+(y+2)^2=4
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                대칭이동한 원의 중심의 <InlineMath math="y" />좌표는{" "}
                                <InlineMath math="-2" />이고 반지름은{" "}
                                <InlineMath math="2" />이므로 원 위의 점의{" "}
                                <InlineMath math="y" />좌표의 범위는
                            </p>

                            <BlockMath
                                math={String.raw`
                    -4\le y\le 0
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="P" />에서{" "}
                                <InlineMath math="x" />축까지의 거리는{" "}
                                <InlineMath math="|y|" />이므로 그 최댓값은{" "}
                                <InlineMath math="4" />입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{4}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 대칭이동할 때 식 전체를 변환하지 않고
                                    원의 중심을 점으로 대칭이동할 수 있습니다.
                                    대칭이동을 해도 반지름은 변하지 않으므로,
                                    이동한 중심과 반지름을 이용하여 새로운 원을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{원의 중심}
                        \rightarrow
                        \text{점의 대칭이동}
                        \rightarrow
                        \text{반지름은 그대로}
                        \rightarrow
                        \text{거리의 최댓값}
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
                            직선 <InlineMath math="x+2y+3=0" />을
                            직선 <InlineMath math="x+y-1=0" />에 대하여
                            대칭이동한 직선이 점 <InlineMath math="(1,k)" />를
                            지날 때, <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                대칭축{" "}
                                <InlineMath math="x+y-1=0" />을{" "}
                                <InlineMath math="y" />에 대하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    y=-x+1
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                대칭축을 <InlineMath math="x" />와{" "}
                                <InlineMath math="y" />에 대하여 각각 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    x=-y+1,\qquad y=-x+1
                `}
                            />

                            <p className="leading-8">
                                이므로 식의 대칭이동에서는
                                문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-y+1" />,
                                문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="-x+1" />을 대입합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직선의 대칭이동
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (-y+1)+2(-x+1)+3=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -2x-y+6=0
                    `}
                                />

                                <p className="leading-8">
                                    따라서 대칭이동한 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2x+y-6=0}
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                이 직선이 점 <InlineMath math="(1,k)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    2(1)+k-6=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    k=4
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{4}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선 <InlineMath math="y=-x+k" />에 대한
                                    식의 대칭이동에서는 대칭축을{" "}
                                    <InlineMath math="x" />와{" "}
                                    <InlineMath math="y" />에 대하여 각각 정리한 식을
                                    원래 식의 문자 <InlineMath math="x,\ y" /> 대신
                                    대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        y=-x+1
                        \rightarrow
                        \begin{cases}
                        x=-y+1\\
                        y=-x+1
                        \end{cases}
                        \rightarrow
                        \text{원래 식에 대입}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>


                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <p>
                            • <InlineMath math="y=x+k" />에 대한 대칭
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(y-k,\ x+k)
}
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(y-k,\ x+k)=0
}
`}
                        />

                        <p>
                            • <InlineMath math="y=-x+k" />에 대한 대칭
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(-y+k,\ -x+k)
}
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(-y+k,\ -x+k)=0
}
`}
                        />

                        <div className="rounded-xl border border-yellow-500/30 bg-black/20 p-5">

                            <p className="leading-8">
                                • 점의 이동은
                                <InlineMath math="x" />좌표와{" "}
                                <InlineMath math="y" />좌표를 기준으로 변형합니다.
                            </p>

                            <p className="mt-3 leading-8">
                                • 식의 이동은 식에 사용된 문자{" "}
                                <InlineMath math="x" />,{" "}
                                <InlineMath math="y" />를 기준으로 변형합니다.
                            </p>

                            <p className="mt-3 leading-8">
                                • <InlineMath math="y=\pm x+k" />에 대한 대칭에서는
                                대칭축을 <InlineMath math="x" />와{" "}
                                <InlineMath math="y" />에 대하여 각각 정리하면
                                변환을 바로 구할 수 있습니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.29 x=a, y=b, (a,b)에 대한 대칭 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.29 <InlineMath math="x=a" />, <InlineMath math="y=b" />, 점{" "}
                    <InlineMath math="(a,b)" />에 대한 대칭
                </h2>

                <p className="leading-8 text-gray-300">
                    직선 <InlineMath math="x=a" />, <InlineMath math="y=b" />에 대한
                    선대칭과 점 <InlineMath math="(a,b)" />에 대한 점대칭은
                    원래의 점과 대칭이동한 점의 <strong className="text-white">중점</strong>을
                    이용하여 좌표의 변화를 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. x=a에 대한 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. <InlineMath math="x=a" />에 대한 대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.29_1.png"
                                    alt="x=a에 대한 대칭이동"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="(x,y)" />를 직선{" "}
                                    <InlineMath math="x=a" />에 대하여 대칭이동한 점을{" "}
                                    <InlineMath math="(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    두 점의 <InlineMath math="x" />좌표의 중점이{" "}
                                    <InlineMath math="a" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{x+x'}{2}=a
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
x'=2a-x,\qquad y'=y
`}
                                />

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        점의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="x" />좌표의 부호를 바꾸고{" "}
                                        <InlineMath math="2a" />를 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
(x,y)\rightarrow(2a-x,\ y)
}
`}
                                    />

                                </div>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        식의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        식에 사용된 문자 <InlineMath math="x" /> 대신{" "}
                                        <InlineMath math="2a-x" />를 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(2a-x,\ y)=0
}
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 2. y=b에 대한 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. <InlineMath math="y=b" />에 대한 대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.29_2.png"
                                    alt="y=b에 대한 대칭이동"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="(x,y)" />를 직선{" "}
                                    <InlineMath math="y=b" />에 대하여 대칭이동한 점을{" "}
                                    <InlineMath math="(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    두 점의 <InlineMath math="y" />좌표의 중점이{" "}
                                    <InlineMath math="b" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{y+y'}{2}=b
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
x'=x,\qquad y'=2b-y
`}
                                />

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        점의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="y" />좌표의 부호를 바꾸고{" "}
                                        <InlineMath math="2b" />를 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
(x,y)\rightarrow(x,\ 2b-y)
}
`}
                                    />

                                </div>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        식의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        식에 사용된 문자 <InlineMath math="y" /> 대신{" "}
                                        <InlineMath math="2b-y" />를 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(x,\ 2b-y)=0
}
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 3. 점 (a,b)에 대한 대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 점 <InlineMath math="(a,b)" />에 대한 대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.29_3.png"
                                    alt="점 (a,b)에 대한 대칭이동"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="(x,y)" />를 점{" "}
                                    <InlineMath math="(a,b)" />에 대하여 대칭이동한 점을{" "}
                                    <InlineMath math="(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    점 <InlineMath math="(a,b)" />가 두 점의 중점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{x+x'}{2}=a,\qquad
\frac{y+y'}{2}=b
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
x'=2a-x,\qquad
y'=2b-y
`}
                                />

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        점의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        <InlineMath math="x" />좌표의 부호를 바꾸고{" "}
                                        <InlineMath math="2a" />를 더하고,{" "}
                                        <InlineMath math="y" />좌표의 부호를 바꾸고{" "}
                                        <InlineMath math="2b" />를 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
(x,y)\rightarrow(2a-x,\ 2b-y)
}
`}
                                    />

                                </div>

                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        식의 이동
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        식에 사용된 문자 <InlineMath math="x" /> 대신{" "}
                                        <InlineMath math="2a-x" />,{" "}
                                        <InlineMath math="y" /> 대신{" "}
                                        <InlineMath math="2b-y" />를 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(2a-x,\ 2b-y)=0
}
`}
                                    />

                                </div>

                            </div>

                        </div>

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
                            점 <InlineMath math="(2,a+1)" />을
                            직선 <InlineMath math="x=-1" />에 대하여
                            대칭이동한 점이 <InlineMath math="(b,4)" />일 때,
                            상수 <InlineMath math="a,\ b" />의 합{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="x=-1" />에 대한 대칭이동에서는
                                두 점의 <InlineMath math="x" />좌표의 중점이{" "}
                                <InlineMath math="-1" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{2+b}{2}=-1
`}
                            />

                            <BlockMath
                                math={String.raw`
b=-4
`}
                            />

                            <p className="leading-8">
                                또한 세로선에 대한 대칭이동에서는{" "}
                                <InlineMath math="y" />좌표가 변하지 않으므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+1=4
`}
                            />

                            <BlockMath
                                math={String.raw`
a=3
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b
=
3+(-4)
=
-1
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-1}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선 <InlineMath math="x=c" />에 대하여
                                    대칭인 두 점은 <InlineMath math="x" />좌표의 중점이{" "}
                                    <InlineMath math="c" />이고,{" "}
                                    <InlineMath math="y" />좌표는 서로 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x=c
\quad\rightarrow\quad
\frac{x+x'}{2}=c,
\qquad
y'=y
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
                            점 <InlineMath math="(a+b-1,\ 3)" />을
                            직선 <InlineMath math="y=1" />에 대하여
                            대칭이동한 점이 <InlineMath math="(2,\ ab)" />일 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a^3+b^3" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="y=1" />에 대한 대칭이동에서는{" "}
                                <InlineMath math="x" />좌표가 변하지 않으므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+b-1=2
`}
                            />

                            <BlockMath
                                math={String.raw`
a+b=3
`}
                            />

                            <p className="leading-8">
                                또한 두 점의 <InlineMath math="y" />좌표의 중점이{" "}
                                <InlineMath math="1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{3+ab}{2}=1
`}
                            />

                            <BlockMath
                                math={String.raw`
ab=-1
`}
                            />

                            <p className="leading-8">
                                이제 <InlineMath math="a+b" />와{" "}
                                <InlineMath math="ab" />를 알고 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^3+b^3
=
(a+b)^3-3ab(a+b)
`}
                            />

                            <BlockMath
                                math={String.raw`
=3^3-3(-1)(3)
`}
                            />

                            <BlockMath
                                math={String.raw`
=27+9=36
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{36}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선 <InlineMath math="y=c" />에 대하여
                                    대칭인 두 점은 <InlineMath math="y" />좌표의 중점이{" "}
                                    <InlineMath math="c" />이고,{" "}
                                    <InlineMath math="x" />좌표는 서로 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=c
\quad\rightarrow\quad
x'=x,
\qquad
\frac{y+y'}{2}=c
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 <InlineMath math="a+b" />와{" "}
                                    <InlineMath math="ab" />를 알면 다음 항등식을 이용할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a^3+b^3
=
(a+b)^3-3ab(a+b)
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원 <InlineMath math="(x-1)^2+(y-10)^2=25" />를
                            직선 <InlineMath math="y=7" />에 대하여 대칭이동한 원이{" "}
                            <InlineMath math="x" />축과 만나는 두 점{" "}
                            <InlineMath math="P,\ Q" /> 사이의 거리를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원의 중심은 <InlineMath math="(1,10)" />이고
                                반지름은 <InlineMath math="5" />입니다.
                            </p>

                            <p className="leading-8">
                                대칭이동해도 원의 모양과 크기는 변하지 않으므로
                                중심만 직선 <InlineMath math="y=7" />에 대하여
                                대칭이동하면 됩니다.
                            </p>

                            <p className="leading-8">
                                중심 <InlineMath math="(1,10)" />과 대칭이동한 중심의{" "}
                                <InlineMath math="y" />좌표의 중점이{" "}
                                <InlineMath math="7" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{10+y'}{2}=7
`}
                            />

                            <BlockMath
                                math={String.raw`
y'=4
`}
                            />

                            <p className="leading-8">
                                따라서 대칭이동한 원의 중심은{" "}
                                <InlineMath math="(1,4)" />이고 반지름은{" "}
                                <InlineMath math="5" />이므로 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
(x-1)^2+(y-4)^2=25
`}
                            />

                            <p className="leading-8">
                                이 원과 <InlineMath math="x" />축의 교점을 구하기 위해{" "}
                                <InlineMath math="y=0" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
(x-1)^2+16=25
`}
                            />

                            <BlockMath
                                math={String.raw`
(x-1)^2=9
`}
                            />

                            <BlockMath
                                math={String.raw`
x=-2,\ 4
`}
                            />

                            <p className="leading-8">
                                따라서 두 교점은{" "}
                                <InlineMath math="P(-2,0)" />,{" "}
                                <InlineMath math="Q(4,0)" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
PQ=4-(-2)=6
`}
                            />

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

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 대칭이동하면 반지름은 변하지 않습니다.
                                    따라서 원의 식 전체를 변형하기보다{" "}
                                    <strong className="text-white">
                                        중심을 대칭이동
                                    </strong>
                                    한 뒤 원의 방정식을 다시 만드는 것이 간단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)
\xrightarrow{\,y=c\text{ 대칭}\,}
(a,\ 2c-b)
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
                            직선 <InlineMath math="l:y=3x+2" />를
                            직선 <InlineMath math="x=2" />에 대하여
                            대칭이동한 직선을 <InlineMath math="m" />이라 할 때,
                            두 직선 <InlineMath math="l,\ m" />과{" "}
                            <InlineMath math="y" />축으로 둘러싸인 부분의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="x=2" />에 대한 대칭이동에서는
                                식의 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="2\cdot2-x=4-x" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
m:\quad y=3(4-x)+2
`}
                            />

                            <BlockMath
                                math={String.raw`
m:\quad y=-3x+14
`}
                            />

                            <p className="leading-8">
                                직선 <InlineMath math="l" />과{" "}
                                <InlineMath math="m" />의 교점을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
3x+2=-3x+14
`}
                            />

                            <BlockMath
                                math={String.raw`
x=2,\qquad y=8
`}
                            />

                            <p className="leading-8">
                                따라서 두 직선의 교점은{" "}
                                <InlineMath math="(2,8)" />입니다.
                            </p>

                            <p className="leading-8">
                                두 직선과 <InlineMath math="y" />축의 교점은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
l:\ (0,2),
\qquad
m:\ (0,14)
`}
                            />

                            <p className="leading-8">
                                따라서 <InlineMath math="y" />축 위의 밑변의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
14-2=12
`}
                            />

                            <p className="leading-8">
                                두 직선의 교점 <InlineMath math="(2,8)" />에서{" "}
                                <InlineMath math="y" />축까지의 거리는{" "}
                                <InlineMath math="2" />이므로 구하는 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac12\times12\times2=12
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{12}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선 <InlineMath math="x=a" />에 대하여
                                    식을 대칭이동할 때는{" "}
                                    <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="2a-x" />를 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x=a\text{ 대칭}
\quad\Rightarrow\quad
x\rightarrow2a-x
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 원래의 직선과 대칭이동한 직선의 교점은
                                    대칭축 위에 있습니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원 <InlineMath math="(x-1)^2+y^2=2" />를
                            점 <InlineMath math="(a,b)" />에 대칭이동시킨 도형의 방정식이{" "}
                            <InlineMath math="(x-3)^2+(y-4)^2=c" />가 될 때,{" "}
                            <InlineMath math="a+b+c" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="(x-1)^2+y^2=2" />의 중심은{" "}
                                <InlineMath math="(1,0)" />이고,
                                반지름의 제곱은 <InlineMath math="2" />입니다.
                            </p>

                            <p className="leading-8">
                                대칭이동한 원{" "}
                                <InlineMath math="(x-3)^2+(y-4)^2=c" />의 중심은{" "}
                                <InlineMath math="(3,4)" />입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원의 중심을 점대칭
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="(a,b)" />는
                                    원래 중심 <InlineMath math="(1,0)" />과
                                    대칭이동한 중심 <InlineMath math="(3,4)" />의
                                    중점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)
=
\left(
\frac{1+3}{2},
\frac{0+4}{2}
\right)
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a,b)=(2,2)
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=2,\qquad b=2
`}
                                />

                            </div>

                            <p className="leading-8">
                                대칭이동을 해도 원의 모양과 크기는 변하지 않으므로
                                반지름도 변하지 않습니다.
                            </p>

                            <p className="leading-8">
                                따라서 반지름의 제곱도 그대로이므로
                            </p>

                            <BlockMath
                                math={String.raw`
c=2
`}
                            />

                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+b+c
=
2+2+2
=
6
`}
                            />

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

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 점 <InlineMath math="(a,b)" />에 대하여
                                    대칭이동하면 원의 중심도 같은 점에 대하여
                                    대칭이동합니다.
                                    따라서 대칭점은 이동 전후 두 중심의 중점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{원래 중심}
\rightarrow
\text{대칭점은 두 중심의 중점}
\rightarrow
\text{이동한 중심}
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 대칭이동에서는 원의 반지름이 변하지 않습니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P(-1,3)" />을
                            점 <InlineMath math="(2,a)" />에 대하여
                            대칭이동한 점이{" "}
                            <InlineMath math="Q(b+1,5)" />일 때,
                            상수 <InlineMath math="a,\ b" />의 합{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(2,a)" />에 대하여
                                점 <InlineMath math="P" />를 대칭이동한 점이{" "}
                                <InlineMath math="Q" />이므로
                                점 <InlineMath math="(2,a)" />는
                                선분 <InlineMath math="\overline{PQ}" />의 중점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{-1+(b+1)}{2},
\frac{3+5}{2}
\right)
=
(2,a)
`}
                            />

                            <p className="leading-8">
                                먼저 <InlineMath math="x" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{b}{2}=2
`}
                            />

                            <BlockMath
                                math={String.raw`
b=4
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="y" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
a=\frac{3+5}{2}
`}
                            />

                            <BlockMath
                                math={String.raw`
a=4
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b
=
4+4
=
8
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{8}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="(a,b)" />에 대한 점대칭에서는
                                    대칭점이 원래의 점과 대칭이동한 점의{" "}
                                    <strong className="text-white"> 중점</strong>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)
=
\left(
\frac{x+x'}{2},
\frac{y+y'}{2}
\right)
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 두 점의 좌표를 알고 있으면
                                    중점 공식을 바로 이용할 수 있습니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원 <InlineMath math="x^2+(y+a)^2=4" />를
                            점 <InlineMath math="(3,0)" />에 대하여 대칭이동한 원의
                            중심이 <InlineMath math="(b,2)" />일 때,
                            상수 <InlineMath math="a,\ b" />의 합{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="x^2+(y+a)^2=4" />의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(0,-a)
`}
                            />

                            <p className="leading-8">
                                이 원을 점 <InlineMath math="(3,0)" />에 대하여
                                대칭이동한 원의 중심이 <InlineMath math="(b,2)" />이므로,
                                점 <InlineMath math="(3,0)" />은 두 원의 중심을 이은
                                선분의 중점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{0+b}{2},
\frac{-a+2}{2}
\right)
=
(3,0)
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="x" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{b}{2}=3
`}
                            />

                            <BlockMath
                                math={String.raw`
b=6
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="y" />좌표를 비교하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{-a+2}{2}=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a=2
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b
=
2+6
=
8
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{8}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 점대칭할 때는 원의 방정식 전체를 변형하기보다
                                    <strong className="text-white"> 중심을 점대칭</strong>
                                    하는 것이 간단합니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    점 <InlineMath math="(p,q)" />에 대하여 대칭인
                                    두 원의 중심을 <InlineMath math="C,\ C'" />라 하면,
                                    대칭점 <InlineMath math="(p,q)" />가 두 중심의 중점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(p,q)=\frac{C+C'}{2}
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

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="3x+4y+13=0" />을
                            점 <InlineMath math="(3,-2)" />에 대하여 대칭이동한 직선과
                            원 <InlineMath math="x^2+y^2=36" />이 만나는
                            두 교점 사이의 거리를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(3,-2)" />에 대한 대칭이동에서는
                            </p>

                            <BlockMath
                                math={String.raw`
x\rightarrow 6-x,
\qquad
y\rightarrow -4-y
`}
                            />

                            <p className="leading-8">
                                이므로 직선의 식에 각각 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
3(6-x)+4(-4-y)+13=0
`}
                            />

                            <BlockMath
                                math={String.raw`
18-3x-16-4y+13=0
`}
                            />

                            <BlockMath
                                math={String.raw`
3x+4y-15=0
`}
                            />

                            <p className="leading-8">
                                따라서 대칭이동한 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
3x+4y-15=0
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원과 직선의 두 교점 사이의 거리
                                </p>

                                <p className="leading-8">
                                    원 <InlineMath math="x^2+y^2=36" />의 중심은
                                    원점이고 반지름은 <InlineMath math="6" />입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    원점과 직선 <InlineMath math="3x+4y-15=0" /> 사이의
                                    거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|{-15}|}{\sqrt{3^2+4^2}}
=
\frac{15}{5}
=
3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    두 교점 사이의 거리의 절반을{" "}
                                    <InlineMath math="s" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
s^2+3^2=6^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
s^2=27
`}
                                />

                                <BlockMath
                                    math={String.raw`
s=3\sqrt3
`}
                                />

                                <p className="leading-8">
                                    따라서 두 교점 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
2s=6\sqrt3
`}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{6\sqrt3}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="(a,b)" />에 대하여
                                    식을 대칭이동할 때는
                                </p>

                                <BlockMath
                                    math={String.raw`
x\rightarrow2a-x,
\qquad
y\rightarrow2b-y
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    를 식에 대입합니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    원과 직선의 두 교점 사이의 거리는
                                    <strong className="text-white">
                                        {" "}원의 중심에서 직선까지의 거리
                                    </strong>
                                    를 구한 뒤 직각삼각형을 이용하면 간단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{\text{현의 길이}}{2}
=
\sqrt{
r^2-
(\text{중심과 직선 사이의 거리})^2
}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            포물선 <InlineMath math="y=x^2+kx-3" />을
                            점 <InlineMath math="(1,-1)" />에 대하여 대칭이동한 포물선과
                            직선 <InlineMath math="y=2x" />가 만나는 두 점이
                            원점에 대하여 대칭일 때, 상수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(1,-1)" />에 대한 대칭이동에서는
                            </p>

                            <BlockMath
                                math={String.raw`
x\rightarrow 2-x,
\qquad
y\rightarrow -2-y
`}
                            />

                            <p className="leading-8">
                                이므로 원래 포물선의 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
-2-y=(2-x)^2+k(2-x)-3
`}
                            />

                            <p className="leading-8">
                                정리하면 대칭이동한 포물선은
                            </p>

                            <BlockMath
                                math={String.raw`
y=-x^2+(k+4)x-2k+1
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 포물선과 직선 <InlineMath math="y=2x" />의
                                교점의 <InlineMath math="x" />좌표를{" "}
                                <InlineMath math="x_1,\ x_2" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
-x^2+(k+4)x-2k+1=2x
`}
                            />

                            <BlockMath
                                math={String.raw`
x^2-(k+2)x+2k-1=0
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 교점이 원점 대칭
                                </p>

                                <p className="leading-8">
                                    두 교점이 원점에 대하여 대칭이므로
                                    두 점의 <InlineMath math="x" />좌표는 서로 반대입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x_1+x_2=0
`}
                                />

                                <p className="leading-8">
                                    한편 근과 계수의 관계에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
x_1+x_2=k+2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
k+2=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=-2
`}
                                />

                            </div>

                            <p className="leading-8">
                                실제로 <InlineMath math="k=-2" />일 때 교점의{" "}
                                <InlineMath math="x" />좌표를 구하는 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-5=0
`}
                            />

                            <p className="leading-8">
                                이므로 서로 다른 두 실근
                            </p>

                            <BlockMath
                                math={String.raw`
x=\pm\sqrt5
`}
                            />

                            <p className="leading-8">
                                를 갖습니다.
                            </p>

                            <p className="leading-8">
                                따라서 두 교점은
                            </p>

                            <BlockMath
                                math={String.raw`
(\sqrt5,2\sqrt5),
\qquad
(-\sqrt5,-2\sqrt5)
`}
                            />

                            <p className="leading-8">
                                로 실제로 원점에 대하여 서로 대칭입니다.
                            </p>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-2}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 교점이 원점에 대하여 대칭이면
                                    두 점의 <InlineMath math="x" />좌표와{" "}
                                    <InlineMath math="y" />좌표의 합이 각각{" "}
                                    <InlineMath math="0" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x_1,y_1)
\longleftrightarrow
(-x_1,-y_1)
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 교점의 <InlineMath math="x" />좌표가
                                    이차방정식의 두 근일 때는
                                </p>

                                <BlockMath
                                    math={String.raw`
x_1+x_2=0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 이용하여 근과 계수의 관계로{" "}
                                    <InlineMath math="k" />를 바로 구할 수 있습니다.
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

                    <div className="space-y-5 text-gray-300">

                        <p>
                            • <InlineMath math="x=a" />에 대한 대칭
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(2a-x,\ y)
}
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(2a-x,\ y)=0
}
`}
                        />


                        <p>
                            • <InlineMath math="y=b" />에 대한 대칭
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(x,\ 2b-y)
}
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(x,\ 2b-y)=0
}
`}
                        />


                        <p>
                            • 점 <InlineMath math="(a,b)" />에 대한 대칭
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
(x,y)\rightarrow(2a-x,\ 2b-y)
}
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
f(x,y)=0
\rightarrow
f(2a-x,\ 2b-y)=0
}
`}
                        />


                        <div className="rounded-xl border border-yellow-500/30 bg-black/20 p-5">

                            <p className="leading-8">
                                • <InlineMath math="x=a" /> 대칭에서는{" "}
                                <InlineMath math="x" />좌표의 중점이{" "}
                                <InlineMath math="a" />입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                • <InlineMath math="y=b" /> 대칭에서는{" "}
                                <InlineMath math="y" />좌표의 중점이{" "}
                                <InlineMath math="b" />입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                • 점 <InlineMath math="(a,b)" /> 대칭에서는
                                원래의 점과 대칭이동한 점의 중점이{" "}
                                <InlineMath math="(a,b)" />입니다.
                            </p>

                            <p className="mt-3 leading-8">
                                • 대칭이동에서는 점의 좌표에 적용하는 변환과
                                식의 문자 <InlineMath math="x" />,{" "}
                                <InlineMath math="y" />에 적용하는 변환이 같습니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.30 기울기가 ±1이 아닌 직선의 선대칭 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.30 기울기가 <InlineMath math="\pm1" />이 아닌 직선의 선대칭
                </h2>

                <p className="leading-8 text-gray-300">
                    기울기가 <InlineMath math="\pm1" />이 아닌 일반적인 직선에 대한
                    선대칭은 선대칭의 정의를 이용하여 구합니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    원래의 점과 대칭이동한 점을 이은 선분은
                    대칭축과 <strong className="text-white">수직</strong>이고,
                    두 점의 <strong className="text-white">중점</strong>은
                    대칭축 위에 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 일반적인 직선에 대한 선대칭 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 일반적인 직선에 대한 선대칭
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

                            {/* 이미지 */}
                            <div>
                                <img
                                    src="/images/commonMath2/1.30_1.png"
                                    alt="일반적인 직선에 대한 선대칭"
                                    className="mx-auto w-full max-w-[500px] rounded-xl"
                                />
                            </div>

                            {/* 설명 */}
                            <div>

                                <p className="leading-8 text-gray-300">
                                    점 <InlineMath math="A(x,y)" />를 직선{" "}
                                    <InlineMath math="l:y=ax+b" />에 대하여
                                    대칭이동한 점을{" "}
                                    <InlineMath math="A'(x',y')" />라 하겠습니다.
                                </p>

                                <p className="mt-5 leading-8 text-gray-300">
                                    선대칭에서는 다음 두 조건을 이용합니다.
                                </p>


                                {/* 수직 조건 */}
                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        ① <InlineMath math="\overline{AA'}" />와
                                        대칭축이 서로 수직
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        직선 <InlineMath math="l:y=ax+b" />의 기울기가{" "}
                                        <InlineMath math="a" />이므로
                                        선분 <InlineMath math="\overline{AA'}" />의
                                        기울기와의 곱은 <InlineMath math="-1" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\frac{y'-y}{x'-x}\cdot a=-1
}
`}
                                    />

                                </div>


                                {/* 중점 조건 */}
                                <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        ② <InlineMath math="\overline{AA'}" />의
                                        중점이 대칭축 위에 있음
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        두 점 <InlineMath math="A(x,y)" />,{" "}
                                        <InlineMath math="A'(x',y')" />의 중점은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\left(
\frac{x+x'}{2},
\frac{y+y'}{2}
\right)
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이고, 이 점이 직선{" "}
                                        <InlineMath math="y=ax+b" /> 위에 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\frac{y+y'}{2}
=
a\frac{x+x'}{2}+b
}
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 2. 두 조건을 연립 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 대칭이동한 점을 구하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            대칭이동한 점 <InlineMath math="A'(x',y')" />의 좌표는
                            앞에서 구한 두 조건을 연립하여 구합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
\dfrac{y'-y}{x'-x}\cdot a=-1 \\[6pt]
\dfrac{y+y'}{2}
=
a\dfrac{x+x'}{2}+b
\end{cases}
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                중요한 점
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                일반적인 변환 공식을 새로 외우기보다
                                선대칭의 정의인{" "}
                                <strong className="text-white">
                                    수직과 중점
                                </strong>
                                을 이용하여 필요한 좌표를 직접 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{선대칭}
=
\text{수직}
+
\text{중점}
}
`}
                            />

                        </div>

                    </div>


                    {/* 3. 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            예시
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="(1,4)" />를
                            직선 <InlineMath math="x-2y+2=0" />에 대하여
                            대칭이동한 점의 좌표를 구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            대칭이동한 점을 <InlineMath math="(x',y')" />라 하겠습니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ① 수직 조건
                            </p>

                            <p className="leading-8 text-gray-300">
                                대칭축{" "}
                                <InlineMath math="x-2y+2=0" />을{" "}
                                <InlineMath math="y" />에 대하여 정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
y=\frac12x+1
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 대칭축의 기울기는{" "}
                                <InlineMath math="\dfrac12" />입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 점 <InlineMath math="(1,4)" />와{" "}
                                <InlineMath math="(x',y')" />를 잇는 직선의
                                기울기는 <InlineMath math="-2" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{y'-4}{x'-1}=-2
`}
                            />

                            <BlockMath
                                math={String.raw`
2x'+y'-6=0
`}
                            />

                        </div>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ② 중점 조건
                            </p>

                            <p className="leading-8 text-gray-300">
                                두 점 <InlineMath math="(1,4)" />와{" "}
                                <InlineMath math="(x',y')" />의 중점은
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{1+x'}{2},
\frac{4+y'}{2}
\right)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이 중점이 대칭축{" "}
                                <InlineMath math="x-2y+2=0" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{1+x'}{2}
-
2\left(
\frac{4+y'}{2}
\right)
+2
=
0
`}
                            />

                            <BlockMath
                                math={String.raw`
x'-2y'-3=0
`}
                            />

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 두 식
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{cases}
2x'+y'-6=0\\
x'-2y'-3=0
\end{cases}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            을 연립하면
                        </p>

                        <BlockMath
                            math={String.raw`
x'=3,\qquad y'=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 대칭이동한 점의 좌표는
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{(3,0)}
`}
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
                            점 <InlineMath math="P(2,-1)" />을
                            직선 <InlineMath math="4x+y+10=0" />에 대하여
                            대칭이동한 점 <InlineMath math="Q" />에 대하여
                            삼각형 <InlineMath math="\mathrm{OPQ}" />의 넓이는?<br />
                            (단, <InlineMath math="\mathrm{O}" />는 원점이다.)
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                대칭이동한 점을{" "}
                                <InlineMath math="Q(x,y)" />라 하겠습니다.
                            </p>

                            {/* 수직 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 수직 조건
                                </p>

                                <p className="leading-8">
                                    대칭축{" "}
                                    <InlineMath math="4x+y+10=0" />을{" "}
                                    <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-4x-10
`}
                                />

                                <p className="leading-8">
                                    이므로 대칭축의 기울기는{" "}
                                    <InlineMath math="-4" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 선분 <InlineMath math="\overline{PQ}" />는
                                    대칭축과 수직이므로 기울기는{" "}
                                    <InlineMath math="\dfrac14" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{y+1}{x-2}
=
\frac14
`}
                                />

                                <BlockMath
                                    math={String.raw`
x-4y-6=0
`}
                                />

                            </div>


                            {/* 중점 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 중점 조건
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P(2,-1)" />과{" "}
                                    <InlineMath math="Q(x,y)" />의 중점은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{2+x}{2},
\frac{-1+y}{2}
\right)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 중점이 대칭축{" "}
                                    <InlineMath math="4x+y+10=0" /> 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
4\left(
\frac{2+x}{2}
\right)
+
\frac{-1+y}{2}
+10
=
0
`}
                                />

                                <BlockMath
                                    math={String.raw`
4x+y+27=0
`}
                                />

                            </div>


                            <p className="leading-8">
                                따라서 두 식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
x-4y-6=0\\
4x+y+27=0
\end{cases}
`}
                            />

                            <p className="leading-8">
                                을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
x=-6,\qquad y=-3
`}
                            />

                            <p className="leading-8">
                                따라서 대칭이동한 점은
                            </p>

                            <BlockMath
                                math={String.raw`
Q(-6,-3)
`}
                            />


                            {/* 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    대칭점 확인
                                </p>

                                <p className="leading-8">
                                    두 점 <InlineMath math="P(2,-1)" />과{" "}
                                    <InlineMath math="Q(-6,-3)" />의 중점은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{2+(-6)}2,
\frac{-1+(-3)}2
\right)
=
(-2,-2)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 점을 대칭축에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
4(-2)+(-2)+10=0
`}
                                />

                                <p className="leading-8">
                                    이므로 중점은 정확히 대칭축 위에 있습니다.
                                </p>

                            </div>


                            {/* 삼각형 넓이 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 삼각형의 넓이
                                </p>

                                <p className="leading-8">
                                    세 점은
                                </p>

                                <BlockMath
                                    math={String.raw`
O(0,0),\qquad
P(2,-1),\qquad
Q(-6,-3)
`}
                                />

                                <p className="leading-8">
                                    이므로 삼각형 <InlineMath math="\mathrm{OPQ}" />의
                                    넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12
\left|
2(-3)-(-1)(-6)
\right|
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac12|-12|
=
6
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
\boxed{6}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    기울기가 <InlineMath math="\pm1" />이 아닌
                                    직선에 대한 대칭점을 구할 때는
                                    선대칭의 두 조건을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{수직 조건}
+
\text{중점 조건}
}
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    즉, 원래의 점과 대칭이동한 점을 이은 선분은
                                    대칭축과 수직이고,
                                    두 점의 중점은 대칭축 위에 있습니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원 <InlineMath math="(x+2)^2+(y+3)^2=4" />를
                            직선 <InlineMath math="7x+5y-8=0" />에 대하여
                            대칭이동한 원의 방정식이<br />
                            <InlineMath math="(x-a)^2+(y-b)^2=4" />일 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a+b" />의 값은?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="(x+2)^2+(y+3)^2=4" />의
                                중심은 <InlineMath math="(-2,-3)" />이고
                                반지름은 <InlineMath math="2" />입니다.
                            </p>

                            <p className="leading-8">
                                대칭이동한 원의 중심은{" "}
                                <InlineMath math="(a,b)" />이고,
                                대칭이동을 해도 반지름은 변하지 않습니다.
                            </p>

                            {/* 수직 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 수직 조건
                                </p>

                                <p className="leading-8">
                                    대칭축 <InlineMath math="7x+5y-8=0" />을{" "}
                                    <InlineMath math="y" />에 대하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-\frac75x+\frac85
`}
                                />

                                <p className="leading-8">
                                    이므로 대칭축의 기울기는{" "}
                                    <InlineMath math="-\dfrac75" />입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 두 중심을 잇는 직선은 대칭축과 수직이므로
                                    기울기는 <InlineMath math="\dfrac57" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{b-(-3)}{a-(-2)}
=
\frac57
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{b+3}{a+2}
=
\frac57
`}
                                />

                                <BlockMath
                                    math={String.raw`
5a-7b=11
`}
                                />

                            </div>


                            {/* 중점 조건 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 중점 조건
                                </p>

                                <p className="leading-8">
                                    두 중심 <InlineMath math="(-2,-3)" />과{" "}
                                    <InlineMath math="(a,b)" />의 중점은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{a-2}{2},
\frac{b-3}{2}
\right)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이 중점이 대칭축{" "}
                                    <InlineMath math="7x+5y-8=0" /> 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
7\left(\frac{a-2}{2}\right)
+
5\left(\frac{b-3}{2}\right)
-8
=
0
`}
                                />

                                <BlockMath
                                    math={String.raw`
7a+5b=45
`}
                                />

                            </div>


                            <p className="leading-8">
                                따라서 두 식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
5a-7b=11\\
7a+5b=45
\end{cases}
`}
                            />

                            <p className="leading-8">
                                을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
a=5,\qquad b=2
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a+b=5+2=7
`}
                            />

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{7}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 직선에 대하여 대칭이동하면
                                    반지름은 변하지 않고{" "}
                                    <strong className="text-white">
                                        중심이 대칭이동
                                    </strong>
                                    합니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 두 원의 중심을 원래의 점과
                                    대칭이동한 점으로 생각하여
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{수직 조건}
+
\text{중점 조건}
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    을 이용하면 대칭이동한 원의 중심을 구할 수 있습니다.
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

                    <div className="space-y-5 text-gray-300">

                        <p>
                            • 점 <InlineMath math="A(x,y)" />를
                            직선 <InlineMath math="l" />에 대하여
                            대칭이동한 점을{" "}
                            <InlineMath math="A'(x',y')" />라 한다.
                        </p>

                        <p>
                            • 선분 <InlineMath math="\overline{AA'}" />는
                            대칭축과 수직이다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\overline{AA'}\perp l
}
`}
                        />

                        <p>
                            • 선분 <InlineMath math="\overline{AA'}" />의
                            중점은 대칭축 위에 있다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\left(
\frac{x+x'}2,
\frac{y+y'}2
\right)
\text{가 대칭축 위에 있다}
}
`}
                        />

                        <div className="rounded-xl border border-yellow-500/30 bg-black/20 p-5">

                            <p className="leading-8">
                                기울기가 <InlineMath math="\pm1" />이 아닌
                                일반적인 직선에 대한 선대칭에서는
                                복잡한 변환 공식을 외우기보다
                                <strong className="text-white">
                                    {" "}수직 조건과 중점 조건
                                </strong>
                                을 이용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{수직}
+
\text{중점}
}
`}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.31 도형의 평행이동과 대칭이동 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.31 도형의 평행이동과 대칭이동
                </h2>

                <p className="leading-8 text-gray-300">
                    지금까지 배운 평행이동과 대칭이동을 정리하고,
                    여러 이동이 연속해서 이루어질 때
                    점과 식이 어떻게 변하는지 알아봅시다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    여러 이동이 연속될 때는 한 번에 처리하지 않고
                    <strong className="text-white">
                        {" "}앞 단계의 결과에 다음 이동을 차례로 적용
                    </strong>
                    합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 점의 이동과 식의 이동 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 점의 이동과 식의 이동
                        </h3>

                        <p className="leading-8 text-gray-300">
                            도형의 이동에서는
                            <strong className="text-white"> 점의 이동</strong>과
                            <strong className="text-white"> 식의 이동</strong>을
                            구분하여 생각합니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[700px] border-collapse text-left text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/20 text-white">
                                        <th className="px-4 py-4"></th>
                                        <th className="px-4 py-4">
                                            표현
                                        </th>
                                        <th className="px-4 py-4">
                                            특징
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-5 font-bold text-white">
                                            점의 이동
                                        </td>
                                        <td className="px-4 py-5">
                                            <InlineMath math="(x,y)\rightarrow(x',y')" />
                                        </td>
                                        <td className="px-4 py-5">
                                            순서쌍에서 앞쪽은{" "}
                                            <InlineMath math="x" />좌표,
                                            뒤쪽은 <InlineMath math="y" />좌표라는
                                            위치가 중요
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-5 font-bold text-white">
                                            식의 이동
                                        </td>
                                        <td className="px-4 py-5">
                                            <InlineMath math="f(x,y)=0" />
                                        </td>
                                        <td className="px-4 py-5">
                                            식에 사용된 문자{" "}
                                            <InlineMath math="x,\ y" />의 변화가 중요
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="leading-8 text-gray-300">
                                <strong className="text-blue-300">점의 이동</strong>은
                                순서쌍의 위치에 주목하고,{" "}
                                <strong className="text-blue-300">식의 이동</strong>은
                                문자 <InlineMath math="x,\ y" />가
                                어떻게 변하는지에 주목합니다.
                            </p>

                        </div>

                    </div>


                    {/* 2. 이동 공식 총정리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 평행이동과 대칭이동 총정리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            지금까지 배운 대표적인 이동을
                            점의 이동과 식의 이동으로 비교하면 다음과 같습니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[750px] border-collapse text-left text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/20 text-white">
                                        <th className="px-4 py-4">
                                            이동
                                        </th>
                                        <th className="px-4 py-4">
                                            점의 이동
                                        </th>
                                        <th className="px-4 py-4">
                                            식의 이동
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" />축으로 <InlineMath math="m" />만큼,
                                            <br />
                                            <InlineMath math="y" />축으로 <InlineMath math="n" />만큼 평행이동
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(x+m,y+n)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="x-m" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="y-n" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" />축 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(x,-y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="-y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="y" />축 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(-x,y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="-x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="x=a" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(2a-x,y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="2a-x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="y=b" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(x,2b-y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="2b-y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            원점 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(-x,-y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="-x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="-y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            점 <InlineMath math="(a,b)" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(2a-x,2b-y)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="2a-x" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="2b-y" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="y=x" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(y,x)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="y" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="x" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-4">
                                            <InlineMath math="y=-x" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="(x,y)\rightarrow(-y,-x)" />
                                        </td>
                                        <td className="px-4 py-4">
                                            <InlineMath math="x" /> 대신 <InlineMath math="-y" />,
                                            <br />
                                            <InlineMath math="y" /> 대신 <InlineMath math="-x" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-4">
                                            <InlineMath math="y=\pm x+k" /> 대칭
                                        </td>
                                        <td className="px-4 py-4">
                                            대칭축을 <InlineMath math="x" />와{" "}
                                            <InlineMath math="y" />에 대하여 각각 정리
                                        </td>
                                        <td className="px-4 py-4">
                                            정리한 식을 각각 문자{" "}
                                            <InlineMath math="x,\ y" /> 대신 대입
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                    </div>


                    {/* 3. 여러 이동을 연속해서 하는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 여러 이동을 연속해서 하는 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="(x,y)" />와 식{" "}
                            <InlineMath math="f(x,y)=0" />에 다음 이동을
                            차례대로 적용한다고 하겠습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                ① <InlineMath math="x" />축으로 <InlineMath math="p" />,{" "}
                                <InlineMath math="y" />축으로 <InlineMath math="q" />만큼 평행이동
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                ② <InlineMath math="y" />축에 대하여 대칭이동
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                ③ 직선 <InlineMath math="y=x" />에 대하여 대칭이동
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                ④ <InlineMath math="x" />축으로 <InlineMath math="a" />,{" "}
                                <InlineMath math="y" />축으로 <InlineMath math="b" />만큼 평행이동
                            </p>

                        </div>


                        <div className="mt-6 overflow-x-auto">

                            <table className="w-full min-w-[800px] border-collapse text-left text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/20 text-white">
                                        <th className="px-4 py-3">
                                            이동
                                        </th>
                                        <th className="px-4 py-3">
                                            점의 이동
                                        </th>
                                        <th className="px-4 py-3">
                                            식의 이동
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            원래
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="(x,y)" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="f(x,y)=0" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            평행이동
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="(x+p,\ y+q)" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="f(x-p,\ y-q)=0" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            <InlineMath math="y" />축 대칭
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="(-(x+p),\ y+q)" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="f(-x-p,\ y-q)=0" />
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            <InlineMath math="y=x" /> 대칭
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="(y+q,\ -(x+p))" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="f(-y-p,\ x-q)=0" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-3">
                                            다시 평행이동
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="(y+q+a,\ -(x+p)+b)" />
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="f(-(y-b)-p,\ (x-a)-q)=0" />
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                여러 이동을 처리하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                앞 단계에서 얻은 식이나 좌표를
                                다시 처음부터 계산하지 않고,
                                <strong className="text-white">
                                    {" "}그 결과에 다음 이동을 그대로 적용
                                </strong>
                                합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{앞 단계의 결과}
\rightarrow
\text{다음 이동}
\rightarrow
\text{다음 결과}
}
`}
                            />

                        </div>

                    </div>


                    {/* 4. 식의 이동 검산 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 점의 이동을 이용한 식의 이동 검산
                        </h3>

                        <p className="leading-8 text-gray-300">
                            식의 이동이 바르게 되었는지는
                            최종적인 점의 이동을 이용하여 확인할 수 있습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            앞에서 구한 점의 최종 이동을
                        </p>

                        <BlockMath
                            math={String.raw`
x'=y+q+a,
\qquad
y'=-(x+p)+b
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하겠습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                이동 전의 좌표를 구하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                첫 번째 식에서 <InlineMath math="y" />를,
                                두 번째 식에서 <InlineMath math="x" />를 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
y=x'-q-a
`}
                            />

                            <BlockMath
                                math={String.raw`
x=-y'-p+b
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                원래 식에 대입
                            </p>

                            <p className="leading-8 text-gray-300">
                                원래 식 <InlineMath math="f(x,y)=0" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
f(-y'-p+b,\ x'-q-a)=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이동이 끝난 후에는{" "}
                                <InlineMath math="x',y'" />를 다시{" "}
                                <InlineMath math="x,y" />로 나타내므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
f(-y-p+b,\ x-q-a)=0
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                을 얻습니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                검산
                            </p>

                            <p className="leading-8 text-gray-300">
                                식의 이동을 순서대로 적용해서 얻은 결과와
                                점의 최종 이동을 이용해서 다시 얻은 결과가 같으면
                                식의 이동이 올바르게 이루어진 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{점의 최종 이동}
\Longleftrightarrow
\text{식의 최종 이동}
}
`}
                            />

                        </div>

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
                            점 <InlineMath math="(-3,1)" />을{" "}
                            <InlineMath math="x" />축의 방향으로{" "}
                            <InlineMath math="a" />만큼 평행이동한 후
                            직선 <InlineMath math="y=x" />에 대하여 대칭이동한 점이
                            직선 <InlineMath math="2x-y-3=0" /> 위에 있을 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="(-3,1)" />을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-3,1)
                    \rightarrow
                    (-3+a,1)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 점을 직선 <InlineMath math="y=x" />에 대하여
                                대칭이동하면 두 좌표의 자리가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    (-3+a,1)
                    \rightarrow
                    (1,-3+a)
                `}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                대칭이동한 점 <InlineMath math="(1,-3+a)" />가
                                직선 <InlineMath math="2x-y-3=0" /> 위에 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    2(1)-(-3+a)-3=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    2+3-a-3=0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    a=2
                `}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2}
                    `}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 이동이 연속될 때는 앞에서 얻은 좌표에
                                    다음 이동을 차례대로 적용합니다.
                                    특히 <InlineMath math="y=x" />에 대한 대칭이동은
                                    두 좌표의 자리를 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (-3,1)
                        \rightarrow
                        (-3+a,1)
                        \rightarrow
                        (1,-3+a)
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
                            좌표평면 위의 점 <InlineMath math="A(-2,3)" />을
                            직선 <InlineMath math="y=x" />에 대하여 대칭이동한 점을{" "}
                            <InlineMath math="B" />라 하고, 점 <InlineMath math="B" />를{" "}
                            <InlineMath math="x" />축의 방향으로 <InlineMath math="3" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로 <InlineMath math="k" />만큼
                            평행이동한 점을 <InlineMath math="C" />라 하자.
                            세 점 <InlineMath math="A,\ B,\ C" />가 한 직선 위에 있을 때,
                            실수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="A(-2,3)" />을
                                직선 <InlineMath math="y=x" />에 대하여 대칭이동하면
                                두 좌표의 자리가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
A(-2,3)
\rightarrow
B(3,-2)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="B(3,-2)" />를{" "}
                                <InlineMath math="x" />축의 방향으로 <InlineMath math="3" />만큼,{" "}
                                <InlineMath math="y" />축의 방향으로 <InlineMath math="k" />만큼
                                평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
B(3,-2)
\rightarrow
C(6,k-2)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    세 점이 한 직선 위에 있는 조건
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="A(-2,3)" />와{" "}
                                    <InlineMath math="B(3,-2)" />를 지나는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{-2-3}{3-(-2)}
=
\frac{-5}{5}
=
-1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    따라서 두 점을 지나는 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
y+2=-(x-3)
`}
                                />

                                <BlockMath
                                    math={String.raw`
y=-x+1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                세 점 <InlineMath math="A,\ B,\ C" />가 한 직선 위에 있으므로
                                점 <InlineMath math="C(6,k-2)" />도 직선{" "}
                                <InlineMath math="y=-x+1" /> 위에 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
k-2=-6+1
`}
                            />

                            <BlockMath
                                math={String.raw`
k-2=-5
`}
                            />

                            <BlockMath
                                math={String.raw`
k=-3
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-3}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 이동이 연속될 때는 앞 단계에서 얻은 좌표에
                                    다음 이동을 차례로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A(-2,3)
\rightarrow
B(3,-2)
\rightarrow
C(6,k-2)
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    마지막에는 세 점이 한 직선 위에 있다는 조건을 이용하여{" "}
                                    <InlineMath math="k" />의 값을 결정합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면에 두 점{" "}
                            <InlineMath math="A(-4,2),\ B(2,k)" />가 있다.
                            점 <InlineMath math="A" />를 <InlineMath math="y" />축에 대하여
                            대칭이동한 점을 <InlineMath math="P" />라 하고,
                            점 <InlineMath math="B" />를 <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="-4" />만큼 평행이동한 점을{" "}
                            <InlineMath math="Q" />라 하자.
                            직선 <InlineMath math="BP" />와 직선 <InlineMath math="PQ" />가
                            서로 수직이 되도록 하는 실수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                점 <InlineMath math="A(-4,2)" />를{" "}
                                <InlineMath math="y" />축에 대하여 대칭이동하면{" "}
                                <InlineMath math="x" />좌표의 부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
A(-4,2)
\rightarrow
P(4,2)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                점 <InlineMath math="B(2,k)" />를{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="-4" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
B(2,k)
\rightarrow
Q(2,k-4)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 직선이 수직인 조건
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="BP" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{2-k}{4-2}
=
\frac{2-k}{2}
`}
                                />

                                <p className="leading-8">
                                    이고, 직선 <InlineMath math="PQ" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{(k-4)-2}{2-4}
=
\frac{k-6}{-2}
=
\frac{6-k}{2}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    두 직선이 서로 수직이므로
                                    두 직선의 기울기의 곱은 <InlineMath math="-1" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{2-k}{2}
\cdot
\frac{6-k}{2}
=
-1
`}
                                />

                                <BlockMath
                                    math={String.raw`
(2-k)(6-k)=-4
`}
                                />

                                <BlockMath
                                    math={String.raw`
k^2-8k+16=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(k-4)^2=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=4
`}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{4}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 대칭이동과 평행이동을 차례로 적용하여
                                    점 <InlineMath math="P,\ Q" />의 좌표를 구합니다.
                                    그다음 두 직선이 서로 수직이므로
                                    기울기의 곱이 <InlineMath math="-1" />이라는 조건을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A,\ B
\rightarrow
P,\ Q
\rightarrow
(\text{BP의 기울기})
(\text{PQ의 기울기})
=-1
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
                            직선 <InlineMath math="3x+4y+2=0" />을{" "}
                            <InlineMath math="y" />축의 방향으로 <InlineMath math="a" />만큼
                            평행이동한 후 직선 <InlineMath math="y=x" />에 대하여
                            대칭이동한 직선을 <InlineMath math="l" />이라 하자.
                            직선 <InlineMath math="l" />이 원{" "}
                            <InlineMath math="x^2+y^2=36" />과 한 점에서 만날 때,
                            양수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="3x+4y+2=0" />을{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동할 때는
                                식의 문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="y-a" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
3x+4(y-a)+2=0
`}
                            />

                            <BlockMath
                                math={String.raw`
3x+4y-4a+2=0
`}
                            />

                            <p className="leading-8">
                                이 직선을 다시 <InlineMath math="y=x" />에 대하여
                                대칭이동하면 문자 <InlineMath math="x,\ y" />를
                                서로 바꾸므로
                            </p>

                            <BlockMath
                                math={String.raw`
3y+4x-4a+2=0
`}
                            />

                            <p className="leading-8">
                                따라서 직선 <InlineMath math="l" />의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
l:\ 4x+3y-4a+2=0
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    원과 한 점에서 만나는 조건
                                </p>

                                <p className="leading-8">
                                    원 <InlineMath math="x^2+y^2=36" />의 중심은
                                    원점이고 반지름은 <InlineMath math="6" />입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    직선 <InlineMath math="l" />이 원과 한 점에서 만나므로
                                    원의 중심에서 직선까지의 거리는 반지름과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|4(0)+3(0)-4a+2|}
{\sqrt{4^2+3^2}}
=
6
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{|-4a+2|}{5}=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
|-4a+2|=30
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-4a+2=30
\quad\text{또는}\quad
-4a+2=-30
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=-7
\quad\text{또는}\quad
a=8
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=8
`}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{8}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 이동이 연속될 때는 식에 각 이동을
                                    순서대로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
3x+4y+2=0
\rightarrow
3x+4y-4a+2=0
\rightarrow
4x+3y-4a+2=0
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    그다음 직선이 원과 한 점에서 만난다는 조건은
                                    <strong className="text-white">
                                        {" "}원의 중심과 직선 사이의 거리 = 반지름
                                    </strong>
                                    으로 바꾸어 해결합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            직선 <InlineMath math="x-2y+3=0" />을{" "}
                            <InlineMath math="y" />축에 대하여 대칭이동한 후
                            다시 직선 <InlineMath math="y=x" />에 대하여
                            대칭이동한 직선이 두 원
                        </p>

                        <BlockMath
                            math={String.raw`
(x-a)^2+(y-b)^2=2,
\qquad
(x-a+2)^2+(y-2b)^2=5
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 넓이를 동시에 이등분한다.
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="ab" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선 <InlineMath math="x-2y+3=0" />을{" "}
                                <InlineMath math="y" />축에 대하여 대칭이동할 때는
                                식의 문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-x" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
-x-2y+3=0
`}
                            />

                            <BlockMath
                                math={String.raw`
x+2y-3=0
`}
                            />

                            <p className="leading-8">
                                이 직선을 다시 <InlineMath math="y=x" />에 대하여
                                대칭이동하면 문자 <InlineMath math="x,\ y" />를
                                서로 바꾸므로
                            </p>

                            <BlockMath
                                math={String.raw`
y+2x-3=0
`}
                            />

                            <p className="leading-8">
                                따라서 최종적으로 이동한 직선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
2x+y-3=0
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 원의 넓이를 동시에 이등분
                                </p>

                                <p className="leading-8">
                                    원의 넓이를 이등분하는 직선은
                                    원의 중심을 지나야 합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    첫 번째 원
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-a)^2+(y-b)^2=2
`}
                                />

                                <p className="leading-8">
                                    의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)
`}
                                />

                                <p className="leading-8">
                                    이므로 직선 <InlineMath math="2x+y-3=0" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2a+b-3=0
`}
                                />

                                <p className="mt-4 leading-8">
                                    두 번째 원
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-a+2)^2+(y-2b)^2=5
`}
                                />

                                <p className="leading-8">
                                    의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(a-2,2b)
`}
                                />

                                <p className="leading-8">
                                    이므로 직선에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2(a-2)+2b-3=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
2a+2b-7=0
`}
                                />

                            </div>

                            <p className="leading-8">
                                따라서 두 식
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
2a+b=3\\
2a+2b=7
\end{cases}
`}
                            />

                            <p className="leading-8">
                                을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
b=4
`}
                            />

                            <BlockMath
                                math={String.raw`
2a+4=3
`}
                            />

                            <BlockMath
                                math={String.raw`
a=-\frac12
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
ab
=
-\frac12\cdot4
=
-2
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-2}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 식의 이동을 순서대로 적용하여
                                    최종 직선의 방정식을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x-2y+3=0
\rightarrow
x+2y-3=0
\rightarrow
2x+y-3=0
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    그다음 하나의 직선이 두 원의 넓이를 동시에
                                    이등분하므로 그 직선은
                                    <strong className="text-white">
                                        {" "}두 원의 중심을 모두 지납니다.
                                    </strong>
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{두 원의 중심}
\rightarrow
\text{직선에 각각 대입}
\rightarrow
a,\ b\text{ 결정}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원 <InlineMath math="x^2+(y+2)^2=16" />을{" "}
                            <InlineMath math="x" />축의 방향으로 <InlineMath math="-3" />만큼
                            평행이동한 후 직선 <InlineMath math="y=-x" />에 대하여
                            대칭이동한 원이 <InlineMath math="x" />축과 만나는 두 점을{" "}
                            <InlineMath math="P,\ Q" />라 할 때, 선분{" "}
                            <InlineMath math="PQ" />의 길이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="x^2+(y+2)^2=16" />을{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="-3" />만큼 평행이동할 때는
                                식의 문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="x+3" />을 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(x+3)^2+(y+2)^2=16
`}
                            />

                            <p className="leading-8">
                                이 원을 다시 직선 <InlineMath math="y=-x" />에 대하여
                                대칭이동할 때는
                            </p>

                            <BlockMath
                                math={String.raw`
x\rightarrow -y,
\qquad
y\rightarrow -x
`}
                            />

                            <p className="leading-8">
                                를 대입하므로
                            </p>

                            <BlockMath
                                math={String.raw`
(-y+3)^2+(-x+2)^2=16
`}
                            />

                            <BlockMath
                                math={String.raw`
(y-3)^2+(x-2)^2=16
`}
                            />

                            <p className="leading-8">
                                따라서 이동한 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
(x-2)^2+(y-3)^2=16
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="x" />축과의 두 교점
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x" />축 위에서는{" "}
                                    <InlineMath math="y=0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-2)^2+(0-3)^2=16
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x-2)^2=7
`}
                                />

                                <BlockMath
                                    math={String.raw`
x=2\pm\sqrt7
`}
                                />

                                <p className="leading-8">
                                    따라서 두 점의 좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
P(2-\sqrt7,0),
\qquad
Q(2+\sqrt7,0)
`}
                                />

                                <p className="leading-8">
                                    로 둘 수 있습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                두 점은 모두 <InlineMath math="x" />축 위에 있으므로
                                선분 <InlineMath math="PQ" />의 길이는 두{" "}
                                <InlineMath math="x" />좌표의 차입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
PQ
=
(2+\sqrt7)-(2-\sqrt7)
=
2\sqrt7
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{2\sqrt7}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    도형에 여러 이동이 연속될 때는 식에
                                    각 이동을 순서대로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+(y+2)^2=16
\rightarrow
(x+3)^2+(y+2)^2=16
\rightarrow
(x-2)^2+(y-3)^2=16
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    마지막으로 <InlineMath math="x" />축과의 교점은{" "}
                                    <InlineMath math="y=0" />을 대입하여 구합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            중심이 <InlineMath math="(3,1)" />이고 반지름의 길이가{" "}
                            <InlineMath math="2" />인 원 <InlineMath math="O_1" />이 있다.
                            원 <InlineMath math="O_1" />을 직선{" "}
                            <InlineMath math="y=x" />에 대하여 대칭이동한 후{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="a" />만큼 평행이동한 원을{" "}
                            <InlineMath math="O_2" />라 하자.
                            원 <InlineMath math="O_1" />과 원 <InlineMath math="O_2" />가
                            서로 다른 두 점 <InlineMath math="A,\ B" />에서 만나고
                            선분 <InlineMath math="AB" />의 길이가{" "}
                            <InlineMath math="2\sqrt3" />일 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원 <InlineMath math="O_1" />의 중심{" "}
                                <InlineMath math="(3,1)" />을 직선{" "}
                                <InlineMath math="y=x" />에 대하여 대칭이동하면
                                두 좌표의 자리가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
(3,1)
\rightarrow
(1,3)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                다시 <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="a" />만큼 평행이동하면
                                원 <InlineMath math="O_2" />의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(1,3)
\rightarrow
(1,3+a)
`}
                            />

                            <p className="leading-8">
                                입니다. 대칭이동과 평행이동을 해도 원의 반지름은
                                변하지 않으므로 두 원의 반지름은 모두{" "}
                                <InlineMath math="2" />입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 원의 중심 사이의 거리
                                </p>

                                <p className="leading-8">
                                    두 원의 반지름의 길이가 같으므로
                                    두 원의 중심을 이은 선분은 공통현{" "}
                                    <InlineMath math="AB" />를 수직이등분합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    선분 <InlineMath math="AB" />의 중점을{" "}
                                    <InlineMath math="M" />이라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
AM
=
\frac{AB}{2}
=
\sqrt3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    반지름의 길이가 <InlineMath math="2" />이므로
                                    직각삼각형에서 피타고라스 정리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
O_1M
=
\sqrt{2^2-(\sqrt3)^2}
=
1
`}
                                />

                                <p className="leading-8">
                                    두 원의 반지름이 같으므로{" "}
                                    <InlineMath math="M" />은 두 원의 중심 사이에서도
                                    중점입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
O_1O_2
=
2O_1M
=
2
`}
                                />

                            </div>

                            <p className="leading-8">
                                두 원의 중심은 각각{" "}
                                <InlineMath math="(3,1)" />,{" "}
                                <InlineMath math="(1,3+a)" />이고
                                중심 사이의 거리가 <InlineMath math="2" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\sqrt{
(3-1)^2+
\{1-(3+a)\}^2
}
=
2
`}
                            />

                            <BlockMath
                                math={String.raw`
4+(a+2)^2=4
`}
                            />

                            <BlockMath
                                math={String.raw`
(a+2)^2=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a=-2
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-2}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원을 이동할 때는 원 전체의 식을 구하지 않고
                                    <strong className="text-white">
                                        {" "}중심의 이동만 추적
                                    </strong>
                                    하면 간단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(3,1)
\rightarrow
(1,3)
\rightarrow
(1,3+a)
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 반지름이 같은 두 원의 공통현은
                                    두 원의 중심을 이은 선분에 수직이고,
                                    그 선분의 중점을 지납니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            포물선 <InlineMath math="y=x^2+6x+a" />를
                            원점에 대하여 대칭이동한 후{" "}
                            <InlineMath math="y" />축의 방향으로{" "}
                            <InlineMath math="3" />만큼 평행이동한 포물선의{" "}
                            <InlineMath math="y" />절편이 <InlineMath math="-2" />일 때,
                            상수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                포물선 <InlineMath math="y=x^2+6x+a" />를
                                원점에 대하여 대칭이동할 때는
                                식의 문자 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="-x" />,{" "}
                                <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="-y" />를 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
-y=(-x)^2+6(-x)+a
`}
                            />

                            <BlockMath
                                math={String.raw`
-y=x^2-6x+a
`}
                            />

                            <BlockMath
                                math={String.raw`
y=-x^2+6x-a
`}
                            />

                            <p className="leading-8">
                                이 포물선을 다시 <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="3" />만큼 평행이동할 때는
                                식의 문자 <InlineMath math="y" /> 대신{" "}
                                <InlineMath math="y-3" />을 대입합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
y-3=-x^2+6x-a
`}
                            />

                            <BlockMath
                                math={String.raw`
y=-x^2+6x-a+3
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="y" />절편
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y" />절편은{" "}
                                    <InlineMath math="x=0" />일 때의{" "}
                                    <InlineMath math="y" />의 값입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-a+3
`}
                                />

                                <p className="leading-8">
                                    문제에서 <InlineMath math="y" />절편이{" "}
                                    <InlineMath math="-2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-a+3=-2
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=5
`}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{5}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 이동이 연속될 때는
                                    앞에서 얻은 식에 다음 이동을 차례대로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=x^2+6x+a
\rightarrow
y=-x^2+6x-a
\rightarrow
y=-x^2+6x-a+3
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    마지막에는 <InlineMath math="y" />절편 조건이므로{" "}
                                    <InlineMath math="x=0" />을 대입하여
                                    상수 <InlineMath math="a" />를 결정합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이차함수 <InlineMath math="y=-x^2" />의 그래프를{" "}
                            <InlineMath math="x" />축에 대하여 대칭이동한 후,{" "}
                            <InlineMath math="x" />축의 방향으로 <InlineMath math="3" />만큼,{" "}
                            <InlineMath math="y" />축의 방향으로 <InlineMath math="m" />만큼
                            평행이동한 그래프가 직선 <InlineMath math="y=2x-1" />에
                            접할 때, 상수 <InlineMath math="m" />의 값은?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                이차함수 <InlineMath math="y=-x^2" />의 그래프를{" "}
                                <InlineMath math="x" />축에 대하여 대칭이동하면{" "}
                                <InlineMath math="y" />좌표의 부호가 바뀌므로
                            </p>

                            <BlockMath
                                math={String.raw`
y=x^2
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이 그래프를 다시 <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="3" />만큼,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="m" />만큼 평행이동하면
                            </p>

                            <BlockMath
                                math={String.raw`
y-m=(x-3)^2
`}
                            />

                            <BlockMath
                                math={String.raw`
y=(x-3)^2+m
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    직선과 접하는 조건
                                </p>

                                <p className="leading-8">
                                    포물선 <InlineMath math="y=(x-3)^2+m" />과
                                    직선 <InlineMath math="y=2x-1" />이 접하므로
                                    두 식을 연립하면 하나의 교점을 갖습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)^2+m=2x-1
`}
                                />

                                <BlockMath
                                    math={String.raw`
x^2-6x+9+m=2x-1
`}
                                />

                                <BlockMath
                                    math={String.raw`
x^2-8x+m+10=0
`}
                                />

                                <p className="leading-8">
                                    두 그래프가 접하므로 이 이차방정식은
                                    중근을 갖습니다. 따라서 판별식{" "}
                                    <InlineMath math="D/4=0" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac D4
=
(-4)^2-(m+10)
=
0
`}
                                />

                                <BlockMath
                                    math={String.raw`
16-m-10=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
m=6
`}
                                />

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

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    여러 이동이 연속될 때는 앞 단계에서 얻은 식에
                                    다음 이동을 차례대로 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-x^2
\rightarrow
y=x^2
\rightarrow
y=(x-3)^2+m
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    마지막으로 포물선과 직선이 접한다는 조건은
                                    두 식을 연립하여 얻은 이차방정식이
                                    <strong className="text-white"> 중근을 갖는다</strong>는
                                    것으로 바꾸어 판별식을 이용합니다.
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

                    <div className="space-y-5 text-gray-300">

                        <p className="leading-8">
                            • 점의 이동은 순서쌍에서
                            앞쪽이 <InlineMath math="x" />좌표,
                            뒤쪽이 <InlineMath math="y" />좌표라는
                            위치에 주목합니다.
                        </p>

                        <p className="leading-8">
                            • 식의 이동은 식에 사용된 문자{" "}
                            <InlineMath math="x,\ y" />의 변화에 주목합니다.
                        </p>

                        <p className="leading-8">
                            • 여러 이동이 연속될 때는
                            앞 단계의 결과에 다음 이동을 차례대로 적용합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{여러 이동}
=
\text{앞 단계의 결과에 다음 이동을 차례대로 적용}
}
`}
                        />

                        <p className="leading-8">
                            • 점의 최종 이동을 이용하면
                            식의 최종 이동을 검산할 수 있습니다.
                        </p>

                        <div className="rounded-xl border border-yellow-500/30 bg-black/20 p-5">

                            <p className="leading-8">
                                이동이 여러 번 이루어지더라도
                                새로운 공식을 만들 필요는 없습니다.
                                지금까지 배운 평행이동과 대칭이동을
                                <strong className="text-white">
                                    {" "}순서대로 하나씩 적용
                                </strong>
                                하면 됩니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.32 변환된 식에서 이동 해석 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.32 변환된 식에서 이동 해석
                </h2>

                <p className="leading-8 text-gray-300">
                    변환된 식이 주어졌을 때 어떤 이동을 한 도형인지 파악하는 방법은
                    여러 가지가 있습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    복잡한 변환을 한 번에 해석하기보다
                    <strong className="text-white">
                        {" "}대칭이동을 먼저 찾아 기본 형태를 만든 뒤,
                        마지막에 평행이동을 해석
                    </strong>
                    하면 수월합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 해석의 기본 원리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 해석의 기본 원리
                        </h3>

                        <p className="leading-8 text-gray-300">
                            변환된 식에서는 먼저
                            <InlineMath math="x,\ y" />의 자리와 부호를 살펴
                            어떤 대칭이동이 이루어졌는지 확인합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            그다음 식의 문자에 들어간 값을 이용하여
                            평행이동의 방향과 크기를 해석합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                대칭이동 먼저 확인
                            </p>

                            <div className="mt-4 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    • <InlineMath math="y" />의 부호가 바뀌면{" "}
                                    <InlineMath math="x" />축 대칭을 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(x,-y)=0
`}
                                />

                                <p className="leading-8">
                                    • <InlineMath math="x" />의 부호가 바뀌면{" "}
                                    <InlineMath math="y" />축 대칭을 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(-x,y)=0
`}
                                />

                                <p className="leading-8">
                                    • <InlineMath math="x,\ y" />의 부호가 모두 바뀌면
                                    원점 대칭을 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(-x,-y)=0
`}
                                />

                                <p className="leading-8">
                                    • <InlineMath math="x,\ y" />의 자리가 바뀌면{" "}
                                    <InlineMath math="y=x" /> 대칭을 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(y,x)=0
`}
                                />

                                <p className="leading-8">
                                    • <InlineMath math="x,\ y" />의 자리가 바뀌고
                                    두 부호가 모두 바뀌면{" "}
                                    <InlineMath math="y=-x" /> 대칭을 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(-y,-x)=0
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                평행이동 해석
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                식에서
                            </p>

                            <BlockMath
                                math={String.raw`
x\rightarrow x-p,
\qquad
y\rightarrow y-q
`}
                            />

                            <p className="leading-8 text-gray-300">
                                로 변해 있다면 실제 도형은
                            </p>

                            <BlockMath
                                math={String.raw`
x\text{축 방향으로 }p,
\qquad
y\text{축 방향으로 }q
`}
                            />

                            <p className="leading-8 text-gray-300">
                                만큼 평행이동한 것입니다.
                            </p>

                        </div>

                    </div>


                    {/* 2. 예시 1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            예시 1
                        </h3>

                        <p className="leading-8 text-gray-300">
                            식
                        </p>

                        <BlockMath
                            math={String.raw`
y=-f(x+3)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이 어떤 이동으로 만들어졌는지 해석해 봅시다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ① 대칭이동
                            </p>

                            <p className="leading-8 text-gray-300">
                                원래 식
                            </p>

                            <BlockMath
                                math={String.raw`
y=f(x)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에서 함수 전체의 부호가 바뀌어 있으므로
                                그래프를 <InlineMath math="x" />축에 대하여
                                대칭이동한 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
y=f(x)
\rightarrow
y=-f(x)
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ② 평행이동
                            </p>

                            <p className="leading-8 text-gray-300">
                                다시 <InlineMath math="x" /> 대신{" "}
                                <InlineMath math="x+3" />이 들어가 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
x+3=x-(-3)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                즉, <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="-3" />만큼 평행이동한 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
y=-f(x)
\rightarrow
y=-f(x+3)
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                해석
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
y=f(x)
\xrightarrow{x\text{축 대칭}}
y=-f(x)
\xrightarrow{x\text{축으로 }-3}
y=-f(x+3)
}
`}
                            />

                        </div>

                    </div>


                    {/* 3. 예시 2 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            예시 2
                        </h3>

                        <p className="leading-8 text-gray-300">
                            식
                        </p>

                        <BlockMath
                            math={String.raw`
f(-y+3,\ x-2)=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이 어떤 이동으로 만들어졌는지 해석해 봅시다.
                        </p>


                        {/* y=x 대칭 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ① <InlineMath math="x,\ y" />의 자리 확인
                            </p>

                            <p className="leading-8 text-gray-300">
                                원래 식 <InlineMath math="f(x,y)=0" />과 비교하면
                                두 문자의 자리가 바뀌어 있습니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 먼저 직선 <InlineMath math="y=x" />에 대하여
                                대칭이동한 것으로 생각합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
f(x,y)=0
\rightarrow
f(y,x)=0
`}
                            />

                        </div>


                        {/* x축 대칭 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ② 부호 확인
                            </p>

                            <p className="leading-8 text-gray-300">
                                첫 번째 자리에 있는 <InlineMath math="y" />의
                                부호가 바뀌어 있으므로{" "}
                                <InlineMath math="x" />축에 대하여 대칭이동합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
f(y,x)=0
\rightarrow
f(-y,x)=0
`}
                            />

                        </div>


                        {/* 평행이동 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                ③ 평행이동
                            </p>

                            <p className="leading-8 text-gray-300">
                                마지막으로 <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="2" />만큼,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="3" />만큼 평행이동합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                식의 이동에서는
                            </p>

                            <BlockMath
                                math={String.raw`
x\rightarrow x-2,
\qquad
y\rightarrow y-3
`}
                            />

                            <p className="leading-8 text-gray-300">
                                을 대입하므로
                            </p>

                            <BlockMath
                                math={String.raw`
f(-y,x)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
\rightarrow
f(-(y-3),\ x-2)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
=
f(-y+3,\ x-2)=0
`}
                            />

                        </div>


                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                해석
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
f(x,y)=0
\xrightarrow{y=x\text{ 대칭}}
f(y,x)=0
\xrightarrow{x\text{축 대칭}}
f(-y,x)=0
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
f(-y,x)=0
\xrightarrow{x\text{축으로 }2,\ y\text{축으로 }3}
f(-y+3,\ x-2)=0
}
`}
                            />

                        </div>

                    </div>


                    {/* 4. 해석 순서 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 변환된 식을 해석하는 순서
                        </h3>

                        <p className="leading-8 text-gray-300">
                            변환된 식이 복잡할수록 한 번에 해석하려고 하지 않고
                            다음 순서로 나누어 보는 것이 좋습니다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="w-full min-w-[760px] border-collapse text-left text-gray-300">

                                <thead>
                                    <tr className="border-b border-white/20 text-white">
                                        <th className="px-4 py-3">
                                            순서
                                        </th>
                                        <th className="px-4 py-3">
                                            확인할 내용
                                        </th>
                                        <th className="px-4 py-3">
                                            해석
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            1
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="x,\ y" />의 자리
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="y=x" /> 또는{" "}
                                            <InlineMath math="y=-x" /> 대칭 여부 확인
                                        </td>
                                    </tr>

                                    <tr className="border-b border-white/10">
                                        <td className="px-4 py-3">
                                            2
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="x,\ y" />의 부호
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="x" />축,{" "}
                                            <InlineMath math="y" />축, 원점 대칭 여부 확인
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="px-4 py-3">
                                            3
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="x-p,\ y-q" /> 형태
                                        </td>
                                        <td className="px-4 py-3">
                                            <InlineMath math="x" />축으로{" "}
                                            <InlineMath math="p" />,{" "}
                                            <InlineMath math="y" />축으로{" "}
                                            <InlineMath math="q" /> 평행이동
                                        </td>
                                    </tr>

                                </tbody>

                            </table>

                        </div>

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
                            <InlineMath math="y=f(x)" />의 그래프가 [그림 1]과 같을 때,
                            그래프가 [그림 2]와 같은 것만을 [보기]에서 있는 대로 고르면?
                        </p>

                        {/* 그래프 */}
                        <div className="mt-6 grid gap-6 md:grid-cols-2">

                            <div className="flex flex-col items-center">
                                <img
                                    src="/images/commonMath2/1.32_1_1.png"
                                    alt="그림 1"
                                    className="w-full max-w-[250px] rounded-lg"
                                />
                                <p className="mt-3 text-center text-gray-400">
                                    [그림 1]
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img
                                    src="/images/commonMath2/1.32_1_2.png"
                                    alt="그림 2"
                                    className="w-full max-w-[250px] rounded-lg"
                                />
                                <p className="mt-3 text-center text-gray-400">
                                    [그림 2]
                                </p>
                            </div>

                        </div>

                        {/* 보기 */}
                        <div className="mt-6 rounded-xl border border-cyan-500/40 p-5">

                            <p className="mb-4 font-bold text-cyan-300">
                                보기
                            </p>

                            <div className="space-y-3 text-gray-300">
                                <p>
                                    ㄱ. <InlineMath math="y=-f(x+1)" />
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="y=-f(x-1)" />
                                </p>

                                <p>
                                    ㄷ. <InlineMath math="y=f(1-x)" />
                                </p>
                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ① ㄱ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ② ㄴ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ③ ㄱ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ④ ㄴ, ㄷ
                            </div>

                            <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                ⑤ ㄱ, ㄴ, ㄷ
                            </div>

                        </div>


                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                [그림 1]과 [그림 2]를 비교하면 그래프의 증가하는 부분이
                                감소하는 부분으로 바뀌었으므로 먼저 대칭이동을 생각합니다.
                            </p>

                            {/* ㄱ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄱ. <InlineMath math="y=-f(x+1)" />
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y=f(x)" />를{" "}
                                    <InlineMath math="x" />축에 대하여 대칭이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-f(x)
`}
                                />

                                <p className="leading-8">
                                    이고, 여기서 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="x+1" />이 들어갔으므로{" "}
                                    <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="-1" />만큼 평행이동한 것입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=f(x)
\rightarrow
y=-f(x)
\rightarrow
y=-f(x+1)
`}
                                />

                                <p className="leading-8">
                                    [그림 2]와 일치하지 않습니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄴ. <InlineMath math="y=-f(x-1)" />
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="x" />축에 대하여 대칭이동하고,
                                    다시 <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="1" />만큼 평행이동한 그래프입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=f(x)
\rightarrow
y=-f(x)
\rightarrow
y=-f(x-1)
`}
                                />

                                <p className="leading-8">
                                    [그림 2]와 일치합니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ㄷ. <InlineMath math="y=f(1-x)" />
                                </p>

                                <p className="leading-8">
                                    식을 다음과 같이 봅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(1-x)=f(-(x-1))
`}
                                />

                                <p className="leading-8">
                                    먼저 <InlineMath math="x" />의 부호가 바뀌었으므로{" "}
                                    <InlineMath math="y" />축에 대하여 대칭이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
y=f(-x)
`}
                                />

                                <p className="leading-8">
                                    이고, 다시 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="x-1" />이 들어갔으므로{" "}
                                    <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="1" />만큼 평행이동합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
y=f(x)
\rightarrow
y=f(-x)
\rightarrow
y=f(-(x-1))
=
f(1-x)
`}
                                />

                                <p className="leading-8">
                                    따라서 [그림 2]와 일치합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{\text{④ ㄴ,\ ㄷ}}
`}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    변환된 식을 볼 때는 먼저
                                    <strong className="text-white"> 대칭이동</strong>을
                                    찾아낸 후 평행이동을 해석하면 편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-f(x-1)
\;:\;
x\text{축 대칭}
\rightarrow
x\text{축으로 }1
`}
                                />

                                <BlockMath
                                    math={String.raw`
f(1-x)
=
f(-(x-1))
\;:\;
y\text{축 대칭}
\rightarrow
x\text{축으로 }1
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
                            [그림 1]의 도형의 방정식을{" "}
                            <InlineMath math="f(x,y)=0" />이라 할 때,
                            [그림 2] 도형의 방정식은?
                        </p>

                        {/* 그래프 */}
                        <div className="mt-6 grid gap-6 md:grid-cols-2">

                            <div className="flex flex-col items-center">
                                <img
                                    src="/images/commonMath2/1.32_2_1.png"
                                    alt="그림 1"
                                    className="w-full max-w-[250px] rounded-lg"
                                />
                                <p className="mt-3 text-center text-gray-400">
                                    [그림 1]
                                </p>
                            </div>

                            <div className="flex flex-col items-center">
                                <img
                                    src="/images/commonMath2/1.32_2_2.png"
                                    alt="그림 2"
                                    className="w-full max-w-[250px] rounded-lg"
                                />
                                <p className="mt-3 text-center text-gray-400">
                                    [그림 2]
                                </p>
                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-4 text-gray-300 md:grid-cols-2">

                            <p>
                                ① <InlineMath math="f(y+1,x-1)=0" />
                            </p>

                            <p>
                                ② <InlineMath math="f(y-1,x+1)=0" />
                            </p>

                            <p>
                                ③ <InlineMath math="f(y+1,-x+1)=0" />
                            </p>

                            <p>
                                ④ <InlineMath math="f(-y+1,-x-1)=0" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="f(-y+1,x-1)=0" />
                            </p>

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                [그림 1]과 [그림 2]를 비교하여
                                먼저 대칭이동을 찾아봅니다.
                            </p>

                            {/* 대칭이동 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 대칭이동
                                </p>

                                <p className="leading-8">
                                    [그림 1]의 가로선이 세로선으로 바뀌고,
                                    기울기가 <InlineMath math="-1" />인 부분의 방향은
                                    그대로입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 먼저 직선 <InlineMath math="y=x" />에 대하여
                                    대칭이동한 것으로 볼 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(y,x)=0
`}
                                />

                            </div>

                            {/* 평행이동 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 평행이동
                                </p>

                                <p className="leading-8">
                                    대칭이동한 도형을 [그림 2]의 위치로 옮기려면
                                    <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="-1" />만큼,{" "}
                                    <InlineMath math="y" />축의 방향으로{" "}
                                    <InlineMath math="1" />만큼 평행이동합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x\text{축으로 }-1,
\qquad
y\text{축으로 }1
`}
                                />

                                <p className="leading-8">
                                    식의 이동에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
x\rightarrow x+1,
\qquad
y\rightarrow y-1
`}
                                />

                                <p className="leading-8">
                                    을 대입합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    현재 식이 <InlineMath math="f(y,x)=0" />이므로
                                    각각 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
f(y,x)=0
\rightarrow
f(y-1,x+1)=0
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
\boxed{②\ f(y-1,x+1)=0}
`}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8">
                                    복잡한 이동은 먼저
                                    <strong className="text-white"> 대칭이동</strong>을
                                    찾아낸 뒤, 도형의 위치를 비교하여
                                    <strong className="text-white"> 평행이동</strong>을
                                    찾으면 편리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\xrightarrow{y=x\text{ 대칭}}
f(y,x)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\xrightarrow{x\text{축으로 }-1,\ y\text{축으로 }1}
f(y-1,x+1)=0
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            방정식 <InlineMath math="f(x,y)=0" />이 나타내는 도형이
                            오른쪽 그림과 같을 때, 방정식{" "}
                            <InlineMath math="f(y+1,x)=0" />이 나타내는 도형으로
                            적당한 것은?
                        </p>

                        {/* 원래 도형 */}
                        <div className="mt-6 flex flex-col items-center">
                            <img
                                src="/images/commonMath2/1.32_3_0.png"
                                alt="원래 도형"
                                className="w-full max-w-[240px] rounded-lg"
                            />
                            <p className="mt-2 text-center text-gray-400">
                                <InlineMath math="f(x,y)=0" />
                            </p>
                        </div>

                        {/* 선택지 */}
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {[1, 2, 3, 4, 5].map((n) => (
                                <div
                                    key={n}
                                    className="flex flex-col items-center rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="mb-3 self-start text-lg text-gray-300">
                                        {["①", "②", "③", "④", "⑤"][n - 1]}
                                    </p>

                                    <img
                                        src={`/images/commonMath2/1.32_3_${n}.png`}
                                        alt={`선택지 ${n}`}
                                        className="w-full max-w-[240px] rounded-lg"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            {/* 1단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 대칭이동 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x,y)=0" />과{" "}
                                    <InlineMath math="f(y+1,x)=0" />을 비교하면
                                    먼저 <InlineMath math="x,\ y" />의 자리가
                                    바뀌어 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 직선 <InlineMath math="y=x" />에 대하여
                                    대칭이동합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(y,x)=0
`}
                                />

                            </div>

                            {/* 2단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 평행이동 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(y,x)=0" />에서{" "}
                                    <InlineMath math="y" /> 대신{" "}
                                    <InlineMath math="y+1" />이 들어가 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(y,x)=0
\rightarrow
f(y+1,x)=0
`}
                                />

                                <p className="leading-8">
                                    따라서 도형을 <InlineMath math="y" />축의 방향으로{" "}
                                    <InlineMath math="-1" />만큼 평행이동한 것입니다.
                                </p>

                            </div>

                            {/* 좌표로 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 도형의 위치 확인
                                </p>

                                <p className="leading-8">
                                    원래 삼각형의 세 꼭짓점은
                                </p>

                                <BlockMath
                                    math={String.raw`
(0,1),\quad (1,1),\quad (1,2)
`}
                                />

                                <p className="leading-8">
                                    입니다. 이를 <InlineMath math="y=x" />에 대하여
                                    대칭이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(1,0),\quad (1,1),\quad (2,1)
`}
                                />

                                <p className="leading-8">
                                    이 되고, 다시 <InlineMath math="y" />축의 방향으로{" "}
                                    <InlineMath math="-1" />만큼 평행이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(1,-1),\quad (1,0),\quad (2,0)
`}
                                />

                                <p className="leading-8">
                                    이 됩니다. 이와 같은 도형은 ②입니다.
                                </p>

                            </div>

                            {/* 전체 과정 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\xrightarrow{y=x\text{ 대칭}}
f(y,x)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\xrightarrow{y\text{축으로 }-1}
f(y+1,x)=0
`}
                                />

                                <p className="mt-3 leading-8">
                                    변환된 식에서는 먼저{" "}
                                    <strong className="text-white">
                                        문자의 자리와 부호로 대칭이동
                                    </strong>
                                    을 찾고, 그다음{" "}
                                    <strong className="text-white">
                                        더해지거나 빼진 값으로 평행이동
                                    </strong>
                                    을 찾습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
{②}
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
                            방정식 <InlineMath math="f(x,y)=0" />이 나타내는 도형이
                            오른쪽 그림과 같을 때, 다음 중 방정식{" "}
                            <InlineMath math="f(x+2,-y)=0" />이 나타내는 도형은?
                        </p>

                        {/* 원래 도형 */}
                        <div className="mt-6 flex flex-col items-center">

                            <img
                                src="/images/commonMath2/1.32_4_0.png"
                                alt="원래 도형"
                                className="w-full max-w-[240px] rounded-lg"
                            />

                            <p className="mt-2 text-center text-gray-400">
                                <InlineMath math="f(x,y)=0" />
                            </p>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                            {[1, 2, 3, 4, 5].map((n) => (
                                <div
                                    key={n}
                                    className="flex flex-col items-center rounded-xl border border-white/10 bg-black/20 p-4"
                                >
                                    <p className="mb-3 self-start text-lg text-gray-300">
                                        {["①", "②", "③", "④", "⑤"][n - 1]}
                                    </p>

                                    <img
                                        src={`/images/commonMath2/1.32_4_${n}.png`}
                                        alt={`선택지 ${n}`}
                                        className="w-full max-w-[240px] rounded-lg"
                                    />
                                </div>
                            ))}

                        </div>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                변환된 식{" "}
                                <InlineMath math="f(x+2,-y)=0" />에서
                                먼저 대칭이동을 확인합니다.
                            </p>


                            {/* 1단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 대칭이동
                                </p>

                                <p className="leading-8">
                                    원래 식 <InlineMath math="f(x,y)=0" />과 비교하면{" "}
                                    <InlineMath math="y" />의 부호가 바뀌어 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 먼저 <InlineMath math="x" />축에 대하여
                                    대칭이동한 것입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(x,-y)=0
`}
                                />

                                <p className="leading-8">
                                    원래 도형은 <InlineMath math="x" />축 아래쪽으로
                                    뒤집힙니다.
                                </p>

                            </div>


                            {/* 2단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 평행이동
                                </p>

                                <p className="leading-8">
                                    다시 <InlineMath math="x" /> 대신{" "}
                                    <InlineMath math="x+2" />가 들어가 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x+2=x-(-2)
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="-2" />만큼, 즉 왼쪽으로{" "}
                                    <InlineMath math="2" />만큼 평행이동한 것입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,-y)=0
\rightarrow
f(x+2,-y)=0
`}
                                />

                            </div>


                            {/* 위치 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 도형의 위치 확인
                                </p>

                                <p className="leading-8">
                                    원래 도형은
                                </p>

                                <BlockMath
                                    math={String.raw`
0\le x\le1,
\qquad
0\le y\le1
`}
                                />

                                <p className="leading-8">
                                    범위에 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="x" />축 대칭을 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
0\le x\le1,
\qquad
-1\le y\le0
`}
                                />

                                <p className="leading-8">
                                    이 되고, 다시 왼쪽으로 <InlineMath math="2" />만큼
                                    평행이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
-2\le x\le-1,
\qquad
-1\le y\le0
`}
                                />

                                <p className="leading-8">
                                    이 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 이에 해당하는 그림은 ⑤입니다.
                                </p>

                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
{⑤}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    변환된 식에서는 먼저 부호의 변화를 보고
                                    <strong className="text-white"> 대칭이동</strong>을
                                    찾은 뒤, 문자에 더해지거나 빼진 값을 보고
                                    <strong className="text-white"> 평행이동</strong>을
                                    해석합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\xrightarrow{x\text{축 대칭}}
f(x,-y)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\xrightarrow{x\text{축으로 }-2}
f(x+2,-y)=0
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
                                두 방정식 <InlineMath math="f(x,y)=0" />과{" "}
                                <InlineMath math="g(x,y)=0" />이 나타내는 도형이
                                오른쪽 그림과 같을 때, 다음 중 옳은 것은?
                            </p>
                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">
                            <img
                                src="/images/commonMath2/1.32_5.png"
                                alt="f(x,y)=0과 g(x,y)=0이 나타내는 도형"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />
                        </div>
</div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-4 text-gray-300 md:grid-cols-2">

                            <p>
                                ① <InlineMath math="g(x,y)=f(x-2,-y)" />
                            </p>

                            <p>
                                ② <InlineMath math="g(x,y)=f(x+3,-y+1)" />
                            </p>

                            <p>
                                ③ <InlineMath math="g(x,y)=f(-x,-y+1)" />
                            </p>

                            <p>
                                ④ <InlineMath math="g(x,y)=f(-x+1,y+1)" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="g(x,y)=f(-x-2,y+1)" />
                            </p>

                        </div>

                    


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 도형의 모양을 비교하여 먼저
                                어떤 대칭이동이 이루어졌는지 확인합니다.
                            </p>


                            {/* 1단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 대칭이동 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="f(x,y)=0" />의 도형은{" "}
                                    <InlineMath math="x=-1" />에 세로선이 있고,
                                    곡선은 그 왼쪽에 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="g(x,y)=0" />의 도형에서는
                                    세로선의 좌우 방향이 반대로 바뀌어 있으므로
                                    먼저 <InlineMath math="y" />축에 대하여
                                    대칭이동한 것으로 볼 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\rightarrow
f(-x,y)=0
`}
                                />

                            </div>


                            {/* 2단계 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 평행이동 확인
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="y" />축 대칭 후 도형의 위치를{" "}
                                    <InlineMath math="g(x,y)=0" />의 도형과 비교하면{" "}
                                    <InlineMath math="x" />축의 방향으로{" "}
                                    <InlineMath math="1" />만큼,{" "}
                                    <InlineMath math="y" />축의 방향으로{" "}
                                    <InlineMath math="-1" />만큼 평행이동합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x\text{축으로 }1,
\qquad
y\text{축으로 }-1
`}
                                />

                                <p className="leading-8">
                                    식의 이동에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
x\rightarrow x-1,
\qquad
y\rightarrow y+1
`}
                                />

                                <p className="leading-8">
                                    을 대입합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    현재 식이 <InlineMath math="f(-x,y)=0" />이므로
                                    이를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
f(-x,y)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\rightarrow
f(-(x-1),y+1)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
f(-x+1,y+1)=0
`}
                                />

                            </div>


                            {/* 좌표로 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 위치 확인
                                </p>

                                <p className="leading-8">
                                    원래 도형에서 대표적인 점{" "}
                                    <InlineMath math="(-1,1)" />을 생각하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(-1,1)
\xrightarrow{y\text{축 대칭}}
(1,1)
`}
                                />

                                <p className="leading-8">
                                    다시 <InlineMath math="x" />축으로{" "}
                                    <InlineMath math="1" />,{" "}
                                    <InlineMath math="y" />축으로{" "}
                                    <InlineMath math="-1" />만큼 평행이동하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(1,1)
\rightarrow
(2,0)
`}
                                />

                                <p className="leading-8">
                                    으로 이동하여 그림의{" "}
                                    <InlineMath math="g(x,y)=0" />의 위치와 일치합니다.
                                </p>

                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
④\quad
g(x,y)=f(-x+1,y+1)
}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 도형의 방향을 비교하여 먼저
                                    <strong className="text-white"> 대칭이동</strong>을 찾고,
                                    그다음 두 도형의 위치를 비교하여
                                    <strong className="text-white"> 평행이동</strong>을 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
f(x,y)=0
\xrightarrow{y\text{축 대칭}}
f(-x,y)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\xrightarrow{x\text{축으로 }1,\ y\text{축으로 }-1}
f(-x+1,y+1)=0
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
            방정식 <InlineMath math="f(x,y)=0" />이 나타내는 도형이
            오른쪽 그림과 같을 때,{" "}
            <InlineMath math="f(-x+1,-y-1)=0" />이 나타내는
            도형 위의 점과 원점 사이의 거리의 최댓값은?
        </p>
</div>
        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.32_6.png"
                alt="f(x,y)=0이 나타내는 마름모"
                className="mx-auto w-full max-w-md rounded-lg"
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
                변환된 식{" "}
                <InlineMath math="f(-x+1,-y-1)=0" />에서
                먼저 대칭이동을 확인합니다.
            </p>


            {/* 1단계 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 대칭이동
                </p>

                <p className="leading-8">
                    <InlineMath math="x,\ y" />의 부호가 모두
                    바뀌어 있으므로 먼저 원점에 대하여 대칭이동한 것으로
                    생각합니다.
                </p>

                <BlockMath
                    math={String.raw`
f(x,y)=0
\rightarrow
f(-x,-y)=0
`}
                />

            </div>


            {/* 2단계 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 평행이동
                </p>

                <p className="leading-8">
                    변환된 식의 문자를 다음과 같이 정리하면
                </p>

                <BlockMath
                    math={String.raw`
-x+1=-(x-1)
`}
                />

                <BlockMath
                    math={String.raw`
-y-1=-(y+1)
`}
                />

                <p className="leading-8">
                    이므로 원점 대칭한 도형을{" "}
                    <InlineMath math="x" />축의 방향으로{" "}
                    <InlineMath math="1" />만큼,{" "}
                    <InlineMath math="y" />축의 방향으로{" "}
                    <InlineMath math="-1" />만큼 평행이동한 것입니다.
                </p>

                <BlockMath
                    math={String.raw`
f(-x,-y)=0
\rightarrow
f(-(x-1),-(y+1))=0
`}
                />

                <BlockMath
                    math={String.raw`
=
f(-x+1,-y-1)=0
`}
                />

            </div>


            {/* 3단계 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 도형의 꼭짓점 이동
                </p>

                <p className="leading-8">
                    원래 도형의 네 꼭짓점은
                </p>

                <BlockMath
                    math={String.raw`
(0,0),\quad
(1,1),\quad
(2,0),\quad
(1,-1)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="mt-3 leading-8">
                    먼저 원점에 대하여 대칭이동하면
                </p>

                <BlockMath
                    math={String.raw`
(0,0),\quad
(-1,-1),\quad
(-2,0),\quad
(-1,1)
`}
                />

                <p className="leading-8">
                    이 되고, 다시{" "}
                    <InlineMath math="x" />축의 방향으로{" "}
                    <InlineMath math="1" />만큼,{" "}
                    <InlineMath math="y" />축의 방향으로{" "}
                    <InlineMath math="-1" />만큼 평행이동하면
                </p>

                <BlockMath
                    math={String.raw`
(1,-1),\quad
(0,-2),\quad
(-1,-1),\quad
(0,0)
`}
                />

                <p className="leading-8">
                    이 됩니다.
                </p>

            </div>


            {/* 4단계 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 원점과의 거리
                </p>

                <p className="leading-8">
                    이동한 도형에서 원점과 가장 멀리 떨어진 점은{" "}
                    <InlineMath math="(0,-2)" />입니다.
                </p>

                <BlockMath
                    math={String.raw`
\sqrt{0^2+(-2)^2}=2
`}
                />

                <p className="leading-8">
                    따라서 원점과 도형 위의 점 사이의 거리의 최댓값은{" "}
                    <InlineMath math="2" />입니다.
                </p>

            </div>


            {/* 정답 */}
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{2}
`}
                />

            </div>


            {/* 풀이의 핵심 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    <InlineMath math="x,\ y" />의 부호가 모두 바뀌어
                    있으면 먼저 <strong className="text-white">원점 대칭</strong>을
                    생각하고, 그다음 식을{" "}
                    <InlineMath math="x-p,\ y-q" /> 형태로 정리하여
                    평행이동을 해석합니다.
                </p>

                <BlockMath
                    math={String.raw`
f(x,y)=0
\xrightarrow{\text{원점 대칭}}
f(-x,-y)=0
`}
                />

                <BlockMath
                    math={String.raw`
\xrightarrow{x\text{축으로 }1,\ y\text{축으로 }-1}
f(-x+1,-y-1)=0
`}
                />

            </div>

        </div>

    </details>

</div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 text-gray-300">

                        <p className="leading-8">
                            • 변환된 식은 한 번에 해석하지 않고
                            <strong className="text-white">
                                {" "}대칭이동과 평행이동으로 나누어
                            </strong>
                            생각합니다.
                        </p>

                        <p className="leading-8">
                            • 먼저 <InlineMath math="x,\ y" />의 자리와 부호를 보고
                            대칭이동을 해석합니다.
                        </p>

                        <p className="leading-8">
                            • 그다음 <InlineMath math="x-p,\ y-q" />의 형태를 보고
                            평행이동을 해석합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{변환된 식}
\rightarrow
\text{대칭이동 확인}
\rightarrow
\text{평행이동 확인}
}
`}
                        />

                        <div className="rounded-xl border border-yellow-500/30 bg-black/20 p-5">

                            <p className="leading-8">
                                식에서
                                <InlineMath math="x-p" />,{" "}
                                <InlineMath math="y-q" />가 나타나면
                                실제 도형은 각각{" "}
                                <InlineMath math="x" />축의 방향으로{" "}
                                <InlineMath math="p" />,{" "}
                                <InlineMath math="y" />축의 방향으로{" "}
                                <InlineMath math="q" />만큼 이동한 것입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
x-p\Longleftrightarrow x\text{축으로 }p,
\qquad
y-q\Longleftrightarrow y\text{축으로 }q
}
`}
                            />

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.33 대칭이동을 이용한 선분 길이의 최솟값 */}
<section className="mb-10 rounded-2xl border border-white/30 p-7">

    <h2 className="mb-2 text-3xl font-bold">
        1.33 대칭이동을 이용한 선분 길이의 최솟값
    </h2>

    <p className="leading-8 text-gray-300">
        여러 선분의 길이의 합이 가장 작아지는 값을 구할 때에는
        각 선분의 길이를 하나씩 계산하는 것보다{" "}
        <b>대칭이동을 이용하여 꺾인 선을 하나의 선분으로 만드는 방법</b>이
        유용합니다.
    </p>

    <p className="mt-3 leading-8 text-gray-300">
        특히 움직이는 점에서 선분이 꺾이는 경우에는
        그 점이 놓인 직선에 대하여 한쪽의 점을 대칭이동합니다.
    </p>


    <div className="mt-8 space-y-6">

        {/* 1. 한 번 꺾이는 선분 */}
        <div className="rounded-xl border border-white/10 bg-white/10 p-6">

            <h3 className="mb-4 text-2xl font-bold">
                1. 한 번 꺾이는 선분의 최솟값
            </h3>

            <p className="leading-8 text-gray-300">
                점 <InlineMath math="P" />가 한 직선 위를 움직일 때
            </p>

            <BlockMath
                math={String.raw`
AP+PB
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 생각해 봅시다.
            </p>


            {/* 원래 그림 */}
            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">
    <img
        src="/images/commonMath2/1.33_1.png"
        alt="한 직선 위의 점 P에서 꺾이는 두 선분 AP와 PB"
        className="w-full rounded-lg"
    />
</div>


            <p className="mt-5 leading-8 text-gray-300">
                <InlineMath math="AP" />와 <InlineMath math="PB" />를
                각각 거리 공식으로 계산하여 식을 만드는 것이 아니라,
                꺾인 두 선분을 하나의 선분으로 만들어 보겠습니다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                점 <InlineMath math="B" />를
                점 <InlineMath math="P" />가 놓인 직선에 대하여
                대칭이동한 점을 <InlineMath math="B'" />라 하겠습니다.
            </p>


            {/* 대칭이동 그림 */}
            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

                <img
                    src="/images/commonMath2/1.33_2.png"
                    alt="점 B를 직선에 대하여 대칭이동하여 B'을 만든 그림"
                    className="mx-auto w-full max-w-xl rounded-lg"
                />

            </div>


            <p className="mt-5 leading-8 text-gray-300">
                대칭이동에 의하여 직선 위의 모든 점은
                <InlineMath math="B" />와 <InlineMath math="B'" />에서
                같은 거리에 있으므로
            </p>

            <BlockMath
                math={String.raw`
PB=PB'
`}
            />

            <p className="leading-8 text-gray-300">
                입니다. 따라서
            </p>

            <BlockMath
                math={String.raw`
AP+PB
=
AP+PB'
`}
            />

            <p className="leading-8 text-gray-300">
                로 바꿀 수 있습니다.
            </p>


            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 선을 편다
                </p>

                <p className="leading-8 text-gray-300">
                    점 <InlineMath math="P" />가 움직이면{" "}
                    <InlineMath math="AP+PB'" />의 길이도 달라집니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    이 길이가 가장 짧아지는 것은
                    세 점 <InlineMath math="A,\ P,\ B'" />가
                    한 직선 위에 있을 때입니다.
                </p>

                <BlockMath
                    math={String.raw`
AP+PB'
\ge AB'
`}
                />

                <p className="leading-8 text-gray-300">
                    따라서 직선 <InlineMath math="AB'" />와
                    점 <InlineMath math="P" />가 놓인 직선의 교점이
                    최소가 되는 점입니다.
                </p>

            </div>


            <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                <p className="font-bold text-yellow-300">
                    핵심
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{꺾이는 점이 놓인 직선에 대하여 대칭이동한다.}
}
`}
                />

                <BlockMath
                    math={String.raw`
\boxed{
\text{꺾인 선분의 합}
\rightarrow
\text{하나의 선분}
}
`}
                />

            </div>

        </div>



        {/* 2. 두 번 꺾이는 선분 */}
<div className="rounded-xl border border-white/10 bg-white/10 p-6">

    <h3 className="mb-4 text-2xl font-bold">
        2. 두 번 꺾이는 선분의 최솟값
    </h3>

    <p className="leading-8 text-gray-300">
        이번에는 점 <InlineMath math="P" />와{" "}
        <InlineMath math="Q" />에서 두 번 꺾이는
    </p>

    <BlockMath
        math={String.raw`
AP+PQ+QB
`}
    />

    <p className="leading-8 text-gray-300">
        의 최솟값을 생각해 봅시다.
    </p>


    {/* 기본 그림 */}
    <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

        <img
            src="/images/commonMath2/1.33_3.png"
            alt="두 직선 위의 점 P와 Q에서 두 번 꺾이는 선분"
            className="w-full rounded-lg"
        />

    </div>


    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

        <p className="font-bold text-purple-300">
            생각해 보기
        </p>

        <p className="mt-3 leading-8 text-gray-300">
            한 번 꺾이는 경우에는
            꺾이는 점이 놓인 직선에 대하여 한쪽의 점을 대칭이동했습니다.
        </p>

        <p className="mt-3 leading-8 text-gray-300">
            이번에는 점 <InlineMath math="P" />와{" "}
            <InlineMath math="Q" />에서 두 번 꺾이므로,
            두 점이 놓인 직선에 대하여 각각 대칭이동하면 됩니다.
        </p>

    </div>


    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            대칭이동 확인하기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            <div className="mx-auto max-w-sm rounded-xl border border-white/10 bg-white p-4">

                <img
                    src="/images/commonMath2/1.33_4.png"
                    alt="A와 B를 각각 두 직선에 대하여 대칭이동한 그림"
                    className="w-full rounded-lg"
                />

            </div>


            <p className="leading-8">
                점 <InlineMath math="A" />를
                점 <InlineMath math="P" />가 놓인 직선에 대하여
                대칭이동한 점을 <InlineMath math="A'" />라 하고,
                점 <InlineMath math="B" />를
                점 <InlineMath math="Q" />가 놓인 직선에 대하여
                대칭이동한 점을 <InlineMath math="B'" />라 하겠습니다.
            </p>

            <BlockMath
                math={String.raw`
AP=A'P,
\qquad
QB=QB'
`}
            />

            <p className="leading-8">
                따라서
            </p>

            <BlockMath
                math={String.raw`
AP+PQ+QB
=
A'P+PQ+QB'
`}
            />

            <p className="leading-8">
                로 바꿀 수 있습니다.
            </p>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 선을 편다
                </p>

                <p className="leading-8">
                    네 점{" "}
                    <InlineMath math="A',\ P,\ Q,\ B'" />가
                    한 직선 위에 있을 때
                    세 선분이 하나의 선분이 되어 길이가 가장 짧아집니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\min(AP+PQ+QB)=A'B'
}
`}
                />

            </div>

        </div>

    </details>



    {/* 도형의 변에서도 같은 원리 */}
    <div className="mt-8 border-t border-white/10 pt-7">

        <h4 className="mb-4 text-xl font-bold text-white">
            도형의 변에서도 같은 원리를 사용할 수 있다
        </h4>

        <p className="leading-8 text-gray-300">
            꺾이는 점이 좌표축이나 끝없이 이어진 직선 위에 있을 필요는 없습니다.
        </p>

        <p className="mt-3 leading-8 text-gray-300">
            다음과 같이 직사각형의 변 위에 점{" "}
            <InlineMath math="P,\ Q" />가 있는 경우에도
            같은 방법으로
        </p>

        <BlockMath
            math={String.raw`
AP+PQ+QB
`}
        />

        <p className="leading-8 text-gray-300">
            의 최솟값을 구할 수 있습니다.
        </p>


        {/* 직사각형 원본 */}
        <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_9.png"
                alt="직사각형의 두 변 위의 점 P와 Q에서 꺾이는 선분"
                className="w-full rounded-lg"
            />

        </div>


        <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

            <p className="font-bold text-purple-300">
                어느 직선에 대하여 대칭이동할까?
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                점 <InlineMath math="P" />에서 선분이 꺾이므로
                점 <InlineMath math="P" />가 놓인 직사각형의 왼쪽 변에 대하여
                점 <InlineMath math="A" />를 대칭이동합니다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                마찬가지로 점 <InlineMath math="Q" />에서 선분이 꺾이므로
                점 <InlineMath math="Q" />가 놓인 직사각형의 오른쪽 변에 대하여
                점 <InlineMath math="B" />를 대칭이동합니다.
            </p>

        </div>


        <details className="mt-5 rounded-xl border border-white/15 p-5">

            <summary className="cursor-pointer font-semibold text-yellow-300">
                대칭이동 확인하기
            </summary>

            <div className="mt-5 space-y-5 text-gray-300">

                {/* 직사각형 대칭이동 그림 */}
                <div className="mx-auto max-w-sm rounded-xl border border-white/10 bg-white p-4">

                    <img
                        src="/images/commonMath2/1.33_10.png"
                        alt="직사각형의 두 변에 대하여 A와 B를 대칭이동한 그림"
                        className="w-full rounded-lg"
                    />

                </div>


                <p className="leading-8">
                    점 <InlineMath math="A" />를
                    왼쪽 변에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하고,
                    점 <InlineMath math="B" />를
                    오른쪽 변에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="B'" />라 하겠습니다.
                </p>

                <p className="leading-8">
                    대칭이동에 의하여
                </p>

                <BlockMath
                    math={String.raw`
AP=A'P,
\qquad
QB=QB'
`}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
AP+PQ+QB
=
A'P+PQ+QB'
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 네 점{" "}
                    <InlineMath math="A',\ P,\ Q,\ B'" />가
                    한 직선 위에 있을 때 길이가 가장 짧아집니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\min(AP+PQ+QB)=A'B'
}
`}
                />


                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                    <p className="mb-3 font-bold text-blue-300">
                        중요한 점
                    </p>

                    <p className="leading-8">
                        대칭이동의 기준이 반드시{" "}
                        <InlineMath math="x" />축이나{" "}
                        <InlineMath math="y" />축일 필요는 없습니다.
                    </p>

                    <p className="mt-3 leading-8">
                        도형의 변 위에서 선분이 꺾이는 경우에는
                        그 <b>변이 놓인 직선</b>에 대하여 대칭이동하면 됩니다.
                    </p>

                    <BlockMath
                        math={String.raw`
\boxed{
\text{꺾이는 점이 놓인 직선}
\rightarrow
\text{대칭이동의 기준}
}
`}
                    />

                </div>

            </div>

        </details>

    </div>

</div>



        {/* 3. 부채꼴에서 삼각형 둘레의 최솟값 */}
        <div className="rounded-xl border border-white/10 bg-white/10 p-6">

            <h3 className="mb-4 text-2xl font-bold">
                3. 부채꼴에서 삼각형 둘레의 최솟값
            </h3>

            <p className="leading-8 text-gray-300">
                부채꼴의 호 위에 점 <InlineMath math="A" />가 있고,
                두 반지름 위에 각각 점{" "}
                <InlineMath math="P,\ Q" />가 있다고 하겠습니다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                삼각형 <InlineMath math="APQ" />의 둘레
            </p>

            <BlockMath
                math={String.raw`
AP+PQ+QA
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 생각해 봅시다.
            </p>


            {/* 원래 그림 */}
            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

                <img
                    src="/images/commonMath2/1.33_5.png"
                    alt="부채꼴의 호 위의 점 A와 두 반지름 위의 점 P, Q"
                    className="mx-auto w-full max-w-xl rounded-lg"
                />

            </div>


            <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                <p className="font-bold text-purple-300">
                    생각해 보기
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    점 <InlineMath math="A" />는 호 위를 움직입니다.
                    점 <InlineMath math="A" />의 위치가 달라지면
                    삼각형 둘레의 최솟값도 달라질까요?
                </p>

            </div>


            <details className="mt-5 rounded-xl border border-white/15 p-5">

                <summary className="cursor-pointer font-semibold text-yellow-300">
                    대칭이동 확인하기
                </summary>

                <div className="mt-5 space-y-5 text-gray-300">

            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

                        <img
                            src="/images/commonMath2/1.33_6.png"
                            alt="부채꼴의 두 반지름에 대하여 A를 대칭이동한 그림"
                            className="mx-auto w-full max-w-xl rounded-lg"
                        />

                    </div>


                    <p className="leading-8">
                        점 <InlineMath math="A" />를
                        점 <InlineMath math="P" />가 놓인 반지름에 대하여
                        대칭이동한 점을 <InlineMath math="A'" />라 하고,
                    </p>

                    <p className="leading-8">
                        점 <InlineMath math="A" />를
                        점 <InlineMath math="Q" />가 놓인 반지름에 대하여
                        대칭이동한 점을 <InlineMath math="A''" />라 하겠습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
AP=A'P,
\qquad
AQ=A''Q
`}
                    />

                    <p className="leading-8">
                        따라서 삼각형의 둘레는
                    </p>

                    <BlockMath
                        math={String.raw`
AP+PQ+QA
=
A'P+PQ+QA''
`}
                    />

                    <p className="leading-8">
                        로 바뀝니다.
                    </p>

                    <p className="leading-8">
                        세 선분이 하나의 직선 위에 놓일 때 가장 짧으므로
                    </p>

                    <BlockMath
                        math={String.raw`
\boxed{
\min(AP+PQ+QA)=A'A''
}
`}
                    />


                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="mb-3 font-bold text-blue-300">
                            점 A의 위치가 달라도 같은 이유
                        </p>

                        <p className="leading-8">
                            부채꼴의 중심을 <InlineMath math="O" />라 하면
                            대칭이동에 의하여
                        </p>

                        <BlockMath
                            math={String.raw`
OA'=OA=OA''
`}
                        />

                        <p className="leading-8">
                            이고, <InlineMath math="\angle A'OA''" />의 크기도
                            부채꼴의 중심각에 의하여 일정합니다.
                        </p>

                        <p className="mt-3 leading-8">
                            따라서 점 <InlineMath math="A" />가 호 위의 어느 곳에 있더라도
                            선분 <InlineMath math="A'A''" />의 길이는 같습니다.
                        </p>

                    </div>


                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-bold text-yellow-300">
                            결론
                        </p>

                        <p className="mt-3 leading-8">
                            부채꼴의 호 위에서 점 <InlineMath math="A" />의 위치가
                            달라져도 삼각형 <InlineMath math="APQ" />의
                            최소 둘레는 같습니다.
                        </p>

                    </div>

                </div>

            </details>

        </div>



        {/* 4. 삼각형의 세 변 위의 점 */}
        <div className="rounded-xl border border-white/10 bg-white/10 p-6">

            <h3 className="mb-4 text-2xl font-bold">
                4. 삼각형의 세 변 위의 점을 이은 삼각형의 둘레의 최솟값
            </h3>

            <p className="leading-8 text-gray-300">
                이번에는 삼각형의 세 변 위에 각각 한 점을 잡고,
                이 세 점을 연결하여 만든 삼각형의 둘레를
                가장 작게 만드는 경우를 생각해 봅시다.
            </p>


            {/* 원래 그림 */}
            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

                <img
                    src="/images/commonMath2/1.33_7.png"
                    alt="삼각형의 세 변 위에 놓인 세 점을 연결한 삼각형"
                    className="mx-auto w-full max-w-xl rounded-lg"
                />

            </div>


            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                <p className="font-bold text-red-300">
                    세 점을 한꺼번에 움직이지 않는다
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    세 점을 모두 움직이면서 바로 최솟값을 찾기는 어렵습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    먼저 한 변 위의 점 <InlineMath math="A" />의 위치를
                    고정한 뒤, 나머지 두 점{" "}
                    <InlineMath math="P,\ Q" />에 대하여
                    둘레의 최솟값을 구합니다.
                </p>

            </div>


            {/* 1단계 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    ① 점 A를 먼저 고정한다
                </p>

                <p className="leading-8 text-gray-300">
                    점 <InlineMath math="A" />를 고정하면
                </p>

                <BlockMath
                    math={String.raw`
AP+PQ+QA
`}
                />

                <p className="leading-8 text-gray-300">
                    는 앞에서 살펴본 부채꼴의 경우와 같은 형태가 됩니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    따라서 점 <InlineMath math="A" />를
                    점 <InlineMath math="P" />와{" "}
                    <InlineMath math="Q" />가 놓인 두 변에 대하여
                    각각 대칭이동합니다.
                </p>

            </div>


            {/* 최종 그림 */}
            <div className="mx-auto mt-5 max-w-sm rounded-xl border border-white/10 bg-white p-4">

                <img
                    src="/images/commonMath2/1.33_8.png"
                    alt="점 A를 두 변에 대하여 대칭이동하여 삼각형 둘레의 최솟값을 찾는 그림"
                    className="mx-auto w-full max-w-xl rounded-lg"
                />

            </div>


            {/* 2단계 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    ② 고정된 A에 대하여 P, Q의 위치를 결정한다
                </p>

                <p className="leading-8 text-gray-300">
                    점 <InlineMath math="A" />를
                    한 변에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />,
                    다른 변에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A''" />라 하겠습니다.
                </p>

                <BlockMath
                    math={String.raw`
AP=A'P,
\qquad
AQ=A''Q
`}
                />

                <p className="leading-8 text-gray-300">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
AP+PQ+QA
=
A'P+PQ+QA''
`}
                />

                <p className="leading-8 text-gray-300">
                    입니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    따라서 점 <InlineMath math="A" />가 고정되어 있을 때에는
                    <InlineMath math="A',\ P,\ Q,\ A''" />가
                    한 직선 위에 있을 때 둘레가 가장 짧습니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\min(AP+PQ+QA)=A'A''
}
`}
                />

            </div>


            {/* 3단계 */}
            <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-3 font-bold text-white">
                    ③ 이제 A의 위치를 결정한다
                </p>

                <p className="leading-8 text-gray-300">
                    두 변의 교점을 <InlineMath math="O" />라 하겠습니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    대칭이동에 의하여
                </p>

                <BlockMath
                    math={String.raw`
OA'=OA=OA''
`}
                />

                <p className="leading-8 text-gray-300">
                    이고, <InlineMath math="\angle A'OA''" />의 크기는
                    삼각형의 꼭짓점 <InlineMath math="O" />의 각에 의하여
                    일정합니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    따라서 선분 <InlineMath math="A'A''" />의 길이는
                    <InlineMath math="OA" />가 짧을수록 작아집니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    점 <InlineMath math="A" />가 놓인 변과
                    점 <InlineMath math="O" /> 사이의 거리가 가장 짧아지는 것은
                    <InlineMath math="OA" />가 그 변에 수직일 때입니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
OA\perp \text{점 }A\text{가 놓인 변}
}
`}
                />

            </div>


            {/* 결론 */}
            <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    점 <InlineMath math="A" />는
                    꼭짓점 <InlineMath math="O" />에서
                    맞은편 변에 내린 수선의 발이 됩니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    같은 원리를 다른 꼭짓점에도 적용하면,
                    최소 둘레를 만드는 세 점은
                    각 꼭짓점에서 맞은편 변에 내린
                    수선의 발이 됩니다.
                </p>

            </div>


            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 흐름
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\begin{array}{c}
\text{한 점을 먼저 고정}\\
\downarrow\\
\text{대칭이동하여 나머지 두 점에 대한 최솟값}\\
\downarrow\\
\text{고정한 점의 위치 결정}\\
\downarrow\\
\text{세 수선의 발}
\end{array}
}
`}
                />

            </div>


            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                <p className="font-bold text-red-300">
                    주의
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    이 결과는 세 수선의 발이 모두 삼각형의 변 위에 놓이는{" "}
                    <b>예각삼각형</b>에서 생각합니다.
                </p>

            </div>

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
                오른쪽 그림과 같이 점{" "}
                <InlineMath math="P(2,6)" />, 점{" "}
                <InlineMath math="Q(1,3)" />과 직선{" "}
                <InlineMath math="y=x" /> 위의 점{" "}
                <InlineMath math="R" />,{" "}
                <InlineMath math="y" />축 위의 점{" "}
                <InlineMath math="S" />를 꼭짓점으로 하는
                사각형 <InlineMath math="PSQR" />의 둘레의 길이의
                최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_01.png"
                alt="점 P, Q와 y축 위의 점 S, 직선 y=x 위의 점 R로 이루어진 사각형 PSQR"
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
                사각형 <InlineMath math="PSQR" />의 둘레는
            </p>

            <BlockMath
                math={String.raw`
PS+SQ+QR+RP
`}
            />

            <p className="leading-8">
                입니다.
            </p>

            <p className="leading-8">
                점 <InlineMath math="S" />는{" "}
                <InlineMath math="y" />축 위에서 움직이고,
                점 <InlineMath math="R" />은 직선{" "}
                <InlineMath math="y=x" /> 위에서 움직이므로
            </p>

            <BlockMath
                math={String.raw`
PS+SQ
\qquad\text{와}\qquad
QR+RP
`}
            />

            <p className="leading-8">
                를 각각 대칭이동을 이용하여 구합니다.
            </p>


            {/* PS + SQ */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① <InlineMath math="PS+SQ" />의 최솟값
                </p>

                <p className="leading-8">
                    점 <InlineMath math="P(2,6)" />을{" "}
                    <InlineMath math="y" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="P'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
P'(-2,6)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="S" />가{" "}
                    <InlineMath math="y" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
PS=P'S
`}
                />

                <p className="leading-8">
                    이고,
                </p>

                <BlockMath
                    math={String.raw`
PS+SQ
=
P'S+SQ
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 세 점{" "}
                    <InlineMath math="P',\ S,\ Q" />가
                    한 직선 위에 있을 때 가장 짧으므로
                    최솟값은 선분 <InlineMath math="P'Q" />의 길이입니다.
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
P'Q
&=
\sqrt{(1-(-2))^2+(3-6)^2}\\
&=
\sqrt{3^2+(-3)^2}\\
&=
3\sqrt2
\end{aligned}
`}
                />

            </div>


            {/* QR + RP */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② <InlineMath math="QR+RP" />의 최솟값
                </p>

                <p className="leading-8">
                    점 <InlineMath math="P(2,6)" />을 직선{" "}
                    <InlineMath math="y=x" />에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="P''" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
P''(6,2)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="R" />이 직선{" "}
                    <InlineMath math="y=x" /> 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
RP=RP''
`}
                />

                <p className="leading-8">
                    이고,
                </p>

                <BlockMath
                    math={String.raw`
QR+RP
=
QR+RP''
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 세 점{" "}
                    <InlineMath math="Q,\ R,\ P''" />가
                    한 직선 위에 있을 때 가장 짧으므로
                    최솟값은 선분 <InlineMath math="QP''" />의 길이입니다.
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
QP''
&=
\sqrt{(6-1)^2+(2-3)^2}\\
&=
\sqrt{5^2+(-1)^2}\\
&=
\sqrt{26}
\end{aligned}
`}
                />

            </div>


            <p className="leading-8">
                따라서 사각형 <InlineMath math="PSQR" />의 둘레의 길이의
                최솟값은
            </p>

            <BlockMath
                math={String.raw`
3\sqrt2+\sqrt{26}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{3\sqrt2+\sqrt{26}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    둘레 전체를 한꺼번에 계산하지 않고,
                    꺾이는 점이 놓인 직선을 기준으로
                    두 부분을 각각 대칭이동합니다.
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
PS+SQ
&\rightarrow P'Q\\[2mm]
QR+RP
&\rightarrow QP''
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

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 점{" "}
                <InlineMath math="A(3,1)" />과 직선{" "}
                <InlineMath math="y=x" /> 위의 점{" "}
                <InlineMath math="P" />,{" "}
                <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="Q" />에 대하여
            </p>

            <BlockMath
                math={String.raw`
AP+PQ+QA
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_02.png"
                alt="점 A와 직선 y=x 위의 점 P, x축 위의 점 Q"
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
                선분은 점 <InlineMath math="P" />와{" "}
                <InlineMath math="Q" />에서 두 번 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A" />를
                점 <InlineMath math="P" />가 놓인 직선{" "}
                <InlineMath math="y=x" />와
                점 <InlineMath math="Q" />가 놓인{" "}
                <InlineMath math="x" />축에 대하여 각각 대칭이동합니다.
            </p>


            {/* 대칭점 구하기 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점 A의 대칭점
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(3,1)" />을 직선{" "}
                    <InlineMath math="y=x" />에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(1,3)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    또 점 <InlineMath math="A(3,1)" />을{" "}
                    <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A''" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A''(3,-1)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            <p className="leading-8">
                점 <InlineMath math="P" />는 직선{" "}
                <InlineMath math="y=x" /> 위에 있으므로
            </p>

            <BlockMath
                math={String.raw`
AP=A'P
`}
            />

            <p className="leading-8">
                이고, 점 <InlineMath math="Q" />는{" "}
                <InlineMath math="x" />축 위에 있으므로
            </p>

            <BlockMath
                math={String.raw`
AQ=A''Q
`}
            />

            <p className="leading-8">
                입니다. 따라서
            </p>

            <BlockMath
                math={String.raw`
AP+PQ+QA
=
A'P+PQ+QA''
`}
            />

            <p className="leading-8">
                로 바꿀 수 있습니다.
            </p>


            {/* 하나의 선분 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 선을 하나의 선분으로
                </p>

                <p className="leading-8">
                    네 점{" "}
                    <InlineMath math="A',\ P,\ Q,\ A''" />가
                    한 직선 위에 있을 때 길이가 가장 짧습니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 구하는 최솟값은
                    선분 <InlineMath math="A'A''" />의 길이입니다.
                </p>

            </div>


            <BlockMath
                math={String.raw`
\begin{aligned}
A'A''
&=
\sqrt{(3-1)^2+(-1-3)^2}\\
&=
\sqrt{2^2+(-4)^2}\\
&=
\sqrt{20}\\
&=
2\sqrt5
\end{aligned}
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


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    같은 점 <InlineMath math="A" />에서 출발한 두 선분이라도
                    꺾이는 점이 놓인 직선이 서로 다르면,
                    각각의 직선에 대하여 점{" "}
                    <InlineMath math="A" />를 대칭이동합니다.
                </p>

                <BlockMath
                    math={String.raw`
A
\xrightarrow{\,y=x\,}
A'(1,3),
\qquad
A
\xrightarrow{\,x\text{축}\,}
A''(3,-1)
`}
                />

                <p className="leading-8 text-gray-300">
                    그러면 세 선분의 길이의 합이
                    하나의 선분 <InlineMath math="A'A''" />의 길이로 바뀝니다.
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

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 두 점{" "}
                <InlineMath math="A(4,3)" />과{" "}
                <InlineMath math="B(2,-4)" />에 대하여 서로 다른 두 점{" "}
                <InlineMath math="C,\ D" />가 각각{" "}
                <InlineMath math="y" />축과 직선{" "}
                <InlineMath math="y=x" /> 위에 있을 때
            </p>

            <BlockMath
                math={String.raw`
AD+DC+CB
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_03.png"
                alt="점 A와 B, y축 위의 점 C와 직선 y=x 위의 점 D"
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
                선분은 점 <InlineMath math="D" />와{" "}
                <InlineMath math="C" />에서 두 번 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A" />는
                점 <InlineMath math="D" />가 놓인 직선{" "}
                <InlineMath math="y=x" />에 대하여 대칭이동하고,
                점 <InlineMath math="B" />는
                점 <InlineMath math="C" />가 놓인{" "}
                <InlineMath math="y" />축에 대하여 대칭이동합니다.
            </p>


            {/* 대칭점 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    대칭점 구하기
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(4,3)" />을 직선{" "}
                    <InlineMath math="y=x" />에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(3,4)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="B(2,-4)" />를{" "}
                    <InlineMath math="y" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="B'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
B'(-2,-4)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            <p className="leading-8">
                점 <InlineMath math="D" />는 직선{" "}
                <InlineMath math="y=x" /> 위에 있으므로
            </p>

            <BlockMath
                math={String.raw`
AD=A'D
`}
            />

            <p className="leading-8">
                이고, 점 <InlineMath math="C" />는{" "}
                <InlineMath math="y" />축 위에 있으므로
            </p>

            <BlockMath
                math={String.raw`
CB=CB'
`}
            />

            <p className="leading-8">
                입니다. 따라서
            </p>

            <BlockMath
                math={String.raw`
AD+DC+CB
=
A'D+DC+CB'
`}
            />

            <p className="leading-8">
                로 바꿀 수 있습니다.
            </p>


            {/* 최소가 되는 경우 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 선을 하나의 선분으로
                </p>

                <p className="leading-8">
                    네 점{" "}
                    <InlineMath math="A',\ D,\ C,\ B'" />가
                    한 직선 위에 있을 때 길이가 가장 짧습니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 구하는 최솟값은{" "}
                    선분 <InlineMath math="A'B'" />의 길이입니다.
                </p>

            </div>


            <BlockMath
                math={String.raw`
\begin{aligned}
A'B'
&=
\sqrt{(-2-3)^2+(-4-4)^2}\\
&=
\sqrt{(-5)^2+(-8)^2}\\
&=
\sqrt{25+64}\\
&=
\sqrt{89}
\end{aligned}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{\sqrt{89}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    양 끝점 <InlineMath math="A,\ B" />를
                    각각 가까운 꺾이는 점이 놓인 직선에 대하여
                    대칭이동합니다.
                </p>

                <BlockMath
                    math={String.raw`
A(4,3)
\xrightarrow{\,y=x\,}
A'(3,4)
`}
                />

                <BlockMath
                    math={String.raw`
B(2,-4)
\xrightarrow{\,y\text{축}\,}
B'(-2,-4)
`}
                />

                <p className="leading-8 text-gray-300">
                    그러면{" "}
                    <InlineMath math="AD+DC+CB" />의 최솟값은
                    하나의 선분 <InlineMath math="A'B'" />의 길이가 됩니다.
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
                원{" "}
                <InlineMath math="(x-6)^2+(y+4)^2=4" /> 위의 점{" "}
                <InlineMath math="P" />와{" "}
                <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="Q" />가 있다. 점 <InlineMath math="A(0,-4)" />에 대하여
            </p>

            <BlockMath
                math={String.raw`
AQ+PQ
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_04.png"
                alt="원 위의 점 P와 x축 위의 점 Q를 지나는 꺾인 선분 AQ와 QP"
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
                선분은 <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="Q" />에서 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A(0,-4)" />를{" "}
                <InlineMath math="x" />축에 대하여 대칭이동합니다.
            </p>


            {/* 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점 A를 대칭이동
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(0,-4)" />를{" "}
                    <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(0,4)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="Q" />는{" "}
                    <InlineMath math="x" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
AQ=A'Q
`}
                />

                <p className="leading-8">
                    입니다. 따라서
                </p>

                <BlockMath
                    math={String.raw`
AQ+PQ
=
A'Q+QP
`}
                />

                <p className="leading-8">
                    로 바꿀 수 있습니다.
                </p>

            </div>


            {/* 꺾인 선을 편다 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 선을 하나의 선분으로
                </p>

                <p className="leading-8">
                    점 <InlineMath math="P" />가 정해져 있을 때
                    세 점{" "}
                    <InlineMath math="A',\ Q,\ P" />가
                    한 직선 위에 있으면 길이가 가장 짧습니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 <InlineMath math="AQ+PQ" />의 최솟값은
                    점 <InlineMath math="A'" />에서
                    주어진 원까지의 가장 짧은 거리와 같습니다.
                </p>

            </div>


            {/* 원까지의 최단거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점과 원 사이의 최단거리
                </p>

                <p className="leading-8">
                    원
                </p>

                <BlockMath
                    math={String.raw`
(x-6)^2+(y+4)^2=4
`}
                />

                <p className="leading-8">
                    의 중심을 <InlineMath math="C" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
C(6,-4),
\qquad
r=2
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A'(0,4)" />과
                    원의 중심 <InlineMath math="C(6,-4)" /> 사이의 거리는
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
A'C
&=
\sqrt{(6-0)^2+(-4-4)^2}\\
&=
\sqrt{6^2+(-8)^2}\\
&=
\sqrt{100}\\
&=
10
\end{aligned}
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 점 <InlineMath math="A'" />에서
                    원 위의 점까지의 가장 짧은 거리는
                    중심까지의 거리에서 반지름을 뺀
                </p>

                <BlockMath
                    math={String.raw`
10-2=8
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{8}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 점 <InlineMath math="Q" />가 놓인{" "}
                    <InlineMath math="x" />축에 대하여
                    점 <InlineMath math="A" />를 대칭이동하여
                    꺾인 두 선분을 하나의 선분으로 만듭니다.
                </p>

                <BlockMath
                    math={String.raw`
AQ+QP
\rightarrow
A'P
`}
                />

                <p className="leading-8 text-gray-300">
                    그다음 점 <InlineMath math="P" />가 원 위를 움직이므로
                    점 <InlineMath math="A'" />에서 원까지의
                    최단거리를 구하면 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{대칭이동}
\rightarrow
\text{점과 원 사이의 최단거리}
}
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

    {/* 문제 */}
    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

        <p className="leading-8 text-gray-300">
            좌표평면 위에 두 점{" "}
            <InlineMath math="A(-5,1),\ B(7,4)" />가 있다.{" "}
            <InlineMath math="BP=2" />인 점{" "}
            <InlineMath math="P" />와{" "}
            <InlineMath math="x" />축 위의 점{" "}
            <InlineMath math="Q" />에 대하여
        </p>

        <BlockMath
            math={String.raw`
AQ+QP
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
                선분은 <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="Q" />에서 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A(-5,1)" />을{" "}
                <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                <InlineMath math="A'" />라 하겠습니다.
            </p>


            {/* 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점 A를 대칭이동
                </p>

                <BlockMath
                    math={String.raw`
A'(-5,-1)
`}
                />

                <p className="leading-8">
                    점 <InlineMath math="Q" />는{" "}
                    <InlineMath math="x" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
AQ=A'Q
`}
                />

                <p className="leading-8">
                    입니다. 따라서
                </p>

                <BlockMath
                    math={String.raw`
AQ+QP
=
A'Q+QP
`}
                />

                <p className="leading-8">
                    로 바꿀 수 있습니다.
                </p>

                <p className="leading-8">
                    세 점 <InlineMath math="A',\ Q,\ P" />가
                    한 직선 위에 있을 때 가장 짧으므로
                </p>

                <BlockMath
                    math={String.raw`
\min(AQ+QP)=A'P
`}
                />

                <p className="leading-8">
                    가 됩니다.
                </p>

            </div>


            {/* P의 조건 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점 P가 움직이는 범위
                </p>

                <p className="leading-8">
                    조건 <InlineMath math="BP=2" />이므로
                    점 <InlineMath math="P" />는
                    점 <InlineMath math="B(7,4)" />를 중심으로 하고
                    반지름의 길이가 <InlineMath math="2" />인
                    원 위를 움직입니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 <InlineMath math="A'P" />가 가장 짧아지는 것은
                    점 <InlineMath math="P" />가
                    원 위에서 점 <InlineMath math="A'" />에
                    가장 가까이 있을 때입니다.
                </p>

            </div>


            {/* 거리 계산 */}
            <p className="leading-8">
                먼저 점 <InlineMath math="A'(-5,-1)" />과
                점 <InlineMath math="B(7,4)" /> 사이의 거리를 구하면
            </p>

            <BlockMath
                math={String.raw`
\begin{aligned}
A'B
&=
\sqrt{(7-(-5))^2+(4-(-1))^2}\\
&=
\sqrt{12^2+5^2}\\
&=
\sqrt{169}\\
&=
13
\end{aligned}
`}
            />

            <p className="leading-8">
                입니다.
            </p>

            <p className="leading-8">
                점 <InlineMath math="P" />는
                중심 <InlineMath math="B" />에서 거리{" "}
                <InlineMath math="2" />인 원 위에 있으므로,
                점 <InlineMath math="A'" />에서
                점 <InlineMath math="P" />까지의 가장 짧은 거리는
            </p>

            <BlockMath
                math={String.raw`
13-2=11
`}
            />

            <p className="leading-8">
                입니다.
            </p>


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{11}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 <InlineMath math="x" />축 대칭을 이용하여
                    꺾인 두 선분의 길이의 합을
                    하나의 선분으로 바꿉니다.
                </p>

                <BlockMath
                    math={String.raw`
AQ+QP
\rightarrow
A'P
`}
                />

                <p className="leading-8 text-gray-300">
                    그다음 <InlineMath math="BP=2" />를
                    점 <InlineMath math="B" />를 중심으로 하는
                    반지름 <InlineMath math="2" />인 원으로 생각하여
                    점과 원 사이의 최단거리를 구합니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{대칭이동}
\rightarrow
\text{점과 원 사이의 최단거리}
}
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
                오른쪽 그림과 같이 담으로 둘러싸인
                직사각형 모양의 평평한 구역이 있다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                경비원이 순찰 지점 <InlineMath math="A" />에서 출발하여
                오른쪽 그림과 같이 담의 두 지점을 지나
                순찰 지점 <InlineMath math="B" />까지
                최단거리로 이동할 때, 그 이동거리를 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_06.png"
                alt="직사각형 모양의 구역에서 담의 두 지점을 지나 A에서 B까지 이동하는 경로"
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
                이동 경로는 직사각형의
                왼쪽 변과 아래쪽 변에서 두 번 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A" />를 왼쪽 변에 대하여,
                점 <InlineMath math="B" />를 아래쪽 변에 대하여
                각각 대칭이동합니다.
            </p>


            {/* 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    두 점을 각각 대칭이동
                </p>

                <p className="leading-8">
                    직사각형의 왼쪽 아래 꼭짓점을 원점으로 생각하면
                    가로의 길이가 <InlineMath math="40" />,
                    세로의 길이가 <InlineMath math="50" />이므로
                </p>

                <BlockMath
                    math={String.raw`
A=(20,50),\qquad B=(40,10)
`}
                />

                <p className="leading-8">
                    으로 나타낼 수 있습니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A" />를 왼쪽 변에 대하여
                    대칭이동한 점을 <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'=(-20,50)
`}
                />

                <p className="leading-8">
                    이고, 점 <InlineMath math="B" />를 아래쪽 변에 대하여
                    대칭이동한 점을 <InlineMath math="B'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
B'=(40,-10)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 하나의 선분 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    꺾인 경로를 하나의 선분으로
                </p>

                <p className="leading-8">
                    대칭이동하면 두 번 꺾이는 이동거리의 최솟값은
                    선분 <InlineMath math="A'B'" />의 길이와 같습니다.
                </p>

                <BlockMath
                    math={String.raw`
\text{최단거리}=A'B'
`}
                />

            </div>


            <p className="leading-8">
                두 점 <InlineMath math="A'(-20,50)" />과{" "}
                <InlineMath math="B'(40,-10)" /> 사이의 거리는
            </p>

            <BlockMath
                math={String.raw`
\begin{aligned}
A'B'
&=
\sqrt{(40-(-20))^2+(-10-50)^2}\\
&=
\sqrt{60^2+(-60)^2}\\
&=
\sqrt{7200}\\
&=
60\sqrt2
\end{aligned}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{60\sqrt2\text{ m}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    담을 지나는 두 점의 위치를 직접 구할 필요는 없습니다.
                    꺾이는 점이 놓인 두 변에 대하여
                    양 끝점 <InlineMath math="A,\ B" />를 각각 대칭이동하면
                    됩니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{두 번 꺾이는 경로}
\rightarrow
\text{두 번 대칭이동}
\rightarrow
\text{한 선분의 길이}
}
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
                좌표평면 위에 두 점{" "}
                <InlineMath math="A(-5,3),\ B(3,2)" />가 있다.{" "}
                <InlineMath math="x" />축 위의 두 점{" "}
                <InlineMath math="P,\ Q" />와 직선{" "}
                <InlineMath math="y=1" /> 위의 점{" "}
                <InlineMath math="R" />에 대하여
            </p>

            <BlockMath
                math={String.raw`
AP+PR+RQ+QB
`}
            />

            <p className="leading-8 text-gray-300">
                의 최솟값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_07.png"
                alt="x축 위의 점 P, Q와 직선 y=1 위의 점 R에서 세 번 꺾이는 선분"
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
                선분은 점 <InlineMath math="P" />,{" "}
                <InlineMath math="R" />,{" "}
                <InlineMath math="Q" />에서 세 번 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 한쪽 끝점 <InlineMath math="A" />를
                꺾이는 점이 놓인 직선의 순서대로
                차례로 대칭이동합니다.
            </p>


            {/* 첫 번째 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① x축에 대하여 대칭이동
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(-5,3)" />을{" "}
                    <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(-5,-3)
`}
                />

                <p className="leading-8">
                    점 <InlineMath math="P" />가{" "}
                    <InlineMath math="x" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
AP=A'P
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 두 번째 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 직선 y=1에 대하여 대칭이동
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A'(-5,-3)" />을
                    직선 <InlineMath math="y=1" />에 대하여
                    대칭이동한 점을 <InlineMath math="A''" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A''(-5,5)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="R" />은 직선{" "}
                    <InlineMath math="y=1" /> 위에 있으므로
                    대칭이동을 이용하여 두 번째 꺾임도 펼 수 있습니다.
                </p>

            </div>


            {/* 세 번째 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 다시 x축에 대하여 대칭이동
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A''(-5,5)" />을
                    다시 <InlineMath math="x" />축에 대하여
                    대칭이동한 점을 <InlineMath math="A'''" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'''(-5,-5)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 하나의 선분 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    세 번 꺾인 선을 하나의 선분으로
                </p>

                <p className="leading-8">
                    대칭이동을 차례로 하면
                </p>

                <BlockMath
                    math={String.raw`
AP+PR+RQ+QB
`}
                />

                <p className="leading-8">
                    의 최솟값은
                    마지막 대칭점 <InlineMath math="A'''" />와
                    점 <InlineMath math="B" />를 이은
                    한 선분의 길이가 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\min(AP+PR+RQ+QB)=A'''B
}
`}
                />

            </div>


            {/* 거리 계산 */}
            <p className="leading-8">
                두 점 <InlineMath math="A'''(-5,-5)" />와{" "}
                <InlineMath math="B(3,2)" /> 사이의 거리를 구하면
            </p>

            <BlockMath
                math={String.raw`
\begin{aligned}
A'''B
&=
\sqrt{(3-(-5))^2+(2-(-5))^2}\\
&=
\sqrt{8^2+7^2}\\
&=
\sqrt{64+49}\\
&=
\sqrt{113}
\end{aligned}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{\sqrt{113}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    꺾이는 점이 여러 개일 때에는
                    꺾이는 점이 놓인 직선의 순서대로
                    대칭이동을 반복합니다.
                </p>

                <BlockMath
                    math={String.raw`
A(-5,3)
\xrightarrow{\,x\text{축}\,}
A'(-5,-3)
\xrightarrow{\,y=1\,}
A''(-5,5)
\xrightarrow{\,x\text{축}\,}
A'''(-5,-5)
`}
                />

                <p className="leading-8 text-gray-300">
                    결국 여러 번 꺾인 선분도
                    하나의 선분의 길이로 바꾸어 생각할 수 있습니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{꺾이는 순서대로 대칭이동}
\rightarrow
\text{하나의 선분}
}
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
                좌표평면 위에 점{" "}
                <InlineMath math="A(0,2)" />와 직선{" "}
                <InlineMath math="l:y=-x+4" />가 있다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                직선 <InlineMath math="l" /> 위의 제1사분면 위의 점{" "}
                <InlineMath math="B(a,b)" />와{" "}
                <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="C" />에 대하여
            </p>

            <BlockMath
                math={String.raw`
AC+BC
`}
            />

            <p className="leading-8 text-gray-300">
                의 값이 최소일 때,{" "}
                <InlineMath math="a^2+b^2" />의 값을 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_08.png"
                alt="점 A와 직선 l 위의 점 B, x축 위의 점 C"
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
                선분은 <InlineMath math="x" />축 위의 점{" "}
                <InlineMath math="C" />에서 꺾입니다.
            </p>

            <p className="leading-8">
                따라서 점 <InlineMath math="A(0,2)" />를{" "}
                <InlineMath math="x" />축에 대하여 대칭이동합니다.
            </p>


            {/* 1단계 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 꺾인 두 선분을 하나의 선분으로
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A" />를{" "}
                    <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(0,-2)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="C" />가{" "}
                    <InlineMath math="x" />축 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
AC=A'C
`}
                />

                <p className="leading-8">
                    이고, 따라서
                </p>

                <BlockMath
                    math={String.raw`
AC+BC
=
A'C+CB
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    세 점{" "}
                    <InlineMath math="A',\ C,\ B" />가
                    한 직선 위에 있을 때 길이가 가장 짧으므로
                </p>

                <BlockMath
                    math={String.raw`
\min(AC+BC)=A'B
`}
                />

                <p className="leading-8">
                    가 됩니다.
                </p>

            </div>


            {/* 2단계 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    ② 이제 점 B의 위치를 결정한다
                </p>

                <p className="leading-8">
                    점 <InlineMath math="B" />는 직선{" "}
                    <InlineMath math="l:y=-x+4" /> 위를 움직입니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 <InlineMath math="A'B" />의 길이가
                    가장 짧아지는 것은
                    선분 <InlineMath math="A'B" />가
                    직선 <InlineMath math="l" />에 수직일 때입니다.
                </p>

            </div>


            {/* B의 좌표 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    점 B의 좌표 구하기
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="l:y=-x+4" />의 기울기는{" "}
                    <InlineMath math="-1" />이므로,
                    이에 수직인 직선의 기울기는{" "}
                    <InlineMath math="1" />입니다.
                </p>

                <p className="mt-3 leading-8">
                    점 <InlineMath math="A'(0,-2)" />를 지나고
                    기울기가 <InlineMath math="1" />인 직선의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
y=x-2
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    이 직선과{" "}
                    <InlineMath math="y=-x+4" />의 교점이
                    점 <InlineMath math="B" />이므로
                </p>

                <BlockMath
                    math={String.raw`
x-2=-x+4
`}
                />

                <BlockMath
                    math={String.raw`
2x=6
`}
                />

                <BlockMath
                    math={String.raw`
x=3
`}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
y=-3+4=1
`}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
B(3,1)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            <p className="leading-8">
                따라서{" "}
                <InlineMath math="a=3,\ b=1" />이므로
            </p>

            <BlockMath
                math={String.raw`
a^2+b^2
=
3^2+1^2
=
10
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{10}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    먼저 점 <InlineMath math="C" />가 놓인{" "}
                    <InlineMath math="x" />축에 대하여
                    점 <InlineMath math="A" />를 대칭이동하여
                    꺾인 길이를 하나의 선분으로 바꿉니다.
                </p>

                <BlockMath
                    math={String.raw`
AC+CB
\rightarrow
A'B
`}
                />

                <p className="leading-8 text-gray-300">
                    그다음 점 <InlineMath math="B" />가
                    직선 <InlineMath math="l" /> 위를 움직이므로,
                    점과 직선 사이의 거리가 가장 짧아지는
                    <b> 수선의 발</b>을 찾습니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{대칭이동}
\rightarrow
\text{점과 직선 사이의 최단거리}
}
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

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                좌표평면 위에 세 점{" "}
                <InlineMath math="A(0,1),\ B(0,3),\ C(0,9)" />와
                직선 <InlineMath math="y=x" /> 위의 두 점{" "}
                <InlineMath math="P,\ Q" />가 있다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                <InlineMath math="AP+PB+BQ+QC" />의 값이
                최소가 되도록 하는 두 점{" "}
                <InlineMath math="P,\ Q" />에 대하여
                선분 <InlineMath math="PQ" />의 길이를 구하시오.
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_09.png"
                alt="y축 위의 세 점 A, B, C와 직선 y=x 위의 두 점 P, Q"
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
                주어진 길이의 합을
            </p>

            <BlockMath
                math={String.raw`
AP+PB+BQ+QC
=
(AP+PB)+(BQ+QC)
`}
            />

            <p className="leading-8">
                로 나누어 생각합니다.
            </p>

            <p className="leading-8">
                점 <InlineMath math="P" />는{" "}
                <InlineMath math="AP+PB" />를 가장 작게 하는 점이고,
                점 <InlineMath math="Q" />는{" "}
                <InlineMath math="BQ+QC" />를 가장 작게 하는 점입니다.
            </p>


            {/* P 구하기 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 점 P의 위치
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(0,1)" />을
                    직선 <InlineMath math="y=x" />에 대하여
                    대칭이동한 점을 <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(1,0)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="P" />가
                    직선 <InlineMath math="y=x" /> 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
AP=A'P
`}
                />

                <p className="leading-8">
                    입니다. 따라서
                </p>

                <BlockMath
                    math={String.raw`
AP+PB=A'P+PB
`}
                />

                <p className="leading-8">
                    가 가장 작아지려면 세 점{" "}
                    <InlineMath math="A',\ P,\ B" />가
                    한 직선 위에 있어야 합니다.
                </p>

                <p className="leading-8">
                    두 점 <InlineMath math="A'(1,0)" />과{" "}
                    <InlineMath math="B(0,3)" />을 지나는 직선의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
y=-3x+3
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="P" />는
                    이 직선과 <InlineMath math="y=x" />의 교점이므로
                </p>

                <BlockMath
                    math={String.raw`
x=-3x+3
`}
                />

                <BlockMath
                    math={String.raw`
4x=3
`}
                />

                <BlockMath
                    math={String.raw`
x=y=\frac34
`}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
P\left(\frac34,\frac34\right)
`}
                />

            </div>


            {/* Q 구하기 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 점 Q의 위치
                </p>

                <p className="leading-8">
                    점 <InlineMath math="C(0,9)" />를
                    직선 <InlineMath math="y=x" />에 대하여
                    대칭이동한 점을 <InlineMath math="C'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
C'(9,0)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="Q" />가
                    직선 <InlineMath math="y=x" /> 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
QC=QC'
`}
                />

                <p className="leading-8">
                    입니다. 따라서
                </p>

                <BlockMath
                    math={String.raw`
BQ+QC=BQ+QC'
`}
                />

                <p className="leading-8">
                    가 가장 작아지려면 세 점{" "}
                    <InlineMath math="B,\ Q,\ C'" />가
                    한 직선 위에 있어야 합니다.
                </p>

                <p className="leading-8">
                    두 점 <InlineMath math="B(0,3)" />과{" "}
                    <InlineMath math="C'(9,0)" />을 지나는 직선의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
y=-\frac13x+3
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="Q" />는
                    이 직선과 <InlineMath math="y=x" />의 교점이므로
                </p>

                <BlockMath
                    math={String.raw`
x=-\frac13x+3
`}
                />

                <BlockMath
                    math={String.raw`
\frac43x=3
`}
                />

                <BlockMath
                    math={String.raw`
x=y=\frac94
`}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
Q\left(\frac94,\frac94\right)
`}
                />

            </div>


            {/* PQ */}
            <p className="leading-8">
                이제 두 점
            </p>

            <BlockMath
                math={String.raw`
P\left(\frac34,\frac34\right),
\qquad
Q\left(\frac94,\frac94\right)
`}
            />

            <p className="leading-8">
                사이의 거리를 구하면
            </p>

            <BlockMath
                math={String.raw`
\begin{aligned}
PQ
&=
\sqrt{
\left(\frac94-\frac34\right)^2
+
\left(\frac94-\frac34\right)^2
}\\
&=
\sqrt{
\left(\frac32\right)^2
+
\left(\frac32\right)^2
}\\
&=
\sqrt{\frac92}\\
&=
\frac{3\sqrt2}{2}
\end{aligned}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{\frac{3\sqrt2}{2}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    네 선분을 한꺼번에 처리하지 않고,
                    움직이는 점 <InlineMath math="P,\ Q" />가
                    서로 독립되어 있다는 것을 이용하여
                </p>

                <BlockMath
                    math={String.raw`
(AP+PB)+(BQ+QC)
`}
                />

                <p className="leading-8 text-gray-300">
                    로 나눕니다.
                </p>

                <p className="leading-8 text-gray-300">
                    각각 대칭이동을 이용하여
                    최소가 되는 점 <InlineMath math="P,\ Q" />의
                    위치를 먼저 구한 뒤,
                    마지막에 <InlineMath math="PQ" />의 길이를 구합니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{길이의 합을 분리}
\rightarrow
\text{각각 최소화}
\rightarrow
P,\ Q\text{ 결정}
}
`}
                />

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
                오른쪽 그림과 같이 폭이{" "}
                <InlineMath math="10\text{ m}" />인 직선 도로를 사이에 두고
                두 기업 <InlineMath math="A,\ B" />가 위치하고 있다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                기업 <InlineMath math="A,\ B" />에서 도로의 경계선까지의
                거리는 각각{" "}
                <InlineMath math="10\text{ m},\ 5\text{ m}" />이고,
                두 기업 <InlineMath math="A,\ B" /> 사이의 거리가{" "}
                <InlineMath math="5\sqrt{41}\text{ m}" />이다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                기업 <InlineMath math="A" />에서 기업{" "}
                <InlineMath math="B" />까지의 이동하는 거리가 최소이면서
                도로에 수직이 되도록 도로 위에 횡단보도를 만들 때,
                기업 <InlineMath math="A" />에서 이 횡단보도를 거쳐
                기업 <InlineMath math="B" />로 이동하는 거리의
                최솟값을 구하시오.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-400">
                (단, 고도와 횡단보도의 폭은 무시한다.)
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_010.png"
                alt="폭이 10m인 도로를 사이에 둔 기업 A와 B의 최단 이동 경로"
                className="mx-auto w-full max-w-md rounded-lg"
            />

        </div>

    </div>


    <details className="mt-5 rounded-xl border border-white/15 p-5">

        <summary className="cursor-pointer font-semibold text-yellow-300">
            풀이 보기
        </summary>

        <div className="mt-5 space-y-5 text-gray-300">

            {/* 1. 수평 방향 거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 도로와 평행한 방향의 거리
                </p>

                <p className="leading-8">
                    기업 <InlineMath math="A" />에서
                    기업 <InlineMath math="B" />까지의
                    도로에 수직인 방향의 전체 거리는
                </p>

                <BlockMath
                    math={String.raw`
10+10+5=25
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    두 기업 사이의 도로와 평행한 방향의 거리를{" "}
                    <InlineMath math="d" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
d^2+25^2=(5\sqrt{41})^2
`}
                />

                <BlockMath
                    math={String.raw`
\begin{aligned}
d^2+625&=1025\\
d^2&=400\\
d&=20
\end{aligned}
`}
                />

                <p className="leading-8">
                    따라서 두 기업의 도로와 평행한 방향의 거리는{" "}
                    <InlineMath math="20\text{ m}" />입니다.
                </p>

            </div>


            {/* 2. 고정된 횡단보도 길이 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    ② 횡단보도의 길이는 고정
                </p>

                <p className="leading-8">
                    횡단보도는 도로에 수직이고
                    도로의 폭이 <InlineMath math="10\text{ m}" />이므로,
                    횡단보도를 어디에 만들더라도
                    도로를 건너는 거리는 항상
                </p>

                <BlockMath
                    math={String.raw`
10\text{ m}
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 전체 이동거리에서
                    이 <InlineMath math="10\text{ m}" />는
                    고정된 길이로 따로 생각할 수 있습니다.
                </p>

            </div>


            {/* 3. 도로 밖의 두 경로 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ③ 도로 밖에서 이동하는 거리
                </p>

                <p className="leading-8">
                    도로를 제외하면 기업 <InlineMath math="A" />에서
                    도로까지의 거리는 <InlineMath math="10\text{ m}" />,
                    기업 <InlineMath math="B" />에서 도로까지의 거리는{" "}
                    <InlineMath math="5\text{ m}" />입니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 두 경로를 대칭이동하여 하나의 선분으로 펴면,
                    수직 방향의 길이는
                </p>

                <BlockMath
                    math={String.raw`
10+5=15
`}
                />

                <p className="leading-8">
                    이고, 도로와 평행한 방향의 길이는 앞에서 구한
                </p>

                <BlockMath
                    math={String.raw`
20
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 4. 대칭이동 후 최단거리 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 대칭이동하여 하나의 선분으로
                </p>

                <p className="leading-8">
                    도로 밖의 두 이동 경로를 대칭이동하여 펴면
                    가로의 길이가 <InlineMath math="20" />,
                    세로의 길이가 <InlineMath math="15" />인
                    직각삼각형의 빗변이 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
\text{도로 밖의 최단거리}
&=
\sqrt{20^2+15^2}\\
&=
\sqrt{400+225}\\
&=
\sqrt{625}\\
&=
25
\end{aligned}
`}
                />

                <p className="leading-8">
                    따라서 도로 밖에서 이동하는 거리의 최솟값은{" "}
                    <InlineMath math="25\text{ m}" />입니다.
                </p>

            </div>


            {/* 전체 이동거리 */}
            <p className="leading-8">
                여기에 횡단보도를 건너는 고정된 거리{" "}
                <InlineMath math="10\text{ m}" />를 더하면
            </p>

            <BlockMath
                math={String.raw`
25+10=35
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{35\text{ m}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    횡단보도는 도로에 수직이므로
                    도로를 건너는 <InlineMath math="10\text{ m}" />는
                    위치와 관계없이 일정합니다.
                </p>

                <p className="mt-3 leading-8 text-gray-300">
                    따라서 먼저 이 고정된 길이를 제외하고,
                    도로 밖의 두 경로만 대칭이동하여
                    하나의 선분으로 만듭니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\begin{array}{c}
\text{도로 밖의 수직 거리 }10+5=15\\
\text{도로와 평행한 거리 }20
\end{array}
}
`}
                />

                <BlockMath
                    math={String.raw`
\sqrt{20^2+15^2}+10
=
25+10
=
35
`}
                />

            </div>

        </div>

    </details>

</div>

{/* 예제 11 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 11
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이{" "}
                <InlineMath math="AB=2\sqrt2,\ BC=3,\ CA=\sqrt5" />인
                삼각형 <InlineMath math="ABC" />에 대하여
                세 선분 <InlineMath math="AB,\ BC,\ CA" /> 위의 점을
                각각 <InlineMath math="D,\ E,\ F" />라 하자.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                삼각형 <InlineMath math="DEF" />의 둘레의 길이의
                최솟값이
            </p>

            <BlockMath
                math={String.raw`
\frac{q}{p}\sqrt{10}
`}
            />

            <p className="leading-8 text-gray-300">
                일 때, <InlineMath math="p+q" />의 값을 구하시오.
                (단, <InlineMath math="p,\ q" />는 서로소인 자연수이다.)
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_011.png"
                alt="삼각형 ABC의 세 변 위의 점 D, E, F를 이은 삼각형"
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
                삼각형의 세 변 위에 한 점씩 잡아 만든 삼각형의
                둘레가 최소가 되려면,
                세 점은 각 꼭짓점에서 맞은편 변에 내린
                수선의 발이 됩니다.
            </p>


            {/* 좌표 설정 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 삼각형을 좌표평면에 놓기
                </p>

                <p className="leading-8">
                    계산을 쉽게 하기 위하여
                </p>

                <BlockMath
                    math={String.raw`
B=(0,0),\qquad C=(3,0)
`}
                />

                <p className="leading-8">
                    으로 놓겠습니다.
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A=(x,y)" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
x^2+y^2=8
`}
                />

                <BlockMath
                    math={String.raw`
(x-3)^2+y^2=5
`}
                />

                <p className="leading-8">
                    두 식을 빼면
                </p>

                <BlockMath
                    math={String.raw`
x=2
`}
                />

                <p className="leading-8">
                    이고,
                </p>

                <BlockMath
                    math={String.raw`
y=2
`}
                />

                <p className="leading-8">
                    로 잡을 수 있으므로
                </p>

                <BlockMath
                    math={String.raw`
A=(2,2)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 수선의 발 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 세 수선의 발 구하기
                </p>

                <p className="leading-8">
                    점 <InlineMath math="E" />는
                    점 <InlineMath math="A" />에서
                    선분 <InlineMath math="BC" />에 내린 수선의 발이므로
                </p>

                <BlockMath
                    math={String.raw`
E=(2,0)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    직선 <InlineMath math="AB" />의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
y=x
`}
                />

                <p className="leading-8">
                    이므로 점 <InlineMath math="C(3,0)" />에서
                    이 직선에 내린 수선의 발은
                </p>

                <BlockMath
                    math={String.raw`
D\left(\frac32,\frac32\right)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    또 직선 <InlineMath math="CA" />에
                    점 <InlineMath math="B" />에서 내린 수선의 발은
                </p>

                <BlockMath
                    math={String.raw`
F\left(\frac{12}{5},\frac65\right)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 둘레 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    ③ 삼각형 DEF의 둘레
                </p>

                <p className="leading-8">
                    세 변의 길이를 구하면
                </p>

                <BlockMath
                    math={String.raw`
DE=\frac{\sqrt{10}}2
`}
                />

                <BlockMath
                    math={String.raw`
EF=\frac{2\sqrt{10}}5
`}
                />

                <BlockMath
                    math={String.raw`
FD=\frac{3\sqrt{10}}{10}
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    따라서 둘레의 최솟값은
                </p>

                <BlockMath
                    math={String.raw`
\begin{aligned}
DE+EF+FD
&=
\frac{\sqrt{10}}2
+\frac{2\sqrt{10}}5
+\frac{3\sqrt{10}}{10}\\
&=
\frac{5+4+3}{10}\sqrt{10}\\
&=
\frac65\sqrt{10}
\end{aligned}
`}
                />

            </div>


            <p className="leading-8">
                문제에서 최솟값이
            </p>

            <BlockMath
                math={String.raw`
\frac{q}{p}\sqrt{10}
`}
            />

            <p className="leading-8">
                이므로
            </p>

            <BlockMath
                math={String.raw`
p=5,\qquad q=6
`}
            />

            <p className="leading-8">
                입니다.
            </p>


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{p+q=11}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    예각삼각형의 세 변 위에 한 점씩 잡아
                    만든 삼각형의 둘레가 최소가 되는 경우에는,
                    세 점이 각 꼭짓점에서 맞은편 변에 내린
                    수선의 발이 됩니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
\text{최소 둘레}
\rightarrow
\text{세 수선의 발}
}
`}
                />

                <p className="leading-8 text-gray-300">
                    이 문제에서는 최소가 되는 위치를 다시 찾을 필요 없이,
                    그 세 점의 좌표를 구한 뒤 둘레를 계산하면 됩니다.
                </p>

            </div>

        </div>

    </details>

</div>

{/* 예제 12 */}
<div className="mt-8 rounded-xl bg-black/40 p-5">

    <h3 className="mb-4 text-xl font-bold text-white">
        예제 12
    </h3>

    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* 문제 */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

            <p className="leading-8 text-gray-300">
                오른쪽 그림과 같이 두 직선 도로{" "}
                <InlineMath math="l" />과 <InlineMath math="m" />이
                이루는 각의 크기는 <InlineMath math="45^\circ" />이고,
                정류소 <InlineMath math="A" />는 두 도로가 만나는 점{" "}
                <InlineMath math="O" />로부터 동쪽으로{" "}
                <InlineMath math="4\text{ km}" />, 북쪽으로{" "}
                <InlineMath math="2\text{ km}" /> 떨어진 지점에 있다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                정류소 <InlineMath math="A" />를 출발하여
                도로 <InlineMath math="l" /> 위의 정류소{" "}
                <InlineMath math="B" />와 도로{" "}
                <InlineMath math="m" /> 위의 정류소{" "}
                <InlineMath math="C" />를 차례로 지나
                정류소 <InlineMath math="A" />로 돌아오도록 도로를 만들려고 한다.
            </p>

            <p className="mt-3 leading-8 text-gray-300">
                만드는 도로의 길이가 최소가 되도록
                정류소 <InlineMath math="B,\ C" />를 정할 때,
                두 정류소 <InlineMath math="B,\ C" /> 사이의 거리를 구하시오.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-400">
                (단, 도로의 폭은 무시하며 모든 지점과 도로는 같은 평면 위에 있다.)
            </p>

        </div>

        {/* 그림 */}
        <div className="rounded-xl border border-white/10 bg-white p-4">

            <img
                src="/images/commonMath2/1.33_012.png"
                alt="45도로 만나는 두 도로 l, m과 정류소 A, B, C"
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
                정류소 <InlineMath math="A" />에서 출발하여{" "}
                <InlineMath math="B,\ C" />를 지나 다시{" "}
                <InlineMath math="A" />로 돌아오므로
                만들어지는 도로의 전체 길이는
            </p>

            <BlockMath
                math={String.raw`
AB+BC+CA
`}
            />

            <p className="leading-8">
                입니다.
            </p>

            <p className="leading-8">
                점 <InlineMath math="B" />와{" "}
                <InlineMath math="C" />에서 두 번 꺾이므로,
                점 <InlineMath math="A" />를 두 도로에 대하여
                각각 대칭이동합니다.
            </p>


            {/* 좌표 설정 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ① 좌표를 정한다
                </p>

                <p className="leading-8">
                    두 도로의 교점 <InlineMath math="O" />를 원점으로 하고,
                    도로 <InlineMath math="l" />을{" "}
                    <InlineMath math="x" />축으로 놓겠습니다.
                </p>

                <p className="mt-3 leading-8">
                    두 도로가 이루는 각이{" "}
                    <InlineMath math="45^\circ" />이므로
                    도로 <InlineMath math="m" />의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
m:y=x
`}
                />

                <p className="leading-8">
                    로 둘 수 있습니다.
                </p>

                <p className="leading-8">
                    정류소 <InlineMath math="A" />는
                    점 <InlineMath math="O" />에서 동쪽으로{" "}
                    <InlineMath math="4" />, 북쪽으로{" "}
                    <InlineMath math="2" /> 떨어져 있으므로
                </p>

                <BlockMath
                    math={String.raw`
A(4,2)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* 대칭이동 */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ② 점 A를 두 도로에 대하여 대칭이동
                </p>

                <p className="leading-8">
                    점 <InlineMath math="A(4,2)" />를
                    도로 <InlineMath math="l" />, 즉{" "}
                    <InlineMath math="x" />축에 대하여 대칭이동한 점을{" "}
                    <InlineMath math="A'" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A'(4,-2)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    또 점 <InlineMath math="A(4,2)" />를
                    직선 <InlineMath math="m:y=x" />에 대하여
                    대칭이동한 점을 <InlineMath math="A''" />라 하면
                </p>

                <BlockMath
                    math={String.raw`
A''(2,4)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

                <p className="leading-8">
                    대칭이동에 의하여
                </p>

                <BlockMath
                    math={String.raw`
AB=A'B,
\qquad
AC=A''C
`}
                />

                <p className="leading-8">
                    이므로
                </p>

                <BlockMath
                    math={String.raw`
AB+BC+CA
=
A'B+BC+CA''
`}
                />

                <p className="leading-8">
                    로 바꿀 수 있습니다.
                </p>

            </div>


            {/* 최소 조건 */}
            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    ③ 꺾인 선을 하나의 선분으로
                </p>

                <p className="leading-8">
                    네 점{" "}
                    <InlineMath math="A',\ B,\ C,\ A''" />가
                    한 직선 위에 있을 때
                </p>

                <BlockMath
                    math={String.raw`
A'B+BC+CA''
`}
                />

                <p className="leading-8">
                    의 길이가 가장 짧아집니다.
                </p>

                <p className="mt-3 leading-8">
                    따라서 최소가 되는 점{" "}
                    <InlineMath math="B,\ C" />는
                    직선 <InlineMath math="A'A''" />와
                    두 도로 <InlineMath math="l,\ m" />의 교점입니다.
                </p>

            </div>


            {/* 직선 A'A'' */}
            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                <p className="mb-4 font-bold text-white">
                    ④ 점 B, C의 좌표
                </p>

                <p className="leading-8">
                    두 점{" "}
                    <InlineMath math="A'(4,-2)" />와{" "}
                    <InlineMath math="A''(2,4)" />를 지나는 직선의 기울기는
                </p>

                <BlockMath
                    math={String.raw`
\frac{4-(-2)}{2-4}
=
-3
`}
                />

                <p className="leading-8">
                    이므로 직선 <InlineMath math="A'A''" />의 방정식은
                </p>

                <BlockMath
                    math={String.raw`
y=-3x+10
`}
                />

                <p className="leading-8">
                    입니다.
                </p>


                <p className="mt-5 leading-8">
                    점 <InlineMath math="B" />는
                    <InlineMath math="x" />축 위에 있으므로{" "}
                    <InlineMath math="y=0" />을 대입하면
                </p>

                <BlockMath
                    math={String.raw`
0=-3x+10
`}
                />

                <BlockMath
                    math={String.raw`
B\left(\frac{10}{3},0\right)
`}
                />


                <p className="mt-5 leading-8">
                    점 <InlineMath math="C" />는 직선{" "}
                    <InlineMath math="y=x" /> 위에 있으므로
                </p>

                <BlockMath
                    math={String.raw`
x=-3x+10
`}
                />

                <BlockMath
                    math={String.raw`
x=\frac52
`}
                />

                <p className="leading-8">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
C\left(\frac52,\frac52\right)
`}
                />

                <p className="leading-8">
                    입니다.
                </p>

            </div>


            {/* BC */}
            <p className="leading-8">
                이제 두 점
            </p>

            <BlockMath
                math={String.raw`
B\left(\frac{10}{3},0\right),
\qquad
C\left(\frac52,\frac52\right)
`}
            />

            <p className="leading-8">
                사이의 거리를 구하면
            </p>

            <BlockMath
                math={String.raw`
\begin{aligned}
BC
&=
\sqrt{
\left(\frac52-\frac{10}{3}\right)^2
+
\left(\frac52\right)^2
}\\
&=
\sqrt{
\left(-\frac56\right)^2
+
\left(\frac52\right)^2
}\\
&=
\sqrt{
\frac{25}{36}
+
\frac{225}{36}
}\\
&=
\sqrt{\frac{250}{36}}\\
&=
\frac{5\sqrt{10}}6
\end{aligned}
`}
            />


            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                <p className="font-bold text-green-300">
                    따라서
                </p>

                <BlockMath
                    math={String.raw`
\boxed{\frac{5\sqrt{10}}6\text{ km}}
`}
                />

            </div>


            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                <p className="mb-3 font-bold text-blue-300">
                    풀이의 핵심
                </p>

                <p className="leading-8 text-gray-300">
                    도로 <InlineMath math="l,\ m" /> 위에서
                    각각 한 번씩 꺾이므로,
                    같은 출발점 <InlineMath math="A" />를
                    두 도로에 대하여 각각 대칭이동합니다.
                </p>

                <BlockMath
                    math={String.raw`
A
\xrightarrow{\,l\,}
A',
\qquad
A
\xrightarrow{\,m\,}
A''
`}
                />

                <p className="leading-8 text-gray-300">
                    최소일 때 대칭점과 두 정류소가
                    하나의 직선 위에 놓입니다.
                </p>

                <BlockMath
                    math={String.raw`
\boxed{
A',\ B,\ C,\ A''
\text{가 한 직선 위}
}
`}
                />

                <p className="leading-8 text-gray-300">
                    문제에서 요구한 것은 전체 도로의 최소 길이가 아니라
                    그때의 <InlineMath math="BC" />이므로,
                    최소 조건으로 <InlineMath math="B,\ C" />의
                    위치를 먼저 결정한 뒤 <InlineMath math="BC" />를 구합니다.
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
                • 선분 길이의 합의 최솟값은
                각 선분의 길이를 따로 계산하기보다
                대칭이동을 이용하여 구한다.
            </p>

            <p className="leading-8">
                • 일반적으로{" "}
                <b>꺾이는 점이 놓인 직선에 대하여 대칭이동</b>한다.
            </p>

            <BlockMath
                math={String.raw`
\boxed{
\text{꺾인 선분}
\rightarrow
\text{대칭이동}
\rightarrow
\text{하나의 선분}
}
`}
            />

            <p className="leading-8">
                • 한 번 꺾이면 한 번 대칭이동하고,
                두 번 꺾이면 각각의 직선에 대하여 대칭이동한다.
            </p>

            <p className="leading-8">
                • 부채꼴에서는 호 위의 점의 위치가 달라져도
                두 대칭점 사이의 길이가 일정하므로
                최소 둘레도 일정하다.
            </p>

            <p className="leading-8">
                • 삼각형의 세 변 위의 점을 이은 삼각형의
                둘레를 최소로 할 때에는
                한 점을 먼저 고정하여 나머지 두 점에 대한
                최솟값을 구한 뒤, 고정한 점의 위치를 결정한다.
            </p>

        </div>

    </div>

</section>
        </>
    )
};