"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { InlineMath, BlockMath } from "react-katex";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";



export default function MatrixPage() {
    return (
        <>
            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.1 행렬의 뜻과 크기와 성분
                </h2>

                <p className="mb-4 leading-8 text-gray-300">
                    여러 개의 수를 행과 열에 맞추어 직사각형 모양으로 배열하면
                    많은 정보를 간단하게 나타낼 수 있습니다.
                </p>

                <p className="mb-6 leading-8 text-gray-300">
                    행렬의 행과 열, 크기, 성분의 위치를 정확히 구별하는 것이
                    행렬을 공부하는 첫 단계입니다.
                </p>

                {/* 행렬의 뜻 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 행렬의 뜻
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            가로로 놓인 줄을 <span className="font-semibold text-white">행</span>,
                            세로로 놓인 줄을 <span className="font-semibold text-white">열</span>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            행과 열이 만나는 위치에 수를 배열하여 만든
                            직사각형 형태의 표를 <span className="font-semibold text-white">행렬</span>이라고 합니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            행렬은 주로 대문자{" "}
                            <InlineMath math="A,\ B,\ C,\ \cdots" />로 나타냅니다.
                        </p>

                    </div>

                </div>

                {/* 행렬의 크기 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 행렬의 크기
                    </h3>

                    <p className="leading-8 text-gray-300">
                        <InlineMath math="m" />개의 행과{" "}
                        <InlineMath math="n" />개의 열로 이루어진 행렬을{" "}
                        <InlineMath math="m\times n" /> 행렬이라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{행렬의 크기}
                    =
                    \text{행의 개수}
                    \times
                    \text{열의 개수}
                    }
                `}
                        />

                        <p className="mt-3 text-center leading-8 text-gray-300">
                            앞의 수는 행의 개수이고, 뒤의 수는 열의 개수입니다.
                        </p>

                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        {/* 행렬 A */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="3\times4" /> 행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        A=
                        \begin{pmatrix}
                        11&12&13&14\\
                        21&22&23&24\\
                        31&32&33&34
                        \end{pmatrix}
                    `}
                            />

                            <div className="mt-4 space-y-2 leading-8 text-gray-300">

                                <p>
                                    행의 개수:{" "}
                                    <InlineMath math="3" />
                                </p>

                                <p>
                                    열의 개수:{" "}
                                    <InlineMath math="4" />
                                </p>

                                <p>
                                    따라서 행렬 <InlineMath math="A" />의 크기는{" "}
                                    <InlineMath math="3\times4" />입니다.
                                </p>

                            </div>

                        </div>

                        {/* 행렬 B */}
                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="4\times3" /> 행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        B=
                        \begin{pmatrix}
                        11&12&13\\
                        21&22&23\\
                        31&32&33\\
                        41&42&43
                        \end{pmatrix}
                    `}
                            />

                            <div className="mt-4 space-y-2 leading-8 text-gray-300">

                                <p>
                                    행의 개수:{" "}
                                    <InlineMath math="4" />
                                </p>

                                <p>
                                    열의 개수:{" "}
                                    <InlineMath math="3" />
                                </p>

                                <p>
                                    따라서 행렬 <InlineMath math="B" />의 크기는{" "}
                                    <InlineMath math="4\times3" />입니다.
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            행과 열의 순서를 바꾸지 않습니다
                        </p>

                        <BlockMath
                            math={String.raw`
                    3\times4\ne4\times3
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            행의 개수와 열의 개수가 서로 바뀌면 행렬의 크기도 달라집니다.
                        </p>

                    </div>

                </div>

                {/* 행렬의 성분 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        3. 행렬의 성분
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬 안에 배열된 각각의 수를
                        <span className="font-semibold text-white"> 성분</span>이라고 합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        <InlineMath math="m\times n" /> 행렬에는 모두{" "}
                        <InlineMath math="mn" />개의 성분이 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="leading-8 text-gray-300">
                            행렬 <InlineMath math="A" />의{" "}
                            <InlineMath math="i" />번째 행과{" "}
                            <InlineMath math="j" />번째 열이 만나는 위치의 성분을
                            행렬 <InlineMath math="A" />의{" "}
                            <InlineMath math="(i,j)" />성분이라고 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A\text{의 }(i,j)\text{성분}=a_{ij}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            아래첨자의 첫 번째 수는 행 번호,
                            두 번째 수는 열 번호를 나타냅니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                        <p className="font-semibold text-blue-300">
                            행렬 <InlineMath math="A" />의 성분 찾기
                        </p>

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    11&12&13&14\\
                    21&22&23&24\\
                    31&32&33&34
                    \end{pmatrix}
                `}
                        />

                        <div className="mt-5 grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <BlockMath math="a_{23}=23" />

                                <p className="leading-7 text-gray-300">
                                    2행 3열의 성분
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <BlockMath math="a_{31}=31" />

                                <p className="leading-7 text-gray-300">
                                    3행 1열의 성분
                                </p>

                            </div>

                            <div className="rounded-xl bg-black/40 p-4 text-center">

                                <BlockMath math="a_{14}=14" />

                                <p className="leading-7 text-gray-300">
                                    1행 4열의 성분
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* 정사각행렬 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        4. 정사각행렬
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행의 개수와 열의 개수가 같은 행렬을
                        <span className="font-semibold text-white"> 정사각행렬</span>이라고 합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        <InlineMath math="n\times n" /> 정사각행렬을{" "}
                        <InlineMath math="n" />차 정사각행렬이라고 합니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                2차 정사각행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{pmatrix}
                        a&b\\
                        c&d
                        \end{pmatrix}
                    `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="2\times2" /> 행렬
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                3차 정사각행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        C=
                        \begin{pmatrix}
                        11&12&13\\
                        21&22&23\\
                        31&32&33
                        \end{pmatrix}
                    `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                <InlineMath math="3\times3" /> 행렬
                            </p>

                        </div>

                    </div>

                </div>

                {/* 주대각선 */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        5. 주대각선
                    </h3>

                    <p className="leading-8 text-gray-300">
                        정사각행렬에서 행 번호와 열 번호가 같은 성분이 놓인 대각선을
                        <span className="font-semibold text-white"> 주대각선</span>이라고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    C=
                    \begin{pmatrix}
                    \boxed{11}&12&13\\
                    21&\boxed{22}&23\\
                    31&32&\boxed{33}
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    c_{11},\quad c_{22},\quad c_{33}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            행 번호와 열 번호가 같은 성분{" "}
                            <InlineMath math="11,\ 22,\ 33" />이 주대각선 위에 있습니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{\text{주대각선 위의 성분은 }i=j}
                `}
                        />

                    </div>

                </div>

                {/* 조건을 만족하는 행렬 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        6. 조건을 만족하는 행렬
                    </h3>

                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            3차 정사각행렬 <InlineMath math="A" />의{" "}
                            <InlineMath math="(i,j)" />성분{" "}
                            <InlineMath math="a_{ij}" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                    a_{ij}=
                    \begin{cases}
                    i+j & (i\ge j),\\
                    ij & (i<j)
                    \end{cases}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 정의될 때, 행렬 <InlineMath math="A" />를 구하여라.
                        </p>

                    </div>

                    <div className="mt-5 space-y-7 text-gray-300">

                        <p className="leading-8">
                            3차 정사각행렬이므로 행 번호와 열 번호는 각각{" "}
                            <InlineMath math="1,\ 2,\ 3" />입니다.
                        </p>

                        <p className="leading-8">
                            각 성분의 위치에서 행 번호{" "}
                            <InlineMath math="i" />와 열 번호{" "}
                            <InlineMath math="j" />를 비교합니다.
                        </p>

                        <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                            <table className="w-full min-w-[620px] border-collapse text-center">

                                <thead>

                                    <tr className="border-b border-white/15">

                                        <th className="p-3 text-white">
                                            위치
                                        </th>

                                        <th className="p-3 text-white">
                                            1열
                                        </th>

                                        <th className="p-3 text-white">
                                            2열
                                        </th>

                                        <th className="p-3 text-white">
                                            3열
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    <tr className="border-b border-white/10">

                                        <td className="p-3 font-semibold text-white">
                                            1행
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i<j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i<j" />
                                        </td>

                                    </tr>

                                    <tr className="border-b border-white/10">

                                        <td className="p-3 font-semibold text-white">
                                            2행
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i<j" />
                                        </td>

                                    </tr>

                                    <tr>

                                        <td className="p-3 font-semibold text-white">
                                            3행
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                        <td className="p-3">
                                            <InlineMath math="i\ge j" />
                                        </td>

                                    </tr>

                                </tbody>

                            </table>

                        </div>

                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                주대각선을 기준으로 식을 선택합니다
                            </p>

                            <div className="mt-4 space-y-2 leading-8 text-gray-300">

                                <p>
                                    주대각선과 그 아래에서는{" "}
                                    <InlineMath math="i\ge j" />이므로{" "}
                                    <InlineMath math="i+j" />를 사용합니다.
                                </p>

                                <p>
                                    주대각선 위에서는{" "}
                                    <InlineMath math="i<j" />이므로{" "}
                                    <InlineMath math="ij" />를 사용합니다.
                                </p>

                            </div>

                        </div>

                        <BlockMath
                            math={String.raw`
                        \begin{aligned}
                        a_{11}&=1+1=2,
                        &
                        a_{12}&=1\times2=2,
                        &
                        a_{13}&=1\times3=3,
                        \\[4pt]
                        a_{21}&=2+1=3,
                        &
                        a_{22}&=2+2=4,
                        &
                        a_{23}&=2\times3=6,
                        \\[4pt]
                        a_{31}&=3+1=4,
                        &
                        a_{32}&=3+2=5,
                        &
                        a_{33}&=3+3=6
                        \end{aligned}
                    `}
                        />

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                            A=
                            \begin{pmatrix}
                            2&2&3\\
                            3&4&6\\
                            4&5&6
                            \end{pmatrix}
                        `}
                            />

                        </div>

                        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-semibold text-red-300">
                                주의
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                주대각선에서는{" "}
                                <InlineMath math="i=j" />이므로{" "}
                                <InlineMath math="i\ge j" />에 해당합니다.
                                따라서 주대각선의 성분에는 첫 번째 식{" "}
                                <InlineMath math="i+j" />를 사용합니다.
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                5&-4&3\\
                5&3&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 <InlineMath math="(i,j)" />성분이{" "}
                            <InlineMath math="a_{ij}" />일 때, 다음 중 옳은 것을 고르시오.
                        </p>

                        <div className="mt-5 space-y-3 rounded-xl border border-white/15 bg-black/40 p-5 text-gray-300">

                            <p className="leading-8">
                                ① 행렬 <InlineMath math="A" />는{" "}
                                <InlineMath math="3\times2" /> 행렬이다.
                            </p>

                            <p className="leading-8">
                                ② <InlineMath math="a_{12}+a_{21}=2" />
                            </p>

                            <p className="leading-8">
                                ③ <InlineMath math="(1,3)" />성분과{" "}
                                <InlineMath math="(2,1)" />성분은 같다.
                            </p>

                            <p className="leading-8">
                                ④ 제2행의 모든 성분의 합은{" "}
                                <InlineMath math="9" />이다.
                            </p>

                            <p className="leading-8">
                                ⑤ 행렬 <InlineMath math="A" />는
                                2차 정사각행렬이다.
                            </p>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            {/* ① */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    ① 행렬 <InlineMath math="A" />는{" "}
                                    <InlineMath math="3\times2" /> 행렬이다.
                                </p>

                                <p className="mt-3 leading-8">
                                    행렬 <InlineMath math="A" />는 행이{" "}
                                    <InlineMath math="2" />개이고 열이{" "}
                                    <InlineMath math="3" />개입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A\text{는 }2\times3\text{ 행렬}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ①은 옳지 않습니다.
                                </p>

                            </div>

                            {/* ② */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    ② <InlineMath math="a_{12}+a_{21}=2" />
                                </p>

                                <p className="mt-3 leading-8">
                                    <InlineMath math="a_{12}" />는 1행 2열의 성분이고,{" "}
                                    <InlineMath math="a_{21}" />은 2행 1열의 성분입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a_{12}=-4,\qquad a_{21}=5
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a_{12}+a_{21}
                        =
                        -4+5
                        =
                        1
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ②는 옳지 않습니다.
                                </p>

                            </div>

                            {/* ③ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    ③ <InlineMath math="(1,3)" />성분과{" "}
                                    <InlineMath math="(2,1)" />성분은 같다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a_{13}=3,\qquad a_{21}=5
                    `}
                                />

                                <p className="leading-8">
                                    두 성분은 서로 다르므로 ③은 옳지 않습니다.
                                </p>

                            </div>

                            {/* ④ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-semibold text-green-300">
                                    ④ 제2행의 모든 성분의 합은{" "}
                                    <InlineMath math="9" />이다.
                                </p>

                                <p className="mt-3 leading-8">
                                    제2행의 성분은{" "}
                                    <InlineMath math="5,\ 3,\ 1" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        5+3+1=9
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ④는 옳습니다.
                                </p>

                            </div>

                            {/* ⑤ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    ⑤ 행렬 <InlineMath math="A" />는
                                    2차 정사각행렬이다.
                                </p>

                                <p className="mt-3 leading-8">
                                    정사각행렬은 행의 개수와 열의 개수가 같아야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2\ne3
                    `}
                                />

                                <p className="leading-8">
                                    따라서 행렬 <InlineMath math="A" />는 정사각행렬이 아니므로
                                    ⑤는 옳지 않습니다.
                                </p>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    풀이의 핵심
                                </p>

                                <div className="mt-3 space-y-2 leading-8 text-gray-300">

                                    <p>
                                        행렬의 크기는{" "}
                                        <InlineMath math="\text{행의 개수}\times\text{열의 개수}" />의
                                        순서로 나타냅니다.
                                    </p>

                                    <p>
                                        <InlineMath math="a_{ij}" />에서 첫 번째 아래첨자{" "}
                                        <InlineMath math="i" />는 행 번호,
                                        두 번째 아래첨자 <InlineMath math="j" />는 열 번호입니다.
                                    </p>

                                </div>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 옳은 것은
                                </p>

                                <BlockMath math="{④}" />

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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.45fr_0.55fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    오른쪽 그림은 세 도시{" "}
                                    <InlineMath math="P_1,\ P_2,\ P_3" /> 사이의 통신망을
                                    나타낸 것이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    두 도시 <InlineMath math="P_i,\ P_j" /> 사이에 직접 연결된
                                    통신망의 수를 행렬 <InlineMath math="A" />의{" "}
                                    <InlineMath math="(i,j)" />성분{" "}
                                    <InlineMath math="a_{ij}" />라고 할 때,
                                    행렬 <InlineMath math="A" />를 구하여라.
                                </p>

                                <p className="mt-3 leading-8 text-gray-400">
                                    단, <InlineMath math="i,\ j=1,\ 2,\ 3" />이다.
                                </p>

                            </div>

                            <img
                                src="/images/5.1_2.png"
                                alt="세 도시 P1, P2, P3 사이의 통신망"
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

                            <p className="leading-8">
                                행렬 <InlineMath math="A" />의{" "}
                                <InlineMath math="(i,j)" />성분은 두 도시{" "}
                                <InlineMath math="P_i" />와{" "}
                                <InlineMath math="P_j" /> 사이에 직접 연결된 통신망의 수입니다.
                            </p>

                            {/* 각 성분 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="text-lg font-bold text-blue-300">
                                    도시 사이의 통신망 수
                                </h4>

                                <div className="mt-5 overflow-x-auto">

                                    <table className="w-full min-w-[620px] border-collapse text-center text-gray-300">

                                        <thead>

                                            <tr className="border-b border-white/15">

                                                <th className="p-3 font-semibold text-white">
                                                    두 도시
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    통신망의 수
                                                </th>

                                                <th className="p-3 font-semibold text-white">
                                                    행렬의 성분
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="P_1,\ P_2" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="a_{12}=a_{21}=3" />
                                                </td>

                                            </tr>

                                            <tr className="border-b border-white/10">

                                                <td className="p-3">
                                                    <InlineMath math="P_1,\ P_3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="a_{13}=a_{31}=2" />
                                                </td>

                                            </tr>

                                            <tr>

                                                <td className="p-3">
                                                    <InlineMath math="P_2,\ P_3" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="2" />
                                                </td>

                                                <td className="p-3">
                                                    <InlineMath math="a_{23}=a_{32}=2" />
                                                </td>

                                            </tr>

                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 대각성분 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    주대각선 위의 성분
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    같은 도시를 서로 연결하는 통신망은 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a_{11}=a_{22}=a_{33}=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 성분 배치 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    각 성분을 행렬에 배열하기
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        a_{11}&a_{12}&a_{13}\\
                        a_{21}&a_{22}&a_{23}\\
                        a_{31}&a_{32}&a_{33}
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        0&3&2\\
                        3&0&2\\
                        2&2&0
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 대칭 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    행렬의 대칭
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    도시 <InlineMath math="P_i" />에서{" "}
                                    <InlineMath math="P_j" />로 연결된 통신망의 수와
                                    도시 <InlineMath math="P_j" />에서{" "}
                                    <InlineMath math="P_i" />로 연결된 통신망의 수는 같습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a_{ij}=a_{ji}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 주대각선을 기준으로 마주 보는 성분의 값이 같습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 행렬 <InlineMath math="A" />는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A=
                        \begin{pmatrix}
                        0&3&2\\
                        3&0&2\\
                        2&2&0
                        \end{pmatrix}
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
                            행렬 <InlineMath math="A" />의{" "}
                            <InlineMath math="(i,j)" />성분{" "}
                            <InlineMath math="a_{ij}" />를
                        </p>

                        <BlockMath
                            math={String.raw`
                a_{ij}=(-3)^{\,i+j}+kj
                \qquad
                (i=1,2,\;j=1,2)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 정의하자.
                            행렬 <InlineMath math="A" />의 모든 성분의 합이{" "}
                            <InlineMath math="66" />일 때,
                            실수 <InlineMath math="k" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                <InlineMath math="i=1,2,\;j=1,2" />이므로
                                행렬 <InlineMath math="A" />는{" "}
                                <InlineMath math="2\times2" /> 행렬입니다.
                            </p>

                            {/* 성분 구하기 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    각 성분을 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a_{11}
                        &=(-3)^2+k
                        =9+k,
                        \\[4pt]
                        a_{12}
                        &=(-3)^3+2k
                        =-27+2k,
                        \\[4pt]
                        a_{21}
                        &=(-3)^3+k
                        =-27+k,
                        \\[4pt]
                        a_{22}
                        &=(-3)^4+2k
                        =81+2k
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 행렬 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    행렬을 쓰면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        9+k & -27+2k\\
                        -27+k & 81+2k
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 합 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    모든 성분의 합은 66입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (9+k)+(-27+2k)+(-27+k)+(81+2k)=66
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        36+6k=66
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        6k=30
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        k=5
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
                        \boxed{k=5}
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
                            <InlineMath math="2\times3" /> 행렬
                            <InlineMath math="A" />의{" "}
                            <InlineMath math="(i,j)" />성분{" "}
                            <InlineMath math="a_{ij}" />를
                        </p>

                        <BlockMath
                            math={String.raw`
                a_{ij}
                =
                \left(
                \text{다항식 }
                x^2-2x+ij
                \text{를 }
                x-i
                \text{로 나눈 나머지}
                \right)
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            라고 정의하자.
                            행렬 <InlineMath math="A" />의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                나머지정리에 의해
                                다항식{" "}
                                <InlineMath math="x^2-2x+ij" />를{" "}
                                <InlineMath math="x-i" />로 나눈 나머지는{" "}
                                <InlineMath math="x=i" />를 대입한 값과 같습니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                    a_{ij}
                    =
                    i^2-2i+ij
                `}
                            />

                            {/* 성분 계산 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    각 성분을 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a_{11}&=1-2+1=0,\\
                        a_{12}&=1-2+2=1,\\
                        a_{13}&=1-2+3=2,\\[4pt]
                        a_{21}&=4-4+2=2,\\
                        a_{22}&=4-4+4=4,\\
                        a_{23}&=4-4+6=6
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 행렬 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        0&1&2\\
                        2&4&6
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 합 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    모든 성분의 합
                                </p>

                                <BlockMath
                                    math={String.raw`
                        0+1+2+2+4+6=15
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
                        \boxed{15}
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

                        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.45fr_0.55fr]">

                            <div>

                                <p className="leading-8 text-gray-300">
                                    그림은 지하철 노선도의 일부를 나타낸 것이다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 지하철 노선도를 나타내는 행렬{" "}
                                    <InlineMath math="A" />의{" "}
                                    <InlineMath math="(i,j)" />성분{" "}
                                    <InlineMath math="a_{ij}" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a_{ij}=
                        \begin{cases}
                        1 & (i\text{에서 한 번에 }j\text{로 이동할 수 있을 때})\\
                        0 & (i\text{에서 한 번에 }j\text{로 이동할 수 없을 때})
                        \end{cases}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 정의할 때,
                                    행렬
                                    <InlineMath math="A=(a_{ij})" />{" "}
                                    <InlineMath math="(i,j=1,2,3,4)" />의
                                    2행과 3행의 모든 성분의 합을 구하여라.
                                </p>

                                <p className="mt-3 text-gray-400">
                                    (단, <InlineMath math="i=j" />이면{" "}
                                    <InlineMath math="a_{ij}=0" />)
                                </p>

                            </div>

                            <img
                                src="/images/5.1_5.png"
                                alt="지하철 노선도"
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

                            <p className="leading-8">
                                한 번에 이동할 수 있으면{" "}
                                <InlineMath math="1" />,
                                이동할 수 없으면{" "}
                                <InlineMath math="0" />을 적습니다.
                            </p>

                            {/* 행렬 작성 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    각 역의 연결 관계
                                </p>

                                <ul className="mt-3 list-disc space-y-2 pl-6 leading-8 text-gray-300">

                                    <li>
                                        여의도(1) ↔ 신길(2)
                                    </li>

                                    <li>
                                        여의도(1) ↔ 생강(4)
                                    </li>

                                    <li>
                                        신길(2) ↔ 대방(3)
                                    </li>

                                    <li>
                                        대방(3) ↔ 생강(4)
                                    </li>

                                </ul>

                            </div>

                            {/* 행렬 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    따라서 행렬은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        0&1&0&1\\
                        1&0&1&0\\
                        0&1&0&1\\
                        1&0&1&0
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    2행과 3행의 성분의 합
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (1+0+1+0)+(0+1+0+1)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =2+2=4
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
                        \boxed{4}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    \text{행렬의 크기}
                    &=
                    \text{행의 개수}\times\text{열의 개수},
                    \\[4pt]
                    A\text{의 }(i,j)\text{성분}
                    &=a_{ij},
                    \\[4pt]
                    m\times n\text{ 행렬의 성분 수}
                    &=mn
                    \end{aligned}
                `}
                        />

                        <hr className="my-5 border-white/10" />

                        <p className="text-center leading-8 text-gray-300">
                            행의 개수와 열의 개수가 같은 행렬은 정사각행렬이고,
                            정사각행렬에서 행 번호와 열 번호가 같은 성분이 놓인 대각선은
                            주대각선입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{성분의 위치는 항상 }
                    \text{행 번호}\rightarrow\text{열 번호}
                    \text{의 순서로 읽는다}
                    }
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.2 행렬의 상등
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    두 행렬이 서로 같으려면 행렬의 크기가 같고,
                    대응하는 위치의 모든 성분이 각각 같아야 합니다.
                </p>

                {/* 행렬의 상등 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 행렬의 상등
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 행렬의 행의 개수와 열의 개수가 같고,
                        대응하는 위치에 있는 모든 성분이 같을 때
                        두 행렬은 서로 같다고 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    A=B
                `}
                        />

                        <p className="mt-3 text-center leading-8 text-gray-300">
                            두 행렬의 크기가 같고 대응하는 모든 성분이 같습니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            행렬이 같기 위한 두 조건
                        </p>

                        <div className="mt-3 space-y-2 leading-8 text-gray-300">

                            <p>
                                ① 두 행렬의 행의 개수와 열의 개수가 각각 같다.
                            </p>

                            <p>
                                ② 대응하는 위치의 모든 성분이 각각 같다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* 이차정사각행렬의 상등 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 이차정사각행렬의 상등
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 이차정사각행렬{" "}
                        <InlineMath math="A" />와{" "}
                        <InlineMath math="B" />를
                    </p>

                    <BlockMath
                        math={String.raw`
                A=
                \begin{pmatrix}
                a_{11}&a_{12}\\
                a_{21}&a_{22}
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                b_{11}&b_{12}\\
                b_{21}&b_{22}
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        라고 하면,{" "}
                        <InlineMath math="A=B" />이기 위한 조건은
                    </p>

                    <BlockMath
                        math={String.raw`
                a_{11}=b_{11},\qquad
                a_{12}=b_{12},\qquad
                a_{21}=b_{21},\qquad
                a_{22}=b_{22}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    p&q\\
                    r&s
                    \end{pmatrix}
            `}
                        />

                        <BlockMath
                            math={String.raw`
                    \Longleftrightarrow
                    \quad
                    a=p,\quad b=q,\quad c=r,\quad d=s
                `}
                        />

                    </div>

                </div>

                {/* 예시 문제 */}
                <div className="mt-8 rounded-xl bg-black/40 p-5">

                    <h3 className="mb-4 text-2xl font-bold text-white">
                        예시
                    </h3>

                    {/* 문제 */}
                    <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                        <p className="leading-8 text-gray-300">
                            다음 등식이 성립하도록 하는 상수{" "}
                            <InlineMath math="a,\ b,\ c,\ d" />의 값을 구하여라.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    a+b&a-b\\
                    -4&1
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    5&-1\\
                    2c&c-d
                    \end{pmatrix}
                `}
                        />

                    </div>

                    {/* 풀이 */}

                    <div className="mt-5 space-y-7 text-gray-300">

                        <p className="leading-8">
                            두 행렬이 서로 같으므로 대응하는 위치의 성분이 각각 같습니다.
                        </p>

                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                대응하는 성분끼리 비교
                            </p>

                            <BlockMath
                                math={String.raw`
                            \begin{aligned}
                            a+b&=5,\\
                            a-b&=-1,\\
                            -4&=2c,\\
                            1&=c-d
                            \end{aligned}
                        `}
                            />

                        </div>

                        {/* a, b */}
                        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="font-semibold text-purple-300">
                                <InlineMath math="a,\ b" />의 값
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                첫째 식과 둘째 식을 더하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            (a+b)+(a-b)=5+(-1)
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            2a=4
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            a=2
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이를 <InlineMath math="a+b=5" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            2+b=5
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            b=3
                        `}
                            />

                        </div>

                        {/* c, d */}
                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                <InlineMath math="c,\ d" />의 값
                            </p>

                            <BlockMath
                                math={String.raw`
                            -4=2c
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            c=-2
                        `}
                            />

                            <p className="leading-8 text-gray-300">
                                이를 <InlineMath math="1=c-d" />에 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                            1=-2-d
                        `}
                            />

                            <BlockMath
                                math={String.raw`
                            d=-3
                        `}
                            />

                        </div>

                        {/* 대응 위치 확인 */}
                        <div className="rounded-xl border border-white/10 bg-white/5 p-5">

                            <p className="font-semibold text-white">
                                성분의 대응 위치
                            </p>

                            <div className="mt-5 overflow-x-auto">

                                <table className="w-full min-w-[620px] border-collapse text-center text-gray-300">

                                    <thead>

                                        <tr className="border-b border-white/15">

                                            <th className="p-3 font-semibold text-white">
                                                위치
                                            </th>

                                            <th className="p-3 font-semibold text-white">
                                                왼쪽 행렬
                                            </th>

                                            <th className="p-3 font-semibold text-white">
                                                오른쪽 행렬
                                            </th>

                                            <th className="p-3 font-semibold text-white">
                                                등식
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody>

                                        <tr className="border-b border-white/10">

                                            <td className="p-3">
                                                <InlineMath math="(1,1)" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="a+b" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="5" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="a+b=5" />
                                            </td>

                                        </tr>

                                        <tr className="border-b border-white/10">

                                            <td className="p-3">
                                                <InlineMath math="(1,2)" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="a-b" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="-1" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="a-b=-1" />
                                            </td>

                                        </tr>

                                        <tr className="border-b border-white/10">

                                            <td className="p-3">
                                                <InlineMath math="(2,1)" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="-4" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="2c" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="-4=2c" />
                                            </td>

                                        </tr>

                                        <tr>

                                            <td className="p-3">
                                                <InlineMath math="(2,2)" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="1" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="c-d" />
                                            </td>

                                            <td className="p-3">
                                                <InlineMath math="1=c-d" />
                                            </td>

                                        </tr>

                                    </tbody>

                                </table>

                            </div>

                        </div>

                        {/* 정답 */}
                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="font-bold text-green-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                            \boxed{
                            a=2,\qquad
                            b=3,\qquad
                            c=-2,\qquad
                            d=-3
                            }
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

                    <div className="space-y-3 leading-8 text-gray-300">

                        <p>
                            두 행렬의 성분의 개수만 같다고 해서 같은 행렬인 것은 아닙니다.
                        </p>

                        <p>
                            행의 개수와 열의 개수가 각각 같아야 하며,
                            같은 위치에 있는 성분끼리 비교해야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    2\times3\text{ 행렬}
                    \ne
                    3\times2\text{ 행렬}
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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                xy&2\\
                5&x+y
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                4&2\\
                5&-3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A=B" />가 성립할 때,{" "}
                            <InlineMath math="x^3+y^3" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="x,\ y" />는 실수이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                두 행렬이 서로 같으므로 대응하는 위치의 성분이 각각 같습니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    대응하는 성분 비교
                                </p>

                                <BlockMath
                                    math={String.raw`
                        xy=4,\qquad x+y=-3
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                <InlineMath math="x^3+y^3" />은 다음 항등식을 이용하여 구합니다.
                            </p>

                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <BlockMath
                                    math={String.raw`
                        x^3+y^3
                        =
                        (x+y)^3-3xy(x+y)
                    `}
                                />

                            </div>

                            <p className="leading-8">
                                <InlineMath math="x+y=-3" />,{" "}
                                <InlineMath math="xy=4" />를 대입하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    \begin{aligned}
                    x^3+y^3
                    &=
                    (-3)^3-3\cdot4\cdot(-3)\\
                    &=-27+36\\
                    &=9
                    \end{aligned}
                `}
                            />

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    행렬의 상등으로부터{" "}
                                    <InlineMath math="x+y" />와{" "}
                                    <InlineMath math="xy" />의 값을 얻은 뒤,
                                    세제곱의 합을 변형합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        x^3+y^3=(x+y)^3-3xy(x+y)
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{9}" />

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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                x^2+5\\
                -3
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                6x\\
                y^2-4y
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 <InlineMath math="A=B" />일 때,
                            실수 <InlineMath math="x,\ y" />의 순서쌍{" "}
                            <InlineMath math="(x,y)" />를 모두 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                두 행렬이 서로 같으므로 대응하는 위치의 성분이 각각 같습니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    대응하는 성분 비교
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^2+5=6x,\qquad
                        -3=y^2-4y
                    `}
                                />

                            </div>

                            {/* x 구하기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    <InlineMath math="x" />의 값
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^2+5=6x
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x^2-6x+5=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (x-1)(x-5)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        x=1\quad\text{또는}\quad x=5
                    `}
                                />

                            </div>

                            {/* y 구하기 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    <InlineMath math="y" />의 값
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -3=y^2-4y
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y^2-4y+3=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (y-1)(y-3)=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        y=1\quad\text{또는}\quad y=3
                    `}
                                />

                            </div>

                            {/* 순서쌍 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    가능한 순서쌍
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="x" />는{" "}
                                    <InlineMath math="1,\ 5" /> 중 하나이고,{" "}
                                    <InlineMath math="y" />는{" "}
                                    <InlineMath math="1,\ 3" /> 중 하나이므로
                                    각각의 값을 서로 조합합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (x,y)
                        =
                        (1,1),\ (1,3),\ (5,1),\ (5,3)
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    주의
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    <InlineMath math="x" />와{" "}
                                    <InlineMath math="y" />가 각각 두 개의 값을 가지므로
                                    가능한 순서쌍은 모두{" "}
                                    <InlineMath math="2\times2=4" />개입니다.
                                    한 쌍씩만 연결하여 두 개의 순서쌍만 쓰면 안 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (x,y)
                        =
                        (1,1),\ (1,3),\ (5,1),\ (5,3)
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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                \sqrt{3}&5\\
                3\sqrt{3}&x
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                a+b+c&a^2+b^2+c^2\\
                a^3+b^3+c^3&abc
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 <InlineMath math="A=B" />를 만족시킬 때,{" "}
                            <InlineMath math="x" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="a,\ b,\ c" />는 상수이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-7 text-gray-300">

                            <p className="leading-8">
                                두 행렬이 서로 같으므로 대응하는 위치의 성분이 각각 같습니다.
                            </p>

                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    대응하는 성분 비교
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a+b+c&=\sqrt{3},\\
                        a^2+b^2+c^2&=5,\\
                        a^3+b^3+c^3&=3\sqrt{3},\\
                        abc&=x
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* ab+bc+ca */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <p className="font-semibold text-purple-300">
                                    <InlineMath math="ab+bc+ca" />의 값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    다음 항등식을 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (a+b+c)^2
                        =
                        a^2+b^2+c^2+2(ab+bc+ca)
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    주어진 값을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (\sqrt{3})^2
                        =
                        5+2(ab+bc+ca)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3=5+2(ab+bc+ca)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        ab+bc+ca=-1
                    `}
                                />

                            </div>

                            {/* abc */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-semibold text-yellow-300">
                                    <InlineMath math="abc" />의 값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    세 수의 세제곱의 합에 관한 항등식
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a^3+b^3+c^3-3abc
                        =
                        (a+b+c)
                        \left\{
                        a^2+b^2+c^2-ab-bc-ca
                        \right\}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    에 주어진 값을 대입합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3\sqrt{3}-3abc
                        =
                        \sqrt{3}
                        \left\{
                        5-(-1)
                        \right\}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3\sqrt{3}-3abc
                        =
                        6\sqrt{3}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -3abc=3\sqrt{3}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        abc=-\sqrt{3}
                    `}
                                />

                            </div>

                            {/* x */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <p className="font-semibold text-blue-300">
                                    <InlineMath math="x" />의 값
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    행렬의 <InlineMath math="(2,2)" />성분을 비교하면{" "}
                                    <InlineMath math="x=abc" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=-\sqrt{3}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    풀이의 핵심
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    행렬의 상등으로부터 얻은{" "}
                                    <InlineMath math="a+b+c" />,{" "}
                                    <InlineMath math="a^2+b^2+c^2" />,{" "}
                                    <InlineMath math="a^3+b^3+c^3" />의 값을 이용하여{" "}
                                    <InlineMath math="abc" />를 구합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        a^3+b^3+c^3-3abc
                        =
                        (a+b+c)
                        (a^2+b^2+c^2-ab-bc-ca)
                        }
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
                        \boxed{x=-\sqrt{3}}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{gathered}
                    \text{두 행렬의 크기가 같고}\\
                    \text{대응하는 모든 성분이 같으면}\\
                    A=B
                    \end{gathered}
                    }
                `}
                        />

                        <p className="mt-5 text-center leading-8 text-gray-300">
                            행렬의 상등에서는 같은 위치에 있는 성분끼리 비교합니다.
                        </p>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.3 행렬의 덧셈과 뺄셈과 실수배
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    행렬의 덧셈과 뺄셈은 같은 위치의 성분끼리 계산합니다.
                    또한 실수배는 모든 성분에 같은 수를 곱합니다.
                </p>

                {/* 덧셈 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 행렬의 덧셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        크기가 같은 두 행렬만 더할 수 있으며,
                        같은 위치의 성분끼리 더합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
            \begin{pmatrix}
            a&b\\
            c&d
            \end{pmatrix}
            +
            \begin{pmatrix}
            e&f\\
            g&h
            \end{pmatrix}
            =
            \begin{pmatrix}
            a+e&b+f\\
            c+g&d+h
            \end{pmatrix}
        `}
                    />

                </div>

                {/* 뺄셈 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 행렬의 뺄셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        크기가 같은 두 행렬만 뺄 수 있으며,
                        같은 위치의 성분끼리 뺍니다.
                    </p>

                    <BlockMath
                        math={String.raw`
            \begin{pmatrix}
            a&b\\
            c&d
            \end{pmatrix}
            -
            \begin{pmatrix}
            e&f\\
            g&h
            \end{pmatrix}
            =
            \begin{pmatrix}
            a-e&b-f\\
            c-g&d-h
            \end{pmatrix}
        `}
                    />

                </div>

                {/* 실수배 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        3. 행렬의 실수배
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬의 모든 성분에 같은 실수를 곱합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
            k
            \begin{pmatrix}
            a&b\\
            c&d
            \end{pmatrix}
            =
            \begin{pmatrix}
            ka&kb\\
            kc&kd
            \end{pmatrix}
        `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                A+A=2A
            `}
                        />

                        <BlockMath
                            math={String.raw`
                A+A+A=3A
            `}
                        />

                        <BlockMath
                            math={String.raw`
                (-1)A=-A
            `}
                        />

                    </div>

                </div>

                {/* 영행렬 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        4. 영행렬
                    </h3>

                    <p className="leading-8 text-gray-300">
                        모든 성분이 0인 행렬을{" "}
                        <strong>영행렬</strong>이라 하고{" "}
                        <InlineMath math="O" />로 나타냅니다.
                    </p>

                    <BlockMath
                        math={String.raw`
            O=
            \begin{pmatrix}
            0&0\\
            0&0
            \end{pmatrix}
        `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath math="A+O=A" />

                        <BlockMath math="A-A=O" />

                        <BlockMath math="O-A=-A" />

                    </div>

                </div>

                {/* 계산 요령 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        계산 요령
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬의 덧셈, 뺄셈, 실수배 문제에서는
                        <strong>구하려는 대상부터 확인</strong>하는 것이 좋습니다.
                    </p>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                (1) 특정 성분을 구하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                (2,1)성분을 구하는 문제라면
                                (2,1)성분만 계산하면 됩니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                (2) 모든 성분의 합을 구하는 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                행렬 전체를 구하지 않아도
                                성분의 합만 계산하면 됩니다.
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                예시
                            </p>

                            <BlockMath
                                math={String.raw`
                    A-2B=
                    \begin{pmatrix}
                    \cdots&\cdots\\
                    0&\cdots
                    \end{pmatrix},
                    \qquad
                    3A+B=
                    \begin{pmatrix}
                    \cdots&\cdots\\
                    7&\cdots
                    \end{pmatrix}
                    `}
                            />

                            <p className="mt-3 leading-8 text-gray-300">
                                (2,1)성분을 구하는 문제라면
                                0과 7만 이용하여 계산하면 됩니다.
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
                            세 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                5&0\\
                -1&3
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                2&3\\
                4&-6
                \end{pmatrix},
                \qquad
                C=
                \begin{pmatrix}
                1&-4\\
                -3&5
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 다음을 구하여라.
                        </p>

                        <BlockMath
                            math={String.raw`
                \begin{aligned}
                (1)\;&A-B+C\\
                (2)\;&2C-B-A\\
                (3)\;&2(A+2C)+3(B-A)
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
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-3 font-semibold text-blue-300">
                                    (1) <InlineMath math="A-B+C" />
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        A-B=
                        \begin{pmatrix}
                        5-2&0-3\\
                        -1-4&3-(-6)
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        3&-3\\
                        -5&9
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A-B+C=
                        \begin{pmatrix}
                        3&-3\\
                        -5&9
                        \end{pmatrix}
                        +
                        \begin{pmatrix}
                        1&-4\\
                        -3&5
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        4&-7\\
                        -8&14
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* (2) */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-3 font-semibold text-purple-300">
                                    (2) <InlineMath math="2C-B-A" />
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        2C=
                        \begin{pmatrix}
                        2&-8\\
                        -6&10
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2C-B=
                        \begin{pmatrix}
                        0&-11\\
                        -10&16
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2C-B-A=
                        \begin{pmatrix}
                        -5&-11\\
                        -9&13
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* (3) */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 font-semibold text-yellow-300">
                                    (3) <InlineMath math="2(A+2C)+3(B-A)" />
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        A+2C=
                        \begin{pmatrix}
                        7&-8\\
                        -7&13
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2(A+2C)=
                        \begin{pmatrix}
                        14&-16\\
                        -14&26
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        B-A=
                        \begin{pmatrix}
                        -3&3\\
                        5&-9
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3(B-A)=
                        \begin{pmatrix}
                        -9&9\\
                        15&-27
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2(A+2C)+3(B-A)
                        =
                        \begin{pmatrix}
                        5&-7\\
                        1&-1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 계산 팁 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <p className="font-semibold text-red-300">
                                    계산 팁
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    여러 행렬이 있는 계산에서는 먼저{" "}
                                    <InlineMath math="2C" />,{" "}
                                    <InlineMath math="3(B-A)" />와 같이
                                    괄호 안이나 실수배를 먼저 계산하면 실수를 줄일 수 있습니다.
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
                        (1)\;&
                        \begin{pmatrix}
                        4&-7\\
                        -8&14
                        \end{pmatrix}
                        \\[8pt]
                        (2)\;&
                        \begin{pmatrix}
                        -5&-11\\
                        -9&13
                        \end{pmatrix}
                        \\[8pt]
                        (3)\;&
                        \begin{pmatrix}
                        5&-7\\
                        1&-1
                        \end{pmatrix}
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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
            A=
            \begin{pmatrix}
            -1&-2&7\\
            -5&2&3
            \end{pmatrix},
            \qquad
            B=
            \begin{pmatrix}
            2&1&1\\
            1&2&3
            \end{pmatrix}
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
            \frac13(A+2B)=\frac12(A-X)
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 행렬{" "}
                            <InlineMath math="X" />
                            의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 풀이1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    풀이 1. 행렬을 직접 구하는 방법
                                </h4>

                                <p className="leading-8">
                                    양변에 6을 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2(A+2B)=3(A-X)
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    2A+4B=3A-3X
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    3X=A-4B
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    X=\frac13(A-4B)
                `}
                                />

                                <p className="leading-8">
                                    먼저
                                </p>

                                <BlockMath
                                    math={String.raw`
                    4B=
                    \begin{pmatrix}
                    8&4&4\\
                    4&8&12
                    \end{pmatrix}
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    A-4B=
                    \begin{pmatrix}
                    -9&-6&3\\
                    -9&-6&-9
                    \end{pmatrix}
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    X=
                    \begin{pmatrix}
                    -3&-2&1\\
                    -3&-2&-3
                    \end{pmatrix}
                `}
                                />

                                <p className="leading-8">
                                    따라서 모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -3-2+1-3-2-3=-12
                `}
                                />

                            </div>

                            {/* 풀이2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    풀이 2. 성분의 합만 이용하는 방법
                                </h4>

                                <p className="leading-8">
                                    구하려는 것은{" "}
                                    <strong>행렬 전체가 아니라 모든 성분의 합</strong>입니다.
                                    따라서 각 행렬의 성분의 합만 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    A의\ 성분의\ 합
                    =
                    -1-2+7-5+2+3
                    =4
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    B의\ 성분의\ 합
                    =
                    2+1+1+1+2+3
                    =10
                `}
                                />

                                <p className="leading-8">
                                    행렬{" "}
                                    <InlineMath math="X" />
                                    의 모든 성분의 합을{" "}
                                    <InlineMath math="S" />
                                    라고 하면,
                                </p>

                                <BlockMath
                                    math={String.raw`
                    3X=A-4B
                `}
                                />

                                <p className="leading-8">
                                    의 양변의 모든 성분의 합을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    3S
                    =
                    4-4\times10
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    3S=-36
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    S=-12
                `}
                                />

                                <p className="leading-8">
                                    따라서 행렬{" "}
                                    <InlineMath math="X" />
                                    를 구하지 않아도 답을 구할 수 있습니다.
                                </p>

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    행렬 문제에서는 먼저{" "}
                                    <strong>무엇을 구하는 문제인지 확인</strong>하는 것이 중요합니다.
                                </p>

                                <ul className="mt-3 list-disc space-y-2 pl-6 leading-8">

                                    <li>
                                        특정 성분을 구하는 문제 → 해당 성분만 계산한다.
                                    </li>

                                    <li>
                                        모든 성분의 합을 구하는 문제 → 성분의 합만 계산한다.
                                    </li>

                                    <li>
                                        행렬 전체를 구하는 것은 마지막까지 필요하지 않을 수도 있다.
                                    </li>

                                </ul>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-12}
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
                            두 이차정사각행렬 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
            A-2B=
            \begin{pmatrix}
            1&-2\\
            6&5
            \end{pmatrix},
            \qquad
            2A+B=
            \begin{pmatrix}
            2&-4\\
            -3&5
            \end{pmatrix}
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,
                            행렬 <InlineMath math="A-B" />의{" "}
                            <InlineMath math="(1,2)" />성분을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 풀이1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    풀이 1. 행렬을 직접 구하는 방법
                                </h4>

                                <p className="leading-8">
                                    두 식을 연립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    A-2B&=
                    \begin{pmatrix}
                    1&-2\\
                    6&5
                    \end{pmatrix}\\[6pt]
                    2A+B&=
                    \begin{pmatrix}
                    2&-4\\
                    -3&5
                    \end{pmatrix}
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    첫 번째 식에 2를 곱하여 두 번째 식과 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    4A=
                    \begin{pmatrix}
                    4&-8\\
                    9&15
                    \end{pmatrix}
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&-2\\
                    \frac94&\frac{15}{4}
                    \end{pmatrix}
                `}
                                />

                                <p className="leading-8">
                                    이를{" "}
                                    <InlineMath math="A-2B" />
                                    에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    B=
                    \begin{pmatrix}
                    0&0\\
                    -\frac{15}{8}&-\frac58
                    \end{pmatrix}
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    A-B=
                    \begin{pmatrix}
                    1&-2\\
                    \frac{33}{8}&\frac{35}{8}
                    \end{pmatrix}
                `}
                                />

                                <p className="leading-8">
                                    따라서{" "}
                                    <InlineMath math="(1,2)" />
                                    성분은
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-2}
                `}
                                />

                            </div>

                            {/* 풀이2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    풀이 2. 필요한 성분만 계산하는 방법
                                </h4>

                                <p className="leading-8">
                                    구하려는 것은{" "}
                                    <InlineMath math="A-B" />
                                    의{" "}
                                    <InlineMath math="(1,2)" />
                                    성분뿐입니다.
                                </p>

                                <p className="leading-8">
                                    따라서{" "}
                                    <InlineMath math="(1,2)" />
                                    성분만 각각{" "}
                                    <InlineMath math="a,\ b" />
                                    라고 두면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    a-2b&=-2\\
                    2a+b&=-4
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    첫 번째 식에 2를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2a-4b=-4
                `}
                                />

                                <p className="leading-8">
                                    두 번째 식에서 빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    5b=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    b=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=-2
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    a-b=-2
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    \boxed{-2}
                `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    문제에서 구하는 것이{" "}
                                    <InlineMath math="(1,2)" />
                                    성분이라면
                                    모든 성분을 계산할 필요가 없습니다.
                                </p>

                                <p className="leading-8">
                                    해당 성분만 문자로 두고 연립방정식을 세우면
                                    훨씬 빠르게 해결할 수 있습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-2}
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
                            등식
                        </p>

                        <BlockMath
                            math={String.raw`
                \begin{pmatrix}
                x^2&0\\
                x&x^3
                \end{pmatrix}
                -
                2
                \begin{pmatrix}
                a&1\\
                2&b
                \end{pmatrix}
                +
                \begin{pmatrix}
                y^2&xy\\
                y&y^3
                \end{pmatrix}
                =
                O
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 실수{" "}
                            <InlineMath math="a,\ b" />에 대하여{" "}
                            <InlineMath math="a^2+b^2" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="x,\ y" />는 실수이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            <p className="leading-8">
                                왼쪽 행렬이 영행렬과 같으므로 대응하는 모든 성분은{" "}
                                <InlineMath math="0" />입니다.
                            </p>

                            {/* x+y, xy */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 주대각선 밖의 성분 비교
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    먼저 <InlineMath math="a,\ b" />가 없는{" "}
                                    <InlineMath math="(1,2)" />성분과{" "}
                                    <InlineMath math="(2,1)" />성분을 비교합니다.
                                </p>

                                <p className="mt-4 font-semibold text-white">
                                    <InlineMath math="(1,2)" />성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                        0-2+xy=0
                    `}
                                />

                                <BlockMath math="xy=2" />

                                <p className="font-semibold text-white">
                                    <InlineMath math="(2,1)" />성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x-4+y=0
                    `}
                                />

                                <BlockMath math="x+y=4" />

                            </div>

                            {/* a */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="a" />의 값
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="(1,1)" />성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^2-2a+y^2=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2a=x^2+y^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="x+y=4" />,{" "}
                                    <InlineMath math="xy=2" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        x^2+y^2
                        &=(x+y)^2-2xy\\
                        &=4^2-2\cdot2\\
                        &=12
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2a=12
                    `}
                                />

                                <BlockMath math="a=6" />

                            </div>

                            {/* b */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. <InlineMath math="b" />의 값
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="(2,2)" />성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^3-2b+y^3=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2b=x^3+y^3
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    세제곱의 합을 변형하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x^3+y^3
                        =
                        (x+y)^3-3xy(x+y)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        x^3+y^3
                        &=4^3-3\cdot2\cdot4\\
                        &=64-24\\
                        &=40
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2b=40
                    `}
                                />

                                <BlockMath math="b=20" />

                            </div>

                            {/* a²+b² */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    4. <InlineMath math="a^2+b^2" />의 값
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a^2+b^2
                        &=6^2+20^2\\
                        &=36+400\\
                        &=436
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이 문제에서는 <InlineMath math="x,\ y" />의 값을 각각 구할
                                    필요가 없습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    먼저 간단한 두 성분에서{" "}
                                    <InlineMath math="x+y" />와{" "}
                                    <InlineMath math="xy" />를 구한 뒤,
                                    필요한 대칭식{" "}
                                    <InlineMath math="x^2+y^2" />와{" "}
                                    <InlineMath math="x^3+y^3" />만 계산하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        x+y,\ xy
                        \quad\longrightarrow\quad
                        x^2+y^2,\ x^3+y^3
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{436}" />

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
                            세 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
            A=
            \begin{pmatrix}
            1&a\\
            -1&2
            \end{pmatrix},
            \qquad
            B=
            \begin{pmatrix}
            -1&2\\
            b&3
            \end{pmatrix},
            \qquad
            C=
            \begin{pmatrix}
            -4&3\\
            -5&7
            \end{pmatrix}
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="xA+yB=C" />
                            가 성립할 때,{" "}
                            <InlineMath math="xy+ab" />
                            의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단,{" "}
                            <InlineMath math="a,\ b,\ x,\ y" />
                            는 실수이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* x,y */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. <InlineMath math="x,\ y" />의 값
                                </h4>

                                <p className="leading-8">
                                    먼저{" "}
                                    <InlineMath math="a,\ b" />
                                    가 없는 성분을 비교합니다.
                                </p>

                                <p className="font-semibold text-white mt-3">
                                    (1,1)성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x-y=-4
                `}
                                />

                                <p className="font-semibold text-white">
                                    (2,2)성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                    2x+3y=7
                `}
                                />

                                <p className="leading-8">
                                    이를 연립하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    x=-1,\qquad y=3
                `}
                                />

                            </div>

                            {/* a,b */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="a,\ b" />의 값
                                </h4>

                                <p className="font-semibold text-white">
                                    (1,2)성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                    ax+2y=3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    -a+6=3
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    a=3
                `}
                                />

                                <p className="font-semibold text-white mt-5">
                                    (2,1)성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -x+by=-5
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    1+3b=-5
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    b=-2
                `}
                                />

                            </div>

                            {/* 답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="xy+ab" />의 값
                                </h4>

                                <BlockMath
                                    math={String.raw`
                    \begin{aligned}
                    xy+ab
                    &=(-1)(3)+(3)(-2)\\
                    &=-3-6\\
                    &=-9
                    \end{aligned}
                `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    먼저{" "}
                                    <InlineMath math="a,\ b" />
                                    가 없는 성분을 이용하여{" "}
                                    <InlineMath math="x,\ y" />
                                    를 구한 뒤,
                                    이를 다른 성분에 대입하여{" "}
                                    <InlineMath math="a,\ b" />
                                    를 구하면 계산이 가장 간단합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{
                    x,\ y
                    \longrightarrow
                    a,\ b
                    \longrightarrow
                    xy+ab
                    }
                `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{-9}
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
                            행렬 <InlineMath math="A,\ B" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                3A+B=
                \begin{pmatrix}
                2&1\\
                -2&5
                \end{pmatrix},
                \qquad
                2A-B=
                \begin{pmatrix}
                3&-1\\
                2&5
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립할 때, 행렬 <InlineMath math="A+B" />의
                            제2열의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 풀이 1 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    풀이 1. 행렬 <InlineMath math="A,\ B" />를 직접 구하는 방법
                                </h4>

                                <p className="leading-8">
                                    두 행렬의 등식을 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        5A=
                        \begin{pmatrix}
                        2&1\\
                        -2&5
                        \end{pmatrix}
                        +
                        \begin{pmatrix}
                        3&-1\\
                        2&5
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        5A=
                        \begin{pmatrix}
                        5&0\\
                        0&10
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        1&0\\
                        0&2
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    이를 <InlineMath math="3A+B" />의 식에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        B=
                        \begin{pmatrix}
                        2&1\\
                        -2&5
                        \end{pmatrix}
                        -
                        3
                        \begin{pmatrix}
                        1&0\\
                        0&2
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        B=
                        \begin{pmatrix}
                        -1&1\\
                        -2&-1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+B=
                        \begin{pmatrix}
                        0&1\\
                        -2&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    제2열의 성분은 <InlineMath math="1,\ 1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+1=2
                    `}
                                />

                            </div>

                            {/* 풀이 2 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    풀이 2. 제2열의 성분의 합만 계산하는 방법
                                </h4>

                                <p className="leading-8">
                                    구하려는 것은 행렬 <InlineMath math="A+B" /> 전체가 아니라
                                    <strong> 제2열의 모든 성분의 합</strong>입니다.
                                </p>

                                <p className="leading-8">
                                    행렬 <InlineMath math="A" />와 <InlineMath math="B" />의
                                    제2열의 성분의 합을 각각{" "}
                                    <InlineMath math="a,\ b" />라고 하겠습니다.
                                </p>

                                <p className="leading-8">
                                    첫 번째 행렬의 제2열의 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+5=6
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3a+b=6
                    `}
                                />

                                <p className="leading-8">
                                    두 번째 행렬의 제2열의 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -1+5=4
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2a-b=4
                    `}
                                />

                                <p className="leading-8">
                                    두 식을 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        5a=10
                    `}
                                />

                                <BlockMath math="a=2" />

                                <p className="leading-8">
                                    이를 <InlineMath math="3a+b=6" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6+b=6
                    `}
                                />

                                <BlockMath math="b=0" />

                                <p className="leading-8">
                                    따라서 행렬 <InlineMath math="A+B" />의 제2열의
                                    모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a+b=2+0=2
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    특정 행이나 열의 성분의 합을 묻는 문제에서는
                                    행렬 전체를 구하지 않고, 그 행이나 열의{" "}
                                    <strong> 성분의 합만 문자로 놓아 계산</strong>할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{제2열의 합만 필요}
                        \quad\Longrightarrow\quad
                        \text{제2열의 합만 계산}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서 행렬 <InlineMath math="A+B" />의 제2열의
                                    모든 성분의 합은
                                </p>

                                <BlockMath math="\boxed{2}" />

                            </div>

                        </div>

                    </details>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.4 행렬의 곱셈
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    행렬의 곱셈은 앞 행렬의 행과 뒤 행렬의 열을 서로 곱하여 더하는
                    연산입니다. 덧셈이나 뺄셈과는 계산 방법이 완전히 다릅니다.
                </p>

                {/* 행렬의 곱셈 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 행렬의 곱셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬의 곱셈에서는 앞에 있는 행렬의
                        <span className="font-semibold text-white"> 행</span>과
                        뒤에 있는 행렬의
                        <span className="font-semibold text-white"> 열</span>의 성분을
                        차례로 곱하여 더합니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이렇게 구한 값을 앞 행렬의 행과 뒤 행렬의 열이 만나는 위치에
                        적습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                    \begin{pmatrix}
                    e&f\\
                    g&h
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    ae+bg&af+bh\\
                    ce+dg&cf+dh
                    \end{pmatrix}
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            행과 열의 계산
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (1,1)\text{성분}&=ae+bg,\\
                    (1,2)\text{성분}&=af+bh,\\
                    (2,1)\text{성분}&=ce+dg,\\
                    (2,2)\text{성분}&=cf+dh
                    \end{aligned}
                `}
                        />

                        <p className="mt-3 text-center leading-8 text-gray-300">
                            앞 행렬의 행 번호와 뒤 행렬의 열 번호가
                            곱한 결과의 성분 위치가 됩니다.
                        </p>

                    </div>

                </div>

                {/* 곱셈이 가능한 조건 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 곱셈이 가능한 조건
                    </h3>

                    <p className="leading-8 text-gray-300">
                        앞 행렬의 열의 개수와 뒤 행렬의 행의 개수가 같을 때만
                        두 행렬을 곱할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \underset{m\times n}{A}
                    \quad
                    \underset{n\times p}{B}
                    \quad\Longrightarrow\quad
                    \underset{m\times p}{AB}
                `}
                        />

                        <p className="mt-4 text-center leading-8 text-gray-300">
                            가운데 두 수가 같아야 곱셈이 가능하고,
                            바깥쪽 두 수가 결과 행렬의 크기가 됩니다.
                        </p>

                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                            <p className="font-semibold text-green-300">
                                곱셈이 가능한 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        (3\times4)(4\times2)
                        \quad\longrightarrow\quad
                        3\times2
                    `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                앞 행렬의 열이 4개이고 뒤 행렬의 행이 4개입니다.
                            </p>

                        </div>

                        <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                            <p className="font-semibold text-red-300">
                                곱셈이 불가능한 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        (3\times4)(3\times2)
                    `}
                            />

                            <p className="text-center leading-8 text-gray-300">
                                앞 행렬의 열은 4개이고 뒤 행렬의 행은 3개이므로
                                곱할 수 없습니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{앞 행렬의 열의 개수}
                    =
                    \text{뒤 행렬의 행의 개수}
                    }
                `}
                        />

                    </div>

                </div>

                {/* 기본 계산 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        3. 행렬의 곱셈 계산
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음 두 행렬의 곱{" "}
                        <InlineMath math="AB" />를 계산해 봅시다.
                    </p>

                    <BlockMath
                        math={String.raw`
                A=
                \begin{pmatrix}
                1&2&3\\
                4&5&6
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                1&2\\
                0&1\\
                2&-1
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        행렬 <InlineMath math="A" />는{" "}
                        <InlineMath math="2\times3" /> 행렬이고,
                        행렬 <InlineMath math="B" />는{" "}
                        <InlineMath math="3\times2" /> 행렬이므로{" "}
                        <InlineMath math="AB" />는{" "}
                        <InlineMath math="2\times2" /> 행렬입니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (1,1)\text{성분}
                    &=1\cdot1+2\cdot0+3\cdot2=7,\\
                    (1,2)\text{성분}
                    &=1\cdot2+2\cdot1+3\cdot(-1)=1,\\
                    (2,1)\text{성분}
                    &=4\cdot1+5\cdot0+6\cdot2=16,\\
                    (2,2)\text{성분}
                    &=4\cdot2+5\cdot1+6\cdot(-1)=7
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    AB=
                    \begin{pmatrix}
                    7&1\\
                    16&7
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 행렬의 곱셈의 성질 */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        4. 행렬의 곱셈의 성질
                    </h3>

                    {/* 교환법칙 */}
                    <div className="rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            (1) 일반적으로 교환법칙이 성립하지 않습니다
                        </p>

                        <BlockMath
                            math={String.raw`
                    AB\ne BA
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            <InlineMath math="AB" />와{" "}
                            <InlineMath math="BA" />가 모두 계산 가능한 경우에도
                            두 결과는 일반적으로 같지 않습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            또한 <InlineMath math="AB" />는 계산할 수 있지만{" "}
                            <InlineMath math="BA" />는 계산할 수 없는 경우도 있습니다.
                        </p>

                    </div>

                    {/* 결합법칙 */}
                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            (2) 결합법칙이 성립합니다
                        </p>

                        <BlockMath
                            math={String.raw`
                    (AB)C=A(BC)
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            세 행렬의 곱이 모두 정의될 때,
                            어느 두 행렬을 먼저 곱하더라도 결과는 같습니다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            다만 행렬을 곱하는
                            <span className="font-semibold text-white"> 순서 자체를 바꾸는 것은 아닙니다.</span>
                        </p>

                    </div>

                    {/* 분배법칙 */}
                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            (3) 분배법칙이 성립합니다
                        </p>

                        <BlockMath
                            math={String.raw`
                    A(B+C)=AB+AC
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (A+B)C=AC+BC
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            행렬의 크기가 알맞아 각 계산이 가능할 때
                            분배법칙을 사용할 수 있습니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                        <p className="font-semibold text-red-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            결합법칙은 괄호의 위치만 바꾸는 것이고,
                            교환법칙은 행렬의 순서를 바꾸는 것입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    (AB)C=A(BC)
                    \qquad\text{이지만}\qquad
                    AB=BA\text{는 일반적으로 성립하지 않는다.}
                `}
                        />

                    </div>

                </div>

                {/* 표를 이용한 행렬의 곱셈 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        5. 표를 이용한 행렬의 곱셈
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬의 곱셈은 두 표의 정보를 연결하여 새로운 정보를 구하는
                        연산으로 생각할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="mb-4 text-center font-semibold text-white">
                                과수원별 수확량
                            </p>

                            <div className="overflow-x-auto">

                                <table className="w-full border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr>
                                            <th className="border border-white/15 p-3" />
                                            <th className="border border-white/15 p-3 text-white">
                                                사과
                                            </th>
                                            <th className="border border-white/15 p-3 text-white">
                                                배
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-white/15 p-3 font-semibold text-white">
                                                A
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                100
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                50
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-white/15 p-3 font-semibold text-white">
                                                B
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                70
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                60
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="mb-4 text-center font-semibold text-white">
                                과일 한 개의 이익
                            </p>

                            <div className="overflow-x-auto">

                                <table className="w-full border-collapse text-center text-gray-300">

                                    <thead>
                                        <tr>
                                            <th className="border border-white/15 p-3" />
                                            <th className="border border-white/15 p-3 text-white">
                                                이익
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td className="border border-white/15 p-3 font-semibold text-white">
                                                사과
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                1,000원
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="border border-white/15 p-3 font-semibold text-white">
                                                배
                                            </td>
                                            <td className="border border-white/15 p-3">
                                                1,200원
                                            </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 표를 행렬로 나타내면
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{pmatrix}
                100&50\\
                70&60
                \end{pmatrix}
                \begin{pmatrix}
                1000\\
                1200
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이고, 곱셈의 결과는 각 과수원의 총이익을 나타냅니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{pmatrix}
                100\cdot1000+50\cdot1200\\
                70\cdot1000+60\cdot1200
                \end{pmatrix}
                =
                \begin{pmatrix}
                160000\\
                142000
                \end{pmatrix}
            `}
                    />

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="text-center leading-8 text-gray-300">
                            따라서 A 과수원의 총이익은 160,000원,
                            B 과수원의 총이익은 142,000원입니다.
                        </p>

                    </div>

                </div>

                {/* 성분의 합 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        6. 모든 성분의 합을 구할 때의 주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        덧셈, 뺄셈, 실수배에서는 각 행렬의 모든 성분의 합을 미리
                        계산하여 이용할 수 있었습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        그러나 행렬의 곱셈에서는 앞 행렬의 모든 성분의 합과
                        뒤 행렬의 모든 성분의 합을 서로 곱하여
                        곱한 행렬의 모든 성분의 합을 구할 수 없습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&2\\
                    3&4
                    \end{pmatrix},
                    \qquad
                    B=
                    \begin{pmatrix}
                    5&6\\
                    7&8
                    \end{pmatrix}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            행렬 <InlineMath math="A" />의 모든 성분의 합은{" "}
                            <InlineMath math="10" />이고,
                            행렬 <InlineMath math="B" />의 모든 성분의 합은{" "}
                            <InlineMath math="26" />입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    10\times26=260
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            이지만 실제 행렬의 곱은
                        </p>

                        <BlockMath
                            math={String.raw`
                    AB=
                    \begin{pmatrix}
                    19&22\\
                    43&50
                    \end{pmatrix}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            이므로 모든 성분의 합은
                        </p>

                        <BlockMath
                            math={String.raw`
                    19+22+43+50=134
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    134\ne260
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            계산 요령
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            행렬의 곱셈 후 모든 성분의 합을 구하려면
                            행렬의 곱을 실제로 계산한 뒤 성분을 더해야 합니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            특정 성분만 묻는 문제라면 행렬 전체를 구하지 않고,
                            앞 행렬의 해당 행과 뒤 행렬의 해당 열만 이용하여
                            그 성분을 직접 계산할 수 있습니다.
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

                        <BlockMath
                            math={String.raw`
            A=
            \begin{pmatrix}
            2&x\\
            3&y
            \end{pmatrix},
            \qquad
            B=
            \begin{pmatrix}
            2&-1\\
            -2&1
            \end{pmatrix}
        `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                            <InlineMath math="AB=O" />
                            일 때,
                            상수{" "}
                            <InlineMath math="x,\ y" />
                            에 대하여{" "}
                            <InlineMath math="xy" />
                            의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단,{" "}
                            <InlineMath math="O" />
                            는 영행렬이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 행렬의 곱 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬의 곱 계산
                                </h4>

                                <BlockMath
                                    math={String.raw`
                    AB=
                    \begin{pmatrix}
                    2&x\\
                    3&y
                    \end{pmatrix}
                    \begin{pmatrix}
                    2&-1\\
                    -2&1
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    4-2x&-2+x\\
                    6-2y&-3+y
                    \end{pmatrix}
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그런데{" "}
                                    <InlineMath math="AB=O" />
                                    이므로 모든 성분이{" "}
                                    <InlineMath math="0" />
                                    이어야 합니다.
                                </p>

                            </div>

                            {/* x,y */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 상수 <InlineMath math="x,\ y" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    첫째 행의 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    4-2x=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    x=2
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    둘째 행의 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                    6-2y=0
                `}
                                />

                                <BlockMath
                                    math={String.raw`
                    y=3
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    나머지 두 성분도 각각
                                </p>

                                <BlockMath
                                    math={String.raw`
                    -2+x=0,\qquad -3+y=0
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 되어 모두 만족합니다.
                                </p>

                            </div>

                            {/* 답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="xy" />의 값
                                </h4>

                                <BlockMath
                                    math={String.raw`
                    xy=2\times3=6
                `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 곱이 영행렬이 되면
                                    <strong> 모든 성분이 0</strong>이 되어야 합니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    따라서 곱셈 결과를 먼저 구한 후,
                                    각 성분을 0과 비교하여 필요한 값을 찾습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                    \boxed{6}
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
                            이차정사각행렬 <InlineMath math="A" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A
                \begin{pmatrix}
                2a\\
                0
                \end{pmatrix}
                =
                \begin{pmatrix}
                4\\
                -6
                \end{pmatrix},
                \qquad
                A
                \begin{pmatrix}
                0\\
                3b
                \end{pmatrix}
                =
                \begin{pmatrix}
                -3\\
                6
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립할 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A
                \begin{pmatrix}
                a\\
                b
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 열행렬 분해 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 열행렬을 주어진 형태로 나타내기
                                </h4>

                                <p className="leading-8">
                                    구하려는 식의 열행렬은 다음과 같이 나타낼 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        a\\
                        b
                        \end{pmatrix}
                        =
                        \frac12
                        \begin{pmatrix}
                        2a\\
                        0
                        \end{pmatrix}
                        +
                        \frac13
                        \begin{pmatrix}
                        0\\
                        3b
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 분배법칙과 실수배 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬의 분배법칙 이용하기
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈에 대한 분배법칙과 실수배를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A
                        \begin{pmatrix}
                        a\\
                        b
                        \end{pmatrix}
                        &=
                        A
                        \left\{
                        \frac12
                        \begin{pmatrix}
                        2a\\
                        0
                        \end{pmatrix}
                        +
                        \frac13
                        \begin{pmatrix}
                        0\\
                        3b
                        \end{pmatrix}
                        \right\}
                        \\[6pt]
                        &=
                        \frac12
                        A
                        \begin{pmatrix}
                        2a\\
                        0
                        \end{pmatrix}
                        +
                        \frac13
                        A
                        \begin{pmatrix}
                        0\\
                        3b
                        \end{pmatrix}
                    \end{aligned}
                    `}
                                />

                            </div>

                            {/* 주어진 조건 대입 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. 주어진 조건 대입하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A
                        \begin{pmatrix}
                        a\\
                        b
                        \end{pmatrix}
                        &=
                        \frac12
                        \begin{pmatrix}
                        4\\
                        -6
                        \end{pmatrix}
                        +
                        \frac13
                        \begin{pmatrix}
                        -3\\
                        6
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        2\\
                        -3
                        \end{pmatrix}
                        +
                        \begin{pmatrix}
                        -1\\
                        2
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        1\\
                        -1
                        \end{pmatrix}
                    \end{aligned}
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="A" />의 각 성분이나{" "}
                                    <InlineMath math="a,\ b" />의 값을 직접 구할 필요가 없습니다.
                                </p>

                                <p className="leading-8">
                                    구하려는 열행렬을 문제에서 주어진 두 열행렬의
                                    실수배와 합으로 나타낸 뒤, 분배법칙을 이용하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{구하려는 열행렬을 주어진 열행렬의 합으로 분해한다}
                        }
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
                        A
                        \begin{pmatrix}
                        a\\
                        b
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        1\\
                        -1
                        \end{pmatrix}
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
                            세 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                1&2&3\\
                4&5&6
                \end{pmatrix},
                \qquad
                C=
                \begin{pmatrix}
                1&4\\
                2&5\\
                3&6
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 다음 중 곱을 정의할 수 없는 것을 고르시오.
                        </p>

                        <BlockMath
                            math={String.raw`
                \text{① }A^2
                \qquad
                \text{② }AB
                \qquad
                \text{③ }BC
                \qquad
                \text{④ }AC
                \qquad
                \text{⑤ }CB
            `}
                        />

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 크기 확인 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 각 행렬의 크기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        A:2\times2,
                        \qquad
                        B:2\times3,
                        \qquad
                        C:3\times2
                    `}
                                />

                            </div>

                            {/* 하나씩 확인 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 곱셈 가능 여부 확인
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2&:(2\times2)(2\times2)
                        &&\rightarrow\text{가능}\\[4pt]
                        AB&:(2\times2)(2\times3)
                        &&\rightarrow\text{가능}\\[4pt]
                        BC&:(2\times3)(3\times2)
                        &&\rightarrow\text{가능}\\[4pt]
                        AC&:(2\times2)(3\times2)
                        &&\rightarrow\text{불가능}\\[4pt]
                        CB&:(3\times2)(2\times3)
                        &&\rightarrow\text{가능}
                        \end{aligned}
                    `}
                                />

                                <p className="mt-4 leading-8">
                                    <InlineMath math="AC" />는 앞 행렬의 열의 개수가{" "}
                                    <InlineMath math="2" />, 뒤 행렬의 행의 개수가{" "}
                                    <InlineMath math="3" />이므로 곱셈을 정의할 수 없습니다.
                                </p>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈은
                                    <strong> 앞 행렬의 열의 개수</strong>와
                                    <strong> 뒤 행렬의 행의 개수</strong>가 같을 때만 가능합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (m\times n)(n\times p)
                        \longrightarrow
                        m\times p
                        }
                    `}
                                />

                                <p className="leading-8">
                                    가운데 두 수만 비교하면 빠르게 판단할 수 있습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{④ }AC}
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

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                3&2\\
                1&1
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                -2&-2\\
                -1&0
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                (A-B)A-(B-A)B
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 식 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 식을 먼저 간단히 정리하기
                                </h4>

                                <p className="leading-8">
                                    <InlineMath math="B-A=-(A-B)" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A-B)A-(B-A)B
                        &=(A-B)A+(A-B)B\\
                        &=(A-B)(A+B)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    먼저 전개식을 간단히 만드는 것이 계산하기 쉽습니다.
                                </p>

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬의 곱 계산
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        A-B=
                        \begin{pmatrix}
                        5&4\\
                        2&1
                        \end{pmatrix},
                        \qquad
                        A+B=
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-B)(A+B)
                        =
                        \begin{pmatrix}
                        5&4\\
                        2&1
                        \end{pmatrix}
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        5&4\\
                        2&1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 모든 성분의 합
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        5+4+2+1=12
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    이 문제는 곱셈을 바로 계산하기보다
                                    <strong> 분배법칙을 이용하여 식을 먼저 간단히 만드는 것</strong>이
                                    핵심입니다.
                                </p>

                                <p className="leading-8">
                                    특히{" "}
                                    <InlineMath math="A+B" />
                                    가 단위행렬이 되는 것을 이용하면 계산을 크게 줄일 수 있습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{12}
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
                            두 행렬 <InlineMath math="A,\ B" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                A+B=
                \begin{pmatrix}
                3&0\\
                -1&2
                \end{pmatrix},
                \qquad
                A-B=
                \begin{pmatrix}
                1&2\\
                1&0
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족시킬 때,{" "}
                            <InlineMath math="AB+BA" />의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 식 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 식을 먼저 변형하기
                                </h4>

                                <p className="leading-8">
                                    두 식의 제곱의 차를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2-(A-B)^2
                    `}
                                />

                                <p className="leading-8">
                                    를 계산할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A+B)^2
                        &=A^2+AB+BA+B^2,\\[4pt]
                        (A-B)^2
                        &=A^2-AB-BA+B^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2-(A-B)^2
                        =2(AB+BA)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        AB+BA
                        =
                        \frac12
                        \left\{
                        (A+B)^2-(A-B)^2
                        \right\}
                    `}
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬의 곱 계산
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2=
                        \begin{pmatrix}
                        9&0\\
                        -5&4
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2=
                        \begin{pmatrix}
                        3&2\\
                        1&2
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AB+BA
                        &=
                        \frac12
                        \left(
                        \begin{pmatrix}
                        9&0\\
                        -5&4
                        \end{pmatrix}
                        -
                        \begin{pmatrix}
                        3&2\\
                        1&2
                        \end{pmatrix}
                        \right)
                        \\[8pt]
                        &=
                        \frac12
                        \begin{pmatrix}
                        6&-2\\
                        -6&2
                        \end{pmatrix}
                        \\[8pt]
                        &=
                        \begin{pmatrix}
                        3&-1\\
                        -3&1
                        \end{pmatrix}
                    \end{aligned}
                `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 모든 성분의 합
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        3+(-1)+(-3)+1=0
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    <InlineMath math="AB+BA" />를 직접 구할 수 없을 때에는{" "}
                                    <InlineMath math="(A+B)^2" />와{" "}
                                    <InlineMath math="(A-B)^2" />를 이용하면{" "}
                                    <InlineMath math="AB+BA" />를 쉽게 만들 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (A+B)^2-(A-B)^2
                        =2(AB+BA)
                        }
                    `}
                                />

                                <p className="leading-8">
                                    식을 먼저 변형한 뒤 계산하면 훨씬 간단합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{0}
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
                            이차방정식{" "}
                            <InlineMath math="x^2-3x-1=0" />의 두 근을{" "}
                            <InlineMath math="\alpha,\ \beta" />라 할 때, 두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                \alpha&1\\
                \beta&1
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                \alpha&\beta\\
                1&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 행렬 <InlineMath math="AB" />의 모든 성분의 합을
                            구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 근과 계수 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 근과 계수와의 관계
                                </h4>

                                <p className="leading-8">
                                    이차방정식{" "}
                                    <InlineMath math="x^2-3x-1=0" />의 두 근이{" "}
                                    <InlineMath math="\alpha,\ \beta" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \alpha+\beta=3,
                        \qquad
                        \alpha\beta=-1
                    `}
                                />

                            </div>

                            {/* 행렬 곱 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬 <InlineMath math="AB" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AB
                        &=
                        \begin{pmatrix}
                        \alpha&1\\
                        \beta&1
                        \end{pmatrix}
                        \begin{pmatrix}
                        \alpha&\beta\\
                        1&1
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        \alpha^2+1&\alpha\beta+1\\
                        \alpha\beta+1&\beta^2+1
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. 모든 성분의 합
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="AB" />의 모든 성분을 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &(\alpha^2+1)
                        +(\alpha\beta+1)
                        +(\alpha\beta+1)
                        +(\beta^2+1)
                        \\[4pt]
                        &=
                        \alpha^2+2\alpha\beta+\beta^2+4
                        \\[4pt]
                        &=
                        (\alpha+\beta)^2+4
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="\alpha+\beta=3" />을 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (\alpha+\beta)^2+4
                        =
                        3^2+4
                        =
                        13
                    `}
                                />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    계산 요령
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈에서는 두 행렬의 모든 성분의 합을 먼저 구하여
                                    서로 곱할 수 없습니다.
                                </p>

                                <p className="leading-8">
                                    먼저 행렬 <InlineMath math="AB" />의 각 성분을 구한 뒤,
                                    그 성분들을 더하여 근과 계수와의 관계를 이용해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \alpha^2+2\alpha\beta+\beta^2
                        =
                        (\alpha+\beta)^2
                    `}
                                />

                                <p className="leading-8">
                                    이 문제에서는 계산 과정에서{" "}
                                    <InlineMath math="\alpha\beta" />가 하나의 완전제곱식 안에
                                    포함되므로, 실제로는{" "}
                                    <InlineMath math="\alpha+\beta" />의 값만 이용하면 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 행렬 <InlineMath math="AB" />의 모든 성분의 합은
                                </p>

                                <BlockMath math="\boxed{13}" />

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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                M=
                \begin{pmatrix}
                -1\\
                -2
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                MA+B=
                \begin{pmatrix}
                1&-2\\
                3&-5
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이다. 행렬 <InlineMath math="B" />의 모든 성분의 합이{" "}
                            <InlineMath math="30" />일 때, 행렬{" "}
                            <InlineMath math="A" />의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* A의 크기 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬 <InlineMath math="A" />의 모양 정하기
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="M" />은{" "}
                                    <InlineMath math="2\times1" /> 행렬이고,{" "}
                                    <InlineMath math="MA" />는{" "}
                                    <InlineMath math="2\times2" /> 행렬입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 행렬 <InlineMath math="A" />는{" "}
                                    <InlineMath math="1\times2" /> 행렬이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        a&b
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    로 놓을 수 있습니다.
                                </p>

                            </div>

                            {/* MA */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬 <InlineMath math="MA" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        MA
                        &=
                        \begin{pmatrix}
                        -1\\
                        -2
                        \end{pmatrix}
                        \begin{pmatrix}
                        a&b
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        -a&-b\\
                        -2a&-2b
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 행렬 <InlineMath math="MA" />의 모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -a-b-2a-2b=-3(a+b)
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. 모든 성분의 합 비교하기
                                </h4>

                                <p className="leading-8">
                                    오른쪽 행렬의 모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+(-2)+3+(-5)=-3
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    또한 행렬 <InlineMath math="B" />의 모든 성분의 합은{" "}
                                    <InlineMath math="30" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -3(a+b)+30=-3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -3(a+b)=-33
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a+b=11
                    `}
                                />

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    주의
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈에서는 두 행렬의 모든 성분의 합을 먼저 구하여
                                    서로 곱하면 안 됩니다.
                                </p>

                                <p className="leading-8">
                                    이 문제에서도 먼저 행렬 <InlineMath math="MA" />를
                                    실제로 계산한 뒤, 그 성분의 합을 구해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        MA=
                        \begin{pmatrix}
                        -a&-b\\
                        -2a&-2b
                        \end{pmatrix}
                        \quad\Longrightarrow\quad
                        \text{모든 성분의 합}=-3(a+b)
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 행렬 <InlineMath math="A" />의 모든 성분의 합은
                                </p>

                                <BlockMath math="\boxed{11}" />

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
                            지난 해 세 학생이 3회의 수학 시험에서 얻은 성적은 다음 표와 같다.
                        </p>

                        <div className="mt-5 overflow-x-auto">

                            <table className="mx-auto min-w-[520px] border-collapse text-center text-gray-300">

                                <thead>
                                    <tr>
                                        <th className="border border-white/15 p-3 text-white">
                                            학생
                                        </th>
                                        <th className="border border-white/15 p-3 text-white">
                                            5월
                                        </th>
                                        <th className="border border-white/15 p-3 text-white">
                                            7월
                                        </th>
                                        <th className="border border-white/15 p-3 text-white">
                                            9월
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 p-3 font-semibold text-white">
                                            하늘
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="a_1" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="b_1" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="c_1" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-white/15 p-3 font-semibold text-white">
                                            만규
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="a_2" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="b_2" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="c_2" />
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="border border-white/15 p-3 font-semibold text-white">
                                            다희
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="a_3" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="b_3" />
                                        </td>
                                        <td className="border border-white/15 p-3">
                                            <InlineMath math="c_3" />
                                        </td>
                                    </tr>
                                </tbody>

                            </table>

                        </div>

                        <p className="mt-6 leading-8 text-gray-300">
                            이 자료를 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a_1&b_1&c_1\\
                a_2&b_2&c_2\\
                a_3&b_3&c_3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타내고,
                        </p>

                        <BlockMath
                            math={String.raw`
                B=
                \frac13
                \begin{pmatrix}
                1&1&1
                \end{pmatrix},
                \qquad
                C=
                \begin{pmatrix}
                0\\
                0\\
                1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            라 할 때, 행렬 <InlineMath math="BAC" />의 계산 결과로
                            얻을 수 있는 것을 고르시오.
                        </p>

                        <div className="mt-5 space-y-3 rounded-xl border border-white/15 bg-black/40 p-5 text-gray-300">

                            <p className="leading-8">
                                ① 5월 세 학생의 수학 평균 점수
                            </p>

                            <p className="leading-8">
                                ② 7월 세 학생의 수학 평균 점수
                            </p>

                            <p className="leading-8">
                                ③ 9월 세 학생의 수학 평균 점수
                            </p>

                            <p className="leading-8">
                                ④ 하늘이의 3개월 수학 평균 점수
                            </p>

                            <p className="leading-8">
                                ⑤ 다희의 3개월 수학 평균 점수
                            </p>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 행렬의 역할 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 각 행렬이 나타내는 것
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="A" />의 각 행은 학생을,
                                    각 열은 시험을 치른 월을 나타냅니다.
                                </p>

                                <div className="mt-4 space-y-2 leading-8">

                                    <p>
                                        제1열:
                                        <InlineMath math="a_1,\ a_2,\ a_3" />
                                        — 5월 성적
                                    </p>

                                    <p>
                                        제2열:
                                        <InlineMath math="b_1,\ b_2,\ b_3" />
                                        — 7월 성적
                                    </p>

                                    <p>
                                        제3열:
                                        <InlineMath math="c_1,\ c_2,\ c_3" />
                                        — 9월 성적
                                    </p>

                                </div>

                            </div>

                            {/* AC 계산 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="AC" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AC
                        &=
                        \begin{pmatrix}
                        a_1&b_1&c_1\\
                        a_2&b_2&c_2\\
                        a_3&b_3&c_3
                        \end{pmatrix}
                        \begin{pmatrix}
                        0\\
                        0\\
                        1
                        \end{pmatrix}
                        \\[8pt]
                        &=
                        \begin{pmatrix}
                        c_1\\
                        c_2\\
                        c_3
                        \end{pmatrix}
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    행렬 <InlineMath math="C" />를 오른쪽에서 곱하면
                                    행렬 <InlineMath math="A" />의 제3열, 즉 세 학생의
                                    9월 성적이 선택됩니다.
                                </p>

                            </div>

                            {/* BAC 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. <InlineMath math="BAC" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        BAC
                        &=
                        B(AC)\\[4pt]
                        &=
                        \frac13
                        \begin{pmatrix}
                        1&1&1
                        \end{pmatrix}
                        \begin{pmatrix}
                        c_1\\
                        c_2\\
                        c_3
                        \end{pmatrix}\\[8pt]
                        &=
                        \frac{c_1+c_2+c_3}{3}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    이것은 세 학생이 9월 시험에서 얻은 점수의 평균입니다.
                                </p>

                            </div>

                            {/* 계산 방향 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱은 오른쪽에 있는 행렬부터 어떤 정보를
                                    선택하거나 변화시키는지 확인하면 이해하기 쉽습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A
                        \xrightarrow{\ C\ }
                        \text{9월 성적 선택}
                        \xrightarrow{\ B\ }
                        \text{세 학생의 평균}
                    `}
                                />

                                <p className="leading-8">
                                    즉, <InlineMath math="C" />는 제3열을 선택하고{" "}
                                    <InlineMath math="B" />는 선택된 세 성분의 평균을 구합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{③ 9월 세 학생의 수학 평균 점수}}
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
                            어느 공장에서 제품 <InlineMath math="A" />를 1개 만드는 데
                            강철 3톤과 알루미늄 2톤이 사용되고, 제품
                            <InlineMath math="B" />를 1개 만드는 데 강철 4톤과
                            알루미늄 3톤이 사용된다.
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            강철과 알루미늄의 톤당 구입 가격이 각각{" "}
                            <InlineMath math="x" />원,{" "}
                            <InlineMath math="y" />원일 때, 제품{" "}
                            <InlineMath math="A" />를 25개, 제품{" "}
                            <InlineMath math="B" />를 15개 만드는 데 사용된 강철과
                            알루미늄의 총 구입 가격을 행렬의 곱으로 나타낸 것을 고르시오.
                        </p>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-4 lg:grid-cols-2">

                            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                <p className="font-semibold text-white">①</p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        15&25
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                <p className="font-semibold text-white">②</p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        15&25
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&4\\
                        2&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                <p className="font-semibold text-white">③</p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        25&15
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-4">
                                <p className="font-semibold text-white">④</p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        25&15
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&4\\
                        2&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                    `}
                                />
                            </div>

                            <div className="rounded-xl border border-white/10 bg-black/40 p-4 lg:col-span-2">
                                <p className="font-semibold text-white">⑤</p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        25\\
                        15
                        \end{pmatrix}
                        \begin{pmatrix}
                        x&y
                        \end{pmatrix}
                    `}
                                />
                            </div>

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 각 행렬의 의미 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 각 자료를 행렬로 나타내기
                                </h4>

                                <p className="leading-8">
                                    제품 <InlineMath math="A,\ B" />의 생산 개수는 각각
                                    25개, 15개이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        25&15
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    로 나타냅니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    제품 1개를 만드는 데 필요한 강철과 알루미늄의 양은
                                    다음과 같이 나타냅니다.
                                    각 행은 제품을, 각 열은 재료를 나타냅니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{array}{c|cc}
                        &\text{강철}&\text{알루미늄}\\ \hline
                        A&3&2\\
                        B&4&3
                        \end{array}
                        \quad\longrightarrow\quad
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                    `}
                                />

                                <p className="mt-4 leading-8">
                                    강철과 알루미늄의 톤당 가격은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    로 나타냅니다.
                                </p>

                            </div>

                            {/* 곱의 의미 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬의 곱 구성하기
                                </h4>

                                <p className="leading-8">
                                    먼저 생산 개수와 제품별 재료 사용량을 곱하면
                                    필요한 강철과 알루미늄의 전체 양을 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &
                        \begin{pmatrix}
                        25&15
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        25\cdot3+15\cdot4
                        &
                        25\cdot2+15\cdot3
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        135&95
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    즉, 강철 135톤과 알루미늄 95톤이 필요합니다.
                                </p>

                                <p className="mt-4 leading-8">
                                    여기에 각 재료의 톤당 가격을 곱하면 총 구입 가격을
                                    구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        135&95
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                        =
                        135x+95y
                    `}
                                />

                            </div>

                            {/* 전체 식 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    3. 전체 계산식
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \begin{pmatrix}
                        25&15
                        \end{pmatrix}
                        \begin{pmatrix}
                        3&2\\
                        4&3
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                        }
                    `}
                                />

                                <p className="text-center leading-8">
                                    생산 개수 → 재료 사용량 → 재료 가격의 순서로
                                    정보를 연결합니다.
                                </p>

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    행렬을 만들 때에는 숫자만 보고 배열하지 말고,
                                    각 행과 열이 무엇을 나타내는지 먼저 정해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{제품의 개수}
                        \times
                        \text{제품별 재료 사용량}
                        \times
                        \text{재료별 가격}
                        }
                    `}
                                />

                                <p className="leading-8">
                                    또한 행렬을 곱할 수 있도록 앞 행렬의 열의 개수와
                                    뒤 행렬의 행의 개수가 같아야 합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{③}}
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
                            다음은 지난해 어느 전자회사에서 판매한 TV와 세탁기의
                            제품 한 개당 제조원가와 판매 가격 및 판매량을 나타낸 표이다.
                        </p>

                        {/* 표 */}
                        <div className="mt-6 grid gap-6 lg:grid-cols-2">

                            {/* 가격표 */}
                            <div className="rounded-xl border border-white/10 bg-black/40 p-5">

                                <p className="mb-4 text-center font-semibold text-white">
                                    제품 한 개당 가격
                                </p>

                                <div className="overflow-x-auto">

                                    <table className="mx-auto w-full min-w-[320px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr>
                                                <th className="border border-white/15 p-3" />
                                                <th className="border border-white/15 p-3 font-semibold text-white">
                                                    TV
                                                </th>
                                                <th className="border border-white/15 p-3 font-semibold text-white">
                                                    세탁기
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-white/15 p-3 font-semibold text-white">
                                                    제조원가
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="a" />
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="b" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-white/15 p-3 font-semibold text-white">
                                                    판매 가격
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="c" />
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="d" />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                            {/* 판매량표 */}
                            <div className="rounded-xl border border-white/10 bg-black/40 p-5">

                                <p className="mb-4 text-center font-semibold text-white">
                                    판매량
                                </p>

                                <div className="overflow-x-auto">

                                    <table className="mx-auto w-full min-w-[320px] border-collapse text-center text-gray-300">

                                        <thead>
                                            <tr>
                                                <th className="border border-white/15 p-3" />
                                                <th className="border border-white/15 p-3 font-semibold text-white">
                                                    상반기
                                                </th>
                                                <th className="border border-white/15 p-3 font-semibold text-white">
                                                    하반기
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td className="border border-white/15 p-3 font-semibold text-white">
                                                    TV
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="p" />
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="q" />
                                                </td>
                                            </tr>

                                            <tr>
                                                <td className="border border-white/15 p-3 font-semibold text-white">
                                                    세탁기
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="r" />
                                                </td>
                                                <td className="border border-white/15 p-3">
                                                    <InlineMath math="s" />
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>

                                </div>

                            </div>

                        </div>

                        <p className="mt-6 leading-8 text-gray-300">
                            위의 두 표를 각각 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                p&q\\
                r&s
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타내고, 이 두 행렬의 곱을
                        </p>

                        <BlockMath
                            math={String.raw`
                AB=
                \begin{pmatrix}
                x&y\\
                u&v
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            라 하자. 제품 한 개당 판매 이익금을 판매 가격에서 제조원가를
                            뺀 값으로 정의할 때, 다음 &lt;보기&gt;에서 옳은 것을 모두 고른
                            것을 고르시오.
                        </p>

                        {/* 보기 */}
                        <div className="mt-6 rounded-xl border border-white/15 bg-black/40 p-5">

                            <p className="mb-5 text-center font-bold text-white">
                                &lt;보기&gt;
                            </p>

                            <div className="space-y-4 leading-8 text-gray-300">

                                <p>
                                    ㄱ. <InlineMath math="x+y" />는 지난해 상반기와 하반기에
                                    판매된 TV와 세탁기의 제조원가 총액이다.
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="u+v" />는 지난해 상반기와 하반기에
                                    판매된 TV와 세탁기의 판매 총액이다.
                                </p>

                                <p>
                                    ㄷ. <InlineMath math="u-x" />는 지난해 상반기와 하반기에
                                    판매된 TV와 세탁기의 판매 이익금 총액이다.
                                </p>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            {[
                                ["①", "ㄱ"],
                                ["②", "ㄴ"],
                                ["③", "ㄱ, ㄴ"],
                                ["④", "ㄴ, ㄷ"],
                                ["⑤", "ㄱ, ㄴ, ㄷ"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 text-gray-300">{number}</span>
                                    <span className="font-semibold text-white">{choice}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 행렬의 곱 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬 <InlineMath math="AB" />의 각 성분
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AB
                        &=
                        \begin{pmatrix}
                        a&b\\
                        c&d
                        \end{pmatrix}
                        \begin{pmatrix}
                        p&q\\
                        r&s
                        \end{pmatrix}
                        \\[6pt]
                        &=
                        \begin{pmatrix}
                        ap+br&aq+bs\\
                        cp+dr&cq+ds
                        \end{pmatrix}
                    \end{aligned}
                `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=ap+br,\qquad
                        y=aq+bs,
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        u=cp+dr,\qquad
                        v=cq+ds
                    `}
                                />

                            </div>

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    ㄱ. 제조원가 총액
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        x+y
                        &=(ap+br)+(aq+bs)\\
                        &=a(p+q)+b(r+s)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="p+q" />는 지난해 판매된 TV의 총수량이고,{" "}
                                    <InlineMath math="r+s" />는 지난해 판매된 세탁기의
                                    총수량입니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    따라서 <InlineMath math="x+y" />는 TV와 세탁기의
                                    제조원가 총액이므로 ㄱ은 옳습니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    ㄴ. 판매 총액
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        u+v
                        &=(cp+dr)+(cq+ds)\\
                        &=c(p+q)+d(r+s)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    이는 지난해 판매된 TV와 세탁기의 판매 금액을 모두
                                    더한 것이므로 ㄴ은 옳습니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    ㄷ. 판매 이익금 총액
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        u-x
                        &=(cp+dr)-(ap+br)\\
                        &=(c-a)p+(d-b)r
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    이것은 상반기에 판매된 제품의 이익금만 나타냅니다.
                                    하반기에 판매된 제품의 이익금까지 모두 포함하려면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (u+v)-(x+y)
                    `}
                                />

                                <p className="leading-8">
                                    를 계산해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (u+v)-(x+y)
                        &=(c-a)(p+q)\\
                        &\quad +(d-b)(r+s)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ㄷ은 옳지 않습니다.
                                </p>

                            </div>

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="AB" />의 각 열은 판매 시기를
                                    나타냅니다.
                                </p>

                                <div className="mt-4 space-y-2 leading-8">

                                    <p>
                                        제1열의 <InlineMath math="x,\ u" />:
                                        상반기의 제조원가와 판매 금액
                                    </p>

                                    <p>
                                        제2열의 <InlineMath math="y,\ v" />:
                                        하반기의 제조원가와 판매 금액
                                    </p>

                                </div>

                                <p className="mt-4 leading-8">
                                    따라서 한 해 전체의 이익금은 한 열의 차인{" "}
                                    <InlineMath math="u-x" />가 아니라,
                                    두 시기의 판매 총액에서 제조원가 총액을 뺀
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{(u+v)-(x+y)}
                    `}
                                />

                                <p className="leading-8">
                                    입니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    ㄱ, ㄴ이 옳으므로 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③ ㄱ, ㄴ}}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{gathered}
                    (m\times n)(n\times p)
                    \longrightarrow
                    m\times p\\[4pt]
                    \text{앞 행렬의 행}
                    \times
                    \text{뒤 행렬의 열}
                    \end{gathered}
                    }
                `}
                        />

                        <div className="mt-5 space-y-2 leading-8 text-gray-300">

                            <p>
                                ① 앞 행렬의 열의 개수와 뒤 행렬의 행의 개수가 같아야 합니다.
                            </p>

                            <p>
                                ② 행렬의 곱셈은 일반적으로 교환법칙이 성립하지 않습니다.
                            </p>

                            <p>
                                ③ 행렬의 곱셈에는 결합법칙과 분배법칙이 성립합니다.
                            </p>

                            <p>
                                ④ 곱한 행렬의 모든 성분의 합은 두 행렬의 성분의 합만으로
                                계산할 수 없습니다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.5 단위행렬과 행렬의 곱셈의 교환법칙
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    행렬의 곱셈에서는 일반적으로 교환법칙이 성립하지 않습니다.
                    따라서 수에서 사용하던 곱셈공식과 인수분해 공식을 그대로
                    사용할 수 있는지 먼저 확인해야 합니다.
                </p>

                {/* 단위행렬 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 단위행렬
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주대각선 위의 성분은 모두{" "}
                        <InlineMath math="1" />이고, 나머지 성분은 모두{" "}
                        <InlineMath math="0" />인 정사각행렬을
                        <span className="font-semibold text-white"> 단위행렬</span>이라고
                        하며, 대문자 <InlineMath math="E" />로 나타냅니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="text-center font-semibold text-white">
                                2차 단위행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        E=
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="text-center font-semibold text-white">
                                3차 단위행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        E=
                        \begin{pmatrix}
                        1&0&0\\
                        0&1&0\\
                        0&0&1
                        \end{pmatrix}
                    `}
                            />

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        단위행렬은 수의 곱셈에서{" "}
                        <InlineMath math="1" />과 같은 역할을 합니다.
                        행렬 <InlineMath math="A" />와 크기가 알맞을 때
                    </p>

                    <BlockMath
                        math={String.raw`
                AE=EA=A
            `}
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            단위행렬과의 곱셈
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                    \begin{pmatrix}
                    1&0\\
                    0&1
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    1&0\\
                    0&1
                    \end{pmatrix}
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    a&b\\
                    c&d
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 교환법칙 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 행렬의 곱셈과 교환법칙
                    </h3>

                    <p className="leading-8 text-gray-300">
                        수의 곱셈에서는 곱하는 순서를 바꾸어도 결과가 같지만,
                        행렬의 곱셈에서는 일반적으로 곱하는 순서를 바꾸면
                        결과가 달라집니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{AB\ne BA\quad\text{(일반적으로)}}
            `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&1\\
                    0&1
                    \end{pmatrix},
                    \qquad
                    B=
                    \begin{pmatrix}
                    1&0\\
                    1&1
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    AB=
                    \begin{pmatrix}
                    2&1\\
                    1&1
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    BA=
                    \begin{pmatrix}
                    1&1\\
                    1&2
                    \end{pmatrix}
                `}
                        />

                        <BlockMath math="AB\ne BA" />

                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                        <p className="font-semibold text-red-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="AB" />와{" "}
                            <InlineMath math="BA" />가 모두 정의되더라도 두 행렬이
                            같다는 보장은 없습니다.
                        </p>

                        <p className="leading-8 text-gray-300">
                            또한 <InlineMath math="AB" />는 정의되지만{" "}
                            <InlineMath math="BA" />는 정의되지 않는 경우도 있습니다.
                        </p>

                    </div>

                </div>

                {/* 곱셈공식 */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        3. 행렬의 곱셈공식
                    </h3>

                    <p className="leading-8 text-gray-300">
                        행렬의 곱셈에는 분배법칙이 성립하지만, 일반적으로{" "}
                        <InlineMath math="AB\ne BA" />이므로 곱하는 순서를 유지하여
                        전개해야 합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (A+B)^2
                    &=(A+B)(A+B)\\
                    &=A^2+AB+BA+B^2
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (A-B)^2
                    &=(A-B)(A-B)\\
                    &=A^2-AB-BA+B^2
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (A+B)(A-B)
                    &=A^2-AB+BA-B^2
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    (A-B)(A+B)
                    &=A^2+AB-BA-B^2
                    \end{aligned}
                `}
                        />

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            곱셈공식을 그대로 사용할 수 없는 이유
                        </p>

                        <BlockMath
                            math={String.raw`
                    AB+BA
                    \ne
                    2AB
                    \qquad\text{(일반적으로)}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            가운데 두 항인{" "}
                            <InlineMath math="AB" />와{" "}
                            <InlineMath math="BA" />를 임의로 합칠 수 없습니다.
                        </p>

                    </div>

                </div>

                {/* AB=BA인 경우 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        4. 곱셈의 교환법칙이 성립하는 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 행렬 <InlineMath math="A,\ B" />에 대하여
                    </p>

                    <BlockMath math="AB=BA" />

                    <p className="leading-8 text-gray-300">
                        가 성립하면 수에서 사용하던 곱셈공식과 인수분해 공식을
                        같은 형태로 사용할 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    (A+B)^2=A^2+2AB+B^2
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (A-B)^2=A^2-2AB+B^2
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    (A+B)(A-B)=A^2-B^2
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    A^2-B^2=(A+B)(A-B)
                `}
                        />

                    </div>

                    <div className="mt-5 space-y-5">

                        {/* 조건 1 */}
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                            <p className="font-semibold text-blue-300">
                                경우 1. 문제에서 곱셈공식 또는 인수분해 공식이
                                성립한다고 한 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                예를 들어 문제에서
                            </p>

                            <BlockMath
                                math={String.raw`
                        (A+B)^2=A^2+2AB+B^2
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                가 성립한다고 하였다면, 실제 전개식과 비교하여
                            </p>

                            <BlockMath
                                math={String.raw`
                        AB+BA=2AB
                    `}
                            />

                            <BlockMath math="BA=AB" />

                            <p className="leading-8 text-gray-300">
                                를 얻을 수 있습니다.
                            </p>

                        </div>

                        {/* 조건 2 */}
                        <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                            <p className="font-semibold text-purple-300">
                                경우 2. <InlineMath math="AB=BA" />라는 조건이 주어진 경우
                            </p>

                            <p className="mt-3 leading-8 text-gray-300">
                                문제에서 두 행렬의 곱이 서로 교환된다고 직접 알려 준
                                경우에는 수의 곱셈공식과 같은 형태로 계산할 수 있습니다.
                            </p>

                        </div>

                        {/* 조건 3 */}
                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                            <p className="font-semibold text-yellow-300">
                                경우 3. 단위행렬과 곱하는 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        AE=EA=A
                    `}
                            />

                            <p className="leading-8 text-gray-300">
                                단위행렬은 어느 쪽에서 곱해도 행렬{" "}
                                <InlineMath math="A" />가 그대로이므로{" "}
                                <InlineMath math="A" />와 곱셈의 교환법칙이 성립합니다.
                            </p>

                        </div>

                    </div>

                </div>

                {/* pA+qB=rE */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        5. <InlineMath math="pA+qB=rE" /> 꼴의 조건
                    </h3>

                    <p className="leading-8 text-gray-300">
                        두 행렬 <InlineMath math="A,\ B" />와 실수{" "}
                        <InlineMath math="p,\ q,\ r" />에 대하여
                    </p>

                    <BlockMath
                        math={String.raw`
                pA+qB=rE
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        가 성립하고 <InlineMath math="p\ne0,\ q\ne0" />이면{" "}
                        <InlineMath math="AB=BA" />임을 확인할 수 있습니다.
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                양변의 왼쪽에 <InlineMath math="B" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        B(pA+qB)=B(rE)
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        pBA+qB^2=rB
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="font-semibold text-white">
                                양변의 오른쪽에 <InlineMath math="B" />를 곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                        (pA+qB)B=(rE)B
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        pAB+qB^2=rB
                    `}
                            />

                        </div>

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        두 등식의 오른쪽이 같으므로
                    </p>

                    <BlockMath
                        math={String.raw`
                pBA+qB^2=pAB+qB^2
            `}
                    />

                    <BlockMath
                        math={String.raw`
                pBA=pAB
            `}
                    />

                    <BlockMath
                        math={String.raw`
                \boxed{AB=BA}
            `}
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            더 간단한 해석
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="q\ne0" />이므로 주어진 식을{" "}
                            <InlineMath math="B" />에 대하여 정리하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    B=-\frac{p}{q}A+\frac{r}{q}E
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 즉, <InlineMath math="B" />가{" "}
                            <InlineMath math="A" />와 단위행렬의 실수배와 합으로
                            나타나므로 <InlineMath math="A" />와{" "}
                            <InlineMath math="B" />의 곱은 서로 교환됩니다.
                        </p>

                    </div>

                </div>

                {/* 주의 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        6. 조건을 사용할 때의 주의
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음과 같은 등식이 주어졌다는 사실만으로는 일반적으로
                        <InlineMath math="AB=BA" />라고 할 수 없습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                pAB+qA+rB+sE=O
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이 식에는 이미 <InlineMath math="AB" />가 들어 있으므로,
                        식 하나만으로 곱의 순서를 바꾼{" "}
                        <InlineMath math="BA" />와 같다고 결론 내릴 수 없습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <p className="font-semibold text-white">
                            반례
                        </p>

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&0\\
                    0&0
                    \end{pmatrix},
                    \qquad
                    B=
                    \begin{pmatrix}
                    0&1\\
                    0&0
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    AB=B
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            따라서 <InlineMath math="AB-B=O" />가 성립하지만
                        </p>

                        <BlockMath
                            math={String.raw`
                    BA=
                    \begin{pmatrix}
                    0&0\\
                    0&0
                    \end{pmatrix}
                    \ne
                    B=AB
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            판단 기준
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            곱셈공식을 사용하기 전에는 반드시 문제의 조건으로부터{" "}
                            <InlineMath math="AB=BA" />를 실제로 확인해야 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \text{곱셈공식을 사용하기 전에 }
                    AB=BA
                    \text{인지 확인한다}
                    }
                `}
                        />

                    </div>

                </div>

                {/* 7. AB=BA를 사용할 수 있는 경우 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h2 className="mb-6 text-xl font-bold text-emerald-300">
                        7. <InlineMath math="AB=BA" />를 사용할 수 있는 경우
                    </h2>

                    <p className="leading-8 text-gray-300">
                        다음과 같은 경우에는 행렬의 곱셈에서
                        <InlineMath math="AB=BA" />를 사용할 수 있습니다.
                    </p>

                    <div className="mt-8 space-y-6">

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h3 className="mb-3 text-xl font-bold text-yellow-300">
                                ① 문제의 조건에 <InlineMath math="AB=BA" />가 주어진 경우
                            </h3>

                            <BlockMath math="AB=BA" />

                            <p className="leading-8 text-gray-300">
                                가장 직접적인 경우입니다.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h3 className="mb-3 text-xl font-bold text-yellow-300">
                                ② 곱셈공식이나 인수분해 공식이 성립한다고 주어진 경우
                            </h3>

                            <BlockMath math="(A+B)(A-B)=A^2-B^2" />

                            <p className="leading-8 text-gray-300">
                                일반적으로 전개하면
                            </p>

                            <BlockMath
                                math={String.raw`
A^2-AB+BA-B^2=A^2-B^2
`}
                            />

                            <p className="leading-8 text-gray-300">
                                이므로
                            </p>

                            <BlockMath math="AB=BA" />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">
                            <h3 className="mb-3 text-xl font-bold text-yellow-300">
                                ③ 단위행렬과의 곱셈
                            </h3>

                            <BlockMath
                                math={String.raw`
AE=EA=A
`}
                            />

                            <p className="leading-8 text-gray-300">
                                단위행렬은 항상 교환법칙이 성립합니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-950/30 p-6">

                        <h3 className="mb-3 text-xl font-bold text-cyan-300">
                            문제를 풀 때의 순서
                        </h3>

                        <ol className="list-decimal space-y-2 pl-6 leading-8 text-gray-300">
                            <li>먼저 문제의 조건을 확인한다.</li>
                            <li>
                                조건으로부터
                                <InlineMath math="AB=BA" />
                                를 확인할 수 있는지 판단한다.
                            </li>
                            <li>
                                확인된 경우에만 곱셈공식이나 인수분해 공식을 사용한다.
                            </li>
                            <li>
                                확인되지 않으면 일반적인 전개식을 사용한다.
                            </li>
                        </ol>

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
                            이차정사각행렬 <InlineMath math="X,\ Y" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                X+Y=
                \begin{pmatrix}
                3&-1\\
                -1&3
                \end{pmatrix},
                \qquad
                X-Y=
                \begin{pmatrix}
                -1&1\\
                1&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 성립할 때,{" "}
                            <InlineMath math="X^2-Y^2" />
                            를 나타내는 행렬을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 풀이 방향 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    풀이 방향
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬에서는 일반적으로 곱셈의 교환법칙이 성립하지 않습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    이 문제에는{" "}
                                    <InlineMath math="XY=YX" />라는 조건이나
                                    곱셈의 교환법칙이 성립한다는 조건이 없으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
            X^2-Y^2=(X+Y)(X-Y)
        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 사용할 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서 행렬 <InlineMath math="X" />와{" "}
                                    <InlineMath math="Y" />를 각각 구한 뒤,{" "}
                                    <InlineMath math="X^2-Y^2" />를 직접 계산해야 합니다.
                                </p>

                            </div>

                            {/* X, Y 구하기 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬 <InlineMath math="X,\ Y" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    두 행렬의 등식을 더하면
                                </p>

                                <BlockMath
                                    math={String.raw`
            \begin{aligned}
            2X
            &=(X+Y)+(X-Y)\\
            &=
            \begin{pmatrix}
            3&-1\\
            -1&3
            \end{pmatrix}
            +
            \begin{pmatrix}
            -1&1\\
            1&1
            \end{pmatrix}\\
            &=
            \begin{pmatrix}
            2&0\\
            0&4
            \end{pmatrix}
            \end{aligned}
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            X=
            \begin{pmatrix}
            1&0\\
            0&2
            \end{pmatrix}
        `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 행렬의 등식을 빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
            \begin{aligned}
            2Y
            &=(X+Y)-(X-Y)\\
            &=
            \begin{pmatrix}
            3&-1\\
            -1&3
            \end{pmatrix}
            -
            \begin{pmatrix}
            -1&1\\
            1&1
            \end{pmatrix}\\
            &=
            \begin{pmatrix}
            4&-2\\
            -2&2
            \end{pmatrix}
            \end{aligned}
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            Y=
            \begin{pmatrix}
            2&-1\\
            -1&1
            \end{pmatrix}
        `}
                                />

                            </div>

                            {/* 직접 계산 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="X^2-Y^2" /> 직접 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
            X^2=
            \begin{pmatrix}
            1&0\\
            0&4
            \end{pmatrix}
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            Y^2=
            \begin{pmatrix}
            5&-3\\
            -3&2
            \end{pmatrix}
        `}
                                />

                                <BlockMath
                                    math={String.raw`
            \begin{aligned}
            X^2-Y^2
            &=
            \begin{pmatrix}
            1&0\\
            0&4
            \end{pmatrix}
            -
            \begin{pmatrix}
            5&-3\\
            -3&2
            \end{pmatrix}\\[6pt]
            &=
            \begin{pmatrix}
            -4&3\\
            3&2
            \end{pmatrix}
            \end{aligned}
        `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \begin{pmatrix}
                        -4&3\\
                        3&2
                        \end{pmatrix}
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
                            이차정사각행렬 <InlineMath math="A,\ B" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                (A-B)^2=
                \begin{pmatrix}
                5&3\\
                3&2
                \end{pmatrix},
                \qquad
                A^2+B^2=
                \begin{pmatrix}
                4&0\\
                1&3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족할 때,{" "}
                            <InlineMath math="(A+B)^2" />의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 풀이 방향 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    풀이 방향
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이 문제에는{" "}
                                    <InlineMath math="AB=BA" />라는 조건이나
                                    곱셈공식이 성립한다는 조건이 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2=A^2+2AB+B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    와 같은 곱셈공식을 사용할 수 없습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    먼저 일반적인 전개식을 이용합니다.
                                </p>

                            </div>

                            {/* 일반적인 전개 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 일반적인 전개식 이용
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2
                        =
                        A^2-AB-BA+B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB+BA
                        =
                        A^2+B^2-(A-B)^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        \begin{pmatrix}
                        4&0\\
                        1&3
                        \end{pmatrix}
                        -
                        \begin{pmatrix}
                        5&3\\
                        3&2
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        -1&-3\\
                        -2&1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* (A+B)^2 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="(A+B)^2" /> 계산
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2
                        =
                        A^2+AB+BA+B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        (A^2+B^2)
                        +(AB+BA)
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        \begin{pmatrix}
                        4&0\\
                        1&3
                        \end{pmatrix}
                        +
                        \begin{pmatrix}
                        -1&-3\\
                        -2&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        3&-3\\
                        -1&4
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 모든 성분의 합
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        3+(-3)+(-1)+4=3
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{3}
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
                            이차정사각행렬{" "}
                            <InlineMath math="A,\ B,\ X,\ Y" />에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                X+Y=A,
                \qquad
                X-Y=B
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, 다음은{" "}
                            <InlineMath math="X^2+Y^2" />을{" "}
                            <InlineMath math="A,\ B" />로 나타내는 과정이다.
                        </p>

                        <div className="mt-5 rounded-xl bg-black/40 p-5">

                            <p className="text-center leading-8 text-gray-300">
                                두 식의 양변을 각각 제곱하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    (X+Y)^2=A^2
                    \qquad\cdots\text{㉠}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    (X-Y)^2=B^2
                    \qquad\cdots\text{㉡}
                `}
                            />

                            <p className="mt-5 text-center leading-8 text-gray-300">
                                위의 식을 각각 전개하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    X^2+Y^2+2XY=A^2
                    \qquad\cdots\text{㉢}
                `}
                            />

                            <BlockMath
                                math={String.raw`
                    X^2+Y^2-2XY=B^2
                    \qquad\cdots\text{㉣}
                `}
                            />

                            <p className="mt-5 text-center leading-8 text-gray-300">
                                ㉢과 ㉣을 더하면
                            </p>

                            <BlockMath
                                math={String.raw`
                    2(X^2+Y^2)=A^2+B^2
                    \qquad\cdots\text{㉤}
                `}
                            />

                            <p className="mt-5 text-center leading-8 text-gray-300">
                                따라서
                            </p>

                            <BlockMath
                                math={String.raw`
                    X^2+Y^2
                    =
                    \frac12(A^2+B^2)
                    \qquad\cdots\text{㉥}
                `}
                            />

                        </div>

                        <p className="mt-5 leading-8 text-gray-300">
                            위의 계산 과정 중에서 최초로 잘못된 곳을 고르시오.
                        </p>

                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            {[
                                ["①", "㉠"],
                                ["②", "㉡"],
                                ["③", "㉢"],
                                ["④", "㉤"],
                                ["⑤", "㉥"],
                            ].map(([number, step]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 text-gray-300">{number}</span>
                                    <span className="font-semibold text-white">{step}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* ㉠, ㉡ 확인 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. ㉠과 ㉡ 확인
                                </h4>

                                <p className="leading-8">
                                    주어진 등식{" "}
                                    <InlineMath math="X+Y=A" />와{" "}
                                    <InlineMath math="X-Y=B" />의 양변을 각각 제곱한
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (X+Y)^2=A^2,
                        \qquad
                        (X-Y)^2=B^2
                    `}
                                />

                                <p className="leading-8">
                                    는 옳습니다.
                                </p>

                            </div>

                            {/* 최초의 오류 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    2. ㉢의 전개 확인
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈에서는 일반적으로 교환법칙이 성립하지 않으므로{" "}
                                    <InlineMath math="XY" />와{" "}
                                    <InlineMath math="YX" />를 같은 항으로 볼 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (X+Y)^2
                        &=(X+Y)(X+Y)\\
                        &=X^2+XY+YX+Y^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        X^2+Y^2+2XY=A^2
                    `}
                                />

                                <p className="leading-8">
                                    로 전개한 ㉢이 최초로 잘못된 곳입니다.
                                </p>

                            </div>

                            {/* 올바른 전개 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    3. 올바르게 전개하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        X^2+XY+YX+Y^2=A^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        X^2-XY-YX+Y^2=B^2
                    `}
                                />

                                <p className="leading-8">
                                    두 식을 더하면 가운데 항이 소거되어
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2X^2+2Y^2=A^2+B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        X^2+Y^2
                        =
                        \frac12(A^2+B^2)
                    `}
                                />

                                <p className="leading-8">
                                    가 됩니다.
                                </p>

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    이 문제에서는 최종 결과는 맞지만, 중간 전개에서
                                    교환법칙이 성립한다고 가정한 부분이 잘못되었습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        (X+Y)^2
                        =
                        X^2+XY+YX+Y^2
                        }
                    `}
                                />

                                <p className="leading-8">
                                    <InlineMath math="XY=YX" />라는 조건이 없으면{" "}
                                    <InlineMath math="XY+YX" />를{" "}
                                    <InlineMath math="2XY" />로 바꾸면 안 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    따라서 최초로 잘못된 곳은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③ ㉢}}
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
                            이차정사각행렬 <InlineMath math="X,\ Y" />에 대하여 연산{" "}
                            <InlineMath math="\odot" />을
                        </p>

                        <BlockMath
                            math={String.raw`
                X\odot Y=XY+YX
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 정의하자. 연산 <InlineMath math="\odot" />에 대한 성질로
                            항상 옳은 것을 &lt;보기&gt;에서 모두 고른 것을 고르시오.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="A,\ B,\ C" />는 이차정사각행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/15 bg-black/40 p-5">

                            <p className="mb-5 text-center font-bold text-white">
                                &lt;보기&gt;
                            </p>

                            <div className="space-y-4 leading-8 text-gray-300">

                                <p>
                                    ㄱ. <InlineMath math="A\odot B=B\odot A" />
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="pA\odot qB=pq(A\odot B)" />
                                    <span className="ml-2 text-gray-400">
                                        (단, <InlineMath math="p,\ q" />는 실수이다.)
                                    </span>
                                </p>

                                <p>
                                    ㄷ.{" "}
                                    <InlineMath
                                        math="(A+B)\odot C=(A\odot C)+(B\odot C)"
                                    />
                                </p>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-5 grid gap-3 sm:grid-cols-5">

                            {[
                                ["①", "ㄱ"],
                                ["②", "ㄷ"],
                                ["③", "ㄱ, ㄴ"],
                                ["④", "ㄴ, ㄷ"],
                                ["⑤", "ㄱ, ㄴ, ㄷ"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 text-gray-300">{number}</span>
                                    <span className="font-semibold text-white">{choice}</span>
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 연산의 정의 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    연산의 정의
                                </h4>

                                <p className="leading-8">
                                    새로운 연산에 관한 성질은 주어진 정의에
                                    각 식을 직접 대입하여 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        X\odot Y=XY+YX
                    `}
                                />

                            </div>

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    ㄱ. <InlineMath math="A\odot B=B\odot A" />
                                </h4>

                                <p className="leading-8">
                                    연산의 정의에 따라
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A\odot B=AB+BA
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        B\odot A=BA+AB
                    `}
                                />

                                <p className="leading-8">
                                    행렬의 덧셈에는 교환법칙이 성립하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB+BA=BA+AB
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 ㄱ은 옳습니다.
                                </p>

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    ㄴ. <InlineMath math="pA\odot qB=pq(A\odot B)" />
                                </h4>

                                <p className="leading-8">
                                    연산의 정의에 따라
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        pA\odot qB
                        &=(pA)(qB)+(qB)(pA)\\
                        &=pqAB+pqBA\\
                        &=pq(AB+BA)\\
                        &=pq(A\odot B)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    따라서 ㄴ은 옳습니다.
                                </p>

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    ㄷ.{" "}
                                    <InlineMath
                                        math="(A+B)\odot C=(A\odot C)+(B\odot C)"
                                    />
                                </h4>

                                <p className="leading-8">
                                    왼쪽 식을 연산의 정의에 따라 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A+B)\odot C
                        &=(A+B)C+C(A+B)\\
                        &=AC+BC+CA+CB
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    한편 오른쪽 식은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A\odot C)+(B\odot C)
                        &=(AC+CA)+(BC+CB)\\
                        &=AC+CA+BC+CB
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    행렬의 덧셈에서는 항의 순서를 바꿀 수 있으므로
                                    두 결과는 같습니다. 따라서 ㄷ은 옳습니다.
                                </p>

                            </div>

                            {/* 주의 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    주의
                                </h4>

                                <p className="leading-8">
                                    ㄱ이 성립하는 것은 행렬의 곱셈에서{" "}
                                    <InlineMath math="AB=BA" />이기 때문이 아닙니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    연산의 정의에{" "}
                                    <InlineMath math="AB" />와{" "}
                                    <InlineMath math="BA" />가 모두 들어 있고,
                                    행렬의 덧셈에서는 교환법칙이 성립하기 때문입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB+BA=BA+AB
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    새롭게 정의된 연산의 성질은 익숙한 연산처럼
                                    추측하지 않고, 정의에 직접 대입하여 확인합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{새로운 연산}
                        \quad\Longrightarrow\quad
                        \text{정의에 직접 대입}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <p className="font-bold text-green-300">
                                    ㄱ, ㄴ, ㄷ이 모두 옳으므로 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{⑤ ㄱ, ㄴ, ㄷ}}
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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&1\\
                0&-1
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                1&-1\\
                b&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                (A+B)(A-B)=A^2-B^2
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, <InlineMath math="a+b" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="a,\ b" />는 상수이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 교환법칙 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 조건에서 교환법칙 찾기
                                </h4>

                                <p className="leading-8">
                                    행렬의 곱셈에서 왼쪽 식을 일반적으로 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A+B)(A-B)
                        &=A^2-AB+BA-B^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8">
                                    그런데 문제의 조건에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-AB+BA-B^2=A^2-B^2
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -AB+BA=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{AB=BA}
                    `}
                                />

                            </div>

                            {/* AB와 BA */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="AB=BA" /> 이용하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        AB=
                        \begin{pmatrix}
                        a+b&-a+1\\
                        -b&-1
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        BA=
                        \begin{pmatrix}
                        a&2\\
                        ab&b-1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    대응하는 성분끼리 비교합니다.
                                </p>

                                <p className="mt-4 font-semibold text-white">
                                    <InlineMath math="(1,1)" />성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a+b=a
                    `}
                                />

                                <BlockMath math="b=0" />

                                <p className="mt-4 font-semibold text-white">
                                    <InlineMath math="(1,2)" />성분
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -a+1=2
                    `}
                                />

                                <BlockMath math="a=-1" />

                            </div>

                            {/* 계산 요령 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    조건에서 인수분해 공식이 성립한다고 주어졌으므로,
                                    먼저 일반적인 전개식과 비교하여{" "}
                                    <InlineMath math="AB=BA" />를 얻습니다.
                                </p>

                                <p className="mt-3 leading-8">
                                    이후에는 <InlineMath math="AB" />와{" "}
                                    <InlineMath math="BA" />의 모든 성분을 연립할 필요 없이,{" "}
                                    <InlineMath math="a,\ b" />를 바로 구할 수 있는
                                    성분만 비교하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{인수분해 공식이 성립}
                        \quad\Longrightarrow\quad
                        AB=BA
                        }
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
                        a+b=-1+0
                    `}
                                />

                                <BlockMath math="\boxed{-1}" />

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
                            두 실수 <InlineMath math="x,\ y" />에 대하여 두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                -1&x\\
                3&0
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                -2&1\\
                y&-1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가
                        </p>

                        <BlockMath
                            math={String.raw`
                (A+B)(A-B)=A^2-B^2
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족할 때,{" "}
                            <InlineMath math="x^2+y^2" />
                            의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 교환법칙 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 조건에서 교환법칙 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    조건에서 인수분해 공식이 성립하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)(A-B)=A^2-B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 일반적으로 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-AB+BA-B^2=A^2-B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        BA-AB=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{AB=BA}
                    `}
                                />

                            </div>

                            {/* AB=BA */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 필요한 성분만 비교하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        AB=
                        \begin{pmatrix}
                        2+xy&-1-x\\
                        -6&3
                        \end{pmatrix}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        BA=
                        \begin{pmatrix}
                        5&-2x\\
                        -y-3&xy
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="(1,2)" /> 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -1-x=-2x
                    `}
                                />

                                <BlockMath
                                    math="x=1"
                                />

                                <p className="mt-4 leading-8 text-gray-300">
                                    <InlineMath math="(2,1)" /> 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -6=-y-3
                    `}
                                />

                                <BlockMath
                                    math="y=3"
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="x^2+y^2" /> 계산
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        x^2+y^2
                        =
                        1^2+3^2
                        =
                        10
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{10}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    조건에서 인수분해 공식이 성립하므로 먼저{" "}
                                    <InlineMath math="AB=BA" />를 얻습니다.
                                </p>

                                <p className="leading-8 text-gray-300">
                                    이후에는 모든 성분을 비교할 필요 없이{" "}
                                    필요한 성분만 비교하면 빠르게
                                    <InlineMath math="x,\ y" />를 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \text{인수분해 공식}
                        \Longrightarrow
                        AB=BA
                        \Longrightarrow
                        \text{필요한 성분만 비교}
                        }
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        핵심 정리
                    </h3>

                    <div className="rounded-xl bg-black/40 p-5">

                        <div className="space-y-3 leading-8 text-gray-300">

                            <p>
                                ① 단위행렬은 수의{" "}
                                <InlineMath math="1" />과 같은 역할을 하며{" "}
                                <InlineMath math="AE=EA=A" />입니다.
                            </p>

                            <p>
                                ② 행렬의 곱셈에서는 일반적으로
                                <InlineMath math="AB\ne BA" />입니다.
                            </p>

                            <p>
                                ③ 따라서 곱셈공식과 인수분해 공식을 사용하기 전에
                                교환법칙의 성립 여부를 확인해야 합니다.
                            </p>

                            <p>
                                ④ <InlineMath math="AB=BA" />이면 수에서 사용하던
                                곱셈공식을 같은 형태로 사용할 수 있습니다.
                            </p>

                            <p>
                                ⑤ <InlineMath math="pA+qB=rE" />이고{" "}
                                <InlineMath math="p\ne0,\ q\ne0" />이면{" "}
                                <InlineMath math="AB=BA" />입니다.
                            </p>

                        </div>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    AB=BA
                    \quad\Longrightarrow\quad
                    \begin{aligned}
                    (A+B)^2&=A^2+2AB+B^2,\\
                    (A-B)^2&=A^2-2AB+B^2,\\
                    (A+B)(A-B)&=A^2-B^2
                    \end{aligned}
                    }
                `}
                        />

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.6 이차정사각행렬의 거듭제곱과 케일리–해밀턴 정리
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    이차정사각행렬은 자기 자신의 성분으로 만들어진 이차식을
                    만족합니다. 이 식을 이용하면 높은 거듭제곱을{" "}
                    <InlineMath math="A" />와 <InlineMath math="E" />를 이용한
                    간단한 식으로 바꿀 수 있습니다.
                </p>

                {/* 케일리-해밀턴 정리 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 이차정사각행렬의 케일리–해밀턴 정리
                    </h3>

                    <p className="leading-8 text-gray-300">
                        이차정사각행렬
                    </p>

                    <BlockMath
                        math={String.raw`
                A=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        에 대하여 다음 등식이 성립합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    A^2-(a+d)A+(ad-bc)E=O
                    }
                `}
                        />

                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="a+d" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                주대각선 위에 있는 두 성분의 합입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        a+d
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">

                            <p className="font-semibold text-white">
                                <InlineMath math="ad-bc" />
                            </p>

                            <p className="mt-2 leading-8 text-gray-300">
                                주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                뺀 값입니다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        ad-bc
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            마지막 항은 수{" "}
                            <InlineMath math="ad-bc" />만 쓰는 것이 아니라
                            반드시 단위행렬 <InlineMath math="E" />를 곱하여
                        </p>

                        <BlockMath
                            math={String.raw`
                    (ad-bc)E
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            로 나타내야 합니다.
                        </p>

                    </div>

                </div>

                {/* 직접 확인 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 케일리–해밀턴 정리의 확인
                    </h3>

                    <p className="leading-8 text-gray-300">
                        먼저
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
                =
                \begin{pmatrix}
                a^2+bc&ab+bd\\
                ac+cd&bc+d^2
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이고
                    </p>

                    <BlockMath
                        math={String.raw`
                (a+d)A=
                \begin{pmatrix}
                a^2+ad&ab+bd\\
                ac+cd&ad+d^2
                \end{pmatrix}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                A^2-(a+d)A
                &=
                \begin{pmatrix}
                bc-ad&0\\
                0&bc-ad
                \end{pmatrix}\\[6pt]
                &=-(ad-bc)E
                \end{aligned}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        따라서
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2-(a+d)A+(ad-bc)E=O
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        가 성립합니다.
                    </p>

                </div>

                {/* 거듭제곱 추론 */}
                <div className="mt-8 rounded-xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-green-300">
                        3. 거듭제곱을 추론하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        케일리–해밀턴 정리로 얻은 이차식을 이용하면{" "}
                        <InlineMath math="A^2" />을{" "}
                        <InlineMath math="A" />와{" "}
                        <InlineMath math="E" />를 이용한 식으로 바꿀 수 있습니다.
                    </p>

                    <p className="mt-3 leading-8 text-gray-300">
                        이후 양변에 계속 <InlineMath math="A" />를 곱하면{" "}
                        <InlineMath math="A^3,\ A^4,\ A^5,\ldots" />의 규칙을
                        찾을 수 있습니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    A^2
                    =
                    (a+d)A-(ad-bc)E
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    A^3
                    =
                    (a+d)A^2-(ad-bc)A
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            높은 거듭제곱을 계속 낮은 차수의 식으로 바꾸어 계산합니다.
                        </p>

                    </div>

                </div>

                {/* A²-kA=O */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        4. <InlineMath math="A^2-kA=O" />인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주어진 식을 정리하면
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2=kA
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다. 양변에 계속 <InlineMath math="A" />를 곱하면
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                A^2&=kA,\\
                A^3&=kA^2=k^2A,\\
                A^4&=kA^3=k^3A
                \end{aligned}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 일반적으로
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                A^n=k^{\,n-1}A
                }
                \qquad(n\ge1)
            `}
                    />

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            계산의 핵심
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            <InlineMath math="A^2" />부터 모든 거듭제곱이
                            행렬 <InlineMath math="A" />의 실수배로 나타납니다.
                        </p>

                    </div>

                </div>

                {/* A²+E=O */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        5. <InlineMath math="A^2+E=O" />인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주어진 식을 정리하면
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2=-E
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다. 양변에 <InlineMath math="A" />를 계속 곱하면
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                A^2&=-E,\\
                A^3&=-A,\\
                A^4&=E,\\
                A^5&=A
                \end{aligned}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        가 되어 지수가 4씩 반복됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{array}{c|c}
                    n\text{을 }4\text{로 나눈 나머지}
                    &A^n\\ \hline
                    0&E\\
                    1&A\\
                    2&-E\\
                    3&-A
                    \end{array}
                    }
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        또한
                    </p>

                    <BlockMath
                        math={String.raw`
                A+A^2+A^3+A^4
                =
                A-E-A+E
                =
                O
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 지수가 연속인 네 거듭제곱의 합은 항상
                        영행렬입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                A^m+A^{m+1}+A^{m+2}+A^{m+3}=O
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                        <p className="font-semibold text-purple-300">
                            복소수와의 연결
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이는 허수단위 <InlineMath math="i" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                    i^2=-1,\qquad i^4=1
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족하는 것과 같은 형태입니다.
                        </p>

                    </div>

                </div>

                {/* A²+A+E=O */}
                <div className="mt-8 rounded-xl border border-indigo-500/30 bg-indigo-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-indigo-300">
                        6. <InlineMath math="A^2+A+E=O" />인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주어진 식에서
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2+A+E=O
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 양변에 <InlineMath math="A-E" />를 곱하면
                    </p>

                    <BlockMath
                        math={String.raw`
                (A^2+A+E)(A-E)=O
            `}
                    />

                    <BlockMath
                        math={String.raw`
                A^3-E=O
            `}
                    />

                    <BlockMath
                        math={String.raw`
                A^3=E
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서 지수가 3씩 반복됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{array}{c|c}
                    n\text{을 }3\text{으로 나눈 나머지}
                    &A^n\\ \hline
                    0&E\\
                    1&A\\
                    2&A^2
                    \end{array}
                    }
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        또한
                    </p>

                    <BlockMath
                        math={String.raw`
                A+A^2+A^3
                =
                A+A^2+E
                =
                O
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 지수가 연속인 세 거듭제곱의 합은 영행렬입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                A^m+A^{m+1}+A^{m+2}=O
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                        <p className="font-semibold text-purple-300">
                            복소수와의 연결
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이는 <InlineMath math="1" />의 세제곱근 중 허근{" "}
                            <InlineMath math="\omega" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                    \omega^2+\omega+1=0,
                    \qquad
                    \omega^3=1
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족하는 것과 같은 형태입니다.
                        </p>

                    </div>

                </div>

                {/* A²-A+E=O */}
                <div className="mt-8 rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-pink-300">
                        7. <InlineMath math="A^2-A+E=O" />인 경우
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주어진 식을 정리하면
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2=A-E
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이고, 양변에 <InlineMath math="A" />를 곱하면
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                A^3
                &=A^2-A\\
                &=(A-E)-A\\
                &=-E
                \end{aligned}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        입니다. 따라서
                    </p>

                    <BlockMath
                        math={String.raw`
                A^6=(-E)^2=E
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        가 되어 지수가 6씩 반복됩니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{array}{c|c}
                    n\text{을 }6\text{으로 나눈 나머지}
                    &A^n\\ \hline
                    0&E\\
                    1&A\\
                    2&A^2\\
                    3&-E\\
                    4&-A\\
                    5&-A^2
                    \end{array}
                    }
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        또한
                    </p>

                    <BlockMath
                        math={String.raw`
                \begin{aligned}
                &A+A^2+A^3+A^4+A^5+A^6\\
                &=
                A+A^2-E-A-A^2+E\\
                &=O
                \end{aligned}
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        이므로 지수가 연속인 여섯 거듭제곱의 합은 영행렬입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                A^m+A^{m+1}+A^{m+2}
                +A^{m+3}+A^{m+4}+A^{m+5}=O
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                        <p className="font-semibold text-purple-300">
                            복소수와의 연결
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            이는 이차방정식
                        </p>

                        <BlockMath
                            math={String.raw`
                    x^2-x+1=0
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 근이
                        </p>

                        <BlockMath
                            math={String.raw`
                    x^3=-1,\qquad x^6=1
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족하는 것과 같은 형태입니다.
                        </p>

                    </div>

                </div>

                {/* 나머지를 이용한 계산 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        8. 큰 지수의 거듭제곱을 계산하는 방법
                    </h3>

                    <p className="leading-8 text-gray-300">
                        거듭제곱이 일정한 주기로 반복되면 큰 지수를 주기로 나눈
                        나머지만 확인하면 됩니다.
                    </p>

                    <div className="mt-5 grid gap-5 lg:grid-cols-3">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="text-center font-semibold text-white">
                                주기가 4인 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        A^{826}
                        =
                        A^2
                        =
                        -E
                    `}
                            />

                            <p className="text-center leading-8 text-gray-400">
                                <InlineMath math="826" />을{" "}
                                <InlineMath math="4" />로 나눈 나머지는{" "}
                                <InlineMath math="2" />
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="text-center font-semibold text-white">
                                주기가 3인 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        A^{826}
                        =
                        A
                    `}
                            />

                            <p className="text-center leading-8 text-gray-400">
                                <InlineMath math="826" />을{" "}
                                <InlineMath math="3" />으로 나눈 나머지는{" "}
                                <InlineMath math="1" />
                            </p>

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="text-center font-semibold text-white">
                                주기가 6인 경우
                            </p>

                            <BlockMath
                                math={String.raw`
                        A^{826}
                        =
                        A^4
                        =
                        -A
                    `}
                            />

                            <p className="text-center leading-8 text-gray-400">
                                <InlineMath math="826" />을{" "}
                                <InlineMath math="6" />으로 나눈 나머지는{" "}
                                <InlineMath math="4" />
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                        <p className="font-semibold text-red-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            지수를 주기로 나눈 나머지가{" "}
                            <InlineMath math="0" />이면{" "}
                            <InlineMath math="A^0" />으로 바꾸는 것이 아니라,
                            한 주기의 마지막 거듭제곱인 단위행렬{" "}
                            <InlineMath math="E" />로 나타냅니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A^{4k}=E,\qquad
                    A^{3k}=E,\qquad
                    A^{6k}=E
                `}
                        />

                    </div>

                </div>

                {/* 연속된 거듭제곱의 합 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        9. 연속된 거듭제곱의 합
                    </h3>

                    <p className="leading-8 text-gray-300">
                        한 주기에 포함되는 거듭제곱의 합이 영행렬이면,
                        긴 합을 한 주기씩 묶어 빠르게 계산할 수 있습니다.
                    </p>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl bg-black/40 p-5">

                            <BlockMath
                                math={String.raw`
                        A^2+E=O
                        \quad\Longrightarrow\quad
                        A^m+A^{m+1}+A^{m+2}+A^{m+3}=O
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <BlockMath
                                math={String.raw`
                        A^2+A+E=O
                        \quad\Longrightarrow\quad
                        A^m+A^{m+1}+A^{m+2}=O
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <BlockMath
                                math={String.raw`
                        A^2-A+E=O
                    `}
                            />

                            <BlockMath
                                math={String.raw`
                        \Longrightarrow\quad
                        A^m+A^{m+1}+A^{m+2}
                        +A^{m+3}+A^{m+4}+A^{m+5}=O
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            계산 요령
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            거듭제곱의 합에서는 처음부터 각 항을 모두 계산하지 말고,
                            먼저 반복되는 주기의 길이를 확인하여 한 묶음씩
                            영행렬로 소거합니다.
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&3\\
                2&4
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2=xA+2E
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 실수 <InlineMath math="x" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8 text-gray-300">

                            {/* 케일리-해밀턴 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8">
                                    이차정사각행렬
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        a&b\\
                        c&d
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8">
                                    에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(a+d)A+(ad-bc)E=O
                    `}
                                />

                                <p className="leading-8">
                                    가 성립합니다.
                                </p>

                            </div>

                            {/* 값 대입 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 주대각선의 합과 대각선의 곱 계산하기
                                </h4>

                                <p className="leading-8">
                                    주대각선 위의 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+4=5
                    `}
                                />

                                <p className="leading-8">
                                    이고, 주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                    빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\cdot4-3\cdot2=-2
                    `}
                                />

                                <p className="leading-8">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-5A-2E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A^2=5A+2E
                    `}
                                />

                            </div>

                            {/* 계수 비교 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 계수 비교하기
                                </h4>

                                <p className="leading-8">
                                    문제에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2=xA+2E
                    `}
                                />

                                <p className="leading-8">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x=5
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8">
                                    행렬 <InlineMath math="A^2" />를 직접 곱하여 계산할 수도
                                    있지만, 이차정사각행렬에서는 케일리–해밀턴 정리를
                                    이용하면 주대각선의 합과 두 대각선의 곱만으로
                                    빠르게 식을 만들 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \begin{aligned}
                        \text{주대각선의 합}&=5,\\
                        \text{두 대각선의 곱의 차}&=-2
                        \end{aligned}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{x=5}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&-2\\
                5&b
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math="A^2=A"
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때,{" "}
                            <InlineMath math="a^2+b^2" />
                            의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이차정사각행렬이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(a+b)A+(ab+10)E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 성립합니다.
                                </p>

                            </div>

                            {/* 조건 대입 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 조건을 대입하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    문제에서
                                </p>

                                <BlockMath
                                    math="A^2=A"
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A-(a+b)A+(ab+10)E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (1-a-b)A+(ab+10)E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />와 단위행렬{" "}
                                    <InlineMath math="E" />는 서로 다른 행렬이므로
                                    각각의 계수가 모두 0이어야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        1-a-b=0\\
                        ab+10=0
                        \end{cases}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        a+b=1\\
                        ab=-10
                        \end{cases}
                    `}
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="a^2+b^2" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a^2+b^2
                        &=(a+b)^2-2ab\\
                        &=1^2-2(-10)\\
                        &=21
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬을 직접 제곱하여 성분을 비교하지 않아도,
                                    케일리–해밀턴 정리와{" "}
                                    <InlineMath math="A^2=A" />
                                    를 이용하면{" "}
                                    <InlineMath math="a+b" />와{" "}
                                    <InlineMath math="ab" />
                                    를 바로 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=A
                        \Longrightarrow
                        \begin{cases}
                        a+b=1\\
                        ab=-10
                        \end{cases}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{21}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                x&-1\\
                y&-3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2=E
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시킬 때,{" "}
                            <InlineMath math="x+y" />
                            의 값을 구하여라.
                            (단,{" "}
                            <InlineMath math="E" />
                            는 단위행렬이다.)
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    이차정사각행렬이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(x-3)A+(-3x+y)E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 성립합니다.
                                </p>

                            </div>

                            {/* 조건 대입 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 조건을 대입하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    문제에서
                                </p>

                                <BlockMath
                                    math="A^2=E"
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        E-(x-3)A+(-3x+y)E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (1-3x+y)E-(x-3)A=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    행렬{" "}
                                    <InlineMath math="A" />
                                    와{" "}
                                    <InlineMath math="E" />
                                    의 계수를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x-3=0\\
                        1-3x+y=0
                        \end{cases}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x=3\\
                        y=8
                        \end{cases}
                    `}
                                />

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="x+y" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        x+y
                        =
                        3+8
                        =
                        11
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬을 직접 제곱하여 성분을 비교할 필요 없이
                                    케일리–해밀턴 정리와{" "}
                                    <InlineMath math="A^2=E" />
                                    를 이용하면{" "}
                                    <InlineMath math="x" />,{" "}
                                    <InlineMath math="y" />
                                    를 바로 구할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=E
                        \Longrightarrow
                        \begin{cases}
                        x=3\\
                        y=8
                        \end{cases}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{11}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&2\\
                3&4
                \end{pmatrix},
                \qquad
                E=
                \begin{pmatrix}
                1&0\\
                0&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2-4A-2E
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            와 같은 행렬을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주대각선의 합은
                                </p>

                                <BlockMath
                                    math="1+4=5"
                                />

                                <p className="leading-8 text-gray-300">
                                    두 대각선의 곱의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\cdot4-2\cdot3=-2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-5A-2E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A^2=5A+2E
                    `}
                                />

                            </div>

                            {/* 대입 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 식에 대입하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2-4A-2E
                        &=(5A+2E)-4A-2E\\
                        &=A
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-green-300">
                                    정답
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2-4A-2E=A
                        }
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬을 직접 제곱하여 계산하지 말고,
                                    먼저 케일리–해밀턴 정리로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2=5A+2E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 만든 뒤 대입하면 계산이 한 줄로 끝납니다.
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&b\\
                -1&3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2-5A+4E=O
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족할 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A^3-5A^2+8A-2E
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 식 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 주어진 이차식으로 높은 거듭제곱 낮추기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 식에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2=5A-4E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 양변에 <InlineMath math="A" />를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^3
                        &=5A^2-4A
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 구하려는 식 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 구하려는 식을 간단히 정리하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^3-5A^2+8A-2E
                        &=(5A^2-4A)-5A^2+8A-2E\\
                        &=4A-2E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 행렬 <InlineMath math="A" />의 성분을 알아야
                                    모든 성분의 합을 구할 수 있습니다.
                                </p>

                            </div>

                            {/* a, b 구하기 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    3. 케일리–해밀턴 정리로{" "}
                                    <InlineMath math="a,\ b" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬{" "}
                                    <InlineMath math="A" />의 주대각선 성분의 합은{" "}
                                    <InlineMath math="a+3" />이고, 두 대각선 성분의 곱의
                                    차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        3a-b(-1)=3a+b
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(a+3)A+(3a+b)E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 주어진 식
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-5A+4E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    와 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a+3=5,
                        \qquad
                        3a+b=4
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a=2,
                        \qquad
                        b=-2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        2&-2\\
                        -1&3
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 최종 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    4. 모든 성분의 합 구하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        4A-2E
                        &=
                        4
                        \begin{pmatrix}
                        2&-2\\
                        -1&3
                        \end{pmatrix}
                        -
                        2
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        6&-8\\
                        -4&10
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        6-8-4+10=4
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    높은 거듭제곱을 직접 계산하지 않고, 주어진 이차식으로
                                    먼저 낮은 차수의 식으로 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=5A-4E
                        \quad\Longrightarrow\quad
                        A^3-5A^2+8A-2E=4A-2E
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 케일리–해밀턴 정리와 주어진 식의 계수를
                                    비교하여 행렬 <InlineMath math="A" />를 구합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서 모든 성분의 합은
                                </p>

                                <BlockMath math="\boxed{4}" />

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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&-1\\
                -1&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A+A^2+A^3+A^4+A^5=kA
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시키는 실수 <InlineMath math="k" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />의 주대각선 성분의 합은
                                </p>

                                <BlockMath math="1+1=2" />

                                <p className="leading-8 text-gray-300">
                                    이고, 두 대각선 성분의 곱의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\cdot1-(-1)(-1)=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-2A=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^2=2A}
                    `}
                                />

                            </div>

                            {/* 거듭제곱의 규칙 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 규칙 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^2=2A" />이므로 양변에{" "}
                                    <InlineMath math="A" />를 계속 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2&=2A,\\
                        A^3&=2A^2=2^2A=4A,\\
                        A^4&=2A^3=2^3A=8A,\\
                        A^5&=2A^4=2^4A=16A
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    일반적으로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^n=2^{\,n-1}A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 성립합니다.
                                </p>

                            </div>

                            {/* 합 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 거듭제곱의 합 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A+A^2+A^3+A^4+A^5
                        &=A+2A+4A+8A+16A\\
                        &=(1+2+4+8+16)A\\
                        &=31A
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    문제의 조건
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+A^2+A^3+A^4+A^5=kA
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    와 비교하면
                                </p>

                                <BlockMath math="k=31" />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬을 여러 번 직접 곱하지 않고, 케일리–해밀턴 정리에서
                                    얻은{" "}
                                    <InlineMath math="A^2=2A" />를 이용하여 모든 거듭제곱을{" "}
                                    <InlineMath math="A" />의 실수배로 바꿉니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=2A
                        \quad\Longrightarrow\quad
                        A^n=2^{\,n-1}A
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이후 계수{" "}
                                    <InlineMath math="1,\ 2,\ 4,\ 8,\ 16" />만 더하면 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{k=31}
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
                            이차방정식
                        </p>

                        <BlockMath
                            math={String.raw`
                x^2-5x-1=0
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 두 근을{" "}
                            <InlineMath math="\alpha,\ \beta" />
                            라 할 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                2&\alpha\\
                \beta&-2
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="A^5" />
                            와 같은 행렬을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 근과 계수 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 근과 계수의 관계 이용하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \alpha+\beta=5,\qquad
                        \alpha\beta=-1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 케일리 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주대각선의 합은
                                </p>

                                <BlockMath
                                    math="2+(-2)=0"
                                />

                                <p className="leading-8 text-gray-300">
                                    두 대각선 성분의 곱의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2(-2)-\alpha\beta
                        =-4-(-1)
                        =-3
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-3E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A^2=3E
                    `}
                                />

                            </div>

                            {/* 거듭제곱 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="A^5" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^5
                        &=A\left(A^2\right)^2\\
                        &=A(3E)^2\\
                        &=9AE\\
                        &=9A
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    먼저 근과 계수의 관계로{" "}
                                    <InlineMath math="\alpha\beta" />
                                    를 구한 뒤,
                                    케일리–해밀턴 정리로{" "}
                                    <InlineMath math="A^2=3E" />
                                    를 만듭니다.
                                    그러면 높은 거듭제곱을 쉽게 계산할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=3E
                        \Longrightarrow
                        A^{2n}=3^nE,\qquad
                        A^{2n+1}=3^nA
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^5=9A}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&-2\\
                1&-1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,{" "}
                            <InlineMath math="A^{2009}" />
                            를 구하여라.
                            (단,{" "}
                            <InlineMath math="O" />
                            는 영행렬,{" "}
                            <InlineMath math="E" />
                            는 단위행렬이다.)
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주대각선 성분의 합은
                                </p>

                                <BlockMath
                                    math="1+(-1)=0"
                                />

                                <p className="leading-8 text-gray-300">
                                    두 대각선 성분의 곱의 차는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1(-1)-(-2)(1)=1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A^2=-E
                    `}
                                />

                            </div>

                            {/* 주기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 주기 찾기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2&=-E\\
                        A^4&=E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 거듭제곱은 4를 주기로 반복됩니다.
                                </p>

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 큰 지수 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    2009를 4로 나누면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2009=4\times502+1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{2009}=A
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        =
                        \begin{pmatrix}
                        1&-2\\
                        1&-1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    케일리–해밀턴 정리로{" "}
                                    <InlineMath math="A^2=-E" />
                                    를 얻으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^4=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되어 거듭제곱이 4를 주기로 반복됩니다.
                                    따라서 큰 지수는 4로 나눈 나머지만 확인하면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{4k}=E,\quad
                        A^{4k+1}=A,\quad
                        A^{4k+2}=-E,\quad
                        A^{4k+3}=-A
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{2009}=
                        \begin{pmatrix}
                        1&-2\\
                        1&-1
                        \end{pmatrix}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                2&-1\\
                3&-2
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A^{2009}+A^{2010}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 간단히 하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />의 주대각선 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2+(-2)=0
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                    빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2(-2)-(-1)\cdot3
                        =
                        -4+3
                        =
                        -1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-0A-E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^2=E}
                    `}
                                />

                            </div>

                            {/* 주기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 규칙 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^2=E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{2n}=E,
                        \qquad
                        A^{2n+1}=A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 성립합니다. 즉, 거듭제곱은 지수의 홀짝에 따라
                                    반복됩니다.
                                </p>

                            </div>

                            {/* 큰 지수 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 큰 지수 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="2009" />는 홀수이고{" "}
                                    <InlineMath math="2010" />은 짝수이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{2009}=A,
                        \qquad
                        A^{2010}=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{2009}+A^{2010}=A+E
                    `}
                                />

                            </div>

                            {/* 행렬 계산 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    4. 행렬의 합 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A+E
                        &=
                        \begin{pmatrix}
                        2&-1\\
                        3&-2
                        \end{pmatrix}
                        +
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}
                        \\[8pt]
                        &=
                        \begin{pmatrix}
                        3&-1\\
                        3&-1
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    케일리–해밀턴 정리로{" "}
                                    <InlineMath math="A^2=E" />를 얻으면,
                                    높은 거듭제곱을 직접 계산할 필요가 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{2n}=E,
                        \qquad
                        A^{2n+1}=A
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 지수가 짝수인지 홀수인지만 확인하면 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{2009}+A^{2010}
                        =
                        \begin{pmatrix}
                        3&-1\\
                        3&-1
                        \end{pmatrix}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                0&1\\
                -1&0
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A+A^2+A^3+\cdots+A^{103}
                =
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 될 때,{" "}
                            <InlineMath math="a^2+b^2+c^2+d^2" />
                            의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />의 주대각선 성분의 합은
                                </p>

                                <BlockMath math="0+0=0" />

                                <p className="leading-8 text-gray-300">
                                    이고, 주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                    빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        0\cdot0-1\cdot(-1)=1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^2=-E}
                    `}
                                />

                            </div>

                            {/* 거듭제곱의 주기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 주기 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^2=-E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2&=-E,\\
                        A^3&=-A,\\
                        A^4&=E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 되어 거듭제곱은 4를 주기로 반복됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+A^2+A^3+A^4
                        =
                        A-E-A+E
                        =
                        O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 지수가 연속인 네 거듭제곱의 합은 영행렬입니다.
                                </p>

                            </div>

                            {/* 합 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 거듭제곱의 합 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="103" />개의 항을 4개씩 묶으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        103=4\cdot25+3
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 25개의 묶음은 모두 영행렬이 되고,
                                    마지막 세 항만 남습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A+A^2+A^3+\cdots+A^{103}
                        &=25O+A^{101}+A^{102}+A^{103}\\
                        &=A+A^2+A^3\\
                        &=A-E-A\\
                        &=-E
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -E=
                        \begin{pmatrix}
                        -1&0\\
                        0&-1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 성분 비교 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    4. 각 성분의 값 구하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        a&b\\
                        c&d
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        -1&0\\
                        0&-1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=-1,\qquad b=0,\qquad c=0,\qquad d=-1
                    `}
                                />

                            </div>

                            {/* 최종 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    5. <InlineMath math="a^2+b^2+c^2+d^2" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a^2+b^2+c^2+d^2
                        &=(-1)^2+0^2+0^2+(-1)^2\\
                        &=2
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    각 거듭제곱을 하나씩 계산하지 않고,{" "}
                                    <InlineMath math="A^2=-E" />에서 얻은 주기 4를 이용하여
                                    네 항씩 묶습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^m+A^{m+1}+A^{m+2}+A^{m+3}=O
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    전체 항의 개수를 주기로 나눈 나머지만 계산하면 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{2}
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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에서 <InlineMath math="a,\ d" />는 이차방정식{" "}
                            <InlineMath math="x^2+x-6=0" />의 두 근이고,{" "}
                            <InlineMath math="b,\ c" />는 이차방정식{" "}
                            <InlineMath math="x^2-8x-7=0" />의 두 근일 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A+A^2+\cdots+A^{10}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            의 모든 성분의 합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 근과 계수 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 근과 계수의 관계 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="a,\ d" />는 이차방정식{" "}
                                    <InlineMath math="x^2+x-6=0" />의 두 근이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a+d=-1,
                        \qquad
                        ad=-6
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-4 leading-8 text-gray-300">
                                    또한 <InlineMath math="b,\ c" />는 이차방정식{" "}
                                    <InlineMath math="x^2-8x-7=0" />의 두 근이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        b+c=8,
                        \qquad
                        bc=-7
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />의 주대각선 성분의 합은
                                </p>

                                <BlockMath math="a+d=-1" />

                                <p className="leading-8 text-gray-300">
                                    이고, 주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                    빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        ad-bc
                        =
                        -6-(-7)
                        =
                        1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(-1)A+E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^2+A+E=O}
                    `}
                                />

                            </div>

                            {/* 주기 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    3. 거듭제곱의 주기 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^2+A+E=O" />의 양변에{" "}
                                    <InlineMath math="A-E" />를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A^2+A+E)(A-E)=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        A^3-E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^3=E}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 거듭제곱은 3을 주기로 반복됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+A^2+A^3
                        =
                        A+A^2+E
                        =
                        O
                    `}
                                />

                            </div>

                            {/* 거듭제곱 합 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    4. 거듭제곱의 합 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    지수가 연속인 세 항씩 묶으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A+A^2+\cdots+A^{10}
                        &=
                        (A+A^2+A^3)\\
                        &\quad +(A^4+A^5+A^6)\\
                        &\quad +(A^7+A^8+A^9)+A^{10}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    각 묶음의 합은 영행렬이고,{" "}
                                    <InlineMath math="A^3=E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{10}
                        =
                        A^9A
                        =
                        (A^3)^3A
                        =
                        A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+A^2+\cdots+A^{10}=A
                    `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    5. 모든 성분의 합 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    구한 행렬은 <InlineMath math="A" />이므로 모든 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        a+b+c+d
                        &=(a+d)+(b+c)\\
                        &=-1+8\\
                        &=7
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    각 근의 값을 직접 구할 필요가 없습니다.
                                    근과 계수의 관계로{" "}
                                    <InlineMath math="a+d,\ ad,\ b+c,\ bc" />를 구하면
                                    케일리–해밀턴 식과 행렬의 모든 성분의 합을 모두
                                    계산할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \begin{gathered}
                        a+d=-1,\quad ad=-6,\\
                        b+c=8,\quad bc=-7\\[3pt]
                        \Downarrow\\[3pt]
                        A^2+A+E=O,\quad A^3=E
                        \end{gathered}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 모든 성분의 합은
                                </p>

                                <BlockMath math="\boxed{7}" />

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
                            이차정사각행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                -3&7\\
                -1&2
                \end{pmatrix},
                \qquad
                E=
                \begin{pmatrix}
                1&0\\
                0&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A^{100}+A^{200}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 간단히 하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 케일리-해밀턴 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 케일리–해밀턴 정리 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />의 주대각선 성분의 합은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        -3+2=-1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고, 주대각선 성분의 곱에서 다른 대각선 성분의 곱을
                                    빼면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (-3)\cdot2-7\cdot(-1)
                        =
                        -6+7
                        =
                        1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 케일리–해밀턴 정리에 의하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(-1)A+E=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^2+A+E=O}
                    `}
                                />

                            </div>

                            {/* 주기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 주기 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^2+A+E=O" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+A=-E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 양변에 <InlineMath math="A" />를 곱하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^3+A^2=-A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그런데 <InlineMath math="A^2+A=-E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{A^3=E}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서 거듭제곱은 3을 주기로 반복됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{3k}=E,\qquad
                        A^{3k+1}=A,\qquad
                        A^{3k+2}=A^2
                    `}
                                />

                            </div>

                            {/* 큰 지수 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 큰 지수 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        100=3\cdot33+1,
                        \qquad
                        200=3\cdot66+2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{100}=A,
                        \qquad
                        A^{200}=A^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{100}+A^{200}=A+A^2
                    `}
                                />

                            </div>

                            {/* 식 정리 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    4. 주어진 이차식 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    앞에서 구한
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+A+E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+A^2=-E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{100}+A^{200}=-E
                    `}
                                />

                            </div>

                            {/* 행렬 표현 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    5. 행렬로 나타내기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        -E
                        =
                        -
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        -1&0\\
                        0&-1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    케일리–해밀턴 정리에서{" "}
                                    <InlineMath math="A^2+A+E=O" />를 얻으면{" "}
                                    <InlineMath math="A^3=E" />이므로 거듭제곱이
                                    3을 주기로 반복됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        \begin{aligned}
                        A^{100}&=A,\\
                        A^{200}&=A^2,\\
                        A+A^2&=-E
                        \end{aligned}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{100}+A^{200}
                        =
                        -E
                        =
                        \begin{pmatrix}
                        -1&0\\
                        0&-1
                        \end{pmatrix}
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
                            이차정사각행렬 <InlineMath math="A" />가
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2+A+E=O,
                \qquad
                A
                \begin{pmatrix}
                1\\
                0
                \end{pmatrix}
                =
                A^3
                \begin{pmatrix}
                1\\
                1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족할 때,
                        </p>

                        <BlockMath
                            math={String.raw`
                A
                \begin{pmatrix}
                x\\
                y
                \end{pmatrix}
                =
                \begin{pmatrix}
                2\\
                3
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            을 만족시키는 실수 <InlineMath math="x,\ y" />에 대하여{" "}
                            <InlineMath math="x+y" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="E" />는 단위행렬이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* A^3 구하기 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. <InlineMath math="A^3" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 식
                                </p>

                                <BlockMath math="A^2+A+E=O" />

                                <p className="leading-8 text-gray-300">
                                    에서
                                </p>

                                <BlockMath math="A^2+A=-E" />

                                <p className="leading-8 text-gray-300">
                                    입니다. 양변에 <InlineMath math="A" />를 곱하면
                                </p>

                                <BlockMath math="A^3+A^2=-A" />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^3
                        &=-A-A^2\\
                        &=E
                        \end{aligned}
                    `}
                                />

                                <BlockMath math="\boxed{A^3=E}" />

                            </div>

                            {/* 첫 번째 열 구하기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 행렬 <InlineMath math="A" />의 첫 번째 열 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A^3=E" />이므로 주어진 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A
                        \begin{pmatrix}
                        1\\
                        0
                        \end{pmatrix}
                        &=
                        A^3
                        \begin{pmatrix}
                        1\\
                        1
                        \end{pmatrix}\\[6pt]
                        &=
                        E
                        \begin{pmatrix}
                        1\\
                        1
                        \end{pmatrix}\\[6pt]
                        &=
                        \begin{pmatrix}
                        1\\
                        1
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    행렬에
                                    <InlineMath
                                        math="\begin{pmatrix}1\\0\end{pmatrix}"
                                    />
                                    을 오른쪽에서 곱하면 행렬의 첫 번째 열이 나오므로,
                                    행렬 <InlineMath math="A" />를
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=
                        \begin{pmatrix}
                        1&a\\
                        1&b
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    로 놓을 수 있습니다.
                                </p>

                            </div>

                            {/* 케일리-해밀턴으로 A 구하기 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    3. 케일리–해밀턴 정리로 나머지 성분 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 식
                                </p>

                                <BlockMath math="A^2+A+E=O" />

                                <p className="leading-8 text-gray-300">
                                    와 케일리–해밀턴 정리
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-(\text{주대각선의 합})A
                        +(\text{두 대각선의 곱의 차})E=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \text{주대각선의 합}=-1,
                        \qquad
                        \text{두 대각선의 곱의 차}=1
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-4 font-semibold text-white">
                                    주대각선의 합
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1+b=-1
                    `}
                                />

                                <BlockMath math="b=-2" />

                                <p className="mt-4 font-semibold text-white">
                                    두 대각선의 곱의 차
                                </p>

                                <BlockMath
                                    math={String.raw`
                        1\cdot(-2)-a\cdot1=1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        -2-a=1
                    `}
                                />

                                <BlockMath math="a=-3" />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A=
                        \begin{pmatrix}
                        1&-3\\
                        1&-2
                        \end{pmatrix}
                        }
                    `}
                                />

                            </div>

                            {/* x, y 구하기 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    4. <InlineMath math="x,\ y" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 등식에 행렬 <InlineMath math="A" />를 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&-3\\
                        1&-2
                        \end{pmatrix}
                        \begin{pmatrix}
                        x\\
                        y
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        2\\
                        3
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{cases}
                        x-3y=2\\
                        x-2y=3
                        \end{cases}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 두 번째 식에서 첫 번째 식을 빼면
                                </p>

                                <BlockMath math="y=1" />

                                <p className="leading-8 text-gray-300">
                                    이고,
                                </p>

                                <BlockMath math="x=5" />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                            </div>

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    먼저{" "}
                                    <InlineMath math="A^2+A+E=O" />에서{" "}
                                    <InlineMath math="A^3=E" />를 얻습니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그다음{" "}
                                    <InlineMath
                                        math="A\begin{pmatrix}1\\0\end{pmatrix}"
                                    />
                                    은 행렬 <InlineMath math="A" />의 첫 번째 열이라는
                                    사실을 이용하고, 케일리–해밀턴 정리의 계수를 비교하여
                                    행렬 <InlineMath math="A" />를 완성합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2+A+E=O
                        \Longrightarrow
                        A^3=E
                        \Longrightarrow
                        \text{첫 번째 열과 나머지 성분 결정}
                        }
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+y=5+1=6
                    `}
                                />

                                <BlockMath math="\boxed{6}" />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-emerald-300">
                        핵심 정리
                    </h3>

                    <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                        <table className="mx-auto min-w-[700px] border-collapse text-center text-gray-300">

                            <thead>
                                <tr>
                                    <th className="border border-white/15 p-3 text-white">
                                        조건
                                    </th>
                                    <th className="border border-white/15 p-3 text-white">
                                        핵심 결과
                                    </th>
                                    <th className="border border-white/15 p-3 text-white">
                                        반복 주기
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^2-kA=O" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^n=k^{n-1}A" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        일정한 주기 없음
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^2+E=O" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^2=-E,\ A^4=E" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        4
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^2+A+E=O" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^3=E" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        3
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^2-A+E=O" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="A^3=-E,\ A^6=E" />
                                    </td>
                                    <td className="border border-white/15 p-3">
                                        6
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="mt-5 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                        <p className="font-semibold text-cyan-300">
                            문제를 푸는 순서
                        </p>

                        <div className="mt-3 space-y-2 leading-8 text-gray-300">

                            <p>
                                ① 행렬의 성분을 이용하여 케일리–해밀턴 식을 만든다.
                            </p>

                            <p>
                                ② 식을 <InlineMath math="A^2" />에 대하여 정리한다.
                            </p>

                            <p>
                                ③ 양변에 <InlineMath math="A" />를 계속 곱하여
                                거듭제곱의 규칙을 찾는다.
                            </p>

                            <p>
                                ④ 반복되는 주기가 있으면 지수를 그 주기로 나눈
                                나머지를 이용한다.
                            </p>

                            <p>
                                ⑤ 거듭제곱의 합은 한 주기씩 묶어 계산한다.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            <section className="mb-10 rounded-2xl border border-white/30 p-7">

                <h2 className="mb-2 text-3xl font-bold">
                    5.7 대각행렬과 삼각행렬
                </h2>

                <p className="mb-6 leading-8 text-gray-300">
                    행렬의 성분이 특별한 모양으로 배열되어 있으면 거듭제곱을
                    직접 여러 번 계산하지 않고도 규칙을 쉽게 찾을 수 있습니다.
                </p>

                {/* 대각행렬 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-blue-300">
                        1. 대각행렬
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주대각선 이외의 모든 성분이
                        <InlineMath math="0" />인 정사각행렬을
                        <span className="font-semibold text-white"> 대각행렬</span>이라고
                        합니다.
                    </p>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    a&0\\
                    0&b
                    \end{pmatrix}
                `}
                        />

                        <p className="text-center leading-8 text-gray-300">
                            주대각선 위에는 성분이 있고, 나머지 위치의 성분은 모두
                            <InlineMath math="0" />입니다.
                        </p>

                    </div>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">

                            <p className="mb-3 text-center font-semibold text-white">
                                대각행렬의 예
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{pmatrix}
                        2&0\\
                        0&-3
                        \end{pmatrix}
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/30 p-5">

                            <p className="mb-3 text-center font-semibold text-white">
                                대각행렬이 아닌 예
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{pmatrix}
                        2&1\\
                        0&-3
                        \end{pmatrix}
                    `}
                            />

                            <p className="text-center leading-8 text-gray-400">
                                주대각선 이외의 위치에
                                <InlineMath math="1" />이 있습니다.
                            </p>

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            단위행렬과 영행렬
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            단위행렬과 영행렬도 대각행렬입니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    E=
                    \begin{pmatrix}
                    1&0\\
                    0&1
                    \end{pmatrix},
                    \qquad
                    O=
                    \begin{pmatrix}
                    0&0\\
                    0&0
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 대각행렬의 거듭제곱 */}
                <div className="mt-8 rounded-xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-purple-300">
                        2. 대각행렬의 거듭제곱
                    </h3>

                    <p className="leading-8 text-gray-300">
                        대각행렬을 곱하면 주대각선에 있는 같은 위치의 성분끼리
                        곱해집니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                A=
                \begin{pmatrix}
                a&0\\
                0&b
                \end{pmatrix}
            `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    A^2
                    &=
                    \begin{pmatrix}
                    a&0\\
                    0&b
                    \end{pmatrix}
                    \begin{pmatrix}
                    a&0\\
                    0&b
                    \end{pmatrix}\\[6pt]
                    &=
                    \begin{pmatrix}
                    a^2&0\\
                    0&b^2
                    \end{pmatrix}
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    A^3=
                    \begin{pmatrix}
                    a^3&0\\
                    0&b^3
                    \end{pmatrix}
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 자연수 <InlineMath math="n" />에 대하여
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                \begin{pmatrix}
                a&0\\
                0&b
                \end{pmatrix}^{n}
                =
                \begin{pmatrix}
                a^n&0\\
                0&b^n
                \end{pmatrix}
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="font-semibold text-green-300">
                            예시
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    2&0\\
                    0&-1
                    \end{pmatrix}^{5}
                    =
                    \begin{pmatrix}
                    2^5&0\\
                    0&(-1)^5
                    \end{pmatrix}
                    =
                    \begin{pmatrix}
                    32&0\\
                    0&-1
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 삼각행렬 */}
                <div className="mt-8 rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-cyan-300">
                        3. 삼각행렬
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주대각선을 기준으로 한쪽에 있는 모든 성분이
                        <InlineMath math="0" />인 정사각행렬을
                        <span className="font-semibold text-white"> 삼각행렬</span>이라고
                        합니다.
                    </p>

                    <div className="mt-5 grid gap-5 md:grid-cols-2">

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="mb-3 text-center font-semibold text-white">
                                주대각선 아래가 모두 0인 행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{pmatrix}
                        a&b\\
                        0&d
                        \end{pmatrix}
                    `}
                            />

                        </div>

                        <div className="rounded-xl bg-black/40 p-5">

                            <p className="mb-3 text-center font-semibold text-white">
                                주대각선 위가 모두 0인 행렬
                            </p>

                            <BlockMath
                                math={String.raw`
                        \begin{pmatrix}
                        a&0\\
                        c&d
                        \end{pmatrix}
                    `}
                            />

                        </div>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            대각행렬과 삼각행렬의 관계
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            대각행렬은 주대각선의 위와 아래에 있는 성분이 모두
                            <InlineMath math="0" />이므로 삼각행렬의 한 종류이기도 합니다.
                        </p>

                    </div>

                </div>

                {/* 특별한 삼각행렬 1 */}
                <div className="mt-8 rounded-xl border border-orange-500/30 bg-orange-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-orange-300">
                        4. 주대각선이 모두 1인 삼각행렬의 거듭제곱
                    </h3>

                    <p className="leading-8 text-gray-300">
                        다음과 같이 주대각선의 성분이 모두
                        <InlineMath math="1" />이고, 주대각선 아래의 성분이
                        <InlineMath math="0" />인 행렬을 생각해 봅시다.
                    </p>

                    <BlockMath
                        math={String.raw`
                A=
                \begin{pmatrix}
                1&a\\
                0&1
                \end{pmatrix}
            `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    A^2
                    &=
                    \begin{pmatrix}
                    1&a\\
                    0&1
                    \end{pmatrix}
                    \begin{pmatrix}
                    1&a\\
                    0&1
                    \end{pmatrix}\\[6pt]
                    &=
                    \begin{pmatrix}
                    1&2a\\
                    0&1
                    \end{pmatrix}
                    \end{aligned}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    A^3=
                    \begin{pmatrix}
                    1&3a\\
                    0&1
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    A^4=
                    \begin{pmatrix}
                    1&4a\\
                    0&1
                    \end{pmatrix}
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        거듭제곱의 지수가 하나씩 증가할 때마다
                        <InlineMath math="(1,2)" /> 성분에
                        <InlineMath math="a" />가 하나씩 더해집니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                \begin{pmatrix}
                1&a\\
                0&1
                \end{pmatrix}^{n}
                =
                \begin{pmatrix}
                1&na\\
                0&1
                \end{pmatrix}
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="font-semibold text-green-300">
                            예시
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    1&3\\
                    0&1
                    \end{pmatrix}^{10}
                    =
                    \begin{pmatrix}
                    1&30\\
                    0&1
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 특별한 삼각행렬 2 */}
                <div className="mt-8 rounded-xl border border-pink-500/30 bg-pink-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-pink-300">
                        5. 아래쪽에 성분이 있는 삼각행렬의 거듭제곱
                    </h3>

                    <p className="leading-8 text-gray-300">
                        주대각선 위의 성분이
                        <InlineMath math="0" />인 다음 행렬도 같은 방법으로
                        거듭제곱의 규칙을 찾을 수 있습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                B=
                \begin{pmatrix}
                1&0\\
                b&1
                \end{pmatrix}
            `}
                    />

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    B^2=
                    \begin{pmatrix}
                    1&0\\
                    2b&1
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    B^3=
                    \begin{pmatrix}
                    1&0\\
                    3b&1
                    \end{pmatrix}
                `}
                        />

                    </div>

                    <p className="mt-5 leading-8 text-gray-300">
                        따라서 자연수 <InlineMath math="n" />에 대하여
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                \begin{pmatrix}
                1&0\\
                b&1
                \end{pmatrix}^{n}
                =
                \begin{pmatrix}
                1&0\\
                nb&1
                \end{pmatrix}
                }
            `}
                    />

                    <div className="mt-5 rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                        <p className="font-semibold text-green-300">
                            예시
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    1&0\\
                    -2&1
                    \end{pmatrix}^{7}
                    =
                    \begin{pmatrix}
                    1&0\\
                    -14&1
                    \end{pmatrix}
                `}
                        />

                    </div>

                </div>

                {/* 두 행렬의 비교 */}
                <div className="mt-8 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-yellow-300">
                        6. 두 특별한 삼각행렬의 비교
                    </h3>

                    <div className="overflow-x-auto rounded-xl bg-black/40 p-5">

                        <table className="mx-auto min-w-[700px] border-collapse text-center text-gray-300">

                            <thead>
                                <tr>
                                    <th className="border border-white/15 p-3 text-white">
                                        행렬
                                    </th>
                                    <th className="border border-white/15 p-3 text-white">
                                        거듭제곱
                                    </th>
                                    <th className="border border-white/15 p-3 text-white">
                                        변화하는 성분
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath
                                            math="\begin{pmatrix}1&a\\0&1\end{pmatrix}"
                                        />
                                    </td>

                                    <td className="border border-white/15 p-3">
                                        <InlineMath
                                            math="\begin{pmatrix}1&na\\0&1\end{pmatrix}"
                                        />
                                    </td>

                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="(1,2)" /> 성분이
                                        <InlineMath math="na" />
                                    </td>
                                </tr>

                                <tr>
                                    <td className="border border-white/15 p-3">
                                        <InlineMath
                                            math="\begin{pmatrix}1&0\\b&1\end{pmatrix}"
                                        />
                                    </td>

                                    <td className="border border-white/15 p-3">
                                        <InlineMath
                                            math="\begin{pmatrix}1&0\\nb&1\end{pmatrix}"
                                        />
                                    </td>

                                    <td className="border border-white/15 p-3">
                                        <InlineMath math="(2,1)" /> 성분이
                                        <InlineMath math="nb" />
                                    </td>
                                </tr>
                            </tbody>

                        </table>

                    </div>

                    <div className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                        <p className="font-semibold text-red-300">
                            주의
                        </p>

                        <p className="mt-3 leading-8 text-gray-300">
                            다음 공식은 모든 삼각행렬에 적용되는 것이 아닙니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{pmatrix}
                    1&a\\
                    0&1
                    \end{pmatrix}^{n}
                    =
                    \begin{pmatrix}
                    1&na\\
                    0&1
                    \end{pmatrix}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            주대각선의 성분이 모두
                            <InlineMath math="1" />인 위와 같은 특별한 형태에서
                            성립합니다.
                        </p>

                    </div>

                </div>

                {/* 계산 요령 */}
                <div className="mt-8 rounded-xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-red-300">
                        7. 거듭제곱을 계산할 때의 순서
                    </h3>

                    <div className="space-y-4 leading-8 text-gray-300">

                        <p>
                            ① 먼저 행렬의 모양이 대각행렬인지 삼각행렬인지 확인합니다.
                        </p>

                        <p>
                            ② 대각행렬이면 주대각선의 각 성분을
                            <InlineMath math="n" />제곱합니다.
                        </p>

                        <p>
                            ③ 주대각선이 모두
                            <InlineMath math="1" />인 특별한 삼각행렬이면
                            대각선 밖의 성분에 지수
                            <InlineMath math="n" />을 곱합니다.
                        </p>

                        <p>
                            ④ 공식의 형태가 아니라면 몇 번 직접 곱하여 규칙을
                            확인하거나 케일리–해밀턴 정리를 이용합니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{gathered}
                    \text{행렬의 모양 확인}\\
                    \Downarrow\\
                    \text{특별한 거듭제곱 공식 적용}
                    \end{gathered}
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
                            이차정사각행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&0\\
                3&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여{" "}
                            <InlineMath math="A^{10}" />
                            의{" "}
                            <InlineMath math="(2,1)" />
                            성분을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 공식 확인 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬의 모양 확인
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬{" "}
                                    <InlineMath math="A" />
                                    는 주대각선의 성분이 모두{" "}
                                    <InlineMath math="1" />
                                    인 특별한 삼각행렬입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&0\\
                        b&1
                        \end{pmatrix}^{n}
                        =
                        \begin{pmatrix}
                        1&0\\
                        nb&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    공식을 사용할 수 있습니다.
                                </p>

                            </div>

                            {/* 계산 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    2. 거듭제곱 계산
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    여기서{" "}
                                    <InlineMath math="b=3,\ n=10" />
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{10}
                        =
                        \begin{pmatrix}
                        1&0\\
                        10\times3&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        1&0\\
                        30&1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (2,1)\text{ 성분}=30
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{30}
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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&-1\\
                0&1
                \end{pmatrix},
                \qquad
                B=
                \begin{pmatrix}
                1&-7\\
                0&-1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여 행렬 <InlineMath math="A^{100}B" />의 모든 성분의
                            합을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 거듭제곱 공식 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬 <InlineMath math="A^{100}" /> 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />는 주대각선의 성분이 모두{" "}
                                    <InlineMath math="1" />인 특별한 삼각행렬입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&a\\
                        0&1
                        \end{pmatrix}^{n}
                        =
                        \begin{pmatrix}
                        1&na\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    여기서 <InlineMath math="a=-1" />,{" "}
                                    <InlineMath math="n=100" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{100}
                        =
                        \begin{pmatrix}
                        1&-100\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* 행렬의 곱 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="A^{100}B" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^{100}B
                        &=
                        \begin{pmatrix}
                        1&-100\\
                        0&1
                        \end{pmatrix}
                        \begin{pmatrix}
                        1&-7\\
                        0&-1
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        1&
                        -7+100\\
                        0&
                        -1
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        1&93\\
                        0&-1
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 성분의 합 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 모든 성분의 합
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        1+93+0+(-1)=93
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />를 100번 직접 곱하지 않고,
                                    특별한 삼각행렬의 거듭제곱 공식을 먼저 이용합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{100}
                        =
                        \begin{pmatrix}
                        1&-100\\
                        0&1
                        \end{pmatrix}
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그다음 행렬 <InlineMath math="B" />를 곱하여 모든 성분의
                                    합을 계산합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <p className="font-bold text-yellow-300">
                                    따라서 행렬 <InlineMath math="A^{100}B" />의 모든 성분의
                                    합은
                                </p>

                                <BlockMath math="\boxed{93}" />

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
                            두 행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&2\\
                0&1
                \end{pmatrix},
                \qquad
                E=
                \begin{pmatrix}
                1&0\\
                0&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A^3=xA+yE
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, 두 실수 <InlineMath math="x,\ y" />의 곱{" "}
                            <InlineMath math="xy" />의 값을 구하여라.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* A³ 계산 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 특별한 삼각행렬의 거듭제곱 이용하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주대각선의 성분이 모두{" "}
                                    <InlineMath math="1" />인 삼각행렬에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&a\\
                        0&1
                        \end{pmatrix}^{n}
                        =
                        \begin{pmatrix}
                        1&na\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    가 성립합니다. 여기서{" "}
                                    <InlineMath math="a=2,\ n=3" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^3
                        =
                        \begin{pmatrix}
                        1&3\cdot2\\
                        0&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        1&6\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                            </div>

                            {/* xA+yE */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. <InlineMath math="xA+yE" /> 나타내기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        xA+yE
                        &=
                        x
                        \begin{pmatrix}
                        1&2\\
                        0&1
                        \end{pmatrix}
                        +
                        y
                        \begin{pmatrix}
                        1&0\\
                        0&1
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        x+y&2x\\
                        0&x+y
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 성분 비교 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. 대응하는 성분 비교하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&6\\
                        0&1
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        x+y&2x\\
                        0&x+y
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="(1,2)" /> 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2x=6
                    `}
                                />

                                <BlockMath math="x=3" />

                                <p className="mt-4 leading-8 text-gray-300">
                                    주대각선의 성분을 비교하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        x+y=1
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        3+y=1
                    `}
                                />

                                <BlockMath math="y=-2" />

                            </div>

                            {/* xy */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    4. <InlineMath math="xy" /> 계산하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        xy=3\cdot(-2)=-6
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    먼저 특별한 삼각행렬의 거듭제곱 공식을 이용하여{" "}
                                    <InlineMath math="A^3" />을 구합니다.
                                </p>

                                <p className="mt-3 leading-8 text-gray-300">
                                    그다음 <InlineMath math="xA+yE" />를 하나의 행렬로
                                    나타내고, 대응하는 성분을 비교하면{" "}
                                    <InlineMath math="x,\ y" />를 쉽게 구할 수 있습니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{-6}" />

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
                            이차정사각행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                1&-1\\
                0&1
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A-A^2+A^3-A^4+\cdots+A^{1003}-A^{1004}
                =
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="a+b+c+d" />의 값을 구하여라.
                        </p>

                        <p className="mt-3 leading-8 text-gray-400">
                            단, <InlineMath math="A^n=A^{n-1}A" />이다.
                        </p>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 거듭제곱 공식 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 행렬 <InlineMath math="A^n" />의 규칙 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬 <InlineMath math="A" />는 주대각선의 성분이 모두{" "}
                                    <InlineMath math="1" />인 특별한 삼각행렬입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        1&r\\
                        0&1
                        \end{pmatrix}^{n}
                        =
                        \begin{pmatrix}
                        1&nr\\
                        0&1
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    여기서 <InlineMath math="r=-1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^n=
                        \begin{pmatrix}
                        1&-n\\
                        0&1
                        \end{pmatrix}
                        }
                    `}
                                />

                            </div>

                            {/* 두 항씩 묶기 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 두 항씩 묶어 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 식은 다음과 같이 두 항씩 묶을 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &A-A^2+A^3-A^4+\cdots+A^{1003}-A^{1004}\\
                        &=(A-A^2)+(A^3-A^4)+\cdots
                        +(A^{1003}-A^{1004})
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    자연수 <InlineMath math="k" />에 대하여 한 묶음은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{2k-1}-A^{2k}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^{2k-1}-A^{2k}
                        &=
                        \begin{pmatrix}
                        1&-(2k-1)\\
                        0&1
                        \end{pmatrix}
                        -
                        \begin{pmatrix}
                        1&-2k\\
                        0&1
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        0&1\\
                        0&0
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 즉, 모든 묶음의 결과가 같습니다.
                                </p>

                            </div>

                            {/* 묶음 개수 */}
                            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-cyan-300">
                                    3. 묶음의 개수 확인하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    지수 <InlineMath math="1" />부터{" "}
                                    <InlineMath math="1004" />까지의 항을 두 항씩 묶으므로
                                    묶음의 개수는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \frac{1004}{2}=502
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    개입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &A-A^2+A^3-A^4+\cdots+A^{1003}-A^{1004}\\[4pt]
                        &=
                        502
                        \begin{pmatrix}
                        0&1\\
                        0&0
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        0&502\\
                        0&0
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 성분 비교 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    4. 각 성분의 값 구하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{pmatrix}
                        a&b\\
                        c&d
                        \end{pmatrix}
                        =
                        \begin{pmatrix}
                        0&502\\
                        0&0
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        a=0,\qquad b=502,\qquad c=0,\qquad d=0
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        a+b+c+d=502
                    `}
                                />

                            </div>

                            {/* 풀이 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    거듭제곱을 하나씩 모두 계산하지 않고{" "}
                                    <InlineMath math="A^n" />의 일반적인 형태를 먼저 구한 뒤,
                                    부호가 반대인 두 항씩 묶습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{2k-1}-A^{2k}
                        =
                        \begin{pmatrix}
                        0&1\\
                        0&0
                        \end{pmatrix}
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    각 묶음이 같은 행렬이므로 묶음의 개수인{" "}
                                    <InlineMath math="502" />만 곱하면 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서
                                </p>

                                <BlockMath math="\boxed{502}" />

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
                            행렬
                        </p>

                        <BlockMath
                            math={String.raw`
                A=
                \begin{pmatrix}
                0&2\\
                3&0
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            에 대하여
                        </p>

                        <BlockMath
                            math={String.raw`
                A^{11}=
                \begin{pmatrix}
                a&b\\
                c&d
                \end{pmatrix}
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            일 때, <InlineMath math="c" />의 값을 고르시오.
                        </p>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "0"],
                                ["②", "2^5\\times3^5"],
                                ["③", "2^5\\times3^6"],
                                ["④", "2^6\\times3^5"],
                                ["⑤", "2^6\\times3^6"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>
                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* A² 계산 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 낮은 거듭제곱을 계산하여 규칙 찾기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2
                        &=
                        \begin{pmatrix}
                        0&2\\
                        3&0
                        \end{pmatrix}
                        \begin{pmatrix}
                        0&2\\
                        3&0
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        6&0\\
                        0&6
                        \end{pmatrix}\\[8pt]
                        &=6E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 행렬을 두 번 곱할 때마다{" "}
                                    <InlineMath math="6E" />가 나타납니다.
                                </p>

                            </div>

                            {/* 규칙 */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    2. 거듭제곱의 규칙 추론하기
                                </h4>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2&=6E,\\
                        A^3&=6A,\\
                        A^4&=6^2E,\\
                        A^5&=6^2A
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이를 통해 자연수 <InlineMath math="n" />에 대하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^{2n}=6^nE,
                        \qquad
                        A^{2n+1}=6^nA
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    임을 알 수 있습니다.
                                </p>

                            </div>

                            {/* A^11 */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. <InlineMath math="A^{11}" /> 계산하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="11=2\cdot5+1" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^{11}=6^5A
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^{11}
                        &=
                        6^5
                        \begin{pmatrix}
                        0&2\\
                        3&0
                        \end{pmatrix}\\[8pt]
                        &=
                        \begin{pmatrix}
                        0&2\cdot6^5\\
                        3\cdot6^5&0
                        \end{pmatrix}
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* c 계산 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-yellow-300">
                                    4. <InlineMath math="c" />의 값 구하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="c" />는{" "}
                                    <InlineMath math="A^{11}" />의{" "}
                                    <InlineMath math="(2,1)" /> 성분이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        c
                        &=3\cdot6^5\\
                        &=3\cdot(2\cdot3)^5\\
                        &=2^5\cdot3^6
                        \end{aligned}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-red-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    처음부터 <InlineMath math="A^{11}" />을 여러 번 곱하지 않고,
                                    먼저 <InlineMath math="A^2" />을 계산하여 거듭제곱의 규칙을
                                    찾습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{
                        A^2=6E
                        \Longrightarrow
                        A^{2n}=6^nE,\quad
                        A^{2n+1}=6^nA
                        }
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    숫자가 매우 크므로 마지막 결과는 소인수의 거듭제곱
                                    형태로 나타내는 것이 계산하기 편리합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 정답은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{③ }2^5\times3^6}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-6">

                    <h3 className="mb-4 text-xl font-bold text-emerald-300">
                        핵심 정리
                    </h3>

                    <div className="space-y-5 rounded-xl bg-black/40 p-5">

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{pmatrix}
                    a&0\\
                    0&b
                    \end{pmatrix}^{n}
                    =
                    \begin{pmatrix}
                    a^n&0\\
                    0&b^n
                    \end{pmatrix}
                    }
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{pmatrix}
                    1&a\\
                    0&1
                    \end{pmatrix}^{n}
                    =
                    \begin{pmatrix}
                    1&na\\
                    0&1
                    \end{pmatrix}
                    }
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    \begin{pmatrix}
                    1&0\\
                    b&1
                    \end{pmatrix}^{n}
                    =
                    \begin{pmatrix}
                    1&0\\
                    nb&1
                    \end{pmatrix}
                    }
                `}
                        />

                    </div>

                </div>

            </section>

            {/* 5.8 행렬의 정오판정 */}
            <section className="mb-10 rounded-2xl border border-white/30 p-7">
                <h2 className="mb-2 text-3xl font-bold">
                    5.8 행렬의 정오판정
                </h2>
                {/* 단원 제목 */}
                <div>

                    <p className="mt-4 leading-8 text-gray-300">
                        행렬은 수를 직사각형 모양으로 배열한 표를 기반으로 연산합니다.
                        따라서 실수나 다항식에서 성립하는 일반적인 계산 규칙이
                        행렬에서도 항상 성립하는 것은 아닙니다.
                    </p>

                    <p className="mt-2 leading-8 text-gray-300">
                        행렬에 관한 명제의 참과 거짓을 판단할 때에는
                        실수의 성질을 그대로 적용하지 않도록 주의해야 합니다.
                    </p>
                </div>

                {/* 실수와 행렬의 비교 */}
                <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="text-xl font-bold text-white">
                        실수와 행렬의 차이
                    </h3>

                    <div className="mt-6 overflow-x-auto">

                        <table className="w-full min-w-[760px] border-collapse text-left">

                            <thead>
                                <tr className="border-b border-white/15 text-gray-200">
                                    <th className="px-4 py-3">
                                        실수에서의 성질
                                    </th>

                                    <th className="px-4 py-3 text-center">
                                        행렬에서의 성질
                                    </th>

                                    <th className="px-4 py-3 text-center">
                                        판정
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="text-gray-300">

                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-4">
                                        <InlineMath math="xy=yx" />
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        일반적으로 <InlineMath math="AB\ne BA" />
                                    </td>

                                    <td className="px-4 py-4 text-center font-bold text-red-300">
                                        성립하지 않음
                                    </td>
                                </tr>

                                <tr className="border-b border-white/10">
                                    <td className="px-4 py-4">
                                        <InlineMath math="xy=0" />이면{" "}
                                        <InlineMath math="x=0" /> 또는{" "}
                                        <InlineMath math="y=0" />
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <InlineMath math="AB=O" />이어도{" "}
                                        <InlineMath math="A\ne O,\ B\ne O" />일 수 있음
                                    </td>

                                    <td className="px-4 py-4 text-center font-bold text-red-300">
                                        성립하지 않음
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-4">
                                        <InlineMath math="x^2=0" />이면{" "}
                                        <InlineMath math="x=0" />
                                    </td>

                                    <td className="px-4 py-4 text-center">
                                        <InlineMath math="A^2=O" />이어도{" "}
                                        <InlineMath math="A\ne O" />일 수 있음
                                    </td>

                                    <td className="px-4 py-4 text-center font-bold text-red-300">
                                        성립하지 않음
                                    </td>
                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* 1. 교환법칙 */}
                <div className="mt-8 rounded-2xl border border-blue-500/30 bg-blue-500/5 p-6">

                    <h3 className="text-xl font-bold text-blue-300">
                        1. 행렬의 곱셈과 교환법칙
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        실수의 곱셈에서는 곱하는 순서를 바꾸어도 결과가 같습니다.
                    </p>

                    <BlockMath math="xy=yx" />

                    <p className="leading-8 text-gray-300">
                        그러나 행렬의 곱셈에서는 일반적으로 곱하는 순서를 바꾸면
                        결과가 달라집니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{AB\ne BA}
            `}
                    />

                    <div className="mt-5 rounded-xl border border-blue-500/20 bg-black/20 p-5">

                        <p className="font-semibold text-blue-200">
                            반례
                        </p>

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&1\\
                    0&0
                    \end{pmatrix},
                    \qquad
                    B=
                    \begin{pmatrix}
                    0&0\\
                    1&1
                    \end{pmatrix}
                `}
                        />

                        <BlockMath
                            math={String.raw`
                    AB=
                    \begin{pmatrix}
                    1&1\\
                    0&0
                    \end{pmatrix},
                    \qquad
                    BA=
                    \begin{pmatrix}
                    0&0\\
                    1&1
                    \end{pmatrix}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            따라서 이 경우에는{" "}
                            <InlineMath math="AB\ne BA" />입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                        <p className="font-semibold text-yellow-300">
                            주의
                        </p>

                        <p className="mt-2 leading-8 text-gray-300">
                            모든 행렬에서 항상 <InlineMath math="AB\ne BA" />인 것은
                            아닙니다. <br />어떤 행렬에서는 우연히{" "}
                            <InlineMath math="AB=BA" />가 성립할 수도 있습니다.
                        </p>

                        <p className="mt-2 leading-8 text-gray-300">
                            따라서 정확한 표현은
                            <span className="font-semibold text-white">
                                {" "}“일반적으로 교환법칙이 성립하지 않는다.”
                            </span>
                            입니다.
                        </p>

                    </div>

                </div>

                {/* 2. 영인자 */}
                <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/5 p-6">

                    <h3 className="text-xl font-bold text-purple-300">
                        2. 영인자
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        실수에서는 두 수의 곱이 <InlineMath math="0" />이면
                        두 수 중 적어도 하나는 반드시 <InlineMath math="0" />입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                xy=0
                \quad\Longrightarrow\quad
                x=0\ \text{또는}\ y=0
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        그러나 행렬에서는 두 행렬의 곱이 영행렬이어도
                        두 행렬이 모두 영행렬이 아닐 수 있습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                AB=O
                \quad\not\Rightarrow\quad
                A=O\ \text{또는}\ B=O
            `}
                    />

                    {/* 영인자의 예 */}
                    <div className="mt-5 rounded-xl border border-purple-500/20 bg-black/20 p-5">

                        <p className="font-semibold text-purple-200">
                            영인자의 예
                        </p>

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    1&0\\
                    0&0
                    \end{pmatrix},
                    \qquad
                    B=
                    \begin{pmatrix}
                    0&0\\
                    1&0
                    \end{pmatrix}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            두 행렬은 모두 영행렬이 아닙니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    A\ne O,
                    \qquad
                    B\ne O
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            그러나 두 행렬을 곱하면
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    AB
                    &=
                    \begin{pmatrix}
                    1&0\\
                    0&0
                    \end{pmatrix}
                    \begin{pmatrix}
                    0&0\\
                    1&0
                    \end{pmatrix}\\[8pt]
                    &=
                    \begin{pmatrix}
                    0&0\\
                    0&0
                    \end{pmatrix}\\[8pt]
                    &=O
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이와 같이 영행렬이 아니면서 다른 영행렬이 아닌 행렬과
                            곱하여 영행렬을 만드는 행렬을
                            <span className="font-semibold text-purple-200">
                                {" "}영인자
                            </span>
                            라고 합니다.
                        </p>

                        <BlockMath
                            math={String.raw`
                    \boxed{
                    A\ne O,\quad B\ne O,\quad AB=O
                    }
                `}
                        />

                    </div>

                </div>

                {/* 3. A² = O */}
                <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/5 p-6">

                    <h3 className="text-xl font-bold text-green-300">
                        3. 제곱이 영행렬인 행렬
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        실수에서는 어떤 수의 제곱이 <InlineMath math="0" />이면
                        그 수는 반드시 <InlineMath math="0" />입니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                x^2=0
                \quad\Longrightarrow\quad
                x=0
            `}
                    />

                    <p className="leading-8 text-gray-300">
                        그러나 행렬에서는 제곱이 영행렬이어도
                        원래 행렬이 영행렬이 아닐 수 있습니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                A^2=O
                \quad\not\Rightarrow\quad
                A=O
            `}
                    />

                    {/* 제곱 영행렬의 예 */}
                    <div className="mt-5 rounded-xl border border-green-500/20 bg-black/20 p-5">

                        <p className="font-semibold text-green-200">
                            반례
                        </p>

                        <BlockMath
                            math={String.raw`
                    A=
                    \begin{pmatrix}
                    0&1\\
                    0&0
                    \end{pmatrix}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            이 행렬은 영행렬이 아니지만
                        </p>

                        <BlockMath
                            math={String.raw`
                    \begin{aligned}
                    A^2
                    &=
                    \begin{pmatrix}
                    0&1\\
                    0&0
                    \end{pmatrix}
                    \begin{pmatrix}
                    0&1\\
                    0&0
                    \end{pmatrix}\\[8pt]
                    &=
                    \begin{pmatrix}
                    0&0\\
                    0&0
                    \end{pmatrix}\\[8pt]
                    &=O
                    \end{aligned}
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다. 따라서
                        </p>

                        <BlockMath
                            math={String.raw`
                    A^2=O
                    \quad\text{이지만}\quad
                    A\ne O
                `}
                        />

                        <p className="leading-8 text-gray-300">
                            입니다.
                        </p>

                    </div>

                    <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/5 p-5">

                        <p className="leading-8 text-gray-300">
                            이 경우에는 같은 영행렬이 아닌 행렬{" "}
                            <InlineMath math="A" />를 두 번 곱하여 영행렬이 되었으므로,{" "}
                            <InlineMath math="A" />는 영인자의 한 예가 됩니다.
                        </p>

                    </div>

                </div>

                {/* 정오판정 방법 */}
                <div className="mt-8 rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-6">

                    <h3 className="text-xl font-bold text-yellow-300">
                        정오판정 방법
                    </h3>

                    <p className="mt-4 leading-8 text-gray-300">
                        어떤 명제가 항상 참이라는 것을 보이려면
                        모든 행렬에서 성립함을 설명해야 합니다.
                    </p>

                    <p className="mt-2 leading-8 text-gray-300">
                        반대로 어떤 명제가 거짓이라는 것을 보이려면
                        그 명제가 성립하지 않는 단 하나의 예를 제시하면 됩니다.
                        이러한 예를
                        <span className="font-semibold text-yellow-200">
                            {" "}반례
                        </span>
                        라고 합니다.
                    </p>

                    <BlockMath
                        math={String.raw`
                \boxed{
                \text{거짓임을 보일 때에는 반례 하나면 충분하다.}
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
                            이차정사각행렬 <InlineMath math="A,\ B" />에 대하여 등식
                        </p>

                        <BlockMath
                            math={String.raw`
                A+B=2E,\qquad AB=3B
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            가 성립할 때, 항상 옳은 것을 보기에서 모두 고른 것은?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            단, <InlineMath math="E" />는 단위행렬이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">

                            <div className="space-y-4 text-gray-200">
                                <p>
                                    ㄱ. <InlineMath math="A=4E" />
                                </p>

                                <p>
                                    ㄴ. <InlineMath math="B^2+B=O" />
                                </p>

                                <p>
                                    ㄷ. <InlineMath math="A^2-B^2=3(A-B)" />
                                </p>
                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "\\text{ㄱ}"],
                                ["②", "\\text{ㄴ}"],
                                ["③", "\\text{ㄷ}"],
                                ["④", "\\text{ㄴ, ㄷ}"],
                                ["⑤", "\\text{ㄱ, ㄴ, ㄷ}"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>

                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 주어진 조건 정리 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 주어진 식을 이용하여 행렬 사이의 관계 찾기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A+B=2E" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=2E-B
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이다. 이를 <InlineMath math="AB=3B" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AB
                        &=(2E-B)B\\
                        &=2B-B^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        2B-B^2=3B
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{B^2+B=O}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 얻는다.
                                </p>

                            </div>

                            {/* ㄱ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    2. ㄱ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 조건에서{" "}
                                    <InlineMath math="A=4E" />라고 단정할 수는 없습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    예를 들어 <InlineMath math="B=O" />라 하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=2E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이고,
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A+B=2E,\qquad AB=O=3B
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 모든 조건을 만족하지만{" "}
                                    <InlineMath math="A\ne4E" />이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄱ은 거짓}}
                    `}
                                />

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. ㄴ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    앞에서 주어진 두 식을 이용하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        B^2+B=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 얻었으므로 ㄴ은 항상 성립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄴ은 참}}
                    `}
                                />

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    4. ㄷ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A=2E-B" />이므로{" "}
                                    <InlineMath math="A" />와 <InlineMath math="B" />는
                                    교환법칙이 성립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB=BA
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 차의 제곱 공식을 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2-B^2
                        &=(A-B)(A+B)\\
                        &=(A-B)\cdot2E\\
                        &=2(A-B)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이다. 일반적으로{" "}
                                    <InlineMath math="3(A-B)" />와 같지 않으므로
                                    ㄷ은 거짓입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄷ은 거짓}}
                    `}
                                />

                            </div>

                            {/* 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬에 관한 명제는 주어진 식에서 반드시 얻어지는 결과인지
                                    확인해야 합니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    참인 명제는 식을 변형하여 증명하고, 거짓인 명제는 조건을
                                    만족하지만 명제가 성립하지 않는 반례를 찾으면 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=2E-B
                        \quad\Longrightarrow\quad
                        B^2+B=O
                    `}
                                />

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 항상 옳은 것은 ㄴ뿐이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{②}}
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
                            이차정사각행렬 <InlineMath math="A,\ B" />에 대하여 옳은 것만을
                            보기에서 있는 대로 고른 것은?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            단, <InlineMath math="E" />는 단위행렬이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">

                            <div className="space-y-5 text-gray-200">

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄱ.
                                    </span>

                                    <div>
                                        <InlineMath math="(A+B)^2=(A-B)^2" />이면{" "}
                                        <InlineMath math="AB+BA=O" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄴ.
                                    </span>

                                    <div>
                                        <InlineMath math="A^2=E,\ B^2=-E" />이면{" "}
                                        <InlineMath math="(ABA)^2=E" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄷ.
                                    </span>

                                    <div>
                                        <InlineMath math="A(A+E)=E,\ AB=E" />이면{" "}
                                        <InlineMath math="B^2=A+2E" />이다.
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "\\text{ㄱ}"],
                                ["②", "\\text{ㄴ}"],
                                ["③", "\\text{ㄱ, ㄷ}"],
                                ["④", "\\text{ㄴ, ㄷ}"],
                                ["⑤", "\\text{ㄱ, ㄴ, ㄷ}"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>

                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    1. ㄱ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 곱셈에서는 일반적으로 교환법칙이 성립하지 않으므로
                                    두 제곱을 각각 순서대로 전개해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2
                        =A^2+AB+BA+B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2
                        =A^2-AB-BA+B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 식이 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+AB+BA+B^2
                        =
                        A^2-AB-BA+B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        2AB+2BA=O
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{AB+BA=O}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 ㄱ은 참입니다.
                                </p>

                                <BlockMath math={String.raw`\boxed{\text{ㄱ은 참}}`} />

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    2. ㄴ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 곱셈 순서를 그대로 유지하여 계산하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (ABA)^2
                        &=ABAABA\\
                        &=AB(A^2)BA\\
                        &=AB(E)BA\\
                        &=AB^2A\\
                        &=A(-E)A\\
                        &=-A^2\\
                        &=-E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    즉, <InlineMath math="(ABA)^2=E" />가 아니라{" "}
                                    <InlineMath math="(ABA)^2=-E" />입니다.
                                </p>

                                <BlockMath math={String.raw`\boxed{\text{ㄴ은 거짓}}`} />

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-purple-500/30 bg-purple-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-purple-300">
                                    3. ㄷ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    먼저
                                    <InlineMath math="A(A+E)=E" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+A=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 얻습니다. 또한
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+E)A=A^2+A=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    이제 <InlineMath math="AB=E" />를 이용하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        B
                        &=EB\\
                        &=(A+E)AB\\
                        &=(A+E)(AB)\\
                        &=(A+E)E\\
                        &=A+E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        B^2
                        &=(A+E)^2\\
                        &=A^2+2A+E
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그런데 <InlineMath math="A^2+A=E" />이므로{" "}
                                    <InlineMath math="A^2=E-A" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        B^2
                        &=(E-A)+2A+E\\
                        &=A+2E
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{B^2=A+2E}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 ㄷ은 참입니다.
                                </p>

                                <BlockMath math={String.raw`\boxed{\text{ㄷ은 참}}`} />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬식의 전개에서는 곱하는 순서를 임의로 바꾸면 안 됩니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2
                        =
                        A^2+AB+BA+B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 행렬을 약분하지 않고, 결합법칙과 주어진 등식을
                                    이용하여 식을 직접 변형해야 합니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 옳은 것은 ㄱ, ㄷ이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③}}
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
                            세 이차정사각행렬 <InlineMath math="A,\ B,\ C" />에 대하여
                            옳은 것만을 보기에서 있는 대로 고른 것은?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            단, <InlineMath math="E" />는 단위행렬이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">

                            <div className="space-y-5 text-gray-200">

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄱ.
                                    </span>

                                    <div>
                                        <InlineMath math="(A+2E)^2=A^2+4A+4E" />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄴ.
                                    </span>

                                    <div>
                                        <InlineMath math="A+B=E" />이면{" "}
                                        <InlineMath math="AB=BA" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄷ.
                                    </span>

                                    <div>
                                        <InlineMath math="A\ne O,\ AB=AC" />이면{" "}
                                        <InlineMath math="B=C" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄹ.
                                    </span>

                                    <div>
                                        <InlineMath math="(A-3E)^2=O" />이면{" "}
                                        <InlineMath math="A=3E" />이다.
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "\\text{ㄴ}"],
                                ["②", "\\text{ㄹ}"],
                                ["③", "\\text{ㄱ, ㄴ}"],
                                ["④", "\\text{ㄴ, ㄷ}"],
                                ["⑤", "\\text{ㄷ, ㄹ}"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>

                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    1. ㄱ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 제곱은 곱하는 순서를 유지하여 전개해야 합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A+2E)^2
                        &=(A+2E)(A+2E)\\
                        &=A^2+2AE+2EA+4E^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    단위행렬은 모든 이차정사각행렬과 곱의 교환법칙이
                                    성립하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AE=EA=A,\qquad E^2=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A+2E)^2
                        &=A^2+2A+2A+4E\\
                        &=A^2+4A+4E
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄱ은 참}}
                    `}
                                />

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    2. ㄴ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A+B=E" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        B=E-A
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        AB
                        &=A(E-A)\\
                        &=A-A^2
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        BA
                        &=(E-A)A\\
                        &=A-A^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        AB=BA
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄴ은 참}}
                    `}
                                />

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    3. ㄷ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="AB=AC" />에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A(B-C)=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이지만, 행렬에서는 <InlineMath math="A\ne O" />라고 해서{" "}
                                    <InlineMath math="A" />를 약분할 수 없습니다.
                                </p>

                                <div className="mt-5 rounded-xl border border-red-500/20 bg-black/20 p-5">

                                    <p className="font-semibold text-red-200">
                                        반례
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A=
                            \begin{pmatrix}
                            1&0\\
                            0&0
                            \end{pmatrix},
                            \qquad
                            B=
                            \begin{pmatrix}
                            0&0\\
                            0&0
                            \end{pmatrix},
                            \qquad
                            C=
                            \begin{pmatrix}
                            0&0\\
                            1&0
                            \end{pmatrix}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이때 <InlineMath math="A\ne O" />이고
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            AB=O,\qquad AC=O
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로 <InlineMath math="AB=AC" />이지만{" "}
                                        <InlineMath math="B\ne C" />입니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄷ은 거짓}}
                    `}
                                />

                            </div>

                            {/* ㄹ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    4. ㄹ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    실수에서는 제곱이 <InlineMath math="0" />이면 원래 수가{" "}
                                    <InlineMath math="0" />이지만, 행렬에서는 그렇지 않을 수
                                    있습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    다음과 같이 놓아 봅시다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        N=
                        \begin{pmatrix}
                        0&1\\
                        0&0
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이 행렬은 <InlineMath math="N\ne O" />이지만
                                </p>

                                <BlockMath
                                    math={String.raw`
                        N^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 이제
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=3E+N
                        =
                        \begin{pmatrix}
                        3&1\\
                        0&3
                        \end{pmatrix}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    으로 놓으면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A-3E=N
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-3E)^2=N^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 그러나 <InlineMath math="N\ne O" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=3E+N\ne3E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄹ은 거짓}}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <div className="space-y-4 leading-8 text-gray-300">

                                    <p>
                                        단위행렬 <InlineMath math="E" />는 모든 이차정사각행렬과
                                        곱의 교환법칙이 성립하므로 다항식과 같은 방식으로
                                        계산할 수 있습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            AE=EA=A
                        `}
                                    />

                                    <p>
                                        그러나 일반 행렬은 약분할 수 없으며, 제곱이
                                        영행렬이라고 해서 원래 행렬이 영행렬이라고 할 수도
                                        없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A(B-C)=O
                            \quad\not\Rightarrow\quad
                            B=C
                        `}
                                    />

                                    <BlockMath
                                        math={String.raw`
                            (A-3E)^2=O
                            \quad\not\Rightarrow\quad
                            A=3E
                        `}
                                    />

                                </div>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 옳은 것은 ㄱ, ㄴ이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③}}
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
                            두 이차정사각행렬 <InlineMath math="A,\ B" />가 등식
                        </p>

                        <BlockMath
                            math={String.raw`
                A^2+B^2=AB+BA
            `}
                        />

                        <p className="leading-8 text-gray-300">
                            를 만족시킬 때, 옳은 것만을 보기에서 있는 대로 고른 것은?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            단, <InlineMath math="O" />는 영행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">

                            <div className="space-y-5 text-gray-200">

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄱ.
                                    </span>

                                    <div>
                                        <InlineMath math="(A-B)^2=O" />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄴ.
                                    </span>

                                    <div>
                                        <InlineMath math="A^2+BA=B^2+AB" />
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄷ.
                                    </span>

                                    <div>
                                        <InlineMath math="A=B" />
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "\\text{ㄱ}"],
                                ["②", "\\text{ㄴ}"],
                                ["③", "\\text{ㄱ, ㄷ}"],
                                ["④", "\\text{ㄴ, ㄷ}"],
                                ["⑤", "\\text{ㄱ, ㄴ, ㄷ}"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>

                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* 주어진 조건 */}
                            <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-blue-300">
                                    1. 주어진 조건 변형하기
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 등식의 모든 항을 왼쪽으로 이항하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2-AB-BA+B^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 행렬의 곱셈 순서를 유지하여 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (A-B)^2
                        &=(A-B)(A-B)\\
                        &=A^2-AB-BA+B^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 주어진 조건은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{(A-B)^2=O}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    와 같습니다.
                                </p>

                            </div>

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    2. ㄱ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    앞에서 주어진 조건을 변형하여
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 얻었으므로 ㄱ은 항상 성립합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄱ은 참}}
                    `}
                                />

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    3. ㄴ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    ㄴ의 등식에서 오른쪽을 왼쪽으로 이항하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        &A^2+BA-B^2-AB\\
                        &\qquad=A^2-AB+BA-B^2\\
                        &\qquad=(A+B)(A-B)
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    그러나 <InlineMath math="(A-B)^2=O" />이라고 해서{" "}
                                    <InlineMath math="(A+B)(A-B)=O" />라고 할 수는 없습니다.
                                </p>

                                {/* 반례 */}
                                <div className="mt-5 rounded-xl border border-red-500/20 bg-black/20 p-5">

                                    <p className="font-semibold text-red-200">
                                        반례
                                    </p>

                                    <p className="mt-3 leading-8 text-gray-300">
                                        다음과 같이 놓아 봅시다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A=
                            \begin{pmatrix}
                            1&1\\
                            0&1
                            \end{pmatrix},
                            \qquad
                            B=
                            \begin{pmatrix}
                            1&0\\
                            0&1
                            \end{pmatrix}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A-B=
                            \begin{pmatrix}
                            0&1\\
                            0&0
                            \end{pmatrix}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            (A-B)^2=O
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다. 따라서 주어진 조건을 만족합니다.
                                    </p>

                                    <p className="mt-2 leading-8 text-gray-300">
                                        그러나
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            \begin{aligned}
                            A^2+BA
                            &=
                            \begin{pmatrix}
                            2&3\\
                            0&2
                            \end{pmatrix},\\[8pt]
                            B^2+AB
                            &=
                            \begin{pmatrix}
                            2&1\\
                            0&2
                            \end{pmatrix}
                            \end{aligned}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A^2+BA\ne B^2+AB
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄴ은 거짓}}
                    `}
                                />

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    4. ㄷ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 조건에서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    를 얻었습니다.
                                </p>

                                <p className="mt-2 leading-8 text-gray-300">
                                    실수에서는 어떤 수의 제곱이{" "}
                                    <InlineMath math="0" />이면 그 수가{" "}
                                    <InlineMath math="0" />이지만, 행렬에서는 제곱이
                                    영행렬이어도 원래 행렬이 영행렬이 아닐 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2=O
                        \quad\not\Rightarrow\quad
                        A-B=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    실제로 ㄴ에서 사용한 반례에서는
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2=O
                        \quad\text{이지만}\quad
                        A-B\ne O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    이므로 <InlineMath math="A\ne B" />입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄷ은 거짓}}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    주어진 등식은 다음과 같이 변형할 수 있습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A^2+B^2=AB+BA
                        \quad\Longleftrightarrow\quad
                        (A-B)^2=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    그러나 행렬에서는 제곱이 영행렬이라고 해서 그 행렬이
                                    영행렬이라고 할 수 없습니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        X^2=O
                        \quad\not\Rightarrow\quad
                        X=O
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 한 행렬과의 곱이 영행렬이라고 해서 다른 인수를
                                    영행렬이라고 판단해서도 안 됩니다.
                                </p>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 옳은 것은 ㄱ뿐이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{①}}
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
                            이차정사각행렬 <InlineMath math="A,\ B" />에 대하여 보기에서
                            옳은 것을 모두 고르면?
                        </p>

                        <p className="mt-2 text-sm leading-7 text-gray-400">
                            단, <InlineMath math="E" />는 단위행렬이고{" "}
                            <InlineMath math="O" />는 영행렬이다.
                        </p>

                        {/* 보기 */}
                        <div className="mt-5 rounded-xl border border-white/10 bg-black/30 p-5">

                            <div className="space-y-5 text-gray-200">

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄱ.
                                    </span>

                                    <div>
                                        <InlineMath math="A-B=E" />이면{" "}
                                        <InlineMath math="A^2-B^2=A+B" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄴ.
                                    </span>

                                    <div>
                                        <InlineMath math="(A+B)^2=(A-B)^2" />이면{" "}
                                        <InlineMath math="AB=O" />이다.
                                    </div>
                                </div>

                                <div className="flex gap-3">
                                    <span className="shrink-0 font-semibold text-white">
                                        ㄷ.
                                    </span>

                                    <div>
                                        <InlineMath math="A^2=A" />이고{" "}
                                        <InlineMath math="B^2=E" />이면{" "}
                                        <InlineMath math="(BAB)^2=BAB" />이다.
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* 선택지 */}
                        <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">

                            {[
                                ["①", "\\text{ㄱ}"],
                                ["②", "\\text{ㄴ}"],
                                ["③", "\\text{ㄱ, ㄷ}"],
                                ["④", "\\text{ㄴ, ㄷ}"],
                                ["⑤", "\\text{ㄱ, ㄴ, ㄷ}"],
                            ].map(([number, choice]) => (
                                <div
                                    key={number}
                                    className="rounded-xl border border-white/10 bg-black/40 p-4 text-center"
                                >
                                    <span className="mr-2 font-semibold text-white">
                                        {number}
                                    </span>

                                    <InlineMath math={choice} />
                                </div>
                            ))}

                        </div>

                    </div>

                    {/* 풀이 */}
                    <details className="mt-5 rounded-xl border border-white/15 p-5">

                        <summary className="cursor-pointer font-semibold text-yellow-300">
                            풀이 보기
                        </summary>

                        <div className="mt-5 space-y-8">

                            {/* ㄱ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    1. ㄱ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="A-B=E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        A=B+E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 이를 <InlineMath math="A^2-B^2" />에 대입하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2-B^2
                        &=(B+E)^2-B^2\\
                        &=B^2+BE+EB+E^2-B^2
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    단위행렬은 모든 이차정사각행렬과 곱의 교환법칙이
                                    성립하므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        BE=EB=B,\qquad E^2=E
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 따라서
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2-B^2
                        &=2B+E\\
                        &=(B+E)+B\\
                        &=A+B
                        \end{aligned}
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄱ은 참}}
                    `}
                                />

                            </div>

                            {/* ㄴ */}
                            <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-red-300">
                                    2. ㄴ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 곱셈 순서를 유지하여 두 식을 전개하면
                                </p>

                                <BlockMath
                                    math={String.raw`
                        (A+B)^2
                        =A^2+AB+BA+B^2
                    `}
                                />

                                <BlockMath
                                    math={String.raw`
                        (A-B)^2
                        =A^2-AB-BA+B^2
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    두 식이 같으므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        A^2+AB+BA+B^2
                        &=A^2-AB-BA+B^2\\
                        2AB+2BA&=O
                    \end{aligned}
                `}
                                />

                                <p className="leading-8 text-gray-300">
                                    따라서 반드시 얻을 수 있는 것은
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{AB+BA=O}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다. 그러나 이것만으로{" "}
                                    <InlineMath math="AB=O" />라고 할 수는 없습니다.
                                </p>

                                {/* 반례 */}
                                <div className="mt-5 rounded-xl border border-red-500/20 bg-black/20 p-5">

                                    <p className="font-semibold text-red-200">
                                        반례
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            A=
                            \begin{pmatrix}
                            1&0\\
                            0&-1
                            \end{pmatrix},
                            \qquad
                            B=
                            \begin{pmatrix}
                            0&1\\
                            1&0
                            \end{pmatrix}
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이때
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            AB=
                            \begin{pmatrix}
                            0&1\\
                            -1&0
                            \end{pmatrix}
                            \ne O
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이고
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            BA=
                            \begin{pmatrix}
                            0&-1\\
                            1&0
                            \end{pmatrix}
                            =-AB
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        이므로
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            AB+BA=O
                        `}
                                    />

                                    <p className="leading-8 text-gray-300">
                                        입니다. 따라서{" "}
                                        <InlineMath math="(A+B)^2=(A-B)^2" />이지만{" "}
                                        <InlineMath math="AB\ne O" />인 경우가 존재합니다.
                                    </p>

                                </div>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄴ은 거짓}}
                    `}
                                />

                            </div>

                            {/* ㄷ */}
                            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-5">

                                <h4 className="mb-4 text-lg font-bold text-green-300">
                                    3. ㄷ의 정오판정
                                </h4>

                                <p className="leading-8 text-gray-300">
                                    행렬의 곱셈 순서를 바꾸지 않고{" "}
                                    <InlineMath math="(BAB)^2" />을 계산합니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (BAB)^2
                        &=BAB\cdot BAB\\
                        &=BAB^2AB
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    <InlineMath math="B^2=E" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (BAB)^2
                        &=BAEAB\\
                        &=BA^2B
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    또한 <InlineMath math="A^2=A" />이므로
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \begin{aligned}
                        (BAB)^2
                        &=BAB
                        \end{aligned}
                    `}
                                />

                                <p className="leading-8 text-gray-300">
                                    입니다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        \boxed{\text{ㄷ은 참}}
                    `}
                                />

                            </div>

                            {/* 풀이의 핵심 */}
                            <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5">

                                <h4 className="mb-3 text-lg font-bold text-yellow-300">
                                    풀이의 핵심
                                </h4>

                                <div className="space-y-4 leading-8 text-gray-300">

                                    <p>
                                        단위행렬 <InlineMath math="E" />가 포함된 식은{" "}
                                        <InlineMath math="AE=EA=A" />를 이용하여 다항식과
                                        비슷하게 전개할 수 있습니다.
                                    </p>

                                    <p>
                                        그러나{" "}
                                        <InlineMath math="AB+BA=O" />라고 해서 각각의 항이
                                        영행렬이라고 판단할 수는 없습니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            AB+BA=O
                            \quad\not\Rightarrow\quad
                            AB=O
                        `}
                                    />

                                    <p>
                                        여러 행렬의 곱은 순서를 임의로 바꾸지 않고
                                        결합법칙을 이용하여 주어진 부분을 먼저 계산해야 합니다.
                                    </p>

                                    <BlockMath
                                        math={String.raw`
                            BAB\cdot BAB
                            =BA(B^2)AB
                        `}
                                    />

                                </div>

                            </div>

                            {/* 정답 */}
                            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-5">

                                <p className="font-bold text-emerald-300">
                                    따라서 옳은 것은 ㄱ, ㄷ이다.
                                </p>

                                <BlockMath
                                    math={String.raw`
                        {\text{③}}
                    `}
                                />

                            </div>

                        </div>

                    </details>

                </div>

                {/* 핵심 정리 */}
                <div className="mt-8 rounded-2xl border border-red-500/30 bg-red-500/5 p-6">

                    <h3 className="text-xl font-bold text-red-300">
                        핵심 정리
                    </h3>

                    <div className="mt-5 space-y-5">

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-semibold text-white">
                                ① 행렬의 곱셈에서는 일반적으로 교환법칙이 성립하지 않는다.
                            </p>

                            <BlockMath math="AB\ne BA" />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-semibold text-white">
                                ② 두 행렬의 곱이 영행렬이어도 어느 한 행렬이 영행렬이라고 단정할 수 없다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        AB=O
                        \quad\not\Rightarrow\quad
                        A=O\ \text{또는}\ B=O
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-semibold text-white">
                                ③ 행렬의 제곱이 영행렬이어도 원래 행렬이 영행렬이라고 할 수 없다.
                            </p>

                            <BlockMath
                                math={String.raw`
                        A^2=O
                        \quad\not\Rightarrow\quad
                        A=O
                    `}
                            />

                        </div>

                        <div className="rounded-xl border border-white/10 bg-black/20 p-5">

                            <p className="font-semibold text-white">
                                ④ 같은 행렬이 곱해져 있어도 일반적으로 약분할 수 없다.
                            </p>

                            <BlockMath
                                math={String.raw`
            AB=AC
            \quad\not\Rightarrow\quad
            B=C
        `}
                            />

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
};