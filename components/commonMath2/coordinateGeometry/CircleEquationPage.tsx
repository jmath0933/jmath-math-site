"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CircleEquationPage() {
    return (
        <>
            {/* 1.16 원의 방정식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                {/* 제목 */}
                <h2 className="mb-2 text-3xl font-bold text-white">
                    1.16 원의 방정식
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                    원의 문제는 식 자체보다
                    <strong className="text-yellow-300">
                        {" "}중심과 반지름
                    </strong>
                    을 먼저 생각하는 것이 중요합니다.
                </p>
                <div className="mt-8 space-y-6">

                    {/* 1. 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            1. 원
                        </h3>

                        <p className="leading-8 text-gray-300">
                            한 점에서 같은 거리에 있는 점들의 자취를
                            <strong className="text-sky-300"> 원</strong>이라고 합니다.
                        </p>

                        <div className="mt-5 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    중심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    일정한 거리의 기준이 되는 한 점
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    반지름
                                </p>

                                <p className="leading-8 text-gray-300">
                                    중심에서 원 위의 점까지의 일정한 거리
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                핵심
                            </p>

                            <p className="mt-3 text-lg font-semibold text-white">
                                원 문제는 중심과 반지름으로 생각합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                중심과 반지름을 알면 원의 위치와 크기를 모두 알 수 있습니다.
                            </p>

                        </div>

                    </div>


                    {/* 2. 원의 방정식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            2. 원의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            중심이 <InlineMath math="(a,b)" />이고
                            반지름이 <InlineMath math="r" />인 원을 생각합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            원 위의 한 점을 <InlineMath math="(x,y)" />라고 하면
                            중심 <InlineMath math="(a,b)" />에서 이 점까지의 거리는
                            항상 <InlineMath math="r" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                \sqrt{(x-a)^2+(y-b)^2}=r
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            양변을 제곱하면
                        </p>

                        <BlockMath
                            math={String.raw`
                (x-a)^2+(y-b)^2=r^2
            `}
                        />

                        <div className="mt-5 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                            <p className="mb-4 text-center font-bold text-sky-300">
                                중심이 <InlineMath math="(a,b)" />, 반지름이{" "}
                                <InlineMath math="r" />인 원의 방정식
                            </p>

                            <BlockMath
                                math={String.raw`
                    \boxed{
                    (x-a)^2+(y-b)^2=r^2
                    }
                `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                원의 방정식 만들기
                            </p>

                            <BlockMath
                                math={String.raw`
                    (x-\text{중심의 }x\text{좌표})^2
                    +
                    (y-\text{중심의 }y\text{좌표})^2
                    =
                    \text{반지름}^2
                `}
                            />

                        </div>

                    </div>


                    {/* 3. 표준형 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            3. 중심과 반지름으로 원의 방정식 만들기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            중심이 <InlineMath math="(2,-3)" />이고
                            반지름이 <InlineMath math="5" />인 원의 방정식을 구해 봅시다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            중심의 <InlineMath math="x" />좌표가 <InlineMath math="2" />이므로
                        </p>

                        <BlockMath math="(x-2)^2" />

                        <p className="leading-8 text-gray-300">
                            중심의 <InlineMath math="y" />좌표가{" "}
                            <InlineMath math="-3" />이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                (y-(-3))^2=(y+3)^2
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            반지름이 <InlineMath math="5" />이므로
                        </p>

                        <BlockMath math="r^2=5^2=25" />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                            <BlockMath
                                math={String.raw`
                    \boxed{
                    (x-2)^2+(y+3)^2=25
                    }
                `}
                            />

                        </div>

                    </div>


                    {/* 4. 일반형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            4. 원의 방정식의 일반형
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원의 방정식을 전개하면 다음과 같은 꼴로 나타낼 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                x^2+y^2+Ax+By+C=0
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일반형에서도 가장 먼저
                            <strong className="text-yellow-300">
                                {" "}중심과 반지름
                            </strong>
                            을 찾습니다.
                        </p>

                        {/* 중심 */}
                        <div className="mt-6 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-sky-300">
                                ① 중심
                            </p>

                            <p className="leading-8 text-gray-300">
                                <strong className="text-white">
                                    일차계수를 반으로 나누고 부호를 바꿉니다.
                                </strong>
                            </p>

                            <BlockMath
                                math={String.raw`
                    \boxed{
                    \text{중심}
                    =
                    \left(
                    -\frac A2,
                    -\frac B2
                    \right)
                    }
                `}
                            />

                        </div>

                        {/* r^2 */}
                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-yellow-300">
                                ② 반지름
                            </p>

                            <p className="leading-8 text-gray-300">
                                중심을 구한 다음
                                <strong className="text-white">
                                    {" "}반드시 <InlineMath math="r^2=" />부터 씁니다.
                                </strong>
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그리고
                                <strong className="text-white">
                                    {" "}방금 구한 중심좌표를 각각 제곱해서 더한 후
                                    상수항을 뺍니다.
                                </strong>
                            </p>

                            <BlockMath
                                math={String.raw`
                    r^2
                    =
                    \left(-\frac A2\right)^2
                    +
                    \left(-\frac B2\right)^2
                    -
                    C
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    =
                    \frac{A^2}{4}
                    +
                    \frac{B^2}{4}
                    -
                    C
                `}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                            <p className="mb-3 font-bold text-rose-300">
                                주의
                            </p>

                            <p className="leading-8 text-gray-300">
                                계산해서 구한 값은 반지름이 아니라
                                <strong className="text-white"> 반지름의 제곱</strong>입니다.
                            </p>

                            <p className="mt-3 text-lg font-semibold text-white">
                                중심 <InlineMath math="(\square,\square)" />을 쓴 다음에는
                                반드시 <InlineMath math="r^2=" />을 먼저 씁니다.
                            </p>

                        </div>

                    </div>


                    {/* 5. 일반형 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            5. 일반형에서 중심과 반지름 구하기
                        </h3>

                        <BlockMath
                            math={String.raw`
                x^2+y^2-4x+6y-3=0
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일차계수 <InlineMath math="-4,\ 6" />을
                            각각 반으로 나누고 부호를 바꾸면
                        </p>

                        <BlockMath
                            math={String.raw`
                \text{중심 }(2,-3)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이제 반드시 <InlineMath math="r^2=" />부터 쓰고,
                            방금 구한 중심좌표를 각각 제곱해서 더한 후
                            상수항을 뺍니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                r^2
                =
                2^2+(-3)^2-(-3)
            `}
                        />

                        <BlockMath
                            math={String.raw`
                r^2=4+9+3=16
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
                r=4
            `}
                        />

                        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                            <BlockMath
                                math={String.raw`
                    \boxed{
                    \text{중심 }(2,-3),
                    \qquad
                    \text{반지름 }4
                    }
                `}
                            />

                        </div>

                    </div>


                    {/* 6. 표준형으로 조립 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            6. 표준형이 필요하면 조립한다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            일반형이 주어졌다고 해서
                            <strong className="text-yellow-300">
                                {" "}반드시 완전제곱을 하여 표준형으로 바꿀 필요는 없습니다.
                            </strong>
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            원은 중심과 반지름을 알면 필요한 정보를 모두 알 수 있습니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            표준형이 필요한 경우에는
                            방금 구한 중심과 <InlineMath math="r^2" />을 이용하여
                            바로 조립하면 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                \text{중심 }(2,-3),
                \qquad
                r^2=16
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                \boxed{
                (x-2)^2+(y+3)^2=16
                }
            `}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                계산 순서
                            </p>

                            <p className="text-center text-lg font-semibold text-white">
                                일차계수
                            </p>

                            <div className="my-2 text-center text-2xl text-gray-400">↓</div>

                            <p className="text-center text-lg font-semibold text-white">
                                반으로 나누고 부호 바꾸기
                            </p>

                            <div className="my-2 text-center text-2xl text-gray-400">↓</div>

                            <p className="text-center text-lg font-semibold text-sky-300">
                                중심
                            </p>

                            <div className="my-2 text-center text-2xl text-gray-400">↓</div>

                            <p className="text-center text-lg font-semibold text-yellow-300">
                                r² =
                            </p>

                            <div className="my-2 text-center text-2xl text-gray-400">↓</div>

                            <p className="text-center text-lg font-semibold text-white">
                                중심좌표 각각 제곱해서 더하기 - 상수항
                            </p>

                            <div className="my-2 text-center text-2xl text-gray-400">↓</div>

                            <p className="text-center text-lg font-semibold text-emerald-300">
                                필요하면 표준형 조립
                            </p>

                        </div>

                    </div>


                    {/* 7. 세 점을 지나는 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            7. 세 점을 지나는 원
                        </h3>

                        <p className="leading-8 text-gray-300">
                            서로 일직선 위에 있지 않은 세 점을 지나는 원의 방정식을
                            구할 때는
                            <strong className="text-yellow-300">
                                {" "}일반형을 사용하는 것이 수월합니다.
                            </strong>
                        </p>

                        <BlockMath
                            math={String.raw`
                x^2+y^2+Ax+By+C=0
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            으로 놓고 세 점의 좌표를 각각 대입하면{" "}
                            <InlineMath math="A,\ B,\ C" />에 대한
                            세 개의 방정식을 얻을 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                어떤 형태를 사용할까?
                            </p>

                            <div className="mt-4 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    • 중심과 반지름을 알고 있다
                                    → <strong className="text-white">표준형</strong>
                                </p>

                                <p className="leading-8">
                                    • 세 점을 지나도록 원을 구한다
                                    → <strong className="text-white">일반형</strong>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 8. 원이 되기 위한 조건 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            8. 원이 되기 위한 조건
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원은 중심에서
                            <strong className="text-yellow-300"> 양수인 거리</strong>만큼
                            떨어진 점들의 자취이므로
                        </p>

                        <BlockMath
                            math={String.raw`
                \boxed{r>0}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이어야 합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            일반형에서는 먼저 <InlineMath math="r^2" />을 구하므로
                            원이 되기 위한 조건은
                        </p>

                        <BlockMath
                            math={String.raw`
                \boxed{r^2>0}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 판단하면 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예
                            </p>

                            <BlockMath
                                math={String.raw`
                    x^2+y^2-4x+6y+k=0
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                중심은
                            </p>

                            <BlockMath math="(2,-3)" />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
                    r^2
                    =
                    2^2+(-3)^2-k
                    =
                    13-k
                `}
                            />

                            <p className="leading-8 text-gray-300">
                                원이 되려면
                            </p>

                            <BlockMath
                                math={String.raw`
                    13-k>0
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    k<13
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
                                두 점 <InlineMath math="A(1,6),\ B(7,-3)" />를 이은 선분{" "}
                                <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="1:2" />로 내분하는 점을 중심으로 하고
                                점 <InlineMath math="A" />를 지나는 원의 방정식이
                                점 <InlineMath math="(1,a)" />를 지날 때,
                                모든 실수 <InlineMath math="a" />의 값의 합을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    선분 <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="1:2" />로 내분하는 점은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{2\cdot1+1\cdot7}{3},
\frac{2\cdot6+1\cdot(-3)}{3}
\right)
=(3,3)
`}
                                />

                                <p className="leading-8">
                                    이므로 원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(3,3)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        반지름의 제곱
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="A(1,6)" />를 지나므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2
=
(3-1)^2+(3-6)^2
=4+9
=13
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)^2+(y-3)^2=13
`}
                                />

                                <p className="leading-8">
                                    점 <InlineMath math="(1,a)" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(1-3)^2+(a-3)^2=13
`}
                                />

                                <BlockMath
                                    math={String.raw`
4+(a-3)^2=13
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a-3)^2=9
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=6,\ 0
`}
                                />

                                <p className="leading-8">
                                    따라서 모든 실수 <InlineMath math="a" />의 값의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
6+0=6
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
                                        먼저 내분점을 이용하여 원의 중심을 구합니다.
                                        다음으로 중심과 원 위의 한 점을 이용하여{" "}
                                        <InlineMath math="r^2" />를 구하고,
                                        원의 방정식에 점을 대입하여 해결합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{내분점}
\rightarrow
\text{중심}
\rightarrow
r^2
\rightarrow
\text{원의 방정식}
\rightarrow
\text{점 대입}
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
                                두 점 <InlineMath math="(4,-3),\ (2,1)" />을 지름의 양 끝점으로 하는
                                원이 <InlineMath math="x" />축과 만나는 두 점 사이의 거리를
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원의 중심은 지름의 중점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{4+2}{2},
\frac{-3+1}{2}
\right)
=(3,-1)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
(4-3)^2+(-3+1)^2
=1+4
=5
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)^2+(y+1)^2=5
`}
                                />

                                <p className="leading-8">
                                    원과 <InlineMath math="x" />축의 교점을 구하기 위해{" "}
                                    <InlineMath math="y=0" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)^2+1=5
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x-3)^2=4
`}
                                />

                                <BlockMath
                                    math={String.raw`
x=1,\ 5
`}
                                />

                                <p className="leading-8">
                                    따라서 교점은
                                </p>

                                <BlockMath
                                    math={String.raw`
(1,0),\ (5,0)
`}
                                />

                                <p className="leading-8">
                                    이므로 두 점 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
5-1=4
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
                                        지름의 양 끝점이 주어졌으므로 먼저 중점을 이용하여 중심을
                                        구합니다. 중심과 원 위의 한 점으로 <InlineMath math="r^2" />
                                        를 구한 뒤 원의 방정식을 만들고,{" "}
                                        <InlineMath math="y=0" />을 대입하여{" "}
                                        <InlineMath math="x" />축과의 교점을 구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{지름}
\rightarrow
\text{중심}
\rightarrow
r^2
\rightarrow
\text{원의 방정식}
\rightarrow
y=0
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
                                세 점 <InlineMath math="A(2,3),\ B(-1,-1),\ C(8,-5)" />를 꼭짓점으로 하는
                                삼각형 <InlineMath math="ABC" />에서
                                각 <InlineMath math="A" />의 이등분선이
                                변 <InlineMath math="BC" />와 만나는 점을
                                <InlineMath math="D" />라 할 때,
                                두 점 <InlineMath math="A" />와{" "}
                                <InlineMath math="D" />를 지름의 양 끝점으로 하는
                                원의 넓이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    각의 이등분선 정리에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{BD}{DC}
=
\frac{AB}{AC}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    먼저{" "}
                                    <InlineMath math="AB,\ AC" />의 길이를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
AB
=
\sqrt{(-1-2)^2+(-1-3)^2}
=
5
`}
                                />

                                <BlockMath
                                    math={String.raw`
AC
=
\sqrt{(8-2)^2+(-5-3)^2}
=
10
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
BD:DC
=
1:2
`}
                                />

                                <p className="leading-8">
                                    이므로 점 <InlineMath math="D" />는
                                    선분 <InlineMath math="BC" />를{" "}
                                    <InlineMath math="1:2" />로 내분하는 점입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
D
=
\left(
\frac{2(-1)+8}{3},
\frac{2(-1)+(-5)}{3}
\right)
=
(2,-\frac73)
`}
                                />

                                <p className="leading-8">
                                    두 점 <InlineMath math="A,\ D" />가
                                    지름의 양 끝점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
AD^2
=
(2-2)^2
+
\left(
3+\frac73
\right)^2
=
\left(
\frac{16}{3}
\right)^2
=
\frac{256}{9}
`}
                                />

                                <p className="leading-8">
                                    반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
\frac{AD^2}{4}
=
\frac{64}{9}
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
\frac{64\pi}{9}
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{\frac{64\pi}{9}}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        먼저 각의 이등분선 정리로{" "}
                                        <InlineMath math="BD:DC" />를 구합니다.
                                        그 다음 내분점을 이용하여
                                        점 <InlineMath math="D" />의 좌표를 구하고,
                                        지름의 길이로부터 반지름을 구하여
                                        원의 넓이를 계산합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{이등분선 정리}
\rightarrow
\text{내분점}
\rightarrow
AD
\rightarrow
r^2
\rightarrow
\pi r^2
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
                                중심이 직선 <InlineMath math="y=x+2" /> 위에 있고
                                두 점 <InlineMath math="(-3,2),\ (1,6)" />을 지나는 원에 대하여
                                다음 보기 중 옳은 것만을 있는 대로 고르시오.
                            </p>

                            <div className="mt-4 rounded-lg border border-cyan-500/40 bg-cyan-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    ㄱ. 중심이 직선 <InlineMath math="y=5x" /> 위에 있다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄴ. 원의 둘레의 길이는
                                    <InlineMath math="5\sqrt2\pi" />이다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄷ. 원의 방정식은{" "}
                                    <InlineMath math="x^2+y^2-x-5y-6=0" />이다.
                                </p>

                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-5">

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ① ㄱ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ② ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ③ ㄱ, ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ④ ㄱ, ㄷ
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
                                    원의 중심은 두 점을 잇는 선분의 수직이등분선 위에 있습니다.
                                </p>

                                <p className="leading-8">
                                    두 점의 중점은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{-3+1}{2},
\frac{2+6}{2}
\right)
=(-1,4)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 점을 잇는 직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{6-2}{1-(-3)}
=
1
`}
                                />

                                <p className="leading-8">
                                    이므로 수직이등분선의 기울기는{" "}
                                    <InlineMath math="-1" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 수직이등분선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
y-4=-(x+1)
`}
                                />

                                <BlockMath
                                    math={String.raw`
y=-x+3
`}
                                />

                                <p className="leading-8">
                                    중심은{" "}
                                    <InlineMath math="y=x+2" />와{" "}
                                    <InlineMath math="y=-x+3" />의 교점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x+2=-x+3
`}
                                />

                                <BlockMath
                                    math={String.raw`
(x,y)
=
\left(
\frac12,\frac52
\right)
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄱ 판단
                                    </p>

                                    <BlockMath
                                        math={String.raw`
5x
=
5\cdot\frac12
=
\frac52
=
y
`}
                                    />

                                    <p className="leading-8">
                                        따라서 중심은{" "}
                                        <InlineMath math="y=5x" /> 위에 있으므로
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄴ 판단
                                    </p>

                                    <p className="leading-8">
                                        반지름의 제곱은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2
=
\left(
\frac12+3
\right)^2
+
\left(
\frac52-2
\right)^2
=
\left(
\frac72
\right)^2
+
\left(
\frac12
\right)^2
=\frac{25}{2}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r=\frac{5\sqrt2}{2}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 원의 둘레는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\pi r
=
2\pi\cdot\frac{5\sqrt2}{2}
=
5\sqrt2\pi
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄷ 판단
                                    </p>

                                    <p className="leading-8">
                                        중심과 반지름의 제곱을 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\left(x-\frac12\right)^2
+
\left(y-\frac52\right)^2
=
\frac{25}{2}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x^2+y^2-x-5y-6=0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ ㄱ,\ ㄴ, \ ㄷ}}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원의 중심은 두 점을 잇는 선분의 수직이등분선 위에 있습니다.
                                        따라서 수직이등분선과 조건으로 주어진 직선의 교점을 먼저
                                        중심으로 구한 뒤, 반지름과 원의 방정식을 차례대로 구하면
                                        됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{수직이등분선}
\rightarrow
\text{중심}
\rightarrow
r
\rightarrow
\text{원의 방정식}
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
                                좌표평면 위의 두 점{" "}
                                <InlineMath math="A(-6,2),\ B(2,a)" />
                                에 대하여 선분{" "}
                                <InlineMath math="\overline{AB}" />
                                의 수직이등분선이<br />
                                원
                                <InlineMath math="(x-3)^2+(y-3)^2=16" />
                                의 넓이를 이등분할 때,{" "}
                                양수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원의 넓이를 이등분하는 직선은 반드시 원의 중심을 지납니다.
                                </p>

                                <p className="leading-8">
                                    따라서 원의 중심{" "}
                                    <InlineMath math="(3,3)" />
                                    은 선분{" "}
                                    <InlineMath math="\overline{AB}" />
                                    의 수직이등분선 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
PA=PB
`}
                                />

                                <p className="leading-8">
                                    를 만족합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(3+6)^2+(3-2)^2
=
(3-2)^2+(3-a)^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
81+1
=
1+(3-a)^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
(3-a)^2=81
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=12,\ -6
`}
                                />

                                <p className="leading-8">
                                    양수인{" "}
                                    <InlineMath math="a" />
                                    는
                                </p>

                                <BlockMath
                                    math={String.raw`
a=12
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
                                        원의 넓이를 이등분하는 직선은 항상 원의 중심을 지납니다.
                                        따라서 수직이등분선 위에 원의 중심이 있으므로
                                        중심에서 두 끝점까지의 거리가 같다는 성질{" "}
                                        <InlineMath math="PA=PB" />
                                        를 이용하면 계산이 가장 간단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{원의 중심}
\rightarrow
\text{수직이등분선}
\rightarrow
PA=PB
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
                                중심이 두 점 <InlineMath math="A(-1,1),\ B(2,4)" />에 대하여
                                선분 <InlineMath math="\overline{AB}" />를{" "}
                                <InlineMath math="1:2" />로 내분하는 점을 지나고
                                직선 <InlineMath math="AB" />에 수직인 직선의 방정식 위에 있다.
                                이때 두 점 <InlineMath math="(0,6),\ (2,2)" />를 지나는
                                원의 넓이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 선분 <InlineMath math="\overline{AB}" />를{" "}
                                    <InlineMath math="1:2" />로 내분하는 점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{2(-1)+1\cdot2}{3},
\frac{2\cdot1+1\cdot4}{3}
\right)
=
(0,2)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="AB" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{4-1}{2-(-1)}
=
1
`}
                                />

                                <p className="leading-8">
                                    이므로 이에 수직인 직선의 기울기는{" "}
                                    <InlineMath math="-1" />입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 원의 중심은 직선
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-x+2
`}
                                />

                                <p className="leading-8">
                                    위에 있습니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원의 중심 구하기
                                    </p>

                                    <p className="leading-8">
                                        원의 중심을 <InlineMath math="P" />라 하면,
                                        원이 두 점 <InlineMath math="(0,6),\ (2,2)" />를 지나므로
                                        중심 <InlineMath math="P" />는 두 점에서 같은 거리에 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 중심은 두 점{" "}
                                        <InlineMath math="(0,6),\ (2,2)" />를 잇는 선분의
                                        수직이등분선 위에 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        두 점의 중점은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\left(
\frac{0+2}{2},
\frac{6+2}{2}
\right)
=
(1,4)
`}
                                    />

                                    <p className="leading-8">
                                        이고, 두 점을 잇는 직선의 기울기는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{2-6}{2-0}
=
-2
`}
                                    />

                                    <p className="leading-8">
                                        이므로 수직이등분선의 기울기는{" "}
                                        <InlineMath math="\dfrac12" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y-4
=
\frac12(x-1)
`}
                                    />

                                    <p className="leading-8">
                                        이 직선과{" "}
                                        <InlineMath math="y=-x+2" />를 연립하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-x+2
=
\frac12(x-1)+4
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x=-1,\qquad y=3
`}
                                    />

                                    <p className="leading-8">
                                        따라서 원의 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-1,3)
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    점 <InlineMath math="(0,6)" />을 지나므로
                                    반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
(0+1)^2+(6-3)^2
=
1+9
=
10
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
10\pi
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{10\pi}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        문제에서 주어진 조건으로 원의 중심이 지나는 직선을 먼저 구합니다.
                                        또한 두 점을 지나는 원의 중심은 그 두 점을 잇는 선분의
                                        수직이등분선 위에 있으므로, 두 직선의 교점이 원의 중심이 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{중심이 지나는 직선}
\rightarrow
\text{수직이등분선}
\rightarrow
\text{중심}
\rightarrow
r^2
\rightarrow
\pi r^2
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                원{" "}
                                <InlineMath math="x^2+y^2-2ax+6y+a^2-27=0" />
                                에 대하여 다음 보기 중 옳은 것만을 있는 대로 고르시오.
                                (단,{" "}
                                <InlineMath math="a" />
                                는 상수이다.)
                            </p>

                            <div className="mt-4 rounded-lg border border-cyan-500/40 bg-cyan-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    ㄱ. 원의 넓이는 <InlineMath math="36\pi" />이다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄴ.{" "}
                                    <InlineMath math="a=4" />
                                    일 때 점{" "}
                                    <InlineMath math="(4,3)" />
                                    을 지난다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄷ.{" "}
                                    <InlineMath math="a=-3" />
                                    일 때,
                                    직선{" "}
                                    <InlineMath math="y=2x+3" />
                                    에 의하여 원의 넓이가 이등분된다.
                                </p>

                            </div>

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
                                    일반형에서 중심과 반지름을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{중심}
=
(a,-3)
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2
=
a^2+9-(a^2-27)
=
36
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄱ 판단
                                    </p>

                                    <p className="leading-8">
                                        반지름의 제곱이{" "}
                                        <InlineMath math="36" />
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\pi r^2
=
36\pi
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄴ 판단
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a=4" />
                                        이면 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(4,-3)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        점{" "}
                                        <InlineMath math="(4,3)" />
                                        까지의 거리의 제곱은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(4-4)^2+(3+3)^2
=
36
`}
                                    />

                                    <p className="leading-8">
                                        즉,{" "}
                                        <InlineMath math="r^2=36" />
                                        과 같으므로
                                        점{" "}
                                        <InlineMath math="(4,3)" />
                                        은 원 위의 점입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄷ 판단
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a=-3" />
                                        이면 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-3,-3)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        직선{" "}
                                        <InlineMath math="y=2x+3" />
                                        을
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2x-y+3=0
`}
                                    />

                                    <p className="leading-8">
                                        으로 고치면
                                        중심에서 직선까지의 거리는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
d
=
\frac{|2(-3)-(-3)+3|}
{\sqrt5}
=
0
`}
                                    />

                                    <p className="leading-8">
                                        즉 중심이 직선 위에 있으므로
                                        직선은 원의 넓이를 이등분합니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                        <strong className="text-green-400">참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ ㄱ,\ ㄴ,\ ㄷ}}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        일반형에서는 먼저 중심과{" "}
                                        <InlineMath math="r^2" />
                                        를 구하는 것이 가장 중요합니다.
                                        이후 각 보기를 중심과 반지름의 성질만으로 판단하면
                                        대부분의 계산을 빠르게 끝낼 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{일반형}
\rightarrow
\text{중심}
\rightarrow
r^2
\rightarrow
\text{보기 판단}
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
                                직선 <InlineMath math="y=mx-1" />이 두 원{" "}
                                <InlineMath math="x^2+y^2+ky=0" />,{" "}
                                <InlineMath math="x^2-6x+y^2-4y=0" />의
                                넓이를 이등분할 때, 상수 <InlineMath math="m,\ k" />에 대하여{" "}
                                <InlineMath math="m+k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원의 넓이를 이등분하는 직선은 반드시
                                    <strong className="text-yellow-300"> 원의 중심</strong>을 지납니다.
                                </p>

                                {/* 첫 번째 원 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 첫 번째 원
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+y^2+ky=0
`}
                                    />

                                    <p className="leading-8">
                                        일차계수를 반으로 나누고 부호를 바꾸면 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\left(0,-\frac{k}{2}\right)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        이 중심이 직선 <InlineMath math="y=mx-1" /> 위에 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-\frac{k}{2}
=
m\cdot0-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
-\frac{k}{2}=-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
k=2
`}
                                    />

                                </div>

                                {/* 두 번째 원 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 두 번째 원
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-6x+y^2-4y=0
`}
                                    />

                                    <p className="leading-8">
                                        일차계수를 반으로 나누고 부호를 바꾸면 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(3,2)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        이 중심도 직선 <InlineMath math="y=mx-1" /> 위에 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2=3m-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
3m=3
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
m=1
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
m+k
=
1+2
=
3
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{3}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원의 넓이를 이등분하는 직선은 원의 중심을 지납니다.
                                        따라서 두 원의 중심을 각각 구한 뒤,
                                        두 중심이 모두 직선{" "}
                                        <InlineMath math="y=mx-1" /> 위에 있다는 조건을
                                        이용하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{원의 일반형}
\rightarrow
\text{중심}
\rightarrow
\text{이등분선에 중심 대입}
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
                                세 점{" "}
                                <InlineMath math="(-3,2),\ (0,-2),\ (1,0)" />
                                을 지나는 원에 대한 다음 보기의 설명 중
                                옳은 것을 모두 고르시오.
                            </p>

                            <div className="mt-4 rounded-lg border border-cyan-500/40 bg-cyan-500/5 p-4">

                                <p className="leading-8 text-gray-300">
                                    ㄱ. <InlineMath math="x" />축에 대하여 대칭이다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄴ. <InlineMath math="y" />축과 만나지 않는다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄷ. 직선 <InlineMath math="y=2x+3" />은 원을 이등분한다.
                                </p>

                            </div>

                            <div className="mt-5 grid gap-3 sm:grid-cols-5">

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ① ㄱ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ② ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ③ ㄱ, ㄴ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ④ ㄱ, ㄷ
                                </div>

                                <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-center text-gray-300">
                                    ⑤ ㄴ, ㄷ
                                </div>

                            </div>


                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원의 일반형을
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2+Ax+By+C=0
`}
                                />

                                <p className="leading-8">
                                    라 두고 세 점을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{cases}
13-3A+2B+C=0\\
4-2B+C=0\\
1+A+C=0
\end{cases}
`}
                                />

                                <BlockMath
                                    math={String.raw`
A=3,\qquad
B=0,\qquad
C=-4
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2+3x-4=0
`}
                                />

                                <p className="leading-8">
                                    중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(-\frac32,0\right)
`}
                                />

                                <p className="leading-8">
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
\left(-\frac32\right)^2+0^2-(-4)
=
\frac{25}{4}
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄱ 판단
                                    </p>

                                    <p className="leading-8">
                                        중심의 <InlineMath math="y" />좌표가
                                        <InlineMath math="0" />이므로
                                        원은 <InlineMath math="x" />축에 대하여 대칭입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                        <strong className="text-green-400"> 참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄴ 판단
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="y" />축과의 교점을 알아보기 위해
                                        <InlineMath math="x=0" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y^2-4=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
y=\pm2
`}
                                    />

                                    <p className="leading-8">
                                        이므로 원은 <InlineMath math="y" />축과 두 점에서 만납니다.
                                        따라서
                                        <strong className="text-red-400"> 거짓</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄷ 판단
                                    </p>

                                    <p className="leading-8">
                                        원의 중심
                                        <InlineMath math="\left(-\dfrac32,0\right)" />을
                                        직선 <InlineMath math="y=2x+3" />에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0
=
2\left(-\frac32\right)+3
=
0
`}
                                    />

                                    <p className="leading-8">
                                        이므로 직선은 원의 중심을 지납니다.
                                        따라서 원의 넓이를 이등분하므로
                                        <strong className="text-green-400"> 참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{④ ㄱ,\ ㄷ}}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        세 점을 지나는 원은 일반형을 두고 계수를 구하는 것이 가장
                                        빠릅니다. 원의 방정식을 구한 후에는 중심과{" "}
                                        <InlineMath math="r^2" />만 알면
                                        대칭 여부, 축과의 교점, 원을 이등분하는 직선 여부를
                                        모두 쉽게 판단할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{일반형}
\rightarrow
\text{세 점 대입}
\rightarrow
\text{중심}
\rightarrow
\text{보기 판단}
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                방정식{" "}
                                <InlineMath math="x^2+\dfrac{1}{10}k(k+3)y^2-6x+2ky-2k=0" />이
                                나타내는 도형이 원이 되기 위한 상수 <InlineMath math="k" />는
                                2개일 때, <InlineMath math="k" />의 값에 따른 두 원의 중심 사이의
                                거리를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원의 방정식에서는{" "}
                                    <InlineMath math="x^2" />과 <InlineMath math="y^2" />의
                                    계수가 같아야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x^2" />의 계수가 <InlineMath math="1" />이므로{" "}
                                    <InlineMath math="y^2" />의 계수도 <InlineMath math="1" />이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{1}{10}k(k+3)=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
k(k+3)=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
k^2+3k-10=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(k-2)(k+5)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=2,\ -5
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        두 원의 중심
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="k=2,\ -5" />에서는 원의 방정식이
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+y^2-6x+2ky-2k=0
`}
                                    />

                                    <p className="leading-8">
                                        의 꼴이 됩니다.
                                    </p>

                                    <p className="leading-8">
                                        일차계수를 반으로 나누고 부호를 바꾸면 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(3,-k)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 <InlineMath math="k=2" />일 때 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(3,-2)
`}
                                    />

                                    <p className="leading-8">
                                        이고, <InlineMath math="k=-5" />일 때 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(3,5)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    두 중심의 <InlineMath math="x" />좌표가 같으므로
                                    중심 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
5-(-2)=7
`}
                                />

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

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        방정식이 원을 나타내려면{" "}
                                        <InlineMath math="x^2" />과 <InlineMath math="y^2" />의
                                        계수가 같아야 합니다. 먼저 이 조건으로{" "}
                                        <InlineMath math="k" />를 구한 뒤,
                                        각각의 경우에 중심만 구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{x², y²의 계수 같게}
\rightarrow
k
\rightarrow
\text{중심}
\rightarrow
\text{두 중심 사이의 거리}
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
                                    그림과 같이 원의 중심 <InlineMath math="C(a,b)" />가
                                    제1사분면 위에 있고, 반지름의 길이가 <InlineMath math="r" />이며
                                    원점 <InlineMath math="O" />를 지나는 원이 있다.
                                    원과 <InlineMath math="x" />축, <InlineMath math="y" />축이
                                    만나는 점 중 <InlineMath math="O" />가 아닌 점을 각각{" "}
                                    <InlineMath math="A,\ B" />라 하자.
                                    네 점 <InlineMath math="O,\ A,\ B,\ C" />가 다음 조건을 만족시킬 때,{" "}
                                    <InlineMath math="a+b+r^2" />의 값을 구하시오.
                                </p>

                                <div className="mt-4 rounded-lg border border-cyan-500/40 bg-cyan-500/5 p-4">

                                    <p className="leading-8 text-gray-300">
                                        (가) <InlineMath math="\overline{OB}-\overline{OA}=6" />
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        (나) 두 점 <InlineMath math="O,\ C" />를 지나는 직선의
                                        방정식은 <InlineMath math="y=4x" />이다.
                                    </p>

                                </div>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.16_11.png"
                                    alt="원점 O를 지나고 중심 C가 직선 y=4x 위에 있는 원"
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
                                    중심이 <InlineMath math="C(a,b)" />이고 원점{" "}
                                    <InlineMath math="O(0,0)" />를 지나므로
                                    반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2=a^2+b^2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-a)^2+(y-b)^2=a^2+b^2
`}
                                />

                                <p className="leading-8">
                                    이고, 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2-2ax-2by=0
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        점 <InlineMath math="A,\ B" />의 위치
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x" />축과의 교점을 구하기 위해{" "}
                                        <InlineMath math="y=0" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-2ax=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
x(x-2a)=0
`}
                                    />

                                    <p className="leading-8">
                                        원점이 아닌 교점은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A(2a,0)
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\overline{OA}=2a
`}
                                    />

                                    <p className="mt-4 leading-8">
                                        같은 방법으로 <InlineMath math="x=0" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y(y-2b)=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
B(0,2b)
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\overline{OB}=2b
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    조건 (가)에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
2b-2a=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
b-a=3
`}
                                />

                                <p className="leading-8">
                                    한편 조건 (나)에서 중심 <InlineMath math="C(a,b)" />가
                                    직선 <InlineMath math="y=4x" /> 위에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
b=4a
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 식을 연립하면
                                </p>

                                <BlockMath
                                    math={String.raw`
4a-a=3
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=1,\qquad b=4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
a^2+b^2
=
1^2+4^2
=
17
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b+r^2
=
1+4+17
=
22
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{22}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        중심이 <InlineMath math="C(a,b)" />이고 원점을 지나는 원에서는{" "}
                                        <InlineMath math="r^2=a^2+b^2" />입니다.
                                        이 원이 좌표축과 다시 만나는 점은 각각{" "}
                                        <InlineMath math="A(2a,0)" />,{" "}
                                        <InlineMath math="B(0,2b)" />가 되므로{" "}
                                        <InlineMath math="\overline{OA}=2a" />,{" "}
                                        <InlineMath math="\overline{OB}=2b" />로 바로 연결할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
O\text{를 지나는 원}
\rightarrow
r^2=a^2+b^2
\rightarrow
A(2a,0),\ B(0,2b)
\rightarrow
\text{조건 적용}
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                다음 보기의 설명 중 옳은 것을 모두 고르시오.
                            </p>

                            <div className="mt-4 rounded-lg border border-cyan-500/40 bg-cyan-500/5 p-4">

                                <div className="flex items-start gap-3">
                                    <span className="w-6 shrink-0 text-gray-300">ㄱ.</span>
                                    <p className="leading-8 text-gray-300">
                                        직선 <InlineMath math="y=2x+a" />가
                                        원 <InlineMath math="x^2+y^2-2x+4y-4=0" />의
                                        넓이를 이등분할 때, 상수 <InlineMath math="a" />의 값은{" "}
                                        <InlineMath math="-4" />이다.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-6 shrink-0 text-gray-300">ㄴ.</span>
                                    <p className="leading-8 text-gray-300">
                                        중심이 직선 <InlineMath math="y=x-2" /> 위에 있는 원이{" "}
                                        <InlineMath math="y" />축에 접하고 점{" "}
                                        <InlineMath math="(3,-2)" />를 지날 때,
                                        이 원의 반지름의 길이는 <InlineMath math="3" />이다.
                                    </p>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="w-6 shrink-0 text-gray-300">ㄷ.</span>
                                    <p className="leading-8 text-gray-300">
                                        원{" "}
                                        <InlineMath math="x^2+y^2+2ax-4ay+8a^2+6a-9=0" />의
                                        넓이가 최대가 되도록 하는 이 원의 중심의 좌표는{" "}
                                        <InlineMath math="(1,-2)" />이다.
                                        (단, <InlineMath math="a" />는 실수이다.)
                                    </p>
                                </div>

                            </div>

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

                                {/* ㄱ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄱ 판단
                                    </p>

                                    <p className="leading-8">
                                        원{" "}
                                        <InlineMath math="x^2+y^2-2x+4y-4=0" />의 중심은
                                        일차계수를 반으로 나누고 부호를 바꾸어
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(1,-2)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        원의 넓이를 이등분하는 직선은 원의 중심을 지나므로
                                        중심 <InlineMath math="(1,-2)" />를{" "}
                                        <InlineMath math="y=2x+a" />에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-2=2+a
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
a=-4
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                        <strong className="text-green-400"> 참</strong>입니다.
                                    </p>

                                </div>

                                {/* ㄴ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄴ 판단
                                    </p>

                                    <p className="leading-8">
                                        원의 중심이 직선 <InlineMath math="y=x-2" /> 위에 있으므로
                                        중심을
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(t,t-2)
`}
                                    />

                                    <p className="leading-8">
                                        라 하겠습니다.
                                    </p>

                                    <p className="leading-8">
                                        이 원이 <InlineMath math="y" />축에 접하므로
                                        중심에서 <InlineMath math="y" />축까지의 거리가 반지름입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2=t^2
`}
                                    />

                                    <p className="leading-8">
                                        또한 점 <InlineMath math="(3,-2)" />를 지나므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2
=
(3-t)^2+\{-2-(t-2)\}^2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2
=
(3-t)^2+t^2
`}
                                    />

                                    <p className="leading-8">
                                        두 식을 같게 놓으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
t^2=(3-t)^2+t^2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(3-t)^2=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
t=3
`}
                                    />

                                    <p className="leading-8">
                                        따라서 반지름은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r=3
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                        <strong className="text-green-400"> 참</strong>입니다.
                                    </p>

                                </div>

                                {/* ㄷ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ㄷ 판단
                                    </p>

                                    <p className="leading-8">
                                        원{" "}
                                        <InlineMath math="x^2+y^2+2ax-4ay+8a^2+6a-9=0" />의
                                        중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-a,2a)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        반드시 <InlineMath math="r^2=" />을 쓰고
                                        방금 구한 중심좌표를 각각 제곱해서 더한 후
                                        상수항을 빼면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2
=
(-a)^2+(2a)^2-(8a^2+6a-9)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2
=
-3a^2-6a+9
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2
=
12-3(a+1)^2
`}
                                    />

                                    <p className="leading-8">
                                        원의 넓이는 <InlineMath math="\pi r^2" />이므로{" "}
                                        <InlineMath math="r^2" />이 최대일 때 넓이도 최대입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=-1
`}
                                    />

                                    <p className="leading-8">
                                        일 때 최대이고, 이때 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-(-1),2(-1))
=
(1,-2)
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                        <strong className="text-green-400"> 참</strong>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{⑤ ㄱ,\ ㄴ,\ ㄷ}}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원 문제에서는 먼저 중심과 반지름을 생각합니다.
                                        원을 이등분하는 직선은 중심을 지나고,
                                        좌표축에 접하는 원은 중심에서 좌표축까지의 거리가 반지름이며,
                                        원의 넓이의 최대는 <InlineMath math="r^2" />의 최대를
                                        구하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{원}
\rightarrow
\text{중심과 }r^2
\rightarrow
\text{조건에 맞게 활용}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 13 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 13
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                세 직선{" "}
                                <InlineMath math="x-y-1=0,\ x+3y-9=0,\ 2x-y+3=0" />
                                으로 만들어지는 삼각형의 외접원의 중심의 좌표를{" "}
                                <InlineMath math="P(a,b)" />, 반지름의 길이를{" "}
                                <InlineMath math="r" />이라 할 때,{" "}
                                <InlineMath math="a+b+r^2" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 세 직선의 교점을 구합니다.
                                </p>

                                <BlockMath math={String.raw`
\begin{aligned}
x-y-1&=0\\
x+3y-9&=0
\end{aligned}
`} />

                                <BlockMath math={String.raw`
A(3,2)
`} />

                                <BlockMath math={String.raw`
\begin{aligned}
x+3y-9&=0\\
2x-y+3&=0
\end{aligned}
`} />

                                <BlockMath math={String.raw`
B(0,3)
`} />

                                <BlockMath math={String.raw`
\begin{aligned}
2x-y+3&=0\\
x-y-1&=0
\end{aligned}
`} />

                                <BlockMath math={String.raw`
C(-4,-5)
`} />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        외접원의 중심
                                    </p>

                                    <p className="leading-8">
                                        선분 <InlineMath math="AB" />의 수직이등분선은
                                    </p>

                                    <BlockMath math={String.raw`
A(3,2),\ B(0,3)
`} />

                                    <p className="leading-8">
                                        중점은
                                    </p>

                                    <BlockMath math={String.raw`
\left(\frac32,\frac52\right)
`} />

                                    <p className="leading-8">
                                        기울기는
                                    </p>

                                    <BlockMath math={String.raw`
\frac{3-2}{0-3}
=-\frac13
`} />

                                    <p className="leading-8">
                                        이므로 수직이등분선의 기울기는{" "}
                                        <InlineMath math="3" />입니다.
                                    </p>

                                    <BlockMath math={String.raw`
y-\frac52
=
3\left(x-\frac32\right)
`} />

                                    <BlockMath math={String.raw`
y=3x-2
`} />

                                    <p className="leading-8">
                                        선분 <InlineMath math="BC" />의 수직이등분선은
                                    </p>

                                    <BlockMath math={String.raw`
B(0,3),\ C(-4,-5)
`} />

                                    <p className="leading-8">
                                        중점은
                                    </p>

                                    <BlockMath math={String.raw`
(-2,-1)
`} />

                                    <p className="leading-8">
                                        기울기는
                                    </p>

                                    <BlockMath math={String.raw`
\frac{-5-3}{-4}
=2
`} />

                                    <p className="leading-8">
                                        이므로 수직이등분선의 기울기는{" "}
                                        <InlineMath math="-\dfrac12" />입니다.
                                    </p>

                                    <BlockMath math={String.raw`
y+1
=
-\frac12(x+2)
`} />

                                    <BlockMath math={String.raw`
y=-\frac12x-2
`} />

                                    <p className="leading-8">
                                        두 직선을 연립하면
                                    </p>

                                    <BlockMath math={String.raw`
3x-2
=
-\frac12x-2
`} />

                                    <BlockMath math={String.raw`
x=0,\qquad y=-2
`} />

                                    <p className="leading-8">
                                        따라서 외접원의 중심은
                                    </p>

                                    <BlockMath math={String.raw`
P(0,-2)
`} />

                                </div>

                                <p className="leading-8">
                                    반지름은 중심에서 한 꼭짓점까지의 거리입니다.
                                </p>

                                <BlockMath math={String.raw`
r^2
=
(3-0)^2+(2+2)^2
=9+16=25
`} />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`
a+b+r^2
=
0+(-2)+25
=
23
`} />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath math={String.raw`
\boxed{23}
`} />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        삼각형의 외접원의 중심은 세 변의
                                        <strong>수직이등분선의 교점</strong>입니다.
                                        중심을 구한 뒤에는 한 꼭짓점까지의 거리의 제곱을
                                        이용하여 <InlineMath math="r^2" />을 구하면 됩니다.
                                    </p>

                                    <BlockMath math={String.raw`
\text{교점 3개}
\rightarrow
\text{수직이등분선}
\rightarrow
\text{외심}
\rightarrow
r^2
`} />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-5">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    원의 가장 중요한 정보
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{중심과 반지름}
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    원 문제는 항상 중심과 반지름을 먼저 생각합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    표준형
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (x-a)^2+(y-b)^2=r^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    중심은 <InlineMath math="(a,b)" />,
                                    반지름은 <InlineMath math="r" />입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    일반형
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^2+y^2+Ax+By+C=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    ① 일차계수를 반으로 나누고 부호를 바꾸어
                                    <strong className="text-sky-300"> 중심</strong>을 구합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    ② 반드시 <InlineMath math="r^2=" />을 쓰고,
                                    <strong className="text-yellow-300">
                                        {" "}방금 구한 중심좌표를 각각 제곱해서 더한 후
                                        상수항을 뺍니다.
                                    </strong>
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    ③ 표준형이 필요한 경우에만 중심과
                                    <InlineMath math="r^2" />으로 조립합니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    기억할 것
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    일반형을 무조건 완전제곱할 필요는 없습니다.
                                    <strong className="text-white">
                                        {" "}중심과 반지름을 알면 원에 대한 필요한 정보를
                                        모두 알 수 있습니다.
                                    </strong>
                                </p>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 1.17 아폴로니우스의 원과 외분점 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">




                <h2 className="text-3xl font-bold text-white">
                    1.17 아폴로니우스의 원과 외분점
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                    두 점으로부터의 거리의 비가 일정한 점의 자취를 알아보고,
                    이를 이용하기 위해 <strong className="text-yellow-300">외분점</strong>을
                    함께 알아봅니다.
                </p>

                <div className="mt-8 space-y-6">


                    {/* 1. 내분점과 외분점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            1. 내분점과 외분점
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.17_1.png"
                                    alt="선분 AB의 내분점과 외분점"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                                    <p className="mb-3 font-bold text-sky-300">
                                        내분점
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        선분의 <strong className="text-white">내부</strong>에서
                                        주어진 비로 선분을 나누는 점입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                    <p className="mb-3 font-bold text-orange-300">
                                        외분점
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        선분의 <strong className="text-white">연장선</strong> 위에서
                                        두 끝점까지의 거리의 비가 주어진 비가 되도록 하는 점입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        위치를 찾는 방법
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        내분점과 외분점은 모두
                                        <strong className="text-white">
                                            {" "}비율이 작은 쪽의 점에 더 가깝습니다.
                                        </strong>
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="AB" />를 <InlineMath math="3:1" />로
                                    내분하는 점 <InlineMath math="P" />
                                </p>

                                <BlockMath math="AP:PB=3:1" />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="AB" />를 <InlineMath math="1:3" />로
                                    내분하는 점 <InlineMath math="Q" />
                                </p>

                                <BlockMath math="AQ:QB=1:3" />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="AB" />를 <InlineMath math="3:1" />로
                                    외분하는 점 <InlineMath math="R" />
                                </p>

                                <BlockMath math="AR:RB=3:1" />

                                <p className="leading-8 text-gray-300">
                                    이것은 <InlineMath math="B" />가 선분{" "}
                                    <InlineMath math="AR" />을 <InlineMath math="2:1" />로
                                    내분하는 것과 같습니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="AB" />를 <InlineMath math="1:3" />로
                                    외분하는 점 <InlineMath math="S" />
                                </p>

                                <BlockMath math="SA:AB=1:2" />

                                <p className="leading-8 text-gray-300">
                                    이것은 <InlineMath math="A" />가 선분{" "}
                                    <InlineMath math="SB" />을 <InlineMath math="1:2" />로
                                    내분하는 것과 같습니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 2. 외분점을 내분으로 생각 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            2. 외분점을 내분점으로 생각하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            외분점은 새로운 공식으로 외우기보다
                            <strong className="text-yellow-300">
                                {" "}이미 알고 있는 내분점으로 바꾸어 생각
                            </strong>
                            하면 쉽게 구할 수 있습니다.
                        </p>

                        {/* m > n */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-xl font-bold text-white">
                                ① <InlineMath math="m>n" />인 경우
                            </p>

                            <p className="leading-8">
                                <InlineMath math="AB" />를 <InlineMath math="m:n" />으로
                                외분하는 점을 <InlineMath math="R" />라 하면{" "}
                                <InlineMath math="B" />는 선분 <InlineMath math="AR" />을{" "}
                                <InlineMath math="m-n:n" />으로 내분합니다.
                            </p>

                            <p className="mt-4 leading-8">
                                내분점 공식을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
B
=
\frac{(m-n)R+nA}{m}
`}
                            />

                            <BlockMath
                                math={String.raw`
mB=(m-n)R+nA
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
R=\frac{mB-nA}{m-n}
}
`}
                            />

                        </div>

                        {/* m < n */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-xl font-bold text-white">
                                ② <InlineMath math="m<n" />인 경우
                            </p>

                            <p className="leading-8">
                                <InlineMath math="AB" />를 <InlineMath math="m:n" />으로
                                외분하는 점을 <InlineMath math="S" />라 하면{" "}
                                <InlineMath math="A" />는 선분 <InlineMath math="SB" />을{" "}
                                <InlineMath math="m:n-m" />으로 내분합니다.
                            </p>

                            <p className="mt-4 leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
A
=
\frac{(n-m)S+mB}{n}
`}
                            />

                            <BlockMath
                                math={String.raw`
nA=(n-m)S+mB
`}
                            />

                            <BlockMath
                                math={String.raw`
S
=
\frac{nA-mB}{n-m}
`}
                            />

                            <p className="leading-8">
                                분자와 분모에 <InlineMath math="-1" />을 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
