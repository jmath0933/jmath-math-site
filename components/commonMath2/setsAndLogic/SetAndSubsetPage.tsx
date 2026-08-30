"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SetAndSubsetPage() {
    return (
        <>
            {/* 2.1 집합과 원소 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.1 집합과 원소
                </h2>

                <p className="leading-8 text-gray-300">
                    어떤 기준에 의해 대상을 분명하게 정할 수 있을 때,
                    그 대상의 모임을 집합이라고 합니다.
                    <br />
                    집합을 이루는 대상 하나하나를 원소라고 합니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            어떤 기준에 의해 대상을{" "}
                            <b>분명하게 정할 수 있을 때</b>,
                            그 대상의 모임을 <b>집합</b>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            일반적으로 집합의 이름은 알파벳 대문자{" "}
                            <InlineMath math="A,\ B,\ C,\ \cdots" />를 사용합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                예
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="5" />보다 작은 자연수의 모임은
                                어떤 수가 포함되는지 분명하게 정할 수 있으므로
                                집합이 됩니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,3,4\}
`}
                            />

                        </div>

                    </div>


                    {/* 2. 원소 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 원소
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합을 구성하는 대상 하나하나를
                            그 집합의 <b>원소</b>라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하면 <InlineMath math="1,\ 2,\ 3,\ 4" />는
                            모두 집합 <InlineMath math="A" />의 원소입니다.
                        </p>

                    </div>


                    {/* 3. 원소와 집합의 관계 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 원소와 집합의 관계
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원소 <InlineMath math="p" />가
                            집합 <InlineMath math="A" />에 포함되어 있으면
                        </p>

                        <BlockMath
                            math={String.raw`
p\in A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타냅니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            반대로 원소 <InlineMath math="q" />가
                            집합 <InlineMath math="A" />에 포함되어 있지 않으면
                        </p>

                        <BlockMath
                            math={String.raw`
q\notin A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타냅니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                기호를 사용하는 순서
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                <InlineMath math="\in" />과{" "}
                                <InlineMath math="\notin" />은
                                원소와 집합의 관계를 나타내는 기호입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                기호를 중심으로 왼쪽에는 원소,
                                오른쪽에는 집합을 씁니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{원소}\ \in\ \text{집합}
}
`}
                            />

                            <BlockMath
                                math={String.raw`
\boxed{
\text{원소}\ \notin\ \text{집합}
}
`}
                            />

                        </div>

                    </div>


                    {/* 4. 유한집합과 무한집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            4. 유한집합과 무한집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합은 원소의 개수에 따라
                            유한집합과 무한집합으로 나눌 수 있습니다.
                        </p>


                        <div className="mt-5 grid gap-5 lg:grid-cols-2">

                            {/* 유한집합 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    유한집합
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원소의 개수가 유한개인 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,3,4,5\}
`}
                                />

                            </div>


                            {/* 무한집합 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    무한집합
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    원소가 무한히 많은 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{1,2,3,4,\cdots\}
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 5. 공집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            5. 공집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원소가 하나도 없는 집합을
                            <b> 공집합</b>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            공집합은 다음 기호로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{\varnothing}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            공집합은 원소가 <InlineMath math="0" />개인
                            유한집합입니다.
                        </p>

                    </div>


                    {/* 6. 집합의 원소의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            6. 집합의 원소의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            유한집합 <InlineMath math="A" />의 원소의 개수를
                            다음과 같이 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
n(A)
`}
                        />

                        <p className="leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이면 집합 <InlineMath math="A" />의 원소의 개수는{" "}
                            <InlineMath math="5" />이므로
                        </p>

                        <BlockMath
                            math={String.raw`
n(A)=5
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                원소의 개수 표현
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
n(\text{집합})=\text{원소의 개수}
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 유한집합에 대하여{" "}
                                <InlineMath math="n(A)" />의 값은
                                항상 <InlineMath math="0" /> 또는 자연수입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                특히 공집합은 원소가 없으므로
                            </p>

                            <BlockMath
                                math={String.raw`
n(\varnothing)=0
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
                            다음 중 집합인 것을 모두 고르면? (정답 2개)
                        </p>

                        <div className="mt-4 space-y-2 leading-8 text-gray-300">
                            <p>① 작은 홀수의 모임</p>
                            <p>② 제주도에서 유명한 식당의 모임</p>
                            <p>③ 노래를 잘하는 사람들의 모임</p>
                            <p>④ 우리 반에서 3월에 태어난 학생들의 모임</p>
                            <p>
                                ⑤ <InlineMath math="1" />보다 크고{" "}
                                <InlineMath math="2" />보다 작은 자연수의 모임
                            </p>
                        </div>

                    </div>

                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합인지 판단할 때는 주어진 대상이 포함되는지
                                포함되지 않는지를 <b>분명하게 정할 수 있는지</b>를 확인합니다.
                            </p>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ① 작은 홀수의 모임
                                </p>

                                <p className="leading-8">
                                    어느 정도의 수를 <b>작다</b>고 할 것인지
                                    기준이 분명하지 않으므로 집합이 아닙니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ② 제주도에서 유명한 식당의 모임
                                </p>

                                <p className="leading-8">
                                    어느 정도를 유명하다고 할 것인지 기준이 분명하지 않으므로
                                    집합이 아닙니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ③ 노래를 잘하는 사람들의 모임
                                </p>

                                <p className="leading-8">
                                    노래를 잘한다는 기준이 사람에 따라 달라질 수 있으므로
                                    집합이 아닙니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ④ 우리 반에서 3월에 태어난 학생들의 모임
                                </p>

                                <p className="leading-8">
                                    생일을 확인하면 해당 학생인지 아닌지를 분명하게
                                    판단할 수 있으므로 집합입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-3 font-bold text-white">
                                    ⑤ 1보다 크고 2보다 작은 자연수의 모임
                                </p>

                                <p className="leading-8">
                                    조건을 만족하는 자연수는 없습니다.
                                    따라서 이 모임은 공집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing
`}
                                />

                                <p className="leading-8">
                                    공집합도 집합이므로 ⑤도 집합입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{④,\ ⑤}
`}
                                />

                            </div>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합은 원소가 많이 있는지가 중요한 것이 아니라,
                                    어떤 대상이 그 모임에 속하는지를
                                    분명하게 판단할 수 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{분명하게 판단 가능}
\ \Longrightarrow\
\text{집합}
}
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
                            집합 <InlineMath math="A=\{a,b,c,d\}" />에 대하여
                            다음 중 옳지 않은 것은?
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">

                            <p>
                                ① <InlineMath math="a\in A" />
                            </p>

                            <p>
                                ② <InlineMath math="b\in A" />
                            </p>

                            <p>
                                ③ <InlineMath math="c\notin A" />
                            </p>

                            <p>
                                ④ <InlineMath math="d\in A" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="e\notin A" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A" />의 원소를 확인하면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{a,b,c,d\}
`}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="a,\ b,\ c,\ d" />는
                                모두 집합 <InlineMath math="A" />의 원소이고,{" "}
                                <InlineMath math="e" />는 집합{" "}
                                <InlineMath math="A" />의 원소가 아닙니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <BlockMath
                                    math={String.raw`
a\in A,\qquad
b\in A,\qquad
c\in A,\qquad
d\in A
`}
                                />

                                <BlockMath
                                    math={String.raw`
e\notin A
`}
                                />

                            </div>


                            <p className="leading-8">
                                따라서 <InlineMath math="c" />는 집합{" "}
                                <InlineMath math="A" />의 원소이므로
                            </p>

                            <BlockMath
                                math={String.raw`
c\notin A
`}
                            />

                            <p className="leading-8">
                                는 옳지 않은 표현입니다.
                            </p>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{③}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원소가 집합 안에 있으면{" "}
                                    <InlineMath math="\in" />,
                                    집합 안에 없으면{" "}
                                    <InlineMath math="\notin" />을 사용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{원소}\ \in\ \text{집합}
}
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
                            집합{" "}
                            <InlineMath math="A=\{1,2,\{3\},\{2,3\}\}" />에 대하여
                            옳은 것은?
                        </p>

                        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-gray-300">

                            <p>
                                ① <InlineMath math="1\notin A" />
                            </p>

                            <p>
                                ② <InlineMath math="3\in A" />
                            </p>

                            <p>
                                ③ <InlineMath math="\{1,2\}\in A" />
                            </p>

                            <p>
                                ④ <InlineMath math="\{3\}\in A" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="n(A)=5" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 원소를
                                하나씩 구분해서 봅니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=
\{
\underbrace{1}_{\text{원소}},
\underbrace{2}_{\text{원소}},
\underbrace{\{3\}}_{\text{원소}},
\underbrace{\{2,3\}}_{\text{원소}}
\}
`}
                            />

                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />의 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
1,\qquad 2,\qquad \{3\},\qquad \{2,3\}
`}
                            />

                            <p className="leading-8">
                                의 네 개입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    각 선택지 확인
                                </p>

                                <div className="space-y-3 leading-8">

                                    <p>
                                        ① <InlineMath math="1\notin A" />
                                        {" "}→ <InlineMath math="1\in A" />이므로 옳지 않습니다.
                                    </p>

                                    <p>
                                        ② <InlineMath math="3\in A" />
                                        {" "}→ <InlineMath math="3" />은 원소가 아니고{" "}
                                        <InlineMath math="\{3\}" />이 원소이므로 옳지 않습니다.
                                    </p>

                                    <p>
                                        ③ <InlineMath math="\{1,2\}\in A" />
                                        {" "}→ <InlineMath math="\{1,2\}" />는
                                        집합 <InlineMath math="A" />의 원소가 아니므로
                                        옳지 않습니다.
                                    </p>

                                    <p>
                                        ④ <InlineMath math="\{3\}\in A" />
                                        {" "}→ <InlineMath math="\{3\}" />은
                                        집합 <InlineMath math="A" />의 원소이므로 옳습니다.
                                    </p>

                                    <p>
                                        ⑤ <InlineMath math="n(A)=5" />
                                        {" "}→ 원소는 네 개이므로{" "}
                                        <InlineMath math="n(A)=4" />입니다.
                                    </p>

                                </div>

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{④}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합의 원소는 수뿐만 아니라
                                    하나의 집합일 수도 있습니다.
                                    중괄호로 묶인 것을 하나의 원소로 보아야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
3\notin A,
\qquad
\{3\}\in A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 원소의 개수를 셀 때{" "}
                                    <InlineMath math="\{3\}" />과{" "}
                                    <InlineMath math="\{2,3\}" />은 각각 하나의 원소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{n(A)=4}
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
                            다음 중 옳은 것을 고르시오.
                        </p>

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                ① <InlineMath math="n(\{\varnothing,1\})=1" />
                            </p>

                            <p>
                                ② <InlineMath math="n(\{0\})<n(\{2\})" />
                            </p>

                            <p>
                                ③ <InlineMath math="n(\{a,c\})=n(\{f,g\})" />
                            </p>

                            <p>
                                ④ <InlineMath math="n(A)=0" />이면{" "}
                                <InlineMath math="A=\{\varnothing\}" />이다.
                            </p>

                            <p>
                                ⑤{" "}
                                <InlineMath math="n(\{3,5,7\})-n(\{3,7\})=5" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="n(A)" />는
                                집합 <InlineMath math="A" />의 원소의 개수를 나타냅니다.
                                각 선택지의 원소의 개수를 확인해 봅시다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① <InlineMath math="n(\{\varnothing,1\})=1" />
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="\{\varnothing,1\}" />의 원소는
                                    공집합 <InlineMath math="\varnothing" />과{" "}
                                    <InlineMath math="1" />의 두 개입니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{\varnothing,1\})=2
`}
                                />

                                <p className="leading-8">
                                    이므로 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② <InlineMath math="n(\{0\})<n(\{2\})" />
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="\{0\}" />과{" "}
                                    <InlineMath math="\{2\}" />는 각각 원소를 하나씩
                                    가지고 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{0\})=1,
\qquad
n(\{2\})=1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ <InlineMath math="n(\{a,c\})=n(\{f,g\})" />
                                </p>

                                <p className="leading-8">
                                    두 집합은 각각 서로 다른 두 개의 원소를 가지므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{a,c\})=2,
\qquad
n(\{f,g\})=2
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ③은 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ④ <InlineMath math="n(A)=0" />이면{" "}
                                    <InlineMath math="A=\{\varnothing\}" />이다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n(A)=0" />이라는 것은
                                    집합 <InlineMath math="A" />에 원소가 하나도 없다는 뜻입니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\varnothing
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    반면 <InlineMath math="\{\varnothing\}" />은
                                    공집합을 하나의 원소로 가지므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{\varnothing\})=1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ⑤{" "}
                                    <InlineMath math="n(\{3,5,7\})-n(\{3,7\})=5" />
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{3,5,7\})=3,
\qquad
n(\{3,7\})=2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
3-2=1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{③}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="n(A)" />는
                                    집합 <InlineMath math="A" /> 안에 들어 있는
                                    원소의 개수를 나타냅니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    특히 공집합과 공집합을 원소로 가지는 집합을
                                    구별해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
n(\varnothing)=0,
\qquad
n(\{\varnothing\})=1
}
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

                    <div className="space-y-4 text-gray-300">

                        <p>
                            • 어떤 기준에 의해 대상을 분명하게 정할 수 있을 때,
                            그 대상의 모임을 집합이라고 한다.
                        </p>

                        <p>
                            • 집합을 구성하는 대상 하나하나를 원소라고 한다.
                        </p>

                        <p>
                            • 일반적으로 집합의 이름은 알파벳 대문자를 사용한다.
                        </p>

                        <p>
                            • 원소가 집합에 포함되는 경우와 포함되지 않는 경우는
                        </p>

                        <BlockMath
                            math={String.raw`
p\in A,
\qquad
q\notin A
`}
                        />

                        <p>
                            로 나타낸다.
                        </p>

                        <p>
                            • 원소와 집합의 관계를 나타낼 때는
                            항상 다음 순서로 표현한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\text{원소}\ \in\ \text{집합}
}
`}
                        />

                        <p>
                            • 원소의 개수가 유한개이면 유한집합,
                            원소가 무한히 많으면 무한집합이다.
                        </p>

                        <p>
                            • 원소가 하나도 없는 집합을 공집합이라 하고{" "}
                            <InlineMath math="\varnothing" />로 나타낸다.
                        </p>

                        <p>
                            • 유한집합 <InlineMath math="A" />의 원소의 개수는{" "}
                            <InlineMath math="n(A)" />로 나타낸다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
n(A)=\text{집합 }A\text{의 원소의 개수}
}
`}
                        />

                        <p>
                            • 유한집합에 대하여 <InlineMath math="n(A)" />는
                            항상 <InlineMath math="0" /> 또는 자연수이다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 2.2 집합의 표현 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.2 집합의 표현
                </h2>

                <p className="leading-8 text-gray-300">
                    집합은 원소를 직접 나열하거나 그림으로 나타낼 수도 있고,
                    원소가 만족하는 조건을 이용하여 나타낼 수도 있습니다.
                    <br />
                    집합을 표현하는 방법에는 원소나열법, 벤다이어그램,
                    조건제시법이 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 원소나열법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 원소나열법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합에 속하는 원소를 중괄호{" "}
                            <InlineMath math="\{\ \}" /> 안에
                            하나씩 나열하여 집합을 표현하는 방법을{" "}
                            <b>원소나열법</b>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            예를 들어 <InlineMath math="5" />보다 작은 자연수의
                            집합 <InlineMath math="A" />는
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            와 같이 나타낼 수 있습니다.
                        </p>


                        {/* 무한집합 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                무한집합의 원소나열법
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                무한집합은 모든 원소를 나열할 수 없으므로
                                집합의 특징을 알 수 있을 정도로 원소를 나열한 뒤{" "}
                                <InlineMath math="\cdots" />를 사용합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\{1,2,3,4,\cdots\}
`}
                            />

                            <BlockMath
                                math={String.raw`
\{2,4,6,8,\cdots\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                보통 규칙을 알 수 있도록 앞의 원소를 몇 개 충분히
                                나타내는 것이 좋습니다.
                            </p>

                        </div>


                        {/* 중복과 순서 */}
                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-bold text-blue-300">
                                집합에서는 중복과 순서를 생각하지 않는다
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                같은 원소가 여러 번 나타나더라도
                                집합에서는 하나의 원소로만 생각합니다.
                                또한 원소를 나열하는 순서는 집합에 영향을 주지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\{1,2,3\}
=
\{3,2,1\}
=
\{1,1,2,2,3\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 원소나열법으로 표현할 때에는
                                같은 원소를 중복해서 쓰지 않는 것이 원칙입니다.
                            </p>

                        </div>


                        {/* 집합과 순서쌍 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-bold text-white">
                                중괄호와 소괄호
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                집합을 나타내는 중괄호에서는
                                원소의 순서를 구분하지 않습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\{a,b\}=\{b,a\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                반면 소괄호를 사용하는{" "}
                                <InlineMath math="(a,b)" />는
                                <b> 순서쌍</b>이므로 순서가 중요합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(a,b)\ne(b,a)
\qquad (a\ne b)
`}
                            />

                        </div>

                    </div>


                    {/* 2. 벤다이어그램 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 벤다이어그램
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합을 그림으로 나타낸 것을{" "}
                            <b>벤다이어그램</b>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            를 벤다이어그램으로 나타내면 다음과 같습니다.
                        </p>


                        {/* 벤다이어그램 */}
                        <div className="mx-auto mt-5 max-w-[200px] rounded-xl border border-white/10 bg-white p-4">

                            <img
                                src="/images/commonMath2/2.2_01.png"
                                alt="집합 A의 원소 1, 2, 3, 4를 나타낸 벤다이어그램"
                                className="w-full rounded-lg"
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />를 하나의 영역으로 나타내고,
                            집합 <InlineMath math="A" />의 원소{" "}
                            <InlineMath math="1,\ 2,\ 3,\ 4" />를
                            그 영역 안에 표시합니다.
                        </p>

                    </div>


                    {/* 3. 조건제시법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 조건제시법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원소의 대표적인 형태와 그 원소가 만족해야 하는 조건을 이용하여
                            집합을 표현하는 방법을{" "}
                            <b>조건제시법</b>이라고 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\{
\text{원소의 대표 형태}
\mid
\text{원소에 대한 조건}
\}
}
`}
                        />


                        {/* 조건제시법 읽는 방법 */}
                        <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-bold text-red-300">
                                조건제시법은 해석이 중요하다
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                조건제시법을 볼 때에는 먼저{" "}
                                <InlineMath math="\mid" />의 왼쪽을 보고
                                <b> 집합의 원소가 무엇인지</b> 확인해야 합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그다음 오른쪽을 보고
                                문자의 범위와 원소가 만족해야 하는 조건을 확인합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\text{원소의 형태}
\rightarrow
\text{문자의 범위}
\rightarrow
\text{조건}
}
`}
                            />

                        </div>


                        {/* x | 조건 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                원소의 형태가 <InlineMath math="x" />인 경우
                            </p>

                            <BlockMath
                                math={String.raw`
\{x\mid x^2-3x+2=0\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="\mid" />의 왼쪽이{" "}
                                <InlineMath math="x" />이므로
                                집합의 원소는 조건을 만족하는{" "}
                                <InlineMath math="x" />의 값입니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                즉,
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-3x+2=0
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 <b>해집합</b>을 의미합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(x-1)(x-2)=0
`}
                            />

                            <BlockMath
                                math={String.raw`
x=1,\ 2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\{x\mid x^2-3x+2=0\}
=
\{1,2\}
}
`}
                            />

                        </div>


                        {/* x+1 | 조건 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                원소의 형태가 <InlineMath math="x" />가 아닌 경우
                            </p>

                            <BlockMath
                                math={String.raw`
\{x+1\mid x^2-3x+2=0\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                조건을 만족하는 <InlineMath math="x" />의 값은
                            </p>

                            <BlockMath
                                math={String.raw`
x=1,\ 2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이지만, 이 집합의 원소는{" "}
                                <InlineMath math="x" />가 아니라{" "}
                                <InlineMath math="x+1" />입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
x+1=2,\ 3
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
\{x+1\mid x^2-3x+2=0\}
=
\{2,3\}
}
`}
                            />

                        </div>


                        {/* (x,y) | 조건 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                원소의 형태가 <InlineMath math="(x,y)" />인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                조건제시법에서 원소의 형태가{" "}
                                <InlineMath math="(x,y)" />이면
                                집합의 원소는 좌표평면 위의 <b>점</b>입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\{(x,y)\mid x^2-3x+2=0\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에서 조건을 풀면
                            </p>

                            <BlockMath
                                math={String.raw`
x=1
\qquad\text{또는}\qquad
x=2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다. <InlineMath math="y" />에는 별도의 조건이 없으므로
                                조건을 만족하는 모든 점을 나타내면
                            </p>

                            <BlockMath
                                math={String.raw`
x=1,\qquad x=2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                인 두 개의 세로 직선이 됩니다.
                            </p>


                            <p className="mt-5 leading-8 text-gray-300">
                                마찬가지로
                            </p>

                            <BlockMath
                                math={String.raw`
\{(x,y)\mid y=x^2-3x+2\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                는 <InlineMath math="y=x^2-3x+2" />를 만족하는
                                모든 점 <InlineMath math="(x,y)" />의 집합이므로
                                이차함수의 그래프를 나타냅니다.
                            </p>


                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <BlockMath
                                    math={String.raw`
\boxed{
\begin{array}{c}
\{x\mid\text{조건}\}
\rightarrow
\text{해집합}\\[4pt]
\{(x,y)\mid\text{조건}\}
\rightarrow
\text{그래프}
\end{array}
}
`}
                                />

                            </div>

                        </div>


                        {/* 예시 1 홀수의 집합 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시 1. 식의 모양이 달라도 같은 집합일 수 있다
                            </p>

                            <p className="leading-8 text-gray-300">
                                다음 두 집합을 생각해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{2n-1\mid n\text{은 정수}\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{2n+1\mid n\text{은 정수}\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                각각의 원소를 나열하면
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{\cdots,-5,-3,-1,1,3,5,\cdots\}
`}
                            />

                            <BlockMath
                                math={String.raw`
B=\{\cdots,-5,-3,-1,1,3,5,\cdots\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 두 집합은 같은 집합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{A=B}
`}
                            />


                            <p className="mt-5 leading-8 text-gray-300">
                                이번에는 <InlineMath math="n" />의 범위를
                                자연수로 바꾸어 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
C=\{2n-1\mid n\text{은 자연수}\}
`}
                            />

                            <BlockMath
                                math={String.raw`
D=\{2n+1\mid n\text{은 자연수}\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                각각의 원소를 나열하면
                            </p>

                            <BlockMath
                                math={String.raw`
C=\{1,3,5,7,\cdots\}
`}
                            />

                            <BlockMath
                                math={String.raw`
D=\{3,5,7,9,\cdots\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="C" />에는{" "}
                                <InlineMath math="1" />이 있지만
                                집합 <InlineMath math="D" />에는 없으므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{C\ne D}
`}
                            />


                            <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-bold text-blue-300">
                                    중요한 점
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    조건제시법에서는 식의 모양만 보고
                                    두 집합이 같은지 판단하면 안 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{실제로 만들어지는 원소를 비교한다}
}
`}
                                />

                            </div>

                        </div>


                        {/* 예시 2 두 문자 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                예시 2. 조건에 없는 제한을 마음대로 만들지 않는다
                            </p>

                            <p className="leading-8 text-gray-300">
                                집합
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,3\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                에 대하여 다음 집합을 생각해 봅시다.
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{ab\mid a\in A,\ b\in A\}
`}
                            />


                            <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-bold text-purple-300">
                                    a와 b는 서로 달라야 할까?
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    조건에는 단지
                                </p>

                                <BlockMath
                                    math={String.raw`
a\in A,\qquad b\in A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    라고만 되어 있습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="a\ne b" />라는 조건이 없으므로{" "}
                                    <InlineMath math="a" />와 <InlineMath math="b" />는
                                    같을 수도 있고 다를 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
a=b\text{인 경우와 }a\ne b\text{인 경우를 모두 생각한다}
}
`}
                                />

                            </div>


                            <p className="mt-5 leading-8 text-gray-300">
                                두 문자의 가능한 경우를 빠짐없이 조사할 때에는
                                표를 이용하면 실수를 줄일 수 있습니다.
                            </p>


                            <div className="mt-5 overflow-x-auto">

                                <table className="mx-auto min-w-[420px] border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="a\backslash b" />
                                            </th>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="1" />
                                            </th>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="2" />
                                            </th>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="3" />
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        <tr>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="1" />
                                            </th>
                                            <td className="border border-white/20 px-5 py-3">1</td>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                        </tr>

                                        <tr>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="2" />
                                            </th>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">4</td>
                                            <td className="border border-white/20 px-5 py-3">6</td>
                                        </tr>

                                        <tr>
                                            <th className="border border-white/20 px-5 py-3">
                                                <InlineMath math="3" />
                                            </th>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                            <td className="border border-white/20 px-5 py-3">6</td>
                                            <td className="border border-white/20 px-5 py-3">9</td>
                                        </tr>

                                    </tbody>

                                </table>

                            </div>


                            <p className="mt-5 leading-8 text-gray-300">
                                표에서 나온 값은
                            </p>

                            <BlockMath
                                math={String.raw`
1,2,3,2,4,6,3,6,9
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이지만 집합에서는 같은 원소를 중복해서 쓰지 않으므로
                            </p>

                            <BlockMath
                                math={String.raw`
\boxed{
B=\{1,2,3,4,6,9\}
}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>


                            {/* a != b */}
                            <div className="mt-5 border-t border-white/10 pt-5">

                                <p className="leading-8 text-gray-300">
                                    만약 <InlineMath math="a" />와{" "}
                                    <InlineMath math="b" />가 반드시 서로 달라야 한다면
                                    그 조건을 직접 나타내야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
C=
\{ab\mid
a\in A,\ b\in A,\ a\ne b
\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 경우에는{" "}
                                    <InlineMath math="a=b" />인 경우를 제외하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
C=\{2,3,6\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>


                            <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-bold text-red-300">
                                    조건을 정확하게 읽는다
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    서로 다르다는 조건이 없으면
                                    임의로 서로 다르다고 생각해서는 안 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\begin{array}{c}
a\ne b\text{라는 조건이 없다}\\
\Downarrow\\
a=b\text{인 경우도 포함}
\end{array}
}
`}
                                />

                            </div>

                        </div>

                    </div>

                </div>

                {/* 집합의 표현 방법 비교 */}
                <div className="mt-8 rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        집합의 표현 방법은 왜 여러 가지일까?
                    </h3>

                    <p className="leading-8 text-gray-300">
                        각각의 표현 방법에는 편리한 점과 불편한 점이 있으므로
                        상황에 따라 알맞은 방법을 사용합니다.
                    </p>

                    <div className="mt-5 space-y-4 text-gray-300">

                        <p className="leading-8">
                            • <b className="text-white">원소나열법</b>은
                            원소를 직접 확인하기 쉽지만,
                            실수 전체와 같이 원소가 연속적으로 이어지는 집합은
                            하나씩 나열하여 표현하기 어렵습니다.
                        </p>

                        <p className="leading-8">
                            • <b className="text-white">벤다이어그램</b>은
                            집합을 그림으로 쉽게 이해할 수 있지만,
                            집합이나 원소가 많아지면 그림이 복잡해집니다.
                        </p>

                        <p className="leading-8">
                            • <b className="text-white">조건제시법</b>은
                            복잡하거나 무한한 집합도 간결하게 표현할 수 있지만,
                            조건을 정확하게 해석해야 합니다.
                        </p>

                    </div>

                    <BlockMath
                        math={String.raw`
\boxed{
\text{상황에 따라 알맞은 집합의 표현 방법을 사용한다}
}
`}
                    />

                </div>

                {/* 예제 1 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 1
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            다음 중 옳은 것을 고르시오.
                        </p>

                        <div className="mt-4 space-y-3 leading-8 text-gray-300">

                            <p>
                                ①{" "}
                                <InlineMath math="n(\{1,2,3\})-n(\{1,2\})=3" />
                            </p>

                            <p>
                                ②{" "}
                                <InlineMath math="n(\{\varnothing\})=0" />
                            </p>

                            <p>
                                ③{" "}
                                <InlineMath math="A=\{x\mid 1<x<5\}" />일 때,{" "}
                                <InlineMath math="n(A)=3" />
                            </p>

                            <p>
                                ④{" "}
                                <InlineMath math="A=\{1,2\},\ B=\{2,3,4\}" />,{" "}
                                <InlineMath math="C=\{a+b\mid a\in A,\ b\in B\}" />이면{" "}
                                <InlineMath math="n(C)=5" />
                            </p>

                            <p>
                                ⑤{" "}
                                <InlineMath math="A=\{1,3\},\ B=\{2,4\}" />,{" "}
                                <InlineMath math="C=\{ab\mid a\in A,\ b\in B\}" />이면{" "}
                                <InlineMath math="n(C)=4" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                각 선택지에서 집합의 원소와 원소의 개수를 확인합니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① 원소의 개수
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{1,2,3\})=3,
\qquad
n(\{1,2\})=2
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{1,2,3\})-n(\{1,2\})
=
3-2
=
1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ①은 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② 공집합을 원소로 가지는 집합
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="\{\varnothing\}" />은
                                    공집합이 아니라 <b>공집합을 하나의 원소로 가지는 집합</b>입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
n(\{\varnothing\})=1
`}
                                />

                                <p className="leading-8">
                                    이므로 ②는 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ③ 조건제시법으로 나타낸 집합
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{x\mid 1<x<5\}
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="x" />는{" "}
                                    <InlineMath math="1<x<5" />를 만족하는 수를 나타냅니다.
                                    이 조건을 만족하는 실수는 무한히 많으므로
                                    집합 <InlineMath math="A" />는 무한집합입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="n(A)=3" />은 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ④ 원소가 <InlineMath math="a+b" />인 집합
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a\in A,\ b\in B" />인
                                    모든 경우에 대하여 <InlineMath math="a+b" />를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
1+2&=3,&
1+3&=4,&
1+4&=5,\\
2+2&=4,&
2+3&=5,&
2+4&=6
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    집합에서는 같은 원소를 중복해서 쓰지 않으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
C=\{3,4,5,6\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(C)=4
`}
                                />

                                <p className="leading-8">
                                    이므로 ④는 옳지 않습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ⑤ 원소가 ab인 집합
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a\in A,\ b\in B" />인
                                    모든 경우에 대하여 <InlineMath math="ab" />를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
1\cdot2&=2,&
1\cdot4&=4,\\
3\cdot2&=6,&
3\cdot4&=12
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
C=\{2,4,6,12\}
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(C)=4
`}
                                />

                                <p className="leading-8">
                                    이므로 ⑤는 옳습니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{⑤}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 먼저 집합의 원소가 무엇인지 확인하고,
                                    주어진 조건을 만족하는 모든 경우를 생각합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이때 같은 값이 여러 번 나오더라도
                                    집합에서는 하나의 원소로만 나타냅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{조건을 해석}
\rightarrow
\text{모든 경우 조사}
\rightarrow
\text{중복 제거}
}
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
                            다음 중 집합{" "}
                            <InlineMath
                                math={String.raw`
A=\{x\mid x=2^p\times5^q,\ p,q\text{는 자연수}\}
`}
                            />의 원소가 아닌 것은?
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3 leading-8 text-gray-300 sm:grid-cols-5">
                            <p>① <InlineMath math="10" /></p>
                            <p>② <InlineMath math="60" /></p>
                            <p>③ <InlineMath math="100" /></p>
                            <p>④ <InlineMath math="250" /></p>
                            <p>⑤ <InlineMath math="400" /></p>
                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A" />의 원소는
                                자연수 <InlineMath math="p,q" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
x=2^p\times5^q
`}
                            />

                            <p className="leading-8">
                                꼴로 나타낼 수 있는 수입니다.
                            </p>

                            <p className="leading-8">
                                각 수를 소인수분해하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
10&=2\times5\\
60&=2^2\times3\times5\\
100&=2^2\times5^2\\
250&=2\times5^3\\
400&=2^4\times5^2
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                이 중 <InlineMath math="60" />에는
                                소인수 <InlineMath math="3" />이 포함되어 있으므로{" "}
                                <InlineMath math="2^p\times5^q" />의 꼴로
                                나타낼 수 없습니다.
                            </p>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{②\ 60}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 원소의 형태뿐만 아니라
                                    그 원소를 만드는 문자에 주어진 조건까지 정확하게
                                    확인해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
x=2^p\times5^q,\quad p,q\in\mathbb{N}
}
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
                            세 집합
                        </p>

                        <div className="my-5 space-y-3 text-left text-lg text-gray-200">

                            <p>
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x\text{는 }50\text{보다 작은 }7\text{의 양의 배수}\}
`}
                                />
                            </p>

                            <p>
                                <InlineMath
                                    math={String.raw`
B=\{x\mid x\text{는 }x^2=-4\text{인 실수}\}
`}
                                />
                            </p>

                            <p>
                                <InlineMath
                                    math={String.raw`
C=\{x\mid |x|=4\}
`}
                                />
                            </p>

                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="n(A)+n(B)-n(C)" />의 값을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                각 집합의 조건을 해석하여 원소를 구합니다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 A
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="50" />보다 작은{" "}
                                    <InlineMath math="7" />의 양의 배수를 나열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{7,14,21,28,35,42,49\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=7
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />의 원소는
                                    방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2=-4
`}
                                />

                                <p className="leading-8">
                                    를 만족하는 실수입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    실수의 제곱은 음수가 될 수 없으므로
                                    이 방정식을 만족하는 실수는 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\varnothing
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B)=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 집합 C */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 C
                                </p>

                                <p className="leading-8">
                                    절댓값의 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
|x|=4
`}
                                />

                                <p className="leading-8">
                                    를 만족하는 수는
                                </p>

                                <BlockMath
                                    math={String.raw`
x=-4,\ 4
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
C=\{-4,4\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(C)=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                그러므로
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
n(A)+n(B)-n(C)
&=7+0-2\\
&=5
\end{aligned}
`}
                            />


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
                                    조건제시법으로 나타낸 집합에서는
                                    먼저 조건을 만족하는 원소를 정확하게 찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{조건 해석}