S=\frac{mB-nA}{m-n}
}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                핵심
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <strong className="text-white">
                                    외분도 내분과 같은 구조입니다.
                                </strong>
                                {" "}다만 덧셈이 뺄셈으로 바뀝니다.
                            </p>

                        </div>

                    </div>


                    {/* 3. 공식 비교 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            3. 내분점과 외분점 공식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점 <InlineMath math="A,\ B" />에 대하여{" "}
                            <InlineMath math="AB" />를 <InlineMath math="m:n" />으로
                            나누는 점은 다음과 같이 나타낼 수 있습니다.
                        </p>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                                <p className="mb-4 text-center font-bold text-sky-300">
                                    내분점
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
P=\frac{mB+nA}{m+n}
}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                <p className="mb-4 text-center font-bold text-orange-300">
                                    외분점
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
Q=\frac{mB-nA}{m-n}
}
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 overflow-hidden rounded-xl border border-white/10">

                            <div className="grid grid-cols-3 bg-white/5 text-center font-bold text-white">
                                <div className="p-4"></div>
                                <div className="p-4">내분</div>
                                <div className="p-4">외분</div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4 font-bold text-white">분자</div>
                                <div className="p-4"><InlineMath math="mB+nA" /></div>
                                <div className="p-4"><InlineMath math="mB-nA" /></div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4 font-bold text-white">분모</div>
                                <div className="p-4"><InlineMath math="m+n" /></div>
                                <div className="p-4"><InlineMath math="m-n" /></div>
                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="text-center text-lg font-bold text-yellow-300">
                                내분은 덧셈, 외분은 뺄셈
                            </p>

                        </div>

                    </div>


                    {/* 4. 아폴로니우스의 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            4. 아폴로니우스의 원
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 정점에서
                            <strong className="text-yellow-300">
                                {" "}거리의 비가 일정한 점의 자취
                            </strong>
                            를 아폴로니우스의 원이라 합니다.
                        </p>

                        <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.17_2.png"
                                    alt="아폴로니우스의 원과 내분점 외분점"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    두 점 <InlineMath math="A,\ B" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
AP:BP=m:n
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    인 점 <InlineMath math="P" />의 자취를 생각합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    선분 <InlineMath math="AB" />를{" "}
                                    <InlineMath math="m:n" />으로
                                    <strong className="text-sky-300"> 내분하는 점</strong>과{" "}
                                    <InlineMath math="m:n" />으로
                                    <strong className="text-orange-300"> 외분하는 점</strong>을
                                    찾으면,
                                </p>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="leading-8 text-gray-200">
                                        이 두 점을
                                        <strong className="text-yellow-300">
                                            {" "}지름의 양 끝점
                                        </strong>
                                        으로 하는 원이
                                        <InlineMath math="AP:BP=m:n" />인 점의 자취입니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6 rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                            <p className="mb-4 text-center font-bold text-sky-300">
                                아폴로니우스의 원
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
AP:BP=m:n
}
`}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                주어진 비로 <InlineMath math="AB" />를 내분하는 점과
                                외분하는 점을 지름의 양 끝점으로 하는 원
                            </p>

                        </div>

                    </div>


                    {/* 5. 거리비가 1:1 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            5. 거리의 비가 <InlineMath math="1:1" />인 경우
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 점 <InlineMath math="A,\ B" />에서 거리가 같은 점은
                        </p>

                        <BlockMath
                            math={String.raw`
PA=PB
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족합니다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            이 경우에는 외분점이 존재하지 않고,
                            점의 자취는 원이 아니라
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\overline{AB}\text{의 수직이등분선}
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-rose-500/30 bg-rose-500/5 p-5">

                            <p className="font-bold text-rose-300">
                                주의
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                아폴로니우스의 <strong className="text-white">원</strong>이 되려면
                                두 거리의 비가 <InlineMath math="1:1" />이 아니어야 합니다.
                            </p>

                        </div>

                    </div>


                    {/* 6. 예시문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            예시
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                두 점 <InlineMath math="A(-1,-1),\ B(2,2)" />에 대하여{" "}
                                <InlineMath math="AP:BP=2:1" />인 점{" "}
                                <InlineMath math="P" />가 나타내는 도형의 넓이를 구하시오.
                            </p>

                        </div>

                        <div className="mt-6 space-y-6">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 text-xl font-bold text-white">
                                    풀이 1. <InlineMath math="P(x,y)" />로 두고 식으로 풀기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="P(x,y)" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
AP:BP=2:1
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{
\sqrt{(x+1)^2+(y+1)^2}
}{
\sqrt{(x-2)^2+(y-2)^2}
}
=2
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x+1)^2+(y+1)^2
=
4\{(x-2)^2+(y-2)^2\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    전개하여 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2-6x-6y+10=0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    중심은 일차계수를 반으로 나누고 부호를 바꾸어
                                </p>

                                <BlockMath math="(3,3)" />

                                <p className="leading-8 text-gray-300">
                                    이고, 반드시 <InlineMath math="r^2=" />을 쓰면
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
3^2+3^2-10
=
8
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
8\pi
`}
                                />

                            </div>


                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-4 text-xl font-bold text-blue-300">
                                    풀이 2. 내분점과 외분점으로 풀기
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 선분 <InlineMath math="AB" />를{" "}
                                    <InlineMath math="2:1" />로 내분하는 점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{2B+A}{3}
=
\left(
\frac{2\cdot2+(-1)}{3},
\frac{2\cdot2+(-1)}{3}
\right)
`}
                                />

                                <BlockMath
                                    math={String.raw`
=(1,1)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    다음으로 <InlineMath math="AB" />를{" "}
                                    <InlineMath math="2:1" />로 외분하는 점을 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{2B-A}{2-1}
=
\left(
2\cdot2-(-1),
2\cdot2-(-1)
\right)
`}
                                />

                                <BlockMath
                                    math={String.raw`
=(5,5)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    따라서 점 <InlineMath math="P" />의 자취는
                                    두 점 <InlineMath math="(1,1)" />,{" "}
                                    <InlineMath math="(5,5)" />를
                                    <strong className="text-yellow-300">
                                        {" "}지름의 양 끝점
                                    </strong>
                                    으로 하는 원입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    원의 중심은 지름의 중점이므로
                                </p>

                                <BlockMath math="(3,3)" />

                                <p className="leading-8 text-gray-300">
                                    이고 반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
(3-1)^2+(3-1)^2
=
8
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
8\pi
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
\boxed{8\pi}
`}
                                />

                            </div>

                            {/* 두 풀이 비교 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="mb-4 font-bold text-yellow-300">
                                    두 풀이의 차이
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <strong className="text-white">식으로 풀면</strong>{" "}
                                    점 <InlineMath math="P(x,y)" />를 두고 거리의 비를 식으로
                                    나타내어 <strong>원의 방정식을 직접 구합니다.</strong>
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <strong className="text-white">내분점과 외분점으로 풀면</strong>{" "}
                                    두 점을 구한 뒤 그 두 점을
                                    <strong> 지름의 양 끝점으로 하여 원을 바로 구합니다.</strong>
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{식으로 풀기}
\rightarrow
\text{원의 방정식}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\text{내분점·외분점}
\rightarrow
\text{원의 지름}
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
                                두 점 <InlineMath math="A(0,-1),\ B(2,3)" />에 대하여{" "}
                                <InlineMath math="\overline{AP}^{\,2}+\overline{BP}^{\,2}=30" />을
                                만족시키는 점 <InlineMath math="P" />가 나타내는 도형의 넓이를
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    선분 <InlineMath math="\overline{AB}" />의 중점을{" "}
                                    <InlineMath math="M" />이라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
M
=
\left(
\frac{0+2}{2},
\frac{-1+3}{2}
\right)
=
(1,1)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이때
                                </p>

                                <BlockMath
                                    math={String.raw`
AM^2
=
(1-0)^2+\{1-(-1)\}^2
=
1+4
=
5
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중점을 이용한 거리의 제곱
                                    </p>

                                    <p className="leading-8">
                                        점 <InlineMath math="M" />이 선분{" "}
                                        <InlineMath math="\overline{AB}" />의 중점이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP^2+BP^2
=
2\left(PM^2+AM^2\right)
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
30
=
2(PM^2+5)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
PM^2=10
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="P" />는
                                    중심이 <InlineMath math="M(1,1)" />이고
                                    반지름의 제곱이 <InlineMath math="10" />인 원 위를 움직입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)^2+(y-1)^2=10
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
10\pi
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{10\pi}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 고정점 <InlineMath math="A,\ B" />에 대하여{" "}
                                        <InlineMath math="AP^2+BP^2" />가 일정하면,
                                        선분 <InlineMath math="\overline{AB}" />의 중점{" "}
                                        <InlineMath math="M" />을 이용하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP^2+BP^2
=
2\left(PM^2+AM^2\right)
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        로 바꿀 수 있습니다.
                                        따라서 <InlineMath math="PM^2" />가 일정하게 되어
                                        점 <InlineMath math="P" />의 자취는
                                        <strong className="text-yellow-300">
                                            {" "}중점 M을 중심으로 하는 원
                                        </strong>
                                        이 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP^2+BP^2=\text{일정}
\rightarrow
PM^2=\text{일정}
\rightarrow
\text{원}
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
                                두 점 <InlineMath math="A(2,0),\ B(10,0)" />에 대하여{" "}
                                <InlineMath math="AP:BP=1:3" />인 점{" "}
                                <InlineMath math="P" />가 나타내는 도형의 길이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    점 <InlineMath math="P" />의 자취는{" "}
                                    <InlineMath math="AB" />를{" "}
                                    <InlineMath math="1:3" />으로 내분하는 점과{" "}
                                    <InlineMath math="1:3" />으로 외분하는 점을
                                    지름의 양 끝점으로 하는 원입니다.
                                </p>

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ① 내분점
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{B+3A}{4}
=
\left(
\frac{10+3\cdot2}{4},
0
\right)
=(4,0)
`}
                                />

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ② 외분점
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{B-3A}{1-3}
=
\left(
\frac{10-3\cdot2}{-2},
0
\right)
=(-2,0)
`}
                                />

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ③ 원의 지름
                                </p>

                                <p className="leading-8">
                                    지름의 양 끝점은{" "}
                                    <InlineMath math="(-2,0)" />,{" "}
                                    <InlineMath math="(4,0)" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{지름}
=
4-(-2)
=
6
`}
                                />

                                <p className="leading-8">
                                    따라서 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
r=3
`}
                                />

                                <hr className="border-white/10" />

                                <p className="font-semibold text-white">
                                    ④ 자취의 길이
                                </p>

                                <BlockMath
                                    math={String.raw`
2\pi r
=
2\pi\cdot3
=
6\pi
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{6\pi}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        거리의 비가 일정한 점의 자취는
                                        <strong className="text-yellow-300">
                                            {" "}내분점과 외분점을 지름의 양 끝점
                                        </strong>
                                        으로 하는 원입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        따라서 내분점과 외분점만 구하면
                                        중심, 반지름, 넓이, 둘레를 모두 쉽게 구할 수 있습니다.
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
                                두 점 <InlineMath math="A(-2,0),\ B(3,0)" />으로부터의
                                거리의 비가 <InlineMath math="3:2" />인 점{" "}
                                <InlineMath math="P" />에 대하여
                                삼각형 <InlineMath math="PAB" />의 넓이의 최댓값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    점 <InlineMath math="P" />는{" "}
                                    <InlineMath math="AP:BP=3:2" />를 만족하므로,
                                    점 <InlineMath math="P" />의 자취는
                                    선분 <InlineMath math="AB" />를{" "}
                                    <InlineMath math="3:2" />로 내분하는 점과
                                    외분하는 점을 지름의 양 끝점으로 하는 원입니다.
                                </p>

                                {/* 내분점 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 내분점
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{3B+2A}{3+2}
=
\left(
\frac{3\cdot3+2(-2)}{5},
0
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=(1,0)
`}
                                    />

                                </div>

                                {/* 외분점 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 외분점
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{3B-2A}{3-2}
=
\left(
\frac{3\cdot3-2(-2)}{1},
0
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=(13,0)
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="P" />의 자취는
                                    두 점 <InlineMath math="(1,0),\ (13,0)" />을
                                    지름의 양 끝점으로 하는 원입니다.
                                </p>

                                <p className="leading-8">
                                    원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(
\frac{1+13}{2},0
\right)
=
(7,0)
`}
                                />

                                <p className="leading-8">
                                    이고 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
r
=
\frac{13-1}{2}
=
6
`}
                                />

                                {/* 넓이 최대 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-4 font-bold text-blue-300">
                                        ③ 삼각형의 넓이가 최대가 되는 경우
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        선분 <InlineMath math="AB" />는{" "}
                                        <InlineMath math="x" />축 위에 있으므로
                                        삼각형 <InlineMath math="PAB" />의 밑변은 항상 같습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AB
=
3-(-2)
=
5
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 삼각형의 넓이가 최대가 되려면
                                        점 <InlineMath math="P" />에서{" "}
                                        <InlineMath math="x" />축까지의 거리,
                                        즉 높이가 최대가 되어야 합니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원의 중심이 <InlineMath math="x" />축 위에 있고
                                        반지름이 <InlineMath math="6" />이므로
                                        높이의 최댓값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
6
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    따라서 삼각형의 넓이의 최댓값은
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12
\times5
\times6
=
15
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{15}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        거리의 비가 일정하므로 먼저 아폴로니우스의 원을 만듭니다.
                                        <InlineMath math="A,\ B" />가 <InlineMath math="x" />축 위에
                                        있으므로 삼각형의 밑변 <InlineMath math="AB" />는 일정하고,
                                        넓이는 점 <InlineMath math="P" />의{" "}
                                        <InlineMath math="x" />축까지의 거리가 최대일 때 최대가 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP:BP=3:2
\rightarrow
\text{아폴로니우스의 원}
\rightarrow
\text{높이의 최댓값}=r
\rightarrow
\text{넓이의 최댓값}
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
                                두 점 <InlineMath math="A(1,-2),\ B(1,1)" />으로부터의
                                거리의 비가 <InlineMath math="1:2" />인 점{" "}
                                <InlineMath math="P" />에 대하여{" "}
                                <InlineMath math="\angle PBA" />의 크기가 최대일 때,
                                선분 <InlineMath math="BP" />의 길이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    점 <InlineMath math="P" />는
                                    <InlineMath math="AP:BP=1:2" />를 만족하므로,
                                    점 <InlineMath math="P" />의 자취는
                                    선분 <InlineMath math="AB" />를{" "}
                                    <InlineMath math="1:2" />로 내분하는 점과
                                    외분하는 점을 지름의 양 끝점으로 하는 원입니다.
                                </p>

                                {/* 내분점 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 내분점
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{B+2A}{1+2}
=
\left(
\frac{1+2\cdot1}{3},
\frac{1+2(-2)}{3}
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=(1,-1)
`}
                                    />

                                </div>

                                {/* 외분점 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 외분점
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\frac{B-2A}{1-2}
=
\left(
\frac{1-2\cdot1}{-1},
\frac{1-2(-2)}{-1}
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=(1,-5)
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="P" />의 자취는
                                    두 점 <InlineMath math="(1,-1),\ (1,-5)" />를
                                    지름의 양 끝점으로 하는 원입니다.
                                </p>

                                <p className="leading-8">
                                    원의 중심을 <InlineMath math="C" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
C(1,-3)
`}
                                />

                                <p className="leading-8">
                                    이고 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
r=2
`}
                                />

                                {/* 최대각 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-4 font-bold text-blue-300">
                                        ③ <InlineMath math="\angle PBA" />가 최대가 되는 경우
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        점 <InlineMath math="B" />에서 원 위의 점{" "}
                                        <InlineMath math="P" />를 움직일 때,{" "}
                                        <InlineMath math="\angle PBA" />가 최대가 되는 것은
                                        직선 <InlineMath math="BP" />가 원에
                                        <strong className="text-yellow-300"> 접할 때</strong>입니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        이때 반지름 <InlineMath math="CP" />와
                                        접선 <InlineMath math="BP" />는 수직입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
CP\perp BP
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    점 <InlineMath math="B(1,1)" />와
                                    중심 <InlineMath math="C(1,-3)" /> 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
BC=4
`}
                                />

                                <p className="leading-8">
                                    이고
                                </p>

                                <BlockMath
                                    math={String.raw`
CP=2
`}
                                />

                                <p className="leading-8">
                                    이므로 직각삼각형 <InlineMath math="BCP" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
BP^2
=
BC^2-CP^2
=
4^2-2^2
=
12
`}
                                />

                                <BlockMath
                                    math={String.raw`
BP=2\sqrt3
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2\sqrt3}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        거리의 비가 일정하므로 먼저 아폴로니우스의 원을 만듭니다.
                                        그다음 점 <InlineMath math="B" />에서 바라보는 각이
                                        최대가 되는 위치는{" "}
                                        <InlineMath math="BP" />가 원의 접선이 되는 경우입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP:BP=1:2
\rightarrow
\text{아폴로니우스의 원}
\rightarrow
BP\text{가 접선}
\rightarrow
\text{피타고라스 정리}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-4">

                            <p className="leading-8 text-gray-300">
                                ① 내분점은 선분의 내부,
                                외분점은 선분의 연장선 위에 있습니다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ② 외분점은 새로운 개념으로 외우기보다
                                <strong className="text-white">
                                    {" "}내분점으로 바꾸어 생각
                                </strong>
                                할 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{내분점 }
P=\frac{mB+nA}{m+n}
`}
                            />

                            <BlockMath
                                math={String.raw`
\text{외분점 }
Q=\frac{mB-nA}{m-n}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                ③ 두 점에서 거리의 비가 일정한 점의 자취는
                                그 비로 <InlineMath math="AB" />를 내분하는 점과
                                외분하는 점을
                                <strong className="text-yellow-300">
                                    {" "}지름의 양 끝점
                                </strong>
                                으로 하는 원입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
AP:BP=m:n
\quad(m\ne n)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                ④ 거리의 비가 <InlineMath math="1:1" />이면
                                자취는 원이 아니라
                                <strong className="text-white">
                                    {" "}선분 AB의 수직이등분선
                                </strong>
                                입니다.
                            </p>

                        </div>

                    </div>
                </div>
            </section>

            {/* 1.18 축과 접하는 원 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                {/* 제목 */}

                <h2 className="text-3xl font-bold text-white">
                    1.18 축과 접하는 원
                </h2>

                <p className="mt-5 leading-8 text-gray-300">
                    축과 접하는 원은 공식을 외우기보다
                    <strong className="text-yellow-300">
                        {" "}어떤 축과 접하는지와 지나는 점의 위치
                    </strong>
                    를 먼저 확인하면 중심을 바로 정할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">
                    {/* 1. 풀이의 우선순위 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                            1. 축과 접하는 원을 푸는 순서
                        </h3>

                        <div className="space-y-4">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="text-lg font-bold text-white">
                                    ① 어떤 축과 접하는지 먼저 확인한다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="x" />축, <InlineMath math="y" />축,
                                    또는 두 축에 동시에 접하는지를 먼저 봅니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="text-lg font-bold text-white">
                                    ② 지나는 점의 위치를 확인한다.
                                </p>

                                <div className="mt-3 space-y-2 text-gray-300">

                                    <p className="leading-8">
                                        • <InlineMath math="x" />축과 접하면
                                        → 지나는 점의 <strong className="text-sky-300"><InlineMath math="y" />좌표</strong>
                                    </p>

                                    <p className="leading-8">
                                        • <InlineMath math="y" />축과 접하면
                                        → 지나는 점의 <strong className="text-sky-300"><InlineMath math="x" />좌표</strong>
                                    </p>

                                    <p className="leading-8">
                                        • 두 축에 동시에 접하면
                                        → 지나는 점의 <strong className="text-sky-300">사분면</strong>
                                    </p>

                                </div>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="text-lg font-bold text-white">
                                    ③ 중심을 바로 쓴다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
x\text{축과 접함}&\rightarrow (a,\pm r)\\
y\text{축과 접함}&\rightarrow (\pm r,b)\\
x,y\text{축과 모두 접함}&\rightarrow (\pm r,\pm r)
\end{aligned}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="text-lg font-bold text-white">
                                    ④ 중심과 반지름으로 원의 방정식을 조립한다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-\text{중심의 }x\text{좌표})^2
+
(y-\text{중심의 }y\text{좌표})^2
=
r^2
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                            <p className="text-center text-lg font-bold text-emerald-300">
                                접하는 축 → 지나는 점의 위치 → 중심 → 원의 방정식
                            </p>

                        </div>

                    </div>


                    {/* 2. x축과 접하는 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            2. <InlineMath math="x" />축과 접하는 원
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.18_1.png"
                                    alt="x축과 접하는 원"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />축과 접하는 원은
                                    <strong className="text-yellow-300">
                                        {" "}위쪽 또는 아래쪽
                                    </strong>
                                    에 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    위아래를 나타내는 것은
                                    <strong className="text-sky-300"><InlineMath math="y" />좌표</strong>이므로,
                                    지나는 점의 <InlineMath math="y" />좌표를 먼저 확인합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    중심의 <InlineMath math="x" />좌표에는 특별한 조건이 없으므로
                                    다른 변수 <InlineMath math="a" />로 둡니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            {/* 위쪽 */}
                            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                                <p className="mb-4 font-bold text-sky-300">
                                    지나는 점의 <InlineMath math="y>0" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원은 <InlineMath math="x" />축의 위쪽에 있으므로 중심은
                                </p>

                                <BlockMath math="(a,r)" />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x-a)^2+(y-r)^2=r^2
}
`}
                                />

                            </div>

                            {/* 아래쪽 */}
                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                <p className="mb-4 font-bold text-orange-300">
                                    지나는 점의 <InlineMath math="y<0" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원은 <InlineMath math="x" />축의 아래쪽에 있으므로 중심은
                                </p>

                                <BlockMath math="(a,-r)" />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x-a)^2+(y+r)^2=r^2
}
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                기억할 것
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="x" />축과 접하면
                                <strong className="text-white">
                                    {" "}지나는 점의 <InlineMath math="y" />좌표로 원의 위아래를 결정
                                </strong>
                                합니다.
                            </p>

                        </div>

                    </div>


                    {/* 3. y축과 접하는 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            3. <InlineMath math="y" />축과 접하는 원
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.18_2.png"
                                    alt="y축과 접하는 원"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="y" />축과 접하는 원은
                                    <strong className="text-yellow-300">
                                        {" "}왼쪽 또는 오른쪽
                                    </strong>
                                    에 있습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    좌우를 나타내는 것은
                                    <strong className="text-sky-300">x좌표</strong>이므로,
                                    지나는 점의 <InlineMath math="x" />좌표를 먼저 확인합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    중심의 <InlineMath math="y" />좌표에는 특별한 조건이 없으므로
                                    다른 변수 <InlineMath math="b" />로 둡니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 grid gap-5 md:grid-cols-2">

                            {/* 오른쪽 */}
                            <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-5">

                                <p className="mb-4 font-bold text-sky-300">
                                    지나는 점의 <InlineMath math="x>0" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원은 <InlineMath math="y" />축의 오른쪽에 있으므로 중심은
                                </p>

                                <BlockMath math="(r,b)" />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x-r)^2+(y-b)^2=r^2
}
`}
                                />

                            </div>

                            {/* 왼쪽 */}
                            <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-5">

                                <p className="mb-4 font-bold text-orange-300">
                                    지나는 점의 <InlineMath math="x<0" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원은 <InlineMath math="y" />축의 왼쪽에 있으므로 중심은
                                </p>

                                <BlockMath math="(-r,b)" />

                                <p className="leading-8 text-gray-300">
                                    따라서 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
(x+r)^2+(y-b)^2=r^2
}
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                기억할 것
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="y" />축과 접하면
                                <strong className="text-white">
                                    {" "}지나는 점의 <InlineMath math="x" />좌표로 원의 좌우를 결정
                                </strong>
                                합니다.
                            </p>

                        </div>

                    </div>


                    {/* 4. 두 축과 접하는 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            4. <InlineMath math="x" />축과 <InlineMath math="y" />축에 동시에 접하는 원
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="overflow-hidden rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.18_3.png"
                                    alt="x축과 y축에 동시에 접하는 원"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    두 축에 동시에 접하면 중심에서{" "}
                                    <InlineMath math="x" />축까지의 거리와{" "}
                                    <InlineMath math="y" />축까지의 거리가 모두{" "}
                                    <InlineMath math="r" />입니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 중심의 두 좌표의 절댓값은 모두{" "}
                                    <InlineMath math="r" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(|x|,|y|)
=
(r,r)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이제
                                    <strong className="text-yellow-300">
                                        {" "}지나는 점의 사분면만 확인
                                    </strong>
                                    하면 중심의 부호가 결정됩니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-6 overflow-hidden rounded-xl border border-white/10">

                            <div className="grid grid-cols-3 bg-white/5 text-center font-bold text-white">
                                <div className="p-4">지나는 점</div>
                                <div className="p-4">중심</div>
                                <div className="p-4">원의 방정식</div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4">제1사분면</div>
                                <div className="p-4"><InlineMath math="(r,r)" /></div>
                                <div className="p-4">
                                    <InlineMath math="(x-r)^2+(y-r)^2=r^2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4">제2사분면</div>
                                <div className="p-4"><InlineMath math="(-r,r)" /></div>
                                <div className="p-4">
                                    <InlineMath math="(x+r)^2+(y-r)^2=r^2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4">제3사분면</div>
                                <div className="p-4"><InlineMath math="(-r,-r)" /></div>
                                <div className="p-4">
                                    <InlineMath math="(x+r)^2+(y+r)^2=r^2" />
                                </div>
                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">
                                <div className="p-4">제4사분면</div>
                                <div className="p-4"><InlineMath math="(r,-r)" /></div>
                                <div className="p-4">
                                    <InlineMath math="(x-r)^2+(y+r)^2=r^2" />
                                </div>
                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                기억할 것
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                두 축에 동시에 접하면
                                <strong className="text-white">
                                    {" "}지나는 점의 사분면으로 중심을 바로 작성
                                </strong>
                                합니다.
                            </p>

                        </div>

                    </div>


                    {/* 5. 간단한 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-white">
                            5. 중심을 잡는 연습
                        </h3>

                        {/* 예시 1 */}
                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(2,-4)" />를 지나고{" "}
                                <InlineMath math="x" />축에 접하는 원
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                ① <InlineMath math="x" />축과 접한다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ② 지나는 점의 <InlineMath math="y=-4<0" />이므로 아래쪽 원이다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ③ 중심은
                            </p>

                            <BlockMath math="(a,-r)" />

                            <p className="leading-8 text-gray-300">
                                ④ 따라서 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(x-a)^2+(y+r)^2=r^2
}
`}
                            />

                        </div>

                        {/* 예시 2 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(-3,5)" />를 지나고{" "}
                                <InlineMath math="y" />축에 접하는 원
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                ① <InlineMath math="y" />축과 접한다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ② 지나는 점의 <InlineMath math="x=-3<0" />이므로 왼쪽 원이다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ③ 중심은
                            </p>

                            <BlockMath math="(-r,b)" />

                            <p className="leading-8 text-gray-300">
                                ④ 따라서 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(x+r)^2+(y-b)^2=r^2
}
`}
                            />

                        </div>

                        {/* 예시 3 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시 3
                            </p>

                            <p className="leading-8 text-gray-300">
                                제2사분면의 점을 지나고 두 축에 동시에 접하는 원
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                ① 두 축에 동시에 접한다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ② 지나는 점이 제2사분면에 있다.
                            </p>

                            <p className="leading-8 text-gray-300">
                                ③ 중심은
                            </p>

                            <BlockMath math="(-r,r)" />

                            <p className="leading-8 text-gray-300">
                                ④ 따라서 원의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
(x+r)^2+(y-r)^2=r^2
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
                                원 <InlineMath math="x^2+y^2+2x+4ky+16=0" />이{" "}
                                <InlineMath math="y" />축에 접하고 중심이 제3사분면에 있을 때,
                                상수 <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 일반형에서 중심과 반지름을 구합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중심과 반지름
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{중심}
=
\left(
-\frac22,
-\frac{4k}{2}
\right)
=
(-1,-2k)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2
=
1+4k^2-16
=
4k^2-15
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    원이 <InlineMath math="y" />축에 접하므로
                                    <strong className="text-yellow-300">
                                        중심의 <InlineMath math="x" />좌표의 절댓값이 반지름
                                    </strong>
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|{-1}|=r
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=1
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
4k^2-15=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
4k^2=16
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=\pm2
`}
                                />

                                <p className="leading-8">
                                    중심은{" "}
                                    <InlineMath math="(-1,-2k)" />
                                    이고 제3사분면에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-2k<0
`}
                                />

                                <BlockMath
                                    math={String.raw`
k>0
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{k=2}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        일반형에서 중심과 반지름을 구한 후,{" "}
                                        <InlineMath math="y" />축에 접하면
                                        <strong> 중심의 x좌표의 절댓값이 반지름</strong>이라는
                                        조건을 이용합니다.
                                        마지막으로 중심의 사분면을 확인하여 부호를 결정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{중심과 반지름}
\rightarrow
\text{축에 접하는 조건}
\rightarrow
\text{사분면 확인}
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
                                중심이 직선 <InlineMath math="y=-x+1" /> 위에 있고
                                점 <InlineMath math="(1,-1)" />을 지나며{" "}
                                <InlineMath math="y" />축에 접하는 두 원의 반지름의 길이의 합을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="y" />축에 접하므로 중심은{" "}
                                    <InlineMath math="(r,b)" /> 또는{" "}
                                    <InlineMath math="(-r,b)" />입니다.
                                </p>

                                <p className="leading-8">
                                    또한 중심이 직선{" "}
                                    <InlineMath math="y=-x+1" /> 위에 있으므로
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중심의 좌표
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(r,\,-r+1)
`}
                                    />

                                    <p className="my-3 text-center font-bold text-gray-400">
                                        또는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-r,\ r+1)
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    먼저 중심이{" "}
                                    <InlineMath math="(r,-r+1)" />
                                    인 경우를 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(r-1)^2+(-r+2)^2=r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2-6r+5=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(r-1)(r-5)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=1,\ 5
`}
                                />

                                <p className="leading-8">
                                    중심이{" "}
                                    <InlineMath math="(-r,r+1)" />
                                    인 경우에는
                                </p>

                                <BlockMath
                                    math={String.raw`
(-r-1)^2+(r+2)^2=r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2+6r+5=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(r+1)(r+5)=0
`}
                                />

                                <p className="leading-8">
                                    반지름은 양수이므로 해가 없습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 조건을 만족하는 두 원의 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 5
`}
                                />

                                <p className="leading-8">
                                    이므로 반지름의 길이의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
1+5=6
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
                                        먼저 접하는 축을 보고 중심을{" "}
                                        <InlineMath math="(r,b)" />,{" "}
                                        <InlineMath math="(-r,b)" />
                                        의 형태로 둡니다.
                                        그 다음 중심이 지나는 직선을 이용하여{" "}
                                        <InlineMath math="b" />를{" "}
                                        <InlineMath math="r" />로 나타낸 후,
                                        주어진 점을 지난다는 조건으로{" "}
                                        <InlineMath math="r" />을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{축에 접함}
\rightarrow
\text{중심 표현}
\rightarrow
\text{직선 조건}
\rightarrow
\text{지나는 점}
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
                                원 <InlineMath math="x^2+y^2-8x+10y+k=0" />이{" "}
                                <InlineMath math="x" />축에 접할 때,
                                상수 <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 일반형에서 중심과 반지름을 구합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중심과 반지름
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{중심}
=
\left(
4,-5
\right)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2
=
4^2+(-5)^2-k
=
41-k
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    원이 <InlineMath math="x" />축에 접하므로
                                    <strong className="text-yellow-300">
                                        중심의 <InlineMath math="y" />좌표의 절댓값이 반지름
                                    </strong>
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
|{-5}|=r
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=5
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
41-k=25
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=16
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{k=16}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        일반형에서는 먼저 중심과 반지름을 구합니다.{" "}
                                        <InlineMath math="x" />축에 접하면
                                        <strong> 중심의 y좌표의 절댓값이 반지름</strong>이므로
                                        반지름을 바로 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{중심과 반지름}
\rightarrow
\text{x축에 접함}
\rightarrow
|y|=r
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
                                <InlineMath math="x" />축과 <InlineMath math="y" />축에 동시에 접하고
                                점 <InlineMath math="(2,1)" />을 지나는 두 원의 넓이의 합이{" "}
                                <InlineMath math="a\pi" />일 때,
                                상수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    두 축에 동시에 접하는 원에서는
                                    <strong className="text-yellow-300">
                                        {" "}지나는 점의 사분면
                                    </strong>
                                    을 먼저 확인합니다.
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="(2,1)" />은 제1사분면의 점이므로
                                    원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(r,r)
`}
                                />

                                <p className="leading-8">
                                    로 둡니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원의 방정식
                                    </p>

                                    <p className="leading-8">
                                        중심이 <InlineMath math="(r,r)" />이고
                                        반지름이 <InlineMath math="r" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-r)^2+(y-r)^2=r^2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    점 <InlineMath math="(2,1)" />을 지나므로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(2-r)^2+(1-r)^2=r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2-6r+5=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(r-1)(r-5)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=1,\ 5
`}
                                />

                                <p className="leading-8">
                                    따라서 조건을 만족하는 두 원의 반지름은{" "}
                                    <InlineMath math="1,\ 5" />입니다.
                                </p>

                                <p className="leading-8">
                                    두 원의 넓이의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi\cdot1^2+\pi\cdot5^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=26\pi
`}
                                />

                                <p className="leading-8">
                                    문제에서 넓이의 합을{" "}
                                    <InlineMath math="a\pi" />라 하였으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=26
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{26}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 축에 동시에 접하면
                                        <strong> 지나는 점의 사분면을 먼저 확인</strong>합니다.
                                        점 <InlineMath math="(2,1)" />이 제1사분면에 있으므로
                                        중심을 <InlineMath math="(r,r)" />로 바로 두고,
                                        주어진 점을 원의 방정식에 대입하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{두 축에 접함}
\rightarrow
\text{지나는 점의 사분면}
\rightarrow
\text{중심 }(r,r)
\rightarrow
\text{점 대입}
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
                                점 <InlineMath math="(-2,1)" />을 지나고{" "}
                                <InlineMath math="x" />축과 <InlineMath math="y" />축에 동시에 접하는
                                원은 두 개가 있다.
                                이 두 원의 중심 사이의 거리를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    점 <InlineMath math="(-2,1)" />은 제2사분면의 점이므로
                                    중심은{" "}
                                    <InlineMath math="(-r,r)" />
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        첫 번째 원
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x+r)^2+(y-r)^2=r^2
`}
                                    />

                                    <p className="leading-8">
                                        점 <InlineMath math="(-2,1)" />을 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(r-2)^2+(1-r)^2=r^2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2-6r+5=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(r-1)(r-5)=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r=1,\ 5
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    따라서 두 원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(-1,1),\ (-5,5)
`}
                                />

                                <p className="leading-8">
                                    중심 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{(-5+1)^2+(5-1)^2}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=\sqrt{16+16}
=4\sqrt2
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{4\sqrt2}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 축에 동시에 접하는 원에서는
                                        <strong> 지나는 점의 사분면</strong>을 먼저 확인합니다.
                                        점 <InlineMath math="(-2,1)" />은 제2사분면에 있으므로
                                        중심을 <InlineMath math="(-r,r)" />로 둘 수 있습니다.
                                        하나의 방정식에서 반지름이 두 개 나오므로 원도 두 개가 만들어집니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{사분면 확인}
\rightarrow
\text{중심 }(-r,r)
\rightarrow
\text{점 대입}
\rightarrow
r=1,\ 5
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
                                    그림과 같이 곡선{" "}
                                    <InlineMath math="y=-x^2-x+4" /> 위의 점 중
                                    제4사분면에 있는 점을 중심으로 하고{" "}
                                    <InlineMath math="x" />축과 <InlineMath math="y" />축에 동시에
                                    접하는 원의 방정식은{" "}
                                    <InlineMath math="x^2+y^2+ax+by+c=0" />일 때,
                                    상수 <InlineMath math="a,\ b,\ c" />에 대하여{" "}
                                    <InlineMath math="a+b+c" />의 값을 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.18_6.png"
                                    alt="곡선 y=-x²-x+4 위의 제4사분면의 점을 중심으로 하고 두 축에 접하는 원"
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
                                    원이 <InlineMath math="x" />축과 <InlineMath math="y" />축에
                                    동시에 접하고 중심이 제4사분면에 있으므로,
                                    중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(r,-r)
`}
                                />

                                <p className="leading-8">
                                    로 둘 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    이 중심이 곡선{" "}
                                    <InlineMath math="y=-x^2-x+4" /> 위에 있으므로{" "}
                                    <InlineMath math="x=r,\ y=-r" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
-r=-r^2-r+4
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2=4
`}
                                />

                                <p className="leading-8">
                                    반지름은 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
r=2
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(2,-2)
`}
                                />

                                <p className="leading-8">
                                    이고 반지름은 <InlineMath math="2" />입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원의 방정식
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-2)^2+(y+2)^2=4
`}
                                    />

                                    <p className="leading-8">
                                        전개하여 정리하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+y^2-4x+4y+4=0
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    주어진 식{" "}
                                    <InlineMath math="x^2+y^2+ax+by+c=0" />과 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-4,\qquad b=4,\qquad c=4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b+c
=
-4+4+4
=
4
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
                                        두 축에 동시에 접하므로 먼저
                                        <strong> 중심이 있는 사분면</strong>을 확인합니다.
                                        중심이 제4사분면에 있으므로{" "}
                                        <InlineMath math="(r,-r)" />로 바로 두고,
                                        이 점이 주어진 곡선 위에 있다는 조건을 이용하여
                                        반지름을 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{두 축에 접함}
\rightarrow
\text{제4사분면}
\rightarrow
\text{중심 }(r,-r)
\rightarrow
\text{곡선에 대입}
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                중심이 곡선 <InlineMath math="y=x^2-6" /> 위에 있고{" "}
                                <InlineMath math="x" />축과 <InlineMath math="y" />축에 동시에
                                접하는 모든 원의 넓이의 합을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    원이 <InlineMath math="x" />축과 <InlineMath math="y" />축에
                                    동시에 접하므로 중심은 사분면에 따라
                                </p>

                                <BlockMath
                                    math={String.raw`
(r,r),\quad
(-r,r),\quad
(-r,-r),\quad
(r,-r)
`}
                                />

                                <p className="leading-8">
                                    중 하나입니다.
                                </p>

                                <p className="leading-8">
                                    중심이 곡선 <InlineMath math="y=x^2-6" /> 위에 있어야 하므로
                                    중심이 위쪽에 있는 경우와 아래쪽에 있는 경우로 나누어 생각합니다.
                                </p>

                                {/* 위쪽 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 중심이 제1, 제2사분면에 있는 경우
                                    </p>

                                    <p className="leading-8">
                                        중심은{" "}
                                        <InlineMath math="(\pm r,r)" />의 형태이므로
                                        곡선에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r=r^2-6
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2-r-6=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(r-3)(r+2)=0
`}
                                    />

                                    <p className="leading-8">
                                        반지름은 양수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r=3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(3,3),\quad(-3,3)
`}
                                    />

                                    <p className="leading-8">
                                        이므로 반지름이 <InlineMath math="3" />인 원이
                                        <strong> 2개</strong> 있습니다.
                                    </p>

                                </div>

                                {/* 아래쪽 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 중심이 제3, 제4사분면에 있는 경우
                                    </p>

                                    <p className="leading-8">
                                        중심은{" "}
                                        <InlineMath math="(\pm r,-r)" />의 형태이므로
                                        곡선에 대입하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-r=r^2-6
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
r^2+r-6=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(r-2)(r+3)=0
`}
                                    />

                                    <p className="leading-8">
                                        반지름은 양수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r=2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서 중심은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(-2,-2),\quad(2,-2)
`}
                                    />

                                    <p className="leading-8">
                                        이므로 반지름이 <InlineMath math="2" />인 원이
                                        <strong> 2개</strong> 있습니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    따라서 모든 원의 넓이의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
2\cdot\pi\cdot3^2
+
2\cdot\pi\cdot2^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=18\pi+8\pi
=26\pi
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{26\pi}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        두 축에 동시에 접하므로 중심은{" "}
                                        <InlineMath math="(\pm r,\pm r)" />의 형태입니다.
                                        중심이 곡선 위에 있다는 조건을 이용할 때는
                                        <strong> 위쪽과 아래쪽을 나누어</strong>{" "}
                                        <InlineMath math="y=r" />,{"m"}
                                        <InlineMath math="y=-r" />를 각각 대입합니다.
                                        같은 반지름에서도 좌우에 중심이 하나씩 있으므로
                                        원의 개수까지 확인해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{두 축에 접함}
\rightarrow
(\pm r,\pm r)
\rightarrow
\text{위·아래 구분}
\rightarrow
\text{원의 개수 확인}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>


                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-5 text-2xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-4">

                            <p className="leading-8 text-gray-300">
                                축과 접하는 원에서는
                                <strong className="text-white">
                                    {" "}우선순위를 정해서 생각
                                </strong>
                                합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{접하는 축}
\rightarrow
\text{지나는 점의 위치}
\rightarrow
\text{중심}
\rightarrow
\text{원의 방정식}
}
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x" />축과 접한다
                                    → <strong className="text-sky-300"><InlineMath math="y" />좌표</strong> 확인
                                    → 중심 <InlineMath math="(a,\pm r)" />
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    <InlineMath math="y" />축과 접한다
                                    → <strong className="text-sky-300"><InlineMath math="x" />좌표</strong> 확인
                                    → 중심 <InlineMath math="(\pm r,b)" />
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    두 축에 동시에 접한다
                                    → <strong className="text-sky-300">사분면</strong> 확인
                                    → 중심 <InlineMath math="(\pm r,\pm r)" />
                                </p>

                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 1.19 원과 직선의 관계 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.19 원과 직선의 관계
                </h2>

                <p className="leading-8 text-gray-300">
                    원과 직선이 몇 개의 점에서 만나는지는
                    원의 중심에서 직선까지의 거리와 반지름을 비교하면 알 수 있습니다.
                    <br />
                    원의 성질을 이용하기 위해 판별식보다
                    <b> 중심과 직선 사이의 거리</b>를 이용하는 방법을 우선 사용합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 원과 직선의 위치관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 원과 직선의 위치관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원의 중심을 <InlineMath math="O" />,
                            반지름을 <InlineMath math="r" />,
                            중심 <InlineMath math="O" />에서 직선에 내린 수선의 발을{" "}
                            <InlineMath math="H" />라 하겠습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            중심에서 직선까지의 거리를
                        </p>

                        <BlockMath math="OH=d" />

                        <p className="leading-8 text-gray-300">
                            라 하면, <InlineMath math="d" />와{" "}
                            <InlineMath math="r" />의 크기에 따라
                            원과 직선의 위치관계가 결정됩니다.
                        </p>

                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                판단 순서
                            </p>

                            <div className="mt-3 space-y-2 text-gray-300">

                                <p className="leading-8">
                                    ① 원의 <b>중심과 반지름</b>을 구한다.
                                </p>

                                <p className="leading-8">
                                    ② 중심에서 직선까지의 거리{" "}
                                    <InlineMath math="d" />를 구한다.
                                </p>

                                <p className="leading-8">
                                    ③ <InlineMath math="d" />와{" "}
                                    <InlineMath math="r" />을 비교한다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 만나지 않는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 만나지 않는 경우
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.19_1.png"
                                    alt="원과 직선이 만나지 않는 경우"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    중심에서 직선까지의 거리가 반지름보다 크면
                                    직선은 원 밖에 있습니다.
                                </p>

                                <BlockMath math="d>r" />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="font-bold text-white">
                                        결론
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원과 직선은
                                        <b> 만나지 않습니다.</b>
                                    </p>

                                    <BlockMath math="\text{교점의 개수}=0" />

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 접하는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 한 점에서 만나는 경우
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.19_2.png"
                                    alt="원과 직선이 한 점에서 만나는 경우"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    중심에서 직선까지의 거리가 반지름과 같으면
                                </p>

                                <BlockMath math="d=r" />

                                <p className="leading-8 text-gray-300">
                                    직선은 원과 한 점에서 만납니다.
                                </p>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        접점과 접선
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원과 직선이 만나는 한 점을
                                        <b> 접점</b>,
                                        이때의 직선을
                                        <b> 접선</b>이라 합니다.
                                    </p>

                                </div>

                                <p className="leading-8 text-gray-300">
                                    접점에서 반지름과 접선은 서로 수직입니다.
                                </p>

                                <BlockMath math="OH\perp \text{접선}" />

                            </div>

                        </div>

                    </div>

                    {/* 두 점에서 만나는 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 두 점에서 만나는 경우
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.19_3.png"
                                    alt="원과 직선이 두 점에서 만나는 경우"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    중심에서 직선까지의 거리가 반지름보다 작으면
                                    직선은 원의 내부를 지나갑니다.
                                </p>

                                <BlockMath math="d<r" />

                                <p className="leading-8 text-gray-300">
                                    따라서 원과 직선은 두 점에서 만납니다.
                                </p>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        할선과 현
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원과 두 점에서 만나는 직선을
                                        <b> 할선</b>이라 하고,
                                        두 교점을 연결한 선분을
                                        <b> 현</b>이라 합니다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* 세 경우 비교 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 거리와 반지름으로 판단하기
                        </h3>

                        <div className="overflow-hidden rounded-xl border border-white/10">

                            <div className="grid grid-cols-3 bg-white/5 text-center font-bold text-white">

                                <div className="p-4">
                                    조건
                                </div>

                                <div className="p-4">
                                    교점의 개수
                                </div>

                                <div className="p-4">
                                    관계
                                </div>

                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">

                                <div className="p-4">
                                    <InlineMath math="d>r" />
                                </div>

                                <div className="p-4">
                                    0개
                                </div>

                                <div className="p-4">
                                    만나지 않는다
                                </div>

                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">

                                <div className="p-4">
                                    <InlineMath math="d=r" />
                                </div>

                                <div className="p-4">
                                    1개
                                </div>

                                <div className="p-4">
                                    접선
                                </div>

                            </div>

                            <div className="grid grid-cols-3 border-t border-white/10 text-center text-gray-300">

                                <div className="p-4">
                                    <InlineMath math="d<r" />
                                </div>

                                <div className="p-4">
                                    2개
                                </div>

                                <div className="p-4">
                                    할선
                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                기억할 것
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                원과 직선의 위치관계는
                                <strong className="text-white">
                                    {" "}중심에서 직선까지의 거리와 반지름의 크기 비교
                                </strong>
                                로 판단합니다.
                            </p>

                        </div>

                    </div>

                    {/* 판별식 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 판별식을 이용하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원의 방정식과 직선의 방정식을 연립하면
                            하나의 이차방정식을 만들 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\text{원과 직선의 연립}
\rightarrow
\text{이차방정식}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이 이차방정식의 판별식을{" "}
                            <InlineMath math="D" />라 하면
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
\begin{aligned}
D<0 &\rightarrow \text{교점이 없다}\\
D=0 &\rightarrow \text{한 점에서 만난다}\\
D>0 &\rightarrow \text{두 점에서 만난다}
\end{aligned}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                풀이의 우선순위
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                판별식으로도 판단할 수 있지만,
                                원의 성질을 이용하기 위해서는
                                <strong className="text-white">
                                    {" "}중심에서 직선까지의 거리와 반지름을 비교하는 방법
                                </strong>
                                을 우선 사용합니다.
                            </p>

                        </div>

                    </div>

                    {/* 현의 길이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 현의 길이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원의 중심 <InlineMath math="O" />에서 현{" "}
                            <InlineMath math="AB" />에 내린 수선의 발을{" "}
                            <InlineMath math="H" />라 하면,
                            중심에서 현에 내린 수선은 현을 이등분합니다.
                        </p>

                        <BlockMath math="AH=HB" />

                        <p className="leading-8 text-gray-300">
                            반지름을 <InlineMath math="r" />,
                            중심에서 현까지의 거리를{" "}
                            <InlineMath math="d" />라 하면
                        </p>

                        <BlockMath
                            math={String.raw`
OA=r,\qquad OH=d
`}
                        />

                        <p className="leading-8 text-gray-300">
                            직각삼각형 <InlineMath math="OHA" />에서
                            피타고라스 정리를 이용하면
                        </p>

                        <BlockMath
                            math={String.raw`
AH^2=r^2-d^2
`}
                        />

                        <BlockMath
                            math={String.raw`
AH=\sqrt{r^2-d^2}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            현의 길이는 반현의 두 배이므로
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
AB=2\sqrt{r^2-d^2}
}
`}
                        />

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                현의 길이를 구하는 순서
                            </p>

                            <div className="mt-3 space-y-2 text-gray-300">

                                <p className="leading-8">
                                    ① 중심에서 직선까지의 거리{" "}
                                    <InlineMath math="d" />를 구한다.
                                </p>

                                <p className="leading-8">
                                    ② 피타고라스 정리로
                                    <b> 반현의 길이</b>를 구한다.
                                </p>

                                <p className="leading-8">
                                    ③ 마지막에 <b>2배</b> 한다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            중심의 좌표가 <InlineMath math="(a,0)" />이고
                            넓이가 <InlineMath math="32\pi" />인 원이
                            직선 <InlineMath math="x-y+1=0" />과 만나지 않도록 하는
                            양의 정수 <InlineMath math="a" />의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원의 넓이가 <InlineMath math="32\pi" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\pi r^2=32\pi
`}
                            />

                            <BlockMath
                                math={String.raw`
r^2=32
`}
                            />

                            <BlockMath
                                math={String.raw`
r=4\sqrt2
`}
                            />

                            <p className="leading-8">
                                원과 직선이 만나지 않으려면
                                <strong className="text-yellow-300">
                                    {" "}중심에서 직선까지의 거리 d가 반지름 r보다 커야
                                </strong>
                                합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
d>r
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    중심에서 직선까지의 거리
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="(a,0)" />에서
                                    직선 <InlineMath math="x-y+1=0" />까지의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|a-0+1|}{\sqrt{1^2+(-1)^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{|a+1|}{\sqrt2}
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양의 정수이므로{" "}
                                    <InlineMath math="a+1>0" />입니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
d=\frac{a+1}{\sqrt2}
`}
                                />

                            </div>

                            <p className="leading-8">
                                이제 <InlineMath math="d>r" />을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{a+1}{\sqrt2}>4\sqrt2
`}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="\sqrt2" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
a+1>8
`}
                            />

                            <BlockMath
                                math={String.raw`
a>7
`}
                            />

                            <p className="leading-8">
                                따라서 이를 만족하는 양의 정수{" "}
                                <InlineMath math="a" />의 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
a=8
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
                                    원과 직선이 만나지 않는 조건은{" "}
                                    <InlineMath math="d>r" />입니다.
                                    먼저 원의 넓이에서 반지름을 구하고,
                                    중심에서 직선까지의 거리를 구한 뒤
                                    두 값을 비교합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{원의 넓이}
\rightarrow
r
\rightarrow
\text{중심에서 직선까지의 거리 }d
\rightarrow
d>r
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
                            두 점 <InlineMath math="(1,-1),\,(-3,-3)" />을
                            지름의 양 끝점으로 하는 원이
                            직선 <InlineMath math="2x-y+m=0" />과 만나지 않을 때,
                            자연수 <InlineMath math="m" />의 최솟값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원의 중심은 지름의 중점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\left(
\frac{1+(-3)}2,
\frac{-1+(-3)}2
\right)
=(-1,-2)
`}
                            />

                            <p className="leading-8">
                                반지름은 지름의 길이의 절반이므로
                            </p>

                            <BlockMath
                                math={String.raw`
r
=
\frac12
\sqrt{(1+3)^2+(-1+3)^2}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac12\sqrt{16+4}
=\sqrt5
`}
                            />

                            <p className="leading-8">
                                원과 직선이 만나지 않으려면
                            </p>

                            <BlockMath math="d>r" />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    중심에서 직선까지의 거리
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="(-1,-2)" />에서
                                    직선 <InlineMath math="2x-y+m=0" />까지의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
d=
\frac{|2(-1)-(-2)+m|}
{\sqrt{2^2+(-1)^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{|m|}{\sqrt5}
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="m" />은 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
d=\frac{m}{\sqrt5}
`}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{m}{\sqrt5}
>
\sqrt5
`}
                            />

                            <p className="leading-8">
                                양변에 <InlineMath math="\sqrt5" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
m>5
`}
                            />

                            <p className="leading-8">
                                이를 만족하는 자연수의 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
m=6
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
                                    지름이 주어진 원에서는
                                    <strong className="text-white">
                                        {" "}중심과 반지름을 먼저 구한 뒤
                                    </strong>
                                    중심에서 직선까지의 거리와 비교합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{지름}
\rightarrow
\text{중심}
\rightarrow
r
\rightarrow
d
\rightarrow
d>r
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
                            중심의 좌표가 <InlineMath math="(-2,-4)" />이고{" "}
                            <InlineMath math="y" />축에 접하는 원이
                            직선 <InlineMath math="3x-y+k=0" />에 접할 때,
                            모든 상수 <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                원이 <InlineMath math="y" />축에 접하므로
                                반지름은 중심에서 <InlineMath math="y" />축까지의 거리입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
r=|-2|=2
`}
                            />

                            <p className="leading-8">
                                직선에 접하므로 중심에서 직선까지의 거리는 반지름과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
d=r=2
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    중심에서 직선까지의 거리
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|3(-2)-(-4)+k|}
{\sqrt{3^2+(-1)^2}}
=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{|k-2|}{\sqrt{10}}
=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
|k-2|=2\sqrt{10}
`}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
k-2=\pm2\sqrt{10}
`}
                            />

                            <BlockMath
                                math={String.raw`
k=2\pm2\sqrt{10}
`}
                            />

                            <p className="leading-8">
                                모든 <InlineMath math="k" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
(2+2\sqrt{10})+(2-2\sqrt{10})=4
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

                                <ol className="list-decimal space-y-2 pl-6 text-gray-300 leading-8">
                                    <li>축에 접하면 먼저 반지름을 구한다.</li>
                                    <li>직선에도 접하면 중심에서 직선까지의 거리와 반지름이 같다.</li>
                                    <li>점과 직선 사이의 거리 공식을 이용하여 식을 세운다.</li>
                                </ol>

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
                            중심이 직선 <InlineMath math="y=2x" /> 위에 있고
                            두 직선 <InlineMath math="3x+y-5=0" />,{" "}
                            <InlineMath math="3x+y-15=0" />에 접하는 원의 방정식이{" "}
                            <InlineMath math="(x-a)^2+(y-b)^2=c" />일 때,
                            상수 <InlineMath math="a,\ b,\ c" />에 대하여{" "}
                            <InlineMath math="a+b+c" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 직선{" "}
                                <InlineMath math="3x+y-5=0" />,{" "}
                                <InlineMath math="3x+y-15=0" />은 서로 평행합니다.
                            </p>

                            <p className="leading-8">
                                원이 두 직선에 모두 접하므로
                                <strong className="text-yellow-300">
                                    {" "}원의 중심은 두 평행선의 한가운데
                                </strong>
                                에 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    중심이 지나는 직선
                                </p>

                                <p className="leading-8">
                                    두 평행선의 상수항{" "}
                                    <InlineMath math="-5,\ -15" />의 중간은{" "}
                                    <InlineMath math="-10" />이므로 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
3x+y-10=0
`}
                                />

                                <p className="leading-8">
                                    위에 있습니다.
                                </p>

                            </div>

                            <p className="leading-8">
                                또한 중심이 <InlineMath math="y=2x" /> 위에 있으므로
                                두 직선을 연립하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{cases}
y=2x\\
3x+y-10=0
\end{cases}
`}
                            />

                            <BlockMath
                                math={String.raw`
3x+2x-10=0
`}
                            />

                            <BlockMath
                                math={String.raw`
x=2,\qquad y=4
`}
                            />

                            <p className="leading-8">
                                따라서 원의 중심은
                            </p>

                            <BlockMath
                                math={String.raw`
(a,b)=(2,4)
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    반지름
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="(2,4)" />에서
                                    직선 <InlineMath math="3x+y-5=0" />까지의 거리가
                                    반지름입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
r
=
\frac{|3\cdot2+4-5|}
{\sqrt{3^2+1^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac5{\sqrt{10}}
=
\frac{\sqrt{10}}2
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
c=r^2=\frac52
`}
                                />

                            </div>

                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+b+c
=
2+4+\frac52
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac{17}{2}
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\frac{17}{2}}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    서로 평행한 두 직선에 모두 접하는 원의 중심은
                                    <strong className="text-white">
                                        {" "}두 평행선의 한가운데
                                    </strong>
                                    에 있습니다.
                                    따라서 먼저 중심이 지나는 중간 직선을 구하고,
                                    주어진 중심의 조건과 연립하여 중심을 찾은 뒤
                                    중심에서 직선까지의 거리로 반지름을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{두 평행선}
\rightarrow
\text{중간 직선}
\rightarrow
\text{중심}
\rightarrow
d=r
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
                            중심이 원점이고 직선 <InlineMath math="y=3x+k" />와 만나는 원 중에서
                            넓이가 최소인 원을 <InlineMath math="C" />라 하자.
                            원 <InlineMath math="C" />의 넓이가{" "}
                            <InlineMath math="40\pi" />일 때,
                            양의 상수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                직선과 만나는 원 중에서 넓이가 가장 작은 원은{" "}
                                <strong className="text-yellow-300">직선에 접하는 원</strong>입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{최소 넓이}
\Longrightarrow
\text{접한다}
`}
                            />

                            <p className="leading-8">
                                원의 넓이가{" "}
                                <InlineMath math="40\pi" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\pi r^2=40\pi
`}
                            />

                            <BlockMath
                                math={String.raw`
r=2\sqrt{10}
`}
                            />

                            <p className="leading-8">
                                중심이 원점이므로
                                원점에서 직선까지의 거리가 반지름과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
d=r=2\sqrt{10}
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    점과 직선 사이의 거리
                                </p>

                                <p className="leading-8">
                                    직선을 일반형으로 고치면
                                </p>

                                <BlockMath
                                    math={String.raw`
3x-y+k=0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|k|}
{\sqrt{3^2+(-1)^2}}
=
2\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{|k|}{\sqrt{10}}
=
2\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
|k|=20
`}
                                />

                            </div>

                            <p className="leading-8">
                                <InlineMath math="k" />는 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
k=20
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{20}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선과 만나는 원 중 넓이가 최소인 경우는{" "}
                                    <strong className="text-white">직선에 접하는 경우</strong>입니다.
                                    따라서 먼저 접한다는 사실을 이용하여{" "}
                                    <InlineMath math="d=r" />을 적용한 후,
                                    점과 직선 사이의 거리 공식을 사용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{최소 넓이}
\rightarrow
\text{접한다}
\rightarrow
d=r
\rightarrow
|k|
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
                                그림과 같이 좌표평면 위에 원{" "}
                                <InlineMath math="C:(x-a)^2+(y-a)^2=18" />이 있다.
                                원 <InlineMath math="C" />의 중심과 직선{" "}
                                <InlineMath math="y=3x" /> 사이의 거리가{" "}
                                <InlineMath math="\sqrt{10}" />이고 직선{" "}
                                <InlineMath math="y=kx" />가 원 <InlineMath math="C" />에 접할 때,
                                상수 <InlineMath math="k" />의 값을 구하시오.<br />
                                <InlineMath math="(a>0,\ 0<k<1)" />
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.19_6.png"
                                alt="중심이 (a,a)인 원과 두 직선 y=3x, y=kx"
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
                                원의 중심은
                            </p>

                            <BlockMath math="(a,a)" />

                            <p className="leading-8">
                                이고 반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
r=\sqrt{18}=3\sqrt2
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 원의 중심 구하기
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="y=3x" />를 일반형으로 나타내면
                                </p>

                                <BlockMath math="3x-y=0" />

                                <p className="leading-8">
                                    중심 <InlineMath math="(a,a)" />에서 이 직선까지의 거리가{" "}
                                    <InlineMath math="\sqrt{10}" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|3a-a|}{\sqrt{3^2+(-1)^2}}
=
\sqrt{10}
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{2a}{\sqrt{10}}
=
\sqrt{10}
`}
                                />

                                <BlockMath math="2a=10" />

                                <BlockMath math="a=5" />

                                <p className="leading-8">
                                    따라서 원의 중심은
                                </p>

                                <BlockMath math="(5,5)" />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 접선의 조건 이용하기
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="y=kx" />를 일반형으로 나타내면
                                </p>

                                <BlockMath math="kx-y=0" />

                                <p className="leading-8">
                                    이 직선이 원에 접하므로
                                    중심에서 직선까지의 거리는 반지름과 같습니다.
                                </p>

                                <BlockMath math="d=r" />

                                <BlockMath
                                    math={String.raw`
\frac{|5k-5|}
{\sqrt{k^2+1}}
=
3\sqrt2
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="0<k<1" />이므로{" "}
                                    <InlineMath math="5k-5<0" />입니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{5(1-k)}
{\sqrt{k^2+1}}
=
3\sqrt2
`}
                                />

                                <p className="leading-8">
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
25(1-k)^2
=
18(k^2+1)
`}
                                />

                                <BlockMath
                                    math={String.raw`
25-50k+25k^2
=
18k^2+18
`}
                                />

                                <BlockMath
                                    math={String.raw`
7k^2-50k+7=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(7k-1)(k-7)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=\frac17,\ 7
`}
                                />

                            </div>

                            <p className="leading-8">
                                그런데 <InlineMath math="0<k<1" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
k=\frac17
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\frac17}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 중심에서 <InlineMath math="y=3x" />까지의 거리를 이용하여
                                    중심의 좌표를 결정합니다.
                                    그다음 <InlineMath math="y=kx" />가 원에 접하므로{" "}
                                    <InlineMath math="d=r" />을 이용하여{" "}
                                    <InlineMath math="k" />를 구합니다.
                                </p>

                                <div className="mt-4 space-y-2 leading-8 text-gray-300">
                                    <p>
                                        ① 중심과 직선 사이의 거리로 <InlineMath math="a" />를 구한다.
                                    </p>
                                    <p>
                                        ② 원의 반지름을 구한다.
                                    </p>
                                    <p>
                                        ③ 접선이므로 <InlineMath math="d=r" />을 적용한다.
                                    </p>
                                    <p>
                                        ④ <InlineMath math="0<k<1" />을 이용하여 답을 결정한다.
                                    </p>
                                </div>

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
                            좌표평면에서 두 직선{" "}
                            <InlineMath math="y=2x-9,\;y=-2x-9" />
                            에 모두 접하고
                            점 <InlineMath math="(-3,0)" />을 지나는
                            서로 다른 두 원의 중심을 각각{" "}
                            <InlineMath math="O_1,\;O_2" />라 할 때,
                            선분 <InlineMath math="O_1O_2" />의 길이를{" "}
                            <InlineMath math="l" />이라 하자.
                            이때 <InlineMath math="4l" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 직선에 모두 접하는 원의 중심은
                                두 직선의 각의 이등분선 위에 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
2x-y-9=0,\qquad
2x+y+9=0
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac{2x-y-9}{\sqrt5}
=
\pm
\frac{2x+y+9}{\sqrt5}
`}
                            />

                            <BlockMath
                                math={String.raw`
\therefore
x=0,\qquad
y=-9
`}
                            />

                            <p className="leading-8">
                                따라서 중심은{" "}
                                <InlineMath math="x=0" /> 또는{" "}
                                <InlineMath math="y=-9" /> 위에 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    중심은 어느 이등분선 위에 있는가?
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="(-3,0)" />은
                                    두 직선이 이루는 V자 모양의 위쪽에 있으므로
                                    원의 중심도 위쪽 각의 이등분선인{" "}
                                    <InlineMath math="x=0" /> 위에 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
O=(0,t)
`}
                                />

                            </div>

                            <p className="leading-8">
                                반지름은 중심에서 직선까지의 거리입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
r
=
\frac{|t+9|}{\sqrt5}
`}
                            />

                            <p className="leading-8">
                                또한 원은{" "}
                                <InlineMath math="(-3,0)" />을 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
r^2
=
3^2+t^2
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac{(t+9)^2}{5}
=
9+t^2
`}
                            />

                            <BlockMath
                                math={String.raw`
2t^2-9t-18=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(2t+3)(t-6)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
t=6,\qquad
t=-\frac32
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
O_1=(0,6),\qquad
O_2=\left(0,-\frac32\right)
`}
                            />

                            <BlockMath
                                math={String.raw`
l
=
6+\frac32
=
\frac{15}{2}
`}
                            />

                            <BlockMath
                                math={String.raw`
4l
=
30
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math={String.raw`\boxed{30}`} />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>① 두 직선에 모두 접하면 중심은 각의 이등분선 위에 있다.</p>

                                    <p>② 중심을 변수로 놓고 반지름을 직선까지의 거리로 나타낸다.</p>

                                    <p>③ 점을 지난다는 조건으로 반지름을 좌표거리로 나타낸다.</p>

                                    <p>④ 두 반지름을 같게 두어 중심을 구한다.</p>

                                </div>

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
                            세 점{" "}
                            <InlineMath math="A(-3,-2),\;B(-2,1),\;C(0,1)" />
                            을 지나는 원이
                            직선 <InlineMath math="2x-y+k=0" />
                            와 서로 다른 두 점에서 만나도록 하는
                            자연수 <InlineMath math="k" />의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 세 점을 지나는 원의 방정식을 구합니다.
                            </p>

                            <BlockMath math={String.raw`
x^2+y^2+Dx+Ey+F=0
`} />

                            <p className="leading-8">
                                세 점을 대입하면
                            </p>

                            <BlockMath math={String.raw`
\begin{cases}
13-3D-2E+F=0\\
5-2D+E+F=0\\
1+E+F=0
\end{cases}
`} />

                            <p className="leading-8">
                                첫 번째 식과 두 번째 식의 차를 이용하면
                            </p>

                            <BlockMath math={String.raw`
D=2
`} />

                            <p className="leading-8">
                                이를 이용하여 나머지 식을 정리하면
                            </p>

                            <BlockMath math={String.raw`
E=2,\qquad F=-3
`} />

                            <p className="leading-8">
                                따라서 원의 방정식은
                            </p>

                            <BlockMath math={String.raw`
x^2+y^2+2x+2y-3=0
`} />

                            <BlockMath math={String.raw`
(x+1)^2+(y+1)^2=5
`} />

                            <p className="leading-8">
                                즉, 중심은{" "}
                                <InlineMath math="(-1,-1)" />,
                                반지름은{" "}
                                <InlineMath math="\sqrt5" />
                                입니다.
                            </p>

                            <p className="leading-8">
                                중심에서 직선{" "}
                                <InlineMath math="2x-y+k=0" />
                                까지의 거리는
                            </p>

                            <BlockMath math={String.raw`
d=
\frac{|2(-1)-(-1)+k|}{\sqrt5}
=
\frac{|k-1|}{\sqrt5}
`} />

                            <p className="leading-8">
                                원과 직선이 서로 다른 두 점에서 만나려면
                            </p>

                            <BlockMath math={String.raw`
d<r
`} />

                            <BlockMath math={String.raw`
\frac{|k-1|}{\sqrt5}<\sqrt5
`} />

                            <BlockMath math={String.raw`
|k-1|<5
`} />

                            <BlockMath math={String.raw`
-5<k-1<5
`} />

                            <BlockMath math={String.raw`
-4<k<6
`} />

                            <p className="leading-8">
                                자연수 <InlineMath math="k" />는
                            </p>

                            <BlockMath math={String.raw`
k=1,\;2,\;3,\;4,\;5
`} />

                            <p className="leading-8">
                                따라서 최댓값은
                            </p>

                            <BlockMath math={String.raw`
\boxed{5}
`} />

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
                            실수 <InlineMath math="t\;(t>0)" />에 대하여 좌표평면 위에
                            네 점 <InlineMath math="A(1,5),\;B(7,5),\;C(3t,0),\;D(0,t)" />가 있다.
                            선분 <InlineMath math="CD" /> 위에{" "}
                            <InlineMath math="\angle APB=90^\circ" />인 점{" "}
                            <InlineMath math="P" />가 존재하도록 하는{" "}
                            <InlineMath math="t" />의 최댓값을 <InlineMath math="M" />,
                            최솟값을 <InlineMath math="m" />이라 할 때,{" "}
                            <InlineMath math="M-m" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="\angle APB=90^\circ" />이므로
                                점 <InlineMath math="P" />는
                                <strong className="text-yellow-300">
                                    {" "}선분 AB를 지름으로 하는 원
                                </strong>
                                위에 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 점 P가 움직이는 원
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="A(1,5),\;B(7,5)" />이므로
                                    선분 <InlineMath math="AB" />의 중점은
                                </p>

                                <BlockMath math="(4,5)" />

                                <p className="leading-8">
                                    이고
                                    <InlineMath math="AB=6" />이므로 반지름은
                                </p>

                                <BlockMath math="r=3" />

                                <p className="leading-8">
                                    따라서 점 <InlineMath math="P" />의 자취는
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-4)^2+(y-5)^2=9
`}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 직선 CD의 방정식
                                </p>

                                <p className="leading-8">
                                    직선 <InlineMath math="CD" />는
                                    두 점 <InlineMath math="C(3t,0),\;D(0,t)" />를 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{x}{3t}+\frac{y}{t}=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
x+3y-3t=0
`}
                                />

                            </div>

                            <p className="leading-8">
                                원 위의 점 <InlineMath math="P" />가 선분{" "}
                                <InlineMath math="CD" /> 위에 존재하려면
                                직선 <InlineMath math="CD" />가 원과 만나야 합니다.
                            </p>

                            <p className="leading-8">
                                원은 모두 제1사분면에 있고{" "}
                                <InlineMath math="C,\;D" />는 양의 좌표축 위에 있으므로,
                                이 직선과 원의 교점은 선분 <InlineMath math="CD" /> 위에 있습니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 원과 직선이 만나기 위한 조건
                                </p>

                                <p className="leading-8">
                                    원의 중심 <InlineMath math="(4,5)" />에서
                                    직선 <InlineMath math="x+3y-3t=0" />까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|4+3\cdot5-3t|}
{\sqrt{1^2+3^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{|19-3t|}{\sqrt{10}}
`}
                                />

                                <p className="leading-8">
                                    직선이 원과 만나려면
                                </p>

                                <BlockMath math="d\le r" />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|19-3t|}{\sqrt{10}}
\le 3
`}
                                />

                                <BlockMath
                                    math={String.raw`
|19-3t|
\le 3\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
-3\sqrt{10}
\le
19-3t
\le
3\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{19}{3}-\sqrt{10}
\le
t
\le
\frac{19}{3}+\sqrt{10}
`}
                                />

                            </div>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
m=\frac{19}{3}-\sqrt{10},
\qquad
M=\frac{19}{3}+\sqrt{10}
`}
                            />

                            <BlockMath
                                math={String.raw`
M-m
=
2\sqrt{10}
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{2\sqrt{10}}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① <InlineMath math="\angle APB=90^\circ" />이면
                                        점 <InlineMath math="P" />는{" "}
                                        <InlineMath math="AB" />를 지름으로 하는 원 위에 있다.
                                    </p>

                                    <p>
                                        ② 점 <InlineMath math="P" />가 선분{" "}
                                        <InlineMath math="CD" />에도 있어야 하므로
                                        원과 직선 <InlineMath math="CD" />의 위치관계로 바꾼다.
                                    </p>

                                    <p>
                                        ③ 원과 직선이 만나려면{" "}
                                        <InlineMath math="d\le r" />을 이용한다.
                                    </p>

                                </div>

                            </div>

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
                            직선 <InlineMath math="x-3y+k=0" />과 두 원
                        </p>

                        <BlockMath
                            math={String.raw`
(x+1)^2+y^2=10,\qquad
(x+1)^2+(y+1)^2=10
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 교점의 개수를 각각 <InlineMath math="a,\ b" />라 할 때,{" "}
                            <InlineMath math="a+b=3" />을 만족시키는 모든 상수{" "}
                            <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 원의 반지름은 모두
                            </p>

                            <BlockMath math="r=\sqrt{10}" />

                            <p className="leading-8">
                                이고 중심은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
O_1(-1,0),\qquad O_2(-1,-1)
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    교점의 개수의 합이 3
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    하나의 직선과 하나의 원의 교점은{" "}
                                    <InlineMath math="0,\ 1,\ 2" />개 중 하나입니다.
                                    따라서 <InlineMath math="a+b=3" />이 되려면
                                    <strong className="text-white">
                                        {" "}한 원에는 접하고 다른 원과는 두 점에서 만나야
                                    </strong>
                                    합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(a,b)=(1,2)\quad\text{또는}\quad(2,1)
`}
                                />

                            </div>

                            {/* 첫 번째 원에 접하는 경우 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 첫 번째 원에 접하는 경우
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="O_1(-1,0)" />에서
                                    직선까지의 거리가 반지름과 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|-1+k|}{\sqrt{10}}
=
\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
|k-1|=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=11,\ -9
`}
                                />

                                <p className="leading-8">
                                    이제 두 번째 원과 두 점에서 만나야 합니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=11" />일 때
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|11+2|}{\sqrt{10}}
=
\frac{13}{\sqrt{10}}
>
\sqrt{10}
`}
                                />

                                <p className="leading-8">
                                    이므로 두 번째 원과 만나지 않습니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=-9" />일 때
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|-9+2|}{\sqrt{10}}
=
\frac7{\sqrt{10}}
<
\sqrt{10}
`}
                                />

                                <p className="leading-8">
                                    이므로 두 번째 원과 두 점에서 만납니다.
                                </p>

                                <BlockMath math="k=-9" />

                            </div>

                            {/* 두 번째 원에 접하는 경우 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 두 번째 원에 접하는 경우
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="O_2(-1,-1)" />에서
                                    직선까지의 거리가 반지름과 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|-1-3(-1)+k|}{\sqrt{10}}
=
\sqrt{10}
`}
                                />

                                <BlockMath
                                    math={String.raw`
|k+2|=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=8,\ -12
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="k=8" />일 때 첫 번째 원까지의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|8-1|}{\sqrt{10}}
=
\frac7{\sqrt{10}}
<
\sqrt{10}
`}
                                />

                                <p className="leading-8">
                                    이므로 첫 번째 원과 두 점에서 만납니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="k=-12" />일 때
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|-12-1|}{\sqrt{10}}
=
\frac{13}{\sqrt{10}}
>
\sqrt{10}
`}
                                />

                                <p className="leading-8">
                                    이므로 첫 번째 원과 만나지 않습니다.
                                </p>

                                <BlockMath math="k=8" />

                            </div>

                            <p className="leading-8">
                                따라서 조건을 만족시키는 <InlineMath math="k" />는
                            </p>

                            <BlockMath
                                math={String.raw`
k=-9,\ 8
`}
                            />

                            <p className="leading-8">
                                이므로 그 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-9+8=-1
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

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 교점의 개수의 합이 <InlineMath math="3" />이면
                                        한 원에는 접하고 다른 원과는 두 점에서 만나야 합니다.
                                    </p>

                                    <p>
                                        ② 먼저 <InlineMath math="d=r" />을 이용하여
                                        접하는 경우의 <InlineMath math="k" />를 구합니다.
                                    </p>

                                    <p>
                                        ③ 각각의 <InlineMath math="k" />에 대하여
                                        다른 원에서는 <InlineMath math="d<r" />인지 확인합니다.
                                    </p>

                                </div>

                            </div>

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
                            직선 <InlineMath math="y=2x+k" />가
                            원 <InlineMath math="x^2+y^2-8x-4y+11=0" />
                            에 의하여 잘린 현의 길이가{" "}
                            <InlineMath math="4" />일 때,
                            상수 <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 원의 중심과 반지름을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(x-4)^2+(y-2)^2=9
`}
                            />

                            <BlockMath
                                math={String.raw`
O(4,2),\qquad r=3
`}
                            />

                            <p className="leading-8">
                                현의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
2\sqrt{r^2-d^2}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
2\sqrt{3^2-d^2}=4
`}
                            />

                            <BlockMath
                                math={String.raw`
9-d^2=4
`}
                            />

                            <BlockMath
                                math={String.raw`
d=\sqrt5
`}
                            />

                            <p className="leading-8">
                                직선을 일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
2x-y+k=0
`}
                            />

                            <p className="leading-8">
                                중심에서 직선까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|2\cdot4-2+k|}{\sqrt5}
=
\sqrt5
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac{|k+6|}{\sqrt5}
=
\sqrt5
`}
                            />

                            <BlockMath
                                math={String.raw`
|k+6|=5
`}
                            />

                            <BlockMath
                                math={String.raw`
k=-1,\,-11
`}
                            />

                            <p className="leading-8">
                                따라서 상수 <InlineMath math="k" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-1+(-11)=-12
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-12}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 원의 중심과 반지름을 구한다.
                                    </p>

                                    <p>
                                        ② 현의 길이 공식
                                        <InlineMath math="2\sqrt{r^2-d^2}" />
                                        로 중심과 직선 사이의 거리{" "}
                                        <InlineMath math="d" />
                                        를 구한다.
                                    </p>

                                    <p>
                                        ③ 점과 직선 사이의 거리 공식을 이용하여{" "}
                                        <InlineMath math="k" />
                                        를 구한다.
                                    </p>

                                </div>

                            </div>

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
                            원 <InlineMath math="x^2+y^2-4y=0" />과
                            직선 <InlineMath math="y=mx-4" />의 두 교점{" "}
                            <InlineMath math="P,\ Q" />와 원의 중심{" "}
                            <InlineMath math="C" />를 세 꼭짓점으로 하는
                            삼각형 <InlineMath math="CPQ" />가 정삼각형일 때,
                            양수 <InlineMath math="m" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 원의 중심과 반지름을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+(y-2)^2=4
`}
                            />

                            <BlockMath
                                math={String.raw`
C(0,2),\qquad r=2
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 정삼각형의 조건
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P,\ Q" />는 원 위의 점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
CP=CQ=2
`}
                                />

                                <p className="leading-8">
                                    삼각형 <InlineMath math="CPQ" />가 정삼각형이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
PQ=2
`}
                                />

                                <p className="leading-8">
                                    즉, 직선이 원에서 잘라내는 현의 길이가{" "}
                                    <InlineMath math="2" />입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 중심에서 직선까지의 거리
                                </p>

                                <p className="leading-8">
                                    중심에서 직선까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면 현의 길이는
                                </p>

                                <BlockMath
                                    math={String.raw`
2\sqrt{r^2-d^2}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\sqrt{2^2-d^2}=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sqrt{4-d^2}=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
d^2=3
`}
                                />

                                <BlockMath
                                    math={String.raw`
d=\sqrt3
`}
                                />

                            </div>

                            <p className="leading-8">
                                직선 <InlineMath math="y=mx-4" />를 일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
mx-y-4=0
`}
                            />

                            <p className="leading-8">
                                중심 <InlineMath math="C(0,2)" />에서 이 직선까지의 거리는{" "}
                                <InlineMath math="\sqrt3" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|m\cdot0-2-4|}
{\sqrt{m^2+1}}
=
\sqrt3
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac6{\sqrt{m^2+1}}
=
\sqrt3
`}
                            />

                            <p className="leading-8">
                                양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{36}{m^2+1}=3
`}
                            />

                            <BlockMath
                                math={String.raw`
m^2+1=12
`}
                            />

                            <BlockMath
                                math={String.raw`
m^2=11
`}
                            />

                            <p className="leading-8">
                                <InlineMath math="m" />은 양수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
m=\sqrt{11}
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\sqrt{11}}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 원의 반지름이 <InlineMath math="2" />이므로{" "}
                                        <InlineMath math="CP=CQ=2" />이다.
                                    </p>

                                    <p>
                                        ② 정삼각형이므로 현
                                        <InlineMath math="PQ" />의 길이도{" "}
                                        <InlineMath math="2" />이다.
                                    </p>

                                    <p>
                                        ③ 현의 길이로 중심과 직선 사이의 거리{" "}
                                        <InlineMath math="d" />를 구한다.
                                    </p>

                                    <p>
                                        ④ 점과 직선 사이의 거리 공식을 이용하여{" "}
                                        <InlineMath math="m" />을 구한다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 13 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 13
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 좌표평면에서 원{" "}
                                <InlineMath math="x^2+y^2-4x-6y+k=0" />과
                                직선 <InlineMath math="3x-y+7=0" />이
                                두 점 <InlineMath math="A,\ B" />에서 만난다.{" "}
                                <InlineMath math="\overline{AB}=6" />일 때,
                                상수 <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.19_13.png"
                                alt="원과 직선 3x-y+7=0이 만드는 길이 6인 현 AB"
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
                                먼저 원의 중심과 반지름을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{중심 }(2,3)
`}
                            />

                            <BlockMath
                                math={String.raw`
r^2
=
2^2+3^2-k
=
13-k
`}
                            />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 중심에서 직선까지의 거리
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="(2,3)" />에서
                                    직선 <InlineMath math="3x-y+7=0" />까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|3\cdot2-3+7|}
{\sqrt{3^2+(-1)^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{10}{\sqrt{10}}
=
\sqrt{10}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 현의 길이 이용하기
                                </p>

                                <p className="leading-8">
                                    현 <InlineMath math="AB" />의 길이가{" "}
                                    <InlineMath math="6" />이므로 반현의 길이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{AB}{2}=3
`}
                                />

                                <p className="leading-8">
                                    중심에서 현에 내린 수선은 현을 이등분하므로
                                    피타고라스 정리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
d^2+3^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2
=
10+9
=
19
`}
                                />

                            </div>

                            <p className="leading-8">
                                한편
                            </p>

                            <BlockMath
                                math={String.raw`
r^2=13-k
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
13-k=19
`}
                            />

                            <BlockMath
                                math={String.raw`
k=-6
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-6}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 원의 중심에서 직선까지의 거리{" "}
                                        <InlineMath math="d" />를 구한다.
                                    </p>

                                    <p>
                                        ② 현의 길이가 <InlineMath math="6" />이므로
                                        반현의 길이는 <InlineMath math="3" />이다.
                                    </p>

                                    <p>
                                        ③ 중심에서 현에 내린 수선은 현을 이등분하므로
                                        피타고라스 정리를 이용한다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
r^2=d^2+\left(\frac{AB}{2}\right)^2
`}
                                    />

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
                                좌표평면 위에 원{" "}
                                <InlineMath math="C:x^2+y^2=16" />과<br />
                                직선 <InlineMath math="l:2x-2y+4\sqrt6=0" />이 있다.
                                원 <InlineMath math="C" />와 직선 <InlineMath math="l" />이 만나는
                                두 점을 각각 <InlineMath math="A,\ B" />라 할 때,
                                호 <InlineMath math="AB" />와 선분 <InlineMath math="AB" />로
                                둘러싸인 부분 중에서 원점 <InlineMath math="O" />를 포함하지 않는
                                부분의 넓이를 <InlineMath math="S" />라 하자.{" "}
                                <InlineMath math="S" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.19_14.png"
                                alt="원 x²+y²=16과 직선이 만드는 활꼴"
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
                                원의 중심은 <InlineMath math="O(0,0)" />이고 반지름은
                            </p>

                            <BlockMath math="r=4" />

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 중심에서 직선까지의 거리
                                </p>

                                <p className="leading-8">
                                    직선의 방정식을 간단히 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x-y+2\sqrt6=0
`}
                                />

                                <p className="leading-8">
                                    중심 <InlineMath math="O(0,0)" />에서 직선까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|2\sqrt6|}
{\sqrt{1^2+(-1)^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{2\sqrt6}{\sqrt2}
=
2\sqrt3
`}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 현의 길이와 중심각
                                </p>

                                <p className="leading-8">
                                    중심에서 현 <InlineMath math="AB" />에 내린 수선의 발을{" "}
                                    <InlineMath math="H" />라 하면 현을 이등분하므로,
                                    피타고라스 정리에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
AH
=
\sqrt{r^2-d^2}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\sqrt{4^2-(2\sqrt3)^2}
=
2
`}
                                />

                                <p className="leading-8">
                                    직각삼각형 <InlineMath math="OHA" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
OH=2\sqrt3,\qquad
AH=2,\qquad
OA=4
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\angle AOH=30^\circ
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\angle AOB
=
60^\circ
=
\frac{\pi}{3}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 활꼴의 넓이
                                </p>

                                <p className="leading-8">
                                    원점을 포함하지 않는 부분은
                                    <strong className="text-yellow-300">
                                        {" "}부채꼴 AOB에서 삼각형 AOB를 뺀 부분
                                    </strong>
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    부채꼴 <InlineMath math="AOB" />의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12\cdot4^2\cdot\frac{\pi}{3}
=
\frac{8\pi}{3}
`}
                                />

                                <p className="leading-8">
                                    삼각형 <InlineMath math="AOB" />의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12\cdot4\cdot4\cdot
\sin60^\circ
=
4\sqrt3
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
S
=
\frac{8\pi}{3}
-
4\sqrt3
`}
                                />

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\frac{8\pi}{3}-4\sqrt3}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① 중심에서 직선까지의 거리{" "}
                                        <InlineMath math="d" />를 구한다.
                                    </p>

                                    <p>
                                        ② 반지름과 <InlineMath math="d" />로 직각삼각형을 만들어
                                        중심각을 구한다.
                                    </p>

                                    <p>
                                        ③ 원점을 포함하지 않는 활꼴의 넓이는
                                        <strong className="text-white">
                                            {" "}부채꼴의 넓이 - 삼각형의 넓이
                                        </strong>
                                        로 구한다.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 15 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 15
                    </h3>

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                오른쪽 그림과 같이 중심이 제2사분면 위에 있고{" "}
                                <InlineMath math="x" />축과 점 <InlineMath math="P" />에서 접하며{" "}
                                <InlineMath math="y" />축과 두 점{" "}
                                <InlineMath math="Q,\ R" />에서 만나는 원이 있다.
                                점 <InlineMath math="P" />를 지나고 기울기가{" "}
                                <InlineMath math="-3" />인 직선이 원과 만나는 점 중{" "}
                                <InlineMath math="P" />가 아닌 점을{" "}
                                <InlineMath math="S" />라 할 때,{" "}
                                <InlineMath math="\overline{QR}=\overline{PS}=6" />을 만족시킨다.
                                원점 <InlineMath math="O" />와 원의 중심 사이의 거리를 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.19_15.png"
                                alt="x축에 접하는 원과 두 현 QR, PS"
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
                                원이 <InlineMath math="x" />축에 접하고 중심이 제2사분면에 있으므로
                                중심을
                            </p>

                            <BlockMath
                                math={String.raw`
C(-a,r)\qquad(a>0)
`}
                            />

                            <p className="leading-8">
                                로 두면 접점은
                            </p>

                            <BlockMath math="P(-a,0)" />

                            <p className="leading-8">
                                입니다.
                            </p>

                            {/* PS 이용 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 현 PS를 이용하여 반지름 구하기
                                </p>

                                <p className="leading-8">
                                    점 <InlineMath math="P(-a,0)" />를 지나고 기울기가{" "}
                                    <InlineMath math="-3" />인 직선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-3(x+a)
`}
                                />

                                <BlockMath
                                    math={String.raw`
3x+y+3a=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    중심 <InlineMath math="C(-a,r)" />에서 이 직선까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|3(-a)+r+3a|}
{\sqrt{3^2+1^2}}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{r}{\sqrt{10}}
`}
                                />

                                <p className="leading-8">
                                    현 <InlineMath math="PS" />의 길이가{" "}
                                    <InlineMath math="6" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\sqrt{r^2-d^2}=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
2\sqrt{
r^2-\frac{r^2}{10}
}
=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
2\sqrt{\frac{9r^2}{10}}
=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{6r}{\sqrt{10}}=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=\sqrt{10}
`}
                                />

                            </div>

                            {/* QR 이용 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 현 QR을 이용하여 중심의 x좌표 구하기
                                </p>

                                <p className="leading-8">
                                    현 <InlineMath math="QR" />은{" "}
                                    <InlineMath math="y" />축 위에 있습니다.
                                    중심 <InlineMath math="C(-a,r)" />에서{" "}
                                    <InlineMath math="y" />축까지의 거리는{" "}
                                    <InlineMath math="a" />입니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="QR=6" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\sqrt{r^2-a^2}=6
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="r^2=10" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2\sqrt{10-a^2}=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
10-a^2=9
`}
                                />

                                <BlockMath
                                    math={String.raw`
a^2=1
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a>0" />이므로
                                </p>

                                <BlockMath math="a=1" />

                                <p className="leading-8">
                                    따라서 원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
C(-1,\sqrt{10})
`}
                                />

                            </div>

                            {/* 원점과 중심 사이 거리 */}
                            <p className="leading-8">
                                원점 <InlineMath math="O(0,0)" />와 중심{" "}
                                <InlineMath math="C(-1,\sqrt{10})" /> 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