\rightarrow
\text{원소 확인}
\rightarrow
\text{원소의 개수}
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    특히 조건을 만족하는 원소가 하나도 없으면
                                    공집합이므로 원소의 개수는{" "}
                                    <InlineMath math="0" />입니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합{" "}
                            <InlineMath math="A=\{-1,0,1\}" />,{" "}
                            <InlineMath
                                math={String.raw`
B=\{b\mid b=a-1,\ a\in A\}
`}
                            />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
C=\{x^2+y^2\mid x\in A,\ y\in B\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 할 때, 집합 <InlineMath math="C" />의 원소의 합은?
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="B" />의 원소를 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="a\in A" />이고
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{-1,0,1\}
`}
                            />

                            <p className="leading-8">
                                이므로 <InlineMath math="b=a-1" />에 각각 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a=-1&\quad\Rightarrow\quad b=-2\\
a=0&\quad\Rightarrow\quad b=-1\\
a=1&\quad\Rightarrow\quad b=0
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{-2,-1,0\}
`}
                            />


                            <p className="leading-8">
                                이제 집합 <InlineMath math="C" />의 원소를 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
C=\{x^2+y^2\mid x\in A,\ y\in B\}
`}
                            />

                            <p className="leading-8">
                                에서
                            </p>

                            <BlockMath
                                math={String.raw`
x\in\{-1,0,1\}
\quad\Rightarrow\quad
x^2\in\{0,1\}
`}
                            />

                            <BlockMath
                                math={String.raw`
y\in\{-2,-1,0\}
\quad\Rightarrow\quad
y^2\in\{0,1,4\}
`}
                            />

                            <p className="leading-8">
                                이므로 가능한 <InlineMath math="x^2+y^2" />의 값을 모두 구하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
0+0&=0,&
0+1&=1,&
0+4&=4,\\
1+0&=1,&
1+1&=2,&
1+4&=5
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                집합에서는 중복되는 원소를 한 번만 나타내므로
                            </p>

                            <BlockMath
                                math={String.raw`
C=\{0,1,2,4,5\}
`}
                            />

                            <p className="leading-8">
                                따라서 집합 <InlineMath math="C" />의 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
0+1+2+4+5=12
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
                                    여러 집합이 연결되어 정의되어 있으면
                                    앞에서부터 차례대로 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A
\rightarrow
B
\rightarrow
C
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 조건을 만족하는 값을 모두 구한 뒤에는
                                    중복되는 값을 제거하여 집합의 원소를 나타냅니다.
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
                            실수 전체의 집합의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{a^2,\ a+2\},
\qquad
B=\{x+y\mid x\in A,\ y\in A\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 집합 <InlineMath math="B" />의 모든 원소의 합이{" "}
                            <InlineMath math="12" />일 때, 집합{" "}
                            <InlineMath math="A" />의 모든 원소의 합을 구하시오.
                            (단, <InlineMath math="0<a<2" />)
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 두 원소가
                                서로 같은지 확인합니다.
                            </p>

                            <p className="leading-8">
                                만약
                            </p>

                            <BlockMath
                                math={String.raw`
a^2=a+2
`}
                            />

                            <p className="leading-8">
                                라면
                            </p>

                            <BlockMath
                                math={String.raw`
a^2-a-2=0
`}
                            />

                            <BlockMath
                                math={String.raw`
(a-2)(a+1)=0
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a=2
\qquad\text{또는}\qquad
a=-1
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                그런데 <InlineMath math="0<a<2" />이므로
                                두 값 모두 조건을 만족하지 않습니다.
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^2\ne a+2
`}
                            />

                            <p className="leading-8">
                                이고, 집합 <InlineMath math="A" />는 서로 다른 두 원소를 가집니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B의 원소 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="x,y\in A" />이고
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{a^2,\ a+2\}
`}
                                />

                                <p className="leading-8">
                                    이므로 가능한 <InlineMath math="x+y" />의 값은
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
a^2+a^2&=2a^2,\\
a^2+(a+2)&=a^2+a+2,\\
(a+2)+a^2&=a^2+a+2,\\
(a+2)+(a+2)&=2a+4
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    같은 값은 집합에서 한 번만 나타내므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{2a^2,\ a^2+a+2,\ 2a+4\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이 세 원소의 합이 <InlineMath math="12" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
2a^2+(a^2+a+2)+(2a+4)=12
`}
                            />

                            <p className="leading-8">
                                정리하면
                            </p>

                            <BlockMath
                                math={String.raw`
3a^2+3a+6=12
`}
                            />

                            <BlockMath
                                math={String.raw`
3(a^2+a+2)=12
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+a+2=4
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                그런데 집합 <InlineMath math="A" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
a^2+(a+2)=a^2+a+2
`}
                            />

                            <p className="leading-8">
                                이므로
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
                                    조건제시법으로 집합을 만들 때에는
                                    가능한 모든 경우를 먼저 구하고,
                                    같은 값이 나오면 하나의 원소로만 생각합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
B
&=\{2a^2,\ a^2+a+2,\ 2a+4\}
\end{aligned}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 세 원소의 합이
                                    집합 <InlineMath math="A" />의 원소의 합의{" "}
                                    <InlineMath math="3" />배가 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{집합 }B\text{의 원소의 합}
=
3\times
\text{집합 }A\text{의 원소의 합}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <div className="my-5 space-y-3 text-left text-lg text-gray-200">

                            <p>
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x\text{는 }20\text{의 양의 약수}\}
`}
                                />
                            </p>

                            <p>
                                <InlineMath
                                    math={String.raw`
B=\{x\mid x\text{는 }k\text{ 미만의 양의 짝수},\ k\text{는 자연수}\}
`}
                                />
                            </p>

                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="n(A)=n(B)" />를 만족시키는
                            모든 <InlineMath math="k" />의 값의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 원소를 구합니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="20" />의 양의 약수는
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{1,2,4,5,10,20\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
n(A)=6
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B의 원소의 개수
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n(A)=n(B)" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(B)=6
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    작은 양의 짝수부터 여섯 개를 나열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 4,\ 6,\ 8,\ 10,\ 12
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 집합 <InlineMath math="B" />가
                                    정확히 여섯 개의 원소를 가지려면
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{2,4,6,8,10,12\}
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                집합 <InlineMath math="B" />는{" "}
                                <InlineMath math="k" /> <b>미만</b>의 양의 짝수의 집합입니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="12" />는 포함되어야 하고
                                다음 양의 짝수인 <InlineMath math="14" />는
                                포함되지 않아야 하므로
                            </p>

                            <BlockMath
                                math={String.raw`
12<k\le14
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="k" />는 자연수이므로
                            </p>

                            <BlockMath
                                math={String.raw`
k=13,\ 14
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 모든 <InlineMath math="k" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
13+14=27
`}
                            />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{27}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 조건에 사용된 표현을
                                    정확하게 해석해야 합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에서 <InlineMath math="k" /> 미만이라는 것은{" "}
                                    <InlineMath math="k" /> 자체는 포함하지 않는다는 뜻입니다.
                                    원소가 정확히 여섯 개가 되려면
                                </p>

                                <BlockMath
                                    math={String.raw`
12<k\le14
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\text{원소의 개수 결정}
\rightarrow
\text{경계값 확인}
\rightarrow
\text{조건에 맞는 }k\text{ 찾기}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합{" "}
                            <InlineMath math="A=\{-1,0,1,a\}" />,{" "}
                            <InlineMath math="B=\{1,2,3,4\}" />에 대하여 집합
                        </p>

                        <BlockMath
                            math={String.raw`
X=\{x+y\mid x\in A,\ y\in B\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="n(X)=7" />이 되도록 하는
                            자연수 <InlineMath math="a" />의 값을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 <InlineMath math="a" />를 제외한 집합{" "}
                                <InlineMath math="A" />의 세 원소
                            </p>

                            <BlockMath
                                math={String.raw`
-1,\ 0,\ 1
`}
                            />

                            <p className="leading-8">
                                과 집합 <InlineMath math="B" />의 원소를 더하여
                                만들 수 있는 값을 구합니다.
                            </p>


                            <div className="overflow-x-auto">
                                <table className="mx-auto border-collapse text-center">
                                    <tbody>
                                        <tr>
                                            <td className="border border-white/20 px-5 py-3">
                                                <InlineMath math="x\backslash y" />
                                            </td>
                                            <td className="border border-white/20 px-5 py-3">1</td>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                            <td className="border border-white/20 px-5 py-3">4</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-white/20 px-5 py-3">
                                                -1
                                            </td>
                                            <td className="border border-white/20 px-5 py-3">0</td>
                                            <td className="border border-white/20 px-5 py-3">1</td>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-white/20 px-5 py-3">
                                                0
                                            </td>
                                            <td className="border border-white/20 px-5 py-3">1</td>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                            <td className="border border-white/20 px-5 py-3">4</td>
                                        </tr>

                                        <tr>
                                            <td className="border border-white/20 px-5 py-3">
                                                1
                                            </td>
                                            <td className="border border-white/20 px-5 py-3">2</td>
                                            <td className="border border-white/20 px-5 py-3">3</td>
                                            <td className="border border-white/20 px-5 py-3">4</td>
                                            <td className="border border-white/20 px-5 py-3">5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>


                            <p className="leading-8">
                                따라서 현재까지 만들어지는 서로 다른 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
\{0,1,2,3,4,5\}
`}
                            />

                            <p className="leading-8">
                                로 모두 <InlineMath math="6" />개입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="a" />에서 만들어지는 원소
                                </p>

                                <p className="leading-8">
                                    이제 <InlineMath math="x=a" />일 때 만들어지는 값은
                                </p>

                                <BlockMath
                                    math={String.raw`
a+1,\ a+2,\ a+3,\ a+4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="n(X)=7" />이 되려면
                                    기존의 <InlineMath math="6" />개 원소에
                                    새로운 원소가 정확히 하나만 추가되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{a+1,a+2,a+3,a+4\}
`}
                                />

                                <p className="leading-8">
                                    중 앞의 세 수는 기존의{" "}
                                    <InlineMath math="\{0,1,2,3,4,5\}" />에 포함되고,
                                    마지막 수 하나만 새로운 값이 되어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
a+3\le5<a+4
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
1<a\le2
`}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="a" />는 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                실제로 <InlineMath math="a=2" />이면
                            </p>

                            <BlockMath
                                math={String.raw`
\{a+1,a+2,a+3,a+4\}
=
\{3,4,5,6\}
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
X=\{0,1,2,3,4,5,6\}
`}
                            />

                            <p className="leading-8">
                                이 되어 <InlineMath math="n(X)=7" />을 만족합니다.
                            </p>


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{a=2}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합의 원소의 개수를 구할 때에는
                                    같은 값이 여러 번 만들어져도 하나의 원소로만 셉니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 이 문제에서는 먼저 확정된 원소를 구한 뒤,
                                    <InlineMath math="a" />에 의해 새로운 원소가
                                    몇 개 추가되는지를 생각하는 것이 중요합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
6\text{개의 기존 원소}
+
1\text{개의 새로운 원소}
=
7\text{개의 원소}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            실수 전체의 집합의 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2-2kx+k+12<0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A=\varnothing" />이 되도록 하는
                            정수 <InlineMath math="k" />의 개수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 의미를 해석합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{x\mid x^2-2kx+k+12<0\}
`}
                            />

                            <p className="leading-8">
                                는 부등식
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-2kx+k+12<0
`}
                            />

                            <p className="leading-8">
                                을 만족하는 모든 실수 <InlineMath math="x" />의 집합입니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="A=\varnothing" />이라는 것은
                                이 부등식을 만족하는 실수 <InlineMath math="x" />가
                                하나도 없다는 뜻입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    부등식의 해가 없을 조건
                                </p>

                                <p className="leading-8">
                                    이차식
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-2kx+k+12
`}
                                />

                                <p className="leading-8">
                                    의 이차항의 계수는 양수입니다.
                                    따라서 이 식이 <InlineMath math="0" />보다 작은 부분이
                                    존재하지 않으려면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{D}{4}\le0
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
\frac{D}{4}
&=(-k)^2-(k+12)\\
&=k^2-k-12\\
&=(k-4)(k+3)
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
(k-4)(k+3)\le0
`}
                                />

                                <BlockMath
                                    math={String.raw`
-3\le k\le4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 범위에 있는 정수는
                                </p>

                                <BlockMath
                                    math={String.raw`
-3,-2,-1,0,1,2,3,4
`}
                                />

                                <p className="leading-8">
                                    이므로 모두 <InlineMath math="8" />개입니다.
                                </p>


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
                                        조건제시법으로 표현된 집합은 먼저
                                        그 조건을 만족하는 원소가 무엇인지를 해석해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{x\mid \text{조건}\}
=
\text{조건을 만족하는 }x\text{의 집합}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\varnothing
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        은 주어진 조건을 만족하는{" "}
                                        <InlineMath math="x" />가 하나도 없다는 뜻입니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid (m-2)x^2-4x+m=0,\ x\text{는 실수}\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="n(A)=1" />이 되게 하는
                            모든 상수 <InlineMath math="m" />의 값의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A" />는 방정식
                            </p>

                            <BlockMath
                                math={String.raw`
(m-2)x^2-4x+m=0
`}
                            />

                            <p className="leading-8">
                                을 만족하는 실수 <InlineMath math="x" />의 집합입니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="n(A)=1" />이라는 것은
                                이 방정식의 서로 다른 실근이 하나라는 뜻입니다.
                            </p>


                            {/* m ≠ 2 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ① <InlineMath math="m\ne2" />인 경우
                                </p>

                                <p className="leading-8">
                                    주어진 방정식은 <InlineMath math="x" />에 대한
                                    이차방정식입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    서로 다른 실근이 하나이므로 중근을 가져야 합니다.
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{D}{4}=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(-2)^2-(m-2)m=0
`}
                                />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
m^2-2m-4=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 방정식의 두 근은{" "}
                                    <InlineMath math="n(A)=1" />이 되게 하는 두{" "}
                                    <InlineMath math="m" />의 값입니다.
                                </p>

                                <p className="leading-8">
                                    두 값의 합만 구하면 되므로 근과 계수의 관계에 의해
                                </p>

                                <BlockMath
                                    math={String.raw`
m_1+m_2=2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* m = 2 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    ② <InlineMath math="m=2" />인 경우
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="m=2" />이면 이차항이 없어져
                                    주어진 방정식은
                                </p>

                                <BlockMath
                                    math={String.raw`
-4x+2=0
`}
                                />

                                <p className="leading-8">
                                    인 일차방정식이 됩니다.
                                </p>

                                <p className="leading-8">
                                    이 방정식은 하나의 실근을 가지므로{" "}
                                    <InlineMath math="n(A)=1" />을 만족합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="m=2" />도 조건을 만족합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                그러므로 조건을 만족하는 모든{" "}
                                <InlineMath math="m" />의 값의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
2+2=4
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
                                    <InlineMath math="n(A)=1" />이라는 것은
                                    주어진 방정식의 서로 다른 실근이 하나라는 뜻입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    최고차항의 계수에 문자가 있으므로
                                    이차방정식인 경우와 이차방정식이 아닌 경우를
                                    나누어 생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\begin{array}{c}
m\ne2
\rightarrow
\dfrac{D}{4}=0
\rightarrow
m^2-2m-4=0
\rightarrow
\text{근과 계수의 관계}\\[6pt]
m=2
\rightarrow
\text{일차방정식}
\rightarrow
\text{실근 1개}
\end{array}
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 문제에서 <InlineMath math="m" />의 값 자체가 아니라
                                    모든 <InlineMath math="m" />의 값의 합을 묻고 있으므로,
                                    이차방정식을 직접 풀지 않고 근과 계수의 관계를 이용하면
                                    더 간단합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <div className="my-5 space-y-3 text-left text-lg text-gray-200">

                            <p>
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x^2-2x+5=0,\ x\text{는 실수}\}
`}
                                />
                            </p>

                            <p>
                                <InlineMath
                                    math={String.raw`
B=\{x\mid x^2+(m+3)x+6+m=0,\ x\text{는 실수}\}
`}
                                />
                            </p>

                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="n(A)=n(B)" />가 되도록 하는
                            모든 정수 <InlineMath math="m" />의 값의 합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 원소의 개수를 구합니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="A" />는 방정식
                            </p>

                            <BlockMath
                                math={String.raw`
x^2-2x+5=0
`}
                            />

                            <p className="leading-8">
                                의 실수인 해의 집합입니다.
                            </p>


                            {/* 집합 A */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 A의 원소의 개수
                                </p>

                                <p className="leading-8">
                                    판별식을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{D}{4}
=
(-1)^2-5
=
-4<0
`}
                                />

                                <p className="leading-8">
                                    이므로 방정식은 실근을 가지지 않습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\varnothing
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=0
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                조건
                            </p>

                            <BlockMath
                                math={String.raw`
n(A)=n(B)
`}
                            />

                            <p className="leading-8">
                                에서 <InlineMath math="n(A)=0" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
n(B)=0
`}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>


                            {/* 집합 B */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B가 공집합이 될 조건
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />는 방정식
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+(m+3)x+m+6=0
`}
                                />

                                <p className="leading-8">
                                    의 실수인 해의 집합입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="n(B)=0" />이 되려면
                                    이 방정식이 실근을 가지지 않아야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{D}{4}<0
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\left(\frac{m+3}{2}\right)^2-(m+6)<0
`}
                                />

                                <p className="leading-8">
                                    양변에 <InlineMath math="4" />를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(m+3)^2-4(m+6)<0
`}
                                />

                                <p className="leading-8">
                                    정리하면
                                </p>

                                <BlockMath
                                    math={String.raw`
m^2+2m-15<0
`}
                                />

                                <BlockMath
                                    math={String.raw`
(m+5)(m-3)<0
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
-5<m<3
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                이 범위에 있는 정수 <InlineMath math="m" />은
                            </p>

                            <BlockMath
                                math={String.raw`
-4,-3,-2,-1,0,1,2
`}
                            />

                            <p className="leading-8">
                                이므로 그 합은
                            </p>

                            <BlockMath
                                math={String.raw`
-4-3-2-1+0+1+2=-7
`}
                            />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-7}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법으로 나타낸 집합에서
                                    원소가 방정식의 실수인 해라면,
                                    원소의 개수는 서로 다른 실근의 개수와 같습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 집합 <InlineMath math="A" />의 원소의 개수를 구하면
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=0
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="n(A)=n(B)" />에서
                                    집합 <InlineMath math="B" />도 공집합이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
A=\varnothing
\rightarrow
n(A)=0
\rightarrow
n(B)=0
\rightarrow
\frac{D}{4}<0
}
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <div className="my-5 space-y-3 text-left text-lg text-gray-200">

                            <p>
                                <InlineMath
                                    math={String.raw`
A=\{(x,y)\mid x^2+y^2=25,\ x,y\text{는 정수}\}
`}
                                />
                            </p>

                            <p>
                                <InlineMath
                                    math={String.raw`
B=\{x\mid x\text{는 }k\text{ 이하의 자연수}\}
`}
                                />
                            </p>

                        </div>

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="n(A)+n(B)=25" />일 때,
                            자연수 <InlineMath math="k" />의 값을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="A" />의 원소의 개수를 구합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{(x,y)\mid x^2+y^2=25,\ x,y\text{는 정수}\}