OC
=
\sqrt{(-1)^2+(\sqrt{10})^2}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\sqrt{11}
`}
                            />

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\sqrt{11}}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="space-y-2 leading-8 text-gray-300">

                                    <p>
                                        ① <InlineMath math="x" />축에 접하고 중심이 제2사분면에 있으므로
                                        중심을 <InlineMath math="(-a,r)" />로 둔다.
                                    </p>

                                    <p>
                                        ② 현 <InlineMath math="PS=6" />을 이용하여
                                        먼저 반지름 <InlineMath math="r" />을 구한다.
                                    </p>

                                    <p>
                                        ③ 현 <InlineMath math="QR=6" />을 이용하여
                                        중심에서 <InlineMath math="y" />축까지의 거리{" "}
                                        <InlineMath math="a" />를 구한다.
                                    </p>

                                    <p>
                                        ④ 중심의 좌표를 구한 뒤 원점과의 거리를 구한다.
                                    </p>

                                </div>

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
                            • 원과 직선의 관계는
                            중심에서 직선까지의 거리{" "}
                            <InlineMath math="d" />와 반지름{" "}
                            <InlineMath math="r" />을 비교한다.
                        </p>

                        <BlockMath
                            math={String.raw`
d>r
\rightarrow
\text{만나지 않는다}
`}
                        />

                        <BlockMath
                            math={String.raw`
d=r
\rightarrow
\text{한 점에서 만난다 (접선)}
`}
                        />

                        <BlockMath
                            math={String.raw`
d<r
\rightarrow
\text{두 점에서 만난다 (할선)}
`}
                        />

                        <p>
                            • 접점에서 반지름과 접선은 서로 수직이다.
                        </p>

                        <p>
                            • 중심에서 현에 내린 수선은 현을 이등분한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\text{현의 길이}
=
2\sqrt{r^2-d^2}
`}
                        />

                        <p>
                            • 판별식으로도 위치관계를 판단할 수 있지만,
                            원의 성질을 이용하기 위해
                            중심에서 직선까지의 거리를 우선 사용한다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 1.20 원의 접선과 법선 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.20 원의 접선과 법선
                </h2>

                <p className="leading-8 text-gray-300">
                    원의 접선은 원과 한 점에서 만나는 직선입니다.
                    <br />
                    접선 문제에서는 접점, 법선, 반지름의 관계를 먼저 확인하면
                    접선의 방정식을 쉽게 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 접선과 법선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 접선, 접점, 법선
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.20_1.png"
                                    alt="원의 접선과 법선"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                    <p className="font-bold text-red-300">
                                        접선
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원과 <b>한 점에서 만나는 직선</b>입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        접점
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원과 접선이 만나는 점입니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        그림에서는 접점을{" "}
                                        <InlineMath math="T(a,b)" />
                                        로 나타냈습니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="font-bold text-blue-300">
                                        법선
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원의 접점을 지나고
                                        접선과 수직인 직선입니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        법선은 반드시
                                        <b> 원의 중심을 지납니다.</b>
                                    </p>

                                </div>

                            </div>

                        </div>

                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                가장 중요한 관계
                            </p>

                            <BlockMath
                                math={String.raw`
                                \text{접선}\perp\text{법선}
                                `}
                            />

                            <p className="leading-8 text-gray-300">
                                접점에서 중심으로 이은 반지름은 법선 위에 있으므로
                                접선과 수직입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                                OT\perp PT
                                `}
                            />

                        </div>

                    </div>

                    {/* 접선의 길이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 접선의 길이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원 밖의 점 <InlineMath math="P" />에서
                            원에 접선을 그어 접점을{" "}
                            <InlineMath math="T" />라 하겠습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            반지름 <InlineMath math="OT" />와 접선{" "}
                            <InlineMath math="PT" />는 서로 수직이므로
                            삼각형 <InlineMath math="OPT" />는 직각삼각형입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <BlockMath
                                math={String.raw`
OT\perp PT
`}
                            />

                            <BlockMath
                                math={String.raw`
OP^2=OT^2+PT^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                원의 반지름을 <InlineMath math="r" />라 하면{" "}
                                <InlineMath math="OT=r" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
PT^2=OP^2-r^2
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
PT=\sqrt{OP^2-r^2}
}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                접선의 길이를 구하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                접선의 길이는 별도의 공식을 외우기보다
                                <strong className="text-white">
                                    {" "}반지름과 접선이 만드는 직각삼각형에서
                                    피타고라스의 정리
                                </strong>
                                를 이용하면 됩니다.
                            </p>

                        </div>

                    </div>

                    {/* 접선 문제의 분류 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 조건에 따른 접선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            접선의 방정식을 구하는 문제는
                            어떤 조건이 주어졌는지에 따라 풀이 방법이 달라집니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                풀이의 우선순위
                            </p>

                            <div className="mt-3 space-y-2 text-gray-300">

                                <p className="leading-8">
                                    ① <b>접점이 주어졌는가?</b>
                                    → 접점을 이용하여 바로 접선을 구한다.
                                </p>

                                <p className="leading-8">
                                    ② <b>기울기가 주어졌는가?</b>
                                    → 기울기가 주어진 접선 공식을 이용한다.
                                </p>

                                <p className="leading-8">
                                    ③ <b>원 밖의 점이 주어졌는가?</b>
                                    → 접점을 두거나 기울기를 두고 구한다.
                                </p>

                            </div>

                        </div>

                    </div>

                    {/* 접점이 주어진 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3-1. 접점이 주어진 경우 (쪼개서 대입 : 이차는 곱으로 일차는 합으로)
                        </h3>

                        <p className="leading-8 text-gray-300">
                            접점이 주어지면 그 점에서의 접선은
                            <strong className="text-yellow-300">
                                {" "}하나만 존재
                            </strong>
                            합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            접선의 방정식은 원의 방정식에서
                            <strong className="text-white">
                                {" "}이차식은 곱으로, 일차식은 평균으로
                            </strong>
                            바꾼 뒤 접점의 좌표를 한쪽에 대입하여 구할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                바꾸는 방법
                            </p>

                            <BlockMath
                                math={String.raw`
x^2
\rightarrow
x\cdot x
`}
                            />

                            <BlockMath
                                math={String.raw`
y^2
\rightarrow
y\cdot y
`}
                            />

                            <BlockMath
                                math={String.raw`
x
\rightarrow
\frac{x+x}{2}
`}
                            />

                            <BlockMath
                                math={String.raw`
y
\rightarrow
\frac{y+y}{2}
`}
                            />

                            <BlockMath
                                math={String.raw`
(x-3)^2
\rightarrow
(x-3)(x-3)
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                생각하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 식을 두 개로 나눈 뒤,
                                <strong className="text-white">
                                    {" "}한쪽의 <InlineMath math="x" />와 <InlineMath math="y" />에 접점의 좌표를 넣는다
                                </strong>
                                고 생각하면 됩니다.
                            </p>

                        </div>



                        <h3 className="mb-4 text-2xl font-bold">

                        </h3>

                        {/* 예시 1 */}
                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-2xl  font-bold text-white">
                                예시 1
                            </p>

                            <p className="leading-8 text-gray-300">
                                원 <InlineMath math="x^2+y^2=4" /> 위의 점{" "}
                                <InlineMath math="(1,\sqrt3)" />에서의 접선의 방정식을 구해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                원의 방정식을 곱의 형태로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
x\cdot x+y\cdot y=4
`}
                            />

                            <p className="leading-8 text-gray-300">
                                한쪽에 접점{" "}
                                <InlineMath math="(1,\sqrt3)" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
1\cdot x+\sqrt3\,y=4
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 접선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{x+\sqrt3\,y=4}
`}
                            />

                        </div>

                        {/* 예시 2 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-2xl font-bold text-white">
                                예시 2
                            </p>

                            <p className="leading-8 text-gray-300">
                                원 <InlineMath math="x^2+y^2-2x=0" /> 위의 점{" "}
                                <InlineMath math="(1,1)" />에서의 접선의 방정식을 구해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                이차식은 곱으로, 일차식은 평균으로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
x\cdot x+y\cdot y
-
2\left(\frac{x+x}{2}\right)
=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                한쪽에 접점 <InlineMath math="(1,1)" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
x+y-(x+1)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
y-1=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{y=1}
`}
                            />

                        </div>

                        {/* 예시 3 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-2xl font-bold text-white">
                                예시 3
                            </p>

                            <p className="leading-8 text-gray-300">
                                원 <InlineMath math="(x-3)^2+y^2=9" /> 위의 점{" "}
                                <InlineMath math="(1,-\sqrt5)" />에서의 접선의 방정식을 구해 봅시다.
                            </p>

                            <p className="mt-4 leading-8 text-gray-300">
                                원의 방정식을 곱의 형태로 바꾸면
                            </p>

                            <BlockMath
                                math={String.raw`
(x-3)(x-3)+y\cdot y=9
`}
                            />

                            <p className="leading-8 text-gray-300">
                                한쪽에 접점{" "}
                                <InlineMath math="(1,-\sqrt5)" />을 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
(1-3)(x-3)
+
(-\sqrt5)y
=
9
`}
                            />

                            <BlockMath
                                math={String.raw`
-2(x-3)-\sqrt5\,y=9
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 접선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{-2(x-3)-\sqrt5\,y=9}
`}
                            />

                        </div>

                    </div>

                    {/* 기울기가 주어진 경우 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3-2. 기울기가 주어진 경우 (공식 이용)
                        </h3>

                        <p className="leading-8 text-gray-300">
                            접선의 기울기가 주어지면
                            <strong className="text-yellow-300">
                                {" "}서로 평행한 두 개의 접선
                            </strong>
                            이 존재합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            원의 중심과 반지름을 이용하여
                            기울기가 <InlineMath math="m" />인 접선의 방정식을
                            바로 구할 수 있습니다.
                        </p>

                        {/* 중심이 원점인 경우 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                중심이 원점인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                원
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=r^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에 접하고 기울기가 <InlineMath math="m" />인 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
y=mx\pm r\sqrt{m^2+1}
}
`}
                            />
                            <BlockMath
                                math={String.raw`
\begin{aligned}
&y
=
\text{기울기}\,
x

\pm\;
\text{반지름}
\sqrt{\text{기울기}^2+1}
\end{aligned}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        {/* 중심이 (a,b)인 경우 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                중심이 <InlineMath math="(a,b)" />인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                원
                            </p>

                            <BlockMath
                                math={String.raw`
(x-a)^2+(y-b)^2=r^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에 접하고 기울기가 <InlineMath math="m" />인 직선은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
y-b
=
m(x-a)
\pm
r\sqrt{m^2+1}
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
&y-\text{중심의 }y\text{좌표}
=
\text{기울기}\,
(x-\text{중심의 }x\text{좌표})

\pm\;
\text{반지름}
\sqrt{\text{기울기}^2+1}
\end{aligned}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                기억하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                원의 중심이 <InlineMath math="(a,b)" />이면 먼저
                            </p>

                            <BlockMath
                                math={String.raw`
y-b=m(x-a)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 쓰고, 뒤에
                            </p>

                            <BlockMath
                                math={String.raw`
\pm r\sqrt{m^2+1}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                을 붙인다고 생각하면 됩니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                왜 두 개의 접선이 생길까?
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 기울기를 가지면서 원의 양쪽에 하나씩 접할 수 있으므로{" "}
                                <InlineMath math="\pm" />에 의해 서로 평행한 두 접선이 생깁니다.
                            </p>

                        </div>

                    </div>


                    {/* 원 밖의 점에서 그은 접선 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3-3. 원 밖의 점에서 그은 접선
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원 밖의 한 점에서는 일반적으로
                            <strong className="text-yellow-300">
                                {" "}두 개의 접선
                            </strong>
                            을 그을 수 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이 경우에는 크게 두 가지 방법으로 접선의 방정식을 구할 수 있습니다.
                        </p>

                        {/* 방법 1 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                방법 1. 접점을 두고 구하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                접점을 <InlineMath math="T(a,b)" />라고 둡니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그러면 다음 두 조건을 이용할 수 있습니다.
                            </p>

                            <div className="mt-4 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    ① <InlineMath math="T(a,b)" />는
                                    <b> 원 위의 점</b>이다.
                                </p>

                                <p className="leading-8">
                                    ② 점 <InlineMath math="T(a,b)" />에서의 접선은
                                    <b> 주어진 원 밖의 점을 지난다.</b>
                                </p>

                            </div>

                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    가장 기본적인 방법
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    접점을 이용하는 방법은 접선이 세로선인 경우까지 포함하여
                                    사용할 수 있으므로 가장 기본적인 풀이입니다.
                                </p>

                            </div>

                        </div>

                        {/* 방법 2 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                방법 2. 접선의 기울기를 두고 구하기
                            </p>

                            <p className="leading-8 text-gray-300">
                                접선의 기울기를 <InlineMath math="m" />이라 두고
                                기울기가 주어진 접선의 방정식을 작성합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그 접선이 주어진 원 밖의 점을 지난다는 조건을 이용하면{" "}
                                <InlineMath math="m" />에 대한 이차방정식이 만들어집니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{접선의 방정식}
\rightarrow
\text{원 밖의 점 대입}
\rightarrow
m\text{에 대한 이차방정식}
`}
                            />

                            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-bold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    기울기 <InlineMath math="m" />을 사용하는 방법으로는
                                    <strong className="text-white">
                                        {" "}세로선인 접선
                                    </strong>
                                    을 나타낼 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 항상 사용할 수 있는 방법은
                                    <b> 접점을 두는 방법</b>입니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 예시문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            예시
                        </h3>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="P(3,-1)" />에서
                                원 <InlineMath math="x^2+y^2=5" />에 그은
                                두 접선의 방정식을 구하시오.
                            </p>

                        </div>

                        {/* 풀이 1 */}
                        <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 text-xl font-bold text-white">
                                풀이 1. 접점을 이용하는 방법
                            </p>

                            <p className="leading-8 text-gray-300">
                                접점을 <InlineMath math="T(a,b)" />라고 둡니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                원 <InlineMath math="x^2+y^2=5" /> 위의{" "}
                                <InlineMath math="T(a,b)" />에서의 접선은
                            </p>

                            <BlockMath
                                math={String.raw`
ax+by=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이 접선이 점 <InlineMath math="P(3,-1)" />을 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
3a-b=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                또한 접점 <InlineMath math="T(a,b)" />는 원 위의 점이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+b^2=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="3a-b=5" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
b=3a-5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 원의 식에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+(3a-5)^2=5
`}
                            />

                            <BlockMath
                                math={String.raw`
10a^2-30a+20=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a^2-3a+2=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(a-1)(a-2)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
a=1,\ 2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 접점은
                            </p>

                            <BlockMath
                                math={String.raw`
T_1(1,-2),\qquad T_2(2,1)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                각각의 접점을{" "}
                                <InlineMath math="ax+by=5" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
x-2y=5
`}
                            />

                            <p className="text-center font-bold text-gray-400">
                                또는
                            </p>

                            <BlockMath
                                math={String.raw`
2x+y=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        {/* 풀이 2 */}
                        <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-4 text-xl font-bold text-blue-300">
                                풀이 2. 기울기를 이용하는 방법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                점 <InlineMath math="P(3,-1)" />을 지나고
                                기울기가 <InlineMath math="m" />인 직선을 먼저 쓰면
                            </p>

                            <BlockMath
                                math={String.raw`
y+1=m(x-3)
`}
                            />

                            <BlockMath
                                math={String.raw`
mx-y-3m-1=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이 직선이 원에 접하므로
                                원점에서 직선까지의 거리가 반지름{" "}
                                <InlineMath math="\sqrt5" />와 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|3m+1|}
{\sqrt{m^2+1}}
=
\sqrt5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                양변을 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
(3m+1)^2
=
5(m^2+1)
`}
                            />

                            <BlockMath
                                math={String.raw`
9m^2+6m+1
=
5m^2+5
`}
                            />

                            <BlockMath
                                math={String.raw`
2m^2+3m-2=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(2m-1)(m+2)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
m=\frac12,\ -2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                각각{" "}
                                <InlineMath math="y+1=m(x-3)" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
y+1
=
\frac12(x-3)
`}
                            />

                            <BlockMath
                                math={String.raw`
x-2y=5
`}
                            />

                            <p className="text-center font-bold text-gray-400">
                                또는
                            </p>

                            <BlockMath
                                math={String.raw`
y+1=-2(x-3)
`}
                            />

                            <BlockMath
                                math={String.raw`
2x+y=5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                        {/* 정답 */}
                        <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="font-bold text-green-300">
                                따라서 두 접선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{x-2y=5}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{2x+y=5}
`}
                            />

                        </div>

                        {/* 두 풀이 비교 */}
                        <div className="mt-6 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-4 font-bold text-yellow-300">
                                두 풀이의 차이
                            </p>

                            <p className="leading-8 text-gray-300">
                                <strong className="text-white">
                                    접점을 이용하는 방법
                                </strong>
                                은 접점을 직접 찾아 접선의 방정식을 만드는 방법으로,
                                세로인 접선까지 모두 구할 수 있는 기본적인 방법입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <strong className="text-white">
                                    기울기를 이용하는 방법
                                </strong>
                                은 접선의 기울기 <InlineMath math="m" />을 구한 뒤
                                직선의 방정식을 만드는 방법입니다.
                                다만 세로인 접선은 기울기로 나타낼 수 없다는 점에 주의합니다.
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
                                원 <InlineMath math="x^2+y^2=r^2" /> 위의 점{" "}
                                <InlineMath math="(a,4)" />에서의 접선의 방정식이
                            </p>

                            <BlockMath math="x-\frac43y+b=0" />

                            <p className="leading-8 text-gray-300">
                                일 때, 상수 <InlineMath math="a,b,r" />에 대하여{" "}
                                <InlineMath math="a+3b+r" />의 값을 구하시오.{" "}
                                <InlineMath math="\;(r>0)" />
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원 <InlineMath math="x^2+y^2=r^2" /> 위의 점{" "}
                                    <InlineMath math="(a,4)" />에서의 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
ax+4y=r^2
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    주어진 접선의 방정식을 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
3x-4y+3b=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
-3x+4y-3b=0
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    두 직선은 같은 직선이므로 계수를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-3,\qquad r^2=3b
`}
                                />

                                <p>
                                    또한 점 <InlineMath math="(-3,4)" />는 원 위의 점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(-3)^2+4^2=r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
25=r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=5
`}
                                />

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
3b=25
`}
                                />

                                <BlockMath
                                    math={String.raw`