`}
                            />

                            <p className="leading-8">
                                에서 집합 <InlineMath math="A" />의 원소는
                                수 <InlineMath math="x" />나 <InlineMath math="y" />가 아니라
                                순서쌍 <InlineMath math="(x,y)" />입니다.
                            </p>

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+y^2=25
`}
                            />

                            <p className="leading-8">
                                를 만족하는 정수의 순서쌍{" "}
                                <InlineMath math="(x,y)" />의 개수를 구하면 됩니다.
                            </p>


                            {/* A의 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 A의 원소
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="25" />를 두 정수의 제곱의 합으로
                                    나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
25=0^2+5^2=3^2+4^2
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    먼저 <InlineMath math="0" />과{" "}
                                    <InlineMath math="5" />를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(5,0),\ (-5,0),\ (0,5),\ (0,-5)
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="4" />개가 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="3" />과{" "}
                                    <InlineMath math="4" />를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(\pm3,\pm4),\qquad(\pm4,\pm3)
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="8" />개가 있습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=4+8=12
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* B의 원소 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B의 원소
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />는{" "}
                                    <InlineMath math="k" /> 이하의 자연수의 집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{1,2,3,\ldots,k\}
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
n(B)=k
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                문제의 조건
                            </p>

                            <BlockMath
                                math={String.raw`
n(A)+n(B)=25
`}
                            />

                            <p className="leading-8">
                                에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
12+k=25
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
k=13
`}
                            />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{13}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 집합의 원소가 무엇인지
                                    먼저 확인해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\{(x,y)\mid \text{조건}\}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    에서는 <InlineMath math="(x,y)" />라는
                                    순서쌍 하나가 집합의 원소입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    또한 순서쌍에서는 순서가 중요하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(3,4)\ne(4,3)
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이며, 부호가 다른 순서쌍도 각각 서로 다른
                                    원소로 세어야 합니다.
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

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            서로 다른 세 자연수를 원소로 갖는 집합{" "}
                            <InlineMath math="A=\{a,b,c\}" />에 대하여 집합
                        </p>

                        <BlockMath
                            math={String.raw`
B=\{x+y\mid x\in A,\ y\in A,\ x\ne y\}
=\{6,9,11\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="A" />의 원소 중
                            가장 큰 수를 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A" />의 원소는 서로 다른
                                세 자연수이므로 크기 순서에 따라
                            </p>

                            <BlockMath
                                math={String.raw`
a<b<c
`}
                            />

                            <p className="leading-8">
                                라고 하겠습니다.
                            </p>


                            {/* B의 조건 해석 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B의 조건 해석
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{x+y\mid x\in A,\ y\in A,\ x\ne y\}
`}
                                />

                                <p className="leading-8">
                                    에서 <InlineMath math="x\ne y" />이므로
                                    서로 다른 두 원소를 선택하여 더해야 합니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a+a,\qquad b+b,\qquad c+c
`}
                                />

                                <p className="leading-8">
                                    와 같이 같은 원소끼리 더하는 경우는 포함되지 않습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 덧셈에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=b+a
`}
                                />

                                <p className="leading-8">
                                    이므로 중복되는 값을 한 번씩만 쓰면
                                    집합 <InlineMath math="B" />의 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b,\qquad a+c,\qquad b+c
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* 크기 순서 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    세 합의 크기 비교
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a<b<c" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b<a+c<b+c
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    한편
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{6,9,11\}
`}
                                />

                                <p className="leading-8">
                                    이므로 크기 순서대로 대응시키면
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=6,\qquad
a+c=9,\qquad
b+c=11
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            {/* A의 원소 구하기 */}
                            <p className="leading-8">
                                세 식을 모두 더하면
                            </p>

                            <BlockMath
                                math={String.raw`
2(a+b+c)=26
`}
                            />

                            <p className="leading-8">
                                이므로
                            </p>

                            <BlockMath
                                math={String.raw`
a+b+c=13
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                여기서 <InlineMath math="a+b=6" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
c=13-6=7
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 집합 <InlineMath math="A" />의 가장 큰 원소는{" "}
                                <InlineMath math="c" />이므로
                            </p>


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


                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 각 조건이 어떤 경우를
                                    포함하고 제외하는지를 정확하게 해석해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x\ne y
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    라는 조건이 있으므로 같은 원소를 두 번 선택할 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 세 원소에서 만들어지는 서로 다른 두 원소의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b,\qquad a+c,\qquad b+c
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 원래 원소의 크기 순서를 이용하면
                                    만들어진 합의 크기 순서도 바로 결정할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
a<b<c
\quad\Longrightarrow\quad
a+b<a+c<b+c
}
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
                            실수 전체의 부분집합인 <InlineMath math="T" />는
                            다음 조건을 만족하고 있다.
                        </p>

                        <div className="my-5 rounded-xl border border-white/15 bg-black/20 p-5">

                            <p className="leading-10 text-gray-200">
                                Ⅰ. <InlineMath math="1\in T" />
                            </p>

                            <p className="leading-10 text-gray-200">
                                Ⅱ. <InlineMath math="x\in T" />이면{" "}
                                <InlineMath math="1+\dfrac{1}{x^2}\in T" />
                            </p>

                        </div>

                        <p className="leading-8 text-gray-300">
                            이때, 집합 <InlineMath math="T" />의 원소가 아닌 것을 고르시오.
                        </p>

                        <div className="mt-5 grid grid-cols-2 gap-3 text-gray-200 sm:grid-cols-5">

                            <p>
                                ① <InlineMath math="1" />
                            </p>

                            <p>
                                ② <InlineMath math="2" />
                            </p>

                            <p>
                                ③ <InlineMath math="\dfrac32" />
                            </p>

                            <p>
                                ④ <InlineMath math="\dfrac54" />
                            </p>

                            <p>
                                ⑤ <InlineMath math="\dfrac{41}{25}" />
                            </p>

                        </div>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                조건 Ⅰ에 의해
                            </p>

                            <BlockMath
                                math={String.raw`
1\in T
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                이제 조건 Ⅱ를 반복하여 적용합니다.
                            </p>


                            {/* 첫 번째 적용 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    조건 Ⅱ의 반복 적용
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="1\in T" />이므로 조건 Ⅱ에서{" "}
                                    <InlineMath math="x=1" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
1+\frac{1}{1^2}=2
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
2\in T
`}
                                />

                                <p className="mt-5 leading-8">
                                    다시 <InlineMath math="2\in T" />이므로{" "}
                                    <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
1+\frac{1}{2^2}
=
1+\frac14
=
\frac54
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac54\in T
`}
                                />

                                <p className="mt-5 leading-8">
                                    다시 <InlineMath math="\dfrac54\in T" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
1+\frac{1}{\left(\frac54\right)^2}
&=1+\frac{16}{25}\\
&=\frac{41}{25}
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{41}{25}\in T
`}
                                />

                            </div>


                            <p className="leading-8">
                                지금까지 조건에 의해 반드시 집합{" "}
                                <InlineMath math="T" />에 포함되는 원소는
                            </p>

                            <BlockMath
                                math={String.raw`
1,\quad
2,\quad
\frac54,\quad
\frac{41}{25},\quad\cdots
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 보기 중 집합 <InlineMath math="T" />의 원소가 아닌 것은
                            </p>

                            <BlockMath
                                math={String.raw`
\frac32
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
{③}
`}
                                />

                            </div>


                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합의 원소에 대한 조건이 주어졌을 때에는
                                    먼저 확실하게 주어진 원소에서 출발합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\in T
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    그리고 새롭게 얻은 원소에 다시 같은 조건을 적용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
1
\rightarrow
2
\rightarrow
\frac54
\rightarrow
\frac{41}{25}
\rightarrow\cdots
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉, 하나의 조건을 한 번만 사용하는 것이 아니라
                                    새로 얻은 원소에 조건을 계속 적용할 수 있다는 것이
                                    중요합니다.
                                </p>

                            </div>

                        </div>

                    </details>

                </div>

                {/* 예제 14 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-xl font-bold text-white">
                        예제 14
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            자연수 <InlineMath math="p,\ q,\ r,\ s" />를 원소로 갖는 집합{" "}
                            <InlineMath math="S=\{p,q,r,s\}" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
P=\{a+b\mid a\in S,\ b\in S,\ a\ne b\}
=\{5,7,8,9,10,12\}
`}
                        />

                        <BlockMath
                            math={String.raw`
Q=\{ab\mid a\in S,\ b\in S,\ a\ne b\}
=\{6,10,14,15,21,35\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 집합 <InlineMath math="S" />의 원소의 총합을 구하시오.
                        </p>

                    </div>


                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                먼저 집합 <InlineMath math="Q" />의 조건을 해석합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
Q=\{ab\mid a\in S,\ b\in S,\ a\ne b\}
`}
                            />

                            <p className="leading-8">
                                이므로 집합 <InlineMath math="Q" />의 원소는
                                집합 <InlineMath math="S" />에서 서로 다른 두 원소를
                                선택하여 곱한 값입니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 Q의 원소를 이용하여 S 찾기
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="Q" />의 원소들을 소인수의 곱으로
                                    나타내어 보면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
6&=2\cdot3,&
10&=2\cdot5,&
14&=2\cdot7,\\
15&=3\cdot5,&
21&=3\cdot7,&
35&=5\cdot7
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    즉, 네 수
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 3,\ 5,\ 7
`}
                                />

                                <p className="leading-8">
                                    에서 서로 다른 두 수를 선택하여 곱하면
                                    집합 <InlineMath math="Q" />의 여섯 원소가 모두 만들어집니다.
                                </p>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
S=\{2,3,5,7\}
`}
                                />

                                <p className="leading-8">
                                    로 생각할 수 있습니다.
                                </p>

                            </div>


                            {/* P로 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 P로 확인
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="S=\{2,3,5,7\}" />에서
                                    서로 다른 두 원소를 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
2+3&=5,&
2+5&=7,&
2+7&=9,\\
3+5&=8,&
3+7&=10,&
5+7&=12
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
P=\{5,7,8,9,10,12\}
`}
                                />

                                <p className="leading-8">
                                    가 되어 문제의 조건과 정확히 일치합니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 집합 <InlineMath math="S" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
2+3+5+7=17
`}
                            />


                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{17}
`}
                                />

                            </div>


                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="a\ne b" />라는 조건이 있으므로
                                    같은 원소끼리 더하거나 곱하는 경우는 제외합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    네 원소에서 서로 다른 두 원소를 선택하면
                                    만들어지는 조합은 여섯 가지입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{
\begin{array}{c}
Q\text{의 곱을 분석하여 }S\text{를 찾고}\\
\Downarrow\\
P\text{의 합으로 확인}
\end{array}
}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    조건제시법에서는 어떤 값을 만드는지뿐만 아니라{" "}
                                    <InlineMath math="a\ne b" />와 같은 제한 조건까지
                                    정확하게 읽어야 합니다.
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

                        <p>
                            • 원소나열법은 집합의 원소를 중괄호 안에 직접 나열하는 방법이다.
                        </p>

                        <p>
                            • 집합에서는 같은 원소를 중복해서 생각하지 않고,
                            원소의 순서도 중요하지 않다.
                        </p>

                        <BlockMath
                            math={String.raw`
\{1,2,3\}=\{3,2,1\}
`}
                        />

                        <p>
                            • 벤다이어그램은 집합을 그림으로 나타낸 것이다.
                        </p>

                        <p>
                            • 조건제시법은 다음과 같은 구조로 집합을 나타낸다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\{
\text{원소의 대표 형태}
\mid
\text{원소에 대한 조건}
\}
}
`}
                        />

                        <p>
                            • 조건제시법에서는 먼저{" "}
                            <InlineMath math="\mid" />의 왼쪽을 보고
                            집합의 원소가 무엇인지 확인한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
\begin{array}{c}
\{x\mid\text{조건}\}
\rightarrow
\text{해집합}\\[4pt]
\{(x,y)\mid\text{조건}\}
\rightarrow
\text{그래프}
\end{array}
}
`}
                        />

                        <p>
                            • 식의 모양이 달라도 실제 원소가 모두 같으면
                            같은 집합이다.
                        </p>

                        <p>
                            • 조건에 없는 제한을 임의로 추가해서는 안 된다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
a\ne b\text{라는 조건이 없으면 }
a=b\text{인 경우도 포함한다}
}
`}
                        />

                        <p>
                            • 두 문자에서 가능한 경우를 빠짐없이 조사해야 할 때에는
                            표를 이용하면 편리하다.
                        </p>

                    </div>

                </div>

            </section>

            {/* 2.3 부분집합 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                {/* 제목 */}
                <div>
                    <h2 className="mb-2 text-3xl font-bold">
                        2.3 부분집합
                    </h2>
                </div>


                {/* 부분집합의 뜻 */}

                <p className="leading-8 text-gray-300">
                    집합 <InlineMath math="X" />의 모든 원소가
                    집합 <InlineMath math="A" />에 포함되어 있을 때,
                    집합 <InlineMath math="X" />를 집합{" "}
                    <InlineMath math="A" />의 <b>부분집합</b>이라고 합니다.
                </p>

                <BlockMath
                    math={String.raw`
X\subset A
`}
                />

                <p className="leading-8 text-gray-300">
                    즉, <InlineMath math="X\subset A" />라는 것은
                    집합 <InlineMath math="X" />의 원소가 하나도 빠짐없이
                    집합 <InlineMath math="A" />에 있다는 뜻입니다.
                </p>

                <div className="mt-8 space-y-6">

                    {/* 부분집합 직접 나열 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            부분집합을 직접 찾아보기
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 부분집합을 모두 찾아보겠습니다.
                        </p>

                        <div className="mt-5 space-y-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <div>
                                <p className="mb-2 text-sm text-gray-400">
                                    원소가 0개
                                </p>
                                <BlockMath math={String.raw`\varnothing`} />
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-gray-400">
                                    원소가 1개
                                </p>
                                <BlockMath
                                    math={String.raw`
\{1\},\quad\{2\},\quad\{3\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-gray-400">
                                    원소가 2개
                                </p>
                                <BlockMath
                                    math={String.raw`
\{1,2\},\quad\{1,3\},\quad\{2,3\}
`}
                                />
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-gray-400">
                                    원소가 3개
                                </p>
                                <BlockMath
                                    math={String.raw`
\{1,2,3\}
`}
                                />
                            </div>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 집합 <InlineMath math="A" />의 부분집합은
                        </p>

                        <BlockMath
                            math={String.raw`
\varnothing,\ 
\{1\},\ \{2\},\ \{3\},\
\{1,2\},\ \{1,3\},\ \{2,3\},\
\{1,2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모두 <InlineMath math="8" />개입니다.
                        </p>

                    </div>


                    {/* 공집합과 자기 자신 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            공집합과 자기 자신
                        </h3>

                        <div className="space-y-5">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ① 공집합
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing\subset A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    공집합은 원소가 없으므로 어떤 집합에도
                                    포함되지 않는 원소가 존재하지 않습니다.
                                    따라서 <b>공집합은 모든 집합의 부분집합</b>입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    ② 자기 자신
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset A
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A" />의 모든 원소는 당연히
                                    집합 <InlineMath math="A" />에 있으므로
                                    <b>자기 자신도 부분집합</b>입니다.
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* 진부분집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            진부분집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합 <InlineMath math="A" />의 부분집합 중에서
                            집합 <InlineMath math="A" /> 자기 자신을 제외한 나머지를
                            집합 <InlineMath math="A" />의 <b>진부분집합</b>이라고 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
X\subset A,\qquad X\ne A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            예를 들어 <InlineMath math="A=\{1,2,3\}" />일 때
                            진부분집합은
                        </p>

                        <BlockMath
                            math={String.raw`
\varnothing,\ 
\{1\},\ \{2\},\ \{3\},\
\{1,2\},\ \{1,3\},\ \{2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>


                    {/* 원소 기호와 부분집합 기호 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            원소 기호와 부분집합 기호
                        </h3>

                        <p className="leading-8 text-gray-300">
                            원소와 집합의 관계는 <InlineMath math="\in" />,
                            집합과 집합의 관계는 <InlineMath math="\subset" />을
                            사용합니다.
                        </p>

                        <div className="mt-5 space-y-4">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <BlockMath
                                    math={String.raw`
\{1\}\subset A
\quad\Longleftrightarrow\quad
1\in A
`}
                                />

                                <p className="text-center leading-8 text-gray-400">
                                    집합 <InlineMath math="\{1\}" />이{" "}
                                    <InlineMath math="A" />의 부분집합이라는 것은
                                    원소 <InlineMath math="1" />이{" "}
                                    <InlineMath math="A" />에 있다는 뜻입니다.
                                </p>

                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <BlockMath
                                    math={String.raw`
\{2,3\}\subset A
\quad\Longleftrightarrow\quad
2\in A,\ 3\in A
`}
                                />

                                <p className="text-center leading-8 text-gray-400">
                                    집합 <InlineMath math="\{2,3\}" />이{" "}
                                    <InlineMath math="A" />의 부분집합이라는 것은
                                    원소 <InlineMath math="2" />와{" "}
                                    <InlineMath math="3" />이 모두{" "}
                                    <InlineMath math="A" />에 있다는 뜻입니다.
                                </p>

                            </div>

                        </div>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
\text{원소 }\in\text{ 집합}
\qquad
\text{집합 }\subset\text{ 집합}
}
`}
                            />

                        </div>

                    </div>


                    {/* 부분집합의 개수 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            부분집합의 개수
                        </h3>

                        <p className="leading-8 text-gray-300">
                            부분집합을 만들 때 집합의 각각의 원소는
                        </p>

                        <BlockMath
                            math={String.raw`
\text{포함된다}
\qquad\text{또는}\qquad
\text{포함되지 않는다}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 가지 경우를 가집니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            따라서 원소가 <InlineMath math="n" />개인 집합의
                            부분집합의 개수는
                        </p>

                        <BlockMath
                            math={String.raw`
\underbrace{2\times2\times\cdots\times2}_{n\text{개}}
=2^n
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>


                    {/* 대표예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-2 text-xl font-bold text-white">
                            대표예시
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5,6,7,8,9\}
`}
                        />

                        <p className="mb-6 leading-8 text-gray-300">
                            에 대하여 다음 조건을 만족하는 집합{" "}
                            <InlineMath math="X" />의 개수를 구해 봅시다.
                        </p>


                        <div className="space-y-5">

                            {/* 1 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">①</p>

                                <BlockMath math={String.raw`X\subset A`} />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합{" "}
                                    <InlineMath math="X" />의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    9개의 원소가 각각 포함되거나 포함되지 않을 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2\times2\times2\times2\times2\times2\times2
=2^9=512
`}
                                />

                            </div>


                            {/* 2 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">②</p>

                                <BlockMath
                                    math={String.raw`
X\subset A,\qquad X\ne A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 진부분집합{" "}
                                    <InlineMath math="X" />의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    전체 부분집합에서 집합 <InlineMath math="A" /> 자기 자신을
                                    제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
512-1=511
`}
                                />

                            </div>


                            {/* 3 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">③</p>

                                <BlockMath
                                    math={String.raw`
1,2\in X,\qquad X\subset A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소 <InlineMath math="1,2" />를 포함하는
                                    부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    1과 2는 반드시 포함되어야 하므로 각각 1가지이고,
                                    나머지 7개의 원소는 각각 포함되거나 포함되지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\times1\times
\underbrace{2\times2\times2\times2\times2\times2\times2}_{7\text{개}}
=2^7=128
`}
                                />

                            </div>


                            {/* 4 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">④</p>

                                <BlockMath
                                    math={String.raw`
1,2\in X,\qquad X\subset A,\qquad X\ne A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 진부분집합 중
                                    원소 <InlineMath math="1,2" />를 포함하는
                                    부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ③에서 구한 128개의 부분집합 중에는
                                    <InlineMath math="X=A" />인 경우가 하나 포함되어 있습니다.
                                    진부분집합이므로 이 경우를 제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
128-1=127
`}
                                />

                            </div>


                            {/* 5 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑤</p>

                                <BlockMath
                                    math={String.raw`
1,2\notin X,\qquad X\subset A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소 <InlineMath math="1,2" />를 포함하지 않는
                                    부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    1과 2는 반드시 포함되지 않아야 하므로 각각 1가지이고,
                                    나머지 7개의 원소는 자유롭게 선택할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\times1\times
\underbrace{2\times2\times2\times2\times2\times2\times2}_{7\text{개}}
=2^7=128
`}
                                />

                            </div>


                            {/* 6 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑥</p>

                                <BlockMath
                                    math={String.raw`
1,2\notin X,\qquad X\subset A,\qquad X\ne A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 진부분집합 중
                                    원소 <InlineMath math="1,2" />를 포함하지 않는
                                    부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    1과 2가 포함되지 않으므로
                                    집합 <InlineMath math="X" />는 처음부터
                                    집합 <InlineMath math="A" />와 같아질 수 없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 진부분집합이라는 조건이 추가되어도
                                    제외할 경우가 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^7=128
`}
                                />

                            </div>


                            {/* 7 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑦</p>

                                <BlockMath
                                    math={String.raw`
1\in X\text{ 또는 }2\in X,\qquad X\subset A
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소 <InlineMath math="1" /> 또는{" "}
                                    <InlineMath math="2" />를 포함하는 부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    1과 2의 포함 여부를 생각하면 조건을 만족하는 경우는
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{array}{c}
1\text{은 포함},\ 2\text{는 불포함}\\
1\text{은 불포함},\ 2\text{는 포함}\\
1\text{과 }2\text{ 모두 포함}
\end{array}
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    의 세 가지입니다.
                                    각각의 경우 나머지 7개 원소는 자유롭게 선택할 수 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
3\times2^7=384
`}
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    또는 전체 부분집합에서 1과 2가 모두 포함되지 않는
                                    경우를 제외하여 구할 수도 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
512-128=384
`}
                                />

                            </div>

                        </div>

                    </div>


                    {/* 원소 개수가 정해진 부분집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            원소의 개수가 정해진 부분집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            부분집합의 원소의 개수가 정해져 있지 않으면
                            각 원소가 <b>포함되는지, 포함되지 않는지</b>를 생각합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            그러나 부분집합의 원소의 개수가 정해져 있으면
                            전체 원소 중에서 필요한 개수만큼 원소를
                            <b>선택</b>하면 됩니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            집합은 원소의 순서를 고려하지 않으므로
                            이때에는 <b>조합</b>을 이용합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <BlockMath
                                math={String.raw`
\boxed{
\begin{array}{c}
\text{원소의 개수 제한 없음}
\rightarrow
\text{포함 / 불포함}\\[6pt]
\text{원소의 개수가 정해짐}
\rightarrow
\text{필요한 개수만큼 선택}
\rightarrow
\text{조합}
\end{array}
}
`}
                            />

                        </div>

                    </div>


                    {/* 대표예시 계속 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-2 text-xl font-bold text-white">
                            대표예시
                        </h3>

                        <p className="leading-8 text-gray-300">
                            앞의 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5,6,7,8,9\}
`}
                        />

                        <p className="mb-6 leading-8 text-gray-300">
                            에 대하여 계속 생각해 봅시다.
                        </p>


                        <div className="space-y-5">

                            {/* 8 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑧</p>

                                <BlockMath
                                    math={String.raw`
X\subset A,\qquad n(X)=3
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소의 개수가 3개인 부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    집합 <InlineMath math="A" />의 9개 원소 중에서
                                    3개를 선택하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_9C_3
`}
                                />

                            </div>


                            {/* 9 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑨</p>

                                <BlockMath
                                    math={String.raw`
1\in X,\qquad X\subset A,\qquad n(X)=3
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소의 개수가 3개이고 원소{" "}
                                    <InlineMath math="1" />을 포함하는 부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원소 1은 이미 포함되어 있으므로
                                    나머지 8개의 원소 중 2개를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_8C_2
`}
                                />

                            </div>


                            {/* 10 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑩</p>

                                <BlockMath
                                    math={String.raw`
1\notin X,\qquad X\subset A,\qquad n(X)=3
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소의 개수가 3개이고 원소{" "}
                                    <InlineMath math="1" />을 포함하지 않는 부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원소 1은 선택할 수 없으므로
                                    나머지 8개의 원소 중 3개를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_8C_3
`}
                                />

                            </div>


                            {/* 11 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">⑪</p>

                                <BlockMath
                                    math={String.raw`
1\in X,\qquad
2\notin X,\qquad
X\subset A,\qquad
n(X)=3
`}
                                />

                                <p className="mb-4 leading-8 text-yellow-200">
                                    집합 <InlineMath math="A" />의 부분집합 중
                                    원소의 개수가 3개이고 원소{" "}
                                    <InlineMath math="1" />은 포함하고 원소{" "}
                                    <InlineMath math="2" />는 포함하지 않는 부분집합의 개수
                                </p>

                                <p className="leading-8 text-gray-300">
                                    원소 1은 이미 포함되어 있고
                                    원소 2는 선택할 수 없습니다.
                                    따라서 나머지 7개의 원소 중 2개를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_7C_2
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
                                집합{" "}
                                <InlineMath math="X=\{0,\ 1,\ \varnothing,\ \{0,1\}\}" />에
                                대하여 다음 중 옳지 않은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                                <p className="text-gray-300">
                                    ① <InlineMath math="\varnothing\in X" />
                                </p>

                                <p className="text-gray-300">
                                    ② <InlineMath math="\varnothing\subset X" />
                                </p>

                                <p className="text-gray-300">
                                    ③ <InlineMath math="\{0,1\}\in X" />
                                </p>

                                <p className="text-gray-300">
                                    ④ <InlineMath math="\{0,1\}\subset X" />
                                </p>

                                <p className="text-gray-300">
                                    ⑤ <InlineMath math="\{0\}\in X" />
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="X" />의 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
X=\{0,\ 1,\ \varnothing,\ \{0,1\}\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="\varnothing" />과{" "}
                                    <InlineMath math="\{0,1\}" />은 집합{" "}
                                    <InlineMath math="X" />의 원소입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing\in X,\qquad
\{0,1\}\in X
`}
                                />

                                <p className="leading-8">
                                    또한 공집합은 모든 집합의 부분집합이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing\subset X
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    그리고 <InlineMath math="0" />과{" "}
                                    <InlineMath math="1" />이 모두 집합{" "}
                                    <InlineMath math="X" />의 원소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\{0,1\}\subset X
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ⑤의 확인
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="0" />은 집합{" "}
                                        <InlineMath math="X" />의 원소이지만,
                                        집합 <InlineMath math="\{0\}" /> 자체는{" "}
                                        <InlineMath math="X" />의 원소가 아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\in X
\qquad\text{이지만}\qquad
\{0\}\notin X
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ⑤가 옳지 않습니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{⑤}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="\in" />은 원소와 집합의 관계이고,{" "}
                                        <InlineMath math="\subset" />은 집합과 집합의 관계입니다.
                                        특히 어떤 수가 집합의 원소라는 것과 그 수를 원소로 갖는
                                        집합 자체가 원소라는 것은 서로 다릅니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\in X
\quad\Longrightarrow\quad
\{0\}\subset X
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이지만, 이것만으로{" "}
                                        <InlineMath math="\{0\}\in X" />라고 할 수는 없습니다.
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
                                집합 <InlineMath math="A=\{a,\ b,\ \{c\}\}" />에 대하여
                                다음 중 옳은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                                <p className="text-gray-300">
                                    ① <InlineMath math="n(A)=2" />
                                </p>

                                <p className="text-gray-300">
                                    ② <InlineMath math="\{a,\{c\}\}\subset A" />
                                </p>

                                <p className="text-gray-300">
                                    ③ <InlineMath math="c\in A" />
                                </p>

                                <p className="text-gray-300">
                                    ④ <InlineMath math="\{c\}\subset A" />
                                </p>

                                <p className="text-gray-300">
                                    ⑤ <InlineMath math="\{a,b\}\in A" />
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A" />의 원소를 정확하게 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{a,\ b,\ \{c\}\}
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 원소는{" "}
                                    <InlineMath math="a" />, <InlineMath math="b" />,{" "}
                                    <InlineMath math="\{c\}" />의 3개이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
n(A)=3
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ①은 옳지 않습니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소와 부분집합의 구별
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{c\}" />는 집합{" "}
                                        <InlineMath math="A" />의 원소입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{c\}\in A
`}
                                    />

                                    <p className="leading-8">
                                        따라서 <InlineMath math="c" />가{" "}
                                        <InlineMath math="A" />의 원소인 것은 아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
c\notin A
`}
                                    />

                                    <p className="leading-8">
                                        한편 집합 <InlineMath math="\{c\}" />이{" "}
                                        <InlineMath math="A" />의 부분집합이 되려면{" "}
                                        <InlineMath math="c\in A" />이어야 합니다.
                                        그러나 <InlineMath math="c\notin A" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{c\}\not\subset A
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    반면 <InlineMath math="a" />와{" "}
                                    <InlineMath math="\{c\}" />는 모두 집합{" "}
                                    <InlineMath math="A" />의 원소이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\{a,\{c\}\}\subset A
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ②가 옳습니다.
                                </p>

                                <p className="leading-8">
                                    또한 집합 <InlineMath math="A" />의 원소 중에는{" "}
                                    <InlineMath math="\{a,b\}" />가 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\{a,b\}\notin A
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{②}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        집합 안에 집합이 원소로 들어 있는 경우에는
                                        중괄호까지 하나의 원소로 보아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{c\}\in A
\qquad\text{이지만}\qquad
c\notin A
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        또한 부분집합인지 판단할 때에는 그 집합의
                                        모든 원소가 기준이 되는 집합의 원소인지 확인합니다.
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
                                집합{" "}
                                <InlineMath math="A=\{0,\ \varnothing,\ \{0\},\ \{\varnothing\},\ \{0,\varnothing\}\}" />에
                                대하여 다음 중 옳지 않은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                                <p className="text-gray-300">
                                    ① <InlineMath math="\varnothing\in A" />
                                </p>

                                <p className="text-gray-300">
                                    ② <InlineMath math="\{0\}\subset A" />
                                </p>

                                <p className="text-gray-300">
                                    ③ <InlineMath math="\{0,\varnothing\}\in A" />
                                </p>

                                <p className="text-gray-300">
                                    ④ <InlineMath math="\{0,\varnothing\}\subset A" />
                                </p>

                                <p className="text-gray-300">
                                    ⑤ <InlineMath math="\{\{0\},\{\varnothing\}\}\in A" />
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A" />의 원소를 하나씩 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=
\left\{
0,\ 
\varnothing,\ 
\{0\},\ 
\{\varnothing\},\ 
\{0,\varnothing\}
\right\}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing\in A
`}
                                />

                                <p className="leading-8">
                                    이므로 ①은 옳습니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합인지 확인
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{0\}\subset A" />인지 판단하려면
                                        집합 <InlineMath math="\{0\}" />의 원소인{" "}
                                        <InlineMath math="0" />이{" "}
                                        <InlineMath math="A" />에 있는지만 확인하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\in A
\quad\Longrightarrow\quad
\{0\}\subset A
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ②는 옳습니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        또한 <InlineMath math="0" />과{" "}
                                        <InlineMath math="\varnothing" />이 모두{" "}
                                        <InlineMath math="A" />의 원소이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
0\in A,\quad
\varnothing\in A
\quad\Longrightarrow\quad
\{0,\varnothing\}\subset A
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ④도 옳습니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    한편 집합 <InlineMath math="\{0,\varnothing\}" /> 자체도
                                    집합 <InlineMath math="A" />의 원소로 들어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
\{0,\varnothing\}\in A
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ③도 옳습니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ⑤의 확인
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{0\}" />과{" "}
                                        <InlineMath math="\{\varnothing\}" />은 각각
                                        집합 <InlineMath math="A" />의 원소입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{0\}\in A,\qquad
\{\varnothing\}\in A
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이 두 원소로 이루어진 집합은{" "}
                                        <InlineMath math="A" />의 부분집합입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{\{0\},\{\varnothing\}\}\subset A
`}
                                    />

                                    <p className="leading-8">
                                        그러나 <InlineMath math="\{\{0\},\{\varnothing\}\}" />이라는
                                        집합 자체가 <InlineMath math="A" />의 원소로 들어 있는 것은
                                        아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{\{0\},\{\varnothing\}\}\notin A
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ⑤가 옳지 않습니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{⑤}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        여러 원소가 각각 집합 <InlineMath math="A" />에 들어 있다고 해서
                                        그 원소들을 모아 만든 집합 자체가{" "}
                                        <InlineMath math="A" />의 원소가 되는 것은 아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{0\},\{\varnothing\}\in A
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{\{0\},\{\varnothing\}\}\subset A
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이지만
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{\{0\},\{\varnothing\}\}\notin A
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다. <InlineMath math="\in" />과{" "}
                                        <InlineMath math="\subset" />을 정확하게 구별해야 합니다.
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                다음 중 세 집합
                            </p>

                            <div className="my-4 space-y-3">
                                <BlockMath math={String.raw`A=\{-1,0,1\}`} />
                                <BlockMath
                                    math={String.raw`
B=\{x+y\mid x\in A,\ y\in A\}
`}
                                />
                                <BlockMath
                                    math={String.raw`
C=\{xy\mid x\in A,\ y\in A\}
`}
                                />
                            </div>

                            <p className="leading-8 text-gray-300">
                                사이의 포함 관계로 옳은 것은?
                            </p>

                            <div className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">

                                <p className="text-gray-300">
                                    ① <InlineMath math="A\subset B\subset C" />
                                </p>

                                <p className="text-gray-300">
                                    ② <InlineMath math="A=C\subset B" />
                                </p>

                                <p className="text-gray-300">
                                    ③ <InlineMath math="B\subset A=C" />
                                </p>

                                <p className="text-gray-300">
                                    ④ <InlineMath math="B\subset C\subset A" />
                                </p>

                                <p className="text-gray-300">
                                    ⑤ <InlineMath math="C=B\subset A" />
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="B" />와{" "}
                                    <InlineMath math="C" />의 원소를 각각 구합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{x+y\mid x\in A,\ y\in A\}
`}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="x,y" />는 각각{" "}
                                        <InlineMath math="-1,0,1" /> 중 하나이므로
                                        가능한 합을 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{-2,-1,0,1,2\}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 C
                                    </p>

                                    <BlockMath
                                        math={String.raw`
C=\{xy\mid x\in A,\ y\in A\}
`}
                                    />

                                    <p className="leading-8">
                                        가능한 곱을 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
C=\{-1,0,1\}
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
C=A
`}
                                    />

                                </div>

                                <p className="leading-8">
                                    한편 집합 <InlineMath math="A" />의 모든 원소{" "}
                                    <InlineMath math="-1,0,1" />은 집합{" "}
                                    <InlineMath math="B" />에 포함되어 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    따라서 세 집합 사이의 관계는
                                </p>

                                <BlockMath
                                    math={String.raw`
A=C\subset B
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{②}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        조건제시법으로 주어진 집합은 먼저 가능한 원소를
                                        빠짐없이 구한 뒤 서로 비교합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{-1,0,1\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
B=\{-2,-1,0,1,2\}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
C=\{-1,0,1\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        두 집합의 원소가 모두 같으면 같은 집합이고,
                                        한 집합의 모든 원소가 다른 집합에 들어 있으면
                                        부분집합입니다.
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
                                두 집합{" "}
                                <InlineMath math="A=\{2a+1,\ 2\}" />,{" "}
                                <InlineMath math="B=\{a,\ -2,\ 3a^2-1\}" />에 대하여{" "}
                                <InlineMath math="A\subset B" />일 때, 집합{" "}
                                <InlineMath math="B" />의 모든 원소의 합을{" "}
                                <InlineMath math="b" />라 하자. 이때{" "}
                                <InlineMath math="a+b" />의 값은?
                            </p>

                            <p className="mt-3 leading-8 text-gray-400">
                                (단, <InlineMath math="a,\ b" />는 실수이다.)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="A\subset B" />이므로 집합{" "}
                                    <InlineMath math="A" />의 모든 원소는 집합{" "}
                                    <InlineMath math="B" />의 원소이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    먼저 <InlineMath math="2\in A" />이므로 반드시
                                </p>

                                <BlockMath
                                    math={String.raw`
2\in B
`}
                                />

                                <p className="leading-8">
                                    이어야 합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        2가 B의 원소가 되기 위한 조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{a,-2,3a^2-1\}
`}
                                    />

                                    <p className="leading-8">
                                        <InlineMath math="-2\ne2" />이므로
                                        다음 두 경우를 생각할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=2
\qquad\text{또는}\qquad
3a^2-1=2
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
a=2
\qquad\text{또는}\qquad
a=\pm1
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=2,\ 1,\ -1
`}
                                    />

                                    <p className="leading-8">
                                        을 후보로 얻습니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    이제 <InlineMath math="A" />의 또 다른 원소{" "}
                                    <InlineMath math="2a+1" />도 집합{" "}
                                    <InlineMath math="B" />의 원소이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2a+1\in B
`}
                                />

                                <p className="leading-8">
                                    앞에서 구한 값을 하나씩 확인합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <div className="space-y-5">

                                        <div>
                                            <BlockMath
                                                math={String.raw`
a=2
`}
                                            />

                                            <BlockMath
                                                math={String.raw`
A=\{5,2\},\qquad
B=\{2,-2,11\}
`}
                                            />

                                            <p className="leading-8">
                                                <InlineMath math="5\notin B" />이므로
                                                조건을 만족하지 않습니다.
                                            </p>
                                        </div>

                                        <div>
                                            <BlockMath
                                                math={String.raw`
a=1
`}
                                            />

                                            <BlockMath
                                                math={String.raw`
A=\{3,2\},\qquad
B=\{1,-2,2\}
`}
                                            />

                                            <p className="leading-8">
                                                <InlineMath math="3\notin B" />이므로
                                                조건을 만족하지 않습니다.
                                            </p>
                                        </div>

                                        <div>
                                            <BlockMath
                                                math={String.raw`
a=-1
`}
                                            />

                                            <BlockMath
                                                math={String.raw`
A=\{-1,2\},\qquad
B=\{-1,-2,2\}
`}
                                            />

                                            <p className="leading-8">
                                                집합 <InlineMath math="A" />의 모든 원소가{" "}
                                                <InlineMath math="B" />에 있으므로
                                            </p>

                                            <BlockMath
                                                math={String.raw`
A\subset B
`}
                                            />

                                            <p className="leading-8">
                                                를 만족합니다.
                                            </p>
                                        </div>

                                    </div>

                                </div>

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-1
`}
                                />

                                <p className="leading-8">
                                    이고, 집합 <InlineMath math="B" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{-1,-2,2\}
`}
                                />

                                <p className="leading-8">
                                    이므로 모든 원소의 합 <InlineMath math="b" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
b=-1-2+2=-1
`}
                                />

                                <p className="leading-8">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=-1+(-1)=-2
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
                                        <InlineMath math="A\subset B" />이면 집합{" "}
                                        <InlineMath math="A" />의 원소를 하나씩 집합{" "}
                                        <InlineMath math="B" />의 원소와 비교할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset B
\quad\Longrightarrow\quad
2\in B,\qquad 2a+1\in B
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        먼저 간단한 원소 <InlineMath math="2" />를 이용하여{" "}
                                        <InlineMath math="a" />의 후보를 구한 뒤,
                                        나머지 원소 <InlineMath math="2a+1" />을 이용하여
                                        후보를 확인하면 됩니다.
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
                                두 집합{" "}
                                <InlineMath math="A=\{x\mid x^2+2x-15\le0\}" />,{" "}
                                <InlineMath math="B=\{x\mid |x|<a\}" />에 대하여{" "}
                                <InlineMath math="A\subset B" />가 성립하도록 하는
                                자연수 <InlineMath math="a" />의 최솟값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 두 집합을 각각 구간으로 나타냅니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 A
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+2x-15\le0
`}
                                    />

                                    <p className="leading-8">
                                        좌변을 인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x+5)(x-3)\le0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-5\le x\le3
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{x\mid -5\le x\le3\}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|<a
`}
                                    />

                                    <p className="leading-8">
                                        는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-a<x<a
`}
                                    />

                                    <p className="leading-8">
                                        와 같으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{x\mid -a<x<a\}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    <InlineMath math="A\subset B" />가 성립하려면
                                    집합 <InlineMath math="A" />의 모든 원소가
                                    집합 <InlineMath math="B" /> 안에 있어야 합니다.
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />에서 절댓값이 가장 큰 원소는{" "}
                                    <InlineMath math="-5" />이므로,
                                    특히 <InlineMath math="-5" />가 집합{" "}
                                    <InlineMath math="B" />의 원소이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-5>-a
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a>5
`}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="a" />는 자연수이므로
                                    최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
a=6
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
                                        <InlineMath math="A\subset B" />라는 것은
                                        집합 <InlineMath math="A" />의 모든 원소가
                                        집합 <InlineMath math="B" />에 들어가야 한다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{x\mid -5\le x\le3\},
\qquad
B=\{x\mid -a<x<a\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이 문제에서는 <InlineMath math="A" />에서
                                        절댓값이 가장 큰 <InlineMath math="-5" />까지{" "}
                                        <InlineMath math="B" />에 포함되어야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a>5
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가 되어야 합니다. 특히{" "}
                                        <InlineMath math="|x|<a" />는 등호를 포함하지 않으므로{" "}
                                        <InlineMath math="a=5" />는 불가능하다는 점에 주의합니다.
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
                                세 집합
                            </p>

                            <div className="my-4 space-y-3 text-left text-gray-200">

                                <p>
                                    <InlineMath math="A=\{x\mid x^2-5x+6<0\}" />
                                </p>

                                <p>
                                    <InlineMath math="B=\{x\mid |x|<a\}" />
                                </p>

                                <p>
                                    <InlineMath math="C=\{x\mid x<5\}" />
                                </p>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="A\subset B\subset C" />가
                                성립하도록 하는 모든 자연수 <InlineMath math="a" />의 값의 합을
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 세 집합을 각각 구간으로 나타냅니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 A
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2-5x+6<0
`}
                                    />

                                    <p className="leading-8">
                                        좌변을 인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-2)(x-3)<0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2<x<3
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{x\mid 2<x<3\}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B와 C
                                    </p>

                                    <BlockMath
                                        math={String.raw`
|x|<a
\quad\Longleftrightarrow\quad
-a<x<a
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{x\mid -a<x<a\}
`}
                                    />

                                    <p className="leading-8">
                                        이고,
                                    </p>

                                    <BlockMath
                                        math={String.raw`
C=\{x\mid x<5\}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="A\subset B" />의 조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{x\mid 2<x<3\},
\qquad
B=\{x\mid -a<x<a\}
`}
                                    />

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 모든 원소가
                                        집합 <InlineMath math="B" />에 포함되어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="A" />의 원소는{" "}
                                        <InlineMath math="3" />보다 작으므로{" "}
                                        <InlineMath math="a=3" />인 경우에도 모두{" "}
                                        <InlineMath math="B" />에 포함됩니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\ge3
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="B\subset C" />의 조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{x\mid -a<x<a\},
\qquad
C=\{x\mid x<5\}
`}
                                    />

                                    <p className="leading-8">
                                        집합 <InlineMath math="B" />의 모든 원소가{" "}
                                        <InlineMath math="5" />보다 작아야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="a=5" />이면 집합{" "}
                                        <InlineMath math="B" />의 원소는 모두{" "}
                                        <InlineMath math="5" />보다 작으므로 조건을 만족합니다.
                                    </p>

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a\le5
`}
                                    />

                                </div>


                                <p className="leading-8">
                                    두 조건을 동시에 만족해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
3\le a\le5
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a" />는 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
a=3,\ 4,\ 5
`}
                                />

                                <p className="leading-8">
                                    따라서 모든 <InlineMath math="a" />의 값의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
3+4+5=12
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
                                        <InlineMath math="A\subset B\subset C" />는
                                        두 조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset B,
\qquad
B\subset C
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        를 모두 만족해야 한다는 뜻입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset B
\quad\Longrightarrow\quad
a\ge3
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
B\subset C
\quad\Longrightarrow\quad
a\le5
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        특히 <InlineMath math="A" />와{" "}
                                        <InlineMath math="B" />의 오른쪽 끝점은 포함되지 않으므로
                                        <InlineMath math="a=3" />과{" "}
                                        <InlineMath math="a=5" />도 각각 조건을 만족한다는 점에
                                        주의합니다.
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
                                두 집합
                            </p>

                            <div className="my-4 space-y-3 text-left text-gray-200">

                                <p>
                                    <InlineMath math="A=\{x\mid (x-3)(x-a)=0\}" />
                                </p>

                                <p>
                                    <InlineMath math="B=\{-1,2,3\}" />
                                </p>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="A\subset B" />를 만족시키는
                                모든 양수 <InlineMath math="a" />의 값의 합을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A" />의 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-3)(x-a)=0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
x=3
\qquad\text{또는}\qquad
x=a
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{3,a\}
`}
                                />

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합 조건 이용
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A\subset B" />이므로
                                        집합 <InlineMath math="A" />의 모든 원소는
                                        집합 <InlineMath math="B" />에 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3\in B,\qquad a\in B
`}
                                    />

                                    <p className="leading-8">
                                        여기서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{-1,2,3\}
`}
                                    />

                                    <p className="leading-8">
                                        이므로 가능한 <InlineMath math="a" />의 값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=-1,\ 2,\ 3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        그런데 <InlineMath math="a" />는 양수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=2,\ 3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        <InlineMath math="a=3" />인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="a=3" />이면 방정식은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x-3)^2=0
`}
                                    />

                                    <p className="leading-8">
                                        이 되어 해는 <InlineMath math="3" /> 하나뿐입니다.
                                        집합에서는 같은 원소를 중복해서 쓰지 않으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{3\}
`}
                                    />

                                    <p className="leading-8">
                                        이고, 역시 <InlineMath math="A\subset B" />를 만족합니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    따라서 조건을 만족하는 모든{" "}
                                    <InlineMath math="a" />의 값의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
2+3=5
`}
                                />

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
                                        조건제시법으로 나타낸 집합은 먼저 방정식의 해를 구하여
                                        실제 원소를 확인합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{3,a\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        그리고 <InlineMath math="A\subset B" />이므로
                                        집합 <InlineMath math="A" />의 모든 원소가{" "}
                                        <InlineMath math="B" />에 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset B
\quad\Longrightarrow\quad
3\in B,\ a\in B
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        또한 <InlineMath math="a=3" />처럼 같은 원소가
                                        두 번 만들어지더라도 집합에서는 하나의 원소로만 생각합니다.
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
                                자연수 <InlineMath math="n" />에 대하여 자연수 전체집합의 부분집합{" "}
                                <InlineMath math="A_n" />을 다음과 같이 정의하자.
                            </p>

                            <BlockMath
                                math={String.raw`
A_n=
\{x\mid x\text{는 }\sqrt{4n}\text{ 이하의 홀수}\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="A_n\subset A_{100}" />을 만족시키는{" "}
                                <InlineMath math="n" />의 최댓값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A_{100}" />을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\sqrt{4\cdot100}=20
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="A_{100}" />은{" "}
                                    <InlineMath math="20" /> 이하의 홀수의 집합입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A_{100}
=
\{1,3,5,7,9,11,13,15,17,19\}
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합 조건
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="A_n\subset A_{100}" />이므로
                                        집합 <InlineMath math="A_n" />의 모든 원소가{" "}
                                        <InlineMath math="A_{100}" />에 있어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="A_{100}" />에 들어 있는 가장 큰 홀수는{" "}
                                        <InlineMath math="19" />이고, 그 다음 홀수는{" "}
                                        <InlineMath math="21" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="A_n" />에{" "}
                                        <InlineMath math="21" />이 포함되지 않아야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\sqrt{4n}<21
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    양변은 양수이므로 제곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
4n<441
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
n<\frac{441}{4}=110.25
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="n" />은 자연수이므로 최댓값은
                                </p>

                                <BlockMath
                                    math={String.raw`
n=110
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{110}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        부분집합 조건을 만족하려면 기준 집합에 없는
                                        새로운 원소가 생기지 않아야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A_{100}
=
\{1,3,\ldots,19\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로 다음 홀수 <InlineMath math="21" />이{" "}
                                        <InlineMath math="A_n" />에 들어오는 순간부터
                                        부분집합 관계가 성립하지 않습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
A_n\subset A_{100}
\quad\Longleftrightarrow\quad
\sqrt{4n}<21
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x^2-11x+10<0,\ x\text{는 자연수}\}
`}
                                />의 공집합이 아닌 부분집합 중에서
                                원소가 모두 <InlineMath math="2" />의 배수인 부분집합의 개수를{" "}
                                <InlineMath math="a" />, 원소가 모두{" "}
                                <InlineMath math="3" />의 배수인 부분집합의 개수를{" "}
                                <InlineMath math="b" />라 하자.{" "}
                                <InlineMath math="a+b" />의 값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A" />의 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-11x+10<0
`}
                                />

                                <p className="leading-8">
                                    좌변을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)(x-10)<0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1<x<10
`}
                                />

                                <p className="leading-8">
                                    입니다. <InlineMath math="x" />는 자연수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,3,4,5,6,7,8,9\}
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소가 모두 2의 배수인 부분집합
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />에서{" "}
                                        <InlineMath math="2" />의 배수인 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 4,\ 6,\ 8
`}
                                    />

                                    <p className="leading-8">
                                        의 <InlineMath math="4" />개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원소가 모두 2의 배수인 부분집합은
                                        이 네 원소만을 이용하여 만들면 되므로
                                        부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4=16
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="leading-8">
                                        그런데 공집합은 제외해야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
a=2^4-1=15
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소가 모두 3의 배수인 부분집합
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />에서{" "}
                                        <InlineMath math="3" />의 배수인 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
3,\ 6,\ 9
`}
                                    />

                                    <p className="leading-8">
                                        의 <InlineMath math="3" />개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 이 세 원소로 만들 수 있는 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3=8
`}
                                    />

                                    <p className="leading-8">
                                        이고, 공집합을 제외하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
b=2^3-1=7
`}
                                    />

                                </div>


                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a+b=15+7=22
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
                                        부분집합의 모든 원소가 어떤 조건을 만족해야 한다면,
                                        먼저 원래 집합에서 그 조건을 만족하는 원소만 골라냅니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{2의 배수 }4\text{개}
\rightarrow
2^4-1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\text{3의 배수 }3\text{개}
\rightarrow
2^3-1
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        또한 문제에서 <b>공집합이 아닌 부분집합</b>이라고 하였으므로,
                                        만들어지는 모든 부분집합의 개수에서 공집합 하나를
                                        제외해야 합니다.
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x\text{는 }k\text{ 이하의 자연수}\}
`}
                                />의 부분집합 중 <InlineMath math="2,\ 3" />을 반드시 원소로 갖고{" "}
                                <InlineMath math="4,\ 5,\ 8" />을 원소로 갖지 않는 부분집합의 개수가{" "}
                                <InlineMath math="64" />일 때, 자연수{" "}
                                <InlineMath math="k" />의 값을 구하시오.
                                (단, <InlineMath math="k\ge8" />)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,3,\ldots,k\}
`}
                                />

                                <p className="leading-8">
                                    이므로 원소의 개수는 <InlineMath math="k" />개입니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        각 원소의 포함 여부
                                    </p>

                                    <p className="leading-8">
                                        원소 <InlineMath math="2,\ 3" />은 반드시 포함되어야 하므로
                                        각각의 경우의 수는 <InlineMath math="1" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원소 <InlineMath math="4,\ 5,\ 8" />은 반드시 포함되지
                                        않아야 하므로 역시 각각의 경우의 수는{" "}
                                        <InlineMath math="1" />입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{array}{c|ccccc}
\text{원소} & 2 & 3 & 4 & 5 & 8\\
\hline
\text{조건} &
\text{포함} &
\text{포함} &
\text{불포함} &
\text{불포함} &
\text{불포함}
\end{array}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 이 5개의 원소는 포함 여부가 이미 결정되어 있습니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    전체 <InlineMath math="k" />개의 원소 중
                                    포함 여부가 결정된 원소가 <InlineMath math="5" />개이므로,
                                    나머지
                                </p>

                                <BlockMath
                                    math={String.raw`
k-5
`}
                                />

                                <p className="leading-8">
                                    개의 원소는 각각 포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <p className="leading-8">
                                    따라서 조건을 만족하는 부분집합의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
1\times1\times1\times1\times1
\times2^{k-5}
=
2^{k-5}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    문제에서 이 개수가 <InlineMath math="64" />라고 하였으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2^{k-5}=64
`}
                                />

                                <BlockMath
                                    math={String.raw`
2^{k-5}=2^6
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
k-5=6
`}
                                />

                                <BlockMath
                                    math={String.raw`
k=11
`}
                                />


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
                                        부분집합에서 반드시 포함되거나 반드시 포함되지 않아야 하는
                                        원소는 선택이 이미 결정되어 있으므로 각각{" "}
                                        <InlineMath math="1" />가지로 생각합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2,3 &: \text{반드시 포함}\\
4,5,8 &: \text{반드시 불포함}
\end{aligned}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 5개의 원소를 제외한 나머지{" "}
                                        <InlineMath math="k-5" />개의 원소만 각각
                                        포함 · 불포함의 두 가지 경우를 가집니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
2^{k-5}=64
}
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
                                집합 <InlineMath math="X=\{1,2,3,4,5,6,7\}" />의
                                부분집합 중 두 개의 짝수를 원소로 갖는 부분집합의 개수를
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="X" />의 원소 중 짝수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 4,\ 6
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="3" />개입니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        짝수 선택
                                    </p>

                                    <p className="leading-8">
                                        부분집합이 두 개의 짝수를 원소로 가져야 하므로
                                        짝수 <InlineMath math="3" />개 중{" "}
                                        <InlineMath math="2" />개를 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\\{}_3C_2=3
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        홀수 선택
                                    </p>

                                    <p className="leading-8">
                                        홀수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 3,\ 5,\ 7
`}
                                    />

                                    <p className="leading-8">
                                        의 <InlineMath math="4" />개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        홀수에 대해서는 특별한 조건이 없으므로
                                        각각의 홀수는 부분집합에
                                        포함되거나 포함되지 않을 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4=16
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 조건을 만족하는 부분집합의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
\\{}_3C_2\times2^4
`}
                                />

                                <BlockMath
                                    math={String.raw`
=3\times16=48
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{48}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원소의 개수가 정해져 있으면 조합을 이용하여
                                        필요한 개수만큼 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{짝수 3개 중 2개 선택}
\quad\rightarrow\quad
{}_3C_2
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        반면 개수에 대한 조건이 없는 홀수는 각각
                                        포함하거나 포함하지 않을 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{홀수 4개}
\quad\rightarrow\quad
2^4
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 두 경우의 수를 곱합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{{}_3C_2\times2^4
=3\times16
=48}
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
                                집합 <InlineMath math="A=\{1,2,3,4,5,6\}" />에 대하여
                                다음 조건을 만족시키는 집합 <InlineMath math="A" />의
                                모든 부분집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">
                                <p className="leading-8 text-gray-300">
                                    (가) <InlineMath math="n(X)\ge2" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    (나) 집합 <InlineMath math="X" />의 모든 원소의 합은 홀수이다.
                                </p>
                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 원소를 홀수와 짝수로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{홀수}:1,3,5
\qquad
\text{짝수}:2,4,6
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소의 합이 홀수가 되는 조건
                                    </p>

                                    <p className="leading-8">
                                        짝수는 몇 개를 더해도 합의 홀짝에 영향을 주지 않습니다.
                                        따라서 원소의 합이 홀수가 되려면
                                        홀수를 홀수 개 선택해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        홀수가 <InlineMath math="3" />개 있으므로
                                        홀수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\text{개 또는 }3\text{개}
`}
                                    />

                                    <p className="leading-8">
                                        선택할 수 있습니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        홀수를 1개 선택하는 경우
                                    </p>

                                    <p className="leading-8">
                                        홀수 <InlineMath math="3" />개 중{" "}
                                        <InlineMath math="1" />개를 선택하는 경우의 수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_3C_1
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 <InlineMath math="n(X)\ge2" />이므로
                                        짝수를 적어도 <InlineMath math="1" />개는
                                        선택해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        짝수 <InlineMath math="3" />개의 부분집합은{" "}
                                        <InlineMath math="2^3" />개이고,
                                        아무것도 선택하지 않는 경우를 제외하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3-1=7
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 이 경우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_3C_1(2^3-1)
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        홀수를 3개 선택하는 경우
                                    </p>

                                    <p className="leading-8">
                                        홀수 <InlineMath math="3" />개를 모두 선택하는 경우의 수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_3C_3
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이미 원소를 <InlineMath math="3" />개 선택했으므로{" "}
                                        <InlineMath math="n(X)\ge2" />는 자동으로 만족합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 짝수 <InlineMath math="3" />개는 각각
                                        포함하거나 포함하지 않아도 되므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 이 경우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_3C_3\cdot2^3
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    두 경우를 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_3C_1(2^3-1)+{}_3C_3\cdot2^3
`}
                                />

                                <BlockMath
                                    math={String.raw`
=3\cdot7+1\cdot8
=29
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{29}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        여러 조건이 있는 부분집합 문제에서는
                                        각 조건을 동시에 만족하도록 경우를 분류합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{합이 홀수}
\quad\Longrightarrow\quad
\text{홀수를 홀수 개 선택}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 홀수를 <InlineMath math="1" />개 또는{" "}
                                        <InlineMath math="3" />개 선택하는 경우로 나눈 뒤,
                                        각각 <InlineMath math="n(X)\ge2" /> 조건을
                                        확인하면 됩니다.
                                    </p>

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 14 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 14
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="A=\{4,5,6,7,8\}" />에 대하여
                                다음 조건을 만족시키는 집합 <InlineMath math="A" />의
                                모든 부분집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) <InlineMath math="n(X)\ge2" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    (나) 집합 <InlineMath math="X" />의 모든 원소의 곱은{" "}
                                    <InlineMath math="8" />의 배수이다.
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    모든 원소의 곱이 <InlineMath math="8" />의 배수가 되려면
                                    곱에 <InlineMath math="2^3" />이 포함되어야 합니다.
                                </p>

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />에는{" "}
                                    <InlineMath math="8" /> 자체가 있으므로{" "}
                                    <InlineMath math="8" />을 포함하는 경우와
                                    포함하지 않는 경우로 나누어 생각합니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 8을 포함하는 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="8" />을 포함하면 원소의 곱은
                                        이미 <InlineMath math="8" />의 배수가 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        나머지 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 5,\ 6,\ 7
`}
                                    />

                                    <p className="leading-8">
                                        은 각각 포함하거나 포함하지 않을 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 <InlineMath math="n(X)\ge2" />이므로
                                        나머지 네 원소 중 적어도 하나는 선택해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4-1=15
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 8을 포함하지 않는 경우
                                    </p>

                                    <p className="leading-8">
                                        남은 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 5,\ 6,\ 7
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 중 <InlineMath math="5,\ 7" />은 홀수이므로
                                        곱이 <InlineMath math="8" />의 배수가 되는 데
                                        영향을 주지 않습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="4" />와{" "}
                                        <InlineMath math="6" />을 모두 포함해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4\times6
=
2^2\times(2\times3)
=
2^3\times3
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <InlineMath math="4" />와{" "}
                                        <InlineMath math="6" />을 포함하면 곱은{" "}
                                        <InlineMath math="8" />의 배수가 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이제 <InlineMath math="5,\ 7" />은 각각
                                        포함하거나 포함하지 않을 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2=4
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 두 경우를 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(2^4-1)+2^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=15+4
=19
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{19}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        곱이 어떤 수의 배수가 되는 조건에서는
                                        그 수를 만드는 데 필요한 소인수가 충분히 있는지를
                                        확인합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        이 문제에서는 <InlineMath math="8=2^3" />이므로
                                        곱에 <InlineMath math="2" />가 적어도{" "}
                                        <InlineMath math="3" />개 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
8\text{을 포함}
\quad\rightarrow\quad
2^4-1=15
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
8\text{을 포함하지 않음}
\quad\rightarrow\quad
4,\ 6\text{을 반드시 포함}
\quad\rightarrow\quad
2^2=4
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{15+4=19}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 15 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 15
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x\text{는 }100\text{보다 작은 짝수}\}
`}
                                />의 부분집합 <InlineMath math="B" />가 다음 조건을
                                모두 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) 집합 <InlineMath math="B" />의 진부분집합의 개수는{" "}
                                    <InlineMath math="31" />이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    (나) 집합 <InlineMath math="B" />의 원소 중
                                    가장 작은 원소는 <InlineMath math="36" />이다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                이때 집합 <InlineMath math="B" />의 원소의 개수를{" "}
                                <InlineMath math="p" />, 집합 <InlineMath math="B" />의
                                원소의 합을 <InlineMath math="q" />라 할 때,{" "}
                                <InlineMath math="\dfrac{q}{p}" />의 최솟값을 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B의 원소의 개수
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="B" />의 원소의 개수를{" "}
                                        <InlineMath math="p" />라 하면 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^p
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        진부분집합은 전체 부분집합 중 자기 자신과 같은 집합{" "}
                                        <InlineMath math="B" /> 하나를 제외한 것이므로
                                        진부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^p-1
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        조건 (가)에 의하여
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^p-1=31
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2^p=32=2^5
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
p=5
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소의 합 q의 최솟값
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="B" />는 집합{" "}
                                        <InlineMath math="A" />의 부분집합이고,{" "}
                                        <InlineMath math="B" />의 가장 작은 원소가{" "}
                                        <InlineMath math="36" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        또한 <InlineMath math="B" />의 원소는 모두 짝수이고,
                                        원소의 개수는 <InlineMath math="5" />개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 원소의 합을 가장 작게 하려면{" "}
                                        <InlineMath math="36" />부터 가장 작은 짝수{" "}
                                        <InlineMath math="5" />개를 차례로 선택하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{36,38,40,42,44\}
`}
                                    />

                                    <p className="leading-8">
                                        이때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
q=36+38+40+42+44
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
q=200
`}
                                    />

                                </div>


                                <p className="leading-8">
                                    따라서 <InlineMath math="\dfrac{q}{p}" />의 최솟값은
                                </p>

                                <BlockMath
                                    math={String.raw`
\frac{q}{p}
=
\frac{200}{5}
=
40
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{40}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원소가 <InlineMath math="p" />개인 집합의
                                        진부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^p-1
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로 진부분집합의 개수에서 먼저 원소의 개수를
                                        구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^p-1=31
\quad\Longrightarrow\quad
p=5
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        그다음 원소의 합을 최소로 하려면 주어진 조건을
                                        만족시키면서 가능한 원소를 작은 것부터 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
36,\ 38,\ 40,\ 42,\ 44
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 16 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 16
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 집합
                            </p>

                            <div className="my-4 space-y-3 text-left text-gray-200">

                                <p>
                                    <InlineMath
                                        math={String.raw`
A=\{x\mid x^2=1,\ x\text{는 실수}\}
`}
                                    />
                                </p>

                                <p>
                                    <InlineMath
                                        math={String.raw`
B=\{x\mid x^2+x-6<0,\ x\text{는 정수}\}
`}
                                    />
                                </p>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="A\subset X\subset B" />를
                                만족시키는 집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 두 집합 <InlineMath math="A,\ B" />의 원소를 구합니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 A
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2=1
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=-1,\ 1
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{-1,1\}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x^2+x-6<0
`}
                                    />

                                    <p className="leading-8">
                                        좌변을 인수분해하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
(x+3)(x-2)<0
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-3<x<2
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                        <InlineMath math="x" />는 정수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{-2,-1,0,1\}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합 조건
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset X\subset B
`}
                                    />

                                    <p className="leading-8">
                                        이므로 집합 <InlineMath math="A" />의 원소{" "}
                                        <InlineMath math="-1,\ 1" />은 반드시
                                        집합 <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
-1,\ 1\in X
`}
                                    />

                                    <p className="leading-8">
                                        한편 집합 <InlineMath math="B" />의 나머지 원소{" "}
                                        <InlineMath math="-2,\ 0" />은 각각
                                        포함하거나 포함하지 않을 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
-1,\ 1 &: \text{반드시 포함}\\
-2,\ 0 &: \text{포함 또는 불포함}
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 가능한 집합 <InlineMath math="X" />의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\times1\times2\times2=4
`}
                                    />

                                </div>


                                <p className="leading-8">
                                    실제로 가능한 집합을 나열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\{-1,1\},\quad
\{-2,-1,1\},\quad
\{-1,0,1\},\quad
\{-2,-1,0,1\}
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="4" />개입니다.
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
                                        <InlineMath math="A\subset X\subset B" />에서는
                                        집합 <InlineMath math="A" />의 원소는 반드시{" "}
                                        <InlineMath math="X" />에 포함되고,
                                        집합 <InlineMath math="B" />에만 있는 나머지 원소의
                                        포함 여부만 자유롭게 결정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B-A=\{-2,0\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        자유롭게 결정할 수 있는 원소가{" "}
                                        <InlineMath math="2" />개이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2=4
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        개입니다. 현재 사용하는{" "}
                                        <InlineMath math="\subset" />은 같은 집합인 경우도 포함하므로{" "}
                                        <InlineMath math="X=A" />와{" "}
                                        <InlineMath math="X=B" />도 가능합니다.
                                    </p>

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 17 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 17
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 집합
                            </p>

                            <div className="my-4 space-y-3 text-left text-gray-200">

                                <p>
                                    <InlineMath
                                        math={String.raw`
A=\{x+1\mid x\text{는 }10\text{ 이하의 자연수}\}
`}
                                    />
                                </p>

                                <p>
                                    <InlineMath
                                        math={String.raw`
B=\{x\mid x\text{는 }11\text{ 이하의 소수}\}
`}
                                    />
                                </p>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여{" "}
                                <InlineMath math="B\subset X\subset A" />,{" "}
                                <InlineMath math="X\ne A" />,{" "}
                                <InlineMath math="X\ne B" />를 만족시키는
                                집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 두 집합 <InlineMath math="A,\ B" />의 원소를 구합니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 A
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="x" />는{" "}
                                        <InlineMath math="10" /> 이하의 자연수이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
x=1,2,3,\ldots,10
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\{2,3,4,5,6,7,8,9,10,11\}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        집합 B
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="11" /> 이하의 소수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 3,\ 5,\ 7,\ 11
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
B=\{2,3,5,7,11\}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합 조건
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="B\subset X" />이므로 집합{" "}
                                        <InlineMath math="B" />의 모든 원소는 반드시
                                        집합 <InlineMath math="X" />에 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 3,\ 5,\ 7,\ 11\in X
`}
                                    />

                                    <p className="leading-8">
                                        한편 집합 <InlineMath math="A" />에는 있지만{" "}
                                        <InlineMath math="B" />에는 없는 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 6,\ 8,\ 9,\ 10
`}
                                    />

                                    <p className="leading-8">
                                        의 <InlineMath math="5" />개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        이 5개의 원소는 각각 집합{" "}
                                        <InlineMath math="X" />에 포함되거나 포함되지 않을 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^5=32
`}
                                    />

                                    <p className="leading-8">
                                        개의 집합 <InlineMath math="X" />를 만들 수 있습니다.
                                    </p>

                                </div>

                                <p className="leading-8">
                                    그런데 <InlineMath math="X\ne B" />이므로
                                    다섯 원소를 하나도 추가하지 않는 경우를 제외해야 합니다.
                                </p>

                                <p className="leading-8">
                                    또한 <InlineMath math="X\ne A" />이므로
                                    다섯 원소를 모두 추가하는 경우도 제외해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^5-2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=32-2
=30
`}
                                />

                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{30}
`}
                                    />

                                </div>

                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="B\subset X\subset A" />이면{" "}
                                        <InlineMath math="B" />의 원소는 반드시 포함하고,{" "}
                                        <InlineMath math="A" />에는 있지만{" "}
                                        <InlineMath math="B" />에는 없는 원소의
                                        포함 여부만 자유롭게 결정합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\text{에는 있지만 }B\text{에는 없는 원소}
=
\{4,6,8,9,10\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        자유롭게 결정할 수 있는 원소가 5개이므로
                                        처음에는 <InlineMath math="2^5" />개이고,
                                        여기서 <InlineMath math="X=B" />와{" "}
                                        <InlineMath math="X=A" />인 두 경우를 제외합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^5-2=30}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 18 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 18
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합
                            </p>

                            <div className="my-4 text-left text-gray-200">
                                <p>
                                    <InlineMath
                                        math={String.raw`
A=\{x\mid x^2-9x+8<0,\ x\text{는 정수}\}
`}
                                    />
                                </p>
                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 집합 <InlineMath math="A" />의 부분집합 중
                                적어도 한 개의 소수를 원소로 갖는 부분집합의 개수를
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="A" />의 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-9x+8<0
`}
                                />

                                <p className="leading-8">
                                    좌변을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-1)(x-8)<0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1<x<8
`}
                                />

                                <p className="leading-8">
                                    입니다. <InlineMath math="x" />는 정수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{2,3,4,5,6,7\}
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        소수와 소수가 아닌 원소
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 원소 중 소수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 3,\ 5,\ 7
`}
                                    />

                                    <p className="leading-8">
                                        이고, 소수가 아닌 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 6
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        적어도 한 개의 소수를 포함하는 부분집합
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />는 원소가{" "}
                                        <InlineMath math="6" />개이므로 전체 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^6
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        여기서 소수를 하나도 포함하지 않는 경우를 빼면 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        소수 <InlineMath math="2,\ 3,\ 5,\ 7" />은 모두
                                        포함되지 않아야 하고, 나머지 원소{" "}
                                        <InlineMath math="4,\ 6" />은 각각
                                        포함하거나 포함하지 않을 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 적어도 한 개의 소수를 원소로 갖는 부분집합의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2^6-2^2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=64-4
=60
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{60}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <b>적어도 한 개를 포함</b>하는 경우는
                                        직접 하나씩 나누어 세는 것보다 전체에서
                                        하나도 포함하지 않는 경우를 빼는 것이 간단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{적어도 한 개 포함}
=
\text{전체}
-
\text{하나도 포함하지 않음}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이 문제에서는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^6-2^3=56}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 19 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 19
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                두 집합
                            </p>

                            <div className="my-4 space-y-3 text-left text-gray-200">

                                <p>
                                    <InlineMath
                                        math={String.raw`
A=\{x\mid x\text{는 }12\text{의 양의 약수}\}
`}
                                    />
                                </p>

                                <p>
                                    <InlineMath
                                        math={String.raw`
B=\{x\mid x\text{는 }18\text{의 양의 약수}\}
`}
                                    />
                                </p>

                            </div>

                            <p className="leading-8 text-gray-300">
                                에 대하여 <InlineMath math="X\subset A" />이고{" "}
                                <InlineMath math="X\not\subset B" />를 만족시키는
                                집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 두 집합 <InlineMath math="A,\ B" />의 원소를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,3,4,6,12\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{1,2,3,6,9,18\}
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        조건 해석
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="X\subset A" />이므로{" "}
                                        <InlineMath math="X" />의 원소는 모두 집합{" "}
                                        <InlineMath math="A" />의 원소입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 <InlineMath math="X\not\subset B" />이므로{" "}
                                        <InlineMath math="X" />의 원소 중에는 집합{" "}
                                        <InlineMath math="B" />에 없는 원소가 적어도 하나
                                        있어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        집합 <InlineMath math="A" />의 원소 중 집합{" "}
                                        <InlineMath math="B" />에 없는 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 12
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="X" />는{" "}
                                        <InlineMath math="4,\ 12" /> 중 적어도 하나를
                                        반드시 포함해야 합니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        부분집합의 개수
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 원소가{" "}
                                        <InlineMath math="6" />개이므로 전체 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^6
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        여기서 <InlineMath math="4,\ 12" />를
                                        하나도 포함하지 않는 경우를 빼면 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="4,\ 12" />를 모두 제외하면
                                        나머지 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 2,\ 3,\ 6
`}
                                    />

                                    <p className="leading-8">
                                        의 포함 여부만 자유롭게 결정할 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 조건을 만족하는 집합 <InlineMath math="X" />의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2^6-2^4
`}
                                />

                                <BlockMath
                                    math={String.raw`
=64-16
=48
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{48}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <InlineMath math="X\not\subset B" />는{" "}
                                        <InlineMath math="X" />의 모든 원소가{" "}
                                        <InlineMath math="B" />에 있는 것이 아니라는 뜻입니다.
                                        즉, <InlineMath math="B" />에 없는 원소가{" "}
                                        <InlineMath math="X" />에 적어도 하나 있어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
X\not\subset B
\quad\Longrightarrow\quad
B\text{에 없는 원소를 적어도 하나 포함}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이 문제에서는 <InlineMath math="A" />의 원소 중{" "}
                                        <InlineMath math="B" />에 없는 원소가{" "}
                                        <InlineMath math="4,\ 12" />이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
4,\ 12\text{ 중 적어도 하나를 포함}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        해야 합니다. 따라서 전체에서 둘 다 포함하지 않는
                                        경우를 빼는 것이 가장 간단합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^6-2^4=48}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 20 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 20
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="A=\{1,2,3,4,5,6,7,8,9\}" />의
                                부분집합 중 원소의 개수가 <InlineMath math="3" />이고
                                적어도 한 개의 홀수를 원소로 갖는 집합의 개수를 구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />의 원소를 홀수와 짝수로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{홀수}:1,\ 3,\ 5,\ 7,\ 9
`}
                                />

                                <BlockMath
                                    math={String.raw`
\text{짝수}:2,\ 4,\ 6,\ 8
`}
                                />

                                <p className="leading-8">
                                    홀수는 <InlineMath math="5" />개이고,
                                    짝수는 <InlineMath math="4" />개입니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소가 3개인 모든 부분집합
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 원소{" "}
                                        <InlineMath math="9" />개 중{" "}
                                        <InlineMath math="3" />개를 선택하면 되므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_9C_3
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        홀수를 하나도 포함하지 않는 경우
                                    </p>

                                    <p className="leading-8">
                                        적어도 한 개의 홀수를 포함하는 경우를 직접 세는 것보다
                                        전체에서 홀수를 하나도 포함하지 않는 경우를 빼는 것이
                                        간단합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        홀수를 하나도 포함하지 않으려면
                                        짝수
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2,\ 4,\ 6,\ 8
`}
                                    />

                                    <p className="leading-8">
                                        의 <InlineMath math="4" />개 중{" "}
                                        <InlineMath math="3" />개를 선택해야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_4C_3
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 적어도 한 개의 홀수를 원소로 갖는 부분집합의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_9C_3-{}_4C_3
`}
                                />

                                <BlockMath
                                    math={String.raw`
=84-4
=80
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{80}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원소의 개수가 정해져 있으므로 조합을 이용합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{원소가 3개인 전체 부분집합}
\quad\rightarrow\quad
{}_9C_3
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        또한 <b>적어도 한 개의 홀수를 포함</b>한다는 조건은
                                        전체에서 홀수를 하나도 포함하지 않는 경우를 빼면
                                        간단하게 구할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{적어도 한 개의 홀수}
=
\text{전체}
-
\text{홀수가 하나도 없음}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\boxed{{}_9C_3-{}_4C_3=80}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 예제 21 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 21
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
A=\{x\mid x\text{는 }10\text{ 이하의 자연수}\}
`}
                                />의 부분집합 중에서 다음 조건을 만족시키는
                                집합 <InlineMath math="B" />의 개수를 구하시오.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) <InlineMath math="n(B)=6" />
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    (나) <InlineMath math="10" /> 이하의 소수를 적어도{" "}
                                    <InlineMath math="2" />개 이상 포함한다.
                                </p>

                            </div>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="A" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{1,2,3,4,5,6,7,8,9,10\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    이 중 소수는
                                </p>

                                <BlockMath
                                    math={String.raw`
2,\ 3,\ 5,\ 7
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="4" />개이고, 소수가 아닌 원소는
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 4,\ 6,\ 8,\ 9,\ 10
`}
                                />

                                <p className="leading-8">
                                    의 <InlineMath math="6" />개입니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소가 6개인 모든 부분집합
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 원소{" "}
                                        <InlineMath math="10" />개 중{" "}
                                        <InlineMath math="6" />개를 선택하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_{10}C_6
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        소수를 적어도 2개 포함
                                    </p>

                                    <p className="leading-8">
                                        소수를 적어도 <InlineMath math="2" />개 포함하는 경우를
                                        직접 나누어 세는 것보다 전체에서 조건을 만족하지 않는
                                        경우를 빼는 것이 간단합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        조건을 만족하지 않는 경우는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{소수가 0개인 경우}
\quad\text{또는}\quad
\text{소수가 1개인 경우}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ① 소수가 0개인 경우
                                    </p>

                                    <p className="leading-8">
                                        소수가 아닌 원소 <InlineMath math="6" />개를
                                        모두 선택해야 하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_4C_0\cdot{}_6C_6=1
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        ② 소수가 1개인 경우
                                    </p>

                                    <p className="leading-8">
                                        소수 <InlineMath math="4" />개 중{" "}
                                        <InlineMath math="1" />개를 선택하고,
                                        소수가 아닌 원소 <InlineMath math="6" />개 중{" "}
                                        <InlineMath math="5" />개를 선택합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_4C_1\cdot{}_6C_5
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=4\cdot6
=24
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 조건을 만족하는 집합 <InlineMath math="B" />의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
{}_{10}C_6-
\left(
{}_4C_0\cdot{}_6C_6+
{}_4C_1\cdot{}_6C_5
\right)
`}
                                />

                                <BlockMath
                                    math={String.raw`
=210-(1+24)
=185
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{185}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        <b>적어도 2개</b>라는 조건은 전체에서
                                        조건을 만족하지 않는 경우를 빼는 방법을 먼저
                                        생각해 볼 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{적어도 2개}
=
\text{전체}
-
(\text{0개}+\text{1개})
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        또한 원소의 개수가 <InlineMath math="6" />개로
                                        정해져 있으므로 각 경우는 조합을 이용하여 계산합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
{}_{10}C_6-
\left(
{}_4C_0\cdot{}_6C_6+
{}_4C_1\cdot{}_6C_5
\right)
=185
}
`}
                                    />

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <h3 className="mb-5 text-xl font-bold text-yellow-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-5 text-gray-300">

                            <div>
                                <p className="font-bold text-white">
                                    1. 부분집합
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset A
`}
                                />

                                <p className="leading-8">
                                    집합 <InlineMath math="X" />의 모든 원소가
                                    집합 <InlineMath math="A" />에 포함되어 있다는 뜻입니다.
                                </p>
                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    2. 공집합과 자기 자신
                                </p>

                                <BlockMath
                                    math={String.raw`
\varnothing\subset A,
\qquad
A\subset A
`}
                                />
                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    3. 진부분집합
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset A,\qquad X\ne A
`}
                                />
                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    4. 원소가 n개인 집합의 부분집합의 개수
                                </p>

                                <BlockMath
                                    math={String.raw`
2^n
`}
                                />

                                <p className="leading-8">
                                    각각의 원소가 포함되거나 포함되지 않는
                                    두 가지 경우를 갖기 때문입니다.
                                </p>
                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    5. 특정 원소의 포함 · 불포함
                                </p>

                                <p className="mt-2 leading-8">
                                    반드시 포함되는 원소와 반드시 포함되지 않는 원소는
                                    선택이 이미 결정되어 있으므로 <b>1가지</b>로 생각합니다.
                                    나머지 원소만 포함 · 불포함의 2가지 경우를 가집니다.
                                </p>
                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    6. 원소의 개수가 정해진 부분집합
                                </p>

                                <p className="mt-2 leading-8">
                                    집합은 원소의 순서를 고려하지 않으므로
                                    필요한 개수만큼 원소를 선택하는 <b>조합</b>으로
                                    생각합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
X\subset A,\quad n(X)=r
\qquad\Longrightarrow\qquad
{}_nC_r
`}
                                />
                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 2.4 부분집합과 원소의 합 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                {/* 제목 */}
                <div>
                    <h2 className="text-3xl font-bold text-white">
                        2.4 부분집합과 원소의 합
                    </h2>

                    <p className="mt-3 leading-8 text-gray-300">
                        부분집합의 개수를 구하는 방법을 이용하면
                        여러 부분집합에 포함된 원소들의 합도 구할 수 있습니다.
                    </p>

                    <p className="mt-2 leading-8 text-gray-300">
                        중요한 것은 각각의 부분집합을 직접 만드는 것이 아니라,
                        <b className="text-white"> 특정 원소가 몇 개의 부분집합에 포함되는지</b>를
                        생각하는 것입니다.
                    </p>
                </div>

                <div className="mt-8 space-y-6">


                    {/* 1. 모든 부분집합의 원소의 합 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            1. 모든 부분집합의 원소의 합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모든 부분집합에 들어 있는 원소들을 모두 더한다고 생각해 봅시다.
                        </p>

                        <p className="mt-4 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />의 원소는 5개이므로
                            부분집합은 모두
                        </p>

                        <BlockMath
                            math={String.raw`
2^5=32
`}
                        />

                        <p className="leading-8 text-gray-300">
                            개입니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-4 font-bold text-white">
                                원소 1이 포함되는 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                원소 <InlineMath math="1" />이 포함된다고 정하면
                                나머지 원소 <InlineMath math="2,3,4,5" />는 각각
                                포함되거나 포함되지 않을 수 있습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
1\times2\times2\times2\times2
=16
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 원소 <InlineMath math="1" />은
                                32개의 부분집합 중 16개에 포함됩니다.
                            </p>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            같은 방법으로 원소 <InlineMath math="2,3,4,5" />도
                            각각 16개의 부분집합에 포함됩니다.
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
1&:\ 16\text{개}\\
2&:\ 16\text{개}\\
3&:\ 16\text{개}\\
4&:\ 16\text{개}\\
5&:\ 16\text{개}
\end{aligned}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 모든 부분집합에 들어 있는 원소들을 모두 더한 값은
                        </p>

                        <BlockMath
                            math={String.raw`
1\cdot16
+2\cdot16
+3\cdot16
+4\cdot16
+5\cdot16
`}
                        />

                        <p className="leading-8 text-gray-300">
                            즉,
                        </p>

                        <BlockMath
                            math={String.raw`
(1+2+3+4+5)\cdot16
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>


                    {/* 2. 원소의 개수가 정해진 부분집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            2. 원소의 개수가 정해진 부분집합의 원소의 합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            이번에는 같은 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 원소의 개수가 정해진 부분집합만 생각해 봅시다.
                        </p>


                        {/* 5개 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                원소가 5개인 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                가능한 부분집합은 집합 <InlineMath math="A" /> 하나뿐이므로
                                원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+2+3+4+5
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>


                        {/* 4개 */}
                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                원소가 4개인 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                원소 <InlineMath math="1" />이 포함된다고 하면
                                나머지 <InlineMath math="2,3,4,5" /> 중
                                3개를 선택해야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
{}_4C_3=4
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 원소 <InlineMath math="1" />은
                                원소가 4개인 부분집합 중 4개에 포함됩니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                원소 <InlineMath math="2,3,4,5" />도 각각
                                같은 횟수만큼 포함되므로 원소의 총합은
                            </p>

                            <BlockMath
                                math={String.raw`
(1+2+3+4+5)\cdot4
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>


                        {/* 3개 */}
                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                원소가 3개인 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                원소 <InlineMath math="1" />을 포함하고
                                원소가 3개인 부분집합을 만들려면
                                나머지 4개 중 2개를 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
{}_4C_2=6
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 각 원소는 원소가 3개인 부분집합에
                                각각 6번씩 나타납니다.
                            </p>

                            <BlockMath
                                math={String.raw`
(1+2+3+4+5)\cdot6
`}
                            />

                        </div>


                        {/* 2개 */}
                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                원소가 2개인 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                원소 <InlineMath math="1" />을 포함한다고 정하면
                                나머지 4개 중 1개를 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
{}_4C_1=4
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 원소의 총합은
                            </p>

                            <BlockMath
                                math={String.raw`
(1+2+3+4+5)\cdot4
`}
                            />

                        </div>


                        {/* 1개 */}
                        <div className="mt-4 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                원소가 1개인 부분집합
                            </p>

                            <p className="leading-8 text-gray-300">
                                원소가 1개인 부분집합은
                            </p>

                            <BlockMath
                                math={String.raw`
\{1\},\{2\},\{3\},\{4\},\{5\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로 원소의 총합은
                            </p>

                            <BlockMath
                                math={String.raw`
1+2+3+4+5
`}
                            />

                        </div>


                        <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="mb-3 font-bold text-yellow-300">
                                공통된 원리
                            </p>

                            <p className="leading-8 text-gray-300">
                                특정 원소가 포함된다고 먼저 정한 뒤,
                                나머지 원소 중 필요한 개수만큼 선택합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
5\text{개} &: {}_4C_4=1\\
4\text{개} &: {}_4C_3=4\\
3\text{개} &: {}_4C_2=6\\
2\text{개} &: {}_4C_1=4\\
1\text{개} &: {}_4C_0=1
\end{aligned}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                따라서 각 원소가 나타나는 횟수는
                            </p>

                            <BlockMath
                                math={String.raw`
1,\ 4,\ 6,\ 4,\ 1
`}
                            />

                            <p className="leading-8 text-gray-300">
                                입니다.
                            </p>

                        </div>

                    </div>


                    {/* 3. 특정 원소가 최소 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            3. 특정 원소가 최소 원소인 부분집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            다시
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3,4,5\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            의 부분집합을 생각해 봅시다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            어떤 수가 부분집합의 <b className="text-white">최소 원소</b>가
                            되려면 그 수는 반드시 포함되어야 하고,
                            그보다 작은 원소는 모두 포함되지 않아야 합니다.
                            그보다 큰 원소는 포함되어도 되고 포함되지 않아도 됩니다.
                        </p>


                        <div className="mt-5 space-y-4">

                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    1이 최소 원소인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1" />은 반드시 포함되고,{" "}
                                    <InlineMath math="2,3,4,5" />는 각각 자유롭게
                                    포함하거나 포함하지 않을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\times2\times2\times2\times2
=16
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    2가 최소 원소인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1" />은 반드시 제외하고,{" "}
                                    <InlineMath math="2" />는 반드시 포함합니다.{" "}
                                    <InlineMath math="3,4,5" />는 자유입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1\times1\times2\times2\times2
=8
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    3이 최소 원소인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1,2" />는 반드시 제외하고,{" "}
                                    <InlineMath math="3" />은 반드시 포함하며,{" "}
                                    <InlineMath math="4,5" />는 자유입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2=4
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    4가 최소 원소인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1,2,3" />은 반드시 제외하고,{" "}
                                    <InlineMath math="4" />는 반드시 포함하며,{" "}
                                    <InlineMath math="5" />만 자유입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2
`}
                                />

                            </div>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="font-bold text-white">
                                    5가 최소 원소인 경우
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="1,2,3,4" />는 모두 제외하고{" "}
                                    <InlineMath math="5" />만 포함해야 하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
1
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    가지입니다.
                                </p>

                            </div>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 최소 원소에 따라 부분집합의 개수를 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
1\text{이 최소} &: 16\\
2\text{가 최소} &: 8\\
3\text{이 최소} &: 4\\
4\text{가 최소} &: 2\\
5\text{가 최소} &: 1
\end{aligned}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고,
                        </p>

                        <BlockMath
                            math={String.raw`
16+8+4+2+1=31
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 공집합을 제외한 모든 부분집합은
                            반드시 하나의 최소 원소를 가지므로,
                            공집합을 제외한 부분집합의 개수{" "}
                            <InlineMath math="2^5-1=31" />과 같습니다.
                        </p>

                    </div>


                    {/* 4. 특정 원소가 최대 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <h3 className="mb-4 text-2xl font-bold text-white">
                            4. 특정 원소가 최대 원소인 부분집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            최대 원소도 최소 원소와 같은 방법으로 생각할 수 있습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            어떤 수가 부분집합의 <b className="text-white">최대 원소</b>가
                            되려면 그 수는 반드시 포함되어야 하고,
                            그보다 큰 원소는 모두 포함되지 않아야 합니다.
                            그보다 작은 원소는 자유롭게 선택할 수 있습니다.
                        </p>


                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="mb-3 font-bold text-white">
                                예를 들어 4가 최대 원소인 경우
                            </p>

                            <p className="leading-8 text-gray-300">
                                <InlineMath math="4" />는 반드시 포함하고,{" "}
                                <InlineMath math="5" />는 반드시 제외합니다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                그보다 작은 <InlineMath math="1,2,3" />은
                                각각 포함하거나 포함하지 않을 수 있으므로
                            </p>

                            <BlockMath
                                math={String.raw`
2\times2\times2=8
`}
                            />

                            <p className="leading-8 text-gray-300">
                                가지입니다.
                            </p>

                        </div>


                        <p className="mt-5 leading-8 text-gray-300">
                            같은 방법으로 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
\begin{aligned}
1\text{이 최대} &: 1\\
2\text{가 최대} &: 2\\
3\text{이 최대} &: 4\\
4\text{가 최대} &: 8\\
5\text{가 최대} &: 16
\end{aligned}
`}
                        />

                    </div>

                    {/* 예제 1 */}
                    <div className="mt-8 rounded-xl bg-black/40 p-5">

                        <h3 className="mb-4 text-xl font-bold text-white">
                            예제 1
                        </h3>

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
X=\{x\mid x\text{는 }12\text{ 이하의 자연수}\}
`}
                                />의 원소 <InlineMath math="n" />에 대하여{" "}
                                <InlineMath math="X" />의 부분집합 중{" "}
                                <InlineMath math="n" />을 최소의 원소로 갖는 모든 집합의
                                개수를 <InlineMath math="f(n)" />이라 하자.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                [보기]에서 옳은 것만을 있는 대로 고른 것은?
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5 space-y-3">

                                <p className="leading-8 text-gray-300">
                                    ㄱ. <InlineMath math="f(10)=4" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄴ. <InlineMath math="a\in X,\ b\in X" />일 때,{" "}
                                    <InlineMath math="a\le b" />이면{" "}
                                    <InlineMath math="f(a)\le f(b)" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    ㄷ.{" "}
                                    <InlineMath math="f(2)+f(4)+f(6)+f(8)=682" />
                                </p>

                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3 text-gray-300 sm:grid-cols-5">
                                <p>① ㄱ</p>
                                <p>② ㄱ, ㄴ</p>
                                <p>③ ㄱ, ㄷ</p>
                                <p>④ ㄴ, ㄷ</p>
                                <p>⑤ ㄱ, ㄴ, ㄷ</p>
                            </div>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="X" />를 원소나열법으로 나타내면
                                </p>

                                <BlockMath
                                    math={String.raw`
X=\{1,2,3,\ldots,12\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        먼저 <InlineMath math="f(n)" />을 구해 봅시다.
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="n" />이 부분집합의 최소 원소가 되려면{" "}
                                        <InlineMath math="n" />보다 작은 원소는 모두
                                        포함되지 않아야 하고,{" "}
                                        <InlineMath math="n" />은 반드시 포함되어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그리고 <InlineMath math="n" />보다 큰 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n+1,\ n+2,\ \ldots,\ 12
`}
                                    />

                                    <p className="leading-8">
                                        는 각각 포함되거나 포함되지 않을 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        자유롭게 선택할 수 있는 원소가{" "}
                                        <InlineMath math="12-n" />개이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(n)=2^{12-n}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* ㄱ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ㄱ
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(10)=2^{12-10}=2^2=4
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ㄱ은 <b className="text-white">옳습니다.</b>
                                    </p>

                                </div>


                                {/* ㄴ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ㄴ
                                    </p>

                                    <p className="leading-8">
                                        최소 원소가 작을수록 그보다 큰 원소가 많아지므로
                                        자유롭게 선택할 수 있는 원소의 개수가 많아집니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="a\le b" />이면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
12-a\ge12-b
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
f(a)=2^{12-a}\ge2^{12-b}=f(b)
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 ㄴ은 <b className="text-white">옳지 않습니다.</b>
                                    </p>

                                </div>


                                {/* ㄷ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ㄷ
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
f(2)+f(4)+f(6)+f(8)
&=2^{10}+2^8+2^6+2^4\\
&=1024+256+64+16\\
&=1360
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 ㄷ은 <b className="text-white">옳지 않습니다.</b>
                                    </p>

                                </div>


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서 옳은 것은 ㄱ뿐이므로
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

                                    <p className="leading-8 text-gray-300">
                                        특정 원소 <InlineMath math="n" />이 최소 원소가 되려면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
n\text{보다 작은 원소}&:\text{ 모두 제외}\\
n&:\text{ 반드시 포함}\\
n\text{보다 큰 원소}&:\text{ 포함 또는 불포함}
\end{aligned}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        으로 판단합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        따라서 이 문제에서는 <InlineMath math="n" />보다 큰
                                        원소가 <InlineMath math="12-n" />개이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{f(n)=2^{12-n}}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이 됩니다.
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
                                집합 <InlineMath math="A=\{0,1,2,3,4\}" />의 부분집합 중
                                원소의 개수가 <InlineMath math="3" />인 부분집합은{" "}
                                <InlineMath math="n" />개가 있다.
                                이것을 각각{" "}
                                <InlineMath math="X_1,X_2,X_3,\cdots,X_n" />이라 하고
                                집합 <InlineMath math="X_k" />의 모든 원소의 합을{" "}
                                <InlineMath math="s_k" />{" "}
                                <InlineMath math="(k=1,2,3,\cdots,n)" />라고 한다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                이때{" "}
                                <InlineMath math="s_1+s_2+s_3+\cdots+s_n+n" />의 값을
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소가 3개인 부분집합의 개수
                                    </p>

                                    <p className="leading-8">
                                        집합 <InlineMath math="A" />의 원소{" "}
                                        <InlineMath math="5" />개 중{" "}
                                        <InlineMath math="3" />개를 선택하므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
n={}_5C_3=10
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        각 원소가 나타나는 횟수
                                    </p>

                                    <p className="leading-8">
                                        예를 들어 원소 <InlineMath math="1" />이 포함된
                                        원소가 3개인 부분집합을 생각해 봅시다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원소 <InlineMath math="1" />은 이미 선택되어 있으므로
                                        나머지 <InlineMath math="4" />개의 원소 중{" "}
                                        <InlineMath math="2" />개를 선택하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_4C_2=6
`}
                                    />

                                    <p className="leading-8">
                                        따라서 원소 <InlineMath math="1" />은
                                        6개의 부분집합에 포함됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        같은 이유로 원소{" "}
                                        <InlineMath math="0,2,3,4" />도 각각
                                        6개의 부분집합에 포함됩니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 모든 부분집합의 원소의 합을 모두 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
s_1+s_2+\cdots+s_n
=
(0+1+2+3+4)\cdot{}_4C_2
`}
                                />

                                <BlockMath
                                    math={String.raw`
=10\cdot6
=60
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
n=10
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
s_1+s_2+\cdots+s_n+n
=
60+10
=
70
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{70}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        원소가 3개인 부분집합을 하나씩 만들어
                                        원소의 합을 계산할 필요는 없습니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        특정 원소 하나를 포함한다고 고정하면
                                        나머지 4개 중 2개를 선택하므로
                                        각각의 원소는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{}_4C_2
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        번씩 나타납니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\text{모든 원소의 합}
\times
\text{각 원소가 나타나는 횟수}
}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        를 이용하면 빠르게 계산할 수 있습니다.
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
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
S=\left\{1,\frac14,\frac1{4^2},\frac1{4^3},\frac1{4^4}\right\}
`}
                                />의 공집합이 아닌 서로 다른 부분집합을{" "}
                                <InlineMath math="A_1,A_2,A_3,\cdots,A_n" />이라 하자.
                                각각의 집합{" "}
                                <InlineMath math="A_1,A_2,A_3,\cdots,A_n" />의 원소 중에서
                                가장 작은 원소를 모두 더한 값을{" "}
                                <InlineMath math="\dfrac pq" />라 할 때,{" "}
                                <InlineMath math="p+q" />의 값을 구하시오.
                                (단, <InlineMath math="p,q" />는 서로소인 자연수이다.)
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    집합 <InlineMath math="S" />의 원소의 크기를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
1>
\frac14>
\frac1{4^2}>
\frac1{4^3}>
\frac1{4^4}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    각 원소가 부분집합의 최소 원소가 되는 경우의 수를
                                    차례대로 구해 봅시다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        각 원소가 최소 원소가 되는 부분집합의 개수
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="1" />이 최소 원소가 되려면
                                        다른 원소는 모두 포함될 수 없으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\text{개}
`}
                                    />

                                    <p className="mt-4 leading-8">
                                        <InlineMath math="\dfrac14" />이 최소 원소가 되려면{" "}
                                        <InlineMath math="\dfrac14" />은 반드시 포함하고,
                                        그보다 작은 원소는 모두 제외해야 합니다.
                                        원소 <InlineMath math="1" />의 포함 여부만 자유이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\text{개}
`}
                                    />

                                    <p className="mt-4 leading-8">
                                        같은 방법으로 계속하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
1\text{이 최소} &: 1\\
\dfrac14\text{이 최소} &: 2\\
\dfrac1{4^2}\text{이 최소} &: 4\\
\dfrac1{4^3}\text{이 최소} &: 8\\
\dfrac1{4^4}\text{이 최소} &: 16
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 모든 공집합이 아닌 부분집합의 최소 원소를
                                    모두 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
1\cdot1
+\frac14\cdot2
+\frac1{4^2}\cdot4
+\frac1{4^3}\cdot8
+\frac1{4^4}\cdot16
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
=
1+\frac12+\frac14+\frac18+\frac1{16}
`}
                                />

                                <BlockMath
                                    math={String.raw`
=
\frac{16+8+4+2+1}{16}
=
\frac{31}{16}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
p=31,\qquad q=16
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
p+q=31+16=47
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{47}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        부분집합을 하나씩 나열하지 않고,
                                        각 원소가 <b className="text-white">최소 원소가 되는 부분집합의 개수</b>를
                                        구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 2,\ 4,\ 8,\ 16
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        각 원소에 그 원소가 최소가 되는 횟수를 곱한 뒤
                                        모두 더하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\text{최소 원소의 합}
=
\sum
(\text{원소})
\times
(\text{그 원소가 최소인 부분집합의 개수})
}
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
                                집합 <InlineMath math="A=\{2,4,6,8,10\}" />의 부분집합 중에서
                                원소의 개수가 2 이상인 모든 부분집합을{" "}
                                <InlineMath math="A_1,A_2,A_3,\cdots,A_n" />이라 하자.
                                각각의 집합{" "}
                                <InlineMath math="A_1,A_2,A_3,\cdots,A_n" />의 원소 중에서
                                가장 큰 원소를{" "}
                                <InlineMath math="M_k\ (k=1,2,3,\cdots,n)" />라 할 때,{" "}
                                <InlineMath math="M_1+M_2+M_3+\cdots+M_n" />의 값을
                                구하시오.
                            </p>

                        </div>

                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    각 원소가 최대 원소가 되는 부분집합의 개수를 구합니다.
                                </p>

                                <p className="leading-8">
                                    단, 부분집합의 원소의 개수가 2 이상이어야 하므로
                                    최대 원소보다 작은 원소 중에서{" "}
                                    <b className="text-white">적어도 하나는 반드시 포함</b>되어야 합니다.
                                </p>


                                {/* 최대 2 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ① 최대 원소가 2인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="2" />보다 작은 원소가 없으므로
                                        원소를 2개 이상 갖는 부분집합을 만들 수 없습니다.
                                    </p>

                                    <BlockMath math="0\text{개}" />

                                </div>


                                {/* 최대 4 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ② 최대 원소가 4인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="4" />는 반드시 포함되어야 하고,{" "}
                                        <InlineMath math="2" />도 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{2,4\}
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath math="1\text{개}" />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* 최대 6 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ③ 최대 원소가 6인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="6" />은 반드시 포함되고,
                                        그보다 작은 원소 <InlineMath math="2,4" /> 중에서
                                        적어도 하나를 포함해야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="2,4" />의 부분집합은{" "}
                                        <InlineMath math="2^2" />개이고,
                                        둘 다 포함하지 않는 경우 1개를 제외하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^2-1=3
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                {/* 최대 8 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ④ 최대 원소가 8인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="8" />은 반드시 포함되고,
                                        그보다 작은 원소 <InlineMath math="2,4,6" /> 중
                                        적어도 하나를 포함해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3-1=7
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                {/* 최대 10 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ⑤ 최대 원소가 10인 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="10" />은 반드시 포함되고,
                                        그보다 작은 원소 <InlineMath math="2,4,6,8" /> 중
                                        적어도 하나를 포함해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4-1=15
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                </div>


                                {/* 합 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        최대 원소를 모두 더하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
M_1+M_2+\cdots+M_n
&=4\cdot1+6\cdot3+8\cdot7+10\cdot15\\
&=4+18+56+150\\
&=228
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
\boxed{228}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        어떤 원소가 최대 원소가 되려면 그 원소는 반드시
                                        포함되고, 그보다 큰 원소는 모두 제외됩니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        이 문제에서는 원소의 개수가 2 이상이어야 하므로
                                        그보다 작은 원소 중{" "}
                                        <b className="text-white">적어도 하나를 포함</b>해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
4\text{가 최대} &: 2^1-1=1\\
6\text{이 최대} &: 2^2-1=3\\
8\text{이 최대} &: 2^3-1=7\\
10\text{이 최대} &: 2^4-1=15
\end{aligned}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        따라서 각 최대 원소에 그 원소가 최대가 되는
                                        부분집합의 개수를 곱하여 더합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
4(1)+6(3)+8(7)+10(15)=228
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
                                전체집합 <InlineMath math="U=\{2,4,6,8,10\}" />의
                                공집합이 아닌 모든 부분집합을
                            </p>

                            <BlockMath
                                math={String.raw`
A_1,A_2,\cdots,A_n
\qquad(n\text{은 자연수})
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이라 할 때, 집합 <InlineMath math="A_i" />의 원소 중에서
                                최소의 원소를 <InlineMath math="a_i" />,
                                최대의 원소를 <InlineMath math="b_i" />{" "}
                                <InlineMath math="(i=1,2,3,\cdots,n)" />라고 하자.
                            </p>

                            <BlockMath
                                math={String.raw`
S_i=a_i+b_i
\qquad(i=1,2,3,\cdots,n)
`}
                            />

                            <p className="leading-8 text-gray-300">
                                라고 할 때,{" "}
                                <InlineMath math="S_1+S_2+\cdots+S_n" />의 값을
                                구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    각 부분집합에서
                                </p>

                                <BlockMath
                                    math={String.raw`
S_i=a_i+b_i
`}
                                />

                                <p className="leading-8">
                                    이므로 모든 <InlineMath math="S_i" />의 합은
                                    모든 부분집합의 <b className="text-white">최소 원소의 합</b>과{" "}
                                    <b className="text-white">최대 원소의 합</b>을 각각 구하여
                                    더하면 됩니다.
                                </p>


                                {/* 최소 원소 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        최소 원소의 합
                                    </p>

                                    <p className="leading-8">
                                        원소 <InlineMath math="2" />가 최소가 되려면{" "}
                                        <InlineMath math="2" />는 반드시 포함되고,
                                        나머지 <InlineMath math="4,6,8,10" />은
                                        각각 자유롭게 선택할 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^4=16
`}
                                    />

                                    <p className="leading-8">
                                        개의 부분집합에서 <InlineMath math="2" />가
                                        최소 원소가 됩니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        같은 방법으로 구하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2\text{가 최소} &: 16\\
4\text{가 최소} &: 8\\
6\text{이 최소} &: 4\\
8\text{이 최소} &: 2\\
10\text{이 최소} &: 1
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 모든 부분집합의 최소 원소의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\cdot16
+4\cdot8
+6\cdot4
+8\cdot2
+10\cdot1
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=32+32+24+16+10
=114
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* 최대 원소 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        최대 원소의 합
                                    </p>

                                    <p className="leading-8">
                                        최대 원소의 경우에는 반대로 그 원소보다
                                        작은 원소들의 포함 여부가 자유롭습니다.
                                    </p>

                                    <p className="mt-4 leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2\text{가 최대} &: 1\\
4\text{가 최대} &: 2\\
6\text{이 최대} &: 4\\
8\text{이 최대} &: 8\\
10\text{이 최대} &: 16
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 모든 부분집합의 최대 원소의 합은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\cdot1
+4\cdot2
+6\cdot4
+8\cdot8
+10\cdot16
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
=2+8+24+64+160
=258
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* 전체 합 */}
                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
S_1+S_2+\cdots+S_n
=
114+258
`}
                                />

                                <BlockMath
                                    math={String.raw`
=372
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{372}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        각 부분집합을 직접 나열할 필요 없이,
                                        각각의 원소가 최소 원소 또는 최대 원소가 되는
                                        부분집합의 개수를 구합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
\text{최소 원소의 개수} &: 16,\ 8,\ 4,\ 2,\ 1\\
\text{최대 원소의 개수} &: 1,\ 2,\ 4,\ 8,\ 16
\end{aligned}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        그리고 각 원소에 그 원소가 최소 또는 최대가 되는
                                        횟수를 곱하여 모두 더하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\sum S_i
=
\sum a_i+\sum b_i
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                자연수를 원소로 가지는 집합 <InlineMath math="A" />에 대하여
                                다음 규칙에 따라 <InlineMath math="m(A)" />의 값을 정한다.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    (가) 집합 <InlineMath math="A" />의 원소가 1개인 경우
                                    집합 <InlineMath math="A" />의 원소를{" "}
                                    <InlineMath math="m(A)" />의 값으로 한다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    (나) 집합 <InlineMath math="A" />의 원소가 2개 이상인 경우
                                    집합 <InlineMath math="A" />의 원소를 큰 수부터 차례로 나열하고,
                                    나열한 수들 사이에 <InlineMath math="-," />{" "}
                                    <InlineMath math="+" />를 이 순서대로 번갈아 넣어
                                    계산한 결과를 <InlineMath math="m(A)" />의 값으로 한다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                집합 <InlineMath math="\{1,2,3,4,5,6\}" />의 공집합이 아닌
                                서로 다른 부분집합을{" "}
                                <InlineMath math="X_1,X_2,\cdots,X_{63}" />이라 할 때,
                            </p>

                            <BlockMath
                                math={String.raw`
m(X_1)+m(X_2)+\cdots+m(X_{63})
`}
                            />

                            <p className="leading-8 text-gray-300">
                                의 값을 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    부분집합의 원소를 큰 수부터 나열하면
                                    가장 큰 원소에는 항상 <InlineMath math="+" />의 부호가 붙고,
                                    그다음부터
                                </p>

                                <BlockMath
                                    math={String.raw`
+,\ -,\ +,\ -,\ \cdots
`}
                                />

                                <p className="leading-8">
                                    의 순서로 부호가 결정됩니다.
                                </p>

                                <p className="leading-8">
                                    각 원소가 모든 부분집합의{" "}
                                    <InlineMath math="m(X_i)" />에 어떻게 나타나는지
                                    생각해 봅시다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소 1의 경우
                                    </p>

                                    <p className="leading-8">
                                        원소 <InlineMath math="1" />이 들어 있는 부분집합을 생각합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        원소 <InlineMath math="2" />가 포함되지 않은 부분집합과
                                        그 부분집합에 <InlineMath math="2" />를 추가한 부분집합을
                                        서로 짝지을 수 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="2" />를 추가하면{" "}
                                        <InlineMath math="1" />보다 큰 원소가 하나 늘어나므로{" "}
                                        <InlineMath math="1" /> 앞의 부호는 반대로 바뀝니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
+1
\qquad\longleftrightarrow\qquad
-1
`}
                                    />

                                    <p className="leading-8">
                                        따라서 원소 <InlineMath math="1" />이 만드는 값은
                                        전체에서 서로 상쇄됩니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소 2, 3, 4, 5의 경우
                                    </p>

                                    <p className="leading-8">
                                        같은 방법으로 원소 <InlineMath math="2" />는
                                        원소 <InlineMath math="3" />의 포함 여부에 따라,
                                        원소 <InlineMath math="3" />은{" "}
                                        <InlineMath math="4" />의 포함 여부에 따라
                                        부호가 서로 반대가 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2 &: \quad 3\text{의 포함 여부에 따라 상쇄}\\
3 &: \quad 4\text{의 포함 여부에 따라 상쇄}\\
4 &: \quad 5\text{의 포함 여부에 따라 상쇄}\\
5 &: \quad 6\text{의 포함 여부에 따라 상쇄}
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 2,\ 3,\ 4,\ 5
`}
                                    />

                                    <p className="leading-8">
                                        가 만드는 값은 모두 서로 상쇄됩니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소 6의 경우
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="6" />은 전체집합에서 가장 큰 원소이므로{" "}
                                        <InlineMath math="6" />이 포함된 어떤 부분집합에서도
                                        항상 가장 먼저 놓입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="6" />의 부호는 항상{" "}
                                        <InlineMath math="+" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="6" />을 포함한다고 정하면
                                        나머지 원소
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,\ 2,\ 3,\ 4,\ 5
`}
                                    />

                                    <p className="leading-8">
                                        는 각각 포함하거나 포함하지 않을 수 있으므로{" "}
                                        <InlineMath math="6" />이 포함되는 부분집합의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^5=32
`}
                                    />

                                    <p className="leading-8">
                                        개입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 원소 <InlineMath math="6" />이 전체 합에
                                        만드는 값은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