b=\frac{25}{3}
`}
                                />

                                <p>
                                    그러므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a+3b+r
=-3+25+5
=27
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{27}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                원{" "}
                                <InlineMath math="(x-2)^2+(y+1)^2=13" />
                                위의 점{" "}
                                <InlineMath math="(4,2)" />
                                에서의 접선과{" "}
                                <InlineMath math="x" />
                                축,{" "}
                                <InlineMath math="y" />
                                축으로 둘러싸인 도형의 넓이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원의 방정식을 이차식으로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-2)(x-2)+(y+1)(y+1)=13
`}
                                />

                                <p>
                                    접점{" "}
                                    <InlineMath math="(4,2)" />
                                    를 대입하면 접선의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
(4-2)(x-2)+(2+1)(y+1)=13
`}
                                />

                                <BlockMath
                                    math={String.raw`
2(x-2)+3(y+1)=13
`}
                                />

                                <BlockMath
                                    math={String.raw`
2x+3y-14=0
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    <InlineMath math="x" />축과의 교점은
                                </p>

                                <BlockMath
                                    math={String.raw`
y=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
2x-14=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(7,0)
`}
                                />

                                <p>
                                    <InlineMath math="y" />축과의 교점은
                                </p>

                                <BlockMath
                                    math={String.raw`
x=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
3y-14=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\left(0,\frac{14}{3}\right)
`}
                                />

                                <p>
                                    따라서 <InlineMath math="x" />축, <InlineMath math="y" />축과 이루는 삼각형의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12\times7\times\frac{14}{3}
=\frac{49}{3}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{\frac{49}{3}}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                원 <InlineMath math="x^2+y^2=10" /> 위의 점{" "}
                                <InlineMath math="(1,3)" />에서의 접선이
                                원
                            </p>

                            <BlockMath math="x^2+y^2-16x-8y+k=0" />

                            <p className="leading-8 text-gray-300">
                                과 접할 때, 상수 <InlineMath math="k" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원 <InlineMath math="x^2+y^2=10" /> 위의 점{" "}
                                    <InlineMath math="(1,3)" />에서의 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
1\cdot x+3\cdot y=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
x+3y-10=0
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    다른 원의 중심과 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
(8,4),\qquad
r=\sqrt{80-k}
`}
                                />

                                <p>
                                    접선과 원이 접하므로 중심에서 직선까지의 거리는 반지름과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|8+12-10|}{\sqrt{1^2+3^2}}
=\sqrt{80-k}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{10}{\sqrt{10}}
=\sqrt{80-k}
`}
                                />

                                <BlockMath
                                    math={String.raw`
\sqrt{10}
=\sqrt{80-k}
`}
                                />

                                <p>
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
10=80-k
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=70
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{70}
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
                                    그림과 같이 좌표평면에 원{" "}
                                    <InlineMath math="C:x^2+y^2=9" />과 점{" "}
                                    <InlineMath math="A(-3,0)" />이 있다.
                                    원 <InlineMath math="C" /> 위의 제1사분면의 점{" "}
                                    <InlineMath math="P" />에서의 접선이{" "}
                                    <InlineMath math="x" />축과 만나는 점을{" "}
                                    <InlineMath math="B" />, 점 <InlineMath math="P" />에서{" "}
                                    <InlineMath math="x" />축에 내린 수선의 발을{" "}
                                    <InlineMath math="H" />라 하자.<br />
                                    <InlineMath math="2\overline{AH}=\overline{HB}" />일 때,
                                    삼각형 <InlineMath math="PAB" />의 넓이를 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.20_4.png"
                                    alt="원 위의 점 P에서의 접선과 삼각형 PAB"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    제1사분면 위의 점 <InlineMath math="P" />의 좌표를
                                </p>

                                <BlockMath math="P(a,b)" />

                                <p>
                                    라 하겠습니다.
                                </p>

                                <p>
                                    점 <InlineMath math="P(a,b)" />는 원 위의 점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+b^2=9
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    원 <InlineMath math="x^2+y^2=9" /> 위의 점{" "}
                                    <InlineMath math="P(a,b)" />에서의 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
ax+by=9
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    접선과 <InlineMath math="x" />축의 교점이{" "}
                                    <InlineMath math="B" />이므로{" "}
                                    <InlineMath math="y=0" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
ax=9
`}
                                />

                                <BlockMath
                                    math={String.raw`
B\left(\frac{9}{a},0\right)
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    또한 <InlineMath math="H" />는 점{" "}
                                    <InlineMath math="P(a,b)" />에서{" "}
                                    <InlineMath math="x" />축에 내린 수선의 발이므로
                                </p>

                                <BlockMath math="H(a,0)" />

                                <p>
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        길이 조건 이용하기
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        점들의 위치를 이용하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AH=a+3
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
HB=\frac9a-a
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다.
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="2AH=HB" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2(a+3)=\frac9a-a
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        양변에 <InlineMath math="a" />를 곱하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2a^2+6a=9-a^2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
a^2+2a-3=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
(a-1)(a+3)=0
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        점 <InlineMath math="P" />는 제1사분면에 있으므로{" "}
                                        <InlineMath math="a>0" />입니다.
                                    </p>

                                    <BlockMath math="a=1" />

                                </div>

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
b^2=9-1=8
`}
                                />

                                <p>
                                    점 <InlineMath math="P" />는 제1사분면에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
b=2\sqrt2
`}
                                />

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
P(1,2\sqrt2)
`}
                                />

                                <p>
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
B\left(\frac91,0\right)=(9,0)
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
AB=9-(-3)=12
`}
                                />

                                <p>
                                    이고 삼각형 <InlineMath math="PAB" />의 높이는{" "}
                                    <InlineMath math="PH=2\sqrt2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
[\,\triangle PAB\,]
=
\frac12\cdot12\cdot2\sqrt2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=12\sqrt2
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{12\sqrt2}
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
                                직선 <InlineMath math="2x+y-3=0" />에 평행하고
                                원 <InlineMath math="x^2+y^2=25" />에 접하는 직선이
                                점 <InlineMath math="(-\sqrt5,a)" />를 지날 때,
                                모든 상수 <InlineMath math="a" />의 값의 합을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    직선 <InlineMath math="2x+y-3=0" />의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
-2
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    따라서 원 <InlineMath math="x^2+y^2=25" />에 접하는
                                    기울기 <InlineMath math="-2" />인 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
y=-2x\pm5\sqrt{(-2)^2+1}
`}
                                />

                                <BlockMath
                                    math={String.raw`
y=-2x\pm5\sqrt5
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    점 <InlineMath math="(-\sqrt5,a)" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-2(-\sqrt5)\pm5\sqrt5
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=2\sqrt5\pm5\sqrt5
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=7\sqrt5,\qquad
a=-3\sqrt5
`}
                                />

                                <p>
                                    따라서 모든 <InlineMath math="a" />의 값의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
7\sqrt5+(-3\sqrt5)
=4\sqrt5
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{4\sqrt5}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                중심이 원점인 원에 접하고{" "}
                                <InlineMath math="x" />
                                축의 양의 방향과 이루는 각의 크기가{" "}
                                <InlineMath math="30^\circ" />
                                인 직선이 점{" "}
                                <InlineMath math="(4\sqrt3,0)" />
                                을 지날 때, 이 원의 넓이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    직선의 기울기는
                                </p>

                                <BlockMath
                                    math={String.raw`
m=\tan30^\circ=\frac1{\sqrt3}
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    중심이 원점이고 반지름의 길이가{" "}
                                    <InlineMath math="r" />
                                    인 원에 접하는 기울기{" "}
                                    <InlineMath math="\frac1{\sqrt3}" />
                                    인 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
y=\frac1{\sqrt3}x
\pm
r\sqrt{\frac13+1}
`}
                                />

                                <BlockMath
                                    math={String.raw`
y=\frac1{\sqrt3}x
\pm
\frac{2r}{\sqrt3}
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    점{" "}
                                    <InlineMath math="(4\sqrt3,0)" />
                                    을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
0=
\frac1{\sqrt3}(4\sqrt3)
\pm
\frac{2r}{\sqrt3}
`}
                                />

                                <BlockMath
                                    math={String.raw`
0=4\pm\frac{2r}{\sqrt3}
`}
                                />

                                <p>
                                    반지름은 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
4-\frac{2r}{\sqrt3}=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
r=2\sqrt3
`}
                                />

                                <p>
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2
=
\pi(2\sqrt3)^2
=12\pi
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{12\pi}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="P(6,8)" />에서
                                원{" "}
                                <InlineMath math="x^2+y^2-6x-8y+16=0" />
                                에 그은 접선의 접점을{" "}
                                <InlineMath math="T" />
                                라 할 때,
                                선분{" "}
                                <InlineMath math="\overline{PT}" />
                                의 길이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원의 중심과 반지름은
                                </p>

                                <BlockMath
                                    math={String.raw`
O(3,4),\qquad r=3
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    중심과 점 <InlineMath math="P" /> 사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
OP
=
\sqrt{(6-3)^2+(8-4)^2}
=5
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    반지름은 접선과 수직이므로{" "}
                                    <InlineMath math="\triangle OPT" />
                                    는 직각삼각형입니다.
                                </p>

                                <p>
                                    피타고라스의 정리를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
PT^2=OP^2-OT^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=5^2-3^2
=25-9
=16
`}
                                />

                                <BlockMath
                                    math={String.raw`
PT=4
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{4}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                좌표평면에서 원 <InlineMath math="x^2+y^2=10" /> 위의 점 중
                                제1사분면에 있는 점 <InlineMath math="P" />에서의 접선이
                                점 <InlineMath math="(0,5)" />를 지날 때,
                                점 <InlineMath math="P" />의 <InlineMath math="x" />좌표를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    점 <InlineMath math="P" />의 좌표를
                                </p>

                                <BlockMath math="P(a,b)" />

                                <p>
                                    라 하겠습니다.
                                </p>

                                <p>
                                    원 <InlineMath math="x^2+y^2=10" /> 위의 점{" "}
                                    <InlineMath math="(a,b)" />에서의 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
ax+by=10
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    접선이 점 <InlineMath math="(0,5)" />를 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
5b=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
b=2
`}
                                />

                                <p>
                                    또한 점 <InlineMath math="P" />는 원 위의 점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+b^2=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
a^2+4=10
`}
                                />

                                <BlockMath
                                    math={String.raw`
a^2=6
`}
                                />

                                <p>
                                    점 <InlineMath math="P" />는 제1사분면에 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=\sqrt6
`}
                                />

                                <p>
                                    따라서 점 <InlineMath math="P" />의{" "}
                                    <InlineMath math="x" />좌표는
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{\sqrt6}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="P(-2,4)" />에서
                                원 <InlineMath math="x^2+y^2=2" />에 그은 두 접선이{" "}
                                <InlineMath math="y" />축과 만나는 두 점을{" "}
                                <InlineMath math="A,\ B" />라 할 때,
                                삼각형 <InlineMath math="PAB" />의 넓이를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    접점을 <InlineMath math="T(a,b)" />라 하면
                                    원 <InlineMath math="x^2+y^2=2" /> 위의 점{" "}
                                    <InlineMath math="(a,b)" />에서의 접선은
                                </p>

                                <BlockMath
                                    math={String.raw`
ax+by=2
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    이 접선이 점 <InlineMath math="P(-2,4)" />를 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
-2a+4b=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
-a+2b=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=2b-1
`}
                                />

                                <p>
                                    또한 접점 <InlineMath math="T(a,b)" />는
                                    원 위의 점이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a^2+b^2=2
`}
                                />

                                <p>
                                    <InlineMath math="a=2b-1" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(2b-1)^2+b^2=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
5b^2-4b-1=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(5b+1)(b-1)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
b=1,\;-\frac15
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="y" />축과 만나는 점 구하기
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        접선{" "}
                                        <InlineMath math="ax+by=2" />가{" "}
                                        <InlineMath math="y" />축과 만날 때는{" "}
                                        <InlineMath math="x=0" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
by=2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
y=\frac2b
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서{" "}
                                        <InlineMath math="b=1" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y=2
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="b=-\frac15" />일 때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
y=-10
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A(0,2),\qquad B(0,-10)
`}
                                    />

                                </div>

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
AB=2-(-10)=12
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    점 <InlineMath math="P(-2,4)" />에서{" "}
                                    <InlineMath math="y" />축까지의 거리는{" "}
                                    <InlineMath math="2" />이므로,
                                    삼각형 <InlineMath math="PAB" />의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12\cdot12\cdot2
=12
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{12}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                좌표평면 위의 점{" "}
                                <InlineMath math="(3,-5)" />
                                에서 원{" "}
                                <InlineMath math="x^2+y^2=20" />
                                에 그은 두 접선이 각각
                            </p>

                            <BlockMath
                                math={String.raw`
23x+7y+a=0,\qquad
x+y+b=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이라 할 때,{" "}
                                <InlineMath math="a+b" />
                                의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    두 직선 모두 점{" "}
                                    <InlineMath math="(3,-5)" />
                                    을 지나므로 먼저 점을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
23(3)+7(-5)+a=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
69-35+a=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=-34
`}
                                />

                                <p>
                                    또한
                                </p>

                                <BlockMath
                                    math={String.raw`
3+(-5)+b=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
b=2
`}
                                />

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=-34+2=-32
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{-32}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 원{" "}
                                <InlineMath math="O:(x-2)^2+y^2=4" />,{" "}
                                <InlineMath math="O':(x+2)^2+y^2=4" />에 대하여
                                직선 <InlineMath math="l" />이 원 <InlineMath math="O" />에 접하고
                                원 <InlineMath math="O'" />의 넓이를 이등분할 때,
                                기울기가 양수인 직선 <InlineMath math="l" />의 방정식이
                                점 <InlineMath math="(a,\sqrt3)" />을 지난다.
                                이때 상수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원 <InlineMath math="O'" />의 넓이를 이등분하는 직선은
                                    반드시 원의 중심을 지납니다.
                                </p>

                                <p>
                                    원 <InlineMath math="O'" />의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(-2,0)
`}
                                />

                                <p>
                                    이므로 기울기가 <InlineMath math="m" />인 직선{" "}
                                    <InlineMath math="l" />의 방정식을
                                </p>

                                <BlockMath
                                    math={String.raw`
y=m(x+2)
`}
                                />

                                <p>
                                    로 둘 수 있습니다.
                                </p>

                                <p>
                                    한편 원 <InlineMath math="O" />의 중심은{" "}
                                    <InlineMath math="(2,0)" />, 반지름은{" "}
                                    <InlineMath math="2" />입니다.
                                </p>

                                <p>
                                    직선 <InlineMath math="l" />이 원{" "}
                                    <InlineMath math="O" />에 접하므로
                                    중심에서 직선까지의 거리는 반지름과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
mx-y+2m=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{|2m+2m|}{\sqrt{m^2+1}}=2
`}
                                />

                                <BlockMath
                                    math={String.raw`
\frac{4|m|}{\sqrt{m^2+1}}=2
`}
                                />

                                <p>
                                    기울기가 양수이므로 <InlineMath math="m>0" />이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{4m}{\sqrt{m^2+1}}=2
`}
                                />

                                <p>
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
16m^2=4(m^2+1)
`}
                                />

                                <BlockMath
                                    math={String.raw`
12m^2=4
`}
                                />

                                <BlockMath
                                    math={String.raw`
m^2=\frac13
`}
                                />

                                <BlockMath
                                    math={String.raw`
m=\frac1{\sqrt3}
`}
                                />

                                <p>
                                    따라서 직선 <InlineMath math="l" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
y=\frac1{\sqrt3}(x+2)
`}
                                />

                                <p>
                                    이 직선이 점{" "}
                                    <InlineMath math="(a,\sqrt3)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt3
=
\frac1{\sqrt3}(a+2)
`}
                                />

                                <BlockMath
                                    math={String.raw`
3=a+2
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{1}
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

                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="(0,a)" />에서
                                원 <InlineMath math="x^2+(y-3)^2=8" />에 그은
                                두 접선의 기울기의 곱이{" "}
                                <InlineMath math="-1" />일 때,
                                양수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    점 <InlineMath math="(0,a)" />를 지나고
                                    기울기가 <InlineMath math="m" />인 직선은
                                </p>

                                <BlockMath
                                    math={String.raw`
y-a=mx
`}
                                />

                                <BlockMath
                                    math={String.raw`
mx-y+a=0
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    원의 중심은{" "}
                                    <InlineMath math="(0,3)" />,
                                    반지름은{" "}
                                    <InlineMath math="2\sqrt2" />
                                    입니다.
                                </p>

                                <p>
                                    접선이므로 중심에서 직선까지의 거리는 반지름과 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{|a-3|}{\sqrt{m^2+1}}
=
2\sqrt2
`}
                                />

                                <p>
                                    양변을 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(a-3)^2
=
8(m^2+1)
`}
                                />

                                <BlockMath
                                    math={String.raw`
8m^2=(a-3)^2-8
`}
                                />

                                <BlockMath
                                    math={String.raw`
m^2=\frac{(a-3)^2-8}{8}
`}
                                />

                                <p>
                                    두 접선의 기울기는{" "}
                                    <InlineMath math="m,-m" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m_1m_2=-m^2
`}
                                />

                                <p>
                                    문제에서{" "}
                                    <InlineMath math="m_1m_2=-1" />
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m^2=1
`}
                                />

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{(a-3)^2-8}{8}=1
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a-3)^2=16
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=7,\,-1
`}
                                />

                                <p>
                                    양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{7}
`}
                                />

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
                                원{" "}
                                <InlineMath math="(x+2)^2+(y-3)^2=r^2" />
                                과 이 원 밖의 한 점{" "}
                                <InlineMath math="A(-6,7)" />
                                이 있다.
                                점 <InlineMath math="A" />에서 원에 그은 두 접선이 서로 수직일 때,
                                실수 <InlineMath math="r" />의 값을 구하시오.{" "}
                                <InlineMath math="(r>0)" />
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    원의 중심을{" "}
                                    <InlineMath math="O" />
                                    라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
O(-2,3)
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    중심과 점{" "}
                                    <InlineMath math="A" />
                                    사이의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
OA
=
\sqrt{(-6+2)^2+(7-3)^2}
=\sqrt{16+16}
=4\sqrt2
`}
                                />

                                <p>
                                    두 접선이 서로 수직이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
OA^2=2r^2
`}
                                />

                                <p>
                                    를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(4\sqrt2)^2=2r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
32=2r^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2=16
`}
                                />

                                <p>
                                    <InlineMath math="r>0" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{4}
`}
                                />

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
                                • 접선은 원과 한 점에서 만나는 직선이고,
                                그 점을 <b>접점</b>이라 한다.
                            </p>

                            <p>
                                • 법선은 접점을 지나고 접선과 수직인 직선이며,
                                반드시 원의 중심을 지난다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{접선}\perp\text{법선}
`}
                            />

                            <p>
                                • 접선의 길이는 반지름과 접선이 만드는
                                직각삼각형에서 피타고라스의 정리를 이용한다.
                            </p>

                            <BlockMath
                                math={String.raw`
PT=\sqrt{OP^2-r^2}
`}
                            />

                            <p>
                                • <b>접점이 주어진 경우</b> :
                                이차식은 곱으로, 일차식은 평균으로 바꾸어
                                한쪽에 접점의 좌표를 대입한다.
                            </p>

                            <p>
                                • <b>기울기가 주어진 경우</b> :
                                중심이 <InlineMath math="(a,b)" />,
                                반지름이 <InlineMath math="r" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
y-b
=
m(x-a)
\pm
r\sqrt{m^2+1}
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\begin{aligned}
&y-\text{중심의 }y\text{좌표}
=
\text{기울기}\,
(x-\text{중심의 }x\text{좌표})

\pm\;
\text{반지름}
\sqrt{\text{기울기}^2+1}
\end{aligned}
`}
                            />

                            <p>
                                • <b>원 밖의 점이 주어진 경우</b> :
                                접점을 두는 방법과 기울기를 두는 방법을 사용할 수 있다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    접선 문제의 풀이 우선순위
                                </p>

                                <div className="space-y-3">

                                    <p className="leading-8">
                                        ① 접점이 주어졌다
                                        → <b>접점을 이용한다.</b>
                                    </p>

                                    <p className="leading-8">
                                        ② 기울기가 주어졌다
                                        → <b>기울기가 주어진 접선 공식을 이용한다.</b>
                                    </p>

                                    <p className="leading-8">
                                        ③ 원 밖의 점이 주어졌다
                                        → <b>접점을 두는 방법을 우선 생각한다.</b>
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 1.21 원의 극선 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.21 원의 극선
                </h2>

                <p className="leading-8 text-gray-300">
                    원 밖의 한 점에서 원에 두 접선을 그으면 두 개의 접점이 생깁니다.
                    <br />
                    이 두 접점을 지나는 직선을 <b>극선</b>이라 합니다.
                    극선의 방정식은 앞에서 배운
                    <b> 원 위의 점에서의 접선의 방정식과 같은 방법</b>으로 구할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 극선의 정의 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 극선
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.21_1.png"
                                    alt="원 밖의 점 P에서 그은 두 접선과 극선"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="font-bold text-blue-300">
                                        두 접선
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원 밖의 점 <InlineMath math="P" />에서 원에 그은
                                        두 접선의 접점을{" "}
                                        <InlineMath math="T_1,\;T_2" />라 합니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                    <p className="font-bold text-red-300">
                                        극선
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        두 접점{" "}
                                        <InlineMath math="T_1,\;T_2" />를 지나는 직선을
                                        <b> 극선</b>이라 합니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        중요한 성질
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원의 중심 <InlineMath math="O" />와
                                        원 밖의 점 <InlineMath math="P" />를 이은 직선은
                                        극선과 수직입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