6\cdot32=192
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    원소 <InlineMath math="1,2,3,4,5" />에서 생기는 값은
                                    모두 상쇄되고 원소 <InlineMath math="6" />에서 생기는 값만
                                    남으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
m(X_1)+m(X_2)+\cdots+m(X_{63})
=192
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{192}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        63개의 부분집합을 하나씩 만들어{" "}
                                        <InlineMath math="m(A)" />를 계산할 필요는 없습니다.
                                        각 원소가 전체 합에 얼마나 기여하는지를 따로 생각합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        원소 <InlineMath math="1,2,3,4,5" />는
                                        바로 다음 큰 원소의 포함 여부를 바꾸면 부호가 반대가 되어
                                        서로 상쇄됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1,2,3,4,5
\quad\longrightarrow\quad
0
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        가장 큰 원소 <InlineMath math="6" />만
                                        모든 경우에서 항상 <InlineMath math="+" />로 나타나며,{" "}
                                        <InlineMath math="6" />을 포함하는 부분집합은
                                        <InlineMath math="2^5" />개입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{6\cdot2^5=192}
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
                                집합 <InlineMath math="A" />가 자연수를 원소로 가질 때,
                                조건
                            </p>

                            <BlockMath
                                math={String.raw`
x\in A\text{이면 }7-x\in A
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 만족하는 집합 <InlineMath math="A" />의 개수를 구하시오.
                                (단, <InlineMath math="A\ne\varnothing" />)
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    조건
                                </p>

                                <BlockMath
                                    math={String.raw`
x\in A
\quad\Longrightarrow\quad
7-x\in A
`}
                                />

                                <p className="leading-8">
                                    를 만족하려면 어떤 원소가 집합{" "}
                                    <InlineMath math="A" />에 포함될 때{" "}
                                    <InlineMath math="7-x" />도 반드시 함께 포함되어야 합니다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소의 짝 찾기
                                    </p>

                                    <p className="leading-8">
                                        자연수 중 서로 <InlineMath math="7-x" />의 관계가 되는
                                        원소를 짝지으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\leftrightarrow6
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2\leftrightarrow5
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
3\leftrightarrow4
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        예를 들어 <InlineMath math="1\in A" />이면
                                        조건에 의해 <InlineMath math="6\in A" />이고,
                                        반대로 <InlineMath math="6\in A" />이면{" "}
                                        <InlineMath math="1\in A" />입니다.
                                        따라서 <InlineMath math="1,\ 6" />은 반드시 함께
                                        포함되거나 함께 포함되지 않아야 합니다.
                                        다른 두 쌍도 마찬가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    따라서 세 쌍
                                </p>

                                <BlockMath
                                    math={String.raw`
\{1,6\},\qquad
\{2,5\},\qquad
\{3,4\}
`}
                                />

                                <p className="leading-8">
                                    은 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{포함}
\qquad\text{또는}\qquad
\text{포함하지 않음}
`}
                                />

                                <p className="leading-8">
                                    의 두 가지 경우를 가집니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2=2^3=8
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        공집합 제외
                                    </p>

                                    <p className="leading-8">
                                        세 쌍을 모두 포함하지 않으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A=\varnothing
`}
                                    />

                                    <p className="leading-8">
                                        이 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        문제에서 <InlineMath math="A\ne\varnothing" />이라고
                                        하였으므로 이 한 경우를 제외합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^3-1=7
`}
                                    />

                                </div>


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
                                        조건에 의해 서로 반드시 함께 포함되어야 하는 원소들을
                                        하나의 묶음으로 생각합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\{1,6\},\quad
\{2,5\},\quad
\{3,4\}
}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        각각의 묶음은 포함하거나 포함하지 않는 두 가지 선택을
                                        가지므로 <InlineMath math="2^3" />가지이고,
                                        공집합 한 경우를 제외하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^3-1=7}
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
                                자연수 전체의 집합의 부분집합 <InlineMath math="A" />에 대하여
                            </p>

                            <BlockMath
                                math={String.raw`
x\in A\text{이면 }\frac{36}{x}\in A
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 만족하는 집합 <InlineMath math="A" />의 개수를 구하시오.
                                (단, <InlineMath math="A\ne\varnothing" />)
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    <InlineMath math="x\in A" />이면{" "}
                                    <InlineMath math="\dfrac{36}{x}\in A" />이고
                                    집합 <InlineMath math="A" />의 원소는 자연수이므로{" "}
                                    <InlineMath math="\dfrac{36}{x}" />도 자연수이어야 합니다.
                                </p>

                                <p className="leading-8">
                                    따라서 <InlineMath math="x" />는{" "}
                                    <InlineMath math="36" />의 양의 약수입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
x=1,2,3,4,6,9,12,18,36
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        조건에 따라 원소를 묶어 봅시다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\leftrightarrow36
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
2\leftrightarrow18
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
3\leftrightarrow12
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
4\leftrightarrow9
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
6\leftrightarrow6
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,36\},\quad
\{2,18\},\quad
\{3,12\},\quad
\{4,9\},\quad
\{6\}
`}
                                    />

                                    <p className="leading-8">
                                        의 5개의 묶음으로 생각할 수 있습니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        각 묶음의 포함 여부
                                    </p>

                                    <p className="leading-8">
                                        각 묶음은 집합 <InlineMath math="A" />에
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{포함}
\qquad\text{또는}\qquad
\text{포함하지 않음}
`}
                                    />

                                    <p className="leading-8">
                                        의 두 가지 경우가 있습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 가능한 집합 <InlineMath math="A" />의 개수는
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2^5=32
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    이 중 모든 묶음을 포함하지 않는 경우는
                                    공집합이므로 제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^5-1=31
`}
                                />


                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{31}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        먼저 조건을 만족할 수 있는 원소를 찾습니다.
                                        <InlineMath math="\dfrac{36}{x}" />가 자연수이어야 하므로{" "}
                                        <InlineMath math="x" />는 36의 양의 약수입니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        그다음 조건에 의해 반드시 함께 포함되는 원소를
                                        하나의 묶음으로 생각합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\{1,36\},\