OP\perp T_1T_2
`}
                                    />

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* 극선 구하는 방법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 극선의 방정식을 구하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            극선의 방정식은
                            <strong className="text-yellow-300">
                                {" "}원 위의 점에서 접선을 구했던 방법과 같습니다.
                            </strong>
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            원
                        </p>

                        <BlockMath math="x^2+y^2=r^2" />

                        <p className="leading-8 text-gray-300">
                            밖의 점이{" "}
                            <InlineMath math="P(\alpha,\beta)" />일 때,
                            원의 이차식을 곱으로 나눈 뒤
                            한쪽에 밖의 점의 좌표를 대입합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                쪼개서 대입하기
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=r^2
`}
                            />

                            <BlockMath
                                math={String.raw`
x\cdot x+y\cdot y=r^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                한쪽에{" "}
                                <InlineMath math="P(\alpha,\beta)" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\alpha x+\beta y=r^2
}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                접선과 극선의 차이
                            </p>

                            <div className="mt-3 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    • <b>원 위의 점을 대입</b>하면
                                    → 그 점에서의 <b>접선</b>
                                </p>

                                <p className="leading-8">
                                    • <b>원 밖의 점을 대입</b>하면
                                    → 그 점에 대한 <b>극선</b>
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 왜 극선이 되는가 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 왜 이 식이 극선이 되는가?
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="x^2+y^2=r^2" /> 밖의 점을{" "}
                            <InlineMath math="P(\alpha,\beta)" />라 하고,
                            두 접점을
                        </p>

                        <BlockMath
                            math={String.raw`
T_1(a,b),\qquad T_2(c,d)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하겠습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                접점 T₁에서의 접선
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="T_1(a,b)" />에서의 접선은
                            </p>

                            <BlockMath math="ax+by=r^2" />

                            <p className="leading-8 text-gray-300">
                                이 접선이{" "}
                                <InlineMath math="P(\alpha,\beta)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
a\alpha+b\beta=r^2
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                접점 T₂에서의 접선
                            </p>

                            <p className="leading-8 text-gray-300">
                                점 <InlineMath math="T_2(c,d)" />에서의 접선은
                            </p>

                            <BlockMath math="cx+dy=r^2" />

                            <p className="leading-8 text-gray-300">
                                역시{" "}
                                <InlineMath math="P(\alpha,\beta)" />를 지나므로
                            </p>

                            <BlockMath
                                math={String.raw`
c\alpha+d\beta=r^2
`}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            이제 직선
                        </p>

                        <BlockMath
                            math={String.raw`
\alpha x+\beta y=r^2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 <InlineMath math="T_1(a,b)" />를 대입하면
                        </p>

                        <BlockMath
                            math={String.raw`
\alpha a+\beta b=r^2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고,{" "}
                            <InlineMath math="T_2(c,d)" />를 대입하면
                        </p>

                        <BlockMath
                            math={String.raw`
\alpha c+\beta d=r^2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 직선{" "}
                            <InlineMath math="\alpha x+\beta y=r^2" />는
                            두 접점 <InlineMath math="T_1,\;T_2" />를 모두 지나므로
                            극선입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{극선 }:\alpha x+\beta y=r^2
}
`}
                        />

                    </div>


                    {/* OP와 극선이 수직 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 중심과 밖의 점을 이은 직선은 극선과 수직
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원의 중심이 원점이므로{" "}
                            <InlineMath math="O(0,0)" />,
                            밖의 점은{" "}
                            <InlineMath math="P(\alpha,\beta)" />입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 직선 <InlineMath math="OP" />의 방향은
                        </p>

                        <BlockMath
                            math={String.raw`
(\alpha,\beta)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            한편 극선
                        </p>

                        <BlockMath
                            math={String.raw`
\alpha x+\beta y=r^2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 법선 방향 역시{" "}
                            <InlineMath math="(\alpha,\beta)" />이므로{" "}
                            직선 <InlineMath math="OP" />와 극선은 서로 수직입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
OP\perp T_1T_2
}
`}
                        />

                    </div>


                    {/* 직각삼각형의 닮음 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 직각삼각형의 닮음
                        </h3>

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="OP" />와 극선{" "}
                            <InlineMath math="T_1T_2" />의 교점을{" "}
                            <InlineMath math="H" />라 하겠습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
OP\perp T_1T_2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고, 반지름과 접선도 서로 수직이므로
                        </p>

                        <BlockMath
                            math={String.raw`
OT_1\perp PT_1
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서 직각삼각형{" "}
                            <InlineMath math="\triangle OHT_1" />과{" "}
                            <InlineMath math="\triangle OT_1P" />는 서로 닮음입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\triangle OHT_1
\sim
\triangle OT_1P
`}
                        />

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                가장 중요한 관계
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                닮음에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{OH}{OT_1}
=
\frac{OT_1}{OP}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
OH\cdot OP=OT_1^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="OT_1=r" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
OH\cdot OP=r^2
}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                길이가 필요할 때
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                공식을 따로 외우기보다
                                <strong className="text-white">
                                    {" "}직각삼각형의 닮음
                                </strong>
                                을 이용하여 필요한 길이를 구합니다.
                            </p>

                        </div>

                    </div>


                    {/* 극선의 길이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 두 접점 사이의 길이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            대칭에 의해
                        </p>

                        <BlockMath
                            math={String.raw`
HT_1=HT_2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            직각삼각형의 닮음에서
                        </p>

                        <BlockMath
                            math={String.raw`
\frac{HT_1}{PT_1}
=
\frac{OT_1}{OP}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이므로
                        </p>

                        <BlockMath
                            math={String.raw`
HT_1
=
\frac{r\cdot PT_1}{OP}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
T_1T_2
=
2HT_1
=
\frac{2r\cdot PT_1}{OP}
`}
                        />

                        <p className="mt-3 leading-8 text-gray-300">
                            필요하다면 접선의 길이
                        </p>

                        <BlockMath
                            math={String.raw`
PT_1=\sqrt{OP^2-r^2}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 이용하여 구할 수 있습니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                공식보다 구조
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="T_1T_2" />의 공식을 외우는 것이 목적이 아닙니다.
                                <br />
                                <InlineMath math="OP\perp T_1T_2" />를 확인한 뒤{" "}
                                <strong className="text-white">
                                    {" "}직각삼각형의 닮음으로 필요한 길이를 구한다
                                </strong>
                                는 것이 핵심입니다.
                            </p>

                        </div>

                    </div>


                    {/* 사각형의 넓이 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            7. 두 접선으로 만들어지는 사각형의 넓이
                        </h3>

                        <p className="leading-8 text-gray-300">
                            사각형{" "}
                            <InlineMath math="OT_1PT_2" />는
                            두 개의 직각삼각형{" "}
                            <InlineMath math="OT_1P" />,{" "}
                            <InlineMath math="OT_2P" />로 나눌 수 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            두 접선의 길이는 같으므로
                        </p>

                        <BlockMath
                            math={String.raw`
PT_1=PT_2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            사각형의 넓이는
                        </p>

                        <BlockMath
                            math={String.raw`
[OT_1PT_2]
=
2\left(
\frac12\cdot r\cdot PT_1
\right)
`}
                        />

                        <BlockMath
                            math={String.raw`
\boxed{
[OT_1PT_2]
=
r\cdot PT_1
}
`}
                        />

                        <p className="mt-4 leading-8 text-gray-300">
                            또한 두 대각선{" "}
                            <InlineMath math="OP" />와{" "}
                            <InlineMath math="T_1T_2" />가 서로 수직이므로
                        </p>

                        <BlockMath
                            math={String.raw`
[OT_1PT_2]
=
\frac12
OP\cdot T_1T_2
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로도 구할 수 있습니다.
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
                            좌표평면 위의 점 <InlineMath math="(3,4)" />에서
                            원 <InlineMath math="x^2+y^2=5" />에 그은
                            두 접선의 접점을 각각 <InlineMath math="A,\ B" />라 할 때,
                            점 <InlineMath math="(3,4)" />에서
                            직선 <InlineMath math="AB" />에 이르는 거리를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                직선 <InlineMath math="AB" />는
                                점 <InlineMath math="(3,4)" />에 대한
                                <b> 극선</b>입니다.
                            </p>

                            <p>
                                원
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=5
`}
                            />

                            <p>
                                에서 이차식을 쪼개면
                            </p>

                            <BlockMath
                                math={String.raw`
x\cdot x+y\cdot y=5
`}
                            />

                            <p>
                                한쪽에 원 밖의 점{" "}
                                <InlineMath math="(3,4)" />를 대입하면
                                극선의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
3x+4y=5
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
AB:\;3x+4y-5=0
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                점 <InlineMath math="(3,4)" />에서
                                직선 <InlineMath math="AB" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|3\cdot3+4\cdot4-5|}
{\sqrt{3^2+4^2}}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac{|9+16-5|}{5}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac{20}{5}
=4
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{4}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P(6,8)" />에서
                            원{" "}
                            <InlineMath math="x^2+y^2-6x-8y+16=0" />
                            에 그은 접선의 접점을{" "}
                            <InlineMath math="T" />
                            라 할 때,
                            선분{" "}
                            <InlineMath math="PT" />
                            의 길이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 방정식을 표준형으로 고치면
                            </p>

                            <BlockMath
                                math={String.raw`
(x-3)^2+(y-4)^2=3^2
`}
                            />

                            <p>
                                이므로 중심은{" "}
                                <InlineMath math="O(3,4)" />,
                                반지름은{" "}
                                <InlineMath math="3" />
                                입니다.
                            </p>

                            <p>
                                중심과 점{" "}
                                <InlineMath math="P" />
                                사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
OP
=
\sqrt{(6-3)^2+(8-4)^2}
=
\sqrt{9+16}
=
5
`}
                            />

                            <p>
                                반지름과 접선은 서로 수직이므로
                                삼각형{" "}
                                <InlineMath math="OPT" />
                                는 직각삼각형입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
PT^2
=
OP^2-r^2
`}
                            />

                            <BlockMath
                                math={String.raw`
=
5^2-3^2
=25-9
=16
`}
                            />

                            <BlockMath
                                math={String.raw`
PT=4
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{4}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="P(2,4)" />에서
                            원{" "}
                            <InlineMath math="x^2+y^2+4x-2y-4=0" />
                            에 그은 두 접선의 접점 사이의 거리를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="(-2,1)" />,
                                반지름은
                            </p>

                            <BlockMath math={String.raw`
r^2=(-2)^2+1^2-(-4)=9
`} />

                            <p>
                                이므로
                            </p>

                            <BlockMath math={String.raw`
r=3
`} />

                            <p>
                                중심과 점{" "}
                                <InlineMath math="P(2,4)" />
                                사이의 거리는
                            </p>

                            <BlockMath math={String.raw`
OP
=
\sqrt{(2+2)^2+(4-1)^2}
=
5
`} />
                            <p>
                                극선과{" "}
                                <InlineMath math="OP" />
                                의 교점을{" "}
                                <InlineMath math="H" />
                                라 하면
                            </p>

                            <BlockMath math={String.raw`
OH\cdot OP=r^2
`} />

                            <BlockMath math={String.raw`
OH=\frac{9}{5}
`} />

                            <p>
                                또한{" "}
                                <InlineMath math="OH\perp AB" />
                                이므로{" "}
                                <InlineMath math="H" />
                                는 현의 중점입니다.
                            </p>

                            <p>
                                직각삼각형에서
                            </p>

                            <BlockMath math={String.raw`
HT
=
\sqrt{r^2-OH^2}
`} />

                            <BlockMath math={String.raw`
=
\sqrt{9-\left(\frac95\right)^2}
`} />

                            <BlockMath math={String.raw`
=
\sqrt{\frac{225-81}{25}}
=
\frac{12}{5}
`} />

                            <p>
                                따라서 접점 사이의 거리는
                            </p>

                            <BlockMath math={String.raw`
AB
=
2HT
=
2\cdot\frac{12}{5}
=
\frac{24}{5}
`} />

                            <BlockMath math={String.raw`
\boxed{\frac{24}{5}}
`} />

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
                            점 <InlineMath math="P(-2\sqrt3,2)" />에서
                            원 <InlineMath math="x^2+y^2=4" />에 그은
                            두 접선의 접점을 각각 <InlineMath math="A,\ B" />라 할 때,
                            삼각형 <InlineMath math="ABP" />의 넓이를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 중심을 <InlineMath math="O" />라 하면
                                반지름은
                            </p>

                            <BlockMath math="r=2" />

                            <p>
                                이고,
                            </p>

                            <BlockMath
                                math={String.raw`
OP
=
\sqrt{(-2\sqrt3)^2+2^2}
=
\sqrt{12+4}
=
4
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                두 접점 <InlineMath math="A,\ B" />를 지나는 직선은
                                점 <InlineMath math="P" />에 대한 극선입니다.{" "}
                                <InlineMath math="OP" />와 극선의 교점을{" "}
                                <InlineMath math="H" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
OH\cdot OP=r^2
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
OH\cdot4=4
`}
                            />

                            <BlockMath math="OH=1" />

                            <p>
                                따라서 점 <InlineMath math="P" />에서
                                직선 <InlineMath math="AB" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
PH=OP-OH=4-1=3
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                또한 <InlineMath math="OP\perp AB" />이므로{" "}
                                <InlineMath math="H" />는 현 <InlineMath math="AB" />의 중점입니다.
                            </p>

                            <p>
                                직각삼각형 <InlineMath math="OHA" />에서
                            </p>

                            <BlockMath
                                math={String.raw`
AH
=
\sqrt{OA^2-OH^2}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\sqrt{2^2-1^2}
=
\sqrt3
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
AB=2AH=2\sqrt3
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                삼각형 <InlineMath math="ABP" />에서
                                밑변을 <InlineMath math="AB" />로 보면
                                높이는 <InlineMath math="PH" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
[\triangle ABP]
=
\frac12\cdot AB\cdot PH
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac12\cdot2\sqrt3\cdot3
=
3\sqrt3
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{3\sqrt3}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            점 <InlineMath math="A(-2,a)" />에서
                            원{" "}
                            <InlineMath math="x^2+y^2-2x+4y-4=0" />
                            에 그은 접선의 접점을{" "}
                            <InlineMath math="B" />
                            라 할 때,{" "}
                            <InlineMath math="AB=5" />
                            를 만족시키는 양수{" "}
                            <InlineMath math="a" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="(1,-2)" />,
                                반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
r^2=1^2+(-2)^2-(-4)=9
`}
                            />

                            <BlockMath
                                math={String.raw`
r=3
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                점{" "}
                                <InlineMath math="A(-2,a)" />
                                와 중심 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
AO^2
=(-2-1)^2+(a+2)^2
`}
                            />

                            <BlockMath
                                math={String.raw`
=9+(a+2)^2
`}
                            />

                            <p>
                                접선의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
AB^2=AO^2-r^2
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
25
=
\left(9+(a+2)^2\right)-9
`}
                            />

                            <BlockMath
                                math={String.raw`
(a+2)^2=25
`}
                            />

                            <BlockMath
                                math={String.raw`
a+2=\pm5
`}
                            />

                            <BlockMath
                                math={String.raw`
a=3,\,-7
`}
                            />

                            <p>
                                양수는{" "}
                                <InlineMath math="3" />
                                뿐입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{3}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 극선은 원 밖의 한 점에서 그은
                            <b> 두 접선의 접점을 지나는 직선</b>이다.
                        </p>

                        <p>
                            • 원 <InlineMath math="x^2+y^2=r^2" /> 밖의 점{" "}
                            <InlineMath math="P(\alpha,\beta)" />에 대한 극선은
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\alpha x+\beta y=r^2
}
`}
                        />

                        <p>
                            • 원 위의 점에서의 접선과 같은 방법으로
                            <b> 이차식을 쪼갠 뒤 밖의 점을 대입</b>한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\text{원 위의 점 대입}
\rightarrow
\text{접선}
`}
                        />

                        <BlockMath
                            math={String.raw`
\text{원 밖의 점 대입}
\rightarrow
\text{극선}
`}
                        />

                        <p>
                            • 중심과 밖의 점을 이은 직선은 극선과 수직이다.
                        </p>

                        <BlockMath
                            math={String.raw`
OP\perp T_1T_2
`}
                        />

                        <p>
                            • 선분 <InlineMath math="OP" />와 선분 <InlineMath math="T_1T_2" />의 교점을 점 <InlineMath math="H" />라 하면
                            직각삼각형의 닮음에 의해
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
OH\cdot OP=r^2
}
`}
                        />

                        <p>
                            • 길이가 필요한 경우 공식을 외우기보다
                            <b> 직각삼각형의 닮음</b>을 이용한다.
                        </p>

                        <p>
                            • 두 접선으로 만들어지는 사각형의 넓이는
                        </p>

                        <BlockMath
                            math={String.raw`
[OT_1PT_2]
=
r\cdot PT_1
=
\frac12 OP\cdot T_1T_2
`}
                        />

                    </div>

                </div>

            </section>
            {/* 1.22 원 위의 점에 대한 최댓값과 최솟값 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.22 원 위의 점에 대한 최댓값과 최솟값
                </h2>

                <p className="leading-8 text-gray-300">
                    원 위의 점이 움직이는 최댓값과 최솟값 문제는
                    복잡한 좌표 계산보다 <b>원의 중심과 반지름</b>을 먼저 생각하는 것이 중요합니다.
                    <br />
                    거리는 중심을 기준으로, 삼각형의 넓이는 높이를 기준으로 생각합니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 기본 원리 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 중심과 반지름으로 생각하기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원과 관련된 최댓값과 최솟값은 대부분
                            <strong className="text-yellow-300">
                                {" "}중심을 지나는 직선
                            </strong>
                            을 기준으로 생각하면 됩니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                문제를 보는 순서
                            </p>

                            <div className="mt-3 space-y-3 text-gray-300">

                                <p className="leading-8">
                                    ① 원의 <b>중심</b>과 <b>반지름</b>을 구한다.
                                </p>

                                <p className="leading-8">
                                    ② 거리 문제라면 <b>중심과 대상 사이의 거리</b>를 구한다.
                                </p>

                                <p className="leading-8">
                                    ③ 삼각형의 넓이라면 <b>밑변을 고정하고 높이</b>를 생각한다.
                                </p>

                                <p className="leading-8">
                                    ④ 중심을 지나는 방향에서 최댓값과 최솟값을 찾는다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                핵심 생각
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{거리}\rightarrow\text{중심과 반지름}
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
\text{삼각형의 넓이}\rightarrow\text{높이의 최대·최소}
}
`}
                            />

                        </div>

                    </div>


                    {/* 밖의 점 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 밖의 점에서 원 위의 점까지의 거리
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.22_1.png"
                                    alt="원 밖의 점에서 원 위의 점까지 거리의 최댓값과 최솟값"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    원 밖의 한 점 <InlineMath math="A" />와
                                    원의 중심 <InlineMath math="O" />를 연결합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    중심 <InlineMath math="O" />를 지나는 직선과 원의 교점 중{" "}
                                    <InlineMath math="A" />에 가까운 점에서 거리가 최소,
                                    반대편 점에서 거리가 최대가 됩니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        중심까지의 거리를 <InlineMath math="d" />,
                                        반지름을 <InlineMath math="r" />라 하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
AP_{\min}=d-r
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
AP_{\max}=d+r
`}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                우리말로 기억하기
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <b>가까운 쪽은 중심까지의 거리에서 반지름을 빼고,
                                    먼 쪽은 반지름을 더합니다.</b>
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{최소}=AO-r,\qquad
\text{최대}=AO+r
}
`}
                            />

                        </div>

                    </div>


                    {/* 직선과 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 직선에서 원 위의 점까지의 거리
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.22_2.png"
                                    alt="직선에서 원 위의 점까지 거리의 최댓값과 최솟값"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    원의 중심 <InlineMath math="O" />에서
                                    직선에 내린 수선의 발을{" "}
                                    <InlineMath math="H" />라 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    직선에서 원 위의 점까지의 거리도
                                    <strong className="text-white">
                                        {" "}중심에서 직선까지의 거리
                                    </strong>
                                    를 기준으로 생각합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="OH=d" />,
                                        반지름을 <InlineMath math="r" />라 하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{최소 거리}=d-r
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{최대 거리}=d+r
`}
                                    />

                                </div>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                점과 직선은 같은 구조
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                밖의 점에서는 <InlineMath math="AO" />를 기준으로 하고,
                                직선에서는 <InlineMath math="OH" />를 기준으로 합니다.
                                결국 둘 다
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{중심에서 대상까지의 거리}\pm\text{반지름}
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 구조입니다.
                            </p>

                        </div>

                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-bold text-red-300">
                                직선이 원과 만나는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                직선이 원을 지나면 원 위에 직선과 만나는 점이 있으므로
                                최소 거리는 <InlineMath math="0" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\text{최소 거리}=0
`}
                            />

                        </div>

                    </div>


                    {/* 현과 삼각형 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 현으로 만드는 삼각형의 넓이의 최댓값
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.22_3.png"
                                    alt="원의 현을 밑변으로 하는 삼각형 넓이의 최댓값"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    원의 현 <InlineMath math="AB" />가 정해져 있고,
                                    점 <InlineMath math="P" />가 원 위를 움직인다고 하겠습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    삼각형 <InlineMath math="PAB" />에서
                                    밑변 <InlineMath math="AB" />의 길이는 일정합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
[\triangle PAB]
=
\frac12\cdot AB\cdot
(\text{P에서 직선 AB까지의 거리})
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 삼각형의 넓이가 최대가 되려면
                                    <strong className="text-yellow-300">
                                        {" "}점 P에서 직선 AB까지의 거리가 최대
                                    </strong>
                                    가 되어야 합니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                중심 <InlineMath math="O" />에서 현{" "}
                                <InlineMath math="AB" />에 내린 수선의 발을{" "}
                                <InlineMath math="H" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
OH\perp AB
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                넓이가 최대가 되는 점{" "}
                                <InlineMath math="P_{\max}" />는{" "}
                                <InlineMath math="OH" />를 중심 반대 방향으로 연장하여
                                원과 만나는 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
P_{\max}H=OH+r
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 넓이의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
[\triangle PAB]_{\max}
=
\frac12\cdot AB\cdot(OH+r)
}
`}
                            />

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                넓이 문제의 핵심
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <b>밑변이 일정하면 높이만 최대 또는 최소로 만들면 됩니다.</b>
                                <br />
                                높이도 결국 중심과 반지름으로 구합니다.
                            </p>

                        </div>

                    </div>


                    {/* 원 밖의 선분 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 원 밖의 선분으로 만드는 삼각형의 넓이
                        </h3>

                        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">

                            {/* 그림 */}
                            <div className="rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.22_4.png"
                                    alt="원 밖의 선분과 원 위의 점으로 만드는 삼각형 넓이의 최댓값과 최솟값"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                            {/* 설명 */}
                            <div className="space-y-5">

                                <p className="leading-8 text-gray-300">
                                    원 밖의 고정된 선분 <InlineMath math="AB" />와
                                    원 위를 움직이는 점 <InlineMath math="P" />로
                                    삼각형 <InlineMath math="PAB" />를 만든다고 하겠습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    밑변 <InlineMath math="AB" />는 고정되어 있으므로
                                    삼각형의 넓이는
                                    <strong className="text-white">
                                        {" "}점 P에서 직선 AB까지의 거리
                                    </strong>
                                    에 의해 결정됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
[\triangle PAB]
=
\frac12\cdot AB\cdot PH
`}
                                />

                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            중심 <InlineMath math="O" />에서 직선{" "}
                            <InlineMath math="AB" />에 내린 수선의 발을{" "}
                            <InlineMath math="H" />라 하고
                        </p>

                        <BlockMath
                            math={String.raw`
OH=d
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하겠습니다.
                        </p>

                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* 최소 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    넓이의 최솟값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    점 <InlineMath math="P" />가 직선{" "}
                                    <InlineMath math="AB" />에 가장 가까울 때입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P_{\min}H=d-r
`}
                                />

                                <BlockMath
                                    math={String.raw`
[\triangle PAB]_{\min}
=
\frac12 AB(d-r)
`}
                                />

                            </div>

                            {/* 최대 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-bold text-red-300">
                                    넓이의 최댓값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    점 <InlineMath math="P" />가 직선{" "}
                                    <InlineMath math="AB" />에서 가장 멀 때입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
P_{\max}H=d+r
`}
                                />

                                <BlockMath
                                    math={String.raw`
[\triangle PAB]_{\max}
=
\frac12 AB(d+r)
`}
                                />

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-bold text-yellow-300">
                                현과 원 밖의 선분의 차이
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                현 <InlineMath math="AB" />도, 원 밖의 선분{" "}
                                <InlineMath math="AB" />도
                                <b> 밑변이 일정하다는 점은 같습니다.</b>
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                따라서 모두
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{넓이의 최대·최소}
\rightarrow
\text{높이의 최대·최소}
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                로 바꾸어 생각합니다.
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
                            점 <InlineMath math="A(6,-4)" />와
                            원{" "}
                            <InlineMath math="(x-2)^2+(y+1)^2=4" />
                            위의 점 <InlineMath math="P" /> 사이의 거리가
                            정수가 되도록 하는 점 <InlineMath math="P" />의 개수는?
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="O(2,-1)" />,
                                반지름은{" "}
                                <InlineMath math="2" />
                                입니다.
                            </p>

                            <p>
                                점{" "}
                                <InlineMath math="A" />
                                와 중심 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
AO
=
\sqrt{(6-2)^2+(-4+1)^2}
=
5
`}
                            />

                            <p>
                                따라서 점{" "}
                                <InlineMath math="P" />
                                까지의 거리의 범위는
                            </p>

                            <BlockMath
                                math={String.raw`
5-2
\le AP\le
5+2
`}
                            />

                            <BlockMath
                                math={String.raw`
3\le AP\le7
`}
                            />

                            <p>
                                가능한 정수 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
3,\;4,\;5,\;6,\;7
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                최소거리{" "}
                                <InlineMath math="3" />
                                과 최대거리{" "}
                                <InlineMath math="7" />
                                는 각각 한 점에서만 이루어집니다.
                            </p>

                            <p>
                                나머지{" "}
                                <InlineMath math="4,5,6" />
                                은 각각 원과 한 원이 두 점에서 만나므로
                                두 점씩 존재합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
1+2+2+2+1=8
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{8}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="(x+3)^2+(y+2)^2=4" />
                            위의 점{" "}
                            <InlineMath math="P(a,b)" />
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
\sqrt{(a-3)^2+(b-6)^2}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="O(-3,-2)" />,
                                반지름은{" "}
                                <InlineMath math="2" />
                                입니다.
                            </p>

                            <p>
                                식은 점{" "}
                                <InlineMath math="P(a,b)" />
                                와 점{" "}
                                <InlineMath math="A(3,6)" />
                                사이의 거리를 나타냅니다.
                            </p>

                            <BlockMath
                                math={String.raw`
AP=\sqrt{(a-3)^2+(b-6)^2}
`}
                            />

                            <p>
                                중심과 점{" "}
                                <InlineMath math="A" />
                                사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
AO
=
\sqrt{(3+3)^2+(6+2)^2}
=
\sqrt{36+64}
=
10
`}
                            />

                            <p>
                                따라서 점{" "}
                                <InlineMath math="P" />
                                와 점{" "}
                                <InlineMath math="A" />
                                사이의 거리의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
AP_{\max}
=
AO+r
=
10+2
=
12
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{12}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 원
                        </p>

                        <BlockMath
                            math={String.raw`
x^2+y^2-6x-14y+42=0,
\qquad
x^2+y^2+4x+10y+20=0
`}
                        />

                        <p className="leading-8 text-gray-300">
                            위의 점을 각각{" "}
                            <InlineMath math="P,\ Q" />
                            라 할 때, 선분{" "}
                            <InlineMath math="PQ" />
                            의 길이의 최댓값과 최솟값의 합을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                첫 번째 원의 중심과 반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
O_1(3,7)
`}
                            />

                            <BlockMath
                                math={String.raw`
r_1^2
=
3^2+7^2-42
=
16
`}
                            />

                            <BlockMath
                                math={String.raw`
r_1=4
`}
                            />

                            <p>
                                두 번째 원의 중심과 반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
O_2(-2,-5)
`}
                            />

                            <BlockMath
                                math={String.raw`
r_2^2
=
(-2)^2+(-5)^2-20
=
9
`}
                            />

                            <BlockMath
                                math={String.raw`
r_2=3
`}
                            />

                            <p>
                                두 중심 사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
O_1O_2
=
\sqrt{(3+2)^2+(7+5)^2}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\sqrt{5^2+12^2}
=
13
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    중심을 지나는 직선에서 생각하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 원 위의 점 사이의 거리가 가장 클 때와 가장 작을 때는
                                    두 원의 중심을 지나는 직선 위에서 생깁니다.
                                </p>

                            </div>

                            <p>
                                따라서{" "}
                                <InlineMath math="PQ" />
                                의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
PQ_{\max}
=
O_1O_2+r_1+r_2
`}
                            />

                            <BlockMath
                                math={String.raw`
=
13+4+3
=
20
`}
                            />

                            <p>
                                최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
PQ_{\min}
=
O_1O_2-r_1-r_2
`}
                            />

                            <BlockMath
                                math={String.raw`
=
13-4-3
=
6
`}
                            />

                            <p>
                                따라서 최댓값과 최솟값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
20+6=26
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{26}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 두 점{" "}
                            <InlineMath math="A(8,6),\ B(a,b)" />
                            에 대하여 선분{" "}
                            <InlineMath math="AB" />
                            의 길이가{" "}
                            <InlineMath math="4" />
                            일 때,{" "}
                            <InlineMath math="a^2+b^2" />
                            의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                점{" "}
                                <InlineMath math="B(a,b)" />
                                는
                                점{" "}
                                <InlineMath math="A(8,6)" />
                                를 중심으로 하고
                                반지름이{" "}
                                <InlineMath math="4" />
                                인 원 위의 점입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(a-8)^2+(b-6)^2=16
`}
                            />

                            <p>
                                또,
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+b^2=OB^2
`}
                            />

                            <p>
                                이므로{" "}
                                <InlineMath math="OB" />
                                의 길이가 최대일 때{" "}
                                <InlineMath math="a^2+b^2" />
                                도 최대가 됩니다.
                            </p>

                            <p>
                                중심{" "}
                                <InlineMath math="A" />
                                와 원점{" "}
                                <InlineMath math="O" />
                                사이의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
OA
=
\sqrt{8^2+6^2}
=
10
`}
                            />

                            <p>
                                따라서{" "}
                                <InlineMath math="OB" />
                                의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
OB_{\max}
=
OA+4
=
10+4
=
14
`}
                            />

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+b^2
=
OB^2
=
14^2
=
196
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{196}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="(x-3)^2+(y-3)^2=16" />
                            위의 점에서 두 점{" "}
                            <InlineMath math="A(5,-3),\ B(8,0)" />
                            을 지나는 직선에 이르는 거리의 최댓값을{" "}
                            <InlineMath math="M" />,
                            최솟값을{" "}
                            <InlineMath math="m" />
                            이라 할 때,{" "}
                            <InlineMath math="M+m" />
                            의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                먼저 직선{" "}
                                <InlineMath math="AB" />
                                의 방정식을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{0-(-3)}{8-5}=1
`}
                            />

                            <BlockMath
                                math={String.raw`
y=x-8
`}
                            />

                            <BlockMath
                                math={String.raw`
x-y-8=0
`}
                            />

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="O(3,3)" />,
                                반지름은{" "}
                                <InlineMath math="4" />
                                입니다.
                            </p>

                            <p>
                                중심에서 직선까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d=
\frac{|3-3-8|}
{\sqrt{1^2+(-1)^2}}
=
\frac{8}{\sqrt2}
=
4\sqrt2
`}
                            />

                            <p>
                                따라서 원 위의 점에서 직선까지의
                                최댓값과 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
M=d+r
=
4\sqrt2+4
`}
                            />

                            <BlockMath
                                math={String.raw`
m=d-r
=
4\sqrt2-4
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
M+m
=
(4\sqrt2+4)+(4\sqrt2-4)
=
8\sqrt2
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{8\sqrt2}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="(x-1)^2+(y-2)^2=4" />
                            위의 점{" "}
                            <InlineMath math="P" />
                            와 두 점{" "}
                            <InlineMath math="A(1,7),\ B(4,3)" />
                            에 대하여 삼각형{" "}
                            <InlineMath math="PAB" />
                            의 넓이의 최댓값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                먼저 직선{" "}
                                <InlineMath math="AB" />
                                의 방정식을 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{3-7}{4-1}
=
-\frac43
`}
                            />

                            <BlockMath
                                math={String.raw`
y-7
=
-\frac43(x-1)
`}
                            />

                            <BlockMath
                                math={String.raw`
4x+3y-25=0
`}
                            />

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="O(1,2)" />,
                                반지름은{" "}
                                <InlineMath math="2" />
                                입니다.
                            </p>

                            <p>
                                중심에서 직선{" "}
                                <InlineMath math="AB" />
                                까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d
=
\frac{|4+6-25|}
{\sqrt{4^2+3^2}}
=
3
`}
                            />

                            <p>
                                따라서 점{" "}
                                <InlineMath math="P" />
                                에서 직선{" "}
                                <InlineMath math="AB" />
                                까지의 최대 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d+r
=
3+2
=
5
`}
                            />

                            <p>
                                또,
                                선분{" "}
                                <InlineMath math="AB" />
                                의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
AB
=
\sqrt{3^2+(-4)^2}
=
5
`}
                            />

                            <p>
                                따라서 삼각형의 넓이의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
\frac12
\times5
\times5
=
\frac{25}{2}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{\frac{25}{2}}
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 원{" "}
                                <InlineMath math="x^2+y^2=8" />
                                위의 점 <InlineMath math="A" />와 직선{" "}
                                <InlineMath math="y=x+6" />
                                위의 서로 다른 두 점{" "}
                                <InlineMath math="B,\ C" />를 꼭짓점으로 하는
                                정삼각형 <InlineMath math="ABC" />를 만든다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이때 정삼각형 <InlineMath math="ABC" />의 넓이의
                                최댓값을 <InlineMath math="M" />,
                                최솟값을 <InlineMath math="m" />이라 할 때,{" "}
                                <InlineMath math="M-m" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.22_7.png"
                                alt="원 위의 점과 직선 위의 두 점으로 만든 정삼각형"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                정삼각형 <InlineMath math="ABC" />에서
                                밑변 <InlineMath math="BC" />는
                                직선 <InlineMath math="y=x+6" /> 위에 있습니다.
                            </p>

                            <p>
                                점 <InlineMath math="A" />에서 직선{" "}
                                <InlineMath math="BC" />까지의 거리를{" "}
                                <InlineMath math="h" />라 하면,{" "}
                                <InlineMath math="h" />는 정삼각형의 높이입니다.
                            </p>

                            <p>
                                정삼각형의 한 변의 길이를 <InlineMath math="s" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