\{2,18\},\
\{3,12\},\
\{4,9\},\
\{6\}
}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        5개의 묶음을 각각 포함하거나 포함하지 않을 수 있으므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^5-1=31}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다.
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
                                자연수 전체의 집합의 부분집합 <InlineMath math="X" />가
                                다음 조건을 만족한다.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5 space-y-4">

                                <p className="leading-8 text-gray-300">
                                    (가) <InlineMath math="x\in X" />이면{" "}
                                    <InlineMath math="\dfrac{64}{x}\in X" />
                                </p>

                                <p className="leading-8 text-gray-300">
                                    (나) 집합 <InlineMath math="X" />의 원소 개수는 홀수이다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                집합 <InlineMath math="X" />의 개수를 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    조건 (가)에서 <InlineMath math="x\in X" />이면{" "}
                                    <InlineMath math="\dfrac{64}{x}\in X" />이고,
                                    집합 <InlineMath math="X" />의 원소는 자연수이므로{" "}
                                    <InlineMath math="x" />는 64의 양의 약수입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
1,\ 2,\ 4,\ 8,\ 16,\ 32,\ 64
`}
                                />


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        조건에 따라 원소를 묶으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\leftrightarrow64,\qquad
2\leftrightarrow32,\qquad
4\leftrightarrow16,\qquad
8\leftrightarrow8
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,64\},\quad
\{2,32\},\quad
\{4,16\},\quad
\{8\}
`}
                                    />

                                    <p className="leading-8">
                                        의 네 묶음으로 생각할 수 있습니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소 개수가 홀수가 되려면
                                    </p>

                                    <p className="leading-8">
                                        앞의 세 묶음은 각각 원소가 2개입니다.
                                        따라서 이 묶음들은 포함하거나 포함하지 않아도
                                        집합 <InlineMath math="X" />의 원소 개수의 홀짝은
                                        바뀌지 않습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,64\},\quad
\{2,32\},\quad
\{4,16\}
`}
                                    />

                                    <p className="mt-3 leading-8">
                                        반면 <InlineMath math="\{8\}" />은 원소가 1개이므로
                                        집합 <InlineMath math="X" />의 원소 개수가
                                        홀수가 되려면 <InlineMath math="8" />은
                                        반드시 포함되어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
8\in X
`}
                                    />

                                </div>


                                <p className="leading-8">
                                    <InlineMath math="8" />은 반드시 포함하고,
                                    나머지 세 묶음은 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{포함 또는 포함하지 않음}
`}
                                />

                                <p className="leading-8">
                                    의 2가지 경우가 있으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
2\times2\times2=2^3=8
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
\boxed{8}
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        조건에 의해 함께 움직이는 원소들을 먼저 묶습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,64\},\quad
\{2,32\},\quad
\{4,16\},\quad
\{8\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        원소가 2개인 묶음은 몇 개를 선택해도
                                        전체 원소의 개수에 짝수만 더합니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        따라서 원소의 개수를 홀수로 만드는 것은
                                        원소가 1개인 <InlineMath math="\{8\}" />의
                                        포함 여부입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
8\text{은 반드시 포함},\qquad
\text{나머지 3묶음은 자유}
}
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\boxed{2^3=8}
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
                                집합{" "}
                                <InlineMath
                                    math={String.raw`
U=\{x\mid x\text{는 }9\text{ 이하의 자연수}\}
`}
                                />의 부분집합 <InlineMath math="A" />는 다음 조건을 만족시킨다.
                            </p>

                            <div className="mt-5 rounded-xl border border-cyan-500/40 p-5">

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="m" />이 집합 <InlineMath math="A" />의
                                    원소이면, <InlineMath math="2m" />의 일의 자리 숫자와{" "}
                                    <InlineMath math="2n" />의 일의 자리 숫자가 같아지는{" "}
                                    <InlineMath math="m" />이 아닌 자연수{" "}
                                    <InlineMath math="n" />이 집합 <InlineMath math="A" />에
                                    존재한다.
                                </p>

                            </div>

                            <p className="mt-5 leading-8 text-gray-300">
                                예를 들어 <InlineMath math="3" />이 집합{" "}
                                <InlineMath math="A" />의 원소이면{" "}
                                <InlineMath math="2\times3" />의 일의 자리 숫자와{" "}
                                <InlineMath math="2\times8" />의 일의 자리 숫자가 같으므로{" "}
                                <InlineMath math="8" />도 집합 <InlineMath math="A" />의
                                원소이다.
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                공집합이 아닌 집합 <InlineMath math="A" />의 개수를 구하시오.
                            </p>

                        </div>


                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                <p className="leading-8">
                                    먼저 집합 <InlineMath math="U" />의 원소를 나열하면
                                </p>

                                <BlockMath
                                    math={String.raw`
U=\{1,2,3,4,5,6,7,8,9\}
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="leading-8">
                                    각 원소에 <InlineMath math="2" />를 곱했을 때의
                                    일의 자리 숫자를 살펴봅시다.
                                </p>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        일의 자리 숫자가 같은 원소 찾기
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\begin{aligned}
2\times1&=2,  &2\times6&=12\\
2\times2&=4,  &2\times7&=14\\
2\times3&=6,  &2\times8&=16\\
2\times4&=8,  &2\times9&=18
\end{aligned}
`}
                                    />

                                    <p className="leading-8">
                                        따라서 일의 자리 숫자가 같은 원소끼리 묶으면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,6\},\qquad
\{2,7\},\qquad
\{3,8\},\qquad
\{4,9\}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        원소 5는 포함될 수 있을까?
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\times5=10
`}
                                    />

                                    <p className="leading-8">
                                        이므로 일의 자리 숫자는 <InlineMath math="0" />입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그런데 집합 <InlineMath math="U" />에서{" "}
                                        <InlineMath math="5" /> 이외에는{" "}
                                        <InlineMath math="2n" />의 일의 자리 숫자가{" "}
                                        <InlineMath math="0" />이 되는 원소가 없습니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        조건에서는 <InlineMath math="n\ne m" />이어야 하므로
                                        원소 <InlineMath math="5" />는 집합{" "}
                                        <InlineMath math="A" />에 포함될 수 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
5\notin A
`}
                                    />

                                </div>


                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        네 묶음의 포함 여부
                                    </p>

                                    <p className="leading-8">
                                        예를 들어 <InlineMath math="1\in A" />이면 조건에 의해{" "}
                                        <InlineMath math="6\in A" />이어야 하고,{" "}
                                        <InlineMath math="6\in A" />이면 역시{" "}
                                        <InlineMath math="1\in A" />이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 각 묶음은 두 원소를 함께
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\text{포함}
\qquad\text{또는}\qquad
\text{포함하지 않음}
`}
                                    />

                                    <p className="leading-8">
                                        의 두 가지 경우를 가집니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