h=\frac{\sqrt3}{2}s
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
s=\frac{2h}{\sqrt3}
`}
                            />

                            <p>
                                따라서 정삼각형의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
[\triangle ABC]
=
\frac12 sh
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac12
\cdot
\frac{2h}{\sqrt3}
\cdot h
=
\frac{h^2}{\sqrt3}
`}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    결국 높이의 최대·최소를 구하면 됩니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    즉, 원 위의 점 <InlineMath math="A" />에서
                                    직선 <InlineMath math="y=x+6" />까지의 거리의
                                    최댓값과 최솟값을 구합니다.
                                </p>

                            </div>

                            <p>
                                직선을 일반형으로 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
x-y+6=0
`}
                            />

                            <p>
                                원의 중심 <InlineMath math="O(0,0)" />에서
                                이 직선까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d
=
\frac{|6|}{\sqrt{1^2+(-1)^2}}
=
3\sqrt2
`}
                            />

                            <p>
                                이고, 원의 반지름은
                            </p>

                            <BlockMath
                                math={String.raw`
r=\sqrt8=2\sqrt2
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 점 <InlineMath math="A" />에서 직선까지의
                                거리의 최댓값과 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
h_{\max}
=
d+r
=
3\sqrt2+2\sqrt2
=
5\sqrt2
`}
                            />

                            <BlockMath
                                math={String.raw`
h_{\min}
=
d-r
=
3\sqrt2-2\sqrt2
=
\sqrt2
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 정삼각형의 넓이의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
M
=
\frac{(5\sqrt2)^2}{\sqrt3}
=
\frac{50}{\sqrt3}
`}
                            />

                            <p>
                                최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
m
=
\frac{(\sqrt2)^2}{\sqrt3}
=
\frac{2}{\sqrt3}
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
M-m
=
\frac{48}{\sqrt3}
=
16\sqrt3
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{16\sqrt3}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면 위의 점{" "}
                            <InlineMath math="(4,3)" />
                            을 지나는 직선 중에서 원점과의 거리가 최대인 직선을{" "}
                            <InlineMath math="l" />
                            이라 하자.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            원{" "}
                            <InlineMath math="(x+2)^2+(y+1)^2=1" />
                            위의 점 <InlineMath math="P" />와 직선{" "}
                            <InlineMath math="l" /> 사이의 거리의 최솟값을{" "}
                            <InlineMath math="m" />이라 할 때, <br />
                            <InlineMath math="5m" />의 값을 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                점 <InlineMath math="A(4,3)" />을 지나는 직선과
                                원점 사이의 거리가 최대가 되려면,
                                직선 <InlineMath math="l" />은{" "}
                                <InlineMath math="OA" />와 수직이어야 합니다.
                            </p>

                            <p>
                                <InlineMath math="OA" />의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac34
`}
                            />

                            <p>
                                이므로 직선 <InlineMath math="l" />의 기울기는
                            </p>

                            <BlockMath
                                math={String.raw`
-\frac43
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 점 <InlineMath math="(4,3)" />을 지나는
                                직선 <InlineMath math="l" />의 방정식은
                            </p>

                            <BlockMath
                                math={String.raw`
y-3=-\frac43(x-4)
`}
                            />

                            <BlockMath
                                math={String.raw`
4x+3y-25=0
`}
                            />

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    이제 원과 직선 사이의 최소거리를 생각합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원의 중심은{" "}
                                    <InlineMath math="C(-2,-1)" />,
                                    반지름은{" "}
                                    <InlineMath math="1" />
                                    입니다.
                                </p>

                            </div>

                            <p>
                                중심 <InlineMath math="C" />에서 직선{" "}
                                <InlineMath math="l" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
d
=
\frac{|4(-2)+3(-1)-25|}
{\sqrt{4^2+3^2}}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac{36}{5}
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 원 위의 점 <InlineMath math="P" />와
                                직선 <InlineMath math="l" /> 사이의 거리의 최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
m
=
d-r
=
\frac{36}{5}-1
=
\frac{31}{5}
`}
                            />

                            <p>
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
5m
=
5\cdot\frac{31}{5}
=
31
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{31}
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

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            좌표평면 위에 두 점{" "}
                            <InlineMath math="A(-4,0),\ B(0,3)" />
                            과 원{" "}
                            <InlineMath math="C:x^2+y^2=4" />
                            가 있다.
                            원 <InlineMath math="C" /> 위의 점{" "}
                            <InlineMath math="P" />에 대하여 삼각형{" "}
                            <InlineMath math="PAB" />의 넓이가 자연수가 되도록 하는
                            모든 점 <InlineMath math="P" />의 개수를 구하시오.
                        </p>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                먼저 직선 <InlineMath math="AB" />의 방정식을 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
3x-4y+12=0
`}
                            />

                            <p>
                                이고,
                            </p>

                            <BlockMath
                                math={String.raw`
AB=\sqrt{4^2+3^2}=5
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                원의 중심은{" "}
                                <InlineMath math="O(0,0)" />,
                                반지름은{" "}
                                <InlineMath math="2" />이고,
                                중심에서 직선 <InlineMath math="AB" />까지의 거리는
                            </p>

                            <BlockMath
                                math={String.raw`
OH
=
\frac{|12|}{\sqrt{3^2+(-4)^2}}
=
\frac{12}{5}
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서 원 위의 점 <InlineMath math="P" />에서
                                직선 <InlineMath math="AB" />까지의 거리의 최솟값과 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{12}{5}-2
=
\frac25
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac{12}{5}+2
=
\frac{22}{5}
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                삼각형 <InlineMath math="PAB" />의 넓이는
                            </p>

                            <BlockMath
                                math={String.raw`
[\triangle PAB]
=
\frac12
\times AB
\times
(\text{P에서 직선 AB까지의 거리})
`}
                            />

                            <p>
                                이므로 넓이의 최솟값과 최댓값은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
\frac12
\cdot5\cdot\frac25
=
1
`}
                            />

                            <BlockMath
                                math={String.raw`
\frac12
\cdot5\cdot\frac{22}{5}
=
11
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    자연수가 되는 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    삼각형의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\;2,\;3,\;\cdots,\;11
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    중 하나가 되어야 합니다.
                                </p>

                            </div>

                            <p>
                                넓이가 최솟값{" "}
                                <InlineMath math="1" />일 때와 최댓값{" "}
                                <InlineMath math="11" />일 때는
                                각각 원 위의 점이 하나씩 존재합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
1\rightarrow1\text{개},
\qquad
11\rightarrow1\text{개}
`}
                            />

                            <p>
                                그 사이의 자연수
                            </p>

                            <BlockMath
                                math={String.raw`
2,\;3,\;\cdots,\;10
`}
                            />

                            <p>
                                에 대해서는 각각 같은 거리를 갖는 원 위의 점이
                                두 개씩 존재합니다.
                            </p>

                            <p>
                                따라서 점 <InlineMath math="P" />의 개수는
                            </p>

                            <BlockMath
                                math={String.raw`
1+9\times2+1
=
20
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{20}
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

                    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                그림과 같이 좌표평면 위에 두 원
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{array}{l}
C_1:(x+3)^2+(y+3)^2=1\\ \\
C_2:(x-8)^2+y^2=9
\end{array}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                과 직선{" "}
                                <InlineMath math="l:y=-x+10" />
                                이 있다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                원 <InlineMath math="C_1" /> 위의 점{" "}
                                <InlineMath math="P" />에서 직선{" "}
                                <InlineMath math="l" />에 내린 수선의 발을{" "}
                                <InlineMath math="H_1" />,
                                원 <InlineMath math="C_2" /> 위의 점{" "}
                                <InlineMath math="Q" />에서 직선{" "}
                                <InlineMath math="l" />에 내린 수선의 발을{" "}
                                <InlineMath math="H_2" />라 하자.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                선분 <InlineMath math="H_1H_2" />의 길이의 최댓값을{" "}
                                <InlineMath math="M" />, 최솟값을{" "}
                                <InlineMath math="m" />이라 할 때,
                                두 수 <InlineMath math="M,m" />의 곱{" "}
                                <InlineMath math="Mm" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 그림 */}
                        <div className="rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/1.22_10.png"
                                alt="두 원 위의 점에서 직선에 내린 수선의 발 사이 거리"
                                className="mx-auto w-full max-w-md rounded-lg"
                            />

                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-4 text-gray-300">

                            <p>
                                두 원의 중심을 각각{" "}
                                <InlineMath math="O_1,\ O_2" />라 하면
                            </p>

                            <BlockMath
                                math={String.raw`
O_1(-3,-3),\qquad O_2(8,0)
`}
                            />

                            <p>
                                이고, 반지름은 각각
                            </p>

                            <BlockMath
                                math={String.raw`
r_1=1,\qquad r_2=3
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                두 중심에서 직선 <InlineMath math="l" />에 내린
                                수선의 발 사이의 거리를 먼저 구합니다.
                            </p>

                            <p>
                                직선 <InlineMath math="l" />의 기울기가{" "}
                                <InlineMath math="-1" />이므로,
                                선분 <InlineMath math="O_1O_2" />의
                                직선 <InlineMath math="l" /> 방향의 길이는
                            </p>

                            <BlockMath
                                math={String.raw`
\frac{|(8-(-3))-(0-(-3))|}{\sqrt{1^2+(-1)^2}}
`}
                            />

                            <BlockMath
                                math={String.raw`
=
\frac{|11-3|}{\sqrt2}
=
\frac8{\sqrt2}
=
4\sqrt2
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    중심과 반지름으로 생각하기
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원 위의 점에서 내린 수선의 발은
                                    중심에서 내린 수선의 발을 기준으로
                                    직선 <InlineMath math="l" /> 위에서
                                    반지름만큼 움직일 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
r_1+r_2=1+3=4
`}
                                />

                            </div>

                            <p>
                                따라서{" "}
                                <InlineMath math="H_1H_2" />의 최댓값은
                            </p>

                            <BlockMath
                                math={String.raw`
M=4\sqrt2+4
`}
                            />

                            <p>
                                최솟값은
                            </p>

                            <BlockMath
                                math={String.raw`
m=4\sqrt2-4
`}
                            />

                            <p>
                                입니다.
                            </p>

                            <p>
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
Mm
=
(4\sqrt2+4)(4\sqrt2-4)
`}
                            />

                            <BlockMath
                                math={String.raw`
=
(4\sqrt2)^2-4^2
`}
                            />

                            <BlockMath
                                math={String.raw`
=
32-16
=
16
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{16}
`}
                            />

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 원과 관련된 최댓값과 최솟값은
                            <b> 중심과 반지름</b>을 먼저 생각한다.
                        </p>

                        <p>
                            • 밖의 점과 원 위의 점 사이의 거리
                        </p>

                        <BlockMath
                            math={String.raw`
\text{최소}=AO-r,\qquad
\text{최대}=AO+r
`}
                        />

                        <p>
                            • 직선과 원 위의 점 사이의 거리도
                            중심에서 직선까지의 거리와 반지름의 합과 차로 구한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\text{최소}=d-r,\qquad
\text{최대}=d+r
`}
                        />

                        <p>
                            • 단, 직선이 원과 만나면 최소 거리는{" "}
                            <InlineMath math="0" />이다.
                        </p>

                        <p>
                            • 삼각형에서 밑변이 일정하면
                            <b> 높이가 최대일 때 넓이가 최대</b>이고,
                            높이가 최소일 때 넓이가 최소이다.
                        </p>

                        <BlockMath
                            math={String.raw`
[\triangle]
=
\frac12\times
\text{밑변}\times
\text{높이}
`}
                        />

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                문제를 보면
                            </p>

                            <div className="space-y-3">

                                <p className="leading-8">
                                    ① <b>거리</b>를 묻는다
                                    → 중심에서 대상까지의 거리를 구한 뒤
                                    반지름을 더하거나 뺀다.
                                </p>

                                <p className="leading-8">
                                    ② <b>삼각형의 넓이</b>를 묻는다
                                    → 밑변을 고정하고 높이의 최대·최소를 구한다.
                                </p>

                                <p className="leading-8">
                                    ③ 최댓값과 최솟값이 생기는 위치는
                                    → <b>중심을 지나는 방향</b>에서 찾는다.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* 1.23 두 원의 교점을 지나는 원의 방정식과 공통현의 방정식 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    1.23 두 원의 교점을 지나는 원의 방정식과 공통현의 방정식
                </h2>

                <p className="leading-8 text-gray-300">
                    1.13에서 배운 두 도형의 교점을 지나는 도형의 방정식을
                    두 원에도 그대로 적용할 수 있습니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 1. 두 원의 교점을 지나는 원 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            1. 두 원의 교점을 지나는 원의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 원
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{array}{l}
S_1=x^2+y^2+Ax+By+C=0\\
S_2=x^2+y^2+A'x+B'y+C'=0
\end{array}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 교점을 지나는 원의 방정식은
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
S_1+kS_2=0
\qquad(k\neq-1)
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                    {/* 2. 공통현 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-5 text-2xl font-bold">
                            2. 공통현의 방정식
                        </h3>

                        <p className="leading-8 text-gray-300">
                            위 식에서{" "}
                            <InlineMath math="k=-1" />
                            이면 이차항이 소거되어 직선이 됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
S_1-S_2=0
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이것이 두 원의 공통현의 방정식입니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="mb-3 font-bold text-blue-300">
                                공통현을 구하는 방법
                            </p>

                            <BlockMath
                                math={String.raw`
\text{두 원을 연립}
\rightarrow
\text{이차항을 소거}
\rightarrow
\text{공통현}
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
                                두 원{" "}
                                <InlineMath math="x^2+y^2=16" />,{" "}
                                <InlineMath math="(x+4)^2+(y+4)^2=16" />
                                의 교점과 점{" "}
                                <InlineMath math="(-8,0)" />
                                을 지나는 원의 방정식을{" "}
                                <InlineMath math="x^2+y^2+Ax+By+C=0" />
                                이라 할 때,
                                상수{" "}
                                <InlineMath math="A,\ B,\ C" />
                                에 대하여{" "}
                                <InlineMath math="A+B+C" />
                                의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p>
                                    두 원의 방정식을 한쪽으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-16=0\\
x^2+y^2+8x+8y+16=0
\end{array}
`}
                                />

                                <p>
                                    입니다.
                                </p>

                                <p>
                                    두 원의 교점을 지나는 원의 방정식을
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-16)
+k(x^2+y^2+8x+8y+16)
=0
`}
                                />

                                <p>
                                    으로 둡니다.
                                </p>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        점을 바로 대입
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        구하는 원은 점{" "}
                                        <InlineMath math="(-8,0)" />
                                        을 지나므로 식을 전개하지 않고 바로 대입합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{(-8)^2-16\}
+k\{(-8)^2+8(-8)+16\}
=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
48+16k=0
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
k=-3
`}
                                    />

                                </div>

                                <p>
                                    이제{" "}
                                    <InlineMath math="k=-3" />
                                    을 처음 식에 대입한 뒤 마지막에 한 번만 정리합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-16)
-3(x^2+y^2+8x+8y+16)
=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
-2x^2-2y^2-24x-24y-64=0
`}
                                />

                                <p>
                                    양변을{" "}
                                    <InlineMath math="-2" />
                                    로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2+12x+12y+32=0
`}
                                />

                                <p>
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=12,\qquad B=12,\qquad C=32
`}
                                />

                                <p>
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A+B+C
=
12+12+32
=
\boxed{56}
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
                                두 원{" "}
                                <InlineMath math="x^2+y^2-2ax-ay+10=0" />,{" "}
                                <InlineMath math="x^2+y^2-10x=0" />의 교점과 두 점{" "}
                                <InlineMath math="(0,5),\ (4,3)" />을 지나는 원의 넓이가{" "}
                                <InlineMath math="b\pi" />일 때,{" "}
                                <InlineMath math="ab" />의 값을 구하시오.
                                (단, <InlineMath math="a" />는 상수이다.)
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 교점을 지나는 원의 방정식을
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-2ax-ay+10)
+k(x^2+y^2-10x)=0
`}
                                />

                                <p className="leading-8">
                                    으로 둡니다.
                                </p>

                                <p className="leading-8">
                                    이 원은 점 <InlineMath math="(0,5)" />를 지나므로
                                    식에 바로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
25-5a+10+25k=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
7-a+5k=0
`}
                                />

                                <p className="leading-8">
                                    또한 점 <InlineMath math="(4,3)" />을 지나므로
                                </p>

                                <BlockMath
                                    math={String.raw`
25-8a-3a+10+k(25-40)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
35-11a-15k=0
`}
                                />

                                <p className="leading-8">
                                    두 식을 연립하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{cases}
7-a+5k=0\\
35-11a-15k=0
\end{cases}
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=4,\qquad k=-\frac35
`}
                                />

                                <p className="leading-8">
                                    따라서 처음 식에{" "}
                                    <InlineMath math="a=4,\ k=-\frac35" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-8x-4y+10)
-\frac35(x^2+y^2-10x)=0
`}
                                />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2-5x-10y+25=0
`}
                                />

                                <p className="leading-8">
                                    원의 반지름의 제곱은
                                </p>

                                <BlockMath
                                    math={String.raw`
r^2
=
\left(\frac52\right)^2
+5^2
-25
=
\frac{25}{4}
`}
                                />

                                <p className="leading-8">
                                    따라서 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r^2=\frac{25}{4}\pi
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
b=\frac{25}{4}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
ab
=
4\cdot\frac{25}{4}
=
\boxed{25}
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
                                원{" "}
                                <InlineMath math="C_1:x^2+y^2+2ax+2y-6=0" />
                                이 원{" "}
                                <InlineMath math="C_2:x^2+y^2+2x-2ay-2=0" />
                                의 둘레의 길이를 이등분할 때,
                                양수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 공통현은 두 원의 방정식을 빼서
                                    이차항을 소거하면 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2+2ax+2y-6)
-
(x^2+y^2+2x-2ay-2)
=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
2(a-1)x+2(a+1)y-4=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a-1)x+(a+1)y-2=0
`}
                                />

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        둘레를 이등분한다는 의미
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        공통현이 원{" "}
                                        <InlineMath math="C_2" />
                                        의 둘레를 이등분하려면 공통현은
                                        <strong className="text-white">
                                            {" "}원 C₂의 중심
                                        </strong>
                                        을 지나야 합니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    원{" "}
                                    <InlineMath math="C_2:x^2+y^2+2x-2ay-2=0" />
                                    의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(-1,a)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 점이 공통현
                                </p>

                                <BlockMath
                                    math={String.raw`
(a-1)x+(a+1)y-2=0
`}
                                />

                                <p className="leading-8">
                                    위에 있으므로 바로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
-(a-1)+a(a+1)-2=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a^2-1=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(a-1)(a+1)=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a=\pm1
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{1}
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
                                원{" "}
                                <InlineMath math="(x-2)^2+(y-5)^2=r^2" />
                                이 원{" "}
                                <InlineMath math="(x+1)^2+(y-3)^2=4" />
                                의 둘레를 이등분할 때,
                                반지름 <InlineMath math="r" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 방정식을 일반형으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-4x-10y+29-r^2=0\\
x^2+y^2+2x-6y+6=0
\end{array}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 원의 공통현은 두 식을 빼서
                                    이차항을 소거하면 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-4x-10y+29-r^2)
-
(x^2+y^2+2x-6y+6)
=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
-6x-4y+23-r^2=0
`}
                                />

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        둘레를 이등분한다는 의미
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        공통현이 원{" "}
                                        <InlineMath math="(x+1)^2+(y-3)^2=4" />
                                        의 둘레를 이등분하므로,
                                        공통현은 이 원의 중심을 지납니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    원{" "}
                                    <InlineMath math="(x+1)^2+(y-3)^2=4" />
                                    의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(-1,3)
`}
                                />

                                <p className="leading-8">
                                    이므로 이 점을 공통현의 방정식에 바로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
-6(-1)-4(3)+23-r^2=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
17-r^2=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
r^2=17
`}
                                />

                                <p className="leading-8">
                                    반지름은 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{r=\sqrt{17}}
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

                        <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

                            {/* 문제 */}
                            <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림과 같이 원{" "}
                                    <InlineMath math="x^2+y^2=36" />을
                                    선분 <InlineMath math="PQ" />를 접는 선으로 접어서{" "}
                                    <InlineMath math="x" />축 위의 점{" "}
                                    <InlineMath math="(2,0)" />에서 접하도록 하였다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    직선 <InlineMath math="PQ" />의 방정식을{" "}
                                    <InlineMath math="x+ay+b=0" />이라 할 때,
                                    상수 <InlineMath math="a,\ b" />에 대하여{" "}
                                    <InlineMath math="ab" />의 값을 구하시오.
                                </p>

                            </div>

                            {/* 그림 */}
                            <div className="flex items-center justify-center rounded-xl border border-white/10 bg-white p-4">

                                <img
                                    src="/images/commonMath2/1.23_5.png"
                                    alt="원을 선분 PQ를 따라 접어 x축에 접하게 한 그림"
                                    className="mx-auto w-full max-w-md rounded-lg"
                                />

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    원을 직선 <InlineMath math="PQ" />를 따라 접으면
                                    원래의 원은 직선 <InlineMath math="PQ" />에 대하여
                                    대칭인 원으로 옮겨집니다.
                                </p>

                                <p className="leading-8">
                                    원래 원의 반지름은 <InlineMath math="6" />이므로
                                    접은 뒤의 원도 반지름이 <InlineMath math="6" />입니다.
                                </p>

                                <p className="leading-8">
                                    접은 뒤의 원이 <InlineMath math="x" />축의 점{" "}
                                    <InlineMath math="(2,0)" />에서 접하므로,
                                    그림에서 접은 원의 중심은
                                </p>

                                <BlockMath
                                    math={String.raw`
(2,-6)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 접은 뒤의 원의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-2)^2+(y+6)^2=36
`}
                                />

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        접는 선 PQ
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        직선 <InlineMath math="PQ" />는 원래 원과 접은 뒤의 원의
                                        두 교점 <InlineMath math="P,\ Q" />를 지나는
                                        <b> 공통현</b>입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    따라서 두 원
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2=36\\
(x-2)^2+(y+6)^2=36
\end{array}
`}
                                />

                                <p className="leading-8">
                                    을 연립하여 이차항을 소거합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+y^2
-
\{(x-2)^2+(y+6)^2\}
=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
4x-12y-40=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
x-3y-10=0
`}
                                />

                                <p className="leading-8">
                                    주어진 식{" "}
                                    <InlineMath math="x+ay+b=0" />과 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-3,\qquad b=-10
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
ab=(-3)(-10)=\boxed{30}
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
                                두 원{" "}
                                <InlineMath math="x^2+y^2=9" />,{" "}
                                <InlineMath math="x^2+(y+2)^2=5" />
                                의 두 교점을{" "}
                                <InlineMath math="A,\ B" />라 할 때,
                                삼각형 <InlineMath math="OAB" />의 넓이를 구하시오.
                                (단, <InlineMath math="O" />는 원점이다.)
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 점 <InlineMath math="A,\ B" />를 지나는 직선은
                                    두 원의 공통현입니다.
                                </p>

                                <p className="leading-8">
                                    두 원의 방정식을 한쪽으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-9=0\\
x^2+y^2+4y-1=0
\end{array}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    두 식을 빼서 이차항을 소거하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x^2+y^2-9)
-
(x^2+y^2+4y-1)
=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
-4y-8=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
y=-2
`}
                                />

                                <p className="leading-8">
                                    따라서 공통현 <InlineMath math="AB" />는
                                    직선 <InlineMath math="y=-2" /> 위에 있습니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 원{" "}
                                    <InlineMath math="x^2+y^2=9" />에서{" "}
                                    <InlineMath math="y=-2" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+4=9
`}
                                />

                                <BlockMath
                                    math={String.raw`
x^2=5
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A(-\sqrt5,-2),\qquad
B(\sqrt5,-2)
`}
                                />

                                <p className="leading-8">
                                    따라서 현의 길이는
                                </p>

                                <BlockMath
                                    math={String.raw`
AB=2\sqrt5
`}
                                />

                                <p className="leading-8">
                                    원점 <InlineMath math="O" />에서 직선{" "}
                                    <InlineMath math="AB:y=-2" />까지의 거리는
                                </p>

                                <BlockMath
                                    math={String.raw`
2
`}
                                />

                                <p className="leading-8">
                                    이므로 삼각형 <InlineMath math="OAB" />의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac12
\cdot
2\sqrt5
\cdot
2
=
2\sqrt5
`}
                                />

                                <BlockMath
                                    math={String.raw`
\boxed{2\sqrt5}
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
                                좌표평면 위의 두 원{" "}
                                <InlineMath math="x^2+y^2=16" />과{" "}
                                <InlineMath math="(x-a)^2+y^2=7" />이
                                서로 다른 두 점에서 만날 때,
                                공통현의 길이가 최대가 되도록 하는
                                양수 <InlineMath math="a" />의 값을 구하시오.
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 반지름은 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
4,\qquad \sqrt7
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    공통현은 두 원의 현이므로,
                                    공통현의 길이는 작은 원의 지름보다 클 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{공통현의 길이}\le 2\sqrt7
`}
                                />

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        공통현의 길이가 최대가 되려면
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        공통현이 작은 원의 중심을 지날 때
                                        작은 원의 지름이 되므로 그 길이가 최대가 됩니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    두 원의 방정식을 한쪽으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-16=0\\
x^2+y^2-2ax+a^2-7=0
\end{array}
`}
                                />

                                <p className="leading-8">
                                    두 식을 빼서 이차항을 소거하면
                                    공통현의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
2ax-a^2-9=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    작은 원{" "}
                                    <InlineMath math="(x-a)^2+y^2=7" />의 중심은{" "}
                                    <InlineMath math="(a,0)" />이고,
                                    공통현의 길이가 최대일 때 이 중심을 지나므로
                                    공통현의 방정식에 바로 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2a(a)-a^2-9=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
a^2=9
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="a" />는 양수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{a=3}
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
                                두 원
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=6,\qquad
(x+2)^2+(y-2)^2=10
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 두 교점을 지나는 원 중에서
                                넓이가 최소인 원의 넓이를 구하시오.
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 교점을{" "}
                                    <InlineMath math="A,\ B" />라 하겠습니다.
                                </p>

                                <p className="leading-8">
                                    두 원의 방정식을 한쪽으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-6=0\\
x^2+y^2+4x-4y-2=0
\end{array}
`}
                                />

                                <p className="leading-8">
                                    두 식을 빼서 이차항을 소거하면
                                    공통현 <InlineMath math="AB" />의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
4x-4y+4=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
x-y+1=0
`}
                                />

                                <p className="leading-8">
                                    즉,
                                </p>

                                <BlockMath
                                    math={String.raw`
y=x+1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이를 첫 번째 원{" "}
                                    <InlineMath math="x^2+y^2=6" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+(x+1)^2=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
2x^2+2x-5=0
`}
                                />

                                <p className="leading-8">
                                    두 근의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{\sqrt{2^2-4\cdot2\cdot(-5)}}{2}
=
\sqrt{11}
`}
                                />

                                <p className="leading-8">
                                    이고, 직선{" "}
                                    <InlineMath math="y=x+1" /> 위에서는{" "}
                                    <InlineMath math="x" />좌표의 차와{" "}
                                    <InlineMath math="y" />좌표의 차가 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
AB
=
\sqrt{(\sqrt{11})^2+(\sqrt{11})^2}
=
\sqrt{22}
`}
                                />

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        넓이가 최소인 원
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        두 점{" "}
                                        <InlineMath math="A,\ B" />를 지나는 원의 반지름은
                                        선분 <InlineMath math="AB" />의 절반보다 작을 수 없습니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        따라서{" "}
                                        <InlineMath math="AB" />가 지름일 때
                                        반지름이 가장 작고, 원의 넓이도 최소가 됩니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
r_{\min}
=
\frac{AB}{2}
=
\frac{\sqrt{22}}{2}
`}
                                />

                                <p className="leading-8">
                                    따라서 최소인 원의 넓이는
                                </p>

                                <BlockMath
                                    math={String.raw`
\pi r_{\min}^2
=
\pi\left(\frac{\sqrt{22}}{2}\right)^2
=
\boxed{\frac{11\pi}{2}}
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
                                두 원
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=k,\qquad
x^2+y^2+8x-6y+6=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 공통현의 길이가{" "}
                                <InlineMath math="2\sqrt3" />이 되도록 하는
                                모든 상수 <InlineMath math="k" />의 값의 합을 구하시오.
                            </p>

                        </div>

                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-4 text-gray-300">

                                <p className="leading-8">
                                    두 원의 방정식을 한쪽으로 정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{l}
x^2+y^2-k=0\\
x^2+y^2+8x-6y+6=0
\end{array}
`}
                                />

                                <p className="leading-8">
                                    두 식을 빼서 이차항을 소거하면
                                    공통현의 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
8x-6y+k+6=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 원의 중심은 원점이고,
                                    반지름의 제곱은 <InlineMath math="k" />입니다.
                                </p>

                                <p className="leading-8">
                                    원점에서 공통현까지의 거리를{" "}
                                    <InlineMath math="d" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
d
=
\frac{|k+6|}
{\sqrt{8^2+(-6)^2}}
=
\frac{|k+6|}{10}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                    <p className="font-bold text-yellow-300">
                                        현의 길이 이용하기
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        공통현의 길이가{" "}
                                        <InlineMath math="2\sqrt3" />이므로,
                                        현의 절반의 길이는{" "}
                                        <InlineMath math="\sqrt3" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        반지름, 중심에서 현까지의 거리,
                                        현의 절반으로 만들어지는 직각삼각형에서
                                        피타고라스의 정리를 이용합니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
k
=
d^2+(\sqrt3)^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
k
=
\left(\frac{k+6}{10}\right)^2+3
`}
                                />

                                <p className="leading-8">
                                    양변에 <InlineMath math="100" />을 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
100k=(k+6)^2+300
`}
                                />

                                <BlockMath
                                    math={String.raw`
k^2-88k+336=0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(k-4)(k-84)=0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
k=4,\qquad 84
`}
                                />

                                <p className="leading-8">
                                    모든 <InlineMath math="k" />의 값의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
4+84=\boxed{88}
`}
                                />

                            </div>

                        </details>

                    </div>

                    {/* Tip */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                        <h3 className="mb-4 text-xl font-bold text-yellow-300">
                            Tip
                        </h3>

                        <p className="leading-8 text-gray-300">
                            공통현은 두 원을 연립하여{" "}
                            <strong className="text-white">이차항을 소거</strong>
                            하면 바로 구할 수 있습니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
S_1-S_2=0
}
`}
                        />

                    </div>

                </div>

            </section>

        </>
    )
};