2\times2\times2\times2=2^4=16
`}
                                    />

                                    <p className="leading-8">
                                        가지입니다.
                                    </p>

                                </div>


                                <p className="leading-8">
                                    이 중 네 묶음을 모두 포함하지 않는 경우는
                                    공집합이므로 제외합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2^4-1=15
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
                                        조건에 직접 원소의 짝이 보이지 않을 때에는
                                        주어진 조건을 만족하는 원소들을 먼저 찾아
                                        하나의 묶음으로 만들어 봅니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{
\{1,6\},\quad
\{2,7\},\quad
\{3,8\},\quad
\{4,9\}
}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        네 묶음은 각각 포함 또는 불포함의 두 가지 경우를 가지지만,{" "}
                                        <InlineMath math="5" />는 함께 짝지을 다른 원소가 없으므로
                                        포함할 수 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\boxed{2^4-1=15}
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

                        {/* 문제 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="leading-8 text-gray-300">
                                집합 <InlineMath math="A=\{1,2,3\}" />에 대하여 집합{" "}
                                <InlineMath math="P(A)" />가
                            </p>

                            <BlockMath
                                math={String.raw`
P(A)=\{X\mid X\subset A\}
`}
                            />

                            <p className="leading-8 text-gray-300">
                                일 때, 다음 중 옳지 않은 것은?
                            </p>

                            <div className="mt-5 grid grid-cols-1 gap-3 text-gray-300 sm:grid-cols-2 lg:grid-cols-3">
                                <p>
                                    ① <InlineMath math="\varnothing\subset P(A)" />
                                </p>
                                <p>
                                    ② <InlineMath math="\varnothing\in P(A)" />
                                </p>
                                <p>
                                    ③ <InlineMath math="\{1\}\in P(A)" />
                                </p>
                                <p>
                                    ④ <InlineMath math="\{1,2\}\subset P(A)" />
                                </p>
                                <p>
                                    ⑤ <InlineMath math="A\in P(A)" />
                                </p>
                            </div>

                        </div>


                        {/* 풀이 */}
                        <details className="mt-5 rounded-xl border border-white/15 p-5">

                            <summary className="cursor-pointer font-semibold text-yellow-300">
                                풀이 보기
                            </summary>

                            <div className="mt-5 space-y-5 text-gray-300">

                                {/* P(A)의 의미 */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-4 font-bold text-white">
                                        먼저 <InlineMath math="P(A)" />의 의미를 파악해 봅시다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P(A)=\{X\mid X\subset A\}
`}
                                    />

                                    <p className="leading-8">
                                        는 <InlineMath math="A" />의 부분집합{" "}
                                        <InlineMath math="X" />를 모두 원소로 갖는 집합이라는
                                        뜻입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        <InlineMath math="A=\{1,2,3\}" />의 부분집합을
                                        모두 나열하면
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\varnothing,\quad
\{1\},\quad
\{2\},\quad
\{3\},\quad
\{1,2\},\quad
\{1,3\},\quad
\{2,3\},\quad
\{1,2,3\}
`}
                                    />

                                    <p className="leading-8">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P(A)=
\{\varnothing,\{1\},\{2\},\{3\},
\{1,2\},\{1,3\},\{2,3\},\{1,2,3\}\}
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                </div>


                                {/* ① */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ① <InlineMath math="\varnothing\subset P(A)" />
                                    </p>

                                    <p className="leading-8">
                                        공집합은 모든 집합의 부분집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\varnothing\subset P(A)
`}
                                    />

                                    <p className="leading-8">
                                        는 <b className="text-white">옳습니다.</b>
                                    </p>

                                </div>


                                {/* ② */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ② <InlineMath math="\varnothing\in P(A)" />
                                    </p>

                                    <p className="leading-8">
                                        공집합은 집합 <InlineMath math="A" />의 부분집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\varnothing\subset A
`}
                                    />

                                    <p className="leading-8">
                                        입니다. 따라서 <InlineMath math="\varnothing" />은{" "}
                                        <InlineMath math="P(A)" />의 원소입니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\varnothing\in P(A)
`}
                                    />

                                    <p className="leading-8">
                                        는 <b className="text-white">옳습니다.</b>
                                    </p>

                                </div>


                                {/* ③ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ③ <InlineMath math="\{1\}\in P(A)" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{1\}" />은 집합{" "}
                                        <InlineMath math="A" />의 부분집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1\}\subset A
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="\{1\}" />은{" "}
                                        <InlineMath math="P(A)" />의 원소이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1\}\in P(A)
`}
                                    />

                                    <p className="leading-8">
                                        는 <b className="text-white">옳습니다.</b>
                                    </p>

                                </div>


                                {/* ④ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ④ <InlineMath math="\{1,2\}\subset P(A)" />
                                    </p>

                                    <p className="leading-8">
                                        <InlineMath math="\{1,2\}" />가{" "}
                                        <InlineMath math="P(A)" />의 부분집합이 되려면
                                        원소 <InlineMath math="1,2" />가 모두{" "}
                                        <InlineMath math="P(A)" />의 원소이어야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\in P(A),\qquad 2\in P(A)
`}
                                    />

                                    <p className="leading-8">
                                        이어야 합니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        그러나 <InlineMath math="P(A)" />의 원소는{" "}
                                        <InlineMath math="A" />의 부분집합들이므로{" "}
                                        <InlineMath math="\{1\},\{2\}" />는 원소이지만
                                        숫자 <InlineMath math="1,2" />는 원소가 아닙니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
1\notin P(A),\qquad 2\notin P(A)
`}
                                    />

                                    <p className="leading-8">
                                        따라서
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\{1,2\}\not\subset P(A)
`}
                                    />

                                    <p className="leading-8">
                                        이므로 <b className="text-white">옳지 않습니다.</b>
                                    </p>

                                </div>


                                {/* ⑤ */}
                                <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                    <p className="mb-3 font-bold text-white">
                                        ⑤ <InlineMath math="A\in P(A)" />
                                    </p>

                                    <p className="leading-8">
                                        자기 자신도 부분집합이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\subset A
`}
                                    />

                                    <p className="leading-8">
                                        입니다.
                                    </p>

                                    <p className="mt-3 leading-8">
                                        따라서 <InlineMath math="A" />도{" "}
                                        <InlineMath math="P(A)" />의 원소이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
A\in P(A)
`}
                                    />

                                    <p className="leading-8">
                                        는 <b className="text-white">옳습니다.</b>
                                    </p>

                                </div>


                                {/* 정답 */}
                                <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                    <p className="font-bold text-green-300">
                                        따라서 옳지 않은 것은
                                    </p>

                                    <BlockMath
                                        math={String.raw`
{\text{④}}
`}
                                    />

                                </div>


                                {/* 풀이의 핵심 */}
                                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                    <p className="mb-3 font-bold text-blue-300">
                                        풀이의 핵심
                                    </p>

                                    <p className="leading-8 text-gray-300">
                                        문제에서 주어진
                                    </p>

                                    <BlockMath
                                        math={String.raw`
P(A)=\{X\mid X\subset A\}
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        를 그대로 해석하면 됩니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
X\subset A
\quad\Longleftrightarrow\quad
X\in P(A)
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        즉, <InlineMath math="A" />의 부분집합 하나하나가{" "}
                                        <InlineMath math="P(A)" />에서는 원소가 됩니다.
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        특히
                                    </p>

                                    <BlockMath
                                        math={String.raw`
\varnothing\subset A
\quad\Rightarrow\quad
\varnothing\in P(A)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
\{1\}\subset A
\quad\Rightarrow\quad
\{1\}\in P(A)
`}
                                    />

                                    <BlockMath
                                        math={String.raw`
A\subset A
\quad\Rightarrow\quad
A\in P(A)
`}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        와 같이 부분집합 기호와 원소 기호의 관계를
                                        정확하게 구별하는 것이 중요합니다.
                                    </p>

                                </div>

                            </div>

                        </details>

                    </div>

                    {/* 핵심 정리 */}
                    <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <h3 className="mb-4 text-xl font-bold text-blue-300">
                            핵심 정리
                        </h3>

                        <div className="space-y-6 text-gray-300">

                            <div>
                                <p className="font-bold text-white">
                                    ① 모든 부분집합에서 원소의 합
                                </p>

                                <p className="mt-2 leading-8">
                                    원소가 <InlineMath math="n" />개인 집합에서
                                    각각의 원소는 전체 부분집합의 절반인{" "}
                                    <InlineMath math="2^{n-1}" />개의 부분집합에 포함됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{모든 부분집합의 원소의 합}
=
\text{원래 집합의 원소의 합}\times2^{n-1}
`}
                                />

                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    ② 원소가 r개인 부분집합에서 원소의 합
                                </p>

                                <p className="mt-2 leading-8">
                                    특정 원소 하나를 포함한다고 정하면
                                    나머지 <InlineMath math="n-1" />개의 원소 중{" "}
                                    <InlineMath math="r-1" />개를 선택합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
\text{원소가 }r\text{개인 부분집합의 원소의 합}
=
\text{원래 집합의 원소의 합}
\times{}_{n-1}C_{r-1}
`}
                                />

                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    ③ 특정 원소가 최소 원소
                                </p>

                                <p className="mt-2 leading-8">
                                    그 원소는 반드시 포함하고,
                                    그보다 작은 원소는 모두 제외하며,
                                    그보다 큰 원소의 포함 여부는 자유롭게 결정합니다.
                                </p>

                            </div>


                            <div>
                                <p className="font-bold text-white">
                                    ④ 특정 원소가 최대 원소
                                </p>

                                <p className="mt-2 leading-8">
                                    그 원소는 반드시 포함하고,
                                    그보다 큰 원소는 모두 제외하며,
                                    그보다 작은 원소의 포함 여부는 자유롭게 결정합니다.
                                </p>

                            </div>


                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    가장 중요한 생각
                                </p>

                                <p className="mt-2 leading-8">
                                    부분집합을 하나씩 만들어 계산하지 말고,
                                    <b className="text-white">
                                        {" "}특정 원소가 몇 개의 부분집합에 나타나는가
                                    </b>
                                    를 생각합니다.
                                </p>

                            </div>

                        </div>

                    </div>
                </div>

            </section>

            {/* 2.5 집합의 상등 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    2.5 집합의 상등
                </h2>

                <p className="leading-8 text-gray-300">
                    두 집합이 서로 같은 원소를 가지고 있으면
                    두 집합은 서로 같은 집합입니다.
                    <br />
                    집합의 상등은 두 방향의 포함관계를 이용하여 판단할 수 있습니다.
                </p>


                <div className="mt-8 space-y-6">

                    {/* 1. 같은 집합 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            1. 같은 집합
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이면 집합 <InlineMath math="A" />의 모든 원소가
                            집합 <InlineMath math="B" />에 있고,
                        </p>

                        <BlockMath
                            math={String.raw`
B\subset A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이면 집합 <InlineMath math="B" />의 모든 원소가
                            집합 <InlineMath math="A" />에 있습니다.
                        </p>

                        <p className="mt-5 leading-8 text-gray-300">
                            따라서 두 조건을 모두 만족하면
                            두 집합은 같은 원소로 이루어져 있으므로
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A\subset B,\qquad B\subset A
\quad\Longleftrightarrow\quad
A=B
}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 합니다.
                        </p>

                    </div>


                    {/* 2. 집합의 원소는 순서와 관계없다 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            2. 집합의 원소는 순서와 관계없다
                        </h3>

                        <p className="leading-8 text-gray-300">
                            집합은 원소를 나열한 순서를 고려하지 않습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            예를 들어
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3\},\qquad
B=\{3,1,2\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            는 원소를 적은 순서는 다르지만
                            두 집합의 원소가 모두 같으므로
                        </p>

                        <BlockMath
                            math={String.raw`
A=B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>


                    {/* 3. 같은 집합임을 확인하는 방법 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            3. 같은 집합임을 확인하는 방법
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합의 원소를 직접 모두 비교하기 어려운 경우에는
                            두 방향의 포함관계를 각각 확인합니다.
                        </p>

                        <div className="mt-5 rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="leading-8 text-gray-300">
                                먼저
                            </p>

                            <BlockMath
                                math={String.raw`
A\subset B
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 확인하여 집합 <InlineMath math="A" />의 모든 원소가
                                집합 <InlineMath math="B" />에 있음을 보이고,
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                다시
                            </p>

                            <BlockMath
                                math={String.raw`
B\subset A
`}
                            />

                            <p className="leading-8 text-gray-300">
                                를 확인하여 집합 <InlineMath math="B" />의 모든 원소가
                                집합 <InlineMath math="A" />에 있음을 보입니다.
                            </p>

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            두 조건이 모두 성립하면
                        </p>

                        <BlockMath
                            math={String.raw`
A=B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>


                    {/* 4. 예시 */}
                    <div className="rounded-xl border border-white/10 bg-white/10 p-6">

                        <h3 className="mb-4 text-2xl font-bold">
                            예시
                        </h3>

                        <p className="leading-8 text-gray-300">
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{1,2,3\},\qquad
B=\{x\mid x=1,2,3\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            을 생각해 봅시다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            집합 <InlineMath math="A" />의 모든 원소는
                            집합 <InlineMath math="B" />에 있으므로
                        </p>

                        <BlockMath
                            math={String.raw`
A\subset B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            이고,
                            집합 <InlineMath math="B" />의 모든 원소도
                            집합 <InlineMath math="A" />에 있으므로
                        </p>

                        <BlockMath
                            math={String.raw`
B\subset A
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            따라서
                        </p>

                        <BlockMath
                            math={String.raw`
A=B
`}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
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
                            두 집합{" "}
                            <InlineMath math="A=\{4,\ a+1,\ a-2\}" />,{" "}
                            <InlineMath math="B=\{2,\ 5,\ a^2-3a\}" />에 대하여{" "}
                            <InlineMath math="A=B" />가 되도록{" "}
                            <InlineMath math="a" />의 값을 정하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                두 집합이 같으려면 두 집합의 원소가 모두 같아야 합니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="A" />에는 원소{" "}
                                <InlineMath math="4" />가 있으므로{" "}
                                <InlineMath math="A=B" />가 되려면{" "}
                                <InlineMath math="4" />가 집합{" "}
                                <InlineMath math="B" />에도 있어야 합니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="B" />의 원소{" "}
                                <InlineMath math="2,\ 5" />는 4가 아니므로
                            </p>

                            <BlockMath
                                math={String.raw`
a^2-3a=4
`}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a^2-3a-4&=0\\
(a-4)(a+1)&=0
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a=4\quad\text{또는}\quad a=-1
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>


                            {/* 후보 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 값을 확인해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=4" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{4,5,2\},\qquad
B=\{2,5,4\}
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
A=B
`}
                                />

                                <p className="mt-5 leading-8">
                                    <InlineMath math="a=-1" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{4,0,-3\},\qquad
B=\{2,5,4\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="A\ne B" />입니다.
                                </p>

                            </div>


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{a=4}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 집합이 같으면 한 집합의 원소는
                                    반드시 다른 집합에도 있어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in A,\quad A=B
\quad\Rightarrow\quad
4\in B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이를 이용하여 <InlineMath math="a" />의 후보를 찾은 후,
                                    실제로 두 집합이 같은지 확인합니다.
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
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{4,\ 2a,\ a^2\},\qquad
B=\{8,\ 2a-4,\ 3a+4\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A=B" />일 때,
                            집합 <InlineMath math="A" />의 모든 원소의 합을 구하시오.
                            (단, <InlineMath math="a" />는 실수이다.)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="4\in A" />이고{" "}
                                <InlineMath math="A=B" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
4\in B
`}
                            />

                            <p className="leading-8">
                                이어야 합니다.
                            </p>

                            <p className="leading-8">
                                집합 <InlineMath math="B" />의 원소 중{" "}
                                <InlineMath math="8" />은 4가 아니므로
                            </p>

                            <BlockMath
                                math={String.raw`
2a-4=4
\qquad\text{또는}\qquad
3a+4=4
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a=4
\qquad\text{또는}\qquad
a=0
`}
                            />


                            {/* 후보 확인 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    두 값을 확인해 봅시다.
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=4" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{4,8,16\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{8,4,16\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="A=B" />입니다.
                                </p>


                                <p className="mt-5 leading-8">
                                    <InlineMath math="a=0" />이면
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{4,0\}
`}
                                />

                                <BlockMath
                                    math={String.raw`
B=\{8,-4,4\}
`}
                                />

                                <p className="leading-8">
                                    이므로 <InlineMath math="A\ne B" />입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서 <InlineMath math="a=4" />이고
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{4,8,16\}
`}
                            />

                            <p className="leading-8">
                                이므로 집합 <InlineMath math="A" />의 모든 원소의 합은
                            </p>

                            <BlockMath
                                math={String.raw`
4+8+16=28
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{28}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 집합이 같고 한쪽 집합에 확정된 원소가 있으면,
                                    그 원소가 다른 집합에도 반드시 있어야 한다는 것을
                                    먼저 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
4\in A,\quad A=B
\quad\Rightarrow\quad
4\in B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이렇게 <InlineMath math="a" />의 후보를 찾은 후에는
                                    각 값을 대입하여 실제로 두 집합이 같은지 확인합니다.
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
                            두 집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{x\mid x^2+2ax-3a-1=0\},\qquad
B=\{2,b\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A\subset B" />이고{" "}
                            <InlineMath math="B\subset A" />일 때,
                            상수 <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="ab" />의 값을 구하시오.
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="A\subset B" />이고{" "}
                                <InlineMath math="B\subset A" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A=B
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                따라서 <InlineMath math="2\in B" />이므로{" "}
                                <InlineMath math="2\in A" />입니다.
                            </p>

                            <p className="leading-8">
                                즉, <InlineMath math="x=2" />는 방정식
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+2ax-3a-1=0
`}
                            />

                            <p className="leading-8">
                                의 근입니다.
                            </p>


                            {/* a 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="a" />의 값 구하기
                                </p>

                                <p className="leading-8">
                                    방정식에 <InlineMath math="x=2" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
\begin{aligned}
2^2+2a\cdot2-3a-1&=0\\
4+4a-3a-1&=0\\
a+3&=0
\end{aligned}
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
a=-3
`}
                                />

                            </div>


                            {/* b 구하기 */}
                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    <InlineMath math="b" />의 값 구하기
                                </p>

                                <p className="leading-8">
                                    <InlineMath math="a=-3" />을 방정식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2-6x+8=0
`}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
(x-2)(x-4)=0
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
A=\{2,4\}
`}
                                />

                                <p className="leading-8">
                                    이고 <InlineMath math="A=B" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
B=\{2,b\}=\{2,4\}
`}
                                />

                                <p className="leading-8">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
b=4
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
ab=(-3)\times4=-12
`}
                            />


                            {/* 정답 */}
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


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 방향의 포함관계가 모두 성립하면
                                    두 집합은 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A\subset B,\qquad B\subset A
\quad\Rightarrow\quad
A=B
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 한 집합에서 확정된 원소{" "}
                                    <InlineMath math="2" />를 다른 집합의 조건에
                                    먼저 이용할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
2\in B
\quad\Rightarrow\quad
2\in A
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
                            실수 전체의 집합의 두 부분집합
                        </p>

                        <BlockMath
                            math={String.raw`
A=\{a\},\qquad
B=\{x\mid x^2+(b+1)x+b\le0\}
`}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A=B" />일 때,{" "}
                            <InlineMath math="a+b" />의 값을 구하시오.
                            (단, <InlineMath math="b" />는 상수이다.)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                집합 <InlineMath math="A=\{a\}" />는
                                원소가 1개인 집합입니다.
                            </p>

                            <p className="leading-8">
                                <InlineMath math="A=B" />이므로 집합{" "}
                                <InlineMath math="B" />도 원소가 1개이어야 합니다.
                            </p>


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    집합 B의 원소가 1개가 되려면
                                </p>

                                <p className="leading-8">
                                    부등식의 좌변을 인수분해하면
                                </p>

                                <BlockMath
                                    math={String.raw`
x^2+(b+1)x+b
=(x+1)(x+b)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이차식의 최고차항의 계수가 양수이므로
                                    두 근이 서로 다르면 두 근 사이의 모든 실수가
                                    집합 <InlineMath math="B" />의 원소가 됩니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 집합 <InlineMath math="B" />의 원소가
                                    정확히 1개가 되려면 두 근이 같아야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-1=-b
`}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
b=1
`}
                                />

                            </div>


                            <p className="leading-8">
                                <InlineMath math="b=1" />이면 부등식은
                            </p>

                            <BlockMath
                                math={String.raw`
x^2+2x+1\le0
`}
                            />

                            <BlockMath
                                math={String.raw`
(x+1)^2\le0
`}
                            />

                            <p className="leading-8">
                                입니다.
                            </p>

                            <p className="leading-8">
                                제곱은 항상 0 이상이므로 위 부등식을 만족하는 값은
                            </p>

                            <BlockMath
                                math={String.raw`
x=-1
`}
                            />

                            <p className="leading-8">
                                하나뿐입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
B=\{-1\}
`}
                            />

                            <p className="leading-8">
                                그런데 <InlineMath math="A=B" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
A=\{a\}=\{-1\}
`}
                            />

                            <p className="leading-8">
                                에서
                            </p>

                            <BlockMath
                                math={String.raw`
a=-1
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
a+b=-1+1=0
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{0}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 집합이 같으면 원소도 같고
                                    <b className="text-white"> 원소의 개수도 같아야 합니다.</b>
                                </p>

                                <BlockMath
                                    math={String.raw`
A=\{a\},\quad A=B
\quad\Rightarrow\quad
n(B)=1
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 부등식의 해집합이 한 점만 되도록
                                    두 근이 같아야 한다는 조건을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
-1=-b
\quad\Rightarrow\quad
b=1
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
                            두 집합{" "}
                            <InlineMath math="A=\{a,b,c\}" />,{" "}
                            <InlineMath math="B=\{ab,bc,ca\}" />에 대하여{" "}
                            <InlineMath math="A=B" />이고
                        </p>

                        <BlockMath
                            math={String.raw`
a+b+c=-3
`}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="a^3+b^3+c^3" />의 값을 구하시오.
                            (단, <InlineMath math="n(A)=3" />,{" "}
                            <InlineMath math="abc\ne0" />)
                        </p>

                    </div>


                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-5 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="A=B" />이고 두 집합의 원소가 각각
                                3개이므로 두 집합의 모든 원소의 합은 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
a+b+c=ab+bc+ca
`}
                            />

                            <p className="leading-8">
                                그런데 <InlineMath math="a+b+c=-3" />이므로
                            </p>

                            <BlockMath
                                math={String.raw`
ab+bc+ca=-3
`}
                            />


                            <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                                <p className="mb-4 font-bold text-white">
                                    모든 원소의 곱
                                </p>

                                <p className="leading-8">
                                    두 집합의 모든 원소의 곱도 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
abc=(ab)(bc)(ca)
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
abc=(abc)^2
`}
                                />

                                <p className="leading-8">
                                    <InlineMath math="abc\ne0" />이므로 양변을{" "}
                                    <InlineMath math="abc" />로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
abc=1
`}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>


                            <p className="leading-8">
                                세 수의 세제곱의 합에 관한 항등식
                            </p>

                            <BlockMath
                                math={String.raw`
a^3+b^3+c^3-3abc
=
(a+b+c)
\{(a+b+c)^2-3(ab+bc+ca)\}
`}
                            />

                            <p className="leading-8">
                                을 이용하면
                            </p>

                            <BlockMath
                                math={String.raw`
\begin{aligned}
a^3+b^3+c^3-3
&=(-3)\{(-3)^2-3(-3)\}\\
&=(-3)(18)\\
&=-54
\end{aligned}
`}
                            />

                            <p className="leading-8">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
a^3+b^3+c^3=-51
`}
                            />


                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
\boxed{-51}
`}
                                />

                            </div>


                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="mb-3 font-bold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <p className="leading-8 text-gray-300">
                                    두 집합이 같으면 두 집합의 원소가 같으므로
                                    모든 원소의 합과 곱도 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
A=B
`}
                                />

                                <BlockMath
                                    math={String.raw`
a+b+c=ab+bc+ca=-3
`}
                                />

                                <BlockMath
                                    math={String.raw`
abc=(ab)(bc)(ca)
\quad\Rightarrow\quad
abc=1
`}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 세 값을 이용하여 세제곱의 합을 구합니다.
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

                        <p>
                            • 두 집합이 같은 원소로 이루어져 있으면
                            두 집합은 서로 같은 집합이다.
                        </p>

                        <p>
                            • 집합은 원소를 나열한 순서를 고려하지 않는다.
                        </p>

                        <p>
                            • 두 집합이 같은지 확인하려면
                            두 방향의 포함관계를 확인한다.
                        </p>

                        <BlockMath
                            math={String.raw`
\boxed{
A=B
\quad\Longleftrightarrow\quad
A\subset B,\qquad B\subset A
}
`}
                        />

                    </div>

                </div>

            </section>
        </>
    )
};